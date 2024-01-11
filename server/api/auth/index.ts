import { zValidator } from '@hono/zod-validator'
import { eq } from 'drizzle-orm'
import { Hono } from 'hono'
import { HTTPException } from 'hono/http-exception'
import { sign } from 'hono/jwt'
import { object, string } from 'zod'
import { db } from '../../db/client'
import { users } from '../../db/schema/users'
import { authenticated } from './middlewares'

export const auth = new Hono()

const signUp = object({
  name: string().min(2).max(255),
  username: string()
    .min(4)
    .max(20)
    .regex(/^[a-zA-Z0-9_]+$/),
  email: string().email().max(255),
  avatar: string().url().max(255),
  password: string().min(8).max(255),
})

auth.post('/sign-up', zValidator('json', signUp), async (c) => {
  const data = c.req.valid('json')

  try {
    await db.insert(users).values({
      name: data.name,
      username: data.username,
      email: data.email,
      avatar: data.avatar,
      password: data.password,
    })

    return c.json({
      message: 'User created',
    })
  } catch (err) {
    console.error('Error trying to create user:', err)
    return c.json(
      {
        error: 'Error trying to create user',
        info: 'Username or email is already taken',
      },
      {
        status: 409,
      },
    )
  }
})

const ONE_DAY = 1000 * 60 * 60 * 24

const signIn = object({
  username: string().min(4).max(20),
  password: string().min(8).max(255),
})

auth.post('/sign-in', zValidator('json', signIn), async (c) => {
  const data = c.req.valid('json')
  const [user] = await db
    .select()
    .from(users)
    .where(eq(users.username, data.username))

  if (!user) {
    throw new HTTPException(404, {
      message: 'User not found',
    })
  }

  console.log(user)

  if (user.password !== data.password) {
    throw new HTTPException(401, {
      message: 'Invalid password',
    })
  }

  const token = await sign(
    {
      iss: 'api.share.asynched.tech',
      sub: user.id,
      iat: new Date(),
      exp: new Date(Date.now() + ONE_DAY),
    },
    'secret',
  )

  return c.json({
    token,
  })
})

auth.get('/profile', authenticated, async (c) => {
  const [{ password: _, ...user }] = await db
    .select()
    .from(users)
    .where(eq(users.id, c.var.userId))

  return c.json(user)
})

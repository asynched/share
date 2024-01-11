import { MiddlewareHandler } from 'hono'
import { HTTPException } from 'hono/http-exception'
import { verify } from 'hono/jwt'

export const authenticated: MiddlewareHandler<{
  Variables: {
    userId: string
  }
}> = async (c, next) => {
  const token = c.req.header('authorization')?.replace('Bearer ', '')

  if (!token) {
    throw new HTTPException(401, {
      message: 'Unauthorized',
    })
  }

  try {
    const data = await verify(token, 'secret')

    c.set('userId', data.sub)

    return next()
  } catch (err) {
    console.error('Error trying to verify token:', err)
    throw new HTTPException(401, {
      message: 'Unauthorized',
    })
  }
}

import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { auth } from '../api/auth'

export const config = {
  runtime: 'edge',
}

export const app = new Hono()

app
  .get('/', (c) =>
    c.json({
      service: 'Share API',
      version: '1.0',
      date: new Date(),
    }),
  )
  .get('/health', (c) =>
    c.json({
      status: 'up',
      time: new Date(),
    }),
  )
  .route('/auth', auth)

export default handle(app)

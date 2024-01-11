import { serve } from '@hono/node-server'
import { app } from './api'

serve(app, (info) => {
  console.log(`Server is listening on: http://${info.address}:${info.port}`)
})

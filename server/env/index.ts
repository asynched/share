import { object, string } from 'zod'
import 'dotenv/config'

const envSchema = object({
  DATABASE_URL: string().url(),
  DATABASE_TOKEN: string(),
})

export const env = envSchema.parse(process.env)

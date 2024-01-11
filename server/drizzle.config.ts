import type { Config } from 'drizzle-kit'
import { env } from './env'

export default {
  driver: 'turso',
  out: 'drizzle',
  schema: 'db/schema',
  dbCredentials: {
    url: env.DATABASE_URL,
    authToken: env.DATABASE_TOKEN,
  },
} satisfies Config

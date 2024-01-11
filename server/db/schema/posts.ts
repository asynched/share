import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { users } from './users'

export const posts = sqliteTable('posts', {
  id: text('id')
    .primaryKey()
    .$default(() => crypto.randomUUID()),
  title: text('title').notNull(),
  content: text('content').notNull(),
  thumbnail: text('thumbnail').notNull(),
  tags: text('tags', { mode: 'json' }).notNull().$type<string[]>(),
  userId: text('user_id')
    .notNull()
    .references(() => users.id),
  createdAt: integer('created_at', { mode: 'timestamp_ms' })
    .notNull()
    .$default(() => new Date()),
  updatedAt: integer('updated_at', { mode: 'timestamp_ms' })
    .notNull()
    .$default(() => new Date()),
})

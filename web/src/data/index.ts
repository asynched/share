export type Post = {
  id: string
  title: string
  tags: string[]
  comments: number
  likes: number
  readTime: number
  previewImage: string
  user: {
    id: string
    name: string
    username: string
    avatar: string
  }
  createdAt: Date
}

export const posts: Post[] = [
  {
    id: crypto.randomUUID(),
    title: 'Creating your own search engine in Rust',
    tags: ['Rust', 'Search Engine', 'Web Development'],
    comments: 12,
    likes: 32,
    readTime: 12,
    previewImage:
      'https://cdn.sanity.io/images/tlr8oxjg/production/9f15109746df254c5a030a7ba9239f8a4bb5dadb-1456x816.png?w=3840&q=100&fit=clip&auto=format',
    user: {
      id: crypto.randomUUID(),
      name: 'Eder Lima',
      username: 'asynched',
      avatar: 'https://github.com/asynched.png?size=128',
    },
    createdAt: new Date(),
  },
  {
    id: crypto.randomUUID(),
    title: 'Optimizing your SQL database',
    tags: ['SQL', 'Database', 'Web Development'],
    comments: 10,
    likes: 40,
    readTime: 7,
    previewImage:
      'https://cdn.sanity.io/images/tlr8oxjg/production/9f15109746df254c5a030a7ba9239f8a4bb5dadb-1456x816.png?w=3840&q=100&fit=clip&auto=format',
    user: {
      id: crypto.randomUUID(),
      name: 'Eder Lima',
      username: 'asynched',
      avatar: 'https://github.com/asynched.png?size=128',
    },
    createdAt: new Date(),
  },
  {
    id: crypto.randomUUID(),
    title: 'Getting started with Go',
    tags: ['Go', 'Languages'],
    comments: 14,
    likes: 21,
    readTime: 8,
    previewImage:
      'https://cdn.sanity.io/images/tlr8oxjg/production/9f15109746df254c5a030a7ba9239f8a4bb5dadb-1456x816.png?w=3840&q=100&fit=clip&auto=format',
    user: {
      id: crypto.randomUUID(),
      name: 'Eder Lima',
      username: 'asynched',
      avatar: 'https://github.com/asynched.png?size=128',
    },
    createdAt: new Date(),
  },
]

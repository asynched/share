<script lang="ts">
  import Header from 'src/components/common/Header.svelte'
  import PostCard from 'src/components/post/PostCard.svelte'
  import { posts } from 'src/data/index'

  const links = [
    {
      name: '🏠 Home',
      href: '/',
    },
    {
      name: '🗃️ Reading list',
      href: '/',
    },
    {
      name: '🏷️ Tags',
      href: '/',
    },
    {
      name: '📖 Guides',
      href: '/',
    },
  ]

  const tags = ['Rust', 'JavaScript', 'React', 'Go', 'Postgres', 'Docker']
</script>

<Header />

<div class="px-4 xl:px-0 grid grid-cols-8 gap-8 max-w-screen-xl mx-auto w-full">
  <nav class="hidden md:block md:col-span-2">
    <div
      class="mb-8 bg-zinc-900 border border-zinc-800 p-4 rounded flex flex-col"
    >
      <h1 class="mb-2 text-xl font-bold tracking-tighter leading-tight">
        Share is a community of thousands of amazing developers
      </h1>
      <p class="mb-4 text-zinc-500">
        We're a place where coders share and stay up to date with tech
      </p>
      <button
        class="bg-gradient-to-br from-pink-600 to-purple-600 py-1 rounded"
      >
        Create account
      </button>
    </div>
    <div>
      <h2 class="mb-2 text-xl font-bold tracking-tighter">Menu</h2>
      <ul class="mb-8 grid gap-2">
        {#each links as link (link.href)}
          <li
            class="px-4 py-2 transition ease-in-out border border-transparent hover:border-zinc-800 hover:bg-zinc-900 rounded"
          >
            <a href={link.href}>{link.name}</a>
          </li>
        {/each}
      </ul>
    </div>
    <div>
      <h2 class="mb-2 text-xl font-bold tracking-tighter">Popular tags</h2>
      <ul>
        {#each tags as tag}
          <li
            class="px-4 py-2 transition ease-in-out border border-transparent hover:border-zinc-800 hover:bg-zinc-900 rounded"
          >
            <a href="/">#{tag.toLowerCase()}</a>
          </li>
        {/each}
      </ul>
    </div>
  </nav>
  <main class="mb-8 col-span-8 md:col-span-6 lg:col-span-4 grid gap-8">
    {#each posts as post}
      <PostCard {post} />
    {/each}
  </main>
  <nav class="hidden lg:block lg:col-span-2">
    <h2 class="mb-2 text-2xl font-bold tracking-tighter">Trending</h2>
    <ul class="mb-8 grid gap-2">
      {#each posts as post, index (post.id)}
        <li
          class="py-2 px-4 rounded border border-transparent transition ease-in-out hover:bg-zinc-900 hover:border-zinc-800"
        >
          <a href="/">{index + 1}. {post.title}</a>
          <ul class="flex flex-wrap gap-2 items-center">
            {#each post.tags as tag}
              <li class="text-sm text-zinc-500">#{tag.toLowerCase()}</li>
            {/each}
          </ul>
        </li>
      {/each}
    </ul>
    <div class="p-4 bg-gradient-to-br from-pink-600 to-purple-600 rounded">
      <p class="text-sm">Like the project?</p>
      <h2 class="text-2xl font-bold tracking-tighter">
        Give us a star on GitHub!
      </h2>
      <a
        class="hover:underline text-sm"
        target="_blank"
        href="https://github.com/asynched/share">Click here</a
      >
    </div>
  </nav>
</div>

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

<div class="grid grid-cols-8 gap-9 max-w-screen-xl mx-auto w-full">
  <nav class="col-span-2">
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
        class="bg-gradient-to-br from-pink-600 to-purple-600 py-1 rounded shadow-lg shadow-pink-600/25"
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
  <main class="mb-8 col-span-4 grid gap-8">
    {#each posts as post}
      <PostCard {post} />
    {/each}
  </main>
  <nav class="col-span-2">nav 2</nav>
</div>

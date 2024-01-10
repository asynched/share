<script lang="ts">
  import type { Post } from 'src/data/index'

  export let post: Post
</script>

<div class="rounded overflow-hidden bg-zinc-900 border border-zinc-800">
  <img src={post.previewImage} alt="Preview" class="h-48 w-full object-cover" />
  <div class="p-4 flex gap-4">
    <img
      src={post.user.avatar}
      alt={post.user.username}
      class="w-8 h-8 rounded-full object-cover"
    />
    <div class="w-full">
      <p>{post.user.name} (@{post.user.username})</p>
      <p class="text-sm text-zinc-500">
        {post.createdAt.toLocaleDateString('en-GB', {
          year: '2-digit',
          month: 'long',
          day: 'numeric',
        })}
      </p>
      <h2 class="mb-2 text-3xl font-bold tracking-tighter">
        {post.title}
      </h2>
      <ul class="mb-2 flex gap-2">
        {#each post.tags as tag}
          <a
            href="/"
            class="text-sm py-1 px-2 rounded border border-transparent transition ease-in-out hover:bg-zinc-800 hover:border-zinc-700"
          >
            #{tag}
          </a>
        {/each}
      </ul>
      <div class="flex justify-end gap-4">
        <p class="text-zinc-400">{post.readTime} min read</p>
        <div class="flex items-center gap-1 text-zinc-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
            />
          </svg>
          <span>{post.likes}</span>
        </div>
        <div class="flex items-center gap-1 text-zinc-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
          <span>{post.comments}</span>
        </div>
      </div>
    </div>
  </div>
</div>

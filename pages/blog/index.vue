<template>
  <div class="p-16 flex flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
    <div class="py-12 sm:py-16 ">
      <div class="mx-auto max-w-5xl px-4 sm:px-6">
        <div class="mx-auto max-w-xl lg:mx-0">
          <h2 class="text-3xl font-semibold tracking-tight  sm:text-4xl">My Blog</h2>
          <p class="mt-2 text-base leading-7 ">
            Here is my little blog to share my different experiences.</p>
        </div>

        <div
            class="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 border-t border-gray-200 pt-8 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <article v-for="post in posts" :key="post.id"
                   class="flex flex-col items-start  rounded-md shadow overflow-hidden transition-all duration-300 hover:shadow-md">
              <ThePost :post="post"/>
          </article>
        </div>
      </div>
    </div>
  </div>
  <footer class="mt-auto">
    <TheFooter />
  </footer>
</template>

<script setup>
definePageMeta({
  layout: 'nav',
});
const {data: posts} = await useFetch('/api/post');
</script>
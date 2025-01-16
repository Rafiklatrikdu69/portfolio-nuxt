<template>
  <div class="p-16 flex flex-col min-h-screen from-white-50 to-white dark:from-gray-900 dark:to-gray-800">
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
            <div class="relative w-full aspect-[16/9] overflow-hidden">
              <NuxtImg
                  :src="post.image"
                  :alt="post.title"
                  class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  format="webp"
                  loading="lazy"
              />
              <a :href="post.image"
                 class="absolute top-3 right-3 rounded-full bg-white/90 px-2.5 py-1 text-sm font-medium text-gray-600 hover:bg-white">
                {{ post.tag }}
              </a>
            </div>

            <div class="flex flex-col flex-1 p-4">
              <div class="flex items-center gap-x-3 text-xs">
                <time :datetime="post.created_at" >{{ formatDate(post.created_at) }}</time>
              </div>

              <div class="group relative flex-1">
                <h3 class="mt-2 text-base font-semibold leading-6 group-hover:text-gray-600">
                  <NuxtLink :to="'/blog/'+post.id">
                    <span class="absolute inset-0"/>
                    {{ post.title }}
                  </NuxtLink>
                </h3>
                <p class="mt-3 line-clamp-2 text-sm leading-6 ">{{ post.content }}</p>
              </div>

              <div class="relative mt-6 flex items-center gap-x-3">
                <NuxtImg
                    :src="post.profile"
                    alt="This is an image of my blog"
                    class="h-8 w-8 rounded-full bg-gray-50 object-cover"
                    format="webp"
                    loading="lazy"
                />
                <div class="text-sm leading-5">
                  <p class="font-semibold ">
                    <a :href="post.profile">
                      <span class="absolute inset-0"/>
                      {{ post.author }}
                    </a>
                  </p>
                  <p class="text-xs">{{ post.role }}</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'nav',
});
const {data: posts} = await useFetch('/api/post')

function formatDate(dateString, locale = 'en-US', options = {}) {
  const defaultOptions = { dateStyle: 'medium', timeStyle: 'short' };
  const date = new Date(dateString);

  return new Intl.DateTimeFormat(locale, { ...defaultOptions, ...options }).format(date);
}
</script>
<script setup>
defineProps(['post'])
function formatDate(dateString, locale = 'en-US', options = {}) {
  const defaultOptions = { dateStyle: 'medium', timeStyle: 'short' };
  const date = new Date(dateString);

  return new Intl.DateTimeFormat(locale, { ...defaultOptions, ...options }).format(date);
}
</script>
<template>
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
</template>
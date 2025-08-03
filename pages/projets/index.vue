<script setup>
definePageMeta({
  layout: 'nav'
})
const { data: projets } = await useFetch('/api/projets')
</script>

<template>
  <main class="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pt-16">
    <div class="container mx-auto px-4 md:px-6">
      <h1 class="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white pt-3">
        Mes Projets
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div class="flex justify-center" v-for="p in projets" :key="p.id">
          <TheProjet :projet="p" class="w-full" />
        </div>
      </div>
    </div>
    <TheFooter class="mt-auto pt-8" />
  </main>
</template>

<style scoped>
/* Styles personnalisés pour les ajustements précis si nécessaire */
:deep(.project-image) {
  display: block;
  margin-left: auto;
  margin-right: auto;
  object-fit: cover;
  width: 100%;
  height: auto;
}
</style>

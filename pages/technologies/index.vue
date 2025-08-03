<script setup>
definePageMeta({
  layout: 'nav'
})
const columns = [
  {
    key: 'title',
    label: 'Langages - Outils - Stockage'
  },
  {
    key: 'name',
    label: 'Nom'
  }
]
const page = ref(1)
const pageCount = 3
const { data: cat_technos } = await useFetch('/api/categories/technologies')
const selectedTab = ref(1)
// Animation du flou uniquement pour le tableau
const tableBlur = ref(true)
// Initialiser avec un flou, puis l'enlever après le premier rendu
onMounted(() => {
  setTimeout(() => {
    tableBlur.value = false
  }, 800)
})
// Ajouter un flou lors des changements d'onglet ou de page
watch(selectedTab, () => {
  page.value = 1
  tableBlur.value = true
  setTimeout(() => {
    tableBlur.value = false
  }, 800)
})
watch(page, () => {
  tableBlur.value = true
  setTimeout(() => {
    tableBlur.value = false
  }, 600)
})
const rows = computed(() => {
  const category = cat_technos.value.find(cat => cat.id === selectedTab.value)
  return category?.technologie.slice((page.value - 1) * pageCount, (page.value) * pageCount)
})
</script>
<template>
  <div class="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 p-0">
    <main class="flex-grow from-white-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div class="mb-12 text-center pt-4">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mes Technologies
          </h1>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Explorez les outils et technologies avec lesquels je travaille
          </p>
        </div>
        <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          <div class="flex flex-wrap border-b border-gray-200 dark:border-gray-700">
            <div class="w-full">
              <nav class="flex space-x-4 px-4 flex-wrap" aria-label="Onglets">
                <button
                    v-for="cat in cat_technos"
                    :key="cat.id"
                    @click="selectedTab = cat.id"
                    class="px-5 py-4 text-sm font-medium transition-all duration-200 relative"
                    :class="[
                    selectedTab === cat.id
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                  ]"
                >
                  {{ cat.name }}
                  <div
                      v-if="selectedTab === cat.id"
                      class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400"
                  ></div>
                </button>
              </nav>
            </div>
          </div>
          <div class="p-4 sm:p-6">
            <section
                v-for="cat in cat_technos"
                :key="cat.id"
                v-show="selectedTab === cat.id"
                class="space-y-6"
            >
              <!-- Conteneur pour le tableau avec l'animation de flou -->
              <div class="overflow-hidden bg-white dark:bg-gray-900 rounded-lg shadow">
                <UTable
                    :rows="rows"
                    :columns="columns"
                    class="divide-y divide-gray-200 dark:divide-gray-700 transition-all duration-300"
                    :class="{'table-blur': tableBlur}"
                >
                  <template #title-data="{ row }">
                    <div class="flex items-center">
                      <NuxtImg
                          class="w-10 h-10 rounded-lg object-cover shadow-sm hover:shadow-md transition-shadow duration-200 image-hover"
                          :src="`img/${row.image}`"
                          loading="lazy"
                      />
                    </div>
                  </template>
                </UTable>
              </div>
              <div class="flex justify-end border-t border-gray-200 dark:border-gray-700 pt-4">
                <UPagination
                    v-model="page"
                    :page-count="pageCount"
                    :total="cat.technologie.length"
                    class="inline-flex shadow-sm rounded-md"
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
    <footer class="mt-auto">
      <TheFooter />
    </footer>
  </div>
</template>
<style scoped>
.dark {
  color-scheme: dark;
}
@media (prefers-color-scheme: dark) {
  .dark {
    color-scheme: dark;
  }
}
.tab-transition {
  transition: all 0.1s ease-in-out;
}
.image-hover {
  transition: transform 0.1s ease-in-out;
}
.image-hover:hover {
  transform: scale(1.05);
}
/* Animation de flou pour le tableau uniquement */
.table-blur {
  filter: blur(5px);
  opacity: 0.7;
}
/* Transition pour l'animation de flou */
.transition-all {
  transition: filter 0.2s ease, opacity 0.2s ease;
}
</style>

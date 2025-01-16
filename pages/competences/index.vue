<script setup async>
definePageMeta({
  layout: 'nav',
});

const items = [];
const { data: competences } = await useFetch('/api/competences');
competences.value.map(competences => {
  items.push({
    label: competences.name,
    content: competences.niveau,
    projet: competences.projet
  });
});
</script>

<template>
  <div class="flex flex-col min-h-screen  from-white-50 to-white dark:from-gray-900 dark:to-gray-800">
    <main class="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div class="mb-12 text-center">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          My Skills
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          Explore my skills, experience, and related projects
        </p>
      </div>

      <div class="max-w-full  mx-auto">
        <UAccordion
            :items="items"
            class="overflow-hidden "
        >
          <template #item="{ item }">
            <div class="flex flex-col gap-6 p-6">
              <!-- Skills Section -->
              <div class="space-y-6">
                <div
                    v-for="c in item.content"
                    :key="c.id"
                    class="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 transition-all duration-300 hover:shadow-md"
                >
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                    {{ c.name }}
                  </h3>
                  <p class="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                    {{ c.description }}
                  </p>
                </div>
              </div>

              <div class="mt-8">
                <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  Related Projects
                </h2>

                <p
                    v-if="item.projet.length === 0"
                    class="text-gray-500 dark:text-gray-400 italic text-center py-4"
                >
                  No linked projects yet.
                </p>

                <div
                    class="grid gap-6 place-items-center p-2"
                    :class="{ 'sm:grid-cols-1': item.projet.length === 1, 'sm:grid-cols-2': item.projet.length === 2 }"
                >
                  <TheProjet
                      v-for="p in item.projet"
                      :key="p.id"
                      :projet="p"
                      class="transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  />
                </div>
              </div>
            </div>
          </template>
        </UAccordion>
      </div>
    </main>

    <footer class="mt-auto">
      <TheFooter />
    </footer>
  </div>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgb(243 244 246);
}

::-webkit-scrollbar-thumb {
  background: rgb(156 163 175);
  border-radius: 4px;
}

.dark ::-webkit-scrollbar-track {
  background: rgb(17 24 39);
}

.dark ::-webkit-scrollbar-thumb {
  background: rgb(75 85 99);
}

@media screen and (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
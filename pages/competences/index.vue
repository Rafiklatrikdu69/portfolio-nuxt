<script async setup>
import { ref } from 'vue';

definePageMeta({
  layout: 'nav',
});

const isLoading = ref(true);
const items = ref([]);

const { data: competences } = await useFetch('/api/competences');

competences.value.forEach(competence => {
  items.value.push({
    label: competence.name,
    content: competence.niveau,
    projet: competence.projet,
  });
});

isLoading.value = false;
</script>

<template>
  <div v-if="!isLoading">
    <div class="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 p-0">
      <main class="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div class="mb-12 text-center pt-4">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h1>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Explore my skills, experience, and related projects
          </p>
        </div>

        <div class="max-w-full mx-auto">
          <UAccordion :items="items" class="overflow-hidden">
            <template #item="{ item }">
              <div class="flex flex-col gap-6">
                <!-- Skills Section -->
                <div class="space-y-6">
                  <div
                      v-for="c in item.content"
                      :key="c.id"
                      class="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 shadow-md transition-all duration-300 hover:shadow-lg flex items-center justify-center"
                  >
                    <div class="text-center">
                      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {{ c.name }}
                      </h3>
                      <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {{ c.description }}
                      </p>
                    </div>
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
                      class="grid gap-6 place-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                  >
                    <TheProjet v-for="p in item.projet"
                               :key="p.id"
                               :projet="p" class="w-full rounded-lg shadow-lg overflow-hidden" />
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

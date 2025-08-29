<script setup>
definePageMeta({
  layout: 'nav'
});

const redirectToTechnologies = () => {
  navigateTo('/technologies');
};

// Utilisation de useAsyncData pour récupérer les expériences depuis l'API
const { data: experiences } = await useAsyncData('experiences', () =>
  $fetch('/api/apex/experiences')
);
</script>

<template>
  <div class="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 p-0 py-10 pt-16 p-6">
    <main class="max-w-7xl mx-auto px-6 md:px-12 xl:px-0 py-12">
      <!-- Section Hero -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div class="space-y-8">
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
            Développeur Full-stack <span class="text-blue-600 dark:text-blue-400">en entreprise</span>
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Salut ! Je suis Rafik ! Étudiant en informatique, passionné de codage et toujours prêt à repousser les limites de ce qui est possible, je m'immerge dans la technologie pour transformer chaque idée en un projet concret.
          </p>
          <a href="https://bff.ecoindex.fr/redirect/?url=https://portfolio-rafiki.vercel.app/" target="_blank">
            <img src="https://bff.ecoindex.fr/badge/?&url=https://portfolio-rafiki.vercel.app/" alt="Badge Ecoindex"/>
          </a>
          <div class="pt-4">
            <button @click="redirectToTechnologies" class="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              Explorer les Technologies
            </button>
          </div>
        </div>
        <div class="relative">
          <div class="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl blur opacity-60"></div>
          <div class="relative grid grid-cols-2 gap-4">
            <div class="space-y-4">
              <img src="public/img/trading.jpeg" alt="Visualisation de trading" class="rounded-xl object-cover w-full h-48 md:h-64 shadow-lg hover:shadow-xl transition-shadow duration-300" />
              <img src="public/img/cybersecu.jpeg" alt="Concept de cybersécurité" class="rounded-xl object-cover w-full h-48 md:h-64 shadow-lg hover:shadow-xl transition-shadow duration-300" />
            </div>
            <div class="space-y-4 pt-8">
              <img src="public/img/starterpackrafik.png" alt="Développement web" class="rounded-xl object-cover w-full h-48 md:h-64 shadow-lg hover:shadow-xl transition-shadow duration-300" />
              <img src="public/img/devops.jpeg" alt="Workflow DevOps" class="rounded-xl object-cover w-full h-48 md:h-64 shadow-lg hover:shadow-xl transition-shadow duration-300" />
            </div>
          </div>
        </div>
      </div>

      <!-- Section Timeline Expérience -->
      <div class="mt-24 mb-16">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Expérience Professionnelle</h2>

        <div class="relative max-w-6xl mx-auto">
          <!-- Timeline centrale pour desktop -->
          <div class="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>

          <!-- Timeline latérale pour mobile -->
          <div class="md:hidden absolute left-8 top-0 w-0.5 h-full bg-gradient-to-b from-blue-600 to-purple-600"></div>
          <div class="space-y-12 md:space-y-16">
            <div v-for="(experience, index) in experiences" :key="experience.Id" class="relative">
              <!-- Layout Mobile -->
              <div class="md:hidden">
                <div class="ml-16 mb-4">
                  <div class="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-lg inline-block text-sm font-medium">
                    {{ experience.DateExp }}
                  </div>
                </div>

                <div class="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-2 border-white dark:border-gray-900"></div>

                <div class="ml-16">
                  <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                    <div class="flex flex-col gap-3 mb-4">
                      <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ experience.Title }}</h3>
                      <span class="px-3 py-1 text-sm font-medium rounded-full w-fit" :class="experience.Status === 'En cours' ? 'text-blue-600 bg-blue-100 dark:text-blue-300 dark:bg-blue-900/30' : 'text-green-600 bg-green-100 dark:text-green-300 dark:bg-green-900/30'">
                        {{ experience.Status }}
                      </span>
                    </div>
                    <p class="mb-4 text-base text-gray-600 dark:text-gray-300">
                      {{ experience.Description }}
                    </p>
                    <div class="space-y-2 mb-4">
                      <div v-for="task in experience.Tasks.split(',')" :key="task" class="flex items-start">
                        <span class="flex-shrink-0 mt-1 text-blue-500 dark:text-blue-400">
                          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                          </svg>
                        </span>
                        <p class="ml-2 text-gray-500 dark:text-gray-400 text-sm">{{ task }}</p>
                      </div>
                    </div>
                    <div class="flex flex-wrap gap-2">
                      <span v-for="tag in experience.Tags.split(',')" :key="tag" class="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded-full">{{ tag }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <!-- Layout Desktop -->
              <div class="hidden md:block">
                <div class="flex items-center justify-between">
                  <!-- Contenu à gauche (pour les éléments avec imagePosition: left) -->
                  <div v-if="experience.ImagePosition === 'left'" class="w-5/12">
                    <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                      <div class="flex flex-col gap-3 mb-4">
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ experience.Title }}</h3>
                        <span class="px-3 py-1 text-sm font-medium rounded-full w-fit" :class="experience.Status === 'En cours' ? 'text-blue-600 bg-blue-100 dark:text-blue-300 dark:bg-blue-900/30' : 'text-green-600 bg-green-100 dark:text-green-300 dark:bg-green-900/30'">
                          {{ experience.Status }}
                        </span>
                      </div>
                      <p class="mb-4 text-base text-gray-600 dark:text-gray-300">
                        {{ experience.Description }}
                      </p>
                      <div class="space-y-2 mb-4">
                        <div v-for="task in experience.Tasks.split(',')" :key="task" class="flex items-start">
                          <span class="flex-shrink-0 mt-1 text-blue-500 dark:text-blue-400">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                          </span>
                          <p class="ml-2 text-gray-500 dark:text-gray-400">{{ task }}</p>
                        </div>
                      </div>
                      <div class="flex flex-wrap gap-2">
                        <span v-for="tag in experience.Tags.split(',')" :key="tag" class="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded-full">{{ tag }}</span>
                      </div>
                    </div>
                  </div>
                  <!-- Date à gauche (pour les éléments avec imagePosition: right) -->
                  <div v-if="experience.ImagePosition === 'right'" class="w-5/12 flex justify-end">
                    <div class="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-lg font-medium">
                      {{ experience.DateExp }}
                    </div>
                  </div>
                  <!-- Marqueur central -->
                  <div class="w-2/12 flex justify-center">
                    <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white dark:border-gray-900">
                      <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                  </div>
                  <!-- Date à droite (pour les éléments avec imagePosition: left) -->
                  <div v-if="experience.ImagePosition === 'left'" class="w-5/12">
                    <div class="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-lg font-medium w-fit">
                      {{ experience.DateExp }}
                    </div>
                  </div>
                  <!-- Contenu à droite (pour les éléments avec imagePosition: right) -->
                  <div v-if="experience.ImagePosition === 'right'" class="w-5/12">
                    <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                      <div class="flex flex-col gap-3 mb-4">
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ experience.Title }}</h3>
                        <span class="px-3 py-1 text-sm font-medium rounded-full w-fit" :class="experience.Status === 'En cours' ? 'text-blue-600 bg-blue-100 dark:text-blue-300 dark:bg-blue-900/30' : 'text-green-600 bg-green-100 dark:text-green-300 dark:bg-green-900/30'">
                          {{ experience.Status }}
                        </span>
                      </div>
                      <p class="mb-4 text-base text-gray-600 dark:text-gray-300">
                        {{ experience.Description }}
                      </p>
                      <div class="space-y-2 mb-4">
                        <div v-for="task in experience.Tasks.split(',')" :key="task" class="flex items-start">
                          <span class="flex-shrink-0 mt-1 text-blue-500 dark:text-blue-400">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                          </span>
                          <p class="ml-2 text-gray-500 dark:text-gray-400">{{ task }}</p>
                        </div>
                      </div>
                      <div class="flex flex-wrap gap-2">
                        <span v-for="tag in experience.Tags.split(',')" :key="tag" class="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded-full">{{ tag }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- Menu burger mobile -->
    <button class="md:hidden fixed top-4 right-4 p-3 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
      <svg class="w-6 h-6 text-gray-700 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </button>
  </div>

  <footer class="mt-auto">
    <TheFooter/>
  </footer>
</template>

<style lang="css" scoped>
/* Animations pour les images */
img {
  transition: transform 0.3s ease-in-out;
}
img:hover {
  transform: scale(1.02);
}
/* Animation hover pour les cartes */
.timeline-item {
  transition: transform 0.3s ease-in-out;
}
.timeline-item:hover {
  transform: translateY(-2px);
}
/* Responsive design - désactiver les animations sur les petits écrans */
@media (prefers-reduced-motion: reduce) {
  img, .timeline-item {
    transition: none;
  }

  img:hover, .timeline-item:hover {
    transform: none;
  }
}
/* Style pour les cartes d'expérience */
.experience-card {
  transition: all 0.3s ease;
}
.experience-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
/* Animation pour les marqueurs de timeline */
.timeline-marker {
  transition: all 0.3s ease;
}
.timeline-marker:hover {
  transform: scale(1.1);
}
</style>

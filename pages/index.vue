<script setup>
definePageMeta({
  layout: 'nav'
})

const items = [{
  name: 'Rafik Bouchenna',
  avatar: { src: 'img/photo-profil.jpeg' }
}]
const redirectToTechnologies = () => {
  navigateTo('/technologies')
}
</script>

<template>
  <body class="min-h-screen  from-white-50 to-white dark:from-gray-900 dark:to-gray-800 py-10 pt-16 p-6">
  <main class="max-w-7xl mx-auto px-6 md:px-12 xl:px-0 py-12">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div class="space-y-8">
        <h1 class="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
         Full-stack Developer  <span class="text-blue-600 dark:text-blue-400">in company</span>
        </h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          Hi! I'm Rafik (or Rafiki for short)! Computer science student, passionate about coding and always ready to push the limits of what is possible, I immerse myself in tech to transform each idea into a concrete project.
        </p>
        <a href="https://bff.ecoindex.fr/redirect/?url=http://portfolio-rafiki.vercel.app/" target="_blank">
          <img src="https://bff.ecoindex.fr/badge/?&url=http://portfolio-rafiki.vercel.app/" alt="Ecoindex Badge" />
        </a>
        <div class="pt-4">
          <button
              @click="redirectToTechnologies"
              class="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Explore Technologies
          </button>
        </div>
      </div>

      <div class="relative">
        <div class="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl blur opacity-60"></div>
        <div class="relative grid grid-cols-2 gap-4">
          <div class="space-y-4">
            <img
                src="public/img/trading.jpeg"
                alt="Trading visualization"
                class="rounded-xl object-cover w-full h-48 md:h-64 shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <img
                src="public/img/cybersecu.jpeg"
                alt="Cybersecurity concept"
                class="rounded-xl object-cover w-full h-48 md:h-64 shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
          <div class="space-y-4 pt-8">
            <img
                src="public/img/web.jpeg"
                alt="Web development"
                class="rounded-xl object-cover w-full h-48 md:h-64 shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <img
                src="public/img/devops.jpeg"
                alt="DevOps workflow"
                class="rounded-xl object-cover w-full h-48 md:h-64 shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  </main>

  <button
      class="md:hidden fixed top-4 right-4 p-3 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <svg class="w-6 h-6 text-gray-700 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
    </svg>
  </button>
  </body>
</template>

<style lang="css" scoped>
img {
  transition: transform 0.3s ease-in-out;
}

img:hover {
  transform: scale(1.02);
}
</style>
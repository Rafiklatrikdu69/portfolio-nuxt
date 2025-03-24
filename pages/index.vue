<script setup>
definePageMeta({
  layout: 'nav'
})

const items = [{
  name: 'Rafik Bouchenna',
  avatar: {src: 'img/photo-profil.jpeg'}
}]
const redirectToTechnologies = () => {
  navigateTo('/technologies')
}
</script>

<template>
  <div class="min-h-screen from-white-50 to-white dark:from-gray-900 dark:to-gray-800 py-10 pt-16 p-6">
    <main class="max-w-7xl mx-auto px-6 md:px-12 xl:px-0 py-12">
      <!-- Hero Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div class="space-y-8">
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
            Full-stack Developer <span class="text-blue-600 dark:text-blue-400">in company</span>
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            Hi! I'm Rafik (or Rafiki for short)! Computer science student, passionate about coding and always ready to
            push the limits of what is possible, I immerse myself in tech to transform each idea into a concrete
            project.
          </p>
          <a href="https://bff.ecoindex.fr/redirect/?url=https://portfolio-rafiki.vercel.app/" target="_blank">
            <img src="https://bff.ecoindex.fr/badge/?&url=https://portfolio-rafiki.vercel.app/" alt="Ecoindex Badge"/>
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
          <div
              class="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl blur opacity-60"></div>
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

      <!-- Improved Experience Timeline Section -->
      <div class="mt-24 mb-16">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Professional Experience</h2>

        <div class="experience-timeline relative max-w-4xl mx-auto">
          <!-- Timeline Line -->
          <div class="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 transform md:translate-x-px"></div>

          <!-- CGI for CEGID Experience -->
          <div class="timeline-item mb-16 md:mb-24 relative grid grid-cols-1 md:grid-cols-7 items-center">
            <!-- Date for desktop -->
            <div class="hidden md:flex md:col-span-3 md:justify-end md:pr-16">
              <div class="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-lg font-medium">
                September 2024 - Present
              </div>
            </div>

            <!-- Timeline marker -->
            <div class="absolute left-0 md:left-1/2 w-10 h-10 bg-blue-600 rounded-full transform -translate-x-1/2 flex items-center justify-center z-10">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>

            <!-- Content -->
            <div class="ml-16 md:ml-0 md:col-span-4 md:pl-32">
              <!-- Date for mobile -->
              <div class="md:hidden mb-3 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-lg inline-block text-sm font-medium">
                September 2024 - Present
              </div>

              <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div class="flex flex-col justify-between items-center mb-3 p-3 gap-1.5">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">Work-Study at CGI for CEGID</h3>
                  <span class="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 dark:text-blue-300 dark:bg-blue-900/30 rounded-full">
                    Current
                  </span>
                </div>

                <p class="mb-4 text-base text-gray-600 dark:text-gray-300">
                  Work-study program in full-stack development at CGI for the client CEGID, focusing on enterprise software solutions.
                </p>

                <div class="space-y-2.5">
                  <div class="flex items-start">
                    <span class="flex-shrink-0 mt-1 text-blue-500 dark:text-blue-400">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                      </svg>
                    </span>
                    <p class="ml-2.5 text-gray-500 dark:text-gray-400">Developed and maintained web applications using modern frameworks</p>
                  </div>
                  <div class="flex items-start">
                    <span class="flex-shrink-0 mt-1 text-blue-500 dark:text-blue-400">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                      </svg>
                    </span>
                    <p class="ml-2.5 text-gray-500 dark:text-gray-400">Conducted code reviews and provided feedback to team members</p>
                  </div>
                </div>

                <div class="mt-6 flex flex-wrap gap-2">
                  <span class="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded-full">B2B</span>
                  <span class="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded-full">Apex Code</span>
                  <span class="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded-full">SOQL</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Salesforce Internship Experience -->
          <div class="timeline-item mb-16 md:mb-0 relative grid grid-cols-1 md:grid-cols-7 items-center">
            <!-- Content first for the second item (desktop) -->
            <div class="hidden md:block md:col-span-3 md:pr-16">
              <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div class="flex justify-between items-center mb-3">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">Salesforce Internship at CGI for Engie</h3>
                  <span class="px-3 py-1 text-sm font-medium text-green-600 bg-green-100 dark:text-green-300 dark:bg-green-900/30 rounded-full">
                    Completed
                  </span>
                </div>

                <p class="mb-4 text-base text-gray-600 dark:text-gray-300">
                  3-month internship in Salesforce development at CGI for the client Engie, focusing on CRM solutions.
                </p>

                <div class="space-y-2.5">
                  <div class="flex items-start">
                    <span class="flex-shrink-0 mt-1 text-blue-500 dark:text-blue-400">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                      </svg>
                    </span>
                    <p class="ml-2.5 text-gray-500 dark:text-gray-400">Developed custom Salesforce applications to meet client requirements</p>
                  </div>
                  <div class="flex items-start">
                    <span class="flex-shrink-0 mt-1 text-blue-500 dark:text-blue-400">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                      </svg>
                    </span>
                    <p class="ml-2.5 text-gray-500 dark:text-gray-400">Configured and managed Salesforce objects and fields</p>
                  </div>
                  <div class="flex items-start">
                    <span class="flex-shrink-0 mt-1 text-blue-500 dark:text-blue-400">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                      </svg>
                    </span>
                    <p class="ml-2.5 text-gray-500 dark:text-gray-400">Created and maintained Apex triggers and classes</p>
                  </div>
                </div>

                <div class="mt-6 flex flex-wrap gap-2">
                  <span class="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded-full">Salesforce</span>
                  <span class="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded-full">Apex</span>
                  <span class="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded-full">Lightning</span>
                </div>
              </div>
            </div>

            <!-- Timeline marker -->
            <div class="absolute left-0 md:left-1/2 w-10 h-10 bg-blue-600 rounded-full transform -translate-x-1/2 flex items-center justify-center z-10">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>

            <!-- Date for desktop -->
            <div class="hidden md:flex md:col-span-4 md:justify-start md:pl-32">
              <div class="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-lg font-medium">
                April 2024 - June 2024
              </div>
            </div>

            <!-- Mobile view (content and date) -->
            <div class="ml-16 md:hidden">
              <!-- Date for mobile -->
              <div class="mb-3 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-lg inline-block text-sm font-medium">
                April 2024 - June 2024
              </div>

              <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                <div class="flex flex-col justify-between items-center mb-3 p-3 gap-1.5">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">Salesforce Internship at CGI for Engie</h3>
                  <span class="px-3 py-1 text-sm font-medium text-green-600 bg-green-100 dark:text-green-300 dark:bg-green-900/30 rounded-full">
                    Completed
                  </span>
                </div>

                <p class="mb-4 text-base text-gray-600 dark:text-gray-300">
                  3-month internship in Salesforce development at CGI for the client Engie, focusing on CRM solutions.
                </p>

                <div class="space-y-2.5">
                  <div class="flex items-start">
                    <span class="flex-shrink-0 mt-1 text-blue-500 dark:text-blue-400">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                      </svg>
                    </span>
                    <p class="ml-2.5 text-gray-500 dark:text-gray-400">Developed custom Salesforce applications to meet client requirements</p>
                  </div>
                  <div class="flex items-start">
                    <span class="flex-shrink-0 mt-1 text-blue-500 dark:text-blue-400">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                      </svg>
                    </span>
                    <p class="ml-2.5 text-gray-500 dark:text-gray-400">Configured and managed Salesforce objects and fields</p>
                  </div>
                  <div class="flex items-start">
                    <span class="flex-shrink-0 mt-1 text-blue-500 dark:text-blue-400">
                      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                      </svg>
                    </span>
                    <p class="ml-2.5 text-gray-500 dark:text-gray-400">Created and maintained Apex triggers and classes</p>
                  </div>
                </div>

                <div class="mt-6 flex flex-wrap gap-2">
                  <span class="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded-full">Salesforce</span>
                  <span class="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded-full">Apex</span>
                  <span class="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded-full">Lightning</span>
                </div>
              </div>
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
  </div>
  <footer class="mt-auto">
    <TheFooter/>
  </footer>
</template>

<style lang="css" scoped>
img {
  transition: transform 0.3s ease-in-out;
}

img:hover {
  transform: scale(1.02);
}

.timeline-item {
  transition: transform 0.3s ease-in-out;
}

.timeline-item:hover {
  transform: translateY(-5px);
}

@media (prefers-reduced-motion: reduce) {
  img, .timeline-item {
    transition: none;
  }

  img:hover, .timeline-item:hover {
    transform: none;
  }
}
</style>
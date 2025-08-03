<script setup>
definePageMeta({
  layout: 'nav'
})
const route = useRoute();
const { id } = route.params;
const isLoading = ref(true)
const error = ref(null)
const animationComplete = ref(false)
const { data: projet, pending, error: fetchError } = await useFetch(
    `/api/projets/${id}/technologies`,
    {
      key: id,
      onResponse() {
        isLoading.value = false
        setTimeout(() => {
          animationComplete.value = true
        }, 500)
      },
      onResponseError() {
        error.value = 'Échec du chargement des détails du projet'
        isLoading.value = false
      }
    }
)
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <!-- État de chargement -->
      <div v-if="pending" class="flex flex-col justify-center items-center min-h-[60vh] space-y-6">
        <div class="loader">
          <svg class="circular" viewBox="25 25 50 50">
            <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-miterlimit="10" />
          </svg>
        </div>
        <p class="text-gray-600 dark:text-gray-300 animate-pulse">Chargement des détails du projet...</p>
      </div>
      <!-- État d'erreur -->
      <div
          v-else-if="error"
          class="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-8 text-center shadow-lg max-w-2xl mx-auto my-12 transform transition-all duration-500 animate-fade-in"
      >
        <div class="flex flex-col items-center">
          <div class="w-16 h-16 flex items-center justify-center rounded-full bg-red-100 dark:bg-red-800/50 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-red-600 dark:text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h3 class="text-lg font-medium text-red-800 dark:text-red-300 mb-2">Quelque chose s'est mal passé</h3>
          <p class="text-red-600 dark:text-red-400 mb-6">{{ error }}</p>
          <button
              @click="$router.go(-1)"
              class="px-6 py-3 bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-200 rounded-full hover:bg-red-200 dark:hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            Retour
          </button>
        </div>
      </div>
      <!-- État de succès -->
      <div v-else-if="projet" class="space-y-8">
        <!-- Navigation Fil d'Ariane -->
        <nav class="breadcrumb-container">
          <ol class="flex items-center space-x-2 text-gray-500 dark:text-gray-400 mb-8 pt-2 animate-fade-in">
            <li>
              <NuxtLink
                  to="/"
                  class="hover:text-gray-700 dark:hover:text-gray-300 transition-colors flex items-center"
              >
                Accueil
              </NuxtLink>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li>
              <NuxtLink
                  to="/projets"
                  class="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
              >
                Projets
              </NuxtLink>
            </li>
            <li>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </li>
            <li>
              <span class="text-gray-900 dark:text-white font-medium">{{ projet.name || 'Détails du projet' }}</span>
            </li>
          </ol>
        </nav>
        <!-- Détails du projet -->
        <div
            class="project-container overflow-hidden rounded-xl shadow-2xl transform transition-all duration-500"
            :class="{'scale-in': animationComplete}"
        >
          <TheProjetDetail :projet="projet" />
        </div>
        <!-- Bouton Retour -->
        <div class="flex justify-center mt-12 animate-fade-in" style="animation-delay: 0.5s">
          <button
              @click="$router.go(-1)"
              class="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-3"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Retour aux projets</span>
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
/* Animation keyframes */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes scaleIn {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
@keyframes rotator {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(270deg); }
}
@keyframes dash {
  0% { stroke-dashoffset: 187; }
  50% {
    stroke-dashoffset: 46.75;
    transform: rotate(135deg);
  }
  100% {
    stroke-dashoffset: 187;
    transform: rotate(450deg);
  }
}
/* Animation classes */
.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}
.scale-in {
  animation: scaleIn 0.7s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
}
/* Loader styling */
.loader {
  position: relative;
  width: 60px;
  height: 60px;
}
.circular {
  animation: rotator 2s linear infinite;
  transform-origin: center center;
  width: 100%;
  height: 100%;
}
.path {
  stroke-dasharray: 187;
  stroke-dashoffset: 0;
  stroke: #4F46E5;
  stroke-width: 3;
  stroke-linecap: round;
  transform-origin: center;
  animation: dash 1.4s ease-in-out infinite;
}
.project-container {
  opacity: 0;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}
:deep(.dark) .project-container {
  background: rgba(30, 41, 59, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
/* Breadcrumb styling */
.breadcrumb-container {
  padding: 12px 0;
  position: relative;
  overflow: hidden;
}
.breadcrumb-container:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(156, 163, 175, 0.3), transparent);
}
/* Page transition animations */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>

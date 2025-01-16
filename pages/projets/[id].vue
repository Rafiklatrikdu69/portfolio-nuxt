<script setup>
definePageMeta({
  layout: 'nav'
})

const route = useRoute();
const { id } = route.params;

const isLoading = ref(true)
const error = ref(null)

const { data: projet, pending, error: fetchError } = await useFetch(
    `/api/projets/${id}/technologies`,
    {
      key: id,
      onResponse() {
        isLoading.value = false
      },
      onResponseError() {
        error.value = 'Failed to load project details'
        isLoading.value = false
      }
    }
)
</script>

<template>
  <div class="min-h-screen  from-white-50 to-white">
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 ">
      <div v-if="pending" class="flex justify-center items-center min-h-[50vh]">
        <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>

      <div
          v-else-if="error"
          class="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg p-6 text-center"
      >
        <p class="text-red-600 dark:text-red-400">{{ error }}</p>
        <button
            @click="$router.go(-1)"
            class="mt-4 px-4 py-2 bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-200 rounded-md hover:bg-red-200 dark:hover:bg-red-700 transition-colors"
        >
          Go Back
        </button>
      </div>

      <div v-else-if="projet" class="space-y-8">
        <nav class="flex items-center space-x-2 text-gray-500 dark:text-gray-400 mb-8">
          <NuxtLink
              to="/"
              class="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            Home
          </NuxtLink>
          <span>/</span>
          <NuxtLink
              to="/projets"
              class="hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
          >
            Projects
          </NuxtLink>
          <span>/</span>
          <span class="text-gray-900 dark:text-white">{{ projet.name || 'Project Details' }}</span>
        </nav>

        <div class="overflow-hidden">
          <TheProjetDetail
              :projet="projet"
              class="transform transition-all duration-300 hover:shadow-xl"
          />
        </div>

        <div class="flex justify-center mt-8">
          <button
              @click="$router.go(-1)"
              class="px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300 flex items-center space-x-2"
          >
            <span>← Back to Projects</span>
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

.hover-lift {
  transition: transform 0.2s ease-in-out;
}

.hover-lift:hover {
  transform: translateY(-4px);
}
</style>
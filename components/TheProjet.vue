<script setup>
defineProps(['projet'])
import { useToggleStore } from '../store/toggle'
const isLoading = ref(true);
const hasError = ref(false);

const toggle = useToggleStore()
const router = useRoute()
const toggleStoreLink = () => {
  if (router.name === 'competences') {
    if (toggle.toggle === 'Return to the page project') {
      toggle.toggleLinkPage();
    }
  } else if (router.name === 'projets') {
    if (toggle.toggle === 'Return to the page skill') {
      toggle.toggleLinkPage();
    }
  }
};

const imgRef = ref(null);
const isVisible = ref(false);
const isHovered = ref(false);

const onImageLoad = () => {
  isLoading.value = false;
  hasError.value = false;
  setTimeout(() => {
    isVisible.value = true;
  }, 100);
};

const onImageError = () => {
  isLoading.value = false;
  hasError.value = true;
};

onMounted(() => {
  isLoading.value = false;
});
</script>

<template>
  <UCard
      class="project-card"
      :class="{ 'card-visible': isVisible }"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
  >
    <div class="image-container">
      <div v-if="isLoading" class="skeleton-container">
        <USkeleton class="skeleton" />
      </div>

      <NuxtLink
          v-if="!isLoading"
          :to="`/projets/${projet.id}`"
          @click="toggleStoreLink"
          class="project-link"
      >
        <div class="img-wrapper" :class="{ 'hovered': isHovered }">
          <NuxtImg
              ref="imgRef"
              :src="`img/${projet.image}`"
              alt="Project Image"
              loading="lazy"
              @load="onImageLoad"
              @error="onImageError"
              class="project-image"
              :class="{ 'img-loaded': !isLoading && !hasError }"
          />
        </div>

        <div class="project-overlay" :class="{ 'overlay-visible': isHovered }">
          <span class="view-project ">View Project</span>
        </div>
      </NuxtLink>
    </div>
  </UCard>
</template>

<style scoped>
.project-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: translateY(30px);
  opacity: 0;
  backdrop-filter: blur(10px);
}

.card-visible {
  transform: translateY(0);
  opacity: 1;
}

.project-card:hover {
  transform: translateY(-10px) scale(1.03);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.image-container {
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
}

.project-link {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
}

.img-wrapper {
  width: 100%;
  height: 250px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1);
}

.img-wrapper.hovered {
  transform: scale(1.05);
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  transition: all 0.5s ease;
  opacity: 0;
  filter: brightness(0.95);
}

.img-loaded {
  opacity: 1;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.7)
  );
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  border-radius: 8px;
}

.overlay-visible {
  opacity: 1;
}

.view-project {
  font-weight: bold;
  font-size: 1.2rem;
  padding: 10px 20px;
  border: 2px solid white;
  color:white;
  border-radius: 30px;
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.3s ease 0.1s;
}

.overlay-visible .view-project {
  transform: translateY(0);
  opacity: 1;
}

.skeleton-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.skeleton {
  width: 100%;
  height: 250px;
  border-radius: 8px;
  background: linear-gradient(90deg, #f0f0f0, #e0e0e0, #f0f0f0);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

@media (max-width: 768px) {
  .img-wrapper {
    height: 200px;
  }
}
</style>
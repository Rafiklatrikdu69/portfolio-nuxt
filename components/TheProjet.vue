<script setup>
defineProps(['projet'])
import { useToggleStore } from '../store/toggle'
const isLoading = ref(true); 
const hasError = ref(false); 

const toggle = useToggleStore()
const router = useRoute()
const toggleStoreLink = () => {
    if (router.name === 'competences') {
        if (toggle.toggle === 'Retour aux projets') {
            toggle.toggleLinkPage();
        }
    } else if (router.name === 'projets') {
        if (toggle.toggle === 'Retour à la page des compétences') {
            toggle.toggleLinkPage();
        }
    }
    
};
await nextTick();
const onImageLoad = () => {
    isLoading.value = false;
    hasError.value = false;
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
    <UCard>
        <div :class="`image-container hover07`">
            <figure>
                <div v-if="isLoading" class="skeleton-container">
                    <USkeleton class="skeleton" />
                </div>
                <NuxtLink v-if="!isLoading" :to="`/projets/${projet.id}`" @click="toggleStoreLink">
                    <NuxtImg 
               
                    :src="`img/${projet.image}`" 
                    alt="Project Image" 
                    loading="lazy" 
                    @load="onImageLoad" 
                    @error="onImageError"
                    />
                  
                </NuxtLink>
            </figure>
            
        </div>
    </UCard>
</template>

<style scoped>
.image-container {
    width: 300px;
  position: relative;
  overflow: hidden;
}

figure {
    width: 300px;
    height: 200px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
}

.hover07 figure img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    -webkit-filter: blur(3px);
    filter: blur(3px);
    -webkit-transition: filter 0.3s ease-in-out;
    transition: filter 0.3s ease-in-out;
    border-radius: 10px;
}

.hover07 figure:hover img {
    cursor: pointer;
    -webkit-filter: blur(0);
    filter: blur(0);
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
  height: 100%;
  border-radius: 10px; 
}

img {
  width: 100%;
  height: 100%;
  object-fit:cover; 
  border-radius: 10px;
}
</style>

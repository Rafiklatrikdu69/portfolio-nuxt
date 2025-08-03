<script setup>
defineProps(['projet']);
import { useToggleStore } from '../store/toggle';

const toggle = useToggleStore();

const navigateProjet = () => {
    navigateTo(toggle.link);
};
</script>

<template>
    <main class="container">
        <UCard class="card">
            <div>
                <h1 class="w-full text-center font-bold text-2xl">{{ projet.nom }}</h1>
                <p class="w-72 text-wrap">{{ projet.description }}</p>
                <NuxtImg :src="`img/${projet.image}`" class="image" alt="Image du projet" loading="lazy"></NuxtImg>
            </div>
            <div v-if="projet.git">
                <NuxtLink :to="projet.git">
                    <Icon class="w-40 h-16 cursor-pointer" name="uil:github" />
                </NuxtLink>
            </div>
            <UButton @click="navigateProjet">{{ toggle.toggle }}</UButton>
        </UCard>
        <UCard>
            <h2 class="font-bold">Technologies utilisées</h2>
            <div class="flex gap-6 flex-wrap size items-center">
                <TheTechno v-for="technos in projet.technologie" :key="technos.id" :image="technos.image" />
            </div>
        </UCard>
    </main>
</template>

<style lang="css" scoped>
.container {
  padding: 10px;
  display: flex;
  align-items: center;
  min-height: 100vh;
  justify-content: space-around;
  gap: 2rem;
  flex-wrap: wrap;
}

.image {
    width: 300px;
    height: auto;
    object-fit: cover;
    margin-bottom: 1rem;
    border-radius: 5px;
}

.card {
    padding: 1rem;
    max-width: 100%;
    text-align: center;
    align-items: center;
}

.size {
    max-width: 300px;
}
</style>

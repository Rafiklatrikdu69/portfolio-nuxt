<script setup>
defineProps(['projet'])
const navigateProjet = () => {
    navigateTo('/projets')
}
</script>

<template>
    <main class="container">
        <UCard class="card">
            <div>
                <h1 class="w-full text-center font-bold text-2xl">{{ projet.nom }}</h1>
                <p class=" w-72 text-wrap">{{ projet.description }}</p>
                <NuxtImg :src="`img/${projet.image}`" class="image" alt="Image du projet" loading="lazy"></NuxtImg>
            </div>
            <UButton @click="navigateProjet">Retour aux projets</UButton>
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
    padding: 2rem;
    max-width: 100%;
    text-align: center;
    align-items: center;
}
.size{
    max-width: 300px;
}
</style>

<script setup>
defineProps(['projet'])

</script>

<template>
    <UCard>
        <div class="image-container hover07">
            <figure>
                <NuxtLink :to="`/projets/${projet.id}`">
                    <img :src="`img/${projet.image}`" alt="Project Image" />
                </NuxtLink>
            </figure>
        </div>
    </UCard>
</template>

<style scoped>
.image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

figure {
    width: 300px;
    height: 200px;
    padding: 0;
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
</style>

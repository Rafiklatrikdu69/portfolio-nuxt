<script setup>
defineProps(['projet'])
</script>

<template>
    <UCard>
        <div class="image-container hover07">
            <figure>
                <img :src="`img/${projet.image}`" alt="Project Image" />
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
    background: #fff;
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
}

.hover07 figure:hover img {
    cursor: pointer;
    -webkit-filter: blur(0);
    filter: blur(0);
}
</style>

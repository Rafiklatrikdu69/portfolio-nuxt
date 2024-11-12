<script setup>
defineProps(['image'])
</script>

<template>
    <main>
        <UCard class="card">
            <img class="image" :src="`../img/${image}`" alt="Image de la techno">
        </UCard>
    </main>
</template>

<style lang="css" scoped>
main{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}
    .card {
        max-width: 100px; 
    }
    
    .image {
        width: 40px;
        height: 40px;
        object-fit: contain;
        border-radius: 5px;
    }
</style>

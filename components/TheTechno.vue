<script setup>
defineProps(['image'])
const isLoading = ref(true); 
const hasError = ref(false); 

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
    <main>
        <UCard class="card">
            <div v-if="isLoading" class="skeleton-container">
                <USkeleton class="skeleton" />
            </div>
            <NuxtImg v-if="!isLoading" class="image" :src="`img/${image}`" alt="Image de la techno" loading="lazy"
            @load="onImageLoad" 
            @error="onImageError">
            
        </NuxtImg>
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

.skeleton-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.skeleton {
    width: 100px;
    height: 50px;
    border-radius: 10px; 
}

</style>

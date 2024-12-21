<script setup>
definePageMeta({
    layout: 'nav'
})
const { data: projets } = await useFetch('/api/projets')
</script>
<template>
    <main class="container max-w-full pt-16">
        <div class="grid-projets">
            <h1 class="w-full text-center font-normal text-2xl color">Mes projets</h1>
            <div class="projets">
                <TheProjet  v-for="p in projets" :key="p.id" :projet="p"/>
            </div>
            <div>
                <TheFooter />
            </div>
        </div>

    </main>
</template>
<style scoped>
.color{
    font-weight: bold;
}
.container{
    width: 100%;
}
.projets {
    margin: 20px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 60px; 
}

main > div:last-child {
    margin-top: 40px;
}

</style>
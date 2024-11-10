<script setup>
definePageMeta({
    layout: 'nav'
})
const { data: projets } = await useFetch('/api/projets')
console.log(JSON.stringify(projets))



</script>
<template>
    
    <main class="container">
        <h1 class="w-full text-center font-normal text-2xl color">Mes projets</h1>
        <div class="projets">
            <TheProjet  v-for="p in projets" :key="p.id" :projet="p"/>
        </div>
        <div>
            <TheFooter />
        </div>
    </main>
</template>
<style scoped>
.color{
font-weight: bold;
}
.container{
    padding: 20px;
}
.projets {
    margin: 20px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    margin-bottom: 60px; 
}

main > div:last-child {
    margin-top: 40px; /* Ajoute un espace au-dessus du footer */
}

</style>
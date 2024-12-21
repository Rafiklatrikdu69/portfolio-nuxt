<script setup>
definePageMeta({
    layout: 'nav'
})
const route = useRoute();
const{ id } = route.params;
const {data:projet } = await useFetch(`/api/projets/${id}/technologies`,{key:id})

</script>

<template>
    <main class="pt-12">
        <TheProjetDetail :projet="projet" />
    </main>
</template>

<style lang="css" scoped>

</style>

<script setup async>
definePageMeta({
    layout: 'nav',
});

const items = [];
const { data: competences } = await useFetch('/api/competences');
competences.value.map(competences =>{
    items.push({
        label: competences.name,
        content: competences.niveau,
        projet:competences.projet
    });
});

</script>
<template>
    <main class="container flex flex-col align-middle">
        <UAccordion :items="items">
            <template #item="{ item }">
                <div class="flex flex-col gap-3 ">
                    <div class="text-gray-900 dark:text-white text-center" v-for="c in item.content" :key="c.id">
                        <p class=" font-bold"> {{ c.name }}</p>
                        <p> {{ c.description }}</p>
                    </div>
                    <h2 class="text-center font-bold">Projets en liens</h2>
                    <p v-if="item.projet.length == 0" class="italic text-center">Aucun projets en liens.</p>
                    <div class="flex justify-around flex-wrap items-center gap-3 p-4 padding-responvive" >
                        <TheProjet  :projet="p" v-for="p in item.projet" :key="p.id"/>
                    </div>
                </div>
            </template> 
        </UAccordion>
      <div>
        <TheFooter />

      </div>
    </main>
</template>
<style scoped>
.container{
  padding: 22px;
  padding-top: 100px;
}
@media screen and (max-width: 1200px) {
  .padding-responvive {
    padding: 0;
  }
}
</style>
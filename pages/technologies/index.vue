<script setup>
definePageMeta({
    layout: 'nav'
})
const columns = [
{
    key: 'title',
    label: 'Langages - Outils - Stockage'
},
{
    key: 'name',
    label: 'Nom'
}]

const page = ref(1)
const pageCount = 3


const { data: cat_technos } = await useFetch('/api/categories/technologies')
const selectedTab = ref(1)
watch(selectedTab, () => {
  page.value = 1 
})
const rows = computed(() => {
   
  const category = cat_technos.value.find(cat => cat.id === selectedTab.value)
  return category?.technologie.slice((page.value - 1) * pageCount, (page.value) * pageCount)
})
</script>

<template>
    <main class="main">
        <h1 class=" font-bold text-2xl w-full text-center">Mes Technologies</h1>
        <div class="tabset">
            <span v-for="cat in cat_technos" :key="cat.id">
                <input 
                type="radio" 
                name="tabset" 
                :id="`tab${cat.id}`" 
                :aria-controls="cat.name"
                v-model="selectedTab" 
                :value="cat.id" 
                @change="updateSelectedTab"
                />
                <label :for="`tab${cat.id}`">{{ cat.name }}</label>
            </span>
            <div class="tab-panels">
                <section 
                v-for="cat in cat_technos" 
                :key="cat.id" 
                :id="cat.name" 
                class="tab-panel"
                v-show="selectedTab === cat.id" 
                >
                <UTable :rows="rows" :columns="columns">
                    <template #title-data="{ row }">
                        <NuxtImg class="image"  :src="`img/${row.image}`"></NuxtImg>
                    </template>
                </UTable>
                <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
                    <UPagination v-model="page" :page-count="pageCount" :total="cat.technologie.length" />
                </div>
            </section>
        </div>
    </div>
</main>
</template>

<style scoped>
.main {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    align-items: center;
    gap: 10px;
}
.image{
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 5px;
}
.tabset > span input[type="radio"] {
    position: absolute;
    left: -200vw;
}

.tabset > .tab-panels {
    display: flex;
    flex-direction: column;
}

.tabset > span label {
    position: relative;
    display: inline-block;
    padding: 15px 15px 25px;
    border: 1px solid transparent;
    border-bottom: 0;
    cursor: pointer;
    font-weight: 600;
}

.tabset > span label::after {
    content: "";
    position: absolute;
    left: 15px;
    bottom: 10px;
    width: 22px;
    height: 4px;
    background: #8d8d8d;
}

.tabset > span input:checked + label {
    border-color: #ccc;
    border-bottom: 1px solid #fff;
    margin-bottom: -1px;
}

.tabset > span label:hover,
.tabset > span input:focus + label,
.tabset > span input:checked + label {
    color: #06c;
}

.tabset > span label:hover::after,
.tabset > span input:focus + label::after,
.tabset > span input:checked + label::after {
    background: #06c;
}

.tab-panel {
    padding: 30px 0;
    border-top: 1px solid #ccc;
}

.tabset {
    max-width: 65em;
}
</style>

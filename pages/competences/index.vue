<script setup async>
definePageMeta({
    layout: 'nav'
})

const { data: competences } = await useFetch('/api/competences')

</script>

<template>
    <main class="container">
        <div class="accordion-wrapper">
            <div class="accordion" v-for="comp in competences" :key="comp.id">
                <input v-if="comp.id == 1"  type="radio" name="radio-a" :id="`check${comp.id}`" checked>
                <input v-else  type="radio" name="radio-a" :id="`check${comp.id}`">
                <label class="accordion-label" :for="`check${comp.id}`">{{comp.name}}</label>
                <div class="accordion-content">
                    <ul>
                        <li v-for="niveau in comp.niveau" :key="niveau.id">
                            <h1>{{ niveau.name }}</h1>
                            <p class="text-wrap">{{ niveau.description }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
</template>
<style scoped>
.container{
    margin: 0 auto;
    padding: 40px
}
input {
    position: absolute;
    opacity: 0;
    z-index: -1;
}
.accordion-wrapper {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);
    margin:0 auto;
}
.accordion {
    width: 100%;
    color: white;
    overflow: hidden;
    margin-bottom: 16px;
}
.accordion:last-child{
    margin-bottom: 0;
}
.accordion-label {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 16px;
    background: rgba(4,57,94,.8);
    font-weight: bold;
    cursor: pointer;
    font-size: 20px;
}
.accordion-label:hover {
    background: rgba(4,57,94,1);
}
.accordion-label::after {
    content: "\276F";
    width: 16px;
    height: 16px;
    text-align: center;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
}
.accordion-content {
    max-height: 0;
    padding: 0 16px;
    color: rgba(4,57,94,1);
    background: rgba(194, 194, 194, 0.774);
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
}
.accordion-content p{
    margin: 0;
    color: rgba(4,57,94,.7);
    font-size: 18px;
}
input:checked + .accordion-label {
    background: rgba(4,57,94,1);
}
input:checked + .accordion-label::after {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
}
input:checked ~ .accordion-content {
    max-height: 100vh;
    padding: 16px;
}

</style>

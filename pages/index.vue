<script setup >
definePageMeta({
    layout: 'nav'
})

const items = [{
    name: 'Rafik Bouchenna',
    to: 'https://github.com/Atinux',
    avatar: { src: 'img/photo-profil.jpeg' }
}]
const redirectToTechnologies = () =>{
    navigateTo('/technologies')
}
</script>

<template>
    <main class="container">
        <div >
            <UCarousel v-slot="{ item, index }" :items="items" :ui="{ item: 'w-full' }">
                <div class="text-center mx-auto overflow-visible">
                    <img :src="item.avatar.src" :alt="item.name" class="rounded-full w-48 h-48 mb-2 floating-image" draggable="false">
                    
                    <p class="font-semibold">
                        {{ index + 1 }}. {{ item.name }}
                    </p>
                </div>
            </UCarousel>
        </div>
        <div>
            <UCard>
                <template #header>
                    <p class="presentation">
                        Salut ! Moi, c'est Rafik (ou Rafiki pour les intimes) ! Étudiant en informatique, passionné par le code et toujours prêt à repousser les limites du possible, je m’immerge dans la tech pour transformer chaque idée en projet concret. Que ce soit pour construire des applications innovantes, explorer des algorithmes complexes, ou plonger dans les dernières tendances en IA et développement web, je suis là pour faire bouger les choses !
                        <NuxtImg class="arrow" @click="redirectToTechnologies" src="img/right-arrow.png" />
                    </p>
                </template>
            </UCard>
        </div>
        <TheFooter />
    </main>
</template>

<style lang="css" scoped>
.container{
    padding:5%;
    width:100%;
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
}
.presentation{
    width:300px;
    display: flex;
    align-items: center;
    gap: 4px;
}

.floating-image {
    z-index: 999;
    padding: 10px;
    animation: float 3s ease-in-out infinite;
}

@keyframes float {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-5px); 
    }
}
.arrow{
    display: inline; 
    width: 16px; 
    height: auto;
    vertical-align: middle;
}
@media screen and (max-width: 600px) {
    .container {
        gap:5em;
    }
    .presentation{
        flex-direction: column;
    }
}
</style>

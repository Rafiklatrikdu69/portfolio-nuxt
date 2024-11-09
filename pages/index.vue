<script setup>
definePageMeta({
    layout: 'nav'
})

const items = [{
    name: 'Rafik Bouchenna',
    avatar: { src: 'img/photo-profil.jpeg' }
}]
const redirectToTechnologies = () =>{
    navigateTo('/technologies')
}
</script>

<template>
    <main class="container">
        <div class="avatar">
            <div>
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
        </div>
        <div>
            <TheFooter />
            
        </div>
    </main>
</template>

<style lang="css" scoped>


.container {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.presentation {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.avatar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding: 2%;
}

/* Animation de l'image */
.floating-image {
    animation: float 3s ease-in-out infinite;
    max-width: 100%;
    padding: 10px;
    height: auto;
}

@keyframes float {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-5px);
    }
}

/* Flèche */
.arrow {
    display: inline;
    width: 16px;
    height: auto;
    vertical-align: middle;
    cursor: pointer;
}

/* Media queries pour petits écrans */
@media screen and (max-width: 600px) {
    .container {
        gap: 1em;
    }
    
    .presentation {
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
}
</style>

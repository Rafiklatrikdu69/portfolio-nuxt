<script setup>
definePageMeta({
  layout: 'nav'
})

const items = [{
  name: 'Rafik Bouchenna',
  avatar: { src: 'img/photo-profil.jpeg' }
}]
const redirectToTechnologies = () => {
  navigateTo('/technologies')
}
</script>

<template>
  <main class="container max-w-full py-10 pt-16 p-6">
    <div class="avatar flex flex-col items-center text-center gap-6">
      <UCarousel v-slot="{ item, index }" :items="items" :ui="{ item: 'w-full' }">
        <div class="overflow-visible p-3">
          <NuxtImg :src="item.avatar.src" :alt="item.name" class="rounded-full w-48 h-48 mb-4 floating-image shadow-lg" draggable="false" loading="lazy"></NuxtImg>
          <p class="font-semibold text-lg">
            {{ index + 1 }}. {{ item.name }}
          </p>
        </div>
      </UCarousel>
    </div>

    <div class="presentation mx-auto mt-8 text-center">
      <UCard class="bg-white shadow-md hover:shadow-xl transition-shadow p-4">
        <p >
          Hi ! I'm Rafik (or Rafiki for short)! Computer science student, passionate about coding and always ready to push the limits of what is possible, I immerse myself in tech to transform each idea into a concrete project.
        </p>
      </UCard>
      <UCard class="bg-white shadow-md hover:shadow-xl transition-shadow p-4 mt-4">
        <p >
          Whether it's building innovative applications, exploring complex algorithms, or diving into the latest trends in AI and web development, I'm here to make things happen!
        </p>
      </UCard>
      <NuxtImg class="arrow mt-4 cursor-pointer hover:scale-110 transition-transform" @click="redirectToTechnologies" src="img/right-arrow.png" alt="Go to Technologies" />
    </div>

    <div>
      <TheFooter />

    </div>
  </main>
</template>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.avatar {
  margin-bottom: 2rem;
}

.floating-image {
  animation: float 3s ease-in-out infinite;
  max-width: 100%;
  height: auto;
  border: 3px solid #f0f0f0;
  transition: transform 0.3s ease;
}

.floating-image:hover {
  transform: scale(1.05);
}

/* Flèche */
.arrow {
  width: 40px;
  height: 40px;
  transition: all 0.3s ease;
}

.arrow:hover {
  transform: rotate(20deg);
}

/* Cartes */
UCard {
  border-radius: 10px;
  max-width: 400px;
  margin: 0 auto;
}

/* Media queries pour petits écrans */
@media screen and (max-width: 600px) {
  .presentation {
    padding: 0 1rem;
  }
}
</style>

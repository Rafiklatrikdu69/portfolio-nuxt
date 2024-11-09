<script setup >
const links = [{
  label: 'Nuxt UI',
  to: 'https://ui.nuxt.com/'
}, {
  label: 'Nuxt Docs',
  to: 'https://nuxt.com'
}, {
  label: 'Nuxt Studio',
  to: 'https://nuxt.studio'
}]
</script>

<template>
   
   <footer>
    <p class=" w-full text-center">
        &copy; {{ new Date().getFullYear() }} Rafiki. All rights reserved.
    </p>
   </footer>
</template>
<style scoped>
footer {
    bottom: 0;
    position: sticky;
    height: auto;
    }
</style>
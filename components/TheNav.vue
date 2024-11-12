<template>
  <UContainer class="w-full flex items-center justify-between">
    <div class="flex items-center justify-center gap-2">
      <img src="public/img/logo.png" class="image" alt="logo"/>
      <UToggle  v-model="isDark"  on-icon="i-heroicons-moon" off-icon="i-heroicons-sun" size="lg"/>
    </div>
    
    <UButton @click="toggleMenu()" class="block md:hidden">
      <Icon :name="isMenuOpen ? 'pajamas:close' : 'pajamas:hamburger'" class="w-4 h-4 mt-1"/>
    </UButton>
    
    <div class="hidden md:flex">
      <UHorizontalNavigation :links="horizontalLinks"/>
    </div>
    <div v-if="isMenuOpen" :class="`flex flex-col md:hidden absolute top-10 z-50 right-0 transform -translate-x-1/2 p-4 items-center ${backColor} bg-opacity-100 rounded-lg shadow-lg`" id="menu">
      <UVerticalNavigation :links="verticalLinks"/>
    </div>
  </UContainer>
</template>

<script setup>

const isMenuOpen = ref(false);
const toggleMenu = () => (isMenuOpen.value = !isMenuOpen.value);

const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === 'dark';
  },
  set(value) {
    colorMode.preference = value ? 'dark' : 'light';
  }
});

const backColor = ref('');

onMounted(() => {
  const savedDarkMode = localStorage.getItem('darkMode');
  if (savedDarkMode !== null) {
    backColor.value = savedDarkMode === 'true' ? 'bg-gray-800' : 'bg-gray-200';
    colorMode.preference = savedDarkMode === 'true' ? 'dark' : 'light';
  } else {
    backColor.value = isDark.value ? 'bg-gray-800' : 'bg-gray-200';
  }
});

watch(isDark, (newVal) => {
  localStorage.setItem('darkMode', newVal.toString());
  backColor.value = newVal ? 'bg-gray-800' : 'bg-gray-200';
});

const horizontalLinks = [
{ label: "A propos", icon: 'i-heroicons-home', to: "/" },
{ label: "Technologies", to: "/technologies" },
{ label: "Projets", to: "/projets" },
{ label: "Compétences", to: "/competences" }
];

const verticalLinks = horizontalLinks.map(link => ({
  ...link,
  click: () => isMenuOpen.value = !isMenuOpen.value
}));

</script>

<style scoped>
.image {
  width: 50px;
  height: 50px;
}
</style>

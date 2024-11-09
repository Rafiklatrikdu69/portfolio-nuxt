<script setup>
const openMenuActive = ref('');
const activeItems = ref([true, false, false, false]);
const route = useRoute();

const verifyChangeRoute = (path) => {
  switch (path) {
    case '/technologies':
      activeItems.value = [false, true, false, false];
      break;
    case '/projets':
      activeItems.value = [false, false, true, false];
      break;
    case '/competences':
      activeItems.value = [false, false, false, true];
      break;
    default:
      activeItems.value = [true, false, false, false];
      break;
  }
};

verifyChangeRoute(route.path);
watch(() => route.path, (newPath) => {
  verifyChangeRoute(newPath);
});

const valueMenu = [
  { propos: 'A propos', link: '/' },
  { propos: 'Technologies', link: '/technologies' },
  { propos: 'Projets', link: '/projets' },
  { propos: 'Compétences', link: '/competences' }
];

const toggleActive = (index) => {
  activeItems.value = activeItems.value.map(() => false);
  activeItems.value[index] = true;
};

const openMenu = () => {
  openMenuActive.value = openMenuActive.value === '' ? 'active-menu' : '';
};

const closeMenu = () => {
  openMenuActive.value = '';
};
</script>

<template>
  <div class="container">
    <div class="nav-responsive">
      <div class="flex-logo">
        <NuxtImg class="logo" src="img/logo.jpeg" />
      </div>
      <div id="mySidenav" :class="'sidenav ' + openMenuActive">
        <ul class="list">
          <NuxtLink
            v-for="(value, index) in valueMenu"
            :class="['size-link', { active: activeItems[index] }]"
            @click="closeMenu(); toggleActive(index)"
            :to="value.link"
            :key="index"
          >
            {{ value.propos }}
          </NuxtLink>
        </ul>
      </div>
      <span id="openBtn" @click="openMenu">
        <span v-if="openMenuActive !== ''" id="closeBtn" class="close">×</span>
        <span class="burger-icon" v-else>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </span>
    </div>

    <!-- Nav Fixe en Haut -->
    
    <nav class="nav">
      <div class="flex-logo">
        <NuxtImg class="logo" src="img/logo.jpeg" />
      </div>
      <ul class="link">
        
        <NuxtLink
          v-for="(value, index) in valueMenu"
          :class="['size-link', { active: activeItems[index] }]"
          @click="toggleActive(index)"
          :to="value.link"
          :key="index"
        >
          {{ value.propos }}
        </NuxtLink>
      </ul>
    </nav>

    <slot />
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: space-between; 
  padding: 0 20px;
  height: 60px;
  position: relative;
  margin-top: 5px; 
}

.logo {
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 10px;
}



.nav {
  width: 100%;
  position: fixed; 
  top: 0;
  right: 0;
  z-index: 9999; 
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: white;
  display: flex;
  justify-content: space-between; 
  padding: 10px 20px;
  align-items: center;
}

.nav ul {
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav ul li {
  cursor: pointer;
}

.title {
  font-size: 20px;
  color: #0066FF;
}

.active {
  color: #0066FF;
}

.size-link {
  font-size: 11px;
}

.sidenav {
  height: 100%;
  width: 250px;
  position: fixed;
  top: 9%;
  z-index: -1;
  right: -250px;
  transition: right 0.4s ease, opacity 0.4s ease;
  opacity: 0;
}

.sidenav.active-menu {
  right: 0;
  opacity: 1;
  z-index: 999;
  background-color: white;
  height: auto;
  border-radius: 10px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  display: block;
  transition: color 0.3s;
}

.sidenav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.close {
  font-size: 35px;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 25px;
  color: #0066FF;
}

.burger-icon span {
  display: block;
  width: 35px;
  height: 5px;
  background-color: #0066FF;
  margin: 6px 0;
  border-radius: 5px;
}

.nav-responsive {
  display: none;
}

@media screen and (max-width: 600px) {
  .nav {
    display: none;
  }

  .nav-responsive {
    display: flex;
    width: 100%;
    align-items: center; 
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9999;
    background-color: white;
    padding: 10px;    
  }

  .flex-logo {
    display: flex;
    align-items: center;
    width: 100%; 
  }

  .burger-icon {
    display: block;
  }
}
</style>

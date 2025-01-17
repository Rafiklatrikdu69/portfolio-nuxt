<template>
  <div class="pdf-container">
    <embed
        src="/cv.pdf"
        type="application/pdf"
        class="w-full h-screen"
    />
  </div>
</template>

<script setup>

</script>

<style scoped>
.pdf-container {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 100px;
}
</style>
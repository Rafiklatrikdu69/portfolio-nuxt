<script  setup>
defineProps(["error"])
const redirectClearError = () =>{
    clearError({redirect :'/'})
}
</script>

<template>
    <main class="container">
        <UAlert
        class="alert"
        :description='error.message'
        :title='error.statusCode'
        />
        <UButton class="button"  @click="redirectClearError">Home</UButton>
        
    </main>
</template>

<style lang="css" scoped>
.container{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    padding: 20px;
}
.alert{
    width: 20em;
    margin: 20px;
}
.button{
    width:60px;
}
</style>

<script setup lang="ts">
import NavBar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import Button from '../components/Button.vue'
</script>

<template>
  <NavBar />
  <main>
    <Button> </Button>
  </main>
  <Footer></Footer>x
</template>

<style scoped>
main {
  margin: 0;
  padding: 0;
  height: 100vh;
  background: url('../assets/img/bg02.jpg') center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

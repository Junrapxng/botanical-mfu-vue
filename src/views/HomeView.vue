<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import Button from '@/components/Button.vue'
</script>

<template>
  <main>
    <NavBar />
    <Button />
    <Footer />
  </main>
</template>

<style scoped>
main {
  margin: 0;
  padding: 0;
  background: url('../assets/img/bg02.jpg') center/cover no-repeat;
  height: 100vh;
  justify-content: center;
}
</style>

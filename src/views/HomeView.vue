<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import Button from '@/components/Button.vue'
</script>

<template>
  <NavBar />
  <main>
    <Button />
    <!-- <Button class="btn"></Button> -->
  </main>
  <Footer></Footer>
</template>

<style scoped>
.btn {
  /* bottom: 0;
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 28%;
  width: 100%;
  align-items: center;
  justify-content: center; */
}
main {
  margin: 0;
  padding: 0;
  background: url('../assets/img/bg02.jpg') center/cover no-repeat;
  height: 100vh;
  justify-content: center;
}
</style>

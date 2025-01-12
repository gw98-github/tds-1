<script setup>
import HeaderWrapper from './components/header/HeaderWrapper.vue'
import HomePage from './pages/HomePage.vue'
import FooterWrapper from './components/footer/FooterWrapper.vue'
</script>

<template>
  <header>
    <HeaderWrapper />
  </header>

  <main>
    <HomePage />
  </main>

  <footer>
    <FooterWrapper />
  </footer>
</template>

<style scoped lang="scss">
main {
  min-height: calc(100vh - $header-height - $footer-height);
}

footer,
main,
header {
  width: 100%;
  height: 100%;
}
</style>

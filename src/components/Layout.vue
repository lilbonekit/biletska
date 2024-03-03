<template>
  <div class="layout-app">
    <header-app/>
    <main class="layout-app__main">
      <router-view/>
    </main>
    <footer-app/>
  </div>
</template>

<script>
import HeaderApp from './Header.vue';
import FooterApp from './Footer.vue';

export default {
  name: 'layout-app',
  components: {
    HeaderApp,
    FooterApp
  }
};
</script>

<style lang="scss" scoped>
  .layout-app {
    display: flex;
    flex-direction: column;
  }
  .layout-app__main {
    max-width: 1200px;
    padding: 80px 0;
    margin: 0 auto;
    min-height: 60vh;
  }
</style>

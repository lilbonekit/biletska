<template>
  <div id="app">
    <layout-app/>
  </div>
</template>

<script>
import LayoutApp from './components/Layout.vue';

export default {
  name: 'App',
  components: {
    LayoutApp,
  }
}
</script>

<style>
:root {
  --main-color: #005690;
  --secondary-color: #91cef7;
  --black-color: #2c3e50;
  --light-grey-color: #ccc;
  --white-color: white;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--black-color);
  margin-top: 60px;
}

.icon {
  width: 20px;
  height: 20px;
  padding: 5px;
}

img {
    display: block;
    margin: 30px auto;
    width: 100%;
    max-width: 800px;
  }

.cta {
  display: block;
  font-size: 20px;
  padding: 15px 30px;
  font-weight: 700;
  text-decoration: none;
  border-radius: 10px;
  width: fit-content;
  color: var(--main-color);
  background-color: var(--secondary-color);
  margin-top: 20px;

  @media (max-width: 900px) {
    margin: 0 auto;
  }
}

a {
  color: var(--main-color);
}
</style>

<template>
  <div class="not-founded-page">
    <h1 class="not-founded-page__title">404</h1>
    <p>Сторінка не знайдена!</p>
    <router-link class="cta" :to="{name: 'home'}">
      На головну!
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'not-founded-page'
}
</script>

<style lang="scss" scoped>
.not-founded-page {
  text-align: center;
}

.not-founded-page__title {
  font-size: 100px;
  color: var(--secondary-color);
}
</style>
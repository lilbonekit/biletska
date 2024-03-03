<template>
  <header class="header">
    <nav class="header__nav">
      <router-link 
      class="header__nav-link"
      :to="{name: 'home'}"
    >
      Головна
    </router-link>
    <router-link 
      class="header__nav-link"
      :to="{name: 'basic-knowledge'}"
    >
      CSS3 Основи
    </router-link>
    <router-link
      class="header__nav-link"
      :to="{name: 'adaptive'}"
    >
      Адаптивний дизайн
    </router-link>
    <router-link 
      class="header__nav-link"
      :to="{name: 'flex-grid'}"
    >
      Flexbox та Grid
    </router-link>
    <router-link 
      class="header__nav-link"
      :to="{name: 'tips'}"
    >
        Поради та Рекомендації
    </router-link>
    <router-link 
      class="header__nav-link"
      :to="{name: 'source'}"
    >
        Джерела
    </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'header-app',
  components: {
  }
}
</script>

<style lang="scss" scoped>

  .header {
    display: block;
  }

  .header__nav {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  .header__nav-link {
      color: #2c3e50;
      padding: 10px 20px;
      text-decoration: none;
      border-radius: 5px;
  }

  .router-link-exact-active {
      font-weight: 700;
      background: var(--secondary-color);
      color: var(--main-color);
    }
</style>
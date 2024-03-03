<template>
  <section class="home-page-hero">
    <css-icon class="home-page-hero__img"/>
    <div class="home-page-hero__text">
      <span class="home-page-hero__signature">
        Виконала Білецька Анна Валеріївна ВПВПС 21-4
      </span>
      <h1 class="home-page-hero__title">
        Проектування та розробка web-сайту 
        «CSS3. Докладне керівництво»
      </h1>
      <p>Ласкаво просимо на мій сайт! Тут ви знайдете базові інстуркціїї CSS3 – могутнього інструменту для створення візуально захопливих та високофункціональних веб-сайтів. </p>
      <router-link
        class="cta" 
        :to="{name: 'basic-knowledge'}"
        >
        Розпочати!
      </router-link>
    </div>
  </section>
  
</template>

<script>
import CssIcon from '@/components/Icons/CSS.vue';

  export default {
    name: 'home-page-hero',
    components: {
      CssIcon,
    }
  }
</script>

<style lang="scss" scoped> 

  .home-page-hero {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 50px;

    @media (max-width: 900px) {
      flex-direction: column;
      justify-content: center;
    }
  }

  .home-page-hero__text {
    flex-shrink: 1;

    @media (max-width: 900px) {
      text-align: center;
    }
  }

  .home-page-hero__title {
    font-size: 48px;
    margin: 20px 0;
  }

  .home-page-hero__signature {
    color: var(--light-grey-color);
    font-size: 20px
  }

  .home-page-hero__img {
    width: 500px;
    height: max-content;
    animation: levitateAnimation 1s ease-in-out infinite alternate;

    @media (max-width: 900px) {
      width: 300px;
      max-width: 500px;
    }
  }

  @keyframes levitateAnimation {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-10px);
      }
    }

</style>
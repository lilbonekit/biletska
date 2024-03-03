<template>
  <section class="basic-knowledge-accordion">
    <accordion-item 
      title='Адаптивний Дизайн (Adaptive Design)'>
      <p>CSS3 дозволяє створювати адаптивні та резинові макети, що підлаштовуються під різні розміри екрану, забезпечуючи оптимальний вигляд на різних пристроях...</p>
      <router-link class="basic-knowledge-accordion__link" :to="{name: 'adaptive'}">Дізнатись більше</router-link>
    </accordion-item>
    <accordion-item 
      title='Flexbox та Grid: Сучасні Інструменти для Розмітки та Розташування Веб-Сторінок'>
      <p>CSS Flexbox та Grid є двома потужними інструментами для розмітки та розташування веб-сайтів, які надають розробникам гнучкість та контроль над структурою сторінок...</p>
      <router-link class="basic-knowledge-accordion__link" :to="{name: 'flex-grid'}">Дізнатись більше</router-link>
    </accordion-item>
    <accordion-item 
      title='Поради та рекомендації'>
      <p>Проектування та розробка веб-сайту з використанням CSS3 може бути захоплюючим завданням. У цьому розділі були зібрані рекомендації для успішного впровадження CSS3 у ваш проєкт.</p>
      <router-link class="basic-knowledge-accordion__link" :to="{name: 'tips'}">Дізнатись більше</router-link>
    </accordion-item>
    <accordion-item 
      title='Додаткові джерела'>
      <p>Тут ви знайдете додаткові матеріали, які поглиблюють розуміння сучасних тенденцій у веб-дизайні та розробці. </p>
      <router-link class="basic-knowledge-accordion__link" :to="{name: 'source'}">Дізнатись більше</router-link>
    </accordion-item>
  </section>
</template>

<script>
import AccordionItem from '@/components/AccordionItem.vue';

  export default {
    name: 'basic-knowledge-accordion',
    components: {
      AccordionItem
    }
  }
</script>

<style lang="scss" scoped>
  .basic-knowledge-accordion {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
</style>
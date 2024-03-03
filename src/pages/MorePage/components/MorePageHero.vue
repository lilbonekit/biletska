<template>
  <section class="more-page-hero">
    <h1>Додаткові джерела</h1>
    <p>
Знайти книги та курси, які здатні надати глибокі та всебічні знання з теми CSS3 та його використання у веб-розробці, може бути завданням часом важливішим за швидкі результати. Добре підготовані ресурси забезпечать вам не лише основи, але й детальні інсайти в роботу з архітектурою, респонсивним дизайном, анімаціями та іншими аспектами CSS3, дозволяючи вам розвивати не лише технічні навички, але й творчий підхід до веб-розробки.</p>
    <div class="tips-page-hero__accordions">
      <accordion-item title="MDN Web Docs: CSS">
       <p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">MDN Web Docs</a> надає вичерпну документацію з усіх аспектів CSS.</p>
      </accordion-item>
      <accordion-item title="CSS Tricks">
       <p> <a href="https://css-tricks.com/">CSS-Tricks</a> - Цей сайт містить велику кількість статей, демонстрацій та підказок з CSS та фронтенд-розробки. </p>
      </accordion-item>
      <accordion-item title='Книга "CSS Secrets" Леі Веро'>
        <p>Ця книга пропонує глибше розуміння різних аспектів CSS та його особливостей.</p>
      </accordion-item>
      <accordion-item title='"Web-розробник" І. Петриченко'>
        <p><a href="https://www.udemy.com/course/webdeveloper/?couponCode=KEEPLEARNING">Курс на Udemy</a>, який розкриє всі теми веб розробки, зокрема CSS3</p>
      </accordion-item>
    </div>
  </section>
</template>

<script>
import AccordionItem from '@/components/AccordionItem.vue';

export default {
  name: 'more-page-hero',
  components: {
    AccordionItem
  }
}
</script>
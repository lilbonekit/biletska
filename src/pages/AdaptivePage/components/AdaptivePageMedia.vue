<template>
  <section class="adaptive-page-media">
    <h1>Медіазапити</h1>
    <p>Для того, щоб краще зрозуміти для чого потрібні медіазапити - зменшіть екран і подивіться на <span id="exampleMedia">цей текст</span>.</p>
    <p>Цей ефект був досягнут завдяки медіазапиту, код якого був наданий нижче</p>
    <code-block>
      {{ codes.media }}
    </code-block>
    <p>
      Медіазапити - це інструмент у веб-розробці, який дозволяє вам визначити і застосувати стилі в залежності від параметрів пристрою, таких як ширина екрану, висота екрану, орієнтація екрану та інші. Медіазапити забезпечують адаптивність та відзначаються застосуванням у CSS з допомогою @media правил.
    </p>
    <p>Основний синтаксис медіазапитів виглядає наступним чином:</p>
    <code-block>
      {{ codes.explanation }}
    </code-block>
    <p>У цих прикладах:</p>
    <ul>
      <li>
        only screen вказує, що правила застосовуються тільки до екранів (не друкувальних пристроїв чи інших типів).
      </li>
      <li>
        (max-width: 768px) та (min-width: 769px) - це умови, при яких стилі будуть застосовані або не застосовані, залежно від ширини екрану.
      </li>
    </ul>
      <p>
        Медіазапити є важливим інструментом для створення адаптивних та респонсивних веб-сайтів, оскільки вони дозволяють змінювати стилі в залежності від характеристик пристрою користувача.
      </p>
  </section>
</template>

<script>
import CodeBlock from '@/components/CodeBlock.vue'

export default {
  name: 'adaptive-page-media',
  components: {
    CodeBlock
  },
  data () {
    return {
      codes: {
        media: `
        @media screen and (max-width: 1200px) {
          #exampleMedia {
            color: red;
            font-weight: 700;
          }
          /* Стилі для екранів шириною до 1200px */
        }
        `,
        explanation: `
        @media only screen and (max-width: 768px) {
          /* Стилі для екранів шириною до 768px */
          }

        @media only screen and (min-width: 769px) and (max-width: 1024px) {
          /* Стилі для екранів шириною від 769px до 1024px */
        }

        @media only screen and (min-width: 1025px) {
          /* Стилі для екранів шириною від 1025px і більше */
        }
        `
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#exampleMedia {
  color: green;
}

 @media screen and (max-width: 1200px) {
          #exampleMedia {
            color: red;
            font-size: 30px;
            font-weight: 700;
          }
        }
</style>
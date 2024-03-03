<template>
  <section>
    <h3>Flex</h3>
    <ul>
      <li>
        <h4>Орієнтована на одновимірні макети</h4>
        Flexbox призначена для роботи з одномірними макетами, такими як рядки або колонки. Вона дозволяє елементам розташовуватися вздовж одного напрямку (або в рядок або в колонку).
      </li>
      <li>
        <h4>Гнучка для вирішення специфічних завдань</h4>
        Flexbox часто використовується для вирішення конкретних завдань, таких як центрування елементів, рівномірне розподіл елементів або створення простого адаптивного макета.
      </li>
      <li>
        <h4>Призначена для контролю над внутрішнім простором</h4>
        Flexbox забезпечує контроль над розташуванням та вирівнюванням елементів вздовж головної осі та поперек неї.
      </li>
    </ul>
    <code-block>
      {{ flexContainer }}
    </code-block>
    <img :src="flexExplanation" alt="Як працює флексбокс">
  </section>
</template>

<script>
import CodeBlock from '@/components/CodeBlock.vue'
import flexExplanation from '@/assets/flexExplanation.gif'

export default {
  name: 'flex-info',
  components: {
    CodeBlock
  },
  data () {
    return {
      flexContainer: `
      .container {
          display: flex;
          justify-content: center; /* центрує по горизонталі */
          align-items: center; /* центрує по вертикалі */
      }
      `,
      flexExplanation: flexExplanation
    }
  }
}
</script>
<template>
  <section>
    <h3>Grid</h3>
    <ul>
      <li>
        <h4>Орієнтована на двовимірні макети</h4>
        Grid спеціально розроблений для створення двовимірних макетів, де ви можете контролювати як рядки, так і стовпці.      </li>
      <li>
        <h4>Ідеально підходить для макетів та сіток</h4>
        Grid ідеально підходить для створення складних макетів, таких як сітки новин, галереї, дошки оголошень та інші.
      </li>
      <li>
        <h4>Має значний контроль над областями</h4>
        Grid дозволяє вам створювати області та розміщувати елементи в цих областях, що дозволяє вам створювати складні структури сторінок
      </li>
    </ul>
    <code-block>
      {{ gridContainer }}
    </code-block>
    <img :src="gridExplanation" alt="Як працює grid">
  </section>
</template>

<script>
import CodeBlock from '@/components/CodeBlock.vue'
import gridExplanation from '@/assets/gridExplanation.gif'

export default {
  name: 'grid-info',
  components: {
    CodeBlock
  },
  data () {
    return {
      gridContainer: `
      .container {
          display: grid;
          grid-template-columns: repeat(3, 1fr); /* три колонки однакової ширини */
          grid-gap: 20px; /* відступи між елементами */
      }
      `,
      gridExplanation: gridExplanation
    }
  }
}
</script>
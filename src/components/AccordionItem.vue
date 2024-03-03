<template>
  <div class="accordion">
      <div @click="isOpen = !isOpen" class="accordion__header">
        <h3 class="accordion__title">{{ title }}</h3>
        <chevron 
          class="icon"
          :class="{ 'accordion__header-chevron--up': isOpen }"
        />
      </div>
      <div v-if="isOpen" class="accordion__content">
        <slot/>
          
      </div>
  </div>
</template>

<script>
import Chevron from './Icons/Chevron.vue'

export default {
  name: 'accordion-item',
  components: {
    Chevron
  },
  props: {
    title: {
      type: String,
      default: '',
      reuire: true
    }
  },
  data () {
    return {
      isOpen: false
    }
    }
  }
</script>

<style scoped>

.accordion {
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid var(--light-grey-color);
}

.accordion__header {
  cursor: pointer;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  background-color: #f0f0f0;
}

.accordion__header-chevron--up {
  rotate: 180deg;
}

.accordion__title {
  margin: 0;
  padding: 5px;
}

.accordion__content {
  padding: 10px;
  border-top: none;
  min-height: 50px;
}
</style>

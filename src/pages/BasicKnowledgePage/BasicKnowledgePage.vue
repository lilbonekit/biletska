<template>
  <div class="basic-knowledge">
    <BasicKnowledgeHero/>
    <BasicKnowledgeAccordion/>
  </div>
</template>

<script>
import BasicKnowledgeHero from './components/BasicKnowledgeHero.vue'
import BasicKnowledgeAccordion from './components/BasicKnowledgeAccordion.vue';

export default {
  name: 'basic-knowledge-page',
  components: {
    BasicKnowledgeHero,
    BasicKnowledgeAccordion
  }
}
</script>
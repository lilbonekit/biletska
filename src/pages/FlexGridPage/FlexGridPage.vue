<template>
  <div class="flex-grid-page">
    <flex-grid-page-hero/>
    <flex-info/>
    <grid-info/>
    <flex-grid-page-usage/>
  </div>
</template>

<script>
import FlexGridPageHero from './components/FlexGridPageHero.vue'
import FlexInfo from './components/FlexInfo.vue'
import GridInfo from './components/GridInfo.vue'
import FlexGridPageUsage from './components/FlexGridPageUsage.vue'

export default {
  name: 'flex-grid-page',
  components: {
    FlexGridPageHero,
    FlexInfo,
    GridInfo,
    FlexGridPageUsage
  }
}
</script>
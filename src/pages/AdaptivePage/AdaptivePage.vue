<template>
  <div class="adaptive-page">
    <adaptive-page-hero/>
    <adaptive-page-diff/>
    <adaptive-page-media/>
  </div>
</template>

<script>
import AdaptivePageHero from './components/AdaptivePageHero.vue'
import AdaptivePageDiff from './components/AdaptivePageDiff.vue'
import AdaptivePageMedia from './components/AdaptivePageMedia.vue'

export default {
  name: 'adaptive-page',
  components: {
    AdaptivePageHero,
    AdaptivePageDiff,
    AdaptivePageMedia
  }
}
</script>
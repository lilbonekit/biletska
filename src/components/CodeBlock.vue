<template>
  <div class="code-block">
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'code-blocl'
}
</script>

<style lang="scss" scoped>
.code-block {
  border: 1px solid var(--light-grey-color);
  white-space: pre-wrap;
  max-width: 700px;
  width: 100%;
  margin: 0 auto;
  overflow-x: auto;
}
</style>
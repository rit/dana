<template>
  <div class="ranges">
    <slot></slot>
  </div>
</template>

<script>
export default {
  components: {
    'range': require('./range.vue')
  }
}
</script>

<style scoped>
.ranges {
  background-color: #ecf0f1;
  padding: 2em;
  display: flex;
  flex-wrap: wrap;
}

.subrange-content {
  background-color: white;
  flex-basis: 100%;
}
</style>

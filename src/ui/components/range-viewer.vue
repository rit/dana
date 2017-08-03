<template>
  <div class="ranges">
    <template v-for="range in ranges">
      <range :range="range" />
    </template>
  </div>
</template>

<script>
export default {
  props: ['ranges'],

  components: {
    'range': require('./range.vue')
  }

}
</script>

<style scoped>
.ranges {
  background-color: #ecf0f1;
}

</style>

<template>
  <div id="series-navbar">
    <collection-heading :heading="heading"></collection-heading>
  </div>
</template>

<script>
export default {

  props: ['slug', 'heading']

}
</script>

<style scoped>
#series-navbar {
  background: silver;
  padding: 0.1em 1em;
  margin-bottom: 1em;
}
</style>

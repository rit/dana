<template>
  <div id="series-navbar">
    <collection-heading :heading="heading" showDetail="true"></collection-heading>
    <slide-out></slide-out>
  </div>
</template>

<script>
export default {

  props: ['slug', 'heading']

}
</script>

<style scoped>
#series-navbar {
  position: relative;
  background: #ecf0f1;
  padding: 0.1em 1em;
  margin-bottom: 1em;
}
</style>

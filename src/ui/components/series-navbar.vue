<template>
  <div id="series-navbar">
    <collection-heading :heading="heading" showDetail="true"></collection-heading>
  </div>
</template>

<script>
export default {

  props: ['heading']

}
</script>

<style scoped>
#series-navbar {
  position: relative;
  background: #eeeeee;
  padding: 0.1em 1em;
  margin-bottom: 1em;
}
</style>

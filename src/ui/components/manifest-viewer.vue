<template>
  <div>
    <h2>Navigate {{ label }}</h2>
    <range-viewer
       :manifest="manifest"
    />
  </div>
</template>

<script>
export default {
  props: ['manifest'],

  components: {
    'range-viewer': require('./range.vue')
  },

  computed: {
    label () { return this.manifest.label }
  }
}
</script>

<style>

h2 {
  font-weight: bold;
  padding-top: 0.5em;
  margin-top: 2em;
  border-top: 2px solid #3498db;
}

</style>

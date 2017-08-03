<template>
  <section>
    <h2>Navigate {{ label }}</h2>
    <range-viewer
       :ranges="ranges"
    />
  </section>
</template>

<script>

import { parse } from 'iso/ranger'

export default {
  props: ['manifest'],

  components: {
    'range-viewer': require('./range-viewer.vue')
  },

  computed: {
    label () {
      return this.manifest.label
    },

    ranges () {
      if (this.manifest.structures) {
        return parse(this.manifest).subranges
      }
    }
  }
}
</script>

<style scoped>

h2 {
  font-weight: bold;
  padding-top: 0.5em;
  margin-top: 2em;
  border-top: 2px solid #3498db;
  background-color: white;
}

</style>

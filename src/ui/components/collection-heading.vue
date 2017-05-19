<template>
  <div>
    <h1> {{ label }}</h1>
    <div> {{ physicalDesc }} </div>
  </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  props: ['accessionNo'],

  computed: {
    ...mapState({
      collectionHeading: state => state.collectionHeading
    }),

    label () {
      return this.collectionHeading.label
    },

    physicalDesc () {
      return this.collectionHeading.physicalDesc
    }
  }
}

</script>

<style scoped>

h1 {
  font-size: 1.2em;
  margin-bottom: 0.2em;
}

div {
  margin-bottom: 1em;
}

</style>

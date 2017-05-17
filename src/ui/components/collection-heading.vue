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

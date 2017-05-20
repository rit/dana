<template>
  <div>
    <h1> {{ label }}</h1>
    <div> {{ physicalDesc }} </div>
  </div>
</template>

<script>

import _ from 'lodash'

export default {
  props: ['heading'],

  computed: {

    label () {
      return _.get(this.heading, 'label', '')
    },

    physicalDesc () {
      return _.get(this.heading, 'physicalDesc', '')
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

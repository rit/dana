<template>
  <div>
    <h2> {{ label }}</h2>
    <div>
      {{ physicalDesc }}
      <span v-if="showDetail">
        <a @click.prevent="showDetailedDescription" href="#">Detailed Description</a>
      </span>
    </div>
  </div>

</template>

<script>

import _ from 'lodash'
import { MessageBox } from 'element-ui';

export default {
  props: ['heading', 'showDetail'],

  computed: {

    label () {
      return _.get(this.heading, 'label', '')
    },

    physicalDesc () {
      return _.get(this.heading, 'physicalDesc', '')
    }
  },


  methods: {
    showDetailedDescription () {
      // TODO show the overlay box
    }
  },

  created () {
  }
}

</script>

<style scoped>

h2 {
  font-size: 1.2em;
  margin-bottom: 0.2em;
}

div {
  margin-bottom: 1em;
}

span a {
  margin-left: 0.5em;
}

</style>

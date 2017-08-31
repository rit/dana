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
import { mapActions } from 'vuex'

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
    ...mapActions([
      'updateCollectionSlideOut'
    ]),

    showDetailedDescription () {
      this.updateCollectionSlideOut({ collection: this.heading })
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
  margin-right: 2em;
}

div {
  margin-bottom: 1em;
  margin-right: 2em;
}

span a {
  margin-left: 0.5em;
}

</style>

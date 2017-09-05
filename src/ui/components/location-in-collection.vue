<template>
  <div class="location-in-collection">
    <h3>Location in Collection</h3>
    <ul>
      <li v-for="(loc, index) in manifestParents" :style="marginLeft(index)">
        <span> {{ loc.label }} </span>
        <span class="more">More Info</span>
      </li>
      <li> {{ manifest.label }}</li>
    </ul>
  </div>
</template>

<script>

import { last, cloneDeep } from 'lodash'
import { mapActions, mapGetters } from 'vuex'

export default {

  props: ['objectSlug'],

  computed: {
    ...mapGetters(['locationBySlug']),

    _location () {
      return this.locationBySlug(this.objectSlug)
    },

    manifest () {
      // location may not be set yet
      return last(this._location) || {}
    },

    manifestParents () {
      var parents = cloneDeep(this._location)
      parents.pop()
      return parents
    }
  },

  methods: {
    ...mapActions(['fetchObjectLocation']),

    marginLeft (index) {
      return `margin-left: ${index*1.5}em`
    }

  },

  watch: {
    objectSlug (slug, oldSlug) {
      if (slug) {
        this.fetchObjectLocation({ slug })
      }
    }
  },

  created () {
    // this.objectSlug may be undefined because of the layout's reuse.
    if (this.objectSlug) {
      this.fetchObjectLocation({ slug: this.objectSlug })
    }
  }

}
</script>


<style scoped>

h3 {
  padding: 0.5em 0;
  padding-left: 1em;
  margin-bottom: 0;
  border-top: 4px solid #3498db;
}

.location-in-collection {
}

ul {
  background-color: #eeeeee;
  padding: 1em;
  margin: 0;
}

li {
  list-style: none;
  padding: 1em 0;
  margin: 1em 0;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  border-bottom: 2px solid white;
}

</style>

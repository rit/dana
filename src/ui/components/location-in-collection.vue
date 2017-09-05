<template>
  <div class="location-in-collection">
    <h2>Location in Collection</h2>
    <ul>
      <li v-for="(loc, index) in manifestParents" :style="marginLeft(index)">
        <span> {{ loc.label }} </span>
        <span><a href="#" @click.prevent="showMoreInfo(loc)">More Info</a></span>
      </li>
      <li class="manifest" :style="paddingLeft(_location.length)">
        <span> {{ manifest.label }} </span>
        <span class="full">
          <a href="#" @click.prevent="showMoreInfo(manifest)">Full Record Details</a>
        </span>
      </li>
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
      return `margin-left: ${index*1.2}em`
    },

    paddingLeft (index) {
      return `padding-left: ${index*1.2}em`
    },

    showMoreInfo (collection) {
      console.log('showMoreInfo', collection.label, collection.slug)
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

h2 {
  padding: 0.5em 0;
  margin-bottom: 0;
  border-top: 2px solid #3498db;
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

li.manifest {
  border-bottom: none;
  background-color: white;
  flex-direction: column;
  padding-right: 1em;
}

.full {
  margin-top: 1em;
}

a, a:visited, a:hover {
  color: #5598c9;
}

</style>

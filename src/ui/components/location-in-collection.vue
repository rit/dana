<template>
  <div class="location-in-collection">
    <h3>Location in Collection</h3>

    <div class="locations" v-for="loc in _location">
      <div class="loc">
        <div class="label">
            {{ loc.doc.label }}
        </div>
        <p v-if="loc.doc.description">
          <a href="">More info</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import { ellipsis } from 'iso/util'

export default {

  props: ['objectSlug'],

  computed: {
    ...mapGetters(['locationBySlug']),

    _location () {
      return this.locationBySlug(this.objectSlug)
    }
  },

  methods: {
    ...mapActions(['fetchObjectLocation'])

  },

  filters: {
    ellipsis (text) {
      return ellipsis(text, 120)
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
  border-bottom: 4px solid silver;
}

.location-in-collection {
  background-color: #ecf0f1;
}

.loc {
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid silver;
  min-height: 2em;
  padding: 1em;
}

.locations:last-child {
  border-left: 2px solid silver;
  border-right: 2px solid silver;
  background-color: white;
}

.loc p {
  margin-left: 0.4em;
}

.label {
  font-weight: bold;
  font-size: 1.1em;
}

</style>

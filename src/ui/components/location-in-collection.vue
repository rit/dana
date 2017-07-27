<template>
  <div>
    <h4>Location in Collection</h4>

    <div v-for="loc in _location">
      <div class="loc">
        <div>
        {{ loc.doc.label }}
        </div>
        <p v-if="loc.doc.description">
          {{ loc.doc.description | ellipsis }}...
          <a href="">Read more</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions, mapState, mapGetters } from 'vuex'
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
    ...mapActions(['fetchObjectLocation']),

  },

  filters: {
    ellipsis (text) {
      return ellipsis(text, 120)
    }
  },

  created () {
    console.log('location created')
    this.fetchObjectLocation({slug: this.objectSlug})
  }

}
</script>


<style scoped>
  div {
    /*
    display: flex;
    width: 320px;
    height: 20em;
    justify-content: center;
    align-items: center;
    border: 1px solid silver;
    */
  }

.loc {
  display: flex;
  flex-direction: column;
}

.loc p {
}
</style>

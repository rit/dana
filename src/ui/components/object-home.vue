<template>
  <div id="object-home">
    <h2>Full Record Details</h2>

    <h3>{{ label }}</h3>
    <dl>
      <template v-for="line in metadata">
        <dt> {{ line.label }} </dt>
        <dd> {{ line.value }} </dd>
      </template>
    </dl>
  </div>
</template>

<script>

import { mapActions, mapState, mapGetters } from 'vuex'

export default {

  props: ['objectSlug'],

  computed: {
    ...mapGetters(['collectionBySlug']),

    collection () {
      return this.collectionBySlug(this.objectSlug)
    },

    label () {
      return this.collection.label
    },

    metadata () {
      return this.collection.metadata
    }

  },

  methods: {
    ...mapActions(['fetchCollection']),
  },


  watch: {
    objectSlug () {
      this.fetchCollection({ slug: this.objectSlug })
    }
  },

  created () {
    this.fetchCollection({ slug: this.objectSlug })
  }

}
</script>

<style scoped>
h2 {
  font-weight: bold;
  padding-top: 0.5em;
  margin-top: 2em;
  border-top: 2px solid #3498db;
}

dt {
  border-bottom: 1px solid silver;
  font-size: 1.2em;
}

dd {
  margin-bottom: 1.5em;
  margin-left: 0;
}
</style>

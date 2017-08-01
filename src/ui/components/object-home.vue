<template>
  <div id="object-home">
    <h2>Full Record Details</h2>
    <ul class="metadata">
      <li>
        <div class="label">
          <span> Title </span>
        </div>
        <div class="value"> {{ label }} </div>
      </li>

      <li v-for="line in metadata">
        <div class="label">
          <span> {{ line.label }} </span>
        </div>
        <div class="value"> {{ line.value }} </div>
      </li>
    </ul>
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

ul {
  padding: 0;
}

li {
  border-bottom: 1px solid silver;
  list-style: none;
  font-size: 1.2em;
  padding: 1.5em 0;
  display: flex;
}

.label {
  width: 20em;
  font-weight: bold;
}

.label span:after {
  content: ":";
  margin-left: -0.2em;
}


.value {
  width: 100%;
}

</style>

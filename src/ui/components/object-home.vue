<template>
  <div id="object-home">
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

import { mapActions, mapState } from 'vuex'

export default {

  props: ['objectSlug'],

  computed: {
    ...mapState(['objectDetails']),

    label () {
      return this.objectDetails.label
    },

    metadata () {
      return this.objectDetails.metadata
    }

  },

  watch: {
    objectSlug () {
      this.updateObjectDetails({ slug: this.objectSlug })
    }
  },

  methods: {
    ...mapActions(['updateObjectDetails'])
  },

  created () {
    this.updateObjectDetails({ slug: this.objectSlug })
  }

}
</script>

<style scoped>
dt {
  border-bottom: 1px solid silver;
  font-size: 1.2em;
}

dd {
  margin-bottom: 1.5em;
  margin-left: 0;
}
</style>

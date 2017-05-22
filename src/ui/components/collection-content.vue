<template>
  <div>
    <!--<collection-heading :slug="lastSlug"></collection-heading>-->
    <div v-if="showSummary">
      <collection-summary></collection-summary>
    </div>
    <div v-else>
      <collection-content-tree></collection-content-tree>
    </div>

    <div>{{ lastSlug }}</div>
  </div>
</template>

<script>

export default {

  props: ['collectionSlug', 'seriesSlug'],

  computed: {
    lastSlug () {
      return this.seriesSlug || this.collectionSlug
    },

    showSummary () {
      // TODO What constitute a leaf collection?
      return this.seriesSlug !== 'sample'
    }
  },

  created () {
    // TODO fetch "series" collection data
  }
}
</script>

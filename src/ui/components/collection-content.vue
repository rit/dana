<template>
  <div>
    <!--<div v-if="showSummary">-->
    <!--  <collection-summary></collection-summary>-->
    <!--</div>-->
    <!--<div v-else>-->
    <!--  <collection-content-tree></collection-content-tree>-->
    <!--</div>-->

    <div>
      routemeta: {{ routemeta }}
    </div>

    <router-view ></router-view>
  </div>
</template>

<script>

export default {

  props: ['collectionSlug', 'seriesSlug', 'subseriesSlug'],

  computed: {
    lastSlug () {
      return this.seriesSlug || this.collectionSlug
    },

    routemeta () {
      return this.$route.matched[this.$route.matched.length - 1].meta
    }
  },

  created () {
    // TODO fetch "series" collection data
  }
}
</script>

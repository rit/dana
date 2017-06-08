<template>
  <div>
    <collection-layout>
      <collection-heading slot="collection-header" :heading="collectionHeading">
      </collection-heading>

      <!--<collection-heading v-show="onlyForSeries"-->
      <!--  :heading="seriesHeading"-->
      <!--  slot="series-header">-->
      <!--</collection-heading>-->

      <location-in-collection slot="location-in-collection"></location-in-collection>

      <series-tree slot="collection-hierarchy" :series-tree="seriesTree">
      </series-tree>

    </collection-layout>

    <router-view name="series-heading"></router-view>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {

  // These props should be set by the router
  props: ['collectionSlug', 'seriesSlug'],

  computed: {
    ...mapState([
      'collectionHeading',
      'seriesTree',
      'seriesHeading'
    ]),

    onlyForSeries () {
      return !!this.seriesSlug
    }
  },

  methods: {
    ...mapActions([
      'updateCollectionMetaData',
      'updateSeriesTree'
    ]),

    handleNodeClick (data) {
    }
  },

  watch: {
    collectionSlug () {
      this.updateCollectionMetaData({ slug: this.collectionSlug })
    }
  },

  created () {
    this.updateCollectionMetaData({ slug: this.collectionSlug })
    this.updateSeriesTree({ slug: this.collectionSlug })
  }
}

</script>

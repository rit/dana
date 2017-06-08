<template>
  <div>
    <collection-layout>
      <collection-heading slot="collection-header" :heading="collectionHeading">
      </collection-heading>

      <!--<collection-heading v-show="onlyForSeries"-->
      <!--  :heading="seriesHeading"-->
      <!--  slot="series-header">-->
      <!--</collection-heading>-->

      <image-viewer v-show="onlyForObject" slot="image-viewer"></image-viewer>

      <location-in-collection v-show="onlyForObject" slot="location-in-collection">
      </location-in-collection>

      <series-tree v-show="onlyForSeries" slot="collection-hierarchy" :series-tree="seriesTree">
      </series-tree>

    </collection-layout>

    <router-view name="series-heading"></router-view>
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {

  // These props should be set by the router
  props: ['collectionSlug', 'seriesSlug', 'objectSlug'],

  computed: {
    ...mapState([
      'collectionHeading',
      'seriesTree',
      'seriesHeading'
    ]),

    onlyForSeries () {
      return !this.onlyForObject
    },

    onlyForObject () {
      return !!this.objectSlug
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

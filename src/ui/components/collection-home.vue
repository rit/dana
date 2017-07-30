<template>
  <div>
    <collection-layout>
      <collection-heading slot="collection-header" :heading="collectionHeading">
      </collection-heading>

      <series-navbar v-show="onlyForSubseries"
        :heading="seriesNavbar"
        slot="series-navbar">
      </series-navbar>

      <image-viewer v-show="onlyForObject" slot="image-viewer"></image-viewer>

      <location-in-collection
        v-show="onlyForObject"
        :objectSlug="objectSlug"
        slot="location-in-collection">
      </location-in-collection>

      <series-tree v-show="onlyForSeries" slot="collection-hierarchy" :series-tree="seriesTree">
      </series-tree>

    </collection-layout>
  </div>
</template>

<script>

import { mapActions, mapState, mapGetters } from 'vuex'
import mapper from 'iso/mapper'

export default {

  // These props should be set by the router
  props: ['collectionSlug', 'seriesSlug', 'subseriesSlug', 'objectSlug'],

  computed: {
    ...mapState([
      'seriesTree',
      'seriesNavbar'
    ]),

    ...mapGetters(['collectionBySlug']),

    rootCollection () {
      return this.collectionBySlug(this.collectionSlug)
    },

    collectionHeading () {
      return mapper.collectionHeading(this.rootCollection)
    },

    onlyForSubseries () {
      return !!this.subseriesSlug
    },

    onlyForSeries () {
      return !this.onlyForObject
    },

    onlyForObject () {
      return !!this.objectSlug
    }
  },

  methods: {
    ...mapActions([
      'fetchCollection',
      'updateSeriesNavbar',
      'updateSeriesTree'
    ]),

    handleNodeClick (data) {
    }
  },

  watch: {
    collectionSlug () {
      this.fetchCollection({ slug: this.collectionSlug })
    },

    seriesSlug () {
      this.updateSeriesNavbar({ slug: this.seriesSlug })
    }
  },

  created () {
    this.fetchCollection({ slug: this.collectionSlug })
    this.updateSeriesNavbar({ slug: this.seriesSlug })
    this.updateSeriesTree({ slug: this.collectionSlug })
  }
}

</script>

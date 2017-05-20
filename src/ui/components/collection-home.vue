<template>
  <div>
    <collection-layout>
      <collection-heading slot="collection-header" :heading="collectionHeading">
      </collection-heading>

      <collection-heading v-show="onlyForSeries"
        :heading="seriesHeading"
        slot="series-header">
      </collection-heading>

      <series-tree slot="collection-hierarchy" :series-tree="seriesTree">
      </series-tree>

    </collection-layout>
  </div>

  <!--<section class="main">-->
    <!--<section class="content">-->
    <!--  <content-heading></content-heading>-->
    <!--  <content-tree></content-tree>-->
    <!--</section>-->
  <!--</section>-->
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
      'updateCollectionMetaData'
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
  }
}

</script>

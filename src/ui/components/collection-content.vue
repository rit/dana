<template>
  <div>
    <!--<div v-if="showSummary">-->
    <!--  <collection-summary></collection-summary>-->
    <!--</div>-->
    <!--<div v-else>-->
    <!--  <collection-content-tree></collection-content-tree>-->
    <!--</div>-->

    <collection-heading v-if="heading" :heading="heading"></collection-heading>

    <div v-if="collections">
      <h3>Collections</h3>
      <ul>
        <li v-for="c in collections">
          {{ c.label }}
        </li>
      </ul>
    </div>

    <!--<router-view ></router-view>-->
  </div>
</template>

<script>

import { mapActions, mapState } from 'vuex'

export default {

  props: ['collectionSlug', 'seriesSlug', 'subseriesSlug'],

  computed: {
    ...mapState(['collectionContent']),

    collections () {
      return this.collectionContent.collections
    },

    heading () {
      return this.collectionContent.heading
    },

    contentSlug () {
      return this.subseriesSlug || this.seriesSlug || this.collectionSlug
    },

    routemeta () {
      return this.$route.matched[this.$route.matched.length - 1].meta
    }
  },

  methods: {
    ...mapActions(['updateCollectionContent'])
  },

  created () {
    this.updateCollectionContent({ slug: this.contentSlug })
  }
}
</script>

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

    <!--<router-view ></router-view>-->
  </div>
</template>

<script>

import { mapActions } from 'vuex'

export default {

  props: ['collectionSlug', 'seriesSlug', 'subseriesSlug'],

  computed: {
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

<template>
  <div>
    <transition name="el-zoom-in-center">
      <collection-heading v-if="heading" :heading="heading" showDetail="true">
      </collection-heading>
    </transition>

    <transition name="el-zoom-in-center">
      <div v-if="collections">
        <h3>Collections ({{ collections.length }})</h3>
        <section>
          <content-item v-for="c in collections" :item="c" :collectionSlug="collectionSlug" :key="c.slug"></content-item>
        </section>
      </div>
    </transition>

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

  /*
  beforeRouteUpdate (to, from, next) {
    this.updateCollectionContent({ slug: this.contentSlug })
    next()
  },
  */

  watch: {
    contentSlug (slug, oldSlug) {
      this.updateCollectionContent({ slug })
    }
  },

  created () {
    this.updateCollectionContent({ slug: this.contentSlug })
  }
}
</script>

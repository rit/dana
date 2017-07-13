<template>
  <div class="collection-content">
    <div class="loader" v-loading="loading">
    </div>
    <transition name="el-zoom-in-center">
      <collection-heading v-if="heading" :heading="heading" showDetail="true">
      </collection-heading>
    </transition>

      <div v-if="children">
        <h3>Collections ({{ children.length }})</h3>
        <section>
          <transition-group name="el-zoom-in-center">
            <content-item v-for="c in children" :item="c" :collectionSlug="collectionSlug" :key="c.slug">
            </content-item>
          </transition-group>
        </section>
      </div>

    <!--<router-view ></router-view>-->
  </div>
</template>

<script>

import { isEmpty } from 'lodash'
import { mapActions, mapState } from 'vuex'

export default {

  props: ['collectionSlug', 'seriesSlug', 'subseriesSlug'],

  computed: {
    ...mapState(['collectionContent']),

    /* children are both manifest and collection */
    children () {
      return this.collectionContent.children
    },

    heading () {
      return this.collectionContent.heading
    },

    contentSlug () {
      return this.subseriesSlug || this.seriesSlug || this.collectionSlug
    },

    loading () {
      return isEmpty(this.collectionContent)
    }
  },

  methods: {
    ...mapActions(['updateCollectionContent'])
  },

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

<style scoped>

.collection-content {
  position: relative
}

.loader {
  position: absolute;
  top: 3em;
  left: 0;
}

</style>

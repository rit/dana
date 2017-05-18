<template>
  <collection-layout>
    <collection-heading slot="collection-header" :collection-slug="collectionSlug">
    </collection-heading>

    <collection-heading
      v-show="isSeries"
      :collection-slug="seriesSlug"
      slot="series-header">
    </collection-heading>

    <series-tree slot="collection-hierarchy" :series-tree-slug="collectionSlug">
    </series-tree>

  </collection-layout>

  <!--<section class="main">-->
    <!--<section class="content">-->
    <!--  <content-heading></content-heading>-->
    <!--  <content-tree></content-tree>-->
    <!--</section>-->
  <!--</section>-->
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['collectionSlug', 'seriesSlug'],

  data () {
    return {
      isSeries: false
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

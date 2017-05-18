<template>
  <collection-layout>
    <collection-heading slot="collection-header" :collection-slug="accessionNo">
    </collection-heading>

    <collection-heading
      v-show="isSeries"
      :collection-slug="accessionNo"
      slot="series-header">
    </collection-heading>

    <series-tree slot="collection-hierarchy" :series-tree-slug="accessionNo">
    </series-tree>

    <div slot="content-metadata">
      <h2>Summary</h2>
    </div>
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
  data () {
    return {
      isSeries: false,
      accessionNo: this.$route.params.collectionSlug
    }
  },

  methods: {
    ...mapActions([
      'updateCollectionMetaData'
    ]),

    handleNodeClick (data) {
    }
  },

  beforeRouteUpdate (to, from, next) {
    this.accessionNo = to.params.collectionSlug
    next()
  },

  watch: {
    accessionNo () {
      this.updateCollectionMetaData({ slug: this.accessionNo })
    }
  },

  created () {
    this.updateCollectionMetaData({ slug: this.accessionNo })
  }
}

</script>

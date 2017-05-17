<template>
  <div>
  <collection-heading :collection-slug="accessionNo"></collection-heading>
  <!--<series-heading></series-heading>-->
  <section class="main">
    <series-tree :series-tree-slug="accessionNo" ></series-tree>
    <!--<section class="content">-->
    <!--  <content-heading></content-heading>-->
    <!--  <content-tree></content-tree>-->
    <!--</section>-->
  </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
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

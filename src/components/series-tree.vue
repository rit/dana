<template>
  <div class="series-tree">
    <el-tree
      empty-text="Loading..."
      :data="collection"
      :props="defaultProps"
      accordion
      @node-click="handleNodeClick">
    </el-tree>
  </div>
</template>

<script>
import { fetchCollection, navTree } from 'lib/transformer'

export default {
  props: ['collectionSlug'],
  data () {
    return {
      collection: [],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    loadSeriesTree (slug) {
      var collectionUrl = `/static/${slug}.json`
      fetchCollection(collectionUrl, (resp) => {
        this.collection = [navTree(resp.data)]
      })
    },

    handleNodeClick (data) {
    }
  },

  created () {
    this.loadSeriesTree(this.collectionSlug)
  },

  beforeRouteUpdate (to, from, next) {
    this.loadSeriesTree(to.params.slug)
    next()
  }
}
</script>

<style>
.series-tree {
  width: 320px;
}
</style>

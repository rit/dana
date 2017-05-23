<template>
  <div class="series-tree">
    <el-tree
      empty-text="Loading..."
      :data="seriesTree"
      node-key="slug"
      :props="defaultProps"
      accordion
      @node-click="handleNodeClick">
    </el-tree>
  </div>
</template>

<script>
export default {
  props: ['seriesTree'],

  data () {
    return {
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },

  methods: {
    handleNodeClick (data, node, tree) {
      if (!node.isLeaf) return

      var collectionSlug = this.$route.params.collectionSlug
      var seriesSlug
      if (node.level === 2) {
        seriesSlug = data.slug
        this.$router.push({
          name: 'SeriesHome',
          params: { collectionSlug, seriesSlug }
        })
      } else if (node.level === 3) {
        seriesSlug = node.parent.data.slug
        var subseriesSlug = data.slug
        this.$router.push({
          name: 'SubseriesHome',
          params: { collectionSlug, seriesSlug, subseriesSlug }
        })
      }
    }
  }
}
</script>

<style>
.series-tree {
  width: 320px;
}
</style>

<template>
  <div class="series-tree">
    <el-tree
      :data="seriesTree"
      :props="defaultProps"
      default-expanded-keys="2011m30_nav"
      node-key="slug"
      empty-text="Loading..."
      @node-click="handleNodeClick"
      accordion >
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

.is-current > div.el-tree-node__content {
  background-color: #2980b9;
  color: white;
}
</style>

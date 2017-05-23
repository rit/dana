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

      console.log('route.params', this.$route.params)

      if (node.level === 2) {
        this.$router.push({
          name: 'SeriesHome',
          params: { ...this.$route.params, seriesSlug: data.slug }
        })
      } else if (node.level === 3) {
        this.$router.push({
          name: 'SeriesHome',
          params: { ...this.$route.params, seriesSlug: node.parent.data.slug, subseriesSlug: data.slug }
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

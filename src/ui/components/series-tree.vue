<template>
  <div class="series-tree">
    <el-tree
      :data="seriesTree"
      :props="defaultProps"
      :default-expanded-keys="expandKeys"
      :current-node-key="currentNodeKey"
      node-key="slug"
      empty-text="Loading..."
      @node-click="handleNodeClick"
      accordion >
    </el-tree>
  </div>
</template>

<script>
import { last } from 'lodash'

export default {
  props: ['seriesTree'],

  inject: ['currentRoute'],

  data () {
    return {
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },

  computed: {
    expandKeys () {
      var route = this.currentRoute || this.$route
      var path = route.path
      var pattern = last(route.matched).regex
      var found = path.match(pattern)
      if (found) {
        found = found.splice(1)
        return found
      }
    },

    currentNodeKey () {
      return last(this.expandKeys)
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

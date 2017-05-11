<template>
  <el-tree
    empty-text="Loading..."
    :data="collection"
    :props="defaultProps"
    accordion
    @node-click="handleNodeClick">
  </el-tree>
</template>

<script>
import { fetchCollection, navTree } from 'lib/transformer'

export default {
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
    handleNodeClick (data) {
    }
  },

  created () {
    fetchCollection((resp) => {
      this.collection = [navTree(resp.data)]
    })
  }
}
</script>

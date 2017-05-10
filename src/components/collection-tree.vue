<template>
  <el-tree
    :data="data"
    :props="defaultProps"
    accordion
    @node-click="handleNodeClick">
  </el-tree>
</template>

<script>
import data from 'lib/data'

export default {
  data () {
    return {
      data: data,
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleNodeClick (data) {
      console.log(data)
    }
  }
}
</script>

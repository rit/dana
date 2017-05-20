<template>
  <div class="series-tree">
    <el-tree
      empty-text="Loading..."
      :data="seriesTree"
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
    handleNodeClick (data) {
    }
  }
}
</script>

<style>
.series-tree {
  width: 320px;
}
</style>

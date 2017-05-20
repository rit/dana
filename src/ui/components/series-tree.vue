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

import { mapState } from 'vuex'

export default {
  props: ['seriesTreeSlug'],
  data () {
    return {
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },

  computed: {
    ...mapState({
      seriesTree: function (state) {
        // console.log(state.seriesTree[this.seriesTreeSlug])
        // return state.seriesTree[this.seriesTreeSlug]
        return state.seriesTree
      }
    })
  },

  methods: {
    handleNodeClick (data) {
    }
  },

  created () {
    // this.updateSeriesTree({ slug: this.seriesTreeSlug })
  }
}
</script>

<style>
.series-tree {
  width: 320px;
}
</style>

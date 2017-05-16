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
import { mapActions, mapState } from 'vuex'

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
      seriesTree: state => state.seriesTree
    })
  },

  methods: {
    ...mapActions([
      'updateSeriesTree'
    ]),

    handleNodeClick (data) {
    }
  },

  watch: {
    seriesTreeSlug: function (newSlug) {
      this.updateSeriesTree({ slug: newSlug })
    }
  },

  created () {
    this.updateSeriesTree({ slug: this.seriesTreeSlug })
  }
}
</script>

<style>
.series-tree {
  width: 320px;
}
</style>

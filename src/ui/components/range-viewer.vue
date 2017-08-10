<template>
  <div class="ranges">
    <header>
      <template v-for="pane in panes">
        <range-label :label="pane.name" :activeLabel="activeLabel"></range-label>
      </template>
    </header>
    <section>
      <slot></slot>
    </section>
  </div>
</template>

<script>

import RangeLabel from './range-label.vue'

const ELEMENT_NODE = 1

export default {
  props: ['startingActiveLabel'],

  components: {
    'range-label': RangeLabel
  },

  data () {
    return {
      currentName: null, // currentName is what el-tab-pane needs currentName value to hide or display
      activeLabel: null,
      panes: []
    }
  },

  methods: {
    updateActiveLabel (label) {
      this.activeLabel = label
      this.currentName = label
    },

    addPanes (pane) {
      const panes = this.$slots.default.filter(vnode => {
        return vnode.elm.nodeType === ELEMENT_NODE
      })
      const idx = panes.indexOf(pane.$vnode)
      this.panes.splice(idx, 0, pane)
    },

    removePanes (pane) {
      console.log(pane)
    }
  },

  created () {
    this.updateActiveLabel(this.startingActiveLabel)
  }
}
</script>

<style scoped>
.ranges header {
  background-color: #ecf0f1;
  padding: 2em;
  display: flex;
  flex-wrap: wrap;
}

.subrange-content {
  background-color: white;
  flex-basis: 100%;
}
</style>

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
      if (label === this.activeLabel) {
        label = null // the toggle the label
      }

      this.setLabel(label)

      if (this.$parent.setActiveRangeViewer) {
        this.$parent.setActiveRangeViewer(this)
      }
    },

    closeAll () {
      this.setLabel(null)
    },

    setLabel (label) {
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
      // console.log(pane)
    }
  },

  created () {
    this.setLabel(this.startingActiveLabel)
  }
}
</script>

<style scoped>

.ranges header {
  background-color: #eeeeee;
  display: flex;
  padding: 1em 1em 0 1em;
  flex-wrap: wrap;
  justify-content: space-between;
}

</style>

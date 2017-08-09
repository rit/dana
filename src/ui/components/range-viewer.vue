<template>
  <div class="ranges">
    <header>
      <template v-for="pane in panes">
        <range :label="pane.name"></range>
      </template>
    </header>
    <section>
      <slot></slot>
    </section>
  </div>
</template>

<script>

import range from './range.vue'

const ELEMENT_NODE = 1

export default {
  props: ['currentName'],

  components: {
    'range': range
  },

  data () {
    return {
      panes: []
    }
  },

  components: {
    'range': require('./range.vue')
  },

  methods: {
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
    console.log('currentName', this.currentName)
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

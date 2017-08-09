<template>
  <div class="ranges">
    <slot></slot>
  </div>
</template>

<script>

const ELEMENT_NODE = 1

export default {
  props: ['currentName'],

  data () {
    return {
      panes: []
    }
  },

  components: {
    'range': require('./range.vue')
  },

  methods: {
    addPanes(pane) {
      let panes = this.$slots.default.filter(vnode => {
        return vnode.elm.nodeType === ELEMENT_NODE
      })
      let idx = panes.indexOf(pane.$vnode)
      // TODO Need to make use of panes
      this.panes.splice(idx, 0, pane)
    },

    removePanes(pane) {
      // console.log(pane)
    }
  },

  created () {
    console.log('currentName', this.currentName)
  }
}
</script>

<style scoped>
.ranges {
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

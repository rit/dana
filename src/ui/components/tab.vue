<template>
  <section>
    <header>
      <ul ref="navbar">
        <li v-for="panel in panels" @click="activatePanel(panel)"> {{ panel.title }}</li>
      </ul>
    </header>
    <content>
      <slot></slot>
    </content>
  </section>
</template>

<script>

import Panel from '@ui/components/panel'

export default {
  props: ['startingActivePanel'],

  components: {
    panel: Panel
  },

  data () {
    return {
      panels: [],
      activePanel: null
    }
  },

  methods: {
    addPanel (panel) {
      this.panels.push(panel)
    },

    activatePanel (panel) {
      this.activePanel = panel.title
    }
  },

  created () {
    this.activePanel = this.startingActivePanel
  }

}

</script>

<style scoped>

ul {
  display: flex;
  border-bottom: 1px solid grey;
  justify-content: space-evenly;
}

li {
  list-style: none;
  padding: 0 1em;
  margin: 0 2em;
  cursor: pointer;
}

</style>

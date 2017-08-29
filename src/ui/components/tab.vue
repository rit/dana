<template>
  <section>
    <header>
      <ul>
        <li v-for="panel in panels"> {{ panel.title }}</li>
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
  components: {
    panel: Panel
  },

  data () {
    return {
      panels: []
    }
  },

  methods: {
    addPanel (panel) {
      this.panels.push(panel)
    }
  }

}

</script>

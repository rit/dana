<template>
  <tab>

    <panel title="Dragon">
      <div>Dragon</div>
    </panel>

    <panel title="Tigger">
      <div>Tigger</div>
    </panel>

    <panel title="Rabbit">
      <div>Rabbit</div>
    </panel>

  </tab>
</template>

<script>

import Panel from '@ui/components/panel'
import Tab from '@ui/components/tab'

export default {
  data () {
    return {
      amount: null
    }
  },
  components: {
    tab: Tab,
    panel: Panel
  }
}

</script>

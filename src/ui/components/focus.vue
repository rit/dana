<template>
  <tab startingActivePanel="Tiger">

    <panel title="Dragon">
      <div>Dragon</div>
    </panel>

    <panel title="Tiger">
      <div>Tiger</div>
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

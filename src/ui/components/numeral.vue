<template>
  <span> {{ numeral }}</span>
</template>

<script>

import numeralize from 'iso/numeralize'

export default {
  props: ['number'],

  computed: {
    numeral () {
      return numeralize(this.number)
    }
  }
}
</script>

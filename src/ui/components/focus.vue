<template>
  <form>
    <label for="">Amount</label>
    <input v-model="amount" >

    <br />

    <numeral :number="amount"></numeral>

  </form>
</template>

<script>

import Numeral from '@ui/components/numeral'

export default {
  data () {
    return {
      amount: null
    }
  },
  components: {
    numeral: Numeral
  }
}

</script>

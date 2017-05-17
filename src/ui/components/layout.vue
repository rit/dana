<template>
  <div>

    <h1>{{ greeting }}, world!</h1>

  </div>
</template>

<script>

export default {
  data () {
    return {
      greeting: 'Hello'
    }
  }
}

</script>

<style>

h1 {
  color: red
}

</style>

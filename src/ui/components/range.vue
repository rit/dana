<template>
  <section class="range">
    <div class="wrapper">
      <div class="label">
        {{ label }}
      </div>

    </div>
  </section>
</template>

<script>

export default {
  props: ['range'],

  computed: {
    label () {
      return this.range.label
    }

  },

  methods: {
  }
}

</script>

<style scoped>
.range {
  flex-basis: 25%;
}

.wrapper {
  border-bottom: 1px solid gray;
  margin: 0 2em ;
}

.label {
  padding: 1em;
}
</style>

<template>
  <section class="range">
    {{ label }}
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

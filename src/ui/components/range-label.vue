<template>
  <section class="range" :class="{ active: isActive}" >
    <div class="wrapper">
      <div class="label" @click="activate">
        {{ label }}
      </div>
    </div>
  </section>
</template>

<script>

export default {
  props: ['label', 'activeLabel'],

  data () {
    return {
      active: false
    }
  },

  computed: {
    isActive () {
      return this.label == this.activeLabel
    }
  },

  methods: {
    activate () {
      this.active = !this.active
      this.$parent.updateActiveLabel(this.label)
    }
  },

  created () {
    this.active = this.isActive
  }
}

</script>

<style scoped>
.range {
  flex-basis: 25%;
  align-self: normal;
}

.wrapper {
  padding: 1em 0;
}

.label {
  margin: 1em;
}

.active {
  background-color: white;
}
</style>

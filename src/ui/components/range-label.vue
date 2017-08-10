<template>
  <section class="range">
    <div class="wrapper">
      <div class="label" :class="{ active: isActive}" @click="activate">
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
      this.active = true
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
}

.wrapper {
  border-bottom: 1px solid gray;
  margin: 0 2em ;
}

.label {
  padding: 1em;
}

.active {
  background-color: white;
}
</style>

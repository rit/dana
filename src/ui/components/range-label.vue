<template>
  <section class="range" :class="{ active: isActive}">
    <div class="wrapper" @click="activate">
      <div class="item label">
        {{ label }}
      </div>
      <icon class="item" :name="iconName"></icon>
    </div>
  </section>
</template>

<script>

export default {
  props: ['label', 'activeLabel'],

  computed: {
    isActive () {
      return this.label == this.activeLabel
    },

    iconName () {
      if (this.isActive) return 'minus'
      return 'plus'
    }
  },

  methods: {
    activate () {
      this.$parent.updateActiveLabel(this.label)
    }
  }
}

</script>

<style scoped>
.range {
  flex-basis: 20%;
  align-self: normal;
}

.wrapper {
  padding: 1em 0;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  border-bottom: 1px solid #ddd;
}

.active .wrapper {
  border-bottom: none;
}

.item {
  flex-basis: auto;
  align-self: baseline;
}

.item:last-child {
  flex-shrink: 0;
  width: 2em;
}

.label {
  margin: 1em;
  color: #5998c9;
  font-size: 1.1em;
  font-weight: bold;
  text-decoration: underline;
}

.active {
  background-color: white;
}
</style>

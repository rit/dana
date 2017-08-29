<template>
  <div class="panel" v-show="isActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['title', 'activePanel'],

  computed: {
    isActive () {
      return this.title == this.activePanel
    }
  },

  mounted () {
    this.$parent.addPanel(this)
  }
}
</script>

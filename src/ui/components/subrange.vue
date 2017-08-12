<template>
  <div class="subrange-details">
    <h3>
      {{ range.label }}
    </h3>
    <p>
      {{ range.description }}
    </p>

    <thumbnail-viewer :canvases="range.canvases"></thumbnail-viewer>

    <!--<div class="subrange-details" v-for="sub in range.subranges">-->
    <!--  <subrange :range="sub"></subrange>-->
    <!--</div>-->
  </div>

</template>

<script>
export default {
  name: 'subrange',
  props: ['range'],

  components: {
    'thumbnail-viewer': require('./thumbnail-viewer.vue')
  },

  computed: {
    isLeaf () {
      return !this.range.subranges
    }
  }
}
</script>

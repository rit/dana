<template>
  <div class="subrange-details">
    <div>
      <h3>
        {{ range.label }}
      </h3>

      <p>
      {{ range.description }}
      </p>
    </div>

    <template v-if="range.nestedCanvas">
      <thumbnail-nested :ranges="range.subranges"></thumbnail-nested>
    </template>
    <template v-else>
      <thumbnail-viewer :canvases="range.canvases"></thumbnail-viewer>
    </template>
  </div>

</template>

<script>
export default {
  name: 'subrange',
  props: ['range'],

  components: {
    'thumbnail-nested': require('./thumbnail-nested.vue'),
    'thumbnail-viewer': require('./thumbnail-viewer.vue')
  }
}
</script>

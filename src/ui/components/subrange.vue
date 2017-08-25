<template>
  <div class="subrange-details">
    <header>
      <h3 class="item">
        {{ range.label }}
      </h3>
      <span class="item">{{ range.container }}</span>
    </header>
    <p> {{ range.description }} </p>

    <template v-if="range.nestedCanvas">
      <thumbnail-nested :ranges="range.subranges"></thumbnail-nested>
    </template>
    <template v-else>
      <thumbnail-viewer :canvases="range.canvases"></thumbnail-viewer>
    </template>
  </div>

</template>

<script>
import ThumbnailNested from './thumbnail-nested'
import ThumbnailViewer from './thumbnail-viewer'

export default {
  name: 'subrange',
  props: ['range'],

  components: {
    ThumbnailNested,
    ThumbnailViewer
  }
}
</script>

<style scoped>

header {
  display: flex;
}

.item {
  flex-basis: auto;
  align-self: baseline;
  margin-right: 1em;
}

.item:last-child {
  padding-left: 1em;
  border-left: 1px solid #ddd;
}

p {
  margin: 0;
  margin-bottom: 1em;
  padding: 0;
}

</style>

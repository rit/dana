<template>
  <ul>
    <li v-for="range in ranges">
      <figure>
        <figcaption> {{ range.label }}</figcaption>
        <thumbnail-viewer :canvases="range.canvases"></thumbnail-viewer>
      </figure>
    </li>
  </ul>
</template>

<script>
import ThumbnailViewer from './thumbnail-viewer'

export default {
  props: ['ranges'],

  components: {
    ThumbnailViewer
  }
}

</script>

<style scoped>

img {
  width: auto;
  height: 8em;
}

ul {
  /* background-color: grey; */
  margin: 0;
  padding: 0;
  display: flex;
  overflow: auto;
}

li {
  list-style: none;
  margin: 0;
  text-align: left;
  padding: 0
}

figure {
  margin: 0.5em;
  padding: 0.5em;
}
</style>

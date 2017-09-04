<template>
  <ul>
    <li v-for="range in ranges">
      <figure>
        <figcaption> {{ range.label }}</figcaption>
        <thumbnails :canvases="range.canvases"></thumbnails>
      </figure>
    </li>
  </ul>
</template>

<script>
import Thumbnails from './thumbnails'

export default {
  props: ['ranges'],

  components: {
    Thumbnails
  }
}

</script>

<style scoped>

ul {
  margin: 0;
  padding: 0;
  display: flex;
  overflow: hidden;
  width: 100%;
}

li {
  list-style: none;
  text-align: left;
  margin: 0;
  margin-top: 1em;
  padding: 0;
  color: white;
}

figure {
  margin: 0;
  padding: 0;
}

figcaption {
  margin-left: 1em;
}
</style>

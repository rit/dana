<template>
  <ul>
    <li v-for="canvas in canvases">
      <figure>
        <img :src="canvas.thumbnail['@id']" :alt="canvas.label" @click="openImageViewer(canvas)" />
        <figcaption>
          {{ canvas.label }}
        </figcaption>
      </figure>
    </li>
  </ul>
</template>

<script>
import { TweenLite } from "gsap";
// Initialize the ScrollToPlugin by importing
import ScrollToPlugin from "gsap/ScrollToPlugin";

export default {
  props: ['canvases'],

  methods: {
    openImageViewer(canvas) {
      TweenLite.to(window, 0.25, {scrollTo:"#image-viewer"});
    }
  }
}
</script>
<style scoped>
img {
  width: auto;
  height: 8em;
}

ul {
  background-color: #333;
  margin: 0;
  padding: 0;
  display: flex;
  overflow: hidden;
  flex-basis: 100%;
}

li {
  list-style: none;
  margin: 0;
  text-align: center;
  padding: 0
}

figure {
  margin: 0.5em;
  padding: 0.5em;
  background-color: #333;
  color: white;
  font-weight: bold;
}
</style>

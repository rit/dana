<template>
  <div class="thumbnails">
    <span @click="backward()" class="control">
      <icon name="chevron-left" class="large"></icon>
    </span>
    <ul ref="carousel">
      <li v-for="canvas in canvases">
        <figure>
          <img :src="canvas.thumbnail['@id']" :alt="canvas.label" />
          <figcaption>
            {{ canvas.label }}
          </figcaption>
        </figure>
      </li>
    </ul>
    <span @click="forward()" class="control">
      <icon name="chevron-right" class="large"></icon>
    </span>
  </div>
</template>

<script>
import { TweenLite } from "gsap";
// Initialize the ScrollToPlugin by importing
import ScrollToPlugin from "gsap/ScrollToPlugin";


export default {
  props: ['canvases'],

  methods:{
    forward() {
      var x = this.$refs.carousel.scrollLeft + (this.$refs.carousel.clientWidth/2)
      TweenLite.to(this.$refs.carousel, 0.30, {scrollTo:{ x }});
    },

    backward() {
      var x = this.$refs.carousel.scrollLeft - (this.$refs.carousel.clientWidth/2)
      TweenLite.to(this.$refs.carousel, 0.30, {scrollTo:{ x }});
    }
  }
}
</script>

<style scoped>
.thumbnails {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  background-color: #333;
}

.control {
  padding: 0.4em;
}

.large {
  width: 1.5em;
  height: auto;
  color: #fff;
}

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

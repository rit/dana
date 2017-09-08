<template>
  <div class="thumbnails">
    <span @click="backward()" class="control">
      <icon name="chevron-left" class="large"></icon>
    </span>
    <slot></slot>
    <span @click="forward()" class="control">
      <icon name="chevron-right" class="large"></icon>
    </span>
  </div>
</template>

<script>
import { TweenLite } from 'gsap';
/* eslint-disable no-unused-vars */
import ScrollToPlugin from 'gsap/ScrollToPlugin';

export default {
  props: ['canvases'],

  methods: {
    carousel () {
      return this.$slots.default[0].elm
    },

    forward () {
      // debugger
      var x = this.carousel().scrollLeft + (this.carousel().clientWidth / 2)
      TweenLite.to(this.carousel(), 0.30, { scrollTo: { x }});
    },

    backward () {
      var x = this.carousel().scrollLeft - (this.carousel().clientWidth / 2)
      TweenLite.to(this.carousel(), 0.30, { scrollTo: { x }});
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
  cursor: pointer;
}

.large {
  width: 1.5em;
  height: auto;
  color: #fff;
}
</style>

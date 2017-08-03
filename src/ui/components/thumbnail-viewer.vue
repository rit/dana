<template>
  <ul>
    <li v-for="canvas in canvases">
      <figure>
        <img :src="canvas.thumbnail['@id']" :alt="canvas.label" />
        <figcaption>
          {{ canvas.label }}
        </figcaption>
      </figure>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['canvases']
}
</script>

<style scoped>

img {
  width: auto;
  height: 8em;
}

ul {
  background-color: grey;
  margin: 0;
  padding: 0;
  display: flex;
  overflow: auto;
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
  background-color: white;
}
</style>

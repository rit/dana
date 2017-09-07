<template>
  <div id="image-viewer">
    <iframe
      :src="miradorSrc"
      title="Mirador"
      allowfullscreen="true"
      webkitallowfullscreen="true"
      mozallowfullscreen="true">
    </iframe>

  </div>
</template>

<script>

import URI from 'urijs'

export default {
  props: ['manifestUri', 'canvasId'],

  computed: {
    miradorSrc () {
      var uri = new URI('/static/mirador/index.html')
      uri.search({manifestUri: this.manifestUri, canvasId: this.canvasId})
      console.log('uri', uri.toString())
      return uri
    }
  }
}
</script>


<style scoped>
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid silver;
    margin-top: 1em;
    margin-bottom: 2em;
  }

  iframe {
    width: 100%;
    height: 40em;
  }
</style>

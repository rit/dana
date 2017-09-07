<template>
  <div id="image-viewer">
    <iframe
      src="/static/mirador/index.html?manifest=szeeman"
      title="Mirador"
      allowfullscreen="true"
      webkitallowfullscreen="true"
      mozallowfullscreen="true">
    </iframe>

  </div>
</template>

<script>

export default {
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

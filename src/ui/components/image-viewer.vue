<template>
  <div id="image-viewer">
    <iframe v-if="miradorSrc"
      :src="miradorSrc"
      title="Mirador"
      allowfullscreen="true"
      webkitallowfullscreen="true"
      mozallowfullscreen="true">
    </iframe>
  </div>
</template>

<script>
import { isEmpty } from 'lodash'
import { mapState, mapMutations } from 'vuex'
import URI from 'urijs'

export default {
  computed: {
    ...mapState(['imageViewerOptions']),

    miradorSrc () {
      if (isEmpty(this.imageViewerOptions)) return

      var uri = new URI('/static/mirador/index.html')
      uri.search(this.imageViewerOptions)
      return uri.toString()
    }
  },

  methods: {
    ...mapMutations(['miradorInstance']),

    danaSetMiradorInstance (miradorInstance) {
      this.miradorInstance({ miradorInstance })
    }
  },

  mounted () {
    window.danaSetMiradorInstance = this.danaSetMiradorInstance
  }
}
</script>


<style scoped>
  div {
    display: flex;
    /*
    justify-content: center;
    align-items: center;
    */
    border: 1px solid silver;
    margin-top: 1em;
    margin-bottom: 2em;
  }

  iframe {
    width: 100%;
    height: 40em;
  }
</style>

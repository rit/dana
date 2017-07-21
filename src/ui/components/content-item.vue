<template>
  <div class="wrapper">
    <router-link :to="{ name: 'ObjectHome', params: { collectionSlug, objectSlug }}" append>
      {{ label }}
    </router-link>

    <div class="physical-location" v-if="isManifest">
      Box: {{ box }}
      <br />
      Folder: {{ folder }}
    </div>
  </div>
</template>

<script>
export default {
  props: ['item', 'collectionSlug'],

  computed: {
    label () {
      return this.item.label
    },

    objectSlug () {
      return this.item.slug
    },

    box () {
      return this.item.box
    },

    folder () {
      return this.item.folder
    },

    isManifest () {
      return this.item.type === 'sc:Manifest'
    }
  }

}
</script>

<style scoped>

.wrapper {
  display: inline-block;
  padding: 1em 0;
  border-bottom: 1px solid silver;
  width: 90%;
  margin-left: 1em;
}

.physical-location {
  border-left: 1px solid silver;
  padding-left: 1em;
  width: 120px;
  float: right;
}

</style>

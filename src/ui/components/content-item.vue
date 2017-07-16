<template>
  <div>
    <router-link :to="{ name: 'ObjectHome', params: { collectionSlug, objectSlug }}" append>
      {{ label }}
    </router-link>

    <div class="xcontainer">
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
    }
  }

}
</script>

<style>

.wrapper {
  padding: 1em;
  border-top: 1px solid gray;
}

.container {
  border-left: 1px solid gray;
  padding-left: 1em;
}

</style>

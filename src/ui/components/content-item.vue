<template>
  <div class="wrapper">
    <router-link :to="{ name: 'ObjectHome', params: { collectionSlug, objectSlug }}" append>
      {{ label }}
    </router-link>

    <!--<div class="xcontainer">-->
    <!--  Box: {{ box }}-->
    <!--  <br />-->
    <!--  Folder: {{ folder }}-->
    <!--</div>-->
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
  display: inline-block;
  padding: 1em 0;
  border-bottom: 1px solid silver;
  width: 90%;
  margin-left: 1em;
}

.container {
  border-left: 1px solid gray;
  padding-left: 1em;
}

</style>

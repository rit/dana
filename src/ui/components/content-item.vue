<template>
  <div class="wrapper">
    <div class="item">

    <section class="item-detail">
      <div v-if="isManifest">
        <router-link :to="{ name: 'ObjectHome', params: { collectionSlug, objectSlug }}" append>
          {{ label }}
        </router-link>
      </div>
      <div class="label" v-else>
        {{ label }}
      </div>

      <p> {{ description }}</p>
    </section>

    <div class="physical-location" v-if="isManifest">
      Box: {{ box }}
      <br />
      Folder: {{ folder }}
    </div>

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

    description () {
      return this.item.description
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

.item {
  display: flex;
}

.item-detail {
  width: 100%;
}

.physical-location {
  border-left: 1px solid silver;
  padding-left: 1em;
  width: 10em;
  align-self: center;
}

.label {
  font-weight: bold;
}

a {
  font-weight: bold;
  text-decoration: none;
}

p {
  margin: 0.3em 0;
}

</style>

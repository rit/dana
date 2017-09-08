<template>
  <modal name="detail"
         height="auto"
         :scrollable="true"
         width="60%" 
         :adaptave="true"
         pivotX=1 
         pivotY=.15
         transition="slide"
         @closed="closeModal">
    <div class="header">
      <div @click="closeModal" class="action">
        <icon class="close" name="times" scale="2"></icon>
      </div>
      <collection-heading :heading="collectionSlideOut"></collection-heading>
    </div>
    <div class="modal-body">
      <h4>Description</h4>
      <p>{{ description }}</p>
      <h4>Arrangement</h4>
      <p v-for="entry in arrangement">{{ entry }}</p>
    </div>
  </modal>
</template>

<script>

import { isEmpty } from 'lodash'
import { mapActions, mapState } from 'vuex'

export default {

  computed: {
    ...mapState(['collectionSlideOut']),

    description () {
      return this.collectionSlideOut.description
    }, 

    arrangement () {
      return this.collectionSlideOut.arrangement
    }
  },

  watch: {
    collectionSlideOut (newCollectionSlideOut) {
      if (!isEmpty(newCollectionSlideOut)) {
        this.$modal.show('detail')
      }
    }
  },

  methods: {
    ...mapActions([
      'updateCollectionSlideOut'
    ]),

    closeModal () {
      this.$modal.hide('detail')
      this.updateCollectionSlideOut({ collection: {}})
    }
  }
}

</script>

<style>
.v--modal {
  background: #c6c6c6;
  display: flex;
  flex-direction: column;
  -ms-flex-driection: column;
}

.slide-enter-active, .slide-leave-active {
  transition: all .5s;
}

.slide-enter, .slide-leave-to {
  opacity: 0;
  transform: translateX(800px);;
}

</style>

<style scoped>

.v--modal-overlay {
  background: rgba(0, 0, 0, 0.6);
}

.header {
  padding-top: 1em;
  text-align: right;
  background: #ddd;
}

.modal-body {
  flex: 1;
  padding-left: 6em;
  padding-right: 2em;
  padding-bottom: 6em;
}

.header .action {
  width: 6em;
  float: left;
  text-align: center;
  cursor: pointer;
}

.close {
  width: auto;
  height: 2em;
}

h4 {
  margin-bottom: 0;
}

p {
  line-height: 1.8em;
  margin-top: 0;
}

</style>

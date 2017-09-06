<template>
  <div>
    <div :class="{ closed: isClosed }" class="modal-overlay" id="modal-overlay"></div>

    <div :class="{ closed: isClosed }" class="modal" id="modal">
      <div class="modal-guts">
        <div class="header">
          <!--<div class="action">
            <el-button @click="closeModal" type="secondary" icon="close"></el-button>
          </div>-->
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
      </div>
    </div>
  </div>
</template>
<script>

import { isEmpty } from 'lodash'
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      isClosed: true
    }
  },

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
        this.isClosed = false
      }
    }
  },

  methods: {
    ...mapActions([
      'updateCollectionSlideOut'
    ]),

    closeModal () {
      this.isClosed = true
      this.updateCollectionSlideOut({ collection: {}})
    }
  }
}
</script>

<style scoped>

.modal {
  position: fixed;
  right: 0;

  width: 800px;
  max-width: 100%;
  height: 600px;
  max-height: 100%;
  z-index: 100;
  display: flex;
  
  /*position: absolute;
  right: 0;
  top: 0;
  z-index: 100;
  background: white;*/
}

.closed {
  display: none;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 50;

  background: rgba(0, 0, 0, 0.6);
}

.modal-guts {
  position: absolute;
  top: 0;
  left: 0;
  right: -100px;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: #c6c6c6;
  transition: 1s;
  transform: translateX(-100, 0);

  /*margin: 2em 2em 6em 0;*/
}


.modal-body {
  position: absolute;
  margin-left: 6em;
  margin-top: 6em;
  margin-right: 2em;
}

.header {
  position: absolute;
  width: 100%;
  margin-right: 2em;
  text-align: right;
  background: #ddd;
  /*position: relative;*/
  /*margin: 2em 0;*/
}

.header .action {
  width: 6em;
  float: left;
  text-align: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}

.close {
  width: auto;
  height: 1.4em;
}
/*.header .heading {
  margin-right: 2em
}*/

h4 {
  margin-bottom: 0;
}

p {
  line-height: 1.8em;
  margin-top: 0;
}

</style>

<template>
  <div>
    <div :class="{ closed: isClosed }" class="modal-overlay" id="modal-overlay"></div>

    <div :class="{ closed: isClosed }" class="modal" id="modal">
      <button class="close-button" id="close-button" @click="closeModal">X</button>
      <div class="modal-guts">
        <h1>Modal Example</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae expedita corrupti laudantium aperiam, doloremque explicabo ipsum earum dicta saepe delectus totam vitae ipsam doloribus et obcaecati facilis eius assumenda, cumque.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae expedita corrupti laudantium aperiam, doloremque explicabo ipsum earum dicta saepe delectus totam vitae ipsam doloribus et obcaecati facilis eius assumenda, cumque.</p>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isClosed: false
    }
  },

  methods: {
    closeModal () {
      this.isClosed = true
    }
  }
}
</script>

<style scoped>
/* Based from https://css-tricks.com/considerations-styling-modal/ */

.modal {
  /* This way it could be display flex or grid or whatever also. */
  display: block;

  /* Probably need media queries here */
  width: 800px;
  max-width: 100%;

  height: 800px;

  position: absolute;

  z-index: 100;

  right: 0;
  top: 0;

  background: white;
  box-shadow: 0 0 60px 10px rgba(0, 0, 0, 0.9);
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
  width: 100%;
  height: 100%;
  overflow: auto;
  padding: 20px 50px 20px 80px;
}



* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

h1 {
  margin: 0 0 20px 0;
}

.modal .close-button {
  position: absolute;

  /* don't need to go crazy with z-index here, just sits over .modal-guts */
  z-index: 1;

  top: 20px;

  /* needs to look OK with or without scrollbar */
  left: 20px;

  border: 0;
  background: black;
  color: white;
  padding: 5px 10px;
  font-size: 1.3rem;
}

</style>

<template>
  <el-row class="wrapper">
    <el-col :span="18">
      {{ label }}
    </el-col>
    <el-col :span="6">
      <div class="container">
        Box: {{ box }}
        <br />
        Folder: {{ folder }}
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: ['item'],

  computed: {
    label () {
      return this.item.label
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

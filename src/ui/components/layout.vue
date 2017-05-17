<template>
  <div>

    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <h1>{{ greeting }}, world!</h1>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple">
          left content
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          right content
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>

export default {
  data () {
    return {
      greeting: 'Hello'
    }
  }
}

</script>

<style>

h1 {
  color: red
}

</style>

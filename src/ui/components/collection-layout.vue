<template>
  <div>
    <el-row>
      <el-col :span="24">
        <header>
          <!-- navigation.html goes here -->
        </header>
      </el-col>
    </el-row><!-- /.row -->

    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="14">
        <slot name="collection-header"></slot>
      </el-col>

      <el-col :xs="24" :sm="24" :md="24" :lg="10">
        <slot name="collection-nav"></slot>
      </el-col>
      <hr>
    </el-row><!-- /.row -->

    <el-row>
      <el-col :span="24">
        <div>
          <slot name="series-header"></slot>
        </div>
      </el-col>
    </el-row><!-- /.row -->

    <el-row >
      <el-col :span="24">
        <slot name="image-viewer"></slot>
      </el-col>
    </el-row><!-- /.row -->

    <el-row :gutter="15">
      <el-col :xs="24" :sm="24" :md="24" :lg="8">
        <slot name="collection-hierarchy"></slot>
      </el-col>

      <el-col :xs="24" :sm="24" :md="24" :lg="16">
        <slot name="content-header"></slot>
        <slot name="content-metadata"></slot>
      </el-col>
    </el-row><!-- /.row -->
  </div>

</template>

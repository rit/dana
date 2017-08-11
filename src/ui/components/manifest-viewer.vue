<template>
  <section>
    <h2>Navigate {{ label }}</h2>

    <template v-for="row in rows">
    <range-viewer>
      <template v-for="range in row">
        <el-tab-pane :name="range.label">
          <section>
            <div class="subranges">
              <div class="subrange" v-for="sub in range.subranges">
                <h3>
                  {{ sub.label }}
                </h3>
                <thumbnail-viewer :canvases="sub.canvases"></thumbnail-viewer>
              </div>
            </div>

            <!--if there is no subrange, there may be canvases-->
            <thumbnail-viewer :canvases="range.canvases" v-if="!range.subranges"></thumbnail-viewer>
          </section>
        </el-tab-pane>
      </template>
    </range-viewer>
    </template>
  </section>
</template>

<script>

import { parse } from 'iso/ranger'
import { chunk } from 'lodash'

const RANGES_PER_ROW = 4

export default {
  props: ['manifest'],

  components: {
    'range-viewer': require('./range-viewer.vue'),
    'thumbnail-viewer': require('./thumbnail-viewer.vue')
  },

  computed: {
    label () {
      return this.manifest.label
    },

    ranges () {
      if (this.manifest.structures) {
        return parse(this.manifest).subranges
      }
    },

    rows () {
      return chunk(this.ranges, RANGES_PER_ROW)
    }
  }
}
</script>

<style scoped>

h2 {
  font-weight: bold;
  padding-top: 0.5em;
  margin-top: 2em;
  border-top: 2px solid #3498db;
  background-color: white;
}

</style>

<style>
.el-tabs__item {
  font-size: 1.2em;
}


</style>

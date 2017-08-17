<template>
  <section>
    <h2>Navigate {{ label }}</h2>
      <template v-if="rootRange.nestedCanvas">
        <section>
          <subrange :range="rootRange"></subrange>
        </section>
      </template>
      <template v-else>
        <template v-for="row in rows">
          <range-viewer>
            <template v-for="range in row">
              <el-tab-pane :name="range.label">
                <section v-if="range.nestedCanvas">
                  <div class="subranges">
                    <div class="subrange-details">
                      <thumbnail-nested :ranges="range.subranges"></thumbnail-nested>
                    </div>
                  </div>
                </section>
                <section v-else-if="range.subranges">
                  <div class="subranges" v-for="sub in range.subranges">
                    <subrange :range="sub"></subrange>
                  </div>
                </section>
                <section v-else>
                  <div class="subranges">
                    <subrange :range="range"></subrange>
                  </div>
                </section>
              </el-tab-pane>
            </template>
          </range-viewer>
        </template>
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
    'subrange': require('./subrange.vue'),
    'thumbnail-nested': require('./thumbnail-nested.vue'),
    'thumbnail-viewer': require('./thumbnail-viewer.vue')
  },

  data () {
    return {
      activeRangeViewer: null
    }
  },

  computed: {
    label () {
      return this.manifest.label
    },

    rootRange () {
      if (this.manifest.structures) {
        return parse(this.manifest)
      }
      return {}
    },

    ranges () {
      return this.rootRange.subranges
    },

    rows () {
      return chunk(this.ranges, RANGES_PER_ROW)
    }
  },

  methods: {
    setActiveRangeViewer (rangeViewer) {
      if (this.activeRangeViewer !== rangeViewer) {
        this.activeRangeViewer &&
        this.activeRangeViewer.closeAll()
      }

      this.activeRangeViewer = rangeViewer
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

h3 {
  margin: 0;
}

.subranges {
  background-color: #eeeeee;
  padding: 0 1em;
}

.subrange-details {
  background-color: white;
  padding: 0.5em 1em;
}

</style>

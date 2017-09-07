<template>
  <section>
    <header>
      <h2>Navigate {{ label }}</h2>
      <span @click="toggleManifest" class="clickable">
        <icon class="toggle" :name="manifestSwitch"></icon>
      </span>
    </header>

    <content :class="{ hidden: isCollapsed }">

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
                    <subrange :range="range"></subrange>
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
    </content>
  </section>
</template>

<script>

import { mapMutations } from 'vuex'

import { parse } from 'iso/ranger'
import { chunk } from 'lodash'

import RangeViewer from './range-viewer'
import Subrange from './subrange'
import ThumbnailNested from './thumbnail-nested'
import ThumbnailViewer from './thumbnail-viewer'

const RANGES_PER_ROW = 4

export default {
  props: ['manifest'],

  components: {
    RangeViewer,
    Subrange,
    ThumbnailNested,
    ThumbnailViewer
  },

  data () {
    return {
      activeRangeViewer: null,
      isManifestActive: true,
    }
  },

  computed: {
    label () {
      return this.manifest.label
    },

    manifestSwitch () {
      return this.isManifestActive ? 'minus' : 'plus'
    },

    isCollapsed () {
      return !this.isManifestActive
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
    ...mapMutations(['imageViewerOptions']),

    setActiveRangeViewer (rangeViewer) {
      if (this.activeRangeViewer !== rangeViewer) {
        this.activeRangeViewer &&
        this.activeRangeViewer.closeAll()
      }

      this.activeRangeViewer = rangeViewer
    },

    toggleManifest () {
      this.isManifestActive = !this.isManifestActive
    }
  },

  watch: {
    manifest (newVal, oldVal) {
      if (newVal['@id']) {
        this.imageViewerOptions({ manifestUri: newVal['@id']})
      }
    }
  }
}
</script>

<style scoped>


header {
  display: flex;
  border-top: 2px solid #3498db;
  padding-top: 0.5em;
  margin-top: 2em;
  justify-content: space-between;
  align-items: center;
}

h2 {
  font-weight: bold;
  background-color: white;
}

h3 {
  margin: 0;
}

.subranges {
  background-color: #eeeeee;
  padding: 0 1em;
}

.subranges:last-child {
  padding-bottom: 1em;
  background-color: #eee;
}

.subrange-details {
  background-color: white;
  padding: 0.5em 1em;
}

.hidden {
  display: none;
}

.clickable {
  cursor: pointer;
}

.toggle {
  width: auto;
  height: 1.4em;
}

</style>

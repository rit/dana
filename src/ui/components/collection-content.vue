<template>
  <div class="collection-content">
    <div class="loader" v-loading="loading">
    </div>
    <transition name="el-zoom-in-center">
      <collection-heading v-if="heading" :heading="heading" showDetail="true">
      </collection-heading>
    </transition>

      <div v-if="children">
        <h3>Collections ({{ children.length }})</h3>
        <section>
          <el-tree
            lazy
            empty-text="Loading..."
            class="el-tree--dana-content dana"
            :data="children"
            :load="loadData"
            :props="defaultProps"
            node-key="slug"
            :render-content="renderItem"
            @node-click="handleNodeClick"
            :indent="36">
          </el-tree>
        </section>
      </div>

    <!--<router-view ></router-view>-->
  </div>
</template>

<script>

import { isEmpty } from 'lodash'
import { mapActions, mapState } from 'vuex'

import ContentItem from './content-item';

export default {

  props: ['collectionSlug', 'seriesSlug', 'subseriesSlug'],

  data () {
    return {
      defaultProps: {
        children: 'children',
        isLeaf: 'isLeaf',
        label: 'label'
      }
    }
  },

  computed: {
    ...mapState(['collectionContent']),

    /* children are both manifest and collection */
    children () {
      return this.collectionContent.children
    },

    heading () {
      return this.collectionContent.heading
    },

    contentSlug () {
      return this.subseriesSlug || this.seriesSlug || this.collectionSlug
    },

    loading () {
      return isEmpty(this.collectionContent)
    }
  },

  methods: {
    ...mapActions(['updateCollectionContent', 'appendCollectionContent']),

    loadData (node, resolve) {
      console.log('loadData')
      resolve(this.collectionContent.children)
    },

    renderItem (h, comp) {
      var data = comp.data
      var node = comp.node
      return (
        <ContentItem item={data} key={data.slug} collectionSlug={this.collectionSlug}></ContentItem>
      )
    },

    handleNodeClick (data, node, tree) {
      if (data.type === 'sc:Collection') {
        // TODO skip if already fetched
        // this.appendCollectionContent({ slug: data.slug, collection: data })
      }
    },
  },

  watch: {
    contentSlug (slug, oldSlug) {
      this.updateCollectionContent({ slug })
    }
  },

  created () {
    this.updateCollectionContent({ slug: this.contentSlug })
  }
}
</script>

<style>

/*
Reset line-height and height. Scoped CSS won't work.
*/
.dana .el-tree-node__content {
  line-height: initial;
  height: initial;
  cursor: pointer;
}

.dana .el-tree-node__expand-icon {
}

.dana .is-current > div.el-tree-node__content {
  background-color: unset;
  color: unset;
}


</style>

<style scoped>

.collection-content {
  position: relative
}

.loader {
  position: absolute;
  top: 3em;
  left: 0;
}

.el-tree--dana-content {
  border: none;
}

</style>

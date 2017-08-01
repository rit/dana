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
    </div>

    <section>
      <el-tree class="el-tree--dana-content dana"
        lazy
        node-key="slug"
        empty-text="Loading..."
        @node-click="navigateToObjectDetails"
        :load="loadData"
        :props="defaultProps"
        :render-content="renderItem"
        :indent="36">
      </el-tree>
    </section>

  </div>
</template>

<script>

import { isEmpty } from 'lodash'
import { mapActions, mapState, mapGetters } from 'vuex'

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
    ...mapState(['collections']),
    ...mapGetters(['subcollectionsBySlug']),

    rootCollection () {
      return this.subcollectionsBySlug(this.contentSlug)
    },

    /* children are both manifest and collection */
    children () {
      return this.rootCollection.children
    },

    heading () {
      return this.rootCollection.heading
    },

    contentSlug () {
      return this.subseriesSlug || this.seriesSlug || this.collectionSlug
    },

    loading () {
      return isEmpty(this.rootCollection)
    }
  },

  methods: {
    ...mapActions(['updateCollectionContent']),

    loadData (node, resolve) {
      var slug = this.contentSlug
      if (node.data) {
        slug = node.data.slug
      }
      if (node.parent === null) {
        this.rootTree = node
        this.rootResolver = resolve
      }
      this.updateCollectionContent({ slug, resolve })
    },

    navigateToObjectDetails (data, node, tree) {
      if (data.isLeaf) {
        this.$router.push({ name: 'ObjectHome',
          params: {
            collectionSlug: this.collectionSlug,
            objectSlug: data.slug
          }
        })
      }
    },

    renderItem (h, comp) {
      var data = comp.data
      var node = comp.node
      return (
        <ContentItem item={data} key={data.slug} collectionSlug={this.collectionSlug}></ContentItem>
      )
    }
  },

  watch: {
    contentSlug (slug, oldSlug) {
      // NOTE el-tree's resolve will append new data.
      // So we have to clear the old data first.
      this.rootTree.setData([])
      this.updateCollectionContent({ slug, resolve: this.rootResolver })

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

.dana .el-tree-node {
  white-space: unset;
}

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

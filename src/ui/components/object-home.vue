<template>
  <div id="object-home">
    <h2>Full Record Details</h2>
    <ul class="metadata">
      <li>
        <div class="label">
          <span> Title </span>
        </div>
        <div class="value"> {{ label }} </div>
      </li>

      <li v-for="line in metadata">
        <div class="label">
          <span> {{ line.label }} </span>
        </div>
        <metadata
          :render-fn="line.label.trim()"
          :value="line.value"
        />
      </li>
    </ul>
  </div>
</template>

<script>

import { mapActions, mapState, mapGetters } from 'vuex'

const Metadata = {
  props: ['renderFn', 'value'],

  methods: {

    renderText (h, value) {
      return (
        <div class="value">
          { value }
        </div>
      )
    },

    ["renderList"] (h, value) {
      return (
        <ul class="value metadata-list">
          { value.map((item) => {
              return (
                <li>
                  { item }
                </li>
              )
            })
          }
        </ul>
      )
    },

    ["Form/Genre"] (h, value) {
      return this.renderList(h, value)
    },

    ["Subject"] (h, value) {
      return this.renderList(h, value)
    },

    ['ID/Acc. No.'] (h, value) {
      return this.renderText(h, value[0])
    }

  },

  render(h) {
    var fn = this[this.renderFn]
    if (fn) {
      return fn(h, this.value)
    }

    return this.renderText(h, this.value)
  }
}


export default {

  props: ['objectSlug'],

  components: {
    'metadata': Metadata
  },

  computed: {
    ...mapGetters(['collectionBySlug']),

    collection () {
      return this.collectionBySlug(this.objectSlug)
    },

    label () {
      return this.collection.label
    },

    metadata () {
      return this.collection.metadata
    }

  },

  methods: {
    ...mapActions(['fetchCollection']),
  },


  watch: {
    objectSlug () {
      this.fetchCollection({ slug: this.objectSlug })
    }
  },

  created () {
    this.fetchCollection({ slug: this.objectSlug })
  }

}
</script>

<style scoped>
h2 {
  font-weight: bold;
  padding-top: 0.5em;
  margin-top: 2em;
  border-top: 2px solid #3498db;
}

ul {
  padding: 0;
}

li {
  border-bottom: 1px solid silver;
  list-style: none;
  font-size: 1.2em;
  padding: 1.5em 0;
  display: flex;
}

.label {
  width: 20em;
  font-weight: bold;
}

.label span:after {
  content: ":";
  margin-left: -0.2em;
}


.value {
  width: 100%;
}

</style>

<style>

.metadata-list li {
  list-style: none
}

</style>

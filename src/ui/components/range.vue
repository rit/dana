<template>
  <div>
    <div>
      <ul>
        <li v-for="range in subranges">
          {{ range.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import { parse } from 'iso/ranger'

export default {
  props: ['manifest'],

  computed: {
    label () {
      return this.manifest.label
    },

    subranges () {
      if (this.manifest.structures) {
        return parse(this.manifest).subranges
      }
    }
  },

  methods: {
  }
}
</script>

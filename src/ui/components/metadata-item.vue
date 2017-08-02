<script>
export default {
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
</script>

<style scoped>

.metadata-list li {
  list-style: none
}

</style>

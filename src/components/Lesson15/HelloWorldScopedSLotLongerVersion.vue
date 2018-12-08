<script>
export default {
  render(createElement) {
    return createElement(
      'span',
      {
        attrs: {
          class: 'text-xl text-blue font-bold'
        }
      },
      [
        // for scoped slot we use '$scopedSlots' property to transfer data from child to parent
        // so slots are properties or values and scoped slots are functions
        this.$scopedSlots.default({
          subject: 'world'
        })
      ]
    )
  }
}
</script>

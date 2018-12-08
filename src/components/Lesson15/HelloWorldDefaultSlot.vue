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
        // we we use 'normal' slot we cam access ot over 'default' property
        // otherwise we use name like this.$slots.header or name that you use
        this.$slots.default
      ]
    )
  }
}
</script>

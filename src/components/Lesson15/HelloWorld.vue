<script>
export default {
  //createElement argument is needed when we want to create elements in our case we just return text nothing else
  render() {
    return this.$scopedSlots.default({
      subject: 'world'
    })
  }
}
</script>

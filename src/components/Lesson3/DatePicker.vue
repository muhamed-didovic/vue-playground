<template>
  <input :value="value" ref="input" placeholder="YYYY-MM-DD" />
</template>

<script>
import 'pikaday/css/pikaday.css'
import Pikaday from 'pikaday'

export default {
  props: {
    value: { required: true },
    format: { default: 'YYYY-MM-DD' },
    options: { default: {} }
  },
  mounted() {
    const picker = new Pikaday({
      field: this.$refs.input,
      format: this.format,
      onSelect: () => {
        this.$emit('input', picker.toString())
      },
      ...this.options
    })
  }
}
</script>

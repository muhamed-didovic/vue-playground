<template>
  <span
    class="toggle"
    role="checkbox"
    tabindex="0"
    @click="toggle"
    @keydown.space.prevent="toggle"
    :aria-checked="toggled.toString()"
  ></span>
</template>

<script>
export default {
  // this way we can change prop and event for v-model
  model: {
    prop: 'toggled',
    event: 'toggle'
  },
  props: ['toggled'],
  methods: {
    toggle() {
      this.$emit('toggle', !this.toggled)
    }
  }
}
</script>

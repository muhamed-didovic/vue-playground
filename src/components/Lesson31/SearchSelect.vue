<template>
  <div class="search-select" :class="{ 'is-active': isOpen }">
    <button
      ref="button"
      @click="open"
      type="button"
      class="search-select-input"
    >
      <span v-if="value !== null">{{ value }}</span>
      <span v-else class="search-select-placeholder">Select a band...</span>
    </button>
    <div v-show="isOpen" class="search-select-dropdown">
      <input ref="search" class="search-select-search" v-model="search" />
      <ul v-show="filteredOptions.length > 0" class="search-select-options">
        <li
          class="search-select-option"
          v-for="option in filteredOptions"
          :key="option"
          @click="select(option)"
        >
          {{ option }}
        </li>
      </ul>
      <div v-show="filteredOptions.length === 0" class="search-select-empty">
        No results found for "{{ search }}"
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value', 'options', 'filterFunction'],
  data() {
    return {
      isOpen: false,
      search: ''
    }
  },
  computed: {
    filteredOptions() {
      return this.filterFunction(this.search, this.options)
    }
  },
  methods: {
    open() {
      this.isOpen = true
      this.$nextTick(() => {
        this.$refs.search.focus()
      })
    },
    close() {
      this.isOpen = false
      this.$refs.button.focus()
    },
    select(option) {
      this.$emit('input', option)
      this.search = ''
      this.close()
    }
  }
}
</script>

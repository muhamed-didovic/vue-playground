<template>
  <form class="card" @submit.prevent="submit">
    <h1 class="text-2xl font-bold mb-6">Your Settings - Lesson 1 Final</h1>
    <label class="block mb-6">
      <span class="form-label mb-2">Email Address</span>
      <input v-model="email" class="form-input" placeholder="you@example.com" />
    </label>
    <div class="mb-8">
      <span class="form-label mb-2">Newsletter</span>
      <div class="flex justify-between items-center">
        <p class="mr-4">Send you occasional news and updates.</p>
        <toggle-input v-model="receiveNewsletter"></toggle-input>
        <!-- or longer version -->
        <!--
          <toggle-input :value="receiveNewsletter" @input="newValue => (receiveNewsletter = newValue)"></toggle-input>
        -->
      </div>
    </div>
    <div class="text-right">
      <button type="button" class="btn btn-blue" @click="submit">
        Update Settings
      </button>
    </div>
  </form>
</template>

<script>
import ToggleInput from './ToggleInput.vue'

export default {
  components: {
    ToggleInput
  },
  data() {
    return {
      email: 'jane@example.com',
      receiveNewsletter: false
    }
  },
  methods: {
    submit() {
      /* eslint-disable-next-line no-console */
      console.log('Submitting preferences...', {
        email: this.email,
        receiveNewsletter: this.receiveNewsletter
      })
    }
  }
}
</script>

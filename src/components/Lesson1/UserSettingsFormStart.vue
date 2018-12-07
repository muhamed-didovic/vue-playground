<template>
  <form class="card" @submit.prevent="submit">
    <h1 class="text-2xl font-bold mb-6">
      Start with Your Settings - Lesson 1 Start
    </h1>
    <label class="block mb-6">
      <span class="form-label mb-2">Email Address</span>
      <input v-model="email" class="form-input" placeholder="you@example.com" />
      or
      <input
        :value="email"
        @input="email = $event.target.value"
        class="form-input"
        placeholder="you@example.com"
      />
    </label>
    <div class="mb-8">
      <span class="form-label mb-2">Newsletter</span>
      <div class="flex justify-between items-center">
        <p class="mr-4">Send you occasional news and updates.</p>
        <span
          class="toggle flex-no-shrink"
          role="checkbox"
          tabindex="0"
          @click="toggleNewsLetter"
          @keydown.space.prevent="toggleNewsLetter"
          :aria-checked="receiveNewsletter.toString()"
        ></span>
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
// Link: https://codesandbox.io/s/oxxlx055xy?from-embed%20
// https://codesandbox.io/s/mqnzm84plx?from-embed%20https://codesandbox.io/s/n4qolyr42m?from-embed%20https://codesandbox.io/s/1v1o4lvp9j?from-embed%20https://codesandbox.io/s/z0mx3w9km?from-embed%20https://codesandbox.io/s/vy0k8283o5?from-embed%20https://codesandbox.io/s/xv1ooy9v1p?from-embed%20https://codesandbox.io/s/8x54ow4vl9?from-embed%20https://codesandbox.io/s/j4m180n11v?from-embed%20https://codesandbox.io/s/jj8vjjxlk9?from-embed%20https://codesandbox.io/s/nwz1xpkyl0?from-embed%20https://codesandbox.io/s/5vxlz052px?from-embed%20https://codesandbox.io/s/k05o3npx25?from-embed%20https://codesandbox.io/s/7w1pr58p6x?from-embed%20https://codesandbox.io/s/z2k1j94o8m?from-embed%20https://codesandbox.io/s/nk9qr8yz0p?from-embed%20https://codesandbox.io/s/x1z0myl0p?from-embed%20https://codesandbox.io/s/k96ljlz7yv?from-embed%20https://codesandbox.io/s/9l2jwy14mp?from-embed%20https://codesandbox.io/s/l5yoxyv02q?from-embed%20https://codesandbox.io/s/kn1nv6ypv?from-embed%20https://codesandbox.io/s/1r789z3nnl?from-embed%20https://codesandbox.io/s/l9v91jn0zq?from-embed%20https://codesandbox.io/s/5z5056yoq4?from-embed%20https://codesandbox.io/s/20r8wnx44r?from-embed%20https://codesandbox.io/s/jl6pz69ox3?from-embed%20https://codesandbox.io/s/o98y1l735y?from-embed%20https://codesandbox.io/s/ykypmk03xj?from-embed%20https://codesandbox.io/s/oozwlvk36?from-embed%20https://codesandbox.io/s/o95oq681l6?from-embed%20https://codesandbox.io/s/8n0mnm2v70?from-embed%20https://codesandbox.io/s/n7mw5871v0?from-embed%20https://codesandbox.io/s/w66mzknr27?from-embed%20https://codesandbox.io/s/vyxl1z5pp5?from-embed
export default {
  props: [],
  data() {
    return {
      email: 'jane@example.com',
      receiveNewsletter: false
    }
  },
  methods: {
    toggleNewsLetter() {
      this.receiveNewsletter = !this.receiveNewsletter
    },
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

<style>
.start {
  /*margin-top: 400px;*/
  /*border: 1px solid red;*/
}
</style>

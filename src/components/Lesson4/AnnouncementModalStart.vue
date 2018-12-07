<template>
  <div class="modal-backdrop" v-show="show">
    <div class="modal" ref="modal" @keydown.esc="dismiss" tabindex="0">
      <!--
        adding @keydown.esc="dismiss" event only works on focusable element so one
        way is to add tabindex="0" in order to add focus to a element or div in
        this case in our case element or div become 'focusable' when we click on it
      -->
      <h1 class="text-center text-2xl font-bold mb-4">
        Exciting new features are here!
      </h1>
      <p class="text-center text-grey-darker mb-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ut eligendi
        quod tempore totam explicabo sit consectetur architecto? Tempora,
        repellat est rem ut esse ab officia saepe ratione tempore. Obcaecati.
      </p>
      <div class="text-center">
        <button @click="dismiss" type="button" class="btn btn-blue">
          Dismiss
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['show'],
  //we can add watcher in order to watch 'show' property in this way
  watch: {
    //we watch 'show' (that is method name also) and we watch for value show
    //when it changes
    show(show) {
      //here we need to be careful and wait for Vue's update of DOM elements
      //in our case code is faster then DOM update
      if (show) {
        //call this code after the rerender
        this.$nextTick(() => {
          this.$refs.modal.focus()
        })
      }
    }
  },
  methods: {
    dismiss() {
      this.$emit('close')
    }
  },
  //there is also another option to add global event handler on Vue's created event
  created() {
    this.escapeHandler = e => {
      if (e.key === 'Escape' && this.show) {
        this.dismiss()
      }
    }
    // document.addEventListener('keydown', e => {
    //   if (e.key === 'Escape' && this.show) {
    //     this.dismiss()
    //   }
    // })
    document.addEventListener('keydown', this.escapeHandler)
  },
  //remove event listener when modal is not present or remove global event
  destroyed() {
    document.removeEventListener('keydown', this.escapeHandler)
  }
}
</script>

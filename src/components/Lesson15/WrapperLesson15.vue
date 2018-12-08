<template>
  <div class="min-h-screen bg-grey-lighter p-8">
    <div class="text-center p-8 my-8">
      <hello-world>
        <h1 slot-scope="{ subject }">Hello {{ subject }}!</h1>
      </hello-world>
    </div>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld.vue'

export default {
  components: {
    HelloWorld
  },
  data() {
    return {}
  }
}
</script>

<style scoped></style>

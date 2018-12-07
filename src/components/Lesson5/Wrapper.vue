<template>
  <div>
    <!-- Lesson 5 -->
    <div class="p-1">
      <div class="max-w-sm mx-auto">
        <div class="p-1 mb-4 text-center">
          <button @click="modalOpen = true" type="button" class="btn btn-blue">
            Open Modal - lesson 5
          </button>
        </div>
        <p class="mb-6">
          It was the best of times, it was the worst of times, it was the age of
          wisdom, it was the age of foolishness, it was the epoch of belief, it
          was the epoch of incredulity, it was the season of Light, it was the
          season of Darkness, it was the spring of hope, it was the winter of
          despair, we had everything before us, we had nothing before us, we
          were all going direct to Heaven, we were all going direct the other
          way--in short, the period was so far like the present period, that
          some of its noisiest authorities insisted on its being received, for
          good or for evil, in the superlative degree of comparison only.
        </p>
        <p class="mb-6">
          There were a king with a large jaw and a queen with a plain face, on
          the throne of England; there were a king with a large jaw and a queen
          with a fair face, on the throne of France. In both countries it was
          clearer than crystal to the lords of the State preserves of loaves and
          fishes, that things in general were settled for ever.
        </p>
        <p class="mb-6">
          It was the best of times, it was the worst of times, it was the age of
          wisdom, it was the age of foolishness, it was the epoch of belief, it
          was the epoch of incredulity, it was the season of Light, it was the
          season of Darkness, it was the spring of hope, it was the winter of
          despair, we had everything before us, we had nothing before us, we
          were all going direct to Heaven, we were all going direct the other
          way--in short, the period was so far like the present period, that
          some of its noisiest authorities insisted on its being received, for
          good or for evil, in the superlative degree of comparison only.
        </p>
        <p class="mb-6">
          It was the best of times, it was the worst of times, it was the age of
          wisdom, it was the age of foolishness, it was the epoch of belief, it
          was the epoch of incredulity, it was the season of Light, it was the
          season of Darkness, it was the spring of hope, it was the winter of
          despair, we had everything before us, we had nothing before us, we
          were all going direct to Heaven, we were all going direct the other
          way--in short, the period was so far like the present period, that
          some of its noisiest authorities insisted on its being received, for
          good or for evil, in the superlative degree of comparison only.
        </p>
      </div>
    </div>
    <announcement-scrolling-modal
      :show="modalOpen"
      @close="modalOpen = false"
    ></announcement-scrolling-modal>
  </div>
</template>

<script>
import AnnouncementScrollingModal from './AnnouncementModal.vue'
export default {
  name: 'wrapper',
  data() {
    return {
      modalOpen: false,
      showAnnouncement: false
    }
  },
  components: {
    AnnouncementScrollingModal
  }
}
</script>

<style scoped></style>

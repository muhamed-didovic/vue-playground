<template>
  <div>
    <!--
      Modal with button, adding 'ESC' or escape key in order to close modal window or dialog
    -->
    <!-- class="bg-grey-darker" - Lesson 4 -->
    <div class="min-h-screen flex items-center justify-center">
      <button @click="modalOpen = true" type="button" class="btn btn-blue">
        Open Modal - lesson 4
      </button>
    </div>
    <announcement-modal
      :show="modalOpen"
      @close="modalOpen = false"
    ></announcement-modal>
  </div>
</template>

<script>
import AnnouncementModal from './AnnouncementModal'
export default {
  name: 'AnnouncementModalLesson4Wrapper',
  data() {
    return {
      modalOpen: false,
      showAnnouncement: false
    }
  },
  components: {
    AnnouncementModal
  }
}
</script>

<style scoped></style>

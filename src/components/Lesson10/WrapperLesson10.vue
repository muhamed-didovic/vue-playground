<template>
  <div>
    <!-- Lesson 10 - extending components with compositions -->
    <div class="opacity-25">
      <announcement-modal-lesson10
        :show="showAnnouncementLesson10"
        @close="showAnnouncementLesson10 = false"
      ></announcement-modal-lesson10>
    </div>

    <div class="bg-grey-darker p-1">
      <div class="max-w-sm mx-auto">
        <user-settings-form-lesson10
          :account-id="accountId"
        ></user-settings-form-lesson10>
      </div>
    </div>

    <portal-target name="modals-lesson10"></portal-target>
  </div>
</template>

<script>
import UserSettingsFormLesson10 from './UserSettingsForm.vue'
import AnnouncementModalLesson10 from './AnnouncementModal.vue'
export default {
  name: 'WrapperLesson10',
  data() {
    return {
      accountId: 10,
      showAnnouncementLesson10: false //true
    }
  },
  components: {
    UserSettingsFormLesson10,
    AnnouncementModalLesson10
  }
}
</script>

<style scoped></style>

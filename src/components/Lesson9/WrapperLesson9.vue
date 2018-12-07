<template>
  <div>
    <!-- Lesson 9 - merging classes and styles with slots -->
    <portal to="modals" v-if="showAnnouncement">
      <announcement-modal-lesson9
        :show="showAnnouncement"
        @close="showAnnouncement = false"
      ></announcement-modal-lesson9>
    </portal>

    <div class="bg-grey-darker p-1">
      <div class="max-w-sm mx-auto">
        <user-settings-form-lesson9
          :account-id="accountId"
        ></user-settings-form-lesson9>
      </div>
    </div>

    <portal-target name="modals-lesson9"></portal-target>
  </div>
</template>

<script>
import UserSettingsFormLesson9 from './UserSettingsForm.vue'
import AnnouncementModalLesson9 from './AnnouncementModal.vue'
export default {
  name: 'WrapperLesson9',
  data() {
    return {
      accountId: 7,
      showAnnouncement: false
    }
  },
  components: {
    UserSettingsFormLesson9,
    AnnouncementModalLesson9
  }
}
</script>

<style scoped></style>

<template>
  <div>
    <!-- Lesson 7 - Reusable portals -->
    <div class="bg-grey-darker p-1">
      <div class="max-w-sm mx-auto">
        <user-settings-form-reusable-portals
          :account-id="accountId"
        ></user-settings-form-reusable-portals>
      </div>
    </div>

    <portal to="reusable-modals" v-if="showAnnouncement">
      <announcement-modal-reusable-portals
        :show="showAnnouncement"
        @close="showAnnouncement = false"
      ></announcement-modal-reusable-portals>
    </portal>

    <portal-target name="reusable-modals"></portal-target>
  </div>
</template>

<script>
import UserSettingsFormReusablePortals from './UserSettingsForm.vue'
import AnnouncementModalReusablePortals from './AnnouncementModal.vue'
export default {
  name: 'WrapperLesson7',
  data() {
    return {
      accountId: 7,
      showAnnouncement: false
    }
  },
  components: {
    UserSettingsFormReusablePortals,
    AnnouncementModalReusablePortals
  }
}
</script>

<style scoped></style>

<template>
  <div>
    <!-- Lesson 6 - Portals -->
    <div class="bg-grey-darker p-1">
      <div class="max-w-sm mx-auto">
        <user-settings-form-portal
          :account-id="accountId"
        ></user-settings-form-portal>
      </div>
    </div>
    <portal-target name="modals"></portal-target>
  </div>
</template>

<script>
import UserSettingsFormPortal from './UserSettingsForm.vue'
export default {
  name: 'Wrapper',
  data() {
    return {
      accountId: 7
    }
  },
  components: {
    UserSettingsFormPortal
  }
}
</script>

<style scoped></style>

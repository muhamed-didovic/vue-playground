<template>
  <!--
    sometimes we can add class conditionally like this:
    :class="{'modal-opem':modalOpen}"
  -->

  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  <!-- User setting form starting point - Lesson 1 -->
  <div class="min-h-screen bg-grey-darker p-8">
    <div class="max-w-sm mx-auto start">
      <user-settings-form-start></user-settings-form-start>
    </div>
    <div class="max-w-sm mx-auto start">
      <user-settings-form></user-settings-form>
    </div>
  </div>
</template>

<script>
import UserSettingsFormStart from './UserSettingsFormStart'
import UserSettingsForm from './UserSettingsForm'
export default {
  name: 'UserSettingsFormWrapperLesson1',
  components: {
    UserSettingsFormStart,
    UserSettingsForm
  }
}
</script>

<style scoped></style>

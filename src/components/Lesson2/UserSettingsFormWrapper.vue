<template>
  <!--
    sometimes we can add class conditionally like this:
    :class="{'modal-open':modalOpen}"
  -->

  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  <!-- User settings for final - Lesson 2 -->
  <div class="min-h-screen bg-grey-darker p-8">
    <div class="max-w-sm mx-auto">
      <user-settings-form></user-settings-form>
    </div>
  </div>
</template>

<script>
import UserSettingsForm from './UserSettingsForm'
export default {
  name: 'UserSettingsFormWrapperLesson2',
  components: {
    UserSettingsForm
  }
}
</script>

<style scoped></style>

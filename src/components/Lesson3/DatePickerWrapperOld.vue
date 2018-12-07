<template>
  <!-- how to integrate third party into project - Lesson 3 -->
  <div class="bg-grey-darker p-1">
    <div class="max-w-sm mx-auto">
      <div class="card">
        <label class="block">
          <span class="form-label mb-2">Select a date - Lesson 3</span>
          <date-picker
            class="form-input"
            v-model="date"
            format="D MMM YYYY"
            :options="{ firstDay: 1 }"
          ></date-picker>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import DatePicker from './DatePicker'
export default {
  name: 'DatePickerOld',
  data() {
    return {
      date: '2018-04-12'
    }
  },
  components: {
    DatePicker
  }
}
</script>

<style scoped></style>

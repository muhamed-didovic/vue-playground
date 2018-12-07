<template>
  <div>
    <!-- lesson - 11 -->
    <div class="min-h-screen bg-grey-darker p-8">
      <div class="max-w-sm mx-auto">
        <contact-list-lesson11 :pseudo-slot="props => props.contact.name.first">
          <a slot-scope="props" :href="`/contacts/${props.contact.id}`">
            {{ props.contact.name.first }}
          </a>
        </contact-list-lesson11>
      </div>
    </div>
    <div class="min-h-screen bg-grey-darker p-8">
      <div class="max-w-sm mx-auto">
        <contact-list-lesson11
          :pseudo-slot="({ contact }) => contact.name.first"
        >
          <a slot-scope="{ contact }" :href="`/contacts/${contact.id}`">
            {{ contact.name.first }}
          </a>
        </contact-list-lesson11>
      </div>
    </div>
  </div>
</template>

<script>
import ContactListLesson11 from './ContactList.vue'
export default {
  name: 'WrapperLesson11',
  components: {
    ContactListLesson11
  }
}
</script>

<style scoped></style>

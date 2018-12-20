<template>
  <div id="app" class="min-h-screen bg-grey-darker p-8">
    <div class="max-w-sm mx-auto card mt-8">
      <label class="form-label mb-2">Renderless Tag Input</label>
      <renderless-tag-input v-model="tags">
        <div
          class="tag-input"
          slot-scope="{
            tags,
            removeTag,
            inputProps,
            inputEvents
          }"
        >
          <span v-for="tag in tags" :key="tag" class="tag-input-tag">
            <span>{{ tag }}</span>
            <button
              type="button"
              class="tag-input-remove"
              @click="removeTag(tag)"
            >
              &times;
            </button>
          </span>
          <input
            class="tag-input-text"
            placeholder="Add tag..."
            v-bind="inputProps"
            v-on="inputEvents"
          />
          <!--
            v-model stands for:
            <input
            class="tag-input-text"
            placeholder="Add tag..."
            v-model="input"

            or longer version
            :value="input"
             or v-bind:value="input"
             or v-bind="{value:inputValue}"

            some versions of events
            @input="(e) => input = e.target.value"
            or v-on:input="(e) => input = e.target.value"
            or v-on="{input: onInput}"
            />
          -->
        </div>
      </renderless-tag-input>
    </div>
    <div class="max-w-sm mx-auto card mt-8">
      <label class="form-label mb-2">Original Tag Input</label>
      <tag-input v-model="tags"></tag-input>
    </div>
  </div>
</template>

<script>
import TagInput from './TagInput.vue'
import RenderlessTagInput from './RenderlessTagInput.vue'

export default {
  components: {
    TagInput,
    RenderlessTagInput
  },
  data() {
    return {
      tags: ['awesome', 'excellent', 'amazing']
    }
  }
}
</script>

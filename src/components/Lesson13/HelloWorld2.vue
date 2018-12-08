<script>
import PrimaryButton from './PrimaryButton.vue'
// import ToggleInput from "./ToggleInput.vue"

export default {
  props: [],
  data() {
    return {
      toggled: true
    }
  },
  render(createElement) {
    return createElement(
      PrimaryButton,
      {
        // 'on' event handler wont work because it send $emit instead of native click event, so in order
        // to listen for it we use 'nativeOn' property or event handler
        // on: {
        //   input: newValue => (this.toggled = newValue)
        // }
        nativeOn: {
          click: () => alert('click')
        }
      },
      'Hello All'
    )
  }
}
</script>

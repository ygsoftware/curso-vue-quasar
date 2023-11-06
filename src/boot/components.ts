import { boot } from 'quasar/wrappers'
import PasswordInput from 'components/PasswordInput.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    PasswordInput: typeof PasswordInput
  }
}

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({ app }) => {
  app.component('PasswordInput', PasswordInput)
})

<template>
  <q-input :outlined="outlined"
           :label="label"
           v-model="value"
           :type="isPsw ? 'password' : 'text'"
           :rules="rules"
  >
    <template v-slot:prepend>
      <slot name="icon"></slot>
    </template>
    <template v-slot:append>
      <q-icon :name="isPsw ? 'visibility' : 'visibility_off'" @click="onChangePassword"/>
    </template>
  </q-input>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'PasswordInput',
  props: {
    modelValue: {
      type: String,
      required: true
    },
    label: String,
    outlined: Boolean,
    rules: Array
  },
  emits: ['update:modelValue', 'changeIcon'],
  setup (props, { emit }) {
    const value = computed({
      get: () => props.modelValue,
      set: value => emit('update:modelValue', value)
    })

    const isPsw = ref<boolean>(true)

    const onChangePassword = () => {
      isPsw.value = !isPsw.value
      emit('changeIcon', isPsw.value)
    }

    return {
      value,
      isPsw,
      onChangePassword
    }
  }
})
</script>

<style lang="scss" scoped>

</style>

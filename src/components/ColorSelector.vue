<script setup>
import { inject, ref, watch } from 'vue'
import { store } from '../state/store'
import { convertHexToFormat, convertToHex } from '../utils/colors'

const emit = defineEmits(['color-update'])

defineProps({
  disabled: Boolean,
})

const inputColorValueHex = defineModel()
const inputTextValue = ref(convertHexToFormat(inputColorValueHex.value, store.colorFormat))

const onColorInputChange = ($event) => {
  emit('color-update')
  inputTextValue.value = convertHexToFormat($event.target.value, store.colorFormat)
}
const onTextInputChange = ($event) => {
  emit('color-update')
  inputColorValueHex.value = convertToHex($event.target.value, store.colorFormat)
}

watch(() => store.colorFormat, (newFormat) => {
  inputTextValue.value = convertHexToFormat(inputColorValueHex.value, newFormat)
})

inject('store', store)
</script>

<template>
  <div class="selector-wrapper">
    <input type="color" v-model="inputColorValueHex" :disabled="disabled" @input="onColorInputChange" />
    <input type="text" id="hex-input-text" v-model="inputTextValue" :disabled="disabled" @input="onTextInputChange" />
  </div>
</template>

<style scoped>
.selector-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.125em;
}

input {
  width: 4.5em;
}

input:disabled {
  cursor: no-drop;
}

#hex-input-text {
  border: solid white 0.25px;
  color: white;
  background-color: black;
}
</style>

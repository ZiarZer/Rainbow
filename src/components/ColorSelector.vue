<script setup>
import { ref } from 'vue'

defineProps({
  disabled: Boolean,
})

const hexColor = defineModel()
</script>

<template>
  <div class="selector-wrapper">
    <input type="color" v-model="hexColor" :disabled="disabled" />
    <input type="text" id="hex-input-text" v-model="hexColor" :disabled="disabled" />
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

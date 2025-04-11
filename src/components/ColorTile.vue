<script setup>
import { ref } from 'vue';
import ColorSelector from './ColorSelector.vue';

const colorHex = defineModel()
const copyColor = () => navigator.clipboard.writeText(colorHex.value)
</script>
<template>
  <div :style="{ backgroundColor: colorHex }" class="color-tile" @click="copyColor">
    <ColorSelector :disabled="false" v-model="colorHex" @color-update="$emit('color-update')" />
  </div>
</template>
<style scoped>
.color-tile {
  border-radius: 1em;
  padding: 0.25em;
  width: 100%;
  cursor: copy;
}
</style>

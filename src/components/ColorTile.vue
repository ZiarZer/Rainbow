<script setup>
import { ref } from 'vue';
import ColorSelector from './ColorSelector.vue';

const colorHex = ref('#ffffff');
</script>
<template>
  <div :style="{ backgroundColor: colorHex }" class="color-tile">
    <ColorSelector :disabled="false" v-model="colorHex" />
  </div>
</template>
<style scoped>
.color-tile {
  border-radius: 1em;
  padding: 0.25em;
}
</style>

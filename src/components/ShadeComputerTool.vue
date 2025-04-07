<script setup>
import { computed, ref } from 'vue'
import ColorSelector from './ColorSelector.vue'
import { computeShade } from '../utils/colors'

const colorHex = ref('#ffffff')
const brightnessFactor = ref(0.5)
const shadedColorHex = computed(() => computeShade(colorHex.value, brightnessFactor.value))
</script>

<template>
  <div class="tool">
    <h3>Shade computer</h3>
    <ColorSelector :disabled="false" v-model="colorHex" />
    <div>
      <label>Brightness factor: </label>
      <input type="text" v-model="brightnessFactor" />
    </div>
    <ColorSelector :disabled="true" v-model="shadedColorHex" />
  </div>
</template>

<style scoped>
input {
  width: 3em;
}

h3 {
  margin: 0;
}
</style>

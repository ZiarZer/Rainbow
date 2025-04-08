<script setup>
import { computed, ref } from 'vue'
import ColorSelector from './ColorSelector.vue'
import { computeShade } from '../utils/colors'

const colorHex = ref('#ff0000')
const brightnessFactor = ref(0.3)
const shadedColorHex = computed(() => computeShade(colorHex.value, brightnessFactor.value))

const backgroundGradient = computed(() => `linear-gradient(${colorHex.value} 0%, ${shadedColorHex.value} 100%)`)
</script>

<template>
  <div class="tool" id="shade-computer-wrapper">
    <h3>Shade computer</h3>
    <ColorSelector :disabled="false" v-model="colorHex" />
    <div id="brightness-selector">
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

#shade-computer-wrapper {
  background: v-bind('backgroundGradient')
}

#brightness-selector {
  background-color: black;
  padding-left: 0.25em;
  padding: 0.25em;
}
</style>

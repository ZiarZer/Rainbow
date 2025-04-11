<script setup>
import { computed, ref } from 'vue'
import ColorInterval from './ColorInterval.vue'

const gradientStep = defineModel({ default: 500 })
function resetGradientStep() {
  gradientStep.value = 500
}

const srcHex = ref('#ffffff')
const destHex = ref('#ffffff')
const backgroundGradient = computed(() => `linear-gradient(${srcHex.value} 0%, ${destHex.value} 100%)`)
</script>

<template>
  <div class="tool" id="interval-converter" :style="{ background: backgroundGradient }">
    <h3>Interval converter</h3>
    <ColorInterval title="SRC" :gradientStep="gradientStep" @update="srcHex = $event" />
    <ColorInterval title="DEST" :gradientStep="gradientStep" @update="destHex = $event" />

    <div id="gradient-step-selector">
      <div id="split">
        <input type="range" min="0" max="1000" v-model="gradientStep" />
        <span>{{ gradientStep / 10 }}%</span>
      </div>
      <button @click="resetGradientStep">Reset to 50%</button>
    </div>
  </div>
</template>

<style scoped>
#interval-converter-wrapper {
  background: v-bind('backgroundGradient')
}

h3 {
  margin: 0;
}

#split {
  display: flex;
  flex-direction: column;
}

#split {
  background-color: black;
}

#gradient-step-selector {
  display: flex;
}
</style>

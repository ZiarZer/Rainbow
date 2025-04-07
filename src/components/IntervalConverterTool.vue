<script setup>
import ColorInterval from './ColorInterval.vue'

const gradientStep = defineModel({ default: 500 })
function resetGradientStep() {
  gradientStep.value = 500
}
</script>

<template>
  <div class="tool">
    <h3>Interval converter</h3>
    <ColorInterval title="SRC" :gradientStep="gradientStep" />
    <ColorInterval title="DEST" :gradientStep="gradientStep" />

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
h3 {
  margin: 0;
}

#split {
  display: flex;
  flex-direction: column;
}

#gradient-step-selector {
  display: flex;
}
</style>

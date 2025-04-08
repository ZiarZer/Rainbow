<script setup>
import { computed, ref } from 'vue'
import { computeGradientStepColor } from '../utils/colors'
import ColorSelector from './ColorSelector.vue';

const { gradientStep, title } = defineProps(['title', 'gradientStep'])

const startColorHex = ref('#000000')
const endColorHex = ref('#ffffff')
const middleColorHex = computed(() => computeGradientStepColor(startColorHex.value, endColorHex.value, gradientStep / 1000))
</script>
<template>
  <div class="interval">
    <p>{{ title }}:</p>
    <ColorSelector :disabled="false" v-model="startColorHex" />
    <ColorSelector :disabled="true" v-model="middleColorHex" />
    <ColorSelector :disabled="false" v-model="endColorHex" />
  </div>
</template>
<style scoped>
.interval {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 0.5em;
  font-weight: 700;
}
</style>
<script setup>
import { ref } from 'vue'
import ColorSelector from './components/ColorSelector.vue'

const hexColor = ref('#ffffff')
</script>

<template>
  <ColorSelector :disabled="false" v-model="hexColor" />
</template>

<style scoped></style>

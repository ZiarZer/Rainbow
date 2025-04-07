<script setup>
import IntervalConverterTool from './components/IntervalConverterTool.vue';
import ShadeComputerTool from './components/ShadeComputerTool.vue'
</script>

<template>
  <div id="tools">
    <ShadeComputerTool />
    <IntervalConverterTool />
  </div>
</template>

<style scoped>
.tool {
  display: flex;
  flex-direction: column;
  gap: 1em;
  background-color: #ffffff11;
  padding: 1em;
  border-radius: 1em;
  border: solid 1px white;
}

#tools {
  display: flex;
  justify-content: space-between;
  gap: 1em;
}
</style>

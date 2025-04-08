<script setup>
import IntervalConverterTool from './components/IntervalConverterTool.vue';
import ShadeComputerTool from './components/ShadeComputerTool.vue'
import ColorTile from './components/ColorTile.vue'
import { ref } from 'vue';

const addTile = () => colors.value.push('#ffffff')

const colors = ref([])
</script>

<template>
  <div id="tools">
    <ShadeComputerTool />
    <IntervalConverterTool />
  </div>
  <hr />
  <button @click="addTile">Add tile</button>
  <div id="tiles-container">
    <ColorTile v-for="() in colors" />
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
  opacity: 0.8;
  transition: opacity 250ms ease-in-out;
}

.tool:hover {
  opacity: 1;
}

#tools {
  display: flex;
  justify-content: end;
  gap: 1em;
}

#tiles-container {
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  gap: 0.5em;
}

hr {
  margin: 1em;
}

button {
  margin: 1em;
}
</style>

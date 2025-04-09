<script setup>
import IntervalConverterTool from './components/IntervalConverterTool.vue';
import ShadeComputerTool from './components/ShadeComputerTool.vue'
import ColorTile from './components/ColorTile.vue'
import { computed, ref } from 'vue';

function addTile() {
  colors.value.push(
    colors.value.length > 0
      ? colors.value[colors.value.length - 1]
      : '#ffffff'
  )
}

const colors = ref([])
const displayPlaceholderTile = computed(() => colors.value.length === 0)
</script>

<template>
  <div id="tools">
    <ShadeComputerTool />
    <IntervalConverterTool />
  </div>
  <hr />
  <button @click="addTile" v-if="!displayPlaceholderTile">Add tile</button>
  <div id="tiles-container">
    <div id="placeholder-tile" v-if="displayPlaceholderTile">
      <button @click="addTile">Add tile to continue</button>
    </div>
    <ColorTile v-else v-for="(_, index) in colors" :key="index" v-model="colors[index]" />
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
  margin-top: 1em;
}

hr {
  margin: 1em;
}

button {
  height: min-content;
}

#placeholder-tile {
  border: dashed 1px white;
  border-radius: 1em;
  height: 4em;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

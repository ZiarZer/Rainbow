<script setup>
import ColorFormatSelectorTool from './components/ColorFormatSelectorTool.vue';
import IntervalConverterTool from './components/IntervalConverterTool.vue';
import ShadeComputerTool from './components/ShadeComputerTool.vue'
import ColorTile from './components/ColorTile.vue'
import AppTitle from './components/AppTitle.vue'
import { computed, provide, ref } from 'vue';
import { store } from './state/store';
import { getCookie, setCookie } from './utils/cookies';

function addColumn() {
  colors.value.forEach(element => {
    element.push(
      element.length > 0
        ? element[element.length - 1]
        : '#ffffff'
    )
  })
  storeColorsInCookie()
}

function addRow() {
  colors.value.push(colors.value.length > 0 ? [...colors.value[colors.value.length - 1]] : [])
  storeColorsInCookie()
}

function storeColorsInCookie() {
  setCookie('colorGrid', JSON.stringify(colors.value))
}

function loadColorsFromCookies() {
  const storedColors = getCookie('colorGrid')
  if (storedColors == null) {
    return []
  }
  return JSON.parse(storedColors)
}

let timeoutId = null;
function handleColorTileChange() {
  if (timeoutId != null) {
    clearTimeout(timeoutId)
  }
  timeoutId = setTimeout(storeColorsInCookie, 500)
}

const colors = ref(loadColorsFromCookies())
const displayPlaceholderTile = computed(() => colors.value.length === 0)

provide('store', store)
</script>

<template>
  <div id="top">
    <AppTitle />
    <div id="tools">
      <ColorFormatSelectorTool />
      <ShadeComputerTool />
      <IntervalConverterTool />
    </div>
  </div>
  <hr />
  <div id="buttons-container">
    <button @click="addRow" v-if="!displayPlaceholderTile">Add row</button>
    <button @click="addColumn" v-if="!displayPlaceholderTile">Add column</button>
  </div>
  <div id="tiles-container">
    <div id="placeholder-tile" v-if="displayPlaceholderTile">
      <button @click="() => { addRow(); addColumn() }">Add tile to continue</button>
    </div>
    <div v-else v-for="(row, i) in colors" class="row">
      <ColorTile v-for="(_, j) in row" :key="i + j" v-model="row[j]" @color-update="handleColorTileChange" />
    </div>
  </div>
</template>

<style scoped>
#top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.row {
  display: flex;
  gap: 0.5em;
}

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

#buttons-container {
  display: flex;
  justify-content: center;
  gap: 1em;
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

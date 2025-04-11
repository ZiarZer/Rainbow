<script setup>
import { ref } from 'vue';
import { version } from '../../package.json';

const letterColors = ref(['red', 'orange', 'yellow', 'green', '#004ac9', '#2a315b', '#9d1484'])
function shiftColors() {
  letterColors.value.unshift(letterColors.value.pop())
}
</script>
<template>
  <div id="app-title-wrapper">
    <h1 @click="shiftColors">
      <span :style="{ color: letterColors[index] }" v-for="(letter, index) in 'Rainbow'.split('')">
        {{ letter }}
      </span>
    </h1>
    <div id="subtitle">
      <p id="version">v{{ version }}</p>
      <a href="https://github.com/ZiarZer/Rainbow" rel="noreferrer" target="_blank">
        <img src="../assets/github-mark.png" :style="{ height: '2em' }" />
      </a>
    </div>
  </div>
</template>
<style scoped>
h1 {
  margin: 0;
  font-size: 5em;
  cursor: pointer;
  text-shadow: 0 0 5px;
}

#app-title-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

#version {
  width: min-content;
}

a {
  background-color: white;
  border-radius: 0.5em;
  display: flex;
  padding: 3px;
}

#subtitle {
  display: flex;
  align-items: center;
  gap: 1em;
}
</style>

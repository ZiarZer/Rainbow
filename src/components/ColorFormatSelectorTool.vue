<script setup>
import { inject, watch } from 'vue';
import { setCookie } from '../utils/cookies';

const store = inject('store')
watch(
  () => store.colorFormat,
  (newFormat) => setCookie('colorFormat', newFormat)
)
</script>

<template>
  <div class="tool" id="color-format-selector-wrapper">
    <h3>Color format</h3>
    <div>
      <input type="radio" id="hex-format-radio" :checked="store.colorFormat === 'hex'"
        @input="store.colorFormat = $event.target.value" value="hex" />
      <label for="hex-format-radio">Hex</label>
    </div>
    <div>
      <input type="radio" id="rgb-format-radio" :checked="store.colorFormat === 'rgb'"
        @input="store.colorFormat = $event.target.value" value="rgb" />
      <label for="rgb-format-radio">RGB</label>
    </div>
  </div>
</template>

<style scoped>
#color-format-selector-wrapper {
  height: min-content;
  text-align: left;
}
</style>

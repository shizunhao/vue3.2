<template>
  <svg-icon
    id="screenfull"
    :icon="!icon ? 'fullscreen' : 'exit-fullscreen'"
    @click="hangleFullscreen"
  ></svg-icon>
</template>

<script setup>
import screenfull from 'screenfull'
import { ref, onMounted, onBeforeMount } from 'vue'
const icon = ref(screenfull.isFullscreen)
const hangleFullscreen = () => {
  if (screenfull.isEnabled) {
    screenfull.toggle()
  }
}
onMounted(() => {
  screenfull.on('change', () => {
    icon.value = screenfull.isFullscreen
  })
})
onBeforeMount(() => {
  screenfull.off('change')
})
</script>

<style></style>

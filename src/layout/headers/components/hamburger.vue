<template>
  <div class="hamburger-container" id="hamburger" @click="toggleClick">
    <svg-icon :icon="icon"></svg-icon>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
const store = useStore()
const toggleClick = () => {
  store.commit('app/changeSiderType')
}
const icon = computed(() => {
  return store.getters.siderType ? 'hamburger-opened' : 'hamburger-closed'
})
</script>

<style lang="scss" scoped>
.hamburger-container {
  margin-right: 16px;
  border-style: border-box;
  cursor: pointer;
}
</style>

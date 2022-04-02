<template>
  <el-dropdown @command="hangleCommang">
    <svg-icon icon="language"></svg-icon>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="zh" :disabled="curLang === 'zh'"
          >中文</el-dropdown-item
        >
        <el-dropdown-item command="en" :disabled="curLang === 'en'"
          >English</el-dropdown-item
        >
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const i18n = useI18n()
const curLang = computed(() => {
  return i18n.locale.value
})
const hangleCommang = (val) => {
  i18n.locale.value = val
  store.commit('app/changeLang', val)
  localStorage.setItem('lang', val)
}
</script>

<style></style>

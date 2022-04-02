<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, index) in breadList" :key="index">
      <span v-if="index === breadList.length - 1" class="no-redirect">{{
        item.name
      }}</span>
      <span v-else class="redirect" @click="hangleRedirect(item.path)">
        {{ $t(`menus.${item.name}`) }}
      </span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup>
import { watch, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
console.log(route.matched, 'route')
const breadList = ref([])
const initBreadList = () => {
  breadList.value = route.matched
}
const hangleRedirect = (path) => {
  router.push(path)
}
watch(
  route,
  () => {
    initBreadList()
  },
  { deep: true, immediate: true }
)
</script>

<style lang="scss" scoped>
.no-redirect {
  color: #97a8be;
  cursor: text;
}
.redirect {
  color: #666;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: $menuBg;
  }
}
</style>

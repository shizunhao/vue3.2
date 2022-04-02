<template>
  <el-dropdown>
    <span class="el-dropdown-link">
      <el-avatar shape="square" :size="40" :src="squareUrl" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退 出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const logout = () => {
  store.dispatch('app/logout')
}
const squareUrl = ref(
  'https://img2.baidu.com/it/u=2965143661,2782445157&fm=253&fmt=auto&app=120&f=JPEG?w=400&h=400'
)
</script>

<style lang="scss" scoped></style>

import router from './index'
import store from '@/store'
const whileList = ['/login']
router.beforeEach((to, form, next) => {
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (whileList.includes(to.path)) {
      next()
    } else {
      next('./login')
    }
  }
})

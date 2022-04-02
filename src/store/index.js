import { createStore } from 'vuex'
import app from './modules/app'
import getters from './getter'
export default createStore({
  modules: {
    app
  },
  getters
})

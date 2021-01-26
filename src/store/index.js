import Vue from 'vue'
import Vuex from 'vuex'
import serach from './modules/search'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    serach
  }
})

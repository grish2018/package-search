import Vue from 'vue'
import Vuex from 'vuex'
import serachResults from './modules/searchResults'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    serachResults
  }
})

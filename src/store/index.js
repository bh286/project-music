import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentTime:0,
  },
  getters: {
  },
  mutations: {
    addOneMusic(state,data){
      state.oneMusic = data
    },
    changeCurrentUrl(state,data){
      state.currentUrl = data
    },
    ChangeCurrentTime(state,data){
      state.currentTime= data
    },
  },
  actions: {
  },
  modules: {
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    firstName: 'suchat',
    lastName: 'sujalarnlap'
  },
  getters: {
    fullName: state => {
      return state.firstName + ' ' + state.lastName;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

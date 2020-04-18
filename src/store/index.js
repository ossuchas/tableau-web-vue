import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    firstName: 'suchat',
    lastName: 'sujalarnlap',
    ticket: ''
  },
  getters: {
    // fullName: state => {
    //   return state.firstName + ' ' + state.lastName;
    // },
    getTicket (state) { return state.ticket }
  },
  mutations: {
    SET_TICKET (state, data) {
      state.ticket = data
    }
  },
  actions: {
    async loadTicket ({ commit }) {
      await axios.get("/genticket").then((response) => {
        commit("SET_TICKET", response.data["message"])
      });
    }
  },
  modules: {
  }
})

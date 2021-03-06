import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: { id: 2, name: 'Pablo' },
    categories: ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community'],
    events: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false },
      { id: 3, text: '...', done: true },
      { id: 4, text: '...', done: false }
    ],
    count: 0
  },
  mutations: {
    INCREMENT_COUNT(state, value) {
      state.count += value
    }
  },
  actions: {
    updateCount({ state, commit }, value) {
      if (state.user) {
        commit('INCREMENT_COUNT', value)
      }
    }
  },
  getters: {
    catLength: state => state.categories.length,
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})

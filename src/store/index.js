import { createStore } from 'vuex';

export default createStore({
  state: {
    wordActive: false,
  },
  getters: {},
  mutations: {
    setActive(state) {
      state.wordActive = true;
    },
    setInactive(state) {
      state.wordActive = false;
    },
  },
  actions: {},
  modules: {},
});

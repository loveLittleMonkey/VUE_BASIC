import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    myVuex: 'myVuex',
  },
  mutations: {
    setMyVuex(state, myVuex) {
      state.myVuex = myVuex;
    },
  },
  actions: {
    setMyVuexAction({ commit }, myVuex) {
      commit('setMyVuex', myVuex);
    },
  },
  getters: {
    myVuex: state => state.myVuex,
  },
  modules: {},
});

export default store;

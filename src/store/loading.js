const state = {
  isLoading: false
};
const mutations = {
  START(state) {
    state.isLoading = true;
    console.log("fetch start");
  },
  STOP(state) {
    state.isLoading = false;
    console.log("fetch end");
  }
};
const actions = {
  start: {
    root: true,
    handler: function({ commit }) {
      commit("START");
    }
  },
  stop: {
    root: true,
    handler: function({ commit }) {
      commit("STOP");
    }
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};

import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";

import movies from "./movies";

Vue.use(Vuex);

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    movies
  }
});

export default store;

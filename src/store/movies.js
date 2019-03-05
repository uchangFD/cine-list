import { fetch } from "../api/movie";

const getGenres = fetch("genres");
const getCategory = fetch("categories");
const getSearch = fetch("search");
const detailFetchers = fetch("details");

const state = {
  genres: [],
  categories: {},
  search: []
};

const mutations = {
  SET_GENRES(state, genres) {
    state.genres = genres.slice();
    console.log(state.genres);
  },
  SET_CATEGORIES(state, { id, data }) {
    // id => action, drama... 확인
    const categories = state.categories;

    if (typeof categories[id] !== "undefined") {
      categories[id] = [];
    }

    // 걸러주는 모듈 만들어야함.
    categories[id].push(data);
  },
  SET_DETAILS(state, { type, data, id }) {
    let _movie;
    const categories = state.categories;

    for (const category of categories) {
      _movie = category.find(movie => movie.id === id);

      if (typeof _movie !== "undefined") break;
    }

    _movie[type] = data;
  },
  SET_SEARCH(state, results) {
    state.search = results.slice();
  },
  INIT_SEARCH(state) {
    state.search = [];
  }
};

const actions = {
  GET_GENRES({ commit }) {
    getGenres().then(({ data }) => {
      commit("SET_GENRES", data.genres);
    });
  },
  GET_CATEGORY({ commit }, { id, page }) {
    return getCategory(id, page).then(data =>
      commit("SET_CATEGORIES", { id, data })
    );
  },
  GET_DETAILS({ commit }, { type, id }) {
    const getDetails = detailFetchers[type];

    return getDetails(id).then(data =>
      commit("SET_DETAILS", { id, type, data })
    );
  },
  GET_SEARCH({ commit }, { title }) {
    return getSearch(title).then(data => {
      commit("SET_SEARCH", data.results);
    });
  },
  INIT_SEARCH({ commit }) {
    commit("INIT_SEARCH");
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};

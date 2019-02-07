import * as api from '../api'

const actions = {
  FETCH_MAIN_SLIDE({ commit }, { options }) {
    return api.mainSlide.fetch().then(data => {
      commit(options, data.results)
    })
  },

  UPDATE_MAIN_SLIDE() {
    return api.mainSlide.update().then(data => {
      console.log(data)
    })
  },

  FETCH_SUB_SLIDE({ commit }, { options }) {
    return api.subSlide.fetch().then(data => {
      commit(options, data.results)
    })
  },


  FETCH_LISTS({ commit }, { id, pages }) {
    return api.main.fetch(id, pages)
      .then(data => {
        commit('SET_LISTS', data.results)
      })
  },

  FETCH_ITEM({ commit }, { id }) {
    return api.main.fetchItem(id).then(data => {
      commit('SET_ITEM', data)
    })
  },

  FETCH_CAST({ commit }, { id }) {
    return api.main.fetchCast(id).then(data => {
      commit('SET_CAST', data)
    })
  },


  FETCH_SEARCH({ commit }, { text }) {
    return api.search.fetch(text).then(data => {
      commit('SET_SEARCH', data.results)
    })
  },


  FETCH_BROWSER({ commit }, { item }) {
    return api.browser.fetch(item).then(data => {
      commit('SET_BROWSER', data.results)
    })
  },


  FETCH_GENRES({ commit }) {
    return api.genre.fetch().then(data => {
      commit('SET_GENRES', data.genres)
    })
  },


  FETCH_CATEGORIES({ commit }, { id }) {
    return api.categories.fetch(id).then(data => {
      commit('SET_CATEGORIES', data.results)
    })
  },

  RESET_RESULTS({ commit }) {
    commit('RESET_STATES')
  },

  RESET_LISTS({ commit }) {
    commit('RESET_LISTS')
  }


}

export default actions
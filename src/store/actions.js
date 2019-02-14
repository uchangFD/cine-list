import * as api from '../api'

const actions = {
  FETCH_MAIN_SLIDE({ commit }, { options }) {
    return api.mainSlide.fetch().then(data => {
      commit(options, data.results)
    })
  },

  FETCH_SUB_SLIDE({ commit }, { options }) {
    return api.subSlide.fetch().then(data => {
      commit(options, data.results)
    })
  },


  FETCH_LISTS({ commit }, { id, pages }) {
    return api.mainSlide.fetch(id, pages)
      .then(data => {
        commit('SET_LISTS', data.results)
      })
  },

  FETCH_CONTENTS({ commit }, { id }) {
    return api.item.fetch(id).then(data => {
      commit('SET_CONTENTS', data)
    })
  },

  FETCH_CONTENTS_DETAILS({ commit }, { id }) {
    return api.item.fetchVideos(id).then(data => {
      commit('SET_CONTENTS_DETAILS', data)
    })
  },



  FETCH_CAST({ commit }, { id }) {
    return api.cast.fetch(id).then(data => {
      commit('SET_CAST', data)
    })
  },


  FETCH_PERSON({commit}, {id}) {
    return api.person.fetch(id).then(data => {
      commit('SET_PERSON', data)
    })
  },

  FETCH_PERSON_CREDITS({commit}, {id}) {
    return api.personCredits.fetch(id).then(data => {
      commit('SET_PERSON_CREDITS', data)
    })
  },



  FETCH_SEARCH({ commit }, { query }) {
    
    return api.search.fetch(query).then(data => {
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


  FETCH_CATEGORIES({ commit }, { id, page }) {
    return api.categories.fetch(id, page).then(data => {
      commit('SET_CATEGORIES', data.results)
    })
  },

  RESET_CATEGORIES({ commit }) {
    commit('RESET_CATEGORIES')
  },

  RESET_RESULTS({ commit }) {
    commit('RESET_STATES')
  },

  


}

export default actions
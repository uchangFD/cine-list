import * as api from '../api'

const actions = {

  FETCH_MAIN({ commit }, {id, pages}) {    
    return api.main.fetch(id, pages)
      .then(data => {
        commit('SET_MAIN', data.results)
      })
  },


  FETCH_RATED({ commit }, {id, pages}) {    
    return api.main.fetch(id, pages)
      .then(data => {
        commit('SET_RATED', data.results)
      })
  },


  FETCH_LISTS({ commit }, {id, pages}) {    
    return api.main.fetch(id, pages)
      .then(data => {        
        commit('SET_LISTS', data.results)
      })
  },

  FETCH_ITEM({commit}, {id}) {
    return api.main.fetchItem(id).then(data => {
      commit('SET_ITEM', data)
    })
  },

  FETCH_CAST({commit}, {id}) {
    return api.main.fetchCast(id).then(data => {
      commit('SET_CAST', data)
    })
  },

  FETCH_SEARCH({commit}, {text}) {
    return api.main.fetchSearch(text).then(data => {
      commit('SET_SEARCH', data.results)
    })
  },

  RESET_RESULTS({commit}) {
    commit('RESET_STATES')
  },

  RESET_LISTS({commit}) {
    commit('RESET_LISTS')
  }
}

export default actions
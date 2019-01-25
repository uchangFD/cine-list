import * as api from '../api'

const actions = {
  FETCH_SLIDES({ commit }, {id, pages}) {    
    return api.main.fetch(id, pages)
      .then(data => {
        commit('SET_SLIDES', data.results)
      })
  },

  FETCH_LISTS({ commit }, {id, pages}) {    
    return api.main.fetch(id, pages)
      .then(data => {        
        commit('SET_LISTS', data.results, pages)
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
  }
}

export default actions
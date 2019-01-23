import * as api from '../api'

const actions = {
  FETCH_MAIN({ commit }, {index}) {    
    return api.main.fetchTrending(index)
      .then(data => {        
        commit('SET_MAIN', data.results)
      })
  },

  FETCH_LISTS({ commit }, {id, listPages}) {    
    return api.main.fetchList(id, listPages)
      .then(data => {        
        commit('SET_LISTS', data.results, listPages)
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
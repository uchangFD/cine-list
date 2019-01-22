import * as api from '../api'

const actions = {
  FETCH_LISTS({ commit }, {id, listPages}) {    
    return api.list.fetch(id, listPages)
      .then(data => {        
        commit('SET_LISTS', data.results, listPages)
      })
  },

  FETCH_MOVIE({commit}, {id}) {
    return api.item.fetch(id).then(data => {
      commit('SET_MOVIE', data)
    })
  }
}

export default actions
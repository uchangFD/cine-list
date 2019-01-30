
const mutations = {
  SET_SLIDES(state, slides) {
    state.slides = slides
  },

  SET_SEARCH(state, results) {
    state.results = results
  },

  SET_LISTS(state, lists) {
    lists.forEach(list => {
      state.lists.push(list)
    })
  },
  
  SET_ITEM(state, list) {
    state.list = list
  },

  SET_CAST(state, casts) {
    state.casts = casts
  },

  RESET_STATES(state) {
    state.results = []
  },

  RESET_LISTS(state) {
    state.lists = []
  }
}

export default mutations
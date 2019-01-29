
const mutations = {
  SET_SLIDES(state, slides) {
    state.slides = slides
  },

  SET_SEARCH(state, results) {
    state.results = results
  },

  SET_LISTS(state, lists, pages) {
    state.lists = lists
    state.pages = pages
  },
  
  SET_ITEM(state, lists) {
    state.lists = lists
  },

  SET_CAST(state, casts) {
    state.casts = casts
  },

  RESET_STATES(state) {
    state.results = []
  }
}

export default mutations

const mutations = {
  SET_SLIDES(state, slides) {
    state.slides = slides
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
  }
}

export default mutations
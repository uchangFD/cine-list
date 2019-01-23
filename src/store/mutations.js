
const mutations = {
  SET_MAIN(state, main) {
    state.main = main
  },

  SET_LISTS(state, lists, listPages) {
    state.lists = lists
    state.listPages = listPages
  },
  
  SET_ITEM(state, lists) {
    state.lists = lists
  },

  SET_CAST(state, casts) {
    state.casts = casts
  }
}

export default mutations
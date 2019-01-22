
const mutations = {
  SET_LISTS(state, movieLists, listPages) {
    state.movieLists = movieLists
    state.listPages = listPages
  },
  SET_MOVIE(state, movieItems) {
    state.movieItems = movieItems
  }
}

export default mutations
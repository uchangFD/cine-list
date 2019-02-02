
const mutations = {
  SET_MAIN(state, mains) {
    state.mains = mains
  },

  SET_RATED(state, rates) {
    state.rates = rates
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


  SET_BROWSER(state, browser) {
    state.browser = browser
  },

  RESET_STATES(state) {
    state.results = []
  },
  
  RESET_LISTS(state) {
    state.lists = []
  }
}

export default mutations
const mutations = {
  SET_MAIN_SLIDES(state, mains) {
    state.mains = mains
  },

  SET_SUB_SLIDES(state, upcoming) {
    state.upcoming = upcoming
  },

  SET_SEARCH(state, results) {
    state.results = results
  },

  SET_LISTS(state, lists) {
    lists.forEach(list => {
      state.lists.push(list)
    })
  },

  SET_CONTENTS(state, contents) {
    state.contents = contents
  },

  SET_VIDEOS(state, videoId) {
    state.videoId = videoId
  },

  SET_CAST(state, casts) {
    state.casts = casts
  },

  SET_PERSON(state, person) {
    state.person = person
  },

  SET_PERSON_CREDITS(state, credits) {
    state.credits = credits
  },

  SET_REVIEW(state, data) {
    state.review.push({ id: data.id, data: data.data })
  },

  SET_BROWSER(state, browser) {
    state.browser = browser
  },
  
  SET_GENRES(state, genres) {
    state.genres = genres
  },

  SET_CATEGORIES(state, categoriesList) {
    state.categoriesList = state.categoriesList.concat(categoriesList)
  },

  RESET_CATEGORIES(state) {
    state.categoriesList = []
  },


  RESET_STATES(state) {
    state.results = []
  },


}

export default mutations
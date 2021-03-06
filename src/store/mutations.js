const mutations = {

  SET_MAIN_SLIDES(state, payload) {
    state.popular = payload
  },

  SET_SUB_SLIDES(state, payload) {
    state.upcoming = payload
  },

  SET_SEARCH(state, payload) {
    state.results = payload
  },

  SET_USER(state, payload) {
    state.users = payload
  },

  SET_USER_REVIEWS(state, payload) {
    state.userReviews = payload
  },
  
  SET_LISTS(state, lists) {
    lists.forEach(list => {
      state.lists.push(list)
    })
  },

  SET_CONTENTS(state, payload) {
    state.contents = payload
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

  SET_CATEGORIES(state, payload) {
    state.categories.page = payload.page
    state.categories.total_pages = payload.total_pages
    state.categories.total_results = payload.total_results
    state.categories.results = payload.results
  },

  SET_COMMENT(state, payload) {   
    state.comments = payload    
  },

  RESET_CATEGORIES(state) {
    state.categories = []
  },

  RESET_STATES(state) {
    state.results = []
  }

}

export default mutations
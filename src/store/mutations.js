import SLIDE_REF from './firebase'


const mutations = {
  SET_MAIN_SLIDES(state, mains) {    
    SLIDE_REF.once('value').then(() => {
      SLIDE_REF.child('TRENDING').set(mains)
    })

    SLIDE_REF.child('TRENDING').on('child_added', function(snapshot) { 
      state.mains.push(snapshot.val())
    })
  },

  SET_SUB_SLIDES(state, upcoming) {    
    SLIDE_REF.once('value').then(() => {
      SLIDE_REF.child('UPCOMING').set(upcoming)
    })

    SLIDE_REF.child('UPCOMING').on('child_added', function(snapshot) { 
      state.upcoming.push(snapshot.val())
    })
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

  SET_CONTENTS_DETAILS(state, videoId) {
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


  SET_BROWSER(state, browser) {
    state.browser = browser
  },

  SET_GENRES(state, genres) {
    state.genres = genres
  },

  SET_CATEGORIES(state, categories) {
    state.categories = state.categories.concat(categories)
  },

  RESET_CATEGORIES(state) {
    state.categories = []
  },

  
  RESET_STATES(state) {
    state.results = []
  },
  

}

export default mutations
const mutations = {
  SET_MAIN_SLIDES(state, mains) {    
    // REF.SLIDES.once('value').then(() => {
    //   REF.SLIDES.child('TRENDING').set(mains)
    // })

    // REF.SLIDES.child('TRENDING').on('child_added', function(snapshot) { 
    //   state.mains.push(snapshot.val())
    // })
      state.mains =  mains
  },

  SET_SUB_SLIDES(state, upcoming) {    
    // REF.SLIDES.once('value').then(() => {
    //   REF.SLIDES.child('UPCOMING').set(upcoming)
    // })

    // REF.SLIDES.child('UPCOMING').on('child_added', function(snapshot) { 
    //   state.upcoming.push(snapshot.val())
    // })
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
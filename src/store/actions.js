import * as api from '../api'
import firebase from 'firebase'

const actions = {

  FETCH_SLIDE({ commit }, { category, options }) {
    return api.slide.fetch(category).then(data => {
      commit(options, data.results)
    })
  },

  FETCH_CONTENT({ commit }, { id }) {
    commit('SET_CONTENTS', [])
    return api.content.fetch(id).then(data => {
      commit('SET_CONTENTS', data)
    })
  },


  /////////////////////////////////  REVIEW  /////////////////////////////////
  FETCH_REVIEW({ commit }, { contentId }) {
    commit('SET_COMMENT', [])
    const COMMENT_USER_REF = firebase.database().ref(`REVIEWS/${contentId}`)
    COMMENT_USER_REF.on('value', data => {
      if (data.exists()) {
        let values = Object.values(data.val()).sort((a, b) => b.timeStamp - a.timeStamp)
        commit('SET_COMMENT', values)
      }
    })
  },


  UPDATE_REVIEW({}, { contentId, userId, posterId, title, userMail, timeStamp, description }) {
    const COMMENT_USER_REF = firebase.database().ref(`REVIEWS/${contentId}/${userId}`)
    const USER_REF = firebase.database().ref(`USER/${userId}/REVIEWS/${contentId}`)

    COMMENT_USER_REF.once('value', data => {
      if (!data.exists()) COMMENT_USER_REF.set({ userId, userMail, timeStamp, description })
    })

    USER_REF.once('value', data => {
      if (!data.exists()) USER_REF.set({ contentId, posterId, title, userMail, timeStamp, description })
    })
  },

  DELETE_REVIEW({}, { contentId, userId }) {
    const COMMENT_REF = firebase.database().ref(`REVIEWS/${contentId}`)
    const USER_REF = firebase.database().ref(`USER/${userId}/REVIEWS/${contentId}`)

    COMMENT_REF.child(userId).remove()
    USER_REF.remove()
  },



/////////////////////////////////// USER //////////////////////////////////////

  FETCH_USER({ commit }, { userId }) {
    commit('SET_USER', [])
    const USER_REF = firebase.database().ref(`USER/${userId}`)
    USER_REF.on('value', data => {
      if (data.exists()) {
        commit('SET_USER', data.val())
      }
    })
  },


  UPDATE_USER({}, { userId, userMail }) {
    const USER_REF = firebase.database().ref(`USER/${userId}/INFO`)
    USER_REF.once('value', data => {
      if (!data.exists()) {
        USER_REF.set({
          userId,
          userMail
        })
      }
    })
  },


  FETCH_USER_REVIEWS({ commit }, { userId }) {
    commit('SET_USER_REVIEWS', [])
    const USER_REF = firebase.database().ref(`USER/${userId}/REVIEWS`)
    USER_REF.on('value', data => {
      if (data.exists()) {
        let values = Object.values(data.val()).sort((a, b) => b.timeStamp - a.timeStamp)
        commit('SET_USER_REVIEWS', values)
      }
    })
  },


  UPDATE_USER_PROFILE({}, { userId, userMail }) {
    const USER_REF = firebase.database().ref(`USER/${userId}/INFO`)
    USER_REF.once('value', data => {
      if (!data.exists()) {
        USER_REF.set({
          userId,
          userMail
        })
      }
    })
  },

  

//////////////////////////////////////// CONTENT DETAIL ////////////////////////////////////////


  FETCH_VIDEOS({ commit }, { id }) {
    commit('SET_VIDEOS', [])
    return api.videos.fetch(id).then(data => {
      commit('SET_VIDEOS', data)
    })
  },



  FETCH_CAST({ commit }, { id }) {
    commit('SET_CAST', [])
    return api.cast.fetch(id).then(data => {
      commit('SET_CAST', data)
    })
  },



  FETCH_PERSON({ commit }, { id }) {
    commit('SET_PERSON', [])
    return api.person.fetch(id).then(data => {
      commit('SET_PERSON', data)
    })
  },



  FETCH_PERSON_CREDITS({ commit }, { id }) {
    commit('SET_PERSON_CREDITS', [])
    return api.personCredits.fetch(id).then(data => {
      commit('SET_PERSON_CREDITS', data)
    })
  },



  FETCH_SEARCH({ commit }, { query }) {
    return api.search.fetch(query).then(data => {
      commit('SET_SEARCH', data.results)
    })
  },



  FETCH_BROWSER({ commit }, { item }) {
    return api.browser.fetch(item).then(data => {
      commit('SET_BROWSER', data.results)
    })
  },



  FETCH_GENRES({ commit }) {
    return api.genre.fetch().then(data => {
      commit('SET_GENRES', data.genres)
    })
  },



  FETCH_CATEGORIES({ commit }, { id, page }) {
    return api.categories.fetch(id, page).then(data => {
      commit('SET_CATEGORIES', data)
    })
  },



  RESET_CATEGORIES({ commit }) {
    commit('RESET_CATEGORIES')
  },


  RESET_RESULTS({ commit }) {
    commit('RESET_STATES')
  }
}



export default actions
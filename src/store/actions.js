import * as api from '../api'
import firebase from 'firebase'

const actions = {
  FETCH_MAIN_SLIDE({ commit }, { options }) {
    return api.mainSlide.fetch().then(data => {
      commit(options, data.results)
    })
  },

  FETCH_SUB_SLIDE({ commit }, { options }) {
    return api.subSlide.fetch().then(data => {
      commit(options, data.results)
    })
  },


  FETCH_LISTS({ commit }, { id, pages }) {
    return api.mainSlide.fetch(id, pages)
      .then(data => {
        commit('SET_LISTS', data.results)
      })
  },


  FETCH_CONTENTS({ commit }, { id }) {
    return api.content.fetch(id).then(data => {
      commit('SET_CONTENTS', data)
    })
  },


  FETCH_REVIEW({ commit }, { contentId }) {
    const USER_COMMENT_REF = firebase.database().ref(`REVIEWS/${contentId}`)
    commit('SET_COMMENT', [])
    USER_COMMENT_REF.on('value', data => {
      if(data.exists()) {
        let values = Object.values(data.val()).sort((a, b) => b.timeStamp - a.timeStamp)
        commit('SET_COMMENT', values)
      } else {
        commit('SET_COMMENT', [])
      }
    })
  },


  UPDATE_REVIEW({}, { contentId, userId, userMail, timeStamp, description }) {
    const USER_COMMENT_REF = firebase.database().ref(`REVIEWS/${contentId}/${userId}`)
    USER_COMMENT_REF.once('value', data => {
      if (!data.exists()) {
        USER_COMMENT_REF.set({
          userId,
          userMail,
          timeStamp,
          description
        })
      }
    })
  },


  DELETE_REVIEW({}, { contentId, userId }) {
    const COMMENT_REF = firebase.database().ref(`REVIEWS/${contentId}`)
    COMMENT_REF.child(userId).remove()
  },


  FETCH_VIDEOS({ commit }, { id }) {
    return api.videos.fetch(id).then(data => {
      commit('SET_VIDEOS', data)
    })
  },


  FETCH_CAST({ commit }, { id }) {
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
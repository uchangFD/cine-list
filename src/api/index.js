import axios from 'axios'
import firebase from 'firebase'

const API_KEY = '64391ca210dbae0d44b0a622177ef8d3'
const TRENDING = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=en-US&page=1`
const UPCOMING = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
const SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&vote_count.gte=50&query=`
const GENRES = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`

// const POPULAR =  `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=`
// const CELEBRITIES = `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=1`


const request = (method, url, data) => {
  return axios({ method, url, data })
    .then(result => result.data)
}

export const mainSlide = {

  fetch() {
    return request('get', TRENDING)
  }

}


export const subSlide = {

  fetch() {
    return request('get', UPCOMING)
  }

}



export const search = {

  fetch(query) {
    return request('get', `${SEARCH + query}`)
  }

}


export const browser = {

  fetch(item) {
    return request('get', BROWSERS[item])
  }

}

export const categories = {

  fetch(id, page) {
    return request('get', `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${id}&vote_count.gte=100&page=${page}`)
  }

}


export const genre = {

  fetch() {
    return request('get', GENRES)
  }

}

export const content = {

  fetch(id) {
    return request('get', `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
  }

}

export const review = {

  fetch(id) {
    return request('get', `/content/${id}`)
  },

  create(contentId, userId, userMail, timeStamp, description) {
    firebase.database().ref(`REVIEWS/${contentId}/${userId}`).set({
      userMail: userMail,
      timeStamp: timeStamp,
      description: description,
    });
  }

}


export const videos = {

  fetch(id) {
    return request('get', `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
  }

}

export const cast = {

  fetch(id) {
    return request('get', `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US&append_to_response=movie_credits`)
  }

}


export const person = {

  fetch(id) {
    return request('get', `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=en-US`)
  }

}

export const personCredits = {

  fetch(id) {
    return request('get', `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${API_KEY}&language=en-US`)
  }
  
}
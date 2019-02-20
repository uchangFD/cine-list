import axios from 'axios'

const API_KEY = '64391ca210dbae0d44b0a622177ef8d3'
const LANGUAGE = 'en-US'
const TRENDING = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&language=${LANGUAGE}&page=1`
const UPCOMING = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=${LANGUAGE}&page=1`
const SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=${LANGUAGE}&vote_count.gte=50&query=`
const GENRES = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=${LANGUAGE}`


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
    return request('get', `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=${LANGUAGE}&with_genres=${id}&vote_count.gte=100&page=${page}`)
  }
}


export const genre = {
  fetch() {
    return request('get', GENRES)
  }
}

export const content = {
  fetch(id) {
    return request('get', `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=${LANGUAGE}`)
  }
}



export const videos = {
  fetch(id) {
    return request('get', `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=${LANGUAGE}`)
  }
}

export const cast = {
  fetch(id) {
    return request('get', `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=${LANGUAGE}&append_to_response=movie_credits`)
  }
}


export const person = {
  fetch(id) {
    return request('get', `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=${LANGUAGE}`)
  }
}

export const personCredits = {
  fetch(id) {
    return request('get', `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${API_KEY}&language=${LANGUAGE}`)
  }
}
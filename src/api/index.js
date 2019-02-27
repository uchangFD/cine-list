import axios from 'axios'

const API_KEY = '64391ca210dbae0d44b0a622177ef8d3'
const ROOT_URL = `https://api.themoviedb.org/3/`
const LANGUAGE_KO = 'ko-KR'
const LANGUAGE_EN = 'en-US'
const TRENDING = `${ROOT_URL}trending/movie/week?api_key=${API_KEY}&language=${LANGUAGE_EN}&page=1`
const UPCOMING = `${ROOT_URL}movie/upcoming?api_key=${API_KEY}&language=${LANGUAGE_EN}&page=1`
const SEARCH = `${ROOT_URL}search/movie?api_key=${API_KEY}&language=${LANGUAGE_EN}&vote_count.gte=50&query=`
const GENRES = `${ROOT_URL}genre/movie/list?api_key=${API_KEY}&language=${LANGUAGE_EN}`


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
    return request('get', `${ROOT_URL}discover/movie?api_key=${API_KEY}&language=${LANGUAGE_EN}&with_genres=${id}&vote_count.gte=100&page=${page}`)
  }
}

export const genre = {
  fetch() {
    return request('get', GENRES)
  }
}

export const content = {
  fetch(id) {
    return request('get', `${ROOT_URL}movie/${id}?api_key=${API_KEY}&language=${LANGUAGE_EN}`)
  }
}

export const videos = {
  fetch(id) {
    return request('get', `${ROOT_URL}movie/${id}/videos?api_key=${API_KEY}&language=${LANGUAGE_EN}`)
  }
}

export const cast = {
  fetch(id) {
    return request('get', `${ROOT_URL}movie/${id}/credits?api_key=${API_KEY}&language=${LANGUAGE_EN}&append_to_response=movie_credits`)
  }
}


export const person = {
  fetch(id) {
    return request('get', `${ROOT_URL}person/${id}?api_key=${API_KEY}&language=${LANGUAGE_EN}`)
  }
}

export const personCredits = {
  fetch(id) {
    return request('get', `${ROOT_URL}person/${id}/movie_credits?api_key=${API_KEY}&language=${LANGUAGE_EN}`)
  }
}
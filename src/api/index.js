import axios from 'axios'

const API_KEY = '?api_key=64391ca210dbae0d44b0a622177ef8d3'
const DOMAIN = {
  trending: `https://api.themoviedb.org/3/movie/now_playing${API_KEY}&language=ko&page=`,
  pitt: `https://api.themoviedb.org/3/discover/movie${API_KEY}&language=ko&with_people=287&vote_count.gte=1000&sort_by=popularity.asc`,
  scifi: `https://api.themoviedb.org/3/discover/movie${API_KEY}&language=ko&with_genres=878&sort_by=vote_average.desc`
}


const request = (method, url, data) => {
  return axios({
      method,
      url,
      data
    })
    .then(result => result.data)
}


export const list = {
  fetch(id, index) {
    return request('get', `${DOMAIN[id] + index}`)
  }
}


export const item = {
  fetch(movieId) {
    return request('get', `https://api.themoviedb.org/3/movie/${movieId}${API_KEY}&language=ko`)
  }
}
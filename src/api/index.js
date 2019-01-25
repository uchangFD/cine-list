import axios from 'axios'

const API_KEY = '?api_key=64391ca210dbae0d44b0a622177ef8d3'
const DOMAIN = {
  trending: `https://api.themoviedb.org/3/movie/now_playing${API_KEY}&language=ko&page=`,
  pitt: `https://api.themoviedb.org/3/discover/movie${API_KEY}&language=ko&with_cast=287&vote_count.gte=100&sort_by=popularity.desc&page=`,
  scifi: `https://api.themoviedb.org/3/discover/movie${API_KEY}&language=ko&with_genres=878&sort_by=vote_average.desc&page=`,
  topRated: `https://api.themoviedb.org/3/discover/movie${API_KEY}&sort_by=vote_average.desc&vote_count.gte=100&page=`
}


const request = (method, url, data) => {
  return axios({
      method,
      url,
      data
    })
    .then(result => result.data)
}


export const main = {
  
  fetch(id, index) {
    return request('get', `${DOMAIN[id] + index}`)
  },

  fetchItem(movieId) {
    return request('get', `https://api.themoviedb.org/3/movie/${movieId}${API_KEY}&language=ko`)
  },
  fetchCast(movieId) {
    return request('get', `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=64391ca210dbae0d44b0a622177ef8d3&language=ko&append_to_response=movie_credits`)
  }
}
import axios from 'axios'

const API_KEY = '64391ca210dbae0d44b0a622177ef8d3'


const MAIN = {
  trending: `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`,
  upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
}

const GENRES = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`


const BROWSERS = {
  popular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=`,
  celebrities: `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=en-US&page=1`
}

// const VIDEOS = `https://api.themoviedb.org/3/movie/${MOVIE_ID}/videos?api_key=${API_KEY}&language=en-US`




const SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&vote_count.gte=50&query=`

const request = (method, url, data) => {
  return axios({
      method,
      url,
      data
    })
    .then(result => result.data)
}



export const main = {  
  fetch(id) {
    return request('get', MAIN[id])
  },

  fetchItem(movieId) {
    return request('get', `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
  },

  fetchCast(movieId) {
    return request('get', `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US&append_to_response=movie_credits`)
  }
}



export const search = {
  fetch(text) {
    return request('get', `${SEARCH + text}`)
  },

}


export const browser = {
  fetch(item) {
    return request('get', BROWSERS[item])
  }
}


export const categories = {
  fetch(id) {
    return request('get', `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${id}&vote_count.gte=100`)
  }
}


export const genre = {
  fetch() {
    return request('get', GENRES)
  }
}
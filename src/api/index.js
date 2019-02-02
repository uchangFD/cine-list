import axios from 'axios'

const API_KEY = '?api_key=64391ca210dbae0d44b0a622177ef8d3'


const MAIN = {
  trending: `https://api.themoviedb.org/3/trending/all/day${API_KEY}`,
}

const BROWSERS = {
  popular: `https://api.themoviedb.org/3/movie/popular${API_KEY}&language=ko&page=`,
  celebrities: `https://api.themoviedb.org/3/person/popular${API_KEY}&language=ko&page=1`
}

// const VIDEOS = `https://api.themoviedb.org/3/movie/${MOVIE_ID}/videos${API_KEY}&language=en-US`

const CATEGORIES = {
  genres: `https://api.themoviedb.org/3/discover/movie${API_KEY}with_genres=${genres}&sort_by=vote_average.desc`,
  trending: `https://api.themoviedb.org/3/trending/all/day${API_KEY}`,
  scifi: `https://api.themoviedb.org/3/discover/movie${API_KEY}&language=ko&with_genres=878&sort_by=vote_average.desc&page=`,
  topRated: `https://api.themoviedb.org/3/discover/movie${API_KEY}&sort_by=vote_average.desc&vote_count.gte=100&page=`,
  upcoming: `https://api.themoviedb.org/3/movie/upcoming${API_KEY}&language=ko&page=`
}



const SEARCH = `https://api.themoviedb.org/3/search/movie${API_KEY}&language=ko&vote_count.gte=100&query=`

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
    return request('get', CATEGORIES[id])
  },

  fetchSearch(text) {
    return request('get', `${SEARCH + text}`)
  },

  fetchItem(movieId) {
    return request('get', `https://api.themoviedb.org/3/movie/${movieId}${API_KEY}&language=ko`)
  },

  fetchCast(movieId) {
    return request('get', `https://api.themoviedb.org/3/movie/${movieId}/credits${API_KEY}&language=ko&append_to_response=movie_credits`)
  }
}

export const categories = {
  fetch(id) {
    return request('get', CATEGORIES[id])
  }
}


export const browser = {
  fetch(item) {
    return request('get', BROWSERS[item])
  }
}
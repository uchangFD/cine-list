import axios from "axios";

const API_KEY = "64391ca210dbae0d44b0a622177ef8d3";
const ROOT_URL = `https://api.themoviedb.org/3/`;
const LANGUAGE_KO = "ko-KR";
const LANGUAGE_EN = "en-US";
const UPCOMING = `${ROOT_URL}movie/upcoming?api_key=${API_KEY}&language=${LANGUAGE_EN}&page=1`;
const SEARCH = `${ROOT_URL}search/movie?api_key=${API_KEY}&language=${LANGUAGE_EN}&vote_count.gte=50&query=`;
const GENRES = `${ROOT_URL}genre/movie/list?api_key=${API_KEY}&language=${LANGUAGE_EN}`;

export const fetch = type => {
  switch (type) {
    case "categories":
      return (id, page) =>
        axios.get(
          `${ROOT_URL}discover/movie?api_key=${API_KEY}&language=${LANGUAGE_EN}&with_genres=${id}&vote_count.gte=100&page=${page}`
        );

    case "search":
      return query => axios.get(`${SEARCH + query}`);

    case "genres":
      return () => axios.get(GENRES);

    case "details":
      return {
        content: id =>
          axios.get(
            `${ROOT_URL}movie/${id}?api_key=${API_KEY}&language=${LANGUAGE_EN}`
          ),
        videos: id =>
          axios.get(
            `${ROOT_URL}movie/${id}/videos?api_key=${API_KEY}&language=${LANGUAGE_EN}`
          ),
        cast: id =>
          axios.get(
            `${ROOT_URL}movie/${id}/credits?api_key=${API_KEY}&language=${LANGUAGE_EN}&append_to_response=movie_credits`
          ),
        person: id =>
          axios.get(
            `${ROOT_URL}person/${id}/movie_credits?api_key=${API_KEY}&language=${LANGUAGE_EN}`
          ),
        personCredits: id =>
          axios.get(
            `${ROOT_URL}person/${id}/movie_credits?api_key=${API_KEY}&language=${LANGUAGE_EN}`
          )
      };

    default:
      throw Error("Not found type");
  }
};

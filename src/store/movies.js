import { fetch } from "../api/movie";

const init = async () => {
  const genres = await fetch("genres");
  const getCategory = fetch("categories");
  const detailFetchers = fetch("details");

  return {
    state: {
      genres,
      categories: {},
      search: []
    },
    mutations: {
      SET_CATEGORIES({ categories }, { id, data }) {
        // id => action, drama... 확인
        if (typeof categories[id] !== "undefined") {
          categories[id] = [];
        }

        // 걸러주는 모듈 만들어야함.
        categories[id].push(data);
      },
      SET_DETAILS({ categories }, { type, data, id }) {
        let _movie;

        for (const category of categories) {
          _movie = category.find(movie => movie.id === id);

          if (typeof _movie !== "undefined") break;
        }

        _movie[type] = data;
      }
    },
    actions: {
      GET_CATEGORY({ commit }, { id, page }) {
        return getCategory(id, page).then(data =>
          commit("SET_CATEGORIES", { id, data })
        );
      },
      GET_DETAILS({ commit }, { type, id }) {
        const getDetails = detailFetchers[type];

        return getDetails(id).then(data =>
          commit("SET_DETAILS", { id, type, data })
        );
      }
    }
  };
};

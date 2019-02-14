<template>
  <div class="categories__container">
    <div v-if="isLoading" class="categories__loading">
      <Loader />
    </div>
    <div v-else>
      <div class="categories__movie-wrapper">
        <h2 class="categories__movie-title">{{title}}</h2>
        <div class="categories__movie-list">
          <div 
            v-for="(item, index) in categories" 
            :key="index"
            class="categories__movie-item"
          >
            <div class="categories__poster">
              <img 
                class="categories__poster-image"
                :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`"  
                :alt="`${item.original_title}`"
              >
            </div>
            <div class="categories__wrapper">
              <div class="categories__info">
                <h3 class="categories__title">{{item.title ? item.title : '제목 없음'}}</h3>
                <p class="categories__rate">{{item.vote_average}} / 10</p>
                <p class="categories__synopsis">{{item.overview}}</p>
              </div>
              <div class="categories__links">
                <router-link :to="`/content/${item.id}`">
                  <button class="categories__btn">View Details</button>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import List from './List.vue'
import Loader from './Loader.vue'
import _ from 'lodash'

export default {
  components: {
    List, Loader
  },

  data() {
    return {
      title: '',
      isLoading: false,
      pages: 1
    }
  },

  created () {
    window.addEventListener('scroll', this.handleScroll);
  },

  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },


  computed: {
    ...mapState({
      genres: 'genres',
      categories: 'categories'
    })
  },

  watch: {
    '$route': {
      handler :'fetch',
      immediate: true,
    },
    '$route.params.categoriesId': 'onReset'
  },
  
  methods: {
    ...mapActions([
      'FETCH_CATEGORIES',
      'RESET_CATEGORIES'
    ]),

    fetch: function(pages = 1) {
      this.genres.forEach(obj => {
        if(obj.name.toLowerCase() === this.$route.params.categoriesId) {
          this.isLoading = true
          this.title = obj.name
          this.FETCH_CATEGORIES({id: obj.id, page: pages})
          .finally(_ => {this.isLoading = false})
        }
      })
    },

    onReset: function() {
      this.RESET_CATEGORIES()
      window.scrollTo(0, 0)
      this.pages = 1
    },

    handleScroll: _.throttle(
      function() {
        this.scrolled = (window.innerHeight + window.scrollY) >= document.querySelector('.categories__movie-wrapper').offsetHeight
        if ( this.scrolled) {this.fetch(++this.pages)}
      }, 300),
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.categories__container {
  margin-left: 250px;
  background: $primary-color;
  padding-top: 30px;
  min-height: 100%;
  .categories__movie-wrapper {
    width: 90%;
    min-height: 100%;
    margin-right: auto;
    position: relative;
    margin-left: 80px;
    .categories__movie-title {
      color: #fff;
      font-size: 1.35rem;
      font-weight: 700;
      letter-spacing: .5px;
      padding-left: 10px;
      margin-bottom: .4rem;
      margin-left: .5rem;
    }
  }
}



.categories__movie-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  .categories__movie-item {
    display: flex;
    margin-bottom: 2rem;
    opacity: 0.8;
    padding: 1rem;
    margin: 0 2rem 2rem 0;
    &:hover {
      background: $primary-shadow-color;
      opacity: 1;
      border-radius: 2px;
    }
    .categories__poster{
      flex: none;
      .categories__poster-image {
        object-fit: cover;
        width: 150px;
        height: 225px;
        border-radius: 2px;
        margin-right: 1rem;
      }
    }
    .categories__wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .categories__info {  
        .categories__title {
          color: #fff;
          font-size: 1.2rem;
          letter-spacing: 1.2px;
        }
        .categories__rate {
          color: #fff;
          margin-top: 1rem;
          letter-spacing: 1.2px;
        }
        .categories__synopsis {
          margin-top: 1rem;
          font-size: 0.9rem;
          letter-spacing: 0.5px;
          font-weight: 300;
          line-height: 1.4;
          color: #fff;
        }
      }
      .categories__links {
        margin-top: 1rem;
        .categories__btn {
          width: 120px;
          height: 35px;
          border-radius: 17.5px;
          background: $gradient-color;
          color: #fff;
          cursor: pointer;
        }
      }
    }
  }
}


</style>




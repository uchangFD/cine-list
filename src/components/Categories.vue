<template>
  <div class="categories__container">
    <div class="categories__movie-wrapper">
      <h2 class="categories__movie-title">{{title}}</h2>
      <div class="categories__movie-list">
        <router-link 
          :to="`/content/${item.id}`"
          v-for="(item, index) in categories" 
          :key="index"
          class="categories__movie-item"
        >
          <div>
            <img 
              class="categories__content__poster-image"
              :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`"  
              :alt="`${item.original_title}`"
            >
            <h3 class="categories__content__title">{{item.title ? item.title : '제목 없음'}}</h3>
            <p class="categories__content__rate">{{item.vote_average}} / 10</p>
            <p class="categories__content__synopsis">{{item.overview}}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import List from './List.vue'
import _ from 'lodash'

export default {
  components: {
    List
  },

  data() {
    return {
      title: ''
    }
  },

  created () {
    // window.addEventListener('scroll', this.handleScroll);
  },

  destroyed () {
    // window.removeEventListener('scroll', this.handleScroll);
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
    }
  },

  updated() {
  },
  
  methods: {
    ...mapActions([
      'FETCH_CATEGORIES'
    ]),

    fetch: function() {
      this.genres.forEach(obj => {
        if(obj.name.toLowerCase() === this.$route.params.categoriesId) {
          this.FETCH_CATEGORIES({id: obj.id})
          this.title = obj.name
        }
      })
    },

    // handleScroll: _.throttle(
    //   function() {
    //     this.scrolled = (window.innerHeight + window.scrollY) >= document.body.offsetHeight
    //     if ( this.scrolled ) {
    //       this.page++
    //       this.fetch()
    //     }
    //   }, 300
    // ),

    // onResetLists: function() {
    //   this.RESET_LISTS()
    //   this.pageName = this.$route.params.categoriesId
    //   this.fetch()
    // },

  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.categories__test {
  color: #fff;
}

.categories__container {
  margin-left: 250px;
  background: $primary-color;
  padding-top: 30px;
  .categories__movie-wrapper {
    width: 90%;
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
    margin-bottom: 2rem;
    opacity: 0.8;
    padding: 1rem;
    margin: 0 2rem 2rem 0;
    &:hover {
      background: $primary-shadow-color;
      opacity: 1;
      border-radius: 2px;
    }
    .categories__content__poster-image {
      float: left;
      object-fit: cover;
      width: 150px;
      height: 225px;
      border-radius: 2px;
      margin-right: 1rem;
    }
    .categories__content__title {
      color: #fff;
      font-size: 1.2rem;
      letter-spacing: 1.2px;
    }
    .categories__content__rate {
      color: #fff;
      margin-top: 1rem;
      letter-spacing: 1.2px;
    }
    .categories__content__synopsis {
      margin-top: 1rem;
      font-size: 0.9rem;
      letter-spacing: 0.5px;
      font-weight: 300;
      line-height: 1.4;
      color: #fff;
    }
  }
}


</style>




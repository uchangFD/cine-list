<template>
  <div class="categories__container">

    <div 
      v-if="isLoading" 
      class="categories__loading"
    >
      <Loader />
    </div>

    <div v-else>
      <CategoriesList :title="title" />
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

import CategoriesList from './CategoriesList.vue'
import Loader from './Loader.vue'

import _ from 'lodash'

export default {
  components: {
    CategoriesList, Loader
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

<style lang="scss">
@import "../assets/styles/variables.scss";

.categories__container {
  margin-left: 250px;
  background: $baseline-color;
  padding-top: 30px;
  min-height: 100%;
}





</style>




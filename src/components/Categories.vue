<template>
  <div class="categories__container">
    <div v-if="isLoading" class="categories__loading">
      <Loader />
    </div>

    <div v-else>
      <!-- <CategoriesList :title="title" /> -->
      <router-view :title="title"></router-view>
      <Pages />
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import CategoriesList from './CategoriesList.vue'
import Loader from './Loader.vue'
import Pages from './Pages.vue'


export default {
  components: {
    CategoriesList, Loader, Pages
  },


  data() {
    return {
      pages: 1,
      cid: 0,
      title: '',
      isLoading: false,
    }
  },


  computed: {
    ...mapState({
      genres: 'genres',
      categories: 'categories',
    })
  },


  watch: {
    '$route': {
      handler :'fetch',
      immediate: true,
    },
    '$route.params.categoriesId': 'onReset',
    '$route.params.pagesId': 'fetch'

  },
  

  methods: {
    ...mapActions([
      'FETCH_CATEGORIES',
      'RESET_CATEGORIES'
    ]),

    fetch: function() {
      this.genres.forEach(obj => {
        if(obj.name.toLowerCase() === this.$route.params.categoriesId) {
          this.isLoading = true
          this.title = obj.name
          this.FETCH_CATEGORIES({id: obj.id, page: this.$route.params.pagesId})
          .finally(_ => {this.isLoading = false})
        }
      })
    },

    onReset: function() {
      this.RESET_CATEGORIES()
      window.scrollTo(0, 0)
    }
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




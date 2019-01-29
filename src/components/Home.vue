<template>
  <div class="main-container">
    <div class="is-fullbleed">
      <Carousel :data="slides" />
      
      <div 
        v-if="isMain" 
        class="movie-list-wrapper"
      >
        <Search />
      </div>
      <div v-else class="movie-list-wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import Carousel from './Carousel.vue'
import Search from './Search.vue'
import _ from 'lodash'


export default {
  components:{
    Carousel, Search
  },

  data() {
    return {
      isMain: true
    }
  },

  computed: {
    ...mapState({
      slides: 'slides',
      history: 'history',
    })
  },

  watch: {
    '$route': {
      handler :'fetchData',
      immediate: true
    },

    search: function(searchText) {
      this.searched = searchText
      this.onSearching(searchText)
    }
  },


  methods: {
    ...mapActions([
      'FETCH_SLIDES'
    ]),

    fetchData: function() {
      this.isMain = window.location.pathname === '/'
      this.FETCH_SLIDES({
        id: 'trending', 
        pages: 1
      })
    },

  }
}


</script>

<style lang="scss">
.movie-list-wrapper {
  position: relative;
  width: 100%;
}

.main-container {
  position: relative;
  min-height: 1000px;
  background: #e9ecef;
  z-index: 0;
  .is-fullbleed {
    margin-top: -70px;
  }
}

.movie-search-form {
  margin-top: 2rem;
  text-align: center;
}

.movie-search-input {
  border: none;
  text-indent: 1rem;
  border-radius: 4px;
  width: 375px;
  height: 40px;
  box-shadow: 1px 2px 4px #dedede
}

.movie-search-btn {
  height: 40px;
  width: 60px;
  border: none;
  background: #3e3e3e;
  color: #fff;
  font-size: 1rem;
  border-radius: 4px;
  box-shadow: 1px 2px 4px #dedede
}


.search-result-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 1em;
}

.search-result-item {
  background: #faa;
}
</style>


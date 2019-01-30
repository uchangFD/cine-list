<template>
  <div 
    class="main-container"
  >
    <div class="is-fullbleed">
      <!-- <Carousel :data="slides" /> -->
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


export default {
  components:{
    Carousel, Search
  },

  data() {
    return {
      isMain: true,
    }
  },

  computed: {
    ...mapState({
      slides: 'slides',
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
    }
  }
}

</script>

<style lang="scss">
.movie-list-wrapper {
  position: relative;
  width: calc(100% - 250px);
  height: 300px;
}

.main-container {
  position: fixed;
  width: 100%;
  margin-left: 250px;
  min-height: 100%;
  z-index: 0;
  background: #292d3e;
}

</style>


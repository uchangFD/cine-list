<template>
  <div class="main-container">
    <div class="is-fullbleed">
      <Carousel :data="slides" />
      <div  v-if="isMain" class="movie-list-wrapper">
        <div 
          v-for="(item, index) in slides"
          :key="index"
          class="movie-wrapper"
        >
          <ul>
            <li style="display: block">
              <div class="movie">
                <router-link :to="`/movie/${item.id}`">
                  <!-- <img :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`"  :alt="`${item.original_title}`"> -->
                  {{item.title}}
                </router-link>
              </div>
            </li>
          </ul>
        </div>
      </div>
  
  
      <div
        v-else 
        class="movie-list-wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import Carousel from './Carousel.vue'

export default {
  components:{
    Carousel
  },
  data() {
    return {
      isMain: true
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
    }
  },

  methods: {
    ...mapActions([
      'FETCH_SLIDES'
    ]),

    fetchData() {
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
}

.main-container {
  position: relative;
  min-height: 1000px;
  background: #aaa;
  z-index: 0;
  .is-fullbleed {
    margin-top: -70px;
  }
}


</style>


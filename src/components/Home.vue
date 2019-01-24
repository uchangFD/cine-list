<template>
  <div class="main-container">
    <Carousel :data="main" />
    <hr>
    <div  v-if="isMain" class="movie-list-wrapper">
      <div 
        v-for="(item, index) in main"
        :key="index"
        class="movie-wrapper"
      >
        <!-- <span>{{item.title}}</span> -->
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
      main: 'main',
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
      'FETCH_MAIN'
    ]),

    fetchData() {
      this.loading = true
      this.isMain = window.location.pathname === '/'
      this.FETCH_MAIN(1).finally(_ =>{
        this.loading = false
      })
    }
  }
}


</script>

<style lang="scss">

.carousel__container {
  position: relative;
  height: auto;
  overflow: auto;
}


.carousel__item {
  display: none;
}

.carousel__backdrop-image {
  width: 100%;
  height: auto;
}

.carousel__title {
  top: 10px
}


.carousel__btn {
  position: absolute;
  top: 40%;
  width: 80px;
  height: 80px;
  &.prev-btn {
    left: 30px;
  }
  &.next-btn {
    right: 30px;
  }
}


.movie-list-wrapper {
  position: relative;
}


.active {
  display: block;
}


</style>


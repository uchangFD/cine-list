<template>
  <div></div>
  <!-- <div class="movie-wrapper">
    <div class="movies-container">
      <ul
        class="movie-lists">
        <li
          class="movie-item"
          v-for="(list, index) in lists"
          :key="index"
          ref="slides"
          :class="{active: index === sIdx}"
        >
          <List :data="list"/>
        </li>
      </ul>
    </div>
     <FontAwesome
        class="carousel__btn prev-btn"
        icon="angle-left"
        ref="prev"
        @click.prevent="decreaseIdx"
      ></FontAwesome>
      <FontAwesome
        class="carousel__btn next-btn"
        icon="angle-right"
        ref="next"
        @click.prevent="increaseIdx"
      ></FontAwesome>
  </div> -->
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
      // page: 1,
      sIdx: 0,
      // genres: null
    }
  },

  created () {
    // window.addEventListener('scroll', this.handleScroll);
    // this.genres = this.$route.params.categoriesId

  },

  destroyed () {
    // window.removeEventListener('scroll', this.handleScroll);
  },


  computed: {
    ...mapState({
      slides: 'slides',
      lists: 'lists'
    })
  },

  watch: {
    '$route': {
      handler :'fetchData',
      immediate: true,
    }
  },

  updated() {
    if ( this.genres !== this.$route.params.categoriesId ) {
      this.onResetLists()
    }
  },
  
  methods: {
    ...mapActions([
      'FETCH_LISTS',
      'RESET_LISTS'
    ]),

    fetchData: function() {
      this.loading = true
      this.FETCH_LISTS({
        id: this.$route.params.categoriesId, 
      }).finally(_ =>{
        this.loading = false
      })
    },

    // handleScroll: _.throttle(
    //   function() {
    //     this.scrolled = (window.innerHeight + window.scrollY) >= document.body.offsetHeight
    //     if ( this.scrolled ) {
    //       this.page++
    //       this.fetchData()
    //     }
    //   }, 300
    // ),

    onResetLists: function() {
      this.RESET_LISTS()
      this.genres = this.$route.params.categoriesId
      // this.page = 1
      this.fetchData()
    },

    increaseIdx: _.debounce(function() {
        if (this.sIdx > this.slides.length) this.sIdx = 0; 
        this.sIdx++
      }, 300),

    decreaseIdx: _.debounce(function() {
      if (this.sIdx <= 0) this.sIdx = this.slides.length
        this.sIdx--
      }, 300)
  }
}
</script>

<style lang="scss">

.movie-wrapper {
  position: relative;
  overflow: hidden;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  width: 1250px;
}

.movies-container {
  margin-left: 100px;
  margin-right: 100px;
  overflow: hidden;
}

.movie-lists {
  width: 10000px;
}

.movie-item {
  display: inline-block;
}



.carousel__btn {
  position: absolute;
  top: 80px;
  font-size: 4rem;
  opacity: 0.5;
  color: #e2e4df;
  cursor: pointer;
  height: 100px;
  transition: 0.3s;
  &:hover {
    opacity: 1;
    color: #e2e4df;
  }
  &.prev-btn {
    left: 0;
  }
  &.next-btn {
    right: 0;
  }
}


</style>




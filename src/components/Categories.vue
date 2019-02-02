<template>
  <div class="categories__container">
    <ul
    v-for="(item, index) in categories" :key="index"
    class="categories__movie-list">
      <li class="categories__movie-item">
        <!-- <pre wrap class="categories__test">{{item.title}}</pre> -->
        <List :data="item" />
      </li>
    </ul>
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
    </div> -->
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

    // increaseIdx: _.debounce(function() {
    //     if (this.sIdx > this.slides.length) this.sIdx = 0; 
    //     this.sIdx++
    //   }, 300),

    // decreaseIdx: _.debounce(function() {
    //   if (this.sIdx <= 0) this.sIdx = this.slides.length
    //     this.sIdx--
    //   }, 300)
  }
}
</script>

<style lang="scss">
@import "../assets/styles/variables.scss";

.categories__test {
  color: #fff;
}

.categories__container {
  margin-left: 250px;
  background: $primary-color;
}


.movie-wrapper {
  position: relative;
  overflow: hidden;
  margin-top: 100px;
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




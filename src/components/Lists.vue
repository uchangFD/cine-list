<template>
  <div class="movie-wrapper">
    <ul
      v-on:scroll="handleScroll"
      class="movie-lists"
    >
      <li
        style="display: block"
        v-for="(list, index) in lists"
        :key="index"
      >
        <List :data="list"/>
      </li>
    </ul>
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
      page: 1,
      genres: null,
      isScrolled: false
    }
  },

  created () {
    window.addEventListener('scroll', this.handleScroll);
    this.genres = this.$route.params.lid

  },

  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },


  computed: {
    ...mapState({
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
    if ( this.genres !== this.$route.params.lid ) {
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
        id: this.$route.params.lid, 
        pages: this.page
      }).finally(_ =>{
        this.loading = false
      })
    },

    handleScroll: _.throttle(
      function() {
        this.scrolled = (window.innerHeight + window.scrollY) >= document.body.offsetHeight
        if ( this.scrolled ) {
          this.page++
          this.fetchData()
        }
      }, 300
    ),

    onResetLists: function() {
      this.RESET_LISTS()
      this.genres = this.$route.params.lid
      this.page = 1
      this.fetchData()
    }
  }
}
</script>

<style>

.movie-lists {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;
}

</style>




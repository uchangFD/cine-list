<template>
  <section class="search">
    <form 
      class="movie-search-form"
      @submit.prevent="onSearched()"
    >
      <input 
        class="movie-search-input"
        type="text"
        ref="searchInput"
        v-model="search"
        placeholder="보고싶은 영화를 검색하세요"
      />
      <button
        class="movie-search-btn"
        :disabled="invalid"
      >
        검색
      </button>
    </form>
    <ul 
      class="search-result-list"
    >
      <li
        v-for="(item, index) in history" 
        :key="index"
        class="search-result-item"
      >
      {{item.title}}
      </li>
    </ul>
  </section>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import _ from 'lodash'


export default {
  data() {
    return {
      search: '',
      searched: ''
    }
  },


  computed: {
    ...mapState({
      history: 'history',
    }),

    invalid() {
      return !this.search.trim()
    },

  },

  mounted() {
    this.$refs.searchInput.focus()
  },


  watch: {
    search: function(searchText) {
      this.searched = searchText
      this.onSearching(searchText)

      if (!this.$refs.searchInput.value) {
        console.log(history)
        
      }
    }
  },

  methods: {
    ...mapActions([
      'FETCH_SEARCH'
    ]),

    onSearching: _.debounce(
      function(searchText) {
        if (this.invalid) return
        this.FETCH_SEARCH({text: searchText})
      }, 300),


    onSearched: function() {      
        if (this.invalid) return
        this.FETCH_SEARCH({text: this.searched})
        this.$refs.searchInput.value = ''
      }
  }

}
</script>

<style>

</style>

<template>
  <section class="search">
    <form 
      class="movie-search-form"
      @submit.prevent="onSubmit()"
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
        @click="onReset"
      >
        &times;
      </button>
    </form>

    <div v-if="results.length">
      <ul 
        class="search-result-list"
      >
        <li
          v-for="(item, index) in results" 
          :key="index"
          class="search-result-item"
        >
        {{item.title}}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>NOTHING TO BE SHOWN</p>
    </div>


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
      results: 'results',
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
      this.onReset(searchText)
    }
  },
  
  methods: {
    ...mapActions([
      'FETCH_SEARCH',
      'RESET_RESULTS'
    ]),

    onSearching: _.debounce(
      function(searchText) {        
        if (this.invalid) return
        this.FETCH_SEARCH({text: searchText})
      }, 300),

    onSubmit: function() {      
        if (this.invalid) return
        this.FETCH_SEARCH({text: this.searched})
        this.$refs.searchInput.value = ''
      },

    onReset: function(searchText) {
      if(!searchText) {
        this.RESET_RESULTS()
      }
    }
  }
}
</script>

<style>

</style>

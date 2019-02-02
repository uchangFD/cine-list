<template>
  <section class="search">
    <form 
      class="movie-search-form"
      type="submit"
      @submit.prevent="onSubmit"
    >
      <input 
        class="movie-search-input"
        type="text"
        ref="searchInput"
        v-model="search"
        @keyup="onKeyup"
        placeholder="보고싶은 영화를 검색하세요"
      />

      <div
        v-show="search.length"
        type="remove"
        class="reset-btn"
        @click.prevent="onClickResetBtn"
      >
        <span class="reset-btn-text">&times;</span>
      </div>
    </form>

<!-- 
    <div 
      class="search-result-wrapper"
      v-if="results.length"
    >
      <ul class="search-result-list">
        <li
          v-for="(item, index) in results" 
          :key="index"
          class="search-result-item"
        >
          <List :data="item" />
        </li>
      </ul>
    </div>

    <div v-else>
      <p>NOTHING TO BE SHOWN</p>
    </div> -->


  </section>
</template>

<script>
import List from './List'
import {mapActions, mapState} from 'vuex'
import _ from 'lodash'


export default {
  components: {
    List
  },
  data() {
    return {
      search: ''
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
      this.onSearching(searchText)
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
      }, 500),


    onSubmit: function() {
      this.onSearched()
    },


    onSearched: function() {
      if (this.invalid) return      
      this.FETCH_SEARCH({text: this.search})
    },


    onKeyup: function() {      
      if (!this.search) this.RESET_RESULTS()
    },
    

    onClickResetBtn: function() {
      this.search = ''
      this.RESET_RESULTS()
    }

  }
}
</script>

<style lang="scss">
.search {
  display: inline-block;
  width: 200px;
  margin: 0;
}

.movie-search-form {
  position: relative;
  text-align: center;
  width: 200px;
}

.movie-search-input {
  box-sizing: border-box;
  padding: 5px 0;
  width: 200px;
  line-height: 1.5;
  background: transparent;
  border-bottom: 1.25px solid #fff;
  box-shadow: none;
  outline: 0;
  color: #fff;
}


.reset-btn {
  position: absolute;
  top: 26px;
  right: 1.2%;
  height: 18px;
  width: 18px;
  line-height: 18px;
  border-radius: 50%;
  background-color: #ccc;
  color: white;
  font-size: 1rem;
  border: none;
  span {
    position: absolute;
    top: -1.5px;
    right: 4px;
  }
}

.search-result-wrapper {
  max-width: 960px;
  margin: 0 auto;
}

.search-result-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.75rem;
}

.search-result-item {
  background: #faa;
}

</style>

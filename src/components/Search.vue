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
    </div>


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

.movie-search-form {
  position: relative;
  width: 350px;
  margin: 2rem auto;
  text-align: center;
}

.movie-search-input {
  box-sizing: border-box;
  margin: 15px 0 15px 0;
  padding: 10px 15px;
  text-indent: .4rem;
  border-radius: 4px;
  width: 300px;
  border: 1px solid #cccccc;
  box-shadow: 1px 2px 4px #dedede;
  line-height: 1.5;
}


.reset-btn {
  position: absolute;
  top: 27px;
  right: 2.5rem;
  height: 22px;
  width: 22px;
  line-height: 22px;
  border-radius: 50%;
  background-color: #ccc;
  color: white;
  font-size: 1.25rem;
  border: none;
  span {
    position: absolute;
    top: -1px;
    right: 5px;
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

<template>
  <section class="search">
    <form 
      class="search__form"
      type="submit"
      @submit.prevent="onSubmit"
    >
      <input 
        class="search__input"
        type="text"
        ref="searchInput"
        v-model="query"
        @keyup="onKeyup"
        placeholder="보고싶은 영화를 검색하세요"
      />

      <div
        v-show="query.length"
        type="remove"
        class="reset-btn"
        @click.prevent="onReset"
      >
        <span class="reset-btn-text">&times;</span>
      </div>
    </form>

    <div v-if="results.length && isShowResults">
      <SearchResult :data="results" @close="isShowResults = false" />
    </div>
  </section>
</template>

<script>
import SearchResult from './SearchResult.vue'
import {mapActions, mapState} from 'vuex'
import _ from 'lodash'


export default {
  components: {
    SearchResult
  },

  data() {
    return {
      query: '',
      isShowResults: true,
    }
  },

  computed: {
    ...mapState({
      results: 'results',
    }),

    invalidForm() {
      return !this.query.trim()
    }
  },

  mounted() {
    this.$refs.searchInput.focus()
  },


  watch: {
    query: function(searchText) {
      this.onSearching(searchText)
    },
    
    '$route.params.contentId': 'onReset',
    
    isShowResults: function() {
      if (!this.isShowResults) this.onReset()
    }

  },
  
  methods: {
    ...mapActions([
      'FETCH_SEARCH',
      'RESET_RESULTS'
    ]),

    onSearching: _.debounce(
      function(searchText) {
        if (this.invalidForm) return
        this.isShowResults = true
        this.FETCH_SEARCH({query: searchText})
      }, 500),


    onSubmit: function() {
      this.onSearched()
    },


    onSearched: function() {
      if (this.invalidForm) return
      this.isShowResults = true
      this.FETCH_SEARCH({query: this.query})
    },


    onKeyup: function() {
      if (!this.query) this.RESET_RESULTS()
    },
    

    onReset: function() {
      this.query = ''
      this.RESET_RESULTS()
    }

  }
}
</script>

<style lang="scss">
@import "../assets/styles/variables.scss";




@media screen and (min-width: $desktop) {
  .search {
    display: inline-block;
    width: 300px;
    margin: 0;
    .search__form {
      position: relative;
      text-align: center;
      width: 300px;
      .search__input {
        width: 300px;
        box-sizing: border-box;
        padding-bottom: 12px;
        line-height: 1.5;
        background: transparent;
        border-bottom: 1.25px solid #fff;
        box-shadow: none;
        outline: 0;
        color: #aaa;
        text-indent: 1rem;
      }
      .reset-btn {
        position: absolute;
        top: 26px;
        right: 0;
        height: 18px;
        width: 18px;
        margin-right: .5rem;
        line-height: 18px;
        border-radius: 50%;
        background-color: #bbb;
        color: white;
        font-size: 1rem;
        border: none;
        span {
          position: absolute;
          top: -1px;
          left: 4.5px;
        }
      }
    }
  }
}

@media screen and (max-width: $mobile) {
  .search {
    .search__form {
      .search__input {
      }
      .reset-btn {
        span {
        }
      }
    }
  }
}





</style>

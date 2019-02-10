<template>
  <div class="contents__container">
    <div v-if="isLoading">
     Loading...
    </div>
    <div 
      v-else
      class="contents__wrapper"
    >
      <div class="contents__image-container">
        <img 
          class="contents__image"
          :src="`https://image.tmdb.org/t/p/w342${contents.poster_path}`"  
          :alt="contents.original_title"/>
      </div>
  
      <div class="contents__info-container">
        <p class="contents__info__rate">{{contents.vote_average}}</p>
        <h1 class="contents__info__title">
          {{contents.title}} <span class="contents__info__year">{{contents.release_date.split('-')[0]}}</span>
        </h1>
        <span 
          v-for="(genre, index) in contents.genres" 
          :key="index"
          class="contents__info__genres"
        >
          #{{genre.name}}
        </span>
        <div class="contents__info__wrapper">
          <button class="contents__info__btn">
            <a
              class="contents__info__imdb-link"
              :href="`https://www.imdb.com/title/${contents.imdb_id}/`">View IMDB</a>
          </button>
        </div>
      </div>
      <ContentTab :tabs="tabs" :selected-tab="selectedTab" v-on:@change="onClickedTab"/>
      <div class="contents__review-container">
        <p>Review Container</p>
      </div>
    </div>
  </div>
</template>

<script>
import ContentTab from './ContentTab.vue'
import { mapState, mapActions } from 'vuex'

export default {
  components: { ContentTab },
  props:['data'],

  data() {
    return {
      contentId: 0,
      isLoading: false,
      tabs: ['Synopsis', 'Cast', 'Videos', 'Related'],
      selectedTab : ''
    }
  },

  created() {
    this.selectedTab = this.tabs[0]
  },

  computed: {
    ...mapState({
      contents: 'contents',
      videoId: 'videoId',
      casts: 'casts',
      genres: 'genres'
    })
  },

  watch: {
    '$route': {
      handler :'fetch',
      immediate: true
    },
  },
  
  methods: {
    ...mapActions([
      'FETCH_CONTENTS',
      'FETCH_CONTENTS_DETAILS',
      'FETCH_CAST'
    ]),

    fetch: function() {
      this.loading = true
      this.FETCH_CONTENTS({id: this.$route.params.contentId})
      this.FETCH_CONTENTS_DETAILS({id: this.$route.params.contentId})
      this.FETCH_CAST({id: this.$route.params.contentId})
        .finally(_ =>{ this.loading = false})
    },

    onClickedTab: function(tab) {
      this.selectedTab = tab
    }
  }
}
</script>

<style lang="scss">
@import "../assets/styles/variables.scss";

.contents__container 
{
  background: $primary-color;
  margin-left: 250px;
  color: #fff;
  width: calc(100% - 250px);
  min-height: 100%;
  .contents__wrapper {
    padding-top: 50px;
    min-height: 100%;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 5px;
    grid-auto-rows: minmax(200px, 1fr);

    .contents__image-container {
      background: #a50;
      grid-column: 2;
      grid-row: 1 / 3;
      .contents__image {
        padding: 1rem;
      }
    }


    .contents__info-container {
      grid-column: 3 / 7;
      grid-row: 1;
      margin: 1rem;
      .contents__info__title {
        font-size: 2.4rem;
        padding: .5rem;
        .contents__info__year {
          font-size: 1.2rem;
        }
      }
      .contents__info__rate {
        font-size: 1.2rem;
        padding: .5rem;
      }
      .contents__info__genres {
        padding: .5rem;
      }
      .contents__info__wrapper {
        padding-left: .5rem;
        .contents__info__btn {
          margin-top: 1rem;
          width: 120px;
          height: 35px;
          border-radius: 17.5px;
          background: $gradient-color;
          .contents__info__imdb-link {
            color: #fff;
            font-size: 0.9rem;
            letter-spacing: 0.7px;
            text-shadow: 0 1px 2px #ced4da;
          }
        }
      }
    }

    .contents__review-container {
      background: #a05;
      grid-column: 2 / 7;
      grid-row: 3;
    }
  }
}

</style>

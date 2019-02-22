<template>
  <div class="contents__info-container">
    <div class="contetns__info__rate-wrapper">
      <span class="contents__info__tmdb-rate">{{contents.vote_average}}</span>
    </div>
    <h1 class="contents__info__title">
      {{contents.title}} 
      <span class="contents__info__year">{{contents.release_date.substring(0, 4)}}</span>
    </h1>
    <div class="contents__info__genres-wrapper">
      <div 
        v-for="(genre, index) in contents.genres" 
        :key="index"
        class="contents__info__genres"
      >
        <span class="contents__info__genre">#{{genre.name}}</span>
      </div>
    </div>
    <div class="contents__info__runtime-wrapper">
      <span class="contents__info__runtime">{{`${runtimes}`}}</span>
    </div>
    <div class="contents__info__wrapper">

      <a 
        class="contents__info__imdb-link" 
        :href="`https://www.imdb.com/title/${contents.imdb_id}/`" 
        target="_blank"
      >
        <PrimaryButton 
          class="contents__imdb__btn" 
          :name="'View IMDB'"
        />
      </a>
      
      <button 
        class="contents__like-btn"
        @click.prevent="onClickLikeBtn"
      >
        <p>
          <FontAwesome icon="thumbs-up" ref="like" />
          <span>Like it</span>
        </p>
      </button>

      <button class="contents__save-btn">
        <p>
          <FontAwesome icon="bookmark" ref="like" />
          <span>Save it</span>
        </p>
      </button>

    </div>
  </div>
</template>

<script>

import { mapState, mapActions } from 'vuex'
import PrimaryButton from './PrimaryButton.vue'

export default {
  components: { PrimaryButton },
  computed: {
    ...mapState({
      contents: 'contents',
      genres: 'genres'
    }),

    runtimes: function() {
      return this.getRuntime(this.contents.runtime)
    }
  },

  methods: {
    getRuntime: function(data) {
      return `${Math.floor(data / 60)}hr ${(data - (Math.floor(data / 60) * 60))}mins`
    },
    onClickLikeBtn: function() {
      console.log(this.contents.id)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.contents__info-container {
  grid-column: 3 / 8;
  grid-row: 1;
  margin: 1rem;
  height: 235px;
  .contetns__info__rate-wrapper {
    .contents__info__tmdb-rate {
      font-size: 1.2rem;
      margin-bottom: .5rem;
    }
    .contents__info__cine-list-rate {
      font-size: 1.2rem;
      margin-bottom: .5rem;
    }
  }

  .contents__info__title {
    font-size: 2.4rem;
    word-break: keep-all;
    margin-bottom: .4rem;
    .contents__info__year {
      font-size: 1.2rem;
    }
  }

  .contents__info__genres-wrapper {
    display: inline-block;
    margin-bottom: 1rem;
    border-right: 1.4px solid #adb5bd;
    .contents__info__genres {
      display: inline-block;
      margin-right: .4rem;
      .contents__info__genre {
        color: #adb5bd;
        font-weight: 300;
      }
    }
  }
  .contents__info__runtime-wrapper {
    display: inline-block;
    margin-bottom: 1rem;
    .contents__info__runtime {
      display: inline-block;
      margin-left: .4rem;
      color: #adb5bd;
      font-weight: 300;
    }
  }
  .contents__info__wrapper {
    margin-top: 1rem;
    display: flex;
    justify-content: flex-start;
      .contents__info__imdb-link {
        color: #fff;
        font-size: 0.9rem;
        letter-spacing: 0.7px;
        // text-shadow: 0 1px 2px #ced4da;
        .contents__imdb__btn {
          margin: 0;
          margin-right: 1rem;
        }
      }
    .contents__like-btn,
    .contents__save-btn {
      width: 120px;
      height: 35px;
      margin: 0;
      border-radius: 17.5px;
      background: transparent;
      border: 1px solid #adb5bd;
      cursor: pointer;
      p {
        color: #adb5bd;
      }
    }
    .contents__like-btn {
      margin-right: 1rem;
      &:hover {
        background: #aaa;
        p {
          color: #181818;
        }
      }
    }
  }
}
</style>
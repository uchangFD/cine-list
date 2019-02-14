<template>
  <div class="contents__info-container">
    <p class="contents__info__rate">{{contents.vote_average}}</p>
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
      <span class="contents__info__runtime">
        {{Math.floor(contents.runtime / 60)}}hr {{(contents.runtime - (Math.floor(contents.runtime / 60) * 60))}}mins
      </span>
    </div>
    <div class="contents__info__wrapper">
      <button class="contents__imdb__btn">
        <a
          class="contents__info__imdb-link"
          :href="`https://www.imdb.com/title/${contents.imdb_id}/`">View IMDB</a>
      </button>
      <button class="contents__like-btn">
        <p>
        <FontAwesome
          icon="thumbs-up"
          ref="like">
        </FontAwesome>
          Like it</p>
      </button>
      <button class="contents__save-btn">
        <p>
        <FontAwesome
          icon="bookmark"
          ref="like">
        </FontAwesome>
          Save it</p>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState({
      contents: 'contents',
      genres: 'genres'
    })
  },

}
</script>

<style lang="scss">
@import "../assets/styles/variables.scss";
.contents__info-container {
  grid-column: 3 / 8;
  grid-row: 1;
  margin: 1rem;
  .contents__info__title {
    font-size: 2.4rem;
    margin-bottom: .4rem;
    .contents__info__year {
      font-size: 1.2rem;
    }
  }
  .contents__info__rate {
    font-size: 1.2rem;
    margin-bottom: .5rem;
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
    .contents__imdb__btn {
      margin-bottom: 1rem;
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
    .contents__like-btn,
    .contents__save-btn {
      margin-bottom: 1rem;
      width: 120px;
      height: 35px;
      border-radius: 17.5px;
      background: transparent;
      border: 1px solid #adb5bd;
      cursor: pointer;
      p {
        color: #adb5bd;
      }
    }
    .contents__like-btn {
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
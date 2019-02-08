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
        <p>info container</p>
      </div>
  
      <div class="contents__tab-container">
        <p>tab container</p>
      </div>
      <div class="contents__video-container">
        <p>video container</p>
      </div>
    </div>


  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  props:['data'],
  data() {
    return {
      contentId: 0,
      isLoading: false
    }
  },

  computed: {
    ...mapState({
      contents: 'contents',
      videoId: 'videoId',
      casts: 'casts'
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
    }
  }
}
</script>

<style lang="scss">
@import "../assets/styles/variables.scss";

.contents__container {

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
        margin: 1rem;
      }
    }
    .contents__info-container {
      background: #0a5;
      grid-column: 3 / 7;
      grid-row: 1;
    }

    .contents__tab-container {
      background: #05a;
      grid-column: 3 / 7;
      grid-row: 2;
    }
    .contents__video-container {
      background: #a05;
      grid-column: 2 / 7;
      grid-row: 3;
    }
  }
}

</style>

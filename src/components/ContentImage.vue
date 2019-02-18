<template>
  <div class="contents__image-container">
    <img 
      class="contents__image"
      :src="`https://image.tmdb.org/t/p/w342${contents.poster_path}`"  
      :alt="contents.original_title"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      contents: 'contents'
    })
  }
}
</script>

<style lang="scss">
.contents__image-container {
  grid-column: 2;
  grid-row: 1 / 3;
  grid-template-rows: none;
  .contents__image {
    padding: 1rem;
  }
}
</style>

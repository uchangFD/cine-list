<template>
  <div class="movie">
    <router-link :to="`/movie/${data.id}`">
      <img 
        :src="`https://image.tmdb.org/t/p/w500${data.poster_path}`"  :alt="`${data.original_title}`">
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props:['data', 'lid']
}
</script>

<style>

</style>

<template>
  <div v-if="loading"></div>
  <div v-else>
    <div class="movie">
      <div class="movie-header">
         <router-link :to="`/movie/${data.id}`">
          <img 
            style="width:200px"
            :src="`https://image.tmdb.org/t/p/w500${data.poster_path}`" 
            :alt="`${data.original_title}`"
          >
          <p>{{data.title}}</p>
        </router-link>
      </div>
    </div>
  </div>  
</template>

<script>
import { mapState } from 'vuex'

export default {
  props:['data'],
  data() {
    return {
      loading: false
    }
  }
}
</script>

<style>

</style>

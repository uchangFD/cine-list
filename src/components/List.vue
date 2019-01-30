<template>
  <div class="content">
    <router-link :to="`/content/${data.id}`">
      <img 
        class="poster-image"
        :src="`https://image.tmdb.org/t/p/w500${data.poster_path}`"  
        :alt="`${data.original_title}`"
      >
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
.poster-image {
  max-width: 100%;
}
</style>

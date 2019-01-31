<template>
<div>
  <div class="content">
    <router-link :to="`/content/${data.id}`">
      <img 
        class="poster-image"
        :src="`https://image.tmdb.org/t/p/w500${data.poster_path}`"  
        :alt="`${data.original_title}`"
      >
    </router-link>
  </div>
</div>
</template>

<script>

export default {
  props:[
    'data'
  ],

}
</script>

<style>
.poster-image {
  object-fit: cover;
  width: 150px;
  height: 225px;

}
.content {
  width: 150px;
  padding: 10px;
}
</style>

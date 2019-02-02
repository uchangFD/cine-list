<template>
<div>
  <div class="content">
    <router-link :to="`/content/${data.id}`">
      <img 
        class="content__poster-image"
        :src="`https://image.tmdb.org/t/p/w500${data.poster_path}`"  
        :alt="`${data.original_title}`"
      >
      <p class="content__title">{{data.title}}</p>
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

<style lang="scss" scoped>
.content {
  width: 150px;
  padding: 10px;
  &:hover {
    background: #3e4251;
    border-radius: 2px;
  }
  .content__poster-image {
    object-fit: cover;
    width: 150px;
    height: 225px;
    border-radius: 2px;
  }
  .content__title {
    color: #fff;
    font-weight: 700;
    font-size: 0.85rem;
    padding-top: 10px;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
  }
}

</style>

<template>
<div>
  <div class="content">
    <router-link :to="`/content/${data.id}`">
      <img 
        class="content__poster-image"
        :src="`https://image.tmdb.org/t/p/w500${data.poster_path}`"  
        :alt="`${data.original_title}`"
      >
      <p class="content__title">{{data.title ? data.title : '제목 없음'}}</p>
    </router-link>
  </div>
</div>
</template>

<script>

export default {
  props:[
    'data'
  ],
  data() {
    return {
    }
  }

}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.content {
  width: 150px;
  opacity: 0.8;
  padding: 10px;
  &:hover {
    background: $primary-shadow-color;
    opacity: 1;
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

<template>
  <div class="categories-list__movie-wrapper">
    <h2 class="categories-list__movie-title">{{title}}</h2>
  
    <div class="categories-list__movie-list">
      <div 
        v-for="(item, index) in categories.results" 
        :key="index"
        class="categories-list__movie-item"
      >
        <div class="categories-list__poster">
          <img 
            class="categories-list__poster-image"
            :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`"  
            :alt="`${item.original_title}`"
          >
        </div>
        <div class="categories-list__wrapper">
          <div class="categories-list__info">
            <h3 class="categories-list__title">{{item.title ? item.title : '제목 없음'}}</h3>
            <p class="categories-list__rate">{{item.vote_average}} / 10</p>
            <p class="categories-list__synopsis">{{item.overview}}</p>
          </div>
          <div class="categories-list__links">
            <router-link :to="`/content/${item.id}`">
              <PrimaryButton class="categories-list__btn" :name="'View Details'"/>
            </router-link>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import PrimaryButton from './PrimaryButton.vue'
export default {
  components: {PrimaryButton},
  props: ['title'],
  computed: {
    ...mapState({
      genres: 'genres',
      categories: 'categories',
    })
  }
}


</script>

<style lang="scss">
@import "../assets/styles/variables.scss";
.categories-list__movie-wrapper {
  max-width: 1400px;
  min-height: 100%;
  margin: 0 auto;
  position: relative;
  .categories-list__movie-title {
    color: #fff;
    font-size: 1.35rem;
    font-weight: 700;
    letter-spacing: .5px;
    padding-left: 10px;
    margin-bottom: .4rem;
    margin-left: .5rem;
  }
  .categories-list__movie-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .categories-list__movie-item {
      display: flex;
      margin-bottom: 2rem;
      opacity: 0.8;
      padding: 1rem;
      margin: 0 2rem 2rem 0;
      &:hover {
        background: $baseline-shadow-color;
        opacity: 1;
        border-radius: 8px;
      }
      .categories-list__poster{
        flex: none;
        .categories-list__poster-image {
          object-fit: cover;
          width: 150px;
          height: 225px;
          border-radius: 8px;
          margin-right: 1rem;
        }
      }
      .categories-list__wrapper {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .categories-list__info {  
          .categories-list__title {
            color: #fff;
            font-size: 1.2rem;
            letter-spacing: 1.2px;
          }
          .categories-list__rate {
            color: #fff;
            margin-top: 1rem;
            letter-spacing: 1.2px;
          }
          .categories-list__synopsis {
            display: -webkit-box;
            -webkit-line-clamp: 3; /* 라인수 */
            -webkit-box-orient: vertical;
            word-wrap: break-word; 
            line-height: 1.4rem;
            height: 4.2rem; /* line-height 가 1.2em 이고 3라인을 자르기 때문에 height는 1.2em * 3 = 3.6em */
            margin-top: 1rem;
            font-size: 0.9rem;
            letter-spacing: 0.5px;
            font-weight: 300;
            color: #fff;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
        .categories-list__links {
          margin-top: 1rem;
          .categories-list__btn {
            width: 120px;
            height: 35px;
            border-radius: 17.5px;
            background-size: 300% 100%;
            margin: 0;
          }
        }
      }
    }
  }
}
</style>
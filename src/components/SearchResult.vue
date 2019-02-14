<template>
<div class="search-result__wrapper">
  <ul class="search-result__list">
      <li
        v-for="(item, index) in data" 
        :key="index"
        class="search-result__item"
      >
        <router-link 
          class="search-result__link"
          :to="`/content/${item.id}`"
        >
          <div class="search-result__item-wrapper">
            <img class="search-result__item-image" :src="`https://image.tmdb.org/t/p/w92${item.poster_path}`" alt="">
            <p class="search-result__item-title">{{item.title}}</p>
            <span class="search-result__item-year">{{item.release_date.split('-')[0]}}</span>
          </div>
        </router-link>
      </li>
  </ul>
</div>
  
</template>

<script>
export default {
  props: ['data'],

  mounted() {
    this.onClickOutside(this.$el)
  },
  
  methods: {
    onClickOutside: function(el) {
      document.querySelector('body').addEventListener('click', e => {
        this.$emit('close')
      })
    }
  }
}
</script>

<style lang="scss">
@import "../assets/styles/variables.scss";

.search-result__wrapper {
  margin: 0 auto;
  max-height: 500px;
  border-radius: 4px;
  overflow-y: scroll;
  background: rgba(44, 51, 56, .8);
  .search-result__list {
    .search-result__item {
      margin-bottom: .5rem;
      text-indent: .5rem;
      opacity: .9;
      &:hover {
        background: $gradient-color;
        opacity: 1;
        p, span {
          color: #181818;
        }
      }
      .search-result__link {
        .search-result__item-wrapper {
          display: flex;
          justify-content: space-around;
          align-items: center;
          .search-result__item-image {
            padding: .5rem;
            width: 48px;
            height: auto;
          }
          .search-result__item-title {
            width: 50%;
            line-height: 1.6;
            color: #efefef;
            text-shadow: 0 1px 2px #777;
            flex-direction:column;
            align-content: center;
          }
          .search-result__item-year {
            color: #efefef;
            text-shadow: 0 1px 2px #777;
            padding: .5rem;
          }
        }
      }
    }
  }
}


</style>

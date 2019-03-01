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
    this.onClickOutside()
  },
  
  methods: {
    onClickOutside: function() {
      document.querySelector('body').addEventListener('click', e => {
        this.$emit('close')
      })
    }
  }
}
</script>

<style lang="scss">
@import "../assets/styles/variables.scss";
@media screen and (min-width: $desktop) {
  .search-result__wrapper {
    padding-bottom: 1rem;
    width: 100%;
    height: 500px;
    overflow: hidden;
    .search-result__list {
      background: rgba(52, 58, 64, .9);
      width: 100%;
      height: 100%;
      padding-right: 17px;

      overflow-y: scroll;
      .search-result__item {
        width: 100%;
        padding-right: 17px;
        margin: .5rem 0;
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
              font-size: .8rem;
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
}

@media screen and (max-width: $mobile) {
  .search-result__wrapper {
    padding-bottom: 1rem;
    width: 100%;
    overflow: hidden;
    .search-result__list {
      background: rgba(18, 18, 18, .7);
      border-radius: 0 0 8px 8px;
      width: 100%;
      max-height: 500px;
      overflow-y: scroll;
      .search-result__item {
        margin: .5rem 0;
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
              font-size: .8rem;
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
}
</style>

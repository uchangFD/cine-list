<template>
  <div class="navbar__browser">
    <h2 class="navbar__browser__title">BROWSE</h2>
    <ul class="navbar__browser__list">
      <li 
        v-for="(item, index) in list" 
        :key="index"
        class="navbar__browser__item"
      >
        <router-link :to="`/browser/${item.toLowerCase()}`" class="browser__item__link" >
          <span class="browser__item__link-text">{{item}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['list']
}

</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

@media screen and (min-width: $desktop) {
  .navbar__browser {
    margin: 2.5rem auto;
    padding-left: 2rem;
    .navbar__browser__title {
      letter-spacing: 0.2rem;
      color: #666;
      font-size: 0.9rem;
    }
    .navbar__browser__list {
      margin-top: 0.4rem;
      .navbar__browser__item{
        margin-top: 0.6rem;
        .browser__item__link {
          .browser__item__link-text{
            font-size: 1rem;
            letter-spacing: 0.1rem;
            color: #aaa;
          }
        }
      }
    }
  }
}

@media screen and (max-width: $mobile) {
  .navbar__browser {
    .navbar__browser__title {

    }
    .navbar__browser__list {
      .navbar__browser__item {
        .browser__item__link {
          .browser__item__link-text{
            
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="navbar__browser">
    <h2 class="navbar__browser__title">BROWSE</h2>

    <ul class="navbar__browser__list">
      <li 
        v-for="(item, index) in list" 
        :key="index"
        class="navbar__browser__item"
      >
        <router-link :to="`/browser/${item}`" class="browser__item__link" >
          <span class="browser__item__link-text">{{item}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['list'],
  computed: {
    
  },
}

</script>

<style lang="scss">
  .navbar__browser {
    justify-content: space-around;
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
</style>

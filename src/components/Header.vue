<template>
  <section class="header">
    <div class="header__search">
      <Search />
    </div>
    <div 
      v-if="isAuth"
      class="header__auth"
    >
      <AuthSuccess />
    </div>
  </section>
</template>

<script>
import Search from './Search.vue'
import AuthSuccess from './AuthSuccess.vue'
export default {
  data() {
    return {

    }
  },

  components: {
    Search, AuthSuccess
  },

  computed: {
    isAuth() {
      return !!localStorage.getItem('token')
    } 
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
@media screen and (min-width: $desktop) {
  .header {
    margin-left: 250px;
    display: flex;
    .header__search, .header__auth {
      height: 80px;
      line-height: 80px;
      padding: 0 40px;
    }

    .header__search {
      margin-left: auto;
      padding: 0;
      z-index: 1;
    }

    .header__auth {
      margin: 0;
    }
  }
}


@media screen and (max-width: $mobile) {
  .header {
    position: fixed;
    background: $baseline-secondary-color;
    display: flex;
    align-items: center;
    width: 100%;
    height: 80px;
    line-height: 80px;
    z-index: 3;
    top: 0;
    .header__search, .header__auth {
      line-height: 80px;
      height: 80px;
    }
    .header__search {
      margin-left: auto;
      padding: 0;
      z-index: 1;
    }
    .header__auth {
      margin-left: 1rem;

    }
  }
}


</style>

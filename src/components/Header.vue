<template>
  <section class="header">
    <Search class="header__search"/>
    <div class="header__login">
      <router-link class="header__login-btn" to="/login">Login</router-link>
    </div>
  </section>
</template>

<script>
import Search from './Search.vue'
export default {
  components: {
    Search
  }
}
</script>

<style lang="scss">
@import "../assets/styles/variables.scss";

.header {
  margin-left: 250px;
  display: flex;
  background-color: $primary-color;

  .header__search, .header__login {
    flex: none;
    height: 70px;
    line-height: 70px;
    padding: 0 40px;
  }
  .header__login-btn {
    cursor: pointer;
    color: #fff;
  }

  .header__search {
    margin-left: auto;
    padding: 0;
  }

  .header__login {
    margin: 0;
  }
}

</style>

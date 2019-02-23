<template>
  <section class="header">
    <Search class="header__search"/>
    
    <div v-if="isAuth">
      <AuthSuccess />
    </div>

    <div v-else>
      <router-link to="/login">login</router-link>
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

.header {
  margin-left: 250px;
  display: flex;
  background-color: $baseline-color;
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
    z-index: 1;
  }

  .header__login {
    margin: 0;
  }
}



@media screen and (max-width: $mobile) {
  .header {
    margin: 0;
    display: block;
    .header__search, .header__login {
      height: 70px;
      line-height: 70px;
      padding: 0 40px;
    }
  }
}


</style>

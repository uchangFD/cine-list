<template>
  <div class="main">
    <Navbar /> 
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Header from "./Header.vue";
export default {
  components:{
     Navbar, Header
  }
}

</script>



<style lang="scss">
@import "../assets/styles/variables.scss";

  
</style>
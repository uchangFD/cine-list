<template>
  <div id="app">
    <Navbar />    
    <router-view></router-view>
  </div>
  
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  name: 'app',
  components: {Navbar},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
  html, body, div, span, h1, h2, h3, h4, h5, h6, p, pre, a, img, strong, dl, dt, dd, ol, ul, li, nav {
    margin: 0;
	  padding: 0;
	  border: 0;
	  font-size: 100%;
	  font: inherit;
	  vertical-align: baseline;
  }

  body {
    line-height: 1;
  }

  ul, li {
	  list-style: none;
  }


  a {
    text-decoration: none;
    color: #181818
  }
</style>
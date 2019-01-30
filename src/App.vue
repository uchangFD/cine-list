<template>
  <div id="app">
    <div class="base-board">
      <Navbar />    
      <router-view></router-view>
    </div>
  </div>
  
</template>

<script>
import Navbar from "./components/Navbar.vue";
export default {
  components: {
    Navbar
  }
}

</script>

<style lang="scss">

  html, body, div, span, 
  h1, h2, h3, h4, h5, h6, 
  p, pre, a, img, strong, 
  dl, dt, dd, ol, ul, li, nav, input,
  button {
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

  #base-board {
    z-index: 0;
    overflow-x: hidden
  }



</style>
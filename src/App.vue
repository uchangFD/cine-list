<template>
  <div id="app">
    <Navbar /> 
    <Header />
    <router-view></router-view>
  </div>
  
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Header from "./components/Header.vue";
export default {
  components: {
    Navbar, Header
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

  .transition {
    transition: 800ms;
  }

</style>
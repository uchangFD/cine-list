<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {}
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
  html {
    height: 100%;
    margin: 0;
  }

  body {
    height: 100%;
    margin: 0;
    line-height: 1;
  }

  #app {
    position: absolute; 
    top: 0; 
    bottom: 0;
    right: 0;
    left:0;
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
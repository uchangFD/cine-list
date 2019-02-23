<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "./assets/styles/variables.scss";
@import url('https://fonts.googleapis.com/css?family=Lato|Noto+Sans+KR|Roboto');



  html, body, div, span, 
  h1, h2, h3, h4, h5, h6, 
  p, pre, a, img, strong, 
  dl, dt, dd, ol, ul, li, nav, input, hr,
  button {
    margin: 0;
	  padding: 0;
	  border: 0;
	  font-size: 100%;
    vertical-align: baseline;
    font-family: 'Lato', 'Noto Sans KR', sans-serif;
  }
  html {
    font-family: 'Lato', 'Noto Sans KR', sans-serif;
    height: 100%;
    margin: 0;
    background: $baseline-color;
  }

  body {
    font-family: 'Lato', 'Noto Sans KR', sans-serif;
    height: 100%;
    margin: 0;
    line-height: 1;
    background: $baseline-color;
  }

  #app {
    font-family: 'Lato', 'Noto Sans KR', sans-serif;
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
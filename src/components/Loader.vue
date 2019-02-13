<template>
<div class="loader-wrapper">
  <div id="loader">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
.loader-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
}
@for $i from 0 to 9 {
  #loader {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;

    div {
      position: absolute;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background: $gradient-color;
      animation: loader 1.2s linear infinite;

      &:nth-child(#{$i * 3 - 2}) {
        top: 20px * ($i - 1) + 5px;
        left: 5px;
        animation-delay: -0.4s * $i + 0.4s;
      }

      &:nth-child(#{$i * 3 - 1}) {
        top: 20px * ($i - 1) + 5px;
        left: 25px;
        animation-delay: -0.4s * $i;
      }
      
      &:nth-child(#{$i * 3}) {
        top: 20px * ($i - 1) + 5px;
        left: 45px;
        animation-delay: -0.4s * $i + 0.8s;
      }
    }
  }
}
  
@keyframes loader {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>

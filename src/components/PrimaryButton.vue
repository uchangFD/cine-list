<template>
  <button class="primary-btn">{{name}}</button>
</template>

<script>
export default {
  props: ['name']
}
</script>

<style lang="scss">
@import "../assets/styles/variables.scss";
  .primary-btn {
    display: block;
    margin-top: .7rem;
    margin-left: auto;
    margin-right: auto;
    width: 120px;
    height: 35px;
    border-radius: 17.5px;
    background-size: 300% 100%;
    bottom: 0;
    font-size: 0.9rem;
    letter-spacing: 0.7px;
    color: #fff;
    text-shadow: 0 1px 2px #ced4da;
    cursor: pointer;
    background-image: $secondary-gradient-color;
    transition: all .4s ease-in-out;
    &:hover {
      background-position: 100% 0;
      transition: all .4s ease-in-out;
    }
    &:focus {
      outline: none;
    }
}

</style>

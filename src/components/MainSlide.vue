<template>
  <section class="slides">
    <div class="slides-container">
      <h2 class="slides-container__title">Hot Movies Now</h2>
      <div class="slide__lists__wrapper">
        <ul class="slide__lists">
          <li
            class="slide__item"
            v-for="(list, index) in data"
            :key="index"
            ref="slides"
          >
            <List :data="list"/>
          </li>
        </ul>
      </div>
    </div>
    <FontAwesome
       class="slides__navigation-btn slides__prev-btn"
       icon="angle-left"
       ref="prev"
       @click.prevent="onClickPrevBtn(1)"
     ></FontAwesome>
     <FontAwesome
       class="slides__navigation-btn slides__next-btn"
       icon="angle-right"
       ref="next"
       @click.prevent="onClickNextBtn(-1)"
     ></FontAwesome>
  </section>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import List from './List.vue'
import _ from 'lodash'

export default {
  components: {
    List
  },
  props: ['data'],

  methods: {
    onClickNextBtn: function(direction) {
      document.querySelector('.slide__lists').classList.add('transition')
      document.querySelector('.slide__lists').style.transform = `translateX(${direction * 170}px)`
      this.increaseIdx()
    },
  
    onClickPrevBtn: function(direction) {
      document.querySelector('.slide__lists').classList.add('transition')
      document.querySelector('.slide__lists').style.transform = `translateX(${direction * 170}px)`
      this.decreaseIdx()
    },

    increaseIdx:_.debounce(function() {
      setTimeout(() => {  
        this.data.push(this.data.shift())
        document.querySelector('.slide__lists').style.transform = `translateX(0px)`
        document.querySelector('.slide__lists').classList.remove('transition')
        }, 300)
      }, 500),

    decreaseIdx: _.debounce(function() {
      setTimeout(() => {
        this.data.unshift(this.data.pop())
        document.querySelector('.slide__lists').style.transform = `translateX(0px)`
        document.querySelector('.slide__lists').classList.remove('transition')
        }, 300)
      }, 500)
  }
}


</script>

<style lang="scss">
.slides {
  position: relative;
  overflow: hidden;
  margin-right: auto;
  width: 1190px;
  .slides-container {
    margin-left: 80px;
    margin-right: 80px;
    overflow: hidden;
    .slides-container__title {
      color: #fff;
      font-size: 1.35rem;
      font-weight: 700;
      letter-spacing: .5px;
      padding-left: 10px;
      margin-bottom: .4rem;
    }
    .slide__lists__wrapper{
      width: 100%;
      overflow: hidden;
    }
    .slide__lists {
      width: 10000%;
      position: relative;
      left: -340px;
      .slide__item {
        display: inline-block;
      }
    }
  }
  .slides__navigation-btn {
    position: absolute;
    top: 137px;
    font-size: 4rem;
    opacity: 0.5;
    color: #e2e4df;
    cursor: pointer;
    height: 44px;
    width: 44px;
    background: #000;
    transition: 0.3s;
    &:hover {
      opacity: 1;
      color: #e2e4df;
    }
    &.slides__prev-btn {
      left: 3rem;
    }
    &.slides__next-btn {
      right: 3rem;
    }
  }
}
</style>

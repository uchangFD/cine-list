<template>
  <section class="slides">
    <div class="main-slides">
      <div class="main-main-slides__container">
        <h2 class="main-main-slides__container__title">Hot Movies Now</h2>
        <div class="main-slide__lists__wrapper">
          <ul class="main-slide__lists">
            <li
              class="main-slide__item"
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
         class="main-slides__navigation-btn main-slides__prev-btn"
         icon="angle-left"
         ref="prev"
         @click.prevent="onClickPrevBtn(2)"
       ></FontAwesome>
       <FontAwesome
         class="main-slides__navigation-btn main-slides__next-btn"
         icon="angle-right"
         ref="next"
         @click.prevent="onClickNextBtn(-2)"
       ></FontAwesome>
    </div>
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
    ...mapActions([
      'UPDATE_MAIN_SLIDE'
    ]),




    onClickNextBtn: function(direction) {
      document.querySelector('.main-slide__lists').classList.add('transition')
      document.querySelector('.main-slide__lists').style.transform = `translateX(${direction * 170}px)`
      this.increaseIdx()
      this.UPDATE_MAIN_SLIDE()

    },
  
    onClickPrevBtn: function(direction) {
      document.querySelector('.main-slide__lists').classList.add('transition')
      document.querySelector('.main-slide__lists').style.transform = `translateX(${direction * 170}px)`
      this.decreaseIdx()
    },

    increaseIdx:_.debounce(function() {
      setTimeout(() => {
        // this.data = this.data.concat(this.data.splice(0, 2))
        document.querySelector('.main-slide__lists').style.transform = `translateX(0px)`
        document.querySelector('.main-slide__lists').classList.remove('transition')
        }, 300)
      }, 500),

    decreaseIdx: _.debounce(function() {
      setTimeout(() => {
        this.data.unshift(this.data.pop())
        document.querySelector('.main-slide__lists').style.transform = `translateX(0px)`
        document.querySelector('.main-slide__lists').classList.remove('transition')
        }, 300)
      }, 500)
  }
}


</script>

<style lang="scss" scoped>
.slides {
  padding-top: 30px;
  padding-bottom: 30px;
  position: relative;
  width: calc(100% - 250px);
  .main-slides {
    position: relative;
    overflow: hidden;
    margin-right: auto;
    width: 90%;
    .main-main-slides__container {
      margin-left: 80px;
      margin-right: 80px;
      overflow: hidden;
      .main-main-slides__container__title {
        color: #fff;
        font-size: 1.35rem;
        font-weight: 700;
        letter-spacing: .5px;
        padding-left: 10px;
        margin-bottom: .4rem;
      }
      .main-slide__lists__wrapper{
        width: 100%;
        overflow: hidden;
      }
      .main-slide__lists {
        width: 10000%;
        position: relative;
        left: -340px;
        .main-slide__item {
          display: inline-block;
        }
      }
    }
    .main-slides__navigation-btn {
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
      border-radius: 4px;
      &:hover {
        opacity: 1;
        color: #e2e4df;
      }
      &.main-slides__prev-btn {
        left: 3rem;
      }
      &.main-slides__next-btn {
        right: 3rem;
      }
    }
  }
}
</style>

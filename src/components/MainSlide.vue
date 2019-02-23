<template>
  <section class="slides">
    <div class="main-slides">
      <div class="main-slides__container">
        <h2 class="main-slides__container__title">Hot Movies Now</h2>
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
         @click.prevent="onClickPrevBtn(4)"
       ></FontAwesome>
       <FontAwesome
         class="main-slides__navigation-btn main-slides__next-btn"
         icon="angle-right"
         ref="next"
         @click.prevent="onClickNextBtn(-4)"
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
    onClickNextBtn: function(direction) {
      document.querySelector('.main-slide__lists').classList.add('transition')
      document.querySelector('.main-slide__lists').style.transform = `translateX(${direction * 170}px)`
      this.increaseIdx()
    },
  
    onClickPrevBtn: function(direction) {
      document.querySelector('.main-slide__lists').classList.add('transition')
      document.querySelector('.main-slide__lists').style.transform = `translateX(${direction * 170}px)`
      this.decreaseIdx()
    },

    increaseIdx:_.debounce(function() {
        this.$store.state.mains = this.$store.state.mains.concat(this.$store.state.mains.splice(0,4))
        document.querySelector('.main-slide__lists').style.transform = `translateX(0px)`
        document.querySelector('.main-slide__lists').classList.remove('transition')
      }, 800),

    decreaseIdx: _.debounce(function() {
        this.$store.state.mains = this.$store.state.mains.splice(this.$store.state.mains.length - 4, 4).concat(this.$store.state.mains)
        document.querySelector('.main-slide__lists').style.transform = `translateX(0px)`
        document.querySelector('.main-slide__lists').classList.remove('transition')
      }, 800)
  }


}


</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.slides {
  padding-top: 50px;
  padding-bottom: 50px;
  position: relative;
  width: 90%;
  height: 320px;
  .main-slides {
    position: relative;
    overflow: hidden;
    margin-right: auto;
    width: 110%;
    .main-slides__container {
      margin-left: 80px;
      margin-right: 80px;
      overflow: hidden;
      .main-slides__container__title {
        color: #fff;
        font-size: 1.35rem;
        font-weight: 700;
        letter-spacing: .5px;
        padding-left: 10px;
        height: 3rem;
      }
      .main-slide__lists__wrapper{
        width: 100%;
        overflow: hidden;
      }
      .main-slide__lists {
        width: 10000%;
        height: 350px;
        position: relative;
        left: -680px;
        .main-slide__item {
          display: inline-block;
        }
      }
    }
    .main-slides__navigation-btn {
      position: absolute;
      top: 150px;
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



@media screen and (max-width: $mobile) {
  .slides {
    width: 100%;
    height: 100%;
    .main-slides {
      position: relative;
      overflow: visible;
      margin: 0;
      width: 100%;
      .main-slides__container {
        margin: 0;
        overflow: visible;
        .main-slides__container__title {

        }
        .main-slide__lists__wrapper {
          width: 100%;
          overflow: visible;
        }
        .main-slide__lists {
          width: 100%;
          left: 0;
          display: block;
          height: 100%;
          .main-slide__item {
            display: block;
            margin: 0 auto;

          }
        }
      }
      .main-slides__navigation-btn {
        display: none;
      &:hover {
      }
      &.main-slides__prev-btn {
      }
      &.main-slides__next-btn {
      }
      }
    }
  }
}


</style>

<template>
  <section class="slides">
    <div class="sub-slides">
      <div class="sub-slides__container">
        <h2 class="sub-slides__container__title">Upcoming Movies</h2>
        <div class="sub-slide__lists__wrapper">
          <ul class="sub-slide__lists">
            <li
              class="sub-slide__item"
              v-for="(list, index) in data"
              :key="index"
              ref="slides"
            >
              <List :data="list" />
            </li>
          </ul>
        </div>
      </div>
      <FontAwesome
         class="sub-slides__navigation-btn slides__prev-btn"
         icon="angle-left"
         ref="prev"
         @click.prevent="onClickPrevBtn(4)"
      />
      <FontAwesome
        class="sub-slides__navigation-btn slides__next-btn"
        icon="angle-right"
        ref="next"
        @click.prevent="onClickNextBtn(-4)"
      />
    </div>
  </section>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import List from './List.vue'
import _ from 'lodash'

export default {
  components: {List},
  props: ['data'],
  computed: {
    ...mapState({
      upcoming: 'upcoming'
    })
  },


  methods: {
    onClickNextBtn: function(direction) {
      document.querySelector('.sub-slide__lists').classList.add('transition')
      document.querySelector('.sub-slide__lists').style.transform = `translateX(${direction * 170}px)`
      this.increaseIdx()
    },
  
    onClickPrevBtn: function(direction) {
      
      document.querySelector('.sub-slide__lists').classList.add('transition')
      document.querySelector('.sub-slide__lists').style.transform = `translateX(${direction * 170}px)`
      this.decreaseIdx()
    },

    increaseIdx:_.debounce(function() {
        this.$store.state.upcoming = this.$store.state.upcoming.concat(this.$store.state.upcoming.splice(0,4))
        document.querySelector('.sub-slide__lists').style.transform = `translateX(0px)`
        document.querySelector('.sub-slide__lists').classList.remove('transition')
      }, 800),

    decreaseIdx: _.debounce(function() {
        this.$store.state.upcoming = this.$store.state.upcoming.splice(this.$store.state.upcoming.length - 4, 4).concat(this.$store.state.upcoming)
        document.querySelector('.sub-slide__lists').style.transform = `translateX(0px)`
        document.querySelector('.sub-slide__lists').classList.remove('transition')
      }, 800)
  }
}


</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";


@media screen and (min-width: $desktop) {
  .slides {
    padding-top: 50px;
    padding-bottom: 50px;
    position: relative;
    width: 90%;
    height: 320px;
    .sub-slides {
      position: relative;
      overflow: hidden;
      margin-right: auto;
      width: 110%;
      .sub-slides__container {
        margin-left: 80px;
        margin-right: 80px;
        overflow: hidden;
        .sub-slides__container__title {
          color: #fff;
          font-size: 1.35rem;
          font-weight: 700;
          letter-spacing: .5px;
          padding-left: 10px;
          margin-bottom: .4rem;
        }
        .sub-slide__lists__wrapper{
          width: 100%;
          overflow: hidden;
        }
        .sub-slide__lists {
          width: 10000%;
          position: relative;
          left: -680px;
          .sub-slide__item {
            display: inline-block;
          }
        }
      }
      .sub-slides__navigation-btn {
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
        &.slides__prev-btn {
          left: 3rem;
        }
        &.slides__next-btn {
          right: 3rem;
        }
      }
    }
  }
}

@media screen and (max-width: $mobile) {
  .slides {
    width: 100%;
    height: 100%;
    .sub-slides {
      position: relative;
      overflow: visible;
      margin: 0;
      width: 100%;
      .sub-slides__container {
        margin-top: 2rem;
        overflow: visible;
        .sub-slides__container__title {
          color: #fff;
          font-size: 1.35rem;
          font-weight: 700;
          letter-spacing: .5px;
          padding-left: 2rem;
          height: 3rem;
        }
        .sub-slide__lists__wrapper {
          width: 100%;
          overflow: visible;
        }
        .sub-slide__lists {
          width: 100%;
          left: 0;
          display: block;
          height: 100%;
          .sub-slide__item {
            display: block;
            margin: 0 auto;
          }
        }
      }
      .sub-slides__navigation-btn {
        display: none;
      }
    }
  }
}

</style>

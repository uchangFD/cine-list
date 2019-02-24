<template>
  <div class="home__container">
    <MainSlide :data="mains" />
    <SubSlide :data="upcoming" />
  </div>
</template>

<script>
import MainSlide from './MainSlide.vue'
import SubSlide from './SubSlide.vue'

import {mapActions, mapState} from 'vuex'

export default {
  components:{
    MainSlide, SubSlide
  },

  computed: {
    ...mapState({
      mains: 'mains',
      upcoming: 'upcoming',
    })
  },

   watch: {
      '$route': {
        handler :'fetch',
        immediate: true
      }
    },

  

  methods: {
    ...mapActions([
      'FETCH_MAIN_SLIDE',
      'FETCH_SUB_SLIDE'
    ]),


    fetch: function() {
      this.FETCH_MAIN_SLIDE({options: 'SET_MAIN_SLIDES'})
      this.FETCH_SUB_SLIDE({options: 'SET_SUB_SLIDES'})
    }
  }
}
</script>

<style lang="scss">
@import "../assets/styles/variables.scss";


@media screen and (min-width: $desktop) {
  .home__container {
    width: calc(100% - 250px);
    min-height: 100%;
    margin-left: 250px;
    z-index: 0;
    background: $baseline-color;
  }
}

@media screen and (max-width: $mobile) {
  .home__container {
    width: 100%;
    margin: 0;
  }
}

</style>

<template>
  <div class="home__container">
    <MainSlide :data="popular" />
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
      popular: 'popular',
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
      'FETCH_SLIDE',
    ]),


    fetch: function() {
      this.FETCH_SLIDE({
        category: 'popular',
        options: 'SET_MAIN_SLIDES'
        })
      this.FETCH_SLIDE({
        category: 'upcoming',
        options: 'SET_SUB_SLIDES'
        })
    }
  }
}
</script>

<style lang="scss">
@import "../assets/styles/variables.scss";


@media screen and (min-width: $desktop) {
  .home__container {
    width: calc(100% - 225px);
    min-height: 100%;
    margin-left: 225px;
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

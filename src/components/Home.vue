<template>
  <div class="main__container">
    <div class="is-fullbleed">
      <div class="slides">
        <MainSlide :data="mains" />
      </div>
      <div class="slides">
        <SubSlide :data="rates" />
      </div>
    </div>
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

  data() {
    return {
      isMain: true
    }
  },

  computed: {
    ...mapState({
      mains: 'mains',
      rates: 'rates',
    })
  },

   watch: {
      '$route': {
        handler :'fetches',
        immediate: true
      }
    },

  methods: {
    ...mapActions([
      'FETCH_MAIN',
      'FETCH_RATED'
    ]),
    fetches: function() {
      this.FETCH_MAIN({
        id: 'trending', 
        pages: 1
      })
      this.FETCH_RATED({
        id: 'topRated', 
        pages: 1
      })
    }
  }
}

</script>


<style lang="scss">

.main__container {
  position: fixed;
  width: 100%;
  margin-left: 250px;
  min-height: 100%;
  z-index: 0;
  background: #292d3e;
}

.slides, .slides {
  margin-top: 100px;
  position: relative;
  width: calc(100% - 250px);
}

</style>


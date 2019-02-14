<template>
  <div>
    <Navbar /> 
    <Header />
    <div class="home__container">
      <MainSlide :data="mains" />
      <SubSlide :data="upcoming" />
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import Header from "./Header.vue";
import MainSlide from './MainSlide.vue'
import SubSlide from './SubSlide.vue'
import {mapActions, mapState} from 'vuex'


export default {
  components:{
     Navbar, Header, MainSlide, SubSlide
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


<style lang="scss" scoped>

@import "../assets/styles/variables.scss";

.home__container {
  width: calc(100% - 250px);
  min-height: 100%;
  margin-left: 250px;
  z-index: 0;
  background: $primary-color;
}
</style>


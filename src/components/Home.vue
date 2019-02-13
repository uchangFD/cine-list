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

  data() {
    return {
      isLoading: false
    }
  },

  computed: {
    ...mapState({
      mains: 'mains',
      upcoming: 'upcoming',
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
      'FETCH_MAIN_SLIDE',
      'FETCH_SUB_SLIDE'
    ]),


    fetches: function() {
      this.isLoading = true
      console.log("Loading")
      
      this.FETCH_MAIN_SLIDE({options: 'SET_MAIN_SLIDES'})
      this.FETCH_SUB_SLIDE({options: 'SET_SUB_SLIDES'})
        .finally(_ => {this.isLoading = false})
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


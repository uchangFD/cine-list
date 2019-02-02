<template>
  <div class="home__container">
    <div class="is-fullbleed">
      <MainSlide :data="mains" />
      <SubSlide :data="upcoming" />
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
      'FETCH_MAIN'
    ]),
    fetches: function() {
      this.FETCH_MAIN({
        id: 'trending',
        options: 'SET_MAIN'
      })
      this.FETCH_MAIN({
        id: 'upcoming',
        options: 'SET_UPCOMING'
      })
    }
  }
}

</script>


<style lang="scss" scoped>

@import "../assets/styles/variables.scss";

.home__container {
  position: fixed;
  width: 100%;
  margin-left: 250px;
  min-height: 100%;
  z-index: 0;
  background: $primary-color;
}
</style>


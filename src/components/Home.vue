<template>
  <div class="main__container">
    <div class="is-fullbleed">
      <div v-if="isMain">
        <div class="main__slides">
          <Slides :data="mains" />
        </div>
        <div class="main__slides">
          <Slides :data="rates" />
        </div>
      </div>
      <div v-else>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Slides from './Slides.vue'
import {mapActions, mapState} from 'vuex'


export default {
  components:{
    Slides
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


  created() {
    this.isMain = window.location.pathname === '/'
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

.main__slides {
  margin-top: 100px;
  position: relative;
  width: calc(100% - 250px);
}

</style>


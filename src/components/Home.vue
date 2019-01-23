<template>
  <div>
    
    <div v-for="(item, index) in main" :key="index">
      <!-- <img :src="`https://image.tmdb.org/t/p/w500${item.backdrop_path}`" :alt="`${item.original_title}`"> -->
      <span>{{item.title}}</span>
    </div>
    <hr>
    <div v-if="isMain">
      <div v-for="(item, index) in main" :key="index">
        <span>{{item.title}}</span>
      </div>
    </div>

    <div v-else>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  data() {
    return {
      pages: 1,
      isMain: true,
    }
  },

  computed: {
    ...mapState({
      main: 'main',
    })
  },

  watch: {
    '$route': {
      handler :'fetchData',
      immediate: true
    }
  },

  methods: {
    ...mapActions([
      'FETCH_MAIN'
    ]),

    fetchData() {
      this.loading = true
      this.isMain = window.location.pathname === '/'
      this.FETCH_MAIN(1).finally(_ =>{
        this.loading = false
      })
    }
  }
}


</script>

<style>

</style>


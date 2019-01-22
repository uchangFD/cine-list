<template>
  <div v-if="loading"></div>
  <div v-else>
    <div class="movie-wrapper">
      <ul>
        <li
          style="display: inline-block"
          v-for="(list, index) in movieLists"
          :key="index"
        >
          <List :data="list" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import List from './List.vue'

export default {
  components: {
    List
  },
  data() {
    return {
      loading: false,
      page: 1
    }
  },
  computed: {
    ...mapState({
      movieLists: 'movieLists',
      listPages: 'listPages'
    })
  },

  watch: {
    '$route': {
      handler :'fetchData',
      immediate: true,
    }
  },
  
  methods: {
    ...mapActions([
      'FETCH_LISTS'
    ]),

    fetchData() {
      this.loading = true
      this.FETCH_LISTS({
        id: this.$route.params.lid, 
        listPages: this.page
      }).finally(_ =>{
        this.loading = false
      })
    },

    scroll() {

    }
  }
}
</script>

<style>

</style>




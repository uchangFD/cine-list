<template>
  <div class="movie-wrapper">
    <ul>
      <li
        style="display: block"
        v-for="(list, index) in lists"
        :key="index"
      >
        <List :data="list"/>
      </li>
    </ul>
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
      page: 1
    }
  },
  computed: {
    ...mapState({
      lists: 'lists',
      listPages: 'listPages',
    })
  },

  watch: {
    '$route': {
      handler :'fetchData',
      immediate: true,
    },
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
    }
  }
}
</script>

<style>

</style>




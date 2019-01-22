<template>
  <div>
    <h1>{{movieItems.id}}</h1>
    <pre>
      {{movieItems}}
    </pre>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  props:['data'],

  data() {
    return {
      mid: 0,
      loading: false
    }
  },

  computed: {
    ...mapState({
      movieItems: 'movieItems',
    })
  },

  watch: {
    '$route': {
      handler :'fetchData',
      immediate: true
    },
  },
  
  methods: {
    ...mapActions([
      'FETCH_MOVIE'
    ]),

    fetchData() {
      this.loading = true
      this.FETCH_MOVIE({
        id: this.$route.params.mid
      }).finally(_ =>{
        this.loading = false
      })
    }
  }
}
</script>

<style>

</style>

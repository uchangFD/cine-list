<template>
  <div>
    <hr />
    <pre>{{lists}}</pre>
    <pre>{{casts}}</pre>
  </div>
</template>

<script>
import Modal from './Modal.vue'
import { mapState, mapActions } from 'vuex'

export default {
  props:['data'],
  components: {
    Modal
  },
  data() {
    return {
      mid: 0,
      loading: false
    }
  },

  computed: {
    ...mapState({
      lists: 'lists',
      casts: 'casts'
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
      'FETCH_MOVIE',
      'FETCH_CREW'
    ]),

    fetchData() {
      this.loading = true

      

      this.FETCH_MOVIE({id: this.$route.params.mid})
      .then(()=>{this.FETCH_CREW({id: this.$route.params.mid})})
      .finally(_ =>{this.loading = false})
    }
  }
}
</script>

<style>

</style>

<template>
  <div>
    <hr />
    <pre>{{lists}}</pre>
    <pre>{{casts}}</pre>
  </div>
</template>

<script>
// import Modal from './Modal.vue'
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
      'FETCH_ITEM',
      'FETCH_CAST'
    ]),

    fetchData() {
      
      this.loading = true
      
      this.FETCH_ITEM({id: this.$route.params.mid})
        .then(()=>{
          this.FETCH_CAST({id: this.$route.params.mid})
        })
        .finally(_ =>{
          this.loading = false
        })
    }
  }
}
</script>

<style>

</style>

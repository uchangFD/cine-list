<template>
  <div 
    v-if="isLoading"
    style="margin-left: 250px;"
  >
    <p>IS LOADING.....</p>
  </div>
  <div 
    v-else
    style="margin-left: 250px;"
  >
    <pre>{{person}}</pre>
    <hr>
    <pre>{{credits}}</pre>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {

  data() {
    return {
      isLoading: false,
      personId : ''
    }
  },

  computed: {
    ...mapState({
      person: 'person',
      credits: 'credits'
    })
  },



  watch: {
    '$route': {
      handler :'fetch',
      immediate: true
    },
  },

  methods: {
    ...mapActions([
      'FETCH_PERSON',
      'FETCH_PERSON_CREDITS'
    ]),

    fetch: function() {
      this.isLoading = true
      this.FETCH_PERSON({id: this.$route.params.personId})
      this.FETCH_PERSON_CREDITS({id: this.$route.params.personId})
        .finally(_=>{
          this.isLoading = false
        })
    }
  }
}
</script>

<style lang="scss">
pre {
  letter-spacing: 2px;
}

</style>

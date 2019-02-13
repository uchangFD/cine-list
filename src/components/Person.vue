<template>
  <div class="person__container">
    <div v-if="isLoading">
      <Loader />
    </div>
    <div 
      v-else
      class="person__wrapper"
    >
      <pre>{{person}}</pre>
      <hr>
      <pre>{{credits}}</pre>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Loader from './Loader.vue'
export default {

  components: {
    Loader
  },

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
@import "../assets/styles/variables.scss";

.person__container {
  margin-left: 250px;
  background: $primary-color;
  position: relative;
  min-height: 100%;
}

pre {
  color: #fff;
  letter-spacing: 1.4px;
  font-weight: 300;
}
</style>

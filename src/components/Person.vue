<template>
  <div class="person__container">
    <div v-if="isLoading">
      <Loader />
    </div>
    <div 
      v-else
      class="person__wrapper"
    >

      <div class="person__info">
        <h1 class="person__info__name">{{person.name}}</h1>
        <img :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2/${person.profile_path}`" alt="">
        <p class="person__info__bio">{{person.biography}}</p>
      </div>
      <hr>
      <div class="person__credits">
        <div class="person__credits__cast">{{credits.cast}}</div>
      </div>
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
  .person__wrapper {
    color: #fff;
    .person__info {
      .person__info__name {

      }
    }
    .person__credits {
      .person__credits__cast {

      }
    }
  }
}
</style>

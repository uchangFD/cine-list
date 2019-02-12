<template>
  <div 
    v-if="isLoading"
    style="margin-left: 250px;"
  >
  <div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
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
.lds-grid {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
}
.lds-grid div {
  position: absolute;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #faa;
  animation: lds-grid 1.2s linear infinite;
}
.lds-grid div:nth-child(1) {
  top: 6px;
  left: 6px;
  animation-delay: 0s;
}
.lds-grid div:nth-child(2) {
  top: 6px;
  left: 26px;
  animation-delay: -0.4s;
}
.lds-grid div:nth-child(3) {
  top: 6px;
  left: 45px;
  animation-delay: -0.8s;
}
.lds-grid div:nth-child(4) {
  top: 26px;
  left: 6px;
  animation-delay: -0.4s;
}
.lds-grid div:nth-child(5) {
  top: 26px;
  left: 26px;
  animation-delay: -0.8s;
}
.lds-grid div:nth-child(6) {
  top: 26px;
  left: 45px;
  animation-delay: -1.2s;
}
.lds-grid div:nth-child(7) {
  top: 45px;
  left: 6px;
  animation-delay: -0.8s;
}
.lds-grid div:nth-child(8) {
  top: 45px;
  left: 26px;
  animation-delay: -1.2s;
}
.lds-grid div:nth-child(9) {
  top: 45px;
  left: 45px;
  animation-delay: -1.6s;
}
@keyframes lds-grid {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}


</style>

<template>
<div>
  <div v-for="(item, index) in browser" :key="index">{{item.name}}</div>
</div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {

  watch: {
    '$route': {
      handler :'fetch',
      immediate: true
    }
  },

    computed: {
    ...mapState({
      browser: 'browser'
    })
  },

  methods: {
    ...mapActions([
      'FETCH_BROWSER'
    ]),

    fetch: function() {
      this.FETCH_BROWSER({
        item: this.$route.params.browserId
      })
    }
  }
}
</script>

<style>

</style>

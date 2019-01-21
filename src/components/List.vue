<template>

  <div v-if="loading"></div>
  <div v-else>
    list id: {{listId}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      listId: 0,
      loading: false
    }
  },

  watch: {
    '$route': {
      handler :'fetchData',
      immediate: true
    }
  },
  
  methods: {
    fetchData() {
      this.loading = true
      setTimeout(() => {
        this.listId = this.$route.params.listId
        this.loading = false
      }, 500);
    }
  }
}
</script>

<style>

</style>

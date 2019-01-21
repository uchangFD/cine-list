<template>
  <div>
    Home
    <div>
      List
      <div v-if="loading">loading list...</div>
      <div v-else>
        <ul>
          <li>
            <router-link to="/list/1">List 1</router-link>
          </li>
          <li>
            <router-link to="/list/2">List 2</router-link>
          </li>
        </ul>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      apiRes: ''
    }
  },
  created(){
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.loading = true
    }
  }

}
</script>

<style>

</style>

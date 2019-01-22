<template>
  <div>
    Home
    <div>
      Categories List
      <div>
        <router-link to="/lists/trending">Trending</router-link>
        <router-link to="/lists/scifi">Sci-Fi</router-link>
        <router-link to="/lists/pitt">Brad Pitt</router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default { 

}

</script>

<style>

</style>


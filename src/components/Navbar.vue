<template>
  <nav class="navbar-wrapper">
    <div class="nav__home">
      <router-link to="/">Home</router-link>
    </div>
    <nav 
      class="nav__categories"
      @mouseover="isMouseOn = true"
      @mouseout="isMouseOn = false"
    >
      <span class="nav__categories-title">Categories</span>
      <div
        v-if="isMouseOn"
        class="nav__categories-list"
      >
        <router-link to="/lists/trending">| Trending</router-link>
        <router-link to="/lists/scifi">| Sci-Fi</router-link>
        <router-link to="/lists/pitt">| Brad Pitt</router-link>
      </div>
    </nav>
    <div class="nav__login">
      <router-link to="/login">Login</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  
  data() {
    return {
      isMouseOn: false
    }
  },

  watch: {
    isMouseOn: data => data
  }
}
</script>

<style>
.navbar-wrapper {
  width: 100%;
  background: #faf;
}

.nav__home {

}
.nav__categories {
  display: inline-block;
  height: 50px;
  padding: .5rem;
  background: #aff;
}

.nav__categories-title {
  cursor: pointer;
}
</style>

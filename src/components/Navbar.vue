<template>
  <header class="navbar-wrapper header">
    <div class="navbar-container">
      <div class="nav__logo">
        <router-link 
          to="/"
          aria-label="CINE-LIST"
          class="logo"
        >LOGO</router-link>
      </div>
      <ul class="nav__categories">
        <li class="nav__categories__tab">
          <router-link class="categories-list" to="/lists/trending">Trend</router-link>
        </li>
        <li class="nav__categories__tab">
          <router-link class="categories-list" to="/lists/scifi">Sci</router-link>
        </li>
        <li class="nav__categories__tab">
          <router-link class="categories-list" to="/lists/pitt">Pitt</router-link>
        </li>
      </ul>

      <!-- <div class="nav__search">
        <input type="text" class="search-input" title="Search" placeholder="영화를 검색하세요">
        <button class="search-btn">검색</button>
      </div> -->
    
      <div class="nav__login">
        <router-link class="nav__login-btn" to="/login">Login</router-link>
      </div>
    </div>
  </header>
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

<style lang="scss">
.navbar-wrapper {
  // display: flex;
  height: 70px;
}

.nav__logo, .nav__categories, .nav__search, .nav__login {
  flex: none;
}

.nav__login {
  margin-left: auto;
}

.nav__logo, .nav__login {
  padding: 20px 30px;
  background-color: rgba(0, 0, 0, 0.4);
}

.nav__categories {
  display: flex;
  padding: 20px 30px;
  justify-content: space-around;
}

.nav__search {
  display: flex;
  padding: .8rem 0;
  input  {
    flex: 1;
    height: 1.5rem;
    background-color: white;
    }
}

.search-btn {
  width: 50px;
  border: 0;
  background-color: #26a93a;
}

</style>

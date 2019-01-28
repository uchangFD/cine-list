<template>
  <div class="navbar header">
    <div class="navbar-container">
      <div class="nav__logo">
        <router-link 
          to="/"
          aria-label="CINE-LIST"
          class="logo"
        >
        CINE LIST
        </router-link>
      </div>
      <ul class="nav__categories">
        <li class="nav__categories-tab">
          <router-link class="categories-tab__link" to="/lists/trending">Trend</router-link>
        </li>
        <li class="nav__categories-tab">
          <router-link class="categories-tab__link" to="/lists/scifi">Sci</router-link>
        </li>
        <li class="nav__categories-tab">
          <router-link class="categories-tab__link" to="/lists/pitt">Pitt</router-link>
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
  </div>
</template>

<script>


export default {
  name: 'TabRouter',

  data() {
    return {
      isMouseOn: false
    }
  },

  created() {
  },

  watch: {
    isMouseOn: data => data
  }
}
</script>

<style lang="scss">


.navbar {
  background-color: transparent;
  height: 70px;
}

.navbar-container {
  display: flex;
  position: relative;
  top: 0;
  z-index: 1;

  .nav__logo, .nav__categories, .nav__search, .nav__login {
    flex: none;
  }
  .nav__logo, .nav__login {
    padding: 20px 30px;
    background-color: rgba(0, 0, 0, 0.2);
  }

  .nav__logo {
    .logo {
      color: #fff;
      font-size: 1rem;
    }
  }

  .nav__login {
    margin-left: auto;
    .nav__login-btn {
      color: #fff;
      font-size: 1rem;
    }
  }


  .nav__categories {
    display: flex;
    padding: 20px 30px;
    width: 300px;
    justify-content: space-around;
    .nav__categories-tab {
      .categories-tab__link {
        font-size: 1rem;
        color: #fff;
      }
    }
  }
}


</style>

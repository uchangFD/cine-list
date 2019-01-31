<template>
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
        <router-link class="categories-tab__link" to="/categories/trending">Trend</router-link>
      </li>
      <li class="nav__categories-tab">
        <router-link class="categories-tab__link" to="/categories/scifi">Sci</router-link>
      </li>
      <li class="nav__categories-tab">
        <router-link class="categories-tab__link" to="/categories/pitt">Pitt</router-link>
      </li>
    </ul>
    <!-- <div class="nav__search">
      <input type="text" class="search-input" title="Search" placeholder="영화를 검색하세요">
      <button class="search-btn">검색</button>
    </div> -->
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
.navbar-container {
  position: fixed;
  width: 250px;
  height: 100%;
  margin: 0;
  padding: 0;
  z-index: 1;
  overflow: auto;
  background: #292d3e;
  opacity: 0.98;

  .nav__logo, .nav__categories, .nav__search, .nav__login {
    flex: none;
  }

  .nav__logo, .nav__login {
    padding: 20px 30px;
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
    padding: 20px 30px;
    justify-content: space-around;
    .nav__categories-tab {
      padding: 20px;
      .categories-tab__link {
        font-size: 1rem;
        color: #fff;
      }
    }
  }
}


</style>

<template>
  <section class="navbar">
    <div class="navbar__logo">
        <router-link 
          to="/"
          aria-label="CINE-LIST"
          class="logo-btn"
        >
        <span class="logo__title">CINE LIST</span>
        </router-link>
    </div>
    <div class="navbar__browser">
      <h2 class="navbar__browser__title">BROWSE</h2>
      <ul class="navbar__categories__list">
        <li class="navbar__categories__item">
          <router-link 
            to="/categories/trending"
            class="categories__item__link" 
          >
            Trend
          </router-link>
        </li>
        <li class="navbar__categories__item">
          <router-link 
            to="/categories/scifi"
            class="categories__item__link"
          >
            Sci
          </router-link>
        </li>
        <li class="navbar__categories__item">
          <router-link 
            to="/categories/pitt"
            class="categories__item__link"
          >
            Pitt
          </router-link>
        </li>
      </ul>
    </div>

    <div class="navbar__categories">
      <h2 class="navbar__categories__title">CATEGORIES</h2>
      <ul class="navbar__categories__list">
        <li class="navbar__categories__item">
          <router-link class="categories__item__link" to="/categories/trending">Trend</router-link>
        </li>
        <li class="navbar__categories__item">
          <router-link class="categories__item__link" to="/categories/scifi">Sci</router-link>
        </li>
        <li class="navbar__categories__item">
          <router-link class="categories__item__link" to="/categories/pitt">Pitt</router-link>
        </li>
      </ul>
    </div>
  </section>
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
@import "../assets/styles/variables.scss";

.navbar {
  position: fixed;
  width: 250px;
  height: 100%;
  margin: 0;
  padding: 0;
  z-index: 1;
  overflow: auto;
  background: $secondary-color;
  opacity: 0.98;

  .navbar__logo {
    background: $secondary-color;
    text-align: center;
    .logo-btn {
      .logo__title {
        color: #fff;
        font-size: 1rem;
        height: 100px;
        line-height: 100px;
        font-weight: 700;
        
        font-size: 2rem;
      }
    }
  }


  .navbar__browser {
    .navbar__browser__title {
      color: #777;
    }
  }

  .navbar__categories {
    justify-content: space-around;
    .navbar__categories__title {
      color: #777;
    }
    .navbar__categories__item {
      .categories__item__link {
        font-size: 1rem;
        color: #fff;
      }
    }
  }


  .navbar__logo, .navbar__categories {
    flex: none;
  }
}


</style>

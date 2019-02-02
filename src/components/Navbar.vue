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
      <ul class="navbar__browser__list">
        <li class="navbar__browser__item">
          <router-link 
            to="/browser/celebrities"
            class="browser__item__link" 
          >
            CELEBRITIES
          </router-link>
        </li>
        <li class="navbar__browser__item">
          <router-link 
            to="/browser/"
            class="browser__item__link"
          >
          </router-link>
        </li>
      </ul>
    </div>

    <div class="navbar__categories">
      <h2 class="navbar__categories__title">CATEGORIES</h2>
      <ul class="navbar__categories__list">
        <li
          v-for="(item, index) in genres" :key="index" 
          class="navbar__categories__item"
        >
          <router-link 
            class="categories__item__link" 
            :to="`/categories/${item.name.toLowerCase()}`"
          >
            {{item.name}}
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>

import {mapActions, mapState} from 'vuex'

export default {  
  data() {
    return {

    }
  },

  created() {
  },

  computed: {
    ...mapState({
      genres: 'genres'
    })
  },


  watch: {
    '$route': {
      handler :'fetch',
      immediate: true,
    }
  },

  methods: {
    ...mapActions([
      'FETCH_GENRES'
    ]),

    fetch: function() {
      this.FETCH_GENRES()
    }  
  },

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
  overflow-y:unset;
  background: $secondary-color;
  opacity: 0.98;


  .navbar__logo {
    background: $secondary-color;
    text-align: center;
    .logo-btn {
      .logo__title {
        color: #aaa;
        font-size: 1rem;
        height: 100px;
        line-height: 100px;
        font-weight: 700;
        font-size: 2rem;
      }
    }
  }


  .navbar__browser {
    justify-content: space-around;
    margin: 2.5rem auto;
    padding-left: 2rem;
    .navbar__browser__title {
      letter-spacing: 0.2rem;
      color: #666;
      font-size: 0.9rem;
    }
    .navbar__browser__list {
      margin-top: 0.4rem;
      .navbar__browser__item{
        margin-top: 0.6rem;
        .browser__item__link {
          font-size: 1rem;
          letter-spacing: 0.1rem;
          color: #aaa;
        }
      }
    }

  }

  .navbar__categories {
    justify-content: space-around;
    margin: 2.5rem auto;
    .navbar__categories__title {
      letter-spacing: 0.2rem;
      color: #666;
      font-size: 0.8rem;
      padding-bottom: 0.6rem;
      padding-left: 2rem;
    }
    .navbar__categories__list {
      .navbar__categories__item {
        padding-top: 1rem;
        padding-left: 2rem;
        opacity: 0.6;
        &:hover {
          opacity: 1;
        }
        .categories__item__link {
          font-size: .85rem;
          letter-spacing: 0.1rem;
          color: #aaa;
        }
      }
    }
  }


  .navbar__logo, .navbar__categories {
    flex: none;
  }
}


</style>

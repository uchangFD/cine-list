<template>
  <section class="navbar">
    <div class="navbar__logo">
      <router-link 
        to="/home"
        aria-label="CINE-LIST"
        class="logo-btn"
      >
        <span class="logo__title">CINE LIST</span>
      </router-link>
    </div>

    <NavbarBrowser :list="browsers" />
    
    <div class="navbar__categories">
      <h2 class="navbar__categories__title">CATEGORIES</h2>
      <ul class="navbar__categories__list">
        <li
          v-for="(item, index) in genres" :key="index" 
          class="navbar__categories__item"
          :class="{'active': selected === item.name.toLowerCase()}"
        >
          <router-link 
            class="categories__item__link" 
            :to="`/categories/${item.name.toLowerCase()}/1`"
          >
            <span class="categories__item__link-text">
              {{item.name}}
            </span>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>

import NavbarBrowser from './NavbarBrowser.vue'
import {mapActions, mapState} from 'vuex'

export default {

  components: {NavbarBrowser},
  data() {
    return {
      browsers: ['FAVORITES', 'SAVED'],
      selected: ''
    }
  },

  created() {
    this.selected = this.$route.params.categoriesId
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
    },

    '$route.params.categoriesId' : 'getSelectedId'

  },

  methods: {
    ...mapActions([
      'FETCH_GENRES'
    ]),

    fetch: function() {
      this.FETCH_GENRES()
    },

    getSelectedId: function() {
      this.selected = this.$route.params.categoriesId
    }
  },

}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.navbar {
  position: fixed;
  width: 250px;
  height: 100%;
  margin: 0;
  padding: 0;
  z-index: 1;
  overflow-y:unset;
  background: $baseline-secondary-color;
  opacity: 0.98;


  .navbar__logo {
    background: $baseline-secondary-color;
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
        margin-top: 1rem;
        margin-left: 2rem;
        opacity: 0.6;
        &.active {
          opacity: 1;
          .categories__item__link {
            .categories__item__link-text {
              color: #66a6ff;
            }
          }
        }
        &:hover {
          opacity: 1;
        }
        .categories__item__link {
          .categories__item__link-text{
            color: #aaa;
            letter-spacing: 0.1rem;
            font-size: .85rem;
          }


        }
      }
    }
  }


  .navbar__logo, .navbar__categories {
    flex: none;
  }
}


</style>

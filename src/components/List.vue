<template>
  <div
    class="content-list"
    @mouseover.prevent="onHover"
    @mouseleave.prevent="onLeave"
  >
    <div class="content-list__poster-wrapper">
      <img 
        class="content-list__poster-image"
        :src="`https://image.tmdb.org/t/p/w500${data.poster_path}`"  
        :alt="`${data.original_title}`"
      />
      <span class="content-list__rate">{{data.vote_average}}</span>
    </div>
    <p class="content-list__title">{{data.title}}</p>
    <div
      v-if="isHovered"
      class="content-list-detail__wrapper"
    > 
      <div 
        v-for="(genre, index) in genres" 
        :key="index"
      >
         <p 
           v-if="genre.id === data.genre_ids[0]"
           class="content-list-detail__info"
         >
           <span>#{{genre.name}}</span>
           <span>{{`${year}`}}</span>
         </p>
      </div>
      <router-link :to="`/content/${data.id}`">
        <button class="content-list-detail__btn">Details</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import {mapActions, mapState} from 'vuex'

export default {
  props:[
    'data'
  ],
  data() {
    return {
      isHovered: false
    }
  },

  computed: {
    ...mapState({
      genres: 'genres'
    }),

    year: function() {      
      return this.getReleasedYear(this.data.release_date) 
    }
  },

  methods: {
    onHover: function() {
      this.$el.classList.add('content-list-detail')
      this.isHovered = true   
    },
    onLeave: function() {
      this.$el.classList.remove('content-list-detail')
      this.isHovered = false
    },
    getReleasedYear: function(data) {
      return data.slice(0, 4)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.content-list {
  position: relative;
  width: 150px;
  opacity: 0.8;
  padding: 10px;
  transition: 300ms;
  &:hover {
    background: $baseline-shadow-color;
    opacity: 1;
    border-radius: 6px;
  }
  &.content-list-detail {
  width: 180px;
  height: 320px;
}
  .content-list__poster-wrapper {
    position: relative;
    .content-list__poster-image {
        display: block;
        margin: 0 auto;
        object-fit: cover;
        width: 150px;
        height: 225px;
        border-radius: 4px;
      }
    .content-list__rate {
      position: absolute;
      top: 10px;
      left: 10px;
      border-radius: 4px;
      background: rgba(33, 37, 41, 0.9);
      color: #fff;
      padding: .25rem .5rem;
    }
  }

  
  .content-list__title {
    color: #fff;
    font-weight: 700;
    font-size: 0.85rem;
    padding-top: 10px;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
  }
}


.content-list-detail__wrapper {
  position: absolute;
  width: 180px;
  height: 65px;
  margin-top: .5rem;
  .content-list-detail__info {
    text-align: center;
    span {
      font-size: 0.8rem;
      color: #aaa;
      font-weight: 300;
      letter-spacing: 1px;
      padding: .05rem .1rem;
    }
  }
  .content-list-detail__btn {
    display: block;
    margin-top: .7rem;
    margin-left: auto;
    margin-right: auto;
    width: 120px;
    height: 30px;
    border-radius: 45px;
    bottom: 0;
    font-size: 0.9rem;
    letter-spacing: 0.7px;
    color: #fff;
    text-shadow: 0 1px 2px #ced4da;
    cursor: pointer;
    background-image: $secondary-gradient-color;
    background-size: 200% 100%;
    transition: all .4s ease-in-out;
    &:hover {
      background-position: 100% 0;
      transition: all .4s ease-in-out;
    }
    &:focus {
      outline: none;
    }
  }
}

</style>

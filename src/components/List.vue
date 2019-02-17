<template>
  <div
    class="content"
    @mouseover.prevent="onHover"
    @mouseleave.prevent="onLeave"
  >
    <img 
      class="content__poster-image"
      :src="`https://image.tmdb.org/t/p/w500${data.poster_path}`"  
      :alt="`${data.original_title}`"
    />
    <span class="content__rate">{{data.vote_average}}</span>
    <p class="content__title">{{data.title}}</p>
    <div
      v-if="isHovered"
      class="content-detail__wrapper"
    > 
      <div 
        v-for="(genre, index) in genres" 
        :key="index"
      >
         <p 
           v-if="genre.id === data.genre_ids[0]"
           class="content-detail__info"
         >
           <span>#{{genre.name}}</span>
           <span>{{`${year}`}}</span>
         </p>
      </div>
      <router-link :to="`/content/${data.id}`">
        <button class="content-detail__btn">Details</button>
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
      this.$el.classList.add('content-detail')
      this.isHovered = true   
    },
    onLeave: function() {
      this.$el.classList.remove('content-detail')
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

.content {
  position: relative;
  width: 150px;
  opacity: 0.8;
  padding: 10px;
  transition: 300ms;
  &:hover {
    background: $baseline-shadow-color;
    opacity: 1;
    border-radius: 4px;
  }
  &.content-detail {
  width: 180px;
  height: 320px;
}
  .content__poster-image {
      position: relative;
      display: block;
      margin: 0 auto;
      object-fit: cover;
      width: 150px;
      height: 225px;
      border-radius: 4px;
    }
  .content__rate {
    position: absolute;
    top: 22px;
    right: 22px;
    border-radius: 4px;
    background: rgba(33, 37, 41, 0.9);
    color: #fff;
    padding: .25rem .5rem;
  }
  
  .content__title {
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


.content-detail__wrapper {
  position: absolute;
  width: 180px;
  height: 65px;
  margin-top: .5rem;
  .content-detail__info {
    text-align: center;
    span {
      font-size: 0.8rem;
      color: #aaa;
      font-weight: 300;
      letter-spacing: 1px;
      padding: .05rem .1rem;
    }
  }
  .content-detail__btn {
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
    background-image: $gradient-color;
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

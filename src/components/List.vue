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
      <router-link class="content-list-detail__btn-link" :to="`/content/${data.id}`">
        <PrimaryButton class="content-list-detail__btn" :name="'Details'"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import {mapActions, mapState} from 'vuex'
import PrimaryButton from './PrimaryButton.vue'

export default {
  components: {PrimaryButton},

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
      if(document.querySelector('body').offsetWidth > 414) {
        this.$el.classList.add('content-list-detail')
        this.isHovered = true
      }
    },

    onLeave: function() {
      if(document.querySelector('body').offsetWidth > 414) {
        this.$el.classList.remove('content-list-detail')
        this.isHovered = false
      }
    },

    getReleasedYear: function(data) {
      return data.slice(0, 4)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";
@media screen and (min-width: $desktop) {
.content-list {
    position: relative;
    width: 150px;
    opacity: 0.8;
    padding: 10px;
    transition: 300ms;
    background-image: none;
    &:hover {
      background: $baseline-shadow-color;
      opacity: 1;
      border-radius: 8px;
      height: 320px;
    }
    &.content-list-detail {
    width: 180px;
  }
    .content-list__poster-wrapper {
      position: relative;
      width: 150px;
      margin: 0 auto;
      .content-list__poster-image {
        display: block;
        object-fit: cover;
        width: 150px;
        height: 225px;
        border-radius: 4px;
      }
      .content-list__rate {
        position: absolute;
        top: 10px;
        right: 10px;
        border-radius: 12.5px;
        background: rgba(33, 37, 41, 0.7);
        color: #fff;
        width: 45px;
        height: 25px;
        line-height: 25px;
        text-align: center;
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
    height: 80px;
    margin-top: .5rem;
    display: block;
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
    .content-list-detail__btn-link {
      display: block;
      width: 120px;
      margin: 0 auto;
      .content-list-detail__btn {
      }
    }
  }
}


@media screen and (max-width: $mobile) {
  .content-list {
    &:hover {
    }
    &.content-list-detail {

    }
    .content-list__poster-wrapper {
      .content-list__poster-image {
      }
      .content-list__rate {
      }
    }
    .content-list__title {
    }
  }
  .content-list-detail__wrapper {
    .content-list-detail__info {
      span {
      }
    }
    .content-list-detail__btn-link {
      .content-list-detail__btn {
      }
    }
  }
}

</style>
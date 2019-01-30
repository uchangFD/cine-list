<template>
  <div class="carousel__container">

    <ul class="carousel__list">
      <li 
        v-for="(item, index) in data" 
        :key="index"
        ref="slides"
        class="carousel__items"
        :class="{active: index === sIdx}"
      >
        <div 
          class="carousel__item__container"
        >
          <img 
            class="carousel__backdrop-image"
            :src="`https://image.tmdb.org/t/p/w1280${item.backdrop_path}`"
            :alt="`${item.original_title}`"
          />
          <p class="carousel__title">
            {{item.title}}
          </p>
        </div>
      </li>
    </ul>
    
    <FontAwesome
      class="carousel__btn prev-btn"
      icon="angle-left"
      ref="prev"
      @click.prevent="decreaseIdx"
    ></FontAwesome>
    <FontAwesome
      class="carousel__btn next-btn"
      icon="angle-right"
      ref="next"
      @click.prevent="increaseIdx"
    ></FontAwesome>
  </div>
</template>

<script>

import _ from 'lodash'

export default {

  
  props: ['data'],

  data() {
    return {
      sIdx: 0
    }
  },

  updated() {
    return this.sIdx = this.sIdx % this.data.length
  },

  methods: {

    increaseIdx: _.debounce(function() {
        if (this.sIdx > this.data.length) this.sIdx = 0; 
        this.sIdx++
      }, 300),

    decreaseIdx: _.debounce(function() {
      if (this.sIdx <= 0) this.sIdx = this.data.length
        this.sIdx--
      }, 300)
  }
}
</script>



<style lang="scss">
.carousel__container {
  position: relative;
  padding-top: 40%;
  background: #191919;
  height: auto;
  overflow: hidden;
}


.carousel__list {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

.carousel__items {
  display: block;
  opacity: 0;
  transition: all 300ms ease-in-out;
  position: relative;
}

.carousel__item__container {
  position: absolute;
  width: 100%;
  top: 0;
}

.carousel__backdrop-image {
  width: 100%;
  height: auto;
}

.carousel__title {
  position: absolute;
  bottom: 40%;
  left: 20px;
  color: #fff;

}


.carousel__btn {
  position: absolute;
  top: 45%;
  font-size: 4rem;
  opacity: 0.5;
  color: #e2e4df;
  cursor: pointer;
  height: 100px;
  transition: 0.3s;
  &:hover {
    opacity: 1;
    color: #e2e4df;
  }
  &.prev-btn {
    left: 5vw;
  }
  &.next-btn {
    right: 5vw;
  }
}

.active {
  opacity: 1;
  display: block;
}

</style>
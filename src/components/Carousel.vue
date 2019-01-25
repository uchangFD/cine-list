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
        <div class="carousel__item__container">
          <img 
            class="carousel__backdrop-image"
            :src="`https://image.tmdb.org/t/p/w1280${item.backdrop_path}`" 
            :alt="`${item.original_title}`"
          />
          <p class="carousel__title">
          </p>
        </div>
      </li>
    </ul>

    <button
      class="carousel__btn prev-btn"
      ref="prev"
      @click.prevent="decreaseIdx"
    >prev</button>

    <button 
      class="carousel__btn next-btn"
      ref="next"
      @click.prevent="increaseIdx"
    >next</button>

  </div>
</template>

<script>
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

    increaseIdx(el) {
      if (this.sIdx > this.data.length) this.sIdx = 0
      this.sIdx++
    },

    decreaseIdx() {
      if (this.sIdx <= 0) this.sIdx = this.data.length
      this.sIdx--
    },


     onClickSlideBtn(callback, delay) {
      var timer = null
      return function() {
        var context = this
        var arg = arguments
        clearTimeout(timer)
        
        timer = setTimeout(() => {
          callback.apply(context, arg)
        }, delay);
      }
    }
  }
}
</script>



<style lang="scss">
.carousel__container {
  position: relative;
  padding: 28%;
  background: #191919;;
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
  transition: all 500ms ease-in-out
}

.carousel__item__container {
  position: absolute;
  width: 100%;
  top: 0;
  right: 0;
}

.carousel__backdrop-image {
  width: 100%;
  height: auto;
}

.carousel__title {
  top: 10px
}


.carousel__btn {
  position: absolute;
  top: 0;
  width: 80px;
  height: 80px;
  &.prev-btn {
    left: 30px;
  }
  &.next-btn {
    right: 30px;
  }
}

.active {
  opacity: 1;
  display: block;
}

</style>
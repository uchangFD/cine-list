<template>
  <div class="carousel__container">

    <ul class="carousel__list">
      <li 
        v-for="(item, index) in data" 
        :key="index"
        ref="slides"
        class="carousel__item"
        :class="{active: index === sIdx}"
      >
        <img 
          class="carousel__backdrop-image"
          :src="`https://image.tmdb.org/t/p/w1280${item.backdrop_path}`" 
          :alt="`${item.original_title}`"
        />
        <p class="carousel__title">
        </p>
      </li>
    </ul>

    <button
      class="carousel__btn prev-btn"
      @click.prevent="onClickBtn"
    >prev</button>

    <button 
      class="carousel__btn next-btn"
      @click.prevent="onClickBtn"
    >next</button>

  </div>
</template>

<script>
export default {
  props: ['data'],
  data() {
    return {
      sIdx: 0,
      mainSlides: []
    }
  },

  updated() {
    return this.sIdx = this.sIdx % this.data.length
  },
  
  methods: {
    onClickBtn(el) {      
      if(this.sIdx <= 0) this.sIdx = this.data.length
      if (el.target.classList.contains('next-btn')) return this.sIdx++;
      return this.sIdx--
    }
  }
}
</script>



<style lang="scss">
.carousel__container {
  position: relative;
  height: auto;
  overflow: hidden;
}


.carousel__item {
  display: none;
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
  top: 40%;
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
  display: block;
}


</style>

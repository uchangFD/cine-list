<template>
  <div class="carousel__container">
    <ul class="carousel__list">
      <li 
        v-for="(item, index) in data" 
        ref="sIdx"
        :key="index"
        class="carousel__item"
        :class="{active: index === sIdx ? isActive : ''}"
      >
        <img 
          class="carousel__backdrop-image"
          :src="`https://image.tmdb.org/t/p/w1280${item.backdrop_path}`" 
          :alt="`${item.original_title}`"
        />
        <p class="carousel__title">
          {{item.title}}
          {{index % data.length}}
        </p>
      </li>
    </ul>
    <button
      class="carousel__btn prev-btn"
      @click.prevent="onClickBtn"
    >
      prev
    </button>
    <button 
      class="carousel__btn next-btn"
      @click.prevent="onClickBtn"
    >
      next
    </button>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  props: [
    'data'
  ],
  data() {
    return {
      isActive: true
    }
  },
  computed: {
    ...mapState({
      sIdx: 'sIdx',
    })
  },

  updated() {
    this.$refs.sIdx.forEach(el => {
      this.$store.state.sIdx = this.$store.state.sIdx % this.$refs.sIdx.length
    })
  },

  methods: {
    onClickBtn(el) {
      const {$store, $refs} = this
      if($store.state.sIdx <= 0) $store.state.sIdx = $refs.sIdx.length
      if (el.target.classList.contains('next-btn')) return $store.state.sIdx++;
      return $store.state.sIdx--
    }
  }
}
</script>

<style>

</style>

<template>
<div>
  <div class="content">
    <router-link :to="`/content/${data.id}`">
      <img 
        class="poster-image"
        :src="`https://image.tmdb.org/t/p/w500${data.poster_path}`"  
        :alt="`${data.original_title}`"
      >
    </router-link>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props:[
    'data', 
    'lid'
  ],

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

<style>
.poster-image {
  object-fit: cover;
  width: 150px;
  height: 225px;

}
.content {
  width: 150px;
  padding: 10px;
}
</style>

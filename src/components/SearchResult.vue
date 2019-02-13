<template>
<div class="search-result__wrapper">
  <ul>
      <li
        v-for="(item, index) in data" 
        :key="index"
        class="search-result__item"
      >
        <router-link 
          :to="`/content/${item.id}`"
        >
          <span>{{item.title}}</span>
        </router-link>
      </li>
  </ul>
</div>
  
</template>

<script>
export default {
  props: ['data'],
  mounted() {
    this.onClickOutside(this.$el)
  },

  
  methods: {
    onClickOutside: function(el) {
      document.querySelector('body').addEventListener('click', e => {
        this.$emit('close')
      })
    }
  }
}
</script>

<style lang="scss">
.search-result__wrapper {
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0 auto;
  height: 300px;
  overflow-y: scroll;
  z-index: 4;
    .search-result__item {
      border-radius: 4px;
      background: #fff;
      height: 30px;
      line-height: 30px;
      margin-bottom: .3rem;
      text-indent: 1rem;
    }
}


</style>

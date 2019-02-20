<template>
  <div class="pages__wrapper">
    <div class="pages__list">
      <div class="pages__item-wrapper">
        <router-link
          class="pages__item__prev-btn"
          :to="`${Number(getCurrentPage)  - 1}`"
          :disabled="pageNum === '1'"
          @click.prevent="onClickPrevBtn"
          tag="button"
        >
          이전
        </router-link>

        <span> {{getCurrentPage}} / {{getTotalPage}} </span>

        <router-link 
          class="pages__item__next-btn"
          :to="`${Number(getCurrentPage) + 1}`"
          @click.prevent="onClickNextBtn"
          tag="button"
        >
          다음
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'

export default {
  data() {
    return {
      pageNum: 0,
      totalPage: 0,
    }
  },

  computed: {
    ...mapState({
      categories: 'categories',
    }),

    getTotalPage: function() {
      this.totalPage = this.categories.total_pages
      return this.totalPage
    },

    getCurrentPage : function() {
      this.pageNum = this.$route.params.pagesId
      return this.pageNum
    }
  },


  methods: {
    onClickPrevBtn: function() {
      return this.pageNum--
    },
    onClickNextBtn: function() {
      return this.pageNum++
    }
  }
}
</script>


<style lang="scss">

.pages__wrapper {
  color: #fff;
  display: block;
  width: 900px;
  height: 100px;
  margin: 3rem auto;
  .pages__list {
    display: flex;
    justify-content: space-around;
    .pages__item {
      display: inline-block;
      .pages__item-link {
        border: 1px solid #fff;
        color: #fff;
        margin: .55rem;
        padding: .25rem .5rem;
      }
    }
    .pages__item__prev-btn,
    .pages__item__next-btn {
      display: inline-block;
      padding: .5rem 1rem;
      border-radius: 8px;
      margin: 1rem;
    }
  }
}

</style>

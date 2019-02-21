<template>
  <div class="pages__wrapper">
    <div class="pages__list-wrapper">

      <button
        class="pages__item__prev-btn"
        :disabled="this.totalPageArray[0] === 1"
        @click.prevent="onClickPrevBtn"
        tag="button"
      >
        <FontAwesome
          icon="angle-left"
          ref="left"
        >
        </FontAwesome>
      </button>

      <ul class="pages__item-wrapper">
        <li 
          v-for="(item, index) in this.totalPageArray"
          class="pages__item"
          :id="`pages__item-${item}`"
          :key="index"
        >
          <router-link class="pages__item-link" :to="`${item}`">{{item}}</router-link>
        </li>
      </ul>
      <button 
        class="pages__item__next-btn"
        @click.prevent="onClickNextBtn"
        :disabled="this.totalPageArray.length !== 10"
      >
        <FontAwesome
          icon="angle-right"
          ref="right">
        </FontAwesome>
      </button>
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
      pagePos: 0,
      totalPageArray: [],
      totalResults: 0,
    }
  },

  created() {
    this.init()
  },

  computed: {
    ...mapState({
      categories: 'categories',
    }),
    getPage : function() {
      this.pageNum = this.$route.params.pagesId
      return this.pageNum
    }
  },

  watch: {
    pagePos: function() {
      this.totalPageArray = []
      this.spliced()
    }
  },

  methods: {
    init: function() {
      this.totalPage = this.categories.total_pages
      this.pageNum = this.$route.params.pagesId
      this.pagePos = Math.floor(this.$route.params.pagesId / 10)
      this.spliced()
    },

    spliced: function() {
      for (let i = 1 ; i <= this.totalPage; i++) this.totalPageArray.push(i)
      return this.totalPageArray = this.totalPageArray.splice(10 * this.pagePos, 10)
    },

    onClickPrevBtn: function() {
      this.pagePos--
    },

    onClickNextBtn: function() {
      this.pagePos++
    },

  }
}
</script>


<style lang="scss">
@import "../assets/styles/variables.scss";

.pages__wrapper {
  color: $GRAY-1;
  display: block;
  width: 800px;
  height: 100px;
  margin: 3rem auto;
  .pages__list-wrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .pages__item__prev-btn,
    .pages__item__next-btn {
      display: inline-block;
      height: 40px;
      width: 40px;
      border-radius: 20px;
      box-shadow: 0 1px 2px $GRAY-5;
      background: transparent;
      color: $GRAY-1;
      border: 1px solid $GRAY-1;
      margin: 1rem;
      cursor: pointer;
      &:hover {
        background: $GRAY-6;
      }
      &:disabled {
        color: $GRAY-6;
        border: 1px solid $GRAY-6;
        background: transparent;
      }
    }
    .pages__item-wrapper {
      width: 600px;
      .pages__item {
        display: inline-block;
        width: 60px;
        height: 20px;
        text-align: center;
        .pages__item-link {
          color: #fff;

        }

      }

    }
  }
}

</style>

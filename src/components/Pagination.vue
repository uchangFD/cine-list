<template>
  <div class="pages__wrapper">
    <div class="pages__list-wrapper">

      <router-link
        class="pages__item__prev-btn__link"
        :to="`${this.totalPageArray[0] - 10}`"
        :disabled="this.totalPageArray[0] === 1"
        @click.prevent="onClickPrevBtn"
        tag="button"
      >
        <FontAwesome icon="angle-left" ref="left"></FontAwesome>
      </router-link>

      <ul class="pages__item-wrapper">
        <li 
          v-for="(item, index) in this.totalPageArray"
          class="pages__item"
          :class="{'active': Number(pageNum) === item}"
          :id="`pages__item-${item}`"
          :key="index"
        >
          <router-link class="pages__item-link" :to="`${item}`">{{item}}</router-link>
        </li>
      </ul>

      <router-link 
        class="pages__item__next-btn__link" 
        :disabled="this.totalPageArray.length !== 10"
        :to="`${this.totalPageArray[this.totalPageArray.length - 1] + 1}`"
        @click.prevent="onClickNextBtn"
        tag="button"
      >
        <FontAwesome icon="angle-right" ref="right"></FontAwesome>
      </router-link>
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
      this.spliceList()
    }
  },

  methods: {
    init: function() {
      this.totalPage = this.categories.total_pages
      this.pageNum = this.$route.params.pagesId
      this.pagePos = this.pageNum % 10 === 0 ? Math.floor(this.$route.params.pagesId / 10) - 1 : Math.floor(this.$route.params.pagesId / 10)
      this.spliceList()
    },

    spliceList: function() {
      let idx = 1;

      while (idx <= this.totalPage) {
        this.totalPageArray.push(idx) 
        idx++
      }
      
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

    .pages__item__prev-btn__link,
    .pages__item__next-btn__link {
      margin: 1rem;
      display: inline-block;
      background: transparent;
      border: 1px solid #66a6ff;
      height: 40px;
      width: 40px;
      border-radius: 20px;
      box-shadow: 0 1px 2px $GRAY-5;
      color: #66a6ff;
      cursor: pointer;
      font-size: 1.5rem;
      transition: all .3s;
      &:hover {
        background: #66a6ff;
        color: #fff;
      }
      &:disabled {
        background: transparent;
        border: none;
        color: $GRAY-7;
      }
    }

    
    .pages__item-wrapper {
      width: 600px;
      .pages__item {
        display: inline-block;
        width: 60px;
        height: 20px;
        text-align: center;
        &.active {
          .pages__item-link {
            color: #66a6ff;
            font-weight: 700;
            opacity: 1;
          }
        }

        .pages__item-link {
          color: #fff;
          opacity: .5;
          &:hover {
            opacity: .8;
          }
        }

      }

    }
  }
}

</style>

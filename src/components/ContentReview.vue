<template>
  <div class="viewer__wrapper">
    <div 
      class="viewer__container"
      v-for="(value, index) in values"
      :key="index"
    >
      <div class="viewer__header">
        <div class="viewer__header-author-wrapper">
          <img src="../assets/images/profile.png" alt="" class="viewer__author-profile">
          <span class="viewer__author-name">{{value.userMail}}</span>
        </div>
        <div class="viewer__date-wrapper">

          <span 
            :title="`${new Date(value.timeStamp)}`" 
            class="viewer__time"
          >
            {{`${getTime(value.timeStamp)}`}}
          </span>

        </div>
      </div>
      <div class="viewer__body">
        <p class="viewer__description">{{value.description}}</p>
      </div>
      <div class="viewer__footer"></div>
    </div>
  </div>
</template>


<script>
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'
import ko from 'date-fns/locale/ko'

export default {
  props: ['values'],
  methods: {
    getTime: function(timeStamp) {
      return distanceInWordsToNow(
        new Date(timeStamp), { 
          locale: ko, 
          addSuffix: true 
        }
      )
    }
  }
}

</script>

<style lang="scss">
@import "../assets/styles/variables.scss";
.viewer__wrapper {
  .viewer__container {
    border-radius: 8px;
    padding-top: .5rem;
    background: $GRAY-8;
    height: 100%;
    width: 100%;
    margin: 1.5rem 0;
    transition: all .3s;
    &:hover {
      background: $GRAY-7;
    }


    .viewer__header {
      margin: .5rem;
      padding-right: .5rem;
      padding-left: .5rem;
      display: flex;
      justify-content: flex-start;
      .viewer__header-author-wrapper {
        height: 30px;
        line-height: 30px;
        .viewer__author-profile {
          height: 100%;
          line-height: 100%;
        }
        .viewer__author-name {
          color: $GRAY-2;
          margin-left: .5rem; 
          vertical-align: top; 
          font-size: 1.1rem;
          letter-spacing: 1px;
        }
      }
      .viewer__date-wrapper {
        height: 30px;
        line-height: 30px;
        margin-left: .5rem;
        .viewer__time {
          color: $GRAY-5;
          font-size: .8rem;
        }
      }
    }






    .viewer__body {
      // background: #0ad;
      margin: .5rem;
      .viewer__description {
        text-indent: 1rem;
        word-break: break-all;
        padding: .5rem;
        font-weight: 300;
        line-height: 1.4;
        font-size: .95rem;
        letter-spacing: .5px;
      }
    }
    .viewer__footer {
      height: 1.5rem;
    }
  }
}

</style>

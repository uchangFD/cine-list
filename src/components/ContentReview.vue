<template>
  <div class="viewer__wrapper">
    <div 
      class="viewer__container"
      v-for="(value, index) in values"
      :key="index"
    >
      <div class="viewer__header">
        <div class="viewer__header-author__wrapper">
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
        <div class="viewer__remove-btn__wrapper">
          <button
            v-show="value.userId === authorId"
            :disabled="value.userId !== authorId"
            class="viewer__remove-btn"
            @click.prevent="removeComment"
          > 
            <FontAwesome icon="times" ref="times"></FontAwesome>
          </button>
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
import { mapActions, mapState } from 'vuex'
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'
import ko from 'date-fns/locale/ko'
import firebase from 'firebase'

export default {
  props: ['values', 'temp'],

  data() {
    return {
      contentId: 0,
      userId: '',
      userMail: '',
      authorId: ''
    }
  },

  created() {
    const user = firebase.auth().currentUser
    user && (this.authorId = user.uid)
    this.contentId = this.$route.params.contentId
    this.userId = window.localStorage.token
  },

  methods: {
    ...mapActions([
      'DELETE_REVIEW',
      'FETCH_REVIEW'
    ]),

    getTime: function(timeStamp) {
      return distanceInWordsToNow(
        new Date(timeStamp), { 
          locale: ko, 
          addSuffix: true 
        }
      )
    },

    removeComment: function() {
      this.DELETE_REVIEW({contentId: this.$route.params.contentId, userId: this.userId})
      // this.FETCH_REVIEW({contentId: this.$route.params.contentId})
    }
  }
}

</script>

<style lang="scss" scoped>
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
      .viewer__header-author__wrapper {
        flex: none;
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
        flex: none;
        height: 30px;
        line-height: 30px;
        margin-left: 1rem;
        .viewer__time {
          color: $GRAY-5;
          font-size: .8rem;
        }
      }
      .viewer__remove-btn__wrapper {
        margin-left: auto;
        .viewer__remove-btn {
          line-height: 30px;
          width: 30px;
          background: none;
          font-weight: 300;
          color: #fff;
          font-size: 1.4rem;
          cursor: pointer;
          transition: all .3s;
          &:hover {
            color: #ddd;
          }
        }
      }
    }



    .viewer__body {
      margin: 1rem auto;
      .viewer__description {
        width: 85%;
        height: 100%;
        margin-left: auto;
        margin-right: 2.5rem;
        word-break: break-all;
        padding: .5rem;
        font-weight: 300;
        line-height: 2;
        font-size: .85rem;
        letter-spacing: .5px;
      }
    }
    .viewer__footer {
      height: .5rem;
    }
  }
}

</style>

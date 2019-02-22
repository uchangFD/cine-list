<template>
  <div class="content__review__wrapper">
    <div class="content__review__post__wrapper">
      <div class="content__review__post__header">
        <h2 class="content__review__post__title">POST REVIEW</h2>
      </div>
      <div class="content__review__post__body">
        <textarea
          v-model="description"
          maxlength="250"
          name="review" 
          class="content__review__post__textarea"
          :id="`content__review-text-container-${contentId}`"
          :disabled="checkReview"
          placeholder="250자 이내로 영화 감상평을 적어주세요."
        />
      </div>
      <div class="content__review__post__footer">
        <button 
          class="content__review__post__post-btn"
          @click.prevent="onSubmit"
          :disabled="checkReview"
        >Post Review</button>
      </div>
    </div>
    <ContentReview :values="comments" />
  </div>
</template>

<script>
import ContentReview from './ContentReview.vue'

import firebase from 'firebase'
import { mapActions, mapState } from 'vuex'

export default {
  components: {ContentReview},
  data() {
    return {
      contentId: 0,
      userId: '',
      userMail: '',
      timeStamp: '',
      description: '',
      iscommented: false,
    }
  },

  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.userMail = user.email
    })
    this.contentId = this.$route.params.contentId
    this.userId = window.localStorage.token

    
  },

  watch: {
    '$route': {
      handler: 'fetch',
      immediate: true
    }
  },

  computed: {
    ...mapState({
      comments: 'comments'
    }),

    checkReview: function() {
      return this.onCheck()
    }
  },

  methods: {
    ...mapActions([
      'FETCH_REVIEW',
      'UPDATE_REVIEW',
      'CHECK_REVIEW',
      ]),

    fetch: function() {
      this.FETCH_REVIEW({contentId: this.$route.params.contentId})
    },
    

    onSubmit: function() {
      this.timeStamp = Date.now()
      this.description = document.querySelector('.content__review__post__textarea').value
      const {contentId, userId, userMail, timeStamp, description} = this
      this.UPDATE_REVIEW({contentId, userId, userMail,timeStamp, description})
      this.description = ''
      this.FETCH_REVIEW({contentId: this.$route.params.contentId})
    },


    onCheck: function() {
      const USER_COMMENT_REF = firebase.database().ref(`REVIEWS/${this.contentId}/${this.userId}`)
      USER_COMMENT_REF.on('value', data => {
        this.iscommented = !!data.val()
      })
      return this.iscommented
    }

  }
}
</script>

<style lang="scss">
@import "../assets/styles/variables.scss";
  .content__review__wrapper {
    grid-column: 3 / 8;
    grid-row: 3;
    width: 100%;
    margin: 1rem auto;
    .content__review__post__wrapper {
      .content__review__post__header {
        .content__review__post__title {
          font-size: 1.5rem;
          margin: 1rem 0;
        }
      }
      .content__review__post__body {
        .content__review__post__textarea {
          width: 96%;
          display: block;
          height: 100px;
          background: transparent;
          border-bottom: 1px solid $GRAY-3;
          color: $GRAY-3;
          border-radius: 8px;
          font-size: 1rem;
          padding: .5rem;
          outline: none;
        }
      }
    
      .content__review__post__footer {
        display: flex;
        .content__review__post__post-btn {
          margin-left: auto;
          margin-top: 1rem;
          width: 120px;
          height: 40px;
          border-radius: 20px;
          cursor: pointer;
        }  
      }
    }
  }
</style>

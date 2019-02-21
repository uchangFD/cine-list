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
          :disabled="didComment"
          placeholder="250자 이내로 영화 감상평을 적어주세요."
        />
      </div>
      <div class="content__review__post__footer">
        <button 
          class="content__review__post__post-btn"
          @click.prevent="onSubmit"
          :disabled="didComment"
        >Post Review</button>
      </div>
    </div>
    <ContentReview :values="values" />
  </div>
</template>

<script>
import ContentReview from './ContentReview.vue'

import firebase from 'firebase'
import { mapActions } from 'vuex'

export default {
  components: {ContentReview},
  data() {
    return {
      contentId: 0,
      userId: '',
      userMail: '',
      timeStamp: '',
      description: '',
      commented: false,
      values: [],
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
    didComment: function() {
      return this.checkComments()
    }
  },

  methods: {
    ...mapActions([
      'ADD_REVIEW',
      ]),

    fetch: function() {
      const commentRef = firebase.database().ref(`REVIEWS/${this.$route.params.contentId}`)
      commentRef.on('child_added', data => {
        this.values.push({
          userId: data.key, 
          authorId: data.key,
          userMail: data.val().userMail, 
          timeStamp: data.val().timeStamp, 
          description: data.val().description
        })
        this.values = this.values.sort((a, b) => b["timeStamp"] - a["timeStamp"])
      })
    },

    checkComments: function() {
      const {contentId, userId} = this
      firebase.database().ref(`REVIEWS/${contentId}/${userId}`).on('value', snapshot => this.commented = snapshot.exists())
      return this.commented
    },

    onSubmit: function() {
      this.timeStamp = Date.now()
      this.description = document.querySelector('.content__review__post__textarea').value
      const {contentId, userId, userMail, timeStamp, description} = this
      this.ADD_REVIEW({contentId, userId, userMail,timeStamp, description})
      this.description = ''
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

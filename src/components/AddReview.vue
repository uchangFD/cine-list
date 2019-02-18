<template>
  <div class="contents__review-container">
    <div class="content__review__wrapper">
      <div class="contents__review__header">
        <h2 class="contents__review__title">REVIEW</h2>
      </div>
      <div class="contents__review__body">
        <textarea 
          name="review" 
          class="contents__review__textarea"
          :id="`review-container-${contentId}`"
          maxlength="250"
        />
      </div>
      <div class="contents__review__footer">
        <button 
          class="contents__review__post-btn"
          @click.prevent="onSubmit"
        >
          Post Review
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      contentId: 0,
      userId: '',
      userMail: '',
      timeStamp: '',
      description: '',
    }
  },

  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.userMail = user.email
    })
  },

  methods: {
    ...mapActions([
      'ADD_REVIEW'
      ]),

    onSubmit: function() {
      this.contentId = this.$route.params.contentId
      this.userId = window.localStorage.token
      this.timeStamp = Date.now()
      this.description = document.querySelector('.contents__review__textarea').value
      const {contentId, userId, userMail, timeStamp, description} = this

      this.ADD_REVIEW({contentId, userId, userMail,timeStamp, description})
    }
  }
}
</script>

<style lang="scss">
.contents__review-container {
  grid-column: 3 / 8;
  .contents__review__title {
    font-size: 1.5rem;
    margin: 1rem 0;
  }
  .content__review__wrapper {
    width: 80%;
    margin: 1rem auto;
    .contents__review__header {
  
    }

    .contents__review__body {
      .contents__review__textarea {
        width: 96%;
        display: block;
        height: 100px;
        background: transparent;
        border-bottom: 1px solid #fff;
        color: #fff;
        border-radius: 4px;
        font-size: 1rem;
        padding: .5rem;
      }
    }
  
    .contents__review__footer {
      display: flex;
      .contents__review__post-btn {
        margin-left: auto;
        margin-top: 1rem;
        width: 120px;
        height: 40px;
        border-radius: 20px;
      }  
    }
  }
}
</style>

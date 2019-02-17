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
        <button class="contents__review__post-btn">Post Review</button>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  data() {
    return {
      contentId: 0
    }
  },
  created() {
    this.contentId = this.$route.params.contentId
    
  },
  methods: {
    postReview: function(userId, name, email, imageUrl) {
      firebase.database().ref('users/' + userId).set({
        username: name,
        email: email,
        profile_picture : imageUrl
      });
    }
  }
}
</script>

<style lang="scss">
.contents__review-container {
  grid-column: 2 / 5;
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

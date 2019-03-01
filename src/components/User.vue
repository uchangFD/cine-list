<template>
  <div class="user-info">

    <div class="user-info__header">
      <div class="user-info__info-wrapper">
        <img class="user-info__user-profile" :src="`${profileImage}`" alt="">
        <h2 class="user-info__user-mail">{{users.INFO.userMail}}</h2>
        <p class="user-info__user-id">{{users.INFO.userId}}</p>
      </div>
    </div>

    <div class="user-info__body">
      <div
        v-for="(value, index) in userReviews" :key="index"
        class="user-info__comments-wrapper"
      >
        <router-link 
          :to="`/content/${value.contentId}`"
          class="user-info__comments-link"
        >
          <div class="user-info__comments">
            <p class="user-info__comment-description">{{value.description}}</p>
            <p class="user-info__comments-time">{{`${getTime(value.timeStamp)}`}}</p>
          </div>
        </router-link>
      </div>
    </div>
    <div class="user-info__footer">
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import firebase from 'firebase'
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'
import ko from 'date-fns/locale/ko'


export default {
  data() {
    return {
      email: '',
      profileImage: 'https://user-images.githubusercontent.com/23162772/53229626-15e1f600-36c8-11e9-8e39-ce7ae4fb0fdb.png',
    }
  },

  created() {
        
  },

  computed: {
    ...mapState({
      users: 'users',
      userReviews: 'userReviews',
      contents: 'contents'
    })
  },

  watch: {
    '$route': {
      handler :'fetch',
      immediate: true
    },
  },

  methods: {
    ...mapActions([
      'FETCH_USER',
      'FETCH_USER_REVIEWS',
      'UPDATE_USER_PROFILE',
      'FETCH_CONTENTS',
      'FETCH_CONTENT'
    ]),


    fetch: function() {
      this.FETCH_USER({
        userId: this.$route.params.userId,
      })
      this.FETCH_USER_REVIEWS({
        userId: this.$route.params.userId,
      })
    },
    
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



<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

@media screen and(min-width: $desktop){
  .user-info {
    width: calc(100% - 225px);
    margin-left: 225px;
    .user-info__header {
      color: #fff;
      .user-info__info-wrapper {
        .user-info__user-profile {

        }
        .user-info__user-mail {

        }
        .user-info__user-id {

        }
      }
    }
    .user-info__body {
      .user-info__comments-wrapper {
        display: block;
        .user-info__comments-link {
          max-width: 800px;
          display: block;
          margin: 0 auto;
          margin-top: 1rem;
          
          .user-info__comments{
            height: 100px;
            padding: .5rem;
            border-radius: 8px;
            background: #faa;
            .user-info__comment-description{

            }
            .user-info__comment-time{

            }
          }
        }
      }
    }
    .user-info__footer {

    }
  }
}


</style>

<template>
  <div class="user-info">
    <div class="user-info__wrapper">
      <div class="user-info__header">
        <div class="user-info__user-info-wrapper">
          <img class="user-info__user-profile" :src="`${profileImage}`" alt="">
          <h2 class="user-info__user-mail">{{users.INFO.userMail}}</h2>
          <p class="user-info__user-id">{{users.INFO.userId}}</p>
        </div>
      </div>
  
      <div class="user-info__body">
        <div class="user-info__comments-container">
          <div
            v-for="(value, index) in userReviews" :key="index"
            class="user-info__comments"
          >

              <div class="user-info__comment">
                <div class="user-info__comment-image-wrapper">
                  <img 
                    class="user-info__comment-poster" 
                    :src="`https://image.tmdb.org/t/p/w342${value.posterId}`" 
                  />
                </div>
                <div class="user-info__comment-text-wrapper">
                  <h3 class="user-info__comment-title">{{value.title}}</h3>
                  <span class="user-info__comment-time">{{`${getTime(value.timeStamp)}`}}</span>
                  <p class="user-info__comment-description">{{value.description}}</p>
                  <router-link :to="`/content/${value.contentId}`" class="user-info__comment-link">
                    <PrimaryButton :name="'View Contents'" />
                  </router-link>
                </div>
                <div 
                  class="user-info__comment-blur"
                  :style="{backgroundImage: `url(https://image.tmdb.org/t/p/w500${value.posterId})`}"  
                />
              </div>

          </div>
        </div>
      </div>
      <div class="user-info__footer">
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import firebase from 'firebase'
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'
import ko from 'date-fns/locale/ko'
import PrimaryButton from './PrimaryButton.vue'


export default {
  components: { PrimaryButton },
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
    color: #fff;
    width: calc(100% - 225px);
    margin-left: 225px;
    .user-info__wrapper {
      max-width: 1400px;
      margin: 0 auto;
    .user-info__header {
      .user-info__user-info-wrapper {
        .user-info__user-profile {

        }
        .user-info__user-mail {

        }
        .user-info__user-id {

        }
      }
    }
    .user-info__body {
      .user-info__comments-container {
        .user-info__comments {
          margin: 2rem auto;
          width: 800px;
            .user-info__comment {
              position: relative;
              display: flex;
              margin-bottom: 2rem;
              opacity: 0.8;
              margin: 0 2rem 2rem 0;
              padding: 1rem;
              .user-info__comment-image-wrapper {
                flex: 0;
                .user-info__comment-poster {
                  object-fit: cover;
                  width: 100px;
                  height: 150px;
                  border-radius: 8px;
                  margin-right: 1rem;
                }
              }
              .user-info__comment-text-wrapper {
                  color: #fff;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                .user-info__comment-title {
                  float: left;
                }
                .user-info__comment-time {
                  float: right;
                }
                .user-info__comment-description {
                  display: block;
                }
              }
              &:hover {
                overflow: hidden;
                border-radius: 8px;

                .user-info__comment-blur {
                  width: 100%;
                  height: 100%;
                  top: 0;
                  left: 0;
                  z-index: -1;
                  position: absolute;
                  background-size: cover;
                  background-position: center;
                  transform: scale(1.1);
                  -webkit-filter: blur(28px);
                  -moz-filter: blur(28px);
                  -ms-filter: blur(28px);
                  -o-filter: blur(28px);
                  filter: blur(28px);
                  opacity: 0.28;
                }
              }
            }
        }
      }
    }
    .user-info__footer {

    }
  }
  }
}


</style>

<template>
  <div class="user__tab-list__container">
    <div 
      v-if="selectedTab === 'COMMENTS'"
      class="user-info__comments-container"
    >
      <div
        v-for="(review, index) in userReviews" 
        :key="index"
        class="user-info__comments"
      >
        <div class="user-info__comment">
        
          <div class="user-info__comment-image-wrapper">
            <img 
              class="user-info__comment-poster" 
              :src="`https://image.tmdb.org/t/p/w342${review.posterId}`" 
            />
            <router-link :to="`/content/${review.contentId}`" class="user-info__comment-link">
              <PrimaryButton :name="'View Contents'" />
            </router-link>
          </div>
          <div class="user-info__comment-text-wrapper">
            <h3 class="user-info__comment-title">{{review.title}}</h3>
            <p class="user-info__comment-description">{{review.description}}</p>
            <span class="user-info__comment-time">{{`${getTime(review.timeStamp)}`}}</span>
          </div>
          <div 
            class="user-info__comment-blur"
            :style="{backgroundImage: `url(https://image.tmdb.org/t/p/w500${review.posterId})`}"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now'
import ko from 'date-fns/locale/ko'
import PrimaryButton from './PrimaryButton.vue'

export default {
  components: {PrimaryButton},
  props: ['tabs', 'selectedTab'],

  computed: {
    ...mapState({
      userReviews: 'userReviews',
    })
  },
  
  methods: {
    getTime: function(timeStamp) {
      return distanceInWordsToNow(
        new Date(timeStamp), { 
          locale: ko, 
          addSuffix: true 
        }
      )
    },
  }

}
</script>

<style lang="scss" scoped>
.user__tab-list__container {

  .user-info__comments-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    .user-info__comments {
      margin: 2rem auto;
      width: 100%;
      .user-info__comment {
        position: relative;
        display: flex;
        margin-bottom: 2rem;
        opacity: 0.8;
        height: 300px;
        margin: 0 2rem 2rem 0;
        padding: 1rem;
        .user-info__comment-image-wrapper {
          flex: 0;
          margin-right: 1rem;
          .user-info__comment-poster {
            object-fit: cover;
            width: 100%;
            border-radius: 8px;
            margin-right: 1rem;
          }
          .user-info__comment-link {
            button {
              margin: 1rem auto;
            }
          }
        }
        .user-info__comment-text-wrapper {
            color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
          .user-info__comment-title {
            display: inline-block;
            font-size: 1.5rem;
          }
          .user-info__comment-description {
            line-height: 1.6;
            margin-top: 1rem;
          }
          .user-info__comment-time {
            text-align: left;
            color: #ddd;
            font-size: .7rem;
            margin: .5rem 0;
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
</style>
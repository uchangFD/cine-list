<template>
  <div class="user-info">

    <div class="user-info__header">
      <h2>{{users.INFO}}</h2>
    </div>

    <div class="user-info__body">
      <div
        v-for="(value, key) in users.REVIEWS" 
        :key="key"
        class="user-info__comments-wrapper"
      >
        <router-link 
          :to="`/content/${key}`"
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
      contentIds: []
    }
  },

  computed: {
    ...mapState({
      users: 'users',
      contents: 'contents'
    }),

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
      'FETCH_CONTENTS',
      'FETCH_CONTENT'
    ]),


    fetch: function() {
      this.FETCH_USER({
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

    }
    .user-info__body {
      .user-info__comments-wrapper {
        display: block;
        .user-info__comments-link {
          max-width: 500px;
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

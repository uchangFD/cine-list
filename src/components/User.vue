<template>
  <div class="user-info">
    <div class="user-info__wrapper">
      <div class="user-info__header">
        <div class="user-info__user-info-wrapper">
          <img class="user-info__user-profile" :src="`${profileImage}`" alt="">
          <h2 class="user-info__user-mail">{{users.INFO.userMail}}</h2>
          <p class="user-info__user-id">{{users.INFO.userId}}</p>
          <p class="user-info__user-reviewed">REVIEWS: {{userReviews.length}}</p>
          <p class="user-info__user-liked">LIKE:</p>
          <p class="user-info__user-following">FOLLOWINGS:</p>
          <p class="user-info__user-follower">FOLLOWERS:</p>
        </div>
      </div>
  
      <div class="user-info__body">
        <UserTab 
          :tabs="tabs"
          :selected-tab="selectedTab" 
          v-on:@change="onClickedTab"
        />
          <div class="user-info__like-container"></div>
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
import UserTab from './UserTab.vue'
import PrimaryButton from './PrimaryButton.vue'


export default {
  components: { UserTab, PrimaryButton },
  data() {
    return {
      email: '',
      profileImage: 'https://user-images.githubusercontent.com/23162772/53229626-15e1f600-36c8-11e9-8e39-ce7ae4fb0fdb.png',
      tabs: ['COMMENTS', 'LIKE IT', 'FOLLOWING', 'FOLLOWERS'],
      selectedTab : ''
    }
  },

  created() {
    this.selectedTab = this.tabs[0]
        
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
    ]),


    fetch: function() {
      this.FETCH_USER({userId: this.$route.params.userId})
      this.FETCH_USER_REVIEWS({userId: this.$route.params.userId})
    },
    


    onClickedTab: function(tab) {
      this.selectedTab = tab
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
      .user-info__like-container {

      }

    }
    .user-info__footer {

    }
  }
  }
}


</style>

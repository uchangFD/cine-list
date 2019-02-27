<template>
  <div class="user__container"> 
    <router-link class="user__info__link" :to="`/user/${userId}`">
      <img class="user__profile" :src="profileImage" />
      <p class="user__email">{{email}}</p> 
    </router-link>
    <button 
      class="user__logout-btn"
      @click.prevent="logOut"
    >
      <span class="user__logout-btn__text">
        Log out
      </span>
    </button> 
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  data() {
    return {
      profileImage: 'https://user-images.githubusercontent.com/23162772/53229626-15e1f600-36c8-11e9-8e39-ce7ae4fb0fdb.png',
      photo: "",
      userId: "",
      name: "",
      email: "",
      user: {}
    }
  },

  created() {
    this.init()
  },

  methods: {

    init: function() {
      this.user = firebase.auth().currentUser;
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.name = user.displayName; 
          this.email = user.email; 
          this.photo = user.photoURL; 
          this.userId = user.uid; 
        }
      })
    },


    logOut: function() { 
      delete localStorage.token
      firebase.auth().signOut()
      this.$router.push('/login')
    }

  }
};

</script>

<style lang="scss">
@import "../assets/styles/variables.scss";

@media screen and (min-width: $desktop) {
  .user__container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 350px;
    height: 80px;
    line-height: 80px;

    .user__info__link {
      height: 80px;
      line-height: 80px;

      .user__profile {
        width: 30px;
        height: auto;
        vertical-align: middle;
        margin-right: 1rem;
        border-radius: 50%;
      }

      .user__email {
        letter-spacing: 1.1px;
        display: inline;
        margin: auto;
        color: #fff;
      }
    }
    
    .user__logout-btn {
      height: 70px;
      width: 100px;
      background: none;
      color: #fff;
      margin-left: auto;
      cursor: pointer;
    }
  }
}

@media screen and (max-width: $mobile) {
  .user__container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    line-height: 80px;
    height: 80px;
    .user__profile {
      width: 30px;
      height: 30px;
      margin-right: 1rem;
    }
    .user__email {
      display: none;
    }
    .user__logout-btn {
      height: 100%;
      width: 100px;
      background: none;
      color: #fff;
    }
  }
}


</style>

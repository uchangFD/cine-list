<template>
  <div class="user__container"> 
    <img 
      class="user__profile"
      src="../assets/images/profile.png"
    >
    <p class="user__email">
      {{email}}
    </p> 
    <button 
      class="user__logout-btn"
      @click.prevent="logOut"
    >
      Log out
    </button> 
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  data() {
    return {
      photo: "",
      userId: "",
      name: "",
      email: "",
      user: {}
    }
  },
  created() {
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
  methods: { 
    logOut() { 
      delete localStorage.token
      firebase.auth().signOut()
      this.$router.push('/login')
    } 
  }
};

</script>

<style lang="scss">
.user__container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 350px;
  color: #fff;
  .user__profile {
    width: 30px;
    margin: 1rem;
    border-radius: 50%;
  }
  .user__email {
    height: 70px;
    line-height: 70px;
    float: left;
    margin: auto;
  }
  .user__logout-btn {
    height: 70px;
    padding: 0 2rem;
    background: none;
    color: #fff;
    margin-left: auto;
    cursor: pointer;
  }
}

</style>

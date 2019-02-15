<template>
  <div class="user__container"> 
    <img 
      class="user__profile"
      :src="photo" 
    >
    <p
      class="user__name"
    >{{name}}</p> 
    <button 
      class="user__logout-btn"
      @click="logOut"
    >
      Log out</button> 
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
  // this.user = firebase.auth().currentUser; 
  // if ( this.user ) {
  //   this.name = this.user.displayName; 
  //   this.email = this.user.email; 
  //   this.photo = this.user.photoURL; 
  //   this.userId = this.user.uid; 
  // }
  // console.log("this.user: ", this.user)

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
    firebase.auth().signOut();
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
  .user__name {
    height: 70px;
    line-height: 70px;
    float: left;
  }
  .user__logout-btn {
    height: 70px;
    padding: 0 2rem;
    background: none;
    color: #fff;
    cursor: pointer;
  }
}

</style>

<template>
  <div class="user__container"> 
    <img :src="photo" style="height: 70px;">
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
  this.user = firebase.auth().currentUser; 
  if ( this.user ) {
    this.name = this.user.displayName; 
    this.email = this.user.email; 
    this.photo = this.user.photoURL; 
    this.userId = this.user.uid; 
  }
  console.log("this.user: ", this.user)
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
  .user__name {
    height: 70px;
    line-height: 70px;
    float: left;
    background: #af0;
  }
  .user__logout-btn {
    height: 70px;
    width: 120px;
    background: #fae;
    cursor: pointer;
  }
}

</style>

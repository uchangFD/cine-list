<template>
  <div id="firebaseui-auth-container">
    <div> 
      <h1>Signup succeeded</h1> 
      <button @click='logOut'>Log out</button> 
      <hr> 
      <img :src='photo' style='height: 120px'> <br> 
      <p>{{name}}</p> 
      <p>{{email}}</p> 
      <p>{{userId}}</p> 
      <hr> 
      <pre>{{user}}</pre> 
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import firebaseui from 'firebaseui'
import { config } from '../store/firebase.config'

export default {
  // data() {
  //   return {
  //     photo: "",
  //     userId: "",
  //     name: "",
  //     email: "",
  //     user: {}
  //   }
  // },

  // created() {
  //   this.user = firebase.auth().currentUser; 
  //   if(this.user) {
  //     this.name = this.user.displayName; 
  //     this.email = this.user.email; 
  //     this.photo = this.user.photoURL; 
  //     this.userId = this.user.uid; 
  //   } 
  // },

  // mounted() {
  //   var uiConfig = {
  //     signInSuccessUrl: '/success',
  //     signInOptions: [
  //       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  //       firebase.auth.EmailAuthProvider.PROVIDER_ID
  //       ]
  //     };
  //   var ui = new firebaseui.auth.AuthUI(firebase.auth());
  //   ui.start('#firebaseui-auth-container', uiConfig);
  // },

  // methods: {
  //   logOut() {
  //     firebase.auth().signOut();
  //   } 
  // }
}
</script>

<style>

</style>

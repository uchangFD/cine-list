<template>
  <div id="firebaseui-auth-container">

  </div>
</template>

<script>
import firebase from 'firebase';
import firebaseui from 'firebaseui'
import {config} from '../store/firebase.config'

export default {
  name: 'auth',
  mounted() {
    var uiConfig = {
      signInOptions: [ firebase.auth.GoogleAuthProvider.PROVIDER_ID ]
      };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
  }
}
</script>

<style>

</style>

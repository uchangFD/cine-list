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
    var uiConfig = { signInOptions: [ firebase.auth.GoogleAuthProvider.PROVIDER_ID ]};
    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());
    ui.start('#firebaseui-auth-container', uiConfig);
  }
}
</script>

<style>
#firebaseui-auth-container {
  display: inline-block;
  width: 100%;
  min-height: 100%;
  background:#151d23;
  margin-top: 150px;

}

</style>

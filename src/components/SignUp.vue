<template>
  <div class="sign-up">
    <p>Create New account</p>
    <input type="text" v-model="email" placeholder="Email">
    <input type="password" v-model="password" placeholder="Password">
    <button @click="signUp">Sign Up</button>
    <span>or go back to <router-link to="/login">login</router-link>.</span>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'signUp',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signUp: function() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then(user => {this.$router.replace('home')})
      .catch(err => alert(`Oops, ${err.message}`))
    }
  }

}
</script>

<style>
.sign-up {
  color: #fff;
}
</style>

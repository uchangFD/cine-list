<template>
  <!-- <div id="firebaseui-auth-container"></div> -->
  <div class="login">
    <h3 class="login__title">Sign In</h3>
    <input class="login__input" v-model="email" type="text" placeholder="E-Mail">
    <input class="login__input" v-model="password" type="password" placeholder="Password">
    <button class="login__btn" @click="login">Connect</button>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, voluptatem!</p>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'login',

  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).onAuthStateChanged().then(
        user => {
          this.$router.replace('home')
        },
        err => {
          alert(`Oops, ${err.message}`)
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  color: #fff;
  margin-top: 40px;
  .login__input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
  }
  .login__btn {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
  }
  p {
    color: #fff;
    margin-top: 40px;
    font-size: .7rem;

  }
}

</style>

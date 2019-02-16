<template>
  <div class="login">
    <h3 class="login__title">Sign In</h3>
    
    <form 
      class="login__form"
      @submit.prevent="onSubmit"
    >
      <input 
        class="login__input input-email" 
        v-model="email" 
        type="text" 
        autofocus
        placeholder="E-Mail"
      />

      <input
        class="login__input input-password" 
        v-model="password" 
        type="password" 
        placeholder="Password"
      />
      
      <button 
        type="submit" 
        class="login__btn" 
        :class="{'btn-success': !invalidForm}"
        :disabled="invalidForm"
      >Log In</button>
    </form>
    <p>계정이 없으신가요? <router-link to="/sign-up">회원가입</router-link>하세요</p>
  </div>
</template>

<script>
import Vue from 'vue';
import VeeValidate from 'vee-validate';

import firebase from 'firebase'

export default {
  name: 'login',

  data() {
    return {
      email: '',
      password: ''
    }
  },

  computed: {
    invalidForm() {
      return !this.email || !this.password
    }
  },
  methods: {
    onSubmit: function() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          localStorage.setItem('token', user.user.uid)
          this.$router.push('/home')
        })
        .catch(err => {
          alert(err.message)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
a {
  color: #fff;
  text-decoration: underline;
}
.login {
  color: #fff;
  margin-top: 40px;
  .login__form{
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
}

</style>

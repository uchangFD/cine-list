<template>
  <!-- <div id="firebaseui-auth-container"></div> -->
  <div class="login">
    <h3 class="login__title">Sign In</h3>
    <form 
      class="login__form"
      @submit.prevent="onSubmit"
    >

      <input 
        class="login__input" 
        v-model="email" 
        type="text" 
        autofocus
        placeholder="E-Mail"
      />

      <input 
        class="login__input" 
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
      password: '',
      rPath: ''
    }
  },

  created() {
    this.rPath = this.$route.query.rPath || '/'
    
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
          this.$router.push(this.rPath)
        })
        .catch(err => {
          alert(err.message)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
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

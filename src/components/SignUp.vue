<template>
  <div class="sign-up__wrapper">
    <div class="sign-up__header">
      <h2 class="sign-up__title">Create New account with Email</h2>
    </div>
    <hr>
    <div class="sign-up__body">
      <form 
        @submit.prevent="onSubmit"
        class="sign-up__form"
      >
        <input
          class="sign-up__input sign-up__input-email"
          :class="{'is-danger': errors.has('email') }"
          v-validate="'required|email'" 
          data-vv-delay="500"
          name="email" 
          type="text" 
          v-model="email" 
          placeholder="Email"
        >
        <span 
          v-if="errors.has('email')" 
          class="help is-danger sign-up__validate-paragraph"
        >
          {{ errors.first('email') }}
        </span>

        <input
          class="sign-up__input sign-up__input-password"
          type="password" 
          v-model="password" 
          placeholder="Password"
        >
        <button 
          class="sign-up__btn"
          type="submit"
        >
          <span class="sign-up__btn-text">Sign up</span>
        </button>
      </form>
    </div>
    <hr>
    <div class="sign-up__footer">
      <span class="sign-up__span">
        Are you already a Member? 
        <button class="login-link-btn">
          <router-link  to="/login" class="login-link">Sign in</router-link>
        </button>
      </span>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VeeValidate from 'vee-validate';

import firebase from 'firebase'

Vue.use(VeeValidate);

export default {
  name: 'signUp',
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit: function() {
      this.$validator.validateAll()
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          localStorage.setItem('token', user.user.uid)
          this.$router.push('/home')
        })
        .catch(err => {alert(err.message)})
    },
  }

}
</script>

<style lang="scss" scoped>
.sign-up__wrapper {
  background: #fff;
  margin-top: 50px;
  border-radius: 4px;
  padding: 1rem;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  .sign-up__header {
    padding: 1rem 0;
    .sign-up__title {
      color: #000;
      font-size: 1.25rem;
    }
  }
  .sign-up__body {
    .sign-up__form {
      width: 50%;
      margin: 40px auto;
      .sign-up__input {
        width: 100%;
        height: 2rem;
        border-bottom: 1.25px solid #000;
        display: block;
        margin-top: 2rem;
        outline: none;
        text-indent: .5rem;
      }
      .sign-up__validate-paragraph {
        color: #faa;
        font-size: .8rem;
        margin-top: .5rem;
        margin-left: .5rem;
      }
      .sign-up__btn {
        display: block;
        width: 100%;
        border: 1.25px solid #000;
        padding: .6rem 1.2rem;
        margin-top: 2rem;
        border-radius: 2px;
        &:hover {
          background: #000;
          .sign-up__btn-text {
            color: #fff;
  
          }
        }
      }
    }
  }
  .sign-up__footer {
    padding: 1rem 0;
    .sign-up__span {
      .login-link-btn {
        border: 1px solid #000;
        padding: .3rem;
        border-radius: 2px;
        &:hover {
          background: #000;
          .login-link {
            color: #fff;
          }
        }
        
      }

    }
  }
}
</style>

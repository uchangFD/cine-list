<template>
  <div class="sign-in__wrapper">
    <div class="sign-in__header">
      <h2 class="sign-in__title">Sign In</h2>
      <span>Welcom to Cine List</span>
    </div>
    <div class="sign-in__body">
      <form 
        @submit.prevent="onSubmit"
        class="sign-in__form"
      >
        <div class="sign-in__form-wrapper">
          <label class="sign-in__label">User Email</label>
          <div class="sign-in__input-wrapper">
            <input
              name="email" 
              type="text" 
              autocomplete="off"
              placeholder="Email"
              v-model="email" 
              v-validate="'required|email'" 
              class="sign-in__input sign-in__input-email"
            />
            <div 
              v-if="email.length"
              class="sign-in__input__validate-icon"
            >
              <FontAwesome 
                v-if="errors.has('email')" 
                icon="times-circle"
                class="validate-error"
              />
              <FontAwesome 
                v-else
                icon="check-circle"
                class="validate-pass"
              />
            </div>
          </div>
        </div>
        
        <div class="sign-in__form-wrapper">
          <label class="sign-in__label">Password</label>
          <div class="sign-in__input-wrapper">
            <input
              name="password"
              type="password" 
              placeholder="Password"
              v-model="password" 
              class="sign-in__input sign-in__input-password"
            />
          </div>
        </div>

        <div class="sign-in__btn-wrapper">
          <button 
            type="submit"
            class="sign-in__btn"
            :class="{'btn-success': !invalidForm}"
            :disabled="invalidForm"
          >
            <span class="sign-in__btn-text">Sign in</span>
          </button>
        </div>
      </form>
    </div>
    <div class="sign-in__footer">
      <label class="sign-up__label">New User?</label>
      <router-link  to="/sign-up" class="sign-up__link">
        <span class="sign-up__text">Sign up</span>
      </router-link>
    </div>
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
@import "../assets/styles/variables.scss";

.sign-in__wrapper {
  background: #fff;
  margin-top: 50px;
  border-radius: 8px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  .sign-in__header {
    padding-top: 2.5rem;
    width: 320px;
    margin: 20px auto;
    .sign-in__title {
      color: #000;
      font-size: 1.5rem;
      font-weight: 700;
    }
    span {
      color: #868e96;
      font-size: .8rem;
    }
  }
  .sign-in__body {

    .sign-in__form {
      width: 320px;
      margin: 20px auto;
      .sign-in__form-wrapper {
        position: relative;
        padding: 1rem 0 1.2rem;
        .sign-in__label {
          margin-bottom: .5rem;
          font-size: .7rem;
          color: #acacac;
          letter-spacing: .7px;
          margin-left: .5rem;
        }
        .sign-in__input-wrapper {
          position: relative;
          .sign-in__input {
            box-shadow: none;
            letter-spacing: .7px;
            margin-top: .5rem;
            border: 1px solid #aaa;
            height: 2rem;
            text-indent: 1rem;
            border-radius: 1rem;
            width: 100%;
            outline: none;
            &::placeholder {
              font-size: .8rem;
              color: #ccc;
            }
          }
          .sign-in__input__validate-icon {
             position: absolute;
             bottom: 5px;
             right: .25rem;
            .validate-error {
              color: $error-color;
              height: 1.5rem;
              width: 1.5rem;
            }
            .validate-pass {
              color: $pass-color;
              height: 1.5rem;
              width: 1.5rem;
            }
          }
        }
      }
      .sign-in__btn-wrapper{
        padding: 2rem 0 1rem;
        .sign-in__btn {
          width: 100%;
          height: 2.5rem;
          border-radius: 1.25rem;
          background-image: $secondary-gradient-color;
          background-size: 400% 100%;
          color: #fff;
          cursor: pointer;
          transition: all .4s ease-in-out;
          &:hover {
            background-position: 100% 0;
            transition: all .4s ease-in-out;
            .sign-in__btn-text {
              color: #fff;
            }
          }
          &:focus {
            outline: none;
          }
          &:disabled {
            background: $GRAY-3;
            transition: all .4s ease-in-out;
            cursor: not-allowed;
          }
        }
      }
    }
  }
  .sign-in__footer {
    width: 320px;
    margin: 0 auto;
    padding: 0 2rem 2rem;
    .sign-up__label {
      font-size: .8rem;
      color: #868e96;
    }
    .sign-up__link {
      .sign-up__text {
        color: #66a6ff; 
        font-size: .8rem;
      }
    }
  }
}
</style>

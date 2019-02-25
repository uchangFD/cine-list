<template>
  <div class="sign-up__wrapper">
    <div class="sign-up__header">
      <h2 class="sign-up__title">Create New Account</h2>
      <span>Welcom to Cine List</span>
    </div>
    <div class="sign-up__body">
      <form 
        @submit.prevent="onSubmit"
        class="sign-up__form"
      >
        <div class="sign-up__form-wrapper">
          <label class="sign-up__label">User Email</label>
          <div class="sign-up__input-wrapper">
            <input
              name="email" 
              type="text" 
              autocomplete="off"
              placeholder="Email"
              v-model="email" 
              v-validate="'required|email'" 
              class="sign-up__input sign-up__input-email"
            />
            <div 
              v-if="email.length"
              class="sign-up__input__validate-icon"
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
        
        <div class="sign-up__form-wrapper">
          <label class="sign-up__label">Password</label>
          <div class="sign-up__input-wrapper">
            <input
              name="password"
              type="password" 
              placeholder="Password"
              v-model="password" 
              v-validate="'required|min:6'"
              class="sign-up__input sign-up__input-password"
            />
            <div 
              v-if="password.length"
              class="sign-up__input__validate-icon"
            >
              <FontAwesome 
                v-if="errors.has('password')" 
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

        <div class="sign-up__form-wrapper">
          <label class="sign-up__label">Confirm Password</label>
          <div class="sign-up__input-wrapper">
            <input
              name="password-confirm"
              type="password" 
              placeholder="Password Again"
              v-model="confirm" 
              v-validate="'required|min:6'"
              class="sign-up__input sign-up__input-password-confirm"
            />
            <div 
              v-if="confirm.length"
              class="sign-up__input__validate-icon"
            >
              <FontAwesome 
                v-if="confirm !== password" 
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

        <div class="sign-up__btn-wrapper">
          <button 
            class="sign-up__btn"
            type="submit"
            :class="{'btn-success': !invalidForm}"
            :disabled="invalidForm"
          >
            <span class="sign-up__btn-text">Sign up</span>
          </button>
        </div>
      </form>
    </div>
    <div class="sign-up__footer">
      <label class="sign-up__label">Already Member? </label>
      <router-link  to="/login" class="sign-in__link">
        <span class="sign-in__link-text">Sign in</span>
      </router-link>
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
      email: '',
      password: '',
      confirm: ''
    }
  },

  computed: {
    invalidForm() {
      return !this.email || !this.password || (this.confirm !== this.password)
    }
  },
  methods: {
    onSubmit: function() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          localStorage.setItem('token', user.user.uid)
          this.$router.push('/home')
        })
        .catch(err => {alert(err.message)})
    },

    checkErrors: function() {
      this.$validator.validateAll().then(result => {
        return result && true
      })
    }
  }

}
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables.scss";

.sign-up__wrapper {
  background: #fff;
  margin-top: 50px;
  border-radius: 8px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 4px 15px 0 $baseline-secondary-color;
  .sign-up__header {
    padding-top: 2.5rem;
    width: 320px;
    margin: 20px auto;
    .sign-up__title {
      color: #000;
      font-size: 1.5rem;
      font-weight: 700;
    }
    span {
      color: #868e96;
      font-size: .8rem;
    }
  }
  .sign-up__body {
    .sign-up__form {
      width: 320px;
      margin: 20px auto;
      .sign-up__form-wrapper {
        position: relative;
        margin: 1rem 0 1.2rem;
        .sign-up__label {
          margin-bottom: .5rem;
          font-size: .7rem;
          color: #acacac;
          letter-spacing: .7px;
          margin-left: .5rem;
        }
        .sign-up__input-wrapper {
          position: relative;
          .sign-up__input {
            margin-top: .5rem;
            border: 1px solid #aaa;
            height: 2rem;
            text-indent: 1rem;
            border-radius: 1rem;
            width: 100%;
            outline: none;
          }
          .sign-up__input__validate-icon {
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
      .sign-up__btn-wrapper{
        padding: 2rem 0 1rem;
        .sign-up__btn {
          width: 100%;
          height: 2.5rem;
          border-radius: 1.25rem;
          background-image: $secondary-gradient-color;
          background-size: 400% 100%;
          color: #fff;
          cursor: pointer;
          transition: all .4s ease-in-out;
          box-shadow: 0 4px 15px 0 $secondary-gradient-color-shadow;
          &:hover {
            background-position: 100% 0;
            transition: all .4s ease-in-out;
            .sign-up__btn-text {
              color: #fff;
            }
          }
          &:focus {
            outline: none;
          }
          &:disabled {
            background: $GRAY-3;
            box-shadow: 0 4px 15px 0 $GRAY-4;
            transition: all .4s ease-in-out;
            cursor: not-allowed;
          }

        }
      }
    }
  }
  .sign-up__footer {
    width: 320px;
    margin: 0 auto;
    padding: 0 2rem 2rem;
    .sign-up__label {
      font-size: .8rem;
      color: #868e96;
    }
    .sign-in__link {
      .sign-in__link-text {
        color: #66a6ff;
        font-size: .8rem;
      }    
    }
  }
}

</style>

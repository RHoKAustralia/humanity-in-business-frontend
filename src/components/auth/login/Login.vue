<template>
  <div class="login">
    <h2>{{ $t('auth.welcome') }}</h2>

    <div v-show="loginError" class="input-group text-danger">
        {{ loginError }}
    </div>
    <form method="post" @submit.prevent="login" name="login">
      <div class="form-group">
        <div class="input-group">
          <input type="text" v-model="email" required="required"/>
          <label class="control-label" for="email">
            {{ $t('auth.email') }}
          </label>
          <i class="bar"/>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input type="password" v-model="password" required="required"/>
          <label class="control-label" for="password">
            {{ $t('auth.password') }}
          </label>
          <i class="bar"/>
        </div>
      </div>
      <div class="d-flex align--center justify--space-between">
        <button class="btn btn-primary" type="submit">
          {{ $t('auth.login') }}
        </button>
        <router-link class='link flex-center pl-2 text-center' :to="{name: 'signup'}">
          {{ $t('auth.createAccount') }}
        </router-link>
          <img src="./linked-in.svg" class="">
      </div>
    </form>
  </div>
</template>

<script>
import loginService from '../../../services/loginService'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
      loginError: null
    }
  },
  methods: {
    login () {
      this.loginError = null
      loginService.login({
        email: this.email,
        password: this.password,
      }).then(loginSuccess => {
        if (loginSuccess !== false) {
          this.$router.push({ name: 'sdg' })
        } else {
          this.loginError = 'Invalid credentials'
        }
      })
    },
  }
}

</script>

<style lang="scss">

.vuestic-checkbox__square::before {
  background-color: #E89A43 !important;
  color: #E89A43 !important;
}

.link {
  color: #E89A43;
}

.link:hover {
  color: #DE8143;
}

.control-label {
  color: #E89A43 !important;
}

.btn.btn-primary {
  background-color: #E89A43;
  box-shadow: 2px 2px 2px 1px rgba(255, 193, 127, 0.5);
}

.btn.btn-primary:hover {
  background-color: #DE8143;
}

.link.flex-center.pl-2.text-center {
  color: #E89A43;
}

.login {

  @include media-breakpoint-down(md) {
    width: 100%;
    padding-right: 2rem;
    padding-left: 2rem;
    .down-container {
      display: none;
    }
  }

  h2 {
    text-align: center;
  }
  width: 21.375rem;

  .down-container {
    margin-top: 3.125rem;
  }
}
</style>

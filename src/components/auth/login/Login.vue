<template>
  <div class="login">
    <h2>{{ $t('auth.welcome') }}</h2>

    <div v-if="errors" class="input-group text-danger">
      <li v-for="(v, k) in errors" :key="k">{{ k }} {{ v | error }}</li>
    </div>
    <form v-on:submit.prevent="onSubmit(email, password)">
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
import { mapState } from 'vuex'
import { LOGIN } from '@/store/actions/auth'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    onSubmit (email, password) {
      this.$store
        .dispatch(LOGIN, { email, password })
        .then(() => this.$router.push({ name: '' })) // @todo add the dashboard route
    }
  },
  computed: {
    ...mapState({
      errors: state => state.auth.errors
    })
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

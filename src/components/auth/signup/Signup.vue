<template>
  <div class="signup">
    <h2>{{ $t('auth.createNewAccount') }}</h2>
    <form method="post" action="/#/auth/signup" name="signup">
			<div class="form-group">
				<div class="input-group">
					<input type="text" id="name" v-model="name" required="required"/>
					<label class="control-label" for="name">{{ $t('Name') }}</label><i class="bar"></i>
				</div>
			</div>
			<div class="form-group">
				<div class="input-group">
					<input type="text" id="company" v-model="company" required="required"/>
					<label class="control-label" for="company">{{ $t('Company') }}</label><i class="bar"></i>
				</div>
			</div>
			<div class="form-group">
				<div class="input-group">
					<input type="text" id="skills" v-model="skills" required="required"/>
					<label class="control-label" for="skils">{{ $t('Skills') }}</label><i class="bar"></i>
				</div>
			</div>
      <div class="form-group">
        <div class="input-group">
          <input type="text" id="email" v-model="email" required="required"/>
          <label class="control-label" for="email">{{ $t('auth.email') }}</label><i class="bar"></i>
        </div>
      </div>
      <div class="form-group">
        <div class="input-group">
          <input type="password" id="password" v-model="password" required="required"/>
          <label class="control-label" for="password">{{ $t('auth.password') }}</label><i class="bar"></i>
        </div>
      </div>
      <vuestic-checkbox name="agree-to-terms" v-model="agreedToTerms">
        <template slot="label">
          {{ $t('auth.agree') }}
          <a class="link" href="#">{{ $t('auth.termsOfUse') }}</a>
        </template>
      </vuestic-checkbox>
      <div
        class="d-flex align--center justify--space-between down-container">
        <button class="btn btn-primary" type="submit">
          {{ $t('auth.signUp') }}
        </button>
        <router-link class='link pl-2 text-center' :to="{name: 'login'}">
          {{ $t('auth.alreadyJoined') }}
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
import loginService from '../../../services/loginService'
export default {
  name: 'signup',
  data () {
    return {
      name: '',
      company: '',
      skills: '',
      email: '',
      password: '',
      agreedToTerms: true,
      company: '',
      skills: '',
      name: '',
    }
  },
  methods: {
    register () {
      loginService.register({
        email: this.email,
        password: this.password,
      })
    },
  }
}
</script>

<style lang="scss">
.signup {
  @include media-breakpoint-down(md) {
    width: 100%;
    padding-right: 2rem;
    padding-left: 2rem;
  }
  h2 {
    text-align: center;
		.h2 {
    font-size: 2rem;
    margin-top: -20px auto;
}
  }
  width: 21.375rem;
  .down-container {
    margin-top: 2.6875rem;
  }
}
</style>

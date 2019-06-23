<template>
  <div class="auth-layout">
    <div class="nav d-lg-none">
      <router-link :to="{path: '/'}">
        <vuestic-icon-vuestic/>
      </router-link>
    </div>
    <div class="main va-row" style="
    background: #FFFBF0;">
		<div class="auth-layout__auth-wallpaper flex flex-start slogan md4">

				<div class="auth-layout__auth-wallpaper__cross-line"/>

						<h4 class="slogan">Join the movement that creates
							<span class="slogan-bit auth-layout">purposeful</span> businesses.</h4>

				</router-link>

		</div>
      <div class="auth-content flex lg8 xs12 fill-height">
        <div class="flex-center">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// d-none and d-lg-flex were deleted, bug will be fixed in the nearest update
import VuesticIconVuestic
  from '../../vuestic-theme/vuestic-components/vuestic-icon/VuesticIconVuestic'

export default {
  name: 'AuthLayout',
  components: { VuesticIconVuestic },
}
</script>

<style lang="scss">
.slogan {
	width: 250px;
	padding: 10px 0 0 50px;
	color: #E89A43;
  font-weight: bold;
  font-size: 30px;
}

.slogan-bit {
	color: #2100ED;
}

.flex-start {
	align-items: flex-start;
	align-content: flex-start;
}

.logo-hib {
  width: 50px;
  height: 50px;
}

.auth-layout {
  height: 100vh;
	background-color: #FFFBF0;

  &__auth-wallpaper {
    position: relative;
    background-color: $top-nav-bg;
    overflow: hidden;
    background-image: url('comp-heart-illo.png');
		background-repeat: no-repeat;
		background-size: contain;
		background-position: bottom;
		background-color: #FFFBF0;
		align-items: flex-start;
    margin-bottom: 100px;
    &__logo {
      z-index: 2;
      position: absolute;
      height: $auth-wallpaper-ivuestic-h;
      width: 100%;
    }
    .vuestic-icon-vuestic {
      height: $auth-wallpaper-ivuestic-h;
      width: 100%;
    }

    &__cross-line {
      background-image: url('backgroundimg.png');
    }
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: center;
    height: $top-mobile-nav-height;
    background-color: $top-nav-bg;
    .vuestic-icon-vuestic {
      height: $auth-mobile-nav-ivuestic-h;
      width: 100%;
    }
  }
  .main {
    margin: 0;
    height: 100vh;
    .auth-content {
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: white;
    }
  }

  @include media-breakpoint-down(md) {
    .main {
      height: $auth-mobile-main-h;
      .auth-content {
        align-items: flex-start;
        padding-top: $auth-content-padding-t;
      }
      .auth-wallpaper {
        display: none;
      }
    }
  }
}
</style>

<template>
  <div class="header">
    <div class="logo">
      <img src="../auth/login/HIB-logo.jpg" alt="">
    </div>
    <p>Humanity in Business</p>
    <div class="breadcrumbs">
      <router-link class='crumb' :to="{name: 'signup'}">
        Sign Up
      </router-link>
      <router-link class='crumb' :to="{name: 'sdg'}">
        Choose Your Fight
      </router-link>
      <router-link class='crumb' :to="{name: 'done'}">
        Done
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SignUpHeader',
  props: {
    currentPage: String
  }
}
</script>

<style lang="scss">

.header{
  display: flex;
  height: 3em;
  background-color: white;
  box-shadow: 0 3px 8px #ccc;
  margin-bottom: 3em;

  .logo{
    height: 100%;
    margin: 0 0 0 1em;

    img{
      height: 100%;
      padding: 0.3em 0;
    }
  }

  p{
    line-height: 3em;
    margin: 0 1em;
  }

  .breadcrumbs{
    margin-left: 20em;

    .crumb{
      line-height: 3em;
      color: black;

      &:hover{
        color: $brand-primary;
      }

      &:last-child::after {
        display: none;
      }

      &::after {
        padding: 0 5px;
        display: inline-block;
        content: $breadcrumbs-arrow-content;
        vertical-align: middle;
        color: $brand-primary;
        font-size: $breadcrumbs-arrow-font;
        font-family: FontAwesome;
      }
    }

    .bold{
      font-weight: 700;
    }
  }
}

</style>

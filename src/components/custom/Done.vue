<template>
  <div class="done">
    <SignUpHeader currentPage="done"/>
    <div class="container">
      <div class="words-container">
        <h1>Woo Hoo!</h1>
        <p>
          You are one step closer to helping positive changes in the world.
        </p>
        <div class="d-flex align--center justify--space-between down-container">
          <button class="btn btn-primary" type="button" v-on:click="sdgSubmit">
            Done
          </button>
        </div>
      </div>
      <div class="img-container">
        <img src="../../assets/trophy-lady.png" alt="Trophy Lady"/>
      </div>
    </div>
  </div>
</template>

<script>
import SignUpHeader from './SignUpHeader'

export default {
  name: 'done',
  components: { SignUpHeader }
}
</script>

<style lang="scss">
.done{
  height: 100vh;

  .container{
    padding: 8% 0 0 0;
    display: flex;
    max-width: 40%;
    margin: 0 auto;

    .words-container{
      h1{

      }
    }

    .img-container{
      height: 50vh;

      img{
        height: 100%;
      }
    }
  }
}
</style>

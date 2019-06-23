<template>
  <div class="dashboard">
    <div class="flex md12">
      <div class="cards-container">
        <!-- eslint-disable vue/valid-v-for -->
        <template v-for="loop in listLoops">
          <template v-for="challenge in challenges">
          <vuestic-card
            :key="challenge.id"
            title-on-image
            overlay
            :image="challenge.image_url">
            {{ challenge.title }}
            <p class="pt-3 mb-0">
              <a class="pr-2 card-link-secondary" href="#">
                {{ challenge.challenge_date }}
              </a>
            </p>
            <p class="pt-3 mb-0">
              <a class="pr-2 card-link-secondary" href="#">
                {{ challenge.points }} pts
              </a>
            </p>
          </vuestic-card>
        </template>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import VuesticCard
  from '../../vuestic-theme/vuestic-components/vuestic-card/VuesticCard'
import ChallengeService
  from '../../services/challengeService'
import challengeService from '../../services/challengeService';

export default {
  name: 'dashboard',
  components: {
    VuesticCard
  },

  mounted() {
    this.getChallenges();
  },

  data () {
    return {
      challenges: [],
      listLoops: 6,
      isShown: false,
    }
  },

  methods: {
    addCards () {
      this.isShown = true
      setTimeout(() => {
        this.isShown = false
        ++this.listLoops
      }, 1000)
    },
    getChallenges () {
      challengeService.getUpcomingChallenges().then(
        response => {
          this.challenges = response.data;
        });
    }
  }
}

</script>
<style lang="scss" scoped>
$singleGutter: #{(19/16)}rem;
.cards-container {
  display: flex;
  flex-wrap: wrap;
  margin: -$singleGutter;
  align-items: flex-start;
  .vuestic-card {
    margin: $singleGutter;
    width: calc(33% - #{$singleGutter} * 2);
    @include media-breakpoint-only(xl) {
      width: calc(33.3% - #{$singleGutter} * 2);
    }
    @include media-breakpoint-only(lg) {
      width: calc(33.3% - #{$singleGutter} * 2);
    }
    @include media-breakpoint-only(sm) {
      width: calc(50% - #{$singleGutter} * 2);
    }
    @include media-breakpoint-only(xs) {
      width: calc(100% - #{$singleGutter} * 2);
    }
  }
}
.pre-loader-container {
  height: 50px;
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>

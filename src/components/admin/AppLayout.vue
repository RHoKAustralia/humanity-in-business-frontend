<template>
  <vuestic-layout v-layout>
    <app-navbar :isOpen="opened" @toggle-menu="toggleSidebar"/>
    <main
      slot="content"
      id="content"
      class="content va-layout gutter--lg fluid"
      role="main"
    >
      <vuestic-pre-loader
        v-show="isLoading"
        class="pre-loader"
      />
      <router-view/>
    </main>
    <span slot="footer">
      ©2019 &nbsp;<a href="https://www.humanityinbusiness.com.au/" target="_blank" style="color: #34495e"> Humanity in Business</a>
    </span>
  </vuestic-layout>
</template>

<script>
import VuesticLayout
  from '../../vuestic-theme/vuestic-components/vuestic-layout/VuesticLayout'
import AppNavbar from './app-navbar/AppNavbar'
import AppBreadcrumbs from './app-breadcrumbs/AppBreadcrumbs'
import Layout from '../../vuestic-theme/vuestic-directives/Layout'
import { mapGetters } from 'vuex'

export default {
  name: 'app-layout',
  components: {
    VuesticLayout,
    AppNavbar,
    AppBreadcrumbs,
  },
  directives: {
    layout: Layout,
  },
  data () {
    return {
      opened: true,
    }
  },
  methods: {
    toggleSidebar (opened) {
      this.opened = opened
    },
  },
  computed: {
    ...mapGetters([
      'isLoading',
    ]),
  },
}
</script>

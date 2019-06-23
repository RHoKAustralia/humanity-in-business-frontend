<template>
  <hib-navbar>
    <header-selector slot="selector" :isOpen.sync="valueProxy"/>
    <span slot="logo">
      <hib-icon/>
    </span>
    <span slot="center">
    </span>

    <profile-dropdown class="col nav-item">
      <!-- todo use the profile image here -->
      <img src="https://i.imgur.com/nfa5itq.png"/>
    </profile-dropdown>
  </hib-navbar>

</template>

<script>
import HibIcon
  from '../../../hib-theme/hib-components/hib-icon/HibIcon'
import HibNavbar
  from '../../../hib-theme/hib-components/hib-navbar/HibNavbar'
import HeaderSelector from './components/HeaderSelector'
import ProfileDropdown from './components/dropdowns/ProfileDropdown'

export default {
  name: 'app-navbar',

  components: {
    HibIcon,
    HibNavbar,
    HeaderSelector,
    ProfileDropdown,
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    valueProxy: {
      get () {
        return this.isOpen
      },
      set (opened) {
        this.$emit('toggle-menu', opened)
      },
    },
  },
}
</script>

<template>
  <div class="app-root">
    <router-view></router-view>
  </div>
</template>

<script>
import ThemeSettings from "./components/ThemeSettings"
import AppEvents from "./event"

export default {
  components: {
    ThemeSettings
  },
  data() {
    return {
      rightDrawer: false,
      snackbar: {
        show: false,
        text: "",
        color: ""
      }
    }
  },
  created() {
    // add app events
  },
  methods: {
    openThemeSettings() {
      this.$vuetify.goTo(0)
      this.rightDrawer = !this.rightDrawer
    }
  }
}
</script>

<style scoped>
.setting-fab {
  top: 50% !important;
  right: 0;
  border-radius: 0;
}
</style>

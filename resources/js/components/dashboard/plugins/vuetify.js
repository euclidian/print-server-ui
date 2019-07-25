import Vue from "vue"
import Vuetify from "vuetify"
import "../theme/default.styl"
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify, {
  theme: {
    primary: "#3AA6B7",
    secondary: "#6A2B6F",
    accent: "#15173F",
    error: "#D83236",
    info: "#426C95",
    success: "#4CAF50",
    warning: "#F4D550"
  },
  customProperties: true
})

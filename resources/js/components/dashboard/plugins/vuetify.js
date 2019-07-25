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
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107"
  },
  customProperties: true
})

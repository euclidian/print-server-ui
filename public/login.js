(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/views/auth/Login.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/views/auth/Login.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: false,
      model: {
        username: "",
        password: ""
      },
      result: {
        token_type: '',
        expires_in: '',
        access_token: '',
        refresh_token: ''
      },
      alert: false,
      error_type: '',
      btn_disabled: false
    };
  },
  methods: {
    login: function login() {
      var _this = this;

      if (this.model.password != "" && this.model.username != "") {
        this.loading = true;
        this.btn_disabled = true;
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/print/login', this.model).then(function (response) {
          _this.result = response.data;
          console.log(response);
          console.log(_this.result.token_type);
          console.log(_this.result.expires_in);
          console.log(_this.result.access_token);
          console.log(_this.result.refresh_token);

          if (_this.result.token_type != null) {
            // handle login
            _this.$router.push("/dashboard");

            _this.$swal({
              text: 'Yeay..!',
              title: 'Login Success',
              showConfirmButton: false,
              timer: 1500,
              type: 'success'
            });
          }
        })["catch"](function (e) {
          _this.alert = true;
          _this.error_type = "Username or Password are Incorrect";
          _this.loading = false;
          _this.btn_disabled = false;

          _this.errors.push(e);
        });
      } else {
        this.alert = true;
        this.error_type = "Please input Username and Password";
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/views/auth/Login.vue?vue&type=template&id=21e44809&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/views/auth/Login.vue?vue&type=template&id=21e44809&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { staticClass: "elevation-0 pa-3 login-card primary" },
    [
      _c(
        "v-card-text",
        [
          _c("div", { staticClass: "layout column align-center" }, [
            _c("h3", { staticClass: "flex white--text" }, [
              _vm._v("WELCOME TO")
            ]),
            _vm._v(" "),
            _c(
              "h1",
              {
                staticClass: "flex mb-4 white--text font-weight-black display-2"
              },
              [_vm._v("PRINT SERVER")]
            )
          ]),
          _vm._v(" "),
          _c(
            "v-alert",
            {
              staticClass: "mb-3",
              attrs: {
                type: "error",
                "close-text": "Close Alert",
                color: "error",
                dark: "",
                dismissible: "",
                transition: "fade-transition"
              },
              model: {
                value: _vm.alert,
                callback: function($$v) {
                  _vm.alert = $$v
                },
                expression: "alert"
              }
            },
            [
              _vm._v("\n            Error"),
              _c("br"),
              _c("hr"),
              _vm._v("\n            " + _vm._s(_vm.error_type) + "\n        ")
            ]
          ),
          _vm._v(" "),
          _c(
            "v-form",
            [
              _c("v-text-field", {
                staticClass: "font-weight-black",
                attrs: {
                  rounded: "",
                  solo: "",
                  flat: "",
                  "prepend-inner-icon": "person",
                  name: "username",
                  label: "Username",
                  placeholder: "USERNAME",
                  type: "text"
                },
                model: {
                  value: _vm.model.username,
                  callback: function($$v) {
                    _vm.$set(_vm.model, "username", $$v)
                  },
                  expression: "model.username"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                staticClass: "font-weight-black",
                attrs: {
                  rounded: "",
                  solo: "",
                  flat: "",
                  "prepend-inner-icon": "lock",
                  name: "password",
                  label: "Password",
                  placeholder: "PASSWORD",
                  id: "password",
                  type: "password"
                },
                model: {
                  value: _vm.model.password,
                  callback: function($$v) {
                    _vm.$set(_vm.model, "password", $$v)
                  },
                  expression: "model.password"
                }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "login-btn" },
        [
          _c(
            "v-btn",
            {
              staticClass: "font-weight-black",
              attrs: {
                block: "",
                color: "secondary",
                loading: _vm.loading,
                large: "",
                disabled: _vm.btn_disabled
              },
              on: { click: _vm.login }
            },
            [_vm._v("Login")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/dashboard/views/auth/Login.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/dashboard/views/auth/Login.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_21e44809_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=21e44809&scoped=true& */ "./resources/js/components/dashboard/views/auth/Login.vue?vue&type=template&id=21e44809&scoped=true&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/views/auth/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_21e44809_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_21e44809_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "21e44809",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/views/auth/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/views/auth/Login.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/dashboard/views/auth/Login.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/views/auth/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/views/auth/Login.vue?vue&type=template&id=21e44809&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/views/auth/Login.vue?vue&type=template&id=21e44809&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_21e44809_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=21e44809&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/views/auth/Login.vue?vue&type=template&id=21e44809&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_21e44809_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_21e44809_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
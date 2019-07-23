(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-messaging"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/chat/ChatHistory.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/components/chat/ChatHistory.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_chat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/chat */ "./resources/js/components/dashboard/api/chat.js");
/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/user */ "./resources/js/components/dashboard/api/user.js");
/* harmony import */ var _components_circle_VCircle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/circle/VCircle */ "./resources/js/components/dashboard/components/circle/VCircle.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util */ "./resources/js/components/dashboard/util/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__);
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
  components: {
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4___default.a,
    VCircle: _components_circle_VCircle__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      chats: _api_chat__WEBPACK_IMPORTED_MODULE_0__["Groups"]
    };
  },
  methods: {
    chatRoute: function chatRoute(id) {
      return "/chat/messaging/" + id;
    },
    firstLetter: function firstLetter(title) {
      return title.charAt(0);
    },
    formatChatTime: function formatChatTime(s) {
      return new Date(s).toLocaleDateString();
    },
    computeTitle: function computeTitle(item) {
      var username = item.users.length === 1 ? Object(_api_user__WEBPACK_IMPORTED_MODULE_1__["getUserById"])(item.users[0]).username : "";
      return item.users.length === 1 ? username : item.title;
    },
    randomAvatarColor: function randomAvatarColor(item) {
      return item.users.length === 1 ? "" : _util__WEBPACK_IMPORTED_MODULE_3__["default"].randomElement(["blue", "indigo", "success", "error", "pink"]);
    },
    chatStatusColor: function chatStatusColor(item) {
      return _util__WEBPACK_IMPORTED_MODULE_3__["default"].randomElement(["blue", "indigo", "success", "error", "pink"]);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/chat/ChatMessaging.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/components/chat/ChatMessaging.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatHistory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatHistory */ "./resources/js/components/dashboard/components/chat/ChatHistory.vue");
/* harmony import */ var _ChatWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatWindow */ "./resources/js/components/dashboard/components/chat/ChatWindow.vue");
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
  components: {
    ChatHistory: _ChatHistory__WEBPACK_IMPORTED_MODULE_0__["default"],
    ChatWindow: _ChatWindow__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {};
  },
  computed: {
    showSidebar: function showSidebar() {
      return this.$route.params.uuid === undefined;
    },
    showWindow: function showWindow() {
      return this.$route.params.uuid !== undefined;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/chat/ChatHistory.vue?vue&type=template&id=49d311e8&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/components/chat/ChatHistory.vue?vue&type=template&id=49d311e8& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "chat-history" },
    [
      _c(
        "v-toolbar",
        { staticClass: "chat-history-toolbar", attrs: { dense: "" } },
        [
          _c("v-text-field", {
            attrs: {
              flat: "",
              solo: "",
              "full-width": "",
              clearable: "",
              "prepend-icon": "search",
              label: "Search"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vue-perfect-scrollbar",
        { staticClass: "chat-history--scrollbar" },
        [
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "v-list",
            { staticClass: "chat-history--list", attrs: { "two-line": "" } },
            [
              _c("v-subheader", [_vm._v("History")]),
              _vm._v(" "),
              _vm._l(_vm.chats, function(item, index) {
                return [
                  _c("v-divider", { key: index }),
                  _vm._v(" "),
                  _c(
                    "v-list-tile",
                    {
                      key: item.title + index,
                      staticClass: "chat-list",
                      attrs: { avatar: "", to: _vm.chatRoute(item.uuid) }
                    },
                    [
                      _c(
                        "v-list-tile-avatar",
                        { attrs: { color: _vm.randomAvatarColor(item) } },
                        [
                          item.users.length === 1
                            ? _c("img", { attrs: { src: item.user.avatar } })
                            : _c(
                                "span",
                                { staticClass: "white--text headline" },
                                [_vm._v(_vm._s(_vm.firstLetter(item.title)))]
                              )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        [
                          _c("v-list-tile-title", [
                            _vm._v(" " + _vm._s(_vm.computeTitle(item)))
                          ]),
                          _vm._v(" "),
                          _c("v-list-tile-sub-title", [
                            _vm._v("Some Latest message")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-action",
                        [
                          _c("v-list-tile-action-text", [
                            _vm._v(
                              "\n              " +
                                _vm._s(_vm.formatChatTime(item.created_at)) +
                                "\n            "
                            )
                          ]),
                          _vm._v(" "),
                          _c("v-circle", {
                            attrs: {
                              dot: "",
                              small: "",
                              color: _vm.chatStatusColor(item)
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]
              })
            ],
            2
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/chat/ChatMessaging.vue?vue&type=template&id=42496d58&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/components/chat/ChatMessaging.vue?vue&type=template&id=42496d58& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
    "v-container",
    {
      staticClass: "fill-height pa-0 ma-0 messaging fluid",
      attrs: { id: "messaging" }
    },
    [
      !_vm.$vuetify.breakpoint.smAndDown
        ? [
            _c(
              "v-layout",
              { attrs: { row: "" } },
              [
                _c(
                  "v-flex",
                  { staticClass: "white", attrs: { lg3: "" } },
                  [_c("chat-history")],
                  1
                ),
                _vm._v(" "),
                _c("v-flex", { attrs: { lg9: "" } }, [_c("chat-window")], 1)
              ],
              1
            )
          ]
        : [
            _c(
              "v-layout",
              { attrs: { column: "" } },
              [
                _vm.showSidebar
                  ? _c(
                      "v-flex",
                      { staticClass: "white", attrs: { sm12: "" } },
                      [_c("chat-history")],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.showWindow
                  ? _c(
                      "v-flex",
                      { attrs: { sm12: "" } },
                      [_c("chat-window")],
                      1
                    )
                  : _vm._e()
              ],
              1
            )
          ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/dashboard/components/chat/ChatHistory.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/components/dashboard/components/chat/ChatHistory.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatHistory_vue_vue_type_template_id_49d311e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatHistory.vue?vue&type=template&id=49d311e8& */ "./resources/js/components/dashboard/components/chat/ChatHistory.vue?vue&type=template&id=49d311e8&");
/* harmony import */ var _ChatHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatHistory.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/components/chat/ChatHistory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChatHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatHistory_vue_vue_type_template_id_49d311e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatHistory_vue_vue_type_template_id_49d311e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/components/chat/ChatHistory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/components/chat/ChatHistory.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/components/chat/ChatHistory.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatHistory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/chat/ChatHistory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHistory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/components/chat/ChatHistory.vue?vue&type=template&id=49d311e8&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/components/chat/ChatHistory.vue?vue&type=template&id=49d311e8& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHistory_vue_vue_type_template_id_49d311e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatHistory.vue?vue&type=template&id=49d311e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/chat/ChatHistory.vue?vue&type=template&id=49d311e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHistory_vue_vue_type_template_id_49d311e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatHistory_vue_vue_type_template_id_49d311e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/dashboard/components/chat/ChatMessaging.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/dashboard/components/chat/ChatMessaging.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatMessaging_vue_vue_type_template_id_42496d58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatMessaging.vue?vue&type=template&id=42496d58& */ "./resources/js/components/dashboard/components/chat/ChatMessaging.vue?vue&type=template&id=42496d58&");
/* harmony import */ var _ChatMessaging_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatMessaging.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/components/chat/ChatMessaging.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChatMessaging_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatMessaging_vue_vue_type_template_id_42496d58___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatMessaging_vue_vue_type_template_id_42496d58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/components/chat/ChatMessaging.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/components/chat/ChatMessaging.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/components/chat/ChatMessaging.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatMessaging_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatMessaging.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/chat/ChatMessaging.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatMessaging_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/components/chat/ChatMessaging.vue?vue&type=template&id=42496d58&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/components/chat/ChatMessaging.vue?vue&type=template&id=42496d58& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatMessaging_vue_vue_type_template_id_42496d58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatMessaging.vue?vue&type=template&id=42496d58& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/chat/ChatMessaging.vue?vue&type=template&id=42496d58&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatMessaging_vue_vue_type_template_id_42496d58___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatMessaging_vue_vue_type_template_id_42496d58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
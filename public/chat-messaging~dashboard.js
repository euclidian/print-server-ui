(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-messaging~dashboard"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/chat/ChatWindow.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/components/chat/ChatWindow.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_chat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/chat */ "./resources/js/components/dashboard/api/chat.js");
/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/user */ "./resources/js/components/dashboard/api/user.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2__);
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
  components: {
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  props: {
    uuid: {
      type: String,
      "default": ""
    },
    height: {
      type: String,
      "default": null
    }
  },
  computed: {
    chat: function chat() {
      var chatOrigin = {
        title: "Chat",
        users: [],
        messages: []
      };
      var chat = Object(_api_chat__WEBPACK_IMPORTED_MODULE_0__["getChatById"])(this.$route.params.uuid);
      return Object.assign(chatOrigin, chat);
    },
    computeHeight: function computeHeight() {
      return {
        height: this.height || ""
      };
    }
  },
  methods: {
    getAvatar: function getAvatar(uid) {
      return Object(_api_user__WEBPACK_IMPORTED_MODULE_1__["getUserById"])(uid).avatar;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./resources/js/components/dashboard/components/circle/VCircle.styl":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--10-2!./node_modules/stylus-loader!./resources/js/components/dashboard/components/circle/VCircle.styl ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".circle {\n  border-radius: 3px;\n  padding: 0.25em 0.4em;\n  font-weight: 400;\n  line-height: 1.3;\n  font-size: 85%;\n}\n.circle:empty {\n  display: inline-block;\n  vertical-align: inherit;\n}\n.circle-pill {\n  color: #fff;\n  padding-right: 0.6em;\n  padding-left: 0.6em;\n  border-radius: 10rem;\n}\n.circle-sm {\n  line-height: 1.2;\n  padding-top: 1px;\n  padding-bottom: 2px;\n  font-size: 75%;\n}\n.circle-lg {\n  line-height: 1.5;\n  padding: 5px 7px;\n  font-size: 95%;\n}\n.circle-xl {\n  line-height: 1.7;\n  padding: 7px 9px;\n  font-size: 100%;\n}\n.circle-dot {\n  width: 8px;\n  height: 8px;\n  padding: 0;\n  border-radius: 100%;\n  vertical-align: middle;\n}\n.circle-dot.circle-sm {\n  width: 6px;\n  height: 6px;\n}\n.circle-dot.circle-lg {\n  width: 10px;\n  height: 10px;\n}\n.circle-dot.circle-xl {\n  width: 12px;\n  height: 12px;\n}\n.circle-ring {\n  position: relative;\n  width: 10px;\n  height: 10px;\n  padding: 0;\n  border-radius: 100%;\n  vertical-align: middle;\n}\n.circle-ring::after {\n  content: '';\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background-color: #fff;\n  transform: scale(1);\n  transition: 0.3s;\n}\n.circle-ring.circle-sm {\n  width: 8px;\n  height: 8px;\n}\n.circle-ring.circle-sm::after {\n  width: 4px;\n  height: 4px;\n}\n.circle-ring.circle-lg {\n  width: 12px;\n  height: 12px;\n}\n.circle-ring.circle-lg::after {\n  width: 8px;\n  height: 8px;\n}\n.circle-ring.circle-xl {\n  width: 14px;\n  height: 14px;\n}\n.circle-ring.circle-xl::after {\n  width: 10px;\n  height: 10px;\n}\n.circle-ring.fill::after {\n  transform: scale(0);\n}\n.circle-bold {\n  text-transform: uppercase;\n  font-weight: 500;\n  letter-spacing: 1px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/chat/ChatWindow.vue?vue&type=template&id=7986ab68&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/components/chat/ChatWindow.vue?vue&type=template&id=7986ab68& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "chat-room" },
    [
      _c(
        "v-toolbar",
        {
          staticClass: "white chat-room--toolbar",
          attrs: { card: "", dense: "", flat: "", light: "" }
        },
        [
          _c(
            "v-btn",
            { attrs: { icon: "" } },
            [
              _c("v-icon", { attrs: { color: "text--secondary" } }, [
                _vm._v("keyboard_arrow_left")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _vm.chat.users
            ? _vm._l(_vm.chat.users, function(user_id, index) {
                return _c(
                  "v-avatar",
                  {
                    key: index,
                    staticClass: "avatar-stack",
                    attrs: { size: "32" }
                  },
                  [
                    _c("img", {
                      attrs: { src: _vm.getAvatar(user_id), alt: "" }
                    })
                  ]
                )
              })
            : _vm._e(),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-toolbar-title", [_c("h4", [_vm._v("Chat Channel")])]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-tooltip",
            { attrs: { bottom: "" } },
            [
              _c(
                "v-btn",
                { attrs: { slot: "activator", icon: "" }, slot: "activator" },
                [
                  _c("v-icon", { attrs: { color: "text--secondary" } }, [
                    _vm._v("add")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("span", [_vm._v("Add user")])
            ],
            1
          )
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "vue-perfect-scrollbar",
        {
          staticClass: "chat-room--scrollbar grey lighten-5",
          style: _vm.computeHeight
        },
        [
          _c(
            "v-card-text",
            { staticClass: "chat-room--list pa-3" },
            [
              _vm._l(_vm.chat.messages, function(item, index) {
                return [
                  _c(
                    "div",
                    {
                      key: index,
                      staticClass: "messaging-item layout row my-4",
                      class: [index % 2 == 0 ? "reverse" : ""]
                    },
                    [
                      _c(
                        "v-avatar",
                        { staticClass: "indigo mx-1", attrs: { size: "40" } },
                        [
                          _c("img", {
                            attrs: { src: item.user.avatar, alt: "" }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "messaging--body layout column mx-2" },
                        [
                          _c(
                            "p",
                            {
                              staticClass: "pa-2",
                              class: [
                                index % 2 == 0 ? "primary white--text" : "white"
                              ],
                              attrs: { value: true }
                            },
                            [
                              _vm._v(
                                "\n              " +
                                  _vm._s(item.text) +
                                  "\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "caption px-2 text--secondary" },
                            [
                              _vm._v(
                                "\n              " +
                                  _vm._s(
                                    new Date(item.created_at).toLocaleString()
                                  ) +
                                  "\n            "
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("v-spacer")
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
      ),
      _vm._v(" "),
      _c(
        "v-card-actions",
        [
          _c(
            "v-text-field",
            {
              attrs: {
                "full-width": "",
                flat: "",
                clearable: "",
                solo: "",
                "append-icon": "send",
                label: "Type some message here"
              }
            },
            [
              _c(
                "v-icon",
                { attrs: { slot: "append-icon" }, slot: "append-icon" },
                [_vm._v("send")]
              ),
              _vm._v(" "),
              _c(
                "v-icon",
                {
                  staticClass: "mx-2",
                  attrs: { slot: "append-icon" },
                  slot: "append-icon"
                },
                [_vm._v("photo")]
              ),
              _vm._v(" "),
              _c(
                "v-icon",
                { attrs: { slot: "append-icon" }, slot: "append-icon" },
                [_vm._v("face")]
              )
            ],
            1
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

/***/ "./node_modules/vuetify/es5/mixins/colorable.js":
/*!******************************************************!*\
  !*** ./node_modules/vuetify/es5/mixins/colorable.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function isCssColor(color) {
    return !!color && !!color.match(/^(#|(rgb|hsl)a?\()/);
}
exports.default = _vue2.default.extend({
    name: 'colorable',
    props: {
        color: String
    },
    methods: {
        setBackgroundColor: function setBackgroundColor(color) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            if (isCssColor(color)) {
                data.style = _extends({}, data.style, {
                    'background-color': '' + color,
                    'border-color': '' + color
                });
            } else if (color) {
                data.class = _extends({}, data.class, _defineProperty({}, color, true));
            }
            return data;
        },
        setTextColor: function setTextColor(color) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            if (isCssColor(color)) {
                data.style = _extends({}, data.style, {
                    'color': '' + color,
                    'caret-color': '' + color
                });
            } else if (color) {
                var _color$toString$trim$ = color.toString().trim().split(' ', 2),
                    _color$toString$trim$2 = _slicedToArray(_color$toString$trim$, 2),
                    colorName = _color$toString$trim$2[0],
                    colorModifier = _color$toString$trim$2[1];

                data.class = _extends({}, data.class, _defineProperty({}, colorName + '--text', true));
                if (colorModifier) {
                    data.class['text--' + colorModifier] = true;
                }
            }
            return data;
        }
    }
});
//# sourceMappingURL=colorable.js.map

/***/ }),

/***/ "./resources/js/components/dashboard/components/chat/ChatWindow.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/components/dashboard/components/chat/ChatWindow.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChatWindow_vue_vue_type_template_id_7986ab68___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChatWindow.vue?vue&type=template&id=7986ab68& */ "./resources/js/components/dashboard/components/chat/ChatWindow.vue?vue&type=template&id=7986ab68&");
/* harmony import */ var _ChatWindow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChatWindow.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/components/chat/ChatWindow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChatWindow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChatWindow_vue_vue_type_template_id_7986ab68___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChatWindow_vue_vue_type_template_id_7986ab68___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/components/chat/ChatWindow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/components/chat/ChatWindow.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/components/chat/ChatWindow.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatWindow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatWindow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/chat/ChatWindow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatWindow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/components/chat/ChatWindow.vue?vue&type=template&id=7986ab68&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/components/chat/ChatWindow.vue?vue&type=template&id=7986ab68& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatWindow_vue_vue_type_template_id_7986ab68___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ChatWindow.vue?vue&type=template&id=7986ab68& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/chat/ChatWindow.vue?vue&type=template&id=7986ab68&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatWindow_vue_vue_type_template_id_7986ab68___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChatWindow_vue_vue_type_template_id_7986ab68___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/dashboard/components/circle/VCircle.js":
/*!************************************************************************!*\
  !*** ./resources/js/components/dashboard/components/circle/VCircle.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VCircle_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VCircle.styl */ "./resources/js/components/dashboard/components/circle/VCircle.styl");
/* harmony import */ var _VCircle_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_VCircle_styl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuetify_es5_mixins_colorable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/es5/mixins/colorable */ "./node_modules/vuetify/es5/mixins/colorable.js");
/* harmony import */ var vuetify_es5_mixins_colorable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuetify_es5_mixins_colorable__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [vuetify_es5_mixins_colorable__WEBPACK_IMPORTED_MODULE_1___default.a],
  props: {
    text: String,
    small: Boolean,
    large: Boolean,
    medium: Boolean,
    dot: Boolean,
    pill: Boolean,
    ring: Boolean
  },
  computed: {
    classes: function classes() {
      var classes = {
        "circle-sm": this.small,
        "circle-lg": this.medium,
        "circle-xl": this.large,
        "circle-ring": this.ring,
        "circle-dot": this.dot,
        "circle-pill": this.pill,
        "theme--light": this.light,
        "theme--dark": this.dark
      };
      return classes;
    }
  },
  render: function render(h) {
    var data = {
      staticClass: "circle",
      "class": this.classes,
      attrs: {
        tabindex: this.disabled ? -1 : 0
      },
      on: this.$listeners
    };
    return h("span", data, [this.$slots["default"]]);
  }
});

/***/ }),

/***/ "./resources/js/components/dashboard/components/circle/VCircle.styl":
/*!**************************************************************************!*\
  !*** ./resources/js/components/dashboard/components/circle/VCircle.styl ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/postcss-loader/src??ref--10-2!../../../../../../node_modules/stylus-loader!./VCircle.styl */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./resources/js/components/dashboard/components/circle/VCircle.styl");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]);
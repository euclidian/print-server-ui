(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["social-widget"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/widgets/card/NameCard.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/components/widgets/card/NameCard.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  props: {
    name: {
      type: String,
      "default": ""
    },
    avatar: {
      type: Object,
      "default": null
    },
    jobTitle: {
      type: String,
      "default": ""
    },
    cardBgImage: {
      type: String
    },
    color: {
      type: String,
      "default": ""
    },
    dark: {
      type: Boolean,
      "default": false
    },
    bottomNav: {
      type: Boolean,
      "default": false
    },
    topNav: {
      type: Boolean,
      "default": false
    },
    mini: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {};
  },
  computed: {
    computeCardLayout: function computeCardLayout() {
      return this.mini ? "row" : "column";
    },
    computeTextAlgin: function computeTextAlgin() {
      return this.mini ? "text-sm-right" : "text-sm-center";
    },
    computeAvatarSize: function computeAvatarSize() {
      return this.mini ? "48" : "96";
    },
    showAvatar: function showAvatar() {
      return this.avatar !== null && this.avatar.src;
    },
    showBottomNav: function showBottomNav() {
      return this.mini === false && this.bottomNav;
    },
    showTopNav: function showTopNav() {
      return this.mini === false && this.topNav;
    }
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/widgets/card/ProfileCard.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/components/widgets/card/ProfileCard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/views/widgets/Social.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/views/widgets/Social.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_widgets_card_NameCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/widgets/card/NameCard */ "./resources/js/components/dashboard/components/widgets/card/NameCard.vue");
/* harmony import */ var _components_widgets_card_ProfileCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/widgets/card/ProfileCard */ "./resources/js/components/dashboard/components/widgets/card/ProfileCard.vue");
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
    NameCard: _components_widgets_card_NameCard__WEBPACK_IMPORTED_MODULE_0__["default"],
    ProfileCard: _components_widgets_card_ProfileCard__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      users: [{
        jobTitle: "Web Developer",
        name: "Michael Wang",
        avatar: {
          src: "https://randomuser.me/api/portraits/men/1.jpg",
          size: "36"
        }
      }, {
        jobTitle: "Web Designer",
        name: "Jessie J",
        color: "pink",
        dark: true,
        avatar: {
          src: "https://randomuser.me/api/portraits/women/1.jpg",
          size: "36"
        }
      }, {
        jobTitle: "Web Developer",
        name: "Jim J",
        color: "teal",
        dark: true,
        avatar: {
          src: "https://randomuser.me/api/portraits/men/10.jpg",
          size: "36"
        }
      }, {
        jobTitle: "Product Manager",
        name: "John Doe",
        dark: true,
        cardBgImage: "/static/bg/15.jpg",
        avatar: {
          src: "https://randomuser.me/api/portraits/men/5.jpg",
          size: "36"
        }
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/widgets/card/NameCard.vue?vue&type=style&index=0&id=57706187&lang=stylus&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/components/widgets/card/NameCard.vue?vue&type=style&index=0&id=57706187&lang=stylus&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".caption[data-v-57706187],\n.subheading[data-v-57706187] {\n  font-weight: 200;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/widgets/card/NameCard.vue?vue&type=style&index=0&id=57706187&lang=stylus&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/components/widgets/card/NameCard.vue?vue&type=style&index=0&id=57706187&lang=stylus&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--10-2!../../../../../../../node_modules/stylus-loader!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NameCard.vue?vue&type=style&index=0&id=57706187&lang=stylus&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/widgets/card/NameCard.vue?vue&type=style&index=0&id=57706187&lang=stylus&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/widgets/card/NameCard.vue?vue&type=template&id=57706187&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/components/widgets/card/NameCard.vue?vue&type=template&id=57706187&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "name-card" },
    [
      _c(
        "v-card",
        {
          ref: "card",
          attrs: { color: _vm.color, dark: _vm.dark, img: _vm.cardBgImage }
        },
        [
          _vm.showTopNav
            ? _c(
                "v-responsive",
                [
                  _c(
                    "v-layout",
                    {
                      staticClass: "ma-0",
                      attrs: { row: "", "justify-space-between": "" }
                    },
                    [
                      _c(
                        "v-flex",
                        { attrs: { xs2: "" } },
                        [
                          _c("v-icon", { attrs: { color: "pink" } }, [
                            _vm._v("favorite")
                          ])
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { staticClass: "text-sm-right", attrs: { xs2: "" } },
                        [_c("v-icon", [_vm._v("more_vert")])],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("v-card-text", [
            _c(
              "div",
              {
                staticClass: "layout ma-0 align-center",
                class: _vm.computeCardLayout
              },
              [
                _c(
                  "v-avatar",
                  { attrs: { size: _vm.computeAvatarSize, color: "primary" } },
                  [
                    _vm.showAvatar
                      ? _c("img", {
                          attrs: { src: _vm.avatar.src, alt: _vm.name }
                        })
                      : _c("span", { staticClass: "white--text headline" }, [
                          _vm._v(_vm._s(_vm.name.charAt(0)))
                        ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex", class: _vm.computeTextAlgin },
                  [
                    _c("div", { staticClass: "subheading" }, [
                      _vm._v(_vm._s(_vm.name))
                    ]),
                    _vm._v(" "),
                    _c("span", { staticClass: "caption" }, [
                      _vm._v(_vm._s(_vm.jobTitle))
                    ])
                  ]
                )
              ],
              1
            )
          ])
        ],
        1
      ),
      _vm._v(" "),
      _vm.showBottomNav
        ? _c(
            "v-bottom-nav",
            { attrs: { value: true, color: "transparent", height: 64 } },
            [
              _c(
                "v-btn",
                { attrs: { flat: "", color: "teal", value: "recent" } },
                [
                  _c("span", [_vm._v("Recent")]),
                  _vm._v(" "),
                  _c("v-icon", [_vm._v("history")])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                { attrs: { flat: "", color: "teal", value: "favorites" } },
                [
                  _c("span", [_vm._v("Favorites")]),
                  _vm._v(" "),
                  _c("v-icon", [_vm._v("favorite")])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                { attrs: { flat: "", color: "teal", value: "nearby" } },
                [
                  _c("span", [_vm._v("Nearby")]),
                  _vm._v(" "),
                  _c("v-icon", [_vm._v("place")])
                ],
                1
              )
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/widgets/card/ProfileCard.vue?vue&type=template&id=26abe5bd&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/components/widgets/card/ProfileCard.vue?vue&type=template&id=26abe5bd& ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "v-img",
        { attrs: { src: "/static/people/man/m1.jpg", height: "390" } },
        [
          _c(
            "v-layout",
            { staticClass: "media ma-0", attrs: { column: "" } },
            [
              _c(
                "v-card-title",
                [
                  _c(
                    "v-btn",
                    { attrs: { dark: "", icon: "" } },
                    [_c("v-icon", [_vm._v("chevron_left")])],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    { staticClass: "mr-3", attrs: { dark: "", icon: "" } },
                    [_c("v-icon", [_vm._v("edit")])],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    { attrs: { dark: "", icon: "" } },
                    [_c("v-icon", [_vm._v("more_vert")])],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("v-card-title", { staticClass: "white--text pl-5 pt-5" }, [
                _c("div", { staticClass: "display-1 pl-5 pt-5" }, [
                  _vm._v("Ali Conners")
                ])
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-list",
        { staticClass: "pa-0", attrs: { "two-line": "" } },
        [
          _c(
            "v-list-tile",
            { attrs: { href: "#" } },
            [
              _c(
                "v-list-tile-action",
                [
                  _c("v-icon", { attrs: { color: "indigo" } }, [
                    _vm._v("phone")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-tile-content",
                [
                  _c("v-list-tile-title", [_vm._v("(650) 555-1234")]),
                  _vm._v(" "),
                  _c("v-list-tile-sub-title", [_vm._v("Mobile")])
                ],
                1
              ),
              _vm._v(" "),
              _c("v-list-tile-action", [_c("v-icon", [_vm._v("chat")])], 1)
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-list-tile",
            { attrs: { href: "#" } },
            [
              _c("v-list-tile-action"),
              _vm._v(" "),
              _c(
                "v-list-tile-content",
                [
                  _c("v-list-tile-title", [_vm._v("(323) 555-6789")]),
                  _vm._v(" "),
                  _c("v-list-tile-sub-title", [_vm._v("Work")])
                ],
                1
              ),
              _vm._v(" "),
              _c("v-list-tile-action", [_c("v-icon", [_vm._v("chat")])], 1)
            ],
            1
          ),
          _vm._v(" "),
          _c("v-divider", { attrs: { inset: "" } }),
          _vm._v(" "),
          _c(
            "v-list-tile",
            { attrs: { href: "#" } },
            [
              _c(
                "v-list-tile-action",
                [
                  _c("v-icon", { attrs: { color: "indigo" } }, [_vm._v("mail")])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-tile-content",
                [
                  _c("v-list-tile-title", [_vm._v("aliconnors@example.com")]),
                  _vm._v(" "),
                  _c("v-list-tile-sub-title", [_vm._v("Personal")])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-list-tile",
            { attrs: { href: "#" } },
            [
              _c("v-list-tile-action"),
              _vm._v(" "),
              _c(
                "v-list-tile-content",
                [
                  _c("v-list-tile-title", [_vm._v("ali_connors@example.com")]),
                  _vm._v(" "),
                  _c("v-list-tile-sub-title", [_vm._v("Work")])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-divider", { attrs: { inset: "" } }),
          _vm._v(" "),
          _c(
            "v-list-tile",
            { attrs: { href: "#" } },
            [
              _c(
                "v-list-tile-action",
                [
                  _c("v-icon", { attrs: { color: "indigo" } }, [
                    _vm._v("location_on")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-tile-content",
                [
                  _c("v-list-tile-title", [_vm._v("1400 Main Street")]),
                  _vm._v(" "),
                  _c("v-list-tile-sub-title", [_vm._v("Orlando, FL 79938")])
                ],
                1
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/views/widgets/Social.vue?vue&type=template&id=26576c58&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/views/widgets/Social.vue?vue&type=template&id=26576c58& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "social" } },
    [
      _c(
        "v-container",
        { attrs: { "grid-list-xl": "", fluid: "" } },
        [
          _c(
            "v-layout",
            { attrs: { row: "", wrap: "" } },
            [
              _c("v-flex", { attrs: { sm12: "" } }, [
                _c("h4", [_vm._v("Mini Name Card")])
              ]),
              _vm._v(" "),
              _vm._l(_vm.users, function(item, index) {
                return _c(
                  "v-flex",
                  { key: "mini" + index, attrs: { lg3: "", sm12: "" } },
                  [
                    _c(
                      "name-card",
                      _vm._b({ attrs: { mini: "" } }, "name-card", item, false)
                    )
                  ],
                  1
                )
              }),
              _vm._v(" "),
              _c("v-flex", { attrs: { sm12: "" } }, [
                _c("h4", [_vm._v("Basic Name Card")])
              ]),
              _vm._v(" "),
              _vm._l(_vm.users, function(item, index) {
                return _c(
                  "v-flex",
                  { key: "basic" + index, attrs: { lg3: "", sm12: "" } },
                  [_c("name-card", _vm._b({}, "name-card", item, false))],
                  1
                )
              }),
              _vm._v(" "),
              _c("v-flex", { attrs: { sm12: "" } }, [
                _c("h4", [_vm._v("Basic Name Card with top nav")])
              ]),
              _vm._v(" "),
              _vm._l(_vm.users, function(item, index) {
                return _c(
                  "v-flex",
                  {
                    key: "basic-top-nav" + index,
                    attrs: { lg3: "", sm12: "" }
                  },
                  [
                    _c(
                      "name-card",
                      _vm._b(
                        { attrs: { "top-nav": "" } },
                        "name-card",
                        item,
                        false
                      )
                    )
                  ],
                  1
                )
              }),
              _vm._v(" "),
              _c("v-flex", { attrs: { sm12: "" } }, [
                _c("h4", [_vm._v("Bottom Nav Name Card")])
              ]),
              _vm._v(" "),
              _vm._l(_vm.users, function(item, index) {
                return _c(
                  "v-flex",
                  { key: "bottom-nav" + index, attrs: { lg3: "", sm12: "" } },
                  [
                    _c(
                      "name-card",
                      _vm._b(
                        { attrs: { "bottom-nav": "" } },
                        "name-card",
                        item,
                        false
                      )
                    )
                  ],
                  1
                )
              }),
              _vm._v(" "),
              _c("v-flex", { attrs: { sm12: "" } }, [
                _c("h4", [_vm._v("Contact Card")])
              ]),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg4: "", sm12: "" } },
                [_c("profile-card")],
                1
              )
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

/***/ "./resources/js/components/dashboard/components/widgets/card/NameCard.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/components/dashboard/components/widgets/card/NameCard.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NameCard_vue_vue_type_template_id_57706187_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NameCard.vue?vue&type=template&id=57706187&scoped=true& */ "./resources/js/components/dashboard/components/widgets/card/NameCard.vue?vue&type=template&id=57706187&scoped=true&");
/* harmony import */ var _NameCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NameCard.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/components/widgets/card/NameCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _NameCard_vue_vue_type_style_index_0_id_57706187_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NameCard.vue?vue&type=style&index=0&id=57706187&lang=stylus&scoped=true& */ "./resources/js/components/dashboard/components/widgets/card/NameCard.vue?vue&type=style&index=0&id=57706187&lang=stylus&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NameCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NameCard_vue_vue_type_template_id_57706187_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NameCard_vue_vue_type_template_id_57706187_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "57706187",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/components/widgets/card/NameCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/components/widgets/card/NameCard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/components/widgets/card/NameCard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NameCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NameCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/widgets/card/NameCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NameCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/components/widgets/card/NameCard.vue?vue&type=style&index=0&id=57706187&lang=stylus&scoped=true&":
/*!********************************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/components/widgets/card/NameCard.vue?vue&type=style&index=0&id=57706187&lang=stylus&scoped=true& ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NameCard_vue_vue_type_style_index_0_id_57706187_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--10-2!../../../../../../../node_modules/stylus-loader!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NameCard.vue?vue&type=style&index=0&id=57706187&lang=stylus&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/widgets/card/NameCard.vue?vue&type=style&index=0&id=57706187&lang=stylus&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NameCard_vue_vue_type_style_index_0_id_57706187_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NameCard_vue_vue_type_style_index_0_id_57706187_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NameCard_vue_vue_type_style_index_0_id_57706187_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NameCard_vue_vue_type_style_index_0_id_57706187_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_NameCard_vue_vue_type_style_index_0_id_57706187_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/dashboard/components/widgets/card/NameCard.vue?vue&type=template&id=57706187&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/components/widgets/card/NameCard.vue?vue&type=template&id=57706187&scoped=true& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NameCard_vue_vue_type_template_id_57706187_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./NameCard.vue?vue&type=template&id=57706187&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/widgets/card/NameCard.vue?vue&type=template&id=57706187&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NameCard_vue_vue_type_template_id_57706187_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NameCard_vue_vue_type_template_id_57706187_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/dashboard/components/widgets/card/ProfileCard.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/dashboard/components/widgets/card/ProfileCard.vue ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProfileCard_vue_vue_type_template_id_26abe5bd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileCard.vue?vue&type=template&id=26abe5bd& */ "./resources/js/components/dashboard/components/widgets/card/ProfileCard.vue?vue&type=template&id=26abe5bd&");
/* harmony import */ var _ProfileCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProfileCard.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/components/widgets/card/ProfileCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProfileCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProfileCard_vue_vue_type_template_id_26abe5bd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProfileCard_vue_vue_type_template_id_26abe5bd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/components/widgets/card/ProfileCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/components/widgets/card/ProfileCard.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/components/widgets/card/ProfileCard.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/widgets/card/ProfileCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/components/widgets/card/ProfileCard.vue?vue&type=template&id=26abe5bd&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/components/widgets/card/ProfileCard.vue?vue&type=template&id=26abe5bd& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCard_vue_vue_type_template_id_26abe5bd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProfileCard.vue?vue&type=template&id=26abe5bd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/widgets/card/ProfileCard.vue?vue&type=template&id=26abe5bd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCard_vue_vue_type_template_id_26abe5bd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProfileCard_vue_vue_type_template_id_26abe5bd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/dashboard/views/widgets/Social.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/dashboard/views/widgets/Social.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Social_vue_vue_type_template_id_26576c58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Social.vue?vue&type=template&id=26576c58& */ "./resources/js/components/dashboard/views/widgets/Social.vue?vue&type=template&id=26576c58&");
/* harmony import */ var _Social_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Social.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/views/widgets/Social.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Social_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Social_vue_vue_type_template_id_26576c58___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Social_vue_vue_type_template_id_26576c58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/views/widgets/Social.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/views/widgets/Social.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/dashboard/views/widgets/Social.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Social_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Social.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/views/widgets/Social.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Social_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/views/widgets/Social.vue?vue&type=template&id=26576c58&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/views/widgets/Social.vue?vue&type=template&id=26576c58& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Social_vue_vue_type_template_id_26576c58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Social.vue?vue&type=template&id=26576c58& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/views/widgets/Social.vue?vue&type=template&id=26576c58&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Social_vue_vue_type_template_id_26576c58___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Social_vue_vue_type_template_id_26576c58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["table"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/views/list/Table.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/views/list/Table.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/user */ "./resources/js/components/dashboard/api/user.js");
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
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      search: "",
      complex: {
        selected: [],
        headers: [{
          text: "Avatar",
          value: "avatar"
        }, {
          text: "Name",
          value: "name"
        }, {
          text: "Email",
          value: "email"
        }, {
          text: "Phone",
          value: "phone"
        }, {
          text: "Action",
          value: ""
        }],
        items: _api_user__WEBPACK_IMPORTED_MODULE_0__["Items"]
      },
      basic: {
        headers: [{
          text: "Dessert (100g serving)",
          align: "left",
          sortable: false,
          value: "name"
        }, {
          text: "Calories",
          value: "calories"
        }, {
          text: "Fat (g)",
          value: "fat"
        }, {
          text: "Carbs (g)",
          value: "carbs"
        }, {
          text: "Protein (g)",
          value: "protein"
        }, {
          text: "Iron (%)",
          value: "iron"
        }],
        items: [{
          value: false,
          name: "Frozen Yogurt",
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: "1%"
        }, {
          value: false,
          name: "Ice cream sandwich",
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: "1%"
        }, {
          value: false,
          name: "Eclair",
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: "7%"
        }, {
          value: false,
          name: "Cupcake",
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: "8%"
        }, {
          value: false,
          name: "Gingerbread",
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: "16%"
        }, {
          value: false,
          name: "Jelly bean",
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: "0%"
        }, {
          value: false,
          name: "Lollipop",
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: "2%"
        }, {
          value: false,
          name: "Honeycomb",
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: "45%"
        }, {
          value: false,
          name: "Donut",
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: "22%"
        }, {
          value: false,
          name: "KitKat",
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: "6%"
        }]
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/views/list/Table.vue?vue&type=template&id=e97c1d38&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/views/list/Table.vue?vue&type=template&id=e97c1d38& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "list-table" },
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
                _c("h3", [_vm._v("Complex Table")])
              ]),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg12: "" } },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-toolbar",
                        { attrs: { card: "", color: "white" } },
                        [
                          _c("v-text-field", {
                            staticClass: "hidden-sm-and-down",
                            attrs: {
                              flat: "",
                              solo: "",
                              "prepend-icon": "search",
                              placeholder: "Type something",
                              "hide-details": ""
                            },
                            model: {
                              value: _vm.search,
                              callback: function($$v) {
                                _vm.search = $$v
                              },
                              expression: "search"
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "v-btn",
                            { attrs: { icon: "" } },
                            [_c("v-icon", [_vm._v("filter_list")])],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-divider"),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        { staticClass: "pa-0" },
                        [
                          _c("v-data-table", {
                            staticClass: "elevation-1",
                            attrs: {
                              headers: _vm.complex.headers,
                              search: _vm.search,
                              items: _vm.complex.items,
                              "rows-per-page-items": [
                                10,
                                25,
                                50,
                                { text: "All", value: -1 }
                              ],
                              "item-key": "name",
                              "select-all": ""
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "items",
                                fn: function(props) {
                                  return [
                                    _c(
                                      "td",
                                      [
                                        _c("v-checkbox", {
                                          attrs: {
                                            primary: "",
                                            "hide-details": ""
                                          },
                                          model: {
                                            value: props.selected,
                                            callback: function($$v) {
                                              _vm.$set(props, "selected", $$v)
                                            },
                                            expression: "props.selected"
                                          }
                                        })
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c(
                                          "v-avatar",
                                          { attrs: { size: "32" } },
                                          [
                                            _c("img", {
                                              attrs: {
                                                src: props.item.avatar,
                                                alt: ""
                                              }
                                            })
                                          ]
                                        )
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("td", [_vm._v(_vm._s(props.item.name))]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(_vm._s(props.item.email))
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(_vm._s(props.item.phone))
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "td",
                                      [
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: {
                                              depressed: "",
                                              outline: "",
                                              icon: "",
                                              fab: "",
                                              dark: "",
                                              color: "primary",
                                              small: ""
                                            }
                                          },
                                          [_c("v-icon", [_vm._v("edit")])],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-btn",
                                          {
                                            attrs: {
                                              depressed: "",
                                              outline: "",
                                              icon: "",
                                              fab: "",
                                              dark: "",
                                              color: "pink",
                                              small: ""
                                            }
                                          },
                                          [_c("v-icon", [_vm._v("delete")])],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ]
                                }
                              }
                            ]),
                            model: {
                              value: _vm.complex.selected,
                              callback: function($$v) {
                                _vm.$set(_vm.complex, "selected", $$v)
                              },
                              expression: "complex.selected"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-flex", { attrs: { sm12: "" } }, [
                _c("h3", [_vm._v("Basic Table")])
              ]),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg12: "" } },
                [
                  _c("v-data-table", {
                    staticClass: "elevation-1",
                    attrs: {
                      headers: _vm.basic.headers,
                      items: _vm.basic.items,
                      "hide-actions": ""
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "items",
                        fn: function(props) {
                          return [
                            _c("td", [_vm._v(_vm._s(props.item.name))]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-xs-right" }, [
                              _vm._v(_vm._s(props.item.calories))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-xs-right" }, [
                              _vm._v(_vm._s(props.item.fat))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-xs-right" }, [
                              _vm._v(_vm._s(props.item.carbs))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-xs-right" }, [
                              _vm._v(_vm._s(props.item.protein))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-xs-right" }, [
                              _vm._v(_vm._s(props.item.iron))
                            ])
                          ]
                        }
                      }
                    ])
                  })
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

/***/ "./resources/js/components/dashboard/views/list/Table.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/dashboard/views/list/Table.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Table_vue_vue_type_template_id_e97c1d38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Table.vue?vue&type=template&id=e97c1d38& */ "./resources/js/components/dashboard/views/list/Table.vue?vue&type=template&id=e97c1d38&");
/* harmony import */ var _Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Table.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/views/list/Table.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Table_vue_vue_type_template_id_e97c1d38___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Table_vue_vue_type_template_id_e97c1d38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/views/list/Table.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/views/list/Table.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/dashboard/views/list/Table.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Table.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/views/list/Table.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/views/list/Table.vue?vue&type=template&id=e97c1d38&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/dashboard/views/list/Table.vue?vue&type=template&id=e97c1d38& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_e97c1d38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Table.vue?vue&type=template&id=e97c1d38& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/views/list/Table.vue?vue&type=template&id=e97c1d38&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_e97c1d38___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_template_id_e97c1d38___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
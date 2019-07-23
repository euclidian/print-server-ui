(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["statistic-widget"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/views/widgets/Statistic.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/views/widgets/Statistic.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_widgets_statistic_MiniStatistic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/widgets/statistic/MiniStatistic */ "./resources/js/components/dashboard/components/widgets/statistic/MiniStatistic.vue");
/* harmony import */ var _components_widgets_statistic_LinearStatistic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/widgets/statistic/LinearStatistic */ "./resources/js/components/dashboard/components/widgets/statistic/LinearStatistic.vue");
/* harmony import */ var _components_widgets_statistic_CircleStatistic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/widgets/statistic/CircleStatistic */ "./resources/js/components/dashboard/components/widgets/statistic/CircleStatistic.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    CircleStatistic: _components_widgets_statistic_CircleStatistic__WEBPACK_IMPORTED_MODULE_2__["default"],
    MiniStatistic: _components_widgets_statistic_MiniStatistic__WEBPACK_IMPORTED_MODULE_0__["default"],
    LinearStatistic: _components_widgets_statistic_LinearStatistic__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      trending: [{
        subheading: "Sales",
        headline: "2,55",
        caption: "increase",
        percent: 15,
        icon: {
          label: "trending_up",
          color: "success"
        },
        linear: {
          value: 15,
          color: "success"
        }
      }, {
        subheading: "Revenue",
        headline: "6,553",
        caption: "increase",
        percent: 10,
        icon: {
          label: "trending_down",
          color: "error"
        },
        linear: {
          value: 15,
          color: "error"
        }
      }, {
        subheading: "Orders",
        headline: "5,00",
        caption: "increase",
        percent: 50,
        icon: {
          label: "arrow_upward",
          color: "info"
        },
        linear: {
          value: 50,
          color: "info"
        }
      }],
      trending2: [{
        subheading: "Email",
        headline: "15+",
        caption: "email opens",
        percent: 15,
        icon: {
          label: "email",
          color: "info"
        },
        linear: {
          value: 15,
          color: "info"
        }
      }, {
        subheading: "Tasks",
        headline: "90%",
        caption: "tasks completed.",
        percent: 90,
        icon: {
          label: "list",
          color: "primary"
        },
        linear: {
          value: 90,
          color: "success"
        }
      }, {
        subheading: "Issues",
        headline: "100%",
        caption: "issues fixed.",
        percent: 100,
        icon: {
          label: "bug_report",
          color: "primary"
        },
        linear: {
          value: 100,
          color: "error"
        }
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/views/widgets/Statistic.vue?vue&type=template&id=690e2f39&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/views/widgets/Statistic.vue?vue&type=template&id=690e2f39&scoped=true& ***!
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
    "div",
    { attrs: { id: "page-statistic" } },
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
                _c("h4", [_vm._v("Social")])
              ]),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg3: "", sm6: "", xs12: "" } },
                [
                  _c("mini-statistic", {
                    attrs: {
                      icon: "fa fa-facebook",
                      title: "100+",
                      "sub-title": "Likes",
                      color: "indigo"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg3: "", sm6: "", xs12: "" } },
                [
                  _c("mini-statistic", {
                    attrs: {
                      icon: "fa fa-google",
                      title: "150+",
                      "sub-title": "Connections",
                      color: "red"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg3: "", sm6: "", xs12: "" } },
                [
                  _c("mini-statistic", {
                    attrs: {
                      icon: "fa fa-twitter",
                      title: "200+",
                      "sub-title": "Followers",
                      color: "light-blue"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg3: "", sm6: "", xs12: "" } },
                [
                  _c("mini-statistic", {
                    attrs: {
                      icon: "fa fa-instagram",
                      title: "50+",
                      "sub-title": "Shots",
                      color: "purple"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("v-flex", { attrs: { sm12: "" } }, [
                _c("h4", [_vm._v("Linear Trending")])
              ]),
              _vm._v(" "),
              _vm._l(_vm.trending, function(item, index) {
                return _c(
                  "v-flex",
                  { key: "trending" + index, attrs: { lg4: "", sm12: "" } },
                  [
                    _c("linear-statistic", {
                      attrs: {
                        title: item.subheading,
                        "sub-title": item.caption,
                        icon: item.icon.label,
                        color: item.icon.color,
                        value: item.linear.value
                      }
                    })
                  ],
                  1
                )
              }),
              _vm._v(" "),
              _c("v-flex", { attrs: { sm12: "" } }, [
                _c("h4", [_vm._v("Circle Trending")])
              ]),
              _vm._v(" "),
              _vm._l(_vm.trending2, function(item, index) {
                return _c(
                  "v-flex",
                  { key: "c-trending" + index, attrs: { lg4: "", sm12: "" } },
                  [
                    _c("circle-statistic", {
                      attrs: {
                        title: item.subheading,
                        "sub-title": item.headline,
                        caption: item.caption,
                        icon: item.icon.label,
                        color: item.linear.color,
                        value: item.linear.value
                      }
                    })
                  ],
                  1
                )
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

/***/ "./resources/js/components/dashboard/views/widgets/Statistic.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/dashboard/views/widgets/Statistic.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Statistic_vue_vue_type_template_id_690e2f39_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Statistic.vue?vue&type=template&id=690e2f39&scoped=true& */ "./resources/js/components/dashboard/views/widgets/Statistic.vue?vue&type=template&id=690e2f39&scoped=true&");
/* harmony import */ var _Statistic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Statistic.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/views/widgets/Statistic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Statistic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Statistic_vue_vue_type_template_id_690e2f39_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Statistic_vue_vue_type_template_id_690e2f39_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "690e2f39",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/views/widgets/Statistic.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/views/widgets/Statistic.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/views/widgets/Statistic.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Statistic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Statistic.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/views/widgets/Statistic.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Statistic_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/views/widgets/Statistic.vue?vue&type=template&id=690e2f39&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/views/widgets/Statistic.vue?vue&type=template&id=690e2f39&scoped=true& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Statistic_vue_vue_type_template_id_690e2f39_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Statistic.vue?vue&type=template&id=690e2f39&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/views/widgets/Statistic.vue?vue&type=template&id=690e2f39&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Statistic_vue_vue_type_template_id_690e2f39_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Statistic_vue_vue_type_template_id_690e2f39_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chart-widget"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/VWidget.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/components/VWidget.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "VWidget",
  props: {
    title: {
      type: String
    },
    enableHeader: {
      type: Boolean,
      "default": true
    },
    contentBg: {
      type: String,
      "default": "white"
    }
  },
  data: function data() {
    return {};
  },
  computed: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/widgets/chart/BoxChart.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/components/widgets/chart/BoxChart.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_chart_echart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/chart/echart */ "./resources/js/components/dashboard/components/chart/echart.js");
/* harmony import */ var vuetify_es5_util_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/es5/util/colors */ "./node_modules/vuetify/es5/util/colors.js");
/* harmony import */ var vuetify_es5_util_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vuetify_es5_util_colors__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
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
    EChart: _components_chart_echart__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    title: String,
    gradient: {
      type: Boolean,
      "default": false
    },
    subTitle: String,
    icon: String,
    cardColor: {
      type: String,
      "default": "white"
    },
    iconColor: {
      type: String,
      "default": "success"
    },
    type: String,
    chartColor: Array,
    data: Array
  },
  data: function data() {
    return {
      defaultOption: [["dataset.source", this.data], ["xAxis.show", false], ["yAxis.show", false], ["grid.top", "15%"], ["grid.left", "0"], ["grid.bottom", "0"], ["grid.right", "0"], ["color", this.chartColor]]
    };
  },
  computed: {
    computeCardDark: function computeCardDark() {
      return this.cardColor !== "white";
    },
    computeChartOption: function computeChartOption() {
      switch (this.type) {
        case "bar":
          this.defaultOption.push(["series[0].type", "bar"]);
          this.defaultOption.push(["series[0].barWidth", "50%"]); // add shadow series
          // this.defaultOption.push(['series[1].type', 'bar']);

          break;

        case "stack-bar":
          // set stacked bar
          // this.defaultOption.push(['series[0].data', StackBarData]);
          this.defaultOption.push(["series[0].type", "bar"]);
          this.defaultOption.push(["series[0].itemStyle.normar.color", "rgba(0,0,0,0.05)"]);
          this.defaultOption.push(["series[0].barGap", "-100%"]); // set main series
          // this.defaultOption.push(['series[1].data', StackData]);

          this.defaultOption.push(["series[1].type", "bar"]);
          break;

        case "area":
          this.defaultOption.push(["series[0].type", "line"]);
          this.defaultOption.push(["series[0].smooth", true]);
          this.defaultOption.push(["xAxis.boundaryGap", false]);
          this.defaultOption.push(["series[0].areaStyle", {}]);

          if (this.gradient) {
            this.defaultOption.push(["series[0].areaStyle", {
              normal: {
                color: new window.echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: this.chartColor[0]
                }, {
                  offset: 1,
                  color: this.chartColor[1]
                }])
              }
            }]);
          }

          break;

        default:
          // line
          this.defaultOption.push(["series[0].smooth", true]);
          this.defaultOption.push(["xAxis.boundaryGap", false]);
          break;
      }

      return this.defaultOption;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/widgets/chart/MiniChart.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/components/widgets/chart/MiniChart.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_chart_echart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/chart/echart */ "./resources/js/components/dashboard/components/chart/echart.js");
//
//
//
//
//
//
//
//
//
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
    EChart: _components_chart_echart__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    title: {
      type: String,
      "default": ""
    },
    subTitle: {
      type: String,
      "default": ""
    },
    icon: {
      type: String,
      "default": ""
    },
    iconColor: {
      type: String,
      "default": "success"
    },
    type: {
      type: String,
      "default": "line"
    },
    chartColor: {
      type: String,
      "default": ""
    },
    data: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      defaultOption: [["dataset.source", this.data], ["xAxis.show", false], ["yAxis.show", false], ["color", [this.chartColor]]]
    };
  },
  watch: {
    type: {
      deep: true,
      handler: function handler(newVal) {
        switch (newVal) {
          case "bar":
            this.defaultOption.push(["series[0].type", "bar"]);
            break;

          case "area":
            this.defaultOption.push(["series[0].type", "line"]);
            this.defaultOption.push(["series[0].areaStyle", {}]);
            break;

          default:
            break;
        }

        return this.defaultOption;
      }
    }
  },
  computed: {
    computeChartOption: function computeChartOption() {
      return this.defaultOption;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/views/widgets/Chart.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/views/widgets/Chart.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_chart_echart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/chart/echart */ "./resources/js/components/dashboard/components/chart/echart.js");
/* harmony import */ var _api_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/chart */ "./resources/js/components/dashboard/api/chart.js");
/* harmony import */ var vuetify_es5_util_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/es5/util/colors */ "./node_modules/vuetify/es5/util/colors.js");
/* harmony import */ var vuetify_es5_util_colors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuetify_es5_util_colors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_widgets_chart_MiniChart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/widgets/chart/MiniChart */ "./resources/js/components/dashboard/components/widgets/chart/MiniChart.vue");
/* harmony import */ var _components_widgets_chart_BoxChart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/widgets/chart/BoxChart */ "./resources/js/components/dashboard/components/widgets/chart/BoxChart.vue");
/* harmony import */ var _components_VWidget__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/VWidget */ "./resources/js/components/dashboard/components/VWidget.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BoxChart: _components_widgets_chart_BoxChart__WEBPACK_IMPORTED_MODULE_4__["default"],
    MiniChart: _components_widgets_chart_MiniChart__WEBPACK_IMPORTED_MODULE_3__["default"],
    EChart: _components_chart_echart__WEBPACK_IMPORTED_MODULE_0__["default"],
    VWidget: _components_VWidget__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      selectedTab: "tab-1",
      option: null,
      dataset: {
        sinData: _api_chart__WEBPACK_IMPORTED_MODULE_1__["SinData"],
        monthVisit: _api_chart__WEBPACK_IMPORTED_MODULE_1__["monthVisitData"],
        campaign: _api_chart__WEBPACK_IMPORTED_MODULE_1__["campaignData"],
        location: _api_chart__WEBPACK_IMPORTED_MODULE_1__["locationData"],
        stackData: _api_chart__WEBPACK_IMPORTED_MODULE_1__["StackData"]
      },
      color: vuetify_es5_util_colors__WEBPACK_IMPORTED_MODULE_2___default.a
    };
  },
  created: function created() {
    console.log(this.$refs.chart);
  },
  methods: {
    handleTabChange: function handleTabChange(val, e) {
      // make sure the chart resized while parent from hidden to show
      window.dispatchEvent(new Event("resize"));
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/VWidget.vue?vue&type=template&id=35f26b67&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/components/VWidget.vue?vue&type=template&id=35f26b67& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "v-widget" } },
    [
      _c(
        "v-card",
        [
          _vm.enableHeader
            ? _c(
                "v-toolbar",
                {
                  attrs: { color: "transparent", flat: "", dense: "", card: "" }
                },
                [
                  _c("v-toolbar-title", [
                    _c("h4", [_vm._v(_vm._s(_vm.title))])
                  ]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _vm._t("widget-header-action")
                ],
                2
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.enableHeader ? _c("v-divider") : _vm._e(),
          _vm._v(" "),
          _c(
            "v-card-text",
            { class: _vm.contentBg },
            [_vm._t("widget-content")],
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/widgets/chart/BoxChart.vue?vue&type=template&id=f49fb872&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/components/widgets/chart/BoxChart.vue?vue&type=template&id=f49fb872& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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
    { attrs: { color: _vm.cardColor, dark: _vm.computeCardDark } },
    [
      _c("v-card-title", [
        _c(
          "div",
          { staticClass: "layout row ma-0" },
          [
            _c("div", { staticClass: "subheading" }, [
              _vm._v(_vm._s(_vm.title))
            ]),
            _vm._v(" "),
            _c("v-spacer"),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "caption" },
              [
                _c("v-icon", [_vm._v("trending_up")]),
                _vm._v(" " + _vm._s(_vm.subTitle))
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "v-responsive",
        { staticClass: "white--text" },
        [
          _c("e-chart", {
            attrs: {
              "path-option": _vm.computeChartOption,
              height: "308px",
              width: "100%"
            }
          })
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/widgets/chart/MiniChart.vue?vue&type=template&id=cbe45afa&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/components/widgets/chart/MiniChart.vue?vue&type=template&id=cbe45afa& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
      _c("v-card-text", [
        _c(
          "div",
          { staticClass: "layout row ma-0 align-center justify-space-between" },
          [
            _c("div", { staticClass: "text-box" }, [
              _c("div", { staticClass: "subheading pb-2" }, [
                _vm._v(_vm._s(_vm.title))
              ]),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "grey--text" },
                [
                  _vm._v(_vm._s(_vm.subTitle) + " "),
                  _c("v-icon", { attrs: { small: "", color: _vm.iconColor } }, [
                    _vm._v(_vm._s(_vm.icon))
                  ])
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "chart" },
              [
                _c("e-chart", {
                  attrs: {
                    "path-option": _vm.computeChartOption,
                    height: "68px",
                    width: "100%"
                  }
                })
              ],
              1
            )
          ]
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/views/widgets/Chart.vue?vue&type=template&id=58e5e747&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/views/widgets/Chart.vue?vue&type=template&id=58e5e747& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
                _c("h4", [_vm._v("Mini Chart")])
              ]),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg3: "", sm6: "" } },
                [
                  _c("mini-chart", {
                    attrs: {
                      title: "Monthly Sales",
                      "sub-title": "10%",
                      icon: "trending_up",
                      data: _vm.dataset.monthVisit,
                      "chart-color": _vm.color.blue.base,
                      type: "bar"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg3: "", sm6: "" } },
                [
                  _c("mini-chart", {
                    attrs: {
                      title: "Daily Visit",
                      "sub-title": "20%",
                      icon: "trending_up",
                      data: _vm.dataset.monthVisit,
                      "chart-color": _vm.color.green.base,
                      type: "area"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg3: "", sm6: "" } },
                [
                  _c(
                    "v-card",
                    [
                      _c("v-card-text", [
                        _c(
                          "div",
                          {
                            staticClass:
                              "layout row ma-0 align-center justify-space-between"
                          },
                          [
                            _c("div", { staticClass: "text-box" }, [
                              _c("div", { staticClass: "subheading pb-2" }, [
                                _vm._v("Bounce Rate")
                              ]),
                              _vm._v(" "),
                              _c(
                                "span",
                                { staticClass: "grey--text" },
                                [
                                  _vm._v("-10% "),
                                  _c(
                                    "v-icon",
                                    { attrs: { small: "", color: "green" } },
                                    [_vm._v("trending_down")]
                                  )
                                ],
                                1
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "chart" },
                              [
                                _c(
                                  "v-progress-circular",
                                  {
                                    attrs: {
                                      size: 60,
                                      width: 5,
                                      rotate: 360,
                                      value: 10,
                                      color: "success"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                  10\n                "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ]
                        )
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg3: "", sm6: "" } },
                [
                  _c("mini-chart", {
                    attrs: {
                      title: "Sales Trend",
                      "sub-title": "10%",
                      icon: "trending_down",
                      data: _vm.dataset.monthVisit,
                      "chart-color": _vm.color.red.base,
                      type: "line"
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
            "v-layout",
            { attrs: { row: "", wrap: "" } },
            [
              _c("v-flex", { attrs: { sm12: "" } }, [
                _c("h4", [_vm._v("Box Chart")])
              ]),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg4: "", sm6: "", xs12: "" } },
                [
                  _c("box-chart", {
                    attrs: {
                      title: "Page views",
                      "sub-title": "10%",
                      icon: "trending_up",
                      data: _vm.dataset.monthVisit,
                      "chart-color": [_vm.color.blue.darken1],
                      type: "area"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg4: "", sm6: "", xs12: "" } },
                [
                  _c("box-chart", {
                    attrs: {
                      title: "Monthly Sales",
                      "sub-title": "10%",
                      icon: "trending_up",
                      "card-color": "pink",
                      data: _vm.dataset.monthVisit,
                      "chart-color": [_vm.color.pink.lighten2],
                      type: "bar"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg4: "", sm6: "", xs12: "" } },
                [
                  _c("box-chart", {
                    attrs: {
                      "card-color": "indigo",
                      title: "Page views",
                      "sub-title": "10%",
                      icon: "trending_up",
                      data: _vm.dataset.monthVisit,
                      "chart-color": [_vm.color.shades.white],
                      type: "line"
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
            "v-layout",
            { attrs: { row: "", wrap: "" } },
            [
              _c("v-flex", { attrs: { sm12: "" } }, [
                _c("h4", [_vm._v("Complex Chart")])
              ]),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg4: "", sm12: "" } },
                [
                  _c(
                    "v-card",
                    { attrs: { dark: "", color: "green" } },
                    [
                      _c("v-card-title", [
                        _c(
                          "div",
                          { staticClass: "layout row ma-0" },
                          [
                            _c("div", { staticClass: "subheading" }, [
                              _vm._v("Today")
                            ]),
                            _vm._v(" "),
                            _c("v-spacer"),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "caption" },
                              [
                                _c("v-icon", [_vm._v("trending_up")]),
                                _vm._v(" 20%")
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-responsive",
                        { staticClass: "white--text" },
                        [
                          _c("e-chart", {
                            ref: "chart",
                            attrs: {
                              "path-option": [
                                ["dataset.source", _vm.dataset.stackData],
                                ["grid.bottom", "10%"],
                                ["grid.top", "5%"],
                                ["xAxis.show", false],
                                ["yAxis.show", false],
                                ["series[0].type", "bar"],
                                ["series[0].barGap", "-100%"],
                                [
                                  "series[0].itemStyle.normal.color",
                                  "rgba(0,0,0,0.1)"
                                ],
                                ["series[0].barWidth", "50%"],
                                ["series[1].barWidth", "50%"],
                                ["series[1].type", "bar"],
                                [
                                  "series[1].itemStyle.normal.color",
                                  _vm.color.shades.white
                                ]
                              ],
                              height: "200px",
                              width: "100%"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-card-text", { staticClass: "white" }, [
                        _c(
                          "div",
                          { staticClass: "layout row align-center ma-0" },
                          [
                            _c("div", { staticClass: "grey--text" }, [
                              _c("div", { staticClass: "caption" }, [
                                _vm._v("MAXIMUM BOUNCE")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "subheading mt-2" }, [
                                _vm._v("2500")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("v-spacer"),
                            _vm._v(" "),
                            _c(
                              "div",
                              {},
                              [
                                _c(
                                  "v-progress-circular",
                                  {
                                    attrs: {
                                      size: 100,
                                      width: 15,
                                      rotate: 360,
                                      value: 10,
                                      color: "blue"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                  10\n                "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg4: "", sm12: "" } },
                [
                  _c(
                    "v-card",
                    {
                      staticClass: "elevation-0 box-shadow",
                      attrs: { dark: "", color: "pink" }
                    },
                    [
                      _c("v-card-title", [
                        _c(
                          "div",
                          { staticClass: "layout row ma-0" },
                          [
                            _c("div", { staticClass: "subheading" }, [
                              _vm._v("Today")
                            ]),
                            _vm._v(" "),
                            _c("v-spacer"),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "caption" },
                              [
                                _c("v-icon", [_vm._v("trending_up")]),
                                _vm._v(" 20%")
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-responsive",
                        { staticClass: "white--text" },
                        [
                          _c("e-chart", {
                            attrs: {
                              "path-option": [
                                ["dataset.source", _vm.dataset.monthVisit],
                                ["color", [_vm.color.pink.lighten2]],
                                ["grid.left", "0"],
                                ["grid.bottom", "0"],
                                ["grid.right", "0"],
                                ["xAxis.show", false],
                                ["yAxis.show", false]
                              ],
                              height: "200px",
                              width: "100%"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-card-text", { staticClass: "white" }, [
                        _c(
                          "div",
                          { staticClass: "layout row align-center ma-0" },
                          [
                            _c("div", { staticClass: "grey--text" }, [
                              _c("div", { staticClass: "caption" }, [
                                _vm._v("MAXIMUM BOUNCE")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "subheading mt-2" }, [
                                _vm._v("2500")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("v-spacer"),
                            _vm._v(" "),
                            _c(
                              "div",
                              {},
                              [
                                _c(
                                  "v-progress-circular",
                                  {
                                    attrs: {
                                      size: 100,
                                      width: 15,
                                      rotate: 360,
                                      value: 10,
                                      color: "blue"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                  10\n                "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg4: "", sm12: "" } },
                [
                  _c(
                    "v-card",
                    { attrs: { color: "blue darken-1", dark: "" } },
                    [
                      _c("v-card-title", [
                        _c(
                          "div",
                          { staticClass: "layout row ma-0" },
                          [
                            _c("div", { staticClass: "subheading" }, [
                              _vm._v("Today")
                            ]),
                            _vm._v(" "),
                            _c("v-spacer"),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "caption" },
                              [
                                _c("v-icon", [_vm._v("trending_up")]),
                                _vm._v(" 20%")
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-responsive",
                        [
                          _c("e-chart", {
                            attrs: {
                              "path-option": [
                                ["dataset.source", _vm.dataset.monthVisit],
                                ["color", [_vm.color.blue.base]],
                                ["xAxis.show", false],
                                ["xAxis.boundaryGap", false],
                                ["grid.left", "0"],
                                ["grid.bottom", "0"],
                                ["grid.right", "0"],
                                ["yAxis.show", false],
                                ["series[0].areaStyle", {}],
                                ["series[0].smooth", true]
                              ],
                              height: "200px",
                              width: "100%"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-card-text", { staticClass: "white" }, [
                        _c(
                          "div",
                          { staticClass: "layout row align-center ma-0" },
                          [
                            _c("div", { staticClass: "grey--text" }, [
                              _c("div", { staticClass: "caption" }, [
                                _vm._v("MAXIMUM BOUNCE")
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "subheading mt-2" }, [
                                _vm._v("2500")
                              ])
                            ]),
                            _vm._v(" "),
                            _c("v-spacer"),
                            _vm._v(" "),
                            _c(
                              "div",
                              {},
                              [
                                _c(
                                  "v-progress-circular",
                                  {
                                    attrs: {
                                      size: 100,
                                      width: 15,
                                      rotate: 360,
                                      value: 10,
                                      color: "blue"
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                  10\n                "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg6: "", sm12: "", xs12: "" } },
                [
                  _c("v-widget", { attrs: { title: "Analysis - Donut" } }, [
                    _c(
                      "div",
                      {
                        attrs: { slot: "widget-content" },
                        slot: "widget-content"
                      },
                      [
                        _c("e-chart", {
                          attrs: {
                            "path-option": [
                              ["dataset.source", _vm.dataset.campaign],
                              [
                                "color",
                                [
                                  _vm.color.amber.base,
                                  _vm.color.indigo.base,
                                  _vm.color.pink.base,
                                  _vm.color.green.base,
                                  _vm.color.teal.base,
                                  _vm.color.purple.base
                                ]
                              ],
                              ["legend.orient", "horizontal"],
                              ["legend.y", "bottom"],
                              ["xAxis.show", false],
                              ["yAxis.show", false],
                              ["series[0].type", "pie"],
                              ["series[0].avoidLabelOverlap", true],
                              ["series[0].radius", ["50%", "70%"]]
                            ],
                            height: "350px",
                            width: "100%"
                          }
                        })
                      ],
                      1
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg6: "", sm12: "", xs12: "" } },
                [
                  _c("v-widget", { attrs: { title: "Analysis - Pie" } }, [
                    _c(
                      "div",
                      {
                        attrs: { slot: "widget-content" },
                        slot: "widget-content"
                      },
                      [
                        _c("e-chart", {
                          attrs: {
                            "path-option": [
                              ["dataset.source", _vm.dataset.campaign],
                              [
                                "color",
                                [
                                  _vm.color.lightBlue.base,
                                  _vm.color.indigo.base,
                                  _vm.color.pink.base,
                                  _vm.color.green.base,
                                  _vm.color.cyan.base,
                                  _vm.color.teal.base
                                ]
                              ],
                              ["legend.orient", "horizontal"],
                              ["legend.y", "bottom"],
                              ["xAxis.show", false],
                              ["yAxis.show", false],
                              ["series[0].type", "pie"]
                            ],
                            height: "350px",
                            width: "100%"
                          }
                        })
                      ],
                      1
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { lg12: "", sm12: "" } },
                [
                  _c(
                    "v-tabs",
                    {
                      on: { change: _vm.handleTabChange },
                      model: {
                        value: _vm.selectedTab,
                        callback: function($$v) {
                          _vm.selectedTab = $$v
                        },
                        expression: "selectedTab"
                      }
                    },
                    [
                      _c("v-tab", { attrs: { ripple: "", href: "#tab-1" } }, [
                        _vm._v("\n            Sales\n          ")
                      ]),
                      _vm._v(" "),
                      _c("v-tab", { attrs: { ripple: "", href: "#tab-2" } }, [
                        _vm._v("\n            Visit\n          ")
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-tabs-items",
                        {
                          model: {
                            value: _vm.selectedTab,
                            callback: function($$v) {
                              _vm.selectedTab = $$v
                            },
                            expression: "selectedTab"
                          }
                        },
                        [
                          _c(
                            "v-tab-item",
                            {
                              staticClass: "d-block",
                              attrs: { value: "tab-1" }
                            },
                            [
                              _c(
                                "v-card",
                                [
                                  _c("e-chart", {
                                    attrs: {
                                      "path-option": [
                                        [
                                          "color",
                                          [
                                            _vm.color.lightBlue.base,
                                            _vm.color.purple.base
                                          ]
                                        ],
                                        [
                                          "dataset.source",
                                          _vm.dataset.monthVisit
                                        ],
                                        ["series[0].type", "bar"],
                                        ["series[1].type", "bar"]
                                      ],
                                      height: "350px",
                                      width: "100%"
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
                            "v-tab-item",
                            { attrs: { value: "tab-2" } },
                            [
                              _c(
                                "v-card",
                                [
                                  _c("e-chart", {
                                    attrs: {
                                      "path-option": [
                                        [
                                          "dataset.source",
                                          _vm.dataset.monthVisit
                                        ],
                                        ["series[0].type", "line"]
                                      ],
                                      height: "350px",
                                      width: "100%"
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

/***/ "./resources/js/components/dashboard/components/VWidget.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/dashboard/components/VWidget.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VWidget_vue_vue_type_template_id_35f26b67___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VWidget.vue?vue&type=template&id=35f26b67& */ "./resources/js/components/dashboard/components/VWidget.vue?vue&type=template&id=35f26b67&");
/* harmony import */ var _VWidget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VWidget.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/components/VWidget.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VWidget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VWidget_vue_vue_type_template_id_35f26b67___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VWidget_vue_vue_type_template_id_35f26b67___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/components/VWidget.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/components/VWidget.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/dashboard/components/VWidget.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VWidget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VWidget.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/VWidget.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VWidget_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/components/VWidget.vue?vue&type=template&id=35f26b67&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/components/VWidget.vue?vue&type=template&id=35f26b67& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VWidget_vue_vue_type_template_id_35f26b67___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VWidget.vue?vue&type=template&id=35f26b67& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/VWidget.vue?vue&type=template&id=35f26b67&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VWidget_vue_vue_type_template_id_35f26b67___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VWidget_vue_vue_type_template_id_35f26b67___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/dashboard/components/chart/echart.js":
/*!**********************************************************************!*\
  !*** ./resources/js/components/dashboard/components/chart/echart.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuetify_es5_util_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuetify/es5/util/colors */ "./node_modules/vuetify/es5/util/colors.js");
/* harmony import */ var vuetify_es5_util_colors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuetify_es5_util_colors__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/object */ "./node_modules/lodash/object.js");
/* harmony import */ var lodash_object__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_object__WEBPACK_IMPORTED_MODULE_1__);
/**
 * ECharts Vue Wrapper
 * Michael Wang
 */


var ECharts = window.echarts || undefined;

if (ECharts === undefined) {
  console.error("ECharts is not defined");
} // set color palette


var colorPalette = [];
Object.entries(vuetify_es5_util_colors__WEBPACK_IMPORTED_MODULE_0___default.a).forEach(function (item) {
  if (item[1].base) {
    colorPalette.push(item[1].base);
  }
}) // default
// const colorPalette = ['#d87c7c', '#919e8b', '#d7ab82', '#6e7074', '#61a0a8', '#efa18d', '#787464', '#cc7e63', '#724e58', '#4b565b'];
// ECharts.registerTheme('material', {
//   color: colorPalette,
//   graph: {
//     color: colorPalette
//   }
//   textStyle: {
//   }
// });
;

(function () {
  var throttle = function throttle(type, name, obj) {
    obj = obj || window;
    var running = false;

    var func = function func() {
      if (running) {
        return;
      }

      running = true;
      requestAnimationFrame(function () {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };

    obj.addEventListener(type, func);
  };
  /* init - you can init any event */


  throttle("resize", "optimizedResize");
})();

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "v-echart",
  render: function render(h) {
    var data = {
      staticClass: "v-chart",
      style: this.canvasStyle,
      ref: "canvas",
      on: this.$listeners
    };
    return h("div", data);
  },
  props: {
    // args of  ECharts.init(dom, theme, opts)
    width: {
      type: String,
      "default": "auto"
    },
    height: {
      type: String,
      "default": "400px"
    },
    merged: {
      type: Boolean,
      "default": true
    },
    // instace.setOption
    pathOption: [Object, Array],
    option: Object,
    // general config
    textStyle: Object,
    title: Object,
    legend: [Object, Array],
    tooltip: Object,
    grid: {
      type: [Object, Array]
    },
    xAxis: [Object, Array],
    yAxis: [Object, Array],
    series: [Object, Array],
    axisPointer: Object,
    dataset: {
      type: [Object, Array],
      "default": function _default() {
        return {};
      }
    },
    // option.dataSet
    colors: Array,
    // echarts.option.color
    backgroundColor: [Object, String],
    toolbox: {
      type: [Object, Array]
    },
    // resize delay
    widthChangeDelay: {
      type: Number,
      "default": 450
    }
  },
  data: function data() {
    return {
      chartInstance: null,
      clientWidth: null,
      allowedOptions: ["textStyle", "title", "legend", "xAxis", "yAxis", "series", "tooltip", "axisPointer", "grid", "dataset", "colors", "backgroundColor"],
      _defaultOption: {
        tooltip: {
          show: true
        },
        title: {
          show: true,
          textStyle: {
            color: "rgba(0, 0, 0 , .87)",
            fontFamily: "sans-serif"
          }
        },
        grid: {
          containLabel: true
        },
        xAxis: {
          show: true,
          type: "category",
          axisLine: {
            lineStyle: {
              color: "rgba(0, 0, 0 , .54)",
              type: "dashed"
            }
          },
          axisTick: {
            show: true,
            alignWithLabel: true,
            lineStyle: {
              show: true,
              color: "rgba(0, 0, 0 , .54)",
              type: "dashed"
            }
          },
          axisLabel: {
            show: false
          }
        },
        yAxis: {
          show: true,
          type: "value",
          axisLine: {
            lineStyle: {
              color: "rgba(0, 0, 0 , .54)",
              type: "dashed"
            }
          },
          axisLabel: {
            show: false // color: 'rgba(0, 0, 0 , .54)'

          },
          splitLine: {
            lineStyle: {
              type: "dashed"
            }
          },
          axisTick: {
            show: true,
            lineStyle: {
              show: true,
              color: "rgba(0, 0, 0 , .54)",
              type: "dashed"
            }
          }
        },
        series: [{
          type: "line"
        }]
      }
    };
  },
  computed: {
    canvasStyle: function canvasStyle() {
      return {
        width: this.width,
        height: this.height
      };
    }
  },
  methods: {
    init: function init() {
      var _this = this;

      var widthChangeDelay = this.widthChangeDelay; // set

      if (this.pathOption) {
        this.pathOption.forEach(function (p) {
          lodash_object__WEBPACK_IMPORTED_MODULE_1___default.a.set(_this.$data._defaultOption, p[0], p[1]);
        });
      }

      this.chartInstance = ECharts.init(this.$refs.canvas, "material");
      this.chartInstance.setOption(lodash_object__WEBPACK_IMPORTED_MODULE_1___default.a.merge(this.option, this.$data._defaultOption));
      window.addEventListener("optimizedResize", function (e) {
        setTimeout(function (_) {
          _this.chartInstance.resize();
        }, _this.widthChangeDelay);
      });
    },
    resize: function resize() {
      this.chartInstance.resize();
    },
    clean: function clean() {
      window.removeEventListener("resize", this.chartInstance.resize);
      this.chartInstance.clear();
    }
  },
  mounted: function mounted() {
    this.init();
  },
  beforeDestroy: function beforeDestroy() {
    this.clean();
  }
});

/***/ }),

/***/ "./resources/js/components/dashboard/components/widgets/chart/BoxChart.vue":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/dashboard/components/widgets/chart/BoxChart.vue ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BoxChart_vue_vue_type_template_id_f49fb872___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoxChart.vue?vue&type=template&id=f49fb872& */ "./resources/js/components/dashboard/components/widgets/chart/BoxChart.vue?vue&type=template&id=f49fb872&");
/* harmony import */ var _BoxChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BoxChart.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/components/widgets/chart/BoxChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BoxChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BoxChart_vue_vue_type_template_id_f49fb872___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BoxChart_vue_vue_type_template_id_f49fb872___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/components/widgets/chart/BoxChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/components/widgets/chart/BoxChart.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/components/widgets/chart/BoxChart.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BoxChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BoxChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/widgets/chart/BoxChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BoxChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/components/widgets/chart/BoxChart.vue?vue&type=template&id=f49fb872&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/components/widgets/chart/BoxChart.vue?vue&type=template&id=f49fb872& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BoxChart_vue_vue_type_template_id_f49fb872___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BoxChart.vue?vue&type=template&id=f49fb872& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/widgets/chart/BoxChart.vue?vue&type=template&id=f49fb872&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BoxChart_vue_vue_type_template_id_f49fb872___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BoxChart_vue_vue_type_template_id_f49fb872___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/dashboard/components/widgets/chart/MiniChart.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/dashboard/components/widgets/chart/MiniChart.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MiniChart_vue_vue_type_template_id_cbe45afa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MiniChart.vue?vue&type=template&id=cbe45afa& */ "./resources/js/components/dashboard/components/widgets/chart/MiniChart.vue?vue&type=template&id=cbe45afa&");
/* harmony import */ var _MiniChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MiniChart.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/components/widgets/chart/MiniChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MiniChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MiniChart_vue_vue_type_template_id_cbe45afa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MiniChart_vue_vue_type_template_id_cbe45afa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/components/widgets/chart/MiniChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/components/widgets/chart/MiniChart.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/components/widgets/chart/MiniChart.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MiniChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MiniChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/widgets/chart/MiniChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MiniChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/components/widgets/chart/MiniChart.vue?vue&type=template&id=cbe45afa&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/components/widgets/chart/MiniChart.vue?vue&type=template&id=cbe45afa& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MiniChart_vue_vue_type_template_id_cbe45afa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MiniChart.vue?vue&type=template&id=cbe45afa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/widgets/chart/MiniChart.vue?vue&type=template&id=cbe45afa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MiniChart_vue_vue_type_template_id_cbe45afa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MiniChart_vue_vue_type_template_id_cbe45afa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/dashboard/views/widgets/Chart.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/dashboard/views/widgets/Chart.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Chart_vue_vue_type_template_id_58e5e747___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Chart.vue?vue&type=template&id=58e5e747& */ "./resources/js/components/dashboard/views/widgets/Chart.vue?vue&type=template&id=58e5e747&");
/* harmony import */ var _Chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Chart.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/views/widgets/Chart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Chart_vue_vue_type_template_id_58e5e747___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Chart_vue_vue_type_template_id_58e5e747___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/views/widgets/Chart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/views/widgets/Chart.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/dashboard/views/widgets/Chart.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Chart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/views/widgets/Chart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/views/widgets/Chart.vue?vue&type=template&id=58e5e747&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/views/widgets/Chart.vue?vue&type=template&id=58e5e747& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_template_id_58e5e747___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Chart.vue?vue&type=template&id=58e5e747& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/views/widgets/Chart.vue?vue&type=template&id=58e5e747&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_template_id_58e5e747___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Chart_vue_vue_type_template_id_58e5e747___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
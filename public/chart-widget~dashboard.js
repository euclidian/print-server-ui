(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chart-widget~dashboard"],{

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



/***/ })

}]);
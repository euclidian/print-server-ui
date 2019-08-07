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

/* harmony default export */ __webpack_exports__["default"] = ({
  created: function created() {
    this.tes = this.getToken('access_token');
  },
  data: function data() {
    return {
      tes: '',
      no: 0,
      search: "",
      complex: {
        selected: [],
        headers: [{
          text: "No",
          value: "id"
        }, {
          text: "ID Template",
          value: "id_template"
        }, {
          text: "File Name",
          value: "file_name"
        }, {
          text: "Real File Name",
          value: "real_file_name"
        }, {
          text: "Upload Date",
          value: "upload_date"
        }, {
          text: "Action",
          value: ""
        }],
        items: [{
          id: 1,
          id_template: 'TMP0001',
          file_name: 'Lorem Ipsum',
          real_file_name: 'Real Lorem Ipsum',
          upload_date: '10-03-2002'
        }, {
          id: 2,
          id_template: 'TMP0001',
          file_name: 'Lorem Ipsum',
          real_file_name: 'Real Lorem Ipsum',
          upload_date: '10-03-2002'
        }, {
          id: 3,
          id_template: 'TMP0001',
          file_name: 'Lorem Ipsum',
          real_file_name: 'Real Lorem Ipsum',
          upload_date: '10-03-2002'
        }, {
          id: 4,
          id_template: 'TMP0002',
          file_name: 'Lorem Ipsum',
          real_file_name: 'Real Lorem Ipsum',
          upload_date: '10-03-2002'
        }, {
          id: 5,
          id_template: 'TMP0001',
          file_name: 'Lorem Ipsum',
          real_file_name: 'Real Lorem Ipsum',
          upload_date: '10-03-2002'
        }, {
          id: 6,
          id_template: 'TMP0001',
          file_name: 'Lorem Ipsum',
          real_file_name: 'Real Lorem Ipsum',
          upload_date: '10-03-2002'
        }, {
          id: 7,
          id_template: 'TMP0001',
          file_name: 'Lorem Ipsum',
          real_file_name: 'Real Lorem Ipsum',
          upload_date: '10-03-2002'
        }, {
          id: 8,
          id_template: 'TMP0001',
          file_name: 'Lorem Ipsum',
          real_file_name: 'Real Lorem Ipsum',
          upload_date: '10-03-2002'
        }, {
          id: 9,
          id_template: 'TMP0001',
          file_name: 'Lorem Ipsum',
          real_file_name: 'Real Lorem Ipsum',
          upload_date: '10-03-2002'
        }, {
          id: 10,
          id_template: 'TMP0001',
          file_name: 'Lorem Ipsum',
          real_file_name: 'Real Lorem Ipsum',
          upload_date: '10-03-2002'
        }]
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

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/views/list/Table.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/views/list/Table.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#template-table th{\n    color: #3AA6B7;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/views/list/Table.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/views/list/Table.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Table.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/views/list/Table.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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
                _c("h3", [_vm._v("Complexity")])
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
                              placeholder: "Search in Complexity",
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
                            {
                              staticClass: "white--text",
                              attrs: { color: "primary", depressed: "" }
                            },
                            [_vm._v("\n                Add Data\n            ")]
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
                            staticClass: "elevation-3",
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
                              color: "purple--text",
                              "item-key": "name",
                              id: "template-table"
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "items",
                                fn: function(props) {
                                  return [
                                    _c("td", [_vm._v(_vm._s(props.item.id))]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(_vm._s(props.item.id_template))
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(_vm._s(props.item.file_name))
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(_vm._s(props.item.real_file_name))
                                    ]),
                                    _vm._v(" "),
                                    _c("td", [
                                      _vm._v(_vm._s(props.item.upload_date))
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
                                              color: "success",
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
                                              color: "primary",
                                              small: ""
                                            }
                                          },
                                          [_c("v-icon", [_vm._v("get_app")])],
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
/* empty/unused harmony star reexport *//* harmony import */ var _Table_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Table.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/dashboard/views/list/Table.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "./resources/js/components/dashboard/views/list/Table.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/views/list/Table.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--6-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Table.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/views/list/Table.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Table_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

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
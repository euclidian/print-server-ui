(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["routes"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/email/Compose.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/components/email/Compose.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      title: "Hi,\nI just wanted to check in and see if you had any plans the upcoming weekend. We are thinking of heading up to Napa"
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/email/Layout.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/components/email/Layout.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_mail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/mail */ "./resources/js/components/dashboard/api/mail.js");
/* harmony import */ var _Compose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Compose */ "./resources/js/components/dashboard/components/email/Compose.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Compose: _Compose__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    source: String
  },
  data: function data() {
    return {
      selected: [2],
      dialog: null,
      drawer: null,
      replayDialog: null,
      menus: _api_mail__WEBPACK_IMPORTED_MODULE_0__["MailMenu"],
      items: [{
        icon: "account_circle",
        href: "#",
        title: "Profile",
        click: function click(e) {
          console.log(e);
        }
      }, {
        icon: "settings",
        href: "#",
        title: "Settings",
        click: function click(e) {
          console.log(e);
        }
      }, {
        icon: "fullscreen_exit",
        href: "#",
        title: "Logout",
        click: function click(e) {
          console.log(e);
        }
      }],
      mailActions: [{
        href: "#",
        title: "Delete",
        click: function click(e) {
          console.log(e);
        }
      }, {
        href: "Mark as read",
        title: "Mark as read",
        click: function click(e) {
          console.log(e);
        }
      }, {
        href: "Spam",
        title: "Spam",
        click: function click(e) {
          console.log(e);
        }
      }]
    };
  },
  created: function created() {
    var _this = this;

    this.$on("MAIL_REPLY_DIALOG_CLOSE", function () {
      _this.replayDialog = false;
    });
    window.AppMail = this;
  },
  methods: {
    handleClick: function handleClick(e) {
      console.log(e);
    },
    goBack: function goBack() {
      this.$router.go(-1);
    },
    toggleDrawer: function toggleDrawer() {
      this.drawer = this.drawer ? false : true;
    },
    toggle: function toggle(index) {
      var i = this.selected.indexOf(index);

      if (i > -1) {
        this.selected.splice(i, 1);
      } else {
        this.selected.push(index);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/email/List.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/components/email/List.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_mail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/mail */ "./resources/js/components/dashboard/api/mail.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  props: {
    mailType: {
      type: String,
      "default": "All"
    }
  },
  data: function data() {
    return {
      selected: [2],
      mailActions: [{
        href: "#",
        title: "Delete",
        click: function click(e) {
          console.log(e);
        }
      }, {
        href: "Mark as read",
        title: "Mark as read",
        click: function click(e) {
          console.log(e);
        }
      }, {
        href: "Spam",
        title: "Spam",
        click: function click(e) {
          console.log(e);
        }
      }]
    };
  },
  computed: {
    mails: function mails() {
      return Object(_api_mail__WEBPACK_IMPORTED_MODULE_1__["getMailByType"])(this.$route.params.mailType);
    }
  },
  created: function created() {
    var _this = this;

    this.$on("MAIL_REPLY_DIALOG_CLOSE", function () {
      _this.replayDialog = false;
    });
    window.AppMail = this;
  },
  methods: {
    computeMailPath: function computeMailPath(id) {
      return {
        path: "/mail/0/" + id
      };
    },
    formatDate: function formatDate(s) {
      return new Date(s).toLocaleString();
    },
    toggle: function toggle(index) {
      var i = this.selected.indexOf(index);

      if (i > -1) {
        this.selected.splice(i, 1);
      } else {
        this.selected.push(index);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/email/Reply.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/components/email/Reply.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_mail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/mail */ "./resources/js/components/dashboard/api/mail.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      selected: [2],
      mailActions: [{
        href: "#",
        title: "Delete",
        click: function click(e) {
          console.log(e);
        }
      }, {
        href: "Mark as read",
        title: "Mark as read",
        click: function click(e) {
          console.log(e);
        }
      }, {
        href: "Spam",
        title: "Spam",
        click: function click(e) {
          console.log(e);
        }
      }]
    };
  },
  computed: {
    mail: function mail() {
      return Object(_api_mail__WEBPACK_IMPORTED_MODULE_1__["getMailById"])(this.$route.params.uuid);
    }
  },
  created: function created() {
    window.AppMail = this;
  },
  methods: {
    computeMailPath: function computeMailPath(id) {
      return "/mail/0/" + id;
    },
    formatDate: function formatDate(s) {
      return new Date(s).toLocaleDateString();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/views/Media.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/views/Media.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bytes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bytes */ "./node_modules/bytes/index.js");
/* harmony import */ var bytes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bytes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/file */ "./resources/js/components/dashboard/api/file.js");
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    type: {
      type: String,
      "default": "image"
    }
  },
  data: function data() {
    return {
      size: "lg",
      view: "grid",
      selectedFile: {
        path: "/static/icon/empty_file.svg"
      },
      imageMime: ["image/jpeg", "image/png", "image/svg+xml"],
      folders: [{
        name: "bg",
        lastModified: "2018-03-03"
      }, {
        name: "cards",
        lastModified: "2018-03-03"
      }, {
        name: "avatar",
        lastModified: "2018-03-03"
      }]
    };
  },
  computed: {
    mediaMenu: function mediaMenu() {
      return _api_file__WEBPACK_IMPORTED_MODULE_1__["getFileMenu"];
    },
    files: function files() {
      return Object(_api_file__WEBPACK_IMPORTED_MODULE_1__["getFile"])();
    }
  },
  methods: {
    isImage: function isImage(file) {
      return this.imageMime.includes(file.fileType);
    },
    mimeIcons: function mimeIcons(file) {
      return this.imageMime.includes(file.fileType) ? "image" : "insert_drive_file";
    },
    showDetail: function showDetail(file) {
      this.selectedFile = file;
    },
    fileSize: function fileSize(number) {
      return bytes__WEBPACK_IMPORTED_MODULE_0___default.a.format(number);
    },
    formateDate: function formateDate(string) {
      return string ? new Date(string).toLocaleDateString() : "";
    },
    computeFileImage: function computeFileImage(file) {
      return this.isImage(file) ? file.path : "/static/icon/file_empty.svg";
    }
  }
});

/***/ }),

/***/ "./node_modules/bytes/index.js":
/*!*************************************!*\
  !*** ./node_modules/bytes/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * bytes
 * Copyright(c) 2012-2014 TJ Holowaychuk
 * Copyright(c) 2015 Jed Watson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

module.exports = bytes;
module.exports.format = format;
module.exports.parse = parse;

/**
 * Module variables.
 * @private
 */

var formatThousandsRegExp = /\B(?=(\d{3})+(?!\d))/g;

var formatDecimalsRegExp = /(?:\.0*|(\.[^0]+)0+)$/;

var map = {
  b:  1,
  kb: 1 << 10,
  mb: 1 << 20,
  gb: 1 << 30,
  tb: ((1 << 30) * 1024)
};

var parseRegExp = /^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb)$/i;

/**
 * Convert the given value in bytes into a string or parse to string to an integer in bytes.
 *
 * @param {string|number} value
 * @param {{
 *  case: [string],
 *  decimalPlaces: [number]
 *  fixedDecimals: [boolean]
 *  thousandsSeparator: [string]
 *  unitSeparator: [string]
 *  }} [options] bytes options.
 *
 * @returns {string|number|null}
 */

function bytes(value, options) {
  if (typeof value === 'string') {
    return parse(value);
  }

  if (typeof value === 'number') {
    return format(value, options);
  }

  return null;
}

/**
 * Format the given value in bytes into a string.
 *
 * If the value is negative, it is kept as such. If it is a float,
 * it is rounded.
 *
 * @param {number} value
 * @param {object} [options]
 * @param {number} [options.decimalPlaces=2]
 * @param {number} [options.fixedDecimals=false]
 * @param {string} [options.thousandsSeparator=]
 * @param {string} [options.unit=]
 * @param {string} [options.unitSeparator=]
 *
 * @returns {string|null}
 * @public
 */

function format(value, options) {
  if (!Number.isFinite(value)) {
    return null;
  }

  var mag = Math.abs(value);
  var thousandsSeparator = (options && options.thousandsSeparator) || '';
  var unitSeparator = (options && options.unitSeparator) || '';
  var decimalPlaces = (options && options.decimalPlaces !== undefined) ? options.decimalPlaces : 2;
  var fixedDecimals = Boolean(options && options.fixedDecimals);
  var unit = (options && options.unit) || '';

  if (!unit || !map[unit.toLowerCase()]) {
    if (mag >= map.tb) {
      unit = 'TB';
    } else if (mag >= map.gb) {
      unit = 'GB';
    } else if (mag >= map.mb) {
      unit = 'MB';
    } else if (mag >= map.kb) {
      unit = 'KB';
    } else {
      unit = 'B';
    }
  }

  var val = value / map[unit.toLowerCase()];
  var str = val.toFixed(decimalPlaces);

  if (!fixedDecimals) {
    str = str.replace(formatDecimalsRegExp, '$1');
  }

  if (thousandsSeparator) {
    str = str.replace(formatThousandsRegExp, thousandsSeparator);
  }

  return str + unitSeparator + unit;
}

/**
 * Parse the string value into an integer in bytes.
 *
 * If no unit is given, it is assumed the value is in bytes.
 *
 * @param {number|string} val
 *
 * @returns {number|null}
 * @public
 */

function parse(val) {
  if (typeof val === 'number' && !isNaN(val)) {
    return val;
  }

  if (typeof val !== 'string') {
    return null;
  }

  // Test if the string passed is valid
  var results = parseRegExp.exec(val);
  var floatValue;
  var unit = 'b';

  if (!results) {
    // Nothing could be extracted from the given string
    floatValue = parseInt(val, 10);
    unit = 'b'
  } else {
    // Retrieve the value and the unit
    floatValue = parseFloat(results[1]);
    unit = results[4].toLowerCase();
  }

  return Math.floor(map[unit] * floatValue);
}


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/views/Media.vue?vue&type=style&index=0&id=52c688ad&lang=stylus&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/views/Media.vue?vue&type=style&index=0&id=52c688ad&lang=stylus&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".media-cotent--wrap[data-v-52c688ad],\n.media-menu[data-v-52c688ad] {\n  min-width: 260px;\n  border-right: 1px solid #eee;\n  min-height: calc(100vh - 50px - 64px);\n}\n.media-detail[data-v-52c688ad] {\n  min-width: 300px;\n  border-left: 1px solid #eee;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/views/Media.vue?vue&type=style&index=0&id=52c688ad&lang=stylus&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/views/Media.vue?vue&type=style&index=0&id=52c688ad&lang=stylus&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--10-2!../../../../../node_modules/stylus-loader!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Media.vue?vue&type=style&index=0&id=52c688ad&lang=stylus&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/views/Media.vue?vue&type=style&index=0&id=52c688ad&lang=stylus&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/email/Compose.vue?vue&type=template&id=404f7628&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/components/email/Compose.vue?vue&type=template&id=404f7628& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
        "v-toolbar",
        { attrs: { color: "primary", dark: "" } },
        [
          _c("v-icon", { attrs: { color: "white" } }, [_vm._v("arrow_back")]),
          _vm._v(" "),
          _c("v-toolbar-title", [_vm._v("Compose")]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn",
            { attrs: { icon: "" } },
            [_c("v-icon", { attrs: { color: "white" } }, [_vm._v("send")])],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-container",
        { staticClass: "pa-0 mt-2", attrs: { fluid: "" } },
        [
          _c(
            "v-layout",
            { attrs: { wrap: "" } },
            [
              _c(
                "v-flex",
                { attrs: { xs2: "" } },
                [_c("v-subheader", [_vm._v("To")])],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { staticClass: "text-xs-right", attrs: { xs10: "" } },
                [
                  _c(
                    "v-chip",
                    [
                      _c("v-avatar", [
                        _c("img", {
                          attrs: {
                            src:
                              "https://randomuser.me/api/portraits/men/92.jpg"
                          }
                        })
                      ]),
                      _vm._v("\n          Trevor Hansen\n        ")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-chip",
                    [
                      _c("v-avatar", [
                        _c("img", {
                          attrs: {
                            src:
                              "https://randomuser.me/api/portraits/men/91.jpg"
                          }
                        })
                      ]),
                      _vm._v("\n          Alex Nelson\n        ")
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { xs2: "" } },
                [_c("v-subheader", [_vm._v("CC")])],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { staticClass: "text-xs-right", attrs: { xs10: "" } },
                [
                  _c(
                    "v-chip",
                    [
                      _c("v-avatar", [
                        _c("img", {
                          attrs: {
                            src:
                              "https://randomuser.me/api/portraits/men/92.jpg"
                          }
                        })
                      ]),
                      _vm._v("\n          John Doe\n        ")
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { xs12: "" } },
                [
                  _c("v-divider"),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      label: "Subject",
                      value: "Plans for the weekend",
                      "single-line": "",
                      "full-width": "",
                      "hide-details": ""
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-flex",
                { attrs: { xs12: "" } },
                [
                  _c("v-divider"),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: {
                      label: "Message",
                      counter: "",
                      max: "120",
                      "full-width": "",
                      "multi-line": "",
                      "single-line": ""
                    },
                    model: {
                      value: _vm.title,
                      callback: function($$v) {
                        _vm.title = $$v
                      },
                      expression: "title"
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/email/Layout.vue?vue&type=template&id=8be8e280&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/components/email/Layout.vue?vue&type=template&id=8be8e280& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    "v-app",
    { staticClass: "mail", attrs: { id: "mail" } },
    [
      _c(
        "v-toolbar",
        {
          staticClass: "mail-toolbar",
          attrs: {
            fixed: "",
            app: "",
            flat: "",
            dark: "",
            color: "indigo",
            "clipped-left": "",
            id: "topbar"
          }
        },
        [
          _c("v-toolbar-side-icon", {
            staticClass: "hidden-sm-and-up",
            on: { click: _vm.toggleDrawer }
          }),
          _vm._v(" "),
          _c("v-avatar", { staticClass: "hidden-sm-and-down" }, [
            _c("img", {
              attrs: { src: "/static/m.png", alt: "Vue Material Mail" }
            })
          ]),
          _vm._v(" "),
          _c("v-toolbar-title", { staticClass: "ml-0 pl-3" }, [
            _c("span", { staticClass: "hidden-sm-and-down" }, [_vm._v("Mail")])
          ]),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-text-field", {
            staticClass: "hidden-sm-and-down",
            attrs: {
              flat: "",
              "solo-inverted": "",
              "prepend-icon": "search",
              label: "What are you looking for?"
            }
          }),
          _vm._v(" "),
          _c(
            "v-btn",
            { attrs: { icon: "" } },
            [_c("v-icon", [_vm._v("notifications")])],
            1
          ),
          _vm._v(" "),
          _c(
            "v-menu",
            {
              attrs: {
                "offset-y": "",
                origin: "center center",
                "nudge-bottom": 10,
                transition: "scale-transition"
              }
            },
            [
              _c(
                "v-btn",
                {
                  attrs: { slot: "activator", icon: "", large: "", flat: "" },
                  slot: "activator"
                },
                [
                  _c("v-avatar", { attrs: { size: "32px" } }, [
                    _c("img", {
                      attrs: {
                        src: "https://randomuser.me/api/portraits/men/1.jpg"
                      }
                    })
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list",
                { staticClass: "pa-0" },
                _vm._l(_vm.items, function(item, index) {
                  return _c(
                    "v-list-tile",
                    {
                      key: index,
                      attrs: {
                        to: !item.href ? { name: item.name } : null,
                        href: item.href,
                        ripple: "ripple",
                        disabled: item.disabled,
                        target: item.target,
                        rel: "noopener"
                      },
                      on: { click: item.click }
                    },
                    [
                      item.icon
                        ? _c(
                            "v-list-tile-action",
                            [_c("v-icon", [_vm._v(_vm._s(item.icon))])],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c(
                        "v-list-tile-content",
                        [_c("v-list-tile-title", [_vm._v(_vm._s(item.title))])],
                        1
                      )
                    ],
                    1
                  )
                }),
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-navigation-drawer",
        {
          staticClass: "mail-drawer",
          attrs: { fixed: "", clipped: "", app: "" },
          model: {
            value: _vm.drawer,
            callback: function($$v) {
              _vm.drawer = $$v
            },
            expression: "drawer"
          }
        },
        [
          _c(
            "div",
            { staticClass: "layout column pa-3" },
            [
              _c(
                "v-btn",
                {
                  attrs: { large: "", block: "", color: "red", dark: "" },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      _vm.dialog = true
                    }
                  }
                },
                [_vm._v(" + COMPOSE")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-list",
            { staticClass: "mail-list", attrs: { dense: "" } },
            [
              _vm._l(_vm.menus, function(item) {
                return [
                  item.heading
                    ? _c(
                        "v-layout",
                        {
                          key: item.heading,
                          attrs: { row: "", "align-center": "" }
                        },
                        [
                          _c(
                            "v-flex",
                            { attrs: { xs12: "" } },
                            [
                              item.heading
                                ? _c("v-subheader", [
                                    _vm._v(
                                      "\n              " +
                                        _vm._s(item.heading) +
                                        "\n            "
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _c("v-divider")
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _c(
                        "v-list-tile",
                        { key: item.text, attrs: { to: item.to } },
                        [
                          item.icon
                            ? _c(
                                "v-list-tile-action",
                                [
                                  _c(
                                    "v-icon",
                                    {
                                      attrs: {
                                        color: item.iconColor,
                                        small: item.iconSize
                                      }
                                    },
                                    [_vm._v(_vm._s(item.icon))]
                                  )
                                ],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "v-list-tile-content",
                            [
                              _c("v-list-tile-title", [
                                _vm._v(_vm._s(item.title))
                              ])
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
      ),
      _vm._v(" "),
      _c("v-content", [_c("transition", [_c("router-view")], 1)], 1),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { "max-width": "640px" },
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [_c("compose")],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/email/List.vue?vue&type=template&id=992e5c98&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/components/email/List.vue?vue&type=template&id=992e5c98& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
      staticClass: "pa-0 mail-list",
      attrs: { fluid: "", "fill-height": "", id: "mailList" }
    },
    [
      _c(
        "v-layout",
        { staticClass: "mail-list--layout", attrs: { column: "" } },
        [
          _c(
            "v-toolbar",
            {
              staticClass: "elevation-1 mail-list--toolbar",
              attrs: { fixed: "", app: "" }
            },
            [
              _c("v-checkbox", {
                staticClass: "check-all",
                attrs: { row: "", "hide-details": "" }
              }),
              _vm._v(" "),
              _c(
                "v-menu",
                {
                  attrs: {
                    "offset-y": "",
                    origin: "center center",
                    "nudge-bottom": 0,
                    transition: "scale-transition"
                  }
                },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: {
                        slot: "activator",
                        icon: "",
                        large: "",
                        flat: ""
                      },
                      slot: "activator"
                    },
                    [
                      _c(
                        "v-avatar",
                        { attrs: { size: "32px" } },
                        [_c("v-icon", [_vm._v("arrow_drop_down")])],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list",
                    { staticClass: "pa-0" },
                    _vm._l(_vm.mailActions, function(item, index) {
                      return _c(
                        "v-list-tile",
                        {
                          key: index,
                          attrs: {
                            to: !item.href ? { name: item.name } : null,
                            href: item.href,
                            ripple: "ripple",
                            disabled: item.disabled,
                            target: item.target,
                            rel: "noopener"
                          },
                          on: { click: item.click }
                        },
                        [
                          item.icon
                            ? _c(
                                "v-list-tile-action",
                                [_c("v-icon", [_vm._v(_vm._s(item.icon))])],
                                1
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "v-list-tile-content",
                            [
                              _c("v-list-tile-title", [
                                _vm._v(_vm._s(item.title))
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    }),
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                { attrs: { icon: "", flat: "" } },
                [_c("v-icon", [_vm._v("refresh")])],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                { attrs: { icon: "", flat: "" } },
                [_c("v-icon", [_vm._v("keyboard_arrow_left")])],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                { attrs: { icon: "", flat: "" } },
                [_c("v-icon", [_vm._v("keyboard_arrow_right")])],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vue-perfect-scrollbar",
            { staticClass: "mail-list--scrollbar" },
            [
              _c(
                "v-flex",
                { staticClass: "mail-content white" },
                [
                  _c(
                    "v-tabs",
                    { attrs: { "fixed-tabs": "", grow: "" } },
                    [
                      _c("v-tab", [
                        _vm._v("\n            Primary\n          ")
                      ]),
                      _vm._v(" "),
                      _c("v-tab", [_vm._v("\n            Social\n          ")]),
                      _vm._v(" "),
                      _c("v-tab", [
                        _vm._v("\n            Promotions\n          ")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list",
                    {
                      staticClass: "mail-list--list",
                      attrs: { "two-line": "" }
                    },
                    [
                      _vm._l(_vm.mails, function(item, index) {
                        return [
                          _c(
                            "v-list-tile",
                            {
                              key: index,
                              attrs: {
                                avatar: "",
                                ripple: "",
                                to: _vm.computeMailPath(item.uuid)
                              }
                            },
                            [
                              _c("v-list-tile-action", [_c("v-checkbox")], 1),
                              _vm._v(" "),
                              _c("v-list-tile-avatar", [
                                _c("img", { attrs: { src: item.from.avatar } })
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-list-tile-content",
                                [
                                  _c("v-list-tile-title", [
                                    _vm._v(_vm._s(item.from.name))
                                  ]),
                                  _vm._v(" "),
                                  _c("v-list-tile-sub-title", [
                                    _vm._v(_vm._s(item.title))
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
                                      _vm._s(_vm.formatDate(item.created_at))
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _vm.selected.indexOf(index) < 0
                                    ? _c(
                                        "v-icon",
                                        {
                                          attrs: { color: "grey lighten-1" },
                                          on: {
                                            click: function($event) {
                                              return _vm.toggle(index)
                                            }
                                          }
                                        },
                                        [_vm._v("star_border")]
                                      )
                                    : _c(
                                        "v-icon",
                                        { attrs: { color: "yellow darken-2" } },
                                        [_vm._v("star")]
                                      )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("v-divider", { key: "divider" + index })
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/email/Reply.vue?vue&type=template&id=2923fa78&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/components/email/Reply.vue?vue&type=template&id=2923fa78& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
      staticClass: "pa-0 mail-reply",
      attrs: { fluid: "", "fill-height": "", id: "mailReply" }
    },
    [
      _c(
        "v-layout",
        { staticClass: "mail-reply--layout", attrs: { column: "" } },
        [
          _c(
            "v-toolbar",
            {
              staticClass: "mail-reply--toolbar",
              attrs: { flat: "", fixed: "", app: "" }
            },
            [
              _c(
                "v-toolbar-title",
                [
                  _c("v-avatar", { attrs: { size: "32" } }, [
                    _c("img", { attrs: { src: _vm.mail.from.avatar } })
                  ]),
                  _vm._v(" "),
                  _c("span", [_vm._v(" " + _vm._s(_vm.mail.from.name))])
                ],
                1
              ),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("v-spacer"),
              _vm._v(" "),
              _c(
                "v-btn",
                { attrs: { icon: "" } },
                [
                  _c("v-icon", { attrs: { color: "yellow", small: "" } }, [
                    _vm._v("star")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "caption" }, [
                _vm._v(_vm._s(_vm.formatDate(_vm.mail.created_at)))
              ]),
              _vm._v(" "),
              _c(
                "v-btn",
                { attrs: { icon: "", small: "" } },
                [_c("v-icon", { attrs: { small: "" } }, [_vm._v("reply")])],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                { attrs: { icon: "", small: "" } },
                [_c("v-icon", { attrs: { small: "" } }, [_vm._v("reply_all")])],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                { attrs: { icon: "", small: "" } },
                [_c("v-icon", { attrs: { small: "" } }, [_vm._v("delete")])],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                { attrs: { icon: "", small: "" } },
                [
                  _c("v-icon", { attrs: { small: "" } }, [
                    _vm._v("expand_more")
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
            { staticClass: "mail-reply--content" },
            [
              _c(
                "vue-perfect-scrollbar",
                { staticClass: "mail-reply--scrollbar" },
                [
                  _c(
                    "v-card",
                    [
                      _c("v-card-text", { staticClass: "pa-4" }, [
                        _c("div", { staticClass: "mail-reply--item" }, [
                          _c(
                            "div",
                            { staticClass: "layout column" },
                            [
                              _c("h3", { staticClass: "headline" }, [
                                _vm._v("Hi Michael")
                              ]),
                              _vm._v(" "),
                              _c("div", {
                                staticClass: "text--secondary my-4",
                                domProps: {
                                  innerHTML: _vm._s(_vm.mail.content)
                                }
                              }),
                              _vm._v(" "),
                              _c("h4", [
                                _vm._v(
                                  "\n                  " +
                                    _vm._s(_vm.mail.from.name) +
                                    ",\n                  "
                                ),
                                _c("br"),
                                _vm._v(
                                  "\n                  Thanks\n                "
                                )
                              ]),
                              _vm._v(" "),
                              _c("v-divider", { staticClass: "my-4" }),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "py-3" },
                                [
                                  _c(
                                    "v-alert",
                                    {
                                      attrs: {
                                        outline: "",
                                        color: "primary",
                                        icon: "attach_file",
                                        value: true
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                    Weekly Report\n                  "
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-card",
                                [
                                  _c(
                                    "v-card-text",
                                    { staticClass: "pa-0" },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          counter: "",
                                          placeholder: "Your reply here",
                                          "full-width": "",
                                          "multi-line": ""
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-toolbar",
                                    { attrs: { dense: "", flat: "" } },
                                    [
                                      _c(
                                        "v-btn",
                                        { attrs: { icon: "" } },
                                        [_c("v-icon", [_vm._v("attach_file")])],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        { attrs: { icon: "" } },
                                        [_c("v-icon", [_vm._v("link")])],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        { attrs: { icon: "" } },
                                        [_c("v-icon", [_vm._v("camera")])],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("v-spacer"),
                                      _vm._v(" "),
                                      _c(
                                        "v-btn",
                                        { attrs: { flat: "", icon: "" } },
                                        [_c("v-icon", [_vm._v("send")])],
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
                        ])
                      ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/views/Media.vue?vue&type=template&id=52c688ad&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/views/Media.vue?vue&type=template&id=52c688ad&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "media", attrs: { id: "media" } },
    [
      _c(
        "v-toolbar",
        { staticClass: "elevation-0 transparent media-toolbar" },
        [
          _c(
            "v-btn-toggle",
            [
              _c(
                "v-btn",
                { attrs: { flat: "" } },
                [
                  _c("v-icon", { attrs: { color: "primary" } }, [
                    _vm._v("cloud_upload")
                  ]),
                  _vm._v("\n         Upload\n      ")
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                { attrs: { flat: "" } },
                [
                  _c("v-icon", { attrs: { color: "primary" } }, [
                    _vm._v("folder")
                  ]),
                  _vm._v("\n          Add Folder\n      ")
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "v-btn-toggle",
            {
              model: {
                value: _vm.view,
                callback: function($$v) {
                  _vm.view = $$v
                },
                expression: "view"
              }
            },
            [
              _c(
                "v-btn",
                { attrs: { flat: "", value: "list" } },
                [
                  _c("v-icon", { attrs: { color: "primary" } }, [
                    _vm._v("view_headline")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                { attrs: { flat: "", value: "grid" } },
                [
                  _c("v-icon", { attrs: { color: "primary" } }, [
                    _vm._v("view_list")
                  ])
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
      _c("v-divider"),
      _vm._v(" "),
      _c("div", { staticClass: "layout row media-layout" }, [
        _c(
          "div",
          { staticClass: "media-content flex transparent" },
          [
            _c(
              "vue-perfect-scrollbar",
              { staticClass: "media-content--warp" },
              [
                _vm.view === "grid"
                  ? _c(
                      "v-container",
                      { attrs: { fluid: "" } },
                      [
                        _c(
                          "v-layout",
                          {
                            staticClass: "x-grid-lg",
                            attrs: { row: "", wrap: "" }
                          },
                          [
                            _vm._l(_vm.folders, function(item, index) {
                              return _c(
                                "v-flex",
                                {
                                  key: "folder" + index,
                                  staticClass: "pa-2",
                                  attrs: { lg4: "", sm12: "", xs12: "" }
                                },
                                [
                                  _c(
                                    "v-card",
                                    { attrs: { flat: "", tile: "" } },
                                    [
                                      _c(
                                        "v-responsive",
                                        { attrs: { height: "150px" } },
                                        [
                                          _c(
                                            "v-icon",
                                            {
                                              staticClass: "mx-auto",
                                              attrs: {
                                                size: "135",
                                                color: "indigo"
                                              }
                                            },
                                            [_vm._v("folder")]
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("v-divider"),
                                      _vm._v(" "),
                                      _c("v-card-title", [
                                        _vm._v(
                                          "\n                  " +
                                            _vm._s(item.name) +
                                            "\n                "
                                        )
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            }),
                            _vm._v(" "),
                            _vm._l(_vm.files, function(item, index) {
                              return _c(
                                "v-flex",
                                {
                                  key: index,
                                  staticClass: "pa-2",
                                  attrs: { lg4: "", sm12: "", xs12: "" }
                                },
                                [
                                  _c(
                                    "a",
                                    {
                                      staticClass: "d-flex",
                                      on: {
                                        click: function($event) {
                                          return _vm.showDetail(item)
                                        }
                                      }
                                    },
                                    [
                                      _c(
                                        "v-card",
                                        { attrs: { flat: "", tile: "" } },
                                        [
                                          _c(
                                            "v-responsive",
                                            {
                                              attrs: {
                                                height: "150px",
                                                width: "150px"
                                              }
                                            },
                                            [
                                              _vm.isImage(item)
                                                ? _c("img", {
                                                    attrs: {
                                                      src: item.path,
                                                      alt: ""
                                                    }
                                                  })
                                                : _c(
                                                    "v-icon",
                                                    {
                                                      staticClass: "mx-auto",
                                                      attrs: { size: "135" }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "insert_drive_file"
                                                      )
                                                    ]
                                                  )
                                            ],
                                            1
                                          ),
                                          _vm._v(" "),
                                          _c("v-divider"),
                                          _vm._v(" "),
                                          _c("v-card-title", [
                                            _vm._v(
                                              "\n                    " +
                                                _vm._s(item.fileName) +
                                                "\n                  "
                                            )
                                          ])
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ]
                              )
                            })
                          ],
                          2
                        )
                      ],
                      1
                    )
                  : _c(
                      "v-layout",
                      { attrs: { column: "" } },
                      [
                        _c(
                          "v-list",
                          { staticClass: "transparent", attrs: { dense: "" } },
                          _vm._l(_vm.files, function(item, index) {
                            return _c(
                              "v-list-tile",
                              {
                                key: "list-file-" + index,
                                attrs: { avatar: "" },
                                on: {
                                  click: function($event) {
                                    return _vm.showDetail(item)
                                  }
                                }
                              },
                              [
                                _c(
                                  "v-list-tile-avatar",
                                  [
                                    _c("v-icon", [
                                      _vm._v(_vm._s(_vm.mimeIcons(item)))
                                    ])
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("v-list-tile-content", [
                                  _c("div", { staticClass: "container pl-0" }, [
                                    _c(
                                      "div",
                                      { staticClass: "layout row" },
                                      [
                                        _c("div", { staticClass: "flex" }, [
                                          _vm._v(_vm._s(item.fileName))
                                        ]),
                                        _vm._v(" "),
                                        _c("v-spacer"),
                                        _vm._v(" "),
                                        _c("div", { staticClass: "caption" }, [
                                          _vm._v(
                                            "\n                      " +
                                              _vm._s(
                                                item
                                                  ? _vm.formateDate(item.ctime)
                                                  : ""
                                              ) +
                                              "\n                    "
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ])
                                ])
                              ],
                              1
                            )
                          }),
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
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/dashboard/components/email/Compose.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/dashboard/components/email/Compose.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Compose_vue_vue_type_template_id_404f7628___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Compose.vue?vue&type=template&id=404f7628& */ "./resources/js/components/dashboard/components/email/Compose.vue?vue&type=template&id=404f7628&");
/* harmony import */ var _Compose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Compose.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/components/email/Compose.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Compose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Compose_vue_vue_type_template_id_404f7628___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Compose_vue_vue_type_template_id_404f7628___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/components/email/Compose.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/components/email/Compose.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/components/email/Compose.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Compose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Compose.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/email/Compose.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Compose_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/components/email/Compose.vue?vue&type=template&id=404f7628&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/components/email/Compose.vue?vue&type=template&id=404f7628& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Compose_vue_vue_type_template_id_404f7628___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Compose.vue?vue&type=template&id=404f7628& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/email/Compose.vue?vue&type=template&id=404f7628&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Compose_vue_vue_type_template_id_404f7628___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Compose_vue_vue_type_template_id_404f7628___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/dashboard/components/email/Layout.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/dashboard/components/email/Layout.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout_vue_vue_type_template_id_8be8e280___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout.vue?vue&type=template&id=8be8e280& */ "./resources/js/components/dashboard/components/email/Layout.vue?vue&type=template&id=8be8e280&");
/* harmony import */ var _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/components/email/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Layout_vue_vue_type_template_id_8be8e280___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Layout_vue_vue_type_template_id_8be8e280___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/components/email/Layout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/components/email/Layout.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/components/email/Layout.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/email/Layout.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/components/email/Layout.vue?vue&type=template&id=8be8e280&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/components/email/Layout.vue?vue&type=template&id=8be8e280& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_8be8e280___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Layout.vue?vue&type=template&id=8be8e280& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/email/Layout.vue?vue&type=template&id=8be8e280&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_8be8e280___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Layout_vue_vue_type_template_id_8be8e280___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/dashboard/components/email/List.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/components/dashboard/components/email/List.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List_vue_vue_type_template_id_992e5c98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=992e5c98& */ "./resources/js/components/dashboard/components/email/List.vue?vue&type=template&id=992e5c98&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/components/email/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_vue_vue_type_template_id_992e5c98___WEBPACK_IMPORTED_MODULE_0__["render"],
  _List_vue_vue_type_template_id_992e5c98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/components/email/List.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/components/email/List.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/dashboard/components/email/List.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/email/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/components/email/List.vue?vue&type=template&id=992e5c98&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/components/email/List.vue?vue&type=template&id=992e5c98& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_992e5c98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=template&id=992e5c98& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/email/List.vue?vue&type=template&id=992e5c98&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_992e5c98___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_992e5c98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/dashboard/components/email/Reply.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/dashboard/components/email/Reply.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Reply_vue_vue_type_template_id_2923fa78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reply.vue?vue&type=template&id=2923fa78& */ "./resources/js/components/dashboard/components/email/Reply.vue?vue&type=template&id=2923fa78&");
/* harmony import */ var _Reply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reply.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/components/email/Reply.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Reply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Reply_vue_vue_type_template_id_2923fa78___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Reply_vue_vue_type_template_id_2923fa78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/components/email/Reply.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/components/email/Reply.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/dashboard/components/email/Reply.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Reply.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/email/Reply.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reply_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/components/email/Reply.vue?vue&type=template&id=2923fa78&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/components/email/Reply.vue?vue&type=template&id=2923fa78& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reply_vue_vue_type_template_id_2923fa78___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Reply.vue?vue&type=template&id=2923fa78& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/components/email/Reply.vue?vue&type=template&id=2923fa78&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reply_vue_vue_type_template_id_2923fa78___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reply_vue_vue_type_template_id_2923fa78___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/dashboard/views/Media.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/dashboard/views/Media.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Media_vue_vue_type_template_id_52c688ad_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Media.vue?vue&type=template&id=52c688ad&scoped=true& */ "./resources/js/components/dashboard/views/Media.vue?vue&type=template&id=52c688ad&scoped=true&");
/* harmony import */ var _Media_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Media.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/views/Media.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Media_vue_vue_type_style_index_0_id_52c688ad_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Media.vue?vue&type=style&index=0&id=52c688ad&lang=stylus&scoped=true& */ "./resources/js/components/dashboard/views/Media.vue?vue&type=style&index=0&id=52c688ad&lang=stylus&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Media_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Media_vue_vue_type_template_id_52c688ad_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Media_vue_vue_type_template_id_52c688ad_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "52c688ad",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/views/Media.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/views/Media.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/dashboard/views/Media.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Media_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Media.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/views/Media.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Media_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/views/Media.vue?vue&type=style&index=0&id=52c688ad&lang=stylus&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/views/Media.vue?vue&type=style&index=0&id=52c688ad&lang=stylus&scoped=true& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Media_vue_vue_type_style_index_0_id_52c688ad_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--10-2!../../../../../node_modules/stylus-loader!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Media.vue?vue&type=style&index=0&id=52c688ad&lang=stylus&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/views/Media.vue?vue&type=style&index=0&id=52c688ad&lang=stylus&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Media_vue_vue_type_style_index_0_id_52c688ad_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Media_vue_vue_type_style_index_0_id_52c688ad_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Media_vue_vue_type_style_index_0_id_52c688ad_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Media_vue_vue_type_style_index_0_id_52c688ad_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Media_vue_vue_type_style_index_0_id_52c688ad_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/dashboard/views/Media.vue?vue&type=template&id=52c688ad&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/views/Media.vue?vue&type=template&id=52c688ad&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Media_vue_vue_type_template_id_52c688ad_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Media.vue?vue&type=template&id=52c688ad&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/views/Media.vue?vue&type=template&id=52c688ad&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Media_vue_vue_type_template_id_52c688ad_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Media_vue_vue_type_template_id_52c688ad_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard~routes"],{

/***/ "./resources/js/components/dashboard/api/file.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/dashboard/api/file.js ***!
  \*******************************************************/
/*! exports provided: getFileMenu, getFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFileMenu", function() { return getFileMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFile", function() { return getFile; });
var getFileMenu = [{
  icon: "photo",
  title: "Images",
  to: {
    path: "/media",
    query: {
      type: "image"
    }
  }
}, {
  icon: "videocam",
  title: "Video",
  to: {
    path: "/media",
    query: {
      type: "video"
    }
  }
}, {
  icon: "volume_down",
  title: "Audio",
  to: {
    path: "/media",
    query: {
      type: "audio"
    }
  }
}, {
  icon: "insert_drive_file",
  title: "Document",
  to: {
    path: "/media",
    query: {
      type: "doc"
    }
  }
}];
var Items = [{
  uuid: "a32c4aec-54de-4ff4-b165-8571ae805598",
  fileName: ".DS_Store",
  fileType: false,
  path: "static/.DS_Store",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/.DS_Store",
  ext: "",
  dir: "static",
  ctime: "2018-04-08T09:15:19.307Z",
  size: 12292
}, {
  uuid: "a30f71db-7dcf-4467-978f-e32841d47825",
  fileName: ".gitkeep",
  fileType: false,
  path: "static/.gitkeep",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/.gitkeep",
  ext: "",
  dir: "static",
  ctime: "2018-03-14T09:21:32.010Z",
  size: 0
}, {
  uuid: "ca1bf511-a44e-4663-8b68-323419236ddf",
  fileName: "google.png",
  fileType: "image/png",
  path: "static/avatar/google.png",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/avatar/google.png",
  ext: ".png",
  dir: "static/avatar",
  ctime: "2018-04-08T08:31:07.808Z",
  size: 12734
}, {
  uuid: "0693e01e-926c-4c95-818b-3f9b6d5413e7",
  fileName: "hangouts.png",
  fileType: "image/png",
  path: "static/avatar/hangouts.png",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/avatar/hangouts.png",
  ext: ".png",
  dir: "static/avatar",
  ctime: "2018-04-08T08:31:10.010Z",
  size: 15266
}, {
  uuid: "53d3ba9d-90f2-4a60-af86-04679321f551",
  fileName: "inbox.png",
  fileType: "image/png",
  path: "static/avatar/inbox.png",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/avatar/inbox.png",
  ext: ".png",
  dir: "static/avatar",
  ctime: "2018-04-08T08:31:13.303Z",
  size: 22444
}, {
  uuid: "ef6397dd-ca99-459f-9694-bf9475359a51",
  fileName: "keep.png",
  fileType: "image/png",
  path: "static/avatar/keep.png",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/avatar/keep.png",
  ext: ".png",
  dir: "static/avatar",
  ctime: "2018-04-08T08:31:15.534Z",
  size: 2146
}, {
  uuid: "e6dcaede-1c87-4052-a4e9-f894809d5984",
  fileName: "messenger.png",
  fileType: "image/png",
  path: "static/avatar/messenger.png",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/avatar/messenger.png",
  ext: ".png",
  dir: "static/avatar",
  ctime: "2018-04-08T08:31:24.183Z",
  size: 7006
}, {
  uuid: "78a63d97-c763-4fa4-883f-8f9ed4425a6a",
  fileName: "1.jpg",
  fileType: "image/jpeg",
  path: "static/bg/1.jpg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/bg/1.jpg",
  ext: ".jpg",
  dir: "static/bg",
  ctime: "2018-03-30T08:40:27.070Z",
  size: 275608
}, {
  uuid: "29245130-ec05-4bf1-90ea-06574faa9bda",
  fileName: "10.jpg",
  fileType: "image/jpeg",
  path: "static/bg/10.jpg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/bg/10.jpg",
  ext: ".jpg",
  dir: "static/bg",
  ctime: "2018-03-30T08:40:27.096Z",
  size: 283680
}, {
  uuid: "83c2cfc6-80c2-4bc0-af02-4b2e6a94a2d3",
  fileName: "11.jpg",
  fileType: "image/jpeg",
  path: "static/bg/11.jpg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/bg/11.jpg",
  ext: ".jpg",
  dir: "static/bg",
  ctime: "2018-03-30T08:40:27.100Z",
  size: 99467
}, {
  uuid: "71fa31b2-4463-4c4c-baf2-719cd89ab15a",
  fileName: "12.jpg",
  fileType: "image/jpeg",
  path: "static/bg/12.jpg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/bg/12.jpg",
  ext: ".jpg",
  dir: "static/bg",
  ctime: "2018-03-30T08:40:27.103Z",
  size: 82253
}, {
  uuid: "74db5dd4-f60d-415a-b6f7-3107ce2e5cda",
  fileName: "13.jpg",
  fileType: "image/jpeg",
  path: "static/bg/13.jpg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/bg/13.jpg",
  ext: ".jpg",
  dir: "static/bg",
  ctime: "2018-03-30T08:41:46.865Z",
  size: 103275
}, {
  uuid: "54dc3e30-a9c8-4a68-9f9b-b070f5a5fea4",
  fileName: "14.jpg",
  fileType: "image/jpeg",
  path: "static/bg/14.jpg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/bg/14.jpg",
  ext: ".jpg",
  dir: "static/bg",
  ctime: "2018-03-30T08:40:27.111Z",
  size: 103446
}, {
  uuid: "c2c9104b-8a26-4bce-b942-7104e57687b7",
  fileName: "15.jpg",
  fileType: "image/jpeg",
  path: "static/bg/15.jpg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/bg/15.jpg",
  ext: ".jpg",
  dir: "static/bg",
  ctime: "2018-03-30T08:40:27.119Z",
  size: 105339
}, {
  uuid: "6b608ce9-e35b-4dfb-87cb-f4ca19102996",
  fileName: "16.jpg",
  fileType: "image/jpeg",
  path: "static/bg/16.jpg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/bg/16.jpg",
  ext: ".jpg",
  dir: "static/bg",
  ctime: "2018-03-30T08:40:27.122Z",
  size: 88580
}, {
  uuid: "a9b26177-5927-44a5-8b7c-4cad8425e9a5",
  fileName: "17.jpg",
  fileType: "image/jpeg",
  path: "static/bg/17.jpg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/bg/17.jpg",
  ext: ".jpg",
  dir: "static/bg",
  ctime: "2018-03-30T08:40:27.125Z",
  size: 98465
}, {
  uuid: "f1168479-113a-4f8a-a014-45ff6351941e",
  fileName: "18.jpg",
  fileType: "image/jpeg",
  path: "static/bg/18.jpg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/bg/18.jpg",
  ext: ".jpg",
  dir: "static/bg",
  ctime: "2018-03-30T08:40:27.128Z",
  size: 100565
}, {
  uuid: "d1cd7b81-b301-425f-89d1-e0cbf2f7a0cb",
  fileName: "19.jpg",
  fileType: "image/jpeg",
  path: "static/bg/19.jpg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/bg/19.jpg",
  ext: ".jpg",
  dir: "static/bg",
  ctime: "2018-03-30T08:40:27.138Z",
  size: 39500
}, {
  uuid: "c9ebff9b-651a-43c8-8e8a-028bb69b00ef",
  fileName: "2.jpg",
  fileType: "image/jpeg",
  path: "static/bg/2.jpg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/bg/2.jpg",
  ext: ".jpg",
  dir: "static/bg",
  ctime: "2018-03-30T08:40:27.075Z",
  size: 268438
}, {
  uuid: "fa673c64-e747-4279-8574-be153c106ede",
  fileName: "20.jpg",
  fileType: "image/jpeg",
  path: "static/bg/20.jpg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/bg/20.jpg",
  ext: ".jpg",
  dir: "static/bg",
  ctime: "2018-03-30T08:40:27.143Z",
  size: 104204
}, {
  uuid: "74e2ab71-4261-4fa9-b2e7-4844ef9f1d58",
  fileName: "21.jpg",
  fileType: "image/jpeg",
  path: "static/bg/21.jpg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/bg/21.jpg",
  ext: ".jpg",
  dir: "static/bg",
  ctime: "2018-03-30T08:41:54.525Z",
  size: 91890
}, {
  uuid: "5fb2fed2-fc86-4bd5-9144-7d36b3dacd60",
  fileName: "22.jpg",
  fileType: "image/jpeg",
  path: "static/bg/22.jpg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/bg/22.jpg",
  ext: ".jpg",
  dir: "static/bg",
  ctime: "2018-03-30T08:40:27.150Z",
  size: 104620
}, {
  uuid: "8d6cdfc5-e69a-44d2-b6e3-4265b4b87cc1",
  fileName: "23.jpg",
  fileType: "image/jpeg",
  path: "static/bg/23.jpg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/bg/23.jpg",
  ext: ".jpg",
  dir: "static/bg",
  ctime: "2018-03-30T08:40:27.157Z",
  size: 103130
}, {
  uuid: "d733c863-b5ed-46b2-9eb2-42eb9fa285fa",
  fileName: "24.jpg",
  fileType: "image/jpeg",
  path: "static/bg/24.jpg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/bg/24.jpg",
  ext: ".jpg",
  dir: "static/bg",
  ctime: "2018-03-30T08:40:27.159Z",
  size: 105835
}, {
  uuid: "f9c7064e-2542-473f-9b4d-98d122ef4364",
  fileName: "25.jpg",
  fileType: "image/jpeg",
  path: "static/bg/25.jpg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/bg/25.jpg",
  ext: ".jpg",
  dir: "static/bg",
  ctime: "2018-03-30T08:40:27.162Z",
  size: 95075
}, {
  uuid: "e2ea7604-a86d-4fef-bb20-40fae6bb7ce0",
  fileName: "26.jpg",
  fileType: "image/jpeg",
  path: "static/bg/26.jpg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/bg/26.jpg",
  ext: ".jpg",
  dir: "static/bg",
  ctime: "2018-03-30T08:40:27.166Z",
  size: 104342
}, {
  uuid: "f7570a47-938c-4e9c-aba6-a82f30b7bef5",
  fileName: "27.jpg",
  fileType: "image/jpeg",
  path: "static/bg/27.jpg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/bg/27.jpg",
  ext: ".jpg",
  dir: "static/bg",
  ctime: "2018-03-30T08:40:27.168Z",
  size: 90063
}, {
  uuid: "4dc41162-89b5-499b-b702-cf951a04841e",
  fileName: "28.jpg",
  fileType: "image/jpeg",
  path: "static/bg/28.jpg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/bg/28.jpg",
  ext: ".jpg",
  dir: "static/bg",
  ctime: "2018-03-30T08:40:27.171Z",
  size: 132461
}, {
  uuid: "ed316744-39c6-4de3-a346-4436d080291a",
  fileName: "29.jpg",
  fileType: "image/jpeg",
  path: "static/bg/29.jpg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/bg/29.jpg",
  ext: ".jpg",
  dir: "static/bg",
  ctime: "2018-03-30T08:40:27.173Z",
  size: 121466
}, {
  uuid: "af9acc25-694a-4656-a790-584129b21cc4",
  fileName: "3.jpg",
  fileType: "image/jpeg",
  path: "static/bg/3.jpg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/bg/3.jpg",
  ext: ".jpg",
  dir: "static/bg",
  ctime: "2018-03-30T08:40:27.077Z",
  size: 308780
}, {
  uuid: "c2be3695-f084-4a41-bc0b-79062e4eefe0",
  fileName: "30.jpg",
  fileType: "image/jpeg",
  path: "static/bg/30.jpg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/bg/30.jpg",
  ext: ".jpg",
  dir: "static/bg",
  ctime: "2018-03-30T08:40:27.176Z",
  size: 125198
}, {
  uuid: "708a5185-2de7-4477-ac84-d99f434fa7cc",
  fileName: "31.jpg",
  fileType: "image/jpeg",
  path: "static/bg/31.jpg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/bg/31.jpg",
  ext: ".jpg",
  dir: "static/bg",
  ctime: "2018-03-30T08:40:27.179Z",
  size: 292495
}, {
  uuid: "c9782516-bd3d-4ca6-9397-91b806d4d5aa",
  fileName: "32.jpg",
  fileType: "image/jpeg",
  path: "static/bg/32.jpg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/bg/32.jpg",
  ext: ".jpg",
  dir: "static/bg",
  ctime: "2018-03-30T08:40:27.186Z",
  size: 278854
}, {
  uuid: "00ac4093-8202-408e-8b88-a33313d39e6b",
  fileName: "33.jpg",
  fileType: "image/jpeg",
  path: "static/bg/33.jpg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/bg/33.jpg",
  ext: ".jpg",
  dir: "static/bg",
  ctime: "2018-03-30T08:40:27.196Z",
  size: 296287
}, {
  uuid: "9d3ed291-8706-4d1c-b37a-9da33f808622",
  fileName: "34.jpg",
  fileType: "image/jpeg",
  path: "static/bg/34.jpg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/bg/34.jpg",
  ext: ".jpg",
  dir: "static/bg",
  ctime: "2018-03-30T08:40:27.199Z",
  size: 298335
}, {
  uuid: "38cfc863-13f1-4ab6-acd1-2f403b77f539",
  fileName: "35.jpg",
  fileType: "image/jpeg",
  path: "static/bg/35.jpg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/bg/35.jpg",
  ext: ".jpg",
  dir: "static/bg",
  ctime: "2018-03-30T08:40:27.204Z",
  size: 285123
}, {
  uuid: "1cbde33c-6ef6-45e6-930a-94bfae6a4b4d",
  fileName: "36.jpg",
  fileType: "image/jpeg",
  path: "static/bg/36.jpg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/bg/36.jpg",
  ext: ".jpg",
  dir: "static/bg",
  ctime: "2018-03-30T08:40:27.207Z",
  size: 294032
}, {
  uuid: "c4835081-6414-4e23-ae05-6b23997a4f6f",
  fileName: "37.jpg",
  fileType: "image/jpeg",
  path: "static/bg/37.jpg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/bg/37.jpg",
  ext: ".jpg",
  dir: "static/bg",
  ctime: "2018-03-30T08:40:27.210Z",
  size: 261250
}, {
  uuid: "16647278-2e36-4285-8347-7aeab0fbf468",
  fileName: "38.jpg",
  fileType: "image/jpeg",
  path: "static/bg/38.jpg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/bg/38.jpg",
  ext: ".jpg",
  dir: "static/bg",
  ctime: "2018-03-30T08:40:27.214Z",
  size: 292620
}, {
  uuid: "e8047c06-fca2-4405-8823-d5497c788362",
  fileName: "39.jpg",
  fileType: "image/jpeg",
  path: "static/bg/39.jpg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/bg/39.jpg",
  ext: ".jpg",
  dir: "static/bg",
  ctime: "2018-03-30T08:40:27.217Z",
  size: 290569
}, {
  uuid: "d69f047b-8ebf-4d3d-b436-09bbbf6cba4b",
  fileName: "4.jpg",
  fileType: "image/jpeg",
  path: "static/bg/4.jpg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/bg/4.jpg",
  ext: ".jpg",
  dir: "static/bg",
  ctime: "2018-03-30T08:40:27.080Z",
  size: 287013
}, {
  uuid: "ad16609e-154b-401d-835f-bbcb6f4a496b",
  fileName: "40.jpg",
  fileType: "image/jpeg",
  path: "static/bg/40.jpg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/bg/40.jpg",
  ext: ".jpg",
  dir: "static/bg",
  ctime: "2018-03-30T08:40:27.219Z",
  size: 297662
}, {
  uuid: "8c4cf24d-de27-4aea-abca-f38865cc9239",
  fileName: "5.jpg",
  fileType: "image/jpeg",
  path: "static/bg/5.jpg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/bg/5.jpg",
  ext: ".jpg",
  dir: "static/bg",
  ctime: "2018-03-30T08:40:27.083Z",
  size: 318957
}, {
  uuid: "88a031a1-323d-4ca6-9115-61762dbdffe9",
  fileName: "6.jpg",
  fileType: "image/jpeg",
  path: "static/bg/6.jpg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/bg/6.jpg",
  ext: ".jpg",
  dir: "static/bg",
  ctime: "2018-03-30T08:41:50.063Z",
  size: 287785
}, {
  uuid: "5e42c142-b511-4a11-bdaf-ae85ac8417c6",
  fileName: "7.jpg",
  fileType: "image/jpeg",
  path: "static/bg/7.jpg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/bg/7.jpg",
  ext: ".jpg",
  dir: "static/bg",
  ctime: "2018-03-30T08:40:27.089Z",
  size: 285392
}, {
  uuid: "5194e91c-5975-40a4-9353-83055b0c8cbb",
  fileName: "8.jpg",
  fileType: "image/jpeg",
  path: "static/bg/8.jpg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/bg/8.jpg",
  ext: ".jpg",
  dir: "static/bg",
  ctime: "2018-03-30T08:40:27.091Z",
  size: 272918
}, {
  uuid: "c5f859ed-012c-48d3-a037-bf164f8b0c84",
  fileName: "9.jpg",
  fileType: "image/jpeg",
  path: "static/bg/9.jpg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/bg/9.jpg",
  ext: ".jpg",
  dir: "static/bg",
  ctime: "2018-03-30T08:40:27.094Z",
  size: 285242
}, {
  uuid: "b83f94eb-3fa4-474f-8b09-91ec5b9e67da",
  fileName: "403.svg",
  fileType: "image/svg+xml",
  path: "static/error/403.svg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/error/403.svg",
  ext: ".svg",
  dir: "static/error",
  ctime: "2018-03-30T06:10:45.825Z",
  size: 55336
}, {
  uuid: "7b93354a-fc3c-45ae-890a-8bcb5c294f55",
  fileName: "404.svg",
  fileType: "image/svg+xml",
  path: "static/error/404.svg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/error/404.svg",
  ext: ".svg",
  dir: "static/error",
  ctime: "2018-03-30T06:10:45.814Z",
  size: 88876
}, {
  uuid: "d2b741d4-206d-4be5-819d-3a00fd6895f0",
  fileName: "500.svg",
  fileType: "image/svg+xml",
  path: "static/error/500.svg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/error/500.svg",
  ext: ".svg",
  dir: "static/error",
  ctime: "2018-03-30T06:10:45.818Z",
  size: 88720
}, {
  uuid: "cf1cd0df-861e-4216-beba-c5fa266081dd",
  fileName: "google.svg",
  fileType: "image/svg+xml",
  path: "static/google.svg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/google.svg",
  ext: ".svg",
  dir: "static",
  ctime: "2018-03-30T06:10:12.693Z",
  size: 1574
}, {
  uuid: "d145ac45-57b4-4754-a058-79bf42bb2963",
  fileName: "manifest.json",
  fileType: "application/json",
  path: "static/manifest.json",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/manifest.json",
  ext: ".json",
  dir: "static",
  ctime: "2018-03-14T09:21:32.018Z",
  size: 303
}, {
  uuid: "8b2ca729-a2eb-4950-855d-1dd3ce831765",
  fileName: "robots.txt",
  fileType: "text/plain",
  path: "static/robots.txt",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/robots.txt",
  ext: ".txt",
  dir: "static",
  ctime: "2018-03-14T09:21:32.021Z",
  size: 23
}, {
  uuid: "e5a6e6f5-a9c8-49be-b2e2-c5074f4fa6c2",
  fileName: "sitemap.xml",
  fileType: "application/xml",
  path: "static/sitemap.xml",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/sitemap.xml",
  ext: ".xml",
  dir: "static",
  ctime: "2018-03-14T09:21:32.019Z",
  size: 15488
}, {
  uuid: "7cf65477-4aad-45de-924c-a38ded2471ef",
  fileName: "v.png",
  fileType: "image/png",
  path: "static/v.png",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/v.png",
  ext: ".png",
  dir: "static",
  ctime: "2018-03-14T09:21:32.023Z",
  size: 5674
}, {
  uuid: "5d333a3d-9140-4b8c-9ae3-9a8a96f0309e",
  fileName: "v.svg",
  fileType: "image/svg+xml",
  path: "static/v.svg",
  fullPath: "/Users/michael/themeforest/vue-material-admin/static/v.svg",
  ext: ".svg",
  dir: "static",
  ctime: "2018-03-14T09:21:32.017Z",
  size: 538
}];

var getFile = function getFile(limit) {
  return limit ? Items.slice(0, limit) : Items;
};



/***/ }),

/***/ "./resources/js/components/dashboard/api/mail.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/dashboard/api/mail.js ***!
  \*******************************************************/
/*! exports provided: getMail, MailMenu, getMailById, getMailByType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMail", function() { return getMail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailMenu", function() { return MailMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMailById", function() { return getMailById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMailByType", function() { return getMailByType; });
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./resources/js/components/dashboard/api/user.js");

var MailItem = [{
  uuid: "bb428c03-1bc6-4f3d-9d5e-268ec44eebc3",
  type: "trashed",
  tag: "Promotion",
  title: "Similique voluptate laboriosam laborum.",
  created_at: "2018-04-10T23:10:41.266Z",
  content: "Tempora et optio quis ducimus. Veniam et qui quia ut necessitatibus architecto ad. Vel ut consequatur non sint est error sint.\n \rError asperiores a esse ad. Rerum eum magni aperiam voluptas excepturi. Suscipit est modi magni et ut eum ut.\n \rCumque eius voluptatem sit qui nisi. Eos eum est cumque est ipsa odit earum voluptas. Dolorum ipsam rerum ut.\n \rAutem quia delectus quia rerum deleniti reprehenderit voluptatibus quisquam. Necessitatibus molestias vel odio neque expedita nulla libero voluptatem numquam. In labore modi. Unde molestiae id molestias vero delectus rerum nesciunt voluptatum exercitationem.\n \rCorrupti et voluptatibus ea dolorem laboriosam. Amet cupiditate beatae nulla. Facilis sit est. Sed ducimus ducimus alias rem nam.",
  fromId: "14ddae1e-986d-42f4-8d17-46a02d469b2b",
  attachments: []
}, {
  uuid: "a19bf9fc-e877-49e7-a75a-b089a2c35f18",
  type: "draft",
  tag: "Social",
  title: "Ipsum maiores ab amet voluptas enim.",
  created_at: "2018-04-10T12:05:32.328Z",
  content: "Dolores corporis quam perferendis consequatur autem minus recusandae non. Id corrupti qui et. Sed a accusamus veritatis earum et consequatur mollitia. Iure consequatur omnis aspernatur itaque laboriosam aut ut. Enim repellendus sed similique minima voluptatem sed ea. Exercitationem aut est eius rerum.\n \rUt veniam quidem et numquam reprehenderit aliquam. Omnis eos qui enim hic modi maiores. Nisi itaque et unde ullam laborum ut aut facilis. Enim qui aut est.\n \rTotam molestiae velit aperiam rerum. Voluptatum quo ab. Quae cupiditate sit quia illum delectus nobis adipisci sunt.\n \rAlias nostrum ad ipsam aut nulla et repudiandae incidunt doloribus. Vero rerum omnis. Consequatur eius et accusamus quaerat et unde animi. Sed et quaerat sit quis mollitia. Accusantium voluptatem perferendis qui enim similique molestiae ut sit velit.\n \rProvident quibusdam excepturi asperiores vitae earum ut fugiat. Eligendi illum nisi dolor. Maiores velit vitae minus.",
  fromId: "60d07662-bfec-42c7-b044-c81bc4ff8c7a",
  attachments: []
}, {
  uuid: "910d7e0a-f3b0-47a7-bb53-9036ed717298",
  type: "starred",
  tag: "Work",
  title: "Quo consequatur cumque.",
  created_at: "2018-04-11T02:12:00.447Z",
  content: "Accusamus enim nihil aliquam soluta praesentium repudiandae autem voluptatum. Dolore aut at incidunt molestias commodi odit et. Quis possimus et dolorem. Cupiditate nulla voluptas. Quis sit ab.\n \rIusto accusamus neque commodi est omnis et aut doloremque autem. Illo unde est deserunt accusantium. Quia iusto velit autem dignissimos natus sit voluptatum. Aliquam et quibusdam mollitia consectetur quod aut at eveniet consequatur.\n \rMagnam et repellat tenetur libero. Quasi autem animi exercitationem est enim dolores facere earum fugit. Porro necessitatibus est amet quis. Officia qui itaque inventore magnam ut temporibus ad.\n \rOfficia ratione velit vel consequatur et est. Quibusdam consequatur et earum et ut consequatur dolorem at minus. Sit aperiam voluptas dolorem id. Et ad deleniti sunt consequatur omnis commodi distinctio dolor. Asperiores eum similique est aut. Totam harum voluptates ipsum dolores eos dolor ut.\n \rNam qui sed. Maiores occaecati voluptatibus iste quae temporibus odit. Voluptas vel quis suscipit ex ab. Dolores aut explicabo modi rerum et odit similique. Ut officia corrupti rerum repellendus laborum. Velit in aliquam ex blanditiis et ab.",
  fromId: "77f4b102-9df5-43ba-966a-6f816806c5e2",
  attachments: []
}, {
  uuid: "c79cb60a-baf8-4349-b9c3-88d567b965a2",
  type: "draft",
  tag: "Social",
  title: "Qui consequatur et rerum optio atque.",
  created_at: "2018-04-10T18:56:23.358Z",
  content: "Explicabo quidem a dolore modi nihil id nostrum voluptates ex. Repellendus quis tempore unde molestiae unde ipsa. Excepturi quod omnis facere est porro incidunt ratione suscipit.\n \rCupiditate et sunt iure aperiam. Beatae cupiditate cumque. Dolorem iste quia unde cum est molestiae est.\n \rMolestiae et sit dolore iste ipsam voluptas quia. Ut quia unde culpa ipsa commodi possimus. Ut maiores molestiae sunt qui labore. Provident sit eius recusandae numquam eum exercitationem quis asperiores.\n \rEaque et at ea voluptatem id qui omnis. Aut ex rem. Iste voluptate magni sequi eaque sit numquam accusantium aut molestias.\n \rSit laboriosam magni illum accusantium aut nulla corporis sed. Et ratione iusto dolor porro voluptatem voluptatem voluptate. Autem non animi. Aut unde aliquid omnis natus suscipit. Saepe dicta veritatis id autem doloremque tempore corrupti.",
  fromId: "7d910620-84e1-49fc-951e-d375587b8189",
  attachments: []
}, {
  uuid: "35bddac1-1046-4c96-a1ac-ffd75def7f5a",
  type: "trashed",
  tag: "Social",
  title: "Reiciendis sunt aliquid.",
  created_at: "2018-04-10T19:58:14.408Z",
  content: "Qui facere quia est consequatur nihil dolores dolorem magni eum. Occaecati ab atque ut vitae ipsum officiis et expedita. Quisquam architecto repellat eos. Ut repellendus animi rerum delectus natus. Explicabo est enim est fugiat nisi est alias non.\n \rMaxime autem eum ut est et dolorem. Non ab deserunt voluptatem sequi deleniti quo commodi. Est tempore rerum quia. Id est temporibus iste voluptas amet omnis amet. Veniam blanditiis consequuntur laborum.\n \rVoluptates nihil ut. Doloremque dicta at consequuntur qui. Sit culpa possimus aut nemo. Aut atque quaerat voluptatum nostrum voluptatum laudantium officia quia incidunt. Quia est earum aut.\n \rQuisquam dolorum dolorum. Dicta quas veniam dignissimos fugiat. Ut nostrum dolores explicabo eos rem dolores dolorum autem. A dolorem eum reiciendis amet ea et.\n \rSit tempore ut. Culpa veniam voluptatum quod odio. Cum fugit autem doloremque quidem molestias labore.",
  fromId: "46d6f992-5729-4588-b7f8-ce74f21157ba",
  attachments: []
}, {
  uuid: "0c914dfd-be0d-4d46-b963-47bcb064154f",
  type: "sent",
  tag: "Work",
  title: "Libero odit voluptate dolorem error cupiditate in.",
  created_at: "2018-04-11T04:07:16.152Z",
  content: "Delectus nisi enim ut illum magni quasi. Voluptatem consequatur quia quis. Consectetur dolores molestiae debitis aut voluptatem recusandae sit. Ut voluptas expedita aut et possimus sint.\n \rAmet cumque corporis ipsam non iure autem. Aut molestiae est. Est itaque doloremque consequuntur nesciunt et error quibusdam.\n \rEos architecto dignissimos voluptatem ut voluptate quisquam. Fugiat provident iste perspiciatis provident accusamus rerum. Tempora et ducimus velit eaque ratione eum. Voluptas tempore ullam. Et cum eos dolor nesciunt perferendis est.\n \rPerferendis aperiam id adipisci ea distinctio totam ut fugit eaque. Qui harum autem et vero vero sit. Ex pariatur hic deleniti.\n \rVoluptatem tenetur dolorem omnis dolorem vel ratione vel dolores necessitatibus. Eius culpa harum excepturi. Corrupti ut aut. Vitae quia ut necessitatibus aliquam et. Libero mollitia sit et dicta.",
  fromId: "65a6eb21-67b5-45c3-9af7-faca2d9b60d4",
  attachments: []
}, {
  uuid: "11538c3a-f2a7-4a7c-a237-4e61aa96423b",
  type: "sent",
  tag: "Personal",
  title: "Consequuntur nostrum aut iusto est porro voluptate.",
  created_at: "2018-04-10T08:22:54.855Z",
  content: "Voluptatibus ipsum voluptatem. Recusandae eius ad quia et nisi similique non. Enim nulla suscipit sed. Est neque aut itaque asperiores quia accusantium quas.\n \rSit vel facere suscipit ut eaque sapiente saepe et voluptates. Magni numquam voluptatem. Dolores magnam harum omnis ipsam quia ut ut iste.\n \rOdio temporibus est possimus minima id magnam et quas. Architecto nobis rerum non. Eum ipsa unde. Atque eaque sequi officiis omnis rerum aut. Voluptate debitis perferendis atque illo consectetur cupiditate. Autem eaque eum aut incidunt sunt error natus nostrum.\n \rPariatur ad quae dolorem. Sint quo itaque repudiandae suscipit ut accusamus. Esse perspiciatis consequatur qui perspiciatis quia. Ut sed eveniet eveniet dolor nostrum quisquam numquam. Cumque facilis temporibus et non facilis neque omnis.\n \rConsectetur sunt totam enim odio voluptatum ratione fuga ut. Eaque alias deserunt laboriosam deserunt aliquid. Sequi fuga totam. Eos ipsa nobis eveniet ut.",
  fromId: "28d9f265-74d7-4f85-83d4-6a21fca57dcf",
  attachments: []
}, {
  uuid: "0f0a5482-8e4f-42a0-b3bb-1f96bc04d85a",
  type: "draft",
  tag: "Promotion",
  title: "Sunt odit nisi sint cupiditate accusantium.",
  created_at: "2018-04-11T05:59:14.238Z",
  content: "Saepe asperiores incidunt aspernatur. Non animi eos impedit et veritatis consequatur voluptas culpa. Nihil culpa voluptas dolor doloremque ad laboriosam sed. Ut dolor vel earum deserunt molestias sint quo delectus. Accusamus et corporis et inventore optio consectetur ea culpa. Repellat suscipit voluptas laudantium pariatur rerum eum mollitia ipsum maiores.\n \rCorporis quam aut voluptatem voluptas consequatur rerum in. Repudiandae id nihil tenetur asperiores. Qui impedit et est animi ducimus adipisci. Eaque esse qui ipsum laudantium distinctio.\n \rCulpa occaecati optio autem libero sequi sed. Autem doloremque consectetur beatae soluta inventore voluptas et consequatur voluptate. Magni aspernatur sint facere sed molestiae quae ut et.\n \rBeatae ea et et occaecati. Cupiditate adipisci tempora illo aliquid. Esse illum qui omnis adipisci nihil. Corrupti officiis voluptatem perferendis nobis recusandae temporibus aut. Qui et facilis quidem amet velit incidunt consequatur repellat iste. Id aut fugit omnis placeat consectetur nostrum.\n \rAb quae accusamus omnis quidem cupiditate illum sit. Atque possimus aut esse saepe dolorum eos veniam repellendus. Ullam debitis dolore quisquam omnis sed ab eum ipsa. Voluptas facilis labore sapiente saepe quia.",
  fromId: "5c44b666-baca-4f18-a3cb-23068c6edc14",
  attachments: []
}, {
  uuid: "2b0e4083-00e4-48fd-9cb3-05434767ca66",
  type: "starred",
  tag: "Work",
  title: "Est deleniti dolores enim.",
  created_at: "2018-04-11T01:37:34.384Z",
  content: "Esse consequatur id dolorum culpa quia saepe unde quo consequatur. Facilis tempore incidunt dolorem est. Nihil animi omnis voluptatem earum facilis nulla animi temporibus reprehenderit.\n \rDeserunt voluptatem qui qui et alias. Ut corporis totam ut ducimus labore et. Vitae ut minus suscipit occaecati hic eum eum.\n \rQuia eos aliquam aspernatur in voluptas quo. Rem harum hic exercitationem impedit et earum adipisci quo aliquid. Voluptas commodi ut ipsam. Et consequatur sed eveniet corrupti voluptatum a tempore repudiandae. Repellat nihil fugit rem in impedit quo corporis iste nihil. Rerum deleniti quia.\n \rEt tenetur doloremque eos iste odit error. Molestias in repellat ea. Beatae ipsa est dolor.\n \rOccaecati nostrum sed voluptatem voluptatibus. Itaque perspiciatis aperiam. Alias sit iste quas est velit nihil perferendis deleniti.",
  fromId: "afdb5033-5bcc-4cec-b932-353a83410b44",
  attachments: []
}, {
  uuid: "bf7ab76b-c076-4992-a580-13b1859cd395",
  type: "sent",
  tag: "Work",
  title: "Et dolores odit quas quasi voluptas.",
  created_at: "2018-04-10T08:36:08.703Z",
  content: "Maxime quaerat voluptate inventore eveniet nesciunt neque. Tempora laudantium dolorem facere nobis suscipit quam quia ut. Veniam et sed eaque laboriosam voluptates odit nihil ipsum.\n \rAliquam sit repellat. Eveniet vel consequatur est facilis dolore quae. Voluptatem doloribus expedita hic fugit reiciendis consequuntur et dolor veritatis.\n \rItaque deleniti ad accusantium labore quibusdam. Id quo nam natus nisi vero quam iure a ea. Eveniet autem non at autem accusantium dolores nihil odit. Aut iusto necessitatibus minima architecto quidem repellat.\n \rDolore cupiditate libero ratione quis qui quia. Harum maxime fuga quia quis ipsa. Animi provident facere corrupti eligendi dolorum dolores. Animi vel est tempore alias consequatur voluptatem. Explicabo maxime molestiae dolore. Voluptatem cumque aliquid.\n \rVitae voluptatem doloribus voluptate corporis. Qui qui quibusdam doloribus cum est. Libero impedit commodi et recusandae explicabo. Aliquam ratione eius cumque id quae. Sed veniam ut sit illum aut reprehenderit pariatur et. Praesentium totam sunt sint doloribus ab in illum.",
  fromId: "899d0e31-b71e-4d95-a8a0-6a8bceb314bd",
  attachments: []
}, {
  uuid: "2d72dac8-42e8-4414-b14f-6b1680cbdcfb",
  type: "starred",
  tag: "Personal",
  title: "Aut consequuntur molestiae labore velit nihil consectetur facere rerum et.",
  created_at: "2018-04-11T02:00:01.416Z",
  content: "Et temporibus alias et dolor. Expedita sapiente fuga ut consequuntur facilis omnis provident quia labore. Placeat omnis aperiam veritatis velit veritatis ut suscipit in. Blanditiis non praesentium sit rerum ullam. Voluptatem ex voluptates illo qui quaerat consequuntur distinctio.\n \rNesciunt ipsa iusto odit enim qui excepturi assumenda aut consectetur. Nisi deleniti eaque ratione illo ut ut. Recusandae consequatur harum. Voluptas dolor recusandae qui. Illum animi deserunt animi fugiat saepe et quia. Non id sapiente nihil earum.\n \rOfficiis eum ut similique reprehenderit ipsum. Id provident culpa harum ipsam in commodi. Voluptates assumenda harum aperiam aliquid assumenda. Ipsam aperiam unde molestiae earum dolores ullam aspernatur tempora officia. Porro dolores sit.\n \rAd et sed reiciendis illum quia ut qui. Velit sunt harum accusamus. Amet dolores reprehenderit vitae aut expedita nobis optio ad assumenda. Accusamus reprehenderit quaerat minima velit expedita eos animi autem occaecati. Quidem dolor eligendi nemo. Architecto harum sint fugit sit at dolorem reprehenderit vero quia.\n \rVoluptatum voluptate ad. Ipsa ut quos et sint et doloremque. A voluptas libero ipsum aut deleniti eaque facere nostrum sed. Nesciunt voluptas facere. Non et et ut.",
  fromId: "77f4b102-9df5-43ba-966a-6f816806c5e2",
  attachments: []
}, {
  uuid: "156dfed3-0235-4a38-a5b2-6a99a2a39d59",
  type: "sent",
  tag: "Personal",
  title: "Corporis et voluptatem quam nam rem voluptas iure facilis tempora.",
  created_at: "2018-04-11T02:30:04.516Z",
  content: "Inventore est minima esse deleniti porro in aut cumque. Voluptatem ut et nulla. Illo aliquid quidem. Corrupti fuga vel in consequuntur aut et rerum eaque. Enim nihil cumque non aliquid eos repellat quam et maiores.\n \rVeritatis vero qui aut corporis veritatis quo similique dicta quisquam. Est et praesentium rem ea accusantium nobis. Consequatur nisi quisquam. Quisquam officiis quis enim. Dolores quis qui dignissimos voluptatem ea. Animi repellendus cum occaecati sint est vero voluptatibus neque.\n \rId molestiae doloremque doloremque totam. Est adipisci deserunt rerum officiis expedita. Quis tempore aliquam ducimus sunt accusamus velit autem. Quam voluptates quaerat labore dolorem blanditiis. Et magni dolorem.\n \rUllam sunt voluptatum. Vero eum reprehenderit quas labore. Nulla aliquam expedita ex iste sit aut. Voluptatem possimus est qui aut praesentium consequatur iste dolores. Et est accusantium aliquid temporibus accusantium similique officiis officiis esse. Molestiae beatae quidem culpa recusandae animi sint.\n \rEnim esse consectetur quibusdam aliquid. Deserunt dicta eveniet doloremque id ex voluptas iste est sapiente. Possimus sed aliquam voluptatum dignissimos voluptate natus. Fugit rerum vero expedita accusamus sequi.",
  fromId: "da95e977-cd54-4077-a767-1b7f33ef6919",
  attachments: []
}, {
  uuid: "2eedaa3e-1509-49fc-b60b-069bfc83558b",
  type: "trashed",
  tag: "Personal",
  title: "Eligendi nam quia pariatur iusto commodi omnis dignissimos nihil.",
  created_at: "2018-04-11T06:44:11.696Z",
  content: "Voluptatum est aut nulla occaecati. Sunt optio ea beatae. Occaecati quis et veritatis ipsum. Id hic eaque molestias facere. Impedit doloribus hic omnis.\n \rEt illo dolores. Suscipit aliquid dolorem. Esse est laboriosam voluptatibus. Quia voluptas repellendus.\n \rMinima molestiae illo corporis quae neque eligendi. Harum illo recusandae et dolor hic. In voluptas est quo iusto.\n \rEum soluta possimus atque quo cupiditate consequatur non. Non sed quidem porro explicabo. Perspiciatis omnis quis at eveniet asperiores quia. Cupiditate autem excepturi nobis id et dicta.\n \rQuibusdam minima sint molestias vitae incidunt voluptate voluptas et. Alias nihil rerum sapiente. Atque minus assumenda eveniet consectetur. Amet nulla odio nostrum architecto.",
  fromId: "36a1ead7-57a0-4275-8a21-956194ab7cdf",
  attachments: []
}, {
  uuid: "ef82e384-801e-49fb-91d4-1472ddc124fb",
  type: "trashed",
  tag: "Promotion",
  title: "Optio provident aspernatur nihil repellendus quia architecto.",
  created_at: "2018-04-10T12:18:03.092Z",
  content: "Voluptas in mollitia tenetur voluptatem tempora ducimus est exercitationem est. Delectus tempore aut quae maxime soluta rerum. Doloremque et ratione recusandae perspiciatis ad. Voluptatem inventore error amet eos non est corporis aut. Quae aut autem.\n \rFuga architecto consequatur sed et dolorum animi neque vitae voluptatibus. Quasi et ducimus officia sint quibusdam ea dolores ipsa magni. In cumque ab est aut. Animi consequatur debitis dignissimos tempore voluptatum est suscipit provident neque.\n \rReprehenderit possimus voluptatem. Itaque beatae dolore fuga alias autem et omnis aspernatur. Sit et facilis blanditiis pariatur et tenetur dolores.\n \rConsequatur officiis in modi. Quis omnis molestias voluptatem. Et accusamus minus atque officiis aliquid quo ut quis inventore. Sint quod inventore magnam sint voluptates. Facilis dolorem dolorem harum veritatis repellat et suscipit.\n \rError occaecati expedita. Est ipsa rerum ab. Ipsum sed impedit a id et fugit non soluta.",
  fromId: "afdb5033-5bcc-4cec-b932-353a83410b44",
  attachments: []
}, {
  uuid: "dae6e84d-4adb-4170-bc5f-087bc01b903d",
  type: "draft",
  tag: "Personal",
  title: "Id ipsam dolor facere quis numquam distinctio eveniet omnis et.",
  created_at: "2018-04-10T22:26:07.420Z",
  content: "Est doloribus et pariatur ut et voluptatum sed repellendus rerum. Dolor deleniti iusto voluptatem. Ipsam soluta aliquid in ut. Quaerat qui culpa in ex ut accusantium non consectetur cum.\n \rEos corporis dolores corporis rem quam. Ducimus aliquam mollitia ratione quo. Sed dolor eum aut est sint quaerat mollitia. Sunt quasi iste facere voluptatem. Illum perferendis accusamus quos quisquam voluptatem ab iste distinctio nisi.\n \rEst laborum ea illo similique magnam autem ullam numquam. Consequatur perspiciatis aut neque temporibus molestiae. Sed ullam incidunt officiis sed assumenda possimus quibusdam ex consequatur.\n \rRepellat ex ut nobis eaque aliquam. Voluptatibus sed consequatur et velit veniam. Eum natus est unde voluptates delectus id quia quaerat dignissimos. Repudiandae laboriosam atque magnam est nam. Dolor laborum libero sed libero.\n \rOfficiis non quidem amet in laborum repellendus aliquam. Illo ducimus numquam qui voluptates. Accusamus accusamus qui voluptatem ullam velit qui modi omnis. Sed dolores voluptatibus maiores sed. Voluptas amet impedit est molestiae cupiditate quo. Itaque quo beatae corporis esse maxime sequi qui.",
  fromId: "28d9f265-74d7-4f85-83d4-6a21fca57dcf",
  attachments: []
}, {
  uuid: "afe865e9-1c5b-49b4-8832-3186efc50304",
  type: "sent",
  tag: "Personal",
  title: "Provident tempore aut in ipsam.",
  created_at: "2018-04-11T05:28:24.777Z",
  content: "Sit ullam libero necessitatibus deserunt eum. Aut labore itaque sequi voluptatem dolor ab beatae. Sint enim iusto quis explicabo sed similique velit provident asperiores. Sequi repellendus totam impedit perspiciatis reiciendis. Est consequatur officiis rerum voluptatem dolorem fugiat. Minus reiciendis voluptatem totam magni quas earum aut consequatur ratione.\n \rId distinctio nesciunt quam. Laudantium id assumenda qui dolore. Debitis nemo velit voluptatem. Officiis harum deserunt. Facere eligendi et aperiam aut vel asperiores sit sed. Esse omnis fugiat ut voluptatem sint beatae et.\n \rEt odit exercitationem repellat laudantium accusamus. Et quasi incidunt qui non. Voluptas quod necessitatibus ipsum officia. Incidunt animi temporibus quis harum non. Dolores explicabo non dolor.\n \rAut sit provident voluptatum beatae quidem harum et. Necessitatibus voluptate quas dolorem officia deserunt consequuntur. Ex nihil sunt quidem.\n \rAb aut quia voluptatem. Et sed laboriosam nesciunt. Eaque provident natus dolorem voluptas quibusdam culpa voluptate voluptatem voluptate. Ut officia consectetur omnis natus. Consectetur dolorem sint. Sint est nostrum ullam.",
  fromId: "a41c6c4a-9cb1-45d1-8c6f-091044ba51ff",
  attachments: []
}, {
  uuid: "38c6b789-dab8-41e3-8448-e498140f797e",
  type: "draft",
  tag: "Social",
  title: "Error accusantium vitae incidunt.",
  created_at: "2018-04-10T12:23:56.599Z",
  content: "Quaerat at blanditiis et quis voluptatum id. Recusandae tempore et rerum. Facilis est quo eum accusamus eligendi voluptate consequatur unde. Labore laboriosam sit sed ea. Qui nihil impedit dolor consequatur. Aut reiciendis similique quaerat et iste autem aut nostrum inventore.\n \rAut maxime non libero quibusdam ducimus. Ut veritatis sequi optio in provident sint magnam aut. Aspernatur quis libero molestiae corporis dicta. Deleniti tenetur recusandae et. Aperiam ullam voluptatem.\n \rQuae voluptates fugit. Est ullam voluptas eum illum aspernatur eius illo fugit. Harum placeat ad soluta fugiat.\n \rQuo deleniti optio quod minima. Voluptates dolores molestiae velit doloremque. Molestias illo eos. Aut quas mollitia in nam asperiores quo corrupti nostrum omnis. Excepturi et optio iste aut qui molestiae placeat culpa.\n \rIste earum dolorum cupiditate architecto possimus. Iste et doloribus doloribus. Sint vel velit dolorum omnis sunt sequi facilis. Consequuntur qui itaque. Cupiditate quis sit dolor doloribus molestiae qui. Corrupti ullam enim sit laborum voluptates provident atque est.",
  fromId: "5c44b666-baca-4f18-a3cb-23068c6edc14",
  attachments: []
}, {
  uuid: "8bbcd627-394c-4a14-bc69-b357f7bc2547",
  type: "draft",
  tag: "Personal",
  title: "Consequatur dolorem dignissimos distinctio cum odio.",
  created_at: "2018-04-10T09:41:01.839Z",
  content: "Ut placeat earum eius eos. Sed officiis earum impedit officiis temporibus incidunt ad voluptatem. Nihil perferendis aut adipisci sint enim ea modi qui velit. Sed fugiat deleniti et et labore hic error quidem. Repellat natus aut. Incidunt nam porro voluptate sit ut quo.\n \rVoluptas qui nihil. Dolores alias tempore. Ipsum perspiciatis voluptatem tenetur debitis eum sint natus. Numquam sed quos nam.\n \rQuia eius aspernatur ut incidunt repudiandae qui neque. Modi soluta voluptas libero qui quo et voluptatem ut. Corporis sint debitis ab nisi quis ut.\n \rAut fugiat quia quisquam ut ipsam rerum. Autem rerum optio commodi. Modi esse numquam facere ad eligendi numquam est. Dolorem doloremque corporis excepturi fugit.\n \rReiciendis eos error. Facere culpa accusamus sunt magnam rerum dolores sint consequatur. Amet impedit dolores voluptatem tempore quia temporibus accusantium nostrum alias. Consectetur commodi sint explicabo qui quaerat eaque. Facere voluptate sequi et et est delectus et. Rerum debitis dolor eligendi qui.",
  fromId: "ee272550-36e8-4fe2-889d-c1ee701c5863",
  attachments: []
}, {
  uuid: "60c2248b-3cb2-4fdf-b157-770f07d2a1f3",
  type: "trashed",
  tag: "Work",
  title: "Vel molestiae reprehenderit explicabo adipisci quia vitae cumque maxime.",
  created_at: "2018-04-11T07:22:28.487Z",
  content: "Placeat eaque voluptatem voluptatum suscipit quod deleniti iusto. Officiis ut enim vel. Quibusdam nostrum et qui maxime tempore sed facilis non. Molestiae et provident. Non harum iste voluptatem architecto recusandae est. Quas et molestiae labore sequi et sit ad.\n \rPlaceat aut et impedit aut officia qui maxime et nobis. Aut reiciendis dolores nesciunt ratione tempora. Consequatur aut aliquam ut optio dicta rerum qui. Nisi ut et doloribus asperiores at. Ducimus asperiores quo ut.\n \rFugit ratione ipsa non fugiat enim sit velit omnis. Omnis unde molestias laboriosam aspernatur ullam labore quod. Et officiis sed beatae assumenda qui nostrum voluptates maiores similique. Corrupti laborum fugiat minima itaque et et dolor omnis soluta. Optio consectetur tempore id temporibus. Ullam magni ex quibusdam enim occaecati eveniet quia saepe.\n \rQuia quas harum delectus et voluptas. Aut consequatur fugit enim aliquid nobis excepturi. Dolores delectus delectus accusamus non veniam tempora excepturi iste doloremque. Id praesentium ea dolorem exercitationem aliquid.\n \rNecessitatibus vel in eligendi veniam sit. Quia et praesentium eius in. Autem magni ut. Ab repellat aut nobis voluptatibus aperiam quisquam expedita. Nam eius magni exercitationem consequatur provident voluptas sunt aut.",
  fromId: "3782c174-1f2c-4dc4-b75d-0bedf400e023",
  attachments: []
}, {
  uuid: "59608cba-b69e-4c05-b1f8-39d2e9c16fdc",
  type: "sent",
  tag: "Personal",
  title: "Iste omnis eius dolores dolor nam eos ea.",
  created_at: "2018-04-10T22:12:01.722Z",
  content: "Magni maiores cumque et exercitationem voluptates molestiae facilis recusandae. In sed et rerum tenetur et sit vero ut quas. Ut alias fugit eos dolorum dolorem et possimus. Et occaecati quam laborum est dignissimos atque amet ea iure. Enim et et fugit laboriosam commodi. Ipsam quo et qui tenetur vitae fugit.\n \rFacere veniam eum corrupti perferendis. Eos unde nobis ut sit illum harum. Deserunt saepe pariatur.\n \rQui debitis laborum maiores voluptatem cupiditate. Ab et qui illo. Veritatis aspernatur delectus. Aliquid officia consequuntur ut vel corporis esse magnam molestiae minus. Voluptatem saepe commodi aspernatur. Aut perferendis quaerat magni aut vel.\n \rQuos qui dolorem nobis ut nostrum et voluptas aut est. Vel saepe ipsum sed. Ullam laboriosam qui est ex. Enim a autem deleniti eos. Qui aut quibusdam ut sunt.\n \rAlias autem non quidem numquam vero accusantium voluptatum. Et illo neque ex est eligendi ullam eaque laudantium. Laborum laboriosam dolor magnam.",
  fromId: "28d9f265-74d7-4f85-83d4-6a21fca57dcf",
  attachments: []
}]; // add user to mail

MailItem.map(function (item) {
  var users = _user__WEBPACK_IMPORTED_MODULE_0__["getUser"]();
  item.from = users.find(function (x) {
    return x.uuid === item.fromId;
  });
  return item;
}); //

var MailMenu = [{
  title: "Email",
  group: "email",
  icon: "email",
  to: {
    path: "/mail/all"
  },
  chip: 10
}, {
  title: "Sent",
  group: "email",
  icon: "send",
  to: {
    path: "/mail/sent"
  },
  chip: 5
}, {
  title: "Starred",
  group: "email",
  icon: "star",
  to: {
    path: "/mail/starred"
  },
  chip: 2
}, {
  title: "Draft",
  group: "email",
  icon: "content_copy",
  to: {
    path: "/mail/draft"
  },
  chip: 3
}, {
  title: "Trash",
  group: "email",
  icon: "delete",
  to: {
    path: "/mail/trashed"
  },
  chip: 1
}, {
  heading: "Label"
}, {
  icon: "radio_button_checked",
  iconColor: "yellow",
  title: "Work",
  iconSize: "small"
}, {
  icon: "radio_button_checked",
  iconColor: "green",
  title: "Client",
  iconSize: "small"
}, {
  icon: "radio_button_checked",
  iconColor: "red",
  title: "Project",
  iconSize: "small"
}, {
  icon: "radio_button_checked",
  iconColor: "grey",
  title: "Peronal",
  iconSize: "small"
}];

var getMail = function getMail(limit) {
  return limit ? MailItem.slice(0, limit) : MailItem;
};

var getMailById = function getMailById(uuid) {
  return uuid === undefined ? MailItem[0] : MailItem.find(function (x) {
    return x.uuid === uuid;
  });
};

var getMailByType = function getMailByType(type) {
  return type === "all" ? MailItem : MailItem.filter(function (x) {
    return x.type === type;
  });
};



/***/ })

}]);
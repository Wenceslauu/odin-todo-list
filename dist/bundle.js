/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --light-slate: #e2e8f0;\n    --light-grey: #d1d5db;\n    --grey: #9ca3af;\n    --grey-hover: #6b7280;\n    --dark-indigo: #4338ca;\n    --green: #22c55e;\n    --green-hover: #16a34a;\n    --orange: #fb923c;\n    --orange-hover: #f97316;\n    --red: #ef4444;\n    --red-hover: #7f1d1d;\n    --border-radius: 10px;\n    --padding: 25px;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nhtml {\n    height: 100%;\n    position: relative;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: auto 1fr;\n\n    min-height: 100%;\n    font-family: 'Roboto', sans-serif;\n}\n\n/* Header */\n\n.header {\n    grid-column: 1 / 3;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    background-color: var(--dark-indigo);\n    color: white;\n    font-size: 2.1rem;\n    font-weight: bold;\n    padding: 15px;\n}\n\n/* Sidebar */\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n\n    background-color: var(--light-grey);\n    padding: var(--padding);\n}\n\n.sidebar ul {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.sidebar li {\n    list-style: none;\n    cursor: pointer;\n}\n\n.sidebar button {\n    background-color: var(--green);\n    color: white;\n    padding: 20px 30px;\n    width: 100%;\n    border: 2px solid grey;\n    border-radius: var(--border-radius);\n    margin-top: auto;\n    cursor: pointer;\n}\n\n.sidebar button:hover {\n    background-color: var(--green-hover);\n}\n\n/* Main-content */\n\n.main-content {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n\n    padding: var(--padding);\n    background-color: var(--light-slate);\n}\n\n.main-content .tasks-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    grid-auto-rows: 175px;\n    gap: 20px;\n}\n\n.main-content .task {\n    position: relative;\n\n    padding: var(--padding);\n    border-radius: var(--border-radius);\n    background-color: var(--light-grey);\n    box-shadow: 1px 1px 5px grey;\n}\n\n.main-content .task button {\n    position: absolute;\n    bottom: 10px;\n    right: 10px;\n\n    font-weight: bold;\n    background-color: var(--grey);\n    border: none;\n    border-radius: var(--border-radius);\n    padding: 10px 20px;\n    cursor: pointer;\n}\n\n.main-content .task button:hover {\n    background-color: var(--grey-hover);\n}\n\n.main-content .tasks-container > button {\n    font-size: 1.5rem;\n    font-weight: bold;\n    background-color: var(--orange);\n    color: white;\n    border: 2px solid grey;\n    border-radius: var(--border-radius);\n    box-shadow: 1px 1px 5px grey;\n    cursor: pointer;\n}\n\n.main-content .tasks-container > button:hover {\n    background-color: var(--orange-hover);\n}\n\n.main-content > button {\n    position: fixed;\n    bottom: 25px;\n    right: 25px;\n\n    color: white;\n    background-color: var(--red);\n    padding: 20px 50px;\n    border: 2px solid grey;\n    border-radius: var(--border-radius);\n    margin-top: auto;\n    cursor: pointer;\n}\n\n.main-content > button:hover {\n    background-color: var(--red-hover);\n}\n\n/* Modals */\n\n.modal {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    z-index: 1;\n\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    justify-content: center;\n    align-items: center;\n\n    width: 475px;\n    background-color: white;\n    border: 2px solid grey;\n    border-radius: var(--border-radius);\n    padding: var(--padding);\n    transform: translate(-50%, -50%) scale(0);\n    transition: 0.2s ease-in-out;\n}\n\n.modal.active {\n    transform: translate(-50%, -50%) scale(1);\n}\n\n.overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    display: none;\n}\n\n.overlay.active {\n    display: block;\n}\n\n.modal form {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.modal input {\n    font-size: 2rem;\n    padding: 10px;\n    border: 2px solid black;\n    border-radius: var(--border-radius);\n}\n\n.modal input[type='date'] {\n    font-size: 1.5rem;\n}\n\n.modal textarea {\n    font-size: 1.5rem;\n    padding: 10px;\n    border: 2px solid black;\n    border-radius: var(--border-radius);\n    resize: none;\n}\n\n.modal button {\n    margin-top: 20px;\n    color: white;\n    background-color: var(--green);\n    padding: 20px 0;\n    border-radius: var(--border-radius);\n}\n\n.modal button:hover {\n    background-color: var(--green-hover);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');\n\n:root {\n    --light-slate: #e2e8f0;\n    --light-grey: #d1d5db;\n    --grey: #9ca3af;\n    --grey-hover: #6b7280;\n    --dark-indigo: #4338ca;\n    --green: #22c55e;\n    --green-hover: #16a34a;\n    --orange: #fb923c;\n    --orange-hover: #f97316;\n    --red: #ef4444;\n    --red-hover: #7f1d1d;\n    --border-radius: 10px;\n    --padding: 25px;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nhtml {\n    height: 100%;\n    position: relative;\n}\n\nbody {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: auto 1fr;\n\n    min-height: 100%;\n    font-family: 'Roboto', sans-serif;\n}\n\n/* Header */\n\n.header {\n    grid-column: 1 / 3;\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    background-color: var(--dark-indigo);\n    color: white;\n    font-size: 2.1rem;\n    font-weight: bold;\n    padding: 15px;\n}\n\n/* Sidebar */\n\n.sidebar {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n\n    background-color: var(--light-grey);\n    padding: var(--padding);\n}\n\n.sidebar ul {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.sidebar li {\n    list-style: none;\n    cursor: pointer;\n}\n\n.sidebar button {\n    background-color: var(--green);\n    color: white;\n    padding: 20px 30px;\n    width: 100%;\n    border: 2px solid grey;\n    border-radius: var(--border-radius);\n    margin-top: auto;\n    cursor: pointer;\n}\n\n.sidebar button:hover {\n    background-color: var(--green-hover);\n}\n\n/* Main-content */\n\n.main-content {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n\n    padding: var(--padding);\n    background-color: var(--light-slate);\n}\n\n.main-content .tasks-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    grid-auto-rows: 175px;\n    gap: 20px;\n}\n\n.main-content .task {\n    position: relative;\n\n    padding: var(--padding);\n    border-radius: var(--border-radius);\n    background-color: var(--light-grey);\n    box-shadow: 1px 1px 5px grey;\n}\n\n.main-content .task button {\n    position: absolute;\n    bottom: 10px;\n    right: 10px;\n\n    font-weight: bold;\n    background-color: var(--grey);\n    border: none;\n    border-radius: var(--border-radius);\n    padding: 10px 20px;\n    cursor: pointer;\n}\n\n.main-content .task button:hover {\n    background-color: var(--grey-hover);\n}\n\n.main-content .tasks-container > button {\n    font-size: 1.5rem;\n    font-weight: bold;\n    background-color: var(--orange);\n    color: white;\n    border: 2px solid grey;\n    border-radius: var(--border-radius);\n    box-shadow: 1px 1px 5px grey;\n    cursor: pointer;\n}\n\n.main-content .tasks-container > button:hover {\n    background-color: var(--orange-hover);\n}\n\n.main-content > button {\n    position: fixed;\n    bottom: 25px;\n    right: 25px;\n\n    color: white;\n    background-color: var(--red);\n    padding: 20px 50px;\n    border: 2px solid grey;\n    border-radius: var(--border-radius);\n    margin-top: auto;\n    cursor: pointer;\n}\n\n.main-content > button:hover {\n    background-color: var(--red-hover);\n}\n\n/* Modals */\n\n.modal {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    z-index: 1;\n\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    justify-content: center;\n    align-items: center;\n\n    width: 475px;\n    background-color: white;\n    border: 2px solid grey;\n    border-radius: var(--border-radius);\n    padding: var(--padding);\n    transform: translate(-50%, -50%) scale(0);\n    transition: 0.2s ease-in-out;\n}\n\n.modal.active {\n    transform: translate(-50%, -50%) scale(1);\n}\n\n.overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    display: none;\n}\n\n.overlay.active {\n    display: block;\n}\n\n.modal form {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n.modal input {\n    font-size: 2rem;\n    padding: 10px;\n    border: 2px solid black;\n    border-radius: var(--border-radius);\n}\n\n.modal input[type='date'] {\n    font-size: 1.5rem;\n}\n\n.modal textarea {\n    font-size: 1.5rem;\n    padding: 10px;\n    border: 2px solid black;\n    border-radius: var(--border-radius);\n    resize: none;\n}\n\n.modal button {\n    margin-top: 20px;\n    color: white;\n    background-color: var(--green);\n    padding: 20px 0;\n    border-radius: var(--border-radius);\n}\n\n.modal button:hover {\n    background-color: var(--green-hover);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "project": () => (/* binding */ project),
/* harmony export */   "projectHolder": () => (/* binding */ projectHolder),
/* harmony export */   "task": () => (/* binding */ task)
/* harmony export */ });
const task = (title, description, dueDate, priority) => {
    return { title, description, dueDate, priority }
}

const project = title => {
    let taskList = []
    const addTask = newTask => {
        taskList.push(newTask)
    }
    return { title, taskList, addTask }
}

const projectHolder = (() => {
    let projectList = []
    const addProject = newProject => {
        projectList.push(newProject)
    }

    return { projectList, addProject }
})()



/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHeader": () => (/* binding */ loadHeader)
/* harmony export */ });
const body = document.querySelector('body')

const loadHeader = () => {
    const header = document.createElement('div')
    header.classList.add('header')
    header.textContent = 'Todo List'
    body.append(header)
}



/***/ }),

/***/ "./src/maincontent.js":
/*!****************************!*\
  !*** ./src/maincontent.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleTaskAdding": () => (/* binding */ handleTaskAdding),
/* harmony export */   "loadMainContent": () => (/* binding */ loadMainContent),
/* harmony export */   "loadTasks": () => (/* binding */ loadTasks),
/* harmony export */   "wipe": () => (/* binding */ wipe)
/* harmony export */ });
/* harmony import */ var _persistent_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./persistent-data */ "./src/persistent-data.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal */ "./src/modal.js");





const body = document.querySelector('body')
const mainContent = document.createElement('div')
const addTaskBtn = document.createElement('button')

const loadMainContent = () => {
    mainContent.classList.add('main-content')
    body.append(mainContent)
}

const wipe = () => {
    mainContent.innerHTML = ''
}

const loadTasks = project => {
    if (!project) {
        return
    }

    wipe()

    const h1 = document.createElement('h1')
    h1.textContent = `${project.title}`
    mainContent.append(h1)

    const tasksContainer = document.createElement('div')
    tasksContainer.classList.add('tasks-container')
    mainContent.append(tasksContainer)
    
    for (let i = 0; i < project.taskList.length; i++) {
        const task = document.createElement('div')
        task.classList.add('task')

        const h1 = document.createElement('h1')
        h1.textContent = `${project.taskList[i].title}`
        task.append(h1)

        const descriptionP = document.createElement('p')
        descriptionP.textContent = `${project.taskList[i].description}`
        task.append(descriptionP)

        const dueDateP = document.createElement('p')
        dueDateP.textContent = `${project.taskList[i].dueDate}`
        task.append(dueDateP)

        const priorityP = document.createElement('p')
        priorityP.textContent = `${project.taskList[i].priority}`
        task.append(priorityP)

        const removeTaskBtn = document.createElement('button')
        removeTaskBtn.textContent = 'X'
        task.append(removeTaskBtn)

        removeTaskBtn.addEventListener('click', () => {
            project.taskList.splice(i, 1)
            loadTasks(project)
            ;(0,_persistent_data__WEBPACK_IMPORTED_MODULE_0__.populateStorage)()
        })

        tasksContainer.append(task)
    }

    addTaskBtn.textContent = 'Add Task'
    tasksContainer.append(addTaskBtn)

    const removeProjectBtn = document.createElement('button')
    mainContent.append(removeProjectBtn)

    const deleteIcon = document.createElement('img')
    deleteIcon.setAttribute('src', '../src/delete.png')
    removeProjectBtn.append(deleteIcon)

    const index = _data__WEBPACK_IMPORTED_MODULE_1__.projectHolder.projectList.indexOf(project)

    removeProjectBtn.addEventListener('click', () => {
        _data__WEBPACK_IMPORTED_MODULE_1__.projectHolder.projectList.splice(index, 1)
        wipe()
        ;(0,_sidebar__WEBPACK_IMPORTED_MODULE_2__.loadProjectList)(_data__WEBPACK_IMPORTED_MODULE_1__.projectHolder)
        ;(0,_persistent_data__WEBPACK_IMPORTED_MODULE_0__.populateStorage)()
    })
}

const handleTaskAdding = project => {
    if (!project) {
        return
    }

    addTaskBtn.addEventListener('click', () => {
        (0,_modal__WEBPACK_IMPORTED_MODULE_3__.openModal)()
        ;(0,_modal__WEBPACK_IMPORTED_MODULE_3__.populateModal)('addtask', project)
    })
}



/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeModal": () => (/* binding */ closeModal),
/* harmony export */   "loadModals": () => (/* binding */ loadModals),
/* harmony export */   "openModal": () => (/* binding */ openModal),
/* harmony export */   "populateModal": () => (/* binding */ populateModal)
/* harmony export */ });
/* harmony import */ var _persistent_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./persistent-data */ "./src/persistent-data.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
/* harmony import */ var _maincontent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./maincontent */ "./src/maincontent.js");





const body = document.querySelector('body')
const modal = document.createElement('div')
const overlay = document.createElement('div')

const openModal = () => {
    modal.classList.add('active')
    overlay.classList.add('active')
}

const closeModal = () => {
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

const loadModals = () => {
    modal.classList.add('modal')
    body.append(modal)

    overlay.classList.add('overlay')
    body.append(overlay)

    overlay.addEventListener('click', () => {
        closeModal()
    })
}

const populateModal = (type, currentProject) => {
    modal.innerHTML = ''

    const h1 = document.createElement('h1')
    modal.append(h1)

    const forms = document.createElement('form')
    modal.append(forms)

    const titleLabel = document.createElement('label')
    titleLabel.setAttribute('for', 'project-title')
    titleLabel.textContent = 'Title'
    forms.append(titleLabel)

    const titleInput = document.createElement('input')
    titleInput.setAttribute('name', 'title')
    titleInput.setAttribute('type', 'text')
    titleInput.setAttribute('autocomplete', 'off')
    titleInput.setAttribute('minlength', '1')
    titleInput.setAttribute('maxlength', '15')
    titleInput.setAttribute('required', '')
    forms.append(titleInput)

    const submit = document.createElement('button')
    submit.setAttribute('type', 'submit')
    submit.textContent = 'Submit'

    if (type === 'addproject') {
        h1.textContent = 'Add a Project'

        titleLabel.setAttribute('for', 'project-title')

        titleInput.setAttribute('id', 'project-title')

        forms.append(submit)

        forms.addEventListener('submit', e => {
            e.preventDefault()
            const formData = new FormData(e.target);
            const formProps = Object.fromEntries(formData);

            _data__WEBPACK_IMPORTED_MODULE_1__.projectHolder.addProject((0,_data__WEBPACK_IMPORTED_MODULE_1__.project)(`${formProps.title}`))
            ;(0,_persistent_data__WEBPACK_IMPORTED_MODULE_0__.populateStorage)()
            closeModal()
            ;(0,_sidebar__WEBPACK_IMPORTED_MODULE_2__.loadProjectList)(_data__WEBPACK_IMPORTED_MODULE_1__.projectHolder)
            forms.reset()
        })
    } else if (type === 'addtask') {
        h1.textContent = 'Add a task'

        titleLabel.setAttribute('for', 'task-title')

        titleInput.setAttribute('id', 'task-title')

        const descriptionLabel = document.createElement('label')
        descriptionLabel.setAttribute('for', 'task-description')
        descriptionLabel.textContent = 'Description'
        forms.append(descriptionLabel)

        const descriptionInput = document.createElement('textarea')
        descriptionInput.setAttribute('name', 'description')
        descriptionInput.setAttribute('id', 'task-description')
        descriptionInput.setAttribute('rows', '4')
        descriptionInput.setAttribute('cols', '20')
        descriptionInput.setAttribute('required', '')
        forms.append(descriptionInput)

        const dueDateLabel = document.createElement('label')
        dueDateLabel.setAttribute('for', 'task-duedate')
        dueDateLabel.textContent = 'Due Date'
        forms.append(dueDateLabel)

        const dueDateInput = document.createElement('input')
        dueDateInput.setAttribute('name', 'duedate')
        dueDateInput.setAttribute('id', 'task-duedate')
        dueDateInput.setAttribute('type', 'date')
        dueDateInput.setAttribute('required', '')
        forms.append(dueDateInput)

        const priorityLabel = document.createElement('label')
        priorityLabel.setAttribute('for', 'task-priority')
        priorityLabel.textContent = 'Priority'
        forms.append(priorityLabel)

        const priorityInput = document.createElement('input')
        priorityInput.setAttribute('name', 'priority')
        priorityInput.setAttribute('id', 'task-priority')
        priorityInput.setAttribute('type', 'number')
        priorityInput.setAttribute('min', '1')
        priorityInput.setAttribute('max', '10')
        priorityInput.setAttribute('required', '')
        forms.append(priorityInput)

        forms.append(submit)

        let dueDateValue = ''

        document.getElementById("task-duedate").addEventListener("change", function() {
            dueDateValue = this.value;
        }); 

        forms.addEventListener('submit', e => {
            e.preventDefault()
            const formData = new FormData(e.target);
            const formProps = Object.fromEntries(formData);

            currentProject.addTask((0,_data__WEBPACK_IMPORTED_MODULE_1__.task)(formProps.title, formProps.description, dueDateValue, formProps.priority))
            ;(0,_persistent_data__WEBPACK_IMPORTED_MODULE_0__.populateStorage)()
            closeModal()
            ;(0,_maincontent__WEBPACK_IMPORTED_MODULE_3__.loadTasks)(currentProject)
            forms.reset()
        })
    }
}



/***/ }),

/***/ "./src/persistent-data.js":
/*!********************************!*\
  !*** ./src/persistent-data.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "populateStorage": () => (/* binding */ populateStorage),
/* harmony export */   "retrieveStorage": () => (/* binding */ retrieveStorage)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");


function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

function retrieveStorage() {
    if (storageAvailable('localStorage')) {
        let i = 0
        while (localStorage.getItem(`project${i + 1}`)) {
            _data__WEBPACK_IMPORTED_MODULE_0__.projectHolder.projectList[i] = JSON.parse(localStorage.getItem(`project${i + 1}`))

            let j = 0
            while (localStorage.getItem(`task${i + 1}-${j + 1}`)) {
                _data__WEBPACK_IMPORTED_MODULE_0__.projectHolder.projectList[i].taskList[j] = JSON.parse(localStorage.getItem(`task${i + 1}-${j + 1}`))

                j++
            }

            i++
        }
    } else {
        alert('localStorage is not available')
    }
}

function populateStorage() {
    localStorage.clear()

    if (storageAvailable('localStorage')) {
        for (let i = 0; i < _data__WEBPACK_IMPORTED_MODULE_0__.projectHolder.projectList.length; i++) {
            localStorage.setItem(`project${i + 1}`, JSON.stringify(_data__WEBPACK_IMPORTED_MODULE_0__.projectHolder.projectList[i]));

            if (_data__WEBPACK_IMPORTED_MODULE_0__.projectHolder.projectList[i].taskList.length > 0) {
                for (let j = 0; j < _data__WEBPACK_IMPORTED_MODULE_0__.projectHolder.projectList[i].taskList.length; j++) {
                    localStorage.setItem(`task${i + 1}-${j + 1}`, JSON.stringify(_data__WEBPACK_IMPORTED_MODULE_0__.projectHolder.projectList[i].taskList[j]));
                }
            }   
        }
    } else {
        alert('localStorage is not available')
    }
}   



/***/ }),

/***/ "./src/sidebar.js":
/*!************************!*\
  !*** ./src/sidebar.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "handleProjectAdding": () => (/* binding */ handleProjectAdding),
/* harmony export */   "loadProjectList": () => (/* binding */ loadProjectList),
/* harmony export */   "loadSidebar": () => (/* binding */ loadSidebar)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _maincontent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maincontent */ "./src/maincontent.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ "./src/modal.js");




const body = document.querySelector('body')
const projectsContainer = document.createElement('ul')
const addProjectBtn = document.createElement('button')

const loadSidebar = () => {
    const sidebar = document.createElement('div')
    sidebar.classList.add('sidebar')
    body.append(sidebar)

    const h1 = document.createElement('h1')
    h1.textContent = 'Projects'
    sidebar.append(h1)

    projectsContainer.classList.add('projects-container')
    sidebar.append(projectsContainer)

    addProjectBtn.textContent = 'Add Project'
    sidebar.append(addProjectBtn)
}

const loadProjectList = projectHolder => {
    projectsContainer.innerHTML = ''

    for (let i = 0; i < projectHolder.projectList.length; i++) {
        const project = document.createElement('li')
        project.textContent = `${projectHolder.projectList[i].title}`
        projectsContainer.append(project)

        project.addEventListener('click', () => {
            ;(0,_maincontent__WEBPACK_IMPORTED_MODULE_1__.loadTasks)(projectHolder.projectList[i])
            ;(0,_maincontent__WEBPACK_IMPORTED_MODULE_1__.handleTaskAdding)(projectHolder.projectList[i]) 
        })
    }
}

const handleProjectAdding = () => {
    addProjectBtn.addEventListener('click', () => {
        ;(0,_modal__WEBPACK_IMPORTED_MODULE_2__.openModal)()
        ;(0,_modal__WEBPACK_IMPORTED_MODULE_2__.populateModal)('addproject')
    })
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _persistent_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./persistent-data */ "./src/persistent-data.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/data.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sidebar */ "./src/sidebar.js");
/* harmony import */ var _maincontent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maincontent */ "./src/maincontent.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal */ "./src/modal.js");








console.log(localStorage)

_persistent_data__WEBPACK_IMPORTED_MODULE_1__.retrieveStorage()

_header__WEBPACK_IMPORTED_MODULE_3__.loadHeader()

_sidebar__WEBPACK_IMPORTED_MODULE_4__.loadSidebar()

_maincontent__WEBPACK_IMPORTED_MODULE_5__.loadMainContent()

_modal__WEBPACK_IMPORTED_MODULE_6__.loadModals()

_sidebar__WEBPACK_IMPORTED_MODULE_4__.handleProjectAdding()

_maincontent__WEBPACK_IMPORTED_MODULE_5__.loadTasks(_data__WEBPACK_IMPORTED_MODULE_2__.projectHolder.projectList[0])

_maincontent__WEBPACK_IMPORTED_MODULE_5__.handleTaskAdding(_data__WEBPACK_IMPORTED_MODULE_2__.projectHolder.projectList[0])

_sidebar__WEBPACK_IMPORTED_MODULE_4__.loadProjectList(_data__WEBPACK_IMPORTED_MODULE_2__.projectHolder)



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QywrREFBaUM7O0FBRXZELDBEQUE0QixDQUFDLCtEQUFpQzs7QUFFOUQscURBQXVCLENBQUMsZ0RBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvZGF0YS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbWFpbmNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvcGVyc2lzdGVudC1kYXRhLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gICAgLS1saWdodC1zbGF0ZTogI2UyZThmMDtcXG4gICAgLS1saWdodC1ncmV5OiAjZDFkNWRiO1xcbiAgICAtLWdyZXk6ICM5Y2EzYWY7XFxuICAgIC0tZ3JleS1ob3ZlcjogIzZiNzI4MDtcXG4gICAgLS1kYXJrLWluZGlnbzogIzQzMzhjYTtcXG4gICAgLS1ncmVlbjogIzIyYzU1ZTtcXG4gICAgLS1ncmVlbi1ob3ZlcjogIzE2YTM0YTtcXG4gICAgLS1vcmFuZ2U6ICNmYjkyM2M7XFxuICAgIC0tb3JhbmdlLWhvdmVyOiAjZjk3MzE2O1xcbiAgICAtLXJlZDogI2VmNDQ0NDtcXG4gICAgLS1yZWQtaG92ZXI6ICM3ZjFkMWQ7XFxuICAgIC0tYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgLS1wYWRkaW5nOiAyNXB4O1xcbn1cXG5cXG4qIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxuXFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLyogSGVhZGVyICovXFxuXFxuLmhlYWRlciB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstaW5kaWdvKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXNpemU6IDIuMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi8qIFNpZGViYXIgKi9cXG5cXG4uc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxuICAgIHBhZGRpbmc6IHZhcigtLXBhZGRpbmcpO1xcbn1cXG5cXG4uc2lkZWJhciB1bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLnNpZGViYXIgbGkge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5zaWRlYmFyIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZWJhciBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi1ob3Zlcik7XFxufVxcblxcbi8qIE1haW4tY29udGVudCAqL1xcblxcbi5tYWluLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuXFxuICAgIHBhZGRpbmc6IHZhcigtLXBhZGRpbmcpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1zbGF0ZSk7XFxufVxcblxcbi5tYWluLWNvbnRlbnQgLnRhc2tzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcbiAgICBncmlkLWF1dG8tcm93czogMTc1cHg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLm1haW4tY29udGVudCAudGFzayB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gICAgcGFkZGluZzogdmFyKC0tcGFkZGluZyk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ncmV5KTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggZ3JleTtcXG59XFxuXFxuLm1haW4tY29udGVudCAudGFzayBidXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMTBweDtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5KTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tYWluLWNvbnRlbnQgLnRhc2sgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleS1ob3Zlcik7XFxufVxcblxcbi5tYWluLWNvbnRlbnQgLnRhc2tzLWNvbnRhaW5lciA+IGJ1dHRvbiB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5O1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggZ3JleTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IC50YXNrcy1jb250YWluZXIgPiBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vcmFuZ2UtaG92ZXIpO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50ID4gYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDI1cHg7XFxuICAgIHJpZ2h0OiAyNXB4O1xcblxcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxuICAgIHBhZGRpbmc6IDIwcHggNTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1haW4tY29udGVudCA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZC1ob3Zlcik7XFxufVxcblxcbi8qIE1vZGFscyAqL1xcblxcbi5tb2RhbCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgei1pbmRleDogMTtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgd2lkdGg6IDQ3NXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIHBhZGRpbmc6IHZhcigtLXBhZGRpbmcpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgwKTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcXG59XFxuXFxuLm1vZGFsLmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xcbn1cXG5cXG4ub3ZlcmxheSB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5vdmVybGF5LmFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ubW9kYWwgZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLm1vZGFsIGlucHV0IHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbi5tb2RhbCBpbnB1dFt0eXBlPSdkYXRlJ10ge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLm1vZGFsIHRleHRhcmVhIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4ubW9kYWwgYnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIHBhZGRpbmc6IDIwcHggMDtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbi5tb2RhbCBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi1ob3Zlcik7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2Qsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lB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QzlCLGVBQWU7SUFDZixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAgIC0tbGlnaHQtc2xhdGU6ICNlMmU4ZjA7XFxuICAgIC0tbGlnaHQtZ3JleTogI2QxZDVkYjtcXG4gICAgLS1ncmV5OiAjOWNhM2FmO1xcbiAgICAtLWdyZXktaG92ZXI6ICM2YjcyODA7XFxuICAgIC0tZGFyay1pbmRpZ286ICM0MzM4Y2E7XFxuICAgIC0tZ3JlZW46ICMyMmM1NWU7XFxuICAgIC0tZ3JlZW4taG92ZXI6ICMxNmEzNGE7XFxuICAgIC0tb3JhbmdlOiAjZmI5MjNjO1xcbiAgICAtLW9yYW5nZS1ob3ZlcjogI2Y5NzMxNjtcXG4gICAgLS1yZWQ6ICNlZjQ0NDQ7XFxuICAgIC0tcmVkLWhvdmVyOiAjN2YxZDFkO1xcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIC0tcGFkZGluZzogMjVweDtcXG59XFxuXFxuKiB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcblxcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi8qIEhlYWRlciAqL1xcblxcbi5oZWFkZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWluZGlnbyk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC1zaXplOiAyLjFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4vKiBTaWRlYmFyICovXFxuXFxuLnNpZGViYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWdyZXkpO1xcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nKTtcXG59XFxuXFxuLnNpZGViYXIgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5zaWRlYmFyIGxpIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uc2lkZWJhciBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMjBweCAzMHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnNpZGViYXIgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4taG92ZXIpO1xcbn1cXG5cXG4vKiBNYWluLWNvbnRlbnQgKi9cXG5cXG4ubWFpbi1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcblxcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtc2xhdGUpO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IC50YXNrcy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDE3NXB4O1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5tYWluLWNvbnRlbnQgLnRhc2sge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAgIHBhZGRpbmc6IHZhcigtLXBhZGRpbmcpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1ib3JkZXItcmFkaXVzKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtZ3JleSk7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IGdyZXk7XFxufVxcblxcbi5tYWluLWNvbnRlbnQgLnRhc2sgYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDEwcHg7XFxuICAgIHJpZ2h0OiAxMHB4O1xcblxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleSk7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IC50YXNrIGJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXktaG92ZXIpO1xcbn1cXG5cXG4ubWFpbi1jb250ZW50IC50YXNrcy1jb250YWluZXIgPiBidXR0b24ge1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW9yYW5nZSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JleTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IGdyZXk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1haW4tY29udGVudCAudGFza3MtY29udGFpbmVyID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3JhbmdlLWhvdmVyKTtcXG59XFxuXFxuLm1haW4tY29udGVudCA+IGJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAyNXB4O1xcbiAgICByaWdodDogMjVweDtcXG5cXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQpO1xcbiAgICBwYWRkaW5nOiAyMHB4IDUwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tYWluLWNvbnRlbnQgPiBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtaG92ZXIpO1xcbn1cXG5cXG4vKiBNb2RhbHMgKi9cXG5cXG4ubW9kYWwge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHotaW5kZXg6IDE7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIHdpZHRoOiA0NzVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWRkaW5nKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMCk7XFxuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5tb2RhbC5hY3RpdmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxKTtcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ub3ZlcmxheS5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLm1vZGFsIGZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5tb2RhbCBpbnB1dCB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbn1cXG5cXG4ubW9kYWwgaW5wdXRbdHlwZT0nZGF0ZSddIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5tb2RhbCB0ZXh0YXJlYSB7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLm1vZGFsIGJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4pO1xcbiAgICBwYWRkaW5nOiAyMHB4IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbn1cXG5cXG4ubW9kYWwgYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4taG92ZXIpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHRhc2sgPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSkgPT4ge1xuICAgIHJldHVybiB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkgfVxufVxuXG5jb25zdCBwcm9qZWN0ID0gdGl0bGUgPT4ge1xuICAgIGxldCB0YXNrTGlzdCA9IFtdXG4gICAgY29uc3QgYWRkVGFzayA9IG5ld1Rhc2sgPT4ge1xuICAgICAgICB0YXNrTGlzdC5wdXNoKG5ld1Rhc2spXG4gICAgfVxuICAgIHJldHVybiB7IHRpdGxlLCB0YXNrTGlzdCwgYWRkVGFzayB9XG59XG5cbmNvbnN0IHByb2plY3RIb2xkZXIgPSAoKCkgPT4ge1xuICAgIGxldCBwcm9qZWN0TGlzdCA9IFtdXG4gICAgY29uc3QgYWRkUHJvamVjdCA9IG5ld1Byb2plY3QgPT4ge1xuICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKG5ld1Byb2plY3QpXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgcHJvamVjdExpc3QsIGFkZFByb2plY3QgfVxufSkoKVxuXG5leHBvcnQgeyB0YXNrLCBwcm9qZWN0LCBwcm9qZWN0SG9sZGVyIH0iLCJjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG5cbmNvbnN0IGxvYWRIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJylcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnVG9kbyBMaXN0J1xuICAgIGJvZHkuYXBwZW5kKGhlYWRlcilcbn1cblxuZXhwb3J0IHsgbG9hZEhlYWRlciB9IiwiaW1wb3J0IHsgcG9wdWxhdGVTdG9yYWdlIH0gZnJvbSBcIi4vcGVyc2lzdGVudC1kYXRhXCJcbmltcG9ydCB7IHByb2plY3RIb2xkZXIgfSBmcm9tIFwiLi9kYXRhXCJcbmltcG9ydCB7IGxvYWRQcm9qZWN0TGlzdCB9IGZyb20gXCIuL3NpZGViYXJcIlxuaW1wb3J0IHsgb3Blbk1vZGFsLCBwb3B1bGF0ZU1vZGFsIH0gZnJvbSBcIi4vbW9kYWxcIlxuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpXG5jb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5jb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcblxuY29uc3QgbG9hZE1haW5Db250ZW50ID0gKCkgPT4ge1xuICAgIG1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoJ21haW4tY29udGVudCcpXG4gICAgYm9keS5hcHBlbmQobWFpbkNvbnRlbnQpXG59XG5cbmNvbnN0IHdpcGUgPSAoKSA9PiB7XG4gICAgbWFpbkNvbnRlbnQuaW5uZXJIVE1MID0gJydcbn1cblxuY29uc3QgbG9hZFRhc2tzID0gcHJvamVjdCA9PiB7XG4gICAgaWYgKCFwcm9qZWN0KSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHdpcGUoKVxuXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgaDEudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0LnRpdGxlfWBcbiAgICBtYWluQ29udGVudC5hcHBlbmQoaDEpXG5cbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgdGFza3NDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFza3MtY29udGFpbmVyJylcbiAgICBtYWluQ29udGVudC5hcHBlbmQodGFza3NDb250YWluZXIpXG4gICAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LnRhc2tMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKVxuXG4gICAgICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgICAgICBoMS50ZXh0Q29udGVudCA9IGAke3Byb2plY3QudGFza0xpc3RbaV0udGl0bGV9YFxuICAgICAgICB0YXNrLmFwcGVuZChoMSlcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvblAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcbiAgICAgICAgZGVzY3JpcHRpb25QLnRleHRDb250ZW50ID0gYCR7cHJvamVjdC50YXNrTGlzdFtpXS5kZXNjcmlwdGlvbn1gXG4gICAgICAgIHRhc2suYXBwZW5kKGRlc2NyaXB0aW9uUClcblxuICAgICAgICBjb25zdCBkdWVEYXRlUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBkdWVEYXRlUC50ZXh0Q29udGVudCA9IGAke3Byb2plY3QudGFza0xpc3RbaV0uZHVlRGF0ZX1gXG4gICAgICAgIHRhc2suYXBwZW5kKGR1ZURhdGVQKVxuXG4gICAgICAgIGNvbnN0IHByaW9yaXR5UCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxuICAgICAgICBwcmlvcml0eVAudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0LnRhc2tMaXN0W2ldLnByaW9yaXR5fWBcbiAgICAgICAgdGFzay5hcHBlbmQocHJpb3JpdHlQKVxuXG4gICAgICAgIGNvbnN0IHJlbW92ZVRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICByZW1vdmVUYXNrQnRuLnRleHRDb250ZW50ID0gJ1gnXG4gICAgICAgIHRhc2suYXBwZW5kKHJlbW92ZVRhc2tCdG4pXG5cbiAgICAgICAgcmVtb3ZlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHByb2plY3QudGFza0xpc3Quc3BsaWNlKGksIDEpXG4gICAgICAgICAgICBsb2FkVGFza3MocHJvamVjdClcbiAgICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGFza3NDb250YWluZXIuYXBwZW5kKHRhc2spXG4gICAgfVxuXG4gICAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9ICdBZGQgVGFzaydcbiAgICB0YXNrc0NvbnRhaW5lci5hcHBlbmQoYWRkVGFza0J0bilcblxuICAgIGNvbnN0IHJlbW92ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIG1haW5Db250ZW50LmFwcGVuZChyZW1vdmVQcm9qZWN0QnRuKVxuXG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXG4gICAgZGVsZXRlSWNvbi5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLi9zcmMvZGVsZXRlLnBuZycpXG4gICAgcmVtb3ZlUHJvamVjdEJ0bi5hcHBlbmQoZGVsZXRlSWNvbilcblxuICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdEhvbGRlci5wcm9qZWN0TGlzdC5pbmRleE9mKHByb2plY3QpXG5cbiAgICByZW1vdmVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0SG9sZGVyLnByb2plY3RMaXN0LnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgd2lwZSgpXG4gICAgICAgIGxvYWRQcm9qZWN0TGlzdChwcm9qZWN0SG9sZGVyKVxuICAgICAgICBwb3B1bGF0ZVN0b3JhZ2UoKVxuICAgIH0pXG59XG5cbmNvbnN0IGhhbmRsZVRhc2tBZGRpbmcgPSBwcm9qZWN0ID0+IHtcbiAgICBpZiAoIXByb2plY3QpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgb3Blbk1vZGFsKClcbiAgICAgICAgcG9wdWxhdGVNb2RhbCgnYWRkdGFzaycsIHByb2plY3QpXG4gICAgfSlcbn1cblxuZXhwb3J0IHsgbG9hZE1haW5Db250ZW50LCBsb2FkVGFza3MsIGhhbmRsZVRhc2tBZGRpbmcsIHdpcGUgfSIsImltcG9ydCB7IHBvcHVsYXRlU3RvcmFnZSB9IGZyb20gXCIuL3BlcnNpc3RlbnQtZGF0YVwiXG5pbXBvcnQgeyBwcm9qZWN0LCB0YXNrLCBwcm9qZWN0SG9sZGVyIH0gZnJvbSBcIi4vZGF0YVwiXG5pbXBvcnQgeyBsb2FkUHJvamVjdExpc3QgfSBmcm9tIFwiLi9zaWRlYmFyXCJcbmltcG9ydCB7IGxvYWRUYXNrcyB9IGZyb20gXCIuL21haW5jb250ZW50XCJcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKVxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5cbmNvbnN0IG9wZW5Nb2RhbCA9ICgpID0+IHtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcbn1cblxuY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKVxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbn1cblxuY29uc3QgbG9hZE1vZGFscyA9ICgpID0+IHtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcpXG4gICAgYm9keS5hcHBlbmQobW9kYWwpXG5cbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ292ZXJsYXknKVxuICAgIGJvZHkuYXBwZW5kKG92ZXJsYXkpXG5cbiAgICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjbG9zZU1vZGFsKClcbiAgICB9KVxufVxuXG5jb25zdCBwb3B1bGF0ZU1vZGFsID0gKHR5cGUsIGN1cnJlbnRQcm9qZWN0KSA9PiB7XG4gICAgbW9kYWwuaW5uZXJIVE1MID0gJydcblxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIG1vZGFsLmFwcGVuZChoMSlcblxuICAgIGNvbnN0IGZvcm1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgbW9kYWwuYXBwZW5kKGZvcm1zKVxuXG4gICAgY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Byb2plY3QtdGl0bGUnKVxuICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSAnVGl0bGUnXG4gICAgZm9ybXMuYXBwZW5kKHRpdGxlTGFiZWwpXG5cbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ3RpdGxlJylcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnYXV0b2NvbXBsZXRlJywgJ29mZicpXG4gICAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbmxlbmd0aCcsICcxJylcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJywgJzE1JylcbiAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJylcbiAgICBmb3Jtcy5hcHBlbmQodGl0bGVJbnB1dClcblxuICAgIGNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgc3VibWl0LnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKVxuICAgIHN1Ym1pdC50ZXh0Q29udGVudCA9ICdTdWJtaXQnXG5cbiAgICBpZiAodHlwZSA9PT0gJ2FkZHByb2plY3QnKSB7XG4gICAgICAgIGgxLnRleHRDb250ZW50ID0gJ0FkZCBhIFByb2plY3QnXG5cbiAgICAgICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcm9qZWN0LXRpdGxlJylcblxuICAgICAgICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdC10aXRsZScpXG5cbiAgICAgICAgZm9ybXMuYXBwZW5kKHN1Ym1pdClcblxuICAgICAgICBmb3Jtcy5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZS50YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgZm9ybVByb3BzID0gT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhKTtcblxuICAgICAgICAgICAgcHJvamVjdEhvbGRlci5hZGRQcm9qZWN0KHByb2plY3QoYCR7Zm9ybVByb3BzLnRpdGxlfWApKVxuICAgICAgICAgICAgcG9wdWxhdGVTdG9yYWdlKClcbiAgICAgICAgICAgIGNsb3NlTW9kYWwoKVxuICAgICAgICAgICAgbG9hZFByb2plY3RMaXN0KHByb2plY3RIb2xkZXIpXG4gICAgICAgICAgICBmb3Jtcy5yZXNldCgpXG4gICAgICAgIH0pXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnYWRkdGFzaycpIHtcbiAgICAgICAgaDEudGV4dENvbnRlbnQgPSAnQWRkIGEgdGFzaydcblxuICAgICAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Rhc2stdGl0bGUnKVxuXG4gICAgICAgIHRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLXRpdGxlJylcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Rhc2stZGVzY3JpcHRpb24nKVxuICAgICAgICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gJ0Rlc2NyaXB0aW9uJ1xuICAgICAgICBmb3Jtcy5hcHBlbmQoZGVzY3JpcHRpb25MYWJlbClcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgICAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICdkZXNjcmlwdGlvbicpXG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLWRlc2NyaXB0aW9uJylcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnNCcpXG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKCdjb2xzJywgJzIwJylcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpXG4gICAgICAgIGZvcm1zLmFwcGVuZChkZXNjcmlwdGlvbklucHV0KVxuXG4gICAgICAgIGNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgICAgZHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Rhc2stZHVlZGF0ZScpXG4gICAgICAgIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZSdcbiAgICAgICAgZm9ybXMuYXBwZW5kKGR1ZURhdGVMYWJlbClcblxuICAgICAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnZHVlZGF0ZScpXG4gICAgICAgIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stZHVlZGF0ZScpXG4gICAgICAgIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZGF0ZScpXG4gICAgICAgIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJycpXG4gICAgICAgIGZvcm1zLmFwcGVuZChkdWVEYXRlSW5wdXQpXG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICAgICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd0YXNrLXByaW9yaXR5JylcbiAgICAgICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9ICdQcmlvcml0eSdcbiAgICAgICAgZm9ybXMuYXBwZW5kKHByaW9yaXR5TGFiZWwpXG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAncHJpb3JpdHknKVxuICAgICAgICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay1wcmlvcml0eScpXG4gICAgICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpXG4gICAgICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCdtaW4nLCAnMScpXG4gICAgICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCdtYXgnLCAnMTAnKVxuICAgICAgICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAnJylcbiAgICAgICAgZm9ybXMuYXBwZW5kKHByaW9yaXR5SW5wdXQpXG5cbiAgICAgICAgZm9ybXMuYXBwZW5kKHN1Ym1pdClcblxuICAgICAgICBsZXQgZHVlRGF0ZVZhbHVlID0gJydcblxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2stZHVlZGF0ZVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZHVlRGF0ZVZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgfSk7IFxuXG4gICAgICAgIGZvcm1zLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShlLnRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBmb3JtUHJvcHMgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpO1xuXG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdC5hZGRUYXNrKHRhc2soZm9ybVByb3BzLnRpdGxlLCBmb3JtUHJvcHMuZGVzY3JpcHRpb24sIGR1ZURhdGVWYWx1ZSwgZm9ybVByb3BzLnByaW9yaXR5KSlcbiAgICAgICAgICAgIHBvcHVsYXRlU3RvcmFnZSgpXG4gICAgICAgICAgICBjbG9zZU1vZGFsKClcbiAgICAgICAgICAgIGxvYWRUYXNrcyhjdXJyZW50UHJvamVjdClcbiAgICAgICAgICAgIGZvcm1zLnJlc2V0KClcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCB7IGxvYWRNb2RhbHMsIHBvcHVsYXRlTW9kYWwsIG9wZW5Nb2RhbCwgY2xvc2VNb2RhbCB9IiwiaW1wb3J0IHsgcHJvamVjdEhvbGRlciB9IGZyb20gJy4vZGF0YSdcblxuZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gICAgbGV0IHN0b3JhZ2U7XG4gICAgdHJ5IHtcbiAgICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICAgICAgY29uc3QgeCA9ICdfX3N0b3JhZ2VfdGVzdF9fJztcbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmIChcbiAgICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICAgIGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgICBlLm5hbWUgPT09ICdRdW90YUV4Y2VlZGVkRXJyb3InIHx8XG4gICAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgICBlLm5hbWUgPT09ICdOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRCcpICYmXG4gICAgICAgICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgICAgICAgKHN0b3JhZ2UgJiYgc3RvcmFnZS5sZW5ndGggIT09IDApO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmV0cmlldmVTdG9yYWdlKCkge1xuICAgIGlmIChzdG9yYWdlQXZhaWxhYmxlKCdsb2NhbFN0b3JhZ2UnKSkge1xuICAgICAgICBsZXQgaSA9IDBcbiAgICAgICAgd2hpbGUgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGBwcm9qZWN0JHtpICsgMX1gKSkge1xuICAgICAgICAgICAgcHJvamVjdEhvbGRlci5wcm9qZWN0TGlzdFtpXSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oYHByb2plY3Qke2kgKyAxfWApKVxuXG4gICAgICAgICAgICBsZXQgaiA9IDBcbiAgICAgICAgICAgIHdoaWxlIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgdGFzayR7aSArIDF9LSR7aiArIDF9YCkpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0SG9sZGVyLnByb2plY3RMaXN0W2ldLnRhc2tMaXN0W2pdID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShgdGFzayR7aSArIDF9LSR7aiArIDF9YCkpXG5cbiAgICAgICAgICAgICAgICBqKytcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaSsrXG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBhbGVydCgnbG9jYWxTdG9yYWdlIGlzIG5vdCBhdmFpbGFibGUnKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcG9wdWxhdGVTdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXG5cbiAgICBpZiAoc3RvcmFnZUF2YWlsYWJsZSgnbG9jYWxTdG9yYWdlJykpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0SG9sZGVyLnByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgcHJvamVjdCR7aSArIDF9YCwgSlNPTi5zdHJpbmdpZnkocHJvamVjdEhvbGRlci5wcm9qZWN0TGlzdFtpXSkpO1xuXG4gICAgICAgICAgICBpZiAocHJvamVjdEhvbGRlci5wcm9qZWN0TGlzdFtpXS50YXNrTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwcm9qZWN0SG9sZGVyLnByb2plY3RMaXN0W2ldLnRhc2tMaXN0Lmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGB0YXNrJHtpICsgMX0tJHtqICsgMX1gLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0SG9sZGVyLnByb2plY3RMaXN0W2ldLnRhc2tMaXN0W2pdKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSAgIFxuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoJ2xvY2FsU3RvcmFnZSBpcyBub3QgYXZhaWxhYmxlJylcbiAgICB9XG59ICAgXG5cbmV4cG9ydCB7IHJldHJpZXZlU3RvcmFnZSwgcG9wdWxhdGVTdG9yYWdlIH0iLCJpbXBvcnQgeyBwcm9qZWN0IH0gZnJvbSBcIi4vZGF0YVwiXG5pbXBvcnQgeyBsb2FkVGFza3MsIGhhbmRsZVRhc2tBZGRpbmcgfSBmcm9tIFwiLi9tYWluY29udGVudFwiXG5pbXBvcnQgeyBvcGVuTW9kYWwsIHBvcHVsYXRlTW9kYWwgfSBmcm9tIFwiLi9tb2RhbFwiXG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JylcbmNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5cbmNvbnN0IGxvYWRTaWRlYmFyID0gKCkgPT4ge1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhcicpXG4gICAgYm9keS5hcHBlbmQoc2lkZWJhcilcblxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuICAgIGgxLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJ1xuICAgIHNpZGViYXIuYXBwZW5kKGgxKVxuXG4gICAgcHJvamVjdHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMtY29udGFpbmVyJylcbiAgICBzaWRlYmFyLmFwcGVuZChwcm9qZWN0c0NvbnRhaW5lcilcblxuICAgIGFkZFByb2plY3RCdG4udGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnXG4gICAgc2lkZWJhci5hcHBlbmQoYWRkUHJvamVjdEJ0bilcbn1cblxuY29uc3QgbG9hZFByb2plY3RMaXN0ID0gcHJvamVjdEhvbGRlciA9PiB7XG4gICAgcHJvamVjdHNDb250YWluZXIuaW5uZXJIVE1MID0gJydcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdEhvbGRlci5wcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgICAgICBwcm9qZWN0LnRleHRDb250ZW50ID0gYCR7cHJvamVjdEhvbGRlci5wcm9qZWN0TGlzdFtpXS50aXRsZX1gXG4gICAgICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0KVxuXG4gICAgICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBsb2FkVGFza3MocHJvamVjdEhvbGRlci5wcm9qZWN0TGlzdFtpXSlcbiAgICAgICAgICAgIGhhbmRsZVRhc2tBZGRpbmcocHJvamVjdEhvbGRlci5wcm9qZWN0TGlzdFtpXSkgXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5jb25zdCBoYW5kbGVQcm9qZWN0QWRkaW5nID0gKCkgPT4ge1xuICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG9wZW5Nb2RhbCgpXG4gICAgICAgIHBvcHVsYXRlTW9kYWwoJ2FkZHByb2plY3QnKVxuICAgIH0pXG59XG5cbmV4cG9ydCB7IGxvYWRTaWRlYmFyLCBsb2FkUHJvamVjdExpc3QsIGhhbmRsZVByb2plY3RBZGRpbmcgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgKiBhcyBwZXJzaXN0ZW50IGZyb20gJy4vcGVyc2lzdGVudC1kYXRhJ1xuaW1wb3J0ICogYXMgZGF0YSBmcm9tICcuL2RhdGEnXG5pbXBvcnQgKiBhcyBoZWFkZXIgZnJvbSAnLi9oZWFkZXInXG5pbXBvcnQgKiBhcyBzaWRlYmFyIGZyb20gJy4vc2lkZWJhcidcbmltcG9ydCAqIGFzIG1haW5jb250ZW50IGZyb20gJy4vbWFpbmNvbnRlbnQnXG5pbXBvcnQgKiBhcyBtb2RhbCBmcm9tICcuL21vZGFsJ1xuXG5jb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UpXG5cbnBlcnNpc3RlbnQucmV0cmlldmVTdG9yYWdlKClcblxuaGVhZGVyLmxvYWRIZWFkZXIoKVxuXG5zaWRlYmFyLmxvYWRTaWRlYmFyKClcblxubWFpbmNvbnRlbnQubG9hZE1haW5Db250ZW50KClcblxubW9kYWwubG9hZE1vZGFscygpXG5cbnNpZGViYXIuaGFuZGxlUHJvamVjdEFkZGluZygpXG5cbm1haW5jb250ZW50LmxvYWRUYXNrcyhkYXRhLnByb2plY3RIb2xkZXIucHJvamVjdExpc3RbMF0pXG5cbm1haW5jb250ZW50LmhhbmRsZVRhc2tBZGRpbmcoZGF0YS5wcm9qZWN0SG9sZGVyLnByb2plY3RMaXN0WzBdKVxuXG5zaWRlYmFyLmxvYWRQcm9qZWN0TGlzdChkYXRhLnByb2plY3RIb2xkZXIpXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
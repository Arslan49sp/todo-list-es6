/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Prompt&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --primary-color: #f0edd4;
  --secondary-color: #f9fbe7;
  --danger-color: #f00;
  --highlight-color: #fea1a1;
}

* {
  margin: 0;
  padding: 0;
  color: green;
  font-family: "Prompt", sans-serif;
  box-sizing: border-box;
}

body {
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: var(--primary-color);
  padding: 5px 20px;
}

.container {
  background-color: var(--secondary-color);
  border-radius: 10px;
  overflow: hidden;
}

.box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 17px;
  padding: 20px 35px;
  width: 100%;
  min-width: 700px;
  border: none;
  border-bottom: 1px solid var(--primary-color);
}

.box:hover {
  outline: 1px solid var(--highlight-color);
}

.button {
  justify-content: center;
  background-color: green;
  color: var(--secondary-color);
}

.button:hover {
  background-color: var(--danger-color);
  cursor: pointer;
}

.list {
  display: grid;
  grid-template-columns: 1em auto;
  gap: 0.5em;
  margin-right: 12px;
}

#task-input {
  background-color: transparent;
  font-style: italic;
}

#task-input:focus {
  outline: none;
}

.icon {
  color: green;
}

.flex-center {
  align-items: center;
}

.completed-item {
  text-decoration: line-through;
  color: var(--highlight-color);
}

.hidden {
  display: none;
  z-index: -1;
}

.input {
  background-color: transparent;
  border: none;
  font-size: 17px;
  height: 25px;
  padding: 0 10px;
  resize: none;
  overflow: hidden;
}

.input::-webkit-scrollbar {
  width: 0;
}

.fa-trash:hover {
  color: red;
  cursor: pointer;
}

.checked {
  text-decoration: line-through;
  color: gray;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;EACE,wBAAwB;EACxB,0BAA0B;EAC1B,oBAAoB;EACpB,0BAA0B;AAC5B;;AAEA;EACE,SAAS;EACT,UAAU;EACV,YAAY;EACZ,iCAAiC;EACjC,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,aAAa;EACb,sCAAsC;EACtC,iBAAiB;AACnB;;AAEA;EACE,wCAAwC;EACxC,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,gBAAgB;EAChB,YAAY;EACZ,6CAA6C;AAC/C;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,uBAAuB;EACvB,uBAAuB;EACvB,6BAA6B;AAC/B;;AAEA;EACE,qCAAqC;EACrC,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,+BAA+B;EAC/B,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,6BAA6B;EAC7B,kBAAkB;AACpB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,6BAA6B;EAC7B,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,WAAW;AACb;;AAEA;EACE,6BAA6B;EAC7B,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,QAAQ;AACV;;AAEA;EACE,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,6BAA6B;EAC7B,WAAW;AACb","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Prompt&display=swap\");\r\n\r\n:root {\r\n  --primary-color: #f0edd4;\r\n  --secondary-color: #f9fbe7;\r\n  --danger-color: #f00;\r\n  --highlight-color: #fea1a1;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  color: green;\r\n  font-family: \"Prompt\", sans-serif;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  display: grid;\r\n  place-items: center;\r\n  height: 100vh;\r\n  background-color: var(--primary-color);\r\n  padding: 5px 20px;\r\n}\r\n\r\n.container {\r\n  background-color: var(--secondary-color);\r\n  border-radius: 10px;\r\n  overflow: hidden;\r\n}\r\n\r\n.box {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  font-size: 17px;\r\n  padding: 20px 35px;\r\n  width: 100%;\r\n  min-width: 700px;\r\n  border: none;\r\n  border-bottom: 1px solid var(--primary-color);\r\n}\r\n\r\n.box:hover {\r\n  outline: 1px solid var(--highlight-color);\r\n}\r\n\r\n.button {\r\n  justify-content: center;\r\n  background-color: green;\r\n  color: var(--secondary-color);\r\n}\r\n\r\n.button:hover {\r\n  background-color: var(--danger-color);\r\n  cursor: pointer;\r\n}\r\n\r\n.list {\r\n  display: grid;\r\n  grid-template-columns: 1em auto;\r\n  gap: 0.5em;\r\n  margin-right: 12px;\r\n}\r\n\r\n#task-input {\r\n  background-color: transparent;\r\n  font-style: italic;\r\n}\r\n\r\n#task-input:focus {\r\n  outline: none;\r\n}\r\n\r\n.icon {\r\n  color: green;\r\n}\r\n\r\n.flex-center {\r\n  align-items: center;\r\n}\r\n\r\n.completed-item {\r\n  text-decoration: line-through;\r\n  color: var(--highlight-color);\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n  z-index: -1;\r\n}\r\n\r\n.input {\r\n  background-color: transparent;\r\n  border: none;\r\n  font-size: 17px;\r\n  height: 25px;\r\n  padding: 0 10px;\r\n  resize: none;\r\n  overflow: hidden;\r\n}\r\n\r\n.input::-webkit-scrollbar {\r\n  width: 0;\r\n}\r\n\r\n.fa-trash:hover {\r\n  color: red;\r\n  cursor: pointer;\r\n}\r\n\r\n.checked {\r\n  text-decoration: line-through;\r\n  color: gray;\r\n}\r\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/modules/addNewTask.js":
/*!***********************************!*\
  !*** ./src/modules/addNewTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addNewTask)
/* harmony export */ });
function addNewTask(newTaskDesc, array) {
  const newTask = {
    description: newTaskDesc,
    completed: false,
    index: array.length + 1,
  };

  array.push(newTask);
}


/***/ }),

/***/ "./src/modules/deleteTask.js":
/*!***********************************!*\
  !*** ./src/modules/deleteTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ deleteTask)
/* harmony export */ });
function deleteTask(id, array) {
  return array.filter((item) => item.index !== id);
}


/***/ }),

/***/ "./src/modules/localData.js":
/*!**********************************!*\
  !*** ./src/modules/localData.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ localDataU)
/* harmony export */ });
function localDataU(data) {
  localStorage.setItem('todolist', JSON.stringify(data));
}


/***/ }),

/***/ "./src/modules/sortListAfter.js":
/*!**************************************!*\
  !*** ./src/modules/sortListAfter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sortListAfter)
/* harmony export */ });
function sortListAfter(arr, n) {
  const taskList = document.querySelectorAll('.task-item');
  const index = [];
  taskList.forEach((task) => {
    index.push(Number(task.id) - 1);
  });

  const temp = [...Array(n)];

  // arr[i] should be present at index[i] index
  for (let i = 0; i < n; i += 1) {
    temp[i] = arr[index[i]];
  }

  // Copy temp[] to arr[]
  for (let i = 0; i < n; i += 1) {
    arr[i] = temp[i];
    arr[i].index = i + 1;
  }
}


/***/ }),

/***/ "./src/modules/todoListGenerator.js":
/*!******************************************!*\
  !*** ./src/modules/todoListGenerator.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ todoListGenerator)
/* harmony export */ });
/* harmony import */ var _localData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localData.js */ "./src/modules/localData.js");
/* harmony import */ var _updateCheckboxStatus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateCheckboxStatus.js */ "./src/modules/updateCheckboxStatus.js");
/* harmony import */ var _sortListAfter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sortListAfter.js */ "./src/modules/sortListAfter.js");
/* harmony import */ var _updateTaskDesc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./updateTaskDesc.js */ "./src/modules/updateTaskDesc.js");
/* harmony import */ var _deleteTask_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./deleteTask.js */ "./src/modules/deleteTask.js");






function todoListGenerator(arrayTodoList) {
  function loopTodoElement(item) {
    return `<li id="${item.index}" class="box task-item" >
    <span class="list ${
      item.completed === false ? "" : "checked"
    }"><input class="checkbox" type="checkbox" data-id="${item.index}" ${
      item.completed === false ? "" : "checked"
    } />
      <textarea class="input" data-id="${item.index}">${
      item.description
    }</textarea>
    </span>
    <span id="${
      item.index
    }-menu-icon"><i class="icon fa-solid fa-ellipsis-vertical"></i></span>
    <span id="${
      item.index
    }-delete-icon" class="hidden remove-button" data-id="${
      item.index
    }" ><i class="icon fas fa-trash"></i></span>
</li>`;
  }

  const listContainer = document.querySelector(".list-container");

  listContainer.innerHTML = arrayTodoList
    .map((list) => loopTodoElement(list))
    .join("");

  const textareaInputs = document.querySelectorAll(".input");

  textareaInputs.forEach((input) => {
    if (input.scrollHeight > 50) {
      const height = input.scrollHeight;
      input.style.height = `${height - 10}px`;
    }

    input.addEventListener("keyup", (e) => {
      e.target.style.height = "auto";
      const height = e.target.scrollHeight;
      e.target.style.height = `${height - 20}px`;
      if (e.key === "Enter") {
        input.value = input.value.replace(/\n/g, "");
        const index = Number(input.getAttribute("data-id")) - 1;
        (0,_updateTaskDesc_js__WEBPACK_IMPORTED_MODULE_3__["default"])(input.value, arrayTodoList, index);
        (0,_localData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arrayTodoList);
        todoListGenerator(arrayTodoList);
      }
    });

    const inputId = input.getAttribute("data-id");
    const menuIcon = document.getElementById(`${inputId}-menu-icon`);
    const deleteIcon = document.getElementById(`${inputId}-delete-icon`);

    input.addEventListener("focusin", () => {
      menuIcon.classList.add("hidden");
      deleteIcon.classList.remove("hidden");
    });

    input.addEventListener("focusout", () => {
      setTimeout(() => {
        menuIcon.classList.remove("hidden");
        deleteIcon.classList.add("hidden");
      }, 400);
    });
  });

  const removeButtons = document.querySelectorAll(".remove-button");

  removeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.getAttribute("data-id"));
      arrayTodoList = (0,_deleteTask_js__WEBPACK_IMPORTED_MODULE_4__["default"])(id, arrayTodoList);
      (0,_sortListAfter_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arrayTodoList, arrayTodoList.length);
      (0,_localData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arrayTodoList);
      todoListGenerator(arrayTodoList);
    });
  });
}

// update array if checkbox checked
const checkboxes = document.querySelectorAll(".checkbox");
checkboxes.forEach((box) => {
  console.log(box);
  box.addEventListener("change", () => {
    const id = Number(box.getAttribute("data-id"));
    (0,_updateCheckboxStatus_js__WEBPACK_IMPORTED_MODULE_1__["default"])(id, arrayTodoList);
    (0,_localData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arrayTodoList);
    todoListGenerator(arrayTodoList);
  });
});


/***/ }),

/***/ "./src/modules/updateCheckboxStatus.js":
/*!*********************************************!*\
  !*** ./src/modules/updateCheckboxStatus.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateCheckboxStatus)
/* harmony export */ });
function updateCheckboxStatus(inputId, array) {
  array.map((item) => {
    if (item.index === inputId) {
      if (item.completed === false) {
        item.completed = true;
      } else {
        item.completed = false;
      }
    }
    return item;
  });
}


/***/ }),

/***/ "./src/modules/updateTaskDesc.js":
/*!***************************************!*\
  !*** ./src/modules/updateTaskDesc.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateTaskDesc)
/* harmony export */ });
function updateTaskDesc(newValue, array, index) {
  array[index].description = newValue;
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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _modules_todoListGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/todoListGenerator.js */ "./src/modules/todoListGenerator.js");
/* harmony import */ var _modules_addNewTask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/addNewTask.js */ "./src/modules/addNewTask.js");
/* harmony import */ var _modules_localData_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/localData.js */ "./src/modules/localData.js");





let todoList = [];

// checked local storage
const localData = JSON.parse(localStorage.getItem('todolist'));

if (localData) {
  todoList = localData;
}

//  render to html
(0,_modules_todoListGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(todoList);
const taskInput = document.querySelector('#task-input');
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    // function add the input to the array
    const localData = JSON.parse(localStorage.getItem('todolist'));
    if (localData) {
      todoList = localData;
    }
    (0,_modules_addNewTask_js__WEBPACK_IMPORTED_MODULE_2__["default"])(taskInput.value, todoList);
    taskInput.value = '';
    (0,_modules_localData_js__WEBPACK_IMPORTED_MODULE_3__["default"])(todoList);
    (0,_modules_todoListGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(todoList);
  }
});

})();

/******/ })()
;
//# sourceMappingURL=bundlecfc702322b01f95d26ab.js.map
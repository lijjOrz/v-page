(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("vPage", [], factory);
	else if(typeof exports === 'object')
		exports["vPage"] = factory();
	else
		root["vPage"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(9);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var languages = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].languages,
    defaults = __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* default */].defaults;


/* harmony default export */ __webpack_exports__["a"] = ({
    name: "v-page",
    props: ['setting'],
    data: function data() {
        var config = Object.assign({}, defaults, this.setting);
        var i18n = languages[config.language];

        return {
            config: config,
            pageNumber: 3,
            pageSize: config.pageSizeMenu && Array.isArray(config.pageSizeMenu) && config.pageSizeMenu.length ? config.pageSizeMenu[0] : 10,
            totalRow: config.totalRow,
            totalPage: 0,
            currentPage: config.currentPage,
            lengthList: config.pageSizeMenu,
            pageNumberSize: 11,
            language: config.language,
            i18n: i18n,
            pageClass: {
                vPagination: true,
                vPaginationRight: false,
                vPaginationCenter: false
            }
        };
    },

    computed: {
        pageNumbers: function pageNumbers() {
            var start = void 0,
                end = void 0,
                nums = [],
                pNum = this.currentPage,
                half = Math.floor(this.pageNumberSize / 2);
            if (this.totalPage < this.pageNumberSize) {
                start = 1;
                end = this.totalPage;
            } else if (pNum <= half) {
                start = 1;
                end = this.pageNumberSize;
            } else if (pNum >= this.totalPage - half) {
                start = this.totalPage - this.pageNumberSize + 1;
                end = this.totalPage;
            } else {
                start = pNum - half;
                end = start + this.pageNumberSize - 1;
            }

            for (var i = start; i <= end; i++) {
                nums.push(i);
            }
            return nums;
        }
    },
    watch: {
        // 原本136行的代码只负责在点击之后更新currentPage，而这里的watch负责监听currentPage的改变，然后调用goPage()发送事件，注释掉这里，
        // 改为：只要点击了某个标签，就直接发送事件，不需要通过监听来发送。

        // currentPage:function(val){ 
        //     this.goPage(val);
        // },
        'setting.currentPage': function settingCurrentPage(val) {
            // 监听传入的currentPage变化
            this.currentPage = val;
            console.log(val, 'currentPage');
        },
        'setting.totalRow': function settingTotalRow(val) {
            this.totalRow = val;
            this.calcTotalPage();
        }
    },
    methods: {
        goPage: function goPage(pNum) {
            this.currentPage = pNum;
            this.$emit('page-change', {
                pageNumber: pNum,
                pageSize: Number(this.pageSize)
            });
            this.calcTotalPage();
        },
        calcTotalPage: function calcTotalPage() {
            this.totalPage = Math.ceil(this.totalRow / this.pageSize);
        },
        switchPage: function switchPage(pNum) {
            if (typeof pNum === 'string') {
                switch (pNum) {
                    case 'first':
                        if (this.currentPage !== 1) {
                            this.currentPage = 1;
                            this.goPage(1);
                        }
                        break;
                    // case 'previous':
                    //     if(this.currentPage!==1) this.currentPage--;
                    //     break;
                    // case 'next':
                    //     if(this.currentPage!==this.totalPage) this.currentPage++;
                    //     break;
                    case 'last':
                        if (this.currentPage !== this.totalPage) {
                            this.currentPage = this.totalPage;
                            this.goPage(this.totalPage);
                        }
                        break;
                }
            } else if (typeof pNum === 'number') {
                this.currentPage = pNum;
                this.goPage(pNum); // 这里添加的方法，替换掉了94行的代码。
            }
        },
        switchLength: function switchLength() {
            this.goPage(1);
        }
    },
    mounted: function mounted() {
        if (this.config.align === 'center') this.pageClass.vPaginationCenter = true;else if (this.config.align === 'right') this.pageClass.vPaginationRight = true;
        this.goPage(1);
    }
});

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vPage__ = __webpack_require__(2);


var Plugin = {
    install: function install(Vue) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        Vue.component(__WEBPACK_IMPORTED_MODULE_0__vPage__["a" /* default */].name, __WEBPACK_IMPORTED_MODULE_0__vPage__["a" /* default */]);
    }
};

/* harmony default export */ __webpack_exports__["default"] = (Plugin);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vPage_vue__ = __webpack_require__(0);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fefb0fd8_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_vPage_vue__ = __webpack_require__(10);
function injectStyle (ssrContext) {
  __webpack_require__(3)
}
var normalizeComponent = __webpack_require__(8)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-fefb0fd8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vPage_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_fefb0fd8_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_vPage_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("f5933080", content, true, {});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "div.vPagination[data-v-fefb0fd8]{margin:0;display:block}div.vPagination.vPaginationRight[data-v-fefb0fd8]{text-align:right}div.vPagination.vPaginationCenter[data-v-fefb0fd8]{text-align:center}div.vPagination>ul[data-v-fefb0fd8]{display:inline-block;margin-bottom:0;margin-left:0;-webkit-border-radius:0;-moz-border-radius:0;border-radius:0;-webkit-box-shadow:0 1px 2px rgba(0,0,0,.05);-moz-box-shadow:0 1px 2px rgba(0,0,0,.05);box-shadow:0 1px 2px rgba(0,0,0,.05);padding:0}div.vPagination>ul>li[data-v-fefb0fd8]{text-align:center;display:inline;box-sizing:border-box;margin:0}div.vPagination>ul>li>a[data-v-fefb0fd8]{margin:0;border:1px solid #ddd;border-radius:0;padding:6px 12px;line-height:20px;box-shadow:none;-moz-box-shadow:none;-webkit-box-shadow:none;background-color:#fff;float:left;text-decoration:none;border-left-width:0;box-sizing:content-box;color:#000;-webkit-transition:all .5s cubic-bezier(.175,.885,.32,1);transition:all .5s cubic-bezier(.175,.885,.32,1)}div.vPagination>ul>li>a[data-v-fefb0fd8]:hover{box-shadow:0 0 12px rgba(0,0,0,.2);-moz-box-shadow:0 0 12px rgba(0,0,0,.2);-webkit-box-shadow:0 0 12px rgba(0,0,0,.2)}div.vPagination>ul>li.disabled>a[data-v-fefb0fd8]{color:#999;cursor:default}div.vPagination>ul>li.disabled>a[data-v-fefb0fd8]:hover{color:#999;background-color:#fff;box-shadow:none}div.vPagination>ul>li.active>a[data-v-fefb0fd8],div.vPagination>ul>li.active>span[data-v-fefb0fd8]{cursor:default;color:#999;background-color:#eee}div.vPagination>ul>li.active>a[data-v-fefb0fd8]:hover,div.vPagination>ul>li.active>span[data-v-fefb0fd8]:hover{box-shadow:none}div.vPagination>ul>li:first-child>a[data-v-fefb0fd8],div.vPagination>ul>li:first-child>span[data-v-fefb0fd8]{border-left-width:1px;-webkit-border-bottom-left-radius:2px;border-bottom-left-radius:2px;-webkit-border-top-left-radius:2px;border-top-left-radius:2px;-moz-border-radius-bottomleft:2px;-moz-border-radius-topleft:2px}div.vPagination>ul>li:last-child>a[data-v-fefb0fd8],div.vPagination>ul>li:last-child>span[data-v-fefb0fd8]{-webkit-border-bottom-right-radius:2px;border-bottom-right-radius:2px;-webkit-border-top-right-radius:2px;border-top-right-radius:2px;-moz-border-radius-bottomright:2px;-moz-border-radius-topright:2px}div.vPagination>ul>li.vPaginationList a[data-v-fefb0fd8]{line-height:20px;height:20px}div.vPagination>ul>li.vPaginationList select[data-v-fefb0fd8]{margin:-2px 0 0 5px;width:auto!important;vertical-align:middle;height:22px;line-height:22px;font-size:12px;padding:0;display:inline-block;border:1px solid #ccc}div.vPagination>ul>li.vPaginationList select[data-v-fefb0fd8]:hover{box-shadow:0 0 8px rgba(0,0,0,.2);-moz-box-shadow:0 0 8px rgba(0,0,0,.2);-webkit-box-shadow:0 0 8px rgba(0,0,0,.2)}", ""]);

// exports


/***/ }),
/* 5 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(7)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var languages = {
    cn: {
        pageLength: '每页记录数 ',
        pageInfo: '\u5F53\u524D\u663E\u793A\u7B2C #pageNumber# / #totalPage# \u9875\uFF08\u5171#totalRow#\u6761\u8BB0\u5F55\uFF09',
        first: '首页',
        previous: '«',
        next: '»',
        last: '尾页'
    },
    en: {
        pageLength: 'Page length ',
        pageInfo: 'Current #pageNumber# / #totalPage# （total #totalRow# records）',
        first: 'First',
        previous: '«',
        next: '»',
        last: 'Last'
    },
    jp: {
        pageLength: 'ページごとの記録数',
        pageInfo: '現在の第 #pageNumber# / #totalPage# ページ（全部で #totalRow# 条の記録）',
        first: 'トップページ',
        previous: '«',
        next: '»',
        last: '尾のページ'
    }
};

var defaults = {
    totalRow: 0,
    info: true,
    pageSizeMenu: [10, 20, 50, 100],
    language: 'cn',
    align: 'right',
    currentPage: 2
};

/* harmony default export */ __webpack_exports__["a"] = ({
    languages: languages,
    defaults: defaults
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[_vm.pageClass]},[_c('ul',[(_vm.config.pageSizeMenu)?_c('li',{staticClass:"disabled vPaginationList"},[_c('a',[_vm._v(_vm._s(_vm.i18n.pageLength)+"\n                "),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.pageSize),expression:"pageSize"}],on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.pageSize=$event.target.multiple ? $$selectedVal : $$selectedVal[0]},_vm.switchLength]}},_vm._l((_vm.lengthList),function(len){return _c('option',[_vm._v(_vm._s(len))])}))])]):_vm._e(),_vm._v(" "),(_vm.config.info)?_c('li',{staticClass:"disabled bPageInfo"},[_c('a',[_vm._v(_vm._s(_vm.i18n.pageInfo
                .replace('#pageNumber#', _vm.currentPage)
                .replace('#totalPage#', _vm.totalPage)
                .replace('#totalRow#', _vm.totalRow)))])]):_vm._e(),_vm._v(" "),_c('li',{class:{disabled:_vm.currentPage === 1,bPageControlButton:true}},[_c('a',{attrs:{"href":"javascript:void(0);"},on:{"click":function($event){_vm.switchPage('first')}}},[_vm._v(_vm._s(_vm.i18n.first))])]),_vm._v(" "),_vm._l((_vm.pageNumbers),function(num,index){return _c('li',{class:{active:(num === _vm.currentPage)}},[_c('a',{attrs:{"href":"javascript:void(0);"},on:{"click":function($event){_vm.switchPage(num)}}},[_vm._v(_vm._s(num))])])}),_vm._v(" "),_c('li',{class:{bPageControlButton:true,disabled:_vm.currentPage === _vm.totalPage}},[_c('a',{attrs:{"href":"javascript:void(0);"},on:{"click":function($event){_vm.switchPage('last')}}},[_vm._v(_vm._s(_vm.i18n.last))])])],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })
/******/ ]);
});
//# sourceMappingURL=v-page.js.map
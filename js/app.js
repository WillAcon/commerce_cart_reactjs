/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 53);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

  module.exports = React;

  /***/ }),
  /* 1 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__combineActions__ = __webpack_require__(96);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__createAction__ = __webpack_require__(18);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createActions__ = __webpack_require__(99);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createCurriedAction__ = __webpack_require__(108);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__handleAction__ = __webpack_require__(44);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__handleActions__ = __webpack_require__(111);
  /* unused harmony reexport combineActions */
  /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__createAction__["a"]; });
  /* unused harmony reexport createActions */
  /* unused harmony reexport createCurriedAction */
  /* unused harmony reexport handleAction */
  /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__handleActions__["a"]; });
  
  
  
  
  
  
  
  
  /***/ }),
  /* 2 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FETCH_COMPLEMENTS; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FETCH_VARIATION; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FETCH_ORDER; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return SET_QUANTITY_VARIATION; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return UPDATE_CART_ORDER; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return UPDATE_ORDER; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SET_OPEN_CART_TOP_BLOCK; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return SET_OPEN_COMPLEMENT_BLOCK; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SET_OPEN_MODAL; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SET_COUNT_CART; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SET_COMPLEMENT; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DELETE_ITEM_ORDER; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ID_PRODUCT; });
  /* unused harmony export LANGUAGE */
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return MATH_CONST; });
  var FETCH_COMPLEMENTS = "FETCH_COMPLEMENTS";
  var FETCH_VARIATION = "FETCH_VARIATION";
  var FETCH_ORDER = "FETCH_ORDER";
  var SET_QUANTITY_VARIATION = "SET_QUANTITY_VARIATION";
  var UPDATE_CART_ORDER = "UPDATE_CART_ORDER";
  var UPDATE_ORDER = "UPDATE_ORDER";
  var SET_OPEN_CART_TOP_BLOCK = "SET_OPEN_CART_TOP_BLOCK";
  var SET_OPEN_COMPLEMENT_BLOCK = "SET_OPEN_COMPLEMENT_BLOCK";
  var SET_OPEN_MODAL = "SET_OPEN_MODAL";
  var SET_COUNT_CART = "SET_COUNT_CART";
  var SET_COMPLEMENT = "SET_COMPLEMENT";
  var DELETE_ITEM_ORDER = "DELETE_ITEM_ORDER";
  
  var ID_PRODUCT = drupalSettings.path.currentPath.substr(8, 9);
  var LANGUAGE = drupalSettings.path.currentLanguage;
  var MATH_CONST = Math.floor(Math.random() * 199998880 + 1);
  
  /***/ }),
  /* 3 */
  /***/ (function(module, exports, __webpack_require__) {
  
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  
  if (true) {
    var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;
  
    var isValidElement = function isValidElement(object) {
      return (typeof object === 'undefined' ? 'undefined' : babelHelpers.typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    };
  
    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = __webpack_require__(55)(isValidElement, throwOnDirectAccess);
  } else {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = require('./factoryWithThrowingShims')();
  }
  
  /***/ }),
  /* 4 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return baseUrl; });
  /* unused harmony export formatPrice */
  /* unused harmony export formatNewCart */
  /* unused harmony export formatNewCart_1 */
  /* unused harmony export BuscarChildren */
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetFilterComplement; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GetFilterVariation; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GetFilterOrder; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return GetFilterOrderItem; });
  var langCode = drupalSettings.path.currentLanguage;
  
  var baseUrl = '' + window.location.origin + drupalSettings.path.baseUrl;
  
  function formatPrice(priceObject) {
    if (priceObject.currency_code === null) {
      return '';
    }
    // console.log("priceObject.currency_code",priceObject.currency_code);
    return new Intl.NumberFormat(langCode, { style: 'currency', currency: priceObject.currency_code }).format(priceObject.number);
  }
  
  function formatNewCart(cartObject) {
  
    var Items = [];
  
    var parents = [];
    var result = {
      order_items: []
    };
  
    // console.log("cartObject", cartObject[0].total_price)
  
    cartObject.map(function (item, index) {
  
      var objectTemp = {
        order_item_id: item.order_item_id,
        purchased_entity: item.purchased_entity,
        quantity: item.quantity,
        title: item.title,
        image: item.image,
        price: item.price,
        // complementos :  item.field_complementos,
        parent: item.parent,
        is_parent: !item.parent ? true : false
      };
  
      // if(item.type == 'Predeterminado') {
      //   parents.push(objectTemp);
      // }
      if (!item.parent) {
        parents.push(objectTemp);
      }
  
      result.total_price = item.total_price ? item.total_price : 0;
      result.order_id = item.order_id;
      // Items.order_item[index] = objectTemp;
  
      Items.push(objectTemp);
    });
  
    parents.map(function (parent, index) {
  
      // console.log("parent111", parent);
      // console.log("parent111", index);
      result.order_items[index] = parent;
      result.order_items[index]['childrens'] = [];
      // var strChildren = parent.complementos;
      for (var cont = 0; cont < Items.length; cont++) {
  
        if (BuscarChildren(parent.purchased_entity, Items[cont]['parent']) && !Items[cont]['is_parent']) {
          // console.log("econtrado00", Items[cont]['purchased_entity']);
          result.order_items[index]['childrens'].push(Items[cont]);
        }
      }
  
      result.length = cartObject.length;
    });
  
    return result;
  }
  
  //NUEVO
  function formatNewCart_1(cartObject) {
  
    var Items = [];
  
    var parents = [];
  
    var result = {
      order_items: []
    };
  
    result.total_price = cartObject.total_price.formatted ? cartObject.total_price.formatted : 0;
    result.order_id = cartObject.order_id ? cartObject.order_id : 0;
    result.length = 0;
    // console.log("cartObject", cartObject[0].total_price)
    if (cartObject.order_items) {
      cartObject.order_items.map(function (item, index) {
        var objectTemp = {
          order_item_id: item.order_item_id,
          purchased_entity: item.purchased_entity.variation_id,
          quantity: item.quantity,
          title: item.title,
          image: item.purchased_entity.field_imagen_producto[0].uri ? item.purchased_entity.field_imagen_producto[0].uri : '',
          price: item.total_price.formatted,
          // complementos :  item.field_complementos,
          // parent: item.parent,
          is_parent: !item.purchased_entity.type == 'default' ? true : false
        };
        // console.log("objectTemp",objectTemp)
  
        result.order_items.push(objectTemp);
      });
  
      result.length = result.order_items.length;
    }
  
    //  console.log("formetado-->", result);
  
  
    return result;
  }
  
  function BuscarChildren(str, findChildren) {
    var childrens = str.split(",");
    // console.log("childrenschildrens",childrens);
    // console.log("findChildren",findChildren);
    // var hasFive = false;
  
    for (var counter = 0; counter < childrens.length; counter++) {
  
      if (parseInt(childrens[counter]) == parseInt(findChildren)) {
  
        //  hasFive = true;
        //  break;
        return true;
      }
    }
  
    return false;
  }
  var getClassIcon = function getClassIcon(key) {
    switch (key) {
      case 'Chocolates':
        return 'icon-chocolate';
      case 'Peluches':
        return 'icon-peluche';
      case 'Licores':
        return 'icon-botella';
      default:
        return 'icon-otros';
    }
  };
  
  var GetFilterComplement = function GetFilterComplement(complements) {
    var filtros = complements.reduce(function (obj, item) {
      obj[item.filtro] = obj[item.filtro] || [];
      obj[item.filtro].push(item);
      return obj;
    }, {});
  
    var newComplements = Object.keys(filtros).map(function (key) {
      return {
        type: key,
        classIcon: getClassIcon(key),
        data: filtros[key]
      };
    });
  
    return newComplements;
  };
  var GetFilterVariation = function GetFilterVariation(variation) {
    var id_variation = variation.id_variation,
        precio = variation.precio,
        precio_venta = variation.precio_venta;
  
    var data = {
      id: id_variation,
      price: precio,
      priceSale: precio_venta !== "" && precio_venta,
      quantity: 1
    };
    return data;
  };
  
  var GetFilterOrder = function GetFilterOrder(order) {
    var data = {
      id: 0,
      orderNumber: 0,
      idStore: 0,
      totalPriceFormatted: 'S/',
      totalPrice: 0,
      orderItems: [],
      count: 0
    };
    if (!!order) {
      data.id = order.order_id;
      data.orderNumber = data.order_number ? data.order_number : 0;
      data.idStore = order.store_id;
      data.totalPriceFormatted = 'formatted' in order.total_price ? order.total_price.formatted.substring(0, 2) : 'S/';
      data.totalPrice = (+order.total_price.number).toFixed(2);
      //data.orderItems = order.order_items ? order.order_items.map(item=> GetFilterOrderItem(item)):[];
      data.orderItems = order.order_items.map(function (item) {
        return GetFilterOrderItem(item);
      });
      data.count = order.order_items.reduce(function (sum, item) {
        return sum + +item.quantity;
      }, 0);
    }
    return data;
  };
  
  var GetFilterOrderItem = function GetFilterOrderItem(order_item) {
    var data = {
      id: order_item.order_item_id,
      idOrder: order_item.order_id,
      purchasedEntity: order_item.purchased_entity.variation_id,
      purchasedEntityPrice: (+order_item.purchased_entity.price.number).toFixed(2),
      quantity: +order_item.quantity,
      title: order_item.title,
      image: order_item.purchased_entity.field_imagen_producto[0].uri ? order_item.purchased_entity.field_imagen_producto[0].uri : '',
      priceFormatted: order_item.total_price.formatted.substring(0, 3),
      price: (+order_item.total_price.number).toFixed(2),
      isParent: !order_item.purchased_entity.type == 'default' ? true : false
    };
    return data;
  };
  
  /***/ }),
  /* 5 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  
  
  
  /**
   * Use invariant() to assert state which your program assumes to be true.
   *
   * Provide sprintf-style format (only %s is supported) and arguments
   * to provide information about what broke and what you were
   * expecting.
   *
   * The invariant message will be stripped in production, but the invariant
   * will remain to ensure logic does not differ in production.
   */
  
  var invariant = function invariant(condition, format, a, b, c, d, e, f) {
    if (true) {
      if (format === undefined) {
        throw new Error('invariant requires an error message argument');
      }
    }
  
    if (!condition) {
      var error;
      if (format === undefined) {
        error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
      } else {
        var args = [a, b, c, d, e, f];
        var argIndex = 0;
        error = new Error(format.replace(/%s/g, function () {
          return args[argIndex++];
        }));
        error.name = 'Invariant Violation';
      }
  
      error.framesToPop = 1; // we don't care about invariant's own frame
      throw error;
    }
  };
  
  module.exports = invariant;
  
  /***/ }),
  /* 6 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return apiGetComplements; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return apiGetVariation; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return apiGetOrder; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return apiAddProductInCart; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return apiUpdateCart; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return apiDeleteItemInCart; });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_superagent__ = __webpack_require__(21);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_superagent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_superagent__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(4);
  
  
  
  var apiGetComplements = function apiGetComplements(url) {
      return function () {
          return __WEBPACK_IMPORTED_MODULE_0_superagent___default.a.get(url).then(function (r) {
              return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* GetFilterComplement */])(r.body);
          });
      };
  };
  
  var apiGetVariation = function apiGetVariation(url) {
      return function () {
          return __WEBPACK_IMPORTED_MODULE_0_superagent___default.a.get(url).then(function (r) {
              return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["d" /* GetFilterVariation */])(r.body[0]);
          });
      };
  };
  
  var apiGetOrder = function apiGetOrder(url) {
      return function () {
          return __WEBPACK_IMPORTED_MODULE_0_superagent___default.a.get(url).then(function (r) {
              return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* GetFilterOrder */])(r.body[0]);
          });
      };
  };
  
  var apiAddProductInCart = function apiAddProductInCart(url, payload) {
      return function () {
          return __WEBPACK_IMPORTED_MODULE_0_superagent___default.a.post(url).send(payload).set('Content-Type', 'application/json').then(function (res) {
              return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* GetFilterOrderItem */])(res.body[0]);
          });
      };
  };
  
  var apiUpdateCart = function apiUpdateCart(url, id, payload) {
      return function () {
          return __WEBPACK_IMPORTED_MODULE_0_superagent___default.a.patch(url + 'cart/' + id + '/items?_format=json').send(JSON.stringify(payload)).set('Content-Type', 'application/json').then(function (res) {
              return Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* GetFilterOrder */])(res.body);
          });
      };
  };
  
  var apiDeleteItemInCart = function apiDeleteItemInCart(url, idOrder, idItem) {
      return function () {
          return __WEBPACK_IMPORTED_MODULE_0_superagent___default.a.delete(url + 'cart/' + idOrder + '/items/' + idItem + '?_format=json').then(function (res) {
              console.log("llego");
              return idItem;
          });
      };
  };
  
  /***/ }),
  /* 7 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Provider__ = __webpack_require__(54);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_connectAdvanced__ = __webpack_require__(27);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__connect_connect__ = __webpack_require__(60);
  /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components_Provider__["a"]; });
  /* unused harmony reexport createProvider */
  /* unused harmony reexport connectAdvanced */
  /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__connect_connect__["a"]; });
  
  
  
  
  
  
  /***/ }),
  /* 8 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DEFAULT_NAMESPACE; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACTION_TYPE_DELIMITER; });
  var DEFAULT_NAMESPACE = '/';
  var ACTION_TYPE_DELIMITER = '||';
  
  /***/ }),
  /* 9 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony default export */ __webpack_exports__["a"] = (function (value) {
    if ((typeof value === 'undefined' ? 'undefined' : babelHelpers.typeof(value)) !== 'object' || value === null) return false;
    var proto = value;
  
    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto);
    }
  
    return Object.getPrototypeOf(value) === proto;
  });
  
  /***/ }),
  /* 10 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony default export */ __webpack_exports__["a"] = (function (value) {
    return typeof value === 'function';
  });
  
  /***/ }),
  /* 11 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony default export */ __webpack_exports__["a"] = (function (value) {
    return typeof Map !== 'undefined' && value instanceof Map;
  });
  
  /***/ }),
  /* 12 */
  /***/ (function(module, exports) {
  
  /* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
  module.exports = __webpack_amd_options__;
  
  /* WEBPACK VAR INJECTION */}.call(exports, {}))
  
  /***/ }),
  /* 13 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* unused harmony export defaultMemoize */
  /* unused harmony export createSelectorCreator */
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createSelector; });
  /* unused harmony export createStructuredSelector */
  function defaultEqualityCheck(a, b) {
    return a === b;
  }
  
  function areArgumentsShallowlyEqual(equalityCheck, prev, next) {
    if (prev === null || next === null || prev.length !== next.length) {
      return false;
    }
  
    // Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
    var length = prev.length;
    for (var i = 0; i < length; i++) {
      if (!equalityCheck(prev[i], next[i])) {
        return false;
      }
    }
  
    return true;
  }
  
  function defaultMemoize(func) {
    var equalityCheck = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultEqualityCheck;
  
    var lastArgs = null;
    var lastResult = null;
    // we reference arguments instead of spreading them for performance reasons
    return function () {
      if (!areArgumentsShallowlyEqual(equalityCheck, lastArgs, arguments)) {
        // apply arguments instead of spreading for performance.
        lastResult = func.apply(null, arguments);
      }
  
      lastArgs = arguments;
      return lastResult;
    };
  }
  
  function getDependencies(funcs) {
    var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;
  
    if (!dependencies.every(function (dep) {
      return typeof dep === 'function';
    })) {
      var dependencyTypes = dependencies.map(function (dep) {
        return typeof dep === 'undefined' ? 'undefined' : babelHelpers.typeof(dep);
      }).join(', ');
      throw new Error('Selector creators expect all input-selectors to be functions, ' + ('instead received the following types: [' + dependencyTypes + ']'));
    }
  
    return dependencies;
  }
  
  function createSelectorCreator(memoize) {
    for (var _len = arguments.length, memoizeOptions = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      memoizeOptions[_key - 1] = arguments[_key];
    }
  
    return function () {
      for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        funcs[_key2] = arguments[_key2];
      }
  
      var recomputations = 0;
      var resultFunc = funcs.pop();
      var dependencies = getDependencies(funcs);
  
      var memoizedResultFunc = memoize.apply(undefined, [function () {
        recomputations++;
        // apply arguments instead of spreading for performance.
        return resultFunc.apply(null, arguments);
      }].concat(memoizeOptions));
  
      // If a selector is called with the exact same arguments we don't need to traverse our dependencies again.
      var selector = memoize(function () {
        var params = [];
        var length = dependencies.length;
  
        for (var i = 0; i < length; i++) {
          // apply arguments instead of spreading and mutate a local list of params for performance.
          params.push(dependencies[i].apply(null, arguments));
        }
  
        // apply arguments instead of spreading for performance.
        return memoizedResultFunc.apply(null, params);
      });
  
      selector.resultFunc = resultFunc;
      selector.dependencies = dependencies;
      selector.recomputations = function () {
        return recomputations;
      };
      selector.resetRecomputations = function () {
        return recomputations = 0;
      };
      return selector;
    };
  }
  
  var createSelector = createSelectorCreator(defaultMemoize);
  
  function createStructuredSelector(selectors) {
    var selectorCreator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : createSelector;
  
    if ((typeof selectors === 'undefined' ? 'undefined' : babelHelpers.typeof(selectors)) !== 'object') {
      throw new Error('createStructuredSelector expects first argument to be an object ' + ('where each property is a selector, instead received a ' + (typeof selectors === 'undefined' ? 'undefined' : babelHelpers.typeof(selectors))));
    }
    var objectKeys = Object.keys(selectors);
    return selectorCreator(objectKeys.map(function (key) {
      return selectors[key];
    }), function () {
      for (var _len3 = arguments.length, values = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        values[_key3] = arguments[_key3];
      }
  
      return values.reduce(function (composition, value, index) {
        composition[objectKeys[index]] = value;
        return composition;
      }, {});
    });
  }
  
  /***/ }),
  /* 14 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (immutable) */ __webpack_exports__["a"] = warning;
  /**
   * Prints a warning in the console if it exists.
   *
   * @param {String} message The warning message.
   * @returns {void}
   */
  function warning(message) {
    /* eslint-disable no-console */
    if (typeof console !== 'undefined' && typeof console.error === 'function') {
      console.error(message);
    }
    /* eslint-enable no-console */
    try {
      // This error was thrown as a convenience so that if you enable
      // "break on all exceptions" in your console,
      // it would pause the execution at this line.
      throw new Error(message);
      /* eslint-disable no-empty */
    } catch (e) {}
    /* eslint-enable no-empty */
  }
  
  /***/ }),
  /* 15 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(28);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combineReducers__ = __webpack_require__(74);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__ = __webpack_require__(75);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__ = __webpack_require__(76);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compose__ = __webpack_require__(31);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_warning__ = __webpack_require__(30);
  /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__createStore__["b"]; });
  /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__combineReducers__["a"]; });
  /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__["a"]; });
  /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__["a"]; });
  /* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__compose__["a"]; });
  
  
  
  
  
  
  
  /*
  * This is a dummy function to check if the function name has been altered by minification.
  * If the function has been minified and NODE_ENV !== 'production', warn the user.
  */
  function isCrushed() {}
  
  if ("development" !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
    Object(__WEBPACK_IMPORTED_MODULE_5__utils_warning__["a" /* default */])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
  }
  
  
  
  /***/ }),
  /* 16 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(63);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__(68);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(70);
  
  
  
  
  /** `Object#toString` result references. */
  var objectTag = '[object Object]';
  
  /** Used for built-in method references. */
  var funcProto = Function.prototype,
      objectProto = Object.prototype;
  
  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;
  
  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;
  
  /** Used to infer the `Object` constructor. */
  var objectCtorString = funcToString.call(Object);
  
  /**
   * Checks if `value` is a plain object, that is, an object created by the
   * `Object` constructor or one with a `[[Prototype]]` of `null`.
   *
   * @static
   * @memberOf _
   * @since 0.8.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * _.isPlainObject(new Foo);
   * // => false
   *
   * _.isPlainObject([1, 2, 3]);
   * // => false
   *
   * _.isPlainObject({ 'x': 0, 'y': 0 });
   * // => true
   *
   * _.isPlainObject(Object.create(null));
   * // => true
   */
  function isPlainObject(value) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__["a" /* default */])(value) || Object(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value) != objectTag) {
      return false;
    }
    var proto = Object(__WEBPACK_IMPORTED_MODULE_1__getPrototype_js__["a" /* default */])(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
  }
  
  /* harmony default export */ __webpack_exports__["a"] = (isPlainObject);
  
  /***/ }),
  /* 17 */
  /***/ (function(module, exports) {
  
  var g;
  
  // This works in non-strict mode
  g = function () {
    return this;
  }();
  
  try {
    // This works if eval is allowed (see CSP)
    g = g || Function("return this")() || (1, eval)("this");
  } catch (e) {
    // This works if the window reference is available
    if ((typeof window === "undefined" ? "undefined" : babelHelpers.typeof(window)) === "object") g = window;
  }
  
  // g can still be undefined, but nothing to do about it...
  // We return undefined, instead of nothing here, so it's
  // easier to handle this case. if(!global) { ...}
  
  module.exports = g;
  
  /***/ }),
  /* 18 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (immutable) */ __webpack_exports__["a"] = createAction;
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_invariant__ = __webpack_require__(5);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_invariant__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_isFunction__ = __webpack_require__(10);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_identity__ = __webpack_require__(19);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_isNull__ = __webpack_require__(98);
  
  
  
  
  function createAction(type, payloadCreator, metaCreator) {
    if (payloadCreator === void 0) {
      payloadCreator = __WEBPACK_IMPORTED_MODULE_2__utils_identity__["a" /* default */];
    }
  
    __WEBPACK_IMPORTED_MODULE_0_invariant___default()(Object(__WEBPACK_IMPORTED_MODULE_1__utils_isFunction__["a" /* default */])(payloadCreator) || Object(__WEBPACK_IMPORTED_MODULE_3__utils_isNull__["a" /* default */])(payloadCreator), 'Expected payloadCreator to be a function, undefined or null');
    var finalPayloadCreator = Object(__WEBPACK_IMPORTED_MODULE_3__utils_isNull__["a" /* default */])(payloadCreator) || payloadCreator === __WEBPACK_IMPORTED_MODULE_2__utils_identity__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_2__utils_identity__["a" /* default */] : function (head) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
  
      return head instanceof Error ? head : payloadCreator.apply(void 0, [head].concat(args));
    };
    var hasMeta = Object(__WEBPACK_IMPORTED_MODULE_1__utils_isFunction__["a" /* default */])(metaCreator);
    var typeString = type.toString();
  
    var actionCreator = function actionCreator() {
      var payload = finalPayloadCreator.apply(void 0, arguments);
      var action = {
        type: type
      };
  
      if (payload instanceof Error) {
        action.error = true;
      }
  
      if (payload !== undefined) {
        action.payload = payload;
      }
  
      if (hasMeta) {
        action.meta = metaCreator.apply(void 0, arguments);
      }
  
      return action;
    };
  
    actionCreator.toString = function () {
      return typeString;
    };
  
    return actionCreator;
  }
  
  /***/ }),
  /* 19 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony default export */ __webpack_exports__["a"] = (function (value) {
    return value;
  });
  
  /***/ }),
  /* 20 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (immutable) */ __webpack_exports__["a"] = ownKeys;
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isMap__ = __webpack_require__(11);
  
  function ownKeys(object) {
    if (Object(__WEBPACK_IMPORTED_MODULE_0__isMap__["a" /* default */])(object)) {
      // We are using loose transforms in babel. Here we are trying to convert an
      // interable to an array. Loose mode expects everything to already be an
      // array. The problem is that our eslint rules encourage us to prefer
      // spread over Array.from.
      //
      // Instead of disabling loose mode we simply disable the warning.
      // eslint-disable-next-line unicorn/prefer-spread
      return Array.from(object.keys());
    }
  
    if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
      return Reflect.ownKeys(object);
    }
  
    var keys = Object.getOwnPropertyNames(object);
  
    if (typeof Object.getOwnPropertySymbols === 'function') {
      keys = keys.concat(Object.getOwnPropertySymbols(object));
    }
  
    return keys;
  }
  
  /***/ }),
  /* 21 */
  /***/ (function(module, exports, __webpack_require__) {
  
  /**
   * Root reference for iframes.
   */
  
  var root;
  if (typeof window !== 'undefined') {
    // Browser window
    root = window;
  } else if (typeof self !== 'undefined') {
    // Web Worker
    root = self;
  } else {
    // Other environments
    console.warn("Using browser-only version of superagent in non-browser environment");
    root = this;
  }
  
  var Emitter = __webpack_require__(119);
  var RequestBase = __webpack_require__(120);
  var isObject = __webpack_require__(45);
  var ResponseBase = __webpack_require__(121);
  var Agent = __webpack_require__(123);
  
  /**
   * Noop.
   */
  
  function noop() {};
  
  /**
   * Expose `request`.
   */
  
  var request = exports = module.exports = function (method, url) {
    // callback
    if ('function' == typeof url) {
      return new exports.Request('GET', method).end(url);
    }
  
    // url first
    if (1 == arguments.length) {
      return new exports.Request('GET', method);
    }
  
    return new exports.Request(method, url);
  };
  
  exports.Request = Request;
  
  /**
   * Determine XHR.
   */
  
  request.getXHR = function () {
    if (root.XMLHttpRequest && (!root.location || 'file:' != root.location.protocol || !root.ActiveXObject)) {
      return new XMLHttpRequest();
    } else {
      try {
        return new ActiveXObject('Microsoft.XMLHTTP');
      } catch (e) {}
      try {
        return new ActiveXObject('Msxml2.XMLHTTP.6.0');
      } catch (e) {}
      try {
        return new ActiveXObject('Msxml2.XMLHTTP.3.0');
      } catch (e) {}
      try {
        return new ActiveXObject('Msxml2.XMLHTTP');
      } catch (e) {}
    }
    throw Error("Browser-only version of superagent could not find XHR");
  };
  
  /**
   * Removes leading and trailing whitespace, added to support IE.
   *
   * @param {String} s
   * @return {String}
   * @api private
   */
  
  var trim = ''.trim ? function (s) {
    return s.trim();
  } : function (s) {
    return s.replace(/(^\s*|\s*$)/g, '');
  };
  
  /**
   * Serialize the given `obj`.
   *
   * @param {Object} obj
   * @return {String}
   * @api private
   */
  
  function serialize(obj) {
    if (!isObject(obj)) return obj;
    var pairs = [];
    for (var key in obj) {
      pushEncodedKeyValuePair(pairs, key, obj[key]);
    }
    return pairs.join('&');
  }
  
  /**
   * Helps 'serialize' with serializing arrays.
   * Mutates the pairs array.
   *
   * @param {Array} pairs
   * @param {String} key
   * @param {Mixed} val
   */
  
  function pushEncodedKeyValuePair(pairs, key, val) {
    if (val != null) {
      if (Array.isArray(val)) {
        val.forEach(function (v) {
          pushEncodedKeyValuePair(pairs, key, v);
        });
      } else if (isObject(val)) {
        for (var subkey in val) {
          pushEncodedKeyValuePair(pairs, key + '[' + subkey + ']', val[subkey]);
        }
      } else {
        pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(val));
      }
    } else if (val === null) {
      pairs.push(encodeURIComponent(key));
    }
  }
  
  /**
   * Expose serialization method.
   */
  
  request.serializeObject = serialize;
  
  /**
    * Parse the given x-www-form-urlencoded `str`.
    *
    * @param {String} str
    * @return {Object}
    * @api private
    */
  
  function parseString(str) {
    var obj = {};
    var pairs = str.split('&');
    var pair;
    var pos;
  
    for (var i = 0, len = pairs.length; i < len; ++i) {
      pair = pairs[i];
      pos = pair.indexOf('=');
      if (pos == -1) {
        obj[decodeURIComponent(pair)] = '';
      } else {
        obj[decodeURIComponent(pair.slice(0, pos))] = decodeURIComponent(pair.slice(pos + 1));
      }
    }
  
    return obj;
  }
  
  /**
   * Expose parser.
   */
  
  request.parseString = parseString;
  
  /**
   * Default MIME type map.
   *
   *     superagent.types.xml = 'application/xml';
   *
   */
  
  request.types = {
    html: 'text/html',
    json: 'application/json',
    xml: 'text/xml',
    urlencoded: 'application/x-www-form-urlencoded',
    'form': 'application/x-www-form-urlencoded',
    'form-data': 'application/x-www-form-urlencoded'
  };
  
  /**
   * Default serialization map.
   *
   *     superagent.serialize['application/xml'] = function(obj){
   *       return 'generated xml here';
   *     };
   *
   */
  
  request.serialize = {
    'application/x-www-form-urlencoded': serialize,
    'application/json': JSON.stringify
  };
  
  /**
    * Default parsers.
    *
    *     superagent.parse['application/xml'] = function(str){
    *       return { object parsed from str };
    *     };
    *
    */
  
  request.parse = {
    'application/x-www-form-urlencoded': parseString,
    'application/json': JSON.parse
  };
  
  /**
   * Parse the given header `str` into
   * an object containing the mapped fields.
   *
   * @param {String} str
   * @return {Object}
   * @api private
   */
  
  function parseHeader(str) {
    var lines = str.split(/\r?\n/);
    var fields = {};
    var index;
    var line;
    var field;
    var val;
  
    for (var i = 0, len = lines.length; i < len; ++i) {
      line = lines[i];
      index = line.indexOf(':');
      if (index === -1) {
        // could be empty line, just skip it
        continue;
      }
      field = line.slice(0, index).toLowerCase();
      val = trim(line.slice(index + 1));
      fields[field] = val;
    }
  
    return fields;
  }
  
  /**
   * Check if `mime` is json or has +json structured syntax suffix.
   *
   * @param {String} mime
   * @return {Boolean}
   * @api private
   */
  
  function isJSON(mime) {
    // should match /json or +json
    // but not /json-seq
    return (/[\/+]json($|[^-\w])/.test(mime)
    );
  }
  
  /**
   * Initialize a new `Response` with the given `xhr`.
   *
   *  - set flags (.ok, .error, etc)
   *  - parse header
   *
   * Examples:
   *
   *  Aliasing `superagent` as `request` is nice:
   *
   *      request = superagent;
   *
   *  We can use the promise-like API, or pass callbacks:
   *
   *      request.get('/').end(function(res){});
   *      request.get('/', function(res){});
   *
   *  Sending data can be chained:
   *
   *      request
   *        .post('/user')
   *        .send({ name: 'tj' })
   *        .end(function(res){});
   *
   *  Or passed to `.send()`:
   *
   *      request
   *        .post('/user')
   *        .send({ name: 'tj' }, function(res){});
   *
   *  Or passed to `.post()`:
   *
   *      request
   *        .post('/user', { name: 'tj' })
   *        .end(function(res){});
   *
   * Or further reduced to a single call for simple cases:
   *
   *      request
   *        .post('/user', { name: 'tj' }, function(res){});
   *
   * @param {XMLHTTPRequest} xhr
   * @param {Object} options
   * @api private
   */
  
  function Response(req) {
    this.req = req;
    this.xhr = this.req.xhr;
    // responseText is accessible only if responseType is '' or 'text' and on older browsers
    this.text = this.req.method != 'HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text') || typeof this.xhr.responseType === 'undefined' ? this.xhr.responseText : null;
    this.statusText = this.req.xhr.statusText;
    var status = this.xhr.status;
    // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request
    if (status === 1223) {
      status = 204;
    }
    this._setStatusProperties(status);
    this.header = this.headers = parseHeader(this.xhr.getAllResponseHeaders());
    // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
    // getResponseHeader still works. so we get content-type even if getting
    // other headers fails.
    this.header['content-type'] = this.xhr.getResponseHeader('content-type');
    this._setHeaderProperties(this.header);
  
    if (null === this.text && req._responseType) {
      this.body = this.xhr.response;
    } else {
      this.body = this.req.method != 'HEAD' ? this._parseBody(this.text ? this.text : this.xhr.response) : null;
    }
  }
  
  ResponseBase(Response.prototype);
  
  /**
   * Parse the given body `str`.
   *
   * Used for auto-parsing of bodies. Parsers
   * are defined on the `superagent.parse` object.
   *
   * @param {String} str
   * @return {Mixed}
   * @api private
   */
  
  Response.prototype._parseBody = function (str) {
    var parse = request.parse[this.type];
    if (this.req._parser) {
      return this.req._parser(this, str);
    }
    if (!parse && isJSON(this.type)) {
      parse = request.parse['application/json'];
    }
    return parse && str && (str.length || str instanceof Object) ? parse(str) : null;
  };
  
  /**
   * Return an `Error` representative of this response.
   *
   * @return {Error}
   * @api public
   */
  
  Response.prototype.toError = function () {
    var req = this.req;
    var method = req.method;
    var url = req.url;
  
    var msg = 'cannot ' + method + ' ' + url + ' (' + this.status + ')';
    var err = new Error(msg);
    err.status = this.status;
    err.method = method;
    err.url = url;
  
    return err;
  };
  
  /**
   * Expose `Response`.
   */
  
  request.Response = Response;
  
  /**
   * Initialize a new `Request` with the given `method` and `url`.
   *
   * @param {String} method
   * @param {String} url
   * @api public
   */
  
  function Request(method, url) {
    var self = this;
    this._query = this._query || [];
    this.method = method;
    this.url = url;
    this.header = {}; // preserves header name case
    this._header = {}; // coerces header names to lowercase
    this.on('end', function () {
      var err = null;
      var res = null;
  
      try {
        res = new Response(self);
      } catch (e) {
        err = new Error('Parser is unable to parse the response');
        err.parse = true;
        err.original = e;
        // issue #675: return the raw response if the response parsing fails
        if (self.xhr) {
          // ie9 doesn't have 'response' property
          err.rawResponse = typeof self.xhr.responseType == 'undefined' ? self.xhr.responseText : self.xhr.response;
          // issue #876: return the http status code if the response parsing fails
          err.status = self.xhr.status ? self.xhr.status : null;
          err.statusCode = err.status; // backwards-compat only
        } else {
          err.rawResponse = null;
          err.status = null;
        }
  
        return self.callback(err);
      }
  
      self.emit('response', res);
  
      var new_err;
      try {
        if (!self._isResponseOK(res)) {
          new_err = new Error(res.statusText || 'Unsuccessful HTTP response');
        }
      } catch (custom_err) {
        new_err = custom_err; // ok() callback can throw
      }
  
      // #1000 don't catch errors from the callback to avoid double calling it
      if (new_err) {
        new_err.original = err;
        new_err.response = res;
        new_err.status = res.status;
        self.callback(new_err, res);
      } else {
        self.callback(null, res);
      }
    });
  }
  
  /**
   * Mixin `Emitter` and `RequestBase`.
   */
  
  Emitter(Request.prototype);
  RequestBase(Request.prototype);
  
  /**
   * Set Content-Type to `type`, mapping values from `request.types`.
   *
   * Examples:
   *
   *      superagent.types.xml = 'application/xml';
   *
   *      request.post('/')
   *        .type('xml')
   *        .send(xmlstring)
   *        .end(callback);
   *
   *      request.post('/')
   *        .type('application/xml')
   *        .send(xmlstring)
   *        .end(callback);
   *
   * @param {String} type
   * @return {Request} for chaining
   * @api public
   */
  
  Request.prototype.type = function (type) {
    this.set('Content-Type', request.types[type] || type);
    return this;
  };
  
  /**
   * Set Accept to `type`, mapping values from `request.types`.
   *
   * Examples:
   *
   *      superagent.types.json = 'application/json';
   *
   *      request.get('/agent')
   *        .accept('json')
   *        .end(callback);
   *
   *      request.get('/agent')
   *        .accept('application/json')
   *        .end(callback);
   *
   * @param {String} accept
   * @return {Request} for chaining
   * @api public
   */
  
  Request.prototype.accept = function (type) {
    this.set('Accept', request.types[type] || type);
    return this;
  };
  
  /**
   * Set Authorization field value with `user` and `pass`.
   *
   * @param {String} user
   * @param {String} [pass] optional in case of using 'bearer' as type
   * @param {Object} options with 'type' property 'auto', 'basic' or 'bearer' (default 'basic')
   * @return {Request} for chaining
   * @api public
   */
  
  Request.prototype.auth = function (user, pass, options) {
    if (1 === arguments.length) pass = '';
    if ((typeof pass === 'undefined' ? 'undefined' : babelHelpers.typeof(pass)) === 'object' && pass !== null) {
      // pass is optional and can be replaced with options
      options = pass;
      pass = '';
    }
    if (!options) {
      options = {
        type: 'function' === typeof btoa ? 'basic' : 'auto'
      };
    }
  
    var encoder = function encoder(string) {
      if ('function' === typeof btoa) {
        return btoa(string);
      }
      throw new Error('Cannot use basic auth, btoa is not a function');
    };
  
    return this._auth(user, pass, options, encoder);
  };
  
  /**
   * Add query-string `val`.
   *
   * Examples:
   *
   *   request.get('/shoes')
   *     .query('size=10')
   *     .query({ color: 'blue' })
   *
   * @param {Object|String} val
   * @return {Request} for chaining
   * @api public
   */
  
  Request.prototype.query = function (val) {
    if ('string' != typeof val) val = serialize(val);
    if (val) this._query.push(val);
    return this;
  };
  
  /**
   * Queue the given `file` as an attachment to the specified `field`,
   * with optional `options` (or filename).
   *
   * ``` js
   * request.post('/upload')
   *   .attach('content', new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
   *   .end(callback);
   * ```
   *
   * @param {String} field
   * @param {Blob|File} file
   * @param {String|Object} options
   * @return {Request} for chaining
   * @api public
   */
  
  Request.prototype.attach = function (field, file, options) {
    if (file) {
      if (this._data) {
        throw Error("superagent can't mix .send() and .attach()");
      }
  
      this._getFormData().append(field, file, options || file.name);
    }
    return this;
  };
  
  Request.prototype._getFormData = function () {
    if (!this._formData) {
      this._formData = new root.FormData();
    }
    return this._formData;
  };
  
  /**
   * Invoke the callback with `err` and `res`
   * and handle arity check.
   *
   * @param {Error} err
   * @param {Response} res
   * @api private
   */
  
  Request.prototype.callback = function (err, res) {
    if (this._shouldRetry(err, res)) {
      return this._retry();
    }
  
    var fn = this._callback;
    this.clearTimeout();
  
    if (err) {
      if (this._maxRetries) err.retries = this._retries - 1;
      this.emit('error', err);
    }
  
    fn(err, res);
  };
  
  /**
   * Invoke callback with x-domain error.
   *
   * @api private
   */
  
  Request.prototype.crossDomainError = function () {
    var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
    err.crossDomain = true;
  
    err.status = this.status;
    err.method = this.method;
    err.url = this.url;
  
    this.callback(err);
  };
  
  // This only warns, because the request is still likely to work
  Request.prototype.buffer = Request.prototype.ca = Request.prototype.agent = function () {
    console.warn("This is not supported in browser version of superagent");
    return this;
  };
  
  // This throws, because it can't send/receive data as expected
  Request.prototype.pipe = Request.prototype.write = function () {
    throw Error("Streaming is not supported in browser version of superagent");
  };
  
  /**
   * Check if `obj` is a host object,
   * we don't want to serialize these :)
   *
   * @param {Object} obj
   * @return {Boolean}
   * @api private
   */
  Request.prototype._isHost = function _isHost(obj) {
    // Native objects stringify to [object File], [object Blob], [object FormData], etc.
    return obj && 'object' === (typeof obj === 'undefined' ? 'undefined' : babelHelpers.typeof(obj)) && !Array.isArray(obj) && Object.prototype.toString.call(obj) !== '[object Object]';
  };
  
  /**
   * Initiate request, invoking callback `fn(res)`
   * with an instanceof `Response`.
   *
   * @param {Function} fn
   * @return {Request} for chaining
   * @api public
   */
  
  Request.prototype.end = function (fn) {
    if (this._endCalled) {
      console.warn("Warning: .end() was called twice. This is not supported in superagent");
    }
    this._endCalled = true;
  
    // store callback
    this._callback = fn || noop;
  
    // querystring
    this._finalizeQueryString();
  
    return this._end();
  };
  
  Request.prototype._end = function () {
    var self = this;
    var xhr = this.xhr = request.getXHR();
    var data = this._formData || this._data;
  
    this._setTimeouts();
  
    // state change
    xhr.onreadystatechange = function () {
      var readyState = xhr.readyState;
      if (readyState >= 2 && self._responseTimeoutTimer) {
        clearTimeout(self._responseTimeoutTimer);
      }
      if (4 != readyState) {
        return;
      }
  
      // In IE9, reads to any property (e.g. status) off of an aborted XHR will
      // result in the error "Could not complete the operation due to error c00c023f"
      var status;
      try {
        status = xhr.status;
      } catch (e) {
        status = 0;
      }
  
      if (!status) {
        if (self.timedout || self._aborted) return;
        return self.crossDomainError();
      }
      self.emit('end');
    };
  
    // progress
    var handleProgress = function handleProgress(direction, e) {
      if (e.total > 0) {
        e.percent = e.loaded / e.total * 100;
      }
      e.direction = direction;
      self.emit('progress', e);
    };
    if (this.hasListeners('progress')) {
      try {
        xhr.onprogress = handleProgress.bind(null, 'download');
        if (xhr.upload) {
          xhr.upload.onprogress = handleProgress.bind(null, 'upload');
        }
      } catch (e) {
        // Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
        // Reported here:
        // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
      }
    }
  
    // initiate request
    try {
      if (this.username && this.password) {
        xhr.open(this.method, this.url, true, this.username, this.password);
      } else {
        xhr.open(this.method, this.url, true);
      }
    } catch (err) {
      // see #1149
      return this.callback(err);
    }
  
    // CORS
    if (this._withCredentials) xhr.withCredentials = true;
  
    // body
    if (!this._formData && 'GET' != this.method && 'HEAD' != this.method && 'string' != typeof data && !this._isHost(data)) {
      // serialize stuff
      var contentType = this._header['content-type'];
      var serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];
      if (!serialize && isJSON(contentType)) {
        serialize = request.serialize['application/json'];
      }
      if (serialize) data = serialize(data);
    }
  
    // set header fields
    for (var field in this.header) {
      if (null == this.header[field]) continue;
  
      if (this.header.hasOwnProperty(field)) xhr.setRequestHeader(field, this.header[field]);
    }
  
    if (this._responseType) {
      xhr.responseType = this._responseType;
    }
  
    // send stuff
    this.emit('request', this);
  
    // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
    // We need null here if data is undefined
    xhr.send(typeof data !== 'undefined' ? data : null);
    return this;
  };
  
  request.agent = function () {
    return new Agent();
  };
  
  ["GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE"].forEach(function (method) {
    Agent.prototype[method.toLowerCase()] = function (url, fn) {
      var req = new request.Request(method, url);
      this._setDefaults(req);
      if (fn) {
        req.end(fn);
      }
      return req;
    };
  });
  
  Agent.prototype.del = Agent.prototype['delete'];
  
  /**
   * GET `url` with optional callback `fn(res)`.
   *
   * @param {String} url
   * @param {Mixed|Function} [data] or fn
   * @param {Function} [fn]
   * @return {Request}
   * @api public
   */
  
  request.get = function (url, data, fn) {
    var req = request('GET', url);
    if ('function' == typeof data) fn = data, data = null;
    if (data) req.query(data);
    if (fn) req.end(fn);
    return req;
  };
  
  /**
   * HEAD `url` with optional callback `fn(res)`.
   *
   * @param {String} url
   * @param {Mixed|Function} [data] or fn
   * @param {Function} [fn]
   * @return {Request}
   * @api public
   */
  
  request.head = function (url, data, fn) {
    var req = request('HEAD', url);
    if ('function' == typeof data) fn = data, data = null;
    if (data) req.query(data);
    if (fn) req.end(fn);
    return req;
  };
  
  /**
   * OPTIONS query to `url` with optional callback `fn(res)`.
   *
   * @param {String} url
   * @param {Mixed|Function} [data] or fn
   * @param {Function} [fn]
   * @return {Request}
   * @api public
   */
  
  request.options = function (url, data, fn) {
    var req = request('OPTIONS', url);
    if ('function' == typeof data) fn = data, data = null;
    if (data) req.send(data);
    if (fn) req.end(fn);
    return req;
  };
  
  /**
   * DELETE `url` with optional `data` and callback `fn(res)`.
   *
   * @param {String} url
   * @param {Mixed} [data]
   * @param {Function} [fn]
   * @return {Request}
   * @api public
   */
  
  function del(url, data, fn) {
    var req = request('DELETE', url);
    if ('function' == typeof data) fn = data, data = null;
    if (data) req.send(data);
    if (fn) req.end(fn);
    return req;
  }
  
  request['del'] = del;
  request['delete'] = del;
  
  /**
   * PATCH `url` with optional `data` and callback `fn(res)`.
   *
   * @param {String} url
   * @param {Mixed} [data]
   * @param {Function} [fn]
   * @return {Request}
   * @api public
   */
  
  request.patch = function (url, data, fn) {
    var req = request('PATCH', url);
    if ('function' == typeof data) fn = data, data = null;
    if (data) req.send(data);
    if (fn) req.end(fn);
    return req;
  };
  
  /**
   * POST `url` with optional `data` and callback `fn(res)`.
   *
   * @param {String} url
   * @param {Mixed} [data]
   * @param {Function} [fn]
   * @return {Request}
   * @api public
   */
  
  request.post = function (url, data, fn) {
    var req = request('POST', url);
    if ('function' == typeof data) fn = data, data = null;
    if (data) req.send(data);
    if (fn) req.end(fn);
    return req;
  };
  
  /**
   * PUT `url` with optional `data` and callback `fn(res)`.
   *
   * @param {String} url
   * @param {Mixed|Function} [data] or fn
   * @param {Function} [fn]
   * @return {Request}
   * @api public
   */
  
  request.put = function (url, data, fn) {
    var req = request('PUT', url);
    if ('function' == typeof data) fn = data, data = null;
    if (data) req.send(data);
    if (fn) req.end(fn);
    return req;
  };
  
  /***/ }),
  /* 22 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.canUseDOM = undefined;
  
  var _exenv = __webpack_require__(132);
  
  var _exenv2 = _interopRequireDefault(_exenv);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  var EE = _exenv2.default;
  
  var SafeHTMLElement = EE.canUseDOM ? window.HTMLElement : {};
  
  var canUseDOM = exports.canUseDOM = EE.canUseDOM;
  
  exports.default = SafeHTMLElement;
  
  /***/ }),
  /* 23 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getOrder; });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(13);
  
  
  var getOrder = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["a" /* createSelector */])(function (state) {
    return state.order;
  }, function (order) {
    return order;
  });
  
  /***/ }),
  /* 24 */
  /***/ (function(module, exports) {
  
  module.exports = ReactDOM;
  
  /***/ }),
  /* 25 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  
  
  
  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  
  module.exports = ReactPropTypesSecret;
  
  /***/ }),
  /* 26 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return subscriptionShape; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return storeShape; });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(3);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
  
  
  var subscriptionShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
    trySubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
    tryUnsubscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
    notifyNestedSubs: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
    isSubscribed: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
  });
  
  var storeShape = __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
    subscribe: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
    dispatch: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired,
    getState: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
  });
  
  /***/ }),
  /* 27 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (immutable) */ __webpack_exports__["a"] = connectAdvanced;
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__ = __webpack_require__(58);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(5);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__ = __webpack_require__(59);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__ = __webpack_require__(26);
  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : babelHelpers.typeof(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : babelHelpers.typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  function _objectWithoutProperties(obj, keys) {
    var target = {};for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
    }return target;
  }
  
  
  
  
  
  
  
  
  var hotReloadingVersion = 0;
  var dummyState = {};
  function noop() {}
  function makeSelectorStateful(sourceSelector, store) {
    // wrap the selector in an object that tracks its results between runs.
    var selector = {
      run: function runComponentSelector(props) {
        try {
          var nextProps = sourceSelector(store.getState(), props);
          if (nextProps !== selector.props || selector.error) {
            selector.shouldComponentUpdate = true;
            selector.props = nextProps;
            selector.error = null;
          }
        } catch (error) {
          selector.shouldComponentUpdate = true;
          selector.error = error;
        }
      }
    };
  
    return selector;
  }
  
  function connectAdvanced(
  /*
    selectorFactory is a func that is responsible for returning the selector function used to
    compute new props from state, props, and dispatch. For example:
       export default connectAdvanced((dispatch, options) => (state, props) => ({
        thing: state.things[props.thingId],
        saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
      }))(YourComponent)
     Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
    outside of their selector as an optimization. Options passed to connectAdvanced are passed to
    the selectorFactory, along with displayName and WrappedComponent, as the second argument.
     Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
    props. Do not use connectAdvanced directly without memoizing results between calls to your
    selector, otherwise the Connect component will re-render on every state or props change.
  */
  selectorFactory) {
    var _contextTypes, _childContextTypes;
  
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$getDisplayName = _ref.getDisplayName,
        getDisplayName = _ref$getDisplayName === undefined ? function (name) {
      return 'ConnectAdvanced(' + name + ')';
    } : _ref$getDisplayName,
        _ref$methodName = _ref.methodName,
        methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
        _ref$renderCountProp = _ref.renderCountProp,
        renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
        _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
        shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
        _ref$storeKey = _ref.storeKey,
        storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
        _ref$withRef = _ref.withRef,
        withRef = _ref$withRef === undefined ? false : _ref$withRef,
        connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);
  
    var subscriptionKey = storeKey + 'Subscription';
    var version = hotReloadingVersion++;
  
    var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["a" /* storeShape */], _contextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _contextTypes);
    var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_4__utils_PropTypes__["b" /* subscriptionShape */], _childContextTypes);
  
    return function wrapWithConnect(WrappedComponent) {
      __WEBPACK_IMPORTED_MODULE_1_invariant___default()(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + (methodName + '. Instead received ' + JSON.stringify(WrappedComponent)));
  
      var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
  
      var displayName = getDisplayName(wrappedComponentName);
  
      var selectorFactoryOptions = _extends({}, connectOptions, {
        getDisplayName: getDisplayName,
        methodName: methodName,
        renderCountProp: renderCountProp,
        shouldHandleStateChanges: shouldHandleStateChanges,
        storeKey: storeKey,
        withRef: withRef,
        displayName: displayName,
        wrappedComponentName: wrappedComponentName,
        WrappedComponent: WrappedComponent
      });
  
      var Connect = function (_Component) {
        _inherits(Connect, _Component);
  
        function Connect(props, context) {
          _classCallCheck(this, Connect);
  
          var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
  
          _this.version = version;
          _this.state = {};
          _this.renderCount = 0;
          _this.store = props[storeKey] || context[storeKey];
          _this.propsMode = Boolean(props[storeKey]);
          _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);
  
          __WEBPACK_IMPORTED_MODULE_1_invariant___default()(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));
  
          _this.initSelector();
          _this.initSubscription();
          return _this;
        }
  
        Connect.prototype.getChildContext = function getChildContext() {
          var _ref2;
  
          // If this component received store from props, its subscription should be transparent
          // to any descendants receiving store+subscription from context; it passes along
          // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
          // Connect to control ordering of notifications to flow top-down.
          var subscription = this.propsMode ? null : this.subscription;
          return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
        };
  
        Connect.prototype.componentDidMount = function componentDidMount() {
          if (!shouldHandleStateChanges) return;
  
          // componentWillMount fires during server side rendering, but componentDidMount and
          // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
          // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
          // To handle the case where a child component may have triggered a state change by
          // dispatching an action in its componentWillMount, we have to re-run the select and maybe
          // re-render.
          this.subscription.trySubscribe();
          this.selector.run(this.props);
          if (this.selector.shouldComponentUpdate) this.forceUpdate();
        };
  
        Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
          this.selector.run(nextProps);
        };
  
        Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
          return this.selector.shouldComponentUpdate;
        };
  
        Connect.prototype.componentWillUnmount = function componentWillUnmount() {
          if (this.subscription) this.subscription.tryUnsubscribe();
          this.subscription = null;
          this.notifyNestedSubs = noop;
          this.store = null;
          this.selector.run = noop;
          this.selector.shouldComponentUpdate = false;
        };
  
        Connect.prototype.getWrappedInstance = function getWrappedInstance() {
          __WEBPACK_IMPORTED_MODULE_1_invariant___default()(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
          return this.wrappedInstance;
        };
  
        Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
          this.wrappedInstance = ref;
        };
  
        Connect.prototype.initSelector = function initSelector() {
          var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
          this.selector = makeSelectorStateful(sourceSelector, this.store);
          this.selector.run(this.props);
        };
  
        Connect.prototype.initSubscription = function initSubscription() {
          if (!shouldHandleStateChanges) return;
  
          // parentSub's source should match where store came from: props vs. context. A component
          // connected to the store via props shouldn't use subscription from context, or vice versa.
          var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
          this.subscription = new __WEBPACK_IMPORTED_MODULE_3__utils_Subscription__["a" /* default */](this.store, parentSub, this.onStateChange.bind(this));
  
          // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
          // the middle of the notification loop, where `this.subscription` will then be null. An
          // extra null check every change can be avoided by copying the method onto `this` and then
          // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
          // listeners logic is changed to not call listeners that have been unsubscribed in the
          // middle of the notification loop.
          this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
        };
  
        Connect.prototype.onStateChange = function onStateChange() {
          this.selector.run(this.props);
  
          if (!this.selector.shouldComponentUpdate) {
            this.notifyNestedSubs();
          } else {
            this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
            this.setState(dummyState);
          }
        };
  
        Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
          // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
          // needs to notify nested subs. Once called, it unimplements itself until further state
          // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
          // a boolean check every time avoids an extra method call most of the time, resulting
          // in some perf boost.
          this.componentDidUpdate = undefined;
          this.notifyNestedSubs();
        };
  
        Connect.prototype.isSubscribed = function isSubscribed() {
          return Boolean(this.subscription) && this.subscription.isSubscribed();
        };
  
        Connect.prototype.addExtraProps = function addExtraProps(props) {
          if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
          // make a shallow copy so that fields added don't leak to the original selector.
          // this is especially important for 'ref' since that's a reference back to the component
          // instance. a singleton memoized selector would then be holding a reference to the
          // instance, preventing the instance from being garbage collected, and that would be bad
          var withExtras = _extends({}, props);
          if (withRef) withExtras.ref = this.setWrappedInstance;
          if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
          if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
          return withExtras;
        };
  
        Connect.prototype.render = function render() {
          var selector = this.selector;
          selector.shouldComponentUpdate = false;
  
          if (selector.error) {
            throw selector.error;
          } else {
            return Object(__WEBPACK_IMPORTED_MODULE_2_react__["createElement"])(WrappedComponent, this.addExtraProps(selector.props));
          }
        };
  
        return Connect;
      }(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);
  
      Connect.WrappedComponent = WrappedComponent;
      Connect.displayName = displayName;
      Connect.childContextTypes = childContextTypes;
      Connect.contextTypes = contextTypes;
      Connect.propTypes = contextTypes;
  
      if (true) {
        Connect.prototype.componentWillUpdate = function componentWillUpdate() {
          var _this2 = this;
  
          // We are hot reloading!
          if (this.version !== version) {
            this.version = version;
            this.initSelector();
  
            // If any connected descendants don't hot reload (and resubscribe in the process), their
            // listeners will be lost when we unsubscribe. Unfortunately, by copying over all
            // listeners, this does mean that the old versions of connected descendants will still be
            // notified of state changes; however, their onStateChange function is a no-op so this
            // isn't a huge deal.
            var oldListeners = [];
  
            if (this.subscription) {
              oldListeners = this.subscription.listeners.get();
              this.subscription.tryUnsubscribe();
            }
            this.initSubscription();
            if (shouldHandleStateChanges) {
              this.subscription.trySubscribe();
              oldListeners.forEach(function (listener) {
                return _this2.subscription.listeners.subscribe(listener);
              });
            }
          }
        };
      }
  
      return __WEBPACK_IMPORTED_MODULE_0_hoist_non_react_statics___default()(Connect, WrappedComponent);
    };
  }
  
  /***/ }),
  /* 28 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
  /* harmony export (immutable) */ __webpack_exports__["b"] = createStore;
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(16);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable__ = __webpack_require__(71);
  
  
  
  /**
   * These are private action types reserved by Redux.
   * For any unknown actions, you must return the current state.
   * If the current state is undefined, you must return the initial state.
   * Do not reference these action types directly in your code.
   */
  var ActionTypes = {
    INIT: '@@redux/INIT'
  
    /**
     * Creates a Redux store that holds the state tree.
     * The only way to change the data in the store is to call `dispatch()` on it.
     *
     * There should only be a single store in your app. To specify how different
     * parts of the state tree respond to actions, you may combine several reducers
     * into a single reducer function by using `combineReducers`.
     *
     * @param {Function} reducer A function that returns the next state tree, given
     * the current state tree and the action to handle.
     *
     * @param {any} [preloadedState] The initial state. You may optionally specify it
     * to hydrate the state from the server in universal apps, or to restore a
     * previously serialized user session.
     * If you use `combineReducers` to produce the root reducer function, this must be
     * an object with the same shape as `combineReducers` keys.
     *
     * @param {Function} [enhancer] The store enhancer. You may optionally specify it
     * to enhance the store with third-party capabilities such as middleware,
     * time travel, persistence, etc. The only store enhancer that ships with Redux
     * is `applyMiddleware()`.
     *
     * @returns {Store} A Redux store that lets you read the state, dispatch actions
     * and subscribe to changes.
     */
  };function createStore(reducer, preloadedState, enhancer) {
    var _ref2;
  
    if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
      enhancer = preloadedState;
      preloadedState = undefined;
    }
  
    if (typeof enhancer !== 'undefined') {
      if (typeof enhancer !== 'function') {
        throw new Error('Expected the enhancer to be a function.');
      }
  
      return enhancer(createStore)(reducer, preloadedState);
    }
  
    if (typeof reducer !== 'function') {
      throw new Error('Expected the reducer to be a function.');
    }
  
    var currentReducer = reducer;
    var currentState = preloadedState;
    var currentListeners = [];
    var nextListeners = currentListeners;
    var isDispatching = false;
  
    function ensureCanMutateNextListeners() {
      if (nextListeners === currentListeners) {
        nextListeners = currentListeners.slice();
      }
    }
  
    /**
     * Reads the state tree managed by the store.
     *
     * @returns {any} The current state tree of your application.
     */
    function getState() {
      return currentState;
    }
  
    /**
     * Adds a change listener. It will be called any time an action is dispatched,
     * and some part of the state tree may potentially have changed. You may then
     * call `getState()` to read the current state tree inside the callback.
     *
     * You may call `dispatch()` from a change listener, with the following
     * caveats:
     *
     * 1. The subscriptions are snapshotted just before every `dispatch()` call.
     * If you subscribe or unsubscribe while the listeners are being invoked, this
     * will not have any effect on the `dispatch()` that is currently in progress.
     * However, the next `dispatch()` call, whether nested or not, will use a more
     * recent snapshot of the subscription list.
     *
     * 2. The listener should not expect to see all state changes, as the state
     * might have been updated multiple times during a nested `dispatch()` before
     * the listener is called. It is, however, guaranteed that all subscribers
     * registered before the `dispatch()` started will be called with the latest
     * state by the time it exits.
     *
     * @param {Function} listener A callback to be invoked on every dispatch.
     * @returns {Function} A function to remove this change listener.
     */
    function subscribe(listener) {
      if (typeof listener !== 'function') {
        throw new Error('Expected listener to be a function.');
      }
  
      var isSubscribed = true;
  
      ensureCanMutateNextListeners();
      nextListeners.push(listener);
  
      return function unsubscribe() {
        if (!isSubscribed) {
          return;
        }
  
        isSubscribed = false;
  
        ensureCanMutateNextListeners();
        var index = nextListeners.indexOf(listener);
        nextListeners.splice(index, 1);
      };
    }
  
    /**
     * Dispatches an action. It is the only way to trigger a state change.
     *
     * The `reducer` function, used to create the store, will be called with the
     * current state tree and the given `action`. Its return value will
     * be considered the **next** state of the tree, and the change listeners
     * will be notified.
     *
     * The base implementation only supports plain object actions. If you want to
     * dispatch a Promise, an Observable, a thunk, or something else, you need to
     * wrap your store creating function into the corresponding middleware. For
     * example, see the documentation for the `redux-thunk` package. Even the
     * middleware will eventually dispatch plain object actions using this method.
     *
     * @param {Object} action A plain object representing “what changed”. It is
     * a good idea to keep actions serializable so you can record and replay user
     * sessions, or use the time travelling `redux-devtools`. An action must have
     * a `type` property which may not be `undefined`. It is a good idea to use
     * string constants for action types.
     *
     * @returns {Object} For convenience, the same action object you dispatched.
     *
     * Note that, if you use a custom middleware, it may wrap `dispatch()` to
     * return something else (for example, a Promise you can await).
     */
    function dispatch(action) {
      if (!Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(action)) {
        throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
      }
  
      if (typeof action.type === 'undefined') {
        throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
      }
  
      if (isDispatching) {
        throw new Error('Reducers may not dispatch actions.');
      }
  
      try {
        isDispatching = true;
        currentState = currentReducer(currentState, action);
      } finally {
        isDispatching = false;
      }
  
      var listeners = currentListeners = nextListeners;
      for (var i = 0; i < listeners.length; i++) {
        var listener = listeners[i];
        listener();
      }
  
      return action;
    }
  
    /**
     * Replaces the reducer currently used by the store to calculate the state.
     *
     * You might need this if your app implements code splitting and you want to
     * load some of the reducers dynamically. You might also need this if you
     * implement a hot reloading mechanism for Redux.
     *
     * @param {Function} nextReducer The reducer for the store to use instead.
     * @returns {void}
     */
    function replaceReducer(nextReducer) {
      if (typeof nextReducer !== 'function') {
        throw new Error('Expected the nextReducer to be a function.');
      }
  
      currentReducer = nextReducer;
      dispatch({ type: ActionTypes.INIT });
    }
  
    /**
     * Interoperability point for observable/reactive libraries.
     * @returns {observable} A minimal observable of state changes.
     * For more information, see the observable proposal:
     * https://github.com/tc39/proposal-observable
     */
    function observable() {
      var _ref;
  
      var outerSubscribe = subscribe;
      return _ref = {
        /**
         * The minimal observable subscription method.
         * @param {Object} observer Any object that can be used as an observer.
         * The observer object should have a `next` method.
         * @returns {subscription} An object with an `unsubscribe` method that can
         * be used to unsubscribe the observable from the store, and prevent further
         * emission of values from the observable.
         */
        subscribe: function subscribe(observer) {
          if ((typeof observer === 'undefined' ? 'undefined' : babelHelpers.typeof(observer)) !== 'object') {
            throw new TypeError('Expected the observer to be an object.');
          }
  
          function observeState() {
            if (observer.next) {
              observer.next(getState());
            }
          }
  
          observeState();
          var unsubscribe = outerSubscribe(observeState);
          return { unsubscribe: unsubscribe };
        }
      }, _ref[__WEBPACK_IMPORTED_MODULE_1_symbol_observable__["a" /* default */]] = function () {
        return this;
      }, _ref;
    }
  
    // When a store is created, an "INIT" action is dispatched so that every
    // reducer returns their initial state. This effectively populates
    // the initial state tree.
    dispatch({ type: ActionTypes.INIT });
  
    return _ref2 = {
      dispatch: dispatch,
      subscribe: subscribe,
      getState: getState,
      replaceReducer: replaceReducer
    }, _ref2[__WEBPACK_IMPORTED_MODULE_1_symbol_observable__["a" /* default */]] = observable, _ref2;
  }
  
  /***/ }),
  /* 29 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(64);
  
  
  /** Built-in value references. */
  var _Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;
  
  /* harmony default export */ __webpack_exports__["a"] = (_Symbol);
  
  /***/ }),
  /* 30 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (immutable) */ __webpack_exports__["a"] = warning;
  /**
   * Prints a warning in the console if it exists.
   *
   * @param {String} message The warning message.
   * @returns {void}
   */
  function warning(message) {
    /* eslint-disable no-console */
    if (typeof console !== 'undefined' && typeof console.error === 'function') {
      console.error(message);
    }
    /* eslint-enable no-console */
    try {
      // This error was thrown as a convenience so that if you enable
      // "break on all exceptions" in your console,
      // it would pause the execution at this line.
      throw new Error(message);
      /* eslint-disable no-empty */
    } catch (e) {}
    /* eslint-enable no-empty */
  }
  
  /***/ }),
  /* 31 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (immutable) */ __webpack_exports__["a"] = compose;
  /**
   * Composes single-argument functions from right to left. The rightmost
   * function can take multiple arguments as it provides the signature for
   * the resulting composite function.
   *
   * @param {...Function} funcs The functions to compose.
   * @returns {Function} A function obtained by composing the argument functions
   * from right to left. For example, compose(f, g, h) is identical to doing
   * (...args) => f(g(h(...args))).
   */
  
  function compose() {
    for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
      funcs[_key] = arguments[_key];
    }
  
    if (funcs.length === 0) {
      return function (arg) {
        return arg;
      };
    }
  
    if (funcs.length === 1) {
      return funcs[0];
    }
  
    return funcs.reduce(function (a, b) {
      return function () {
        return a(b.apply(undefined, arguments));
      };
    });
  }
  
  /***/ }),
  /* 32 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (immutable) */ __webpack_exports__["a"] = wrapMapToPropsConstant;
  /* unused harmony export getDependsOnOwnProps */
  /* harmony export (immutable) */ __webpack_exports__["b"] = wrapMapToPropsFunc;
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(33);
  
  
  function wrapMapToPropsConstant(getConstant) {
    return function initConstantSelector(dispatch, options) {
      var constant = getConstant(dispatch, options);
  
      function constantSelector() {
        return constant;
      }
      constantSelector.dependsOnOwnProps = false;
      return constantSelector;
    };
  }
  
  // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
  // to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
  // whether mapToProps needs to be invoked when props have changed.
  // 
  // A length of one signals that mapToProps does not depend on props from the parent component.
  // A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
  // therefore not reporting its length accurately..
  function getDependsOnOwnProps(mapToProps) {
    return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
  }
  
  // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
  // this function wraps mapToProps in a proxy function which does several things:
  // 
  //  * Detects whether the mapToProps function being called depends on props, which
  //    is used by selectorFactory to decide if it should reinvoke on props changes.
  //    
  //  * On first call, handles mapToProps if returns another function, and treats that
  //    new function as the true mapToProps for subsequent calls.
  //    
  //  * On first call, verifies the first result is a plain object, in order to warn
  //    the developer that their mapToProps function is not returning a valid result.
  //    
  function wrapMapToPropsFunc(mapToProps, methodName) {
    return function initProxySelector(dispatch, _ref) {
      var displayName = _ref.displayName;
  
      var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
        return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
      };
  
      // allow detectFactoryAndVerify to get ownProps
      proxy.dependsOnOwnProps = true;
  
      proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
        proxy.mapToProps = mapToProps;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
        var props = proxy(stateOrDispatch, ownProps);
  
        if (typeof props === 'function') {
          proxy.mapToProps = props;
          proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
          props = proxy(stateOrDispatch, ownProps);
        }
  
        if (true) Object(__WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__["a" /* default */])(props, displayName, methodName);
  
        return props;
      };
  
      return proxy;
    };
  }
  
  /***/ }),
  /* 33 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (immutable) */ __webpack_exports__["a"] = verifyPlainObject;
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(16);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__warning__ = __webpack_require__(14);
  
  
  
  function verifyPlainObject(value, displayName, methodName) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(value)) {
      Object(__WEBPACK_IMPORTED_MODULE_1__warning__["a" /* default */])(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
    }
  }
  
  /***/ }),
  /* 34 */
  /***/ (function(module, exports, __webpack_require__) {
  
  var _Symbol = __webpack_require__(35),
      getRawTag = __webpack_require__(88),
      objectToString = __webpack_require__(89);
  
  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';
  
  /** Built-in value references. */
  var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
  
  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
      if (value == null) {
          return value === undefined ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }
  
  module.exports = baseGetTag;
  
  /***/ }),
  /* 35 */
  /***/ (function(module, exports, __webpack_require__) {
  
  var root = __webpack_require__(86);
  
  /** Built-in value references. */
  var _Symbol = root.Symbol;
  
  module.exports = _Symbol;
  
  /***/ }),
  /* 36 */
  /***/ (function(module, exports) {
  
  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && (typeof value === 'undefined' ? 'undefined' : babelHelpers.typeof(value)) == 'object';
  }
  
  module.exports = isObjectLike;
  
  /***/ }),
  /* 37 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony default export */ __webpack_exports__["a"] = (function (value) {
    return value.length === 0;
  });
  
  /***/ }),
  /* 38 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony default export */ __webpack_exports__["a"] = (function (value) {
    return value.toString();
  });
  
  /***/ }),
  /* 39 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony default export */ __webpack_exports__["a"] = (function (value) {
    return typeof value === 'string';
  });
  
  /***/ }),
  /* 40 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony default export */ __webpack_exports__["a"] = (function (value) {
    return value === null || value === undefined;
  });
  
  /***/ }),
  /* 41 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_to_camel_case__ = __webpack_require__(102);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_to_camel_case___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_to_camel_case__);
  
  var namespacer = '/';
  /* harmony default export */ __webpack_exports__["a"] = (function (type) {
    return type.includes(namespacer) ? type.split(namespacer).map(__WEBPACK_IMPORTED_MODULE_0_to_camel_case___default.a).join(namespacer) : __WEBPACK_IMPORTED_MODULE_0_to_camel_case___default()(type);
  });
  
  /***/ }),
  /* 42 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(8);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ownKeys__ = __webpack_require__(20);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__get__ = __webpack_require__(43);
  
  
  
  /* harmony default export */ __webpack_exports__["a"] = (function (predicate) {
    return function flatten(map, _temp, partialFlatMap, partialFlatActionType) {
      var _ref = _temp === void 0 ? {} : _temp,
          _ref$namespace = _ref.namespace,
          namespace = _ref$namespace === void 0 ? __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* DEFAULT_NAMESPACE */] : _ref$namespace,
          prefix = _ref.prefix;
  
      if (partialFlatMap === void 0) {
        partialFlatMap = {};
      }
  
      if (partialFlatActionType === void 0) {
        partialFlatActionType = '';
      }
  
      function connectNamespace(type) {
        var _ref2;
  
        if (!partialFlatActionType) return type;
        var types = type.toString().split(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* ACTION_TYPE_DELIMITER */]);
        var partials = partialFlatActionType.split(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* ACTION_TYPE_DELIMITER */]);
        return (_ref2 = []).concat.apply(_ref2, partials.map(function (p) {
          return types.map(function (t) {
            return "" + p + namespace + t;
          });
        })).join(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* ACTION_TYPE_DELIMITER */]);
      }
  
      function connectPrefix(type) {
        if (partialFlatActionType || !prefix) {
          return type;
        }
  
        return "" + prefix + namespace + type;
      }
  
      Object(__WEBPACK_IMPORTED_MODULE_1__ownKeys__["a" /* default */])(map).forEach(function (type) {
        var nextNamespace = connectPrefix(connectNamespace(type));
        var mapValue = Object(__WEBPACK_IMPORTED_MODULE_2__get__["a" /* default */])(type, map);
  
        if (predicate(mapValue)) {
          flatten(mapValue, {
            namespace: namespace,
            prefix: prefix
          }, partialFlatMap, nextNamespace);
        } else {
          partialFlatMap[nextNamespace] = mapValue;
        }
      });
      return partialFlatMap;
    };
  });
  
  /***/ }),
  /* 43 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (immutable) */ __webpack_exports__["a"] = get;
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isMap__ = __webpack_require__(11);
  
  function get(key, x) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__isMap__["a" /* default */])(x) ? x.get(key) : x[key];
  }
  
  /***/ }),
  /* 44 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (immutable) */ __webpack_exports__["a"] = handleAction;
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_invariant__ = __webpack_require__(5);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_invariant__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_isFunction__ = __webpack_require__(10);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_isPlainObject__ = __webpack_require__(9);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_identity__ = __webpack_require__(19);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_isNil__ = __webpack_require__(40);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_isUndefined__ = __webpack_require__(110);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_toString__ = __webpack_require__(38);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants__ = __webpack_require__(8);
  
  
  
  
  
  
  
  
  function handleAction(type, reducer, defaultState) {
    if (reducer === void 0) {
      reducer = __WEBPACK_IMPORTED_MODULE_3__utils_identity__["a" /* default */];
    }
  
    var types = Object(__WEBPACK_IMPORTED_MODULE_6__utils_toString__["a" /* default */])(type).split(__WEBPACK_IMPORTED_MODULE_7__constants__["a" /* ACTION_TYPE_DELIMITER */]);
    __WEBPACK_IMPORTED_MODULE_0_invariant___default()(!Object(__WEBPACK_IMPORTED_MODULE_5__utils_isUndefined__["a" /* default */])(defaultState), "defaultState for reducer handling " + types.join(', ') + " should be defined");
    __WEBPACK_IMPORTED_MODULE_0_invariant___default()(Object(__WEBPACK_IMPORTED_MODULE_1__utils_isFunction__["a" /* default */])(reducer) || Object(__WEBPACK_IMPORTED_MODULE_2__utils_isPlainObject__["a" /* default */])(reducer), 'Expected reducer to be a function or object with next and throw reducers');
  
    var _ref = Object(__WEBPACK_IMPORTED_MODULE_1__utils_isFunction__["a" /* default */])(reducer) ? [reducer, reducer] : [reducer.next, reducer.throw].map(function (aReducer) {
      return Object(__WEBPACK_IMPORTED_MODULE_4__utils_isNil__["a" /* default */])(aReducer) ? __WEBPACK_IMPORTED_MODULE_3__utils_identity__["a" /* default */] : aReducer;
    }),
        nextReducer = _ref[0],
        throwReducer = _ref[1];
  
    return function (state, action) {
      if (state === void 0) {
        state = defaultState;
      }
  
      var actionType = action.type;
  
      if (!actionType || types.indexOf(Object(__WEBPACK_IMPORTED_MODULE_6__utils_toString__["a" /* default */])(actionType)) === -1) {
        return state;
      }
  
      return (action.error === true ? throwReducer : nextReducer)(state, action);
    };
  }
  
  /***/ }),
  /* 45 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  /**
   * Check if `obj` is an object.
   *
   * @param {Object} obj
   * @return {Boolean}
   * @api private
   */
  
  function isObject(obj) {
    return null !== obj && 'object' === (typeof obj === 'undefined' ? 'undefined' : babelHelpers.typeof(obj));
  }
  
  module.exports = isObject;
  
  /***/ }),
  /* 46 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = findTabbableDescendants;
  /*!
   * Adapted from jQuery UI core
   *
   * http://jqueryui.com
   *
   * Copyright 2014 jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/category/ui-core/
   */
  
  var tabbableNode = /input|select|textarea|button|object/;
  
  function hidesContents(element) {
    var zeroSize = element.offsetWidth <= 0 && element.offsetHeight <= 0;
  
    // If the node is empty, this is good enough
    if (zeroSize && !element.innerHTML) return true;
  
    // Otherwise we need to check some styles
    var style = window.getComputedStyle(element);
    return zeroSize ? style.getPropertyValue("overflow") !== "visible" : style.getPropertyValue("display") == "none";
  }
  
  function visible(element) {
    var parentElement = element;
    while (parentElement) {
      if (parentElement === document.body) break;
      if (hidesContents(parentElement)) return false;
      parentElement = parentElement.parentNode;
    }
    return true;
  }
  
  function focusable(element, isTabIndexNotNaN) {
    var nodeName = element.nodeName.toLowerCase();
    var res = tabbableNode.test(nodeName) && !element.disabled || (nodeName === "a" ? element.href || isTabIndexNotNaN : isTabIndexNotNaN);
    return res && visible(element);
  }
  
  function tabbable(element) {
    var tabIndex = element.getAttribute("tabindex");
    if (tabIndex === null) tabIndex = undefined;
    var isTabIndexNaN = isNaN(tabIndex);
    return (isTabIndexNaN || tabIndex >= 0) && focusable(element, !isTabIndexNaN);
  }
  
  function findTabbableDescendants(element) {
    return [].slice.call(element.querySelectorAll("*"), 0).filter(tabbable);
  }
  module.exports = exports["default"];
  
  /***/ }),
  /* 47 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.assertNodeList = assertNodeList;
  exports.setElement = setElement;
  exports.validateElement = validateElement;
  exports.hide = hide;
  exports.show = show;
  exports.documentNotReadyOrSSRTesting = documentNotReadyOrSSRTesting;
  exports.resetForTesting = resetForTesting;
  
  var _warning = __webpack_require__(131);
  
  var _warning2 = _interopRequireDefault(_warning);
  
  var _safeHTMLElement = __webpack_require__(22);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  var globalElement = null;
  
  function assertNodeList(nodeList, selector) {
    if (!nodeList || !nodeList.length) {
      throw new Error("react-modal: No elements were found for selector " + selector + ".");
    }
  }
  
  function setElement(element) {
    var useElement = element;
    if (typeof useElement === "string" && _safeHTMLElement.canUseDOM) {
      var el = document.querySelectorAll(useElement);
      assertNodeList(el, useElement);
      useElement = "length" in el ? el[0] : el;
    }
    globalElement = useElement || globalElement;
    return globalElement;
  }
  
  function validateElement(appElement) {
    if (!appElement && !globalElement) {
      (0, _warning2.default)(false, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" "));
  
      return false;
    }
  
    return true;
  }
  
  function hide(appElement) {
    if (validateElement(appElement)) {
      (appElement || globalElement).setAttribute("aria-hidden", "true");
    }
  }
  
  function show(appElement) {
    if (validateElement(appElement)) {
      (appElement || globalElement).removeAttribute("aria-hidden");
    }
  }
  
  function documentNotReadyOrSSRTesting() {
    globalElement = null;
  }
  
  function resetForTesting() {
    globalElement = null;
  }
  
  /***/ }),
  /* 48 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(7);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart__ = __webpack_require__(137);
  
  
  
  
  
  var CartBlock = function (_Component) {
    babelHelpers.inherits(CartBlock, _Component);
  
    function CartBlock() {
      babelHelpers.classCallCheck(this, CartBlock);
      return babelHelpers.possibleConstructorReturn(this, (CartBlock.__proto__ || Object.getPrototypeOf(CartBlock)).apply(this, arguments));
    }
  
    babelHelpers.createClass(CartBlock, [{
      key: 'componentDidMount',
      value: function componentDidMount() {}
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;
  
        var _props = this.props,
            openBlock = _props.openBlock,
            cart = _props.cart;
  
        return openBlock && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'global-ipe' },
          cart ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'section',
            { className: 'menu-lateral active' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'background-flor', onClick: function onClick() {
                return _this2.props.changeOpen();
              } }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'container-menu-lateral enable' },
              cart.orderItems.length === 0 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'content-sin-flores active' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'p',
                  null,
                  'Aun no has agregado productos a tu carrito'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'a',
                  { onClick: function onClick() {
                      return _this2.props.changeOpen();
                    }, className: 'btn-comprando' },
                  'Continuar comprando'
                )
              ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'content-con-flores' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'car-mheader' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'p',
                    null,
                    'Carrito de compra'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'span',
                    { onClick: function onClick() {
                        return _this2.props.changeOpen();
                      } },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fas fa-times js-close' })
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__cart__["a" /* default */], null)
              )
            )
          ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'section',
            { className: 'loading-flor active' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fas fa-leaf' })
          )
        );
      }
    }]);
    return CartBlock;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
  
  CartBlock.propTypes = {
    openBlock: __WEBPACK_IMPORTED_MODULE_1_prop_types__["PropTypes"].bool.isRequired,
    cart: __WEBPACK_IMPORTED_MODULE_1_prop_types__["PropTypes"].object
  };
  /* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(null, null)(CartBlock));
  
  /***/ }),
  /* 49 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchOrder; });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(2);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_actions__ = __webpack_require__(1);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(6);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(4);
  
  
  
  
  
  var urlCart = __WEBPACK_IMPORTED_MODULE_3__utils__["e" /* baseUrl */] + "cart?_format=json&t=" + __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* MATH_CONST */];
  
  var fetchOrder = Object(__WEBPACK_IMPORTED_MODULE_1_redux_actions__["a" /* createAction */])(__WEBPACK_IMPORTED_MODULE_0__constants__["c" /* FETCH_ORDER */], Object(__WEBPACK_IMPORTED_MODULE_2__api__["d" /* apiGetOrder */])(urlCart));
  
  /***/ }),
  /* 50 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUtil; });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(13);
  
  
  var getUtil = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["a" /* createSelector */])(function (state) {
    return state.util;
  }, function (util) {
    return util;
  });
  
  /***/ }),
  /* 51 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setOpenCartTopBlock; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setOpenComplementBlock; });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(2);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_actions__ = __webpack_require__(1);
  
  
  
  var setOpenCartTopBlock = Object(__WEBPACK_IMPORTED_MODULE_1_redux_actions__["a" /* createAction */])(__WEBPACK_IMPORTED_MODULE_0__constants__["i" /* SET_OPEN_CART_TOP_BLOCK */], function (open) {
    return open;
  });
  
  var setOpenComplementBlock = Object(__WEBPACK_IMPORTED_MODULE_1_redux_actions__["a" /* createAction */])(__WEBPACK_IMPORTED_MODULE_0__constants__["j" /* SET_OPEN_COMPLEMENT_BLOCK */], function (open) {
    return open;
  });
  
  /***/ }),
  /* 52 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setCountCart; });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(2);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_actions__ = __webpack_require__(1);
  
  
  
  var setCountCart = Object(__WEBPACK_IMPORTED_MODULE_1_redux_actions__["a" /* createAction */])(__WEBPACK_IMPORTED_MODULE_0__constants__["h" /* SET_COUNT_CART */], function (count) {
    return count;
  });
  
  /***/ }),
  /* 53 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(24);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(7);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(81);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Product__ = __webpack_require__(154);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_cart_top__ = __webpack_require__(150);
  
  
  
  
  // import CartBlock from "./components/cart-block";
  // import CartForm from "./components/cart-form";
  // import CartAdd from "./components/cart-add";
  
  
  //import CartComplement from "./components/cart-complement/index-2";
  
  
  
  // if (document.getElementById('reactCartBlock')) {
  //   render(<CartBlock/>, document.getElementById('reactCartBlock'));
  // }
  
  // if (document.getElementById('reactCartForm')) {
  //   render(<CartForm/>, document.getElementById('reactCartForm'));
  // }
  
  var CartTopComponent = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_react_redux__["a" /* Provider */],
    { store: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* store */] },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_cart_top__["a" /* default */], null)
  );
  if (document.getElementById('reactCartTop')) {
    Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"])(CartTopComponent, document.getElementById('reactCartTop'));
  }
  
  // const CartTopMobileComponent = (
  //   <Provider store={store}>
  //     <CartTop />
  //   </Provider>
  // )
  
  // if (document.getElementById('reactCartMobile')) {
  //   render(CartTopMobileComponent, document.getElementById('reactCartMobile'));
  // }
  
  // if (document.getElementById('reactCartAdd')) {
  //   render(<CartAdd/>, document.getElementById('reactCartAdd'));
  // }
  // if (document.getElementById('reactCartComplement')) {
  //   render(<CartComplement />, document.getElementById('reactCartComplement'));
  // }
  var CartComplementComponent = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_react_redux__["a" /* Provider */],
    { store: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* store */] },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Product__["a" /* default */], null)
  );
  if (document.getElementById('reactCartComplement')) {
    Object(__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"])(CartComplementComponent, document.getElementById('reactCartComplement'));
  }
  
  /***/ }),
  /* 54 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* unused harmony export createProvider */
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__ = __webpack_require__(26);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_warning__ = __webpack_require__(14);
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : babelHelpers.typeof(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : babelHelpers.typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  
  
  
  
  
  var didWarnAboutReceivingStore = false;
  function warnAboutReceivingStore() {
    if (didWarnAboutReceivingStore) {
      return;
    }
    didWarnAboutReceivingStore = true;
  
    Object(__WEBPACK_IMPORTED_MODULE_3__utils_warning__["a" /* default */])('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
  }
  
  function createProvider() {
    var _Provider$childContex;
  
    var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
    var subKey = arguments[1];
  
    var subscriptionKey = subKey || storeKey + 'Subscription';
  
    var Provider = function (_Component) {
      _inherits(Provider, _Component);
  
      Provider.prototype.getChildContext = function getChildContext() {
        var _ref;
  
        return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
      };
  
      function Provider(props, context) {
        _classCallCheck(this, Provider);
  
        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));
  
        _this[storeKey] = props.store;
        return _this;
      }
  
      Provider.prototype.render = function render() {
        return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children);
      };
  
      return Provider;
    }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
  
    if (true) {
      Provider.prototype.componentWillReceiveProps = function (nextProps) {
        if (this[storeKey] !== nextProps.store) {
          warnAboutReceivingStore();
        }
      };
    }
  
    Provider.propTypes = {
      store: __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired,
      children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.element.isRequired
    };
    Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["a" /* storeShape */].isRequired, _Provider$childContex[subscriptionKey] = __WEBPACK_IMPORTED_MODULE_2__utils_PropTypes__["b" /* subscriptionShape */], _Provider$childContex);
  
    return Provider;
  }
  
  /* harmony default export */ __webpack_exports__["a"] = (createProvider());
  
  /***/ }),
  /* 55 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  
  
  
  var assign = __webpack_require__(56);
  
  var ReactPropTypesSecret = __webpack_require__(25);
  var checkPropTypes = __webpack_require__(57);
  
  var printWarning = function printWarning() {};
  
  if (true) {
    printWarning = function printWarning(text) {
      var message = 'Warning: ' + text;
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }
  
  function emptyFunctionThatReturnsNull() {
    return null;
  }
  
  module.exports = function (isValidElement, throwOnDirectAccess) {
    /* global Symbol */
    var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.
  
    /**
     * Returns the iterator method function contained on the iterable object.
     *
     * Be sure to invoke the function with the iterable as context:
     *
     *     var iteratorFn = getIteratorFn(myIterable);
     *     if (iteratorFn) {
     *       var iterator = iteratorFn.call(myIterable);
     *       ...
     *     }
     *
     * @param {?object} maybeIterable
     * @return {?function}
     */
    function getIteratorFn(maybeIterable) {
      var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
      if (typeof iteratorFn === 'function') {
        return iteratorFn;
      }
    }
  
    /**
     * Collection of methods that allow declaration and validation of props that are
     * supplied to React components. Example usage:
     *
     *   var Props = require('ReactPropTypes');
     *   var MyArticle = React.createClass({
     *     propTypes: {
     *       // An optional string prop named "description".
     *       description: Props.string,
     *
     *       // A required enum prop named "category".
     *       category: Props.oneOf(['News','Photos']).isRequired,
     *
     *       // A prop named "dialog" that requires an instance of Dialog.
     *       dialog: Props.instanceOf(Dialog).isRequired
     *     },
     *     render: function() { ... }
     *   });
     *
     * A more formal specification of how these methods are used:
     *
     *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
     *   decl := ReactPropTypes.{type}(.isRequired)?
     *
     * Each and every declaration produces a function with the same signature. This
     * allows the creation of custom validation functions. For example:
     *
     *  var MyLink = React.createClass({
     *    propTypes: {
     *      // An optional string or URI prop named "href".
     *      href: function(props, propName, componentName) {
     *        var propValue = props[propName];
     *        if (propValue != null && typeof propValue !== 'string' &&
     *            !(propValue instanceof URI)) {
     *          return new Error(
     *            'Expected a string or an URI for ' + propName + ' in ' +
     *            componentName
     *          );
     *        }
     *      }
     *    },
     *    render: function() {...}
     *  });
     *
     * @internal
     */
  
    var ANONYMOUS = '<<anonymous>>';
  
    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
      array: createPrimitiveTypeChecker('array'),
      bool: createPrimitiveTypeChecker('boolean'),
      func: createPrimitiveTypeChecker('function'),
      number: createPrimitiveTypeChecker('number'),
      object: createPrimitiveTypeChecker('object'),
      string: createPrimitiveTypeChecker('string'),
      symbol: createPrimitiveTypeChecker('symbol'),
  
      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker
    };
  
    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
    /*eslint-disable no-self-compare*/
    function is(x, y) {
      // SameValue algorithm
      if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y;
      }
    }
    /*eslint-enable no-self-compare*/
  
    /**
     * We use an Error-like object for backward compatibility as people may call
     * PropTypes directly and inspect their output. However, we don't use real
     * Errors anymore. We don't inspect their stack anyway, and creating them
     * is prohibitively expensive if they are created too often, such as what
     * happens in oneOfType() for any type before the one that matched.
     */
    function PropTypeError(message) {
      this.message = message;
      this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;
  
    function createChainableTypeChecker(validate) {
      if (true) {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }
      function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;
  
        if (secret !== ReactPropTypesSecret) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
            err.name = 'Invariant Violation';
            throw err;
          } else if ("development" !== 'production' && typeof console !== 'undefined') {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ':' + propName;
            if (!manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3) {
              printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }
        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
            }
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
          }
          return null;
        } else {
          return validate(props, propName, componentName, location, propFullName);
        }
      }
  
      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);
  
      return chainedCheckType;
    }
  
    function createPrimitiveTypeChecker(expectedType) {
      function validate(props, propName, componentName, location, propFullName, secret) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== expectedType) {
          // `propValue` being instance of, say, date/regexp, pass the 'object'
          // check, but we can offer a more precise error message here rather than
          // 'of type `object`'.
          var preciseType = getPreciseType(propValue);
  
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
  
    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }
  
    function createArrayOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
        }
        var propValue = props[propName];
        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
        }
        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
  
    function createElementTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
  
    function createInstanceTypeChecker(expectedClass) {
      function validate(props, propName, componentName, location, propFullName) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
  
    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
         true ? printWarning('Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
        return emptyFunctionThatReturnsNull;
      }
  
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }
  
        var valuesString = JSON.stringify(expectedValues);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
      }
      return createChainableTypeChecker(validate);
    }
  
    function createObjectOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
        }
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
        }
        for (var key in propValue) {
          if (propValue.hasOwnProperty(key)) {
            var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
  
    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
         true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
        return emptyFunctionThatReturnsNull;
      }
  
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (typeof checker !== 'function') {
          printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
          return emptyFunctionThatReturnsNull;
        }
      }
  
      function validate(props, propName, componentName, location, propFullName) {
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
            return null;
          }
        }
  
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
      }
      return createChainableTypeChecker(validate);
    }
  
    function createNodeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        if (!isNode(props[propName])) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
  
    function createShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        for (var key in shapeTypes) {
          var checker = shapeTypes[key];
          if (!checker) {
            continue;
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
  
    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        // We need to check all keys in case some are required but missing from
        // props.
        var allKeys = assign({}, props[propName], shapeTypes);
        for (var key in allKeys) {
          var checker = shapeTypes[key];
          if (!checker) {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error) {
            return error;
          }
        }
        return null;
      }
  
      return createChainableTypeChecker(validate);
    }
  
    function isNode(propValue) {
      switch (typeof propValue === 'undefined' ? 'undefined' : babelHelpers.typeof(propValue)) {
        case 'number':
        case 'string':
        case 'undefined':
          return true;
        case 'boolean':
          return !propValue;
        case 'object':
          if (Array.isArray(propValue)) {
            return propValue.every(isNode);
          }
          if (propValue === null || isValidElement(propValue)) {
            return true;
          }
  
          var iteratorFn = getIteratorFn(propValue);
          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue);
            var step;
            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false;
                }
              }
            } else {
              // Iterator will provide entry [k,v] tuples rather than values.
              while (!(step = iterator.next()).done) {
                var entry = step.value;
                if (entry) {
                  if (!isNode(entry[1])) {
                    return false;
                  }
                }
              }
            }
          } else {
            return false;
          }
  
          return true;
        default:
          return false;
      }
    }
  
    function isSymbol(propType, propValue) {
      // Native Symbol.
      if (propType === 'symbol') {
        return true;
      }
  
      // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
      if (propValue['@@toStringTag'] === 'Symbol') {
        return true;
      }
  
      // Fallback for non-spec compliant Symbols which are polyfilled.
      if (typeof Symbol === 'function' && propValue instanceof Symbol) {
        return true;
      }
  
      return false;
    }
  
    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
      var propType = typeof propValue === 'undefined' ? 'undefined' : babelHelpers.typeof(propValue);
      if (Array.isArray(propValue)) {
        return 'array';
      }
      if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return 'object';
      }
      if (isSymbol(propType, propValue)) {
        return 'symbol';
      }
      return propType;
    }
  
    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
      if (typeof propValue === 'undefined' || propValue === null) {
        return '' + propValue;
      }
      var propType = getPropType(propValue);
      if (propType === 'object') {
        if (propValue instanceof Date) {
          return 'date';
        } else if (propValue instanceof RegExp) {
          return 'regexp';
        }
      }
      return propType;
    }
  
    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value);
      switch (type) {
        case 'array':
        case 'object':
          return 'an ' + type;
        case 'boolean':
        case 'date':
        case 'regexp':
          return 'a ' + type;
        default:
          return type;
      }
    }
  
    // Returns class name of the object, if any.
    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }
      return propValue.constructor.name;
    }
  
    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.PropTypes = ReactPropTypes;
  
    return ReactPropTypes;
  };
  
  /***/ }),
  /* 56 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  
  
  /* eslint-disable no-unused-vars */
  
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;
  
  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError('Object.assign cannot be called with null or undefined');
    }
  
    return Object(val);
  }
  
  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }
  
      // Detect buggy property enumeration order in older V8 versions.
  
      // https://bugs.chromium.org/p/v8/issues/detail?id=4118
      var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
      test1[5] = 'de';
      if (Object.getOwnPropertyNames(test1)[0] === '5') {
        return false;
      }
  
      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test2 = {};
      for (var i = 0; i < 10; i++) {
        test2['_' + String.fromCharCode(i)] = i;
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
        return test2[n];
      });
      if (order2.join('') !== '0123456789') {
        return false;
      }
  
      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test3 = {};
      'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
        test3[letter] = letter;
      });
      if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
        return false;
      }
  
      return true;
    } catch (err) {
      // We don't expect any of the above to throw, but better to be safe.
      return false;
    }
  }
  
  module.exports = shouldUseNative() ? Object.assign : function (target, source) {
    var from;
    var to = toObject(target);
    var symbols;
  
    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments[s]);
  
      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }
  
      if (getOwnPropertySymbols) {
        symbols = getOwnPropertySymbols(from);
        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            to[symbols[i]] = from[symbols[i]];
          }
        }
      }
    }
  
    return to;
  };
  
  /***/ }),
  /* 57 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  
  
  
  var printWarning = function printWarning() {};
  
  if (true) {
    var ReactPropTypesSecret = __webpack_require__(25);
    var loggedTypeFailures = {};
  
    printWarning = function printWarning(text) {
      var message = 'Warning: ' + text;
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }
  
  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */
  function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
    if (true) {
      for (var typeSpecName in typeSpecs) {
        if (typeSpecs.hasOwnProperty(typeSpecName)) {
          var error;
          // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.
          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== 'function') {
              var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + babelHelpers.typeof(typeSpecs[typeSpecName]) + '`.');
              err.name = 'Invariant Violation';
              throw err;
            }
            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
          } catch (ex) {
            error = ex;
          }
          if (error && !(error instanceof Error)) {
            printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + (typeof error === 'undefined' ? 'undefined' : babelHelpers.typeof(error)) + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
          }
          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true;
  
            var stack = getStack ? getStack() : '';
  
            printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
          }
        }
      }
    }
  }
  
  module.exports = checkPropTypes;
  
  /***/ }),
  /* 58 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */
  
  var REACT_STATICS = {
      childContextTypes: true,
      contextTypes: true,
      defaultProps: true,
      displayName: true,
      getDefaultProps: true,
      getDerivedStateFromProps: true,
      mixins: true,
      propTypes: true,
      type: true
  };
  
  var KNOWN_STATICS = {
      name: true,
      length: true,
      prototype: true,
      caller: true,
      callee: true,
      arguments: true,
      arity: true
  };
  
  var defineProperty = Object.defineProperty;
  var getOwnPropertyNames = Object.getOwnPropertyNames;
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var getPrototypeOf = Object.getPrototypeOf;
  var objectPrototype = getPrototypeOf && getPrototypeOf(Object);
  
  function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
      if (typeof sourceComponent !== 'string') {
          // don't hoist over string (html) components
  
          if (objectPrototype) {
              var inheritedComponent = getPrototypeOf(sourceComponent);
              if (inheritedComponent && inheritedComponent !== objectPrototype) {
                  hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
              }
          }
  
          var keys = getOwnPropertyNames(sourceComponent);
  
          if (getOwnPropertySymbols) {
              keys = keys.concat(getOwnPropertySymbols(sourceComponent));
          }
  
          for (var i = 0; i < keys.length; ++i) {
              var key = keys[i];
              if (!REACT_STATICS[key] && !KNOWN_STATICS[key] && (!blacklist || !blacklist[key])) {
                  var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                  try {
                      // Avoid failures from read-only properties
                      defineProperty(targetComponent, key, descriptor);
                  } catch (e) {}
              }
          }
  
          return targetComponent;
      }
  
      return targetComponent;
  }
  
  module.exports = hoistNonReactStatics;
  
  /***/ }),
  /* 59 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Subscription; });
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  // encapsulates the subscription logic for connecting a component to the redux store, as
  // well as nesting subscriptions of descendant components, so that we can ensure the
  // ancestor components re-render before descendants
  
  var CLEARED = null;
  var nullListeners = {
    notify: function notify() {}
  };
  
  function createListenerCollection() {
    // the current/next pattern is copied from redux's createStore code.
    // TODO: refactor+expose that code to be reusable here?
    var current = [];
    var next = [];
  
    return {
      clear: function clear() {
        next = CLEARED;
        current = CLEARED;
      },
      notify: function notify() {
        var listeners = current = next;
        for (var i = 0; i < listeners.length; i++) {
          listeners[i]();
        }
      },
      get: function get() {
        return next;
      },
      subscribe: function subscribe(listener) {
        var isSubscribed = true;
        if (next === current) next = current.slice();
        next.push(listener);
  
        return function unsubscribe() {
          if (!isSubscribed || current === CLEARED) return;
          isSubscribed = false;
  
          if (next === current) next = current.slice();
          next.splice(next.indexOf(listener), 1);
        };
      }
    };
  }
  
  var Subscription = function () {
    function Subscription(store, parentSub, onStateChange) {
      _classCallCheck(this, Subscription);
  
      this.store = store;
      this.parentSub = parentSub;
      this.onStateChange = onStateChange;
      this.unsubscribe = null;
      this.listeners = nullListeners;
    }
  
    Subscription.prototype.addNestedSub = function addNestedSub(listener) {
      this.trySubscribe();
      return this.listeners.subscribe(listener);
    };
  
    Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
      this.listeners.notify();
    };
  
    Subscription.prototype.isSubscribed = function isSubscribed() {
      return Boolean(this.unsubscribe);
    };
  
    Subscription.prototype.trySubscribe = function trySubscribe() {
      if (!this.unsubscribe) {
        this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);
  
        this.listeners = createListenerCollection();
      }
    };
  
    Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
      if (this.unsubscribe) {
        this.unsubscribe();
        this.unsubscribe = null;
        this.listeners.clear();
        this.listeners = nullListeners;
      }
    };
  
    return Subscription;
  }();
  
  
  
  /***/ }),
  /* 60 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* unused harmony export createConnect */
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__ = __webpack_require__(27);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__ = __webpack_require__(61);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__ = __webpack_require__(62);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__ = __webpack_require__(77);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mergeProps__ = __webpack_require__(78);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectorFactory__ = __webpack_require__(79);
  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  function _objectWithoutProperties(obj, keys) {
    var target = {};for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
    }return target;
  }
  
  
  
  
  
  
  
  
  /*
    connect is a facade over connectAdvanced. It turns its args into a compatible
    selectorFactory, which has the signature:
  
      (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
    
    connect passes its args to connectAdvanced as options, which will in turn pass them to
    selectorFactory each time a Connect component instance is instantiated or hot reloaded.
  
    selectorFactory returns a final props selector from its mapStateToProps,
    mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
    mergePropsFactories, and pure args.
  
    The resulting final props selector is called by the Connect component instance whenever
    it receives new props or store state.
   */
  
  function match(arg, factories, name) {
    for (var i = factories.length - 1; i >= 0; i--) {
      var result = factories[i](arg);
      if (result) return result;
    }
  
    return function (dispatch, options) {
      throw new Error('Invalid value of type ' + (typeof arg === 'undefined' ? 'undefined' : babelHelpers.typeof(arg)) + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
    };
  }
  
  function strictEqual(a, b) {
    return a === b;
  }
  
  // createConnect with default args builds the 'official' connect behavior. Calling it with
  // different options opens up some testing and extensibility scenarios
  function createConnect() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$connectHOC = _ref.connectHOC,
        connectHOC = _ref$connectHOC === undefined ? __WEBPACK_IMPORTED_MODULE_0__components_connectAdvanced__["a" /* default */] : _ref$connectHOC,
        _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
        mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? __WEBPACK_IMPORTED_MODULE_3__mapStateToProps__["a" /* default */] : _ref$mapStateToPropsF,
        _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
        mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? __WEBPACK_IMPORTED_MODULE_2__mapDispatchToProps__["a" /* default */] : _ref$mapDispatchToPro,
        _ref$mergePropsFactor = _ref.mergePropsFactories,
        mergePropsFactories = _ref$mergePropsFactor === undefined ? __WEBPACK_IMPORTED_MODULE_4__mergeProps__["a" /* default */] : _ref$mergePropsFactor,
        _ref$selectorFactory = _ref.selectorFactory,
        selectorFactory = _ref$selectorFactory === undefined ? __WEBPACK_IMPORTED_MODULE_5__selectorFactory__["a" /* default */] : _ref$selectorFactory;
  
    return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
      var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
          _ref2$pure = _ref2.pure,
          pure = _ref2$pure === undefined ? true : _ref2$pure,
          _ref2$areStatesEqual = _ref2.areStatesEqual,
          areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
          _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
          areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areOwnPropsEqua,
          _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
          areStatePropsEqual = _ref2$areStatePropsEq === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areStatePropsEq,
          _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
          areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? __WEBPACK_IMPORTED_MODULE_1__utils_shallowEqual__["a" /* default */] : _ref2$areMergedPropsE,
          extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);
  
      var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
      var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
      var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
  
      return connectHOC(selectorFactory, _extends({
        // used in error messages
        methodName: 'connect',
  
        // used to compute Connect's displayName from the wrapped component's displayName.
        getDisplayName: function getDisplayName(name) {
          return 'Connect(' + name + ')';
        },
  
        // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
        shouldHandleStateChanges: Boolean(mapStateToProps),
  
        // passed through to selectorFactory
        initMapStateToProps: initMapStateToProps,
        initMapDispatchToProps: initMapDispatchToProps,
        initMergeProps: initMergeProps,
        pure: pure,
        areStatesEqual: areStatesEqual,
        areOwnPropsEqual: areOwnPropsEqual,
        areStatePropsEqual: areStatePropsEqual,
        areMergedPropsEqual: areMergedPropsEqual
  
      }, extraOptions));
    };
  }
  
  /* harmony default export */ __webpack_exports__["a"] = (createConnect());
  
  /***/ }),
  /* 61 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (immutable) */ __webpack_exports__["a"] = shallowEqual;
  var hasOwn = Object.prototype.hasOwnProperty;
  
  function is(x, y) {
    if (x === y) {
      return x !== 0 || y !== 0 || 1 / x === 1 / y;
    } else {
      return x !== x && y !== y;
    }
  }
  
  function shallowEqual(objA, objB) {
    if (is(objA, objB)) return true;
  
    if ((typeof objA === 'undefined' ? 'undefined' : babelHelpers.typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : babelHelpers.typeof(objB)) !== 'object' || objB === null) {
      return false;
    }
  
    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);
  
    if (keysA.length !== keysB.length) return false;
  
    for (var i = 0; i < keysA.length; i++) {
      if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
        return false;
      }
    }
  
    return true;
  }
  
  /***/ }),
  /* 62 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* unused harmony export whenMapDispatchToPropsIsFunction */
  /* unused harmony export whenMapDispatchToPropsIsMissing */
  /* unused harmony export whenMapDispatchToPropsIsObject */
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(15);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__ = __webpack_require__(32);
  
  
  
  function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
    return typeof mapDispatchToProps === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["b" /* wrapMapToPropsFunc */])(mapDispatchToProps, 'mapDispatchToProps') : undefined;
  }
  
  function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
    return !mapDispatchToProps ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function (dispatch) {
      return { dispatch: dispatch };
    }) : undefined;
  }
  
  function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
    return mapDispatchToProps && (typeof mapDispatchToProps === 'undefined' ? 'undefined' : babelHelpers.typeof(mapDispatchToProps)) === 'object' ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function (dispatch) {
      return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["b" /* bindActionCreators */])(mapDispatchToProps, dispatch);
    }) : undefined;
  }
  
  /* harmony default export */ __webpack_exports__["a"] = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);
  
  /***/ }),
  /* 63 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(29);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(66);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(67);
  
  
  
  
  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';
  
  /** Built-in value references. */
  var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;
  
  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? Object(__WEBPACK_IMPORTED_MODULE_1__getRawTag_js__["a" /* default */])(value) : Object(__WEBPACK_IMPORTED_MODULE_2__objectToString_js__["a" /* default */])(value);
  }
  
  /* harmony default export */ __webpack_exports__["a"] = (baseGetTag);
  
  /***/ }),
  /* 64 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(65);
  
  
  /** Detect free variable `self`. */
  var freeSelf = (typeof self === 'undefined' ? 'undefined' : babelHelpers.typeof(self)) == 'object' && self && self.Object === Object && self;
  
  /** Used as a reference to the global object. */
  var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();
  
  /* harmony default export */ __webpack_exports__["a"] = (root);
  
  /***/ }),
  /* 65 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
  var freeGlobal = (typeof global === 'undefined' ? 'undefined' : babelHelpers.typeof(global)) == 'object' && global && global.Object === Object && global;
  
  /* harmony default export */ __webpack_exports__["a"] = (freeGlobal);
  /* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(17)))
  
  /***/ }),
  /* 66 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(29);
  
  
  /** Used for built-in method references. */
  var objectProto = Object.prototype;
  
  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;
  
  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;
  
  /** Built-in value references. */
  var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;
  
  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag),
        tag = value[symToStringTag];
  
    try {
      value[symToStringTag] = undefined;
      var unmasked = true;
    } catch (e) {}
  
    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }
  
  /* harmony default export */ __webpack_exports__["a"] = (getRawTag);
  
  /***/ }),
  /* 67 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /** Used for built-in method references. */
  var objectProto = Object.prototype;
  
  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;
  
  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }
  
  /* harmony default export */ __webpack_exports__["a"] = (objectToString);
  
  /***/ }),
  /* 68 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(69);
  
  
  /** Built-in value references. */
  var getPrototype = Object(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */])(Object.getPrototypeOf, Object);
  
  /* harmony default export */ __webpack_exports__["a"] = (getPrototype);
  
  /***/ }),
  /* 69 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function (arg) {
      return func(transform(arg));
    };
  }
  
  /* harmony default export */ __webpack_exports__["a"] = (overArg);
  
  /***/ }),
  /* 70 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && (typeof value === 'undefined' ? 'undefined' : babelHelpers.typeof(value)) == 'object';
  }
  
  /* harmony default export */ __webpack_exports__["a"] = (isObjectLike);
  
  /***/ }),
  /* 71 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ponyfill_js__ = __webpack_require__(73);
  /* global window */
  
  
  var root;
  
  if (typeof self !== 'undefined') {
    root = self;
  } else if (typeof window !== 'undefined') {
    root = window;
  } else if (typeof global !== 'undefined') {
    root = global;
  } else if (true) {
    root = module;
  } else {
    root = Function('return this')();
  }
  
  var result = Object(__WEBPACK_IMPORTED_MODULE_0__ponyfill_js__["a" /* default */])(root);
  /* harmony default export */ __webpack_exports__["a"] = (result);
  /* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(17), __webpack_require__(72)(module)))
  
  /***/ }),
  /* 72 */
  /***/ (function(module, exports) {
  
  module.exports = function (originalModule) {
    if (!originalModule.webpackPolyfill) {
      var module = Object.create(originalModule);
      // module.parent = undefined by default
      if (!module.children) module.children = [];
      Object.defineProperty(module, "loaded", {
        enumerable: true,
        get: function get() {
          return module.l;
        }
      });
      Object.defineProperty(module, "id", {
        enumerable: true,
        get: function get() {
          return module.i;
        }
      });
      Object.defineProperty(module, "exports", {
        enumerable: true
      });
      module.webpackPolyfill = 1;
    }
    return module;
  };
  
  /***/ }),
  /* 73 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (immutable) */ __webpack_exports__["a"] = symbolObservablePonyfill;
  function symbolObservablePonyfill(root) {
    var result;
    var _Symbol = root.Symbol;
  
    if (typeof _Symbol === 'function') {
      if (_Symbol.observable) {
        result = _Symbol.observable;
      } else {
        result = _Symbol('observable');
        _Symbol.observable = result;
      }
    } else {
      result = '@@observable';
    }
  
    return result;
  };
  
  /***/ }),
  /* 74 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (immutable) */ __webpack_exports__["a"] = combineReducers;
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(28);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__ = __webpack_require__(16);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_warning__ = __webpack_require__(30);
  
  
  
  
  function getUndefinedStateErrorMessage(key, action) {
    var actionType = action && action.type;
    var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';
  
    return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
  }
  
  function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
    var reducerKeys = Object.keys(reducers);
    var argumentName = action && action.type === __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';
  
    if (reducerKeys.length === 0) {
      return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
    }
  
    if (!Object(__WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__["a" /* default */])(inputState)) {
      return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
    }
  
    var unexpectedKeys = Object.keys(inputState).filter(function (key) {
      return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
    });
  
    unexpectedKeys.forEach(function (key) {
      unexpectedKeyCache[key] = true;
    });
  
    if (unexpectedKeys.length > 0) {
      return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
    }
  }
  
  function assertReducerShape(reducers) {
    Object.keys(reducers).forEach(function (key) {
      var reducer = reducers[key];
      var initialState = reducer(undefined, { type: __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT });
  
      if (typeof initialState === 'undefined') {
        throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
      }
  
      var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
      if (typeof reducer(undefined, { type: type }) === 'undefined') {
        throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
      }
    });
  }
  
  /**
   * Turns an object whose values are different reducer functions, into a single
   * reducer function. It will call every child reducer, and gather their results
   * into a single state object, whose keys correspond to the keys of the passed
   * reducer functions.
   *
   * @param {Object} reducers An object whose values correspond to different
   * reducer functions that need to be combined into one. One handy way to obtain
   * it is to use ES6 `import * as reducers` syntax. The reducers may never return
   * undefined for any action. Instead, they should return their initial state
   * if the state passed to them was undefined, and the current state for any
   * unrecognized action.
   *
   * @returns {Function} A reducer function that invokes every reducer inside the
   * passed object, and builds a state object with the same shape.
   */
  function combineReducers(reducers) {
    var reducerKeys = Object.keys(reducers);
    var finalReducers = {};
    for (var i = 0; i < reducerKeys.length; i++) {
      var key = reducerKeys[i];
  
      if (true) {
        if (typeof reducers[key] === 'undefined') {
          Object(__WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */])('No reducer provided for key "' + key + '"');
        }
      }
  
      if (typeof reducers[key] === 'function') {
        finalReducers[key] = reducers[key];
      }
    }
    var finalReducerKeys = Object.keys(finalReducers);
  
    var unexpectedKeyCache = void 0;
    if (true) {
      unexpectedKeyCache = {};
    }
  
    var shapeAssertionError = void 0;
    try {
      assertReducerShape(finalReducers);
    } catch (e) {
      shapeAssertionError = e;
    }
  
    return function combination() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var action = arguments[1];
  
      if (shapeAssertionError) {
        throw shapeAssertionError;
      }
  
      if (true) {
        var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
        if (warningMessage) {
          Object(__WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */])(warningMessage);
        }
      }
  
      var hasChanged = false;
      var nextState = {};
      for (var _i = 0; _i < finalReducerKeys.length; _i++) {
        var _key = finalReducerKeys[_i];
        var reducer = finalReducers[_key];
        var previousStateForKey = state[_key];
        var nextStateForKey = reducer(previousStateForKey, action);
        if (typeof nextStateForKey === 'undefined') {
          var errorMessage = getUndefinedStateErrorMessage(_key, action);
          throw new Error(errorMessage);
        }
        nextState[_key] = nextStateForKey;
        hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
      }
      return hasChanged ? nextState : state;
    };
  }
  
  /***/ }),
  /* 75 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (immutable) */ __webpack_exports__["a"] = bindActionCreators;
  function bindActionCreator(actionCreator, dispatch) {
    return function () {
      return dispatch(actionCreator.apply(undefined, arguments));
    };
  }
  
  /**
   * Turns an object whose values are action creators, into an object with the
   * same keys, but with every function wrapped into a `dispatch` call so they
   * may be invoked directly. This is just a convenience method, as you can call
   * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
   *
   * For convenience, you can also pass a single function as the first argument,
   * and get a function in return.
   *
   * @param {Function|Object} actionCreators An object whose values are action
   * creator functions. One handy way to obtain it is to use ES6 `import * as`
   * syntax. You may also pass a single function.
   *
   * @param {Function} dispatch The `dispatch` function available on your Redux
   * store.
   *
   * @returns {Function|Object} The object mimicking the original object, but with
   * every action creator wrapped into the `dispatch` call. If you passed a
   * function as `actionCreators`, the return value will also be a single
   * function.
   */
  function bindActionCreators(actionCreators, dispatch) {
    if (typeof actionCreators === 'function') {
      return bindActionCreator(actionCreators, dispatch);
    }
  
    if ((typeof actionCreators === 'undefined' ? 'undefined' : babelHelpers.typeof(actionCreators)) !== 'object' || actionCreators === null) {
      throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators === 'undefined' ? 'undefined' : babelHelpers.typeof(actionCreators)) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
    }
  
    var keys = Object.keys(actionCreators);
    var boundActionCreators = {};
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var actionCreator = actionCreators[key];
      if (typeof actionCreator === 'function') {
        boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
      }
    }
    return boundActionCreators;
  }
  
  /***/ }),
  /* 76 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (immutable) */ __webpack_exports__["a"] = applyMiddleware;
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(31);
  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  
  
  /**
   * Creates a store enhancer that applies middleware to the dispatch method
   * of the Redux store. This is handy for a variety of tasks, such as expressing
   * asynchronous actions in a concise manner, or logging every action payload.
   *
   * See `redux-thunk` package as an example of the Redux middleware.
   *
   * Because middleware is potentially asynchronous, this should be the first
   * store enhancer in the composition chain.
   *
   * Note that each middleware will be given the `dispatch` and `getState` functions
   * as named arguments.
   *
   * @param {...Function} middlewares The middleware chain to be applied.
   * @returns {Function} A store enhancer applying the middleware.
   */
  function applyMiddleware() {
    for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
      middlewares[_key] = arguments[_key];
    }
  
    return function (createStore) {
      return function (reducer, preloadedState, enhancer) {
        var store = createStore(reducer, preloadedState, enhancer);
        var _dispatch = store.dispatch;
        var chain = [];
  
        var middlewareAPI = {
          getState: store.getState,
          dispatch: function dispatch(action) {
            return _dispatch(action);
          }
        };
        chain = middlewares.map(function (middleware) {
          return middleware(middlewareAPI);
        });
        _dispatch = __WEBPACK_IMPORTED_MODULE_0__compose__["a" /* default */].apply(undefined, chain)(store.dispatch);
  
        return _extends({}, store, {
          dispatch: _dispatch
        });
      };
    };
  }
  
  /***/ }),
  /* 77 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* unused harmony export whenMapStateToPropsIsFunction */
  /* unused harmony export whenMapStateToPropsIsMissing */
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__ = __webpack_require__(32);
  
  
  function whenMapStateToPropsIsFunction(mapStateToProps) {
    return typeof mapStateToProps === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["b" /* wrapMapToPropsFunc */])(mapStateToProps, 'mapStateToProps') : undefined;
  }
  
  function whenMapStateToPropsIsMissing(mapStateToProps) {
    return !mapStateToProps ? Object(__WEBPACK_IMPORTED_MODULE_0__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function () {
      return {};
    }) : undefined;
  }
  
  /* harmony default export */ __webpack_exports__["a"] = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);
  
  /***/ }),
  /* 78 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* unused harmony export defaultMergeProps */
  /* unused harmony export wrapMergePropsFunc */
  /* unused harmony export whenMergePropsIsFunction */
  /* unused harmony export whenMergePropsIsOmitted */
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__ = __webpack_require__(33);
  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  
  
  function defaultMergeProps(stateProps, dispatchProps, ownProps) {
    return _extends({}, ownProps, stateProps, dispatchProps);
  }
  
  function wrapMergePropsFunc(mergeProps) {
    return function initMergePropsProxy(dispatch, _ref) {
      var displayName = _ref.displayName,
          pure = _ref.pure,
          areMergedPropsEqual = _ref.areMergedPropsEqual;
  
      var hasRunOnce = false;
      var mergedProps = void 0;
  
      return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
        var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);
  
        if (hasRunOnce) {
          if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
        } else {
          hasRunOnce = true;
          mergedProps = nextMergedProps;
  
          if (true) Object(__WEBPACK_IMPORTED_MODULE_0__utils_verifyPlainObject__["a" /* default */])(mergedProps, displayName, 'mergeProps');
        }
  
        return mergedProps;
      };
    };
  }
  
  function whenMergePropsIsFunction(mergeProps) {
    return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
  }
  
  function whenMergePropsIsOmitted(mergeProps) {
    return !mergeProps ? function () {
      return defaultMergeProps;
    } : undefined;
  }
  
  /* harmony default export */ __webpack_exports__["a"] = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);
  
  /***/ }),
  /* 79 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* unused harmony export impureFinalPropsSelectorFactory */
  /* unused harmony export pureFinalPropsSelectorFactory */
  /* harmony export (immutable) */ __webpack_exports__["a"] = finalPropsSelectorFactory;
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__verifySubselectors__ = __webpack_require__(80);
  function _objectWithoutProperties(obj, keys) {
    var target = {};for (var i in obj) {
      if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
    }return target;
  }
  
  
  
  function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
    return function impureFinalPropsSelector(state, ownProps) {
      return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
    };
  }
  
  function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
    var areStatesEqual = _ref.areStatesEqual,
        areOwnPropsEqual = _ref.areOwnPropsEqual,
        areStatePropsEqual = _ref.areStatePropsEqual;
  
    var hasRunAtLeastOnce = false;
    var state = void 0;
    var ownProps = void 0;
    var stateProps = void 0;
    var dispatchProps = void 0;
    var mergedProps = void 0;
  
    function handleFirstCall(firstState, firstOwnProps) {
      state = firstState;
      ownProps = firstOwnProps;
      stateProps = mapStateToProps(state, ownProps);
      dispatchProps = mapDispatchToProps(dispatch, ownProps);
      mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
      hasRunAtLeastOnce = true;
      return mergedProps;
    }
  
    function handleNewPropsAndNewState() {
      stateProps = mapStateToProps(state, ownProps);
  
      if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
  
      mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
      return mergedProps;
    }
  
    function handleNewProps() {
      if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
  
      if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
  
      mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
      return mergedProps;
    }
  
    function handleNewState() {
      var nextStateProps = mapStateToProps(state, ownProps);
      var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
      stateProps = nextStateProps;
  
      if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
  
      return mergedProps;
    }
  
    function handleSubsequentCalls(nextState, nextOwnProps) {
      var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
      var stateChanged = !areStatesEqual(nextState, state);
      state = nextState;
      ownProps = nextOwnProps;
  
      if (propsChanged && stateChanged) return handleNewPropsAndNewState();
      if (propsChanged) return handleNewProps();
      if (stateChanged) return handleNewState();
      return mergedProps;
    }
  
    return function pureFinalPropsSelector(nextState, nextOwnProps) {
      return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
    };
  }
  
  // TODO: Add more comments
  
  // If pure is true, the selector returned by selectorFactory will memoize its results,
  // allowing connectAdvanced's shouldComponentUpdate to return false if final
  // props have not changed. If false, the selector will always return a new
  // object and shouldComponentUpdate will always return true.
  
  function finalPropsSelectorFactory(dispatch, _ref2) {
    var initMapStateToProps = _ref2.initMapStateToProps,
        initMapDispatchToProps = _ref2.initMapDispatchToProps,
        initMergeProps = _ref2.initMergeProps,
        options = _objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);
  
    var mapStateToProps = initMapStateToProps(dispatch, options);
    var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
    var mergeProps = initMergeProps(dispatch, options);
  
    if (true) {
      Object(__WEBPACK_IMPORTED_MODULE_0__verifySubselectors__["a" /* default */])(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
    }
  
    var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  
    return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
  }
  
  /***/ }),
  /* 80 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (immutable) */ __webpack_exports__["a"] = verifySubselectors;
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_warning__ = __webpack_require__(14);
  
  
  function verify(selector, methodName, displayName) {
    if (!selector) {
      throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
    } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
      if (!selector.hasOwnProperty('dependsOnOwnProps')) {
        Object(__WEBPACK_IMPORTED_MODULE_0__utils_warning__["a" /* default */])('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
      }
    }
  }
  
  function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
    verify(mapStateToProps, 'mapStateToProps', displayName);
    verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
    verify(mergeProps, 'mergeProps', displayName);
  }
  
  /***/ }),
  /* 81 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return store; });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(15);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_promise__ = __webpack_require__(82);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_promise__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__(94);
  
  
  
  var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || __WEBPACK_IMPORTED_MODULE_0_redux__["d" /* compose */];
  
  var initialState = {
      util: {
          openCartTopBlock: false,
          openComplementBlock: false,
          openModal: false,
          complement: '',
          count: 0
      }
  };
  
  var store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["e" /* createStore */])(__WEBPACK_IMPORTED_MODULE_2__reducers__["a" /* default */], initialState, composeEnhancers(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["a" /* applyMiddleware */])(__WEBPACK_IMPORTED_MODULE_1_redux_promise___default.a)));
  
  /***/ }),
  /* 82 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = promiseMiddleware;
  
  var _isPromise = _interopRequireDefault(__webpack_require__(83));
  
  var _fluxStandardAction = __webpack_require__(84);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }return target;
  }
  
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }return obj;
  }
  
  function promiseMiddleware(_ref) {
    var dispatch = _ref.dispatch;
    return function (next) {
      return function (action) {
        if (!(0, _fluxStandardAction.isFSA)(action)) {
          return (0, _isPromise.default)(action) ? action.then(dispatch) : next(action);
        }
  
        return (0, _isPromise.default)(action.payload) ? action.payload.then(function (result) {
          return dispatch(_objectSpread({}, action, {
            payload: result
          }));
        }).catch(function (error) {
          dispatch(_objectSpread({}, action, {
            payload: error,
            error: true
          }));
          return Promise.reject(error);
        }) : next(action);
      };
    };
  }
  
  /***/ }),
  /* 83 */
  /***/ (function(module, exports) {
  
  module.exports = isPromise;
  
  function isPromise(obj) {
    return !!obj && ((typeof obj === 'undefined' ? 'undefined' : babelHelpers.typeof(obj)) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
  }
  
  /***/ }),
  /* 84 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _isString2 = __webpack_require__(85);
  
  var _isString3 = _interopRequireDefault(_isString2);
  
  var _isPlainObject2 = __webpack_require__(91);
  
  var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);
  
  exports.isFSA = isFSA;
  exports.isError = isError;
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function isFSA(action) {
    return (0, _isPlainObject3.default)(action) && (0, _isString3.default)(action.type) && Object.keys(action).every(isValidKey);
  }
  
  function isError(action) {
    return isFSA(action) && action.error === true;
  }
  
  function isValidKey(key) {
    return ['type', 'payload', 'error', 'meta'].indexOf(key) > -1;
  }
  
  /***/ }),
  /* 85 */
  /***/ (function(module, exports, __webpack_require__) {
  
  var baseGetTag = __webpack_require__(34),
      isArray = __webpack_require__(90),
      isObjectLike = __webpack_require__(36);
  
  /** `Object#toString` result references. */
  var stringTag = '[object String]';
  
  /**
   * Checks if `value` is classified as a `String` primitive or object.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a string, else `false`.
   * @example
   *
   * _.isString('abc');
   * // => true
   *
   * _.isString(1);
   * // => false
   */
  function isString(value) {
      return typeof value == 'string' || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
  }
  
  module.exports = isString;
  
  /***/ }),
  /* 86 */
  /***/ (function(module, exports, __webpack_require__) {
  
  var freeGlobal = __webpack_require__(87);
  
  /** Detect free variable `self`. */
  var freeSelf = (typeof self === 'undefined' ? 'undefined' : babelHelpers.typeof(self)) == 'object' && self && self.Object === Object && self;
  
  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();
  
  module.exports = root;
  
  /***/ }),
  /* 87 */
  /***/ (function(module, exports, __webpack_require__) {
  
  /* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
  var freeGlobal = (typeof global === 'undefined' ? 'undefined' : babelHelpers.typeof(global)) == 'object' && global && global.Object === Object && global;
  
  module.exports = freeGlobal;
  /* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(17)))
  
  /***/ }),
  /* 88 */
  /***/ (function(module, exports, __webpack_require__) {
  
  var _Symbol = __webpack_require__(35);
  
  /** Used for built-in method references. */
  var objectProto = Object.prototype;
  
  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;
  
  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;
  
  /** Built-in value references. */
  var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;
  
  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag),
        tag = value[symToStringTag];
  
    try {
      value[symToStringTag] = undefined;
      var unmasked = true;
    } catch (e) {}
  
    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }
  
  module.exports = getRawTag;
  
  /***/ }),
  /* 89 */
  /***/ (function(module, exports) {
  
  /** Used for built-in method references. */
  var objectProto = Object.prototype;
  
  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;
  
  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString.call(value);
  }
  
  module.exports = objectToString;
  
  /***/ }),
  /* 90 */
  /***/ (function(module, exports) {
  
  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray = Array.isArray;
  
  module.exports = isArray;
  
  /***/ }),
  /* 91 */
  /***/ (function(module, exports, __webpack_require__) {
  
  var baseGetTag = __webpack_require__(34),
      getPrototype = __webpack_require__(92),
      isObjectLike = __webpack_require__(36);
  
  /** `Object#toString` result references. */
  var objectTag = '[object Object]';
  
  /** Used for built-in method references. */
  var funcProto = Function.prototype,
      objectProto = Object.prototype;
  
  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;
  
  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;
  
  /** Used to infer the `Object` constructor. */
  var objectCtorString = funcToString.call(Object);
  
  /**
   * Checks if `value` is a plain object, that is, an object created by the
   * `Object` constructor or one with a `[[Prototype]]` of `null`.
   *
   * @static
   * @memberOf _
   * @since 0.8.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * _.isPlainObject(new Foo);
   * // => false
   *
   * _.isPlainObject([1, 2, 3]);
   * // => false
   *
   * _.isPlainObject({ 'x': 0, 'y': 0 });
   * // => true
   *
   * _.isPlainObject(Object.create(null));
   * // => true
   */
  function isPlainObject(value) {
    if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
      return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
  }
  
  module.exports = isPlainObject;
  
  /***/ }),
  /* 92 */
  /***/ (function(module, exports, __webpack_require__) {
  
  var overArg = __webpack_require__(93);
  
  /** Built-in value references. */
  var getPrototype = overArg(Object.getPrototypeOf, Object);
  
  module.exports = getPrototype;
  
  /***/ }),
  /* 93 */
  /***/ (function(module, exports) {
  
  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function (arg) {
      return func(transform(arg));
    };
  }
  
  module.exports = overArg;
  
  /***/ }),
  /* 94 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(15);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__complements__ = __webpack_require__(95);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__variation__ = __webpack_require__(115);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order__ = __webpack_require__(116);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util__ = __webpack_require__(117);
  
  
  
  
  
  
  /* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["c" /* combineReducers */])({
      complements: __WEBPACK_IMPORTED_MODULE_1__complements__["a" /* complements */],
      variation: __WEBPACK_IMPORTED_MODULE_2__variation__["a" /* variation */],
      order: __WEBPACK_IMPORTED_MODULE_3__order__["a" /* order */],
      util: __WEBPACK_IMPORTED_MODULE_4__util__["a" /* util */]
  }));
  
  /***/ }),
  /* 95 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return complements; });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_actions__ = __webpack_require__(1);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(2);
  
  
  
  var complements = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["b" /* handleActions */])(babelHelpers.defineProperty({}, __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* FETCH_COMPLEMENTS */], function (state, action) {
      return [].concat(babelHelpers.toConsumableArray(action.payload));
  }), []);
  
  /***/ }),
  /* 96 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* unused harmony export default */
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_invariant__ = __webpack_require__(5);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_invariant__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_isFunction__ = __webpack_require__(10);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_isSymbol__ = __webpack_require__(97);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_isEmpty__ = __webpack_require__(37);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_toString__ = __webpack_require__(38);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_isString__ = __webpack_require__(39);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__constants__ = __webpack_require__(8);
  
  
  
  
  
  
  
  
  function isValidActionType(type) {
    return Object(__WEBPACK_IMPORTED_MODULE_5__utils_isString__["a" /* default */])(type) || Object(__WEBPACK_IMPORTED_MODULE_1__utils_isFunction__["a" /* default */])(type) || Object(__WEBPACK_IMPORTED_MODULE_2__utils_isSymbol__["a" /* default */])(type);
  }
  
  function isValidActionTypes(types) {
    if (Object(__WEBPACK_IMPORTED_MODULE_3__utils_isEmpty__["a" /* default */])(types)) {
      return false;
    }
  
    return types.every(isValidActionType);
  }
  
  function combineActions() {
    for (var _len = arguments.length, actionsTypes = new Array(_len), _key = 0; _key < _len; _key++) {
      actionsTypes[_key] = arguments[_key];
    }
  
    __WEBPACK_IMPORTED_MODULE_0_invariant___default()(isValidActionTypes(actionsTypes), 'Expected action types to be strings, symbols, or action creators');
    var combinedActionType = actionsTypes.map(__WEBPACK_IMPORTED_MODULE_4__utils_toString__["a" /* default */]).join(__WEBPACK_IMPORTED_MODULE_6__constants__["a" /* ACTION_TYPE_DELIMITER */]);
    return {
      toString: function toString() {
        return combinedActionType;
      }
    };
  }
  
  /***/ }),
  /* 97 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony default export */ __webpack_exports__["a"] = (function (value) {
    return (typeof value === 'undefined' ? 'undefined' : babelHelpers.typeof(value)) === 'symbol' || (typeof value === 'undefined' ? 'undefined' : babelHelpers.typeof(value)) === 'object' && Object.prototype.toString.call(value) === '[object Symbol]';
  });
  
  /***/ }),
  /* 98 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony default export */ __webpack_exports__["a"] = (function (value) {
    return value === null;
  });
  
  /***/ }),
  /* 99 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* unused harmony export default */
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_invariant__ = __webpack_require__(5);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_invariant__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_isPlainObject__ = __webpack_require__(9);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_isFunction__ = __webpack_require__(10);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_identity__ = __webpack_require__(19);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_isArray__ = __webpack_require__(100);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_isString__ = __webpack_require__(39);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_isNil__ = __webpack_require__(40);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_getLastElement__ = __webpack_require__(101);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_camelCase__ = __webpack_require__(41);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_arrayToObject__ = __webpack_require__(105);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_flattenActionMap__ = __webpack_require__(106);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_unflattenActionCreators__ = __webpack_require__(107);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__createAction__ = __webpack_require__(18);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__constants__ = __webpack_require__(8);
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }return target;
  }
  
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }return obj;
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  function createActions(actionMap) {
    for (var _len = arguments.length, identityActions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      identityActions[_key - 1] = arguments[_key];
    }
  
    var options = Object(__WEBPACK_IMPORTED_MODULE_1__utils_isPlainObject__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_7__utils_getLastElement__["a" /* default */])(identityActions)) ? identityActions.pop() : {};
    __WEBPACK_IMPORTED_MODULE_0_invariant___default()(identityActions.every(__WEBPACK_IMPORTED_MODULE_5__utils_isString__["a" /* default */]) && (Object(__WEBPACK_IMPORTED_MODULE_5__utils_isString__["a" /* default */])(actionMap) || Object(__WEBPACK_IMPORTED_MODULE_1__utils_isPlainObject__["a" /* default */])(actionMap)), 'Expected optional object followed by string action types');
  
    if (Object(__WEBPACK_IMPORTED_MODULE_5__utils_isString__["a" /* default */])(actionMap)) {
      return actionCreatorsFromIdentityActions([actionMap].concat(identityActions), options);
    }
  
    return _objectSpread({}, actionCreatorsFromActionMap(actionMap, options), actionCreatorsFromIdentityActions(identityActions, options));
  }
  
  function actionCreatorsFromActionMap(actionMap, options) {
    var flatActionMap = Object(__WEBPACK_IMPORTED_MODULE_10__utils_flattenActionMap__["a" /* default */])(actionMap, options);
    var flatActionCreators = actionMapToActionCreators(flatActionMap);
    return Object(__WEBPACK_IMPORTED_MODULE_11__utils_unflattenActionCreators__["a" /* default */])(flatActionCreators, options);
  }
  
  function actionMapToActionCreators(actionMap, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        prefix = _ref.prefix,
        _ref$namespace = _ref.namespace,
        namespace = _ref$namespace === void 0 ? __WEBPACK_IMPORTED_MODULE_13__constants__["b" /* DEFAULT_NAMESPACE */] : _ref$namespace;
  
    function isValidActionMapValue(actionMapValue) {
      if (Object(__WEBPACK_IMPORTED_MODULE_2__utils_isFunction__["a" /* default */])(actionMapValue) || Object(__WEBPACK_IMPORTED_MODULE_6__utils_isNil__["a" /* default */])(actionMapValue)) {
        return true;
      }
  
      if (Object(__WEBPACK_IMPORTED_MODULE_4__utils_isArray__["a" /* default */])(actionMapValue)) {
        var _actionMapValue$ = actionMapValue[0],
            payload = _actionMapValue$ === void 0 ? __WEBPACK_IMPORTED_MODULE_3__utils_identity__["a" /* default */] : _actionMapValue$,
            meta = actionMapValue[1];
        return Object(__WEBPACK_IMPORTED_MODULE_2__utils_isFunction__["a" /* default */])(payload) && Object(__WEBPACK_IMPORTED_MODULE_2__utils_isFunction__["a" /* default */])(meta);
      }
  
      return false;
    }
  
    return Object(__WEBPACK_IMPORTED_MODULE_9__utils_arrayToObject__["a" /* default */])(Object.keys(actionMap), function (partialActionCreators, type) {
      var _objectSpread2;
  
      var actionMapValue = actionMap[type];
      __WEBPACK_IMPORTED_MODULE_0_invariant___default()(isValidActionMapValue(actionMapValue), 'Expected function, undefined, null, or array with payload and meta ' + ("functions for " + type));
      var prefixedType = prefix ? "" + prefix + namespace + type : type;
      var actionCreator = Object(__WEBPACK_IMPORTED_MODULE_4__utils_isArray__["a" /* default */])(actionMapValue) ? __WEBPACK_IMPORTED_MODULE_12__createAction__["a" /* default */].apply(void 0, [prefixedType].concat(actionMapValue)) : Object(__WEBPACK_IMPORTED_MODULE_12__createAction__["a" /* default */])(prefixedType, actionMapValue);
      return _objectSpread({}, partialActionCreators, (_objectSpread2 = {}, _objectSpread2[type] = actionCreator, _objectSpread2));
    });
  }
  
  function actionCreatorsFromIdentityActions(identityActions, options) {
    var actionMap = Object(__WEBPACK_IMPORTED_MODULE_9__utils_arrayToObject__["a" /* default */])(identityActions, function (partialActionMap, type) {
      var _objectSpread3;
  
      return _objectSpread({}, partialActionMap, (_objectSpread3 = {}, _objectSpread3[type] = __WEBPACK_IMPORTED_MODULE_3__utils_identity__["a" /* default */], _objectSpread3));
    });
    var actionCreators = actionMapToActionCreators(actionMap, options);
    return Object(__WEBPACK_IMPORTED_MODULE_9__utils_arrayToObject__["a" /* default */])(Object.keys(actionCreators), function (partialActionCreators, type) {
      var _objectSpread4;
  
      return _objectSpread({}, partialActionCreators, (_objectSpread4 = {}, _objectSpread4[Object(__WEBPACK_IMPORTED_MODULE_8__utils_camelCase__["a" /* default */])(type)] = actionCreators[type], _objectSpread4));
    });
  }
  
  /***/ }),
  /* 100 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony default export */ __webpack_exports__["a"] = (function (value) {
    return Array.isArray(value);
  });
  
  /***/ }),
  /* 101 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony default export */ __webpack_exports__["a"] = (function (array) {
    return array[array.length - 1];
  });
  
  /***/ }),
  /* 102 */
  /***/ (function(module, exports, __webpack_require__) {
  
  
  var space = __webpack_require__(103);
  
  /**
   * Export.
   */
  
  module.exports = toCamelCase;
  
  /**
   * Convert a `string` to camel case.
   *
   * @param {String} string
   * @return {String}
   */
  
  function toCamelCase(string) {
    return space(string).replace(/\s(\w)/g, function (matches, letter) {
      return letter.toUpperCase();
    });
  }
  
  /***/ }),
  /* 103 */
  /***/ (function(module, exports, __webpack_require__) {
  
  
  var clean = __webpack_require__(104);
  
  /**
   * Export.
   */
  
  module.exports = toSpaceCase;
  
  /**
   * Convert a `string` to space case.
   *
   * @param {String} string
   * @return {String}
   */
  
  function toSpaceCase(string) {
    return clean(string).replace(/[\W_]+(.|$)/g, function (matches, match) {
      return match ? ' ' + match : '';
    }).trim();
  }
  
  /***/ }),
  /* 104 */
  /***/ (function(module, exports) {
  
  
  /**
   * Export.
   */
  
  module.exports = toNoCase;
  
  /**
   * Test whether a string is camel-case.
   */
  
  var hasSpace = /\s/;
  var hasSeparator = /(_|-|\.|:)/;
  var hasCamel = /([a-z][A-Z]|[A-Z][a-z])/;
  
  /**
   * Remove any starting case from a `string`, like camel or snake, but keep
   * spaces and punctuation that may be important otherwise.
   *
   * @param {String} string
   * @return {String}
   */
  
  function toNoCase(string) {
    if (hasSpace.test(string)) return string.toLowerCase();
    if (hasSeparator.test(string)) return (unseparate(string) || string).toLowerCase();
    if (hasCamel.test(string)) return uncamelize(string).toLowerCase();
    return string.toLowerCase();
  }
  
  /**
   * Separator splitter.
   */
  
  var separatorSplitter = /[\W_]+(.|$)/g;
  
  /**
   * Un-separate a `string`.
   *
   * @param {String} string
   * @return {String}
   */
  
  function unseparate(string) {
    return string.replace(separatorSplitter, function (m, next) {
      return next ? ' ' + next : '';
    });
  }
  
  /**
   * Camelcase splitter.
   */
  
  var camelSplitter = /(.)([A-Z]+)/g;
  
  /**
   * Un-camelcase a `string`.
   *
   * @param {String} string
   * @return {String}
   */
  
  function uncamelize(string) {
    return string.replace(camelSplitter, function (m, previous, uppers) {
      return previous + ' ' + uppers.toLowerCase().split('').join(' ');
    });
  }
  
  /***/ }),
  /* 105 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony default export */ __webpack_exports__["a"] = (function (array, callback) {
    return array.reduce(function (partialObject, element) {
      return callback(partialObject, element);
    }, {});
  });
  
  /***/ }),
  /* 106 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isPlainObject__ = __webpack_require__(9);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flattenWhenNode__ = __webpack_require__(42);
  
  
  /* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__flattenWhenNode__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__isPlainObject__["a" /* default */]));
  
  /***/ }),
  /* 107 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (immutable) */ __webpack_exports__["a"] = unflattenActionCreators;
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(8);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isEmpty__ = __webpack_require__(37);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__camelCase__ = __webpack_require__(41);
  
  
  
  function unflattenActionCreators(flatActionCreators, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$namespace = _ref.namespace,
        namespace = _ref$namespace === void 0 ? __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* DEFAULT_NAMESPACE */] : _ref$namespace,
        prefix = _ref.prefix;
  
    function unflatten(flatActionType, partialNestedActionCreators, partialFlatActionTypePath) {
      var nextNamespace = Object(__WEBPACK_IMPORTED_MODULE_2__camelCase__["a" /* default */])(partialFlatActionTypePath.shift());
  
      if (Object(__WEBPACK_IMPORTED_MODULE_1__isEmpty__["a" /* default */])(partialFlatActionTypePath)) {
        partialNestedActionCreators[nextNamespace] = flatActionCreators[flatActionType];
      } else {
        if (!partialNestedActionCreators[nextNamespace]) {
          partialNestedActionCreators[nextNamespace] = {};
        }
  
        unflatten(flatActionType, partialNestedActionCreators[nextNamespace], partialFlatActionTypePath);
      }
    }
  
    var nestedActionCreators = {};
    Object.getOwnPropertyNames(flatActionCreators).forEach(function (type) {
      var unprefixedType = prefix ? type.replace("" + prefix + namespace, '') : type;
      return unflatten(type, nestedActionCreators, unprefixedType.split(namespace));
    });
    return nestedActionCreators;
  }
  
  /***/ }),
  /* 108 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_just_curry_it__ = __webpack_require__(109);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_just_curry_it___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_just_curry_it__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__createAction__ = __webpack_require__(18);
  
  
  /* unused harmony default export */ var _unused_webpack_default_export = (function (type, payloadCreator) {
    return __WEBPACK_IMPORTED_MODULE_0_just_curry_it___default()(Object(__WEBPACK_IMPORTED_MODULE_1__createAction__["a" /* default */])(type, payloadCreator), payloadCreator.length);
  });
  
  /***/ }),
  /* 109 */
  /***/ (function(module, exports) {
  
  module.exports = curry;
  
  /*
    function add(a, b, c) {
      return a + b + c;
    }
    curry(add)(1)(2)(3); // 6
    curry(add)(1)(2)(2); // 5
    curry(add)(2)(4, 3); // 9
  
    function add(...args) {
      return args.reduce((sum, n) => sum + n, 0)
    }
    var curryAdd4 = curry(add, 4)
    curryAdd4(1)(2, 3)(4); // 10
  
    function converter(ratio, input) {
      return (input*ratio).toFixed(1);
    }
    const curriedConverter = curry(converter)
    const milesToKm = curriedConverter(1.62);
    milesToKm(35); // 56.7
    milesToKm(10); // 16.2
  */
  
  function curry(fn, arity) {
    return function curried() {
      if (arity == null) {
        arity = fn.length;
      }
      var args = [].slice.call(arguments);
      if (args.length >= arity) {
        return fn.apply(this, args);
      } else {
        return function () {
          return curried.apply(this, args.concat([].slice.call(arguments)));
        };
      }
    };
  }
  
  /***/ }),
  /* 110 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony default export */ __webpack_exports__["a"] = (function (value) {
    return value === undefined;
  });
  
  /***/ }),
  /* 111 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (immutable) */ __webpack_exports__["a"] = handleActions;
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reduce_reducers__ = __webpack_require__(112);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant__ = __webpack_require__(5);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_invariant__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_isPlainObject__ = __webpack_require__(9);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_isMap__ = __webpack_require__(11);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_ownKeys__ = __webpack_require__(20);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_flattenReducerMap__ = __webpack_require__(113);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__handleAction__ = __webpack_require__(44);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_get__ = __webpack_require__(43);
  
  
  
  
  
  
  
  
  function handleActions(handlers, defaultState, options) {
    if (options === void 0) {
      options = {};
    }
  
    __WEBPACK_IMPORTED_MODULE_1_invariant___default()(Object(__WEBPACK_IMPORTED_MODULE_2__utils_isPlainObject__["a" /* default */])(handlers) || Object(__WEBPACK_IMPORTED_MODULE_3__utils_isMap__["a" /* default */])(handlers), 'Expected handlers to be a plain object.');
    var flattenedReducerMap = Object(__WEBPACK_IMPORTED_MODULE_5__utils_flattenReducerMap__["a" /* default */])(handlers, options);
    var reducers = Object(__WEBPACK_IMPORTED_MODULE_4__utils_ownKeys__["a" /* default */])(flattenedReducerMap).map(function (type) {
      return Object(__WEBPACK_IMPORTED_MODULE_6__handleAction__["a" /* default */])(type, Object(__WEBPACK_IMPORTED_MODULE_7__utils_get__["a" /* default */])(type, flattenedReducerMap), defaultState);
    });
    var reducer = __WEBPACK_IMPORTED_MODULE_0_reduce_reducers__["a" /* default */].apply(void 0, reducers.concat([defaultState]));
    return function (state, action) {
      if (state === void 0) {
        state = defaultState;
      }
  
      return reducer(state, action);
    };
  }
  
  /***/ }),
  /* 112 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony default export */ __webpack_exports__["a"] = (function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
  
    var initialState = typeof args[args.length - 1] !== 'function' && args.pop();
    var reducers = args;
  
    if (typeof initialState === 'undefined') {
      throw new TypeError('The initial state may not be undefined. If you do not want to set a value for this reducer, you can use null instead of undefined.');
    }
  
    return function (prevState, value) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }
  
      var prevStateIsUndefined = typeof prevState === 'undefined';
      var valueIsUndefined = typeof value === 'undefined';
  
      if (prevStateIsUndefined && valueIsUndefined && initialState) {
        return initialState;
      }
  
      return reducers.reduce(function (newState, reducer) {
        return reducer.apply(undefined, [newState, value].concat(args));
      }, prevStateIsUndefined && !valueIsUndefined && initialState ? initialState : prevState);
    };
  });
  
  /***/ }),
  /* 113 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isPlainObject__ = __webpack_require__(9);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isMap__ = __webpack_require__(11);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hasGeneratorInterface__ = __webpack_require__(114);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flattenWhenNode__ = __webpack_require__(42);
  
  
  
  
  /* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3__flattenWhenNode__["a" /* default */])(function (node) {
    return (Object(__WEBPACK_IMPORTED_MODULE_0__isPlainObject__["a" /* default */])(node) || Object(__WEBPACK_IMPORTED_MODULE_1__isMap__["a" /* default */])(node)) && !Object(__WEBPACK_IMPORTED_MODULE_2__hasGeneratorInterface__["a" /* default */])(node);
  }));
  
  /***/ }),
  /* 114 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (immutable) */ __webpack_exports__["a"] = hasGeneratorInterface;
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ownKeys__ = __webpack_require__(20);
  
  function hasGeneratorInterface(handler) {
    var keys = Object(__WEBPACK_IMPORTED_MODULE_0__ownKeys__["a" /* default */])(handler);
    var hasOnlyInterfaceNames = keys.every(function (ownKey) {
      return ownKey === 'next' || ownKey === 'throw';
    });
    return keys.length && keys.length <= 2 && hasOnlyInterfaceNames;
  }
  
  /***/ }),
  /* 115 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return variation; });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_actions__ = __webpack_require__(1);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(2);
  var _handleActions;
  
  
  
  
  var variation = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["b" /* handleActions */])((_handleActions = {}, babelHelpers.defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_1__constants__["d" /* FETCH_VARIATION */], function (state, action) {
      return action.payload;
  }), babelHelpers.defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_1__constants__["l" /* SET_QUANTITY_VARIATION */], function (state, action) {
      var quantity = action.payload;
      return babelHelpers.extends({}, state, { quantity: quantity });
  }), _handleActions), {});
  
  /***/ }),
  /* 116 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return order; });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_actions__ = __webpack_require__(1);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(2);
  var _handleActions;
  
  
  
  
  var order = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["b" /* handleActions */])((_handleActions = {}, babelHelpers.defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* FETCH_ORDER */], function (state, action) {
      return action.payload;
  }), babelHelpers.defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_1__constants__["n" /* UPDATE_ORDER */], function (state, action) {
      var orderItemPayload = action.payload;
      var id = orderItemPayload.id;
  
      var order_items_store = state.orderItems;
      var initialOrderItems = [];
      var orderItems = order_items_store.reduce(function (acc, order_item) {
          if (order_item.id === id) {
              return [].concat(babelHelpers.toConsumableArray(acc), [orderItemPayload]);
          } else {
              return [].concat(babelHelpers.toConsumableArray(acc), [order_item]);
          }
      }, initialOrderItems);
      var totalPrice = orderItems.reduce(function (sum, item) {
          return sum + Number(item.price);
      }, 0).toFixed(2);
      var count = orderItems.reduce(function (sum, item) {
          return sum + item.quantity;
      }, 0);
  
      return babelHelpers.extends({}, state, { totalPrice: totalPrice, count: count, orderItems: orderItems });
  }), babelHelpers.defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_1__constants__["m" /* UPDATE_CART_ORDER */], function (state, action) {
      var orderItemPayload = action.payload;
      var idOrder = orderItemPayload.idOrder,
          id = orderItemPayload.id;
  
      var order_items_store = state.orderItems;
      var initialOrderItems = [];
      var orderItems = order_items_store.reduce(function (acc, order_item) {
          if (order_item.id === id) {
              return [].concat(babelHelpers.toConsumableArray(acc), [orderItemPayload]);
          } else {
              return [].concat(babelHelpers.toConsumableArray(acc), [order_item]);
          }
      }, initialOrderItems);
      var exist = order_items_store.some(function (order_item) {
          return order_item.id === id;
      });
      if (!exist) {
          orderItems.push(orderItemPayload);
      };
      var totalPrice = orderItems.reduce(function (sum, item) {
          return sum + Number(item.price);
      }, 0).toFixed(2);
      var count = orderItems.reduce(function (sum, item) {
          return sum + item.quantity;
      }, 0);
      if (state.id !== 0) {
          return babelHelpers.extends({}, state, { totalPrice: totalPrice, count: count, orderItems: orderItems });
      } else {
          return babelHelpers.extends({}, state, { id: idOrder, totalPrice: totalPrice, count: count, orderItems: orderItems });
      }
  }), babelHelpers.defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* DELETE_ITEM_ORDER */], function (state, action) {
      var orderItems = state.orderItems.filter(function (order_item) {
          return order_item.id !== action.payload;
      });
      var totalPrice = orderItems.reduce(function (sum, item) {
          return sum + Number(item.price);
      }, 0).toFixed(2);
      var count = orderItems.reduce(function (sum, item) {
          return sum + item.quantity;
      }, 0);
      return babelHelpers.extends({}, state, { totalPrice: totalPrice, count: count, orderItems: orderItems });
  }), _handleActions), {});
  
  /***/ }),
  /* 117 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return util; });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_actions__ = __webpack_require__(1);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(2);
  var _handleActions;
  
  
  
  
  var util = Object(__WEBPACK_IMPORTED_MODULE_0_redux_actions__["b" /* handleActions */])((_handleActions = {}, babelHelpers.defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_1__constants__["j" /* SET_OPEN_COMPLEMENT_BLOCK */], function (state, action) {
      var openComplementBlock = action.payload;
      return babelHelpers.extends({}, state, { openComplementBlock: openComplementBlock });
  }), babelHelpers.defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_1__constants__["i" /* SET_OPEN_CART_TOP_BLOCK */], function (state, action) {
      var openCartTopBlock = action.payload;
      return babelHelpers.extends({}, state, { openCartTopBlock: openCartTopBlock });
  }), babelHelpers.defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_1__constants__["k" /* SET_OPEN_MODAL */], function (state, action) {
      var openModal = action.payload;
      return babelHelpers.extends({}, state, { openModal: openModal });
  }), babelHelpers.defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_1__constants__["h" /* SET_COUNT_CART */], function (state, action) {
      var count = action.payload;
      return babelHelpers.extends({}, state, { count: count });
  }), babelHelpers.defineProperty(_handleActions, __WEBPACK_IMPORTED_MODULE_1__constants__["g" /* SET_COMPLEMENT */], function (state, action) {
      var complement = action.payload;
      return babelHelpers.extends({}, state, { complement: complement });
  }), _handleActions), {});
  
  /***/ }),
  /* 118 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(7);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(125);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selectors_complements__ = __webpack_require__(147);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ComplementItem_ComplementItem__ = __webpack_require__(158);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__selectors_order__ = __webpack_require__(23);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__selectors_variation__ = __webpack_require__(148);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_deleteItemInCart__ = __webpack_require__(141);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actions_addProductInCart__ = __webpack_require__(145);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__actions_setOpenBlock__ = __webpack_require__(51);
  
  
  
  
  
  
  
  
  
  
  
  
  var Complements = function (_Component) {
    babelHelpers.inherits(Complements, _Component);
  
    function Complements() {
      var _ref;
  
      var _temp, _this, _ret;
  
      babelHelpers.classCallCheck(this, Complements);
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = Complements.__proto__ || Object.getPrototypeOf(Complements)).call.apply(_ref, [this].concat(args))), _this), _this.AddProductos = function (id) {
        var payload = {
          order_item_data: {
            "purchased_entity_type": 'commerce_product_variation',
            "purchased_entity_id": id,
            "quantity": "1"
          }
        };
        if (!_this.searchParent()) {
          var productParent = {
            order_item_data: {
              "purchased_entity_type": 'commerce_product_variation',
              "purchased_entity_id": _this.props.variation.id,
              "quantity": "1"
            }
          };
          _this.props.addProductInCart(productParent);
        }
        _this.props.addProductInCart(payload);
      }, _this.doItemDelete = function (item) {
        _this.props.deleteItemInCart(item.idOrder, item.id);
      }, _this.handleComplementClick = function (item) {
        var change = _this.props.order.orderItems.some(function (order_item) {
          return order_item.purchasedEntity == +item.cid;
        });
        var orderItem = _this.props.order.orderItems.find(function (order_item) {
          return order_item.purchasedEntity == +item.cid;
        });
        if (change) {
          _this.doItemDelete(orderItem);
        } else {
          _this.AddProductos(item.cid);
        }
      }, _this.strToComponents = function (item) {
        return item.map(function (complement) {
          var classes = __WEBPACK_IMPORTED_MODULE_3_classnames___default()('complement__item', { 'in-list': _this.BuscarClase(complement) });
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ComplementItem_ComplementItem__["a" /* default */], {
            key: complement.cid,
            data: complement,
            classes: classes,
            onComplementItemClick: _this.handleComplementClick });
        });
      }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
    }
  
    babelHelpers.createClass(Complements, [{
      key: 'componentDidMount',
      value: function componentDidMount() {}
    }, {
      key: 'BuscarClase',
      value: function BuscarClase(item) {
        return this.props.order.orderItems.some(function (order_item) {
          return order_item.purchasedEntity == +item.cid;
        });
      }
    }, {
      key: 'searchParent',
      value: function searchParent() {
        var _this2 = this;
  
        return this.props.order.orderItems.some(function (order_item) {
          return order_item.purchasedEntity == +_this2.props.variation.id;
        });
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            complement = _props.complement,
            type = _props.type;
  
        return complement ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'modal-card hero is-white' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { 'class': 'title-filtro' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'h3',
              null,
              type
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'content complementos__box__item' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'columns is-centered is-multiline' },
              this.strToComponents(complement.data)
            )
          )
        ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'loader' });
      }
    }]);
    return Complements;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
  
  Complements.propTypes = {
    type: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
    complement: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
    order: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
    addProductInCart: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    deleteItemInCart: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    setOpenComplementBlock: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
  };
  
  var mapStateToProps = function mapStateToProps(state, props) {
    return {
      complement: Object(__WEBPACK_IMPORTED_MODULE_4__selectors_complements__["a" /* getComplementByType */])(state, props),
      order: Object(__WEBPACK_IMPORTED_MODULE_6__selectors_order__["a" /* getOrder */])(state),
      variation: Object(__WEBPACK_IMPORTED_MODULE_7__selectors_variation__["a" /* getVariation */])(state)
    };
  };
  /* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps, {
    addProductInCart: __WEBPACK_IMPORTED_MODULE_9__actions_addProductInCart__["a" /* addProductInCart */],
    deleteItemInCart: __WEBPACK_IMPORTED_MODULE_8__actions_deleteItemInCart__["a" /* deleteItemInCart */],
    setOpenComplementBlock: __WEBPACK_IMPORTED_MODULE_10__actions_setOpenBlock__["b" /* setOpenComplementBlock */]
  })(Complements));
  
  /***/ }),
  /* 119 */
  /***/ (function(module, exports, __webpack_require__) {
  
  
  /**
   * Expose `Emitter`.
   */
  
  if (true) {
    module.exports = Emitter;
  }
  
  /**
   * Initialize a new `Emitter`.
   *
   * @api public
   */
  
  function Emitter(obj) {
    if (obj) return mixin(obj);
  };
  
  /**
   * Mixin the emitter properties.
   *
   * @param {Object} obj
   * @return {Object}
   * @api private
   */
  
  function mixin(obj) {
    for (var key in Emitter.prototype) {
      obj[key] = Emitter.prototype[key];
    }
    return obj;
  }
  
  /**
   * Listen on the given `event` with `fn`.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */
  
  Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
    this._callbacks = this._callbacks || {};
    (this._callbacks['$' + event] = this._callbacks['$' + event] || []).push(fn);
    return this;
  };
  
  /**
   * Adds an `event` listener that will be invoked a single
   * time then automatically removed.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */
  
  Emitter.prototype.once = function (event, fn) {
    function on() {
      this.off(event, on);
      fn.apply(this, arguments);
    }
  
    on.fn = fn;
    this.on(event, on);
    return this;
  };
  
  /**
   * Remove the given callback for `event` or all
   * registered callbacks.
   *
   * @param {String} event
   * @param {Function} fn
   * @return {Emitter}
   * @api public
   */
  
  Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
    this._callbacks = this._callbacks || {};
  
    // all
    if (0 == arguments.length) {
      this._callbacks = {};
      return this;
    }
  
    // specific event
    var callbacks = this._callbacks['$' + event];
    if (!callbacks) return this;
  
    // remove all handlers
    if (1 == arguments.length) {
      delete this._callbacks['$' + event];
      return this;
    }
  
    // remove specific handler
    var cb;
    for (var i = 0; i < callbacks.length; i++) {
      cb = callbacks[i];
      if (cb === fn || cb.fn === fn) {
        callbacks.splice(i, 1);
        break;
      }
    }
    return this;
  };
  
  /**
   * Emit `event` with the given args.
   *
   * @param {String} event
   * @param {Mixed} ...
   * @return {Emitter}
   */
  
  Emitter.prototype.emit = function (event) {
    this._callbacks = this._callbacks || {};
    var args = [].slice.call(arguments, 1),
        callbacks = this._callbacks['$' + event];
  
    if (callbacks) {
      callbacks = callbacks.slice(0);
      for (var i = 0, len = callbacks.length; i < len; ++i) {
        callbacks[i].apply(this, args);
      }
    }
  
    return this;
  };
  
  /**
   * Return array of callbacks for `event`.
   *
   * @param {String} event
   * @return {Array}
   * @api public
   */
  
  Emitter.prototype.listeners = function (event) {
    this._callbacks = this._callbacks || {};
    return this._callbacks['$' + event] || [];
  };
  
  /**
   * Check if this emitter has `event` handlers.
   *
   * @param {String} event
   * @return {Boolean}
   * @api public
   */
  
  Emitter.prototype.hasListeners = function (event) {
    return !!this.listeners(event).length;
  };
  
  /***/ }),
  /* 120 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  /**
   * Module of mixed-in functions shared between node and client code
   */
  
  var isObject = __webpack_require__(45);
  
  /**
   * Expose `RequestBase`.
   */
  
  module.exports = RequestBase;
  
  /**
   * Initialize a new `RequestBase`.
   *
   * @api public
   */
  
  function RequestBase(obj) {
    if (obj) return mixin(obj);
  }
  
  /**
   * Mixin the prototype properties.
   *
   * @param {Object} obj
   * @return {Object}
   * @api private
   */
  
  function mixin(obj) {
    for (var key in RequestBase.prototype) {
      obj[key] = RequestBase.prototype[key];
    }
    return obj;
  }
  
  /**
   * Clear previous timeout.
   *
   * @return {Request} for chaining
   * @api public
   */
  
  RequestBase.prototype.clearTimeout = function _clearTimeout() {
    clearTimeout(this._timer);
    clearTimeout(this._responseTimeoutTimer);
    delete this._timer;
    delete this._responseTimeoutTimer;
    return this;
  };
  
  /**
   * Override default response body parser
   *
   * This function will be called to convert incoming data into request.body
   *
   * @param {Function}
   * @api public
   */
  
  RequestBase.prototype.parse = function parse(fn) {
    this._parser = fn;
    return this;
  };
  
  /**
   * Set format of binary response body.
   * In browser valid formats are 'blob' and 'arraybuffer',
   * which return Blob and ArrayBuffer, respectively.
   *
   * In Node all values result in Buffer.
   *
   * Examples:
   *
   *      req.get('/')
   *        .responseType('blob')
   *        .end(callback);
   *
   * @param {String} val
   * @return {Request} for chaining
   * @api public
   */
  
  RequestBase.prototype.responseType = function (val) {
    this._responseType = val;
    return this;
  };
  
  /**
   * Override default request body serializer
   *
   * This function will be called to convert data set via .send or .attach into payload to send
   *
   * @param {Function}
   * @api public
   */
  
  RequestBase.prototype.serialize = function serialize(fn) {
    this._serializer = fn;
    return this;
  };
  
  /**
   * Set timeouts.
   *
   * - response timeout is time between sending request and receiving the first byte of the response. Includes DNS and connection time.
   * - deadline is the time from start of the request to receiving response body in full. If the deadline is too short large files may not load at all on slow connections.
   *
   * Value of 0 or false means no timeout.
   *
   * @param {Number|Object} ms or {response, deadline}
   * @return {Request} for chaining
   * @api public
   */
  
  RequestBase.prototype.timeout = function timeout(options) {
    if (!options || 'object' !== (typeof options === 'undefined' ? 'undefined' : babelHelpers.typeof(options))) {
      this._timeout = options;
      this._responseTimeout = 0;
      return this;
    }
  
    for (var option in options) {
      switch (option) {
        case 'deadline':
          this._timeout = options.deadline;
          break;
        case 'response':
          this._responseTimeout = options.response;
          break;
        default:
          console.warn("Unknown timeout option", option);
      }
    }
    return this;
  };
  
  /**
   * Set number of retry attempts on error.
   *
   * Failed requests will be retried 'count' times if timeout or err.code >= 500.
   *
   * @param {Number} count
   * @param {Function} [fn]
   * @return {Request} for chaining
   * @api public
   */
  
  RequestBase.prototype.retry = function retry(count, fn) {
    // Default to 1 if no count passed or true
    if (arguments.length === 0 || count === true) count = 1;
    if (count <= 0) count = 0;
    this._maxRetries = count;
    this._retries = 0;
    this._retryCallback = fn;
    return this;
  };
  
  var ERROR_CODES = ['ECONNRESET', 'ETIMEDOUT', 'EADDRINFO', 'ESOCKETTIMEDOUT'];
  
  /**
   * Determine if a request should be retried.
   * (Borrowed from segmentio/superagent-retry)
   *
   * @param {Error} err
   * @param {Response} [res]
   * @returns {Boolean}
   */
  RequestBase.prototype._shouldRetry = function (err, res) {
    if (!this._maxRetries || this._retries++ >= this._maxRetries) {
      return false;
    }
    if (this._retryCallback) {
      try {
        var override = this._retryCallback(err, res);
        if (override === true) return true;
        if (override === false) return false;
        // undefined falls back to defaults
      } catch (e) {
        console.error(e);
      }
    }
    if (res && res.status && res.status >= 500 && res.status != 501) return true;
    if (err) {
      if (err.code && ~ERROR_CODES.indexOf(err.code)) return true;
      // Superagent timeout
      if (err.timeout && err.code == 'ECONNABORTED') return true;
      if (err.crossDomain) return true;
    }
    return false;
  };
  
  /**
   * Retry request
   *
   * @return {Request} for chaining
   * @api private
   */
  
  RequestBase.prototype._retry = function () {
  
    this.clearTimeout();
  
    // node
    if (this.req) {
      this.req = null;
      this.req = this.request();
    }
  
    this._aborted = false;
    this.timedout = false;
  
    return this._end();
  };
  
  /**
   * Promise support
   *
   * @param {Function} resolve
   * @param {Function} [reject]
   * @return {Request}
   */
  
  RequestBase.prototype.then = function then(resolve, reject) {
    if (!this._fullfilledPromise) {
      var self = this;
      if (this._endCalled) {
        console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises");
      }
      this._fullfilledPromise = new Promise(function (innerResolve, innerReject) {
        self.end(function (err, res) {
          if (err) innerReject(err);else innerResolve(res);
        });
      });
    }
    return this._fullfilledPromise.then(resolve, reject);
  };
  
  RequestBase.prototype['catch'] = function (cb) {
    return this.then(undefined, cb);
  };
  
  /**
   * Allow for extension
   */
  
  RequestBase.prototype.use = function use(fn) {
    fn(this);
    return this;
  };
  
  RequestBase.prototype.ok = function (cb) {
    if ('function' !== typeof cb) throw Error("Callback required");
    this._okCallback = cb;
    return this;
  };
  
  RequestBase.prototype._isResponseOK = function (res) {
    if (!res) {
      return false;
    }
  
    if (this._okCallback) {
      return this._okCallback(res);
    }
  
    return res.status >= 200 && res.status < 300;
  };
  
  /**
   * Get request header `field`.
   * Case-insensitive.
   *
   * @param {String} field
   * @return {String}
   * @api public
   */
  
  RequestBase.prototype.get = function (field) {
    return this._header[field.toLowerCase()];
  };
  
  /**
   * Get case-insensitive header `field` value.
   * This is a deprecated internal API. Use `.get(field)` instead.
   *
   * (getHeader is no longer used internally by the superagent code base)
   *
   * @param {String} field
   * @return {String}
   * @api private
   * @deprecated
   */
  
  RequestBase.prototype.getHeader = RequestBase.prototype.get;
  
  /**
   * Set header `field` to `val`, or multiple fields with one object.
   * Case-insensitive.
   *
   * Examples:
   *
   *      req.get('/')
   *        .set('Accept', 'application/json')
   *        .set('X-API-Key', 'foobar')
   *        .end(callback);
   *
   *      req.get('/')
   *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
   *        .end(callback);
   *
   * @param {String|Object} field
   * @param {String} val
   * @return {Request} for chaining
   * @api public
   */
  
  RequestBase.prototype.set = function (field, val) {
    if (isObject(field)) {
      for (var key in field) {
        this.set(key, field[key]);
      }
      return this;
    }
    this._header[field.toLowerCase()] = val;
    this.header[field] = val;
    return this;
  };
  
  /**
   * Remove header `field`.
   * Case-insensitive.
   *
   * Example:
   *
   *      req.get('/')
   *        .unset('User-Agent')
   *        .end(callback);
   *
   * @param {String} field
   */
  RequestBase.prototype.unset = function (field) {
    delete this._header[field.toLowerCase()];
    delete this.header[field];
    return this;
  };
  
  /**
   * Write the field `name` and `val`, or multiple fields with one object
   * for "multipart/form-data" request bodies.
   *
   * ``` js
   * request.post('/upload')
   *   .field('foo', 'bar')
   *   .end(callback);
   *
   * request.post('/upload')
   *   .field({ foo: 'bar', baz: 'qux' })
   *   .end(callback);
   * ```
   *
   * @param {String|Object} name
   * @param {String|Blob|File|Buffer|fs.ReadStream} val
   * @return {Request} for chaining
   * @api public
   */
  RequestBase.prototype.field = function (name, val) {
    // name should be either a string or an object.
    if (null === name || undefined === name) {
      throw new Error('.field(name, val) name can not be empty');
    }
  
    if (this._data) {
      console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
    }
  
    if (isObject(name)) {
      for (var key in name) {
        this.field(key, name[key]);
      }
      return this;
    }
  
    if (Array.isArray(val)) {
      for (var i in val) {
        this.field(name, val[i]);
      }
      return this;
    }
  
    // val should be defined now
    if (null === val || undefined === val) {
      throw new Error('.field(name, val) val can not be empty');
    }
    if ('boolean' === typeof val) {
      val = '' + val;
    }
    this._getFormData().append(name, val);
    return this;
  };
  
  /**
   * Abort the request, and clear potential timeout.
   *
   * @return {Request}
   * @api public
   */
  RequestBase.prototype.abort = function () {
    if (this._aborted) {
      return this;
    }
    this._aborted = true;
    this.xhr && this.xhr.abort(); // browser
    this.req && this.req.abort(); // node
    this.clearTimeout();
    this.emit('abort');
    return this;
  };
  
  RequestBase.prototype._auth = function (user, pass, options, base64Encoder) {
    switch (options.type) {
      case 'basic':
        this.set('Authorization', 'Basic ' + base64Encoder(user + ':' + pass));
        break;
  
      case 'auto':
        this.username = user;
        this.password = pass;
        break;
  
      case 'bearer':
        // usage would be .auth(accessToken, { type: 'bearer' })
        this.set('Authorization', 'Bearer ' + user);
        break;
    }
    return this;
  };
  
  /**
   * Enable transmission of cookies with x-domain requests.
   *
   * Note that for this to work the origin must not be
   * using "Access-Control-Allow-Origin" with a wildcard,
   * and also must set "Access-Control-Allow-Credentials"
   * to "true".
   *
   * @api public
   */
  
  RequestBase.prototype.withCredentials = function (on) {
    // This is browser-only functionality. Node side is no-op.
    if (on == undefined) on = true;
    this._withCredentials = on;
    return this;
  };
  
  /**
   * Set the max redirects to `n`. Does noting in browser XHR implementation.
   *
   * @param {Number} n
   * @return {Request} for chaining
   * @api public
   */
  
  RequestBase.prototype.redirects = function (n) {
    this._maxRedirects = n;
    return this;
  };
  
  /**
   * Maximum size of buffered response body, in bytes. Counts uncompressed size.
   * Default 200MB.
   *
   * @param {Number} n
   * @return {Request} for chaining
   */
  RequestBase.prototype.maxResponseSize = function (n) {
    if ('number' !== typeof n) {
      throw TypeError("Invalid argument");
    }
    this._maxResponseSize = n;
    return this;
  };
  
  /**
   * Convert to a plain javascript object (not JSON string) of scalar properties.
   * Note as this method is designed to return a useful non-this value,
   * it cannot be chained.
   *
   * @return {Object} describing method, url, and data of this request
   * @api public
   */
  
  RequestBase.prototype.toJSON = function () {
    return {
      method: this.method,
      url: this.url,
      data: this._data,
      headers: this._header
    };
  };
  
  /**
   * Send `data` as the request body, defaulting the `.type()` to "json" when
   * an object is given.
   *
   * Examples:
   *
   *       // manual json
   *       request.post('/user')
   *         .type('json')
   *         .send('{"name":"tj"}')
   *         .end(callback)
   *
   *       // auto json
   *       request.post('/user')
   *         .send({ name: 'tj' })
   *         .end(callback)
   *
   *       // manual x-www-form-urlencoded
   *       request.post('/user')
   *         .type('form')
   *         .send('name=tj')
   *         .end(callback)
   *
   *       // auto x-www-form-urlencoded
   *       request.post('/user')
   *         .type('form')
   *         .send({ name: 'tj' })
   *         .end(callback)
   *
   *       // defaults to x-www-form-urlencoded
   *      request.post('/user')
   *        .send('name=tobi')
   *        .send('species=ferret')
   *        .end(callback)
   *
   * @param {String|Object} data
   * @return {Request} for chaining
   * @api public
   */
  
  RequestBase.prototype.send = function (data) {
    var isObj = isObject(data);
    var type = this._header['content-type'];
  
    if (this._formData) {
      console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
    }
  
    if (isObj && !this._data) {
      if (Array.isArray(data)) {
        this._data = [];
      } else if (!this._isHost(data)) {
        this._data = {};
      }
    } else if (data && this._data && this._isHost(this._data)) {
      throw Error("Can't merge these send calls");
    }
  
    // merge
    if (isObj && isObject(this._data)) {
      for (var key in data) {
        this._data[key] = data[key];
      }
    } else if ('string' == typeof data) {
      // default to x-www-form-urlencoded
      if (!type) this.type('form');
      type = this._header['content-type'];
      if ('application/x-www-form-urlencoded' == type) {
        this._data = this._data ? this._data + '&' + data : data;
      } else {
        this._data = (this._data || '') + data;
      }
    } else {
      this._data = data;
    }
  
    if (!isObj || this._isHost(data)) {
      return this;
    }
  
    // default to json
    if (!type) this.type('json');
    return this;
  };
  
  /**
   * Sort `querystring` by the sort function
   *
   *
   * Examples:
   *
   *       // default order
   *       request.get('/user')
   *         .query('name=Nick')
   *         .query('search=Manny')
   *         .sortQuery()
   *         .end(callback)
   *
   *       // customized sort function
   *       request.get('/user')
   *         .query('name=Nick')
   *         .query('search=Manny')
   *         .sortQuery(function(a, b){
   *           return a.length - b.length;
   *         })
   *         .end(callback)
   *
   *
   * @param {Function} sort
   * @return {Request} for chaining
   * @api public
   */
  
  RequestBase.prototype.sortQuery = function (sort) {
    // _sort default to true but otherwise can be a function or boolean
    this._sort = typeof sort === 'undefined' ? true : sort;
    return this;
  };
  
  /**
   * Compose querystring to append to req.url
   *
   * @api private
   */
  RequestBase.prototype._finalizeQueryString = function () {
    var query = this._query.join('&');
    if (query) {
      this.url += (this.url.indexOf('?') >= 0 ? '&' : '?') + query;
    }
    this._query.length = 0; // Makes the call idempotent
  
    if (this._sort) {
      var index = this.url.indexOf('?');
      if (index >= 0) {
        var queryArr = this.url.substring(index + 1).split('&');
        if ('function' === typeof this._sort) {
          queryArr.sort(this._sort);
        } else {
          queryArr.sort();
        }
        this.url = this.url.substring(0, index) + '?' + queryArr.join('&');
      }
    }
  };
  
  // For backwards compat only
  RequestBase.prototype._appendQueryString = function () {
    console.trace("Unsupported");
  };
  
  /**
   * Invoke callback with timeout error.
   *
   * @api private
   */
  
  RequestBase.prototype._timeoutError = function (reason, timeout, errno) {
    if (this._aborted) {
      return;
    }
    var err = new Error(reason + timeout + 'ms exceeded');
    err.timeout = timeout;
    err.code = 'ECONNABORTED';
    err.errno = errno;
    this.timedout = true;
    this.abort();
    this.callback(err);
  };
  
  RequestBase.prototype._setTimeouts = function () {
    var self = this;
  
    // deadline
    if (this._timeout && !this._timer) {
      this._timer = setTimeout(function () {
        self._timeoutError('Timeout of ', self._timeout, 'ETIME');
      }, this._timeout);
    }
    // response timeout
    if (this._responseTimeout && !this._responseTimeoutTimer) {
      this._responseTimeoutTimer = setTimeout(function () {
        self._timeoutError('Response timeout of ', self._responseTimeout, 'ETIMEDOUT');
      }, this._responseTimeout);
    }
  };
  
  /***/ }),
  /* 121 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  /**
   * Module dependencies.
   */
  
  var utils = __webpack_require__(122);
  
  /**
   * Expose `ResponseBase`.
   */
  
  module.exports = ResponseBase;
  
  /**
   * Initialize a new `ResponseBase`.
   *
   * @api public
   */
  
  function ResponseBase(obj) {
    if (obj) return mixin(obj);
  }
  
  /**
   * Mixin the prototype properties.
   *
   * @param {Object} obj
   * @return {Object}
   * @api private
   */
  
  function mixin(obj) {
    for (var key in ResponseBase.prototype) {
      obj[key] = ResponseBase.prototype[key];
    }
    return obj;
  }
  
  /**
   * Get case-insensitive `field` value.
   *
   * @param {String} field
   * @return {String}
   * @api public
   */
  
  ResponseBase.prototype.get = function (field) {
    return this.header[field.toLowerCase()];
  };
  
  /**
   * Set header related properties:
   *
   *   - `.type` the content type without params
   *
   * A response of "Content-Type: text/plain; charset=utf-8"
   * will provide you with a `.type` of "text/plain".
   *
   * @param {Object} header
   * @api private
   */
  
  ResponseBase.prototype._setHeaderProperties = function (header) {
    // TODO: moar!
    // TODO: make this a util
  
    // content-type
    var ct = header['content-type'] || '';
    this.type = utils.type(ct);
  
    // params
    var params = utils.params(ct);
    for (var key in params) {
      this[key] = params[key];
    }this.links = {};
  
    // links
    try {
      if (header.link) {
        this.links = utils.parseLinks(header.link);
      }
    } catch (err) {
      // ignore
    }
  };
  
  /**
   * Set flags such as `.ok` based on `status`.
   *
   * For example a 2xx response will give you a `.ok` of __true__
   * whereas 5xx will be __false__ and `.error` will be __true__. The
   * `.clientError` and `.serverError` are also available to be more
   * specific, and `.statusType` is the class of error ranging from 1..5
   * sometimes useful for mapping respond colors etc.
   *
   * "sugar" properties are also defined for common cases. Currently providing:
   *
   *   - .noContent
   *   - .badRequest
   *   - .unauthorized
   *   - .notAcceptable
   *   - .notFound
   *
   * @param {Number} status
   * @api private
   */
  
  ResponseBase.prototype._setStatusProperties = function (status) {
    var type = status / 100 | 0;
  
    // status / class
    this.status = this.statusCode = status;
    this.statusType = type;
  
    // basics
    this.info = 1 == type;
    this.ok = 2 == type;
    this.redirect = 3 == type;
    this.clientError = 4 == type;
    this.serverError = 5 == type;
    this.error = 4 == type || 5 == type ? this.toError() : false;
  
    // sugar
    this.created = 201 == status;
    this.accepted = 202 == status;
    this.noContent = 204 == status;
    this.badRequest = 400 == status;
    this.unauthorized = 401 == status;
    this.notAcceptable = 406 == status;
    this.forbidden = 403 == status;
    this.notFound = 404 == status;
    this.unprocessableEntity = 422 == status;
  };
  
  /***/ }),
  /* 122 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  /**
   * Return the mime type for the given `str`.
   *
   * @param {String} str
   * @return {String}
   * @api private
   */
  
  exports.type = function (str) {
    return str.split(/ *; */).shift();
  };
  
  /**
   * Return header field parameters.
   *
   * @param {String} str
   * @return {Object}
   * @api private
   */
  
  exports.params = function (str) {
    return str.split(/ *; */).reduce(function (obj, str) {
      var parts = str.split(/ *= */);
      var key = parts.shift();
      var val = parts.shift();
  
      if (key && val) obj[key] = val;
      return obj;
    }, {});
  };
  
  /**
   * Parse Link header fields.
   *
   * @param {String} str
   * @return {Object}
   * @api private
   */
  
  exports.parseLinks = function (str) {
    return str.split(/ *, */).reduce(function (obj, str) {
      var parts = str.split(/ *; */);
      var url = parts[0].slice(1, -1);
      var rel = parts[1].split(/ *= */)[1].slice(1, -1);
      obj[rel] = url;
      return obj;
    }, {});
  };
  
  /**
   * Strip content related fields from `header`.
   *
   * @param {Object} header
   * @return {Object} header
   * @api private
   */
  
  exports.cleanHeader = function (header, changesOrigin) {
    delete header['content-type'];
    delete header['content-length'];
    delete header['transfer-encoding'];
    delete header['host'];
    // secuirty
    if (changesOrigin) {
      delete header['authorization'];
      delete header['cookie'];
    }
    return header;
  };
  
  /***/ }),
  /* 123 */
  /***/ (function(module, exports) {
  
  function Agent() {
    this._defaults = [];
  }
  
  ["use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert"].forEach(function (fn) {
    /** Default setting for all requests from this agent */
    Agent.prototype[fn] = function () /*varargs*/{
      this._defaults.push({ fn: fn, arguments: arguments });
      return this;
    };
  });
  
  Agent.prototype._setDefaults = function (req) {
    this._defaults.forEach(function (def) {
      req[def.fn].apply(req, def.arguments);
    });
  };
  
  module.exports = Agent;
  
  /***/ }),
  /* 124 */,
  /* 125 */
  /***/ (function(module, exports, __webpack_require__) {
  
  var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
  /* global define */
  
  (function () {
    'use strict';
  
    var hasOwn = {}.hasOwnProperty;
  
    function classNames() {
      var classes = [];
  
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg) continue;
  
        var argType = typeof arg === 'undefined' ? 'undefined' : babelHelpers.typeof(arg);
  
        if (argType === 'string' || argType === 'number') {
          classes.push(arg);
        } else if (Array.isArray(arg) && arg.length) {
          var inner = classNames.apply(null, arg);
          if (inner) {
            classes.push(inner);
          }
        } else if (argType === 'object') {
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key);
            }
          }
        }
      }
  
      return classes.join(' ');
    }
  
    if (typeof module !== 'undefined' && module.exports) {
      classNames.default = classNames;
      module.exports = classNames;
    } else if ("function" === 'function' && babelHelpers.typeof(__webpack_require__(12)) === 'object' && __webpack_require__(12)) {
      // register as 'classnames', consistent with npm package name
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        return classNames;
      }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
          __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {
      window.classNames = classNames;
    }
  })();
  
  /***/ }),
  /* 126 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _Modal = __webpack_require__(127);
  
  var _Modal2 = _interopRequireDefault(_Modal);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  exports.default = _Modal2.default;
  module.exports = exports["default"];
  
  /***/ }),
  /* 127 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.bodyOpenClassName = exports.portalClassName = undefined;
  
  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _react = __webpack_require__(0);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactDom = __webpack_require__(24);
  
  var _reactDom2 = _interopRequireDefault(_reactDom);
  
  var _propTypes = __webpack_require__(3);
  
  var _propTypes2 = _interopRequireDefault(_propTypes);
  
  var _ModalPortal = __webpack_require__(128);
  
  var _ModalPortal2 = _interopRequireDefault(_ModalPortal);
  
  var _ariaAppHider = __webpack_require__(47);
  
  var ariaAppHider = _interopRequireWildcard(_ariaAppHider);
  
  var _safeHTMLElement = __webpack_require__(22);
  
  var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);
  
  var _reactLifecyclesCompat = __webpack_require__(134);
  
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }newObj.default = obj;return newObj;
    }
  }
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : babelHelpers.typeof(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : babelHelpers.typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  var portalClassName = exports.portalClassName = "ReactModalPortal";
  var bodyOpenClassName = exports.bodyOpenClassName = "ReactModal__Body--open";
  
  var isReact16 = _reactDom2.default.createPortal !== undefined;
  var createPortal = isReact16 ? _reactDom2.default.createPortal : _reactDom2.default.unstable_renderSubtreeIntoContainer;
  
  function getParentElement(parentSelector) {
    return parentSelector();
  }
  
  var Modal = function (_Component) {
    _inherits(Modal, _Component);
  
    function Modal() {
      var _ref;
  
      var _temp, _this, _ret;
  
      _classCallCheck(this, Modal);
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Modal.__proto__ || Object.getPrototypeOf(Modal)).call.apply(_ref, [this].concat(args))), _this), _this.removePortal = function () {
        !isReact16 && _reactDom2.default.unmountComponentAtNode(_this.node);
        var parent = getParentElement(_this.props.parentSelector);
        parent.removeChild(_this.node);
      }, _this.portalRef = function (ref) {
        _this.portal = ref;
      }, _this.renderPortal = function (props) {
        var portal = createPortal(_this, _react2.default.createElement(_ModalPortal2.default, _extends({ defaultStyles: Modal.defaultStyles }, props)), _this.node);
        _this.portalRef(portal);
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }
  
    _createClass(Modal, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (!_safeHTMLElement.canUseDOM) return;
  
        if (!isReact16) {
          this.node = document.createElement("div");
        }
        this.node.className = this.props.portalClassName;
  
        var parent = getParentElement(this.props.parentSelector);
        parent.appendChild(this.node);
  
        !isReact16 && this.renderPortal(this.props);
      }
    }, {
      key: "getSnapshotBeforeUpdate",
      value: function getSnapshotBeforeUpdate(prevProps) {
        var prevParent = getParentElement(prevProps.parentSelector);
        var nextParent = getParentElement(this.props.parentSelector);
        return { prevParent: prevParent, nextParent: nextParent };
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, _, snapshot) {
        if (!_safeHTMLElement.canUseDOM) return;
        var _props = this.props,
            isOpen = _props.isOpen,
            portalClassName = _props.portalClassName;
  
        if (prevProps.portalClassName !== portalClassName) {
          this.node.className = portalClassName;
        }
  
        // Stop unnecessary renders if modal is remaining closed
        if (!prevProps.isOpen && !isOpen) return;
  
        var prevParent = snapshot.prevParent,
            nextParent = snapshot.nextParent;
  
        if (nextParent !== prevParent) {
          prevParent.removeChild(this.node);
          nextParent.appendChild(this.node);
        }
  
        !isReact16 && this.renderPortal(this.props);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        if (!_safeHTMLElement.canUseDOM || !this.node || !this.portal) return;
  
        var state = this.portal.state;
        var now = Date.now();
        var closesAt = state.isOpen && this.props.closeTimeoutMS && (state.closesAt || now + this.props.closeTimeoutMS);
  
        if (closesAt) {
          if (!state.beforeClose) {
            this.portal.closeWithTimeout();
          }
  
          setTimeout(this.removePortal, closesAt - now);
        } else {
          this.removePortal();
        }
      }
    }, {
      key: "render",
      value: function render() {
        if (!_safeHTMLElement.canUseDOM || !isReact16) {
          return null;
        }
  
        if (!this.node && isReact16) {
          this.node = document.createElement("div");
        }
  
        return createPortal(_react2.default.createElement(_ModalPortal2.default, _extends({
          ref: this.portalRef,
          defaultStyles: Modal.defaultStyles
        }, this.props)), this.node);
      }
    }], [{
      key: "setAppElement",
      value: function setAppElement(element) {
        ariaAppHider.setElement(element);
      }
  
      /* eslint-disable react/no-unused-prop-types */
  
      /* eslint-enable react/no-unused-prop-types */
  
    }]);
  
    return Modal;
  }(_react.Component);
  
  Modal.propTypes = {
    isOpen: _propTypes2.default.bool.isRequired,
    style: _propTypes2.default.shape({
      content: _propTypes2.default.object,
      overlay: _propTypes2.default.object
    }),
    portalClassName: _propTypes2.default.string,
    bodyOpenClassName: _propTypes2.default.string,
    htmlOpenClassName: _propTypes2.default.string,
    className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
      base: _propTypes2.default.string.isRequired,
      afterOpen: _propTypes2.default.string.isRequired,
      beforeClose: _propTypes2.default.string.isRequired
    })]),
    overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
      base: _propTypes2.default.string.isRequired,
      afterOpen: _propTypes2.default.string.isRequired,
      beforeClose: _propTypes2.default.string.isRequired
    })]),
    appElement: _propTypes2.default.instanceOf(_safeHTMLElement2.default),
    onAfterOpen: _propTypes2.default.func,
    onRequestClose: _propTypes2.default.func,
    closeTimeoutMS: _propTypes2.default.number,
    ariaHideApp: _propTypes2.default.bool,
    shouldFocusAfterRender: _propTypes2.default.bool,
    shouldCloseOnOverlayClick: _propTypes2.default.bool,
    shouldReturnFocusAfterClose: _propTypes2.default.bool,
    parentSelector: _propTypes2.default.func,
    aria: _propTypes2.default.object,
    role: _propTypes2.default.string,
    contentLabel: _propTypes2.default.string,
    shouldCloseOnEsc: _propTypes2.default.bool,
    overlayRef: _propTypes2.default.func,
    contentRef: _propTypes2.default.func
  };
  Modal.defaultProps = {
    isOpen: false,
    portalClassName: portalClassName,
    bodyOpenClassName: bodyOpenClassName,
    ariaHideApp: true,
    closeTimeoutMS: 0,
    shouldFocusAfterRender: true,
    shouldCloseOnEsc: true,
    shouldCloseOnOverlayClick: true,
    shouldReturnFocusAfterClose: true,
    parentSelector: function parentSelector() {
      return document.body;
    }
  };
  Modal.defaultStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(255, 255, 255, 0.75)"
    },
    content: {
      position: "absolute",
      top: "40px",
      left: "40px",
      right: "40px",
      bottom: "40px",
      border: "1px solid #ccc",
      background: "#fff",
      overflow: "auto",
      WebkitOverflowScrolling: "touch",
      borderRadius: "4px",
      outline: "none",
      padding: "20px"
    }
  };
  
  (0, _reactLifecyclesCompat.polyfill)(Modal);
  
  exports.default = Modal;
  
  /***/ }),
  /* 128 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };
  
  var _typeof = typeof Symbol === "function" && babelHelpers.typeof(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === "undefined" ? "undefined" : babelHelpers.typeof(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : babelHelpers.typeof(obj);
  };
  
  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();
  
  var _react = __webpack_require__(0);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _propTypes = __webpack_require__(3);
  
  var _propTypes2 = _interopRequireDefault(_propTypes);
  
  var _focusManager = __webpack_require__(129);
  
  var focusManager = _interopRequireWildcard(_focusManager);
  
  var _scopeTab = __webpack_require__(130);
  
  var _scopeTab2 = _interopRequireDefault(_scopeTab);
  
  var _ariaAppHider = __webpack_require__(47);
  
  var ariaAppHider = _interopRequireWildcard(_ariaAppHider);
  
  var _classList = __webpack_require__(133);
  
  var classList = _interopRequireWildcard(_classList);
  
  var _safeHTMLElement = __webpack_require__(22);
  
  var _safeHTMLElement2 = _interopRequireDefault(_safeHTMLElement);
  
  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
        }
      }newObj.default = obj;return newObj;
    }
  }
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return call && ((typeof call === "undefined" ? "undefined" : babelHelpers.typeof(call)) === "object" || typeof call === "function") ? call : self;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : babelHelpers.typeof(superClass)));
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }
  
  // so that our CSS is statically analyzable
  var CLASS_NAMES = {
    overlay: "ReactModal__Overlay",
    content: "ReactModal__Content"
  };
  
  var TAB_KEY = 9;
  var ESC_KEY = 27;
  
  var ariaHiddenInstances = 0;
  
  var ModalPortal = function (_Component) {
    _inherits(ModalPortal, _Component);
  
    function ModalPortal(props) {
      _classCallCheck(this, ModalPortal);
  
      var _this = _possibleConstructorReturn(this, (ModalPortal.__proto__ || Object.getPrototypeOf(ModalPortal)).call(this, props));
  
      _this.setOverlayRef = function (overlay) {
        _this.overlay = overlay;
        _this.props.overlayRef && _this.props.overlayRef(overlay);
      };
  
      _this.setContentRef = function (content) {
        _this.content = content;
        _this.props.contentRef && _this.props.contentRef(content);
      };
  
      _this.afterClose = function () {
        var _this$props = _this.props,
            appElement = _this$props.appElement,
            ariaHideApp = _this$props.ariaHideApp,
            htmlOpenClassName = _this$props.htmlOpenClassName,
            bodyOpenClassName = _this$props.bodyOpenClassName;
  
        // Remove classes.
  
        classList.remove(document.body, bodyOpenClassName);
  
        htmlOpenClassName && classList.remove(document.getElementsByTagName("html")[0], htmlOpenClassName);
  
        // Reset aria-hidden attribute if all modals have been removed
        if (ariaHideApp && ariaHiddenInstances > 0) {
          ariaHiddenInstances -= 1;
  
          if (ariaHiddenInstances === 0) {
            ariaAppHider.show(appElement);
          }
        }
  
        if (_this.props.shouldFocusAfterRender) {
          if (_this.props.shouldReturnFocusAfterClose) {
            focusManager.returnFocus();
            focusManager.teardownScopedFocus();
          } else {
            focusManager.popWithoutFocus();
          }
        }
      };
  
      _this.open = function () {
        _this.beforeOpen();
        if (_this.state.afterOpen && _this.state.beforeClose) {
          clearTimeout(_this.closeTimer);
          _this.setState({ beforeClose: false });
        } else {
          if (_this.props.shouldFocusAfterRender) {
            focusManager.setupScopedFocus(_this.node);
            focusManager.markForFocusLater();
          }
  
          _this.setState({ isOpen: true }, function () {
            _this.setState({ afterOpen: true });
  
            if (_this.props.isOpen && _this.props.onAfterOpen) {
              _this.props.onAfterOpen();
            }
          });
        }
      };
  
      _this.close = function () {
        if (_this.props.closeTimeoutMS > 0) {
          _this.closeWithTimeout();
        } else {
          _this.closeWithoutTimeout();
        }
      };
  
      _this.focusContent = function () {
        return _this.content && !_this.contentHasFocus() && _this.content.focus();
      };
  
      _this.closeWithTimeout = function () {
        var closesAt = Date.now() + _this.props.closeTimeoutMS;
        _this.setState({ beforeClose: true, closesAt: closesAt }, function () {
          _this.closeTimer = setTimeout(_this.closeWithoutTimeout, _this.state.closesAt - Date.now());
        });
      };
  
      _this.closeWithoutTimeout = function () {
        _this.setState({
          beforeClose: false,
          isOpen: false,
          afterOpen: false,
          closesAt: null
        }, _this.afterClose);
      };
  
      _this.handleKeyDown = function (event) {
        if (event.keyCode === TAB_KEY) {
          (0, _scopeTab2.default)(_this.content, event);
        }
  
        if (_this.props.shouldCloseOnEsc && event.keyCode === ESC_KEY) {
          event.stopPropagation();
          _this.requestClose(event);
        }
      };
  
      _this.handleOverlayOnClick = function (event) {
        if (_this.shouldClose === null) {
          _this.shouldClose = true;
        }
  
        if (_this.shouldClose && _this.props.shouldCloseOnOverlayClick) {
          if (_this.ownerHandlesClose()) {
            _this.requestClose(event);
          } else {
            _this.focusContent();
          }
        }
        _this.shouldClose = null;
      };
  
      _this.handleContentOnMouseUp = function () {
        _this.shouldClose = false;
      };
  
      _this.handleOverlayOnMouseDown = function (event) {
        if (!_this.props.shouldCloseOnOverlayClick && event.target == _this.overlay) {
          event.preventDefault();
        }
      };
  
      _this.handleContentOnClick = function () {
        _this.shouldClose = false;
      };
  
      _this.handleContentOnMouseDown = function () {
        _this.shouldClose = false;
      };
  
      _this.requestClose = function (event) {
        return _this.ownerHandlesClose() && _this.props.onRequestClose(event);
      };
  
      _this.ownerHandlesClose = function () {
        return _this.props.onRequestClose;
      };
  
      _this.shouldBeClosed = function () {
        return !_this.state.isOpen && !_this.state.beforeClose;
      };
  
      _this.contentHasFocus = function () {
        return document.activeElement === _this.content || _this.content.contains(document.activeElement);
      };
  
      _this.buildClassName = function (which, additional) {
        var classNames = (typeof additional === "undefined" ? "undefined" : _typeof(additional)) === "object" ? additional : {
          base: CLASS_NAMES[which],
          afterOpen: CLASS_NAMES[which] + "--after-open",
          beforeClose: CLASS_NAMES[which] + "--before-close"
        };
        var className = classNames.base;
        if (_this.state.afterOpen) {
          className = className + " " + classNames.afterOpen;
        }
        if (_this.state.beforeClose) {
          className = className + " " + classNames.beforeClose;
        }
        return typeof additional === "string" && additional ? className + " " + additional : className;
      };
  
      _this.ariaAttributes = function (items) {
        return Object.keys(items).reduce(function (acc, name) {
          acc["aria-" + name] = items[name];
          return acc;
        }, {});
      };
  
      _this.state = {
        afterOpen: false,
        beforeClose: false
      };
  
      _this.shouldClose = null;
      _this.moveFromContentToOverlay = null;
      return _this;
    }
  
    _createClass(ModalPortal, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        if (this.props.isOpen) {
          this.open();
        }
      }
    }, {
      key: "componentDidUpdate",
      value: function componentDidUpdate(prevProps, prevState) {
        if (true) {
          if (prevProps.bodyOpenClassName !== this.props.bodyOpenClassName) {
            // eslint-disable-next-line no-console
            console.warn('React-Modal: "bodyOpenClassName" prop has been modified. ' + "This may cause unexpected behavior when multiple modals are open.");
          }
          if (prevProps.htmlOpenClassName !== this.props.htmlOpenClassName) {
            // eslint-disable-next-line no-console
            console.warn('React-Modal: "htmlOpenClassName" prop has been modified. ' + "This may cause unexpected behavior when multiple modals are open.");
          }
        }
  
        if (this.props.isOpen && !prevProps.isOpen) {
          this.open();
        } else if (!this.props.isOpen && prevProps.isOpen) {
          this.close();
        }
  
        // Focus only needs to be set once when the modal is being opened
        if (this.props.shouldFocusAfterRender && this.state.isOpen && !prevState.isOpen) {
          this.focusContent();
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this.afterClose();
        clearTimeout(this.closeTimer);
      }
    }, {
      key: "beforeOpen",
      value: function beforeOpen() {
        var _props = this.props,
            appElement = _props.appElement,
            ariaHideApp = _props.ariaHideApp,
            htmlOpenClassName = _props.htmlOpenClassName,
            bodyOpenClassName = _props.bodyOpenClassName;
  
        // Add classes.
  
        classList.add(document.body, bodyOpenClassName);
  
        htmlOpenClassName && classList.add(document.getElementsByTagName("html")[0], htmlOpenClassName);
  
        if (ariaHideApp) {
          ariaHiddenInstances += 1;
          ariaAppHider.hide(appElement);
        }
      }
  
      // Don't steal focus from inner elements
  
    }, {
      key: "render",
      value: function render() {
        var _props2 = this.props,
            className = _props2.className,
            overlayClassName = _props2.overlayClassName,
            defaultStyles = _props2.defaultStyles;
  
        var contentStyles = className ? {} : defaultStyles.content;
        var overlayStyles = overlayClassName ? {} : defaultStyles.overlay;
  
        return this.shouldBeClosed() ? null : _react2.default.createElement("div", {
          ref: this.setOverlayRef,
          className: this.buildClassName("overlay", overlayClassName),
          style: _extends({}, overlayStyles, this.props.style.overlay),
          onClick: this.handleOverlayOnClick,
          onMouseDown: this.handleOverlayOnMouseDown,
          "aria-modal": "true"
        }, _react2.default.createElement("div", _extends({
          ref: this.setContentRef,
          style: _extends({}, contentStyles, this.props.style.content),
          className: this.buildClassName("content", className),
          tabIndex: "-1",
          onKeyDown: this.handleKeyDown,
          onMouseDown: this.handleContentOnMouseDown,
          onMouseUp: this.handleContentOnMouseUp,
          onClick: this.handleContentOnClick,
          role: this.props.role,
          "aria-label": this.props.contentLabel
        }, this.ariaAttributes(this.props.aria || {}), {
          "data-testid": this.props.testId
        }), this.props.children));
      }
    }]);
  
    return ModalPortal;
  }(_react.Component);
  
  ModalPortal.defaultProps = {
    style: {
      overlay: {},
      content: {}
    },
    defaultStyles: {}
  };
  ModalPortal.propTypes = {
    isOpen: _propTypes2.default.bool.isRequired,
    defaultStyles: _propTypes2.default.shape({
      content: _propTypes2.default.object,
      overlay: _propTypes2.default.object
    }),
    style: _propTypes2.default.shape({
      content: _propTypes2.default.object,
      overlay: _propTypes2.default.object
    }),
    className: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
    overlayClassName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
    bodyOpenClassName: _propTypes2.default.string,
    htmlOpenClassName: _propTypes2.default.string,
    ariaHideApp: _propTypes2.default.bool,
    appElement: _propTypes2.default.instanceOf(_safeHTMLElement2.default),
    onAfterOpen: _propTypes2.default.func,
    onRequestClose: _propTypes2.default.func,
    closeTimeoutMS: _propTypes2.default.number,
    shouldFocusAfterRender: _propTypes2.default.bool,
    shouldCloseOnOverlayClick: _propTypes2.default.bool,
    shouldReturnFocusAfterClose: _propTypes2.default.bool,
    role: _propTypes2.default.string,
    contentLabel: _propTypes2.default.string,
    aria: _propTypes2.default.object,
    children: _propTypes2.default.node,
    shouldCloseOnEsc: _propTypes2.default.bool,
    overlayRef: _propTypes2.default.func,
    contentRef: _propTypes2.default.func,
    testId: _propTypes2.default.string
  };
  exports.default = ModalPortal;
  module.exports = exports["default"];
  
  /***/ }),
  /* 129 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.handleBlur = handleBlur;
  exports.handleFocus = handleFocus;
  exports.markForFocusLater = markForFocusLater;
  exports.returnFocus = returnFocus;
  exports.popWithoutFocus = popWithoutFocus;
  exports.setupScopedFocus = setupScopedFocus;
  exports.teardownScopedFocus = teardownScopedFocus;
  
  var _tabbable = __webpack_require__(46);
  
  var _tabbable2 = _interopRequireDefault(_tabbable);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  var focusLaterElements = [];
  var modalElement = null;
  var needToFocus = false;
  
  function handleBlur() {
    needToFocus = true;
  }
  
  function handleFocus() {
    if (needToFocus) {
      needToFocus = false;
      if (!modalElement) {
        return;
      }
      // need to see how jQuery shims document.on('focusin') so we don't need the
      // setTimeout, firefox doesn't support focusin, if it did, we could focus
      // the element outside of a setTimeout. Side-effect of this implementation
      // is that the document.body gets focus, and then we focus our element right
      // after, seems fine.
      setTimeout(function () {
        if (modalElement.contains(document.activeElement)) {
          return;
        }
        var el = (0, _tabbable2.default)(modalElement)[0] || modalElement;
        el.focus();
      }, 0);
    }
  }
  
  function markForFocusLater() {
    focusLaterElements.push(document.activeElement);
  }
  
  /* eslint-disable no-console */
  function returnFocus() {
    var toFocus = null;
    try {
      if (focusLaterElements.length !== 0) {
        toFocus = focusLaterElements.pop();
        toFocus.focus();
      }
      return;
    } catch (e) {
      console.warn(["You tried to return focus to", toFocus, "but it is not in the DOM anymore"].join(" "));
    }
  }
  /* eslint-enable no-console */
  
  function popWithoutFocus() {
    focusLaterElements.length > 0 && focusLaterElements.pop();
  }
  
  function setupScopedFocus(element) {
    modalElement = element;
  
    if (window.addEventListener) {
      window.addEventListener("blur", handleBlur, false);
      document.addEventListener("focus", handleFocus, true);
    } else {
      window.attachEvent("onBlur", handleBlur);
      document.attachEvent("onFocus", handleFocus);
    }
  }
  
  function teardownScopedFocus() {
    modalElement = null;
  
    if (window.addEventListener) {
      window.removeEventListener("blur", handleBlur);
      document.removeEventListener("focus", handleFocus);
    } else {
      window.detachEvent("onBlur", handleBlur);
      document.detachEvent("onFocus", handleFocus);
    }
  }
  
  /***/ }),
  /* 130 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = scopeTab;
  
  var _tabbable = __webpack_require__(46);
  
  var _tabbable2 = _interopRequireDefault(_tabbable);
  
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  
  function scopeTab(node, event) {
    var tabbable = (0, _tabbable2.default)(node);
  
    if (!tabbable.length) {
      // Do nothing, since there are no elements that can receive focus.
      event.preventDefault();
      return;
    }
  
    var shiftKey = event.shiftKey;
    var head = tabbable[0];
    var tail = tabbable[tabbable.length - 1];
  
    // proceed with default browser behavior on tab.
    // Focus on last element on shift + tab.
    if (node === document.activeElement) {
      if (!shiftKey) return;
      target = tail;
    }
  
    var target;
    if (tail === document.activeElement && !shiftKey) {
      target = head;
    }
  
    if (head === document.activeElement && shiftKey) {
      target = tail;
    }
  
    if (target) {
      event.preventDefault();
      target.focus();
      return;
    }
  
    // Safari radio issue.
    //
    // Safari does not move the focus to the radio button,
    // so we need to force it to really walk through all elements.
    //
    // This is very error prone, since we are trying to guess
    // if it is a safari browser from the first occurence between
    // chrome or safari.
    //
    // The chrome user agent contains the first ocurrence
    // as the 'chrome/version' and later the 'safari/version'.
    var checkSafari = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
    var isSafariDesktop = checkSafari != null && checkSafari[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;
  
    // If we are not in safari desktop, let the browser control
    // the focus
    if (!isSafariDesktop) return;
  
    var x = tabbable.indexOf(document.activeElement);
  
    if (x > -1) {
      x += shiftKey ? -1 : 1;
    }
  
    event.preventDefault();
  
    tabbable[x].focus();
  }
  module.exports = exports["default"];
  
  /***/ }),
  /* 131 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  /**
   * Copyright 2014-2015, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */
  
  
  
  /**
   * Similar to invariant but only logs a warning if the condition is not met.
   * This can be used to log issues in development environments in critical
   * paths. Removing the logging code for production environments will keep the
   * same logic and follow the same code paths.
   */
  
  var warning = function warning() {};
  
  if (true) {
    warning = function warning(condition, format, args) {
      var len = arguments.length;
      args = new Array(len > 2 ? len - 2 : 0);
      for (var key = 2; key < len; key++) {
        args[key - 2] = arguments[key];
      }
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }
  
      if (format.length < 10 || /^[s\W]*$/.test(format)) {
        throw new Error('The warning format should be able to uniquely identify this ' + 'warning. Please, use a more descriptive format than: ' + format);
      }
  
      if (!condition) {
        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function () {
          return args[argIndex++];
        });
        if (typeof console !== 'undefined') {
          console.error(message);
        }
        try {
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      }
    };
  }
  
  module.exports = warning;
  
  /***/ }),
  /* 132 */
  /***/ (function(module, exports, __webpack_require__) {
  
  var __WEBPACK_AMD_DEFINE_RESULT__;/*!
    Copyright (c) 2015 Jed Watson.
    Based on code that is Copyright 2013-2015, Facebook, Inc.
    All rights reserved.
  */
  /* global define */
  
  (function () {
    'use strict';
  
    var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
  
    var ExecutionEnvironment = {
  
      canUseDOM: canUseDOM,
  
      canUseWorkers: typeof Worker !== 'undefined',
  
      canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
  
      canUseViewport: canUseDOM && !!window.screen
  
    };
  
    if ("function" === 'function' && babelHelpers.typeof(__webpack_require__(12)) === 'object' && __webpack_require__(12)) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        return ExecutionEnvironment;
      }).call(exports, __webpack_require__, exports, module),
          __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof module !== 'undefined' && module.exports) {
      module.exports = ExecutionEnvironment;
    } else {
      window.ExecutionEnvironment = ExecutionEnvironment;
    }
  })();
  
  /***/ }),
  /* 133 */
  /***/ (function(module, exports, __webpack_require__) {
  
  "use strict";
  
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.dumpClassLists = dumpClassLists;
  var htmlClassList = {};
  var docBodyClassList = {};
  
  function dumpClassLists() {
    if (true) {
      var classes = document.getElementsByTagName("html")[0].className;
      var buffer = "Show tracked classes:\n\n";
  
      buffer += "<html /> (" + classes + "):\n";
      for (var x in htmlClassList) {
        buffer += "  " + x + " " + htmlClassList[x] + "\n";
      }
  
      classes = document.body.className;
  
      // eslint-disable-next-line max-len
      buffer += "\n\ndoc.body (" + classes + "):\n";
      for (var _x in docBodyClassList) {
        buffer += "  " + _x + " " + docBodyClassList[_x] + "\n";
      }
  
      buffer += "\n";
  
      // eslint-disable-next-line no-console
      console.log(buffer);
    }
  }
  
  /**
   * Track the number of reference of a class.
   * @param {object} poll The poll to receive the reference.
   * @param {string} className The class name.
   * @return {string}
   */
  var incrementReference = function incrementReference(poll, className) {
    if (!poll[className]) {
      poll[className] = 0;
    }
    poll[className] += 1;
    return className;
  };
  
  /**
   * Drop the reference of a class.
   * @param {object} poll The poll to receive the reference.
   * @param {string} className The class name.
   * @return {string}
   */
  var decrementReference = function decrementReference(poll, className) {
    if (poll[className]) {
      poll[className] -= 1;
    }
    return className;
  };
  
  /**
   * Track a class and add to the given class list.
   * @param {Object} classListRef A class list of an element.
   * @param {Object} poll         The poll to be used.
   * @param {Array}  classes      The list of classes to be tracked.
   */
  var trackClass = function trackClass(classListRef, poll, classes) {
    classes.forEach(function (className) {
      incrementReference(poll, className);
      classListRef.add(className);
    });
  };
  
  /**
   * Untrack a class and remove from the given class list if the reference
   * reaches 0.
   * @param {Object} classListRef A class list of an element.
   * @param {Object} poll         The poll to be used.
   * @param {Array}  classes      The list of classes to be untracked.
   */
  var untrackClass = function untrackClass(classListRef, poll, classes) {
    classes.forEach(function (className) {
      decrementReference(poll, className);
      poll[className] === 0 && classListRef.remove(className);
    });
  };
  
  /**
   * Public inferface to add classes to the document.body.
   * @param {string} bodyClass The class string to be added.
   *                           It may contain more then one class
   *                           with ' ' as separator.
   */
  var add = exports.add = function add(element, classString) {
    return trackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
  };
  
  /**
   * Public inferface to remove classes from the document.body.
   * @param {string} bodyClass The class string to be added.
   *                           It may contain more then one class
   *                           with ' ' as separator.
   */
  var remove = exports.remove = function remove(element, classString) {
    return untrackClass(element.classList, element.nodeName.toLowerCase() == "html" ? htmlClassList : docBodyClassList, classString.split(" "));
  };
  
  /***/ }),
  /* 134 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  
  function componentWillMount() {
    // Call this.constructor.gDSFP to support sub-classes.
    var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
    if (state !== null && state !== undefined) {
      this.setState(state);
    }
  }
  
  function componentWillReceiveProps(nextProps) {
    // Call this.constructor.gDSFP to support sub-classes.
    // Use the setState() updater to ensure state isn't stale in certain edge cases.
    function updater(prevState) {
      var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
      return state !== null && state !== undefined ? state : null;
    }
    // Binding "this" is important for shallow renderer support.
    this.setState(updater.bind(this));
  }
  
  function componentWillUpdate(nextProps, nextState) {
    try {
      var prevProps = this.props;
      var prevState = this.state;
      this.props = nextProps;
      this.state = nextState;
      this.__reactInternalSnapshotFlag = true;
      this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);
    } finally {
      this.props = prevProps;
      this.state = prevState;
    }
  }
  
  // React may warn about cWM/cWRP/cWU methods being deprecated.
  // Add a flag to suppress these warnings for this special case.
  componentWillMount.__suppressDeprecationWarning = true;
  componentWillReceiveProps.__suppressDeprecationWarning = true;
  componentWillUpdate.__suppressDeprecationWarning = true;
  
  function polyfill(Component) {
    var prototype = Component.prototype;
  
    if (!prototype || !prototype.isReactComponent) {
      throw new Error('Can only polyfill class components');
    }
  
    if (typeof Component.getDerivedStateFromProps !== 'function' && typeof prototype.getSnapshotBeforeUpdate !== 'function') {
      return Component;
    }
  
    // If new component APIs are defined, "unsafe" lifecycles won't be called.
    // Error if any of these lifecycles are present,
    // Because they would work differently between older and newer (16.3+) versions of React.
    var foundWillMountName = null;
    var foundWillReceivePropsName = null;
    var foundWillUpdateName = null;
    if (typeof prototype.componentWillMount === 'function') {
      foundWillMountName = 'componentWillMount';
    } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
      foundWillMountName = 'UNSAFE_componentWillMount';
    }
    if (typeof prototype.componentWillReceiveProps === 'function') {
      foundWillReceivePropsName = 'componentWillReceiveProps';
    } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
      foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
    }
    if (typeof prototype.componentWillUpdate === 'function') {
      foundWillUpdateName = 'componentWillUpdate';
    } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
      foundWillUpdateName = 'UNSAFE_componentWillUpdate';
    }
    if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
      var componentName = Component.displayName || Component.name;
      var newApiName = typeof Component.getDerivedStateFromProps === 'function' ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()';
  
      throw Error('Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' + componentName + ' uses ' + newApiName + ' but also contains the following legacy lifecycles:' + (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') + (foundWillReceivePropsName !== null ? '\n  ' + foundWillReceivePropsName : '') + (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') + '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' + 'https://fb.me/react-async-component-lifecycle-hooks');
    }
  
    // React <= 16.2 does not support static getDerivedStateFromProps.
    // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
    // Newer versions of React will ignore these lifecycles if gDSFP exists.
    if (typeof Component.getDerivedStateFromProps === 'function') {
      prototype.componentWillMount = componentWillMount;
      prototype.componentWillReceiveProps = componentWillReceiveProps;
    }
  
    // React <= 16.2 does not support getSnapshotBeforeUpdate.
    // As a workaround, use cWU to invoke the new lifecycle.
    // Newer versions of React will ignore that lifecycle if gSBU exists.
    if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
      if (typeof prototype.componentDidUpdate !== 'function') {
        throw new Error('Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype');
      }
  
      prototype.componentWillUpdate = componentWillUpdate;
  
      var componentDidUpdate = prototype.componentDidUpdate;
  
      prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
        // 16.3+ will not execute our will-update method;
        // It will pass a snapshot value to did-update though.
        // Older versions will require our polyfilled will-update value.
        // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
        // Because for <= 15.x versions this might be a "prevContext" object.
        // We also can't just check "__reactInternalSnapshot",
        // Because get-snapshot might return a falsy value.
        // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
        var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
  
        componentDidUpdate.call(this, prevProps, prevState, snapshot);
      };
    }
  
    return Component;
  }
  
  
  
  /***/ }),
  /* 135 */,
  /* 136 */,
  /* 137 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(7);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CartItem__ = __webpack_require__(138);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_updateItemInCart__ = __webpack_require__(139);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__actions_updateCart__ = __webpack_require__(140);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_deleteItemInCart__ = __webpack_require__(141);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__selectors_order__ = __webpack_require__(23);
  
  
  
  
  
  
  
  
  
  var Cart = function (_Component) {
    babelHelpers.inherits(Cart, _Component);
  
    function Cart() {
      var _ref;
  
      var _temp, _this, _ret;
  
      babelHelpers.classCallCheck(this, Cart);
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = Cart.__proto__ || Object.getPrototypeOf(Cart)).call.apply(_ref, [this].concat(args))), _this), _this.doItemDelete = function (item) {
        _this.props.deleteItemInCart(item.idOrder, item.id);
      }, _this.doItemsUpdate = function () {
        var payload = {};
        _this.props.cart.orderItems.map(function (item) {
          payload[item.id] = {
            quantity: item.quantity
          };
        });
  
        _this.props.updateCart(payload, _this.props.cart.id);
      }, _this.handleQuantityIncrement = function (item) {
        item.quantity++;
        item.price = (item.quantity * Number(item.purchasedEntityPrice)).toFixed(2);
        _this.props.updateItemInCart(item);
        _this.doItemsUpdate();
      }, _this.handleQuantityDecrement = function (item) {
        item.quantity--;
        item.price = (item.quantity * Number(item.purchasedEntityPrice)).toFixed(2);
        if (item.quantity >= 1) {
          _this.props.updateItemInCart(item);
          _this.doItemsUpdate();
        }
      }, _this.strToComponent = function (order_items) {
        return order_items.map(function (item) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__CartItem__["a" /* default */], {
            key: item.id,
            orderItem: item,
            onDecrementQuantityClick: _this.handleQuantityDecrement,
            onIncrementQuantityClick: _this.handleQuantityIncrement,
            onDeleteItemClick: _this.doItemDelete
          });
        });
      }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
    }
  
    babelHelpers.createClass(Cart, [{
      key: 'componentDidMount',
      value: function componentDidMount() {}
    }, {
      key: 'render',
      value: function render() {
        var cart = this.props.cart;
  
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'cartContent' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'car-mbody' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'container-mbody' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'content-mbody' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  null,
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'table',
                    null,
                    this.strToComponent(cart.orderItems)
                  )
                )
              )
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'car-mfooter' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'sub-total' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'p',
                null,
                'Sub Total'
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                null,
                cart.totalPriceFormatted + ' ' + cart.totalPrice
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              { href: '/cart' },
              'Ver bolsas de compras'
            )
          )
        );
      }
    }]);
    return Cart;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
  
  Cart.propTypes = {
    updateItemInCart: __WEBPACK_IMPORTED_MODULE_1_prop_types__["PropTypes"].func,
    updateCart: __WEBPACK_IMPORTED_MODULE_1_prop_types__["PropTypes"].func,
    deleteItemInCart: __WEBPACK_IMPORTED_MODULE_1_prop_types__["PropTypes"].func,
    cart: __WEBPACK_IMPORTED_MODULE_1_prop_types__["PropTypes"].object
  };
  var mapStateToProps = function mapStateToProps(state) {
    return {
      cart: Object(__WEBPACK_IMPORTED_MODULE_7__selectors_order__["a" /* getOrder */])(state)
    };
  };
  /* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps, {
    updateItemInCart: __WEBPACK_IMPORTED_MODULE_4__actions_updateItemInCart__["a" /* updateItemInCart */],
    updateCart: __WEBPACK_IMPORTED_MODULE_5__actions_updateCart__["a" /* updateCart */],
    deleteItemInCart: __WEBPACK_IMPORTED_MODULE_6__actions_deleteItemInCart__["a" /* deleteItemInCart */]
  })(Cart));
  
  /***/ }),
  /* 138 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
  
  
  
  var CartItem = function CartItem(_ref) {
      var orderItem = _ref.orderItem,
          onDecrementQuantityClick = _ref.onDecrementQuantityClick,
          onIncrementQuantityClick = _ref.onIncrementQuantityClick,
          onDeleteItemClick = _ref.onDeleteItemClick;
  
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'cart-item-product' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'item-producto' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'data' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'left-prod' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: orderItem.image, alt: orderItem.title })
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'center-prod' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'h4',
                          { className: 'titulo' },
                          orderItem.title
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'content-cant' },
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'p',
                              null,
                              'Cantidad'
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'span',
                              { className: 'btn-minus', onClick: function onClick() {
                                      return onDecrementQuantityClick(orderItem);
                                  } },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fas fa-minus' })
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'span',
                              { className: 'cantidad' },
                              orderItem.quantity
                          ),
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                              'span',
                              { className: 'btn-mas', onClick: function onClick() {
                                      return onIncrementQuantityClick(orderItem);
                                  } },
                              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'fas fa-plus' })
                          )
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'span',
                          { onClick: function onClick() {
                                  return onDeleteItemClick(orderItem);
                              } },
                          ' ',
                          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'far fa-trash-alt js-delete' }),
                          ' '
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'span',
                          { className: 'precio' },
                          orderItem.priceFormatted + ' ' + orderItem.price
                      )
                  )
              )
          )
      );
  };
  
  CartItem.propTypes = {
      orderItem: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
          id: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
          idOrder: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
          purchasedEntity: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
          quantity: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
          title: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
          image: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
          price: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
          isParent: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool.isRequired
      }),
      onDecrementQuantityClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
      onIncrementQuantityClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
      onDeleteItemClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired
  };
  
  /* harmony default export */ __webpack_exports__["a"] = (CartItem);
  
  /***/ }),
  /* 139 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return updateItemInCart; });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(2);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_actions__ = __webpack_require__(1);
  
  
  
  var updateItemInCart = Object(__WEBPACK_IMPORTED_MODULE_1_redux_actions__["a" /* createAction */])(__WEBPACK_IMPORTED_MODULE_0__constants__["n" /* UPDATE_ORDER */], function (payload) {
      return payload;
  });
  
  /***/ }),
  /* 140 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return updateCart; });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(2);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_actions__ = __webpack_require__(1);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(6);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(4);
  
  
  
  
  
  var url = "" + __WEBPACK_IMPORTED_MODULE_3__utils__["e" /* baseUrl */];
  
  var updateCart = Object(__WEBPACK_IMPORTED_MODULE_1_redux_actions__["a" /* createAction */])(__WEBPACK_IMPORTED_MODULE_0__constants__["c" /* FETCH_ORDER */], function (payload, id) {
      return Object(__WEBPACK_IMPORTED_MODULE_2__api__["f" /* apiUpdateCart */])(url, id, payload)();
  });
  
  /***/ }),
  /* 141 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deleteItemInCart; });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(2);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_actions__ = __webpack_require__(1);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(6);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(4);
  
  
  
  
  
  var url = "" + __WEBPACK_IMPORTED_MODULE_3__utils__["e" /* baseUrl */];
  
  var deleteItemInCart = Object(__WEBPACK_IMPORTED_MODULE_1_redux_actions__["a" /* createAction */])(__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* DELETE_ITEM_ORDER */], function (idOrder, idItem) {
      return Object(__WEBPACK_IMPORTED_MODULE_2__api__["b" /* apiDeleteItemInCart */])(url, idOrder, idItem)();
  });
  
  /***/ }),
  /* 142 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return customStyles; });
  var customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)'
    }
  };
  
  /***/ }),
  /* 143 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchComplements; });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(2);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_actions__ = __webpack_require__(1);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(6);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(4);
  
  
  
  
  
  var urlComplements = __WEBPACK_IMPORTED_MODULE_3__utils__["e" /* baseUrl */] + "/api/product/complementos/" + __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* ID_PRODUCT */] + "?_format=json";
  
  var fetchComplements = Object(__WEBPACK_IMPORTED_MODULE_1_redux_actions__["a" /* createAction */])(__WEBPACK_IMPORTED_MODULE_0__constants__["b" /* FETCH_COMPLEMENTS */], Object(__WEBPACK_IMPORTED_MODULE_2__api__["c" /* apiGetComplements */])(urlComplements));
  
  /***/ }),
  /* 144 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchVariation; });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(2);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_actions__ = __webpack_require__(1);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(6);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(4);
  
  
  
  
  
  var urlVaritation = __WEBPACK_IMPORTED_MODULE_3__utils__["e" /* baseUrl */] + "/api/product/variation/" + __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* ID_PRODUCT */] + "?_format=json";
  
  var fetchVariation = Object(__WEBPACK_IMPORTED_MODULE_1_redux_actions__["a" /* createAction */])(__WEBPACK_IMPORTED_MODULE_0__constants__["d" /* FETCH_VARIATION */], Object(__WEBPACK_IMPORTED_MODULE_2__api__["e" /* apiGetVariation */])(urlVaritation));
  
  /***/ }),
  /* 145 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addProductInCart; });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(2);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_actions__ = __webpack_require__(1);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api__ = __webpack_require__(6);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(4);
  
  
  
  
  
  var urlCart = __WEBPACK_IMPORTED_MODULE_3__utils__["e" /* baseUrl */] + "cart/add?_format=json";
  
  var addProductInCart = Object(__WEBPACK_IMPORTED_MODULE_1_redux_actions__["a" /* createAction */])(__WEBPACK_IMPORTED_MODULE_0__constants__["m" /* UPDATE_CART_ORDER */], function (payload) {
      return Object(__WEBPACK_IMPORTED_MODULE_2__api__["a" /* apiAddProductInCart */])(urlCart, payload)();
  });
  
  /***/ }),
  /* 146 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setQuantityVariation; });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(2);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_actions__ = __webpack_require__(1);
  
  
  
  var setQuantityVariation = Object(__WEBPACK_IMPORTED_MODULE_1_redux_actions__["a" /* createAction */])(__WEBPACK_IMPORTED_MODULE_0__constants__["l" /* SET_QUANTITY_VARIATION */], function (quantity) {
    return quantity;
  });
  
  /***/ }),
  /* 147 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getComplements; });
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getComplementByType; });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(13);
  
  
  var getComplements = function getComplements(state) {
      return state.complements;
  };
  
  var getComplementByType = Object(__WEBPACK_IMPORTED_MODULE_0_reselect__["a" /* createSelector */])(function (state, props) {
      return state.complements.find(function (c) {
          return c.type === props.type;
      });
  }, function (complement) {
      return complement;
  });
  
  /***/ }),
  /* 148 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getVariation; });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(13);
  
  
  var getVariation = function getVariation(state) {
    return state.variation;
  };
  
  /***/ }),
  /* 149 */,
  /* 150 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cart_block__ = __webpack_require__(48);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(3);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__(7);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selectors_order__ = __webpack_require__(23);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__selectors_util__ = __webpack_require__(50);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__actions_fetchOrder__ = __webpack_require__(49);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__actions_setOpenBlock__ = __webpack_require__(51);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_setCountCart__ = __webpack_require__(52);
  
  
  
  
  
  
  
  
  
  
  var CartTop = function (_Component) {
    babelHelpers.inherits(CartTop, _Component);
  
    function CartTop() {
      var _ref;
  
      var _temp, _this, _ret;
  
      babelHelpers.classCallCheck(this, CartTop);
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = CartTop.__proto__ || Object.getPrototypeOf(CartTop)).call.apply(_ref, [this].concat(args))), _this), _this.openCartBlock = function () {
        _this.props.setOpenCartTopBlock(true);
      }, _this.setChangeOpen = function () {
        _this.props.setCountCart(_this.props.order.count);
        _this.props.setOpenCartTopBlock(false);
      }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
    }
  
    babelHelpers.createClass(CartTop, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _props = this.props,
            order = _props.order,
            fetchOrder = _props.fetchOrder,
            setCountCart = _props.setCountCart;
  
        if (Object.getOwnPropertyNames(order).length === 0) {
          fetchOrder().then(function (r) {
            var count = r.payload.count;
            setCountCart(count);
          });
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _props2 = this.props,
            util = _props2.util,
            order = _props2.order;
  
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'cartTopBlock' },
          util.openCartTopBlock && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__cart_block__["a" /* default */], {
            openBlock: util.openCartTopBlock,
            cart: order,
            changeOpen: this.setChangeOpen }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { onClick: this.openCartBlock, className: 'btn--shopping--list' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icon-shopping ico-header' }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              { className: '' },
              '(',
              util.count,
              ')'
            )
          )
        );
      }
    }]);
    return CartTop;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
  
  CartTop.propTypes = {
    fecthOrder: __WEBPACK_IMPORTED_MODULE_2_prop_types__["PropTypes"].func.isRequired,
    setOpenCartTopBlock: __WEBPACK_IMPORTED_MODULE_2_prop_types__["PropTypes"].func,
    setCountCart: __WEBPACK_IMPORTED_MODULE_2_prop_types__["PropTypes"].func,
    util: __WEBPACK_IMPORTED_MODULE_2_prop_types__["PropTypes"].object,
    order: __WEBPACK_IMPORTED_MODULE_2_prop_types__["PropTypes"].object
  };
  
  CartTop.defaultProps = {
    order: {}
  };
  var mapStateToProps = function mapStateToProps(state) {
    return {
      order: Object(__WEBPACK_IMPORTED_MODULE_4__selectors_order__["a" /* getOrder */])(state),
      util: Object(__WEBPACK_IMPORTED_MODULE_5__selectors_util__["a" /* getUtil */])(state)
    };
  };
  
  /* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_3_react_redux__["b" /* connect */])(mapStateToProps, {
    fetchOrder: __WEBPACK_IMPORTED_MODULE_6__actions_fetchOrder__["a" /* fetchOrder */],
    setOpenCartTopBlock: __WEBPACK_IMPORTED_MODULE_7__actions_setOpenBlock__["a" /* setOpenCartTopBlock */],
    setCountCart: __WEBPACK_IMPORTED_MODULE_8__actions_setCountCart__["a" /* setCountCart */]
  })(CartTop));
  
  /***/ }),
  /* 151 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setOpenModal; });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(2);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_actions__ = __webpack_require__(1);
  
  
  
  var setOpenModal = Object(__WEBPACK_IMPORTED_MODULE_1_redux_actions__["a" /* createAction */])(__WEBPACK_IMPORTED_MODULE_0__constants__["k" /* SET_OPEN_MODAL */], function (open) {
    return open;
  });
  
  /***/ }),
  /* 152 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setComplement; });
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(2);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_actions__ = __webpack_require__(1);
  
  
  
  var setComplement = Object(__WEBPACK_IMPORTED_MODULE_1_redux_actions__["a" /* createAction */])(__WEBPACK_IMPORTED_MODULE_0__constants__["g" /* SET_COMPLEMENT */], function (complement) {
    return complement;
  });
  
  /***/ }),
  /* 153 */,
  /* 154 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(7);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_complement__ = __webpack_require__(118);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_modal__ = __webpack_require__(126);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_modal__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ComplementIconList__ = __webpack_require__(155);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_block__ = __webpack_require__(48);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constants_styles__ = __webpack_require__(142);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__actions_fetchComplements__ = __webpack_require__(143);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__actions_fetchVariation__ = __webpack_require__(144);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__actions_addProductInCart__ = __webpack_require__(145);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__actions_setQuantityVariation__ = __webpack_require__(146);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__selectors_complements__ = __webpack_require__(147);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__selectors_variation__ = __webpack_require__(148);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__selectors_order__ = __webpack_require__(23);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ProductVariationItem__ = __webpack_require__(157);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__selectors_util__ = __webpack_require__(50);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__actions_setOpenBlock__ = __webpack_require__(51);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__actions_setCountCart__ = __webpack_require__(52);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__actions_setOpenModal__ = __webpack_require__(151);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__actions_setComplement__ = __webpack_require__(152);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  var Product = function (_Component) {
    babelHelpers.inherits(Product, _Component);
  
    function Product() {
      var _ref;
  
      var _temp, _this, _ret;
  
      babelHelpers.classCallCheck(this, Product);
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = babelHelpers.possibleConstructorReturn(this, (_ref = Product.__proto__ || Object.getPrototypeOf(Product)).call.apply(_ref, [this].concat(args))), _this), _this.incrementQuantity = function (quantity) {
        quantity++;
        _this.props.setQuantityVariation(quantity);
      }, _this.decrementQuantity = function (quantity) {
        if (quantity > 1) {
          quantity--;
          _this.props.setQuantityVariation(quantity);
        }
      }, _this.buyProduct = function (id, quantity) {
        var payload = {
          order_item_data: {
            "purchased_entity_type": 'commerce_product_variation',
            "purchased_entity_id": id,
            "quantity": quantity
          }
        };
        _this.props.addProductInCart(payload);
        _this.props.setOpenComplementBlock(true);
      }, _this.handleSelectionComplement = function (type) {
        _this.props.setComplement(type);
        _this.props.setOpenModal(true);
      }, _this.closeModal = function () {
        _this.props.setCountCart(_this.props.order.count);
        _this.props.setOpenModal(false);
      }, _this.setChangeOpen = function () {
        _this.props.setCountCart(_this.props.order.count);
        _this.props.setOpenComplementBlock(false);
      }, _temp), babelHelpers.possibleConstructorReturn(_this, _ret);
    }
  
    babelHelpers.createClass(Product, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
  
        if (this.props.complements.length === 0) {
          this.props.fetchComplements();
        }
        if (Object.getOwnPropertyNames(this.props.variation).length === 0) {
          this.props.fetchVariation();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            complements = _props.complements,
            variation = _props.variation,
            util = _props.util,
            order = _props.order;
  
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          null,
          util.openComplementBlock && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__cart_block__["a" /* default */], {
            openBlock: util.openComplementBlock,
            cart: order,
            changeOpen: this.setChangeOpen }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__ComplementIconList__["a" /* default */], {
            complements: complements,
            onSelectedComplement: this.handleSelectionComplement
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_15__ProductVariationItem__["a" /* default */], {
            variation: variation,
            onDecrementQuantityClick: this.decrementQuantity,
            onIncrementQuantityClick: this.incrementQuantity,
            onBuyProductClick: this.buyProduct }),
          util.openModal && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_4_react_modal___default.a,
            {
              isOpen: util.openModal,
              onAfterOpen: this.afterOpenModal,
              onRequestClose: this.closeModal,
              style: __WEBPACK_IMPORTED_MODULE_7__constants_styles__["a" /* customStyles */],
              contentLabel: util.complement,
              ariaHideApp: false,
              shouldCloseOnEsc: false
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__cart_complement__["a" /* default */], { type: util.complement }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { className: 'complement__close icon__close', onClick: this.closeModal })
          )
        );
      }
    }]);
    return Product;
  }(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
  
  Product.propTypes = {
    fetchComplements: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    fetchVariation: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    setQuantityVariation: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    addProductInCart: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    setOpenComplementBlock: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    setCountCart: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    setOpenModal: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    setComplement: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
    complements: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
    order: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
    util: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
    variation: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  };
  
  Product.defaultProps = {
    complements: [],
    variation: {},
    order: {}
  };
  var mapStateToProps = function mapStateToProps(state) {
    return {
      complements: Object(__WEBPACK_IMPORTED_MODULE_12__selectors_complements__["b" /* getComplements */])(state),
      variation: Object(__WEBPACK_IMPORTED_MODULE_13__selectors_variation__["a" /* getVariation */])(state),
      order: Object(__WEBPACK_IMPORTED_MODULE_14__selectors_order__["a" /* getOrder */])(state),
      util: Object(__WEBPACK_IMPORTED_MODULE_16__selectors_util__["a" /* getUtil */])(state)
    };
  };
  
  /* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["b" /* connect */])(mapStateToProps, {
    fetchComplements: __WEBPACK_IMPORTED_MODULE_8__actions_fetchComplements__["a" /* fetchComplements */],
    fetchVariation: __WEBPACK_IMPORTED_MODULE_9__actions_fetchVariation__["a" /* fetchVariation */],
    setQuantityVariation: __WEBPACK_IMPORTED_MODULE_11__actions_setQuantityVariation__["a" /* setQuantityVariation */],
    addProductInCart: __WEBPACK_IMPORTED_MODULE_10__actions_addProductInCart__["a" /* addProductInCart */],
    setOpenComplementBlock: __WEBPACK_IMPORTED_MODULE_17__actions_setOpenBlock__["b" /* setOpenComplementBlock */],
    setCountCart: __WEBPACK_IMPORTED_MODULE_18__actions_setCountCart__["a" /* setCountCart */],
    setOpenModal: __WEBPACK_IMPORTED_MODULE_19__actions_setOpenModal__["a" /* setOpenModal */],
    setComplement: __WEBPACK_IMPORTED_MODULE_20__actions_setComplement__["a" /* setComplement */]
  })(Product));
  
  /***/ }),
  /* 155 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ComplementIcon__ = __webpack_require__(156);
  
  
  
  
  var ComplementIconList = function ComplementIconList(_ref) {
      var complements = _ref.complements,
          onSelectedComplement = _ref.onSelectedComplement;
  
      var handleComplementClick = function handleComplementClick(type) {
          onSelectedComplement(type);
      };
      var strToComponents = function strToComponents(complements) {
          return complements.map(function (complement) {
              return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__ComplementIcon__["a" /* default */], {
                  key: complement.type,
                  classIcon: complement.classIcon,
                  onComplementClick: function onComplementClick() {
                      return handleComplementClick(complement.type);
                  } });
          });
      };
  
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'ctn-product-detaills' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'ctn-product-detaills-text' },
              'Complemento:'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'ul',
              { className: 'ctn-product-detaills-icon' },
              strToComponents(complements)
          )
      );
  };
  
  ComplementIconList.propTypes = {
      complements: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.array.isRequired,
      onSelectedComplement: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
  };
  
  /* harmony default export */ __webpack_exports__["a"] = (ComplementIconList);
  
  /***/ }),
  /* 156 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
  
  
  
  var ComplementIcon = function ComplementIcon(_ref) {
      var onComplementClick = _ref.onComplementClick,
          classIcon = _ref.classIcon;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'li',
          { className: 'btn-complements', onClick: onComplementClick },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'a',
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('span', { className: 'icon-item ' + classIcon })
          )
      );
  };
  
  ComplementIcon.propTypes = {
      classIcon: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
      onComplementClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
  };
  
  /* harmony default export */ __webpack_exports__["a"] = (ComplementIcon);
  
  /***/ }),
  /* 157 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
  
  
  
  var getPriceData = function getPriceData(_ref) {
      var price = _ref.price,
          priceSale = _ref.priceSale;
  
      if (priceSale) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'ctn-product-detaills-price-data' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'ctn-product-detaills-sale-price oferta-normal' },
                  priceSale
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'ctn-product-detaills-price oferta-oferta' },
                  price
              )
          );
      } else {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'ctn-product-detaills-price normal' },
              price
          );
      }
  };
  
  var ProductVariationItem = function ProductVariationItem(_ref2) {
      var _ref2$variation = _ref2.variation,
          id = _ref2$variation.id,
          price = _ref2$variation.price,
          priceSale = _ref2$variation.priceSale,
          quantity = _ref2$variation.quantity,
          onDecrementQuantityClick = _ref2.onDecrementQuantityClick,
          onIncrementQuantityClick = _ref2.onIncrementQuantityClick,
          onBuyProductClick = _ref2.onBuyProductClick;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'ctn-product-data' },
          getPriceData({ price: price, priceSale: priceSale }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'ctn-product-value' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'ctn-car-cantidad-select' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'span',
                      { className: 'button-decrement', onClick: function onClick() {
                              return onDecrementQuantityClick(quantity);
                          } },
                      '-'
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', id: 'txt', value: quantity }),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'span',
                      { className: 'button-increment', onClick: function onClick() {
                              return onIncrementQuantityClick(quantity);
                          } },
                      '+'
                  )
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { onClick: function onClick() {
                      return onBuyProductClick(id, quantity);
                  }, 'class': 'button is-custom is-uppercase', value: 'A\xF1adir al carrito' })
          )
      );
  };
  ProductVariationItem.propTypes = {
      variation: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
          id: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
          price: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
          priceSale: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number,
          quantity: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired
      })
  
  };
  
  /* harmony default export */ __webpack_exports__["a"] = (ProductVariationItem);
  
  /***/ }),
  /* 158 */
  /***/ (function(module, __webpack_exports__, __webpack_require__) {
  
  "use strict";
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(3);
  /* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
  
  
  
  var ComplementItem = function ComplementItem(_ref) {
      var data = _ref.data,
          classes = _ref.classes,
          onComplementItemClick = _ref.onComplementItemClick;
  
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'column is-one-quarter compl-col' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: classes, onClick: function onClick() {
                      return onComplementItemClick(data);
                  } },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'div',
                  { className: 'complement__item__content' },
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'image-co' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: data.image })
                  ),
                  __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                      'div',
                      { className: 'complement__item__textarea' },
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'title-co' },
                          data.producto
                      ),
                      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                          'div',
                          { className: 'price-co' },
                          data.price__number
                      )
                  )
              )
          )
      );
  };
  
  ComplementItem.propTypes = {
      data: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({})
  };
  
  /* harmony default export */ __webpack_exports__["a"] = (ComplementItem);
  
  /***/ })
  /******/ ]);
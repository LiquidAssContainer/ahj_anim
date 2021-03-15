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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  /* global globalThis -- safe */
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(8)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(3);
var definePropertyModule = __webpack_require__(26);
var createPropertyDescriptor = __webpack_require__(31);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  /* global Symbol -- required for testing */
  return !String(Symbol());
});


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var DOMIterables = __webpack_require__(9);
var forEach = __webpack_require__(10);
var createNonEnumerableProperty = __webpack_require__(5);

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(11).forEach;
var arrayMethodIsStrict = __webpack_require__(35);

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(12);
var IndexedObject = __webpack_require__(14);
var toObject = __webpack_require__(15);
var toLength = __webpack_require__(17);
var arraySpeciesCreate = __webpack_require__(19);

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(13);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);
var classof = __webpack_require__(4);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(16);

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(18);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);
var isArray = __webpack_require__(20);
var wellKnownSymbol = __webpack_require__(21);

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(4);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var shared = __webpack_require__(22);
var has = __webpack_require__(32);
var uid = __webpack_require__(33);
var NATIVE_SYMBOL = __webpack_require__(6);
var USE_SYMBOL_AS_UID = __webpack_require__(34);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(23);
var store = __webpack_require__(24);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.9.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var setGlobal = __webpack_require__(25);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var createNonEnumerableProperty = __webpack_require__(5);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(3);
var IE8_DOM_DEFINE = __webpack_require__(27);
var anObject = __webpack_require__(29);
var toPrimitive = __webpack_require__(30);

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(3);
var fails = __webpack_require__(1);
var createElement = __webpack_require__(28);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var isObject = __webpack_require__(2);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__(6);

module.exports = NATIVE_SYMBOL
  /* global Symbol -- safe */
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(1);

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/css/main.css
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__(7);

// CONCATENATED MODULE: ./src/js/HometaskSwitch.js


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HometaskSwitch = /*#__PURE__*/function () {
  function HometaskSwitch(id) {
    _classCallCheck(this, HometaskSwitch);

    if (id) {
      this.switchTaskManually(id);
    }

    this.addEventListeners();
  }

  _createClass(HometaskSwitch, [{
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this = this;

      var tasks = document.getElementsByClassName('hometask');
      tasks.forEach(function (task) {
        task.addEventListener('click', function (e) {
          e.preventDefault();

          _this.switchTask(e.target);
        });
      });
    }
  }, {
    key: "switchTask",
    value: function switchTask(target) {
      var activeTask = document.getElementsByClassName('hometask_active')[0];

      if (target === activeTask) {
        return;
      }

      if (activeTask) {
        var activeSection = document.querySelector("[data-switch-section=\"".concat(activeTask.dataset.switchLink, "\"]"));
        activeSection === null || activeSection === void 0 ? void 0 : activeSection.classList.add('hidden');
        activeTask.classList.remove('hometask_active');
      }

      var newActiveSection = document.querySelector("[data-switch-section=\"".concat(target.dataset.switchLink, "\"]"));
      newActiveSection === null || newActiveSection === void 0 ? void 0 : newActiveSection.classList.remove('hidden');
      target.classList.add('hometask_active');
    }
  }, {
    key: "switchTaskManually",
    value: function switchTaskManually(id) {
      var target = document.querySelector("[data-switch-link=\"".concat(id, "\"]"));

      if (!target) {
        throw new Error('Нет элемента с таким id');
      }

      this.switchTask(target);
    }
  }]);

  return HometaskSwitch;
}();


// CONCATENATED MODULE: ./src/js/CollapseButton.js
function CollapseButton_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CollapseButton_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CollapseButton_createClass(Constructor, protoProps, staticProps) { if (protoProps) CollapseButton_defineProperties(Constructor.prototype, protoProps); if (staticProps) CollapseButton_defineProperties(Constructor, staticProps); return Constructor; }

var CollapseButton = /*#__PURE__*/function () {
  function CollapseButton() {
    CollapseButton_classCallCheck(this, CollapseButton);

    this.isExpanded = false;
    this.registerEvents();
  }

  CollapseButton_createClass(CollapseButton, [{
    key: "registerEvents",
    value: function registerEvents() {
      var _this = this;

      var btn = document.getElementById('collapse-btn');
      btn.addEventListener('click', function () {
        _this.isExpanded = !_this.isExpanded;
        var textElem = document.getElementById('hidden-text');
        var container = document.getElementsByClassName('collapse_hidden-text_container')[0];

        var _textElem$getBounding = textElem.getBoundingClientRect(),
            top = _textElem$getBounding.top,
            bottom = _textElem$getBounding.bottom;

        container.style.maxHeight = _this.isExpanded ? "".concat(bottom - top, "px") : 0;
      });
    }
  }]);

  return CollapseButton;
}();


// CONCATENATED MODULE: ./src/js/CallbackChat.js
function CallbackChat_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CallbackChat_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CallbackChat_createClass(Constructor, protoProps, staticProps) { if (protoProps) CallbackChat_defineProperties(Constructor.prototype, protoProps); if (staticProps) CallbackChat_defineProperties(Constructor, staticProps); return Constructor; }

var CallbackChat = /*#__PURE__*/function () {
  function CallbackChat() {
    CallbackChat_classCallCheck(this, CallbackChat);

    this.openBtn = document.getElementsByClassName('chat_toggle-btn')[0];
    this.closeBtn = document.getElementsByClassName('chat_close-btn')[0];
    this.chatElem = document.getElementsByClassName('chat')[0];
    this.registerEvents();
  }

  CallbackChat_createClass(CallbackChat, [{
    key: "openChat",
    value: function openChat() {
      this.openBtn.classList.add('closing');
      this.chatElem.classList.remove('hidden');
      this.chatElem.classList.add('opening');
    }
  }, {
    key: "closeChat",
    value: function closeChat() {
      this.chatElem.classList.add('closing');
      this.openBtn.classList.remove('hidden');
      this.openBtn.classList.add('opening');
    }
  }, {
    key: "onAnimationEnd",
    value: function onAnimationEnd(_ref) {
      var target = _ref.target;

      if (target.classList.contains('opening')) {
        target.classList.remove('opening');
      }

      if (target.classList.contains('closing')) {
        target.classList.remove('closing');
        target.classList.add('hidden');
      }
    }
  }, {
    key: "registerEvents",
    value: function registerEvents() {
      var _this = this;

      this.openBtn.addEventListener('click', function () {
        return _this.openChat();
      });
      this.closeBtn.addEventListener('click', function () {
        return _this.closeChat();
      });
      this.chatElem.addEventListener('animationend', function (e) {
        _this.onAnimationEnd(e);
      });
      this.openBtn.addEventListener('animationend', function (e) {
        _this.onAnimationEnd(e);
      });
    }
  }]);

  return CallbackChat;
}();


// CONCATENATED MODULE: ./src/js/Liker.js
function Liker_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Liker_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Liker_createClass(Constructor, protoProps, staticProps) { if (protoProps) Liker_defineProperties(Constructor.prototype, protoProps); if (staticProps) Liker_defineProperties(Constructor, staticProps); return Constructor; }

var Liker = /*#__PURE__*/function () {
  function Liker() {
    Liker_classCallCheck(this, Liker);

    this.btn = document.getElementsByClassName('liker-btn')[0];
    this.registerEvents();
  }

  Liker_createClass(Liker, [{
    key: "createLikeElem",
    value: function createLikeElem() {
      var like = document.createElement('div');
      like.className = 'like_wrapper left-to-right';
      like.innerHTML = '<div class="like flying-up"></div>';
      var btnRect = this.btn.getBoundingClientRect();
      like.style.top = "".concat(btnRect.top, "px");
      like.style.left = "".concat(btnRect.left + btnRect.width / 2 - 10, "px");
      var random = Math.floor(Math.random() * 4) + 1;
      like.style.animationName = "flying".concat(random);
      like.addEventListener('animationend', function (_ref) {
        var target = _ref.target;
        target.remove();
      });
      return like;
    }
  }, {
    key: "registerEvents",
    value: function registerEvents() {
      var _this = this;

      this.btn.addEventListener('click', function () {
        var likerSection = document.getElementsByClassName('liker-section')[0];

        var like = _this.createLikeElem();

        likerSection.appendChild(like);
      });
    }
  }]);

  return Liker;
}();


// CONCATENATED MODULE: ./src/js/app.js




var hometaskSwitch = new HometaskSwitch();
hometaskSwitch.switchTaskManually('1');
var collapseBtn = new CollapseButton();
var chat = new CallbackChat();
var liker = new Liker();
// CONCATENATED MODULE: ./src/index.js



/***/ })
/******/ ]);
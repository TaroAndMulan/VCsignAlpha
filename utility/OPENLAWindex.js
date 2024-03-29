'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var objectWithoutPropertiesLoose = _objectWithoutPropertiesLoose;

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var objectWithoutProperties = _objectWithoutProperties;

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _extends_1 = createCommonjsModule(function (module) {
function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;
});

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
});

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized;

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

var possibleConstructorReturn = _possibleConstructorReturn;

var getPrototypeOf = createCommonjsModule(function (module) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
});

var setPrototypeOf = createCommonjsModule(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
});

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

var inherits = _inherits;

var reactIs_production_min = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: !0
});
var b = "function" === typeof Symbol && Symbol.for,
    c = b ? Symbol.for("react.element") : 60103,
    d = b ? Symbol.for("react.portal") : 60106,
    e = b ? Symbol.for("react.fragment") : 60107,
    f = b ? Symbol.for("react.strict_mode") : 60108,
    g = b ? Symbol.for("react.profiler") : 60114,
    h = b ? Symbol.for("react.provider") : 60109,
    k = b ? Symbol.for("react.context") : 60110,
    l = b ? Symbol.for("react.async_mode") : 60111,
    m = b ? Symbol.for("react.concurrent_mode") : 60111,
    n = b ? Symbol.for("react.forward_ref") : 60112,
    p = b ? Symbol.for("react.suspense") : 60113,
    q = b ? Symbol.for("react.suspense_list") : 60120,
    r = b ? Symbol.for("react.memo") : 60115,
    t = b ? Symbol.for("react.lazy") : 60116,
    v = b ? Symbol.for("react.fundamental") : 60117,
    w = b ? Symbol.for("react.responder") : 60118;

function x(a) {
  if ("object" === typeof a && null !== a) {
    var u = a.$$typeof;

    switch (u) {
      case c:
        switch (a = a.type, a) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a;

          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case n:
              case h:
                return a;

              default:
                return u;
            }

        }

      case t:
      case r:
      case d:
        return u;
    }
  }
}

function y(a) {
  return x(a) === m;
}

exports.typeOf = x;
exports.AsyncMode = l;
exports.ConcurrentMode = m;
exports.ContextConsumer = k;
exports.ContextProvider = h;
exports.Element = c;
exports.ForwardRef = n;
exports.Fragment = e;
exports.Lazy = t;
exports.Memo = r;
exports.Portal = d;
exports.Profiler = g;
exports.StrictMode = f;
exports.Suspense = p;

exports.isValidElementType = function (a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === v || a.$$typeof === w);
};

exports.isAsyncMode = function (a) {
  return y(a) || x(a) === l;
};

exports.isConcurrentMode = y;

exports.isContextConsumer = function (a) {
  return x(a) === k;
};

exports.isContextProvider = function (a) {
  return x(a) === h;
};

exports.isElement = function (a) {
  return "object" === typeof a && null !== a && a.$$typeof === c;
};

exports.isForwardRef = function (a) {
  return x(a) === n;
};

exports.isFragment = function (a) {
  return x(a) === e;
};

exports.isLazy = function (a) {
  return x(a) === t;
};

exports.isMemo = function (a) {
  return x(a) === r;
};

exports.isPortal = function (a) {
  return x(a) === d;
};

exports.isProfiler = function (a) {
  return x(a) === g;
};

exports.isStrictMode = function (a) {
  return x(a) === f;
};

exports.isSuspense = function (a) {
  return x(a) === p;
};
});

unwrapExports(reactIs_production_min);
var reactIs_production_min_1 = reactIs_production_min.typeOf;
var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
var reactIs_production_min_6 = reactIs_production_min.Element;
var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
var reactIs_production_min_8 = reactIs_production_min.Fragment;
var reactIs_production_min_9 = reactIs_production_min.Lazy;
var reactIs_production_min_10 = reactIs_production_min.Memo;
var reactIs_production_min_11 = reactIs_production_min.Portal;
var reactIs_production_min_12 = reactIs_production_min.Profiler;
var reactIs_production_min_13 = reactIs_production_min.StrictMode;
var reactIs_production_min_14 = reactIs_production_min.Suspense;
var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
var reactIs_production_min_20 = reactIs_production_min.isElement;
var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
var reactIs_production_min_22 = reactIs_production_min.isFragment;
var reactIs_production_min_23 = reactIs_production_min.isLazy;
var reactIs_production_min_24 = reactIs_production_min.isMemo;
var reactIs_production_min_25 = reactIs_production_min.isPortal;
var reactIs_production_min_26 = reactIs_production_min.isProfiler;
var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
var reactIs_production_min_28 = reactIs_production_min.isSuspense;

var reactIs_development = createCommonjsModule(function (module, exports) {

if (process.env.NODE_ENV !== "production") {
  (function () {

    Object.defineProperty(exports, '__esModule', {
      value: true
    }); // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.

    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE);
    }
    /**
     * Forked from fbjs/warning:
     * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
     *
     * Only change is we use console.warn instead of console.error,
     * and do nothing when 'console' is not supported.
     * This really simplifies the code.
     * ---
     * Similar to invariant but only logs a warning if the condition is not met.
     * This can be used to log issues in development environments in critical
     * paths. Removing the logging code for production environments will keep the
     * same logic and follow the same code paths.
     */


    var lowPriorityWarning = function () {};

    {
      var printWarning = function (format) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var argIndex = 0;
        var message = 'Warning: ' + format.replace(/%s/g, function () {
          return args[argIndex++];
        });

        if (typeof console !== 'undefined') {
          console.warn(message);
        }

        try {
          // --- Welcome to debugging React ---
          // This error was thrown as a convenience so that you can use this stack
          // to find the callsite that caused this warning to fire.
          throw new Error(message);
        } catch (x) {}
      };

      lowPriorityWarning = function (condition, format) {
        if (format === undefined) {
          throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
        }

        if (!condition) {
          for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
          }

          printWarning.apply(undefined, [format].concat(args));
        }
      };
    }
    var lowPriorityWarning$1 = lowPriorityWarning;

    function typeOf(object) {
      if (typeof object === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_LAZY_TYPE:
          case REACT_MEMO_TYPE:
          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode


    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true;
          lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }
      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }

    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }

    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }

    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }

    function isElement(object) {
      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }

    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }

    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }

    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }

    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }

    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }

    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }

    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }

    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    exports.typeOf = typeOf;
    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isValidElementType = isValidElementType;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
  })();
}
});

unwrapExports(reactIs_development);
var reactIs_development_1 = reactIs_development.typeOf;
var reactIs_development_2 = reactIs_development.AsyncMode;
var reactIs_development_3 = reactIs_development.ConcurrentMode;
var reactIs_development_4 = reactIs_development.ContextConsumer;
var reactIs_development_5 = reactIs_development.ContextProvider;
var reactIs_development_6 = reactIs_development.Element;
var reactIs_development_7 = reactIs_development.ForwardRef;
var reactIs_development_8 = reactIs_development.Fragment;
var reactIs_development_9 = reactIs_development.Lazy;
var reactIs_development_10 = reactIs_development.Memo;
var reactIs_development_11 = reactIs_development.Portal;
var reactIs_development_12 = reactIs_development.Profiler;
var reactIs_development_13 = reactIs_development.StrictMode;
var reactIs_development_14 = reactIs_development.Suspense;
var reactIs_development_15 = reactIs_development.isValidElementType;
var reactIs_development_16 = reactIs_development.isAsyncMode;
var reactIs_development_17 = reactIs_development.isConcurrentMode;
var reactIs_development_18 = reactIs_development.isContextConsumer;
var reactIs_development_19 = reactIs_development.isContextProvider;
var reactIs_development_20 = reactIs_development.isElement;
var reactIs_development_21 = reactIs_development.isForwardRef;
var reactIs_development_22 = reactIs_development.isFragment;
var reactIs_development_23 = reactIs_development.isLazy;
var reactIs_development_24 = reactIs_development.isMemo;
var reactIs_development_25 = reactIs_development.isPortal;
var reactIs_development_26 = reactIs_development.isProfiler;
var reactIs_development_27 = reactIs_development.isStrictMode;
var reactIs_development_28 = reactIs_development.isSuspense;

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

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
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


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

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
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

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var printWarning = function () {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;

  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function (text) {
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
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }

        if (error && !(error instanceof Error)) {
          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
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
/**
 * Resets warning cache when testing.
 *
 * @private
 */


checkPropTypes.resetWarningCache = function () {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes;

var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

var printWarning$1 = function () {};

if (process.env.NODE_ENV !== 'production') {
  printWarning$1 = function (text) {
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

var factoryWithTypeCheckers = function (isValidElement, throwOnDirectAccess) {
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


  var ANONYMOUS = '<<anonymous>>'; // Important!
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
    elementType: createElementTypeTypeChecker(),
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
  } // Make `instanceof Error` still work for returned errors.


  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }

    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;

          if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning$1('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
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
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1);

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

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      if (!reactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
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
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning$1('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }

      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];

      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);

        if (type === 'symbol') {
          return String(value);
        }

        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
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
        if (has$1(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

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
      process.env.NODE_ENV !== 'production' ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];

      if (typeof checker !== 'function') {
        printWarning$1('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];

        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1) == null) {
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

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

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
      } // We need to check all keys in case some are required but missing from
      // props.


      var allKeys = objectAssign({}, props[propName], shapeTypes);

      for (var key in allKeys) {
        var checker = shapeTypes[key];

        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }

        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1);

        if (error) {
          return error;
        }
      }

      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
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
    } // falsy value can't be a Symbol


    if (!propValue) {
      return false;
    } // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'


    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    } // Fallback for non-spec compliant Symbols which are polyfilled.


    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  } // Equivalent of `typeof` but with special handling for array and regexp.


  function getPropType(propValue) {
    var propType = typeof propValue;

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
  } // This handles more types than `getPropType`. Only used for error messages.
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
  } // Returns a string that is postfixed to a warning about an invalid type.
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
  } // Returns class name of the object, if any.


  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }

    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.resetWarningCache = checkPropTypes_1.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

function emptyFunction() {}

function emptyFunctionWithReset() {}

emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }

    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  }
  shim.isRequired = shim;

  function getShim() {
    return shim;
  }
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.

  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs; // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod


  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var bpfrpt_proptype_ObjectAnyType = process.env.NODE_ENV === 'production' ? null : propTypes.objectOf(function (props, propName, componentName) {
  if (!Object.prototype.hasOwnProperty.call(props, propName)) {
    throw new Error("Prop `".concat(propName, "` has type 'any' or 'mixed', but was not provided to `").concat(componentName, "`. Pass undefined or any other value."));
  }
});
var bpfrpt_proptype_ImageValueType = process.env.NODE_ENV === 'production' ? null : {
  file: function file() {
    return (typeof File === "function" ? propTypes.instanceOf(File) : propTypes.any).apply(this, arguments);
  },
  value: propTypes.string.isRequired
};
var bpfrpt_proptype_FieldExtraTextType = process.env.NODE_ENV === 'production' ? null : propTypes.oneOfType([propTypes.string, propTypes.func]);
var bpfrpt_proptype_FieldExtraTextMapType = process.env.NODE_ENV === 'production' ? null : propTypes.objectOf(propTypes.oneOfType([propTypes.string, propTypes.func]).isRequired);
var bpfrpt_proptype_FieldEnumType = process.env.NODE_ENV === 'production' ? null : propTypes.oneOf(["Address", "Choice", "Collection", "Date", "DateTime", "EthAddress", "ExternalSignature", "Identity", "Image", "LargeText", "Number", "Period", "Structure", "Text", "YesNo"]);
var bpfrpt_proptype_FieldAndWildcardEnumType = process.env.NODE_ENV === 'production' ? null : propTypes.oneOfType([propTypes.oneOf(["*"]), propTypes.oneOf(["Address", "Choice", "Collection", "Date", "DateTime", "EthAddress", "ExternalSignature", "Identity", "Image", "LargeText", "Number", "Period", "Structure", "Text", "YesNo"])]);
var bpfrpt_proptype_ValidateOnKeyUpFuncType = process.env.NODE_ENV === 'production' ? null : propTypes.func;
var bpfrpt_proptype_ValidationEventType = process.env.NODE_ENV === 'production' ? null : propTypes.oneOf(["blur", "change"]);
var bpfrpt_proptype_FieldErrorType = process.env.NODE_ENV === 'production' ? null : {
  elementName: propTypes.string.isRequired,
  elementType: propTypes.oneOf(["Address", "Choice", "Collection", "Date", "DateTime", "EthAddress", "ExternalSignature", "Identity", "Image", "LargeText", "Number", "Period", "Structure", "Text", "YesNo"]).isRequired,
  errorMessage: propTypes.string.isRequired,
  eventType: propTypes.oneOf(["blur", "change"]).isRequired,
  isError: propTypes.bool.isRequired,
  value: propTypes.oneOfType([propTypes.string, propTypes.shape({
    file: function file() {
      return (typeof File === "function" ? propTypes.instanceOf(File) : propTypes.any).apply(this, arguments);
    },
    value: propTypes.string.isRequired
  })]).isRequired
};
var bpfrpt_proptype_FieldPropsType = process.env.NODE_ENV === 'production' ? null : propTypes.objectOf(propTypes.objectOf(function (props, propName, componentName) {
  if (!Object.prototype.hasOwnProperty.call(props, propName)) {
    throw new Error("Prop `".concat(propName, "` has type 'any' or 'mixed', but was not provided to `").concat(componentName, "`. Pass undefined or any other value."));
  }
}).isRequired);
var bpfrpt_proptype_FieldPropsValueType = process.env.NODE_ENV === 'production' ? null : {
  onBlur: propTypes.func,
  onChange: propTypes.func
};
var bpfrpt_proptype_OnChangeFuncType = process.env.NODE_ENV === 'production' ? null : propTypes.func;
var bpfrpt_proptype_OnValidateObjectReturnType = process.env.NODE_ENV === 'production' ? null : {
  errorMessage: propTypes.string
};
var bpfrpt_proptype_OnValidateFuncType = process.env.NODE_ENV === 'production' ? null : propTypes.func;
var bpfrpt_proptype_ValidityErrorObjectType = process.env.NODE_ENV === 'production' ? null : {
  errorMessage: propTypes.string,
  isError: propTypes.bool.isRequired
};
var bpfrpt_proptype_ValidityFuncType = process.env.NODE_ENV === 'production' ? null : propTypes.func;

var _TYPE_TO_READABLE;

/**
 * TYPES
 */

/**
 * CONSTANTS
 */
var CSS_CLASS_NAMESPACE = 'openlaw-el';
var ADDRESS = 'Address';
var CHOICE = 'Choice';
var COLLECTION = 'Collection';
var DATE = 'Date';
var DATE_TIME = 'DateTime';
var ETH_ADDRESS = 'EthAddress';
var EXTERNAL_SIGNATURE = 'ExternalSignature';
var IDENTITY = 'Identity';
var IMAGE = 'Image';
var LARGE_TEXT = 'LargeText';
var NUMBER = 'Number';
var PERIOD = 'Period';
var TEXT = 'Text';
var YES_NO = 'YesNo';
var CSS_CLASS_NAMES = {
  button: "".concat(CSS_CLASS_NAMESPACE, "-button"),
  buttonDisabled: "".concat(CSS_CLASS_NAMESPACE, "-button--disabled"),
  buttonSecondary: "".concat(CSS_CLASS_NAMESPACE, "-button-secondary"),
  collection: "".concat(CSS_CLASS_NAMESPACE, "-collection"),
  collectionButtonRemove: "".concat(CSS_CLASS_NAMESPACE, "-collection__button-remove"),
  collectionDescription: "".concat(CSS_CLASS_NAMESPACE, "-collection__description"),
  collectionRow: "".concat(CSS_CLASS_NAMESPACE, "-collection__row"),
  field: "".concat(CSS_CLASS_NAMESPACE, "-field"),
  fieldErrorMessage: "".concat(CSS_CLASS_NAMESPACE, "-field__error-message"),
  fieldExtraText: "".concat(CSS_CLASS_NAMESPACE, "-field__extra-text"),
  fieldImageEditor: "".concat(CSS_CLASS_NAMESPACE, "-field-image__editor"),
  fieldImageEditorActions: "".concat(CSS_CLASS_NAMESPACE, "-field-image__editor-actions"),
  fieldImageEditorActionsStacked: "".concat(CSS_CLASS_NAMESPACE, "-field-image__editor-actions--stacked"),
  fieldInput: "".concat(CSS_CLASS_NAMESPACE, "-field__input"),
  fieldInputError: "".concat(CSS_CLASS_NAMESPACE, "-field__input--error"),
  fieldLabel: "".concat(CSS_CLASS_NAMESPACE, "-field__label"),
  fieldLabelIos: "".concat(CSS_CLASS_NAMESPACE, "-field__label--ios"),
  fieldLabelText: "".concat(CSS_CLASS_NAMESPACE, "-field__label-text"),
  fieldRadio: "".concat(CSS_CLASS_NAMESPACE, "-field__radio"),
  fieldSelect: "".concat(CSS_CLASS_NAMESPACE, "-field__select"),
  fieldTextarea: "".concat(CSS_CLASS_NAMESPACE, "-field__textarea"),
  fieldTypeToLower: function fieldTypeToLower(type) {
    return type ? "".concat(CSS_CLASS_NAMESPACE, "-field-").concat(type.toLowerCase()) : '';
  },
  form: "".concat(CSS_CLASS_NAMESPACE, "-form"),
  section: "".concat(CSS_CLASS_NAMESPACE, "-section"),
  sectionTitle: "".concat(CSS_CLASS_NAMESPACE, "-section__title"),
  structure: "".concat(CSS_CLASS_NAMESPACE, "-structure"),
  structureRow: "".concat(CSS_CLASS_NAMESPACE, "-structure__row")
}; // Field inputs
// Not including Collection or Structure.

var ELEMENT_INPUT_TYPES = [ADDRESS, CHOICE, DATE, DATE_TIME, ETH_ADDRESS, EXTERNAL_SIGNATURE, IDENTITY, IMAGE, LARGE_TEXT, NUMBER, PERIOD, TEXT, YES_NO];
var FIELD_DEFAULT_ERROR_MESSAGE = 'Something looks incorrect.';
var TYPE_TO_READABLE = (_TYPE_TO_READABLE = {}, defineProperty(_TYPE_TO_READABLE, ADDRESS, 'Address'), defineProperty(_TYPE_TO_READABLE, CHOICE, 'Choice'), defineProperty(_TYPE_TO_READABLE, COLLECTION, 'Collection'), defineProperty(_TYPE_TO_READABLE, DATE, 'Date'), defineProperty(_TYPE_TO_READABLE, DATE_TIME, "Date & Time"), defineProperty(_TYPE_TO_READABLE, ETH_ADDRESS, 'Ethereum Address'), defineProperty(_TYPE_TO_READABLE, EXTERNAL_SIGNATURE, 'Email'), defineProperty(_TYPE_TO_READABLE, IDENTITY, 'Email'), defineProperty(_TYPE_TO_READABLE, IMAGE, 'Image'), defineProperty(_TYPE_TO_READABLE, LARGE_TEXT, 'Text box'), defineProperty(_TYPE_TO_READABLE, NUMBER, 'Number'), defineProperty(_TYPE_TO_READABLE, PERIOD, 'Period of time'), defineProperty(_TYPE_TO_READABLE, TEXT, 'Text'), defineProperty(_TYPE_TO_READABLE, YES_NO, 'Yes or No'), _TYPE_TO_READABLE);

function ExtraText(props) {
  var text = props.text;
  if (!text) return null;
  return typeof text === 'function' ? React.createElement("div", {
    className: CSS_CLASS_NAMES.fieldExtraText
  }, text()) : React.createElement("div", {
    className: CSS_CLASS_NAMES.fieldExtraText
  }, React.createElement("span", null, text));
}
ExtraText.propTypes = process.env.NODE_ENV === 'production' ? null : {
  text: function text() {
    return (typeof bpfrpt_proptype_FieldExtraTextType === "function" ? bpfrpt_proptype_FieldExtraTextType : propTypes.shape(bpfrpt_proptype_FieldExtraTextType)).apply(this, arguments);
  }
};

var toStr = Object.prototype.toString;

var isArguments = function isArguments(value) {
  var str = toStr.call(value);
  var isArgs = str === '[object Arguments]';

  if (!isArgs) {
    isArgs = str !== '[object Array]' && value !== null && typeof value === 'object' && typeof value.length === 'number' && value.length >= 0 && toStr.call(value.callee) === '[object Function]';
  }

  return isArgs;
};

var keysShim;

if (!Object.keys) {
  // modified from https://github.com/es-shims/es5-shim
  var has$2 = Object.prototype.hasOwnProperty;
  var toStr$1 = Object.prototype.toString;

  var isArgs = isArguments; // eslint-disable-line global-require


  var isEnumerable = Object.prototype.propertyIsEnumerable;
  var hasDontEnumBug = !isEnumerable.call({
    toString: null
  }, 'toString');
  var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
  var dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'];

  var equalsConstructorPrototype = function (o) {
    var ctor = o.constructor;
    return ctor && ctor.prototype === o;
  };

  var excludedKeys = {
    $applicationCache: true,
    $console: true,
    $external: true,
    $frame: true,
    $frameElement: true,
    $frames: true,
    $innerHeight: true,
    $innerWidth: true,
    $onmozfullscreenchange: true,
    $onmozfullscreenerror: true,
    $outerHeight: true,
    $outerWidth: true,
    $pageXOffset: true,
    $pageYOffset: true,
    $parent: true,
    $scrollLeft: true,
    $scrollTop: true,
    $scrollX: true,
    $scrollY: true,
    $self: true,
    $webkitIndexedDB: true,
    $webkitStorageInfo: true,
    $window: true
  };

  var hasAutomationEqualityBug = function () {
    /* global window */
    if (typeof window === 'undefined') {
      return false;
    }

    for (var k in window) {
      try {
        if (!excludedKeys['$' + k] && has$2.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
          try {
            equalsConstructorPrototype(window[k]);
          } catch (e) {
            return true;
          }
        }
      } catch (e) {
        return true;
      }
    }

    return false;
  }();

  var equalsConstructorPrototypeIfNotBuggy = function (o) {
    /* global window */
    if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
      return equalsConstructorPrototype(o);
    }

    try {
      return equalsConstructorPrototype(o);
    } catch (e) {
      return false;
    }
  };

  keysShim = function keys(object) {
    var isObject = object !== null && typeof object === 'object';
    var isFunction = toStr$1.call(object) === '[object Function]';
    var isArguments = isArgs(object);
    var isString = isObject && toStr$1.call(object) === '[object String]';
    var theKeys = [];

    if (!isObject && !isFunction && !isArguments) {
      throw new TypeError('Object.keys called on a non-object');
    }

    var skipProto = hasProtoEnumBug && isFunction;

    if (isString && object.length > 0 && !has$2.call(object, 0)) {
      for (var i = 0; i < object.length; ++i) {
        theKeys.push(String(i));
      }
    }

    if (isArguments && object.length > 0) {
      for (var j = 0; j < object.length; ++j) {
        theKeys.push(String(j));
      }
    } else {
      for (var name in object) {
        if (!(skipProto && name === 'prototype') && has$2.call(object, name)) {
          theKeys.push(String(name));
        }
      }
    }

    if (hasDontEnumBug) {
      var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

      for (var k = 0; k < dontEnums.length; ++k) {
        if (!(skipConstructor && dontEnums[k] === 'constructor') && has$2.call(object, dontEnums[k])) {
          theKeys.push(dontEnums[k]);
        }
      }
    }

    return theKeys;
  };
}

var implementation = keysShim;

var slice = Array.prototype.slice;



var origKeys = Object.keys;
var keysShim$1 = origKeys ? function keys(o) {
  return origKeys(o);
} : implementation;
var originalKeys = Object.keys;

keysShim$1.shim = function shimObjectKeys() {
  if (Object.keys) {
    var keysWorksWithArguments = function () {
      // Safari 5.0 bug
      var args = Object.keys(arguments);
      return args && args.length === arguments.length;
    }(1, 2);

    if (!keysWorksWithArguments) {
      Object.keys = function keys(object) {
        // eslint-disable-line func-name-matching
        if (isArguments(object)) {
          return originalKeys(slice.call(object));
        }

        return originalKeys(object);
      };
    }
  } else {
    Object.keys = keysShim$1;
  }

  return Object.keys || keysShim$1;
};

var objectKeys = keysShim$1;

var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
var toStr$2 = Object.prototype.toString;

var isStandardArguments = function isArguments(value) {
  if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) {
    return false;
  }

  return toStr$2.call(value) === '[object Arguments]';
};

var isLegacyArguments = function isArguments(value) {
  if (isStandardArguments(value)) {
    return true;
  }

  return value !== null && typeof value === 'object' && typeof value.length === 'number' && value.length >= 0 && toStr$2.call(value) !== '[object Array]' && toStr$2.call(value.callee) === '[object Function]';
};

var supportsStandardArguments = function () {
  return isStandardArguments(arguments);
}();

isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

var isArguments$1 = supportsStandardArguments ? isStandardArguments : isLegacyArguments;

/* https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.is */

var NumberIsNaN = function (value) {
  return value !== value;
};

var objectIs = function is(a, b) {
  if (a === 0 && b === 0) {
    return 1 / a === 1 / b;
  } else if (a === b) {
    return true;
  } else if (NumberIsNaN(a) && NumberIsNaN(b)) {
    return true;
  }

  return false;
};

/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice$1 = Array.prototype.slice;
var toStr$3 = Object.prototype.toString;
var funcType = '[object Function]';

var implementation$1 = function bind(that) {
  var target = this;

  if (typeof target !== 'function' || toStr$3.call(target) !== funcType) {
    throw new TypeError(ERROR_MESSAGE + target);
  }

  var args = slice$1.call(arguments, 1);
  var bound;

  var binder = function () {
    if (this instanceof bound) {
      var result = target.apply(this, args.concat(slice$1.call(arguments)));

      if (Object(result) === result) {
        return result;
      }

      return this;
    } else {
      return target.apply(that, args.concat(slice$1.call(arguments)));
    }
  };

  var boundLength = Math.max(0, target.length - args.length);
  var boundArgs = [];

  for (var i = 0; i < boundLength; i++) {
    boundArgs.push('$' + i);
  }

  bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

  if (target.prototype) {
    var Empty = function Empty() {};

    Empty.prototype = target.prototype;
    bound.prototype = new Empty();
    Empty.prototype = null;
  }

  return bound;
};

var functionBind = Function.prototype.bind || implementation$1;

var src = functionBind.call(Function.call, Object.prototype.hasOwnProperty);

var regexExec = RegExp.prototype.exec;
var gOPD = Object.getOwnPropertyDescriptor;

var tryRegexExecCall = function tryRegexExec(value) {
  try {
    var lastIndex = value.lastIndex;
    value.lastIndex = 0;
    regexExec.call(value);
    return true;
  } catch (e) {
    return false;
  } finally {
    value.lastIndex = lastIndex;
  }
};

var toStr$4 = Object.prototype.toString;
var regexClass = '[object RegExp]';
var hasToStringTag$1 = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

var isRegex = function isRegex(value) {
  if (!value || typeof value !== 'object') {
    return false;
  }

  if (!hasToStringTag$1) {
    return toStr$4.call(value) === regexClass;
  }

  var descriptor = gOPD(value, 'lastIndex');
  var hasLastIndexDataProperty = descriptor && src(descriptor, 'value');

  if (!hasLastIndexDataProperty) {
    return false;
  }

  return tryRegexExecCall(value);
};

var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';
var toStr$5 = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
  return typeof fn === 'function' && toStr$5.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
  var obj = {};

  try {
    origDefineProperty(obj, 'x', {
      enumerable: false,
      value: obj
    }); // eslint-disable-next-line no-unused-vars, no-restricted-syntax

    for (var _ in obj) {
      // jscs:ignore disallowUnusedVariables
      return false;
    }

    return obj.x === obj;
  } catch (e) {
    /* this is IE 8. */
    return false;
  }
};

var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty$1 = function (object, name, value, predicate) {
  if (name in object && (!isFunction(predicate) || !predicate())) {
    return;
  }

  if (supportsDescriptors) {
    origDefineProperty(object, name, {
      configurable: true,
      enumerable: false,
      value: value,
      writable: true
    });
  } else {
    object[name] = value;
  }
};

var defineProperties = function (object, map) {
  var predicates = arguments.length > 2 ? arguments[2] : {};
  var props = objectKeys(map);

  if (hasSymbols) {
    props = concat.call(props, Object.getOwnPropertySymbols(map));
  }

  for (var i = 0; i < props.length; i += 1) {
    defineProperty$1(object, props[i], map[props[i]], predicates[props[i]]);
  }
};

defineProperties.supportsDescriptors = !!supportsDescriptors;
var defineProperties_1 = defineProperties;

var toObject$1 = Object;
var TypeErr = TypeError;

var implementation$2 = function flags() {
  if (this != null && this !== toObject$1(this)) {
    throw new TypeErr('RegExp.prototype.flags getter called on non-object');
  }

  var result = '';

  if (this.global) {
    result += 'g';
  }

  if (this.ignoreCase) {
    result += 'i';
  }

  if (this.multiline) {
    result += 'm';
  }

  if (this.dotAll) {
    result += 's';
  }

  if (this.unicode) {
    result += 'u';
  }

  if (this.sticky) {
    result += 'y';
  }

  return result;
};

var supportsDescriptors$1 = defineProperties_1.supportsDescriptors;

var gOPD$1 = Object.getOwnPropertyDescriptor;
var TypeErr$1 = TypeError;

var polyfill = function getPolyfill() {
  if (!supportsDescriptors$1) {
    throw new TypeErr$1('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
  }

  if (/a/mig.flags === 'gim') {
    var descriptor = gOPD$1(RegExp.prototype, 'flags');

    if (descriptor && typeof descriptor.get === 'function' && typeof /a/.dotAll === 'boolean') {
      return descriptor.get;
    }
  }

  return implementation$2;
};

var supportsDescriptors$2 = defineProperties_1.supportsDescriptors;



var gOPD$2 = Object.getOwnPropertyDescriptor;
var defineProperty$2 = Object.defineProperty;
var TypeErr$2 = TypeError;
var getProto = Object.getPrototypeOf;
var regex = /a/;

var shim = function shimFlags() {
  if (!supportsDescriptors$2 || !getProto) {
    throw new TypeErr$2('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
  }

  var polyfill$1 = polyfill();
  var proto = getProto(regex);
  var descriptor = gOPD$2(proto, 'flags');

  if (!descriptor || descriptor.get !== polyfill$1) {
    defineProperty$2(proto, 'flags', {
      configurable: true,
      enumerable: false,
      get: polyfill$1
    });
  }

  return polyfill$1;
};

var flagsBound = Function.call.bind(implementation$2);
defineProperties_1(flagsBound, {
  getPolyfill: polyfill,
  implementation: implementation$2,
  shim: shim
});
var regexp_prototype_flags = flagsBound;

var getDay = Date.prototype.getDay;

var tryDateObject = function tryDateObject(value) {
  try {
    getDay.call(value);
    return true;
  } catch (e) {
    return false;
  }
};

var toStr$6 = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag$2 = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

var isDateObject = function isDateObject(value) {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  return hasToStringTag$2 ? tryDateObject(value) : toStr$6.call(value) === dateClass;
};

var getTime = Date.prototype.getTime;

function deepEqual(actual, expected, options) {
  var opts = options || {}; // 7.1. All identical values are equivalent, as determined by ===.

  if (opts.strict ? objectIs(actual, expected) : actual === expected) {
    return true;
  } // 7.3. Other pairs that do not both pass typeof value == 'object', equivalence is determined by ==.


  if (!actual || !expected || typeof actual !== 'object' && typeof expected !== 'object') {
    return opts.strict ? objectIs(actual, expected) : actual == expected;
  }
  /*
   * 7.4. For all other Object pairs, including Array objects, equivalence is
   * determined by having the same number of owned properties (as verified
   * with Object.prototype.hasOwnProperty.call), the same set of keys
   * (although not necessarily the same order), equivalent values for every
   * corresponding key, and an identical 'prototype' property. Note: this
   * accounts for both named and indexed properties on Arrays.
   */
  // eslint-disable-next-line no-use-before-define


  return objEquiv(actual, expected, opts);
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer(x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') {
    return false;
  }

  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }

  if (x.length > 0 && typeof x[0] !== 'number') {
    return false;
  }

  return true;
}

function objEquiv(a, b, opts) {
  /* eslint max-statements: [2, 50] */
  var i, key;

  if (typeof a !== typeof b) {
    return false;
  }

  if (isUndefinedOrNull(a) || isUndefinedOrNull(b)) {
    return false;
  } // an identical 'prototype' property.


  if (a.prototype !== b.prototype) {
    return false;
  }

  if (isArguments$1(a) !== isArguments$1(b)) {
    return false;
  }

  var aIsRegex = isRegex(a);
  var bIsRegex = isRegex(b);

  if (aIsRegex !== bIsRegex) {
    return false;
  }

  if (aIsRegex || bIsRegex) {
    return a.source === b.source && regexp_prototype_flags(a) === regexp_prototype_flags(b);
  }

  if (isDateObject(a) && isDateObject(b)) {
    return getTime.call(a) === getTime.call(b);
  }

  var aIsBuffer = isBuffer(a);
  var bIsBuffer = isBuffer(b);

  if (aIsBuffer !== bIsBuffer) {
    return false;
  }

  if (aIsBuffer || bIsBuffer) {
    // && would work too, because both are true or both false here
    if (a.length !== b.length) {
      return false;
    }

    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }

    return true;
  }

  if (typeof a !== typeof b) {
    return false;
  }

  try {
    var ka = objectKeys(a);
    var kb = objectKeys(b);
  } catch (e) {
    // happens when one is a string literal and the other isn't
    return false;
  } // having the same number of owned properties (keys incorporates hasOwnProperty)


  if (ka.length !== kb.length) {
    return false;
  } // the same set of keys (although not necessarily the same order),


  ka.sort();
  kb.sort(); // ~~~cheap key test

  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i]) {
      return false;
    }
  } // equivalent values for every corresponding key, and ~~~possibly expensive deep test


  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];

    if (!deepEqual(a[key], b[key], opts)) {
      return false;
    }
  }

  return true;
}

var deepEqual_1 = deepEqual;

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;

      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined$1,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined$1;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },
    stop: function () {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function (record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
 module.exports );

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
});

var regenerator = runtime_1;

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var arrayWithHoles = _arrayWithHoles;

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

var iterableToArrayLimit = _iterableToArrayLimit;

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var nonIterableRest = _nonIterableRest;

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

var slicedToArray = _slicedToArray;

function shallowEqualArrays(arrA, arrB) {
  if (arrA === arrB) {
    return true;
  }

  if (!arrA || !arrB) {
    return false;
  }

  var len = arrA.length;

  if (arrB.length !== len) {
    return false;
  }

  for (var i = 0; i < len; i++) {
    if (arrA[i] !== arrB[i]) {
      return false;
    }
  }

  return true;
}

var arrays = shallowEqualArrays;

var _slicedToArray$1 = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var dist = function (_ref) {
  var data = _ref.data;
  var multiSection = _ref.multiSection;

  function nextNonEmptySectionIndex(sectionIndex) {
    if (sectionIndex === null) {
      sectionIndex = 0;
    } else {
      sectionIndex++;
    }

    while (sectionIndex < data.length && data[sectionIndex] === 0) {
      sectionIndex++;
    }

    return sectionIndex === data.length ? null : sectionIndex;
  }

  function prevNonEmptySectionIndex(sectionIndex) {
    if (sectionIndex === null) {
      sectionIndex = data.length - 1;
    } else {
      sectionIndex--;
    }

    while (sectionIndex >= 0 && data[sectionIndex] === 0) {
      sectionIndex--;
    }

    return sectionIndex === -1 ? null : sectionIndex;
  }

  function next(position) {
    var _position = _slicedToArray$1(position, 2);

    var sectionIndex = _position[0];
    var itemIndex = _position[1];

    if (multiSection) {
      if (itemIndex === null || itemIndex === data[sectionIndex] - 1) {
        sectionIndex = nextNonEmptySectionIndex(sectionIndex);

        if (sectionIndex === null) {
          return [null, null];
        }

        return [sectionIndex, 0];
      }

      return [sectionIndex, itemIndex + 1];
    }

    if (data === 0 || itemIndex === data - 1) {
      return [null, null];
    }

    if (itemIndex === null) {
      return [null, 0];
    }

    return [null, itemIndex + 1];
  }

  function prev(position) {
    var _position2 = _slicedToArray$1(position, 2);

    var sectionIndex = _position2[0];
    var itemIndex = _position2[1];

    if (multiSection) {
      if (itemIndex === null || itemIndex === 0) {
        sectionIndex = prevNonEmptySectionIndex(sectionIndex);

        if (sectionIndex === null) {
          return [null, null];
        }

        return [sectionIndex, data[sectionIndex] - 1];
      }

      return [sectionIndex, itemIndex - 1];
    }

    if (data === 0 || itemIndex === 0) {
      return [null, null];
    }

    if (itemIndex === null) {
      return [null, data - 1];
    }

    return [null, itemIndex - 1];
  }

  function isLast(position) {
    return next(position)[1] === null;
  }

  return {
    next: next,
    prev: prev,
    isLast: isLast
  };
};

var propIsEnumerable$1 = Object.prototype.propertyIsEnumerable;

function ToObject(val) {
  if (val == null) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function ownEnumerableKeys(obj) {
  var keys = Object.getOwnPropertyNames(obj);

  if (Object.getOwnPropertySymbols) {
    keys = keys.concat(Object.getOwnPropertySymbols(obj));
  }

  return keys.filter(function (key) {
    return propIsEnumerable$1.call(obj, key);
  });
}

var objectAssign$1 = Object.assign || function (target, source) {
  var from;
  var keys;
  var to = ToObject(target);

  for (var s = 1; s < arguments.length; s++) {
    from = arguments[s];
    keys = ownEnumerableKeys(Object(from));

    for (var i = 0; i < keys.length; i++) {
      to[keys[i]] = from[keys[i]];
    }
  }

  return to;
};

var dist$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i['return']) _i['return']();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError('Invalid attempt to destructure non-iterable instance');
    }
  };
}();

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    'default': obj
  };
}

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
}



var _objectAssign2 = _interopRequireDefault(objectAssign$1);

var truthy = function truthy(x) {
  return x;
};

exports['default'] = function (input) {
  var _ref = Array.isArray(input) && input.length === 2 ? input : [input, null];

  var _ref2 = _slicedToArray(_ref, 2);

  var theme = _ref2[0];
  var classNameDecorator = _ref2[1];
  return function (key) {
    for (var _len = arguments.length, names = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      names[_key - 1] = arguments[_key];
    }

    var styles = names.map(function (name) {
      return theme[name];
    }).filter(truthy);
    return typeof styles[0] === 'string' || typeof classNameDecorator === 'function' ? {
      key: key,
      className: classNameDecorator ? classNameDecorator.apply(undefined, _toConsumableArray(styles)) : styles.join(' ')
    } : {
      key: key,
      style: _objectAssign2['default'].apply(undefined, [{}].concat(_toConsumableArray(styles)))
    };
  };
};

module.exports = exports['default'];
});

unwrapExports(dist$1);

var compareObjects_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

exports.default = compareObjects;

function compareObjects(objA, objB) {
  var keys = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  if (objA === objB) {
    return false;
  }

  var aKeys = Object.keys(objA);
  var bKeys = Object.keys(objB);

  if (aKeys.length !== bKeys.length) {
    return true;
  }

  var keysMap = {};
  var i = void 0,
      len = void 0;

  for (i = 0, len = keys.length; i < len; i++) {
    keysMap[keys[i]] = true;
  }

  for (i = 0, len = aKeys.length; i < len; i++) {
    var key = aKeys[i];
    var aValue = objA[key];
    var bValue = objB[key];

    if (aValue === bValue) {
      continue;
    }

    if (!keysMap[key] || aValue === null || bValue === null || (typeof aValue === 'undefined' ? 'undefined' : _typeof(aValue)) !== 'object' || (typeof bValue === 'undefined' ? 'undefined' : _typeof(bValue)) !== 'object') {
      return true;
    }

    var aValueKeys = Object.keys(aValue);
    var bValueKeys = Object.keys(bValue);

    if (aValueKeys.length !== bValueKeys.length) {
      return true;
    }

    for (var n = 0, length = aValueKeys.length; n < length; n++) {
      var aValueKey = aValueKeys[n];

      if (aValue[aValueKey] !== bValue[aValueKey]) {
        return true;
      }
    }
  }

  return false;
}
});

unwrapExports(compareObjects_1);

var SectionTitle_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();



var _react2 = _interopRequireDefault(React__default);



var _propTypes2 = _interopRequireDefault(propTypes);



var _compareObjects2 = _interopRequireDefault(compareObjects_1);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var SectionTitle = function (_Component) {
  _inherits(SectionTitle, _Component);

  function SectionTitle() {
    _classCallCheck(this, SectionTitle);

    return _possibleConstructorReturn(this, (SectionTitle.__proto__ || Object.getPrototypeOf(SectionTitle)).apply(this, arguments));
  }

  _createClass(SectionTitle, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return (0, _compareObjects2.default)(nextProps, this.props);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          section = _props.section,
          renderSectionTitle = _props.renderSectionTitle,
          theme = _props.theme,
          sectionKeyPrefix = _props.sectionKeyPrefix;
      var sectionTitle = renderSectionTitle(section);

      if (!sectionTitle) {
        return null;
      }

      return _react2.default.createElement('div', theme(sectionKeyPrefix + 'title', 'sectionTitle'), sectionTitle);
    }
  }]);

  return SectionTitle;
}(React__default.Component);

SectionTitle.propTypes = {
  section: _propTypes2.default.any.isRequired,
  renderSectionTitle: _propTypes2.default.func.isRequired,
  theme: _propTypes2.default.func.isRequired,
  sectionKeyPrefix: _propTypes2.default.string.isRequired
};
exports.default = SectionTitle;
});

unwrapExports(SectionTitle_1);

var Item_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();



var _react2 = _interopRequireDefault(React__default);



var _propTypes2 = _interopRequireDefault(propTypes);



var _compareObjects2 = _interopRequireDefault(compareObjects_1);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Item = function (_Component) {
  _inherits(Item, _Component);

  function Item() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Item);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Item.__proto__ || Object.getPrototypeOf(Item)).call.apply(_ref, [this].concat(args))), _this), _this.storeItemReference = function (item) {
      if (item !== null) {
        _this.item = item;
      }
    }, _this.onMouseEnter = function (event) {
      var _this$props = _this.props,
          sectionIndex = _this$props.sectionIndex,
          itemIndex = _this$props.itemIndex;

      _this.props.onMouseEnter(event, {
        sectionIndex: sectionIndex,
        itemIndex: itemIndex
      });
    }, _this.onMouseLeave = function (event) {
      var _this$props2 = _this.props,
          sectionIndex = _this$props2.sectionIndex,
          itemIndex = _this$props2.itemIndex;

      _this.props.onMouseLeave(event, {
        sectionIndex: sectionIndex,
        itemIndex: itemIndex
      });
    }, _this.onMouseDown = function (event) {
      var _this$props3 = _this.props,
          sectionIndex = _this$props3.sectionIndex,
          itemIndex = _this$props3.itemIndex;

      _this.props.onMouseDown(event, {
        sectionIndex: sectionIndex,
        itemIndex: itemIndex
      });
    }, _this.onClick = function (event) {
      var _this$props4 = _this.props,
          sectionIndex = _this$props4.sectionIndex,
          itemIndex = _this$props4.itemIndex;

      _this.props.onClick(event, {
        sectionIndex: sectionIndex,
        itemIndex: itemIndex
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Item, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return (0, _compareObjects2.default)(nextProps, this.props, ['renderItemData']);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          isHighlighted = _props.isHighlighted,
          item = _props.item,
          renderItem = _props.renderItem,
          renderItemData = _props.renderItemData,
          restProps = _objectWithoutProperties(_props, ['isHighlighted', 'item', 'renderItem', 'renderItemData']);

      delete restProps.sectionIndex;
      delete restProps.itemIndex;

      if (typeof restProps.onMouseEnter === 'function') {
        restProps.onMouseEnter = this.onMouseEnter;
      }

      if (typeof restProps.onMouseLeave === 'function') {
        restProps.onMouseLeave = this.onMouseLeave;
      }

      if (typeof restProps.onMouseDown === 'function') {
        restProps.onMouseDown = this.onMouseDown;
      }

      if (typeof restProps.onClick === 'function') {
        restProps.onClick = this.onClick;
      }

      return _react2.default.createElement('li', _extends({
        role: 'option'
      }, restProps, {
        ref: this.storeItemReference
      }), renderItem(item, _extends({
        isHighlighted: isHighlighted
      }, renderItemData)));
    }
  }]);

  return Item;
}(React__default.Component);

Item.propTypes = {
  sectionIndex: _propTypes2.default.number,
  isHighlighted: _propTypes2.default.bool.isRequired,
  itemIndex: _propTypes2.default.number.isRequired,
  item: _propTypes2.default.any.isRequired,
  renderItem: _propTypes2.default.func.isRequired,
  renderItemData: _propTypes2.default.object.isRequired,
  onMouseEnter: _propTypes2.default.func,
  onMouseLeave: _propTypes2.default.func,
  onMouseDown: _propTypes2.default.func,
  onClick: _propTypes2.default.func
};
exports.default = Item;
});

unwrapExports(Item_1);

var ItemsList_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();



var _react2 = _interopRequireDefault(React__default);



var _propTypes2 = _interopRequireDefault(propTypes);



var _Item2 = _interopRequireDefault(Item_1);



var _compareObjects2 = _interopRequireDefault(compareObjects_1);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ItemsList = function (_Component) {
  _inherits(ItemsList, _Component);

  function ItemsList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ItemsList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ItemsList.__proto__ || Object.getPrototypeOf(ItemsList)).call.apply(_ref, [this].concat(args))), _this), _this.storeHighlightedItemReference = function (highlightedItem) {
      _this.props.onHighlightedItemChange(highlightedItem === null ? null : highlightedItem.item);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ItemsList, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return (0, _compareObjects2.default)(nextProps, this.props, ['itemProps']);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          items = _props.items,
          itemProps = _props.itemProps,
          renderItem = _props.renderItem,
          renderItemData = _props.renderItemData,
          sectionIndex = _props.sectionIndex,
          highlightedItemIndex = _props.highlightedItemIndex,
          getItemId = _props.getItemId,
          theme = _props.theme,
          keyPrefix = _props.keyPrefix;
      var sectionPrefix = sectionIndex === null ? keyPrefix : keyPrefix + 'section-' + sectionIndex + '-';
      var isItemPropsFunction = typeof itemProps === 'function';
      return _react2.default.createElement('ul', _extends({
        role: 'listbox'
      }, theme(sectionPrefix + 'items-list', 'itemsList')), items.map(function (item, itemIndex) {
        var isFirst = itemIndex === 0;
        var isHighlighted = itemIndex === highlightedItemIndex;
        var itemKey = sectionPrefix + 'item-' + itemIndex;
        var itemPropsObj = isItemPropsFunction ? itemProps({
          sectionIndex: sectionIndex,
          itemIndex: itemIndex
        }) : itemProps;

        var allItemProps = _extends({
          id: getItemId(sectionIndex, itemIndex),
          'aria-selected': isHighlighted
        }, theme(itemKey, 'item', isFirst && 'itemFirst', isHighlighted && 'itemHighlighted'), itemPropsObj);

        if (isHighlighted) {
          allItemProps.ref = _this2.storeHighlightedItemReference;
        } // `key` is provided by theme()

        /* eslint-disable react/jsx-key */


        return _react2.default.createElement(_Item2.default, _extends({}, allItemProps, {
          sectionIndex: sectionIndex,
          isHighlighted: isHighlighted,
          itemIndex: itemIndex,
          item: item,
          renderItem: renderItem,
          renderItemData: renderItemData
        }));
        /* eslint-enable react/jsx-key */
      }));
    }
  }]);

  return ItemsList;
}(React__default.Component);

ItemsList.propTypes = {
  items: _propTypes2.default.array.isRequired,
  itemProps: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func]),
  renderItem: _propTypes2.default.func.isRequired,
  renderItemData: _propTypes2.default.object.isRequired,
  sectionIndex: _propTypes2.default.number,
  highlightedItemIndex: _propTypes2.default.number,
  onHighlightedItemChange: _propTypes2.default.func.isRequired,
  getItemId: _propTypes2.default.func.isRequired,
  theme: _propTypes2.default.func.isRequired,
  keyPrefix: _propTypes2.default.string.isRequired
};
ItemsList.defaultProps = {
  sectionIndex: null
};
exports.default = ItemsList;
});

unwrapExports(ItemsList_1);

var Autowhatever_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();



var _react2 = _interopRequireDefault(React__default);



var _propTypes2 = _interopRequireDefault(propTypes);



var _sectionIterator2 = _interopRequireDefault(dist);



var _reactThemeable2 = _interopRequireDefault(dist$1);



var _SectionTitle2 = _interopRequireDefault(SectionTitle_1);



var _ItemsList2 = _interopRequireDefault(ItemsList_1);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var emptyObject = {};

var defaultRenderInputComponent = function defaultRenderInputComponent(props) {
  return _react2.default.createElement('input', props);
};

var defaultRenderItemsContainer = function defaultRenderItemsContainer(_ref) {
  var containerProps = _ref.containerProps,
      children = _ref.children;
  return _react2.default.createElement('div', containerProps, children);
};

var defaultTheme = {
  container: 'react-autowhatever__container',
  containerOpen: 'react-autowhatever__container--open',
  input: 'react-autowhatever__input',
  inputOpen: 'react-autowhatever__input--open',
  inputFocused: 'react-autowhatever__input--focused',
  itemsContainer: 'react-autowhatever__items-container',
  itemsContainerOpen: 'react-autowhatever__items-container--open',
  itemsList: 'react-autowhatever__items-list',
  item: 'react-autowhatever__item',
  itemFirst: 'react-autowhatever__item--first',
  itemHighlighted: 'react-autowhatever__item--highlighted',
  sectionContainer: 'react-autowhatever__section-container',
  sectionContainerFirst: 'react-autowhatever__section-container--first',
  sectionTitle: 'react-autowhatever__section-title'
};

var Autowhatever = function (_Component) {
  _inherits(Autowhatever, _Component);

  function Autowhatever(props) {
    _classCallCheck(this, Autowhatever);

    var _this = _possibleConstructorReturn(this, (Autowhatever.__proto__ || Object.getPrototypeOf(Autowhatever)).call(this, props));

    _this.storeInputReference = function (input) {
      if (input !== null) {
        _this.input = input;
      }
    };

    _this.storeItemsContainerReference = function (itemsContainer) {
      if (itemsContainer !== null) {
        _this.itemsContainer = itemsContainer;
      }
    };

    _this.onHighlightedItemChange = function (highlightedItem) {
      _this.highlightedItem = highlightedItem;
    };

    _this.getItemId = function (sectionIndex, itemIndex) {
      if (itemIndex === null) {
        return null;
      }

      var id = _this.props.id;
      var section = sectionIndex === null ? '' : 'section-' + sectionIndex;
      return 'react-autowhatever-' + id + '-' + section + '-item-' + itemIndex;
    };

    _this.onFocus = function (event) {
      var inputProps = _this.props.inputProps;

      _this.setState({
        isInputFocused: true
      });

      inputProps.onFocus && inputProps.onFocus(event);
    };

    _this.onBlur = function (event) {
      var inputProps = _this.props.inputProps;

      _this.setState({
        isInputFocused: false
      });

      inputProps.onBlur && inputProps.onBlur(event);
    };

    _this.onKeyDown = function (event) {
      var _this$props = _this.props,
          inputProps = _this$props.inputProps,
          highlightedSectionIndex = _this$props.highlightedSectionIndex,
          highlightedItemIndex = _this$props.highlightedItemIndex;

      switch (event.key) {
        case 'ArrowDown':
        case 'ArrowUp':
          {
            var nextPrev = event.key === 'ArrowDown' ? 'next' : 'prev';

            var _this$sectionIterator = _this.sectionIterator[nextPrev]([highlightedSectionIndex, highlightedItemIndex]),
                _this$sectionIterator2 = _slicedToArray(_this$sectionIterator, 2),
                newHighlightedSectionIndex = _this$sectionIterator2[0],
                newHighlightedItemIndex = _this$sectionIterator2[1];

            inputProps.onKeyDown(event, {
              newHighlightedSectionIndex: newHighlightedSectionIndex,
              newHighlightedItemIndex: newHighlightedItemIndex
            });
            break;
          }

        default:
          inputProps.onKeyDown(event, {
            highlightedSectionIndex: highlightedSectionIndex,
            highlightedItemIndex: highlightedItemIndex
          });
      }
    };

    _this.highlightedItem = null;
    _this.state = {
      isInputFocused: false
    };

    _this.setSectionsItems(props);

    _this.setSectionIterator(props);

    _this.setTheme(props);

    return _this;
  }

  _createClass(Autowhatever, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.ensureHighlightedItemIsVisible();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.items !== this.props.items) {
        this.setSectionsItems(nextProps);
      }

      if (nextProps.items !== this.props.items || nextProps.multiSection !== this.props.multiSection) {
        this.setSectionIterator(nextProps);
      }

      if (nextProps.theme !== this.props.theme) {
        this.setTheme(nextProps);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.ensureHighlightedItemIsVisible();
    }
  }, {
    key: 'setSectionsItems',
    value: function setSectionsItems(props) {
      if (props.multiSection) {
        this.sectionsItems = props.items.map(function (section) {
          return props.getSectionItems(section);
        });
        this.sectionsLengths = this.sectionsItems.map(function (items) {
          return items.length;
        });
        this.allSectionsAreEmpty = this.sectionsLengths.every(function (itemsCount) {
          return itemsCount === 0;
        });
      }
    }
  }, {
    key: 'setSectionIterator',
    value: function setSectionIterator(props) {
      this.sectionIterator = (0, _sectionIterator2.default)({
        multiSection: props.multiSection,
        data: props.multiSection ? this.sectionsLengths : props.items.length
      });
    }
  }, {
    key: 'setTheme',
    value: function setTheme(props) {
      this.theme = (0, _reactThemeable2.default)(props.theme);
    }
  }, {
    key: 'renderSections',
    value: function renderSections() {
      var _this2 = this;

      if (this.allSectionsAreEmpty) {
        return null;
      }

      var theme = this.theme;
      var _props = this.props,
          id = _props.id,
          items = _props.items,
          renderItem = _props.renderItem,
          renderItemData = _props.renderItemData,
          renderSectionTitle = _props.renderSectionTitle,
          highlightedSectionIndex = _props.highlightedSectionIndex,
          highlightedItemIndex = _props.highlightedItemIndex,
          itemProps = _props.itemProps;
      return items.map(function (section, sectionIndex) {
        var keyPrefix = 'react-autowhatever-' + id + '-';
        var sectionKeyPrefix = keyPrefix + 'section-' + sectionIndex + '-';
        var isFirstSection = sectionIndex === 0; // `key` is provided by theme()

        /* eslint-disable react/jsx-key */

        return _react2.default.createElement('div', theme(sectionKeyPrefix + 'container', 'sectionContainer', isFirstSection && 'sectionContainerFirst'), _react2.default.createElement(_SectionTitle2.default, {
          section: section,
          renderSectionTitle: renderSectionTitle,
          theme: theme,
          sectionKeyPrefix: sectionKeyPrefix
        }), _react2.default.createElement(_ItemsList2.default, {
          items: _this2.sectionsItems[sectionIndex],
          itemProps: itemProps,
          renderItem: renderItem,
          renderItemData: renderItemData,
          sectionIndex: sectionIndex,
          highlightedItemIndex: highlightedSectionIndex === sectionIndex ? highlightedItemIndex : null,
          onHighlightedItemChange: _this2.onHighlightedItemChange,
          getItemId: _this2.getItemId,
          theme: theme,
          keyPrefix: keyPrefix,
          ref: _this2.storeItemsListReference
        }));
        /* eslint-enable react/jsx-key */
      });
    }
  }, {
    key: 'renderItems',
    value: function renderItems() {
      var items = this.props.items;

      if (items.length === 0) {
        return null;
      }

      var theme = this.theme;
      var _props2 = this.props,
          id = _props2.id,
          renderItem = _props2.renderItem,
          renderItemData = _props2.renderItemData,
          highlightedSectionIndex = _props2.highlightedSectionIndex,
          highlightedItemIndex = _props2.highlightedItemIndex,
          itemProps = _props2.itemProps;
      return _react2.default.createElement(_ItemsList2.default, {
        items: items,
        itemProps: itemProps,
        renderItem: renderItem,
        renderItemData: renderItemData,
        highlightedItemIndex: highlightedSectionIndex === null ? highlightedItemIndex : null,
        onHighlightedItemChange: this.onHighlightedItemChange,
        getItemId: this.getItemId,
        theme: theme,
        keyPrefix: 'react-autowhatever-' + id + '-'
      });
    }
  }, {
    key: 'ensureHighlightedItemIsVisible',
    value: function ensureHighlightedItemIsVisible() {
      var highlightedItem = this.highlightedItem;

      if (!highlightedItem) {
        return;
      }

      var itemsContainer = this.itemsContainer;
      var itemOffsetRelativeToContainer = highlightedItem.offsetParent === itemsContainer ? highlightedItem.offsetTop : highlightedItem.offsetTop - itemsContainer.offsetTop;
      var scrollTop = itemsContainer.scrollTop; // Top of the visible area

      if (itemOffsetRelativeToContainer < scrollTop) {
        // Item is off the top of the visible area
        scrollTop = itemOffsetRelativeToContainer;
      } else if (itemOffsetRelativeToContainer + highlightedItem.offsetHeight > scrollTop + itemsContainer.offsetHeight) {
        // Item is off the bottom of the visible area
        scrollTop = itemOffsetRelativeToContainer + highlightedItem.offsetHeight - itemsContainer.offsetHeight;
      }

      if (scrollTop !== itemsContainer.scrollTop) {
        itemsContainer.scrollTop = scrollTop;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var theme = this.theme;
      var _props3 = this.props,
          id = _props3.id,
          multiSection = _props3.multiSection,
          renderInputComponent = _props3.renderInputComponent,
          renderItemsContainer = _props3.renderItemsContainer,
          highlightedSectionIndex = _props3.highlightedSectionIndex,
          highlightedItemIndex = _props3.highlightedItemIndex;
      var isInputFocused = this.state.isInputFocused;
      var renderedItems = multiSection ? this.renderSections() : this.renderItems();
      var isOpen = renderedItems !== null;
      var ariaActivedescendant = this.getItemId(highlightedSectionIndex, highlightedItemIndex);
      var itemsContainerId = 'react-autowhatever-' + id;

      var containerProps = _extends({
        role: 'combobox',
        'aria-haspopup': 'listbox',
        'aria-owns': itemsContainerId,
        'aria-expanded': isOpen
      }, theme('react-autowhatever-' + id + '-container', 'container', isOpen && 'containerOpen'), this.props.containerProps);

      var inputComponent = renderInputComponent(_extends({
        type: 'text',
        value: '',
        autoComplete: 'off',
        'aria-autocomplete': 'list',
        'aria-controls': itemsContainerId,
        'aria-activedescendant': ariaActivedescendant
      }, theme('react-autowhatever-' + id + '-input', 'input', isOpen && 'inputOpen', isInputFocused && 'inputFocused'), this.props.inputProps, {
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onKeyDown: this.props.inputProps.onKeyDown && this.onKeyDown,
        ref: this.storeInputReference
      }));
      var itemsContainer = renderItemsContainer({
        containerProps: _extends({
          id: itemsContainerId,
          role: 'listbox'
        }, theme('react-autowhatever-' + id + '-items-container', 'itemsContainer', isOpen && 'itemsContainerOpen'), {
          ref: this.storeItemsContainerReference
        }),
        children: renderedItems
      });
      return _react2.default.createElement('div', containerProps, inputComponent, itemsContainer);
    }
  }]);

  return Autowhatever;
}(React__default.Component);

Autowhatever.propTypes = {
  id: _propTypes2.default.string,
  // Used in aria-* attributes. If multiple Autowhatever's are rendered on a page, they must have unique ids.
  multiSection: _propTypes2.default.bool,
  // Indicates whether a multi section layout should be rendered.
  renderInputComponent: _propTypes2.default.func,
  // When specified, it is used to render the input element.
  renderItemsContainer: _propTypes2.default.func,
  // Renders the items container.
  items: _propTypes2.default.array.isRequired,
  // Array of items or sections to render.
  renderItem: _propTypes2.default.func,
  // This function renders a single item.
  renderItemData: _propTypes2.default.object,
  // Arbitrary data that will be passed to renderItem()
  renderSectionTitle: _propTypes2.default.func,
  // This function gets a section and renders its title.
  getSectionItems: _propTypes2.default.func,
  // This function gets a section and returns its items, which will be passed into `renderItem` for rendering.
  containerProps: _propTypes2.default.object,
  // Arbitrary container props
  inputProps: _propTypes2.default.object,
  // Arbitrary input props
  itemProps: _propTypes2.default.oneOfType([// Arbitrary item props
  _propTypes2.default.object, _propTypes2.default.func]),
  highlightedSectionIndex: _propTypes2.default.number,
  // Section index of the highlighted item
  highlightedItemIndex: _propTypes2.default.number,
  // Highlighted item index (within a section)
  theme: _propTypes2.default.oneOfType([// Styles. See: https://github.com/markdalgleish/react-themeable
  _propTypes2.default.object, _propTypes2.default.array])
};
Autowhatever.defaultProps = {
  id: '1',
  multiSection: false,
  renderInputComponent: defaultRenderInputComponent,
  renderItemsContainer: defaultRenderItemsContainer,
  renderItem: function renderItem() {
    throw new Error('`renderItem` must be provided');
  },
  renderItemData: emptyObject,
  renderSectionTitle: function renderSectionTitle() {
    throw new Error('`renderSectionTitle` must be provided');
  },
  getSectionItems: function getSectionItems() {
    throw new Error('`getSectionItems` must be provided');
  },
  containerProps: emptyObject,
  inputProps: emptyObject,
  itemProps: emptyObject,
  highlightedSectionIndex: null,
  highlightedItemIndex: null,
  theme: defaultTheme
};
exports.default = Autowhatever;
});

unwrapExports(Autowhatever_1);

var dist$2 = Autowhatever_1.default;

var theme = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultTheme = exports.defaultTheme = {
  container: 'react-autosuggest__container',
  containerOpen: 'react-autosuggest__container--open',
  input: 'react-autosuggest__input',
  inputOpen: 'react-autosuggest__input--open',
  inputFocused: 'react-autosuggest__input--focused',
  suggestionsContainer: 'react-autosuggest__suggestions-container',
  suggestionsContainerOpen: 'react-autosuggest__suggestions-container--open',
  suggestionsList: 'react-autosuggest__suggestions-list',
  suggestion: 'react-autosuggest__suggestion',
  suggestionFirst: 'react-autosuggest__suggestion--first',
  suggestionHighlighted: 'react-autosuggest__suggestion--highlighted',
  sectionContainer: 'react-autosuggest__section-container',
  sectionContainerFirst: 'react-autosuggest__section-container--first',
  sectionTitle: 'react-autosuggest__section-title'
};

var mapToAutowhateverTheme = exports.mapToAutowhateverTheme = function mapToAutowhateverTheme(theme) {
  var result = {};

  for (var key in theme) {
    switch (key) {
      case 'suggestionsContainer':
        result['itemsContainer'] = theme[key];
        break;

      case 'suggestionsContainerOpen':
        result['itemsContainerOpen'] = theme[key];
        break;

      case 'suggestion':
        result['item'] = theme[key];
        break;

      case 'suggestionFirst':
        result['itemFirst'] = theme[key];
        break;

      case 'suggestionHighlighted':
        result['itemHighlighted'] = theme[key];
        break;

      case 'suggestionsList':
        result['itemsList'] = theme[key];
        break;

      default:
        result[key] = theme[key];
    }
  }

  return result;
};
});

unwrapExports(theme);
var theme_1 = theme.defaultTheme;
var theme_2 = theme.mapToAutowhateverTheme;

var Autosuggest_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();



var _react2 = _interopRequireDefault(React__default);



var _propTypes2 = _interopRequireDefault(propTypes);



var _arrays2 = _interopRequireDefault(arrays);



var _reactAutowhatever2 = _interopRequireDefault(dist$2);



function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var alwaysTrue = function alwaysTrue() {
  return true;
};

var defaultShouldRenderSuggestions = function defaultShouldRenderSuggestions(value) {
  return value.trim().length > 0;
};

var defaultRenderSuggestionsContainer = function defaultRenderSuggestionsContainer(_ref) {
  var containerProps = _ref.containerProps,
      children = _ref.children;
  return _react2.default.createElement('div', containerProps, children);
};

var Autosuggest = function (_Component) {
  _inherits(Autosuggest, _Component);

  function Autosuggest(_ref2) {
    var alwaysRenderSuggestions = _ref2.alwaysRenderSuggestions;

    _classCallCheck(this, Autosuggest);

    var _this = _possibleConstructorReturn(this, (Autosuggest.__proto__ || Object.getPrototypeOf(Autosuggest)).call(this));

    _initialiseProps.call(_this);

    _this.state = {
      isFocused: false,
      isCollapsed: !alwaysRenderSuggestions,
      highlightedSectionIndex: null,
      highlightedSuggestionIndex: null,
      highlightedSuggestion: null,
      valueBeforeUpDown: null
    };
    _this.justPressedUpDown = false;
    _this.justMouseEntered = false;
    _this.pressedSuggestion = null;
    return _this;
  }

  _createClass(Autosuggest, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('mousedown', this.onDocumentMouseDown);
      document.addEventListener('mouseup', this.onDocumentMouseUp);
      this.input = this.autowhatever.input;
      this.suggestionsContainer = this.autowhatever.itemsContainer;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ((0, _arrays2.default)(nextProps.suggestions, this.props.suggestions)) {
        if (nextProps.highlightFirstSuggestion && nextProps.suggestions.length > 0 && this.justPressedUpDown === false && this.justMouseEntered === false) {
          this.highlightFirstSuggestion();
        }
      } else {
        if (this.willRenderSuggestions(nextProps)) {
          if (this.state.isCollapsed && !this.justSelectedSuggestion) {
            this.revealSuggestions();
          }
        } else {
          this.resetHighlightedSuggestion();
        }
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _props = this.props,
          suggestions = _props.suggestions,
          onSuggestionHighlighted = _props.onSuggestionHighlighted,
          highlightFirstSuggestion = _props.highlightFirstSuggestion;

      if (!(0, _arrays2.default)(suggestions, prevProps.suggestions) && suggestions.length > 0 && highlightFirstSuggestion) {
        this.highlightFirstSuggestion();
        return;
      }

      if (onSuggestionHighlighted) {
        var highlightedSuggestion = this.getHighlightedSuggestion();
        var prevHighlightedSuggestion = prevState.highlightedSuggestion;

        if (highlightedSuggestion != prevHighlightedSuggestion) {
          onSuggestionHighlighted({
            suggestion: highlightedSuggestion
          });
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.onDocumentMouseDown);
      document.removeEventListener('mouseup', this.onDocumentMouseUp);
    }
  }, {
    key: 'updateHighlightedSuggestion',
    value: function updateHighlightedSuggestion(sectionIndex, suggestionIndex, prevValue) {
      var _this2 = this;

      this.setState(function (state) {
        var valueBeforeUpDown = state.valueBeforeUpDown;

        if (suggestionIndex === null) {
          valueBeforeUpDown = null;
        } else if (valueBeforeUpDown === null && typeof prevValue !== 'undefined') {
          valueBeforeUpDown = prevValue;
        }

        return {
          highlightedSectionIndex: sectionIndex,
          highlightedSuggestionIndex: suggestionIndex,
          highlightedSuggestion: suggestionIndex === null ? null : _this2.getSuggestion(sectionIndex, suggestionIndex),
          valueBeforeUpDown: valueBeforeUpDown
        };
      });
    }
  }, {
    key: 'resetHighlightedSuggestion',
    value: function resetHighlightedSuggestion() {
      var shouldResetValueBeforeUpDown = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.setState(function (state) {
        var valueBeforeUpDown = state.valueBeforeUpDown;
        return {
          highlightedSectionIndex: null,
          highlightedSuggestionIndex: null,
          highlightedSuggestion: null,
          valueBeforeUpDown: shouldResetValueBeforeUpDown ? null : valueBeforeUpDown
        };
      });
    }
  }, {
    key: 'revealSuggestions',
    value: function revealSuggestions() {
      this.setState({
        isCollapsed: false
      });
    }
  }, {
    key: 'closeSuggestions',
    value: function closeSuggestions() {
      this.setState({
        highlightedSectionIndex: null,
        highlightedSuggestionIndex: null,
        highlightedSuggestion: null,
        valueBeforeUpDown: null,
        isCollapsed: true
      });
    }
  }, {
    key: 'getSuggestion',
    value: function getSuggestion(sectionIndex, suggestionIndex) {
      var _props2 = this.props,
          suggestions = _props2.suggestions,
          multiSection = _props2.multiSection,
          getSectionSuggestions = _props2.getSectionSuggestions;

      if (multiSection) {
        return getSectionSuggestions(suggestions[sectionIndex])[suggestionIndex];
      }

      return suggestions[suggestionIndex];
    }
  }, {
    key: 'getHighlightedSuggestion',
    value: function getHighlightedSuggestion() {
      var _state = this.state,
          highlightedSectionIndex = _state.highlightedSectionIndex,
          highlightedSuggestionIndex = _state.highlightedSuggestionIndex;

      if (highlightedSuggestionIndex === null) {
        return null;
      }

      return this.getSuggestion(highlightedSectionIndex, highlightedSuggestionIndex);
    }
  }, {
    key: 'getSuggestionValueByIndex',
    value: function getSuggestionValueByIndex(sectionIndex, suggestionIndex) {
      var getSuggestionValue = this.props.getSuggestionValue;
      return getSuggestionValue(this.getSuggestion(sectionIndex, suggestionIndex));
    }
  }, {
    key: 'getSuggestionIndices',
    value: function getSuggestionIndices(suggestionElement) {
      var sectionIndex = suggestionElement.getAttribute('data-section-index');
      var suggestionIndex = suggestionElement.getAttribute('data-suggestion-index');
      return {
        sectionIndex: typeof sectionIndex === 'string' ? parseInt(sectionIndex, 10) : null,
        suggestionIndex: parseInt(suggestionIndex, 10)
      };
    }
  }, {
    key: 'findSuggestionElement',
    value: function findSuggestionElement(startNode) {
      var node = startNode;

      do {
        if (node.getAttribute('data-suggestion-index') !== null) {
          return node;
        }

        node = node.parentNode;
      } while (node !== null);

      console.error('Clicked element:', startNode); // eslint-disable-line no-console

      throw new Error("Couldn't find suggestion element");
    }
  }, {
    key: 'maybeCallOnChange',
    value: function maybeCallOnChange(event, newValue, method) {
      var _props$inputProps = this.props.inputProps,
          value = _props$inputProps.value,
          onChange = _props$inputProps.onChange;

      if (newValue !== value) {
        onChange(event, {
          newValue: newValue,
          method: method
        });
      }
    }
  }, {
    key: 'willRenderSuggestions',
    value: function willRenderSuggestions(props) {
      var suggestions = props.suggestions,
          inputProps = props.inputProps,
          shouldRenderSuggestions = props.shouldRenderSuggestions;
      var value = inputProps.value;
      return suggestions.length > 0 && shouldRenderSuggestions(value);
    }
  }, {
    key: 'getQuery',
    value: function getQuery() {
      var inputProps = this.props.inputProps;
      var value = inputProps.value;
      var valueBeforeUpDown = this.state.valueBeforeUpDown;
      return (valueBeforeUpDown === null ? value : valueBeforeUpDown).trim();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props3 = this.props,
          suggestions = _props3.suggestions,
          renderInputComponent = _props3.renderInputComponent,
          onSuggestionsFetchRequested = _props3.onSuggestionsFetchRequested,
          renderSuggestion = _props3.renderSuggestion,
          inputProps = _props3.inputProps,
          multiSection = _props3.multiSection,
          renderSectionTitle = _props3.renderSectionTitle,
          id = _props3.id,
          getSectionSuggestions = _props3.getSectionSuggestions,
          theme$1 = _props3.theme,
          getSuggestionValue = _props3.getSuggestionValue,
          alwaysRenderSuggestions = _props3.alwaysRenderSuggestions,
          highlightFirstSuggestion = _props3.highlightFirstSuggestion;
      var _state2 = this.state,
          isFocused = _state2.isFocused,
          isCollapsed = _state2.isCollapsed,
          highlightedSectionIndex = _state2.highlightedSectionIndex,
          highlightedSuggestionIndex = _state2.highlightedSuggestionIndex,
          valueBeforeUpDown = _state2.valueBeforeUpDown;
      var shouldRenderSuggestions = alwaysRenderSuggestions ? alwaysTrue : this.props.shouldRenderSuggestions;
      var value = inputProps.value,
          _onFocus = inputProps.onFocus,
          _onKeyDown = inputProps.onKeyDown;
      var willRenderSuggestions = this.willRenderSuggestions(this.props);
      var isOpen = alwaysRenderSuggestions || isFocused && !isCollapsed && willRenderSuggestions;
      var items = isOpen ? suggestions : [];

      var autowhateverInputProps = _extends({}, inputProps, {
        onFocus: function onFocus(event) {
          if (!_this3.justSelectedSuggestion && !_this3.justClickedOnSuggestionsContainer) {
            var shouldRender = shouldRenderSuggestions(value);

            _this3.setState({
              isFocused: true,
              isCollapsed: !shouldRender
            });

            _onFocus && _onFocus(event);

            if (shouldRender) {
              onSuggestionsFetchRequested({
                value: value,
                reason: 'input-focused'
              });
            }
          }
        },
        onBlur: function onBlur(event) {
          if (_this3.justClickedOnSuggestionsContainer) {
            _this3.input.focus();

            return;
          }

          _this3.blurEvent = event;

          if (!_this3.justSelectedSuggestion) {
            _this3.onBlur();

            _this3.onSuggestionsClearRequested();
          }
        },
        onChange: function onChange(event) {
          var value = event.target.value;
          var shouldRender = shouldRenderSuggestions(value);

          _this3.maybeCallOnChange(event, value, 'type');

          if (_this3.suggestionsContainer) {
            _this3.suggestionsContainer.scrollTop = 0;
          }

          _this3.setState(_extends({}, highlightFirstSuggestion ? {} : {
            highlightedSectionIndex: null,
            highlightedSuggestionIndex: null,
            highlightedSuggestion: null
          }, {
            valueBeforeUpDown: null,
            isCollapsed: !shouldRender
          }));

          if (shouldRender) {
            onSuggestionsFetchRequested({
              value: value,
              reason: 'input-changed'
            });
          } else {
            _this3.onSuggestionsClearRequested();
          }
        },
        onKeyDown: function onKeyDown(event, data) {
          var keyCode = event.keyCode;

          switch (keyCode) {
            case 40: // ArrowDown

            case 38:
              // ArrowUp
              if (isCollapsed) {
                if (shouldRenderSuggestions(value)) {
                  onSuggestionsFetchRequested({
                    value: value,
                    reason: 'suggestions-revealed'
                  });

                  _this3.revealSuggestions();
                }
              } else if (suggestions.length > 0) {
                var newHighlightedSectionIndex = data.newHighlightedSectionIndex,
                    newHighlightedItemIndex = data.newHighlightedItemIndex;
                var newValue = void 0;

                if (newHighlightedItemIndex === null) {
                  // valueBeforeUpDown can be null if, for example, user
                  // hovers on the first suggestion and then pressed Up.
                  // If that happens, use the original input value.
                  newValue = valueBeforeUpDown === null ? value : valueBeforeUpDown;
                } else {
                  newValue = _this3.getSuggestionValueByIndex(newHighlightedSectionIndex, newHighlightedItemIndex);
                }

                _this3.updateHighlightedSuggestion(newHighlightedSectionIndex, newHighlightedItemIndex, value);

                _this3.maybeCallOnChange(event, newValue, keyCode === 40 ? 'down' : 'up');
              }

              event.preventDefault(); // Prevents the cursor from moving

              _this3.justPressedUpDown = true;
              setTimeout(function () {
                _this3.justPressedUpDown = false;
              });
              break;
            // Enter

            case 13:
              {
                // See #388
                if (event.keyCode === 229) {
                  break;
                }

                var highlightedSuggestion = _this3.getHighlightedSuggestion();

                if (isOpen && !alwaysRenderSuggestions) {
                  _this3.closeSuggestions();
                }

                if (highlightedSuggestion != null) {
                  var _newValue = getSuggestionValue(highlightedSuggestion);

                  _this3.maybeCallOnChange(event, _newValue, 'enter');

                  _this3.onSuggestionSelected(event, {
                    suggestion: highlightedSuggestion,
                    suggestionValue: _newValue,
                    suggestionIndex: highlightedSuggestionIndex,
                    sectionIndex: highlightedSectionIndex,
                    method: 'enter'
                  });

                  _this3.justSelectedSuggestion = true;
                  setTimeout(function () {
                    _this3.justSelectedSuggestion = false;
                  });
                }

                break;
              }
            // Escape

            case 27:
              {
                if (isOpen) {
                  // If input.type === 'search', the browser clears the input
                  // when Escape is pressed. We want to disable this default
                  // behaviour so that, when suggestions are shown, we just hide
                  // them, without clearing the input.
                  event.preventDefault();
                }

                var willCloseSuggestions = isOpen && !alwaysRenderSuggestions;

                if (valueBeforeUpDown === null) {
                  // Didn't interact with Up/Down
                  if (!willCloseSuggestions) {
                    var _newValue2 = '';

                    _this3.maybeCallOnChange(event, _newValue2, 'escape');

                    if (shouldRenderSuggestions(_newValue2)) {
                      onSuggestionsFetchRequested({
                        value: _newValue2,
                        reason: 'escape-pressed'
                      });
                    } else {
                      _this3.onSuggestionsClearRequested();
                    }
                  }
                } else {
                  // Interacted with Up/Down
                  _this3.maybeCallOnChange(event, valueBeforeUpDown, 'escape');
                }

                if (willCloseSuggestions) {
                  _this3.onSuggestionsClearRequested();

                  _this3.closeSuggestions();
                } else {
                  _this3.resetHighlightedSuggestion();
                }

                break;
              }
          }

          _onKeyDown && _onKeyDown(event);
        }
      });

      var renderSuggestionData = {
        query: this.getQuery()
      };
      return _react2.default.createElement(_reactAutowhatever2.default, {
        multiSection: multiSection,
        items: items,
        renderInputComponent: renderInputComponent,
        renderItemsContainer: this.renderSuggestionsContainer,
        renderItem: renderSuggestion,
        renderItemData: renderSuggestionData,
        renderSectionTitle: renderSectionTitle,
        getSectionItems: getSectionSuggestions,
        highlightedSectionIndex: highlightedSectionIndex,
        highlightedItemIndex: highlightedSuggestionIndex,
        inputProps: autowhateverInputProps,
        itemProps: this.itemProps,
        theme: (0, theme.mapToAutowhateverTheme)(theme$1),
        id: id,
        ref: this.storeAutowhateverRef
      });
    }
  }]);

  return Autosuggest;
}(React__default.Component);

Autosuggest.propTypes = {
  suggestions: _propTypes2.default.array.isRequired,
  onSuggestionsFetchRequested: function onSuggestionsFetchRequested(props, propName) {
    var onSuggestionsFetchRequested = props[propName];

    if (typeof onSuggestionsFetchRequested !== 'function') {
      throw new Error("'onSuggestionsFetchRequested' must be implemented. See: https://github.com/moroshko/react-autosuggest#onSuggestionsFetchRequestedProp");
    }
  },
  onSuggestionsClearRequested: function onSuggestionsClearRequested(props, propName) {
    var onSuggestionsClearRequested = props[propName];

    if (props.alwaysRenderSuggestions === false && typeof onSuggestionsClearRequested !== 'function') {
      throw new Error("'onSuggestionsClearRequested' must be implemented. See: https://github.com/moroshko/react-autosuggest#onSuggestionsClearRequestedProp");
    }
  },
  onSuggestionSelected: _propTypes2.default.func,
  onSuggestionHighlighted: _propTypes2.default.func,
  renderInputComponent: _propTypes2.default.func,
  renderSuggestionsContainer: _propTypes2.default.func,
  getSuggestionValue: _propTypes2.default.func.isRequired,
  renderSuggestion: _propTypes2.default.func.isRequired,
  inputProps: function inputProps(props, propName) {
    var inputProps = props[propName];

    if (!inputProps.hasOwnProperty('value')) {
      throw new Error("'inputProps' must have 'value'.");
    }

    if (!inputProps.hasOwnProperty('onChange')) {
      throw new Error("'inputProps' must have 'onChange'.");
    }
  },
  shouldRenderSuggestions: _propTypes2.default.func,
  alwaysRenderSuggestions: _propTypes2.default.bool,
  multiSection: _propTypes2.default.bool,
  renderSectionTitle: function renderSectionTitle(props, propName) {
    var renderSectionTitle = props[propName];

    if (props.multiSection === true && typeof renderSectionTitle !== 'function') {
      throw new Error("'renderSectionTitle' must be implemented. See: https://github.com/moroshko/react-autosuggest#renderSectionTitleProp");
    }
  },
  getSectionSuggestions: function getSectionSuggestions(props, propName) {
    var getSectionSuggestions = props[propName];

    if (props.multiSection === true && typeof getSectionSuggestions !== 'function') {
      throw new Error("'getSectionSuggestions' must be implemented. See: https://github.com/moroshko/react-autosuggest#getSectionSuggestionsProp");
    }
  },
  focusInputOnSuggestionClick: _propTypes2.default.bool,
  highlightFirstSuggestion: _propTypes2.default.bool,
  theme: _propTypes2.default.object,
  id: _propTypes2.default.string
};
Autosuggest.defaultProps = {
  renderSuggestionsContainer: defaultRenderSuggestionsContainer,
  shouldRenderSuggestions: defaultShouldRenderSuggestions,
  alwaysRenderSuggestions: false,
  multiSection: false,
  focusInputOnSuggestionClick: true,
  highlightFirstSuggestion: false,
  theme: theme.defaultTheme,
  id: '1'
};

var _initialiseProps = function _initialiseProps() {
  var _this4 = this;

  this.onDocumentMouseDown = function (event) {
    _this4.justClickedOnSuggestionsContainer = false;
    var node = event.detail && event.detail.target || // This is for testing only. Please show me a better way to emulate this.
    event.target;

    while (node !== null && node !== document) {
      if (node.getAttribute('data-suggestion-index') !== null) {
        // Suggestion was clicked
        return;
      }

      if (node === _this4.suggestionsContainer) {
        // Something else inside suggestions container was clicked
        _this4.justClickedOnSuggestionsContainer = true;
        return;
      }

      node = node.parentNode;
    }
  };

  this.storeAutowhateverRef = function (autowhatever) {
    if (autowhatever !== null) {
      _this4.autowhatever = autowhatever;
    }
  };

  this.onSuggestionMouseEnter = function (event, _ref3) {
    var sectionIndex = _ref3.sectionIndex,
        itemIndex = _ref3.itemIndex;

    _this4.updateHighlightedSuggestion(sectionIndex, itemIndex);

    if (event.target === _this4.pressedSuggestion) {
      _this4.justSelectedSuggestion = true;
    }

    _this4.justMouseEntered = true;
    setTimeout(function () {
      _this4.justMouseEntered = false;
    });
  };

  this.highlightFirstSuggestion = function () {
    _this4.updateHighlightedSuggestion(_this4.props.multiSection ? 0 : null, 0);
  };

  this.onDocumentMouseUp = function () {
    if (_this4.pressedSuggestion && !_this4.justSelectedSuggestion) {
      _this4.input.focus();
    }

    _this4.pressedSuggestion = null;
  };

  this.onSuggestionMouseDown = function (event) {
    // Checking if this.justSelectedSuggestion is already true to not duplicate touch events in chrome
    // See: https://github.com/facebook/react/issues/9809#issuecomment-413978405
    if (!_this4.justSelectedSuggestion) {
      _this4.justSelectedSuggestion = true;
      _this4.pressedSuggestion = event.target;
    }
  };

  this.onSuggestionsClearRequested = function () {
    var onSuggestionsClearRequested = _this4.props.onSuggestionsClearRequested;
    onSuggestionsClearRequested && onSuggestionsClearRequested();
  };

  this.onSuggestionSelected = function (event, data) {
    var _props4 = _this4.props,
        alwaysRenderSuggestions = _props4.alwaysRenderSuggestions,
        onSuggestionSelected = _props4.onSuggestionSelected,
        onSuggestionsFetchRequested = _props4.onSuggestionsFetchRequested;
    onSuggestionSelected && onSuggestionSelected(event, data);

    if (alwaysRenderSuggestions) {
      onSuggestionsFetchRequested({
        value: data.suggestionValue,
        reason: 'suggestion-selected'
      });
    } else {
      _this4.onSuggestionsClearRequested();
    }

    _this4.resetHighlightedSuggestion();
  };

  this.onSuggestionClick = function (event) {
    var _props5 = _this4.props,
        alwaysRenderSuggestions = _props5.alwaysRenderSuggestions,
        focusInputOnSuggestionClick = _props5.focusInputOnSuggestionClick;

    var _getSuggestionIndices = _this4.getSuggestionIndices(_this4.findSuggestionElement(event.target)),
        sectionIndex = _getSuggestionIndices.sectionIndex,
        suggestionIndex = _getSuggestionIndices.suggestionIndex;

    var clickedSuggestion = _this4.getSuggestion(sectionIndex, suggestionIndex);

    var clickedSuggestionValue = _this4.props.getSuggestionValue(clickedSuggestion);

    _this4.maybeCallOnChange(event, clickedSuggestionValue, 'click');

    _this4.onSuggestionSelected(event, {
      suggestion: clickedSuggestion,
      suggestionValue: clickedSuggestionValue,
      suggestionIndex: suggestionIndex,
      sectionIndex: sectionIndex,
      method: 'click'
    });

    if (!alwaysRenderSuggestions) {
      _this4.closeSuggestions();
    }

    if (focusInputOnSuggestionClick === true) {
      _this4.input.focus();
    } else {
      _this4.onBlur();
    }

    setTimeout(function () {
      _this4.justSelectedSuggestion = false;
    });
  };

  this.onBlur = function () {
    var _props6 = _this4.props,
        inputProps = _props6.inputProps,
        shouldRenderSuggestions = _props6.shouldRenderSuggestions;
    var value = inputProps.value,
        onBlur = inputProps.onBlur;

    var highlightedSuggestion = _this4.getHighlightedSuggestion();

    var shouldRender = shouldRenderSuggestions(value);

    _this4.setState({
      isFocused: false,
      highlightedSectionIndex: null,
      highlightedSuggestionIndex: null,
      highlightedSuggestion: null,
      valueBeforeUpDown: null,
      isCollapsed: !shouldRender
    });

    onBlur && onBlur(_this4.blurEvent, {
      highlightedSuggestion: highlightedSuggestion
    });
  };

  this.onSuggestionMouseLeave = function (event) {
    _this4.resetHighlightedSuggestion(false); // shouldResetValueBeforeUpDown


    if (_this4.justSelectedSuggestion && event.target === _this4.pressedSuggestion) {
      _this4.justSelectedSuggestion = false;
    }
  };

  this.onSuggestionTouchStart = function () {
    _this4.justSelectedSuggestion = true; // todo: event.preventDefault when https://github.com/facebook/react/issues/2043
    // todo: gets released so onSuggestionMouseDown won't fire in chrome
  };

  this.onSuggestionTouchMove = function () {
    _this4.justSelectedSuggestion = false;
    _this4.pressedSuggestion = null;

    _this4.input.focus();
  };

  this.itemProps = function (_ref4) {
    var sectionIndex = _ref4.sectionIndex,
        itemIndex = _ref4.itemIndex;
    return {
      'data-section-index': sectionIndex,
      'data-suggestion-index': itemIndex,
      onMouseEnter: _this4.onSuggestionMouseEnter,
      onMouseLeave: _this4.onSuggestionMouseLeave,
      onMouseDown: _this4.onSuggestionMouseDown,
      onTouchStart: _this4.onSuggestionTouchStart,
      onTouchMove: _this4.onSuggestionTouchMove,
      onClick: _this4.onSuggestionClick
    };
  };

  this.renderSuggestionsContainer = function (_ref5) {
    var containerProps = _ref5.containerProps,
        children = _ref5.children;
    var renderSuggestionsContainer = _this4.props.renderSuggestionsContainer;
    return renderSuggestionsContainer({
      containerProps: containerProps,
      children: children,
      query: _this4.getQuery()
    });
  };
};

exports.default = Autosuggest;
});

unwrapExports(Autosuggest_1);

var dist$3 = Autosuggest_1.default;

var FieldError = function FieldError(_ref) {
  var cleanName = _ref.cleanName,
      errorMessage = _ref.errorMessage,
      shouldShowError = _ref.shouldShowError;
  return shouldShowError && errorMessage && React__default.createElement("div", {
    className: CSS_CLASS_NAMES.fieldErrorMessage,
    "data-element-name": cleanName
  }, React__default.createElement("span", null, errorMessage));
};
FieldError.propTypes = process.env.NODE_ENV === 'production' ? null : {
  cleanName: propTypes.string.isRequired,
  errorMessage: propTypes.string.isRequired,
  shouldShowError: propTypes.bool.isRequired
};

/**
* cacheValue
*
* A simple, half-implementation of a memoization function.
* We disregard the inputs needing to be the same. In our case
* the objects from Openlaw methods always will cause the arguments to change.
* 
* @param isEqualFn<(any, any) => boolean> Any function that can compare two things and return a boolean.
* @returns <any> Any value, cached, or new.
*/
var cacheValue = function cacheValue(isEqualFn) {
  var cachedValue;
  return function (value) {
    if (isEqualFn && isEqualFn(cachedValue, value)) return cachedValue;
    cachedValue = value;
    return value;
  };
};
/**
* classNameCleanSpace
*
* Cleans up multiple spaces and replaces with single.
* Makes things a bit easier if you ever need to split className
* to an array without empty strings. It also makes HTML source appear cleaner.
* 
* @param className<String> Any className string.
* @returns <String> Clean, single-spaced className list.
*/

var singleSpaceString = function singleSpaceString(className) {
  return className.trim().replace(/\s{2,}/, ' ');
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var PROGRESS_ITEM_TEXT = "\u2026";
/* ... */

var getSectionSuggestions = function getSectionSuggestions(section) {
  return section.suggestions;
};

var getSuggestionValue = function getSuggestionValue(_ref) {
  var address = _ref.address;
  return address;
};

var renderSectionTitle = function renderSectionTitle(_ref2) {
  var title = _ref2.title;
  return title;
};

var renderSuggestion = function renderSuggestion(_ref3) {
  var address = _ref3.address;
  return address;
};

var renderSuggestionsContainer = function renderSuggestionsContainer(data) {
  var children = data.children,
      containerProps = data.containerProps;
  var childrenMapped = React.Children.map(children, function (child) {
    try {
      // eslint-disable-next-line no-unused-vars
      var _child$props$children = slicedToArray(child.props.children, 2),
          _ = _child$props$children[0],
          fakeAddress = _child$props$children[1];

      var fakeAddressProps = fakeAddress.props;
      var items = fakeAddressProps.items; // Don't render the default "address" item (hacky) that comes with the progress indicator,
      // We need a cleaner way to have a basic in-drop-down progress indicator, but it's not so easy.

      if (items && items[0].address === PROGRESS_ITEM_TEXT) {
        return React.cloneElement(child.props.children[0], {
          style: {
            display: 'none'
          }
        });
      }

      return child;
    } catch (error) {
      return child;
    }
  });
  return React.createElement("div", containerProps, childrenMapped);
}; // NOTE: Address handles its validation a bit differently to the other components.


var Address =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits(Address, _React$PureComponent);

  function Address(props) {
    var _this;

    classCallCheck(this, Address);

    _this = possibleConstructorReturn(this, getPrototypeOf(Address).call(this, props));

    defineProperty(assertThisInitialized(_this), "baseErrorData", {
      elementName: _this.props.cleanName,
      elementType: _this.props.variableType,
      errorMessage: '',
      isError: false,
      value: _this.props.savedValue || ''
    });

    defineProperty(assertThisInitialized(_this), "isCreatingAddress", false);

    defineProperty(assertThisInitialized(_this), "ref", React.createRef());

    defineProperty(assertThisInitialized(_this), "state", {
      currentValue: _this.props.savedValue,
      errorMessage: '',
      suggestions: [],
      shouldShowError: false
    });

    var self = assertThisInitialized(_this);

    self.blurInput = _this.blurInput.bind(assertThisInitialized(_this));
    self.callOnValidateAndGetErrorMessage = _this.callOnValidateAndGetErrorMessage.bind(assertThisInitialized(_this));
    self.createOpenLawAddress = _this.createOpenLawAddress.bind(assertThisInitialized(_this));
    self.onBlur = _this.onBlur.bind(assertThisInitialized(_this));
    self.onChange = _this.onChange.bind(assertThisInitialized(_this));
    self.onKeyUp = _this.onKeyUp.bind(assertThisInitialized(_this));
    self.onSuggestionsClearRequested = _this.onSuggestionsClearRequested.bind(assertThisInitialized(_this));
    self.onSuggestionsFetchRequested = _this.onSuggestionsFetchRequested.bind(assertThisInitialized(_this));
    self.onSuggestionSelected = _this.onSuggestionSelected.bind(assertThisInitialized(_this));
    return _this;
  }

  createClass(Address, [{
    key: "callOnValidateAndGetErrorMessage",
    value: function callOnValidateAndGetErrorMessage(validationData) {
      var onValidate = this.props.onValidate;
      var userReturnedValidationData = onValidate && onValidate(validationData);

      var _ref4 = userReturnedValidationData || {},
          _ref4$errorMessage = _ref4.errorMessage,
          errorMessage = _ref4$errorMessage === void 0 ? '' : _ref4$errorMessage;

      return errorMessage;
    } // Causes input to lose focus only. Does not call onBlur() handler, as I don't believe we
    // have control over the way it's called - Autosuggest does.

  }, {
    key: "blurInput",
    value: function blurInput() {
      var cleanName = this.props.cleanName;
      var inputElement = this.ref.current && this.ref.current.querySelector("input.".concat(cleanName));
      if (inputElement) inputElement.blur();
    }
  }, {
    key: "createOpenLawAddress",
    value: function createOpenLawAddress(addressData) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        try {
          var openlawAddress = _this2.props.openLaw.createAddress(addressData);

          resolve({
            addressData: addressData,
            openlawAddress: openlawAddress
          });
        } catch (error) {
          reject();
        }
      });
    }
  }, {
    key: "onBlur",
    value: function onBlur(event) {
      var inputProps = this.props.inputProps;
      var _this$state = this.state,
          currentValue = _this$state.currentValue,
          errorMessage = _this$state.errorMessage;
      var updatedErrorMessage = errorMessage && currentValue ? errorMessage : '';
      var userErrorMessage = this.callOnValidateAndGetErrorMessage(_objectSpread({}, this.baseErrorData, {
        errorMessage: updatedErrorMessage,
        eventType: 'blur',
        isError: updatedErrorMessage.length > 0,
        value: currentValue
      }));
      var errorMessageToSet = userErrorMessage || updatedErrorMessage; // persist event outside of this handler to a parent component

      if (event) event.persist();
      this.setState(function () {
        return {
          errorMessage: errorMessageToSet,
          shouldShowError: errorMessageToSet.length > 0
        };
      }, function () {
        if (event && inputProps && inputProps.onBlur) {
          inputProps.onBlur(event);
        }
      });
    } // Set current value of autosuggest box (onChange method required)

  }, {
    key: "onChange",
    value: function onChange(event, autosuggestEvent) {
      var newValue = autosuggestEvent.newValue;
      var _this$props = this.props,
          inputProps = _this$props.inputProps,
          name = _this$props.name,
          onChange = _this$props.onChange;

      var errorData = _objectSpread({}, this.baseErrorData, {
        eventType: 'change',
        value: newValue
      });

      var userErrorMessage = this.callOnValidateAndGetErrorMessage(errorData);
      var errorMessageToSet = userErrorMessage || 'Please choose a valid address from the options.';
      var shouldShowError = userErrorMessage.length > 0 ? {
        shouldShowError: true
      } : null; // persist event outside of this handler to a parent component

      if (event) event.persist();
      this.setState(_objectSpread({
        currentValue: newValue,
        errorMessage: errorMessageToSet
      }, shouldShowError), function () {
        onChange(name, undefined, errorData);

        if (event && inputProps && inputProps.onChange) {
          inputProps.onChange(event);
        }
      });
    }
  }, {
    key: "onKeyUp",
    value: function onKeyUp(event) {
      var _this$props2 = this.props,
          inputProps = _this$props2.inputProps,
          onKeyUp = _this$props2.onKeyUp;
      if (onKeyUp) onKeyUp(event); // persist event outside of this handler to a parent component

      event.persist();

      if (inputProps && inputProps.onKeyUp) {
        inputProps.onKeyUp(event);
      }
    } // Autosuggest will call this function every time you need to clear suggestions.

  }, {
    key: "onSuggestionsClearRequested",
    value: function onSuggestionsClearRequested() {
      this.setState({
        suggestions: []
      });
    } // Autosuggest will call this function every time you need to update suggestions.

  }, {
    key: "onSuggestionsFetchRequested",
    value: function onSuggestionsFetchRequested(_ref5) {
      var value, valueTrimmed, isInputLongEnough, suggestions, userErrorMessage, errorMessageToSet;
      return regenerator.async(function onSuggestionsFetchRequested$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              value = _ref5.value;
              valueTrimmed = value.trim();
              isInputLongEnough = valueTrimmed && valueTrimmed.length > 2;

              if (isInputLongEnough) {
                _context.next = 5;
                break;
              }

              return _context.abrupt("return");

            case 5:
              // set our contrived loading text (sectionTitle);
              // wish there were a cleaner, easier way to do this
              this.setState({
                suggestions: [{
                  title: "Searching addresses\u2026",
                  suggestions: [{
                    address: PROGRESS_ITEM_TEXT
                  }]
                }]
              });
              _context.prev = 6;
              _context.next = 9;
              return regenerator.awrap(this.props.apiClient.searchAddress(value));

            case 9:
              suggestions = _context.sent;

              if (!this.isCreatingAddress) {
                _context.next = 12;
                break;
              }

              return _context.abrupt("return");

            case 12:
              this.setState({
                suggestions: [{
                  suggestions: suggestions
                }]
              });
              _context.next = 20;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context["catch"](6);
              userErrorMessage = this.callOnValidateAndGetErrorMessage(_objectSpread({}, this.baseErrorData, {
                eventType: 'change',
                isError: true,
                value: value
              }));
              errorMessageToSet = userErrorMessage || 'Something went wrong while searching for an address.';
              this.setState({
                errorMessage: errorMessageToSet,
                shouldShowError: errorMessageToSet.length > 0,
                suggestions: [{
                  suggestions: []
                }]
              });

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[6, 15]]);
    } // Will be called every time suggestion is selected via mouse or keyboard,
    // and blur the input.

  }, {
    key: "onSuggestionSelected",
    value: function onSuggestionSelected(event, autosuggestEvent) {
      var _this3 = this;

      var method, suggestion, _this$props3, apiClient, inputProps, name, onChange, addressDetails, _ref6, addressData, openlawAddress, errorData, userErrorMessage, _errorData, _userErrorMessage, errorMessageToSet;

      return regenerator.async(function onSuggestionSelected$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              method = autosuggestEvent.method, suggestion = autosuggestEvent.suggestion; // cause the element to lose focus on 'enter'
              // this is already handled for click via `focusInputOnSuggestionClick={false}`

              if (!(method === 'enter' || method === 'click')) {
                _context2.next = 28;
                break;
              }

              // schedule after Autosuggest's events, but (most likely) before our async calls below
              setTimeout(this.blurInput);
              _this$props3 = this.props, apiClient = _this$props3.apiClient, inputProps = _this$props3.inputProps, name = _this$props3.name, onChange = _this$props3.onChange;

              if (!suggestion) {
                _context2.next = 28;
                break;
              }

              _context2.prev = 5;
              this.isCreatingAddress = true; // persist event outside of this handler to a parent component

              if (event) event.persist();
              _context2.next = 10;
              return regenerator.awrap(apiClient.getAddressDetails(suggestion.placeId));

            case 10:
              addressDetails = _context2.sent;
              _context2.next = 13;
              return regenerator.awrap(this.createOpenLawAddress(addressDetails));

            case 13:
              _ref6 = _context2.sent;
              addressData = _ref6.addressData;
              openlawAddress = _ref6.openlawAddress;
              errorData = _objectSpread({}, this.baseErrorData, {
                eventType: 'blur',
                value: addressData.address
              });
              userErrorMessage = this.callOnValidateAndGetErrorMessage(errorData);
              this.setState({
                currentValue: addressData.address,
                errorMessage: userErrorMessage,
                shouldShowError: userErrorMessage.length > 0
              }, function () {
                _this3.isCreatingAddress = false;
                onChange(name, openlawAddress, _objectSpread({}, errorData, {
                  errorMessage: userErrorMessage
                }));

                if (event && inputProps && inputProps.onChange) {
                  inputProps.onChange(event);
                }
              });
              _context2.next = 28;
              break;

            case 21:
              _context2.prev = 21;
              _context2.t0 = _context2["catch"](5);
              this.blurInput();
              _errorData = _objectSpread({}, this.baseErrorData, {
                eventType: 'blur',
                isError: true,
                value: suggestion.address
              });
              _userErrorMessage = this.callOnValidateAndGetErrorMessage(_errorData);
              errorMessageToSet = _userErrorMessage || 'Something went wrong while creating an address.';
              this.setState({
                currentValue: suggestion.address,
                errorMessage: errorMessageToSet,
                shouldShowError: errorMessageToSet.length > 0
              }, function () {
                _this3.isCreatingAddress = false;
                onChange(name, undefined, _objectSpread({}, _errorData, {
                  errorMessage: errorMessageToSet
                }));
              });

            case 28:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, [[5, 21]]);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          description = _this$props4.description,
          cleanName = _this$props4.cleanName,
          inputExtraText = _this$props4.inputExtraText,
          inputProps = _this$props4.inputProps,
          variableType = _this$props4.variableType;
      var _this$state2 = this.state,
          currentValue = _this$state2.currentValue,
          errorMessage = _this$state2.errorMessage,
          shouldShowError = _this$state2.shouldShowError,
          suggestions = _this$state2.suggestions;
      var errorClassName = errorMessage && shouldShowError ? CSS_CLASS_NAMES.fieldInputError : '';
      var inputPropsClassName = inputProps && inputProps.className ? "".concat(inputProps.className) : '';

      var autoSuggestInputProps = _objectSpread({
        placeholder: description,
        title: description
      }, inputProps, {
        onBlur: this.onBlur,
        className: singleSpaceString("".concat(CSS_CLASS_NAMES.fieldInput, " ").concat(cleanName, " ").concat(inputPropsClassName, " ").concat(errorClassName)),
        onChange: this.onChange,
        onKeyUp: this.onKeyUp,
        type: 'text',
        value: currentValue
      });

      return React.createElement("div", {
        ref: this.ref,
        className: "".concat(CSS_CLASS_NAMES.field, " ").concat(CSS_CLASS_NAMES.fieldTypeToLower(variableType))
      }, React.createElement("label", {
        className: "".concat(CSS_CLASS_NAMES.fieldLabel)
      }, React.createElement("span", {
        className: "".concat(CSS_CLASS_NAMES.fieldLabelText)
      }, description), React.createElement(dist$3, {
        getSectionSuggestions: getSectionSuggestions,
        getSuggestionValue: getSuggestionValue,
        inputProps: autoSuggestInputProps,
        multiSection: true,
        onSuggestionsClearRequested: this.onSuggestionsClearRequested,
        onSuggestionSelected: this.onSuggestionSelected,
        onSuggestionsFetchRequested: this.onSuggestionsFetchRequested,
        renderSectionTitle: renderSectionTitle,
        renderSuggestion: renderSuggestion,
        renderSuggestionsContainer: renderSuggestionsContainer,
        suggestions: suggestions
      }), React.createElement(FieldError, {
        cleanName: cleanName,
        errorMessage: errorMessage,
        shouldShowError: shouldShowError
      })), inputExtraText && React.createElement(ExtraText, {
        text: inputExtraText
      }));
    }
  }]);

  return Address;
}(React.PureComponent);

defineProperty(Address, "propTypes", process.env.NODE_ENV === 'production' ? null : {
  apiClient: propTypes.object.isRequired,
  // opt-out of type checker until we export APIClient flow types
  cleanName: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  inputExtraText: function inputExtraText() {
    return (typeof bpfrpt_proptype_FieldExtraTextType === "function" ? bpfrpt_proptype_FieldExtraTextType : propTypes.shape(bpfrpt_proptype_FieldExtraTextType)).apply(this, arguments);
  },
  inputProps: function inputProps() {
    return (typeof bpfrpt_proptype_FieldPropsValueType === "function" ? bpfrpt_proptype_FieldPropsValueType : propTypes.shape(bpfrpt_proptype_FieldPropsValueType)).apply(this, arguments);
  },
  name: propTypes.string.isRequired,
  onChange: function onChange() {
    return (typeof bpfrpt_proptype_OnChangeFuncType === "function" ? bpfrpt_proptype_OnChangeFuncType.isRequired ? bpfrpt_proptype_OnChangeFuncType.isRequired : bpfrpt_proptype_OnChangeFuncType : propTypes.shape(bpfrpt_proptype_OnChangeFuncType).isRequired).apply(this, arguments);
  },
  onKeyUp: function onKeyUp() {
    return (typeof bpfrpt_proptype_ValidateOnKeyUpFuncType === "function" ? bpfrpt_proptype_ValidateOnKeyUpFuncType : propTypes.shape(bpfrpt_proptype_ValidateOnKeyUpFuncType)).apply(this, arguments);
  },
  onValidate: function onValidate() {
    return (typeof bpfrpt_proptype_OnValidateFuncType === "function" ? bpfrpt_proptype_OnValidateFuncType : propTypes.shape(bpfrpt_proptype_OnValidateFuncType)).apply(this, arguments);
  },
  openLaw: propTypes.object.isRequired,
  // opt-out of type checker
  savedValue: propTypes.string.isRequired,
  variableType: function variableType() {
    return (typeof bpfrpt_proptype_FieldEnumType === "function" ? bpfrpt_proptype_FieldEnumType.isRequired ? bpfrpt_proptype_FieldEnumType.isRequired : bpfrpt_proptype_FieldEnumType : propTypes.shape(bpfrpt_proptype_FieldEnumType).isRequired).apply(this, arguments);
  }
});

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var getGenericErrorMessage = function getGenericErrorMessage(variableType) {
  var readableVariableType = TYPE_TO_READABLE[variableType];
  return "".concat(readableVariableType, ": ").concat(FIELD_DEFAULT_ERROR_MESSAGE);
};
var onBlurValidation = function onBlurValidation(value, props, state) {
  var cleanName = props.cleanName,
      getValidity = props.getValidity,
      name = props.name,
      onValidate = props.onValidate,
      variableType = props.variableType;
  var isIdentityOrSignatureType = variableType === 'Identity' || variableType === 'ExternalSignature'; // check validity

  var _ref = typeof value === 'string' && value.length > 0 ? getValidity(name, value) : typeof value === 'string' && isIdentityOrSignatureType && state && state.currentValue.length ? getValidity(name, value) : _typeof_1(value) === 'object' && variableType === 'Image' ? getValidity(name, value.value) : {},
      isError = _ref.isError;

  var errorDataToSend = {
    elementName: cleanName,
    elementType: variableType,
    errorMessage: isError ? getGenericErrorMessage(variableType) : '',
    eventType: 'blur',
    isError: isError || false,
    value: value
  }; // call user's onValidate function

  var returnedValidationData = onValidate && onValidate(errorDataToSend); // determine error message

  var errorMessage = returnedValidationData && typeof returnedValidationData.errorMessage === 'string' ? returnedValidationData.errorMessage : errorDataToSend.errorMessage; // determine error message visibility

  var shouldShowError = returnedValidationData && returnedValidationData.errorMessage ? true : returnedValidationData && returnedValidationData.errorMessage === '' ? false : isError || false;
  return {
    errorData: _objectSpread$1({}, errorDataToSend, {
      errorMessage: errorMessage
    }),
    shouldShowError: shouldShowError
  };
}; // By default we don't show errors onChange.
// Therefore, we fall back to `state.errorMessage` and `state.shouldShowError`,
// which were set from from blur.

var onChangeValidation = function onChangeValidation(value, props, state) {
  var cleanName = props.cleanName,
      getValidity = props.getValidity,
      name = props.name,
      onValidate = props.onValidate,
      variableType = props.variableType;
  var isIdentityType = variableType === 'Identity' || variableType === 'ExternalSignature'; // check validity

  var _ref2 = typeof value === 'string' && (value.length > 0 || isIdentityType) ? getValidity(name, value) : _typeof_1(value) === 'object' && variableType === 'Image' ? getValidity(name, value.value) : {},
      isError = _ref2.isError;

  var errorDataToSend = {
    elementName: cleanName,
    elementType: variableType,
    errorMessage: isError ? getGenericErrorMessage(variableType) : '',
    eventType: 'change',
    isError: isError || false,
    value: value || ''
  }; // call user's onValidate function

  var returnedValidationData = onValidate && onValidate(errorDataToSend); // determine error message

  var errorMessage = returnedValidationData && typeof returnedValidationData.errorMessage === 'string' ? returnedValidationData.errorMessage : state.errorMessage || errorDataToSend.errorMessage; // determine error message visibility

  var shouldShowError = returnedValidationData && returnedValidationData.errorMessage ? true : returnedValidationData && returnedValidationData.errorMessage === '' ? false : state.shouldShowError;
  return {
    errorData: _objectSpread$1({}, errorDataToSend, {
      errorMessage: errorMessage
    }),
    shouldShowError: shouldShowError
  };
};

var Choice =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits(Choice, _React$PureComponent);

  function Choice(props) {
    var _this;

    classCallCheck(this, Choice);

    _this = possibleConstructorReturn(this, getPrototypeOf(Choice).call(this, props));

    defineProperty(assertThisInitialized(_this), "state", {
      currentValue: _this.props.savedValue || '',
      errorMessage: '',
      shouldShowError: false
    });

    var self = assertThisInitialized(_this);

    self.onBlur = _this.onBlur.bind(assertThisInitialized(_this));
    self.onChange = _this.onChange.bind(assertThisInitialized(_this));
    return _this;
  }

  createClass(Choice, [{
    key: "onBlur",
    value: function onBlur(event) {
      var inputProps = this.props.inputProps;
      var currentValue = this.state.currentValue;

      var _onBlurValidation = onBlurValidation(currentValue, this.props),
          errorMessage = _onBlurValidation.errorData.errorMessage,
          shouldShowError = _onBlurValidation.shouldShowError; // persist event outside of this handler to a parent component


      event.persist();
      this.setState({
        errorMessage: errorMessage,
        shouldShowError: shouldShowError
      }, function () {
        if (event && inputProps && inputProps.onBlur) {
          inputProps.onBlur(event);
        }
      });
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      var _this2 = this;

      var eventValue = event.currentTarget.value;
      var _this$props = this.props,
          inputProps = _this$props.inputProps,
          name = _this$props.name,
          onChange = _this$props.onChange;

      var _onChangeValidation = onChangeValidation(eventValue, this.props, this.state),
          errorData = _onChangeValidation.errorData,
          shouldShowError = _onChangeValidation.shouldShowError; // persist event outside of this handler to a parent component


      event.persist();
      this.setState({
        currentValue: eventValue,
        errorMessage: errorData.errorMessage,
        shouldShowError: shouldShowError
      }, function () {
        onChange(name, _this2.state.currentValue || undefined, errorData);

        if (event && inputProps && inputProps.onChange) {
          inputProps.onChange(event);
        }
      });
    }
  }, {
    key: "renderChoiceValuesOption",
    value: function renderChoiceValuesOption(choice) {
      return React.createElement("option", {
        key: choice,
        value: choice
      }, choice);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          choiceValues = _this$props2.choiceValues,
          cleanName = _this$props2.cleanName,
          description = _this$props2.description,
          inputExtraText = _this$props2.inputExtraText,
          inputProps = _this$props2.inputProps,
          variableType = _this$props2.variableType;
      var _this$state = this.state,
          currentValue = _this$state.currentValue,
          errorMessage = _this$state.errorMessage,
          shouldShowError = _this$state.shouldShowError;
      var errorClassName = errorMessage && shouldShowError ? CSS_CLASS_NAMES.fieldInputError : '';
      var inputPropsClassName = inputProps && inputProps.className ? "".concat(inputProps.className) : '';
      return React.createElement("div", {
        className: "".concat(CSS_CLASS_NAMES.field, " ").concat(CSS_CLASS_NAMES.fieldTypeToLower(variableType))
      }, React.createElement("label", {
        className: "".concat(CSS_CLASS_NAMES.fieldLabel)
      }, React.createElement("span", {
        className: "".concat(CSS_CLASS_NAMES.fieldLabelText)
      }, description), React.createElement("select", _extends_1({}, inputProps, {
        className: singleSpaceString("".concat(CSS_CLASS_NAMES.fieldSelect, " ").concat(cleanName, " ").concat(inputPropsClassName, " ").concat(errorClassName)),
        onBlur: this.onBlur,
        onChange: this.onChange,
        value: currentValue
      }), React.createElement("option", {
        value: ""
      }, "\u2014 Please choose from the list \u2014"), choiceValues.map(this.renderChoiceValuesOption)), React.createElement(FieldError, {
        cleanName: cleanName,
        errorMessage: errorMessage,
        shouldShowError: shouldShowError
      })), inputExtraText && React.createElement(ExtraText, {
        text: inputExtraText
      }));
    }
  }]);

  return Choice;
}(React.PureComponent);

defineProperty(Choice, "propTypes", process.env.NODE_ENV === 'production' ? null : {
  choiceValues: propTypes.arrayOf(propTypes.string.isRequired).isRequired,
  cleanName: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  inputExtraText: function inputExtraText() {
    return (typeof bpfrpt_proptype_FieldExtraTextType === "function" ? bpfrpt_proptype_FieldExtraTextType : propTypes.shape(bpfrpt_proptype_FieldExtraTextType)).apply(this, arguments);
  },
  inputProps: function inputProps() {
    return (typeof bpfrpt_proptype_FieldPropsValueType === "function" ? bpfrpt_proptype_FieldPropsValueType : propTypes.shape(bpfrpt_proptype_FieldPropsValueType)).apply(this, arguments);
  },
  getValidity: function getValidity() {
    return (typeof bpfrpt_proptype_ValidityFuncType === "function" ? bpfrpt_proptype_ValidityFuncType.isRequired ? bpfrpt_proptype_ValidityFuncType.isRequired : bpfrpt_proptype_ValidityFuncType : propTypes.shape(bpfrpt_proptype_ValidityFuncType).isRequired).apply(this, arguments);
  },
  name: propTypes.string.isRequired,
  onChange: function onChange() {
    return (typeof bpfrpt_proptype_OnChangeFuncType === "function" ? bpfrpt_proptype_OnChangeFuncType.isRequired ? bpfrpt_proptype_OnChangeFuncType.isRequired : bpfrpt_proptype_OnChangeFuncType : propTypes.shape(bpfrpt_proptype_OnChangeFuncType).isRequired).apply(this, arguments);
  },
  onValidate: function onValidate() {
    return (typeof bpfrpt_proptype_OnValidateFuncType === "function" ? bpfrpt_proptype_OnValidateFuncType : propTypes.shape(bpfrpt_proptype_OnValidateFuncType)).apply(this, arguments);
  },
  savedValue: propTypes.string.isRequired,
  variableType: function variableType() {
    return (typeof bpfrpt_proptype_FieldEnumType === "function" ? bpfrpt_proptype_FieldEnumType.isRequired ? bpfrpt_proptype_FieldEnumType.isRequired : bpfrpt_proptype_FieldEnumType : propTypes.shape(bpfrpt_proptype_FieldEnumType).isRequired).apply(this, arguments);
  }
});

var Identity =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits(Identity, _React$PureComponent);

  function Identity(props) {
    var _this;

    classCallCheck(this, Identity);

    _this = possibleConstructorReturn(this, getPrototypeOf(Identity).call(this, props));

    defineProperty(assertThisInitialized(_this), "baseErrorData", {
      elementName: _this.props.cleanName,
      elementType: _this.props.variableType,
      errorMessage: '',
      isError: false,
      value: _this.props.savedValue || ''
    });

    defineProperty(assertThisInitialized(_this), "state", {
      currentValue: '',
      emailIdentity: '',
      errorMessage: '',
      shouldShowError: false
    });

    var self = assertThisInitialized(_this);

    self.onBlur = _this.onBlur.bind(assertThisInitialized(_this));
    self.onChange = _this.onChange.bind(assertThisInitialized(_this));
    self.onKeyUp = _this.onKeyUp.bind(assertThisInitialized(_this));
    return _this;
  }

  createClass(Identity, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          getValidity = _this$props.getValidity,
          name = _this$props.name,
          savedValue = _this$props.savedValue;

      if (savedValue) {
        var _getValidity = getValidity(name, savedValue),
            isError = _getValidity.isError;

        this.setState({
          currentValue: !isError ? JSON.parse(savedValue).email : ''
        });
      }
    }
  }, {
    key: "createIdentityInternalValue",
    value: function createIdentityInternalValue(value) {
      try {
        return this.props.openLaw.createIdentityInternalValue('', value);
      } catch (error) {
        return '';
      }
    }
  }, {
    key: "onBlur",
    value: function onBlur(event) {
      var inputProps = this.props.inputProps;
      var emailIdentity = this.state.emailIdentity;

      var _onBlurValidation = onBlurValidation(emailIdentity, this.props, this.state),
          errorMessage = _onBlurValidation.errorData.errorMessage,
          shouldShowError = _onBlurValidation.shouldShowError; // persist event outside of this handler to a parent component


      if (event) event.persist();
      this.setState({
        errorMessage: errorMessage,
        shouldShowError: shouldShowError
      }, function () {
        if (event && inputProps && inputProps.onBlur) {
          inputProps.onBlur(event);
        }
      });
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      var eventValue = event.currentTarget.value;
      var _this$props2 = this.props,
          inputProps = _this$props2.inputProps,
          name = _this$props2.name,
          onChange = _this$props2.onChange;
      var emailIdentity = this.createIdentityInternalValue(eventValue);

      var _onChangeValidation = onChangeValidation(emailIdentity, this.props, this.state),
          errorData = _onChangeValidation.errorData,
          shouldShowError = _onChangeValidation.shouldShowError;

      this.setState({
        currentValue: eventValue,
        emailIdentity: emailIdentity,
        errorMessage: errorData.errorMessage,
        shouldShowError: shouldShowError
      }, function () {
        onChange(name, emailIdentity || undefined, errorData);

        if (event && inputProps && inputProps.onChange) {
          inputProps.onChange(event);
        }
      });
    }
  }, {
    key: "onKeyUp",
    value: function onKeyUp(event) {
      var _this$props3 = this.props,
          inputProps = _this$props3.inputProps,
          onKeyUp = _this$props3.onKeyUp;
      if (onKeyUp) onKeyUp(event); // persist event outside of this handler to a parent component

      event.persist();

      if (inputProps && inputProps.onKeyUp) {
        inputProps.onKeyUp(event);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          cleanName = _this$props4.cleanName,
          description = _this$props4.description,
          inputExtraText = _this$props4.inputExtraText,
          inputProps = _this$props4.inputProps,
          variableType = _this$props4.variableType;
      var _this$state = this.state,
          currentValue = _this$state.currentValue,
          errorMessage = _this$state.errorMessage,
          shouldShowError = _this$state.shouldShowError;
      var errorClassName = errorMessage && shouldShowError ? CSS_CLASS_NAMES.fieldInputError : '';
      var inputPropsClassName = inputProps && inputProps.className ? " ".concat(inputProps.className) : '';
      return React.createElement("div", {
        className: "".concat(CSS_CLASS_NAMES.field, " ").concat(CSS_CLASS_NAMES.fieldTypeToLower(variableType))
      }, React.createElement("label", {
        className: "".concat(CSS_CLASS_NAMES.fieldLabel)
      }, React.createElement("span", {
        className: "".concat(CSS_CLASS_NAMES.fieldLabelText)
      }, description), React.createElement("input", _extends_1({
        placeholder: description,
        title: description
      }, inputProps, {
        className: singleSpaceString("".concat(CSS_CLASS_NAMES.fieldInput, " ").concat(cleanName, " ").concat(inputPropsClassName, " ").concat(errorClassName)),
        onBlur: this.onBlur,
        onChange: this.onChange,
        onKeyUp: this.onKeyUp,
        type: "email",
        value: currentValue
      })), React.createElement(FieldError, {
        cleanName: cleanName,
        errorMessage: errorMessage,
        shouldShowError: shouldShowError
      })), inputExtraText && React.createElement(ExtraText, {
        text: inputExtraText
      }));
    }
  }]);

  return Identity;
}(React.PureComponent);

defineProperty(Identity, "propTypes", process.env.NODE_ENV === 'production' ? null : {
  cleanName: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  getValidity: function getValidity() {
    return (typeof bpfrpt_proptype_ValidityFuncType === "function" ? bpfrpt_proptype_ValidityFuncType.isRequired ? bpfrpt_proptype_ValidityFuncType.isRequired : bpfrpt_proptype_ValidityFuncType : propTypes.shape(bpfrpt_proptype_ValidityFuncType).isRequired).apply(this, arguments);
  },
  inputExtraText: function inputExtraText() {
    return (typeof bpfrpt_proptype_FieldExtraTextType === "function" ? bpfrpt_proptype_FieldExtraTextType : propTypes.shape(bpfrpt_proptype_FieldExtraTextType)).apply(this, arguments);
  },
  inputProps: function inputProps() {
    return (typeof bpfrpt_proptype_FieldPropsValueType === "function" ? bpfrpt_proptype_FieldPropsValueType : propTypes.shape(bpfrpt_proptype_FieldPropsValueType)).apply(this, arguments);
  },
  name: propTypes.string.isRequired,
  onChange: function onChange() {
    return (typeof bpfrpt_proptype_OnChangeFuncType === "function" ? bpfrpt_proptype_OnChangeFuncType.isRequired ? bpfrpt_proptype_OnChangeFuncType.isRequired : bpfrpt_proptype_OnChangeFuncType : propTypes.shape(bpfrpt_proptype_OnChangeFuncType).isRequired).apply(this, arguments);
  },
  onKeyUp: function onKeyUp() {
    return (typeof bpfrpt_proptype_ValidateOnKeyUpFuncType === "function" ? bpfrpt_proptype_ValidateOnKeyUpFuncType : propTypes.shape(bpfrpt_proptype_ValidateOnKeyUpFuncType)).apply(this, arguments);
  },
  onValidate: function onValidate() {
    return (typeof bpfrpt_proptype_OnValidateFuncType === "function" ? bpfrpt_proptype_OnValidateFuncType : propTypes.shape(bpfrpt_proptype_OnValidateFuncType)).apply(this, arguments);
  },
  openLaw: propTypes.object.isRequired,
  savedValue: propTypes.string.isRequired,
  variableType: function variableType() {
    return (typeof bpfrpt_proptype_FieldEnumType === "function" ? bpfrpt_proptype_FieldEnumType.isRequired ? bpfrpt_proptype_FieldEnumType.isRequired : bpfrpt_proptype_FieldEnumType : propTypes.shape(bpfrpt_proptype_FieldEnumType).isRequired).apply(this, arguments);
  }
});

var flatpickr = createCommonjsModule(function (module, exports) {
/* flatpickr v4.6.3, @license MIT */
(function (global, factory) {
   module.exports = factory() ;
})(commonjsGlobal, function () {
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
    See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */

  var __assign = function () {
    __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];

        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }

      return t;
    };

    return __assign.apply(this, arguments);
  };

  var HOOKS = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"];
  var defaults = {
    _disable: [],
    _enable: [],
    allowInput: false,
    altFormat: "F j, Y",
    altInput: false,
    altInputClass: "form-control input",
    animate: typeof window === "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
    ariaDateFormat: "F j, Y",
    clickOpens: true,
    closeOnSelect: true,
    conjunction: ", ",
    dateFormat: "Y-m-d",
    defaultHour: 12,
    defaultMinute: 0,
    defaultSeconds: 0,
    disable: [],
    disableMobile: false,
    enable: [],
    enableSeconds: false,
    enableTime: false,
    errorHandler: function (err) {
      return typeof console !== "undefined" && console.warn(err);
    },
    getWeek: function (givenDate) {
      var date = new Date(givenDate.getTime());
      date.setHours(0, 0, 0, 0); // Thursday in current week decides the year.

      date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7); // January 4 is always in week 1.

      var week1 = new Date(date.getFullYear(), 0, 4); // Adjust to Thursday in week 1 and count number of weeks from date to week1.

      return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
    },
    hourIncrement: 1,
    ignoredFocusElements: [],
    inline: false,
    locale: "default",
    minuteIncrement: 5,
    mode: "single",
    monthSelectorType: "dropdown",
    nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
    noCalendar: false,
    now: new Date(),
    onChange: [],
    onClose: [],
    onDayCreate: [],
    onDestroy: [],
    onKeyDown: [],
    onMonthChange: [],
    onOpen: [],
    onParseConfig: [],
    onReady: [],
    onValueUpdate: [],
    onYearChange: [],
    onPreCalendarPosition: [],
    plugins: [],
    position: "auto",
    positionElement: undefined,
    prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
    shorthandCurrentMonth: false,
    showMonths: 1,
    static: false,
    time_24hr: false,
    weekNumbers: false,
    wrap: false
  };
  var english = {
    weekdays: {
      shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    months: {
      shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    },
    daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    firstDayOfWeek: 0,
    ordinal: function (nth) {
      var s = nth % 100;
      if (s > 3 && s < 21) return "th";

      switch (s % 10) {
        case 1:
          return "st";

        case 2:
          return "nd";

        case 3:
          return "rd";

        default:
          return "th";
      }
    },
    rangeSeparator: " to ",
    weekAbbreviation: "Wk",
    scrollTitle: "Scroll to increment",
    toggleTitle: "Click to toggle",
    amPM: ["AM", "PM"],
    yearAriaLabel: "Year",
    hourAriaLabel: "Hour",
    minuteAriaLabel: "Minute",
    time_24hr: false
  };

  var pad = function (number) {
    return ("0" + number).slice(-2);
  };

  var int = function (bool) {
    return bool === true ? 1 : 0;
  };
  /* istanbul ignore next */


  function debounce(func, wait, immediate) {
    if (immediate === void 0) {
      immediate = false;
    }

    var timeout;
    return function () {
      var context = this,
          args = arguments;
      timeout !== null && clearTimeout(timeout);
      timeout = window.setTimeout(function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      }, wait);
      if (immediate && !timeout) func.apply(context, args);
    };
  }

  var arrayify = function (obj) {
    return obj instanceof Array ? obj : [obj];
  };

  function toggleClass(elem, className, bool) {
    if (bool === true) return elem.classList.add(className);
    elem.classList.remove(className);
  }

  function createElement(tag, className, content) {
    var e = window.document.createElement(tag);
    className = className || "";
    content = content || "";
    e.className = className;
    if (content !== undefined) e.textContent = content;
    return e;
  }

  function clearNode(node) {
    while (node.firstChild) node.removeChild(node.firstChild);
  }

  function findParent(node, condition) {
    if (condition(node)) return node;else if (node.parentNode) return findParent(node.parentNode, condition);
    return undefined; // nothing found
  }

  function createNumberInput(inputClassName, opts) {
    var wrapper = createElement("div", "numInputWrapper"),
        numInput = createElement("input", "numInput " + inputClassName),
        arrowUp = createElement("span", "arrowUp"),
        arrowDown = createElement("span", "arrowDown");

    if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
      numInput.type = "number";
    } else {
      numInput.type = "text";
      numInput.pattern = "\\d*";
    }

    if (opts !== undefined) for (var key in opts) numInput.setAttribute(key, opts[key]);
    wrapper.appendChild(numInput);
    wrapper.appendChild(arrowUp);
    wrapper.appendChild(arrowDown);
    return wrapper;
  }

  function getEventTarget(event) {
    if (typeof event.composedPath === "function") {
      var path = event.composedPath();
      return path[0];
    }

    return event.target;
  }

  var doNothing = function () {
    return undefined;
  };

  var monthToStr = function (monthNumber, shorthand, locale) {
    return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
  };

  var revFormat = {
    D: doNothing,
    F: function (dateObj, monthName, locale) {
      dateObj.setMonth(locale.months.longhand.indexOf(monthName));
    },
    G: function (dateObj, hour) {
      dateObj.setHours(parseFloat(hour));
    },
    H: function (dateObj, hour) {
      dateObj.setHours(parseFloat(hour));
    },
    J: function (dateObj, day) {
      dateObj.setDate(parseFloat(day));
    },
    K: function (dateObj, amPM, locale) {
      dateObj.setHours(dateObj.getHours() % 12 + 12 * int(new RegExp(locale.amPM[1], "i").test(amPM)));
    },
    M: function (dateObj, shortMonth, locale) {
      dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
    },
    S: function (dateObj, seconds) {
      dateObj.setSeconds(parseFloat(seconds));
    },
    U: function (_, unixSeconds) {
      return new Date(parseFloat(unixSeconds) * 1000);
    },
    W: function (dateObj, weekNum, locale) {
      var weekNumber = parseInt(weekNum);
      var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
      date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
      return date;
    },
    Y: function (dateObj, year) {
      dateObj.setFullYear(parseFloat(year));
    },
    Z: function (_, ISODate) {
      return new Date(ISODate);
    },
    d: function (dateObj, day) {
      dateObj.setDate(parseFloat(day));
    },
    h: function (dateObj, hour) {
      dateObj.setHours(parseFloat(hour));
    },
    i: function (dateObj, minutes) {
      dateObj.setMinutes(parseFloat(minutes));
    },
    j: function (dateObj, day) {
      dateObj.setDate(parseFloat(day));
    },
    l: doNothing,
    m: function (dateObj, month) {
      dateObj.setMonth(parseFloat(month) - 1);
    },
    n: function (dateObj, month) {
      dateObj.setMonth(parseFloat(month) - 1);
    },
    s: function (dateObj, seconds) {
      dateObj.setSeconds(parseFloat(seconds));
    },
    u: function (_, unixMillSeconds) {
      return new Date(parseFloat(unixMillSeconds));
    },
    w: doNothing,
    y: function (dateObj, year) {
      dateObj.setFullYear(2000 + parseFloat(year));
    }
  };
  var tokenRegex = {
    D: "(\\w+)",
    F: "(\\w+)",
    G: "(\\d\\d|\\d)",
    H: "(\\d\\d|\\d)",
    J: "(\\d\\d|\\d)\\w+",
    K: "",
    M: "(\\w+)",
    S: "(\\d\\d|\\d)",
    U: "(.+)",
    W: "(\\d\\d|\\d)",
    Y: "(\\d{4})",
    Z: "(.+)",
    d: "(\\d\\d|\\d)",
    h: "(\\d\\d|\\d)",
    i: "(\\d\\d|\\d)",
    j: "(\\d\\d|\\d)",
    l: "(\\w+)",
    m: "(\\d\\d|\\d)",
    n: "(\\d\\d|\\d)",
    s: "(\\d\\d|\\d)",
    u: "(.+)",
    w: "(\\d\\d|\\d)",
    y: "(\\d{2})"
  };
  var formats = {
    // get the date in UTC
    Z: function (date) {
      return date.toISOString();
    },
    // weekday name, short, e.g. Thu
    D: function (date, locale, options) {
      return locale.weekdays.shorthand[formats.w(date, locale, options)];
    },
    // full month name e.g. January
    F: function (date, locale, options) {
      return monthToStr(formats.n(date, locale, options) - 1, false, locale);
    },
    // padded hour 1-12
    G: function (date, locale, options) {
      return pad(formats.h(date, locale, options));
    },
    // hours with leading zero e.g. 03
    H: function (date) {
      return pad(date.getHours());
    },
    // day (1-30) with ordinal suffix e.g. 1st, 2nd
    J: function (date, locale) {
      return locale.ordinal !== undefined ? date.getDate() + locale.ordinal(date.getDate()) : date.getDate();
    },
    // AM/PM
    K: function (date, locale) {
      return locale.amPM[int(date.getHours() > 11)];
    },
    // shorthand month e.g. Jan, Sep, Oct, etc
    M: function (date, locale) {
      return monthToStr(date.getMonth(), true, locale);
    },
    // seconds 00-59
    S: function (date) {
      return pad(date.getSeconds());
    },
    // unix timestamp
    U: function (date) {
      return date.getTime() / 1000;
    },
    W: function (date, _, options) {
      return options.getWeek(date);
    },
    // full year e.g. 2016
    Y: function (date) {
      return date.getFullYear();
    },
    // day in month, padded (01-30)
    d: function (date) {
      return pad(date.getDate());
    },
    // hour from 1-12 (am/pm)
    h: function (date) {
      return date.getHours() % 12 ? date.getHours() % 12 : 12;
    },
    // minutes, padded with leading zero e.g. 09
    i: function (date) {
      return pad(date.getMinutes());
    },
    // day in month (1-30)
    j: function (date) {
      return date.getDate();
    },
    // weekday name, full, e.g. Thursday
    l: function (date, locale) {
      return locale.weekdays.longhand[date.getDay()];
    },
    // padded month number (01-12)
    m: function (date) {
      return pad(date.getMonth() + 1);
    },
    // the month number (1-12)
    n: function (date) {
      return date.getMonth() + 1;
    },
    // seconds 0-59
    s: function (date) {
      return date.getSeconds();
    },
    // Unix Milliseconds
    u: function (date) {
      return date.getTime();
    },
    // number of the day of the week
    w: function (date) {
      return date.getDay();
    },
    // last two digits of year e.g. 16 for 2016
    y: function (date) {
      return String(date.getFullYear()).substring(2);
    }
  };

  var createDateFormatter = function (_a) {
    var _b = _a.config,
        config = _b === void 0 ? defaults : _b,
        _c = _a.l10n,
        l10n = _c === void 0 ? english : _c;
    return function (dateObj, frmt, overrideLocale) {
      var locale = overrideLocale || l10n;

      if (config.formatDate !== undefined) {
        return config.formatDate(dateObj, frmt, locale);
      }

      return frmt.split("").map(function (c, i, arr) {
        return formats[c] && arr[i - 1] !== "\\" ? formats[c](dateObj, locale, config) : c !== "\\" ? c : "";
      }).join("");
    };
  };

  var createDateParser = function (_a) {
    var _b = _a.config,
        config = _b === void 0 ? defaults : _b,
        _c = _a.l10n,
        l10n = _c === void 0 ? english : _c;
    return function (date, givenFormat, timeless, customLocale) {
      if (date !== 0 && !date) return undefined;
      var locale = customLocale || l10n;
      var parsedDate;
      var dateOrig = date;
      if (date instanceof Date) parsedDate = new Date(date.getTime());else if (typeof date !== "string" && date.toFixed !== undefined // timestamp
      ) // create a copy
        parsedDate = new Date(date);else if (typeof date === "string") {
        // date string
        var format = givenFormat || (config || defaults).dateFormat;
        var datestr = String(date).trim();

        if (datestr === "today") {
          parsedDate = new Date();
          timeless = true;
        } else if (/Z$/.test(datestr) || /GMT$/.test(datestr) // datestrings w/ timezone
        ) parsedDate = new Date(date);else if (config && config.parseDate) parsedDate = config.parseDate(date, format);else {
          parsedDate = !config || !config.noCalendar ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0) : new Date(new Date().setHours(0, 0, 0, 0));
          var matched = void 0,
              ops = [];

          for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
            var token_1 = format[i];
            var isBackSlash = token_1 === "\\";
            var escaped = format[i - 1] === "\\" || isBackSlash;

            if (tokenRegex[token_1] && !escaped) {
              regexStr += tokenRegex[token_1];
              var match = new RegExp(regexStr).exec(date);

              if (match && (matched = true)) {
                ops[token_1 !== "Y" ? "push" : "unshift"]({
                  fn: revFormat[token_1],
                  val: match[++matchIndex]
                });
              }
            } else if (!isBackSlash) regexStr += "."; // don't really care


            ops.forEach(function (_a) {
              var fn = _a.fn,
                  val = _a.val;
              return parsedDate = fn(parsedDate, val, locale) || parsedDate;
            });
          }

          parsedDate = matched ? parsedDate : undefined;
        }
      }
      /* istanbul ignore next */

      if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
        config.errorHandler(new Error("Invalid date provided: " + dateOrig));
        return undefined;
      }

      if (timeless === true) parsedDate.setHours(0, 0, 0, 0);
      return parsedDate;
    };
  };
  /**
   * Compute the difference in dates, measured in ms
   */


  function compareDates(date1, date2, timeless) {
    if (timeless === void 0) {
      timeless = true;
    }

    if (timeless !== false) {
      return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
    }

    return date1.getTime() - date2.getTime();
  }

  var isBetween = function (ts, ts1, ts2) {
    return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
  };

  var duration = {
    DAY: 86400000
  };

  if (typeof Object.assign !== "function") {
    Object.assign = function (target) {
      var args = [];

      for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
      }

      if (!target) {
        throw TypeError("Cannot convert undefined or null to object");
      }

      var _loop_1 = function (source) {
        if (source) {
          Object.keys(source).forEach(function (key) {
            return target[key] = source[key];
          });
        }
      };

      for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var source = args_1[_a];

        _loop_1(source);
      }

      return target;
    };
  }

  var DEBOUNCED_CHANGE_MS = 300;

  function FlatpickrInstance(element, instanceConfig) {
    var self = {
      config: __assign({}, defaults, flatpickr.defaultConfig),
      l10n: english
    };
    self.parseDate = createDateParser({
      config: self.config,
      l10n: self.l10n
    });
    self._handlers = [];
    self.pluginElements = [];
    self.loadedPlugins = [];
    self._bind = bind;
    self._setHoursFromDate = setHoursFromDate;
    self._positionCalendar = positionCalendar;
    self.changeMonth = changeMonth;
    self.changeYear = changeYear;
    self.clear = clear;
    self.close = close;
    self._createElement = createElement;
    self.destroy = destroy;
    self.isEnabled = isEnabled;
    self.jumpToDate = jumpToDate;
    self.open = open;
    self.redraw = redraw;
    self.set = set;
    self.setDate = setDate;
    self.toggle = toggle;

    function setupHelperFunctions() {
      self.utils = {
        getDaysInMonth: function (month, yr) {
          if (month === void 0) {
            month = self.currentMonth;
          }

          if (yr === void 0) {
            yr = self.currentYear;
          }

          if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0)) return 29;
          return self.l10n.daysInMonth[month];
        }
      };
    }

    function init() {
      self.element = self.input = element;
      self.isOpen = false;
      parseConfig();
      setupLocale();
      setupInputs();
      setupDates();
      setupHelperFunctions();
      if (!self.isMobile) build();
      bindEvents();

      if (self.selectedDates.length || self.config.noCalendar) {
        if (self.config.enableTime) {
          setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj || self.config.minDate : undefined);
        }

        updateValue(false);
      }

      setCalendarWidth();
      self.showTimeInput = self.selectedDates.length > 0 || self.config.noCalendar;
      var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      /* TODO: investigate this further
                 Currently, there is weird positioning behavior in safari causing pages
        to scroll up. https://github.com/chmln/flatpickr/issues/563
                 However, most browsers are not Safari and positioning is expensive when used
        in scale. https://github.com/chmln/flatpickr/issues/1096
      */

      if (!self.isMobile && isSafari) {
        positionCalendar();
      }

      triggerEvent("onReady");
    }

    function bindToInstance(fn) {
      return fn.bind(self);
    }

    function setCalendarWidth() {
      var config = self.config;
      if (config.weekNumbers === false && config.showMonths === 1) return;else if (config.noCalendar !== true) {
        window.requestAnimationFrame(function () {
          if (self.calendarContainer !== undefined) {
            self.calendarContainer.style.visibility = "hidden";
            self.calendarContainer.style.display = "block";
          }

          if (self.daysContainer !== undefined) {
            var daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
            self.daysContainer.style.width = daysWidth + "px";
            self.calendarContainer.style.width = daysWidth + (self.weekWrapper !== undefined ? self.weekWrapper.offsetWidth : 0) + "px";
            self.calendarContainer.style.removeProperty("visibility");
            self.calendarContainer.style.removeProperty("display");
          }
        });
      }
    }
    /**
     * The handler for all events targeting the time inputs
     */


    function updateTime(e) {
      if (self.selectedDates.length === 0) {
        setDefaultTime();
      }

      if (e !== undefined && e.type !== "blur") {
        timeWrapper(e);
      }

      var prevValue = self._input.value;
      setHoursFromInputs();
      updateValue();

      if (self._input.value !== prevValue) {
        self._debouncedChange();
      }
    }

    function ampm2military(hour, amPM) {
      return hour % 12 + 12 * int(amPM === self.l10n.amPM[1]);
    }

    function military2ampm(hour) {
      switch (hour % 24) {
        case 0:
        case 12:
          return 12;

        default:
          return hour % 12;
      }
    }
    /**
     * Syncs the selected date object time with user's time input
     */


    function setHoursFromInputs() {
      if (self.hourElement === undefined || self.minuteElement === undefined) return;
      var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24,
          minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60,
          seconds = self.secondElement !== undefined ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;

      if (self.amPM !== undefined) {
        hours = ampm2military(hours, self.amPM.textContent);
      }

      var limitMinHours = self.config.minTime !== undefined || self.config.minDate && self.minDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.minDate, true) === 0;
      var limitMaxHours = self.config.maxTime !== undefined || self.config.maxDate && self.maxDateHasTime && self.latestSelectedDateObj && compareDates(self.latestSelectedDateObj, self.config.maxDate, true) === 0;

      if (limitMaxHours) {
        var maxTime = self.config.maxTime !== undefined ? self.config.maxTime : self.config.maxDate;
        hours = Math.min(hours, maxTime.getHours());
        if (hours === maxTime.getHours()) minutes = Math.min(minutes, maxTime.getMinutes());
        if (minutes === maxTime.getMinutes()) seconds = Math.min(seconds, maxTime.getSeconds());
      }

      if (limitMinHours) {
        var minTime = self.config.minTime !== undefined ? self.config.minTime : self.config.minDate;
        hours = Math.max(hours, minTime.getHours());
        if (hours === minTime.getHours()) minutes = Math.max(minutes, minTime.getMinutes());
        if (minutes === minTime.getMinutes()) seconds = Math.max(seconds, minTime.getSeconds());
      }

      setHours(hours, minutes, seconds);
    }
    /**
     * Syncs time input values with a date
     */


    function setHoursFromDate(dateObj) {
      var date = dateObj || self.latestSelectedDateObj;
      if (date) setHours(date.getHours(), date.getMinutes(), date.getSeconds());
    }

    function setDefaultHours() {
      var hours = self.config.defaultHour;
      var minutes = self.config.defaultMinute;
      var seconds = self.config.defaultSeconds;

      if (self.config.minDate !== undefined) {
        var minHr = self.config.minDate.getHours();
        var minMinutes = self.config.minDate.getMinutes();
        hours = Math.max(hours, minHr);
        if (hours === minHr) minutes = Math.max(minMinutes, minutes);
        if (hours === minHr && minutes === minMinutes) seconds = self.config.minDate.getSeconds();
      }

      if (self.config.maxDate !== undefined) {
        var maxHr = self.config.maxDate.getHours();
        var maxMinutes = self.config.maxDate.getMinutes();
        hours = Math.min(hours, maxHr);
        if (hours === maxHr) minutes = Math.min(maxMinutes, minutes);
        if (hours === maxHr && minutes === maxMinutes) seconds = self.config.maxDate.getSeconds();
      }

      setHours(hours, minutes, seconds);
    }
    /**
     * Sets the hours, minutes, and optionally seconds
     * of the latest selected date object and the
     * corresponding time inputs
     * @param {Number} hours the hour. whether its military
     *                 or am-pm gets inferred from config
     * @param {Number} minutes the minutes
     * @param {Number} seconds the seconds (optional)
     */


    function setHours(hours, minutes, seconds) {
      if (self.latestSelectedDateObj !== undefined) {
        self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
      }

      if (!self.hourElement || !self.minuteElement || self.isMobile) return;
      self.hourElement.value = pad(!self.config.time_24hr ? (12 + hours) % 12 + 12 * int(hours % 12 === 0) : hours);
      self.minuteElement.value = pad(minutes);
      if (self.amPM !== undefined) self.amPM.textContent = self.l10n.amPM[int(hours >= 12)];
      if (self.secondElement !== undefined) self.secondElement.value = pad(seconds);
    }
    /**
     * Handles the year input and incrementing events
     * @param {Event} event the keyup or increment event
     */


    function onYearInput(event) {
      var year = parseInt(event.target.value) + (event.delta || 0);

      if (year / 1000 > 1 || event.key === "Enter" && !/[^\d]/.test(year.toString())) {
        changeYear(year);
      }
    }
    /**
     * Essentially addEventListener + tracking
     * @param {Element} element the element to addEventListener to
     * @param {String} event the event name
     * @param {Function} handler the event handler
     */


    function bind(element, event, handler, options) {
      if (event instanceof Array) return event.forEach(function (ev) {
        return bind(element, ev, handler, options);
      });
      if (element instanceof Array) return element.forEach(function (el) {
        return bind(el, event, handler, options);
      });
      element.addEventListener(event, handler, options);

      self._handlers.push({
        element: element,
        event: event,
        handler: handler,
        options: options
      });
    }
    /**
     * A mousedown handler which mimics click.
     * Minimizes latency, since we don't need to wait for mouseup in most cases.
     * Also, avoids handling right clicks.
     *
     * @param {Function} handler the event handler
     */


    function onClick(handler) {
      return function (evt) {
        evt.which === 1 && handler(evt);
      };
    }

    function triggerChange() {
      triggerEvent("onChange");
    }
    /**
     * Adds all the necessary event listeners
     */


    function bindEvents() {
      if (self.config.wrap) {
        ["open", "close", "toggle", "clear"].forEach(function (evt) {
          Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
            return bind(el, "click", self[evt]);
          });
        });
      }

      if (self.isMobile) {
        setupMobile();
        return;
      }

      var debouncedResize = debounce(onResize, 50);
      self._debouncedChange = debounce(triggerChange, DEBOUNCED_CHANGE_MS);
      if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent)) bind(self.daysContainer, "mouseover", function (e) {
        if (self.config.mode === "range") onMouseOver(e.target);
      });
      bind(window.document.body, "keydown", onKeyDown);
      if (!self.config.inline && !self.config.static) bind(window, "resize", debouncedResize);
      if (window.ontouchstart !== undefined) bind(window.document, "touchstart", documentClick);else bind(window.document, "mousedown", onClick(documentClick));
      bind(window.document, "focus", documentClick, {
        capture: true
      });

      if (self.config.clickOpens === true) {
        bind(self._input, "focus", self.open);
        bind(self._input, "mousedown", onClick(self.open));
      }

      if (self.daysContainer !== undefined) {
        bind(self.monthNav, "mousedown", onClick(onMonthNavClick));
        bind(self.monthNav, ["keyup", "increment"], onYearInput);
        bind(self.daysContainer, "mousedown", onClick(selectDate));
      }

      if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined) {
        var selText = function (e) {
          return e.target.select();
        };

        bind(self.timeContainer, ["increment"], updateTime);
        bind(self.timeContainer, "blur", updateTime, {
          capture: true
        });
        bind(self.timeContainer, "mousedown", onClick(timeIncrement));
        bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
        if (self.secondElement !== undefined) bind(self.secondElement, "focus", function () {
          return self.secondElement && self.secondElement.select();
        });

        if (self.amPM !== undefined) {
          bind(self.amPM, "mousedown", onClick(function (e) {
            updateTime(e);
            triggerChange();
          }));
        }
      }
    }
    /**
     * Set the calendar view to a particular date.
     * @param {Date} jumpDate the date to set the view to
     * @param {boolean} triggerChange if change events should be triggered
     */


    function jumpToDate(jumpDate, triggerChange) {
      var jumpTo = jumpDate !== undefined ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate && self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);
      var oldYear = self.currentYear;
      var oldMonth = self.currentMonth;

      try {
        if (jumpTo !== undefined) {
          self.currentYear = jumpTo.getFullYear();
          self.currentMonth = jumpTo.getMonth();
        }
      } catch (e) {
        /* istanbul ignore next */
        e.message = "Invalid date supplied: " + jumpTo;
        self.config.errorHandler(e);
      }

      if (triggerChange && self.currentYear !== oldYear) {
        triggerEvent("onYearChange");
        buildMonthSwitch();
      }

      if (triggerChange && (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) {
        triggerEvent("onMonthChange");
      }

      self.redraw();
    }
    /**
     * The up/down arrow handler for time inputs
     * @param {Event} e the click event
     */


    function timeIncrement(e) {
      if (~e.target.className.indexOf("arrow")) incrementNumInput(e, e.target.classList.contains("arrowUp") ? 1 : -1);
    }
    /**
     * Increments/decrements the value of input associ-
     * ated with the up/down arrow by dispatching an
     * "increment" event on the input.
     *
     * @param {Event} e the click event
     * @param {Number} delta the diff (usually 1 or -1)
     * @param {Element} inputElem the input element
     */


    function incrementNumInput(e, delta, inputElem) {
      var target = e && e.target;
      var input = inputElem || target && target.parentNode && target.parentNode.firstChild;
      var event = createEvent("increment");
      event.delta = delta;
      input && input.dispatchEvent(event);
    }

    function build() {
      var fragment = window.document.createDocumentFragment();
      self.calendarContainer = createElement("div", "flatpickr-calendar");
      self.calendarContainer.tabIndex = -1;

      if (!self.config.noCalendar) {
        fragment.appendChild(buildMonthNav());
        self.innerContainer = createElement("div", "flatpickr-innerContainer");

        if (self.config.weekNumbers) {
          var _a = buildWeeks(),
              weekWrapper = _a.weekWrapper,
              weekNumbers = _a.weekNumbers;

          self.innerContainer.appendChild(weekWrapper);
          self.weekNumbers = weekNumbers;
          self.weekWrapper = weekWrapper;
        }

        self.rContainer = createElement("div", "flatpickr-rContainer");
        self.rContainer.appendChild(buildWeekdays());

        if (!self.daysContainer) {
          self.daysContainer = createElement("div", "flatpickr-days");
          self.daysContainer.tabIndex = -1;
        }

        buildDays();
        self.rContainer.appendChild(self.daysContainer);
        self.innerContainer.appendChild(self.rContainer);
        fragment.appendChild(self.innerContainer);
      }

      if (self.config.enableTime) {
        fragment.appendChild(buildTime());
      }

      toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
      toggleClass(self.calendarContainer, "animate", self.config.animate === true);
      toggleClass(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
      self.calendarContainer.appendChild(fragment);
      var customAppend = self.config.appendTo !== undefined && self.config.appendTo.nodeType !== undefined;

      if (self.config.inline || self.config.static) {
        self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");

        if (self.config.inline) {
          if (!customAppend && self.element.parentNode) self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);else if (self.config.appendTo !== undefined) self.config.appendTo.appendChild(self.calendarContainer);
        }

        if (self.config.static) {
          var wrapper = createElement("div", "flatpickr-wrapper");
          if (self.element.parentNode) self.element.parentNode.insertBefore(wrapper, self.element);
          wrapper.appendChild(self.element);
          if (self.altInput) wrapper.appendChild(self.altInput);
          wrapper.appendChild(self.calendarContainer);
        }
      }

      if (!self.config.static && !self.config.inline) (self.config.appendTo !== undefined ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
    }

    function createDay(className, date, dayNumber, i) {
      var dateIsEnabled = isEnabled(date, true),
          dayElement = createElement("span", "flatpickr-day " + className, date.getDate().toString());
      dayElement.dateObj = date;
      dayElement.$i = i;
      dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));

      if (className.indexOf("hidden") === -1 && compareDates(date, self.now) === 0) {
        self.todayDateElem = dayElement;
        dayElement.classList.add("today");
        dayElement.setAttribute("aria-current", "date");
      }

      if (dateIsEnabled) {
        dayElement.tabIndex = -1;

        if (isDateSelected(date)) {
          dayElement.classList.add("selected");
          self.selectedDateElem = dayElement;

          if (self.config.mode === "range") {
            toggleClass(dayElement, "startRange", self.selectedDates[0] && compareDates(date, self.selectedDates[0], true) === 0);
            toggleClass(dayElement, "endRange", self.selectedDates[1] && compareDates(date, self.selectedDates[1], true) === 0);
            if (className === "nextMonthDay") dayElement.classList.add("inRange");
          }
        }
      } else {
        dayElement.classList.add("flatpickr-disabled");
      }

      if (self.config.mode === "range") {
        if (isDateInRange(date) && !isDateSelected(date)) dayElement.classList.add("inRange");
      }

      if (self.weekNumbers && self.config.showMonths === 1 && className !== "prevMonthDay" && dayNumber % 7 === 1) {
        self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
      }

      triggerEvent("onDayCreate", dayElement);
      return dayElement;
    }

    function focusOnDayElem(targetNode) {
      targetNode.focus();
      if (self.config.mode === "range") onMouseOver(targetNode);
    }

    function getFirstAvailableDay(delta) {
      var startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
      var endMonth = delta > 0 ? self.config.showMonths : -1;

      for (var m = startMonth; m != endMonth; m += delta) {
        var month = self.daysContainer.children[m];
        var startIndex = delta > 0 ? 0 : month.children.length - 1;
        var endIndex = delta > 0 ? month.children.length : -1;

        for (var i = startIndex; i != endIndex; i += delta) {
          var c = month.children[i];
          if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj)) return c;
        }
      }

      return undefined;
    }

    function getNextAvailableDay(current, delta) {
      var givenMonth = current.className.indexOf("Month") === -1 ? current.dateObj.getMonth() : self.currentMonth;
      var endMonth = delta > 0 ? self.config.showMonths : -1;
      var loopDelta = delta > 0 ? 1 : -1;

      for (var m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta) {
        var month = self.daysContainer.children[m];
        var startIndex = givenMonth - self.currentMonth === m ? current.$i + delta : delta < 0 ? month.children.length - 1 : 0;
        var numMonthDays = month.children.length;

        for (var i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta) {
          var c = month.children[i];
          if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj) && Math.abs(current.$i - i) >= Math.abs(delta)) return focusOnDayElem(c);
        }
      }

      self.changeMonth(loopDelta);
      focusOnDay(getFirstAvailableDay(loopDelta), 0);
      return undefined;
    }

    function focusOnDay(current, offset) {
      var dayFocused = isInView(document.activeElement || document.body);
      var startElem = current !== undefined ? current : dayFocused ? document.activeElement : self.selectedDateElem !== undefined && isInView(self.selectedDateElem) ? self.selectedDateElem : self.todayDateElem !== undefined && isInView(self.todayDateElem) ? self.todayDateElem : getFirstAvailableDay(offset > 0 ? 1 : -1);
      if (startElem === undefined) return self._input.focus();
      if (!dayFocused) return focusOnDayElem(startElem);
      getNextAvailableDay(startElem, offset);
    }

    function buildMonthDays(year, month) {
      var firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
      var prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12);
      var daysInMonth = self.utils.getDaysInMonth(month),
          days = window.document.createDocumentFragment(),
          isMultiMonth = self.config.showMonths > 1,
          prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay",
          nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
      var dayNumber = prevMonthDays + 1 - firstOfMonth,
          dayIndex = 0; // prepend days from the ending of previous month

      for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
        days.appendChild(createDay(prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
      } // Start at 1 since there is no 0th day


      for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
        days.appendChild(createDay("", new Date(year, month, dayNumber), dayNumber, dayIndex));
      } // append days from the next month


      for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth && (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
        days.appendChild(createDay(nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
      } //updateNavigationCurrentMonth();


      var dayContainer = createElement("div", "dayContainer");
      dayContainer.appendChild(days);
      return dayContainer;
    }

    function buildDays() {
      if (self.daysContainer === undefined) {
        return;
      }

      clearNode(self.daysContainer); // TODO: week numbers for each month

      if (self.weekNumbers) clearNode(self.weekNumbers);
      var frag = document.createDocumentFragment();

      for (var i = 0; i < self.config.showMonths; i++) {
        var d = new Date(self.currentYear, self.currentMonth, 1);
        d.setMonth(self.currentMonth + i);
        frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
      }

      self.daysContainer.appendChild(frag);
      self.days = self.daysContainer.firstChild;

      if (self.config.mode === "range" && self.selectedDates.length === 1) {
        onMouseOver();
      }
    }

    function buildMonthSwitch() {
      if (self.config.showMonths > 1 || self.config.monthSelectorType !== "dropdown") return;

      var shouldBuildMonth = function (month) {
        if (self.config.minDate !== undefined && self.currentYear === self.config.minDate.getFullYear() && month < self.config.minDate.getMonth()) {
          return false;
        }

        return !(self.config.maxDate !== undefined && self.currentYear === self.config.maxDate.getFullYear() && month > self.config.maxDate.getMonth());
      };

      self.monthsDropdownContainer.tabIndex = -1;
      self.monthsDropdownContainer.innerHTML = "";

      for (var i = 0; i < 12; i++) {
        if (!shouldBuildMonth(i)) continue;
        var month = createElement("option", "flatpickr-monthDropdown-month");
        month.value = new Date(self.currentYear, i).getMonth().toString();
        month.textContent = monthToStr(i, self.config.shorthandCurrentMonth, self.l10n);
        month.tabIndex = -1;

        if (self.currentMonth === i) {
          month.selected = true;
        }

        self.monthsDropdownContainer.appendChild(month);
      }
    }

    function buildMonth() {
      var container = createElement("div", "flatpickr-month");
      var monthNavFragment = window.document.createDocumentFragment();
      var monthElement;

      if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
        monthElement = createElement("span", "cur-month");
      } else {
        self.monthsDropdownContainer = createElement("select", "flatpickr-monthDropdown-months");
        bind(self.monthsDropdownContainer, "change", function (e) {
          var target = e.target;
          var selectedMonth = parseInt(target.value, 10);
          self.changeMonth(selectedMonth - self.currentMonth);
          triggerEvent("onMonthChange");
        });
        buildMonthSwitch();
        monthElement = self.monthsDropdownContainer;
      }

      var yearInput = createNumberInput("cur-year", {
        tabindex: "-1"
      });
      var yearElement = yearInput.getElementsByTagName("input")[0];
      yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);

      if (self.config.minDate) {
        yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
      }

      if (self.config.maxDate) {
        yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
        yearElement.disabled = !!self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
      }

      var currentMonth = createElement("div", "flatpickr-current-month");
      currentMonth.appendChild(monthElement);
      currentMonth.appendChild(yearInput);
      monthNavFragment.appendChild(currentMonth);
      container.appendChild(monthNavFragment);
      return {
        container: container,
        yearElement: yearElement,
        monthElement: monthElement
      };
    }

    function buildMonths() {
      clearNode(self.monthNav);
      self.monthNav.appendChild(self.prevMonthNav);

      if (self.config.showMonths) {
        self.yearElements = [];
        self.monthElements = [];
      }

      for (var m = self.config.showMonths; m--;) {
        var month = buildMonth();
        self.yearElements.push(month.yearElement);
        self.monthElements.push(month.monthElement);
        self.monthNav.appendChild(month.container);
      }

      self.monthNav.appendChild(self.nextMonthNav);
    }

    function buildMonthNav() {
      self.monthNav = createElement("div", "flatpickr-months");
      self.yearElements = [];
      self.monthElements = [];
      self.prevMonthNav = createElement("span", "flatpickr-prev-month");
      self.prevMonthNav.innerHTML = self.config.prevArrow;
      self.nextMonthNav = createElement("span", "flatpickr-next-month");
      self.nextMonthNav.innerHTML = self.config.nextArrow;
      buildMonths();
      Object.defineProperty(self, "_hidePrevMonthArrow", {
        get: function () {
          return self.__hidePrevMonthArrow;
        },
        set: function (bool) {
          if (self.__hidePrevMonthArrow !== bool) {
            toggleClass(self.prevMonthNav, "flatpickr-disabled", bool);
            self.__hidePrevMonthArrow = bool;
          }
        }
      });
      Object.defineProperty(self, "_hideNextMonthArrow", {
        get: function () {
          return self.__hideNextMonthArrow;
        },
        set: function (bool) {
          if (self.__hideNextMonthArrow !== bool) {
            toggleClass(self.nextMonthNav, "flatpickr-disabled", bool);
            self.__hideNextMonthArrow = bool;
          }
        }
      });
      self.currentYearElement = self.yearElements[0];
      updateNavigationCurrentMonth();
      return self.monthNav;
    }

    function buildTime() {
      self.calendarContainer.classList.add("hasTime");
      if (self.config.noCalendar) self.calendarContainer.classList.add("noCalendar");
      self.timeContainer = createElement("div", "flatpickr-time");
      self.timeContainer.tabIndex = -1;
      var separator = createElement("span", "flatpickr-time-separator", ":");
      var hourInput = createNumberInput("flatpickr-hour", {
        "aria-label": self.l10n.hourAriaLabel
      });
      self.hourElement = hourInput.getElementsByTagName("input")[0];
      var minuteInput = createNumberInput("flatpickr-minute", {
        "aria-label": self.l10n.minuteAriaLabel
      });
      self.minuteElement = minuteInput.getElementsByTagName("input")[0];
      self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
      self.hourElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.time_24hr ? self.config.defaultHour : military2ampm(self.config.defaultHour));
      self.minuteElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : self.config.defaultMinute);
      self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
      self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
      self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
      self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
      self.minuteElement.setAttribute("min", "0");
      self.minuteElement.setAttribute("max", "59");
      self.timeContainer.appendChild(hourInput);
      self.timeContainer.appendChild(separator);
      self.timeContainer.appendChild(minuteInput);
      if (self.config.time_24hr) self.timeContainer.classList.add("time24hr");

      if (self.config.enableSeconds) {
        self.timeContainer.classList.add("hasSeconds");
        var secondInput = createNumberInput("flatpickr-second");
        self.secondElement = secondInput.getElementsByTagName("input")[0];
        self.secondElement.value = pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getSeconds() : self.config.defaultSeconds);
        self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
        self.secondElement.setAttribute("min", "0");
        self.secondElement.setAttribute("max", "59");
        self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
        self.timeContainer.appendChild(secondInput);
      }

      if (!self.config.time_24hr) {
        // add self.amPM if appropriate
        self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[int((self.latestSelectedDateObj ? self.hourElement.value : self.config.defaultHour) > 11)]);
        self.amPM.title = self.l10n.toggleTitle;
        self.amPM.tabIndex = -1;
        self.timeContainer.appendChild(self.amPM);
      }

      return self.timeContainer;
    }

    function buildWeekdays() {
      if (!self.weekdayContainer) self.weekdayContainer = createElement("div", "flatpickr-weekdays");else clearNode(self.weekdayContainer);

      for (var i = self.config.showMonths; i--;) {
        var container = createElement("div", "flatpickr-weekdaycontainer");
        self.weekdayContainer.appendChild(container);
      }

      updateWeekdays();
      return self.weekdayContainer;
    }

    function updateWeekdays() {
      if (!self.weekdayContainer) {
        return;
      }

      var firstDayOfWeek = self.l10n.firstDayOfWeek;
      var weekdays = self.l10n.weekdays.shorthand.slice();

      if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
        weekdays = weekdays.splice(firstDayOfWeek, weekdays.length).concat(weekdays.splice(0, firstDayOfWeek));
      }

      for (var i = self.config.showMonths; i--;) {
        self.weekdayContainer.children[i].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
      }
    }
    /* istanbul ignore next */


    function buildWeeks() {
      self.calendarContainer.classList.add("hasWeeks");
      var weekWrapper = createElement("div", "flatpickr-weekwrapper");
      weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
      var weekNumbers = createElement("div", "flatpickr-weeks");
      weekWrapper.appendChild(weekNumbers);
      return {
        weekWrapper: weekWrapper,
        weekNumbers: weekNumbers
      };
    }

    function changeMonth(value, isOffset) {
      if (isOffset === void 0) {
        isOffset = true;
      }

      var delta = isOffset ? value : value - self.currentMonth;
      if (delta < 0 && self._hidePrevMonthArrow === true || delta > 0 && self._hideNextMonthArrow === true) return;
      self.currentMonth += delta;

      if (self.currentMonth < 0 || self.currentMonth > 11) {
        self.currentYear += self.currentMonth > 11 ? 1 : -1;
        self.currentMonth = (self.currentMonth + 12) % 12;
        triggerEvent("onYearChange");
        buildMonthSwitch();
      }

      buildDays();
      triggerEvent("onMonthChange");
      updateNavigationCurrentMonth();
    }

    function clear(triggerChangeEvent, toInitial) {
      if (triggerChangeEvent === void 0) {
        triggerChangeEvent = true;
      }

      if (toInitial === void 0) {
        toInitial = true;
      }

      self.input.value = "";
      if (self.altInput !== undefined) self.altInput.value = "";
      if (self.mobileInput !== undefined) self.mobileInput.value = "";
      self.selectedDates = [];
      self.latestSelectedDateObj = undefined;

      if (toInitial === true) {
        self.currentYear = self._initialDate.getFullYear();
        self.currentMonth = self._initialDate.getMonth();
      }

      self.showTimeInput = false;

      if (self.config.enableTime === true) {
        setDefaultHours();
      }

      self.redraw();
      if (triggerChangeEvent) // triggerChangeEvent is true (default) or an Event
        triggerEvent("onChange");
    }

    function close() {
      self.isOpen = false;

      if (!self.isMobile) {
        if (self.calendarContainer !== undefined) {
          self.calendarContainer.classList.remove("open");
        }

        if (self._input !== undefined) {
          self._input.classList.remove("active");
        }
      }

      triggerEvent("onClose");
    }

    function destroy() {
      if (self.config !== undefined) triggerEvent("onDestroy");

      for (var i = self._handlers.length; i--;) {
        var h = self._handlers[i];
        h.element.removeEventListener(h.event, h.handler, h.options);
      }

      self._handlers = [];

      if (self.mobileInput) {
        if (self.mobileInput.parentNode) self.mobileInput.parentNode.removeChild(self.mobileInput);
        self.mobileInput = undefined;
      } else if (self.calendarContainer && self.calendarContainer.parentNode) {
        if (self.config.static && self.calendarContainer.parentNode) {
          var wrapper = self.calendarContainer.parentNode;
          wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);

          if (wrapper.parentNode) {
            while (wrapper.firstChild) wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);

            wrapper.parentNode.removeChild(wrapper);
          }
        } else self.calendarContainer.parentNode.removeChild(self.calendarContainer);
      }

      if (self.altInput) {
        self.input.type = "text";
        if (self.altInput.parentNode) self.altInput.parentNode.removeChild(self.altInput);
        delete self.altInput;
      }

      if (self.input) {
        self.input.type = self.input._type;
        self.input.classList.remove("flatpickr-input");
        self.input.removeAttribute("readonly");
        self.input.value = "";
      }

      ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "monthsDropdownContainer", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(function (k) {
        try {
          delete self[k];
        } catch (_) {}
      });
    }

    function isCalendarElem(elem) {
      if (self.config.appendTo && self.config.appendTo.contains(elem)) return true;
      return self.calendarContainer.contains(elem);
    }

    function documentClick(e) {
      if (self.isOpen && !self.config.inline) {
        var eventTarget_1 = getEventTarget(e);
        var isCalendarElement = isCalendarElem(eventTarget_1);
        var isInput = eventTarget_1 === self.input || eventTarget_1 === self.altInput || self.element.contains(eventTarget_1) || // web components
        // e.path is not present in all browsers. circumventing typechecks
        e.path && e.path.indexOf && (~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput));
        var lostFocus = e.type === "blur" ? isInput && e.relatedTarget && !isCalendarElem(e.relatedTarget) : !isInput && !isCalendarElement && !isCalendarElem(e.relatedTarget);
        var isIgnored = !self.config.ignoredFocusElements.some(function (elem) {
          return elem.contains(eventTarget_1);
        });

        if (lostFocus && isIgnored) {
          if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined) {
            updateTime();
          }

          self.close();

          if (self.config.mode === "range" && self.selectedDates.length === 1) {
            self.clear(false);
            self.redraw();
          }
        }
      }
    }

    function changeYear(newYear) {
      if (!newYear || self.config.minDate && newYear < self.config.minDate.getFullYear() || self.config.maxDate && newYear > self.config.maxDate.getFullYear()) return;
      var newYearNum = newYear,
          isNewYear = self.currentYear !== newYearNum;
      self.currentYear = newYearNum || self.currentYear;

      if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) {
        self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
      } else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) {
        self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
      }

      if (isNewYear) {
        self.redraw();
        triggerEvent("onYearChange");
        buildMonthSwitch();
      }
    }

    function isEnabled(date, timeless) {
      if (timeless === void 0) {
        timeless = true;
      }

      var dateToCheck = self.parseDate(date, undefined, timeless); // timeless

      if (self.config.minDate && dateToCheck && compareDates(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0 || self.config.maxDate && dateToCheck && compareDates(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0) return false;
      if (self.config.enable.length === 0 && self.config.disable.length === 0) return true;
      if (dateToCheck === undefined) return false;
      var bool = self.config.enable.length > 0,
          array = bool ? self.config.enable : self.config.disable;

      for (var i = 0, d = void 0; i < array.length; i++) {
        d = array[i];
        if (typeof d === "function" && d(dateToCheck) // disabled by function
        ) return bool;else if (d instanceof Date && dateToCheck !== undefined && d.getTime() === dateToCheck.getTime()) // disabled by date
          return bool;else if (typeof d === "string" && dateToCheck !== undefined) {
          // disabled by date string
          var parsed = self.parseDate(d, undefined, true);
          return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
        } else if ( // disabled by range
        typeof d === "object" && dateToCheck !== undefined && d.from && d.to && dateToCheck.getTime() >= d.from.getTime() && dateToCheck.getTime() <= d.to.getTime()) return bool;
      }

      return !bool;
    }

    function isInView(elem) {
      if (self.daysContainer !== undefined) return elem.className.indexOf("hidden") === -1 && self.daysContainer.contains(elem);
      return false;
    }

    function onKeyDown(e) {
      // e.key                      e.keyCode
      // "Backspace"                        8
      // "Tab"                              9
      // "Enter"                           13
      // "Escape"     (IE "Esc")           27
      // "ArrowLeft"  (IE "Left")          37
      // "ArrowUp"    (IE "Up")            38
      // "ArrowRight" (IE "Right")         39
      // "ArrowDown"  (IE "Down")          40
      // "Delete"     (IE "Del")           46
      var isInput = e.target === self._input;
      var allowInput = self.config.allowInput;
      var allowKeydown = self.isOpen && (!allowInput || !isInput);
      var allowInlineKeydown = self.config.inline && isInput && !allowInput;

      if (e.keyCode === 13 && isInput) {
        if (allowInput) {
          self.setDate(self._input.value, true, e.target === self.altInput ? self.config.altFormat : self.config.dateFormat);
          return e.target.blur();
        } else {
          self.open();
        }
      } else if (isCalendarElem(e.target) || allowKeydown || allowInlineKeydown) {
        var isTimeObj = !!self.timeContainer && self.timeContainer.contains(e.target);

        switch (e.keyCode) {
          case 13:
            if (isTimeObj) {
              e.preventDefault();
              updateTime();
              focusAndClose();
            } else selectDate(e);

            break;

          case 27:
            // escape
            e.preventDefault();
            focusAndClose();
            break;

          case 8:
          case 46:
            if (isInput && !self.config.allowInput) {
              e.preventDefault();
              self.clear();
            }

            break;

          case 37:
          case 39:
            if (!isTimeObj && !isInput) {
              e.preventDefault();

              if (self.daysContainer !== undefined && (allowInput === false || document.activeElement && isInView(document.activeElement))) {
                var delta_1 = e.keyCode === 39 ? 1 : -1;
                if (!e.ctrlKey) focusOnDay(undefined, delta_1);else {
                  e.stopPropagation();
                  changeMonth(delta_1);
                  focusOnDay(getFirstAvailableDay(1), 0);
                }
              }
            } else if (self.hourElement) self.hourElement.focus();

            break;

          case 38:
          case 40:
            e.preventDefault();
            var delta = e.keyCode === 40 ? 1 : -1;

            if (self.daysContainer && e.target.$i !== undefined || e.target === self.input || e.target === self.altInput) {
              if (e.ctrlKey) {
                e.stopPropagation();
                changeYear(self.currentYear - delta);
                focusOnDay(getFirstAvailableDay(1), 0);
              } else if (!isTimeObj) focusOnDay(undefined, delta * 7);
            } else if (e.target === self.currentYearElement) {
              changeYear(self.currentYear - delta);
            } else if (self.config.enableTime) {
              if (!isTimeObj && self.hourElement) self.hourElement.focus();
              updateTime(e);

              self._debouncedChange();
            }

            break;

          case 9:
            if (isTimeObj) {
              var elems = [self.hourElement, self.minuteElement, self.secondElement, self.amPM].concat(self.pluginElements).filter(function (x) {
                return x;
              });
              var i = elems.indexOf(e.target);

              if (i !== -1) {
                var target = elems[i + (e.shiftKey ? -1 : 1)];
                e.preventDefault();

                (target || self._input).focus();
              }
            } else if (!self.config.noCalendar && self.daysContainer && self.daysContainer.contains(e.target) && e.shiftKey) {
              e.preventDefault();

              self._input.focus();
            }

            break;
        }
      }

      if (self.amPM !== undefined && e.target === self.amPM) {
        switch (e.key) {
          case self.l10n.amPM[0].charAt(0):
          case self.l10n.amPM[0].charAt(0).toLowerCase():
            self.amPM.textContent = self.l10n.amPM[0];
            setHoursFromInputs();
            updateValue();
            break;

          case self.l10n.amPM[1].charAt(0):
          case self.l10n.amPM[1].charAt(0).toLowerCase():
            self.amPM.textContent = self.l10n.amPM[1];
            setHoursFromInputs();
            updateValue();
            break;
        }
      }

      if (isInput || isCalendarElem(e.target)) {
        triggerEvent("onKeyDown", e);
      }
    }

    function onMouseOver(elem) {
      if (self.selectedDates.length !== 1 || elem && (!elem.classList.contains("flatpickr-day") || elem.classList.contains("flatpickr-disabled"))) return;
      var hoverDate = elem ? elem.dateObj.getTime() : self.days.firstElementChild.dateObj.getTime(),
          initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(),
          rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()),
          rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
      var containsDisabled = false;
      var minRange = 0,
          maxRange = 0;

      for (var t = rangeStartDate; t < rangeEndDate; t += duration.DAY) {
        if (!isEnabled(new Date(t), true)) {
          containsDisabled = containsDisabled || t > rangeStartDate && t < rangeEndDate;
          if (t < initialDate && (!minRange || t > minRange)) minRange = t;else if (t > initialDate && (!maxRange || t < maxRange)) maxRange = t;
        }
      }

      for (var m = 0; m < self.config.showMonths; m++) {
        var month = self.daysContainer.children[m];

        var _loop_1 = function (i, l) {
          var dayElem = month.children[i],
              date = dayElem.dateObj;
          var timestamp = date.getTime();
          var outOfRange = minRange > 0 && timestamp < minRange || maxRange > 0 && timestamp > maxRange;

          if (outOfRange) {
            dayElem.classList.add("notAllowed");
            ["inRange", "startRange", "endRange"].forEach(function (c) {
              dayElem.classList.remove(c);
            });
            return "continue";
          } else if (containsDisabled && !outOfRange) return "continue";

          ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
            dayElem.classList.remove(c);
          });

          if (elem !== undefined) {
            elem.classList.add(hoverDate <= self.selectedDates[0].getTime() ? "startRange" : "endRange");
            if (initialDate < hoverDate && timestamp === initialDate) dayElem.classList.add("startRange");else if (initialDate > hoverDate && timestamp === initialDate) dayElem.classList.add("endRange");
            if (timestamp >= minRange && (maxRange === 0 || timestamp <= maxRange) && isBetween(timestamp, initialDate, hoverDate)) dayElem.classList.add("inRange");
          }
        };

        for (var i = 0, l = month.children.length; i < l; i++) {
          _loop_1(i, l);
        }
      }
    }

    function onResize() {
      if (self.isOpen && !self.config.static && !self.config.inline) positionCalendar();
    }

    function setDefaultTime() {
      self.setDate(self.config.minDate !== undefined ? new Date(self.config.minDate.getTime()) : new Date(), true);
      setDefaultHours();
      updateValue();
    }

    function open(e, positionElement) {
      if (positionElement === void 0) {
        positionElement = self._positionElement;
      }

      if (self.isMobile === true) {
        if (e) {
          e.preventDefault();
          e.target && e.target.blur();
        }

        if (self.mobileInput !== undefined) {
          self.mobileInput.focus();
          self.mobileInput.click();
        }

        triggerEvent("onOpen");
        return;
      }

      if (self._input.disabled || self.config.inline) return;
      var wasOpen = self.isOpen;
      self.isOpen = true;

      if (!wasOpen) {
        self.calendarContainer.classList.add("open");

        self._input.classList.add("active");

        triggerEvent("onOpen");
        positionCalendar(positionElement);
      }

      if (self.config.enableTime === true && self.config.noCalendar === true) {
        if (self.selectedDates.length === 0) {
          setDefaultTime();
        }

        if (self.config.allowInput === false && (e === undefined || !self.timeContainer.contains(e.relatedTarget))) {
          setTimeout(function () {
            return self.hourElement.select();
          }, 50);
        }
      }
    }

    function minMaxDateSetter(type) {
      return function (date) {
        var dateObj = self.config["_" + type + "Date"] = self.parseDate(date, self.config.dateFormat);
        var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];

        if (dateObj !== undefined) {
          self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] = dateObj.getHours() > 0 || dateObj.getMinutes() > 0 || dateObj.getSeconds() > 0;
        }

        if (self.selectedDates) {
          self.selectedDates = self.selectedDates.filter(function (d) {
            return isEnabled(d);
          });
          if (!self.selectedDates.length && type === "min") setHoursFromDate(dateObj);
          updateValue();
        }

        if (self.daysContainer) {
          redraw();
          if (dateObj !== undefined) self.currentYearElement[type] = dateObj.getFullYear().toString();else self.currentYearElement.removeAttribute(type);
          self.currentYearElement.disabled = !!inverseDateObj && dateObj !== undefined && inverseDateObj.getFullYear() === dateObj.getFullYear();
        }
      };
    }

    function parseConfig() {
      var boolOpts = ["wrap", "weekNumbers", "allowInput", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"];

      var userConfig = __assign({}, instanceConfig, JSON.parse(JSON.stringify(element.dataset || {})));

      var formats = {};
      self.config.parseDate = userConfig.parseDate;
      self.config.formatDate = userConfig.formatDate;
      Object.defineProperty(self.config, "enable", {
        get: function () {
          return self.config._enable;
        },
        set: function (dates) {
          self.config._enable = parseDateRules(dates);
        }
      });
      Object.defineProperty(self.config, "disable", {
        get: function () {
          return self.config._disable;
        },
        set: function (dates) {
          self.config._disable = parseDateRules(dates);
        }
      });
      var timeMode = userConfig.mode === "time";

      if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
        var defaultDateFormat = flatpickr.defaultConfig.dateFormat || defaults.dateFormat;
        formats.dateFormat = userConfig.noCalendar || timeMode ? "H:i" + (userConfig.enableSeconds ? ":S" : "") : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
      }

      if (userConfig.altInput && (userConfig.enableTime || timeMode) && !userConfig.altFormat) {
        var defaultAltFormat = flatpickr.defaultConfig.altFormat || defaults.altFormat;
        formats.altFormat = userConfig.noCalendar || timeMode ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K") : defaultAltFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
      }

      if (!userConfig.altInputClass) {
        self.config.altInputClass = self.input.className + " " + self.config.altInputClass;
      }

      Object.defineProperty(self.config, "minDate", {
        get: function () {
          return self.config._minDate;
        },
        set: minMaxDateSetter("min")
      });
      Object.defineProperty(self.config, "maxDate", {
        get: function () {
          return self.config._maxDate;
        },
        set: minMaxDateSetter("max")
      });

      var minMaxTimeSetter = function (type) {
        return function (val) {
          self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
        };
      };

      Object.defineProperty(self.config, "minTime", {
        get: function () {
          return self.config._minTime;
        },
        set: minMaxTimeSetter("min")
      });
      Object.defineProperty(self.config, "maxTime", {
        get: function () {
          return self.config._maxTime;
        },
        set: minMaxTimeSetter("max")
      });

      if (userConfig.mode === "time") {
        self.config.noCalendar = true;
        self.config.enableTime = true;
      }

      Object.assign(self.config, formats, userConfig);

      for (var i = 0; i < boolOpts.length; i++) self.config[boolOpts[i]] = self.config[boolOpts[i]] === true || self.config[boolOpts[i]] === "true";

      HOOKS.filter(function (hook) {
        return self.config[hook] !== undefined;
      }).forEach(function (hook) {
        self.config[hook] = arrayify(self.config[hook] || []).map(bindToInstance);
      });
      self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable.length && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

      for (var i = 0; i < self.config.plugins.length; i++) {
        var pluginConf = self.config.plugins[i](self) || {};

        for (var key in pluginConf) {
          if (HOOKS.indexOf(key) > -1) {
            self.config[key] = arrayify(pluginConf[key]).map(bindToInstance).concat(self.config[key]);
          } else if (typeof userConfig[key] === "undefined") self.config[key] = pluginConf[key];
        }
      }

      triggerEvent("onParseConfig");
    }

    function setupLocale() {
      if (typeof self.config.locale !== "object" && typeof flatpickr.l10ns[self.config.locale] === "undefined") self.config.errorHandler(new Error("flatpickr: invalid locale " + self.config.locale));
      self.l10n = __assign({}, flatpickr.l10ns["default"], typeof self.config.locale === "object" ? self.config.locale : self.config.locale !== "default" ? flatpickr.l10ns[self.config.locale] : undefined);
      tokenRegex.K = "(" + self.l10n.amPM[0] + "|" + self.l10n.amPM[1] + "|" + self.l10n.amPM[0].toLowerCase() + "|" + self.l10n.amPM[1].toLowerCase() + ")";

      var userConfig = __assign({}, instanceConfig, JSON.parse(JSON.stringify(element.dataset || {})));

      if (userConfig.time_24hr === undefined && flatpickr.defaultConfig.time_24hr === undefined) {
        self.config.time_24hr = self.l10n.time_24hr;
      }

      self.formatDate = createDateFormatter(self);
      self.parseDate = createDateParser({
        config: self.config,
        l10n: self.l10n
      });
    }

    function positionCalendar(customPositionElement) {
      if (self.calendarContainer === undefined) return;
      triggerEvent("onPreCalendarPosition");
      var positionElement = customPositionElement || self._positionElement;
      var calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, function (acc, child) {
        return acc + child.offsetHeight;
      }, 0),
          calendarWidth = self.calendarContainer.offsetWidth,
          configPos = self.config.position.split(" "),
          configPosVertical = configPos[0],
          configPosHorizontal = configPos.length > 1 ? configPos[1] : null,
          inputBounds = positionElement.getBoundingClientRect(),
          distanceFromBottom = window.innerHeight - inputBounds.bottom,
          showOnTop = configPosVertical === "above" || configPosVertical !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;
      var top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
      toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
      toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
      if (self.config.inline) return;
      var left = window.pageXOffset + inputBounds.left - (configPosHorizontal != null && configPosHorizontal === "center" ? (calendarWidth - inputBounds.width) / 2 : 0);
      var right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);
      var rightMost = left + calendarWidth > window.document.body.offsetWidth;
      var centerMost = right + calendarWidth > window.document.body.offsetWidth;
      toggleClass(self.calendarContainer, "rightMost", rightMost);
      if (self.config.static) return;
      self.calendarContainer.style.top = top + "px";

      if (!rightMost) {
        self.calendarContainer.style.left = left + "px";
        self.calendarContainer.style.right = "auto";
      } else if (!centerMost) {
        self.calendarContainer.style.left = "auto";
        self.calendarContainer.style.right = right + "px";
      } else {
        var doc = document.styleSheets[0]; // some testing environments don't have css support

        if (doc === undefined) return;
        var bodyWidth = window.document.body.offsetWidth;
        var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
        var centerBefore = ".flatpickr-calendar.centerMost:before";
        var centerAfter = ".flatpickr-calendar.centerMost:after";
        var centerIndex = doc.cssRules.length;
        var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
        toggleClass(self.calendarContainer, "rightMost", false);
        toggleClass(self.calendarContainer, "centerMost", true);
        doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
        self.calendarContainer.style.left = centerLeft + "px";
        self.calendarContainer.style.right = "auto";
      }
    }

    function redraw() {
      if (self.config.noCalendar || self.isMobile) return;
      updateNavigationCurrentMonth();
      buildDays();
    }

    function focusAndClose() {
      self._input.focus();

      if (window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== undefined) {
        // hack - bugs in the way IE handles focus keeps the calendar open
        setTimeout(self.close, 0);
      } else {
        self.close();
      }
    }

    function selectDate(e) {
      e.preventDefault();
      e.stopPropagation();

      var isSelectable = function (day) {
        return day.classList && day.classList.contains("flatpickr-day") && !day.classList.contains("flatpickr-disabled") && !day.classList.contains("notAllowed");
      };

      var t = findParent(e.target, isSelectable);
      if (t === undefined) return;
      var target = t;
      var selectedDate = self.latestSelectedDateObj = new Date(target.dateObj.getTime());
      var shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth || selectedDate.getMonth() > self.currentMonth + self.config.showMonths - 1) && self.config.mode !== "range";
      self.selectedDateElem = target;
      if (self.config.mode === "single") self.selectedDates = [selectedDate];else if (self.config.mode === "multiple") {
        var selectedIndex = isDateSelected(selectedDate);
        if (selectedIndex) self.selectedDates.splice(parseInt(selectedIndex), 1);else self.selectedDates.push(selectedDate);
      } else if (self.config.mode === "range") {
        if (self.selectedDates.length === 2) {
          self.clear(false, false);
        }

        self.latestSelectedDateObj = selectedDate;
        self.selectedDates.push(selectedDate); // unless selecting same date twice, sort ascendingly

        if (compareDates(selectedDate, self.selectedDates[0], true) !== 0) self.selectedDates.sort(function (a, b) {
          return a.getTime() - b.getTime();
        });
      }
      setHoursFromInputs();

      if (shouldChangeMonth) {
        var isNewYear = self.currentYear !== selectedDate.getFullYear();
        self.currentYear = selectedDate.getFullYear();
        self.currentMonth = selectedDate.getMonth();

        if (isNewYear) {
          triggerEvent("onYearChange");
          buildMonthSwitch();
        }

        triggerEvent("onMonthChange");
      }

      updateNavigationCurrentMonth();
      buildDays();
      updateValue();
      if (self.config.enableTime) setTimeout(function () {
        return self.showTimeInput = true;
      }, 50); // maintain focus

      if (!shouldChangeMonth && self.config.mode !== "range" && self.config.showMonths === 1) focusOnDayElem(target);else if (self.selectedDateElem !== undefined && self.hourElement === undefined) {
        self.selectedDateElem && self.selectedDateElem.focus();
      }
      if (self.hourElement !== undefined) self.hourElement !== undefined && self.hourElement.focus();

      if (self.config.closeOnSelect) {
        var single = self.config.mode === "single" && !self.config.enableTime;
        var range = self.config.mode === "range" && self.selectedDates.length === 2 && !self.config.enableTime;

        if (single || range) {
          focusAndClose();
        }
      }

      triggerChange();
    }

    var CALLBACKS = {
      locale: [setupLocale, updateWeekdays],
      showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
      minDate: [jumpToDate],
      maxDate: [jumpToDate]
    };

    function set(option, value) {
      if (option !== null && typeof option === "object") {
        Object.assign(self.config, option);

        for (var key in option) {
          if (CALLBACKS[key] !== undefined) CALLBACKS[key].forEach(function (x) {
            return x();
          });
        }
      } else {
        self.config[option] = value;
        if (CALLBACKS[option] !== undefined) CALLBACKS[option].forEach(function (x) {
          return x();
        });else if (HOOKS.indexOf(option) > -1) self.config[option] = arrayify(value);
      }

      self.redraw();
      updateValue(false);
    }

    function setSelectedDate(inputDate, format) {
      var dates = [];
      if (inputDate instanceof Array) dates = inputDate.map(function (d) {
        return self.parseDate(d, format);
      });else if (inputDate instanceof Date || typeof inputDate === "number") dates = [self.parseDate(inputDate, format)];else if (typeof inputDate === "string") {
        switch (self.config.mode) {
          case "single":
          case "time":
            dates = [self.parseDate(inputDate, format)];
            break;

          case "multiple":
            dates = inputDate.split(self.config.conjunction).map(function (date) {
              return self.parseDate(date, format);
            });
            break;

          case "range":
            dates = inputDate.split(self.l10n.rangeSeparator).map(function (date) {
              return self.parseDate(date, format);
            });
            break;
        }
      } else self.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
      self.selectedDates = dates.filter(function (d) {
        return d instanceof Date && isEnabled(d, false);
      });
      if (self.config.mode === "range") self.selectedDates.sort(function (a, b) {
        return a.getTime() - b.getTime();
      });
    }

    function setDate(date, triggerChange, format) {
      if (triggerChange === void 0) {
        triggerChange = false;
      }

      if (format === void 0) {
        format = self.config.dateFormat;
      }

      if (date !== 0 && !date || date instanceof Array && date.length === 0) return self.clear(triggerChange);
      setSelectedDate(date, format);
      self.showTimeInput = self.selectedDates.length > 0;
      self.latestSelectedDateObj = self.selectedDates[self.selectedDates.length - 1];
      self.redraw();
      jumpToDate();
      setHoursFromDate();

      if (self.selectedDates.length === 0) {
        self.clear(false);
      }

      updateValue(triggerChange);
      if (triggerChange) triggerEvent("onChange");
    }

    function parseDateRules(arr) {
      return arr.slice().map(function (rule) {
        if (typeof rule === "string" || typeof rule === "number" || rule instanceof Date) {
          return self.parseDate(rule, undefined, true);
        } else if (rule && typeof rule === "object" && rule.from && rule.to) return {
          from: self.parseDate(rule.from, undefined),
          to: self.parseDate(rule.to, undefined)
        };

        return rule;
      }).filter(function (x) {
        return x;
      }); // remove falsy values
    }

    function setupDates() {
      self.selectedDates = [];
      self.now = self.parseDate(self.config.now) || new Date(); // Workaround IE11 setting placeholder as the input's value

      var preloadedDate = self.config.defaultDate || ((self.input.nodeName === "INPUT" || self.input.nodeName === "TEXTAREA") && self.input.placeholder && self.input.value === self.input.placeholder ? null : self.input.value);
      if (preloadedDate) setSelectedDate(preloadedDate, self.config.dateFormat);
      self._initialDate = self.selectedDates.length > 0 ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now.getTime() ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now.getTime() ? self.config.maxDate : self.now;
      self.currentYear = self._initialDate.getFullYear();
      self.currentMonth = self._initialDate.getMonth();
      if (self.selectedDates.length > 0) self.latestSelectedDateObj = self.selectedDates[0];
      if (self.config.minTime !== undefined) self.config.minTime = self.parseDate(self.config.minTime, "H:i");
      if (self.config.maxTime !== undefined) self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
      self.minDateHasTime = !!self.config.minDate && (self.config.minDate.getHours() > 0 || self.config.minDate.getMinutes() > 0 || self.config.minDate.getSeconds() > 0);
      self.maxDateHasTime = !!self.config.maxDate && (self.config.maxDate.getHours() > 0 || self.config.maxDate.getMinutes() > 0 || self.config.maxDate.getSeconds() > 0);
      Object.defineProperty(self, "showTimeInput", {
        get: function () {
          return self._showTimeInput;
        },
        set: function (bool) {
          self._showTimeInput = bool;
          if (self.calendarContainer) toggleClass(self.calendarContainer, "showTimeInput", bool);
          self.isOpen && positionCalendar();
        }
      });
    }

    function setupInputs() {
      self.input = self.config.wrap ? element.querySelector("[data-input]") : element;
      /* istanbul ignore next */

      if (!self.input) {
        self.config.errorHandler(new Error("Invalid input element specified"));
        return;
      } // hack: store previous type to restore it after destroy()


      self.input._type = self.input.type;
      self.input.type = "text";
      self.input.classList.add("flatpickr-input");
      self._input = self.input;

      if (self.config.altInput) {
        // replicate self.element
        self.altInput = createElement(self.input.nodeName, self.config.altInputClass);
        self._input = self.altInput;
        self.altInput.placeholder = self.input.placeholder;
        self.altInput.disabled = self.input.disabled;
        self.altInput.required = self.input.required;
        self.altInput.tabIndex = self.input.tabIndex;
        self.altInput.type = "text";
        self.input.setAttribute("type", "hidden");
        if (!self.config.static && self.input.parentNode) self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
      }

      if (!self.config.allowInput) self._input.setAttribute("readonly", "readonly");
      self._positionElement = self.config.positionElement || self._input;
    }

    function setupMobile() {
      var inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";
      self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
      self.mobileInput.step = self.input.getAttribute("step") || "any";
      self.mobileInput.tabIndex = 1;
      self.mobileInput.type = inputType;
      self.mobileInput.disabled = self.input.disabled;
      self.mobileInput.required = self.input.required;
      self.mobileInput.placeholder = self.input.placeholder;
      self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";

      if (self.selectedDates.length > 0) {
        self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
      }

      if (self.config.minDate) self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
      if (self.config.maxDate) self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
      self.input.type = "hidden";
      if (self.altInput !== undefined) self.altInput.type = "hidden";

      try {
        if (self.input.parentNode) self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
      } catch (_a) {}

      bind(self.mobileInput, "change", function (e) {
        self.setDate(e.target.value, false, self.mobileFormatStr);
        triggerEvent("onChange");
        triggerEvent("onClose");
      });
    }

    function toggle(e) {
      if (self.isOpen === true) return self.close();
      self.open(e);
    }

    function triggerEvent(event, data) {
      // If the instance has been destroyed already, all hooks have been removed
      if (self.config === undefined) return;
      var hooks = self.config[event];

      if (hooks !== undefined && hooks.length > 0) {
        for (var i = 0; hooks[i] && i < hooks.length; i++) hooks[i](self.selectedDates, self.input.value, self, data);
      }

      if (event === "onChange") {
        self.input.dispatchEvent(createEvent("change")); // many front-end frameworks bind to the input event

        self.input.dispatchEvent(createEvent("input"));
      }
    }

    function createEvent(name) {
      var e = document.createEvent("Event");
      e.initEvent(name, true, true);
      return e;
    }

    function isDateSelected(date) {
      for (var i = 0; i < self.selectedDates.length; i++) {
        if (compareDates(self.selectedDates[i], date) === 0) return "" + i;
      }

      return false;
    }

    function isDateInRange(date) {
      if (self.config.mode !== "range" || self.selectedDates.length < 2) return false;
      return compareDates(date, self.selectedDates[0]) >= 0 && compareDates(date, self.selectedDates[1]) <= 0;
    }

    function updateNavigationCurrentMonth() {
      if (self.config.noCalendar || self.isMobile || !self.monthNav) return;
      self.yearElements.forEach(function (yearElement, i) {
        var d = new Date(self.currentYear, self.currentMonth, 1);
        d.setMonth(self.currentMonth + i);

        if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") {
          self.monthElements[i].textContent = monthToStr(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
        } else {
          self.monthsDropdownContainer.value = d.getMonth().toString();
        }

        yearElement.value = d.getFullYear().toString();
      });
      self._hidePrevMonthArrow = self.config.minDate !== undefined && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());
      self._hideNextMonthArrow = self.config.maxDate !== undefined && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
    }

    function getDateStr(format) {
      return self.selectedDates.map(function (dObj) {
        return self.formatDate(dObj, format);
      }).filter(function (d, i, arr) {
        return self.config.mode !== "range" || self.config.enableTime || arr.indexOf(d) === i;
      }).join(self.config.mode !== "range" ? self.config.conjunction : self.l10n.rangeSeparator);
    }
    /**
     * Updates the values of inputs associated with the calendar
     */


    function updateValue(triggerChange) {
      if (triggerChange === void 0) {
        triggerChange = true;
      }

      if (self.mobileInput !== undefined && self.mobileFormatStr) {
        self.mobileInput.value = self.latestSelectedDateObj !== undefined ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr) : "";
      }

      self.input.value = getDateStr(self.config.dateFormat);

      if (self.altInput !== undefined) {
        self.altInput.value = getDateStr(self.config.altFormat);
      }

      if (triggerChange !== false) triggerEvent("onValueUpdate");
    }

    function onMonthNavClick(e) {
      var isPrevMonth = self.prevMonthNav.contains(e.target);
      var isNextMonth = self.nextMonthNav.contains(e.target);

      if (isPrevMonth || isNextMonth) {
        changeMonth(isPrevMonth ? -1 : 1);
      } else if (self.yearElements.indexOf(e.target) >= 0) {
        e.target.select();
      } else if (e.target.classList.contains("arrowUp")) {
        self.changeYear(self.currentYear + 1);
      } else if (e.target.classList.contains("arrowDown")) {
        self.changeYear(self.currentYear - 1);
      }
    }

    function timeWrapper(e) {
      e.preventDefault();
      var isKeyDown = e.type === "keydown",
          input = e.target;

      if (self.amPM !== undefined && e.target === self.amPM) {
        self.amPM.textContent = self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
      }

      var min = parseFloat(input.getAttribute("min")),
          max = parseFloat(input.getAttribute("max")),
          step = parseFloat(input.getAttribute("step")),
          curValue = parseInt(input.value, 10),
          delta = e.delta || (isKeyDown ? e.which === 38 ? 1 : -1 : 0);
      var newValue = curValue + step * delta;

      if (typeof input.value !== "undefined" && input.value.length === 2) {
        var isHourElem = input === self.hourElement,
            isMinuteElem = input === self.minuteElement;

        if (newValue < min) {
          newValue = max + newValue + int(!isHourElem) + (int(isHourElem) && int(!self.amPM));
          if (isMinuteElem) incrementNumInput(undefined, -1, self.hourElement);
        } else if (newValue > max) {
          newValue = input === self.hourElement ? newValue - max - int(!self.amPM) : min;
          if (isMinuteElem) incrementNumInput(undefined, 1, self.hourElement);
        }

        if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) {
          self.amPM.textContent = self.l10n.amPM[int(self.amPM.textContent === self.l10n.amPM[0])];
        }

        input.value = pad(newValue);
      }
    }

    init();
    return self;
  }
  /* istanbul ignore next */


  function _flatpickr(nodeList, config) {
    // static list
    var nodes = Array.prototype.slice.call(nodeList).filter(function (x) {
      return x instanceof HTMLElement;
    });
    var instances = [];

    for (var i = 0; i < nodes.length; i++) {
      var node = nodes[i];

      try {
        if (node.getAttribute("data-fp-omit") !== null) continue;

        if (node._flatpickr !== undefined) {
          node._flatpickr.destroy();

          node._flatpickr = undefined;
        }

        node._flatpickr = FlatpickrInstance(node, config || {});
        instances.push(node._flatpickr);
      } catch (e) {
        console.error(e);
      }
    }

    return instances.length === 1 ? instances[0] : instances;
  }
  /* istanbul ignore next */


  if (typeof HTMLElement !== "undefined" && typeof HTMLCollection !== "undefined" && typeof NodeList !== "undefined") {
    // browser env
    HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
      return _flatpickr(this, config);
    };

    HTMLElement.prototype.flatpickr = function (config) {
      return _flatpickr([this], config);
    };
  }
  /* istanbul ignore next */


  var flatpickr = function (selector, config) {
    if (typeof selector === "string") {
      return _flatpickr(window.document.querySelectorAll(selector), config);
    } else if (selector instanceof Node) {
      return _flatpickr([selector], config);
    } else {
      return _flatpickr(selector, config);
    }
  };
  /* istanbul ignore next */


  flatpickr.defaultConfig = {};
  flatpickr.l10ns = {
    en: __assign({}, english),
    "default": __assign({}, english)
  };

  flatpickr.localize = function (l10n) {
    flatpickr.l10ns["default"] = __assign({}, flatpickr.l10ns["default"], l10n);
  };

  flatpickr.setDefaults = function (config) {
    flatpickr.defaultConfig = __assign({}, flatpickr.defaultConfig, config);
  };

  flatpickr.parseDate = createDateParser({});
  flatpickr.formatDate = createDateFormatter({});
  flatpickr.compareDates = compareDates;
  /* istanbul ignore next */

  if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
    jQuery.fn.flatpickr = function (config) {
      return _flatpickr(this, config);
    };
  } // eslint-disable-next-line @typescript-eslint/camelcase


  Date.prototype.fp_incr = function (days) {
    return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
  };

  if (typeof window !== "undefined") {
    window.flatpickr = flatpickr;
  }

  return flatpickr;
});
});

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".flatpickr-calendar{background:rgba(0,0,0,0);opacity:0;display:none;text-align:center;visibility:hidden;padding:0;-webkit-animation:none;animation:none;direction:ltr;border:0;font-size:14px;line-height:24px;border-radius:5px;position:absolute;width:307.875px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-touch-action:manipulation;touch-action:manipulation;background:#fff;-webkit-box-shadow:1px 0 0 #e6e6e6,-1px 0 0 #e6e6e6,0 1px 0 #e6e6e6,0 -1px 0 #e6e6e6,0 3px 13px rgba(0,0,0,.08);box-shadow:1px 0 0 #e6e6e6,-1px 0 0 #e6e6e6,0 1px 0 #e6e6e6,0 -1px 0 #e6e6e6,0 3px 13px rgba(0,0,0,.08)}.flatpickr-calendar.inline,.flatpickr-calendar.open{opacity:1;max-height:640px;visibility:visible}.flatpickr-calendar.open{display:inline-block;z-index:99999}.flatpickr-calendar.animate.open{-webkit-animation:fpFadeInDown .3s cubic-bezier(.23,1,.32,1);animation:fpFadeInDown .3s cubic-bezier(.23,1,.32,1)}.flatpickr-calendar.inline{display:block;position:relative;top:2px}.flatpickr-calendar.static{position:absolute;top:calc(100% + 2px)}.flatpickr-calendar.static.open{z-index:999;display:block}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+1) .flatpickr-day.inRange:nth-child(7n+7){-webkit-box-shadow:none!important;box-shadow:none!important}.flatpickr-calendar.multiMonth .flatpickr-days .dayContainer:nth-child(n+2) .flatpickr-day.inRange:nth-child(7n+1){-webkit-box-shadow:-2px 0 0 #e6e6e6,5px 0 0 #e6e6e6;box-shadow:-2px 0 0 #e6e6e6,5px 0 0 #e6e6e6}.flatpickr-calendar .hasTime .dayContainer,.flatpickr-calendar .hasWeeks .dayContainer{border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.flatpickr-calendar .hasWeeks .dayContainer{border-left:0}.flatpickr-calendar.showTimeInput.hasTime .flatpickr-time{height:40px;border-top:1px solid #e6e6e6}.flatpickr-calendar.noCalendar.hasTime .flatpickr-time{height:auto}.flatpickr-calendar:after,.flatpickr-calendar:before{position:absolute;display:block;pointer-events:none;border:solid rgba(0,0,0,0);content:\"\";height:0;width:0;left:22px}.flatpickr-calendar.rightMost:after,.flatpickr-calendar.rightMost:before{left:auto;right:22px}.flatpickr-calendar:before{border-width:5px;margin:0 -5px}.flatpickr-calendar:after{border-width:4px;margin:0 -4px}.flatpickr-calendar.arrowTop:after,.flatpickr-calendar.arrowTop:before{bottom:100%}.flatpickr-calendar.arrowTop:before{border-bottom-color:#e6e6e6}.flatpickr-calendar.arrowTop:after{border-bottom-color:#fff}.flatpickr-calendar.arrowBottom:after,.flatpickr-calendar.arrowBottom:before{top:100%}.flatpickr-calendar.arrowBottom:before{border-top-color:#e6e6e6}.flatpickr-calendar.arrowBottom:after{border-top-color:#fff}.flatpickr-calendar:focus{outline:0}.flatpickr-wrapper{position:relative;display:inline-block}.flatpickr-months{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.flatpickr-months .flatpickr-month{background:rgba(0,0,0,0);color:rgba(0,0,0,.9);fill:rgba(0,0,0,.9);height:34px;line-height:1;text-align:center;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow:hidden;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.flatpickr-months .flatpickr-next-month,.flatpickr-months .flatpickr-prev-month{text-decoration:none;cursor:pointer;position:absolute;top:0;height:34px;padding:10px;z-index:3;color:rgba(0,0,0,.9);fill:rgba(0,0,0,.9)}.flatpickr-months .flatpickr-next-month.flatpickr-disabled,.flatpickr-months .flatpickr-prev-month.flatpickr-disabled{display:none}.flatpickr-months .flatpickr-next-month i,.flatpickr-months .flatpickr-prev-month i{position:relative}.flatpickr-months .flatpickr-next-month.flatpickr-prev-month,.flatpickr-months .flatpickr-prev-month.flatpickr-prev-month{left:0}.flatpickr-months .flatpickr-next-month.flatpickr-next-month,.flatpickr-months .flatpickr-prev-month.flatpickr-next-month{right:0}.flatpickr-months .flatpickr-next-month:hover,.flatpickr-months .flatpickr-prev-month:hover{color:#959ea9}.flatpickr-months .flatpickr-next-month:hover svg,.flatpickr-months .flatpickr-prev-month:hover svg{fill:#f64747}.flatpickr-months .flatpickr-next-month svg,.flatpickr-months .flatpickr-prev-month svg{width:14px;height:14px}.flatpickr-months .flatpickr-next-month svg path,.flatpickr-months .flatpickr-prev-month svg path{-webkit-transition:fill .1s;transition:fill .1s;fill:inherit}.numInputWrapper{position:relative;height:auto}.numInputWrapper input,.numInputWrapper span{display:inline-block}.numInputWrapper input{width:100%}.numInputWrapper input::-ms-clear{display:none}.numInputWrapper input::-webkit-inner-spin-button,.numInputWrapper input::-webkit-outer-spin-button{margin:0;-webkit-appearance:none}.numInputWrapper span{position:absolute;right:0;width:14px;padding:0 4px 0 2px;height:50%;line-height:50%;opacity:0;cursor:pointer;border:1px solid rgba(57,57,57,.15);-webkit-box-sizing:border-box;box-sizing:border-box}.numInputWrapper span:hover{background:rgba(0,0,0,.1)}.numInputWrapper span:active{background:rgba(0,0,0,.2)}.numInputWrapper span:after{display:block;content:\"\";position:absolute}.numInputWrapper span.arrowUp{top:0;border-bottom:0}.numInputWrapper span.arrowUp:after{border-left:4px solid rgba(0,0,0,0);border-right:4px solid rgba(0,0,0,0);border-bottom:4px solid rgba(57,57,57,.6);top:26%}.numInputWrapper span.arrowDown{top:50%}.numInputWrapper span.arrowDown:after{border-left:4px solid rgba(0,0,0,0);border-right:4px solid rgba(0,0,0,0);border-top:4px solid rgba(57,57,57,.6);top:40%}.numInputWrapper span svg{width:inherit;height:auto}.numInputWrapper span svg path{fill:rgba(0,0,0,.5)}.numInputWrapper:hover{background:rgba(0,0,0,.05)}.numInputWrapper:hover span{opacity:1}.flatpickr-current-month{font-size:135%;line-height:inherit;font-weight:300;color:inherit;position:absolute;width:75%;left:12.5%;padding:7.48px 0 0;line-height:1;height:34px;display:inline-block;text-align:center;-webkit-transform:translateZ(0);transform:translateZ(0)}.flatpickr-current-month span.cur-month{font-family:inherit;font-weight:700;color:inherit;display:inline-block;margin-left:.5ch;padding:0}.flatpickr-current-month span.cur-month:hover{background:rgba(0,0,0,.05)}.flatpickr-current-month .numInputWrapper{width:6ch;width:7ch\\0;display:inline-block}.flatpickr-current-month .numInputWrapper span.arrowUp:after{border-bottom-color:rgba(0,0,0,.9)}.flatpickr-current-month .numInputWrapper span.arrowDown:after{border-top-color:rgba(0,0,0,.9)}.flatpickr-current-month input.cur-year{background:rgba(0,0,0,0);-webkit-box-sizing:border-box;box-sizing:border-box;color:inherit;cursor:text;padding:0 0 0 .5ch;margin:0;display:inline-block;font-size:inherit;font-family:inherit;font-weight:300;line-height:inherit;height:auto;border:0;border-radius:0;vertical-align:initial;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.flatpickr-current-month input.cur-year:focus{outline:0}.flatpickr-current-month input.cur-year[disabled],.flatpickr-current-month input.cur-year[disabled]:hover{font-size:100%;color:rgba(0,0,0,.5);background:rgba(0,0,0,0);pointer-events:none}.flatpickr-current-month .flatpickr-monthDropdown-months{appearance:menulist;background:rgba(0,0,0,0);border:none;border-radius:0;box-sizing:border-box;color:inherit;cursor:pointer;font-size:inherit;font-family:inherit;font-weight:300;height:auto;line-height:inherit;margin:-1px 0 0;outline:none;padding:0 0 0 .5ch;position:relative;vertical-align:initial;-webkit-box-sizing:border-box;-webkit-appearance:menulist;-moz-appearance:menulist;width:auto}.flatpickr-current-month .flatpickr-monthDropdown-months:active,.flatpickr-current-month .flatpickr-monthDropdown-months:focus{outline:none}.flatpickr-current-month .flatpickr-monthDropdown-months:hover{background:rgba(0,0,0,.05)}.flatpickr-current-month .flatpickr-monthDropdown-months .flatpickr-monthDropdown-month{background-color:rgba(0,0,0,0);outline:none;padding:0}.flatpickr-weekdays{background:rgba(0,0,0,0);text-align:center;overflow:hidden;width:100%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:28px}.flatpickr-weekdays,.flatpickr-weekdays .flatpickr-weekdaycontainer{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.flatpickr-weekdays .flatpickr-weekdaycontainer,span.flatpickr-weekday{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}span.flatpickr-weekday{cursor:default;font-size:90%;background:rgba(0,0,0,0);color:rgba(0,0,0,.54);line-height:1;margin:0;text-align:center;display:block;font-weight:bolder}.dayContainer,.flatpickr-weeks{padding:1px 0 0}.flatpickr-days{position:relative;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;width:307.875px}.flatpickr-days:focus{outline:0}.dayContainer{padding:0;outline:0;text-align:left;width:307.875px;min-width:307.875px;max-width:307.875px;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-wrap:wrap;-ms-flex-pack:justify;-webkit-justify-content:space-around;justify-content:space-around;-webkit-transform:translateZ(0);transform:translateZ(0);opacity:1}.dayContainer+.dayContainer{-webkit-box-shadow:-1px 0 0 #e6e6e6;box-shadow:-1px 0 0 #e6e6e6}.flatpickr-day{background:none;border:1px solid rgba(0,0,0,0);border-radius:150px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#393939;cursor:pointer;font-weight:400;width:14.2857143%;-webkit-flex-basis:14.2857143%;-ms-flex-preferred-size:14.2857143%;flex-basis:14.2857143%;max-width:39px;height:39px;line-height:39px;margin:0;display:inline-block;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;text-align:center}.flatpickr-day.inRange,.flatpickr-day.nextMonthDay.inRange,.flatpickr-day.nextMonthDay.today.inRange,.flatpickr-day.nextMonthDay:focus,.flatpickr-day.nextMonthDay:hover,.flatpickr-day.prevMonthDay.inRange,.flatpickr-day.prevMonthDay.today.inRange,.flatpickr-day.prevMonthDay:focus,.flatpickr-day.prevMonthDay:hover,.flatpickr-day.today.inRange,.flatpickr-day:focus,.flatpickr-day:hover{cursor:pointer;outline:0;background:#e6e6e6;border-color:#e6e6e6}.flatpickr-day.today{border-color:#959ea9}.flatpickr-day.today:focus,.flatpickr-day.today:hover{border-color:#959ea9;background:#959ea9;color:#fff}.flatpickr-day.endRange,.flatpickr-day.endRange.inRange,.flatpickr-day.endRange.nextMonthDay,.flatpickr-day.endRange.prevMonthDay,.flatpickr-day.endRange:focus,.flatpickr-day.endRange:hover,.flatpickr-day.selected,.flatpickr-day.selected.inRange,.flatpickr-day.selected.nextMonthDay,.flatpickr-day.selected.prevMonthDay,.flatpickr-day.selected:focus,.flatpickr-day.selected:hover,.flatpickr-day.startRange,.flatpickr-day.startRange.inRange,.flatpickr-day.startRange.nextMonthDay,.flatpickr-day.startRange.prevMonthDay,.flatpickr-day.startRange:focus,.flatpickr-day.startRange:hover{background:#569ff7;-webkit-box-shadow:none;box-shadow:none;color:#fff;border-color:#569ff7}.flatpickr-day.endRange.startRange,.flatpickr-day.selected.startRange,.flatpickr-day.startRange.startRange{border-radius:50px 0 0 50px}.flatpickr-day.endRange.endRange,.flatpickr-day.selected.endRange,.flatpickr-day.startRange.endRange{border-radius:0 50px 50px 0}.flatpickr-day.endRange.startRange+.endRange:not(:nth-child(7n+1)),.flatpickr-day.selected.startRange+.endRange:not(:nth-child(7n+1)),.flatpickr-day.startRange.startRange+.endRange:not(:nth-child(7n+1)){-webkit-box-shadow:-10px 0 0 #569ff7;box-shadow:-10px 0 0 #569ff7}.flatpickr-day.endRange.startRange.endRange,.flatpickr-day.selected.startRange.endRange,.flatpickr-day.startRange.startRange.endRange{border-radius:50px}.flatpickr-day.inRange{border-radius:0;-webkit-box-shadow:-5px 0 0 #e6e6e6,5px 0 0 #e6e6e6;box-shadow:-5px 0 0 #e6e6e6,5px 0 0 #e6e6e6}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover,.flatpickr-day.nextMonthDay,.flatpickr-day.notAllowed,.flatpickr-day.notAllowed.nextMonthDay,.flatpickr-day.notAllowed.prevMonthDay,.flatpickr-day.prevMonthDay{color:rgba(57,57,57,.3);background:rgba(0,0,0,0);border-color:rgba(0,0,0,0);cursor:default}.flatpickr-day.flatpickr-disabled,.flatpickr-day.flatpickr-disabled:hover{cursor:not-allowed;color:rgba(57,57,57,.1)}.flatpickr-day.week.selected{border-radius:0;-webkit-box-shadow:-5px 0 0 #569ff7,5px 0 0 #569ff7;box-shadow:-5px 0 0 #569ff7,5px 0 0 #569ff7}.flatpickr-day.hidden{visibility:hidden}.rangeMode .flatpickr-day{margin-top:1px}.flatpickr-weekwrapper{float:left}.flatpickr-weekwrapper .flatpickr-weeks{padding:0 12px;-webkit-box-shadow:1px 0 0 #e6e6e6;box-shadow:1px 0 0 #e6e6e6}.flatpickr-weekwrapper .flatpickr-weekday{float:none;width:100%;line-height:28px}.flatpickr-weekwrapper span.flatpickr-day,.flatpickr-weekwrapper span.flatpickr-day:hover{display:block;width:100%;max-width:none;color:rgba(57,57,57,.3);background:rgba(0,0,0,0);cursor:default;border:none}.flatpickr-innerContainer{display:block;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;overflow:hidden}.flatpickr-innerContainer,.flatpickr-rContainer{-webkit-box-sizing:border-box;box-sizing:border-box}.flatpickr-rContainer{display:inline-block;padding:0}.flatpickr-time{text-align:center;outline:0;display:block;height:0;line-height:40px;max-height:40px;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.flatpickr-time:after{content:\"\";display:table;clear:both}.flatpickr-time .numInputWrapper{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;width:40%;height:40px;float:left}.flatpickr-time .numInputWrapper span.arrowUp:after{border-bottom-color:#393939}.flatpickr-time .numInputWrapper span.arrowDown:after{border-top-color:#393939}.flatpickr-time.hasSeconds .numInputWrapper{width:26%}.flatpickr-time.time24hr .numInputWrapper{width:49%}.flatpickr-time input{background:rgba(0,0,0,0);-webkit-box-shadow:none;box-shadow:none;border:0;border-radius:0;text-align:center;margin:0;padding:0;height:inherit;line-height:inherit;color:#393939;font-size:14px;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield}.flatpickr-time input.flatpickr-hour{font-weight:700}.flatpickr-time input.flatpickr-minute,.flatpickr-time input.flatpickr-second{font-weight:400}.flatpickr-time input:focus{outline:0;border:0}.flatpickr-time .flatpickr-am-pm,.flatpickr-time .flatpickr-time-separator{height:inherit;float:left;line-height:inherit;color:#393939;font-weight:700;width:2%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center}.flatpickr-time .flatpickr-am-pm{outline:0;width:18%;cursor:pointer;text-align:center;font-weight:400}.flatpickr-time .flatpickr-am-pm:focus,.flatpickr-time .flatpickr-am-pm:hover,.flatpickr-time input:focus,.flatpickr-time input:hover{background:#eee}.flatpickr-input[readonly]{cursor:pointer}@-webkit-keyframes fpFadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}@keyframes fpFadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:1;-webkit-transform:translateZ(0);transform:translateZ(0)}}";
styleInject(css);

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var DatePicker =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits(DatePicker, _React$PureComponent);

  function DatePicker(props) {
    var _this;

    classCallCheck(this, DatePicker);

    _this = possibleConstructorReturn(this, getPrototypeOf(DatePicker).call(this, props));

    defineProperty(assertThisInitialized(_this), "flatpickrInstance", void 0);

    defineProperty(assertThisInitialized(_this), "flatpickrRef", React.createRef());

    defineProperty(assertThisInitialized(_this), "state", {
      enableTime: _this.props.variableType === 'DateTime',
      errorMessage: '',
      shouldShowError: false
    });

    var self = assertThisInitialized(_this);

    self.getFlatpickrOptions = _this.getFlatpickrOptions.bind(assertThisInitialized(_this));
    self.onFlatpickrChange = _this.onFlatpickrChange.bind(assertThisInitialized(_this));
    self.onFlatpickrClose = _this.onFlatpickrClose.bind(assertThisInitialized(_this));
    return _this;
  }

  createClass(DatePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // start new Flatpickr instance
      this.flatpickrInstance = flatpickr(this.flatpickrRef.current, this.getFlatpickrOptions());
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      if (prevProps !== this.props) {
        // Pick up new props by re-instantiating Flatpickr after ref's DOM node has updated.
        // The visible flatpickr `input` (via React <input /> below) will not
        // update its props after instantiation. Using `react-flatpickr doesn't really help, either.
        setTimeout(function () {
          // destroy old flatpickr instance
          _this2.flatpickrInstance.destroy(); // start a new flatpickr instance


          flatpickr([_this2.flatpickrRef.current], _this2.getFlatpickrOptions());
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // destroy flatpickr instance
      this.flatpickrInstance.destroy();
    }
  }, {
    key: "getFlatpickrOptions",
    value: function getFlatpickrOptions() {
      var _this$props = this.props,
          savedValue = _this$props.savedValue,
          variableType = _this$props.variableType;
      var enableTime = this.state.enableTime; // this is so change and blur are fired in the correct order for validation
      // for different flatpickr input types

      var changeFunction = variableType === 'DateTime' ? {
        onChange: this.onFlatpickrChange
      } : {
        onValueUpdate: this.onFlatpickrChange
      };
      return _objectSpread$2({
        dateFormat: enableTime ? 'F j, Y h:i K' : 'F j, Y',
        defaultDate: savedValue ? new Date(parseInt(savedValue)) : '',
        // allow time selection 00:00, AM/PM
        enableTime: enableTime,
        onClose: this.onFlatpickrClose
      }, changeFunction);
    } // We don't use this for OpenLawForm onChangeFunction
    // This is only for the user's onValidate callback.

  }, {
    key: "onFlatpickrChange",
    value: function onFlatpickrChange(selectedDates) {
      var _onChangeValidation = onChangeValidation(selectedDates.length ? selectedDates[0].getTime().toString() : '', this.props, this.state),
          errorMessage = _onChangeValidation.errorData.errorMessage,
          shouldShowError = _onChangeValidation.shouldShowError;

      this.setState({
        errorMessage: errorMessage,
        shouldShowError: shouldShowError
      });
    } // essentially onBlur

  }, {
    key: "onFlatpickrClose",
    value: function onFlatpickrClose(selectedDates) {
      var _this$props2 = this.props,
          name = _this$props2.name,
          onChange = _this$props2.onChange;
      var epochUTCString = selectedDates.length ? selectedDates[0].getTime().toString() : undefined;
      var onValidateEpochUTCString = selectedDates.length ? selectedDates[0].getTime().toString() : '';

      var _onBlurValidation = onBlurValidation(onValidateEpochUTCString, this.props, this.state),
          errorData = _onBlurValidation.errorData,
          shouldShowError = _onBlurValidation.shouldShowError;

      this.setState({
        errorMessage: errorData.errorMessage,
        shouldShowError: shouldShowError
      }, function () {
        onChange(name, epochUTCString, errorData);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          cleanName = _this$props3.cleanName,
          description = _this$props3.description,
          inputExtraText = _this$props3.inputExtraText,
          inputProps = _this$props3.inputProps,
          variableType = _this$props3.variableType;
      var _this$state = this.state,
          errorMessage = _this$state.errorMessage,
          shouldShowError = _this$state.shouldShowError;
      var inputPropsClassName = inputProps && inputProps.className ? " ".concat(inputProps.className) : '';
      return React.createElement("div", {
        className: singleSpaceString("".concat(CSS_CLASS_NAMES.field, " ").concat(CSS_CLASS_NAMES.fieldTypeToLower(variableType), "\n      "))
      }, React.createElement("label", {
        className: "".concat(CSS_CLASS_NAMES.fieldLabel)
      }, 
      React.createElement("span", {
        className: CSS_CLASS_NAMES.fieldLabelIos
      }, description), React.createElement("input", _extends_1({
        placeholder: description
      }, inputProps, {
        className: singleSpaceString("".concat(CSS_CLASS_NAMES.fieldInput, " ").concat(cleanName, " ").concat(inputPropsClassName)),
        ref: this.flatpickrRef
      })), React.createElement(FieldError, {
        cleanName: cleanName,
        errorMessage: errorMessage,
        shouldShowError: shouldShowError
      })), inputExtraText && React.createElement(ExtraText, {
        text: inputExtraText
      }));
    }
  }]);

  return DatePicker;
}(React.PureComponent);

defineProperty(DatePicker, "propTypes", process.env.NODE_ENV === 'production' ? null : {
  cleanName: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  getValidity: function getValidity() {
    return (typeof bpfrpt_proptype_ValidityFuncType === "function" ? bpfrpt_proptype_ValidityFuncType.isRequired ? bpfrpt_proptype_ValidityFuncType.isRequired : bpfrpt_proptype_ValidityFuncType : propTypes.shape(bpfrpt_proptype_ValidityFuncType).isRequired).apply(this, arguments);
  },
  inputExtraText: function inputExtraText() {
    return (typeof bpfrpt_proptype_FieldExtraTextType === "function" ? bpfrpt_proptype_FieldExtraTextType : propTypes.shape(bpfrpt_proptype_FieldExtraTextType)).apply(this, arguments);
  },
  inputProps: function inputProps() {
    return (typeof bpfrpt_proptype_FieldPropsValueType === "function" ? bpfrpt_proptype_FieldPropsValueType : propTypes.shape(bpfrpt_proptype_FieldPropsValueType)).apply(this, arguments);
  },
  name: propTypes.string.isRequired,
  onChange: function onChange() {
    return (typeof bpfrpt_proptype_OnChangeFuncType === "function" ? bpfrpt_proptype_OnChangeFuncType.isRequired ? bpfrpt_proptype_OnChangeFuncType.isRequired : bpfrpt_proptype_OnChangeFuncType : propTypes.shape(bpfrpt_proptype_OnChangeFuncType).isRequired).apply(this, arguments);
  },
  savedValue: propTypes.string.isRequired,
  variableType: function variableType() {
    return (typeof bpfrpt_proptype_FieldEnumType === "function" ? bpfrpt_proptype_FieldEnumType.isRequired ? bpfrpt_proptype_FieldEnumType.isRequired : bpfrpt_proptype_FieldEnumType : propTypes.shape(bpfrpt_proptype_FieldEnumType).isRequired).apply(this, arguments);
  }
});

var ReactCrop = createCommonjsModule(function (module, exports) {
(function webpackUniversalModuleDefinition(root, factory) {
  module.exports = factory(React__default, propTypes);
})(typeof self !== 'undefined' ? self : commonjsGlobal, function (__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            /******/
            configurable: false,

            /******/
            enumerable: true,

            /******/
            get: getter
            /******/

          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 0);
      /******/
    }(
    /************************************************************************/

    /******/
    [
    /* 0 */

    /***/
    function (module, exports, __webpack_require__) {

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.containCrop = exports.makeAspectCrop = exports.getPixelCrop = exports.Component = exports.default = undefined;

      var _createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      var _slicedToArray = function () {
        function sliceIterator(arr, i) {
          var _arr = [];
          var _n = true;
          var _d = false;
          var _e = undefined;

          try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);

              if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"]) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }

          return _arr;
        }

        return function (arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      }();
      /* globals document, window */


      var _react = __webpack_require__(1);

      var _react2 = _interopRequireDefault(_react);

      var _propTypes = __webpack_require__(2);

      var _propTypes2 = _interopRequireDefault(_propTypes);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }

      function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }

          return arr2;
        } else {
          return Array.from(arr);
        }
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      } // Feature detection
      // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Improving_scrolling_performance_with_passive_listeners


      var passiveSupported = false;

      try {
        window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
          get: function get() {
            passiveSupported = true;
            return true;
          }
        }));
      } catch (err) {} // eslint-disable-line no-empty


      var EMPTY_GIF = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';

      function getClientPos(e) {
        var pageX = void 0;
        var pageY = void 0;

        if (e.touches) {
          var _e$touches = _slicedToArray(e.touches, 1);

          var _e$touches$ = _e$touches[0];
          pageX = _e$touches$.pageX;
          pageY = _e$touches$.pageY;
        } else {
          pageX = e.pageX;
          pageY = e.pageY;
        }

        return {
          x: pageX,
          y: pageY
        };
      }

      function clamp(num, min, max) {
        return Math.min(Math.max(num, min), max);
      }

      function isCropValid(crop) {
        return crop && crop.width && crop.height && !isNaN(crop.width) && !isNaN(crop.height);
      }

      function inverseOrd(ord) {
        var inversedOrd = void 0;
        if (ord === 'n') inversedOrd = 's';else if (ord === 'ne') inversedOrd = 'sw';else if (ord === 'e') inversedOrd = 'w';else if (ord === 'se') inversedOrd = 'nw';else if (ord === 's') inversedOrd = 'n';else if (ord === 'sw') inversedOrd = 'ne';else if (ord === 'w') inversedOrd = 'e';else if (ord === 'nw') inversedOrd = 'se';
        return inversedOrd;
      }

      function makeAspectCrop(crop, imageAspect) {
        if (isNaN(crop.aspect) || isNaN(imageAspect)) {
          console.warn('`crop.aspect` and `imageAspect` need to be numbers in order to make an aspect crop', crop);
          return crop;
        }

        var completeCrop = _extends({
          x: 0,
          y: 0
        }, crop);

        if (crop.width) {
          completeCrop.height = crop.width / crop.aspect * imageAspect;
        }

        if (crop.height) {
          completeCrop.width = (completeCrop.height || crop.height) * (crop.aspect / imageAspect);
        }

        if (crop.y + (completeCrop.height || crop.height) > 100) {
          completeCrop.height = 100 - crop.y;
          completeCrop.width = completeCrop.height * crop.aspect / imageAspect;
        }

        if (crop.x + (completeCrop.width || crop.width) > 100) {
          completeCrop.width = 100 - crop.x;
          completeCrop.height = completeCrop.width / crop.aspect * imageAspect;
        }

        return completeCrop;
      }

      function isAspectInvalid(crop, width, height) {
        if (!crop.width && crop.height || crop.width && !crop.height) {
          return true;
        }

        if (crop.width && crop.height && Math.round(height * (crop.height / 100) * crop.aspect) !== Math.round(width * (crop.width / 100))) {
          return true;
        }

        return false;
      }

      function resolveCrop(crop, image) {
        if (crop && crop.aspect && isAspectInvalid(crop, image.naturalWidth, image.naturalHeight)) {
          return makeAspectCrop(crop, image.naturalWidth / image.naturalHeight);
        }

        return crop;
      }

      function getPixelCrop(image, percentCrop) {
        var useNaturalImageDimensions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        if (!image || !percentCrop) {
          return null;
        }

        var imageWidth = useNaturalImageDimensions ? image.naturalWidth : image.width;
        var imageHeight = useNaturalImageDimensions ? image.naturalHeight : image.height;
        var x = Math.round(imageWidth * (percentCrop.x / 100));
        var y = Math.round(imageHeight * (percentCrop.y / 100));
        var width = Math.round(imageWidth * (percentCrop.width / 100));
        var height = Math.round(imageHeight * (percentCrop.height / 100));
        return {
          x: x,
          y: y,
          // Clamp width and height so rounding doesn't cause the crop to exceed bounds.
          width: clamp(width, 0, imageWidth - x),
          height: clamp(height, 0, imageHeight - y)
        };
      }

      function containCrop(prevCrop, crop, imageAspect) {
        var contained = _extends({}, crop); // Fixes issue where crop can be dragged to the left when resizing with SW ord
        // even though it's hit the bottom of the image.


        if (crop.aspect && prevCrop.x > crop.x && crop.height + crop.y >= 100) {
          contained.x = prevCrop.x;
        } // Don't let the crop grow on the opposite side when hitting an x image boundary.


        var cropXAdjusted = false;

        if (contained.x + contained.width > 100) {
          contained.width = crop.width + (100 - (crop.x + crop.width));
          contained.x = crop.x + (100 - (crop.x + contained.width));
          cropXAdjusted = true;
        } else if (contained.x < 0) {
          contained.width = crop.x + crop.width;
          contained.x = 0;
          cropXAdjusted = true;
        }

        if (cropXAdjusted && crop.aspect) {
          // Adjust height to the resized width to maintain aspect.
          contained.height = contained.width / crop.aspect * imageAspect; // If sizing in up direction we need to pin Y at the point it
          // would be at the boundary.

          if (prevCrop.y > contained.y) {
            contained.y = crop.y + (crop.height - contained.height);
          }
        } // Don't let the crop grow on the opposite side when hitting a y image boundary.


        var cropYAdjusted = false;

        if (contained.y + contained.height > 100) {
          contained.height = crop.height + (100 - (crop.y + crop.height));
          contained.y = crop.y + (100 - (crop.y + contained.height));
          cropYAdjusted = true;
        } else if (contained.y < 0) {
          contained.height = crop.y + crop.height;
          contained.y = 0;
          cropYAdjusted = true;
        }

        if (cropYAdjusted && crop.aspect) {
          // Adjust width to the resized height to maintain aspect.
          contained.width = contained.height * crop.aspect / imageAspect; // If sizing in up direction we need to pin X at the point it
          // would be at the boundary.

          if (contained.x < crop.x) {
            contained.x = crop.x + (crop.width - contained.width);
          }
        }

        return contained;
      }

      var ReactCrop = function (_PureComponent) {
        _inherits(ReactCrop, _PureComponent);

        function ReactCrop() {
          var _ref;

          var _temp, _this, _ret;

          _classCallCheck(this, ReactCrop);

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReactCrop.__proto__ || Object.getPrototypeOf(ReactCrop)).call.apply(_ref, [this].concat(args))), _this), _this.window = window, _this.document = document, _this.state = {}, _this.onCropMouseTouchDown = function (e) {
            var _this$props = _this.props,
                crop = _this$props.crop,
                disabled = _this$props.disabled;

            if (disabled) {
              return;
            }

            e.preventDefault(); // Stop drag selection.

            var clientPos = getClientPos(e); // Focus for detecting keypress.

            _this.componentRef.focus({
              preventScroll: true
            });

            var ord = e.target.dataset.ord;
            var xInversed = ord === 'nw' || ord === 'w' || ord === 'sw';
            var yInversed = ord === 'nw' || ord === 'n' || ord === 'ne';
            var cropOffset = void 0;

            if (crop.aspect) {
              cropOffset = _this.getElementOffset(_this.cropSelectRef);
            }

            _this.evData = {
              clientStartX: clientPos.x,
              clientStartY: clientPos.y,
              cropStartWidth: crop.width,
              cropStartHeight: crop.height,
              cropStartX: xInversed ? crop.x + crop.width : crop.x,
              cropStartY: yInversed ? crop.y + crop.height : crop.y,
              xInversed: xInversed,
              yInversed: yInversed,
              xCrossOver: xInversed,
              yCrossOver: yInversed,
              startXCrossOver: xInversed,
              startYCrossOver: yInversed,
              isResize: e.target.dataset.ord,
              ord: ord,
              cropOffset: cropOffset
            };
            _this.mouseDownOnCrop = true;

            _this.setState({
              cropIsActive: true
            });
          }, _this.onComponentMouseTouchDown = function (e) {
            var _this$props2 = _this.props,
                crop = _this$props2.crop,
                disabled = _this$props2.disabled,
                locked = _this$props2.locked,
                keepSelection = _this$props2.keepSelection,
                onChange = _this$props2.onChange,
                useNaturalImageDimensions = _this$props2.useNaturalImageDimensions;

            if (e.target !== _this.imageRef) {
              return;
            }

            if (disabled || locked || keepSelection && isCropValid(crop)) {
              return;
            }

            e.preventDefault(); // Stop drag selection.

            var clientPos = getClientPos(e); // Focus for detecting keypress.

            _this.componentRef.focus({
              preventScroll: true
            });

            var imageOffset = _this.getElementOffset(_this.imageRef);

            var xPc = (clientPos.x - imageOffset.left) / _this.imageRef.width * 100;
            var yPc = (clientPos.y - imageOffset.top) / _this.imageRef.height * 100;
            var nextCrop = {
              aspect: crop ? crop.aspect : undefined,
              x: xPc,
              y: yPc,
              width: 0,
              height: 0
            };
            _this.evData = {
              clientStartX: clientPos.x,
              clientStartY: clientPos.y,
              cropStartWidth: nextCrop.width,
              cropStartHeight: nextCrop.height,
              cropStartX: nextCrop.x,
              cropStartY: nextCrop.y,
              xInversed: false,
              yInversed: false,
              xCrossOver: false,
              yCrossOver: false,
              startXCrossOver: false,
              startYCrossOver: false,
              isResize: true,
              ord: 'nw'
            };
            _this.mouseDownOnCrop = true;
            onChange(nextCrop, getPixelCrop(_this.imageRef, nextCrop, useNaturalImageDimensions));

            _this.setState({
              cropIsActive: true
            });
          }, _this.onDocMouseTouchMove = function (e) {
            var _this$props3 = _this.props,
                crop = _this$props3.crop,
                disabled = _this$props3.disabled,
                onChange = _this$props3.onChange,
                onDragStart = _this$props3.onDragStart;

            if (disabled) {
              return;
            }

            if (!_this.mouseDownOnCrop) {
              return;
            }

            e.preventDefault(); // Stop drag selection.

            if (!_this.dragStarted) {
              _this.dragStarted = true;
              onDragStart();
            }

            var _this2 = _this,
                evData = _this2.evData;
            var clientPos = getClientPos(e);

            if (evData.isResize && crop.aspect && evData.cropOffset) {
              clientPos.y = _this.straightenYPath(clientPos.x);
            }

            var xDiffPx = clientPos.x - evData.clientStartX;
            evData.xDiffPc = xDiffPx / _this.imageRef.width * 100;
            var yDiffPx = clientPos.y - evData.clientStartY;
            evData.yDiffPc = yDiffPx / _this.imageRef.height * 100;
            var nextCrop = void 0;

            if (evData.isResize) {
              nextCrop = _this.resizeCrop();
            } else {
              nextCrop = _this.dragCrop();
            }

            if (nextCrop !== crop) {
              onChange(nextCrop, getPixelCrop(_this.imageRef, nextCrop));
            }
          }, _this.onComponentKeyDown = function (e) {
            var _this$props4 = _this.props,
                crop = _this$props4.crop,
                disabled = _this$props4.disabled,
                onChange = _this$props4.onChange,
                onComplete = _this$props4.onComplete,
                useNaturalImageDimensions = _this$props4.useNaturalImageDimensions;

            if (disabled) {
              return;
            }

            var keyCode = e.which;
            var nudged = false;

            if (!isCropValid(crop)) {
              return;
            }

            var nextCrop = _this.makeNewCrop();

            if (keyCode === ReactCrop.arrowKey.left) {
              nextCrop.x -= ReactCrop.nudgeStep;
              nudged = true;
            } else if (keyCode === ReactCrop.arrowKey.right) {
              nextCrop.x += ReactCrop.nudgeStep;
              nudged = true;
            } else if (keyCode === ReactCrop.arrowKey.up) {
              nextCrop.y -= ReactCrop.nudgeStep;
              nudged = true;
            } else if (keyCode === ReactCrop.arrowKey.down) {
              nextCrop.y += ReactCrop.nudgeStep;
              nudged = true;
            }

            if (nudged) {
              e.preventDefault(); // Stop drag selection.

              nextCrop.x = clamp(nextCrop.x, 0, 100 - nextCrop.width);
              nextCrop.y = clamp(nextCrop.y, 0, 100 - nextCrop.height);
              onChange(nextCrop, getPixelCrop(_this.imageRef, nextCrop, useNaturalImageDimensions));
              onComplete(nextCrop, getPixelCrop(_this.imageRef, nextCrop, useNaturalImageDimensions));
            }
          }, _this.onDocMouseTouchEnd = function () {
            var _this$props5 = _this.props,
                crop = _this$props5.crop,
                disabled = _this$props5.disabled,
                onComplete = _this$props5.onComplete,
                onDragEnd = _this$props5.onDragEnd,
                useNaturalImageDimensions = _this$props5.useNaturalImageDimensions;

            if (disabled) {
              return;
            }

            if (_this.mouseDownOnCrop) {
              _this.mouseDownOnCrop = false;
              _this.dragStarted = false;
              onDragEnd();
              onComplete(crop, getPixelCrop(_this.imageRef, crop, useNaturalImageDimensions));

              _this.setState({
                cropIsActive: false
              });
            }
          }, _temp), _possibleConstructorReturn(_this, _ret);
        }

        _createClass(ReactCrop, [{
          key: 'componentDidMount',
          value: function componentDidMount() {
            var options = passiveSupported ? {
              passive: false
            } : false;
            this.document.addEventListener('mousemove', this.onDocMouseTouchMove, options);
            this.document.addEventListener('touchmove', this.onDocMouseTouchMove, options);
            this.document.addEventListener('mouseup', this.onDocMouseTouchEnd, options);
            this.document.addEventListener('touchend', this.onDocMouseTouchEnd, options);
            this.document.addEventListener('touchcancel', this.onDocMouseTouchEnd, options);

            if (this.imageRef.complete || this.imageRef.readyState) {
              if (this.imageRef.naturalWidth === 0) {
                // Broken load on iOS, PR #51
                // https://css-tricks.com/snippets/jquery/fixing-load-in-ie-for-cached-images/
                // http://stackoverflow.com/questions/821516/browser-independent-way-to-detect-when-image-has-been-loaded
                var src = this.imageRef.src;
                this.imageRef.src = EMPTY_GIF;
                this.imageRef.src = src;
              } else {
                this.onImageLoad(this.imageRef);
              }
            }
          }
        }, {
          key: 'componentWillUnmount',
          value: function componentWillUnmount() {
            this.document.removeEventListener('mousemove', this.onDocMouseTouchMove);
            this.document.removeEventListener('touchmove', this.onDocMouseTouchMove);
            this.document.removeEventListener('mouseup', this.onDocMouseTouchEnd);
            this.document.removeEventListener('touchend', this.onDocMouseTouchEnd);
            this.document.removeEventListener('touchcancel', this.onDocMouseTouchEnd);
          }
        }, {
          key: 'onImageLoad',
          value: function onImageLoad(image) {
            var _props = this.props,
                crop = _props.crop,
                onComplete = _props.onComplete,
                onChange = _props.onChange,
                onImageLoaded = _props.onImageLoaded,
                useNaturalImageDimensions = _props.useNaturalImageDimensions;
            var resolvedCrop = resolveCrop(crop, image); // Return false from onImageLoaded if you set the crop with setState in there as otherwise the subsequent
            // onChange + onComplete will not have your updated crop.

            var res = onImageLoaded(image, getPixelCrop(image, resolvedCrop, useNaturalImageDimensions));

            if (res !== false && resolvedCrop !== crop) {
              onChange(resolvedCrop, getPixelCrop(image, resolvedCrop, useNaturalImageDimensions));
              onComplete(resolvedCrop, getPixelCrop(image, resolvedCrop, useNaturalImageDimensions));
            }
          }
        }, {
          key: 'getElementOffset',
          value: function getElementOffset(el) {
            var rect = el.getBoundingClientRect();
            var docEl = this.document.documentElement;
            var rectTop = rect.top + this.window.pageYOffset - docEl.clientTop;
            var rectLeft = rect.left + this.window.pageXOffset - docEl.clientLeft;
            return {
              top: rectTop,
              left: rectLeft
            };
          }
        }, {
          key: 'getCropStyle',
          value: function getCropStyle() {
            var crop = this.props.crop;
            return {
              top: crop.y + '%',
              left: crop.x + '%',
              width: crop.width + '%',
              height: crop.height + '%'
            };
          }
        }, {
          key: 'getNewSize',
          value: function getNewSize() {
            var _props2 = this.props,
                crop = _props2.crop,
                minWidth = _props2.minWidth,
                maxWidth = _props2.maxWidth,
                minHeight = _props2.minHeight,
                maxHeight = _props2.maxHeight;
            var evData = this.evData;
            var imageAspect = this.imageRef.width / this.imageRef.height; // New width.

            var newWidth = evData.cropStartWidth + evData.xDiffPc;

            if (evData.xCrossOver) {
              newWidth = Math.abs(newWidth);
            }

            newWidth = clamp(newWidth, minWidth, maxWidth); // New height.

            var newHeight = void 0;

            if (crop.aspect) {
              newHeight = newWidth / crop.aspect * imageAspect;
            } else {
              newHeight = evData.cropStartHeight + evData.yDiffPc;
            }

            if (evData.yCrossOver) {
              // Cap if polarity is inversed and the height fills the y space.
              newHeight = Math.min(Math.abs(newHeight), evData.cropStartY);
            }

            newHeight = clamp(newHeight, minHeight, maxHeight);

            if (crop.aspect) {
              newWidth = clamp(newHeight * crop.aspect / imageAspect, 0, 100);
            }

            return {
              width: newWidth,
              height: newHeight
            };
          }
        }, {
          key: 'dragCrop',
          value: function dragCrop() {
            var nextCrop = this.makeNewCrop();
            var evData = this.evData;
            nextCrop.x = clamp(evData.cropStartX + evData.xDiffPc, 0, 100 - nextCrop.width);
            nextCrop.y = clamp(evData.cropStartY + evData.yDiffPc, 0, 100 - nextCrop.height);
            return nextCrop;
          }
        }, {
          key: 'resizeCrop',
          value: function resizeCrop() {
            var nextCrop = this.makeNewCrop();
            var evData = this.evData;
            var _props3 = this.props,
                crop = _props3.crop,
                minWidth = _props3.minWidth,
                minHeight = _props3.minHeight;
            var ord = evData.ord;
            var imageAspect = this.imageRef.width / this.imageRef.height; // On the inverse change the diff so it's the same and
            // the same algo applies.

            if (evData.xInversed) {
              evData.xDiffPc -= evData.cropStartWidth * 2;
            }

            if (evData.yInversed) {
              evData.yDiffPc -= evData.cropStartHeight * 2;
            } // New size.


            var newSize = this.getNewSize(); // Adjust x/y to give illusion of 'staticness' as width/height is increased
            // when polarity is inversed.

            var newX = evData.cropStartX;
            var newY = evData.cropStartY;

            if (evData.xCrossOver) {
              newX = nextCrop.x + (nextCrop.width - newSize.width);
            }

            if (evData.yCrossOver) {
              // This not only removes the little "shake" when inverting at a diagonal, but for some
              // reason y was way off at fast speeds moving sw->ne with fixed aspect only, I couldn't
              // figure out why.
              if (evData.lastYCrossover === false) {
                newY = nextCrop.y - newSize.height;
              } else {
                newY = nextCrop.y + (nextCrop.height - newSize.height);
              }
            }

            var containedCrop = containCrop(this.props.crop, {
              x: newX,
              y: newY,
              width: newSize.width,
              height: newSize.height,
              aspect: nextCrop.aspect
            }, imageAspect); // Apply x/y/width/height changes depending on ordinate (fixed aspect always applies both).

            if (nextCrop.aspect || ReactCrop.xyOrds.indexOf(ord) > -1) {
              nextCrop.x = containedCrop.x;
              nextCrop.y = containedCrop.y;
              nextCrop.width = containedCrop.width;
              nextCrop.height = containedCrop.height;
            } else if (ReactCrop.xOrds.indexOf(ord) > -1) {
              nextCrop.x = containedCrop.x;
              nextCrop.width = containedCrop.width;
            } else if (ReactCrop.yOrds.indexOf(ord) > -1) {
              nextCrop.y = containedCrop.y;
              nextCrop.height = containedCrop.height;
            }

            evData.lastYCrossover = evData.yCrossOver;
            this.crossOverCheck(); // Ensure new dimensions aren't less than min dimensions.

            if (minWidth && nextCrop.width < minWidth) {
              return crop;
            }

            if (minHeight && nextCrop.height < minHeight) {
              return crop;
            }

            return nextCrop;
          }
        }, {
          key: 'straightenYPath',
          value: function straightenYPath(clientX) {
            var evData = this.evData;
            var ord = evData.ord;
            var cropOffset = evData.cropOffset;
            var cropStartWidth = evData.cropStartWidth / 100 * this.imageRef.width;
            var cropStartHeight = evData.cropStartHeight / 100 * this.imageRef.height;
            var k = void 0;
            var d = void 0;

            if (ord === 'nw' || ord === 'se') {
              k = cropStartHeight / cropStartWidth;
              d = cropOffset.top - cropOffset.left * k;
            } else {
              k = -cropStartHeight / cropStartWidth;
              d = cropOffset.top + (cropStartHeight - cropOffset.left * k);
            }

            return k * clientX + d;
          }
        }, {
          key: 'createCropSelection',
          value: function createCropSelection() {
            var _this3 = this;

            var _props4 = this.props,
                disabled = _props4.disabled,
                locked = _props4.locked,
                renderSelectionAddon = _props4.renderSelectionAddon;
            var style = this.getCropStyle();
            return _react2.default.createElement('div', {
              ref: function ref(n) {
                _this3.cropSelectRef = n;
              },
              style: style,
              className: 'ReactCrop__crop-selection',
              onMouseDown: this.onCropMouseTouchDown,
              onTouchStart: this.onCropMouseTouchDown,
              role: 'presentation'
            }, !disabled && !locked && _react2.default.createElement('div', {
              className: 'ReactCrop__drag-elements'
            }, _react2.default.createElement('div', {
              className: 'ReactCrop__drag-bar ord-n',
              'data-ord': 'n'
            }), _react2.default.createElement('div', {
              className: 'ReactCrop__drag-bar ord-e',
              'data-ord': 'e'
            }), _react2.default.createElement('div', {
              className: 'ReactCrop__drag-bar ord-s',
              'data-ord': 's'
            }), _react2.default.createElement('div', {
              className: 'ReactCrop__drag-bar ord-w',
              'data-ord': 'w'
            }), _react2.default.createElement('div', {
              className: 'ReactCrop__drag-handle ord-nw',
              'data-ord': 'nw'
            }), _react2.default.createElement('div', {
              className: 'ReactCrop__drag-handle ord-n',
              'data-ord': 'n'
            }), _react2.default.createElement('div', {
              className: 'ReactCrop__drag-handle ord-ne',
              'data-ord': 'ne'
            }), _react2.default.createElement('div', {
              className: 'ReactCrop__drag-handle ord-e',
              'data-ord': 'e'
            }), _react2.default.createElement('div', {
              className: 'ReactCrop__drag-handle ord-se',
              'data-ord': 'se'
            }), _react2.default.createElement('div', {
              className: 'ReactCrop__drag-handle ord-s',
              'data-ord': 's'
            }), _react2.default.createElement('div', {
              className: 'ReactCrop__drag-handle ord-sw',
              'data-ord': 'sw'
            }), _react2.default.createElement('div', {
              className: 'ReactCrop__drag-handle ord-w',
              'data-ord': 'w'
            })), renderSelectionAddon && renderSelectionAddon(this.state));
          }
        }, {
          key: 'makeNewCrop',
          value: function makeNewCrop() {
            return _extends({}, ReactCrop.defaultCrop, this.props.crop);
          }
        }, {
          key: 'crossOverCheck',
          value: function crossOverCheck() {
            var evData = this.evData;

            if (!evData.xCrossOver && -Math.abs(evData.cropStartWidth) - evData.xDiffPc >= 0 || evData.xCrossOver && -Math.abs(evData.cropStartWidth) - evData.xDiffPc <= 0) {
              evData.xCrossOver = !evData.xCrossOver;
            }

            if (!evData.yCrossOver && -Math.abs(evData.cropStartHeight) - evData.yDiffPc >= 0 || evData.yCrossOver && -Math.abs(evData.cropStartHeight) - evData.yDiffPc <= 0) {
              evData.yCrossOver = !evData.yCrossOver;
            }

            var swapXOrd = evData.xCrossOver !== evData.startXCrossOver;
            var swapYOrd = evData.yCrossOver !== evData.startYCrossOver;
            evData.inversedXOrd = swapXOrd ? inverseOrd(evData.ord) : false;
            evData.inversedYOrd = swapYOrd ? inverseOrd(evData.ord) : false;
          }
        }, {
          key: 'render',
          value: function render() {
            var _this4 = this;

            var _props5 = this.props,
                children = _props5.children,
                className = _props5.className,
                crossorigin = _props5.crossorigin,
                crop = _props5.crop,
                disabled = _props5.disabled,
                locked = _props5.locked,
                imageAlt = _props5.imageAlt,
                onImageError = _props5.onImageError,
                src = _props5.src,
                style = _props5.style,
                imageStyle = _props5.imageStyle;
            var cropIsActive = this.state.cropIsActive;
            var cropSelection = void 0;

            if (isCropValid(crop)) {
              cropSelection = this.createCropSelection();
            }

            var componentClasses = ['ReactCrop'];

            if (cropIsActive) {
              componentClasses.push('ReactCrop--active');
            }

            if (crop) {
              if (crop.aspect) {
                componentClasses.push('ReactCrop--fixed-aspect');
              } // In this case we have to shadow the image, since the box-shadow
              // on the crop won't work.


              if (cropIsActive && (!crop.width || !crop.height)) {
                componentClasses.push('ReactCrop--crop-invisible');
              }
            }

            if (disabled) {
              componentClasses.push('ReactCrop--disabled');
            }

            if (locked) {
              componentClasses.push('ReactCrop--locked');
            }

            if (className) {
              componentClasses.push.apply(componentClasses, _toConsumableArray(className.split(' ')));
            }

            return _react2.default.createElement('div', {
              ref: function ref(n) {
                _this4.componentRef = n;
              },
              className: componentClasses.join(' '),
              style: style,
              onTouchStart: this.onComponentMouseTouchDown,
              onMouseDown: this.onComponentMouseTouchDown,
              role: 'presentation',
              tabIndex: 1,
              onKeyDown: this.onComponentKeyDown
            }, _react2.default.createElement('img', {
              ref: function ref(n) {
                _this4.imageRef = n;
              },
              crossOrigin: crossorigin,
              className: 'ReactCrop__image',
              style: imageStyle,
              src: src,
              onLoad: function onLoad(e) {
                return _this4.onImageLoad(e.target);
              },
              onError: onImageError,
              alt: imageAlt
            }), children, cropSelection);
          }
        }]);

        return ReactCrop;
      }(_react.PureComponent);

      ReactCrop.xOrds = ['e', 'w'];
      ReactCrop.yOrds = ['n', 's'];
      ReactCrop.xyOrds = ['nw', 'ne', 'se', 'sw'];
      ReactCrop.arrowKey = {
        left: 37,
        up: 38,
        right: 39,
        down: 40
      };
      ReactCrop.nudgeStep = 0.2;
      ReactCrop.defaultCrop = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
      ReactCrop.propTypes = {
        className: _propTypes2.default.string,
        crossorigin: _propTypes2.default.string,
        children: _propTypes2.default.oneOfType([_propTypes2.default.arrayOf(_propTypes2.default.node), _propTypes2.default.node]),
        crop: _propTypes2.default.shape({
          aspect: _propTypes2.default.number,
          x: _propTypes2.default.number,
          y: _propTypes2.default.number,
          width: _propTypes2.default.number,
          height: _propTypes2.default.number
        }),
        disabled: _propTypes2.default.bool,
        locked: _propTypes2.default.bool,
        imageAlt: _propTypes2.default.string,
        imageStyle: _propTypes2.default.shape({}),
        keepSelection: _propTypes2.default.bool,
        minWidth: _propTypes2.default.number,
        minHeight: _propTypes2.default.number,
        maxWidth: _propTypes2.default.number,
        maxHeight: _propTypes2.default.number,
        onChange: _propTypes2.default.func.isRequired,
        onImageError: _propTypes2.default.func,
        onComplete: _propTypes2.default.func,
        onImageLoaded: _propTypes2.default.func,
        onDragStart: _propTypes2.default.func,
        onDragEnd: _propTypes2.default.func,
        src: _propTypes2.default.string.isRequired,
        style: _propTypes2.default.shape({}),
        renderSelectionAddon: _propTypes2.default.func
      };
      ReactCrop.defaultProps = {
        className: undefined,
        crop: undefined,
        crossorigin: undefined,
        disabled: false,
        locked: false,
        imageAlt: '',
        maxWidth: 100,
        maxHeight: 100,
        minWidth: 0,
        minHeight: 0,
        keepSelection: false,
        onComplete: function onComplete() {},
        onImageError: function onImageError() {},
        onImageLoaded: function onImageLoaded() {},
        onDragStart: function onDragStart() {},
        onDragEnd: function onDragEnd() {},
        children: undefined,
        style: undefined,
        imageStyle: undefined,
        renderSelectionAddon: undefined,
        useNaturalImageDimensions: true
      };
      exports.default = ReactCrop;
      exports.Component = ReactCrop;
      exports.getPixelCrop = getPixelCrop;
      exports.makeAspectCrop = makeAspectCrop;
      exports.containCrop = containCrop;
      /***/
    },
    /* 1 */

    /***/
    function (module, exports) {
      module.exports = __WEBPACK_EXTERNAL_MODULE_1__;
      /***/
    },
    /* 2 */

    /***/
    function (module, exports) {
      module.exports = __WEBPACK_EXTERNAL_MODULE_2__;
      /***/
    }
    /******/
    ])
  );
});
});

var ReactCrop$1 = unwrapExports(ReactCrop);

var css$1 = ".ReactCrop{position:relative;display:inline-block;cursor:crosshair;overflow:hidden;max-width:100%;background-color:#000}.ReactCrop:focus{outline:none}.ReactCrop--disabled,.ReactCrop--locked{cursor:inherit}.ReactCrop__image{display:block;max-width:100%;max-height:-webkit-fill-available;max-height:-moz-available;max-height:fill-available}.ReactCrop--crop-invisible .ReactCrop__image{opacity:.5}.ReactCrop__crop-selection{position:absolute;top:0;left:0;transform:translateZ(0);box-sizing:border-box;cursor:move;box-shadow:0 0 0 9999em rgba(0,0,0,.5);border:1px solid;border-image-source:url(\"data:image/gif;base64,R0lGODlhCgAKAJECAAAAAP///////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEI5RDc5MTFDNkE2MTFFM0JCMDZEODI2QTI4MzJBOTIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEI5RDc5MTBDNkE2MTFFM0JCMDZEODI2QTI4MzJBOTIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuZGlkOjAyODAxMTc0MDcyMDY4MTE4MDgzQzNDMjA5MzREQ0ZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAyODAxMTc0MDcyMDY4MTE4MDgzQzNDMjA5MzREQ0ZDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEBQoAAgAsAAAAAAoACgAAAhWEERkn7W3ei7KlagMWF/dKgYeyGAUAIfkEBQoAAgAsAAAAAAoACgAAAg+UYwLJ7RnQm7QmsCyVKhUAIfkEBQoAAgAsAAAAAAoACgAAAhCUYgLJHdiinNSAVfOEKoUCACH5BAUKAAIALAAAAAAKAAoAAAIRVISAdusPo3RAzYtjaMIaUQAAIfkEBQoAAgAsAAAAAAoACgAAAg+MDiem7Q8bSLFaG5il6xQAIfkEBQoAAgAsAAAAAAoACgAAAg+UYRLJ7QnQm7SmsCyVKhUAIfkEBQoAAgAsAAAAAAoACgAAAhCUYBLJDdiinNSEVfOEKoECACH5BAUKAAIALAAAAAAKAAoAAAIRFISBdusPo3RBzYsjaMIaUQAAOw==\");border-image-slice:1;border-image-repeat:repeat}.ReactCrop--disabled .ReactCrop__crop-selection{cursor:inherit}.ReactCrop__drag-handle{position:absolute;width:9px;height:9px;background-color:rgba(0,0,0,.2);border:1px solid hsla(0,0%,100%,.7);box-sizing:border-box;outline:1px solid rgba(0,0,0,0)}.ReactCrop .ord-nw{left:0;cursor:nw-resize}.ReactCrop .ord-n,.ReactCrop .ord-nw{top:0;margin-top:-5px;margin-left:-5px}.ReactCrop .ord-n{left:50%;cursor:n-resize}.ReactCrop .ord-ne{top:0;cursor:ne-resize}.ReactCrop .ord-e,.ReactCrop .ord-ne{right:0;margin-top:-5px;margin-right:-5px}.ReactCrop .ord-e{top:50%;cursor:e-resize}.ReactCrop .ord-se{bottom:0;right:0;margin-bottom:-5px;margin-right:-5px;cursor:se-resize}.ReactCrop .ord-s{left:50%;cursor:s-resize}.ReactCrop .ord-s,.ReactCrop .ord-sw{bottom:0;margin-bottom:-5px;margin-left:-5px}.ReactCrop .ord-sw{left:0;cursor:sw-resize}.ReactCrop .ord-w{top:50%;left:0;margin-top:-5px;margin-left:-5px;cursor:w-resize}.ReactCrop__disabled .ReactCrop__drag-handle{cursor:inherit}.ReactCrop__drag-bar{position:absolute}.ReactCrop__drag-bar.ord-n{top:0;left:0;width:100%;height:6px;margin-top:-3px}.ReactCrop__drag-bar.ord-e{right:0;top:0;width:6px;height:100%;margin-right:-3px}.ReactCrop__drag-bar.ord-s{bottom:0;left:0;width:100%;height:6px;margin-bottom:-3px}.ReactCrop__drag-bar.ord-w{top:0;left:0;width:6px;height:100%;margin-left:-3px}.ReactCrop--fixed-aspect .ReactCrop__drag-bar,.ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-e,.ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-n,.ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-s,.ReactCrop--fixed-aspect .ReactCrop__drag-handle.ord-w,.ReactCrop--new-crop .ReactCrop__drag-bar,.ReactCrop--new-crop .ReactCrop__drag-handle{display:none}@media (max-width:768px),(pointer:coarse){.ReactCrop__drag-handle{width:17px;height:17px}.ReactCrop .ord-n,.ReactCrop .ord-nw{margin-top:-9px;margin-left:-9px}.ReactCrop .ord-e,.ReactCrop .ord-ne{margin-top:-9px;margin-right:-9px}.ReactCrop .ord-se{margin-bottom:-9px;margin-right:-9px}.ReactCrop .ord-s,.ReactCrop .ord-sw{margin-bottom:-9px;margin-left:-9px}.ReactCrop .ord-w{margin-top:-9px;margin-left:-9px}.ReactCrop__drag-bar.ord-n{height:14px;margin-top:-7px}.ReactCrop__drag-bar.ord-e{width:14px;margin-right:-7px}.ReactCrop__drag-bar.ord-s{height:14px;margin-bottom:-7px}.ReactCrop__drag-bar.ord-w{width:14px;margin-left:-7px}}";
styleInject(css$1);

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Component = React.Component,
    Fragment = React.Fragment;
var styles = {
  cropWrap: {
    position: 'relative',
    display: 'inline-block'
  },
  cropDeleteOverlay: {
    cursor: 'pointer',
    position: 'absolute',
    right: -16,
    top: -16
  }
};

var callAll = function callAll() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return fns.forEach(function (fn) {
      return fn && fn.apply(void 0, args);
    });
  };
}; // https://github.com/DominicTobias/react-image-crop#what-about-showing-the-crop-on-the-client


var getCroppedImage = function getCroppedImage(image, pixelCrop) {
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  if (image) {
    // $FlowFixMe - Flow doesn't have this correct?
    context.drawImage(image, pixelCrop.x, pixelCrop.y, pixelCrop.width, pixelCrop.height, 0, 0, pixelCrop.width, pixelCrop.height);
  }

  return canvas.toDataURL();
};

var resizeImageToDataURL = function resizeImageToDataURL(_ref) {
  var image = _ref.image,
      height = _ref.height,
      width = _ref.width;
  // create an off-screen canvas
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d'); // set its dimension to target size

  canvas.width = width;
  canvas.height = height; // set background color

  context.fillStyle = 'white';
  context.fillRect(0, 0, canvas.width, canvas.height); // draw source image into the off-screen canvas:

  context.drawImage(image, 0, 0, width, height); // encode image to data-uri with base64 version of compressed image

  return canvas.toDataURL();
};

var renderDeleteOverlayButton = function renderDeleteOverlayButton(_ref2) {
  var onClick = _ref2.onClick,
      props = objectWithoutProperties(_ref2, ["onClick"]);

  return React.createElement("svg", _extends_1({}, props, {
    id: "imagecrop-clear",
    onClick: onClick,
    height: "16",
    width: "16",
    viewBox: "0 0 150 150",
    xmlns: "http://www.w3.org/2000/svg"
  }), React.createElement("g", {
    fill: "none"
  }, React.createElement("circle", {
    cx: "75",
    cy: "75",
    fill: "#000",
    fillOpacity: "0.15",
    r: "75"
  }), React.createElement("g", {
    stroke: "#fff",
    strokeLinecap: "round",
    strokeWidth: "16"
  }, React.createElement("path", {
    d: "m.395.395 77.9479421 77.9479421",
    transform: "translate(36 36)"
  }), React.createElement("path", {
    d: "m0 0 79 79",
    transform: "rotate(-90 75.5 39.5)"
  }))));
};

renderDeleteOverlayButton.propTypes = process.env.NODE_ENV === 'production' ? null : {
  onClick: propTypes.func.isRequired
};

var ImageCrop =
/*#__PURE__*/
function (_Component) {
  inherits(ImageCrop, _Component);

  function ImageCrop() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck(this, ImageCrop);

    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(ImageCrop)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty(assertThisInitialized(_this), "state", {
      crop: _this.props.crop || {
        x: 0,
        y: 0,
        width: 100,
        height: 100
      },
      croppedImage: '',
      image: null,
      src: _this.props.dataURL || ''
    });

    defineProperty(assertThisInitialized(_this), "getDimensionsFromTarget", function (_ref3) {
      var height = _ref3.height,
          width = _ref3.width;
      var _this$props = _this.props,
          targetHeight = _this$props.targetHeight,
          targetWidth = _this$props.targetWidth;
      var safeHeight = targetHeight && height >= targetHeight ? targetHeight : height;
      var safeWidth = targetWidth && width >= targetWidth ? targetWidth : width; // explicit dimensions

      if (targetHeight && targetWidth) {
        return {
          height: safeHeight,
          width: safeWidth
        };
      } // explicit height, proportional width


      if (targetHeight && !targetWidth) {
        return {
          height: safeHeight,
          width: safeHeight * width / height
        };
      } // explicit width, proportional height


      if (targetWidth && !targetHeight) {
        return {
          height: safeWidth * height / width,
          width: safeWidth
        };
      } // no target props set


      return {
        height: safeHeight,
        width: safeWidth
      };
    });

    defineProperty(assertThisInitialized(_this), "getReactCropProps", function (props) {
      var _ref4 = props || {},
          crop = _ref4.crop,
          onChange = _ref4.onChange,
          onComplete = _ref4.onComplete,
          onImageLoaded = _ref4.onImageLoaded,
          reactCropProps = objectWithoutProperties(_ref4, ["crop", "onChange", "onComplete", "onImageLoaded"]);

      return _objectSpread$3({
        src: _this.state.src,
        crop: _this.state.crop || crop,
        imageStyle: {
          background: 'white'
        },
        keepSelection: true,
        onChange: callAll(onChange, _this.onCropChange),
        onComplete: callAll(onComplete, _this.onComplete),
        onImageLoaded: callAll(onImageLoaded, _this.onImageLoaded)
      }, reactCropProps);
    });

    defineProperty(assertThisInitialized(_this), "setImageSource", function (dataURL) {
      var image = new Image();
      image.addEventListener('load', function () {
        var imageHeight = image.height,
            imageWidth = image.width;

        var _this$getDimensionsFr = _this.getDimensionsFromTarget({
          height: imageHeight,
          width: imageWidth
        }),
            height = _this$getDimensionsFr.height,
            width = _this$getDimensionsFr.width;

        var src = resizeImageToDataURL({
          image: image,
          height: height,
          width: width
        });

        _this.setState({
          src: src
        });
      });
      image.src = dataURL;
    });

    defineProperty(assertThisInitialized(_this), "onSelectFile", function (event) {
      if (event.target.files && event.target.files.length) {
        var reader = new window.FileReader();
        reader.addEventListener('load', function () {
          _this.setImageSource(reader.result.toString());
        }, false);
        reader.readAsDataURL(event.target.files[0]);
      }
    });

    defineProperty(assertThisInitialized(_this), "onCropChange", function (crop) {
      _this.setState({
        crop: crop
      });
    });

    defineProperty(assertThisInitialized(_this), "onComplete", function (crop, pixelCrop) {
      if (_this.state.image) {
        _this.setState({
          croppedImage: getCroppedImage(_this.state.image, pixelCrop)
        }, function () {
          _this.props.onImageCrop(_this.state.croppedImage);
        });
      }
    });

    defineProperty(assertThisInitialized(_this), "onImageDelete", function () {
      _this.setState({
        src: ''
      }, function () {
        if (_this.props.onImageDelete) _this.props.onImageDelete(_this.state.src);
      });
    });

    defineProperty(assertThisInitialized(_this), "onImageLoaded", function (image, pixelCrop) {
      _this.setState({
        croppedImage: getCroppedImage(image, pixelCrop),
        image: image
      }, function () {
        _this.props.onImageCrop(_this.state.croppedImage);
      });
    });

    defineProperty(assertThisInitialized(_this), "renderReactComp", function (props) {
      var CropDeleteOverlay = renderDeleteOverlayButton;
      return _this.state.src ? React.createElement("div", {
        style: styles.cropWrap
      }, React.createElement(ReactCrop$1, props), _this.props.showDeleteButton && React.createElement(CropDeleteOverlay, {
        onClick: _this.onImageDelete,
        style: styles.cropDeleteOverlay
      })) : null;
    });

    return _this;
  }

  createClass(ImageCrop, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref5, prevState) {
      var dataURLPrev = _ref5.dataURL;
      var _this$props2 = this.props,
          children = _this$props2.children,
          dataURL = _this$props2.dataURL; // existing image we want to remove from state

      if (!dataURL && dataURLPrev && prevState.src) {
        this.setState({
          src: ''
        });
        return;
      } // initial image (e.g. loaded from a server)


      if (dataURL && dataURL !== dataURLPrev && !prevState.src) {
        this.setImageSource(dataURL);
      }

      if (!children && dataURL && dataURL !== dataURLPrev && prevState.src) {
        this.setImageSource(dataURL);
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(Fragment, null, this.props.children ? this.props.children({
        Crop: this.renderReactComp,
        croppedImage: this.state.croppedImage,
        getCropProps: this.getReactCropProps,
        onSelectFile: this.onSelectFile
      }) : this.renderReactComp(this.getReactCropProps()));
    }
  }]);

  return ImageCrop;
}(Component);

defineProperty(ImageCrop, "defaultProps", {
  showDeleteButton: true
});

defineProperty(ImageCrop, "propTypes", process.env.NODE_ENV === 'production' ? null : {
  children: propTypes.func,
  crop: propTypes.shape({
    height: propTypes.number.isRequired,
    width: propTypes.number.isRequired,
    x: propTypes.number.isRequired,
    y: propTypes.number.isRequired
  }),
  dataURL: propTypes.string,
  onImageCrop: propTypes.func.isRequired,
  onImageDelete: propTypes.func,
  targetHeight: propTypes.number,
  targetWidth: propTypes.number,
  showDeleteButton: propTypes.bool
});

var Fragment$1 = React.Fragment; // 600: good for document width and preview rendering

var IMG_MAX_WIDTH = 600;
var ImageInput =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits(ImageInput, _React$PureComponent);

  function ImageInput(props) {
    var _this;

    classCallCheck(this, ImageInput);

    _this = possibleConstructorReturn(this, getPrototypeOf(ImageInput).call(this, props));

    defineProperty(assertThisInitialized(_this), "currentFile", void 0);

    defineProperty(assertThisInitialized(_this), "fileRef", React.createRef());

    defineProperty(assertThisInitialized(_this), "labelRef", React.createRef());

    defineProperty(assertThisInitialized(_this), "state", {
      currentValue: _this.props.savedValue,
      croppedValue: '',
      disableEditRemoteImage: false,
      errorMessage: '',
      shouldShowError: false,
      showCropper: false,
      showModal: false
    });

    var self = assertThisInitialized(_this);

    self.handleFileDialogOpenClick = _this.handleFileDialogOpenClick.bind(assertThisInitialized(_this));
    self.handleFileChange = _this.handleFileChange.bind(assertThisInitialized(_this));
    self.handleImageCancelCreate = _this.handleImageCancelCreate.bind(assertThisInitialized(_this));
    self.handleImageCancelEdit = _this.handleImageCancelEdit.bind(assertThisInitialized(_this));
    self.handleImageCrop = _this.handleImageCrop.bind(assertThisInitialized(_this));
    self.handleImageDelete = _this.handleImageDelete.bind(assertThisInitialized(_this));
    self.handleToggleEditor = _this.handleToggleEditor.bind(assertThisInitialized(_this));
    self.updateImage = _this.updateImage.bind(assertThisInitialized(_this));
    return _this;
  }

  createClass(ImageInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var currentValue = this.state.currentValue;

      if (currentValue) {
        this.maybeDisableEditButton(currentValue);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(_ref) {
      var prevSavedValue = _ref.savedValue;

      if (this.props.savedValue !== prevSavedValue) {
        this.setState({
          currentValue: this.props.savedValue
        });
      }
    }
  }, {
    key: "maybeDisableEditButton",
    value: function maybeDisableEditButton(image) {
      var isFromRemote = /^http.+\.(gif|png|tiff|bmp|jpg|svg)/.test(image); // if image is from remote then disable edit button

      if (isFromRemote) {
        this.setState({
          disableEditRemoteImage: true
        });
      }
    }
  }, {
    key: "drawImageToDataURL",
    value: function drawImageToDataURL(_ref2) {
      var image = _ref2.image,
          height = _ref2.height,
          width = _ref2.width;
      // create an off-screen canvas
      var canvas = document.createElement('canvas');
      var context = canvas.getContext('2d'); // set its dimension to target size

      canvas.width = width;
      canvas.height = height; // set background color

      context.fillStyle = 'transparent';
      context.fillRect(0, 0, canvas.width, canvas.height); // draw source image into the off-screen canvas:

      context.drawImage(image, 0, 0, width, height); // encode image to data-uri with base64 version of compressed image

      return canvas.toDataURL();
    }
  }, {
    key: "getDimensions",
    value: function getDimensions(_ref3) {
      var height = _ref3.height,
          width = _ref3.width,
          targetHeight = _ref3.targetHeight,
          targetWidth = _ref3.targetWidth;
      var safeHeight = targetHeight && height >= targetHeight ? targetHeight : height;
      var safeWidth = targetWidth && width >= targetWidth ? targetWidth : width; // explicit dimensions

      if (targetHeight && targetWidth) {
        return {
          height: safeHeight,
          width: safeWidth
        };
      } // explicit height, proportional width


      if (targetHeight && !targetWidth) {
        return {
          height: safeHeight,
          width: safeHeight * width / height
        };
      } // explicit width, proportional height


      if (targetWidth && !targetHeight) {
        return {
          height: safeWidth * height / width,
          width: safeWidth
        };
      } // no target props set


      return {
        height: safeHeight,
        width: safeWidth
      };
    }
  }, {
    key: "handleFileDialogOpenClick",
    value: function handleFileDialogOpenClick() {
      this.labelRef.current && this.labelRef.current.click();
    }
  }, {
    key: "handleFileChange",
    value: function handleFileChange(event) {
      var _this2 = this;

      var inputProps = this.props.inputProps;
      var file = event.currentTarget.files[0];
      var reader = new window.FileReader(); // persist event outside of this handler to a parent component

      event.persist();

      reader.onload = function () {
        var url = typeof reader.result === 'string' ? reader.result : reader.result.toString();

        var _onChangeValidation = onChangeValidation({
          file: file,
          value: url
        }, _this2.props, _this2.state),
            errorMessage = _onChangeValidation.errorData.errorMessage,
            shouldShowError = _onChangeValidation.shouldShowError;

        _this2.setState({
          currentValue: url,
          errorMessage: errorMessage,
          shouldShowError: shouldShowError,
          showModal: true
        }, function () {
          if (event && inputProps && inputProps.onChange) {
            inputProps.onChange(event);
          }
        });
      };

      if (file) {
        reader.readAsDataURL(file);
        this.currentFile = file;
      }

      if (!file) {
        this.setState({
          showModal: false
        });
      }
    }
  }, {
    key: "handleImageCancelCreate",
    value: function handleImageCancelCreate(event) {
      var _this3 = this;

      event.preventDefault();
      var fileInputRef = this.fileRef.current;
      if (fileInputRef) fileInputRef.value = '';
      this.currentFile = undefined;

      var _onBlurValidation = onBlurValidation({
        file: this.currentFile,
        value: ''
      }, this.props, this.state),
          errorMessage = _onBlurValidation.errorData.errorMessage,
          shouldShowError = _onBlurValidation.shouldShowError;

      this.setState({
        croppedValue: '',
        currentValue: '',
        errorMessage: errorMessage,
        shouldShowError: shouldShowError
      }, function () {
        _this3.handleToggleEditor();
      });
    }
  }, {
    key: "handleImageCancelEdit",
    value: function handleImageCancelEdit(event) {
      event.preventDefault();
      var fileInputRef = this.fileRef.current;
      if (fileInputRef) fileInputRef.value = '';

      var _onBlurValidation2 = onBlurValidation('', this.props, this.state),
          errorMessage = _onBlurValidation2.errorData.errorMessage,
          shouldShowError = _onBlurValidation2.shouldShowError;

      if (shouldShowError && errorMessage) {
        this.setState({
          errorMessage: errorMessage,
          shouldShowError: shouldShowError
        });
      }

      this.handleToggleEditor();
    }
  }, {
    key: "handleImageCrop",
    value: function handleImageCrop(croppedValue) {
      this.setState({
        croppedValue: croppedValue
      });
    }
  }, {
    key: "handleImageDelete",
    value: function handleImageDelete() {
      var _this4 = this;

      this.setState({
        croppedValue: '',
        currentValue: '',
        showModal: false
      }, function () {
        var fileInputRef = _this4.fileRef.current;
        if (fileInputRef) fileInputRef.value = '';
        _this4.currentFile = undefined;

        _this4.updateImage();
      });
    }
  }, {
    key: "handleToggleEditor",
    value: function handleToggleEditor() {
      this.setState({
        showModal: !this.state.showModal
      });
    }
  }, {
    key: "resizeImageSource",
    value: function resizeImageSource(dataURL) {
      var _this5 = this;

      return new Promise(function (resolve, reject) {
        if (!dataURL) {
          reject('');
          return;
        }

        var image = new Image();

        image.onload = function () {
          var imageHeight = image.height,
              imageWidth = image.width;

          var _this5$getDimensions = _this5.getDimensions({
            height: imageHeight,
            width: imageWidth,
            targetWidth: IMG_MAX_WIDTH
          }),
              height = _this5$getDimensions.height,
              width = _this5$getDimensions.width;

          var src = _this5.drawImageToDataURL({
            image: image,
            height: height,
            width: width
          });

          src ? resolve(src) : reject(src);
        };

        image.src = dataURL;
      });
    }
  }, {
    key: "updateImage",
    value: function updateImage() {
      var _this$props, name, onChange, _this$state, croppedValue, currentValue, imageDataURL, resizedImageDataURL, _onBlurValidation3, errorData, shouldShowError;

      return regenerator.async(function updateImage$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$props = this.props, name = _this$props.name, onChange = _this$props.onChange;
              _this$state = this.state, croppedValue = _this$state.croppedValue, currentValue = _this$state.currentValue;
              imageDataURL = croppedValue || currentValue;
              _context.prev = 3;
              _context.next = 6;
              return regenerator.awrap(this.resizeImageSource(imageDataURL));

            case 6:
              resizedImageDataURL = _context.sent;
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](3);
              resizedImageDataURL = '';

            case 12:
              // const { errorData, shouldShowError } = onBlurValidation(resizedImageDataURL, this.props, this.state);
              _onBlurValidation3 = onBlurValidation({
                file: this.currentFile,
                value: this.state.currentValue
              }, this.props, this.state), errorData = _onBlurValidation3.errorData, shouldShowError = _onBlurValidation3.shouldShowError; // const { errorData, shouldShowError } = onChangeValidation(resizedImageDataURL, this.props, this.state);

              this.setState({
                croppedValue: '',
                errorMessage: errorData.errorMessage,
                shouldShowError: shouldShowError,
                showModal: false
              }, function () {
                onChange(name, resizedImageDataURL || undefined, errorData);
              });

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[3, 9]]);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          cleanName = _this$props2.cleanName,
          description = _this$props2.description,
          inputExtraText = _this$props2.inputExtraText,
          inputProps = _this$props2.inputProps,
          savedValue = _this$props2.savedValue,
          variableType = _this$props2.variableType;
      var _this$state2 = this.state,
          currentValue = _this$state2.currentValue,
          disableEditRemoteImage = _this$state2.disableEditRemoteImage,
          errorMessage = _this$state2.errorMessage,
          shouldShowError = _this$state2.shouldShowError,
          showModal = _this$state2.showModal;
      var inputPropsClassName = inputProps && inputProps.className ? " ".concat(inputProps.className) : '';
      var isInputDisabled = inputProps && inputProps.disabled;
      return React.createElement("div", {
        className: "".concat(CSS_CLASS_NAMES.field, " ").concat(CSS_CLASS_NAMES.fieldTypeToLower(variableType))
      }, savedValue ? React.createElement(Fragment$1, null, React.createElement("button", {
        className: singleSpaceString("".concat(CSS_CLASS_NAMES.button, "\n                  ").concat(isInputDisabled ? CSS_CLASS_NAMES.buttonDisabled : '')),
        onClick: disableEditRemoteImage || isInputDisabled ? null : this.handleToggleEditor,
        disabled: disableEditRemoteImage || isInputDisabled
      }, "Edit ".concat(description)), React.createElement(FieldError, {
        cleanName: cleanName,
        errorMessage: errorMessage,
        shouldShowError: shouldShowError
      })) : React.createElement(Fragment$1, null, React.createElement("label", {
        htmlFor: "openlaw-el-image-".concat(cleanName),
        ref: this.labelRef
      }, React.createElement("input", _extends_1({
        accept: "image/png, image/jpeg, image/svg+xml, image/tiff, image/bmp, image/gif",
        tabIndex: -1
      }, inputProps, {
        className: singleSpaceString("".concat(CSS_CLASS_NAMES.fieldInput, " ").concat(cleanName, " ").concat(inputPropsClassName)),
        id: "openlaw-el-image-".concat(cleanName),
        onChange: this.handleFileChange,
        ref: this.fileRef,
        type: "file"
      })), React.createElement("button", {
        className: singleSpaceString("".concat(CSS_CLASS_NAMES.button, "\n                    ").concat(isInputDisabled ? CSS_CLASS_NAMES.buttonDisabled : '')),
        onClick: isInputDisabled ? null : this.handleFileDialogOpenClick
      }, "Select ".concat(description)), React.createElement(FieldError, {
        cleanName: cleanName,
        errorMessage: errorMessage,
        shouldShowError: shouldShowError
      }))), showModal && currentValue && React.createElement("div", {
        className: CSS_CLASS_NAMES.fieldImageEditor
      }, React.createElement(ImageCrop, {
        crop: {
          x: 0,
          y: 0,
          width: 100,
          height: 100
        },
        dataURL: currentValue,
        onImageCrop: this.handleImageCrop,
        showDeleteButton: false
      }), React.createElement("div", {
        className: singleSpaceString("".concat(CSS_CLASS_NAMES.fieldImageEditorActions, "\n                ").concat(savedValue && CSS_CLASS_NAMES.fieldImageEditorActionsStacked))
      }, React.createElement("button", {
        className: "".concat(CSS_CLASS_NAMES.button),
        onClick: this.updateImage
      }, "Save"), React.createElement("div", null, React.createElement("button", {
        className: CSS_CLASS_NAMES.buttonSecondary,
        onClick: savedValue ? this.handleImageCancelEdit : this.handleImageCancelCreate
      }, "Cancel"), savedValue && React.createElement("button", {
        className: CSS_CLASS_NAMES.buttonSecondary,
        onClick: this.handleImageDelete
      }, "Delete")))), inputExtraText && React.createElement(ExtraText, {
        text: inputExtraText
      }));
    }
  }]);

  return ImageInput;
}(React.PureComponent);

defineProperty(ImageInput, "propTypes", process.env.NODE_ENV === 'production' ? null : {
  cleanName: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  getValidity: function getValidity() {
    return (typeof bpfrpt_proptype_ValidityFuncType === "function" ? bpfrpt_proptype_ValidityFuncType.isRequired ? bpfrpt_proptype_ValidityFuncType.isRequired : bpfrpt_proptype_ValidityFuncType : propTypes.shape(bpfrpt_proptype_ValidityFuncType).isRequired).apply(this, arguments);
  },
  inputExtraText: function inputExtraText() {
    return (typeof bpfrpt_proptype_FieldExtraTextType === "function" ? bpfrpt_proptype_FieldExtraTextType : propTypes.shape(bpfrpt_proptype_FieldExtraTextType)).apply(this, arguments);
  },
  inputProps: function inputProps() {
    return (typeof bpfrpt_proptype_FieldPropsValueType === "function" ? bpfrpt_proptype_FieldPropsValueType : propTypes.shape(bpfrpt_proptype_FieldPropsValueType)).apply(this, arguments);
  },
  name: propTypes.string.isRequired,
  onChange: function onChange() {
    return (typeof bpfrpt_proptype_OnChangeFuncType === "function" ? bpfrpt_proptype_OnChangeFuncType.isRequired ? bpfrpt_proptype_OnChangeFuncType.isRequired : bpfrpt_proptype_OnChangeFuncType : propTypes.shape(bpfrpt_proptype_OnChangeFuncType).isRequired).apply(this, arguments);
  },
  onValidate: function onValidate() {
    return (typeof bpfrpt_proptype_OnValidateFuncType === "function" ? bpfrpt_proptype_OnValidateFuncType : propTypes.shape(bpfrpt_proptype_OnValidateFuncType)).apply(this, arguments);
  },
  savedValue: propTypes.string.isRequired,
  variableType: function variableType() {
    return (typeof bpfrpt_proptype_FieldEnumType === "function" ? bpfrpt_proptype_FieldEnumType.isRequired ? bpfrpt_proptype_FieldEnumType.isRequired : bpfrpt_proptype_FieldEnumType : propTypes.shape(bpfrpt_proptype_FieldEnumType).isRequired).apply(this, arguments);
  }
});

var LargeText =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits(LargeText, _React$PureComponent);

  function LargeText(props) {
    var _this;

    classCallCheck(this, LargeText);

    _this = possibleConstructorReturn(this, getPrototypeOf(LargeText).call(this, props));

    defineProperty(assertThisInitialized(_this), "state", {
      currentValue: _this.props.savedValue || '',
      errorMessage: '',
      shouldShowError: false
    });

    var self = assertThisInitialized(_this);

    self.onBlur = _this.onBlur.bind(assertThisInitialized(_this));
    self.onChange = _this.onChange.bind(assertThisInitialized(_this));
    return _this;
  }

  createClass(LargeText, [{
    key: "onBlur",
    value: function onBlur(event) {
      var inputProps = this.props.inputProps;
      var currentValue = this.state.currentValue;

      var _onBlurValidation = onBlurValidation(currentValue, this.props, this.state),
          errorMessage = _onBlurValidation.errorData.errorMessage,
          shouldShowError = _onBlurValidation.shouldShowError; // persist event outside of this handler to a parent component


      event.persist();
      this.setState({
        errorMessage: errorMessage,
        shouldShowError: shouldShowError
      }, function () {
        if (event && inputProps && inputProps.onBlur) {
          inputProps.onBlur(event);
        }
      });
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      var eventValue = event.currentTarget.value;
      var _this$props = this.props,
          inputProps = _this$props.inputProps,
          name = _this$props.name,
          onChange = _this$props.onChange;

      var _onChangeValidation = onChangeValidation(eventValue, this.props, this.state),
          errorData = _onChangeValidation.errorData,
          shouldShowError = _onChangeValidation.shouldShowError; // persist event outside of this handler to a parent component


      event.persist();
      this.setState({
        currentValue: eventValue,
        errorMessage: errorData.errorMessage,
        shouldShowError: shouldShowError
      }, function () {
        onChange(name, eventValue || undefined, errorData);

        if (event && inputProps && inputProps.onChange) {
          inputProps.onChange(event);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          cleanName = _this$props2.cleanName,
          description = _this$props2.description,
          inputExtraText = _this$props2.inputExtraText,
          inputProps = _this$props2.inputProps,
          variableType = _this$props2.variableType;
      var _this$state = this.state,
          errorMessage = _this$state.errorMessage,
          shouldShowError = _this$state.shouldShowError;
      var inputPropsClassName = inputProps && inputProps.className ? "".concat(inputProps.className) : '';
      return React.createElement("div", {
        className: "".concat(CSS_CLASS_NAMES.field, " ").concat(CSS_CLASS_NAMES.fieldTypeToLower(variableType))
      }, React.createElement("label", {
        className: "".concat(CSS_CLASS_NAMES.fieldLabel)
      }, React.createElement("span", {
        className: "".concat(CSS_CLASS_NAMES.fieldLabelText)
      }, description), React.createElement("textarea", _extends_1({
        placeholder: description,
        title: description
      }, inputProps, {
        className: singleSpaceString("".concat(CSS_CLASS_NAMES.fieldTextarea, " ").concat(cleanName, " ").concat(inputPropsClassName)),
        onBlur: this.onBlur,
        onChange: this.onChange,
        value: this.state.currentValue
      })), React.createElement(FieldError, {
        cleanName: cleanName,
        errorMessage: errorMessage,
        shouldShowError: shouldShowError
      })), inputExtraText && React.createElement(ExtraText, {
        text: inputExtraText
      }));
    }
  }]);

  return LargeText;
}(React.PureComponent);

defineProperty(LargeText, "propTypes", process.env.NODE_ENV === 'production' ? null : {
  cleanName: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  inputExtraText: function inputExtraText() {
    return (typeof bpfrpt_proptype_FieldExtraTextType === "function" ? bpfrpt_proptype_FieldExtraTextType : propTypes.shape(bpfrpt_proptype_FieldExtraTextType)).apply(this, arguments);
  },
  inputProps: function inputProps() {
    return (typeof bpfrpt_proptype_FieldPropsValueType === "function" ? bpfrpt_proptype_FieldPropsValueType : propTypes.shape(bpfrpt_proptype_FieldPropsValueType)).apply(this, arguments);
  },
  name: propTypes.string.isRequired,
  onChange: function onChange() {
    return (typeof bpfrpt_proptype_OnChangeFuncType === "function" ? bpfrpt_proptype_OnChangeFuncType.isRequired ? bpfrpt_proptype_OnChangeFuncType.isRequired : bpfrpt_proptype_OnChangeFuncType : propTypes.shape(bpfrpt_proptype_OnChangeFuncType).isRequired).apply(this, arguments);
  },
  onValidate: function onValidate() {
    return (typeof bpfrpt_proptype_OnValidateFuncType === "function" ? bpfrpt_proptype_OnValidateFuncType : propTypes.shape(bpfrpt_proptype_OnValidateFuncType)).apply(this, arguments);
  },
  savedValue: propTypes.string.isRequired,
  variableType: function variableType() {
    return (typeof bpfrpt_proptype_FieldEnumType === "function" ? bpfrpt_proptype_FieldEnumType.isRequired ? bpfrpt_proptype_FieldEnumType.isRequired : bpfrpt_proptype_FieldEnumType : propTypes.shape(bpfrpt_proptype_FieldEnumType).isRequired).apply(this, arguments);
  }
});

var NumberInput =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits(NumberInput, _React$PureComponent);

  function NumberInput(props) {
    var _this;

    classCallCheck(this, NumberInput);

    _this = possibleConstructorReturn(this, getPrototypeOf(NumberInput).call(this, props));

    defineProperty(assertThisInitialized(_this), "state", {
      currentValue: _this.props.savedValue || '',
      errorMessage: '',
      shouldShowError: false
    });

    var self = assertThisInitialized(_this);

    self.onBlur = _this.onBlur.bind(assertThisInitialized(_this));
    self.onChange = _this.onChange.bind(assertThisInitialized(_this));
    self.onKeyUp = _this.onKeyUp.bind(assertThisInitialized(_this));
    return _this;
  }

  createClass(NumberInput, [{
    key: "onBlur",
    value: function onBlur(event) {
      var inputProps = this.props.inputProps;
      var currentValue = this.state.currentValue;

      var _onBlurValidation = onBlurValidation(currentValue, this.props),
          errorMessage = _onBlurValidation.errorData.errorMessage,
          shouldShowError = _onBlurValidation.shouldShowError; // persist event outside of this handler to a parent component


      if (event) event.persist();
      this.setState({
        errorMessage: errorMessage,
        shouldShowError: shouldShowError
      }, function () {
        if (event && inputProps && inputProps.onBlur) {
          inputProps.onBlur(event);
        }
      });
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      var eventValue = event.currentTarget.value;
      var _this$props = this.props,
          inputProps = _this$props.inputProps,
          name = _this$props.name,
          onChange = _this$props.onChange;

      var _onChangeValidation = onChangeValidation(eventValue, this.props, this.state),
          errorData = _onChangeValidation.errorData,
          shouldShowError = _onChangeValidation.shouldShowError; // persist event outside of this handler to a parent component


      if (event) event.persist();
      this.setState({
        currentValue: eventValue,
        errorMessage: errorData.errorMessage,
        shouldShowError: shouldShowError
      }, function () {
        onChange(name, eventValue || undefined, errorData);

        if (event && inputProps && inputProps.onChange) {
          inputProps.onChange(event);
        }
      });
    }
  }, {
    key: "onKeyUp",
    value: function onKeyUp(event) {
      var _this$props2 = this.props,
          inputProps = _this$props2.inputProps,
          onKeyUp = _this$props2.onKeyUp;
      if (onKeyUp) onKeyUp(event); // persist event outside of this handler to a parent component

      event.persist();

      if (inputProps && inputProps.onKeyUp) {
        inputProps.onKeyUp(event);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          cleanName = _this$props3.cleanName,
          description = _this$props3.description,
          inputExtraText = _this$props3.inputExtraText,
          inputProps = _this$props3.inputProps,
          variableType = _this$props3.variableType;
      var _this$state = this.state,
          errorMessage = _this$state.errorMessage,
          shouldShowError = _this$state.shouldShowError;
      var errorClassName = errorMessage && shouldShowError ? CSS_CLASS_NAMES.fieldInputError : '';
      var inputPropsClassName = inputProps && inputProps.className ? "".concat(inputProps.className) : '';
      return React.createElement("div", {
        className: "".concat(CSS_CLASS_NAMES.field, " ").concat(CSS_CLASS_NAMES.fieldTypeToLower(variableType))
      }, React.createElement("label", {
        className: "".concat(CSS_CLASS_NAMES.fieldLabel)
      }, React.createElement("span", {
        className: "".concat(CSS_CLASS_NAMES.fieldLabelText)
      }, description), React.createElement("input", _extends_1({
        placeholder: description
      }, inputProps, {
        className: singleSpaceString("".concat(CSS_CLASS_NAMES.fieldInput, " ").concat(cleanName, " ").concat(inputPropsClassName, " ").concat(errorClassName)),
        onBlur: this.onBlur,
        onChange: this.onChange,
        onKeyUp: this.onKeyUp,
        type: "number",
        value: this.state.currentValue
      })), React.createElement(FieldError, {
        cleanName: cleanName,
        errorMessage: errorMessage,
        shouldShowError: shouldShowError
      })), inputExtraText && React.createElement(ExtraText, {
        text: inputExtraText
      }));
    }
  }]);

  return NumberInput;
}(React.PureComponent);

defineProperty(NumberInput, "propTypes", process.env.NODE_ENV === 'production' ? null : {
  cleanName: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  getValidity: function getValidity() {
    return (typeof bpfrpt_proptype_ValidityFuncType === "function" ? bpfrpt_proptype_ValidityFuncType.isRequired ? bpfrpt_proptype_ValidityFuncType.isRequired : bpfrpt_proptype_ValidityFuncType : propTypes.shape(bpfrpt_proptype_ValidityFuncType).isRequired).apply(this, arguments);
  },
  inputExtraText: function inputExtraText() {
    return (typeof bpfrpt_proptype_FieldExtraTextType === "function" ? bpfrpt_proptype_FieldExtraTextType : propTypes.shape(bpfrpt_proptype_FieldExtraTextType)).apply(this, arguments);
  },
  inputProps: function inputProps() {
    return (typeof bpfrpt_proptype_FieldPropsValueType === "function" ? bpfrpt_proptype_FieldPropsValueType : propTypes.shape(bpfrpt_proptype_FieldPropsValueType)).apply(this, arguments);
  },
  name: propTypes.string.isRequired,
  onChange: function onChange() {
    return (typeof bpfrpt_proptype_OnChangeFuncType === "function" ? bpfrpt_proptype_OnChangeFuncType.isRequired ? bpfrpt_proptype_OnChangeFuncType.isRequired : bpfrpt_proptype_OnChangeFuncType : propTypes.shape(bpfrpt_proptype_OnChangeFuncType).isRequired).apply(this, arguments);
  },
  onKeyUp: function onKeyUp() {
    return (typeof bpfrpt_proptype_ValidateOnKeyUpFuncType === "function" ? bpfrpt_proptype_ValidateOnKeyUpFuncType : propTypes.shape(bpfrpt_proptype_ValidateOnKeyUpFuncType)).apply(this, arguments);
  },
  onValidate: function onValidate() {
    return (typeof bpfrpt_proptype_OnValidateFuncType === "function" ? bpfrpt_proptype_OnValidateFuncType : propTypes.shape(bpfrpt_proptype_OnValidateFuncType)).apply(this, arguments);
  },
  savedValue: propTypes.string.isRequired,
  variableType: function variableType() {
    return (typeof bpfrpt_proptype_FieldEnumType === "function" ? bpfrpt_proptype_FieldEnumType.isRequired ? bpfrpt_proptype_FieldEnumType.isRequired : bpfrpt_proptype_FieldEnumType : propTypes.shape(bpfrpt_proptype_FieldEnumType).isRequired).apply(this, arguments);
  }
});

var Text =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits(Text, _React$PureComponent);

  function Text(props) {
    var _this;

    classCallCheck(this, Text);

    _this = possibleConstructorReturn(this, getPrototypeOf(Text).call(this, props));

    defineProperty(assertThisInitialized(_this), "state", {
      currentValue: _this.props.savedValue || '',
      errorMessage: '',
      shouldShowError: false
    });

    var self = assertThisInitialized(_this);

    self.onBlur = _this.onBlur.bind(assertThisInitialized(_this));
    self.onChange = _this.onChange.bind(assertThisInitialized(_this));
    self.onKeyUp = _this.onKeyUp.bind(assertThisInitialized(_this));
    return _this;
  }

  createClass(Text, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          getValidity = _this$props.getValidity,
          name = _this$props.name,
          savedValue = _this$props.savedValue;

      if (savedValue) {
        var _getValidity = getValidity(name, savedValue),
            isError = _getValidity.isError;

        this.setState({
          currentValue: !isError ? savedValue : ''
        });
      }
    }
  }, {
    key: "onBlur",
    value: function onBlur(event) {
      var inputProps = this.props.inputProps;
      var currentValue = this.state.currentValue;

      var _onBlurValidation = onBlurValidation(currentValue, this.props, this.state),
          errorMessage = _onBlurValidation.errorData.errorMessage,
          shouldShowError = _onBlurValidation.shouldShowError; // persist event outside of this handler to a parent component


      event.persist();
      this.setState({
        errorMessage: errorMessage,
        shouldShowError: shouldShowError
      }, function () {
        if (event && inputProps && inputProps.onBlur) {
          inputProps.onBlur(event);
        }
      });
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      var _this2 = this;

      var _this$props2 = this.props,
          inputProps = _this$props2.inputProps,
          name = _this$props2.name,
          onChange = _this$props2.onChange,
          variableType = _this$props2.variableType;
      var eventValue = event.currentTarget.value;
      var possiblyFormattedValue = variableType === PERIOD ? eventValue.toLowerCase() : eventValue;

      var _onChangeValidation = onChangeValidation(possiblyFormattedValue, this.props, this.state),
          errorData = _onChangeValidation.errorData,
          shouldShowError = _onChangeValidation.shouldShowError; // persist event outside of this handler to a parent component


      event.persist();
      this.setState({
        currentValue: possiblyFormattedValue,
        errorMessage: errorData.errorMessage,
        shouldShowError: shouldShowError
      }, function () {
        var shouldValueBeUndefined = variableType !== TEXT && (errorData.isError || eventValue === '') ? true : variableType === TEXT && eventValue === '';
        onChange(name, shouldValueBeUndefined ? undefined : _this2.state.currentValue, errorData);

        if (event && inputProps && inputProps.onChange) {
          inputProps.onChange(event);
        }
      });
    }
  }, {
    key: "onKeyUp",
    value: function onKeyUp(event) {
      var _this$props3 = this.props,
          inputProps = _this$props3.inputProps,
          onKeyUp = _this$props3.onKeyUp;
      if (onKeyUp) onKeyUp(event); // persist event outside of this handler to a parent component

      event.persist();

      if (inputProps && inputProps.onKeyUp) {
        inputProps.onKeyUp(event);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          cleanName = _this$props4.cleanName,
          description = _this$props4.description,
          inputExtraText = _this$props4.inputExtraText,
          inputProps = _this$props4.inputProps,
          variableType = _this$props4.variableType;
      var _this$state = this.state,
          currentValue = _this$state.currentValue,
          errorMessage = _this$state.errorMessage,
          shouldShowError = _this$state.shouldShowError;
      var errorClassName = errorMessage && shouldShowError ? CSS_CLASS_NAMES.fieldInputError : '';
      var inputPropsClassName = inputProps && inputProps.className ? "".concat(inputProps.className) : '';
      return React.createElement("div", {
        className: "".concat(CSS_CLASS_NAMES.field, " ").concat(CSS_CLASS_NAMES.fieldTypeToLower(variableType))
      }, React.createElement("label", {
        className: "".concat(CSS_CLASS_NAMES.fieldLabel)
      }, React.createElement("span", {
        className: "".concat(CSS_CLASS_NAMES.fieldLabelText)
      }, description), React.createElement("input", _extends_1({
        placeholder: description,
        title: description
      }, inputProps, {
        className: singleSpaceString("".concat(CSS_CLASS_NAMES.fieldInput, " ").concat(cleanName, " ").concat(inputPropsClassName, " ").concat(errorClassName)),
        onBlur: this.onBlur,
        onChange: this.onChange,
        onKeyUp: this.onKeyUp,
        type: "text",
        value: currentValue
      })), React.createElement(FieldError, {
        cleanName: cleanName,
        errorMessage: errorMessage,
        shouldShowError: shouldShowError
      })), inputExtraText && React.createElement(ExtraText, {
        text: inputExtraText
      }));
    }
  }]);

  return Text;
}(React.PureComponent);

defineProperty(Text, "propTypes", process.env.NODE_ENV === 'production' ? null : {
  cleanName: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  getValidity: function getValidity() {
    return (typeof bpfrpt_proptype_ValidityFuncType === "function" ? bpfrpt_proptype_ValidityFuncType.isRequired ? bpfrpt_proptype_ValidityFuncType.isRequired : bpfrpt_proptype_ValidityFuncType : propTypes.shape(bpfrpt_proptype_ValidityFuncType).isRequired).apply(this, arguments);
  },
  inputExtraText: function inputExtraText() {
    return (typeof bpfrpt_proptype_FieldExtraTextType === "function" ? bpfrpt_proptype_FieldExtraTextType : propTypes.shape(bpfrpt_proptype_FieldExtraTextType)).apply(this, arguments);
  },
  inputProps: function inputProps() {
    return (typeof bpfrpt_proptype_FieldPropsValueType === "function" ? bpfrpt_proptype_FieldPropsValueType : propTypes.shape(bpfrpt_proptype_FieldPropsValueType)).apply(this, arguments);
  },
  name: propTypes.string.isRequired,
  onChange: function onChange() {
    return (typeof bpfrpt_proptype_OnChangeFuncType === "function" ? bpfrpt_proptype_OnChangeFuncType.isRequired ? bpfrpt_proptype_OnChangeFuncType.isRequired : bpfrpt_proptype_OnChangeFuncType : propTypes.shape(bpfrpt_proptype_OnChangeFuncType).isRequired).apply(this, arguments);
  },
  onKeyUp: function onKeyUp() {
    return (typeof bpfrpt_proptype_ValidateOnKeyUpFuncType === "function" ? bpfrpt_proptype_ValidateOnKeyUpFuncType : propTypes.shape(bpfrpt_proptype_ValidateOnKeyUpFuncType)).apply(this, arguments);
  },
  onValidate: function onValidate() {
    return (typeof bpfrpt_proptype_OnValidateFuncType === "function" ? bpfrpt_proptype_OnValidateFuncType : propTypes.shape(bpfrpt_proptype_OnValidateFuncType)).apply(this, arguments);
  },
  savedValue: propTypes.string.isRequired,
  variableType: function variableType() {
    return (typeof bpfrpt_proptype_FieldEnumType === "function" ? bpfrpt_proptype_FieldEnumType.isRequired ? bpfrpt_proptype_FieldEnumType.isRequired : bpfrpt_proptype_FieldEnumType : propTypes.shape(bpfrpt_proptype_FieldEnumType).isRequired).apply(this, arguments);
  }
});

var YesNo =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits(YesNo, _React$PureComponent);

  function YesNo(props) {
    var _this;

    classCallCheck(this, YesNo);

    _this = possibleConstructorReturn(this, getPrototypeOf(YesNo).call(this, props));

    defineProperty(assertThisInitialized(_this), "state", {
      currentValue: _this.props.savedValue,
      errorMessage: '',
      shouldShowError: false
    });

    defineProperty(assertThisInitialized(_this), "noRef", React.createRef());

    defineProperty(assertThisInitialized(_this), "yesRef", React.createRef());

    var self = assertThisInitialized(_this);

    self.onBlur = _this.onBlur.bind(assertThisInitialized(_this));
    self.onChange = _this.onChange.bind(assertThisInitialized(_this));
    return _this;
  }

  createClass(YesNo, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // This solves a timing issue where some uses of OpenLawForm
      // were not replacing the savedValue value on mount.
      // It only happens when using a PureComponent.
      setTimeout(function () {
        return _this2.radioCheckedByRef();
      }, 0);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.savedValue !== this.props.savedValue) {
        this.setState({
          currentValue: this.props.savedValue
        });
      }
    }
  }, {
    key: "onBlur",
    value: function onBlur(event) {
      var eventValue = event.currentTarget.value;
      var inputProps = this.props.inputProps;

      var _onBlurValidation = onBlurValidation(eventValue, this.props, this.state),
          errorData = _onBlurValidation.errorData,
          shouldShowError = _onBlurValidation.shouldShowError; // persist event outside of this handler to a parent component


      event.persist();
      this.setState({
        currentValue: eventValue,
        errorMessage: errorData.errorMessage,
        shouldShowError: shouldShowError
      }, function () {
        if (event && inputProps && inputProps.onBlur) {
          inputProps.onBlur(event);
        }
      });
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      var eventValue = event.currentTarget.value;
      var _this$props = this.props,
          inputProps = _this$props.inputProps,
          name = _this$props.name,
          onChange = _this$props.onChange;

      var _onChangeValidation = onChangeValidation(eventValue, this.props, this.state),
          errorData = _onChangeValidation.errorData,
          shouldShowError = _onChangeValidation.shouldShowError; // persist event outside of this handler to a parent component


      event.persist();
      this.setState({
        currentValue: eventValue,
        errorMessage: errorData.errorMessage,
        shouldShowError: shouldShowError
      }, function () {
        onChange(name, eventValue, errorData);

        if (event && inputProps && inputProps.onChange) {
          inputProps.onChange(event);
        }
      });
    } // visually update the uncontrolled HTML radio, as we already have the value

  }, {
    key: "radioCheckedByRef",
    value: function radioCheckedByRef() {
      var currentYesRef = this.yesRef.current;
      var currentNoRef = this.noRef.current;

      if (currentYesRef && currentNoRef && this.props.savedValue === 'true') {
        currentYesRef.checked = true;
      }

      if (currentNoRef && currentYesRef && this.props.savedValue === 'false') {
        currentNoRef.checked = true;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          cleanName = _this$props2.cleanName,
          description = _this$props2.description,
          inputExtraText = _this$props2.inputExtraText,
          inputProps = _this$props2.inputProps,
          variableType = _this$props2.variableType;
      var _this$state = this.state,
          errorMessage = _this$state.errorMessage,
          shouldShowError = _this$state.shouldShowError;
      var inputPropsClassName = inputProps && inputProps.className ? "".concat(inputProps.className) : '';
      return React.createElement("div", {
        className: "".concat(CSS_CLASS_NAMES.field, " ").concat(CSS_CLASS_NAMES.fieldTypeToLower(variableType))
      }, React.createElement("label", {
        className: "".concat(CSS_CLASS_NAMES.fieldLabel)
      }, React.createElement("span", {
        className: "".concat(CSS_CLASS_NAMES.fieldLabelText)
      }, description)), React.createElement("div", null, React.createElement("label", null, React.createElement("input", _extends_1({}, inputProps, {
        className: singleSpaceString("".concat(CSS_CLASS_NAMES.fieldRadio, " ").concat(cleanName, " ").concat(inputPropsClassName)),
        name: cleanName,
        onBlur: this.onBlur,
        onChange: this.onChange,
        ref: this.yesRef,
        type: "radio",
        value: "true"
      })), React.createElement("span", null, "Yes")), React.createElement("label", null, React.createElement("input", _extends_1({}, inputProps, {
        className: singleSpaceString("".concat(CSS_CLASS_NAMES.fieldRadio, " ").concat(cleanName, " ").concat(inputPropsClassName)),
        name: cleanName,
        onBlur: this.onBlur,
        onChange: this.onChange,
        ref: this.noRef,
        type: "radio",
        value: "false"
      })), React.createElement("span", null, "No")), React.createElement(FieldError, {
        cleanName: cleanName,
        errorMessage: errorMessage,
        shouldShowError: shouldShowError
      })), inputExtraText && React.createElement(ExtraText, {
        text: inputExtraText
      }));
    }
  }]);

  return YesNo;
}(React.PureComponent);

defineProperty(YesNo, "propTypes", process.env.NODE_ENV === 'production' ? null : {
  cleanName: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  getValidity: function getValidity() {
    return (typeof bpfrpt_proptype_ValidityFuncType === "function" ? bpfrpt_proptype_ValidityFuncType.isRequired ? bpfrpt_proptype_ValidityFuncType.isRequired : bpfrpt_proptype_ValidityFuncType : propTypes.shape(bpfrpt_proptype_ValidityFuncType).isRequired).apply(this, arguments);
  },
  inputExtraText: function inputExtraText() {
    return (typeof bpfrpt_proptype_FieldExtraTextType === "function" ? bpfrpt_proptype_FieldExtraTextType : propTypes.shape(bpfrpt_proptype_FieldExtraTextType)).apply(this, arguments);
  },
  inputProps: function inputProps() {
    return (typeof bpfrpt_proptype_FieldPropsValueType === "function" ? bpfrpt_proptype_FieldPropsValueType : propTypes.shape(bpfrpt_proptype_FieldPropsValueType)).apply(this, arguments);
  },
  name: propTypes.string.isRequired,
  onChange: function onChange() {
    return (typeof bpfrpt_proptype_OnChangeFuncType === "function" ? bpfrpt_proptype_OnChangeFuncType.isRequired ? bpfrpt_proptype_OnChangeFuncType.isRequired : bpfrpt_proptype_OnChangeFuncType : propTypes.shape(bpfrpt_proptype_OnChangeFuncType).isRequired).apply(this, arguments);
  },
  onValidate: function onValidate() {
    return (typeof bpfrpt_proptype_OnValidateFuncType === "function" ? bpfrpt_proptype_OnValidateFuncType : propTypes.shape(bpfrpt_proptype_OnValidateFuncType)).apply(this, arguments);
  },
  savedValue: propTypes.string.isRequired,
  variableType: function variableType() {
    return (typeof bpfrpt_proptype_FieldEnumType === "function" ? bpfrpt_proptype_FieldEnumType.isRequired ? bpfrpt_proptype_FieldEnumType.isRequired : bpfrpt_proptype_FieldEnumType : propTypes.shape(bpfrpt_proptype_FieldEnumType).isRequired).apply(this, arguments);
  }
});

var ExternalSignature =
/*#__PURE__*/
function (_React$PureComponent) {
  inherits(ExternalSignature, _React$PureComponent);

  function ExternalSignature(props) {
    var _this;

    classCallCheck(this, ExternalSignature);

    _this = possibleConstructorReturn(this, getPrototypeOf(ExternalSignature).call(this, props));

    defineProperty(assertThisInitialized(_this), "baseErrorData", {
      elementName: _this.props.cleanName,
      elementType: _this.props.variableType,
      errorMessage: '',
      isError: false,
      value: _this.props.savedValue || ''
    });

    defineProperty(assertThisInitialized(_this), "state", {
      currentValue: '',
      errorMessage: '',
      externalSignatureIdentity: '',
      serviceName: '',
      shouldShowError: false
    });

    var self = assertThisInitialized(_this);

    self.onBlur = _this.onBlur.bind(assertThisInitialized(_this));
    self.onChange = _this.onChange.bind(assertThisInitialized(_this));
    self.onKeyUp = _this.onKeyUp.bind(assertThisInitialized(_this));
    return _this;
  }

  createClass(ExternalSignature, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          getValidity = _this$props.getValidity,
          name = _this$props.name,
          savedValue = _this$props.savedValue;

      if (savedValue) {
        var _getValidity = getValidity(name, savedValue),
            isError = _getValidity.isError;

        var _JSON$parse = JSON.parse(savedValue),
            identity = _JSON$parse.identity,
            serviceName = _JSON$parse.serviceName;

        this.setState({
          currentValue: !isError && identity && identity.email ? identity.email : '',
          serviceName: !isError && serviceName ? serviceName : ''
        });
      }
    }
  }, {
    key: "createExternalSignatureValue",
    value: function createExternalSignatureValue(value, serviceName) {
      try {
        return this.props.openLaw.createExternalSignatureValue('', value, serviceName);
      } catch (error) {
        return '';
      }
    }
  }, {
    key: "onBlur",
    value: function onBlur(event) {
      var inputProps = this.props.inputProps;
      var externalSignatureIdentity = this.state.externalSignatureIdentity;

      var _onBlurValidation = onBlurValidation(externalSignatureIdentity, this.props, this.state),
          errorMessage = _onBlurValidation.errorData.errorMessage,
          shouldShowError = _onBlurValidation.shouldShowError; // persist event outside of this handler to a parent component


      event.persist();
      this.setState({
        errorMessage: errorMessage,
        shouldShowError: shouldShowError
      }, function () {
        if (event && inputProps && inputProps.onBlur) {
          inputProps.onBlur(event);
        }
      });
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      var eventValue = event.currentTarget.value;
      var _this$props2 = this.props,
          inputProps = _this$props2.inputProps,
          name = _this$props2.name,
          onChange = _this$props2.onChange;
      var serviceName = this.state.serviceName;
      var externalSignatureIdentity = this.createExternalSignatureValue(eventValue, serviceName);

      var _onChangeValidation = onChangeValidation(externalSignatureIdentity, this.props, this.state),
          errorData = _onChangeValidation.errorData,
          shouldShowError = _onChangeValidation.shouldShowError; // persist event outside of this handler to a parent component


      event.persist();
      this.setState({
        currentValue: eventValue,
        errorMessage: errorData.errorMessage,
        externalSignatureIdentity: externalSignatureIdentity,
        shouldShowError: shouldShowError
      }, function () {
        onChange(name, externalSignatureIdentity || undefined, errorData);

        if (event && inputProps && inputProps.onChange) {
          inputProps.onChange(event);
        }
      });
    }
  }, {
    key: "onKeyUp",
    value: function onKeyUp(event) {
      var _this$props3 = this.props,
          inputProps = _this$props3.inputProps,
          onKeyUp = _this$props3.onKeyUp;
      if (onKeyUp) onKeyUp(event); // persist event outside of this handler to a parent component

      event.persist();

      if (inputProps && inputProps.onKeyUp) {
        inputProps.onKeyUp(event);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          cleanName = _this$props4.cleanName,
          description = _this$props4.description,
          inputExtraText = _this$props4.inputExtraText,
          inputProps = _this$props4.inputProps,
          variableType = _this$props4.variableType;
      var _this$state = this.state,
          currentValue = _this$state.currentValue,
          errorMessage = _this$state.errorMessage,
          serviceName = _this$state.serviceName,
          shouldShowError = _this$state.shouldShowError;
      var errorClassName = errorMessage && shouldShowError ? CSS_CLASS_NAMES.fieldInputError : '';
      var inputPropsClassName = inputProps && inputProps.className ? "".concat(inputProps.className) : '';
      var signatureServiceDescription = serviceName ? "Sign with ".concat(serviceName) : '';
      return React.createElement("div", {
        className: "".concat(CSS_CLASS_NAMES.field, " ").concat(CSS_CLASS_NAMES.fieldTypeToLower(variableType))
      }, React.createElement("label", {
        className: "".concat(CSS_CLASS_NAMES.fieldLabel)
      }, React.createElement("span", {
        className: "".concat(CSS_CLASS_NAMES.fieldLabelText)
      }, description), React.createElement("input", _extends_1({
        placeholder: description,
        title: description
      }, inputProps, {
        className: singleSpaceString("".concat(CSS_CLASS_NAMES.fieldInput, " ").concat(cleanName, " ").concat(inputPropsClassName, " ").concat(errorClassName)),
        onBlur: this.onBlur,
        onChange: this.onChange,
        onKeyUp: this.onKeyUp,
        type: "email",
        value: currentValue
      })), React.createElement(FieldError, {
        cleanName: cleanName,
        errorMessage: errorMessage,
        shouldShowError: shouldShowError
      }), signatureServiceDescription && React.createElement("small", null, signatureServiceDescription)), inputExtraText && React.createElement(ExtraText, {
        text: inputExtraText
      }));
    }
  }]);

  return ExternalSignature;
}(React.PureComponent);

defineProperty(ExternalSignature, "propTypes", process.env.NODE_ENV === 'production' ? null : {
  cleanName: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  getValidity: function getValidity() {
    return (typeof bpfrpt_proptype_ValidityFuncType === "function" ? bpfrpt_proptype_ValidityFuncType.isRequired ? bpfrpt_proptype_ValidityFuncType.isRequired : bpfrpt_proptype_ValidityFuncType : propTypes.shape(bpfrpt_proptype_ValidityFuncType).isRequired).apply(this, arguments);
  },
  inputExtraText: function inputExtraText() {
    return (typeof bpfrpt_proptype_FieldExtraTextType === "function" ? bpfrpt_proptype_FieldExtraTextType : propTypes.shape(bpfrpt_proptype_FieldExtraTextType)).apply(this, arguments);
  },
  inputProps: function inputProps() {
    return (typeof bpfrpt_proptype_FieldPropsValueType === "function" ? bpfrpt_proptype_FieldPropsValueType : propTypes.shape(bpfrpt_proptype_FieldPropsValueType)).apply(this, arguments);
  },
  name: propTypes.string.isRequired,
  onChange: function onChange() {
    return (typeof bpfrpt_proptype_OnChangeFuncType === "function" ? bpfrpt_proptype_OnChangeFuncType.isRequired ? bpfrpt_proptype_OnChangeFuncType.isRequired : bpfrpt_proptype_OnChangeFuncType : propTypes.shape(bpfrpt_proptype_OnChangeFuncType).isRequired).apply(this, arguments);
  },
  onKeyUp: function onKeyUp() {
    return (typeof bpfrpt_proptype_ValidateOnKeyUpFuncType === "function" ? bpfrpt_proptype_ValidateOnKeyUpFuncType : propTypes.shape(bpfrpt_proptype_ValidateOnKeyUpFuncType)).apply(this, arguments);
  },
  onValidate: function onValidate() {
    return (typeof bpfrpt_proptype_OnValidateFuncType === "function" ? bpfrpt_proptype_OnValidateFuncType : propTypes.shape(bpfrpt_proptype_OnValidateFuncType)).apply(this, arguments);
  },
  openLaw: propTypes.object.isRequired,
  savedValue: propTypes.string.isRequired,
  variableType: function variableType() {
    return (typeof bpfrpt_proptype_FieldEnumType === "function" ? bpfrpt_proptype_FieldEnumType.isRequired ? bpfrpt_proptype_FieldEnumType.isRequired : bpfrpt_proptype_FieldEnumType : propTypes.shape(bpfrpt_proptype_FieldEnumType).isRequired).apply(this, arguments);
  }
});

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
// keep React rendering happy with the same Array reference, if not changed.
var getChoiceValuesCached = cacheValue(deepEqual_1); // keep React rendering happy with the same Object reference, if not changed.

var getInputPropsCached = cacheValue(deepEqual_1);
var variableCache = {};
var executionResultCurrent;
var openLawCached;

var getValidity = function getValidity(name, value) {
  return openLawCached.checkValidity(variableCache[name], value, executionResultCurrent);
};

var getVariableData = function getVariableData(variable, openLaw) {
  return {
    cleanName: openLaw.getCleanName(variable),
    description: openLaw.getDescription(variable),
    name: openLaw.getName(variable)
  };
};

var InputRenderer = function InputRenderer(props) {
  var apiClient = props.apiClient,
      executionResult = props.executionResult,
      inputExtraText = props.inputExtraText,
      inputProps = props.inputProps,
      onChangeFunction = props.onChangeFunction,
      onValidate = props.onValidate,
      onKeyUp = props.onKeyUp,
      openLaw = props.openLaw,
      savedValue = props.savedValue,
      variable = props.variable;

  var _getVariableData = getVariableData(variable, openLaw),
      cleanName = _getVariableData.cleanName,
      description = _getVariableData.description,
      name = _getVariableData.name;

  var variableType = openLaw.getType(variable); // store latest executionResult for access outside React

  executionResultCurrent = executionResult; // store openLaw for access outside React

  if (!openLawCached) openLawCached = openLaw; // store { [name]: variable } for access outside React

  variableCache[name] = variable; // merge "all" `inputProps` ("*") with a specific type's props (e.g. "Address")

  var inputPropsMerged = inputProps && ELEMENT_INPUT_TYPES.reduce(function (result, key) {
    return _objectSpread$4({}, result, defineProperty({}, key, _objectSpread$4({}, inputProps['*'], {}, inputProps[key])));
  }, {}); // cache the inputProps

  var inputPropsCached = getInputPropsCached(inputPropsMerged); // Choice type detection is different

  if (openLaw.isChoiceType(variable, executionResult)) {
    var choiceValues = getChoiceValuesCached(openLaw.getChoiceValues(variable, executionResult));
    return React.createElement(Choice, {
      choiceValues: choiceValues,
      cleanName: cleanName,
      description: description,
      getValidity: getValidity,
      inputExtraText: inputExtraText,
      inputProps: inputPropsCached && inputPropsCached.Choice,
      name: name,
      onChange: onChangeFunction,
      onValidate: onValidate,
      savedValue: savedValue,
      variableType: "Choice"
    });
  }

  switch (variableType) {
    case 'Address':
      return React.createElement(Address, {
        apiClient: apiClient // for API call to Google for geo data
        ,
        cleanName: cleanName,
        description: description,
        inputExtraText: inputExtraText,
        inputProps: inputPropsCached && inputPropsCached.Address,
        name: name,
        onChange: onChangeFunction,
        onKeyUp: onKeyUp,
        onValidate: onValidate,
        openLaw: openLaw,
        savedValue: savedValue ? openLaw.getFormattedAddress(openLaw.getAddress(savedValue)) : '',
        variableType: variableType
      });

    case 'Date':
      return React.createElement(DatePicker, {
        cleanName: cleanName,
        description: description,
        getValidity: getValidity,
        inputExtraText: inputExtraText,
        inputProps: inputPropsCached && inputPropsCached.Date,
        name: name,
        onChange: onChangeFunction,
        onValidate: onValidate,
        savedValue: savedValue,
        variableType: variableType
      });

    case 'DateTime':
      return React.createElement(DatePicker, {
        cleanName: cleanName,
        description: description,
        getValidity: getValidity,
        inputExtraText: inputExtraText,
        inputProps: inputPropsCached && inputPropsCached.DateTime,
        name: name,
        onChange: onChangeFunction,
        onValidate: onValidate,
        savedValue: savedValue,
        variableType: variableType
      });

    case 'EthAddress':
      return React.createElement(Text, {
        cleanName: cleanName,
        description: description,
        getValidity: getValidity,
        inputExtraText: inputExtraText,
        inputProps: inputPropsCached && inputPropsCached.EthAddress,
        name: name,
        onChange: onChangeFunction,
        onKeyUp: onKeyUp,
        onValidate: onValidate,
        savedValue: savedValue,
        variableType: variableType
      });

    case 'ExternalSignature':
      return React.createElement(ExternalSignature, {
        cleanName: cleanName,
        description: description,
        getValidity: getValidity,
        inputExtraText: inputExtraText,
        inputProps: inputPropsCached && inputPropsCached.ExternalSignature,
        name: name,
        onChange: onChangeFunction,
        onKeyUp: onKeyUp,
        onValidate: onValidate,
        openLaw: openLaw,
        savedValue: savedValue,
        variableType: variableType
      });

    case 'Identity':
      return React.createElement(Identity, {
        cleanName: cleanName,
        description: description,
        getValidity: getValidity,
        inputExtraText: inputExtraText,
        inputProps: inputPropsCached && inputPropsCached.Identity,
        name: name,
        onChange: onChangeFunction,
        onKeyUp: onKeyUp,
        onValidate: onValidate,
        openLaw: openLaw,
        savedValue: savedValue,
        variableType: variableType
      });

    case 'Image':
      return React.createElement(ImageInput, {
        cleanName: cleanName,
        description: description,
        getValidity: getValidity,
        inputExtraText: inputExtraText,
        inputProps: inputPropsCached && inputPropsCached.Image,
        name: name,
        onChange: onChangeFunction,
        onValidate: onValidate,
        savedValue: savedValue,
        variableType: variableType
      });

    case 'LargeText':
      return React.createElement(LargeText, {
        cleanName: cleanName,
        description: description,
        getValidity: getValidity,
        inputExtraText: inputExtraText,
        inputProps: inputPropsCached && inputPropsCached.LargeText,
        name: name,
        onChange: onChangeFunction,
        onValidate: onValidate,
        savedValue: savedValue,
        variableType: variableType
      });

    case 'Number':
      return React.createElement(NumberInput, {
        cleanName: cleanName,
        description: description,
        getValidity: getValidity,
        inputExtraText: inputExtraText,
        inputProps: inputPropsCached && inputPropsCached.Number,
        name: name,
        onChange: onChangeFunction,
        onKeyUp: onKeyUp,
        onValidate: onValidate,
        savedValue: savedValue,
        variableType: variableType
      });

    case 'Period':
      return React.createElement(Text, {
        cleanName: cleanName,
        description: description,
        getValidity: getValidity,
        inputExtraText: inputExtraText,
        inputProps: inputPropsCached && inputPropsCached.Period,
        name: name,
        onChange: onChangeFunction,
        onKeyUp: onKeyUp,
        onValidate: onValidate,
        savedValue: savedValue,
        variableType: variableType
      });

    case 'YesNo':
      return React.createElement(YesNo, {
        cleanName: cleanName,
        description: description,
        getValidity: getValidity,
        inputExtraText: inputExtraText,
        inputProps: inputPropsCached && inputPropsCached.YesNo,
        name: name,
        onChange: onChangeFunction,
        onValidate: onValidate,
        savedValue: savedValue,
        variableType: variableType
      });

    default:
      return React.createElement(Text, {
        cleanName: cleanName,
        description: description,
        getValidity: getValidity,
        inputExtraText: inputExtraText,
        inputProps: inputPropsCached && inputPropsCached.Text,
        name: name,
        onChange: onChangeFunction,
        onKeyUp: onKeyUp,
        onValidate: onValidate,
        savedValue: savedValue,
        variableType: variableType
      });
  }
};
InputRenderer.propTypes = process.env.NODE_ENV === 'production' ? null : {
  apiClient: propTypes.object.isRequired,
  // opt-out of type checker until we export its Flow types
  executionResult: propTypes.shape({}).isRequired,
  inputExtraText: function inputExtraText() {
    return (typeof bpfrpt_proptype_FieldExtraTextType === "function" ? bpfrpt_proptype_FieldExtraTextType : propTypes.shape(bpfrpt_proptype_FieldExtraTextType)).apply(this, arguments);
  },
  inputProps: function inputProps() {
    return (typeof bpfrpt_proptype_FieldPropsType === "function" ? bpfrpt_proptype_FieldPropsType : propTypes.shape(bpfrpt_proptype_FieldPropsType)).apply(this, arguments);
  },
  onKeyUp: function onKeyUp() {
    return (typeof bpfrpt_proptype_ValidateOnKeyUpFuncType === "function" ? bpfrpt_proptype_ValidateOnKeyUpFuncType : propTypes.shape(bpfrpt_proptype_ValidateOnKeyUpFuncType)).apply(this, arguments);
  },
  onChangeFunction: function onChangeFunction() {
    return (typeof bpfrpt_proptype_OnChangeFuncType === "function" ? bpfrpt_proptype_OnChangeFuncType.isRequired ? bpfrpt_proptype_OnChangeFuncType.isRequired : bpfrpt_proptype_OnChangeFuncType : propTypes.shape(bpfrpt_proptype_OnChangeFuncType).isRequired).apply(this, arguments);
  },
  onValidate: function onValidate() {
    return (typeof bpfrpt_proptype_OnValidateFuncType === "function" ? bpfrpt_proptype_OnValidateFuncType : propTypes.shape(bpfrpt_proptype_OnValidateFuncType)).apply(this, arguments);
  },
  openLaw: propTypes.object.isRequired,
  // opt-out of type checker
  savedValue: propTypes.string.isRequired,
  variable: propTypes.shape({}).isRequired
};

var Structure =
/*#__PURE__*/
function (_React$Component) {
  inherits(Structure, _React$Component);

  function Structure() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck(this, Structure);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn(this, (_getPrototypeOf2 = getPrototypeOf(Structure)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty(assertThisInitialized(_this), "openLaw", _this.props.openLaw);

    defineProperty(assertThisInitialized(_this), "state", {
      currentValue: _this.props.savedValue
    });

    defineProperty(assertThisInitialized(_this), "onChange", function (key, value, errorData) {
      var _this$props = _this.props,
          executionResult = _this$props.executionResult,
          onChange = _this$props.onChange,
          variable = _this$props.variable;

      var variableName = _this.openLaw.getName(variable);

      try {
        var savedValue = _this.props.savedValue;

        var currentValue = _this.openLaw.setStructureFieldValue(variable, key, value, savedValue || undefined, executionResult);

        _this.setState({
          currentValue: currentValue
        }, function () {
          onChange(variableName, currentValue, errorData);
        });
      } catch (error) {
        onChange(variableName, _this.state.currentValue || undefined, errorData);
      }
    });

    return _this;
  }

  createClass(Structure, [{
    key: "renderFields",
    value: function renderFields(subVariable) {
      var _this$props2 = this.props,
          apiClient = _this$props2.apiClient,
          executionResult = _this$props2.executionResult,
          inputExtraTextMap = _this$props2.inputExtraTextMap,
          inputProps = _this$props2.inputProps,
          onValidate = _this$props2.onValidate,
          variable = _this$props2.variable;
      var savedValueProp = this.props.savedValue === '' ? undefined : this.props.savedValue;
      var structureFieldValue = this.openLaw.getStructureFieldValue(variable, subVariable, savedValueProp, executionResult);
      var name = this.openLaw.getName(subVariable);
      var inputExtraText = inputExtraTextMap && inputExtraTextMap[name];
      return React.createElement("div", {
        className: CSS_CLASS_NAMES.structureRow,
        key: name
      }, React.createElement(InputRenderer, {
        apiClient: apiClient,
        executionResult: executionResult,
        inputExtraText: inputExtraText,
        inputProps: inputProps,
        onChangeFunction: this.onChange,
        onValidate: onValidate,
        openLaw: this.openLaw,
        savedValue: structureFieldValue || '',
        variable: subVariable
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          executionResult = _this$props3.executionResult,
          inputExtraTextMap = _this$props3.inputExtraTextMap,
          variable = _this$props3.variable;
      var cleanName = this.openLaw.getCleanName(variable);
      var fields = this.openLaw.getStructureFieldDefinitions(variable, executionResult).map(function (field) {
        return _this2.renderFields(field);
      });
      var structureExtraText = inputExtraTextMap && inputExtraTextMap[this.openLaw.getName(variable)];
      return React.createElement("div", {
        className: singleSpaceString("".concat(CSS_CLASS_NAMES.structure, " ").concat(cleanName))
      }, structureExtraText && React.createElement(ExtraText, {
        text: structureExtraText
      }), fields);
    }
  }]);

  return Structure;
}(React.Component);

defineProperty(Structure, "propTypes", process.env.NODE_ENV === 'production' ? null : {
  apiClient: propTypes.object.isRequired,
  // opt-out of type checker until we export its Flow types
  executionResult: propTypes.shape({}).isRequired,
  inputExtraTextMap: function inputExtraTextMap() {
    return (typeof bpfrpt_proptype_FieldExtraTextMapType === "function" ? bpfrpt_proptype_FieldExtraTextMapType : propTypes.shape(bpfrpt_proptype_FieldExtraTextMapType)).apply(this, arguments);
  },
  inputProps: function inputProps() {
    return (typeof bpfrpt_proptype_FieldPropsType === "function" ? bpfrpt_proptype_FieldPropsType : propTypes.shape(bpfrpt_proptype_FieldPropsType)).apply(this, arguments);
  },
  onChange: function onChange() {
    return (typeof bpfrpt_proptype_OnChangeFuncType === "function" ? bpfrpt_proptype_OnChangeFuncType.isRequired ? bpfrpt_proptype_OnChangeFuncType.isRequired : bpfrpt_proptype_OnChangeFuncType : propTypes.shape(bpfrpt_proptype_OnChangeFuncType).isRequired).apply(this, arguments);
  },
  onValidate: function onValidate() {
    return (typeof bpfrpt_proptype_OnValidateFuncType === "function" ? bpfrpt_proptype_OnValidateFuncType : propTypes.shape(bpfrpt_proptype_OnValidateFuncType)).apply(this, arguments);
  },
  openLaw: propTypes.object.isRequired,
  // opt-out of type checker
  savedValue: propTypes.string.isRequired,
  variable: propTypes.shape({}).isRequired
});

var uuidv4 = require('uuid/v4');
var Collection =
/*#__PURE__*/
function (_React$Component) {
  inherits(Collection, _React$Component);

  function Collection(props) {
    var _this;

    classCallCheck(this, Collection);

    _this = possibleConstructorReturn(this, getPrototypeOf(Collection).call(this, props));

    defineProperty(assertThisInitialized(_this), "focusIndex", null);

    defineProperty(assertThisInitialized(_this), "openLaw", _this.props.openLaw);

    defineProperty(assertThisInitialized(_this), "uniqueCollectionIds", []);

    defineProperty(assertThisInitialized(_this), "state", {
      currentValue: _this.props.savedValue
    });

    defineProperty(assertThisInitialized(_this), "onChange", function (key, value, errorData) {
      var _this$props = _this.props,
          executionResult = _this$props.executionResult,
          onChange = _this$props.onChange,
          savedValue = _this$props.savedValue,
          variable = _this$props.variable;

      var variableName = _this.openLaw.getName(variable);

      var index = parseInt(key.replace("".concat(variableName, "_"), ''));

      try {
        var currentValue = _this.openLaw.setElementToCollection(value, index, variable, savedValue, executionResult);

        _this.setState({
          currentValue: currentValue
        }, function () {
          onChange(variableName, currentValue, errorData);
        });
      } catch (error) {
        var currentValueUnsetAtIndex = _this.openLaw.setElementToCollection(undefined, index, variable, savedValue, executionResult);

        _this.setState({
          currentValue: currentValueUnsetAtIndex
        }, function () {
          onChange(variableName, _this.state.currentValue, errorData);
        });
      }
    });

    var self = assertThisInitialized(_this);

    self.add = _this.add.bind(assertThisInitialized(_this));
    self.isCollectionDisabled = _this.isCollectionDisabled.bind(assertThisInitialized(_this));
    self.onKeyUp = _this.onKeyUp.bind(assertThisInitialized(_this));
    return _this;
  }

  createClass(Collection, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.savedValue !== this.props.savedValue) {
        this.handleElementFocus(this.focusIndex);
      }
    }
  }, {
    key: "add",
    value: function add() {
      var _this$props2 = this.props,
          executionResult = _this$props2.executionResult,
          onChange = _this$props2.onChange,
          savedValue = _this$props2.savedValue,
          variable = _this$props2.variable;
      var variableName = this.openLaw.getName(variable);
      var newValue = this.openLaw.addElementToCollection(variable, savedValue, executionResult);
      var errorData = {
        elementName: this.openLaw.getCleanName(variable),
        elementType: 'Collection',
        eventType: 'change',
        errorMessage: '',
        isError: false,
        value: newValue
      };
      onChange(variableName, newValue, errorData);
      var size = this.openLaw.getCollectionSize(variable, newValue, executionResult);
      this.focusIndex = size - 1;
    }
  }, {
    key: "addUniqueCollectionId",
    value: function addUniqueCollectionId(id) {
      this.uniqueCollectionIds = this.uniqueCollectionIds.concat([id]);
      return this.uniqueCollectionIds;
    }
  }, {
    key: "handleElementFocus",
    value: function handleElementFocus(updatedIndex) {
      if (updatedIndex === null) return;
      var index = updatedIndex >= 0 ? updatedIndex : -1;
      if (index === -1) return;
      var element = document.querySelector(".".concat(this.openLaw.getCleanName(this.props.variable), "_").concat(index));
      if (element) element.focus(); // reset

      this.focusIndex = null;
    }
  }, {
    key: "isCollectionDisabled",
    value: function isCollectionDisabled() {
      var inputProps = this.props.inputProps;
      return inputProps && inputProps.Collection && inputProps.Collection.disabled ? true : inputProps && inputProps['*'] && inputProps['*'].disabled ? true : false;
    }
  }, {
    key: "onKeyUp",
    value: function onKeyUp(event) {
      // do nothing if the event was already processed
      if (event.defaultPrevented) {
        return;
      }

      if (event.key === 'Enter') {
        this.add();
      }

      event.preventDefault();
    }
  }, {
    key: "remove",
    value: function remove(index) {
      var _this$props3 = this.props,
          executionResult = _this$props3.executionResult,
          onChange = _this$props3.onChange,
          savedValue = _this$props3.savedValue,
          variable = _this$props3.variable;
      var variableName = this.openLaw.getName(variable);
      var newValue = this.openLaw.removeElementFromCollection(index, variable, executionResult, savedValue);
      var errorData = {
        elementName: this.openLaw.getCleanName(variable),
        elementType: 'Collection',
        eventType: 'change',
        errorMessage: '',
        isError: false,
        value: newValue
      }; // delete client-side unique React key

      this.removeUniqueCollectionId(index);
      onChange(variableName, newValue, errorData);
    }
  }, {
    key: "removeUniqueCollectionId",
    value: function removeUniqueCollectionId(removedIndex) {
      this.uniqueCollectionIds = this.uniqueCollectionIds.filter(function (item, index) {
        if (index !== removedIndex) return item;
      });
      return this.uniqueCollectionIds;
    }
  }, {
    key: "renderFields",
    value: function renderFields(index) {
      var _this2 = this;

      var subVariable = this.openLaw.createVariableFromCollection(this.props.variable, index, this.props.executionResult);
      var savedValue = this.openLaw.getCollectionElementValue(this.props.variable, this.props.executionResult, this.props.savedValue, index);
      var _this$props4 = this.props,
          executionResult = _this$props4.executionResult,
          inputExtraTextMap = _this$props4.inputExtraTextMap,
          inputProps = _this$props4.inputProps,
          variable = _this$props4.variable;
      var subVariableExtraText = inputExtraTextMap && inputExtraTextMap["".concat(this.openLaw.getName(variable), " *")]; // append new client-side unique React key, if none exists

      if (!this.uniqueCollectionIds[index]) this.addUniqueCollectionId(uuidv4());
      var assistiveTextRemoveButton = "Remove Collection item ".concat(index, " for ").concat(this.openLaw.getDescription(subVariable));
      return React.createElement("div", {
        className: CSS_CLASS_NAMES.collectionRow,
        key: this.uniqueCollectionIds[index]
      }, this.openLaw.isStructuredType(subVariable, executionResult) ? React.createElement(Structure, {
        apiClient: this.props.apiClient // for API call to Google for geo data (if generating an Address)
        ,
        executionResult: executionResult,
        inputExtraTextMap: inputExtraTextMap,
        inputProps: inputProps,
        key: "".concat(this.openLaw.getCleanName(subVariable), "-collection"),
        onChange: this.onChange,
        onValidate: this.props.onValidate,
        openLaw: this.openLaw,
        savedValue: savedValue,
        variable: subVariable
      }) : React.createElement(InputRenderer, {
        apiClient: this.props.apiClient,
        executionResult: this.props.executionResult,
        inputExtraText: subVariableExtraText,
        inputProps: inputProps,
        onChangeFunction: this.onChange,
        onKeyUp: this.onKeyUp,
        onValidate: this.props.onValidate,
        openLaw: this.openLaw,
        savedValue: savedValue,
        variable: subVariable
      }), React.createElement("button", {
        "aria-hidden": "true",
        className: CSS_CLASS_NAMES.collectionButtonRemove,
        disabled: this.isCollectionDisabled(),
        onClick: function onClick() {
          return !_this2.isCollectionDisabled() && _this2.remove(index);
        },
        title: assistiveTextRemoveButton,
        type: "button"
      }, React.createElement(TimesSVG, null), React.createElement("span", null, assistiveTextRemoveButton)));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props5 = this.props,
          executionResult = _this$props5.executionResult,
          inputExtraTextMap = _this$props5.inputExtraTextMap,
          savedValue = _this$props5.savedValue,
          variable = _this$props5.variable;
      var cleanName = this.openLaw.getCleanName(variable);
      var description = this.openLaw.getDescription(variable);
      var collectionSize = this.openLaw.getCollectionSize(variable, savedValue, executionResult);
      var collectionExtraText = inputExtraTextMap && inputExtraTextMap[this.openLaw.getName(variable)];
      var fields = [];

      for (var index = 0; index < collectionSize; index++) {
        fields.push(this.renderFields(index));
      }

      return React.createElement("div", {
        className: singleSpaceString("".concat(CSS_CLASS_NAMES.collection, " ").concat(cleanName))
      }, React.createElement("div", {
        className: CSS_CLASS_NAMES.collectionDescription
      }, React.createElement("span", null, description)), collectionExtraText && React.createElement(ExtraText, {
        text: collectionExtraText
      }), fields, React.createElement("button", {
        className: "".concat(CSS_CLASS_NAMES.button),
        disabled: this.isCollectionDisabled(),
        onClick: this.isCollectionDisabled() ? null : this.add,
        onKeyDown: function onKeyDown(event) {
          if (_this3.isCollectionDisabled()) return; // no collisions with onKeyUp event
          // on input (after focus)

          if (event.key === 'Enter') {
            event.preventDefault();
          }
        },
        onKeyUp: function onKeyUp(event) {
          if (event.key === 'Enter') {
            if (_this3.isCollectionDisabled()) return; // no collisions with onKeyUp event
            // on input (after focus)

            event.preventDefault(); // click the "Add" button

            event.target.click();
          }
        },
        type: "button"
      }, "Add"));
    }
  }]);

  return Collection;
}(React.Component);

defineProperty(Collection, "propTypes", process.env.NODE_ENV === 'production' ? null : {
  apiClient: propTypes.object.isRequired,
  // opt-out of type checker until we export its Flow types
  executionResult: propTypes.shape({}).isRequired,
  inputExtraTextMap: function inputExtraTextMap() {
    return (typeof bpfrpt_proptype_FieldExtraTextMapType === "function" ? bpfrpt_proptype_FieldExtraTextMapType : propTypes.shape(bpfrpt_proptype_FieldExtraTextMapType)).apply(this, arguments);
  },
  inputProps: function inputProps() {
    return (typeof bpfrpt_proptype_FieldPropsType === "function" ? bpfrpt_proptype_FieldPropsType : propTypes.shape(bpfrpt_proptype_FieldPropsType)).apply(this, arguments);
  },
  onChange: function onChange() {
    return (typeof bpfrpt_proptype_OnChangeFuncType === "function" ? bpfrpt_proptype_OnChangeFuncType.isRequired ? bpfrpt_proptype_OnChangeFuncType.isRequired : bpfrpt_proptype_OnChangeFuncType : propTypes.shape(bpfrpt_proptype_OnChangeFuncType).isRequired).apply(this, arguments);
  },
  onValidate: function onValidate() {
    return (typeof bpfrpt_proptype_OnValidateFuncType === "function" ? bpfrpt_proptype_OnValidateFuncType : propTypes.shape(bpfrpt_proptype_OnValidateFuncType)).apply(this, arguments);
  },
  openLaw: propTypes.object.isRequired,
  // opt-out of type checker
  savedValue: propTypes.string.isRequired,
  variable: propTypes.shape({}).isRequired
});

var TimesSVG = function TimesSVG(props) {
  return React.createElement("svg", _extends_1({
    height: "12",
    width: "12"
  }, props, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 384 512"
  }), React.createElement("path", {
    fill: "currentColor",
    d: "M323.1 441l53.9-53.9c9.4-9.4 9.4-24.5 0-33.9L279.8 256l97.2-97.2c9.4-9.4 9.4-24.5 0-33.9L323.1 71c-9.4-9.4-24.5-9.4-33.9 0L192 168.2 94.8 71c-9.4-9.4-24.5-9.4-33.9 0L7 124.9c-9.4 9.4-9.4 24.5 0 33.9l97.2 97.2L7 353.2c-9.4 9.4-9.4 24.5 0 33.9L60.9 441c9.4 9.4 24.5 9.4 33.9 0l97.2-97.2 97.2 97.2c9.3 9.3 24.5 9.3 33.9 0z"
  }));
};

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var getVariablesForSection = function getVariablesForSection(sectionVariables, variables) {
  return sectionVariables.map(function (name) {
    return variables[variables.indexOf(name)];
  }) // get rid of any `undefined` slots
  .filter(function (section) {
    return section && true;
  });
};

var getUnsectionedTitle = function getUnsectionedTitle(unsectionedTitle) {
  // set to string null value by the user
  if (unsectionedTitle === '') return ''; // there's a value set by the user

  if (unsectionedTitle) return unsectionedTitle; // default

  return 'Miscellaneous';
};

var GetSections = function GetSections(variables, sectionVariables, sections, config) {
  var sectionTransform = config.sectionTransform,
      sectionVariablesMap = config.sectionVariablesMap;
  var mappedSections = sections.map(function (section, index) {
    var sectionVariablesFromConfig = sectionVariablesMap && sectionVariablesMap(section, index, variables);

    var _ref = sectionVariablesFromConfig ? Object.keys(sectionVariablesFromConfig) : [],
        _ref2 = slicedToArray(_ref, 1),
        userSectionKey = _ref2[0];

    var currentSectionVariables = sectionVariablesFromConfig && Object.keys(sectionVariablesFromConfig).length ? // user provided an object with the same shape via props
    getVariablesForSection(sectionVariablesFromConfig[userSectionKey], variables) // normal
    : getVariablesForSection(sectionVariables[section], variables);

    if (currentSectionVariables.length) {
      // user has a desired section data shape for display purposes
      if (sectionTransform) {
        return _objectSpread$5({}, sectionTransform(section, index), {
          variables: currentSectionVariables
        });
      }

      return {
        section: section,
        variables: currentSectionVariables
      };
    }
  }) // get rid of any `undefined` slots
  .filter(function (section) {
    return section && true;
  });
  var unsectionedVariables = variables.filter(function (v) {
    var flattedSectionVariables = mappedSections.reduce(function (acc, o) {
      return acc.concat(o.variables);
    }, []);
    return flattedSectionVariables.indexOf(v) === -1;
  }); // give the unsectioned variables a home in their own section

  if (unsectionedVariables.length) {
    var sectionData; // user has a desired section data shape for display purposes

    if (sectionTransform) {
      var index = mappedSections.length;
      sectionData = _objectSpread$5({}, sectionTransform(getUnsectionedTitle(config.unsectionedTitle), index), {
        variables: unsectionedVariables
      });
    } else {
      sectionData = {
        section: getUnsectionedTitle(config.unsectionedTitle),
        variables: unsectionedVariables
      };
    }

    mappedSections.push(sectionData);
  }

  return mappedSections;
};

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(Object(source), true).forEach(function (key) { defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var renderInputs = function renderInputs(props) {
  var apiClient = props.apiClient,
      executionResult = props.executionResult,
      inputExtraTextMap = props.inputExtraTextMap,
      inputProps = props.inputProps,
      onChangeFunction = props.onChangeFunction,
      onValidate = props.onValidate,
      openLaw = props.openLaw,
      parameters = props.parameters,
      variable = props.variable;
  var savedValue = parameters[openLaw.getName(variable)] || '';
  var cleanName = openLaw.getCleanName(variable);
  var extraText = inputExtraTextMap && inputExtraTextMap[openLaw.getName(variable)]; // Structure: can contain all types of inputs in <InputRenderer />

  if (openLaw.isStructuredType(variable, executionResult)) {
    return React.createElement(Structure, {
      apiClient: apiClient,
      executionResult: executionResult,
      inputExtraTextMap: inputExtraTextMap,
      inputProps: inputProps,
      key: "".concat(cleanName, "-collection"),
      onChange: onChangeFunction,
      onValidate: onValidate,
      openLaw: openLaw,
      savedValue: savedValue,
      variable: variable
    });
  } // Collection: can contain a <Structure />, and all types of inputs in <InputRenderer />


  if (openLaw.getType(variable) === 'Collection') {
    return React.createElement(Collection, {
      apiClient: apiClient,
      executionResult: executionResult,
      inputExtraTextMap: inputExtraTextMap,
      inputProps: inputProps,
      key: "".concat(cleanName, "-collection"),
      onChange: onChangeFunction,
      onValidate: onValidate,
      openLaw: openLaw,
      savedValue: savedValue || openLaw.getCollectionValue(variable, executionResult, ''),
      variable: variable
    });
  }

  return React.createElement(InputRenderer, {
    apiClient: apiClient,
    executionResult: executionResult,
    inputExtraText: extraText,
    inputProps: inputProps,
    key: "".concat(cleanName, "-input"),
    onChangeFunction: onChangeFunction,
    onValidate: onValidate,
    openLaw: openLaw,
    savedValue: savedValue,
    variable: variable
  });
};

renderInputs.propTypes = process.env.NODE_ENV === 'production' ? null : {
  apiClient: propTypes.object,
  // opt-out of type checker until we export flow types for APIClient
  executionResult: propTypes.shape({}),
  inputExtraTextMap: function inputExtraTextMap() {
    return (typeof bpfrpt_proptype_FieldExtraTextMapType === "function" ? bpfrpt_proptype_FieldExtraTextMapType : propTypes.shape(bpfrpt_proptype_FieldExtraTextMapType)).apply(this, arguments);
  },
  inputProps: function inputProps() {
    return (typeof bpfrpt_proptype_FieldPropsType === "function" ? bpfrpt_proptype_FieldPropsType : propTypes.shape(bpfrpt_proptype_FieldPropsType)).apply(this, arguments);
  },
  onChangeFunction: function onChangeFunction() {
    return (typeof bpfrpt_proptype_OnChangeFuncType === "function" ? bpfrpt_proptype_OnChangeFuncType : propTypes.shape(bpfrpt_proptype_OnChangeFuncType)).apply(this, arguments);
  },
  onValidate: function onValidate() {
    return (typeof bpfrpt_proptype_OnValidateFuncType === "function" ? bpfrpt_proptype_OnValidateFuncType : propTypes.shape(bpfrpt_proptype_OnValidateFuncType)).apply(this, arguments);
  },
  openLaw: propTypes.object,
  // opt-out of type checker
  parameters: propTypes.objectOf(function (props, propName, componentName) {
    if (!Object.prototype.hasOwnProperty.call(props, propName)) {
      throw new Error("Prop `".concat(propName, "` has type 'any' or 'mixed', but was not provided to `").concat(componentName, "`. Pass undefined or any other value."));
    }
  }),
  renderSections: propTypes.func,
  sections: propTypes.arrayOf(function (props, propName, componentName) {
    if (!Object.prototype.hasOwnProperty.call(props, propName)) {
      throw new Error("Prop `".concat(propName, "` has type 'any' or 'mixed', but was not provided to `").concat(componentName, "`. Pass undefined or any other value."));
    }
  }),
  sectionTransform: propTypes.func,
  sectionVariablesMap: propTypes.func,
  unsectionedTitle: propTypes.string,
  variables: propTypes.arrayOf(propTypes.shape({}).isRequired),
  variable: propTypes.shape({}).isRequired
};

var renderSectionsAndInputs = function renderSectionsAndInputs(props) {
  var executionResult = props.executionResult,
      _props$openLaw = props.openLaw,
      openLaw = _props$openLaw === void 0 ? {} : _props$openLaw,
      renderSections = props.renderSections,
      sections = props.sections,
      sectionTransform = props.sectionTransform,
      sectionVariablesMap = props.sectionVariablesMap,
      unsectionedTitle = props.unsectionedTitle,
      variablesMap = props.variablesMap,
      variableObjects = props.variableObjects;
  var sectionVariables = openLaw.getVariableSections(executionResult);
  var variableNames = variableObjects.map(function (v) {
    return openLaw.getName(v);
  });
  var getSectionsConfig = {
    sectionTransform: sectionTransform,
    sectionVariablesMap: sectionVariablesMap,
    unsectionedTitle: unsectionedTitle
  };
  return GetSections(variableNames, sectionVariables, sections, getSectionsConfig).map(function (_ref, index, _ref2) {
    var sectionCount = _ref2.length;

    var variables = _ref.variables,
        sectionData = objectWithoutProperties(_ref, ["variables"]);

    if (renderSections) {
      var inputsChildrenComponent = function inputsChildrenComponent() {
        return variables.map(function (name) {
          return variablesMap[name];
        }).map(function (variable) {
          return renderInputs(_objectSpread$6({
            variable: variable
          }, props));
        });
      };

      return renderSections(_objectSpread$6({
        children: inputsChildrenComponent
      }, sectionData, {
        sectionCount: sectionCount
      }));
    }

    return React.createElement("div", {
      className: CSS_CLASS_NAMES.section,
      key: "".concat(sectionData.section, "-").concat(index)
    }, React.createElement("span", {
      className: CSS_CLASS_NAMES.sectionTitle
    }, sectionData.section), variables.map(function (name) {
      return variablesMap[name];
    }).map(function (variable) {
      return renderInputs(_objectSpread$6({
        variable: variable
      }, props));
    }));
  });
};

renderSectionsAndInputs.propTypes = process.env.NODE_ENV === 'production' ? null : defineProperty({
  apiClient: propTypes.object,
  executionResult: propTypes.shape({}),
  inputExtraTextMap: function inputExtraTextMap() {
    return (typeof bpfrpt_proptype_FieldExtraTextMapType === "function" ? bpfrpt_proptype_FieldExtraTextMapType : propTypes.shape(bpfrpt_proptype_FieldExtraTextMapType)).apply(this, arguments);
  },
  inputProps: function inputProps() {
    return (typeof bpfrpt_proptype_FieldPropsType === "function" ? bpfrpt_proptype_FieldPropsType : propTypes.shape(bpfrpt_proptype_FieldPropsType)).apply(this, arguments);
  },
  onChangeFunction: function onChangeFunction() {
    return (typeof bpfrpt_proptype_OnChangeFuncType === "function" ? bpfrpt_proptype_OnChangeFuncType : propTypes.shape(bpfrpt_proptype_OnChangeFuncType)).apply(this, arguments);
  },
  onValidate: function onValidate() {
    return (typeof bpfrpt_proptype_OnValidateFuncType === "function" ? bpfrpt_proptype_OnValidateFuncType : propTypes.shape(bpfrpt_proptype_OnValidateFuncType)).apply(this, arguments);
  },
  openLaw: propTypes.object,
  parameters: propTypes.objectOf(function (props, propName, componentName) {
    if (!Object.prototype.hasOwnProperty.call(props, propName)) {
      throw new Error("Prop `".concat(propName, "` has type 'any' or 'mixed', but was not provided to `").concat(componentName, "`. Pass undefined or any other value."));
    }
  }),
  renderSections: propTypes.func,
  sections: propTypes.arrayOf(function (props, propName, componentName) {
    if (!Object.prototype.hasOwnProperty.call(props, propName)) {
      throw new Error("Prop `".concat(propName, "` has type 'any' or 'mixed', but was not provided to `").concat(componentName, "`. Pass undefined or any other value."));
    }
  }),
  sectionTransform: propTypes.func,
  sectionVariablesMap: propTypes.func,
  unsectionedTitle: propTypes.string,
  variables: propTypes.arrayOf(propTypes.shape({}).isRequired),
  variablesMap: propTypes.objectOf(propTypes.object.isRequired).isRequired,
  variableObjects: propTypes.arrayOf(propTypes.object.isRequired).isRequired
}, "sections", propTypes.arrayOf(propTypes.object.isRequired).isRequired);
var OpenLawForm = function OpenLawForm(props) {
  var executionResult = props.executionResult,
      openLaw = props.openLaw,
      sectionsProp = props.sections,
      variables = props.variables;
  var allVariables = openLaw.getVariables(executionResult, {});
  var executedVariables = variables.map(function (variable) {
    return openLaw.getName(variable);
  });
  var sections = sectionsProp ? sectionsProp : openLaw.getSections(executionResult);
  var variableObjects = allVariables.filter(function (variable) {
    return openLaw.showInForm(variable, executionResult);
  }).filter(function (variable) {
    return executedVariables.indexOf(openLaw.getName(variable)) > -1;
  });
  var variablesMap = {};
  variableObjects.forEach(function (variable) {
    variablesMap[openLaw.getName(variable)] = variable;
  });
  var formContent; // loop to render sections

  if (sections.length) {
    formContent = renderSectionsAndInputs(_objectSpread$6({
      sections: sections,
      variablesMap: variablesMap,
      variableObjects: variableObjects
    }, props)); // loop to render inputs
  } else {
    formContent = executedVariables.map(function (name) {
      return variablesMap[name];
    }).filter(function (variable) {
      return variable !== undefined;
    }).map(function (variable) {
      return renderInputs(_objectSpread$6({
        variable: variable
      }, props));
    });
  }

  return React.createElement("div", {
    className: CSS_CLASS_NAMES.form
  }, formContent);
};
OpenLawForm.propTypes = process.env.NODE_ENV === 'production' ? null : {
  apiClient: propTypes.object,
  executionResult: propTypes.shape({}),
  inputExtraTextMap: function inputExtraTextMap() {
    return (typeof bpfrpt_proptype_FieldExtraTextMapType === "function" ? bpfrpt_proptype_FieldExtraTextMapType : propTypes.shape(bpfrpt_proptype_FieldExtraTextMapType)).apply(this, arguments);
  },
  inputProps: function inputProps() {
    return (typeof bpfrpt_proptype_FieldPropsType === "function" ? bpfrpt_proptype_FieldPropsType : propTypes.shape(bpfrpt_proptype_FieldPropsType)).apply(this, arguments);
  },
  onChangeFunction: function onChangeFunction() {
    return (typeof bpfrpt_proptype_OnChangeFuncType === "function" ? bpfrpt_proptype_OnChangeFuncType : propTypes.shape(bpfrpt_proptype_OnChangeFuncType)).apply(this, arguments);
  },
  onValidate: function onValidate() {
    return (typeof bpfrpt_proptype_OnValidateFuncType === "function" ? bpfrpt_proptype_OnValidateFuncType : propTypes.shape(bpfrpt_proptype_OnValidateFuncType)).apply(this, arguments);
  },
  openLaw: propTypes.object,
  parameters: propTypes.objectOf(function (props, propName, componentName) {
    if (!Object.prototype.hasOwnProperty.call(props, propName)) {
      throw new Error("Prop `".concat(propName, "` has type 'any' or 'mixed', but was not provided to `").concat(componentName, "`. Pass undefined or any other value."));
    }
  }),
  renderSections: propTypes.func,
  sections: propTypes.arrayOf(function (props, propName, componentName) {
    if (!Object.prototype.hasOwnProperty.call(props, propName)) {
      throw new Error("Prop `".concat(propName, "` has type 'any' or 'mixed', but was not provided to `").concat(componentName, "`. Pass undefined or any other value."));
    }
  }),
  sectionTransform: propTypes.func,
  sectionVariablesMap: propTypes.func,
  unsectionedTitle: propTypes.string,
  variables: propTypes.arrayOf(propTypes.shape({}).isRequired)
};

module.exports = OpenLawForm;

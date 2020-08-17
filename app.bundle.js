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
/******/ 	__webpack_require__.p = "./dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/aurumjs/prebuilt/aurumjs.js":
/*!**************************************************!*\
  !*** ./node_modules/aurumjs/prebuilt/aurumjs.js ***!
  \**************************************************/
/*! no static exports found */
/*! exports used: Aurum, CancellationToken, DataSource */
/***/ (function(module, exports) {

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

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o) {
  var i = 0;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  i = o[Symbol.iterator]();
  return i.next.bind(i);
}

var CancellationToken = /*#__PURE__*/function () {
  function CancellationToken() {
    var cancellables = [].slice.call(arguments);
    this.cancelables = cancellables !== null && cancellables !== void 0 ? cancellables : [];
    this._isCancelled = false;
  }

  var _proto = CancellationToken.prototype;

  _proto.hasCancellables = function hasCancellables() {
    return this.cancelables.length > 0;
  };

  _proto.addCancelable = function addCancelable(delegate) {
    this.throwIfCancelled('attempting to add cancellable to token that is already cancelled');
    this.cancelables.push(delegate);

    if (this.cancelables.length === 200) {
      console.log('potential memory leak: cancellation token has over 200 clean up calls');
    }

    return this;
  };

  _proto.removeCancelable = function removeCancelable(delegate) {
    this.throwIfCancelled('attempting to remove cancellable from token that is already cancelled');
    var index = this.cancelables.indexOf(delegate);

    if (index !== -1) {
      this.cancelables.splice(index, 1);
    }

    return this;
  };

  _proto.setTimeout = function (_setTimeout) {
    function setTimeout(_x) {
      return _setTimeout.apply(this, arguments);
    }

    setTimeout.toString = function () {
      return _setTimeout.toString();
    };

    return setTimeout;
  }(function (cb, time) {
    var _this = this;

    if (time === void 0) {
      time = 0;
    }

    var id = setTimeout(function () {
      _this.removeCancelable(cancelable);

      cb();
    }, time);

    var cancelable = function cancelable() {
      return clearTimeout(id);
    };

    this.addCancelable(cancelable);
  });

  _proto.setInterval = function (_setInterval) {
    function setInterval(_x2, _x3) {
      return _setInterval.apply(this, arguments);
    }

    setInterval.toString = function () {
      return _setInterval.toString();
    };

    return setInterval;
  }(function (cb, time) {
    var id = setInterval(cb, time);
    this.addCancelable(function () {
      return clearInterval(id);
    });
  });

  _proto.requestAnimationFrame = function (_requestAnimationFrame) {
    function requestAnimationFrame(_x4) {
      return _requestAnimationFrame.apply(this, arguments);
    }

    requestAnimationFrame.toString = function () {
      return _requestAnimationFrame.toString();
    };

    return requestAnimationFrame;
  }(function (cb) {
    var _this2 = this;

    var id = requestAnimationFrame(function () {
      _this2.removeCancelable(cancelable);

      cb();
    });

    var cancelable = function cancelable() {
      return cancelAnimationFrame(id);
    };

    this.addCancelable(cancelable);
  });

  _proto.animationLoop = function animationLoop(cb) {
    var id = requestAnimationFrame(function f(time) {
      id = requestAnimationFrame(f);
      cb(time);
    });
    this.addCancelable(function () {
      return cancelAnimationFrame(id);
    });
  };

  _proto.throwIfCancelled = function throwIfCancelled(msg) {
    if (this.isCanceled) {
      throw new Error(msg || 'cancellation token is cancelled');
    }
  };

  _proto.chain = function chain(target, twoWays) {
    if (twoWays === void 0) {
      twoWays = false;
    }

    if (twoWays) {
      target.chain(this, false);
    }

    this.addCancelable(function () {
      return target.cancel();
    });
    return this;
  };

  _proto.registerDomEvent = function registerDomEvent(eventEmitter, event, callback) {
    eventEmitter.addEventListener(event, callback);
    this.addCancelable(function () {
      return eventEmitter.removeEventListener(event, callback);
    });
    return this;
  };

  _proto.cancel = function cancel() {
    if (this.isCanceled) {
      return;
    }

    this._isCancelled = true;
    this.cancelables.forEach(function (c) {
      return c();
    });
    this.cancelables = undefined;
  };

  _createClass(CancellationToken, [{
    key: "isCanceled",
    get: function get() {
      return this._isCancelled;
    }
  }]);

  return CancellationToken;
}();

var EventEmitter = /*#__PURE__*/function () {
  function EventEmitter() {
    this.subscribeChannel = [];
    this.subscribeOnceChannel = [];
    this.onAfterFire = [];
  }

  var _proto = EventEmitter.prototype;

  _proto.subscribe = function subscribe(callback, cancellationToken) {
    var _this$createSubscript = this.createSubscription(callback, this.subscribeChannel, cancellationToken),
        facade = _this$createSubscript.facade;

    return facade;
  };

  _proto.subscribeOnce = function subscribeOnce(callback, cancellationToken) {
    var _this$createSubscript2 = this.createSubscription(callback, this.subscribeOnceChannel, cancellationToken),
        facade = _this$createSubscript2.facade;

    return facade;
  };

  _proto.hasSubscriptions = function hasSubscriptions() {
    return this.subscriptions > 0;
  };

  _proto.cancelAll = function cancelAll() {
    var _this = this;

    var _a;

    if (!this.isFiring) {
      this.subscribeChannel.length = 0;
      this.subscribeOnceChannel.length = 0;
      (_a = this.onEmpty) === null || _a === void 0 ? void 0 : _a.call(this);
    } else {
      this.onAfterFire.push(function () {
        var _a;

        _this.subscribeChannel.length = 0;
        _this.subscribeOnceChannel.length = 0;
        (_a = _this.onEmpty) === null || _a === void 0 ? void 0 : _a.call(_this);
      });
    }
  };

  _proto.afterFire = function afterFire() {
    if (this.onAfterFire.length > 0) {
      this.onAfterFire.forEach(function (cb) {
        return cb();
      });
      this.onAfterFire.length = 0;
    }
  };

  _proto.fire = function fire(data) {
    this.isFiring = true;
    var length = this.subscribeChannel.length;

    for (var i = 0; i < length; i++) {
      try {
        this.subscribeChannel[i].callback(data);
      } catch (e) {
        console.error(e);
      }
    }

    if (this.subscribeOnceChannel.length > 0) {
      length = this.subscribeOnceChannel.length;

      for (var _i = 0; _i < length; _i++) {
        try {
          this.subscribeOnceChannel[_i].callback(data);
        } catch (e) {
          console.error(e);
        }
      }

      this.subscribeOnceChannel.length = 0;
    }

    this.isFiring = false;
    this.afterFire();
  };

  _proto.createSubscription = function createSubscription(callback, channel, cancellationToken) {
    var that = this;
    var subscription = {
      callback: callback
    };
    var facade = {
      cancel: function cancel() {
        that.cancel(subscription, channel);
      }
    };

    if (cancellationToken !== undefined) {
      cancellationToken.addCancelable(function () {
        return that.cancel(subscription, channel);
      });
    }

    channel.push(subscription);
    return {
      subscription: subscription,
      facade: facade
    };
  };

  _proto.cancel = function cancel(subscription, channel) {
    var _this2 = this;

    var _a;

    var index = channel.indexOf(subscription);

    if (index >= 0) {
      if (!this.isFiring) {
        channel.splice(index, 1);

        if (!this.hasSubscriptions()) {
          (_a = this.onEmpty) === null || _a === void 0 ? void 0 : _a.call(this);
        }
      } else {
        this.onAfterFire.push(function () {
          return _this2.cancel(subscription, channel);
        });
      }
    }
  };

  _createClass(EventEmitter, [{
    key: "subscriptions",
    get: function get() {
      return this.subscribeChannel.length + this.subscribeOnceChannel.length;
    }
  }]);

  return EventEmitter;
}();

(function (OperationType) {
  OperationType[OperationType["FILTER"] = 0] = "FILTER";
  OperationType[OperationType["NOOP"] = 1] = "NOOP";
  OperationType[OperationType["MAP"] = 2] = "MAP";
  OperationType[OperationType["DELAY"] = 3] = "DELAY";
  OperationType[OperationType["MAP_DELAY"] = 4] = "MAP_DELAY";
  OperationType[OperationType["DELAY_FILTER"] = 5] = "DELAY_FILTER";
  OperationType[OperationType["MAP_DELAY_FILTER"] = 6] = "MAP_DELAY_FILTER";
})(exports.OperationType || (exports.OperationType = {}));

function _settle(pact, state, value) {
  if (!pact.s) {
    if (value instanceof _Pact) {
      if (value.s) {
        if (state & 1) {
          state = value.s;
        }

        value = value.v;
      } else {
        value.o = _settle.bind(null, pact, state);
        return;
      }
    }

    if (value && value.then) {
      value.then(_settle.bind(null, pact, state), _settle.bind(null, pact, 2));
      return;
    }

    pact.s = state;
    pact.v = value;
    var observer = pact.o;

    if (observer) {
      observer(pact);
    }
  }
}

var _Pact = /*#__PURE__*/function () {
  function _Pact() {}

  _Pact.prototype.then = function (onFulfilled, onRejected) {
    var result = new _Pact();
    var state = this.s;

    if (state) {
      var callback = state & 1 ? onFulfilled : onRejected;

      if (callback) {
        try {
          _settle(result, 1, callback(this.v));
        } catch (e) {
          _settle(result, 2, e);
        }

        return result;
      } else {
        return this;
      }
    }

    this.o = function (_this) {
      try {
        var value = _this.v;

        if (_this.s & 1) {
          _settle(result, 1, onFulfilled ? onFulfilled(value) : value);
        } else if (onRejected) {
          _settle(result, 1, onRejected(value));
        } else {
          _settle(result, 2, value);
        }
      } catch (e) {
        _settle(result, 2, e);
      }
    };

    return result;
  };

  return _Pact;
}();

function _switch(discriminant, cases) {
  var dispatchIndex = -1;
  var awaitBody;

  outer: {
    for (var i = 0; i < cases.length; i++) {
      var test = cases[i][0];

      if (test) {
        var testValue = test();

        if (testValue && testValue.then) {
          break outer;
        }

        if (testValue === discriminant) {
          dispatchIndex = i;
          break;
        }
      } else {
        dispatchIndex = i;
      }
    }

    if (dispatchIndex !== -1) {
      do {
        var body = cases[dispatchIndex][1];

        while (!body) {
          dispatchIndex++;
          body = cases[dispatchIndex][1];
        }

        var result = body();

        if (result && result.then) {
          awaitBody = true;
          break outer;
        }

        var fallthroughCheck = cases[dispatchIndex][2];
        dispatchIndex++;
      } while (fallthroughCheck && !fallthroughCheck());

      return result;
    }
  }

  var pact = new _Pact();

  var reject = _settle.bind(null, pact, 2);

  (awaitBody ? result.then(_resumeAfterBody) : testValue.then(_resumeAfterTest)).then(void 0, reject);
  return pact;

  function _resumeAfterTest(value) {
    for (;;) {
      if (value === discriminant) {
        dispatchIndex = i;
        break;
      }

      if (++i === cases.length) {
        if (dispatchIndex !== -1) {
          break;
        } else {
          _settle(pact, 1, result);

          return;
        }
      }

      test = cases[i][0];

      if (test) {
        value = test();

        if (value && value.then) {
          value.then(_resumeAfterTest).then(void 0, reject);
          return;
        }
      } else {
        dispatchIndex = i;
      }
    }

    do {
      var body = cases[dispatchIndex][1];

      while (!body) {
        dispatchIndex++;
        body = cases[dispatchIndex][1];
      }

      var result = body();

      if (result && result.then) {
        result.then(_resumeAfterBody).then(void 0, reject);
        return;
      }

      var fallthroughCheck = cases[dispatchIndex][2];
      dispatchIndex++;
    } while (fallthroughCheck && !fallthroughCheck());

    _settle(pact, 1, result);
  }

  function _resumeAfterBody(result) {
    for (;;) {
      var fallthroughCheck = cases[dispatchIndex][2];

      if (!fallthroughCheck || fallthroughCheck()) {
        break;
      }

      dispatchIndex++;
      var body = cases[dispatchIndex][1];

      while (!body) {
        dispatchIndex++;
        body = cases[dispatchIndex][1];
      }

      result = body();

      if (result && result.then) {
        result.then(_resumeAfterBody).then(void 0, reject);
        return;
      }
    }

    _settle(pact, 1, result);
  }
}

var _iteratorSymbol = /*#__PURE__*/typeof Symbol !== "undefined" ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator";

function _isSettledPact(thenable) {
  return thenable instanceof _Pact && thenable.s & 1;
}

function _forTo(array, body, check) {
  var i = -1,
      pact,
      reject;

  function _cycle(result) {
    try {
      while (++i < array.length && (!check || !check())) {
        result = body(i);

        if (result && result.then) {
          if (_isSettledPact(result)) {
            result = result.v;
          } else {
            result.then(_cycle, reject || (reject = _settle.bind(null, pact = new _Pact(), 2)));
            return;
          }
        }
      }

      if (pact) {
        _settle(pact, 1, result);
      } else {
        pact = result;
      }
    } catch (e) {
      _settle(pact || (pact = new _Pact()), 2, e);
    }
  }

  _cycle();

  return pact;
}

function _forOf(target, body, check) {
  if (typeof target[_iteratorSymbol] === "function") {
    var _cycle2 = function _cycle2(result) {
      try {
        while (!(step = iterator.next()).done && (!check || !check())) {
          result = body(step.value);

          if (result && result.then) {
            if (_isSettledPact(result)) {
              result = result.v;
            } else {
              result.then(_cycle2, reject || (reject = _settle.bind(null, pact = new _Pact(), 2)));
              return;
            }
          }
        }

        if (pact) {
          _settle(pact, 1, result);
        } else {
          pact = result;
        }
      } catch (e) {
        _settle(pact || (pact = new _Pact()), 2, e);
      }
    };

    var iterator = target[_iteratorSymbol](),
        step,
        pact,
        reject;

    _cycle2();

    if (iterator["return"]) {
      var _fixup = function _fixup(value) {
        try {
          if (!step.done) {
            iterator["return"]();
          }
        } catch (e) {}

        return value;
      };

      if (pact && pact.then) {
        return pact.then(_fixup, function (e) {
          throw _fixup(e);
        });
      }

      _fixup();
    }

    return pact;
  }

  if (!("length" in target)) {
    throw new TypeError("Object is not iterable");
  }

  var values = [];

  for (var i = 0; i < target.length; i++) {
    values.push(target[i]);
  }

  return _forTo(values, function (i) {
    return body(values[i]);
  }, check);
}

var DataSource = /*#__PURE__*/function () {
  function DataSource(initialValue, name) {
    if (name === void 0) {
      name = 'RootDataSource';
    }

    this.name = name;
    this.value = initialValue;
    this.primed = initialValue !== undefined;
    this.updateEvent = new EventEmitter();
  }

  DataSource.fromMultipleSources = function fromMultipleSources(sources, cancellation) {
    var result = new DataSource();

    for (var _iterator = _createForOfIteratorHelperLoose(sources), _step; !(_step = _iterator()).done;) {
      var s = _step.value;
      s.listen(function (v) {
        return result.update(v);
      }, cancellation);
    }

    result.name = "Combination of [" + sources.map(function (v) {
      return v.name;
    }).join(' & ') + "]";
    return result;
  };

  var _proto = DataSource.prototype;

  _proto.repeatLast = function repeatLast() {
    this.update(this.value);
    return this;
  };

  _proto.update = function update(newValue) {
    this.primed = true;

    if (this.updating) {
      throw new Error('Problem in data source: Unstable value propagation. When updating a value the stream was updated back as a direct response. This can lead to infinite loops and is therefore not allowed');
    }

    this.updating = true;
    this.value = newValue;
    this.updateEvent.fire(newValue);
    this.updating = false;
  };

  _proto.withInitial = function withInitial(value) {
    if (!this.primed) {
      this.update(value);
    }

    return this;
  };

  _proto.listenAndRepeat = function listenAndRepeat(callback, cancellationToken) {
    callback(this.value);
    return this.listen(callback, cancellationToken);
  };

  _proto.listen = function listen(callback, cancellationToken) {
    return this.updateEvent.subscribe(callback, cancellationToken).cancel;
  };

  _proto.listenOnce = function listenOnce(callback, cancellationToken) {
    return this.updateEvent.subscribeOnce(callback, cancellationToken).cancel;
  };

  _proto.transform = function transform(operationA, operationB, operationC, operationD, operationE, operationF, operationG, operationH, operationI, operationJ, operationK, cancellationToken) {
    var token;
    var operations = [operationA, operationB, operationC, operationD, operationE, operationF, operationG, operationH, operationI, operationJ, operationK].filter(function (e) {
      return e && (e instanceof CancellationToken ? (token = e, false) : true);
    });

    if (cancellationToken) {
      token = cancellationToken;
    }

    var result = new DataSource(undefined, this.name + ' ' + operations.map(function (v) {
      return v.name;
    }).join(' '));
    (this.primed ? this.listenAndRepeat : this.listen).call(this, processTransform(operations, result), token);
    return result;
  };

  _proto.pipe = function pipe(targetDataSource, cancellationToken) {
    this.listen(function (v) {
      return targetDataSource.update(v);
    }, cancellationToken);
    return this;
  };

  _proto.map = function map(callback, cancellationToken) {
    cancellationToken = cancellationToken !== null && cancellationToken !== void 0 ? cancellationToken : new CancellationToken();
    var mappedSource;

    if (this.primed) {
      mappedSource = new TransientDataSource(cancellationToken, callback(this.value));
    } else {
      mappedSource = new TransientDataSource(cancellationToken);
    }

    this.listen(function (value) {
      mappedSource.update(callback(value));
    }, cancellationToken);
    return mappedSource;
  };

  _proto.tap = function tap(callback, cancellationToken) {
    this.listen(function (value) {
      callback(value);
    }, cancellationToken);
    return this;
  };

  _proto.unique = function unique(cancellationToken) {
    cancellationToken = cancellationToken !== null && cancellationToken !== void 0 ? cancellationToken : new CancellationToken();
    var uniqueSource = new TransientDataSource(cancellationToken, this.value);
    this.listen(function (value) {
      if (value !== uniqueSource.value) {
        uniqueSource.update(value);
      }
    }, cancellationToken);
    return uniqueSource;
  };

  _proto.diff = function diff(cancellationToken) {
    cancellationToken = cancellationToken !== null && cancellationToken !== void 0 ? cancellationToken : new CancellationToken();
    var diffingSource = new TransientDataSource(cancellationToken, {
      "new": this.value,
      old: undefined
    });
    this.listen(function (value) {
      diffingSource.update({
        "new": value,
        old: diffingSource.value["new"]
      });
    }, cancellationToken);
    return diffingSource;
  };

  _proto.reduce = function reduce(reducer, initialValue, cancellationToken) {
    cancellationToken = cancellationToken !== null && cancellationToken !== void 0 ? cancellationToken : new CancellationToken();
    var reduceSource = new TransientDataSource(cancellationToken, initialValue);
    this.listen(function (v) {
      return reduceSource.update(reducer(reduceSource.value, v));
    }, cancellationToken);
    return reduceSource;
  };

  _proto.aggregate = function aggregate(otherSource, combinator, cancellationToken) {
    var _this = this;

    cancellationToken = cancellationToken !== null && cancellationToken !== void 0 ? cancellationToken : new CancellationToken();
    var aggregatedSource = new TransientDataSource(cancellationToken, combinator(this.value, otherSource.value));
    this.listen(function () {
      return aggregatedSource.update(combinator(_this.value, otherSource.value));
    }, cancellationToken);
    otherSource.listen(function () {
      return aggregatedSource.update(combinator(_this.value, otherSource.value));
    }, cancellationToken);
    return aggregatedSource;
  };

  _proto.aggregateThree = function aggregateThree(second, third, combinator, cancellationToken) {
    var _this2 = this;

    cancellationToken = cancellationToken !== null && cancellationToken !== void 0 ? cancellationToken : new CancellationToken();
    var aggregatedSource = new TransientDataSource(cancellationToken, combinator(this.value, second.value, third.value));
    this.listen(function () {
      return aggregatedSource.update(combinator(_this2.value, second.value, third.value));
    }, cancellationToken);
    second.listen(function () {
      return aggregatedSource.update(combinator(_this2.value, second.value, third.value));
    }, cancellationToken);
    third.listen(function () {
      return aggregatedSource.update(combinator(_this2.value, second.value, third.value));
    }, cancellationToken);
    return aggregatedSource;
  };

  _proto.aggregateFour = function aggregateFour(second, third, fourth, combinator, cancellationToken) {
    var _this3 = this;

    cancellationToken = cancellationToken !== null && cancellationToken !== void 0 ? cancellationToken : new CancellationToken();
    var aggregatedSource = new TransientDataSource(cancellationToken, combinator(this.value, second.value, third.value, fourth.value));
    this.listen(function () {
      return aggregatedSource.update(combinator(_this3.value, second.value, third.value, fourth.value));
    }, cancellationToken);
    second.listen(function () {
      return aggregatedSource.update(combinator(_this3.value, second.value, third.value, fourth.value));
    }, cancellationToken);
    third.listen(function () {
      return aggregatedSource.update(combinator(_this3.value, second.value, third.value, fourth.value));
    }, cancellationToken);
    fourth.listen(function () {
      return aggregatedSource.update(combinator(_this3.value, second.value, third.value, fourth.value));
    }, cancellationToken);
    return aggregatedSource;
  };

  _proto.aggregateFive = function aggregateFive(second, third, fourth, fifth, combinator, cancellationToken) {
    var _this4 = this;

    cancellationToken = cancellationToken !== null && cancellationToken !== void 0 ? cancellationToken : new CancellationToken();
    var aggregatedSource = new TransientDataSource(cancellationToken, combinator(this.value, second.value, third.value, fourth.value, fifth.value));
    this.listen(function () {
      return aggregatedSource.update(combinator(_this4.value, second.value, third.value, fourth.value, fifth.value));
    }, cancellationToken);
    second.listen(function () {
      return aggregatedSource.update(combinator(_this4.value, second.value, third.value, fourth.value, fifth.value));
    }, cancellationToken);
    third.listen(function () {
      return aggregatedSource.update(combinator(_this4.value, second.value, third.value, fourth.value, fifth.value));
    }, cancellationToken);
    fourth.listen(function () {
      return aggregatedSource.update(combinator(_this4.value, second.value, third.value, fourth.value, fifth.value));
    }, cancellationToken);
    fifth.listen(function () {
      return aggregatedSource.update(combinator(_this4.value, second.value, third.value, fourth.value, fifth.value));
    }, cancellationToken);
    return aggregatedSource;
  };

  _proto.combine = function combine(otherSources, cancellationToken) {
    cancellationToken = cancellationToken !== null && cancellationToken !== void 0 ? cancellationToken : new CancellationToken();
    var combinedDataSource = new TransientDataSource(cancellationToken);
    this.pipe(combinedDataSource, cancellationToken);

    for (var _iterator2 = _createForOfIteratorHelperLoose(otherSources), _step2; !(_step2 = _iterator2()).done;) {
      var otherSource = _step2.value;
      otherSource.pipe(combinedDataSource, cancellationToken);
    }

    return combinedDataSource;
  };

  _proto.delay = function delay(time, cancellationToken) {
    cancellationToken = cancellationToken !== null && cancellationToken !== void 0 ? cancellationToken : new CancellationToken();
    var delayedDataSource = new TransientDataSource(cancellationToken, this.value);
    this.listen(function (v) {
      setTimeout(function () {
        delayedDataSource.update(v);
      }, time);
    }, cancellationToken);
    return delayedDataSource;
  };

  _proto.skip = function skip(amount, cancellationToken) {
    cancellationToken = cancellationToken !== null && cancellationToken !== void 0 ? cancellationToken : new CancellationToken();
    var delayedDataSource = new TransientDataSource(cancellationToken, this.value);
    this.listen(function (v) {
      if (amount === 0) {
        delayedDataSource.update(v);
      } else {
        amount--;
      }
    }, cancellationToken);
    return delayedDataSource;
  };

  _proto.cutoff = function cutoff(amount, cancellationToken) {
    cancellationToken = cancellationToken !== null && cancellationToken !== void 0 ? cancellationToken : new CancellationToken();
    var delayedDataSource = new TransientDataSource(cancellationToken, this.value);
    this.listen(function (v) {
      if (amount-- > 0) {
        delayedDataSource.update(v);
      }
    }, cancellationToken);
    return delayedDataSource;
  };

  _proto.awaitNextUpdate = function awaitNextUpdate(cancellationToken) {
    var _this5 = this;

    return new Promise(function (resolve) {
      _this5.listenOnce(function (value) {
        return resolve(value);
      }, cancellationToken);
    });
  };

  _proto.debounce = function debounce(time, cancellationToken) {
    cancellationToken = cancellationToken !== null && cancellationToken !== void 0 ? cancellationToken : new CancellationToken();
    var debouncedDataSource = new TransientDataSource(cancellationToken, this.value);
    var timeout;
    this.listen(function (v) {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        debouncedDataSource.update(v);
      }, time);
    }, cancellationToken);
    return debouncedDataSource;
  };

  _proto.buffer = function buffer(time, cancellationToken) {
    cancellationToken = cancellationToken !== null && cancellationToken !== void 0 ? cancellationToken : new CancellationToken();
    var bufferedDataSource = new TransientDataSource(cancellationToken);
    var timeout;
    var buffer = [];
    this.listen(function (v) {
      buffer.push(v);

      if (!timeout) {
        timeout = setTimeout(function () {
          timeout = undefined;
          bufferedDataSource.update(buffer);
          buffer = [];
        }, time);
      }
    }, cancellationToken);
    return bufferedDataSource;
  };

  _proto.accumulate = function accumulate(cancellationToken) {
    var queueDataSource = new ArrayDataSource();
    this.listen(function (v) {
      queueDataSource.push(v);
    }, cancellationToken);
    return queueDataSource;
  };

  _proto.pick = function pick(key, cancellationToken) {
    var _a;

    cancellationToken = cancellationToken !== null && cancellationToken !== void 0 ? cancellationToken : new CancellationToken();
    var subDataSource = new TransientDataSource(cancellationToken, (_a = this.value) === null || _a === void 0 ? void 0 : _a[key]);
    this.listen(function (v) {
      if (v !== undefined && v !== null) {
        subDataSource.update(v[key]);
      } else {
        subDataSource.update(v);
      }
    }, cancellationToken);
    return subDataSource;
  };

  _proto.cancelAll = function cancelAll() {
    this.updateEvent.cancelAll();
  };

  return DataSource;
}();
var TransientDataSource = /*#__PURE__*/function (_DataSource) {
  _inheritsLoose(TransientDataSource, _DataSource);

  function TransientDataSource(disposeToken, initialValue, name) {
    var _this6;

    _this6 = _DataSource.call(this, initialValue, name) || this;
    _this6.disposeToken = disposeToken;

    _this6.updateEvent.onEmpty = function () {
      disposeToken.cancel();
      Object.defineProperty(_assertThisInitialized(_this6), 'value', {
        get: function get() {
          throw new Error('Transient data source has expired and can no longer be used if you wish to use it even after all listeners were removed "persist". Note that persisted data sources will not be garabge collected unless you remove the subscription they have on their parent source');
        },
        set: function set() {
          throw new Error('Transient data source has expired and can no longer be used if you wish to use it even after all listeners were removed "persist". Note that persisted data sources will not be garabge collected unless you remove the subscription they have on their parent source');
        }
      });
    };

    return _this6;
  }

  var _proto2 = TransientDataSource.prototype;

  _proto2.persist = function persist() {
    this.updateEvent.onEmpty = undefined;
    return this;
  };

  _proto2.listen = function listen(callback, cancellationToken) {
    this.disposeToken.throwIfCancelled('Transient data source has expired. Listening not possible');
    return _DataSource.prototype.listen.call(this, callback, cancellationToken);
  };

  _proto2.listenAndRepeat = function listenAndRepeat(callback, cancellationToken) {
    this.disposeToken.throwIfCancelled('Transient data source has expired. Listening not possible');
    return _DataSource.prototype.listenAndRepeat.call(this, callback, cancellationToken);
  };

  _proto2.listenOnce = function listenOnce(callback, cancellationToken) {
    this.disposeToken.throwIfCancelled('Transient data source has expired. Listening not possible');

    return _DataSource.prototype.listen.call(this, callback, cancellationToken);
  };

  return TransientDataSource;
}(DataSource);
var ArrayDataSource = /*#__PURE__*/function () {
  function ArrayDataSource(initialData) {
    if (initialData) {
      this.data = initialData.slice();
    } else {
      this.data = [];
    }

    this.lengthSource = new DataSource(this.data.length);
    this.updateEvent = new EventEmitter();
  }

  ArrayDataSource.fromMultipleSources = function fromMultipleSources(cancellationToken) {
    var sources = [].slice.call(arguments, 1);

    var _a;

    var boundaries = [0];
    var result = new ArrayDataSource();

    for (var i = 0; i < sources.length; i++) {
      if (Array.isArray(sources[i])) {
        result.appendArray(sources[i]);
      } else {
        (function () {
          result.appendArray((_a = sources[i].data) !== null && _a !== void 0 ? _a : []);
          var index = i;
          sources[i].listen(function (change) {
            switch (change.operationDetailed) {
              case 'append':
              case 'prepend':
              case 'insert':
                result.insertAt.apply(result, [change.index + boundaries[index]].concat(change.items));

                for (var _i = index + 1; _i < boundaries.length; _i++) {
                  boundaries[_i] += change.count;
                }

                break;

              case 'remove':
              case 'removeLeft':
              case 'removeRight':
              case 'clear':
                result.removeRange(change.index + boundaries[index], change.index + boundaries[index] + change.count);

                for (var _i2 = index + 1; _i2 < boundaries.length; _i2++) {
                  boundaries[_i2] -= change.count;
                }

                break;

              case 'merge':
                throw new Error('Not yet supported');

              case 'replace':
                result.set(change.index + boundaries[index], change.items[0]);
                break;

              case 'swap':
                result.swap(change.index + boundaries[index], change.index2 + boundaries[index]);
                break;
            }
          }, cancellationToken);
        })();
      }

      boundaries.push(result.length.value);
    }

    return result;
  };

  var _proto3 = ArrayDataSource.prototype;

  _proto3.listenAndRepeat = function listenAndRepeat(callback, cancellationToken) {
    callback({
      operation: 'add',
      operationDetailed: 'append',
      index: 0,
      items: this.data,
      newState: this.data,
      count: this.data.length
    });
    return this.listen(callback, cancellationToken);
  };

  _proto3.repeatCurrentState = function repeatCurrentState() {
    this.update({
      operation: 'remove',
      operationDetailed: 'clear',
      count: this.data.length,
      index: 0,
      items: this.data,
      newState: []
    });
    this.update({
      operation: 'add',
      operationDetailed: 'append',
      index: 0,
      items: this.data,
      newState: this.data,
      count: this.data.length
    });
  };

  _proto3.listen = function listen(callback, cancellationToken) {
    return this.updateEvent.subscribe(callback, cancellationToken).cancel;
  };

  _proto3.listenOnce = function listenOnce(callback, cancellationToken) {
    return this.updateEvent.subscribeOnce(callback, cancellationToken).cancel;
  };

  _proto3.awaitNextUpdate = function awaitNextUpdate(cancellationToken) {
    var _this7 = this;

    return new Promise(function (resolve) {
      _this7.listenOnce(function (value) {
        return resolve(value);
      }, cancellationToken);
    });
  };

  _proto3.getData = function getData() {
    return this.data;
  };

  _proto3.get = function get(index) {
    return this.data[index];
  };

  _proto3.set = function set(index, item) {
    var old = this.data[index];

    if (old === item) {
      return;
    }

    this.data[index] = item;
    this.update({
      operation: 'replace',
      operationDetailed: 'replace',
      target: old,
      count: 1,
      index: index,
      items: [item],
      newState: this.data
    });

    if (this.lengthSource.value !== this.data.length) {
      this.lengthSource.update(this.data.length);
    }
  };

  _proto3.swap = function swap(indexA, indexB) {
    if (indexA === indexB) {
      return;
    }

    var itemA = this.data[indexA];
    var itemB = this.data[indexB];
    this.data[indexB] = itemA;
    this.data[indexA] = itemB;
    this.update({
      operation: 'swap',
      operationDetailed: 'swap',
      index: indexA,
      index2: indexB,
      items: [itemA, itemB],
      newState: this.data
    });

    if (this.lengthSource.value !== this.data.length) {
      this.lengthSource.update(this.data.length);
    }
  };

  _proto3.swapItems = function swapItems(itemA, itemB) {
    if (itemA === itemB) {
      return;
    }

    var indexA = this.data.indexOf(itemA);
    var indexB = this.data.indexOf(itemB);

    if (indexA !== -1 && indexB !== -1) {
      this.data[indexB] = itemA;
      this.data[indexA] = itemB;
    }

    this.update({
      operation: 'swap',
      operationDetailed: 'swap',
      index: indexA,
      index2: indexB,
      items: [itemA, itemB],
      newState: this.data
    });

    if (this.lengthSource.value !== this.data.length) {
      this.lengthSource.update(this.data.length);
    }
  };

  _proto3.appendArray = function appendArray(items) {
    this.data = this.data.concat(items);
    this.update({
      operation: 'add',
      operationDetailed: 'append',
      count: items.length,
      index: this.data.length - items.length,
      items: items,
      newState: this.data
    });

    if (this.lengthSource.value !== this.data.length) {
      this.lengthSource.update(this.data.length);
    }
  };

  _proto3.insertAt = function insertAt(index) {
    var _this$data;

    var items = [].slice.call(arguments, 1);

    if (items.length === 0) {
      return;
    }

    (_this$data = this.data).splice.apply(_this$data, [index, 0].concat(items));

    this.update({
      operation: 'add',
      operationDetailed: 'insert',
      count: items.length,
      index: index,
      items: items,
      newState: this.data
    });
    this.lengthSource.update(this.data.length);
  };

  _proto3.push = function push() {
    this.appendArray([].slice.call(arguments));
  };

  _proto3.unshift = function unshift() {
    var _this$data2;

    var items = [].slice.call(arguments);

    (_this$data2 = this.data).unshift.apply(_this$data2, items);

    this.update({
      operation: 'add',
      operationDetailed: 'prepend',
      count: items.length,
      items: items,
      index: 0,
      newState: this.data
    });

    if (this.lengthSource.value !== this.data.length) {
      this.lengthSource.update(this.data.length);
    }
  };

  _proto3.pop = function pop() {
    var item = this.data.pop();
    this.update({
      operation: 'remove',
      operationDetailed: 'removeRight',
      count: 1,
      index: this.data.length,
      items: [item],
      newState: this.data
    });

    if (this.lengthSource.value !== this.data.length) {
      this.lengthSource.update(this.data.length);
    }

    return item;
  };

  _proto3.merge = function merge(newData) {
    var old = this.data;
    this.data = newData.slice();
    this.update({
      operation: 'merge',
      operationDetailed: 'merge',
      previousState: old,
      index: 0,
      items: this.data,
      newState: this.data
    });

    if (this.lengthSource.value !== this.data.length) {
      this.lengthSource.update(this.data.length);
    }
  };

  _proto3.removeRight = function removeRight(count) {
    var length = this.data.length;
    var result = this.data.splice(length - count, count);
    this.update({
      operation: 'remove',
      operationDetailed: 'removeRight',
      count: count,
      index: length - count,
      items: result,
      newState: this.data
    });

    if (this.lengthSource.value !== this.data.length) {
      this.lengthSource.update(this.data.length);
    }
  };

  _proto3.removeLeft = function removeLeft(count) {
    var result = this.data.splice(0, count);
    this.update({
      operation: 'remove',
      operationDetailed: 'removeLeft',
      count: count,
      index: 0,
      items: result,
      newState: this.data
    });

    if (this.lengthSource.value !== this.data.length) {
      this.lengthSource.update(this.data.length);
    }
  };

  _proto3.removeAt = function removeAt(index) {
    var removed = this.data.splice(index, 1);
    this.update({
      operation: 'remove',
      operationDetailed: 'remove',
      count: removed.length,
      index: index,
      items: removed,
      newState: this.data
    });

    if (this.lengthSource.value !== this.data.length) {
      this.lengthSource.update(this.data.length);
    }
  };

  _proto3.removeRange = function removeRange(start, end) {
    var removed = this.data.splice(start, end - start);
    this.update({
      operation: 'remove',
      operationDetailed: 'remove',
      count: removed.length,
      index: start,
      items: removed,
      newState: this.data
    });

    if (this.lengthSource.value !== this.data.length) {
      this.lengthSource.update(this.data.length);
    }
  };

  _proto3.remove = function remove(item) {
    var index = this.data.indexOf(item);

    if (index !== -1) {
      this.removeAt(index);
    }
  };

  _proto3.clear = function clear() {
    if (this.data.length === 0) {
      return;
    }

    var items = this.data;
    this.data = [];
    this.update({
      operation: 'remove',
      operationDetailed: 'clear',
      count: items.length,
      index: 0,
      items: items,
      newState: this.data
    });

    if (this.lengthSource.value !== this.data.length) {
      this.lengthSource.update(this.data.length);
    }
  };

  _proto3.shift = function shift() {
    var item = this.data.shift();
    this.update({
      operation: 'remove',
      operationDetailed: 'removeLeft',
      items: [item],
      count: 1,
      index: 0,
      newState: this.data
    });

    if (this.lengthSource.value !== this.data.length) {
      this.lengthSource.update(this.data.length);
    }

    return item;
  };

  _proto3.toArray = function toArray() {
    return this.data.slice();
  };

  _proto3.reverse = function reverse(cancellationToken) {
    var view = new ReversedArrayView(this, cancellationToken);
    return view;
  };

  _proto3.sort = function sort(comparator, dependencies, cancellationToken) {
    if (dependencies === void 0) {
      dependencies = [];
    }

    var view = new SortedArrayView(this, comparator, cancellationToken);
    dependencies.forEach(function (dep) {
      dep.listen(function () {
        return view.refresh();
      });
    }, cancellationToken);
    return view;
  };

  _proto3.map = function map(mapper, dependencies, cancellationToken) {
    if (dependencies === void 0) {
      dependencies = [];
    }

    var view = new MappedArrayView(this, mapper, cancellationToken);
    dependencies.forEach(function (dep) {
      dep.listen(function () {
        return view.refresh();
      });
    }, cancellationToken);
    return view;
  };

  _proto3.filter = function filter(callback, dependencies, cancellationToken) {
    if (dependencies === void 0) {
      dependencies = [];
    }

    var view = new FilteredArrayView(this, callback, cancellationToken);
    dependencies.forEach(function (dep) {
      dep.listen(function () {
        return view.refresh();
      }, cancellationToken);
    });
    return view;
  };

  _proto3.forEach = function forEach(callbackfn) {
    return this.data.forEach(callbackfn);
  };

  _proto3.update = function update(change) {
    this.updateEvent.fire(change);
  };

  _createClass(ArrayDataSource, [{
    key: "length",
    get: function get() {
      return this.lengthSource;
    }
  }]);

  return ArrayDataSource;
}();
var MappedArrayView = /*#__PURE__*/function (_ArrayDataSource) {
  _inheritsLoose(MappedArrayView, _ArrayDataSource);

  function MappedArrayView(parent, mapper, cancellationToken) {
    var _this8;

    if (cancellationToken === void 0) {
      cancellationToken = new CancellationToken();
    }

    var initial = parent.getData().map(mapper);
    _this8 = _ArrayDataSource.call(this, initial) || this;
    _this8.parent = parent;
    _this8.mapper = mapper;
    parent.listen(function (change) {
      var _this9, _this10;

      switch (change.operationDetailed) {
        case 'removeLeft':
          _this8.removeLeft(change.count);

          break;

        case 'removeRight':
          _this8.removeRight(change.count);

          break;

        case 'remove':
          _this8.remove(_this8.data[change.index]);

          break;

        case 'clear':
          _this8.clear();

          break;

        case 'prepend':
          (_this9 = _this8).unshift.apply(_this9, change.items.map(_this8.mapper));

          break;

        case 'append':
          _this8.appendArray(change.items.map(_this8.mapper));

          break;

        case 'insert':
          (_this10 = _this8).insertAt.apply(_this10, [change.index].concat(change.items.map(_this8.mapper)));

          break;

        case 'swap':
          _this8.swap(change.index, change.index2);

          break;

        case 'replace':
          _this8.set(change.index, _this8.mapper(change.items[0]));

          break;

        case 'merge':
          var old = _this8.data.slice();

          var source = change.previousState.slice();

          for (var i = 0; i < change.newState.length; i++) {
            if (_this8.data.length <= i) {
              _this8.data.push(_this8.mapper(change.newState[i]));
            }

            if (source[i] !== change.newState[i]) {
              var index = source.indexOf(change.newState[i]);

              if (index !== -1) {
                var a = _this8.data[i];
                var b = _this8.data[index];
                _this8.data[i] = b;
                _this8.data[index] = a;
                var c = source[i];
                var d = source[index];
                source[i] = d;
                source[index] = c;
              } else {
                _this8.data.splice(i, 0, _this8.mapper(change.newState[i]));

                source.splice(i, 0, change.newState[i]);
              }
            }
          }

          if (_this8.data.length > change.newState.length) {
            _this8.data.length = change.newState.length;
          }

          _this8.update({
            operation: 'merge',
            operationDetailed: 'merge',
            previousState: old,
            index: 0,
            items: _this8.data,
            newState: _this8.data
          });

          break;
      }
    }, cancellationToken);
    return _this8;
  }

  var _proto4 = MappedArrayView.prototype;

  _proto4.refresh = function refresh() {
    this.merge(this.parent.data.map(this.mapper));
  };

  return MappedArrayView;
}(ArrayDataSource);
var ReversedArrayView = /*#__PURE__*/function (_ArrayDataSource2) {
  _inheritsLoose(ReversedArrayView, _ArrayDataSource2);

  function ReversedArrayView(parent, cancellationToken) {
    var _this11;

    if (cancellationToken === void 0) {
      cancellationToken = new CancellationToken();
    }

    var initial = parent.getData().slice().reverse();
    _this11 = _ArrayDataSource2.call(this, initial) || this;
    _this11.parent = parent;
    parent.listen(function (change) {
      var _this12;

      switch (change.operationDetailed) {
        case 'removeLeft':
          _this11.removeRight(change.count);

          break;

        case 'removeRight':
          _this11.removeLeft(change.count);

          break;

        case 'remove':
          for (var _iterator3 = _createForOfIteratorHelperLoose(change.items), _step3; !(_step3 = _iterator3()).done;) {
            var item = _step3.value;

            _this11.remove(item);
          }

          break;

        case 'clear':
          _this11.clear();

          break;

        case 'prepend':
          _this11.appendArray(change.items.reverse());

          break;

        case 'append':
          (_this12 = _this11).unshift.apply(_this12, change.items.reverse());

          break;

        case 'insert':
          _this11.merge(change.newState.slice().reverse());

          break;

        case 'merge':
          _this11.merge(change.items.slice().reverse());

          break;

        case 'swap':
          _this11.merge(change.newState.slice().reverse());

          break;

        case 'replace':
          _this11.merge(change.newState.slice().reverse());

          break;
      }
    }, cancellationToken);
    return _this11;
  }

  var _proto5 = ReversedArrayView.prototype;

  _proto5.refresh = function refresh() {
    this.merge(this.parent.getData().slice().reverse());
  };

  return ReversedArrayView;
}(ArrayDataSource);
var SortedArrayView = /*#__PURE__*/function (_ArrayDataSource3) {
  _inheritsLoose(SortedArrayView, _ArrayDataSource3);

  function SortedArrayView(parent, comparator, cancellationToken) {
    var _this13;

    if (cancellationToken === void 0) {
      cancellationToken = new CancellationToken();
    }

    var initial = parent.getData().slice().sort(comparator);
    _this13 = _ArrayDataSource3.call(this, initial) || this;
    _this13.parent = parent;
    _this13.comparator = comparator;
    parent.listen(function (change) {
      var _this14;

      switch (change.operationDetailed) {
        case 'removeLeft':
        case 'removeRight':
        case 'remove':
          for (var _iterator4 = _createForOfIteratorHelperLoose(change.items), _step4; !(_step4 = _iterator4()).done;) {
            var item = _step4.value;

            _this13.remove(item);
          }

          break;

        case 'clear':
          _this13.clear();

          break;

        case 'prepend':
          (_this14 = _this13).unshift.apply(_this14, change.items);

          _this13.data.sort(_this13.comparator);

          break;

        case 'append':
          _this13.appendSorted(change.items);

          break;

        case 'insert':
          _this13.appendSorted(change.items);

          break;

        case 'merge':
          _this13.merge(change.items.slice().sort(_this13.comparator));

          break;

        case 'swap':
          break;

        case 'replace':
          _this13.remove(change.target);

          _this13.appendSorted(change.items);

          break;
      }
    }, cancellationToken);
    return _this13;
  }

  var _proto6 = SortedArrayView.prototype;

  _proto6.appendSorted = function appendSorted(items) {
    this.merge(this.data.concat(items).sort(this.comparator));
  };

  _proto6.refresh = function refresh() {
    this.merge(this.parent.getData().slice().sort(this.comparator));
  };

  return SortedArrayView;
}(ArrayDataSource);
var FilteredArrayView = /*#__PURE__*/function (_ArrayDataSource4) {
  _inheritsLoose(FilteredArrayView, _ArrayDataSource4);

  function FilteredArrayView(parent, filter, cancellationToken) {
    var _this15;

    if (cancellationToken === void 0) {
      cancellationToken = new CancellationToken();
    }

    if (Array.isArray(parent)) {
      parent = new ArrayDataSource(parent);
    }

    filter = filter !== null && filter !== void 0 ? filter : function () {
      return true;
    };
    var initial = parent.data.filter(filter);
    _this15 = _ArrayDataSource4.call(this, initial) || this;
    _this15.parent = parent;
    _this15.viewFilter = filter;
    parent.listen(function (change) {
      var _this16, _this17;

      var filteredItems;

      switch (change.operationDetailed) {
        case 'clear':
          _this15.clear();

          break;

        case 'removeLeft':
        case 'removeRight':
        case 'remove':
          for (var _iterator5 = _createForOfIteratorHelperLoose(change.items), _step5; !(_step5 = _iterator5()).done;) {
            var item = _step5.value;

            _this15.remove(item);
          }

          break;

        case 'prepend':
          filteredItems = change.items.filter(_this15.viewFilter);

          (_this16 = _this15).unshift.apply(_this16, filteredItems);

          break;

        case 'append':
          filteredItems = change.items.filter(_this15.viewFilter);

          _this15.appendArray(filteredItems);

          break;

        case 'insert':
          filteredItems = change.items.filter(_this15.viewFilter);

          (_this17 = _this15).insertAt.apply(_this17, [change.index].concat(filteredItems));

          break;

        case 'merge':
          _this15.merge(change.items.filter(_this15.viewFilter));

          break;

        case 'swap':
          var indexA = _this15.data.indexOf(change.items[0]);

          var indexB = _this15.data.indexOf(change.items[1]);

          if (indexA !== -1 && indexB !== -1) {
            _this15.swap(indexA, indexB);
          }

          break;

        case 'replace':
          var index = _this15.data.indexOf(change.target);

          if (index !== -1) {
            var acceptNew = _this15.viewFilter(change.items[0]);

            if (acceptNew) {
              _this15.set(index, change.items[0]);
            } else {
              _this15.remove(change.target);
            }
          }

          break;
      }
    }, cancellationToken);
    return _this15;
  }

  var _proto7 = FilteredArrayView.prototype;

  _proto7.updateFilter = function updateFilter(filter) {
    if (this.viewFilter === filter) {
      return;
    }

    this.viewFilter = filter;
    this.refresh();
    return this.data.length;
  };

  _proto7.refresh = function refresh() {
    this.merge(this.parent.data.filter(this.viewFilter));
  };

  return FilteredArrayView;
}(ArrayDataSource);
function processTransform(operations, result) {
  return function (v) {
    try {
      var _temp5 = function _temp5(_result3) {
        if (_exit3) return _result3;
        result.update(v);
      };

      var _exit3;

      var _temp6 = _forOf(operations, function (operation) {
        var _interrupt;

        return _switch(operation.operationType, [[function () {
          return exports.OperationType.NOOP;
        }], [function () {
          return exports.OperationType.MAP;
        }, function () {
          v = operation.operation(v);
          _interrupt = 1;
        }], [function () {
          return exports.OperationType.MAP_DELAY_FILTER;
        }], [function () {
          return exports.OperationType.DELAY_FILTER;
        }, function () {
          return Promise.resolve(operation.operation(v)).then(function (tmp) {
            var _exit2;

            function _temp2(_result2) {
              if (_exit2) return _result2;
              _interrupt = 1;
            }

            var _temp = function () {
              if (tmp.cancelled) {
                _exit3 = 1;
              } else {
                return Promise.resolve(tmp.item).then(function (_tmp$item) {
                  v = _tmp$item;
                });
              }
            }();

            return _temp && _temp.then ? _temp.then(_temp2) : _temp2(_temp);
          });
        }], [function () {
          return exports.OperationType.DELAY;
        }], [function () {
          return exports.OperationType.MAP_DELAY;
        }, function () {
          return Promise.resolve(operation.operation(v)).then(function (_operation$operation) {
            v = _operation$operation;
            _interrupt = 1;
          });
        }], [function () {
          return exports.OperationType.FILTER;
        }, function () {
          if (!operation.operation(v)) {
            _exit3 = 1;
            return;
          }

          _interrupt = 1;
        }]]);
      }, function () {
        return _exit3;
      });

      return Promise.resolve(_temp6 && _temp6.then ? _temp6.then(_temp5) : _temp5(_temp6));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}

(function (DataFlow) {
  DataFlow[DataFlow["UPSTREAM"] = 0] = "UPSTREAM";
  DataFlow[DataFlow["DOWNSTREAM"] = 1] = "DOWNSTREAM";
})(exports.DataFlow || (exports.DataFlow = {}));

var DuplexDataSource = /*#__PURE__*/function () {
  function DuplexDataSource(initialValue, propagateWritesToReadStream, name) {
    if (propagateWritesToReadStream === void 0) {
      propagateWritesToReadStream = true;
    }

    if (name === void 0) {
      name = 'RootDuplexDataSource';
    }

    this.name = name;
    this.value = initialValue;
    this.primed = initialValue !== undefined;
    this.updateDownstreamEvent = new EventEmitter();
    this.updateUpstreamEvent = new EventEmitter();
    this.propagateWritesToReadStream = propagateWritesToReadStream;
  }

  DuplexDataSource.fromTwoDataSource = function fromTwoDataSource(downStream, upstream, initialValue, propagateWritesToReadStream) {
    if (propagateWritesToReadStream === void 0) {
      propagateWritesToReadStream = true;
    }

    var result = new DuplexDataSource(initialValue, propagateWritesToReadStream);
    result.updateDownstreamEvent = downStream.updateEvent;
    result.updateUpstreamEvent = upstream.updateEvent;
    return result;
  };

  var _proto = DuplexDataSource.prototype;

  _proto.withInitial = function withInitial(value) {
    if (!this.primed) {
      this.updateDownstream(value);
    }

    return this;
  };

  DuplexDataSource.createOneWay = function createOneWay(direction, initialValue) {
    if (direction === void 0) {
      direction = exports.DataFlow.DOWNSTREAM;
    }

    return new DuplexDataSource(initialValue, false).oneWayFlow(direction);
  };

  _proto.updateDownstream = function updateDownstream(newValue) {
    if (this.updatingDownstream) {
      throw new Error('Problem in datas source: Unstable value propagation, when updating a value the stream was updated back as a direct response. This can lead to infinite loops and is therefore not allowed');
    }

    this.primed = true;
    this.updatingDownstream = true;
    this.value = newValue;
    this.updateDownstreamEvent.fire(newValue);
    this.updatingDownstream = false;
  };

  _proto.updateUpstream = function updateUpstream(newValue) {
    if (this.updatingUpstream) {
      throw new Error('Problem in datas source: Unstable value propagation, when updating a value the stream was updated back as a direct response. This can lead to infinite loops and is therefore not allowed');
    }

    this.primed = true;
    this.updatingUpstream = true;
    this.value = newValue;
    this.updateUpstreamEvent.fire(newValue);

    if (this.propagateWritesToReadStream) {
      this.updateDownstreamEvent.fire(newValue);
    }

    this.updatingUpstream = false;
  };

  _proto.listenAndRepeat = function listenAndRepeat(callback, cancellationToken) {
    callback(this.value);
    return this.listen(callback, cancellationToken);
  };

  _proto.listen = function listen(callback, cancellationToken) {
    return this.updateDownstreamEvent.subscribe(callback, cancellationToken).cancel;
  };

  _proto.listenUpstream = function listenUpstream(callback, cancellationToken) {
    return this.updateUpstreamEvent.subscribe(callback, cancellationToken).cancel;
  };

  _proto.listenUpstreamOnce = function listenUpstreamOnce(callback, cancellationToken) {
    return this.updateUpstreamEvent.subscribeOnce(callback, cancellationToken).cancel;
  };

  _proto.listenDownstream = function listenDownstream(callback, cancellationToken) {
    return this.updateDownstreamEvent.subscribe(callback, cancellationToken).cancel;
  };

  _proto.downStreamToDataSource = function downStreamToDataSource(cancellationToken) {
    var downStreamDatasource = new DataSource(this.value);
    this.listenDownstream(function (newVal) {
      downStreamDatasource.update(newVal);
    }, cancellationToken);
    return downStreamDatasource;
  };

  _proto.aggregate = function aggregate(otherSource, combinator, cancellationToken) {
    var _this = this;

    cancellationToken = cancellationToken !== null && cancellationToken !== void 0 ? cancellationToken : new CancellationToken();
    var aggregatedSource = new TransientDataSource(cancellationToken, combinator(this.value, otherSource.value));
    this.listen(function () {
      return aggregatedSource.update(combinator(_this.value, otherSource.value));
    }, cancellationToken);
    otherSource.listen(function () {
      return aggregatedSource.update(combinator(_this.value, otherSource.value));
    }, cancellationToken);
    return aggregatedSource;
  };

  _proto.aggregateThree = function aggregateThree(second, third, combinator, cancellationToken) {
    var _this2 = this;

    cancellationToken = cancellationToken !== null && cancellationToken !== void 0 ? cancellationToken : new CancellationToken();
    var aggregatedSource = new TransientDataSource(cancellationToken, combinator(this.value, second.value, third.value));
    this.listen(function () {
      return aggregatedSource.update(combinator(_this2.value, second.value, third.value));
    }, cancellationToken);
    second.listen(function () {
      return aggregatedSource.update(combinator(_this2.value, second.value, third.value));
    }, cancellationToken);
    third.listen(function () {
      return aggregatedSource.update(combinator(_this2.value, second.value, third.value));
    }, cancellationToken);
    return aggregatedSource;
  };

  _proto.aggregateFour = function aggregateFour(second, third, fourth, combinator, cancellationToken) {
    var _this3 = this;

    cancellationToken = cancellationToken !== null && cancellationToken !== void 0 ? cancellationToken : new CancellationToken();
    var aggregatedSource = new TransientDataSource(cancellationToken, combinator(this.value, second.value, third.value, fourth.value));
    this.listen(function () {
      return aggregatedSource.update(combinator(_this3.value, second.value, third.value, fourth.value));
    }, cancellationToken);
    second.listen(function () {
      return aggregatedSource.update(combinator(_this3.value, second.value, third.value, fourth.value));
    }, cancellationToken);
    third.listen(function () {
      return aggregatedSource.update(combinator(_this3.value, second.value, third.value, fourth.value));
    }, cancellationToken);
    fourth.listen(function () {
      return aggregatedSource.update(combinator(_this3.value, second.value, third.value, fourth.value));
    }, cancellationToken);
    return aggregatedSource;
  };

  _proto.filter = function filter(downStreamFilter, upstreamFilter, cancellationToken) {
    var _this4 = this;

    if (typeof upstreamFilter === 'function') {
      var filteredSource = new DuplexDataSource(undefined, false);
      this.listenDownstream(function (newVal) {
        if (downStreamFilter(newVal, filteredSource.value)) {
          filteredSource.updateDownstream(newVal);
        }
      }, cancellationToken);
      filteredSource.listenUpstream(function (newVal) {
        if (upstreamFilter(newVal, _this4.value)) {
          _this4.updateUpstream(newVal);
        }
      }, cancellationToken);
      return filteredSource;
    } else {
      var _filteredSource = new DataSource();

      this.listenDownstream(function (newVal) {
        if (downStreamFilter(newVal, _filteredSource.value)) {
          _filteredSource.update(newVal);
        }
      }, upstreamFilter);
      return _filteredSource;
    }
  };

  _proto.transform = function transform(operationA, operationB, operationC, operationD, operationE, operationF, operationG, operationH, operationI, operationJ, operationK, cancellationToken) {
    var token;
    var operations = [operationA, operationB, operationC, operationD, operationE, operationF, operationG, operationH, operationI, operationJ, operationK].filter(function (e) {
      return e && (e instanceof CancellationToken ? (token = e, false) : true);
    });

    if (cancellationToken) {
      token = cancellationToken;
    }

    var result = new DataSource(undefined, this.name + ' ' + operations.map(function (v) {
      return v.name;
    }).join(' '));
    (this.primed ? this.listenAndRepeat : this.listen).call(this, processTransform(operations, result), token);
    return result;
  };

  _proto.pipe = function pipe(targetDataSource, cancellationToken) {
    var _this5 = this;

    this.listenDownstream(function (newVal) {
      return targetDataSource.updateDownstream(newVal);
    }, cancellationToken);
    targetDataSource.listenUpstream(function (newVal) {
      return _this5.updateUpstream(newVal);
    }, cancellationToken);
    return this;
  };

  _proto.map = function map(mapper, reverseMapper, cancellationToken) {
    var _this6 = this;

    if (typeof reverseMapper === 'function') {
      var mappedSource;

      if (this.primed) {
        mappedSource = new DuplexDataSource(mapper(this.value), false);
      } else {
        mappedSource = new DuplexDataSource(undefined, false);
      }

      this.listenDownstream(function (v) {
        return mappedSource.updateDownstream(mapper(v));
      }, cancellationToken);
      mappedSource.listenUpstream(function (v) {
        return _this6.updateUpstream(reverseMapper(v));
      }, cancellationToken);
      return mappedSource;
    } else {
      var _mappedSource;

      if (this.primed) {
        _mappedSource = new DataSource(mapper(this.value));
      } else {
        _mappedSource = new DataSource();
      }

      this.listenDownstream(function (v) {
        return _mappedSource.update(mapper(v));
      }, reverseMapper);
      return _mappedSource;
    }
  };

  _proto.listenOnce = function listenOnce(callback, cancellationToken) {
    return this.updateDownstreamEvent.subscribeOnce(callback, cancellationToken).cancel;
  };

  _proto.awaitNextUpdate = function awaitNextUpdate(cancellationToken) {
    var _this7 = this;

    return new Promise(function (resolve) {
      _this7.listenOnce(function (value) {
        return resolve(value);
      }, cancellationToken);
    });
  };

  _proto.debounceUpstream = function debounceUpstream(time, cancellationToken) {
    var _this8 = this;

    var debouncedDataSource = new DuplexDataSource(this.value);
    var timeout;
    debouncedDataSource.listenUpstream(function (v) {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        _this8.updateUpstream(v);
      }, time);
    }, cancellationToken);
    this.listenDownstream(function (v) {
      debouncedDataSource.updateDownstream(v);
    }, cancellationToken);
    return debouncedDataSource;
  };

  _proto.debounceDownstream = function debounceDownstream(time, cancellationToken) {
    var _this9 = this;

    var debouncedDataSource = new DuplexDataSource(this.value);
    var timeout;
    this.listenDownstream(function (v) {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        debouncedDataSource.updateDownstream(v);
      }, time);
    }, cancellationToken);
    debouncedDataSource.listenUpstream(function (v) {
      _this9.updateUpstream(v);
    }, cancellationToken);
    return debouncedDataSource;
  };

  _proto.diff = function diff(cancellationToken) {
    cancellationToken = cancellationToken !== null && cancellationToken !== void 0 ? cancellationToken : new CancellationToken();
    var diffingSource = new TransientDataSource(cancellationToken, {
      "new": this.value,
      old: undefined
    });
    this.listen(function (value) {
      diffingSource.update({
        "new": value,
        old: diffingSource.value["new"]
      });
    }, cancellationToken);
    return diffingSource;
  };

  _proto.unique = function unique(cancellationToken) {
    var _this10 = this;

    var uniqueSource = new DuplexDataSource(this.value, false);
    var upstreamValue = this.value;
    var downStreamValue = this.value;
    this.listenDownstream(function (v) {
      if (downStreamValue !== v) {
        downStreamValue = v;
        uniqueSource.updateDownstream(v);
      }
    }, cancellationToken);
    uniqueSource.listenUpstream(function (v) {
      if (upstreamValue !== v) {
        upstreamValue = v;

        _this10.updateUpstream(v);
      }
    }, cancellationToken);
    return uniqueSource;
  };

  _proto.oneWayFlow = function oneWayFlow(direction, cancellationToken) {
    var _this11 = this;

    if (direction === void 0) {
      direction = exports.DataFlow.DOWNSTREAM;
    }

    var oneWaySource = new DuplexDataSource(this.value, false);

    if (direction === exports.DataFlow.DOWNSTREAM) {
      this.listenDownstream(function (v) {
        return oneWaySource.updateDownstream(v);
      }, cancellationToken);

      oneWaySource.updateUpstream = function () {
        return void 0;
      };
    } else {
      oneWaySource.listenUpstream(function (v) {
        return _this11.updateUpstream(v);
      });

      oneWaySource.updateDownstream = function () {
        return void 0;
      };
    }

    return oneWaySource;
  };

  _proto.reduce = function reduce(reducer, initialValue, cancellationToken) {
    var reduceSource = new DataSource(initialValue);
    this.listen(function (v) {
      return reduceSource.update(reducer(reduceSource.value, v));
    }, cancellationToken);
    return reduceSource;
  };

  _proto.cancelAll = function cancelAll() {
    this.updateDownstreamEvent.cancelAll();
    this.updateUpstreamEvent.cancelAll();
  };

  return DuplexDataSource;
}();

function aurumClassName(data, cancellationToken) {
  var result = [];

  var _loop = function _loop(key) {
    if (data[key]) {
      if (data[key] instanceof DataSource || data[key] instanceof DuplexDataSource) {
        var source = data[key];
        var mappedSource = new DataSource(source.value ? key : '');
        source.listen(function (value) {
          mappedSource.update(value ? key : '');
        }, cancellationToken);
        result.push(mappedSource);
      } else {
        result.push(key);
      }
    }
  };

  for (var key in data) {
    _loop(key);
  }

  return result;
}

function createRenderSession() {
  var session = {
    attachCalls: [],
    sessionToken: new CancellationToken(function () {
      for (var _iterator = _createForOfIteratorHelperLoose(session.tokens), _step; !(_step = _iterator()).done;) {
        var token = _step.value;
        token.cancel();
      }
    }),
    tokens: []
  };
  return session;
}
var aurumElementModelIdentitiy = Symbol('AurumElementModel');
var nodeData = new WeakMap();
var AurumElement = /*#__PURE__*/function () {
  function AurumElement(dataSource, api) {
    var _this = this;

    this.children = [];
    this.api = api;
    this.api.onAttach(function () {
      if (_this.hostNode === undefined) {
        throw new Error('illegal state: Attach fired but not actually attached');
      }

      _this.render(dataSource);
    });
  }

  var _proto = AurumElement.prototype;

  _proto.dispose = function dispose() {
    this.clearContent();
  };

  _proto.attachToDom = function attachToDom(node, index) {
    if (this.hostNode) {
      throw new Error('Aurum Element is already attached');
    }

    var id = AurumElement.id++;
    this.hostNode = node;
    this.contentStartMarker = document.createComment('START Aurum Node ' + id);
    this.contentEndMarker = document.createComment('END Aurum Node ' + id);

    if (index >= node.childNodes.length) {
      node.appendChild(this.contentStartMarker);
      node.appendChild(this.contentEndMarker);
    } else {
      node.insertBefore(this.contentStartMarker, node.childNodes[index]);
      node.insertBefore(this.contentEndMarker, node.childNodes[index + 1]);
    }
  };

  _proto.getWorkIndex = function getWorkIndex() {
    if (this.lastStartIndex !== undefined && this.hostNode.childNodes[this.lastStartIndex] === this.contentStartMarker) {
      return this.lastStartIndex + 1;
    }

    for (var i = 0; i < this.hostNode.childNodes.length; i++) {
      if (this.hostNode.childNodes[i] === this.contentStartMarker) {
        this.lastStartIndex = i;
        return i + 1;
      }
    }
  };

  _proto.getLastIndex = function getLastIndex() {
    if (this.lastEndIndex !== undefined && this.hostNode.childNodes[this.lastEndIndex] === this.contentEndMarker) {
      return this.lastEndIndex;
    }

    for (var i = 0; i < this.hostNode.childNodes.length; i++) {
      if (this.hostNode.childNodes[i] === this.contentEndMarker) {
        this.lastEndIndex = i;
        return i;
      }
    }
  };

  _proto.clearContent = function clearContent() {
    if (this.hostNode === undefined) {
      throw new Error('illegal state: Aurum element was not attched to anything');
    }

    var workIndex = this.getWorkIndex();

    while (this.hostNode.childNodes[workIndex] !== this.contentEndMarker) {
      this.hostNode.removeChild(this.hostNode.childNodes[workIndex]);
    }
  };

  _proto.updateDom = function updateDom() {
    if (this.hostNode === undefined) {
      throw new Error('illegal state: Aurum element was not attched to anything');
    }

    var workIndex = this.getWorkIndex();
    var i;
    var offset = 0;

    for (i = 0; i < this.children.length; i++) {
      var child = this.children[i];

      if (child === undefined || child === null) {
        continue;
      }

      if (child instanceof AurumElement) {
        offset += child.getLastIndex() - i - offset - workIndex;
        continue;
      }

      if (this.hostNode.childNodes[i + workIndex + offset] !== this.contentEndMarker && this.hostNode.childNodes[i + workIndex + offset] !== this.children[i]) {
        if (child instanceof HTMLElement || child instanceof Text) {
          this.hostNode.removeChild(this.hostNode.childNodes[i + workIndex + offset]);

          if (this.hostNode.childNodes[i + workIndex + offset]) {
            this.hostNode.insertBefore(child, this.hostNode.childNodes[i + workIndex + offset]);
          } else {
            this.hostNode.appendChild(child);
          }
        } else {
          throw new Error('not implemented');
        }
      } else {
        if (child instanceof HTMLElement || child instanceof Text) {
          if (this.hostNode.childNodes[i + workIndex + offset]) {
            this.hostNode.insertBefore(child, this.hostNode.childNodes[i + workIndex + offset]);
          } else {
            this.hostNode.appendChild(child);
          }
        } else {
          throw new Error('not implemented');
        }
      }
    }

    while (this.hostNode.childNodes[i + workIndex + offset] !== this.contentEndMarker) {
      this.hostNode.removeChild(this.hostNode.childNodes[i + workIndex + offset]);
    }
  };

  return AurumElement;
}();
AurumElement.id = 1;
function render(element, session, prerendering) {
  if (prerendering === void 0) {
    prerendering = false;
  }

  if (element == undefined) {
    return undefined;
  }

  if (pendingSessions.has(element)) {
    var subSession = pendingSessions.get(element);

    if (subSession.sessionToken) {
      var _session$attachCalls;

      (_session$attachCalls = session.attachCalls).push.apply(_session$attachCalls, subSession.attachCalls);

      session.sessionToken.chain(subSession.sessionToken);
      subSession.attachCalls = undefined;
      subSession.sessionToken = undefined;
    }

    pendingSessions["delete"](element);
  }

  if (Array.isArray(element)) {
    return Array.prototype.concat.apply([], element.map(function (e) {
      return render(e, session, prerendering);
    }));
  }

  if (!prerendering) {
    if (element instanceof Promise) {
      var ds = new DataSource();
      element.then(function (val) {
        ds.update(val);
      });
      var result = new SingularAurumElement(ds, createAPI(session));
      return result;
    } else if (element instanceof DataSource || element instanceof DuplexDataSource) {
      var _result = new SingularAurumElement(element, createAPI(session));

      return _result;
    } else if (element instanceof ArrayDataSource) {
      var _result2 = new ArrayAurumElement(element, createAPI(session));

      return _result2;
    }

    var type = typeof element;

    if (type === 'string' || type === 'number' || type === 'bigint' || type === 'boolean') {
      return document.createTextNode(element.toString());
    }
  }

  if (element[aurumElementModelIdentitiy]) {
    var model = element;
    return render(model.factory(model.props || {}, model.children, createAPI(session)), session, prerendering);
  }

  return element;
}
var pendingSessions = new WeakMap();
function createAPI(session) {
  var token = undefined;
  var api = {
    renderSession: session,
    onAttach: function onAttach(cb) {
      session.attachCalls.push(cb);
    },
    onDetach: function onDetach(cb) {
      if (!token) {
        token = new CancellationToken();
        session.tokens.push(token);
      }

      token.addCancelable(cb);
    },
    onError: function onError(cb) {
      throw new Error('not implemented');
    },

    get cancellationToken() {
      if (!token) {
        token = new CancellationToken();
        session.tokens.push(token);
      }

      return token;
    },

    prerender: function prerender(target) {
      var subSession = createRenderSession();
      var result = render(target, subSession, true);

      if (Array.isArray(result)) {
        for (var _iterator2 = _createForOfIteratorHelperLoose(result), _step2; !(_step2 = _iterator2()).done;) {
          var item = _step2.value;

          if (typeof item === 'object') {
            pendingSessions.set(item, subSession);
          }
        }
      } else {
        pendingSessions.set(result, subSession);
      }

      return result;
    },

    get style() {
      return function aurumStyle(fragments) {
        var input = [].slice.call(arguments, 1);
        var result = new DataSource();

        for (var _iterator3 = _createForOfIteratorHelperLoose(input), _step3; !(_step3 = _iterator3()).done;) {
          var ins = _step3.value;

          if (ins instanceof DataSource || ins instanceof DuplexDataSource) {
            ins.listen(function () {
              return result.update(recompute(fragments, input));
            }, api.cancellationToken);
          }
        }

        result.update(recompute(fragments, input));
        return result;
      };
    }

  };
  return api;
}

function recompute(fragments, input) {
  var result = '';

  for (var i = 0; i < fragments.length; i++) {
    result += fragments[i];

    if (input[i]) {
      if (typeof input[i] === 'string') {
        result += input[i];
      } else {
        result += input[i].value;
      }
    }
  }

  return result;
}

var ArrayAurumElement = /*#__PURE__*/function (_AurumElement) {
  _inheritsLoose(ArrayAurumElement, _AurumElement);

  function ArrayAurumElement(dataSource, api) {
    var _this2;

    _this2 = _AurumElement.call(this, dataSource, api) || this;
    _this2.renderSessions = new WeakMap();
    _this2.dataSource = dataSource;
    return _this2;
  }

  var _proto2 = ArrayAurumElement.prototype;

  _proto2.attachToDom = function attachToDom(node, index) {
    _AurumElement.prototype.attachToDom.call(this, node, index);

    this.contentStartMarker.dataSource = this.dataSource;
    this.contentEndMarker.dataSource = this.dataSource;
  };

  _proto2.render = function render(dataSource) {
    var _this3 = this;

    dataSource.listenAndRepeat(function (n) {
      _this3.handleNewContent(n);

      _this3.updateDom();
    }, this.api.cancellationToken);
  };

  _proto2.spliceChildren = function spliceChildren(index, amount, newItems) {
    var removed;

    if (newItems) {
      removed = this.children.splice(index, amount, newItems);
    } else {
      removed = this.children.splice(index, amount);
    }

    for (var _iterator4 = _createForOfIteratorHelperLoose(removed), _step4; !(_step4 = _iterator4()).done;) {
      var item = _step4.value;
      this.renderSessions.get(item).sessionToken.cancel();
    }
  };

  _proto2.handleNewContent = function handleNewContent(change) {
    switch (change.operationDetailed) {
      case 'merge':
        var source = change.previousState.slice();

        for (var i = 0; i < change.newState.length; i++) {
          if (this.children.length <= i) {
            this.children.push(this.renderItem(change.newState[i]));
          }

          if (source[i] !== change.newState[i]) {
            var _index = source.indexOf(change.newState[i]);

            if (_index !== -1) {
              var a = this.children[i];
              var b = this.children[_index];
              this.children[i] = b;
              this.children[_index] = a;
              var c = source[i];
              var d = source[_index];
              source[i] = d;
              source[_index] = c;
            } else {
              this.spliceChildren(i, 0, this.renderItem(change.newState[i]));
              source.splice(i, 0, change.newState[i]);
            }
          }
        }

        if (this.children.length > change.newState.length) {
          this.children.length = change.newState.length;
        }

        break;

      case 'remove':
      case 'removeLeft':
      case 'removeRight':
        this.spliceChildren(change.index, change.count);
        break;

      case 'append':
        for (var _iterator5 = _createForOfIteratorHelperLoose(change.items), _step5; !(_step5 = _iterator5()).done;) {
          var item = _step5.value;

          var _rendered = this.renderItem(item);

          if (Array.isArray(_rendered)) {
            this.children = this.children.concat(_rendered);
          } else {
            this.children.push(_rendered);
          }
        }

        break;

      case 'replace':
        var rendered = this.renderItem(change.items[0]);

        if (Array.isArray(rendered)) {
          throw new Error('illegal state');
        } else {
          this.children[change.index] = rendered;
        }

        break;

      case 'swap':
        var itemA = this.children[change.index];
        var itemB = this.children[change.index2];
        this.children[change.index2] = itemA;
        this.children[change.index] = itemB;
        break;

      case 'prepend':
        for (var _iterator6 = _createForOfIteratorHelperLoose(change.items), _step6; !(_step6 = _iterator6()).done;) {
          var _item = _step6.value;

          var _rendered2 = this.renderItem(_item);

          if (Array.isArray(_rendered2)) {
            throw new Error('illegal state');
          } else {
            this.children.unshift(_rendered2);
          }
        }

        break;

      case 'insert':
        var index = change.index;

        for (var _iterator7 = _createForOfIteratorHelperLoose(change.items), _step7; !(_step7 = _iterator7()).done;) {
          var _item2 = _step7.value;

          var _rendered3 = this.renderItem(_item2);

          if (Array.isArray(_rendered3)) {
            throw new Error('illegal state');
          } else {
            this.children.splice(index, 0, _rendered3);
            index += 1;
          }
        }

        break;

      case 'remove':
        for (var _iterator8 = _createForOfIteratorHelperLoose(change.items), _step8; !(_step8 = _iterator8()).done;) {
          var _item3 = _step8.value;

          var _rendered4 = this.renderItem(_item3);

          if (Array.isArray(_rendered4)) {
            throw new Error('illegal state');
          } else {
            this.children.unshift(_rendered4);
          }
        }

        break;

      case 'clear':
        this.children.length = 0;
        this.renderSessions = new WeakMap();
        break;

      default:
        throw new Error('not implemented');
    }

    this.updateDom();
  };

  _proto2.renderItem = function renderItem(item) {
    var s = createRenderSession();
    var rendered = render(item, s);

    for (var _iterator9 = _createForOfIteratorHelperLoose(s.attachCalls), _step9; !(_step9 = _iterator9()).done;) {
      var cb = _step9.value;
      cb();
    }

    this.renderSessions.set(rendered, s);
    return rendered;
  };

  return ArrayAurumElement;
}(AurumElement);
var SingularAurumElement = /*#__PURE__*/function (_AurumElement2) {
  _inheritsLoose(SingularAurumElement, _AurumElement2);

  function SingularAurumElement(dataSource, api) {
    var _this4;

    _this4 = _AurumElement2.call(this, dataSource, api) || this;

    _this4.api.cancellationToken.addCancelable(function () {
      var _a;

      return (_a = _this4.renderSession) === null || _a === void 0 ? void 0 : _a.sessionToken.cancel();
    });

    _this4.dataSource = dataSource;
    return _this4;
  }

  var _proto3 = SingularAurumElement.prototype;

  _proto3.attachToDom = function attachToDom(node, index) {
    _AurumElement2.prototype.attachToDom.call(this, node, index);

    this.contentStartMarker.dataSource = this.dataSource;
    this.contentEndMarker.dataSource = this.dataSource;
  };

  _proto3.render = function render(dataSource) {
    var _this5 = this;

    dataSource.listenAndRepeat(function (n) {
      _this5.handleNewContent(n);

      _this5.updateDom();
    }, this.api.cancellationToken);
  };

  _proto3.handleNewContent = function handleNewContent(newValue) {
    if (this.lastValue === newValue) {
      return;
    }

    var optimized = false;

    if (this.children.length === 1 && this.children[0] instanceof Text) {
      var type = typeof newValue;

      if (type === 'string' || type === 'bigint' || type === 'number') {
        this.children[0].nodeValue = newValue;
        optimized = true;
      }
    }

    if (!optimized) {
      this.fullRebuild(newValue);
    }

    this.lastValue = newValue;
  };

  _proto3.fullRebuild = function fullRebuild(newValue) {
    this.clearContent();
    this.endSession();
    this.renderSession = createRenderSession();
    var rendered = render(newValue, this.renderSession);

    if (rendered === undefined) {
      this.children = [];
      return;
    }

    if (!Array.isArray(rendered)) {
      rendered = [rendered];
    }

    for (var _iterator10 = _createForOfIteratorHelperLoose(rendered), _step10; !(_step10 = _iterator10()).done;) {
      var item = _step10.value;

      if (item instanceof AurumElement) {
        item.attachToDom(this.hostNode, this.getLastIndex());
      }
    }

    for (var _iterator11 = _createForOfIteratorHelperLoose(this.renderSession.attachCalls), _step11; !(_step11 = _iterator11()).done;) {
      var cb = _step11.value;
      cb();
    }

    if (Array.isArray(rendered)) {
      this.children = rendered;
    }
  };

  _proto3.endSession = function endSession() {
    if (this.renderSession) {
      this.renderSession.sessionToken.cancel();
      this.renderSession = undefined;
    }
  };

  return SingularAurumElement;
}(AurumElement);

var defaultEvents = {
  drag: 'onDrag',
  dragstart: 'onDragStart',
  dragend: 'onDragEnd',
  dragexit: 'onDragExit',
  dragover: 'onDragOver',
  dragenter: 'onDragEnter',
  dragleave: 'onDragLeave',
  blur: 'onBlur',
  focus: 'onFocus',
  click: 'onClick',
  dblclick: 'onDblClick',
  keydown: 'onKeyDown',
  keyhit: 'onKeyHit',
  keyup: 'onKeyUp',
  mousedown: 'onMouseDown',
  mouseup: 'onMouseUp',
  mousemove: 'onMouseMove',
  mouseenter: 'onMouseEnter',
  mouseleave: 'onMouseLeave',
  mousewheel: 'onMouseWheel',
  load: 'onLoad',
  error: 'onError'
};
var defaultAttributes = ['id', 'name', 'draggable', 'tabindex', 'style', 'role', 'contentEditable', 'slot', 'title'];
function DomNodeCreator(nodeName, extraAttributes, extraEvents, extraLogic) {
  return function (props, children, api) {
    var node = document.createElement(nodeName);

    if (props) {
      processHTMLNode(node, props, api.cancellationToken, extraAttributes, extraEvents);
    }

    var renderedChildren = render(children, api.renderSession);
    connectChildren(node, renderedChildren);

    if (props.onAttach) {
      api.onAttach(function () {
        return props.onAttach(node);
      });
    }

    if (props.onDetach) {
      api.onDetach(function () {
        if (node.isConnected) {
          node.parentElement.removeChild(node);
        }

        props.onDetach(node);
      });
    }

    extraLogic === null || extraLogic === void 0 ? void 0 : extraLogic(node, props, api.cancellationToken);
    return node;
  };
}

function connectChildren(target, children) {
  if (children === undefined || children === null) {
    return;
  }

  if (Array.isArray(children)) {
    for (var _iterator = _createForOfIteratorHelperLoose(children), _step; !(_step = _iterator()).done;) {
      var child = _step.value;
      connectChildren(target, child);
    }

    return;
  }

  if (children instanceof AurumElement) {
    children.attachToDom(target, target.childNodes.length);
  } else if (children instanceof HTMLElement || children instanceof Text) {
    target.appendChild(children);
  } else {
    throw new Error("Unexpected child type passed to DOM Node: " + children);
  }
}

function processHTMLNode(node, props, cleanUp, extraAttributes, extraEvents) {
  createEventHandlers(node, defaultEvents, props);

  if (extraEvents) {
    createEventHandlers(node, extraEvents, props);
  }

  var dataProps = Object.keys(props).filter(function (e) {
    return e.includes('-');
  });
  bindProps(node, defaultAttributes, props, dataProps);

  if (extraAttributes) {
    bindProps(node, extraAttributes, props);
  }

  if (props["class"]) {
    handleClass(node, props["class"], cleanUp);
  }
}
function createEventHandlers(node, events, props) {
  var _loop = function _loop(key) {
    if (props[events[key]]) {
      if (props[events[key]] instanceof DataSource) {
        node.addEventListener(key, function (e) {
          return props[events[key]].update(e);
        });
      } else if (props[events[key]] instanceof DuplexDataSource) {
        node.addEventListener(key, function (e) {
          return props[events[key]].updateDownstream(e);
        });
      } else if (typeof props[events[key]] === 'function') {
        node.addEventListener(key, function (e) {
          return props[events[key]](e);
        });
      }
    }
  };

  for (var key in events) {
    _loop(key);
  }
}

function bindProps(node, keys, props, dynamicProps) {
  for (var _iterator2 = _createForOfIteratorHelperLoose(keys), _step2; !(_step2 = _iterator2()).done;) {
    var _key = _step2.value;

    if (props[_key]) {
      assignStringSourceToAttribute(node, props[_key], _key);
    }
  }

  if (dynamicProps) {
    for (var _iterator3 = _createForOfIteratorHelperLoose(dynamicProps), _step3; !(_step3 = _iterator3()).done;) {
      var key = _step3.value;

      if (props[key]) {
        assignStringSourceToAttribute(node, props[key], key);
      }
    }
  }
}

function assignStringSourceToAttribute(node, data, key) {
  if (typeof data === 'string') {
    node.setAttribute(key, data);
  } else if (typeof data === 'boolean') {
    if (data) {
      node.setAttribute(key, '');
    }
  } else if (data instanceof DataSource || data instanceof DuplexDataSource) {
    if (typeof data.value === 'string') {
      node.setAttribute(key, data.value);
    } else if (typeof data.value === 'boolean') {
      if (data.value) {
        node.setAttribute(key, '');
      }
    }

    data.unique().listen(function (v) {
      if (typeof v === 'string') {
        node.setAttribute(key, v);
      } else if (typeof v === 'boolean') {
        if (v) {
          node.setAttribute(key, '');
        } else {
          node.removeAttribute(key);
        }
      }
    });
  } else {
    throw new Error('Attributes only support types boolean, string, number and data sources');
  }
}

function handleClass(node, data, cleanUp) {
  if (typeof data === 'string') {
    node.className = data;
  } else if (data instanceof DataSource || data instanceof DuplexDataSource) {
    if (data.value) {
      if (Array.isArray(data.value)) {
        node.className = data.value.join(' ');
        data.unique(cleanUp).listen(function () {
          node.className = data.value.join(' ');
        });
      } else {
        node.className = data.value;
        data.unique(cleanUp).listen(function () {
          node.className = data.value;
        });
      }
    }

    data.unique(cleanUp).listen(function (v) {
      return node.className = v;
    });
  } else {
    var value = data.reduce(function (p, c) {
      if (typeof c === 'string') {
        return p + " " + c;
      } else {
        if (c.value) {
          return p + " " + c.value;
        } else {
          return p;
        }
      }
    }, '');
    node.className = value;

    for (var _iterator4 = _createForOfIteratorHelperLoose(data), _step4; !(_step4 = _iterator4()).done;) {
      var i = _step4.value;

      if (i instanceof DataSource) {
        i.unique(cleanUp).listen(function (v) {
          var value = data.reduce(function (p, c) {
            if (typeof c === 'string') {
              return p + " " + c;
            } else {
              if (c.value) {
                return p + " " + c.value;
              } else {
                return p;
              }
            }
          }, '');
          node.className = value;
        });
      }
    }
  }
}

var inputEvents = {
  input: 'onInput',
  change: 'onChange'
};
var inputProps = ['placeholder', 'readonly', 'disabled', 'accept', 'alt', 'autocomplete', 'autofocus', 'checked', 'defaultChecked', 'formAction', 'formEnctype', 'formMethod', 'formNoValidate', 'formTarget', 'max', 'maxLength', 'min', 'minLength', 'pattern', 'multiple', 'required', 'type'];
var Input = DomNodeCreator('input', inputProps, inputEvents, function (node, props, cleanUp) {
  var input = node;

  if (props.value) {
    if (props.value instanceof DataSource) {
      props.value.listenAndRepeat(function (v) {
        input.value = v;
      }, cleanUp);
      input.addEventListener('input', function () {
        props.value.update(input.value);
      });
    } else if (props.value instanceof DuplexDataSource) {
      props.value.listenAndRepeat(function (v) {
        input.value = v;
      }, cleanUp);
      input.addEventListener('input', function () {
        props.value.updateUpstream(input.value);
      });
    } else {
      input.value = props.value;
    }
  }

  if (props.checked) {
    if (props.checked instanceof DataSource) {
      props.checked.listenAndRepeat(function (v) {
        input.checked = v;
      }, cleanUp);
      input.addEventListener('change', function () {
        props.checked.update(input.checked);
      });
    } else if (props.checked instanceof DuplexDataSource) {
      props.checked.listenAndRepeat(function (v) {
        input.checked = v;
      }, cleanUp);
      input.addEventListener('change', function () {
        props.checked.updateUpstream(input.checked);
      });
    } else {
      input.checked = props.checked;
    }
  }
});

var selectEvents = {
  change: 'onChange'
};
var Select = DomNodeCreator('select', undefined, selectEvents, function (node, props, cleanUp) {
  var select = node;

  if (props.value) {
    if (props.value instanceof DataSource) {
      props.value.listenAndRepeat(function (v) {
        select.value = v;
      }, cleanUp);
      select.addEventListener('change', function () {
        props.value.update(select.value);
      });
    } else if (props.value instanceof DuplexDataSource) {
      props.value.listenAndRepeat(function (v) {
        select.value = v;
      }, cleanUp);
      select.addEventListener('change', function () {
        props.value.updateUpstream(select.value);
      });
    } else {
      select.value = props.value;
    }
  }

  if (props.selectedIndex) {
    if (props.selectedIndex instanceof DataSource) {
      props.selectedIndex.listenAndRepeat(function (v) {
        select.selectedIndex = v;
      }, cleanUp);
      select.addEventListener('change', function () {
        props.selectedIndex.update(select.selectedIndex);
      });
    } else if (props.selectedIndex instanceof DuplexDataSource) {
      props.selectedIndex.listenAndRepeat(function (v) {
        select.selectedIndex = v;
      }, cleanUp);
      select.addEventListener('change', function () {
        props.selectedIndex.updateUpstream(select.selectedIndex);
      });
    } else {
      select.selectedIndex = props.selectedIndex;
    }
  }
});

var Code = DomNodeCreator('code');
var Div = DomNodeCreator('div');
var A = DomNodeCreator('a', ['href', 'target']);
var Abbr = DomNodeCreator('abbr');
var H1 = DomNodeCreator('h1');
var H2 = DomNodeCreator('h2');
var H3 = DomNodeCreator('h3');
var H4 = DomNodeCreator('h4');
var H5 = DomNodeCreator('h5');
var H6 = DomNodeCreator('h6');
var Area = DomNodeCreator('area', ['alt', 'coors']);
var Article = DomNodeCreator('article');
var Aside = DomNodeCreator('aside');
var Span = DomNodeCreator('span');
var NoScript = DomNodeCreator('noscript');
var Video = DomNodeCreator('video', ['controls', 'autoplay', 'loop', 'muted', 'preload', 'src', 'poster', 'width', 'height']);
var Ul = DomNodeCreator('ul');
var Ol = DomNodeCreator('ol');
var Li = DomNodeCreator('li');
var Tr = DomNodeCreator('tr');
var B = DomNodeCreator('b');
var Title = DomNodeCreator('title');
var Summary = DomNodeCreator('summary');
var THead = DomNodeCreator('thead');
var Template = DomNodeCreator('template');
var Q = DomNodeCreator('q');
var Pre = DomNodeCreator('pre');
var P = DomNodeCreator('p');
var Hr = DomNodeCreator('hr');
var Audio = DomNodeCreator('audio', ['controls', 'autoplay', 'loop', 'muted', 'preload', 'src']);
var Br = DomNodeCreator('br');
var Button = DomNodeCreator('button', ['disabled']);
var Canvas = DomNodeCreator('canvas', ['width', 'height']);
var Data = DomNodeCreator('data', ['value']);
var Details = DomNodeCreator('details');
var Em = DomNodeCreator('em');
var Footer = DomNodeCreator('footer');
var Form = DomNodeCreator('form');
var Head = DomNodeCreator('head');
var Header = DomNodeCreator('header');
var Heading = DomNodeCreator('heading');
var I = DomNodeCreator('i');
var IFrame = DomNodeCreator('iframe', ['src', 'srcdoc', 'width', 'height', 'allow', 'allowFullscreen', 'allowPaymentRequest']);
var Img = DomNodeCreator('img', ['src', 'alt', 'width', 'height', 'referrerPolicy', 'sizes', 'srcset', 'useMap']);
var Label = DomNodeCreator('label', ['for']);
var Link = DomNodeCreator('link', ['href', 'rel', 'media', 'as', 'disabled', 'type']);
var Nav = DomNodeCreator('nav');
var Sub = DomNodeCreator('sub');
var Sup = DomNodeCreator('sup');
var Table = DomNodeCreator('table');
var TBody = DomNodeCreator('tbody');
var TFoot = DomNodeCreator('tfoot');
var Td = DomNodeCreator('td');
var Th = DomNodeCreator('th');
var Time = DomNodeCreator('time', ['datetime']);
var Style = DomNodeCreator('style', ['media']);
var Source = DomNodeCreator('source', ['src', 'srcSet', 'media', 'sizes', 'type']);
var Script = DomNodeCreator('script', ['src', 'async', 'defer', 'integrity', 'noModule', 'type']);
var Svg = DomNodeCreator('svg', ['width', 'height']);
var Progress = DomNodeCreator('progress', ['max', 'value']);
var Option = DomNodeCreator('option', ['value']);
var Slot = DomNodeCreator('slot', ['name']);

var textAreaEvents = {
  input: 'onInput',
  change: 'onChange'
};
var textAreaProps = ['placeholder', 'readonly', 'disabled', 'rows', 'wrap', 'autocomplete', 'autofocus', 'max', 'maxLength', 'min', 'minLength', 'required', 'type'];
var TextArea = DomNodeCreator('textArea', textAreaProps, textAreaEvents, function (node, props, cleanUp) {
  var textArea = node;

  if (props.value) {
    if (props.value instanceof DataSource) {
      props.value.listenAndRepeat(function (v) {
        textArea.value = v;
      }, cleanUp);
      textArea.addEventListener('input', function () {
        props.value.update(textArea.value);
      });
    } else if (props.value instanceof DuplexDataSource) {
      props.value.listenAndRepeat(function (v) {
        textArea.value = v;
      }, cleanUp);
      textArea.addEventListener('input', function () {
        props.value.updateUpstream(textArea.value);
      });
    } else {
      textArea.value = props.value;
    }
  }
});

var nodeMap = {
  button: Button,
  code: Code,
  hr: Hr,
  div: Div,
  input: Input,
  li: Li,
  span: Span,
  style: Style,
  ul: Ul,
  p: P,
  img: Img,
  link: Link,
  canvas: Canvas,
  a: A,
  article: Article,
  br: Br,
  form: Form,
  label: Label,
  ol: Ol,
  pre: Pre,
  progress: Progress,
  table: Table,
  td: Td,
  tr: Tr,
  th: Th,
  textarea: TextArea,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  head: Head,
  header: Header,
  footer: Footer,
  nav: Nav,
  b: B,
  i: I,
  script: Script,
  abbr: Abbr,
  area: Area,
  aside: Aside,
  audio: Audio,
  em: Em,
  heading: Heading,
  iframe: IFrame,
  noscript: NoScript,
  option: Option,
  q: Q,
  select: Select,
  source: Source,
  title: Title,
  video: Video,
  tbody: TBody,
  tfoot: TFoot,
  thead: THead,
  summary: Summary,
  details: Details,
  sub: Sub,
  sup: Sup,
  svg: Svg,
  data: Data,
  time: Time,
  template: Template,
  slot: Slot
};
var Aurum = /*#__PURE__*/function () {
  function Aurum() {}

  Aurum.attach = function attach(aurumRenderable, dom) {
    var session = createRenderSession();
    var content = render(aurumRenderable, session);

    if (content instanceof AurumElement) {
      content.attachToDom(dom, dom.childNodes.length);
      session.sessionToken.addCancelable(function () {
        return content.dispose();
      });
    } else if (Array.isArray(content)) {
      var root = new ArrayAurumElement(new ArrayDataSource(content), createAPI(session));
      session.sessionToken.addCancelable(function () {
        return root.dispose();
      });
      root.attachToDom(dom, dom.childNodes.length);
    } else {
      dom.appendChild(content);
      session.sessionToken.addCancelable(function () {
        dom.removeChild(content);
      });
    }

    for (var i = session.attachCalls.length - 1; i >= 0; i--) {
      session.attachCalls[i]();
    }

    return session.sessionToken;
  };

  Aurum.factory = function factory(node, args) {
    var _ref;

    var name;

    if (typeof node === 'string') {
      name = node;
      var type = node;
      node = nodeMap[node];

      if (node === undefined) {
        throw new Error("Node " + type + " does not exist or is not supported");
      }
    }

    return _ref = {}, _ref[aurumElementModelIdentitiy] = true, _ref.name = name, _ref.factory = node, _ref.props = args, _ref.children = [].slice.call(arguments, 2), _ref;
  };

  return Aurum;
}();

function Webcomponent(config, logic) {
  customElements.define(config.name, /*#__PURE__*/function (_HTMLElement) {
    _inheritsLoose(_class, _HTMLElement);

    function _class() {
      var _this;

      _this = _HTMLElement.call(this) || this;

      if (config.observedAttributes === undefined) {
        config.observedAttributes = [];
      }

      _this.props = {};

      for (var _iterator = _createForOfIteratorHelperLoose(config.observedAttributes), _step; !(_step = _iterator()).done;) {
        var attr = _step.value;
        _this.props[attr] = new DataSource();
      }

      return _this;
    }

    var _proto = _class.prototype;

    _proto.attributeChangedCallback = function attributeChangedCallback(name, oldValue, newValue) {
      if (oldValue !== newValue) {
        this.props[name].update(newValue);
      }
    };

    _proto.connectedCallback = function connectedCallback() {
      var _a;

      var template = document.createDocumentFragment();
      this.session = createRenderSession();
      this.api = createAPI(this.session);
      var content = logic(this.props, this.api);

      for (var _iterator2 = _createForOfIteratorHelperLoose(this.session.attachCalls), _step2; !(_step2 = _iterator2()).done;) {
        var cb = _step2.value;
        cb();
      }

      Aurum.attach(content, template);
      this.attachShadow({
        mode: (_a = config.shadowRootMode) !== null && _a !== void 0 ? _a : 'open',
        delegatesFocus: config.shadowRootDelegatesFocus
      }).appendChild(template);
    };

    _proto.disconnectedCallback = function disconnectedCallback() {
      this.session.sessionToken.cancel();
    };

    _createClass(_class, null, [{
      key: "observedAttributes",
      get: function get() {
        return config.observedAttributes;
      }
    }]);

    return _class;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));
  return DomNodeCreator(config.name, config.observedAttributes, undefined, function (node, props) {
    for (var key in props) {
      if (!(key in node.props)) {
        node.props[key] = props[key];
      }
    }
  });
}

function AurumRouter(props, children, api) {
  children = [].concat.apply([], children.filter(function (c) {
    return !!c;
  }));

  if (children.some(function (c) {
    return !c[aurumElementModelIdentitiy] || !(c.factory === Route || c.factory === DefaultRoute);
  })) {
    throw new Error('Aurum Router only accepts Route and DefaultRoute instances as children');
  }

  if (children.filter(function (c) {
    return c.factory === DefaultRoute;
  }).length > 1) {
    throw new Error('Too many default routes only 0 or 1 allowed');
  }

  var urlDataSource = new DataSource(getUrlPath());
  api.cancellationToken.registerDomEvent(window, 'hashchange', function () {
    urlDataSource.update(getUrlPath());
  });
  return urlDataSource.unique(api.cancellationToken).withInitial(urlDataSource.value).map(function (p) {
    return selectRoute(p, children);
  });
}

function getUrlPath() {
  var hash = location.hash.substring(1);

  if (hash.includes('?')) {
    return hash.substring(0, hash.indexOf('?'));
  } else if (hash.includes('#')) {
    return hash.substring(0, hash.indexOf('#'));
  } else {
    return hash;
  }
}

function selectRoute(url, routes) {
  var _a, _b;

  if (url === undefined || url === null) {
    return (_a = routes.find(function (r) {
      return r.factory === DefaultRoute;
    })) === null || _a === void 0 ? void 0 : _a.children;
  } else {
    if (routes.find(function (r) {
      var _a;

      return ((_a = r.props) === null || _a === void 0 ? void 0 : _a.href) === url;
    })) {
      return routes.find(function (r) {
        var _a;

        return ((_a = r.props) === null || _a === void 0 ? void 0 : _a.href) === url;
      }).children;
    } else {
      var segments = url.split('/');
      segments.pop();

      var _loop = function _loop() {
        var path = segments.join('/');

        if (routes.find(function (r) {
          var _a;

          return ((_a = r.props) === null || _a === void 0 ? void 0 : _a.href) === path;
        })) {
          return {
            v: routes.find(function (r) {
              var _a;

              return ((_a = r.props) === null || _a === void 0 ? void 0 : _a.href) === path;
            }).children
          };
        }

        segments.pop();
      };

      while (segments.length) {
        var _ret = _loop();

        if (typeof _ret === "object") return _ret.v;
      }

      return (_b = routes.find(function (r) {
        return r.factory === DefaultRoute;
      })) === null || _b === void 0 ? void 0 : _b.children;
    }
  }
}

function Route(props, children) {
  return undefined;
}
function DefaultRoute(props, children) {
  return undefined;
}

function Suspense(props, children, api) {
  var data = new DataSource(props === null || props === void 0 ? void 0 : props.fallback);
  var cleanUp = new CancellationToken();
  api.onDetach(function () {
    cleanUp.cancel();
  });
  Promise.all(api.prerender(children, cleanUp)).then(function (res) {
    if (!cleanUp.isCanceled) {
      data.update(res);
    }
  }, function (e) {
    cleanUp.cancel();
    return Promise.reject(e);
  });
  return data;
}

var Stream = /*#__PURE__*/function () {
  function Stream(inputSource, outputSource) {
    this.input = inputSource !== null && inputSource !== void 0 ? inputSource : new DataSource();
    this.output = outputSource !== null && outputSource !== void 0 ? outputSource : this.input;
  }

  Stream.fromFetchRaw = function fromFetchRaw(url) {
    var input = new DataSource();
    var output = new DataSource();
    input.listen(function (value) {
      output.update(fetch(url, value));
    });
    return new Stream(input, output);
  };

  Stream.fromFetchPostJson = function fromFetchPostJson(url, baseRequestData) {
    var input = new DataSource();
    var output = new DataSource();
    input.listen(function (value) {
      try {
        var _update2 = output.update;
        return Promise.resolve(fetch(url, Object.assign({
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        }, baseRequestData, {
          body: JSON.stringify(value)
        })).then(function (s) {
          return s.json();
        })).then(function (_fetch$then) {
          _update2.call(output, _fetch$then);
        });
      } catch (e) {
        return Promise.reject(e);
      }
    });
    return new Stream(input, output);
  };

  Stream.fromFetchGetJson = function fromFetchGetJson(url, baseRequestData) {
    var input = new DataSource();
    var output = new DataSource();
    input.listen(function () {
      try {
        var _update4 = output.update;
        return Promise.resolve(fetch(url).then(function (s) {
          return s.json();
        })).then(function (_fetch$then2) {
          _update4.call(output, _fetch$then2);
        });
      } catch (e) {
        return Promise.reject(e);
      }
    });
    return new Stream(input, output);
  };

  var _proto = Stream.prototype;

  _proto.update = function update(data) {
    this.input.update(data);
  };

  _proto.transform = function transform(operationA, operationB, operationC, operationD, operationE, operationF, operationG, operationH, operationI, operationJ, operationK, cancellationToken) {
    var token;
    var operations = [operationA, operationB, operationC, operationD, operationE, operationF, operationG, operationH, operationI, operationJ, operationK].filter(function (e) {
      return e && (e instanceof CancellationToken ? (token = e, false) : true);
    });

    if (cancellationToken) {
      token = cancellationToken;
    }

    var result = new DataSource(undefined, this.output.name + ' ' + operations.map(function (v) {
      return v.name;
    }).join(' '));
    this.listen(processTransform(operations, result), token);
    return new Stream(this.input, result);
  };

  _proto.getOutput = function getOutput() {
    return this.output;
  };

  _proto.listen = function listen(callback, cancellationToken) {
    return this.output.listen(callback, cancellationToken);
  };

  _proto.listenAndRepeat = function listenAndRepeat(callback, cancellationToken) {
    return this.output.listenAndRepeat(callback, cancellationToken);
  };

  _proto.listenOnce = function listenOnce(callback, cancellationToken) {
    return this.output.listenOnce(callback, cancellationToken);
  };

  _proto.awaitNextUpdate = function awaitNextUpdate(cancellationToken) {
    return this.output.awaitNextUpdate(cancellationToken);
  };

  _proto.cancelAll = function cancelAll() {
    this.input.cancelAll();
    this.output.cancelAll();
  };

  _createClass(Stream, [{
    key: "name",
    get: function get() {
      return "IN:" + this.input.name + " OUT:" + this.output.name;
    }
  }, {
    key: "value",
    get: function get() {
      return this.output.value;
    }
  }]);

  return Stream;
}();

function dsMap(mapper) {
  return {
    name: 'map',
    operationType: exports.OperationType.MAP,
    operation: function operation(v) {
      return mapper(v);
    }
  };
}
function dsMapAsync(mapper) {
  return {
    name: 'mapAsync',
    operationType: exports.OperationType.MAP_DELAY,
    operation: function operation(v) {
      return mapper(v);
    }
  };
}
function dsDiff() {
  var lastValue = undefined;
  return {
    name: 'diff',
    operationType: exports.OperationType.MAP,
    operation: function operation(v) {
      var result = {
        oldValue: lastValue,
        newValue: v
      };
      lastValue = v;
      return result;
    }
  };
}
function dsFilter(predicate) {
  return {
    name: 'filter',
    operationType: exports.OperationType.FILTER,
    operation: function operation(v) {
      return predicate(v);
    }
  };
}
function dsFilterAsync(predicate) {
  return {
    name: 'filterAsync',
    operationType: exports.OperationType.DELAY_FILTER,
    operation: function operation(v) {
      return predicate(v);
    }
  };
}
function dsEven() {
  return {
    name: 'even',
    operationType: exports.OperationType.FILTER,
    operation: function operation(v) {
      return v % 2 === 0;
    }
  };
}
function dsOdd() {
  return {
    name: 'odd',
    operationType: exports.OperationType.FILTER,
    operation: function operation(v) {
      return v % 2 !== 0;
    }
  };
}
function dsMin() {
  var last = Number.MAX_SAFE_INTEGER;
  return {
    name: 'min',
    operationType: exports.OperationType.FILTER,
    operation: function operation(v) {
      if (v < last) {
        last = v;
        return true;
      } else {
        return false;
      }
    }
  };
}
function dsMax() {
  var last = Number.MIN_SAFE_INTEGER;
  return {
    name: 'max',
    operationType: exports.OperationType.FILTER,
    operation: function operation(v) {
      if (v > last) {
        last = v;
        return true;
      } else {
        return false;
      }
    }
  };
}
function dsSkipDynamic(amountLeft) {
  return {
    operationType: exports.OperationType.FILTER,
    name: 'skipDynamic',
    operation: function operation(v) {
      if (amountLeft.value === 0) {
        return true;
      } else {
        amountLeft.update(amountLeft.value - 1);
        return false;
      }
    }
  };
}
function dsSkip(amount) {
  return {
    operationType: exports.OperationType.FILTER,
    name: "skip " + amount,
    operation: function operation(v) {
      if (amount === 0) {
        return true;
      } else {
        amount--;
        return false;
      }
    }
  };
}
function dsCutOff(amount) {
  return {
    name: "cutoff " + amount,
    operationType: exports.OperationType.FILTER,
    operation: function operation(v) {
      if (amount === 0) {
        return false;
      } else {
        amount--;
        return true;
      }
    }
  };
}
function dsCutOffDynamic(amountLeft) {
  return {
    name: 'cutoffDynamic',
    operationType: exports.OperationType.FILTER,
    operation: function operation(v) {
      if (amountLeft.value === 0) {
        return false;
      } else {
        amountLeft.update(amountLeft.value - 1);
        return true;
      }
    }
  };
}
function dsUnique() {
  var last;
  return {
    name: 'unique',
    operationType: exports.OperationType.FILTER,
    operation: function operation(v) {
      if (v === last) {
        return false;
      } else {
        last = v;
        return true;
      }
    }
  };
}
function dsAwait() {
  return {
    name: 'await',
    operationType: exports.OperationType.MAP_DELAY,
    operation: function operation(v) {
      return v;
    }
  };
}
function dsAwaitOrdered() {
  var processItem = function processItem() {
    try {
      return Promise.resolve(queue[0]).then(function () {
        var item = queue.shift();
        onDequeue.fire();
        return item;
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  var queue = [];
  var onDequeue = new EventEmitter();
  return {
    operationType: exports.OperationType.MAP_DELAY,
    name: 'awaitOrdered',
    operation: function (v) {
      try {
        queue.push(v);

        if (queue.length === 1) {
          return processItem();
        } else {
          var unsub = onDequeue.subscribe(function () {
            try {
              if (queue[0] === v) {
                unsub.cancel();
                return processItem();
              }

              return Promise.resolve();
            } catch (e) {
              return Promise.reject(e);
            }
          });
        }

        return Promise.resolve();
      } catch (e) {
        return Promise.reject(e);
      }
    }
  };
}
function dsAwaitLatest() {
  var freshnessToken;
  return {
    operationType: exports.OperationType.MAP_DELAY_FILTER,
    name: 'awaitLatest',
    operation: function (v) {
      try {
        freshnessToken = Date.now();
        var timestamp = freshnessToken;
        return Promise.resolve(v).then(function (resolved) {
          if (freshnessToken === timestamp) {
            return {
              item: resolved,
              cancelled: false
            };
          } else {
            return {
              item: undefined,
              cancelled: true
            };
          }
        });
      } catch (e) {
        return Promise.reject(e);
      }
    }
  };
}
function dsReduce(reducer, initialValue) {
  var last = initialValue;
  return {
    name: 'reduce',
    operationType: exports.OperationType.MAP,
    operation: function operation(v) {
      last = reducer(last, v);
      return last;
    }
  };
}
function dsStringJoin(seperator) {
  if (seperator === void 0) {
    seperator = ', ';
  }

  var last;
  return {
    name: "stringJoin " + seperator,
    operationType: exports.OperationType.MAP,
    operation: function operation(v) {
      if (last) {
        last += seperator + v;
      } else {
        last = v;
      }

      return last;
    }
  };
}
function dsDelay(time) {
  return {
    name: "delay " + time + "ms",
    operationType: exports.OperationType.DELAY,
    operation: function operation(v) {
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve(v);
        }, time);
      });
    }
  };
}
function dsDebounce(time) {
  var timeout;
  var cancelled = new EventEmitter();
  return {
    operationType: exports.OperationType.DELAY_FILTER,
    name: "debounce " + time + "ms",
    operation: function operation(v) {
      return new Promise(function (resolve) {
        clearTimeout(timeout);
        cancelled.fire();
        cancelled.subscribeOnce(function () {
          resolve(true);
        });
        timeout = setTimeout(function () {
          resolve(false);
        }, time);
      });
    }
  };
}
function dsSemaphore(state) {
  return {
    operationType: exports.OperationType.DELAY,
    name: 'semaphore',
    operation: function operation(v) {
      return new Promise(function (resolve) {
        if (state.value > 0) {
          state.update(state.value - 1);
          resolve(v);
        } else {
          var cancel = state.listen(function () {
            if (state.value > 0) {
              cancel();
              state.update(state.value - 1);
              resolve(v);
            }
          });
        }
      });
    }
  };
}
function dsLock(state) {
  return {
    name: 'lock',
    operationType: exports.OperationType.DELAY,
    operation: function operation(v) {
      return new Promise(function (resolve) {
        if (state.value) {
          resolve(v);
        } else {
          var cancel = state.listen(function () {
            if (state.value) {
              cancel();
              resolve(v);
            }
          });
        }
      });
    }
  };
}
function dsThrottle(time) {
  var cooldown = false;
  return {
    name: "throttle " + time + "ms",
    operationType: exports.OperationType.FILTER,
    operation: function operation(v) {
      if (!cooldown) {
        cooldown = true;
        setTimeout(function () {
          cooldown = false;
        }, time);
        return true;
      } else {
        return false;
      }
    }
  };
}
function dsBuffer(time) {
  var buffer = [];
  var promise;
  return {
    name: "buffer " + time + "ms",
    operationType: exports.OperationType.MAP_DELAY_FILTER,
    operation: function operation(v) {
      buffer.push(v);

      if (!promise) {
        promise = new Promise(function (resolve) {
          setTimeout(function () {
            promise = undefined;
            resolve({
              cancelled: false,
              item: buffer
            });
            buffer = [];
          }, time);
        });
        return promise;
      } else {
        return Promise.resolve({
          cancelled: true,
          item: undefined
        });
      }
    }
  };
}
function dsPick(key) {
  return {
    name: "pick " + key,
    operationType: exports.OperationType.MAP,
    operation: function operation(v) {
      if (v !== undefined && v !== null) {
        return v[key];
      } else {
        return v;
      }
    }
  };
}
function dsPipe(target) {
  return {
    name: "pipe " + target.name,
    operationType: exports.OperationType.NOOP,
    operation: function operation(v) {
      if (target instanceof DataSource || target instanceof Stream) {
        target.update(v);
      } else {
        target.updateDownstream(v);
      }

      return v;
    }
  };
}
function dsTap(cb) {
  return {
    name: 'tap',
    operationType: exports.OperationType.NOOP,
    operation: function operation(v) {
      cb(v);
      return v;
    }
  };
}
function dsLoadBalance(targets) {
  var i = 0;
  return {
    name: "loadBalance [" + targets.map(function (v) {
      return v.name;
    }).join() + "]",
    operationType: exports.OperationType.NOOP,
    operation: function operation(v) {
      var target = targets[i++];

      if (i >= targets.length) {
        i = 0;
      }

      if (target instanceof DataSource || target instanceof Stream) {
        target.update(v);
      } else {
        target.updateDownstream(v);
      }

      return v;
    }
  };
}

function Switch(props, children, api) {
  children = [].concat.apply([], children.filter(function (c) {
    return !!c;
  }));

  if (children.some(function (c) {
    return !c[aurumElementModelIdentitiy] || !(c.factory === SwitchCase || c.factory === DefaultSwitchCase);
  })) {
    throw new Error('Switch only accepts SwitchCase as children');
  }

  if (children.filter(function (c) {
    return c.factory === DefaultSwitchCase;
  }).length > 1) {
    throw new Error('Too many default switch cases only 0 or 1 allowed');
  }

  var cleanUp = new CancellationToken();
  api.onDetach(function () {
    cleanUp.cancel();
  });
  var u = props.state.transform(dsUnique(), cleanUp);
  return u.withInitial(props.state.value).map(function (state) {
    return selectCase(state, children);
  });
}

function selectCase(state, children) {
  var _a, _b, _c;

  return (_b = (_a = children.find(function (c) {
    var _a;

    return ((_a = c.props) === null || _a === void 0 ? void 0 : _a.when) === state;
  })) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : (_c = children.find(function (p) {
    return p.factory === DefaultSwitchCase;
  })) === null || _c === void 0 ? void 0 : _c.children;
}

function SwitchCase(props, children) {
  return undefined;
}
function DefaultSwitchCase(props, children) {
  return undefined;
}

var ObjectDataSource = /*#__PURE__*/function () {
  function ObjectDataSource(initialData) {
    if (initialData) {
      this.data = initialData;
    }

    this.updateEvent = new EventEmitter();
    this.updateEventOnKey = new Map();
  }

  var _proto = ObjectDataSource.prototype;

  _proto.pick = function pick(key, cancellationToken) {
    var _a;

    var subDataSource = new DataSource((_a = this.data) === null || _a === void 0 ? void 0 : _a[key]);
    this.listenOnKey(key, function (v) {
      subDataSource.update(v.newValue);
    }, cancellationToken);
    return subDataSource;
  };

  _proto.listen = function listen(callback, cancellationToken) {
    return this.updateEvent.subscribe(callback, cancellationToken).cancel;
  };

  _proto.listenOnKeyAndRepeat = function listenOnKeyAndRepeat(key, callback, cancellationToken) {
    callback({
      key: key,
      newValue: this.data[key],
      oldValue: undefined
    });
    return this.listenOnKey(key, callback, cancellationToken);
  };

  _proto.listenOnKey = function listenOnKey(key, callback, cancellationToken) {
    if (!this.updateEventOnKey.has(key)) {
      this.updateEventOnKey.set(key, new EventEmitter());
    }

    var event = this.updateEventOnKey.get(key);
    return event.subscribe(callback, cancellationToken).cancel;
  };

  _proto.keys = function keys() {
    return Object.keys(this.data);
  };

  _proto.values = function values() {
    return Object.values(this.data);
  };

  _proto.get = function get(key) {
    return this.data[key];
  };

  _proto["delete"] = function _delete(key) {
    var old = this.data[key];
    delete this.data[key];
    this.updateEvent.fire({
      oldValue: old,
      key: key,
      newValue: undefined,
      deleted: true
    });

    if (this.updateEventOnKey.has(key)) {
      this.updateEventOnKey.get(key).fire({
        oldValue: old,
        key: key,
        newValue: undefined
      });
    }
  };

  _proto.set = function set(key, value) {
    if (this.data[key] === value) {
      return;
    }

    var old = this.data[key];
    this.data[key] = value;
    this.updateEvent.fire({
      oldValue: old,
      key: key,
      newValue: this.data[key]
    });

    if (this.updateEventOnKey.has(key)) {
      this.updateEventOnKey.get(key).fire({
        oldValue: old,
        key: key,
        newValue: this.data[key]
      });
    }
  };

  _proto.assign = function assign(newData) {
    if (newData instanceof ObjectDataSource) {
      for (var _iterator = _createForOfIteratorHelperLoose(newData.keys()), _step; !(_step = _iterator()).done;) {
        var key = _step.value;
        this.set(key, newData.data[key]);
      }
    } else {
      for (var _i = 0, _Object$keys = Object.keys(newData); _i < _Object$keys.length; _i++) {
        var _key = _Object$keys[_i];
        this.set(_key, newData[_key]);
      }
    }
  };

  _proto.toObject = function toObject() {
    return Object.assign({}, this.data);
  };

  _proto.toDataSource = function toDataSource() {
    var _this = this;

    var stream = new DataSource(this.data);
    this.listen(function (s) {
      stream.update(_this.data);
    });
    return stream;
  };

  return ObjectDataSource;
}();

var MapDataSource = /*#__PURE__*/function () {
  function MapDataSource(initialData) {
    if (initialData) {
      this.data = initialData;
    }

    this.updateEvent = new EventEmitter();
    this.updateEventOnKey = new Map();
  }

  var _proto = MapDataSource.prototype;

  _proto.pick = function pick(key, cancellationToken) {
    var subDataSource = new DataSource(this.data.get(key));
    this.listenOnKey(key, function (v) {
      subDataSource.update(v.newValue);
    }, cancellationToken);
    return subDataSource;
  };

  _proto.listen = function listen(callback, cancellationToken) {
    return this.updateEvent.subscribe(callback, cancellationToken).cancel;
  };

  _proto.listenOnKeyAndRepeat = function listenOnKeyAndRepeat(key, callback, cancellationToken) {
    callback({
      key: key,
      newValue: this.data.get(key),
      oldValue: undefined
    });
    return this.listenOnKey(key, callback, cancellationToken);
  };

  _proto.listenOnKey = function listenOnKey(key, callback, cancellationToken) {
    if (!this.updateEventOnKey.has(key)) {
      this.updateEventOnKey.set(key, new EventEmitter());
    }

    var event = this.updateEventOnKey.get(key);
    return event.subscribe(callback, cancellationToken).cancel;
  };

  _proto.keys = function keys() {
    return this.data.keys();
  };

  _proto.values = function values() {
    return this.data.values();
  };

  _proto.get = function get(key) {
    return this.data.get(key);
  };

  _proto.has = function has(key) {
    return this.data.has(key);
  };

  _proto["delete"] = function _delete(key) {
    var old = this.data.get(key);
    this.data["delete"](key);
    this.updateEvent.fire({
      oldValue: old,
      key: key,
      newValue: undefined,
      deleted: true
    });

    if (this.updateEventOnKey.has(key)) {
      this.updateEventOnKey.get(key).fire({
        oldValue: old,
        key: key,
        newValue: undefined
      });
    }
  };

  _proto.set = function set(key, value) {
    if (this.data.get(key) === value) {
      return;
    }

    var old = this.data.get(key);
    this.data.set(key, value);
    this.updateEvent.fire({
      oldValue: old,
      key: key,
      newValue: this.data.get(key)
    });

    if (this.updateEventOnKey.has(key)) {
      this.updateEventOnKey.get(key).fire({
        oldValue: old,
        key: key,
        newValue: this.data.get(key)
      });
    }
  };

  _proto.assign = function assign(newData) {
    for (var _iterator = _createForOfIteratorHelperLoose(newData.keys()), _step; !(_step = _iterator()).done;) {
      var key = _step.value;
      this.set(key, newData.get(key));
    }
  };

  _proto.toMap = function toMap() {
    return new Map(this.data.entries());
  };

  return MapDataSource;
}();

var SetDataSource = /*#__PURE__*/function () {
  function SetDataSource(initialData) {
    if (initialData) {
      this.data = initialData;
    }

    this.updateEvent = new EventEmitter();
    this.updateEventOnKey = new Map();
  }

  var _proto = SetDataSource.prototype;

  _proto.pick = function pick(key, cancellationToken) {
    var subDataSource = new DataSource(this.data.has(key));
    this.listenOnKey(key, function (v) {
      subDataSource.update(v);
    }, cancellationToken);
    return subDataSource;
  };

  _proto.listen = function listen(callback, cancellationToken) {
    return this.updateEvent.subscribe(callback, cancellationToken).cancel;
  };

  _proto.listenOnKeyAndRepeat = function listenOnKeyAndRepeat(key, callback, cancellationToken) {
    callback(this.has(key));
    return this.listenOnKey(key, callback, cancellationToken);
  };

  _proto.listenOnKey = function listenOnKey(key, callback, cancellationToken) {
    if (!this.updateEventOnKey.has(key)) {
      this.updateEventOnKey.set(key, new EventEmitter());
    }

    var event = this.updateEventOnKey.get(key);
    return event.subscribe(callback, cancellationToken).cancel;
  };

  _proto.keys = function keys() {
    return this.data.keys();
  };

  _proto.has = function has(key) {
    return this.data.has(key);
  };

  _proto["delete"] = function _delete(key) {
    this.data["delete"](key);
    this.updateEvent.fire({
      key: key,
      exists: false
    });

    if (this.updateEventOnKey.has(key)) {
      this.updateEventOnKey.get(key).fire(false);
    }
  };

  _proto.add = function add(key) {
    if (this.data.has(key)) {
      return;
    }

    this.data.add(key);
    this.updateEvent.fire({
      key: key,
      exists: true
    });

    if (this.updateEventOnKey.has(key)) {
      this.updateEventOnKey.get(key).fire(true);
    }
  };

  _proto.assign = function assign(newData) {
    for (var _iterator = _createForOfIteratorHelperLoose(newData.keys()), _step; !(_step = _iterator()).done;) {
      var key = _step.value;
      this.add(key);
    }
  };

  _proto.toSet = function toSet() {
    return new Set(this.data.keys());
  };

  return SetDataSource;
}();

var debugMode = false;

exports.ArrayAurumElement = ArrayAurumElement;
exports.ArrayDataSource = ArrayDataSource;
exports.Aurum = Aurum;
exports.AurumElement = AurumElement;
exports.AurumRouter = AurumRouter;
exports.CancellationToken = CancellationToken;
exports.DataSource = DataSource;
exports.DefaultRoute = DefaultRoute;
exports.DefaultSwitchCase = DefaultSwitchCase;
exports.DuplexDataSource = DuplexDataSource;
exports.EventEmitter = EventEmitter;
exports.FilteredArrayView = FilteredArrayView;
exports.MapDataSource = MapDataSource;
exports.MappedArrayView = MappedArrayView;
exports.ObjectDataSource = ObjectDataSource;
exports.ReversedArrayView = ReversedArrayView;
exports.Route = Route;
exports.SetDataSource = SetDataSource;
exports.SingularAurumElement = SingularAurumElement;
exports.SortedArrayView = SortedArrayView;
exports.Stream = Stream;
exports.Suspense = Suspense;
exports.Switch = Switch;
exports.SwitchCase = SwitchCase;
exports.TransientDataSource = TransientDataSource;
exports.Webcomponent = Webcomponent;
exports.aurumClassName = aurumClassName;
exports.aurumElementModelIdentitiy = aurumElementModelIdentitiy;
exports.createAPI = createAPI;
exports.createRenderSession = createRenderSession;
exports.debugMode = debugMode;
exports.dsAwait = dsAwait;
exports.dsAwaitLatest = dsAwaitLatest;
exports.dsAwaitOrdered = dsAwaitOrdered;
exports.dsBuffer = dsBuffer;
exports.dsCutOff = dsCutOff;
exports.dsCutOffDynamic = dsCutOffDynamic;
exports.dsDebounce = dsDebounce;
exports.dsDelay = dsDelay;
exports.dsDiff = dsDiff;
exports.dsEven = dsEven;
exports.dsFilter = dsFilter;
exports.dsFilterAsync = dsFilterAsync;
exports.dsLoadBalance = dsLoadBalance;
exports.dsLock = dsLock;
exports.dsMap = dsMap;
exports.dsMapAsync = dsMapAsync;
exports.dsMax = dsMax;
exports.dsMin = dsMin;
exports.dsOdd = dsOdd;
exports.dsPick = dsPick;
exports.dsPipe = dsPipe;
exports.dsReduce = dsReduce;
exports.dsSemaphore = dsSemaphore;
exports.dsSkip = dsSkip;
exports.dsSkipDynamic = dsSkipDynamic;
exports.dsStringJoin = dsStringJoin;
exports.dsTap = dsTap;
exports.dsThrottle = dsThrottle;
exports.dsUnique = dsUnique;
exports.nodeData = nodeData;
exports.pendingSessions = pendingSessions;
exports.processTransform = processTransform;
exports.render = render;
//# sourceMappingURL=aurumjs.js.map


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/main.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/main.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html {\n  width: 100%;\n  height: 100%;\n}\nhtml body {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  font-family: Arial, Helvetica, sans-serif;\n}\nhtml body .root {\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  background-image: linear-gradient(to bottom left, black, #4c4b4b);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\nhtml body .root button {\n  width: 80px;\n  height: 30px;\n  margin-top: 30px;\n  background-color: #276ece;\n  border: 1px solid #276ece;\n  color: white;\n}\nhtml body .root button:disabled {\n  opacity: 0.7;\n}\nhtml body .root .inputs .minutes-input,\nhtml body .root .inputs .seconds-input {\n  box-sizing: border-box;\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  padding: 0;\n  border-radius: 50%;\n}\nhtml body .root .inputs .seconds-input {\n  margin-left: 30px;\n}\nhtml body .root .inputs .input-unit {\n  color: #e8e3e3;\n  margin-right: 8px;\n  margin-left: 4px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/main.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/countdown_status.ts":
/*!*********************************!*\
  !*** ./src/countdown_status.ts ***!
  \*********************************/
/*! exports provided: CountdownStatus */
/*! exports used: CountdownStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountdownStatus; });
var CountdownStatus;
(function (CountdownStatus) {
    CountdownStatus["STOPPED"] = "STOPPED";
    CountdownStatus["PAUSED"] = "PAUSED";
    CountdownStatus["RUNNING"] = "RUNNING";
})(CountdownStatus || (CountdownStatus = {}));


/***/ }),

/***/ "./src/main.tsx":
/*!**********************!*\
  !*** ./src/main.tsx ***!
  \**********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var aurumjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurumjs */ "./node_modules/aurumjs/prebuilt/aurumjs.js");
/* harmony import */ var aurumjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aurumjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/main.scss */ "./scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _countdown_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./countdown_status */ "./src/countdown_status.ts");
/* harmony import */ var _progress_circle_progress_circle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./progress_circle/progress_circle */ "./src/progress_circle/progress_circle.tsx");




const originalMinutes = new aurumjs__WEBPACK_IMPORTED_MODULE_0__["DataSource"]("00");
const originalSeconds = new aurumjs__WEBPACK_IMPORTED_MODULE_0__["DataSource"]("00");
const countDownTime = new aurumjs__WEBPACK_IMPORTED_MODULE_0__["DataSource"](undefined);
const countDownStatus = new aurumjs__WEBPACK_IMPORTED_MODULE_0__["DataSource"](_countdown_status__WEBPACK_IMPORTED_MODULE_2__[/* CountdownStatus */ "a"].STOPPED);
let cancellationToken;
function renderInputs() {
    return countDownStatus.map(status => status === _countdown_status__WEBPACK_IMPORTED_MODULE_2__[/* CountdownStatus */ "a"].STOPPED ? (aurumjs__WEBPACK_IMPORTED_MODULE_0__["Aurum"].factory("div", { class: "inputs" },
        aurumjs__WEBPACK_IMPORTED_MODULE_0__["Aurum"].factory("input", { type: "text", value: originalMinutes, onInput: e => handleMinutesChange(e.target.value), class: "minutes-input" }),
        aurumjs__WEBPACK_IMPORTED_MODULE_0__["Aurum"].factory("span", { class: "input-unit" }, "min"),
        aurumjs__WEBPACK_IMPORTED_MODULE_0__["Aurum"].factory("input", { type: "text", value: originalSeconds, onInput: e => handleSecondsChange(e.target.value), class: "seconds-input" }),
        aurumjs__WEBPACK_IMPORTED_MODULE_0__["Aurum"].factory("span", { class: "input-unit" }, "s"))) : null);
}
function renderStartButton() {
    return countDownStatus.map(status => status !== _countdown_status__WEBPACK_IMPORTED_MODULE_2__[/* CountdownStatus */ "a"].RUNNING
        ? aurumjs__WEBPACK_IMPORTED_MODULE_0__["Aurum"].factory("button", { onClick: () => startCountdown(), disabled: aurumjs__WEBPACK_IMPORTED_MODULE_0__["DataSource"].fromMultipleSources([originalMinutes, originalSeconds])
                .map(() => computeOriginalSeconds() === 0)
                .withInitial(computeOriginalSeconds() === 0) }, "START")
        : null);
}
function renderStopButton() {
    return countDownStatus.map(status => status !== _countdown_status__WEBPACK_IMPORTED_MODULE_2__[/* CountdownStatus */ "a"].STOPPED ? aurumjs__WEBPACK_IMPORTED_MODULE_0__["Aurum"].factory("button", { onClick: () => stopCountdown() }, "STOP") : null);
}
function renderCountdown() {
    return countDownStatus.map(status => status !== _countdown_status__WEBPACK_IMPORTED_MODULE_2__[/* CountdownStatus */ "a"].STOPPED ? (aurumjs__WEBPACK_IMPORTED_MODULE_0__["Aurum"].factory("div", null, renderProgressCircle())) : null);
}
function renderProgressCircle() {
    return aurumjs__WEBPACK_IMPORTED_MODULE_0__["Aurum"].factory(_progress_circle_progress_circle__WEBPACK_IMPORTED_MODULE_3__[/* ProgressCircle */ "a"], { totalTime: computeOriginalSeconds(), status: countDownStatus });
}
function startCountdown() {
    countDownStatus.update(_countdown_status__WEBPACK_IMPORTED_MODULE_2__[/* CountdownStatus */ "a"].RUNNING);
    cancellationToken = new aurumjs__WEBPACK_IMPORTED_MODULE_0__["CancellationToken"]();
    let startTime;
    const totalTime = computeOriginalSeconds();
    cancellationToken.animationLoop(tickTime);
    function tickTime(time) {
        if (startTime === undefined) {
            startTime = time;
        }
        const elapsedTime = time - startTime;
        const elapsedSeconds = elapsedTime / 1000;
        const remainingSeconds = Math.max(totalTime - elapsedSeconds + 1, 0);
        if (remainingSeconds === 0) {
            countDownStatus.update(_countdown_status__WEBPACK_IMPORTED_MODULE_2__[/* CountdownStatus */ "a"].STOPPED);
            cancellationToken.cancel();
        }
    }
}
function stopCountdown() {
    countDownStatus.update(_countdown_status__WEBPACK_IMPORTED_MODULE_2__[/* CountdownStatus */ "a"].STOPPED);
    cancellationToken.cancel();
}
function computeOriginalSeconds() {
    return Number(originalMinutes.value) * 60 + Number(originalSeconds.value);
}
function handleMinutesChange(value) {
    let minutes = value;
    if (Number(minutes) > 23) {
        minutes = '23';
    }
    originalMinutes.update(minutes);
}
function handleSecondsChange(value) {
    let seconds = value;
    if (Number(seconds) > 59) {
        seconds = '59';
    }
    originalSeconds.update(seconds);
}
aurumjs__WEBPACK_IMPORTED_MODULE_0__["Aurum"].attach(aurumjs__WEBPACK_IMPORTED_MODULE_0__["Aurum"].factory("div", { class: "root" },
    renderInputs(),
    renderStartButton(),
    renderCountdown(),
    renderStopButton()), document.body);


/***/ }),

/***/ "./src/progress_circle/progress_circle.tsx":
/*!*************************************************!*\
  !*** ./src/progress_circle/progress_circle.tsx ***!
  \*************************************************/
/*! exports provided: ProgressCircle */
/*! exports used: ProgressCircle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressCircle; });
/* harmony import */ var aurumjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aurumjs */ "./node_modules/aurumjs/prebuilt/aurumjs.js");
/* harmony import */ var aurumjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aurumjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _countdown_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../countdown_status */ "./src/countdown_status.ts");


function ProgressCircle(props) {
    return aurumjs__WEBPACK_IMPORTED_MODULE_0__["Aurum"].factory("canvas", { width: "250", height: "250", onAttach: (canvasElement) => initCanvas(canvasElement) });
    function initCanvas(canvasElem) {
        const cancellationToken = new aurumjs__WEBPACK_IMPORTED_MODULE_0__["CancellationToken"]();
        props.status.listen(status => status === _countdown_status__WEBPACK_IMPORTED_MODULE_1__[/* CountdownStatus */ "a"].STOPPED && cancellationToken.cancel());
        const context = canvasElem.getContext('2d');
        context.lineCap = 'round';
        const x = canvasElem.width / 2;
        const y = canvasElem.height / 2;
        const radStart = computeRadAngle(0);
        const radEnd = computeRadAngle(360);
        const lineWidth = 10;
        const radius = canvasElem.width / 2 - lineWidth;
        let startTime;
        let degreesPerSecond;
        cancellationToken.animationLoop((time) => {
            context.clearRect(0, 0, canvasElem.width, canvasElem.height);
            drawCircle(radEnd, '#b1b1b1');
            if (startTime === undefined) {
                startTime = time;
                degreesPerSecond = 360 / props.totalTime;
            }
            const elapsedTime = time - startTime;
            const elapsedSeconds = elapsedTime / 1000;
            const remainingSeconds = Math.max(props.totalTime - elapsedSeconds + 1, 0);
            const progressDegrees = Math.min(elapsedSeconds * degreesPerSecond, 360);
            drawCircle(computeRadAngle(progressDegrees), '#6eeeee');
            const minutes = `${Math.floor(remainingSeconds / 60)}`.padStart(2, "0");
            const seconds = `${Math.floor(remainingSeconds - Math.floor(remainingSeconds / 60) * 60)}`.padStart(2, "0");
            drawProgressLabel(minutes, seconds);
            if (progressDegrees === 360) {
                cancellationToken.cancel();
            }
        });
        function drawProgressLabel(minutes, seconds) {
            context.fillStyle = '#e8e3e3';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.font = '60px Arial, Helvetica, sans-serif';
            context.fillText(`${minutes}:${seconds}`, x, y);
        }
        function drawCircle(endAngle, color) {
            context.beginPath();
            context.arc(x, y, radius, radStart, endAngle);
            context.strokeStyle = color;
            context.lineWidth = lineWidth;
            context.stroke();
        }
    }
    ;
    function computeRadAngle(degrees) {
        return (Math.PI / 180) * (270 + degrees);
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F1cnVtanMvcHJlYnVpbHQvYXVydW1qcy5qcyIsIndlYnBhY2s6Ly8vLi9zY3NzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9zY3NzL21haW4uc2Nzcz80ZTUzIiwid2VicGFjazovLy8uL3NyYy9jb3VudGRvd25fc3RhdHVzLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcHJvZ3Jlc3NfY2lyY2xlL3Byb2dyZXNzX2NpcmNsZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyRUFBMkU7QUFDM0U7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx3Q0FBd0MsU0FBUzs7QUFFakQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHNCQUFzQixhQUFhO0FBQ25DO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxzREFBc0Q7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixrQkFBa0I7QUFDckM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5RUFBeUUsNkJBQTZCO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdGQUFnRiwrQkFBK0I7QUFDL0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Q0FBd0Msd0JBQXdCO0FBQ2hFO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5Q0FBeUMseUJBQXlCO0FBQ2xFO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHlCQUF5Qiw0QkFBNEI7QUFDckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzRkFBc0YsK0JBQStCO0FBQ3JIOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0ZBQXNGLCtCQUErQjtBQUNySDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzRkFBc0YsK0JBQStCO0FBQ3JIOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTs7QUFFYjtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxPQUFPOztBQUVQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsNENBQTRDOztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRkFBa0YsNkJBQTZCO0FBQy9HO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLHFDQUFxQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLHFDQUFxQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGVBQWUsMEJBQTBCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEVBQThFLCtCQUErQjtBQUM3Rzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2RUFBNkUsK0JBQStCO0FBQzVHOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLDJFQUEyRSwrQkFBK0I7QUFDMUc7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLDRCQUE0QjtBQUNuRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9GQUFvRiwrQkFBK0I7QUFDbkg7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0ZBQW9GLCtCQUErQjtBQUNuSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLG9GQUFvRiwrQkFBK0I7QUFDbkg7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLG9GQUFvRiwrQkFBK0I7QUFDbkg7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlGQUFpRiwrQkFBK0I7QUFDaEg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsOEVBQThFLGlDQUFpQztBQUMvRzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvR0FBb0csaUNBQWlDO0FBQ3JJO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEVBQTBFLDZCQUE2QjtBQUN2RztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzRUFBc0UsK0JBQStCO0FBQ3JHOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0ZBQWdGLCtCQUErQjtBQUMvRzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsd0VBQXdFLCtCQUErQjtBQUN2Rzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLGdEQUFnRCxRQUFRO0FBQ3hEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLDZGQUE2Riw2QkFBNkI7QUFDMUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhGQUE4RiwrQkFBK0I7QUFDN0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtGQUFrRiw2QkFBNkI7QUFDL0c7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDJEQUEyRCwwQkFBMEI7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxnRkFBZ0YsNkJBQTZCO0FBQzdHO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0ZBQWdGLDZCQUE2QjtBQUM3RztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4ekpBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMscUdBQWdEO0FBQzFGO0FBQ0E7QUFDQSxjQUFjLFFBQVMsU0FBUyxnQkFBZ0IsaUJBQWlCLEdBQUcsYUFBYSxnQkFBZ0IsaUJBQWlCLGNBQWMsOENBQThDLEdBQUcsbUJBQW1CLGdCQUFnQixpQkFBaUIsNEJBQTRCLHNFQUFzRSxrQkFBa0IsMkJBQTJCLHdCQUF3Qiw0QkFBNEIsR0FBRywwQkFBMEIsZ0JBQWdCLGlCQUFpQixxQkFBcUIsOEJBQThCLDhCQUE4QixpQkFBaUIsR0FBRyxtQ0FBbUMsaUJBQWlCLEdBQUcsbUZBQW1GLDJCQUEyQixnQkFBZ0IsaUJBQWlCLHVCQUF1QixlQUFlLHVCQUF1QixHQUFHLDBDQUEwQyxzQkFBc0IsR0FBRyx1Q0FBdUMsbUJBQW1CLHNCQUFzQixxQkFBcUIsR0FBRztBQUM1L0I7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNOYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjs7QUFFaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNENBQTRDLHFCQUFxQjtBQUNqRTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsaUJBQWlCO0FBQ3RDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IscUJBQXFCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw4QkFBOEI7O0FBRTlCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0EscURBQXFELGNBQWM7QUFDbkU7QUFDQSxDOzs7Ozs7Ozs7Ozs7O0FDN0ZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQix3QkFBd0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxTQUFJOztBQUVuRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxxRUFBcUUscUJBQXFCLGFBQWE7O0FBRXZHOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsR0FBRzs7QUFFSDs7O0FBR0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLDZCQUE2QjtBQUNqRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7QUM1UUEsVUFBVSxtQkFBTyxDQUFDLG1KQUF3RTtBQUMxRiwwQkFBMEIsbUJBQU8sQ0FBQyxrTUFBOEY7O0FBRWhJOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQUEsSUFBWSxlQUlYO0FBSkQsV0FBWSxlQUFlO0lBQ3ZCLHNDQUFtQjtJQUNuQixvQ0FBaUI7SUFDakIsc0NBQW1CO0FBQ3ZCLENBQUMsRUFKVyxlQUFlLEtBQWYsZUFBZSxRQUkxQjs7Ozs7Ozs7Ozs7Ozs7QUNKRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyRTtBQUNoRDtBQUMwQjtBQUNjO0FBRW5FLE1BQU0sZUFBZSxHQUFHLElBQUksa0RBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM3QyxNQUFNLGVBQWUsR0FBRyxJQUFJLGtEQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0MsTUFBTSxhQUFhLEdBQUcsSUFBSSxrREFBVSxDQUFTLFNBQVMsQ0FBQyxDQUFDO0FBQ3hELE1BQU0sZUFBZSxHQUFHLElBQUksa0RBQVUsQ0FBQyx5RUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRWhFLElBQUksaUJBQW9DLENBQUM7QUFFekMsU0FBUyxZQUFZO0lBQ2pCLE9BQU8sZUFBZSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUNoQyxNQUFNLEtBQUsseUVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQ2pDLCtEQUFLLEtBQUssRUFBQyxRQUFRO1FBQ2YsaUVBQ0ksSUFBSSxFQUFDLE1BQU0sRUFDWCxLQUFLLEVBQUUsZUFBZSxFQUN0QixPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBRSxDQUFDLENBQUMsTUFBMkIsQ0FBQyxLQUFLLENBQUMsRUFDdkUsS0FBSyxFQUFDLGVBQWUsR0FDdkI7UUFDRixnRUFBTSxLQUFLLEVBQUMsWUFBWSxVQUFXO1FBQ25DLGlFQUNJLElBQUksRUFBQyxNQUFNLEVBQ1gsS0FBSyxFQUFFLGVBQWUsRUFDdEIsT0FBTyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLENBQUUsQ0FBQyxDQUFDLE1BQTJCLENBQUMsS0FBSyxDQUFDLEVBQ3ZFLEtBQUssRUFBQyxlQUFlLEdBQ3ZCO1FBQ0YsZ0VBQU0sS0FBSyxFQUFDLFlBQVksUUFBUyxDQUMvQixDQUNULENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDWCxDQUFDO0FBQ04sQ0FBQztBQUVELFNBQVMsaUJBQWlCO0lBQ3RCLE9BQU8sZUFBZSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUNoQyxNQUFNLEtBQUsseUVBQWUsQ0FBQyxPQUFPO1FBQzlCLENBQUMsQ0FBQyxrRUFBUSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsY0FBYyxFQUFFLEVBQ3JDLFFBQVEsRUFBRSxrREFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUMsZUFBZSxFQUFFLGVBQWUsQ0FBQyxDQUFDO2lCQUN2RSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQ3pDLFdBQVcsQ0FBQyxzQkFBc0IsRUFBRSxLQUFLLENBQUMsQ0FBQyxZQUUzQztRQUNULENBQUMsQ0FBQyxJQUFJLENBQ2IsQ0FBQztBQUNOLENBQUM7QUFFRCxTQUFTLGdCQUFnQjtJQUNyQixPQUFPLGVBQWUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FDaEMsTUFBTSxLQUFLLHlFQUFlLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxrRUFBUSxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsYUFBYSxFQUFFLFdBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUNwRyxDQUFDO0FBQ04sQ0FBQztBQUVELFNBQVMsZUFBZTtJQUNwQixPQUFPLGVBQWUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEtBQUsseUVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQ3RFLG1FQUNLLG9CQUFvQixFQUFFLENBQ3JCLENBQ1QsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDZCxDQUFDO0FBRUQsU0FBUyxvQkFBb0I7SUFDekIsT0FBTyxzREFBQyx1RkFBYyxJQUFDLFNBQVMsRUFBRSxzQkFBc0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxlQUFlLEdBQUksQ0FBQztBQUM1RixDQUFDO0FBRUQsU0FBUyxjQUFjO0lBQ25CLGVBQWUsQ0FBQyxNQUFNLENBQUMseUVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUVoRCxpQkFBaUIsR0FBRyxJQUFJLHlEQUFpQixFQUFFLENBQUM7SUFFNUMsSUFBSSxTQUFpQixDQUFDO0lBQ3RCLE1BQU0sU0FBUyxHQUFHLHNCQUFzQixFQUFFLENBQUM7SUFDM0MsaUJBQWlCLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRTFDLFNBQVMsUUFBUSxDQUFDLElBQVk7UUFDMUIsSUFBSSxTQUFTLEtBQUssU0FBUyxFQUFFO1lBQ3pCLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDcEI7UUFFRCxNQUFNLFdBQVcsR0FBRyxJQUFJLEdBQUcsU0FBUyxDQUFDO1FBQ3JDLE1BQU0sY0FBYyxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDMUMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxjQUFjLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRXJFLElBQUksZ0JBQWdCLEtBQUssQ0FBQyxFQUFFO1lBQ3hCLGVBQWUsQ0FBQyxNQUFNLENBQUMseUVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNoRCxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUM5QjtJQUNMLENBQUM7QUFDTCxDQUFDO0FBRUQsU0FBUyxhQUFhO0lBQ2xCLGVBQWUsQ0FBQyxNQUFNLENBQUMseUVBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoRCxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUMvQixDQUFDO0FBRUQsU0FBUyxzQkFBc0I7SUFDM0IsT0FBTyxNQUFNLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzlFLENBQUM7QUFFRCxTQUFTLG1CQUFtQixDQUFDLEtBQWE7SUFDdEMsSUFBSSxPQUFPLEdBQVcsS0FBSyxDQUFDO0lBQzVCLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUN0QixPQUFPLEdBQUcsSUFBSSxDQUFDO0tBQ2xCO0lBQ0QsZUFBZSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNwQyxDQUFDO0FBRUQsU0FBUyxtQkFBbUIsQ0FBQyxLQUFhO0lBQ3RDLElBQUksT0FBTyxHQUFXLEtBQUssQ0FBQztJQUM1QixJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUU7UUFDdEIsT0FBTyxHQUFHLElBQUksQ0FBQztLQUNsQjtJQUNELGVBQWUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDcEMsQ0FBQztBQUVELDZDQUFLLENBQUMsTUFBTSxDQUNSLCtEQUFLLEtBQUssRUFBQyxNQUFNO0lBQ1osWUFBWSxFQUFFO0lBQ2QsaUJBQWlCLEVBQUU7SUFDbkIsZUFBZSxFQUFFO0lBQ2pCLGdCQUFnQixFQUFFLENBQ2pCLEVBQ04sUUFBUSxDQUFDLElBQUksQ0FDaEIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7QUM1SEY7QUFBQTtBQUFBO0FBQUE7QUFBK0Q7QUFDVDtBQUcvQyxTQUFTLGNBQWMsQ0FBQyxLQUEwQjtJQUVyRCxPQUFPLGtFQUFRLEtBQUssRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUUsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsR0FBVyxDQUFDO0lBRTFHLFNBQVMsVUFBVSxDQUFDLFVBQTZCO1FBQzdDLE1BQU0saUJBQWlCLEdBQXNCLElBQUkseURBQWlCLEVBQUUsQ0FBQztRQUNyRSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sS0FBSyx5RUFBZSxDQUFDLE9BQU8sSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBRWhHLE1BQU0sT0FBTyxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDNUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFFMUIsTUFBTSxDQUFDLEdBQUcsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDL0IsTUFBTSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEMsTUFBTSxRQUFRLEdBQUcsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BDLE1BQU0sTUFBTSxHQUFHLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQyxNQUFNLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDckIsTUFBTSxNQUFNLEdBQUcsVUFBVSxDQUFDLEtBQUssR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDO1FBRWhELElBQUksU0FBaUIsQ0FBQztRQUN0QixJQUFJLGdCQUF3QixDQUFDO1FBRTdCLGlCQUFpQixDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQVksRUFBRSxFQUFFO1lBQzdDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUU3RCxVQUFVLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBRTlCLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtnQkFDekIsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDakIsZ0JBQWdCLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7YUFDNUM7WUFFRCxNQUFNLFdBQVcsR0FBRyxJQUFJLEdBQUcsU0FBUyxDQUFDO1lBQ3JDLE1BQU0sY0FBYyxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDMUMsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsY0FBYyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUUzRSxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGNBQWMsR0FBRyxnQkFBZ0IsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN6RSxVQUFVLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBRXhELE1BQU0sT0FBTyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDeEUsTUFBTSxPQUFPLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzVHLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztZQUVwQyxJQUFJLGVBQWUsS0FBSyxHQUFHLEVBQUU7Z0JBQ3pCLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQzlCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxTQUFTLGlCQUFpQixDQUFDLE9BQWUsRUFBRSxPQUFlO1lBQ3ZELE9BQU8sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQzlCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDO1lBQ2hDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsbUNBQW1DLENBQUM7WUFDbkQsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLE9BQU8sSUFBSSxPQUFPLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEQsQ0FBQztRQUVELFNBQVMsVUFBVSxDQUFDLFFBQWdCLEVBQUUsS0FBYTtZQUMvQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDOUMsT0FBTyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDNUIsT0FBTyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7WUFDOUIsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3JCLENBQUM7SUFDTCxDQUFDO0lBQUEsQ0FBQztJQUVGLFNBQVMsZUFBZSxDQUFDLE9BQWU7UUFDcEMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLENBQUM7SUFDN0MsQ0FBQztBQUNMLENBQUMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiLi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLnRzeFwiKTtcbiIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuICBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5mdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgdHJ5IHtcbiAgICBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICBpZiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSB7XG4gICAgX2NvbnN0cnVjdCA9IFJlZmxlY3QuY29uc3RydWN0O1xuICB9IGVsc2Uge1xuICAgIF9jb25zdHJ1Y3QgPSBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgICAgIHZhciBhID0gW251bGxdO1xuICAgICAgYS5wdXNoLmFwcGx5KGEsIGFyZ3MpO1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gRnVuY3Rpb24uYmluZC5hcHBseShQYXJlbnQsIGEpO1xuICAgICAgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7XG4gICAgICBpZiAoQ2xhc3MpIF9zZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgQ2xhc3MucHJvdG90eXBlKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX2lzTmF0aXZlRnVuY3Rpb24oZm4pIHtcbiAgcmV0dXJuIEZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwoZm4pLmluZGV4T2YoXCJbbmF0aXZlIGNvZGVdXCIpICE9PSAtMTtcbn1cblxuZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcihDbGFzcykge1xuICB2YXIgX2NhY2hlID0gdHlwZW9mIE1hcCA9PT0gXCJmdW5jdGlvblwiID8gbmV3IE1hcCgpIDogdW5kZWZpbmVkO1xuXG4gIF93cmFwTmF0aXZlU3VwZXIgPSBmdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKENsYXNzKSB7XG4gICAgaWYgKENsYXNzID09PSBudWxsIHx8ICFfaXNOYXRpdmVGdW5jdGlvbihDbGFzcykpIHJldHVybiBDbGFzcztcblxuICAgIGlmICh0eXBlb2YgQ2xhc3MgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgX2NhY2hlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBpZiAoX2NhY2hlLmhhcyhDbGFzcykpIHJldHVybiBfY2FjaGUuZ2V0KENsYXNzKTtcblxuICAgICAgX2NhY2hlLnNldChDbGFzcywgV3JhcHBlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gV3JhcHBlcigpIHtcbiAgICAgIHJldHVybiBfY29uc3RydWN0KENsYXNzLCBhcmd1bWVudHMsIF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3Rvcik7XG4gICAgfVxuXG4gICAgV3JhcHBlci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKENsYXNzLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IFdyYXBwZXIsXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihXcmFwcGVyLCBDbGFzcyk7XG4gIH07XG5cbiAgcmV0dXJuIF93cmFwTmF0aXZlU3VwZXIoQ2xhc3MpO1xufVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG4pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgYXJyMltpXSA9IGFycltpXTtcblxuICByZXR1cm4gYXJyMjtcbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShvKSB7XG4gIHZhciBpID0gMDtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCBvW1N5bWJvbC5pdGVyYXRvcl0gPT0gbnVsbCkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChvID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSkgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4ge1xuICAgICAgICBkb25lOiB0cnVlXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZG9uZTogZmFsc2UsXG4gICAgICAgIHZhbHVlOiBvW2krK11cbiAgICAgIH07XG4gICAgfTtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG4gIH1cblxuICBpID0gb1tTeW1ib2wuaXRlcmF0b3JdKCk7XG4gIHJldHVybiBpLm5leHQuYmluZChpKTtcbn1cblxudmFyIENhbmNlbGxhdGlvblRva2VuID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ2FuY2VsbGF0aW9uVG9rZW4oKSB7XG4gICAgdmFyIGNhbmNlbGxhYmxlcyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICB0aGlzLmNhbmNlbGFibGVzID0gY2FuY2VsbGFibGVzICE9PSBudWxsICYmIGNhbmNlbGxhYmxlcyAhPT0gdm9pZCAwID8gY2FuY2VsbGFibGVzIDogW107XG4gICAgdGhpcy5faXNDYW5jZWxsZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBDYW5jZWxsYXRpb25Ub2tlbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmhhc0NhbmNlbGxhYmxlcyA9IGZ1bmN0aW9uIGhhc0NhbmNlbGxhYmxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5jYW5jZWxhYmxlcy5sZW5ndGggPiAwO1xuICB9O1xuXG4gIF9wcm90by5hZGRDYW5jZWxhYmxlID0gZnVuY3Rpb24gYWRkQ2FuY2VsYWJsZShkZWxlZ2F0ZSkge1xuICAgIHRoaXMudGhyb3dJZkNhbmNlbGxlZCgnYXR0ZW1wdGluZyB0byBhZGQgY2FuY2VsbGFibGUgdG8gdG9rZW4gdGhhdCBpcyBhbHJlYWR5IGNhbmNlbGxlZCcpO1xuICAgIHRoaXMuY2FuY2VsYWJsZXMucHVzaChkZWxlZ2F0ZSk7XG5cbiAgICBpZiAodGhpcy5jYW5jZWxhYmxlcy5sZW5ndGggPT09IDIwMCkge1xuICAgICAgY29uc29sZS5sb2coJ3BvdGVudGlhbCBtZW1vcnkgbGVhazogY2FuY2VsbGF0aW9uIHRva2VuIGhhcyBvdmVyIDIwMCBjbGVhbiB1cCBjYWxscycpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5yZW1vdmVDYW5jZWxhYmxlID0gZnVuY3Rpb24gcmVtb3ZlQ2FuY2VsYWJsZShkZWxlZ2F0ZSkge1xuICAgIHRoaXMudGhyb3dJZkNhbmNlbGxlZCgnYXR0ZW1wdGluZyB0byByZW1vdmUgY2FuY2VsbGFibGUgZnJvbSB0b2tlbiB0aGF0IGlzIGFscmVhZHkgY2FuY2VsbGVkJyk7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5jYW5jZWxhYmxlcy5pbmRleE9mKGRlbGVnYXRlKTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMuY2FuY2VsYWJsZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8uc2V0VGltZW91dCA9IGZ1bmN0aW9uIChfc2V0VGltZW91dCkge1xuICAgIGZ1bmN0aW9uIHNldFRpbWVvdXQoX3gpIHtcbiAgICAgIHJldHVybiBfc2V0VGltZW91dC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHNldFRpbWVvdXQudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3NldFRpbWVvdXQudG9TdHJpbmcoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHNldFRpbWVvdXQ7XG4gIH0oZnVuY3Rpb24gKGNiLCB0aW1lKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIGlmICh0aW1lID09PSB2b2lkIDApIHtcbiAgICAgIHRpbWUgPSAwO1xuICAgIH1cblxuICAgIHZhciBpZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMucmVtb3ZlQ2FuY2VsYWJsZShjYW5jZWxhYmxlKTtcblxuICAgICAgY2IoKTtcbiAgICB9LCB0aW1lKTtcblxuICAgIHZhciBjYW5jZWxhYmxlID0gZnVuY3Rpb24gY2FuY2VsYWJsZSgpIHtcbiAgICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xuICAgIH07XG5cbiAgICB0aGlzLmFkZENhbmNlbGFibGUoY2FuY2VsYWJsZSk7XG4gIH0pO1xuXG4gIF9wcm90by5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uIChfc2V0SW50ZXJ2YWwpIHtcbiAgICBmdW5jdGlvbiBzZXRJbnRlcnZhbChfeDIsIF94Mykge1xuICAgICAgcmV0dXJuIF9zZXRJbnRlcnZhbC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cblxuICAgIHNldEludGVydmFsLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF9zZXRJbnRlcnZhbC50b1N0cmluZygpO1xuICAgIH07XG5cbiAgICByZXR1cm4gc2V0SW50ZXJ2YWw7XG4gIH0oZnVuY3Rpb24gKGNiLCB0aW1lKSB7XG4gICAgdmFyIGlkID0gc2V0SW50ZXJ2YWwoY2IsIHRpbWUpO1xuICAgIHRoaXMuYWRkQ2FuY2VsYWJsZShmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gY2xlYXJJbnRlcnZhbChpZCk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIF9wcm90by5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoX3JlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgIGZ1bmN0aW9uIHJlcXVlc3RBbmltYXRpb25GcmFtZShfeDQpIHtcbiAgICAgIHJldHVybiBfcmVxdWVzdEFuaW1hdGlvbkZyYW1lLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lLnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUudG9TdHJpbmcoKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZTtcbiAgfShmdW5jdGlvbiAoY2IpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBpZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpczIucmVtb3ZlQ2FuY2VsYWJsZShjYW5jZWxhYmxlKTtcblxuICAgICAgY2IoKTtcbiAgICB9KTtcblxuICAgIHZhciBjYW5jZWxhYmxlID0gZnVuY3Rpb24gY2FuY2VsYWJsZSgpIHtcbiAgICAgIHJldHVybiBjYW5jZWxBbmltYXRpb25GcmFtZShpZCk7XG4gICAgfTtcblxuICAgIHRoaXMuYWRkQ2FuY2VsYWJsZShjYW5jZWxhYmxlKTtcbiAgfSk7XG5cbiAgX3Byb3RvLmFuaW1hdGlvbkxvb3AgPSBmdW5jdGlvbiBhbmltYXRpb25Mb29wKGNiKSB7XG4gICAgdmFyIGlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uIGYodGltZSkge1xuICAgICAgaWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZik7XG4gICAgICBjYih0aW1lKTtcbiAgICB9KTtcbiAgICB0aGlzLmFkZENhbmNlbGFibGUoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGlkKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8udGhyb3dJZkNhbmNlbGxlZCA9IGZ1bmN0aW9uIHRocm93SWZDYW5jZWxsZWQobXNnKSB7XG4gICAgaWYgKHRoaXMuaXNDYW5jZWxlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyB8fCAnY2FuY2VsbGF0aW9uIHRva2VuIGlzIGNhbmNlbGxlZCcpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uY2hhaW4gPSBmdW5jdGlvbiBjaGFpbih0YXJnZXQsIHR3b1dheXMpIHtcbiAgICBpZiAodHdvV2F5cyA9PT0gdm9pZCAwKSB7XG4gICAgICB0d29XYXlzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHR3b1dheXMpIHtcbiAgICAgIHRhcmdldC5jaGFpbih0aGlzLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgdGhpcy5hZGRDYW5jZWxhYmxlKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0YXJnZXQuY2FuY2VsKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLnJlZ2lzdGVyRG9tRXZlbnQgPSBmdW5jdGlvbiByZWdpc3RlckRvbUV2ZW50KGV2ZW50RW1pdHRlciwgZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgZXZlbnRFbWl0dGVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNhbGxiYWNrKTtcbiAgICB0aGlzLmFkZENhbmNlbGFibGUoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGV2ZW50RW1pdHRlci5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBjYWxsYmFjayk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgX3Byb3RvLmNhbmNlbCA9IGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGhpcy5pc0NhbmNlbGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5faXNDYW5jZWxsZWQgPSB0cnVlO1xuICAgIHRoaXMuY2FuY2VsYWJsZXMuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgcmV0dXJuIGMoKTtcbiAgICB9KTtcbiAgICB0aGlzLmNhbmNlbGFibGVzID0gdW5kZWZpbmVkO1xuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhDYW5jZWxsYXRpb25Ub2tlbiwgW3tcbiAgICBrZXk6IFwiaXNDYW5jZWxlZFwiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2lzQ2FuY2VsbGVkO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBDYW5jZWxsYXRpb25Ub2tlbjtcbn0oKTtcblxudmFyIEV2ZW50RW1pdHRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEV2ZW50RW1pdHRlcigpIHtcbiAgICB0aGlzLnN1YnNjcmliZUNoYW5uZWwgPSBbXTtcbiAgICB0aGlzLnN1YnNjcmliZU9uY2VDaGFubmVsID0gW107XG4gICAgdGhpcy5vbkFmdGVyRmlyZSA9IFtdO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnN1YnNjcmliZSA9IGZ1bmN0aW9uIHN1YnNjcmliZShjYWxsYmFjaywgY2FuY2VsbGF0aW9uVG9rZW4pIHtcbiAgICB2YXIgX3RoaXMkY3JlYXRlU3Vic2NyaXB0ID0gdGhpcy5jcmVhdGVTdWJzY3JpcHRpb24oY2FsbGJhY2ssIHRoaXMuc3Vic2NyaWJlQ2hhbm5lbCwgY2FuY2VsbGF0aW9uVG9rZW4pLFxuICAgICAgICBmYWNhZGUgPSBfdGhpcyRjcmVhdGVTdWJzY3JpcHQuZmFjYWRlO1xuXG4gICAgcmV0dXJuIGZhY2FkZTtcbiAgfTtcblxuICBfcHJvdG8uc3Vic2NyaWJlT25jZSA9IGZ1bmN0aW9uIHN1YnNjcmliZU9uY2UoY2FsbGJhY2ssIGNhbmNlbGxhdGlvblRva2VuKSB7XG4gICAgdmFyIF90aGlzJGNyZWF0ZVN1YnNjcmlwdDIgPSB0aGlzLmNyZWF0ZVN1YnNjcmlwdGlvbihjYWxsYmFjaywgdGhpcy5zdWJzY3JpYmVPbmNlQ2hhbm5lbCwgY2FuY2VsbGF0aW9uVG9rZW4pLFxuICAgICAgICBmYWNhZGUgPSBfdGhpcyRjcmVhdGVTdWJzY3JpcHQyLmZhY2FkZTtcblxuICAgIHJldHVybiBmYWNhZGU7XG4gIH07XG5cbiAgX3Byb3RvLmhhc1N1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBoYXNTdWJzY3JpcHRpb25zKCkge1xuICAgIHJldHVybiB0aGlzLnN1YnNjcmlwdGlvbnMgPiAwO1xuICB9O1xuXG4gIF9wcm90by5jYW5jZWxBbGwgPSBmdW5jdGlvbiBjYW5jZWxBbGwoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHZhciBfYTtcblxuICAgIGlmICghdGhpcy5pc0ZpcmluZykge1xuICAgICAgdGhpcy5zdWJzY3JpYmVDaGFubmVsLmxlbmd0aCA9IDA7XG4gICAgICB0aGlzLnN1YnNjcmliZU9uY2VDaGFubmVsLmxlbmd0aCA9IDA7XG4gICAgICAoX2EgPSB0aGlzLm9uRW1wdHkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9uQWZ0ZXJGaXJlLnB1c2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG5cbiAgICAgICAgX3RoaXMuc3Vic2NyaWJlQ2hhbm5lbC5sZW5ndGggPSAwO1xuICAgICAgICBfdGhpcy5zdWJzY3JpYmVPbmNlQ2hhbm5lbC5sZW5ndGggPSAwO1xuICAgICAgICAoX2EgPSBfdGhpcy5vbkVtcHR5KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbChfdGhpcyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmFmdGVyRmlyZSA9IGZ1bmN0aW9uIGFmdGVyRmlyZSgpIHtcbiAgICBpZiAodGhpcy5vbkFmdGVyRmlyZS5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLm9uQWZ0ZXJGaXJlLmZvckVhY2goZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIHJldHVybiBjYigpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLm9uQWZ0ZXJGaXJlLmxlbmd0aCA9IDA7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5maXJlID0gZnVuY3Rpb24gZmlyZShkYXRhKSB7XG4gICAgdGhpcy5pc0ZpcmluZyA9IHRydWU7XG4gICAgdmFyIGxlbmd0aCA9IHRoaXMuc3Vic2NyaWJlQ2hhbm5lbC5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLnN1YnNjcmliZUNoYW5uZWxbaV0uY2FsbGJhY2soZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3Vic2NyaWJlT25jZUNoYW5uZWwubGVuZ3RoID4gMCkge1xuICAgICAgbGVuZ3RoID0gdGhpcy5zdWJzY3JpYmVPbmNlQ2hhbm5lbC5sZW5ndGg7XG5cbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLnN1YnNjcmliZU9uY2VDaGFubmVsW19pXS5jYWxsYmFjayhkYXRhKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5zdWJzY3JpYmVPbmNlQ2hhbm5lbC5sZW5ndGggPSAwO1xuICAgIH1cblxuICAgIHRoaXMuaXNGaXJpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmFmdGVyRmlyZSgpO1xuICB9O1xuXG4gIF9wcm90by5jcmVhdGVTdWJzY3JpcHRpb24gPSBmdW5jdGlvbiBjcmVhdGVTdWJzY3JpcHRpb24oY2FsbGJhY2ssIGNoYW5uZWwsIGNhbmNlbGxhdGlvblRva2VuKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHZhciBzdWJzY3JpcHRpb24gPSB7XG4gICAgICBjYWxsYmFjazogY2FsbGJhY2tcbiAgICB9O1xuICAgIHZhciBmYWNhZGUgPSB7XG4gICAgICBjYW5jZWw6IGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICAgICAgdGhhdC5jYW5jZWwoc3Vic2NyaXB0aW9uLCBjaGFubmVsKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGNhbmNlbGxhdGlvblRva2VuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNhbmNlbGxhdGlvblRva2VuLmFkZENhbmNlbGFibGUoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhhdC5jYW5jZWwoc3Vic2NyaXB0aW9uLCBjaGFubmVsKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoYW5uZWwucHVzaChzdWJzY3JpcHRpb24pO1xuICAgIHJldHVybiB7XG4gICAgICBzdWJzY3JpcHRpb246IHN1YnNjcmlwdGlvbixcbiAgICAgIGZhY2FkZTogZmFjYWRlXG4gICAgfTtcbiAgfTtcblxuICBfcHJvdG8uY2FuY2VsID0gZnVuY3Rpb24gY2FuY2VsKHN1YnNjcmlwdGlvbiwgY2hhbm5lbCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIF9hO1xuXG4gICAgdmFyIGluZGV4ID0gY2hhbm5lbC5pbmRleE9mKHN1YnNjcmlwdGlvbik7XG5cbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgaWYgKCF0aGlzLmlzRmlyaW5nKSB7XG4gICAgICAgIGNoYW5uZWwuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICBpZiAoIXRoaXMuaGFzU3Vic2NyaXB0aW9ucygpKSB7XG4gICAgICAgICAgKF9hID0gdGhpcy5vbkVtcHR5KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vbkFmdGVyRmlyZS5wdXNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMyLmNhbmNlbChzdWJzY3JpcHRpb24sIGNoYW5uZWwpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX2NyZWF0ZUNsYXNzKEV2ZW50RW1pdHRlciwgW3tcbiAgICBrZXk6IFwic3Vic2NyaXB0aW9uc1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3Vic2NyaWJlQ2hhbm5lbC5sZW5ndGggKyB0aGlzLnN1YnNjcmliZU9uY2VDaGFubmVsLmxlbmd0aDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gRXZlbnRFbWl0dGVyO1xufSgpO1xuXG4oZnVuY3Rpb24gKE9wZXJhdGlvblR5cGUpIHtcbiAgT3BlcmF0aW9uVHlwZVtPcGVyYXRpb25UeXBlW1wiRklMVEVSXCJdID0gMF0gPSBcIkZJTFRFUlwiO1xuICBPcGVyYXRpb25UeXBlW09wZXJhdGlvblR5cGVbXCJOT09QXCJdID0gMV0gPSBcIk5PT1BcIjtcbiAgT3BlcmF0aW9uVHlwZVtPcGVyYXRpb25UeXBlW1wiTUFQXCJdID0gMl0gPSBcIk1BUFwiO1xuICBPcGVyYXRpb25UeXBlW09wZXJhdGlvblR5cGVbXCJERUxBWVwiXSA9IDNdID0gXCJERUxBWVwiO1xuICBPcGVyYXRpb25UeXBlW09wZXJhdGlvblR5cGVbXCJNQVBfREVMQVlcIl0gPSA0XSA9IFwiTUFQX0RFTEFZXCI7XG4gIE9wZXJhdGlvblR5cGVbT3BlcmF0aW9uVHlwZVtcIkRFTEFZX0ZJTFRFUlwiXSA9IDVdID0gXCJERUxBWV9GSUxURVJcIjtcbiAgT3BlcmF0aW9uVHlwZVtPcGVyYXRpb25UeXBlW1wiTUFQX0RFTEFZX0ZJTFRFUlwiXSA9IDZdID0gXCJNQVBfREVMQVlfRklMVEVSXCI7XG59KShleHBvcnRzLk9wZXJhdGlvblR5cGUgfHwgKGV4cG9ydHMuT3BlcmF0aW9uVHlwZSA9IHt9KSk7XG5cbmZ1bmN0aW9uIF9zZXR0bGUocGFjdCwgc3RhdGUsIHZhbHVlKSB7XG4gIGlmICghcGFjdC5zKSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgX1BhY3QpIHtcbiAgICAgIGlmICh2YWx1ZS5zKSB7XG4gICAgICAgIGlmIChzdGF0ZSAmIDEpIHtcbiAgICAgICAgICBzdGF0ZSA9IHZhbHVlLnM7XG4gICAgICAgIH1cblxuICAgICAgICB2YWx1ZSA9IHZhbHVlLnY7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZS5vID0gX3NldHRsZS5iaW5kKG51bGwsIHBhY3QsIHN0YXRlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS50aGVuKSB7XG4gICAgICB2YWx1ZS50aGVuKF9zZXR0bGUuYmluZChudWxsLCBwYWN0LCBzdGF0ZSksIF9zZXR0bGUuYmluZChudWxsLCBwYWN0LCAyKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcGFjdC5zID0gc3RhdGU7XG4gICAgcGFjdC52ID0gdmFsdWU7XG4gICAgdmFyIG9ic2VydmVyID0gcGFjdC5vO1xuXG4gICAgaWYgKG9ic2VydmVyKSB7XG4gICAgICBvYnNlcnZlcihwYWN0KTtcbiAgICB9XG4gIH1cbn1cblxudmFyIF9QYWN0ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gX1BhY3QoKSB7fVxuXG4gIF9QYWN0LnByb3RvdHlwZS50aGVuID0gZnVuY3Rpb24gKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBfUGFjdCgpO1xuICAgIHZhciBzdGF0ZSA9IHRoaXMucztcblxuICAgIGlmIChzdGF0ZSkge1xuICAgICAgdmFyIGNhbGxiYWNrID0gc3RhdGUgJiAxID8gb25GdWxmaWxsZWQgOiBvblJlamVjdGVkO1xuXG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2V0dGxlKHJlc3VsdCwgMSwgY2FsbGJhY2sodGhpcy52KSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICBfc2V0dGxlKHJlc3VsdCwgMiwgZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5vID0gZnVuY3Rpb24gKF90aGlzKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2YXIgdmFsdWUgPSBfdGhpcy52O1xuXG4gICAgICAgIGlmIChfdGhpcy5zICYgMSkge1xuICAgICAgICAgIF9zZXR0bGUocmVzdWx0LCAxLCBvbkZ1bGZpbGxlZCA/IG9uRnVsZmlsbGVkKHZhbHVlKSA6IHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChvblJlamVjdGVkKSB7XG4gICAgICAgICAgX3NldHRsZShyZXN1bHQsIDEsIG9uUmVqZWN0ZWQodmFsdWUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfc2V0dGxlKHJlc3VsdCwgMiwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIF9zZXR0bGUocmVzdWx0LCAyLCBlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICByZXR1cm4gX1BhY3Q7XG59KCk7XG5cbmZ1bmN0aW9uIF9zd2l0Y2goZGlzY3JpbWluYW50LCBjYXNlcykge1xuICB2YXIgZGlzcGF0Y2hJbmRleCA9IC0xO1xuICB2YXIgYXdhaXRCb2R5O1xuXG4gIG91dGVyOiB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYXNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHRlc3QgPSBjYXNlc1tpXVswXTtcblxuICAgICAgaWYgKHRlc3QpIHtcbiAgICAgICAgdmFyIHRlc3RWYWx1ZSA9IHRlc3QoKTtcblxuICAgICAgICBpZiAodGVzdFZhbHVlICYmIHRlc3RWYWx1ZS50aGVuKSB7XG4gICAgICAgICAgYnJlYWsgb3V0ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGVzdFZhbHVlID09PSBkaXNjcmltaW5hbnQpIHtcbiAgICAgICAgICBkaXNwYXRjaEluZGV4ID0gaTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGlzcGF0Y2hJbmRleCA9IGk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGRpc3BhdGNoSW5kZXggIT09IC0xKSB7XG4gICAgICBkbyB7XG4gICAgICAgIHZhciBib2R5ID0gY2FzZXNbZGlzcGF0Y2hJbmRleF1bMV07XG5cbiAgICAgICAgd2hpbGUgKCFib2R5KSB7XG4gICAgICAgICAgZGlzcGF0Y2hJbmRleCsrO1xuICAgICAgICAgIGJvZHkgPSBjYXNlc1tkaXNwYXRjaEluZGV4XVsxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZXN1bHQgPSBib2R5KCk7XG5cbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuICAgICAgICAgIGF3YWl0Qm9keSA9IHRydWU7XG4gICAgICAgICAgYnJlYWsgb3V0ZXI7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZmFsbHRocm91Z2hDaGVjayA9IGNhc2VzW2Rpc3BhdGNoSW5kZXhdWzJdO1xuICAgICAgICBkaXNwYXRjaEluZGV4Kys7XG4gICAgICB9IHdoaWxlIChmYWxsdGhyb3VnaENoZWNrICYmICFmYWxsdGhyb3VnaENoZWNrKCkpO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgfVxuXG4gIHZhciBwYWN0ID0gbmV3IF9QYWN0KCk7XG5cbiAgdmFyIHJlamVjdCA9IF9zZXR0bGUuYmluZChudWxsLCBwYWN0LCAyKTtcblxuICAoYXdhaXRCb2R5ID8gcmVzdWx0LnRoZW4oX3Jlc3VtZUFmdGVyQm9keSkgOiB0ZXN0VmFsdWUudGhlbihfcmVzdW1lQWZ0ZXJUZXN0KSkudGhlbih2b2lkIDAsIHJlamVjdCk7XG4gIHJldHVybiBwYWN0O1xuXG4gIGZ1bmN0aW9uIF9yZXN1bWVBZnRlclRlc3QodmFsdWUpIHtcbiAgICBmb3IgKDs7KSB7XG4gICAgICBpZiAodmFsdWUgPT09IGRpc2NyaW1pbmFudCkge1xuICAgICAgICBkaXNwYXRjaEluZGV4ID0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIGlmICgrK2kgPT09IGNhc2VzLmxlbmd0aCkge1xuICAgICAgICBpZiAoZGlzcGF0Y2hJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfc2V0dGxlKHBhY3QsIDEsIHJlc3VsdCk7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGVzdCA9IGNhc2VzW2ldWzBdO1xuXG4gICAgICBpZiAodGVzdCkge1xuICAgICAgICB2YWx1ZSA9IHRlc3QoKTtcblxuICAgICAgICBpZiAodmFsdWUgJiYgdmFsdWUudGhlbikge1xuICAgICAgICAgIHZhbHVlLnRoZW4oX3Jlc3VtZUFmdGVyVGVzdCkudGhlbih2b2lkIDAsIHJlamVjdCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXNwYXRjaEluZGV4ID0gaTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkbyB7XG4gICAgICB2YXIgYm9keSA9IGNhc2VzW2Rpc3BhdGNoSW5kZXhdWzFdO1xuXG4gICAgICB3aGlsZSAoIWJvZHkpIHtcbiAgICAgICAgZGlzcGF0Y2hJbmRleCsrO1xuICAgICAgICBib2R5ID0gY2FzZXNbZGlzcGF0Y2hJbmRleF1bMV07XG4gICAgICB9XG5cbiAgICAgIHZhciByZXN1bHQgPSBib2R5KCk7XG5cbiAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcbiAgICAgICAgcmVzdWx0LnRoZW4oX3Jlc3VtZUFmdGVyQm9keSkudGhlbih2b2lkIDAsIHJlamVjdCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIGZhbGx0aHJvdWdoQ2hlY2sgPSBjYXNlc1tkaXNwYXRjaEluZGV4XVsyXTtcbiAgICAgIGRpc3BhdGNoSW5kZXgrKztcbiAgICB9IHdoaWxlIChmYWxsdGhyb3VnaENoZWNrICYmICFmYWxsdGhyb3VnaENoZWNrKCkpO1xuXG4gICAgX3NldHRsZShwYWN0LCAxLCByZXN1bHQpO1xuICB9XG5cbiAgZnVuY3Rpb24gX3Jlc3VtZUFmdGVyQm9keShyZXN1bHQpIHtcbiAgICBmb3IgKDs7KSB7XG4gICAgICB2YXIgZmFsbHRocm91Z2hDaGVjayA9IGNhc2VzW2Rpc3BhdGNoSW5kZXhdWzJdO1xuXG4gICAgICBpZiAoIWZhbGx0aHJvdWdoQ2hlY2sgfHwgZmFsbHRocm91Z2hDaGVjaygpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBkaXNwYXRjaEluZGV4Kys7XG4gICAgICB2YXIgYm9keSA9IGNhc2VzW2Rpc3BhdGNoSW5kZXhdWzFdO1xuXG4gICAgICB3aGlsZSAoIWJvZHkpIHtcbiAgICAgICAgZGlzcGF0Y2hJbmRleCsrO1xuICAgICAgICBib2R5ID0gY2FzZXNbZGlzcGF0Y2hJbmRleF1bMV07XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdCA9IGJvZHkoKTtcblxuICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuICAgICAgICByZXN1bHQudGhlbihfcmVzdW1lQWZ0ZXJCb2R5KS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIF9zZXR0bGUocGFjdCwgMSwgcmVzdWx0KTtcbiAgfVxufVxuXG52YXIgX2l0ZXJhdG9yU3ltYm9sID0gLyojX19QVVJFX18qL3R5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgPyBTeW1ib2wuaXRlcmF0b3IgfHwgKFN5bWJvbC5pdGVyYXRvciA9IFN5bWJvbChcIlN5bWJvbC5pdGVyYXRvclwiKSkgOiBcIkBAaXRlcmF0b3JcIjtcblxuZnVuY3Rpb24gX2lzU2V0dGxlZFBhY3QodGhlbmFibGUpIHtcbiAgcmV0dXJuIHRoZW5hYmxlIGluc3RhbmNlb2YgX1BhY3QgJiYgdGhlbmFibGUucyAmIDE7XG59XG5cbmZ1bmN0aW9uIF9mb3JUbyhhcnJheSwgYm9keSwgY2hlY2spIHtcbiAgdmFyIGkgPSAtMSxcbiAgICAgIHBhY3QsXG4gICAgICByZWplY3Q7XG5cbiAgZnVuY3Rpb24gX2N5Y2xlKHJlc3VsdCkge1xuICAgIHRyeSB7XG4gICAgICB3aGlsZSAoKytpIDwgYXJyYXkubGVuZ3RoICYmICghY2hlY2sgfHwgIWNoZWNrKCkpKSB7XG4gICAgICAgIHJlc3VsdCA9IGJvZHkoaSk7XG5cbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuICAgICAgICAgIGlmIChfaXNTZXR0bGVkUGFjdChyZXN1bHQpKSB7XG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQudjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0LnRoZW4oX2N5Y2xlLCByZWplY3QgfHwgKHJlamVjdCA9IF9zZXR0bGUuYmluZChudWxsLCBwYWN0ID0gbmV3IF9QYWN0KCksIDIpKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwYWN0KSB7XG4gICAgICAgIF9zZXR0bGUocGFjdCwgMSwgcmVzdWx0KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhY3QgPSByZXN1bHQ7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgX3NldHRsZShwYWN0IHx8IChwYWN0ID0gbmV3IF9QYWN0KCkpLCAyLCBlKTtcbiAgICB9XG4gIH1cblxuICBfY3ljbGUoKTtcblxuICByZXR1cm4gcGFjdDtcbn1cblxuZnVuY3Rpb24gX2Zvck9mKHRhcmdldCwgYm9keSwgY2hlY2spIHtcbiAgaWYgKHR5cGVvZiB0YXJnZXRbX2l0ZXJhdG9yU3ltYm9sXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIF9jeWNsZTIgPSBmdW5jdGlvbiBfY3ljbGUyKHJlc3VsdCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSAmJiAoIWNoZWNrIHx8ICFjaGVjaygpKSkge1xuICAgICAgICAgIHJlc3VsdCA9IGJvZHkoc3RlcC52YWx1ZSk7XG5cbiAgICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG4gICAgICAgICAgICBpZiAoX2lzU2V0dGxlZFBhY3QocmVzdWx0KSkge1xuICAgICAgICAgICAgICByZXN1bHQgPSByZXN1bHQudjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlc3VsdC50aGVuKF9jeWNsZTIsIHJlamVjdCB8fCAocmVqZWN0ID0gX3NldHRsZS5iaW5kKG51bGwsIHBhY3QgPSBuZXcgX1BhY3QoKSwgMikpKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYWN0KSB7XG4gICAgICAgICAgX3NldHRsZShwYWN0LCAxLCByZXN1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhY3QgPSByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgX3NldHRsZShwYWN0IHx8IChwYWN0ID0gbmV3IF9QYWN0KCkpLCAyLCBlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGl0ZXJhdG9yID0gdGFyZ2V0W19pdGVyYXRvclN5bWJvbF0oKSxcbiAgICAgICAgc3RlcCxcbiAgICAgICAgcGFjdCxcbiAgICAgICAgcmVqZWN0O1xuXG4gICAgX2N5Y2xlMigpO1xuXG4gICAgaWYgKGl0ZXJhdG9yW1wicmV0dXJuXCJdKSB7XG4gICAgICB2YXIgX2ZpeHVwID0gZnVuY3Rpb24gX2ZpeHVwKHZhbHVlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgaWYgKCFzdGVwLmRvbmUpIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yW1wicmV0dXJuXCJdKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7fVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH07XG5cbiAgICAgIGlmIChwYWN0ICYmIHBhY3QudGhlbikge1xuICAgICAgICByZXR1cm4gcGFjdC50aGVuKF9maXh1cCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICB0aHJvdyBfZml4dXAoZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBfZml4dXAoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFjdDtcbiAgfVxuXG4gIGlmICghKFwibGVuZ3RoXCIgaW4gdGFyZ2V0KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlXCIpO1xuICB9XG5cbiAgdmFyIHZhbHVlcyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGFyZ2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFsdWVzLnB1c2godGFyZ2V0W2ldKTtcbiAgfVxuXG4gIHJldHVybiBfZm9yVG8odmFsdWVzLCBmdW5jdGlvbiAoaSkge1xuICAgIHJldHVybiBib2R5KHZhbHVlc1tpXSk7XG4gIH0sIGNoZWNrKTtcbn1cblxudmFyIERhdGFTb3VyY2UgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBEYXRhU291cmNlKGluaXRpYWxWYWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lID09PSB2b2lkIDApIHtcbiAgICAgIG5hbWUgPSAnUm9vdERhdGFTb3VyY2UnO1xuICAgIH1cblxuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy52YWx1ZSA9IGluaXRpYWxWYWx1ZTtcbiAgICB0aGlzLnByaW1lZCA9IGluaXRpYWxWYWx1ZSAhPT0gdW5kZWZpbmVkO1xuICAgIHRoaXMudXBkYXRlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIH1cblxuICBEYXRhU291cmNlLmZyb21NdWx0aXBsZVNvdXJjZXMgPSBmdW5jdGlvbiBmcm9tTXVsdGlwbGVTb3VyY2VzKHNvdXJjZXMsIGNhbmNlbGxhdGlvbikge1xuICAgIHZhciByZXN1bHQgPSBuZXcgRGF0YVNvdXJjZSgpO1xuXG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShzb3VyY2VzKSwgX3N0ZXA7ICEoX3N0ZXAgPSBfaXRlcmF0b3IoKSkuZG9uZTspIHtcbiAgICAgIHZhciBzID0gX3N0ZXAudmFsdWU7XG4gICAgICBzLmxpc3RlbihmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gcmVzdWx0LnVwZGF0ZSh2KTtcbiAgICAgIH0sIGNhbmNlbGxhdGlvbik7XG4gICAgfVxuXG4gICAgcmVzdWx0Lm5hbWUgPSBcIkNvbWJpbmF0aW9uIG9mIFtcIiArIHNvdXJjZXMubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgICByZXR1cm4gdi5uYW1lO1xuICAgIH0pLmpvaW4oJyAmICcpICsgXCJdXCI7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICB2YXIgX3Byb3RvID0gRGF0YVNvdXJjZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnJlcGVhdExhc3QgPSBmdW5jdGlvbiByZXBlYXRMYXN0KCkge1xuICAgIHRoaXMudXBkYXRlKHRoaXMudmFsdWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUobmV3VmFsdWUpIHtcbiAgICB0aGlzLnByaW1lZCA9IHRydWU7XG5cbiAgICBpZiAodGhpcy51cGRhdGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQcm9ibGVtIGluIGRhdGEgc291cmNlOiBVbnN0YWJsZSB2YWx1ZSBwcm9wYWdhdGlvbi4gV2hlbiB1cGRhdGluZyBhIHZhbHVlIHRoZSBzdHJlYW0gd2FzIHVwZGF0ZWQgYmFjayBhcyBhIGRpcmVjdCByZXNwb25zZS4gVGhpcyBjYW4gbGVhZCB0byBpbmZpbml0ZSBsb29wcyBhbmQgaXMgdGhlcmVmb3JlIG5vdCBhbGxvd2VkJyk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGluZyA9IHRydWU7XG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgIHRoaXMudXBkYXRlRXZlbnQuZmlyZShuZXdWYWx1ZSk7XG4gICAgdGhpcy51cGRhdGluZyA9IGZhbHNlO1xuICB9O1xuXG4gIF9wcm90by53aXRoSW5pdGlhbCA9IGZ1bmN0aW9uIHdpdGhJbml0aWFsKHZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLnByaW1lZCkge1xuICAgICAgdGhpcy51cGRhdGUodmFsdWUpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5saXN0ZW5BbmRSZXBlYXQgPSBmdW5jdGlvbiBsaXN0ZW5BbmRSZXBlYXQoY2FsbGJhY2ssIGNhbmNlbGxhdGlvblRva2VuKSB7XG4gICAgY2FsbGJhY2sodGhpcy52YWx1ZSk7XG4gICAgcmV0dXJuIHRoaXMubGlzdGVuKGNhbGxiYWNrLCBjYW5jZWxsYXRpb25Ub2tlbik7XG4gIH07XG5cbiAgX3Byb3RvLmxpc3RlbiA9IGZ1bmN0aW9uIGxpc3RlbihjYWxsYmFjaywgY2FuY2VsbGF0aW9uVG9rZW4pIHtcbiAgICByZXR1cm4gdGhpcy51cGRhdGVFdmVudC5zdWJzY3JpYmUoY2FsbGJhY2ssIGNhbmNlbGxhdGlvblRva2VuKS5jYW5jZWw7XG4gIH07XG5cbiAgX3Byb3RvLmxpc3Rlbk9uY2UgPSBmdW5jdGlvbiBsaXN0ZW5PbmNlKGNhbGxiYWNrLCBjYW5jZWxsYXRpb25Ub2tlbikge1xuICAgIHJldHVybiB0aGlzLnVwZGF0ZUV2ZW50LnN1YnNjcmliZU9uY2UoY2FsbGJhY2ssIGNhbmNlbGxhdGlvblRva2VuKS5jYW5jZWw7XG4gIH07XG5cbiAgX3Byb3RvLnRyYW5zZm9ybSA9IGZ1bmN0aW9uIHRyYW5zZm9ybShvcGVyYXRpb25BLCBvcGVyYXRpb25CLCBvcGVyYXRpb25DLCBvcGVyYXRpb25ELCBvcGVyYXRpb25FLCBvcGVyYXRpb25GLCBvcGVyYXRpb25HLCBvcGVyYXRpb25ILCBvcGVyYXRpb25JLCBvcGVyYXRpb25KLCBvcGVyYXRpb25LLCBjYW5jZWxsYXRpb25Ub2tlbikge1xuICAgIHZhciB0b2tlbjtcbiAgICB2YXIgb3BlcmF0aW9ucyA9IFtvcGVyYXRpb25BLCBvcGVyYXRpb25CLCBvcGVyYXRpb25DLCBvcGVyYXRpb25ELCBvcGVyYXRpb25FLCBvcGVyYXRpb25GLCBvcGVyYXRpb25HLCBvcGVyYXRpb25ILCBvcGVyYXRpb25JLCBvcGVyYXRpb25KLCBvcGVyYXRpb25LXS5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBlICYmIChlIGluc3RhbmNlb2YgQ2FuY2VsbGF0aW9uVG9rZW4gPyAodG9rZW4gPSBlLCBmYWxzZSkgOiB0cnVlKTtcbiAgICB9KTtcblxuICAgIGlmIChjYW5jZWxsYXRpb25Ub2tlbikge1xuICAgICAgdG9rZW4gPSBjYW5jZWxsYXRpb25Ub2tlbjtcbiAgICB9XG5cbiAgICB2YXIgcmVzdWx0ID0gbmV3IERhdGFTb3VyY2UodW5kZWZpbmVkLCB0aGlzLm5hbWUgKyAnICcgKyBvcGVyYXRpb25zLm1hcChmdW5jdGlvbiAodikge1xuICAgICAgcmV0dXJuIHYubmFtZTtcbiAgICB9KS5qb2luKCcgJykpO1xuICAgICh0aGlzLnByaW1lZCA/IHRoaXMubGlzdGVuQW5kUmVwZWF0IDogdGhpcy5saXN0ZW4pLmNhbGwodGhpcywgcHJvY2Vzc1RyYW5zZm9ybShvcGVyYXRpb25zLCByZXN1bHQpLCB0b2tlbik7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICBfcHJvdG8ucGlwZSA9IGZ1bmN0aW9uIHBpcGUodGFyZ2V0RGF0YVNvdXJjZSwgY2FuY2VsbGF0aW9uVG9rZW4pIHtcbiAgICB0aGlzLmxpc3RlbihmdW5jdGlvbiAodikge1xuICAgICAgcmV0dXJuIHRhcmdldERhdGFTb3VyY2UudXBkYXRlKHYpO1xuICAgIH0sIGNhbmNlbGxhdGlvblRva2VuKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBfcHJvdG8ubWFwID0gZnVuY3Rpb24gbWFwKGNhbGxiYWNrLCBjYW5jZWxsYXRpb25Ub2tlbikge1xuICAgIGNhbmNlbGxhdGlvblRva2VuID0gY2FuY2VsbGF0aW9uVG9rZW4gIT09IG51bGwgJiYgY2FuY2VsbGF0aW9uVG9rZW4gIT09IHZvaWQgMCA/IGNhbmNlbGxhdGlvblRva2VuIDogbmV3IENhbmNlbGxhdGlvblRva2VuKCk7XG4gICAgdmFyIG1hcHBlZFNvdXJjZTtcblxuICAgIGlmICh0aGlzLnByaW1lZCkge1xuICAgICAgbWFwcGVkU291cmNlID0gbmV3IFRyYW5zaWVudERhdGFTb3VyY2UoY2FuY2VsbGF0aW9uVG9rZW4sIGNhbGxiYWNrKHRoaXMudmFsdWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbWFwcGVkU291cmNlID0gbmV3IFRyYW5zaWVudERhdGFTb3VyY2UoY2FuY2VsbGF0aW9uVG9rZW4pO1xuICAgIH1cblxuICAgIHRoaXMubGlzdGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgbWFwcGVkU291cmNlLnVwZGF0ZShjYWxsYmFjayh2YWx1ZSkpO1xuICAgIH0sIGNhbmNlbGxhdGlvblRva2VuKTtcbiAgICByZXR1cm4gbWFwcGVkU291cmNlO1xuICB9O1xuXG4gIF9wcm90by50YXAgPSBmdW5jdGlvbiB0YXAoY2FsbGJhY2ssIGNhbmNlbGxhdGlvblRva2VuKSB7XG4gICAgdGhpcy5saXN0ZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBjYWxsYmFjayh2YWx1ZSk7XG4gICAgfSwgY2FuY2VsbGF0aW9uVG9rZW4pO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by51bmlxdWUgPSBmdW5jdGlvbiB1bmlxdWUoY2FuY2VsbGF0aW9uVG9rZW4pIHtcbiAgICBjYW5jZWxsYXRpb25Ub2tlbiA9IGNhbmNlbGxhdGlvblRva2VuICE9PSBudWxsICYmIGNhbmNlbGxhdGlvblRva2VuICE9PSB2b2lkIDAgPyBjYW5jZWxsYXRpb25Ub2tlbiA6IG5ldyBDYW5jZWxsYXRpb25Ub2tlbigpO1xuICAgIHZhciB1bmlxdWVTb3VyY2UgPSBuZXcgVHJhbnNpZW50RGF0YVNvdXJjZShjYW5jZWxsYXRpb25Ub2tlbiwgdGhpcy52YWx1ZSk7XG4gICAgdGhpcy5saXN0ZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAodmFsdWUgIT09IHVuaXF1ZVNvdXJjZS52YWx1ZSkge1xuICAgICAgICB1bmlxdWVTb3VyY2UudXBkYXRlKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9LCBjYW5jZWxsYXRpb25Ub2tlbik7XG4gICAgcmV0dXJuIHVuaXF1ZVNvdXJjZTtcbiAgfTtcblxuICBfcHJvdG8uZGlmZiA9IGZ1bmN0aW9uIGRpZmYoY2FuY2VsbGF0aW9uVG9rZW4pIHtcbiAgICBjYW5jZWxsYXRpb25Ub2tlbiA9IGNhbmNlbGxhdGlvblRva2VuICE9PSBudWxsICYmIGNhbmNlbGxhdGlvblRva2VuICE9PSB2b2lkIDAgPyBjYW5jZWxsYXRpb25Ub2tlbiA6IG5ldyBDYW5jZWxsYXRpb25Ub2tlbigpO1xuICAgIHZhciBkaWZmaW5nU291cmNlID0gbmV3IFRyYW5zaWVudERhdGFTb3VyY2UoY2FuY2VsbGF0aW9uVG9rZW4sIHtcbiAgICAgIFwibmV3XCI6IHRoaXMudmFsdWUsXG4gICAgICBvbGQ6IHVuZGVmaW5lZFxuICAgIH0pO1xuICAgIHRoaXMubGlzdGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgZGlmZmluZ1NvdXJjZS51cGRhdGUoe1xuICAgICAgICBcIm5ld1wiOiB2YWx1ZSxcbiAgICAgICAgb2xkOiBkaWZmaW5nU291cmNlLnZhbHVlW1wibmV3XCJdXG4gICAgICB9KTtcbiAgICB9LCBjYW5jZWxsYXRpb25Ub2tlbik7XG4gICAgcmV0dXJuIGRpZmZpbmdTb3VyY2U7XG4gIH07XG5cbiAgX3Byb3RvLnJlZHVjZSA9IGZ1bmN0aW9uIHJlZHVjZShyZWR1Y2VyLCBpbml0aWFsVmFsdWUsIGNhbmNlbGxhdGlvblRva2VuKSB7XG4gICAgY2FuY2VsbGF0aW9uVG9rZW4gPSBjYW5jZWxsYXRpb25Ub2tlbiAhPT0gbnVsbCAmJiBjYW5jZWxsYXRpb25Ub2tlbiAhPT0gdm9pZCAwID8gY2FuY2VsbGF0aW9uVG9rZW4gOiBuZXcgQ2FuY2VsbGF0aW9uVG9rZW4oKTtcbiAgICB2YXIgcmVkdWNlU291cmNlID0gbmV3IFRyYW5zaWVudERhdGFTb3VyY2UoY2FuY2VsbGF0aW9uVG9rZW4sIGluaXRpYWxWYWx1ZSk7XG4gICAgdGhpcy5saXN0ZW4oZnVuY3Rpb24gKHYpIHtcbiAgICAgIHJldHVybiByZWR1Y2VTb3VyY2UudXBkYXRlKHJlZHVjZXIocmVkdWNlU291cmNlLnZhbHVlLCB2KSk7XG4gICAgfSwgY2FuY2VsbGF0aW9uVG9rZW4pO1xuICAgIHJldHVybiByZWR1Y2VTb3VyY2U7XG4gIH07XG5cbiAgX3Byb3RvLmFnZ3JlZ2F0ZSA9IGZ1bmN0aW9uIGFnZ3JlZ2F0ZShvdGhlclNvdXJjZSwgY29tYmluYXRvciwgY2FuY2VsbGF0aW9uVG9rZW4pIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgY2FuY2VsbGF0aW9uVG9rZW4gPSBjYW5jZWxsYXRpb25Ub2tlbiAhPT0gbnVsbCAmJiBjYW5jZWxsYXRpb25Ub2tlbiAhPT0gdm9pZCAwID8gY2FuY2VsbGF0aW9uVG9rZW4gOiBuZXcgQ2FuY2VsbGF0aW9uVG9rZW4oKTtcbiAgICB2YXIgYWdncmVnYXRlZFNvdXJjZSA9IG5ldyBUcmFuc2llbnREYXRhU291cmNlKGNhbmNlbGxhdGlvblRva2VuLCBjb21iaW5hdG9yKHRoaXMudmFsdWUsIG90aGVyU291cmNlLnZhbHVlKSk7XG4gICAgdGhpcy5saXN0ZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFnZ3JlZ2F0ZWRTb3VyY2UudXBkYXRlKGNvbWJpbmF0b3IoX3RoaXMudmFsdWUsIG90aGVyU291cmNlLnZhbHVlKSk7XG4gICAgfSwgY2FuY2VsbGF0aW9uVG9rZW4pO1xuICAgIG90aGVyU291cmNlLmxpc3RlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYWdncmVnYXRlZFNvdXJjZS51cGRhdGUoY29tYmluYXRvcihfdGhpcy52YWx1ZSwgb3RoZXJTb3VyY2UudmFsdWUpKTtcbiAgICB9LCBjYW5jZWxsYXRpb25Ub2tlbik7XG4gICAgcmV0dXJuIGFnZ3JlZ2F0ZWRTb3VyY2U7XG4gIH07XG5cbiAgX3Byb3RvLmFnZ3JlZ2F0ZVRocmVlID0gZnVuY3Rpb24gYWdncmVnYXRlVGhyZWUoc2Vjb25kLCB0aGlyZCwgY29tYmluYXRvciwgY2FuY2VsbGF0aW9uVG9rZW4pIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIGNhbmNlbGxhdGlvblRva2VuID0gY2FuY2VsbGF0aW9uVG9rZW4gIT09IG51bGwgJiYgY2FuY2VsbGF0aW9uVG9rZW4gIT09IHZvaWQgMCA/IGNhbmNlbGxhdGlvblRva2VuIDogbmV3IENhbmNlbGxhdGlvblRva2VuKCk7XG4gICAgdmFyIGFnZ3JlZ2F0ZWRTb3VyY2UgPSBuZXcgVHJhbnNpZW50RGF0YVNvdXJjZShjYW5jZWxsYXRpb25Ub2tlbiwgY29tYmluYXRvcih0aGlzLnZhbHVlLCBzZWNvbmQudmFsdWUsIHRoaXJkLnZhbHVlKSk7XG4gICAgdGhpcy5saXN0ZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFnZ3JlZ2F0ZWRTb3VyY2UudXBkYXRlKGNvbWJpbmF0b3IoX3RoaXMyLnZhbHVlLCBzZWNvbmQudmFsdWUsIHRoaXJkLnZhbHVlKSk7XG4gICAgfSwgY2FuY2VsbGF0aW9uVG9rZW4pO1xuICAgIHNlY29uZC5saXN0ZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFnZ3JlZ2F0ZWRTb3VyY2UudXBkYXRlKGNvbWJpbmF0b3IoX3RoaXMyLnZhbHVlLCBzZWNvbmQudmFsdWUsIHRoaXJkLnZhbHVlKSk7XG4gICAgfSwgY2FuY2VsbGF0aW9uVG9rZW4pO1xuICAgIHRoaXJkLmxpc3RlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYWdncmVnYXRlZFNvdXJjZS51cGRhdGUoY29tYmluYXRvcihfdGhpczIudmFsdWUsIHNlY29uZC52YWx1ZSwgdGhpcmQudmFsdWUpKTtcbiAgICB9LCBjYW5jZWxsYXRpb25Ub2tlbik7XG4gICAgcmV0dXJuIGFnZ3JlZ2F0ZWRTb3VyY2U7XG4gIH07XG5cbiAgX3Byb3RvLmFnZ3JlZ2F0ZUZvdXIgPSBmdW5jdGlvbiBhZ2dyZWdhdGVGb3VyKHNlY29uZCwgdGhpcmQsIGZvdXJ0aCwgY29tYmluYXRvciwgY2FuY2VsbGF0aW9uVG9rZW4pIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIGNhbmNlbGxhdGlvblRva2VuID0gY2FuY2VsbGF0aW9uVG9rZW4gIT09IG51bGwgJiYgY2FuY2VsbGF0aW9uVG9rZW4gIT09IHZvaWQgMCA/IGNhbmNlbGxhdGlvblRva2VuIDogbmV3IENhbmNlbGxhdGlvblRva2VuKCk7XG4gICAgdmFyIGFnZ3JlZ2F0ZWRTb3VyY2UgPSBuZXcgVHJhbnNpZW50RGF0YVNvdXJjZShjYW5jZWxsYXRpb25Ub2tlbiwgY29tYmluYXRvcih0aGlzLnZhbHVlLCBzZWNvbmQudmFsdWUsIHRoaXJkLnZhbHVlLCBmb3VydGgudmFsdWUpKTtcbiAgICB0aGlzLmxpc3RlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYWdncmVnYXRlZFNvdXJjZS51cGRhdGUoY29tYmluYXRvcihfdGhpczMudmFsdWUsIHNlY29uZC52YWx1ZSwgdGhpcmQudmFsdWUsIGZvdXJ0aC52YWx1ZSkpO1xuICAgIH0sIGNhbmNlbGxhdGlvblRva2VuKTtcbiAgICBzZWNvbmQubGlzdGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhZ2dyZWdhdGVkU291cmNlLnVwZGF0ZShjb21iaW5hdG9yKF90aGlzMy52YWx1ZSwgc2Vjb25kLnZhbHVlLCB0aGlyZC52YWx1ZSwgZm91cnRoLnZhbHVlKSk7XG4gICAgfSwgY2FuY2VsbGF0aW9uVG9rZW4pO1xuICAgIHRoaXJkLmxpc3RlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYWdncmVnYXRlZFNvdXJjZS51cGRhdGUoY29tYmluYXRvcihfdGhpczMudmFsdWUsIHNlY29uZC52YWx1ZSwgdGhpcmQudmFsdWUsIGZvdXJ0aC52YWx1ZSkpO1xuICAgIH0sIGNhbmNlbGxhdGlvblRva2VuKTtcbiAgICBmb3VydGgubGlzdGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhZ2dyZWdhdGVkU291cmNlLnVwZGF0ZShjb21iaW5hdG9yKF90aGlzMy52YWx1ZSwgc2Vjb25kLnZhbHVlLCB0aGlyZC52YWx1ZSwgZm91cnRoLnZhbHVlKSk7XG4gICAgfSwgY2FuY2VsbGF0aW9uVG9rZW4pO1xuICAgIHJldHVybiBhZ2dyZWdhdGVkU291cmNlO1xuICB9O1xuXG4gIF9wcm90by5hZ2dyZWdhdGVGaXZlID0gZnVuY3Rpb24gYWdncmVnYXRlRml2ZShzZWNvbmQsIHRoaXJkLCBmb3VydGgsIGZpZnRoLCBjb21iaW5hdG9yLCBjYW5jZWxsYXRpb25Ub2tlbikge1xuICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgY2FuY2VsbGF0aW9uVG9rZW4gPSBjYW5jZWxsYXRpb25Ub2tlbiAhPT0gbnVsbCAmJiBjYW5jZWxsYXRpb25Ub2tlbiAhPT0gdm9pZCAwID8gY2FuY2VsbGF0aW9uVG9rZW4gOiBuZXcgQ2FuY2VsbGF0aW9uVG9rZW4oKTtcbiAgICB2YXIgYWdncmVnYXRlZFNvdXJjZSA9IG5ldyBUcmFuc2llbnREYXRhU291cmNlKGNhbmNlbGxhdGlvblRva2VuLCBjb21iaW5hdG9yKHRoaXMudmFsdWUsIHNlY29uZC52YWx1ZSwgdGhpcmQudmFsdWUsIGZvdXJ0aC52YWx1ZSwgZmlmdGgudmFsdWUpKTtcbiAgICB0aGlzLmxpc3RlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYWdncmVnYXRlZFNvdXJjZS51cGRhdGUoY29tYmluYXRvcihfdGhpczQudmFsdWUsIHNlY29uZC52YWx1ZSwgdGhpcmQudmFsdWUsIGZvdXJ0aC52YWx1ZSwgZmlmdGgudmFsdWUpKTtcbiAgICB9LCBjYW5jZWxsYXRpb25Ub2tlbik7XG4gICAgc2Vjb25kLmxpc3RlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYWdncmVnYXRlZFNvdXJjZS51cGRhdGUoY29tYmluYXRvcihfdGhpczQudmFsdWUsIHNlY29uZC52YWx1ZSwgdGhpcmQudmFsdWUsIGZvdXJ0aC52YWx1ZSwgZmlmdGgudmFsdWUpKTtcbiAgICB9LCBjYW5jZWxsYXRpb25Ub2tlbik7XG4gICAgdGhpcmQubGlzdGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhZ2dyZWdhdGVkU291cmNlLnVwZGF0ZShjb21iaW5hdG9yKF90aGlzNC52YWx1ZSwgc2Vjb25kLnZhbHVlLCB0aGlyZC52YWx1ZSwgZm91cnRoLnZhbHVlLCBmaWZ0aC52YWx1ZSkpO1xuICAgIH0sIGNhbmNlbGxhdGlvblRva2VuKTtcbiAgICBmb3VydGgubGlzdGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhZ2dyZWdhdGVkU291cmNlLnVwZGF0ZShjb21iaW5hdG9yKF90aGlzNC52YWx1ZSwgc2Vjb25kLnZhbHVlLCB0aGlyZC52YWx1ZSwgZm91cnRoLnZhbHVlLCBmaWZ0aC52YWx1ZSkpO1xuICAgIH0sIGNhbmNlbGxhdGlvblRva2VuKTtcbiAgICBmaWZ0aC5saXN0ZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFnZ3JlZ2F0ZWRTb3VyY2UudXBkYXRlKGNvbWJpbmF0b3IoX3RoaXM0LnZhbHVlLCBzZWNvbmQudmFsdWUsIHRoaXJkLnZhbHVlLCBmb3VydGgudmFsdWUsIGZpZnRoLnZhbHVlKSk7XG4gICAgfSwgY2FuY2VsbGF0aW9uVG9rZW4pO1xuICAgIHJldHVybiBhZ2dyZWdhdGVkU291cmNlO1xuICB9O1xuXG4gIF9wcm90by5jb21iaW5lID0gZnVuY3Rpb24gY29tYmluZShvdGhlclNvdXJjZXMsIGNhbmNlbGxhdGlvblRva2VuKSB7XG4gICAgY2FuY2VsbGF0aW9uVG9rZW4gPSBjYW5jZWxsYXRpb25Ub2tlbiAhPT0gbnVsbCAmJiBjYW5jZWxsYXRpb25Ub2tlbiAhPT0gdm9pZCAwID8gY2FuY2VsbGF0aW9uVG9rZW4gOiBuZXcgQ2FuY2VsbGF0aW9uVG9rZW4oKTtcbiAgICB2YXIgY29tYmluZWREYXRhU291cmNlID0gbmV3IFRyYW5zaWVudERhdGFTb3VyY2UoY2FuY2VsbGF0aW9uVG9rZW4pO1xuICAgIHRoaXMucGlwZShjb21iaW5lZERhdGFTb3VyY2UsIGNhbmNlbGxhdGlvblRva2VuKTtcblxuICAgIGZvciAodmFyIF9pdGVyYXRvcjIgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKG90aGVyU291cmNlcyksIF9zdGVwMjsgIShfc3RlcDIgPSBfaXRlcmF0b3IyKCkpLmRvbmU7KSB7XG4gICAgICB2YXIgb3RoZXJTb3VyY2UgPSBfc3RlcDIudmFsdWU7XG4gICAgICBvdGhlclNvdXJjZS5waXBlKGNvbWJpbmVkRGF0YVNvdXJjZSwgY2FuY2VsbGF0aW9uVG9rZW4pO1xuICAgIH1cblxuICAgIHJldHVybiBjb21iaW5lZERhdGFTb3VyY2U7XG4gIH07XG5cbiAgX3Byb3RvLmRlbGF5ID0gZnVuY3Rpb24gZGVsYXkodGltZSwgY2FuY2VsbGF0aW9uVG9rZW4pIHtcbiAgICBjYW5jZWxsYXRpb25Ub2tlbiA9IGNhbmNlbGxhdGlvblRva2VuICE9PSBudWxsICYmIGNhbmNlbGxhdGlvblRva2VuICE9PSB2b2lkIDAgPyBjYW5jZWxsYXRpb25Ub2tlbiA6IG5ldyBDYW5jZWxsYXRpb25Ub2tlbigpO1xuICAgIHZhciBkZWxheWVkRGF0YVNvdXJjZSA9IG5ldyBUcmFuc2llbnREYXRhU291cmNlKGNhbmNlbGxhdGlvblRva2VuLCB0aGlzLnZhbHVlKTtcbiAgICB0aGlzLmxpc3RlbihmdW5jdGlvbiAodikge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRlbGF5ZWREYXRhU291cmNlLnVwZGF0ZSh2KTtcbiAgICAgIH0sIHRpbWUpO1xuICAgIH0sIGNhbmNlbGxhdGlvblRva2VuKTtcbiAgICByZXR1cm4gZGVsYXllZERhdGFTb3VyY2U7XG4gIH07XG5cbiAgX3Byb3RvLnNraXAgPSBmdW5jdGlvbiBza2lwKGFtb3VudCwgY2FuY2VsbGF0aW9uVG9rZW4pIHtcbiAgICBjYW5jZWxsYXRpb25Ub2tlbiA9IGNhbmNlbGxhdGlvblRva2VuICE9PSBudWxsICYmIGNhbmNlbGxhdGlvblRva2VuICE9PSB2b2lkIDAgPyBjYW5jZWxsYXRpb25Ub2tlbiA6IG5ldyBDYW5jZWxsYXRpb25Ub2tlbigpO1xuICAgIHZhciBkZWxheWVkRGF0YVNvdXJjZSA9IG5ldyBUcmFuc2llbnREYXRhU291cmNlKGNhbmNlbGxhdGlvblRva2VuLCB0aGlzLnZhbHVlKTtcbiAgICB0aGlzLmxpc3RlbihmdW5jdGlvbiAodikge1xuICAgICAgaWYgKGFtb3VudCA9PT0gMCkge1xuICAgICAgICBkZWxheWVkRGF0YVNvdXJjZS51cGRhdGUodik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhbW91bnQtLTtcbiAgICAgIH1cbiAgICB9LCBjYW5jZWxsYXRpb25Ub2tlbik7XG4gICAgcmV0dXJuIGRlbGF5ZWREYXRhU291cmNlO1xuICB9O1xuXG4gIF9wcm90by5jdXRvZmYgPSBmdW5jdGlvbiBjdXRvZmYoYW1vdW50LCBjYW5jZWxsYXRpb25Ub2tlbikge1xuICAgIGNhbmNlbGxhdGlvblRva2VuID0gY2FuY2VsbGF0aW9uVG9rZW4gIT09IG51bGwgJiYgY2FuY2VsbGF0aW9uVG9rZW4gIT09IHZvaWQgMCA/IGNhbmNlbGxhdGlvblRva2VuIDogbmV3IENhbmNlbGxhdGlvblRva2VuKCk7XG4gICAgdmFyIGRlbGF5ZWREYXRhU291cmNlID0gbmV3IFRyYW5zaWVudERhdGFTb3VyY2UoY2FuY2VsbGF0aW9uVG9rZW4sIHRoaXMudmFsdWUpO1xuICAgIHRoaXMubGlzdGVuKGZ1bmN0aW9uICh2KSB7XG4gICAgICBpZiAoYW1vdW50LS0gPiAwKSB7XG4gICAgICAgIGRlbGF5ZWREYXRhU291cmNlLnVwZGF0ZSh2KTtcbiAgICAgIH1cbiAgICB9LCBjYW5jZWxsYXRpb25Ub2tlbik7XG4gICAgcmV0dXJuIGRlbGF5ZWREYXRhU291cmNlO1xuICB9O1xuXG4gIF9wcm90by5hd2FpdE5leHRVcGRhdGUgPSBmdW5jdGlvbiBhd2FpdE5leHRVcGRhdGUoY2FuY2VsbGF0aW9uVG9rZW4pIHtcbiAgICB2YXIgX3RoaXM1ID0gdGhpcztcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgX3RoaXM1Lmxpc3Rlbk9uY2UoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKHZhbHVlKTtcbiAgICAgIH0sIGNhbmNlbGxhdGlvblRva2VuKTtcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8uZGVib3VuY2UgPSBmdW5jdGlvbiBkZWJvdW5jZSh0aW1lLCBjYW5jZWxsYXRpb25Ub2tlbikge1xuICAgIGNhbmNlbGxhdGlvblRva2VuID0gY2FuY2VsbGF0aW9uVG9rZW4gIT09IG51bGwgJiYgY2FuY2VsbGF0aW9uVG9rZW4gIT09IHZvaWQgMCA/IGNhbmNlbGxhdGlvblRva2VuIDogbmV3IENhbmNlbGxhdGlvblRva2VuKCk7XG4gICAgdmFyIGRlYm91bmNlZERhdGFTb3VyY2UgPSBuZXcgVHJhbnNpZW50RGF0YVNvdXJjZShjYW5jZWxsYXRpb25Ub2tlbiwgdGhpcy52YWx1ZSk7XG4gICAgdmFyIHRpbWVvdXQ7XG4gICAgdGhpcy5saXN0ZW4oZnVuY3Rpb24gKHYpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGVib3VuY2VkRGF0YVNvdXJjZS51cGRhdGUodik7XG4gICAgICB9LCB0aW1lKTtcbiAgICB9LCBjYW5jZWxsYXRpb25Ub2tlbik7XG4gICAgcmV0dXJuIGRlYm91bmNlZERhdGFTb3VyY2U7XG4gIH07XG5cbiAgX3Byb3RvLmJ1ZmZlciA9IGZ1bmN0aW9uIGJ1ZmZlcih0aW1lLCBjYW5jZWxsYXRpb25Ub2tlbikge1xuICAgIGNhbmNlbGxhdGlvblRva2VuID0gY2FuY2VsbGF0aW9uVG9rZW4gIT09IG51bGwgJiYgY2FuY2VsbGF0aW9uVG9rZW4gIT09IHZvaWQgMCA/IGNhbmNlbGxhdGlvblRva2VuIDogbmV3IENhbmNlbGxhdGlvblRva2VuKCk7XG4gICAgdmFyIGJ1ZmZlcmVkRGF0YVNvdXJjZSA9IG5ldyBUcmFuc2llbnREYXRhU291cmNlKGNhbmNlbGxhdGlvblRva2VuKTtcbiAgICB2YXIgdGltZW91dDtcbiAgICB2YXIgYnVmZmVyID0gW107XG4gICAgdGhpcy5saXN0ZW4oZnVuY3Rpb24gKHYpIHtcbiAgICAgIGJ1ZmZlci5wdXNoKHYpO1xuXG4gICAgICBpZiAoIXRpbWVvdXQpIHtcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRpbWVvdXQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgYnVmZmVyZWREYXRhU291cmNlLnVwZGF0ZShidWZmZXIpO1xuICAgICAgICAgIGJ1ZmZlciA9IFtdO1xuICAgICAgICB9LCB0aW1lKTtcbiAgICAgIH1cbiAgICB9LCBjYW5jZWxsYXRpb25Ub2tlbik7XG4gICAgcmV0dXJuIGJ1ZmZlcmVkRGF0YVNvdXJjZTtcbiAgfTtcblxuICBfcHJvdG8uYWNjdW11bGF0ZSA9IGZ1bmN0aW9uIGFjY3VtdWxhdGUoY2FuY2VsbGF0aW9uVG9rZW4pIHtcbiAgICB2YXIgcXVldWVEYXRhU291cmNlID0gbmV3IEFycmF5RGF0YVNvdXJjZSgpO1xuICAgIHRoaXMubGlzdGVuKGZ1bmN0aW9uICh2KSB7XG4gICAgICBxdWV1ZURhdGFTb3VyY2UucHVzaCh2KTtcbiAgICB9LCBjYW5jZWxsYXRpb25Ub2tlbik7XG4gICAgcmV0dXJuIHF1ZXVlRGF0YVNvdXJjZTtcbiAgfTtcblxuICBfcHJvdG8ucGljayA9IGZ1bmN0aW9uIHBpY2soa2V5LCBjYW5jZWxsYXRpb25Ub2tlbikge1xuICAgIHZhciBfYTtcblxuICAgIGNhbmNlbGxhdGlvblRva2VuID0gY2FuY2VsbGF0aW9uVG9rZW4gIT09IG51bGwgJiYgY2FuY2VsbGF0aW9uVG9rZW4gIT09IHZvaWQgMCA/IGNhbmNlbGxhdGlvblRva2VuIDogbmV3IENhbmNlbGxhdGlvblRva2VuKCk7XG4gICAgdmFyIHN1YkRhdGFTb3VyY2UgPSBuZXcgVHJhbnNpZW50RGF0YVNvdXJjZShjYW5jZWxsYXRpb25Ub2tlbiwgKF9hID0gdGhpcy52YWx1ZSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hW2tleV0pO1xuICAgIHRoaXMubGlzdGVuKGZ1bmN0aW9uICh2KSB7XG4gICAgICBpZiAodiAhPT0gdW5kZWZpbmVkICYmIHYgIT09IG51bGwpIHtcbiAgICAgICAgc3ViRGF0YVNvdXJjZS51cGRhdGUodltrZXldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN1YkRhdGFTb3VyY2UudXBkYXRlKHYpO1xuICAgICAgfVxuICAgIH0sIGNhbmNlbGxhdGlvblRva2VuKTtcbiAgICByZXR1cm4gc3ViRGF0YVNvdXJjZTtcbiAgfTtcblxuICBfcHJvdG8uY2FuY2VsQWxsID0gZnVuY3Rpb24gY2FuY2VsQWxsKCkge1xuICAgIHRoaXMudXBkYXRlRXZlbnQuY2FuY2VsQWxsKCk7XG4gIH07XG5cbiAgcmV0dXJuIERhdGFTb3VyY2U7XG59KCk7XG52YXIgVHJhbnNpZW50RGF0YVNvdXJjZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0RhdGFTb3VyY2UpIHtcbiAgX2luaGVyaXRzTG9vc2UoVHJhbnNpZW50RGF0YVNvdXJjZSwgX0RhdGFTb3VyY2UpO1xuXG4gIGZ1bmN0aW9uIFRyYW5zaWVudERhdGFTb3VyY2UoZGlzcG9zZVRva2VuLCBpbml0aWFsVmFsdWUsIG5hbWUpIHtcbiAgICB2YXIgX3RoaXM2O1xuXG4gICAgX3RoaXM2ID0gX0RhdGFTb3VyY2UuY2FsbCh0aGlzLCBpbml0aWFsVmFsdWUsIG5hbWUpIHx8IHRoaXM7XG4gICAgX3RoaXM2LmRpc3Bvc2VUb2tlbiA9IGRpc3Bvc2VUb2tlbjtcblxuICAgIF90aGlzNi51cGRhdGVFdmVudC5vbkVtcHR5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgZGlzcG9zZVRva2VuLmNhbmNlbCgpO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXM2KSwgJ3ZhbHVlJywge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyYW5zaWVudCBkYXRhIHNvdXJjZSBoYXMgZXhwaXJlZCBhbmQgY2FuIG5vIGxvbmdlciBiZSB1c2VkIGlmIHlvdSB3aXNoIHRvIHVzZSBpdCBldmVuIGFmdGVyIGFsbCBsaXN0ZW5lcnMgd2VyZSByZW1vdmVkIFwicGVyc2lzdFwiLiBOb3RlIHRoYXQgcGVyc2lzdGVkIGRhdGEgc291cmNlcyB3aWxsIG5vdCBiZSBnYXJhYmdlIGNvbGxlY3RlZCB1bmxlc3MgeW91IHJlbW92ZSB0aGUgc3Vic2NyaXB0aW9uIHRoZXkgaGF2ZSBvbiB0aGVpciBwYXJlbnQgc291cmNlJyk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gc2V0KCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVHJhbnNpZW50IGRhdGEgc291cmNlIGhhcyBleHBpcmVkIGFuZCBjYW4gbm8gbG9uZ2VyIGJlIHVzZWQgaWYgeW91IHdpc2ggdG8gdXNlIGl0IGV2ZW4gYWZ0ZXIgYWxsIGxpc3RlbmVycyB3ZXJlIHJlbW92ZWQgXCJwZXJzaXN0XCIuIE5vdGUgdGhhdCBwZXJzaXN0ZWQgZGF0YSBzb3VyY2VzIHdpbGwgbm90IGJlIGdhcmFiZ2UgY29sbGVjdGVkIHVubGVzcyB5b3UgcmVtb3ZlIHRoZSBzdWJzY3JpcHRpb24gdGhleSBoYXZlIG9uIHRoZWlyIHBhcmVudCBzb3VyY2UnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpczY7XG4gIH1cblxuICB2YXIgX3Byb3RvMiA9IFRyYW5zaWVudERhdGFTb3VyY2UucHJvdG90eXBlO1xuXG4gIF9wcm90bzIucGVyc2lzdCA9IGZ1bmN0aW9uIHBlcnNpc3QoKSB7XG4gICAgdGhpcy51cGRhdGVFdmVudC5vbkVtcHR5ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90bzIubGlzdGVuID0gZnVuY3Rpb24gbGlzdGVuKGNhbGxiYWNrLCBjYW5jZWxsYXRpb25Ub2tlbikge1xuICAgIHRoaXMuZGlzcG9zZVRva2VuLnRocm93SWZDYW5jZWxsZWQoJ1RyYW5zaWVudCBkYXRhIHNvdXJjZSBoYXMgZXhwaXJlZC4gTGlzdGVuaW5nIG5vdCBwb3NzaWJsZScpO1xuICAgIHJldHVybiBfRGF0YVNvdXJjZS5wcm90b3R5cGUubGlzdGVuLmNhbGwodGhpcywgY2FsbGJhY2ssIGNhbmNlbGxhdGlvblRva2VuKTtcbiAgfTtcblxuICBfcHJvdG8yLmxpc3RlbkFuZFJlcGVhdCA9IGZ1bmN0aW9uIGxpc3RlbkFuZFJlcGVhdChjYWxsYmFjaywgY2FuY2VsbGF0aW9uVG9rZW4pIHtcbiAgICB0aGlzLmRpc3Bvc2VUb2tlbi50aHJvd0lmQ2FuY2VsbGVkKCdUcmFuc2llbnQgZGF0YSBzb3VyY2UgaGFzIGV4cGlyZWQuIExpc3RlbmluZyBub3QgcG9zc2libGUnKTtcbiAgICByZXR1cm4gX0RhdGFTb3VyY2UucHJvdG90eXBlLmxpc3RlbkFuZFJlcGVhdC5jYWxsKHRoaXMsIGNhbGxiYWNrLCBjYW5jZWxsYXRpb25Ub2tlbik7XG4gIH07XG5cbiAgX3Byb3RvMi5saXN0ZW5PbmNlID0gZnVuY3Rpb24gbGlzdGVuT25jZShjYWxsYmFjaywgY2FuY2VsbGF0aW9uVG9rZW4pIHtcbiAgICB0aGlzLmRpc3Bvc2VUb2tlbi50aHJvd0lmQ2FuY2VsbGVkKCdUcmFuc2llbnQgZGF0YSBzb3VyY2UgaGFzIGV4cGlyZWQuIExpc3RlbmluZyBub3QgcG9zc2libGUnKTtcblxuICAgIHJldHVybiBfRGF0YVNvdXJjZS5wcm90b3R5cGUubGlzdGVuLmNhbGwodGhpcywgY2FsbGJhY2ssIGNhbmNlbGxhdGlvblRva2VuKTtcbiAgfTtcblxuICByZXR1cm4gVHJhbnNpZW50RGF0YVNvdXJjZTtcbn0oRGF0YVNvdXJjZSk7XG52YXIgQXJyYXlEYXRhU291cmNlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQXJyYXlEYXRhU291cmNlKGluaXRpYWxEYXRhKSB7XG4gICAgaWYgKGluaXRpYWxEYXRhKSB7XG4gICAgICB0aGlzLmRhdGEgPSBpbml0aWFsRGF0YS5zbGljZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGEgPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLmxlbmd0aFNvdXJjZSA9IG5ldyBEYXRhU291cmNlKHRoaXMuZGF0YS5sZW5ndGgpO1xuICAgIHRoaXMudXBkYXRlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIH1cblxuICBBcnJheURhdGFTb3VyY2UuZnJvbU11bHRpcGxlU291cmNlcyA9IGZ1bmN0aW9uIGZyb21NdWx0aXBsZVNvdXJjZXMoY2FuY2VsbGF0aW9uVG9rZW4pIHtcbiAgICB2YXIgc291cmNlcyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICAgIHZhciBfYTtcblxuICAgIHZhciBib3VuZGFyaWVzID0gWzBdO1xuICAgIHZhciByZXN1bHQgPSBuZXcgQXJyYXlEYXRhU291cmNlKCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNvdXJjZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHNvdXJjZXNbaV0pKSB7XG4gICAgICAgIHJlc3VsdC5hcHBlbmRBcnJheShzb3VyY2VzW2ldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmVzdWx0LmFwcGVuZEFycmF5KChfYSA9IHNvdXJjZXNbaV0uZGF0YSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogW10pO1xuICAgICAgICAgIHZhciBpbmRleCA9IGk7XG4gICAgICAgICAgc291cmNlc1tpXS5saXN0ZW4oZnVuY3Rpb24gKGNoYW5nZSkge1xuICAgICAgICAgICAgc3dpdGNoIChjaGFuZ2Uub3BlcmF0aW9uRGV0YWlsZWQpIHtcbiAgICAgICAgICAgICAgY2FzZSAnYXBwZW5kJzpcbiAgICAgICAgICAgICAgY2FzZSAncHJlcGVuZCc6XG4gICAgICAgICAgICAgIGNhc2UgJ2luc2VydCc6XG4gICAgICAgICAgICAgICAgcmVzdWx0Lmluc2VydEF0LmFwcGx5KHJlc3VsdCwgW2NoYW5nZS5pbmRleCArIGJvdW5kYXJpZXNbaW5kZXhdXS5jb25jYXQoY2hhbmdlLml0ZW1zKSk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IGluZGV4ICsgMTsgX2kgPCBib3VuZGFyaWVzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgYm91bmRhcmllc1tfaV0gKz0gY2hhbmdlLmNvdW50O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgJ3JlbW92ZSc6XG4gICAgICAgICAgICAgIGNhc2UgJ3JlbW92ZUxlZnQnOlxuICAgICAgICAgICAgICBjYXNlICdyZW1vdmVSaWdodCc6XG4gICAgICAgICAgICAgIGNhc2UgJ2NsZWFyJzpcbiAgICAgICAgICAgICAgICByZXN1bHQucmVtb3ZlUmFuZ2UoY2hhbmdlLmluZGV4ICsgYm91bmRhcmllc1tpbmRleF0sIGNoYW5nZS5pbmRleCArIGJvdW5kYXJpZXNbaW5kZXhdICsgY2hhbmdlLmNvdW50KTtcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIF9pMiA9IGluZGV4ICsgMTsgX2kyIDwgYm91bmRhcmllcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICAgICAgICAgICAgICBib3VuZGFyaWVzW19pMl0gLT0gY2hhbmdlLmNvdW50O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgJ21lcmdlJzpcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCB5ZXQgc3VwcG9ydGVkJyk7XG5cbiAgICAgICAgICAgICAgY2FzZSAncmVwbGFjZSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0LnNldChjaGFuZ2UuaW5kZXggKyBib3VuZGFyaWVzW2luZGV4XSwgY2hhbmdlLml0ZW1zWzBdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICBjYXNlICdzd2FwJzpcbiAgICAgICAgICAgICAgICByZXN1bHQuc3dhcChjaGFuZ2UuaW5kZXggKyBib3VuZGFyaWVzW2luZGV4XSwgY2hhbmdlLmluZGV4MiArIGJvdW5kYXJpZXNbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCBjYW5jZWxsYXRpb25Ub2tlbik7XG4gICAgICAgIH0pKCk7XG4gICAgICB9XG5cbiAgICAgIGJvdW5kYXJpZXMucHVzaChyZXN1bHQubGVuZ3RoLnZhbHVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHZhciBfcHJvdG8zID0gQXJyYXlEYXRhU291cmNlLnByb3RvdHlwZTtcblxuICBfcHJvdG8zLmxpc3RlbkFuZFJlcGVhdCA9IGZ1bmN0aW9uIGxpc3RlbkFuZFJlcGVhdChjYWxsYmFjaywgY2FuY2VsbGF0aW9uVG9rZW4pIHtcbiAgICBjYWxsYmFjayh7XG4gICAgICBvcGVyYXRpb246ICdhZGQnLFxuICAgICAgb3BlcmF0aW9uRGV0YWlsZWQ6ICdhcHBlbmQnLFxuICAgICAgaW5kZXg6IDAsXG4gICAgICBpdGVtczogdGhpcy5kYXRhLFxuICAgICAgbmV3U3RhdGU6IHRoaXMuZGF0YSxcbiAgICAgIGNvdW50OiB0aGlzLmRhdGEubGVuZ3RoXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMubGlzdGVuKGNhbGxiYWNrLCBjYW5jZWxsYXRpb25Ub2tlbik7XG4gIH07XG5cbiAgX3Byb3RvMy5yZXBlYXRDdXJyZW50U3RhdGUgPSBmdW5jdGlvbiByZXBlYXRDdXJyZW50U3RhdGUoKSB7XG4gICAgdGhpcy51cGRhdGUoe1xuICAgICAgb3BlcmF0aW9uOiAncmVtb3ZlJyxcbiAgICAgIG9wZXJhdGlvbkRldGFpbGVkOiAnY2xlYXInLFxuICAgICAgY291bnQ6IHRoaXMuZGF0YS5sZW5ndGgsXG4gICAgICBpbmRleDogMCxcbiAgICAgIGl0ZW1zOiB0aGlzLmRhdGEsXG4gICAgICBuZXdTdGF0ZTogW11cbiAgICB9KTtcbiAgICB0aGlzLnVwZGF0ZSh7XG4gICAgICBvcGVyYXRpb246ICdhZGQnLFxuICAgICAgb3BlcmF0aW9uRGV0YWlsZWQ6ICdhcHBlbmQnLFxuICAgICAgaW5kZXg6IDAsXG4gICAgICBpdGVtczogdGhpcy5kYXRhLFxuICAgICAgbmV3U3RhdGU6IHRoaXMuZGF0YSxcbiAgICAgIGNvdW50OiB0aGlzLmRhdGEubGVuZ3RoXG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvMy5saXN0ZW4gPSBmdW5jdGlvbiBsaXN0ZW4oY2FsbGJhY2ssIGNhbmNlbGxhdGlvblRva2VuKSB7XG4gICAgcmV0dXJuIHRoaXMudXBkYXRlRXZlbnQuc3Vic2NyaWJlKGNhbGxiYWNrLCBjYW5jZWxsYXRpb25Ub2tlbikuY2FuY2VsO1xuICB9O1xuXG4gIF9wcm90bzMubGlzdGVuT25jZSA9IGZ1bmN0aW9uIGxpc3Rlbk9uY2UoY2FsbGJhY2ssIGNhbmNlbGxhdGlvblRva2VuKSB7XG4gICAgcmV0dXJuIHRoaXMudXBkYXRlRXZlbnQuc3Vic2NyaWJlT25jZShjYWxsYmFjaywgY2FuY2VsbGF0aW9uVG9rZW4pLmNhbmNlbDtcbiAgfTtcblxuICBfcHJvdG8zLmF3YWl0TmV4dFVwZGF0ZSA9IGZ1bmN0aW9uIGF3YWl0TmV4dFVwZGF0ZShjYW5jZWxsYXRpb25Ub2tlbikge1xuICAgIHZhciBfdGhpczcgPSB0aGlzO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICBfdGhpczcubGlzdGVuT25jZShmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUodmFsdWUpO1xuICAgICAgfSwgY2FuY2VsbGF0aW9uVG9rZW4pO1xuICAgIH0pO1xuICB9O1xuXG4gIF9wcm90bzMuZ2V0RGF0YSA9IGZ1bmN0aW9uIGdldERhdGEoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfTtcblxuICBfcHJvdG8zLmdldCA9IGZ1bmN0aW9uIGdldChpbmRleCkge1xuICAgIHJldHVybiB0aGlzLmRhdGFbaW5kZXhdO1xuICB9O1xuXG4gIF9wcm90bzMuc2V0ID0gZnVuY3Rpb24gc2V0KGluZGV4LCBpdGVtKSB7XG4gICAgdmFyIG9sZCA9IHRoaXMuZGF0YVtpbmRleF07XG5cbiAgICBpZiAob2xkID09PSBpdGVtKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5kYXRhW2luZGV4XSA9IGl0ZW07XG4gICAgdGhpcy51cGRhdGUoe1xuICAgICAgb3BlcmF0aW9uOiAncmVwbGFjZScsXG4gICAgICBvcGVyYXRpb25EZXRhaWxlZDogJ3JlcGxhY2UnLFxuICAgICAgdGFyZ2V0OiBvbGQsXG4gICAgICBjb3VudDogMSxcbiAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgIGl0ZW1zOiBbaXRlbV0sXG4gICAgICBuZXdTdGF0ZTogdGhpcy5kYXRhXG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5sZW5ndGhTb3VyY2UudmFsdWUgIT09IHRoaXMuZGF0YS5sZW5ndGgpIHtcbiAgICAgIHRoaXMubGVuZ3RoU291cmNlLnVwZGF0ZSh0aGlzLmRhdGEubGVuZ3RoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvMy5zd2FwID0gZnVuY3Rpb24gc3dhcChpbmRleEEsIGluZGV4Qikge1xuICAgIGlmIChpbmRleEEgPT09IGluZGV4Qikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpdGVtQSA9IHRoaXMuZGF0YVtpbmRleEFdO1xuICAgIHZhciBpdGVtQiA9IHRoaXMuZGF0YVtpbmRleEJdO1xuICAgIHRoaXMuZGF0YVtpbmRleEJdID0gaXRlbUE7XG4gICAgdGhpcy5kYXRhW2luZGV4QV0gPSBpdGVtQjtcbiAgICB0aGlzLnVwZGF0ZSh7XG4gICAgICBvcGVyYXRpb246ICdzd2FwJyxcbiAgICAgIG9wZXJhdGlvbkRldGFpbGVkOiAnc3dhcCcsXG4gICAgICBpbmRleDogaW5kZXhBLFxuICAgICAgaW5kZXgyOiBpbmRleEIsXG4gICAgICBpdGVtczogW2l0ZW1BLCBpdGVtQl0sXG4gICAgICBuZXdTdGF0ZTogdGhpcy5kYXRhXG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5sZW5ndGhTb3VyY2UudmFsdWUgIT09IHRoaXMuZGF0YS5sZW5ndGgpIHtcbiAgICAgIHRoaXMubGVuZ3RoU291cmNlLnVwZGF0ZSh0aGlzLmRhdGEubGVuZ3RoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvMy5zd2FwSXRlbXMgPSBmdW5jdGlvbiBzd2FwSXRlbXMoaXRlbUEsIGl0ZW1CKSB7XG4gICAgaWYgKGl0ZW1BID09PSBpdGVtQikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpbmRleEEgPSB0aGlzLmRhdGEuaW5kZXhPZihpdGVtQSk7XG4gICAgdmFyIGluZGV4QiA9IHRoaXMuZGF0YS5pbmRleE9mKGl0ZW1CKTtcblxuICAgIGlmIChpbmRleEEgIT09IC0xICYmIGluZGV4QiAhPT0gLTEpIHtcbiAgICAgIHRoaXMuZGF0YVtpbmRleEJdID0gaXRlbUE7XG4gICAgICB0aGlzLmRhdGFbaW5kZXhBXSA9IGl0ZW1CO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlKHtcbiAgICAgIG9wZXJhdGlvbjogJ3N3YXAnLFxuICAgICAgb3BlcmF0aW9uRGV0YWlsZWQ6ICdzd2FwJyxcbiAgICAgIGluZGV4OiBpbmRleEEsXG4gICAgICBpbmRleDI6IGluZGV4QixcbiAgICAgIGl0ZW1zOiBbaXRlbUEsIGl0ZW1CXSxcbiAgICAgIG5ld1N0YXRlOiB0aGlzLmRhdGFcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmxlbmd0aFNvdXJjZS52YWx1ZSAhPT0gdGhpcy5kYXRhLmxlbmd0aCkge1xuICAgICAgdGhpcy5sZW5ndGhTb3VyY2UudXBkYXRlKHRoaXMuZGF0YS5sZW5ndGgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8zLmFwcGVuZEFycmF5ID0gZnVuY3Rpb24gYXBwZW5kQXJyYXkoaXRlbXMpIHtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLmRhdGEuY29uY2F0KGl0ZW1zKTtcbiAgICB0aGlzLnVwZGF0ZSh7XG4gICAgICBvcGVyYXRpb246ICdhZGQnLFxuICAgICAgb3BlcmF0aW9uRGV0YWlsZWQ6ICdhcHBlbmQnLFxuICAgICAgY291bnQ6IGl0ZW1zLmxlbmd0aCxcbiAgICAgIGluZGV4OiB0aGlzLmRhdGEubGVuZ3RoIC0gaXRlbXMubGVuZ3RoLFxuICAgICAgaXRlbXM6IGl0ZW1zLFxuICAgICAgbmV3U3RhdGU6IHRoaXMuZGF0YVxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMubGVuZ3RoU291cmNlLnZhbHVlICE9PSB0aGlzLmRhdGEubGVuZ3RoKSB7XG4gICAgICB0aGlzLmxlbmd0aFNvdXJjZS51cGRhdGUodGhpcy5kYXRhLmxlbmd0aCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90bzMuaW5zZXJ0QXQgPSBmdW5jdGlvbiBpbnNlcnRBdChpbmRleCkge1xuICAgIHZhciBfdGhpcyRkYXRhO1xuXG4gICAgdmFyIGl0ZW1zID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuXG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIChfdGhpcyRkYXRhID0gdGhpcy5kYXRhKS5zcGxpY2UuYXBwbHkoX3RoaXMkZGF0YSwgW2luZGV4LCAwXS5jb25jYXQoaXRlbXMpKTtcblxuICAgIHRoaXMudXBkYXRlKHtcbiAgICAgIG9wZXJhdGlvbjogJ2FkZCcsXG4gICAgICBvcGVyYXRpb25EZXRhaWxlZDogJ2luc2VydCcsXG4gICAgICBjb3VudDogaXRlbXMubGVuZ3RoLFxuICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgaXRlbXM6IGl0ZW1zLFxuICAgICAgbmV3U3RhdGU6IHRoaXMuZGF0YVxuICAgIH0pO1xuICAgIHRoaXMubGVuZ3RoU291cmNlLnVwZGF0ZSh0aGlzLmRhdGEubGVuZ3RoKTtcbiAgfTtcblxuICBfcHJvdG8zLnB1c2ggPSBmdW5jdGlvbiBwdXNoKCkge1xuICAgIHRoaXMuYXBwZW5kQXJyYXkoW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgfTtcblxuICBfcHJvdG8zLnVuc2hpZnQgPSBmdW5jdGlvbiB1bnNoaWZ0KCkge1xuICAgIHZhciBfdGhpcyRkYXRhMjtcblxuICAgIHZhciBpdGVtcyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcblxuICAgIChfdGhpcyRkYXRhMiA9IHRoaXMuZGF0YSkudW5zaGlmdC5hcHBseShfdGhpcyRkYXRhMiwgaXRlbXMpO1xuXG4gICAgdGhpcy51cGRhdGUoe1xuICAgICAgb3BlcmF0aW9uOiAnYWRkJyxcbiAgICAgIG9wZXJhdGlvbkRldGFpbGVkOiAncHJlcGVuZCcsXG4gICAgICBjb3VudDogaXRlbXMubGVuZ3RoLFxuICAgICAgaXRlbXM6IGl0ZW1zLFxuICAgICAgaW5kZXg6IDAsXG4gICAgICBuZXdTdGF0ZTogdGhpcy5kYXRhXG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5sZW5ndGhTb3VyY2UudmFsdWUgIT09IHRoaXMuZGF0YS5sZW5ndGgpIHtcbiAgICAgIHRoaXMubGVuZ3RoU291cmNlLnVwZGF0ZSh0aGlzLmRhdGEubGVuZ3RoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvMy5wb3AgPSBmdW5jdGlvbiBwb3AoKSB7XG4gICAgdmFyIGl0ZW0gPSB0aGlzLmRhdGEucG9wKCk7XG4gICAgdGhpcy51cGRhdGUoe1xuICAgICAgb3BlcmF0aW9uOiAncmVtb3ZlJyxcbiAgICAgIG9wZXJhdGlvbkRldGFpbGVkOiAncmVtb3ZlUmlnaHQnLFxuICAgICAgY291bnQ6IDEsXG4gICAgICBpbmRleDogdGhpcy5kYXRhLmxlbmd0aCxcbiAgICAgIGl0ZW1zOiBbaXRlbV0sXG4gICAgICBuZXdTdGF0ZTogdGhpcy5kYXRhXG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5sZW5ndGhTb3VyY2UudmFsdWUgIT09IHRoaXMuZGF0YS5sZW5ndGgpIHtcbiAgICAgIHRoaXMubGVuZ3RoU291cmNlLnVwZGF0ZSh0aGlzLmRhdGEubGVuZ3RoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbTtcbiAgfTtcblxuICBfcHJvdG8zLm1lcmdlID0gZnVuY3Rpb24gbWVyZ2UobmV3RGF0YSkge1xuICAgIHZhciBvbGQgPSB0aGlzLmRhdGE7XG4gICAgdGhpcy5kYXRhID0gbmV3RGF0YS5zbGljZSgpO1xuICAgIHRoaXMudXBkYXRlKHtcbiAgICAgIG9wZXJhdGlvbjogJ21lcmdlJyxcbiAgICAgIG9wZXJhdGlvbkRldGFpbGVkOiAnbWVyZ2UnLFxuICAgICAgcHJldmlvdXNTdGF0ZTogb2xkLFxuICAgICAgaW5kZXg6IDAsXG4gICAgICBpdGVtczogdGhpcy5kYXRhLFxuICAgICAgbmV3U3RhdGU6IHRoaXMuZGF0YVxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMubGVuZ3RoU291cmNlLnZhbHVlICE9PSB0aGlzLmRhdGEubGVuZ3RoKSB7XG4gICAgICB0aGlzLmxlbmd0aFNvdXJjZS51cGRhdGUodGhpcy5kYXRhLmxlbmd0aCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90bzMucmVtb3ZlUmlnaHQgPSBmdW5jdGlvbiByZW1vdmVSaWdodChjb3VudCkge1xuICAgIHZhciBsZW5ndGggPSB0aGlzLmRhdGEubGVuZ3RoO1xuICAgIHZhciByZXN1bHQgPSB0aGlzLmRhdGEuc3BsaWNlKGxlbmd0aCAtIGNvdW50LCBjb3VudCk7XG4gICAgdGhpcy51cGRhdGUoe1xuICAgICAgb3BlcmF0aW9uOiAncmVtb3ZlJyxcbiAgICAgIG9wZXJhdGlvbkRldGFpbGVkOiAncmVtb3ZlUmlnaHQnLFxuICAgICAgY291bnQ6IGNvdW50LFxuICAgICAgaW5kZXg6IGxlbmd0aCAtIGNvdW50LFxuICAgICAgaXRlbXM6IHJlc3VsdCxcbiAgICAgIG5ld1N0YXRlOiB0aGlzLmRhdGFcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmxlbmd0aFNvdXJjZS52YWx1ZSAhPT0gdGhpcy5kYXRhLmxlbmd0aCkge1xuICAgICAgdGhpcy5sZW5ndGhTb3VyY2UudXBkYXRlKHRoaXMuZGF0YS5sZW5ndGgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8zLnJlbW92ZUxlZnQgPSBmdW5jdGlvbiByZW1vdmVMZWZ0KGNvdW50KSB7XG4gICAgdmFyIHJlc3VsdCA9IHRoaXMuZGF0YS5zcGxpY2UoMCwgY291bnQpO1xuICAgIHRoaXMudXBkYXRlKHtcbiAgICAgIG9wZXJhdGlvbjogJ3JlbW92ZScsXG4gICAgICBvcGVyYXRpb25EZXRhaWxlZDogJ3JlbW92ZUxlZnQnLFxuICAgICAgY291bnQ6IGNvdW50LFxuICAgICAgaW5kZXg6IDAsXG4gICAgICBpdGVtczogcmVzdWx0LFxuICAgICAgbmV3U3RhdGU6IHRoaXMuZGF0YVxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMubGVuZ3RoU291cmNlLnZhbHVlICE9PSB0aGlzLmRhdGEubGVuZ3RoKSB7XG4gICAgICB0aGlzLmxlbmd0aFNvdXJjZS51cGRhdGUodGhpcy5kYXRhLmxlbmd0aCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90bzMucmVtb3ZlQXQgPSBmdW5jdGlvbiByZW1vdmVBdChpbmRleCkge1xuICAgIHZhciByZW1vdmVkID0gdGhpcy5kYXRhLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy51cGRhdGUoe1xuICAgICAgb3BlcmF0aW9uOiAncmVtb3ZlJyxcbiAgICAgIG9wZXJhdGlvbkRldGFpbGVkOiAncmVtb3ZlJyxcbiAgICAgIGNvdW50OiByZW1vdmVkLmxlbmd0aCxcbiAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgIGl0ZW1zOiByZW1vdmVkLFxuICAgICAgbmV3U3RhdGU6IHRoaXMuZGF0YVxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMubGVuZ3RoU291cmNlLnZhbHVlICE9PSB0aGlzLmRhdGEubGVuZ3RoKSB7XG4gICAgICB0aGlzLmxlbmd0aFNvdXJjZS51cGRhdGUodGhpcy5kYXRhLmxlbmd0aCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90bzMucmVtb3ZlUmFuZ2UgPSBmdW5jdGlvbiByZW1vdmVSYW5nZShzdGFydCwgZW5kKSB7XG4gICAgdmFyIHJlbW92ZWQgPSB0aGlzLmRhdGEuc3BsaWNlKHN0YXJ0LCBlbmQgLSBzdGFydCk7XG4gICAgdGhpcy51cGRhdGUoe1xuICAgICAgb3BlcmF0aW9uOiAncmVtb3ZlJyxcbiAgICAgIG9wZXJhdGlvbkRldGFpbGVkOiAncmVtb3ZlJyxcbiAgICAgIGNvdW50OiByZW1vdmVkLmxlbmd0aCxcbiAgICAgIGluZGV4OiBzdGFydCxcbiAgICAgIGl0ZW1zOiByZW1vdmVkLFxuICAgICAgbmV3U3RhdGU6IHRoaXMuZGF0YVxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMubGVuZ3RoU291cmNlLnZhbHVlICE9PSB0aGlzLmRhdGEubGVuZ3RoKSB7XG4gICAgICB0aGlzLmxlbmd0aFNvdXJjZS51cGRhdGUodGhpcy5kYXRhLmxlbmd0aCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90bzMucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKGl0ZW0pIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLmRhdGEuaW5kZXhPZihpdGVtKTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMucmVtb3ZlQXQoaW5kZXgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8zLmNsZWFyID0gZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgaWYgKHRoaXMuZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgaXRlbXMgPSB0aGlzLmRhdGE7XG4gICAgdGhpcy5kYXRhID0gW107XG4gICAgdGhpcy51cGRhdGUoe1xuICAgICAgb3BlcmF0aW9uOiAncmVtb3ZlJyxcbiAgICAgIG9wZXJhdGlvbkRldGFpbGVkOiAnY2xlYXInLFxuICAgICAgY291bnQ6IGl0ZW1zLmxlbmd0aCxcbiAgICAgIGluZGV4OiAwLFxuICAgICAgaXRlbXM6IGl0ZW1zLFxuICAgICAgbmV3U3RhdGU6IHRoaXMuZGF0YVxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMubGVuZ3RoU291cmNlLnZhbHVlICE9PSB0aGlzLmRhdGEubGVuZ3RoKSB7XG4gICAgICB0aGlzLmxlbmd0aFNvdXJjZS51cGRhdGUodGhpcy5kYXRhLmxlbmd0aCk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90bzMuc2hpZnQgPSBmdW5jdGlvbiBzaGlmdCgpIHtcbiAgICB2YXIgaXRlbSA9IHRoaXMuZGF0YS5zaGlmdCgpO1xuICAgIHRoaXMudXBkYXRlKHtcbiAgICAgIG9wZXJhdGlvbjogJ3JlbW92ZScsXG4gICAgICBvcGVyYXRpb25EZXRhaWxlZDogJ3JlbW92ZUxlZnQnLFxuICAgICAgaXRlbXM6IFtpdGVtXSxcbiAgICAgIGNvdW50OiAxLFxuICAgICAgaW5kZXg6IDAsXG4gICAgICBuZXdTdGF0ZTogdGhpcy5kYXRhXG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5sZW5ndGhTb3VyY2UudmFsdWUgIT09IHRoaXMuZGF0YS5sZW5ndGgpIHtcbiAgICAgIHRoaXMubGVuZ3RoU291cmNlLnVwZGF0ZSh0aGlzLmRhdGEubGVuZ3RoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXRlbTtcbiAgfTtcblxuICBfcHJvdG8zLnRvQXJyYXkgPSBmdW5jdGlvbiB0b0FycmF5KCkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuc2xpY2UoKTtcbiAgfTtcblxuICBfcHJvdG8zLnJldmVyc2UgPSBmdW5jdGlvbiByZXZlcnNlKGNhbmNlbGxhdGlvblRva2VuKSB7XG4gICAgdmFyIHZpZXcgPSBuZXcgUmV2ZXJzZWRBcnJheVZpZXcodGhpcywgY2FuY2VsbGF0aW9uVG9rZW4pO1xuICAgIHJldHVybiB2aWV3O1xuICB9O1xuXG4gIF9wcm90bzMuc29ydCA9IGZ1bmN0aW9uIHNvcnQoY29tcGFyYXRvciwgZGVwZW5kZW5jaWVzLCBjYW5jZWxsYXRpb25Ub2tlbikge1xuICAgIGlmIChkZXBlbmRlbmNpZXMgPT09IHZvaWQgMCkge1xuICAgICAgZGVwZW5kZW5jaWVzID0gW107XG4gICAgfVxuXG4gICAgdmFyIHZpZXcgPSBuZXcgU29ydGVkQXJyYXlWaWV3KHRoaXMsIGNvbXBhcmF0b3IsIGNhbmNlbGxhdGlvblRva2VuKTtcbiAgICBkZXBlbmRlbmNpZXMuZm9yRWFjaChmdW5jdGlvbiAoZGVwKSB7XG4gICAgICBkZXAubGlzdGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHZpZXcucmVmcmVzaCgpO1xuICAgICAgfSk7XG4gICAgfSwgY2FuY2VsbGF0aW9uVG9rZW4pO1xuICAgIHJldHVybiB2aWV3O1xuICB9O1xuXG4gIF9wcm90bzMubWFwID0gZnVuY3Rpb24gbWFwKG1hcHBlciwgZGVwZW5kZW5jaWVzLCBjYW5jZWxsYXRpb25Ub2tlbikge1xuICAgIGlmIChkZXBlbmRlbmNpZXMgPT09IHZvaWQgMCkge1xuICAgICAgZGVwZW5kZW5jaWVzID0gW107XG4gICAgfVxuXG4gICAgdmFyIHZpZXcgPSBuZXcgTWFwcGVkQXJyYXlWaWV3KHRoaXMsIG1hcHBlciwgY2FuY2VsbGF0aW9uVG9rZW4pO1xuICAgIGRlcGVuZGVuY2llcy5mb3JFYWNoKGZ1bmN0aW9uIChkZXApIHtcbiAgICAgIGRlcC5saXN0ZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdmlldy5yZWZyZXNoKCk7XG4gICAgICB9KTtcbiAgICB9LCBjYW5jZWxsYXRpb25Ub2tlbik7XG4gICAgcmV0dXJuIHZpZXc7XG4gIH07XG5cbiAgX3Byb3RvMy5maWx0ZXIgPSBmdW5jdGlvbiBmaWx0ZXIoY2FsbGJhY2ssIGRlcGVuZGVuY2llcywgY2FuY2VsbGF0aW9uVG9rZW4pIHtcbiAgICBpZiAoZGVwZW5kZW5jaWVzID09PSB2b2lkIDApIHtcbiAgICAgIGRlcGVuZGVuY2llcyA9IFtdO1xuICAgIH1cblxuICAgIHZhciB2aWV3ID0gbmV3IEZpbHRlcmVkQXJyYXlWaWV3KHRoaXMsIGNhbGxiYWNrLCBjYW5jZWxsYXRpb25Ub2tlbik7XG4gICAgZGVwZW5kZW5jaWVzLmZvckVhY2goZnVuY3Rpb24gKGRlcCkge1xuICAgICAgZGVwLmxpc3RlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB2aWV3LnJlZnJlc2goKTtcbiAgICAgIH0sIGNhbmNlbGxhdGlvblRva2VuKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdmlldztcbiAgfTtcblxuICBfcHJvdG8zLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4pIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmZvckVhY2goY2FsbGJhY2tmbik7XG4gIH07XG5cbiAgX3Byb3RvMy51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoY2hhbmdlKSB7XG4gICAgdGhpcy51cGRhdGVFdmVudC5maXJlKGNoYW5nZSk7XG4gIH07XG5cbiAgX2NyZWF0ZUNsYXNzKEFycmF5RGF0YVNvdXJjZSwgW3tcbiAgICBrZXk6IFwibGVuZ3RoXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5sZW5ndGhTb3VyY2U7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEFycmF5RGF0YVNvdXJjZTtcbn0oKTtcbnZhciBNYXBwZWRBcnJheVZpZXcgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9BcnJheURhdGFTb3VyY2UpIHtcbiAgX2luaGVyaXRzTG9vc2UoTWFwcGVkQXJyYXlWaWV3LCBfQXJyYXlEYXRhU291cmNlKTtcblxuICBmdW5jdGlvbiBNYXBwZWRBcnJheVZpZXcocGFyZW50LCBtYXBwZXIsIGNhbmNlbGxhdGlvblRva2VuKSB7XG4gICAgdmFyIF90aGlzODtcblxuICAgIGlmIChjYW5jZWxsYXRpb25Ub2tlbiA9PT0gdm9pZCAwKSB7XG4gICAgICBjYW5jZWxsYXRpb25Ub2tlbiA9IG5ldyBDYW5jZWxsYXRpb25Ub2tlbigpO1xuICAgIH1cblxuICAgIHZhciBpbml0aWFsID0gcGFyZW50LmdldERhdGEoKS5tYXAobWFwcGVyKTtcbiAgICBfdGhpczggPSBfQXJyYXlEYXRhU291cmNlLmNhbGwodGhpcywgaW5pdGlhbCkgfHwgdGhpcztcbiAgICBfdGhpczgucGFyZW50ID0gcGFyZW50O1xuICAgIF90aGlzOC5tYXBwZXIgPSBtYXBwZXI7XG4gICAgcGFyZW50Lmxpc3RlbihmdW5jdGlvbiAoY2hhbmdlKSB7XG4gICAgICB2YXIgX3RoaXM5LCBfdGhpczEwO1xuXG4gICAgICBzd2l0Y2ggKGNoYW5nZS5vcGVyYXRpb25EZXRhaWxlZCkge1xuICAgICAgICBjYXNlICdyZW1vdmVMZWZ0JzpcbiAgICAgICAgICBfdGhpczgucmVtb3ZlTGVmdChjaGFuZ2UuY291bnQpO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncmVtb3ZlUmlnaHQnOlxuICAgICAgICAgIF90aGlzOC5yZW1vdmVSaWdodChjaGFuZ2UuY291bnQpO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncmVtb3ZlJzpcbiAgICAgICAgICBfdGhpczgucmVtb3ZlKF90aGlzOC5kYXRhW2NoYW5nZS5pbmRleF0pO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnY2xlYXInOlxuICAgICAgICAgIF90aGlzOC5jbGVhcigpO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncHJlcGVuZCc6XG4gICAgICAgICAgKF90aGlzOSA9IF90aGlzOCkudW5zaGlmdC5hcHBseShfdGhpczksIGNoYW5nZS5pdGVtcy5tYXAoX3RoaXM4Lm1hcHBlcikpO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXBwZW5kJzpcbiAgICAgICAgICBfdGhpczguYXBwZW5kQXJyYXkoY2hhbmdlLml0ZW1zLm1hcChfdGhpczgubWFwcGVyKSk7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdpbnNlcnQnOlxuICAgICAgICAgIChfdGhpczEwID0gX3RoaXM4KS5pbnNlcnRBdC5hcHBseShfdGhpczEwLCBbY2hhbmdlLmluZGV4XS5jb25jYXQoY2hhbmdlLml0ZW1zLm1hcChfdGhpczgubWFwcGVyKSkpO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnc3dhcCc6XG4gICAgICAgICAgX3RoaXM4LnN3YXAoY2hhbmdlLmluZGV4LCBjaGFuZ2UuaW5kZXgyKTtcblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3JlcGxhY2UnOlxuICAgICAgICAgIF90aGlzOC5zZXQoY2hhbmdlLmluZGV4LCBfdGhpczgubWFwcGVyKGNoYW5nZS5pdGVtc1swXSkpO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnbWVyZ2UnOlxuICAgICAgICAgIHZhciBvbGQgPSBfdGhpczguZGF0YS5zbGljZSgpO1xuXG4gICAgICAgICAgdmFyIHNvdXJjZSA9IGNoYW5nZS5wcmV2aW91c1N0YXRlLnNsaWNlKCk7XG5cbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoYW5nZS5uZXdTdGF0ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKF90aGlzOC5kYXRhLmxlbmd0aCA8PSBpKSB7XG4gICAgICAgICAgICAgIF90aGlzOC5kYXRhLnB1c2goX3RoaXM4Lm1hcHBlcihjaGFuZ2UubmV3U3RhdGVbaV0pKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNvdXJjZVtpXSAhPT0gY2hhbmdlLm5ld1N0YXRlW2ldKSB7XG4gICAgICAgICAgICAgIHZhciBpbmRleCA9IHNvdXJjZS5pbmRleE9mKGNoYW5nZS5uZXdTdGF0ZVtpXSk7XG5cbiAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHZhciBhID0gX3RoaXM4LmRhdGFbaV07XG4gICAgICAgICAgICAgICAgdmFyIGIgPSBfdGhpczguZGF0YVtpbmRleF07XG4gICAgICAgICAgICAgICAgX3RoaXM4LmRhdGFbaV0gPSBiO1xuICAgICAgICAgICAgICAgIF90aGlzOC5kYXRhW2luZGV4XSA9IGE7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSBzb3VyY2VbaV07XG4gICAgICAgICAgICAgICAgdmFyIGQgPSBzb3VyY2VbaW5kZXhdO1xuICAgICAgICAgICAgICAgIHNvdXJjZVtpXSA9IGQ7XG4gICAgICAgICAgICAgICAgc291cmNlW2luZGV4XSA9IGM7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXM4LmRhdGEuc3BsaWNlKGksIDAsIF90aGlzOC5tYXBwZXIoY2hhbmdlLm5ld1N0YXRlW2ldKSk7XG5cbiAgICAgICAgICAgICAgICBzb3VyY2Uuc3BsaWNlKGksIDAsIGNoYW5nZS5uZXdTdGF0ZVtpXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoX3RoaXM4LmRhdGEubGVuZ3RoID4gY2hhbmdlLm5ld1N0YXRlLmxlbmd0aCkge1xuICAgICAgICAgICAgX3RoaXM4LmRhdGEubGVuZ3RoID0gY2hhbmdlLm5ld1N0YXRlLmxlbmd0aDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfdGhpczgudXBkYXRlKHtcbiAgICAgICAgICAgIG9wZXJhdGlvbjogJ21lcmdlJyxcbiAgICAgICAgICAgIG9wZXJhdGlvbkRldGFpbGVkOiAnbWVyZ2UnLFxuICAgICAgICAgICAgcHJldmlvdXNTdGF0ZTogb2xkLFxuICAgICAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgICAgICBpdGVtczogX3RoaXM4LmRhdGEsXG4gICAgICAgICAgICBuZXdTdGF0ZTogX3RoaXM4LmRhdGFcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0sIGNhbmNlbGxhdGlvblRva2VuKTtcbiAgICByZXR1cm4gX3RoaXM4O1xuICB9XG5cbiAgdmFyIF9wcm90bzQgPSBNYXBwZWRBcnJheVZpZXcucHJvdG90eXBlO1xuXG4gIF9wcm90bzQucmVmcmVzaCA9IGZ1bmN0aW9uIHJlZnJlc2goKSB7XG4gICAgdGhpcy5tZXJnZSh0aGlzLnBhcmVudC5kYXRhLm1hcCh0aGlzLm1hcHBlcikpO1xuICB9O1xuXG4gIHJldHVybiBNYXBwZWRBcnJheVZpZXc7XG59KEFycmF5RGF0YVNvdXJjZSk7XG52YXIgUmV2ZXJzZWRBcnJheVZpZXcgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9BcnJheURhdGFTb3VyY2UyKSB7XG4gIF9pbmhlcml0c0xvb3NlKFJldmVyc2VkQXJyYXlWaWV3LCBfQXJyYXlEYXRhU291cmNlMik7XG5cbiAgZnVuY3Rpb24gUmV2ZXJzZWRBcnJheVZpZXcocGFyZW50LCBjYW5jZWxsYXRpb25Ub2tlbikge1xuICAgIHZhciBfdGhpczExO1xuXG4gICAgaWYgKGNhbmNlbGxhdGlvblRva2VuID09PSB2b2lkIDApIHtcbiAgICAgIGNhbmNlbGxhdGlvblRva2VuID0gbmV3IENhbmNlbGxhdGlvblRva2VuKCk7XG4gICAgfVxuXG4gICAgdmFyIGluaXRpYWwgPSBwYXJlbnQuZ2V0RGF0YSgpLnNsaWNlKCkucmV2ZXJzZSgpO1xuICAgIF90aGlzMTEgPSBfQXJyYXlEYXRhU291cmNlMi5jYWxsKHRoaXMsIGluaXRpYWwpIHx8IHRoaXM7XG4gICAgX3RoaXMxMS5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgcGFyZW50Lmxpc3RlbihmdW5jdGlvbiAoY2hhbmdlKSB7XG4gICAgICB2YXIgX3RoaXMxMjtcblxuICAgICAgc3dpdGNoIChjaGFuZ2Uub3BlcmF0aW9uRGV0YWlsZWQpIHtcbiAgICAgICAgY2FzZSAncmVtb3ZlTGVmdCc6XG4gICAgICAgICAgX3RoaXMxMS5yZW1vdmVSaWdodChjaGFuZ2UuY291bnQpO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncmVtb3ZlUmlnaHQnOlxuICAgICAgICAgIF90aGlzMTEucmVtb3ZlTGVmdChjaGFuZ2UuY291bnQpO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncmVtb3ZlJzpcbiAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IzID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShjaGFuZ2UuaXRlbXMpLCBfc3RlcDM7ICEoX3N0ZXAzID0gX2l0ZXJhdG9yMygpKS5kb25lOykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBfc3RlcDMudmFsdWU7XG5cbiAgICAgICAgICAgIF90aGlzMTEucmVtb3ZlKGl0ZW0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2NsZWFyJzpcbiAgICAgICAgICBfdGhpczExLmNsZWFyKCk7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdwcmVwZW5kJzpcbiAgICAgICAgICBfdGhpczExLmFwcGVuZEFycmF5KGNoYW5nZS5pdGVtcy5yZXZlcnNlKCkpO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnYXBwZW5kJzpcbiAgICAgICAgICAoX3RoaXMxMiA9IF90aGlzMTEpLnVuc2hpZnQuYXBwbHkoX3RoaXMxMiwgY2hhbmdlLml0ZW1zLnJldmVyc2UoKSk7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdpbnNlcnQnOlxuICAgICAgICAgIF90aGlzMTEubWVyZ2UoY2hhbmdlLm5ld1N0YXRlLnNsaWNlKCkucmV2ZXJzZSgpKTtcblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ21lcmdlJzpcbiAgICAgICAgICBfdGhpczExLm1lcmdlKGNoYW5nZS5pdGVtcy5zbGljZSgpLnJldmVyc2UoKSk7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdzd2FwJzpcbiAgICAgICAgICBfdGhpczExLm1lcmdlKGNoYW5nZS5uZXdTdGF0ZS5zbGljZSgpLnJldmVyc2UoKSk7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdyZXBsYWNlJzpcbiAgICAgICAgICBfdGhpczExLm1lcmdlKGNoYW5nZS5uZXdTdGF0ZS5zbGljZSgpLnJldmVyc2UoKSk7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9LCBjYW5jZWxsYXRpb25Ub2tlbik7XG4gICAgcmV0dXJuIF90aGlzMTE7XG4gIH1cblxuICB2YXIgX3Byb3RvNSA9IFJldmVyc2VkQXJyYXlWaWV3LnByb3RvdHlwZTtcblxuICBfcHJvdG81LnJlZnJlc2ggPSBmdW5jdGlvbiByZWZyZXNoKCkge1xuICAgIHRoaXMubWVyZ2UodGhpcy5wYXJlbnQuZ2V0RGF0YSgpLnNsaWNlKCkucmV2ZXJzZSgpKTtcbiAgfTtcblxuICByZXR1cm4gUmV2ZXJzZWRBcnJheVZpZXc7XG59KEFycmF5RGF0YVNvdXJjZSk7XG52YXIgU29ydGVkQXJyYXlWaWV3ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQXJyYXlEYXRhU291cmNlMykge1xuICBfaW5oZXJpdHNMb29zZShTb3J0ZWRBcnJheVZpZXcsIF9BcnJheURhdGFTb3VyY2UzKTtcblxuICBmdW5jdGlvbiBTb3J0ZWRBcnJheVZpZXcocGFyZW50LCBjb21wYXJhdG9yLCBjYW5jZWxsYXRpb25Ub2tlbikge1xuICAgIHZhciBfdGhpczEzO1xuXG4gICAgaWYgKGNhbmNlbGxhdGlvblRva2VuID09PSB2b2lkIDApIHtcbiAgICAgIGNhbmNlbGxhdGlvblRva2VuID0gbmV3IENhbmNlbGxhdGlvblRva2VuKCk7XG4gICAgfVxuXG4gICAgdmFyIGluaXRpYWwgPSBwYXJlbnQuZ2V0RGF0YSgpLnNsaWNlKCkuc29ydChjb21wYXJhdG9yKTtcbiAgICBfdGhpczEzID0gX0FycmF5RGF0YVNvdXJjZTMuY2FsbCh0aGlzLCBpbml0aWFsKSB8fCB0aGlzO1xuICAgIF90aGlzMTMucGFyZW50ID0gcGFyZW50O1xuICAgIF90aGlzMTMuY29tcGFyYXRvciA9IGNvbXBhcmF0b3I7XG4gICAgcGFyZW50Lmxpc3RlbihmdW5jdGlvbiAoY2hhbmdlKSB7XG4gICAgICB2YXIgX3RoaXMxNDtcblxuICAgICAgc3dpdGNoIChjaGFuZ2Uub3BlcmF0aW9uRGV0YWlsZWQpIHtcbiAgICAgICAgY2FzZSAncmVtb3ZlTGVmdCc6XG4gICAgICAgIGNhc2UgJ3JlbW92ZVJpZ2h0JzpcbiAgICAgICAgY2FzZSAncmVtb3ZlJzpcbiAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3I0ID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShjaGFuZ2UuaXRlbXMpLCBfc3RlcDQ7ICEoX3N0ZXA0ID0gX2l0ZXJhdG9yNCgpKS5kb25lOykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBfc3RlcDQudmFsdWU7XG5cbiAgICAgICAgICAgIF90aGlzMTMucmVtb3ZlKGl0ZW0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ2NsZWFyJzpcbiAgICAgICAgICBfdGhpczEzLmNsZWFyKCk7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdwcmVwZW5kJzpcbiAgICAgICAgICAoX3RoaXMxNCA9IF90aGlzMTMpLnVuc2hpZnQuYXBwbHkoX3RoaXMxNCwgY2hhbmdlLml0ZW1zKTtcblxuICAgICAgICAgIF90aGlzMTMuZGF0YS5zb3J0KF90aGlzMTMuY29tcGFyYXRvcik7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdhcHBlbmQnOlxuICAgICAgICAgIF90aGlzMTMuYXBwZW5kU29ydGVkKGNoYW5nZS5pdGVtcyk7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdpbnNlcnQnOlxuICAgICAgICAgIF90aGlzMTMuYXBwZW5kU29ydGVkKGNoYW5nZS5pdGVtcyk7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdtZXJnZSc6XG4gICAgICAgICAgX3RoaXMxMy5tZXJnZShjaGFuZ2UuaXRlbXMuc2xpY2UoKS5zb3J0KF90aGlzMTMuY29tcGFyYXRvcikpO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnc3dhcCc6XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncmVwbGFjZSc6XG4gICAgICAgICAgX3RoaXMxMy5yZW1vdmUoY2hhbmdlLnRhcmdldCk7XG5cbiAgICAgICAgICBfdGhpczEzLmFwcGVuZFNvcnRlZChjaGFuZ2UuaXRlbXMpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSwgY2FuY2VsbGF0aW9uVG9rZW4pO1xuICAgIHJldHVybiBfdGhpczEzO1xuICB9XG5cbiAgdmFyIF9wcm90bzYgPSBTb3J0ZWRBcnJheVZpZXcucHJvdG90eXBlO1xuXG4gIF9wcm90bzYuYXBwZW5kU29ydGVkID0gZnVuY3Rpb24gYXBwZW5kU29ydGVkKGl0ZW1zKSB7XG4gICAgdGhpcy5tZXJnZSh0aGlzLmRhdGEuY29uY2F0KGl0ZW1zKS5zb3J0KHRoaXMuY29tcGFyYXRvcikpO1xuICB9O1xuXG4gIF9wcm90bzYucmVmcmVzaCA9IGZ1bmN0aW9uIHJlZnJlc2goKSB7XG4gICAgdGhpcy5tZXJnZSh0aGlzLnBhcmVudC5nZXREYXRhKCkuc2xpY2UoKS5zb3J0KHRoaXMuY29tcGFyYXRvcikpO1xuICB9O1xuXG4gIHJldHVybiBTb3J0ZWRBcnJheVZpZXc7XG59KEFycmF5RGF0YVNvdXJjZSk7XG52YXIgRmlsdGVyZWRBcnJheVZpZXcgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9BcnJheURhdGFTb3VyY2U0KSB7XG4gIF9pbmhlcml0c0xvb3NlKEZpbHRlcmVkQXJyYXlWaWV3LCBfQXJyYXlEYXRhU291cmNlNCk7XG5cbiAgZnVuY3Rpb24gRmlsdGVyZWRBcnJheVZpZXcocGFyZW50LCBmaWx0ZXIsIGNhbmNlbGxhdGlvblRva2VuKSB7XG4gICAgdmFyIF90aGlzMTU7XG5cbiAgICBpZiAoY2FuY2VsbGF0aW9uVG9rZW4gPT09IHZvaWQgMCkge1xuICAgICAgY2FuY2VsbGF0aW9uVG9rZW4gPSBuZXcgQ2FuY2VsbGF0aW9uVG9rZW4oKTtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJlbnQpKSB7XG4gICAgICBwYXJlbnQgPSBuZXcgQXJyYXlEYXRhU291cmNlKHBhcmVudCk7XG4gICAgfVxuXG4gICAgZmlsdGVyID0gZmlsdGVyICE9PSBudWxsICYmIGZpbHRlciAhPT0gdm9pZCAwID8gZmlsdGVyIDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICB2YXIgaW5pdGlhbCA9IHBhcmVudC5kYXRhLmZpbHRlcihmaWx0ZXIpO1xuICAgIF90aGlzMTUgPSBfQXJyYXlEYXRhU291cmNlNC5jYWxsKHRoaXMsIGluaXRpYWwpIHx8IHRoaXM7XG4gICAgX3RoaXMxNS5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgX3RoaXMxNS52aWV3RmlsdGVyID0gZmlsdGVyO1xuICAgIHBhcmVudC5saXN0ZW4oZnVuY3Rpb24gKGNoYW5nZSkge1xuICAgICAgdmFyIF90aGlzMTYsIF90aGlzMTc7XG5cbiAgICAgIHZhciBmaWx0ZXJlZEl0ZW1zO1xuXG4gICAgICBzd2l0Y2ggKGNoYW5nZS5vcGVyYXRpb25EZXRhaWxlZCkge1xuICAgICAgICBjYXNlICdjbGVhcic6XG4gICAgICAgICAgX3RoaXMxNS5jbGVhcigpO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAncmVtb3ZlTGVmdCc6XG4gICAgICAgIGNhc2UgJ3JlbW92ZVJpZ2h0JzpcbiAgICAgICAgY2FzZSAncmVtb3ZlJzpcbiAgICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3I1ID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShjaGFuZ2UuaXRlbXMpLCBfc3RlcDU7ICEoX3N0ZXA1ID0gX2l0ZXJhdG9yNSgpKS5kb25lOykge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBfc3RlcDUudmFsdWU7XG5cbiAgICAgICAgICAgIF90aGlzMTUucmVtb3ZlKGl0ZW0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3ByZXBlbmQnOlxuICAgICAgICAgIGZpbHRlcmVkSXRlbXMgPSBjaGFuZ2UuaXRlbXMuZmlsdGVyKF90aGlzMTUudmlld0ZpbHRlcik7XG5cbiAgICAgICAgICAoX3RoaXMxNiA9IF90aGlzMTUpLnVuc2hpZnQuYXBwbHkoX3RoaXMxNiwgZmlsdGVyZWRJdGVtcyk7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdhcHBlbmQnOlxuICAgICAgICAgIGZpbHRlcmVkSXRlbXMgPSBjaGFuZ2UuaXRlbXMuZmlsdGVyKF90aGlzMTUudmlld0ZpbHRlcik7XG5cbiAgICAgICAgICBfdGhpczE1LmFwcGVuZEFycmF5KGZpbHRlcmVkSXRlbXMpO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnaW5zZXJ0JzpcbiAgICAgICAgICBmaWx0ZXJlZEl0ZW1zID0gY2hhbmdlLml0ZW1zLmZpbHRlcihfdGhpczE1LnZpZXdGaWx0ZXIpO1xuXG4gICAgICAgICAgKF90aGlzMTcgPSBfdGhpczE1KS5pbnNlcnRBdC5hcHBseShfdGhpczE3LCBbY2hhbmdlLmluZGV4XS5jb25jYXQoZmlsdGVyZWRJdGVtcykpO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnbWVyZ2UnOlxuICAgICAgICAgIF90aGlzMTUubWVyZ2UoY2hhbmdlLml0ZW1zLmZpbHRlcihfdGhpczE1LnZpZXdGaWx0ZXIpKTtcblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3N3YXAnOlxuICAgICAgICAgIHZhciBpbmRleEEgPSBfdGhpczE1LmRhdGEuaW5kZXhPZihjaGFuZ2UuaXRlbXNbMF0pO1xuXG4gICAgICAgICAgdmFyIGluZGV4QiA9IF90aGlzMTUuZGF0YS5pbmRleE9mKGNoYW5nZS5pdGVtc1sxXSk7XG5cbiAgICAgICAgICBpZiAoaW5kZXhBICE9PSAtMSAmJiBpbmRleEIgIT09IC0xKSB7XG4gICAgICAgICAgICBfdGhpczE1LnN3YXAoaW5kZXhBLCBpbmRleEIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3JlcGxhY2UnOlxuICAgICAgICAgIHZhciBpbmRleCA9IF90aGlzMTUuZGF0YS5pbmRleE9mKGNoYW5nZS50YXJnZXQpO1xuXG4gICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdmFyIGFjY2VwdE5ldyA9IF90aGlzMTUudmlld0ZpbHRlcihjaGFuZ2UuaXRlbXNbMF0pO1xuXG4gICAgICAgICAgICBpZiAoYWNjZXB0TmV3KSB7XG4gICAgICAgICAgICAgIF90aGlzMTUuc2V0KGluZGV4LCBjaGFuZ2UuaXRlbXNbMF0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgX3RoaXMxNS5yZW1vdmUoY2hhbmdlLnRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSwgY2FuY2VsbGF0aW9uVG9rZW4pO1xuICAgIHJldHVybiBfdGhpczE1O1xuICB9XG5cbiAgdmFyIF9wcm90bzcgPSBGaWx0ZXJlZEFycmF5Vmlldy5wcm90b3R5cGU7XG5cbiAgX3Byb3RvNy51cGRhdGVGaWx0ZXIgPSBmdW5jdGlvbiB1cGRhdGVGaWx0ZXIoZmlsdGVyKSB7XG4gICAgaWYgKHRoaXMudmlld0ZpbHRlciA9PT0gZmlsdGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy52aWV3RmlsdGVyID0gZmlsdGVyO1xuICAgIHRoaXMucmVmcmVzaCgpO1xuICAgIHJldHVybiB0aGlzLmRhdGEubGVuZ3RoO1xuICB9O1xuXG4gIF9wcm90bzcucmVmcmVzaCA9IGZ1bmN0aW9uIHJlZnJlc2goKSB7XG4gICAgdGhpcy5tZXJnZSh0aGlzLnBhcmVudC5kYXRhLmZpbHRlcih0aGlzLnZpZXdGaWx0ZXIpKTtcbiAgfTtcblxuICByZXR1cm4gRmlsdGVyZWRBcnJheVZpZXc7XG59KEFycmF5RGF0YVNvdXJjZSk7XG5mdW5jdGlvbiBwcm9jZXNzVHJhbnNmb3JtKG9wZXJhdGlvbnMsIHJlc3VsdCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHYpIHtcbiAgICB0cnkge1xuICAgICAgdmFyIF90ZW1wNSA9IGZ1bmN0aW9uIF90ZW1wNShfcmVzdWx0Mykge1xuICAgICAgICBpZiAoX2V4aXQzKSByZXR1cm4gX3Jlc3VsdDM7XG4gICAgICAgIHJlc3VsdC51cGRhdGUodik7XG4gICAgICB9O1xuXG4gICAgICB2YXIgX2V4aXQzO1xuXG4gICAgICB2YXIgX3RlbXA2ID0gX2Zvck9mKG9wZXJhdGlvbnMsIGZ1bmN0aW9uIChvcGVyYXRpb24pIHtcbiAgICAgICAgdmFyIF9pbnRlcnJ1cHQ7XG5cbiAgICAgICAgcmV0dXJuIF9zd2l0Y2gob3BlcmF0aW9uLm9wZXJhdGlvblR5cGUsIFtbZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBleHBvcnRzLk9wZXJhdGlvblR5cGUuTk9PUDtcbiAgICAgICAgfV0sIFtmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGV4cG9ydHMuT3BlcmF0aW9uVHlwZS5NQVA7XG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2ID0gb3BlcmF0aW9uLm9wZXJhdGlvbih2KTtcbiAgICAgICAgICBfaW50ZXJydXB0ID0gMTtcbiAgICAgICAgfV0sIFtmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGV4cG9ydHMuT3BlcmF0aW9uVHlwZS5NQVBfREVMQVlfRklMVEVSO1xuICAgICAgICB9XSwgW2Z1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZXhwb3J0cy5PcGVyYXRpb25UeXBlLkRFTEFZX0ZJTFRFUjtcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUob3BlcmF0aW9uLm9wZXJhdGlvbih2KSkudGhlbihmdW5jdGlvbiAodG1wKSB7XG4gICAgICAgICAgICB2YXIgX2V4aXQyO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBfdGVtcDIoX3Jlc3VsdDIpIHtcbiAgICAgICAgICAgICAgaWYgKF9leGl0MikgcmV0dXJuIF9yZXN1bHQyO1xuICAgICAgICAgICAgICBfaW50ZXJydXB0ID0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIF90ZW1wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICBpZiAodG1wLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIF9leGl0MyA9IDE7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0bXAuaXRlbSkudGhlbihmdW5jdGlvbiAoX3RtcCRpdGVtKSB7XG4gICAgICAgICAgICAgICAgICB2ID0gX3RtcCRpdGVtO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KCk7XG5cbiAgICAgICAgICAgIHJldHVybiBfdGVtcCAmJiBfdGVtcC50aGVuID8gX3RlbXAudGhlbihfdGVtcDIpIDogX3RlbXAyKF90ZW1wKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfV0sIFtmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGV4cG9ydHMuT3BlcmF0aW9uVHlwZS5ERUxBWTtcbiAgICAgICAgfV0sIFtmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGV4cG9ydHMuT3BlcmF0aW9uVHlwZS5NQVBfREVMQVk7XG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG9wZXJhdGlvbi5vcGVyYXRpb24odikpLnRoZW4oZnVuY3Rpb24gKF9vcGVyYXRpb24kb3BlcmF0aW9uKSB7XG4gICAgICAgICAgICB2ID0gX29wZXJhdGlvbiRvcGVyYXRpb247XG4gICAgICAgICAgICBfaW50ZXJydXB0ID0gMTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfV0sIFtmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGV4cG9ydHMuT3BlcmF0aW9uVHlwZS5GSUxURVI7XG4gICAgICAgIH0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoIW9wZXJhdGlvbi5vcGVyYXRpb24odikpIHtcbiAgICAgICAgICAgIF9leGl0MyA9IDE7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX2ludGVycnVwdCA9IDE7XG4gICAgICAgIH1dXSk7XG4gICAgICB9LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfZXhpdDM7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShfdGVtcDYgJiYgX3RlbXA2LnRoZW4gPyBfdGVtcDYudGhlbihfdGVtcDUpIDogX3RlbXA1KF90ZW1wNikpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICB9XG4gIH07XG59XG5cbihmdW5jdGlvbiAoRGF0YUZsb3cpIHtcbiAgRGF0YUZsb3dbRGF0YUZsb3dbXCJVUFNUUkVBTVwiXSA9IDBdID0gXCJVUFNUUkVBTVwiO1xuICBEYXRhRmxvd1tEYXRhRmxvd1tcIkRPV05TVFJFQU1cIl0gPSAxXSA9IFwiRE9XTlNUUkVBTVwiO1xufSkoZXhwb3J0cy5EYXRhRmxvdyB8fCAoZXhwb3J0cy5EYXRhRmxvdyA9IHt9KSk7XG5cbnZhciBEdXBsZXhEYXRhU291cmNlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRHVwbGV4RGF0YVNvdXJjZShpbml0aWFsVmFsdWUsIHByb3BhZ2F0ZVdyaXRlc1RvUmVhZFN0cmVhbSwgbmFtZSkge1xuICAgIGlmIChwcm9wYWdhdGVXcml0ZXNUb1JlYWRTdHJlYW0gPT09IHZvaWQgMCkge1xuICAgICAgcHJvcGFnYXRlV3JpdGVzVG9SZWFkU3RyZWFtID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAobmFtZSA9PT0gdm9pZCAwKSB7XG4gICAgICBuYW1lID0gJ1Jvb3REdXBsZXhEYXRhU291cmNlJztcbiAgICB9XG5cbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMudmFsdWUgPSBpbml0aWFsVmFsdWU7XG4gICAgdGhpcy5wcmltZWQgPSBpbml0aWFsVmFsdWUgIT09IHVuZGVmaW5lZDtcbiAgICB0aGlzLnVwZGF0ZURvd25zdHJlYW1FdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICB0aGlzLnVwZGF0ZVVwc3RyZWFtRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgdGhpcy5wcm9wYWdhdGVXcml0ZXNUb1JlYWRTdHJlYW0gPSBwcm9wYWdhdGVXcml0ZXNUb1JlYWRTdHJlYW07XG4gIH1cblxuICBEdXBsZXhEYXRhU291cmNlLmZyb21Ud29EYXRhU291cmNlID0gZnVuY3Rpb24gZnJvbVR3b0RhdGFTb3VyY2UoZG93blN0cmVhbSwgdXBzdHJlYW0sIGluaXRpYWxWYWx1ZSwgcHJvcGFnYXRlV3JpdGVzVG9SZWFkU3RyZWFtKSB7XG4gICAgaWYgKHByb3BhZ2F0ZVdyaXRlc1RvUmVhZFN0cmVhbSA9PT0gdm9pZCAwKSB7XG4gICAgICBwcm9wYWdhdGVXcml0ZXNUb1JlYWRTdHJlYW0gPSB0cnVlO1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSBuZXcgRHVwbGV4RGF0YVNvdXJjZShpbml0aWFsVmFsdWUsIHByb3BhZ2F0ZVdyaXRlc1RvUmVhZFN0cmVhbSk7XG4gICAgcmVzdWx0LnVwZGF0ZURvd25zdHJlYW1FdmVudCA9IGRvd25TdHJlYW0udXBkYXRlRXZlbnQ7XG4gICAgcmVzdWx0LnVwZGF0ZVVwc3RyZWFtRXZlbnQgPSB1cHN0cmVhbS51cGRhdGVFdmVudDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHZhciBfcHJvdG8gPSBEdXBsZXhEYXRhU291cmNlLnByb3RvdHlwZTtcblxuICBfcHJvdG8ud2l0aEluaXRpYWwgPSBmdW5jdGlvbiB3aXRoSW5pdGlhbCh2YWx1ZSkge1xuICAgIGlmICghdGhpcy5wcmltZWQpIHtcbiAgICAgIHRoaXMudXBkYXRlRG93bnN0cmVhbSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgRHVwbGV4RGF0YVNvdXJjZS5jcmVhdGVPbmVXYXkgPSBmdW5jdGlvbiBjcmVhdGVPbmVXYXkoZGlyZWN0aW9uLCBpbml0aWFsVmFsdWUpIHtcbiAgICBpZiAoZGlyZWN0aW9uID09PSB2b2lkIDApIHtcbiAgICAgIGRpcmVjdGlvbiA9IGV4cG9ydHMuRGF0YUZsb3cuRE9XTlNUUkVBTTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IER1cGxleERhdGFTb3VyY2UoaW5pdGlhbFZhbHVlLCBmYWxzZSkub25lV2F5RmxvdyhkaXJlY3Rpb24pO1xuICB9O1xuXG4gIF9wcm90by51cGRhdGVEb3duc3RyZWFtID0gZnVuY3Rpb24gdXBkYXRlRG93bnN0cmVhbShuZXdWYWx1ZSkge1xuICAgIGlmICh0aGlzLnVwZGF0aW5nRG93bnN0cmVhbSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdQcm9ibGVtIGluIGRhdGFzIHNvdXJjZTogVW5zdGFibGUgdmFsdWUgcHJvcGFnYXRpb24sIHdoZW4gdXBkYXRpbmcgYSB2YWx1ZSB0aGUgc3RyZWFtIHdhcyB1cGRhdGVkIGJhY2sgYXMgYSBkaXJlY3QgcmVzcG9uc2UuIFRoaXMgY2FuIGxlYWQgdG8gaW5maW5pdGUgbG9vcHMgYW5kIGlzIHRoZXJlZm9yZSBub3QgYWxsb3dlZCcpO1xuICAgIH1cblxuICAgIHRoaXMucHJpbWVkID0gdHJ1ZTtcbiAgICB0aGlzLnVwZGF0aW5nRG93bnN0cmVhbSA9IHRydWU7XG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgIHRoaXMudXBkYXRlRG93bnN0cmVhbUV2ZW50LmZpcmUobmV3VmFsdWUpO1xuICAgIHRoaXMudXBkYXRpbmdEb3duc3RyZWFtID0gZmFsc2U7XG4gIH07XG5cbiAgX3Byb3RvLnVwZGF0ZVVwc3RyZWFtID0gZnVuY3Rpb24gdXBkYXRlVXBzdHJlYW0obmV3VmFsdWUpIHtcbiAgICBpZiAodGhpcy51cGRhdGluZ1Vwc3RyZWFtKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Byb2JsZW0gaW4gZGF0YXMgc291cmNlOiBVbnN0YWJsZSB2YWx1ZSBwcm9wYWdhdGlvbiwgd2hlbiB1cGRhdGluZyBhIHZhbHVlIHRoZSBzdHJlYW0gd2FzIHVwZGF0ZWQgYmFjayBhcyBhIGRpcmVjdCByZXNwb25zZS4gVGhpcyBjYW4gbGVhZCB0byBpbmZpbml0ZSBsb29wcyBhbmQgaXMgdGhlcmVmb3JlIG5vdCBhbGxvd2VkJyk7XG4gICAgfVxuXG4gICAgdGhpcy5wcmltZWQgPSB0cnVlO1xuICAgIHRoaXMudXBkYXRpbmdVcHN0cmVhbSA9IHRydWU7XG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgIHRoaXMudXBkYXRlVXBzdHJlYW1FdmVudC5maXJlKG5ld1ZhbHVlKTtcblxuICAgIGlmICh0aGlzLnByb3BhZ2F0ZVdyaXRlc1RvUmVhZFN0cmVhbSkge1xuICAgICAgdGhpcy51cGRhdGVEb3duc3RyZWFtRXZlbnQuZmlyZShuZXdWYWx1ZSk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGluZ1Vwc3RyZWFtID0gZmFsc2U7XG4gIH07XG5cbiAgX3Byb3RvLmxpc3RlbkFuZFJlcGVhdCA9IGZ1bmN0aW9uIGxpc3RlbkFuZFJlcGVhdChjYWxsYmFjaywgY2FuY2VsbGF0aW9uVG9rZW4pIHtcbiAgICBjYWxsYmFjayh0aGlzLnZhbHVlKTtcbiAgICByZXR1cm4gdGhpcy5saXN0ZW4oY2FsbGJhY2ssIGNhbmNlbGxhdGlvblRva2VuKTtcbiAgfTtcblxuICBfcHJvdG8ubGlzdGVuID0gZnVuY3Rpb24gbGlzdGVuKGNhbGxiYWNrLCBjYW5jZWxsYXRpb25Ub2tlbikge1xuICAgIHJldHVybiB0aGlzLnVwZGF0ZURvd25zdHJlYW1FdmVudC5zdWJzY3JpYmUoY2FsbGJhY2ssIGNhbmNlbGxhdGlvblRva2VuKS5jYW5jZWw7XG4gIH07XG5cbiAgX3Byb3RvLmxpc3RlblVwc3RyZWFtID0gZnVuY3Rpb24gbGlzdGVuVXBzdHJlYW0oY2FsbGJhY2ssIGNhbmNlbGxhdGlvblRva2VuKSB7XG4gICAgcmV0dXJuIHRoaXMudXBkYXRlVXBzdHJlYW1FdmVudC5zdWJzY3JpYmUoY2FsbGJhY2ssIGNhbmNlbGxhdGlvblRva2VuKS5jYW5jZWw7XG4gIH07XG5cbiAgX3Byb3RvLmxpc3RlblVwc3RyZWFtT25jZSA9IGZ1bmN0aW9uIGxpc3RlblVwc3RyZWFtT25jZShjYWxsYmFjaywgY2FuY2VsbGF0aW9uVG9rZW4pIHtcbiAgICByZXR1cm4gdGhpcy51cGRhdGVVcHN0cmVhbUV2ZW50LnN1YnNjcmliZU9uY2UoY2FsbGJhY2ssIGNhbmNlbGxhdGlvblRva2VuKS5jYW5jZWw7XG4gIH07XG5cbiAgX3Byb3RvLmxpc3RlbkRvd25zdHJlYW0gPSBmdW5jdGlvbiBsaXN0ZW5Eb3duc3RyZWFtKGNhbGxiYWNrLCBjYW5jZWxsYXRpb25Ub2tlbikge1xuICAgIHJldHVybiB0aGlzLnVwZGF0ZURvd25zdHJlYW1FdmVudC5zdWJzY3JpYmUoY2FsbGJhY2ssIGNhbmNlbGxhdGlvblRva2VuKS5jYW5jZWw7XG4gIH07XG5cbiAgX3Byb3RvLmRvd25TdHJlYW1Ub0RhdGFTb3VyY2UgPSBmdW5jdGlvbiBkb3duU3RyZWFtVG9EYXRhU291cmNlKGNhbmNlbGxhdGlvblRva2VuKSB7XG4gICAgdmFyIGRvd25TdHJlYW1EYXRhc291cmNlID0gbmV3IERhdGFTb3VyY2UodGhpcy52YWx1ZSk7XG4gICAgdGhpcy5saXN0ZW5Eb3duc3RyZWFtKGZ1bmN0aW9uIChuZXdWYWwpIHtcbiAgICAgIGRvd25TdHJlYW1EYXRhc291cmNlLnVwZGF0ZShuZXdWYWwpO1xuICAgIH0sIGNhbmNlbGxhdGlvblRva2VuKTtcbiAgICByZXR1cm4gZG93blN0cmVhbURhdGFzb3VyY2U7XG4gIH07XG5cbiAgX3Byb3RvLmFnZ3JlZ2F0ZSA9IGZ1bmN0aW9uIGFnZ3JlZ2F0ZShvdGhlclNvdXJjZSwgY29tYmluYXRvciwgY2FuY2VsbGF0aW9uVG9rZW4pIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgY2FuY2VsbGF0aW9uVG9rZW4gPSBjYW5jZWxsYXRpb25Ub2tlbiAhPT0gbnVsbCAmJiBjYW5jZWxsYXRpb25Ub2tlbiAhPT0gdm9pZCAwID8gY2FuY2VsbGF0aW9uVG9rZW4gOiBuZXcgQ2FuY2VsbGF0aW9uVG9rZW4oKTtcbiAgICB2YXIgYWdncmVnYXRlZFNvdXJjZSA9IG5ldyBUcmFuc2llbnREYXRhU291cmNlKGNhbmNlbGxhdGlvblRva2VuLCBjb21iaW5hdG9yKHRoaXMudmFsdWUsIG90aGVyU291cmNlLnZhbHVlKSk7XG4gICAgdGhpcy5saXN0ZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFnZ3JlZ2F0ZWRTb3VyY2UudXBkYXRlKGNvbWJpbmF0b3IoX3RoaXMudmFsdWUsIG90aGVyU291cmNlLnZhbHVlKSk7XG4gICAgfSwgY2FuY2VsbGF0aW9uVG9rZW4pO1xuICAgIG90aGVyU291cmNlLmxpc3RlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYWdncmVnYXRlZFNvdXJjZS51cGRhdGUoY29tYmluYXRvcihfdGhpcy52YWx1ZSwgb3RoZXJTb3VyY2UudmFsdWUpKTtcbiAgICB9LCBjYW5jZWxsYXRpb25Ub2tlbik7XG4gICAgcmV0dXJuIGFnZ3JlZ2F0ZWRTb3VyY2U7XG4gIH07XG5cbiAgX3Byb3RvLmFnZ3JlZ2F0ZVRocmVlID0gZnVuY3Rpb24gYWdncmVnYXRlVGhyZWUoc2Vjb25kLCB0aGlyZCwgY29tYmluYXRvciwgY2FuY2VsbGF0aW9uVG9rZW4pIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIGNhbmNlbGxhdGlvblRva2VuID0gY2FuY2VsbGF0aW9uVG9rZW4gIT09IG51bGwgJiYgY2FuY2VsbGF0aW9uVG9rZW4gIT09IHZvaWQgMCA/IGNhbmNlbGxhdGlvblRva2VuIDogbmV3IENhbmNlbGxhdGlvblRva2VuKCk7XG4gICAgdmFyIGFnZ3JlZ2F0ZWRTb3VyY2UgPSBuZXcgVHJhbnNpZW50RGF0YVNvdXJjZShjYW5jZWxsYXRpb25Ub2tlbiwgY29tYmluYXRvcih0aGlzLnZhbHVlLCBzZWNvbmQudmFsdWUsIHRoaXJkLnZhbHVlKSk7XG4gICAgdGhpcy5saXN0ZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFnZ3JlZ2F0ZWRTb3VyY2UudXBkYXRlKGNvbWJpbmF0b3IoX3RoaXMyLnZhbHVlLCBzZWNvbmQudmFsdWUsIHRoaXJkLnZhbHVlKSk7XG4gICAgfSwgY2FuY2VsbGF0aW9uVG9rZW4pO1xuICAgIHNlY29uZC5saXN0ZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGFnZ3JlZ2F0ZWRTb3VyY2UudXBkYXRlKGNvbWJpbmF0b3IoX3RoaXMyLnZhbHVlLCBzZWNvbmQudmFsdWUsIHRoaXJkLnZhbHVlKSk7XG4gICAgfSwgY2FuY2VsbGF0aW9uVG9rZW4pO1xuICAgIHRoaXJkLmxpc3RlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYWdncmVnYXRlZFNvdXJjZS51cGRhdGUoY29tYmluYXRvcihfdGhpczIudmFsdWUsIHNlY29uZC52YWx1ZSwgdGhpcmQudmFsdWUpKTtcbiAgICB9LCBjYW5jZWxsYXRpb25Ub2tlbik7XG4gICAgcmV0dXJuIGFnZ3JlZ2F0ZWRTb3VyY2U7XG4gIH07XG5cbiAgX3Byb3RvLmFnZ3JlZ2F0ZUZvdXIgPSBmdW5jdGlvbiBhZ2dyZWdhdGVGb3VyKHNlY29uZCwgdGhpcmQsIGZvdXJ0aCwgY29tYmluYXRvciwgY2FuY2VsbGF0aW9uVG9rZW4pIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIGNhbmNlbGxhdGlvblRva2VuID0gY2FuY2VsbGF0aW9uVG9rZW4gIT09IG51bGwgJiYgY2FuY2VsbGF0aW9uVG9rZW4gIT09IHZvaWQgMCA/IGNhbmNlbGxhdGlvblRva2VuIDogbmV3IENhbmNlbGxhdGlvblRva2VuKCk7XG4gICAgdmFyIGFnZ3JlZ2F0ZWRTb3VyY2UgPSBuZXcgVHJhbnNpZW50RGF0YVNvdXJjZShjYW5jZWxsYXRpb25Ub2tlbiwgY29tYmluYXRvcih0aGlzLnZhbHVlLCBzZWNvbmQudmFsdWUsIHRoaXJkLnZhbHVlLCBmb3VydGgudmFsdWUpKTtcbiAgICB0aGlzLmxpc3RlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYWdncmVnYXRlZFNvdXJjZS51cGRhdGUoY29tYmluYXRvcihfdGhpczMudmFsdWUsIHNlY29uZC52YWx1ZSwgdGhpcmQudmFsdWUsIGZvdXJ0aC52YWx1ZSkpO1xuICAgIH0sIGNhbmNlbGxhdGlvblRva2VuKTtcbiAgICBzZWNvbmQubGlzdGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhZ2dyZWdhdGVkU291cmNlLnVwZGF0ZShjb21iaW5hdG9yKF90aGlzMy52YWx1ZSwgc2Vjb25kLnZhbHVlLCB0aGlyZC52YWx1ZSwgZm91cnRoLnZhbHVlKSk7XG4gICAgfSwgY2FuY2VsbGF0aW9uVG9rZW4pO1xuICAgIHRoaXJkLmxpc3RlbihmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gYWdncmVnYXRlZFNvdXJjZS51cGRhdGUoY29tYmluYXRvcihfdGhpczMudmFsdWUsIHNlY29uZC52YWx1ZSwgdGhpcmQudmFsdWUsIGZvdXJ0aC52YWx1ZSkpO1xuICAgIH0sIGNhbmNlbGxhdGlvblRva2VuKTtcbiAgICBmb3VydGgubGlzdGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhZ2dyZWdhdGVkU291cmNlLnVwZGF0ZShjb21iaW5hdG9yKF90aGlzMy52YWx1ZSwgc2Vjb25kLnZhbHVlLCB0aGlyZC52YWx1ZSwgZm91cnRoLnZhbHVlKSk7XG4gICAgfSwgY2FuY2VsbGF0aW9uVG9rZW4pO1xuICAgIHJldHVybiBhZ2dyZWdhdGVkU291cmNlO1xuICB9O1xuXG4gIF9wcm90by5maWx0ZXIgPSBmdW5jdGlvbiBmaWx0ZXIoZG93blN0cmVhbUZpbHRlciwgdXBzdHJlYW1GaWx0ZXIsIGNhbmNlbGxhdGlvblRva2VuKSB7XG4gICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICBpZiAodHlwZW9mIHVwc3RyZWFtRmlsdGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgZmlsdGVyZWRTb3VyY2UgPSBuZXcgRHVwbGV4RGF0YVNvdXJjZSh1bmRlZmluZWQsIGZhbHNlKTtcbiAgICAgIHRoaXMubGlzdGVuRG93bnN0cmVhbShmdW5jdGlvbiAobmV3VmFsKSB7XG4gICAgICAgIGlmIChkb3duU3RyZWFtRmlsdGVyKG5ld1ZhbCwgZmlsdGVyZWRTb3VyY2UudmFsdWUpKSB7XG4gICAgICAgICAgZmlsdGVyZWRTb3VyY2UudXBkYXRlRG93bnN0cmVhbShuZXdWYWwpO1xuICAgICAgICB9XG4gICAgICB9LCBjYW5jZWxsYXRpb25Ub2tlbik7XG4gICAgICBmaWx0ZXJlZFNvdXJjZS5saXN0ZW5VcHN0cmVhbShmdW5jdGlvbiAobmV3VmFsKSB7XG4gICAgICAgIGlmICh1cHN0cmVhbUZpbHRlcihuZXdWYWwsIF90aGlzNC52YWx1ZSkpIHtcbiAgICAgICAgICBfdGhpczQudXBkYXRlVXBzdHJlYW0obmV3VmFsKTtcbiAgICAgICAgfVxuICAgICAgfSwgY2FuY2VsbGF0aW9uVG9rZW4pO1xuICAgICAgcmV0dXJuIGZpbHRlcmVkU291cmNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2ZpbHRlcmVkU291cmNlID0gbmV3IERhdGFTb3VyY2UoKTtcblxuICAgICAgdGhpcy5saXN0ZW5Eb3duc3RyZWFtKGZ1bmN0aW9uIChuZXdWYWwpIHtcbiAgICAgICAgaWYgKGRvd25TdHJlYW1GaWx0ZXIobmV3VmFsLCBfZmlsdGVyZWRTb3VyY2UudmFsdWUpKSB7XG4gICAgICAgICAgX2ZpbHRlcmVkU291cmNlLnVwZGF0ZShuZXdWYWwpO1xuICAgICAgICB9XG4gICAgICB9LCB1cHN0cmVhbUZpbHRlcik7XG4gICAgICByZXR1cm4gX2ZpbHRlcmVkU291cmNlO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8udHJhbnNmb3JtID0gZnVuY3Rpb24gdHJhbnNmb3JtKG9wZXJhdGlvbkEsIG9wZXJhdGlvbkIsIG9wZXJhdGlvbkMsIG9wZXJhdGlvbkQsIG9wZXJhdGlvbkUsIG9wZXJhdGlvbkYsIG9wZXJhdGlvbkcsIG9wZXJhdGlvbkgsIG9wZXJhdGlvbkksIG9wZXJhdGlvbkosIG9wZXJhdGlvbkssIGNhbmNlbGxhdGlvblRva2VuKSB7XG4gICAgdmFyIHRva2VuO1xuICAgIHZhciBvcGVyYXRpb25zID0gW29wZXJhdGlvbkEsIG9wZXJhdGlvbkIsIG9wZXJhdGlvbkMsIG9wZXJhdGlvbkQsIG9wZXJhdGlvbkUsIG9wZXJhdGlvbkYsIG9wZXJhdGlvbkcsIG9wZXJhdGlvbkgsIG9wZXJhdGlvbkksIG9wZXJhdGlvbkosIG9wZXJhdGlvbktdLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGUgJiYgKGUgaW5zdGFuY2VvZiBDYW5jZWxsYXRpb25Ub2tlbiA/ICh0b2tlbiA9IGUsIGZhbHNlKSA6IHRydWUpO1xuICAgIH0pO1xuXG4gICAgaWYgKGNhbmNlbGxhdGlvblRva2VuKSB7XG4gICAgICB0b2tlbiA9IGNhbmNlbGxhdGlvblRva2VuO1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSBuZXcgRGF0YVNvdXJjZSh1bmRlZmluZWQsIHRoaXMubmFtZSArICcgJyArIG9wZXJhdGlvbnMubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgICByZXR1cm4gdi5uYW1lO1xuICAgIH0pLmpvaW4oJyAnKSk7XG4gICAgKHRoaXMucHJpbWVkID8gdGhpcy5saXN0ZW5BbmRSZXBlYXQgOiB0aGlzLmxpc3RlbikuY2FsbCh0aGlzLCBwcm9jZXNzVHJhbnNmb3JtKG9wZXJhdGlvbnMsIHJlc3VsdCksIHRva2VuKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIF9wcm90by5waXBlID0gZnVuY3Rpb24gcGlwZSh0YXJnZXREYXRhU291cmNlLCBjYW5jZWxsYXRpb25Ub2tlbikge1xuICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgdGhpcy5saXN0ZW5Eb3duc3RyZWFtKGZ1bmN0aW9uIChuZXdWYWwpIHtcbiAgICAgIHJldHVybiB0YXJnZXREYXRhU291cmNlLnVwZGF0ZURvd25zdHJlYW0obmV3VmFsKTtcbiAgICB9LCBjYW5jZWxsYXRpb25Ub2tlbik7XG4gICAgdGFyZ2V0RGF0YVNvdXJjZS5saXN0ZW5VcHN0cmVhbShmdW5jdGlvbiAobmV3VmFsKSB7XG4gICAgICByZXR1cm4gX3RoaXM1LnVwZGF0ZVVwc3RyZWFtKG5ld1ZhbCk7XG4gICAgfSwgY2FuY2VsbGF0aW9uVG9rZW4pO1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIF9wcm90by5tYXAgPSBmdW5jdGlvbiBtYXAobWFwcGVyLCByZXZlcnNlTWFwcGVyLCBjYW5jZWxsYXRpb25Ub2tlbikge1xuICAgIHZhciBfdGhpczYgPSB0aGlzO1xuXG4gICAgaWYgKHR5cGVvZiByZXZlcnNlTWFwcGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgbWFwcGVkU291cmNlO1xuXG4gICAgICBpZiAodGhpcy5wcmltZWQpIHtcbiAgICAgICAgbWFwcGVkU291cmNlID0gbmV3IER1cGxleERhdGFTb3VyY2UobWFwcGVyKHRoaXMudmFsdWUpLCBmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtYXBwZWRTb3VyY2UgPSBuZXcgRHVwbGV4RGF0YVNvdXJjZSh1bmRlZmluZWQsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5saXN0ZW5Eb3duc3RyZWFtKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiBtYXBwZWRTb3VyY2UudXBkYXRlRG93bnN0cmVhbShtYXBwZXIodikpO1xuICAgICAgfSwgY2FuY2VsbGF0aW9uVG9rZW4pO1xuICAgICAgbWFwcGVkU291cmNlLmxpc3RlblVwc3RyZWFtKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiBfdGhpczYudXBkYXRlVXBzdHJlYW0ocmV2ZXJzZU1hcHBlcih2KSk7XG4gICAgICB9LCBjYW5jZWxsYXRpb25Ub2tlbik7XG4gICAgICByZXR1cm4gbWFwcGVkU291cmNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX21hcHBlZFNvdXJjZTtcblxuICAgICAgaWYgKHRoaXMucHJpbWVkKSB7XG4gICAgICAgIF9tYXBwZWRTb3VyY2UgPSBuZXcgRGF0YVNvdXJjZShtYXBwZXIodGhpcy52YWx1ZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX21hcHBlZFNvdXJjZSA9IG5ldyBEYXRhU291cmNlKCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubGlzdGVuRG93bnN0cmVhbShmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gX21hcHBlZFNvdXJjZS51cGRhdGUobWFwcGVyKHYpKTtcbiAgICAgIH0sIHJldmVyc2VNYXBwZXIpO1xuICAgICAgcmV0dXJuIF9tYXBwZWRTb3VyY2U7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5saXN0ZW5PbmNlID0gZnVuY3Rpb24gbGlzdGVuT25jZShjYWxsYmFjaywgY2FuY2VsbGF0aW9uVG9rZW4pIHtcbiAgICByZXR1cm4gdGhpcy51cGRhdGVEb3duc3RyZWFtRXZlbnQuc3Vic2NyaWJlT25jZShjYWxsYmFjaywgY2FuY2VsbGF0aW9uVG9rZW4pLmNhbmNlbDtcbiAgfTtcblxuICBfcHJvdG8uYXdhaXROZXh0VXBkYXRlID0gZnVuY3Rpb24gYXdhaXROZXh0VXBkYXRlKGNhbmNlbGxhdGlvblRva2VuKSB7XG4gICAgdmFyIF90aGlzNyA9IHRoaXM7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgIF90aGlzNy5saXN0ZW5PbmNlKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZSh2YWx1ZSk7XG4gICAgICB9LCBjYW5jZWxsYXRpb25Ub2tlbik7XG4gICAgfSk7XG4gIH07XG5cbiAgX3Byb3RvLmRlYm91bmNlVXBzdHJlYW0gPSBmdW5jdGlvbiBkZWJvdW5jZVVwc3RyZWFtKHRpbWUsIGNhbmNlbGxhdGlvblRva2VuKSB7XG4gICAgdmFyIF90aGlzOCA9IHRoaXM7XG5cbiAgICB2YXIgZGVib3VuY2VkRGF0YVNvdXJjZSA9IG5ldyBEdXBsZXhEYXRhU291cmNlKHRoaXMudmFsdWUpO1xuICAgIHZhciB0aW1lb3V0O1xuICAgIGRlYm91bmNlZERhdGFTb3VyY2UubGlzdGVuVXBzdHJlYW0oZnVuY3Rpb24gKHYpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXM4LnVwZGF0ZVVwc3RyZWFtKHYpO1xuICAgICAgfSwgdGltZSk7XG4gICAgfSwgY2FuY2VsbGF0aW9uVG9rZW4pO1xuICAgIHRoaXMubGlzdGVuRG93bnN0cmVhbShmdW5jdGlvbiAodikge1xuICAgICAgZGVib3VuY2VkRGF0YVNvdXJjZS51cGRhdGVEb3duc3RyZWFtKHYpO1xuICAgIH0sIGNhbmNlbGxhdGlvblRva2VuKTtcbiAgICByZXR1cm4gZGVib3VuY2VkRGF0YVNvdXJjZTtcbiAgfTtcblxuICBfcHJvdG8uZGVib3VuY2VEb3duc3RyZWFtID0gZnVuY3Rpb24gZGVib3VuY2VEb3duc3RyZWFtKHRpbWUsIGNhbmNlbGxhdGlvblRva2VuKSB7XG4gICAgdmFyIF90aGlzOSA9IHRoaXM7XG5cbiAgICB2YXIgZGVib3VuY2VkRGF0YVNvdXJjZSA9IG5ldyBEdXBsZXhEYXRhU291cmNlKHRoaXMudmFsdWUpO1xuICAgIHZhciB0aW1lb3V0O1xuICAgIHRoaXMubGlzdGVuRG93bnN0cmVhbShmdW5jdGlvbiAodikge1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBkZWJvdW5jZWREYXRhU291cmNlLnVwZGF0ZURvd25zdHJlYW0odik7XG4gICAgICB9LCB0aW1lKTtcbiAgICB9LCBjYW5jZWxsYXRpb25Ub2tlbik7XG4gICAgZGVib3VuY2VkRGF0YVNvdXJjZS5saXN0ZW5VcHN0cmVhbShmdW5jdGlvbiAodikge1xuICAgICAgX3RoaXM5LnVwZGF0ZVVwc3RyZWFtKHYpO1xuICAgIH0sIGNhbmNlbGxhdGlvblRva2VuKTtcbiAgICByZXR1cm4gZGVib3VuY2VkRGF0YVNvdXJjZTtcbiAgfTtcblxuICBfcHJvdG8uZGlmZiA9IGZ1bmN0aW9uIGRpZmYoY2FuY2VsbGF0aW9uVG9rZW4pIHtcbiAgICBjYW5jZWxsYXRpb25Ub2tlbiA9IGNhbmNlbGxhdGlvblRva2VuICE9PSBudWxsICYmIGNhbmNlbGxhdGlvblRva2VuICE9PSB2b2lkIDAgPyBjYW5jZWxsYXRpb25Ub2tlbiA6IG5ldyBDYW5jZWxsYXRpb25Ub2tlbigpO1xuICAgIHZhciBkaWZmaW5nU291cmNlID0gbmV3IFRyYW5zaWVudERhdGFTb3VyY2UoY2FuY2VsbGF0aW9uVG9rZW4sIHtcbiAgICAgIFwibmV3XCI6IHRoaXMudmFsdWUsXG4gICAgICBvbGQ6IHVuZGVmaW5lZFxuICAgIH0pO1xuICAgIHRoaXMubGlzdGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgZGlmZmluZ1NvdXJjZS51cGRhdGUoe1xuICAgICAgICBcIm5ld1wiOiB2YWx1ZSxcbiAgICAgICAgb2xkOiBkaWZmaW5nU291cmNlLnZhbHVlW1wibmV3XCJdXG4gICAgICB9KTtcbiAgICB9LCBjYW5jZWxsYXRpb25Ub2tlbik7XG4gICAgcmV0dXJuIGRpZmZpbmdTb3VyY2U7XG4gIH07XG5cbiAgX3Byb3RvLnVuaXF1ZSA9IGZ1bmN0aW9uIHVuaXF1ZShjYW5jZWxsYXRpb25Ub2tlbikge1xuICAgIHZhciBfdGhpczEwID0gdGhpcztcblxuICAgIHZhciB1bmlxdWVTb3VyY2UgPSBuZXcgRHVwbGV4RGF0YVNvdXJjZSh0aGlzLnZhbHVlLCBmYWxzZSk7XG4gICAgdmFyIHVwc3RyZWFtVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgIHZhciBkb3duU3RyZWFtVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgIHRoaXMubGlzdGVuRG93bnN0cmVhbShmdW5jdGlvbiAodikge1xuICAgICAgaWYgKGRvd25TdHJlYW1WYWx1ZSAhPT0gdikge1xuICAgICAgICBkb3duU3RyZWFtVmFsdWUgPSB2O1xuICAgICAgICB1bmlxdWVTb3VyY2UudXBkYXRlRG93bnN0cmVhbSh2KTtcbiAgICAgIH1cbiAgICB9LCBjYW5jZWxsYXRpb25Ub2tlbik7XG4gICAgdW5pcXVlU291cmNlLmxpc3RlblVwc3RyZWFtKGZ1bmN0aW9uICh2KSB7XG4gICAgICBpZiAodXBzdHJlYW1WYWx1ZSAhPT0gdikge1xuICAgICAgICB1cHN0cmVhbVZhbHVlID0gdjtcblxuICAgICAgICBfdGhpczEwLnVwZGF0ZVVwc3RyZWFtKHYpO1xuICAgICAgfVxuICAgIH0sIGNhbmNlbGxhdGlvblRva2VuKTtcbiAgICByZXR1cm4gdW5pcXVlU291cmNlO1xuICB9O1xuXG4gIF9wcm90by5vbmVXYXlGbG93ID0gZnVuY3Rpb24gb25lV2F5RmxvdyhkaXJlY3Rpb24sIGNhbmNlbGxhdGlvblRva2VuKSB7XG4gICAgdmFyIF90aGlzMTEgPSB0aGlzO1xuXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gdm9pZCAwKSB7XG4gICAgICBkaXJlY3Rpb24gPSBleHBvcnRzLkRhdGFGbG93LkRPV05TVFJFQU07XG4gICAgfVxuXG4gICAgdmFyIG9uZVdheVNvdXJjZSA9IG5ldyBEdXBsZXhEYXRhU291cmNlKHRoaXMudmFsdWUsIGZhbHNlKTtcblxuICAgIGlmIChkaXJlY3Rpb24gPT09IGV4cG9ydHMuRGF0YUZsb3cuRE9XTlNUUkVBTSkge1xuICAgICAgdGhpcy5saXN0ZW5Eb3duc3RyZWFtKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiBvbmVXYXlTb3VyY2UudXBkYXRlRG93bnN0cmVhbSh2KTtcbiAgICAgIH0sIGNhbmNlbGxhdGlvblRva2VuKTtcblxuICAgICAgb25lV2F5U291cmNlLnVwZGF0ZVVwc3RyZWFtID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdm9pZCAwO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgb25lV2F5U291cmNlLmxpc3RlblVwc3RyZWFtKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiBfdGhpczExLnVwZGF0ZVVwc3RyZWFtKHYpO1xuICAgICAgfSk7XG5cbiAgICAgIG9uZVdheVNvdXJjZS51cGRhdGVEb3duc3RyZWFtID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdm9pZCAwO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gb25lV2F5U291cmNlO1xuICB9O1xuXG4gIF9wcm90by5yZWR1Y2UgPSBmdW5jdGlvbiByZWR1Y2UocmVkdWNlciwgaW5pdGlhbFZhbHVlLCBjYW5jZWxsYXRpb25Ub2tlbikge1xuICAgIHZhciByZWR1Y2VTb3VyY2UgPSBuZXcgRGF0YVNvdXJjZShpbml0aWFsVmFsdWUpO1xuICAgIHRoaXMubGlzdGVuKGZ1bmN0aW9uICh2KSB7XG4gICAgICByZXR1cm4gcmVkdWNlU291cmNlLnVwZGF0ZShyZWR1Y2VyKHJlZHVjZVNvdXJjZS52YWx1ZSwgdikpO1xuICAgIH0sIGNhbmNlbGxhdGlvblRva2VuKTtcbiAgICByZXR1cm4gcmVkdWNlU291cmNlO1xuICB9O1xuXG4gIF9wcm90by5jYW5jZWxBbGwgPSBmdW5jdGlvbiBjYW5jZWxBbGwoKSB7XG4gICAgdGhpcy51cGRhdGVEb3duc3RyZWFtRXZlbnQuY2FuY2VsQWxsKCk7XG4gICAgdGhpcy51cGRhdGVVcHN0cmVhbUV2ZW50LmNhbmNlbEFsbCgpO1xuICB9O1xuXG4gIHJldHVybiBEdXBsZXhEYXRhU291cmNlO1xufSgpO1xuXG5mdW5jdGlvbiBhdXJ1bUNsYXNzTmFtZShkYXRhLCBjYW5jZWxsYXRpb25Ub2tlbikge1xuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3Aoa2V5KSB7XG4gICAgaWYgKGRhdGFba2V5XSkge1xuICAgICAgaWYgKGRhdGFba2V5XSBpbnN0YW5jZW9mIERhdGFTb3VyY2UgfHwgZGF0YVtrZXldIGluc3RhbmNlb2YgRHVwbGV4RGF0YVNvdXJjZSkge1xuICAgICAgICB2YXIgc291cmNlID0gZGF0YVtrZXldO1xuICAgICAgICB2YXIgbWFwcGVkU291cmNlID0gbmV3IERhdGFTb3VyY2Uoc291cmNlLnZhbHVlID8ga2V5IDogJycpO1xuICAgICAgICBzb3VyY2UubGlzdGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIG1hcHBlZFNvdXJjZS51cGRhdGUodmFsdWUgPyBrZXkgOiAnJyk7XG4gICAgICAgIH0sIGNhbmNlbGxhdGlvblRva2VuKTtcbiAgICAgICAgcmVzdWx0LnB1c2gobWFwcGVkU291cmNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgX2xvb3Aoa2V5KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlbmRlclNlc3Npb24oKSB7XG4gIHZhciBzZXNzaW9uID0ge1xuICAgIGF0dGFjaENhbGxzOiBbXSxcbiAgICBzZXNzaW9uVG9rZW46IG5ldyBDYW5jZWxsYXRpb25Ub2tlbihmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKHNlc3Npb24udG9rZW5zKSwgX3N0ZXA7ICEoX3N0ZXAgPSBfaXRlcmF0b3IoKSkuZG9uZTspIHtcbiAgICAgICAgdmFyIHRva2VuID0gX3N0ZXAudmFsdWU7XG4gICAgICAgIHRva2VuLmNhbmNlbCgpO1xuICAgICAgfVxuICAgIH0pLFxuICAgIHRva2VuczogW11cbiAgfTtcbiAgcmV0dXJuIHNlc3Npb247XG59XG52YXIgYXVydW1FbGVtZW50TW9kZWxJZGVudGl0aXkgPSBTeW1ib2woJ0F1cnVtRWxlbWVudE1vZGVsJyk7XG52YXIgbm9kZURhdGEgPSBuZXcgV2Vha01hcCgpO1xudmFyIEF1cnVtRWxlbWVudCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEF1cnVtRWxlbWVudChkYXRhU291cmNlLCBhcGkpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuYXBpID0gYXBpO1xuICAgIHRoaXMuYXBpLm9uQXR0YWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChfdGhpcy5ob3N0Tm9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaWxsZWdhbCBzdGF0ZTogQXR0YWNoIGZpcmVkIGJ1dCBub3QgYWN0dWFsbHkgYXR0YWNoZWQnKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMucmVuZGVyKGRhdGFTb3VyY2UpO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IEF1cnVtRWxlbWVudC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmRpc3Bvc2UgPSBmdW5jdGlvbiBkaXNwb3NlKCkge1xuICAgIHRoaXMuY2xlYXJDb250ZW50KCk7XG4gIH07XG5cbiAgX3Byb3RvLmF0dGFjaFRvRG9tID0gZnVuY3Rpb24gYXR0YWNoVG9Eb20obm9kZSwgaW5kZXgpIHtcbiAgICBpZiAodGhpcy5ob3N0Tm9kZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBdXJ1bSBFbGVtZW50IGlzIGFscmVhZHkgYXR0YWNoZWQnKTtcbiAgICB9XG5cbiAgICB2YXIgaWQgPSBBdXJ1bUVsZW1lbnQuaWQrKztcbiAgICB0aGlzLmhvc3ROb2RlID0gbm9kZTtcbiAgICB0aGlzLmNvbnRlbnRTdGFydE1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ1NUQVJUIEF1cnVtIE5vZGUgJyArIGlkKTtcbiAgICB0aGlzLmNvbnRlbnRFbmRNYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdFTkQgQXVydW0gTm9kZSAnICsgaWQpO1xuXG4gICAgaWYgKGluZGV4ID49IG5vZGUuY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIG5vZGUuYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50U3RhcnRNYXJrZXIpO1xuICAgICAgbm9kZS5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnRFbmRNYXJrZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlLmluc2VydEJlZm9yZSh0aGlzLmNvbnRlbnRTdGFydE1hcmtlciwgbm9kZS5jaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgICBub2RlLmluc2VydEJlZm9yZSh0aGlzLmNvbnRlbnRFbmRNYXJrZXIsIG5vZGUuY2hpbGROb2Rlc1tpbmRleCArIDFdKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmdldFdvcmtJbmRleCA9IGZ1bmN0aW9uIGdldFdvcmtJbmRleCgpIHtcbiAgICBpZiAodGhpcy5sYXN0U3RhcnRJbmRleCAhPT0gdW5kZWZpbmVkICYmIHRoaXMuaG9zdE5vZGUuY2hpbGROb2Rlc1t0aGlzLmxhc3RTdGFydEluZGV4XSA9PT0gdGhpcy5jb250ZW50U3RhcnRNYXJrZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLmxhc3RTdGFydEluZGV4ICsgMTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaG9zdE5vZGUuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuaG9zdE5vZGUuY2hpbGROb2Rlc1tpXSA9PT0gdGhpcy5jb250ZW50U3RhcnRNYXJrZXIpIHtcbiAgICAgICAgdGhpcy5sYXN0U3RhcnRJbmRleCA9IGk7XG4gICAgICAgIHJldHVybiBpICsgMTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmdldExhc3RJbmRleCA9IGZ1bmN0aW9uIGdldExhc3RJbmRleCgpIHtcbiAgICBpZiAodGhpcy5sYXN0RW5kSW5kZXggIT09IHVuZGVmaW5lZCAmJiB0aGlzLmhvc3ROb2RlLmNoaWxkTm9kZXNbdGhpcy5sYXN0RW5kSW5kZXhdID09PSB0aGlzLmNvbnRlbnRFbmRNYXJrZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLmxhc3RFbmRJbmRleDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaG9zdE5vZGUuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuaG9zdE5vZGUuY2hpbGROb2Rlc1tpXSA9PT0gdGhpcy5jb250ZW50RW5kTWFya2VyKSB7XG4gICAgICAgIHRoaXMubGFzdEVuZEluZGV4ID0gaTtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jbGVhckNvbnRlbnQgPSBmdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XG4gICAgaWYgKHRoaXMuaG9zdE5vZGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbGxlZ2FsIHN0YXRlOiBBdXJ1bSBlbGVtZW50IHdhcyBub3QgYXR0Y2hlZCB0byBhbnl0aGluZycpO1xuICAgIH1cblxuICAgIHZhciB3b3JrSW5kZXggPSB0aGlzLmdldFdvcmtJbmRleCgpO1xuXG4gICAgd2hpbGUgKHRoaXMuaG9zdE5vZGUuY2hpbGROb2Rlc1t3b3JrSW5kZXhdICE9PSB0aGlzLmNvbnRlbnRFbmRNYXJrZXIpIHtcbiAgICAgIHRoaXMuaG9zdE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ob3N0Tm9kZS5jaGlsZE5vZGVzW3dvcmtJbmRleF0pO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8udXBkYXRlRG9tID0gZnVuY3Rpb24gdXBkYXRlRG9tKCkge1xuICAgIGlmICh0aGlzLmhvc3ROb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaWxsZWdhbCBzdGF0ZTogQXVydW0gZWxlbWVudCB3YXMgbm90IGF0dGNoZWQgdG8gYW55dGhpbmcnKTtcbiAgICB9XG5cbiAgICB2YXIgd29ya0luZGV4ID0gdGhpcy5nZXRXb3JrSW5kZXgoKTtcbiAgICB2YXIgaTtcbiAgICB2YXIgb2Zmc2V0ID0gMDtcblxuICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hpbGQgPSB0aGlzLmNoaWxkcmVuW2ldO1xuXG4gICAgICBpZiAoY2hpbGQgPT09IHVuZGVmaW5lZCB8fCBjaGlsZCA9PT0gbnVsbCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgQXVydW1FbGVtZW50KSB7XG4gICAgICAgIG9mZnNldCArPSBjaGlsZC5nZXRMYXN0SW5kZXgoKSAtIGkgLSBvZmZzZXQgLSB3b3JrSW5kZXg7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5ob3N0Tm9kZS5jaGlsZE5vZGVzW2kgKyB3b3JrSW5kZXggKyBvZmZzZXRdICE9PSB0aGlzLmNvbnRlbnRFbmRNYXJrZXIgJiYgdGhpcy5ob3N0Tm9kZS5jaGlsZE5vZGVzW2kgKyB3b3JrSW5kZXggKyBvZmZzZXRdICE9PSB0aGlzLmNoaWxkcmVuW2ldKSB7XG4gICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IHx8IGNoaWxkIGluc3RhbmNlb2YgVGV4dCkge1xuICAgICAgICAgIHRoaXMuaG9zdE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5ob3N0Tm9kZS5jaGlsZE5vZGVzW2kgKyB3b3JrSW5kZXggKyBvZmZzZXRdKTtcblxuICAgICAgICAgIGlmICh0aGlzLmhvc3ROb2RlLmNoaWxkTm9kZXNbaSArIHdvcmtJbmRleCArIG9mZnNldF0pIHtcbiAgICAgICAgICAgIHRoaXMuaG9zdE5vZGUuaW5zZXJ0QmVmb3JlKGNoaWxkLCB0aGlzLmhvc3ROb2RlLmNoaWxkTm9kZXNbaSArIHdvcmtJbmRleCArIG9mZnNldF0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhvc3ROb2RlLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdub3QgaW1wbGVtZW50ZWQnKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgY2hpbGQgaW5zdGFuY2VvZiBUZXh0KSB7XG4gICAgICAgICAgaWYgKHRoaXMuaG9zdE5vZGUuY2hpbGROb2Rlc1tpICsgd29ya0luZGV4ICsgb2Zmc2V0XSkge1xuICAgICAgICAgICAgdGhpcy5ob3N0Tm9kZS5pbnNlcnRCZWZvcmUoY2hpbGQsIHRoaXMuaG9zdE5vZGUuY2hpbGROb2Rlc1tpICsgd29ya0luZGV4ICsgb2Zmc2V0XSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaG9zdE5vZGUuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBpbXBsZW1lbnRlZCcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgd2hpbGUgKHRoaXMuaG9zdE5vZGUuY2hpbGROb2Rlc1tpICsgd29ya0luZGV4ICsgb2Zmc2V0XSAhPT0gdGhpcy5jb250ZW50RW5kTWFya2VyKSB7XG4gICAgICB0aGlzLmhvc3ROb2RlLnJlbW92ZUNoaWxkKHRoaXMuaG9zdE5vZGUuY2hpbGROb2Rlc1tpICsgd29ya0luZGV4ICsgb2Zmc2V0XSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBBdXJ1bUVsZW1lbnQ7XG59KCk7XG5BdXJ1bUVsZW1lbnQuaWQgPSAxO1xuZnVuY3Rpb24gcmVuZGVyKGVsZW1lbnQsIHNlc3Npb24sIHByZXJlbmRlcmluZykge1xuICBpZiAocHJlcmVuZGVyaW5nID09PSB2b2lkIDApIHtcbiAgICBwcmVyZW5kZXJpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIGlmIChlbGVtZW50ID09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAocGVuZGluZ1Nlc3Npb25zLmhhcyhlbGVtZW50KSkge1xuICAgIHZhciBzdWJTZXNzaW9uID0gcGVuZGluZ1Nlc3Npb25zLmdldChlbGVtZW50KTtcblxuICAgIGlmIChzdWJTZXNzaW9uLnNlc3Npb25Ub2tlbikge1xuICAgICAgdmFyIF9zZXNzaW9uJGF0dGFjaENhbGxzO1xuXG4gICAgICAoX3Nlc3Npb24kYXR0YWNoQ2FsbHMgPSBzZXNzaW9uLmF0dGFjaENhbGxzKS5wdXNoLmFwcGx5KF9zZXNzaW9uJGF0dGFjaENhbGxzLCBzdWJTZXNzaW9uLmF0dGFjaENhbGxzKTtcblxuICAgICAgc2Vzc2lvbi5zZXNzaW9uVG9rZW4uY2hhaW4oc3ViU2Vzc2lvbi5zZXNzaW9uVG9rZW4pO1xuICAgICAgc3ViU2Vzc2lvbi5hdHRhY2hDYWxscyA9IHVuZGVmaW5lZDtcbiAgICAgIHN1YlNlc3Npb24uc2Vzc2lvblRva2VuID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHBlbmRpbmdTZXNzaW9uc1tcImRlbGV0ZVwiXShlbGVtZW50KTtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KGVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGVsZW1lbnQubWFwKGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gcmVuZGVyKGUsIHNlc3Npb24sIHByZXJlbmRlcmluZyk7XG4gICAgfSkpO1xuICB9XG5cbiAgaWYgKCFwcmVyZW5kZXJpbmcpIHtcbiAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgIHZhciBkcyA9IG5ldyBEYXRhU291cmNlKCk7XG4gICAgICBlbGVtZW50LnRoZW4oZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICBkcy51cGRhdGUodmFsKTtcbiAgICAgIH0pO1xuICAgICAgdmFyIHJlc3VsdCA9IG5ldyBTaW5ndWxhckF1cnVtRWxlbWVudChkcywgY3JlYXRlQVBJKHNlc3Npb24pKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgRGF0YVNvdXJjZSB8fCBlbGVtZW50IGluc3RhbmNlb2YgRHVwbGV4RGF0YVNvdXJjZSkge1xuICAgICAgdmFyIF9yZXN1bHQgPSBuZXcgU2luZ3VsYXJBdXJ1bUVsZW1lbnQoZWxlbWVudCwgY3JlYXRlQVBJKHNlc3Npb24pKTtcblxuICAgICAgcmV0dXJuIF9yZXN1bHQ7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgQXJyYXlEYXRhU291cmNlKSB7XG4gICAgICB2YXIgX3Jlc3VsdDIgPSBuZXcgQXJyYXlBdXJ1bUVsZW1lbnQoZWxlbWVudCwgY3JlYXRlQVBJKHNlc3Npb24pKTtcblxuICAgICAgcmV0dXJuIF9yZXN1bHQyO1xuICAgIH1cblxuICAgIHZhciB0eXBlID0gdHlwZW9mIGVsZW1lbnQ7XG5cbiAgICBpZiAodHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZSA9PT0gJ251bWJlcicgfHwgdHlwZSA9PT0gJ2JpZ2ludCcgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZWxlbWVudC50b1N0cmluZygpKTtcbiAgICB9XG4gIH1cblxuICBpZiAoZWxlbWVudFthdXJ1bUVsZW1lbnRNb2RlbElkZW50aXRpeV0pIHtcbiAgICB2YXIgbW9kZWwgPSBlbGVtZW50O1xuICAgIHJldHVybiByZW5kZXIobW9kZWwuZmFjdG9yeShtb2RlbC5wcm9wcyB8fCB7fSwgbW9kZWwuY2hpbGRyZW4sIGNyZWF0ZUFQSShzZXNzaW9uKSksIHNlc3Npb24sIHByZXJlbmRlcmluZyk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cbnZhciBwZW5kaW5nU2Vzc2lvbnMgPSBuZXcgV2Vha01hcCgpO1xuZnVuY3Rpb24gY3JlYXRlQVBJKHNlc3Npb24pIHtcbiAgdmFyIHRva2VuID0gdW5kZWZpbmVkO1xuICB2YXIgYXBpID0ge1xuICAgIHJlbmRlclNlc3Npb246IHNlc3Npb24sXG4gICAgb25BdHRhY2g6IGZ1bmN0aW9uIG9uQXR0YWNoKGNiKSB7XG4gICAgICBzZXNzaW9uLmF0dGFjaENhbGxzLnB1c2goY2IpO1xuICAgIH0sXG4gICAgb25EZXRhY2g6IGZ1bmN0aW9uIG9uRGV0YWNoKGNiKSB7XG4gICAgICBpZiAoIXRva2VuKSB7XG4gICAgICAgIHRva2VuID0gbmV3IENhbmNlbGxhdGlvblRva2VuKCk7XG4gICAgICAgIHNlc3Npb24udG9rZW5zLnB1c2godG9rZW4pO1xuICAgICAgfVxuXG4gICAgICB0b2tlbi5hZGRDYW5jZWxhYmxlKGNiKTtcbiAgICB9LFxuICAgIG9uRXJyb3I6IGZ1bmN0aW9uIG9uRXJyb3IoY2IpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignbm90IGltcGxlbWVudGVkJyk7XG4gICAgfSxcblxuICAgIGdldCBjYW5jZWxsYXRpb25Ub2tlbigpIHtcbiAgICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgdG9rZW4gPSBuZXcgQ2FuY2VsbGF0aW9uVG9rZW4oKTtcbiAgICAgICAgc2Vzc2lvbi50b2tlbnMucHVzaCh0b2tlbik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuXG4gICAgcHJlcmVuZGVyOiBmdW5jdGlvbiBwcmVyZW5kZXIodGFyZ2V0KSB7XG4gICAgICB2YXIgc3ViU2Vzc2lvbiA9IGNyZWF0ZVJlbmRlclNlc3Npb24oKTtcbiAgICAgIHZhciByZXN1bHQgPSByZW5kZXIodGFyZ2V0LCBzdWJTZXNzaW9uLCB0cnVlKTtcblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzdWx0KSkge1xuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3IyID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShyZXN1bHQpLCBfc3RlcDI7ICEoX3N0ZXAyID0gX2l0ZXJhdG9yMigpKS5kb25lOykge1xuICAgICAgICAgIHZhciBpdGVtID0gX3N0ZXAyLnZhbHVlO1xuXG4gICAgICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcGVuZGluZ1Nlc3Npb25zLnNldChpdGVtLCBzdWJTZXNzaW9uKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBlbmRpbmdTZXNzaW9ucy5zZXQocmVzdWx0LCBzdWJTZXNzaW9uKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuXG4gICAgZ2V0IHN0eWxlKCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGF1cnVtU3R5bGUoZnJhZ21lbnRzKSB7XG4gICAgICAgIHZhciBpbnB1dCA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBEYXRhU291cmNlKCk7XG5cbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMyA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UoaW5wdXQpLCBfc3RlcDM7ICEoX3N0ZXAzID0gX2l0ZXJhdG9yMygpKS5kb25lOykge1xuICAgICAgICAgIHZhciBpbnMgPSBfc3RlcDMudmFsdWU7XG5cbiAgICAgICAgICBpZiAoaW5zIGluc3RhbmNlb2YgRGF0YVNvdXJjZSB8fCBpbnMgaW5zdGFuY2VvZiBEdXBsZXhEYXRhU291cmNlKSB7XG4gICAgICAgICAgICBpbnMubGlzdGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdC51cGRhdGUocmVjb21wdXRlKGZyYWdtZW50cywgaW5wdXQpKTtcbiAgICAgICAgICAgIH0sIGFwaS5jYW5jZWxsYXRpb25Ub2tlbik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0LnVwZGF0ZShyZWNvbXB1dGUoZnJhZ21lbnRzLCBpbnB1dCkpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfTtcbiAgICB9XG5cbiAgfTtcbiAgcmV0dXJuIGFwaTtcbn1cblxuZnVuY3Rpb24gcmVjb21wdXRlKGZyYWdtZW50cywgaW5wdXQpIHtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZnJhZ21lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0ICs9IGZyYWdtZW50c1tpXTtcblxuICAgIGlmIChpbnB1dFtpXSkge1xuICAgICAgaWYgKHR5cGVvZiBpbnB1dFtpXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmVzdWx0ICs9IGlucHV0W2ldO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ICs9IGlucHV0W2ldLnZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbnZhciBBcnJheUF1cnVtRWxlbWVudCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0F1cnVtRWxlbWVudCkge1xuICBfaW5oZXJpdHNMb29zZShBcnJheUF1cnVtRWxlbWVudCwgX0F1cnVtRWxlbWVudCk7XG5cbiAgZnVuY3Rpb24gQXJyYXlBdXJ1bUVsZW1lbnQoZGF0YVNvdXJjZSwgYXBpKSB7XG4gICAgdmFyIF90aGlzMjtcblxuICAgIF90aGlzMiA9IF9BdXJ1bUVsZW1lbnQuY2FsbCh0aGlzLCBkYXRhU291cmNlLCBhcGkpIHx8IHRoaXM7XG4gICAgX3RoaXMyLnJlbmRlclNlc3Npb25zID0gbmV3IFdlYWtNYXAoKTtcbiAgICBfdGhpczIuZGF0YVNvdXJjZSA9IGRhdGFTb3VyY2U7XG4gICAgcmV0dXJuIF90aGlzMjtcbiAgfVxuXG4gIHZhciBfcHJvdG8yID0gQXJyYXlBdXJ1bUVsZW1lbnQucHJvdG90eXBlO1xuXG4gIF9wcm90bzIuYXR0YWNoVG9Eb20gPSBmdW5jdGlvbiBhdHRhY2hUb0RvbShub2RlLCBpbmRleCkge1xuICAgIF9BdXJ1bUVsZW1lbnQucHJvdG90eXBlLmF0dGFjaFRvRG9tLmNhbGwodGhpcywgbm9kZSwgaW5kZXgpO1xuXG4gICAgdGhpcy5jb250ZW50U3RhcnRNYXJrZXIuZGF0YVNvdXJjZSA9IHRoaXMuZGF0YVNvdXJjZTtcbiAgICB0aGlzLmNvbnRlbnRFbmRNYXJrZXIuZGF0YVNvdXJjZSA9IHRoaXMuZGF0YVNvdXJjZTtcbiAgfTtcblxuICBfcHJvdG8yLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihkYXRhU291cmNlKSB7XG4gICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICBkYXRhU291cmNlLmxpc3RlbkFuZFJlcGVhdChmdW5jdGlvbiAobikge1xuICAgICAgX3RoaXMzLmhhbmRsZU5ld0NvbnRlbnQobik7XG5cbiAgICAgIF90aGlzMy51cGRhdGVEb20oKTtcbiAgICB9LCB0aGlzLmFwaS5jYW5jZWxsYXRpb25Ub2tlbik7XG4gIH07XG5cbiAgX3Byb3RvMi5zcGxpY2VDaGlsZHJlbiA9IGZ1bmN0aW9uIHNwbGljZUNoaWxkcmVuKGluZGV4LCBhbW91bnQsIG5ld0l0ZW1zKSB7XG4gICAgdmFyIHJlbW92ZWQ7XG5cbiAgICBpZiAobmV3SXRlbXMpIHtcbiAgICAgIHJlbW92ZWQgPSB0aGlzLmNoaWxkcmVuLnNwbGljZShpbmRleCwgYW1vdW50LCBuZXdJdGVtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZWQgPSB0aGlzLmNoaWxkcmVuLnNwbGljZShpbmRleCwgYW1vdW50KTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaXRlcmF0b3I0ID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShyZW1vdmVkKSwgX3N0ZXA0OyAhKF9zdGVwNCA9IF9pdGVyYXRvcjQoKSkuZG9uZTspIHtcbiAgICAgIHZhciBpdGVtID0gX3N0ZXA0LnZhbHVlO1xuICAgICAgdGhpcy5yZW5kZXJTZXNzaW9ucy5nZXQoaXRlbSkuc2Vzc2lvblRva2VuLmNhbmNlbCgpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8yLmhhbmRsZU5ld0NvbnRlbnQgPSBmdW5jdGlvbiBoYW5kbGVOZXdDb250ZW50KGNoYW5nZSkge1xuICAgIHN3aXRjaCAoY2hhbmdlLm9wZXJhdGlvbkRldGFpbGVkKSB7XG4gICAgICBjYXNlICdtZXJnZSc6XG4gICAgICAgIHZhciBzb3VyY2UgPSBjaGFuZ2UucHJldmlvdXNTdGF0ZS5zbGljZSgpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hhbmdlLm5ld1N0YXRlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKHRoaXMuY2hpbGRyZW4ubGVuZ3RoIDw9IGkpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaCh0aGlzLnJlbmRlckl0ZW0oY2hhbmdlLm5ld1N0YXRlW2ldKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNvdXJjZVtpXSAhPT0gY2hhbmdlLm5ld1N0YXRlW2ldKSB7XG4gICAgICAgICAgICB2YXIgX2luZGV4ID0gc291cmNlLmluZGV4T2YoY2hhbmdlLm5ld1N0YXRlW2ldKTtcblxuICAgICAgICAgICAgaWYgKF9pbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgdmFyIGEgPSB0aGlzLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICB2YXIgYiA9IHRoaXMuY2hpbGRyZW5bX2luZGV4XTtcbiAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltpXSA9IGI7XG4gICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5bX2luZGV4XSA9IGE7XG4gICAgICAgICAgICAgIHZhciBjID0gc291cmNlW2ldO1xuICAgICAgICAgICAgICB2YXIgZCA9IHNvdXJjZVtfaW5kZXhdO1xuICAgICAgICAgICAgICBzb3VyY2VbaV0gPSBkO1xuICAgICAgICAgICAgICBzb3VyY2VbX2luZGV4XSA9IGM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnNwbGljZUNoaWxkcmVuKGksIDAsIHRoaXMucmVuZGVySXRlbShjaGFuZ2UubmV3U3RhdGVbaV0pKTtcbiAgICAgICAgICAgICAgc291cmNlLnNwbGljZShpLCAwLCBjaGFuZ2UubmV3U3RhdGVbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IGNoYW5nZS5uZXdTdGF0ZS5sZW5ndGgpIHtcbiAgICAgICAgICB0aGlzLmNoaWxkcmVuLmxlbmd0aCA9IGNoYW5nZS5uZXdTdGF0ZS5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAncmVtb3ZlJzpcbiAgICAgIGNhc2UgJ3JlbW92ZUxlZnQnOlxuICAgICAgY2FzZSAncmVtb3ZlUmlnaHQnOlxuICAgICAgICB0aGlzLnNwbGljZUNoaWxkcmVuKGNoYW5nZS5pbmRleCwgY2hhbmdlLmNvdW50KTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ2FwcGVuZCc6XG4gICAgICAgIGZvciAodmFyIF9pdGVyYXRvcjUgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKGNoYW5nZS5pdGVtcyksIF9zdGVwNTsgIShfc3RlcDUgPSBfaXRlcmF0b3I1KCkpLmRvbmU7KSB7XG4gICAgICAgICAgdmFyIGl0ZW0gPSBfc3RlcDUudmFsdWU7XG5cbiAgICAgICAgICB2YXIgX3JlbmRlcmVkID0gdGhpcy5yZW5kZXJJdGVtKGl0ZW0pO1xuXG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoX3JlbmRlcmVkKSkge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4uY29uY2F0KF9yZW5kZXJlZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChfcmVuZGVyZWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdyZXBsYWNlJzpcbiAgICAgICAgdmFyIHJlbmRlcmVkID0gdGhpcy5yZW5kZXJJdGVtKGNoYW5nZS5pdGVtc1swXSk7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVuZGVyZWQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbGxlZ2FsIHN0YXRlJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jaGlsZHJlbltjaGFuZ2UuaW5kZXhdID0gcmVuZGVyZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnc3dhcCc6XG4gICAgICAgIHZhciBpdGVtQSA9IHRoaXMuY2hpbGRyZW5bY2hhbmdlLmluZGV4XTtcbiAgICAgICAgdmFyIGl0ZW1CID0gdGhpcy5jaGlsZHJlbltjaGFuZ2UuaW5kZXgyXTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbltjaGFuZ2UuaW5kZXgyXSA9IGl0ZW1BO1xuICAgICAgICB0aGlzLmNoaWxkcmVuW2NoYW5nZS5pbmRleF0gPSBpdGVtQjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3ByZXBlbmQnOlxuICAgICAgICBmb3IgKHZhciBfaXRlcmF0b3I2ID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShjaGFuZ2UuaXRlbXMpLCBfc3RlcDY7ICEoX3N0ZXA2ID0gX2l0ZXJhdG9yNigpKS5kb25lOykge1xuICAgICAgICAgIHZhciBfaXRlbSA9IF9zdGVwNi52YWx1ZTtcblxuICAgICAgICAgIHZhciBfcmVuZGVyZWQyID0gdGhpcy5yZW5kZXJJdGVtKF9pdGVtKTtcblxuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KF9yZW5kZXJlZDIpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2lsbGVnYWwgc3RhdGUnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi51bnNoaWZ0KF9yZW5kZXJlZDIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdpbnNlcnQnOlxuICAgICAgICB2YXIgaW5kZXggPSBjaGFuZ2UuaW5kZXg7XG5cbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yNyA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UoY2hhbmdlLml0ZW1zKSwgX3N0ZXA3OyAhKF9zdGVwNyA9IF9pdGVyYXRvcjcoKSkuZG9uZTspIHtcbiAgICAgICAgICB2YXIgX2l0ZW0yID0gX3N0ZXA3LnZhbHVlO1xuXG4gICAgICAgICAgdmFyIF9yZW5kZXJlZDMgPSB0aGlzLnJlbmRlckl0ZW0oX2l0ZW0yKTtcblxuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KF9yZW5kZXJlZDMpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2lsbGVnYWwgc3RhdGUnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDAsIF9yZW5kZXJlZDMpO1xuICAgICAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAncmVtb3ZlJzpcbiAgICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yOCA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UoY2hhbmdlLml0ZW1zKSwgX3N0ZXA4OyAhKF9zdGVwOCA9IF9pdGVyYXRvcjgoKSkuZG9uZTspIHtcbiAgICAgICAgICB2YXIgX2l0ZW0zID0gX3N0ZXA4LnZhbHVlO1xuXG4gICAgICAgICAgdmFyIF9yZW5kZXJlZDQgPSB0aGlzLnJlbmRlckl0ZW0oX2l0ZW0zKTtcblxuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KF9yZW5kZXJlZDQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2lsbGVnYWwgc3RhdGUnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi51bnNoaWZ0KF9yZW5kZXJlZDQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdjbGVhcic6XG4gICAgICAgIHRoaXMuY2hpbGRyZW4ubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5yZW5kZXJTZXNzaW9ucyA9IG5ldyBXZWFrTWFwKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBpbXBsZW1lbnRlZCcpO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlRG9tKCk7XG4gIH07XG5cbiAgX3Byb3RvMi5yZW5kZXJJdGVtID0gZnVuY3Rpb24gcmVuZGVySXRlbShpdGVtKSB7XG4gICAgdmFyIHMgPSBjcmVhdGVSZW5kZXJTZXNzaW9uKCk7XG4gICAgdmFyIHJlbmRlcmVkID0gcmVuZGVyKGl0ZW0sIHMpO1xuXG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yOSA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2Uocy5hdHRhY2hDYWxscyksIF9zdGVwOTsgIShfc3RlcDkgPSBfaXRlcmF0b3I5KCkpLmRvbmU7KSB7XG4gICAgICB2YXIgY2IgPSBfc3RlcDkudmFsdWU7XG4gICAgICBjYigpO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyU2Vzc2lvbnMuc2V0KHJlbmRlcmVkLCBzKTtcbiAgICByZXR1cm4gcmVuZGVyZWQ7XG4gIH07XG5cbiAgcmV0dXJuIEFycmF5QXVydW1FbGVtZW50O1xufShBdXJ1bUVsZW1lbnQpO1xudmFyIFNpbmd1bGFyQXVydW1FbGVtZW50ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfQXVydW1FbGVtZW50Mikge1xuICBfaW5oZXJpdHNMb29zZShTaW5ndWxhckF1cnVtRWxlbWVudCwgX0F1cnVtRWxlbWVudDIpO1xuXG4gIGZ1bmN0aW9uIFNpbmd1bGFyQXVydW1FbGVtZW50KGRhdGFTb3VyY2UsIGFwaSkge1xuICAgIHZhciBfdGhpczQ7XG5cbiAgICBfdGhpczQgPSBfQXVydW1FbGVtZW50Mi5jYWxsKHRoaXMsIGRhdGFTb3VyY2UsIGFwaSkgfHwgdGhpcztcblxuICAgIF90aGlzNC5hcGkuY2FuY2VsbGF0aW9uVG9rZW4uYWRkQ2FuY2VsYWJsZShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX2E7XG5cbiAgICAgIHJldHVybiAoX2EgPSBfdGhpczQucmVuZGVyU2Vzc2lvbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNlc3Npb25Ub2tlbi5jYW5jZWwoKTtcbiAgICB9KTtcblxuICAgIF90aGlzNC5kYXRhU291cmNlID0gZGF0YVNvdXJjZTtcbiAgICByZXR1cm4gX3RoaXM0O1xuICB9XG5cbiAgdmFyIF9wcm90bzMgPSBTaW5ndWxhckF1cnVtRWxlbWVudC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvMy5hdHRhY2hUb0RvbSA9IGZ1bmN0aW9uIGF0dGFjaFRvRG9tKG5vZGUsIGluZGV4KSB7XG4gICAgX0F1cnVtRWxlbWVudDIucHJvdG90eXBlLmF0dGFjaFRvRG9tLmNhbGwodGhpcywgbm9kZSwgaW5kZXgpO1xuXG4gICAgdGhpcy5jb250ZW50U3RhcnRNYXJrZXIuZGF0YVNvdXJjZSA9IHRoaXMuZGF0YVNvdXJjZTtcbiAgICB0aGlzLmNvbnRlbnRFbmRNYXJrZXIuZGF0YVNvdXJjZSA9IHRoaXMuZGF0YVNvdXJjZTtcbiAgfTtcblxuICBfcHJvdG8zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihkYXRhU291cmNlKSB7XG4gICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICBkYXRhU291cmNlLmxpc3RlbkFuZFJlcGVhdChmdW5jdGlvbiAobikge1xuICAgICAgX3RoaXM1LmhhbmRsZU5ld0NvbnRlbnQobik7XG5cbiAgICAgIF90aGlzNS51cGRhdGVEb20oKTtcbiAgICB9LCB0aGlzLmFwaS5jYW5jZWxsYXRpb25Ub2tlbik7XG4gIH07XG5cbiAgX3Byb3RvMy5oYW5kbGVOZXdDb250ZW50ID0gZnVuY3Rpb24gaGFuZGxlTmV3Q29udGVudChuZXdWYWx1ZSkge1xuICAgIGlmICh0aGlzLmxhc3RWYWx1ZSA9PT0gbmV3VmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgb3B0aW1pemVkID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5jaGlsZHJlbi5sZW5ndGggPT09IDEgJiYgdGhpcy5jaGlsZHJlblswXSBpbnN0YW5jZW9mIFRleHQpIHtcbiAgICAgIHZhciB0eXBlID0gdHlwZW9mIG5ld1ZhbHVlO1xuXG4gICAgICBpZiAodHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZSA9PT0gJ2JpZ2ludCcgfHwgdHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlblswXS5ub2RlVmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgb3B0aW1pemVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIW9wdGltaXplZCkge1xuICAgICAgdGhpcy5mdWxsUmVidWlsZChuZXdWYWx1ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5sYXN0VmFsdWUgPSBuZXdWYWx1ZTtcbiAgfTtcblxuICBfcHJvdG8zLmZ1bGxSZWJ1aWxkID0gZnVuY3Rpb24gZnVsbFJlYnVpbGQobmV3VmFsdWUpIHtcbiAgICB0aGlzLmNsZWFyQ29udGVudCgpO1xuICAgIHRoaXMuZW5kU2Vzc2lvbigpO1xuICAgIHRoaXMucmVuZGVyU2Vzc2lvbiA9IGNyZWF0ZVJlbmRlclNlc3Npb24oKTtcbiAgICB2YXIgcmVuZGVyZWQgPSByZW5kZXIobmV3VmFsdWUsIHRoaXMucmVuZGVyU2Vzc2lvbik7XG5cbiAgICBpZiAocmVuZGVyZWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghQXJyYXkuaXNBcnJheShyZW5kZXJlZCkpIHtcbiAgICAgIHJlbmRlcmVkID0gW3JlbmRlcmVkXTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaXRlcmF0b3IxMCA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UocmVuZGVyZWQpLCBfc3RlcDEwOyAhKF9zdGVwMTAgPSBfaXRlcmF0b3IxMCgpKS5kb25lOykge1xuICAgICAgdmFyIGl0ZW0gPSBfc3RlcDEwLnZhbHVlO1xuXG4gICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIEF1cnVtRWxlbWVudCkge1xuICAgICAgICBpdGVtLmF0dGFjaFRvRG9tKHRoaXMuaG9zdE5vZGUsIHRoaXMuZ2V0TGFzdEluZGV4KCkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pdGVyYXRvcjExID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZSh0aGlzLnJlbmRlclNlc3Npb24uYXR0YWNoQ2FsbHMpLCBfc3RlcDExOyAhKF9zdGVwMTEgPSBfaXRlcmF0b3IxMSgpKS5kb25lOykge1xuICAgICAgdmFyIGNiID0gX3N0ZXAxMS52YWx1ZTtcbiAgICAgIGNiKCk7XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkocmVuZGVyZWQpKSB7XG4gICAgICB0aGlzLmNoaWxkcmVuID0gcmVuZGVyZWQ7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90bzMuZW5kU2Vzc2lvbiA9IGZ1bmN0aW9uIGVuZFNlc3Npb24oKSB7XG4gICAgaWYgKHRoaXMucmVuZGVyU2Vzc2lvbikge1xuICAgICAgdGhpcy5yZW5kZXJTZXNzaW9uLnNlc3Npb25Ub2tlbi5jYW5jZWwoKTtcbiAgICAgIHRoaXMucmVuZGVyU2Vzc2lvbiA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFNpbmd1bGFyQXVydW1FbGVtZW50O1xufShBdXJ1bUVsZW1lbnQpO1xuXG52YXIgZGVmYXVsdEV2ZW50cyA9IHtcbiAgZHJhZzogJ29uRHJhZycsXG4gIGRyYWdzdGFydDogJ29uRHJhZ1N0YXJ0JyxcbiAgZHJhZ2VuZDogJ29uRHJhZ0VuZCcsXG4gIGRyYWdleGl0OiAnb25EcmFnRXhpdCcsXG4gIGRyYWdvdmVyOiAnb25EcmFnT3ZlcicsXG4gIGRyYWdlbnRlcjogJ29uRHJhZ0VudGVyJyxcbiAgZHJhZ2xlYXZlOiAnb25EcmFnTGVhdmUnLFxuICBibHVyOiAnb25CbHVyJyxcbiAgZm9jdXM6ICdvbkZvY3VzJyxcbiAgY2xpY2s6ICdvbkNsaWNrJyxcbiAgZGJsY2xpY2s6ICdvbkRibENsaWNrJyxcbiAga2V5ZG93bjogJ29uS2V5RG93bicsXG4gIGtleWhpdDogJ29uS2V5SGl0JyxcbiAga2V5dXA6ICdvbktleVVwJyxcbiAgbW91c2Vkb3duOiAnb25Nb3VzZURvd24nLFxuICBtb3VzZXVwOiAnb25Nb3VzZVVwJyxcbiAgbW91c2Vtb3ZlOiAnb25Nb3VzZU1vdmUnLFxuICBtb3VzZWVudGVyOiAnb25Nb3VzZUVudGVyJyxcbiAgbW91c2VsZWF2ZTogJ29uTW91c2VMZWF2ZScsXG4gIG1vdXNld2hlZWw6ICdvbk1vdXNlV2hlZWwnLFxuICBsb2FkOiAnb25Mb2FkJyxcbiAgZXJyb3I6ICdvbkVycm9yJ1xufTtcbnZhciBkZWZhdWx0QXR0cmlidXRlcyA9IFsnaWQnLCAnbmFtZScsICdkcmFnZ2FibGUnLCAndGFiaW5kZXgnLCAnc3R5bGUnLCAncm9sZScsICdjb250ZW50RWRpdGFibGUnLCAnc2xvdCcsICd0aXRsZSddO1xuZnVuY3Rpb24gRG9tTm9kZUNyZWF0b3Iobm9kZU5hbWUsIGV4dHJhQXR0cmlidXRlcywgZXh0cmFFdmVudHMsIGV4dHJhTG9naWMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcywgY2hpbGRyZW4sIGFwaSkge1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlTmFtZSk7XG5cbiAgICBpZiAocHJvcHMpIHtcbiAgICAgIHByb2Nlc3NIVE1MTm9kZShub2RlLCBwcm9wcywgYXBpLmNhbmNlbGxhdGlvblRva2VuLCBleHRyYUF0dHJpYnV0ZXMsIGV4dHJhRXZlbnRzKTtcbiAgICB9XG5cbiAgICB2YXIgcmVuZGVyZWRDaGlsZHJlbiA9IHJlbmRlcihjaGlsZHJlbiwgYXBpLnJlbmRlclNlc3Npb24pO1xuICAgIGNvbm5lY3RDaGlsZHJlbihub2RlLCByZW5kZXJlZENoaWxkcmVuKTtcblxuICAgIGlmIChwcm9wcy5vbkF0dGFjaCkge1xuICAgICAgYXBpLm9uQXR0YWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHByb3BzLm9uQXR0YWNoKG5vZGUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHByb3BzLm9uRGV0YWNoKSB7XG4gICAgICBhcGkub25EZXRhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAobm9kZS5pc0Nvbm5lY3RlZCkge1xuICAgICAgICAgIG5vZGUucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3BzLm9uRGV0YWNoKG5vZGUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXh0cmFMb2dpYyA9PT0gbnVsbCB8fCBleHRyYUxvZ2ljID09PSB2b2lkIDAgPyB2b2lkIDAgOiBleHRyYUxvZ2ljKG5vZGUsIHByb3BzLCBhcGkuY2FuY2VsbGF0aW9uVG9rZW4pO1xuICAgIHJldHVybiBub2RlO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjb25uZWN0Q2hpbGRyZW4odGFyZ2V0LCBjaGlsZHJlbikge1xuICBpZiAoY2hpbGRyZW4gPT09IHVuZGVmaW5lZCB8fCBjaGlsZHJlbiA9PT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgIGZvciAodmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UoY2hpbGRyZW4pLCBfc3RlcDsgIShfc3RlcCA9IF9pdGVyYXRvcigpKS5kb25lOykge1xuICAgICAgdmFyIGNoaWxkID0gX3N0ZXAudmFsdWU7XG4gICAgICBjb25uZWN0Q2hpbGRyZW4odGFyZ2V0LCBjaGlsZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGNoaWxkcmVuIGluc3RhbmNlb2YgQXVydW1FbGVtZW50KSB7XG4gICAgY2hpbGRyZW4uYXR0YWNoVG9Eb20odGFyZ2V0LCB0YXJnZXQuY2hpbGROb2Rlcy5sZW5ndGgpO1xuICB9IGVsc2UgaWYgKGNoaWxkcmVuIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgfHwgY2hpbGRyZW4gaW5zdGFuY2VvZiBUZXh0KSB7XG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKGNoaWxkcmVuKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIGNoaWxkIHR5cGUgcGFzc2VkIHRvIERPTSBOb2RlOiBcIiArIGNoaWxkcmVuKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcm9jZXNzSFRNTE5vZGUobm9kZSwgcHJvcHMsIGNsZWFuVXAsIGV4dHJhQXR0cmlidXRlcywgZXh0cmFFdmVudHMpIHtcbiAgY3JlYXRlRXZlbnRIYW5kbGVycyhub2RlLCBkZWZhdWx0RXZlbnRzLCBwcm9wcyk7XG5cbiAgaWYgKGV4dHJhRXZlbnRzKSB7XG4gICAgY3JlYXRlRXZlbnRIYW5kbGVycyhub2RlLCBleHRyYUV2ZW50cywgcHJvcHMpO1xuICB9XG5cbiAgdmFyIGRhdGFQcm9wcyA9IE9iamVjdC5rZXlzKHByb3BzKS5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICByZXR1cm4gZS5pbmNsdWRlcygnLScpO1xuICB9KTtcbiAgYmluZFByb3BzKG5vZGUsIGRlZmF1bHRBdHRyaWJ1dGVzLCBwcm9wcywgZGF0YVByb3BzKTtcblxuICBpZiAoZXh0cmFBdHRyaWJ1dGVzKSB7XG4gICAgYmluZFByb3BzKG5vZGUsIGV4dHJhQXR0cmlidXRlcywgcHJvcHMpO1xuICB9XG5cbiAgaWYgKHByb3BzW1wiY2xhc3NcIl0pIHtcbiAgICBoYW5kbGVDbGFzcyhub2RlLCBwcm9wc1tcImNsYXNzXCJdLCBjbGVhblVwKTtcbiAgfVxufVxuZnVuY3Rpb24gY3JlYXRlRXZlbnRIYW5kbGVycyhub2RlLCBldmVudHMsIHByb3BzKSB7XG4gIHZhciBfbG9vcCA9IGZ1bmN0aW9uIF9sb29wKGtleSkge1xuICAgIGlmIChwcm9wc1tldmVudHNba2V5XV0pIHtcbiAgICAgIGlmIChwcm9wc1tldmVudHNba2V5XV0gaW5zdGFuY2VvZiBEYXRhU291cmNlKSB7XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihrZXksIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BzW2V2ZW50c1trZXldXS51cGRhdGUoZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChwcm9wc1tldmVudHNba2V5XV0gaW5zdGFuY2VvZiBEdXBsZXhEYXRhU291cmNlKSB7XG4gICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihrZXksIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BzW2V2ZW50c1trZXldXS51cGRhdGVEb3duc3RyZWFtKGUpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHByb3BzW2V2ZW50c1trZXldXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoa2V5LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHJldHVybiBwcm9wc1tldmVudHNba2V5XV0oZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBmb3IgKHZhciBrZXkgaW4gZXZlbnRzKSB7XG4gICAgX2xvb3Aoa2V5KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBiaW5kUHJvcHMobm9kZSwga2V5cywgcHJvcHMsIGR5bmFtaWNQcm9wcykge1xuICBmb3IgKHZhciBfaXRlcmF0b3IyID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShrZXlzKSwgX3N0ZXAyOyAhKF9zdGVwMiA9IF9pdGVyYXRvcjIoKSkuZG9uZTspIHtcbiAgICB2YXIgX2tleSA9IF9zdGVwMi52YWx1ZTtcblxuICAgIGlmIChwcm9wc1tfa2V5XSkge1xuICAgICAgYXNzaWduU3RyaW5nU291cmNlVG9BdHRyaWJ1dGUobm9kZSwgcHJvcHNbX2tleV0sIF9rZXkpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChkeW5hbWljUHJvcHMpIHtcbiAgICBmb3IgKHZhciBfaXRlcmF0b3IzID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShkeW5hbWljUHJvcHMpLCBfc3RlcDM7ICEoX3N0ZXAzID0gX2l0ZXJhdG9yMygpKS5kb25lOykge1xuICAgICAgdmFyIGtleSA9IF9zdGVwMy52YWx1ZTtcblxuICAgICAgaWYgKHByb3BzW2tleV0pIHtcbiAgICAgICAgYXNzaWduU3RyaW5nU291cmNlVG9BdHRyaWJ1dGUobm9kZSwgcHJvcHNba2V5XSwga2V5KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzaWduU3RyaW5nU291cmNlVG9BdHRyaWJ1dGUobm9kZSwgZGF0YSwga2V5KSB7XG4gIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICBub2RlLnNldEF0dHJpYnV0ZShrZXksIGRhdGEpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnYm9vbGVhbicpIHtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoa2V5LCAnJyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGRhdGEgaW5zdGFuY2VvZiBEYXRhU291cmNlIHx8IGRhdGEgaW5zdGFuY2VvZiBEdXBsZXhEYXRhU291cmNlKSB7XG4gICAgaWYgKHR5cGVvZiBkYXRhLnZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUoa2V5LCBkYXRhLnZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkYXRhLnZhbHVlID09PSAnYm9vbGVhbicpIHtcbiAgICAgIGlmIChkYXRhLnZhbHVlKSB7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKGtleSwgJycpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGRhdGEudW5pcXVlKCkubGlzdGVuKGZ1bmN0aW9uICh2KSB7XG4gICAgICBpZiAodHlwZW9mIHYgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKGtleSwgdik7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2ID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgaWYgKHYpIHtcbiAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShrZXksICcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShrZXkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdBdHRyaWJ1dGVzIG9ubHkgc3VwcG9ydCB0eXBlcyBib29sZWFuLCBzdHJpbmcsIG51bWJlciBhbmQgZGF0YSBzb3VyY2VzJyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2xhc3Mobm9kZSwgZGF0YSwgY2xlYW5VcCkge1xuICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgbm9kZS5jbGFzc05hbWUgPSBkYXRhO1xuICB9IGVsc2UgaWYgKGRhdGEgaW5zdGFuY2VvZiBEYXRhU291cmNlIHx8IGRhdGEgaW5zdGFuY2VvZiBEdXBsZXhEYXRhU291cmNlKSB7XG4gICAgaWYgKGRhdGEudmFsdWUpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEudmFsdWUpKSB7XG4gICAgICAgIG5vZGUuY2xhc3NOYW1lID0gZGF0YS52YWx1ZS5qb2luKCcgJyk7XG4gICAgICAgIGRhdGEudW5pcXVlKGNsZWFuVXApLmxpc3RlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbm9kZS5jbGFzc05hbWUgPSBkYXRhLnZhbHVlLmpvaW4oJyAnKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBub2RlLmNsYXNzTmFtZSA9IGRhdGEudmFsdWU7XG4gICAgICAgIGRhdGEudW5pcXVlKGNsZWFuVXApLmxpc3RlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgbm9kZS5jbGFzc05hbWUgPSBkYXRhLnZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBkYXRhLnVuaXF1ZShjbGVhblVwKS5saXN0ZW4oZnVuY3Rpb24gKHYpIHtcbiAgICAgIHJldHVybiBub2RlLmNsYXNzTmFtZSA9IHY7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHZhbHVlID0gZGF0YS5yZWR1Y2UoZnVuY3Rpb24gKHAsIGMpIHtcbiAgICAgIGlmICh0eXBlb2YgYyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHAgKyBcIiBcIiArIGM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoYy52YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBwICsgXCIgXCIgKyBjLnZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgJycpO1xuICAgIG5vZGUuY2xhc3NOYW1lID0gdmFsdWU7XG5cbiAgICBmb3IgKHZhciBfaXRlcmF0b3I0ID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShkYXRhKSwgX3N0ZXA0OyAhKF9zdGVwNCA9IF9pdGVyYXRvcjQoKSkuZG9uZTspIHtcbiAgICAgIHZhciBpID0gX3N0ZXA0LnZhbHVlO1xuXG4gICAgICBpZiAoaSBpbnN0YW5jZW9mIERhdGFTb3VyY2UpIHtcbiAgICAgICAgaS51bmlxdWUoY2xlYW5VcCkubGlzdGVuKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgdmFyIHZhbHVlID0gZGF0YS5yZWR1Y2UoZnVuY3Rpb24gKHAsIGMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHAgKyBcIiBcIiArIGM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoYy52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwICsgXCIgXCIgKyBjLnZhbHVlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgJycpO1xuICAgICAgICAgIG5vZGUuY2xhc3NOYW1lID0gdmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgaW5wdXRFdmVudHMgPSB7XG4gIGlucHV0OiAnb25JbnB1dCcsXG4gIGNoYW5nZTogJ29uQ2hhbmdlJ1xufTtcbnZhciBpbnB1dFByb3BzID0gWydwbGFjZWhvbGRlcicsICdyZWFkb25seScsICdkaXNhYmxlZCcsICdhY2NlcHQnLCAnYWx0JywgJ2F1dG9jb21wbGV0ZScsICdhdXRvZm9jdXMnLCAnY2hlY2tlZCcsICdkZWZhdWx0Q2hlY2tlZCcsICdmb3JtQWN0aW9uJywgJ2Zvcm1FbmN0eXBlJywgJ2Zvcm1NZXRob2QnLCAnZm9ybU5vVmFsaWRhdGUnLCAnZm9ybVRhcmdldCcsICdtYXgnLCAnbWF4TGVuZ3RoJywgJ21pbicsICdtaW5MZW5ndGgnLCAncGF0dGVybicsICdtdWx0aXBsZScsICdyZXF1aXJlZCcsICd0eXBlJ107XG52YXIgSW5wdXQgPSBEb21Ob2RlQ3JlYXRvcignaW5wdXQnLCBpbnB1dFByb3BzLCBpbnB1dEV2ZW50cywgZnVuY3Rpb24gKG5vZGUsIHByb3BzLCBjbGVhblVwKSB7XG4gIHZhciBpbnB1dCA9IG5vZGU7XG5cbiAgaWYgKHByb3BzLnZhbHVlKSB7XG4gICAgaWYgKHByb3BzLnZhbHVlIGluc3RhbmNlb2YgRGF0YVNvdXJjZSkge1xuICAgICAgcHJvcHMudmFsdWUubGlzdGVuQW5kUmVwZWF0KGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGlucHV0LnZhbHVlID0gdjtcbiAgICAgIH0sIGNsZWFuVXApO1xuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHByb3BzLnZhbHVlLnVwZGF0ZShpbnB1dC52YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHByb3BzLnZhbHVlIGluc3RhbmNlb2YgRHVwbGV4RGF0YVNvdXJjZSkge1xuICAgICAgcHJvcHMudmFsdWUubGlzdGVuQW5kUmVwZWF0KGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGlucHV0LnZhbHVlID0gdjtcbiAgICAgIH0sIGNsZWFuVXApO1xuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHByb3BzLnZhbHVlLnVwZGF0ZVVwc3RyZWFtKGlucHV0LnZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnB1dC52YWx1ZSA9IHByb3BzLnZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwcm9wcy5jaGVja2VkKSB7XG4gICAgaWYgKHByb3BzLmNoZWNrZWQgaW5zdGFuY2VvZiBEYXRhU291cmNlKSB7XG4gICAgICBwcm9wcy5jaGVja2VkLmxpc3RlbkFuZFJlcGVhdChmdW5jdGlvbiAodikge1xuICAgICAgICBpbnB1dC5jaGVja2VkID0gdjtcbiAgICAgIH0sIGNsZWFuVXApO1xuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBwcm9wcy5jaGVja2VkLnVwZGF0ZShpbnB1dC5jaGVja2VkKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAocHJvcHMuY2hlY2tlZCBpbnN0YW5jZW9mIER1cGxleERhdGFTb3VyY2UpIHtcbiAgICAgIHByb3BzLmNoZWNrZWQubGlzdGVuQW5kUmVwZWF0KGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIGlucHV0LmNoZWNrZWQgPSB2O1xuICAgICAgfSwgY2xlYW5VcCk7XG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHByb3BzLmNoZWNrZWQudXBkYXRlVXBzdHJlYW0oaW5wdXQuY2hlY2tlZCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgaW5wdXQuY2hlY2tlZCA9IHByb3BzLmNoZWNrZWQ7XG4gICAgfVxuICB9XG59KTtcblxudmFyIHNlbGVjdEV2ZW50cyA9IHtcbiAgY2hhbmdlOiAnb25DaGFuZ2UnXG59O1xudmFyIFNlbGVjdCA9IERvbU5vZGVDcmVhdG9yKCdzZWxlY3QnLCB1bmRlZmluZWQsIHNlbGVjdEV2ZW50cywgZnVuY3Rpb24gKG5vZGUsIHByb3BzLCBjbGVhblVwKSB7XG4gIHZhciBzZWxlY3QgPSBub2RlO1xuXG4gIGlmIChwcm9wcy52YWx1ZSkge1xuICAgIGlmIChwcm9wcy52YWx1ZSBpbnN0YW5jZW9mIERhdGFTb3VyY2UpIHtcbiAgICAgIHByb3BzLnZhbHVlLmxpc3RlbkFuZFJlcGVhdChmdW5jdGlvbiAodikge1xuICAgICAgICBzZWxlY3QudmFsdWUgPSB2O1xuICAgICAgfSwgY2xlYW5VcCk7XG4gICAgICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBwcm9wcy52YWx1ZS51cGRhdGUoc2VsZWN0LnZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAocHJvcHMudmFsdWUgaW5zdGFuY2VvZiBEdXBsZXhEYXRhU291cmNlKSB7XG4gICAgICBwcm9wcy52YWx1ZS5saXN0ZW5BbmRSZXBlYXQoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgc2VsZWN0LnZhbHVlID0gdjtcbiAgICAgIH0sIGNsZWFuVXApO1xuICAgICAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcHJvcHMudmFsdWUudXBkYXRlVXBzdHJlYW0oc2VsZWN0LnZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZWxlY3QudmFsdWUgPSBwcm9wcy52YWx1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAocHJvcHMuc2VsZWN0ZWRJbmRleCkge1xuICAgIGlmIChwcm9wcy5zZWxlY3RlZEluZGV4IGluc3RhbmNlb2YgRGF0YVNvdXJjZSkge1xuICAgICAgcHJvcHMuc2VsZWN0ZWRJbmRleC5saXN0ZW5BbmRSZXBlYXQoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgc2VsZWN0LnNlbGVjdGVkSW5kZXggPSB2O1xuICAgICAgfSwgY2xlYW5VcCk7XG4gICAgICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBwcm9wcy5zZWxlY3RlZEluZGV4LnVwZGF0ZShzZWxlY3Quc2VsZWN0ZWRJbmRleCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHByb3BzLnNlbGVjdGVkSW5kZXggaW5zdGFuY2VvZiBEdXBsZXhEYXRhU291cmNlKSB7XG4gICAgICBwcm9wcy5zZWxlY3RlZEluZGV4Lmxpc3RlbkFuZFJlcGVhdChmdW5jdGlvbiAodikge1xuICAgICAgICBzZWxlY3Quc2VsZWN0ZWRJbmRleCA9IHY7XG4gICAgICB9LCBjbGVhblVwKTtcbiAgICAgIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHByb3BzLnNlbGVjdGVkSW5kZXgudXBkYXRlVXBzdHJlYW0oc2VsZWN0LnNlbGVjdGVkSW5kZXgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbGVjdC5zZWxlY3RlZEluZGV4ID0gcHJvcHMuc2VsZWN0ZWRJbmRleDtcbiAgICB9XG4gIH1cbn0pO1xuXG52YXIgQ29kZSA9IERvbU5vZGVDcmVhdG9yKCdjb2RlJyk7XG52YXIgRGl2ID0gRG9tTm9kZUNyZWF0b3IoJ2RpdicpO1xudmFyIEEgPSBEb21Ob2RlQ3JlYXRvcignYScsIFsnaHJlZicsICd0YXJnZXQnXSk7XG52YXIgQWJiciA9IERvbU5vZGVDcmVhdG9yKCdhYmJyJyk7XG52YXIgSDEgPSBEb21Ob2RlQ3JlYXRvcignaDEnKTtcbnZhciBIMiA9IERvbU5vZGVDcmVhdG9yKCdoMicpO1xudmFyIEgzID0gRG9tTm9kZUNyZWF0b3IoJ2gzJyk7XG52YXIgSDQgPSBEb21Ob2RlQ3JlYXRvcignaDQnKTtcbnZhciBINSA9IERvbU5vZGVDcmVhdG9yKCdoNScpO1xudmFyIEg2ID0gRG9tTm9kZUNyZWF0b3IoJ2g2Jyk7XG52YXIgQXJlYSA9IERvbU5vZGVDcmVhdG9yKCdhcmVhJywgWydhbHQnLCAnY29vcnMnXSk7XG52YXIgQXJ0aWNsZSA9IERvbU5vZGVDcmVhdG9yKCdhcnRpY2xlJyk7XG52YXIgQXNpZGUgPSBEb21Ob2RlQ3JlYXRvcignYXNpZGUnKTtcbnZhciBTcGFuID0gRG9tTm9kZUNyZWF0b3IoJ3NwYW4nKTtcbnZhciBOb1NjcmlwdCA9IERvbU5vZGVDcmVhdG9yKCdub3NjcmlwdCcpO1xudmFyIFZpZGVvID0gRG9tTm9kZUNyZWF0b3IoJ3ZpZGVvJywgWydjb250cm9scycsICdhdXRvcGxheScsICdsb29wJywgJ211dGVkJywgJ3ByZWxvYWQnLCAnc3JjJywgJ3Bvc3RlcicsICd3aWR0aCcsICdoZWlnaHQnXSk7XG52YXIgVWwgPSBEb21Ob2RlQ3JlYXRvcigndWwnKTtcbnZhciBPbCA9IERvbU5vZGVDcmVhdG9yKCdvbCcpO1xudmFyIExpID0gRG9tTm9kZUNyZWF0b3IoJ2xpJyk7XG52YXIgVHIgPSBEb21Ob2RlQ3JlYXRvcigndHInKTtcbnZhciBCID0gRG9tTm9kZUNyZWF0b3IoJ2InKTtcbnZhciBUaXRsZSA9IERvbU5vZGVDcmVhdG9yKCd0aXRsZScpO1xudmFyIFN1bW1hcnkgPSBEb21Ob2RlQ3JlYXRvcignc3VtbWFyeScpO1xudmFyIFRIZWFkID0gRG9tTm9kZUNyZWF0b3IoJ3RoZWFkJyk7XG52YXIgVGVtcGxhdGUgPSBEb21Ob2RlQ3JlYXRvcigndGVtcGxhdGUnKTtcbnZhciBRID0gRG9tTm9kZUNyZWF0b3IoJ3EnKTtcbnZhciBQcmUgPSBEb21Ob2RlQ3JlYXRvcigncHJlJyk7XG52YXIgUCA9IERvbU5vZGVDcmVhdG9yKCdwJyk7XG52YXIgSHIgPSBEb21Ob2RlQ3JlYXRvcignaHInKTtcbnZhciBBdWRpbyA9IERvbU5vZGVDcmVhdG9yKCdhdWRpbycsIFsnY29udHJvbHMnLCAnYXV0b3BsYXknLCAnbG9vcCcsICdtdXRlZCcsICdwcmVsb2FkJywgJ3NyYyddKTtcbnZhciBCciA9IERvbU5vZGVDcmVhdG9yKCdicicpO1xudmFyIEJ1dHRvbiA9IERvbU5vZGVDcmVhdG9yKCdidXR0b24nLCBbJ2Rpc2FibGVkJ10pO1xudmFyIENhbnZhcyA9IERvbU5vZGVDcmVhdG9yKCdjYW52YXMnLCBbJ3dpZHRoJywgJ2hlaWdodCddKTtcbnZhciBEYXRhID0gRG9tTm9kZUNyZWF0b3IoJ2RhdGEnLCBbJ3ZhbHVlJ10pO1xudmFyIERldGFpbHMgPSBEb21Ob2RlQ3JlYXRvcignZGV0YWlscycpO1xudmFyIEVtID0gRG9tTm9kZUNyZWF0b3IoJ2VtJyk7XG52YXIgRm9vdGVyID0gRG9tTm9kZUNyZWF0b3IoJ2Zvb3RlcicpO1xudmFyIEZvcm0gPSBEb21Ob2RlQ3JlYXRvcignZm9ybScpO1xudmFyIEhlYWQgPSBEb21Ob2RlQ3JlYXRvcignaGVhZCcpO1xudmFyIEhlYWRlciA9IERvbU5vZGVDcmVhdG9yKCdoZWFkZXInKTtcbnZhciBIZWFkaW5nID0gRG9tTm9kZUNyZWF0b3IoJ2hlYWRpbmcnKTtcbnZhciBJID0gRG9tTm9kZUNyZWF0b3IoJ2knKTtcbnZhciBJRnJhbWUgPSBEb21Ob2RlQ3JlYXRvcignaWZyYW1lJywgWydzcmMnLCAnc3JjZG9jJywgJ3dpZHRoJywgJ2hlaWdodCcsICdhbGxvdycsICdhbGxvd0Z1bGxzY3JlZW4nLCAnYWxsb3dQYXltZW50UmVxdWVzdCddKTtcbnZhciBJbWcgPSBEb21Ob2RlQ3JlYXRvcignaW1nJywgWydzcmMnLCAnYWx0JywgJ3dpZHRoJywgJ2hlaWdodCcsICdyZWZlcnJlclBvbGljeScsICdzaXplcycsICdzcmNzZXQnLCAndXNlTWFwJ10pO1xudmFyIExhYmVsID0gRG9tTm9kZUNyZWF0b3IoJ2xhYmVsJywgWydmb3InXSk7XG52YXIgTGluayA9IERvbU5vZGVDcmVhdG9yKCdsaW5rJywgWydocmVmJywgJ3JlbCcsICdtZWRpYScsICdhcycsICdkaXNhYmxlZCcsICd0eXBlJ10pO1xudmFyIE5hdiA9IERvbU5vZGVDcmVhdG9yKCduYXYnKTtcbnZhciBTdWIgPSBEb21Ob2RlQ3JlYXRvcignc3ViJyk7XG52YXIgU3VwID0gRG9tTm9kZUNyZWF0b3IoJ3N1cCcpO1xudmFyIFRhYmxlID0gRG9tTm9kZUNyZWF0b3IoJ3RhYmxlJyk7XG52YXIgVEJvZHkgPSBEb21Ob2RlQ3JlYXRvcigndGJvZHknKTtcbnZhciBURm9vdCA9IERvbU5vZGVDcmVhdG9yKCd0Zm9vdCcpO1xudmFyIFRkID0gRG9tTm9kZUNyZWF0b3IoJ3RkJyk7XG52YXIgVGggPSBEb21Ob2RlQ3JlYXRvcigndGgnKTtcbnZhciBUaW1lID0gRG9tTm9kZUNyZWF0b3IoJ3RpbWUnLCBbJ2RhdGV0aW1lJ10pO1xudmFyIFN0eWxlID0gRG9tTm9kZUNyZWF0b3IoJ3N0eWxlJywgWydtZWRpYSddKTtcbnZhciBTb3VyY2UgPSBEb21Ob2RlQ3JlYXRvcignc291cmNlJywgWydzcmMnLCAnc3JjU2V0JywgJ21lZGlhJywgJ3NpemVzJywgJ3R5cGUnXSk7XG52YXIgU2NyaXB0ID0gRG9tTm9kZUNyZWF0b3IoJ3NjcmlwdCcsIFsnc3JjJywgJ2FzeW5jJywgJ2RlZmVyJywgJ2ludGVncml0eScsICdub01vZHVsZScsICd0eXBlJ10pO1xudmFyIFN2ZyA9IERvbU5vZGVDcmVhdG9yKCdzdmcnLCBbJ3dpZHRoJywgJ2hlaWdodCddKTtcbnZhciBQcm9ncmVzcyA9IERvbU5vZGVDcmVhdG9yKCdwcm9ncmVzcycsIFsnbWF4JywgJ3ZhbHVlJ10pO1xudmFyIE9wdGlvbiA9IERvbU5vZGVDcmVhdG9yKCdvcHRpb24nLCBbJ3ZhbHVlJ10pO1xudmFyIFNsb3QgPSBEb21Ob2RlQ3JlYXRvcignc2xvdCcsIFsnbmFtZSddKTtcblxudmFyIHRleHRBcmVhRXZlbnRzID0ge1xuICBpbnB1dDogJ29uSW5wdXQnLFxuICBjaGFuZ2U6ICdvbkNoYW5nZSdcbn07XG52YXIgdGV4dEFyZWFQcm9wcyA9IFsncGxhY2Vob2xkZXInLCAncmVhZG9ubHknLCAnZGlzYWJsZWQnLCAncm93cycsICd3cmFwJywgJ2F1dG9jb21wbGV0ZScsICdhdXRvZm9jdXMnLCAnbWF4JywgJ21heExlbmd0aCcsICdtaW4nLCAnbWluTGVuZ3RoJywgJ3JlcXVpcmVkJywgJ3R5cGUnXTtcbnZhciBUZXh0QXJlYSA9IERvbU5vZGVDcmVhdG9yKCd0ZXh0QXJlYScsIHRleHRBcmVhUHJvcHMsIHRleHRBcmVhRXZlbnRzLCBmdW5jdGlvbiAobm9kZSwgcHJvcHMsIGNsZWFuVXApIHtcbiAgdmFyIHRleHRBcmVhID0gbm9kZTtcblxuICBpZiAocHJvcHMudmFsdWUpIHtcbiAgICBpZiAocHJvcHMudmFsdWUgaW5zdGFuY2VvZiBEYXRhU291cmNlKSB7XG4gICAgICBwcm9wcy52YWx1ZS5saXN0ZW5BbmRSZXBlYXQoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgdGV4dEFyZWEudmFsdWUgPSB2O1xuICAgICAgfSwgY2xlYW5VcCk7XG4gICAgICB0ZXh0QXJlYS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcHJvcHMudmFsdWUudXBkYXRlKHRleHRBcmVhLnZhbHVlKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAocHJvcHMudmFsdWUgaW5zdGFuY2VvZiBEdXBsZXhEYXRhU291cmNlKSB7XG4gICAgICBwcm9wcy52YWx1ZS5saXN0ZW5BbmRSZXBlYXQoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgdGV4dEFyZWEudmFsdWUgPSB2O1xuICAgICAgfSwgY2xlYW5VcCk7XG4gICAgICB0ZXh0QXJlYS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcHJvcHMudmFsdWUudXBkYXRlVXBzdHJlYW0odGV4dEFyZWEudmFsdWUpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRleHRBcmVhLnZhbHVlID0gcHJvcHMudmFsdWU7XG4gICAgfVxuICB9XG59KTtcblxudmFyIG5vZGVNYXAgPSB7XG4gIGJ1dHRvbjogQnV0dG9uLFxuICBjb2RlOiBDb2RlLFxuICBocjogSHIsXG4gIGRpdjogRGl2LFxuICBpbnB1dDogSW5wdXQsXG4gIGxpOiBMaSxcbiAgc3BhbjogU3BhbixcbiAgc3R5bGU6IFN0eWxlLFxuICB1bDogVWwsXG4gIHA6IFAsXG4gIGltZzogSW1nLFxuICBsaW5rOiBMaW5rLFxuICBjYW52YXM6IENhbnZhcyxcbiAgYTogQSxcbiAgYXJ0aWNsZTogQXJ0aWNsZSxcbiAgYnI6IEJyLFxuICBmb3JtOiBGb3JtLFxuICBsYWJlbDogTGFiZWwsXG4gIG9sOiBPbCxcbiAgcHJlOiBQcmUsXG4gIHByb2dyZXNzOiBQcm9ncmVzcyxcbiAgdGFibGU6IFRhYmxlLFxuICB0ZDogVGQsXG4gIHRyOiBUcixcbiAgdGg6IFRoLFxuICB0ZXh0YXJlYTogVGV4dEFyZWEsXG4gIGgxOiBIMSxcbiAgaDI6IEgyLFxuICBoMzogSDMsXG4gIGg0OiBINCxcbiAgaDU6IEg1LFxuICBoNjogSDYsXG4gIGhlYWQ6IEhlYWQsXG4gIGhlYWRlcjogSGVhZGVyLFxuICBmb290ZXI6IEZvb3RlcixcbiAgbmF2OiBOYXYsXG4gIGI6IEIsXG4gIGk6IEksXG4gIHNjcmlwdDogU2NyaXB0LFxuICBhYmJyOiBBYmJyLFxuICBhcmVhOiBBcmVhLFxuICBhc2lkZTogQXNpZGUsXG4gIGF1ZGlvOiBBdWRpbyxcbiAgZW06IEVtLFxuICBoZWFkaW5nOiBIZWFkaW5nLFxuICBpZnJhbWU6IElGcmFtZSxcbiAgbm9zY3JpcHQ6IE5vU2NyaXB0LFxuICBvcHRpb246IE9wdGlvbixcbiAgcTogUSxcbiAgc2VsZWN0OiBTZWxlY3QsXG4gIHNvdXJjZTogU291cmNlLFxuICB0aXRsZTogVGl0bGUsXG4gIHZpZGVvOiBWaWRlbyxcbiAgdGJvZHk6IFRCb2R5LFxuICB0Zm9vdDogVEZvb3QsXG4gIHRoZWFkOiBUSGVhZCxcbiAgc3VtbWFyeTogU3VtbWFyeSxcbiAgZGV0YWlsczogRGV0YWlscyxcbiAgc3ViOiBTdWIsXG4gIHN1cDogU3VwLFxuICBzdmc6IFN2ZyxcbiAgZGF0YTogRGF0YSxcbiAgdGltZTogVGltZSxcbiAgdGVtcGxhdGU6IFRlbXBsYXRlLFxuICBzbG90OiBTbG90XG59O1xudmFyIEF1cnVtID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQXVydW0oKSB7fVxuXG4gIEF1cnVtLmF0dGFjaCA9IGZ1bmN0aW9uIGF0dGFjaChhdXJ1bVJlbmRlcmFibGUsIGRvbSkge1xuICAgIHZhciBzZXNzaW9uID0gY3JlYXRlUmVuZGVyU2Vzc2lvbigpO1xuICAgIHZhciBjb250ZW50ID0gcmVuZGVyKGF1cnVtUmVuZGVyYWJsZSwgc2Vzc2lvbik7XG5cbiAgICBpZiAoY29udGVudCBpbnN0YW5jZW9mIEF1cnVtRWxlbWVudCkge1xuICAgICAgY29udGVudC5hdHRhY2hUb0RvbShkb20sIGRvbS5jaGlsZE5vZGVzLmxlbmd0aCk7XG4gICAgICBzZXNzaW9uLnNlc3Npb25Ub2tlbi5hZGRDYW5jZWxhYmxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQuZGlzcG9zZSgpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNvbnRlbnQpKSB7XG4gICAgICB2YXIgcm9vdCA9IG5ldyBBcnJheUF1cnVtRWxlbWVudChuZXcgQXJyYXlEYXRhU291cmNlKGNvbnRlbnQpLCBjcmVhdGVBUEkoc2Vzc2lvbikpO1xuICAgICAgc2Vzc2lvbi5zZXNzaW9uVG9rZW4uYWRkQ2FuY2VsYWJsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByb290LmRpc3Bvc2UoKTtcbiAgICAgIH0pO1xuICAgICAgcm9vdC5hdHRhY2hUb0RvbShkb20sIGRvbS5jaGlsZE5vZGVzLmxlbmd0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgIHNlc3Npb24uc2Vzc2lvblRva2VuLmFkZENhbmNlbGFibGUoZnVuY3Rpb24gKCkge1xuICAgICAgICBkb20ucmVtb3ZlQ2hpbGQoY29udGVudCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gc2Vzc2lvbi5hdHRhY2hDYWxscy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgc2Vzc2lvbi5hdHRhY2hDYWxsc1tpXSgpO1xuICAgIH1cblxuICAgIHJldHVybiBzZXNzaW9uLnNlc3Npb25Ub2tlbjtcbiAgfTtcblxuICBBdXJ1bS5mYWN0b3J5ID0gZnVuY3Rpb24gZmFjdG9yeShub2RlLCBhcmdzKSB7XG4gICAgdmFyIF9yZWY7XG5cbiAgICB2YXIgbmFtZTtcblxuICAgIGlmICh0eXBlb2Ygbm9kZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWUgPSBub2RlO1xuICAgICAgdmFyIHR5cGUgPSBub2RlO1xuICAgICAgbm9kZSA9IG5vZGVNYXBbbm9kZV07XG5cbiAgICAgIGlmIChub2RlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm9kZSBcIiArIHR5cGUgKyBcIiBkb2VzIG5vdCBleGlzdCBvciBpcyBub3Qgc3VwcG9ydGVkXCIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBfcmVmID0ge30sIF9yZWZbYXVydW1FbGVtZW50TW9kZWxJZGVudGl0aXldID0gdHJ1ZSwgX3JlZi5uYW1lID0gbmFtZSwgX3JlZi5mYWN0b3J5ID0gbm9kZSwgX3JlZi5wcm9wcyA9IGFyZ3MsIF9yZWYuY2hpbGRyZW4gPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMiksIF9yZWY7XG4gIH07XG5cbiAgcmV0dXJuIEF1cnVtO1xufSgpO1xuXG5mdW5jdGlvbiBXZWJjb21wb25lbnQoY29uZmlnLCBsb2dpYykge1xuICBjdXN0b21FbGVtZW50cy5kZWZpbmUoY29uZmlnLm5hbWUsIC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0hUTUxFbGVtZW50KSB7XG4gICAgX2luaGVyaXRzTG9vc2UoX2NsYXNzLCBfSFRNTEVsZW1lbnQpO1xuXG4gICAgZnVuY3Rpb24gX2NsYXNzKCkge1xuICAgICAgdmFyIF90aGlzO1xuXG4gICAgICBfdGhpcyA9IF9IVE1MRWxlbWVudC5jYWxsKHRoaXMpIHx8IHRoaXM7XG5cbiAgICAgIGlmIChjb25maWcub2JzZXJ2ZWRBdHRyaWJ1dGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uZmlnLm9ic2VydmVkQXR0cmlidXRlcyA9IFtdO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5wcm9wcyA9IHt9O1xuXG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKGNvbmZpZy5vYnNlcnZlZEF0dHJpYnV0ZXMpLCBfc3RlcDsgIShfc3RlcCA9IF9pdGVyYXRvcigpKS5kb25lOykge1xuICAgICAgICB2YXIgYXR0ciA9IF9zdGVwLnZhbHVlO1xuICAgICAgICBfdGhpcy5wcm9wc1thdHRyXSA9IG5ldyBEYXRhU291cmNlKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICB2YXIgX3Byb3RvID0gX2NsYXNzLnByb3RvdHlwZTtcblxuICAgIF9wcm90by5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sgPSBmdW5jdGlvbiBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgICBpZiAob2xkVmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgIHRoaXMucHJvcHNbbmFtZV0udXBkYXRlKG5ld1ZhbHVlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgX3Byb3RvLmNvbm5lY3RlZENhbGxiYWNrID0gZnVuY3Rpb24gY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICB2YXIgX2E7XG5cbiAgICAgIHZhciB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgIHRoaXMuc2Vzc2lvbiA9IGNyZWF0ZVJlbmRlclNlc3Npb24oKTtcbiAgICAgIHRoaXMuYXBpID0gY3JlYXRlQVBJKHRoaXMuc2Vzc2lvbik7XG4gICAgICB2YXIgY29udGVudCA9IGxvZ2ljKHRoaXMucHJvcHMsIHRoaXMuYXBpKTtcblxuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yMiA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UodGhpcy5zZXNzaW9uLmF0dGFjaENhbGxzKSwgX3N0ZXAyOyAhKF9zdGVwMiA9IF9pdGVyYXRvcjIoKSkuZG9uZTspIHtcbiAgICAgICAgdmFyIGNiID0gX3N0ZXAyLnZhbHVlO1xuICAgICAgICBjYigpO1xuICAgICAgfVxuXG4gICAgICBBdXJ1bS5hdHRhY2goY29udGVudCwgdGVtcGxhdGUpO1xuICAgICAgdGhpcy5hdHRhY2hTaGFkb3coe1xuICAgICAgICBtb2RlOiAoX2EgPSBjb25maWcuc2hhZG93Um9vdE1vZGUpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICdvcGVuJyxcbiAgICAgICAgZGVsZWdhdGVzRm9jdXM6IGNvbmZpZy5zaGFkb3dSb290RGVsZWdhdGVzRm9jdXNcbiAgICAgIH0pLmFwcGVuZENoaWxkKHRlbXBsYXRlKTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLmRpc2Nvbm5lY3RlZENhbGxiYWNrID0gZnVuY3Rpb24gZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICB0aGlzLnNlc3Npb24uc2Vzc2lvblRva2VuLmNhbmNlbCgpO1xuICAgIH07XG5cbiAgICBfY3JlYXRlQ2xhc3MoX2NsYXNzLCBudWxsLCBbe1xuICAgICAga2V5OiBcIm9ic2VydmVkQXR0cmlidXRlc1wiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBjb25maWcub2JzZXJ2ZWRBdHRyaWJ1dGVzO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBfY2xhc3M7XG4gIH0oIC8qI19fUFVSRV9fKi9fd3JhcE5hdGl2ZVN1cGVyKEhUTUxFbGVtZW50KSkpO1xuICByZXR1cm4gRG9tTm9kZUNyZWF0b3IoY29uZmlnLm5hbWUsIGNvbmZpZy5vYnNlcnZlZEF0dHJpYnV0ZXMsIHVuZGVmaW5lZCwgZnVuY3Rpb24gKG5vZGUsIHByb3BzKSB7XG4gICAgZm9yICh2YXIga2V5IGluIHByb3BzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gbm9kZS5wcm9wcykpIHtcbiAgICAgICAgbm9kZS5wcm9wc1trZXldID0gcHJvcHNba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBBdXJ1bVJvdXRlcihwcm9wcywgY2hpbGRyZW4sIGFwaSkge1xuICBjaGlsZHJlbiA9IFtdLmNvbmNhdC5hcHBseShbXSwgY2hpbGRyZW4uZmlsdGVyKGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuICEhYztcbiAgfSkpO1xuXG4gIGlmIChjaGlsZHJlbi5zb21lKGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuICFjW2F1cnVtRWxlbWVudE1vZGVsSWRlbnRpdGl5XSB8fCAhKGMuZmFjdG9yeSA9PT0gUm91dGUgfHwgYy5mYWN0b3J5ID09PSBEZWZhdWx0Um91dGUpO1xuICB9KSkge1xuICAgIHRocm93IG5ldyBFcnJvcignQXVydW0gUm91dGVyIG9ubHkgYWNjZXB0cyBSb3V0ZSBhbmQgRGVmYXVsdFJvdXRlIGluc3RhbmNlcyBhcyBjaGlsZHJlbicpO1xuICB9XG5cbiAgaWYgKGNoaWxkcmVuLmZpbHRlcihmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBjLmZhY3RvcnkgPT09IERlZmF1bHRSb3V0ZTtcbiAgfSkubGVuZ3RoID4gMSkge1xuICAgIHRocm93IG5ldyBFcnJvcignVG9vIG1hbnkgZGVmYXVsdCByb3V0ZXMgb25seSAwIG9yIDEgYWxsb3dlZCcpO1xuICB9XG5cbiAgdmFyIHVybERhdGFTb3VyY2UgPSBuZXcgRGF0YVNvdXJjZShnZXRVcmxQYXRoKCkpO1xuICBhcGkuY2FuY2VsbGF0aW9uVG9rZW4ucmVnaXN0ZXJEb21FdmVudCh3aW5kb3csICdoYXNoY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgIHVybERhdGFTb3VyY2UudXBkYXRlKGdldFVybFBhdGgoKSk7XG4gIH0pO1xuICByZXR1cm4gdXJsRGF0YVNvdXJjZS51bmlxdWUoYXBpLmNhbmNlbGxhdGlvblRva2VuKS53aXRoSW5pdGlhbCh1cmxEYXRhU291cmNlLnZhbHVlKS5tYXAoZnVuY3Rpb24gKHApIHtcbiAgICByZXR1cm4gc2VsZWN0Um91dGUocCwgY2hpbGRyZW4pO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0VXJsUGF0aCgpIHtcbiAgdmFyIGhhc2ggPSBsb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKTtcblxuICBpZiAoaGFzaC5pbmNsdWRlcygnPycpKSB7XG4gICAgcmV0dXJuIGhhc2guc3Vic3RyaW5nKDAsIGhhc2guaW5kZXhPZignPycpKTtcbiAgfSBlbHNlIGlmIChoYXNoLmluY2x1ZGVzKCcjJykpIHtcbiAgICByZXR1cm4gaGFzaC5zdWJzdHJpbmcoMCwgaGFzaC5pbmRleE9mKCcjJykpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBoYXNoO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNlbGVjdFJvdXRlKHVybCwgcm91dGVzKSB7XG4gIHZhciBfYSwgX2I7XG5cbiAgaWYgKHVybCA9PT0gdW5kZWZpbmVkIHx8IHVybCA9PT0gbnVsbCkge1xuICAgIHJldHVybiAoX2EgPSByb3V0ZXMuZmluZChmdW5jdGlvbiAocikge1xuICAgICAgcmV0dXJuIHIuZmFjdG9yeSA9PT0gRGVmYXVsdFJvdXRlO1xuICAgIH0pKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY2hpbGRyZW47XG4gIH0gZWxzZSB7XG4gICAgaWYgKHJvdXRlcy5maW5kKGZ1bmN0aW9uIChyKSB7XG4gICAgICB2YXIgX2E7XG5cbiAgICAgIHJldHVybiAoKF9hID0gci5wcm9wcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmhyZWYpID09PSB1cmw7XG4gICAgfSkpIHtcbiAgICAgIHJldHVybiByb3V0ZXMuZmluZChmdW5jdGlvbiAocikge1xuICAgICAgICB2YXIgX2E7XG5cbiAgICAgICAgcmV0dXJuICgoX2EgPSByLnByb3BzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaHJlZikgPT09IHVybDtcbiAgICAgIH0pLmNoaWxkcmVuO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc2VnbWVudHMgPSB1cmwuc3BsaXQoJy8nKTtcbiAgICAgIHNlZ21lbnRzLnBvcCgpO1xuXG4gICAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcCgpIHtcbiAgICAgICAgdmFyIHBhdGggPSBzZWdtZW50cy5qb2luKCcvJyk7XG5cbiAgICAgICAgaWYgKHJvdXRlcy5maW5kKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgdmFyIF9hO1xuXG4gICAgICAgICAgcmV0dXJuICgoX2EgPSByLnByb3BzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaHJlZikgPT09IHBhdGg7XG4gICAgICAgIH0pKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHY6IHJvdXRlcy5maW5kKGZ1bmN0aW9uIChyKSB7XG4gICAgICAgICAgICAgIHZhciBfYTtcblxuICAgICAgICAgICAgICByZXR1cm4gKChfYSA9IHIucHJvcHMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5ocmVmKSA9PT0gcGF0aDtcbiAgICAgICAgICAgIH0pLmNoaWxkcmVuXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlZ21lbnRzLnBvcCgpO1xuICAgICAgfTtcblxuICAgICAgd2hpbGUgKHNlZ21lbnRzLmxlbmd0aCkge1xuICAgICAgICB2YXIgX3JldCA9IF9sb29wKCk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBfcmV0ID09PSBcIm9iamVjdFwiKSByZXR1cm4gX3JldC52O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKF9iID0gcm91dGVzLmZpbmQoZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgcmV0dXJuIHIuZmFjdG9yeSA9PT0gRGVmYXVsdFJvdXRlO1xuICAgICAgfSkpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5jaGlsZHJlbjtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gUm91dGUocHJvcHMsIGNoaWxkcmVuKSB7XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBEZWZhdWx0Um91dGUocHJvcHMsIGNoaWxkcmVuKSB7XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIFN1c3BlbnNlKHByb3BzLCBjaGlsZHJlbiwgYXBpKSB7XG4gIHZhciBkYXRhID0gbmV3IERhdGFTb3VyY2UocHJvcHMgPT09IG51bGwgfHwgcHJvcHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb3BzLmZhbGxiYWNrKTtcbiAgdmFyIGNsZWFuVXAgPSBuZXcgQ2FuY2VsbGF0aW9uVG9rZW4oKTtcbiAgYXBpLm9uRGV0YWNoKGZ1bmN0aW9uICgpIHtcbiAgICBjbGVhblVwLmNhbmNlbCgpO1xuICB9KTtcbiAgUHJvbWlzZS5hbGwoYXBpLnByZXJlbmRlcihjaGlsZHJlbiwgY2xlYW5VcCkpLnRoZW4oZnVuY3Rpb24gKHJlcykge1xuICAgIGlmICghY2xlYW5VcC5pc0NhbmNlbGVkKSB7XG4gICAgICBkYXRhLnVwZGF0ZShyZXMpO1xuICAgIH1cbiAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICBjbGVhblVwLmNhbmNlbCgpO1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgfSk7XG4gIHJldHVybiBkYXRhO1xufVxuXG52YXIgU3RyZWFtID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3RyZWFtKGlucHV0U291cmNlLCBvdXRwdXRTb3VyY2UpIHtcbiAgICB0aGlzLmlucHV0ID0gaW5wdXRTb3VyY2UgIT09IG51bGwgJiYgaW5wdXRTb3VyY2UgIT09IHZvaWQgMCA/IGlucHV0U291cmNlIDogbmV3IERhdGFTb3VyY2UoKTtcbiAgICB0aGlzLm91dHB1dCA9IG91dHB1dFNvdXJjZSAhPT0gbnVsbCAmJiBvdXRwdXRTb3VyY2UgIT09IHZvaWQgMCA/IG91dHB1dFNvdXJjZSA6IHRoaXMuaW5wdXQ7XG4gIH1cblxuICBTdHJlYW0uZnJvbUZldGNoUmF3ID0gZnVuY3Rpb24gZnJvbUZldGNoUmF3KHVybCkge1xuICAgIHZhciBpbnB1dCA9IG5ldyBEYXRhU291cmNlKCk7XG4gICAgdmFyIG91dHB1dCA9IG5ldyBEYXRhU291cmNlKCk7XG4gICAgaW5wdXQubGlzdGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgb3V0cHV0LnVwZGF0ZShmZXRjaCh1cmwsIHZhbHVlKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBTdHJlYW0oaW5wdXQsIG91dHB1dCk7XG4gIH07XG5cbiAgU3RyZWFtLmZyb21GZXRjaFBvc3RKc29uID0gZnVuY3Rpb24gZnJvbUZldGNoUG9zdEpzb24odXJsLCBiYXNlUmVxdWVzdERhdGEpIHtcbiAgICB2YXIgaW5wdXQgPSBuZXcgRGF0YVNvdXJjZSgpO1xuICAgIHZhciBvdXRwdXQgPSBuZXcgRGF0YVNvdXJjZSgpO1xuICAgIGlucHV0Lmxpc3RlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHZhciBfdXBkYXRlMiA9IG91dHB1dC51cGRhdGU7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZmV0Y2godXJsLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgfVxuICAgICAgICB9LCBiYXNlUmVxdWVzdERhdGEsIHtcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh2YWx1ZSlcbiAgICAgICAgfSkpLnRoZW4oZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICByZXR1cm4gcy5qc29uKCk7XG4gICAgICAgIH0pKS50aGVuKGZ1bmN0aW9uIChfZmV0Y2gkdGhlbikge1xuICAgICAgICAgIF91cGRhdGUyLmNhbGwob3V0cHV0LCBfZmV0Y2gkdGhlbik7XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG5ldyBTdHJlYW0oaW5wdXQsIG91dHB1dCk7XG4gIH07XG5cbiAgU3RyZWFtLmZyb21GZXRjaEdldEpzb24gPSBmdW5jdGlvbiBmcm9tRmV0Y2hHZXRKc29uKHVybCwgYmFzZVJlcXVlc3REYXRhKSB7XG4gICAgdmFyIGlucHV0ID0gbmV3IERhdGFTb3VyY2UoKTtcbiAgICB2YXIgb3V0cHV0ID0gbmV3IERhdGFTb3VyY2UoKTtcbiAgICBpbnB1dC5saXN0ZW4oZnVuY3Rpb24gKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIF91cGRhdGU0ID0gb3V0cHV0LnVwZGF0ZTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmZXRjaCh1cmwpLnRoZW4oZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICByZXR1cm4gcy5qc29uKCk7XG4gICAgICAgIH0pKS50aGVuKGZ1bmN0aW9uIChfZmV0Y2gkdGhlbjIpIHtcbiAgICAgICAgICBfdXBkYXRlNC5jYWxsKG91dHB1dCwgX2ZldGNoJHRoZW4yKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gbmV3IFN0cmVhbShpbnB1dCwgb3V0cHV0KTtcbiAgfTtcblxuICB2YXIgX3Byb3RvID0gU3RyZWFtLnByb3RvdHlwZTtcblxuICBfcHJvdG8udXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlKGRhdGEpIHtcbiAgICB0aGlzLmlucHV0LnVwZGF0ZShkYXRhKTtcbiAgfTtcblxuICBfcHJvdG8udHJhbnNmb3JtID0gZnVuY3Rpb24gdHJhbnNmb3JtKG9wZXJhdGlvbkEsIG9wZXJhdGlvbkIsIG9wZXJhdGlvbkMsIG9wZXJhdGlvbkQsIG9wZXJhdGlvbkUsIG9wZXJhdGlvbkYsIG9wZXJhdGlvbkcsIG9wZXJhdGlvbkgsIG9wZXJhdGlvbkksIG9wZXJhdGlvbkosIG9wZXJhdGlvbkssIGNhbmNlbGxhdGlvblRva2VuKSB7XG4gICAgdmFyIHRva2VuO1xuICAgIHZhciBvcGVyYXRpb25zID0gW29wZXJhdGlvbkEsIG9wZXJhdGlvbkIsIG9wZXJhdGlvbkMsIG9wZXJhdGlvbkQsIG9wZXJhdGlvbkUsIG9wZXJhdGlvbkYsIG9wZXJhdGlvbkcsIG9wZXJhdGlvbkgsIG9wZXJhdGlvbkksIG9wZXJhdGlvbkosIG9wZXJhdGlvbktdLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIGUgJiYgKGUgaW5zdGFuY2VvZiBDYW5jZWxsYXRpb25Ub2tlbiA/ICh0b2tlbiA9IGUsIGZhbHNlKSA6IHRydWUpO1xuICAgIH0pO1xuXG4gICAgaWYgKGNhbmNlbGxhdGlvblRva2VuKSB7XG4gICAgICB0b2tlbiA9IGNhbmNlbGxhdGlvblRva2VuO1xuICAgIH1cblxuICAgIHZhciByZXN1bHQgPSBuZXcgRGF0YVNvdXJjZSh1bmRlZmluZWQsIHRoaXMub3V0cHV0Lm5hbWUgKyAnICcgKyBvcGVyYXRpb25zLm1hcChmdW5jdGlvbiAodikge1xuICAgICAgcmV0dXJuIHYubmFtZTtcbiAgICB9KS5qb2luKCcgJykpO1xuICAgIHRoaXMubGlzdGVuKHByb2Nlc3NUcmFuc2Zvcm0ob3BlcmF0aW9ucywgcmVzdWx0KSwgdG9rZW4pO1xuICAgIHJldHVybiBuZXcgU3RyZWFtKHRoaXMuaW5wdXQsIHJlc3VsdCk7XG4gIH07XG5cbiAgX3Byb3RvLmdldE91dHB1dCA9IGZ1bmN0aW9uIGdldE91dHB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5vdXRwdXQ7XG4gIH07XG5cbiAgX3Byb3RvLmxpc3RlbiA9IGZ1bmN0aW9uIGxpc3RlbihjYWxsYmFjaywgY2FuY2VsbGF0aW9uVG9rZW4pIHtcbiAgICByZXR1cm4gdGhpcy5vdXRwdXQubGlzdGVuKGNhbGxiYWNrLCBjYW5jZWxsYXRpb25Ub2tlbik7XG4gIH07XG5cbiAgX3Byb3RvLmxpc3RlbkFuZFJlcGVhdCA9IGZ1bmN0aW9uIGxpc3RlbkFuZFJlcGVhdChjYWxsYmFjaywgY2FuY2VsbGF0aW9uVG9rZW4pIHtcbiAgICByZXR1cm4gdGhpcy5vdXRwdXQubGlzdGVuQW5kUmVwZWF0KGNhbGxiYWNrLCBjYW5jZWxsYXRpb25Ub2tlbik7XG4gIH07XG5cbiAgX3Byb3RvLmxpc3Rlbk9uY2UgPSBmdW5jdGlvbiBsaXN0ZW5PbmNlKGNhbGxiYWNrLCBjYW5jZWxsYXRpb25Ub2tlbikge1xuICAgIHJldHVybiB0aGlzLm91dHB1dC5saXN0ZW5PbmNlKGNhbGxiYWNrLCBjYW5jZWxsYXRpb25Ub2tlbik7XG4gIH07XG5cbiAgX3Byb3RvLmF3YWl0TmV4dFVwZGF0ZSA9IGZ1bmN0aW9uIGF3YWl0TmV4dFVwZGF0ZShjYW5jZWxsYXRpb25Ub2tlbikge1xuICAgIHJldHVybiB0aGlzLm91dHB1dC5hd2FpdE5leHRVcGRhdGUoY2FuY2VsbGF0aW9uVG9rZW4pO1xuICB9O1xuXG4gIF9wcm90by5jYW5jZWxBbGwgPSBmdW5jdGlvbiBjYW5jZWxBbGwoKSB7XG4gICAgdGhpcy5pbnB1dC5jYW5jZWxBbGwoKTtcbiAgICB0aGlzLm91dHB1dC5jYW5jZWxBbGwoKTtcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoU3RyZWFtLCBbe1xuICAgIGtleTogXCJuYW1lXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gXCJJTjpcIiArIHRoaXMuaW5wdXQubmFtZSArIFwiIE9VVDpcIiArIHRoaXMub3V0cHV0Lm5hbWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInZhbHVlXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5vdXRwdXQudmFsdWU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFN0cmVhbTtcbn0oKTtcblxuZnVuY3Rpb24gZHNNYXAobWFwcGVyKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ21hcCcsXG4gICAgb3BlcmF0aW9uVHlwZTogZXhwb3J0cy5PcGVyYXRpb25UeXBlLk1BUCxcbiAgICBvcGVyYXRpb246IGZ1bmN0aW9uIG9wZXJhdGlvbih2KSB7XG4gICAgICByZXR1cm4gbWFwcGVyKHYpO1xuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIGRzTWFwQXN5bmMobWFwcGVyKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ21hcEFzeW5jJyxcbiAgICBvcGVyYXRpb25UeXBlOiBleHBvcnRzLk9wZXJhdGlvblR5cGUuTUFQX0RFTEFZLFxuICAgIG9wZXJhdGlvbjogZnVuY3Rpb24gb3BlcmF0aW9uKHYpIHtcbiAgICAgIHJldHVybiBtYXBwZXIodik7XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gZHNEaWZmKCkge1xuICB2YXIgbGFzdFZhbHVlID0gdW5kZWZpbmVkO1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdkaWZmJyxcbiAgICBvcGVyYXRpb25UeXBlOiBleHBvcnRzLk9wZXJhdGlvblR5cGUuTUFQLFxuICAgIG9wZXJhdGlvbjogZnVuY3Rpb24gb3BlcmF0aW9uKHYpIHtcbiAgICAgIHZhciByZXN1bHQgPSB7XG4gICAgICAgIG9sZFZhbHVlOiBsYXN0VmFsdWUsXG4gICAgICAgIG5ld1ZhbHVlOiB2XG4gICAgICB9O1xuICAgICAgbGFzdFZhbHVlID0gdjtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gZHNGaWx0ZXIocHJlZGljYXRlKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ2ZpbHRlcicsXG4gICAgb3BlcmF0aW9uVHlwZTogZXhwb3J0cy5PcGVyYXRpb25UeXBlLkZJTFRFUixcbiAgICBvcGVyYXRpb246IGZ1bmN0aW9uIG9wZXJhdGlvbih2KSB7XG4gICAgICByZXR1cm4gcHJlZGljYXRlKHYpO1xuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIGRzRmlsdGVyQXN5bmMocHJlZGljYXRlKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ2ZpbHRlckFzeW5jJyxcbiAgICBvcGVyYXRpb25UeXBlOiBleHBvcnRzLk9wZXJhdGlvblR5cGUuREVMQVlfRklMVEVSLFxuICAgIG9wZXJhdGlvbjogZnVuY3Rpb24gb3BlcmF0aW9uKHYpIHtcbiAgICAgIHJldHVybiBwcmVkaWNhdGUodik7XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gZHNFdmVuKCkge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdldmVuJyxcbiAgICBvcGVyYXRpb25UeXBlOiBleHBvcnRzLk9wZXJhdGlvblR5cGUuRklMVEVSLFxuICAgIG9wZXJhdGlvbjogZnVuY3Rpb24gb3BlcmF0aW9uKHYpIHtcbiAgICAgIHJldHVybiB2ICUgMiA9PT0gMDtcbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBkc09kZCgpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnb2RkJyxcbiAgICBvcGVyYXRpb25UeXBlOiBleHBvcnRzLk9wZXJhdGlvblR5cGUuRklMVEVSLFxuICAgIG9wZXJhdGlvbjogZnVuY3Rpb24gb3BlcmF0aW9uKHYpIHtcbiAgICAgIHJldHVybiB2ICUgMiAhPT0gMDtcbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBkc01pbigpIHtcbiAgdmFyIGxhc3QgPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnbWluJyxcbiAgICBvcGVyYXRpb25UeXBlOiBleHBvcnRzLk9wZXJhdGlvblR5cGUuRklMVEVSLFxuICAgIG9wZXJhdGlvbjogZnVuY3Rpb24gb3BlcmF0aW9uKHYpIHtcbiAgICAgIGlmICh2IDwgbGFzdCkge1xuICAgICAgICBsYXN0ID0gdjtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gZHNNYXgoKSB7XG4gIHZhciBsYXN0ID0gTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVI7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ21heCcsXG4gICAgb3BlcmF0aW9uVHlwZTogZXhwb3J0cy5PcGVyYXRpb25UeXBlLkZJTFRFUixcbiAgICBvcGVyYXRpb246IGZ1bmN0aW9uIG9wZXJhdGlvbih2KSB7XG4gICAgICBpZiAodiA+IGxhc3QpIHtcbiAgICAgICAgbGFzdCA9IHY7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIGRzU2tpcER5bmFtaWMoYW1vdW50TGVmdCkge1xuICByZXR1cm4ge1xuICAgIG9wZXJhdGlvblR5cGU6IGV4cG9ydHMuT3BlcmF0aW9uVHlwZS5GSUxURVIsXG4gICAgbmFtZTogJ3NraXBEeW5hbWljJyxcbiAgICBvcGVyYXRpb246IGZ1bmN0aW9uIG9wZXJhdGlvbih2KSB7XG4gICAgICBpZiAoYW1vdW50TGVmdC52YWx1ZSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGFtb3VudExlZnQudXBkYXRlKGFtb3VudExlZnQudmFsdWUgLSAxKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIGRzU2tpcChhbW91bnQpIHtcbiAgcmV0dXJuIHtcbiAgICBvcGVyYXRpb25UeXBlOiBleHBvcnRzLk9wZXJhdGlvblR5cGUuRklMVEVSLFxuICAgIG5hbWU6IFwic2tpcCBcIiArIGFtb3VudCxcbiAgICBvcGVyYXRpb246IGZ1bmN0aW9uIG9wZXJhdGlvbih2KSB7XG4gICAgICBpZiAoYW1vdW50ID09PSAwKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYW1vdW50LS07XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBkc0N1dE9mZihhbW91bnQpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBcImN1dG9mZiBcIiArIGFtb3VudCxcbiAgICBvcGVyYXRpb25UeXBlOiBleHBvcnRzLk9wZXJhdGlvblR5cGUuRklMVEVSLFxuICAgIG9wZXJhdGlvbjogZnVuY3Rpb24gb3BlcmF0aW9uKHYpIHtcbiAgICAgIGlmIChhbW91bnQgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYW1vdW50LS07XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIGRzQ3V0T2ZmRHluYW1pYyhhbW91bnRMZWZ0KSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ2N1dG9mZkR5bmFtaWMnLFxuICAgIG9wZXJhdGlvblR5cGU6IGV4cG9ydHMuT3BlcmF0aW9uVHlwZS5GSUxURVIsXG4gICAgb3BlcmF0aW9uOiBmdW5jdGlvbiBvcGVyYXRpb24odikge1xuICAgICAgaWYgKGFtb3VudExlZnQudmFsdWUgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYW1vdW50TGVmdC51cGRhdGUoYW1vdW50TGVmdC52YWx1ZSAtIDEpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBkc1VuaXF1ZSgpIHtcbiAgdmFyIGxhc3Q7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ3VuaXF1ZScsXG4gICAgb3BlcmF0aW9uVHlwZTogZXhwb3J0cy5PcGVyYXRpb25UeXBlLkZJTFRFUixcbiAgICBvcGVyYXRpb246IGZ1bmN0aW9uIG9wZXJhdGlvbih2KSB7XG4gICAgICBpZiAodiA9PT0gbGFzdCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYXN0ID0gdjtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gZHNBd2FpdCgpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnYXdhaXQnLFxuICAgIG9wZXJhdGlvblR5cGU6IGV4cG9ydHMuT3BlcmF0aW9uVHlwZS5NQVBfREVMQVksXG4gICAgb3BlcmF0aW9uOiBmdW5jdGlvbiBvcGVyYXRpb24odikge1xuICAgICAgcmV0dXJuIHY7XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gZHNBd2FpdE9yZGVyZWQoKSB7XG4gIHZhciBwcm9jZXNzSXRlbSA9IGZ1bmN0aW9uIHByb2Nlc3NJdGVtKCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHF1ZXVlWzBdKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICBvbkRlcXVldWUuZmlyZSgpO1xuICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHF1ZXVlID0gW107XG4gIHZhciBvbkRlcXVldWUgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHJldHVybiB7XG4gICAgb3BlcmF0aW9uVHlwZTogZXhwb3J0cy5PcGVyYXRpb25UeXBlLk1BUF9ERUxBWSxcbiAgICBuYW1lOiAnYXdhaXRPcmRlcmVkJyxcbiAgICBvcGVyYXRpb246IGZ1bmN0aW9uICh2KSB7XG4gICAgICB0cnkge1xuICAgICAgICBxdWV1ZS5wdXNoKHYpO1xuXG4gICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICByZXR1cm4gcHJvY2Vzc0l0ZW0oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgdW5zdWIgPSBvbkRlcXVldWUuc3Vic2NyaWJlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGlmIChxdWV1ZVswXSA9PT0gdikge1xuICAgICAgICAgICAgICAgIHVuc3ViLmNhbmNlbCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9jZXNzSXRlbSgpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBkc0F3YWl0TGF0ZXN0KCkge1xuICB2YXIgZnJlc2huZXNzVG9rZW47XG4gIHJldHVybiB7XG4gICAgb3BlcmF0aW9uVHlwZTogZXhwb3J0cy5PcGVyYXRpb25UeXBlLk1BUF9ERUxBWV9GSUxURVIsXG4gICAgbmFtZTogJ2F3YWl0TGF0ZXN0JyxcbiAgICBvcGVyYXRpb246IGZ1bmN0aW9uICh2KSB7XG4gICAgICB0cnkge1xuICAgICAgICBmcmVzaG5lc3NUb2tlbiA9IERhdGUubm93KCk7XG4gICAgICAgIHZhciB0aW1lc3RhbXAgPSBmcmVzaG5lc3NUb2tlbjtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uIChyZXNvbHZlZCkge1xuICAgICAgICAgIGlmIChmcmVzaG5lc3NUb2tlbiA9PT0gdGltZXN0YW1wKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBpdGVtOiByZXNvbHZlZCxcbiAgICAgICAgICAgICAgY2FuY2VsbGVkOiBmYWxzZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgaXRlbTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICBjYW5jZWxsZWQ6IHRydWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIGRzUmVkdWNlKHJlZHVjZXIsIGluaXRpYWxWYWx1ZSkge1xuICB2YXIgbGFzdCA9IGluaXRpYWxWYWx1ZTtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAncmVkdWNlJyxcbiAgICBvcGVyYXRpb25UeXBlOiBleHBvcnRzLk9wZXJhdGlvblR5cGUuTUFQLFxuICAgIG9wZXJhdGlvbjogZnVuY3Rpb24gb3BlcmF0aW9uKHYpIHtcbiAgICAgIGxhc3QgPSByZWR1Y2VyKGxhc3QsIHYpO1xuICAgICAgcmV0dXJuIGxhc3Q7XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gZHNTdHJpbmdKb2luKHNlcGVyYXRvcikge1xuICBpZiAoc2VwZXJhdG9yID09PSB2b2lkIDApIHtcbiAgICBzZXBlcmF0b3IgPSAnLCAnO1xuICB9XG5cbiAgdmFyIGxhc3Q7XG4gIHJldHVybiB7XG4gICAgbmFtZTogXCJzdHJpbmdKb2luIFwiICsgc2VwZXJhdG9yLFxuICAgIG9wZXJhdGlvblR5cGU6IGV4cG9ydHMuT3BlcmF0aW9uVHlwZS5NQVAsXG4gICAgb3BlcmF0aW9uOiBmdW5jdGlvbiBvcGVyYXRpb24odikge1xuICAgICAgaWYgKGxhc3QpIHtcbiAgICAgICAgbGFzdCArPSBzZXBlcmF0b3IgKyB2O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGFzdCA9IHY7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsYXN0O1xuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIGRzRGVsYXkodGltZSkge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IFwiZGVsYXkgXCIgKyB0aW1lICsgXCJtc1wiLFxuICAgIG9wZXJhdGlvblR5cGU6IGV4cG9ydHMuT3BlcmF0aW9uVHlwZS5ERUxBWSxcbiAgICBvcGVyYXRpb246IGZ1bmN0aW9uIG9wZXJhdGlvbih2KSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmVzb2x2ZSh2KTtcbiAgICAgICAgfSwgdGltZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBkc0RlYm91bmNlKHRpbWUpIHtcbiAgdmFyIHRpbWVvdXQ7XG4gIHZhciBjYW5jZWxsZWQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIHJldHVybiB7XG4gICAgb3BlcmF0aW9uVHlwZTogZXhwb3J0cy5PcGVyYXRpb25UeXBlLkRFTEFZX0ZJTFRFUixcbiAgICBuYW1lOiBcImRlYm91bmNlIFwiICsgdGltZSArIFwibXNcIixcbiAgICBvcGVyYXRpb246IGZ1bmN0aW9uIG9wZXJhdGlvbih2KSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICBjYW5jZWxsZWQuZmlyZSgpO1xuICAgICAgICBjYW5jZWxsZWQuc3Vic2NyaWJlT25jZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcbiAgICAgICAgfSwgdGltZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBkc1NlbWFwaG9yZShzdGF0ZSkge1xuICByZXR1cm4ge1xuICAgIG9wZXJhdGlvblR5cGU6IGV4cG9ydHMuT3BlcmF0aW9uVHlwZS5ERUxBWSxcbiAgICBuYW1lOiAnc2VtYXBob3JlJyxcbiAgICBvcGVyYXRpb246IGZ1bmN0aW9uIG9wZXJhdGlvbih2KSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgaWYgKHN0YXRlLnZhbHVlID4gMCkge1xuICAgICAgICAgIHN0YXRlLnVwZGF0ZShzdGF0ZS52YWx1ZSAtIDEpO1xuICAgICAgICAgIHJlc29sdmUodik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGNhbmNlbCA9IHN0YXRlLmxpc3RlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUudmFsdWUgPiAwKSB7XG4gICAgICAgICAgICAgIGNhbmNlbCgpO1xuICAgICAgICAgICAgICBzdGF0ZS51cGRhdGUoc3RhdGUudmFsdWUgLSAxKTtcbiAgICAgICAgICAgICAgcmVzb2x2ZSh2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gZHNMb2NrKHN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ2xvY2snLFxuICAgIG9wZXJhdGlvblR5cGU6IGV4cG9ydHMuT3BlcmF0aW9uVHlwZS5ERUxBWSxcbiAgICBvcGVyYXRpb246IGZ1bmN0aW9uIG9wZXJhdGlvbih2KSB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgaWYgKHN0YXRlLnZhbHVlKSB7XG4gICAgICAgICAgcmVzb2x2ZSh2KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgY2FuY2VsID0gc3RhdGUubGlzdGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS52YWx1ZSkge1xuICAgICAgICAgICAgICBjYW5jZWwoKTtcbiAgICAgICAgICAgICAgcmVzb2x2ZSh2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gZHNUaHJvdHRsZSh0aW1lKSB7XG4gIHZhciBjb29sZG93biA9IGZhbHNlO1xuICByZXR1cm4ge1xuICAgIG5hbWU6IFwidGhyb3R0bGUgXCIgKyB0aW1lICsgXCJtc1wiLFxuICAgIG9wZXJhdGlvblR5cGU6IGV4cG9ydHMuT3BlcmF0aW9uVHlwZS5GSUxURVIsXG4gICAgb3BlcmF0aW9uOiBmdW5jdGlvbiBvcGVyYXRpb24odikge1xuICAgICAgaWYgKCFjb29sZG93bikge1xuICAgICAgICBjb29sZG93biA9IHRydWU7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvb2xkb3duID0gZmFsc2U7XG4gICAgICAgIH0sIHRpbWUpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBkc0J1ZmZlcih0aW1lKSB7XG4gIHZhciBidWZmZXIgPSBbXTtcbiAgdmFyIHByb21pc2U7XG4gIHJldHVybiB7XG4gICAgbmFtZTogXCJidWZmZXIgXCIgKyB0aW1lICsgXCJtc1wiLFxuICAgIG9wZXJhdGlvblR5cGU6IGV4cG9ydHMuT3BlcmF0aW9uVHlwZS5NQVBfREVMQVlfRklMVEVSLFxuICAgIG9wZXJhdGlvbjogZnVuY3Rpb24gb3BlcmF0aW9uKHYpIHtcbiAgICAgIGJ1ZmZlci5wdXNoKHYpO1xuXG4gICAgICBpZiAoIXByb21pc2UpIHtcbiAgICAgICAgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwcm9taXNlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICAgIGNhbmNlbGxlZDogZmFsc2UsXG4gICAgICAgICAgICAgIGl0ZW06IGJ1ZmZlclxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBidWZmZXIgPSBbXTtcbiAgICAgICAgICB9LCB0aW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgY2FuY2VsbGVkOiB0cnVlLFxuICAgICAgICAgIGl0ZW06IHVuZGVmaW5lZFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBkc1BpY2soa2V5KSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogXCJwaWNrIFwiICsga2V5LFxuICAgIG9wZXJhdGlvblR5cGU6IGV4cG9ydHMuT3BlcmF0aW9uVHlwZS5NQVAsXG4gICAgb3BlcmF0aW9uOiBmdW5jdGlvbiBvcGVyYXRpb24odikge1xuICAgICAgaWYgKHYgIT09IHVuZGVmaW5lZCAmJiB2ICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB2W2tleV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdjtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBkc1BpcGUodGFyZ2V0KSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogXCJwaXBlIFwiICsgdGFyZ2V0Lm5hbWUsXG4gICAgb3BlcmF0aW9uVHlwZTogZXhwb3J0cy5PcGVyYXRpb25UeXBlLk5PT1AsXG4gICAgb3BlcmF0aW9uOiBmdW5jdGlvbiBvcGVyYXRpb24odikge1xuICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIERhdGFTb3VyY2UgfHwgdGFyZ2V0IGluc3RhbmNlb2YgU3RyZWFtKSB7XG4gICAgICAgIHRhcmdldC51cGRhdGUodik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXQudXBkYXRlRG93bnN0cmVhbSh2KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHY7XG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gZHNUYXAoY2IpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAndGFwJyxcbiAgICBvcGVyYXRpb25UeXBlOiBleHBvcnRzLk9wZXJhdGlvblR5cGUuTk9PUCxcbiAgICBvcGVyYXRpb246IGZ1bmN0aW9uIG9wZXJhdGlvbih2KSB7XG4gICAgICBjYih2KTtcbiAgICAgIHJldHVybiB2O1xuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIGRzTG9hZEJhbGFuY2UodGFyZ2V0cykge1xuICB2YXIgaSA9IDA7XG4gIHJldHVybiB7XG4gICAgbmFtZTogXCJsb2FkQmFsYW5jZSBbXCIgKyB0YXJnZXRzLm1hcChmdW5jdGlvbiAodikge1xuICAgICAgcmV0dXJuIHYubmFtZTtcbiAgICB9KS5qb2luKCkgKyBcIl1cIixcbiAgICBvcGVyYXRpb25UeXBlOiBleHBvcnRzLk9wZXJhdGlvblR5cGUuTk9PUCxcbiAgICBvcGVyYXRpb246IGZ1bmN0aW9uIG9wZXJhdGlvbih2KSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gdGFyZ2V0c1tpKytdO1xuXG4gICAgICBpZiAoaSA+PSB0YXJnZXRzLmxlbmd0aCkge1xuICAgICAgICBpID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIERhdGFTb3VyY2UgfHwgdGFyZ2V0IGluc3RhbmNlb2YgU3RyZWFtKSB7XG4gICAgICAgIHRhcmdldC51cGRhdGUodik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXQudXBkYXRlRG93bnN0cmVhbSh2KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHY7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBTd2l0Y2gocHJvcHMsIGNoaWxkcmVuLCBhcGkpIHtcbiAgY2hpbGRyZW4gPSBbXS5jb25jYXQuYXBwbHkoW10sIGNoaWxkcmVuLmZpbHRlcihmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiAhIWM7XG4gIH0pKTtcblxuICBpZiAoY2hpbGRyZW4uc29tZShmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiAhY1thdXJ1bUVsZW1lbnRNb2RlbElkZW50aXRpeV0gfHwgIShjLmZhY3RvcnkgPT09IFN3aXRjaENhc2UgfHwgYy5mYWN0b3J5ID09PSBEZWZhdWx0U3dpdGNoQ2FzZSk7XG4gIH0pKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTd2l0Y2ggb25seSBhY2NlcHRzIFN3aXRjaENhc2UgYXMgY2hpbGRyZW4nKTtcbiAgfVxuXG4gIGlmIChjaGlsZHJlbi5maWx0ZXIoZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gYy5mYWN0b3J5ID09PSBEZWZhdWx0U3dpdGNoQ2FzZTtcbiAgfSkubGVuZ3RoID4gMSkge1xuICAgIHRocm93IG5ldyBFcnJvcignVG9vIG1hbnkgZGVmYXVsdCBzd2l0Y2ggY2FzZXMgb25seSAwIG9yIDEgYWxsb3dlZCcpO1xuICB9XG5cbiAgdmFyIGNsZWFuVXAgPSBuZXcgQ2FuY2VsbGF0aW9uVG9rZW4oKTtcbiAgYXBpLm9uRGV0YWNoKGZ1bmN0aW9uICgpIHtcbiAgICBjbGVhblVwLmNhbmNlbCgpO1xuICB9KTtcbiAgdmFyIHUgPSBwcm9wcy5zdGF0ZS50cmFuc2Zvcm0oZHNVbmlxdWUoKSwgY2xlYW5VcCk7XG4gIHJldHVybiB1LndpdGhJbml0aWFsKHByb3BzLnN0YXRlLnZhbHVlKS5tYXAoZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgcmV0dXJuIHNlbGVjdENhc2Uoc3RhdGUsIGNoaWxkcmVuKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdENhc2Uoc3RhdGUsIGNoaWxkcmVuKSB7XG4gIHZhciBfYSwgX2IsIF9jO1xuXG4gIHJldHVybiAoX2IgPSAoX2EgPSBjaGlsZHJlbi5maW5kKGZ1bmN0aW9uIChjKSB7XG4gICAgdmFyIF9hO1xuXG4gICAgcmV0dXJuICgoX2EgPSBjLnByb3BzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eud2hlbikgPT09IHN0YXRlO1xuICB9KSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNoaWxkcmVuKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAoX2MgPSBjaGlsZHJlbi5maW5kKGZ1bmN0aW9uIChwKSB7XG4gICAgcmV0dXJuIHAuZmFjdG9yeSA9PT0gRGVmYXVsdFN3aXRjaENhc2U7XG4gIH0pKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIFN3aXRjaENhc2UocHJvcHMsIGNoaWxkcmVuKSB7XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBEZWZhdWx0U3dpdGNoQ2FzZShwcm9wcywgY2hpbGRyZW4pIHtcbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxudmFyIE9iamVjdERhdGFTb3VyY2UgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBPYmplY3REYXRhU291cmNlKGluaXRpYWxEYXRhKSB7XG4gICAgaWYgKGluaXRpYWxEYXRhKSB7XG4gICAgICB0aGlzLmRhdGEgPSBpbml0aWFsRGF0YTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIHRoaXMudXBkYXRlRXZlbnRPbktleSA9IG5ldyBNYXAoKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBPYmplY3REYXRhU291cmNlLnByb3RvdHlwZTtcblxuICBfcHJvdG8ucGljayA9IGZ1bmN0aW9uIHBpY2soa2V5LCBjYW5jZWxsYXRpb25Ub2tlbikge1xuICAgIHZhciBfYTtcblxuICAgIHZhciBzdWJEYXRhU291cmNlID0gbmV3IERhdGFTb3VyY2UoKF9hID0gdGhpcy5kYXRhKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Fba2V5XSk7XG4gICAgdGhpcy5saXN0ZW5PbktleShrZXksIGZ1bmN0aW9uICh2KSB7XG4gICAgICBzdWJEYXRhU291cmNlLnVwZGF0ZSh2Lm5ld1ZhbHVlKTtcbiAgICB9LCBjYW5jZWxsYXRpb25Ub2tlbik7XG4gICAgcmV0dXJuIHN1YkRhdGFTb3VyY2U7XG4gIH07XG5cbiAgX3Byb3RvLmxpc3RlbiA9IGZ1bmN0aW9uIGxpc3RlbihjYWxsYmFjaywgY2FuY2VsbGF0aW9uVG9rZW4pIHtcbiAgICByZXR1cm4gdGhpcy51cGRhdGVFdmVudC5zdWJzY3JpYmUoY2FsbGJhY2ssIGNhbmNlbGxhdGlvblRva2VuKS5jYW5jZWw7XG4gIH07XG5cbiAgX3Byb3RvLmxpc3Rlbk9uS2V5QW5kUmVwZWF0ID0gZnVuY3Rpb24gbGlzdGVuT25LZXlBbmRSZXBlYXQoa2V5LCBjYWxsYmFjaywgY2FuY2VsbGF0aW9uVG9rZW4pIHtcbiAgICBjYWxsYmFjayh7XG4gICAgICBrZXk6IGtleSxcbiAgICAgIG5ld1ZhbHVlOiB0aGlzLmRhdGFba2V5XSxcbiAgICAgIG9sZFZhbHVlOiB1bmRlZmluZWRcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5PbktleShrZXksIGNhbGxiYWNrLCBjYW5jZWxsYXRpb25Ub2tlbik7XG4gIH07XG5cbiAgX3Byb3RvLmxpc3Rlbk9uS2V5ID0gZnVuY3Rpb24gbGlzdGVuT25LZXkoa2V5LCBjYWxsYmFjaywgY2FuY2VsbGF0aW9uVG9rZW4pIHtcbiAgICBpZiAoIXRoaXMudXBkYXRlRXZlbnRPbktleS5oYXMoa2V5KSkge1xuICAgICAgdGhpcy51cGRhdGVFdmVudE9uS2V5LnNldChrZXksIG5ldyBFdmVudEVtaXR0ZXIoKSk7XG4gICAgfVxuXG4gICAgdmFyIGV2ZW50ID0gdGhpcy51cGRhdGVFdmVudE9uS2V5LmdldChrZXkpO1xuICAgIHJldHVybiBldmVudC5zdWJzY3JpYmUoY2FsbGJhY2ssIGNhbmNlbGxhdGlvblRva2VuKS5jYW5jZWw7XG4gIH07XG5cbiAgX3Byb3RvLmtleXMgPSBmdW5jdGlvbiBrZXlzKCkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmRhdGEpO1xuICB9O1xuXG4gIF9wcm90by52YWx1ZXMgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5kYXRhKTtcbiAgfTtcblxuICBfcHJvdG8uZ2V0ID0gZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgIHJldHVybiB0aGlzLmRhdGFba2V5XTtcbiAgfTtcblxuICBfcHJvdG9bXCJkZWxldGVcIl0gPSBmdW5jdGlvbiBfZGVsZXRlKGtleSkge1xuICAgIHZhciBvbGQgPSB0aGlzLmRhdGFba2V5XTtcbiAgICBkZWxldGUgdGhpcy5kYXRhW2tleV07XG4gICAgdGhpcy51cGRhdGVFdmVudC5maXJlKHtcbiAgICAgIG9sZFZhbHVlOiBvbGQsXG4gICAgICBrZXk6IGtleSxcbiAgICAgIG5ld1ZhbHVlOiB1bmRlZmluZWQsXG4gICAgICBkZWxldGVkOiB0cnVlXG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy51cGRhdGVFdmVudE9uS2V5LmhhcyhrZXkpKSB7XG4gICAgICB0aGlzLnVwZGF0ZUV2ZW50T25LZXkuZ2V0KGtleSkuZmlyZSh7XG4gICAgICAgIG9sZFZhbHVlOiBvbGQsXG4gICAgICAgIGtleToga2V5LFxuICAgICAgICBuZXdWYWx1ZTogdW5kZWZpbmVkXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnNldCA9IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG4gICAgaWYgKHRoaXMuZGF0YVtrZXldID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBvbGQgPSB0aGlzLmRhdGFba2V5XTtcbiAgICB0aGlzLmRhdGFba2V5XSA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlRXZlbnQuZmlyZSh7XG4gICAgICBvbGRWYWx1ZTogb2xkLFxuICAgICAga2V5OiBrZXksXG4gICAgICBuZXdWYWx1ZTogdGhpcy5kYXRhW2tleV1cbiAgICB9KTtcblxuICAgIGlmICh0aGlzLnVwZGF0ZUV2ZW50T25LZXkuaGFzKGtleSkpIHtcbiAgICAgIHRoaXMudXBkYXRlRXZlbnRPbktleS5nZXQoa2V5KS5maXJlKHtcbiAgICAgICAgb2xkVmFsdWU6IG9sZCxcbiAgICAgICAga2V5OiBrZXksXG4gICAgICAgIG5ld1ZhbHVlOiB0aGlzLmRhdGFba2V5XVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5hc3NpZ24gPSBmdW5jdGlvbiBhc3NpZ24obmV3RGF0YSkge1xuICAgIGlmIChuZXdEYXRhIGluc3RhbmNlb2YgT2JqZWN0RGF0YVNvdXJjZSkge1xuICAgICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShuZXdEYXRhLmtleXMoKSksIF9zdGVwOyAhKF9zdGVwID0gX2l0ZXJhdG9yKCkpLmRvbmU7KSB7XG4gICAgICAgIHZhciBrZXkgPSBfc3RlcC52YWx1ZTtcbiAgICAgICAgdGhpcy5zZXQoa2V5LCBuZXdEYXRhLmRhdGFba2V5XSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIF9pID0gMCwgX09iamVjdCRrZXlzID0gT2JqZWN0LmtleXMobmV3RGF0YSk7IF9pIDwgX09iamVjdCRrZXlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgX2tleSA9IF9PYmplY3Qka2V5c1tfaV07XG4gICAgICAgIHRoaXMuc2V0KF9rZXksIG5ld0RhdGFbX2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBfcHJvdG8udG9PYmplY3QgPSBmdW5jdGlvbiB0b09iamVjdCgpIHtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kYXRhKTtcbiAgfTtcblxuICBfcHJvdG8udG9EYXRhU291cmNlID0gZnVuY3Rpb24gdG9EYXRhU291cmNlKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICB2YXIgc3RyZWFtID0gbmV3IERhdGFTb3VyY2UodGhpcy5kYXRhKTtcbiAgICB0aGlzLmxpc3RlbihmdW5jdGlvbiAocykge1xuICAgICAgc3RyZWFtLnVwZGF0ZShfdGhpcy5kYXRhKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc3RyZWFtO1xuICB9O1xuXG4gIHJldHVybiBPYmplY3REYXRhU291cmNlO1xufSgpO1xuXG52YXIgTWFwRGF0YVNvdXJjZSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1hcERhdGFTb3VyY2UoaW5pdGlhbERhdGEpIHtcbiAgICBpZiAoaW5pdGlhbERhdGEpIHtcbiAgICAgIHRoaXMuZGF0YSA9IGluaXRpYWxEYXRhO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlRXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgdGhpcy51cGRhdGVFdmVudE9uS2V5ID0gbmV3IE1hcCgpO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IE1hcERhdGFTb3VyY2UucHJvdG90eXBlO1xuXG4gIF9wcm90by5waWNrID0gZnVuY3Rpb24gcGljayhrZXksIGNhbmNlbGxhdGlvblRva2VuKSB7XG4gICAgdmFyIHN1YkRhdGFTb3VyY2UgPSBuZXcgRGF0YVNvdXJjZSh0aGlzLmRhdGEuZ2V0KGtleSkpO1xuICAgIHRoaXMubGlzdGVuT25LZXkoa2V5LCBmdW5jdGlvbiAodikge1xuICAgICAgc3ViRGF0YVNvdXJjZS51cGRhdGUodi5uZXdWYWx1ZSk7XG4gICAgfSwgY2FuY2VsbGF0aW9uVG9rZW4pO1xuICAgIHJldHVybiBzdWJEYXRhU291cmNlO1xuICB9O1xuXG4gIF9wcm90by5saXN0ZW4gPSBmdW5jdGlvbiBsaXN0ZW4oY2FsbGJhY2ssIGNhbmNlbGxhdGlvblRva2VuKSB7XG4gICAgcmV0dXJuIHRoaXMudXBkYXRlRXZlbnQuc3Vic2NyaWJlKGNhbGxiYWNrLCBjYW5jZWxsYXRpb25Ub2tlbikuY2FuY2VsO1xuICB9O1xuXG4gIF9wcm90by5saXN0ZW5PbktleUFuZFJlcGVhdCA9IGZ1bmN0aW9uIGxpc3Rlbk9uS2V5QW5kUmVwZWF0KGtleSwgY2FsbGJhY2ssIGNhbmNlbGxhdGlvblRva2VuKSB7XG4gICAgY2FsbGJhY2soe1xuICAgICAga2V5OiBrZXksXG4gICAgICBuZXdWYWx1ZTogdGhpcy5kYXRhLmdldChrZXkpLFxuICAgICAgb2xkVmFsdWU6IHVuZGVmaW5lZFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmxpc3Rlbk9uS2V5KGtleSwgY2FsbGJhY2ssIGNhbmNlbGxhdGlvblRva2VuKTtcbiAgfTtcblxuICBfcHJvdG8ubGlzdGVuT25LZXkgPSBmdW5jdGlvbiBsaXN0ZW5PbktleShrZXksIGNhbGxiYWNrLCBjYW5jZWxsYXRpb25Ub2tlbikge1xuICAgIGlmICghdGhpcy51cGRhdGVFdmVudE9uS2V5LmhhcyhrZXkpKSB7XG4gICAgICB0aGlzLnVwZGF0ZUV2ZW50T25LZXkuc2V0KGtleSwgbmV3IEV2ZW50RW1pdHRlcigpKTtcbiAgICB9XG5cbiAgICB2YXIgZXZlbnQgPSB0aGlzLnVwZGF0ZUV2ZW50T25LZXkuZ2V0KGtleSk7XG4gICAgcmV0dXJuIGV2ZW50LnN1YnNjcmliZShjYWxsYmFjaywgY2FuY2VsbGF0aW9uVG9rZW4pLmNhbmNlbDtcbiAgfTtcblxuICBfcHJvdG8ua2V5cyA9IGZ1bmN0aW9uIGtleXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5rZXlzKCk7XG4gIH07XG5cbiAgX3Byb3RvLnZhbHVlcyA9IGZ1bmN0aW9uIHZhbHVlcygpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLnZhbHVlcygpO1xuICB9O1xuXG4gIF9wcm90by5nZXQgPSBmdW5jdGlvbiBnZXQoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5nZXQoa2V5KTtcbiAgfTtcblxuICBfcHJvdG8uaGFzID0gZnVuY3Rpb24gaGFzKGtleSkge1xuICAgIHJldHVybiB0aGlzLmRhdGEuaGFzKGtleSk7XG4gIH07XG5cbiAgX3Byb3RvW1wiZGVsZXRlXCJdID0gZnVuY3Rpb24gX2RlbGV0ZShrZXkpIHtcbiAgICB2YXIgb2xkID0gdGhpcy5kYXRhLmdldChrZXkpO1xuICAgIHRoaXMuZGF0YVtcImRlbGV0ZVwiXShrZXkpO1xuICAgIHRoaXMudXBkYXRlRXZlbnQuZmlyZSh7XG4gICAgICBvbGRWYWx1ZTogb2xkLFxuICAgICAga2V5OiBrZXksXG4gICAgICBuZXdWYWx1ZTogdW5kZWZpbmVkLFxuICAgICAgZGVsZXRlZDogdHJ1ZVxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMudXBkYXRlRXZlbnRPbktleS5oYXMoa2V5KSkge1xuICAgICAgdGhpcy51cGRhdGVFdmVudE9uS2V5LmdldChrZXkpLmZpcmUoe1xuICAgICAgICBvbGRWYWx1ZTogb2xkLFxuICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgbmV3VmFsdWU6IHVuZGVmaW5lZFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5zZXQgPSBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIGlmICh0aGlzLmRhdGEuZ2V0KGtleSkgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG9sZCA9IHRoaXMuZGF0YS5nZXQoa2V5KTtcbiAgICB0aGlzLmRhdGEuc2V0KGtleSwgdmFsdWUpO1xuICAgIHRoaXMudXBkYXRlRXZlbnQuZmlyZSh7XG4gICAgICBvbGRWYWx1ZTogb2xkLFxuICAgICAga2V5OiBrZXksXG4gICAgICBuZXdWYWx1ZTogdGhpcy5kYXRhLmdldChrZXkpXG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy51cGRhdGVFdmVudE9uS2V5LmhhcyhrZXkpKSB7XG4gICAgICB0aGlzLnVwZGF0ZUV2ZW50T25LZXkuZ2V0KGtleSkuZmlyZSh7XG4gICAgICAgIG9sZFZhbHVlOiBvbGQsXG4gICAgICAgIGtleToga2V5LFxuICAgICAgICBuZXdWYWx1ZTogdGhpcy5kYXRhLmdldChrZXkpXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmFzc2lnbiA9IGZ1bmN0aW9uIGFzc2lnbihuZXdEYXRhKSB7XG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShuZXdEYXRhLmtleXMoKSksIF9zdGVwOyAhKF9zdGVwID0gX2l0ZXJhdG9yKCkpLmRvbmU7KSB7XG4gICAgICB2YXIga2V5ID0gX3N0ZXAudmFsdWU7XG4gICAgICB0aGlzLnNldChrZXksIG5ld0RhdGEuZ2V0KGtleSkpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8udG9NYXAgPSBmdW5jdGlvbiB0b01hcCgpIHtcbiAgICByZXR1cm4gbmV3IE1hcCh0aGlzLmRhdGEuZW50cmllcygpKTtcbiAgfTtcblxuICByZXR1cm4gTWFwRGF0YVNvdXJjZTtcbn0oKTtcblxudmFyIFNldERhdGFTb3VyY2UgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTZXREYXRhU291cmNlKGluaXRpYWxEYXRhKSB7XG4gICAgaWYgKGluaXRpYWxEYXRhKSB7XG4gICAgICB0aGlzLmRhdGEgPSBpbml0aWFsRGF0YTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgIHRoaXMudXBkYXRlRXZlbnRPbktleSA9IG5ldyBNYXAoKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTZXREYXRhU291cmNlLnByb3RvdHlwZTtcblxuICBfcHJvdG8ucGljayA9IGZ1bmN0aW9uIHBpY2soa2V5LCBjYW5jZWxsYXRpb25Ub2tlbikge1xuICAgIHZhciBzdWJEYXRhU291cmNlID0gbmV3IERhdGFTb3VyY2UodGhpcy5kYXRhLmhhcyhrZXkpKTtcbiAgICB0aGlzLmxpc3Rlbk9uS2V5KGtleSwgZnVuY3Rpb24gKHYpIHtcbiAgICAgIHN1YkRhdGFTb3VyY2UudXBkYXRlKHYpO1xuICAgIH0sIGNhbmNlbGxhdGlvblRva2VuKTtcbiAgICByZXR1cm4gc3ViRGF0YVNvdXJjZTtcbiAgfTtcblxuICBfcHJvdG8ubGlzdGVuID0gZnVuY3Rpb24gbGlzdGVuKGNhbGxiYWNrLCBjYW5jZWxsYXRpb25Ub2tlbikge1xuICAgIHJldHVybiB0aGlzLnVwZGF0ZUV2ZW50LnN1YnNjcmliZShjYWxsYmFjaywgY2FuY2VsbGF0aW9uVG9rZW4pLmNhbmNlbDtcbiAgfTtcblxuICBfcHJvdG8ubGlzdGVuT25LZXlBbmRSZXBlYXQgPSBmdW5jdGlvbiBsaXN0ZW5PbktleUFuZFJlcGVhdChrZXksIGNhbGxiYWNrLCBjYW5jZWxsYXRpb25Ub2tlbikge1xuICAgIGNhbGxiYWNrKHRoaXMuaGFzKGtleSkpO1xuICAgIHJldHVybiB0aGlzLmxpc3Rlbk9uS2V5KGtleSwgY2FsbGJhY2ssIGNhbmNlbGxhdGlvblRva2VuKTtcbiAgfTtcblxuICBfcHJvdG8ubGlzdGVuT25LZXkgPSBmdW5jdGlvbiBsaXN0ZW5PbktleShrZXksIGNhbGxiYWNrLCBjYW5jZWxsYXRpb25Ub2tlbikge1xuICAgIGlmICghdGhpcy51cGRhdGVFdmVudE9uS2V5LmhhcyhrZXkpKSB7XG4gICAgICB0aGlzLnVwZGF0ZUV2ZW50T25LZXkuc2V0KGtleSwgbmV3IEV2ZW50RW1pdHRlcigpKTtcbiAgICB9XG5cbiAgICB2YXIgZXZlbnQgPSB0aGlzLnVwZGF0ZUV2ZW50T25LZXkuZ2V0KGtleSk7XG4gICAgcmV0dXJuIGV2ZW50LnN1YnNjcmliZShjYWxsYmFjaywgY2FuY2VsbGF0aW9uVG9rZW4pLmNhbmNlbDtcbiAgfTtcblxuICBfcHJvdG8ua2V5cyA9IGZ1bmN0aW9uIGtleXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YS5rZXlzKCk7XG4gIH07XG5cbiAgX3Byb3RvLmhhcyA9IGZ1bmN0aW9uIGhhcyhrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmhhcyhrZXkpO1xuICB9O1xuXG4gIF9wcm90b1tcImRlbGV0ZVwiXSA9IGZ1bmN0aW9uIF9kZWxldGUoa2V5KSB7XG4gICAgdGhpcy5kYXRhW1wiZGVsZXRlXCJdKGtleSk7XG4gICAgdGhpcy51cGRhdGVFdmVudC5maXJlKHtcbiAgICAgIGtleToga2V5LFxuICAgICAgZXhpc3RzOiBmYWxzZVxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMudXBkYXRlRXZlbnRPbktleS5oYXMoa2V5KSkge1xuICAgICAgdGhpcy51cGRhdGVFdmVudE9uS2V5LmdldChrZXkpLmZpcmUoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8uYWRkID0gZnVuY3Rpb24gYWRkKGtleSkge1xuICAgIGlmICh0aGlzLmRhdGEuaGFzKGtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmRhdGEuYWRkKGtleSk7XG4gICAgdGhpcy51cGRhdGVFdmVudC5maXJlKHtcbiAgICAgIGtleToga2V5LFxuICAgICAgZXhpc3RzOiB0cnVlXG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy51cGRhdGVFdmVudE9uS2V5LmhhcyhrZXkpKSB7XG4gICAgICB0aGlzLnVwZGF0ZUV2ZW50T25LZXkuZ2V0KGtleSkuZmlyZSh0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmFzc2lnbiA9IGZ1bmN0aW9uIGFzc2lnbihuZXdEYXRhKSB7XG4gICAgZm9yICh2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXJMb29zZShuZXdEYXRhLmtleXMoKSksIF9zdGVwOyAhKF9zdGVwID0gX2l0ZXJhdG9yKCkpLmRvbmU7KSB7XG4gICAgICB2YXIga2V5ID0gX3N0ZXAudmFsdWU7XG4gICAgICB0aGlzLmFkZChrZXkpO1xuICAgIH1cbiAgfTtcblxuICBfcHJvdG8udG9TZXQgPSBmdW5jdGlvbiB0b1NldCgpIHtcbiAgICByZXR1cm4gbmV3IFNldCh0aGlzLmRhdGEua2V5cygpKTtcbiAgfTtcblxuICByZXR1cm4gU2V0RGF0YVNvdXJjZTtcbn0oKTtcblxudmFyIGRlYnVnTW9kZSA9IGZhbHNlO1xuXG5leHBvcnRzLkFycmF5QXVydW1FbGVtZW50ID0gQXJyYXlBdXJ1bUVsZW1lbnQ7XG5leHBvcnRzLkFycmF5RGF0YVNvdXJjZSA9IEFycmF5RGF0YVNvdXJjZTtcbmV4cG9ydHMuQXVydW0gPSBBdXJ1bTtcbmV4cG9ydHMuQXVydW1FbGVtZW50ID0gQXVydW1FbGVtZW50O1xuZXhwb3J0cy5BdXJ1bVJvdXRlciA9IEF1cnVtUm91dGVyO1xuZXhwb3J0cy5DYW5jZWxsYXRpb25Ub2tlbiA9IENhbmNlbGxhdGlvblRva2VuO1xuZXhwb3J0cy5EYXRhU291cmNlID0gRGF0YVNvdXJjZTtcbmV4cG9ydHMuRGVmYXVsdFJvdXRlID0gRGVmYXVsdFJvdXRlO1xuZXhwb3J0cy5EZWZhdWx0U3dpdGNoQ2FzZSA9IERlZmF1bHRTd2l0Y2hDYXNlO1xuZXhwb3J0cy5EdXBsZXhEYXRhU291cmNlID0gRHVwbGV4RGF0YVNvdXJjZTtcbmV4cG9ydHMuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuZXhwb3J0cy5GaWx0ZXJlZEFycmF5VmlldyA9IEZpbHRlcmVkQXJyYXlWaWV3O1xuZXhwb3J0cy5NYXBEYXRhU291cmNlID0gTWFwRGF0YVNvdXJjZTtcbmV4cG9ydHMuTWFwcGVkQXJyYXlWaWV3ID0gTWFwcGVkQXJyYXlWaWV3O1xuZXhwb3J0cy5PYmplY3REYXRhU291cmNlID0gT2JqZWN0RGF0YVNvdXJjZTtcbmV4cG9ydHMuUmV2ZXJzZWRBcnJheVZpZXcgPSBSZXZlcnNlZEFycmF5VmlldztcbmV4cG9ydHMuUm91dGUgPSBSb3V0ZTtcbmV4cG9ydHMuU2V0RGF0YVNvdXJjZSA9IFNldERhdGFTb3VyY2U7XG5leHBvcnRzLlNpbmd1bGFyQXVydW1FbGVtZW50ID0gU2luZ3VsYXJBdXJ1bUVsZW1lbnQ7XG5leHBvcnRzLlNvcnRlZEFycmF5VmlldyA9IFNvcnRlZEFycmF5VmlldztcbmV4cG9ydHMuU3RyZWFtID0gU3RyZWFtO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5Td2l0Y2ggPSBTd2l0Y2g7XG5leHBvcnRzLlN3aXRjaENhc2UgPSBTd2l0Y2hDYXNlO1xuZXhwb3J0cy5UcmFuc2llbnREYXRhU291cmNlID0gVHJhbnNpZW50RGF0YVNvdXJjZTtcbmV4cG9ydHMuV2ViY29tcG9uZW50ID0gV2ViY29tcG9uZW50O1xuZXhwb3J0cy5hdXJ1bUNsYXNzTmFtZSA9IGF1cnVtQ2xhc3NOYW1lO1xuZXhwb3J0cy5hdXJ1bUVsZW1lbnRNb2RlbElkZW50aXRpeSA9IGF1cnVtRWxlbWVudE1vZGVsSWRlbnRpdGl5O1xuZXhwb3J0cy5jcmVhdGVBUEkgPSBjcmVhdGVBUEk7XG5leHBvcnRzLmNyZWF0ZVJlbmRlclNlc3Npb24gPSBjcmVhdGVSZW5kZXJTZXNzaW9uO1xuZXhwb3J0cy5kZWJ1Z01vZGUgPSBkZWJ1Z01vZGU7XG5leHBvcnRzLmRzQXdhaXQgPSBkc0F3YWl0O1xuZXhwb3J0cy5kc0F3YWl0TGF0ZXN0ID0gZHNBd2FpdExhdGVzdDtcbmV4cG9ydHMuZHNBd2FpdE9yZGVyZWQgPSBkc0F3YWl0T3JkZXJlZDtcbmV4cG9ydHMuZHNCdWZmZXIgPSBkc0J1ZmZlcjtcbmV4cG9ydHMuZHNDdXRPZmYgPSBkc0N1dE9mZjtcbmV4cG9ydHMuZHNDdXRPZmZEeW5hbWljID0gZHNDdXRPZmZEeW5hbWljO1xuZXhwb3J0cy5kc0RlYm91bmNlID0gZHNEZWJvdW5jZTtcbmV4cG9ydHMuZHNEZWxheSA9IGRzRGVsYXk7XG5leHBvcnRzLmRzRGlmZiA9IGRzRGlmZjtcbmV4cG9ydHMuZHNFdmVuID0gZHNFdmVuO1xuZXhwb3J0cy5kc0ZpbHRlciA9IGRzRmlsdGVyO1xuZXhwb3J0cy5kc0ZpbHRlckFzeW5jID0gZHNGaWx0ZXJBc3luYztcbmV4cG9ydHMuZHNMb2FkQmFsYW5jZSA9IGRzTG9hZEJhbGFuY2U7XG5leHBvcnRzLmRzTG9jayA9IGRzTG9jaztcbmV4cG9ydHMuZHNNYXAgPSBkc01hcDtcbmV4cG9ydHMuZHNNYXBBc3luYyA9IGRzTWFwQXN5bmM7XG5leHBvcnRzLmRzTWF4ID0gZHNNYXg7XG5leHBvcnRzLmRzTWluID0gZHNNaW47XG5leHBvcnRzLmRzT2RkID0gZHNPZGQ7XG5leHBvcnRzLmRzUGljayA9IGRzUGljaztcbmV4cG9ydHMuZHNQaXBlID0gZHNQaXBlO1xuZXhwb3J0cy5kc1JlZHVjZSA9IGRzUmVkdWNlO1xuZXhwb3J0cy5kc1NlbWFwaG9yZSA9IGRzU2VtYXBob3JlO1xuZXhwb3J0cy5kc1NraXAgPSBkc1NraXA7XG5leHBvcnRzLmRzU2tpcER5bmFtaWMgPSBkc1NraXBEeW5hbWljO1xuZXhwb3J0cy5kc1N0cmluZ0pvaW4gPSBkc1N0cmluZ0pvaW47XG5leHBvcnRzLmRzVGFwID0gZHNUYXA7XG5leHBvcnRzLmRzVGhyb3R0bGUgPSBkc1Rocm90dGxlO1xuZXhwb3J0cy5kc1VuaXF1ZSA9IGRzVW5pcXVlO1xuZXhwb3J0cy5ub2RlRGF0YSA9IG5vZGVEYXRhO1xuZXhwb3J0cy5wZW5kaW5nU2Vzc2lvbnMgPSBwZW5kaW5nU2Vzc2lvbnM7XG5leHBvcnRzLnByb2Nlc3NUcmFuc2Zvcm0gPSBwcm9jZXNzVHJhbnNmb3JtO1xuZXhwb3J0cy5yZW5kZXIgPSByZW5kZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hdXJ1bWpzLmpzLm1hcFxuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmh0bWwgYm9keSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbn1cXG5odG1sIGJvZHkgLnJvb3Qge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gbGVmdCwgYmxhY2ssICM0YzRiNGIpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbmh0bWwgYm9keSAucm9vdCBidXR0b24ge1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3NmVjZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyNzZlY2U7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbmh0bWwgYm9keSAucm9vdCBidXR0b246ZGlzYWJsZWQge1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG5odG1sIGJvZHkgLnJvb3QgLmlucHV0cyAubWludXRlcy1pbnB1dCxcXG5odG1sIGJvZHkgLnJvb3QgLmlucHV0cyAuc2Vjb25kcy1pbnB1dCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbn1cXG5odG1sIGJvZHkgLnJvb3QgLmlucHV0cyAuc2Vjb25kcy1pbnB1dCB7XFxuICBtYXJnaW4tbGVmdDogMzBweDtcXG59XFxuaHRtbCBib2R5IC5yb290IC5pbnB1dHMgLmlucHV0LXVuaXQge1xcbiAgY29sb3I6ICNlOGUzZTM7XFxuICBtYXJnaW4tcmlnaHQ6IDhweDtcXG4gIG1hcmdpbi1sZWZ0OiA0cHg7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiZXhwb3J0IGVudW0gQ291bnRkb3duU3RhdHVzIHtcclxuICAgIFNUT1BQRUQgPSAnU1RPUFBFRCcsXHJcbiAgICBQQVVTRUQgPSAnUEFVU0VEJyxcclxuICAgIFJVTk5JTkcgPSAnUlVOTklORycsXHJcbn1cclxuIiwiaW1wb3J0IHsgQXVydW0sIENhbmNlbGxhdGlvblRva2VuLCBEYXRhU291cmNlLCBSZW5kZXJhYmxlIH0gZnJvbSAnYXVydW1qcyc7XHJcbmltcG9ydCAnLi4vc2Nzcy9tYWluLnNjc3MnO1xyXG5pbXBvcnQgeyBDb3VudGRvd25TdGF0dXMgfSBmcm9tICcuL2NvdW50ZG93bl9zdGF0dXMnO1xyXG5pbXBvcnQgeyBQcm9ncmVzc0NpcmNsZSB9IGZyb20gJy4vcHJvZ3Jlc3NfY2lyY2xlL3Byb2dyZXNzX2NpcmNsZSc7XHJcblxyXG5jb25zdCBvcmlnaW5hbE1pbnV0ZXMgPSBuZXcgRGF0YVNvdXJjZShcIjAwXCIpO1xyXG5jb25zdCBvcmlnaW5hbFNlY29uZHMgPSBuZXcgRGF0YVNvdXJjZShcIjAwXCIpO1xyXG5jb25zdCBjb3VudERvd25UaW1lID0gbmV3IERhdGFTb3VyY2U8bnVtYmVyPih1bmRlZmluZWQpO1xyXG5jb25zdCBjb3VudERvd25TdGF0dXMgPSBuZXcgRGF0YVNvdXJjZShDb3VudGRvd25TdGF0dXMuU1RPUFBFRCk7XHJcblxyXG5sZXQgY2FuY2VsbGF0aW9uVG9rZW46IENhbmNlbGxhdGlvblRva2VuO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVySW5wdXRzKCk6IERhdGFTb3VyY2U8UmVuZGVyYWJsZT4ge1xyXG4gICAgcmV0dXJuIGNvdW50RG93blN0YXR1cy5tYXAoc3RhdHVzID0+XHJcbiAgICAgICAgc3RhdHVzID09PSBDb3VudGRvd25TdGF0dXMuU1RPUFBFRCA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0c1wiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtvcmlnaW5hbE1pbnV0ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgb25JbnB1dD17ZSA9PiBoYW5kbGVNaW51dGVzQ2hhbmdlKChlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtaW51dGVzLWlucHV0XCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LXVuaXRcIj5taW48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e29yaWdpbmFsU2Vjb25kc31cclxuICAgICAgICAgICAgICAgICAgICBvbklucHV0PXtlID0+IGhhbmRsZVNlY29uZHNDaGFuZ2UoKGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInNlY29uZHMtaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtdW5pdFwiPnM8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiBudWxsXHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJTdGFydEJ1dHRvbigpOiBEYXRhU291cmNlPFJlbmRlcmFibGU+IHtcclxuICAgIHJldHVybiBjb3VudERvd25TdGF0dXMubWFwKHN0YXR1cyA9PlxyXG4gICAgICAgIHN0YXR1cyAhPT0gQ291bnRkb3duU3RhdHVzLlJVTk5JTkdcclxuICAgICAgICAgICAgPyA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHN0YXJ0Q291bnRkb3duKCl9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17RGF0YVNvdXJjZS5mcm9tTXVsdGlwbGVTb3VyY2VzKFtvcmlnaW5hbE1pbnV0ZXMsIG9yaWdpbmFsU2Vjb25kc10pXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoKSA9PiBjb21wdXRlT3JpZ2luYWxTZWNvbmRzKCkgPT09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgLndpdGhJbml0aWFsKGNvbXB1dGVPcmlnaW5hbFNlY29uZHMoKSA9PT0gMCl9PlxyXG4gICAgICAgICAgICAgICAgU1RBUlRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDogbnVsbFxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyU3RvcEJ1dHRvbigpOiBEYXRhU291cmNlPFJlbmRlcmFibGU+IHtcclxuICAgIHJldHVybiBjb3VudERvd25TdGF0dXMubWFwKHN0YXR1cyA9PlxyXG4gICAgICAgIHN0YXR1cyAhPT0gQ291bnRkb3duU3RhdHVzLlNUT1BQRUQgPyA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHN0b3BDb3VudGRvd24oKX0+U1RPUDwvYnV0dG9uPiA6IG51bGxcclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckNvdW50ZG93bigpOiBEYXRhU291cmNlPFJlbmRlcmFibGU+IHtcclxuICAgIHJldHVybiBjb3VudERvd25TdGF0dXMubWFwKHN0YXR1cyA9PiBzdGF0dXMgIT09IENvdW50ZG93blN0YXR1cy5TVE9QUEVEID8gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtyZW5kZXJQcm9ncmVzc0NpcmNsZSgpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKSA6IG51bGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJQcm9ncmVzc0NpcmNsZSgpOiBEYXRhU291cmNlPFJlbmRlcmFibGU+IHtcclxuICAgIHJldHVybiA8UHJvZ3Jlc3NDaXJjbGUgdG90YWxUaW1lPXtjb21wdXRlT3JpZ2luYWxTZWNvbmRzKCl9IHN0YXR1cz17Y291bnREb3duU3RhdHVzfSAvPjtcclxufVxyXG5cclxuZnVuY3Rpb24gc3RhcnRDb3VudGRvd24oKSB7XHJcbiAgICBjb3VudERvd25TdGF0dXMudXBkYXRlKENvdW50ZG93blN0YXR1cy5SVU5OSU5HKTtcclxuXHJcbiAgICBjYW5jZWxsYXRpb25Ub2tlbiA9IG5ldyBDYW5jZWxsYXRpb25Ub2tlbigpO1xyXG5cclxuICAgIGxldCBzdGFydFRpbWU6IG51bWJlcjtcclxuICAgIGNvbnN0IHRvdGFsVGltZSA9IGNvbXB1dGVPcmlnaW5hbFNlY29uZHMoKTtcclxuICAgIGNhbmNlbGxhdGlvblRva2VuLmFuaW1hdGlvbkxvb3AodGlja1RpbWUpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRpY2tUaW1lKHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmIChzdGFydFRpbWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzdGFydFRpbWUgPSB0aW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZWxhcHNlZFRpbWUgPSB0aW1lIC0gc3RhcnRUaW1lO1xyXG4gICAgICAgIGNvbnN0IGVsYXBzZWRTZWNvbmRzID0gZWxhcHNlZFRpbWUgLyAxMDAwO1xyXG4gICAgICAgIGNvbnN0IHJlbWFpbmluZ1NlY29uZHMgPSBNYXRoLm1heCh0b3RhbFRpbWUgLSBlbGFwc2VkU2Vjb25kcyArIDEsIDApO1xyXG5cclxuICAgICAgICBpZiAocmVtYWluaW5nU2Vjb25kcyA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb3VudERvd25TdGF0dXMudXBkYXRlKENvdW50ZG93blN0YXR1cy5TVE9QUEVEKTtcclxuICAgICAgICAgICAgY2FuY2VsbGF0aW9uVG9rZW4uY2FuY2VsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzdG9wQ291bnRkb3duKCkge1xyXG4gICAgY291bnREb3duU3RhdHVzLnVwZGF0ZShDb3VudGRvd25TdGF0dXMuU1RPUFBFRCk7XHJcbiAgICBjYW5jZWxsYXRpb25Ub2tlbi5jYW5jZWwoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29tcHV0ZU9yaWdpbmFsU2Vjb25kcygpIHtcclxuICAgIHJldHVybiBOdW1iZXIob3JpZ2luYWxNaW51dGVzLnZhbHVlKSAqIDYwICsgTnVtYmVyKG9yaWdpbmFsU2Vjb25kcy52YWx1ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZU1pbnV0ZXNDaGFuZ2UodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgbGV0IG1pbnV0ZXM6IHN0cmluZyA9IHZhbHVlO1xyXG4gICAgaWYgKE51bWJlcihtaW51dGVzKSA+IDIzKSB7XHJcbiAgICAgICAgbWludXRlcyA9ICcyMyc7XHJcbiAgICB9XHJcbiAgICBvcmlnaW5hbE1pbnV0ZXMudXBkYXRlKG1pbnV0ZXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVTZWNvbmRzQ2hhbmdlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGxldCBzZWNvbmRzOiBzdHJpbmcgPSB2YWx1ZTtcclxuICAgIGlmIChOdW1iZXIoc2Vjb25kcykgPiA1OSkge1xyXG4gICAgICAgIHNlY29uZHMgPSAnNTknO1xyXG4gICAgfVxyXG4gICAgb3JpZ2luYWxTZWNvbmRzLnVwZGF0ZShzZWNvbmRzKTtcclxufVxyXG5cclxuQXVydW0uYXR0YWNoKFxyXG4gICAgPGRpdiBjbGFzcz1cInJvb3RcIj5cclxuICAgICAgICB7cmVuZGVySW5wdXRzKCl9XHJcbiAgICAgICAge3JlbmRlclN0YXJ0QnV0dG9uKCl9XHJcbiAgICAgICAge3JlbmRlckNvdW50ZG93bigpfVxyXG4gICAgICAgIHtyZW5kZXJTdG9wQnV0dG9uKCl9XHJcbiAgICA8L2Rpdj4sXHJcbiAgICBkb2N1bWVudC5ib2R5XHJcbik7XHJcbiIsImltcG9ydCB7IEF1cnVtLCBDYW5jZWxsYXRpb25Ub2tlbiwgUmVuZGVyYWJsZSB9IGZyb20gJ2F1cnVtanMnO1xyXG5pbXBvcnQgeyBDb3VudGRvd25TdGF0dXMgfSBmcm9tICcuLi9jb3VudGRvd25fc3RhdHVzJztcclxuaW1wb3J0IHsgUHJvZ3Jlc3NDaXJjbGVQcm9wcyB9IGZyb20gJy4vcHJvZ3Jlc3NfY2lyY2xlX3Byb3BzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQcm9ncmVzc0NpcmNsZShwcm9wczogUHJvZ3Jlc3NDaXJjbGVQcm9wcyk6IFJlbmRlcmFibGUge1xyXG5cclxuICAgIHJldHVybiA8Y2FudmFzIHdpZHRoPVwiMjUwXCIgaGVpZ2h0PVwiMjUwXCIgb25BdHRhY2g9eyhjYW52YXNFbGVtZW50KSA9PiBpbml0Q2FudmFzKGNhbnZhc0VsZW1lbnQpfT48L2NhbnZhcz47XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdENhbnZhcyhjYW52YXNFbGVtOiBIVE1MQ2FudmFzRWxlbWVudCkge1xyXG4gICAgICAgIGNvbnN0IGNhbmNlbGxhdGlvblRva2VuOiBDYW5jZWxsYXRpb25Ub2tlbiA9IG5ldyBDYW5jZWxsYXRpb25Ub2tlbigpO1xyXG4gICAgICAgIHByb3BzLnN0YXR1cy5saXN0ZW4oc3RhdHVzID0+IHN0YXR1cyA9PT0gQ291bnRkb3duU3RhdHVzLlNUT1BQRUQgJiYgY2FuY2VsbGF0aW9uVG9rZW4uY2FuY2VsKCkpO1xyXG5cclxuICAgICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzRWxlbS5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgICAgIGNvbnRleHQubGluZUNhcCA9ICdyb3VuZCc7XHJcblxyXG4gICAgICAgIGNvbnN0IHggPSBjYW52YXNFbGVtLndpZHRoIC8gMjtcclxuICAgICAgICBjb25zdCB5ID0gY2FudmFzRWxlbS5oZWlnaHQgLyAyO1xyXG4gICAgICAgIGNvbnN0IHJhZFN0YXJ0ID0gY29tcHV0ZVJhZEFuZ2xlKDApO1xyXG4gICAgICAgIGNvbnN0IHJhZEVuZCA9IGNvbXB1dGVSYWRBbmdsZSgzNjApO1xyXG4gICAgICAgIGNvbnN0IGxpbmVXaWR0aCA9IDEwO1xyXG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IGNhbnZhc0VsZW0ud2lkdGggLyAyIC0gbGluZVdpZHRoO1xyXG5cclxuICAgICAgICBsZXQgc3RhcnRUaW1lOiBudW1iZXI7XHJcbiAgICAgICAgbGV0IGRlZ3JlZXNQZXJTZWNvbmQ6IG51bWJlcjtcclxuXHJcbiAgICAgICAgY2FuY2VsbGF0aW9uVG9rZW4uYW5pbWF0aW9uTG9vcCgodGltZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIGNhbnZhc0VsZW0ud2lkdGgsIGNhbnZhc0VsZW0uaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIGRyYXdDaXJjbGUocmFkRW5kLCAnI2IxYjFiMScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXJ0VGltZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydFRpbWUgPSB0aW1lO1xyXG4gICAgICAgICAgICAgICAgZGVncmVlc1BlclNlY29uZCA9IDM2MCAvIHByb3BzLnRvdGFsVGltZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZWxhcHNlZFRpbWUgPSB0aW1lIC0gc3RhcnRUaW1lO1xyXG4gICAgICAgICAgICBjb25zdCBlbGFwc2VkU2Vjb25kcyA9IGVsYXBzZWRUaW1lIC8gMTAwMDtcclxuICAgICAgICAgICAgY29uc3QgcmVtYWluaW5nU2Vjb25kcyA9IE1hdGgubWF4KHByb3BzLnRvdGFsVGltZSAtIGVsYXBzZWRTZWNvbmRzICsgMSwgMCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcm9ncmVzc0RlZ3JlZXMgPSBNYXRoLm1pbihlbGFwc2VkU2Vjb25kcyAqIGRlZ3JlZXNQZXJTZWNvbmQsIDM2MCk7XHJcbiAgICAgICAgICAgIGRyYXdDaXJjbGUoY29tcHV0ZVJhZEFuZ2xlKHByb2dyZXNzRGVncmVlcyksICcjNmVlZWVlJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtaW51dGVzID0gYCR7TWF0aC5mbG9vcihyZW1haW5pbmdTZWNvbmRzIC8gNjApfWAucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBzZWNvbmRzID0gYCR7TWF0aC5mbG9vcihyZW1haW5pbmdTZWNvbmRzIC0gTWF0aC5mbG9vcihyZW1haW5pbmdTZWNvbmRzIC8gNjApICogNjApfWAucGFkU3RhcnQoMiwgXCIwXCIpO1xyXG4gICAgICAgICAgICBkcmF3UHJvZ3Jlc3NMYWJlbChtaW51dGVzLCBzZWNvbmRzKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwcm9ncmVzc0RlZ3JlZXMgPT09IDM2MCkge1xyXG4gICAgICAgICAgICAgICAgY2FuY2VsbGF0aW9uVG9rZW4uY2FuY2VsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZHJhd1Byb2dyZXNzTGFiZWwobWludXRlczogc3RyaW5nLCBzZWNvbmRzOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAnI2U4ZTNlMyc7XHJcbiAgICAgICAgICAgIGNvbnRleHQudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICAgICAgICAgIGNvbnRleHQudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZm9udCA9ICc2MHB4IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYnO1xyXG4gICAgICAgICAgICBjb250ZXh0LmZpbGxUZXh0KGAke21pbnV0ZXN9OiR7c2Vjb25kc31gLCB4LCB5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGRyYXdDaXJjbGUoZW5kQW5nbGU6IG51bWJlciwgY29sb3I6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgICAgICBjb250ZXh0LmFyYyh4LCB5LCByYWRpdXMsIHJhZFN0YXJ0LCBlbmRBbmdsZSk7XHJcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSBsaW5lV2lkdGg7XHJcbiAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBjb21wdXRlUmFkQW5nbGUoZGVncmVlczogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gKE1hdGguUEkgLyAxODApICogKDI3MCArIGRlZ3JlZXMpO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==
// The game “Molly’s Adventure Under the Sea” makes use of:
// MediaElement.js http://www.mediaelementjs.com/
// Wrapper that mimics native HTML5 MediaElement (audio and video) using a variety of technologies (pure JavaScript, Flash, iframe)
// Copyright (c) 2017, John Dyer (http://j.hn/)
// License: MIT
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//
!(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = "function" == typeof require && require;
        if (!u && a) return a(o, !0);
        if (i) return i(o, !0);
        var f = new Error("Cannot find module '" + o + "'");
        throw ((f.code = "MODULE_NOT_FOUND"), f);
      }
      var l = (n[o] = { exports: {} });
      t[o][0].call(
        l.exports,
        function (e) {
          var n = t[o][1][e];
          return s(n ? n : e);
        },
        l,
        l.exports,
        e,
        t,
        n,
        r
      );
    }
    return n[o].exports;
  }
  for (
    var i = "function" == typeof require && require, o = 0;
    o < r.length;
    o++
  )
    s(r[o]);
  return s;
})(
  {
    1: [function (_dereq_, module, exports) {}, {}],
    2: [
      function (_dereq_, module, exports) {
        (function (global) {
          var doccy,
            topLevel =
              "undefined" != typeof global
                ? global
                : "undefined" != typeof window
                ? window
                : {},
            minDoc = _dereq_(1);
          "undefined" != typeof document
            ? (doccy = document)
            : ((doccy = topLevel["__GLOBAL_DOCUMENT_CACHE@4"]),
              doccy ||
                (doccy = topLevel["__GLOBAL_DOCUMENT_CACHE@4"] = minDoc)),
            (module.exports = doccy);
        }.call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        ));
      },
      { 1: 1 },
    ],
    3: [
      function (_dereq_, module, exports) {
        (function (global) {
          var win;
          (win =
            "undefined" != typeof window
              ? window
              : "undefined" != typeof global
              ? global
              : "undefined" != typeof self
              ? self
              : {}),
            (module.exports = win);
        }.call(
          this,
          "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : {}
        ));
      },
      {},
    ],
    4: [
      function (_dereq_, module, exports) {
        !(function (root) {
          function noop() {}
          function bind(fn, thisArg) {
            return function () {
              fn.apply(thisArg, arguments);
            };
          }
          function Promise(fn) {
            if ("object" != typeof this)
              throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof fn) throw new TypeError("not a function");
            (this._state = 0),
              (this._handled = !1),
              (this._value = void 0),
              (this._deferreds = []),
              doResolve(fn, this);
          }
          function handle(self, deferred) {
            for (; 3 === self._state; ) self = self._value;
            return 0 === self._state
              ? void self._deferreds.push(deferred)
              : ((self._handled = !0),
                void Promise._immediateFn(function () {
                  var cb =
                    1 === self._state
                      ? deferred.onFulfilled
                      : deferred.onRejected;
                  if (null === cb)
                    return void (1 === self._state ? resolve : reject)(
                      deferred.promise,
                      self._value
                    );
                  var ret;
                  try {
                    ret = cb(self._value);
                  } catch (e) {
                    return void reject(deferred.promise, e);
                  }
                  resolve(deferred.promise, ret);
                }));
          }
          function resolve(self, newValue) {
            try {
              if (newValue === self)
                throw new TypeError(
                  "A promise cannot be resolved with itself."
                );
              if (
                newValue &&
                ("object" == typeof newValue || "function" == typeof newValue)
              ) {
                var then = newValue.then;
                if (newValue instanceof Promise)
                  return (
                    (self._state = 3),
                    (self._value = newValue),
                    void finale(self)
                  );
                if ("function" == typeof then)
                  return void doResolve(bind(then, newValue), self);
              }
              (self._state = 1), (self._value = newValue), finale(self);
            } catch (e) {
              reject(self, e);
            }
          }
          function reject(self, newValue) {
            (self._state = 2), (self._value = newValue), finale(self);
          }
          function finale(self) {
            2 === self._state &&
              0 === self._deferreds.length &&
              Promise._immediateFn(function () {
                self._handled || Promise._unhandledRejectionFn(self._value);
              });
            for (var i = 0, len = self._deferreds.length; i < len; i++)
              handle(self, self._deferreds[i]);
            self._deferreds = null;
          }
          function Handler(onFulfilled, onRejected, promise) {
            (this.onFulfilled =
              "function" == typeof onFulfilled ? onFulfilled : null),
              (this.onRejected =
                "function" == typeof onRejected ? onRejected : null),
              (this.promise = promise);
          }
          function doResolve(fn, self) {
            var done = !1;
            try {
              fn(
                function (value) {
                  done || ((done = !0), resolve(self, value));
                },
                function (reason) {
                  done || ((done = !0), reject(self, reason));
                }
              );
            } catch (ex) {
              if (done) return;
              (done = !0), reject(self, ex);
            }
          }
          var setTimeoutFunc = setTimeout;
          (Promise.prototype["catch"] = function (onRejected) {
            return this.then(null, onRejected);
          }),
            (Promise.prototype.then = function (onFulfilled, onRejected) {
              var prom = new this.constructor(noop);
              return (
                handle(this, new Handler(onFulfilled, onRejected, prom)), prom
              );
            }),
            (Promise.all = function (arr) {
              var args = Array.prototype.slice.call(arr);
              return new Promise(function (resolve, reject) {
                function res(i, val) {
                  try {
                    if (
                      val &&
                      ("object" == typeof val || "function" == typeof val)
                    ) {
                      var then = val.then;
                      if ("function" == typeof then)
                        return void then.call(
                          val,
                          function (val) {
                            res(i, val);
                          },
                          reject
                        );
                    }
                    (args[i] = val), 0 === --remaining && resolve(args);
                  } catch (ex) {
                    reject(ex);
                  }
                }
                if (0 === args.length) return resolve([]);
                for (var remaining = args.length, i = 0; i < args.length; i++)
                  res(i, args[i]);
              });
            }),
            (Promise.resolve = function (value) {
              return value &&
                "object" == typeof value &&
                value.constructor === Promise
                ? value
                : new Promise(function (resolve) {
                    resolve(value);
                  });
            }),
            (Promise.reject = function (value) {
              return new Promise(function (resolve, reject) {
                reject(value);
              });
            }),
            (Promise.race = function (values) {
              return new Promise(function (resolve, reject) {
                for (var i = 0, len = values.length; i < len; i++)
                  values[i].then(resolve, reject);
              });
            }),
            (Promise._immediateFn =
              ("function" == typeof setImmediate &&
                function (fn) {
                  setImmediate(fn);
                }) ||
              function (fn) {
                setTimeoutFunc(fn, 0);
              }),
            (Promise._unhandledRejectionFn = function (err) {
              "undefined" != typeof console &&
                console &&
                console.warn("Possible Unhandled Promise Rejection:", err);
            }),
            (Promise._setImmediateFn = function (fn) {
              Promise._immediateFn = fn;
            }),
            (Promise._setUnhandledRejectionFn = function (fn) {
              Promise._unhandledRejectionFn = fn;
            }),
            "undefined" != typeof module && module.exports
              ? (module.exports = Promise)
              : root.Promise || (root.Promise = Promise);
        })(this);
      },
      {},
    ],
    5: [
      function (_dereq_, module, exports) {
        "use strict";
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        Object.defineProperty(exports, "__esModule", { value: !0 });
        var _typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    "function" == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? "symbol"
                    : typeof obj;
                },
          _mejs = _dereq_(7),
          _mejs2 = _interopRequireDefault(_mejs),
          _en = _dereq_(15),
          _general = _dereq_(27),
          i18n = { lang: "en", en: _en.EN };
        (i18n.language = function () {
          for (
            var _len = arguments.length, args = Array(_len), _key = 0;
            _key < _len;
            _key++
          )
            args[_key] = arguments[_key];
          if (null !== args && void 0 !== args && args.length) {
            if ("string" != typeof args[0])
              throw new TypeError("Language code must be a string value");
            if (!/^(([a-z]{2}((\-|_)[a-z]{2})?)|([a-z]{3}))$/i.test(args[0]))
              throw new TypeError(
                "Language code must have format `xx`, `xxx`, `xx_XX` or `xx-xx`"
              );
            (i18n.lang = args[0]),
              void 0 === i18n[args[0]]
                ? ((args[1] =
                    null !== args[1] &&
                    void 0 !== args[1] &&
                    "object" === _typeof(args[1])
                      ? args[1]
                      : {}),
                  (i18n[args[0]] = (0, _general.isObjectEmpty)(args[1])
                    ? _en.EN
                    : args[1]))
                : null !== args[1] &&
                  void 0 !== args[1] &&
                  "object" === _typeof(args[1]) &&
                  (i18n[args[0]] = args[1]);
          }
          return i18n.lang;
        }),
          (i18n.t = function (message) {
            var pluralParam =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : null;
            if ("string" == typeof message && message.length) {
              var str = void 0,
                pluralForm = void 0,
                language = i18n.language(),
                _plural = function (input, number, form) {
                  if (
                    "object" !==
                      ("undefined" == typeof input
                        ? "undefined"
                        : _typeof(input)) ||
                    "number" != typeof number ||
                    "number" != typeof form
                  )
                    return input;
                  var _pluralForms = (function () {
                    return [
                      function () {
                        return arguments.length <= 1 ? void 0 : arguments[1];
                      },
                      function () {
                        return 1 ===
                          (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 1
                            ? void 0
                            : arguments[1]
                          : arguments.length <= 2
                          ? void 0
                          : arguments[2];
                      },
                      function () {
                        return 0 ===
                          (arguments.length <= 0 ? void 0 : arguments[0]) ||
                          1 === (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 1
                            ? void 0
                            : arguments[1]
                          : arguments.length <= 2
                          ? void 0
                          : arguments[2];
                      },
                      function () {
                        return (arguments.length <= 0 ? void 0 : arguments[0]) %
                          10 ===
                          1 &&
                          (arguments.length <= 0 ? void 0 : arguments[0]) %
                            100 !==
                            11
                          ? arguments.length <= 1
                            ? void 0
                            : arguments[1]
                          : 0 !==
                            (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 2
                            ? void 0
                            : arguments[2]
                          : arguments.length <= 3
                          ? void 0
                          : arguments[3];
                      },
                      function () {
                        return 1 ===
                          (arguments.length <= 0 ? void 0 : arguments[0]) ||
                          11 === (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 1
                            ? void 0
                            : arguments[1]
                          : 2 ===
                              (arguments.length <= 0 ? void 0 : arguments[0]) ||
                            12 ===
                              (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 2
                            ? void 0
                            : arguments[2]
                          : (arguments.length <= 0 ? void 0 : arguments[0]) >
                              2 &&
                            (arguments.length <= 0 ? void 0 : arguments[0]) < 20
                          ? arguments.length <= 3
                            ? void 0
                            : arguments[3]
                          : arguments.length <= 4
                          ? void 0
                          : arguments[4];
                      },
                      function () {
                        return 1 ===
                          (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 1
                            ? void 0
                            : arguments[1]
                          : 0 ===
                              (arguments.length <= 0 ? void 0 : arguments[0]) ||
                            ((arguments.length <= 0 ? void 0 : arguments[0]) %
                              100 >
                              0 &&
                              (arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 <
                                20)
                          ? arguments.length <= 2
                            ? void 0
                            : arguments[2]
                          : arguments.length <= 3
                          ? void 0
                          : arguments[3];
                      },
                      function () {
                        return (arguments.length <= 0 ? void 0 : arguments[0]) %
                          10 ===
                          1 &&
                          (arguments.length <= 0 ? void 0 : arguments[0]) %
                            100 !==
                            11
                          ? arguments.length <= 1
                            ? void 0
                            : arguments[1]
                          : (arguments.length <= 0 ? void 0 : arguments[0]) %
                              10 >=
                              2 &&
                            ((arguments.length <= 0 ? void 0 : arguments[0]) %
                              100 <
                              10 ||
                              (arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 >=
                                20)
                          ? arguments.length <= 2
                            ? void 0
                            : arguments[2]
                          : [3];
                      },
                      function () {
                        return (arguments.length <= 0 ? void 0 : arguments[0]) %
                          10 ===
                          1 &&
                          (arguments.length <= 0 ? void 0 : arguments[0]) %
                            100 !==
                            11
                          ? arguments.length <= 1
                            ? void 0
                            : arguments[1]
                          : (arguments.length <= 0 ? void 0 : arguments[0]) %
                              10 >=
                              2 &&
                            (arguments.length <= 0 ? void 0 : arguments[0]) %
                              10 <=
                              4 &&
                            ((arguments.length <= 0 ? void 0 : arguments[0]) %
                              100 <
                              10 ||
                              (arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 >=
                                20)
                          ? arguments.length <= 2
                            ? void 0
                            : arguments[2]
                          : arguments.length <= 3
                          ? void 0
                          : arguments[3];
                      },
                      function () {
                        return 1 ===
                          (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 1
                            ? void 0
                            : arguments[1]
                          : (arguments.length <= 0 ? void 0 : arguments[0]) >=
                              2 &&
                            (arguments.length <= 0 ? void 0 : arguments[0]) <= 4
                          ? arguments.length <= 2
                            ? void 0
                            : arguments[2]
                          : arguments.length <= 3
                          ? void 0
                          : arguments[3];
                      },
                      function () {
                        return 1 ===
                          (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 1
                            ? void 0
                            : arguments[1]
                          : (arguments.length <= 0 ? void 0 : arguments[0]) %
                              10 >=
                              2 &&
                            (arguments.length <= 0 ? void 0 : arguments[0]) %
                              10 <=
                              4 &&
                            ((arguments.length <= 0 ? void 0 : arguments[0]) %
                              100 <
                              10 ||
                              (arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 >=
                                20)
                          ? arguments.length <= 2
                            ? void 0
                            : arguments[2]
                          : arguments.length <= 3
                          ? void 0
                          : arguments[3];
                      },
                      function () {
                        return (arguments.length <= 0 ? void 0 : arguments[0]) %
                          100 ===
                          1
                          ? arguments.length <= 2
                            ? void 0
                            : arguments[2]
                          : (arguments.length <= 0 ? void 0 : arguments[0]) %
                              100 ===
                            2
                          ? arguments.length <= 3
                            ? void 0
                            : arguments[3]
                          : (arguments.length <= 0 ? void 0 : arguments[0]) %
                              100 ===
                              3 ||
                            (arguments.length <= 0 ? void 0 : arguments[0]) %
                              100 ===
                              4
                          ? arguments.length <= 4
                            ? void 0
                            : arguments[4]
                          : arguments.length <= 1
                          ? void 0
                          : arguments[1];
                      },
                      function () {
                        return 1 ===
                          (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 1
                            ? void 0
                            : arguments[1]
                          : 2 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 2
                            ? void 0
                            : arguments[2]
                          : (arguments.length <= 0 ? void 0 : arguments[0]) >
                              2 &&
                            (arguments.length <= 0 ? void 0 : arguments[0]) < 7
                          ? arguments.length <= 3
                            ? void 0
                            : arguments[3]
                          : (arguments.length <= 0 ? void 0 : arguments[0]) >
                              6 &&
                            (arguments.length <= 0 ? void 0 : arguments[0]) < 11
                          ? arguments.length <= 4
                            ? void 0
                            : arguments[4]
                          : arguments.length <= 5
                          ? void 0
                          : arguments[5];
                      },
                      function () {
                        return 0 ===
                          (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 1
                            ? void 0
                            : arguments[1]
                          : 1 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 2
                            ? void 0
                            : arguments[2]
                          : 2 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 3
                            ? void 0
                            : arguments[3]
                          : (arguments.length <= 0 ? void 0 : arguments[0]) %
                              100 >=
                              3 &&
                            (arguments.length <= 0 ? void 0 : arguments[0]) %
                              100 <=
                              10
                          ? arguments.length <= 4
                            ? void 0
                            : arguments[4]
                          : (arguments.length <= 0 ? void 0 : arguments[0]) %
                              100 >=
                            11
                          ? arguments.length <= 5
                            ? void 0
                            : arguments[5]
                          : arguments.length <= 6
                          ? void 0
                          : arguments[6];
                      },
                      function () {
                        return 1 ===
                          (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 1
                            ? void 0
                            : arguments[1]
                          : 0 ===
                              (arguments.length <= 0 ? void 0 : arguments[0]) ||
                            ((arguments.length <= 0 ? void 0 : arguments[0]) %
                              100 >
                              1 &&
                              (arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 <
                                11)
                          ? arguments.length <= 2
                            ? void 0
                            : arguments[2]
                          : (arguments.length <= 0 ? void 0 : arguments[0]) %
                              100 >
                              10 &&
                            (arguments.length <= 0 ? void 0 : arguments[0]) %
                              100 <
                              20
                          ? arguments.length <= 3
                            ? void 0
                            : arguments[3]
                          : arguments.length <= 4
                          ? void 0
                          : arguments[4];
                      },
                      function () {
                        return (arguments.length <= 0 ? void 0 : arguments[0]) %
                          10 ===
                          1
                          ? arguments.length <= 1
                            ? void 0
                            : arguments[1]
                          : (arguments.length <= 0 ? void 0 : arguments[0]) %
                              10 ===
                            2
                          ? arguments.length <= 2
                            ? void 0
                            : arguments[2]
                          : arguments.length <= 3
                          ? void 0
                          : arguments[3];
                      },
                      function () {
                        return 11 !==
                          (arguments.length <= 0 ? void 0 : arguments[0]) &&
                          (arguments.length <= 0 ? void 0 : arguments[0]) %
                            10 ===
                            1
                          ? arguments.length <= 1
                            ? void 0
                            : arguments[1]
                          : arguments.length <= 2
                          ? void 0
                          : arguments[2];
                      },
                      function () {
                        return 1 ===
                          (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 1
                            ? void 0
                            : arguments[1]
                          : (arguments.length <= 0 ? void 0 : arguments[0]) %
                              10 >=
                              2 &&
                            (arguments.length <= 0 ? void 0 : arguments[0]) %
                              10 <=
                              4 &&
                            ((arguments.length <= 0 ? void 0 : arguments[0]) %
                              100 <
                              10 ||
                              (arguments.length <= 0 ? void 0 : arguments[0]) %
                                100 >=
                                20)
                          ? arguments.length <= 2
                            ? void 0
                            : arguments[2]
                          : arguments.length <= 3
                          ? void 0
                          : arguments[3];
                      },
                      function () {
                        return 1 ===
                          (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 1
                            ? void 0
                            : arguments[1]
                          : 2 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 2
                            ? void 0
                            : arguments[2]
                          : 8 !==
                              (arguments.length <= 0 ? void 0 : arguments[0]) &&
                            11 !==
                              (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 3
                            ? void 0
                            : arguments[3]
                          : arguments.length <= 4
                          ? void 0
                          : arguments[4];
                      },
                      function () {
                        return 0 ===
                          (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 1
                            ? void 0
                            : arguments[1]
                          : arguments.length <= 2
                          ? void 0
                          : arguments[2];
                      },
                      function () {
                        return 1 ===
                          (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 1
                            ? void 0
                            : arguments[1]
                          : 2 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 2
                            ? void 0
                            : arguments[2]
                          : 3 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 3
                            ? void 0
                            : arguments[3]
                          : arguments.length <= 4
                          ? void 0
                          : arguments[4];
                      },
                      function () {
                        return 0 ===
                          (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 1
                            ? void 0
                            : arguments[1]
                          : 1 ===
                            (arguments.length <= 0 ? void 0 : arguments[0])
                          ? arguments.length <= 2
                            ? void 0
                            : arguments[2]
                          : arguments.length <= 3
                          ? void 0
                          : arguments[3];
                      },
                    ];
                  })();
                  return _pluralForms[form].apply(null, [number].concat(input));
                };
              return (
                void 0 !== i18n[language] &&
                  ((str = i18n[language][message]),
                  null !== pluralParam &&
                    "number" == typeof pluralParam &&
                    ((pluralForm = i18n[language]["mejs.plural-form"]),
                    (str = _plural.apply(null, [
                      str,
                      pluralParam,
                      pluralForm,
                    ])))),
                !str &&
                  i18n.en &&
                  ((str = i18n.en[message]),
                  null !== pluralParam &&
                    "number" == typeof pluralParam &&
                    ((pluralForm = i18n.en["mejs.plural-form"]),
                    (str = _plural.apply(null, [
                      str,
                      pluralParam,
                      pluralForm,
                    ])))),
                (str = str || message),
                null !== pluralParam &&
                  "number" == typeof pluralParam &&
                  (str = str.replace("%1", pluralParam)),
                (0, _general.escapeHTML)(str)
              );
            }
            return message;
          }),
          (_mejs2["default"].i18n = i18n),
          "undefined" != typeof mejsL10n &&
            _mejs2["default"].i18n.language(
              mejsL10n.language,
              mejsL10n.strings
            ),
          (exports["default"] = i18n);
      },
      { 15: 15, 27: 27, 7: 7 },
    ],
    6: [
      function (_dereq_, module, exports) {
        "use strict";
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor))
            throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(exports, "__esModule", { value: !0 });
        var _typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    "function" == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? "symbol"
                    : typeof obj;
                },
          _window = _dereq_(3),
          _window2 = _interopRequireDefault(_window),
          _document = _dereq_(2),
          _document2 = _interopRequireDefault(_document),
          _mejs = _dereq_(7),
          _mejs2 = _interopRequireDefault(_mejs),
          _general = _dereq_(27),
          _media2 = _dereq_(28),
          _renderer = _dereq_(8),
          _constants = _dereq_(25),
          MediaElement = function MediaElement(idOrNode, options, sources) {
            var _this = this;
            _classCallCheck(this, MediaElement);
            var t = this;
            (sources = Array.isArray(sources) ? sources : null),
              (t.defaults = {
                renderers: [],
                fakeNodeName: "mediaelementwrapper",
                pluginPath: "build/",
                shimScriptAccess: "sameDomain",
              }),
              (options = Object.assign(t.defaults, options)),
              (t.mediaElement = _document2["default"].createElement(
                options.fakeNodeName
              ));
            var id = idOrNode,
              error = !1;
            if (
              ("string" == typeof idOrNode
                ? (t.mediaElement.originalNode =
                    _document2["default"].getElementById(idOrNode))
                : ((t.mediaElement.originalNode = idOrNode),
                  (id = idOrNode.id)),
              void 0 === t.mediaElement.originalNode ||
                null === t.mediaElement.originalNode)
            )
              return null;
            (t.mediaElement.options = options),
              (id = id || "mejs_" + Math.random().toString().slice(2)),
              t.mediaElement.originalNode.setAttribute("id", id + "_from_mejs");
            var tagName = t.mediaElement.originalNode.tagName.toLowerCase();
            ["video", "audio"].indexOf(tagName) > -1 &&
              !t.mediaElement.originalNode.getAttribute("preload") &&
              t.mediaElement.originalNode.setAttribute("preload", "none"),
              t.mediaElement.originalNode.parentNode.insertBefore(
                t.mediaElement,
                t.mediaElement.originalNode
              ),
              t.mediaElement.appendChild(t.mediaElement.originalNode);
            var processURL = function (url, type) {
                if (
                  "https:" === _window2["default"].location.protocol &&
                  0 === url.indexOf("http:") &&
                  _constants.IS_IOS &&
                  _mejs2["default"].html5media.mediaTypes.indexOf(type) > -1
                ) {
                  var xhr = new XMLHttpRequest();
                  (xhr.onreadystatechange = function () {
                    if (4 === this.readyState && 200 === this.status) {
                      var _url =
                          _window2["default"].URL ||
                          _window2["default"].webkitURL,
                        blobUrl = _url.createObjectURL(this.response);
                      return (
                        t.mediaElement.originalNode.setAttribute(
                          "src",
                          blobUrl
                        ),
                        blobUrl
                      );
                    }
                    return url;
                  }),
                    xhr.open("GET", url),
                    (xhr.responseType = "blob"),
                    xhr.send();
                }
                return url;
              },
              mediaFiles = void 0;
            if (null !== sources) mediaFiles = sources;
            else if (null !== t.mediaElement.originalNode)
              switch (
                ((mediaFiles = []),
                t.mediaElement.originalNode.nodeName.toLowerCase())
              ) {
                case "iframe":
                  mediaFiles.push({
                    type: "",
                    src: t.mediaElement.originalNode.getAttribute("src"),
                  });
                  break;
                case "audio":
                case "video":
                  var _sources = t.mediaElement.originalNode.children.length,
                    nodeSource =
                      t.mediaElement.originalNode.getAttribute("src");
                  if (nodeSource) {
                    var node = t.mediaElement.originalNode,
                      type = (0, _media2.formatType)(
                        nodeSource,
                        node.getAttribute("type")
                      );
                    mediaFiles.push({
                      type: type,
                      src: processURL(nodeSource, type),
                    });
                  }
                  for (var i = 0; i < _sources; i++) {
                    var n = t.mediaElement.originalNode.children[i];
                    if ("source" === n.tagName.toLowerCase()) {
                      var src = n.getAttribute("src"),
                        _type = (0, _media2.formatType)(
                          src,
                          n.getAttribute("type")
                        );
                      mediaFiles.push({
                        type: _type,
                        src: processURL(src, _type),
                      });
                    }
                  }
              }
            (t.mediaElement.id = id),
              (t.mediaElement.renderers = {}),
              (t.mediaElement.events = {}),
              (t.mediaElement.promises = []),
              (t.mediaElement.renderer = null),
              (t.mediaElement.rendererName = null),
              (t.mediaElement.changeRenderer = function (
                rendererName,
                mediaFiles
              ) {
                var t = _this,
                  media =
                    Object.keys(mediaFiles[0]).length > 2
                      ? mediaFiles[0]
                      : mediaFiles[0].src;
                if (
                  void 0 !== t.mediaElement.renderer &&
                  null !== t.mediaElement.renderer &&
                  t.mediaElement.renderer.name === rendererName
                )
                  return (
                    t.mediaElement.renderer.pause(),
                    t.mediaElement.renderer.stop &&
                      t.mediaElement.renderer.stop(),
                    t.mediaElement.renderer.show(),
                    t.mediaElement.renderer.setSrc(media),
                    !0
                  );
                void 0 !== t.mediaElement.renderer &&
                  null !== t.mediaElement.renderer &&
                  (t.mediaElement.renderer.pause(),
                  t.mediaElement.renderer.stop &&
                    t.mediaElement.renderer.stop(),
                  t.mediaElement.renderer.hide());
                var newRenderer = t.mediaElement.renderers[rendererName],
                  newRendererType = null;
                if (void 0 !== newRenderer && null !== newRenderer)
                  return (
                    newRenderer.show(),
                    newRenderer.setSrc(media),
                    (t.mediaElement.renderer = newRenderer),
                    (t.mediaElement.rendererName = rendererName),
                    !0
                  );
                for (
                  var rendererArray = t.mediaElement.options.renderers.length
                      ? t.mediaElement.options.renderers
                      : _renderer.renderer.order,
                    _i = 0,
                    total = rendererArray.length;
                  _i < total;
                  _i++
                ) {
                  var index = rendererArray[_i];
                  if (index === rendererName) {
                    var rendererList = _renderer.renderer.renderers;
                    newRendererType = rendererList[index];
                    var renderOptions = Object.assign(
                      newRendererType.options,
                      t.mediaElement.options
                    );
                    return (
                      (newRenderer = newRendererType.create(
                        t.mediaElement,
                        renderOptions,
                        mediaFiles
                      )),
                      (newRenderer.name = rendererName),
                      (t.mediaElement.renderers[newRendererType.name] =
                        newRenderer),
                      (t.mediaElement.renderer = newRenderer),
                      (t.mediaElement.rendererName = rendererName),
                      newRenderer.show(),
                      !0
                    );
                  }
                }
                return !1;
              }),
              (t.mediaElement.setSize = function (width, height) {
                void 0 !== t.mediaElement.renderer &&
                  null !== t.mediaElement.renderer &&
                  t.mediaElement.renderer.setSize(width, height);
              }),
              (t.mediaElement.generateError = function (message, urlList) {
                (message = message || ""),
                  (urlList = Array.isArray(urlList) ? urlList : []);
                var event = (0, _general.createEvent)("error", t.mediaElement);
                (event.message = message),
                  (event.urls = urlList),
                  t.mediaElement.dispatchEvent(event),
                  (error = !0);
              });
            var props = _mejs2["default"].html5media.properties,
              methods = _mejs2["default"].html5media.methods,
              addProperty = function (obj, name, onGet, onSet) {
                var oldValue = obj[name],
                  getFn = function () {
                    return onGet.apply(obj, [oldValue]);
                  },
                  setFn = function (newValue) {
                    return (oldValue = onSet.apply(obj, [newValue]));
                  };
                Object.defineProperty(obj, name, { get: getFn, set: setFn });
              },
              assignGettersSetters = function (propName) {
                if ("src" !== propName) {
                  var capName =
                      "" +
                      propName.substring(0, 1).toUpperCase() +
                      propName.substring(1),
                    getFn = function () {
                      return void 0 !== t.mediaElement.renderer &&
                        null !== t.mediaElement.renderer &&
                        "function" ==
                          typeof t.mediaElement.renderer["get" + capName]
                        ? t.mediaElement.renderer["get" + capName]()
                        : null;
                    },
                    setFn = function (value) {
                      void 0 !== t.mediaElement.renderer &&
                        null !== t.mediaElement.renderer &&
                        "function" ==
                          typeof t.mediaElement.renderer["set" + capName] &&
                        t.mediaElement.renderer["set" + capName](value);
                    };
                  addProperty(t.mediaElement, propName, getFn, setFn),
                    (t.mediaElement["get" + capName] = getFn),
                    (t.mediaElement["set" + capName] = setFn);
                }
              },
              getSrc = function () {
                return void 0 !== t.mediaElement.renderer &&
                  null !== t.mediaElement.renderer
                  ? t.mediaElement.renderer.getSrc()
                  : null;
              },
              setSrc = function (value) {
                var mediaFiles = [];
                if ("string" == typeof value)
                  mediaFiles.push({
                    src: value,
                    type: value ? (0, _media2.getTypeFromFile)(value) : "",
                  });
                else if (
                  "object" ===
                    ("undefined" == typeof value
                      ? "undefined"
                      : _typeof(value)) &&
                  void 0 !== value.src
                ) {
                  var _src = (0, _media2.absolutizeUrl)(value.src),
                    _type2 = value.type,
                    media = Object.assign(value, {
                      src: _src,
                      type:
                        ("" !== _type2 &&
                          null !== _type2 &&
                          void 0 !== _type2) ||
                        !_src
                          ? _type2
                          : (0, _media2.getTypeFromFile)(_src),
                    });
                  mediaFiles.push(media);
                } else if (Array.isArray(value))
                  for (var _i2 = 0, total = value.length; _i2 < total; _i2++) {
                    var _src2 = (0, _media2.absolutizeUrl)(value[_i2].src),
                      _type3 = value[_i2].type,
                      _media = Object.assign(value[_i2], {
                        src: _src2,
                        type:
                          ("" !== _type3 &&
                            null !== _type3 &&
                            void 0 !== _type3) ||
                          !_src2
                            ? _type3
                            : (0, _media2.getTypeFromFile)(_src2),
                      });
                    mediaFiles.push(_media);
                  }
                var renderInfo = _renderer.renderer.select(
                    mediaFiles,
                    t.mediaElement.options.renderers.length
                      ? t.mediaElement.options.renderers
                      : []
                  ),
                  event = void 0;
                return (
                  t.mediaElement.paused ||
                    (t.mediaElement.pause(),
                    (event = (0, _general.createEvent)(
                      "pause",
                      t.mediaElement
                    )),
                    t.mediaElement.dispatchEvent(event)),
                  (t.mediaElement.originalNode.src = mediaFiles[0].src || ""),
                  null === renderInfo && mediaFiles[0].src
                    ? void t.mediaElement.generateError(
                        "No renderer found",
                        mediaFiles
                      )
                    : mediaFiles[0].src
                    ? t.mediaElement.changeRenderer(
                        renderInfo.rendererName,
                        mediaFiles
                      )
                    : null
                );
              },
              triggerAction = function (methodName, args) {
                try {
                  if (
                    "play" === methodName &&
                    "native_dash" === t.mediaElement.rendererName
                  ) {
                    var response = t.mediaElement.renderer[methodName](args);
                    response &&
                      "function" == typeof response.then &&
                      response["catch"](function () {
                        t.mediaElement.paused &&
                          setTimeout(function () {
                            var tmpResponse = t.mediaElement.renderer.play();
                            void 0 !== tmpResponse &&
                              tmpResponse["catch"](function () {
                                t.mediaElement.renderer.paused ||
                                  t.mediaElement.renderer.pause();
                              });
                          }, 150);
                      });
                  } else t.mediaElement.renderer[methodName](args);
                } catch (e) {
                  t.mediaElement.generateError(e, mediaFiles);
                }
              },
              assignMethods = function (methodName) {
                t.mediaElement[methodName] = function () {
                  for (
                    var _len = arguments.length, args = Array(_len), _key = 0;
                    _key < _len;
                    _key++
                  )
                    args[_key] = arguments[_key];
                  return (
                    void 0 !== t.mediaElement.renderer &&
                      null !== t.mediaElement.renderer &&
                      "function" ==
                        typeof t.mediaElement.renderer[methodName] &&
                      (t.mediaElement.promises.length
                        ? Promise.all(t.mediaElement.promises)
                            .then(function () {
                              triggerAction(methodName, args);
                            })
                            ["catch"](function (e) {
                              t.mediaElement.generateError(e, mediaFiles);
                            })
                        : triggerAction(methodName, args)),
                    null
                  );
                };
              };
            addProperty(t.mediaElement, "src", getSrc, setSrc),
              (t.mediaElement.getSrc = getSrc),
              (t.mediaElement.setSrc = setSrc);
            for (var _i3 = 0, total = props.length; _i3 < total; _i3++)
              assignGettersSetters(props[_i3]);
            for (var _i4 = 0, _total = methods.length; _i4 < _total; _i4++)
              assignMethods(methods[_i4]);
            return (
              (t.mediaElement.addEventListener = function (
                eventName,
                callback
              ) {
                (t.mediaElement.events[eventName] =
                  t.mediaElement.events[eventName] || []),
                  t.mediaElement.events[eventName].push(callback);
              }),
              (t.mediaElement.removeEventListener = function (
                eventName,
                callback
              ) {
                if (!eventName) return (t.mediaElement.events = {}), !0;
                var callbacks = t.mediaElement.events[eventName];
                if (!callbacks) return !0;
                if (!callback)
                  return (t.mediaElement.events[eventName] = []), !0;
                for (var _i5 = 0; _i5 < callbacks.length; _i5++)
                  if (callbacks[_i5] === callback)
                    return t.mediaElement.events[eventName].splice(_i5, 1), !0;
                return !1;
              }),
              (t.mediaElement.dispatchEvent = function (event) {
                var callbacks = t.mediaElement.events[event.type];
                if (callbacks)
                  for (var _i6 = 0; _i6 < callbacks.length; _i6++)
                    callbacks[_i6].apply(null, [event]);
              }),
              mediaFiles.length && (t.mediaElement.src = mediaFiles),
              t.mediaElement.promises.length
                ? Promise.all(t.mediaElement.promises)
                    .then(function () {
                      t.mediaElement.options.success &&
                        t.mediaElement.options.success(
                          t.mediaElement,
                          t.mediaElement.originalNode
                        );
                    })
                    ["catch"](function () {
                      error &&
                        t.mediaElement.options.error &&
                        t.mediaElement.options.error(
                          t.mediaElement,
                          t.mediaElement.originalNode
                        );
                    })
                : (t.mediaElement.options.success &&
                    t.mediaElement.options.success(
                      t.mediaElement,
                      t.mediaElement.originalNode
                    ),
                  error &&
                    t.mediaElement.options.error &&
                    t.mediaElement.options.error(
                      t.mediaElement,
                      t.mediaElement.originalNode
                    )),
              t.mediaElement
            );
          };
        (_window2["default"].MediaElement = MediaElement),
          (_mejs2["default"].MediaElement = MediaElement),
          (exports["default"] = MediaElement);
      },
      { 2: 2, 25: 25, 27: 27, 28: 28, 3: 3, 7: 7, 8: 8 },
    ],
    7: [
      function (_dereq_, module, exports) {
        "use strict";
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        Object.defineProperty(exports, "__esModule", { value: !0 });
        var _window = _dereq_(3),
          _window2 = _interopRequireDefault(_window),
          mejs = {};
        (mejs.version = "4.2.6"),
          (mejs.html5media = {
            properties: [
              "volume",
              "src",
              "currentTime",
              "muted",
              "duration",
              "paused",
              "ended",
              "buffered",
              "error",
              "networkState",
              "readyState",
              "seeking",
              "seekable",
              "currentSrc",
              "preload",
              "bufferedBytes",
              "bufferedTime",
              "initialTime",
              "startOffsetTime",
              "defaultPlaybackRate",
              "playbackRate",
              "played",
              "autoplay",
              "loop",
              "controls",
            ],
            readOnlyProperties: [
              "duration",
              "paused",
              "ended",
              "buffered",
              "error",
              "networkState",
              "readyState",
              "seeking",
              "seekable",
            ],
            methods: ["load", "play", "pause", "canPlayType"],
            events: [
              "loadstart",
              "durationchange",
              "loadedmetadata",
              "loadeddata",
              "progress",
              "canplay",
              "canplaythrough",
              "suspend",
              "abort",
              "error",
              "emptied",
              "stalled",
              "play",
              "playing",
              "pause",
              "waiting",
              "seeking",
              "seeked",
              "timeupdate",
              "ended",
              "ratechange",
              "volumechange",
            ],
            mediaTypes: [
              "audio/mp3",
              "audio/ogg",
              "audio/oga",
              "audio/wav",
              "audio/x-wav",
              "audio/wave",
              "audio/x-pn-wav",
              "audio/mpeg",
              "audio/mp4",
              "video/mp4",
              "video/webm",
              "video/ogg",
              "video/ogv",
            ],
          }),
          (_window2["default"].mejs = mejs),
          (exports["default"] = mejs);
      },
      { 3: 3 },
    ],
    8: [
      function (_dereq_, module, exports) {
        "use strict";
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor))
            throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.renderer = void 0);
        var _typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    "function" == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? "symbol"
                    : typeof obj;
                },
          _createClass = (function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                (descriptor.enumerable = descriptor.enumerable || !1),
                  (descriptor.configurable = !0),
                  "value" in descriptor && (descriptor.writable = !0),
                  Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function (Constructor, protoProps, staticProps) {
              return (
                protoProps &&
                  defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
              );
            };
          })(),
          _mejs = _dereq_(7),
          _mejs2 = _interopRequireDefault(_mejs),
          Renderer = (function () {
            function Renderer() {
              _classCallCheck(this, Renderer),
                (this.renderers = {}),
                (this.order = []);
            }
            return (
              _createClass(Renderer, [
                {
                  key: "add",
                  value: function (renderer) {
                    if (void 0 === renderer.name)
                      throw new TypeError(
                        "renderer must contain at least `name` property"
                      );
                    (this.renderers[renderer.name] = renderer),
                      this.order.push(renderer.name);
                  },
                },
                {
                  key: "select",
                  value: function (mediaFiles) {
                    var renderers =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : [],
                      renderersLength = renderers.length;
                    if (
                      ((renderers = renderers.length ? renderers : this.order),
                      !renderersLength)
                    ) {
                      var rendererIndicator = [
                          /^(html5|native)/i,
                          /^flash/i,
                          /iframe$/i,
                        ],
                        rendererRanking = function (renderer) {
                          for (
                            var i = 0, total = rendererIndicator.length;
                            i < total;
                            i++
                          )
                            if (rendererIndicator[i].test(renderer)) return i;
                          return rendererIndicator.length;
                        };
                      renderers.sort(function (a, b) {
                        return rendererRanking(a) - rendererRanking(b);
                      });
                    }
                    for (var i = 0, total = renderers.length; i < total; i++) {
                      var key = renderers[i],
                        _renderer = this.renderers[key];
                      if (null !== _renderer && void 0 !== _renderer)
                        for (var j = 0, jl = mediaFiles.length; j < jl; j++)
                          if (
                            "function" == typeof _renderer.canPlayType &&
                            "string" == typeof mediaFiles[j].type &&
                            _renderer.canPlayType(mediaFiles[j].type)
                          )
                            return {
                              rendererName: _renderer.name,
                              src: mediaFiles[j].src,
                            };
                    }
                    return null;
                  },
                },
                {
                  key: "order",
                  set: function (order) {
                    if (!Array.isArray(order))
                      throw new TypeError("order must be an array of strings.");
                    this._order = order;
                  },
                  get: function () {
                    return this._order;
                  },
                },
                {
                  key: "renderers",
                  set: function (renderers) {
                    if (
                      null !== renderers &&
                      "object" !==
                        ("undefined" == typeof renderers
                          ? "undefined"
                          : _typeof(renderers))
                    )
                      throw new TypeError(
                        "renderers must be an array of objects."
                      );
                    this._renderers = renderers;
                  },
                  get: function () {
                    return this._renderers;
                  },
                },
              ]),
              Renderer
            );
          })(),
          renderer = (exports.renderer = new Renderer());
        _mejs2["default"].Renderers = renderer;
      },
      { 7: 7 },
    ],
    9: [
      function (_dereq_, module, exports) {
        "use strict";
        function _interopRequireWildcard(obj) {
          if (obj && obj.__esModule) return obj;
          var newObj = {};
          if (null != obj)
            for (var key in obj)
              Object.prototype.hasOwnProperty.call(obj, key) &&
                (newObj[key] = obj[key]);
          return (newObj["default"] = obj), newObj;
        }
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var _window = _dereq_(3),
          _window2 = _interopRequireDefault(_window),
          _document = _dereq_(2),
          _document2 = _interopRequireDefault(_document),
          _i18n = _dereq_(5),
          _i18n2 = _interopRequireDefault(_i18n),
          _player = _dereq_(16),
          _player2 = _interopRequireDefault(_player),
          _constants = _dereq_(25),
          Features = _interopRequireWildcard(_constants),
          _general = _dereq_(27),
          _dom = _dereq_(26),
          _media = _dereq_(28);
        Object.assign(_player.config, {
          usePluginFullScreen: !0,
          fullscreenText: null,
          useFakeFullscreen: !1,
        }),
          Object.assign(_player2["default"].prototype, {
            isFullScreen: !1,
            isNativeFullScreen: !1,
            isInIframe: !1,
            isPluginClickThroughCreated: !1,
            fullscreenMode: "",
            containerSizeTimeout: null,
            buildfullscreen: function (player) {
              if (player.isVideo) {
                (player.isInIframe =
                  _window2["default"].location !==
                  _window2["default"].parent.location),
                  player.detectFullscreenMode();
                var t = this,
                  fullscreenTitle = (0, _general.isString)(
                    t.options.fullscreenText
                  )
                    ? t.options.fullscreenText
                    : _i18n2["default"].t("mejs.fullscreen"),
                  fullscreenBtn = _document2["default"].createElement("div");
                if (
                  ((fullscreenBtn.className =
                    t.options.classPrefix +
                    "button " +
                    t.options.classPrefix +
                    "fullscreen-button"),
                  (fullscreenBtn.innerHTML =
                    '<button type="button" aria-controls="' +
                    t.id +
                    '" title="' +
                    fullscreenTitle +
                    '" aria-label="' +
                    fullscreenTitle +
                    '" tabindex="0"></button>'),
                  t.addControlElement(fullscreenBtn, "fullscreen"),
                  fullscreenBtn.addEventListener("click", function () {
                    var isFullScreen =
                      (Features.HAS_TRUE_NATIVE_FULLSCREEN &&
                        Features.IS_FULLSCREEN) ||
                      player.isFullScreen;
                    isFullScreen
                      ? player.exitFullScreen()
                      : player.enterFullScreen();
                  }),
                  (player.fullscreenBtn = fullscreenBtn),
                  t.options.keyActions.push({
                    keys: [70],
                    action: function (player, media, key, event) {
                      event.ctrlKey ||
                        ("undefined" != typeof player.enterFullScreen &&
                          (player.isFullScreen
                            ? player.exitFullScreen()
                            : player.enterFullScreen()));
                    },
                  }),
                  (t.exitFullscreenCallback = function (e) {
                    var key = e.which || e.keyCode || 0;
                    27 === key &&
                      ((Features.HAS_TRUE_NATIVE_FULLSCREEN &&
                        Features.IS_FULLSCREEN) ||
                        t.isFullScreen) &&
                      player.exitFullScreen();
                  }),
                  t.globalBind("keydown", t.exitFullscreenCallback),
                  (t.normalHeight = 0),
                  (t.normalWidth = 0),
                  Features.HAS_TRUE_NATIVE_FULLSCREEN)
                ) {
                  var fullscreenChanged = function () {
                    player.isFullScreen &&
                      (Features.isFullScreen()
                        ? ((player.isNativeFullScreen = !0),
                          player.setControlsSize())
                        : ((player.isNativeFullScreen = !1),
                          player.exitFullScreen()));
                  };
                  player.globalBind(
                    Features.FULLSCREEN_EVENT_NAME,
                    fullscreenChanged
                  );
                }
              }
            },
            cleanfullscreen: function (player) {
              player.exitFullScreen(),
                player.globalUnbind("keydown", player.exitFullscreenCallback);
            },
            detectFullscreenMode: function () {
              var t = this,
                isNative =
                  null !== t.media.rendererName &&
                  /(native|html5)/i.test(t.media.rendererName),
                mode = "";
              return (
                Features.HAS_TRUE_NATIVE_FULLSCREEN && isNative
                  ? (mode = "native-native")
                  : Features.HAS_TRUE_NATIVE_FULLSCREEN && !isNative
                  ? (mode = "plugin-native")
                  : t.usePluginFullScreen &&
                    Features.SUPPORT_POINTER_EVENTS &&
                    (mode = "plugin-click"),
                (t.fullscreenMode = mode),
                mode
              );
            },
            enterFullScreen: function () {
              var t = this,
                isNative =
                  null !== t.media.rendererName &&
                  /(html5|native)/i.test(t.media.rendererName),
                containerStyles = getComputedStyle(t.getElement(t.container));
              if (
                t.options.useFakeFullscreen === !1 &&
                Features.IS_IOS &&
                Features.HAS_IOS_FULLSCREEN &&
                "function" ==
                  typeof t.media.originalNode.webkitEnterFullscreen &&
                t.media.originalNode.canPlayType(
                  (0, _media.getTypeFromFile)(t.media.getSrc())
                )
              )
                return void t.media.originalNode.webkitEnterFullscreen();
              if (
                ((0, _dom.addClass)(
                  _document2["default"].documentElement,
                  t.options.classPrefix + "fullscreen"
                ),
                (0, _dom.addClass)(
                  t.getElement(t.container),
                  t.options.classPrefix + "container-fullscreen"
                ),
                (t.normalHeight = parseFloat(containerStyles.height)),
                (t.normalWidth = parseFloat(containerStyles.width)),
                ("native-native" !== t.fullscreenMode &&
                  "plugin-native" !== t.fullscreenMode) ||
                  (Features.requestFullScreen(t.getElement(t.container)),
                  t.isInIframe &&
                    setTimeout(function checkFullscreen() {
                      if (t.isNativeFullScreen) {
                        var percentErrorMargin = 0.002,
                          windowWidth =
                            _window2["default"].innerWidth ||
                            _document2["default"].documentElement.clientWidth ||
                            _document2["default"].body.clientWidth,
                          screenWidth = screen.width,
                          absDiff = Math.abs(screenWidth - windowWidth),
                          marginError = screenWidth * percentErrorMargin;
                        absDiff > marginError
                          ? t.exitFullScreen()
                          : setTimeout(checkFullscreen, 500);
                      }
                    }, 1e3)),
                (t.getElement(t.container).style.width = "100%"),
                (t.getElement(t.container).style.height = "100%"),
                (t.containerSizeTimeout = setTimeout(function () {
                  (t.getElement(t.container).style.width = "100%"),
                    (t.getElement(t.container).style.height = "100%"),
                    t.setControlsSize();
                }, 500)),
                isNative)
              )
                (t.node.style.width = "100%"), (t.node.style.height = "100%");
              else
                for (
                  var elements = t
                      .getElement(t.container)
                      .querySelectorAll("embed, object, video"),
                    _total = elements.length,
                    i = 0;
                  i < _total;
                  i++
                )
                  (elements[i].style.width = "100%"),
                    (elements[i].style.height = "100%");
              t.options.setDimensions &&
                "function" == typeof t.media.setSize &&
                t.media.setSize(screen.width, screen.height);
              for (
                var layers = t.getElement(t.layers).children,
                  total = layers.length,
                  _i = 0;
                _i < total;
                _i++
              )
                (layers[_i].style.width = "100%"),
                  (layers[_i].style.height = "100%");
              t.fullscreenBtn &&
                ((0, _dom.removeClass)(
                  t.fullscreenBtn,
                  t.options.classPrefix + "fullscreen"
                ),
                (0, _dom.addClass)(
                  t.fullscreenBtn,
                  t.options.classPrefix + "unfullscreen"
                )),
                t.setControlsSize(),
                (t.isFullScreen = !0);
              var zoomFactor = Math.min(
                  screen.width / t.width,
                  screen.height / t.height
                ),
                captionText = t
                  .getElement(t.container)
                  .querySelector("." + t.options.classPrefix + "captions-text");
              captionText &&
                ((captionText.style.fontSize = 100 * zoomFactor + "%"),
                (captionText.style.lineHeight = "normal"),
                (t
                  .getElement(t.container)
                  .querySelector(
                    "." + t.options.classPrefix + "captions-position"
                  ).style.bottom = "45px"));
              var event = (0, _general.createEvent)(
                "enteredfullscreen",
                t.getElement(t.container)
              );
              t.getElement(t.container).dispatchEvent(event);
            },
            exitFullScreen: function () {
              var t = this,
                isNative =
                  null !== t.media.rendererName &&
                  /(native|html5)/i.test(t.media.rendererName);
              if (
                (clearTimeout(t.containerSizeTimeout),
                Features.HAS_TRUE_NATIVE_FULLSCREEN &&
                  (Features.IS_FULLSCREEN || t.isFullScreen) &&
                  Features.cancelFullScreen(),
                (0, _dom.removeClass)(
                  _document2["default"].documentElement,
                  t.options.classPrefix + "fullscreen"
                ),
                (0, _dom.removeClass)(
                  t.getElement(t.container),
                  t.options.classPrefix + "container-fullscreen"
                ),
                t.options.setDimensions)
              ) {
                if (
                  ((t.getElement(t.container).style.width =
                    t.normalWidth + "px"),
                  (t.getElement(t.container).style.height =
                    t.normalHeight + "px"),
                  isNative)
                )
                  (t.node.style.width = t.normalWidth + "px"),
                    (t.node.style.height = t.normalHeight + "px");
                else
                  for (
                    var elements = t
                        .getElement(t.container)
                        .querySelectorAll("embed, object, video"),
                      _total2 = elements.length,
                      i = 0;
                    i < _total2;
                    i++
                  )
                    (elements[i].style.width = t.normalWidth + "px"),
                      (elements[i].style.height = t.normalHeight + "px");
                "function" == typeof t.media.setSize &&
                  t.media.setSize(t.normalWidth, t.normalHeight);
                for (
                  var layers = t.getElement(t.layers).children,
                    total = layers.length,
                    _i2 = 0;
                  _i2 < total;
                  _i2++
                )
                  (layers[_i2].style.width = t.normalWidth + "px"),
                    (layers[_i2].style.height = t.normalHeight + "px");
              }
              t.fullscreenBtn &&
                ((0, _dom.removeClass)(
                  t.fullscreenBtn,
                  t.options.classPrefix + "unfullscreen"
                ),
                (0, _dom.addClass)(
                  t.fullscreenBtn,
                  t.options.classPrefix + "fullscreen"
                )),
                t.setControlsSize(),
                (t.isFullScreen = !1);
              var captionText = t
                .getElement(t.container)
                .querySelector("." + t.options.classPrefix + "captions-text");
              captionText &&
                ((captionText.style.fontSize = ""),
                (captionText.style.lineHeight = ""),
                (t
                  .getElement(t.container)
                  .querySelector(
                    "." + t.options.classPrefix + "captions-position"
                  ).style.bottom = ""));
              var event = (0, _general.createEvent)(
                "exitedfullscreen",
                t.getElement(t.container)
              );
              t.getElement(t.container).dispatchEvent(event);
            },
          });
      },
      { 16: 16, 2: 2, 25: 25, 26: 26, 27: 27, 28: 28, 3: 3, 5: 5 },
    ],
    10: [
      function (_dereq_, module, exports) {
        "use strict";
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var _document = _dereq_(2),
          _document2 = _interopRequireDefault(_document),
          _player = _dereq_(16),
          _player2 = _interopRequireDefault(_player),
          _i18n = _dereq_(5),
          _i18n2 = _interopRequireDefault(_i18n),
          _general = _dereq_(27),
          _dom = _dereq_(26);
        Object.assign(_player.config, { playText: null, pauseText: null }),
          Object.assign(_player2["default"].prototype, {
            buildplaypause: function (player, controls, layers, media) {
              function togglePlayPause(which) {
                "play" === which
                  ? ((0, _dom.removeClass)(
                      play,
                      t.options.classPrefix + "play"
                    ),
                    (0, _dom.removeClass)(
                      play,
                      t.options.classPrefix + "replay"
                    ),
                    (0, _dom.addClass)(play, t.options.classPrefix + "pause"),
                    playBtn.setAttribute("title", pauseTitle),
                    playBtn.setAttribute("aria-label", pauseTitle))
                  : ((0, _dom.removeClass)(
                      play,
                      t.options.classPrefix + "pause"
                    ),
                    (0, _dom.removeClass)(
                      play,
                      t.options.classPrefix + "replay"
                    ),
                    (0, _dom.addClass)(play, t.options.classPrefix + "play"),
                    playBtn.setAttribute("title", playTitle),
                    playBtn.setAttribute("aria-label", playTitle));
              }
              var t = this,
                op = t.options,
                playTitle = (0, _general.isString)(op.playText)
                  ? op.playText
                  : _i18n2["default"].t("mejs.play"),
                pauseTitle = (0, _general.isString)(op.pauseText)
                  ? op.pauseText
                  : _i18n2["default"].t("mejs.pause"),
                play = _document2["default"].createElement("div");
              (play.className =
                t.options.classPrefix +
                "button " +
                t.options.classPrefix +
                "playpause-button " +
                t.options.classPrefix +
                "play"),
                (play.innerHTML =
                  '<button type="button" aria-controls="' +
                  t.id +
                  '" title="' +
                  playTitle +
                  '" aria-label="' +
                  pauseTitle +
                  '" tabindex="0"></button>'),
                play.addEventListener("click", function () {
                  t.paused ? t.play() : t.pause();
                });
              var playBtn = play.querySelector("button");
              t.addControlElement(play, "playpause"),
                togglePlayPause("pse"),
                media.addEventListener("loadedmetadata", function () {
                  media.rendererName.indexOf("flash") === -1 &&
                    togglePlayPause("pse");
                }),
                media.addEventListener("play", function () {
                  togglePlayPause("play");
                }),
                media.addEventListener("playing", function () {
                  togglePlayPause("play");
                }),
                media.addEventListener("pause", function () {
                  togglePlayPause("pse");
                }),
                media.addEventListener("ended", function () {
                  player.options.loop ||
                    ((0, _dom.removeClass)(
                      play,
                      t.options.classPrefix + "pause"
                    ),
                    (0, _dom.removeClass)(play, t.options.classPrefix + "play"),
                    (0, _dom.addClass)(play, t.options.classPrefix + "replay"),
                    playBtn.setAttribute("title", playTitle),
                    playBtn.setAttribute("aria-label", playTitle));
                });
            },
          });
      },
      { 16: 16, 2: 2, 26: 26, 27: 27, 5: 5 },
    ],
    11: [
      function (_dereq_, module, exports) {
        "use strict";
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var _document = _dereq_(2),
          _document2 = _interopRequireDefault(_document),
          _player = _dereq_(16),
          _player2 = _interopRequireDefault(_player),
          _i18n = _dereq_(5),
          _i18n2 = _interopRequireDefault(_i18n),
          _constants = _dereq_(25),
          _time = _dereq_(30),
          _dom = _dereq_(26);
        Object.assign(_player.config, {
          enableProgressTooltip: !0,
          useSmoothHover: !0,
          forceLive: !1,
        }),
          Object.assign(_player2["default"].prototype, {
            buildprogress: function (player, controls, layers, media) {
              var lastKeyPressTime = 0,
                mouseIsDown = !1,
                startedPaused = !1,
                t = this,
                autoRewindInitial = player.options.autoRewind,
                tooltip = player.options.enableProgressTooltip
                  ? '<span class="' +
                    t.options.classPrefix +
                    'time-float">' +
                    ('<span class="' +
                      t.options.classPrefix +
                      'time-float-current">00:00</span>') +
                    ('<span class="' +
                      t.options.classPrefix +
                      'time-float-corner"></span>') +
                    "</span>"
                  : "",
                rail = _document2["default"].createElement("div");
              (rail.className = t.options.classPrefix + "time-rail"),
                (rail.innerHTML =
                  '<span class="' +
                  t.options.classPrefix +
                  "time-total " +
                  t.options.classPrefix +
                  'time-slider">' +
                  ('<span class="' +
                    t.options.classPrefix +
                    'time-buffering"></span>') +
                  ('<span class="' +
                    t.options.classPrefix +
                    'time-loaded"></span>') +
                  ('<span class="' +
                    t.options.classPrefix +
                    'time-current"></span>') +
                  ('<span class="' +
                    t.options.classPrefix +
                    'time-hovered no-hover"></span>') +
                  ('<span class="' +
                    t.options.classPrefix +
                    'time-handle"><span class="' +
                    t.options.classPrefix +
                    'time-handle-content"></span></span>') +
                  ("" + tooltip) +
                  "</span>"),
                t.addControlElement(rail, "progress"),
                t.options.keyActions.push(
                  {
                    keys: [37, 227],
                    action: function (player) {
                      if (!isNaN(player.duration) && player.duration > 0) {
                        player.isVideo &&
                          (player.showControls(), player.startControlsTimer()),
                          player.container
                            .querySelector(
                              "." + _player.config.classPrefix + "time-total"
                            )
                            .focus();
                        var newTime = Math.max(
                          player.currentTime -
                            player.options.defaultSeekBackwardInterval(player),
                          0
                        );
                        player.setCurrentTime(newTime);
                      }
                    },
                  },
                  {
                    keys: [39, 228],
                    action: function (player) {
                      if (!isNaN(player.duration) && player.duration > 0) {
                        player.isVideo &&
                          (player.showControls(), player.startControlsTimer()),
                          player.container
                            .querySelector(
                              "." + _player.config.classPrefix + "time-total"
                            )
                            .focus();
                        var newTime = Math.min(
                          player.currentTime +
                            player.options.defaultSeekForwardInterval(player),
                          player.duration
                        );
                        player.setCurrentTime(newTime);
                      }
                    },
                  }
                ),
                (t.rail = controls.querySelector(
                  "." + t.options.classPrefix + "time-rail"
                )),
                (t.total = controls.querySelector(
                  "." + t.options.classPrefix + "time-total"
                )),
                (t.loaded = controls.querySelector(
                  "." + t.options.classPrefix + "time-loaded"
                )),
                (t.current = controls.querySelector(
                  "." + t.options.classPrefix + "time-current"
                )),
                (t.handle = controls.querySelector(
                  "." + t.options.classPrefix + "time-handle"
                )),
                (t.timefloat = controls.querySelector(
                  "." + t.options.classPrefix + "time-float"
                )),
                (t.timefloatcurrent = controls.querySelector(
                  "." + t.options.classPrefix + "time-float-current"
                )),
                (t.slider = controls.querySelector(
                  "." + t.options.classPrefix + "time-slider"
                )),
                (t.hovered = controls.querySelector(
                  "." + t.options.classPrefix + "time-hovered"
                )),
                (t.buffer = controls.querySelector(
                  "." + t.options.classPrefix + "time-buffering"
                )),
                (t.newTime = 0),
                (t.forcedHandlePause = !1),
                (t.setTransformStyle = function (element, value) {
                  (element.style.transform = value),
                    (element.style.webkitTransform = value),
                    (element.style.MozTransform = value),
                    (element.style.msTransform = value),
                    (element.style.OTransform = value);
                }),
                (t.buffer.style.display = "none");
              var handleMouseMove = function (e) {
                  var totalStyles = getComputedStyle(t.total),
                    offsetStyles = (0, _dom.offset)(t.total),
                    width = t.total.offsetWidth,
                    transform = (function () {
                      return void 0 !== totalStyles.webkitTransform
                        ? "webkitTransform"
                        : void 0 !== totalStyles.mozTransform
                        ? "mozTransform "
                        : void 0 !== totalStyles.oTransform
                        ? "oTransform"
                        : void 0 !== totalStyles.msTransform
                        ? "msTransform"
                        : "transform";
                    })(),
                    cssMatrix = (function () {
                      return "WebKitCSSMatrix" in window
                        ? "WebKitCSSMatrix"
                        : "MSCSSMatrix" in window
                        ? "MSCSSMatrix"
                        : "CSSMatrix" in window
                        ? "CSSMatrix"
                        : void 0;
                    })(),
                    percentage = 0,
                    leftPos = 0,
                    pos = 0,
                    x = void 0;
                  if (
                    ((x =
                      e.originalEvent && e.originalEvent.changedTouches
                        ? e.originalEvent.changedTouches[0].pageX
                        : e.changedTouches
                        ? e.changedTouches[0].pageX
                        : e.pageX),
                    t.getDuration())
                  ) {
                    if (
                      (x < offsetStyles.left
                        ? (x = offsetStyles.left)
                        : x > width + offsetStyles.left &&
                          (x = width + offsetStyles.left),
                      (pos = x - offsetStyles.left),
                      (percentage = pos / width),
                      (t.newTime =
                        percentage <= 0.02 ? 0 : percentage * t.getDuration()),
                      mouseIsDown &&
                        null !== t.getCurrentTime() &&
                        t.newTime.toFixed(4) !==
                          t.getCurrentTime().toFixed(4) &&
                        (t.setCurrentRailHandle(t.newTime),
                        t.updateCurrent(t.newTime)),
                      !_constants.IS_IOS && !_constants.IS_ANDROID)
                    ) {
                      if (
                        (pos < 0 && (pos = 0),
                        t.options.useSmoothHover &&
                          null !== cssMatrix &&
                          "undefined" != typeof window[cssMatrix])
                      ) {
                        var matrix = new window[cssMatrix](
                            getComputedStyle(t.handle)[transform]
                          ),
                          handleLocation = matrix.m41,
                          hoverScaleX =
                            pos / parseFloat(getComputedStyle(t.total).width) -
                            handleLocation /
                              parseFloat(getComputedStyle(t.total).width);
                        (t.hovered.style.left = handleLocation + "px"),
                          t.setTransformStyle(
                            t.hovered,
                            "scaleX(" + hoverScaleX + ")"
                          ),
                          t.hovered.setAttribute("pos", pos),
                          hoverScaleX >= 0
                            ? (0, _dom.removeClass)(t.hovered, "negative")
                            : (0, _dom.addClass)(t.hovered, "negative");
                      }
                      if (t.timefloat) {
                        var half = t.timefloat.offsetWidth / 2,
                          offsetContainer = mejs.Utils.offset(
                            t.getElement(t.container)
                          ),
                          tooltipStyles = getComputedStyle(t.timefloat);
                        (leftPos =
                          x - offsetContainer.left < t.timefloat.offsetWidth
                            ? half
                            : x - offsetContainer.left >=
                              t.getElement(t.container).offsetWidth - half
                            ? t.total.offsetWidth - half
                            : pos),
                          (0, _dom.hasClass)(
                            t.getElement(t.container),
                            t.options.classPrefix + "long-video"
                          ) &&
                            (leftPos +=
                              parseFloat(tooltipStyles.marginLeft) / 2 +
                              t.timefloat.offsetWidth / 2),
                          (t.timefloat.style.left = leftPos + "px"),
                          (t.timefloatcurrent.innerHTML = (0,
                          _time.secondsToTimeCode)(
                            t.newTime,
                            player.options.alwaysShowHours,
                            player.options.showTimecodeFrameCount,
                            player.options.framesPerSecond,
                            player.options.secondsDecimalLength
                          )),
                          (t.timefloat.style.display = "block");
                      }
                    }
                  } else
                    _constants.IS_IOS ||
                      _constants.IS_ANDROID ||
                      !t.timefloat ||
                      ((leftPos =
                        t.timefloat.offsetWidth + width >=
                        t.getElement(t.container).offsetWidth
                          ? t.timefloat.offsetWidth / 2
                          : 0),
                      (t.timefloat.style.left = leftPos + "px"),
                      (t.timefloat.style.left = leftPos + "px"),
                      (t.timefloat.style.display = "block"));
                },
                updateSlider = function () {
                  var seconds = t.getCurrentTime(),
                    timeSliderText = _i18n2["default"].t("mejs.time-slider"),
                    time = (0, _time.secondsToTimeCode)(
                      seconds,
                      player.options.alwaysShowHours,
                      player.options.showTimecodeFrameCount,
                      player.options.framesPerSecond,
                      player.options.secondsDecimalLength
                    ),
                    duration = t.getDuration();
                  t.slider.setAttribute("role", "slider"),
                    (t.slider.tabIndex = 0),
                    media.paused
                      ? (t.slider.setAttribute("aria-label", timeSliderText),
                        t.slider.setAttribute("aria-valuemin", 0),
                        t.slider.setAttribute("aria-valuemax", duration),
                        t.slider.setAttribute("aria-valuenow", seconds),
                        t.slider.setAttribute("aria-valuetext", time))
                      : (t.slider.removeAttribute("aria-label"),
                        t.slider.removeAttribute("aria-valuemin"),
                        t.slider.removeAttribute("aria-valuemax"),
                        t.slider.removeAttribute("aria-valuenow"),
                        t.slider.removeAttribute("aria-valuetext"));
                },
                restartPlayer = function () {
                  new Date() - lastKeyPressTime >= 1e3 && t.play();
                },
                handleMouseup = function () {
                  mouseIsDown &&
                    null !== t.getCurrentTime() &&
                    t.newTime.toFixed(4) !== t.getCurrentTime().toFixed(4) &&
                    (t.setCurrentTime(t.newTime),
                    t.setCurrentRail(),
                    t.updateCurrent(t.newTime)),
                    t.forcedHandlePause && (t.slider.focus(), t.play()),
                    (t.forcedHandlePause = !1);
                };
              t.slider.addEventListener("focus", function () {
                player.options.autoRewind = !1;
              }),
                t.slider.addEventListener("blur", function () {
                  player.options.autoRewind = autoRewindInitial;
                }),
                t.slider.addEventListener("keydown", function (e) {
                  if (
                    (new Date() - lastKeyPressTime >= 1e3 &&
                      (startedPaused = t.paused),
                    t.options.keyActions.length)
                  ) {
                    var keyCode = e.which || e.keyCode || 0,
                      duration = t.getDuration(),
                      seekForward =
                        player.options.defaultSeekForwardInterval(media),
                      seekBackward =
                        player.options.defaultSeekBackwardInterval(media),
                      seekTime = t.getCurrentTime(),
                      volume = t
                        .getElement(t.container)
                        .querySelector(
                          "." + t.options.classPrefix + "volume-slider"
                        );
                    if (38 === keyCode || 40 === keyCode) {
                      volume && (volume.style.display = "block"),
                        t.isVideo && (t.showControls(), t.startControlsTimer());
                      var newVolume =
                          38 === keyCode
                            ? Math.min(t.volume + 0.1, 1)
                            : Math.max(t.volume - 0.1, 0),
                        mutePlayer = newVolume <= 0;
                      return (
                        t.setVolume(newVolume), void t.setMuted(mutePlayer)
                      );
                    }
                    switch (
                      (volume && (volume.style.display = "none"), keyCode)
                    ) {
                      case 37:
                        t.getDuration() !== 1 / 0 && (seekTime -= seekBackward);
                        break;
                      case 39:
                        t.getDuration() !== 1 / 0 && (seekTime += seekForward);
                        break;
                      case 36:
                        seekTime = 0;
                        break;
                      case 35:
                        seekTime = duration;
                        break;
                      case 13:
                      case 32:
                        return void (
                          _constants.IS_FIREFOX &&
                          (t.paused ? t.play() : t.pause())
                        );
                      default:
                        return;
                    }
                    (seekTime =
                      seekTime < 0
                        ? 0
                        : seekTime >= duration
                        ? duration
                        : Math.floor(seekTime)),
                      (lastKeyPressTime = new Date()),
                      startedPaused || player.pause(),
                      seekTime < t.getDuration() &&
                        !startedPaused &&
                        setTimeout(restartPlayer, 1100),
                      t.setCurrentTime(seekTime),
                      player.showControls(),
                      e.preventDefault(),
                      e.stopPropagation();
                  }
                });
              var events = ["mousedown", "touchstart"];
              t.slider.addEventListener("dragstart", function () {
                return !1;
              });
              for (var i = 0, total = events.length; i < total; i++)
                t.slider.addEventListener(
                  events[i],
                  function (e) {
                    if (
                      ((t.forcedHandlePause = !1),
                      t.getDuration() !== 1 / 0 &&
                        (1 === e.which || 0 === e.which))
                    ) {
                      t.paused || (t.pause(), (t.forcedHandlePause = !0)),
                        (mouseIsDown = !0),
                        handleMouseMove(e);
                      for (
                        var endEvents = ["mouseup", "touchend"],
                          j = 0,
                          totalEvents = endEvents.length;
                        j < totalEvents;
                        j++
                      )
                        t.getElement(t.container).addEventListener(
                          endEvents[j],
                          function (event) {
                            var target = event.target;
                            (target === t.slider ||
                              target.closest(
                                "." + t.options.classPrefix + "time-slider"
                              )) &&
                              handleMouseMove(event);
                          }
                        );
                      t.globalBind("mouseup.dur touchend.dur", function () {
                        handleMouseup(),
                          (mouseIsDown = !1),
                          t.timefloat && (t.timefloat.style.display = "none");
                      });
                    }
                  },
                  !(
                    !_constants.SUPPORT_PASSIVE_EVENT ||
                    "touchstart" !== events[i]
                  ) && { passive: !0 }
                );
              t.slider.addEventListener("mouseenter", function (e) {
                e.target === t.slider &&
                  t.getDuration() !== 1 / 0 &&
                  (t
                    .getElement(t.container)
                    .addEventListener("mousemove", function (event) {
                      var target = event.target;
                      (target === t.slider ||
                        target.closest(
                          "." + t.options.classPrefix + "time-slider"
                        )) &&
                        handleMouseMove(event);
                    }),
                  !t.timefloat ||
                    _constants.IS_IOS ||
                    _constants.IS_ANDROID ||
                    (t.timefloat.style.display = "block"),
                  t.hovered &&
                    !_constants.IS_IOS &&
                    !_constants.IS_ANDROID &&
                    t.options.useSmoothHover &&
                    (0, _dom.removeClass)(t.hovered, "no-hover"));
              }),
                t.slider.addEventListener("mouseleave", function () {
                  t.getDuration() !== 1 / 0 &&
                    (mouseIsDown ||
                      (t.timefloat && (t.timefloat.style.display = "none"),
                      t.hovered &&
                        t.options.useSmoothHover &&
                        (0, _dom.addClass)(t.hovered, "no-hover")));
                }),
                (t.broadcastCallback = function (e) {
                  var broadcast = controls.querySelector(
                    "." + t.options.classPrefix + "broadcast"
                  );
                  if (t.options.forceLive || t.getDuration() === 1 / 0) {
                    if (!broadcast || t.options.forceLive) {
                      var label = _document2["default"].createElement("span");
                      (label.className = t.options.classPrefix + "broadcast"),
                        (label.innerText = _i18n2["default"].t(
                          "mejs.live-broadcast"
                        )),
                        (t.slider.style.display = "none"),
                        t.rail.appendChild(label);
                    }
                  } else
                    broadcast &&
                      ((t.slider.style.display = ""), broadcast.remove()),
                      player.setProgressRail(e),
                      t.forcedHandlePause || player.setCurrentRail(e),
                      updateSlider();
                }),
                media.addEventListener("progress", t.broadcastCallback),
                media.addEventListener("timeupdate", t.broadcastCallback),
                media.addEventListener("play", function () {
                  t.buffer.style.display = "none";
                }),
                media.addEventListener("playing", function () {
                  t.buffer.style.display = "none";
                }),
                media.addEventListener("seeking", function () {
                  t.buffer.style.display = "";
                }),
                media.addEventListener("seeked", function () {
                  t.buffer.style.display = "none";
                }),
                media.addEventListener("pause", function () {
                  t.buffer.style.display = "none";
                }),
                media.addEventListener("waiting", function () {
                  t.buffer.style.display = "";
                }),
                media.addEventListener("loadeddata", function () {
                  t.buffer.style.display = "";
                }),
                media.addEventListener("canplay", function () {
                  t.buffer.style.display = "none";
                }),
                media.addEventListener("error", function () {
                  t.buffer.style.display = "none";
                }),
                t
                  .getElement(t.container)
                  .addEventListener("controlsresize", function (e) {
                    t.getDuration() !== 1 / 0 &&
                      (player.setProgressRail(e),
                      t.forcedHandlePause || player.setCurrentRail(e));
                  });
            },
            cleanprogress: function (player, controls, layers, media) {
              media.removeEventListener("progress", player.broadcastCallback),
                media.removeEventListener(
                  "timeupdate",
                  player.broadcastCallback
                ),
                player.rail && player.rail.remove();
            },
            setProgressRail: function (e) {
              var t = this,
                target = void 0 !== e ? e.detail.target || e.target : t.media,
                percent = null;
              target &&
              target.buffered &&
              target.buffered.length > 0 &&
              target.buffered.end &&
              t.getDuration()
                ? (percent =
                    target.buffered.end(target.buffered.length - 1) /
                    t.getDuration())
                : target &&
                  void 0 !== target.bytesTotal &&
                  target.bytesTotal > 0 &&
                  void 0 !== target.bufferedBytes
                ? (percent = target.bufferedBytes / target.bytesTotal)
                : e &&
                  e.lengthComputable &&
                  0 !== e.total &&
                  (percent = e.loaded / e.total),
                null !== percent &&
                  ((percent = Math.min(1, Math.max(0, percent))),
                  t.loaded &&
                    t.setTransformStyle(t.loaded, "scaleX(" + percent + ")"));
            },
            setCurrentRailHandle: function (fakeTime) {
              var t = this;
              t.setCurrentRailMain(t, fakeTime);
            },
            setCurrentRail: function () {
              var t = this;
              t.setCurrentRailMain(t);
            },
            setCurrentRailMain: function (t, fakeTime) {
              if (void 0 !== t.getCurrentTime() && t.getDuration()) {
                var nTime =
                  "undefined" == typeof fakeTime
                    ? t.getCurrentTime()
                    : fakeTime;
                if (t.total && t.handle) {
                  var tW = parseFloat(getComputedStyle(t.total).width),
                    newWidth = Math.round((tW * nTime) / t.getDuration()),
                    handlePos = newWidth - Math.round(t.handle.offsetWidth / 2);
                  if (
                    ((handlePos = handlePos < 0 ? 0 : handlePos),
                    t.setTransformStyle(
                      t.current,
                      "scaleX(" + newWidth / tW + ")"
                    ),
                    t.setTransformStyle(
                      t.handle,
                      "translateX(" + handlePos + "px)"
                    ),
                    t.options.useSmoothHover &&
                      !(0, _dom.hasClass)(t.hovered, "no-hover"))
                  ) {
                    var pos = parseInt(t.hovered.getAttribute("pos"));
                    pos = isNaN(pos) ? 0 : pos;
                    var hoverScaleX = pos / tW - handlePos / tW;
                    (t.hovered.style.left = handlePos + "px"),
                      t.setTransformStyle(
                        t.hovered,
                        "scaleX(" + hoverScaleX + ")"
                      ),
                      hoverScaleX >= 0
                        ? (0, _dom.removeClass)(t.hovered, "negative")
                        : (0, _dom.addClass)(t.hovered, "negative");
                  }
                }
              }
            },
          });
      },
      { 16: 16, 2: 2, 25: 25, 26: 26, 30: 30, 5: 5 },
    ],
    12: [
      function (_dereq_, module, exports) {
        "use strict";
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var _document = _dereq_(2),
          _document2 = _interopRequireDefault(_document),
          _player = _dereq_(16),
          _player2 = _interopRequireDefault(_player),
          _time = _dereq_(30),
          _dom = _dereq_(26);
        Object.assign(_player.config, {
          duration: 0,
          timeAndDurationSeparator: "<span> | </span>",
        }),
          Object.assign(_player2["default"].prototype, {
            buildcurrent: function (player, controls, layers, media) {
              var t = this,
                time = _document2["default"].createElement("div");
              (time.className = t.options.classPrefix + "time"),
                time.setAttribute("role", "timer"),
                time.setAttribute("aria-live", "off"),
                (time.innerHTML =
                  '<span class="' +
                  t.options.classPrefix +
                  'currenttime">' +
                  (0, _time.secondsToTimeCode)(
                    0,
                    player.options.alwaysShowHours,
                    player.options.showTimecodeFrameCount,
                    player.options.framesPerSecond,
                    player.options.secondsDecimalLength
                  ) +
                  "</span>"),
                t.addControlElement(time, "current"),
                player.updateCurrent(),
                (t.updateTimeCallback = function () {
                  t.controlsAreVisible && player.updateCurrent();
                }),
                media.addEventListener("timeupdate", t.updateTimeCallback);
            },
            cleancurrent: function (player, controls, layers, media) {
              media.removeEventListener(
                "timeupdate",
                player.updateTimeCallback
              );
            },
            buildduration: function (player, controls, layers, media) {
              var t = this,
                currTime = controls.lastChild.querySelector(
                  "." + t.options.classPrefix + "currenttime"
                );
              if (currTime)
                controls.querySelector(
                  "." + t.options.classPrefix + "time"
                ).innerHTML +=
                  t.options.timeAndDurationSeparator +
                  '<span class="' +
                  t.options.classPrefix +
                  'duration">' +
                  ((0, _time.secondsToTimeCode)(
                    t.options.duration,
                    t.options.alwaysShowHours,
                    t.options.showTimecodeFrameCount,
                    t.options.framesPerSecond,
                    t.options.secondsDecimalLength
                  ) +
                    "</span>");
              else {
                controls.querySelector(
                  "." + t.options.classPrefix + "currenttime"
                ) &&
                  (0, _dom.addClass)(
                    controls.querySelector(
                      "." + t.options.classPrefix + "currenttime"
                    ).parentNode,
                    t.options.classPrefix + "currenttime-container"
                  );
                var duration = _document2["default"].createElement("div");
                (duration.className =
                  t.options.classPrefix +
                  "time " +
                  t.options.classPrefix +
                  "duration-container"),
                  (duration.innerHTML =
                    '<span class="' +
                    t.options.classPrefix +
                    'duration">' +
                    ((0, _time.secondsToTimeCode)(
                      t.options.duration,
                      t.options.alwaysShowHours,
                      t.options.showTimecodeFrameCount,
                      t.options.framesPerSecond,
                      t.options.secondsDecimalLength
                    ) +
                      "</span>")),
                  t.addControlElement(duration, "duration");
              }
              (t.updateDurationCallback = function () {
                t.controlsAreVisible && player.updateDuration();
              }),
                media.addEventListener("timeupdate", t.updateDurationCallback);
            },
            cleanduration: function (player, controls, layers, media) {
              media.removeEventListener(
                "timeupdate",
                player.updateDurationCallback
              );
            },
            updateCurrent: function () {
              var t = this,
                currentTime = t.getCurrentTime();
              isNaN(currentTime) && (currentTime = 0);
              var timecode = (0, _time.secondsToTimeCode)(
                currentTime,
                t.options.alwaysShowHours,
                t.options.showTimecodeFrameCount,
                t.options.framesPerSecond,
                t.options.secondsDecimalLength
              );
              timecode.length > 5
                ? (0, _dom.addClass)(
                    t.getElement(t.container),
                    t.options.classPrefix + "long-video"
                  )
                : (0, _dom.removeClass)(
                    t.getElement(t.container),
                    t.options.classPrefix + "long-video"
                  ),
                t
                  .getElement(t.controls)
                  .querySelector("." + t.options.classPrefix + "currenttime") &&
                  (t
                    .getElement(t.controls)
                    .querySelector(
                      "." + t.options.classPrefix + "currenttime"
                    ).innerText = timecode);
            },
            updateDuration: function () {
              var t = this,
                duration = t.getDuration();
              (isNaN(duration) || duration === 1 / 0 || duration < 0) &&
                (t.media.duration = t.options.duration = duration = 0),
                t.options.duration > 0 && (duration = t.options.duration);
              var timecode = (0, _time.secondsToTimeCode)(
                duration,
                t.options.alwaysShowHours,
                t.options.showTimecodeFrameCount,
                t.options.framesPerSecond,
                t.options.secondsDecimalLength
              );
              timecode.length > 5
                ? (0, _dom.addClass)(
                    t.getElement(t.container),
                    t.options.classPrefix + "long-video"
                  )
                : (0, _dom.removeClass)(
                    t.getElement(t.container),
                    t.options.classPrefix + "long-video"
                  ),
                t
                  .getElement(t.controls)
                  .querySelector("." + t.options.classPrefix + "duration") &&
                  duration > 0 &&
                  (t
                    .getElement(t.controls)
                    .querySelector(
                      "." + t.options.classPrefix + "duration"
                    ).innerHTML = timecode);
            },
          });
      },
      { 16: 16, 2: 2, 26: 26, 30: 30 },
    ],
    13: [
      function (_dereq_, module, exports) {
        "use strict";
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var _document = _dereq_(2),
          _document2 = _interopRequireDefault(_document),
          _mejs = _dereq_(7),
          _mejs2 = _interopRequireDefault(_mejs),
          _i18n = _dereq_(5),
          _i18n2 = _interopRequireDefault(_i18n),
          _player = _dereq_(16),
          _player2 = _interopRequireDefault(_player),
          _time = _dereq_(30),
          _general = _dereq_(27),
          _dom = _dereq_(26);
        Object.assign(_player.config, {
          startLanguage: "",
          tracksText: null,
          chaptersText: null,
          tracksAriaLive: !1,
          hideCaptionsButtonWhenEmpty: !0,
          toggleCaptionsButtonWhenOnlyOne: !1,
          slidesSelector: "",
        }),
          Object.assign(_player2["default"].prototype, {
            hasChapters: !1,
            buildtracks: function (player, controls, layers, media) {
              if (
                (this.findTracks(),
                player.tracks.length ||
                  (player.trackFiles && 0 !== !player.trackFiles.length))
              ) {
                var t = this,
                  attr = t.options.tracksAriaLive
                    ? ' role="log" aria-live="assertive" aria-atomic="false"'
                    : "",
                  tracksTitle = (0, _general.isString)(t.options.tracksText)
                    ? t.options.tracksText
                    : _i18n2["default"].t("mejs.captions-subtitles"),
                  chaptersTitle = (0, _general.isString)(t.options.chaptersText)
                    ? t.options.chaptersText
                    : _i18n2["default"].t("mejs.captions-chapters"),
                  total =
                    null === player.trackFiles
                      ? player.tracks.length
                      : player.trackFiles.length;
                if (t.domNode.textTracks)
                  for (var i = t.domNode.textTracks.length - 1; i >= 0; i--)
                    t.domNode.textTracks[i].mode = "hidden";
                t.cleartracks(player),
                  (player.captions =
                    _document2["default"].createElement("div")),
                  (player.captions.className =
                    t.options.classPrefix +
                    "captions-layer " +
                    t.options.classPrefix +
                    "layer"),
                  (player.captions.innerHTML =
                    '<div class="' +
                    t.options.classPrefix +
                    "captions-position " +
                    t.options.classPrefix +
                    'captions-position-hover"' +
                    attr +
                    ">" +
                    ('<span class="' +
                      t.options.classPrefix +
                      'captions-text"></span>') +
                    "</div>"),
                  (player.captions.style.display = "none"),
                  layers.insertBefore(player.captions, layers.firstChild),
                  (player.captionsText = player.captions.querySelector(
                    "." + t.options.classPrefix + "captions-text"
                  )),
                  (player.captionsButton =
                    _document2["default"].createElement("div")),
                  (player.captionsButton.className =
                    t.options.classPrefix +
                    "button " +
                    t.options.classPrefix +
                    "captions-button"),
                  (player.captionsButton.innerHTML =
                    '<button type="button" aria-controls="' +
                    t.id +
                    '" title="' +
                    tracksTitle +
                    '" aria-label="' +
                    tracksTitle +
                    '" tabindex="0"></button>' +
                    ('<div class="' +
                      t.options.classPrefix +
                      "captions-selector " +
                      t.options.classPrefix +
                      'offscreen">') +
                    ('<ul class="' +
                      t.options.classPrefix +
                      'captions-selector-list">') +
                    ('<li class="' +
                      t.options.classPrefix +
                      'captions-selector-list-item">') +
                    ('<input type="radio" class="' +
                      t.options.classPrefix +
                      'captions-selector-input" ') +
                    ('name="' +
                      player.id +
                      '_captions" id="' +
                      player.id +
                      '_captions_none" ') +
                    'value="none" checked disabled>' +
                    ('<label class="' +
                      t.options.classPrefix +
                      "captions-selector-label ") +
                    (t.options.classPrefix + 'captions-selected" ') +
                    ('for="' +
                      player.id +
                      '_captions_none">' +
                      _i18n2["default"].t("mejs.none") +
                      "</label>") +
                    "</li></ul></div>"),
                  t.addControlElement(player.captionsButton, "tracks"),
                  (player.captionsButton.querySelector(
                    "." + t.options.classPrefix + "captions-selector-input"
                  ).disabled = !1),
                  (player.chaptersButton =
                    _document2["default"].createElement("div")),
                  (player.chaptersButton.className =
                    t.options.classPrefix +
                    "button " +
                    t.options.classPrefix +
                    "chapters-button"),
                  (player.chaptersButton.innerHTML =
                    '<button type="button" aria-controls="' +
                    t.id +
                    '" title="' +
                    chaptersTitle +
                    '" aria-label="' +
                    chaptersTitle +
                    '" tabindex="0"></button>' +
                    ('<div class="' +
                      t.options.classPrefix +
                      "chapters-selector " +
                      t.options.classPrefix +
                      'offscreen">') +
                    ('<ul class="' +
                      t.options.classPrefix +
                      'chapters-selector-list"></ul>') +
                    "</div>");
                for (var subtitleCount = 0, _i = 0; _i < total; _i++) {
                  var kind = player.tracks[_i].kind,
                    src = player.tracks[_i].src;
                  src.trim() &&
                    ("subtitles" === kind || "captions" === kind
                      ? subtitleCount++
                      : "chapters" !== kind ||
                        controls.querySelector(
                          "." + t.options.classPrefix + "chapter-selector"
                        ) ||
                        player.captionsButton.parentNode.insertBefore(
                          player.chaptersButton,
                          player.captionsButton
                        ));
                }
                (player.trackToLoad = -1),
                  (player.selectedTrack = null),
                  (player.isLoadingTrack = !1);
                for (var _i2 = 0; _i2 < total; _i2++) {
                  var _kind = player.tracks[_i2].kind;
                  !player.tracks[_i2].src.trim() ||
                    ("subtitles" !== _kind && "captions" !== _kind) ||
                    player.addTrackButton(
                      player.tracks[_i2].trackId,
                      player.tracks[_i2].srclang,
                      player.tracks[_i2].label
                    );
                }
                player.loadNextTrack();
                var inEvents = ["mouseenter", "focusin"],
                  outEvents = ["mouseleave", "focusout"];
                if (
                  t.options.toggleCaptionsButtonWhenOnlyOne &&
                  1 === subtitleCount
                )
                  player.captionsButton.addEventListener("click", function (e) {
                    var trackId = "none";
                    null === player.selectedTrack &&
                      (trackId = player.tracks[0].trackId);
                    var keyboard = e.keyCode || e.which;
                    player.setTrack(trackId, "undefined" != typeof keyboard);
                  });
                else {
                  for (
                    var labels = player.captionsButton.querySelectorAll(
                        "." + t.options.classPrefix + "captions-selector-label"
                      ),
                      captions =
                        player.captionsButton.querySelectorAll(
                          "input[type=radio]"
                        ),
                      _i3 = 0,
                      _total = inEvents.length;
                    _i3 < _total;
                    _i3++
                  )
                    player.captionsButton.addEventListener(
                      inEvents[_i3],
                      function () {
                        (0, _dom.removeClass)(
                          this.querySelector(
                            "." + t.options.classPrefix + "captions-selector"
                          ),
                          t.options.classPrefix + "offscreen"
                        );
                      }
                    );
                  for (
                    var _i4 = 0, _total2 = outEvents.length;
                    _i4 < _total2;
                    _i4++
                  )
                    player.captionsButton.addEventListener(
                      outEvents[_i4],
                      function () {
                        (0, _dom.addClass)(
                          this.querySelector(
                            "." + t.options.classPrefix + "captions-selector"
                          ),
                          t.options.classPrefix + "offscreen"
                        );
                      }
                    );
                  for (
                    var _i5 = 0, _total3 = captions.length;
                    _i5 < _total3;
                    _i5++
                  )
                    captions[_i5].addEventListener("click", function (e) {
                      var keyboard = e.keyCode || e.which;
                      player.setTrack(
                        this.value,
                        "undefined" != typeof keyboard
                      );
                    });
                  for (
                    var _i6 = 0, _total4 = labels.length;
                    _i6 < _total4;
                    _i6++
                  )
                    labels[_i6].addEventListener("click", function (e) {
                      var radio = (0, _dom.siblings)(this, function (el) {
                          return "INPUT" === el.tagName;
                        })[0],
                        event = (0, _general.createEvent)("click", radio);
                      radio.dispatchEvent(event), e.preventDefault();
                    });
                  player.captionsButton.addEventListener(
                    "keydown",
                    function (e) {
                      e.stopPropagation();
                    }
                  );
                }
                for (
                  var _i7 = 0, _total5 = inEvents.length;
                  _i7 < _total5;
                  _i7++
                )
                  player.chaptersButton.addEventListener(
                    inEvents[_i7],
                    function () {
                      this.querySelector(
                        "." + t.options.classPrefix + "chapters-selector-list"
                      ).children.length &&
                        (0, _dom.removeClass)(
                          this.querySelector(
                            "." + t.options.classPrefix + "chapters-selector"
                          ),
                          t.options.classPrefix + "offscreen"
                        );
                    }
                  );
                for (
                  var _i8 = 0, _total6 = outEvents.length;
                  _i8 < _total6;
                  _i8++
                )
                  player.chaptersButton.addEventListener(
                    outEvents[_i8],
                    function () {
                      (0, _dom.addClass)(
                        this.querySelector(
                          "." + t.options.classPrefix + "chapters-selector"
                        ),
                        t.options.classPrefix + "offscreen"
                      );
                    }
                  );
                player.chaptersButton.addEventListener("keydown", function (e) {
                  e.stopPropagation();
                }),
                  player.options.alwaysShowControls
                    ? (0, _dom.addClass)(
                        player.container.querySelector(
                          "." + t.options.classPrefix + "captions-position"
                        ),
                        t.options.classPrefix + "captions-position-hover"
                      )
                    : (player.container.addEventListener(
                        "controlsshown",
                        function () {
                          (0, _dom.addClass)(
                            player.container.querySelector(
                              "." + t.options.classPrefix + "captions-position"
                            ),
                            t.options.classPrefix + "captions-position-hover"
                          );
                        }
                      ),
                      player.container.addEventListener(
                        "controlshidden",
                        function () {
                          media.paused ||
                            (0, _dom.removeClass)(
                              player.container.querySelector(
                                "." +
                                  t.options.classPrefix +
                                  "captions-position"
                              ),
                              t.options.classPrefix + "captions-position-hover"
                            );
                        }
                      )),
                  media.addEventListener("timeupdate", function () {
                    player.displayCaptions();
                  }),
                  "" !== player.options.slidesSelector &&
                    ((player.slidesContainer = _document2[
                      "default"
                    ].querySelectorAll(player.options.slidesSelector)),
                    media.addEventListener("timeupdate", function () {
                      player.displaySlides();
                    }));
              }
            },
            cleartracks: function (player) {
              player &&
                (player.captions && player.captions.remove(),
                player.chapters && player.chapters.remove(),
                player.captionsText && player.captionsText.remove(),
                player.captionsButton && player.captionsButton.remove(),
                player.chaptersButton && player.chaptersButton.remove());
            },
            rebuildtracks: function () {
              var t = this;
              t.findTracks(),
                t.buildtracks(
                  t,
                  t.getElement(t.controls),
                  t.getElement(t.layers),
                  t.media
                );
            },
            findTracks: function () {
              var t = this,
                tracktags =
                  null === t.trackFiles
                    ? t.node.querySelectorAll("track")
                    : t.trackFiles,
                total = tracktags.length;
              t.tracks = [];
              for (var i = 0; i < total; i++) {
                var track = tracktags[i],
                  srclang = track.getAttribute("srclang").toLowerCase() || "",
                  trackId =
                    t.id +
                    "_track_" +
                    i +
                    "_" +
                    track.getAttribute("kind") +
                    "_" +
                    srclang;
                t.tracks.push({
                  trackId: trackId,
                  srclang: srclang,
                  src: track.getAttribute("src"),
                  kind: track.getAttribute("kind"),
                  label: track.getAttribute("label") || "",
                  entries: [],
                  isLoaded: !1,
                });
              }
            },
            setTrack: function (trackId, setByKeyboard) {
              for (
                var t = this,
                  radios = t.captionsButton.querySelectorAll(
                    'input[type="radio"]'
                  ),
                  captions = t.captionsButton.querySelectorAll(
                    "." + t.options.classPrefix + "captions-selected"
                  ),
                  track = t.captionsButton.querySelector(
                    'input[value="' + trackId + '"]'
                  ),
                  i = 0,
                  total = radios.length;
                i < total;
                i++
              )
                radios[i].checked = !1;
              for (var _i9 = 0, _total7 = captions.length; _i9 < _total7; _i9++)
                (0, _dom.removeClass)(
                  captions[_i9],
                  t.options.classPrefix + "captions-selected"
                );
              track.checked = !0;
              for (
                var labels = (0, _dom.siblings)(track, function (el) {
                    return (0,
                    _dom.hasClass)(el, t.options.classPrefix + "captions-selector-label");
                  }),
                  _i10 = 0,
                  _total8 = labels.length;
                _i10 < _total8;
                _i10++
              )
                (0, _dom.addClass)(
                  labels[_i10],
                  t.options.classPrefix + "captions-selected"
                );
              if ("none" === trackId)
                (t.selectedTrack = null),
                  (0, _dom.removeClass)(
                    t.captionsButton,
                    t.options.classPrefix + "captions-enabled"
                  );
              else
                for (
                  var _i11 = 0, _total9 = t.tracks.length;
                  _i11 < _total9;
                  _i11++
                ) {
                  var _track = t.tracks[_i11];
                  if (_track.trackId === trackId) {
                    null === t.selectedTrack &&
                      (0, _dom.addClass)(
                        t.captionsButton,
                        t.options.classPrefix + "captions-enabled"
                      ),
                      (t.selectedTrack = _track),
                      t.captions.setAttribute("lang", t.selectedTrack.srclang),
                      t.displayCaptions();
                    break;
                  }
                }
              var event = (0, _general.createEvent)("captionschange", t.media);
              (event.detail.caption = t.selectedTrack),
                t.media.dispatchEvent(event),
                setByKeyboard ||
                  setTimeout(function () {
                    t.getElement(t.container).focus();
                  }, 500);
            },
            loadNextTrack: function () {
              var t = this;
              t.trackToLoad++,
                t.trackToLoad < t.tracks.length
                  ? ((t.isLoadingTrack = !0), t.loadTrack(t.trackToLoad))
                  : ((t.isLoadingTrack = !1), t.checkForTracks());
            },
            loadTrack: function (index) {
              var t = this,
                track = t.tracks[index];
              void 0 === track ||
                (void 0 === track.src && "" === track.src) ||
                (0, _dom.ajax)(
                  track.src,
                  "text",
                  function (d) {
                    (track.entries =
                      "string" == typeof d && /<tt\s+xml/gi.exec(d)
                        ? _mejs2["default"].TrackFormatParser.dfxp.parse(d)
                        : _mejs2["default"].TrackFormatParser.webvtt.parse(d)),
                      (track.isLoaded = !0),
                      t.enableTrackButton(track),
                      t.loadNextTrack(),
                      "slides" === track.kind
                        ? t.setupSlides(track)
                        : "chapters" !== track.kind ||
                          t.hasChapters ||
                          (t.drawChapters(track), (t.hasChapters = !0));
                  },
                  function () {
                    t.removeTrackButton(track.trackId), t.loadNextTrack();
                  }
                );
            },
            enableTrackButton: function (track) {
              var t = this,
                lang = track.srclang,
                target = _document2["default"].getElementById(
                  "" + track.trackId
                );
              if (target) {
                var label = track.label;
                "" === label &&
                  (label =
                    _i18n2["default"].t(
                      _mejs2["default"].language.codes[lang]
                    ) || lang),
                  (target.disabled = !1);
                for (
                  var targetSiblings = (0, _dom.siblings)(
                      target,
                      function (el) {
                        return (0, _dom.hasClass)(
                          el,
                          t.options.classPrefix + "captions-selector-label"
                        );
                      }
                    ),
                    i = 0,
                    total = targetSiblings.length;
                  i < total;
                  i++
                )
                  targetSiblings[i].innerHTML = label;
                if (t.options.startLanguage === lang) {
                  target.checked = !0;
                  var event = (0, _general.createEvent)("click", target);
                  target.dispatchEvent(event);
                }
              }
            },
            removeTrackButton: function (trackId) {
              var element = _document2["default"].getElementById("" + trackId);
              if (element) {
                var button = element.closest("li");
                button && button.remove();
              }
            },
            addTrackButton: function (trackId, lang, label) {
              var t = this;
              "" === label &&
                (label =
                  _i18n2["default"].t(_mejs2["default"].language.codes[lang]) ||
                  lang),
                (t.captionsButton.querySelector("ul").innerHTML +=
                  '<li class="' +
                  t.options.classPrefix +
                  'captions-selector-list-item">' +
                  ('<input type="radio" class="' +
                    t.options.classPrefix +
                    'captions-selector-input" ') +
                  ('name="' +
                    t.id +
                    '_captions" id="' +
                    trackId +
                    '" value="' +
                    trackId +
                    '" disabled>') +
                  ('<label class="' +
                    t.options.classPrefix +
                    'captions-selector-label"') +
                  ('for="' + trackId + '">' + label + " (loading)</label>") +
                  "</li>");
            },
            checkForTracks: function () {
              var t = this,
                hasSubtitles = !1;
              if (t.options.hideCaptionsButtonWhenEmpty) {
                for (var i = 0, total = t.tracks.length; i < total; i++) {
                  var kind = t.tracks[i].kind;
                  if (
                    ("subtitles" === kind || "captions" === kind) &&
                    t.tracks[i].isLoaded
                  ) {
                    hasSubtitles = !0;
                    break;
                  }
                }
                (t.captionsButton.style.display = hasSubtitles ? "" : "none"),
                  t.setControlsSize();
              }
            },
            displayCaptions: function () {
              if (void 0 !== this.tracks) {
                var t = this,
                  track = t.selectedTrack,
                  sanitize = function (html) {
                    var div = _document2["default"].createElement("div");
                    div.innerHTML = html;
                    for (
                      var scripts = div.getElementsByTagName("script"),
                        i = scripts.length;
                      i--;

                    )
                      scripts[i].remove();
                    for (
                      var allElements = div.getElementsByTagName("*"),
                        _i12 = 0,
                        n = allElements.length;
                      _i12 < n;
                      _i12++
                    )
                      for (
                        var attributesObj = allElements[_i12].attributes,
                          attributes =
                            Array.prototype.slice.call(attributesObj),
                          j = 0,
                          total = attributes.length;
                        j < total;
                        j++
                      )
                        attributes[j].name.startsWith("on") ||
                        attributes[j].value.startsWith("javascript")
                          ? allElements[_i12].remove()
                          : "style" === attributes[j].name &&
                            allElements[_i12].removeAttribute(
                              attributes[j].name
                            );
                    return div.innerHTML;
                  };
                if (null !== track && track.isLoaded) {
                  var i = t.searchTrackPosition(
                    track.entries,
                    t.media.currentTime
                  );
                  if (i > -1)
                    return (
                      (t.captionsText.innerHTML = sanitize(
                        track.entries[i].text
                      )),
                      (t.captionsText.className =
                        t.options.classPrefix +
                        "captions-text " +
                        (track.entries[i].identifier || "")),
                      (t.captions.style.display = ""),
                      void (t.captions.style.height = "0px")
                    );
                  t.captions.style.display = "none";
                } else t.captions.style.display = "none";
              }
            },
            setupSlides: function (track) {
              var t = this;
              (t.slides = track),
                (t.slides.entries.imgs = [t.slides.entries.length]),
                t.showSlide(0);
            },
            showSlide: function (index) {
              var _this = this,
                t = this;
              if (void 0 !== t.tracks && void 0 !== t.slidesContainer) {
                var url = t.slides.entries[index].text,
                  img = t.slides.entries[index].imgs;
                if (void 0 === img || void 0 === img.fadeIn) {
                  var image = _document2["default"].createElement("img");
                  (image.src = url),
                    image.addEventListener("load", function () {
                      var self = _this,
                        visible = (0, _dom.siblings)(self, function (el) {
                          return visible(el);
                        });
                      (self.style.display = "none"),
                        (t.slidesContainer.innerHTML += self.innerHTML),
                        (0, _dom.fadeIn)(
                          t.slidesContainer.querySelector(image)
                        );
                      for (var i = 0, total = visible.length; i < total; i++)
                        (0, _dom.fadeOut)(visible[i], 400);
                    }),
                    (t.slides.entries[index].imgs = img = image);
                } else if (!(0, _dom.visible)(img)) {
                  var _visible = (0, _dom.siblings)(self, function (el) {
                    return _visible(el);
                  });
                  (0, _dom.fadeIn)(t.slidesContainer.querySelector(img));
                  for (var i = 0, total = _visible.length; i < total; i++)
                    (0, _dom.fadeOut)(_visible[i]);
                }
              }
            },
            displaySlides: function () {
              var t = this;
              if (void 0 !== this.slides) {
                var slides = t.slides,
                  i = t.searchTrackPosition(
                    slides.entries,
                    t.media.currentTime
                  );
                i > -1 && t.showSlide(i);
              }
            },
            drawChapters: function (chapters) {
              var t = this,
                total = chapters.entries.length;
              if (total) {
                t.chaptersButton.querySelector("ul").innerHTML = "";
                for (var i = 0; i < total; i++)
                  t.chaptersButton.querySelector("ul").innerHTML +=
                    '<li class="' +
                    t.options.classPrefix +
                    'chapters-selector-list-item" role="menuitemcheckbox" aria-live="polite" aria-disabled="false" aria-checked="false">' +
                    ('<input type="radio" class="' +
                      t.options.classPrefix +
                      'captions-selector-input" ') +
                    ('name="' +
                      t.id +
                      '_chapters" id="' +
                      t.id +
                      "_chapters_" +
                      i +
                      '" value="' +
                      chapters.entries[i].start +
                      '" disabled>') +
                    ('<label class="' +
                      t.options.classPrefix +
                      'chapters-selector-label"') +
                    ('for="' +
                      t.id +
                      "_chapters_" +
                      i +
                      '">' +
                      chapters.entries[i].text +
                      "</label>") +
                    "</li>";
                for (
                  var radios = t.chaptersButton.querySelectorAll(
                      'input[type="radio"]'
                    ),
                    labels = t.chaptersButton.querySelectorAll(
                      "." + t.options.classPrefix + "chapters-selector-label"
                    ),
                    _i13 = 0,
                    _total10 = radios.length;
                  _i13 < _total10;
                  _i13++
                )
                  (radios[_i13].disabled = !1),
                    (radios[_i13].checked = !1),
                    radios[_i13].addEventListener("click", function (e) {
                      var self = this,
                        listItems = t.chaptersButton.querySelectorAll("li"),
                        label = (0, _dom.siblings)(self, function (el) {
                          return (0,
                          _dom.hasClass)(el, t.options.classPrefix + "chapters-selector-label");
                        })[0];
                      (self.checked = !0),
                        self.parentNode.setAttribute("aria-checked", !0),
                        (0, _dom.addClass)(
                          label,
                          t.options.classPrefix + "chapters-selected"
                        ),
                        (0, _dom.removeClass)(
                          t.chaptersButton.querySelector(
                            "." + t.options.classPrefix + "chapters-selected"
                          ),
                          t.options.classPrefix + "chapters-selected"
                        );
                      for (
                        var _i14 = 0, _total11 = listItems.length;
                        _i14 < _total11;
                        _i14++
                      )
                        listItems[_i14].setAttribute("aria-checked", !1);
                      var keyboard = e.keyCode || e.which;
                      "undefined" == typeof keyboard &&
                        setTimeout(function () {
                          t.getElement(t.container).focus();
                        }, 500),
                        t.media.setCurrentTime(parseFloat(self.value)),
                        t.media.paused && t.media.play();
                    });
                for (
                  var _i15 = 0, _total12 = labels.length;
                  _i15 < _total12;
                  _i15++
                )
                  labels[_i15].addEventListener("click", function (e) {
                    var radio = (0, _dom.siblings)(this, function (el) {
                        return "INPUT" === el.tagName;
                      })[0],
                      event = (0, _general.createEvent)("click", radio);
                    radio.dispatchEvent(event), e.preventDefault();
                  });
              }
            },
            searchTrackPosition: function (tracks, currentTime) {
              for (
                var lo = 0,
                  hi = tracks.length - 1,
                  mid = void 0,
                  start = void 0,
                  stop = void 0;
                lo <= hi;

              ) {
                if (
                  ((mid = (lo + hi) >> 1),
                  (start = tracks[mid].start),
                  (stop = tracks[mid].stop),
                  currentTime >= start && currentTime < stop)
                )
                  return mid;
                start < currentTime
                  ? (lo = mid + 1)
                  : start > currentTime && (hi = mid - 1);
              }
              return -1;
            },
          }),
          (_mejs2["default"].language = {
            codes: {
              af: "mejs.afrikaans",
              sq: "mejs.albanian",
              ar: "mejs.arabic",
              be: "mejs.belarusian",
              bg: "mejs.bulgarian",
              ca: "mejs.catalan",
              zh: "mejs.chinese",
              "zh-cn": "mejs.chinese-simplified",
              "zh-tw": "mejs.chines-traditional",
              hr: "mejs.croatian",
              cs: "mejs.czech",
              da: "mejs.danish",
              nl: "mejs.dutch",
              en: "mejs.english",
              et: "mejs.estonian",
              fl: "mejs.filipino",
              fi: "mejs.finnish",
              fr: "mejs.french",
              gl: "mejs.galician",
              de: "mejs.german",
              el: "mejs.greek",
              ht: "mejs.haitian-creole",
              iw: "mejs.hebrew",
              hi: "mejs.hindi",
              hu: "mejs.hungarian",
              is: "mejs.icelandic",
              id: "mejs.indonesian",
              ga: "mejs.irish",
              it: "mejs.italian",
              ja: "mejs.japanese",
              ko: "mejs.korean",
              lv: "mejs.latvian",
              lt: "mejs.lithuanian",
              mk: "mejs.macedonian",
              ms: "mejs.malay",
              mt: "mejs.maltese",
              no: "mejs.norwegian",
              fa: "mejs.persian",
              pl: "mejs.polish",
              pt: "mejs.portuguese",
              ro: "mejs.romanian",
              ru: "mejs.russian",
              sr: "mejs.serbian",
              sk: "mejs.slovak",
              sl: "mejs.slovenian",
              es: "mejs.spanish",
              sw: "mejs.swahili",
              sv: "mejs.swedish",
              tl: "mejs.tagalog",
              th: "mejs.thai",
              tr: "mejs.turkish",
              uk: "mejs.ukrainian",
              vi: "mejs.vietnamese",
              cy: "mejs.welsh",
              yi: "mejs.yiddish",
            },
          }),
          (_mejs2["default"].TrackFormatParser = {
            webvtt: {
              pattern:
                /^((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ((?:[0-9]{1,2}:)?[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
              parse: function (trackText) {
                for (
                  var lines = trackText.split(/\r?\n/),
                    entries = [],
                    timecode = void 0,
                    text = void 0,
                    identifier = void 0,
                    i = 0,
                    total = lines.length;
                  i < total;
                  i++
                ) {
                  if (
                    ((timecode = this.pattern.exec(lines[i])),
                    timecode && i < lines.length)
                  ) {
                    for (
                      i - 1 >= 0 &&
                        "" !== lines[i - 1] &&
                        (identifier = lines[i - 1]),
                        i++,
                        text = lines[i],
                        i++;
                      "" !== lines[i] && i < lines.length;

                    )
                      (text = text + "\n" + lines[i]), i++;
                    (text = text
                      .trim()
                      .replace(
                        /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,
                        "<a href='$1' target='_blank'>$1</a>"
                      )),
                      entries.push({
                        identifier: identifier,
                        start:
                          0 === (0, _time.convertSMPTEtoSeconds)(timecode[1])
                            ? 0.2
                            : (0, _time.convertSMPTEtoSeconds)(timecode[1]),
                        stop: (0, _time.convertSMPTEtoSeconds)(timecode[3]),
                        text: text,
                        settings: timecode[5],
                      });
                  }
                  identifier = "";
                }
                return entries;
              },
            },
            dfxp: {
              parse: function (trackText) {
                trackText = $(trackText).filter("tt");
                var container = trackText.firstChild,
                  lines = container.querySelectorAll("p"),
                  styleNode = trackText.getElementById(
                    "" + container.attr("style")
                  ),
                  entries = [],
                  styles = void 0;
                if (styleNode.length) {
                  styleNode.removeAttribute("id");
                  var attributes = styleNode.attributes;
                  if (attributes.length) {
                    styles = {};
                    for (var i = 0, total = attributes.length; i < total; i++)
                      styles[attributes[i].name.split(":")[1]] =
                        attributes[i].value;
                  }
                }
                for (
                  var _i16 = 0, _total13 = lines.length;
                  _i16 < _total13;
                  _i16++
                ) {
                  var style = void 0,
                    _temp = {
                      start: null,
                      stop: null,
                      style: null,
                      text: null,
                    };
                  if (
                    (lines.eq(_i16).attr("begin") &&
                      (_temp.start = (0, _time.convertSMPTEtoSeconds)(
                        lines.eq(_i16).attr("begin")
                      )),
                    !_temp.start &&
                      lines.eq(_i16 - 1).attr("end") &&
                      (_temp.start = (0, _time.convertSMPTEtoSeconds)(
                        lines.eq(_i16 - 1).attr("end")
                      )),
                    lines.eq(_i16).attr("end") &&
                      (_temp.stop = (0, _time.convertSMPTEtoSeconds)(
                        lines.eq(_i16).attr("end")
                      )),
                    !_temp.stop &&
                      lines.eq(_i16 + 1).attr("begin") &&
                      (_temp.stop = (0, _time.convertSMPTEtoSeconds)(
                        lines.eq(_i16 + 1).attr("begin")
                      )),
                    styles)
                  ) {
                    style = "";
                    for (var _style in styles)
                      style += _style + ":" + styles[_style] + ";";
                  }
                  style && (_temp.style = style),
                    0 === _temp.start && (_temp.start = 0.2),
                    (_temp.text = lines
                      .eq(_i16)
                      .innerHTML.trim()
                      .replace(
                        /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,
                        "<a href='$1' target='_blank'>$1</a>"
                      )),
                    entries.push(_temp);
                }
                return entries;
              },
            },
          });
      },
      { 16: 16, 2: 2, 26: 26, 27: 27, 30: 30, 5: 5, 7: 7 },
    ],
    14: [
      function (_dereq_, module, exports) {
        "use strict";
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var _document = _dereq_(2),
          _document2 = _interopRequireDefault(_document),
          _player = _dereq_(16),
          _player2 = _interopRequireDefault(_player),
          _i18n = _dereq_(5),
          _i18n2 = _interopRequireDefault(_i18n),
          _constants = _dereq_(25),
          _general = _dereq_(27),
          _dom = _dereq_(26);
        Object.assign(_player.config, {
          muteText: null,
          unmuteText: null,
          allyVolumeControlText: null,
          hideVolumeOnTouchDevices: !0,
          audioVolume: "horizontal",
          videoVolume: "vertical",
          startVolume: 0.8,
        }),
          Object.assign(_player2["default"].prototype, {
            buildvolume: function (player, controls, layers, media) {
              if (
                (!_constants.IS_ANDROID && !_constants.IS_IOS) ||
                !this.options.hideVolumeOnTouchDevices
              ) {
                var t = this,
                  mode = t.isVideo
                    ? t.options.videoVolume
                    : t.options.audioVolume,
                  muteText = (0, _general.isString)(t.options.muteText)
                    ? t.options.muteText
                    : _i18n2["default"].t("mejs.mute"),
                  unmuteText = (0, _general.isString)(t.options.unmuteText)
                    ? t.options.unmuteText
                    : _i18n2["default"].t("mejs.unmute"),
                  volumeControlText = (0, _general.isString)(
                    t.options.allyVolumeControlText
                  )
                    ? t.options.allyVolumeControlText
                    : _i18n2["default"].t("mejs.volume-help-text"),
                  mute = _document2["default"].createElement("div");
                if (
                  ((mute.className =
                    t.options.classPrefix +
                    "button " +
                    t.options.classPrefix +
                    "volume-button " +
                    t.options.classPrefix +
                    "mute"),
                  (mute.innerHTML =
                    "horizontal" === mode
                      ? '<button type="button" aria-controls="' +
                        t.id +
                        '" title="' +
                        muteText +
                        '" aria-label="' +
                        muteText +
                        '" tabindex="0"></button>'
                      : '<button type="button" aria-controls="' +
                        t.id +
                        '" title="' +
                        muteText +
                        '" aria-label="' +
                        muteText +
                        '" tabindex="0"></button>' +
                        ('<a href="javascript:void(0);" class="' +
                          t.options.classPrefix +
                          'volume-slider" ') +
                        ('aria-label="' +
                          _i18n2["default"].t("mejs.volume-slider") +
                          '" aria-valuemin="0" aria-valuemax="100" role="slider" ') +
                        'aria-orientation="vertical">' +
                        ('<span class="' +
                          t.options.classPrefix +
                          'offscreen">' +
                          volumeControlText +
                          "</span>") +
                        ('<div class="' +
                          t.options.classPrefix +
                          'volume-total">') +
                        ('<div class="' +
                          t.options.classPrefix +
                          'volume-current"></div>') +
                        ('<div class="' +
                          t.options.classPrefix +
                          'volume-handle"></div>') +
                        "</div></a>"),
                  t.addControlElement(mute, "volume"),
                  t.options.keyActions.push(
                    {
                      keys: [38],
                      action: function (player) {
                        var volumeSlider = player.container.querySelector(
                          "." + _player.config.classPrefix + "volume-slider"
                        );
                        (volumeSlider ||
                          player.container
                            .querySelector(
                              "." + _player.config.classPrefix + "volume-slider"
                            )
                            .matches(":focus")) &&
                          (volumeSlider.style.display = "block"),
                          player.isVideo &&
                            (player.showControls(),
                            player.startControlsTimer());
                        var newVolume = Math.min(player.volume + 0.1, 1);
                        player.setVolume(newVolume),
                          newVolume > 0 && player.setMuted(!1);
                      },
                    },
                    {
                      keys: [40],
                      action: function (player) {
                        var volumeSlider = player.container.querySelector(
                          "." + _player.config.classPrefix + "volume-slider"
                        );
                        volumeSlider && (volumeSlider.style.display = "block"),
                          player.isVideo &&
                            (player.showControls(),
                            player.startControlsTimer());
                        var newVolume = Math.max(player.volume - 0.1, 0);
                        player.setVolume(newVolume),
                          newVolume <= 0.1 && player.setMuted(!0);
                      },
                    },
                    {
                      keys: [77],
                      action: function (player) {
                        (player.container.querySelector(
                          "." + _player.config.classPrefix + "volume-slider"
                        ).style.display = "block"),
                          player.isVideo &&
                            (player.showControls(),
                            player.startControlsTimer()),
                          player.media.muted
                            ? player.setMuted(!1)
                            : player.setMuted(!0);
                      },
                    }
                  ),
                  "horizontal" === mode)
                ) {
                  var anchor = _document2["default"].createElement("a");
                  (anchor.className =
                    t.options.classPrefix + "horizontal-volume-slider"),
                    (anchor.href = "javascript:void(0);"),
                    anchor.setAttribute(
                      "aria-label",
                      _i18n2["default"].t("mejs.volume-slider")
                    ),
                    anchor.setAttribute("aria-valuemin", 0),
                    anchor.setAttribute("aria-valuemax", 100),
                    anchor.setAttribute("role", "slider"),
                    (anchor.innerHTML +=
                      '<span class="' +
                      t.options.classPrefix +
                      'offscreen">' +
                      volumeControlText +
                      "</span>" +
                      ('<div class="' +
                        t.options.classPrefix +
                        'horizontal-volume-total">') +
                      ('<div class="' +
                        t.options.classPrefix +
                        'horizontal-volume-current"></div>') +
                      ('<div class="' +
                        t.options.classPrefix +
                        'horizontal-volume-handle"></div>') +
                      "</div>"),
                    mute.parentNode.insertBefore(anchor, mute.nextSibling);
                }
                var mouseIsDown = !1,
                  mouseIsOver = !1,
                  modified = !1,
                  updateVolumeSlider = function () {
                    var volume = Math.floor(100 * media.volume);
                    volumeSlider.setAttribute("aria-valuenow", volume),
                      volumeSlider.setAttribute("aria-valuetext", volume + "%");
                  },
                  volumeSlider =
                    "vertical" === mode
                      ? t
                          .getElement(t.container)
                          .querySelector(
                            "." + t.options.classPrefix + "volume-slider"
                          )
                      : t
                          .getElement(t.container)
                          .querySelector(
                            "." +
                              t.options.classPrefix +
                              "horizontal-volume-slider"
                          ),
                  volumeTotal =
                    "vertical" === mode
                      ? t
                          .getElement(t.container)
                          .querySelector(
                            "." + t.options.classPrefix + "volume-total"
                          )
                      : t
                          .getElement(t.container)
                          .querySelector(
                            "." +
                              t.options.classPrefix +
                              "horizontal-volume-total"
                          ),
                  volumeCurrent =
                    "vertical" === mode
                      ? t
                          .getElement(t.container)
                          .querySelector(
                            "." + t.options.classPrefix + "volume-current"
                          )
                      : t
                          .getElement(t.container)
                          .querySelector(
                            "." +
                              t.options.classPrefix +
                              "horizontal-volume-current"
                          ),
                  volumeHandle =
                    "vertical" === mode
                      ? t
                          .getElement(t.container)
                          .querySelector(
                            "." + t.options.classPrefix + "volume-handle"
                          )
                      : t
                          .getElement(t.container)
                          .querySelector(
                            "." +
                              t.options.classPrefix +
                              "horizontal-volume-handle"
                          ),
                  positionVolumeHandle = function (volume) {
                    if (
                      null !== volume &&
                      !isNaN(volume) &&
                      void 0 !== volume
                    ) {
                      if (
                        ((volume = Math.max(0, volume)),
                        (volume = Math.min(volume, 1)),
                        0 === volume)
                      ) {
                        (0, _dom.removeClass)(
                          mute,
                          t.options.classPrefix + "mute"
                        ),
                          (0, _dom.addClass)(
                            mute,
                            t.options.classPrefix + "unmute"
                          );
                        var button = mute.firstElementChild;
                        button.setAttribute("title", unmuteText),
                          button.setAttribute("aria-label", unmuteText);
                      } else {
                        (0, _dom.removeClass)(
                          mute,
                          t.options.classPrefix + "unmute"
                        ),
                          (0, _dom.addClass)(
                            mute,
                            t.options.classPrefix + "mute"
                          );
                        var _button = mute.firstElementChild;
                        _button.setAttribute("title", muteText),
                          _button.setAttribute("aria-label", muteText);
                      }
                      var volumePercentage = 100 * volume + "%",
                        volumeStyles = getComputedStyle(volumeHandle);
                      "vertical" === mode
                        ? ((volumeCurrent.style.bottom = 0),
                          (volumeCurrent.style.height = volumePercentage),
                          (volumeHandle.style.bottom = volumePercentage),
                          (volumeHandle.style.marginBottom =
                            -parseFloat(volumeStyles.height) / 2 + "px"))
                        : ((volumeCurrent.style.left = 0),
                          (volumeCurrent.style.width = volumePercentage),
                          (volumeHandle.style.left = volumePercentage),
                          (volumeHandle.style.marginLeft =
                            -parseFloat(volumeStyles.width) / 2 + "px"));
                    }
                  },
                  handleVolumeMove = function (e) {
                    var totalOffset = (0, _dom.offset)(volumeTotal),
                      volumeStyles = getComputedStyle(volumeTotal);
                    modified = !0;
                    var volume = null;
                    if ("vertical" === mode) {
                      var railHeight = parseFloat(volumeStyles.height),
                        newY = e.pageY - totalOffset.top;
                      if (
                        ((volume = (railHeight - newY) / railHeight),
                        0 === totalOffset.top || 0 === totalOffset.left)
                      )
                        return;
                    } else {
                      var railWidth = parseFloat(volumeStyles.width),
                        newX = e.pageX - totalOffset.left;
                      volume = newX / railWidth;
                    }
                    (volume = Math.max(0, volume)),
                      (volume = Math.min(volume, 1)),
                      positionVolumeHandle(volume),
                      t.setMuted(0 === volume),
                      t.setVolume(volume),
                      e.preventDefault(),
                      e.stopPropagation();
                  },
                  toggleMute = function () {
                    t.muted
                      ? (positionVolumeHandle(0),
                        (0, _dom.removeClass)(
                          mute,
                          t.options.classPrefix + "mute"
                        ),
                        (0, _dom.addClass)(
                          mute,
                          t.options.classPrefix + "unmute"
                        ))
                      : (positionVolumeHandle(media.volume),
                        (0, _dom.removeClass)(
                          mute,
                          t.options.classPrefix + "unmute"
                        ),
                        (0, _dom.addClass)(
                          mute,
                          t.options.classPrefix + "mute"
                        ));
                  };
                player.container.addEventListener("keydown", function (e) {
                  var hasFocus = !!e.target.closest(
                    "." + t.options.classPrefix + "container"
                  );
                  hasFocus ||
                    "vertical" !== mode ||
                    (volumeSlider.style.display = "none");
                }),
                  mute.addEventListener("mouseenter", function (e) {
                    e.target === mute &&
                      ((volumeSlider.style.display = "block"),
                      (mouseIsOver = !0),
                      e.preventDefault(),
                      e.stopPropagation());
                  }),
                  mute.addEventListener("focusin", function () {
                    (volumeSlider.style.display = "block"), (mouseIsOver = !0);
                  }),
                  mute.addEventListener("focusout", function (e) {
                    (e.relatedTarget &&
                      (!e.relatedTarget ||
                        e.relatedTarget.matches(
                          "." + t.options.classPrefix + "volume-slider"
                        ))) ||
                      "vertical" !== mode ||
                      (volumeSlider.style.display = "none");
                  }),
                  mute.addEventListener("mouseleave", function () {
                    (mouseIsOver = !1),
                      mouseIsDown ||
                        "vertical" !== mode ||
                        (volumeSlider.style.display = "none");
                  }),
                  mute.addEventListener("focusout", function () {
                    mouseIsOver = !1;
                  }),
                  mute.addEventListener("keydown", function (e) {
                    if (t.options.keyActions.length) {
                      var keyCode = e.which || e.keyCode || 0,
                        volume = media.volume;
                      switch (keyCode) {
                        case 38:
                          volume = Math.min(volume + 0.1, 1);
                          break;
                        case 40:
                          volume = Math.max(0, volume - 0.1);
                          break;
                        default:
                          return !0;
                      }
                      (mouseIsDown = !1),
                        positionVolumeHandle(volume),
                        media.setVolume(volume),
                        e.preventDefault(),
                        e.stopPropagation();
                    }
                  }),
                  mute
                    .querySelector("button")
                    .addEventListener("click", function () {
                      media.setMuted(!media.muted);
                      var event = (0, _general.createEvent)(
                        "volumechange",
                        media
                      );
                      media.dispatchEvent(event);
                    }),
                  volumeSlider.addEventListener("dragstart", function () {
                    return !1;
                  }),
                  volumeSlider.addEventListener("mouseover", function () {
                    mouseIsOver = !0;
                  }),
                  volumeSlider.addEventListener("focusin", function () {
                    (volumeSlider.style.display = "block"), (mouseIsOver = !0);
                  }),
                  volumeSlider.addEventListener("focusout", function () {
                    (mouseIsOver = !1),
                      mouseIsDown ||
                        "vertical" !== mode ||
                        (volumeSlider.style.display = "none");
                  }),
                  volumeSlider.addEventListener("mousedown", function (e) {
                    handleVolumeMove(e),
                      t.globalBind("mousemove.vol", function (event) {
                        var target = event.target;
                        mouseIsDown &&
                          (target === volumeSlider ||
                            target.closest(
                              "vertical" === mode
                                ? "." + t.options.classPrefix + "volume-slider"
                                : "." +
                                    t.options.classPrefix +
                                    "horizontal-volume-slider"
                            )) &&
                          handleVolumeMove(event);
                      }),
                      t.globalBind("mouseup.vol", function () {
                        (mouseIsDown = !1),
                          mouseIsOver ||
                            "vertical" !== mode ||
                            (volumeSlider.style.display = "none");
                      }),
                      (mouseIsDown = !0),
                      e.preventDefault(),
                      e.stopPropagation();
                  }),
                  media.addEventListener("volumechange", function (e) {
                    mouseIsDown || toggleMute(), updateVolumeSlider(e);
                  });
                var rendered = !1;
                media.addEventListener("rendererready", function () {
                  modified ||
                    setTimeout(function () {
                      (rendered = !0),
                        (0 === player.options.startVolume ||
                          media.originalNode.muted) &&
                          (media.setMuted(!0),
                          (player.options.startVolume = 0)),
                        media.setVolume(player.options.startVolume),
                        t.setControlsSize();
                    }, 250);
                }),
                  media.addEventListener("loadedmetadata", function () {
                    setTimeout(function () {
                      modified ||
                        rendered ||
                        ((0 === player.options.startVolume ||
                          media.originalNode.muted) &&
                          (media.setMuted(!0),
                          (player.options.startVolume = 0)),
                        media.setVolume(player.options.startVolume),
                        t.setControlsSize()),
                        (rendered = !1);
                    }, 250);
                  }),
                  (0 === player.options.startVolume ||
                    media.originalNode.muted) &&
                    (media.setMuted(!0),
                    (player.options.startVolume = 0),
                    toggleMute()),
                  t
                    .getElement(t.container)
                    .addEventListener("controlsresize", function () {
                      toggleMute();
                    });
              }
            },
          });
      },
      { 16: 16, 2: 2, 25: 25, 26: 26, 27: 27, 5: 5 },
    ],
    15: [
      function (_dereq_, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 });
        exports.EN = {
          "mejs.plural-form": 1,
          "mejs.download-file": "Download File",
          "mejs.install-flash":
            "You are using a browser that does not have Flash player enabled or installed. Please turn on your Flash player plugin or download the latest version from https://get.adobe.com/flashplayer/",
          "mejs.fullscreen": "Fullscreen",
          "mejs.play": "Play",
          "mejs.pause": "Pause",
          "mejs.time-slider": "Time Slider",
          "mejs.time-help-text":
            "Use Left/Right Arrow keys to advance one second, Up/Down arrows to advance ten seconds.",
          "mejs.live-broadcast": "Live Broadcast",
          "mejs.volume-help-text":
            "Use Up/Down Arrow keys to increase or decrease volume.",
          "mejs.unmute": "Unmute",
          "mejs.mute": "Mute",
          "mejs.volume-slider": "Volume Slider",
          "mejs.video-player": "Video Player",
          "mejs.audio-player": "Audio Player",
          "mejs.captions-subtitles": "Captions/Subtitles",
          "mejs.captions-chapters": "Chapters",
          "mejs.none": "None",
          "mejs.afrikaans": "Afrikaans",
          "mejs.albanian": "Albanian",
          "mejs.arabic": "Arabic",
          "mejs.belarusian": "Belarusian",
          "mejs.bulgarian": "Bulgarian",
          "mejs.catalan": "Catalan",
          "mejs.chinese": "Chinese",
          "mejs.chinese-simplified": "Chinese (Simplified)",
          "mejs.chinese-traditional": "Chinese (Traditional)",
          "mejs.croatian": "Croatian",
          "mejs.czech": "Czech",
          "mejs.danish": "Danish",
          "mejs.dutch": "Dutch",
          "mejs.english": "English",
          "mejs.estonian": "Estonian",
          "mejs.filipino": "Filipino",
          "mejs.finnish": "Finnish",
          "mejs.french": "French",
          "mejs.galician": "Galician",
          "mejs.german": "German",
          "mejs.greek": "Greek",
          "mejs.haitian-creole": "Haitian Creole",
          "mejs.hebrew": "Hebrew",
          "mejs.hindi": "Hindi",
          "mejs.hungarian": "Hungarian",
          "mejs.icelandic": "Icelandic",
          "mejs.indonesian": "Indonesian",
          "mejs.irish": "Irish",
          "mejs.italian": "Italian",
          "mejs.japanese": "Japanese",
          "mejs.korean": "Korean",
          "mejs.latvian": "Latvian",
          "mejs.lithuanian": "Lithuanian",
          "mejs.macedonian": "Macedonian",
          "mejs.malay": "Malay",
          "mejs.maltese": "Maltese",
          "mejs.norwegian": "Norwegian",
          "mejs.persian": "Persian",
          "mejs.polish": "Polish",
          "mejs.portuguese": "Portuguese",
          "mejs.romanian": "Romanian",
          "mejs.russian": "Russian",
          "mejs.serbian": "Serbian",
          "mejs.slovak": "Slovak",
          "mejs.slovenian": "Slovenian",
          "mejs.spanish": "Spanish",
          "mejs.swahili": "Swahili",
          "mejs.swedish": "Swedish",
          "mejs.tagalog": "Tagalog",
          "mejs.thai": "Thai",
          "mejs.turkish": "Turkish",
          "mejs.ukrainian": "Ukrainian",
          "mejs.vietnamese": "Vietnamese",
          "mejs.welsh": "Welsh",
          "mejs.yiddish": "Yiddish",
        };
      },
      {},
    ],
    16: [
      function (_dereq_, module, exports) {
        "use strict";
        function _interopRequireWildcard(obj) {
          if (obj && obj.__esModule) return obj;
          var newObj = {};
          if (null != obj)
            for (var key in obj)
              Object.prototype.hasOwnProperty.call(obj, key) &&
                (newObj[key] = obj[key]);
          return (newObj["default"] = obj), newObj;
        }
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor))
            throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.config = void 0);
        var _typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    "function" == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? "symbol"
                    : typeof obj;
                },
          _createClass = (function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                (descriptor.enumerable = descriptor.enumerable || !1),
                  (descriptor.configurable = !0),
                  "value" in descriptor && (descriptor.writable = !0),
                  Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function (Constructor, protoProps, staticProps) {
              return (
                protoProps &&
                  defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
              );
            };
          })(),
          _window = _dereq_(3),
          _window2 = _interopRequireDefault(_window),
          _document = _dereq_(2),
          _document2 = _interopRequireDefault(_document),
          _mejs = _dereq_(7),
          _mejs2 = _interopRequireDefault(_mejs),
          _mediaelement = _dereq_(6),
          _mediaelement2 = _interopRequireDefault(_mediaelement),
          _default = _dereq_(17),
          _default2 = _interopRequireDefault(_default),
          _i18n = _dereq_(5),
          _i18n2 = _interopRequireDefault(_i18n),
          _constants = _dereq_(25),
          _general = _dereq_(27),
          _time = _dereq_(30),
          _media = _dereq_(28),
          _dom = _dereq_(26),
          dom = _interopRequireWildcard(_dom);
        (_mejs2["default"].mepIndex = 0), (_mejs2["default"].players = {});
        var config = (exports.config = {
          poster: "",
          showPosterWhenEnded: !1,
          showPosterWhenPaused: !1,
          defaultVideoWidth: 480,
          defaultVideoHeight: 270,
          videoWidth: -1,
          videoHeight: -1,
          defaultAudioWidth: 400,
          defaultAudioHeight: 40,
          defaultSeekBackwardInterval: function (media) {
            return 0.05 * media.getDuration();
          },
          defaultSeekForwardInterval: function (media) {
            return 0.05 * media.getDuration();
          },
          setDimensions: !0,
          audioWidth: -1,
          audioHeight: -1,
          loop: !1,
          autoRewind: !0,
          enableAutosize: !0,
          timeFormat: "",
          alwaysShowHours: !1,
          showTimecodeFrameCount: !1,
          framesPerSecond: 25,
          alwaysShowControls: !1,
          hideVideoControlsOnLoad: !1,
          hideVideoControlsOnPause: !1,
          clickToPlayPause: !0,
          controlsTimeoutDefault: 1500,
          controlsTimeoutMouseEnter: 2500,
          controlsTimeoutMouseLeave: 1e3,
          iPadUseNativeControls: !1,
          iPhoneUseNativeControls: !1,
          AndroidUseNativeControls: !1,
          features: [
            "playpause",
            "current",
            "progress",
            "duration",
            "tracks",
            "volume",
            "fullscreen",
          ],
          useDefaultControls: !1,
          isVideo: !0,
          stretching: "auto",
          classPrefix: "mejs__",
          enableKeyboard: !0,
          pauseOtherPlayers: !0,
          secondsDecimalLength: 0,
          customError: null,
          keyActions: [
            {
              keys: [32, 179],
              action: function (player) {
                _constants.IS_FIREFOX ||
                  (player.paused || player.ended
                    ? player.play()
                    : player.pause());
              },
            },
          ],
        });
        _mejs2["default"].MepDefaults = config;
        var MediaElementPlayer = (function () {
          function MediaElementPlayer(node, o) {
            _classCallCheck(this, MediaElementPlayer);
            var t = this,
              element =
                "string" == typeof node
                  ? _document2["default"].getElementById(node)
                  : node;
            if (!(t instanceof MediaElementPlayer))
              return new MediaElementPlayer(element, o);
            if (((t.node = t.media = element), t.node)) {
              if (t.media.player) return t.media.player;
              if (
                ((t.hasFocus = !1),
                (t.controlsAreVisible = !0),
                (t.controlsEnabled = !0),
                (t.controlsTimer = null),
                (t.currentMediaTime = 0),
                (t.proxy = null),
                void 0 === o)
              ) {
                var options = t.node.getAttribute("data-mejsoptions");
                o = options ? JSON.parse(options) : {};
              }
              return (
                (t.options = Object.assign({}, config, o)),
                t.options.loop && !t.media.getAttribute("loop")
                  ? ((t.media.loop = !0), (t.node.loop = !0))
                  : t.media.loop && (t.options.loop = !0),
                t.options.timeFormat ||
                  ((t.options.timeFormat = "mm:ss"),
                  t.options.alwaysShowHours &&
                    (t.options.timeFormat = "hh:mm:ss"),
                  t.options.showTimecodeFrameCount &&
                    (t.options.timeFormat += ":ff")),
                (0, _time.calculateTimeFormat)(
                  0,
                  t.options,
                  t.options.framesPerSecond || 25
                ),
                (t.id = "mep_" + _mejs2["default"].mepIndex++),
                (_mejs2["default"].players[t.id] = t),
                t.init(),
                t
              );
            }
          }
          return (
            _createClass(MediaElementPlayer, [
              {
                key: "getElement",
                value: function (element) {
                  return element;
                },
              },
              {
                key: "init",
                value: function () {
                  var t = this,
                    playerOptions = Object.assign({}, t.options, {
                      success: function (media, domNode) {
                        t._meReady(media, domNode);
                      },
                      error: function (e) {
                        t._handleError(e);
                      },
                    }),
                    tagName = t.node.tagName.toLowerCase();
                  if (
                    ((t.isDynamic =
                      "audio" !== tagName &&
                      "video" !== tagName &&
                      "iframe" !== tagName),
                    (t.isVideo = t.isDynamic
                      ? t.options.isVideo
                      : "audio" !== tagName && t.options.isVideo),
                    (t.mediaFiles = null),
                    (t.trackFiles = null),
                    (_constants.IS_IPAD && t.options.iPadUseNativeControls) ||
                      (_constants.IS_IPHONE &&
                        t.options.iPhoneUseNativeControls))
                  )
                    t.node.setAttribute("controls", !0),
                      _constants.IS_IPAD &&
                        t.node.getAttribute("autoplay") &&
                        t.play();
                  else if (
                    (!t.isVideo &&
                      (t.isVideo ||
                        (!t.options.features.length &&
                          !t.options.useDefaultControls))) ||
                    (_constants.IS_ANDROID &&
                      t.options.AndroidUseNativeControls)
                  )
                    t.isVideo ||
                      t.options.features.length ||
                      t.options.useDefaultControls ||
                      (t.node.style.display = "none");
                  else {
                    t.node.removeAttribute("controls");
                    var videoPlayerTitle = t.isVideo
                        ? _i18n2["default"].t("mejs.video-player")
                        : _i18n2["default"].t("mejs.audio-player"),
                      offscreen = _document2["default"].createElement("span");
                    if (
                      ((offscreen.className =
                        t.options.classPrefix + "offscreen"),
                      (offscreen.innerText = videoPlayerTitle),
                      t.media.parentNode.insertBefore(offscreen, t.media),
                      (t.container =
                        _document2["default"].createElement("div")),
                      (t.getElement(t.container).id = t.id),
                      (t.getElement(t.container).className =
                        t.options.classPrefix +
                        "container " +
                        t.options.classPrefix +
                        "container-keyboard-inactive " +
                        t.media.className),
                      (t.getElement(t.container).tabIndex = 0),
                      t
                        .getElement(t.container)
                        .setAttribute("role", "application"),
                      t
                        .getElement(t.container)
                        .setAttribute("aria-label", videoPlayerTitle),
                      (t.getElement(t.container).innerHTML =
                        '<div class="' +
                        t.options.classPrefix +
                        'inner">' +
                        ('<div class="' +
                          t.options.classPrefix +
                          'mediaelement"></div>') +
                        ('<div class="' +
                          t.options.classPrefix +
                          'layers"></div>') +
                        ('<div class="' +
                          t.options.classPrefix +
                          'controls"></div>') +
                        "</div>"),
                      t
                        .getElement(t.container)
                        .addEventListener("focus", function (e) {
                          if (
                            !t.controlsAreVisible &&
                            !t.hasFocus &&
                            t.controlsEnabled
                          ) {
                            t.showControls(!0);
                            var btnSelector = (0, _general.isNodeAfter)(
                                e.relatedTarget,
                                t.getElement(t.container)
                              )
                                ? "." +
                                  t.options.classPrefix +
                                  "controls ." +
                                  t.options.classPrefix +
                                  "button:last-child > button"
                                : "." +
                                  t.options.classPrefix +
                                  "playpause-button > button",
                              button = t
                                .getElement(t.container)
                                .querySelector(btnSelector);
                            button.focus();
                          }
                        }),
                      t.node.parentNode.insertBefore(
                        t.getElement(t.container),
                        t.node
                      ),
                      t.options.features.length ||
                        t.options.useDefaultControls ||
                        ((t.getElement(t.container).style.background =
                          "transparent"),
                        (t
                          .getElement(t.container)
                          .querySelector(
                            "." + t.options.classPrefix + "controls"
                          ).style.display = "none")),
                      t.isVideo &&
                        "fill" === t.options.stretching &&
                        !dom.hasClass(
                          t.getElement(t.container).parentNode,
                          t.options.classPrefix + "fill-container"
                        ))
                    ) {
                      t.outerContainer = t.media.parentNode;
                      var wrapper = _document2["default"].createElement("div");
                      (wrapper.className =
                        t.options.classPrefix + "fill-container"),
                        t
                          .getElement(t.container)
                          .parentNode.insertBefore(
                            wrapper,
                            t.getElement(t.container)
                          ),
                        wrapper.appendChild(t.getElement(t.container));
                    }
                    if (
                      (_constants.IS_ANDROID &&
                        dom.addClass(
                          t.getElement(t.container),
                          t.options.classPrefix + "android"
                        ),
                      _constants.IS_IOS &&
                        dom.addClass(
                          t.getElement(t.container),
                          t.options.classPrefix + "ios"
                        ),
                      _constants.IS_IPAD &&
                        dom.addClass(
                          t.getElement(t.container),
                          t.options.classPrefix + "ipad"
                        ),
                      _constants.IS_IPHONE &&
                        dom.addClass(
                          t.getElement(t.container),
                          t.options.classPrefix + "iphone"
                        ),
                      dom.addClass(
                        t.getElement(t.container),
                        t.isVideo
                          ? t.options.classPrefix + "video"
                          : t.options.classPrefix + "audio"
                      ),
                      _constants.IS_SAFARI && !_constants.IS_IOS)
                    ) {
                      dom.addClass(
                        t.getElement(t.container),
                        t.options.classPrefix + "hide-cues"
                      );
                      for (
                        var cloneNode = t.node.cloneNode(),
                          children = t.node.children,
                          mediaFiles = [],
                          tracks = [],
                          i = 0,
                          total = children.length;
                        i < total;
                        i++
                      ) {
                        var childNode = children[i];
                        !(function () {
                          switch (childNode.tagName.toLowerCase()) {
                            case "source":
                              var elements = {};
                              Array.prototype.slice
                                .call(childNode.attributes)
                                .forEach(function (item) {
                                  elements[item.name] = item.value;
                                }),
                                (elements.type = (0, _media.formatType)(
                                  elements.src,
                                  elements.type
                                )),
                                mediaFiles.push(elements);
                              break;
                            case "track":
                              (childNode.mode = "hidden"),
                                tracks.push(childNode);
                              break;
                            default:
                              cloneNode.appendChild(childNode);
                          }
                        })();
                      }
                      t.node.remove(),
                        (t.node = t.media = cloneNode),
                        mediaFiles.length && (t.mediaFiles = mediaFiles),
                        tracks.length && (t.trackFiles = tracks);
                    }
                    t
                      .getElement(t.container)
                      .querySelector(
                        "." + t.options.classPrefix + "mediaelement"
                      )
                      .appendChild(t.node),
                      (t.media.player = t),
                      (t.controls = t
                        .getElement(t.container)
                        .querySelector(
                          "." + t.options.classPrefix + "controls"
                        )),
                      (t.layers = t
                        .getElement(t.container)
                        .querySelector("." + t.options.classPrefix + "layers"));
                    var tagType = t.isVideo ? "video" : "audio",
                      capsTagName =
                        tagType.substring(0, 1).toUpperCase() +
                        tagType.substring(1);
                    t.options[tagType + "Width"] > 0 ||
                    t.options[tagType + "Width"].toString().indexOf("%") > -1
                      ? (t.width = t.options[tagType + "Width"])
                      : "" !== t.node.style.width && null !== t.node.style.width
                      ? (t.width = t.node.style.width)
                      : t.node.getAttribute("width")
                      ? (t.width = t.node.getAttribute("width"))
                      : (t.width =
                          t.options["default" + capsTagName + "Width"]),
                      t.options[tagType + "Height"] > 0 ||
                      t.options[tagType + "Height"].toString().indexOf("%") > -1
                        ? (t.height = t.options[tagType + "Height"])
                        : "" !== t.node.style.height &&
                          null !== t.node.style.height
                        ? (t.height = t.node.style.height)
                        : t.node.getAttribute("height")
                        ? (t.height = t.node.getAttribute("height"))
                        : (t.height =
                            t.options["default" + capsTagName + "Height"]),
                      (t.initialAspectRatio =
                        t.height >= t.width
                          ? t.width / t.height
                          : t.height / t.width),
                      t.setPlayerSize(t.width, t.height),
                      (playerOptions.pluginWidth = t.width),
                      (playerOptions.pluginHeight = t.height);
                  }
                  if (
                    ((_mejs2["default"].MepDefaults = playerOptions),
                    new _mediaelement2["default"](
                      t.media,
                      playerOptions,
                      t.mediaFiles
                    ),
                    void 0 !== t.getElement(t.container) &&
                      t.options.features.length &&
                      t.controlsAreVisible &&
                      !t.options.hideVideoControlsOnLoad)
                  ) {
                    var event = (0, _general.createEvent)(
                      "controlsshown",
                      t.getElement(t.container)
                    );
                    t.getElement(t.container).dispatchEvent(event);
                  }
                },
              },
              {
                key: "showControls",
                value: function (doAnimation) {
                  var t = this;
                  if (
                    ((doAnimation = void 0 === doAnimation || doAnimation),
                    !t.controlsAreVisible && t.isVideo)
                  ) {
                    if (doAnimation)
                      !(function () {
                        dom.fadeIn(t.getElement(t.controls), 200, function () {
                          dom.removeClass(
                            t.getElement(t.controls),
                            t.options.classPrefix + "offscreen"
                          );
                          var event = (0, _general.createEvent)(
                            "controlsshown",
                            t.getElement(t.container)
                          );
                          t.getElement(t.container).dispatchEvent(event);
                        });
                        for (
                          var controls = t
                              .getElement(t.container)
                              .querySelectorAll(
                                "." + t.options.classPrefix + "control"
                              ),
                            _loop = function (i, total) {
                              dom.fadeIn(controls[i], 200, function () {
                                dom.removeClass(
                                  controls[i],
                                  t.options.classPrefix + "offscreen"
                                );
                              });
                            },
                            i = 0,
                            total = controls.length;
                          i < total;
                          i++
                        )
                          _loop(i, total);
                      })();
                    else {
                      dom.removeClass(
                        t.getElement(t.controls),
                        t.options.classPrefix + "offscreen"
                      ),
                        (t.getElement(t.controls).style.display = ""),
                        (t.getElement(t.controls).style.opacity = 1);
                      for (
                        var controls = t
                            .getElement(t.container)
                            .querySelectorAll(
                              "." + t.options.classPrefix + "control"
                            ),
                          i = 0,
                          total = controls.length;
                        i < total;
                        i++
                      )
                        dom.removeClass(
                          controls[i],
                          t.options.classPrefix + "offscreen"
                        ),
                          (controls[i].style.display = "");
                      var event = (0, _general.createEvent)(
                        "controlsshown",
                        t.getElement(t.container)
                      );
                      t.getElement(t.container).dispatchEvent(event);
                    }
                    (t.controlsAreVisible = !0), t.setControlsSize();
                  }
                },
              },
              {
                key: "hideControls",
                value: function (doAnimation, forceHide) {
                  var t = this;
                  if (
                    ((doAnimation = void 0 === doAnimation || doAnimation),
                    forceHide === !0 ||
                      !(
                        !t.controlsAreVisible ||
                        t.options.alwaysShowControls ||
                        (t.paused &&
                          4 === t.readyState &&
                          ((!t.options.hideVideoControlsOnLoad &&
                            t.currentTime <= 0) ||
                            (!t.options.hideVideoControlsOnPause &&
                              t.currentTime > 0))) ||
                        (t.isVideo &&
                          !t.options.hideVideoControlsOnLoad &&
                          !t.readyState) ||
                        t.ended
                      ))
                  ) {
                    if (doAnimation)
                      !(function () {
                        dom.fadeOut(t.getElement(t.controls), 200, function () {
                          dom.addClass(
                            t.getElement(t.controls),
                            t.options.classPrefix + "offscreen"
                          ),
                            (t.getElement(t.controls).style.display = "");
                          var event = (0, _general.createEvent)(
                            "controlshidden",
                            t.getElement(t.container)
                          );
                          t.getElement(t.container).dispatchEvent(event);
                        });
                        for (
                          var controls = t
                              .getElement(t.container)
                              .querySelectorAll(
                                "." + t.options.classPrefix + "control"
                              ),
                            _loop2 = function (i, total) {
                              dom.fadeOut(controls[i], 200, function () {
                                dom.addClass(
                                  controls[i],
                                  t.options.classPrefix + "offscreen"
                                ),
                                  (controls[i].style.display = "");
                              });
                            },
                            i = 0,
                            total = controls.length;
                          i < total;
                          i++
                        )
                          _loop2(i, total);
                      })();
                    else {
                      dom.addClass(
                        t.getElement(t.controls),
                        t.options.classPrefix + "offscreen"
                      ),
                        (t.getElement(t.controls).style.display = ""),
                        (t.getElement(t.controls).style.opacity = 0);
                      for (
                        var controls = t
                            .getElement(t.container)
                            .querySelectorAll(
                              "." + t.options.classPrefix + "control"
                            ),
                          i = 0,
                          total = controls.length;
                        i < total;
                        i++
                      )
                        dom.addClass(
                          controls[i],
                          t.options.classPrefix + "offscreen"
                        ),
                          (controls[i].style.display = "");
                      var event = (0, _general.createEvent)(
                        "controlshidden",
                        t.getElement(t.container)
                      );
                      t.getElement(t.container).dispatchEvent(event);
                    }
                    t.controlsAreVisible = !1;
                  }
                },
              },
              {
                key: "startControlsTimer",
                value: function (timeout) {
                  var t = this;
                  (timeout =
                    "undefined" != typeof timeout
                      ? timeout
                      : t.options.controlsTimeoutDefault),
                    t.killControlsTimer("start"),
                    (t.controlsTimer = setTimeout(function () {
                      t.hideControls(), t.killControlsTimer("hide");
                    }, timeout));
                },
              },
              {
                key: "killControlsTimer",
                value: function () {
                  var t = this;
                  null !== t.controlsTimer &&
                    (clearTimeout(t.controlsTimer),
                    delete t.controlsTimer,
                    (t.controlsTimer = null));
                },
              },
              {
                key: "disableControls",
                value: function () {
                  var t = this;
                  t.killControlsTimer(),
                    (t.controlsEnabled = !1),
                    t.hideControls(!1, !0);
                },
              },
              {
                key: "enableControls",
                value: function () {
                  var t = this;
                  (t.controlsEnabled = !0), t.showControls(!1);
                },
              },
              {
                key: "_setDefaultPlayer",
                value: function () {
                  var t = this;
                  t.proxy && t.proxy.pause(),
                    (t.proxy = new _default2["default"](t)),
                    t.media.addEventListener("loadedmetadata", function () {
                      t.getCurrentTime() > 0 &&
                        t.currentMediaTime > 0 &&
                        (t.setCurrentTime(t.currentMediaTime),
                        _constants.IS_IOS || _constants.IS_ANDROID || t.play());
                    });
                },
              },
              {
                key: "_meReady",
                value: function (media, domNode) {
                  var t = this,
                    autoplayAttr = domNode.getAttribute("autoplay"),
                    autoplay = !(
                      void 0 === autoplayAttr ||
                      null === autoplayAttr ||
                      "false" === autoplayAttr
                    ),
                    isNative =
                      null !== media.rendererName &&
                      /(native|html5)/i.test(t.media.rendererName);
                  if (
                    (t.getElement(t.controls) && t.enableControls(),
                    t.getElement(t.container) &&
                      t
                        .getElement(t.container)
                        .querySelector(
                          "." + t.options.classPrefix + "overlay-play"
                        ) &&
                      (t
                        .getElement(t.container)
                        .querySelector(
                          "." + t.options.classPrefix + "overlay-play"
                        ).style.display = ""),
                    !t.created)
                  ) {
                    if (
                      ((t.created = !0),
                      (t.media = media),
                      (t.domNode = domNode),
                      !(
                        (_constants.IS_ANDROID &&
                          t.options.AndroidUseNativeControls) ||
                        (_constants.IS_IPAD &&
                          t.options.iPadUseNativeControls) ||
                        (_constants.IS_IPHONE &&
                          t.options.iPhoneUseNativeControls)
                      ))
                    ) {
                      if (
                        !t.isVideo &&
                        !t.options.features.length &&
                        !t.options.useDefaultControls
                      )
                        return (
                          autoplay && isNative && t.play(),
                          void (
                            t.options.success &&
                            ("string" == typeof t.options.success
                              ? _window2["default"][t.options.success](
                                  t.media,
                                  t.domNode,
                                  t
                                )
                              : t.options.success(t.media, t.domNode, t))
                          )
                        );
                      if (
                        ((t.featurePosition = {}),
                        t._setDefaultPlayer(),
                        t.buildposter(
                          t,
                          t.getElement(t.controls),
                          t.getElement(t.layers),
                          t.media
                        ),
                        t.buildkeyboard(
                          t,
                          t.getElement(t.controls),
                          t.getElement(t.layers),
                          t.media
                        ),
                        t.buildoverlays(
                          t,
                          t.getElement(t.controls),
                          t.getElement(t.layers),
                          t.media
                        ),
                        t.options.useDefaultControls)
                      ) {
                        var defaultControls = [
                          "playpause",
                          "current",
                          "progress",
                          "duration",
                          "tracks",
                          "volume",
                          "fullscreen",
                        ];
                        t.options.features = defaultControls.concat(
                          t.options.features.filter(function (item) {
                            return defaultControls.indexOf(item) === -1;
                          })
                        );
                      }
                      t.buildfeatures(
                        t,
                        t.getElement(t.controls),
                        t.getElement(t.layers),
                        t.media
                      );
                      var event = (0, _general.createEvent)(
                        "controlsready",
                        t.getElement(t.container)
                      );
                      t.getElement(t.container).dispatchEvent(event),
                        t.setPlayerSize(t.width, t.height),
                        t.setControlsSize(),
                        t.isVideo &&
                          ((t.clickToPlayPauseCallback = function () {
                            if (t.options.clickToPlayPause) {
                              var button = t
                                  .getElement(t.container)
                                  .querySelector(
                                    "." +
                                      t.options.classPrefix +
                                      "overlay-button"
                                  ),
                                pressed = button.getAttribute("aria-pressed");
                              t.paused && pressed
                                ? t.pause()
                                : t.paused
                                ? t.play()
                                : t.pause(),
                                button.setAttribute("aria-pressed", !pressed),
                                t.getElement(t.container).focus();
                            }
                          }),
                          t.createIframeLayer(),
                          t.media.addEventListener(
                            "click",
                            t.clickToPlayPauseCallback
                          ),
                          (!_constants.IS_ANDROID && !_constants.IS_IOS) ||
                          t.options.alwaysShowControls
                            ? (t
                                .getElement(t.container)
                                .addEventListener("mouseenter", function () {
                                  t.controlsEnabled &&
                                    (t.options.alwaysShowControls ||
                                      (t.killControlsTimer("enter"),
                                      t.showControls(),
                                      t.startControlsTimer(
                                        t.options.controlsTimeoutMouseEnter
                                      )));
                                }),
                              t
                                .getElement(t.container)
                                .addEventListener("mousemove", function () {
                                  t.controlsEnabled &&
                                    (t.controlsAreVisible || t.showControls(),
                                    t.options.alwaysShowControls ||
                                      t.startControlsTimer(
                                        t.options.controlsTimeoutMouseEnter
                                      ));
                                }),
                              t
                                .getElement(t.container)
                                .addEventListener("mouseleave", function () {
                                  t.controlsEnabled &&
                                    (t.paused ||
                                      t.options.alwaysShowControls ||
                                      t.startControlsTimer(
                                        t.options.controlsTimeoutMouseLeave
                                      ));
                                }))
                            : t.node.addEventListener(
                                "touchstart",
                                function () {
                                  t.controlsAreVisible
                                    ? t.hideControls(!1)
                                    : t.controlsEnabled && t.showControls(!1);
                                },
                                !!_constants.SUPPORT_PASSIVE_EVENT && {
                                  passive: !0,
                                }
                              ),
                          t.options.hideVideoControlsOnLoad &&
                            t.hideControls(!1),
                          t.options.enableAutosize &&
                            t.media.addEventListener(
                              "loadedmetadata",
                              function (e) {
                                var target =
                                  void 0 !== e
                                    ? e.detail.target || e.target
                                    : t.media;
                                t.options.videoHeight <= 0 &&
                                  !t.domNode.getAttribute("height") &&
                                  !t.domNode.style.height &&
                                  null !== target &&
                                  !isNaN(target.videoHeight) &&
                                  (t.setPlayerSize(
                                    target.videoWidth,
                                    target.videoHeight
                                  ),
                                  t.setControlsSize(),
                                  t.media.setSize(
                                    target.videoWidth,
                                    target.videoHeight
                                  ));
                              }
                            )),
                        t.media.addEventListener("play", function () {
                          t.hasFocus = !0;
                          for (var playerIndex in _mejs2["default"].players)
                            if (
                              _mejs2["default"].players.hasOwnProperty(
                                playerIndex
                              )
                            ) {
                              var p = _mejs2["default"].players[playerIndex];
                              p.id === t.id ||
                                !t.options.pauseOtherPlayers ||
                                p.paused ||
                                p.ended ||
                                (p.pause(), (p.hasFocus = !1));
                            }
                          _constants.IS_ANDROID ||
                            _constants.IS_IOS ||
                            t.options.alwaysShowControls ||
                            !t.isVideo ||
                            t.hideControls();
                        }),
                        t.media.addEventListener("ended", function () {
                          if (t.options.autoRewind)
                            try {
                              t.setCurrentTime(0),
                                setTimeout(function () {
                                  var loadingElement = t
                                    .getElement(t.container)
                                    .querySelector(
                                      "." +
                                        t.options.classPrefix +
                                        "overlay-loading"
                                    );
                                  loadingElement &&
                                    loadingElement.parentNode &&
                                    (loadingElement.parentNode.style.display =
                                      "none");
                                }, 20);
                            } catch (exp) {}
                          "function" == typeof t.media.renderer.stop
                            ? t.media.renderer.stop()
                            : t.pause(),
                            t.setProgressRail && t.setProgressRail(),
                            t.setCurrentRail && t.setCurrentRail(),
                            t.options.loop
                              ? t.play()
                              : !t.options.alwaysShowControls &&
                                t.controlsEnabled &&
                                t.showControls();
                        }),
                        t.media.addEventListener("loadedmetadata", function () {
                          (0, _time.calculateTimeFormat)(
                            t.getDuration(),
                            t.options,
                            t.options.framesPerSecond || 25
                          ),
                            t.updateDuration && t.updateDuration(),
                            t.updateCurrent && t.updateCurrent(),
                            t.isFullScreen ||
                              (t.setPlayerSize(t.width, t.height),
                              t.setControlsSize());
                        });
                      var duration = null;
                      t.media.addEventListener("timeupdate", function () {
                        isNaN(t.getDuration()) ||
                          duration === t.getDuration() ||
                          ((duration = t.getDuration()),
                          (0, _time.calculateTimeFormat)(
                            duration,
                            t.options,
                            t.options.framesPerSecond || 25
                          ),
                          t.updateDuration && t.updateDuration(),
                          t.updateCurrent && t.updateCurrent(),
                          t.setControlsSize());
                      }),
                        t
                          .getElement(t.container)
                          .addEventListener("click", function (e) {
                            dom.addClass(
                              e.currentTarget,
                              t.options.classPrefix +
                                "container-keyboard-inactive"
                            );
                          }),
                        t
                          .getElement(t.container)
                          .addEventListener("focusin", function (e) {
                            dom.removeClass(
                              e.currentTarget,
                              t.options.classPrefix +
                                "container-keyboard-inactive"
                            ),
                              !t.isVideo ||
                                _constants.IS_ANDROID ||
                                _constants.IS_IOS ||
                                !t.controlsEnabled ||
                                t.options.alwaysShowControls ||
                                (t.killControlsTimer("enter"),
                                t.showControls(),
                                t.startControlsTimer(
                                  t.options.controlsTimeoutMouseEnter
                                ));
                          }),
                        t
                          .getElement(t.container)
                          .addEventListener("focusout", function (e) {
                            setTimeout(function () {
                              e.relatedTarget &&
                                t.keyboardAction &&
                                !e.relatedTarget.closest(
                                  "." + t.options.classPrefix + "container"
                                ) &&
                                ((t.keyboardAction = !1),
                                !t.isVideo ||
                                  t.options.alwaysShowControls ||
                                  t.paused ||
                                  t.startControlsTimer(
                                    t.options.controlsTimeoutMouseLeave
                                  ));
                            }, 0);
                          }),
                        setTimeout(function () {
                          t.setPlayerSize(t.width, t.height),
                            t.setControlsSize();
                        }, 0),
                        (t.globalResizeCallback = function () {
                          t.isFullScreen ||
                            (_constants.HAS_TRUE_NATIVE_FULLSCREEN &&
                              _document2["default"].webkitIsFullScreen) ||
                            t.setPlayerSize(t.width, t.height),
                            t.setControlsSize();
                        }),
                        t.globalBind("resize", t.globalResizeCallback);
                    }
                    autoplay && isNative && t.play(),
                      t.options.success &&
                        ("string" == typeof t.options.success
                          ? _window2["default"][t.options.success](
                              t.media,
                              t.domNode,
                              t
                            )
                          : t.options.success(t.media, t.domNode, t));
                  }
                },
              },
              {
                key: "_handleError",
                value: function (e, media, node) {
                  var t = this,
                    play = t
                      .getElement(t.layers)
                      .querySelector(
                        "." + t.options.classPrefix + "overlay-play"
                      );
                  play && (play.style.display = "none"),
                    t.options.error && t.options.error(e, media, node),
                    t
                      .getElement(t.container)
                      .querySelector(
                        "." + t.options.classPrefix + "cannotplay"
                      ) &&
                      t
                        .getElement(t.container)
                        .querySelector(
                          "." + t.options.classPrefix + "cannotplay"
                        )
                        .remove();
                  var errorContainer =
                    _document2["default"].createElement("div");
                  (errorContainer.className =
                    t.options.classPrefix + "cannotplay"),
                    (errorContainer.style.width = "100%"),
                    (errorContainer.style.height = "100%");
                  var errorContent =
                      "function" == typeof t.options.customError
                        ? t.options.customError(t.media, t.media.originalNode)
                        : t.options.customError,
                    imgError = "";
                  if (!errorContent) {
                    var poster = t.media.originalNode.getAttribute("poster");
                    if (
                      (poster &&
                        (imgError =
                          '<img src="' +
                          poster +
                          '" alt="' +
                          _mejs2["default"].i18n.t("mejs.download-file") +
                          '">'),
                      e.message && (errorContent = "<p>" + e.message + "</p>"),
                      e.urls)
                    )
                      for (var i = 0, total = e.urls.length; i < total; i++) {
                        var url = e.urls[i];
                        errorContent +=
                          '<a href="' +
                          url.src +
                          '" data-type="' +
                          url.type +
                          '"><span>' +
                          _mejs2["default"].i18n.t("mejs.download-file") +
                          ": " +
                          url.src +
                          "</span></a>";
                      }
                  }
                  errorContent &&
                    t
                      .getElement(t.layers)
                      .querySelector(
                        "." + t.options.classPrefix + "overlay-error"
                      ) &&
                    ((errorContainer.innerHTML = errorContent),
                    (t
                      .getElement(t.layers)
                      .querySelector(
                        "." + t.options.classPrefix + "overlay-error"
                      ).innerHTML = "" + imgError + errorContainer.outerHTML),
                    (t
                      .getElement(t.layers)
                      .querySelector(
                        "." + t.options.classPrefix + "overlay-error"
                      ).parentNode.style.display = "block")),
                    t.controlsEnabled && t.disableControls();
                },
              },
              {
                key: "setPlayerSize",
                value: function (width, height) {
                  var t = this;
                  if (!t.options.setDimensions) return !1;
                  switch (
                    ("undefined" != typeof width && (t.width = width),
                    "undefined" != typeof height && (t.height = height),
                    t.options.stretching)
                  ) {
                    case "fill":
                      t.isVideo
                        ? t.setFillMode()
                        : t.setDimensions(t.width, t.height);
                      break;
                    case "responsive":
                      t.setResponsiveMode();
                      break;
                    case "none":
                      t.setDimensions(t.width, t.height);
                      break;
                    default:
                      t.hasFluidMode() === !0
                        ? t.setResponsiveMode()
                        : t.setDimensions(t.width, t.height);
                  }
                },
              },
              {
                key: "hasFluidMode",
                value: function () {
                  var t = this;
                  return (
                    t.height.toString().indexOf("%") !== -1 ||
                    (t.node &&
                      t.node.style.maxWidth &&
                      "none" !== t.node.style.maxWidth &&
                      t.node.style.maxWidth !== t.width) ||
                    (t.node &&
                      t.node.currentStyle &&
                      "100%" === t.node.currentStyle.maxWidth)
                  );
                },
              },
              {
                key: "setResponsiveMode",
                value: function () {
                  var t = this,
                    parent = (function () {
                      for (
                        var parentEl = void 0, el = t.getElement(t.container);
                        el;

                      ) {
                        try {
                          if (
                            _constants.IS_FIREFOX &&
                            "html" === el.tagName.toLowerCase() &&
                            _window2["default"].self !==
                              _window2["default"].top &&
                            null !== _window2["default"].frameElement
                          )
                            return _window2["default"].frameElement;
                          parentEl = el.parentElement;
                        } catch (e) {
                          parentEl = el.parentElement;
                        }
                        if (parentEl && dom.visible(parentEl)) return parentEl;
                        el = parentEl;
                      }
                      return null;
                    })(),
                    parentStyles = parent
                      ? getComputedStyle(parent, null)
                      : getComputedStyle(_document2["default"].body, null),
                    nativeWidth = (function () {
                      return t.isVideo
                        ? t.media.videoWidth && t.media.videoWidth > 0
                          ? t.media.videoWidth
                          : t.node.getAttribute("width")
                          ? t.node.getAttribute("width")
                          : t.options.defaultVideoWidth
                        : t.options.defaultAudioWidth;
                    })(),
                    nativeHeight = (function () {
                      return t.isVideo
                        ? t.media.videoHeight && t.media.videoHeight > 0
                          ? t.media.videoHeight
                          : t.node.getAttribute("height")
                          ? t.node.getAttribute("height")
                          : t.options.defaultVideoHeight
                        : t.options.defaultAudioHeight;
                    })(),
                    aspectRatio = (function () {
                      var ratio = 1;
                      return t.isVideo
                        ? ((ratio =
                            t.media.videoWidth &&
                            t.media.videoWidth > 0 &&
                            t.media.videoHeight &&
                            t.media.videoHeight > 0
                              ? t.height >= t.width
                                ? t.media.videoWidth / t.media.videoHeight
                                : t.media.videoHeight / t.media.videoWidth
                              : t.initialAspectRatio),
                          (isNaN(ratio) || ratio < 0.01 || ratio > 100) &&
                            (ratio = 1),
                          ratio)
                        : ratio;
                    })(),
                    parentHeight = parseFloat(parentStyles.height),
                    newHeight = void 0,
                    parentWidth = parseFloat(parentStyles.width);
                  if (
                    ((newHeight = t.isVideo
                      ? "100%" === t.height
                        ? parseFloat(
                            (parentWidth * nativeHeight) / nativeWidth,
                            10
                          )
                        : t.height >= t.width
                        ? parseFloat(parentWidth / aspectRatio, 10)
                        : parseFloat(parentWidth * aspectRatio, 10)
                      : nativeHeight),
                    isNaN(newHeight) && (newHeight = parentHeight),
                    t.getElement(t.container).parentNode.length > 0 &&
                      "body" ===
                        t
                          .getElement(t.container)
                          .parentNode.tagName.toLowerCase() &&
                      ((parentWidth =
                        _window2["default"].innerWidth ||
                        _document2["default"].documentElement.clientWidth ||
                        _document2["default"].body.clientWidth),
                      (newHeight =
                        _window2["default"].innerHeight ||
                        _document2["default"].documentElement.clientHeight ||
                        _document2["default"].body.clientHeight)),
                    newHeight && parentWidth)
                  ) {
                    (t.getElement(t.container).style.width =
                      parentWidth + "px"),
                      (t.getElement(t.container).style.height =
                        newHeight + "px"),
                      (t.node.style.width = "100%"),
                      (t.node.style.height = "100%"),
                      t.isVideo &&
                        t.media.setSize &&
                        t.media.setSize(parentWidth, newHeight);
                    for (
                      var layerChildren = t.getElement(t.layers).children,
                        i = 0,
                        total = layerChildren.length;
                      i < total;
                      i++
                    )
                      (layerChildren[i].style.width = "100%"),
                        (layerChildren[i].style.height = "100%");
                  }
                },
              },
              {
                key: "setFillMode",
                value: function () {
                  var t = this,
                    isIframe =
                      _window2["default"].self !== _window2["default"].top &&
                      null !== _window2["default"].frameElement,
                    parent = (function () {
                      for (
                        var parentEl = void 0, el = t.getElement(t.container);
                        el;

                      ) {
                        try {
                          if (
                            _constants.IS_FIREFOX &&
                            "html" === el.tagName.toLowerCase() &&
                            _window2["default"].self !==
                              _window2["default"].top &&
                            null !== _window2["default"].frameElement
                          )
                            return _window2["default"].frameElement;
                          parentEl = el.parentElement;
                        } catch (e) {
                          parentEl = el.parentElement;
                        }
                        if (parentEl && dom.visible(parentEl)) return parentEl;
                        el = parentEl;
                      }
                      return null;
                    })(),
                    parentStyles = parent
                      ? getComputedStyle(parent, null)
                      : getComputedStyle(_document2["default"].body, null);
                  "none" !== t.node.style.height &&
                    t.node.style.height !== t.height &&
                    (t.node.style.height = "auto"),
                    "none" !== t.node.style.maxWidth &&
                      t.node.style.maxWidth !== t.width &&
                      (t.node.style.maxWidth = "none"),
                    "none" !== t.node.style.maxHeight &&
                      t.node.style.maxHeight !== t.height &&
                      (t.node.style.maxHeight = "none"),
                    t.node.currentStyle &&
                      ("100%" === t.node.currentStyle.height &&
                        (t.node.currentStyle.height = "auto"),
                      "100%" === t.node.currentStyle.maxWidth &&
                        (t.node.currentStyle.maxWidth = "none"),
                      "100%" === t.node.currentStyle.maxHeight &&
                        (t.node.currentStyle.maxHeight = "none")),
                    isIframe ||
                      parseFloat(parentStyles.width) ||
                      (parent.style.width = t.media.offsetWidth + "px"),
                    isIframe ||
                      parseFloat(parentStyles.height) ||
                      (parent.style.height = t.media.offsetHeight + "px"),
                    (parentStyles = getComputedStyle(parent));
                  var parentWidth = parseFloat(parentStyles.width),
                    parentHeight = parseFloat(parentStyles.height);
                  t.setDimensions("100%", "100%");
                  var poster = t
                    .getElement(t.container)
                    .querySelector("." + t.options.classPrefix + "poster>img");
                  poster && (poster.style.display = "");
                  for (
                    var targetElement = t
                        .getElement(t.container)
                        .querySelectorAll("object, embed, iframe, video"),
                      initHeight = t.height,
                      initWidth = t.width,
                      scaleX1 = parentWidth,
                      scaleY1 = (initHeight * parentWidth) / initWidth,
                      scaleX2 = (initWidth * parentHeight) / initHeight,
                      scaleY2 = parentHeight,
                      bScaleOnWidth = scaleX2 > parentWidth == !1,
                      finalWidth = bScaleOnWidth
                        ? Math.floor(scaleX1)
                        : Math.floor(scaleX2),
                      finalHeight = bScaleOnWidth
                        ? Math.floor(scaleY1)
                        : Math.floor(scaleY2),
                      width = bScaleOnWidth
                        ? parentWidth + "px"
                        : finalWidth + "px",
                      height = bScaleOnWidth
                        ? finalHeight + "px"
                        : parentHeight + "px",
                      i = 0,
                      total = targetElement.length;
                    i < total;
                    i++
                  )
                    (targetElement[i].style.height = height),
                      (targetElement[i].style.width = width),
                      t.media.setSize && t.media.setSize(width, height),
                      (targetElement[i].style.marginLeft =
                        Math.floor((parentWidth - finalWidth) / 2) + "px"),
                      (targetElement[i].style.marginTop = 0);
                },
              },
              {
                key: "setDimensions",
                value: function (width, height) {
                  var t = this;
                  (width =
                    (0, _general.isString)(width) && width.indexOf("%") > -1
                      ? width
                      : parseFloat(width) + "px"),
                    (height =
                      (0, _general.isString)(height) && height.indexOf("%") > -1
                        ? height
                        : parseFloat(height) + "px"),
                    (t.getElement(t.container).style.width = width),
                    (t.getElement(t.container).style.height = height);
                  for (
                    var layers = t.getElement(t.layers).children,
                      i = 0,
                      total = layers.length;
                    i < total;
                    i++
                  )
                    (layers[i].style.width = width),
                      (layers[i].style.height = height);
                },
              },
              {
                key: "setControlsSize",
                value: function () {
                  var t = this;
                  if (dom.visible(t.getElement(t.container)))
                    if (t.rail && dom.visible(t.rail)) {
                      for (
                        var totalStyles = t.total
                            ? getComputedStyle(t.total, null)
                            : null,
                          totalMargin = totalStyles
                            ? parseFloat(totalStyles.marginLeft) +
                              parseFloat(totalStyles.marginRight)
                            : 0,
                          railStyles = getComputedStyle(t.rail),
                          railMargin =
                            parseFloat(railStyles.marginLeft) +
                            parseFloat(railStyles.marginRight),
                          siblingsWidth = 0,
                          siblings = dom.siblings(t.rail, function (el) {
                            return el !== t.rail;
                          }),
                          total = siblings.length,
                          i = 0;
                        i < total;
                        i++
                      )
                        siblingsWidth += siblings[i].offsetWidth;
                      (siblingsWidth +=
                        totalMargin +
                        (0 === totalMargin ? 2 * railMargin : railMargin) +
                        1),
                        (t.getElement(t.container).style.minWidth =
                          siblingsWidth + "px");
                      var event = (0, _general.createEvent)(
                        "controlsresize",
                        t.getElement(t.container)
                      );
                      t.getElement(t.container).dispatchEvent(event);
                    } else {
                      for (
                        var children = t.getElement(t.controls).children,
                          minWidth = 0,
                          _i = 0,
                          _total = children.length;
                        _i < _total;
                        _i++
                      )
                        minWidth += children[_i].offsetWidth;
                      t.getElement(t.container).style.minWidth =
                        minWidth + "px";
                    }
                },
              },
              {
                key: "addControlElement",
                value: function (element, key) {
                  var t = this;
                  if (void 0 !== t.featurePosition[key]) {
                    var child = t.getElement(t.controls).children[
                      t.featurePosition[key] - 1
                    ];
                    child.parentNode.insertBefore(element, child.nextSibling);
                  } else {
                    t.getElement(t.controls).appendChild(element);
                    for (
                      var children = t.getElement(t.controls).children,
                        i = 0,
                        total = children.length;
                      i < total;
                      i++
                    )
                      if (element === children[i]) {
                        t.featurePosition[key] = i;
                        break;
                      }
                  }
                },
              },
              {
                key: "createIframeLayer",
                value: function () {
                  var t = this;
                  if (
                    t.isVideo &&
                    null !== t.media.rendererName &&
                    t.media.rendererName.indexOf("iframe") > -1 &&
                    !_document2["default"].getElementById(
                      t.media.id + "-iframe-overlay"
                    )
                  ) {
                    var layer = _document2["default"].createElement("div"),
                      target = _document2["default"].getElementById(
                        t.media.id + "_" + t.media.rendererName
                      );
                    (layer.id = t.media.id + "-iframe-overlay"),
                      (layer.className =
                        t.options.classPrefix + "iframe-overlay"),
                      layer.addEventListener("click", function (e) {
                        t.options.clickToPlayPause &&
                          (t.paused ? t.play() : t.pause(),
                          e.preventDefault(),
                          e.stopPropagation());
                      }),
                      target.parentNode.insertBefore(layer, target);
                  }
                },
              },
              {
                key: "resetSize",
                value: function () {
                  var t = this;
                  setTimeout(function () {
                    t.setPlayerSize(t.width, t.height), t.setControlsSize();
                  }, 50);
                },
              },
              {
                key: "setPoster",
                value: function (url) {
                  var t = this;
                  if (t.getElement(t.container)) {
                    var posterDiv = t
                      .getElement(t.container)
                      .querySelector("." + t.options.classPrefix + "poster");
                    posterDiv ||
                      ((posterDiv = _document2["default"].createElement("div")),
                      (posterDiv.className =
                        t.options.classPrefix +
                        "poster " +
                        t.options.classPrefix +
                        "layer"),
                      t.getElement(t.layers).appendChild(posterDiv));
                    var posterImg = posterDiv.querySelector("img");
                    !posterImg &&
                      url &&
                      ((posterImg = _document2["default"].createElement("img")),
                      (posterImg.className =
                        t.options.classPrefix + "poster-img"),
                      (posterImg.width = "100%"),
                      (posterImg.height = "100%"),
                      (posterDiv.style.display = ""),
                      posterDiv.appendChild(posterImg)),
                      url
                        ? (posterImg.setAttribute("src", url),
                          (posterDiv.style.backgroundImage =
                            'url("' + url + '")'),
                          (posterDiv.style.display = ""))
                        : posterImg
                        ? ((posterDiv.style.backgroundImage = "none"),
                          (posterDiv.style.display = "none"),
                          posterImg.remove())
                        : (posterDiv.style.display = "none");
                  } else
                    ((_constants.IS_IPAD && t.options.iPadUseNativeControls) ||
                      (_constants.IS_IPHONE &&
                        t.options.iPhoneUseNativeControls) ||
                      (_constants.IS_ANDROID &&
                        t.options.AndroidUseNativeControls)) &&
                      (t.media.originalNode.poster = url);
                },
              },
              {
                key: "changeSkin",
                value: function (className) {
                  var t = this;
                  (t.getElement(t.container).className =
                    t.options.classPrefix + "container " + className),
                    t.setPlayerSize(t.width, t.height),
                    t.setControlsSize();
                },
              },
              {
                key: "globalBind",
                value: function (events, callback) {
                  var t = this,
                    doc = t.node ? t.node.ownerDocument : _document2["default"];
                  if (
                    ((events = (0, _general.splitEvents)(events, t.id)),
                    events.d)
                  )
                    for (
                      var eventList = events.d.split(" "),
                        i = 0,
                        total = eventList.length;
                      i < total;
                      i++
                    )
                      eventList[i].split(".").reduce(function (part, e) {
                        return doc.addEventListener(e, callback, !1), e;
                      }, "");
                  if (events.w)
                    for (
                      var _eventList = events.w.split(" "),
                        _i2 = 0,
                        _total2 = _eventList.length;
                      _i2 < _total2;
                      _i2++
                    )
                      _eventList[_i2].split(".").reduce(function (part, e) {
                        return (
                          _window2["default"].addEventListener(e, callback, !1),
                          e
                        );
                      }, "");
                },
              },
              {
                key: "globalUnbind",
                value: function (events, callback) {
                  var t = this,
                    doc = t.node ? t.node.ownerDocument : _document2["default"];
                  if (
                    ((events = (0, _general.splitEvents)(events, t.id)),
                    events.d)
                  )
                    for (
                      var eventList = events.d.split(" "),
                        i = 0,
                        total = eventList.length;
                      i < total;
                      i++
                    )
                      eventList[i].split(".").reduce(function (part, e) {
                        return doc.removeEventListener(e, callback, !1), e;
                      }, "");
                  if (events.w)
                    for (
                      var _eventList2 = events.w.split(" "),
                        _i3 = 0,
                        _total3 = _eventList2.length;
                      _i3 < _total3;
                      _i3++
                    )
                      _eventList2[_i3].split(".").reduce(function (part, e) {
                        return (
                          _window2["default"].removeEventListener(
                            e,
                            callback,
                            !1
                          ),
                          e
                        );
                      }, "");
                },
              },
              {
                key: "buildfeatures",
                value: function (player, controls, layers, media) {
                  for (
                    var t = this, i = 0, total = t.options.features.length;
                    i < total;
                    i++
                  ) {
                    var feature = t.options.features[i];
                    if (t["build" + feature])
                      try {
                        t["build" + feature](player, controls, layers, media);
                      } catch (e) {
                        console.error("error building " + feature, e);
                      }
                  }
                },
              },
              {
                key: "buildposter",
                value: function (player, controls, layers, media) {
                  var t = this,
                    poster = _document2["default"].createElement("div");
                  (poster.className =
                    t.options.classPrefix +
                    "poster " +
                    t.options.classPrefix +
                    "layer"),
                    layers.appendChild(poster);
                  var posterUrl = media.originalNode.getAttribute("poster");
                  "" !== player.options.poster &&
                    (posterUrl &&
                      _constants.IS_IOS &&
                      media.originalNode.removeAttribute("poster"),
                    (posterUrl = player.options.poster)),
                    posterUrl
                      ? t.setPoster(posterUrl)
                      : null !== t.media.renderer &&
                        "function" == typeof t.media.renderer.getPosterUrl
                      ? t.setPoster(t.media.renderer.getPosterUrl())
                      : (poster.style.display = "none"),
                    media.addEventListener("play", function () {
                      poster.style.display = "none";
                    }),
                    media.addEventListener("playing", function () {
                      poster.style.display = "none";
                    }),
                    player.options.showPosterWhenEnded &&
                      player.options.autoRewind &&
                      media.addEventListener("ended", function () {
                        poster.style.display = "";
                      }),
                    media.addEventListener("error", function () {
                      poster.style.display = "none";
                    }),
                    player.options.showPosterWhenPaused &&
                      media.addEventListener("pause", function () {
                        player.ended || (poster.style.display = "");
                      });
                },
              },
              {
                key: "buildoverlays",
                value: function (player, controls, layers, media) {
                  if (player.isVideo) {
                    var t = this,
                      loading = _document2["default"].createElement("div"),
                      error = _document2["default"].createElement("div"),
                      bigPlay = _document2["default"].createElement("div");
                    (loading.style.display = "none"),
                      (loading.className =
                        t.options.classPrefix +
                        "overlay " +
                        t.options.classPrefix +
                        "layer"),
                      (loading.innerHTML =
                        '<div class="' +
                        t.options.classPrefix +
                        'overlay-loading">' +
                        ('<span class="' +
                          t.options.classPrefix +
                          'overlay-loading-bg-img"></span>') +
                        "</div>"),
                      layers.appendChild(loading),
                      (error.style.display = "none"),
                      (error.className =
                        t.options.classPrefix +
                        "overlay " +
                        t.options.classPrefix +
                        "layer"),
                      (error.innerHTML =
                        '<div class="' +
                        t.options.classPrefix +
                        'overlay-error"></div>'),
                      layers.appendChild(error),
                      (bigPlay.className =
                        t.options.classPrefix +
                        "overlay " +
                        t.options.classPrefix +
                        "layer " +
                        t.options.classPrefix +
                        "overlay-play"),
                      (bigPlay.innerHTML =
                        '<div class="' +
                        t.options.classPrefix +
                        'overlay-button" role="button" tabindex="0" ' +
                        ('aria-label="' +
                          _i18n2["default"].t("mejs.play") +
                          '" aria-pressed="false"></div>')),
                      bigPlay.addEventListener("click", function () {
                        if (t.options.clickToPlayPause) {
                          var button = t
                              .getElement(t.container)
                              .querySelector(
                                "." + t.options.classPrefix + "overlay-button"
                              ),
                            pressed = button.getAttribute("aria-pressed");
                          t.paused ? t.play() : t.pause(),
                            button.setAttribute("aria-pressed", !!pressed),
                            t.getElement(t.container).focus();
                        }
                      }),
                      bigPlay.addEventListener("keydown", function (e) {
                        var keyPressed = e.keyCode || e.which || 0;
                        if (
                          13 === keyPressed ||
                          (_constants.IS_FIREFOX && 32 === keyPressed)
                        ) {
                          var event = (0, _general.createEvent)(
                            "click",
                            bigPlay
                          );
                          return bigPlay.dispatchEvent(event), !1;
                        }
                      }),
                      layers.appendChild(bigPlay),
                      null !== t.media.rendererName &&
                        ((/(youtube|facebook)/i.test(t.media.rendererName) &&
                          !(
                            t.media.originalNode.getAttribute("poster") ||
                            player.options.poster ||
                            ("function" ==
                              typeof t.media.renderer.getPosterUrl &&
                              t.media.renderer.getPosterUrl())
                          )) ||
                          _constants.IS_STOCK_ANDROID ||
                          t.media.originalNode.getAttribute("autoplay")) &&
                        (bigPlay.style.display = "none");
                    var hasError = !1;
                    media.addEventListener("play", function () {
                      (bigPlay.style.display = "none"),
                        (loading.style.display = "none"),
                        (error.style.display = "none"),
                        (hasError = !1);
                    }),
                      media.addEventListener("playing", function () {
                        (bigPlay.style.display = "none"),
                          (loading.style.display = "none"),
                          (error.style.display = "none"),
                          (hasError = !1);
                      }),
                      media.addEventListener("seeking", function () {
                        (bigPlay.style.display = "none"),
                          (loading.style.display = ""),
                          (hasError = !1);
                      }),
                      media.addEventListener("seeked", function () {
                        (bigPlay.style.display =
                          t.paused && !_constants.IS_STOCK_ANDROID
                            ? ""
                            : "none"),
                          (loading.style.display = "none"),
                          (hasError = !1);
                      }),
                      media.addEventListener("pause", function () {
                        (loading.style.display = "none"),
                          _constants.IS_STOCK_ANDROID ||
                            hasError ||
                            (bigPlay.style.display = ""),
                          (hasError = !1);
                      }),
                      media.addEventListener("waiting", function () {
                        (loading.style.display = ""), (hasError = !1);
                      }),
                      media.addEventListener("loadeddata", function () {
                        (loading.style.display = ""),
                          _constants.IS_ANDROID &&
                            (media.canplayTimeout = setTimeout(function () {
                              if (_document2["default"].createEvent) {
                                var evt =
                                  _document2["default"].createEvent(
                                    "HTMLEvents"
                                  );
                                return (
                                  evt.initEvent("canplay", !0, !0),
                                  media.dispatchEvent(evt)
                                );
                              }
                            }, 300)),
                          (hasError = !1);
                      }),
                      media.addEventListener("canplay", function () {
                        (loading.style.display = "none"),
                          clearTimeout(media.canplayTimeout),
                          (hasError = !1);
                      }),
                      media.addEventListener("error", function (e) {
                        t._handleError(e, t.media, t.node),
                          (loading.style.display = "none"),
                          (bigPlay.style.display = "none"),
                          (hasError = !0);
                      }),
                      media.addEventListener("loadedmetadata", function () {
                        t.controlsEnabled || t.enableControls();
                      }),
                      media.addEventListener("keydown", function (e) {
                        t.onkeydown(player, media, e), (hasError = !1);
                      });
                  }
                },
              },
              {
                key: "buildkeyboard",
                value: function (player, controls, layers, media) {
                  var t = this;
                  t
                    .getElement(t.container)
                    .addEventListener("keydown", function () {
                      t.keyboardAction = !0;
                    }),
                    (t.globalKeydownCallback = function (event) {
                      var container = _document2[
                          "default"
                        ].activeElement.closest(
                          "." + t.options.classPrefix + "container"
                        ),
                        target = t.media.closest(
                          "." + t.options.classPrefix + "container"
                        );
                      return (
                        (t.hasFocus = !(
                          !container ||
                          !target ||
                          container.id !== target.id
                        )),
                        t.onkeydown(player, media, event)
                      );
                    }),
                    (t.globalClickCallback = function (event) {
                      t.hasFocus = !!event.target.closest(
                        "." + t.options.classPrefix + "container"
                      );
                    }),
                    t.globalBind("keydown", t.globalKeydownCallback),
                    t.globalBind("click", t.globalClickCallback);
                },
              },
              {
                key: "onkeydown",
                value: function (player, media, e) {
                  if (player.hasFocus && player.options.enableKeyboard)
                    for (
                      var i = 0, total = player.options.keyActions.length;
                      i < total;
                      i++
                    )
                      for (
                        var keyAction = player.options.keyActions[i],
                          j = 0,
                          jl = keyAction.keys.length;
                        j < jl;
                        j++
                      )
                        if (e.keyCode === keyAction.keys[j])
                          return (
                            keyAction.action(player, media, e.keyCode, e),
                            e.preventDefault(),
                            void e.stopPropagation()
                          );
                  return !0;
                },
              },
              {
                key: "play",
                value: function () {
                  this.proxy.play();
                },
              },
              {
                key: "pause",
                value: function () {
                  this.proxy.pause();
                },
              },
              {
                key: "load",
                value: function () {
                  this.proxy.load();
                },
              },
              {
                key: "setCurrentTime",
                value: function (time) {
                  this.proxy.setCurrentTime(time);
                },
              },
              {
                key: "getCurrentTime",
                value: function () {
                  return this.proxy.currentTime;
                },
              },
              {
                key: "getDuration",
                value: function () {
                  return this.proxy.duration;
                },
              },
              {
                key: "setVolume",
                value: function (volume) {
                  this.proxy.volume = volume;
                },
              },
              {
                key: "getVolume",
                value: function () {
                  return this.proxy.getVolume();
                },
              },
              {
                key: "setMuted",
                value: function (value) {
                  this.proxy.setMuted(value);
                },
              },
              {
                key: "setSrc",
                value: function (src) {
                  this.controlsEnabled || this.enableControls(),
                    this.proxy.setSrc(src);
                },
              },
              {
                key: "getSrc",
                value: function () {
                  return this.proxy.getSrc();
                },
              },
              {
                key: "canPlayType",
                value: function (type) {
                  return this.proxy.canPlayType(type);
                },
              },
              {
                key: "remove",
                value: function () {
                  var t = this,
                    rendererName = t.media.rendererName,
                    src = t.media.originalNode.src;
                  for (var featureIndex in t.options.features) {
                    var feature = t.options.features[featureIndex];
                    if (t["clean" + feature])
                      try {
                        t["clean" + feature](
                          t,
                          t.getElement(t.layers),
                          t.getElement(t.controls),
                          t.media
                        );
                      } catch (e) {
                        console.error("error cleaning " + feature, e);
                      }
                  }
                  var nativeWidth = t.node.getAttribute("width"),
                    nativeHeight = t.node.getAttribute("height");
                  if (
                    (nativeWidth
                      ? nativeWidth.indexOf("%") === -1 && (nativeWidth += "px")
                      : (nativeWidth = "auto"),
                    nativeHeight
                      ? nativeHeight.indexOf("%") === -1 &&
                        (nativeHeight += "px")
                      : (nativeHeight = "auto"),
                    (t.node.style.width = nativeWidth),
                    (t.node.style.height = nativeHeight),
                    t.setPlayerSize(0, 0),
                    t.isDynamic
                      ? t
                          .getElement(t.container)
                          .parentNode.insertBefore(
                            t.node,
                            t.getElement(t.container)
                          )
                      : !(function () {
                          t.node.setAttribute("controls", !0),
                            t.node.setAttribute(
                              "id",
                              t.node
                                .getAttribute("id")
                                .replace("_" + rendererName, "")
                                .replace("_from_mejs", "")
                            );
                          var poster = t
                            .getElement(t.container)
                            .querySelector(
                              "." + t.options.classPrefix + "poster>img"
                            );
                          if (
                            (poster &&
                              t.node.setAttribute("poster", poster.src),
                            delete t.node.autoplay,
                            "" !==
                              t.media.canPlayType(
                                (0, _media.getTypeFromFile)(src)
                              ) && t.node.setAttribute("src", src),
                            ~rendererName.indexOf("iframe"))
                          ) {
                            var layer = _document2["default"].getElementById(
                              t.media.id + "-iframe-overlay"
                            );
                            layer.remove();
                          }
                          var node = t.node.cloneNode();
                          if (
                            ((node.style.display = ""),
                            t
                              .getElement(t.container)
                              .parentNode.insertBefore(
                                node,
                                t.getElement(t.container)
                              ),
                            t.node.remove(),
                            t.mediaFiles)
                          )
                            for (
                              var i = 0, total = t.mediaFiles.length;
                              i < total;
                              i++
                            ) {
                              var source =
                                _document2["default"].createElement("source");
                              source.setAttribute("src", t.mediaFiles[i].src),
                                source.setAttribute(
                                  "type",
                                  t.mediaFiles[i].type
                                ),
                                node.appendChild(source);
                            }
                          if (t.trackFiles)
                            for (
                              var _loop3 = function (_i4, _total4) {
                                  var track = t.trackFiles[_i4],
                                    newTrack =
                                      _document2["default"].createElement(
                                        "track"
                                      );
                                  (newTrack.kind = track.kind),
                                    (newTrack.label = track.label),
                                    (newTrack.srclang = track.srclang),
                                    (newTrack.src = track.src),
                                    node.appendChild(newTrack),
                                    newTrack.addEventListener(
                                      "load",
                                      function () {
                                        (this.mode = "showing"),
                                          (node.textTracks[_i4].mode =
                                            "showing");
                                      }
                                    );
                                },
                                _i4 = 0,
                                _total4 = t.trackFiles.length;
                              _i4 < _total4;
                              _i4++
                            )
                              _loop3(_i4, _total4);
                          delete t.node,
                            delete t.mediaFiles,
                            delete t.trackFiles;
                        })(),
                    "function" == typeof t.media.renderer.destroy &&
                      t.media.renderer.destroy(),
                    delete _mejs2["default"].players[t.id],
                    "object" === _typeof(t.getElement(t.container)))
                  ) {
                    var offscreen = t
                      .getElement(t.container)
                      .parentNode.querySelector(
                        "." + t.options.classPrefix + "offscreen"
                      );
                    offscreen.remove(), t.getElement(t.container).remove();
                  }
                  t.globalUnbind("resize", t.globalResizeCallback),
                    t.globalUnbind("keydown", t.globalKeydownCallback),
                    t.globalUnbind("click", t.globalClickCallback),
                    delete t.media.player;
                },
              },
              {
                key: "paused",
                get: function () {
                  return this.proxy.paused;
                },
              },
              {
                key: "muted",
                get: function () {
                  return this.proxy.muted;
                },
                set: function (muted) {
                  this.setMuted(muted);
                },
              },
              {
                key: "ended",
                get: function () {
                  return this.proxy.ended;
                },
              },
              {
                key: "readyState",
                get: function () {
                  return this.proxy.readyState;
                },
              },
              {
                key: "currentTime",
                set: function (time) {
                  this.setCurrentTime(time);
                },
                get: function () {
                  return this.getCurrentTime();
                },
              },
              {
                key: "duration",
                get: function () {
                  return this.getDuration();
                },
              },
              {
                key: "volume",
                set: function (volume) {
                  this.setVolume(volume);
                },
                get: function () {
                  return this.getVolume();
                },
              },
              {
                key: "src",
                set: function (src) {
                  this.setSrc(src);
                },
                get: function () {
                  return this.getSrc();
                },
              },
            ]),
            MediaElementPlayer
          );
        })();
        (_window2["default"].MediaElementPlayer = MediaElementPlayer),
          (_mejs2["default"].MediaElementPlayer = MediaElementPlayer),
          (exports["default"] = MediaElementPlayer);
      },
      {
        17: 17,
        2: 2,
        25: 25,
        26: 26,
        27: 27,
        28: 28,
        3: 3,
        30: 30,
        5: 5,
        6: 6,
        7: 7,
      },
    ],
    17: [
      function (_dereq_, module, exports) {
        "use strict";
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function _classCallCheck(instance, Constructor) {
          if (!(instance instanceof Constructor))
            throw new TypeError("Cannot call a class as a function");
        }
        Object.defineProperty(exports, "__esModule", { value: !0 });
        var _createClass = (function () {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                (descriptor.enumerable = descriptor.enumerable || !1),
                  (descriptor.configurable = !0),
                  "value" in descriptor && (descriptor.writable = !0),
                  Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function (Constructor, protoProps, staticProps) {
              return (
                protoProps &&
                  defineProperties(Constructor.prototype, protoProps),
                staticProps && defineProperties(Constructor, staticProps),
                Constructor
              );
            };
          })(),
          _window = _dereq_(3),
          _window2 = _interopRequireDefault(_window),
          DefaultPlayer = (function () {
            function DefaultPlayer(player) {
              return (
                _classCallCheck(this, DefaultPlayer),
                (this.media = player.media),
                (this.isVideo = player.isVideo),
                (this.classPrefix = player.options.classPrefix),
                (this.createIframeLayer = function () {
                  return player.createIframeLayer();
                }),
                (this.setPoster = function (url) {
                  return player.setPoster(url);
                }),
                this
              );
            }
            return (
              _createClass(DefaultPlayer, [
                {
                  key: "play",
                  value: function () {
                    this.media.play();
                  },
                },
                {
                  key: "pause",
                  value: function () {
                    this.media.pause();
                  },
                },
                {
                  key: "load",
                  value: function () {
                    var t = this;
                    t.isLoaded || t.media.load(), (t.isLoaded = !0);
                  },
                },
                {
                  key: "setCurrentTime",
                  value: function (time) {
                    this.media.setCurrentTime(time);
                  },
                },
                {
                  key: "getCurrentTime",
                  value: function () {
                    return this.media.currentTime;
                  },
                },
                {
                  key: "getDuration",
                  value: function () {
                    return this.media.getDuration();
                  },
                },
                {
                  key: "setVolume",
                  value: function (volume) {
                    this.media.setVolume(volume);
                  },
                },
                {
                  key: "getVolume",
                  value: function () {
                    return this.media.getVolume();
                  },
                },
                {
                  key: "setMuted",
                  value: function (value) {
                    this.media.setMuted(value);
                  },
                },
                {
                  key: "setSrc",
                  value: function (src) {
                    var t = this,
                      layer = document.getElementById(
                        t.media.id + "-iframe-overlay"
                      );
                    layer && layer.remove(),
                      t.media.setSrc(src),
                      t.createIframeLayer(),
                      null !== t.media.renderer &&
                        "function" == typeof t.media.renderer.getPosterUrl &&
                        t.setPoster(t.media.renderer.getPosterUrl());
                  },
                },
                {
                  key: "getSrc",
                  value: function () {
                    return this.media.getSrc();
                  },
                },
                {
                  key: "canPlayType",
                  value: function (type) {
                    return this.media.canPlayType(type);
                  },
                },
                {
                  key: "paused",
                  get: function () {
                    return this.media.paused;
                  },
                },
                {
                  key: "muted",
                  set: function (muted) {
                    this.setMuted(muted);
                  },
                  get: function () {
                    return this.media.muted;
                  },
                },
                {
                  key: "ended",
                  get: function () {
                    return this.media.ended;
                  },
                },
                {
                  key: "readyState",
                  get: function () {
                    return this.media.readyState;
                  },
                },
                {
                  key: "currentTime",
                  set: function (time) {
                    this.setCurrentTime(time);
                  },
                  get: function () {
                    return this.getCurrentTime();
                  },
                },
                {
                  key: "duration",
                  get: function () {
                    return this.getDuration();
                  },
                },
                {
                  key: "volume",
                  set: function (volume) {
                    this.setVolume(volume);
                  },
                  get: function () {
                    return this.getVolume();
                  },
                },
                {
                  key: "src",
                  set: function (src) {
                    this.setSrc(src);
                  },
                  get: function () {
                    return this.getSrc();
                  },
                },
              ]),
              DefaultPlayer
            );
          })();
        (exports["default"] = DefaultPlayer),
          (_window2["default"].DefaultPlayer = DefaultPlayer);
      },
      { 3: 3 },
    ],
    18: [
      function (_dereq_, module, exports) {
        "use strict";
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var _window = _dereq_(3),
          _window2 = _interopRequireDefault(_window),
          _mejs = _dereq_(7),
          _mejs2 = _interopRequireDefault(_mejs),
          _player = _dereq_(16),
          _player2 = _interopRequireDefault(_player);
        "undefined" != typeof jQuery
          ? (_mejs2["default"].$ =
              _window2["default"].jQuery =
              _window2["default"].$ =
                jQuery)
          : "undefined" != typeof Zepto
          ? (_mejs2["default"].$ =
              _window2["default"].Zepto =
              _window2["default"].$ =
                Zepto)
          : "undefined" != typeof ender &&
            (_mejs2["default"].$ =
              _window2["default"].ender =
              _window2["default"].$ =
                ender),
          (function ($) {
            "undefined" != typeof $ &&
              (($.fn.mediaelementplayer = function (options) {
                return (
                  options === !1
                    ? this.each(function () {
                        var player = $(this).data("mediaelementplayer");
                        player && player.remove(),
                          $(this).removeData("mediaelementplayer");
                      })
                    : this.each(function () {
                        $(this).data(
                          "mediaelementplayer",
                          new _player2["default"](this, options)
                        );
                      }),
                  this
                );
              }),
              $(document).ready(function () {
                $(
                  "." + _mejs2["default"].MepDefaults.classPrefix + "player"
                ).mediaelementplayer();
              }));
          })(_mejs2["default"].$);
      },
      { 16: 16, 3: 3, 7: 7 },
    ],
    19: [
      function (_dereq_, module, exports) {
        "use strict";
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var _typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    "function" == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? "symbol"
                    : typeof obj;
                },
          _window = _dereq_(3),
          _window2 = _interopRequireDefault(_window),
          _mejs = _dereq_(7),
          _mejs2 = _interopRequireDefault(_mejs),
          _renderer = _dereq_(8),
          _general = _dereq_(27),
          _media = _dereq_(28),
          _constants = _dereq_(25),
          _dom = _dereq_(26),
          NativeDash = {
            promise: null,
            load: function (settings) {
              return (
                "undefined" != typeof dashjs
                  ? (NativeDash.promise = new Promise(function (resolve) {
                      resolve();
                    }).then(function () {
                      NativeDash._createPlayer(settings);
                    }))
                  : ((settings.options.path =
                      "string" == typeof settings.options.path
                        ? settings.options.path
                        : "https://cdn.dashjs.org/latest/dash.all.min.js"),
                    (NativeDash.promise =
                      NativeDash.promise ||
                      (0, _dom.loadScript)(settings.options.path)),
                    NativeDash.promise.then(function () {
                      NativeDash._createPlayer(settings);
                    })),
                NativeDash.promise
              );
            },
            _createPlayer: function (settings) {
              var player = dashjs.MediaPlayer().create();
              return (
                _window2["default"]["__ready__" + settings.id](player), player
              );
            },
          },
          DashNativeRenderer = {
            name: "native_dash",
            options: {
              prefix: "native_dash",
              dash: {
                path: "https://cdn.dashjs.org/latest/dash.all.min.js",
                debug: !1,
                drm: {},
                robustnessLevel: "",
              },
            },
            canPlayType: function (type) {
              return (
                _constants.HAS_MSE &&
                ["application/dash+xml"].indexOf(type.toLowerCase()) > -1
              );
            },
            create: function (mediaElement, options, mediaFiles) {
              var originalNode = mediaElement.originalNode,
                id = mediaElement.id + "_" + options.prefix,
                autoplay = originalNode.autoplay,
                children = originalNode.children,
                node = null,
                dashPlayer = null;
              originalNode.removeAttribute("type");
              for (var i = 0, total = children.length; i < total; i++)
                children[i].removeAttribute("type");
              (node = originalNode.cloneNode(!0)),
                (options = Object.assign(options, mediaElement.options));
              for (
                var props = _mejs2["default"].html5media.properties,
                  events = _mejs2["default"].html5media.events.concat([
                    "click",
                    "mouseover",
                    "mouseout",
                  ]),
                  attachNativeEvents = function (e) {
                    if ("error" !== e.type) {
                      var _event = (0, _general.createEvent)(
                        e.type,
                        mediaElement
                      );
                      mediaElement.dispatchEvent(_event);
                    }
                  },
                  assignGettersSetters = function (propName) {
                    var capName =
                      "" +
                      propName.substring(0, 1).toUpperCase() +
                      propName.substring(1);
                    (node["get" + capName] = function () {
                      return null !== dashPlayer ? node[propName] : null;
                    }),
                      (node["set" + capName] = function (value) {
                        if (
                          _mejs2[
                            "default"
                          ].html5media.readOnlyProperties.indexOf(propName) ===
                          -1
                        )
                          if ("src" === propName) {
                            var source =
                              "object" ===
                                ("undefined" == typeof value
                                  ? "undefined"
                                  : _typeof(value)) && value.src
                                ? value.src
                                : value;
                            if (
                              ((node[propName] = source), null !== dashPlayer)
                            ) {
                              dashPlayer.reset();
                              for (
                                var _i = 0, _total = events.length;
                                _i < _total;
                                _i++
                              )
                                node.removeEventListener(
                                  events[_i],
                                  attachNativeEvents
                                );
                              (dashPlayer = NativeDash._createPlayer({
                                options: options.dash,
                                id: id,
                              })),
                                value &&
                                  "object" ===
                                    ("undefined" == typeof value
                                      ? "undefined"
                                      : _typeof(value)) &&
                                  "object" === _typeof(value.drm) &&
                                  (dashPlayer.setProtectionData(value.drm),
                                  (0, _general.isString)(
                                    options.dash.robustnessLevel
                                  ) &&
                                    options.dash.robustnessLevel &&
                                    dashPlayer
                                      .getProtectionController()
                                      .setRobustnessLevel(
                                        options.dash.robustnessLevel
                                      )),
                                dashPlayer.attachSource(source),
                                autoplay && dashPlayer.play();
                            }
                          } else node[propName] = value;
                      });
                  },
                  _i2 = 0,
                  _total2 = props.length;
                _i2 < _total2;
                _i2++
              )
                assignGettersSetters(props[_i2]);
              if (
                ((_window2["default"]["__ready__" + id] = function (
                  _dashPlayer
                ) {
                  mediaElement.dashPlayer = dashPlayer = _dashPlayer;
                  for (
                    var dashEvents = dashjs.MediaPlayer.events,
                      assignEvents = function (eventName) {
                        "loadedmetadata" === eventName &&
                          (dashPlayer
                            .getDebug()
                            .setLogToBrowserConsole(options.dash.debug),
                          dashPlayer.initialize(),
                          dashPlayer.setScheduleWhilePaused(!1),
                          dashPlayer.setFastSwitchEnabled(!0),
                          dashPlayer.attachView(node),
                          dashPlayer.setAutoPlay(!1),
                          "object" !== _typeof(options.dash.drm) ||
                            _mejs2["default"].Utils.isObjectEmpty(
                              options.dash.drm
                            ) ||
                            (dashPlayer.setProtectionData(options.dash.drm),
                            (0, _general.isString)(
                              options.dash.robustnessLevel
                            ) &&
                              options.dash.robustnessLevel &&
                              dashPlayer
                                .getProtectionController()
                                .setRobustnessLevel(
                                  options.dash.robustnessLevel
                                )),
                          dashPlayer.attachSource(node.getSrc())),
                          node.addEventListener(eventName, attachNativeEvents);
                      },
                      _i3 = 0,
                      _total3 = events.length;
                    _i3 < _total3;
                    _i3++
                  )
                    assignEvents(events[_i3]);
                  var assignMdashEvents = function (name, data) {
                    if ("error" === name.toLowerCase())
                      mediaElement.generateError(data.message, node.src),
                        console.error(data);
                    else {
                      var _event2 = (0, _general.createEvent)(
                        name,
                        mediaElement
                      );
                      (_event2.data = data),
                        mediaElement.dispatchEvent(_event2);
                    }
                  };
                  for (var eventType in dashEvents)
                    dashEvents.hasOwnProperty(eventType) &&
                      dashPlayer.on(dashEvents[eventType], function (e) {
                        for (
                          var _len = arguments.length,
                            args = Array(_len > 1 ? _len - 1 : 0),
                            _key = 1;
                          _key < _len;
                          _key++
                        )
                          args[_key - 1] = arguments[_key];
                        return assignMdashEvents(e.type, args);
                      });
                }),
                mediaFiles && mediaFiles.length > 0)
              )
                for (
                  var _i4 = 0, _total4 = mediaFiles.length;
                  _i4 < _total4;
                  _i4++
                )
                  if (
                    _renderer.renderer.renderers[options.prefix].canPlayType(
                      mediaFiles[_i4].type
                    )
                  ) {
                    node.setAttribute("src", mediaFiles[_i4].src),
                      "undefined" != typeof mediaFiles[_i4].drm &&
                        (options.dash.drm = mediaFiles[_i4].drm);
                    break;
                  }
              node.setAttribute("id", id),
                originalNode.parentNode.insertBefore(node, originalNode),
                (originalNode.autoplay = !1),
                (originalNode.style.display = "none"),
                (node.setSize = function (width, height) {
                  return (
                    (node.style.width = width + "px"),
                    (node.style.height = height + "px"),
                    node
                  );
                }),
                (node.hide = function () {
                  return node.pause(), (node.style.display = "none"), node;
                }),
                (node.show = function () {
                  return (node.style.display = ""), node;
                }),
                (node.destroy = function () {
                  null !== dashPlayer && dashPlayer.reset();
                });
              var event = (0, _general.createEvent)("rendererready", node);
              return (
                mediaElement.dispatchEvent(event),
                mediaElement.promises.push(
                  NativeDash.load({ options: options.dash, id: id })
                ),
                node
              );
            },
          };
        _media.typeChecks.push(function (url) {
          return ~url.toLowerCase().indexOf(".mpd")
            ? "application/dash+xml"
            : null;
        }),
          _renderer.renderer.add(DashNativeRenderer);
      },
      { 25: 25, 26: 26, 27: 27, 28: 28, 3: 3, 7: 7, 8: 8 },
    ],
    20: [
      function (_dereq_, module, exports) {
        "use strict";
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.PluginDetector = void 0);
        var _typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    "function" == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? "symbol"
                    : typeof obj;
                },
          _window = _dereq_(3),
          _window2 = _interopRequireDefault(_window),
          _document = _dereq_(2),
          _document2 = _interopRequireDefault(_document),
          _mejs = _dereq_(7),
          _mejs2 = _interopRequireDefault(_mejs),
          _i18n = _dereq_(5),
          _i18n2 = _interopRequireDefault(_i18n),
          _renderer = _dereq_(8),
          _general = _dereq_(27),
          _constants = _dereq_(25),
          _media = _dereq_(28),
          PluginDetector = (exports.PluginDetector = {
            plugins: [],
            hasPluginVersion: function (plugin, v) {
              var pv = PluginDetector.plugins[plugin];
              return (
                (v[1] = v[1] || 0),
                (v[2] = v[2] || 0),
                pv[0] > v[0] ||
                  (pv[0] === v[0] && pv[1] > v[1]) ||
                  (pv[0] === v[0] && pv[1] === v[1] && pv[2] >= v[2])
              );
            },
            addPlugin: function (p, pluginName, mimeType, activeX, axDetect) {
              PluginDetector.plugins[p] = PluginDetector.detectPlugin(
                pluginName,
                mimeType,
                activeX,
                axDetect
              );
            },
            detectPlugin: function (pluginName, mimeType, activeX, axDetect) {
              var version = [0, 0, 0],
                description = void 0,
                ax = void 0;
              if (
                null !== _constants.NAV.plugins &&
                void 0 !== _constants.NAV.plugins &&
                "object" === _typeof(_constants.NAV.plugins[pluginName])
              ) {
                if (
                  ((description =
                    _constants.NAV.plugins[pluginName].description),
                  description &&
                    ("undefined" == typeof _constants.NAV.mimeTypes ||
                      !_constants.NAV.mimeTypes[mimeType] ||
                      _constants.NAV.mimeTypes[mimeType].enabledPlugin))
                ) {
                  version = description
                    .replace(pluginName, "")
                    .replace(/^\s+/, "")
                    .replace(/\sr/gi, ".")
                    .split(".");
                  for (var i = 0, total = version.length; i < total; i++)
                    version[i] = parseInt(version[i].match(/\d+/), 10);
                }
              } else if (void 0 !== _window2["default"].ActiveXObject)
                try {
                  (ax = new ActiveXObject(activeX)),
                    ax && (version = axDetect(ax));
                } catch (e) {}
              return version;
            },
          });
        PluginDetector.addPlugin(
          "flash",
          "Shockwave Flash",
          "application/x-shockwave-flash",
          "ShockwaveFlash.ShockwaveFlash",
          function (ax) {
            var version = [],
              d = ax.GetVariable("$version");
            return (
              d &&
                ((d = d.split(" ")[1].split(",")),
                (version = [
                  parseInt(d[0], 10),
                  parseInt(d[1], 10),
                  parseInt(d[2], 10),
                ])),
              version
            );
          }
        );
        var FlashMediaElementRenderer = {
            create: function (mediaElement, options, mediaFiles) {
              var flash = {},
                isActive = !1;
              (flash.options = options),
                (flash.id = mediaElement.id + "_" + flash.options.prefix),
                (flash.mediaElement = mediaElement),
                (flash.flashState = {}),
                (flash.flashApi = null),
                (flash.flashApiStack = []);
              for (
                var props = _mejs2["default"].html5media.properties,
                  assignGettersSetters = function (propName) {
                    flash.flashState[propName] = null;
                    var capName =
                      "" +
                      propName.substring(0, 1).toUpperCase() +
                      propName.substring(1);
                    (flash["get" + capName] = function () {
                      if (null !== flash.flashApi) {
                        if (
                          "function" == typeof flash.flashApi["get_" + propName]
                        ) {
                          var value = flash.flashApi["get_" + propName]();
                          return "buffered" === propName
                            ? {
                                start: function () {
                                  return 0;
                                },
                                end: function () {
                                  return value;
                                },
                                length: 1,
                              }
                            : value;
                        }
                        return null;
                      }
                      return null;
                    }),
                      (flash["set" + capName] = function (value) {
                        if (
                          ("src" === propName &&
                            (value = (0, _media.absolutizeUrl)(value)),
                          null !== flash.flashApi &&
                            void 0 !== flash.flashApi["set_" + propName])
                        )
                          try {
                            flash.flashApi["set_" + propName](value);
                          } catch (e) {}
                        else
                          flash.flashApiStack.push({
                            type: "set",
                            propName: propName,
                            value: value,
                          });
                      });
                  },
                  i = 0,
                  total = props.length;
                i < total;
                i++
              )
                assignGettersSetters(props[i]);
              var methods = _mejs2["default"].html5media.methods,
                assignMethods = function (methodName) {
                  flash[methodName] = function () {
                    if (isActive)
                      if (null !== flash.flashApi) {
                        if (flash.flashApi["fire_" + methodName])
                          try {
                            flash.flashApi["fire_" + methodName]();
                          } catch (e) {}
                      } else
                        flash.flashApiStack.push({
                          type: "call",
                          methodName: methodName,
                        });
                  };
                };
              methods.push("stop");
              for (var _i = 0, _total = methods.length; _i < _total; _i++)
                assignMethods(methods[_i]);
              for (
                var initEvents = ["rendererready"],
                  _i2 = 0,
                  _total2 = initEvents.length;
                _i2 < _total2;
                _i2++
              ) {
                var event = (0, _general.createEvent)(initEvents[_i2], flash);
                mediaElement.dispatchEvent(event);
              }
              (_window2["default"]["__ready__" + flash.id] = function () {
                if (
                  ((flash.flashReady = !0),
                  (flash.flashApi = _document2["default"].getElementById(
                    "__" + flash.id
                  )),
                  flash.flashApiStack.length)
                )
                  for (
                    var _i3 = 0, _total3 = flash.flashApiStack.length;
                    _i3 < _total3;
                    _i3++
                  ) {
                    var stackItem = flash.flashApiStack[_i3];
                    if ("set" === stackItem.type) {
                      var propName = stackItem.propName,
                        capName =
                          "" +
                          propName.substring(0, 1).toUpperCase() +
                          propName.substring(1);
                      flash["set" + capName](stackItem.value);
                    } else
                      "call" === stackItem.type &&
                        flash[stackItem.methodName]();
                  }
              }),
                (_window2["default"]["__event__" + flash.id] = function (
                  eventName,
                  message
                ) {
                  var event = (0, _general.createEvent)(eventName, flash);
                  if (message)
                    try {
                      (event.data = JSON.parse(message)),
                        (event.details.data = JSON.parse(message));
                    } catch (e) {
                      event.message = message;
                    }
                  flash.mediaElement.dispatchEvent(event);
                }),
                (flash.flashWrapper =
                  _document2["default"].createElement("div")),
                ["always", "sameDomain"].indexOf(
                  flash.options.shimScriptAccess
                ) === -1 && (flash.options.shimScriptAccess = "sameDomain");
              var autoplay = mediaElement.originalNode.autoplay,
                flashVars = [
                  "uid=" + flash.id,
                  "autoplay=" + autoplay,
                  "allowScriptAccess=" + flash.options.shimScriptAccess,
                  "preload=" +
                    (mediaElement.originalNode.getAttribute("preload") || ""),
                ],
                isVideo =
                  null !== mediaElement.originalNode &&
                  "video" === mediaElement.originalNode.tagName.toLowerCase(),
                flashHeight = isVideo ? mediaElement.originalNode.height : 1,
                flashWidth = isVideo ? mediaElement.originalNode.width : 1;
              mediaElement.originalNode.getAttribute("src") &&
                flashVars.push(
                  "src=" + mediaElement.originalNode.getAttribute("src")
                ),
                flash.options.enablePseudoStreaming === !0 &&
                  (flashVars.push(
                    "pseudostreamstart=" +
                      flash.options.pseudoStreamingStartQueryParam
                  ),
                  flashVars.push(
                    "pseudostreamtype=" + flash.options.pseudoStreamingType
                  )),
                flash.options.streamDelimiter &&
                  flashVars.push(
                    "streamdelimiter=" +
                      encodeURIComponent(flash.options.streamDelimiter)
                  ),
                flash.options.proxyType &&
                  flashVars.push("proxytype=" + flash.options.proxyType),
                mediaElement.appendChild(flash.flashWrapper),
                (mediaElement.originalNode.style.display = "none");
              var settings = [];
              if (_constants.IS_IE || _constants.IS_EDGE) {
                var specialIEContainer =
                  _document2["default"].createElement("div");
                flash.flashWrapper.appendChild(specialIEContainer),
                  (settings = _constants.IS_EDGE
                    ? [
                        'type="application/x-shockwave-flash"',
                        'data="' +
                          flash.options.pluginPath +
                          flash.options.filename +
                          '"',
                        'id="__' + flash.id + '"',
                        'width="' + flashWidth + '"',
                        'height="' + flashHeight + "'\"",
                      ]
                    : [
                        'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"',
                        'codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab"',
                        'id="__' + flash.id + '"',
                        'width="' + flashWidth + '"',
                        'height="' + flashHeight + '"',
                      ]),
                  isVideo ||
                    settings.push(
                      'style="clip: rect(0 0 0 0); position: absolute;"'
                    ),
                  (specialIEContainer.outerHTML =
                    "<object " +
                    settings.join(" ") +
                    ">" +
                    ('<param name="movie" value="' +
                      flash.options.pluginPath +
                      flash.options.filename +
                      "?x=" +
                      new Date() +
                      '" />') +
                    ('<param name="flashvars" value="' +
                      flashVars.join("&amp;") +
                      '" />') +
                    '<param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" />' +
                    ('<param name="allowScriptAccess" value="' +
                      flash.options.shimScriptAccess +
                      '" />') +
                    '<param name="allowFullScreen" value="true" />' +
                    ("<div>" +
                      _i18n2["default"].t("mejs.install-flash") +
                      "</div>") +
                    "</object>");
              } else
                (settings = [
                  'id="__' + flash.id + '"',
                  'name="__' + flash.id + '"',
                  'play="true"',
                  'loop="false"',
                  'quality="high"',
                  'bgcolor="#000000"',
                  'wmode="transparent"',
                  'allowScriptAccess="' + flash.options.shimScriptAccess + '"',
                  'allowFullScreen="true"',
                  'type="application/x-shockwave-flash"',
                  'pluginspage="//www.macromedia.com/go/getflashplayer"',
                  'src="' +
                    flash.options.pluginPath +
                    flash.options.filename +
                    '"',
                  'flashvars="' + flashVars.join("&") + '"',
                ]),
                  isVideo
                    ? (settings.push('width="' + flashWidth + '"'),
                      settings.push('height="' + flashHeight + '"'))
                    : settings.push(
                        'style="position: fixed; left: -9999em; top: -9999em;"'
                      ),
                  (flash.flashWrapper.innerHTML =
                    "<embed " + settings.join(" ") + ">");
              if (
                ((flash.flashNode = flash.flashWrapper.lastChild),
                (flash.hide = function () {
                  (isActive = !1),
                    isVideo && (flash.flashNode.style.display = "none");
                }),
                (flash.show = function () {
                  (isActive = !0),
                    isVideo && (flash.flashNode.style.display = "");
                }),
                (flash.setSize = function (width, height) {
                  (flash.flashNode.style.width = width + "px"),
                    (flash.flashNode.style.height = height + "px"),
                    null !== flash.flashApi &&
                      "function" == typeof flash.flashApi.fire_setSize &&
                      flash.flashApi.fire_setSize(width, height);
                }),
                (flash.destroy = function () {
                  flash.flashNode.remove();
                }),
                mediaFiles && mediaFiles.length > 0)
              )
                for (
                  var _i4 = 0, _total4 = mediaFiles.length;
                  _i4 < _total4;
                  _i4++
                )
                  if (
                    _renderer.renderer.renderers[options.prefix].canPlayType(
                      mediaFiles[_i4].type
                    )
                  ) {
                    flash.setSrc(mediaFiles[_i4].src);
                    break;
                  }
              return flash;
            },
          },
          hasFlash = PluginDetector.hasPluginVersion("flash", [10, 0, 0]);
        if (hasFlash) {
          _media.typeChecks.push(function (url) {
            return (
              (url = url.toLowerCase()),
              url.startsWith("rtmp")
                ? ~url.indexOf(".mp3")
                  ? "audio/rtmp"
                  : "video/rtmp"
                : /\.og(a|g)/i.test(url)
                ? "audio/ogg"
                : ~url.indexOf(".m3u8")
                ? "application/x-mpegURL"
                : ~url.indexOf(".mpd")
                ? "application/dash+xml"
                : ~url.indexOf(".flv")
                ? "video/flv"
                : null
            );
          });
          var FlashMediaElementVideoRenderer = {
            name: "flash_video",
            options: {
              prefix: "flash_video",
              filename: "mediaelement-flash-video.swf",
              enablePseudoStreaming: !1,
              pseudoStreamingStartQueryParam: "start",
              pseudoStreamingType: "byte",
              proxyType: "",
              streamDelimiter: "",
            },
            canPlayType: function (type) {
              return ~[
                "video/mp4",
                "video/rtmp",
                "audio/rtmp",
                "rtmp/mp4",
                "audio/mp4",
                "video/flv",
                "video/x-flv",
              ].indexOf(type.toLowerCase());
            },
            create: FlashMediaElementRenderer.create,
          };
          _renderer.renderer.add(FlashMediaElementVideoRenderer);
          var FlashMediaElementHlsVideoRenderer = {
            name: "flash_hls",
            options: {
              prefix: "flash_hls",
              filename: "mediaelement-flash-video-hls.swf",
            },
            canPlayType: function (type) {
              return ~[
                "application/x-mpegurl",
                "application/vnd.apple.mpegurl",
                "audio/mpegurl",
                "audio/hls",
                "video/hls",
              ].indexOf(type.toLowerCase());
            },
            create: FlashMediaElementRenderer.create,
          };
          _renderer.renderer.add(FlashMediaElementHlsVideoRenderer);
          var FlashMediaElementMdashVideoRenderer = {
            name: "flash_dash",
            options: {
              prefix: "flash_dash",
              filename: "mediaelement-flash-video-mdash.swf",
            },
            canPlayType: function (type) {
              return ~["application/dash+xml"].indexOf(type.toLowerCase());
            },
            create: FlashMediaElementRenderer.create,
          };
          _renderer.renderer.add(FlashMediaElementMdashVideoRenderer);
          var FlashMediaElementAudioRenderer = {
            name: "flash_audio",
            options: {
              prefix: "flash_audio",
              filename: "mediaelement-flash-audio.swf",
            },
            canPlayType: function (type) {
              return ~["audio/mp3"].indexOf(type.toLowerCase());
            },
            create: FlashMediaElementRenderer.create,
          };
          _renderer.renderer.add(FlashMediaElementAudioRenderer);
          var FlashMediaElementAudioOggRenderer = {
            name: "flash_audio_ogg",
            options: {
              prefix: "flash_audio_ogg",
              filename: "mediaelement-flash-audio-ogg.swf",
            },
            canPlayType: function (type) {
              return ~["audio/ogg", "audio/oga", "audio/ogv"].indexOf(
                type.toLowerCase()
              );
            },
            create: FlashMediaElementRenderer.create,
          };
          _renderer.renderer.add(FlashMediaElementAudioOggRenderer);
        }
      },
      { 2: 2, 25: 25, 27: 27, 28: 28, 3: 3, 5: 5, 7: 7, 8: 8 },
    ],
    21: [
      function (_dereq_, module, exports) {
        "use strict";
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var _typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    "function" == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? "symbol"
                    : typeof obj;
                },
          _window = _dereq_(3),
          _window2 = _interopRequireDefault(_window),
          _mejs = _dereq_(7),
          _mejs2 = _interopRequireDefault(_mejs),
          _renderer = _dereq_(8),
          _general = _dereq_(27),
          _constants = _dereq_(25),
          _media = _dereq_(28),
          _dom = _dereq_(26),
          NativeFlv = {
            promise: null,
            load: function (settings) {
              return (
                "undefined" != typeof flvjs
                  ? (NativeFlv.promise = new Promise(function (resolve) {
                      resolve();
                    }).then(function () {
                      NativeFlv._createPlayer(settings);
                    }))
                  : ((settings.options.path =
                      "string" == typeof settings.options.path
                        ? settings.options.path
                        : "https://cdnjs.cloudflare.com/ajax/libs/flv.js/1.3.3/flv.min.js"),
                    (NativeFlv.promise =
                      NativeFlv.promise ||
                      (0, _dom.loadScript)(settings.options.path)),
                    NativeFlv.promise.then(function () {
                      NativeFlv._createPlayer(settings);
                    })),
                NativeFlv.promise
              );
            },
            _createPlayer: function (settings) {
              (flvjs.LoggingControl.enableDebug = settings.options.debug),
                (flvjs.LoggingControl.enableVerbose = settings.options.debug);
              var player = flvjs.createPlayer(
                settings.options,
                settings.configs
              );
              return (
                _window2["default"]["__ready__" + settings.id](player), player
              );
            },
          },
          FlvNativeRenderer = {
            name: "native_flv",
            options: {
              prefix: "native_flv",
              flv: {
                path: "https://cdnjs.cloudflare.com/ajax/libs/flv.js/1.3.3/flv.min.js",
                cors: !0,
                debug: !1,
              },
            },
            canPlayType: function (type) {
              return (
                _constants.HAS_MSE &&
                ["video/x-flv", "video/flv"].indexOf(type.toLowerCase()) > -1
              );
            },
            create: function (mediaElement, options, mediaFiles) {
              var originalNode = mediaElement.originalNode,
                id = mediaElement.id + "_" + options.prefix,
                node = null,
                flvPlayer = null;
              (node = originalNode.cloneNode(!0)),
                (options = Object.assign(options, mediaElement.options));
              for (
                var props = _mejs2["default"].html5media.properties,
                  events = _mejs2["default"].html5media.events.concat([
                    "click",
                    "mouseover",
                    "mouseout",
                  ]),
                  attachNativeEvents = function (e) {
                    if ("error" !== e.type) {
                      var _event = (0, _general.createEvent)(
                        e.type,
                        mediaElement
                      );
                      mediaElement.dispatchEvent(_event);
                    }
                  },
                  assignGettersSetters = function (propName) {
                    var capName =
                      "" +
                      propName.substring(0, 1).toUpperCase() +
                      propName.substring(1);
                    (node["get" + capName] = function () {
                      return null !== flvPlayer ? node[propName] : null;
                    }),
                      (node["set" + capName] = function (value) {
                        if (
                          _mejs2[
                            "default"
                          ].html5media.readOnlyProperties.indexOf(propName) ===
                          -1
                        )
                          if ("src" === propName) {
                            if (
                              ((node[propName] =
                                "object" ===
                                  ("undefined" == typeof value
                                    ? "undefined"
                                    : _typeof(value)) && value.src
                                  ? value.src
                                  : value),
                              null !== flvPlayer)
                            ) {
                              var _flvOptions = {};
                              (_flvOptions.type = "flv"),
                                (_flvOptions.url = value),
                                (_flvOptions.cors = options.flv.cors),
                                (_flvOptions.debug = options.flv.debug),
                                (_flvOptions.path = options.flv.path);
                              var _flvConfigs = options.flv.configs;
                              flvPlayer.destroy();
                              for (
                                var i = 0, total = events.length;
                                i < total;
                                i++
                              )
                                node.removeEventListener(
                                  events[i],
                                  attachNativeEvents
                                );
                              (flvPlayer = NativeFlv._createPlayer({
                                options: _flvOptions,
                                configs: _flvConfigs,
                                id: id,
                              })),
                                flvPlayer.attachMediaElement(node),
                                flvPlayer.load();
                            }
                          } else node[propName] = value;
                      });
                  },
                  i = 0,
                  total = props.length;
                i < total;
                i++
              )
                assignGettersSetters(props[i]);
              if (
                ((_window2["default"]["__ready__" + id] = function (
                  _flvPlayer
                ) {
                  mediaElement.flvPlayer = flvPlayer = _flvPlayer;
                  for (
                    var flvEvents = flvjs.Events,
                      assignEvents = function (eventName) {
                        "loadedmetadata" === eventName &&
                          (flvPlayer.unload(),
                          flvPlayer.detachMediaElement(),
                          flvPlayer.attachMediaElement(node),
                          flvPlayer.load()),
                          node.addEventListener(eventName, attachNativeEvents);
                      },
                      _i = 0,
                      _total = events.length;
                    _i < _total;
                    _i++
                  )
                    assignEvents(events[_i]);
                  var assignFlvEvents = function (name, data) {
                      if ("error" === name) {
                        var message =
                          data[0] + ": " + data[1] + " " + data[2].msg;
                        mediaElement.generateError(message, node.src);
                      } else {
                        var _event2 = (0, _general.createEvent)(
                          name,
                          mediaElement
                        );
                        (_event2.data = data),
                          mediaElement.dispatchEvent(_event2);
                      }
                    },
                    _loop = function (eventType) {
                      flvEvents.hasOwnProperty(eventType) &&
                        flvPlayer.on(flvEvents[eventType], function () {
                          for (
                            var _len = arguments.length,
                              args = Array(_len),
                              _key = 0;
                            _key < _len;
                            _key++
                          )
                            args[_key] = arguments[_key];
                          return assignFlvEvents(flvEvents[eventType], args);
                        });
                    };
                  for (var eventType in flvEvents) _loop(eventType);
                }),
                mediaFiles && mediaFiles.length > 0)
              )
                for (
                  var _i2 = 0, _total2 = mediaFiles.length;
                  _i2 < _total2;
                  _i2++
                )
                  if (
                    _renderer.renderer.renderers[options.prefix].canPlayType(
                      mediaFiles[_i2].type
                    )
                  ) {
                    node.setAttribute("src", mediaFiles[_i2].src);
                    break;
                  }
              node.setAttribute("id", id),
                originalNode.parentNode.insertBefore(node, originalNode),
                (originalNode.autoplay = !1),
                (originalNode.style.display = "none");
              var flvOptions = {};
              (flvOptions.type = "flv"),
                (flvOptions.url = node.src),
                (flvOptions.cors = options.flv.cors),
                (flvOptions.debug = options.flv.debug),
                (flvOptions.path = options.flv.path);
              var flvConfigs = options.flv.configs;
              (node.setSize = function (width, height) {
                return (
                  (node.style.width = width + "px"),
                  (node.style.height = height + "px"),
                  node
                );
              }),
                (node.hide = function () {
                  return (
                    null !== flvPlayer && flvPlayer.pause(),
                    (node.style.display = "none"),
                    node
                  );
                }),
                (node.show = function () {
                  return (node.style.display = ""), node;
                }),
                (node.destroy = function () {
                  null !== flvPlayer && flvPlayer.destroy();
                });
              var event = (0, _general.createEvent)("rendererready", node);
              return (
                mediaElement.dispatchEvent(event),
                mediaElement.promises.push(
                  NativeFlv.load({
                    options: flvOptions,
                    configs: flvConfigs,
                    id: id,
                  })
                ),
                node
              );
            },
          };
        _media.typeChecks.push(function (url) {
          return ~url.toLowerCase().indexOf(".flv") ? "video/flv" : null;
        }),
          _renderer.renderer.add(FlvNativeRenderer);
      },
      { 25: 25, 26: 26, 27: 27, 28: 28, 3: 3, 7: 7, 8: 8 },
    ],
    22: [
      function (_dereq_, module, exports) {
        "use strict";
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var _typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (obj) {
                  return typeof obj;
                }
              : function (obj) {
                  return obj &&
                    "function" == typeof Symbol &&
                    obj.constructor === Symbol &&
                    obj !== Symbol.prototype
                    ? "symbol"
                    : typeof obj;
                },
          _window = _dereq_(3),
          _window2 = _interopRequireDefault(_window),
          _mejs = _dereq_(7),
          _mejs2 = _interopRequireDefault(_mejs),
          _renderer = _dereq_(8),
          _general = _dereq_(27),
          _constants = _dereq_(25),
          _media = _dereq_(28),
          _dom = _dereq_(26),
          NativeHls = {
            promise: null,
            load: function (settings) {
              return (
                "undefined" != typeof Hls
                  ? (NativeHls.promise = new Promise(function (resolve) {
                      resolve();
                    }).then(function () {
                      NativeHls._createPlayer(settings);
                    }))
                  : ((settings.options.path =
                      "string" == typeof settings.options.path
                        ? settings.options.path
                        : "https://cdnjs.cloudflare.com/ajax/libs/hls.js/0.8.4/hls.min.js"),
                    (NativeHls.promise =
                      NativeHls.promise ||
                      (0, _dom.loadScript)(settings.options.path)),
                    NativeHls.promise.then(function () {
                      NativeHls._createPlayer(settings);
                    })),
                NativeHls.promise
              );
            },
            _createPlayer: function (settings) {
              var player = new Hls(settings.options);
              return (
                _window2["default"]["__ready__" + settings.id](player), player
              );
            },
          },
          HlsNativeRenderer = {
            name: "native_hls",
            options: {
              prefix: "native_hls",
              hls: {
                path: "https://cdnjs.cloudflare.com/ajax/libs/hls.js/0.8.4/hls.min.js",
                autoStartLoad: !1,
                debug: !1,
              },
            },
            canPlayType: function (type) {
              return (
                _constants.HAS_MSE &&
                [
                  "application/x-mpegurl",
                  "application/vnd.apple.mpegurl",
                  "audio/mpegurl",
                  "audio/hls",
                  "video/hls",
                ].indexOf(type.toLowerCase()) > -1
              );
            },
            create: function (mediaElement, options, mediaFiles) {
              var originalNode = mediaElement.originalNode,
                id = mediaElement.id + "_" + options.prefix,
                preload = originalNode.getAttribute("preload"),
                autoplay = originalNode.autoplay,
                hlsPlayer = null,
                node = null,
                index = 0,
                total = mediaFiles.length;
              (node = originalNode.cloneNode(!0)),
                (options = Object.assign(options, mediaElement.options)),
                (options.hls.autoStartLoad =
                  (preload && "none" !== preload) || autoplay);
              for (
                var props = _mejs2["default"].html5media.properties,
                  events = _mejs2["default"].html5media.events.concat([
                    "click",
                    "mouseover",
                    "mouseout",
                  ]),
                  attachNativeEvents = function (e) {
                    if ("error" !== e.type) {
                      var _event = (0, _general.createEvent)(
                        e.type,
                        mediaElement
                      );
                      mediaElement.dispatchEvent(_event);
                    }
                  },
                  assignGettersSetters = function (propName) {
                    var capName =
                      "" +
                      propName.substring(0, 1).toUpperCase() +
                      propName.substring(1);
                    (node["get" + capName] = function () {
                      return null !== hlsPlayer ? node[propName] : null;
                    }),
                      (node["set" + capName] = function (value) {
                        if (
                          _mejs2[
                            "default"
                          ].html5media.readOnlyProperties.indexOf(propName) ===
                          -1
                        )
                          if ("src" === propName) {
                            if (
                              ((node[propName] =
                                "object" ===
                                  ("undefined" == typeof value
                                    ? "undefined"
                                    : _typeof(value)) && value.src
                                  ? value.src
                                  : value),
                              null !== hlsPlayer)
                            ) {
                              hlsPlayer.destroy();
                              for (
                                var i = 0, _total = events.length;
                                i < _total;
                                i++
                              )
                                node.removeEventListener(
                                  events[i],
                                  attachNativeEvents
                                );
                              (hlsPlayer = NativeHls._createPlayer({
                                options: options.hls,
                                id: id,
                              })),
                                hlsPlayer.loadSource(value),
                                hlsPlayer.attachMedia(node);
                            }
                          } else node[propName] = value;
                      });
                  },
                  i = 0,
                  _total2 = props.length;
                i < _total2;
                i++
              )
                assignGettersSetters(props[i]);
              if (
                ((_window2["default"]["__ready__" + id] = function (
                  _hlsPlayer
                ) {
                  mediaElement.hlsPlayer = hlsPlayer = _hlsPlayer;
                  for (
                    var hlsEvents = Hls.Events,
                      assignEvents = function (eventName) {
                        if ("loadedmetadata" === eventName) {
                          var url = mediaElement.originalNode.src;
                          hlsPlayer.detachMedia(),
                            hlsPlayer.loadSource(url),
                            hlsPlayer.attachMedia(node);
                        }
                        node.addEventListener(eventName, attachNativeEvents);
                      },
                      _i = 0,
                      _total3 = events.length;
                    _i < _total3;
                    _i++
                  )
                    assignEvents(events[_i]);
                  var recoverDecodingErrorDate = void 0,
                    recoverSwapAudioCodecDate = void 0,
                    assignHlsEvents = function (name, data) {
                      if ("hlsError" === name) {
                        if ((console.warn(data), (data = data[1]), data.fatal))
                          switch (data.type) {
                            case "mediaError":
                              var now = new Date().getTime();
                              if (
                                !recoverDecodingErrorDate ||
                                now - recoverDecodingErrorDate > 3e3
                              )
                                (recoverDecodingErrorDate =
                                  new Date().getTime()),
                                  hlsPlayer.recoverMediaError();
                              else if (
                                !recoverSwapAudioCodecDate ||
                                now - recoverSwapAudioCodecDate > 3e3
                              )
                                (recoverSwapAudioCodecDate =
                                  new Date().getTime()),
                                  console.warn(
                                    "Attempting to swap Audio Codec and recover from media error"
                                  ),
                                  hlsPlayer.swapAudioCodec(),
                                  hlsPlayer.recoverMediaError();
                              else {
                                var message =
                                  "Cannot recover, last media error recovery failed";
                                mediaElement.generateError(message, node.src),
                                  console.error(message);
                              }
                              break;
                            case "networkError":
                              if ("manifestLoadError" === data.details)
                                if (
                                  index < total &&
                                  void 0 !== mediaFiles[index + 1]
                                )
                                  node.setSrc(mediaFiles[index++].src),
                                    node.load(),
                                    node.play();
                                else {
                                  var _message = "Network error";
                                  mediaElement.generateError(
                                    _message,
                                    mediaFiles
                                  ),
                                    console.error(_message);
                                }
                              else {
                                var _message2 = "Network error";
                                mediaElement.generateError(
                                  _message2,
                                  mediaFiles
                                ),
                                  console.error(_message2);
                              }
                              break;
                            default:
                              hlsPlayer.destroy();
                          }
                      } else {
                        var _event2 = (0, _general.createEvent)(
                          name,
                          mediaElement
                        );
                        (_event2.data = data),
                          mediaElement.dispatchEvent(_event2);
                      }
                    },
                    _loop = function (eventType) {
                      hlsEvents.hasOwnProperty(eventType) &&
                        hlsPlayer.on(hlsEvents[eventType], function () {
                          for (
                            var _len = arguments.length,
                              args = Array(_len),
                              _key = 0;
                            _key < _len;
                            _key++
                          )
                            args[_key] = arguments[_key];
                          return assignHlsEvents(hlsEvents[eventType], args);
                        });
                    };
                  for (var eventType in hlsEvents) _loop(eventType);
                }),
                total > 0)
              )
                for (; index < total; index++)
                  if (
                    _renderer.renderer.renderers[options.prefix].canPlayType(
                      mediaFiles[index].type
                    )
                  ) {
                    node.setAttribute("src", mediaFiles[index].src);
                    break;
                  }
              "auto" === preload ||
                autoplay ||
                (node.addEventListener("play", function () {
                  null !== hlsPlayer && hlsPlayer.startLoad();
                }),
                node.addEventListener("pause", function () {
                  null !== hlsPlayer && hlsPlayer.stopLoad();
                })),
                node.setAttribute("id", id),
                originalNode.parentNode.insertBefore(node, originalNode),
                (originalNode.autoplay = !1),
                (originalNode.style.display = "none"),
                (node.setSize = function (width, height) {
                  return (
                    (node.style.width = width + "px"),
                    (node.style.height = height + "px"),
                    node
                  );
                }),
                (node.hide = function () {
                  return node.pause(), (node.style.display = "none"), node;
                }),
                (node.show = function () {
                  return (node.style.display = ""), node;
                }),
                (node.destroy = function () {
                  null !== hlsPlayer &&
                    (hlsPlayer.stopLoad(), hlsPlayer.destroy());
                });
              var event = (0, _general.createEvent)("rendererready", node);
              return (
                mediaElement.dispatchEvent(event),
                mediaElement.promises.push(
                  NativeHls.load({ options: options.hls, id: id })
                ),
                node
              );
            },
          };
        _media.typeChecks.push(function (url) {
          return ~url.toLowerCase().indexOf(".m3u8")
            ? "application/x-mpegURL"
            : null;
        }),
          _renderer.renderer.add(HlsNativeRenderer);
      },
      { 25: 25, 26: 26, 27: 27, 28: 28, 3: 3, 7: 7, 8: 8 },
    ],
    23: [
      function (_dereq_, module, exports) {
        "use strict";
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var _window = _dereq_(3),
          _window2 = _interopRequireDefault(_window),
          _document = _dereq_(2),
          _document2 = _interopRequireDefault(_document),
          _mejs = _dereq_(7),
          _mejs2 = _interopRequireDefault(_mejs),
          _renderer = _dereq_(8),
          _general = _dereq_(27),
          _constants = _dereq_(25),
          HtmlMediaElement = {
            name: "html5",
            options: { prefix: "html5" },
            canPlayType: function (type) {
              var mediaElement = _document2["default"].createElement("video");
              return (_constants.IS_ANDROID && /\/mp(3|4)$/i.test(type)) ||
                (~[
                  "application/x-mpegurl",
                  "vnd.apple.mpegurl",
                  "audio/mpegurl",
                  "audio/hls",
                  "video/hls",
                ].indexOf(type.toLowerCase()) &&
                  _constants.SUPPORTS_NATIVE_HLS)
                ? "yes"
                : mediaElement.canPlayType
                ? mediaElement.canPlayType(type.toLowerCase()).replace(/no/, "")
                : "";
            },
            create: function (mediaElement, options, mediaFiles) {
              var id = mediaElement.id + "_" + options.prefix,
                isActive = !1,
                node = null;
              void 0 === mediaElement.originalNode ||
              null === mediaElement.originalNode
                ? ((node = _document2["default"].createElement("audio")),
                  mediaElement.appendChild(node))
                : (node = mediaElement.originalNode),
                node.setAttribute("id", id);
              for (
                var props = _mejs2["default"].html5media.properties,
                  assignGettersSetters = function (propName) {
                    var capName =
                      "" +
                      propName.substring(0, 1).toUpperCase() +
                      propName.substring(1);
                    (node["get" + capName] = function () {
                      return node[propName];
                    }),
                      (node["set" + capName] = function (value) {
                        _mejs2["default"].html5media.readOnlyProperties.indexOf(
                          propName
                        ) === -1 && (node[propName] = value);
                      });
                  },
                  i = 0,
                  _total = props.length;
                i < _total;
                i++
              )
                assignGettersSetters(props[i]);
              for (
                var events = _mejs2["default"].html5media.events.concat([
                    "click",
                    "mouseover",
                    "mouseout",
                  ]),
                  assignEvents = function (eventName) {
                    node.addEventListener(eventName, function (e) {
                      if (isActive) {
                        var _event = (0, _general.createEvent)(
                          e.type,
                          e.target
                        );
                        mediaElement.dispatchEvent(_event);
                      }
                    });
                  },
                  _i = 0,
                  _total2 = events.length;
                _i < _total2;
                _i++
              )
                assignEvents(events[_i]);
              (node.setSize = function (width, height) {
                return (
                  (node.style.width = width + "px"),
                  (node.style.height = height + "px"),
                  node
                );
              }),
                (node.hide = function () {
                  return (isActive = !1), (node.style.display = "none"), node;
                }),
                (node.show = function () {
                  return (isActive = !0), (node.style.display = ""), node;
                });
              var index = 0,
                total = mediaFiles.length;
              if (total > 0)
                for (; index < total; index++)
                  if (
                    _renderer.renderer.renderers[options.prefix].canPlayType(
                      mediaFiles[index].type
                    )
                  ) {
                    node.setAttribute("src", mediaFiles[index].src);
                    break;
                  }
              node.addEventListener("error", function (e) {
                4 === e.target.error.code &&
                  isActive &&
                  (index < total && void 0 !== mediaFiles[index + 1]
                    ? ((node.src = mediaFiles[index++].src),
                      node.load(),
                      node.play())
                    : mediaElement.generateError(
                        "Media error: Format(s) not supported or source(s) not found",
                        mediaFiles
                      ));
              });
              var event = (0, _general.createEvent)("rendererready", node);
              return mediaElement.dispatchEvent(event), node;
            },
          };
        (_window2["default"].HtmlMediaElement = _mejs2[
          "default"
        ].HtmlMediaElement =
          HtmlMediaElement),
          _renderer.renderer.add(HtmlMediaElement);
      },
      { 2: 2, 25: 25, 27: 27, 3: 3, 7: 7, 8: 8 },
    ],
    24: [
      function (_dereq_, module, exports) {
        "use strict";
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var _window = _dereq_(3),
          _window2 = _interopRequireDefault(_window),
          _document = _dereq_(2),
          _document2 = _interopRequireDefault(_document),
          _mejs = _dereq_(7),
          _mejs2 = _interopRequireDefault(_mejs),
          _renderer = _dereq_(8),
          _general = _dereq_(27),
          _media = _dereq_(28),
          _dom = _dereq_(26),
          YouTubeApi = {
            isIframeStarted: !1,
            isIframeLoaded: !1,
            iframeQueue: [],
            enqueueIframe: function (settings) {
              (YouTubeApi.isLoaded = "undefined" != typeof YT && YT.loaded),
                YouTubeApi.isLoaded
                  ? YouTubeApi.createIframe(settings)
                  : (YouTubeApi.loadIframeApi(),
                    YouTubeApi.iframeQueue.push(settings));
            },
            loadIframeApi: function () {
              YouTubeApi.isIframeStarted ||
                ((0, _dom.loadScript)("https://www.youtube.com/player_api"),
                (YouTubeApi.isIframeStarted = !0));
            },
            iFrameReady: function () {
              for (
                YouTubeApi.isLoaded = !0, YouTubeApi.isIframeLoaded = !0;
                YouTubeApi.iframeQueue.length > 0;

              ) {
                var settings = YouTubeApi.iframeQueue.pop();
                YouTubeApi.createIframe(settings);
              }
            },
            createIframe: function (settings) {
              return new YT.Player(settings.containerId, settings);
            },
            getYouTubeId: function (url) {
              var youTubeId = "";
              url.indexOf("?") > 0
                ? ((youTubeId = YouTubeApi.getYouTubeIdFromParam(url)),
                  "" === youTubeId &&
                    (youTubeId = YouTubeApi.getYouTubeIdFromUrl(url)))
                : (youTubeId = YouTubeApi.getYouTubeIdFromUrl(url));
              var id = youTubeId.substring(youTubeId.lastIndexOf("/") + 1);
              return (youTubeId = id.split("?")), youTubeId[0];
            },
            getYouTubeIdFromParam: function (url) {
              if (void 0 === url || null === url || !url.trim().length)
                return null;
              for (
                var parts = url.split("?"),
                  parameters = parts[1].split("&"),
                  youTubeId = "",
                  i = 0,
                  total = parameters.length;
                i < total;
                i++
              ) {
                var paramParts = parameters[i].split("=");
                if ("v" === paramParts[0]) {
                  youTubeId = paramParts[1];
                  break;
                }
              }
              return youTubeId;
            },
            getYouTubeIdFromUrl: function (url) {
              if (void 0 === url || null === url || !url.trim().length)
                return null;
              var parts = url.split("?");
              return (url = parts[0]), url.substring(url.lastIndexOf("/") + 1);
            },
            getYouTubeNoCookieUrl: function (url) {
              if (
                void 0 === url ||
                null === url ||
                !url.trim().length ||
                url.indexOf("//www.youtube") === -1
              )
                return url;
              var parts = url.split("/");
              return (
                (parts[2] = parts[2].replace(".com", "-nocookie.com")),
                parts.join("/")
              );
            },
          },
          YouTubeIframeRenderer = {
            name: "youtube_iframe",
            options: {
              prefix: "youtube_iframe",
              youtube: {
                autoplay: 0,
                controls: 0,
                disablekb: 1,
                end: 0,
                loop: 0,
                modestbranding: 0,
                playsinline: 0,
                rel: 0,
                showinfo: 0,
                start: 0,
                iv_load_policy: 3,
                nocookie: !1,
                imageQuality: null,
              },
            },
            canPlayType: function (type) {
              return ~["video/youtube", "video/x-youtube"].indexOf(
                type.toLowerCase()
              );
            },
            create: function (mediaElement, options, mediaFiles) {
              var youtube = {},
                apiStack = [],
                readyState = 4,
                youTubeApi = null,
                paused = !0,
                ended = !1,
                youTubeIframe = null,
                volume = 1;
              (youtube.options = options),
                (youtube.id = mediaElement.id + "_" + options.prefix),
                (youtube.mediaElement = mediaElement);
              for (
                var props = _mejs2["default"].html5media.properties,
                  assignGettersSetters = function (propName) {
                    var capName =
                      "" +
                      propName.substring(0, 1).toUpperCase() +
                      propName.substring(1);
                    (youtube["get" + capName] = function () {
                      if (null !== youTubeApi) {
                        var value = null;
                        switch (propName) {
                          case "currentTime":
                            return youTubeApi.getCurrentTime();
                          case "duration":
                            return youTubeApi.getDuration();
                          case "volume":
                            return (volume = youTubeApi.getVolume() / 100);
                          case "paused":
                            return paused;
                          case "ended":
                            return ended;
                          case "muted":
                            return youTubeApi.isMuted();
                          case "buffered":
                            var percentLoaded =
                                youTubeApi.getVideoLoadedFraction(),
                              duration = youTubeApi.getDuration();
                            return {
                              start: function () {
                                return 0;
                              },
                              end: function () {
                                return percentLoaded * duration;
                              },
                              length: 1,
                            };
                          case "src":
                            return youTubeApi.getVideoUrl();
                          case "readyState":
                            return readyState;
                        }
                        return value;
                      }
                      return null;
                    }),
                      (youtube["set" + capName] = function (value) {
                        if (null !== youTubeApi)
                          switch (propName) {
                            case "src":
                              var url =
                                  "string" == typeof value
                                    ? value
                                    : value[0].src,
                                _videoId = YouTubeApi.getYouTubeId(url);
                              mediaElement.originalNode.autoplay
                                ? youTubeApi.loadVideoById(_videoId)
                                : youTubeApi.cueVideoById(_videoId);
                              break;
                            case "currentTime":
                              youTubeApi.seekTo(value);
                              break;
                            case "muted":
                              value ? youTubeApi.mute() : youTubeApi.unMute(),
                                setTimeout(function () {
                                  var event = (0, _general.createEvent)(
                                    "volumechange",
                                    youtube
                                  );
                                  mediaElement.dispatchEvent(event);
                                }, 50);
                              break;
                            case "volume":
                              (volume = value),
                                youTubeApi.setVolume(100 * value),
                                setTimeout(function () {
                                  var event = (0, _general.createEvent)(
                                    "volumechange",
                                    youtube
                                  );
                                  mediaElement.dispatchEvent(event);
                                }, 50);
                              break;
                            case "readyState":
                              var event = (0, _general.createEvent)(
                                "canplay",
                                youtube
                              );
                              mediaElement.dispatchEvent(event);
                          }
                        else
                          apiStack.push({
                            type: "set",
                            propName: propName,
                            value: value,
                          });
                      });
                  },
                  i = 0,
                  total = props.length;
                i < total;
                i++
              )
                assignGettersSetters(props[i]);
              for (
                var methods = _mejs2["default"].html5media.methods,
                  assignMethods = function (methodName) {
                    youtube[methodName] = function () {
                      if (null !== youTubeApi)
                        switch (methodName) {
                          case "play":
                            return (paused = !1), youTubeApi.playVideo();
                          case "pause":
                            return (paused = !0), youTubeApi.pauseVideo();
                          case "load":
                            return null;
                        }
                      else
                        apiStack.push({ type: "call", methodName: methodName });
                    };
                  },
                  _i = 0,
                  _total = methods.length;
                _i < _total;
                _i++
              )
                assignMethods(methods[_i]);
              var youtubeContainer = _document2["default"].createElement("div");
              (youtubeContainer.id = youtube.id),
                youtube.options.youtube.nocookie &&
                  (mediaElement.originalNode.src =
                    YouTubeApi.getYouTubeNoCookieUrl(mediaFiles[0].src)),
                mediaElement.originalNode.parentNode.insertBefore(
                  youtubeContainer,
                  mediaElement.originalNode
                ),
                (mediaElement.originalNode.style.display = "none");
              var isAudio =
                  "audio" === mediaElement.originalNode.tagName.toLowerCase(),
                height = isAudio ? "1" : mediaElement.originalNode.height,
                width = isAudio ? "1" : mediaElement.originalNode.width,
                videoId = YouTubeApi.getYouTubeId(mediaFiles[0].src),
                youtubeSettings = {
                  id: youtube.id,
                  containerId: youtubeContainer.id,
                  videoId: videoId,
                  height: height,
                  width: width,
                  playerVars: Object.assign(
                    {
                      controls: 0,
                      rel: 0,
                      disablekb: 1,
                      showinfo: 0,
                      modestbranding: 0,
                      html5: 1,
                      iv_load_policy: 3,
                    },
                    youtube.options.youtube
                  ),
                  origin: _window2["default"].location.host,
                  events: {
                    onReady: function (e) {
                      if (
                        ((mediaElement.youTubeApi = youTubeApi = e.target),
                        (mediaElement.youTubeState = { paused: !0, ended: !1 }),
                        apiStack.length)
                      )
                        for (
                          var _i2 = 0, _total2 = apiStack.length;
                          _i2 < _total2;
                          _i2++
                        ) {
                          var stackItem = apiStack[_i2];
                          if ("set" === stackItem.type) {
                            var propName = stackItem.propName,
                              capName =
                                "" +
                                propName.substring(0, 1).toUpperCase() +
                                propName.substring(1);
                            youtube["set" + capName](stackItem.value);
                          } else
                            "call" === stackItem.type &&
                              youtube[stackItem.methodName]();
                        }
                      (youTubeIframe = youTubeApi.getIframe()),
                        mediaElement.originalNode.muted && youTubeApi.mute();
                      for (
                        var events = ["mouseover", "mouseout"],
                          assignEvents = function (e) {
                            var newEvent = (0, _general.createEvent)(
                              e.type,
                              youtube
                            );
                            mediaElement.dispatchEvent(newEvent);
                          },
                          _i3 = 0,
                          _total3 = events.length;
                        _i3 < _total3;
                        _i3++
                      )
                        youTubeIframe.addEventListener(
                          events[_i3],
                          assignEvents,
                          !1
                        );
                      for (
                        var initEvents = [
                            "rendererready",
                            "loadedmetadata",
                            "loadeddata",
                            "canplay",
                          ],
                          _i4 = 0,
                          _total4 = initEvents.length;
                        _i4 < _total4;
                        _i4++
                      ) {
                        var event = (0, _general.createEvent)(
                          initEvents[_i4],
                          youtube
                        );
                        mediaElement.dispatchEvent(event);
                      }
                    },
                    onStateChange: function (e) {
                      var events = [];
                      switch (e.data) {
                        case -1:
                          (events = ["loadedmetadata"]),
                            (paused = !0),
                            (ended = !1);
                          break;
                        case 0:
                          (events = ["ended"]),
                            (paused = !1),
                            (ended = !youtube.options.youtube.loop),
                            youtube.options.youtube.loop ||
                              youtube.stopInterval();
                          break;
                        case 1:
                          (events = ["play", "playing"]),
                            (paused = !1),
                            (ended = !1),
                            youtube.startInterval();
                          break;
                        case 2:
                          (events = ["pause"]),
                            (paused = !0),
                            (ended = !1),
                            youtube.stopInterval();
                          break;
                        case 3:
                          (events = ["progress"]), (ended = !1);
                          break;
                        case 5:
                          (events = [
                            "loadeddata",
                            "loadedmetadata",
                            "canplay",
                          ]),
                            (paused = !0),
                            (ended = !1);
                      }
                      for (
                        var _i5 = 0, _total5 = events.length;
                        _i5 < _total5;
                        _i5++
                      ) {
                        var event = (0, _general.createEvent)(
                          events[_i5],
                          youtube
                        );
                        mediaElement.dispatchEvent(event);
                      }
                    },
                    onError: function (e) {
                      var event = (0, _general.createEvent)("error", youtube);
                      (event.data = e.data), mediaElement.dispatchEvent(event);
                    },
                  },
                };
              return (
                (isAudio ||
                  mediaElement.originalNode.hasAttribute("playsinline")) &&
                  (youtubeSettings.playerVars.playsinline = 1),
                mediaElement.originalNode.controls &&
                  (youtubeSettings.playerVars.controls = 1),
                mediaElement.originalNode.autoplay &&
                  (youtubeSettings.playerVars.autoplay = 1),
                mediaElement.originalNode.loop &&
                  (youtubeSettings.playerVars.loop = 1),
                YouTubeApi.enqueueIframe(youtubeSettings),
                (youtube.onEvent = function (eventName, player, _youTubeState) {
                  null !== _youTubeState &&
                    void 0 !== _youTubeState &&
                    (mediaElement.youTubeState = _youTubeState);
                }),
                (youtube.setSize = function (width, height) {
                  null !== youTubeApi && youTubeApi.setSize(width, height);
                }),
                (youtube.hide = function () {
                  youtube.stopInterval(),
                    youtube.pause(),
                    youTubeIframe && (youTubeIframe.style.display = "none");
                }),
                (youtube.show = function () {
                  youTubeIframe && (youTubeIframe.style.display = "");
                }),
                (youtube.destroy = function () {
                  youTubeApi.destroy();
                }),
                (youtube.interval = null),
                (youtube.startInterval = function () {
                  youtube.interval = setInterval(function () {
                    var event = (0, _general.createEvent)(
                      "timeupdate",
                      youtube
                    );
                    mediaElement.dispatchEvent(event);
                  }, 250);
                }),
                (youtube.stopInterval = function () {
                  youtube.interval && clearInterval(youtube.interval);
                }),
                (youtube.getPosterUrl = function () {
                  var quality = options.youtube.imageQuality,
                    resolutions = [
                      "default",
                      "hqdefault",
                      "mqdefault",
                      "sddefault",
                      "maxresdefault",
                    ],
                    id = YouTubeApi.getYouTubeId(mediaElement.originalNode.src);
                  return quality && resolutions.indexOf(quality) > -1 && id
                    ? "https://img.youtube.com/vi/" +
                        id +
                        "/" +
                        quality +
                        ".jpg"
                    : "";
                }),
                youtube
              );
            },
          };
        (_window2["default"].onYouTubePlayerAPIReady = function () {
          YouTubeApi.iFrameReady();
        }),
          _media.typeChecks.push(function (url) {
            return /\/\/(www\.youtube|youtu\.?be)/i.test(url)
              ? "video/x-youtube"
              : null;
          }),
          _renderer.renderer.add(YouTubeIframeRenderer);
      },
      { 2: 2, 26: 26, 27: 27, 28: 28, 3: 3, 7: 7, 8: 8 },
    ],
    25: [
      function (_dereq_, module, exports) {
        "use strict";
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.cancelFullScreen =
            exports.requestFullScreen =
            exports.isFullScreen =
            exports.FULLSCREEN_EVENT_NAME =
            exports.HAS_NATIVE_FULLSCREEN_ENABLED =
            exports.HAS_TRUE_NATIVE_FULLSCREEN =
            exports.HAS_IOS_FULLSCREEN =
            exports.HAS_MS_NATIVE_FULLSCREEN =
            exports.HAS_MOZ_NATIVE_FULLSCREEN =
            exports.HAS_WEBKIT_NATIVE_FULLSCREEN =
            exports.HAS_NATIVE_FULLSCREEN =
            exports.SUPPORTS_NATIVE_HLS =
            exports.SUPPORT_PASSIVE_EVENT =
            exports.SUPPORT_POINTER_EVENTS =
            exports.HAS_MSE =
            exports.IS_STOCK_ANDROID =
            exports.IS_SAFARI =
            exports.IS_FIREFOX =
            exports.IS_CHROME =
            exports.IS_EDGE =
            exports.IS_IE =
            exports.IS_ANDROID =
            exports.IS_IOS =
            exports.IS_IPOD =
            exports.IS_IPHONE =
            exports.IS_IPAD =
            exports.UA =
            exports.NAV =
              void 0);
        for (
          var _window = _dereq_(3),
            _window2 = _interopRequireDefault(_window),
            _document = _dereq_(2),
            _document2 = _interopRequireDefault(_document),
            _mejs = _dereq_(7),
            _mejs2 = _interopRequireDefault(_mejs),
            NAV = (exports.NAV = _window2["default"].navigator),
            UA = (exports.UA = NAV.userAgent.toLowerCase()),
            IS_IPAD = (exports.IS_IPAD =
              /ipad/i.test(UA) && !_window2["default"].MSStream),
            IS_IPHONE = (exports.IS_IPHONE =
              /iphone/i.test(UA) && !_window2["default"].MSStream),
            IS_IPOD = (exports.IS_IPOD =
              /ipod/i.test(UA) && !_window2["default"].MSStream),
            IS_ANDROID =
              ((exports.IS_IOS =
                /ipad|iphone|ipod/i.test(UA) && !_window2["default"].MSStream),
              (exports.IS_ANDROID = /android/i.test(UA))),
            IS_IE = (exports.IS_IE = /(trident|microsoft)/i.test(NAV.appName)),
            IS_EDGE = (exports.IS_EDGE =
              ("msLaunchUri" in NAV) &&
              !("documentMode" in _document2["default"])),
            IS_CHROME = (exports.IS_CHROME = /chrome/i.test(UA)),
            IS_FIREFOX = (exports.IS_FIREFOX = /firefox/i.test(UA)),
            IS_SAFARI = (exports.IS_SAFARI = /safari/i.test(UA) && !IS_CHROME),
            IS_STOCK_ANDROID = (exports.IS_STOCK_ANDROID =
              /^mozilla\/\d+\.\d+\s\(linux;\su;/i.test(UA)),
            HAS_MSE = (exports.HAS_MSE =
              ("MediaSource" in _window2["default"])),
            SUPPORT_POINTER_EVENTS = (exports.SUPPORT_POINTER_EVENTS =
              (function () {
                var element = _document2["default"].createElement("x"),
                  documentElement = _document2["default"].documentElement,
                  getComputedStyle = _window2["default"].getComputedStyle;
                if (!("pointerEvents" in element.style)) return !1;
                (element.style.pointerEvents = "auto"),
                  (element.style.pointerEvents = "x"),
                  documentElement.appendChild(element);
                var supports =
                  getComputedStyle &&
                  "auto" === getComputedStyle(element, "").pointerEvents;
                return element.remove(), !!supports;
              })()),
            SUPPORT_PASSIVE_EVENT = (exports.SUPPORT_PASSIVE_EVENT =
              (function () {
                var supportsPassive = !1;
                try {
                  var opts = Object.defineProperty({}, "passive", {
                    get: function () {
                      supportsPassive = !0;
                    },
                  });
                  _window2["default"].addEventListener("test", null, opts);
                } catch (e) {}
                return supportsPassive;
              })()),
            html5Elements = ["source", "track", "audio", "video"],
            video = void 0,
            i = 0,
            total = html5Elements.length;
          i < total;
          i++
        )
          video = _document2["default"].createElement(html5Elements[i]);
        var SUPPORTS_NATIVE_HLS = (exports.SUPPORTS_NATIVE_HLS =
            IS_SAFARI ||
            (IS_ANDROID && (IS_CHROME || IS_STOCK_ANDROID)) ||
            (IS_IE && /edge/i.test(UA))),
          hasiOSFullScreen = void 0 !== video.webkitEnterFullscreen,
          hasNativeFullscreen = void 0 !== video.requestFullscreen;
        hasiOSFullScreen &&
          /mac os x 10_5/i.test(UA) &&
          ((hasNativeFullscreen = !1), (hasiOSFullScreen = !1));
        var hasWebkitNativeFullScreen =
            void 0 !== video.webkitRequestFullScreen,
          hasMozNativeFullScreen = void 0 !== video.mozRequestFullScreen,
          hasMsNativeFullScreen = void 0 !== video.msRequestFullscreen,
          hasTrueNativeFullScreen =
            hasWebkitNativeFullScreen ||
            hasMozNativeFullScreen ||
            hasMsNativeFullScreen,
          nativeFullScreenEnabled = hasTrueNativeFullScreen,
          fullScreenEventName = "",
          isFullScreen = void 0,
          requestFullScreen = void 0,
          cancelFullScreen = void 0;
        hasMozNativeFullScreen
          ? (nativeFullScreenEnabled =
              _document2["default"].mozFullScreenEnabled)
          : hasMsNativeFullScreen &&
            (nativeFullScreenEnabled =
              _document2["default"].msFullscreenEnabled),
          IS_CHROME && (hasiOSFullScreen = !1),
          hasTrueNativeFullScreen &&
            (hasWebkitNativeFullScreen
              ? (fullScreenEventName = "webkitfullscreenchange")
              : hasMozNativeFullScreen
              ? (fullScreenEventName = "mozfullscreenchange")
              : hasMsNativeFullScreen &&
                (fullScreenEventName = "MSFullscreenChange"),
            (exports.isFullScreen = isFullScreen =
              function () {
                return hasMozNativeFullScreen
                  ? _document2["default"].mozFullScreen
                  : hasWebkitNativeFullScreen
                  ? _document2["default"].webkitIsFullScreen
                  : hasMsNativeFullScreen
                  ? null !== _document2["default"].msFullscreenElement
                  : void 0;
              }),
            (exports.requestFullScreen = requestFullScreen =
              function (el) {
                hasWebkitNativeFullScreen
                  ? el.webkitRequestFullScreen()
                  : hasMozNativeFullScreen
                  ? el.mozRequestFullScreen()
                  : hasMsNativeFullScreen && el.msRequestFullscreen();
              }),
            (exports.cancelFullScreen = cancelFullScreen =
              function () {
                hasWebkitNativeFullScreen
                  ? _document2["default"].webkitCancelFullScreen()
                  : hasMozNativeFullScreen
                  ? _document2["default"].mozCancelFullScreen()
                  : hasMsNativeFullScreen &&
                    _document2["default"].msExitFullscreen();
              }));
        var HAS_NATIVE_FULLSCREEN = (exports.HAS_NATIVE_FULLSCREEN =
            hasNativeFullscreen),
          HAS_WEBKIT_NATIVE_FULLSCREEN = (exports.HAS_WEBKIT_NATIVE_FULLSCREEN =
            hasWebkitNativeFullScreen),
          HAS_MOZ_NATIVE_FULLSCREEN = (exports.HAS_MOZ_NATIVE_FULLSCREEN =
            hasMozNativeFullScreen),
          HAS_MS_NATIVE_FULLSCREEN = (exports.HAS_MS_NATIVE_FULLSCREEN =
            hasMsNativeFullScreen),
          HAS_IOS_FULLSCREEN = (exports.HAS_IOS_FULLSCREEN = hasiOSFullScreen),
          HAS_TRUE_NATIVE_FULLSCREEN = (exports.HAS_TRUE_NATIVE_FULLSCREEN =
            hasTrueNativeFullScreen),
          HAS_NATIVE_FULLSCREEN_ENABLED =
            (exports.HAS_NATIVE_FULLSCREEN_ENABLED = nativeFullScreenEnabled),
          FULLSCREEN_EVENT_NAME = (exports.FULLSCREEN_EVENT_NAME =
            fullScreenEventName);
        (exports.isFullScreen = isFullScreen),
          (exports.requestFullScreen = requestFullScreen),
          (exports.cancelFullScreen = cancelFullScreen),
          (_mejs2["default"].Features = _mejs2["default"].Features || {}),
          (_mejs2["default"].Features.isiPad = IS_IPAD),
          (_mejs2["default"].Features.isiPod = IS_IPOD),
          (_mejs2["default"].Features.isiPhone = IS_IPHONE),
          (_mejs2["default"].Features.isiOS =
            _mejs2["default"].Features.isiPhone ||
            _mejs2["default"].Features.isiPad),
          (_mejs2["default"].Features.isAndroid = IS_ANDROID),
          (_mejs2["default"].Features.isIE = IS_IE),
          (_mejs2["default"].Features.isEdge = IS_EDGE),
          (_mejs2["default"].Features.isChrome = IS_CHROME),
          (_mejs2["default"].Features.isFirefox = IS_FIREFOX),
          (_mejs2["default"].Features.isSafari = IS_SAFARI),
          (_mejs2["default"].Features.isStockAndroid = IS_STOCK_ANDROID),
          (_mejs2["default"].Features.hasMSE = HAS_MSE),
          (_mejs2["default"].Features.supportsNativeHLS = SUPPORTS_NATIVE_HLS),
          (_mejs2["default"].Features.supportsPointerEvents =
            SUPPORT_POINTER_EVENTS),
          (_mejs2["default"].Features.supportsPassiveEvent =
            SUPPORT_PASSIVE_EVENT),
          (_mejs2["default"].Features.hasiOSFullScreen = HAS_IOS_FULLSCREEN),
          (_mejs2["default"].Features.hasNativeFullscreen =
            HAS_NATIVE_FULLSCREEN),
          (_mejs2["default"].Features.hasWebkitNativeFullScreen =
            HAS_WEBKIT_NATIVE_FULLSCREEN),
          (_mejs2["default"].Features.hasMozNativeFullScreen =
            HAS_MOZ_NATIVE_FULLSCREEN),
          (_mejs2["default"].Features.hasMsNativeFullScreen =
            HAS_MS_NATIVE_FULLSCREEN),
          (_mejs2["default"].Features.hasTrueNativeFullScreen =
            HAS_TRUE_NATIVE_FULLSCREEN),
          (_mejs2["default"].Features.nativeFullScreenEnabled =
            HAS_NATIVE_FULLSCREEN_ENABLED),
          (_mejs2["default"].Features.fullScreenEventName =
            FULLSCREEN_EVENT_NAME),
          (_mejs2["default"].Features.isFullScreen = isFullScreen),
          (_mejs2["default"].Features.requestFullScreen = requestFullScreen),
          (_mejs2["default"].Features.cancelFullScreen = cancelFullScreen);
      },
      { 2: 2, 3: 3, 7: 7 },
    ],
    26: [
      function (_dereq_, module, exports) {
        "use strict";
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function loadScript(url) {
          return new Promise(function (resolve, reject) {
            var script = _document2["default"].createElement("script");
            (script.src = url),
              (script.async = !0),
              (script.onload = function () {
                script.remove(), resolve();
              }),
              (script.onerror = function () {
                script.remove(), reject();
              }),
              _document2["default"].head.appendChild(script);
          });
        }
        function offset(el) {
          var rect = el.getBoundingClientRect(),
            scrollLeft =
              _window2["default"].pageXOffset ||
              _document2["default"].documentElement.scrollLeft,
            scrollTop =
              _window2["default"].pageYOffset ||
              _document2["default"].documentElement.scrollTop;
          return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
        }
        function toggleClass(el, className) {
          hasClass(el, className)
            ? removeClass(el, className)
            : addClass(el, className);
        }
        function fadeOut(el) {
          var duration =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 400,
            callback = arguments[2];
          el.style.opacity || (el.style.opacity = 1);
          var start = null;
          _window2["default"].requestAnimationFrame(function animate(
            timestamp
          ) {
            start = start || timestamp;
            var progress = timestamp - start,
              opacity = parseFloat(1 - progress / duration, 2);
            (el.style.opacity = opacity < 0 ? 0 : opacity),
              progress > duration
                ? callback && "function" == typeof callback && callback()
                : _window2["default"].requestAnimationFrame(animate);
          });
        }
        function fadeIn(el) {
          var duration =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 400,
            callback = arguments[2];
          el.style.opacity || (el.style.opacity = 0);
          var start = null;
          _window2["default"].requestAnimationFrame(function animate(
            timestamp
          ) {
            start = start || timestamp;
            var progress = timestamp - start,
              opacity = parseFloat(progress / duration, 2);
            (el.style.opacity = opacity > 1 ? 1 : opacity),
              progress > duration
                ? callback && "function" == typeof callback && callback()
                : _window2["default"].requestAnimationFrame(animate);
          });
        }
        function siblings(el, filter) {
          var siblings = [];
          el = el.parentNode.firstChild;
          do (filter && !filter(el)) || siblings.push(el);
          while ((el = el.nextSibling));
          return siblings;
        }
        function visible(elem) {
          return void 0 !== elem.getClientRects &&
            "function" === elem.getClientRects
            ? !!(
                elem.offsetWidth ||
                elem.offsetHeight ||
                elem.getClientRects().length
              )
            : !(!elem.offsetWidth && !elem.offsetHeight);
        }
        function ajax(url, dataType, success, error) {
          var xhr = _window2["default"].XMLHttpRequest
              ? new XMLHttpRequest()
              : new ActiveXObject("Microsoft.XMLHTTP"),
            type = "application/x-www-form-urlencoded; charset=UTF-8",
            completed = !1,
            accept = "*/".concat("*");
          switch (dataType) {
            case "text":
              type = "text/plain";
              break;
            case "json":
              type = "application/json, text/javascript";
              break;
            case "html":
              type = "text/html";
              break;
            case "xml":
              type = "application/xml, text/xml";
          }
          "application/x-www-form-urlencoded" !== type &&
            (accept = type + ", */*; q=0.01"),
            xhr &&
              (xhr.open("GET", url, !0),
              xhr.setRequestHeader("Accept", accept),
              (xhr.onreadystatechange = function () {
                if (!completed && 4 === xhr.readyState)
                  if (200 === xhr.status) {
                    completed = !0;
                    var data = void 0;
                    switch (dataType) {
                      case "json":
                        data = JSON.parse(xhr.responseText);
                        break;
                      case "xml":
                        data = xhr.responseXML;
                        break;
                      default:
                        data = xhr.responseText;
                    }
                    success(data);
                  } else "function" == typeof error && error(xhr.status);
              }),
              xhr.send());
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.removeClass = exports.addClass = exports.hasClass = void 0),
          (exports.loadScript = loadScript),
          (exports.offset = offset),
          (exports.toggleClass = toggleClass),
          (exports.fadeOut = fadeOut),
          (exports.fadeIn = fadeIn),
          (exports.siblings = siblings),
          (exports.visible = visible),
          (exports.ajax = ajax);
        var _window = _dereq_(3),
          _window2 = _interopRequireDefault(_window),
          _document = _dereq_(2),
          _document2 = _interopRequireDefault(_document),
          _mejs = _dereq_(7),
          _mejs2 = _interopRequireDefault(_mejs),
          hasClassMethod = void 0,
          addClassMethod = void 0,
          removeClassMethod = void 0;
        "classList" in _document2["default"].documentElement
          ? ((hasClassMethod = function (el, className) {
              return (
                void 0 !== el.classList && el.classList.contains(className)
              );
            }),
            (addClassMethod = function (el, className) {
              return el.classList.add(className);
            }),
            (removeClassMethod = function (el, className) {
              return el.classList.remove(className);
            }))
          : ((hasClassMethod = function (el, className) {
              return new RegExp("\\b" + className + "\\b").test(el.className);
            }),
            (addClassMethod = function (el, className) {
              hasClass(el, className) || (el.className += " " + className);
            }),
            (removeClassMethod = function (el, className) {
              el.className = el.className.replace(
                new RegExp("\\b" + className + "\\b", "g"),
                ""
              );
            }));
        var hasClass = (exports.hasClass = hasClassMethod),
          addClass = (exports.addClass = addClassMethod),
          removeClass = (exports.removeClass = removeClassMethod);
        (_mejs2["default"].Utils = _mejs2["default"].Utils || {}),
          (_mejs2["default"].Utils.offset = offset),
          (_mejs2["default"].Utils.hasClass = hasClass),
          (_mejs2["default"].Utils.addClass = addClass),
          (_mejs2["default"].Utils.removeClass = removeClass),
          (_mejs2["default"].Utils.toggleClass = toggleClass),
          (_mejs2["default"].Utils.fadeIn = fadeIn),
          (_mejs2["default"].Utils.fadeOut = fadeOut),
          (_mejs2["default"].Utils.siblings = siblings),
          (_mejs2["default"].Utils.visible = visible),
          (_mejs2["default"].Utils.ajax = ajax),
          (_mejs2["default"].Utils.loadScript = loadScript);
      },
      { 2: 2, 3: 3, 7: 7 },
    ],
    27: [
      function (_dereq_, module, exports) {
        "use strict";
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function escapeHTML(input) {
          if ("string" != typeof input)
            throw new Error("Argument passed must be a string");
          var map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
          return input.replace(/[&<>"]/g, function (c) {
            return map[c];
          });
        }
        function debounce(func, wait) {
          var _this = this,
            _arguments = arguments,
            immediate =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if ("function" != typeof func)
            throw new Error("First argument must be a function");
          if ("number" != typeof wait)
            throw new Error("Second argument must be a numeric value");
          var timeout = void 0;
          return function () {
            var context = _this,
              args = _arguments,
              later = function () {
                (timeout = null), immediate || func.apply(context, args);
              },
              callNow = immediate && !timeout;
            clearTimeout(timeout),
              (timeout = setTimeout(later, wait)),
              callNow && func.apply(context, args);
          };
        }
        function isObjectEmpty(instance) {
          return Object.getOwnPropertyNames(instance).length <= 0;
        }
        function splitEvents(events, id) {
          var rwindow =
              /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/,
            ret = { d: [], w: [] };
          return (
            (events || "").split(" ").forEach(function (v) {
              var eventName = "" + v + (id ? "." + id : "");
              eventName.startsWith(".")
                ? (ret.d.push(eventName), ret.w.push(eventName))
                : ret[rwindow.test(v) ? "w" : "d"].push(eventName);
            }),
            (ret.d = ret.d.join(" ")),
            (ret.w = ret.w.join(" ")),
            ret
          );
        }
        function createEvent(eventName, target) {
          if ("string" != typeof eventName)
            throw new Error("Event name must be a string");
          var eventFrags = eventName.match(/([a-z]+\.([a-z]+))/i),
            detail = { target: target };
          return (
            null !== eventFrags &&
              ((eventName = eventFrags[1]), (detail.namespace = eventFrags[2])),
            new window.CustomEvent(eventName, { detail: detail })
          );
        }
        function isNodeAfter(sourceNode, targetNode) {
          return !!(
            sourceNode &&
            targetNode &&
            2 & sourceNode.compareDocumentPosition(targetNode)
          );
        }
        function isString(value) {
          return "string" == typeof value;
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.escapeHTML = escapeHTML),
          (exports.debounce = debounce),
          (exports.isObjectEmpty = isObjectEmpty),
          (exports.splitEvents = splitEvents),
          (exports.createEvent = createEvent),
          (exports.isNodeAfter = isNodeAfter),
          (exports.isString = isString);
        var _mejs = _dereq_(7),
          _mejs2 = _interopRequireDefault(_mejs);
        (_mejs2["default"].Utils = _mejs2["default"].Utils || {}),
          (_mejs2["default"].Utils.escapeHTML = escapeHTML),
          (_mejs2["default"].Utils.debounce = debounce),
          (_mejs2["default"].Utils.isObjectEmpty = isObjectEmpty),
          (_mejs2["default"].Utils.splitEvents = splitEvents),
          (_mejs2["default"].Utils.createEvent = createEvent),
          (_mejs2["default"].Utils.isNodeAfter = isNodeAfter),
          (_mejs2["default"].Utils.isString = isString);
      },
      { 7: 7 },
    ],
    28: [
      function (_dereq_, module, exports) {
        "use strict";
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              };
        }
        function absolutizeUrl(url) {
          if ("string" != typeof url)
            throw new Error("`url` argument must be a string");
          var el = document.createElement("div");
          return (
            (el.innerHTML =
              '<a href="' + (0, _general.escapeHTML)(url) + '">x</a>'),
            el.firstChild.href
          );
        }
        function formatType(url) {
          var type =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
          return url && !type ? getTypeFromFile(url) : type;
        }
        function getMimeFromType(type) {
          if ("string" != typeof type)
            throw new Error("`type` argument must be a string");
          return type && type.indexOf(";") > -1
            ? type.substr(0, type.indexOf(";"))
            : type;
        }
        function getTypeFromFile(url) {
          if ("string" != typeof url)
            throw new Error("`url` argument must be a string");
          for (var i = 0, total = typeChecks.length; i < total; i++) {
            var type = typeChecks[i](url);
            if (type) return type;
          }
          var ext = getExtension(url),
            normalizedExt = normalizeExtension(ext),
            mime = "video/mp4";
          return (
            normalizedExt &&
              (~[
                "mp4",
                "m4v",
                "ogg",
                "ogv",
                "webm",
                "flv",
                "mpeg",
                "mov",
              ].indexOf(normalizedExt)
                ? (mime = "video/" + normalizedExt)
                : ~["mp3", "oga", "wav", "mid", "midi"].indexOf(
                    normalizedExt
                  ) && (mime = "audio/" + normalizedExt)),
            mime
          );
        }
        function getExtension(url) {
          if ("string" != typeof url)
            throw new Error("`url` argument must be a string");
          var baseUrl = url.split("?")[0],
            baseName = baseUrl.split("\\").pop().split("/").pop();
          return ~baseName.indexOf(".")
            ? baseName.substring(baseName.lastIndexOf(".") + 1)
            : "";
        }
        function normalizeExtension(extension) {
          if ("string" != typeof extension)
            throw new Error("`extension` argument must be a string");
          switch (extension) {
            case "mp4":
            case "m4v":
              return "mp4";
            case "webm":
            case "webma":
            case "webmv":
              return "webm";
            case "ogg":
            case "oga":
            case "ogv":
              return "ogg";
            default:
              return extension;
          }
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.typeChecks = void 0),
          (exports.absolutizeUrl = absolutizeUrl),
          (exports.formatType = formatType),
          (exports.getMimeFromType = getMimeFromType),
          (exports.getTypeFromFile = getTypeFromFile),
          (exports.getExtension = getExtension),
          (exports.normalizeExtension = normalizeExtension);
        var _mejs = _dereq_(7),
          _mejs2 = _interopRequireDefault(_mejs),
          _general = _dereq_(27),
          typeChecks = (exports.typeChecks = []);
        (_mejs2["default"].Utils = _mejs2["default"].Utils || {}),
          (_mejs2["default"].Utils.typeChecks = typeChecks),
          (_mejs2["default"].Utils.absolutizeUrl = absolutizeUrl),
          (_mejs2["default"].Utils.formatType = formatType),
          (_mejs2["default"].Utils.getMimeFromType = getMimeFromType),
          (_mejs2["default"].Utils.getTypeFromFile = getTypeFromFile),
          (_mejs2["default"].Utils.getExtension = getExtension),
          (_mejs2["default"].Utils.normalizeExtension = normalizeExtension);
      },
      { 27: 27, 7: 7 },
    ],
    29: [
      function (_dereq_, module, exports) {
        "use strict";
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        var _document = _dereq_(2),
          _document2 = _interopRequireDefault(_document),
          _promisePolyfill = _dereq_(4),
          _promisePolyfill2 = _interopRequireDefault(_promisePolyfill);
        if (
          ((function (arr) {
            arr.forEach(function (item) {
              item.hasOwnProperty("remove") ||
                Object.defineProperty(item, "remove", {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  value: function () {
                    this.parentNode.removeChild(this);
                  },
                });
            });
          })([
            Element.prototype,
            CharacterData.prototype,
            DocumentType.prototype,
          ]),
          (function () {
            function CustomEvent(event, params) {
              params = params || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0,
              };
              var evt = _document2["default"].createEvent("CustomEvent");
              return (
                evt.initCustomEvent(
                  event,
                  params.bubbles,
                  params.cancelable,
                  params.detail
                ),
                evt
              );
            }
            return (
              "function" != typeof window.CustomEvent &&
              ((CustomEvent.prototype = window.Event.prototype),
              void (window.CustomEvent = CustomEvent))
            );
          })(),
          "function" != typeof Object.assign &&
            (Object.assign = function (target) {
              if (null === target || void 0 === target)
                throw new TypeError(
                  "Cannot convert undefined or null to object"
                );
              for (
                var to = Object(target), index = 1, total = arguments.length;
                index < total;
                index++
              ) {
                var nextSource = arguments[index];
                if (null !== nextSource)
                  for (var nextKey in nextSource)
                    Object.prototype.hasOwnProperty.call(nextSource, nextKey) &&
                      (to[nextKey] = nextSource[nextKey]);
              }
              return to;
            }),
          String.prototype.startsWith ||
            (String.prototype.startsWith = function (searchString, position) {
              return (
                (position = position || 0),
                this.substr(position, searchString.length) === searchString
              );
            }),
          Element.prototype.matches ||
            (Element.prototype.matches =
              Element.prototype.matchesSelector ||
              Element.prototype.mozMatchesSelector ||
              Element.prototype.msMatchesSelector ||
              Element.prototype.oMatchesSelector ||
              Element.prototype.webkitMatchesSelector ||
              function (s) {
                for (
                  var matches = (
                      this.document || this.ownerDocument
                    ).querySelectorAll(s),
                    i = matches.length - 1;
                  --i >= 0 && matches.item(i) !== this;

                );
                return i > -1;
              }),
          window.Element &&
            !Element.prototype.closest &&
            (Element.prototype.closest = function (s) {
              var matches = (
                  this.document || this.ownerDocument
                ).querySelectorAll(s),
                i = void 0,
                el = this;
              do for (i = matches.length; --i >= 0 && matches.item(i) !== el; );
              while (i < 0 && (el = el.parentElement));
              return el;
            }),
          (function () {
            for (
              var lastTime = 0, vendors = ["ms", "moz", "webkit", "o"], x = 0;
              x < vendors.length && !window.requestAnimationFrame;
              ++x
            )
              (window.requestAnimationFrame =
                window[vendors[x] + "RequestAnimationFrame"]),
                (window.cancelAnimationFrame =
                  window[vendors[x] + "CancelAnimationFrame"] ||
                  window[vendors[x] + "CancelRequestAnimationFrame"]);
            window.requestAnimationFrame ||
              (window.requestAnimationFrame = function (callback) {
                var currTime = new Date().getTime(),
                  timeToCall = Math.max(0, 16 - (currTime - lastTime)),
                  id = window.setTimeout(function () {
                    callback(currTime + timeToCall);
                  }, timeToCall);
                return (lastTime = currTime + timeToCall), id;
              }),
              window.cancelAnimationFrame ||
                (window.cancelAnimationFrame = function (id) {
                  clearTimeout(id);
                });
          })(),
          /firefox/i.test(navigator.userAgent))
        ) {
          var getComputedStyle = window.getComputedStyle;
          window.getComputedStyle = function (el, pseudoEl) {
            var t = getComputedStyle(el, pseudoEl);
            return null === t ? { getPropertyValue: function () {} } : t;
          };
        }
        window.Promise || (window.Promise = _promisePolyfill2["default"]),
          (function (constructor) {
            constructor &&
              constructor.prototype &&
              null === constructor.prototype.children &&
              Object.defineProperty(constructor.prototype, "children", {
                get: function () {
                  for (
                    var i = 0,
                      node = void 0,
                      nodes = this.childNodes,
                      children = [];
                    (node = nodes[i++]);

                  )
                    1 === node.nodeType && children.push(node);
                  return children;
                },
              });
          })(window.Node || window.Element);
      },
      { 2: 2, 4: 4 },
    ],
    30: [
      function (_dereq_, module, exports) {
        "use strict";
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj };
        }
        function isDropFrame() {
          var fps =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
          return !(fps % 1 === 0);
        }
        function secondsToTimeCode(time) {
          var forceHours =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            showFrameCount =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            fps =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 25,
            secondsDecimalLength =
              arguments.length > 4 && void 0 !== arguments[4]
                ? arguments[4]
                : 0;
          time = !time || "number" != typeof time || time < 0 ? 0 : time;
          var dropFrames = Math.round(0.066666 * fps),
            timeBase = Math.round(fps),
            framesPer24Hours = 24 * Math.round(3600 * fps),
            framesPer10Minutes = Math.round(600 * fps),
            frameSep = isDropFrame(fps) ? ";" : ":",
            hours = void 0,
            minutes = void 0,
            seconds = void 0,
            frames = void 0,
            f = Math.round(time * fps);
          if (isDropFrame(fps)) {
            f < 0 && (f = framesPer24Hours + f), (f %= framesPer24Hours);
            var d = Math.floor(f / framesPer10Minutes),
              m = f % framesPer10Minutes;
            (f += 9 * dropFrames * d),
              m > dropFrames &&
                (f +=
                  dropFrames *
                  Math.floor(
                    (m - dropFrames) / Math.round(60 * timeBase - dropFrames)
                  ));
            var timeBaseDivision = Math.floor(f / timeBase);
            (hours = Math.floor(Math.floor(timeBaseDivision / 60) / 60)),
              (minutes = Math.floor(timeBaseDivision / 60) % 60),
              (seconds = showFrameCount
                ? timeBaseDivision % 60
                : ((f / timeBase) % 60).toFixed(secondsDecimalLength));
          } else
            (hours = Math.floor(time / 3600) % 24),
              (minutes = Math.floor(time / 60) % 60),
              (seconds = showFrameCount
                ? Math.floor(time % 60)
                : (time % 60).toFixed(secondsDecimalLength));
          (hours = hours <= 0 ? 0 : hours),
            (minutes = minutes <= 0 ? 0 : minutes),
            (seconds = seconds <= 0 ? 0 : seconds);
          var result =
            forceHours || hours > 0
              ? (hours < 10 ? "0" + hours : hours) + ":"
              : "";
          return (
            (result += (minutes < 10 ? "0" + minutes : minutes) + ":"),
            (result += "" + (seconds < 10 ? "0" + seconds : seconds)),
            showFrameCount &&
              ((frames = (f % timeBase).toFixed(0)),
              (frames = frames <= 0 ? 0 : frames),
              (result +=
                frames < 10
                  ? frameSep + "0" + frames
                  : "" + frameSep + frames)),
            result
          );
        }
        function timeCodeToSeconds(time) {
          var fps =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 25;
          if ("string" != typeof time)
            throw new TypeError("Time must be a string");
          if (
            (time.indexOf(";") > 0 && (time = time.replace(";", ":")),
            !/\d{2}(\:\d{2}){0,3}/i.test(time))
          )
            throw new TypeError("Time code must have the format `00:00:00`");
          var parts = time.split(":"),
            output = void 0,
            hours = 0,
            minutes = 0,
            seconds = 0,
            frames = 0,
            totalMinutes = 0,
            dropFrames = Math.round(0.066666 * fps),
            timeBase = Math.round(fps),
            hFrames = 3600 * timeBase,
            mFrames = 60 * timeBase;
          switch (parts.length) {
            default:
            case 1:
              seconds = parseInt(parts[0], 10);
              break;
            case 2:
              (minutes = parseInt(parts[0], 10)),
                (seconds = parseInt(parts[1], 10));
              break;
            case 3:
              (hours = parseInt(parts[0], 10)),
                (minutes = parseInt(parts[1], 10)),
                (seconds = parseInt(parts[2], 10));
              break;
            case 4:
              (hours = parseInt(parts[0], 10)),
                (minutes = parseInt(parts[1], 10)),
                (seconds = parseInt(parts[2], 10)),
                (frames = parseInt(parts[3], 10));
          }
          return (
            isDropFrame(fps)
              ? ((totalMinutes = 60 * hours + minutes),
                (output =
                  hFrames * hours +
                  mFrames * minutes +
                  timeBase * seconds +
                  frames -
                  dropFrames * (totalMinutes - Math.floor(totalMinutes / 10))))
              : (output =
                  (hFrames * hours +
                    mFrames * minutes +
                    fps * seconds +
                    frames) /
                  fps),
            parseFloat(output.toFixed(3))
          );
        }
        function calculateTimeFormat(time, options) {
          var fps =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 25;
          time = !time || "number" != typeof time || time < 0 ? 0 : time;
          for (
            var hours = Math.floor(time / 3600) % 24,
              minutes = Math.floor(time / 60) % 60,
              seconds = Math.floor(time % 60),
              frames = Math.floor(((time % 1) * fps).toFixed(3)),
              lis = [
                [frames, "f"],
                [seconds, "s"],
                [minutes, "m"],
                [hours, "h"],
              ],
              format = options.timeFormat,
              firstTwoPlaces = format[1] === format[0],
              separatorIndex = firstTwoPlaces ? 2 : 1,
              separator =
                format.length < separatorIndex ? format[separatorIndex] : ":",
              firstChar = format[0],
              required = !1,
              i = 0,
              len = lis.length;
            i < len;
            i++
          )
            if (~format.indexOf(lis[i][1])) required = !0;
            else if (required) {
              for (var hasNextValue = !1, j = i; j < len; j++)
                if (lis[j][0] > 0) {
                  hasNextValue = !0;
                  break;
                }
              if (!hasNextValue) break;
              firstTwoPlaces || (format = firstChar + format),
                (format = lis[i][1] + separator + format),
                firstTwoPlaces && (format = lis[i][1] + format),
                (firstChar = lis[i][1]);
            }
          options.currentTimeFormat = format;
        }
        function convertSMPTEtoSeconds(SMPTE) {
          if ("string" != typeof SMPTE)
            throw new TypeError("Argument must be a string value");
          SMPTE = SMPTE.replace(",", ".");
          var decimalLen = ~SMPTE.indexOf(".") ? SMPTE.split(".")[1].length : 0,
            secs = 0,
            multiplier = 1;
          SMPTE = SMPTE.split(":").reverse();
          for (var i = 0, total = SMPTE.length; i < total; i++)
            (multiplier = 1),
              i > 0 && (multiplier = Math.pow(60, i)),
              (secs += Number(SMPTE[i]) * multiplier);
          return Number(secs.toFixed(decimalLen));
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.isDropFrame = isDropFrame),
          (exports.secondsToTimeCode = secondsToTimeCode),
          (exports.timeCodeToSeconds = timeCodeToSeconds),
          (exports.calculateTimeFormat = calculateTimeFormat),
          (exports.convertSMPTEtoSeconds = convertSMPTEtoSeconds);
        var _mejs = _dereq_(7),
          _mejs2 = _interopRequireDefault(_mejs);
        (_mejs2["default"].Utils = _mejs2["default"].Utils || {}),
          (_mejs2["default"].Utils.secondsToTimeCode = secondsToTimeCode),
          (_mejs2["default"].Utils.timeCodeToSeconds = timeCodeToSeconds),
          (_mejs2["default"].Utils.calculateTimeFormat = calculateTimeFormat),
          (_mejs2["default"].Utils.convertSMPTEtoSeconds =
            convertSMPTEtoSeconds);
      },
      { 7: 7 },
    ],
  },
  {},
  [29, 6, 5, 15, 23, 20, 19, 21, 22, 24, 16, 18, 17, 9, 10, 11, 12, 13, 14]
),
  (function () {
    "use strict";
    var id = "submarine-game",
      lb = {
        options: {},
        callback: function (options) {
          Modernizr.video
            ? ((C3P.views.SubmarineGame = C3P.views.BaseResponsiveView.extend({
                myId: "C3P.views.SubmarineGame",
                initialize: function (options) {
                  return (
                    (this.stages = C3P.strings.sub_game_stages),
                    (this.game_strings =
                      C3P.strings[C3P.language].game_strings),
                    (this.$video_container = $("#submarine-game")),
                    (this.video_container = this.$video_container[0]),
                    (this.$video = $("video.game-video")),
                    (this.video = this.$video[0]),
                    (this.player = void 0),
                    (this.$opts_container = $("#options")),
                    (this.game_started = !1),
                    (this.game_won = !1),
                    (this.video.controls = !1),
                    (this.video.volume =
                      Math.round(10 * this.video.volume) / 10),
                    this.setup_mejs(),
                    this
                  );
                },
                setup_mejs: function () {
                  var that = this,
                    mejs_features = ["playpause", "volume"];
                  mejs.Features.isiOS || mejs_features.push("fullscreen"),
                    that.$video.mediaelementplayer({
                      alwaysShowControls: !0,
                      hideVolumeOnTouchDevices: !1,
                      features: mejs_features,
                      muteText: that.game_strings.mute,
                      unmuteText: that.game_strings.unmute,
                      fullscreenText: that.game_strings.fs_toggle,
                      playText: that.game_strings.play,
                      pauseText: that.game_strings.pause,
                      customError: that.game_strings.error_msg,
                      success: function (mediaElement, originalNode, instance) {
                        $(".submarine-game-options")
                          .detach()
                          .prependTo(".mejs__container"),
                          (mejs.Features.isiOS || mejs.Features.isAndroid) &&
                            $(".mejs__volume-slider").remove(),
                          (that.$video = $(mediaElement)),
                          (that.video = mediaElement),
                          (that.player = instance),
                          that.video.load(),
                          that.setup_video_listeners(),
                          that.setup_start_buttons();
                      },
                    });
                },
                setup_start_buttons: function () {
                  var that = this,
                    $btn_init_play = that.button_maker(
                      "s0",
                      "s0",
                      "play",
                      that.game_strings.start_game +
                        ' <span class="icon-video icon-video-white icon-play"></span>',
                      !1
                    );
                  that.$opts_container.hide().empty(),
                    $(".mejs__overlay-loading").parent().show(),
                    that.$video
                      .one("canplaythrough", function () {
                        $(".mejs__overlay-loading").parent().hide(),
                          that.position_cookie_check(),
                          that.$opts_container
                            .prepend($btn_init_play)
                            .fadeIn(250),
                          $(".btn-play").on("click", function () {
                            $(".mejs__playpause-button button").click(),
                              _paq.push([
                                "trackEvent",
                                "game-event",
                                "game-start-button-click",
                              ]);
                          });
                      })
                      .on("playing", function () {
                        $(".btn-play").length &&
                          $(".btn-play").off("click").remove(),
                          $(".btn-resume").length &&
                            $(".btn-resume")
                              .off("click", that.handle_opt_btn_click)
                              .remove();
                      });
                },
                position_cookie_set: function (current_time) {
                  var name = "last_known_position",
                    expires = "",
                    days = 7,
                    value = current_time;
                  if (days) {
                    var date = new Date();
                    date.setTime(date.getTime() + 24 * days * 60 * 60 * 1e3),
                      (expires = "; expires=" + date.toUTCString());
                  }
                  document.cookie = name + "=" + value + expires + "; path=/";
                },
                position_cookie_check: function () {
                  for (
                    var that = this,
                      name_is = "last_known_position=",
                      cookies_arr = document.cookie.split(";"),
                      last_position = "",
                      i = 0;
                    i < cookies_arr.length;
                    i++
                  ) {
                    for (var c = cookies_arr[i]; " " === c.charAt(0); )
                      c = c.substring(1, c.length);
                    if (0 === c.indexOf(name_is))
                      return (
                        (last_position = c.substring(name_is.length, c.length)),
                        that.setup_resume_last_position(last_position),
                        last_position
                      );
                  }
                  return null;
                },
                setup_resume_last_position: function (last_position) {
                  var that = this,
                    $btn_resume =
                      (that.stages,
                      that.button_maker(
                        "s0",
                        last_position,
                        "resume",
                        that.game_strings.resume,
                        !1
                      ));
                  that.$opts_container.append($btn_resume),
                    $(".btn-resume").on(
                      "click",
                      that.handle_opt_btn_click.bind(that)
                    );
                },
                get_current_stage: function (current_time, stage) {
                  if (stage.start <= current_time && stage.end > current_time)
                    return [stage.stage, stage];
                },
                stage_filter: function (stage_data, stage_ref) {
                  return stage_data.filter(function (stage) {
                    if (stage.stage === stage_ref) return stage;
                  });
                },
                playback_disable_manager: function () {
                  $(".btn-tryagain").length || $(".btn-restart").length
                    ? ($(".mejs__playpause-button button").attr(
                        "disabled",
                        "disabled"
                      ),
                      $(".mejs__overlay-play").css("height", "0"))
                    : $(".mejs__playpause-button button").attr("disabled") &&
                      ($(".mejs__playpause-button button").removeAttr(
                        "disabled"
                      ),
                      $(".mejs__overlay-play").css("height", "100%"));
                },
                button_maker: function (from, goto, type, text, is_option) {
                  var goto_ts,
                    btn_classes,
                    that = this,
                    stage_data = that.stages;
                  switch (
                    ((btn_classes =
                      is_option === !0
                        ? "btn-option btn-" + type
                        : "btn-" + type),
                    type)
                  ) {
                    case "decision":
                    case "play":
                    case "restart":
                      goto_ts = that.stage_filter(stage_data, goto)[0].start;
                      break;
                    case "resume":
                      goto_ts = parseFloat(goto);
                      break;
                    case "tryagain":
                      goto_ts =
                        that.stage_filter(stage_data, goto)[0].loop.start - 0.4;
                      break;
                    default:
                      return;
                  }
                  var button =
                    '<button id="' +
                    from +
                    "-" +
                    goto +
                    '" class="' +
                    btn_classes +
                    '" data-fromstage="' +
                    from +
                    '" data-gotostage="' +
                    goto +
                    '" data-goto="' +
                    goto_ts +
                    '">' +
                    text +
                    "</button>";
                  return button;
                },
                button_watchdog: function (stage, current_time) {
                  void 0 === stage && (stage = {});
                  var that = this,
                    $btns = $(".btn-option"),
                    stage_id = stage.length ? stage.stage : {},
                    $btns_nonmatch = {};
                  return void 0 === stage && $btns.length
                    ? void $btns
                        .off("click", that.handle_opt_btn_click)
                        .remove()
                    : (stage.ends_with && stage.ends_with.length) ||
                      !$btns.length
                    ? ((stage_id = stage.stage),
                      ($btns_nonmatch = $btns.not(
                        '[data-fromstage="' + stage_id + '"]'
                      )),
                      $btns_nonmatch.length >= 1 &&
                        $btns_nonmatch
                          .off("click", that.handle_opt_btn_click)
                          .remove(),
                      void 0)
                    : void $btns
                        .off("click", that.handle_opt_btn_click)
                        .remove();
                },
                setup_video_listeners: function () {
                  var that = this;
                  that.$video
                    .on("timeupdate", function (e) {
                      that.video_timeupdate_tasks();
                    })
                    .on("ended", function (e) {
                      that.video.paused || that.video.pause(),
                        that.player.isFullScreen &&
                          that.player.exitFullScreen(),
                        _paq.push([
                          "trackEvent",
                          "game-event",
                          "game-watched-to-end",
                        ]);
                    })
                    .on("error", function (e) {
                      console.log("video error, e = ", e);
                    }),
                    $("a.mejs__volume-slider").on("click", function (e) {
                      e.preventDefault();
                    });
                },
                video_timeupdate_tasks: function () {
                  var that = this,
                    current_time =
                      Math.floor(10 * that.video.getCurrentTime()) / 10,
                    current_stage = that.stages.filter(
                      that.get_current_stage.bind(null, current_time)
                    );
                  if (
                    (that.button_watchdog(current_stage[0], current_time),
                    that.playback_disable_manager(),
                    0 !== current_stage.length)
                  ) {
                    var stage_type = current_stage[0].ends_with;
                    current_stage[0].loop &&
                      "decision" === stage_type &&
                      (that.handle_opt_btns(current_stage[0], current_time),
                      that.handle_decision_loop(
                        current_stage[0],
                        current_time
                      )),
                      "game_over" === stage_type &&
                        that.handle_gameover(current_stage[0], current_time),
                      "s13" === current_stage[0].stage &&
                        that.game_won === !1 &&
                        ((that.game_won = !0),
                        _paq.push(["trackEvent", "game-event", "game-won"])),
                      parseInt(current_time) > 5 &&
                        that.position_cookie_set(parseFloat(current_time)),
                      that.game_started === !1 &&
                        ((that.game_started = !0),
                        _paq.push([
                          "trackEvent",
                          "game-event",
                          "game-started",
                        ]));
                  }
                },
                handle_decision_loop: function (stage, current_time) {
                  var loop_back = stage.loop.loop_back,
                    loop_end = stage.loop.end;
                  stage.end;
                  !!(loop_back <= current_time && loop_end >= current_time) ==
                    !0 ||
                    (loop_end < current_time &&
                      this.video.setCurrentTime(loop_back));
                },
                handle_gameover: function (stage, current_time) {
                  var that = this,
                    stages = C3P.strings.sub_game_stages,
                    prompt_time = stage.tryagain_prompt,
                    this_stage_id = stage.stage,
                    back_to_stage = stages.filter(function (which_stage) {
                      if (
                        which_stage.resp &&
                        which_stage.resp[C3P.language][this_stage_id]
                      )
                        return which_stage;
                    }),
                    $btn_tryagain = this.button_maker(
                      this_stage_id,
                      back_to_stage[0].stage,
                      "tryagain",
                      '<span class="icon icon-white icon-counterclockwise"></span> ' +
                        that.stage_filter(that.stages, this_stage_id)[0]
                          .tryagain_text[C3P.language],
                      !0
                    ),
                    $btn_full_restart = this.button_maker(
                      this_stage_id,
                      "s1",
                      "restart",
                      '<span class="icon icon-white icon-counterclockwise"></span> ' +
                        that.stage_filter(that.stages, this_stage_id)[0]
                          .tryagain_text[C3P.language],
                      !0
                    );
                  prompt_time < current_time &&
                    (this.video.pause(),
                    "s12" === this_stage_id
                      ? (this.$opts_container
                          .hide()
                          .empty()
                          .append($btn_full_restart)
                          .fadeIn(250),
                        $(".btn-option.btn-restart").on(
                          "click",
                          that.handle_opt_btn_click.bind(that)
                        ))
                      : (this.$opts_container
                          .hide()
                          .empty()
                          .append($btn_tryagain)
                          .fadeIn(250),
                        $(".btn-option.btn-tryagain").on(
                          "click",
                          that.handle_opt_btn_click.bind(that)
                        ))),
                    prompt_time > current_time &&
                      ($(".btn-option.btn-tryagain").off(
                        "click",
                        that.handle_opt_btn_click
                      ),
                      $(".btn-option.btn-restart").off(
                        "click",
                        that.handle_opt_btn_click
                      ),
                      this.$opts_container.empty());
                },
                handle_opt_btns: function (stage, current_time) {
                  var that = this,
                    this_stage = stage.stage,
                    decision_start = stage.loop.start,
                    decision_end = stage.loop.end + 1,
                    options = stage.resp[C3P.language];
                  if (
                    decision_start <= current_time &&
                    decision_end >= current_time
                  ) {
                    for (var key in options) {
                      var $opt_btn = that.button_maker(
                        this_stage,
                        key,
                        "decision",
                        that.stage_filter(that.stages, this_stage)[0].resp[
                          C3P.language
                        ][key],
                        !0
                      );
                      0 === $("#" + this_stage + "-" + key).length &&
                        (that.$opts_container.append($opt_btn),
                        $(".btn-option").on(
                          "click",
                          that.handle_opt_btn_click.bind(that)
                        ));
                    }
                    this.$opts_container.fadeIn(500);
                  } else
                    (decision_start >= current_time ||
                      decision_end <= current_time) &&
                      0 !== this.$opts_container.children().length &&
                      ($(".btn-option").off("click", that.handle_opt_btn_click),
                      this.$opts_container.empty());
                },
                handle_opt_btn_click: function (e) {
                  var that = this,
                    $targ = $(e.target),
                    goto_time =
                      ($targ.attr("data-gotostage"),
                      parseFloat($targ.attr("data-goto"))),
                    dest_time = Math.floor(10 * goto_time) / 10;
                  if (
                    ($targ.hasClass("btn-decision") &&
                      _paq.push([
                        "trackEvent",
                        "game-event",
                        "game-choice-click",
                        "going from stage " +
                          $targ.attr("data-fromstage") +
                          " to " +
                          $targ.attr("data-gotostage"),
                      ]),
                    $targ.hasClass("btn-tryagain") &&
                      _paq.push([
                        "trackEvent",
                        "game-event",
                        "game-tryagain-click",
                        "game over at stage " +
                          $targ.attr("data-fromstage") +
                          ", returning to " +
                          $targ.attr("data-gotostage"),
                      ]),
                    $targ.hasClass("btn-restart") &&
                      _paq.push([
                        "trackEvent",
                        "game-event",
                        "game-restart-click",
                        "final game over, returning to s1",
                      ]),
                    $targ.hasClass("btn-resume") &&
                      ((that.game_started = !0),
                      _paq.push([
                        "trackEvent",
                        "game-event",
                        "game-resume-click",
                        "picking up at " + $targ.attr("data-goto"),
                      ])),
                    $(".mejs__poster").hide(),
                    that.video.setCurrentTime(dest_time),
                    that.video.currentTime === dest_time)
                  )
                    that.$video.one("canplay seeked", function () {
                      that.video.play();
                    });
                  else
                    try {
                      that.video.setCurrentTime(dest_time),
                        that.$video.one("canplay seeked", function () {
                          that.video.play();
                        });
                    } catch (err) {
                      that.$video.one("loadedmetadata", function () {
                        that.video.setCurrentTime(dest_time);
                      });
                    }
                  $targ.off("click", that.handle_opt_btn_click),
                    $("#options").empty();
                },
                setup_dev_convenience: function () {
                  var that = this;
                  $(".stage-btn").on("click", function (e) {
                    var $targ = $(e.target),
                      index = parseInt($targ.attr("data-id"));
                    that.video.setCurrentTime(
                      Math.floor(10 * that.stages[index].start) / 10
                    );
                  }),
                    $(".dec-btn").on("click", function (e) {
                      var $targ = $(e.target),
                        index = parseInt($targ.attr("data-id"));
                      that.video.setCurrentTime(
                        Math.floor(10 * that.stages[index].loop.start) / 10
                      );
                    });
                },
              })),
              (C3P.App.SubmarineGame = new C3P.views.SubmarineGame({
                el: this,
              })))
            : $(this)
                .empty()
                .append(
                  "<p>" +
                    C3P.strings[C3P.language].game_strings.error_msg +
                    "</p>"
                );
        },
      };
    "undefined" == typeof C3P.enhancements[id]
      ? (C3P.enhancements[id] = [lb])
      : C3P.enhancements[id].push(lb);
  })();

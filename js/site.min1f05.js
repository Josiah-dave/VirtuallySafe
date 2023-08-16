if (
  (!(function (e, t, n) {
    function r(e, t) {
      return typeof e === t;
    }
    function o() {
      var e, t, n, o, a, i, s;
      for (var l in b)
        if (b.hasOwnProperty(l)) {
          if (
            ((e = []),
            (t = b[l]),
            t.name &&
              (e.push(t.name.toLowerCase()),
              t.options && t.options.aliases && t.options.aliases.length))
          )
            for (n = 0; n < t.options.aliases.length; n++)
              e.push(t.options.aliases[n].toLowerCase());
          for (
            o = r(t.fn, "function") ? t.fn() : t.fn, a = 0;
            a < e.length;
            a++
          )
            (i = e[a]),
              (s = i.split(".")),
              1 === s.length
                ? (Modernizr[s[0]] = o)
                : (!Modernizr[s[0]] ||
                    Modernizr[s[0]] instanceof Boolean ||
                    (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])),
                  (Modernizr[s[0]][s[1]] = o)),
              x.push((o ? "" : "no-") + s.join("-"));
        }
    }
    function a(e) {
      var t = S.className,
        n = Modernizr._config.classPrefix || "";
      if ((C && (t = t.baseVal), Modernizr._config.enableJSClass)) {
        var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
        t = t.replace(r, "$1" + n + "js$2");
      }
      Modernizr._config.enableClasses &&
        ((t += " " + n + e.join(" " + n)),
        C ? (S.className.baseVal = t) : (S.className = t));
    }
    function i(e, t) {
      if ("object" == typeof e) for (var n in e) E(e, n) && i(n, e[n]);
      else {
        e = e.toLowerCase();
        var r = e.split("."),
          o = Modernizr[r[0]];
        if ((2 == r.length && (o = o[r[1]]), "undefined" != typeof o))
          return Modernizr;
        (t = "function" == typeof t ? t() : t),
          1 == r.length
            ? (Modernizr[r[0]] = t)
            : (!Modernizr[r[0]] ||
                Modernizr[r[0]] instanceof Boolean ||
                (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])),
              (Modernizr[r[0]][r[1]] = t)),
          a([(t && 0 != t ? "" : "no-") + r.join("-")]),
          Modernizr._trigger(e, t);
      }
      return Modernizr;
    }
    function s() {
      return "function" != typeof t.createElement
        ? t.createElement(arguments[0])
        : C
        ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0])
        : t.createElement.apply(t, arguments);
    }
    function l(e) {
      return e
        .replace(/([A-Z])/g, function (e, t) {
          return "-" + t.toLowerCase();
        })
        .replace(/^ms-/, "-ms-");
    }
    function c(e) {
      return e
        .replace(/([a-z])-([a-z])/g, function (e, t, n) {
          return t + n.toUpperCase();
        })
        .replace(/^-/, "");
    }
    function u() {
      var e = t.body;
      return e || ((e = s(C ? "svg" : "body")), (e.fake = !0)), e;
    }
    function d(e, n, r, o) {
      var a,
        i,
        l,
        c,
        d = "modernizr",
        f = s("div"),
        p = u();
      if (parseInt(r, 10))
        for (; r--; )
          (l = s("div")), (l.id = o ? o[r] : d + (r + 1)), f.appendChild(l);
      return (
        (a = s("style")),
        (a.type = "text/css"),
        (a.id = "s" + d),
        (p.fake ? p : f).appendChild(a),
        p.appendChild(f),
        a.styleSheet
          ? (a.styleSheet.cssText = e)
          : a.appendChild(t.createTextNode(e)),
        (f.id = d),
        p.fake &&
          ((p.style.background = ""),
          (p.style.overflow = "hidden"),
          (c = S.style.overflow),
          (S.style.overflow = "hidden"),
          S.appendChild(p)),
        (i = n(f, e)),
        p.fake
          ? (p.parentNode.removeChild(p),
            (S.style.overflow = c),
            S.offsetHeight)
          : f.parentNode.removeChild(f),
        !!i
      );
    }
    function f(e, t) {
      return !!~("" + e).indexOf(t);
    }
    function p(e, t) {
      return function () {
        return e.apply(t, arguments);
      };
    }
    function m(e, t, n) {
      var o;
      for (var a in e)
        if (e[a] in t)
          return n === !1
            ? e[a]
            : ((o = t[e[a]]), r(o, "function") ? p(o, n || t) : o);
      return !1;
    }
    function v(t, n, r) {
      var o;
      if ("getComputedStyle" in e) {
        o = getComputedStyle.call(e, t, n);
        var a = e.console;
        if (null !== o) r && (o = o.getPropertyValue(r));
        else if (a) {
          var i = a.error ? "error" : "log";
          a[i].call(
            a,
            "getComputedStyle returning null, its possible modernizr test results are inaccurate"
          );
        }
      } else o = !n && t.currentStyle && t.currentStyle[r];
      return o;
    }
    function h(t, r) {
      var o = t.length;
      if ("CSS" in e && "supports" in e.CSS) {
        for (; o--; ) if (e.CSS.supports(l(t[o]), r)) return !0;
        return !1;
      }
      if ("CSSSupportsRule" in e) {
        for (var a = []; o--; ) a.push("(" + l(t[o]) + ":" + r + ")");
        return (
          (a = a.join(" or ")),
          d(
            "@supports (" + a + ") { #modernizr { position: absolute; } }",
            function (e) {
              return "absolute" == v(e, null, "position");
            }
          )
        );
      }
      return n;
    }
    function g(e, t, o, a) {
      function i() {
        u && (delete B.style, delete B.modElem);
      }
      if (((a = !r(a, "undefined") && a), !r(o, "undefined"))) {
        var l = h(e, o);
        if (!r(l, "undefined")) return l;
      }
      for (
        var u, d, p, m, v, g = ["modernizr", "tspan", "samp"];
        !B.style && g.length;

      )
        (u = !0), (B.modElem = s(g.shift())), (B.style = B.modElem.style);
      for (p = e.length, d = 0; p > d; d++)
        if (
          ((m = e[d]),
          (v = B.style[m]),
          f(m, "-") && (m = c(m)),
          B.style[m] !== n)
        ) {
          if (a || r(o, "undefined")) return i(), "pfx" != t || m;
          try {
            B.style[m] = o;
          } catch (y) {}
          if (B.style[m] != v) return i(), "pfx" != t || m;
        }
      return i(), !1;
    }
    function y(e, t, n, o, a) {
      var i = e.charAt(0).toUpperCase() + e.slice(1),
        s = (e + " " + j.join(i + " ") + i).split(" ");
      return r(t, "string") || r(t, "undefined")
        ? g(s, t, o, a)
        : ((s = (e + " " + $.join(i + " ") + i).split(" ")), m(s, t, n));
    }
    function T(e, t, r) {
      return y(e, n, n, t, r);
    }
    var x = [],
      b = [],
      w = {
        _version: "3.5.0",
        _config: {
          classPrefix: "",
          enableClasses: !0,
          enableJSClass: !0,
          usePrefixes: !0,
        },
        _q: [],
        on: function (e, t) {
          var n = this;
          setTimeout(function () {
            t(n[e]);
          }, 0);
        },
        addTest: function (e, t, n) {
          b.push({ name: e, fn: t, options: n });
        },
        addAsyncTest: function (e) {
          b.push({ name: null, fn: e });
        },
      },
      Modernizr = function () {};
    (Modernizr.prototype = w),
      (Modernizr = new Modernizr()),
      Modernizr.addTest("cookies", function () {
        try {
          t.cookie = "cookietest=1";
          var e = -1 != t.cookie.indexOf("cookietest=");
          return (
            (t.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT"),
            e
          );
        } catch (n) {
          return !1;
        }
      }),
      Modernizr.addTest(
        "customevent",
        "CustomEvent" in e && "function" == typeof e.CustomEvent
      ),
      Modernizr.addTest("eventlistener", "addEventListener" in e),
      Modernizr.addTest("history", function () {
        var t = navigator.userAgent;
        return (
          ((-1 === t.indexOf("Android 2.") &&
            -1 === t.indexOf("Android 4.0")) ||
            -1 === t.indexOf("Mobile Safari") ||
            -1 !== t.indexOf("Chrome") ||
            -1 !== t.indexOf("Windows Phone") ||
            "file:" === location.protocol) &&
          e.history &&
          "pushState" in e.history
        );
      }),
      Modernizr.addTest(
        "json",
        "JSON" in e && "parse" in JSON && "stringify" in JSON
      ),
      Modernizr.addTest("serviceworker", "serviceWorker" in navigator),
      Modernizr.addTest(
        "svg",
        !!t.createElementNS &&
          !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect
      ),
      Modernizr.addTest("typedarrays", "ArrayBuffer" in e),
      Modernizr.addTest("fetch", "fetch" in e);
    var S = t.documentElement,
      C = "svg" === S.nodeName.toLowerCase();
    C ||
      !(function (e, t) {
        function n(e, t) {
          var n = e.createElement("p"),
            r = e.getElementsByTagName("head")[0] || e.documentElement;
          return (
            (n.innerHTML = "x<style>" + t + "</style>"),
            r.insertBefore(n.lastChild, r.firstChild)
          );
        }
        function r() {
          var e = T.elements;
          return "string" == typeof e ? e.split(" ") : e;
        }
        function o(e, t) {
          var n = T.elements;
          "string" != typeof n && (n = n.join(" ")),
            "string" != typeof e && (e = e.join(" ")),
            (T.elements = n + " " + e),
            c(t);
        }
        function a(e) {
          var t = y[e[h]];
          return t || ((t = {}), g++, (e[h] = g), (y[g] = t)), t;
        }
        function i(e, n, r) {
          if ((n || (n = t), d)) return n.createElement(e);
          r || (r = a(n));
          var o;
          return (
            (o = r.cache[e]
              ? r.cache[e].cloneNode()
              : v.test(e)
              ? (r.cache[e] = r.createElem(e)).cloneNode()
              : r.createElem(e)),
            !o.canHaveChildren || m.test(e) || o.tagUrn
              ? o
              : r.frag.appendChild(o)
          );
        }
        function s(e, n) {
          if ((e || (e = t), d)) return e.createDocumentFragment();
          n = n || a(e);
          for (
            var o = n.frag.cloneNode(), i = 0, s = r(), l = s.length;
            l > i;
            i++
          )
            o.createElement(s[i]);
          return o;
        }
        function l(e, t) {
          t.cache ||
            ((t.cache = {}),
            (t.createElem = e.createElement),
            (t.createFrag = e.createDocumentFragment),
            (t.frag = t.createFrag())),
            (e.createElement = function (n) {
              return T.shivMethods ? i(n, e, t) : t.createElem(n);
            }),
            (e.createDocumentFragment = Function(
              "h,f",
              "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" +
                r()
                  .join()
                  .replace(/[\w\-:]+/g, function (e) {
                    return (
                      t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                    );
                  }) +
                ");return n}"
            )(T, t.frag));
        }
        function c(e) {
          e || (e = t);
          var r = a(e);
          return (
            !T.shivCSS ||
              u ||
              r.hasCSS ||
              (r.hasCSS = !!n(
                e,
                "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}"
              )),
            d || l(e, r),
            e
          );
        }
        var u,
          d,
          f = "3.7.3",
          p = e.html5 || {},
          m =
            /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
          v =
            /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
          h = "_html5shiv",
          g = 0,
          y = {};
        !(function () {
          try {
            var e = t.createElement("a");
            (e.innerHTML = "<xyz></xyz>"),
              (u = "hidden" in e),
              (d =
                1 == e.childNodes.length ||
                (function () {
                  t.createElement("a");
                  var e = t.createDocumentFragment();
                  return (
                    "undefined" == typeof e.cloneNode ||
                    "undefined" == typeof e.createDocumentFragment ||
                    "undefined" == typeof e.createElement
                  );
                })());
          } catch (n) {
            (u = !0), (d = !0);
          }
        })();
        var T = {
          elements:
            p.elements ||
            "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
          version: f,
          shivCSS: p.shivCSS !== !1,
          supportsUnknownElements: d,
          shivMethods: p.shivMethods !== !1,
          type: "default",
          shivDocument: c,
          createElement: i,
          createDocumentFragment: s,
          addElements: o,
        };
        (e.html5 = T),
          c(t),
          "object" == typeof module && module.exports && (module.exports = T);
      })("undefined" != typeof e ? e : this, t);
    var E;
    !(function () {
      var e = {}.hasOwnProperty;
      E =
        r(e, "undefined") || r(e.call, "undefined")
          ? function (e, t) {
              return t in e && r(e.constructor.prototype[t], "undefined");
            }
          : function (t, n) {
              return e.call(t, n);
            };
    })(),
      (w._l = {}),
      (w.on = function (e, t) {
        this._l[e] || (this._l[e] = []),
          this._l[e].push(t),
          Modernizr.hasOwnProperty(e) &&
            setTimeout(function () {
              Modernizr._trigger(e, Modernizr[e]);
            }, 0);
      }),
      (w._trigger = function (e, t) {
        if (this._l[e]) {
          var n = this._l[e];
          setTimeout(function () {
            var e, r;
            for (e = 0; e < n.length; e++) (r = n[e])(t);
          }, 0),
            delete this._l[e];
        }
      }),
      Modernizr._q.push(function () {
        w.addTest = i;
      });
    var _ = (function () {
      function e(e, t) {
        var o;
        return (
          !!e &&
          ((t && "string" != typeof t) || (t = s(t || "div")),
          (e = "on" + e),
          (o = e in t),
          !o &&
            r &&
            (t.setAttribute || (t = s("div")),
            t.setAttribute(e, ""),
            (o = "function" == typeof t[e]),
            t[e] !== n && (t[e] = n),
            t.removeAttribute(e)),
          o)
        );
      }
      var r = !("onblur" in t.documentElement);
      return e;
    })();
    (w.hasEvent = _),
      Modernizr.addTest("audio", function () {
        var e = s("audio"),
          t = !1;
        try {
          (t = !!e.canPlayType),
            t &&
              ((t = new Boolean(t)),
              (t.ogg = e
                .canPlayType('audio/ogg; codecs="vorbis"')
                .replace(/^no$/, "")),
              (t.mp3 = e
                .canPlayType('audio/mpeg; codecs="mp3"')
                .replace(/^no$/, "")),
              (t.opus =
                e.canPlayType('audio/ogg; codecs="opus"') ||
                e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, "")),
              (t.wav = e
                .canPlayType('audio/wav; codecs="1"')
                .replace(/^no$/, "")),
              (t.m4a = (
                e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")
              ).replace(/^no$/, "")));
        } catch (n) {}
        return t;
      }),
      Modernizr.addTest("video", function () {
        var e = s("video"),
          t = !1;
        try {
          (t = !!e.canPlayType),
            t &&
              ((t = new Boolean(t)),
              (t.ogg = e
                .canPlayType('video/ogg; codecs="theora"')
                .replace(/^no$/, "")),
              (t.h264 = e
                .canPlayType('video/mp4; codecs="avc1.42E01E"')
                .replace(/^no$/, "")),
              (t.webm = e
                .canPlayType('video/webm; codecs="vp8, vorbis"')
                .replace(/^no$/, "")),
              (t.vp9 = e
                .canPlayType('video/webm; codecs="vp9"')
                .replace(/^no$/, "")),
              (t.hls = e
                .canPlayType('application/x-mpegURL; codecs="avc1.42E01E"')
                .replace(/^no$/, "")));
        } catch (n) {}
        return t;
      }),
      Modernizr.addTest("videoloop", "loop" in s("video")),
      Modernizr.addTest("videopreload", "preload" in s("video"));
    var P = s("input"),
      k =
        "search tel url email datetime date month week time datetime-local number range color".split(
          " "
        ),
      N = {};
    Modernizr.inputtypes = (function (e) {
      for (var r, o, a, i = e.length, s = "1)", l = 0; i > l; l++)
        P.setAttribute("type", (r = e[l])),
          (a = "text" !== P.type && "style" in P),
          a &&
            ((P.value = s),
            (P.style.cssText = "position:absolute;visibility:hidden;"),
            /^range$/.test(r) && P.style.WebkitAppearance !== n
              ? (S.appendChild(P),
                (o = t.defaultView),
                (a =
                  o.getComputedStyle &&
                  "textfield" !==
                    o.getComputedStyle(P, null).WebkitAppearance &&
                  0 !== P.offsetHeight),
                S.removeChild(P))
              : /^(search|tel)$/.test(r) ||
                (a = /^(url|email)$/.test(r)
                  ? P.checkValidity && P.checkValidity() === !1
                  : P.value != s)),
          (N[e[l]] = !!a);
      return N;
    })(k);
    var A = w._config.usePrefixes
      ? " -webkit- -moz- -o- -ms- ".split(" ")
      : ["", ""];
    w._prefixes = A;
    var O = "Moz O ms Webkit",
      $ = w._config.usePrefixes ? O.toLowerCase().split(" ") : [];
    (w._domPrefixes = $),
      Modernizr.addTest("pointerevents", function () {
        var e = !1,
          t = $.length;
        for (e = Modernizr.hasEvent("pointerdown"); t-- && !e; )
          _($[t] + "pointerdown") && (e = !0);
        return e;
      });
    var j = w._config.usePrefixes ? O.split(" ") : [];
    w._cssomPrefixes = j;
    var z = function (t) {
      var r,
        o = A.length,
        a = e.CSSRule;
      if ("undefined" == typeof a) return n;
      if (!t) return !1;
      if (
        ((t = t.replace(/^@/, "")),
        (r = t.replace(/-/g, "_").toUpperCase() + "_RULE"),
        r in a)
      )
        return "@" + t;
      for (var i = 0; o > i; i++) {
        var s = A[i],
          l = s.toUpperCase() + "_" + r;
        if (l in a) return "@-" + s.toLowerCase() + "-" + t;
      }
      return !1;
    };
    w.atRule = z;
    var F = (w.testStyles = d);
    Modernizr.addTest("touchevents", function () {
      var n;
      if (
        "ontouchstart" in e ||
        (e.DocumentTouch && t instanceof DocumentTouch)
      )
        n = !0;
      else {
        var r = [
          "@media (",
          A.join("touch-enabled),("),
          "heartz",
          ")",
          "{#modernizr{top:9px;position:absolute}}",
        ].join("");
        F(r, function (e) {
          n = 9 === e.offsetTop;
        });
      }
      return n;
    });
    var M = (function () {
      var e = navigator.userAgent,
        t = e.match(/w(eb)?osbrowser/gi),
        n =
          e.match(/windows phone/gi) &&
          e.match(/iemobile\/([0-9])+/gi) &&
          parseFloat(RegExp.$1) >= 9;
      return t || n;
    })();
    M
      ? Modernizr.addTest("fontface", !1)
      : F(
          '@font-face {font-family:"font";src:url("https://")}',
          function (e, n) {
            var r = t.getElementById("smodernizr"),
              o = r.sheet || r.styleSheet,
              a = o
                ? o.cssRules && o.cssRules[0]
                  ? o.cssRules[0].cssText
                  : o.cssText || ""
                : "",
              i = /src/i.test(a) && 0 === a.indexOf(n.split(" ")[0]);
            Modernizr.addTest("fontface", i);
          }
        );
    var L = (function () {
      var t = e.matchMedia || e.msMatchMedia;
      return t
        ? function (e) {
            var n = t(e);
            return (n && n.matches) || !1;
          }
        : function (t) {
            var n = !1;
            return (
              d(
                "@media " + t + " { #modernizr { position: absolute; } }",
                function (t) {
                  n =
                    "absolute" ==
                    (e.getComputedStyle
                      ? e.getComputedStyle(t, null)
                      : t.currentStyle
                    ).position;
                }
              ),
              n
            );
          };
    })();
    (w.mq = L), Modernizr.addTest("mediaqueries", L("only all"));
    var R = { elem: s("modernizr") };
    Modernizr._q.push(function () {
      delete R.elem;
    });
    var B = { style: R.elem.style };
    Modernizr._q.unshift(function () {
      delete B.style;
    }),
      (w.testAllProps = y);
    var q = (w.prefixed = function (e, t, n) {
      return 0 === e.indexOf("@")
        ? z(e)
        : (-1 != e.indexOf("-") && (e = c(e)), t ? y(e, t, n) : y(e, "pfx"));
    });
    (w.prefixedCSS = function (e) {
      var t = q(e);
      return t && l(t);
    }),
      Modernizr.addTest(
        "fullscreen",
        !(!q("exitFullscreen", t, !1) && !q("cancelFullScreen", t, !1))
      ),
      (w.testAllProps = T),
      Modernizr.addTest("cssanimations", T("animationName", "a", !0)),
      Modernizr.addTest("cssgridlegacy", T("grid-columns", "10px", !0)),
      Modernizr.addTest("cssgrid", T("grid-template-rows", "none", !0)),
      Modernizr.addTest("flexbox", T("flexBasis", "1px", !0)),
      Modernizr.addTest("flexboxtweener", T("flexAlign", "end", !0)),
      Modernizr.addTest("csstransforms", function () {
        return (
          -1 === navigator.userAgent.indexOf("Android 2.") &&
          T("transform", "scale(1)", !0)
        );
      }),
      o(),
      a(x),
      delete w.addTest,
      delete w.addAsyncTest;
    for (var D = 0; D < Modernizr._q.length; D++) Modernizr._q[D]();
    e.Modernizr = Modernizr;
  })(window, document)
  /*!
   * jQuery JavaScript Library v1.11.3
   * http://jquery.com/
   *
   * Includes Sizzle.js
   * http://sizzlejs.com/
   *
   * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
   * Released under the MIT license
   * http://jquery.org/license
   *
   * Date: 2015-04-28T16:19Z
   */,
  (function (global, factory) {
    "object" == typeof module && "object" == typeof module.exports
      ? (module.exports = global.document
          ? factory(global, !0)
          : function (w) {
              if (!w.document)
                throw new Error("jQuery requires a window with a document");
              return factory(w);
            })
      : factory(global);
  })("undefined" != typeof window ? window : this, function (window, noGlobal) {
    function isArraylike(obj) {
      var length = "length" in obj && obj.length,
        type = jQuery.type(obj);
      return (
        "function" !== type &&
        !jQuery.isWindow(obj) &&
        (!(1 !== obj.nodeType || !length) ||
          "array" === type ||
          0 === length ||
          ("number" == typeof length && length > 0 && length - 1 in obj))
      );
    }
    function winnow(elements, qualifier, not) {
      if (jQuery.isFunction(qualifier))
        return jQuery.grep(elements, function (elem, i) {
          return !!qualifier.call(elem, i, elem) !== not;
        });
      if (qualifier.nodeType)
        return jQuery.grep(elements, function (elem) {
          return (elem === qualifier) !== not;
        });
      if ("string" == typeof qualifier) {
        if (risSimple.test(qualifier))
          return jQuery.filter(qualifier, elements, not);
        qualifier = jQuery.filter(qualifier, elements);
      }
      return jQuery.grep(elements, function (elem) {
        return jQuery.inArray(elem, qualifier) >= 0 !== not;
      });
    }
    function sibling(cur, dir) {
      do cur = cur[dir];
      while (cur && 1 !== cur.nodeType);
      return cur;
    }
    function createOptions(options) {
      var object = (optionsCache[options] = {});
      return (
        jQuery.each(options.match(rnotwhite) || [], function (_, flag) {
          object[flag] = !0;
        }),
        object
      );
    }
    function detach() {
      document.addEventListener
        ? (document.removeEventListener("DOMContentLoaded", completed, !1),
          window.removeEventListener("load", completed, !1))
        : (document.detachEvent("onreadystatechange", completed),
          window.detachEvent("onload", completed));
    }
    function completed() {
      (document.addEventListener ||
        "load" === event.type ||
        "complete" === document.readyState) &&
        (detach(), jQuery.ready());
    }
    function dataAttr(elem, key, data) {
      if (void 0 === data && 1 === elem.nodeType) {
        var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
        if (((data = elem.getAttribute(name)), "string" == typeof data)) {
          try {
            data =
              "true" === data ||
              ("false" !== data &&
                ("null" === data
                  ? null
                  : +data + "" === data
                  ? +data
                  : rbrace.test(data)
                  ? jQuery.parseJSON(data)
                  : data));
          } catch (e) {}
          jQuery.data(elem, key, data);
        } else data = void 0;
      }
      return data;
    }
    function isEmptyDataObject(obj) {
      var name;
      for (name in obj)
        if (
          ("data" !== name || !jQuery.isEmptyObject(obj[name])) &&
          "toJSON" !== name
        )
          return !1;
      return !0;
    }
    function internalData(elem, name, data, pvt) {
      if (jQuery.acceptData(elem)) {
        var ret,
          thisCache,
          internalKey = jQuery.expando,
          isNode = elem.nodeType,
          cache = isNode ? jQuery.cache : elem,
          id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;
        if (
          (id && cache[id] && (pvt || cache[id].data)) ||
          void 0 !== data ||
          "string" != typeof name
        )
          return (
            id ||
              (id = isNode
                ? (elem[internalKey] = deletedIds.pop() || jQuery.guid++)
                : internalKey),
            cache[id] || (cache[id] = isNode ? {} : { toJSON: jQuery.noop }),
            ("object" != typeof name && "function" != typeof name) ||
              (pvt
                ? (cache[id] = jQuery.extend(cache[id], name))
                : (cache[id].data = jQuery.extend(cache[id].data, name))),
            (thisCache = cache[id]),
            pvt ||
              (thisCache.data || (thisCache.data = {}),
              (thisCache = thisCache.data)),
            void 0 !== data && (thisCache[jQuery.camelCase(name)] = data),
            "string" == typeof name
              ? ((ret = thisCache[name]),
                null == ret && (ret = thisCache[jQuery.camelCase(name)]))
              : (ret = thisCache),
            ret
          );
      }
    }
    function internalRemoveData(elem, name, pvt) {
      if (jQuery.acceptData(elem)) {
        var thisCache,
          i,
          isNode = elem.nodeType,
          cache = isNode ? jQuery.cache : elem,
          id = isNode ? elem[jQuery.expando] : jQuery.expando;
        if (cache[id]) {
          if (name && (thisCache = pvt ? cache[id] : cache[id].data)) {
            jQuery.isArray(name)
              ? (name = name.concat(jQuery.map(name, jQuery.camelCase)))
              : name in thisCache
              ? (name = [name])
              : ((name = jQuery.camelCase(name)),
                (name = name in thisCache ? [name] : name.split(" "))),
              (i = name.length);
            for (; i--; ) delete thisCache[name[i]];
            if (
              pvt
                ? !isEmptyDataObject(thisCache)
                : !jQuery.isEmptyObject(thisCache)
            )
              return;
          }
          (pvt || (delete cache[id].data, isEmptyDataObject(cache[id]))) &&
            (isNode
              ? jQuery.cleanData([elem], !0)
              : support.deleteExpando || cache != cache.window
              ? delete cache[id]
              : (cache[id] = null));
        }
      }
    }
    function returnTrue() {
      return !0;
    }
    function returnFalse() {
      return !1;
    }
    function safeActiveElement() {
      try {
        return document.activeElement;
      } catch (err) {}
    }
    function createSafeFragment(document) {
      var list = nodeNames.split("|"),
        safeFrag = document.createDocumentFragment();
      if (safeFrag.createElement)
        for (; list.length; ) safeFrag.createElement(list.pop());
      return safeFrag;
    }
    function getAll(context, tag) {
      var elems,
        elem,
        i = 0,
        found =
          typeof context.getElementsByTagName !== strundefined
            ? context.getElementsByTagName(tag || "*")
            : typeof context.querySelectorAll !== strundefined
            ? context.querySelectorAll(tag || "*")
            : void 0;
      if (!found)
        for (
          found = [], elems = context.childNodes || context;
          null != (elem = elems[i]);
          i++
        )
          !tag || jQuery.nodeName(elem, tag)
            ? found.push(elem)
            : jQuery.merge(found, getAll(elem, tag));
      return void 0 === tag || (tag && jQuery.nodeName(context, tag))
        ? jQuery.merge([context], found)
        : found;
    }
    function fixDefaultChecked(elem) {
      rcheckableType.test(elem.type) && (elem.defaultChecked = elem.checked);
    }
    function manipulationTarget(elem, content) {
      return jQuery.nodeName(elem, "table") &&
        jQuery.nodeName(
          11 !== content.nodeType ? content : content.firstChild,
          "tr"
        )
        ? elem.getElementsByTagName("tbody")[0] ||
            elem.appendChild(elem.ownerDocument.createElement("tbody"))
        : elem;
    }
    function disableScript(elem) {
      return (
        (elem.type =
          (null !== jQuery.find.attr(elem, "type")) + "/" + elem.type),
        elem
      );
    }
    function restoreScript(elem) {
      var match = rscriptTypeMasked.exec(elem.type);
      return (
        match ? (elem.type = match[1]) : elem.removeAttribute("type"), elem
      );
    }
    function setGlobalEval(elems, refElements) {
      for (var elem, i = 0; null != (elem = elems[i]); i++)
        jQuery._data(
          elem,
          "globalEval",
          !refElements || jQuery._data(refElements[i], "globalEval")
        );
    }
    function cloneCopyEvent(src, dest) {
      if (1 === dest.nodeType && jQuery.hasData(src)) {
        var type,
          i,
          l,
          oldData = jQuery._data(src),
          curData = jQuery._data(dest, oldData),
          events = oldData.events;
        if (events) {
          delete curData.handle, (curData.events = {});
          for (type in events)
            for (i = 0, l = events[type].length; i < l; i++)
              jQuery.event.add(dest, type, events[type][i]);
        }
        curData.data && (curData.data = jQuery.extend({}, curData.data));
      }
    }
    function fixCloneNodeIssues(src, dest) {
      var nodeName, e, data;
      if (1 === dest.nodeType) {
        if (
          ((nodeName = dest.nodeName.toLowerCase()),
          !support.noCloneEvent && dest[jQuery.expando])
        ) {
          data = jQuery._data(dest);
          for (e in data.events) jQuery.removeEvent(dest, e, data.handle);
          dest.removeAttribute(jQuery.expando);
        }
        "script" === nodeName && dest.text !== src.text
          ? ((disableScript(dest).text = src.text), restoreScript(dest))
          : "object" === nodeName
          ? (dest.parentNode && (dest.outerHTML = src.outerHTML),
            support.html5Clone &&
              src.innerHTML &&
              !jQuery.trim(dest.innerHTML) &&
              (dest.innerHTML = src.innerHTML))
          : "input" === nodeName && rcheckableType.test(src.type)
          ? ((dest.defaultChecked = dest.checked = src.checked),
            dest.value !== src.value && (dest.value = src.value))
          : "option" === nodeName
          ? (dest.defaultSelected = dest.selected = src.defaultSelected)
          : ("input" !== nodeName && "textarea" !== nodeName) ||
            (dest.defaultValue = src.defaultValue);
      }
    }
    function actualDisplay(name, doc) {
      var style,
        elem = jQuery(doc.createElement(name)).appendTo(doc.body),
        display =
          window.getDefaultComputedStyle &&
          (style = window.getDefaultComputedStyle(elem[0]))
            ? style.display
            : jQuery.css(elem[0], "display");
      return elem.detach(), display;
    }
    function defaultDisplay(nodeName) {
      var doc = document,
        display = elemdisplay[nodeName];
      return (
        display ||
          ((display = actualDisplay(nodeName, doc)),
          ("none" !== display && display) ||
            ((iframe = (
              iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")
            ).appendTo(doc.documentElement)),
            (doc = (iframe[0].contentWindow || iframe[0].contentDocument)
              .document),
            doc.write(),
            doc.close(),
            (display = actualDisplay(nodeName, doc)),
            iframe.detach()),
          (elemdisplay[nodeName] = display)),
        display
      );
    }
    function addGetHookIf(conditionFn, hookFn) {
      return {
        get: function () {
          var condition = conditionFn();
          if (null != condition)
            return condition
              ? void delete this.get
              : (this.get = hookFn).apply(this, arguments);
        },
      };
    }
    function vendorPropName(style, name) {
      if (name in style) return name;
      for (
        var capName = name.charAt(0).toUpperCase() + name.slice(1),
          origName = name,
          i = cssPrefixes.length;
        i--;

      )
        if (((name = cssPrefixes[i] + capName), name in style)) return name;
      return origName;
    }
    function showHide(elements, show) {
      for (
        var display,
          elem,
          hidden,
          values = [],
          index = 0,
          length = elements.length;
        index < length;
        index++
      )
        (elem = elements[index]),
          elem.style &&
            ((values[index] = jQuery._data(elem, "olddisplay")),
            (display = elem.style.display),
            show
              ? (values[index] ||
                  "none" !== display ||
                  (elem.style.display = ""),
                "" === elem.style.display &&
                  isHidden(elem) &&
                  (values[index] = jQuery._data(
                    elem,
                    "olddisplay",
                    defaultDisplay(elem.nodeName)
                  )))
              : ((hidden = isHidden(elem)),
                ((display && "none" !== display) || !hidden) &&
                  jQuery._data(
                    elem,
                    "olddisplay",
                    hidden ? display : jQuery.css(elem, "display")
                  )));
      for (index = 0; index < length; index++)
        (elem = elements[index]),
          elem.style &&
            ((show &&
              "none" !== elem.style.display &&
              "" !== elem.style.display) ||
              (elem.style.display = show ? values[index] || "" : "none"));
      return elements;
    }
    function setPositiveNumber(elem, value, subtract) {
      var matches = rnumsplit.exec(value);
      return matches
        ? Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px")
        : value;
    }
    function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
      for (
        var i =
            extra === (isBorderBox ? "border" : "content")
              ? 4
              : "width" === name
              ? 1
              : 0,
          val = 0;
        i < 4;
        i += 2
      )
        "margin" === extra &&
          (val += jQuery.css(elem, extra + cssExpand[i], !0, styles)),
          isBorderBox
            ? ("content" === extra &&
                (val -= jQuery.css(elem, "padding" + cssExpand[i], !0, styles)),
              "margin" !== extra &&
                (val -= jQuery.css(
                  elem,
                  "border" + cssExpand[i] + "Width",
                  !0,
                  styles
                )))
            : ((val += jQuery.css(elem, "padding" + cssExpand[i], !0, styles)),
              "padding" !== extra &&
                (val += jQuery.css(
                  elem,
                  "border" + cssExpand[i] + "Width",
                  !0,
                  styles
                )));
      return val;
    }
    function getWidthOrHeight(elem, name, extra) {
      var valueIsBorderBox = !0,
        val = "width" === name ? elem.offsetWidth : elem.offsetHeight,
        styles = getStyles(elem),
        isBorderBox =
          support.boxSizing &&
          "border-box" === jQuery.css(elem, "boxSizing", !1, styles);
      if (val <= 0 || null == val) {
        if (
          ((val = curCSS(elem, name, styles)),
          (val < 0 || null == val) && (val = elem.style[name]),
          rnumnonpx.test(val))
        )
          return val;
        (valueIsBorderBox =
          isBorderBox &&
          (support.boxSizingReliable() || val === elem.style[name])),
          (val = parseFloat(val) || 0);
      }
      return (
        val +
        augmentWidthOrHeight(
          elem,
          name,
          extra || (isBorderBox ? "border" : "content"),
          valueIsBorderBox,
          styles
        ) +
        "px"
      );
    }
    function Tween(elem, options, prop, end, easing) {
      return new Tween.prototype.init(elem, options, prop, end, easing);
    }
    function createFxNow() {
      return (
        setTimeout(function () {
          fxNow = void 0;
        }),
        (fxNow = jQuery.now())
      );
    }
    function genFx(type, includeWidth) {
      var which,
        attrs = { height: type },
        i = 0;
      for (includeWidth = includeWidth ? 1 : 0; i < 4; i += 2 - includeWidth)
        (which = cssExpand[i]),
          (attrs["margin" + which] = attrs["padding" + which] = type);
      return includeWidth && (attrs.opacity = attrs.width = type), attrs;
    }
    function createTween(value, prop, animation) {
      for (
        var tween,
          collection = (tweeners[prop] || []).concat(tweeners["*"]),
          index = 0,
          length = collection.length;
        index < length;
        index++
      )
        if ((tween = collection[index].call(animation, prop, value)))
          return tween;
    }
    function defaultPrefilter(elem, props, opts) {
      var prop,
        value,
        toggle,
        tween,
        hooks,
        oldfire,
        display,
        checkDisplay,
        anim = this,
        orig = {},
        style = elem.style,
        hidden = elem.nodeType && isHidden(elem),
        dataShow = jQuery._data(elem, "fxshow");
      opts.queue ||
        ((hooks = jQuery._queueHooks(elem, "fx")),
        null == hooks.unqueued &&
          ((hooks.unqueued = 0),
          (oldfire = hooks.empty.fire),
          (hooks.empty.fire = function () {
            hooks.unqueued || oldfire();
          })),
        hooks.unqueued++,
        anim.always(function () {
          anim.always(function () {
            hooks.unqueued--,
              jQuery.queue(elem, "fx").length || hooks.empty.fire();
          });
        })),
        1 === elem.nodeType &&
          ("height" in props || "width" in props) &&
          ((opts.overflow = [style.overflow, style.overflowX, style.overflowY]),
          (display = jQuery.css(elem, "display")),
          (checkDisplay =
            "none" === display
              ? jQuery._data(elem, "olddisplay") ||
                defaultDisplay(elem.nodeName)
              : display),
          "inline" === checkDisplay &&
            "none" === jQuery.css(elem, "float") &&
            (support.inlineBlockNeedsLayout &&
            "inline" !== defaultDisplay(elem.nodeName)
              ? (style.zoom = 1)
              : (style.display = "inline-block"))),
        opts.overflow &&
          ((style.overflow = "hidden"),
          support.shrinkWrapBlocks() ||
            anim.always(function () {
              (style.overflow = opts.overflow[0]),
                (style.overflowX = opts.overflow[1]),
                (style.overflowY = opts.overflow[2]);
            }));
      for (prop in props)
        if (((value = props[prop]), rfxtypes.exec(value))) {
          if (
            (delete props[prop],
            (toggle = toggle || "toggle" === value),
            value === (hidden ? "hide" : "show"))
          ) {
            if ("show" !== value || !dataShow || void 0 === dataShow[prop])
              continue;
            hidden = !0;
          }
          orig[prop] = (dataShow && dataShow[prop]) || jQuery.style(elem, prop);
        } else display = void 0;
      if (jQuery.isEmptyObject(orig))
        "inline" ===
          ("none" === display ? defaultDisplay(elem.nodeName) : display) &&
          (style.display = display);
      else {
        dataShow
          ? "hidden" in dataShow && (hidden = dataShow.hidden)
          : (dataShow = jQuery._data(elem, "fxshow", {})),
          toggle && (dataShow.hidden = !hidden),
          hidden
            ? jQuery(elem).show()
            : anim.done(function () {
                jQuery(elem).hide();
              }),
          anim.done(function () {
            var prop;
            jQuery._removeData(elem, "fxshow");
            for (prop in orig) jQuery.style(elem, prop, orig[prop]);
          });
        for (prop in orig)
          (tween = createTween(hidden ? dataShow[prop] : 0, prop, anim)),
            prop in dataShow ||
              ((dataShow[prop] = tween.start),
              hidden &&
                ((tween.end = tween.start),
                (tween.start = "width" === prop || "height" === prop ? 1 : 0)));
      }
    }
    function propFilter(props, specialEasing) {
      var index, name, easing, value, hooks;
      for (index in props)
        if (
          ((name = jQuery.camelCase(index)),
          (easing = specialEasing[name]),
          (value = props[index]),
          jQuery.isArray(value) &&
            ((easing = value[1]), (value = props[index] = value[0])),
          index !== name && ((props[name] = value), delete props[index]),
          (hooks = jQuery.cssHooks[name]),
          hooks && "expand" in hooks)
        ) {
          (value = hooks.expand(value)), delete props[name];
          for (index in value)
            index in props ||
              ((props[index] = value[index]), (specialEasing[index] = easing));
        } else specialEasing[name] = easing;
    }
    function Animation(elem, properties, options) {
      var result,
        stopped,
        index = 0,
        length = animationPrefilters.length,
        deferred = jQuery.Deferred().always(function () {
          delete tick.elem;
        }),
        tick = function () {
          if (stopped) return !1;
          for (
            var currentTime = fxNow || createFxNow(),
              remaining = Math.max(
                0,
                animation.startTime + animation.duration - currentTime
              ),
              temp = remaining / animation.duration || 0,
              percent = 1 - temp,
              index = 0,
              length = animation.tweens.length;
            index < length;
            index++
          )
            animation.tweens[index].run(percent);
          return (
            deferred.notifyWith(elem, [animation, percent, remaining]),
            percent < 1 && length
              ? remaining
              : (deferred.resolveWith(elem, [animation]), !1)
          );
        },
        animation = deferred.promise({
          elem: elem,
          props: jQuery.extend({}, properties),
          opts: jQuery.extend(!0, { specialEasing: {} }, options),
          originalProperties: properties,
          originalOptions: options,
          startTime: fxNow || createFxNow(),
          duration: options.duration,
          tweens: [],
          createTween: function (prop, end) {
            var tween = jQuery.Tween(
              elem,
              animation.opts,
              prop,
              end,
              animation.opts.specialEasing[prop] || animation.opts.easing
            );
            return animation.tweens.push(tween), tween;
          },
          stop: function (gotoEnd) {
            var index = 0,
              length = gotoEnd ? animation.tweens.length : 0;
            if (stopped) return this;
            for (stopped = !0; index < length; index++)
              animation.tweens[index].run(1);
            return (
              gotoEnd
                ? deferred.resolveWith(elem, [animation, gotoEnd])
                : deferred.rejectWith(elem, [animation, gotoEnd]),
              this
            );
          },
        }),
        props = animation.props;
      for (
        propFilter(props, animation.opts.specialEasing);
        index < length;
        index++
      )
        if (
          (result = animationPrefilters[index].call(
            animation,
            elem,
            props,
            animation.opts
          ))
        )
          return result;
      return (
        jQuery.map(props, createTween, animation),
        jQuery.isFunction(animation.opts.start) &&
          animation.opts.start.call(elem, animation),
        jQuery.fx.timer(
          jQuery.extend(tick, {
            elem: elem,
            anim: animation,
            queue: animation.opts.queue,
          })
        ),
        animation
          .progress(animation.opts.progress)
          .done(animation.opts.done, animation.opts.complete)
          .fail(animation.opts.fail)
          .always(animation.opts.always)
      );
    }
    function addToPrefiltersOrTransports(structure) {
      return function (dataTypeExpression, func) {
        "string" != typeof dataTypeExpression &&
          ((func = dataTypeExpression), (dataTypeExpression = "*"));
        var dataType,
          i = 0,
          dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];
        if (jQuery.isFunction(func))
          for (; (dataType = dataTypes[i++]); )
            "+" === dataType.charAt(0)
              ? ((dataType = dataType.slice(1) || "*"),
                (structure[dataType] = structure[dataType] || []).unshift(func))
              : (structure[dataType] = structure[dataType] || []).push(func);
      };
    }
    function inspectPrefiltersOrTransports(
      structure,
      options,
      originalOptions,
      jqXHR
    ) {
      function inspect(dataType) {
        var selected;
        return (
          (inspected[dataType] = !0),
          jQuery.each(
            structure[dataType] || [],
            function (_, prefilterOrFactory) {
              var dataTypeOrTransport = prefilterOrFactory(
                options,
                originalOptions,
                jqXHR
              );
              return "string" != typeof dataTypeOrTransport ||
                seekingTransport ||
                inspected[dataTypeOrTransport]
                ? seekingTransport
                  ? !(selected = dataTypeOrTransport)
                  : void 0
                : (options.dataTypes.unshift(dataTypeOrTransport),
                  inspect(dataTypeOrTransport),
                  !1);
            }
          ),
          selected
        );
      }
      var inspected = {},
        seekingTransport = structure === transports;
      return inspect(options.dataTypes[0]) || (!inspected["*"] && inspect("*"));
    }
    function ajaxExtend(target, src) {
      var deep,
        key,
        flatOptions = jQuery.ajaxSettings.flatOptions || {};
      for (key in src)
        void 0 !== src[key] &&
          ((flatOptions[key] ? target : deep || (deep = {}))[key] = src[key]);
      return deep && jQuery.extend(!0, target, deep), target;
    }
    function ajaxHandleResponses(s, jqXHR, responses) {
      for (
        var firstDataType,
          ct,
          finalDataType,
          type,
          contents = s.contents,
          dataTypes = s.dataTypes;
        "*" === dataTypes[0];

      )
        dataTypes.shift(),
          void 0 === ct &&
            (ct = s.mimeType || jqXHR.getResponseHeader("Content-Type"));
      if (ct)
        for (type in contents)
          if (contents[type] && contents[type].test(ct)) {
            dataTypes.unshift(type);
            break;
          }
      if (dataTypes[0] in responses) finalDataType = dataTypes[0];
      else {
        for (type in responses) {
          if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
            finalDataType = type;
            break;
          }
          firstDataType || (firstDataType = type);
        }
        finalDataType = finalDataType || firstDataType;
      }
      if (finalDataType)
        return (
          finalDataType !== dataTypes[0] && dataTypes.unshift(finalDataType),
          responses[finalDataType]
        );
    }
    function ajaxConvert(s, response, jqXHR, isSuccess) {
      var conv2,
        current,
        conv,
        tmp,
        prev,
        converters = {},
        dataTypes = s.dataTypes.slice();
      if (dataTypes[1])
        for (conv in s.converters)
          converters[conv.toLowerCase()] = s.converters[conv];
      for (current = dataTypes.shift(); current; )
        if (
          (s.responseFields[current] &&
            (jqXHR[s.responseFields[current]] = response),
          !prev &&
            isSuccess &&
            s.dataFilter &&
            (response = s.dataFilter(response, s.dataType)),
          (prev = current),
          (current = dataTypes.shift()))
        )
          if ("*" === current) current = prev;
          else if ("*" !== prev && prev !== current) {
            if (
              ((conv =
                converters[prev + " " + current] || converters["* " + current]),
              !conv)
            )
              for (conv2 in converters)
                if (
                  ((tmp = conv2.split(" ")),
                  tmp[1] === current &&
                    (conv =
                      converters[prev + " " + tmp[0]] ||
                      converters["* " + tmp[0]]))
                ) {
                  conv === !0
                    ? (conv = converters[conv2])
                    : converters[conv2] !== !0 &&
                      ((current = tmp[0]), dataTypes.unshift(tmp[1]));
                  break;
                }
            if (conv !== !0)
              if (conv && s["throws"]) response = conv(response);
              else
                try {
                  response = conv(response);
                } catch (e) {
                  return {
                    state: "parsererror",
                    error: conv
                      ? e
                      : "No conversion from " + prev + " to " + current,
                  };
                }
          }
      return { state: "success", data: response };
    }
    function buildParams(prefix, obj, traditional, add) {
      var name;
      if (jQuery.isArray(obj))
        jQuery.each(obj, function (i, v) {
          traditional || rbracket.test(prefix)
            ? add(prefix, v)
            : buildParams(
                prefix + "[" + ("object" == typeof v ? i : "") + "]",
                v,
                traditional,
                add
              );
        });
      else if (traditional || "object" !== jQuery.type(obj)) add(prefix, obj);
      else
        for (name in obj)
          buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
    }
    function createStandardXHR() {
      try {
        return new window.XMLHttpRequest();
      } catch (e) {}
    }
    function createActiveXHR() {
      try {
        return new window.ActiveXObject("Microsoft.XMLHTTP");
      } catch (e) {}
    }
    function getWindow(elem) {
      return jQuery.isWindow(elem)
        ? elem
        : 9 === elem.nodeType && (elem.defaultView || elem.parentWindow);
    }
    var deletedIds = [],
      slice = deletedIds.slice,
      concat = deletedIds.concat,
      push = deletedIds.push,
      indexOf = deletedIds.indexOf,
      class2type = {},
      toString = class2type.toString,
      hasOwn = class2type.hasOwnProperty,
      support = {},
      version = "1.11.3",
      jQuery = function (selector, context) {
        return new jQuery.fn.init(selector, context);
      },
      rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      rmsPrefix = /^-ms-/,
      rdashAlpha = /-([\da-z])/gi,
      fcamelCase = function (all, letter) {
        return letter.toUpperCase();
      };
    (jQuery.fn = jQuery.prototype =
      {
        jquery: version,
        constructor: jQuery,
        selector: "",
        length: 0,
        toArray: function () {
          return slice.call(this);
        },
        get: function (num) {
          return null != num
            ? num < 0
              ? this[num + this.length]
              : this[num]
            : slice.call(this);
        },
        pushStack: function (elems) {
          var ret = jQuery.merge(this.constructor(), elems);
          return (ret.prevObject = this), (ret.context = this.context), ret;
        },
        each: function (callback, args) {
          return jQuery.each(this, callback, args);
        },
        map: function (callback) {
          return this.pushStack(
            jQuery.map(this, function (elem, i) {
              return callback.call(elem, i, elem);
            })
          );
        },
        slice: function () {
          return this.pushStack(slice.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        eq: function (i) {
          var len = this.length,
            j = +i + (i < 0 ? len : 0);
          return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor(null);
        },
        push: push,
        sort: deletedIds.sort,
        splice: deletedIds.splice,
      }),
      (jQuery.extend = jQuery.fn.extend =
        function () {
          var src,
            copyIsArray,
            copy,
            name,
            options,
            clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = !1;
          for (
            "boolean" == typeof target &&
              ((deep = target), (target = arguments[i] || {}), i++),
              "object" == typeof target ||
                jQuery.isFunction(target) ||
                (target = {}),
              i === length && ((target = this), i--);
            i < length;
            i++
          )
            if (null != (options = arguments[i]))
              for (name in options)
                (src = target[name]),
                  (copy = options[name]),
                  target !== copy &&
                    (deep &&
                    copy &&
                    (jQuery.isPlainObject(copy) ||
                      (copyIsArray = jQuery.isArray(copy)))
                      ? (copyIsArray
                          ? ((copyIsArray = !1),
                            (clone = src && jQuery.isArray(src) ? src : []))
                          : (clone =
                              src && jQuery.isPlainObject(src) ? src : {}),
                        (target[name] = jQuery.extend(deep, clone, copy)))
                      : void 0 !== copy && (target[name] = copy));
          return target;
        }),
      jQuery.extend({
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (msg) {
          throw new Error(msg);
        },
        noop: function () {},
        isFunction: function (obj) {
          return "function" === jQuery.type(obj);
        },
        isArray:
          Array.isArray ||
          function (obj) {
            return "array" === jQuery.type(obj);
          },
        isWindow: function (obj) {
          return null != obj && obj == obj.window;
        },
        isNumeric: function (obj) {
          return !jQuery.isArray(obj) && obj - parseFloat(obj) + 1 >= 0;
        },
        isEmptyObject: function (obj) {
          var name;
          for (name in obj) return !1;
          return !0;
        },
        isPlainObject: function (obj) {
          var key;
          if (
            !obj ||
            "object" !== jQuery.type(obj) ||
            obj.nodeType ||
            jQuery.isWindow(obj)
          )
            return !1;
          try {
            if (
              obj.constructor &&
              !hasOwn.call(obj, "constructor") &&
              !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")
            )
              return !1;
          } catch (e) {
            return !1;
          }
          if (support.ownLast) for (key in obj) return hasOwn.call(obj, key);
          for (key in obj);
          return void 0 === key || hasOwn.call(obj, key);
        },
        type: function (obj) {
          return null == obj
            ? obj + ""
            : "object" == typeof obj || "function" == typeof obj
            ? class2type[toString.call(obj)] || "object"
            : typeof obj;
        },
        globalEval: function (data) {
          data &&
            jQuery.trim(data) &&
            (
              window.execScript ||
              function (data) {
                window.eval.call(window, data);
              }
            )(data);
        },
        camelCase: function (string) {
          return string
            .replace(rmsPrefix, "ms-")
            .replace(rdashAlpha, fcamelCase);
        },
        nodeName: function (elem, name) {
          return (
            elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase()
          );
        },
        each: function (obj, callback, args) {
          var value,
            i = 0,
            length = obj.length,
            isArray = isArraylike(obj);
          if (args) {
            if (isArray)
              for (
                ;
                i < length &&
                ((value = callback.apply(obj[i], args)), value !== !1);
                i++
              );
            else
              for (i in obj)
                if (((value = callback.apply(obj[i], args)), value === !1))
                  break;
          } else if (isArray)
            for (
              ;
              i < length &&
              ((value = callback.call(obj[i], i, obj[i])), value !== !1);
              i++
            );
          else
            for (i in obj)
              if (((value = callback.call(obj[i], i, obj[i])), value === !1))
                break;
          return obj;
        },
        trim: function (text) {
          return null == text ? "" : (text + "").replace(rtrim, "");
        },
        makeArray: function (arr, results) {
          var ret = results || [];
          return (
            null != arr &&
              (isArraylike(Object(arr))
                ? jQuery.merge(ret, "string" == typeof arr ? [arr] : arr)
                : push.call(ret, arr)),
            ret
          );
        },
        inArray: function (elem, arr, i) {
          var len;
          if (arr) {
            if (indexOf) return indexOf.call(arr, elem, i);
            for (
              len = arr.length, i = i ? (i < 0 ? Math.max(0, len + i) : i) : 0;
              i < len;
              i++
            )
              if (i in arr && arr[i] === elem) return i;
          }
          return -1;
        },
        merge: function (first, second) {
          for (var len = +second.length, j = 0, i = first.length; j < len; )
            first[i++] = second[j++];
          if (len !== len)
            for (; void 0 !== second[j]; ) first[i++] = second[j++];
          return (first.length = i), first;
        },
        grep: function (elems, callback, invert) {
          for (
            var callbackInverse,
              matches = [],
              i = 0,
              length = elems.length,
              callbackExpect = !invert;
            i < length;
            i++
          )
            (callbackInverse = !callback(elems[i], i)),
              callbackInverse !== callbackExpect && matches.push(elems[i]);
          return matches;
        },
        map: function (elems, callback, arg) {
          var value,
            i = 0,
            length = elems.length,
            isArray = isArraylike(elems),
            ret = [];
          if (isArray)
            for (; i < length; i++)
              (value = callback(elems[i], i, arg)),
                null != value && ret.push(value);
          else
            for (i in elems)
              (value = callback(elems[i], i, arg)),
                null != value && ret.push(value);
          return concat.apply([], ret);
        },
        guid: 1,
        proxy: function (fn, context) {
          var args, proxy, tmp;
          if (
            ("string" == typeof context &&
              ((tmp = fn[context]), (context = fn), (fn = tmp)),
            jQuery.isFunction(fn))
          )
            return (
              (args = slice.call(arguments, 2)),
              (proxy = function () {
                return fn.apply(
                  context || this,
                  args.concat(slice.call(arguments))
                );
              }),
              (proxy.guid = fn.guid = fn.guid || jQuery.guid++),
              proxy
            );
        },
        now: function () {
          return +new Date();
        },
        support: support,
      }),
      jQuery.each(
        "Boolean Number String Function Array Date RegExp Object Error".split(
          " "
        ),
        function (i, name) {
          class2type["[object " + name + "]"] = name.toLowerCase();
        }
      );
    var Sizzle =
      /*!
       * Sizzle CSS Selector Engine v2.2.0-pre
       * http://sizzlejs.com/
       *
       * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
       * Released under the MIT license
       * http://jquery.org/license
       *
       * Date: 2014-12-16
       */
      (function (window) {
        function Sizzle(selector, context, results, seed) {
          var match,
            elem,
            m,
            nodeType,
            i,
            groups,
            old,
            nid,
            newContext,
            newSelector;
          if (
            ((context ? context.ownerDocument || context : preferredDoc) !==
              document && setDocument(context),
            (context = context || document),
            (results = results || []),
            (nodeType = context.nodeType),
            "string" != typeof selector ||
              !selector ||
              (1 !== nodeType && 9 !== nodeType && 11 !== nodeType))
          )
            return results;
          if (!seed && documentIsHTML) {
            if (11 !== nodeType && (match = rquickExpr.exec(selector)))
              if ((m = match[1])) {
                if (9 === nodeType) {
                  if (
                    ((elem = context.getElementById(m)),
                    !elem || !elem.parentNode)
                  )
                    return results;
                  if (elem.id === m) return results.push(elem), results;
                } else if (
                  context.ownerDocument &&
                  (elem = context.ownerDocument.getElementById(m)) &&
                  contains(context, elem) &&
                  elem.id === m
                )
                  return results.push(elem), results;
              } else {
                if (match[2])
                  return (
                    push.apply(results, context.getElementsByTagName(selector)),
                    results
                  );
                if ((m = match[3]) && support.getElementsByClassName)
                  return (
                    push.apply(results, context.getElementsByClassName(m)),
                    results
                  );
              }
            if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
              if (
                ((nid = old = expando),
                (newContext = context),
                (newSelector = 1 !== nodeType && selector),
                1 === nodeType && "object" !== context.nodeName.toLowerCase())
              ) {
                for (
                  groups = tokenize(selector),
                    (old = context.getAttribute("id"))
                      ? (nid = old.replace(rescape, "\\$&"))
                      : context.setAttribute("id", nid),
                    nid = "[id='" + nid + "'] ",
                    i = groups.length;
                  i--;

                )
                  groups[i] = nid + toSelector(groups[i]);
                (newContext =
                  (rsibling.test(selector) &&
                    testContext(context.parentNode)) ||
                  context),
                  (newSelector = groups.join(","));
              }
              if (newSelector)
                try {
                  return (
                    push.apply(
                      results,
                      newContext.querySelectorAll(newSelector)
                    ),
                    results
                  );
                } catch (qsaError) {
                } finally {
                  old || context.removeAttribute("id");
                }
            }
          }
          return select(selector.replace(rtrim, "$1"), context, results, seed);
        }
        function createCache() {
          function cache(key, value) {
            return (
              keys.push(key + " ") > Expr.cacheLength &&
                delete cache[keys.shift()],
              (cache[key + " "] = value)
            );
          }
          var keys = [];
          return cache;
        }
        function markFunction(fn) {
          return (fn[expando] = !0), fn;
        }
        function assert(fn) {
          var div = document.createElement("div");
          try {
            return !!fn(div);
          } catch (e) {
            return !1;
          } finally {
            div.parentNode && div.parentNode.removeChild(div), (div = null);
          }
        }
        function addHandle(attrs, handler) {
          for (var arr = attrs.split("|"), i = attrs.length; i--; )
            Expr.attrHandle[arr[i]] = handler;
        }
        function siblingCheck(a, b) {
          var cur = b && a,
            diff =
              cur &&
              1 === a.nodeType &&
              1 === b.nodeType &&
              (~b.sourceIndex || MAX_NEGATIVE) -
                (~a.sourceIndex || MAX_NEGATIVE);
          if (diff) return diff;
          if (cur) for (; (cur = cur.nextSibling); ) if (cur === b) return -1;
          return a ? 1 : -1;
        }
        function createInputPseudo(type) {
          return function (elem) {
            var name = elem.nodeName.toLowerCase();
            return "input" === name && elem.type === type;
          };
        }
        function createButtonPseudo(type) {
          return function (elem) {
            var name = elem.nodeName.toLowerCase();
            return (
              ("input" === name || "button" === name) && elem.type === type
            );
          };
        }
        function createPositionalPseudo(fn) {
          return markFunction(function (argument) {
            return (
              (argument = +argument),
              markFunction(function (seed, matches) {
                for (
                  var j,
                    matchIndexes = fn([], seed.length, argument),
                    i = matchIndexes.length;
                  i--;

                )
                  seed[(j = matchIndexes[i])] &&
                    (seed[j] = !(matches[j] = seed[j]));
              })
            );
          });
        }
        function testContext(context) {
          return (
            context &&
            "undefined" != typeof context.getElementsByTagName &&
            context
          );
        }
        function setFilters() {}
        function toSelector(tokens) {
          for (var i = 0, len = tokens.length, selector = ""; i < len; i++)
            selector += tokens[i].value;
          return selector;
        }
        function addCombinator(matcher, combinator, base) {
          var dir = combinator.dir,
            checkNonElements = base && "parentNode" === dir,
            doneName = done++;
          return combinator.first
            ? function (elem, context, xml) {
                for (; (elem = elem[dir]); )
                  if (1 === elem.nodeType || checkNonElements)
                    return matcher(elem, context, xml);
              }
            : function (elem, context, xml) {
                var oldCache,
                  outerCache,
                  newCache = [dirruns, doneName];
                if (xml) {
                  for (; (elem = elem[dir]); )
                    if (
                      (1 === elem.nodeType || checkNonElements) &&
                      matcher(elem, context, xml)
                    )
                      return !0;
                } else
                  for (; (elem = elem[dir]); )
                    if (1 === elem.nodeType || checkNonElements) {
                      if (
                        ((outerCache = elem[expando] || (elem[expando] = {})),
                        (oldCache = outerCache[dir]) &&
                          oldCache[0] === dirruns &&
                          oldCache[1] === doneName)
                      )
                        return (newCache[2] = oldCache[2]);
                      if (
                        ((outerCache[dir] = newCache),
                        (newCache[2] = matcher(elem, context, xml)))
                      )
                        return !0;
                    }
              };
        }
        function elementMatcher(matchers) {
          return matchers.length > 1
            ? function (elem, context, xml) {
                for (var i = matchers.length; i--; )
                  if (!matchers[i](elem, context, xml)) return !1;
                return !0;
              }
            : matchers[0];
        }
        function multipleContexts(selector, contexts, results) {
          for (var i = 0, len = contexts.length; i < len; i++)
            Sizzle(selector, contexts[i], results);
          return results;
        }
        function condense(unmatched, map, filter, context, xml) {
          for (
            var elem,
              newUnmatched = [],
              i = 0,
              len = unmatched.length,
              mapped = null != map;
            i < len;
            i++
          )
            (elem = unmatched[i]) &&
              ((filter && !filter(elem, context, xml)) ||
                (newUnmatched.push(elem), mapped && map.push(i)));
          return newUnmatched;
        }
        function setMatcher(
          preFilter,
          selector,
          matcher,
          postFilter,
          postFinder,
          postSelector
        ) {
          return (
            postFilter &&
              !postFilter[expando] &&
              (postFilter = setMatcher(postFilter)),
            postFinder &&
              !postFinder[expando] &&
              (postFinder = setMatcher(postFinder, postSelector)),
            markFunction(function (seed, results, context, xml) {
              var temp,
                i,
                elem,
                preMap = [],
                postMap = [],
                preexisting = results.length,
                elems =
                  seed ||
                  multipleContexts(
                    selector || "*",
                    context.nodeType ? [context] : context,
                    []
                  ),
                matcherIn =
                  !preFilter || (!seed && selector)
                    ? elems
                    : condense(elems, preMap, preFilter, context, xml),
                matcherOut = matcher
                  ? postFinder || (seed ? preFilter : preexisting || postFilter)
                    ? []
                    : results
                  : matcherIn;
              if (
                (matcher && matcher(matcherIn, matcherOut, context, xml),
                postFilter)
              )
                for (
                  temp = condense(matcherOut, postMap),
                    postFilter(temp, [], context, xml),
                    i = temp.length;
                  i--;

                )
                  (elem = temp[i]) &&
                    (matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem));
              if (seed) {
                if (postFinder || preFilter) {
                  if (postFinder) {
                    for (temp = [], i = matcherOut.length; i--; )
                      (elem = matcherOut[i]) &&
                        temp.push((matcherIn[i] = elem));
                    postFinder(null, (matcherOut = []), temp, xml);
                  }
                  for (i = matcherOut.length; i--; )
                    (elem = matcherOut[i]) &&
                      (temp = postFinder ? indexOf(seed, elem) : preMap[i]) >
                        -1 &&
                      (seed[temp] = !(results[temp] = elem));
                }
              } else (matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut)), postFinder ? postFinder(null, results, matcherOut, xml) : push.apply(results, matcherOut);
            })
          );
        }
        function matcherFromTokens(tokens) {
          for (
            var checkContext,
              matcher,
              j,
              len = tokens.length,
              leadingRelative = Expr.relative[tokens[0].type],
              implicitRelative = leadingRelative || Expr.relative[" "],
              i = leadingRelative ? 1 : 0,
              matchContext = addCombinator(
                function (elem) {
                  return elem === checkContext;
                },
                implicitRelative,
                !0
              ),
              matchAnyContext = addCombinator(
                function (elem) {
                  return indexOf(checkContext, elem) > -1;
                },
                implicitRelative,
                !0
              ),
              matchers = [
                function (elem, context, xml) {
                  var ret =
                    (!leadingRelative &&
                      (xml || context !== outermostContext)) ||
                    ((checkContext = context).nodeType
                      ? matchContext(elem, context, xml)
                      : matchAnyContext(elem, context, xml));
                  return (checkContext = null), ret;
                },
              ];
            i < len;
            i++
          )
            if ((matcher = Expr.relative[tokens[i].type]))
              matchers = [addCombinator(elementMatcher(matchers), matcher)];
            else {
              if (
                ((matcher = Expr.filter[tokens[i].type].apply(
                  null,
                  tokens[i].matches
                )),
                matcher[expando])
              ) {
                for (j = ++i; j < len && !Expr.relative[tokens[j].type]; j++);
                return setMatcher(
                  i > 1 && elementMatcher(matchers),
                  i > 1 &&
                    toSelector(
                      tokens
                        .slice(0, i - 1)
                        .concat({
                          value: " " === tokens[i - 2].type ? "*" : "",
                        })
                    ).replace(rtrim, "$1"),
                  matcher,
                  i < j && matcherFromTokens(tokens.slice(i, j)),
                  j < len && matcherFromTokens((tokens = tokens.slice(j))),
                  j < len && toSelector(tokens)
                );
              }
              matchers.push(matcher);
            }
          return elementMatcher(matchers);
        }
        function matcherFromGroupMatchers(elementMatchers, setMatchers) {
          var bySet = setMatchers.length > 0,
            byElement = elementMatchers.length > 0,
            superMatcher = function (seed, context, xml, results, outermost) {
              var elem,
                j,
                matcher,
                matchedCount = 0,
                i = "0",
                unmatched = seed && [],
                setMatched = [],
                contextBackup = outermostContext,
                elems = seed || (byElement && Expr.find.TAG("*", outermost)),
                dirrunsUnique = (dirruns +=
                  null == contextBackup ? 1 : Math.random() || 0.1),
                len = elems.length;
              for (
                outermost &&
                (outermostContext = context !== document && context);
                i !== len && null != (elem = elems[i]);
                i++
              ) {
                if (byElement && elem) {
                  for (j = 0; (matcher = elementMatchers[j++]); )
                    if (matcher(elem, context, xml)) {
                      results.push(elem);
                      break;
                    }
                  outermost && (dirruns = dirrunsUnique);
                }
                bySet &&
                  ((elem = !matcher && elem) && matchedCount--,
                  seed && unmatched.push(elem));
              }
              if (((matchedCount += i), bySet && i !== matchedCount)) {
                for (j = 0; (matcher = setMatchers[j++]); )
                  matcher(unmatched, setMatched, context, xml);
                if (seed) {
                  if (matchedCount > 0)
                    for (; i--; )
                      unmatched[i] ||
                        setMatched[i] ||
                        (setMatched[i] = pop.call(results));
                  setMatched = condense(setMatched);
                }
                push.apply(results, setMatched),
                  outermost &&
                    !seed &&
                    setMatched.length > 0 &&
                    matchedCount + setMatchers.length > 1 &&
                    Sizzle.uniqueSort(results);
              }
              return (
                outermost &&
                  ((dirruns = dirrunsUnique),
                  (outermostContext = contextBackup)),
                unmatched
              );
            };
          return bySet ? markFunction(superMatcher) : superMatcher;
        }
        var i,
          support,
          Expr,
          getText,
          isXML,
          tokenize,
          compile,
          select,
          outermostContext,
          sortInput,
          hasDuplicate,
          setDocument,
          document,
          docElem,
          documentIsHTML,
          rbuggyQSA,
          rbuggyMatches,
          matches,
          contains,
          expando = "sizzle" + 1 * new Date(),
          preferredDoc = window.document,
          dirruns = 0,
          done = 0,
          classCache = createCache(),
          tokenCache = createCache(),
          compilerCache = createCache(),
          sortOrder = function (a, b) {
            return a === b && (hasDuplicate = !0), 0;
          },
          MAX_NEGATIVE = 1 << 31,
          hasOwn = {}.hasOwnProperty,
          arr = [],
          pop = arr.pop,
          push_native = arr.push,
          push = arr.push,
          slice = arr.slice,
          indexOf = function (list, elem) {
            for (var i = 0, len = list.length; i < len; i++)
              if (list[i] === elem) return i;
            return -1;
          },
          booleans =
            "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          whitespace = "[\\x20\\t\\r\\n\\f]",
          characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
          identifier = characterEncoding.replace("w", "w#"),
          attributes =
            "\\[" +
            whitespace +
            "*(" +
            characterEncoding +
            ")(?:" +
            whitespace +
            "*([*^$|!~]?=)" +
            whitespace +
            "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
            identifier +
            "))|)" +
            whitespace +
            "*\\]",
          pseudos =
            ":(" +
            characterEncoding +
            ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
            attributes +
            ")*)|.*)\\)|)",
          rwhitespace = new RegExp(whitespace + "+", "g"),
          rtrim = new RegExp(
            "^" +
              whitespace +
              "+|((?:^|[^\\\\])(?:\\\\.)*)" +
              whitespace +
              "+$",
            "g"
          ),
          rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
          rcombinators = new RegExp(
            "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"
          ),
          rattributeQuotes = new RegExp(
            "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]",
            "g"
          ),
          rpseudo = new RegExp(pseudos),
          ridentifier = new RegExp("^" + identifier + "$"),
          matchExpr = {
            ID: new RegExp("^#(" + characterEncoding + ")"),
            CLASS: new RegExp("^\\.(" + characterEncoding + ")"),
            TAG: new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + attributes),
            PSEUDO: new RegExp("^" + pseudos),
            CHILD: new RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                whitespace +
                "*(even|odd|(([+-]|)(\\d*)n|)" +
                whitespace +
                "*(?:([+-]|)" +
                whitespace +
                "*(\\d+)|))" +
                whitespace +
                "*\\)|)",
              "i"
            ),
            bool: new RegExp("^(?:" + booleans + ")$", "i"),
            needsContext: new RegExp(
              "^" +
                whitespace +
                "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                whitespace +
                "*((?:-\\d)?\\d*)" +
                whitespace +
                "*\\)|)(?=[^-]|$)",
              "i"
            ),
          },
          rinputs = /^(?:input|select|textarea|button)$/i,
          rheader = /^h\d$/i,
          rnative = /^[^{]+\{\s*\[native \w/,
          rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          rsibling = /[+~]/,
          rescape = /'|\\/g,
          runescape = new RegExp(
            "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)",
            "ig"
          ),
          funescape = function (_, escaped, escapedWhitespace) {
            var high = "0x" + escaped - 65536;
            return high !== high || escapedWhitespace
              ? escaped
              : high < 0
              ? String.fromCharCode(high + 65536)
              : String.fromCharCode(
                  (high >> 10) | 55296,
                  (1023 & high) | 56320
                );
          },
          unloadHandler = function () {
            setDocument();
          };
        try {
          push.apply(
            (arr = slice.call(preferredDoc.childNodes)),
            preferredDoc.childNodes
          ),
            arr[preferredDoc.childNodes.length].nodeType;
        } catch (e) {
          push = {
            apply: arr.length
              ? function (target, els) {
                  push_native.apply(target, slice.call(els));
                }
              : function (target, els) {
                  for (
                    var j = target.length, i = 0;
                    (target[j++] = els[i++]);

                  );
                  target.length = j - 1;
                },
          };
        }
        (support = Sizzle.support = {}),
          (isXML = Sizzle.isXML =
            function (elem) {
              var documentElement =
                elem && (elem.ownerDocument || elem).documentElement;
              return !!documentElement && "HTML" !== documentElement.nodeName;
            }),
          (setDocument = Sizzle.setDocument =
            function (node) {
              var hasCompare,
                parent,
                doc = node ? node.ownerDocument || node : preferredDoc;
              return doc !== document &&
                9 === doc.nodeType &&
                doc.documentElement
                ? ((document = doc),
                  (docElem = doc.documentElement),
                  (parent = doc.defaultView),
                  parent &&
                    parent !== parent.top &&
                    (parent.addEventListener
                      ? parent.addEventListener("unload", unloadHandler, !1)
                      : parent.attachEvent &&
                        parent.attachEvent("onunload", unloadHandler)),
                  (documentIsHTML = !isXML(doc)),
                  (support.attributes = assert(function (div) {
                    return (
                      (div.className = "i"), !div.getAttribute("className")
                    );
                  })),
                  (support.getElementsByTagName = assert(function (div) {
                    return (
                      div.appendChild(doc.createComment("")),
                      !div.getElementsByTagName("*").length
                    );
                  })),
                  (support.getElementsByClassName = rnative.test(
                    doc.getElementsByClassName
                  )),
                  (support.getById = assert(function (div) {
                    return (
                      (docElem.appendChild(div).id = expando),
                      !doc.getElementsByName ||
                        !doc.getElementsByName(expando).length
                    );
                  })),
                  support.getById
                    ? ((Expr.find.ID = function (id, context) {
                        if (
                          "undefined" != typeof context.getElementById &&
                          documentIsHTML
                        ) {
                          var m = context.getElementById(id);
                          return m && m.parentNode ? [m] : [];
                        }
                      }),
                      (Expr.filter.ID = function (id) {
                        var attrId = id.replace(runescape, funescape);
                        return function (elem) {
                          return elem.getAttribute("id") === attrId;
                        };
                      }))
                    : (delete Expr.find.ID,
                      (Expr.filter.ID = function (id) {
                        var attrId = id.replace(runescape, funescape);
                        return function (elem) {
                          var node =
                            "undefined" != typeof elem.getAttributeNode &&
                            elem.getAttributeNode("id");
                          return node && node.value === attrId;
                        };
                      })),
                  (Expr.find.TAG = support.getElementsByTagName
                    ? function (tag, context) {
                        return "undefined" !=
                          typeof context.getElementsByTagName
                          ? context.getElementsByTagName(tag)
                          : support.qsa
                          ? context.querySelectorAll(tag)
                          : void 0;
                      }
                    : function (tag, context) {
                        var elem,
                          tmp = [],
                          i = 0,
                          results = context.getElementsByTagName(tag);
                        if ("*" === tag) {
                          for (; (elem = results[i++]); )
                            1 === elem.nodeType && tmp.push(elem);
                          return tmp;
                        }
                        return results;
                      }),
                  (Expr.find.CLASS =
                    support.getElementsByClassName &&
                    function (className, context) {
                      if (documentIsHTML)
                        return context.getElementsByClassName(className);
                    }),
                  (rbuggyMatches = []),
                  (rbuggyQSA = []),
                  (support.qsa = rnative.test(doc.querySelectorAll)) &&
                    (assert(function (div) {
                      (docElem.appendChild(div).innerHTML =
                        "<a id='" +
                        expando +
                        "'></a><select id='" +
                        expando +
                        "-\f]' msallowcapture=''><option selected=''></option></select>"),
                        div.querySelectorAll("[msallowcapture^='']").length &&
                          rbuggyQSA.push(
                            "[*^$]=" + whitespace + "*(?:''|\"\")"
                          ),
                        div.querySelectorAll("[selected]").length ||
                          rbuggyQSA.push(
                            "\\[" + whitespace + "*(?:value|" + booleans + ")"
                          ),
                        div.querySelectorAll("[id~=" + expando + "-]").length ||
                          rbuggyQSA.push("~="),
                        div.querySelectorAll(":checked").length ||
                          rbuggyQSA.push(":checked"),
                        div.querySelectorAll("a#" + expando + "+*").length ||
                          rbuggyQSA.push(".#.+[+~]");
                    }),
                    assert(function (div) {
                      var input = doc.createElement("input");
                      input.setAttribute("type", "hidden"),
                        div.appendChild(input).setAttribute("name", "D"),
                        div.querySelectorAll("[name=d]").length &&
                          rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?="),
                        div.querySelectorAll(":enabled").length ||
                          rbuggyQSA.push(":enabled", ":disabled"),
                        div.querySelectorAll("*,:x"),
                        rbuggyQSA.push(",.*:");
                    })),
                  (support.matchesSelector = rnative.test(
                    (matches =
                      docElem.matches ||
                      docElem.webkitMatchesSelector ||
                      docElem.mozMatchesSelector ||
                      docElem.oMatchesSelector ||
                      docElem.msMatchesSelector)
                  )) &&
                    assert(function (div) {
                      (support.disconnectedMatch = matches.call(div, "div")),
                        matches.call(div, "[s!='']:x"),
                        rbuggyMatches.push("!=", pseudos);
                    }),
                  (rbuggyQSA =
                    rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"))),
                  (rbuggyMatches =
                    rbuggyMatches.length &&
                    new RegExp(rbuggyMatches.join("|"))),
                  (hasCompare = rnative.test(docElem.compareDocumentPosition)),
                  (contains =
                    hasCompare || rnative.test(docElem.contains)
                      ? function (a, b) {
                          var adown = 9 === a.nodeType ? a.documentElement : a,
                            bup = b && b.parentNode;
                          return (
                            a === bup ||
                            !(
                              !bup ||
                              1 !== bup.nodeType ||
                              !(adown.contains
                                ? adown.contains(bup)
                                : a.compareDocumentPosition &&
                                  16 & a.compareDocumentPosition(bup))
                            )
                          );
                        }
                      : function (a, b) {
                          if (b)
                            for (; (b = b.parentNode); ) if (b === a) return !0;
                          return !1;
                        }),
                  (sortOrder = hasCompare
                    ? function (a, b) {
                        if (a === b) return (hasDuplicate = !0), 0;
                        var compare =
                          !a.compareDocumentPosition -
                          !b.compareDocumentPosition;
                        return compare
                          ? compare
                          : ((compare =
                              (a.ownerDocument || a) === (b.ownerDocument || b)
                                ? a.compareDocumentPosition(b)
                                : 1),
                            1 & compare ||
                            (!support.sortDetached &&
                              b.compareDocumentPosition(a) === compare)
                              ? a === doc ||
                                (a.ownerDocument === preferredDoc &&
                                  contains(preferredDoc, a))
                                ? -1
                                : b === doc ||
                                  (b.ownerDocument === preferredDoc &&
                                    contains(preferredDoc, b))
                                ? 1
                                : sortInput
                                ? indexOf(sortInput, a) - indexOf(sortInput, b)
                                : 0
                              : 4 & compare
                              ? -1
                              : 1);
                      }
                    : function (a, b) {
                        if (a === b) return (hasDuplicate = !0), 0;
                        var cur,
                          i = 0,
                          aup = a.parentNode,
                          bup = b.parentNode,
                          ap = [a],
                          bp = [b];
                        if (!aup || !bup)
                          return a === doc
                            ? -1
                            : b === doc
                            ? 1
                            : aup
                            ? -1
                            : bup
                            ? 1
                            : sortInput
                            ? indexOf(sortInput, a) - indexOf(sortInput, b)
                            : 0;
                        if (aup === bup) return siblingCheck(a, b);
                        for (cur = a; (cur = cur.parentNode); ) ap.unshift(cur);
                        for (cur = b; (cur = cur.parentNode); ) bp.unshift(cur);
                        for (; ap[i] === bp[i]; ) i++;
                        return i
                          ? siblingCheck(ap[i], bp[i])
                          : ap[i] === preferredDoc
                          ? -1
                          : bp[i] === preferredDoc
                          ? 1
                          : 0;
                      }),
                  doc)
                : document;
            }),
          (Sizzle.matches = function (expr, elements) {
            return Sizzle(expr, null, null, elements);
          }),
          (Sizzle.matchesSelector = function (elem, expr) {
            if (
              ((elem.ownerDocument || elem) !== document && setDocument(elem),
              (expr = expr.replace(rattributeQuotes, "='$1']")),
              support.matchesSelector &&
                documentIsHTML &&
                (!rbuggyMatches || !rbuggyMatches.test(expr)) &&
                (!rbuggyQSA || !rbuggyQSA.test(expr)))
            )
              try {
                var ret = matches.call(elem, expr);
                if (
                  ret ||
                  support.disconnectedMatch ||
                  (elem.document && 11 !== elem.document.nodeType)
                )
                  return ret;
              } catch (e) {}
            return Sizzle(expr, document, null, [elem]).length > 0;
          }),
          (Sizzle.contains = function (context, elem) {
            return (
              (context.ownerDocument || context) !== document &&
                setDocument(context),
              contains(context, elem)
            );
          }),
          (Sizzle.attr = function (elem, name) {
            (elem.ownerDocument || elem) !== document && setDocument(elem);
            var fn = Expr.attrHandle[name.toLowerCase()],
              val =
                fn && hasOwn.call(Expr.attrHandle, name.toLowerCase())
                  ? fn(elem, name, !documentIsHTML)
                  : void 0;
            return void 0 !== val
              ? val
              : support.attributes || !documentIsHTML
              ? elem.getAttribute(name)
              : (val = elem.getAttributeNode(name)) && val.specified
              ? val.value
              : null;
          }),
          (Sizzle.error = function (msg) {
            throw new Error("Syntax error, unrecognized expression: " + msg);
          }),
          (Sizzle.uniqueSort = function (results) {
            var elem,
              duplicates = [],
              j = 0,
              i = 0;
            if (
              ((hasDuplicate = !support.detectDuplicates),
              (sortInput = !support.sortStable && results.slice(0)),
              results.sort(sortOrder),
              hasDuplicate)
            ) {
              for (; (elem = results[i++]); )
                elem === results[i] && (j = duplicates.push(i));
              for (; j--; ) results.splice(duplicates[j], 1);
            }
            return (sortInput = null), results;
          }),
          (getText = Sizzle.getText =
            function (elem) {
              var node,
                ret = "",
                i = 0,
                nodeType = elem.nodeType;
              if (nodeType) {
                if (1 === nodeType || 9 === nodeType || 11 === nodeType) {
                  if ("string" == typeof elem.textContent)
                    return elem.textContent;
                  for (elem = elem.firstChild; elem; elem = elem.nextSibling)
                    ret += getText(elem);
                } else if (3 === nodeType || 4 === nodeType)
                  return elem.nodeValue;
              } else for (; (node = elem[i++]); ) ret += getText(node);
              return ret;
            }),
          (Expr = Sizzle.selectors =
            {
              cacheLength: 50,
              createPseudo: markFunction,
              match: matchExpr,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" },
              },
              preFilter: {
                ATTR: function (match) {
                  return (
                    (match[1] = match[1].replace(runescape, funescape)),
                    (match[3] = (
                      match[3] ||
                      match[4] ||
                      match[5] ||
                      ""
                    ).replace(runescape, funescape)),
                    "~=" === match[2] && (match[3] = " " + match[3] + " "),
                    match.slice(0, 4)
                  );
                },
                CHILD: function (match) {
                  return (
                    (match[1] = match[1].toLowerCase()),
                    "nth" === match[1].slice(0, 3)
                      ? (match[3] || Sizzle.error(match[0]),
                        (match[4] = +(match[4]
                          ? match[5] + (match[6] || 1)
                          : 2 * ("even" === match[3] || "odd" === match[3]))),
                        (match[5] = +(
                          match[7] + match[8] || "odd" === match[3]
                        )))
                      : match[3] && Sizzle.error(match[0]),
                    match
                  );
                },
                PSEUDO: function (match) {
                  var excess,
                    unquoted = !match[6] && match[2];
                  return matchExpr.CHILD.test(match[0])
                    ? null
                    : (match[3]
                        ? (match[2] = match[4] || match[5] || "")
                        : unquoted &&
                          rpseudo.test(unquoted) &&
                          (excess = tokenize(unquoted, !0)) &&
                          (excess =
                            unquoted.indexOf(")", unquoted.length - excess) -
                            unquoted.length) &&
                          ((match[0] = match[0].slice(0, excess)),
                          (match[2] = unquoted.slice(0, excess))),
                      match.slice(0, 3));
                },
              },
              filter: {
                TAG: function (nodeNameSelector) {
                  var nodeName = nodeNameSelector
                    .replace(runescape, funescape)
                    .toLowerCase();
                  return "*" === nodeNameSelector
                    ? function () {
                        return !0;
                      }
                    : function (elem) {
                        return (
                          elem.nodeName &&
                          elem.nodeName.toLowerCase() === nodeName
                        );
                      };
                },
                CLASS: function (className) {
                  var pattern = classCache[className + " "];
                  return (
                    pattern ||
                    ((pattern = new RegExp(
                      "(^|" +
                        whitespace +
                        ")" +
                        className +
                        "(" +
                        whitespace +
                        "|$)"
                    )) &&
                      classCache(className, function (elem) {
                        return pattern.test(
                          ("string" == typeof elem.className &&
                            elem.className) ||
                            ("undefined" != typeof elem.getAttribute &&
                              elem.getAttribute("class")) ||
                            ""
                        );
                      }))
                  );
                },
                ATTR: function (name, operator, check) {
                  return function (elem) {
                    var result = Sizzle.attr(elem, name);
                    return null == result
                      ? "!=" === operator
                      : !operator ||
                          ((result += ""),
                          "=" === operator
                            ? result === check
                            : "!=" === operator
                            ? result !== check
                            : "^=" === operator
                            ? check && 0 === result.indexOf(check)
                            : "*=" === operator
                            ? check && result.indexOf(check) > -1
                            : "$=" === operator
                            ? check && result.slice(-check.length) === check
                            : "~=" === operator
                            ? (
                                " " +
                                result.replace(rwhitespace, " ") +
                                " "
                              ).indexOf(check) > -1
                            : "|=" === operator &&
                              (result === check ||
                                result.slice(0, check.length + 1) ===
                                  check + "-"));
                  };
                },
                CHILD: function (type, what, argument, first, last) {
                  var simple = "nth" !== type.slice(0, 3),
                    forward = "last" !== type.slice(-4),
                    ofType = "of-type" === what;
                  return 1 === first && 0 === last
                    ? function (elem) {
                        return !!elem.parentNode;
                      }
                    : function (elem, context, xml) {
                        var cache,
                          outerCache,
                          node,
                          diff,
                          nodeIndex,
                          start,
                          dir =
                            simple !== forward
                              ? "nextSibling"
                              : "previousSibling",
                          parent = elem.parentNode,
                          name = ofType && elem.nodeName.toLowerCase(),
                          useCache = !xml && !ofType;
                        if (parent) {
                          if (simple) {
                            for (; dir; ) {
                              for (node = elem; (node = node[dir]); )
                                if (
                                  ofType
                                    ? node.nodeName.toLowerCase() === name
                                    : 1 === node.nodeType
                                )
                                  return !1;
                              start = dir =
                                "only" === type && !start && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((start = [
                              forward ? parent.firstChild : parent.lastChild,
                            ]),
                            forward && useCache)
                          ) {
                            for (
                              outerCache =
                                parent[expando] || (parent[expando] = {}),
                                cache = outerCache[type] || [],
                                nodeIndex = cache[0] === dirruns && cache[1],
                                diff = cache[0] === dirruns && cache[2],
                                node =
                                  nodeIndex && parent.childNodes[nodeIndex];
                              (node =
                                (++nodeIndex && node && node[dir]) ||
                                (diff = nodeIndex = 0) ||
                                start.pop());

                            )
                              if (
                                1 === node.nodeType &&
                                ++diff &&
                                node === elem
                              ) {
                                outerCache[type] = [dirruns, nodeIndex, diff];
                                break;
                              }
                          } else if (
                            useCache &&
                            (cache = (elem[expando] || (elem[expando] = {}))[
                              type
                            ]) &&
                            cache[0] === dirruns
                          )
                            diff = cache[1];
                          else
                            for (
                              ;
                              (node =
                                (++nodeIndex && node && node[dir]) ||
                                (diff = nodeIndex = 0) ||
                                start.pop()) &&
                              ((ofType
                                ? node.nodeName.toLowerCase() !== name
                                : 1 !== node.nodeType) ||
                                !++diff ||
                                (useCache &&
                                  ((node[expando] || (node[expando] = {}))[
                                    type
                                  ] = [dirruns, diff]),
                                node !== elem));

                            );
                          return (
                            (diff -= last),
                            diff === first ||
                              (diff % first === 0 && diff / first >= 0)
                          );
                        }
                      };
                },
                PSEUDO: function (pseudo, argument) {
                  var args,
                    fn =
                      Expr.pseudos[pseudo] ||
                      Expr.setFilters[pseudo.toLowerCase()] ||
                      Sizzle.error("unsupported pseudo: " + pseudo);
                  return fn[expando]
                    ? fn(argument)
                    : fn.length > 1
                    ? ((args = [pseudo, pseudo, "", argument]),
                      Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())
                        ? markFunction(function (seed, matches) {
                            for (
                              var idx,
                                matched = fn(seed, argument),
                                i = matched.length;
                              i--;

                            )
                              (idx = indexOf(seed, matched[i])),
                                (seed[idx] = !(matches[idx] = matched[i]));
                          })
                        : function (elem) {
                            return fn(elem, 0, args);
                          })
                    : fn;
                },
              },
              pseudos: {
                not: markFunction(function (selector) {
                  var input = [],
                    results = [],
                    matcher = compile(selector.replace(rtrim, "$1"));
                  return matcher[expando]
                    ? markFunction(function (seed, matches, context, xml) {
                        for (
                          var elem,
                            unmatched = matcher(seed, null, xml, []),
                            i = seed.length;
                          i--;

                        )
                          (elem = unmatched[i]) &&
                            (seed[i] = !(matches[i] = elem));
                      })
                    : function (elem, context, xml) {
                        return (
                          (input[0] = elem),
                          matcher(input, null, xml, results),
                          (input[0] = null),
                          !results.pop()
                        );
                      };
                }),
                has: markFunction(function (selector) {
                  return function (elem) {
                    return Sizzle(selector, elem).length > 0;
                  };
                }),
                contains: markFunction(function (text) {
                  return (
                    (text = text.replace(runescape, funescape)),
                    function (elem) {
                      return (
                        (
                          elem.textContent ||
                          elem.innerText ||
                          getText(elem)
                        ).indexOf(text) > -1
                      );
                    }
                  );
                }),
                lang: markFunction(function (lang) {
                  return (
                    ridentifier.test(lang || "") ||
                      Sizzle.error("unsupported lang: " + lang),
                    (lang = lang.replace(runescape, funescape).toLowerCase()),
                    function (elem) {
                      var elemLang;
                      do
                        if (
                          (elemLang = documentIsHTML
                            ? elem.lang
                            : elem.getAttribute("xml:lang") ||
                              elem.getAttribute("lang"))
                        )
                          return (
                            (elemLang = elemLang.toLowerCase()),
                            elemLang === lang ||
                              0 === elemLang.indexOf(lang + "-")
                          );
                      while ((elem = elem.parentNode) && 1 === elem.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (elem) {
                  var hash = window.location && window.location.hash;
                  return hash && hash.slice(1) === elem.id;
                },
                root: function (elem) {
                  return elem === docElem;
                },
                focus: function (elem) {
                  return (
                    elem === document.activeElement &&
                    (!document.hasFocus || document.hasFocus()) &&
                    !!(elem.type || elem.href || ~elem.tabIndex)
                  );
                },
                enabled: function (elem) {
                  return elem.disabled === !1;
                },
                disabled: function (elem) {
                  return elem.disabled === !0;
                },
                checked: function (elem) {
                  var nodeName = elem.nodeName.toLowerCase();
                  return (
                    ("input" === nodeName && !!elem.checked) ||
                    ("option" === nodeName && !!elem.selected)
                  );
                },
                selected: function (elem) {
                  return (
                    elem.parentNode && elem.parentNode.selectedIndex,
                    elem.selected === !0
                  );
                },
                empty: function (elem) {
                  for (elem = elem.firstChild; elem; elem = elem.nextSibling)
                    if (elem.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (elem) {
                  return !Expr.pseudos.empty(elem);
                },
                header: function (elem) {
                  return rheader.test(elem.nodeName);
                },
                input: function (elem) {
                  return rinputs.test(elem.nodeName);
                },
                button: function (elem) {
                  var name = elem.nodeName.toLowerCase();
                  return (
                    ("input" === name && "button" === elem.type) ||
                    "button" === name
                  );
                },
                text: function (elem) {
                  var attr;
                  return (
                    "input" === elem.nodeName.toLowerCase() &&
                    "text" === elem.type &&
                    (null == (attr = elem.getAttribute("type")) ||
                      "text" === attr.toLowerCase())
                  );
                },
                first: createPositionalPseudo(function () {
                  return [0];
                }),
                last: createPositionalPseudo(function (matchIndexes, length) {
                  return [length - 1];
                }),
                eq: createPositionalPseudo(function (
                  matchIndexes,
                  length,
                  argument
                ) {
                  return [argument < 0 ? argument + length : argument];
                }),
                even: createPositionalPseudo(function (matchIndexes, length) {
                  for (var i = 0; i < length; i += 2) matchIndexes.push(i);
                  return matchIndexes;
                }),
                odd: createPositionalPseudo(function (matchIndexes, length) {
                  for (var i = 1; i < length; i += 2) matchIndexes.push(i);
                  return matchIndexes;
                }),
                lt: createPositionalPseudo(function (
                  matchIndexes,
                  length,
                  argument
                ) {
                  for (
                    var i = argument < 0 ? argument + length : argument;
                    --i >= 0;

                  )
                    matchIndexes.push(i);
                  return matchIndexes;
                }),
                gt: createPositionalPseudo(function (
                  matchIndexes,
                  length,
                  argument
                ) {
                  for (
                    var i = argument < 0 ? argument + length : argument;
                    ++i < length;

                  )
                    matchIndexes.push(i);
                  return matchIndexes;
                }),
              },
            }),
          (Expr.pseudos.nth = Expr.pseudos.eq);
        for (i in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0,
        })
          Expr.pseudos[i] = createInputPseudo(i);
        for (i in { submit: !0, reset: !0 })
          Expr.pseudos[i] = createButtonPseudo(i);
        return (
          (setFilters.prototype = Expr.filters = Expr.pseudos),
          (Expr.setFilters = new setFilters()),
          (tokenize = Sizzle.tokenize =
            function (selector, parseOnly) {
              var matched,
                match,
                tokens,
                type,
                soFar,
                groups,
                preFilters,
                cached = tokenCache[selector + " "];
              if (cached) return parseOnly ? 0 : cached.slice(0);
              for (
                soFar = selector, groups = [], preFilters = Expr.preFilter;
                soFar;

              ) {
                (matched && !(match = rcomma.exec(soFar))) ||
                  (match && (soFar = soFar.slice(match[0].length) || soFar),
                  groups.push((tokens = []))),
                  (matched = !1),
                  (match = rcombinators.exec(soFar)) &&
                    ((matched = match.shift()),
                    tokens.push({
                      value: matched,
                      type: match[0].replace(rtrim, " "),
                    }),
                    (soFar = soFar.slice(matched.length)));
                for (type in Expr.filter)
                  !(match = matchExpr[type].exec(soFar)) ||
                    (preFilters[type] && !(match = preFilters[type](match))) ||
                    ((matched = match.shift()),
                    tokens.push({ value: matched, type: type, matches: match }),
                    (soFar = soFar.slice(matched.length)));
                if (!matched) break;
              }
              return parseOnly
                ? soFar.length
                : soFar
                ? Sizzle.error(selector)
                : tokenCache(selector, groups).slice(0);
            }),
          (compile = Sizzle.compile =
            function (selector, match) {
              var i,
                setMatchers = [],
                elementMatchers = [],
                cached = compilerCache[selector + " "];
              if (!cached) {
                for (
                  match || (match = tokenize(selector)), i = match.length;
                  i--;

                )
                  (cached = matcherFromTokens(match[i])),
                    cached[expando]
                      ? setMatchers.push(cached)
                      : elementMatchers.push(cached);
                (cached = compilerCache(
                  selector,
                  matcherFromGroupMatchers(elementMatchers, setMatchers)
                )),
                  (cached.selector = selector);
              }
              return cached;
            }),
          (select = Sizzle.select =
            function (selector, context, results, seed) {
              var i,
                tokens,
                token,
                type,
                find,
                compiled = "function" == typeof selector && selector,
                match =
                  !seed && tokenize((selector = compiled.selector || selector));
              if (((results = results || []), 1 === match.length)) {
                if (
                  ((tokens = match[0] = match[0].slice(0)),
                  tokens.length > 2 &&
                    "ID" === (token = tokens[0]).type &&
                    support.getById &&
                    9 === context.nodeType &&
                    documentIsHTML &&
                    Expr.relative[tokens[1].type])
                ) {
                  if (
                    ((context = (Expr.find.ID(
                      token.matches[0].replace(runescape, funescape),
                      context
                    ) || [])[0]),
                    !context)
                  )
                    return results;
                  compiled && (context = context.parentNode),
                    (selector = selector.slice(tokens.shift().value.length));
                }
                for (
                  i = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
                  i-- &&
                  ((token = tokens[i]), !Expr.relative[(type = token.type)]);

                )
                  if (
                    (find = Expr.find[type]) &&
                    (seed = find(
                      token.matches[0].replace(runescape, funescape),
                      (rsibling.test(tokens[0].type) &&
                        testContext(context.parentNode)) ||
                        context
                    ))
                  ) {
                    if (
                      (tokens.splice(i, 1),
                      (selector = seed.length && toSelector(tokens)),
                      !selector)
                    )
                      return push.apply(results, seed), results;
                    break;
                  }
              }
              return (
                (compiled || compile(selector, match))(
                  seed,
                  context,
                  !documentIsHTML,
                  results,
                  (rsibling.test(selector) &&
                    testContext(context.parentNode)) ||
                    context
                ),
                results
              );
            }),
          (support.sortStable =
            expando.split("").sort(sortOrder).join("") === expando),
          (support.detectDuplicates = !!hasDuplicate),
          setDocument(),
          (support.sortDetached = assert(function (div1) {
            return (
              1 & div1.compareDocumentPosition(document.createElement("div"))
            );
          })),
          assert(function (div) {
            return (
              (div.innerHTML = "<a href='#'></a>"),
              "#" === div.firstChild.getAttribute("href")
            );
          }) ||
            addHandle("type|href|height|width", function (elem, name, isXML) {
              if (!isXML)
                return elem.getAttribute(
                  name,
                  "type" === name.toLowerCase() ? 1 : 2
                );
            }),
          (support.attributes &&
            assert(function (div) {
              return (
                (div.innerHTML = "<input/>"),
                div.firstChild.setAttribute("value", ""),
                "" === div.firstChild.getAttribute("value")
              );
            })) ||
            addHandle("value", function (elem, name, isXML) {
              if (!isXML && "input" === elem.nodeName.toLowerCase())
                return elem.defaultValue;
            }),
          assert(function (div) {
            return null == div.getAttribute("disabled");
          }) ||
            addHandle(booleans, function (elem, name, isXML) {
              var val;
              if (!isXML)
                return elem[name] === !0
                  ? name.toLowerCase()
                  : (val = elem.getAttributeNode(name)) && val.specified
                  ? val.value
                  : null;
            }),
          Sizzle
        );
      })(window);
    (jQuery.find = Sizzle),
      (jQuery.expr = Sizzle.selectors),
      (jQuery.expr[":"] = jQuery.expr.pseudos),
      (jQuery.unique = Sizzle.uniqueSort),
      (jQuery.text = Sizzle.getText),
      (jQuery.isXMLDoc = Sizzle.isXML),
      (jQuery.contains = Sizzle.contains);
    var rneedsContext = jQuery.expr.match.needsContext,
      rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      risSimple = /^.[^:#\[\.,]*$/;
    (jQuery.filter = function (expr, elems, not) {
      var elem = elems[0];
      return (
        not && (expr = ":not(" + expr + ")"),
        1 === elems.length && 1 === elem.nodeType
          ? jQuery.find.matchesSelector(elem, expr)
            ? [elem]
            : []
          : jQuery.find.matches(
              expr,
              jQuery.grep(elems, function (elem) {
                return 1 === elem.nodeType;
              })
            )
      );
    }),
      jQuery.fn.extend({
        find: function (selector) {
          var i,
            ret = [],
            self = this,
            len = self.length;
          if ("string" != typeof selector)
            return this.pushStack(
              jQuery(selector).filter(function () {
                for (i = 0; i < len; i++)
                  if (jQuery.contains(self[i], this)) return !0;
              })
            );
          for (i = 0; i < len; i++) jQuery.find(selector, self[i], ret);
          return (
            (ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret)),
            (ret.selector = this.selector
              ? this.selector + " " + selector
              : selector),
            ret
          );
        },
        filter: function (selector) {
          return this.pushStack(winnow(this, selector || [], !1));
        },
        not: function (selector) {
          return this.pushStack(winnow(this, selector || [], !0));
        },
        is: function (selector) {
          return !!winnow(
            this,
            "string" == typeof selector && rneedsContext.test(selector)
              ? jQuery(selector)
              : selector || [],
            !1
          ).length;
        },
      });
    var rootjQuery,
      document = window.document,
      rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      init = (jQuery.fn.init = function (selector, context) {
        var match, elem;
        if (!selector) return this;
        if ("string" == typeof selector) {
          if (
            ((match =
              "<" === selector.charAt(0) &&
              ">" === selector.charAt(selector.length - 1) &&
              selector.length >= 3
                ? [null, selector, null]
                : rquickExpr.exec(selector)),
            !match || (!match[1] && context))
          )
            return !context || context.jquery
              ? (context || rootjQuery).find(selector)
              : this.constructor(context).find(selector);
          if (match[1]) {
            if (
              ((context = context instanceof jQuery ? context[0] : context),
              jQuery.merge(
                this,
                jQuery.parseHTML(
                  match[1],
                  context && context.nodeType
                    ? context.ownerDocument || context
                    : document,
                  !0
                )
              ),
              rsingleTag.test(match[1]) && jQuery.isPlainObject(context))
            )
              for (match in context)
                jQuery.isFunction(this[match])
                  ? this[match](context[match])
                  : this.attr(match, context[match]);
            return this;
          }
          if (
            ((elem = document.getElementById(match[2])),
            elem && elem.parentNode)
          ) {
            if (elem.id !== match[2]) return rootjQuery.find(selector);
            (this.length = 1), (this[0] = elem);
          }
          return (this.context = document), (this.selector = selector), this;
        }
        return selector.nodeType
          ? ((this.context = this[0] = selector), (this.length = 1), this)
          : jQuery.isFunction(selector)
          ? "undefined" != typeof rootjQuery.ready
            ? rootjQuery.ready(selector)
            : selector(jQuery)
          : (void 0 !== selector.selector &&
              ((this.selector = selector.selector),
              (this.context = selector.context)),
            jQuery.makeArray(selector, this));
      });
    (init.prototype = jQuery.fn), (rootjQuery = jQuery(document));
    var rparentsprev = /^(?:parents|prev(?:Until|All))/,
      guaranteedUnique = { children: !0, contents: !0, next: !0, prev: !0 };
    jQuery.extend({
      dir: function (elem, dir, until) {
        for (
          var matched = [], cur = elem[dir];
          cur &&
          9 !== cur.nodeType &&
          (void 0 === until || 1 !== cur.nodeType || !jQuery(cur).is(until));

        )
          1 === cur.nodeType && matched.push(cur), (cur = cur[dir]);
        return matched;
      },
      sibling: function (n, elem) {
        for (var r = []; n; n = n.nextSibling)
          1 === n.nodeType && n !== elem && r.push(n);
        return r;
      },
    }),
      jQuery.fn.extend({
        has: function (target) {
          var i,
            targets = jQuery(target, this),
            len = targets.length;
          return this.filter(function () {
            for (i = 0; i < len; i++)
              if (jQuery.contains(this, targets[i])) return !0;
          });
        },
        closest: function (selectors, context) {
          for (
            var cur,
              i = 0,
              l = this.length,
              matched = [],
              pos =
                rneedsContext.test(selectors) || "string" != typeof selectors
                  ? jQuery(selectors, context || this.context)
                  : 0;
            i < l;
            i++
          )
            for (cur = this[i]; cur && cur !== context; cur = cur.parentNode)
              if (
                cur.nodeType < 11 &&
                (pos
                  ? pos.index(cur) > -1
                  : 1 === cur.nodeType &&
                    jQuery.find.matchesSelector(cur, selectors))
              ) {
                matched.push(cur);
                break;
              }
          return this.pushStack(
            matched.length > 1 ? jQuery.unique(matched) : matched
          );
        },
        index: function (elem) {
          return elem
            ? "string" == typeof elem
              ? jQuery.inArray(this[0], jQuery(elem))
              : jQuery.inArray(elem.jquery ? elem[0] : elem, this)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (selector, context) {
          return this.pushStack(
            jQuery.unique(jQuery.merge(this.get(), jQuery(selector, context)))
          );
        },
        addBack: function (selector) {
          return this.add(
            null == selector
              ? this.prevObject
              : this.prevObject.filter(selector)
          );
        },
      }),
      jQuery.each(
        {
          parent: function (elem) {
            var parent = elem.parentNode;
            return parent && 11 !== parent.nodeType ? parent : null;
          },
          parents: function (elem) {
            return jQuery.dir(elem, "parentNode");
          },
          parentsUntil: function (elem, i, until) {
            return jQuery.dir(elem, "parentNode", until);
          },
          next: function (elem) {
            return sibling(elem, "nextSibling");
          },
          prev: function (elem) {
            return sibling(elem, "previousSibling");
          },
          nextAll: function (elem) {
            return jQuery.dir(elem, "nextSibling");
          },
          prevAll: function (elem) {
            return jQuery.dir(elem, "previousSibling");
          },
          nextUntil: function (elem, i, until) {
            return jQuery.dir(elem, "nextSibling", until);
          },
          prevUntil: function (elem, i, until) {
            return jQuery.dir(elem, "previousSibling", until);
          },
          siblings: function (elem) {
            return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
          },
          children: function (elem) {
            return jQuery.sibling(elem.firstChild);
          },
          contents: function (elem) {
            return jQuery.nodeName(elem, "iframe")
              ? elem.contentDocument || elem.contentWindow.document
              : jQuery.merge([], elem.childNodes);
          },
        },
        function (name, fn) {
          jQuery.fn[name] = function (until, selector) {
            var ret = jQuery.map(this, fn, until);
            return (
              "Until" !== name.slice(-5) && (selector = until),
              selector &&
                "string" == typeof selector &&
                (ret = jQuery.filter(selector, ret)),
              this.length > 1 &&
                (guaranteedUnique[name] || (ret = jQuery.unique(ret)),
                rparentsprev.test(name) && (ret = ret.reverse())),
              this.pushStack(ret)
            );
          };
        }
      );
    var rnotwhite = /\S+/g,
      optionsCache = {};
    (jQuery.Callbacks = function (options) {
      options =
        "string" == typeof options
          ? optionsCache[options] || createOptions(options)
          : jQuery.extend({}, options);
      var firing,
        memory,
        fired,
        firingLength,
        firingIndex,
        firingStart,
        list = [],
        stack = !options.once && [],
        fire = function (data) {
          for (
            memory = options.memory && data,
              fired = !0,
              firingIndex = firingStart || 0,
              firingStart = 0,
              firingLength = list.length,
              firing = !0;
            list && firingIndex < firingLength;
            firingIndex++
          )
            if (
              list[firingIndex].apply(data[0], data[1]) === !1 &&
              options.stopOnFalse
            ) {
              memory = !1;
              break;
            }
          (firing = !1),
            list &&
              (stack
                ? stack.length && fire(stack.shift())
                : memory
                ? (list = [])
                : self.disable());
        },
        self = {
          add: function () {
            if (list) {
              var start = list.length;
              !(function add(args) {
                jQuery.each(args, function (_, arg) {
                  var type = jQuery.type(arg);
                  "function" === type
                    ? (options.unique && self.has(arg)) || list.push(arg)
                    : arg && arg.length && "string" !== type && add(arg);
                });
              })(arguments),
                firing
                  ? (firingLength = list.length)
                  : memory && ((firingStart = start), fire(memory));
            }
            return this;
          },
          remove: function () {
            return (
              list &&
                jQuery.each(arguments, function (_, arg) {
                  for (
                    var index;
                    (index = jQuery.inArray(arg, list, index)) > -1;

                  )
                    list.splice(index, 1),
                      firing &&
                        (index <= firingLength && firingLength--,
                        index <= firingIndex && firingIndex--);
                }),
              this
            );
          },
          has: function (fn) {
            return fn
              ? jQuery.inArray(fn, list) > -1
              : !(!list || !list.length);
          },
          empty: function () {
            return (list = []), (firingLength = 0), this;
          },
          disable: function () {
            return (list = stack = memory = void 0), this;
          },
          disabled: function () {
            return !list;
          },
          lock: function () {
            return (stack = void 0), memory || self.disable(), this;
          },
          locked: function () {
            return !stack;
          },
          fireWith: function (context, args) {
            return (
              !list ||
                (fired && !stack) ||
                ((args = args || []),
                (args = [context, args.slice ? args.slice() : args]),
                firing ? stack.push(args) : fire(args)),
              this
            );
          },
          fire: function () {
            return self.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!fired;
          },
        };
      return self;
    }),
      jQuery.extend({
        Deferred: function (func) {
          var tuples = [
              ["resolve", "done", jQuery.Callbacks("once memory"), "resolved"],
              ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"],
              ["notify", "progress", jQuery.Callbacks("memory")],
            ],
            state = "pending",
            promise = {
              state: function () {
                return state;
              },
              always: function () {
                return deferred.done(arguments).fail(arguments), this;
              },
              then: function () {
                var fns = arguments;
                return jQuery
                  .Deferred(function (newDefer) {
                    jQuery.each(tuples, function (i, tuple) {
                      var fn = jQuery.isFunction(fns[i]) && fns[i];
                      deferred[tuple[1]](function () {
                        var returned = fn && fn.apply(this, arguments);
                        returned && jQuery.isFunction(returned.promise)
                          ? returned
                              .promise()
                              .done(newDefer.resolve)
                              .fail(newDefer.reject)
                              .progress(newDefer.notify)
                          : newDefer[tuple[0] + "With"](
                              this === promise ? newDefer.promise() : this,
                              fn ? [returned] : arguments
                            );
                      });
                    }),
                      (fns = null);
                  })
                  .promise();
              },
              promise: function (obj) {
                return null != obj ? jQuery.extend(obj, promise) : promise;
              },
            },
            deferred = {};
          return (
            (promise.pipe = promise.then),
            jQuery.each(tuples, function (i, tuple) {
              var list = tuple[2],
                stateString = tuple[3];
              (promise[tuple[1]] = list.add),
                stateString &&
                  list.add(
                    function () {
                      state = stateString;
                    },
                    tuples[1 ^ i][2].disable,
                    tuples[2][2].lock
                  ),
                (deferred[tuple[0]] = function () {
                  return (
                    deferred[tuple[0] + "With"](
                      this === deferred ? promise : this,
                      arguments
                    ),
                    this
                  );
                }),
                (deferred[tuple[0] + "With"] = list.fireWith);
            }),
            promise.promise(deferred),
            func && func.call(deferred, deferred),
            deferred
          );
        },
        when: function (subordinate) {
          var progressValues,
            progressContexts,
            resolveContexts,
            i = 0,
            resolveValues = slice.call(arguments),
            length = resolveValues.length,
            remaining =
              1 !== length ||
              (subordinate && jQuery.isFunction(subordinate.promise))
                ? length
                : 0,
            deferred = 1 === remaining ? subordinate : jQuery.Deferred(),
            updateFunc = function (i, contexts, values) {
              return function (value) {
                (contexts[i] = this),
                  (values[i] =
                    arguments.length > 1 ? slice.call(arguments) : value),
                  values === progressValues
                    ? deferred.notifyWith(contexts, values)
                    : --remaining || deferred.resolveWith(contexts, values);
              };
            };
          if (length > 1)
            for (
              progressValues = new Array(length),
                progressContexts = new Array(length),
                resolveContexts = new Array(length);
              i < length;
              i++
            )
              resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)
                ? resolveValues[i]
                    .promise()
                    .done(updateFunc(i, resolveContexts, resolveValues))
                    .fail(deferred.reject)
                    .progress(updateFunc(i, progressContexts, progressValues))
                : --remaining;
          return (
            remaining || deferred.resolveWith(resolveContexts, resolveValues),
            deferred.promise()
          );
        },
      });
    var readyList;
    (jQuery.fn.ready = function (fn) {
      return jQuery.ready.promise().done(fn), this;
    }),
      jQuery.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (hold) {
          hold ? jQuery.readyWait++ : jQuery.ready(!0);
        },
        ready: function (wait) {
          if (wait === !0 ? !--jQuery.readyWait : !jQuery.isReady) {
            if (!document.body) return setTimeout(jQuery.ready);
            (jQuery.isReady = !0),
              (wait !== !0 && --jQuery.readyWait > 0) ||
                (readyList.resolveWith(document, [jQuery]),
                jQuery.fn.triggerHandler &&
                  (jQuery(document).triggerHandler("ready"),
                  jQuery(document).off("ready")));
          }
        },
      }),
      (jQuery.ready.promise = function (obj) {
        if (!readyList)
          if (
            ((readyList = jQuery.Deferred()),
            "complete" === document.readyState)
          )
            setTimeout(jQuery.ready);
          else if (document.addEventListener)
            document.addEventListener("DOMContentLoaded", completed, !1),
              window.addEventListener("load", completed, !1);
          else {
            document.attachEvent("onreadystatechange", completed),
              window.attachEvent("onload", completed);
            var top = !1;
            try {
              top = null == window.frameElement && document.documentElement;
            } catch (e) {}
            top &&
              top.doScroll &&
              !(function doScrollCheck() {
                if (!jQuery.isReady) {
                  try {
                    top.doScroll("left");
                  } catch (e) {
                    return setTimeout(doScrollCheck, 50);
                  }
                  detach(), jQuery.ready();
                }
              })();
          }
        return readyList.promise(obj);
      });
    var i,
      strundefined = "undefined";
    for (i in jQuery(support)) break;
    (support.ownLast = "0" !== i),
      (support.inlineBlockNeedsLayout = !1),
      jQuery(function () {
        var val, div, body, container;
        (body = document.getElementsByTagName("body")[0]),
          body &&
            body.style &&
            ((div = document.createElement("div")),
            (container = document.createElement("div")),
            (container.style.cssText =
              "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
            body.appendChild(container).appendChild(div),
            typeof div.style.zoom !== strundefined &&
              ((div.style.cssText =
                "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1"),
              (support.inlineBlockNeedsLayout = val = 3 === div.offsetWidth),
              val && (body.style.zoom = 1)),
            body.removeChild(container));
      }),
      (function () {
        var div = document.createElement("div");
        if (null == support.deleteExpando) {
          support.deleteExpando = !0;
          try {
            delete div.test;
          } catch (e) {
            support.deleteExpando = !1;
          }
        }
        div = null;
      })(),
      (jQuery.acceptData = function (elem) {
        var noData = jQuery.noData[(elem.nodeName + " ").toLowerCase()],
          nodeType = +elem.nodeType || 1;
        return (
          (1 === nodeType || 9 === nodeType) &&
          (!noData ||
            (noData !== !0 && elem.getAttribute("classid") === noData))
        );
      });
    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      rmultiDash = /([A-Z])/g;
    jQuery.extend({
      cache: {},
      noData: {
        "applet ": !0,
        "embed ": !0,
        "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      },
      hasData: function (elem) {
        return (
          (elem = elem.nodeType
            ? jQuery.cache[elem[jQuery.expando]]
            : elem[jQuery.expando]),
          !!elem && !isEmptyDataObject(elem)
        );
      },
      data: function (elem, name, data) {
        return internalData(elem, name, data);
      },
      removeData: function (elem, name) {
        return internalRemoveData(elem, name);
      },
      _data: function (elem, name, data) {
        return internalData(elem, name, data, !0);
      },
      _removeData: function (elem, name) {
        return internalRemoveData(elem, name, !0);
      },
    }),
      jQuery.fn.extend({
        data: function (key, value) {
          var i,
            name,
            data,
            elem = this[0],
            attrs = elem && elem.attributes;
          if (void 0 === key) {
            if (
              this.length &&
              ((data = jQuery.data(elem)),
              1 === elem.nodeType && !jQuery._data(elem, "parsedAttrs"))
            ) {
              for (i = attrs.length; i--; )
                attrs[i] &&
                  ((name = attrs[i].name),
                  0 === name.indexOf("data-") &&
                    ((name = jQuery.camelCase(name.slice(5))),
                    dataAttr(elem, name, data[name])));
              jQuery._data(elem, "parsedAttrs", !0);
            }
            return data;
          }
          return "object" == typeof key
            ? this.each(function () {
                jQuery.data(this, key);
              })
            : arguments.length > 1
            ? this.each(function () {
                jQuery.data(this, key, value);
              })
            : elem
            ? dataAttr(elem, key, jQuery.data(elem, key))
            : void 0;
        },
        removeData: function (key) {
          return this.each(function () {
            jQuery.removeData(this, key);
          });
        },
      }),
      jQuery.extend({
        queue: function (elem, type, data) {
          var queue;
          if (elem)
            return (
              (type = (type || "fx") + "queue"),
              (queue = jQuery._data(elem, type)),
              data &&
                (!queue || jQuery.isArray(data)
                  ? (queue = jQuery._data(elem, type, jQuery.makeArray(data)))
                  : queue.push(data)),
              queue || []
            );
        },
        dequeue: function (elem, type) {
          type = type || "fx";
          var queue = jQuery.queue(elem, type),
            startLength = queue.length,
            fn = queue.shift(),
            hooks = jQuery._queueHooks(elem, type),
            next = function () {
              jQuery.dequeue(elem, type);
            };
          "inprogress" === fn && ((fn = queue.shift()), startLength--),
            fn &&
              ("fx" === type && queue.unshift("inprogress"),
              delete hooks.stop,
              fn.call(elem, next, hooks)),
            !startLength && hooks && hooks.empty.fire();
        },
        _queueHooks: function (elem, type) {
          var key = type + "queueHooks";
          return (
            jQuery._data(elem, key) ||
            jQuery._data(elem, key, {
              empty: jQuery.Callbacks("once memory").add(function () {
                jQuery._removeData(elem, type + "queue"),
                  jQuery._removeData(elem, key);
              }),
            })
          );
        },
      }),
      jQuery.fn.extend({
        queue: function (type, data) {
          var setter = 2;
          return (
            "string" != typeof type && ((data = type), (type = "fx"), setter--),
            arguments.length < setter
              ? jQuery.queue(this[0], type)
              : void 0 === data
              ? this
              : this.each(function () {
                  var queue = jQuery.queue(this, type, data);
                  jQuery._queueHooks(this, type),
                    "fx" === type &&
                      "inprogress" !== queue[0] &&
                      jQuery.dequeue(this, type);
                })
          );
        },
        dequeue: function (type) {
          return this.each(function () {
            jQuery.dequeue(this, type);
          });
        },
        clearQueue: function (type) {
          return this.queue(type || "fx", []);
        },
        promise: function (type, obj) {
          var tmp,
            count = 1,
            defer = jQuery.Deferred(),
            elements = this,
            i = this.length,
            resolve = function () {
              --count || defer.resolveWith(elements, [elements]);
            };
          for (
            "string" != typeof type && ((obj = type), (type = void 0)),
              type = type || "fx";
            i--;

          )
            (tmp = jQuery._data(elements[i], type + "queueHooks")),
              tmp && tmp.empty && (count++, tmp.empty.add(resolve));
          return resolve(), defer.promise(obj);
        },
      });
    var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      cssExpand = ["Top", "Right", "Bottom", "Left"],
      isHidden = function (elem, el) {
        return (
          (elem = el || elem),
          "none" === jQuery.css(elem, "display") ||
            !jQuery.contains(elem.ownerDocument, elem)
        );
      },
      access = (jQuery.access = function (
        elems,
        fn,
        key,
        value,
        chainable,
        emptyGet,
        raw
      ) {
        var i = 0,
          length = elems.length,
          bulk = null == key;
        if ("object" === jQuery.type(key)) {
          chainable = !0;
          for (i in key) jQuery.access(elems, fn, i, key[i], !0, emptyGet, raw);
        } else if (
          void 0 !== value &&
          ((chainable = !0),
          jQuery.isFunction(value) || (raw = !0),
          bulk &&
            (raw
              ? (fn.call(elems, value), (fn = null))
              : ((bulk = fn),
                (fn = function (elem, key, value) {
                  return bulk.call(jQuery(elem), value);
                }))),
          fn)
        )
          for (; i < length; i++)
            fn(
              elems[i],
              key,
              raw ? value : value.call(elems[i], i, fn(elems[i], key))
            );
        return chainable
          ? elems
          : bulk
          ? fn.call(elems)
          : length
          ? fn(elems[0], key)
          : emptyGet;
      }),
      rcheckableType = /^(?:checkbox|radio)$/i;
    !(function () {
      var input = document.createElement("input"),
        div = document.createElement("div"),
        fragment = document.createDocumentFragment();
      if (
        ((div.innerHTML =
          "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
        (support.leadingWhitespace = 3 === div.firstChild.nodeType),
        (support.tbody = !div.getElementsByTagName("tbody").length),
        (support.htmlSerialize = !!div.getElementsByTagName("link").length),
        (support.html5Clone =
          "<:nav></:nav>" !==
          document.createElement("nav").cloneNode(!0).outerHTML),
        (input.type = "checkbox"),
        (input.checked = !0),
        fragment.appendChild(input),
        (support.appendChecked = input.checked),
        (div.innerHTML = "<textarea>x</textarea>"),
        (support.noCloneChecked = !!div.cloneNode(!0).lastChild.defaultValue),
        fragment.appendChild(div),
        (div.innerHTML = "<input type='radio' checked='checked' name='t'/>"),
        (support.checkClone = div
          .cloneNode(!0)
          .cloneNode(!0).lastChild.checked),
        (support.noCloneEvent = !0),
        div.attachEvent &&
          (div.attachEvent("onclick", function () {
            support.noCloneEvent = !1;
          }),
          div.cloneNode(!0).click()),
        null == support.deleteExpando)
      ) {
        support.deleteExpando = !0;
        try {
          delete div.test;
        } catch (e) {
          support.deleteExpando = !1;
        }
      }
    })(),
      (function () {
        var i,
          eventName,
          div = document.createElement("div");
        for (i in { submit: !0, change: !0, focusin: !0 })
          (eventName = "on" + i),
            (support[i + "Bubbles"] = eventName in window) ||
              (div.setAttribute(eventName, "t"),
              (support[i + "Bubbles"] =
                div.attributes[eventName].expando === !1));
        div = null;
      })();
    var rformElems = /^(?:input|select|textarea)$/i,
      rkeyEvent = /^key/,
      rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
      rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
      rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
    (jQuery.event = {
      global: {},
      add: function (elem, types, handler, data, selector) {
        var tmp,
          events,
          t,
          handleObjIn,
          special,
          eventHandle,
          handleObj,
          handlers,
          type,
          namespaces,
          origType,
          elemData = jQuery._data(elem);
        if (elemData) {
          for (
            handler.handler &&
              ((handleObjIn = handler),
              (handler = handleObjIn.handler),
              (selector = handleObjIn.selector)),
              handler.guid || (handler.guid = jQuery.guid++),
              (events = elemData.events) || (events = elemData.events = {}),
              (eventHandle = elemData.handle) ||
                ((eventHandle = elemData.handle =
                  function (e) {
                    return typeof jQuery === strundefined ||
                      (e && jQuery.event.triggered === e.type)
                      ? void 0
                      : jQuery.event.dispatch.apply(
                          eventHandle.elem,
                          arguments
                        );
                  }),
                (eventHandle.elem = elem)),
              types = (types || "").match(rnotwhite) || [""],
              t = types.length;
            t--;

          )
            (tmp = rtypenamespace.exec(types[t]) || []),
              (type = origType = tmp[1]),
              (namespaces = (tmp[2] || "").split(".").sort()),
              type &&
                ((special = jQuery.event.special[type] || {}),
                (type =
                  (selector ? special.delegateType : special.bindType) || type),
                (special = jQuery.event.special[type] || {}),
                (handleObj = jQuery.extend(
                  {
                    type: type,
                    origType: origType,
                    data: data,
                    handler: handler,
                    guid: handler.guid,
                    selector: selector,
                    needsContext:
                      selector && jQuery.expr.match.needsContext.test(selector),
                    namespace: namespaces.join("."),
                  },
                  handleObjIn
                )),
                (handlers = events[type]) ||
                  ((handlers = events[type] = []),
                  (handlers.delegateCount = 0),
                  (special.setup &&
                    special.setup.call(elem, data, namespaces, eventHandle) !==
                      !1) ||
                    (elem.addEventListener
                      ? elem.addEventListener(type, eventHandle, !1)
                      : elem.attachEvent &&
                        elem.attachEvent("on" + type, eventHandle))),
                special.add &&
                  (special.add.call(elem, handleObj),
                  handleObj.handler.guid ||
                    (handleObj.handler.guid = handler.guid)),
                selector
                  ? handlers.splice(handlers.delegateCount++, 0, handleObj)
                  : handlers.push(handleObj),
                (jQuery.event.global[type] = !0));
          elem = null;
        }
      },
      remove: function (elem, types, handler, selector, mappedTypes) {
        var j,
          handleObj,
          tmp,
          origCount,
          t,
          events,
          special,
          handlers,
          type,
          namespaces,
          origType,
          elemData = jQuery.hasData(elem) && jQuery._data(elem);
        if (elemData && (events = elemData.events)) {
          for (
            types = (types || "").match(rnotwhite) || [""], t = types.length;
            t--;

          )
            if (
              ((tmp = rtypenamespace.exec(types[t]) || []),
              (type = origType = tmp[1]),
              (namespaces = (tmp[2] || "").split(".").sort()),
              type)
            ) {
              for (
                special = jQuery.event.special[type] || {},
                  type =
                    (selector ? special.delegateType : special.bindType) ||
                    type,
                  handlers = events[type] || [],
                  tmp =
                    tmp[2] &&
                    new RegExp(
                      "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"
                    ),
                  origCount = j = handlers.length;
                j--;

              )
                (handleObj = handlers[j]),
                  (!mappedTypes && origType !== handleObj.origType) ||
                    (handler && handler.guid !== handleObj.guid) ||
                    (tmp && !tmp.test(handleObj.namespace)) ||
                    (selector &&
                      selector !== handleObj.selector &&
                      ("**" !== selector || !handleObj.selector)) ||
                    (handlers.splice(j, 1),
                    handleObj.selector && handlers.delegateCount--,
                    special.remove && special.remove.call(elem, handleObj));
              origCount &&
                !handlers.length &&
                ((special.teardown &&
                  special.teardown.call(elem, namespaces, elemData.handle) !==
                    !1) ||
                  jQuery.removeEvent(elem, type, elemData.handle),
                delete events[type]);
            } else
              for (type in events)
                jQuery.event.remove(
                  elem,
                  type + types[t],
                  handler,
                  selector,
                  !0
                );
          jQuery.isEmptyObject(events) &&
            (delete elemData.handle, jQuery._removeData(elem, "events"));
        }
      },
      trigger: function (event, data, elem, onlyHandlers) {
        var handle,
          ontype,
          cur,
          bubbleType,
          special,
          tmp,
          i,
          eventPath = [elem || document],
          type = hasOwn.call(event, "type") ? event.type : event,
          namespaces = hasOwn.call(event, "namespace")
            ? event.namespace.split(".")
            : [];
        if (
          ((cur = tmp = elem = elem || document),
          3 !== elem.nodeType &&
            8 !== elem.nodeType &&
            !rfocusMorph.test(type + jQuery.event.triggered) &&
            (type.indexOf(".") >= 0 &&
              ((namespaces = type.split(".")),
              (type = namespaces.shift()),
              namespaces.sort()),
            (ontype = type.indexOf(":") < 0 && "on" + type),
            (event = event[jQuery.expando]
              ? event
              : new jQuery.Event(type, "object" == typeof event && event)),
            (event.isTrigger = onlyHandlers ? 2 : 3),
            (event.namespace = namespaces.join(".")),
            (event.namespace_re = event.namespace
              ? new RegExp(
                  "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)"
                )
              : null),
            (event.result = void 0),
            event.target || (event.target = elem),
            (data = null == data ? [event] : jQuery.makeArray(data, [event])),
            (special = jQuery.event.special[type] || {}),
            onlyHandlers ||
              !special.trigger ||
              special.trigger.apply(elem, data) !== !1))
        ) {
          if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
            for (
              bubbleType = special.delegateType || type,
                rfocusMorph.test(bubbleType + type) || (cur = cur.parentNode);
              cur;
              cur = cur.parentNode
            )
              eventPath.push(cur), (tmp = cur);
            tmp === (elem.ownerDocument || document) &&
              eventPath.push(tmp.defaultView || tmp.parentWindow || window);
          }
          for (i = 0; (cur = eventPath[i++]) && !event.isPropagationStopped(); )
            (event.type = i > 1 ? bubbleType : special.bindType || type),
              (handle =
                (jQuery._data(cur, "events") || {})[event.type] &&
                jQuery._data(cur, "handle")),
              handle && handle.apply(cur, data),
              (handle = ontype && cur[ontype]),
              handle &&
                handle.apply &&
                jQuery.acceptData(cur) &&
                ((event.result = handle.apply(cur, data)),
                event.result === !1 && event.preventDefault());
          if (
            ((event.type = type),
            !onlyHandlers &&
              !event.isDefaultPrevented() &&
              (!special._default ||
                special._default.apply(eventPath.pop(), data) === !1) &&
              jQuery.acceptData(elem) &&
              ontype &&
              elem[type] &&
              !jQuery.isWindow(elem))
          ) {
            (tmp = elem[ontype]),
              tmp && (elem[ontype] = null),
              (jQuery.event.triggered = type);
            try {
              elem[type]();
            } catch (e) {}
            (jQuery.event.triggered = void 0), tmp && (elem[ontype] = tmp);
          }
          return event.result;
        }
      },
      dispatch: function (event) {
        event = jQuery.event.fix(event);
        var i,
          ret,
          handleObj,
          matched,
          j,
          handlerQueue = [],
          args = slice.call(arguments),
          handlers = (jQuery._data(this, "events") || {})[event.type] || [],
          special = jQuery.event.special[event.type] || {};
        if (
          ((args[0] = event),
          (event.delegateTarget = this),
          !special.preDispatch || special.preDispatch.call(this, event) !== !1)
        ) {
          for (
            handlerQueue = jQuery.event.handlers.call(this, event, handlers),
              i = 0;
            (matched = handlerQueue[i++]) && !event.isPropagationStopped();

          )
            for (
              event.currentTarget = matched.elem, j = 0;
              (handleObj = matched.handlers[j++]) &&
              !event.isImmediatePropagationStopped();

            )
              (event.namespace_re &&
                !event.namespace_re.test(handleObj.namespace)) ||
                ((event.handleObj = handleObj),
                (event.data = handleObj.data),
                (ret = (
                  (jQuery.event.special[handleObj.origType] || {}).handle ||
                  handleObj.handler
                ).apply(matched.elem, args)),
                void 0 !== ret &&
                  (event.result = ret) === !1 &&
                  (event.preventDefault(), event.stopPropagation()));
          return (
            special.postDispatch && special.postDispatch.call(this, event),
            event.result
          );
        }
      },
      handlers: function (event, handlers) {
        var sel,
          handleObj,
          matches,
          i,
          handlerQueue = [],
          delegateCount = handlers.delegateCount,
          cur = event.target;
        if (
          delegateCount &&
          cur.nodeType &&
          (!event.button || "click" !== event.type)
        )
          for (; cur != this; cur = cur.parentNode || this)
            if (
              1 === cur.nodeType &&
              (cur.disabled !== !0 || "click" !== event.type)
            ) {
              for (matches = [], i = 0; i < delegateCount; i++)
                (handleObj = handlers[i]),
                  (sel = handleObj.selector + " "),
                  void 0 === matches[sel] &&
                    (matches[sel] = handleObj.needsContext
                      ? jQuery(sel, this).index(cur) >= 0
                      : jQuery.find(sel, this, null, [cur]).length),
                  matches[sel] && matches.push(handleObj);
              matches.length &&
                handlerQueue.push({ elem: cur, handlers: matches });
            }
        return (
          delegateCount < handlers.length &&
            handlerQueue.push({
              elem: this,
              handlers: handlers.slice(delegateCount),
            }),
          handlerQueue
        );
      },
      fix: function (event) {
        if (event[jQuery.expando]) return event;
        var i,
          prop,
          copy,
          type = event.type,
          originalEvent = event,
          fixHook = this.fixHooks[type];
        for (
          fixHook ||
            (this.fixHooks[type] = fixHook =
              rmouseEvent.test(type)
                ? this.mouseHooks
                : rkeyEvent.test(type)
                ? this.keyHooks
                : {}),
            copy = fixHook.props
              ? this.props.concat(fixHook.props)
              : this.props,
            event = new jQuery.Event(originalEvent),
            i = copy.length;
          i--;

        )
          (prop = copy[i]), (event[prop] = originalEvent[prop]);
        return (
          event.target || (event.target = originalEvent.srcElement || document),
          3 === event.target.nodeType &&
            (event.target = event.target.parentNode),
          (event.metaKey = !!event.metaKey),
          fixHook.filter ? fixHook.filter(event, originalEvent) : event
        );
      },
      props:
        "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
          " "
        ),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function (event, original) {
          return (
            null == event.which &&
              (event.which =
                null != original.charCode
                  ? original.charCode
                  : original.keyCode),
            event
          );
        },
      },
      mouseHooks: {
        props:
          "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(
            " "
          ),
        filter: function (event, original) {
          var body,
            eventDoc,
            doc,
            button = original.button,
            fromElement = original.fromElement;
          return (
            null == event.pageX &&
              null != original.clientX &&
              ((eventDoc = event.target.ownerDocument || document),
              (doc = eventDoc.documentElement),
              (body = eventDoc.body),
              (event.pageX =
                original.clientX +
                ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
                ((doc && doc.clientLeft) || (body && body.clientLeft) || 0)),
              (event.pageY =
                original.clientY +
                ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
                ((doc && doc.clientTop) || (body && body.clientTop) || 0))),
            !event.relatedTarget &&
              fromElement &&
              (event.relatedTarget =
                fromElement === event.target
                  ? original.toElement
                  : fromElement),
            event.which ||
              void 0 === button ||
              (event.which =
                1 & button ? 1 : 2 & button ? 3 : 4 & button ? 2 : 0),
            event
          );
        },
      },
      special: {
        load: { noBubble: !0 },
        focus: {
          trigger: function () {
            if (this !== safeActiveElement() && this.focus)
              try {
                return this.focus(), !1;
              } catch (e) {}
          },
          delegateType: "focusin",
        },
        blur: {
          trigger: function () {
            if (this === safeActiveElement() && this.blur)
              return this.blur(), !1;
          },
          delegateType: "focusout",
        },
        click: {
          trigger: function () {
            if (
              jQuery.nodeName(this, "input") &&
              "checkbox" === this.type &&
              this.click
            )
              return this.click(), !1;
          },
          _default: function (event) {
            return jQuery.nodeName(event.target, "a");
          },
        },
        beforeunload: {
          postDispatch: function (event) {
            void 0 !== event.result &&
              event.originalEvent &&
              (event.originalEvent.returnValue = event.result);
          },
        },
      },
      simulate: function (type, elem, event, bubble) {
        var e = jQuery.extend(new jQuery.Event(), event, {
          type: type,
          isSimulated: !0,
          originalEvent: {},
        });
        bubble
          ? jQuery.event.trigger(e, null, elem)
          : jQuery.event.dispatch.call(elem, e),
          e.isDefaultPrevented() && event.preventDefault();
      },
    }),
      (jQuery.removeEvent = document.removeEventListener
        ? function (elem, type, handle) {
            elem.removeEventListener &&
              elem.removeEventListener(type, handle, !1);
          }
        : function (elem, type, handle) {
            var name = "on" + type;
            elem.detachEvent &&
              (typeof elem[name] === strundefined && (elem[name] = null),
              elem.detachEvent(name, handle));
          }),
      (jQuery.Event = function (src, props) {
        return this instanceof jQuery.Event
          ? (src && src.type
              ? ((this.originalEvent = src),
                (this.type = src.type),
                (this.isDefaultPrevented =
                  src.defaultPrevented ||
                  (void 0 === src.defaultPrevented && src.returnValue === !1)
                    ? returnTrue
                    : returnFalse))
              : (this.type = src),
            props && jQuery.extend(this, props),
            (this.timeStamp = (src && src.timeStamp) || jQuery.now()),
            void (this[jQuery.expando] = !0))
          : new jQuery.Event(src, props);
      }),
      (jQuery.Event.prototype = {
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        preventDefault: function () {
          var e = this.originalEvent;
          (this.isDefaultPrevented = returnTrue),
            e && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1));
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          (this.isPropagationStopped = returnTrue),
            e &&
              (e.stopPropagation && e.stopPropagation(), (e.cancelBubble = !0));
        },
        stopImmediatePropagation: function () {
          var e = this.originalEvent;
          (this.isImmediatePropagationStopped = returnTrue),
            e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      jQuery.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (orig, fix) {
          jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,
            handle: function (event) {
              var ret,
                target = this,
                related = event.relatedTarget,
                handleObj = event.handleObj;
              return (
                (related &&
                  (related === target || jQuery.contains(target, related))) ||
                  ((event.type = handleObj.origType),
                  (ret = handleObj.handler.apply(this, arguments)),
                  (event.type = fix)),
                ret
              );
            },
          };
        }
      ),
      support.submitBubbles ||
        (jQuery.event.special.submit = {
          setup: function () {
            return (
              !jQuery.nodeName(this, "form") &&
              void jQuery.event.add(
                this,
                "click._submit keypress._submit",
                function (e) {
                  var elem = e.target,
                    form =
                      jQuery.nodeName(elem, "input") ||
                      jQuery.nodeName(elem, "button")
                        ? elem.form
                        : void 0;
                  form &&
                    !jQuery._data(form, "submitBubbles") &&
                    (jQuery.event.add(form, "submit._submit", function (event) {
                      event._submit_bubble = !0;
                    }),
                    jQuery._data(form, "submitBubbles", !0));
                }
              )
            );
          },
          postDispatch: function (event) {
            event._submit_bubble &&
              (delete event._submit_bubble,
              this.parentNode &&
                !event.isTrigger &&
                jQuery.event.simulate("submit", this.parentNode, event, !0));
          },
          teardown: function () {
            return (
              !jQuery.nodeName(this, "form") &&
              void jQuery.event.remove(this, "._submit")
            );
          },
        }),
      support.changeBubbles ||
        (jQuery.event.special.change = {
          setup: function () {
            return rformElems.test(this.nodeName)
              ? (("checkbox" !== this.type && "radio" !== this.type) ||
                  (jQuery.event.add(
                    this,
                    "propertychange._change",
                    function (event) {
                      "checked" === event.originalEvent.propertyName &&
                        (this._just_changed = !0);
                    }
                  ),
                  jQuery.event.add(this, "click._change", function (event) {
                    this._just_changed &&
                      !event.isTrigger &&
                      (this._just_changed = !1),
                      jQuery.event.simulate("change", this, event, !0);
                  })),
                !1)
              : void jQuery.event.add(
                  this,
                  "beforeactivate._change",
                  function (e) {
                    var elem = e.target;
                    rformElems.test(elem.nodeName) &&
                      !jQuery._data(elem, "changeBubbles") &&
                      (jQuery.event.add(
                        elem,
                        "change._change",
                        function (event) {
                          !this.parentNode ||
                            event.isSimulated ||
                            event.isTrigger ||
                            jQuery.event.simulate(
                              "change",
                              this.parentNode,
                              event,
                              !0
                            );
                        }
                      ),
                      jQuery._data(elem, "changeBubbles", !0));
                  }
                );
          },
          handle: function (event) {
            var elem = event.target;
            if (
              this !== elem ||
              event.isSimulated ||
              event.isTrigger ||
              ("radio" !== elem.type && "checkbox" !== elem.type)
            )
              return event.handleObj.handler.apply(this, arguments);
          },
          teardown: function () {
            return (
              jQuery.event.remove(this, "._change"),
              !rformElems.test(this.nodeName)
            );
          },
        }),
      support.focusinBubbles ||
        jQuery.each(
          { focus: "focusin", blur: "focusout" },
          function (orig, fix) {
            var handler = function (event) {
              jQuery.event.simulate(
                fix,
                event.target,
                jQuery.event.fix(event),
                !0
              );
            };
            jQuery.event.special[fix] = {
              setup: function () {
                var doc = this.ownerDocument || this,
                  attaches = jQuery._data(doc, fix);
                attaches || doc.addEventListener(orig, handler, !0),
                  jQuery._data(doc, fix, (attaches || 0) + 1);
              },
              teardown: function () {
                var doc = this.ownerDocument || this,
                  attaches = jQuery._data(doc, fix) - 1;
                attaches
                  ? jQuery._data(doc, fix, attaches)
                  : (doc.removeEventListener(orig, handler, !0),
                    jQuery._removeData(doc, fix));
              },
            };
          }
        ),
      jQuery.fn.extend({
        on: function (types, selector, data, fn, one) {
          var type, origFn;
          if ("object" == typeof types) {
            "string" != typeof selector &&
              ((data = data || selector), (selector = void 0));
            for (type in types) this.on(type, selector, data, types[type], one);
            return this;
          }
          if (
            (null == data && null == fn
              ? ((fn = selector), (data = selector = void 0))
              : null == fn &&
                ("string" == typeof selector
                  ? ((fn = data), (data = void 0))
                  : ((fn = data), (data = selector), (selector = void 0))),
            fn === !1)
          )
            fn = returnFalse;
          else if (!fn) return this;
          return (
            1 === one &&
              ((origFn = fn),
              (fn = function (event) {
                return jQuery().off(event), origFn.apply(this, arguments);
              }),
              (fn.guid = origFn.guid || (origFn.guid = jQuery.guid++))),
            this.each(function () {
              jQuery.event.add(this, types, fn, data, selector);
            })
          );
        },
        one: function (types, selector, data, fn) {
          return this.on(types, selector, data, fn, 1);
        },
        off: function (types, selector, fn) {
          var handleObj, type;
          if (types && types.preventDefault && types.handleObj)
            return (
              (handleObj = types.handleObj),
              jQuery(types.delegateTarget).off(
                handleObj.namespace
                  ? handleObj.origType + "." + handleObj.namespace
                  : handleObj.origType,
                handleObj.selector,
                handleObj.handler
              ),
              this
            );
          if ("object" == typeof types) {
            for (type in types) this.off(type, selector, types[type]);
            return this;
          }
          return (
            (selector !== !1 && "function" != typeof selector) ||
              ((fn = selector), (selector = void 0)),
            fn === !1 && (fn = returnFalse),
            this.each(function () {
              jQuery.event.remove(this, types, fn, selector);
            })
          );
        },
        trigger: function (type, data) {
          return this.each(function () {
            jQuery.event.trigger(type, data, this);
          });
        },
        triggerHandler: function (type, data) {
          var elem = this[0];
          if (elem) return jQuery.event.trigger(type, data, elem, !0);
        },
      });
    var nodeNames =
        "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
      rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
      rleadingWhitespace = /^\s+/,
      rxhtmlTag =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      rtagName = /<([\w:]+)/,
      rtbody = /<tbody/i,
      rhtml = /<|&#?\w+;/,
      rnoInnerhtml = /<(?:script|style|link)/i,
      rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
      rscriptType = /^$|\/(?:java|ecma)script/i,
      rscriptTypeMasked = /^true\/(.*)/,
      rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      wrapMap = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"],
      },
      safeFragment = createSafeFragment(document),
      fragmentDiv = safeFragment.appendChild(document.createElement("div"));
    (wrapMap.optgroup = wrapMap.option),
      (wrapMap.tbody =
        wrapMap.tfoot =
        wrapMap.colgroup =
        wrapMap.caption =
          wrapMap.thead),
      (wrapMap.th = wrapMap.td),
      jQuery.extend({
        clone: function (elem, dataAndEvents, deepDataAndEvents) {
          var destElements,
            node,
            clone,
            i,
            srcElements,
            inPage = jQuery.contains(elem.ownerDocument, elem);
          if (
            (support.html5Clone ||
            jQuery.isXMLDoc(elem) ||
            !rnoshimcache.test("<" + elem.nodeName + ">")
              ? (clone = elem.cloneNode(!0))
              : ((fragmentDiv.innerHTML = elem.outerHTML),
                fragmentDiv.removeChild((clone = fragmentDiv.firstChild))),
            !(
              (support.noCloneEvent && support.noCloneChecked) ||
              (1 !== elem.nodeType && 11 !== elem.nodeType) ||
              jQuery.isXMLDoc(elem)
            ))
          )
            for (
              destElements = getAll(clone), srcElements = getAll(elem), i = 0;
              null != (node = srcElements[i]);
              ++i
            )
              destElements[i] && fixCloneNodeIssues(node, destElements[i]);
          if (dataAndEvents)
            if (deepDataAndEvents)
              for (
                srcElements = srcElements || getAll(elem),
                  destElements = destElements || getAll(clone),
                  i = 0;
                null != (node = srcElements[i]);
                i++
              )
                cloneCopyEvent(node, destElements[i]);
            else cloneCopyEvent(elem, clone);
          return (
            (destElements = getAll(clone, "script")),
            destElements.length > 0 &&
              setGlobalEval(destElements, !inPage && getAll(elem, "script")),
            (destElements = srcElements = node = null),
            clone
          );
        },
        buildFragment: function (elems, context, scripts, selection) {
          for (
            var j,
              elem,
              contains,
              tmp,
              tag,
              tbody,
              wrap,
              l = elems.length,
              safe = createSafeFragment(context),
              nodes = [],
              i = 0;
            i < l;
            i++
          )
            if (((elem = elems[i]), elem || 0 === elem))
              if ("object" === jQuery.type(elem))
                jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
              else if (rhtml.test(elem)) {
                for (
                  tmp = tmp || safe.appendChild(context.createElement("div")),
                    tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase(),
                    wrap = wrapMap[tag] || wrapMap._default,
                    tmp.innerHTML =
                      wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2],
                    j = wrap[0];
                  j--;

                )
                  tmp = tmp.lastChild;
                if (
                  (!support.leadingWhitespace &&
                    rleadingWhitespace.test(elem) &&
                    nodes.push(
                      context.createTextNode(rleadingWhitespace.exec(elem)[0])
                    ),
                  !support.tbody)
                )
                  for (
                    elem =
                      "table" !== tag || rtbody.test(elem)
                        ? "<table>" !== wrap[1] || rtbody.test(elem)
                          ? 0
                          : tmp
                        : tmp.firstChild,
                      j = elem && elem.childNodes.length;
                    j--;

                  )
                    jQuery.nodeName((tbody = elem.childNodes[j]), "tbody") &&
                      !tbody.childNodes.length &&
                      elem.removeChild(tbody);
                for (
                  jQuery.merge(nodes, tmp.childNodes), tmp.textContent = "";
                  tmp.firstChild;

                )
                  tmp.removeChild(tmp.firstChild);
                tmp = safe.lastChild;
              } else nodes.push(context.createTextNode(elem));
          for (
            tmp && safe.removeChild(tmp),
              support.appendChecked ||
                jQuery.grep(getAll(nodes, "input"), fixDefaultChecked),
              i = 0;
            (elem = nodes[i++]);

          )
            if (
              (!selection || jQuery.inArray(elem, selection) === -1) &&
              ((contains = jQuery.contains(elem.ownerDocument, elem)),
              (tmp = getAll(safe.appendChild(elem), "script")),
              contains && setGlobalEval(tmp),
              scripts)
            )
              for (j = 0; (elem = tmp[j++]); )
                rscriptType.test(elem.type || "") && scripts.push(elem);
          return (tmp = null), safe;
        },
        cleanData: function (elems, acceptData) {
          for (
            var elem,
              type,
              id,
              data,
              i = 0,
              internalKey = jQuery.expando,
              cache = jQuery.cache,
              deleteExpando = support.deleteExpando,
              special = jQuery.event.special;
            null != (elem = elems[i]);
            i++
          )
            if (
              (acceptData || jQuery.acceptData(elem)) &&
              ((id = elem[internalKey]), (data = id && cache[id]))
            ) {
              if (data.events)
                for (type in data.events)
                  special[type]
                    ? jQuery.event.remove(elem, type)
                    : jQuery.removeEvent(elem, type, data.handle);
              cache[id] &&
                (delete cache[id],
                deleteExpando
                  ? delete elem[internalKey]
                  : typeof elem.removeAttribute !== strundefined
                  ? elem.removeAttribute(internalKey)
                  : (elem[internalKey] = null),
                deletedIds.push(id));
            }
        },
      }),
      jQuery.fn.extend({
        text: function (value) {
          return access(
            this,
            function (value) {
              return void 0 === value
                ? jQuery.text(this)
                : this.empty().append(
                    (
                      (this[0] && this[0].ownerDocument) ||
                      document
                    ).createTextNode(value)
                  );
            },
            null,
            value,
            arguments.length
          );
        },
        append: function () {
          return this.domManip(arguments, function (elem) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var target = manipulationTarget(this, elem);
              target.appendChild(elem);
            }
          });
        },
        prepend: function () {
          return this.domManip(arguments, function (elem) {
            if (
              1 === this.nodeType ||
              11 === this.nodeType ||
              9 === this.nodeType
            ) {
              var target = manipulationTarget(this, elem);
              target.insertBefore(elem, target.firstChild);
            }
          });
        },
        before: function () {
          return this.domManip(arguments, function (elem) {
            this.parentNode && this.parentNode.insertBefore(elem, this);
          });
        },
        after: function () {
          return this.domManip(arguments, function (elem) {
            this.parentNode &&
              this.parentNode.insertBefore(elem, this.nextSibling);
          });
        },
        remove: function (selector, keepData) {
          for (
            var elem,
              elems = selector ? jQuery.filter(selector, this) : this,
              i = 0;
            null != (elem = elems[i]);
            i++
          )
            keepData || 1 !== elem.nodeType || jQuery.cleanData(getAll(elem)),
              elem.parentNode &&
                (keepData &&
                  jQuery.contains(elem.ownerDocument, elem) &&
                  setGlobalEval(getAll(elem, "script")),
                elem.parentNode.removeChild(elem));
          return this;
        },
        empty: function () {
          for (var elem, i = 0; null != (elem = this[i]); i++) {
            for (
              1 === elem.nodeType && jQuery.cleanData(getAll(elem, !1));
              elem.firstChild;

            )
              elem.removeChild(elem.firstChild);
            elem.options &&
              jQuery.nodeName(elem, "select") &&
              (elem.options.length = 0);
          }
          return this;
        },
        clone: function (dataAndEvents, deepDataAndEvents) {
          return (
            (dataAndEvents = null != dataAndEvents && dataAndEvents),
            (deepDataAndEvents =
              null == deepDataAndEvents ? dataAndEvents : deepDataAndEvents),
            this.map(function () {
              return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            })
          );
        },
        html: function (value) {
          return access(
            this,
            function (value) {
              var elem = this[0] || {},
                i = 0,
                l = this.length;
              if (void 0 === value)
                return 1 === elem.nodeType
                  ? elem.innerHTML.replace(rinlinejQuery, "")
                  : void 0;
              if (
                "string" == typeof value &&
                !rnoInnerhtml.test(value) &&
                (support.htmlSerialize || !rnoshimcache.test(value)) &&
                (support.leadingWhitespace ||
                  !rleadingWhitespace.test(value)) &&
                !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]
              ) {
                value = value.replace(rxhtmlTag, "<$1></$2>");
                try {
                  for (; i < l; i++)
                    (elem = this[i] || {}),
                      1 === elem.nodeType &&
                        (jQuery.cleanData(getAll(elem, !1)),
                        (elem.innerHTML = value));
                  elem = 0;
                } catch (e) {}
              }
              elem && this.empty().append(value);
            },
            null,
            value,
            arguments.length
          );
        },
        replaceWith: function () {
          var arg = arguments[0];
          return (
            this.domManip(arguments, function (elem) {
              (arg = this.parentNode),
                jQuery.cleanData(getAll(this)),
                arg && arg.replaceChild(elem, this);
            }),
            arg && (arg.length || arg.nodeType) ? this : this.remove()
          );
        },
        detach: function (selector) {
          return this.remove(selector, !0);
        },
        domManip: function (args, callback) {
          args = concat.apply([], args);
          var first,
            node,
            hasScripts,
            scripts,
            doc,
            fragment,
            i = 0,
            l = this.length,
            set = this,
            iNoClone = l - 1,
            value = args[0],
            isFunction = jQuery.isFunction(value);
          if (
            isFunction ||
            (l > 1 &&
              "string" == typeof value &&
              !support.checkClone &&
              rchecked.test(value))
          )
            return this.each(function (index) {
              var self = set.eq(index);
              isFunction && (args[0] = value.call(this, index, self.html())),
                self.domManip(args, callback);
            });
          if (
            l &&
            ((fragment = jQuery.buildFragment(
              args,
              this[0].ownerDocument,
              !1,
              this
            )),
            (first = fragment.firstChild),
            1 === fragment.childNodes.length && (fragment = first),
            first)
          ) {
            for (
              scripts = jQuery.map(getAll(fragment, "script"), disableScript),
                hasScripts = scripts.length;
              i < l;
              i++
            )
              (node = fragment),
                i !== iNoClone &&
                  ((node = jQuery.clone(node, !0, !0)),
                  hasScripts && jQuery.merge(scripts, getAll(node, "script"))),
                callback.call(this[i], node, i);
            if (hasScripts)
              for (
                doc = scripts[scripts.length - 1].ownerDocument,
                  jQuery.map(scripts, restoreScript),
                  i = 0;
                i < hasScripts;
                i++
              )
                (node = scripts[i]),
                  rscriptType.test(node.type || "") &&
                    !jQuery._data(node, "globalEval") &&
                    jQuery.contains(doc, node) &&
                    (node.src
                      ? jQuery._evalUrl && jQuery._evalUrl(node.src)
                      : jQuery.globalEval(
                          (
                            node.text ||
                            node.textContent ||
                            node.innerHTML ||
                            ""
                          ).replace(rcleanScript, "")
                        ));
            fragment = first = null;
          }
          return this;
        },
      }),
      jQuery.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (name, original) {
          jQuery.fn[name] = function (selector) {
            for (
              var elems,
                i = 0,
                ret = [],
                insert = jQuery(selector),
                last = insert.length - 1;
              i <= last;
              i++
            )
              (elems = i === last ? this : this.clone(!0)),
                jQuery(insert[i])[original](elems),
                push.apply(ret, elems.get());
            return this.pushStack(ret);
          };
        }
      );
    var iframe,
      elemdisplay = {};
    !(function () {
      var shrinkWrapBlocksVal;
      support.shrinkWrapBlocks = function () {
        if (null != shrinkWrapBlocksVal) return shrinkWrapBlocksVal;
        shrinkWrapBlocksVal = !1;
        var div, body, container;
        return (
          (body = document.getElementsByTagName("body")[0]),
          body && body.style
            ? ((div = document.createElement("div")),
              (container = document.createElement("div")),
              (container.style.cssText =
                "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
              body.appendChild(container).appendChild(div),
              typeof div.style.zoom !== strundefined &&
                ((div.style.cssText =
                  "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1"),
                (div.appendChild(document.createElement("div")).style.width =
                  "5px"),
                (shrinkWrapBlocksVal = 3 !== div.offsetWidth)),
              body.removeChild(container),
              shrinkWrapBlocksVal)
            : void 0
        );
      };
    })();
    var getStyles,
      curCSS,
      rmargin = /^margin/,
      rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i"),
      rposition = /^(top|right|bottom|left)$/;
    window.getComputedStyle
      ? ((getStyles = function (elem) {
          return elem.ownerDocument.defaultView.opener
            ? elem.ownerDocument.defaultView.getComputedStyle(elem, null)
            : window.getComputedStyle(elem, null);
        }),
        (curCSS = function (elem, name, computed) {
          var width,
            minWidth,
            maxWidth,
            ret,
            style = elem.style;
          return (
            (computed = computed || getStyles(elem)),
            (ret = computed
              ? computed.getPropertyValue(name) || computed[name]
              : void 0),
            computed &&
              ("" !== ret ||
                jQuery.contains(elem.ownerDocument, elem) ||
                (ret = jQuery.style(elem, name)),
              rnumnonpx.test(ret) &&
                rmargin.test(name) &&
                ((width = style.width),
                (minWidth = style.minWidth),
                (maxWidth = style.maxWidth),
                (style.minWidth = style.maxWidth = style.width = ret),
                (ret = computed.width),
                (style.width = width),
                (style.minWidth = minWidth),
                (style.maxWidth = maxWidth))),
            void 0 === ret ? ret : ret + ""
          );
        }))
      : document.documentElement.currentStyle &&
        ((getStyles = function (elem) {
          return elem.currentStyle;
        }),
        (curCSS = function (elem, name, computed) {
          var left,
            rs,
            rsLeft,
            ret,
            style = elem.style;
          return (
            (computed = computed || getStyles(elem)),
            (ret = computed ? computed[name] : void 0),
            null == ret && style && style[name] && (ret = style[name]),
            rnumnonpx.test(ret) &&
              !rposition.test(name) &&
              ((left = style.left),
              (rs = elem.runtimeStyle),
              (rsLeft = rs && rs.left),
              rsLeft && (rs.left = elem.currentStyle.left),
              (style.left = "fontSize" === name ? "1em" : ret),
              (ret = style.pixelLeft + "px"),
              (style.left = left),
              rsLeft && (rs.left = rsLeft)),
            void 0 === ret ? ret : ret + "" || "auto"
          );
        })),
      (function () {
        function computeStyleTests() {
          var div, body, container, contents;
          (body = document.getElementsByTagName("body")[0]),
            body &&
              body.style &&
              ((div = document.createElement("div")),
              (container = document.createElement("div")),
              (container.style.cssText =
                "position:absolute;border:0;width:0;height:0;top:0;left:-9999px"),
              body.appendChild(container).appendChild(div),
              (div.style.cssText =
                "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
              (pixelPositionVal = boxSizingReliableVal = !1),
              (reliableMarginRightVal = !0),
              window.getComputedStyle &&
                ((pixelPositionVal =
                  "1%" !== (window.getComputedStyle(div, null) || {}).top),
                (boxSizingReliableVal =
                  "4px" ===
                  (window.getComputedStyle(div, null) || { width: "4px" })
                    .width),
                (contents = div.appendChild(document.createElement("div"))),
                (contents.style.cssText = div.style.cssText =
                  "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
                (contents.style.marginRight = contents.style.width = "0"),
                (div.style.width = "1px"),
                (reliableMarginRightVal = !parseFloat(
                  (window.getComputedStyle(contents, null) || {}).marginRight
                )),
                div.removeChild(contents)),
              (div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>"),
              (contents = div.getElementsByTagName("td")),
              (contents[0].style.cssText =
                "margin:0;border:0;padding:0;display:none"),
              (reliableHiddenOffsetsVal = 0 === contents[0].offsetHeight),
              reliableHiddenOffsetsVal &&
                ((contents[0].style.display = ""),
                (contents[1].style.display = "none"),
                (reliableHiddenOffsetsVal = 0 === contents[0].offsetHeight)),
              body.removeChild(container));
        }
        var div,
          style,
          a,
          pixelPositionVal,
          boxSizingReliableVal,
          reliableHiddenOffsetsVal,
          reliableMarginRightVal;
        (div = document.createElement("div")),
          (div.innerHTML =
            "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
          (a = div.getElementsByTagName("a")[0]),
          (style = a && a.style),
          style &&
            ((style.cssText = "float:left;opacity:.5"),
            (support.opacity = "0.5" === style.opacity),
            (support.cssFloat = !!style.cssFloat),
            (div.style.backgroundClip = "content-box"),
            (div.cloneNode(!0).style.backgroundClip = ""),
            (support.clearCloneStyle =
              "content-box" === div.style.backgroundClip),
            (support.boxSizing =
              "" === style.boxSizing ||
              "" === style.MozBoxSizing ||
              "" === style.WebkitBoxSizing),
            jQuery.extend(support, {
              reliableHiddenOffsets: function () {
                return (
                  null == reliableHiddenOffsetsVal && computeStyleTests(),
                  reliableHiddenOffsetsVal
                );
              },
              boxSizingReliable: function () {
                return (
                  null == boxSizingReliableVal && computeStyleTests(),
                  boxSizingReliableVal
                );
              },
              pixelPosition: function () {
                return (
                  null == pixelPositionVal && computeStyleTests(),
                  pixelPositionVal
                );
              },
              reliableMarginRight: function () {
                return (
                  null == reliableMarginRightVal && computeStyleTests(),
                  reliableMarginRightVal
                );
              },
            }));
      })(),
      (jQuery.swap = function (elem, options, callback, args) {
        var ret,
          name,
          old = {};
        for (name in options)
          (old[name] = elem.style[name]), (elem.style[name] = options[name]);
        ret = callback.apply(elem, args || []);
        for (name in options) elem.style[name] = old[name];
        return ret;
      });
    var ralpha = /alpha\([^)]*\)/i,
      ropacity = /opacity\s*=\s*([^)]*)/,
      rdisplayswap = /^(none|table(?!-c[ea]).+)/,
      rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"),
      rrelNum = new RegExp("^([+-])=(" + pnum + ")", "i"),
      cssShow = {
        position: "absolute",
        visibility: "hidden",
        display: "block",
      },
      cssNormalTransform = { letterSpacing: "0", fontWeight: "400" },
      cssPrefixes = ["Webkit", "O", "Moz", "ms"];
    jQuery.extend({
      cssHooks: {
        opacity: {
          get: function (elem, computed) {
            if (computed) {
              var ret = curCSS(elem, "opacity");
              return "" === ret ? "1" : ret;
            }
          },
        },
      },
      cssNumber: {
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
      },
      cssProps: { float: support.cssFloat ? "cssFloat" : "styleFloat" },
      style: function (elem, name, value, extra) {
        if (elem && 3 !== elem.nodeType && 8 !== elem.nodeType && elem.style) {
          var ret,
            type,
            hooks,
            origName = jQuery.camelCase(name),
            style = elem.style;
          if (
            ((name =
              jQuery.cssProps[origName] ||
              (jQuery.cssProps[origName] = vendorPropName(style, origName))),
            (hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]),
            void 0 === value)
          )
            return hooks &&
              "get" in hooks &&
              void 0 !== (ret = hooks.get(elem, !1, extra))
              ? ret
              : style[name];
          if (
            ((type = typeof value),
            "string" === type &&
              (ret = rrelNum.exec(value)) &&
              ((value =
                (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name))),
              (type = "number")),
            null != value &&
              value === value &&
              ("number" !== type ||
                jQuery.cssNumber[origName] ||
                (value += "px"),
              support.clearCloneStyle ||
                "" !== value ||
                0 !== name.indexOf("background") ||
                (style[name] = "inherit"),
              !(
                hooks &&
                "set" in hooks &&
                void 0 === (value = hooks.set(elem, value, extra))
              )))
          )
            try {
              style[name] = value;
            } catch (e) {}
        }
      },
      css: function (elem, name, extra, styles) {
        var num,
          val,
          hooks,
          origName = jQuery.camelCase(name);
        return (
          (name =
            jQuery.cssProps[origName] ||
            (jQuery.cssProps[origName] = vendorPropName(elem.style, origName))),
          (hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]),
          hooks && "get" in hooks && (val = hooks.get(elem, !0, extra)),
          void 0 === val && (val = curCSS(elem, name, styles)),
          "normal" === val &&
            name in cssNormalTransform &&
            (val = cssNormalTransform[name]),
          "" === extra || extra
            ? ((num = parseFloat(val)),
              extra === !0 || jQuery.isNumeric(num) ? num || 0 : val)
            : val
        );
      },
    }),
      jQuery.each(["height", "width"], function (i, name) {
        jQuery.cssHooks[name] = {
          get: function (elem, computed, extra) {
            if (computed)
              return rdisplayswap.test(jQuery.css(elem, "display")) &&
                0 === elem.offsetWidth
                ? jQuery.swap(elem, cssShow, function () {
                    return getWidthOrHeight(elem, name, extra);
                  })
                : getWidthOrHeight(elem, name, extra);
          },
          set: function (elem, value, extra) {
            var styles = extra && getStyles(elem);
            return setPositiveNumber(
              elem,
              value,
              extra
                ? augmentWidthOrHeight(
                    elem,
                    name,
                    extra,
                    support.boxSizing &&
                      "border-box" ===
                        jQuery.css(elem, "boxSizing", !1, styles),
                    styles
                  )
                : 0
            );
          },
        };
      }),
      support.opacity ||
        (jQuery.cssHooks.opacity = {
          get: function (elem, computed) {
            return ropacity.test(
              (computed && elem.currentStyle
                ? elem.currentStyle.filter
                : elem.style.filter) || ""
            )
              ? 0.01 * parseFloat(RegExp.$1) + ""
              : computed
              ? "1"
              : "";
          },
          set: function (elem, value) {
            var style = elem.style,
              currentStyle = elem.currentStyle,
              opacity = jQuery.isNumeric(value)
                ? "alpha(opacity=" + 100 * value + ")"
                : "",
              filter =
                (currentStyle && currentStyle.filter) || style.filter || "";
            (style.zoom = 1),
              ((value >= 1 || "" === value) &&
                "" === jQuery.trim(filter.replace(ralpha, "")) &&
                style.removeAttribute &&
                (style.removeAttribute("filter"),
                "" === value || (currentStyle && !currentStyle.filter))) ||
                (style.filter = ralpha.test(filter)
                  ? filter.replace(ralpha, opacity)
                  : filter + " " + opacity);
          },
        }),
      (jQuery.cssHooks.marginRight = addGetHookIf(
        support.reliableMarginRight,
        function (elem, computed) {
          if (computed)
            return jQuery.swap(elem, { display: "inline-block" }, curCSS, [
              elem,
              "marginRight",
            ]);
        }
      )),
      jQuery.each(
        { margin: "", padding: "", border: "Width" },
        function (prefix, suffix) {
          (jQuery.cssHooks[prefix + suffix] = {
            expand: function (value) {
              for (
                var i = 0,
                  expanded = {},
                  parts = "string" == typeof value ? value.split(" ") : [value];
                i < 4;
                i++
              )
                expanded[prefix + cssExpand[i] + suffix] =
                  parts[i] || parts[i - 2] || parts[0];
              return expanded;
            },
          }),
            rmargin.test(prefix) ||
              (jQuery.cssHooks[prefix + suffix].set = setPositiveNumber);
        }
      ),
      jQuery.fn.extend({
        css: function (name, value) {
          return access(
            this,
            function (elem, name, value) {
              var styles,
                len,
                map = {},
                i = 0;
              if (jQuery.isArray(name)) {
                for (styles = getStyles(elem), len = name.length; i < len; i++)
                  map[name[i]] = jQuery.css(elem, name[i], !1, styles);
                return map;
              }
              return void 0 !== value
                ? jQuery.style(elem, name, value)
                : jQuery.css(elem, name);
            },
            name,
            value,
            arguments.length > 1
          );
        },
        show: function () {
          return showHide(this, !0);
        },
        hide: function () {
          return showHide(this);
        },
        toggle: function (state) {
          return "boolean" == typeof state
            ? state
              ? this.show()
              : this.hide()
            : this.each(function () {
                isHidden(this) ? jQuery(this).show() : jQuery(this).hide();
              });
        },
      }),
      (jQuery.Tween = Tween),
      (Tween.prototype = {
        constructor: Tween,
        init: function (elem, options, prop, end, easing, unit) {
          (this.elem = elem),
            (this.prop = prop),
            (this.easing = easing || "swing"),
            (this.options = options),
            (this.start = this.now = this.cur()),
            (this.end = end),
            (this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px"));
        },
        cur: function () {
          var hooks = Tween.propHooks[this.prop];
          return hooks && hooks.get
            ? hooks.get(this)
            : Tween.propHooks._default.get(this);
        },
        run: function (percent) {
          var eased,
            hooks = Tween.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = eased =
                  jQuery.easing[this.easing](
                    percent,
                    this.options.duration * percent,
                    0,
                    1,
                    this.options.duration
                  ))
              : (this.pos = eased = percent),
            (this.now = (this.end - this.start) * eased + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            hooks && hooks.set
              ? hooks.set(this)
              : Tween.propHooks._default.set(this),
            this
          );
        },
      }),
      (Tween.prototype.init.prototype = Tween.prototype),
      (Tween.propHooks = {
        _default: {
          get: function (tween) {
            var result;
            return null == tween.elem[tween.prop] ||
              (tween.elem.style && null != tween.elem.style[tween.prop])
              ? ((result = jQuery.css(tween.elem, tween.prop, "")),
                result && "auto" !== result ? result : 0)
              : tween.elem[tween.prop];
          },
          set: function (tween) {
            jQuery.fx.step[tween.prop]
              ? jQuery.fx.step[tween.prop](tween)
              : tween.elem.style &&
                (null != tween.elem.style[jQuery.cssProps[tween.prop]] ||
                  jQuery.cssHooks[tween.prop])
              ? jQuery.style(tween.elem, tween.prop, tween.now + tween.unit)
              : (tween.elem[tween.prop] = tween.now);
          },
        },
      }),
      (Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft =
        {
          set: function (tween) {
            tween.elem.nodeType &&
              tween.elem.parentNode &&
              (tween.elem[tween.prop] = tween.now);
          },
        }),
      (jQuery.easing = {
        linear: function (p) {
          return p;
        },
        swing: function (p) {
          return 0.5 - Math.cos(p * Math.PI) / 2;
        },
      }),
      (jQuery.fx = Tween.prototype.init),
      (jQuery.fx.step = {});
    var fxNow,
      timerId,
      rfxtypes = /^(?:toggle|show|hide)$/,
      rfxnum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"),
      rrun = /queueHooks$/,
      animationPrefilters = [defaultPrefilter],
      tweeners = {
        "*": [
          function (prop, value) {
            var tween = this.createTween(prop, value),
              target = tween.cur(),
              parts = rfxnum.exec(value),
              unit =
                (parts && parts[3]) || (jQuery.cssNumber[prop] ? "" : "px"),
              start =
                (jQuery.cssNumber[prop] || ("px" !== unit && +target)) &&
                rfxnum.exec(jQuery.css(tween.elem, prop)),
              scale = 1,
              maxIterations = 20;
            if (start && start[3] !== unit) {
              (unit = unit || start[3]),
                (parts = parts || []),
                (start = +target || 1);
              do
                (scale = scale || ".5"),
                  (start /= scale),
                  jQuery.style(tween.elem, prop, start + unit);
              while (
                scale !== (scale = tween.cur() / target) &&
                1 !== scale &&
                --maxIterations
              );
            }
            return (
              parts &&
                ((start = tween.start = +start || +target || 0),
                (tween.unit = unit),
                (tween.end = parts[1]
                  ? start + (parts[1] + 1) * parts[2]
                  : +parts[2])),
              tween
            );
          },
        ],
      };
    (jQuery.Animation = jQuery.extend(Animation, {
      tweener: function (props, callback) {
        jQuery.isFunction(props)
          ? ((callback = props), (props = ["*"]))
          : (props = props.split(" "));
        for (
          var prop, index = 0, length = props.length;
          index < length;
          index++
        )
          (prop = props[index]),
            (tweeners[prop] = tweeners[prop] || []),
            tweeners[prop].unshift(callback);
      },
      prefilter: function (callback, prepend) {
        prepend
          ? animationPrefilters.unshift(callback)
          : animationPrefilters.push(callback);
      },
    })),
      (jQuery.speed = function (speed, easing, fn) {
        var opt =
          speed && "object" == typeof speed
            ? jQuery.extend({}, speed)
            : {
                complete:
                  fn || (!fn && easing) || (jQuery.isFunction(speed) && speed),
                duration: speed,
                easing:
                  (fn && easing) ||
                  (easing && !jQuery.isFunction(easing) && easing),
              };
        return (
          (opt.duration = jQuery.fx.off
            ? 0
            : "number" == typeof opt.duration
            ? opt.duration
            : opt.duration in jQuery.fx.speeds
            ? jQuery.fx.speeds[opt.duration]
            : jQuery.fx.speeds._default),
          (null != opt.queue && opt.queue !== !0) || (opt.queue = "fx"),
          (opt.old = opt.complete),
          (opt.complete = function () {
            jQuery.isFunction(opt.old) && opt.old.call(this),
              opt.queue && jQuery.dequeue(this, opt.queue);
          }),
          opt
        );
      }),
      jQuery.fn.extend({
        fadeTo: function (speed, to, easing, callback) {
          return this.filter(isHidden)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: to }, speed, easing, callback);
        },
        animate: function (prop, speed, easing, callback) {
          var empty = jQuery.isEmptyObject(prop),
            optall = jQuery.speed(speed, easing, callback),
            doAnimation = function () {
              var anim = Animation(this, jQuery.extend({}, prop), optall);
              (empty || jQuery._data(this, "finish")) && anim.stop(!0);
            };
          return (
            (doAnimation.finish = doAnimation),
            empty || optall.queue === !1
              ? this.each(doAnimation)
              : this.queue(optall.queue, doAnimation)
          );
        },
        stop: function (type, clearQueue, gotoEnd) {
          var stopQueue = function (hooks) {
            var stop = hooks.stop;
            delete hooks.stop, stop(gotoEnd);
          };
          return (
            "string" != typeof type &&
              ((gotoEnd = clearQueue), (clearQueue = type), (type = void 0)),
            clearQueue && type !== !1 && this.queue(type || "fx", []),
            this.each(function () {
              var dequeue = !0,
                index = null != type && type + "queueHooks",
                timers = jQuery.timers,
                data = jQuery._data(this);
              if (index)
                data[index] && data[index].stop && stopQueue(data[index]);
              else
                for (index in data)
                  data[index] &&
                    data[index].stop &&
                    rrun.test(index) &&
                    stopQueue(data[index]);
              for (index = timers.length; index--; )
                timers[index].elem !== this ||
                  (null != type && timers[index].queue !== type) ||
                  (timers[index].anim.stop(gotoEnd),
                  (dequeue = !1),
                  timers.splice(index, 1));
              (!dequeue && gotoEnd) || jQuery.dequeue(this, type);
            })
          );
        },
        finish: function (type) {
          return (
            type !== !1 && (type = type || "fx"),
            this.each(function () {
              var index,
                data = jQuery._data(this),
                queue = data[type + "queue"],
                hooks = data[type + "queueHooks"],
                timers = jQuery.timers,
                length = queue ? queue.length : 0;
              for (
                data.finish = !0,
                  jQuery.queue(this, type, []),
                  hooks && hooks.stop && hooks.stop.call(this, !0),
                  index = timers.length;
                index--;

              )
                timers[index].elem === this &&
                  timers[index].queue === type &&
                  (timers[index].anim.stop(!0), timers.splice(index, 1));
              for (index = 0; index < length; index++)
                queue[index] &&
                  queue[index].finish &&
                  queue[index].finish.call(this);
              delete data.finish;
            })
          );
        },
      }),
      jQuery.each(["toggle", "show", "hide"], function (i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function (speed, easing, callback) {
          return null == speed || "boolean" == typeof speed
            ? cssFn.apply(this, arguments)
            : this.animate(genFx(name, !0), speed, easing, callback);
        };
      }),
      jQuery.each(
        {
          slideDown: genFx("show"),
          slideUp: genFx("hide"),
          slideToggle: genFx("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (name, props) {
          jQuery.fn[name] = function (speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
          };
        }
      ),
      (jQuery.timers = []),
      (jQuery.fx.tick = function () {
        var timer,
          timers = jQuery.timers,
          i = 0;
        for (fxNow = jQuery.now(); i < timers.length; i++)
          (timer = timers[i]),
            timer() || timers[i] !== timer || timers.splice(i--, 1);
        timers.length || jQuery.fx.stop(), (fxNow = void 0);
      }),
      (jQuery.fx.timer = function (timer) {
        jQuery.timers.push(timer),
          timer() ? jQuery.fx.start() : jQuery.timers.pop();
      }),
      (jQuery.fx.interval = 13),
      (jQuery.fx.start = function () {
        timerId || (timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval));
      }),
      (jQuery.fx.stop = function () {
        clearInterval(timerId), (timerId = null);
      }),
      (jQuery.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (jQuery.fn.delay = function (time, type) {
        return (
          (time = jQuery.fx ? jQuery.fx.speeds[time] || time : time),
          (type = type || "fx"),
          this.queue(type, function (next, hooks) {
            var timeout = setTimeout(next, time);
            hooks.stop = function () {
              clearTimeout(timeout);
            };
          })
        );
      }),
      (function () {
        var input, div, select, a, opt;
        (div = document.createElement("div")),
          div.setAttribute("className", "t"),
          (div.innerHTML =
            "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>"),
          (a = div.getElementsByTagName("a")[0]),
          (select = document.createElement("select")),
          (opt = select.appendChild(document.createElement("option"))),
          (input = div.getElementsByTagName("input")[0]),
          (a.style.cssText = "top:1px"),
          (support.getSetAttribute = "t" !== div.className),
          (support.style = /top/.test(a.getAttribute("style"))),
          (support.hrefNormalized = "/a" === a.getAttribute("href")),
          (support.checkOn = !!input.value),
          (support.optSelected = opt.selected),
          (support.enctype = !!document.createElement("form").enctype),
          (select.disabled = !0),
          (support.optDisabled = !opt.disabled),
          (input = document.createElement("input")),
          input.setAttribute("value", ""),
          (support.input = "" === input.getAttribute("value")),
          (input.value = "t"),
          input.setAttribute("type", "radio"),
          (support.radioValue = "t" === input.value);
      })();
    var rreturn = /\r/g;
    jQuery.fn.extend({
      val: function (value) {
        var hooks,
          ret,
          isFunction,
          elem = this[0];
        {
          if (arguments.length)
            return (
              (isFunction = jQuery.isFunction(value)),
              this.each(function (i) {
                var val;
                1 === this.nodeType &&
                  ((val = isFunction
                    ? value.call(this, i, jQuery(this).val())
                    : value),
                  null == val
                    ? (val = "")
                    : "number" == typeof val
                    ? (val += "")
                    : jQuery.isArray(val) &&
                      (val = jQuery.map(val, function (value) {
                        return null == value ? "" : value + "";
                      })),
                  (hooks =
                    jQuery.valHooks[this.type] ||
                    jQuery.valHooks[this.nodeName.toLowerCase()]),
                  (hooks &&
                    "set" in hooks &&
                    void 0 !== hooks.set(this, val, "value")) ||
                    (this.value = val));
              })
            );
          if (elem)
            return (
              (hooks =
                jQuery.valHooks[elem.type] ||
                jQuery.valHooks[elem.nodeName.toLowerCase()]),
              hooks &&
              "get" in hooks &&
              void 0 !== (ret = hooks.get(elem, "value"))
                ? ret
                : ((ret = elem.value),
                  "string" == typeof ret
                    ? ret.replace(rreturn, "")
                    : null == ret
                    ? ""
                    : ret)
            );
        }
      },
    }),
      jQuery.extend({
        valHooks: {
          option: {
            get: function (elem) {
              var val = jQuery.find.attr(elem, "value");
              return null != val ? val : jQuery.trim(jQuery.text(elem));
            },
          },
          select: {
            get: function (elem) {
              for (
                var value,
                  option,
                  options = elem.options,
                  index = elem.selectedIndex,
                  one = "select-one" === elem.type || index < 0,
                  values = one ? null : [],
                  max = one ? index + 1 : options.length,
                  i = index < 0 ? max : one ? index : 0;
                i < max;
                i++
              )
                if (
                  ((option = options[i]),
                  (option.selected || i === index) &&
                    (support.optDisabled
                      ? !option.disabled
                      : null === option.getAttribute("disabled")) &&
                    (!option.parentNode.disabled ||
                      !jQuery.nodeName(option.parentNode, "optgroup")))
                ) {
                  if (((value = jQuery(option).val()), one)) return value;
                  values.push(value);
                }
              return values;
            },
            set: function (elem, value) {
              for (
                var optionSet,
                  option,
                  options = elem.options,
                  values = jQuery.makeArray(value),
                  i = options.length;
                i--;

              )
                if (
                  ((option = options[i]),
                  jQuery.inArray(jQuery.valHooks.option.get(option), values) >=
                    0)
                )
                  try {
                    option.selected = optionSet = !0;
                  } catch (_) {
                    option.scrollHeight;
                  }
                else option.selected = !1;
              return optionSet || (elem.selectedIndex = -1), options;
            },
          },
        },
      }),
      jQuery.each(["radio", "checkbox"], function () {
        (jQuery.valHooks[this] = {
          set: function (elem, value) {
            if (jQuery.isArray(value))
              return (elem.checked =
                jQuery.inArray(jQuery(elem).val(), value) >= 0);
          },
        }),
          support.checkOn ||
            (jQuery.valHooks[this].get = function (elem) {
              return null === elem.getAttribute("value") ? "on" : elem.value;
            });
      });
    var nodeHook,
      boolHook,
      attrHandle = jQuery.expr.attrHandle,
      ruseDefault = /^(?:checked|selected)$/i,
      getSetAttribute = support.getSetAttribute,
      getSetInput = support.input;
    jQuery.fn.extend({
      attr: function (name, value) {
        return access(this, jQuery.attr, name, value, arguments.length > 1);
      },
      removeAttr: function (name) {
        return this.each(function () {
          jQuery.removeAttr(this, name);
        });
      },
    }),
      jQuery.extend({
        attr: function (elem, name, value) {
          var hooks,
            ret,
            nType = elem.nodeType;
          if (elem && 3 !== nType && 8 !== nType && 2 !== nType)
            return typeof elem.getAttribute === strundefined
              ? jQuery.prop(elem, name, value)
              : ((1 === nType && jQuery.isXMLDoc(elem)) ||
                  ((name = name.toLowerCase()),
                  (hooks =
                    jQuery.attrHooks[name] ||
                    (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook))),
                void 0 === value
                  ? hooks &&
                    "get" in hooks &&
                    null !== (ret = hooks.get(elem, name))
                    ? ret
                    : ((ret = jQuery.find.attr(elem, name)),
                      null == ret ? void 0 : ret)
                  : null !== value
                  ? hooks &&
                    "set" in hooks &&
                    void 0 !== (ret = hooks.set(elem, value, name))
                    ? ret
                    : (elem.setAttribute(name, value + ""), value)
                  : void jQuery.removeAttr(elem, name));
        },
        removeAttr: function (elem, value) {
          var name,
            propName,
            i = 0,
            attrNames = value && value.match(rnotwhite);
          if (attrNames && 1 === elem.nodeType)
            for (; (name = attrNames[i++]); )
              (propName = jQuery.propFix[name] || name),
                jQuery.expr.match.bool.test(name)
                  ? (getSetInput && getSetAttribute) || !ruseDefault.test(name)
                    ? (elem[propName] = !1)
                    : (elem[jQuery.camelCase("default-" + name)] = elem[
                        propName
                      ] =
                        !1)
                  : jQuery.attr(elem, name, ""),
                elem.removeAttribute(getSetAttribute ? name : propName);
        },
        attrHooks: {
          type: {
            set: function (elem, value) {
              if (
                !support.radioValue &&
                "radio" === value &&
                jQuery.nodeName(elem, "input")
              ) {
                var val = elem.value;
                return (
                  elem.setAttribute("type", value),
                  val && (elem.value = val),
                  value
                );
              }
            },
          },
        },
      }),
      (boolHook = {
        set: function (elem, value, name) {
          return (
            value === !1
              ? jQuery.removeAttr(elem, name)
              : (getSetInput && getSetAttribute) || !ruseDefault.test(name)
              ? elem.setAttribute(
                  (!getSetAttribute && jQuery.propFix[name]) || name,
                  name
                )
              : (elem[jQuery.camelCase("default-" + name)] = elem[name] = !0),
            name
          );
        },
      }),
      jQuery.each(
        jQuery.expr.match.bool.source.match(/\w+/g),
        function (i, name) {
          var getter = attrHandle[name] || jQuery.find.attr;
          attrHandle[name] =
            (getSetInput && getSetAttribute) || !ruseDefault.test(name)
              ? function (elem, name, isXML) {
                  var ret, handle;
                  return (
                    isXML ||
                      ((handle = attrHandle[name]),
                      (attrHandle[name] = ret),
                      (ret =
                        null != getter(elem, name, isXML)
                          ? name.toLowerCase()
                          : null),
                      (attrHandle[name] = handle)),
                    ret
                  );
                }
              : function (elem, name, isXML) {
                  if (!isXML)
                    return elem[jQuery.camelCase("default-" + name)]
                      ? name.toLowerCase()
                      : null;
                };
        }
      ),
      (getSetInput && getSetAttribute) ||
        (jQuery.attrHooks.value = {
          set: function (elem, value, name) {
            return jQuery.nodeName(elem, "input")
              ? void (elem.defaultValue = value)
              : nodeHook && nodeHook.set(elem, value, name);
          },
        }),
      getSetAttribute ||
        ((nodeHook = {
          set: function (elem, value, name) {
            var ret = elem.getAttributeNode(name);
            if (
              (ret ||
                elem.setAttributeNode(
                  (ret = elem.ownerDocument.createAttribute(name))
                ),
              (ret.value = value += ""),
              "value" === name || value === elem.getAttribute(name))
            )
              return value;
          },
        }),
        (attrHandle.id =
          attrHandle.name =
          attrHandle.coords =
            function (elem, name, isXML) {
              var ret;
              if (!isXML)
                return (ret = elem.getAttributeNode(name)) && "" !== ret.value
                  ? ret.value
                  : null;
            }),
        (jQuery.valHooks.button = {
          get: function (elem, name) {
            var ret = elem.getAttributeNode(name);
            if (ret && ret.specified) return ret.value;
          },
          set: nodeHook.set,
        }),
        (jQuery.attrHooks.contenteditable = {
          set: function (elem, value, name) {
            nodeHook.set(elem, "" !== value && value, name);
          },
        }),
        jQuery.each(["width", "height"], function (i, name) {
          jQuery.attrHooks[name] = {
            set: function (elem, value) {
              if ("" === value) return elem.setAttribute(name, "auto"), value;
            },
          };
        })),
      support.style ||
        (jQuery.attrHooks.style = {
          get: function (elem) {
            return elem.style.cssText || void 0;
          },
          set: function (elem, value) {
            return (elem.style.cssText = value + "");
          },
        });
    var rfocusable = /^(?:input|select|textarea|button|object)$/i,
      rclickable = /^(?:a|area)$/i;
    jQuery.fn.extend({
      prop: function (name, value) {
        return access(this, jQuery.prop, name, value, arguments.length > 1);
      },
      removeProp: function (name) {
        return (
          (name = jQuery.propFix[name] || name),
          this.each(function () {
            try {
              (this[name] = void 0), delete this[name];
            } catch (e) {}
          })
        );
      },
    }),
      jQuery.extend({
        propFix: { for: "htmlFor", class: "className" },
        prop: function (elem, name, value) {
          var ret,
            hooks,
            notxml,
            nType = elem.nodeType;
          if (elem && 3 !== nType && 8 !== nType && 2 !== nType)
            return (
              (notxml = 1 !== nType || !jQuery.isXMLDoc(elem)),
              notxml &&
                ((name = jQuery.propFix[name] || name),
                (hooks = jQuery.propHooks[name])),
              void 0 !== value
                ? hooks &&
                  "set" in hooks &&
                  void 0 !== (ret = hooks.set(elem, value, name))
                  ? ret
                  : (elem[name] = value)
                : hooks &&
                  "get" in hooks &&
                  null !== (ret = hooks.get(elem, name))
                ? ret
                : elem[name]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (elem) {
              var tabindex = jQuery.find.attr(elem, "tabindex");
              return tabindex
                ? parseInt(tabindex, 10)
                : rfocusable.test(elem.nodeName) ||
                  (rclickable.test(elem.nodeName) && elem.href)
                ? 0
                : -1;
            },
          },
        },
      }),
      support.hrefNormalized ||
        jQuery.each(["href", "src"], function (i, name) {
          jQuery.propHooks[name] = {
            get: function (elem) {
              return elem.getAttribute(name, 4);
            },
          };
        }),
      support.optSelected ||
        (jQuery.propHooks.selected = {
          get: function (elem) {
            var parent = elem.parentNode;
            return (
              parent &&
                (parent.selectedIndex,
                parent.parentNode && parent.parentNode.selectedIndex),
              null
            );
          },
        }),
      jQuery.each(
        [
          "tabIndex",
          "readOnly",
          "maxLength",
          "cellSpacing",
          "cellPadding",
          "rowSpan",
          "colSpan",
          "useMap",
          "frameBorder",
          "contentEditable",
        ],
        function () {
          jQuery.propFix[this.toLowerCase()] = this;
        }
      ),
      support.enctype || (jQuery.propFix.enctype = "encoding");
    var rclass = /[\t\r\n\f]/g;
    jQuery.fn.extend({
      addClass: function (value) {
        var classes,
          elem,
          cur,
          clazz,
          j,
          finalValue,
          i = 0,
          len = this.length,
          proceed = "string" == typeof value && value;
        if (jQuery.isFunction(value))
          return this.each(function (j) {
            jQuery(this).addClass(value.call(this, j, this.className));
          });
        if (proceed)
          for (classes = (value || "").match(rnotwhite) || []; i < len; i++)
            if (
              ((elem = this[i]),
              (cur =
                1 === elem.nodeType &&
                (elem.className
                  ? (" " + elem.className + " ").replace(rclass, " ")
                  : " ")))
            ) {
              for (j = 0; (clazz = classes[j++]); )
                cur.indexOf(" " + clazz + " ") < 0 && (cur += clazz + " ");
              (finalValue = jQuery.trim(cur)),
                elem.className !== finalValue && (elem.className = finalValue);
            }
        return this;
      },
      removeClass: function (value) {
        var classes,
          elem,
          cur,
          clazz,
          j,
          finalValue,
          i = 0,
          len = this.length,
          proceed =
            0 === arguments.length || ("string" == typeof value && value);
        if (jQuery.isFunction(value))
          return this.each(function (j) {
            jQuery(this).removeClass(value.call(this, j, this.className));
          });
        if (proceed)
          for (classes = (value || "").match(rnotwhite) || []; i < len; i++)
            if (
              ((elem = this[i]),
              (cur =
                1 === elem.nodeType &&
                (elem.className
                  ? (" " + elem.className + " ").replace(rclass, " ")
                  : "")))
            ) {
              for (j = 0; (clazz = classes[j++]); )
                for (; cur.indexOf(" " + clazz + " ") >= 0; )
                  cur = cur.replace(" " + clazz + " ", " ");
              (finalValue = value ? jQuery.trim(cur) : ""),
                elem.className !== finalValue && (elem.className = finalValue);
            }
        return this;
      },
      toggleClass: function (value, stateVal) {
        var type = typeof value;
        return "boolean" == typeof stateVal && "string" === type
          ? stateVal
            ? this.addClass(value)
            : this.removeClass(value)
          : jQuery.isFunction(value)
          ? this.each(function (i) {
              jQuery(this).toggleClass(
                value.call(this, i, this.className, stateVal),
                stateVal
              );
            })
          : this.each(function () {
              if ("string" === type)
                for (
                  var className,
                    i = 0,
                    self = jQuery(this),
                    classNames = value.match(rnotwhite) || [];
                  (className = classNames[i++]);

                )
                  self.hasClass(className)
                    ? self.removeClass(className)
                    : self.addClass(className);
              else
                (type !== strundefined && "boolean" !== type) ||
                  (this.className &&
                    jQuery._data(this, "__className__", this.className),
                  (this.className =
                    this.className || value === !1
                      ? ""
                      : jQuery._data(this, "__className__") || ""));
            });
      },
      hasClass: function (selector) {
        for (
          var className = " " + selector + " ", i = 0, l = this.length;
          i < l;
          i++
        )
          if (
            1 === this[i].nodeType &&
            (" " + this[i].className + " ")
              .replace(rclass, " ")
              .indexOf(className) >= 0
          )
            return !0;
        return !1;
      },
    }),
      jQuery.each(
        "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
          " "
        ),
        function (i, name) {
          jQuery.fn[name] = function (data, fn) {
            return arguments.length > 0
              ? this.on(name, null, data, fn)
              : this.trigger(name);
          };
        }
      ),
      jQuery.fn.extend({
        hover: function (fnOver, fnOut) {
          return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        },
        bind: function (types, data, fn) {
          return this.on(types, null, data, fn);
        },
        unbind: function (types, fn) {
          return this.off(types, null, fn);
        },
        delegate: function (selector, types, data, fn) {
          return this.on(types, selector, data, fn);
        },
        undelegate: function (selector, types, fn) {
          return 1 === arguments.length
            ? this.off(selector, "**")
            : this.off(types, selector || "**", fn);
        },
      });
    var nonce = jQuery.now(),
      rquery = /\?/,
      rvalidtokens =
        /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    (jQuery.parseJSON = function (data) {
      if (window.JSON && window.JSON.parse) return window.JSON.parse(data + "");
      var requireNonComma,
        depth = null,
        str = jQuery.trim(data + "");
      return str &&
        !jQuery.trim(
          str.replace(rvalidtokens, function (token, comma, open, close) {
            return (
              requireNonComma && comma && (depth = 0),
              0 === depth
                ? token
                : ((requireNonComma = open || comma),
                  (depth += !close - !open),
                  "")
            );
          })
        )
        ? Function("return " + str)()
        : jQuery.error("Invalid JSON: " + data);
    }),
      (jQuery.parseXML = function (data) {
        var xml, tmp;
        if (!data || "string" != typeof data) return null;
        try {
          window.DOMParser
            ? ((tmp = new DOMParser()),
              (xml = tmp.parseFromString(data, "text/xml")))
            : ((xml = new ActiveXObject("Microsoft.XMLDOM")),
              (xml.async = "false"),
              xml.loadXML(data));
        } catch (e) {
          xml = void 0;
        }
        return (
          (xml &&
            xml.documentElement &&
            !xml.getElementsByTagName("parsererror").length) ||
            jQuery.error("Invalid XML: " + data),
          xml
        );
      });
    var ajaxLocParts,
      ajaxLocation,
      rhash = /#.*$/,
      rts = /([?&])_=[^&]*/,
      rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      rlocalProtocol =
        /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      rnoContent = /^(?:GET|HEAD)$/,
      rprotocol = /^\/\//,
      rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      prefilters = {},
      transports = {},
      allTypes = "*/".concat("*");
    try {
      ajaxLocation = location.href;
    } catch (e) {
      (ajaxLocation = document.createElement("a")),
        (ajaxLocation.href = ""),
        (ajaxLocation = ajaxLocation.href);
    }
    (ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || []),
      jQuery.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: ajaxLocation,
          type: "GET",
          isLocal: rlocalProtocol.test(ajaxLocParts[1]),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": allTypes,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript",
          },
          contents: { xml: /xml/, html: /html/, json: /json/ },
          responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON",
          },
          converters: {
            "* text": String,
            "text html": !0,
            "text json": jQuery.parseJSON,
            "text xml": jQuery.parseXML,
          },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (target, settings) {
          return settings
            ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings)
            : ajaxExtend(jQuery.ajaxSettings, target);
        },
        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),
        ajax: function (url, options) {
          function done(status, nativeStatusText, responses, headers) {
            var isSuccess,
              success,
              error,
              response,
              modified,
              statusText = nativeStatusText;
            2 !== state &&
              ((state = 2),
              timeoutTimer && clearTimeout(timeoutTimer),
              (transport = void 0),
              (responseHeadersString = headers || ""),
              (jqXHR.readyState = status > 0 ? 4 : 0),
              (isSuccess = (status >= 200 && status < 300) || 304 === status),
              responses &&
                (response = ajaxHandleResponses(s, jqXHR, responses)),
              (response = ajaxConvert(s, response, jqXHR, isSuccess)),
              isSuccess
                ? (s.ifModified &&
                    ((modified = jqXHR.getResponseHeader("Last-Modified")),
                    modified && (jQuery.lastModified[cacheURL] = modified),
                    (modified = jqXHR.getResponseHeader("etag")),
                    modified && (jQuery.etag[cacheURL] = modified)),
                  204 === status || "HEAD" === s.type
                    ? (statusText = "nocontent")
                    : 304 === status
                    ? (statusText = "notmodified")
                    : ((statusText = response.state),
                      (success = response.data),
                      (error = response.error),
                      (isSuccess = !error)))
                : ((error = statusText),
                  (!status && statusText) ||
                    ((statusText = "error"), status < 0 && (status = 0))),
              (jqXHR.status = status),
              (jqXHR.statusText = (nativeStatusText || statusText) + ""),
              isSuccess
                ? deferred.resolveWith(callbackContext, [
                    success,
                    statusText,
                    jqXHR,
                  ])
                : deferred.rejectWith(callbackContext, [
                    jqXHR,
                    statusText,
                    error,
                  ]),
              jqXHR.statusCode(statusCode),
              (statusCode = void 0),
              fireGlobals &&
                globalEventContext.trigger(
                  isSuccess ? "ajaxSuccess" : "ajaxError",
                  [jqXHR, s, isSuccess ? success : error]
                ),
              completeDeferred.fireWith(callbackContext, [jqXHR, statusText]),
              fireGlobals &&
                (globalEventContext.trigger("ajaxComplete", [jqXHR, s]),
                --jQuery.active || jQuery.event.trigger("ajaxStop")));
          }
          "object" == typeof url && ((options = url), (url = void 0)),
            (options = options || {});
          var parts,
            i,
            cacheURL,
            responseHeadersString,
            timeoutTimer,
            fireGlobals,
            transport,
            responseHeaders,
            s = jQuery.ajaxSetup({}, options),
            callbackContext = s.context || s,
            globalEventContext =
              s.context && (callbackContext.nodeType || callbackContext.jquery)
                ? jQuery(callbackContext)
                : jQuery.event,
            deferred = jQuery.Deferred(),
            completeDeferred = jQuery.Callbacks("once memory"),
            statusCode = s.statusCode || {},
            requestHeaders = {},
            requestHeadersNames = {},
            state = 0,
            strAbort = "canceled",
            jqXHR = {
              readyState: 0,
              getResponseHeader: function (key) {
                var match;
                if (2 === state) {
                  if (!responseHeaders)
                    for (
                      responseHeaders = {};
                      (match = rheaders.exec(responseHeadersString));

                    )
                      responseHeaders[match[1].toLowerCase()] = match[2];
                  match = responseHeaders[key.toLowerCase()];
                }
                return null == match ? null : match;
              },
              getAllResponseHeaders: function () {
                return 2 === state ? responseHeadersString : null;
              },
              setRequestHeader: function (name, value) {
                var lname = name.toLowerCase();
                return (
                  state ||
                    ((name = requestHeadersNames[lname] =
                      requestHeadersNames[lname] || name),
                    (requestHeaders[name] = value)),
                  this
                );
              },
              overrideMimeType: function (type) {
                return state || (s.mimeType = type), this;
              },
              statusCode: function (map) {
                var code;
                if (map)
                  if (state < 2)
                    for (code in map)
                      statusCode[code] = [statusCode[code], map[code]];
                  else jqXHR.always(map[jqXHR.status]);
                return this;
              },
              abort: function (statusText) {
                var finalText = statusText || strAbort;
                return (
                  transport && transport.abort(finalText),
                  done(0, finalText),
                  this
                );
              },
            };
          if (
            ((deferred.promise(jqXHR).complete = completeDeferred.add),
            (jqXHR.success = jqXHR.done),
            (jqXHR.error = jqXHR.fail),
            (s.url = ((url || s.url || ajaxLocation) + "")
              .replace(rhash, "")
              .replace(rprotocol, ajaxLocParts[1] + "//")),
            (s.type = options.method || options.type || s.method || s.type),
            (s.dataTypes = jQuery
              .trim(s.dataType || "*")
              .toLowerCase()
              .match(rnotwhite) || [""]),
            null == s.crossDomain &&
              ((parts = rurl.exec(s.url.toLowerCase())),
              (s.crossDomain = !(
                !parts ||
                (parts[1] === ajaxLocParts[1] &&
                  parts[2] === ajaxLocParts[2] &&
                  (parts[3] || ("http:" === parts[1] ? "80" : "443")) ===
                    (ajaxLocParts[3] ||
                      ("http:" === ajaxLocParts[1] ? "80" : "443")))
              ))),
            s.data &&
              s.processData &&
              "string" != typeof s.data &&
              (s.data = jQuery.param(s.data, s.traditional)),
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR),
            2 === state)
          )
            return jqXHR;
          (fireGlobals = jQuery.event && s.global),
            fireGlobals &&
              0 === jQuery.active++ &&
              jQuery.event.trigger("ajaxStart"),
            (s.type = s.type.toUpperCase()),
            (s.hasContent = !rnoContent.test(s.type)),
            (cacheURL = s.url),
            s.hasContent ||
              (s.data &&
                ((cacheURL = s.url +=
                  (rquery.test(cacheURL) ? "&" : "?") + s.data),
                delete s.data),
              s.cache === !1 &&
                (s.url = rts.test(cacheURL)
                  ? cacheURL.replace(rts, "$1_=" + nonce++)
                  : cacheURL +
                    (rquery.test(cacheURL) ? "&" : "?") +
                    "_=" +
                    nonce++)),
            s.ifModified &&
              (jQuery.lastModified[cacheURL] &&
                jqXHR.setRequestHeader(
                  "If-Modified-Since",
                  jQuery.lastModified[cacheURL]
                ),
              jQuery.etag[cacheURL] &&
                jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL])),
            ((s.data && s.hasContent && s.contentType !== !1) ||
              options.contentType) &&
              jqXHR.setRequestHeader("Content-Type", s.contentType),
            jqXHR.setRequestHeader(
              "Accept",
              s.dataTypes[0] && s.accepts[s.dataTypes[0]]
                ? s.accepts[s.dataTypes[0]] +
                    ("*" !== s.dataTypes[0] ? ", " + allTypes + "; q=0.01" : "")
                : s.accepts["*"]
            );
          for (i in s.headers) jqXHR.setRequestHeader(i, s.headers[i]);
          if (
            s.beforeSend &&
            (s.beforeSend.call(callbackContext, jqXHR, s) === !1 || 2 === state)
          )
            return jqXHR.abort();
          strAbort = "abort";
          for (i in { success: 1, error: 1, complete: 1 }) jqXHR[i](s[i]);
          if (
            (transport = inspectPrefiltersOrTransports(
              transports,
              s,
              options,
              jqXHR
            ))
          ) {
            (jqXHR.readyState = 1),
              fireGlobals && globalEventContext.trigger("ajaxSend", [jqXHR, s]),
              s.async &&
                s.timeout > 0 &&
                (timeoutTimer = setTimeout(function () {
                  jqXHR.abort("timeout");
                }, s.timeout));
            try {
              (state = 1), transport.send(requestHeaders, done);
            } catch (e) {
              if (!(state < 2)) throw e;
              done(-1, e);
            }
          } else done(-1, "No Transport");
          return jqXHR;
        },
        getJSON: function (url, data, callback) {
          return jQuery.get(url, data, callback, "json");
        },
        getScript: function (url, callback) {
          return jQuery.get(url, void 0, callback, "script");
        },
      }),
      jQuery.each(["get", "post"], function (i, method) {
        jQuery[method] = function (url, data, callback, type) {
          return (
            jQuery.isFunction(data) &&
              ((type = type || callback), (callback = data), (data = void 0)),
            jQuery.ajax({
              url: url,
              type: method,
              dataType: type,
              data: data,
              success: callback,
            })
          );
        };
      }),
      (jQuery._evalUrl = function (url) {
        return jQuery.ajax({
          url: url,
          type: "GET",
          dataType: "script",
          async: !1,
          global: !1,
          throws: !0,
        });
      }),
      jQuery.fn.extend({
        wrapAll: function (html) {
          if (jQuery.isFunction(html))
            return this.each(function (i) {
              jQuery(this).wrapAll(html.call(this, i));
            });
          if (this[0]) {
            var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && wrap.insertBefore(this[0]),
              wrap
                .map(function () {
                  for (
                    var elem = this;
                    elem.firstChild && 1 === elem.firstChild.nodeType;

                  )
                    elem = elem.firstChild;
                  return elem;
                })
                .append(this);
          }
          return this;
        },
        wrapInner: function (html) {
          return jQuery.isFunction(html)
            ? this.each(function (i) {
                jQuery(this).wrapInner(html.call(this, i));
              })
            : this.each(function () {
                var self = jQuery(this),
                  contents = self.contents();
                contents.length ? contents.wrapAll(html) : self.append(html);
              });
        },
        wrap: function (html) {
          var isFunction = jQuery.isFunction(html);
          return this.each(function (i) {
            jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
          });
        },
        unwrap: function () {
          return this.parent()
            .each(function () {
              jQuery.nodeName(this, "body") ||
                jQuery(this).replaceWith(this.childNodes);
            })
            .end();
        },
      }),
      (jQuery.expr.filters.hidden = function (elem) {
        return (
          (elem.offsetWidth <= 0 && elem.offsetHeight <= 0) ||
          (!support.reliableHiddenOffsets() &&
            "none" ===
              ((elem.style && elem.style.display) ||
                jQuery.css(elem, "display")))
        );
      }),
      (jQuery.expr.filters.visible = function (elem) {
        return !jQuery.expr.filters.hidden(elem);
      });
    var r20 = /%20/g,
      rbracket = /\[\]$/,
      rCRLF = /\r?\n/g,
      rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
      rsubmittable = /^(?:input|select|textarea|keygen)/i;
    (jQuery.param = function (a, traditional) {
      var prefix,
        s = [],
        add = function (key, value) {
          (value = jQuery.isFunction(value)
            ? value()
            : null == value
            ? ""
            : value),
            (s[s.length] =
              encodeURIComponent(key) + "=" + encodeURIComponent(value));
        };
      if (
        (void 0 === traditional &&
          (traditional =
            jQuery.ajaxSettings && jQuery.ajaxSettings.traditional),
        jQuery.isArray(a) || (a.jquery && !jQuery.isPlainObject(a)))
      )
        jQuery.each(a, function () {
          add(this.name, this.value);
        });
      else for (prefix in a) buildParams(prefix, a[prefix], traditional, add);
      return s.join("&").replace(r20, "+");
    }),
      jQuery.fn.extend({
        serialize: function () {
          return jQuery.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var elements = jQuery.prop(this, "elements");
            return elements ? jQuery.makeArray(elements) : this;
          })
            .filter(function () {
              var type = this.type;
              return (
                this.name &&
                !jQuery(this).is(":disabled") &&
                rsubmittable.test(this.nodeName) &&
                !rsubmitterTypes.test(type) &&
                (this.checked || !rcheckableType.test(type))
              );
            })
            .map(function (i, elem) {
              var val = jQuery(this).val();
              return null == val
                ? null
                : jQuery.isArray(val)
                ? jQuery.map(val, function (val) {
                    return {
                      name: elem.name,
                      value: val.replace(rCRLF, "\r\n"),
                    };
                  })
                : { name: elem.name, value: val.replace(rCRLF, "\r\n") };
            })
            .get();
        },
      }),
      (jQuery.ajaxSettings.xhr =
        void 0 !== window.ActiveXObject
          ? function () {
              return (
                (!this.isLocal &&
                  /^(get|post|head|put|delete|options)$/i.test(this.type) &&
                  createStandardXHR()) ||
                createActiveXHR()
              );
            }
          : createStandardXHR);
    var xhrId = 0,
      xhrCallbacks = {},
      xhrSupported = jQuery.ajaxSettings.xhr();
    window.attachEvent &&
      window.attachEvent("onunload", function () {
        for (var key in xhrCallbacks) xhrCallbacks[key](void 0, !0);
      }),
      (support.cors = !!xhrSupported && "withCredentials" in xhrSupported),
      (xhrSupported = support.ajax = !!xhrSupported),
      xhrSupported &&
        jQuery.ajaxTransport(function (options) {
          if (!options.crossDomain || support.cors) {
            var callback;
            return {
              send: function (headers, complete) {
                var i,
                  xhr = options.xhr(),
                  id = ++xhrId;
                if (
                  (xhr.open(
                    options.type,
                    options.url,
                    options.async,
                    options.username,
                    options.password
                  ),
                  options.xhrFields)
                )
                  for (i in options.xhrFields) xhr[i] = options.xhrFields[i];
                options.mimeType &&
                  xhr.overrideMimeType &&
                  xhr.overrideMimeType(options.mimeType),
                  options.crossDomain ||
                    headers["X-Requested-With"] ||
                    (headers["X-Requested-With"] = "XMLHttpRequest");
                for (i in headers)
                  void 0 !== headers[i] &&
                    xhr.setRequestHeader(i, headers[i] + "");
                xhr.send((options.hasContent && options.data) || null),
                  (callback = function (_, isAbort) {
                    var status, statusText, responses;
                    if (callback && (isAbort || 4 === xhr.readyState))
                      if (
                        (delete xhrCallbacks[id],
                        (callback = void 0),
                        (xhr.onreadystatechange = jQuery.noop),
                        isAbort)
                      )
                        4 !== xhr.readyState && xhr.abort();
                      else {
                        (responses = {}),
                          (status = xhr.status),
                          "string" == typeof xhr.responseText &&
                            (responses.text = xhr.responseText);
                        try {
                          statusText = xhr.statusText;
                        } catch (e) {
                          statusText = "";
                        }
                        status || !options.isLocal || options.crossDomain
                          ? 1223 === status && (status = 204)
                          : (status = responses.text ? 200 : 404);
                      }
                    responses &&
                      complete(
                        status,
                        statusText,
                        responses,
                        xhr.getAllResponseHeaders()
                      );
                  }),
                  options.async
                    ? 4 === xhr.readyState
                      ? setTimeout(callback)
                      : (xhr.onreadystatechange = xhrCallbacks[id] = callback)
                    : callback();
              },
              abort: function () {
                callback && callback(void 0, !0);
              },
            };
          }
        }),
      jQuery.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /(?:java|ecma)script/ },
        converters: {
          "text script": function (text) {
            return jQuery.globalEval(text), text;
          },
        },
      }),
      jQuery.ajaxPrefilter("script", function (s) {
        void 0 === s.cache && (s.cache = !1),
          s.crossDomain && ((s.type = "GET"), (s.global = !1));
      }),
      jQuery.ajaxTransport("script", function (s) {
        if (s.crossDomain) {
          var script,
            head =
              document.head || jQuery("head")[0] || document.documentElement;
          return {
            send: function (_, callback) {
              (script = document.createElement("script")),
                (script.async = !0),
                s.scriptCharset && (script.charset = s.scriptCharset),
                (script.src = s.url),
                (script.onload = script.onreadystatechange =
                  function (_, isAbort) {
                    (isAbort ||
                      !script.readyState ||
                      /loaded|complete/.test(script.readyState)) &&
                      ((script.onload = script.onreadystatechange = null),
                      script.parentNode &&
                        script.parentNode.removeChild(script),
                      (script = null),
                      isAbort || callback(200, "success"));
                  }),
                head.insertBefore(script, head.firstChild);
            },
            abort: function () {
              script && script.onload(void 0, !0);
            },
          };
        }
      });
    var oldCallbacks = [],
      rjsonp = /(=)\?(?=&|$)|\?\?/;
    jQuery.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
        return (this[callback] = !0), callback;
      },
    }),
      jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {
        var callbackName,
          overwritten,
          responseContainer,
          jsonProp =
            s.jsonp !== !1 &&
            (rjsonp.test(s.url)
              ? "url"
              : "string" == typeof s.data &&
                !(s.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
                rjsonp.test(s.data) &&
                "data");
        if (jsonProp || "jsonp" === s.dataTypes[0])
          return (
            (callbackName = s.jsonpCallback =
              jQuery.isFunction(s.jsonpCallback)
                ? s.jsonpCallback()
                : s.jsonpCallback),
            jsonProp
              ? (s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName))
              : s.jsonp !== !1 &&
                (s.url +=
                  (rquery.test(s.url) ? "&" : "?") +
                  s.jsonp +
                  "=" +
                  callbackName),
            (s.converters["script json"] = function () {
              return (
                responseContainer ||
                  jQuery.error(callbackName + " was not called"),
                responseContainer[0]
              );
            }),
            (s.dataTypes[0] = "json"),
            (overwritten = window[callbackName]),
            (window[callbackName] = function () {
              responseContainer = arguments;
            }),
            jqXHR.always(function () {
              (window[callbackName] = overwritten),
                s[callbackName] &&
                  ((s.jsonpCallback = originalSettings.jsonpCallback),
                  oldCallbacks.push(callbackName)),
                responseContainer &&
                  jQuery.isFunction(overwritten) &&
                  overwritten(responseContainer[0]),
                (responseContainer = overwritten = void 0);
            }),
            "script"
          );
      }),
      (jQuery.parseHTML = function (data, context, keepScripts) {
        if (!data || "string" != typeof data) return null;
        "boolean" == typeof context &&
          ((keepScripts = context), (context = !1)),
          (context = context || document);
        var parsed = rsingleTag.exec(data),
          scripts = !keepScripts && [];
        return parsed
          ? [context.createElement(parsed[1])]
          : ((parsed = jQuery.buildFragment([data], context, scripts)),
            scripts && scripts.length && jQuery(scripts).remove(),
            jQuery.merge([], parsed.childNodes));
      });
    var _load = jQuery.fn.load;
    (jQuery.fn.load = function (url, params, callback) {
      if ("string" != typeof url && _load) return _load.apply(this, arguments);
      var selector,
        response,
        type,
        self = this,
        off = url.indexOf(" ");
      return (
        off >= 0 &&
          ((selector = jQuery.trim(url.slice(off, url.length))),
          (url = url.slice(0, off))),
        jQuery.isFunction(params)
          ? ((callback = params), (params = void 0))
          : params && "object" == typeof params && (type = "POST"),
        self.length > 0 &&
          jQuery
            .ajax({ url: url, type: type, dataType: "html", data: params })
            .done(function (responseText) {
              (response = arguments),
                self.html(
                  selector
                    ? jQuery("<div>")
                        .append(jQuery.parseHTML(responseText))
                        .find(selector)
                    : responseText
                );
            })
            .complete(
              callback &&
                function (jqXHR, status) {
                  self.each(
                    callback,
                    response || [jqXHR.responseText, status, jqXHR]
                  );
                }
            ),
        this
      );
    }),
      jQuery.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (i, type) {
          jQuery.fn[type] = function (fn) {
            return this.on(type, fn);
          };
        }
      ),
      (jQuery.expr.filters.animated = function (elem) {
        return jQuery.grep(jQuery.timers, function (fn) {
          return elem === fn.elem;
        }).length;
      });
    var docElem = window.document.documentElement;
    (jQuery.offset = {
      setOffset: function (elem, options, i) {
        var curPosition,
          curLeft,
          curCSSTop,
          curTop,
          curOffset,
          curCSSLeft,
          calculatePosition,
          position = jQuery.css(elem, "position"),
          curElem = jQuery(elem),
          props = {};
        "static" === position && (elem.style.position = "relative"),
          (curOffset = curElem.offset()),
          (curCSSTop = jQuery.css(elem, "top")),
          (curCSSLeft = jQuery.css(elem, "left")),
          (calculatePosition =
            ("absolute" === position || "fixed" === position) &&
            jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1),
          calculatePosition
            ? ((curPosition = curElem.position()),
              (curTop = curPosition.top),
              (curLeft = curPosition.left))
            : ((curTop = parseFloat(curCSSTop) || 0),
              (curLeft = parseFloat(curCSSLeft) || 0)),
          jQuery.isFunction(options) &&
            (options = options.call(elem, i, curOffset)),
          null != options.top &&
            (props.top = options.top - curOffset.top + curTop),
          null != options.left &&
            (props.left = options.left - curOffset.left + curLeft),
          "using" in options
            ? options.using.call(elem, props)
            : curElem.css(props);
      },
    }),
      jQuery.fn.extend({
        offset: function (options) {
          if (arguments.length)
            return void 0 === options
              ? this
              : this.each(function (i) {
                  jQuery.offset.setOffset(this, options, i);
                });
          var docElem,
            win,
            box = { top: 0, left: 0 },
            elem = this[0],
            doc = elem && elem.ownerDocument;
          if (doc)
            return (
              (docElem = doc.documentElement),
              jQuery.contains(docElem, elem)
                ? (typeof elem.getBoundingClientRect !== strundefined &&
                    (box = elem.getBoundingClientRect()),
                  (win = getWindow(doc)),
                  {
                    top:
                      box.top +
                      (win.pageYOffset || docElem.scrollTop) -
                      (docElem.clientTop || 0),
                    left:
                      box.left +
                      (win.pageXOffset || docElem.scrollLeft) -
                      (docElem.clientLeft || 0),
                  })
                : box
            );
        },
        position: function () {
          if (this[0]) {
            var offsetParent,
              offset,
              parentOffset = { top: 0, left: 0 },
              elem = this[0];
            return (
              "fixed" === jQuery.css(elem, "position")
                ? (offset = elem.getBoundingClientRect())
                : ((offsetParent = this.offsetParent()),
                  (offset = this.offset()),
                  jQuery.nodeName(offsetParent[0], "html") ||
                    (parentOffset = offsetParent.offset()),
                  (parentOffset.top += jQuery.css(
                    offsetParent[0],
                    "borderTopWidth",
                    !0
                  )),
                  (parentOffset.left += jQuery.css(
                    offsetParent[0],
                    "borderLeftWidth",
                    !0
                  ))),
              {
                top:
                  offset.top -
                  parentOffset.top -
                  jQuery.css(elem, "marginTop", !0),
                left:
                  offset.left -
                  parentOffset.left -
                  jQuery.css(elem, "marginLeft", !0),
              }
            );
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var offsetParent = this.offsetParent || docElem;
              offsetParent &&
              !jQuery.nodeName(offsetParent, "html") &&
              "static" === jQuery.css(offsetParent, "position");

            )
              offsetParent = offsetParent.offsetParent;
            return offsetParent || docElem;
          });
        },
      }),
      jQuery.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (method, prop) {
          var top = /Y/.test(prop);
          jQuery.fn[method] = function (val) {
            return access(
              this,
              function (elem, method, val) {
                var win = getWindow(elem);
                return void 0 === val
                  ? win
                    ? prop in win
                      ? win[prop]
                      : win.document.documentElement[method]
                    : elem[method]
                  : void (win
                      ? win.scrollTo(
                          top ? jQuery(win).scrollLeft() : val,
                          top ? val : jQuery(win).scrollTop()
                        )
                      : (elem[method] = val));
              },
              method,
              val,
              arguments.length,
              null
            );
          };
        }
      ),
      jQuery.each(["top", "left"], function (i, prop) {
        jQuery.cssHooks[prop] = addGetHookIf(
          support.pixelPosition,
          function (elem, computed) {
            if (computed)
              return (
                (computed = curCSS(elem, prop)),
                rnumnonpx.test(computed)
                  ? jQuery(elem).position()[prop] + "px"
                  : computed
              );
          }
        );
      }),
      jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
        jQuery.each(
          { padding: "inner" + name, content: type, "": "outer" + name },
          function (defaultExtra, funcName) {
            jQuery.fn[funcName] = function (margin, value) {
              var chainable =
                  arguments.length &&
                  (defaultExtra || "boolean" != typeof margin),
                extra =
                  defaultExtra ||
                  (margin === !0 || value === !0 ? "margin" : "border");
              return access(
                this,
                function (elem, type, value) {
                  var doc;
                  return jQuery.isWindow(elem)
                    ? elem.document.documentElement["client" + name]
                    : 9 === elem.nodeType
                    ? ((doc = elem.documentElement),
                      Math.max(
                        elem.body["scroll" + name],
                        doc["scroll" + name],
                        elem.body["offset" + name],
                        doc["offset" + name],
                        doc["client" + name]
                      ))
                    : void 0 === value
                    ? jQuery.css(elem, type, extra)
                    : jQuery.style(elem, type, value, extra);
                },
                type,
                chainable ? margin : void 0,
                chainable,
                null
              );
            };
          }
        );
      }),
      (jQuery.fn.size = function () {
        return this.length;
      }),
      (jQuery.fn.andSelf = jQuery.fn.addBack),
      "function" == typeof define &&
        define.amd &&
        define("jquery", [], function () {
          return jQuery;
        });
    var _jQuery = window.jQuery,
      _$ = window.$;
    return (
      (jQuery.noConflict = function (deep) {
        return (
          window.$ === jQuery && (window.$ = _$),
          deep && window.jQuery === jQuery && (window.jQuery = _jQuery),
          jQuery
        );
      }),
      typeof noGlobal === strundefined && (window.jQuery = window.$ = jQuery),
      jQuery
    );
  }),
  //     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
  //     Underscore may be freely distributed under the MIT license.
  function () {
    function createReduce(dir) {
      function iterator(obj, iteratee, memo, keys, index, length) {
        for (; index >= 0 && index < length; index += dir) {
          var currentKey = keys ? keys[index] : index;
          memo = iteratee(memo, obj[currentKey], currentKey, obj);
        }
        return memo;
      }
      return function (obj, iteratee, memo, context) {
        iteratee = optimizeCb(iteratee, context, 4);
        var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
        return (
          arguments.length < 3 &&
            ((memo = obj[keys ? keys[index] : index]), (index += dir)),
          iterator(obj, iteratee, memo, keys, index, length)
        );
      };
    }
    function createPredicateIndexFinder(dir) {
      return function (array, predicate, context) {
        predicate = cb(predicate, context);
        for (
          var length = getLength(array), index = dir > 0 ? 0 : length - 1;
          index >= 0 && index < length;
          index += dir
        )
          if (predicate(array[index], index, array)) return index;
        return -1;
      };
    }
    function createIndexFinder(dir, predicateFind, sortedIndex) {
      return function (array, item, idx) {
        var i = 0,
          length = getLength(array);
        if ("number" == typeof idx)
          dir > 0
            ? (i = idx >= 0 ? idx : Math.max(idx + length, i))
            : (length =
                idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1);
        else if (sortedIndex && idx && length)
          return (
            (idx = sortedIndex(array, item)), array[idx] === item ? idx : -1
          );
        if (item !== item)
          return (
            (idx = predicateFind(slice.call(array, i, length), _.isNaN)),
            idx >= 0 ? idx + i : -1
          );
        for (
          idx = dir > 0 ? i : length - 1;
          idx >= 0 && idx < length;
          idx += dir
        )
          if (array[idx] === item) return idx;
        return -1;
      };
    }
    function collectNonEnumProps(obj, keys) {
      var nonEnumIdx = nonEnumerableProps.length,
        constructor = obj.constructor,
        proto =
          (_.isFunction(constructor) && constructor.prototype) || ObjProto,
        prop = "constructor";
      for (
        _.has(obj, prop) && !_.contains(keys, prop) && keys.push(prop);
        nonEnumIdx--;

      )
        (prop = nonEnumerableProps[nonEnumIdx]),
          prop in obj &&
            obj[prop] !== proto[prop] &&
            !_.contains(keys, prop) &&
            keys.push(prop);
    }
    var root = this,
      previousUnderscore = root._,
      ArrayProto = Array.prototype,
      ObjProto = Object.prototype,
      FuncProto = Function.prototype,
      push = ArrayProto.push,
      slice = ArrayProto.slice,
      toString = ObjProto.toString,
      hasOwnProperty = ObjProto.hasOwnProperty,
      nativeIsArray = Array.isArray,
      nativeKeys = Object.keys,
      nativeBind = FuncProto.bind,
      nativeCreate = Object.create,
      Ctor = function () {},
      _ = function (obj) {
        return obj instanceof _
          ? obj
          : this instanceof _
          ? void (this._wrapped = obj)
          : new _(obj);
      };
    "undefined" != typeof exports
      ? ("undefined" != typeof module &&
          module.exports &&
          (exports = module.exports = _),
        (exports._ = _))
      : (root._ = _),
      (_.VERSION = "1.8.3");
    var optimizeCb = function (func, context, argCount) {
        if (void 0 === context) return func;
        switch (null == argCount ? 3 : argCount) {
          case 1:
            return function (value) {
              return func.call(context, value);
            };
          case 2:
            return function (value, other) {
              return func.call(context, value, other);
            };
          case 3:
            return function (value, index, collection) {
              return func.call(context, value, index, collection);
            };
          case 4:
            return function (accumulator, value, index, collection) {
              return func.call(context, accumulator, value, index, collection);
            };
        }
        return function () {
          return func.apply(context, arguments);
        };
      },
      cb = function (value, context, argCount) {
        return null == value
          ? _.identity
          : _.isFunction(value)
          ? optimizeCb(value, context, argCount)
          : _.isObject(value)
          ? _.matcher(value)
          : _.property(value);
      };
    _.iteratee = function (value, context) {
      return cb(value, context, 1 / 0);
    };
    var createAssigner = function (keysFunc, undefinedOnly) {
        return function (obj) {
          var length = arguments.length;
          if (length < 2 || null == obj) return obj;
          for (var index = 1; index < length; index++)
            for (
              var source = arguments[index],
                keys = keysFunc(source),
                l = keys.length,
                i = 0;
              i < l;
              i++
            ) {
              var key = keys[i];
              (undefinedOnly && void 0 !== obj[key]) ||
                (obj[key] = source[key]);
            }
          return obj;
        };
      },
      baseCreate = function (prototype) {
        if (!_.isObject(prototype)) return {};
        if (nativeCreate) return nativeCreate(prototype);
        Ctor.prototype = prototype;
        var result = new Ctor();
        return (Ctor.prototype = null), result;
      },
      property = function (key) {
        return function (obj) {
          return null == obj ? void 0 : obj[key];
        };
      },
      MAX_ARRAY_INDEX = Math.pow(2, 53) - 1,
      getLength = property("length"),
      isArrayLike = function (collection) {
        var length = getLength(collection);
        return (
          "number" == typeof length && length >= 0 && length <= MAX_ARRAY_INDEX
        );
      };
    (_.each = _.forEach =
      function (obj, iteratee, context) {
        iteratee = optimizeCb(iteratee, context);
        var i, length;
        if (isArrayLike(obj))
          for (i = 0, length = obj.length; i < length; i++)
            iteratee(obj[i], i, obj);
        else {
          var keys = _.keys(obj);
          for (i = 0, length = keys.length; i < length; i++)
            iteratee(obj[keys[i]], keys[i], obj);
        }
        return obj;
      }),
      (_.map = _.collect =
        function (obj, iteratee, context) {
          iteratee = cb(iteratee, context);
          for (
            var keys = !isArrayLike(obj) && _.keys(obj),
              length = (keys || obj).length,
              results = Array(length),
              index = 0;
            index < length;
            index++
          ) {
            var currentKey = keys ? keys[index] : index;
            results[index] = iteratee(obj[currentKey], currentKey, obj);
          }
          return results;
        }),
      (_.reduce = _.foldl = _.inject = createReduce(1)),
      (_.reduceRight = _.foldr = createReduce(-1)),
      (_.find = _.detect =
        function (obj, predicate, context) {
          var key;
          if (
            ((key = isArrayLike(obj)
              ? _.findIndex(obj, predicate, context)
              : _.findKey(obj, predicate, context)),
            void 0 !== key && key !== -1)
          )
            return obj[key];
        }),
      (_.filter = _.select =
        function (obj, predicate, context) {
          var results = [];
          return (
            (predicate = cb(predicate, context)),
            _.each(obj, function (value, index, list) {
              predicate(value, index, list) && results.push(value);
            }),
            results
          );
        }),
      (_.reject = function (obj, predicate, context) {
        return _.filter(obj, _.negate(cb(predicate)), context);
      }),
      (_.every = _.all =
        function (obj, predicate, context) {
          predicate = cb(predicate, context);
          for (
            var keys = !isArrayLike(obj) && _.keys(obj),
              length = (keys || obj).length,
              index = 0;
            index < length;
            index++
          ) {
            var currentKey = keys ? keys[index] : index;
            if (!predicate(obj[currentKey], currentKey, obj)) return !1;
          }
          return !0;
        }),
      (_.some = _.any =
        function (obj, predicate, context) {
          predicate = cb(predicate, context);
          for (
            var keys = !isArrayLike(obj) && _.keys(obj),
              length = (keys || obj).length,
              index = 0;
            index < length;
            index++
          ) {
            var currentKey = keys ? keys[index] : index;
            if (predicate(obj[currentKey], currentKey, obj)) return !0;
          }
          return !1;
        }),
      (_.contains =
        _.includes =
        _.include =
          function (obj, item, fromIndex, guard) {
            return (
              isArrayLike(obj) || (obj = _.values(obj)),
              ("number" != typeof fromIndex || guard) && (fromIndex = 0),
              _.indexOf(obj, item, fromIndex) >= 0
            );
          }),
      (_.invoke = function (obj, method) {
        var args = slice.call(arguments, 2),
          isFunc = _.isFunction(method);
        return _.map(obj, function (value) {
          var func = isFunc ? method : value[method];
          return null == func ? func : func.apply(value, args);
        });
      }),
      (_.pluck = function (obj, key) {
        return _.map(obj, _.property(key));
      }),
      (_.where = function (obj, attrs) {
        return _.filter(obj, _.matcher(attrs));
      }),
      (_.findWhere = function (obj, attrs) {
        return _.find(obj, _.matcher(attrs));
      }),
      (_.max = function (obj, iteratee, context) {
        var value,
          computed,
          result = -(1 / 0),
          lastComputed = -(1 / 0);
        if (null == iteratee && null != obj) {
          obj = isArrayLike(obj) ? obj : _.values(obj);
          for (var i = 0, length = obj.length; i < length; i++)
            (value = obj[i]), value > result && (result = value);
        } else
          (iteratee = cb(iteratee, context)),
            _.each(obj, function (value, index, list) {
              (computed = iteratee(value, index, list)),
                (computed > lastComputed ||
                  (computed === -(1 / 0) && result === -(1 / 0))) &&
                  ((result = value), (lastComputed = computed));
            });
        return result;
      }),
      (_.min = function (obj, iteratee, context) {
        var value,
          computed,
          result = 1 / 0,
          lastComputed = 1 / 0;
        if (null == iteratee && null != obj) {
          obj = isArrayLike(obj) ? obj : _.values(obj);
          for (var i = 0, length = obj.length; i < length; i++)
            (value = obj[i]), value < result && (result = value);
        } else
          (iteratee = cb(iteratee, context)),
            _.each(obj, function (value, index, list) {
              (computed = iteratee(value, index, list)),
                (computed < lastComputed ||
                  (computed === 1 / 0 && result === 1 / 0)) &&
                  ((result = value), (lastComputed = computed));
            });
        return result;
      }),
      (_.shuffle = function (obj) {
        for (
          var rand,
            set = isArrayLike(obj) ? obj : _.values(obj),
            length = set.length,
            shuffled = Array(length),
            index = 0;
          index < length;
          index++
        )
          (rand = _.random(0, index)),
            rand !== index && (shuffled[index] = shuffled[rand]),
            (shuffled[rand] = set[index]);
        return shuffled;
      }),
      (_.sample = function (obj, n, guard) {
        return null == n || guard
          ? (isArrayLike(obj) || (obj = _.values(obj)),
            obj[_.random(obj.length - 1)])
          : _.shuffle(obj).slice(0, Math.max(0, n));
      }),
      (_.sortBy = function (obj, iteratee, context) {
        return (
          (iteratee = cb(iteratee, context)),
          _.pluck(
            _.map(obj, function (value, index, list) {
              return {
                value: value,
                index: index,
                criteria: iteratee(value, index, list),
              };
            }).sort(function (left, right) {
              var a = left.criteria,
                b = right.criteria;
              if (a !== b) {
                if (a > b || void 0 === a) return 1;
                if (a < b || void 0 === b) return -1;
              }
              return left.index - right.index;
            }),
            "value"
          )
        );
      });
    var group = function (behavior) {
      return function (obj, iteratee, context) {
        var result = {};
        return (
          (iteratee = cb(iteratee, context)),
          _.each(obj, function (value, index) {
            var key = iteratee(value, index, obj);
            behavior(result, value, key);
          }),
          result
        );
      };
    };
    (_.groupBy = group(function (result, value, key) {
      _.has(result, key) ? result[key].push(value) : (result[key] = [value]);
    })),
      (_.indexBy = group(function (result, value, key) {
        result[key] = value;
      })),
      (_.countBy = group(function (result, value, key) {
        _.has(result, key) ? result[key]++ : (result[key] = 1);
      })),
      (_.toArray = function (obj) {
        return obj
          ? _.isArray(obj)
            ? slice.call(obj)
            : isArrayLike(obj)
            ? _.map(obj, _.identity)
            : _.values(obj)
          : [];
      }),
      (_.size = function (obj) {
        return null == obj
          ? 0
          : isArrayLike(obj)
          ? obj.length
          : _.keys(obj).length;
      }),
      (_.partition = function (obj, predicate, context) {
        predicate = cb(predicate, context);
        var pass = [],
          fail = [];
        return (
          _.each(obj, function (value, key, obj) {
            (predicate(value, key, obj) ? pass : fail).push(value);
          }),
          [pass, fail]
        );
      }),
      (_.first =
        _.head =
        _.take =
          function (array, n, guard) {
            if (null != array)
              return null == n || guard
                ? array[0]
                : _.initial(array, array.length - n);
          }),
      (_.initial = function (array, n, guard) {
        return slice.call(
          array,
          0,
          Math.max(0, array.length - (null == n || guard ? 1 : n))
        );
      }),
      (_.last = function (array, n, guard) {
        if (null != array)
          return null == n || guard
            ? array[array.length - 1]
            : _.rest(array, Math.max(0, array.length - n));
      }),
      (_.rest =
        _.tail =
        _.drop =
          function (array, n, guard) {
            return slice.call(array, null == n || guard ? 1 : n);
          }),
      (_.compact = function (array) {
        return _.filter(array, _.identity);
      });
    var flatten = function (input, shallow, strict, startIndex) {
      for (
        var output = [],
          idx = 0,
          i = startIndex || 0,
          length = getLength(input);
        i < length;
        i++
      ) {
        var value = input[i];
        if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
          shallow || (value = flatten(value, shallow, strict));
          var j = 0,
            len = value.length;
          for (output.length += len; j < len; ) output[idx++] = value[j++];
        } else strict || (output[idx++] = value);
      }
      return output;
    };
    (_.flatten = function (array, shallow) {
      return flatten(array, shallow, !1);
    }),
      (_.without = function (array) {
        return _.difference(array, slice.call(arguments, 1));
      }),
      (_.uniq = _.unique =
        function (array, isSorted, iteratee, context) {
          _.isBoolean(isSorted) ||
            ((context = iteratee), (iteratee = isSorted), (isSorted = !1)),
            null != iteratee && (iteratee = cb(iteratee, context));
          for (
            var result = [], seen = [], i = 0, length = getLength(array);
            i < length;
            i++
          ) {
            var value = array[i],
              computed = iteratee ? iteratee(value, i, array) : value;
            isSorted
              ? ((i && seen === computed) || result.push(value),
                (seen = computed))
              : iteratee
              ? _.contains(seen, computed) ||
                (seen.push(computed), result.push(value))
              : _.contains(result, value) || result.push(value);
          }
          return result;
        }),
      (_.union = function () {
        return _.uniq(flatten(arguments, !0, !0));
      }),
      (_.intersection = function (array) {
        for (
          var result = [],
            argsLength = arguments.length,
            i = 0,
            length = getLength(array);
          i < length;
          i++
        ) {
          var item = array[i];
          if (!_.contains(result, item)) {
            for (
              var j = 1;
              j < argsLength && _.contains(arguments[j], item);
              j++
            );
            j === argsLength && result.push(item);
          }
        }
        return result;
      }),
      (_.difference = function (array) {
        var rest = flatten(arguments, !0, !0, 1);
        return _.filter(array, function (value) {
          return !_.contains(rest, value);
        });
      }),
      (_.zip = function () {
        return _.unzip(arguments);
      }),
      (_.unzip = function (array) {
        for (
          var length = (array && _.max(array, getLength).length) || 0,
            result = Array(length),
            index = 0;
          index < length;
          index++
        )
          result[index] = _.pluck(array, index);
        return result;
      }),
      (_.object = function (list, values) {
        for (var result = {}, i = 0, length = getLength(list); i < length; i++)
          values
            ? (result[list[i]] = values[i])
            : (result[list[i][0]] = list[i][1]);
        return result;
      }),
      (_.findIndex = createPredicateIndexFinder(1)),
      (_.findLastIndex = createPredicateIndexFinder(-1)),
      (_.sortedIndex = function (array, obj, iteratee, context) {
        iteratee = cb(iteratee, context, 1);
        for (
          var value = iteratee(obj), low = 0, high = getLength(array);
          low < high;

        ) {
          var mid = Math.floor((low + high) / 2);
          iteratee(array[mid]) < value ? (low = mid + 1) : (high = mid);
        }
        return low;
      }),
      (_.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex)),
      (_.lastIndexOf = createIndexFinder(-1, _.findLastIndex)),
      (_.range = function (start, stop, step) {
        null == stop && ((stop = start || 0), (start = 0)), (step = step || 1);
        for (
          var length = Math.max(Math.ceil((stop - start) / step), 0),
            range = Array(length),
            idx = 0;
          idx < length;
          idx++, start += step
        )
          range[idx] = start;
        return range;
      });
    var executeBound = function (
      sourceFunc,
      boundFunc,
      context,
      callingContext,
      args
    ) {
      if (!(callingContext instanceof boundFunc))
        return sourceFunc.apply(context, args);
      var self = baseCreate(sourceFunc.prototype),
        result = sourceFunc.apply(self, args);
      return _.isObject(result) ? result : self;
    };
    (_.bind = function (func, context) {
      if (nativeBind && func.bind === nativeBind)
        return nativeBind.apply(func, slice.call(arguments, 1));
      if (!_.isFunction(func))
        throw new TypeError("Bind must be called on a function");
      var args = slice.call(arguments, 2),
        bound = function () {
          return executeBound(
            func,
            bound,
            context,
            this,
            args.concat(slice.call(arguments))
          );
        };
      return bound;
    }),
      (_.partial = function (func) {
        var boundArgs = slice.call(arguments, 1),
          bound = function () {
            for (
              var position = 0,
                length = boundArgs.length,
                args = Array(length),
                i = 0;
              i < length;
              i++
            )
              args[i] =
                boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
            for (; position < arguments.length; )
              args.push(arguments[position++]);
            return executeBound(func, bound, this, this, args);
          };
        return bound;
      }),
      (_.bindAll = function (obj) {
        var i,
          key,
          length = arguments.length;
        if (length <= 1)
          throw new Error("bindAll must be passed function names");
        for (i = 1; i < length; i++)
          (key = arguments[i]), (obj[key] = _.bind(obj[key], obj));
        return obj;
      }),
      (_.memoize = function (func, hasher) {
        var memoize = function (key) {
          var cache = memoize.cache,
            address = "" + (hasher ? hasher.apply(this, arguments) : key);
          return (
            _.has(cache, address) ||
              (cache[address] = func.apply(this, arguments)),
            cache[address]
          );
        };
        return (memoize.cache = {}), memoize;
      }),
      (_.delay = function (func, wait) {
        var args = slice.call(arguments, 2);
        return setTimeout(function () {
          return func.apply(null, args);
        }, wait);
      }),
      (_.defer = _.partial(_.delay, _, 1)),
      (_.throttle = function (func, wait, options) {
        var context,
          args,
          result,
          timeout = null,
          previous = 0;
        options || (options = {});
        var later = function () {
          (previous = options.leading === !1 ? 0 : _.now()),
            (timeout = null),
            (result = func.apply(context, args)),
            timeout || (context = args = null);
        };
        return function () {
          var now = _.now();
          previous || options.leading !== !1 || (previous = now);
          var remaining = wait - (now - previous);
          return (
            (context = this),
            (args = arguments),
            remaining <= 0 || remaining > wait
              ? (timeout && (clearTimeout(timeout), (timeout = null)),
                (previous = now),
                (result = func.apply(context, args)),
                timeout || (context = args = null))
              : timeout ||
                options.trailing === !1 ||
                (timeout = setTimeout(later, remaining)),
            result
          );
        };
      }),
      (_.debounce = function (func, wait, immediate) {
        var timeout,
          args,
          context,
          timestamp,
          result,
          later = function () {
            var last = _.now() - timestamp;
            last < wait && last >= 0
              ? (timeout = setTimeout(later, wait - last))
              : ((timeout = null),
                immediate ||
                  ((result = func.apply(context, args)),
                  timeout || (context = args = null)));
          };
        return function () {
          (context = this), (args = arguments), (timestamp = _.now());
          var callNow = immediate && !timeout;
          return (
            timeout || (timeout = setTimeout(later, wait)),
            callNow &&
              ((result = func.apply(context, args)), (context = args = null)),
            result
          );
        };
      }),
      (_.wrap = function (func, wrapper) {
        return _.partial(wrapper, func);
      }),
      (_.negate = function (predicate) {
        return function () {
          return !predicate.apply(this, arguments);
        };
      }),
      (_.compose = function () {
        var args = arguments,
          start = args.length - 1;
        return function () {
          for (
            var i = start, result = args[start].apply(this, arguments);
            i--;

          )
            result = args[i].call(this, result);
          return result;
        };
      }),
      (_.after = function (times, func) {
        return function () {
          if (--times < 1) return func.apply(this, arguments);
        };
      }),
      (_.before = function (times, func) {
        var memo;
        return function () {
          return (
            --times > 0 && (memo = func.apply(this, arguments)),
            times <= 1 && (func = null),
            memo
          );
        };
      }),
      (_.once = _.partial(_.before, 2));
    var hasEnumBug = !{ toString: null }.propertyIsEnumerable("toString"),
      nonEnumerableProps = [
        "valueOf",
        "isPrototypeOf",
        "toString",
        "propertyIsEnumerable",
        "hasOwnProperty",
        "toLocaleString",
      ];
    (_.keys = function (obj) {
      if (!_.isObject(obj)) return [];
      if (nativeKeys) return nativeKeys(obj);
      var keys = [];
      for (var key in obj) _.has(obj, key) && keys.push(key);
      return hasEnumBug && collectNonEnumProps(obj, keys), keys;
    }),
      (_.allKeys = function (obj) {
        if (!_.isObject(obj)) return [];
        var keys = [];
        for (var key in obj) keys.push(key);
        return hasEnumBug && collectNonEnumProps(obj, keys), keys;
      }),
      (_.values = function (obj) {
        for (
          var keys = _.keys(obj),
            length = keys.length,
            values = Array(length),
            i = 0;
          i < length;
          i++
        )
          values[i] = obj[keys[i]];
        return values;
      }),
      (_.mapObject = function (obj, iteratee, context) {
        iteratee = cb(iteratee, context);
        for (
          var currentKey,
            keys = _.keys(obj),
            length = keys.length,
            results = {},
            index = 0;
          index < length;
          index++
        )
          (currentKey = keys[index]),
            (results[currentKey] = iteratee(obj[currentKey], currentKey, obj));
        return results;
      }),
      (_.pairs = function (obj) {
        for (
          var keys = _.keys(obj),
            length = keys.length,
            pairs = Array(length),
            i = 0;
          i < length;
          i++
        )
          pairs[i] = [keys[i], obj[keys[i]]];
        return pairs;
      }),
      (_.invert = function (obj) {
        for (
          var result = {}, keys = _.keys(obj), i = 0, length = keys.length;
          i < length;
          i++
        )
          result[obj[keys[i]]] = keys[i];
        return result;
      }),
      (_.functions = _.methods =
        function (obj) {
          var names = [];
          for (var key in obj) _.isFunction(obj[key]) && names.push(key);
          return names.sort();
        }),
      (_.extend = createAssigner(_.allKeys)),
      (_.extendOwn = _.assign = createAssigner(_.keys)),
      (_.findKey = function (obj, predicate, context) {
        predicate = cb(predicate, context);
        for (
          var key, keys = _.keys(obj), i = 0, length = keys.length;
          i < length;
          i++
        )
          if (((key = keys[i]), predicate(obj[key], key, obj))) return key;
      }),
      (_.pick = function (object, oiteratee, context) {
        var iteratee,
          keys,
          result = {},
          obj = object;
        if (null == obj) return result;
        _.isFunction(oiteratee)
          ? ((keys = _.allKeys(obj)),
            (iteratee = optimizeCb(oiteratee, context)))
          : ((keys = flatten(arguments, !1, !1, 1)),
            (iteratee = function (value, key, obj) {
              return key in obj;
            }),
            (obj = Object(obj)));
        for (var i = 0, length = keys.length; i < length; i++) {
          var key = keys[i],
            value = obj[key];
          iteratee(value, key, obj) && (result[key] = value);
        }
        return result;
      }),
      (_.omit = function (obj, iteratee, context) {
        if (_.isFunction(iteratee)) iteratee = _.negate(iteratee);
        else {
          var keys = _.map(flatten(arguments, !1, !1, 1), String);
          iteratee = function (value, key) {
            return !_.contains(keys, key);
          };
        }
        return _.pick(obj, iteratee, context);
      }),
      (_.defaults = createAssigner(_.allKeys, !0)),
      (_.create = function (prototype, props) {
        var result = baseCreate(prototype);
        return props && _.extendOwn(result, props), result;
      }),
      (_.clone = function (obj) {
        return _.isObject(obj)
          ? _.isArray(obj)
            ? obj.slice()
            : _.extend({}, obj)
          : obj;
      }),
      (_.tap = function (obj, interceptor) {
        return interceptor(obj), obj;
      }),
      (_.isMatch = function (object, attrs) {
        var keys = _.keys(attrs),
          length = keys.length;
        if (null == object) return !length;
        for (var obj = Object(object), i = 0; i < length; i++) {
          var key = keys[i];
          if (attrs[key] !== obj[key] || !(key in obj)) return !1;
        }
        return !0;
      });
    var eq = function (a, b, aStack, bStack) {
      if (a === b) return 0 !== a || 1 / a === 1 / b;
      if (null == a || null == b) return a === b;
      a instanceof _ && (a = a._wrapped), b instanceof _ && (b = b._wrapped);
      var className = toString.call(a);
      if (className !== toString.call(b)) return !1;
      switch (className) {
        case "[object RegExp]":
        case "[object String]":
          return "" + a == "" + b;
        case "[object Number]":
          return +a !== +a
            ? +b !== +b
            : 0 === +a
            ? 1 / +a === 1 / b
            : +a === +b;
        case "[object Date]":
        case "[object Boolean]":
          return +a === +b;
      }
      var areArrays = "[object Array]" === className;
      if (!areArrays) {
        if ("object" != typeof a || "object" != typeof b) return !1;
        var aCtor = a.constructor,
          bCtor = b.constructor;
        if (
          aCtor !== bCtor &&
          !(
            _.isFunction(aCtor) &&
            aCtor instanceof aCtor &&
            _.isFunction(bCtor) &&
            bCtor instanceof bCtor
          ) &&
          "constructor" in a &&
          "constructor" in b
        )
          return !1;
      }
      (aStack = aStack || []), (bStack = bStack || []);
      for (var length = aStack.length; length--; )
        if (aStack[length] === a) return bStack[length] === b;
      if ((aStack.push(a), bStack.push(b), areArrays)) {
        if (((length = a.length), length !== b.length)) return !1;
        for (; length--; )
          if (!eq(a[length], b[length], aStack, bStack)) return !1;
      } else {
        var key,
          keys = _.keys(a);
        if (((length = keys.length), _.keys(b).length !== length)) return !1;
        for (; length--; )
          if (
            ((key = keys[length]),
            !_.has(b, key) || !eq(a[key], b[key], aStack, bStack))
          )
            return !1;
      }
      return aStack.pop(), bStack.pop(), !0;
    };
    (_.isEqual = function (a, b) {
      return eq(a, b);
    }),
      (_.isEmpty = function (obj) {
        return (
          null == obj ||
          (isArrayLike(obj) &&
          (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))
            ? 0 === obj.length
            : 0 === _.keys(obj).length)
        );
      }),
      (_.isElement = function (obj) {
        return !(!obj || 1 !== obj.nodeType);
      }),
      (_.isArray =
        nativeIsArray ||
        function (obj) {
          return "[object Array]" === toString.call(obj);
        }),
      (_.isObject = function (obj) {
        var type = typeof obj;
        return "function" === type || ("object" === type && !!obj);
      }),
      _.each(
        [
          "Arguments",
          "Function",
          "String",
          "Number",
          "Date",
          "RegExp",
          "Error",
        ],
        function (name) {
          _["is" + name] = function (obj) {
            return toString.call(obj) === "[object " + name + "]";
          };
        }
      ),
      _.isArguments(arguments) ||
        (_.isArguments = function (obj) {
          return _.has(obj, "callee");
        }),
      "function" != typeof /./ &&
        "object" != typeof Int8Array &&
        (_.isFunction = function (obj) {
          return "function" == typeof obj || !1;
        }),
      (_.isFinite = function (obj) {
        return isFinite(obj) && !isNaN(parseFloat(obj));
      }),
      (_.isNaN = function (obj) {
        return _.isNumber(obj) && obj !== +obj;
      }),
      (_.isBoolean = function (obj) {
        return (
          obj === !0 || obj === !1 || "[object Boolean]" === toString.call(obj)
        );
      }),
      (_.isNull = function (obj) {
        return null === obj;
      }),
      (_.isUndefined = function (obj) {
        return void 0 === obj;
      }),
      (_.has = function (obj, key) {
        return null != obj && hasOwnProperty.call(obj, key);
      }),
      (_.noConflict = function () {
        return (root._ = previousUnderscore), this;
      }),
      (_.identity = function (value) {
        return value;
      }),
      (_.constant = function (value) {
        return function () {
          return value;
        };
      }),
      (_.noop = function () {}),
      (_.property = property),
      (_.propertyOf = function (obj) {
        return null == obj
          ? function () {}
          : function (key) {
              return obj[key];
            };
      }),
      (_.matcher = _.matches =
        function (attrs) {
          return (
            (attrs = _.extendOwn({}, attrs)),
            function (obj) {
              return _.isMatch(obj, attrs);
            }
          );
        }),
      (_.times = function (n, iteratee, context) {
        var accum = Array(Math.max(0, n));
        iteratee = optimizeCb(iteratee, context, 1);
        for (var i = 0; i < n; i++) accum[i] = iteratee(i);
        return accum;
      }),
      (_.random = function (min, max) {
        return (
          null == max && ((max = min), (min = 0)),
          min + Math.floor(Math.random() * (max - min + 1))
        );
      }),
      (_.now =
        Date.now ||
        function () {
          return new Date().getTime();
        });
    var escapeMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;",
      },
      unescapeMap = _.invert(escapeMap),
      createEscaper = function (map) {
        var escaper = function (match) {
            return map[match];
          },
          source = "(?:" + _.keys(map).join("|") + ")",
          testRegexp = RegExp(source),
          replaceRegexp = RegExp(source, "g");
        return function (string) {
          return (
            (string = null == string ? "" : "" + string),
            testRegexp.test(string)
              ? string.replace(replaceRegexp, escaper)
              : string
          );
        };
      };
    (_.escape = createEscaper(escapeMap)),
      (_.unescape = createEscaper(unescapeMap)),
      (_.result = function (object, property, fallback) {
        var value = null == object ? void 0 : object[property];
        return (
          void 0 === value && (value = fallback),
          _.isFunction(value) ? value.call(object) : value
        );
      });
    var idCounter = 0;
    (_.uniqueId = function (prefix) {
      var id = ++idCounter + "";
      return prefix ? prefix + id : id;
    }),
      (_.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g,
      });
    var noMatch = /(.)^/,
      escapes = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029",
      },
      escaper = /\\|'|\r|\n|\u2028|\u2029/g,
      escapeChar = function (match) {
        return "\\" + escapes[match];
      };
    (_.template = function (text, settings, oldSettings) {
      !settings && oldSettings && (settings = oldSettings),
        (settings = _.defaults({}, settings, _.templateSettings));
      var matcher = RegExp(
          [
            (settings.escape || noMatch).source,
            (settings.interpolate || noMatch).source,
            (settings.evaluate || noMatch).source,
          ].join("|") + "|$",
          "g"
        ),
        index = 0,
        source = "__p+='";
      text.replace(
        matcher,
        function (match, escape, interpolate, evaluate, offset) {
          return (
            (source += text.slice(index, offset).replace(escaper, escapeChar)),
            (index = offset + match.length),
            escape
              ? (source +=
                  "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'")
              : interpolate
              ? (source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'")
              : evaluate && (source += "';\n" + evaluate + "\n__p+='"),
            match
          );
        }
      ),
        (source += "';\n"),
        settings.variable || (source = "with(obj||{}){\n" + source + "}\n"),
        (source =
          "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
          source +
          "return __p;\n");
      try {
        var render = new Function(settings.variable || "obj", "_", source);
      } catch (e) {
        throw ((e.source = source), e);
      }
      var template = function (data) {
          return render.call(this, data, _);
        },
        argument = settings.variable || "obj";
      return (
        (template.source = "function(" + argument + "){\n" + source + "}"),
        template
      );
    }),
      (_.chain = function (obj) {
        var instance = _(obj);
        return (instance._chain = !0), instance;
      });
    var result = function (instance, obj) {
      return instance._chain ? _(obj).chain() : obj;
    };
    (_.mixin = function (obj) {
      _.each(_.functions(obj), function (name) {
        var func = (_[name] = obj[name]);
        _.prototype[name] = function () {
          var args = [this._wrapped];
          return push.apply(args, arguments), result(this, func.apply(_, args));
        };
      });
    }),
      _.mixin(_),
      _.each(
        ["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
        function (name) {
          var method = ArrayProto[name];
          _.prototype[name] = function () {
            var obj = this._wrapped;
            return (
              method.apply(obj, arguments),
              ("shift" !== name && "splice" !== name) ||
                0 !== obj.length ||
                delete obj[0],
              result(this, obj)
            );
          };
        }
      ),
      _.each(["concat", "join", "slice"], function (name) {
        var method = ArrayProto[name];
        _.prototype[name] = function () {
          return result(this, method.apply(this._wrapped, arguments));
        };
      }),
      (_.prototype.value = function () {
        return this._wrapped;
      }),
      (_.prototype.valueOf = _.prototype.toJSON = _.prototype.value),
      (_.prototype.toString = function () {
        return "" + this._wrapped;
      }),
      "function" == typeof define &&
        define.amd &&
        define("underscore", [], function () {
          return _;
        });
  }.call(this),
  // (c) 2013 Michael Fogus, DocumentCloud and Investigative Reporters & Editors
  // Underscore-contrib may be freely distributed under the MIT license.
  (function (root) {
    var _ = root._ || require("underscore"),
      concat = Array.prototype.concat,
      ArrayProto = Array.prototype;
    ArrayProto.slice;
    _.mixin({
      accessor: function (field) {
        return function (obj) {
          return obj && obj[field];
        };
      },
      dictionary: function (obj) {
        return function (field) {
          return obj && field && obj[field];
        };
      },
      selectKeys: function (obj, ks) {
        return _.pick.apply(null, concat.call([obj], ks));
      },
      kv: function (obj, key) {
        if (_.has(obj, key)) return [key, obj[key]];
      },
      getPath: function getPath(obj, ks) {
        if (("string" == typeof ks && (ks = ks.split(".")), void 0 !== obj)) {
          if (0 === ks.length) return obj;
          if (null !== obj) return getPath(obj[_.first(ks)], _.rest(ks));
        }
      },
      hasPath: function hasPath(obj, ks) {
        "string" == typeof ks && (ks = ks.split("."));
        var numKeys = ks.length;
        return (
          !(null == obj && numKeys > 0) &&
          ks[0] in obj &&
          (1 === numKeys || hasPath(obj[_.first(ks)], _.rest(ks)))
        );
      },
      pickWhen: function (obj, pred) {
        var copy = {};
        return (
          _.each(obj, function (value, key) {
            pred(obj[key]) && (copy[key] = obj[key]);
          }),
          copy
        );
      },
      omitWhen: function (obj, pred) {
        return _.pickWhen(obj, function (e) {
          return !pred(e);
        });
      },
    });
  })(this),
  //     (c) 2010-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
  //     Backbone may be freely distributed under the MIT license.
  //     For all details and documentation:
  //     http://backbonejs.org
  (function (factory) {
    var root =
      ("object" == typeof self && self.self === self && self) ||
      ("object" == typeof global && global.global === global && global);
    if ("function" == typeof define && define.amd)
      define(["underscore", "jquery", "exports"], function (_, $, exports) {
        root.Backbone = factory(root, exports, _, $);
      });
    else if ("undefined" != typeof exports) {
      var $,
        _ = require("underscore");
      try {
        $ = require("jquery");
      } catch (e) {}
      factory(root, exports, _, $);
    } else
      root.Backbone = factory(
        root,
        {},
        root._,
        root.jQuery || root.Zepto || root.ender || root.$
      );
  })(function (root, Backbone, _, $) {
    var previousBackbone = root.Backbone,
      slice = Array.prototype.slice;
    (Backbone.VERSION = "1.3.3"),
      (Backbone.$ = $),
      (Backbone.noConflict = function () {
        return (root.Backbone = previousBackbone), this;
      }),
      (Backbone.emulateHTTP = !1),
      (Backbone.emulateJSON = !1);
    var addMethod = function (length, method, attribute) {
        switch (length) {
          case 1:
            return function () {
              return _[method](this[attribute]);
            };
          case 2:
            return function (value) {
              return _[method](this[attribute], value);
            };
          case 3:
            return function (iteratee, context) {
              return _[method](this[attribute], cb(iteratee, this), context);
            };
          case 4:
            return function (iteratee, defaultVal, context) {
              return _[method](
                this[attribute],
                cb(iteratee, this),
                defaultVal,
                context
              );
            };
          default:
            return function () {
              var args = slice.call(arguments);
              return args.unshift(this[attribute]), _[method].apply(_, args);
            };
        }
      },
      addUnderscoreMethods = function (Class, methods, attribute) {
        _.each(methods, function (length, method) {
          _[method] &&
            (Class.prototype[method] = addMethod(length, method, attribute));
        });
      },
      cb = function (iteratee, instance) {
        return _.isFunction(iteratee)
          ? iteratee
          : _.isObject(iteratee) && !instance._isModel(iteratee)
          ? modelMatcher(iteratee)
          : _.isString(iteratee)
          ? function (model) {
              return model.get(iteratee);
            }
          : iteratee;
      },
      modelMatcher = function (attrs) {
        var matcher = _.matches(attrs);
        return function (model) {
          return matcher(model.attributes);
        };
      },
      Events = (Backbone.Events = {}),
      eventSplitter = /\s+/,
      eventsApi = function (iteratee, events, name, callback, opts) {
        var names,
          i = 0;
        if (name && "object" == typeof name) {
          void 0 !== callback &&
            "context" in opts &&
            void 0 === opts.context &&
            (opts.context = callback);
          for (names = _.keys(name); i < names.length; i++)
            events = eventsApi(
              iteratee,
              events,
              names[i],
              name[names[i]],
              opts
            );
        } else if (name && eventSplitter.test(name))
          for (names = name.split(eventSplitter); i < names.length; i++)
            events = iteratee(events, names[i], callback, opts);
        else events = iteratee(events, name, callback, opts);
        return events;
      };
    Events.on = function (name, callback, context) {
      return internalOn(this, name, callback, context);
    };
    var internalOn = function (obj, name, callback, context, listening) {
      if (
        ((obj._events = eventsApi(onApi, obj._events || {}, name, callback, {
          context: context,
          ctx: obj,
          listening: listening,
        })),
        listening)
      ) {
        var listeners = obj._listeners || (obj._listeners = {});
        listeners[listening.id] = listening;
      }
      return obj;
    };
    Events.listenTo = function (obj, name, callback) {
      if (!obj) return this;
      var id = obj._listenId || (obj._listenId = _.uniqueId("l")),
        listeningTo = this._listeningTo || (this._listeningTo = {}),
        listening = listeningTo[id];
      if (!listening) {
        var thisId = this._listenId || (this._listenId = _.uniqueId("l"));
        listening = listeningTo[id] = {
          obj: obj,
          objId: id,
          id: thisId,
          listeningTo: listeningTo,
          count: 0,
        };
      }
      return internalOn(obj, name, callback, this, listening), this;
    };
    var onApi = function (events, name, callback, options) {
      if (callback) {
        var handlers = events[name] || (events[name] = []),
          context = options.context,
          ctx = options.ctx,
          listening = options.listening;
        listening && listening.count++,
          handlers.push({
            callback: callback,
            context: context,
            ctx: context || ctx,
            listening: listening,
          });
      }
      return events;
    };
    (Events.off = function (name, callback, context) {
      return this._events
        ? ((this._events = eventsApi(offApi, this._events, name, callback, {
            context: context,
            listeners: this._listeners,
          })),
          this)
        : this;
    }),
      (Events.stopListening = function (obj, name, callback) {
        var listeningTo = this._listeningTo;
        if (!listeningTo) return this;
        for (
          var ids = obj ? [obj._listenId] : _.keys(listeningTo), i = 0;
          i < ids.length;
          i++
        ) {
          var listening = listeningTo[ids[i]];
          if (!listening) break;
          listening.obj.off(name, callback, this);
        }
        return this;
      });
    var offApi = function (events, name, callback, options) {
      if (events) {
        var listening,
          i = 0,
          context = options.context,
          listeners = options.listeners;
        if (name || callback || context) {
          for (
            var names = name ? [name] : _.keys(events);
            i < names.length;
            i++
          ) {
            name = names[i];
            var handlers = events[name];
            if (!handlers) break;
            for (var remaining = [], j = 0; j < handlers.length; j++) {
              var handler = handlers[j];
              (callback &&
                callback !== handler.callback &&
                callback !== handler.callback._callback) ||
              (context && context !== handler.context)
                ? remaining.push(handler)
                : ((listening = handler.listening),
                  listening &&
                    0 === --listening.count &&
                    (delete listeners[listening.id],
                    delete listening.listeningTo[listening.objId]));
            }
            remaining.length ? (events[name] = remaining) : delete events[name];
          }
          return events;
        }
        for (var ids = _.keys(listeners); i < ids.length; i++)
          (listening = listeners[ids[i]]),
            delete listeners[listening.id],
            delete listening.listeningTo[listening.objId];
      }
    };
    (Events.once = function (name, callback, context) {
      var events = eventsApi(
        onceMap,
        {},
        name,
        callback,
        _.bind(this.off, this)
      );
      return (
        "string" == typeof name && null == context && (callback = void 0),
        this.on(events, callback, context)
      );
    }),
      (Events.listenToOnce = function (obj, name, callback) {
        var events = eventsApi(
          onceMap,
          {},
          name,
          callback,
          _.bind(this.stopListening, this, obj)
        );
        return this.listenTo(obj, events);
      });
    var onceMap = function (map, name, callback, offer) {
      if (callback) {
        var once = (map[name] = _.once(function () {
          offer(name, once), callback.apply(this, arguments);
        }));
        once._callback = callback;
      }
      return map;
    };
    Events.trigger = function (name) {
      if (!this._events) return this;
      for (
        var length = Math.max(0, arguments.length - 1),
          args = Array(length),
          i = 0;
        i < length;
        i++
      )
        args[i] = arguments[i + 1];
      return eventsApi(triggerApi, this._events, name, void 0, args), this;
    };
    var triggerApi = function (objEvents, name, callback, args) {
        if (objEvents) {
          var events = objEvents[name],
            allEvents = objEvents.all;
          events && allEvents && (allEvents = allEvents.slice()),
            events && triggerEvents(events, args),
            allEvents && triggerEvents(allEvents, [name].concat(args));
        }
        return objEvents;
      },
      triggerEvents = function (events, args) {
        var ev,
          i = -1,
          l = events.length,
          a1 = args[0],
          a2 = args[1],
          a3 = args[2];
        switch (args.length) {
          case 0:
            for (; ++i < l; ) (ev = events[i]).callback.call(ev.ctx);
            return;
          case 1:
            for (; ++i < l; ) (ev = events[i]).callback.call(ev.ctx, a1);
            return;
          case 2:
            for (; ++i < l; ) (ev = events[i]).callback.call(ev.ctx, a1, a2);
            return;
          case 3:
            for (; ++i < l; )
              (ev = events[i]).callback.call(ev.ctx, a1, a2, a3);
            return;
          default:
            for (; ++i < l; ) (ev = events[i]).callback.apply(ev.ctx, args);
            return;
        }
      };
    (Events.bind = Events.on),
      (Events.unbind = Events.off),
      _.extend(Backbone, Events);
    var Model = (Backbone.Model = function (attributes, options) {
      var attrs = attributes || {};
      options || (options = {}),
        (this.cid = _.uniqueId(this.cidPrefix)),
        (this.attributes = {}),
        options.collection && (this.collection = options.collection),
        options.parse && (attrs = this.parse(attrs, options) || {});
      var defaults = _.result(this, "defaults");
      (attrs = _.defaults(_.extend({}, defaults, attrs), defaults)),
        this.set(attrs, options),
        (this.changed = {}),
        this.initialize.apply(this, arguments);
    });
    _.extend(Model.prototype, Events, {
      changed: null,
      validationError: null,
      idAttribute: "id",
      cidPrefix: "c",
      initialize: function () {},
      toJSON: function (options) {
        return _.clone(this.attributes);
      },
      sync: function () {
        return Backbone.sync.apply(this, arguments);
      },
      get: function (attr) {
        return this.attributes[attr];
      },
      escape: function (attr) {
        return _.escape(this.get(attr));
      },
      has: function (attr) {
        return null != this.get(attr);
      },
      matches: function (attrs) {
        return !!_.iteratee(attrs, this)(this.attributes);
      },
      set: function (key, val, options) {
        if (null == key) return this;
        var attrs;
        if (
          ("object" == typeof key
            ? ((attrs = key), (options = val))
            : ((attrs = {})[key] = val),
          options || (options = {}),
          !this._validate(attrs, options))
        )
          return !1;
        var unset = options.unset,
          silent = options.silent,
          changes = [],
          changing = this._changing;
        (this._changing = !0),
          changing ||
            ((this._previousAttributes = _.clone(this.attributes)),
            (this.changed = {}));
        var current = this.attributes,
          changed = this.changed,
          prev = this._previousAttributes;
        for (var attr in attrs)
          (val = attrs[attr]),
            _.isEqual(current[attr], val) || changes.push(attr),
            _.isEqual(prev[attr], val)
              ? delete changed[attr]
              : (changed[attr] = val),
            unset ? delete current[attr] : (current[attr] = val);
        if (
          (this.idAttribute in attrs && (this.id = this.get(this.idAttribute)),
          !silent)
        ) {
          changes.length && (this._pending = options);
          for (var i = 0; i < changes.length; i++)
            this.trigger(
              "change:" + changes[i],
              this,
              current[changes[i]],
              options
            );
        }
        if (changing) return this;
        if (!silent)
          for (; this._pending; )
            (options = this._pending),
              (this._pending = !1),
              this.trigger("change", this, options);
        return (this._pending = !1), (this._changing = !1), this;
      },
      unset: function (attr, options) {
        return this.set(attr, void 0, _.extend({}, options, { unset: !0 }));
      },
      clear: function (options) {
        var attrs = {};
        for (var key in this.attributes) attrs[key] = void 0;
        return this.set(attrs, _.extend({}, options, { unset: !0 }));
      },
      hasChanged: function (attr) {
        return null == attr
          ? !_.isEmpty(this.changed)
          : _.has(this.changed, attr);
      },
      changedAttributes: function (diff) {
        if (!diff) return !!this.hasChanged() && _.clone(this.changed);
        var old = this._changing ? this._previousAttributes : this.attributes,
          changed = {};
        for (var attr in diff) {
          var val = diff[attr];
          _.isEqual(old[attr], val) || (changed[attr] = val);
        }
        return !!_.size(changed) && changed;
      },
      previous: function (attr) {
        return null != attr && this._previousAttributes
          ? this._previousAttributes[attr]
          : null;
      },
      previousAttributes: function () {
        return _.clone(this._previousAttributes);
      },
      fetch: function (options) {
        options = _.extend({ parse: !0 }, options);
        var model = this,
          success = options.success;
        return (
          (options.success = function (resp) {
            var serverAttrs = options.parse ? model.parse(resp, options) : resp;
            return (
              !!model.set(serverAttrs, options) &&
              (success && success.call(options.context, model, resp, options),
              void model.trigger("sync", model, resp, options))
            );
          }),
          wrapError(this, options),
          this.sync("read", this, options)
        );
      },
      save: function (key, val, options) {
        var attrs;
        null == key || "object" == typeof key
          ? ((attrs = key), (options = val))
          : ((attrs = {})[key] = val),
          (options = _.extend({ validate: !0, parse: !0 }, options));
        var wait = options.wait;
        if (attrs && !wait) {
          if (!this.set(attrs, options)) return !1;
        } else if (!this._validate(attrs, options)) return !1;
        var model = this,
          success = options.success,
          attributes = this.attributes;
        (options.success = function (resp) {
          model.attributes = attributes;
          var serverAttrs = options.parse ? model.parse(resp, options) : resp;
          return (
            wait && (serverAttrs = _.extend({}, attrs, serverAttrs)),
            !(serverAttrs && !model.set(serverAttrs, options)) &&
              (success && success.call(options.context, model, resp, options),
              void model.trigger("sync", model, resp, options))
          );
        }),
          wrapError(this, options),
          attrs && wait && (this.attributes = _.extend({}, attributes, attrs));
        var method = this.isNew()
          ? "create"
          : options.patch
          ? "patch"
          : "update";
        "patch" !== method || options.attrs || (options.attrs = attrs);
        var xhr = this.sync(method, this, options);
        return (this.attributes = attributes), xhr;
      },
      destroy: function (options) {
        options = options ? _.clone(options) : {};
        var model = this,
          success = options.success,
          wait = options.wait,
          destroy = function () {
            model.stopListening(),
              model.trigger("destroy", model, model.collection, options);
          };
        options.success = function (resp) {
          wait && destroy(),
            success && success.call(options.context, model, resp, options),
            model.isNew() || model.trigger("sync", model, resp, options);
        };
        var xhr = !1;
        return (
          this.isNew()
            ? _.defer(options.success)
            : (wrapError(this, options),
              (xhr = this.sync("delete", this, options))),
          wait || destroy(),
          xhr
        );
      },
      url: function () {
        var base =
          _.result(this, "urlRoot") ||
          _.result(this.collection, "url") ||
          urlError();
        if (this.isNew()) return base;
        var id = this.get(this.idAttribute);
        return base.replace(/[^\/]$/, "$&/") + encodeURIComponent(id);
      },
      parse: function (resp, options) {
        return resp;
      },
      clone: function () {
        return new this.constructor(this.attributes);
      },
      isNew: function () {
        return !this.has(this.idAttribute);
      },
      isValid: function (options) {
        return this._validate({}, _.extend({}, options, { validate: !0 }));
      },
      _validate: function (attrs, options) {
        if (!options.validate || !this.validate) return !0;
        attrs = _.extend({}, this.attributes, attrs);
        var error = (this.validationError =
          this.validate(attrs, options) || null);
        return (
          !error ||
          (this.trigger(
            "invalid",
            this,
            error,
            _.extend(options, { validationError: error })
          ),
          !1)
        );
      },
    });
    var modelMethods = {
      keys: 1,
      values: 1,
      pairs: 1,
      invert: 1,
      pick: 0,
      omit: 0,
      chain: 1,
      isEmpty: 1,
    };
    addUnderscoreMethods(Model, modelMethods, "attributes");
    var Collection = (Backbone.Collection = function (models, options) {
        options || (options = {}),
          options.model && (this.model = options.model),
          void 0 !== options.comparator &&
            (this.comparator = options.comparator),
          this._reset(),
          this.initialize.apply(this, arguments),
          models && this.reset(models, _.extend({ silent: !0 }, options));
      }),
      setOptions = { add: !0, remove: !0, merge: !0 },
      addOptions = { add: !0, remove: !1 },
      splice = function (array, insert, at) {
        at = Math.min(Math.max(at, 0), array.length);
        var i,
          tail = Array(array.length - at),
          length = insert.length;
        for (i = 0; i < tail.length; i++) tail[i] = array[i + at];
        for (i = 0; i < length; i++) array[i + at] = insert[i];
        for (i = 0; i < tail.length; i++) array[i + length + at] = tail[i];
      };
    _.extend(Collection.prototype, Events, {
      model: Model,
      initialize: function () {},
      toJSON: function (options) {
        return this.map(function (model) {
          return model.toJSON(options);
        });
      },
      sync: function () {
        return Backbone.sync.apply(this, arguments);
      },
      add: function (models, options) {
        return this.set(models, _.extend({ merge: !1 }, options, addOptions));
      },
      remove: function (models, options) {
        options = _.extend({}, options);
        var singular = !_.isArray(models);
        models = singular ? [models] : models.slice();
        var removed = this._removeModels(models, options);
        return (
          !options.silent &&
            removed.length &&
            ((options.changes = { added: [], merged: [], removed: removed }),
            this.trigger("update", this, options)),
          singular ? removed[0] : removed
        );
      },
      set: function (models, options) {
        if (null != models) {
          (options = _.extend({}, setOptions, options)),
            options.parse &&
              !this._isModel(models) &&
              (models = this.parse(models, options) || []);
          var singular = !_.isArray(models);
          models = singular ? [models] : models.slice();
          var at = options.at;
          null != at && (at = +at),
            at > this.length && (at = this.length),
            at < 0 && (at += this.length + 1);
          var model,
            i,
            set = [],
            toAdd = [],
            toMerge = [],
            toRemove = [],
            modelMap = {},
            add = options.add,
            merge = options.merge,
            remove = options.remove,
            sort = !1,
            sortable = this.comparator && null == at && options.sort !== !1,
            sortAttr = _.isString(this.comparator) ? this.comparator : null;
          for (i = 0; i < models.length; i++) {
            model = models[i];
            var existing = this.get(model);
            if (existing) {
              if (merge && model !== existing) {
                var attrs = this._isModel(model) ? model.attributes : model;
                options.parse && (attrs = existing.parse(attrs, options)),
                  existing.set(attrs, options),
                  toMerge.push(existing),
                  sortable && !sort && (sort = existing.hasChanged(sortAttr));
              }
              modelMap[existing.cid] ||
                ((modelMap[existing.cid] = !0), set.push(existing)),
                (models[i] = existing);
            } else
              add &&
                ((model = models[i] = this._prepareModel(model, options)),
                model &&
                  (toAdd.push(model),
                  this._addReference(model, options),
                  (modelMap[model.cid] = !0),
                  set.push(model)));
          }
          if (remove) {
            for (i = 0; i < this.length; i++)
              (model = this.models[i]),
                modelMap[model.cid] || toRemove.push(model);
            toRemove.length && this._removeModels(toRemove, options);
          }
          var orderChanged = !1,
            replace = !sortable && add && remove;
          if (
            (set.length && replace
              ? ((orderChanged =
                  this.length !== set.length ||
                  _.some(this.models, function (m, index) {
                    return m !== set[index];
                  })),
                (this.models.length = 0),
                splice(this.models, set, 0),
                (this.length = this.models.length))
              : toAdd.length &&
                (sortable && (sort = !0),
                splice(this.models, toAdd, null == at ? this.length : at),
                (this.length = this.models.length)),
            sort && this.sort({ silent: !0 }),
            !options.silent)
          ) {
            for (i = 0; i < toAdd.length; i++)
              null != at && (options.index = at + i),
                (model = toAdd[i]),
                model.trigger("add", model, this, options);
            (sort || orderChanged) && this.trigger("sort", this, options),
              (toAdd.length || toRemove.length || toMerge.length) &&
                ((options.changes = {
                  added: toAdd,
                  removed: toRemove,
                  merged: toMerge,
                }),
                this.trigger("update", this, options));
          }
          return singular ? models[0] : models;
        }
      },
      reset: function (models, options) {
        options = options ? _.clone(options) : {};
        for (var i = 0; i < this.models.length; i++)
          this._removeReference(this.models[i], options);
        return (
          (options.previousModels = this.models),
          this._reset(),
          (models = this.add(models, _.extend({ silent: !0 }, options))),
          options.silent || this.trigger("reset", this, options),
          models
        );
      },
      push: function (model, options) {
        return this.add(model, _.extend({ at: this.length }, options));
      },
      pop: function (options) {
        var model = this.at(this.length - 1);
        return this.remove(model, options);
      },
      unshift: function (model, options) {
        return this.add(model, _.extend({ at: 0 }, options));
      },
      shift: function (options) {
        var model = this.at(0);
        return this.remove(model, options);
      },
      slice: function () {
        return slice.apply(this.models, arguments);
      },
      get: function (obj) {
        if (null != obj)
          return (
            this._byId[obj] ||
            this._byId[this.modelId(obj.attributes || obj)] ||
            (obj.cid && this._byId[obj.cid])
          );
      },
      has: function (obj) {
        return null != this.get(obj);
      },
      at: function (index) {
        return index < 0 && (index += this.length), this.models[index];
      },
      where: function (attrs, first) {
        return this[first ? "find" : "filter"](attrs);
      },
      findWhere: function (attrs) {
        return this.where(attrs, !0);
      },
      sort: function (options) {
        var comparator = this.comparator;
        if (!comparator)
          throw new Error("Cannot sort a set without a comparator");
        options || (options = {});
        var length = comparator.length;
        return (
          _.isFunction(comparator) && (comparator = _.bind(comparator, this)),
          1 === length || _.isString(comparator)
            ? (this.models = this.sortBy(comparator))
            : this.models.sort(comparator),
          options.silent || this.trigger("sort", this, options),
          this
        );
      },
      pluck: function (attr) {
        return this.map(attr + "");
      },
      fetch: function (options) {
        options = _.extend({ parse: !0 }, options);
        var success = options.success,
          collection = this;
        return (
          (options.success = function (resp) {
            var method = options.reset ? "reset" : "set";
            collection[method](resp, options),
              success &&
                success.call(options.context, collection, resp, options),
              collection.trigger("sync", collection, resp, options);
          }),
          wrapError(this, options),
          this.sync("read", this, options)
        );
      },
      create: function (model, options) {
        options = options ? _.clone(options) : {};
        var wait = options.wait;
        if (((model = this._prepareModel(model, options)), !model)) return !1;
        wait || this.add(model, options);
        var collection = this,
          success = options.success;
        return (
          (options.success = function (m, resp, callbackOpts) {
            wait && collection.add(m, callbackOpts),
              success &&
                success.call(callbackOpts.context, m, resp, callbackOpts);
          }),
          model.save(null, options),
          model
        );
      },
      parse: function (resp, options) {
        return resp;
      },
      clone: function () {
        return new this.constructor(this.models, {
          model: this.model,
          comparator: this.comparator,
        });
      },
      modelId: function (attrs) {
        return attrs[this.model.prototype.idAttribute || "id"];
      },
      _reset: function () {
        (this.length = 0), (this.models = []), (this._byId = {});
      },
      _prepareModel: function (attrs, options) {
        if (this._isModel(attrs))
          return attrs.collection || (attrs.collection = this), attrs;
        (options = options ? _.clone(options) : {}),
          (options.collection = this);
        var model = new this.model(attrs, options);
        return model.validationError
          ? (this.trigger("invalid", this, model.validationError, options), !1)
          : model;
      },
      _removeModels: function (models, options) {
        for (var removed = [], i = 0; i < models.length; i++) {
          var model = this.get(models[i]);
          if (model) {
            var index = this.indexOf(model);
            this.models.splice(index, 1),
              this.length--,
              delete this._byId[model.cid];
            var id = this.modelId(model.attributes);
            null != id && delete this._byId[id],
              options.silent ||
                ((options.index = index),
                model.trigger("remove", model, this, options)),
              removed.push(model),
              this._removeReference(model, options);
          }
        }
        return removed;
      },
      _isModel: function (model) {
        return model instanceof Model;
      },
      _addReference: function (model, options) {
        this._byId[model.cid] = model;
        var id = this.modelId(model.attributes);
        null != id && (this._byId[id] = model),
          model.on("all", this._onModelEvent, this);
      },
      _removeReference: function (model, options) {
        delete this._byId[model.cid];
        var id = this.modelId(model.attributes);
        null != id && delete this._byId[id],
          this === model.collection && delete model.collection,
          model.off("all", this._onModelEvent, this);
      },
      _onModelEvent: function (event, model, collection, options) {
        if (model) {
          if (("add" === event || "remove" === event) && collection !== this)
            return;
          if (
            ("destroy" === event && this.remove(model, options),
            "change" === event)
          ) {
            var prevId = this.modelId(model.previousAttributes()),
              id = this.modelId(model.attributes);
            prevId !== id &&
              (null != prevId && delete this._byId[prevId],
              null != id && (this._byId[id] = model));
          }
        }
        this.trigger.apply(this, arguments);
      },
    });
    var collectionMethods = {
      forEach: 3,
      each: 3,
      map: 3,
      collect: 3,
      reduce: 0,
      foldl: 0,
      inject: 0,
      reduceRight: 0,
      foldr: 0,
      find: 3,
      detect: 3,
      filter: 3,
      select: 3,
      reject: 3,
      every: 3,
      all: 3,
      some: 3,
      any: 3,
      include: 3,
      includes: 3,
      contains: 3,
      invoke: 0,
      max: 3,
      min: 3,
      toArray: 1,
      size: 1,
      first: 3,
      head: 3,
      take: 3,
      initial: 3,
      rest: 3,
      tail: 3,
      drop: 3,
      last: 3,
      without: 0,
      difference: 0,
      indexOf: 3,
      shuffle: 1,
      lastIndexOf: 3,
      isEmpty: 1,
      chain: 1,
      sample: 3,
      partition: 3,
      groupBy: 3,
      countBy: 3,
      sortBy: 3,
      indexBy: 3,
      findIndex: 3,
      findLastIndex: 3,
    };
    addUnderscoreMethods(Collection, collectionMethods, "models");
    var View = (Backbone.View = function (options) {
        (this.cid = _.uniqueId("view")),
          _.extend(this, _.pick(options, viewOptions)),
          this._ensureElement(),
          this.initialize.apply(this, arguments);
      }),
      delegateEventSplitter = /^(\S+)\s*(.*)$/,
      viewOptions = [
        "model",
        "collection",
        "el",
        "id",
        "attributes",
        "className",
        "tagName",
        "events",
      ];
    _.extend(View.prototype, Events, {
      tagName: "div",
      $: function (selector) {
        return this.$el.find(selector);
      },
      initialize: function () {},
      render: function () {
        return this;
      },
      remove: function () {
        return this._removeElement(), this.stopListening(), this;
      },
      _removeElement: function () {
        this.$el.remove();
      },
      setElement: function (element) {
        return (
          this.undelegateEvents(),
          this._setElement(element),
          this.delegateEvents(),
          this
        );
      },
      _setElement: function (el) {
        (this.$el = el instanceof Backbone.$ ? el : Backbone.$(el)),
          (this.el = this.$el[0]);
      },
      delegateEvents: function (events) {
        if ((events || (events = _.result(this, "events")), !events))
          return this;
        this.undelegateEvents();
        for (var key in events) {
          var method = events[key];
          if ((_.isFunction(method) || (method = this[method]), method)) {
            var match = key.match(delegateEventSplitter);
            this.delegate(match[1], match[2], _.bind(method, this));
          }
        }
        return this;
      },
      delegate: function (eventName, selector, listener) {
        return (
          this.$el.on(
            eventName + ".delegateEvents" + this.cid,
            selector,
            listener
          ),
          this
        );
      },
      undelegateEvents: function () {
        return this.$el && this.$el.off(".delegateEvents" + this.cid), this;
      },
      undelegate: function (eventName, selector, listener) {
        return (
          this.$el.off(
            eventName + ".delegateEvents" + this.cid,
            selector,
            listener
          ),
          this
        );
      },
      _createElement: function (tagName) {
        return document.createElement(tagName);
      },
      _ensureElement: function () {
        if (this.el) this.setElement(_.result(this, "el"));
        else {
          var attrs = _.extend({}, _.result(this, "attributes"));
          this.id && (attrs.id = _.result(this, "id")),
            this.className && (attrs["class"] = _.result(this, "className")),
            this.setElement(this._createElement(_.result(this, "tagName"))),
            this._setAttributes(attrs);
        }
      },
      _setAttributes: function (attributes) {
        this.$el.attr(attributes);
      },
    }),
      (Backbone.sync = function (method, model, options) {
        var type = methodMap[method];
        _.defaults(options || (options = {}), {
          emulateHTTP: Backbone.emulateHTTP,
          emulateJSON: Backbone.emulateJSON,
        });
        var params = { type: type, dataType: "json" };
        if (
          (options.url || (params.url = _.result(model, "url") || urlError()),
          null != options.data ||
            !model ||
            ("create" !== method &&
              "update" !== method &&
              "patch" !== method) ||
            ((params.contentType = "application/json"),
            (params.data = JSON.stringify(
              options.attrs || model.toJSON(options)
            ))),
          options.emulateJSON &&
            ((params.contentType = "application/x-www-form-urlencoded"),
            (params.data = params.data ? { model: params.data } : {})),
          options.emulateHTTP &&
            ("PUT" === type || "DELETE" === type || "PATCH" === type))
        ) {
          (params.type = "POST"),
            options.emulateJSON && (params.data._method = type);
          var beforeSend = options.beforeSend;
          options.beforeSend = function (xhr) {
            if (
              (xhr.setRequestHeader("X-HTTP-Method-Override", type), beforeSend)
            )
              return beforeSend.apply(this, arguments);
          };
        }
        "GET" === params.type ||
          options.emulateJSON ||
          (params.processData = !1);
        var error = options.error;
        options.error = function (xhr, textStatus, errorThrown) {
          (options.textStatus = textStatus),
            (options.errorThrown = errorThrown),
            error && error.call(options.context, xhr, textStatus, errorThrown);
        };
        var xhr = (options.xhr = Backbone.ajax(_.extend(params, options)));
        return model.trigger("request", model, xhr, options), xhr;
      });
    var methodMap = {
      create: "POST",
      update: "PUT",
      patch: "PATCH",
      delete: "DELETE",
      read: "GET",
    };
    Backbone.ajax = function () {
      return Backbone.$.ajax.apply(Backbone.$, arguments);
    };
    var Router = (Backbone.Router = function (options) {
        options || (options = {}),
          options.routes && (this.routes = options.routes),
          this._bindRoutes(),
          this.initialize.apply(this, arguments);
      }),
      optionalParam = /\((.*?)\)/g,
      namedParam = /(\(\?)?:\w+/g,
      splatParam = /\*\w+/g,
      escapeRegExp = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    _.extend(Router.prototype, Events, {
      initialize: function () {},
      route: function (route, name, callback) {
        _.isRegExp(route) || (route = this._routeToRegExp(route)),
          _.isFunction(name) && ((callback = name), (name = "")),
          callback || (callback = this[name]);
        var router = this;
        return (
          Backbone.history.route(route, function (fragment) {
            var args = router._extractParameters(route, fragment);
            router.execute(callback, args, name) !== !1 &&
              (router.trigger.apply(router, ["route:" + name].concat(args)),
              router.trigger("route", name, args),
              Backbone.history.trigger("route", router, name, args));
          }),
          this
        );
      },
      execute: function (callback, args, name) {
        callback && callback.apply(this, args);
      },
      navigate: function (fragment, options) {
        return Backbone.history.navigate(fragment, options), this;
      },
      _bindRoutes: function () {
        if (this.routes) {
          this.routes = _.result(this, "routes");
          for (
            var route, routes = _.keys(this.routes);
            null != (route = routes.pop());

          )
            this.route(route, this.routes[route]);
        }
      },
      _routeToRegExp: function (route) {
        return (
          (route = route
            .replace(escapeRegExp, "\\$&")
            .replace(optionalParam, "(?:$1)?")
            .replace(namedParam, function (match, optional) {
              return optional ? match : "([^/?]+)";
            })
            .replace(splatParam, "([^?]*?)")),
          new RegExp("^" + route + "(?:\\?([\\s\\S]*))?$")
        );
      },
      _extractParameters: function (route, fragment) {
        var params = route.exec(fragment).slice(1);
        return _.map(params, function (param, i) {
          return i === params.length - 1
            ? param || null
            : param
            ? decodeURIComponent(param)
            : null;
        });
      },
    });
    var History = (Backbone.History = function () {
        (this.handlers = []),
          (this.checkUrl = _.bind(this.checkUrl, this)),
          "undefined" != typeof window &&
            ((this.location = window.location),
            (this.history = window.history));
      }),
      routeStripper = /^[#\/]|\s+$/g,
      rootStripper = /^\/+|\/+$/g,
      pathStripper = /#.*$/;
    (History.started = !1),
      _.extend(History.prototype, Events, {
        interval: 50,
        atRoot: function () {
          var path = this.location.pathname.replace(/[^\/]$/, "$&/");
          return path === this.root && !this.getSearch();
        },
        matchRoot: function () {
          var path = this.decodeFragment(this.location.pathname),
            rootPath = path.slice(0, this.root.length - 1) + "/";
          return rootPath === this.root;
        },
        decodeFragment: function (fragment) {
          return decodeURI(fragment.replace(/%25/g, "%2525"));
        },
        getSearch: function () {
          var match = this.location.href.replace(/#.*/, "").match(/\?.+/);
          return match ? match[0] : "";
        },
        getHash: function (window) {
          var match = (window || this).location.href.match(/#(.*)$/);
          return match ? match[1] : "";
        },
        getPath: function () {
          var path = this.decodeFragment(
            this.location.pathname + this.getSearch()
          ).slice(this.root.length - 1);
          return "/" === path.charAt(0) ? path.slice(1) : path;
        },
        getFragment: function (fragment) {
          return (
            null == fragment &&
              (fragment =
                this._usePushState || !this._wantsHashChange
                  ? this.getPath()
                  : this.getHash()),
            fragment.replace(routeStripper, "")
          );
        },
        start: function (options) {
          if (History.started)
            throw new Error("Backbone.history has already been started");
          if (
            ((History.started = !0),
            (this.options = _.extend({ root: "/" }, this.options, options)),
            (this.root = this.options.root),
            (this._wantsHashChange = this.options.hashChange !== !1),
            (this._hasHashChange =
              "onhashchange" in window &&
              (void 0 === document.documentMode || document.documentMode > 7)),
            (this._useHashChange =
              this._wantsHashChange && this._hasHashChange),
            (this._wantsPushState = !!this.options.pushState),
            (this._hasPushState = !(!this.history || !this.history.pushState)),
            (this._usePushState = this._wantsPushState && this._hasPushState),
            (this.fragment = this.getFragment()),
            (this.root = ("/" + this.root + "/").replace(rootStripper, "/")),
            this._wantsHashChange && this._wantsPushState)
          ) {
            if (!this._hasPushState && !this.atRoot()) {
              var rootPath = this.root.slice(0, -1) || "/";
              return this.location.replace(rootPath + "#" + this.getPath()), !0;
            }
            this._hasPushState &&
              this.atRoot() &&
              this.navigate(this.getHash(), { replace: !0 });
          }
          if (
            !this._hasHashChange &&
            this._wantsHashChange &&
            !this._usePushState
          ) {
            (this.iframe = document.createElement("iframe")),
              (this.iframe.src = "javascript:0"),
              (this.iframe.style.display = "none"),
              (this.iframe.tabIndex = -1);
            var body = document.body,
              iWindow = body.insertBefore(
                this.iframe,
                body.firstChild
              ).contentWindow;
            iWindow.document.open(),
              iWindow.document.close(),
              (iWindow.location.hash = "#" + this.fragment);
          }
          var addEventListener =
            window.addEventListener ||
            function (eventName, listener) {
              return attachEvent("on" + eventName, listener);
            };
          if (
            (this._usePushState
              ? addEventListener("popstate", this.checkUrl, !1)
              : this._useHashChange && !this.iframe
              ? addEventListener("hashchange", this.checkUrl, !1)
              : this._wantsHashChange &&
                (this._checkUrlInterval = setInterval(
                  this.checkUrl,
                  this.interval
                )),
            !this.options.silent)
          )
            return this.loadUrl();
        },
        stop: function () {
          var removeEventListener =
            window.removeEventListener ||
            function (eventName, listener) {
              return detachEvent("on" + eventName, listener);
            };
          this._usePushState
            ? removeEventListener("popstate", this.checkUrl, !1)
            : this._useHashChange &&
              !this.iframe &&
              removeEventListener("hashchange", this.checkUrl, !1),
            this.iframe &&
              (document.body.removeChild(this.iframe), (this.iframe = null)),
            this._checkUrlInterval && clearInterval(this._checkUrlInterval),
            (History.started = !1);
        },
        route: function (route, callback) {
          this.handlers.unshift({ route: route, callback: callback });
        },
        checkUrl: function (e) {
          var current = this.getFragment();
          return (
            current === this.fragment &&
              this.iframe &&
              (current = this.getHash(this.iframe.contentWindow)),
            current !== this.fragment &&
              (this.iframe && this.navigate(current), void this.loadUrl())
          );
        },
        loadUrl: function (fragment) {
          return (
            !!this.matchRoot() &&
            ((fragment = this.fragment = this.getFragment(fragment)),
            _.some(this.handlers, function (handler) {
              if (handler.route.test(fragment))
                return handler.callback(fragment), !0;
            }))
          );
        },
        navigate: function (fragment, options) {
          if (!History.started) return !1;
          (options && options !== !0) || (options = { trigger: !!options }),
            (fragment = this.getFragment(fragment || ""));
          var rootPath = this.root;
          ("" !== fragment && "?" !== fragment.charAt(0)) ||
            (rootPath = rootPath.slice(0, -1) || "/");
          var url = rootPath + fragment;
          if (
            ((fragment = this.decodeFragment(
              fragment.replace(pathStripper, "")
            )),
            this.fragment !== fragment)
          ) {
            if (((this.fragment = fragment), this._usePushState))
              this.history[options.replace ? "replaceState" : "pushState"](
                {},
                document.title,
                url
              );
            else {
              if (!this._wantsHashChange) return this.location.assign(url);
              if (
                (this._updateHash(this.location, fragment, options.replace),
                this.iframe &&
                  fragment !== this.getHash(this.iframe.contentWindow))
              ) {
                var iWindow = this.iframe.contentWindow;
                options.replace ||
                  (iWindow.document.open(), iWindow.document.close()),
                  this._updateHash(iWindow.location, fragment, options.replace);
              }
            }
            return options.trigger ? this.loadUrl(fragment) : void 0;
          }
        },
        _updateHash: function (location, fragment, replace) {
          if (replace) {
            var href = location.href.replace(/(javascript:|#).*$/, "");
            location.replace(href + "#" + fragment);
          } else location.hash = "#" + fragment;
        },
      }),
      (Backbone.history = new History());
    var extend = function (protoProps, staticProps) {
      var child,
        parent = this;
      return (
        (child =
          protoProps && _.has(protoProps, "constructor")
            ? protoProps.constructor
            : function () {
                return parent.apply(this, arguments);
              }),
        _.extend(child, parent, staticProps),
        (child.prototype = _.create(parent.prototype, protoProps)),
        (child.prototype.constructor = child),
        (child.__super__ = parent.prototype),
        child
      );
    };
    Model.extend =
      Collection.extend =
      Router.extend =
      View.extend =
      History.extend =
        extend;
    var urlError = function () {
        throw new Error('A "url" property or function must be specified');
      },
      wrapError = function (model, options) {
        var error = options.error;
        options.error = function (resp) {
          error && error.call(options.context, model, resp, options),
            model.trigger("error", model, resp, options);
        };
      };
    return Backbone;
  }),
  (function (root, factory) {
    if ("function" == typeof define && define.amd)
      define(["underscore", "backbone"], function (_, Backbone) {
        factory(_, Backbone);
      });
    else if ("undefined" != typeof exports && "function" == typeof require) {
      var _ = require("underscore"),
        Backbone = require("backbone");
      factory(_, Backbone);
    } else factory(root._, root.Backbone);
  })(this, function (_, Backbone) {
    Backbone.Model.extend =
      Backbone.Collection.extend =
      Backbone.Router.extend =
      Backbone.View.extend =
        function (protoProps, classProps) {
          var child = inherits(this, protoProps, classProps);
          return (child.extend = this.extend), child;
        };
    var unImplementedSuper = function (method) {
        throw "Super does not implement this method: " + method;
      },
      fnTest = /\b_super\b/,
      makeWrapper = function (parentProto, name, fn) {
        var wrapper = function () {
          var tmp = this._super;
          this._super = parentProto[name] || unImplementedSuper(name);
          var ret;
          try {
            ret = fn.apply(this, arguments);
          } finally {
            this._super = tmp;
          }
          return ret;
        };
        for (var prop in fn) (wrapper[prop] = fn[prop]), delete fn[prop];
        return wrapper;
      },
      ctor = function () {},
      inherits = function (parent, protoProps, staticProps) {
        var child,
          parentProto = parent.prototype;
        if (
          ((child =
            protoProps && protoProps.hasOwnProperty("constructor")
              ? protoProps.constructor
              : function () {
                  return parent.apply(this, arguments);
                }),
          _.extend(child, parent, staticProps),
          (ctor.prototype = parentProto),
          (child.prototype = new ctor()),
          protoProps)
        ) {
          _.extend(child.prototype, protoProps);
          for (var name in protoProps)
            "function" == typeof protoProps[name] &&
              fnTest.test(protoProps[name]) &&
              (child.prototype[name] = makeWrapper(
                parentProto,
                name,
                protoProps[name]
              ));
        }
        return (
          staticProps && _.extend(child, staticProps),
          (child.prototype.constructor = child),
          (child.__super__ = parentProto),
          child
        );
      };
    return inherits;
  })
  /*!
   * jQuery Validation Plugin v1.14.0
   *
   * http://jqueryvalidation.org/
   *
   * Copyright (c) 2015 Jörn Zaefferer
   * Released under the MIT license
   */,
  (function (factory) {
    "function" == typeof define && define.amd
      ? define(["jquery"], factory)
      : factory(jQuery);
  })(function ($) {
    $.extend($.fn, {
      validate: function (options) {
        if (!this.length)
          return void (
            options &&
            options.debug &&
            window.console &&
            console.warn("Nothing selected, can't validate, returning nothing.")
          );
        var validator = $.data(this[0], "validator");
        return validator
          ? validator
          : (this.attr("novalidate", "novalidate"),
            (validator = new $.validator(options, this[0])),
            $.data(this[0], "validator", validator),
            validator.settings.onsubmit &&
              (this.on("click.validate", ":submit", function (event) {
                validator.settings.submitHandler &&
                  (validator.submitButton = event.target),
                  $(this).hasClass("cancel") && (validator.cancelSubmit = !0),
                  void 0 !== $(this).attr("formnovalidate") &&
                    (validator.cancelSubmit = !0);
              }),
              this.on("submit.validate", function (event) {
                function handle() {
                  var hidden, result;
                  return (
                    !validator.settings.submitHandler ||
                    (validator.submitButton &&
                      (hidden = $("<input type='hidden'/>")
                        .attr("name", validator.submitButton.name)
                        .val($(validator.submitButton).val())
                        .appendTo(validator.currentForm)),
                    (result = validator.settings.submitHandler.call(
                      validator,
                      validator.currentForm,
                      event
                    )),
                    validator.submitButton && hidden.remove(),
                    void 0 !== result && result)
                  );
                }
                return (
                  validator.settings.debug && event.preventDefault(),
                  validator.cancelSubmit
                    ? ((validator.cancelSubmit = !1), handle())
                    : validator.form()
                    ? validator.pendingRequest
                      ? ((validator.formSubmitted = !0), !1)
                      : handle()
                    : (validator.focusInvalid(), !1)
                );
              })),
            validator);
      },
      valid: function () {
        var valid, validator, errorList;
        return (
          $(this[0]).is("form")
            ? (valid = this.validate().form())
            : ((errorList = []),
              (valid = !0),
              (validator = $(this[0].form).validate()),
              this.each(function () {
                (valid = validator.element(this) && valid),
                  (errorList = errorList.concat(validator.errorList));
              }),
              (validator.errorList = errorList)),
          valid
        );
      },
      rules: function (command, argument) {
        var settings,
          staticRules,
          existingRules,
          data,
          param,
          filtered,
          element = this[0];
        if (command)
          switch (
            ((settings = $.data(element.form, "validator").settings),
            (staticRules = settings.rules),
            (existingRules = $.validator.staticRules(element)),
            command)
          ) {
            case "add":
              $.extend(existingRules, $.validator.normalizeRule(argument)),
                delete existingRules.messages,
                (staticRules[element.name] = existingRules),
                argument.messages &&
                  (settings.messages[element.name] = $.extend(
                    settings.messages[element.name],
                    argument.messages
                  ));
              break;
            case "remove":
              return argument
                ? ((filtered = {}),
                  $.each(argument.split(/\s/), function (index, method) {
                    (filtered[method] = existingRules[method]),
                      delete existingRules[method],
                      "required" === method &&
                        $(element).removeAttr("aria-required");
                  }),
                  filtered)
                : (delete staticRules[element.name], existingRules);
          }
        return (
          (data = $.validator.normalizeRules(
            $.extend(
              {},
              $.validator.classRules(element),
              $.validator.attributeRules(element),
              $.validator.dataRules(element),
              $.validator.staticRules(element)
            ),
            element
          )),
          data.required &&
            ((param = data.required),
            delete data.required,
            (data = $.extend({ required: param }, data)),
            $(element).attr("aria-required", "true")),
          data.remote &&
            ((param = data.remote),
            delete data.remote,
            (data = $.extend(data, { remote: param }))),
          data
        );
      },
    }),
      $.extend($.expr[":"], {
        blank: function (a) {
          return !$.trim("" + $(a).val());
        },
        filled: function (a) {
          return !!$.trim("" + $(a).val());
        },
        unchecked: function (a) {
          return !$(a).prop("checked");
        },
      }),
      ($.validator = function (options, form) {
        (this.settings = $.extend(!0, {}, $.validator.defaults, options)),
          (this.currentForm = form),
          this.init();
      }),
      ($.validator.format = function (source, params) {
        return 1 === arguments.length
          ? function () {
              var args = $.makeArray(arguments);
              return args.unshift(source), $.validator.format.apply(this, args);
            }
          : (arguments.length > 2 &&
              params.constructor !== Array &&
              (params = $.makeArray(arguments).slice(1)),
            params.constructor !== Array && (params = [params]),
            $.each(params, function (i, n) {
              source = source.replace(
                new RegExp("\\{" + i + "\\}", "g"),
                function () {
                  return n;
                }
              );
            }),
            source);
      }),
      $.extend($.validator, {
        defaults: {
          messages: {},
          groups: {},
          rules: {},
          errorClass: "error",
          validClass: "valid",
          errorElement: "label",
          focusCleanup: !1,
          focusInvalid: !0,
          errorContainer: $([]),
          errorLabelContainer: $([]),
          onsubmit: !0,
          ignore: ":hidden",
          ignoreTitle: !1,
          onfocusin: function (element) {
            (this.lastActive = element),
              this.settings.focusCleanup &&
                (this.settings.unhighlight &&
                  this.settings.unhighlight.call(
                    this,
                    element,
                    this.settings.errorClass,
                    this.settings.validClass
                  ),
                this.hideThese(this.errorsFor(element)));
          },
          onfocusout: function (element) {
            this.checkable(element) ||
              (!(element.name in this.submitted) && this.optional(element)) ||
              this.element(element);
          },
          onkeyup: function (element, event) {
            var excludedKeys = [
              16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225,
            ];
            (9 === event.which && "" === this.elementValue(element)) ||
              $.inArray(event.keyCode, excludedKeys) !== -1 ||
              ((element.name in this.submitted ||
                element === this.lastElement) &&
                this.element(element));
          },
          onclick: function (element) {
            element.name in this.submitted
              ? this.element(element)
              : element.parentNode.name in this.submitted &&
                this.element(element.parentNode);
          },
          highlight: function (element, errorClass, validClass) {
            "radio" === element.type
              ? this.findByName(element.name)
                  .addClass(errorClass)
                  .removeClass(validClass)
              : $(element).addClass(errorClass).removeClass(validClass);
          },
          unhighlight: function (element, errorClass, validClass) {
            "radio" === element.type
              ? this.findByName(element.name)
                  .removeClass(errorClass)
                  .addClass(validClass)
              : $(element).removeClass(errorClass).addClass(validClass);
          },
        },
        setDefaults: function (settings) {
          $.extend($.validator.defaults, settings);
        },
        messages: {
          required: "This field is required.",
          remote: "Please fix this field.",
          email: "Please enter a valid email address.",
          url: "Please enter a valid URL.",
          date: "Please enter a valid date.",
          dateISO: "Please enter a valid date ( ISO ).",
          number: "Please enter a valid number.",
          digits: "Please enter only digits.",
          creditcard: "Please enter a valid credit card number.",
          equalTo: "Please enter the same value again.",
          maxlength: $.validator.format(
            "Please enter no more than {0} characters."
          ),
          minlength: $.validator.format(
            "Please enter at least {0} characters."
          ),
          rangelength: $.validator.format(
            "Please enter a value between {0} and {1} characters long."
          ),
          range: $.validator.format(
            "Please enter a value between {0} and {1}."
          ),
          max: $.validator.format(
            "Please enter a value less than or equal to {0}."
          ),
          min: $.validator.format(
            "Please enter a value greater than or equal to {0}."
          ),
        },
        autoCreateRanges: !1,
        prototype: {
          init: function () {
            function delegate(event) {
              var validator = $.data(this.form, "validator"),
                eventType = "on" + event.type.replace(/^validate/, ""),
                settings = validator.settings;
              settings[eventType] &&
                !$(this).is(settings.ignore) &&
                settings[eventType].call(validator, this, event);
            }
            (this.labelContainer = $(this.settings.errorLabelContainer)),
              (this.errorContext =
                (this.labelContainer.length && this.labelContainer) ||
                $(this.currentForm)),
              (this.containers = $(this.settings.errorContainer).add(
                this.settings.errorLabelContainer
              )),
              (this.submitted = {}),
              (this.valueCache = {}),
              (this.pendingRequest = 0),
              (this.pending = {}),
              (this.invalid = {}),
              this.reset();
            var rules,
              groups = (this.groups = {});
            $.each(this.settings.groups, function (key, value) {
              "string" == typeof value && (value = value.split(/\s/)),
                $.each(value, function (index, name) {
                  groups[name] = key;
                });
            }),
              (rules = this.settings.rules),
              $.each(rules, function (key, value) {
                rules[key] = $.validator.normalizeRule(value);
              }),
              $(this.currentForm)
                .on(
                  "focusin.validate focusout.validate keyup.validate",
                  ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']",
                  delegate
                )
                .on(
                  "click.validate",
                  "select, option, [type='radio'], [type='checkbox']",
                  delegate
                ),
              this.settings.invalidHandler &&
                $(this.currentForm).on(
                  "invalid-form.validate",
                  this.settings.invalidHandler
                ),
              $(this.currentForm)
                .find("[required], [data-rule-required], .required")
                .attr("aria-required", "true");
          },
          form: function () {
            return (
              this.checkForm(),
              $.extend(this.submitted, this.errorMap),
              (this.invalid = $.extend({}, this.errorMap)),
              this.valid() ||
                $(this.currentForm).triggerHandler("invalid-form", [this]),
              this.showErrors(),
              this.valid()
            );
          },
          checkForm: function () {
            this.prepareForm();
            for (
              var i = 0, elements = (this.currentElements = this.elements());
              elements[i];
              i++
            )
              this.check(elements[i]);
            return this.valid();
          },
          element: function (element) {
            var cleanElement = this.clean(element),
              checkElement = this.validationTargetFor(cleanElement),
              result = !0;
            return (
              (this.lastElement = checkElement),
              void 0 === checkElement
                ? delete this.invalid[cleanElement.name]
                : (this.prepareElement(checkElement),
                  (this.currentElements = $(checkElement)),
                  (result = this.check(checkElement) !== !1),
                  result
                    ? delete this.invalid[checkElement.name]
                    : (this.invalid[checkElement.name] = !0)),
              $(element).attr("aria-invalid", !result),
              this.numberOfInvalids() ||
                (this.toHide = this.toHide.add(this.containers)),
              this.showErrors(),
              result
            );
          },
          showErrors: function (errors) {
            if (errors) {
              $.extend(this.errorMap, errors), (this.errorList = []);
              for (var name in errors)
                this.errorList.push({
                  message: errors[name],
                  element: this.findByName(name)[0],
                });
              this.successList = $.grep(this.successList, function (element) {
                return !(element.name in errors);
              });
            }
            this.settings.showErrors
              ? this.settings.showErrors.call(
                  this,
                  this.errorMap,
                  this.errorList
                )
              : this.defaultShowErrors();
          },
          resetForm: function () {
            $.fn.resetForm && $(this.currentForm).resetForm(),
              (this.submitted = {}),
              (this.lastElement = null),
              this.prepareForm(),
              this.hideErrors();
            var i,
              elements = this.elements()
                .removeData("previousValue")
                .removeAttr("aria-invalid");
            if (this.settings.unhighlight)
              for (i = 0; elements[i]; i++)
                this.settings.unhighlight.call(
                  this,
                  elements[i],
                  this.settings.errorClass,
                  ""
                );
            else elements.removeClass(this.settings.errorClass);
          },
          numberOfInvalids: function () {
            return this.objectLength(this.invalid);
          },
          objectLength: function (obj) {
            var i,
              count = 0;
            for (i in obj) count++;
            return count;
          },
          hideErrors: function () {
            this.hideThese(this.toHide);
          },
          hideThese: function (errors) {
            errors.not(this.containers).text(""),
              this.addWrapper(errors).hide();
          },
          valid: function () {
            return 0 === this.size();
          },
          size: function () {
            return this.errorList.length;
          },
          focusInvalid: function () {
            if (this.settings.focusInvalid)
              try {
                $(
                  this.findLastActive() ||
                    (this.errorList.length && this.errorList[0].element) ||
                    []
                )
                  .filter(":visible")
                  .focus()
                  .trigger("focusin");
              } catch (e) {}
          },
          findLastActive: function () {
            var lastActive = this.lastActive;
            return (
              lastActive &&
              1 ===
                $.grep(this.errorList, function (n) {
                  return n.element.name === lastActive.name;
                }).length &&
              lastActive
            );
          },
          elements: function () {
            var validator = this,
              rulesCache = {};
            return $(this.currentForm)
              .find("input, select, textarea")
              .not(":submit, :reset, :image, :disabled")
              .not(this.settings.ignore)
              .filter(function () {
                return (
                  !this.name &&
                    validator.settings.debug &&
                    window.console &&
                    console.error("%o has no name assigned", this),
                  !(
                    this.name in rulesCache ||
                    !validator.objectLength($(this).rules())
                  ) && ((rulesCache[this.name] = !0), !0)
                );
              });
          },
          clean: function (selector) {
            return $(selector)[0];
          },
          errors: function () {
            var errorClass = this.settings.errorClass.split(" ").join(".");
            return $(
              this.settings.errorElement + "." + errorClass,
              this.errorContext
            );
          },
          reset: function () {
            (this.successList = []),
              (this.errorList = []),
              (this.errorMap = {}),
              (this.toShow = $([])),
              (this.toHide = $([])),
              (this.currentElements = $([]));
          },
          prepareForm: function () {
            this.reset(), (this.toHide = this.errors().add(this.containers));
          },
          prepareElement: function (element) {
            this.reset(), (this.toHide = this.errorsFor(element));
          },
          elementValue: function (element) {
            var val,
              $element = $(element),
              type = element.type;
            return "radio" === type || "checkbox" === type
              ? this.findByName(element.name).filter(":checked").val()
              : "number" === type && "undefined" != typeof element.validity
              ? !element.validity.badInput && $element.val()
              : ((val = $element.val()),
                "string" == typeof val ? val.replace(/\r/g, "") : val);
          },
          check: function (element) {
            element = this.validationTargetFor(this.clean(element));
            var result,
              method,
              rule,
              rules = $(element).rules(),
              rulesCount = $.map(rules, function (n, i) {
                return i;
              }).length,
              dependencyMismatch = !1,
              val = this.elementValue(element);
            for (method in rules) {
              rule = { method: method, parameters: rules[method] };
              try {
                if (
                  ((result = $.validator.methods[method].call(
                    this,
                    val,
                    element,
                    rule.parameters
                  )),
                  "dependency-mismatch" === result && 1 === rulesCount)
                ) {
                  dependencyMismatch = !0;
                  continue;
                }
                if (((dependencyMismatch = !1), "pending" === result))
                  return void (this.toHide = this.toHide.not(
                    this.errorsFor(element)
                  ));
                if (!result) return this.formatAndAdd(element, rule), !1;
              } catch (e) {
                throw (
                  (this.settings.debug &&
                    window.console &&
                    console.log(
                      "Exception occurred when checking element " +
                        element.id +
                        ", check the '" +
                        rule.method +
                        "' method.",
                      e
                    ),
                  e instanceof TypeError &&
                    (e.message +=
                      ".  Exception occurred when checking element " +
                      element.id +
                      ", check the '" +
                      rule.method +
                      "' method."),
                  e)
                );
              }
            }
            if (!dependencyMismatch)
              return (
                this.objectLength(rules) && this.successList.push(element), !0
              );
          },
          customDataMessage: function (element, method) {
            return (
              $(element).data(
                "msg" +
                  method.charAt(0).toUpperCase() +
                  method.substring(1).toLowerCase()
              ) || $(element).data("msg")
            );
          },
          customMessage: function (name, method) {
            var m = this.settings.messages[name];
            return m && (m.constructor === String ? m : m[method]);
          },
          findDefined: function () {
            for (var i = 0; i < arguments.length; i++)
              if (void 0 !== arguments[i]) return arguments[i];
          },
          defaultMessage: function (element, method) {
            return this.findDefined(
              this.customMessage(element.name, method),
              this.customDataMessage(element, method),
              (!this.settings.ignoreTitle && element.title) || void 0,
              $.validator.messages[method],
              "<strong>Warning: No message defined for " +
                element.name +
                "</strong>"
            );
          },
          formatAndAdd: function (element, rule) {
            var message = this.defaultMessage(element, rule.method),
              theregex = /\$?\{(\d+)\}/g;
            "function" == typeof message
              ? (message = message.call(this, rule.parameters, element))
              : theregex.test(message) &&
                (message = $.validator.format(
                  message.replace(theregex, "{$1}"),
                  rule.parameters
                )),
              this.errorList.push({
                message: message,
                element: element,
                method: rule.method,
              }),
              (this.errorMap[element.name] = message),
              (this.submitted[element.name] = message);
          },
          addWrapper: function (toToggle) {
            return (
              this.settings.wrapper &&
                (toToggle = toToggle.add(
                  toToggle.parent(this.settings.wrapper)
                )),
              toToggle
            );
          },
          defaultShowErrors: function () {
            var i, elements, error;
            for (i = 0; this.errorList[i]; i++)
              (error = this.errorList[i]),
                this.settings.highlight &&
                  this.settings.highlight.call(
                    this,
                    error.element,
                    this.settings.errorClass,
                    this.settings.validClass
                  ),
                this.showLabel(error.element, error.message);
            if (
              (this.errorList.length &&
                (this.toShow = this.toShow.add(this.containers)),
              this.settings.success)
            )
              for (i = 0; this.successList[i]; i++)
                this.showLabel(this.successList[i]);
            if (this.settings.unhighlight)
              for (i = 0, elements = this.validElements(); elements[i]; i++)
                this.settings.unhighlight.call(
                  this,
                  elements[i],
                  this.settings.errorClass,
                  this.settings.validClass
                );
            (this.toHide = this.toHide.not(this.toShow)),
              this.hideErrors(),
              this.addWrapper(this.toShow).show();
          },
          validElements: function () {
            return this.currentElements.not(this.invalidElements());
          },
          invalidElements: function () {
            return $(this.errorList).map(function () {
              return this.element;
            });
          },
          showLabel: function (element, message) {
            var place,
              group,
              errorID,
              error = this.errorsFor(element),
              elementID = this.idOrName(element),
              describedBy = $(element).attr("aria-describedby");
            error.length
              ? (error
                  .removeClass(this.settings.validClass)
                  .addClass(this.settings.errorClass),
                error.html(message))
              : ((error = $("<" + this.settings.errorElement + ">")
                  .attr("id", elementID + "-error")
                  .addClass(this.settings.errorClass)
                  .html(message || "")),
                (place = error),
                this.settings.wrapper &&
                  (place = error
                    .hide()
                    .show()
                    .wrap("<" + this.settings.wrapper + "/>")
                    .parent()),
                this.labelContainer.length
                  ? this.labelContainer.append(place)
                  : this.settings.errorPlacement
                  ? this.settings.errorPlacement(place, $(element))
                  : place.insertAfter(element),
                error.is("label")
                  ? error.attr("for", elementID)
                  : 0 ===
                      error.parents("label[for='" + elementID + "']").length &&
                    ((errorID = error
                      .attr("id")
                      .replace(/(:|\.|\[|\]|\$)/g, "\\$1")),
                    describedBy
                      ? describedBy.match(
                          new RegExp("\\b" + errorID + "\\b")
                        ) || (describedBy += " " + errorID)
                      : (describedBy = errorID),
                    $(element).attr("aria-describedby", describedBy),
                    (group = this.groups[element.name]),
                    group &&
                      $.each(this.groups, function (name, testgroup) {
                        testgroup === group &&
                          $("[name='" + name + "']", this.currentForm).attr(
                            "aria-describedby",
                            error.attr("id")
                          );
                      }))),
              !message &&
                this.settings.success &&
                (error.text(""),
                "string" == typeof this.settings.success
                  ? error.addClass(this.settings.success)
                  : this.settings.success(error, element)),
              (this.toShow = this.toShow.add(error));
          },
          errorsFor: function (element) {
            var name = this.idOrName(element),
              describer = $(element).attr("aria-describedby"),
              selector =
                "label[for='" + name + "'], label[for='" + name + "'] *";
            return (
              describer &&
                (selector =
                  selector + ", #" + describer.replace(/\s+/g, ", #")),
              this.errors().filter(selector)
            );
          },
          idOrName: function (element) {
            return (
              this.groups[element.name] ||
              (this.checkable(element)
                ? element.name
                : element.id || element.name)
            );
          },
          validationTargetFor: function (element) {
            return (
              this.checkable(element) &&
                (element = this.findByName(element.name)),
              $(element).not(this.settings.ignore)[0]
            );
          },
          checkable: function (element) {
            return /radio|checkbox/i.test(element.type);
          },
          findByName: function (name) {
            return $(this.currentForm).find("[name='" + name + "']");
          },
          getLength: function (value, element) {
            switch (element.nodeName.toLowerCase()) {
              case "select":
                return $("option:selected", element).length;
              case "input":
                if (this.checkable(element))
                  return this.findByName(element.name).filter(":checked")
                    .length;
            }
            return value.length;
          },
          depend: function (param, element) {
            return (
              !this.dependTypes[typeof param] ||
              this.dependTypes[typeof param](param, element)
            );
          },
          dependTypes: {
            boolean: function (param) {
              return param;
            },
            string: function (param, element) {
              return !!$(param, element.form).length;
            },
            function: function (param, element) {
              return param(element);
            },
          },
          optional: function (element) {
            var val = this.elementValue(element);
            return (
              !$.validator.methods.required.call(this, val, element) &&
              "dependency-mismatch"
            );
          },
          startRequest: function (element) {
            this.pending[element.name] ||
              (this.pendingRequest++, (this.pending[element.name] = !0));
          },
          stopRequest: function (element, valid) {
            this.pendingRequest--,
              this.pendingRequest < 0 && (this.pendingRequest = 0),
              delete this.pending[element.name],
              valid &&
              0 === this.pendingRequest &&
              this.formSubmitted &&
              this.form()
                ? ($(this.currentForm).submit(), (this.formSubmitted = !1))
                : !valid &&
                  0 === this.pendingRequest &&
                  this.formSubmitted &&
                  ($(this.currentForm).triggerHandler("invalid-form", [this]),
                  (this.formSubmitted = !1));
          },
          previousValue: function (element) {
            return (
              $.data(element, "previousValue") ||
              $.data(element, "previousValue", {
                old: null,
                valid: !0,
                message: this.defaultMessage(element, "remote"),
              })
            );
          },
          destroy: function () {
            this.resetForm(),
              $(this.currentForm).off(".validate").removeData("validator");
          },
        },
        classRuleSettings: {
          required: { required: !0 },
          email: { email: !0 },
          url: { url: !0 },
          date: { date: !0 },
          dateISO: { dateISO: !0 },
          number: { number: !0 },
          digits: { digits: !0 },
          creditcard: { creditcard: !0 },
        },
        addClassRules: function (className, rules) {
          className.constructor === String
            ? (this.classRuleSettings[className] = rules)
            : $.extend(this.classRuleSettings, className);
        },
        classRules: function (element) {
          var rules = {},
            classes = $(element).attr("class");
          return (
            classes &&
              $.each(classes.split(" "), function () {
                this in $.validator.classRuleSettings &&
                  $.extend(rules, $.validator.classRuleSettings[this]);
              }),
            rules
          );
        },
        normalizeAttributeRule: function (rules, type, method, value) {
          /min|max/.test(method) &&
            (null === type || /number|range|text/.test(type)) &&
            ((value = Number(value)), isNaN(value) && (value = void 0)),
            value || 0 === value
              ? (rules[method] = value)
              : type === method && "range" !== type && (rules[method] = !0);
        },
        attributeRules: function (element) {
          var method,
            value,
            rules = {},
            $element = $(element),
            type = element.getAttribute("type");
          for (method in $.validator.methods)
            "required" === method
              ? ((value = element.getAttribute(method)),
                "" === value && (value = !0),
                (value = !!value))
              : (value = $element.attr(method)),
              this.normalizeAttributeRule(rules, type, method, value);
          return (
            rules.maxlength &&
              /-1|2147483647|524288/.test(rules.maxlength) &&
              delete rules.maxlength,
            rules
          );
        },
        dataRules: function (element) {
          var method,
            value,
            rules = {},
            $element = $(element),
            type = element.getAttribute("type");
          for (method in $.validator.methods)
            (value = $element.data(
              "rule" +
                method.charAt(0).toUpperCase() +
                method.substring(1).toLowerCase()
            )),
              this.normalizeAttributeRule(rules, type, method, value);
          return rules;
        },
        staticRules: function (element) {
          var rules = {},
            validator = $.data(element.form, "validator");
          return (
            validator.settings.rules &&
              (rules =
                $.validator.normalizeRule(
                  validator.settings.rules[element.name]
                ) || {}),
            rules
          );
        },
        normalizeRules: function (rules, element) {
          return (
            $.each(rules, function (prop, val) {
              if (val === !1) return void delete rules[prop];
              if (val.param || val.depends) {
                var keepRule = !0;
                switch (typeof val.depends) {
                  case "string":
                    keepRule = !!$(val.depends, element.form).length;
                    break;
                  case "function":
                    keepRule = val.depends.call(element, element);
                }
                keepRule
                  ? (rules[prop] = void 0 === val.param || val.param)
                  : delete rules[prop];
              }
            }),
            $.each(rules, function (rule, parameter) {
              rules[rule] = $.isFunction(parameter)
                ? parameter(element)
                : parameter;
            }),
            $.each(["minlength", "maxlength"], function () {
              rules[this] && (rules[this] = Number(rules[this]));
            }),
            $.each(["rangelength", "range"], function () {
              var parts;
              rules[this] &&
                ($.isArray(rules[this])
                  ? (rules[this] = [
                      Number(rules[this][0]),
                      Number(rules[this][1]),
                    ])
                  : "string" == typeof rules[this] &&
                    ((parts = rules[this]
                      .replace(/[\[\]]/g, "")
                      .split(/[\s,]+/)),
                    (rules[this] = [Number(parts[0]), Number(parts[1])])));
            }),
            $.validator.autoCreateRanges &&
              (null != rules.min &&
                null != rules.max &&
                ((rules.range = [rules.min, rules.max]),
                delete rules.min,
                delete rules.max),
              null != rules.minlength &&
                null != rules.maxlength &&
                ((rules.rangelength = [rules.minlength, rules.maxlength]),
                delete rules.minlength,
                delete rules.maxlength)),
            rules
          );
        },
        normalizeRule: function (data) {
          if ("string" == typeof data) {
            var transformed = {};
            $.each(data.split(/\s/), function () {
              transformed[this] = !0;
            }),
              (data = transformed);
          }
          return data;
        },
        addMethod: function (name, method, message) {
          ($.validator.methods[name] = method),
            ($.validator.messages[name] =
              void 0 !== message ? message : $.validator.messages[name]),
            method.length < 3 &&
              $.validator.addClassRules(name, $.validator.normalizeRule(name));
        },
        methods: {
          required: function (value, element, param) {
            if (!this.depend(param, element)) return "dependency-mismatch";
            if ("select" === element.nodeName.toLowerCase()) {
              var val = $(element).val();
              return val && val.length > 0;
            }
            return this.checkable(element)
              ? this.getLength(value, element) > 0
              : value.length > 0;
          },
          email: function (value, element) {
            return (
              this.optional(element) ||
              /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
                value
              )
            );
          },
          url: function (value, element) {
            // Copyright (c) 2010-2013 Diego Perini, MIT licensed
            // https://gist.github.com/dperini/729294
            // see also https://mathiasbynens.be/demo/url-regex
            // modified to allow protocol-relative URLs
            return (
              this.optional(element) ||
              /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
                value
              )
            );
          },
          date: function (value, element) {
            return (
              this.optional(element) ||
              !/Invalid|NaN/.test(new Date(value).toString())
            );
          },
          dateISO: function (value, element) {
            return (
              this.optional(element) ||
              /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(
                value
              )
            );
          },
          number: function (value, element) {
            return (
              this.optional(element) ||
              /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value)
            );
          },
          digits: function (value, element) {
            return this.optional(element) || /^\d+$/.test(value);
          },
          creditcard: function (value, element) {
            if (this.optional(element)) return "dependency-mismatch";
            if (/[^0-9 \-]+/.test(value)) return !1;
            var n,
              cDigit,
              nCheck = 0,
              nDigit = 0,
              bEven = !1;
            if (
              ((value = value.replace(/\D/g, "")),
              value.length < 13 || value.length > 19)
            )
              return !1;
            for (n = value.length - 1; n >= 0; n--)
              (cDigit = value.charAt(n)),
                (nDigit = parseInt(cDigit, 10)),
                bEven && (nDigit *= 2) > 9 && (nDigit -= 9),
                (nCheck += nDigit),
                (bEven = !bEven);
            return nCheck % 10 === 0;
          },
          minlength: function (value, element, param) {
            var length = $.isArray(value)
              ? value.length
              : this.getLength(value, element);
            return this.optional(element) || length >= param;
          },
          maxlength: function (value, element, param) {
            var length = $.isArray(value)
              ? value.length
              : this.getLength(value, element);
            return this.optional(element) || length <= param;
          },
          rangelength: function (value, element, param) {
            var length = $.isArray(value)
              ? value.length
              : this.getLength(value, element);
            return (
              this.optional(element) ||
              (length >= param[0] && length <= param[1])
            );
          },
          min: function (value, element, param) {
            return this.optional(element) || value >= param;
          },
          max: function (value, element, param) {
            return this.optional(element) || value <= param;
          },
          range: function (value, element, param) {
            return (
              this.optional(element) || (value >= param[0] && value <= param[1])
            );
          },
          equalTo: function (value, element, param) {
            var target = $(param);
            return (
              this.settings.onfocusout &&
                target
                  .off(".validate-equalTo")
                  .on("blur.validate-equalTo", function () {
                    $(element).valid();
                  }),
              value === target.val()
            );
          },
          remote: function (value, element, param) {
            if (this.optional(element)) return "dependency-mismatch";
            var validator,
              data,
              previous = this.previousValue(element);
            return (
              this.settings.messages[element.name] ||
                (this.settings.messages[element.name] = {}),
              (previous.originalMessage =
                this.settings.messages[element.name].remote),
              (this.settings.messages[element.name].remote = previous.message),
              (param = ("string" == typeof param && { url: param }) || param),
              previous.old === value
                ? previous.valid
                : ((previous.old = value),
                  (validator = this),
                  this.startRequest(element),
                  (data = {}),
                  (data[element.name] = value),
                  $.ajax(
                    $.extend(
                      !0,
                      {
                        mode: "abort",
                        port: "validate" + element.name,
                        dataType: "json",
                        data: data,
                        context: validator.currentForm,
                        success: function (response) {
                          var errors,
                            message,
                            submitted,
                            valid = response === !0 || "true" === response;
                          (validator.settings.messages[element.name].remote =
                            previous.originalMessage),
                            valid
                              ? ((submitted = validator.formSubmitted),
                                validator.prepareElement(element),
                                (validator.formSubmitted = submitted),
                                validator.successList.push(element),
                                delete validator.invalid[element.name],
                                validator.showErrors())
                              : ((errors = {}),
                                (message =
                                  response ||
                                  validator.defaultMessage(element, "remote")),
                                (errors[element.name] = previous.message =
                                  $.isFunction(message)
                                    ? message(value)
                                    : message),
                                (validator.invalid[element.name] = !0),
                                validator.showErrors(errors)),
                            (previous.valid = valid),
                            validator.stopRequest(element, valid);
                        },
                      },
                      param
                    )
                  ),
                  "pending")
            );
          },
        },
      });
    var ajax,
      pendingRequests = {};
    $.ajaxPrefilter
      ? $.ajaxPrefilter(function (settings, _, xhr) {
          var port = settings.port;
          "abort" === settings.mode &&
            (pendingRequests[port] && pendingRequests[port].abort(),
            (pendingRequests[port] = xhr));
        })
      : ((ajax = $.ajax),
        ($.ajax = function (settings) {
          var mode = ("mode" in settings ? settings : $.ajaxSettings).mode,
            port = ("port" in settings ? settings : $.ajaxSettings).port;
          return "abort" === mode
            ? (pendingRequests[port] && pendingRequests[port].abort(),
              (pendingRequests[port] = ajax.apply(this, arguments)),
              pendingRequests[port])
            : ajax.apply(this, arguments);
        }));
  }),
  "undefined" == typeof C3P)
)
  var C3P = {};
!(function ($, C3P) {
  "use strict";
  $.extend(
    C3P,
    {},
    {
      enhancements: {},
      form_rules: {},
      strings: {},
      models: {},
      collections: {},
      views: {},
      templates: {},
      App: {},
      cache: {},
    }
  ),
    (C3P.form_rulesets = C3P.form_rules),
    (C3P.language = new RegExp(/app\/en/).test(window.location) ? "en" : "fr"),
    (C3P.get_cache = function (id) {
      return C3P.cache[id] ? C3P.cache[id] : null;
    }),
    (C3P.set_cache = function (id, data) {
      C3P.cache[id] = data;
    }),
    (C3P.get_lang_string = function (identifier, lang, strict) {
      if (
        (lang || (lang = this.language),
        identifier.match(/\//) && (identifier = identifier.replace(/\//g, ".")),
        !C3P.strings[lang])
      )
        return "";
      var ret = _.getPath(C3P.strings[lang], identifier);
      return ret || "";
    }),
    (C3P.string = C3P.get_lang_string),
    (C3P.handle_hash = function (handle_blank) {
      if (window.location.hash)
        var $el = $(
          'a[data-toggle="tab"][data-target="' + window.location.hash + '"]'
        );
      else if ("" == window.location.hash && handle_blank) {
        var $el = $('[data-initial="1"]'),
          tmp = $(
            'a[data-toggle="tab"][data-target="#' + $el.attr("id") + '"]'
          );
        tmp.length && ($el = tmp);
      }
      $el && $el.length > 0 && $el.tab("show");
    }),
    (C3P.ajax_options = {
      dataType: "json",
      data: { ajax: 1 },
      beforeSubmit: function (formdata, $form, options) {
        var $submit = $form.find('[type="submit"]');
        $submit.length && $submit.button && $submit.button("loading");
      },
      success: function (responseText, statusText, xhr, form) {
        var $form = $(form);
        if (
          ($form.find("[generated=1]").remove(),
          responseText.success && 1 == responseText.success)
        )
          $form.trigger("ajaxsuccess", responseText);
        else {
          if (
            ($form.find('[type="submit"]').button("reset"), responseText.errors)
          )
            try {
              $form.validate().showErrors(responseText.errors);
            } catch (e) {}
          if (responseText.captcha_key && $("#captcha_key").length) {
            var ckey = responseText.captcha_key;
            $("#captcha_key").val(ckey),
              $("#captcha_image").prop("src", "/captcha/contact/" + ckey);
          }
          $form.trigger("ajaxerror", responseText);
        }
        responseText.callback &&
          _.isFunction(responseText.callback) &&
          $.globalEval(responseText.callback);
      },
      error: function (xhr, statusText, errorThrown) {},
      complete: function () {},
    }),
    (C3P.flowplayer_options = {
      key: ["$126484623553218", "$987632418391096"].join(", "),
      swf: "/swf/flowplayer.swf",
      swfHls: "/swf/flowplayerhls.swf",
      embed: !1,
    }),
    (C3P.setup_flowplayer = function () {
      $("[data-flowplayer]").each(function (i, e) {
        var $el = $(e);
        if (!$el.attr("data-flowplayered")) {
          var defaults = C3P.flowplayer_options,
            opts = $el.data(),
            options = _.extend(defaults, opts);
          $el.flowplayer(options), $el.attr("data-flowplayered", 1);
        }
      });
    }),
    (C3P.setup_form = function (the_form, options) {
      var $form = $(the_form);
      if (
        !$form.attr("data-form-ready") ||
        1 != $form.attr("data-form-ready")
      ) {
        $form.attr("data-form-ready", 1);
        var view_name = $form.attr("data-view");
        if (view_name && "" !== view_name && C3P.views[view_name]) {
          var view = new C3P.views[view_name]({ el: the_form });
          return (
            C3P.App.Form || (C3P.App.Form = []), void C3P.App.Form.push(view)
          );
        }
        var form_id = $form.data("ruleset") || "default",
          form_rules = C3P.form_rulesets[form_id] || {},
          form_cb = form_rules.callback || jQuery.noop;
        "function" == typeof form_cb &&
          form_cb.call(this, $form, form_rules, options),
          $(the_form).data("noajax") ||
            ("function" == typeof $.fn.validate && $form.validate(form_rules));
      }
    }),
    ($.fn.tracklink = function (url) {
      return url || (url = $(this).attr("href"))
        ? ($.ajax({
            url: "outgoing",
            data: { url: url },
            async: !0,
            global: !1,
            method: "get",
          }),
          this)
        : this;
    }),
    ($.tracklink = $.fn.tracklink),
    ($.nano = function (template, data) {
      return template.replace(/\{([\w\.]*)\}/g, function (str, key) {
        var keys = key.split("."),
          value = data[keys.shift()];
        return (
          $.each(keys, function () {
            value = value[this];
          }),
          null === value || void 0 === value ? "" : value
        );
      });
    }),
    ($.fn.togglefields = function (option) {
      return this.find("select, input, textarea")
        .each(function () {
          var $this = $(this);
          "enable" == option
            ? $this.removeProp("disabled").removeAttr("disabled")
            : $this.prop("disabled", !0).attr("disabled", !0);
        })
        .end();
    }),
    ($.fn.setup_enhancements = function (option) {
      var func = function () {
        var $this = $(this),
          eid = $this.attr("data-enhanceid")
            ? $this.attr("data-enhanceid")
            : "default",
          opts = $this.data(),
          runner = function (ehc) {
            var options = $.extend({}, ehc.options, opts, {});
            _.isFunction(ehc.callback) && ehc.callback.call($this, options);
          };
        (eid = eid.match(/ /) ? eid.split(" ") : [eid]),
          _.each(eid, function (real_eid) {
            C3P.enhancements[real_eid] &&
              (_.isArray(C3P.enhancements[real_eid])
                ? _.each(C3P.enhancements[real_eid], runner)
                : runner(C3P.enhancements[real_eid]));
          });
      };
      return (
        this.each(function () {
          $(this).hasClass("enhancement") && func.call(this),
            $(this)
              .find(".enhancement")
              .not(".enhanced")
              .each(func)
              .addClass("enhanced");
        }),
        this
      );
    }),
    ($.fn.fixlinks = function (option) {
      return this.each(function () {
        var $this = $(this),
          href = $this.prop("href");
        if (!$this.attr("data-dismiss") && !/mailto/.test(href))
          return (
            /pdf$/.test(href) && $this.prop("target", "_blank"),
            $this.hasClass("no-link-enhancement")
              ? void $this.one("click", function () {
                  $(this).tracklink();
                })
              : void (
                  RegExp("/" + document.location.host + "/").test(href) ||
                  $this.prop("target", "_blank").one("click", function () {
                    $(this).tracklink();
                  })
                )
          );
      });
    }),
    ($.fn.pulse = function (properties, duration, numTimes, interval) {
      return (
        (void 0 === duration || duration < 0) && (duration = 500),
        duration < 0 && (duration = 500),
        void 0 === numTimes && (numTimes = 1),
        numTimes < 0 && (numTimes = 0),
        (void 0 === interval || interval < 0) && (interval = 0),
        this.each(function () {
          var $this = jQuery(this),
            origProperties = {};
          for (var property in properties)
            origProperties[property] = $this.css(property);
          for (var i = 0; i < numTimes; i++)
            window.setTimeout(function () {
              $this.animate(properties, {
                duration: duration / 2,
                complete: function () {
                  $this.animate(origProperties, duration / 2);
                },
              });
            }, (duration + interval) * i);
        })
      );
    }),
    ($.fn.loadText = function (option) {
      var opt = $.extend(
        {},
        { identifier: "loading_text", wrapclass: "loading" },
        option
      );
      return this.each(function () {
        var $this = $(this);
        $this.html(
          '<div class="' +
            opt.wrapclass +
            '">' +
            C3P.get_lang_string(opt.identifier) +
            "</div>"
        );
      });
    }),
    ($.fn.loadAjax = function () {
      var $this = $(this),
        target = $this.data("target"),
        $target = $(target);
      $target.data("tabcontroller", $this),
        ($this.data("noshow") && 1 == $this.data("noshow")) ||
          ($target.data("loaded") ||
            $target
              .find(".tab-inner")
              .html(
                '<div class="loading">' +
                  C3P.get_lang_string("loading_text") +
                  "</div>"
              )
              .load("ajax", { page: target }, function (response, status, xhr) {
                var $this = $(this);
                if ("error" == status) {
                  var $tmp = $('<div class="extreme-bottom-margin"></div>');
                  $tmp
                    .append(
                      $(
                        '<h3 class="less-spacing-top">' +
                          C3P.get_lang_string("ajaxerror_head") +
                          "</h3>"
                      ),
                      $(
                        "<p>" + C3P.get_lang_string("ajaxerror_line1") + "</p>"
                      ),
                      $(
                        '<button class="btn btn-primary">' +
                          C3P.get_lang_string("ajaxerror_button") +
                          "</button>"
                      )
                    )
                    .on("click", function () {
                      $(this)
                        .parents(".tab-pane")
                        .data("tabcontroller")
                        .trigger("show");
                    }),
                    $this.html($tmp);
                } else {
                  var $tp = $this.parent(".tab-pane");
                  $tp
                    .data("loaded", 1)
                    .find(".tab-inner")
                    .hide()
                    .end()
                    .find("a")
                    .fixlinks()
                    .end()
                    .setup_enhancements(),
                    $tp.find(".tab-inner").fadeIn(),
                    C3P.setup_flowplayer();
                }
              }),
          (window.location.hash = target));
    }),
    ($.fn.serializeObject = function () {
      var o = {},
        a = this.serializeArray();
      return (
        $.each(a, function () {
          o[this.name]
            ? (o[this.name].push || (o[this.name] = [o[this.name]]),
              o[this.name].push(this.value || ""))
            : (o[this.name] = this.value || "");
        }),
        o
      );
    })
    /*
     * serializeForm
     * https://github.com/danheberden/jquery-serializeForm
     *
     * Copyright (c) 2012 Dan Heberden
     * Licensed under the MIT, GPL licenses.
     */,
    ($.fn.serializeForm = function () {
      if (this.length < 1) return !1;
      var data = {},
        lookup = data,
        selector = ':input[type!="checkbox"][type!="radio"], input:checked',
        parse = function () {
          if (!this.disabled) {
            var named = this.name.replace(/\[([^\]]+)?\]/g, ",$1").split(","),
              cap = named.length - 1,
              $el = $(this);
            if (named[0]) {
              for (var i = 0; i < cap; i++)
                lookup = lookup[named[i]] =
                  lookup[named[i]] ||
                  ("" === named[i + 1] || "0" === named[i + 1] ? [] : {});
              void 0 !== lookup.length
                ? lookup.push($el.val())
                : (lookup[named[cap]] = $el.val()),
                (lookup = data);
            }
          }
        };
      return (
        this.filter(selector).each(parse), this.find(selector).each(parse), data
      );
    }),
    ($.cookie = function (key, value, options) {
      if (
        arguments.length > 1 &&
        (!/Object/.test(Object.prototype.toString.call(value)) ||
          null === value ||
          void 0 === value)
      ) {
        if (
          ((options = $.extend({}, options)),
          (null !== value && void 0 !== value) || (options.expires = -1),
          "number" == typeof options.expires)
        ) {
          var days = options.expires,
            t = (options.expires = new Date());
          t.setDate(t.getDate() + days);
        }
        return (
          (value = String(value)),
          (document.cookie = [
            encodeURIComponent(key),
            "=",
            options.raw ? value : encodeURIComponent(value),
            options.expires ? "; expires=" + options.expires.toUTCString() : "",
            options.path ? "; path=" + options.path : "",
            options.domain ? "; domain=" + options.domain : "",
            options.secure ? "; secure" : "",
          ].join(""))
        );
      }
      options = value || {};
      for (
        var pair,
          decode = options.raw
            ? function (s) {
                return s;
              }
            : decodeURIComponent,
          pairs = document.cookie.split("; "),
          i = 0;
        (pair = pairs[i] && pairs[i].split("="));
        i++
      )
        if (decode(pair[0]) === key) return decode(pair[1] || "");
      return null;
    }),
    ($.roundNumber = function (num, prec) {
      return (
        _.isUndefined(prec) && (prec = 2),
        (num = parseFloat(num)),
        parseFloat(num.toFixed(prec))
      );
    }),
    ($.fn.setup_form = function (options) {
      return this.length
        ? "FORM" === this.get(0).tagName
          ? this.each(function () {
              var $this = $(this);
              C3P.setup_form($this, options);
            })
          : this.find("form").each(function () {
              var $this = $(this);
              C3P.setup_form($this, options);
            })
        : this;
    }),
    ($.nl2br = function (str) {
      return _.escape(str).replace(/\n/g, "<br />");
    });
})(jQuery, C3P),
  !(function ($) {
    "use strict";
    C3P.views.BaseResponsiveView = Backbone.View.extend({
      myId: "C3P.views.BaseResponsiveView",
      initialize: function (options) {
        return (this.options = options || {}), this;
      },
      setup_enquire: function () {
        var that = this;
        return this.mediaqueries
          ? (_.each(this.mediaqueries(), function (settings, mq) {
              var shouldDegrade = !1;
              _.each(
                ["match", "unmatch", "destroy", "setup"],
                function (action) {
                  settings[action] &&
                    (_.isFunction(settings[action])
                      ? (settings[action] = _.bind(settings[action], that))
                      : _.isString(settings[action]) &&
                        (settings[action] = _.bind(
                          that[settings[action]],
                          that
                        )));
                }
              ),
                settings.shouldDegrade &&
                  (shouldDegrade = settings.shouldDegrade),
                enquire.register(mq, settings, shouldDegrade);
            }),
            this)
          : this;
      },
    });
  })(window.jQuery),
  !(function ($) {
    "use strict";
    C3P.views.ResponsiveForm = C3P.views.BaseResponsiveView.extend({
      myId: "C3P.views.ResponsiveForm",
      initialize: function (options) {
        this._super.apply(this, arguments),
          this.setup_enquire(),
          this.setup_validation(),
          this.setup_ajaxform();
      },
      events: function () {
        return { submit: "handle_submit" };
      },
      setup_validation: function () {
        var rules = this.validation_rules();
        Object.getOwnPropertyNames(rules).length && this.$el.validate(rules);
      },
      setup_ajaxform: function () {},
      validation_rules: function () {
        return {};
      },
      ajax: function () {
        var that = this;
        return {
          dataType: "json",
          data: { ajax: 1 },
          beforeSubmit: _.bind(function (formdata, $form, options) {
            var $submit = $form.find('[type="submit"]');
            $submit.length && $submit.button && $submit.button("loading");
          }, that),
          success: _.bind(function (responseJSON, statusText, xhr, form) {
            var $form = $(form);
            if (
              ($form.find("[generated=1]").remove(),
              responseJSON.success && 1 == responseJSON.success)
            )
              $form.trigger("ajaxsuccess", responseJSON, xhr);
            else {
              if (
                (responseJSON.errors &&
                  $form.validate().showErrors(responseJSON.errors),
                responseJSON.captcha_key && $("#captcha_key").length)
              ) {
                var ckey = responseJSON.captcha_key;
                $("#captcha_key").val(ckey),
                  $("#captcha_image").prop("src", "/captcha/contact/" + ckey);
              }
              $form.trigger("ajaxerror", responseJSON, xhr);
            }
            responseJSON.callback &&
              _.isFunction(responseJSON.callback) &&
              $.globalEval(responseJSON.callback);
          }, that),
          error: _.bind(function (xhr, statusText, errorThrown) {
            this.$el.trigger(
              "ajaxerror",
              xhr.responseText ? xhr.responseText : {},
              xhr
            );
          }, that),
          complete: _.bind(function (xhr, statusText) {
            var $submit = this.$el.find('[type="submit"]');
            $submit.length && $submit.button && $submit.button("reset");
          }, that),
        };
      },
      handle_submit: function (e) {
        e.isDefaultPrevented(),
          e.preventDefault(),
          this.$el.valid() && this.$el.ajaxSubmit(this.ajax());
      },
    });
  })(window.jQuery),
  !(function ($) {
    "use strict";
    C3P.views.Page = C3P.views.BaseResponsiveView.extend({
      myId: "C3P.views.page",
      initialize: function (options) {
        this._super.apply(this, arguments);
        return (
          (this.$body = $("body")),
          (this.$lang = $("#lang-toggle")),
          this.setup_back_to_top(),
          this.setup_quiz(),
          this
        );
      },
      events: function () {
        return {
          "click .quiz-reset": "handle_quiz_reset",
          keydown: "handle_keypress",
        };
      },
      setup_back_to_top: function () {
        var $back_to_top = $("#back-to-top-wrapper"),
          offset = 400,
          duration = 500;
        $back_to_top.on("click", function (e) {
          return (
            e.preventDefault(),
            $("html, body").animate({ scrollTop: 0 }, duration),
            $(e.target).blur(),
            _paq.push([
              "trackEvent",
              "page-event",
              "back-to-top",
              window.location,
            ]),
            !1
          );
        }),
          $(window).on("scroll", function () {
            $(this).scrollTop() > offset
              ? $back_to_top.addClass("show-btn")
              : $back_to_top.removeClass("show-btn");
          });
      },
      setup_quiz: function () {
        for (
          var quiz_data = C3P.strings[C3P.language].quiz_questions,
            quiz_answers = {},
            correct_responses =
              C3P.strings[C3P.language].quiz_responses.correct,
            incorrect_responses =
              C3P.strings[C3P.language].quiz_responses.incorrect,
            random_item = function (arr) {
              return arr[parseInt(arr.length * Math.random())];
            },
            check_answer = function (choice, qid, obj) {
              var get_answer = function (qid, obj) {
                for (var key in obj)
                  if (obj.hasOwnProperty(key) && key === qid)
                    return parseInt(obj[key]);
              };
              return get_answer(qid, obj) === parseInt(choice)
                ? [1, random_item(correct_responses)]
                : [0, random_item(incorrect_responses)];
            },
            i = 0;
          i < quiz_data.length;
          i++
        ) {
          var prop_id = quiz_data[i].id,
            prop_answer = quiz_data[i].answer;
          quiz_answers[prop_id] = parseInt(prop_answer);
        }
        $(".quiz-choice").on("click", function (e) {
          e.preventDefault();
          var $targ = $(e.target),
            $targ_wrapper = $targ.parent(),
            $quiz_wrapper = $targ.parents(".quiz"),
            $qid = $quiz_wrapper.attr("id"),
            $choice = $targ.attr("data-option"),
            $result = $targ_wrapper.siblings(".quiz-result"),
            $expl = $targ_wrapper.siblings(".quiz-explanation"),
            answer = check_answer($choice, $qid, quiz_answers),
            paq_holler = "quiz id: " + $qid + ", answer: " + answer[0];
          $targ.siblings().removeClass("correct"),
            $quiz_wrapper.removeClass("correct").removeClass("incorrect"),
            $result
              .hide()
              .empty()
              .append('<span class="icon-quiz"></span>' + answer[1])
              .fadeIn("fast"),
            1 === answer[0]
              ? ($targ.addClass("correct"),
                $quiz_wrapper.addClass("correct"),
                $expl.fadeIn("fast"),
                _paq.push([
                  "trackEvent",
                  "quiz-event",
                  "quiz-choice-click",
                  paq_holler + ", correct!",
                ]))
              : ($quiz_wrapper.addClass("incorrect"),
                _paq.push([
                  "trackEvent",
                  "quiz-event",
                  "quiz-choice-click",
                  paq_holler + ", incorrect",
                ]));
        });
      },
      handle_quiz_reset: function (e) {
        e.preventDefault();
        var targ = $(e.target),
          quiz_wrapper = targ.parent().siblings(".quiz"),
          current_offset = targ.offset().top - $(document).scrollTop(),
          info_well_offset = $(".info-well").offset().top - 10,
          duration = 500;
        quiz_wrapper.removeClass("correct").removeClass("incorrect"),
          quiz_wrapper.find(".correct").removeClass("correct"),
          quiz_wrapper.children(".quiz-result").empty(),
          quiz_wrapper.children(".quiz-explanation").hide(),
          $(document).scrollTop(targ.offset().top - current_offset),
          setTimeout(function () {
            $("html, body").animate({ scrollTop: info_well_offset }, duration);
          }, 150),
          _paq.push(["trackEvent", "quiz-event", "quiz-reset-click"]);
      },
      handle_keypress: function (e) {
        var prev_url = $(".comic-link-prev").attr("href"),
          next_url = $(".comic-link-next").attr("href");
        if (
          document.body.contains($(".comic-link-prev")[0]) ||
          document.body.contains($(".comic-link-next")[0]) ||
          (37 !== e.keyCode && 39 !== e.keyCode)
        ) {
          if (37 === e.keyCode) {
            if (void 0 === prev_url) return;
            window.location = prev_url;
          }
          if (39 === e.keyCode) {
            if (void 0 === next_url) return;
            window.location = next_url;
          }
        }
      },
    });
  })(window.jQuery),
  !(function ($) {
    "use strict";
    $(document).on("ready", function () {
      (C3P.App.Page = new C3P.views.Page({ el: $("body") })),
        $("body").setup_enhancements(),
        $("a").fixlinks(),
        ($.fn.down = function () {
          for (var el = this[0] && this[0].firstChild; el && 1 != el.nodeType; )
            el = el.nextSibling;
          return $(el);
        });
    });
  })(window.jQuery),
  (function () {
    "use strict";
    var id = "contact",
      lb = {
        options: {},
        callback: function (options) {
          var success_message = C3P.strings[C3P.language].form.contact_success;
          $("#contact").validate({
            rules: {
              contact_name: "required",
              contact_email: "required",
              contact_comments: "required",
              captcha_response: "required",
            },
            messages: {
              contact_name: C3P.strings[C3P.language].form.field_required,
              contact_email: C3P.strings[C3P.language].form.email_invalid,
              contact_comments: C3P.strings[C3P.language].form.field_required,
              captcha_response: C3P.strings[C3P.language].form.field_required,
            },
            errorElement: "p",
            errorClass: "help-block",
            highlight: function (element) {
              $(element).closest(".form-group").addClass("has-error");
            },
            unhighlight: function (element) {
              $(element).closest(".form-group").removeClass("has-error");
            },
            errorPlacement: function (error, element) {
              $(element)
                .closest(".form-group")
                .children("p.help-block")
                .remove(),
                $(element).closest(".form-group").append(error);
            },
            submitHandler: function (form) {
              return (
                $.ajax({
                  type: "POST",
                  url: "",
                  data: $(form).serialize(),
                  success: function (data) {
                    $("#contact").hide(),
                      $("#contact").parent().append(success_message),
                      $("html, body").animate({ scrollTop: 0 });
                  },
                  error: function (jqXHR) {
                    var result = JSON.parse(jqXHR.responseText);
                    $("#contact").validate().showErrors(result.errors),
                      $("#captcha_key").val(result.captcha_key),
                      $("#captcha_image").attr(
                        "src",
                        "/captcha/contact/" + result.captcha_key
                      ),
                      $("#captcha_response").val("");
                  },
                }),
                !1
              );
            },
          });
        },
      };
    "undefined" == typeof C3P.enhancements[id]
      ? (C3P.enhancements[id] = [lb])
      : C3P.enhancements[id].push(lb);
  })(window.jQuery),
  (window.C3P.strings = {
    en: {
      game_strings: {
        play: "Play",
        pause: "Pause",
        fs_toggle: "Toggle fullscreen",
        mute: "Mute",
        unmute: "Unmute",
        resume: "Pick up where you left off",
        start_game: "Start game",
        error_msg: "Sorry, this browser cannot play the game!",
      },
      site_name: "Zoe & Molly Online",
      back_to_start: "Back to start",
      back_to_main: "Back to main comics page",
      prev_text: "Previous",
      next_text: "Next",
      back_to_top: "Back to top",
      c3p_text: "Canadian Centre for Child Protection",
      supported_by_text: "Supported by",
      form: {
        processing: "Processing",
        captcha_invalid:
          "The text you supplied did not match the image. Please try again.",
        field_required: "This field is required",
        email_invalid:
          "Please enter a valid email address in the form of example@example.com",
        url_invalid: "Please enter a URL in the form of http://www.example.com",
        contact_success:
          '<h3>Your message has been sent!</h3> <p>For further information about the Canadian Centre and our programs and services visit <a href="https://protectchildren.ca/app/en/">protectchildren.ca</a>.</p>\n',
        question_success:
          '<h3>Thank you for your question</h3> <p>Someone from the Canadian Centre for Child Protection will review your question and answer as soon as possible.</p> <p>For further information about the Canadian Centre and our programs and services visit <a href="https://protectchildren.ca/app/en/">protectchildren.ca</a>.</p>\n',
      },
      no_html5_video_notice:
        "Sorry, HTML5 video is not supported by this browser.",
      nojs_notice:
        '<p class="small"><strong>Please Note</strong>: This website makes use of <strong>javascript</strong> to optimize your browsing experience.</p> <p class="small">Unfortunately, your browser appears to have javascript disabled – please enable it ensure your visit is optimal. If you prefer to continue with the settings you’re using, please be aware that not all site functionality may be available.</p>\n',
      old_browser_notice:
        '<p class="small"><strong>Please Note</strong>: This website is optimized for modern web browsers,  and does not fully support your version of Internet Explorer. Please be aware that not all site functionality may be available.</p>\n',
      comics: "Comic Books",
      comic_grade3: "Grade 3 comic",
      comic_grade4: "Grade 4 comic",
      contact: "Contact Us",
      game: "Game",
      game_credits: "Game Music and Sound Credits",
      guess_what: "Guess What!?!",
      not_found: "Page not found",
      privacy_policy: "Privacy Policy",
      teachers: "Teachers",
      terms_of_use: "Terms of Use",
      quiz_responses: {
        correct: ["Correct!", "That’s right!", "Good job!"],
        incorrect: ["Try again!", "Oops! Wrong answer"],
      },
      quiz_questions: [
        {
          id: "q1",
          question: "1. It is okay to post pictures online",
          answer: "2",
          explanation:
            "Always check with a safe adult before posting anything online. And remember, the Internet is a public place; whatever you post can be seen by everyone.",
          img: "tyler1.png",
        },
        {
          id: "q2",
          question: "2. Kids see things online that are weird or gross",
          answer: "2",
          explanation:
            "You may see things online that are gross or weird. That’s not your fault. Log off. Talk to a safe adult about what happened.",
          img: "zoe1.png",
        },
        {
          id: "q3",
          question: "3. Kids get in trouble when they see bad pictures online",
          answer: "0",
          explanation:
            "Not all websites are okay for kids. You are not in trouble. Log off. Talk to a safe adult about what happened.",
          img: "mac.png",
        },
        {
          id: "q4",
          question:
            "4. When kids see something online that is weird, they should log off",
          answer: "1",
          explanation:
            "If something you see online makes you feel weird, log off. Talk to a safe adult about what happened.",
          img: "molly1.png",
        },
        {
          id: "q5",
          question: "5. It is okay to send pictures or videos through an app",
          answer: "2",
          explanation:
            "Always check with a safe adult before sending a photo or video to someone. Once a photo or video is sent you lose control over what happens to it.",
          img: "octopus.png",
        },
        {
          id: "q6",
          question: "6. Video chats can be saved",
          answer: "1",
          explanation:
            "Video chats and live-stream videos can be saved. Images and videos could be shared with other people. Have permission from a safe adult before chatting online.",
          img: "fish.png",
        },
        {
          id: "q7",
          question:
            "7. It is okay to open attachments from people you don’t know",
          answer: "0",
          explanation:
            "Attachments from people not on your contact list could contain viruses.",
          img: "zoe2.png",
        },
        {
          id: "q8",
          question:
            "8. It is okay to answer someone who asks weird questions online",
          answer: "0",
          explanation:
            "If someone starts asking weird questions stop messaging that person. Save the message. Talk to a safe adult about it.",
          img: "molly2.png",
        },
        {
          id: "q9",
          question:
            "9. If kids do something online that isn’t safe, they will get in trouble",
          answer: "0",
          explanation:
            "We all make mistakes. Tell a safe adult about what happened. An adult’s job is to help keep kids safe.",
          img: "turtle.png",
        },
        {
          id: "q10",
          question:
            "10. If someone gets mad at you online, then you should do what they want",
          answer: "0",
          explanation:
            "It is not okay for someone to get mad at you when you set your limits. People should respect your answer. Don’t respond and log off. Save the message. Talk to a safe adult about what happened.",
          img: "tyler2.png",
        },
      ],
    },
    fr: {
      game_strings: {
        play: "Jouer",
        pause: "Pause",
        fs_toggle: "Mode plein écran",
        mute: "Couper le son",
        unmute: "Remettre le son",
        resume: "Reprendre le jeu",
        start_game: "Commencer le jeu",
        error_msg: "Le jeu n’est pas compatible avec ton navigateur!",
      },
      site_name: "CyberJulie",
      back_to_start: "Revenir au début",
      back_to_main: "Revenir à la page de présentation des bandes dessinées",
      prev_text: "Précédente",
      next_text: "Suivante",
      back_to_top: "Remonter en haut",
      c3p_text: "Le Centre canadien de protection de l’enfance",
      supported_by_text: "Avec le soutien de",
      form: {
        processing: "Traitement en cours",
        captcha_invalid:
          "Votre texte ne correspondait pas à l’image. Essayez de nouveau.",
        field_required: "Ce champ est obligatoire",
        email_invalid:
          "Veuillez entrer une adresse courriel valide sous la forme exemple@exemple.com",
        url_invalid:
          "Veuillez entrer une adresse URL valide sous la forme http://www.exemple.com",
        contact_success:
          '<h3>Message envoyé!</h3> <p>Pour vous renseigner sur le CCPE et ses programmes et services, cliquez <a href="https://protegeonsnosenfants.ca/app/fr/">protegeonsnosenfants.ca</a>.</p>\n',
        question_success:
          '<h3>Merci de votre question</h3> <p>Un membre du Centre canadien de protection de l’enfance se penchera sur votre question et vous répondra dès que possible.</p> <p>Pour vous renseigner sur le CCPE et ses programmes et services, cliquez <a href="https://protegeonsnosenfants.ca/app/fr/">protegeonsnosenfants.ca</a>.</p>\n',
      },
      no_html5_video_notice:
        "Votre navigateur ne prend pas en charge la vidéo HTML5.",
      nojs_notice:
        '<p class="small"><strong>Avis</strong>&nbsp;: Ce site internet utilise le <strong>javascript</strong>  pour optimiser votre expérience de navigation.</p> <p class="small">Il semble toutefois que la prise en charge du javascript soit désactivée sur votre navigateur; veuillez l’activer pour obtenir une expérience optimale. Si vous préférez  poursuivre sans changer votre configuration actuelle, vous n’aurezpeut-être pas accès  à toutes les fonctions du site.</p>\n',
      old_browser_notice:
        '<p class="small"><strong>Avis important</strong> : Ce site Internet est optimisé pour les navigateurs modernes et  n’est pas parfaitement adapté à votre version d’Internet Explorer. Prenez note que le site n’est pas encore  pleinement fonctionnel.</p>\n',
      comics: "Bandes dessinées",
      comic_grade3: "Bande dessinée : 3<sup>e</sup> année",
      comic_grade4: "Bande dessinée : 4<sup>e</sup> année",
      contact: "Nous joindre",
      game: "Jeu",
      game_credits: "Musique et crédits sonores",
      guess_what: "Devine quoi!?!",
      not_found: "Page non trouvée",
      privacy_policy: "Politique de confidentialité",
      teachers: "Enseignants",
      terms_of_use: "Conditions d’utilisation",
      quiz_responses: {
        correct: ["Correct!", "That’s right!", "Good job!"],
        incorrect: ["Try again!", "Oops! Wrong answer"],
      },
      quiz_questions: [
        {
          id: "q1",
          question: "1. C’est correct de publier des photos sur Internet.",
          answer: "2",
          explanation:
            "Demande toujours à un adulte de confiance avant de publier quelque chose sur Internet. Et n’oublie pas qu’Internet est un lieu public; tout le monde peut voir ce que tu y publies.",
          img: "tyler1.png",
        },
        {
          id: "q2",
          question:
            "2. Les enfants voient des choses bizarres et dégoûtantes sur Internet.",
          answer: "2",
          explanation:
            "C’est possible que tu voies des choses bizarres ou dégoûtantes sur Internet. Tu n’y es pour rien. Déconnecte-toi. Va expliquer ce qui s’est passé à un adulte de confiance.",
          img: "zoe1.png",
        },
        {
          id: "q3",
          question:
            "3. Les enfants ont des ennuis lorsqu’ils voient des photos obscènes sur Internet.",
          answer: "0",
          explanation:
            "Certains sites ne sont pas faits pour des enfants. Ne crains rien. Déconnecte-toi. Va expliquer ce qui s’est passé à un adulte de confiance.",
          img: "mac.png",
        },
        {
          id: "q4",
          question:
            "4. Lorsqu’un enfant voit sur Internet quelque chose qui le met mal à l’aise, il doit se déconnecter.",
          answer: "1",
          explanation:
            "Si quelque chose sur Internet te met mal à l’aise, déconnecte-toi. Va expliquer ce qui s’est passé à un adulte de confiance.",
          img: "molly1.png",
        },
        {
          id: "q5",
          question:
            "5. C’est correct d’envoyer des photos ou des vidéos avec une appli.",
          answer: "2",
          explanation:
            "Vérifie toujours auprès d’un adulte de confiance avant d’envoyer une photo ou une vidéo à quelqu’un. Tu n’auras plus aucun contrôle sur cette photo ou vidéo après l’avoir envoyée.",
          img: "octopus.png",
        },
        {
          id: "q6",
          question: "6. C’est possible de conserver une conversation vidéo.",
          answer: "1",
          explanation:
            "Il est possible de conserver une conversation vidéo ou une vidéo en direct. Ces images peuvent ensuite être partagées avec d’autres personnes. Demande la permission à un adulte de confiance avant d’avoir des conversations vidéo sur Internet.",
          img: "fish.png",
        },
        {
          id: "q7",
          question:
            "7. C’est correct d’ouvrir un fichier reçu de quelqu’un qu’on ne connaît pas.",
          answer: "0",
          explanation:
            "Un fichier reçu d’une personne qui n’est pas sur ta liste de contacts pourrait contenir un virus.",
          img: "zoe2.png",
        },
        {
          id: "q8",
          question:
            "8. C’est correct de répondre à quelqu’un qui pose des questions bizarres sur Internet.",
          answer: "0",
          explanation:
            "Si quelqu’un se met à te poser des questions bizarres, cesse de communiquer avec cette personne. Conserve le message. Parles-en à un adulte de confiance.",
          img: "molly2.png",
        },
        {
          id: "q9",
          question:
            "9. Un enfant qui fait quelque chose d’imprudent sur Internet aura des ennuis.",
          answer: "0",
          explanation:
            "Ça arrive à tout le monde de faire des erreurs. Raconte ce qui s’est passé à un adulte de confiance. Les adultes sont censés protéger les enfants.",
          img: "turtle.png",
        },
        {
          id: "q10",
          question:
            "10. Si quelqu’un se fâche contre toi sur Internet, alors tu dois faire ce qu’il te demande.",
          answer: "0",
          explanation:
            "C’est inacceptable que quelqu’un se fâche contre toi quand tu exprimes tes limites. Les gens doivent respecter tes choix. Quitte la conversation et déconnecte-toi. Conserve le message. Va expliquer ce qui s’est passé à un adulte de confiance.",
          img: "tyler2.png",
        },
      ],
    },
    sub_game_stages: [
      { stage: "s0", start: 0.1, end: 30.2 },
      {
        stage: "s1",
        start: 30.3,
        end: 212,
        ends_with: "decision",
        loop: { start: 201.4, loop_back: 205.7, end: 209.8 },
        resp: {
          en: {
            s2: "Sure! I can do the side splitz too!!!",
            s3: "I don’t feel like it.",
          },
          fr: {
            s2: "Oui! Je vais te montrer comme je suis bonne!!!",
            s3: "J’ai pas envie.",
          },
        },
      },
      {
        stage: "s2",
        start: 212.4,
        end: 300.7,
        ends_with: "game_over",
        tryagain_prompt: 299.4,
        tryagain_text: { en: "Choose again", fr: "Choisir de nouveau" },
      },
      {
        stage: "s3",
        start: 301.2,
        end: 503.9,
        ends_with: "decision",
        loop: { start: 493.4, loop_back: 498.1, end: 501.2 },
        resp: {
          en: {
            s7: "No, I want to try something else.",
            s4: "Yep! I need it to get directions.",
          },
          fr: {
            s7: "Non, je veux essayer autre chose.",
            s4: "Oui! J’en ai besoin pour savoir où aller.",
          },
        },
      },
      {
        stage: "s4",
        start: 504.4,
        end: 576.1,
        ends_with: "decision",
        loop: { start: 566.2, loop_back: 570.4, end: 574.3 },
        resp: {
          en: { s6: "I think the turtle will be back.", s5: "Awesome! Thx!" },
          fr: { s6: "Je pense que la tortue reviendra.", s5: "Génial! Mci!" },
        },
      },
      {
        stage: "s5",
        start: 576.6,
        end: 725.5,
        ends_with: "game_over",
        tryagain_prompt: 723.9,
        tryagain_text: { en: "Choose again", fr: "Choisir de nouveau" },
      },
      {
        stage: "s6",
        start: 725.9,
        end: 897.9,
        ends_with: "decision",
        loop: { start: 889.3, loop_back: 893.2, end: 896.7 },
        resp: {
          en: { s8: "Yes! I need my phone!", s9: "No, I’ll leave it." },
          fr: {
            s8: "Oui! J’ai besoin de mon téléphone!",
            s9: "Non, je n’en ferai rien.",
          },
        },
      },
      {
        stage: "s7",
        start: 898.3,
        end: 1050.3,
        ends_with: "decision",
        loop: { start: 1041.6, loop_back: 1045.6, end: 1049 },
        resp: {
          en: { s8: "Yes! I need my phone!", s9: "No, I’ll leave it." },
          fr: {
            s8: "Oui! J’ai besoin de mon téléphone!",
            s9: "Non, je n’en ferai rien.",
          },
        },
      },
      {
        stage: "s8",
        start: 1050.7,
        end: 1105.4,
        ends_with: "game_over",
        tryagain_prompt: 1104.4,
        tryagain_text: { en: "Choose again", fr: "Choisir de nouveau" },
      },
      {
        stage: "s9",
        start: 1105.8,
        end: 1219.4,
        ends_with: "decision",
        loop: { start: 1210.7, loop_back: 1213.8, end: 1217.5 },
        resp: {
          en: { s11: "I don’t want to.", s10: "Yah!!! I’m almost home!!!!!" },
          fr: { s11: "Je ne veux pas.", s10: "Oui!!! J’y suis presque!!!!!" },
        },
      },
      {
        stage: "s10",
        start: 1219.9,
        end: 1276.9,
        ends_with: "game_over",
        tryagain_prompt: 1275.3,
        tryagain_text: { en: "Choose again", fr: "Choisir de nouveau" },
      },
      {
        stage: "s11",
        start: 1277.3,
        end: 1388.6,
        ends_with: "decision",
        loop: { start: 1377.5, loop_back: 1381.7, end: 1386.8 },
        resp: {
          en: { s12: "Get into purple gym suit", s13: "Block No_rulz11" },
          fr: {
            s12: "J’enfile mon costume de gymnastique mauve",
            s13: "Je bloque Sympa_11",
          },
        },
      },
      {
        stage: "s12",
        start: 1389,
        end: 1430.1,
        ends_with: "game_over",
        tryagain_prompt: 1429.8,
        tryagain_text: { en: "Restart game", fr: "Recommencer le jeu" },
      },
      { stage: "s13", start: 1430.6, end: 1477.3 },
    ],
    comics: ["comics"],
    contact: ["contact"],
    game: ["game"],
    game_credits: ["game_credits"],
    guess_what: ["guess_what"],
    not_found: ["not_found"],
    privacy_policy: ["privacy_policy"],
    teachers: ["teachers"],
    terms_of_use: ["terms_of_use"],
  });

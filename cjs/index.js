"use strict";

module.exports = function (t) {
  var e = {};

  function n(r) {
    if (e[r]) return e[r].exports;
    var o = e[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
  }

  return n.m = t, n.c = e, n.d = function (t, e, r) {
    n.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: r
    });
  }, n.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, n.t = function (t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;
    if (4 & e && "object" == typeof t && t && t.__esModule) return t;
    var r = Object.create(null);
    if (n.r(r), Object.defineProperty(r, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var o in t) n.d(r, o, function (e) {
      return t[e];
    }.bind(null, o));
    return r;
  }, n.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };
    return n.d(e, "a", e), e;
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, n.p = "", n(n.s = 9);
}([function (t, e) {
  t.exports = require("react");
}, function (t, e) {
  t.exports = require("react-dom");
}, function (t, e, n) {
  "use strict";

  t.exports = function (t) {
    var e = [];
    return e.toString = function () {
      return this.map(function (e) {
        var n = function (t, e) {
          var n = t[1] || "",
              r = t[3];
          if (!r) return n;

          if (e && "function" == typeof btoa) {
            var o = (a = r, c = btoa(unescape(encodeURIComponent(JSON.stringify(a)))), s = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c), "/*# ".concat(s, " */")),
                i = r.sources.map(function (t) {
              return "/*# sourceURL=".concat(r.sourceRoot || "").concat(t, " */");
            });
            return [n].concat(i).concat([o]).join("\n");
          }

          var a, c, s;
          return [n].join("\n");
        }(e, t);

        return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n;
      }).join("");
    }, e.i = function (t, n, r) {
      "string" == typeof t && (t = [[null, t, ""]]);
      var o = {};
      if (r) for (var i = 0; i < this.length; i++) {
        var a = this[i][0];
        null != a && (o[a] = !0);
      }

      for (var c = 0; c < t.length; c++) {
        var s = [].concat(t[c]);
        r && o[s[0]] || (n && (s[2] ? s[2] = "".concat(n, " and ").concat(s[2]) : s[2] = n), e.push(s));
      }
    }, e;
  };
}, function (t, e, n) {
  var r,
      o,
      i = {},
      a = (r = function r() {
    return window && document && document.all && !window.atob;
  }, function () {
    return void 0 === o && (o = r.apply(this, arguments)), o;
  }),
      c = function c(t, e) {
    return e ? e.querySelector(t) : document.querySelector(t);
  },
      s = function (t) {
    var e = {};
    return function (t, n) {
      if ("function" == typeof t) return t();

      if (void 0 === e[t]) {
        var r = c.call(this, t, n);
        if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
          r = r.contentDocument.head;
        } catch (t) {
          r = null;
        }
        e[t] = r;
      }

      return e[t];
    };
  }(),
      u = null,
      l = 0,
      f = [],
      p = n(6);

  function d(t, e) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n],
          o = i[r.id];

      if (o) {
        o.refs++;

        for (var a = 0; a < o.parts.length; a++) o.parts[a](r.parts[a]);

        for (; a < r.parts.length; a++) o.parts.push(g(r.parts[a], e));
      } else {
        var c = [];

        for (a = 0; a < r.parts.length; a++) c.push(g(r.parts[a], e));

        i[r.id] = {
          id: r.id,
          refs: 1,
          parts: c
        };
      }
    }
  }

  function y(t, e) {
    for (var n = [], r = {}, o = 0; o < t.length; o++) {
      var i = t[o],
          a = e.base ? i[0] + e.base : i[0],
          c = {
        css: i[1],
        media: i[2],
        sourceMap: i[3]
      };
      r[a] ? r[a].parts.push(c) : n.push(r[a] = {
        id: a,
        parts: [c]
      });
    }

    return n;
  }

  function b(t, e) {
    var n = s(t.insertInto);
    if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
    var r = f[f.length - 1];
    if ("top" === t.insertAt) r ? r.nextSibling ? n.insertBefore(e, r.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), f.push(e);else if ("bottom" === t.insertAt) n.appendChild(e);else {
      if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
      var o = s(t.insertAt.before, n);
      n.insertBefore(e, o);
    }
  }

  function m(t) {
    if (null === t.parentNode) return !1;
    t.parentNode.removeChild(t);
    var e = f.indexOf(t);
    e >= 0 && f.splice(e, 1);
  }

  function h(t) {
    var e = document.createElement("style");

    if (void 0 === t.attrs.type && (t.attrs.type = "text/css"), void 0 === t.attrs.nonce) {
      var r = function () {
        0;
        return n.nc;
      }();

      r && (t.attrs.nonce = r);
    }

    return v(e, t.attrs), b(t, e), e;
  }

  function v(t, e) {
    Object.keys(e).forEach(function (n) {
      t.setAttribute(n, e[n]);
    });
  }

  function g(t, e) {
    var n, r, o, i;

    if (e.transform && t.css) {
      if (!(i = "function" == typeof e.transform ? e.transform(t.css) : e.transform.default(t.css))) return function () {};
      t.css = i;
    }

    if (e.singleton) {
      var a = l++;
      n = u || (u = h(e)), r = j.bind(null, n, a, !1), o = j.bind(null, n, a, !0);
    } else t.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function (t) {
      var e = document.createElement("link");
      return void 0 === t.attrs.type && (t.attrs.type = "text/css"), t.attrs.rel = "stylesheet", v(e, t.attrs), b(t, e), e;
    }(e), r = S.bind(null, n, e), o = function o() {
      m(n), n.href && URL.revokeObjectURL(n.href);
    }) : (n = h(e), r = x.bind(null, n), o = function o() {
      m(n);
    });

    return r(t), function (e) {
      if (e) {
        if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
        r(t = e);
      } else o();
    };
  }

  t.exports = function (t, e) {
    if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
    (e = e || {}).attrs = "object" == typeof e.attrs ? e.attrs : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = a()), e.insertInto || (e.insertInto = "head"), e.insertAt || (e.insertAt = "bottom");
    var n = y(t, e);
    return d(n, e), function (t) {
      for (var r = [], o = 0; o < n.length; o++) {
        var a = n[o];
        (c = i[a.id]).refs--, r.push(c);
      }

      t && d(y(t, e), e);

      for (o = 0; o < r.length; o++) {
        var c;

        if (0 === (c = r[o]).refs) {
          for (var s = 0; s < c.parts.length; s++) c.parts[s]();

          delete i[c.id];
        }
      }
    };
  };

  var O,
      w = (O = [], function (t, e) {
    return O[t] = e, O.filter(Boolean).join("\n");
  });

  function j(t, e, n, r) {
    var o = n ? "" : r.css;
    if (t.styleSheet) t.styleSheet.cssText = w(e, o);else {
      var i = document.createTextNode(o),
          a = t.childNodes;
      a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(i, a[e]) : t.appendChild(i);
    }
  }

  function x(t, e) {
    var n = e.css,
        r = e.media;
    if (r && t.setAttribute("media", r), t.styleSheet) t.styleSheet.cssText = n;else {
      for (; t.firstChild;) t.removeChild(t.firstChild);

      t.appendChild(document.createTextNode(n));
    }
  }

  function S(t, e, n) {
    var r = n.css,
        o = n.sourceMap,
        i = void 0 === e.convertToAbsoluteUrls && o;
    (e.convertToAbsoluteUrls || i) && (r = p(r)), o && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
    var a = new Blob([r], {
      type: "text/css"
    }),
        c = t.href;
    t.href = URL.createObjectURL(a), c && URL.revokeObjectURL(c);
  }
}, function (t, e, n) {
  var r = n(5);
  "string" == typeof r && (r = [[t.i, r, ""]]);
  var o = {
    hmr: !0,
    transform: void 0,
    insertInto: void 0
  };
  n(3)(r, o);
  r.locals && (t.exports = r.locals);
}, function (t, e, n) {
  (e = n(2)(!1)).push([t.i, ".scale-view-container {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 100vw;\n  height: 100vh;\n}\n\n.scale-view-container__content {\n  position: relative;\n  overflow: hidden;\n  background-size: 100%;\n  transform-origin: 0 0;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);\n  transition: all 0.3s linear;\n}\n", ""]), t.exports = e;
}, function (t, e) {
  t.exports = function (t) {
    var e = "undefined" != typeof window && window.location;
    if (!e) throw new Error("fixUrls requires window.location");
    if (!t || "string" != typeof t) return t;
    var n = e.protocol + "//" + e.host,
        r = n + e.pathname.replace(/\/[^\/]*$/, "/");
    return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (t, e) {
      var o,
          i = e.trim().replace(/^"(.*)"$/, function (t, e) {
        return e;
      }).replace(/^'(.*)'$/, function (t, e) {
        return e;
      });
      return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? t : (o = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? n + i : r + i.replace(/^\.\//, ""), "url(" + JSON.stringify(o) + ")");
    });
  };
}, function (t, e, n) {
  var r = n(8);
  "string" == typeof r && (r = [[t.i, r, ""]]);
  var o = {
    hmr: !0,
    transform: void 0,
    insertInto: void 0
  };
  n(3)(r, o);
  r.locals && (t.exports = r.locals);
}, function (t, e, n) {
  (e = n(2)(!1)).push([t.i, ".scale-view-item__container {\n  position: absolute;\n}\n\n.scale-view-item__content {\n  position: relative;\n  height: 100%;\n}\n", ""]), t.exports = e;
}, function (t, e, n) {
  "use strict";

  n.r(e), n.d(e, "ScaleViewContainer", function () {
    return k;
  }), n.d(e, "ScaleViewItem", function () {
    return ot;
  }), n.d(e, "ScaleViewContext", function () {
    return i;
  }), n.d(e, "useSize", function () {
    return N;
  }), n.d(e, "withSize", function () {
    return M;
  });
  var r = n(0),
      o = n.n(r);
  var i = o.a.createContext({
    size: {}
  });

  function a(t, e, n, r, o, i, a) {
    try {
      var c = t[i](a),
          s = c.value;
    } catch (t) {
      return void n(t);
    }

    c.done ? e(s) : Promise.resolve(s).then(r, o);
  }

  function c(t) {
    return function () {
      var e = this,
          n = arguments;
      return new Promise(function (r, o) {
        var i = t.apply(e, n);

        function c(t) {
          a(i, r, o, c, s, "next", t);
        }

        function s(t) {
          a(i, r, o, c, s, "throw", t);
        }

        c(void 0);
      });
    };
  }

  function s(t, e) {
    var n = Object.keys(t);

    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      e && (r = r.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })), n.push.apply(n, r);
    }

    return n;
  }

  function u(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {};
      e % 2 ? s(Object(n), !0).forEach(function (e) {
        l(t, e, n[e]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function (e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
      });
    }

    return t;
  }

  function l(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t;
  }

  const f = t => t ? "number" == typeof t ? t + "px" : (t.endsWith("%") || t.endsWith("px"), t) : 0;

  function p(t, e) {
    let n = t.transformOrigin;
    if (n) return {
      transformOrigin: n
    };
    if (e && e.from) switch (e.from) {
      case "top":
        return {
          transformOrigin: "0 0"
        };

      case "bottom":
        return {
          transformOrigin: "0 100%"
        };

      case "left":
        return {
          transformOrigin: "0 50%"
        };

      case "right":
        return {
          transformOrigin: "100% 50%"
        };

      default:
        return {
          transformOrigin: "50% 50%"
        };
    }
    return {
      transformOrigin: "0% 0%"
    };
  }

  const d = t => {
    if (!t) return {};

    const e = function (t) {
      const e = /scale\((.*)\)/.exec(t);
      return e ? e[1].split(",").map(parseFloat) : [1, 1];
    }(t.style.transform),
          n = t.style.transformOrigin.split(" ");

    return {
      left: t.offsetLeft,
      top: t.offsetTop,
      width: t.offsetWidth,
      height: t.offsetHeight,
      scaleX: e[0],
      scaleY: e[1],
      parent: t.offsetParent,
      transformOrigin: n,
      node: t
    };
  },
        y = function () {
    var t = c(regeneratorRuntime.mark(function t(e, n) {
      var r, o;
      return regeneratorRuntime.wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (r = function () {
              var t = c(regeneratorRuntime.mark(function t(e) {
                return regeneratorRuntime.wrap(function (t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      return t.abrupt("return", new Promise(t => {
                        let n = null;

                        const r = (e, o = 0) => {
                          setTimeout(() => {
                            n = document.getElementById(e), n ? t(n) : 3 === o ? t(null) : r(e, o + 1);
                          }, 0);
                        };

                        r(e, 0);
                      }));

                    case 1:
                    case "end":
                      return t.stop();
                  }
                }, t);
              }));
              return function (e) {
                return t.apply(this, arguments);
              };
            }(), e !== n) {
              t.next = 4;
              break;
            }

            return console.error("relationId不能是组件本身"), t.abrupt("return", {});

          case 4:
            return t.next = 6, r(e);

          case 6:
            if (o = t.sent) {
              t.next = 10;
              break;
            }

            return console.error("找不到相对组件或关系不正确"), t.abrupt("return", {});

          case 10:
            return t.abrupt("return", d(o));

          case 11:
          case "end":
            return t.stop();
        }
      }, t);
    }));
    return function (e, n) {
      return t.apply(this, arguments);
    };
  }(),
        b = t => {
    const e = t.transformOrigin,
          n = t.height;

    if (e[1].endsWith("%")) {
      return parseFloat(e[1]) / 100;
    }

    return parseFloat(e[1]) / n;
  },
        m = t => {
    const e = t.transformOrigin,
          n = t.width;

    if (e[0].endsWith("%")) {
      return parseFloat(e[0]) / 100;
    }

    return parseFloat(e[0]) / n;
  },
        h = function () {
    var t = c(regeneratorRuntime.mark(function t(e) {
      var n, r, o, i, a, s, u, l;
      return regeneratorRuntime.wrap(function (t) {
        for (;;) switch (t.prev = t.next) {
          case 0:
            if (n = e.relations, r = void 0 === n ? {} : n, o = e.id, i = e.scales, a = e.transformOrigin, s = e.size, u = e.el, 0 !== [...new Set(Object.values(r))].length) {
              t.next = 4;
              break;
            }

            return t.abrupt("return", {});

          case 4:
            return l = function () {
              var t = c(regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  for (;;) switch (t.prev = t.next) {
                    case 0:
                      return t.abrupt("return", new Promise(t => {
                        const e = {},
                              n = Object.entries(r);
                        0 === n.length && t(e);
                        let l = null,
                            f = null,
                            p = null,
                            d = null;
                        n.forEach(function () {
                          var r = c(regeneratorRuntime.mark(function r(c, h) {
                            var v, g, O, w, j, x;
                            return regeneratorRuntime.wrap(function (r) {
                              for (;;) switch (r.prev = r.next) {
                                case 0:
                                  return r.next = 2, y(c[1], o);

                                case 2:
                                  v = r.sent, g = b(v), O = m(v), w = 0, j = 0, r.t0 = c[0], r.next = "layoutBelow" === r.t0 ? 10 : "layoutAbove" === r.t0 ? 13 : "toLeftOf" === r.t0 ? 16 : "toRightOf" === r.t0 ? 19 : "alignLeft" === r.t0 ? 22 : "alignRight" === r.t0 ? 25 : "alignTop" === r.t0 ? 28 : "alignBottom" === r.t0 ? 31 : 34;
                                  break;

                                case 10:
                                  return w = v.height * (1 - v.scaleY) * (1 - g), p = v.top + v.height - w, r.abrupt("break", 35);

                                case 13:
                                  return w = v.height * (1 - v.scaleY) * g, d = v.parent.offsetHeight - v.top - w, r.abrupt("break", 35);

                                case 16:
                                  return j = v.width * (1 - v.scaleX) * O, f = v.parent.offsetWidth - v.left - j, r.abrupt("break", 35);

                                case 19:
                                  return j = v.width * (1 - v.scaleX) * (1 - O), l = v.left + v.width - j, r.abrupt("break", 35);

                                case 22:
                                  return j = v.width * (1 - v.scaleX) * O, l = v.left + j, r.abrupt("break", 35);

                                case 25:
                                  return j = v.width * (1 - v.scaleX) * O, f = v.parent.offsetWidth - v.left - v.width * v.scaleX - j, r.abrupt("break", 35);

                                case 28:
                                  return w = v.height * (1 - v.scaleY) * g, p = v.top + w, r.abrupt("break", 35);

                                case 31:
                                  return w = v.height * (1 - v.scaleY) * g, d = v.parent.offsetHeight - v.top - v.height * v.scaleY - w, r.abrupt("break", 35);

                                case 34:
                                  return r.abrupt("break", 35);

                                case 35:
                                  n.length === h + 1 && (x = () => (u.current.style.transformOrigin || a.transformOrigin).split(" "), (() => {
                                    const t = x();
                                    let n = 0,
                                        r = 0;
                                    const o = s.width,
                                          a = s.height,
                                          c = i[0],
                                          y = i[1],
                                          b = u.current.style,
                                          m = b.width,
                                          h = b.height,
                                          v = parseInt(m) || o - l - f,
                                          g = parseInt(h) || a - p - d;

                                    if (n = t[0].endsWith("%") ? parseFloat(t[0]) / 100 : parseFloat(t[0]) / v, r = t[1].endsWith("%") ? parseFloat(t[1]) / 100 : parseFloat(t[1]) / g, null != l) {
                                      l -= v * (1 - c) * n, e.left = l;
                                    }

                                    if (null != f) {
                                      f -= v * (1 - c) * (1 - n), e.right = f;
                                    }

                                    if (null != p) {
                                      p -= g * (1 - y) * r, e.top = p;
                                    }

                                    if (null != d) {
                                      d -= g * (1 - y) * (1 - r), e.bottom = d;
                                    }
                                  })(), t(e));

                                case 36:
                                case "end":
                                  return r.stop();
                              }
                            }, r);
                          }));
                          return function (t, e) {
                            return r.apply(this, arguments);
                          };
                        }());
                      }));

                    case 1:
                    case "end":
                      return t.stop();
                  }
                }, t);
              }));
              return function () {
                return t.apply(this, arguments);
              };
            }(), t.abrupt("return", l());

          case 6:
          case "end":
            return t.stop();
        }
      }, t);
    }));
    return function (e) {
      return t.apply(this, arguments);
    };
  }(),
        v = t => {
    const e = t.relateStyle,
          n = t.el,
          r = t.transition,
          o = t.scales,
          i = t.afterStyle;
    let a = u(u({}, i), e);
    const c = n.current || {},
          s = a.transform;
    return u(u({}, a), {}, {
      transform: "scale(".concat(o[0], ", ").concat(o[1], ") ").concat(s || "")
    }, p(u(u({}, c.style), i), r));
  },
        g = t => {
    const e = t.mode,
          n = t.size,
          r = t.transition,
          o = t.style;
    let i = [],
        a = o,
        c = {};

    switch (e) {
      case "fixed":
        c = (t => {
          const e = t.size,
                n = t.style,
                r = e.scaleX,
                o = e.scaleY;
          return {
            scale: [1 / r, 1 / o],
            style: {
              width: "calc(".concat(f(n.width), " * ").concat(r, ")"),
              height: "calc(".concat(f(n.height), " * ").concat(o, ")")
            }
          };
        })({
          size: n,
          style: o
        }), i = c.scale, a = u(u({}, a), c.style);
        break;

      case "scaleXFix":
        i = (t => {
          const e = t.size,
                n = e.scaleX;
          return [e.scaleY / n, 1];
        })({
          size: n
        });

        break;

      case "scaleYFix":
        i = (t => {
          const e = t.size;
          return [1, e.scaleX / e.scaleY];
        })({
          size: n
        });

        break;

      case "adaptWidth":
        c = (t => {
          const e = t.size,
                n = t.style,
                r = e.scaleX / e.scaleY;
          return r >= 1 ? {
            scale: [1 / r, 1],
            style: {
              width: "calc(".concat(f(n.width), " * ").concat(r, ")")
            }
          } : {
            scale: [1, r]
          };
        })({
          size: n,
          style: o
        }), i = c.scale, a = u(u({}, a), c.style);
        break;

      case "adaptHeight":
        c = (t => {
          const e = t.size,
                n = t.style,
                r = e.scaleX / e.scaleY;
          return r >= 1 ? {
            scale: [1 / r, 1]
          } : {
            scale: [1, r],
            style: {
              width: "calc(".concat(f(n.height), " * ").concat(r, ")")
            }
          };
        })({
          size: n,
          style: o
        }), i = c.scale, a = u(u({}, a), c.style);
        break;

      default:
        i = [1, 1];
    }

    return {
      scales: i,
      transformOrigin: p(o, r),
      afterStyle: a
    };
  };

  n(4);

  function O(t, e, n, r, o, i, a) {
    try {
      var c = t[i](a),
          s = c.value;
    } catch (t) {
      return void n(t);
    }

    c.done ? e(s) : Promise.resolve(s).then(r, o);
  }

  function w(t) {
    return function () {
      var e = this,
          n = arguments;
      return new Promise(function (r, o) {
        var i = t.apply(e, n);

        function a(t) {
          O(i, r, o, a, c, "next", t);
        }

        function c(t) {
          O(i, r, o, a, c, "throw", t);
        }

        a(void 0);
      });
    };
  }

  function j(t, e) {
    return function (t) {
      if (Array.isArray(t)) return t;
    }(t) || function (t, e) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
      var n = [],
          r = !0,
          o = !1,
          i = void 0;

      try {
        for (var a, c = t[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
      } catch (t) {
        o = !0, i = t;
      } finally {
        try {
          r || null == c.return || c.return();
        } finally {
          if (o) throw i;
        }
      }

      return n;
    }(t, e) || function (t, e) {
      if (!t) return;
      if ("string" == typeof t) return x(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      "Object" === n && t.constructor && (n = t.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(t);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return x(t, e);
    }(t, e) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }

  function x(t, e) {
    (null == e || e > t.length) && (e = t.length);

    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];

    return r;
  }

  function S(t, e) {
    var n = Object.keys(t);

    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      e && (r = r.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })), n.push.apply(n, r);
    }

    return n;
  }

  function E(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {};
      e % 2 ? S(Object(n), !0).forEach(function (e) {
        P(t, e, n[e]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach(function (e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
      });
    }

    return t;
  }

  function P(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t;
  }

  const C = t => {
    const e = t.config,
          n = t.el,
          o = t.container,
          i = t.content,
          a = j(Object(r.useState)({
      width: parseInt(e.width),
      height: parseInt(e.height),
      scaleX: 1,
      scaleY: 1
    }), 2),
          c = a[0],
          s = a[1],
          u = Object(r.useRef)(0),
          l = Object(r.useRef)(null);
    return Object(r.useEffect)(() => (u.current = 1, () => {
      u.current = 0;
    }), []), Object(r.useEffect)(() => {
      const t = function () {
        var t = w(regeneratorRuntime.mark(function t() {
          return regeneratorRuntime.wrap(function (t) {
            for (;;) switch (t.prev = t.next) {
              case 0:
                return t.abrupt("return", new Promise(t => {
                  const e = () => {
                    clearTimeout(l.current), n.current ? t(n.current) : l.current = setTimeout(() => {
                      e();
                    }, 0);
                  };

                  e();
                }));

              case 1:
              case "end":
                return t.stop();
            }
          }, t);
        }));
        return function () {
          return t.apply(this, arguments);
        };
      }(),
            r = function () {
        var n = w(regeneratorRuntime.mark(function n() {
          var r, a, u, l, f, p, d, y, b;
          return regeneratorRuntime.wrap(function (n) {
            for (;;) switch (n.prev = n.next) {
              case 0:
                return n.next = 2, t();

              case 2:
                r = n.sent, a = r.clientWidth, u = r.clientHeight, l = c.width, f = c.height, p = c.scaleX, d = c.scaleY, y = "hidden", b = "hidden", n.t0 = e.scaleType, n.next = "ADAPT_WIDTH" === n.t0 ? 11 : "ADAPT_HEIGHT" === n.t0 ? 16 : 21;
                break;

              case 11:
                return p = a / l, d = a / l, y = "auto", b = "hidden", n.abrupt("break", 24);

              case 16:
                return p = u / f, d = u / f, y = "auto", b = "hidden", n.abrupt("break", 24);

              case 21:
                return p = a / l, d = u / f, n.abrupt("break", 24);

              case 24:
                i.setContentConfig({
                  transform: "scale(".concat(p, ", ").concat(d, ")")
                }), o.setContainerConfig({
                  overflowX: y,
                  overflowY: b
                }), s({
                  scaleX: p,
                  scaleY: d,
                  width: l,
                  height: f
                });

              case 27:
              case "end":
                return n.stop();
            }
          }, n);
        }));
        return function () {
          return n.apply(this, arguments);
        };
      }(),
            a = function (t, e) {
        let n = null;
        return function (...r) {
          clearTimeout(n), n = setTimeout(() => {
            t.call(this, ...r);
          }, e);
        };
      }(r, 200);

      return 1 === u.current && window.addEventListener("resize", a), u.current++, r(), () => {
        0 === u.current && window.removeEventListener("resize", a), clearTimeout(l.current);
      };
    }, [e]), c;
  },
        R = t => {
    const e = t.config,
          n = t.el,
          o = (() => {
      const t = {
        overflowX: "hidden",
        overflowY: "hidden"
      },
            e = Object(r.useRef)(t);
      return {
        containerConfig: e.current,
        setContainerConfig: n => {
          e.current = E(E({}, t), n);
        }
      };
    })(),
          i = (t => {
      const e = t.config,
            n = {
        width: e.width,
        height: e.height,
        transform: "scale(1,1)"
      },
            o = Object(r.useRef)(n);
      return {
        contentConfig: o.current,
        setContentConfig: t => {
          o.current = E(E({}, n), t);
        }
      };
    })({
      config: e
    });

    return {
      size: C({
        config: e,
        container: o,
        content: i,
        el: n
      }),
      containerConfig: o.containerConfig,
      contentConfig: i.contentConfig
    };
  };

  var k = t => {
    const e = t.config,
          n = t.children,
          a = t.className,
          c = t.style,
          s = t.contentId,
          u = t.contentClass,
          l = t.contentStyle,
          f = Object(r.useRef)(null),
          p = R({
      config: e,
      el: f
    }),
          d = p.containerConfig,
          y = p.contentConfig,
          b = p.size;
    return o.a.createElement(i.Provider, {
      value: {
        size: b
      }
    }, o.a.createElement("div", {
      ref: f,
      className: ["scale-view-container", a].filter(Boolean).join(" "),
      style: E(E({}, d), c)
    }, o.a.createElement("div", {
      id: s,
      className: ["scale-view-container__content", u].filter(Boolean).join(" "),
      style: E(E({}, y), l)
    }, n)));
  },
      A = n(1),
      I = n.n(A);

  function T() {
    return (T = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];

        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
      }

      return t;
    }).apply(this, arguments);
  }

  function D(t, e) {
    var n = Object.keys(t);

    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      e && (r = r.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })), n.push.apply(n, r);
    }

    return n;
  }

  function z(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {};
      e % 2 ? D(Object(n), !0).forEach(function (e) {
        X(t, e, n[e]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : D(Object(n)).forEach(function (e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
      });
    }

    return t;
  }

  function X(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t;
  }

  function U(t, e) {
    return function (t) {
      if (Array.isArray(t)) return t;
    }(t) || function (t, e) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
      var n = [],
          r = !0,
          o = !1,
          i = void 0;

      try {
        for (var a, c = t[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
      } catch (t) {
        o = !0, i = t;
      } finally {
        try {
          r || null == c.return || c.return();
        } finally {
          if (o) throw i;
        }
      }

      return n;
    }(t, e) || function (t, e) {
      if (!t) return;
      if ("string" == typeof t) return Y(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      "Object" === n && t.constructor && (n = t.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(t);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Y(t, e);
    }(t, e) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }

  function Y(t, e) {
    (null == e || e > t.length) && (e = t.length);

    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];

    return r;
  }

  const L = t => {
    const e = U(Object(r.useReducer)(function (t, e) {
      return z(z({}, t), {}, e ? {
        show: !0
      } : {
        show: !1
      });
    }, t), 2),
          n = e[0],
          o = e[1],
          i = U(Object(r.useState)(() => function (t) {
      const e = t.anim,
            n = void 0 === e ? "opacity" : e,
            r = t.from,
            o = (t.delay, t.timeout),
            i = void 0 === o ? 0 : o;
      let a = {};

      switch (n) {
        case "slide":
          a = function (t, e, n) {
            let r = {},
                o = "";

            switch (t) {
              case "left":
                o = {
                  transform: "translateX(-100%)",
                  opacity: 0
                }, r = {
                  entering: {
                    transform: "translateX(0)",
                    opacity: 1
                  },
                  entered: {
                    transform: "translateX(0)",
                    opacity: 1
                  },
                  exiting: {
                    transform: "translateX(-100%)",
                    opacity: 0
                  },
                  exited: {
                    transform: "translateX(-100%)",
                    opacity: 0
                  }
                };
                break;

              case "right":
                o = {
                  transform: "translateX(100%)",
                  opacity: 0
                }, r = {
                  entering: {
                    transform: "translateX(0)",
                    opacity: 1
                  },
                  entered: {
                    transform: "translateX(0)",
                    opacity: 1
                  },
                  exiting: {
                    transform: "translateX(100%)",
                    opacity: 0
                  },
                  exited: {
                    transform: "translateX(100%)",
                    opacity: 0
                  }
                };
                break;

              case "top":
                o = {
                  transform: "translateY(-100%)",
                  opacity: 0
                }, r = {
                  entering: {
                    transform: "translateY(0)",
                    opacity: 1
                  },
                  entered: {
                    transform: "translateY(0)",
                    opacity: 1
                  },
                  exiting: {
                    transform: "translateY(-100%)",
                    opacity: 0
                  },
                  exited: {
                    transform: "translateY(-100%)",
                    opacity: 0
                  }
                };
                break;

              case "bottom":
                o = {
                  transform: "translateY(100%)",
                  opacity: 0
                }, r = {
                  entering: {
                    transform: "translateY(0)",
                    opacity: 1
                  },
                  entered: {
                    transform: "translateY(0)",
                    opacity: 1
                  },
                  exiting: {
                    transform: "translateY(100%)",
                    opacity: 0
                  },
                  exited: {
                    transform: "translateY(100%)",
                    opacity: 0
                  }
                };
            }

            return {
              defaultTransitionStyle: u({
                transition: "all ".concat(n, "ms ease-in")
              }, o),
              transitionStyle: r
            };
          }(r, 0, i);

          break;

        case "opacity":
          a = function (t, e) {
            return {
              defaultTransitionStyle: u({
                transition: "opacity ".concat(e, "ms ease-in-out")
              }, {
                opacity: 0
              }),
              transitionStyle: {
                entering: {
                  opacity: 1
                },
                entered: {
                  opacity: 1
                },
                exiting: {
                  opacity: 0
                },
                exited: {
                  opacity: 0
                }
              }
            };
          }(0, i);

      }

      const c = a,
            s = c.defaultTransitionStyle,
            l = c.transitionStyle;
      return {
        defaultContentStyle: s,
        transitionContentStyle: l
      };
    }(t)), 1)[0],
          a = Object(r.useRef)(null);
    return Object(r.useEffect)(() => () => {
      clearTimeout(a.current);
    }, []), {
      transitionProps: n,
      transitionStyle: i,
      onEnter: () => {
        const t = n.delay;
        a.current = setTimeout(() => {
          o(!0);
        }, t);
      }
    };
  },
        N = () => Object(r.useContext)(i).size,
        M = t => e => {
    const n = N();
    return o.a.createElement(t, T({}, e, {
      size: n
    }));
  };

  function _(t, e) {
    var n = Object.keys(t);

    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      e && (r = r.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })), n.push.apply(n, r);
    }

    return n;
  }

  function B(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t;
  }

  function F(t, e) {
    if (null == t) return {};

    var n,
        r,
        o = function (t, e) {
      if (null == t) return {};
      var n,
          r,
          o = {},
          i = Object.keys(t);

      for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || (o[n] = t[n]);

      return o;
    }(t, e);

    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(t);

      for (r = 0; r < i.length; r++) n = i[r], e.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]);
    }

    return o;
  }

  function W(t, e) {
    return function (t) {
      if (Array.isArray(t)) return t;
    }(t) || function (t, e) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
      var n = [],
          r = !0,
          o = !1,
          i = void 0;

      try {
        for (var a, c = t[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
      } catch (t) {
        o = !0, i = t;
      } finally {
        try {
          r || null == c.return || c.return();
        } finally {
          if (o) throw i;
        }
      }

      return n;
    }(t, e) || function (t, e) {
      if (!t) return;
      if ("string" == typeof t) return H(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      "Object" === n && t.constructor && (n = t.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(t);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return H(t, e);
    }(t, e) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }

  function H(t, e) {
    (null == e || e > t.length) && (e = t.length);

    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];

    return r;
  }

  const V = t => {
    const e = Object(r.useRef)(null),
          n = Object(r.useRef)(null),
          i = W(Object(r.useState)(() => t.in ? t.appear ? (e.current = "entering", "exited") : "entered" : t.unmountOnExit || t.mountOnEnter ? "unmounted" : "exited"), 2),
          a = i[0],
          c = i[1];
    Object(r.useEffect)(() => (u(!0, e.current), () => {
      p();
    }), []), Object(r.useEffect)(() => {
      let e = null;
      t.in ? "entering" !== a && "entered" !== a && (e = "entering") : "entering" !== a && "entered" !== a || (e = "exited"), u(!1, e);
    }, [t]);

    const s = () => {
      const e = t.timeout;
      let n, r, o;
      return n = r = o = e, null != e && "number" != typeof e && (n = e.exit, r = e.enter, o = void 0 !== e.appear ? e.appear : r), {
        exit: n,
        enter: r,
        appear: o
      };
    },
          u = (e = !1, n) => {
      null !== n ? (p(), "entering" === n ? l(e) : f()) : t.unmountOnExit && "exited" === a && c("unmounted");
    },
          l = e => {
      const n = t.enter,
            r = e,
            o = W(t.nodeRef ? [r] : [I.a.findDOMNode(void 0), r], 2),
            i = o[0],
            a = o[1],
            c = s(),
            u = r ? c.appear : c.enter;
      e || n ? (t.onEnter(i, a), d("entering", () => {
        t.onEntering(i, a), b(u, () => {
          d("entered", () => {
            t.onEntered(i, a);
          });
        });
      })) : d("entered", () => {
        t.onEntered(i);
      });
    },
          f = () => {
      const e = t.exit,
            n = s(),
            r = t.nodeRef ? void 0 : I.a.findDOMNode(void 0);
      e ? (t.onExit(r), d("exiting", () => {
        t.onExiting(r), b(n.exit, () => {
          d("exited", () => {
            t.onExited(r);
          });
        });
      })) : d("exited", () => {
        t.onExited(r);
      });
    },
          p = () => {
      null !== n.current && (n.current.cancel(), n.current = null);
    },
          d = (t, e) => {
      e = y(e), c(t), e && e();
    },
          y = t => {
      let e = !0;
      return n.current = r => {
        e && (e = !1, n.current = null, t(r));
      }, n.current.cancel = () => {
        e = !1;
      }, n.current;
    },
          b = (e, r) => {
      y(r);
      const o = t.nodeRef ? t.nodeRef.current : I.a.findDOMNode(void 0),
            i = null == e && !t.addEndListener;

      if (o && !i) {
        if (t.addEndListener) {
          const e = W(t.nodeRef ? [n.current] : [o, n.current], 2),
                r = e[0],
                i = e[1];
          t.addEndListener(r, i);
        }

        null != e && setTimeout(n.current, e);
      } else setTimeout(n.current, 0);
    },
          m = t.children,
          h = (t.in, F(t, ["children", "in"]));

    return "unmounted" === a ? null : o.a.createElement(o.a.Fragment, null, "function" == typeof m ? m(a, h) : o.a.cloneElement(o.a.Children.only(m), h));
  };

  V.UNMOUNTED = "unmounted", V.EXITED = "exited", V.ENTERING = "entering", V.ENTERED = "entered", V.EXITING = "exiting";

  var $ = t => {
    const e = function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2 ? _(Object(n), !0).forEach(function (e) {
          B(t, e, n[e]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : _(Object(n)).forEach(function (e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
        });
      }

      return t;
    }({
      in: void 0 !== t.in && t.in,
      mountOnEnter: void 0 !== t.mountOnEnter && t.mountOnEnter,
      unmountOnExit: void 0 !== t.unmountOnExit && t.unmountOnExit,
      appear: void 0 !== t.appear && t.appear,
      enter: void 0 === t.enter || t.enter,
      exit: void 0 === t.exit || t.exit,
      onEnter: t.onEnter || (() => {}),
      onEntering: t.onEntering || (() => {}),
      onEntered: t.onEntered || (() => {}),
      onExit: t.onExit || (() => {}),
      onExiting: t.onExiting || (() => {}),
      onExited: t.onExited || (() => {})
    }, t);

    return o.a.createElement(V, e);
  };

  n(7);

  function q() {
    return (q = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];

        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
      }

      return t;
    }).apply(this, arguments);
  }

  function G(t, e, n, r, o, i, a) {
    try {
      var c = t[i](a),
          s = c.value;
    } catch (t) {
      return void n(t);
    }

    c.done ? e(s) : Promise.resolve(s).then(r, o);
  }

  function J(t) {
    return function () {
      var e = this,
          n = arguments;
      return new Promise(function (r, o) {
        var i = t.apply(e, n);

        function a(t) {
          G(i, r, o, a, c, "next", t);
        }

        function c(t) {
          G(i, r, o, a, c, "throw", t);
        }

        a(void 0);
      });
    };
  }

  function K(t, e) {
    var n = Object.keys(t);

    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      e && (r = r.filter(function (e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable;
      })), n.push.apply(n, r);
    }

    return n;
  }

  function Q(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = null != arguments[e] ? arguments[e] : {};
      e % 2 ? K(Object(n), !0).forEach(function (e) {
        Z(t, e, n[e]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : K(Object(n)).forEach(function (e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
      });
    }

    return t;
  }

  function Z(t, e, n) {
    return e in t ? Object.defineProperty(t, e, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[e] = n, t;
  }

  function tt(t, e) {
    return function (t) {
      if (Array.isArray(t)) return t;
    }(t) || function (t, e) {
      if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t))) return;
      var n = [],
          r = !0,
          o = !1,
          i = void 0;

      try {
        for (var a, c = t[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
      } catch (t) {
        o = !0, i = t;
      } finally {
        try {
          r || null == c.return || c.return();
        } finally {
          if (o) throw i;
        }
      }

      return n;
    }(t, e) || function (t, e) {
      if (!t) return;
      if ("string" == typeof t) return et(t, e);
      var n = Object.prototype.toString.call(t).slice(8, -1);
      "Object" === n && t.constructor && (n = t.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(t);
      if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return et(t, e);
    }(t, e) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }

  function et(t, e) {
    (null == e || e > t.length) && (e = t.length);

    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];

    return r;
  }

  const nt = t => {
    const e = t.children,
          n = t.contentClass,
          r = t.contentStyle,
          i = t.defaultContentStyle,
          a = t.transitionContentStyle,
          c = t.transitionProps;
    return o.a.createElement($, {
      in: c.show,
      timeout: c.timeout
    }, t => o.a.createElement("div", {
      style: Q(Q(Q({}, i), a[t]), r),
      className: ["scale-view-item__content", n].filter(Boolean).join(" ")
    }, e));
  },
        rt = t => {
    const e = t.config,
          n = void 0 === e ? {} : e,
          i = t.className,
          a = t.contentClass,
          c = t.size,
          s = t.children,
          u = Q(Q({}, t.style), n.style),
          l = Q(Q({}, t.contentStyle), n.contentStyle),
          f = t.mode || n.mode || "",
          p = t.id || n.id,
          d = t.relations || n.relations || {},
          y = t.getContainer || n.getContainer,
          b = Object(r.useRef)(null),
          m = t.transition || n.transition || {};
    var O;
    O = b, Object(r.useEffect)(() => {
      !function t(e) {
        e !== document.body && ("data-view-item" !== e.dataset.symbol ? t(e.parentNode) : console.error("ScaleViewItem不允许嵌套ScaleViewItem"));
      }(O.current.parentNode);
    }, [O]);

    const w = (t => {
      const e = t.size,
            n = t.el,
            o = t.mode,
            i = t.transition,
            a = t.style,
            c = tt(Object(r.useState)({}), 2),
            s = c[0],
            u = c[1],
            l = L(Q({
        anim: "opacity",
        delay: 0,
        timeout: 0,
        show: !1
      }, i));
      return Object(r.useMemo)(J(regeneratorRuntime.mark(function r() {
        var c, s, f, p, d, y;
        return regeneratorRuntime.wrap(function (r) {
          for (;;) switch (r.prev = r.next) {
            case 0:
              return c = g({
                mode: o,
                style: a,
                transition: i,
                size: e
              }), s = c.scales, f = c.transformOrigin, p = c.afterStyle, r.next = 3, h(Q({
                scales: s,
                transformOrigin: f
              }, t));

            case 3:
              d = r.sent, y = v({
                el: n,
                afterStyle: p,
                relateStyle: d,
                scales: s,
                transition: i
              }), u(y), l.onEnter();

            case 7:
            case "end":
              return r.stop();
          }
        }, r);
      })), [e]), Q({
        containerStyle: s,
        transitionProps: l.transitionProps
      }, l.transitionStyle);
    })({
      size: c,
      el: b,
      mode: f,
      relations: d,
      transition: m,
      style: u
    }),
          j = w.containerStyle,
          x = w.defaultContentStyle,
          S = w.transitionContentStyle,
          E = w.transitionProps,
          P = () => o.a.createElement("div", {
      id: p,
      "data-symbol": "data-view-item",
      style: Q({}, j),
      ref: b,
      className: ["scale-view-item__container", i].filter(Boolean).join(" ")
    }, o.a.createElement(nt, {
      contentClass: a,
      contentStyle: l,
      defaultContentStyle: x,
      transitionContentStyle: S,
      transitionProps: E
    }, s));

    return y ? I.a.createPortal(P(), y()) : P();
  };

  var ot = t => o.a.createElement(i.Consumer, null, ({
    size: e
  }) => o.a.createElement(rt, q({}, t, {
    size: e
  })));

  e.default = {
    ScaleViewContainer: k,
    ScaleViewItem: ot,
    ScaleViewContext: i,
    useSize: N,
    withSize: M
  };
}]);
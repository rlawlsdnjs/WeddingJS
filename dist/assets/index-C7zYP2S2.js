var px = Object.defineProperty;
var mx = (n, a, l) =>
    a in n
        ? px(n, a, { enumerable: !0, configurable: !0, writable: !0, value: l })
        : (n[a] = l);
var zn = (n, a, l) => mx(n, typeof a != "symbol" ? a + "" : a, l);
(function () {
    const a = document.createElement("link").relList;
    if (a && a.supports && a.supports("modulepreload")) return;
    for (const u of document.querySelectorAll('link[rel="modulepreload"]'))
        r(u);
    new MutationObserver((u) => {
        for (const f of u)
            if (f.type === "childList")
                for (const d of f.addedNodes)
                    d.tagName === "LINK" && d.rel === "modulepreload" && r(d);
    }).observe(document, { childList: !0, subtree: !0 });
    function l(u) {
        const f = {};
        return (
            u.integrity && (f.integrity = u.integrity),
            u.referrerPolicy && (f.referrerPolicy = u.referrerPolicy),
            u.crossOrigin === "use-credentials"
                ? (f.credentials = "include")
                : u.crossOrigin === "anonymous"
                  ? (f.credentials = "omit")
                  : (f.credentials = "same-origin"),
            f
        );
    }
    function r(u) {
        if (u.ep) return;
        u.ep = !0;
        const f = l(u);
        fetch(u.href, f);
    }
})();
function wy(n) {
    return n &&
        n.__esModule &&
        Object.prototype.hasOwnProperty.call(n, "default")
        ? n.default
        : n;
}
function gx(n) {
    if (n.__esModule) return n;
    var a = n.default;
    if (typeof a == "function") {
        var l = function r() {
            return this instanceof r
                ? Reflect.construct(a, arguments, this.constructor)
                : a.apply(this, arguments);
        };
        l.prototype = a.prototype;
    } else l = {};
    return (
        Object.defineProperty(l, "__esModule", { value: !0 }),
        Object.keys(n).forEach(function (r) {
            var u = Object.getOwnPropertyDescriptor(n, r);
            Object.defineProperty(
                l,
                r,
                u.get
                    ? u
                    : {
                          enumerable: !0,
                          get: function () {
                              return n[r];
                          },
                      }
            );
        }),
        l
    );
}
var Nc = { exports: {} },
    Gs = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dg;
function yx() {
    if (dg) return Gs;
    dg = 1;
    var n = Symbol.for("react.transitional.element"),
        a = Symbol.for("react.fragment");
    function l(r, u, f) {
        var d = null;
        if (
            (f !== void 0 && (d = "" + f),
            u.key !== void 0 && (d = "" + u.key),
            "key" in u)
        ) {
            f = {};
            for (var h in u) h !== "key" && (f[h] = u[h]);
        } else f = u;
        return (
            (u = f.ref),
            {
                $$typeof: n,
                type: r,
                key: d,
                ref: u !== void 0 ? u : null,
                props: f,
            }
        );
    }
    return (Gs.Fragment = a), (Gs.jsx = l), (Gs.jsxs = l), Gs;
}
var hg;
function vx() {
    return hg || ((hg = 1), (Nc.exports = yx())), Nc.exports;
}
var _ = vx(),
    Lc = { exports: {} },
    gt = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var pg;
function Sx() {
    if (pg) return gt;
    pg = 1;
    var n = Symbol.for("react.transitional.element"),
        a = Symbol.for("react.portal"),
        l = Symbol.for("react.fragment"),
        r = Symbol.for("react.strict_mode"),
        u = Symbol.for("react.profiler"),
        f = Symbol.for("react.consumer"),
        d = Symbol.for("react.context"),
        h = Symbol.for("react.forward_ref"),
        p = Symbol.for("react.suspense"),
        m = Symbol.for("react.memo"),
        y = Symbol.for("react.lazy"),
        v = Symbol.iterator;
    function b(E) {
        return E === null || typeof E != "object"
            ? null
            : ((E = (v && E[v]) || E["@@iterator"]),
              typeof E == "function" ? E : null);
    }
    var T = {
            isMounted: function () {
                return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
        },
        O = Object.assign,
        R = {};
    function V(E, L, et) {
        (this.props = E),
            (this.context = L),
            (this.refs = R),
            (this.updater = et || T);
    }
    (V.prototype.isReactComponent = {}),
        (V.prototype.setState = function (E, L) {
            if (typeof E != "object" && typeof E != "function" && E != null)
                throw Error(
                    "takes an object of state variables to update or a function which returns an object of state variables."
                );
            this.updater.enqueueSetState(this, E, L, "setState");
        }),
        (V.prototype.forceUpdate = function (E) {
            this.updater.enqueueForceUpdate(this, E, "forceUpdate");
        });
    function N() {}
    N.prototype = V.prototype;
    function k(E, L, et) {
        (this.props = E),
            (this.context = L),
            (this.refs = R),
            (this.updater = et || T);
    }
    var G = (k.prototype = new N());
    (G.constructor = k), O(G, V.prototype), (G.isPureReactComponent = !0);
    var J = Array.isArray,
        H = { H: null, A: null, T: null, S: null },
        Z = Object.prototype.hasOwnProperty;
    function $(E, L, et, at, W, mt) {
        return (
            (et = mt.ref),
            {
                $$typeof: n,
                type: E,
                key: L,
                ref: et !== void 0 ? et : null,
                props: mt,
            }
        );
    }
    function st(E, L) {
        return $(E.type, L, void 0, void 0, void 0, E.props);
    }
    function F(E) {
        return typeof E == "object" && E !== null && E.$$typeof === n;
    }
    function lt(E) {
        var L = { "=": "=0", ":": "=2" };
        return (
            "$" +
            E.replace(/[=:]/g, function (et) {
                return L[et];
            })
        );
    }
    var tt = /\/+/g;
    function nt(E, L) {
        return typeof E == "object" && E !== null && E.key != null
            ? lt("" + E.key)
            : L.toString(36);
    }
    function dt() {}
    function K(E) {
        switch (E.status) {
            case "fulfilled":
                return E.value;
            case "rejected":
                throw E.reason;
            default:
                switch (
                    (typeof E.status == "string"
                        ? E.then(dt, dt)
                        : ((E.status = "pending"),
                          E.then(
                              function (L) {
                                  E.status === "pending" &&
                                      ((E.status = "fulfilled"), (E.value = L));
                              },
                              function (L) {
                                  E.status === "pending" &&
                                      ((E.status = "rejected"), (E.reason = L));
                              }
                          )),
                    E.status)
                ) {
                    case "fulfilled":
                        return E.value;
                    case "rejected":
                        throw E.reason;
                }
        }
        throw E;
    }
    function P(E, L, et, at, W) {
        var mt = typeof E;
        (mt === "undefined" || mt === "boolean") && (E = null);
        var ht = !1;
        if (E === null) ht = !0;
        else
            switch (mt) {
                case "bigint":
                case "string":
                case "number":
                    ht = !0;
                    break;
                case "object":
                    switch (E.$$typeof) {
                        case n:
                        case a:
                            ht = !0;
                            break;
                        case y:
                            return (
                                (ht = E._init), P(ht(E._payload), L, et, at, W)
                            );
                    }
            }
        if (ht)
            return (
                (W = W(E)),
                (ht = at === "" ? "." + nt(E, 0) : at),
                J(W)
                    ? ((et = ""),
                      ht != null && (et = ht.replace(tt, "$&/") + "/"),
                      P(W, L, et, "", function (_t) {
                          return _t;
                      }))
                    : W != null &&
                      (F(W) &&
                          (W = st(
                              W,
                              et +
                                  (W.key == null || (E && E.key === W.key)
                                      ? ""
                                      : ("" + W.key).replace(tt, "$&/") + "/") +
                                  ht
                          )),
                      L.push(W)),
                1
            );
        ht = 0;
        var Ht = at === "" ? "." : at + ":";
        if (J(E))
            for (var xt = 0; xt < E.length; xt++)
                (at = E[xt]),
                    (mt = Ht + nt(at, xt)),
                    (ht += P(at, L, et, mt, W));
        else if (((xt = b(E)), typeof xt == "function"))
            for (E = xt.call(E), xt = 0; !(at = E.next()).done; )
                (at = at.value),
                    (mt = Ht + nt(at, xt++)),
                    (ht += P(at, L, et, mt, W));
        else if (mt === "object") {
            if (typeof E.then == "function") return P(K(E), L, et, at, W);
            throw (
                ((L = String(E)),
                Error(
                    "Objects are not valid as a React child (found: " +
                        (L === "[object Object]"
                            ? "object with keys {" +
                              Object.keys(E).join(", ") +
                              "}"
                            : L) +
                        "). If you meant to render a collection of children, use an array instead."
                ))
            );
        }
        return ht;
    }
    function q(E, L, et) {
        if (E == null) return E;
        var at = [],
            W = 0;
        return (
            P(E, at, "", "", function (mt) {
                return L.call(et, mt, W++);
            }),
            at
        );
    }
    function M(E) {
        if (E._status === -1) {
            var L = E._result;
            (L = L()),
                L.then(
                    function (et) {
                        (E._status === 0 || E._status === -1) &&
                            ((E._status = 1), (E._result = et));
                    },
                    function (et) {
                        (E._status === 0 || E._status === -1) &&
                            ((E._status = 2), (E._result = et));
                    }
                ),
                E._status === -1 && ((E._status = 0), (E._result = L));
        }
        if (E._status === 1) return E._result.default;
        throw E._result;
    }
    var U =
        typeof reportError == "function"
            ? reportError
            : function (E) {
                  if (
                      typeof window == "object" &&
                      typeof window.ErrorEvent == "function"
                  ) {
                      var L = new window.ErrorEvent("error", {
                          bubbles: !0,
                          cancelable: !0,
                          message:
                              typeof E == "object" &&
                              E !== null &&
                              typeof E.message == "string"
                                  ? String(E.message)
                                  : String(E),
                          error: E,
                      });
                      if (!window.dispatchEvent(L)) return;
                  } else if (
                      typeof process == "object" &&
                      typeof process.emit == "function"
                  ) {
                      process.emit("uncaughtException", E);
                      return;
                  }
                  console.error(E);
              };
    function I() {}
    return (
        (gt.Children = {
            map: q,
            forEach: function (E, L, et) {
                q(
                    E,
                    function () {
                        L.apply(this, arguments);
                    },
                    et
                );
            },
            count: function (E) {
                var L = 0;
                return (
                    q(E, function () {
                        L++;
                    }),
                    L
                );
            },
            toArray: function (E) {
                return (
                    q(E, function (L) {
                        return L;
                    }) || []
                );
            },
            only: function (E) {
                if (!F(E))
                    throw Error(
                        "React.Children.only expected to receive a single React element child."
                    );
                return E;
            },
        }),
        (gt.Component = V),
        (gt.Fragment = l),
        (gt.Profiler = u),
        (gt.PureComponent = k),
        (gt.StrictMode = r),
        (gt.Suspense = p),
        (gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
            H),
        (gt.act = function () {
            throw Error(
                "act(...) is not supported in production builds of React."
            );
        }),
        (gt.cache = function (E) {
            return function () {
                return E.apply(null, arguments);
            };
        }),
        (gt.cloneElement = function (E, L, et) {
            if (E == null)
                throw Error(
                    "The argument must be a React element, but you passed " +
                        E +
                        "."
                );
            var at = O({}, E.props),
                W = E.key,
                mt = void 0;
            if (L != null)
                for (ht in (L.ref !== void 0 && (mt = void 0),
                L.key !== void 0 && (W = "" + L.key),
                L))
                    !Z.call(L, ht) ||
                        ht === "key" ||
                        ht === "__self" ||
                        ht === "__source" ||
                        (ht === "ref" && L.ref === void 0) ||
                        (at[ht] = L[ht]);
            var ht = arguments.length - 2;
            if (ht === 1) at.children = et;
            else if (1 < ht) {
                for (var Ht = Array(ht), xt = 0; xt < ht; xt++)
                    Ht[xt] = arguments[xt + 2];
                at.children = Ht;
            }
            return $(E.type, W, void 0, void 0, mt, at);
        }),
        (gt.createContext = function (E) {
            return (
                (E = {
                    $$typeof: d,
                    _currentValue: E,
                    _currentValue2: E,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                }),
                (E.Provider = E),
                (E.Consumer = { $$typeof: f, _context: E }),
                E
            );
        }),
        (gt.createElement = function (E, L, et) {
            var at,
                W = {},
                mt = null;
            if (L != null)
                for (at in (L.key !== void 0 && (mt = "" + L.key), L))
                    Z.call(L, at) &&
                        at !== "key" &&
                        at !== "__self" &&
                        at !== "__source" &&
                        (W[at] = L[at]);
            var ht = arguments.length - 2;
            if (ht === 1) W.children = et;
            else if (1 < ht) {
                for (var Ht = Array(ht), xt = 0; xt < ht; xt++)
                    Ht[xt] = arguments[xt + 2];
                W.children = Ht;
            }
            if (E && E.defaultProps)
                for (at in ((ht = E.defaultProps), ht))
                    W[at] === void 0 && (W[at] = ht[at]);
            return $(E, mt, void 0, void 0, null, W);
        }),
        (gt.createRef = function () {
            return { current: null };
        }),
        (gt.forwardRef = function (E) {
            return { $$typeof: h, render: E };
        }),
        (gt.isValidElement = F),
        (gt.lazy = function (E) {
            return {
                $$typeof: y,
                _payload: { _status: -1, _result: E },
                _init: M,
            };
        }),
        (gt.memo = function (E, L) {
            return { $$typeof: m, type: E, compare: L === void 0 ? null : L };
        }),
        (gt.startTransition = function (E) {
            var L = H.T,
                et = {};
            H.T = et;
            try {
                var at = E(),
                    W = H.S;
                W !== null && W(et, at),
                    typeof at == "object" &&
                        at !== null &&
                        typeof at.then == "function" &&
                        at.then(I, U);
            } catch (mt) {
                U(mt);
            } finally {
                H.T = L;
            }
        }),
        (gt.unstable_useCacheRefresh = function () {
            return H.H.useCacheRefresh();
        }),
        (gt.use = function (E) {
            return H.H.use(E);
        }),
        (gt.useActionState = function (E, L, et) {
            return H.H.useActionState(E, L, et);
        }),
        (gt.useCallback = function (E, L) {
            return H.H.useCallback(E, L);
        }),
        (gt.useContext = function (E) {
            return H.H.useContext(E);
        }),
        (gt.useDebugValue = function () {}),
        (gt.useDeferredValue = function (E, L) {
            return H.H.useDeferredValue(E, L);
        }),
        (gt.useEffect = function (E, L) {
            return H.H.useEffect(E, L);
        }),
        (gt.useId = function () {
            return H.H.useId();
        }),
        (gt.useImperativeHandle = function (E, L, et) {
            return H.H.useImperativeHandle(E, L, et);
        }),
        (gt.useInsertionEffect = function (E, L) {
            return H.H.useInsertionEffect(E, L);
        }),
        (gt.useLayoutEffect = function (E, L) {
            return H.H.useLayoutEffect(E, L);
        }),
        (gt.useMemo = function (E, L) {
            return H.H.useMemo(E, L);
        }),
        (gt.useOptimistic = function (E, L) {
            return H.H.useOptimistic(E, L);
        }),
        (gt.useReducer = function (E, L, et) {
            return H.H.useReducer(E, L, et);
        }),
        (gt.useRef = function (E) {
            return H.H.useRef(E);
        }),
        (gt.useState = function (E) {
            return H.H.useState(E);
        }),
        (gt.useSyncExternalStore = function (E, L, et) {
            return H.H.useSyncExternalStore(E, L, et);
        }),
        (gt.useTransition = function () {
            return H.H.useTransition();
        }),
        (gt.version = "19.0.0"),
        gt
    );
}
var mg;
function ul() {
    return mg || ((mg = 1), (Lc.exports = Sx())), Lc.exports;
}
var Q = ul();
const Ke = wy(Q);
var Bc = { exports: {} },
    ks = {},
    Vc = { exports: {} },
    Uc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gg;
function bx() {
    return (
        gg ||
            ((gg = 1),
            (function (n) {
                function a(q, M) {
                    var U = q.length;
                    q.push(M);
                    t: for (; 0 < U; ) {
                        var I = (U - 1) >>> 1,
                            E = q[I];
                        if (0 < u(E, M)) (q[I] = M), (q[U] = E), (U = I);
                        else break t;
                    }
                }
                function l(q) {
                    return q.length === 0 ? null : q[0];
                }
                function r(q) {
                    if (q.length === 0) return null;
                    var M = q[0],
                        U = q.pop();
                    if (U !== M) {
                        q[0] = U;
                        t: for (var I = 0, E = q.length, L = E >>> 1; I < L; ) {
                            var et = 2 * (I + 1) - 1,
                                at = q[et],
                                W = et + 1,
                                mt = q[W];
                            if (0 > u(at, U))
                                W < E && 0 > u(mt, at)
                                    ? ((q[I] = mt), (q[W] = U), (I = W))
                                    : ((q[I] = at), (q[et] = U), (I = et));
                            else if (W < E && 0 > u(mt, U))
                                (q[I] = mt), (q[W] = U), (I = W);
                            else break t;
                        }
                    }
                    return M;
                }
                function u(q, M) {
                    var U = q.sortIndex - M.sortIndex;
                    return U !== 0 ? U : q.id - M.id;
                }
                if (
                    ((n.unstable_now = void 0),
                    typeof performance == "object" &&
                        typeof performance.now == "function")
                ) {
                    var f = performance;
                    n.unstable_now = function () {
                        return f.now();
                    };
                } else {
                    var d = Date,
                        h = d.now();
                    n.unstable_now = function () {
                        return d.now() - h;
                    };
                }
                var p = [],
                    m = [],
                    y = 1,
                    v = null,
                    b = 3,
                    T = !1,
                    O = !1,
                    R = !1,
                    V = typeof setTimeout == "function" ? setTimeout : null,
                    N = typeof clearTimeout == "function" ? clearTimeout : null,
                    k = typeof setImmediate < "u" ? setImmediate : null;
                function G(q) {
                    for (var M = l(m); M !== null; ) {
                        if (M.callback === null) r(m);
                        else if (M.startTime <= q)
                            r(m), (M.sortIndex = M.expirationTime), a(p, M);
                        else break;
                        M = l(m);
                    }
                }
                function J(q) {
                    if (((R = !1), G(q), !O))
                        if (l(p) !== null) (O = !0), K();
                        else {
                            var M = l(m);
                            M !== null && P(J, M.startTime - q);
                        }
                }
                var H = !1,
                    Z = -1,
                    $ = 5,
                    st = -1;
                function F() {
                    return !(n.unstable_now() - st < $);
                }
                function lt() {
                    if (H) {
                        var q = n.unstable_now();
                        st = q;
                        var M = !0;
                        try {
                            t: {
                                (O = !1),
                                    R && ((R = !1), N(Z), (Z = -1)),
                                    (T = !0);
                                var U = b;
                                try {
                                    e: {
                                        for (
                                            G(q), v = l(p);
                                            v !== null &&
                                            !(v.expirationTime > q && F());

                                        ) {
                                            var I = v.callback;
                                            if (typeof I == "function") {
                                                (v.callback = null),
                                                    (b = v.priorityLevel);
                                                var E = I(
                                                    v.expirationTime <= q
                                                );
                                                if (
                                                    ((q = n.unstable_now()),
                                                    typeof E == "function")
                                                ) {
                                                    (v.callback = E),
                                                        G(q),
                                                        (M = !0);
                                                    break e;
                                                }
                                                v === l(p) && r(p), G(q);
                                            } else r(p);
                                            v = l(p);
                                        }
                                        if (v !== null) M = !0;
                                        else {
                                            var L = l(m);
                                            L !== null && P(J, L.startTime - q),
                                                (M = !1);
                                        }
                                    }
                                    break t;
                                } finally {
                                    (v = null), (b = U), (T = !1);
                                }
                                M = void 0;
                            }
                        } finally {
                            M ? tt() : (H = !1);
                        }
                    }
                }
                var tt;
                if (typeof k == "function")
                    tt = function () {
                        k(lt);
                    };
                else if (typeof MessageChannel < "u") {
                    var nt = new MessageChannel(),
                        dt = nt.port2;
                    (nt.port1.onmessage = lt),
                        (tt = function () {
                            dt.postMessage(null);
                        });
                } else
                    tt = function () {
                        V(lt, 0);
                    };
                function K() {
                    H || ((H = !0), tt());
                }
                function P(q, M) {
                    Z = V(function () {
                        q(n.unstable_now());
                    }, M);
                }
                (n.unstable_IdlePriority = 5),
                    (n.unstable_ImmediatePriority = 1),
                    (n.unstable_LowPriority = 4),
                    (n.unstable_NormalPriority = 3),
                    (n.unstable_Profiling = null),
                    (n.unstable_UserBlockingPriority = 2),
                    (n.unstable_cancelCallback = function (q) {
                        q.callback = null;
                    }),
                    (n.unstable_continueExecution = function () {
                        O || T || ((O = !0), K());
                    }),
                    (n.unstable_forceFrameRate = function (q) {
                        0 > q || 125 < q
                            ? console.error(
                                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                              )
                            : ($ = 0 < q ? Math.floor(1e3 / q) : 5);
                    }),
                    (n.unstable_getCurrentPriorityLevel = function () {
                        return b;
                    }),
                    (n.unstable_getFirstCallbackNode = function () {
                        return l(p);
                    }),
                    (n.unstable_next = function (q) {
                        switch (b) {
                            case 1:
                            case 2:
                            case 3:
                                var M = 3;
                                break;
                            default:
                                M = b;
                        }
                        var U = b;
                        b = M;
                        try {
                            return q();
                        } finally {
                            b = U;
                        }
                    }),
                    (n.unstable_pauseExecution = function () {}),
                    (n.unstable_requestPaint = function () {}),
                    (n.unstable_runWithPriority = function (q, M) {
                        switch (q) {
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                break;
                            default:
                                q = 3;
                        }
                        var U = b;
                        b = q;
                        try {
                            return M();
                        } finally {
                            b = U;
                        }
                    }),
                    (n.unstable_scheduleCallback = function (q, M, U) {
                        var I = n.unstable_now();
                        switch (
                            (typeof U == "object" && U !== null
                                ? ((U = U.delay),
                                  (U =
                                      typeof U == "number" && 0 < U
                                          ? I + U
                                          : I))
                                : (U = I),
                            q)
                        ) {
                            case 1:
                                var E = -1;
                                break;
                            case 2:
                                E = 250;
                                break;
                            case 5:
                                E = 1073741823;
                                break;
                            case 4:
                                E = 1e4;
                                break;
                            default:
                                E = 5e3;
                        }
                        return (
                            (E = U + E),
                            (q = {
                                id: y++,
                                callback: M,
                                priorityLevel: q,
                                startTime: U,
                                expirationTime: E,
                                sortIndex: -1,
                            }),
                            U > I
                                ? ((q.sortIndex = U),
                                  a(m, q),
                                  l(p) === null &&
                                      q === l(m) &&
                                      (R ? (N(Z), (Z = -1)) : (R = !0),
                                      P(J, U - I)))
                                : ((q.sortIndex = E),
                                  a(p, q),
                                  O || T || ((O = !0), K())),
                            q
                        );
                    }),
                    (n.unstable_shouldYield = F),
                    (n.unstable_wrapCallback = function (q) {
                        var M = b;
                        return function () {
                            var U = b;
                            b = M;
                            try {
                                return q.apply(this, arguments);
                            } finally {
                                b = U;
                            }
                        };
                    });
            })(Uc)),
        Uc
    );
}
var yg;
function xx() {
    return yg || ((yg = 1), (Vc.exports = bx())), Vc.exports;
}
var Hc = { exports: {} },
    ue = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vg;
function Tx() {
    if (vg) return ue;
    vg = 1;
    var n = ul();
    function a(p) {
        var m = "https://react.dev/errors/" + p;
        if (1 < arguments.length) {
            m += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var y = 2; y < arguments.length; y++)
                m += "&args[]=" + encodeURIComponent(arguments[y]);
        }
        return (
            "Minified React error #" +
            p +
            "; visit " +
            m +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
    }
    function l() {}
    var r = {
            d: {
                f: l,
                r: function () {
                    throw Error(a(522));
                },
                D: l,
                C: l,
                L: l,
                m: l,
                X: l,
                S: l,
                M: l,
            },
            p: 0,
            findDOMNode: null,
        },
        u = Symbol.for("react.portal");
    function f(p, m, y) {
        var v =
            3 < arguments.length && arguments[3] !== void 0
                ? arguments[3]
                : null;
        return {
            $$typeof: u,
            key: v == null ? null : "" + v,
            children: p,
            containerInfo: m,
            implementation: y,
        };
    }
    var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function h(p, m) {
        if (p === "font") return "";
        if (typeof m == "string") return m === "use-credentials" ? m : "";
    }
    return (
        (ue.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
        (ue.createPortal = function (p, m) {
            var y =
                2 < arguments.length && arguments[2] !== void 0
                    ? arguments[2]
                    : null;
            if (
                !m ||
                (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
            )
                throw Error(a(299));
            return f(p, m, null, y);
        }),
        (ue.flushSync = function (p) {
            var m = d.T,
                y = r.p;
            try {
                if (((d.T = null), (r.p = 2), p)) return p();
            } finally {
                (d.T = m), (r.p = y), r.d.f();
            }
        }),
        (ue.preconnect = function (p, m) {
            typeof p == "string" &&
                (m
                    ? ((m = m.crossOrigin),
                      (m =
                          typeof m == "string"
                              ? m === "use-credentials"
                                  ? m
                                  : ""
                              : void 0))
                    : (m = null),
                r.d.C(p, m));
        }),
        (ue.prefetchDNS = function (p) {
            typeof p == "string" && r.d.D(p);
        }),
        (ue.preinit = function (p, m) {
            if (typeof p == "string" && m && typeof m.as == "string") {
                var y = m.as,
                    v = h(y, m.crossOrigin),
                    b = typeof m.integrity == "string" ? m.integrity : void 0,
                    T =
                        typeof m.fetchPriority == "string"
                            ? m.fetchPriority
                            : void 0;
                y === "style"
                    ? r.d.S(
                          p,
                          typeof m.precedence == "string"
                              ? m.precedence
                              : void 0,
                          { crossOrigin: v, integrity: b, fetchPriority: T }
                      )
                    : y === "script" &&
                      r.d.X(p, {
                          crossOrigin: v,
                          integrity: b,
                          fetchPriority: T,
                          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
                      });
            }
        }),
        (ue.preinitModule = function (p, m) {
            if (typeof p == "string")
                if (typeof m == "object" && m !== null) {
                    if (m.as == null || m.as === "script") {
                        var y = h(m.as, m.crossOrigin);
                        r.d.M(p, {
                            crossOrigin: y,
                            integrity:
                                typeof m.integrity == "string"
                                    ? m.integrity
                                    : void 0,
                            nonce:
                                typeof m.nonce == "string" ? m.nonce : void 0,
                        });
                    }
                } else m == null && r.d.M(p);
        }),
        (ue.preload = function (p, m) {
            if (
                typeof p == "string" &&
                typeof m == "object" &&
                m !== null &&
                typeof m.as == "string"
            ) {
                var y = m.as,
                    v = h(y, m.crossOrigin);
                r.d.L(p, y, {
                    crossOrigin: v,
                    integrity:
                        typeof m.integrity == "string" ? m.integrity : void 0,
                    nonce: typeof m.nonce == "string" ? m.nonce : void 0,
                    type: typeof m.type == "string" ? m.type : void 0,
                    fetchPriority:
                        typeof m.fetchPriority == "string"
                            ? m.fetchPriority
                            : void 0,
                    referrerPolicy:
                        typeof m.referrerPolicy == "string"
                            ? m.referrerPolicy
                            : void 0,
                    imageSrcSet:
                        typeof m.imageSrcSet == "string"
                            ? m.imageSrcSet
                            : void 0,
                    imageSizes:
                        typeof m.imageSizes == "string" ? m.imageSizes : void 0,
                    media: typeof m.media == "string" ? m.media : void 0,
                });
            }
        }),
        (ue.preloadModule = function (p, m) {
            if (typeof p == "string")
                if (m) {
                    var y = h(m.as, m.crossOrigin);
                    r.d.m(p, {
                        as:
                            typeof m.as == "string" && m.as !== "script"
                                ? m.as
                                : void 0,
                        crossOrigin: y,
                        integrity:
                            typeof m.integrity == "string"
                                ? m.integrity
                                : void 0,
                    });
                } else r.d.m(p);
        }),
        (ue.requestFormReset = function (p) {
            r.d.r(p);
        }),
        (ue.unstable_batchedUpdates = function (p, m) {
            return p(m);
        }),
        (ue.useFormState = function (p, m, y) {
            return d.H.useFormState(p, m, y);
        }),
        (ue.useFormStatus = function () {
            return d.H.useHostTransitionStatus();
        }),
        (ue.version = "19.0.0"),
        ue
    );
}
var Sg;
function _y() {
    if (Sg) return Hc.exports;
    Sg = 1;
    function n() {
        if (
            !(
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
            )
        )
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
            } catch (a) {
                console.error(a);
            }
    }
    return n(), (Hc.exports = Tx()), Hc.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bg;
function Ex() {
    if (bg) return ks;
    bg = 1;
    var n = xx(),
        a = ul(),
        l = _y();
    function r(t) {
        var e = "https://react.dev/errors/" + t;
        if (1 < arguments.length) {
            e += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var i = 2; i < arguments.length; i++)
                e += "&args[]=" + encodeURIComponent(arguments[i]);
        }
        return (
            "Minified React error #" +
            t +
            "; visit " +
            e +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
    }
    function u(t) {
        return !(
            !t ||
            (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
        );
    }
    var f = Symbol.for("react.element"),
        d = Symbol.for("react.transitional.element"),
        h = Symbol.for("react.portal"),
        p = Symbol.for("react.fragment"),
        m = Symbol.for("react.strict_mode"),
        y = Symbol.for("react.profiler"),
        v = Symbol.for("react.provider"),
        b = Symbol.for("react.consumer"),
        T = Symbol.for("react.context"),
        O = Symbol.for("react.forward_ref"),
        R = Symbol.for("react.suspense"),
        V = Symbol.for("react.suspense_list"),
        N = Symbol.for("react.memo"),
        k = Symbol.for("react.lazy"),
        G = Symbol.for("react.offscreen"),
        J = Symbol.for("react.memo_cache_sentinel"),
        H = Symbol.iterator;
    function Z(t) {
        return t === null || typeof t != "object"
            ? null
            : ((t = (H && t[H]) || t["@@iterator"]),
              typeof t == "function" ? t : null);
    }
    var $ = Symbol.for("react.client.reference");
    function st(t) {
        if (t == null) return null;
        if (typeof t == "function")
            return t.$$typeof === $ ? null : t.displayName || t.name || null;
        if (typeof t == "string") return t;
        switch (t) {
            case p:
                return "Fragment";
            case h:
                return "Portal";
            case y:
                return "Profiler";
            case m:
                return "StrictMode";
            case R:
                return "Suspense";
            case V:
                return "SuspenseList";
        }
        if (typeof t == "object")
            switch (t.$$typeof) {
                case T:
                    return (t.displayName || "Context") + ".Provider";
                case b:
                    return (t._context.displayName || "Context") + ".Consumer";
                case O:
                    var e = t.render;
                    return (
                        (t = t.displayName),
                        t ||
                            ((t = e.displayName || e.name || ""),
                            (t =
                                t !== ""
                                    ? "ForwardRef(" + t + ")"
                                    : "ForwardRef")),
                        t
                    );
                case N:
                    return (
                        (e = t.displayName || null),
                        e !== null ? e : st(t.type) || "Memo"
                    );
                case k:
                    (e = t._payload), (t = t._init);
                    try {
                        return st(t(e));
                    } catch {}
            }
        return null;
    }
    var F = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        lt = Object.assign,
        tt,
        nt;
    function dt(t) {
        if (tt === void 0)
            try {
                throw Error();
            } catch (i) {
                var e = i.stack.trim().match(/\n( *(at )?)/);
                (tt = (e && e[1]) || ""),
                    (nt =
                        -1 <
                        i.stack.indexOf(`
    at`)
                            ? " (<anonymous>)"
                            : -1 < i.stack.indexOf("@")
                              ? "@unknown:0:0"
                              : "");
            }
        return (
            `
` +
            tt +
            t +
            nt
        );
    }
    var K = !1;
    function P(t, e) {
        if (!t || K) return "";
        K = !0;
        var i = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
            var s = {
                DetermineComponentFrameRoot: function () {
                    try {
                        if (e) {
                            var X = function () {
                                throw Error();
                            };
                            if (
                                (Object.defineProperty(X.prototype, "props", {
                                    set: function () {
                                        throw Error();
                                    },
                                }),
                                typeof Reflect == "object" && Reflect.construct)
                            ) {
                                try {
                                    Reflect.construct(X, []);
                                } catch (j) {
                                    var z = j;
                                }
                                Reflect.construct(t, [], X);
                            } else {
                                try {
                                    X.call();
                                } catch (j) {
                                    z = j;
                                }
                                t.call(X.prototype);
                            }
                        } else {
                            try {
                                throw Error();
                            } catch (j) {
                                z = j;
                            }
                            (X = t()) &&
                                typeof X.catch == "function" &&
                                X.catch(function () {});
                        }
                    } catch (j) {
                        if (j && z && typeof j.stack == "string")
                            return [j.stack, z.stack];
                    }
                    return [null, null];
                },
            };
            s.DetermineComponentFrameRoot.displayName =
                "DetermineComponentFrameRoot";
            var o = Object.getOwnPropertyDescriptor(
                s.DetermineComponentFrameRoot,
                "name"
            );
            o &&
                o.configurable &&
                Object.defineProperty(s.DetermineComponentFrameRoot, "name", {
                    value: "DetermineComponentFrameRoot",
                });
            var c = s.DetermineComponentFrameRoot(),
                g = c[0],
                S = c[1];
            if (g && S) {
                var x = g.split(`
`),
                    w = S.split(`
`);
                for (
                    o = s = 0;
                    s < x.length &&
                    !x[s].includes("DetermineComponentFrameRoot");

                )
                    s++;
                for (
                    ;
                    o < w.length &&
                    !w[o].includes("DetermineComponentFrameRoot");

                )
                    o++;
                if (s === x.length || o === w.length)
                    for (
                        s = x.length - 1, o = w.length - 1;
                        1 <= s && 0 <= o && x[s] !== w[o];

                    )
                        o--;
                for (; 1 <= s && 0 <= o; s--, o--)
                    if (x[s] !== w[o]) {
                        if (s !== 1 || o !== 1)
                            do
                                if ((s--, o--, 0 > o || x[s] !== w[o])) {
                                    var B =
                                        `
` + x[s].replace(" at new ", " at ");
                                    return (
                                        t.displayName &&
                                            B.includes("<anonymous>") &&
                                            (B = B.replace(
                                                "<anonymous>",
                                                t.displayName
                                            )),
                                        B
                                    );
                                }
                            while (1 <= s && 0 <= o);
                        break;
                    }
            }
        } finally {
            (K = !1), (Error.prepareStackTrace = i);
        }
        return (i = t ? t.displayName || t.name : "") ? dt(i) : "";
    }
    function q(t) {
        switch (t.tag) {
            case 26:
            case 27:
            case 5:
                return dt(t.type);
            case 16:
                return dt("Lazy");
            case 13:
                return dt("Suspense");
            case 19:
                return dt("SuspenseList");
            case 0:
            case 15:
                return (t = P(t.type, !1)), t;
            case 11:
                return (t = P(t.type.render, !1)), t;
            case 1:
                return (t = P(t.type, !0)), t;
            default:
                return "";
        }
    }
    function M(t) {
        try {
            var e = "";
            do (e += q(t)), (t = t.return);
            while (t);
            return e;
        } catch (i) {
            return (
                `
Error generating stack: ` +
                i.message +
                `
` +
                i.stack
            );
        }
    }
    function U(t) {
        var e = t,
            i = t;
        if (t.alternate) for (; e.return; ) e = e.return;
        else {
            t = e;
            do (e = t), e.flags & 4098 && (i = e.return), (t = e.return);
            while (t);
        }
        return e.tag === 3 ? i : null;
    }
    function I(t) {
        if (t.tag === 13) {
            var e = t.memoizedState;
            if (
                (e === null &&
                    ((t = t.alternate), t !== null && (e = t.memoizedState)),
                e !== null)
            )
                return e.dehydrated;
        }
        return null;
    }
    function E(t) {
        if (U(t) !== t) throw Error(r(188));
    }
    function L(t) {
        var e = t.alternate;
        if (!e) {
            if (((e = U(t)), e === null)) throw Error(r(188));
            return e !== t ? null : t;
        }
        for (var i = t, s = e; ; ) {
            var o = i.return;
            if (o === null) break;
            var c = o.alternate;
            if (c === null) {
                if (((s = o.return), s !== null)) {
                    i = s;
                    continue;
                }
                break;
            }
            if (o.child === c.child) {
                for (c = o.child; c; ) {
                    if (c === i) return E(o), t;
                    if (c === s) return E(o), e;
                    c = c.sibling;
                }
                throw Error(r(188));
            }
            if (i.return !== s.return) (i = o), (s = c);
            else {
                for (var g = !1, S = o.child; S; ) {
                    if (S === i) {
                        (g = !0), (i = o), (s = c);
                        break;
                    }
                    if (S === s) {
                        (g = !0), (s = o), (i = c);
                        break;
                    }
                    S = S.sibling;
                }
                if (!g) {
                    for (S = c.child; S; ) {
                        if (S === i) {
                            (g = !0), (i = c), (s = o);
                            break;
                        }
                        if (S === s) {
                            (g = !0), (s = c), (i = o);
                            break;
                        }
                        S = S.sibling;
                    }
                    if (!g) throw Error(r(189));
                }
            }
            if (i.alternate !== s) throw Error(r(190));
        }
        if (i.tag !== 3) throw Error(r(188));
        return i.stateNode.current === i ? t : e;
    }
    function et(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6) return t;
        for (t = t.child; t !== null; ) {
            if (((e = et(t)), e !== null)) return e;
            t = t.sibling;
        }
        return null;
    }
    var at = Array.isArray,
        W = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        mt = { pending: !1, data: null, method: null, action: null },
        ht = [],
        Ht = -1;
    function xt(t) {
        return { current: t };
    }
    function _t(t) {
        0 > Ht || ((t.current = ht[Ht]), (ht[Ht] = null), Ht--);
    }
    function Dt(t, e) {
        Ht++, (ht[Ht] = t.current), (t.current = e);
    }
    var de = xt(null),
        ye = xt(null),
        Bn = xt(null),
        gl = xt(null);
    function yl(t, e) {
        switch ((Dt(Bn, e), Dt(ye, t), Dt(de, null), (t = e.nodeType), t)) {
            case 9:
            case 11:
                e = (e = e.documentElement) && (e = e.namespaceURI) ? Ym(e) : 0;
                break;
            default:
                if (
                    ((t = t === 8 ? e.parentNode : e),
                    (e = t.tagName),
                    (t = t.namespaceURI))
                )
                    (t = Ym(t)), (e = Gm(t, e));
                else
                    switch (e) {
                        case "svg":
                            e = 1;
                            break;
                        case "math":
                            e = 2;
                            break;
                        default:
                            e = 0;
                    }
        }
        _t(de), Dt(de, e);
    }
    function Ki() {
        _t(de), _t(ye), _t(Bn);
    }
    function Mo(t) {
        t.memoizedState !== null && Dt(gl, t);
        var e = de.current,
            i = Gm(e, t.type);
        e !== i && (Dt(ye, t), Dt(de, i));
    }
    function vl(t) {
        ye.current === t && (_t(de), _t(ye)),
            gl.current === t && (_t(gl), (Vs._currentValue = mt));
    }
    var Oo = Object.prototype.hasOwnProperty,
        wo = n.unstable_scheduleCallback,
        _o = n.unstable_cancelCallback,
        P1 = n.unstable_shouldYield,
        Z1 = n.unstable_requestPaint,
        nn = n.unstable_now,
        Q1 = n.unstable_getCurrentPriorityLevel,
        Rd = n.unstable_ImmediatePriority,
        Cd = n.unstable_UserBlockingPriority,
        Sl = n.unstable_NormalPriority,
        F1 = n.unstable_LowPriority,
        zd = n.unstable_IdlePriority,
        W1 = n.log,
        J1 = n.unstable_setDisableYieldValue,
        Pa = null,
        Te = null;
    function $1(t) {
        if (Te && typeof Te.onCommitFiberRoot == "function")
            try {
                Te.onCommitFiberRoot(
                    Pa,
                    t,
                    void 0,
                    (t.current.flags & 128) === 128
                );
            } catch {}
    }
    function Vn(t) {
        if (
            (typeof W1 == "function" && J1(t),
            Te && typeof Te.setStrictMode == "function")
        )
            try {
                Te.setStrictMode(Pa, t);
            } catch {}
    }
    var Ee = Math.clz32 ? Math.clz32 : eS,
        I1 = Math.log,
        tS = Math.LN2;
    function eS(t) {
        return (t >>>= 0), t === 0 ? 32 : (31 - ((I1(t) / tS) | 0)) | 0;
    }
    var bl = 128,
        xl = 4194304;
    function hi(t) {
        var e = t & 42;
        if (e !== 0) return e;
        switch (t & -t) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
                return 64;
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t & 4194176;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return t & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return t;
        }
    }
    function Tl(t, e) {
        var i = t.pendingLanes;
        if (i === 0) return 0;
        var s = 0,
            o = t.suspendedLanes,
            c = t.pingedLanes,
            g = t.warmLanes;
        t = t.finishedLanes !== 0;
        var S = i & 134217727;
        return (
            S !== 0
                ? ((i = S & ~o),
                  i !== 0
                      ? (s = hi(i))
                      : ((c &= S),
                        c !== 0
                            ? (s = hi(c))
                            : t || ((g = S & ~g), g !== 0 && (s = hi(g)))))
                : ((S = i & ~o),
                  S !== 0
                      ? (s = hi(S))
                      : c !== 0
                        ? (s = hi(c))
                        : t || ((g = i & ~g), g !== 0 && (s = hi(g)))),
            s === 0
                ? 0
                : e !== 0 &&
                    e !== s &&
                    !(e & o) &&
                    ((o = s & -s),
                    (g = e & -e),
                    o >= g || (o === 32 && (g & 4194176) !== 0))
                  ? e
                  : s
        );
    }
    function Za(t, e) {
        return (
            (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0
        );
    }
    function nS(t, e) {
        switch (t) {
            case 1:
            case 2:
            case 4:
            case 8:
                return e + 250;
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1;
        }
    }
    function jd() {
        var t = bl;
        return (bl <<= 1), !(bl & 4194176) && (bl = 128), t;
    }
    function Nd() {
        var t = xl;
        return (xl <<= 1), !(xl & 62914560) && (xl = 4194304), t;
    }
    function Do(t) {
        for (var e = [], i = 0; 31 > i; i++) e.push(t);
        return e;
    }
    function Qa(t, e) {
        (t.pendingLanes |= e),
            e !== 268435456 &&
                ((t.suspendedLanes = 0),
                (t.pingedLanes = 0),
                (t.warmLanes = 0));
    }
    function iS(t, e, i, s, o, c) {
        var g = t.pendingLanes;
        (t.pendingLanes = i),
            (t.suspendedLanes = 0),
            (t.pingedLanes = 0),
            (t.warmLanes = 0),
            (t.expiredLanes &= i),
            (t.entangledLanes &= i),
            (t.errorRecoveryDisabledLanes &= i),
            (t.shellSuspendCounter = 0);
        var S = t.entanglements,
            x = t.expirationTimes,
            w = t.hiddenUpdates;
        for (i = g & ~i; 0 < i; ) {
            var B = 31 - Ee(i),
                X = 1 << B;
            (S[B] = 0), (x[B] = -1);
            var z = w[B];
            if (z !== null)
                for (w[B] = null, B = 0; B < z.length; B++) {
                    var j = z[B];
                    j !== null && (j.lane &= -536870913);
                }
            i &= ~X;
        }
        s !== 0 && Ld(t, s, 0),
            c !== 0 &&
                o === 0 &&
                t.tag !== 0 &&
                (t.suspendedLanes |= c & ~(g & ~e));
    }
    function Ld(t, e, i) {
        (t.pendingLanes |= e), (t.suspendedLanes &= ~e);
        var s = 31 - Ee(e);
        (t.entangledLanes |= e),
            (t.entanglements[s] =
                t.entanglements[s] | 1073741824 | (i & 4194218));
    }
    function Bd(t, e) {
        var i = (t.entangledLanes |= e);
        for (t = t.entanglements; i; ) {
            var s = 31 - Ee(i),
                o = 1 << s;
            (o & e) | (t[s] & e) && (t[s] |= e), (i &= ~o);
        }
    }
    function Vd(t) {
        return (
            (t &= -t),
            2 < t ? (8 < t ? (t & 134217727 ? 32 : 268435456) : 8) : 2
        );
    }
    function Ud() {
        var t = W.p;
        return t !== 0
            ? t
            : ((t = window.event), t === void 0 ? 32 : lg(t.type));
    }
    function aS(t, e) {
        var i = W.p;
        try {
            return (W.p = t), e();
        } finally {
            W.p = i;
        }
    }
    var Un = Math.random().toString(36).slice(2),
        re = "__reactFiber$" + Un,
        ve = "__reactProps$" + Un,
        Pi = "__reactContainer$" + Un,
        Ro = "__reactEvents$" + Un,
        sS = "__reactListeners$" + Un,
        lS = "__reactHandles$" + Un,
        Hd = "__reactResources$" + Un,
        Fa = "__reactMarker$" + Un;
    function Co(t) {
        delete t[re], delete t[ve], delete t[Ro], delete t[sS], delete t[lS];
    }
    function pi(t) {
        var e = t[re];
        if (e) return e;
        for (var i = t.parentNode; i; ) {
            if ((e = i[Pi] || i[re])) {
                if (
                    ((i = e.alternate),
                    e.child !== null || (i !== null && i.child !== null))
                )
                    for (t = Km(t); t !== null; ) {
                        if ((i = t[re])) return i;
                        t = Km(t);
                    }
                return e;
            }
            (t = i), (i = t.parentNode);
        }
        return null;
    }
    function Zi(t) {
        if ((t = t[re] || t[Pi])) {
            var e = t.tag;
            if (
                e === 5 ||
                e === 6 ||
                e === 13 ||
                e === 26 ||
                e === 27 ||
                e === 3
            )
                return t;
        }
        return null;
    }
    function Wa(t) {
        var e = t.tag;
        if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
        throw Error(r(33));
    }
    function Qi(t) {
        var e = t[Hd];
        return (
            e ||
                (e = t[Hd] =
                    {
                        hoistableStyles: new Map(),
                        hoistableScripts: new Map(),
                    }),
            e
        );
    }
    function $t(t) {
        t[Fa] = !0;
    }
    var qd = new Set(),
        Yd = {};
    function mi(t, e) {
        Fi(t, e), Fi(t + "Capture", e);
    }
    function Fi(t, e) {
        for (Yd[t] = e, t = 0; t < e.length; t++) qd.add(e[t]);
    }
    var mn = !(
            typeof window > "u" ||
            typeof window.document > "u" ||
            typeof window.document.createElement > "u"
        ),
        rS = RegExp(
            "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
        ),
        Gd = {},
        kd = {};
    function oS(t) {
        return Oo.call(kd, t)
            ? !0
            : Oo.call(Gd, t)
              ? !1
              : rS.test(t)
                ? (kd[t] = !0)
                : ((Gd[t] = !0), !1);
    }
    function El(t, e, i) {
        if (oS(e))
            if (i === null) t.removeAttribute(e);
            else {
                switch (typeof i) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        t.removeAttribute(e);
                        return;
                    case "boolean":
                        var s = e.toLowerCase().slice(0, 5);
                        if (s !== "data-" && s !== "aria-") {
                            t.removeAttribute(e);
                            return;
                        }
                }
                t.setAttribute(e, "" + i);
            }
    }
    function Al(t, e, i) {
        if (i === null) t.removeAttribute(e);
        else {
            switch (typeof i) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    t.removeAttribute(e);
                    return;
            }
            t.setAttribute(e, "" + i);
        }
    }
    function gn(t, e, i, s) {
        if (s === null) t.removeAttribute(i);
        else {
            switch (typeof s) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    t.removeAttribute(i);
                    return;
            }
            t.setAttributeNS(e, i, "" + s);
        }
    }
    function Re(t) {
        switch (typeof t) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return t;
            case "object":
                return t;
            default:
                return "";
        }
    }
    function Xd(t) {
        var e = t.type;
        return (
            (t = t.nodeName) &&
            t.toLowerCase() === "input" &&
            (e === "checkbox" || e === "radio")
        );
    }
    function uS(t) {
        var e = Xd(t) ? "checked" : "value",
            i = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
            s = "" + t[e];
        if (
            !t.hasOwnProperty(e) &&
            typeof i < "u" &&
            typeof i.get == "function" &&
            typeof i.set == "function"
        ) {
            var o = i.get,
                c = i.set;
            return (
                Object.defineProperty(t, e, {
                    configurable: !0,
                    get: function () {
                        return o.call(this);
                    },
                    set: function (g) {
                        (s = "" + g), c.call(this, g);
                    },
                }),
                Object.defineProperty(t, e, { enumerable: i.enumerable }),
                {
                    getValue: function () {
                        return s;
                    },
                    setValue: function (g) {
                        s = "" + g;
                    },
                    stopTracking: function () {
                        (t._valueTracker = null), delete t[e];
                    },
                }
            );
        }
    }
    function Ml(t) {
        t._valueTracker || (t._valueTracker = uS(t));
    }
    function Kd(t) {
        if (!t) return !1;
        var e = t._valueTracker;
        if (!e) return !0;
        var i = e.getValue(),
            s = "";
        return (
            t && (s = Xd(t) ? (t.checked ? "true" : "false") : t.value),
            (t = s),
            t !== i ? (e.setValue(t), !0) : !1
        );
    }
    function Ol(t) {
        if (
            ((t = t || (typeof document < "u" ? document : void 0)),
            typeof t > "u")
        )
            return null;
        try {
            return t.activeElement || t.body;
        } catch {
            return t.body;
        }
    }
    var cS = /[\n"\\]/g;
    function Ce(t) {
        return t.replace(cS, function (e) {
            return "\\" + e.charCodeAt(0).toString(16) + " ";
        });
    }
    function zo(t, e, i, s, o, c, g, S) {
        (t.name = ""),
            g != null &&
            typeof g != "function" &&
            typeof g != "symbol" &&
            typeof g != "boolean"
                ? (t.type = g)
                : t.removeAttribute("type"),
            e != null
                ? g === "number"
                    ? ((e === 0 && t.value === "") || t.value != e) &&
                      (t.value = "" + Re(e))
                    : t.value !== "" + Re(e) && (t.value = "" + Re(e))
                : (g !== "submit" && g !== "reset") ||
                  t.removeAttribute("value"),
            e != null
                ? jo(t, g, Re(e))
                : i != null
                  ? jo(t, g, Re(i))
                  : s != null && t.removeAttribute("value"),
            o == null && c != null && (t.defaultChecked = !!c),
            o != null &&
                (t.checked =
                    o && typeof o != "function" && typeof o != "symbol"),
            S != null &&
            typeof S != "function" &&
            typeof S != "symbol" &&
            typeof S != "boolean"
                ? (t.name = "" + Re(S))
                : t.removeAttribute("name");
    }
    function Pd(t, e, i, s, o, c, g, S) {
        if (
            (c != null &&
                typeof c != "function" &&
                typeof c != "symbol" &&
                typeof c != "boolean" &&
                (t.type = c),
            e != null || i != null)
        ) {
            if (!((c !== "submit" && c !== "reset") || e != null)) return;
            (i = i != null ? "" + Re(i) : ""),
                (e = e != null ? "" + Re(e) : i),
                S || e === t.value || (t.value = e),
                (t.defaultValue = e);
        }
        (s = s ?? o),
            (s = typeof s != "function" && typeof s != "symbol" && !!s),
            (t.checked = S ? t.checked : !!s),
            (t.defaultChecked = !!s),
            g != null &&
                typeof g != "function" &&
                typeof g != "symbol" &&
                typeof g != "boolean" &&
                (t.name = g);
    }
    function jo(t, e, i) {
        (e === "number" && Ol(t.ownerDocument) === t) ||
            t.defaultValue === "" + i ||
            (t.defaultValue = "" + i);
    }
    function Wi(t, e, i, s) {
        if (((t = t.options), e)) {
            e = {};
            for (var o = 0; o < i.length; o++) e["$" + i[o]] = !0;
            for (i = 0; i < t.length; i++)
                (o = e.hasOwnProperty("$" + t[i].value)),
                    t[i].selected !== o && (t[i].selected = o),
                    o && s && (t[i].defaultSelected = !0);
        } else {
            for (i = "" + Re(i), e = null, o = 0; o < t.length; o++) {
                if (t[o].value === i) {
                    (t[o].selected = !0), s && (t[o].defaultSelected = !0);
                    return;
                }
                e !== null || t[o].disabled || (e = t[o]);
            }
            e !== null && (e.selected = !0);
        }
    }
    function Zd(t, e, i) {
        if (
            e != null &&
            ((e = "" + Re(e)), e !== t.value && (t.value = e), i == null)
        ) {
            t.defaultValue !== e && (t.defaultValue = e);
            return;
        }
        t.defaultValue = i != null ? "" + Re(i) : "";
    }
    function Qd(t, e, i, s) {
        if (e == null) {
            if (s != null) {
                if (i != null) throw Error(r(92));
                if (at(s)) {
                    if (1 < s.length) throw Error(r(93));
                    s = s[0];
                }
                i = s;
            }
            i == null && (i = ""), (e = i);
        }
        (i = Re(e)),
            (t.defaultValue = i),
            (s = t.textContent),
            s === i && s !== "" && s !== null && (t.value = s);
    }
    function Ji(t, e) {
        if (e) {
            var i = t.firstChild;
            if (i && i === t.lastChild && i.nodeType === 3) {
                i.nodeValue = e;
                return;
            }
        }
        t.textContent = e;
    }
    var fS = new Set(
        "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
            " "
        )
    );
    function Fd(t, e, i) {
        var s = e.indexOf("--") === 0;
        i == null || typeof i == "boolean" || i === ""
            ? s
                ? t.setProperty(e, "")
                : e === "float"
                  ? (t.cssFloat = "")
                  : (t[e] = "")
            : s
              ? t.setProperty(e, i)
              : typeof i != "number" || i === 0 || fS.has(e)
                ? e === "float"
                    ? (t.cssFloat = i)
                    : (t[e] = ("" + i).trim())
                : (t[e] = i + "px");
    }
    function Wd(t, e, i) {
        if (e != null && typeof e != "object") throw Error(r(62));
        if (((t = t.style), i != null)) {
            for (var s in i)
                !i.hasOwnProperty(s) ||
                    (e != null && e.hasOwnProperty(s)) ||
                    (s.indexOf("--") === 0
                        ? t.setProperty(s, "")
                        : s === "float"
                          ? (t.cssFloat = "")
                          : (t[s] = ""));
            for (var o in e)
                (s = e[o]), e.hasOwnProperty(o) && i[o] !== s && Fd(t, o, s);
        } else for (var c in e) e.hasOwnProperty(c) && Fd(t, c, e[c]);
    }
    function No(t) {
        if (t.indexOf("-") === -1) return !1;
        switch (t) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0;
        }
    }
    var dS = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"],
        ]),
        hS =
            /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function wl(t) {
        return hS.test("" + t)
            ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
            : t;
    }
    var Lo = null;
    function Bo(t) {
        return (
            (t = t.target || t.srcElement || window),
            t.correspondingUseElement && (t = t.correspondingUseElement),
            t.nodeType === 3 ? t.parentNode : t
        );
    }
    var $i = null,
        Ii = null;
    function Jd(t) {
        var e = Zi(t);
        if (e && (t = e.stateNode)) {
            var i = t[ve] || null;
            t: switch (((t = e.stateNode), e.type)) {
                case "input":
                    if (
                        (zo(
                            t,
                            i.value,
                            i.defaultValue,
                            i.defaultValue,
                            i.checked,
                            i.defaultChecked,
                            i.type,
                            i.name
                        ),
                        (e = i.name),
                        i.type === "radio" && e != null)
                    ) {
                        for (i = t; i.parentNode; ) i = i.parentNode;
                        for (
                            i = i.querySelectorAll(
                                'input[name="' + Ce("" + e) + '"][type="radio"]'
                            ),
                                e = 0;
                            e < i.length;
                            e++
                        ) {
                            var s = i[e];
                            if (s !== t && s.form === t.form) {
                                var o = s[ve] || null;
                                if (!o) throw Error(r(90));
                                zo(
                                    s,
                                    o.value,
                                    o.defaultValue,
                                    o.defaultValue,
                                    o.checked,
                                    o.defaultChecked,
                                    o.type,
                                    o.name
                                );
                            }
                        }
                        for (e = 0; e < i.length; e++)
                            (s = i[e]), s.form === t.form && Kd(s);
                    }
                    break t;
                case "textarea":
                    Zd(t, i.value, i.defaultValue);
                    break t;
                case "select":
                    (e = i.value), e != null && Wi(t, !!i.multiple, e, !1);
            }
        }
    }
    var Vo = !1;
    function $d(t, e, i) {
        if (Vo) return t(e, i);
        Vo = !0;
        try {
            var s = t(e);
            return s;
        } finally {
            if (
                ((Vo = !1),
                ($i !== null || Ii !== null) &&
                    (cr(),
                    $i && ((e = $i), (t = Ii), (Ii = $i = null), Jd(e), t)))
            )
                for (e = 0; e < t.length; e++) Jd(t[e]);
        }
    }
    function Ja(t, e) {
        var i = t.stateNode;
        if (i === null) return null;
        var s = i[ve] || null;
        if (s === null) return null;
        i = s[e];
        t: switch (e) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (s = !s.disabled) ||
                    ((t = t.type),
                    (s = !(
                        t === "button" ||
                        t === "input" ||
                        t === "select" ||
                        t === "textarea"
                    ))),
                    (t = !s);
                break t;
            default:
                t = !1;
        }
        if (t) return null;
        if (i && typeof i != "function") throw Error(r(231, e, typeof i));
        return i;
    }
    var Uo = !1;
    if (mn)
        try {
            var $a = {};
            Object.defineProperty($a, "passive", {
                get: function () {
                    Uo = !0;
                },
            }),
                window.addEventListener("test", $a, $a),
                window.removeEventListener("test", $a, $a);
        } catch {
            Uo = !1;
        }
    var Hn = null,
        Ho = null,
        _l = null;
    function Id() {
        if (_l) return _l;
        var t,
            e = Ho,
            i = e.length,
            s,
            o = "value" in Hn ? Hn.value : Hn.textContent,
            c = o.length;
        for (t = 0; t < i && e[t] === o[t]; t++);
        var g = i - t;
        for (s = 1; s <= g && e[i - s] === o[c - s]; s++);
        return (_l = o.slice(t, 1 < s ? 1 - s : void 0));
    }
    function Dl(t) {
        var e = t.keyCode;
        return (
            "charCode" in t
                ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
                : (t = e),
            t === 10 && (t = 13),
            32 <= t || t === 13 ? t : 0
        );
    }
    function Rl() {
        return !0;
    }
    function th() {
        return !1;
    }
    function Se(t) {
        function e(i, s, o, c, g) {
            (this._reactName = i),
                (this._targetInst = o),
                (this.type = s),
                (this.nativeEvent = c),
                (this.target = g),
                (this.currentTarget = null);
            for (var S in t)
                t.hasOwnProperty(S) &&
                    ((i = t[S]), (this[S] = i ? i(c) : c[S]));
            return (
                (this.isDefaultPrevented = (
                    c.defaultPrevented != null
                        ? c.defaultPrevented
                        : c.returnValue === !1
                )
                    ? Rl
                    : th),
                (this.isPropagationStopped = th),
                this
            );
        }
        return (
            lt(e.prototype, {
                preventDefault: function () {
                    this.defaultPrevented = !0;
                    var i = this.nativeEvent;
                    i &&
                        (i.preventDefault
                            ? i.preventDefault()
                            : typeof i.returnValue != "unknown" &&
                              (i.returnValue = !1),
                        (this.isDefaultPrevented = Rl));
                },
                stopPropagation: function () {
                    var i = this.nativeEvent;
                    i &&
                        (i.stopPropagation
                            ? i.stopPropagation()
                            : typeof i.cancelBubble != "unknown" &&
                              (i.cancelBubble = !0),
                        (this.isPropagationStopped = Rl));
                },
                persist: function () {},
                isPersistent: Rl,
            }),
            e
        );
    }
    var gi = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (t) {
                return t.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
        },
        Cl = Se(gi),
        Ia = lt({}, gi, { view: 0, detail: 0 }),
        pS = Se(Ia),
        qo,
        Yo,
        ts,
        zl = lt({}, Ia, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: ko,
            button: 0,
            buttons: 0,
            relatedTarget: function (t) {
                return t.relatedTarget === void 0
                    ? t.fromElement === t.srcElement
                        ? t.toElement
                        : t.fromElement
                    : t.relatedTarget;
            },
            movementX: function (t) {
                return "movementX" in t
                    ? t.movementX
                    : (t !== ts &&
                          (ts && t.type === "mousemove"
                              ? ((qo = t.screenX - ts.screenX),
                                (Yo = t.screenY - ts.screenY))
                              : (Yo = qo = 0),
                          (ts = t)),
                      qo);
            },
            movementY: function (t) {
                return "movementY" in t ? t.movementY : Yo;
            },
        }),
        eh = Se(zl),
        mS = lt({}, zl, { dataTransfer: 0 }),
        gS = Se(mS),
        yS = lt({}, Ia, { relatedTarget: 0 }),
        Go = Se(yS),
        vS = lt({}, gi, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
        SS = Se(vS),
        bS = lt({}, gi, {
            clipboardData: function (t) {
                return "clipboardData" in t
                    ? t.clipboardData
                    : window.clipboardData;
            },
        }),
        xS = Se(bS),
        TS = lt({}, gi, { data: 0 }),
        nh = Se(TS),
        ES = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
        },
        AS = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
        },
        MS = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
        };
    function OS(t) {
        var e = this.nativeEvent;
        return e.getModifierState
            ? e.getModifierState(t)
            : (t = MS[t])
              ? !!e[t]
              : !1;
    }
    function ko() {
        return OS;
    }
    var wS = lt({}, Ia, {
            key: function (t) {
                if (t.key) {
                    var e = ES[t.key] || t.key;
                    if (e !== "Unidentified") return e;
                }
                return t.type === "keypress"
                    ? ((t = Dl(t)), t === 13 ? "Enter" : String.fromCharCode(t))
                    : t.type === "keydown" || t.type === "keyup"
                      ? AS[t.keyCode] || "Unidentified"
                      : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: ko,
            charCode: function (t) {
                return t.type === "keypress" ? Dl(t) : 0;
            },
            keyCode: function (t) {
                return t.type === "keydown" || t.type === "keyup"
                    ? t.keyCode
                    : 0;
            },
            which: function (t) {
                return t.type === "keypress"
                    ? Dl(t)
                    : t.type === "keydown" || t.type === "keyup"
                      ? t.keyCode
                      : 0;
            },
        }),
        _S = Se(wS),
        DS = lt({}, zl, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
        }),
        ih = Se(DS),
        RS = lt({}, Ia, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: ko,
        }),
        CS = Se(RS),
        zS = lt({}, gi, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
        jS = Se(zS),
        NS = lt({}, zl, {
            deltaX: function (t) {
                return "deltaX" in t
                    ? t.deltaX
                    : "wheelDeltaX" in t
                      ? -t.wheelDeltaX
                      : 0;
            },
            deltaY: function (t) {
                return "deltaY" in t
                    ? t.deltaY
                    : "wheelDeltaY" in t
                      ? -t.wheelDeltaY
                      : "wheelDelta" in t
                        ? -t.wheelDelta
                        : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
        }),
        LS = Se(NS),
        BS = lt({}, gi, { newState: 0, oldState: 0 }),
        VS = Se(BS),
        US = [9, 13, 27, 32],
        Xo = mn && "CompositionEvent" in window,
        es = null;
    mn && "documentMode" in document && (es = document.documentMode);
    var HS = mn && "TextEvent" in window && !es,
        ah = mn && (!Xo || (es && 8 < es && 11 >= es)),
        sh = " ",
        lh = !1;
    function rh(t, e) {
        switch (t) {
            case "keyup":
                return US.indexOf(e.keyCode) !== -1;
            case "keydown":
                return e.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1;
        }
    }
    function oh(t) {
        return (
            (t = t.detail), typeof t == "object" && "data" in t ? t.data : null
        );
    }
    var ta = !1;
    function qS(t, e) {
        switch (t) {
            case "compositionend":
                return oh(e);
            case "keypress":
                return e.which !== 32 ? null : ((lh = !0), sh);
            case "textInput":
                return (t = e.data), t === sh && lh ? null : t;
            default:
                return null;
        }
    }
    function YS(t, e) {
        if (ta)
            return t === "compositionend" || (!Xo && rh(t, e))
                ? ((t = Id()), (_l = Ho = Hn = null), (ta = !1), t)
                : null;
        switch (t) {
            case "paste":
                return null;
            case "keypress":
                if (
                    !(e.ctrlKey || e.altKey || e.metaKey) ||
                    (e.ctrlKey && e.altKey)
                ) {
                    if (e.char && 1 < e.char.length) return e.char;
                    if (e.which) return String.fromCharCode(e.which);
                }
                return null;
            case "compositionend":
                return ah && e.locale !== "ko" ? null : e.data;
            default:
                return null;
        }
    }
    var GS = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
    };
    function uh(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return e === "input" ? !!GS[t.type] : e === "textarea";
    }
    function ch(t, e, i, s) {
        $i ? (Ii ? Ii.push(s) : (Ii = [s])) : ($i = s),
            (e = mr(e, "onChange")),
            0 < e.length &&
                ((i = new Cl("onChange", "change", null, i, s)),
                t.push({ event: i, listeners: e }));
    }
    var ns = null,
        is = null;
    function kS(t) {
        Bm(t, 0);
    }
    function jl(t) {
        var e = Wa(t);
        if (Kd(e)) return t;
    }
    function fh(t, e) {
        if (t === "change") return e;
    }
    var dh = !1;
    if (mn) {
        var Ko;
        if (mn) {
            var Po = "oninput" in document;
            if (!Po) {
                var hh = document.createElement("div");
                hh.setAttribute("oninput", "return;"),
                    (Po = typeof hh.oninput == "function");
            }
            Ko = Po;
        } else Ko = !1;
        dh = Ko && (!document.documentMode || 9 < document.documentMode);
    }
    function ph() {
        ns && (ns.detachEvent("onpropertychange", mh), (is = ns = null));
    }
    function mh(t) {
        if (t.propertyName === "value" && jl(is)) {
            var e = [];
            ch(e, is, t, Bo(t)), $d(kS, e);
        }
    }
    function XS(t, e, i) {
        t === "focusin"
            ? (ph(), (ns = e), (is = i), ns.attachEvent("onpropertychange", mh))
            : t === "focusout" && ph();
    }
    function KS(t) {
        if (t === "selectionchange" || t === "keyup" || t === "keydown")
            return jl(is);
    }
    function PS(t, e) {
        if (t === "click") return jl(e);
    }
    function ZS(t, e) {
        if (t === "input" || t === "change") return jl(e);
    }
    function QS(t, e) {
        return (
            (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e)
        );
    }
    var Ae = typeof Object.is == "function" ? Object.is : QS;
    function as(t, e) {
        if (Ae(t, e)) return !0;
        if (
            typeof t != "object" ||
            t === null ||
            typeof e != "object" ||
            e === null
        )
            return !1;
        var i = Object.keys(t),
            s = Object.keys(e);
        if (i.length !== s.length) return !1;
        for (s = 0; s < i.length; s++) {
            var o = i[s];
            if (!Oo.call(e, o) || !Ae(t[o], e[o])) return !1;
        }
        return !0;
    }
    function gh(t) {
        for (; t && t.firstChild; ) t = t.firstChild;
        return t;
    }
    function yh(t, e) {
        var i = gh(t);
        t = 0;
        for (var s; i; ) {
            if (i.nodeType === 3) {
                if (((s = t + i.textContent.length), t <= e && s >= e))
                    return { node: i, offset: e - t };
                t = s;
            }
            t: {
                for (; i; ) {
                    if (i.nextSibling) {
                        i = i.nextSibling;
                        break t;
                    }
                    i = i.parentNode;
                }
                i = void 0;
            }
            i = gh(i);
        }
    }
    function vh(t, e) {
        return t && e
            ? t === e
                ? !0
                : t && t.nodeType === 3
                  ? !1
                  : e && e.nodeType === 3
                    ? vh(t, e.parentNode)
                    : "contains" in t
                      ? t.contains(e)
                      : t.compareDocumentPosition
                        ? !!(t.compareDocumentPosition(e) & 16)
                        : !1
            : !1;
    }
    function Sh(t) {
        t =
            t != null &&
            t.ownerDocument != null &&
            t.ownerDocument.defaultView != null
                ? t.ownerDocument.defaultView
                : window;
        for (var e = Ol(t.document); e instanceof t.HTMLIFrameElement; ) {
            try {
                var i = typeof e.contentWindow.location.href == "string";
            } catch {
                i = !1;
            }
            if (i) t = e.contentWindow;
            else break;
            e = Ol(t.document);
        }
        return e;
    }
    function Zo(t) {
        var e = t && t.nodeName && t.nodeName.toLowerCase();
        return (
            e &&
            ((e === "input" &&
                (t.type === "text" ||
                    t.type === "search" ||
                    t.type === "tel" ||
                    t.type === "url" ||
                    t.type === "password")) ||
                e === "textarea" ||
                t.contentEditable === "true")
        );
    }
    function FS(t, e) {
        var i = Sh(e);
        e = t.focusedElem;
        var s = t.selectionRange;
        if (
            i !== e &&
            e &&
            e.ownerDocument &&
            vh(e.ownerDocument.documentElement, e)
        ) {
            if (s !== null && Zo(e)) {
                if (
                    ((t = s.start),
                    (i = s.end),
                    i === void 0 && (i = t),
                    "selectionStart" in e)
                )
                    (e.selectionStart = t),
                        (e.selectionEnd = Math.min(i, e.value.length));
                else if (
                    ((i =
                        ((t = e.ownerDocument || document) && t.defaultView) ||
                        window),
                    i.getSelection)
                ) {
                    i = i.getSelection();
                    var o = e.textContent.length,
                        c = Math.min(s.start, o);
                    (s = s.end === void 0 ? c : Math.min(s.end, o)),
                        !i.extend && c > s && ((o = s), (s = c), (c = o)),
                        (o = yh(e, c));
                    var g = yh(e, s);
                    o &&
                        g &&
                        (i.rangeCount !== 1 ||
                            i.anchorNode !== o.node ||
                            i.anchorOffset !== o.offset ||
                            i.focusNode !== g.node ||
                            i.focusOffset !== g.offset) &&
                        ((t = t.createRange()),
                        t.setStart(o.node, o.offset),
                        i.removeAllRanges(),
                        c > s
                            ? (i.addRange(t), i.extend(g.node, g.offset))
                            : (t.setEnd(g.node, g.offset), i.addRange(t)));
                }
            }
            for (t = [], i = e; (i = i.parentNode); )
                i.nodeType === 1 &&
                    t.push({
                        element: i,
                        left: i.scrollLeft,
                        top: i.scrollTop,
                    });
            for (
                typeof e.focus == "function" && e.focus(), e = 0;
                e < t.length;
                e++
            )
                (i = t[e]),
                    (i.element.scrollLeft = i.left),
                    (i.element.scrollTop = i.top);
        }
    }
    var WS = mn && "documentMode" in document && 11 >= document.documentMode,
        ea = null,
        Qo = null,
        ss = null,
        Fo = !1;
    function bh(t, e, i) {
        var s =
            i.window === i
                ? i.document
                : i.nodeType === 9
                  ? i
                  : i.ownerDocument;
        Fo ||
            ea == null ||
            ea !== Ol(s) ||
            ((s = ea),
            "selectionStart" in s && Zo(s)
                ? (s = { start: s.selectionStart, end: s.selectionEnd })
                : ((s = (
                      (s.ownerDocument && s.ownerDocument.defaultView) ||
                      window
                  ).getSelection()),
                  (s = {
                      anchorNode: s.anchorNode,
                      anchorOffset: s.anchorOffset,
                      focusNode: s.focusNode,
                      focusOffset: s.focusOffset,
                  })),
            (ss && as(ss, s)) ||
                ((ss = s),
                (s = mr(Qo, "onSelect")),
                0 < s.length &&
                    ((e = new Cl("onSelect", "select", null, e, i)),
                    t.push({ event: e, listeners: s }),
                    (e.target = ea))));
    }
    function yi(t, e) {
        var i = {};
        return (
            (i[t.toLowerCase()] = e.toLowerCase()),
            (i["Webkit" + t] = "webkit" + e),
            (i["Moz" + t] = "moz" + e),
            i
        );
    }
    var na = {
            animationend: yi("Animation", "AnimationEnd"),
            animationiteration: yi("Animation", "AnimationIteration"),
            animationstart: yi("Animation", "AnimationStart"),
            transitionrun: yi("Transition", "TransitionRun"),
            transitionstart: yi("Transition", "TransitionStart"),
            transitioncancel: yi("Transition", "TransitionCancel"),
            transitionend: yi("Transition", "TransitionEnd"),
        },
        Wo = {},
        xh = {};
    mn &&
        ((xh = document.createElement("div").style),
        "AnimationEvent" in window ||
            (delete na.animationend.animation,
            delete na.animationiteration.animation,
            delete na.animationstart.animation),
        "TransitionEvent" in window || delete na.transitionend.transition);
    function vi(t) {
        if (Wo[t]) return Wo[t];
        if (!na[t]) return t;
        var e = na[t],
            i;
        for (i in e) if (e.hasOwnProperty(i) && i in xh) return (Wo[t] = e[i]);
        return t;
    }
    var Th = vi("animationend"),
        Eh = vi("animationiteration"),
        Ah = vi("animationstart"),
        JS = vi("transitionrun"),
        $S = vi("transitionstart"),
        IS = vi("transitioncancel"),
        Mh = vi("transitionend"),
        Oh = new Map(),
        wh =
            "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(
                " "
            );
    function Ze(t, e) {
        Oh.set(t, e), mi(e, [t]);
    }
    var ze = [],
        ia = 0,
        Jo = 0;
    function Nl() {
        for (var t = ia, e = (Jo = ia = 0); e < t; ) {
            var i = ze[e];
            ze[e++] = null;
            var s = ze[e];
            ze[e++] = null;
            var o = ze[e];
            ze[e++] = null;
            var c = ze[e];
            if (((ze[e++] = null), s !== null && o !== null)) {
                var g = s.pending;
                g === null ? (o.next = o) : ((o.next = g.next), (g.next = o)),
                    (s.pending = o);
            }
            c !== 0 && _h(i, o, c);
        }
    }
    function Ll(t, e, i, s) {
        (ze[ia++] = t),
            (ze[ia++] = e),
            (ze[ia++] = i),
            (ze[ia++] = s),
            (Jo |= s),
            (t.lanes |= s),
            (t = t.alternate),
            t !== null && (t.lanes |= s);
    }
    function $o(t, e, i, s) {
        return Ll(t, e, i, s), Bl(t);
    }
    function qn(t, e) {
        return Ll(t, null, null, e), Bl(t);
    }
    function _h(t, e, i) {
        t.lanes |= i;
        var s = t.alternate;
        s !== null && (s.lanes |= i);
        for (var o = !1, c = t.return; c !== null; )
            (c.childLanes |= i),
                (s = c.alternate),
                s !== null && (s.childLanes |= i),
                c.tag === 22 &&
                    ((t = c.stateNode),
                    t === null || t._visibility & 1 || (o = !0)),
                (t = c),
                (c = c.return);
        o &&
            e !== null &&
            t.tag === 3 &&
            ((c = t.stateNode),
            (o = 31 - Ee(i)),
            (c = c.hiddenUpdates),
            (t = c[o]),
            t === null ? (c[o] = [e]) : t.push(e),
            (e.lane = i | 536870912));
    }
    function Bl(t) {
        if (50 < Rs) throw ((Rs = 0), (ac = null), Error(r(185)));
        for (var e = t.return; e !== null; ) (t = e), (e = t.return);
        return t.tag === 3 ? t.stateNode : null;
    }
    var aa = {},
        Dh = new WeakMap();
    function je(t, e) {
        if (typeof t == "object" && t !== null) {
            var i = Dh.get(t);
            return i !== void 0
                ? i
                : ((e = { value: t, source: e, stack: M(e) }), Dh.set(t, e), e);
        }
        return { value: t, source: e, stack: M(e) };
    }
    var sa = [],
        la = 0,
        Vl = null,
        Ul = 0,
        Ne = [],
        Le = 0,
        Si = null,
        yn = 1,
        vn = "";
    function bi(t, e) {
        (sa[la++] = Ul), (sa[la++] = Vl), (Vl = t), (Ul = e);
    }
    function Rh(t, e, i) {
        (Ne[Le++] = yn), (Ne[Le++] = vn), (Ne[Le++] = Si), (Si = t);
        var s = yn;
        t = vn;
        var o = 32 - Ee(s) - 1;
        (s &= ~(1 << o)), (i += 1);
        var c = 32 - Ee(e) + o;
        if (30 < c) {
            var g = o - (o % 5);
            (c = (s & ((1 << g) - 1)).toString(32)),
                (s >>= g),
                (o -= g),
                (yn = (1 << (32 - Ee(e) + o)) | (i << o) | s),
                (vn = c + t);
        } else (yn = (1 << c) | (i << o) | s), (vn = t);
    }
    function Io(t) {
        t.return !== null && (bi(t, 1), Rh(t, 1, 0));
    }
    function tu(t) {
        for (; t === Vl; )
            (Vl = sa[--la]), (sa[la] = null), (Ul = sa[--la]), (sa[la] = null);
        for (; t === Si; )
            (Si = Ne[--Le]),
                (Ne[Le] = null),
                (vn = Ne[--Le]),
                (Ne[Le] = null),
                (yn = Ne[--Le]),
                (Ne[Le] = null);
    }
    var he = null,
        ae = null,
        At = !1,
        Qe = null,
        an = !1,
        eu = Error(r(519));
    function xi(t) {
        var e = Error(r(418, ""));
        throw (os(je(e, t)), eu);
    }
    function Ch(t) {
        var e = t.stateNode,
            i = t.type,
            s = t.memoizedProps;
        switch (((e[re] = t), (e[ve] = s), i)) {
            case "dialog":
                Tt("cancel", e), Tt("close", e);
                break;
            case "iframe":
            case "object":
            case "embed":
                Tt("load", e);
                break;
            case "video":
            case "audio":
                for (i = 0; i < zs.length; i++) Tt(zs[i], e);
                break;
            case "source":
                Tt("error", e);
                break;
            case "img":
            case "image":
            case "link":
                Tt("error", e), Tt("load", e);
                break;
            case "details":
                Tt("toggle", e);
                break;
            case "input":
                Tt("invalid", e),
                    Pd(
                        e,
                        s.value,
                        s.defaultValue,
                        s.checked,
                        s.defaultChecked,
                        s.type,
                        s.name,
                        !0
                    ),
                    Ml(e);
                break;
            case "select":
                Tt("invalid", e);
                break;
            case "textarea":
                Tt("invalid", e),
                    Qd(e, s.value, s.defaultValue, s.children),
                    Ml(e);
        }
        (i = s.children),
            (typeof i != "string" &&
                typeof i != "number" &&
                typeof i != "bigint") ||
            e.textContent === "" + i ||
            s.suppressHydrationWarning === !0 ||
            qm(e.textContent, i)
                ? (s.popover != null &&
                      (Tt("beforetoggle", e), Tt("toggle", e)),
                  s.onScroll != null && Tt("scroll", e),
                  s.onScrollEnd != null && Tt("scrollend", e),
                  s.onClick != null && (e.onclick = gr),
                  (e = !0))
                : (e = !1),
            e || xi(t);
    }
    function zh(t) {
        for (he = t.return; he; )
            switch (he.tag) {
                case 3:
                case 27:
                    an = !0;
                    return;
                case 5:
                case 13:
                    an = !1;
                    return;
                default:
                    he = he.return;
            }
    }
    function ls(t) {
        if (t !== he) return !1;
        if (!At) return zh(t), (At = !0), !1;
        var e = !1,
            i;
        if (
            ((i = t.tag !== 3 && t.tag !== 27) &&
                ((i = t.tag === 5) &&
                    ((i = t.type),
                    (i =
                        !(i !== "form" && i !== "button") ||
                        xc(t.type, t.memoizedProps))),
                (i = !i)),
            i && (e = !0),
            e && ae && xi(t),
            zh(t),
            t.tag === 13)
        ) {
            if (
                ((t = t.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
            )
                throw Error(r(317));
            t: {
                for (t = t.nextSibling, e = 0; t; ) {
                    if (t.nodeType === 8)
                        if (((i = t.data), i === "/$")) {
                            if (e === 0) {
                                ae = We(t.nextSibling);
                                break t;
                            }
                            e--;
                        } else (i !== "$" && i !== "$!" && i !== "$?") || e++;
                    t = t.nextSibling;
                }
                ae = null;
            }
        } else ae = he ? We(t.stateNode.nextSibling) : null;
        return !0;
    }
    function rs() {
        (ae = he = null), (At = !1);
    }
    function os(t) {
        Qe === null ? (Qe = [t]) : Qe.push(t);
    }
    var us = Error(r(460)),
        jh = Error(r(474)),
        nu = { then: function () {} };
    function Nh(t) {
        return (t = t.status), t === "fulfilled" || t === "rejected";
    }
    function Hl() {}
    function Lh(t, e, i) {
        switch (
            ((i = t[i]),
            i === void 0 ? t.push(e) : i !== e && (e.then(Hl, Hl), (e = i)),
            e.status)
        ) {
            case "fulfilled":
                return e.value;
            case "rejected":
                throw ((t = e.reason), t === us ? Error(r(483)) : t);
            default:
                if (typeof e.status == "string") e.then(Hl, Hl);
                else {
                    if (((t = jt), t !== null && 100 < t.shellSuspendCounter))
                        throw Error(r(482));
                    (t = e),
                        (t.status = "pending"),
                        t.then(
                            function (s) {
                                if (e.status === "pending") {
                                    var o = e;
                                    (o.status = "fulfilled"), (o.value = s);
                                }
                            },
                            function (s) {
                                if (e.status === "pending") {
                                    var o = e;
                                    (o.status = "rejected"), (o.reason = s);
                                }
                            }
                        );
                }
                switch (e.status) {
                    case "fulfilled":
                        return e.value;
                    case "rejected":
                        throw ((t = e.reason), t === us ? Error(r(483)) : t);
                }
                throw ((cs = e), us);
        }
    }
    var cs = null;
    function Bh() {
        if (cs === null) throw Error(r(459));
        var t = cs;
        return (cs = null), t;
    }
    var ra = null,
        fs = 0;
    function ql(t) {
        var e = fs;
        return (fs += 1), ra === null && (ra = []), Lh(ra, t, e);
    }
    function ds(t, e) {
        (e = e.props.ref), (t.ref = e !== void 0 ? e : null);
    }
    function Yl(t, e) {
        throw e.$$typeof === f
            ? Error(r(525))
            : ((t = Object.prototype.toString.call(e)),
              Error(
                  r(
                      31,
                      t === "[object Object]"
                          ? "object with keys {" +
                                Object.keys(e).join(", ") +
                                "}"
                          : t
                  )
              ));
    }
    function Vh(t) {
        var e = t._init;
        return e(t._payload);
    }
    function Uh(t) {
        function e(D, A) {
            if (t) {
                var C = D.deletions;
                C === null ? ((D.deletions = [A]), (D.flags |= 16)) : C.push(A);
            }
        }
        function i(D, A) {
            if (!t) return null;
            for (; A !== null; ) e(D, A), (A = A.sibling);
            return null;
        }
        function s(D) {
            for (var A = new Map(); D !== null; )
                D.key !== null ? A.set(D.key, D) : A.set(D.index, D),
                    (D = D.sibling);
            return A;
        }
        function o(D, A) {
            return (D = $n(D, A)), (D.index = 0), (D.sibling = null), D;
        }
        function c(D, A, C) {
            return (
                (D.index = C),
                t
                    ? ((C = D.alternate),
                      C !== null
                          ? ((C = C.index),
                            C < A ? ((D.flags |= 33554434), A) : C)
                          : ((D.flags |= 33554434), A))
                    : ((D.flags |= 1048576), A)
            );
        }
        function g(D) {
            return t && D.alternate === null && (D.flags |= 33554434), D;
        }
        function S(D, A, C, Y) {
            return A === null || A.tag !== 6
                ? ((A = Wu(C, D.mode, Y)), (A.return = D), A)
                : ((A = o(A, C)), (A.return = D), A);
        }
        function x(D, A, C, Y) {
            var it = C.type;
            return it === p
                ? B(D, A, C.props.children, Y, C.key)
                : A !== null &&
                    (A.elementType === it ||
                        (typeof it == "object" &&
                            it !== null &&
                            it.$$typeof === k &&
                            Vh(it) === A.type))
                  ? ((A = o(A, C.props)), ds(A, C), (A.return = D), A)
                  : ((A = sr(C.type, C.key, C.props, null, D.mode, Y)),
                    ds(A, C),
                    (A.return = D),
                    A);
        }
        function w(D, A, C, Y) {
            return A === null ||
                A.tag !== 4 ||
                A.stateNode.containerInfo !== C.containerInfo ||
                A.stateNode.implementation !== C.implementation
                ? ((A = Ju(C, D.mode, Y)), (A.return = D), A)
                : ((A = o(A, C.children || [])), (A.return = D), A);
        }
        function B(D, A, C, Y, it) {
            return A === null || A.tag !== 7
                ? ((A = Ci(C, D.mode, Y, it)), (A.return = D), A)
                : ((A = o(A, C)), (A.return = D), A);
        }
        function X(D, A, C) {
            if (
                (typeof A == "string" && A !== "") ||
                typeof A == "number" ||
                typeof A == "bigint"
            )
                return (A = Wu("" + A, D.mode, C)), (A.return = D), A;
            if (typeof A == "object" && A !== null) {
                switch (A.$$typeof) {
                    case d:
                        return (
                            (C = sr(A.type, A.key, A.props, null, D.mode, C)),
                            ds(C, A),
                            (C.return = D),
                            C
                        );
                    case h:
                        return (A = Ju(A, D.mode, C)), (A.return = D), A;
                    case k:
                        var Y = A._init;
                        return (A = Y(A._payload)), X(D, A, C);
                }
                if (at(A) || Z(A))
                    return (A = Ci(A, D.mode, C, null)), (A.return = D), A;
                if (typeof A.then == "function") return X(D, ql(A), C);
                if (A.$$typeof === T) return X(D, nr(D, A), C);
                Yl(D, A);
            }
            return null;
        }
        function z(D, A, C, Y) {
            var it = A !== null ? A.key : null;
            if (
                (typeof C == "string" && C !== "") ||
                typeof C == "number" ||
                typeof C == "bigint"
            )
                return it !== null ? null : S(D, A, "" + C, Y);
            if (typeof C == "object" && C !== null) {
                switch (C.$$typeof) {
                    case d:
                        return C.key === it ? x(D, A, C, Y) : null;
                    case h:
                        return C.key === it ? w(D, A, C, Y) : null;
                    case k:
                        return (
                            (it = C._init), (C = it(C._payload)), z(D, A, C, Y)
                        );
                }
                if (at(C) || Z(C))
                    return it !== null ? null : B(D, A, C, Y, null);
                if (typeof C.then == "function") return z(D, A, ql(C), Y);
                if (C.$$typeof === T) return z(D, A, nr(D, C), Y);
                Yl(D, C);
            }
            return null;
        }
        function j(D, A, C, Y, it) {
            if (
                (typeof Y == "string" && Y !== "") ||
                typeof Y == "number" ||
                typeof Y == "bigint"
            )
                return (D = D.get(C) || null), S(A, D, "" + Y, it);
            if (typeof Y == "object" && Y !== null) {
                switch (Y.$$typeof) {
                    case d:
                        return (
                            (D = D.get(Y.key === null ? C : Y.key) || null),
                            x(A, D, Y, it)
                        );
                    case h:
                        return (
                            (D = D.get(Y.key === null ? C : Y.key) || null),
                            w(A, D, Y, it)
                        );
                    case k:
                        var St = Y._init;
                        return (Y = St(Y._payload)), j(D, A, C, Y, it);
                }
                if (at(Y) || Z(Y))
                    return (D = D.get(C) || null), B(A, D, Y, it, null);
                if (typeof Y.then == "function") return j(D, A, C, ql(Y), it);
                if (Y.$$typeof === T) return j(D, A, C, nr(A, Y), it);
                Yl(A, Y);
            }
            return null;
        }
        function rt(D, A, C, Y) {
            for (
                var it = null, St = null, ut = A, ct = (A = 0), ee = null;
                ut !== null && ct < C.length;
                ct++
            ) {
                ut.index > ct ? ((ee = ut), (ut = null)) : (ee = ut.sibling);
                var Mt = z(D, ut, C[ct], Y);
                if (Mt === null) {
                    ut === null && (ut = ee);
                    break;
                }
                t && ut && Mt.alternate === null && e(D, ut),
                    (A = c(Mt, A, ct)),
                    St === null ? (it = Mt) : (St.sibling = Mt),
                    (St = Mt),
                    (ut = ee);
            }
            if (ct === C.length) return i(D, ut), At && bi(D, ct), it;
            if (ut === null) {
                for (; ct < C.length; ct++)
                    (ut = X(D, C[ct], Y)),
                        ut !== null &&
                            ((A = c(ut, A, ct)),
                            St === null ? (it = ut) : (St.sibling = ut),
                            (St = ut));
                return At && bi(D, ct), it;
            }
            for (ut = s(ut); ct < C.length; ct++)
                (ee = j(ut, D, ct, C[ct], Y)),
                    ee !== null &&
                        (t &&
                            ee.alternate !== null &&
                            ut.delete(ee.key === null ? ct : ee.key),
                        (A = c(ee, A, ct)),
                        St === null ? (it = ee) : (St.sibling = ee),
                        (St = ee));
            return (
                t &&
                    ut.forEach(function (si) {
                        return e(D, si);
                    }),
                At && bi(D, ct),
                it
            );
        }
        function pt(D, A, C, Y) {
            if (C == null) throw Error(r(151));
            for (
                var it = null,
                    St = null,
                    ut = A,
                    ct = (A = 0),
                    ee = null,
                    Mt = C.next();
                ut !== null && !Mt.done;
                ct++, Mt = C.next()
            ) {
                ut.index > ct ? ((ee = ut), (ut = null)) : (ee = ut.sibling);
                var si = z(D, ut, Mt.value, Y);
                if (si === null) {
                    ut === null && (ut = ee);
                    break;
                }
                t && ut && si.alternate === null && e(D, ut),
                    (A = c(si, A, ct)),
                    St === null ? (it = si) : (St.sibling = si),
                    (St = si),
                    (ut = ee);
            }
            if (Mt.done) return i(D, ut), At && bi(D, ct), it;
            if (ut === null) {
                for (; !Mt.done; ct++, Mt = C.next())
                    (Mt = X(D, Mt.value, Y)),
                        Mt !== null &&
                            ((A = c(Mt, A, ct)),
                            St === null ? (it = Mt) : (St.sibling = Mt),
                            (St = Mt));
                return At && bi(D, ct), it;
            }
            for (ut = s(ut); !Mt.done; ct++, Mt = C.next())
                (Mt = j(ut, D, ct, Mt.value, Y)),
                    Mt !== null &&
                        (t &&
                            Mt.alternate !== null &&
                            ut.delete(Mt.key === null ? ct : Mt.key),
                        (A = c(Mt, A, ct)),
                        St === null ? (it = Mt) : (St.sibling = Mt),
                        (St = Mt));
            return (
                t &&
                    ut.forEach(function (hx) {
                        return e(D, hx);
                    }),
                At && bi(D, ct),
                it
            );
        }
        function Gt(D, A, C, Y) {
            if (
                (typeof C == "object" &&
                    C !== null &&
                    C.type === p &&
                    C.key === null &&
                    (C = C.props.children),
                typeof C == "object" && C !== null)
            ) {
                switch (C.$$typeof) {
                    case d:
                        t: {
                            for (var it = C.key; A !== null; ) {
                                if (A.key === it) {
                                    if (((it = C.type), it === p)) {
                                        if (A.tag === 7) {
                                            i(D, A.sibling),
                                                (Y = o(A, C.props.children)),
                                                (Y.return = D),
                                                (D = Y);
                                            break t;
                                        }
                                    } else if (
                                        A.elementType === it ||
                                        (typeof it == "object" &&
                                            it !== null &&
                                            it.$$typeof === k &&
                                            Vh(it) === A.type)
                                    ) {
                                        i(D, A.sibling),
                                            (Y = o(A, C.props)),
                                            ds(Y, C),
                                            (Y.return = D),
                                            (D = Y);
                                        break t;
                                    }
                                    i(D, A);
                                    break;
                                } else e(D, A);
                                A = A.sibling;
                            }
                            C.type === p
                                ? ((Y = Ci(C.props.children, D.mode, Y, C.key)),
                                  (Y.return = D),
                                  (D = Y))
                                : ((Y = sr(
                                      C.type,
                                      C.key,
                                      C.props,
                                      null,
                                      D.mode,
                                      Y
                                  )),
                                  ds(Y, C),
                                  (Y.return = D),
                                  (D = Y));
                        }
                        return g(D);
                    case h:
                        t: {
                            for (it = C.key; A !== null; ) {
                                if (A.key === it)
                                    if (
                                        A.tag === 4 &&
                                        A.stateNode.containerInfo ===
                                            C.containerInfo &&
                                        A.stateNode.implementation ===
                                            C.implementation
                                    ) {
                                        i(D, A.sibling),
                                            (Y = o(A, C.children || [])),
                                            (Y.return = D),
                                            (D = Y);
                                        break t;
                                    } else {
                                        i(D, A);
                                        break;
                                    }
                                else e(D, A);
                                A = A.sibling;
                            }
                            (Y = Ju(C, D.mode, Y)), (Y.return = D), (D = Y);
                        }
                        return g(D);
                    case k:
                        return (
                            (it = C._init), (C = it(C._payload)), Gt(D, A, C, Y)
                        );
                }
                if (at(C)) return rt(D, A, C, Y);
                if (Z(C)) {
                    if (((it = Z(C)), typeof it != "function"))
                        throw Error(r(150));
                    return (C = it.call(C)), pt(D, A, C, Y);
                }
                if (typeof C.then == "function") return Gt(D, A, ql(C), Y);
                if (C.$$typeof === T) return Gt(D, A, nr(D, C), Y);
                Yl(D, C);
            }
            return (typeof C == "string" && C !== "") ||
                typeof C == "number" ||
                typeof C == "bigint"
                ? ((C = "" + C),
                  A !== null && A.tag === 6
                      ? (i(D, A.sibling),
                        (Y = o(A, C)),
                        (Y.return = D),
                        (D = Y))
                      : (i(D, A),
                        (Y = Wu(C, D.mode, Y)),
                        (Y.return = D),
                        (D = Y)),
                  g(D))
                : i(D, A);
        }
        return function (D, A, C, Y) {
            try {
                fs = 0;
                var it = Gt(D, A, C, Y);
                return (ra = null), it;
            } catch (ut) {
                if (ut === us) throw ut;
                var St = He(29, ut, null, D.mode);
                return (St.lanes = Y), (St.return = D), St;
            } finally {
            }
        };
    }
    var Ti = Uh(!0),
        Hh = Uh(!1),
        oa = xt(null),
        Gl = xt(0);
    function qh(t, e) {
        (t = Dn), Dt(Gl, t), Dt(oa, e), (Dn = t | e.baseLanes);
    }
    function iu() {
        Dt(Gl, Dn), Dt(oa, oa.current);
    }
    function au() {
        (Dn = Gl.current), _t(oa), _t(Gl);
    }
    var Be = xt(null),
        sn = null;
    function Yn(t) {
        var e = t.alternate;
        Dt(Wt, Wt.current & 1),
            Dt(Be, t),
            sn === null &&
                (e === null ||
                    oa.current !== null ||
                    e.memoizedState !== null) &&
                (sn = t);
    }
    function Yh(t) {
        if (t.tag === 22) {
            if ((Dt(Wt, Wt.current), Dt(Be, t), sn === null)) {
                var e = t.alternate;
                e !== null && e.memoizedState !== null && (sn = t);
            }
        } else Gn();
    }
    function Gn() {
        Dt(Wt, Wt.current), Dt(Be, Be.current);
    }
    function Sn(t) {
        _t(Be), sn === t && (sn = null), _t(Wt);
    }
    var Wt = xt(0);
    function kl(t) {
        for (var e = t; e !== null; ) {
            if (e.tag === 13) {
                var i = e.memoizedState;
                if (
                    i !== null &&
                    ((i = i.dehydrated),
                    i === null || i.data === "$?" || i.data === "$!")
                )
                    return e;
            } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
                if (e.flags & 128) return e;
            } else if (e.child !== null) {
                (e.child.return = e), (e = e.child);
                continue;
            }
            if (e === t) break;
            for (; e.sibling === null; ) {
                if (e.return === null || e.return === t) return null;
                e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
        }
        return null;
    }
    var tb =
            typeof AbortController < "u"
                ? AbortController
                : function () {
                      var t = [],
                          e = (this.signal = {
                              aborted: !1,
                              addEventListener: function (i, s) {
                                  t.push(s);
                              },
                          });
                      this.abort = function () {
                          (e.aborted = !0),
                              t.forEach(function (i) {
                                  return i();
                              });
                      };
                  },
        eb = n.unstable_scheduleCallback,
        nb = n.unstable_NormalPriority,
        Jt = {
            $$typeof: T,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0,
        };
    function su() {
        return { controller: new tb(), data: new Map(), refCount: 0 };
    }
    function hs(t) {
        t.refCount--,
            t.refCount === 0 &&
                eb(nb, function () {
                    t.controller.abort();
                });
    }
    var ps = null,
        lu = 0,
        ua = 0,
        ca = null;
    function ib(t, e) {
        if (ps === null) {
            var i = (ps = []);
            (lu = 0),
                (ua = dc()),
                (ca = {
                    status: "pending",
                    value: void 0,
                    then: function (s) {
                        i.push(s);
                    },
                });
        }
        return lu++, e.then(Gh, Gh), e;
    }
    function Gh() {
        if (--lu === 0 && ps !== null) {
            ca !== null && (ca.status = "fulfilled");
            var t = ps;
            (ps = null), (ua = 0), (ca = null);
            for (var e = 0; e < t.length; e++) (0, t[e])();
        }
    }
    function ab(t, e) {
        var i = [],
            s = {
                status: "pending",
                value: null,
                reason: null,
                then: function (o) {
                    i.push(o);
                },
            };
        return (
            t.then(
                function () {
                    (s.status = "fulfilled"), (s.value = e);
                    for (var o = 0; o < i.length; o++) (0, i[o])(e);
                },
                function (o) {
                    for (
                        s.status = "rejected", s.reason = o, o = 0;
                        o < i.length;
                        o++
                    )
                        (0, i[o])(void 0);
                }
            ),
            s
        );
    }
    var kh = F.S;
    F.S = function (t, e) {
        typeof e == "object" &&
            e !== null &&
            typeof e.then == "function" &&
            ib(t, e),
            kh !== null && kh(t, e);
    };
    var Ei = xt(null);
    function ru() {
        var t = Ei.current;
        return t !== null ? t : jt.pooledCache;
    }
    function Xl(t, e) {
        e === null ? Dt(Ei, Ei.current) : Dt(Ei, e.pool);
    }
    function Xh() {
        var t = ru();
        return t === null ? null : { parent: Jt._currentValue, pool: t };
    }
    var kn = 0,
        vt = null,
        Rt = null,
        Pt = null,
        Kl = !1,
        fa = !1,
        Ai = !1,
        Pl = 0,
        ms = 0,
        da = null,
        sb = 0;
    function Xt() {
        throw Error(r(321));
    }
    function ou(t, e) {
        if (e === null) return !1;
        for (var i = 0; i < e.length && i < t.length; i++)
            if (!Ae(t[i], e[i])) return !1;
        return !0;
    }
    function uu(t, e, i, s, o, c) {
        return (
            (kn = c),
            (vt = e),
            (e.memoizedState = null),
            (e.updateQueue = null),
            (e.lanes = 0),
            (F.H = t === null || t.memoizedState === null ? Mi : Xn),
            (Ai = !1),
            (c = i(s, o)),
            (Ai = !1),
            fa && (c = Ph(e, i, s, o)),
            Kh(t),
            c
        );
    }
    function Kh(t) {
        F.H = ln;
        var e = Rt !== null && Rt.next !== null;
        if (
            ((kn = 0),
            (Pt = Rt = vt = null),
            (Kl = !1),
            (ms = 0),
            (da = null),
            e)
        )
            throw Error(r(300));
        t === null ||
            It ||
            ((t = t.dependencies), t !== null && er(t) && (It = !0));
    }
    function Ph(t, e, i, s) {
        vt = t;
        var o = 0;
        do {
            if ((fa && (da = null), (ms = 0), (fa = !1), 25 <= o))
                throw Error(r(301));
            if (((o += 1), (Pt = Rt = null), t.updateQueue != null)) {
                var c = t.updateQueue;
                (c.lastEffect = null),
                    (c.events = null),
                    (c.stores = null),
                    c.memoCache != null && (c.memoCache.index = 0);
            }
            (F.H = Oi), (c = e(i, s));
        } while (fa);
        return c;
    }
    function lb() {
        var t = F.H,
            e = t.useState()[0];
        return (
            (e = typeof e.then == "function" ? gs(e) : e),
            (t = t.useState()[0]),
            (Rt !== null ? Rt.memoizedState : null) !== t && (vt.flags |= 1024),
            e
        );
    }
    function cu() {
        var t = Pl !== 0;
        return (Pl = 0), t;
    }
    function fu(t, e, i) {
        (e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~i);
    }
    function du(t) {
        if (Kl) {
            for (t = t.memoizedState; t !== null; ) {
                var e = t.queue;
                e !== null && (e.pending = null), (t = t.next);
            }
            Kl = !1;
        }
        (kn = 0), (Pt = Rt = vt = null), (fa = !1), (ms = Pl = 0), (da = null);
    }
    function be() {
        var t = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
        };
        return (
            Pt === null ? (vt.memoizedState = Pt = t) : (Pt = Pt.next = t), Pt
        );
    }
    function Zt() {
        if (Rt === null) {
            var t = vt.alternate;
            t = t !== null ? t.memoizedState : null;
        } else t = Rt.next;
        var e = Pt === null ? vt.memoizedState : Pt.next;
        if (e !== null) (Pt = e), (Rt = t);
        else {
            if (t === null)
                throw vt.alternate === null ? Error(r(467)) : Error(r(310));
            (Rt = t),
                (t = {
                    memoizedState: Rt.memoizedState,
                    baseState: Rt.baseState,
                    baseQueue: Rt.baseQueue,
                    queue: Rt.queue,
                    next: null,
                }),
                Pt === null ? (vt.memoizedState = Pt = t) : (Pt = Pt.next = t);
        }
        return Pt;
    }
    var Zl;
    Zl = function () {
        return {
            lastEffect: null,
            events: null,
            stores: null,
            memoCache: null,
        };
    };
    function gs(t) {
        var e = ms;
        return (
            (ms += 1),
            da === null && (da = []),
            (t = Lh(da, t, e)),
            (e = vt),
            (Pt === null ? e.memoizedState : Pt.next) === null &&
                ((e = e.alternate),
                (F.H = e === null || e.memoizedState === null ? Mi : Xn)),
            t
        );
    }
    function Ql(t) {
        if (t !== null && typeof t == "object") {
            if (typeof t.then == "function") return gs(t);
            if (t.$$typeof === T) return oe(t);
        }
        throw Error(r(438, String(t)));
    }
    function hu(t) {
        var e = null,
            i = vt.updateQueue;
        if ((i !== null && (e = i.memoCache), e == null)) {
            var s = vt.alternate;
            s !== null &&
                ((s = s.updateQueue),
                s !== null &&
                    ((s = s.memoCache),
                    s != null &&
                        (e = {
                            data: s.data.map(function (o) {
                                return o.slice();
                            }),
                            index: 0,
                        })));
        }
        if (
            (e == null && (e = { data: [], index: 0 }),
            i === null && ((i = Zl()), (vt.updateQueue = i)),
            (i.memoCache = e),
            (i = e.data[e.index]),
            i === void 0)
        )
            for (i = e.data[e.index] = Array(t), s = 0; s < t; s++) i[s] = J;
        return e.index++, i;
    }
    function bn(t, e) {
        return typeof e == "function" ? e(t) : e;
    }
    function Fl(t) {
        var e = Zt();
        return pu(e, Rt, t);
    }
    function pu(t, e, i) {
        var s = t.queue;
        if (s === null) throw Error(r(311));
        s.lastRenderedReducer = i;
        var o = t.baseQueue,
            c = s.pending;
        if (c !== null) {
            if (o !== null) {
                var g = o.next;
                (o.next = c.next), (c.next = g);
            }
            (e.baseQueue = o = c), (s.pending = null);
        }
        if (((c = t.baseState), o === null)) t.memoizedState = c;
        else {
            e = o.next;
            var S = (g = null),
                x = null,
                w = e,
                B = !1;
            do {
                var X = w.lane & -536870913;
                if (X !== w.lane ? (Et & X) === X : (kn & X) === X) {
                    var z = w.revertLane;
                    if (z === 0)
                        x !== null &&
                            (x = x.next =
                                {
                                    lane: 0,
                                    revertLane: 0,
                                    action: w.action,
                                    hasEagerState: w.hasEagerState,
                                    eagerState: w.eagerState,
                                    next: null,
                                }),
                            X === ua && (B = !0);
                    else if ((kn & z) === z) {
                        (w = w.next), z === ua && (B = !0);
                        continue;
                    } else
                        (X = {
                            lane: 0,
                            revertLane: w.revertLane,
                            action: w.action,
                            hasEagerState: w.hasEagerState,
                            eagerState: w.eagerState,
                            next: null,
                        }),
                            x === null
                                ? ((S = x = X), (g = c))
                                : (x = x.next = X),
                            (vt.lanes |= z),
                            (In |= z);
                    (X = w.action),
                        Ai && i(c, X),
                        (c = w.hasEagerState ? w.eagerState : i(c, X));
                } else
                    (z = {
                        lane: X,
                        revertLane: w.revertLane,
                        action: w.action,
                        hasEagerState: w.hasEagerState,
                        eagerState: w.eagerState,
                        next: null,
                    }),
                        x === null ? ((S = x = z), (g = c)) : (x = x.next = z),
                        (vt.lanes |= X),
                        (In |= X);
                w = w.next;
            } while (w !== null && w !== e);
            if (
                (x === null ? (g = c) : (x.next = S),
                !Ae(c, t.memoizedState) &&
                    ((It = !0), B && ((i = ca), i !== null)))
            )
                throw i;
            (t.memoizedState = c),
                (t.baseState = g),
                (t.baseQueue = x),
                (s.lastRenderedState = c);
        }
        return o === null && (s.lanes = 0), [t.memoizedState, s.dispatch];
    }
    function mu(t) {
        var e = Zt(),
            i = e.queue;
        if (i === null) throw Error(r(311));
        i.lastRenderedReducer = t;
        var s = i.dispatch,
            o = i.pending,
            c = e.memoizedState;
        if (o !== null) {
            i.pending = null;
            var g = (o = o.next);
            do (c = t(c, g.action)), (g = g.next);
            while (g !== o);
            Ae(c, e.memoizedState) || (It = !0),
                (e.memoizedState = c),
                e.baseQueue === null && (e.baseState = c),
                (i.lastRenderedState = c);
        }
        return [c, s];
    }
    function Zh(t, e, i) {
        var s = vt,
            o = Zt(),
            c = At;
        if (c) {
            if (i === void 0) throw Error(r(407));
            i = i();
        } else i = e();
        var g = !Ae((Rt || o).memoizedState, i);
        if (
            (g && ((o.memoizedState = i), (It = !0)),
            (o = o.queue),
            vu(Wh.bind(null, s, o, t), [t]),
            o.getSnapshot !== e ||
                g ||
                (Pt !== null && Pt.memoizedState.tag & 1))
        ) {
            if (
                ((s.flags |= 2048),
                ha(9, Fh.bind(null, s, o, i, e), { destroy: void 0 }, null),
                jt === null)
            )
                throw Error(r(349));
            c || kn & 60 || Qh(s, e, i);
        }
        return i;
    }
    function Qh(t, e, i) {
        (t.flags |= 16384),
            (t = { getSnapshot: e, value: i }),
            (e = vt.updateQueue),
            e === null
                ? ((e = Zl()), (vt.updateQueue = e), (e.stores = [t]))
                : ((i = e.stores), i === null ? (e.stores = [t]) : i.push(t));
    }
    function Fh(t, e, i, s) {
        (e.value = i), (e.getSnapshot = s), Jh(e) && $h(t);
    }
    function Wh(t, e, i) {
        return i(function () {
            Jh(e) && $h(t);
        });
    }
    function Jh(t) {
        var e = t.getSnapshot;
        t = t.value;
        try {
            var i = e();
            return !Ae(t, i);
        } catch {
            return !0;
        }
    }
    function $h(t) {
        var e = qn(t, 2);
        e !== null && pe(e, t, 2);
    }
    function gu(t) {
        var e = be();
        if (typeof t == "function") {
            var i = t;
            if (((t = i()), Ai)) {
                Vn(!0);
                try {
                    i();
                } finally {
                    Vn(!1);
                }
            }
        }
        return (
            (e.memoizedState = e.baseState = t),
            (e.queue = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: bn,
                lastRenderedState: t,
            }),
            e
        );
    }
    function Ih(t, e, i, s) {
        return (t.baseState = i), pu(t, Rt, typeof s == "function" ? s : bn);
    }
    function rb(t, e, i, s, o) {
        if ($l(t)) throw Error(r(485));
        if (((t = e.action), t !== null)) {
            var c = {
                payload: o,
                action: t,
                next: null,
                isTransition: !0,
                status: "pending",
                value: null,
                reason: null,
                listeners: [],
                then: function (g) {
                    c.listeners.push(g);
                },
            };
            F.T !== null ? i(!0) : (c.isTransition = !1),
                s(c),
                (i = e.pending),
                i === null
                    ? ((c.next = e.pending = c), tp(e, c))
                    : ((c.next = i.next), (e.pending = i.next = c));
        }
    }
    function tp(t, e) {
        var i = e.action,
            s = e.payload,
            o = t.state;
        if (e.isTransition) {
            var c = F.T,
                g = {};
            F.T = g;
            try {
                var S = i(o, s),
                    x = F.S;
                x !== null && x(g, S), ep(t, e, S);
            } catch (w) {
                yu(t, e, w);
            } finally {
                F.T = c;
            }
        } else
            try {
                (c = i(o, s)), ep(t, e, c);
            } catch (w) {
                yu(t, e, w);
            }
    }
    function ep(t, e, i) {
        i !== null && typeof i == "object" && typeof i.then == "function"
            ? i.then(
                  function (s) {
                      np(t, e, s);
                  },
                  function (s) {
                      return yu(t, e, s);
                  }
              )
            : np(t, e, i);
    }
    function np(t, e, i) {
        (e.status = "fulfilled"),
            (e.value = i),
            ip(e),
            (t.state = i),
            (e = t.pending),
            e !== null &&
                ((i = e.next),
                i === e
                    ? (t.pending = null)
                    : ((i = i.next), (e.next = i), tp(t, i)));
    }
    function yu(t, e, i) {
        var s = t.pending;
        if (((t.pending = null), s !== null)) {
            s = s.next;
            do (e.status = "rejected"), (e.reason = i), ip(e), (e = e.next);
            while (e !== s);
        }
        t.action = null;
    }
    function ip(t) {
        t = t.listeners;
        for (var e = 0; e < t.length; e++) (0, t[e])();
    }
    function ap(t, e) {
        return e;
    }
    function sp(t, e) {
        if (At) {
            var i = jt.formState;
            if (i !== null) {
                t: {
                    var s = vt;
                    if (At) {
                        if (ae) {
                            e: {
                                for (var o = ae, c = an; o.nodeType !== 8; ) {
                                    if (!c) {
                                        o = null;
                                        break e;
                                    }
                                    if (((o = We(o.nextSibling)), o === null)) {
                                        o = null;
                                        break e;
                                    }
                                }
                                (c = o.data),
                                    (o = c === "F!" || c === "F" ? o : null);
                            }
                            if (o) {
                                (ae = We(o.nextSibling)), (s = o.data === "F!");
                                break t;
                            }
                        }
                        xi(s);
                    }
                    s = !1;
                }
                s && (e = i[0]);
            }
        }
        return (
            (i = be()),
            (i.memoizedState = i.baseState = e),
            (s = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: ap,
                lastRenderedState: e,
            }),
            (i.queue = s),
            (i = Ep.bind(null, vt, s)),
            (s.dispatch = i),
            (s = gu(!1)),
            (c = Eu.bind(null, vt, !1, s.queue)),
            (s = be()),
            (o = { state: e, dispatch: null, action: t, pending: null }),
            (s.queue = o),
            (i = rb.bind(null, vt, o, c, i)),
            (o.dispatch = i),
            (s.memoizedState = t),
            [e, i, !1]
        );
    }
    function lp(t) {
        var e = Zt();
        return rp(e, Rt, t);
    }
    function rp(t, e, i) {
        (e = pu(t, e, ap)[0]),
            (t = Fl(bn)[0]),
            (e =
                typeof e == "object" &&
                e !== null &&
                typeof e.then == "function"
                    ? gs(e)
                    : e);
        var s = Zt(),
            o = s.queue,
            c = o.dispatch;
        return (
            i !== s.memoizedState &&
                ((vt.flags |= 2048),
                ha(9, ob.bind(null, o, i), { destroy: void 0 }, null)),
            [e, c, t]
        );
    }
    function ob(t, e) {
        t.action = e;
    }
    function op(t) {
        var e = Zt(),
            i = Rt;
        if (i !== null) return rp(e, i, t);
        Zt(), (e = e.memoizedState), (i = Zt());
        var s = i.queue.dispatch;
        return (i.memoizedState = t), [e, s, !1];
    }
    function ha(t, e, i, s) {
        return (
            (t = { tag: t, create: e, inst: i, deps: s, next: null }),
            (e = vt.updateQueue),
            e === null && ((e = Zl()), (vt.updateQueue = e)),
            (i = e.lastEffect),
            i === null
                ? (e.lastEffect = t.next = t)
                : ((s = i.next),
                  (i.next = t),
                  (t.next = s),
                  (e.lastEffect = t)),
            t
        );
    }
    function up() {
        return Zt().memoizedState;
    }
    function Wl(t, e, i, s) {
        var o = be();
        (vt.flags |= t),
            (o.memoizedState = ha(
                1 | e,
                i,
                { destroy: void 0 },
                s === void 0 ? null : s
            ));
    }
    function Jl(t, e, i, s) {
        var o = Zt();
        s = s === void 0 ? null : s;
        var c = o.memoizedState.inst;
        Rt !== null && s !== null && ou(s, Rt.memoizedState.deps)
            ? (o.memoizedState = ha(e, i, c, s))
            : ((vt.flags |= t), (o.memoizedState = ha(1 | e, i, c, s)));
    }
    function cp(t, e) {
        Wl(8390656, 8, t, e);
    }
    function vu(t, e) {
        Jl(2048, 8, t, e);
    }
    function fp(t, e) {
        return Jl(4, 2, t, e);
    }
    function dp(t, e) {
        return Jl(4, 4, t, e);
    }
    function hp(t, e) {
        if (typeof e == "function") {
            t = t();
            var i = e(t);
            return function () {
                typeof i == "function" ? i() : e(null);
            };
        }
        if (e != null)
            return (
                (t = t()),
                (e.current = t),
                function () {
                    e.current = null;
                }
            );
    }
    function pp(t, e, i) {
        (i = i != null ? i.concat([t]) : null),
            Jl(4, 4, hp.bind(null, e, t), i);
    }
    function Su() {}
    function mp(t, e) {
        var i = Zt();
        e = e === void 0 ? null : e;
        var s = i.memoizedState;
        return e !== null && ou(e, s[1])
            ? s[0]
            : ((i.memoizedState = [t, e]), t);
    }
    function gp(t, e) {
        var i = Zt();
        e = e === void 0 ? null : e;
        var s = i.memoizedState;
        if (e !== null && ou(e, s[1])) return s[0];
        if (((s = t()), Ai)) {
            Vn(!0);
            try {
                t();
            } finally {
                Vn(!1);
            }
        }
        return (i.memoizedState = [s, e]), s;
    }
    function bu(t, e, i) {
        return i === void 0 || kn & 1073741824
            ? (t.memoizedState = e)
            : ((t.memoizedState = i),
              (t = vm()),
              (vt.lanes |= t),
              (In |= t),
              i);
    }
    function yp(t, e, i, s) {
        return Ae(i, e)
            ? i
            : oa.current !== null
              ? ((t = bu(t, i, s)), Ae(t, e) || (It = !0), t)
              : kn & 42
                ? ((t = vm()), (vt.lanes |= t), (In |= t), e)
                : ((It = !0), (t.memoizedState = i));
    }
    function vp(t, e, i, s, o) {
        var c = W.p;
        W.p = c !== 0 && 8 > c ? c : 8;
        var g = F.T,
            S = {};
        (F.T = S), Eu(t, !1, e, i);
        try {
            var x = o(),
                w = F.S;
            if (
                (w !== null && w(S, x),
                x !== null &&
                    typeof x == "object" &&
                    typeof x.then == "function")
            ) {
                var B = ab(x, s);
                ys(t, e, B, _e(t));
            } else ys(t, e, s, _e(t));
        } catch (X) {
            ys(
                t,
                e,
                { then: function () {}, status: "rejected", reason: X },
                _e()
            );
        } finally {
            (W.p = c), (F.T = g);
        }
    }
    function ub() {}
    function xu(t, e, i, s) {
        if (t.tag !== 5) throw Error(r(476));
        var o = Sp(t).queue;
        vp(
            t,
            o,
            e,
            mt,
            i === null
                ? ub
                : function () {
                      return bp(t), i(s);
                  }
        );
    }
    function Sp(t) {
        var e = t.memoizedState;
        if (e !== null) return e;
        e = {
            memoizedState: mt,
            baseState: mt,
            baseQueue: null,
            queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: bn,
                lastRenderedState: mt,
            },
            next: null,
        };
        var i = {};
        return (
            (e.next = {
                memoizedState: i,
                baseState: i,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: bn,
                    lastRenderedState: i,
                },
                next: null,
            }),
            (t.memoizedState = e),
            (t = t.alternate),
            t !== null && (t.memoizedState = e),
            e
        );
    }
    function bp(t) {
        var e = Sp(t).next.queue;
        ys(t, e, {}, _e());
    }
    function Tu() {
        return oe(Vs);
    }
    function xp() {
        return Zt().memoizedState;
    }
    function Tp() {
        return Zt().memoizedState;
    }
    function cb(t) {
        for (var e = t.return; e !== null; ) {
            switch (e.tag) {
                case 24:
                case 3:
                    var i = _e();
                    t = Zn(i);
                    var s = Qn(e, t, i);
                    s !== null && (pe(s, e, i), bs(s, e, i)),
                        (e = { cache: su() }),
                        (t.payload = e);
                    return;
            }
            e = e.return;
        }
    }
    function fb(t, e, i) {
        var s = _e();
        (i = {
            lane: s,
            revertLane: 0,
            action: i,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }),
            $l(t)
                ? Ap(e, i)
                : ((i = $o(t, e, i, s)),
                  i !== null && (pe(i, t, s), Mp(i, e, s)));
    }
    function Ep(t, e, i) {
        var s = _e();
        ys(t, e, i, s);
    }
    function ys(t, e, i, s) {
        var o = {
            lane: s,
            revertLane: 0,
            action: i,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        };
        if ($l(t)) Ap(e, o);
        else {
            var c = t.alternate;
            if (
                t.lanes === 0 &&
                (c === null || c.lanes === 0) &&
                ((c = e.lastRenderedReducer), c !== null)
            )
                try {
                    var g = e.lastRenderedState,
                        S = c(g, i);
                    if (((o.hasEagerState = !0), (o.eagerState = S), Ae(S, g)))
                        return Ll(t, e, o, 0), jt === null && Nl(), !1;
                } catch {
                } finally {
                }
            if (((i = $o(t, e, o, s)), i !== null))
                return pe(i, t, s), Mp(i, e, s), !0;
        }
        return !1;
    }
    function Eu(t, e, i, s) {
        if (
            ((s = {
                lane: 2,
                revertLane: dc(),
                action: s,
                hasEagerState: !1,
                eagerState: null,
                next: null,
            }),
            $l(t))
        ) {
            if (e) throw Error(r(479));
        } else (e = $o(t, i, s, 2)), e !== null && pe(e, t, 2);
    }
    function $l(t) {
        var e = t.alternate;
        return t === vt || (e !== null && e === vt);
    }
    function Ap(t, e) {
        fa = Kl = !0;
        var i = t.pending;
        i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)),
            (t.pending = e);
    }
    function Mp(t, e, i) {
        if (i & 4194176) {
            var s = e.lanes;
            (s &= t.pendingLanes), (i |= s), (e.lanes = i), Bd(t, i);
        }
    }
    var ln = {
        readContext: oe,
        use: Ql,
        useCallback: Xt,
        useContext: Xt,
        useEffect: Xt,
        useImperativeHandle: Xt,
        useLayoutEffect: Xt,
        useInsertionEffect: Xt,
        useMemo: Xt,
        useReducer: Xt,
        useRef: Xt,
        useState: Xt,
        useDebugValue: Xt,
        useDeferredValue: Xt,
        useTransition: Xt,
        useSyncExternalStore: Xt,
        useId: Xt,
    };
    (ln.useCacheRefresh = Xt),
        (ln.useMemoCache = Xt),
        (ln.useHostTransitionStatus = Xt),
        (ln.useFormState = Xt),
        (ln.useActionState = Xt),
        (ln.useOptimistic = Xt);
    var Mi = {
        readContext: oe,
        use: Ql,
        useCallback: function (t, e) {
            return (be().memoizedState = [t, e === void 0 ? null : e]), t;
        },
        useContext: oe,
        useEffect: cp,
        useImperativeHandle: function (t, e, i) {
            (i = i != null ? i.concat([t]) : null),
                Wl(4194308, 4, hp.bind(null, e, t), i);
        },
        useLayoutEffect: function (t, e) {
            return Wl(4194308, 4, t, e);
        },
        useInsertionEffect: function (t, e) {
            Wl(4, 2, t, e);
        },
        useMemo: function (t, e) {
            var i = be();
            e = e === void 0 ? null : e;
            var s = t();
            if (Ai) {
                Vn(!0);
                try {
                    t();
                } finally {
                    Vn(!1);
                }
            }
            return (i.memoizedState = [s, e]), s;
        },
        useReducer: function (t, e, i) {
            var s = be();
            if (i !== void 0) {
                var o = i(e);
                if (Ai) {
                    Vn(!0);
                    try {
                        i(e);
                    } finally {
                        Vn(!1);
                    }
                }
            } else o = e;
            return (
                (s.memoizedState = s.baseState = o),
                (t = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: t,
                    lastRenderedState: o,
                }),
                (s.queue = t),
                (t = t.dispatch = fb.bind(null, vt, t)),
                [s.memoizedState, t]
            );
        },
        useRef: function (t) {
            var e = be();
            return (t = { current: t }), (e.memoizedState = t);
        },
        useState: function (t) {
            t = gu(t);
            var e = t.queue,
                i = Ep.bind(null, vt, e);
            return (e.dispatch = i), [t.memoizedState, i];
        },
        useDebugValue: Su,
        useDeferredValue: function (t, e) {
            var i = be();
            return bu(i, t, e);
        },
        useTransition: function () {
            var t = gu(!1);
            return (
                (t = vp.bind(null, vt, t.queue, !0, !1)),
                (be().memoizedState = t),
                [!1, t]
            );
        },
        useSyncExternalStore: function (t, e, i) {
            var s = vt,
                o = be();
            if (At) {
                if (i === void 0) throw Error(r(407));
                i = i();
            } else {
                if (((i = e()), jt === null)) throw Error(r(349));
                Et & 60 || Qh(s, e, i);
            }
            o.memoizedState = i;
            var c = { value: i, getSnapshot: e };
            return (
                (o.queue = c),
                cp(Wh.bind(null, s, c, t), [t]),
                (s.flags |= 2048),
                ha(9, Fh.bind(null, s, c, i, e), { destroy: void 0 }, null),
                i
            );
        },
        useId: function () {
            var t = be(),
                e = jt.identifierPrefix;
            if (At) {
                var i = vn,
                    s = yn;
                (i = (s & ~(1 << (32 - Ee(s) - 1))).toString(32) + i),
                    (e = ":" + e + "R" + i),
                    (i = Pl++),
                    0 < i && (e += "H" + i.toString(32)),
                    (e += ":");
            } else (i = sb++), (e = ":" + e + "r" + i.toString(32) + ":");
            return (t.memoizedState = e);
        },
        useCacheRefresh: function () {
            return (be().memoizedState = cb.bind(null, vt));
        },
    };
    (Mi.useMemoCache = hu),
        (Mi.useHostTransitionStatus = Tu),
        (Mi.useFormState = sp),
        (Mi.useActionState = sp),
        (Mi.useOptimistic = function (t) {
            var e = be();
            e.memoizedState = e.baseState = t;
            var i = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null,
            };
            return (
                (e.queue = i),
                (e = Eu.bind(null, vt, !0, i)),
                (i.dispatch = e),
                [t, e]
            );
        });
    var Xn = {
        readContext: oe,
        use: Ql,
        useCallback: mp,
        useContext: oe,
        useEffect: vu,
        useImperativeHandle: pp,
        useInsertionEffect: fp,
        useLayoutEffect: dp,
        useMemo: gp,
        useReducer: Fl,
        useRef: up,
        useState: function () {
            return Fl(bn);
        },
        useDebugValue: Su,
        useDeferredValue: function (t, e) {
            var i = Zt();
            return yp(i, Rt.memoizedState, t, e);
        },
        useTransition: function () {
            var t = Fl(bn)[0],
                e = Zt().memoizedState;
            return [typeof t == "boolean" ? t : gs(t), e];
        },
        useSyncExternalStore: Zh,
        useId: xp,
    };
    (Xn.useCacheRefresh = Tp),
        (Xn.useMemoCache = hu),
        (Xn.useHostTransitionStatus = Tu),
        (Xn.useFormState = lp),
        (Xn.useActionState = lp),
        (Xn.useOptimistic = function (t, e) {
            var i = Zt();
            return Ih(i, Rt, t, e);
        });
    var Oi = {
        readContext: oe,
        use: Ql,
        useCallback: mp,
        useContext: oe,
        useEffect: vu,
        useImperativeHandle: pp,
        useInsertionEffect: fp,
        useLayoutEffect: dp,
        useMemo: gp,
        useReducer: mu,
        useRef: up,
        useState: function () {
            return mu(bn);
        },
        useDebugValue: Su,
        useDeferredValue: function (t, e) {
            var i = Zt();
            return Rt === null ? bu(i, t, e) : yp(i, Rt.memoizedState, t, e);
        },
        useTransition: function () {
            var t = mu(bn)[0],
                e = Zt().memoizedState;
            return [typeof t == "boolean" ? t : gs(t), e];
        },
        useSyncExternalStore: Zh,
        useId: xp,
    };
    (Oi.useCacheRefresh = Tp),
        (Oi.useMemoCache = hu),
        (Oi.useHostTransitionStatus = Tu),
        (Oi.useFormState = op),
        (Oi.useActionState = op),
        (Oi.useOptimistic = function (t, e) {
            var i = Zt();
            return Rt !== null
                ? Ih(i, Rt, t, e)
                : ((i.baseState = t), [t, i.queue.dispatch]);
        });
    function Au(t, e, i, s) {
        (e = t.memoizedState),
            (i = i(s, e)),
            (i = i == null ? e : lt({}, e, i)),
            (t.memoizedState = i),
            t.lanes === 0 && (t.updateQueue.baseState = i);
    }
    var Mu = {
        isMounted: function (t) {
            return (t = t._reactInternals) ? U(t) === t : !1;
        },
        enqueueSetState: function (t, e, i) {
            t = t._reactInternals;
            var s = _e(),
                o = Zn(s);
            (o.payload = e),
                i != null && (o.callback = i),
                (e = Qn(t, o, s)),
                e !== null && (pe(e, t, s), bs(e, t, s));
        },
        enqueueReplaceState: function (t, e, i) {
            t = t._reactInternals;
            var s = _e(),
                o = Zn(s);
            (o.tag = 1),
                (o.payload = e),
                i != null && (o.callback = i),
                (e = Qn(t, o, s)),
                e !== null && (pe(e, t, s), bs(e, t, s));
        },
        enqueueForceUpdate: function (t, e) {
            t = t._reactInternals;
            var i = _e(),
                s = Zn(i);
            (s.tag = 2),
                e != null && (s.callback = e),
                (e = Qn(t, s, i)),
                e !== null && (pe(e, t, i), bs(e, t, i));
        },
    };
    function Op(t, e, i, s, o, c, g) {
        return (
            (t = t.stateNode),
            typeof t.shouldComponentUpdate == "function"
                ? t.shouldComponentUpdate(s, c, g)
                : e.prototype && e.prototype.isPureReactComponent
                  ? !as(i, s) || !as(o, c)
                  : !0
        );
    }
    function wp(t, e, i, s) {
        (t = e.state),
            typeof e.componentWillReceiveProps == "function" &&
                e.componentWillReceiveProps(i, s),
            typeof e.UNSAFE_componentWillReceiveProps == "function" &&
                e.UNSAFE_componentWillReceiveProps(i, s),
            e.state !== t && Mu.enqueueReplaceState(e, e.state, null);
    }
    function wi(t, e) {
        var i = e;
        if ("ref" in e) {
            i = {};
            for (var s in e) s !== "ref" && (i[s] = e[s]);
        }
        if ((t = t.defaultProps)) {
            i === e && (i = lt({}, i));
            for (var o in t) i[o] === void 0 && (i[o] = t[o]);
        }
        return i;
    }
    var Il =
        typeof reportError == "function"
            ? reportError
            : function (t) {
                  if (
                      typeof window == "object" &&
                      typeof window.ErrorEvent == "function"
                  ) {
                      var e = new window.ErrorEvent("error", {
                          bubbles: !0,
                          cancelable: !0,
                          message:
                              typeof t == "object" &&
                              t !== null &&
                              typeof t.message == "string"
                                  ? String(t.message)
                                  : String(t),
                          error: t,
                      });
                      if (!window.dispatchEvent(e)) return;
                  } else if (
                      typeof process == "object" &&
                      typeof process.emit == "function"
                  ) {
                      process.emit("uncaughtException", t);
                      return;
                  }
                  console.error(t);
              };
    function _p(t) {
        Il(t);
    }
    function Dp(t) {
        console.error(t);
    }
    function Rp(t) {
        Il(t);
    }
    function tr(t, e) {
        try {
            var i = t.onUncaughtError;
            i(e.value, { componentStack: e.stack });
        } catch (s) {
            setTimeout(function () {
                throw s;
            });
        }
    }
    function Cp(t, e, i) {
        try {
            var s = t.onCaughtError;
            s(i.value, {
                componentStack: i.stack,
                errorBoundary: e.tag === 1 ? e.stateNode : null,
            });
        } catch (o) {
            setTimeout(function () {
                throw o;
            });
        }
    }
    function Ou(t, e, i) {
        return (
            (i = Zn(i)),
            (i.tag = 3),
            (i.payload = { element: null }),
            (i.callback = function () {
                tr(t, e);
            }),
            i
        );
    }
    function zp(t) {
        return (t = Zn(t)), (t.tag = 3), t;
    }
    function jp(t, e, i, s) {
        var o = i.type.getDerivedStateFromError;
        if (typeof o == "function") {
            var c = s.value;
            (t.payload = function () {
                return o(c);
            }),
                (t.callback = function () {
                    Cp(e, i, s);
                });
        }
        var g = i.stateNode;
        g !== null &&
            typeof g.componentDidCatch == "function" &&
            (t.callback = function () {
                Cp(e, i, s),
                    typeof o != "function" &&
                        (ti === null ? (ti = new Set([this])) : ti.add(this));
                var S = s.stack;
                this.componentDidCatch(s.value, {
                    componentStack: S !== null ? S : "",
                });
            });
    }
    function db(t, e, i, s, o) {
        if (
            ((i.flags |= 32768),
            s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
            if (
                ((e = i.alternate),
                e !== null && Ss(e, i, o, !0),
                (i = Be.current),
                i !== null)
            ) {
                switch (i.tag) {
                    case 13:
                        return (
                            sn === null
                                ? rc()
                                : i.alternate === null && Yt === 0 && (Yt = 3),
                            (i.flags &= -257),
                            (i.flags |= 65536),
                            (i.lanes = o),
                            s === nu
                                ? (i.flags |= 16384)
                                : ((e = i.updateQueue),
                                  e === null
                                      ? (i.updateQueue = new Set([s]))
                                      : e.add(s),
                                  uc(t, s, o)),
                            !1
                        );
                    case 22:
                        return (
                            (i.flags |= 65536),
                            s === nu
                                ? (i.flags |= 16384)
                                : ((e = i.updateQueue),
                                  e === null
                                      ? ((e = {
                                            transitions: null,
                                            markerInstances: null,
                                            retryQueue: new Set([s]),
                                        }),
                                        (i.updateQueue = e))
                                      : ((i = e.retryQueue),
                                        i === null
                                            ? (e.retryQueue = new Set([s]))
                                            : i.add(s)),
                                  uc(t, s, o)),
                            !1
                        );
                }
                throw Error(r(435, i.tag));
            }
            return uc(t, s, o), rc(), !1;
        }
        if (At)
            return (
                (e = Be.current),
                e !== null
                    ? (!(e.flags & 65536) && (e.flags |= 256),
                      (e.flags |= 65536),
                      (e.lanes = o),
                      s !== eu &&
                          ((t = Error(r(422), { cause: s })), os(je(t, i))))
                    : (s !== eu &&
                          ((e = Error(r(423), { cause: s })), os(je(e, i))),
                      (t = t.current.alternate),
                      (t.flags |= 65536),
                      (o &= -o),
                      (t.lanes |= o),
                      (s = je(s, i)),
                      (o = Ou(t.stateNode, s, o)),
                      Yu(t, o),
                      Yt !== 4 && (Yt = 2)),
                !1
            );
        var c = Error(r(520), { cause: s });
        if (
            ((c = je(c, i)),
            _s === null ? (_s = [c]) : _s.push(c),
            Yt !== 4 && (Yt = 2),
            e === null)
        )
            return !0;
        (s = je(s, i)), (i = e);
        do {
            switch (i.tag) {
                case 3:
                    return (
                        (i.flags |= 65536),
                        (t = o & -o),
                        (i.lanes |= t),
                        (t = Ou(i.stateNode, s, t)),
                        Yu(i, t),
                        !1
                    );
                case 1:
                    if (
                        ((e = i.type),
                        (c = i.stateNode),
                        (i.flags & 128) === 0 &&
                            (typeof e.getDerivedStateFromError == "function" ||
                                (c !== null &&
                                    typeof c.componentDidCatch == "function" &&
                                    (ti === null || !ti.has(c)))))
                    )
                        return (
                            (i.flags |= 65536),
                            (o &= -o),
                            (i.lanes |= o),
                            (o = zp(o)),
                            jp(o, t, i, s),
                            Yu(i, o),
                            !1
                        );
            }
            i = i.return;
        } while (i !== null);
        return !1;
    }
    var Np = Error(r(461)),
        It = !1;
    function se(t, e, i, s) {
        e.child = t === null ? Hh(e, null, i, s) : Ti(e, t.child, i, s);
    }
    function Lp(t, e, i, s, o) {
        i = i.render;
        var c = e.ref;
        if ("ref" in s) {
            var g = {};
            for (var S in s) S !== "ref" && (g[S] = s[S]);
        } else g = s;
        return (
            Di(e),
            (s = uu(t, e, i, g, c, o)),
            (S = cu()),
            t !== null && !It
                ? (fu(t, e, o), xn(t, e, o))
                : (At && S && Io(e), (e.flags |= 1), se(t, e, s, o), e.child)
        );
    }
    function Bp(t, e, i, s, o) {
        if (t === null) {
            var c = i.type;
            return typeof c == "function" &&
                !Fu(c) &&
                c.defaultProps === void 0 &&
                i.compare === null
                ? ((e.tag = 15), (e.type = c), Vp(t, e, c, s, o))
                : ((t = sr(i.type, null, s, e, e.mode, o)),
                  (t.ref = e.ref),
                  (t.return = e),
                  (e.child = t));
        }
        if (((c = t.child), !Lu(t, o))) {
            var g = c.memoizedProps;
            if (
                ((i = i.compare),
                (i = i !== null ? i : as),
                i(g, s) && t.ref === e.ref)
            )
                return xn(t, e, o);
        }
        return (
            (e.flags |= 1),
            (t = $n(c, s)),
            (t.ref = e.ref),
            (t.return = e),
            (e.child = t)
        );
    }
    function Vp(t, e, i, s, o) {
        if (t !== null) {
            var c = t.memoizedProps;
            if (as(c, s) && t.ref === e.ref)
                if (((It = !1), (e.pendingProps = s = c), Lu(t, o)))
                    t.flags & 131072 && (It = !0);
                else return (e.lanes = t.lanes), xn(t, e, o);
        }
        return wu(t, e, i, s, o);
    }
    function Up(t, e, i) {
        var s = e.pendingProps,
            o = s.children,
            c = (e.stateNode._pendingVisibility & 2) !== 0,
            g = t !== null ? t.memoizedState : null;
        if ((vs(t, e), s.mode === "hidden" || c)) {
            if (e.flags & 128) {
                if (((s = g !== null ? g.baseLanes | i : i), t !== null)) {
                    for (o = e.child = t.child, c = 0; o !== null; )
                        (c = c | o.lanes | o.childLanes), (o = o.sibling);
                    e.childLanes = c & ~s;
                } else (e.childLanes = 0), (e.child = null);
                return Hp(t, e, s, i);
            }
            if (i & 536870912)
                (e.memoizedState = { baseLanes: 0, cachePool: null }),
                    t !== null && Xl(e, g !== null ? g.cachePool : null),
                    g !== null ? qh(e, g) : iu(),
                    Yh(e);
            else
                return (
                    (e.lanes = e.childLanes = 536870912),
                    Hp(t, e, g !== null ? g.baseLanes | i : i, i)
                );
        } else
            g !== null
                ? (Xl(e, g.cachePool), qh(e, g), Gn(), (e.memoizedState = null))
                : (t !== null && Xl(e, null), iu(), Gn());
        return se(t, e, o, i), e.child;
    }
    function Hp(t, e, i, s) {
        var o = ru();
        return (
            (o = o === null ? null : { parent: Jt._currentValue, pool: o }),
            (e.memoizedState = { baseLanes: i, cachePool: o }),
            t !== null && Xl(e, null),
            iu(),
            Yh(e),
            t !== null && Ss(t, e, s, !0),
            null
        );
    }
    function vs(t, e) {
        var i = e.ref;
        if (i === null) t !== null && t.ref !== null && (e.flags |= 2097664);
        else {
            if (typeof i != "function" && typeof i != "object")
                throw Error(r(284));
            (t === null || t.ref !== i) && (e.flags |= 2097664);
        }
    }
    function wu(t, e, i, s, o) {
        return (
            Di(e),
            (i = uu(t, e, i, s, void 0, o)),
            (s = cu()),
            t !== null && !It
                ? (fu(t, e, o), xn(t, e, o))
                : (At && s && Io(e), (e.flags |= 1), se(t, e, i, o), e.child)
        );
    }
    function qp(t, e, i, s, o, c) {
        return (
            Di(e),
            (e.updateQueue = null),
            (i = Ph(e, s, i, o)),
            Kh(t),
            (s = cu()),
            t !== null && !It
                ? (fu(t, e, c), xn(t, e, c))
                : (At && s && Io(e), (e.flags |= 1), se(t, e, i, c), e.child)
        );
    }
    function Yp(t, e, i, s, o) {
        if ((Di(e), e.stateNode === null)) {
            var c = aa,
                g = i.contextType;
            typeof g == "object" && g !== null && (c = oe(g)),
                (c = new i(s, c)),
                (e.memoizedState =
                    c.state !== null && c.state !== void 0 ? c.state : null),
                (c.updater = Mu),
                (e.stateNode = c),
                (c._reactInternals = e),
                (c = e.stateNode),
                (c.props = s),
                (c.state = e.memoizedState),
                (c.refs = {}),
                Hu(e),
                (g = i.contextType),
                (c.context = typeof g == "object" && g !== null ? oe(g) : aa),
                (c.state = e.memoizedState),
                (g = i.getDerivedStateFromProps),
                typeof g == "function" &&
                    (Au(e, i, g, s), (c.state = e.memoizedState)),
                typeof i.getDerivedStateFromProps == "function" ||
                    typeof c.getSnapshotBeforeUpdate == "function" ||
                    (typeof c.UNSAFE_componentWillMount != "function" &&
                        typeof c.componentWillMount != "function") ||
                    ((g = c.state),
                    typeof c.componentWillMount == "function" &&
                        c.componentWillMount(),
                    typeof c.UNSAFE_componentWillMount == "function" &&
                        c.UNSAFE_componentWillMount(),
                    g !== c.state && Mu.enqueueReplaceState(c, c.state, null),
                    Ts(e, s, c, o),
                    xs(),
                    (c.state = e.memoizedState)),
                typeof c.componentDidMount == "function" &&
                    (e.flags |= 4194308),
                (s = !0);
        } else if (t === null) {
            c = e.stateNode;
            var S = e.memoizedProps,
                x = wi(i, S);
            c.props = x;
            var w = c.context,
                B = i.contextType;
            (g = aa), typeof B == "object" && B !== null && (g = oe(B));
            var X = i.getDerivedStateFromProps;
            (B =
                typeof X == "function" ||
                typeof c.getSnapshotBeforeUpdate == "function"),
                (S = e.pendingProps !== S),
                B ||
                    (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
                        typeof c.componentWillReceiveProps != "function") ||
                    ((S || w !== g) && wp(e, c, s, g)),
                (Pn = !1);
            var z = e.memoizedState;
            (c.state = z),
                Ts(e, s, c, o),
                xs(),
                (w = e.memoizedState),
                S || z !== w || Pn
                    ? (typeof X == "function" &&
                          (Au(e, i, X, s), (w = e.memoizedState)),
                      (x = Pn || Op(e, i, x, s, z, w, g))
                          ? (B ||
                                (typeof c.UNSAFE_componentWillMount !=
                                    "function" &&
                                    typeof c.componentWillMount !=
                                        "function") ||
                                (typeof c.componentWillMount == "function" &&
                                    c.componentWillMount(),
                                typeof c.UNSAFE_componentWillMount ==
                                    "function" &&
                                    c.UNSAFE_componentWillMount()),
                            typeof c.componentDidMount == "function" &&
                                (e.flags |= 4194308))
                          : (typeof c.componentDidMount == "function" &&
                                (e.flags |= 4194308),
                            (e.memoizedProps = s),
                            (e.memoizedState = w)),
                      (c.props = s),
                      (c.state = w),
                      (c.context = g),
                      (s = x))
                    : (typeof c.componentDidMount == "function" &&
                          (e.flags |= 4194308),
                      (s = !1));
        } else {
            (c = e.stateNode),
                qu(t, e),
                (g = e.memoizedProps),
                (B = wi(i, g)),
                (c.props = B),
                (X = e.pendingProps),
                (z = c.context),
                (w = i.contextType),
                (x = aa),
                typeof w == "object" && w !== null && (x = oe(w)),
                (S = i.getDerivedStateFromProps),
                (w =
                    typeof S == "function" ||
                    typeof c.getSnapshotBeforeUpdate == "function") ||
                    (typeof c.UNSAFE_componentWillReceiveProps != "function" &&
                        typeof c.componentWillReceiveProps != "function") ||
                    ((g !== X || z !== x) && wp(e, c, s, x)),
                (Pn = !1),
                (z = e.memoizedState),
                (c.state = z),
                Ts(e, s, c, o),
                xs();
            var j = e.memoizedState;
            g !== X ||
            z !== j ||
            Pn ||
            (t !== null && t.dependencies !== null && er(t.dependencies))
                ? (typeof S == "function" &&
                      (Au(e, i, S, s), (j = e.memoizedState)),
                  (B =
                      Pn ||
                      Op(e, i, B, s, z, j, x) ||
                      (t !== null &&
                          t.dependencies !== null &&
                          er(t.dependencies)))
                      ? (w ||
                            (typeof c.UNSAFE_componentWillUpdate !=
                                "function" &&
                                typeof c.componentWillUpdate != "function") ||
                            (typeof c.componentWillUpdate == "function" &&
                                c.componentWillUpdate(s, j, x),
                            typeof c.UNSAFE_componentWillUpdate == "function" &&
                                c.UNSAFE_componentWillUpdate(s, j, x)),
                        typeof c.componentDidUpdate == "function" &&
                            (e.flags |= 4),
                        typeof c.getSnapshotBeforeUpdate == "function" &&
                            (e.flags |= 1024))
                      : (typeof c.componentDidUpdate != "function" ||
                            (g === t.memoizedProps && z === t.memoizedState) ||
                            (e.flags |= 4),
                        typeof c.getSnapshotBeforeUpdate != "function" ||
                            (g === t.memoizedProps && z === t.memoizedState) ||
                            (e.flags |= 1024),
                        (e.memoizedProps = s),
                        (e.memoizedState = j)),
                  (c.props = s),
                  (c.state = j),
                  (c.context = x),
                  (s = B))
                : (typeof c.componentDidUpdate != "function" ||
                      (g === t.memoizedProps && z === t.memoizedState) ||
                      (e.flags |= 4),
                  typeof c.getSnapshotBeforeUpdate != "function" ||
                      (g === t.memoizedProps && z === t.memoizedState) ||
                      (e.flags |= 1024),
                  (s = !1));
        }
        return (
            (c = s),
            vs(t, e),
            (s = (e.flags & 128) !== 0),
            c || s
                ? ((c = e.stateNode),
                  (i =
                      s && typeof i.getDerivedStateFromError != "function"
                          ? null
                          : c.render()),
                  (e.flags |= 1),
                  t !== null && s
                      ? ((e.child = Ti(e, t.child, null, o)),
                        (e.child = Ti(e, null, i, o)))
                      : se(t, e, i, o),
                  (e.memoizedState = c.state),
                  (t = e.child))
                : (t = xn(t, e, o)),
            t
        );
    }
    function Gp(t, e, i, s) {
        return rs(), (e.flags |= 256), se(t, e, i, s), e.child;
    }
    var _u = { dehydrated: null, treeContext: null, retryLane: 0 };
    function Du(t) {
        return { baseLanes: t, cachePool: Xh() };
    }
    function Ru(t, e, i) {
        return (t = t !== null ? t.childLanes & ~i : 0), e && (t |= qe), t;
    }
    function kp(t, e, i) {
        var s = e.pendingProps,
            o = !1,
            c = (e.flags & 128) !== 0,
            g;
        if (
            ((g = c) ||
                (g =
                    t !== null && t.memoizedState === null
                        ? !1
                        : (Wt.current & 2) !== 0),
            g && ((o = !0), (e.flags &= -129)),
            (g = (e.flags & 32) !== 0),
            (e.flags &= -33),
            t === null)
        ) {
            if (At) {
                if ((o ? Yn(e) : Gn(), At)) {
                    var S = ae,
                        x;
                    if ((x = S)) {
                        t: {
                            for (x = S, S = an; x.nodeType !== 8; ) {
                                if (!S) {
                                    S = null;
                                    break t;
                                }
                                if (((x = We(x.nextSibling)), x === null)) {
                                    S = null;
                                    break t;
                                }
                            }
                            S = x;
                        }
                        S !== null
                            ? ((e.memoizedState = {
                                  dehydrated: S,
                                  treeContext:
                                      Si !== null
                                          ? { id: yn, overflow: vn }
                                          : null,
                                  retryLane: 536870912,
                              }),
                              (x = He(18, null, null, 0)),
                              (x.stateNode = S),
                              (x.return = e),
                              (e.child = x),
                              (he = e),
                              (ae = null),
                              (x = !0))
                            : (x = !1);
                    }
                    x || xi(e);
                }
                if (
                    ((S = e.memoizedState),
                    S !== null && ((S = S.dehydrated), S !== null))
                )
                    return (
                        S.data === "$!"
                            ? (e.lanes = 16)
                            : (e.lanes = 536870912),
                        null
                    );
                Sn(e);
            }
            return (
                (S = s.children),
                (s = s.fallback),
                o
                    ? (Gn(),
                      (o = e.mode),
                      (S = zu({ mode: "hidden", children: S }, o)),
                      (s = Ci(s, o, i, null)),
                      (S.return = e),
                      (s.return = e),
                      (S.sibling = s),
                      (e.child = S),
                      (o = e.child),
                      (o.memoizedState = Du(i)),
                      (o.childLanes = Ru(t, g, i)),
                      (e.memoizedState = _u),
                      s)
                    : (Yn(e), Cu(e, S))
            );
        }
        if (
            ((x = t.memoizedState),
            x !== null && ((S = x.dehydrated), S !== null))
        ) {
            if (c)
                e.flags & 256
                    ? (Yn(e), (e.flags &= -257), (e = ju(t, e, i)))
                    : e.memoizedState !== null
                      ? (Gn(),
                        (e.child = t.child),
                        (e.flags |= 128),
                        (e = null))
                      : (Gn(),
                        (o = s.fallback),
                        (S = e.mode),
                        (s = zu({ mode: "visible", children: s.children }, S)),
                        (o = Ci(o, S, i, null)),
                        (o.flags |= 2),
                        (s.return = e),
                        (o.return = e),
                        (s.sibling = o),
                        (e.child = s),
                        Ti(e, t.child, null, i),
                        (s = e.child),
                        (s.memoizedState = Du(i)),
                        (s.childLanes = Ru(t, g, i)),
                        (e.memoizedState = _u),
                        (e = o));
            else if ((Yn(e), S.data === "$!")) {
                if (((g = S.nextSibling && S.nextSibling.dataset), g))
                    var w = g.dgst;
                (g = w),
                    (s = Error(r(419))),
                    (s.stack = ""),
                    (s.digest = g),
                    os({ value: s, source: null, stack: null }),
                    (e = ju(t, e, i));
            } else if (
                (It || Ss(t, e, i, !1), (g = (i & t.childLanes) !== 0), It || g)
            ) {
                if (((g = jt), g !== null)) {
                    if (((s = i & -i), s & 42)) s = 1;
                    else
                        switch (s) {
                            case 2:
                                s = 1;
                                break;
                            case 8:
                                s = 4;
                                break;
                            case 32:
                                s = 16;
                                break;
                            case 128:
                            case 256:
                            case 512:
                            case 1024:
                            case 2048:
                            case 4096:
                            case 8192:
                            case 16384:
                            case 32768:
                            case 65536:
                            case 131072:
                            case 262144:
                            case 524288:
                            case 1048576:
                            case 2097152:
                            case 4194304:
                            case 8388608:
                            case 16777216:
                            case 33554432:
                                s = 64;
                                break;
                            case 268435456:
                                s = 134217728;
                                break;
                            default:
                                s = 0;
                        }
                    if (
                        ((s = s & (g.suspendedLanes | i) ? 0 : s),
                        s !== 0 && s !== x.retryLane)
                    )
                        throw ((x.retryLane = s), qn(t, s), pe(g, t, s), Np);
                }
                S.data === "$?" || rc(), (e = ju(t, e, i));
            } else
                S.data === "$?"
                    ? ((e.flags |= 128),
                      (e.child = t.child),
                      (e = wb.bind(null, t)),
                      (S._reactRetry = e),
                      (e = null))
                    : ((t = x.treeContext),
                      (ae = We(S.nextSibling)),
                      (he = e),
                      (At = !0),
                      (Qe = null),
                      (an = !1),
                      t !== null &&
                          ((Ne[Le++] = yn),
                          (Ne[Le++] = vn),
                          (Ne[Le++] = Si),
                          (yn = t.id),
                          (vn = t.overflow),
                          (Si = e)),
                      (e = Cu(e, s.children)),
                      (e.flags |= 4096));
            return e;
        }
        return o
            ? (Gn(),
              (o = s.fallback),
              (S = e.mode),
              (x = t.child),
              (w = x.sibling),
              (s = $n(x, { mode: "hidden", children: s.children })),
              (s.subtreeFlags = x.subtreeFlags & 31457280),
              w !== null
                  ? (o = $n(w, o))
                  : ((o = Ci(o, S, i, null)), (o.flags |= 2)),
              (o.return = e),
              (s.return = e),
              (s.sibling = o),
              (e.child = s),
              (s = o),
              (o = e.child),
              (S = t.child.memoizedState),
              S === null
                  ? (S = Du(i))
                  : ((x = S.cachePool),
                    x !== null
                        ? ((w = Jt._currentValue),
                          (x = x.parent !== w ? { parent: w, pool: w } : x))
                        : (x = Xh()),
                    (S = { baseLanes: S.baseLanes | i, cachePool: x })),
              (o.memoizedState = S),
              (o.childLanes = Ru(t, g, i)),
              (e.memoizedState = _u),
              s)
            : (Yn(e),
              (i = t.child),
              (t = i.sibling),
              (i = $n(i, { mode: "visible", children: s.children })),
              (i.return = e),
              (i.sibling = null),
              t !== null &&
                  ((g = e.deletions),
                  g === null
                      ? ((e.deletions = [t]), (e.flags |= 16))
                      : g.push(t)),
              (e.child = i),
              (e.memoizedState = null),
              i);
    }
    function Cu(t, e) {
        return (
            (e = zu({ mode: "visible", children: e }, t.mode)),
            (e.return = t),
            (t.child = e)
        );
    }
    function zu(t, e) {
        return mm(t, e, 0, null);
    }
    function ju(t, e, i) {
        return (
            Ti(e, t.child, null, i),
            (t = Cu(e, e.pendingProps.children)),
            (t.flags |= 2),
            (e.memoizedState = null),
            t
        );
    }
    function Xp(t, e, i) {
        t.lanes |= e;
        var s = t.alternate;
        s !== null && (s.lanes |= e), Vu(t.return, e, i);
    }
    function Nu(t, e, i, s, o) {
        var c = t.memoizedState;
        c === null
            ? (t.memoizedState = {
                  isBackwards: e,
                  rendering: null,
                  renderingStartTime: 0,
                  last: s,
                  tail: i,
                  tailMode: o,
              })
            : ((c.isBackwards = e),
              (c.rendering = null),
              (c.renderingStartTime = 0),
              (c.last = s),
              (c.tail = i),
              (c.tailMode = o));
    }
    function Kp(t, e, i) {
        var s = e.pendingProps,
            o = s.revealOrder,
            c = s.tail;
        if ((se(t, e, s.children, i), (s = Wt.current), s & 2))
            (s = (s & 1) | 2), (e.flags |= 128);
        else {
            if (t !== null && t.flags & 128)
                t: for (t = e.child; t !== null; ) {
                    if (t.tag === 13) t.memoizedState !== null && Xp(t, i, e);
                    else if (t.tag === 19) Xp(t, i, e);
                    else if (t.child !== null) {
                        (t.child.return = t), (t = t.child);
                        continue;
                    }
                    if (t === e) break t;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === e) break t;
                        t = t.return;
                    }
                    (t.sibling.return = t.return), (t = t.sibling);
                }
            s &= 1;
        }
        switch ((Dt(Wt, s), o)) {
            case "forwards":
                for (i = e.child, o = null; i !== null; )
                    (t = i.alternate),
                        t !== null && kl(t) === null && (o = i),
                        (i = i.sibling);
                (i = o),
                    i === null
                        ? ((o = e.child), (e.child = null))
                        : ((o = i.sibling), (i.sibling = null)),
                    Nu(e, !1, o, i, c);
                break;
            case "backwards":
                for (i = null, o = e.child, e.child = null; o !== null; ) {
                    if (((t = o.alternate), t !== null && kl(t) === null)) {
                        e.child = o;
                        break;
                    }
                    (t = o.sibling), (o.sibling = i), (i = o), (o = t);
                }
                Nu(e, !0, i, null, c);
                break;
            case "together":
                Nu(e, !1, null, null, void 0);
                break;
            default:
                e.memoizedState = null;
        }
        return e.child;
    }
    function xn(t, e, i) {
        if (
            (t !== null && (e.dependencies = t.dependencies),
            (In |= e.lanes),
            !(i & e.childLanes))
        )
            if (t !== null) {
                if ((Ss(t, e, i, !1), (i & e.childLanes) === 0)) return null;
            } else return null;
        if (t !== null && e.child !== t.child) throw Error(r(153));
        if (e.child !== null) {
            for (
                t = e.child,
                    i = $n(t, t.pendingProps),
                    e.child = i,
                    i.return = e;
                t.sibling !== null;

            )
                (t = t.sibling),
                    (i = i.sibling = $n(t, t.pendingProps)),
                    (i.return = e);
            i.sibling = null;
        }
        return e.child;
    }
    function Lu(t, e) {
        return t.lanes & e
            ? !0
            : ((t = t.dependencies), !!(t !== null && er(t)));
    }
    function hb(t, e, i) {
        switch (e.tag) {
            case 3:
                yl(e, e.stateNode.containerInfo),
                    Kn(e, Jt, t.memoizedState.cache),
                    rs();
                break;
            case 27:
            case 5:
                Mo(e);
                break;
            case 4:
                yl(e, e.stateNode.containerInfo);
                break;
            case 10:
                Kn(e, e.type, e.memoizedProps.value);
                break;
            case 13:
                var s = e.memoizedState;
                if (s !== null)
                    return s.dehydrated !== null
                        ? (Yn(e), (e.flags |= 128), null)
                        : i & e.child.childLanes
                          ? kp(t, e, i)
                          : (Yn(e),
                            (t = xn(t, e, i)),
                            t !== null ? t.sibling : null);
                Yn(e);
                break;
            case 19:
                var o = (t.flags & 128) !== 0;
                if (
                    ((s = (i & e.childLanes) !== 0),
                    s || (Ss(t, e, i, !1), (s = (i & e.childLanes) !== 0)),
                    o)
                ) {
                    if (s) return Kp(t, e, i);
                    e.flags |= 128;
                }
                if (
                    ((o = e.memoizedState),
                    o !== null &&
                        ((o.rendering = null),
                        (o.tail = null),
                        (o.lastEffect = null)),
                    Dt(Wt, Wt.current),
                    s)
                )
                    break;
                return null;
            case 22:
            case 23:
                return (e.lanes = 0), Up(t, e, i);
            case 24:
                Kn(e, Jt, t.memoizedState.cache);
        }
        return xn(t, e, i);
    }
    function Pp(t, e, i) {
        if (t !== null)
            if (t.memoizedProps !== e.pendingProps) It = !0;
            else {
                if (!Lu(t, i) && !(e.flags & 128))
                    return (It = !1), hb(t, e, i);
                It = !!(t.flags & 131072);
            }
        else (It = !1), At && e.flags & 1048576 && Rh(e, Ul, e.index);
        switch (((e.lanes = 0), e.tag)) {
            case 16:
                t: {
                    t = e.pendingProps;
                    var s = e.elementType,
                        o = s._init;
                    if (
                        ((s = o(s._payload)),
                        (e.type = s),
                        typeof s == "function")
                    )
                        Fu(s)
                            ? ((t = wi(s, t)),
                              (e.tag = 1),
                              (e = Yp(null, e, s, t, i)))
                            : ((e.tag = 0), (e = wu(null, e, s, t, i)));
                    else {
                        if (s != null) {
                            if (((o = s.$$typeof), o === O)) {
                                (e.tag = 11), (e = Lp(null, e, s, t, i));
                                break t;
                            } else if (o === N) {
                                (e.tag = 14), (e = Bp(null, e, s, t, i));
                                break t;
                            }
                        }
                        throw ((e = st(s) || s), Error(r(306, e, "")));
                    }
                }
                return e;
            case 0:
                return wu(t, e, e.type, e.pendingProps, i);
            case 1:
                return (
                    (s = e.type), (o = wi(s, e.pendingProps)), Yp(t, e, s, o, i)
                );
            case 3:
                t: {
                    if ((yl(e, e.stateNode.containerInfo), t === null))
                        throw Error(r(387));
                    var c = e.pendingProps;
                    (o = e.memoizedState),
                        (s = o.element),
                        qu(t, e),
                        Ts(e, c, null, i);
                    var g = e.memoizedState;
                    if (
                        ((c = g.cache),
                        Kn(e, Jt, c),
                        c !== o.cache && Uu(e, [Jt], i, !0),
                        xs(),
                        (c = g.element),
                        o.isDehydrated)
                    )
                        if (
                            ((o = {
                                element: c,
                                isDehydrated: !1,
                                cache: g.cache,
                            }),
                            (e.updateQueue.baseState = o),
                            (e.memoizedState = o),
                            e.flags & 256)
                        ) {
                            e = Gp(t, e, c, i);
                            break t;
                        } else if (c !== s) {
                            (s = je(Error(r(424)), e)),
                                os(s),
                                (e = Gp(t, e, c, i));
                            break t;
                        } else
                            for (
                                ae = We(e.stateNode.containerInfo.firstChild),
                                    he = e,
                                    At = !0,
                                    Qe = null,
                                    an = !0,
                                    i = Hh(e, null, c, i),
                                    e.child = i;
                                i;

                            )
                                (i.flags = (i.flags & -3) | 4096),
                                    (i = i.sibling);
                    else {
                        if ((rs(), c === s)) {
                            e = xn(t, e, i);
                            break t;
                        }
                        se(t, e, c, i);
                    }
                    e = e.child;
                }
                return e;
            case 26:
                return (
                    vs(t, e),
                    t === null
                        ? (i = Fm(e.type, null, e.pendingProps, null))
                            ? (e.memoizedState = i)
                            : At ||
                              ((i = e.type),
                              (t = e.pendingProps),
                              (s = yr(Bn.current).createElement(i)),
                              (s[re] = e),
                              (s[ve] = t),
                              le(s, i, t),
                              $t(s),
                              (e.stateNode = s))
                        : (e.memoizedState = Fm(
                              e.type,
                              t.memoizedProps,
                              e.pendingProps,
                              t.memoizedState
                          )),
                    null
                );
            case 27:
                return (
                    Mo(e),
                    t === null &&
                        At &&
                        ((s = e.stateNode =
                            Pm(e.type, e.pendingProps, Bn.current)),
                        (he = e),
                        (an = !0),
                        (ae = We(s.firstChild))),
                    (s = e.pendingProps.children),
                    t !== null || At
                        ? se(t, e, s, i)
                        : (e.child = Ti(e, null, s, i)),
                    vs(t, e),
                    e.child
                );
            case 5:
                return (
                    t === null &&
                        At &&
                        ((o = s = ae) &&
                            ((s = kb(s, e.type, e.pendingProps, an)),
                            s !== null
                                ? ((e.stateNode = s),
                                  (he = e),
                                  (ae = We(s.firstChild)),
                                  (an = !1),
                                  (o = !0))
                                : (o = !1)),
                        o || xi(e)),
                    Mo(e),
                    (o = e.type),
                    (c = e.pendingProps),
                    (g = t !== null ? t.memoizedProps : null),
                    (s = c.children),
                    xc(o, c)
                        ? (s = null)
                        : g !== null && xc(o, g) && (e.flags |= 32),
                    e.memoizedState !== null &&
                        ((o = uu(t, e, lb, null, null, i)),
                        (Vs._currentValue = o)),
                    vs(t, e),
                    se(t, e, s, i),
                    e.child
                );
            case 6:
                return (
                    t === null &&
                        At &&
                        ((t = i = ae) &&
                            ((i = Xb(i, e.pendingProps, an)),
                            i !== null
                                ? ((e.stateNode = i),
                                  (he = e),
                                  (ae = null),
                                  (t = !0))
                                : (t = !1)),
                        t || xi(e)),
                    null
                );
            case 13:
                return kp(t, e, i);
            case 4:
                return (
                    yl(e, e.stateNode.containerInfo),
                    (s = e.pendingProps),
                    t === null ? (e.child = Ti(e, null, s, i)) : se(t, e, s, i),
                    e.child
                );
            case 11:
                return Lp(t, e, e.type, e.pendingProps, i);
            case 7:
                return se(t, e, e.pendingProps, i), e.child;
            case 8:
                return se(t, e, e.pendingProps.children, i), e.child;
            case 12:
                return se(t, e, e.pendingProps.children, i), e.child;
            case 10:
                return (
                    (s = e.pendingProps),
                    Kn(e, e.type, s.value),
                    se(t, e, s.children, i),
                    e.child
                );
            case 9:
                return (
                    (o = e.type._context),
                    (s = e.pendingProps.children),
                    Di(e),
                    (o = oe(o)),
                    (s = s(o)),
                    (e.flags |= 1),
                    se(t, e, s, i),
                    e.child
                );
            case 14:
                return Bp(t, e, e.type, e.pendingProps, i);
            case 15:
                return Vp(t, e, e.type, e.pendingProps, i);
            case 19:
                return Kp(t, e, i);
            case 22:
                return Up(t, e, i);
            case 24:
                return (
                    Di(e),
                    (s = oe(Jt)),
                    t === null
                        ? ((o = ru()),
                          o === null &&
                              ((o = jt),
                              (c = su()),
                              (o.pooledCache = c),
                              c.refCount++,
                              c !== null && (o.pooledCacheLanes |= i),
                              (o = c)),
                          (e.memoizedState = { parent: s, cache: o }),
                          Hu(e),
                          Kn(e, Jt, o))
                        : (t.lanes & i &&
                              (qu(t, e), Ts(e, null, null, i), xs()),
                          (o = t.memoizedState),
                          (c = e.memoizedState),
                          o.parent !== s
                              ? ((o = { parent: s, cache: s }),
                                (e.memoizedState = o),
                                e.lanes === 0 &&
                                    (e.memoizedState = e.updateQueue.baseState =
                                        o),
                                Kn(e, Jt, s))
                              : ((s = c.cache),
                                Kn(e, Jt, s),
                                s !== o.cache && Uu(e, [Jt], i, !0))),
                    se(t, e, e.pendingProps.children, i),
                    e.child
                );
            case 29:
                throw e.pendingProps;
        }
        throw Error(r(156, e.tag));
    }
    var Bu = xt(null),
        _i = null,
        Tn = null;
    function Kn(t, e, i) {
        Dt(Bu, e._currentValue), (e._currentValue = i);
    }
    function En(t) {
        (t._currentValue = Bu.current), _t(Bu);
    }
    function Vu(t, e, i) {
        for (; t !== null; ) {
            var s = t.alternate;
            if (
                ((t.childLanes & e) !== e
                    ? ((t.childLanes |= e), s !== null && (s.childLanes |= e))
                    : s !== null &&
                      (s.childLanes & e) !== e &&
                      (s.childLanes |= e),
                t === i)
            )
                break;
            t = t.return;
        }
    }
    function Uu(t, e, i, s) {
        var o = t.child;
        for (o !== null && (o.return = t); o !== null; ) {
            var c = o.dependencies;
            if (c !== null) {
                var g = o.child;
                c = c.firstContext;
                t: for (; c !== null; ) {
                    var S = c;
                    c = o;
                    for (var x = 0; x < e.length; x++)
                        if (S.context === e[x]) {
                            (c.lanes |= i),
                                (S = c.alternate),
                                S !== null && (S.lanes |= i),
                                Vu(c.return, i, t),
                                s || (g = null);
                            break t;
                        }
                    c = S.next;
                }
            } else if (o.tag === 18) {
                if (((g = o.return), g === null)) throw Error(r(341));
                (g.lanes |= i),
                    (c = g.alternate),
                    c !== null && (c.lanes |= i),
                    Vu(g, i, t),
                    (g = null);
            } else g = o.child;
            if (g !== null) g.return = o;
            else
                for (g = o; g !== null; ) {
                    if (g === t) {
                        g = null;
                        break;
                    }
                    if (((o = g.sibling), o !== null)) {
                        (o.return = g.return), (g = o);
                        break;
                    }
                    g = g.return;
                }
            o = g;
        }
    }
    function Ss(t, e, i, s) {
        t = null;
        for (var o = e, c = !1; o !== null; ) {
            if (!c) {
                if (o.flags & 524288) c = !0;
                else if (o.flags & 262144) break;
            }
            if (o.tag === 10) {
                var g = o.alternate;
                if (g === null) throw Error(r(387));
                if (((g = g.memoizedProps), g !== null)) {
                    var S = o.type;
                    Ae(o.pendingProps.value, g.value) ||
                        (t !== null ? t.push(S) : (t = [S]));
                }
            } else if (o === gl.current) {
                if (((g = o.alternate), g === null)) throw Error(r(387));
                g.memoizedState.memoizedState !==
                    o.memoizedState.memoizedState &&
                    (t !== null ? t.push(Vs) : (t = [Vs]));
            }
            o = o.return;
        }
        t !== null && Uu(e, t, i, s), (e.flags |= 262144);
    }
    function er(t) {
        for (t = t.firstContext; t !== null; ) {
            if (!Ae(t.context._currentValue, t.memoizedValue)) return !0;
            t = t.next;
        }
        return !1;
    }
    function Di(t) {
        (_i = t),
            (Tn = null),
            (t = t.dependencies),
            t !== null && (t.firstContext = null);
    }
    function oe(t) {
        return Zp(_i, t);
    }
    function nr(t, e) {
        return _i === null && Di(t), Zp(t, e);
    }
    function Zp(t, e) {
        var i = e._currentValue;
        if (((e = { context: e, memoizedValue: i, next: null }), Tn === null)) {
            if (t === null) throw Error(r(308));
            (Tn = e),
                (t.dependencies = { lanes: 0, firstContext: e }),
                (t.flags |= 524288);
        } else Tn = Tn.next = e;
        return i;
    }
    var Pn = !1;
    function Hu(t) {
        t.updateQueue = {
            baseState: t.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, lanes: 0, hiddenCallbacks: null },
            callbacks: null,
        };
    }
    function qu(t, e) {
        (t = t.updateQueue),
            e.updateQueue === t &&
                (e.updateQueue = {
                    baseState: t.baseState,
                    firstBaseUpdate: t.firstBaseUpdate,
                    lastBaseUpdate: t.lastBaseUpdate,
                    shared: t.shared,
                    callbacks: null,
                });
    }
    function Zn(t) {
        return { lane: t, tag: 0, payload: null, callback: null, next: null };
    }
    function Qn(t, e, i) {
        var s = t.updateQueue;
        if (s === null) return null;
        if (((s = s.shared), Vt & 2)) {
            var o = s.pending;
            return (
                o === null ? (e.next = e) : ((e.next = o.next), (o.next = e)),
                (s.pending = e),
                (e = Bl(t)),
                _h(t, null, i),
                e
            );
        }
        return Ll(t, s, e, i), Bl(t);
    }
    function bs(t, e, i) {
        if (
            ((e = e.updateQueue),
            e !== null && ((e = e.shared), (i & 4194176) !== 0))
        ) {
            var s = e.lanes;
            (s &= t.pendingLanes), (i |= s), (e.lanes = i), Bd(t, i);
        }
    }
    function Yu(t, e) {
        var i = t.updateQueue,
            s = t.alternate;
        if (s !== null && ((s = s.updateQueue), i === s)) {
            var o = null,
                c = null;
            if (((i = i.firstBaseUpdate), i !== null)) {
                do {
                    var g = {
                        lane: i.lane,
                        tag: i.tag,
                        payload: i.payload,
                        callback: null,
                        next: null,
                    };
                    c === null ? (o = c = g) : (c = c.next = g), (i = i.next);
                } while (i !== null);
                c === null ? (o = c = e) : (c = c.next = e);
            } else o = c = e;
            (i = {
                baseState: s.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: c,
                shared: s.shared,
                callbacks: s.callbacks,
            }),
                (t.updateQueue = i);
            return;
        }
        (t = i.lastBaseUpdate),
            t === null ? (i.firstBaseUpdate = e) : (t.next = e),
            (i.lastBaseUpdate = e);
    }
    var Gu = !1;
    function xs() {
        if (Gu) {
            var t = ca;
            if (t !== null) throw t;
        }
    }
    function Ts(t, e, i, s) {
        Gu = !1;
        var o = t.updateQueue;
        Pn = !1;
        var c = o.firstBaseUpdate,
            g = o.lastBaseUpdate,
            S = o.shared.pending;
        if (S !== null) {
            o.shared.pending = null;
            var x = S,
                w = x.next;
            (x.next = null), g === null ? (c = w) : (g.next = w), (g = x);
            var B = t.alternate;
            B !== null &&
                ((B = B.updateQueue),
                (S = B.lastBaseUpdate),
                S !== g &&
                    (S === null ? (B.firstBaseUpdate = w) : (S.next = w),
                    (B.lastBaseUpdate = x)));
        }
        if (c !== null) {
            var X = o.baseState;
            (g = 0), (B = w = x = null), (S = c);
            do {
                var z = S.lane & -536870913,
                    j = z !== S.lane;
                if (j ? (Et & z) === z : (s & z) === z) {
                    z !== 0 && z === ua && (Gu = !0),
                        B !== null &&
                            (B = B.next =
                                {
                                    lane: 0,
                                    tag: S.tag,
                                    payload: S.payload,
                                    callback: null,
                                    next: null,
                                });
                    t: {
                        var rt = t,
                            pt = S;
                        z = e;
                        var Gt = i;
                        switch (pt.tag) {
                            case 1:
                                if (
                                    ((rt = pt.payload), typeof rt == "function")
                                ) {
                                    X = rt.call(Gt, X, z);
                                    break t;
                                }
                                X = rt;
                                break t;
                            case 3:
                                rt.flags = (rt.flags & -65537) | 128;
                            case 0:
                                if (
                                    ((rt = pt.payload),
                                    (z =
                                        typeof rt == "function"
                                            ? rt.call(Gt, X, z)
                                            : rt),
                                    z == null)
                                )
                                    break t;
                                X = lt({}, X, z);
                                break t;
                            case 2:
                                Pn = !0;
                        }
                    }
                    (z = S.callback),
                        z !== null &&
                            ((t.flags |= 64),
                            j && (t.flags |= 8192),
                            (j = o.callbacks),
                            j === null ? (o.callbacks = [z]) : j.push(z));
                } else
                    (j = {
                        lane: z,
                        tag: S.tag,
                        payload: S.payload,
                        callback: S.callback,
                        next: null,
                    }),
                        B === null ? ((w = B = j), (x = X)) : (B = B.next = j),
                        (g |= z);
                if (((S = S.next), S === null)) {
                    if (((S = o.shared.pending), S === null)) break;
                    (j = S),
                        (S = j.next),
                        (j.next = null),
                        (o.lastBaseUpdate = j),
                        (o.shared.pending = null);
                }
            } while (!0);
            B === null && (x = X),
                (o.baseState = x),
                (o.firstBaseUpdate = w),
                (o.lastBaseUpdate = B),
                c === null && (o.shared.lanes = 0),
                (In |= g),
                (t.lanes = g),
                (t.memoizedState = X);
        }
    }
    function Qp(t, e) {
        if (typeof t != "function") throw Error(r(191, t));
        t.call(e);
    }
    function Fp(t, e) {
        var i = t.callbacks;
        if (i !== null)
            for (t.callbacks = null, t = 0; t < i.length; t++) Qp(i[t], e);
    }
    function Es(t, e) {
        try {
            var i = e.updateQueue,
                s = i !== null ? i.lastEffect : null;
            if (s !== null) {
                var o = s.next;
                i = o;
                do {
                    if ((i.tag & t) === t) {
                        s = void 0;
                        var c = i.create,
                            g = i.inst;
                        (s = c()), (g.destroy = s);
                    }
                    i = i.next;
                } while (i !== o);
            }
        } catch (S) {
            zt(e, e.return, S);
        }
    }
    function Fn(t, e, i) {
        try {
            var s = e.updateQueue,
                o = s !== null ? s.lastEffect : null;
            if (o !== null) {
                var c = o.next;
                s = c;
                do {
                    if ((s.tag & t) === t) {
                        var g = s.inst,
                            S = g.destroy;
                        if (S !== void 0) {
                            (g.destroy = void 0), (o = e);
                            var x = i;
                            try {
                                S();
                            } catch (w) {
                                zt(o, x, w);
                            }
                        }
                    }
                    s = s.next;
                } while (s !== c);
            }
        } catch (w) {
            zt(e, e.return, w);
        }
    }
    function Wp(t) {
        var e = t.updateQueue;
        if (e !== null) {
            var i = t.stateNode;
            try {
                Fp(e, i);
            } catch (s) {
                zt(t, t.return, s);
            }
        }
    }
    function Jp(t, e, i) {
        (i.props = wi(t.type, t.memoizedProps)), (i.state = t.memoizedState);
        try {
            i.componentWillUnmount();
        } catch (s) {
            zt(t, e, s);
        }
    }
    function Ri(t, e) {
        try {
            var i = t.ref;
            if (i !== null) {
                var s = t.stateNode;
                switch (t.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var o = s;
                        break;
                    default:
                        o = s;
                }
                typeof i == "function"
                    ? (t.refCleanup = i(o))
                    : (i.current = o);
            }
        } catch (c) {
            zt(t, e, c);
        }
    }
    function Me(t, e) {
        var i = t.ref,
            s = t.refCleanup;
        if (i !== null)
            if (typeof s == "function")
                try {
                    s();
                } catch (o) {
                    zt(t, e, o);
                } finally {
                    (t.refCleanup = null),
                        (t = t.alternate),
                        t != null && (t.refCleanup = null);
                }
            else if (typeof i == "function")
                try {
                    i(null);
                } catch (o) {
                    zt(t, e, o);
                }
            else i.current = null;
    }
    function $p(t) {
        var e = t.type,
            i = t.memoizedProps,
            s = t.stateNode;
        try {
            t: switch (e) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    i.autoFocus && s.focus();
                    break t;
                case "img":
                    i.src ? (s.src = i.src) : i.srcSet && (s.srcset = i.srcSet);
            }
        } catch (o) {
            zt(t, t.return, o);
        }
    }
    function Ip(t, e, i) {
        try {
            var s = t.stateNode;
            Ub(s, t.type, i, e), (s[ve] = e);
        } catch (o) {
            zt(t, t.return, o);
        }
    }
    function tm(t) {
        return (
            t.tag === 5 ||
            t.tag === 3 ||
            t.tag === 26 ||
            t.tag === 27 ||
            t.tag === 4
        );
    }
    function ku(t) {
        t: for (;;) {
            for (; t.sibling === null; ) {
                if (t.return === null || tm(t.return)) return null;
                t = t.return;
            }
            for (
                t.sibling.return = t.return, t = t.sibling;
                t.tag !== 5 && t.tag !== 6 && t.tag !== 27 && t.tag !== 18;

            ) {
                if (t.flags & 2 || t.child === null || t.tag === 4) continue t;
                (t.child.return = t), (t = t.child);
            }
            if (!(t.flags & 2)) return t.stateNode;
        }
    }
    function Xu(t, e, i) {
        var s = t.tag;
        if (s === 5 || s === 6)
            (t = t.stateNode),
                e
                    ? i.nodeType === 8
                        ? i.parentNode.insertBefore(t, e)
                        : i.insertBefore(t, e)
                    : (i.nodeType === 8
                          ? ((e = i.parentNode), e.insertBefore(t, i))
                          : ((e = i), e.appendChild(t)),
                      (i = i._reactRootContainer),
                      i != null || e.onclick !== null || (e.onclick = gr));
        else if (s !== 4 && s !== 27 && ((t = t.child), t !== null))
            for (Xu(t, e, i), t = t.sibling; t !== null; )
                Xu(t, e, i), (t = t.sibling);
    }
    function ir(t, e, i) {
        var s = t.tag;
        if (s === 5 || s === 6)
            (t = t.stateNode), e ? i.insertBefore(t, e) : i.appendChild(t);
        else if (s !== 4 && s !== 27 && ((t = t.child), t !== null))
            for (ir(t, e, i), t = t.sibling; t !== null; )
                ir(t, e, i), (t = t.sibling);
    }
    var An = !1,
        qt = !1,
        Ku = !1,
        em = typeof WeakSet == "function" ? WeakSet : Set,
        te = null,
        nm = !1;
    function pb(t, e) {
        if (((t = t.containerInfo), (Sc = Er), (t = Sh(t)), Zo(t))) {
            if ("selectionStart" in t)
                var i = { start: t.selectionStart, end: t.selectionEnd };
            else
                t: {
                    i = ((i = t.ownerDocument) && i.defaultView) || window;
                    var s = i.getSelection && i.getSelection();
                    if (s && s.rangeCount !== 0) {
                        i = s.anchorNode;
                        var o = s.anchorOffset,
                            c = s.focusNode;
                        s = s.focusOffset;
                        try {
                            i.nodeType, c.nodeType;
                        } catch {
                            i = null;
                            break t;
                        }
                        var g = 0,
                            S = -1,
                            x = -1,
                            w = 0,
                            B = 0,
                            X = t,
                            z = null;
                        e: for (;;) {
                            for (
                                var j;
                                X !== i ||
                                    (o !== 0 && X.nodeType !== 3) ||
                                    (S = g + o),
                                    X !== c ||
                                        (s !== 0 && X.nodeType !== 3) ||
                                        (x = g + s),
                                    X.nodeType === 3 &&
                                        (g += X.nodeValue.length),
                                    (j = X.firstChild) !== null;

                            )
                                (z = X), (X = j);
                            for (;;) {
                                if (X === t) break e;
                                if (
                                    (z === i && ++w === o && (S = g),
                                    z === c && ++B === s && (x = g),
                                    (j = X.nextSibling) !== null)
                                )
                                    break;
                                (X = z), (z = X.parentNode);
                            }
                            X = j;
                        }
                        i = S === -1 || x === -1 ? null : { start: S, end: x };
                    } else i = null;
                }
            i = i || { start: 0, end: 0 };
        } else i = null;
        for (
            bc = { focusedElem: t, selectionRange: i }, Er = !1, te = e;
            te !== null;

        )
            if (
                ((e = te),
                (t = e.child),
                (e.subtreeFlags & 1028) !== 0 && t !== null)
            )
                (t.return = e), (te = t);
            else
                for (; te !== null; ) {
                    switch (
                        ((e = te), (c = e.alternate), (t = e.flags), e.tag)
                    ) {
                        case 0:
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (t & 1024 && c !== null) {
                                (t = void 0),
                                    (i = e),
                                    (o = c.memoizedProps),
                                    (c = c.memoizedState),
                                    (s = i.stateNode);
                                try {
                                    var rt = wi(
                                        i.type,
                                        o,
                                        i.elementType === i.type
                                    );
                                    (t = s.getSnapshotBeforeUpdate(rt, c)),
                                        (s.__reactInternalSnapshotBeforeUpdate =
                                            t);
                                } catch (pt) {
                                    zt(i, i.return, pt);
                                }
                            }
                            break;
                        case 3:
                            if (t & 1024) {
                                if (
                                    ((t = e.stateNode.containerInfo),
                                    (i = t.nodeType),
                                    i === 9)
                                )
                                    Ac(t);
                                else if (i === 1)
                                    switch (t.nodeName) {
                                        case "HEAD":
                                        case "HTML":
                                        case "BODY":
                                            Ac(t);
                                            break;
                                        default:
                                            t.textContent = "";
                                    }
                            }
                            break;
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            if (t & 1024) throw Error(r(163));
                    }
                    if (((t = e.sibling), t !== null)) {
                        (t.return = e.return), (te = t);
                        break;
                    }
                    te = e.return;
                }
        return (rt = nm), (nm = !1), rt;
    }
    function im(t, e, i) {
        var s = i.flags;
        switch (i.tag) {
            case 0:
            case 11:
            case 15:
                On(t, i), s & 4 && Es(5, i);
                break;
            case 1:
                if ((On(t, i), s & 4))
                    if (((t = i.stateNode), e === null))
                        try {
                            t.componentDidMount();
                        } catch (S) {
                            zt(i, i.return, S);
                        }
                    else {
                        var o = wi(i.type, e.memoizedProps);
                        e = e.memoizedState;
                        try {
                            t.componentDidUpdate(
                                o,
                                e,
                                t.__reactInternalSnapshotBeforeUpdate
                            );
                        } catch (S) {
                            zt(i, i.return, S);
                        }
                    }
                s & 64 && Wp(i), s & 512 && Ri(i, i.return);
                break;
            case 3:
                if ((On(t, i), s & 64 && ((s = i.updateQueue), s !== null))) {
                    if (((t = null), i.child !== null))
                        switch (i.child.tag) {
                            case 27:
                            case 5:
                                t = i.child.stateNode;
                                break;
                            case 1:
                                t = i.child.stateNode;
                        }
                    try {
                        Fp(s, t);
                    } catch (S) {
                        zt(i, i.return, S);
                    }
                }
                break;
            case 26:
                On(t, i), s & 512 && Ri(i, i.return);
                break;
            case 27:
            case 5:
                On(t, i),
                    e === null && s & 4 && $p(i),
                    s & 512 && Ri(i, i.return);
                break;
            case 12:
                On(t, i);
                break;
            case 13:
                On(t, i), s & 4 && lm(t, i);
                break;
            case 22:
                if (((o = i.memoizedState !== null || An), !o)) {
                    e = (e !== null && e.memoizedState !== null) || qt;
                    var c = An,
                        g = qt;
                    (An = o),
                        (qt = e) && !g
                            ? Wn(t, i, (i.subtreeFlags & 8772) !== 0)
                            : On(t, i),
                        (An = c),
                        (qt = g);
                }
                s & 512 &&
                    (i.memoizedProps.mode === "manual"
                        ? Ri(i, i.return)
                        : Me(i, i.return));
                break;
            default:
                On(t, i);
        }
    }
    function am(t) {
        var e = t.alternate;
        e !== null && ((t.alternate = null), am(e)),
            (t.child = null),
            (t.deletions = null),
            (t.sibling = null),
            t.tag === 5 && ((e = t.stateNode), e !== null && Co(e)),
            (t.stateNode = null),
            (t.return = null),
            (t.dependencies = null),
            (t.memoizedProps = null),
            (t.memoizedState = null),
            (t.pendingProps = null),
            (t.stateNode = null),
            (t.updateQueue = null);
    }
    var Qt = null,
        Oe = !1;
    function Mn(t, e, i) {
        for (i = i.child; i !== null; ) sm(t, e, i), (i = i.sibling);
    }
    function sm(t, e, i) {
        if (Te && typeof Te.onCommitFiberUnmount == "function")
            try {
                Te.onCommitFiberUnmount(Pa, i);
            } catch {}
        switch (i.tag) {
            case 26:
                qt || Me(i, e),
                    Mn(t, e, i),
                    i.memoizedState
                        ? i.memoizedState.count--
                        : i.stateNode &&
                          ((i = i.stateNode), i.parentNode.removeChild(i));
                break;
            case 27:
                qt || Me(i, e);
                var s = Qt,
                    o = Oe;
                for (
                    Qt = i.stateNode,
                        Mn(t, e, i),
                        i = i.stateNode,
                        e = i.attributes;
                    e.length;

                )
                    i.removeAttributeNode(e[0]);
                Co(i), (Qt = s), (Oe = o);
                break;
            case 5:
                qt || Me(i, e);
            case 6:
                o = Qt;
                var c = Oe;
                if (((Qt = null), Mn(t, e, i), (Qt = o), (Oe = c), Qt !== null))
                    if (Oe)
                        try {
                            (t = Qt),
                                (s = i.stateNode),
                                t.nodeType === 8
                                    ? t.parentNode.removeChild(s)
                                    : t.removeChild(s);
                        } catch (g) {
                            zt(i, e, g);
                        }
                    else
                        try {
                            Qt.removeChild(i.stateNode);
                        } catch (g) {
                            zt(i, e, g);
                        }
                break;
            case 18:
                Qt !== null &&
                    (Oe
                        ? ((e = Qt),
                          (i = i.stateNode),
                          e.nodeType === 8
                              ? Ec(e.parentNode, i)
                              : e.nodeType === 1 && Ec(e, i),
                          Ys(e))
                        : Ec(Qt, i.stateNode));
                break;
            case 4:
                (s = Qt),
                    (o = Oe),
                    (Qt = i.stateNode.containerInfo),
                    (Oe = !0),
                    Mn(t, e, i),
                    (Qt = s),
                    (Oe = o);
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                qt || Fn(2, i, e), qt || Fn(4, i, e), Mn(t, e, i);
                break;
            case 1:
                qt ||
                    (Me(i, e),
                    (s = i.stateNode),
                    typeof s.componentWillUnmount == "function" && Jp(i, e, s)),
                    Mn(t, e, i);
                break;
            case 21:
                Mn(t, e, i);
                break;
            case 22:
                qt || Me(i, e),
                    (qt = (s = qt) || i.memoizedState !== null),
                    Mn(t, e, i),
                    (qt = s);
                break;
            default:
                Mn(t, e, i);
        }
    }
    function lm(t, e) {
        if (
            e.memoizedState === null &&
            ((t = e.alternate),
            t !== null &&
                ((t = t.memoizedState),
                t !== null && ((t = t.dehydrated), t !== null)))
        )
            try {
                Ys(t);
            } catch (i) {
                zt(e, e.return, i);
            }
    }
    function mb(t) {
        switch (t.tag) {
            case 13:
            case 19:
                var e = t.stateNode;
                return e === null && (e = t.stateNode = new em()), e;
            case 22:
                return (
                    (t = t.stateNode),
                    (e = t._retryCache),
                    e === null && (e = t._retryCache = new em()),
                    e
                );
            default:
                throw Error(r(435, t.tag));
        }
    }
    function Pu(t, e) {
        var i = mb(t);
        e.forEach(function (s) {
            var o = _b.bind(null, t, s);
            i.has(s) || (i.add(s), s.then(o, o));
        });
    }
    function Ve(t, e) {
        var i = e.deletions;
        if (i !== null)
            for (var s = 0; s < i.length; s++) {
                var o = i[s],
                    c = t,
                    g = e,
                    S = g;
                t: for (; S !== null; ) {
                    switch (S.tag) {
                        case 27:
                        case 5:
                            (Qt = S.stateNode), (Oe = !1);
                            break t;
                        case 3:
                            (Qt = S.stateNode.containerInfo), (Oe = !0);
                            break t;
                        case 4:
                            (Qt = S.stateNode.containerInfo), (Oe = !0);
                            break t;
                    }
                    S = S.return;
                }
                if (Qt === null) throw Error(r(160));
                sm(c, g, o),
                    (Qt = null),
                    (Oe = !1),
                    (c = o.alternate),
                    c !== null && (c.return = null),
                    (o.return = null);
            }
        if (e.subtreeFlags & 13878)
            for (e = e.child; e !== null; ) rm(e, t), (e = e.sibling);
    }
    var Fe = null;
    function rm(t, e) {
        var i = t.alternate,
            s = t.flags;
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                Ve(e, t),
                    Ue(t),
                    s & 4 && (Fn(3, t, t.return), Es(3, t), Fn(5, t, t.return));
                break;
            case 1:
                Ve(e, t),
                    Ue(t),
                    s & 512 && (qt || i === null || Me(i, i.return)),
                    s & 64 &&
                        An &&
                        ((t = t.updateQueue),
                        t !== null &&
                            ((s = t.callbacks),
                            s !== null &&
                                ((i = t.shared.hiddenCallbacks),
                                (t.shared.hiddenCallbacks =
                                    i === null ? s : i.concat(s)))));
                break;
            case 26:
                var o = Fe;
                if (
                    (Ve(e, t),
                    Ue(t),
                    s & 512 && (qt || i === null || Me(i, i.return)),
                    s & 4)
                ) {
                    var c = i !== null ? i.memoizedState : null;
                    if (((s = t.memoizedState), i === null))
                        if (s === null)
                            if (t.stateNode === null) {
                                t: {
                                    (s = t.type),
                                        (i = t.memoizedProps),
                                        (o = o.ownerDocument || o);
                                    e: switch (s) {
                                        case "title":
                                            (c =
                                                o.getElementsByTagName(
                                                    "title"
                                                )[0]),
                                                (!c ||
                                                    c[Fa] ||
                                                    c[re] ||
                                                    c.namespaceURI ===
                                                        "http://www.w3.org/2000/svg" ||
                                                    c.hasAttribute(
                                                        "itemprop"
                                                    )) &&
                                                    ((c = o.createElement(s)),
                                                    o.head.insertBefore(
                                                        c,
                                                        o.querySelector(
                                                            "head > title"
                                                        )
                                                    )),
                                                le(c, s, i),
                                                (c[re] = t),
                                                $t(c),
                                                (s = c);
                                            break t;
                                        case "link":
                                            var g = $m("link", "href", o).get(
                                                s + (i.href || "")
                                            );
                                            if (g) {
                                                for (
                                                    var S = 0;
                                                    S < g.length;
                                                    S++
                                                )
                                                    if (
                                                        ((c = g[S]),
                                                        c.getAttribute(
                                                            "href"
                                                        ) ===
                                                            (i.href == null
                                                                ? null
                                                                : i.href) &&
                                                            c.getAttribute(
                                                                "rel"
                                                            ) ===
                                                                (i.rel == null
                                                                    ? null
                                                                    : i.rel) &&
                                                            c.getAttribute(
                                                                "title"
                                                            ) ===
                                                                (i.title == null
                                                                    ? null
                                                                    : i.title) &&
                                                            c.getAttribute(
                                                                "crossorigin"
                                                            ) ===
                                                                (i.crossOrigin ==
                                                                null
                                                                    ? null
                                                                    : i.crossOrigin))
                                                    ) {
                                                        g.splice(S, 1);
                                                        break e;
                                                    }
                                            }
                                            (c = o.createElement(s)),
                                                le(c, s, i),
                                                o.head.appendChild(c);
                                            break;
                                        case "meta":
                                            if (
                                                (g = $m(
                                                    "meta",
                                                    "content",
                                                    o
                                                ).get(s + (i.content || "")))
                                            ) {
                                                for (S = 0; S < g.length; S++)
                                                    if (
                                                        ((c = g[S]),
                                                        c.getAttribute(
                                                            "content"
                                                        ) ===
                                                            (i.content == null
                                                                ? null
                                                                : "" +
                                                                  i.content) &&
                                                            c.getAttribute(
                                                                "name"
                                                            ) ===
                                                                (i.name == null
                                                                    ? null
                                                                    : i.name) &&
                                                            c.getAttribute(
                                                                "property"
                                                            ) ===
                                                                (i.property ==
                                                                null
                                                                    ? null
                                                                    : i.property) &&
                                                            c.getAttribute(
                                                                "http-equiv"
                                                            ) ===
                                                                (i.httpEquiv ==
                                                                null
                                                                    ? null
                                                                    : i.httpEquiv) &&
                                                            c.getAttribute(
                                                                "charset"
                                                            ) ===
                                                                (i.charSet ==
                                                                null
                                                                    ? null
                                                                    : i.charSet))
                                                    ) {
                                                        g.splice(S, 1);
                                                        break e;
                                                    }
                                            }
                                            (c = o.createElement(s)),
                                                le(c, s, i),
                                                o.head.appendChild(c);
                                            break;
                                        default:
                                            throw Error(r(468, s));
                                    }
                                    (c[re] = t), $t(c), (s = c);
                                }
                                t.stateNode = s;
                            } else Im(o, t.type, t.stateNode);
                        else t.stateNode = Jm(o, s, t.memoizedProps);
                    else
                        c !== s
                            ? (c === null
                                  ? i.stateNode !== null &&
                                    ((i = i.stateNode),
                                    i.parentNode.removeChild(i))
                                  : c.count--,
                              s === null
                                  ? Im(o, t.type, t.stateNode)
                                  : Jm(o, s, t.memoizedProps))
                            : s === null &&
                              t.stateNode !== null &&
                              Ip(t, t.memoizedProps, i.memoizedProps);
                }
                break;
            case 27:
                if (s & 4 && t.alternate === null) {
                    (o = t.stateNode), (c = t.memoizedProps);
                    try {
                        for (var x = o.firstChild; x; ) {
                            var w = x.nextSibling,
                                B = x.nodeName;
                            x[Fa] ||
                                B === "HEAD" ||
                                B === "BODY" ||
                                B === "SCRIPT" ||
                                B === "STYLE" ||
                                (B === "LINK" &&
                                    x.rel.toLowerCase() === "stylesheet") ||
                                o.removeChild(x),
                                (x = w);
                        }
                        for (var X = t.type, z = o.attributes; z.length; )
                            o.removeAttributeNode(z[0]);
                        le(o, X, c), (o[re] = t), (o[ve] = c);
                    } catch (rt) {
                        zt(t, t.return, rt);
                    }
                }
            case 5:
                if (
                    (Ve(e, t),
                    Ue(t),
                    s & 512 && (qt || i === null || Me(i, i.return)),
                    t.flags & 32)
                ) {
                    o = t.stateNode;
                    try {
                        Ji(o, "");
                    } catch (rt) {
                        zt(t, t.return, rt);
                    }
                }
                s & 4 &&
                    t.stateNode != null &&
                    ((o = t.memoizedProps),
                    Ip(t, o, i !== null ? i.memoizedProps : o)),
                    s & 1024 && (Ku = !0);
                break;
            case 6:
                if ((Ve(e, t), Ue(t), s & 4)) {
                    if (t.stateNode === null) throw Error(r(162));
                    (s = t.memoizedProps), (i = t.stateNode);
                    try {
                        i.nodeValue = s;
                    } catch (rt) {
                        zt(t, t.return, rt);
                    }
                }
                break;
            case 3:
                if (
                    ((br = null),
                    (o = Fe),
                    (Fe = vr(e.containerInfo)),
                    Ve(e, t),
                    (Fe = o),
                    Ue(t),
                    s & 4 && i !== null && i.memoizedState.isDehydrated)
                )
                    try {
                        Ys(e.containerInfo);
                    } catch (rt) {
                        zt(t, t.return, rt);
                    }
                Ku && ((Ku = !1), om(t));
                break;
            case 4:
                (s = Fe),
                    (Fe = vr(t.stateNode.containerInfo)),
                    Ve(e, t),
                    Ue(t),
                    (Fe = s);
                break;
            case 12:
                Ve(e, t), Ue(t);
                break;
            case 13:
                Ve(e, t),
                    Ue(t),
                    t.child.flags & 8192 &&
                        (t.memoizedState !== null) !=
                            (i !== null && i.memoizedState !== null) &&
                        (ec = nn()),
                    s & 4 &&
                        ((s = t.updateQueue),
                        s !== null && ((t.updateQueue = null), Pu(t, s)));
                break;
            case 22:
                if (
                    (s & 512 && (qt || i === null || Me(i, i.return)),
                    (x = t.memoizedState !== null),
                    (w = i !== null && i.memoizedState !== null),
                    (B = An),
                    (X = qt),
                    (An = B || x),
                    (qt = X || w),
                    Ve(e, t),
                    (qt = X),
                    (An = B),
                    Ue(t),
                    (e = t.stateNode),
                    (e._current = t),
                    (e._visibility &= -3),
                    (e._visibility |= e._pendingVisibility & 2),
                    s & 8192 &&
                        ((e._visibility = x
                            ? e._visibility & -2
                            : e._visibility | 1),
                        x && ((e = An || qt), i === null || w || e || pa(t)),
                        t.memoizedProps === null ||
                            t.memoizedProps.mode !== "manual"))
                )
                    t: for (i = null, e = t; ; ) {
                        if (e.tag === 5 || e.tag === 26 || e.tag === 27) {
                            if (i === null) {
                                w = i = e;
                                try {
                                    if (((o = w.stateNode), x))
                                        (c = o.style),
                                            typeof c.setProperty == "function"
                                                ? c.setProperty(
                                                      "display",
                                                      "none",
                                                      "important"
                                                  )
                                                : (c.display = "none");
                                    else {
                                        (g = w.stateNode),
                                            (S = w.memoizedProps.style);
                                        var j =
                                            S != null &&
                                            S.hasOwnProperty("display")
                                                ? S.display
                                                : null;
                                        g.style.display =
                                            j == null || typeof j == "boolean"
                                                ? ""
                                                : ("" + j).trim();
                                    }
                                } catch (rt) {
                                    zt(w, w.return, rt);
                                }
                            }
                        } else if (e.tag === 6) {
                            if (i === null) {
                                w = e;
                                try {
                                    w.stateNode.nodeValue = x
                                        ? ""
                                        : w.memoizedProps;
                                } catch (rt) {
                                    zt(w, w.return, rt);
                                }
                            }
                        } else if (
                            ((e.tag !== 22 && e.tag !== 23) ||
                                e.memoizedState === null ||
                                e === t) &&
                            e.child !== null
                        ) {
                            (e.child.return = e), (e = e.child);
                            continue;
                        }
                        if (e === t) break t;
                        for (; e.sibling === null; ) {
                            if (e.return === null || e.return === t) break t;
                            i === e && (i = null), (e = e.return);
                        }
                        i === e && (i = null),
                            (e.sibling.return = e.return),
                            (e = e.sibling);
                    }
                s & 4 &&
                    ((s = t.updateQueue),
                    s !== null &&
                        ((i = s.retryQueue),
                        i !== null && ((s.retryQueue = null), Pu(t, i))));
                break;
            case 19:
                Ve(e, t),
                    Ue(t),
                    s & 4 &&
                        ((s = t.updateQueue),
                        s !== null && ((t.updateQueue = null), Pu(t, s)));
                break;
            case 21:
                break;
            default:
                Ve(e, t), Ue(t);
        }
    }
    function Ue(t) {
        var e = t.flags;
        if (e & 2) {
            try {
                if (t.tag !== 27) {
                    t: {
                        for (var i = t.return; i !== null; ) {
                            if (tm(i)) {
                                var s = i;
                                break t;
                            }
                            i = i.return;
                        }
                        throw Error(r(160));
                    }
                    switch (s.tag) {
                        case 27:
                            var o = s.stateNode,
                                c = ku(t);
                            ir(t, c, o);
                            break;
                        case 5:
                            var g = s.stateNode;
                            s.flags & 32 && (Ji(g, ""), (s.flags &= -33));
                            var S = ku(t);
                            ir(t, S, g);
                            break;
                        case 3:
                        case 4:
                            var x = s.stateNode.containerInfo,
                                w = ku(t);
                            Xu(t, w, x);
                            break;
                        default:
                            throw Error(r(161));
                    }
                }
            } catch (B) {
                zt(t, t.return, B);
            }
            t.flags &= -3;
        }
        e & 4096 && (t.flags &= -4097);
    }
    function om(t) {
        if (t.subtreeFlags & 1024)
            for (t = t.child; t !== null; ) {
                var e = t;
                om(e),
                    e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
                    (t = t.sibling);
            }
    }
    function On(t, e) {
        if (e.subtreeFlags & 8772)
            for (e = e.child; e !== null; )
                im(t, e.alternate, e), (e = e.sibling);
    }
    function pa(t) {
        for (t = t.child; t !== null; ) {
            var e = t;
            switch (e.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    Fn(4, e, e.return), pa(e);
                    break;
                case 1:
                    Me(e, e.return);
                    var i = e.stateNode;
                    typeof i.componentWillUnmount == "function" &&
                        Jp(e, e.return, i),
                        pa(e);
                    break;
                case 26:
                case 27:
                case 5:
                    Me(e, e.return), pa(e);
                    break;
                case 22:
                    Me(e, e.return), e.memoizedState === null && pa(e);
                    break;
                default:
                    pa(e);
            }
            t = t.sibling;
        }
    }
    function Wn(t, e, i) {
        for (
            i = i && (e.subtreeFlags & 8772) !== 0, e = e.child;
            e !== null;

        ) {
            var s = e.alternate,
                o = t,
                c = e,
                g = c.flags;
            switch (c.tag) {
                case 0:
                case 11:
                case 15:
                    Wn(o, c, i), Es(4, c);
                    break;
                case 1:
                    if (
                        (Wn(o, c, i),
                        (s = c),
                        (o = s.stateNode),
                        typeof o.componentDidMount == "function")
                    )
                        try {
                            o.componentDidMount();
                        } catch (w) {
                            zt(s, s.return, w);
                        }
                    if (((s = c), (o = s.updateQueue), o !== null)) {
                        var S = s.stateNode;
                        try {
                            var x = o.shared.hiddenCallbacks;
                            if (x !== null)
                                for (
                                    o.shared.hiddenCallbacks = null, o = 0;
                                    o < x.length;
                                    o++
                                )
                                    Qp(x[o], S);
                        } catch (w) {
                            zt(s, s.return, w);
                        }
                    }
                    i && g & 64 && Wp(c), Ri(c, c.return);
                    break;
                case 26:
                case 27:
                case 5:
                    Wn(o, c, i),
                        i && s === null && g & 4 && $p(c),
                        Ri(c, c.return);
                    break;
                case 12:
                    Wn(o, c, i);
                    break;
                case 13:
                    Wn(o, c, i), i && g & 4 && lm(o, c);
                    break;
                case 22:
                    c.memoizedState === null && Wn(o, c, i), Ri(c, c.return);
                    break;
                default:
                    Wn(o, c, i);
            }
            e = e.sibling;
        }
    }
    function Zu(t, e) {
        var i = null;
        t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (i = t.memoizedState.cachePool.pool),
            (t = null),
            e.memoizedState !== null &&
                e.memoizedState.cachePool !== null &&
                (t = e.memoizedState.cachePool.pool),
            t !== i && (t != null && t.refCount++, i != null && hs(i));
    }
    function Qu(t, e) {
        (t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && hs(t));
    }
    function Jn(t, e, i, s) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; ) um(t, e, i, s), (e = e.sibling);
    }
    function um(t, e, i, s) {
        var o = e.flags;
        switch (e.tag) {
            case 0:
            case 11:
            case 15:
                Jn(t, e, i, s), o & 2048 && Es(9, e);
                break;
            case 3:
                Jn(t, e, i, s),
                    o & 2048 &&
                        ((t = null),
                        e.alternate !== null &&
                            (t = e.alternate.memoizedState.cache),
                        (e = e.memoizedState.cache),
                        e !== t && (e.refCount++, t != null && hs(t)));
                break;
            case 12:
                if (o & 2048) {
                    Jn(t, e, i, s), (t = e.stateNode);
                    try {
                        var c = e.memoizedProps,
                            g = c.id,
                            S = c.onPostCommit;
                        typeof S == "function" &&
                            S(
                                g,
                                e.alternate === null ? "mount" : "update",
                                t.passiveEffectDuration,
                                -0
                            );
                    } catch (x) {
                        zt(e, e.return, x);
                    }
                } else Jn(t, e, i, s);
                break;
            case 23:
                break;
            case 22:
                (c = e.stateNode),
                    e.memoizedState !== null
                        ? c._visibility & 4
                            ? Jn(t, e, i, s)
                            : As(t, e)
                        : c._visibility & 4
                          ? Jn(t, e, i, s)
                          : ((c._visibility |= 4),
                            ma(t, e, i, s, (e.subtreeFlags & 10256) !== 0)),
                    o & 2048 && Zu(e.alternate, e);
                break;
            case 24:
                Jn(t, e, i, s), o & 2048 && Qu(e.alternate, e);
                break;
            default:
                Jn(t, e, i, s);
        }
    }
    function ma(t, e, i, s, o) {
        for (
            o = o && (e.subtreeFlags & 10256) !== 0, e = e.child;
            e !== null;

        ) {
            var c = t,
                g = e,
                S = i,
                x = s,
                w = g.flags;
            switch (g.tag) {
                case 0:
                case 11:
                case 15:
                    ma(c, g, S, x, o), Es(8, g);
                    break;
                case 23:
                    break;
                case 22:
                    var B = g.stateNode;
                    g.memoizedState !== null
                        ? B._visibility & 4
                            ? ma(c, g, S, x, o)
                            : As(c, g)
                        : ((B._visibility |= 4), ma(c, g, S, x, o)),
                        o && w & 2048 && Zu(g.alternate, g);
                    break;
                case 24:
                    ma(c, g, S, x, o), o && w & 2048 && Qu(g.alternate, g);
                    break;
                default:
                    ma(c, g, S, x, o);
            }
            e = e.sibling;
        }
    }
    function As(t, e) {
        if (e.subtreeFlags & 10256)
            for (e = e.child; e !== null; ) {
                var i = t,
                    s = e,
                    o = s.flags;
                switch (s.tag) {
                    case 22:
                        As(i, s), o & 2048 && Zu(s.alternate, s);
                        break;
                    case 24:
                        As(i, s), o & 2048 && Qu(s.alternate, s);
                        break;
                    default:
                        As(i, s);
                }
                e = e.sibling;
            }
    }
    var Ms = 8192;
    function ga(t) {
        if (t.subtreeFlags & Ms)
            for (t = t.child; t !== null; ) cm(t), (t = t.sibling);
    }
    function cm(t) {
        switch (t.tag) {
            case 26:
                ga(t),
                    t.flags & Ms &&
                        t.memoizedState !== null &&
                        ix(Fe, t.memoizedState, t.memoizedProps);
                break;
            case 5:
                ga(t);
                break;
            case 3:
            case 4:
                var e = Fe;
                (Fe = vr(t.stateNode.containerInfo)), ga(t), (Fe = e);
                break;
            case 22:
                t.memoizedState === null &&
                    ((e = t.alternate),
                    e !== null && e.memoizedState !== null
                        ? ((e = Ms), (Ms = 16777216), ga(t), (Ms = e))
                        : ga(t));
                break;
            default:
                ga(t);
        }
    }
    function fm(t) {
        var e = t.alternate;
        if (e !== null && ((t = e.child), t !== null)) {
            e.child = null;
            do (e = t.sibling), (t.sibling = null), (t = e);
            while (t !== null);
        }
    }
    function Os(t) {
        var e = t.deletions;
        if (t.flags & 16) {
            if (e !== null)
                for (var i = 0; i < e.length; i++) {
                    var s = e[i];
                    (te = s), hm(s, t);
                }
            fm(t);
        }
        if (t.subtreeFlags & 10256)
            for (t = t.child; t !== null; ) dm(t), (t = t.sibling);
    }
    function dm(t) {
        switch (t.tag) {
            case 0:
            case 11:
            case 15:
                Os(t), t.flags & 2048 && Fn(9, t, t.return);
                break;
            case 3:
                Os(t);
                break;
            case 12:
                Os(t);
                break;
            case 22:
                var e = t.stateNode;
                t.memoizedState !== null &&
                e._visibility & 4 &&
                (t.return === null || t.return.tag !== 13)
                    ? ((e._visibility &= -5), ar(t))
                    : Os(t);
                break;
            default:
                Os(t);
        }
    }
    function ar(t) {
        var e = t.deletions;
        if (t.flags & 16) {
            if (e !== null)
                for (var i = 0; i < e.length; i++) {
                    var s = e[i];
                    (te = s), hm(s, t);
                }
            fm(t);
        }
        for (t = t.child; t !== null; ) {
            switch (((e = t), e.tag)) {
                case 0:
                case 11:
                case 15:
                    Fn(8, e, e.return), ar(e);
                    break;
                case 22:
                    (i = e.stateNode),
                        i._visibility & 4 && ((i._visibility &= -5), ar(e));
                    break;
                default:
                    ar(e);
            }
            t = t.sibling;
        }
    }
    function hm(t, e) {
        for (; te !== null; ) {
            var i = te;
            switch (i.tag) {
                case 0:
                case 11:
                case 15:
                    Fn(8, i, e);
                    break;
                case 23:
                case 22:
                    if (
                        i.memoizedState !== null &&
                        i.memoizedState.cachePool !== null
                    ) {
                        var s = i.memoizedState.cachePool.pool;
                        s != null && s.refCount++;
                    }
                    break;
                case 24:
                    hs(i.memoizedState.cache);
            }
            if (((s = i.child), s !== null)) (s.return = i), (te = s);
            else
                t: for (i = t; te !== null; ) {
                    s = te;
                    var o = s.sibling,
                        c = s.return;
                    if ((am(s), s === i)) {
                        te = null;
                        break t;
                    }
                    if (o !== null) {
                        (o.return = c), (te = o);
                        break t;
                    }
                    te = c;
                }
        }
    }
    function gb(t, e, i, s) {
        (this.tag = t),
            (this.key = i),
            (this.sibling =
                this.child =
                this.return =
                this.stateNode =
                this.type =
                this.elementType =
                    null),
            (this.index = 0),
            (this.refCleanup = this.ref = null),
            (this.pendingProps = e),
            (this.dependencies =
                this.memoizedState =
                this.updateQueue =
                this.memoizedProps =
                    null),
            (this.mode = s),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
    }
    function He(t, e, i, s) {
        return new gb(t, e, i, s);
    }
    function Fu(t) {
        return (t = t.prototype), !(!t || !t.isReactComponent);
    }
    function $n(t, e) {
        var i = t.alternate;
        return (
            i === null
                ? ((i = He(t.tag, e, t.key, t.mode)),
                  (i.elementType = t.elementType),
                  (i.type = t.type),
                  (i.stateNode = t.stateNode),
                  (i.alternate = t),
                  (t.alternate = i))
                : ((i.pendingProps = e),
                  (i.type = t.type),
                  (i.flags = 0),
                  (i.subtreeFlags = 0),
                  (i.deletions = null)),
            (i.flags = t.flags & 31457280),
            (i.childLanes = t.childLanes),
            (i.lanes = t.lanes),
            (i.child = t.child),
            (i.memoizedProps = t.memoizedProps),
            (i.memoizedState = t.memoizedState),
            (i.updateQueue = t.updateQueue),
            (e = t.dependencies),
            (i.dependencies =
                e === null
                    ? null
                    : { lanes: e.lanes, firstContext: e.firstContext }),
            (i.sibling = t.sibling),
            (i.index = t.index),
            (i.ref = t.ref),
            (i.refCleanup = t.refCleanup),
            i
        );
    }
    function pm(t, e) {
        t.flags &= 31457282;
        var i = t.alternate;
        return (
            i === null
                ? ((t.childLanes = 0),
                  (t.lanes = e),
                  (t.child = null),
                  (t.subtreeFlags = 0),
                  (t.memoizedProps = null),
                  (t.memoizedState = null),
                  (t.updateQueue = null),
                  (t.dependencies = null),
                  (t.stateNode = null))
                : ((t.childLanes = i.childLanes),
                  (t.lanes = i.lanes),
                  (t.child = i.child),
                  (t.subtreeFlags = 0),
                  (t.deletions = null),
                  (t.memoizedProps = i.memoizedProps),
                  (t.memoizedState = i.memoizedState),
                  (t.updateQueue = i.updateQueue),
                  (t.type = i.type),
                  (e = i.dependencies),
                  (t.dependencies =
                      e === null
                          ? null
                          : { lanes: e.lanes, firstContext: e.firstContext })),
            t
        );
    }
    function sr(t, e, i, s, o, c) {
        var g = 0;
        if (((s = t), typeof t == "function")) Fu(t) && (g = 1);
        else if (typeof t == "string")
            g = ex(t, i, de.current)
                ? 26
                : t === "html" || t === "head" || t === "body"
                  ? 27
                  : 5;
        else
            t: switch (t) {
                case p:
                    return Ci(i.children, o, c, e);
                case m:
                    (g = 8), (o |= 24);
                    break;
                case y:
                    return (
                        (t = He(12, i, e, o | 2)),
                        (t.elementType = y),
                        (t.lanes = c),
                        t
                    );
                case R:
                    return (
                        (t = He(13, i, e, o)),
                        (t.elementType = R),
                        (t.lanes = c),
                        t
                    );
                case V:
                    return (
                        (t = He(19, i, e, o)),
                        (t.elementType = V),
                        (t.lanes = c),
                        t
                    );
                case G:
                    return mm(i, o, c, e);
                default:
                    if (typeof t == "object" && t !== null)
                        switch (t.$$typeof) {
                            case v:
                            case T:
                                g = 10;
                                break t;
                            case b:
                                g = 9;
                                break t;
                            case O:
                                g = 11;
                                break t;
                            case N:
                                g = 14;
                                break t;
                            case k:
                                (g = 16), (s = null);
                                break t;
                        }
                    (g = 29),
                        (i = Error(r(130, t === null ? "null" : typeof t, ""))),
                        (s = null);
            }
        return (
            (e = He(g, i, e, o)),
            (e.elementType = t),
            (e.type = s),
            (e.lanes = c),
            e
        );
    }
    function Ci(t, e, i, s) {
        return (t = He(7, t, s, e)), (t.lanes = i), t;
    }
    function mm(t, e, i, s) {
        (t = He(22, t, s, e)), (t.elementType = G), (t.lanes = i);
        var o = {
            _visibility: 1,
            _pendingVisibility: 1,
            _pendingMarkers: null,
            _retryCache: null,
            _transitions: null,
            _current: null,
            detach: function () {
                var c = o._current;
                if (c === null) throw Error(r(456));
                if (!(o._pendingVisibility & 2)) {
                    var g = qn(c, 2);
                    g !== null && ((o._pendingVisibility |= 2), pe(g, c, 2));
                }
            },
            attach: function () {
                var c = o._current;
                if (c === null) throw Error(r(456));
                if (o._pendingVisibility & 2) {
                    var g = qn(c, 2);
                    g !== null && ((o._pendingVisibility &= -3), pe(g, c, 2));
                }
            },
        };
        return (t.stateNode = o), t;
    }
    function Wu(t, e, i) {
        return (t = He(6, t, null, e)), (t.lanes = i), t;
    }
    function Ju(t, e, i) {
        return (
            (e = He(4, t.children !== null ? t.children : [], t.key, e)),
            (e.lanes = i),
            (e.stateNode = {
                containerInfo: t.containerInfo,
                pendingChildren: null,
                implementation: t.implementation,
            }),
            e
        );
    }
    function wn(t) {
        t.flags |= 4;
    }
    function gm(t, e) {
        if (e.type !== "stylesheet" || e.state.loading & 4)
            t.flags &= -16777217;
        else if (((t.flags |= 16777216), !tg(e))) {
            if (
                ((e = Be.current),
                e !== null &&
                    ((Et & 4194176) === Et
                        ? sn !== null
                        : ((Et & 62914560) !== Et && !(Et & 536870912)) ||
                          e !== sn))
            )
                throw ((cs = nu), jh);
            t.flags |= 8192;
        }
    }
    function lr(t, e) {
        e !== null && (t.flags |= 4),
            t.flags & 16384 &&
                ((e = t.tag !== 22 ? Nd() : 536870912),
                (t.lanes |= e),
                (va |= e));
    }
    function ws(t, e) {
        if (!At)
            switch (t.tailMode) {
                case "hidden":
                    e = t.tail;
                    for (var i = null; e !== null; )
                        e.alternate !== null && (i = e), (e = e.sibling);
                    i === null ? (t.tail = null) : (i.sibling = null);
                    break;
                case "collapsed":
                    i = t.tail;
                    for (var s = null; i !== null; )
                        i.alternate !== null && (s = i), (i = i.sibling);
                    s === null
                        ? e || t.tail === null
                            ? (t.tail = null)
                            : (t.tail.sibling = null)
                        : (s.sibling = null);
            }
    }
    function Bt(t) {
        var e = t.alternate !== null && t.alternate.child === t.child,
            i = 0,
            s = 0;
        if (e)
            for (var o = t.child; o !== null; )
                (i |= o.lanes | o.childLanes),
                    (s |= o.subtreeFlags & 31457280),
                    (s |= o.flags & 31457280),
                    (o.return = t),
                    (o = o.sibling);
        else
            for (o = t.child; o !== null; )
                (i |= o.lanes | o.childLanes),
                    (s |= o.subtreeFlags),
                    (s |= o.flags),
                    (o.return = t),
                    (o = o.sibling);
        return (t.subtreeFlags |= s), (t.childLanes = i), e;
    }
    function yb(t, e, i) {
        var s = e.pendingProps;
        switch ((tu(e), e.tag)) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return Bt(e), null;
            case 1:
                return Bt(e), null;
            case 3:
                return (
                    (i = e.stateNode),
                    (s = null),
                    t !== null && (s = t.memoizedState.cache),
                    e.memoizedState.cache !== s && (e.flags |= 2048),
                    En(Jt),
                    Ki(),
                    i.pendingContext &&
                        ((i.context = i.pendingContext),
                        (i.pendingContext = null)),
                    (t === null || t.child === null) &&
                        (ls(e)
                            ? wn(e)
                            : t === null ||
                              (t.memoizedState.isDehydrated &&
                                  !(e.flags & 256)) ||
                              ((e.flags |= 1024),
                              Qe !== null && (sc(Qe), (Qe = null)))),
                    Bt(e),
                    null
                );
            case 26:
                return (
                    (i = e.memoizedState),
                    t === null
                        ? (wn(e),
                          i !== null
                              ? (Bt(e), gm(e, i))
                              : (Bt(e), (e.flags &= -16777217)))
                        : i
                          ? i !== t.memoizedState
                              ? (wn(e), Bt(e), gm(e, i))
                              : (Bt(e), (e.flags &= -16777217))
                          : (t.memoizedProps !== s && wn(e),
                            Bt(e),
                            (e.flags &= -16777217)),
                    null
                );
            case 27:
                vl(e), (i = Bn.current);
                var o = e.type;
                if (t !== null && e.stateNode != null)
                    t.memoizedProps !== s && wn(e);
                else {
                    if (!s) {
                        if (e.stateNode === null) throw Error(r(166));
                        return Bt(e), null;
                    }
                    (t = de.current),
                        ls(e)
                            ? Ch(e)
                            : ((t = Pm(o, s, i)), (e.stateNode = t), wn(e));
                }
                return Bt(e), null;
            case 5:
                if ((vl(e), (i = e.type), t !== null && e.stateNode != null))
                    t.memoizedProps !== s && wn(e);
                else {
                    if (!s) {
                        if (e.stateNode === null) throw Error(r(166));
                        return Bt(e), null;
                    }
                    if (((t = de.current), ls(e))) Ch(e);
                    else {
                        switch (((o = yr(Bn.current)), t)) {
                            case 1:
                                t = o.createElementNS(
                                    "http://www.w3.org/2000/svg",
                                    i
                                );
                                break;
                            case 2:
                                t = o.createElementNS(
                                    "http://www.w3.org/1998/Math/MathML",
                                    i
                                );
                                break;
                            default:
                                switch (i) {
                                    case "svg":
                                        t = o.createElementNS(
                                            "http://www.w3.org/2000/svg",
                                            i
                                        );
                                        break;
                                    case "math":
                                        t = o.createElementNS(
                                            "http://www.w3.org/1998/Math/MathML",
                                            i
                                        );
                                        break;
                                    case "script":
                                        (t = o.createElement("div")),
                                            (t.innerHTML = "<script></script>"),
                                            (t = t.removeChild(t.firstChild));
                                        break;
                                    case "select":
                                        (t =
                                            typeof s.is == "string"
                                                ? o.createElement("select", {
                                                      is: s.is,
                                                  })
                                                : o.createElement("select")),
                                            s.multiple
                                                ? (t.multiple = !0)
                                                : s.size && (t.size = s.size);
                                        break;
                                    default:
                                        t =
                                            typeof s.is == "string"
                                                ? o.createElement(i, {
                                                      is: s.is,
                                                  })
                                                : o.createElement(i);
                                }
                        }
                        (t[re] = e), (t[ve] = s);
                        t: for (o = e.child; o !== null; ) {
                            if (o.tag === 5 || o.tag === 6)
                                t.appendChild(o.stateNode);
                            else if (
                                o.tag !== 4 &&
                                o.tag !== 27 &&
                                o.child !== null
                            ) {
                                (o.child.return = o), (o = o.child);
                                continue;
                            }
                            if (o === e) break t;
                            for (; o.sibling === null; ) {
                                if (o.return === null || o.return === e)
                                    break t;
                                o = o.return;
                            }
                            (o.sibling.return = o.return), (o = o.sibling);
                        }
                        e.stateNode = t;
                        t: switch ((le(t, i, s), i)) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                t = !!s.autoFocus;
                                break t;
                            case "img":
                                t = !0;
                                break t;
                            default:
                                t = !1;
                        }
                        t && wn(e);
                    }
                }
                return Bt(e), (e.flags &= -16777217), null;
            case 6:
                if (t && e.stateNode != null) t.memoizedProps !== s && wn(e);
                else {
                    if (typeof s != "string" && e.stateNode === null)
                        throw Error(r(166));
                    if (((t = Bn.current), ls(e))) {
                        if (
                            ((t = e.stateNode),
                            (i = e.memoizedProps),
                            (s = null),
                            (o = he),
                            o !== null)
                        )
                            switch (o.tag) {
                                case 27:
                                case 5:
                                    s = o.memoizedProps;
                            }
                        (t[re] = e),
                            (t = !!(
                                t.nodeValue === i ||
                                (s !== null &&
                                    s.suppressHydrationWarning === !0) ||
                                qm(t.nodeValue, i)
                            )),
                            t || xi(e);
                    } else
                        (t = yr(t).createTextNode(s)),
                            (t[re] = e),
                            (e.stateNode = t);
                }
                return Bt(e), null;
            case 13:
                if (
                    ((s = e.memoizedState),
                    t === null ||
                        (t.memoizedState !== null &&
                            t.memoizedState.dehydrated !== null))
                ) {
                    if (((o = ls(e)), s !== null && s.dehydrated !== null)) {
                        if (t === null) {
                            if (!o) throw Error(r(318));
                            if (
                                ((o = e.memoizedState),
                                (o = o !== null ? o.dehydrated : null),
                                !o)
                            )
                                throw Error(r(317));
                            o[re] = e;
                        } else
                            rs(),
                                !(e.flags & 128) && (e.memoizedState = null),
                                (e.flags |= 4);
                        Bt(e), (o = !1);
                    } else Qe !== null && (sc(Qe), (Qe = null)), (o = !0);
                    if (!o) return e.flags & 256 ? (Sn(e), e) : (Sn(e), null);
                }
                if ((Sn(e), e.flags & 128)) return (e.lanes = i), e;
                if (
                    ((i = s !== null),
                    (t = t !== null && t.memoizedState !== null),
                    i)
                ) {
                    (s = e.child),
                        (o = null),
                        s.alternate !== null &&
                            s.alternate.memoizedState !== null &&
                            s.alternate.memoizedState.cachePool !== null &&
                            (o = s.alternate.memoizedState.cachePool.pool);
                    var c = null;
                    s.memoizedState !== null &&
                        s.memoizedState.cachePool !== null &&
                        (c = s.memoizedState.cachePool.pool),
                        c !== o && (s.flags |= 2048);
                }
                return (
                    i !== t && i && (e.child.flags |= 8192),
                    lr(e, e.updateQueue),
                    Bt(e),
                    null
                );
            case 4:
                return (
                    Ki(),
                    t === null && gc(e.stateNode.containerInfo),
                    Bt(e),
                    null
                );
            case 10:
                return En(e.type), Bt(e), null;
            case 19:
                if ((_t(Wt), (o = e.memoizedState), o === null))
                    return Bt(e), null;
                if (
                    ((s = (e.flags & 128) !== 0), (c = o.rendering), c === null)
                )
                    if (s) ws(o, !1);
                    else {
                        if (Yt !== 0 || (t !== null && t.flags & 128))
                            for (t = e.child; t !== null; ) {
                                if (((c = kl(t)), c !== null)) {
                                    for (
                                        e.flags |= 128,
                                            ws(o, !1),
                                            t = c.updateQueue,
                                            e.updateQueue = t,
                                            lr(e, t),
                                            e.subtreeFlags = 0,
                                            t = i,
                                            i = e.child;
                                        i !== null;

                                    )
                                        pm(i, t), (i = i.sibling);
                                    return (
                                        Dt(Wt, (Wt.current & 1) | 2), e.child
                                    );
                                }
                                t = t.sibling;
                            }
                        o.tail !== null &&
                            nn() > rr &&
                            ((e.flags |= 128),
                            (s = !0),
                            ws(o, !1),
                            (e.lanes = 4194304));
                    }
                else {
                    if (!s)
                        if (((t = kl(c)), t !== null)) {
                            if (
                                ((e.flags |= 128),
                                (s = !0),
                                (t = t.updateQueue),
                                (e.updateQueue = t),
                                lr(e, t),
                                ws(o, !0),
                                o.tail === null &&
                                    o.tailMode === "hidden" &&
                                    !c.alternate &&
                                    !At)
                            )
                                return Bt(e), null;
                        } else
                            2 * nn() - o.renderingStartTime > rr &&
                                i !== 536870912 &&
                                ((e.flags |= 128),
                                (s = !0),
                                ws(o, !1),
                                (e.lanes = 4194304));
                    o.isBackwards
                        ? ((c.sibling = e.child), (e.child = c))
                        : ((t = o.last),
                          t !== null ? (t.sibling = c) : (e.child = c),
                          (o.last = c));
                }
                return o.tail !== null
                    ? ((e = o.tail),
                      (o.rendering = e),
                      (o.tail = e.sibling),
                      (o.renderingStartTime = nn()),
                      (e.sibling = null),
                      (t = Wt.current),
                      Dt(Wt, s ? (t & 1) | 2 : t & 1),
                      e)
                    : (Bt(e), null);
            case 22:
            case 23:
                return (
                    Sn(e),
                    au(),
                    (s = e.memoizedState !== null),
                    t !== null
                        ? (t.memoizedState !== null) !== s && (e.flags |= 8192)
                        : s && (e.flags |= 8192),
                    s
                        ? i & 536870912 &&
                          !(e.flags & 128) &&
                          (Bt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
                        : Bt(e),
                    (i = e.updateQueue),
                    i !== null && lr(e, i.retryQueue),
                    (i = null),
                    t !== null &&
                        t.memoizedState !== null &&
                        t.memoizedState.cachePool !== null &&
                        (i = t.memoizedState.cachePool.pool),
                    (s = null),
                    e.memoizedState !== null &&
                        e.memoizedState.cachePool !== null &&
                        (s = e.memoizedState.cachePool.pool),
                    s !== i && (e.flags |= 2048),
                    t !== null && _t(Ei),
                    null
                );
            case 24:
                return (
                    (i = null),
                    t !== null && (i = t.memoizedState.cache),
                    e.memoizedState.cache !== i && (e.flags |= 2048),
                    En(Jt),
                    Bt(e),
                    null
                );
            case 25:
                return null;
        }
        throw Error(r(156, e.tag));
    }
    function vb(t, e) {
        switch ((tu(e), e.tag)) {
            case 1:
                return (
                    (t = e.flags),
                    t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
                );
            case 3:
                return (
                    En(Jt),
                    Ki(),
                    (t = e.flags),
                    t & 65536 && !(t & 128)
                        ? ((e.flags = (t & -65537) | 128), e)
                        : null
                );
            case 26:
            case 27:
            case 5:
                return vl(e), null;
            case 13:
                if (
                    (Sn(e),
                    (t = e.memoizedState),
                    t !== null && t.dehydrated !== null)
                ) {
                    if (e.alternate === null) throw Error(r(340));
                    rs();
                }
                return (
                    (t = e.flags),
                    t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
                );
            case 19:
                return _t(Wt), null;
            case 4:
                return Ki(), null;
            case 10:
                return En(e.type), null;
            case 22:
            case 23:
                return (
                    Sn(e),
                    au(),
                    t !== null && _t(Ei),
                    (t = e.flags),
                    t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
                );
            case 24:
                return En(Jt), null;
            case 25:
                return null;
            default:
                return null;
        }
    }
    function ym(t, e) {
        switch ((tu(e), e.tag)) {
            case 3:
                En(Jt), Ki();
                break;
            case 26:
            case 27:
            case 5:
                vl(e);
                break;
            case 4:
                Ki();
                break;
            case 13:
                Sn(e);
                break;
            case 19:
                _t(Wt);
                break;
            case 10:
                En(e.type);
                break;
            case 22:
            case 23:
                Sn(e), au(), t !== null && _t(Ei);
                break;
            case 24:
                En(Jt);
        }
    }
    var Sb = {
            getCacheForType: function (t) {
                var e = oe(Jt),
                    i = e.data.get(t);
                return i === void 0 && ((i = t()), e.data.set(t, i)), i;
            },
        },
        bb = typeof WeakMap == "function" ? WeakMap : Map,
        Vt = 0,
        jt = null,
        bt = null,
        Et = 0,
        Nt = 0,
        we = null,
        _n = !1,
        ya = !1,
        $u = !1,
        Dn = 0,
        Yt = 0,
        In = 0,
        zi = 0,
        Iu = 0,
        qe = 0,
        va = 0,
        _s = null,
        rn = null,
        tc = !1,
        ec = 0,
        rr = 1 / 0,
        or = null,
        ti = null,
        ur = !1,
        ji = null,
        Ds = 0,
        nc = 0,
        ic = null,
        Rs = 0,
        ac = null;
    function _e() {
        if (Vt & 2 && Et !== 0) return Et & -Et;
        if (F.T !== null) {
            var t = ua;
            return t !== 0 ? t : dc();
        }
        return Ud();
    }
    function vm() {
        qe === 0 && (qe = !(Et & 536870912) || At ? jd() : 536870912);
        var t = Be.current;
        return t !== null && (t.flags |= 32), qe;
    }
    function pe(t, e, i) {
        ((t === jt && Nt === 2) || t.cancelPendingCommit !== null) &&
            (Sa(t, 0), Rn(t, Et, qe, !1)),
            Qa(t, i),
            (!(Vt & 2) || t !== jt) &&
                (t === jt &&
                    (!(Vt & 2) && (zi |= i), Yt === 4 && Rn(t, Et, qe, !1)),
                on(t));
    }
    function Sm(t, e, i) {
        if (Vt & 6) throw Error(r(327));
        var s =
                (!i && (e & 60) === 0 && (e & t.expiredLanes) === 0) ||
                Za(t, e),
            o = s ? Eb(t, e) : oc(t, e, !0),
            c = s;
        do {
            if (o === 0) {
                ya && !s && Rn(t, e, 0, !1);
                break;
            } else if (o === 6) Rn(t, e, 0, !_n);
            else {
                if (((i = t.current.alternate), c && !xb(i))) {
                    (o = oc(t, e, !1)), (c = !1);
                    continue;
                }
                if (o === 2) {
                    if (((c = e), t.errorRecoveryDisabledLanes & c)) var g = 0;
                    else
                        (g = t.pendingLanes & -536870913),
                            (g = g !== 0 ? g : g & 536870912 ? 536870912 : 0);
                    if (g !== 0) {
                        e = g;
                        t: {
                            var S = t;
                            o = _s;
                            var x = S.current.memoizedState.isDehydrated;
                            if (
                                (x && (Sa(S, g).flags |= 256),
                                (g = oc(S, g, !1)),
                                g !== 2)
                            ) {
                                if ($u && !x) {
                                    (S.errorRecoveryDisabledLanes |= c),
                                        (zi |= c),
                                        (o = 4);
                                    break t;
                                }
                                (c = rn), (rn = o), c !== null && sc(c);
                            }
                            o = g;
                        }
                        if (((c = !1), o !== 2)) continue;
                    }
                }
                if (o === 1) {
                    Sa(t, 0), Rn(t, e, 0, !0);
                    break;
                }
                t: {
                    switch (((s = t), o)) {
                        case 0:
                        case 1:
                            throw Error(r(345));
                        case 4:
                            if ((e & 4194176) === e) {
                                Rn(s, e, qe, !_n);
                                break t;
                            }
                            break;
                        case 2:
                            rn = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(r(329));
                    }
                    if (
                        ((s.finishedWork = i),
                        (s.finishedLanes = e),
                        (e & 62914560) === e && ((c = ec + 300 - nn()), 10 < c))
                    ) {
                        if ((Rn(s, e, qe, !_n), Tl(s, 0) !== 0)) break t;
                        s.timeoutHandle = km(
                            bm.bind(
                                null,
                                s,
                                i,
                                rn,
                                or,
                                tc,
                                e,
                                qe,
                                zi,
                                va,
                                _n,
                                2,
                                -0,
                                0
                            ),
                            c
                        );
                        break t;
                    }
                    bm(s, i, rn, or, tc, e, qe, zi, va, _n, 0, -0, 0);
                }
            }
            break;
        } while (!0);
        on(t);
    }
    function sc(t) {
        rn === null ? (rn = t) : rn.push.apply(rn, t);
    }
    function bm(t, e, i, s, o, c, g, S, x, w, B, X, z) {
        var j = e.subtreeFlags;
        if (
            (j & 8192 || (j & 16785408) === 16785408) &&
            ((Bs = { stylesheets: null, count: 0, unsuspend: nx }),
            cm(e),
            (e = ax()),
            e !== null)
        ) {
            (t.cancelPendingCommit = e(
                wm.bind(null, t, i, s, o, g, S, x, 1, X, z)
            )),
                Rn(t, c, g, !w);
            return;
        }
        wm(t, i, s, o, g, S, x, B, X, z);
    }
    function xb(t) {
        for (var e = t; ; ) {
            var i = e.tag;
            if (
                (i === 0 || i === 11 || i === 15) &&
                e.flags & 16384 &&
                ((i = e.updateQueue),
                i !== null && ((i = i.stores), i !== null))
            )
                for (var s = 0; s < i.length; s++) {
                    var o = i[s],
                        c = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!Ae(c(), o)) return !1;
                    } catch {
                        return !1;
                    }
                }
            if (((i = e.child), e.subtreeFlags & 16384 && i !== null))
                (i.return = e), (e = i);
            else {
                if (e === t) break;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) return !0;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        }
        return !0;
    }
    function Rn(t, e, i, s) {
        (e &= ~Iu),
            (e &= ~zi),
            (t.suspendedLanes |= e),
            (t.pingedLanes &= ~e),
            s && (t.warmLanes |= e),
            (s = t.expirationTimes);
        for (var o = e; 0 < o; ) {
            var c = 31 - Ee(o),
                g = 1 << c;
            (s[c] = -1), (o &= ~g);
        }
        i !== 0 && Ld(t, i, e);
    }
    function cr() {
        return Vt & 6 ? !0 : (Cs(0), !1);
    }
    function lc() {
        if (bt !== null) {
            if (Nt === 0) var t = bt.return;
            else
                (t = bt),
                    (Tn = _i = null),
                    du(t),
                    (ra = null),
                    (fs = 0),
                    (t = bt);
            for (; t !== null; ) ym(t.alternate, t), (t = t.return);
            bt = null;
        }
    }
    function Sa(t, e) {
        (t.finishedWork = null), (t.finishedLanes = 0);
        var i = t.timeoutHandle;
        i !== -1 && ((t.timeoutHandle = -1), qb(i)),
            (i = t.cancelPendingCommit),
            i !== null && ((t.cancelPendingCommit = null), i()),
            lc(),
            (jt = t),
            (bt = i = $n(t.current, null)),
            (Et = e),
            (Nt = 0),
            (we = null),
            (_n = !1),
            (ya = Za(t, e)),
            ($u = !1),
            (va = qe = Iu = zi = In = Yt = 0),
            (rn = _s = null),
            (tc = !1),
            e & 8 && (e |= e & 32);
        var s = t.entangledLanes;
        if (s !== 0)
            for (t = t.entanglements, s &= e; 0 < s; ) {
                var o = 31 - Ee(s),
                    c = 1 << o;
                (e |= t[o]), (s &= ~c);
            }
        return (Dn = e), Nl(), i;
    }
    function xm(t, e) {
        (vt = null),
            (F.H = ln),
            e === us
                ? ((e = Bh()), (Nt = 3))
                : e === jh
                  ? ((e = Bh()), (Nt = 4))
                  : (Nt =
                        e === Np
                            ? 8
                            : e !== null &&
                                typeof e == "object" &&
                                typeof e.then == "function"
                              ? 6
                              : 1),
            (we = e),
            bt === null && ((Yt = 1), tr(t, je(e, t.current)));
    }
    function Tm() {
        var t = F.H;
        return (F.H = ln), t === null ? ln : t;
    }
    function Em() {
        var t = F.A;
        return (F.A = Sb), t;
    }
    function rc() {
        (Yt = 4),
            _n || ((Et & 4194176) !== Et && Be.current !== null) || (ya = !0),
            (!(In & 134217727) && !(zi & 134217727)) ||
                jt === null ||
                Rn(jt, Et, qe, !1);
    }
    function oc(t, e, i) {
        var s = Vt;
        Vt |= 2;
        var o = Tm(),
            c = Em();
        (jt !== t || Et !== e) && ((or = null), Sa(t, e)), (e = !1);
        var g = Yt;
        t: do
            try {
                if (Nt !== 0 && bt !== null) {
                    var S = bt,
                        x = we;
                    switch (Nt) {
                        case 8:
                            lc(), (g = 6);
                            break t;
                        case 3:
                        case 2:
                        case 6:
                            Be.current === null && (e = !0);
                            var w = Nt;
                            if (
                                ((Nt = 0), (we = null), ba(t, S, x, w), i && ya)
                            ) {
                                g = 0;
                                break t;
                            }
                            break;
                        default:
                            (w = Nt), (Nt = 0), (we = null), ba(t, S, x, w);
                    }
                }
                Tb(), (g = Yt);
                break;
            } catch (B) {
                xm(t, B);
            }
        while (!0);
        return (
            e && t.shellSuspendCounter++,
            (Tn = _i = null),
            (Vt = s),
            (F.H = o),
            (F.A = c),
            bt === null && ((jt = null), (Et = 0), Nl()),
            g
        );
    }
    function Tb() {
        for (; bt !== null; ) Am(bt);
    }
    function Eb(t, e) {
        var i = Vt;
        Vt |= 2;
        var s = Tm(),
            o = Em();
        jt !== t || Et !== e
            ? ((or = null), (rr = nn() + 500), Sa(t, e))
            : (ya = Za(t, e));
        t: do
            try {
                if (Nt !== 0 && bt !== null) {
                    e = bt;
                    var c = we;
                    e: switch (Nt) {
                        case 1:
                            (Nt = 0), (we = null), ba(t, e, c, 1);
                            break;
                        case 2:
                            if (Nh(c)) {
                                (Nt = 0), (we = null), Mm(e);
                                break;
                            }
                            (e = function () {
                                Nt === 2 && jt === t && (Nt = 7), on(t);
                            }),
                                c.then(e, e);
                            break t;
                        case 3:
                            Nt = 7;
                            break t;
                        case 4:
                            Nt = 5;
                            break t;
                        case 7:
                            Nh(c)
                                ? ((Nt = 0), (we = null), Mm(e))
                                : ((Nt = 0), (we = null), ba(t, e, c, 7));
                            break;
                        case 5:
                            var g = null;
                            switch (bt.tag) {
                                case 26:
                                    g = bt.memoizedState;
                                case 5:
                                case 27:
                                    var S = bt;
                                    if (!g || tg(g)) {
                                        (Nt = 0), (we = null);
                                        var x = S.sibling;
                                        if (x !== null) bt = x;
                                        else {
                                            var w = S.return;
                                            w !== null
                                                ? ((bt = w), fr(w))
                                                : (bt = null);
                                        }
                                        break e;
                                    }
                            }
                            (Nt = 0), (we = null), ba(t, e, c, 5);
                            break;
                        case 6:
                            (Nt = 0), (we = null), ba(t, e, c, 6);
                            break;
                        case 8:
                            lc(), (Yt = 6);
                            break t;
                        default:
                            throw Error(r(462));
                    }
                }
                Ab();
                break;
            } catch (B) {
                xm(t, B);
            }
        while (!0);
        return (
            (Tn = _i = null),
            (F.H = s),
            (F.A = o),
            (Vt = i),
            bt !== null ? 0 : ((jt = null), (Et = 0), Nl(), Yt)
        );
    }
    function Ab() {
        for (; bt !== null && !P1(); ) Am(bt);
    }
    function Am(t) {
        var e = Pp(t.alternate, t, Dn);
        (t.memoizedProps = t.pendingProps), e === null ? fr(t) : (bt = e);
    }
    function Mm(t) {
        var e = t,
            i = e.alternate;
        switch (e.tag) {
            case 15:
            case 0:
                e = qp(i, e, e.pendingProps, e.type, void 0, Et);
                break;
            case 11:
                e = qp(i, e, e.pendingProps, e.type.render, e.ref, Et);
                break;
            case 5:
                du(e);
            default:
                ym(i, e), (e = bt = pm(e, Dn)), (e = Pp(i, e, Dn));
        }
        (t.memoizedProps = t.pendingProps), e === null ? fr(t) : (bt = e);
    }
    function ba(t, e, i, s) {
        (Tn = _i = null), du(e), (ra = null), (fs = 0);
        var o = e.return;
        try {
            if (db(t, o, e, i, Et)) {
                (Yt = 1), tr(t, je(i, t.current)), (bt = null);
                return;
            }
        } catch (c) {
            if (o !== null) throw ((bt = o), c);
            (Yt = 1), tr(t, je(i, t.current)), (bt = null);
            return;
        }
        e.flags & 32768
            ? (At || s === 1
                  ? (t = !0)
                  : ya || Et & 536870912
                    ? (t = !1)
                    : ((_n = t = !0),
                      (s === 2 || s === 3 || s === 6) &&
                          ((s = Be.current),
                          s !== null && s.tag === 13 && (s.flags |= 16384))),
              Om(e, t))
            : fr(e);
    }
    function fr(t) {
        var e = t;
        do {
            if (e.flags & 32768) {
                Om(e, _n);
                return;
            }
            t = e.return;
            var i = yb(e.alternate, e, Dn);
            if (i !== null) {
                bt = i;
                return;
            }
            if (((e = e.sibling), e !== null)) {
                bt = e;
                return;
            }
            bt = e = t;
        } while (e !== null);
        Yt === 0 && (Yt = 5);
    }
    function Om(t, e) {
        do {
            var i = vb(t.alternate, t);
            if (i !== null) {
                (i.flags &= 32767), (bt = i);
                return;
            }
            if (
                ((i = t.return),
                i !== null &&
                    ((i.flags |= 32768),
                    (i.subtreeFlags = 0),
                    (i.deletions = null)),
                !e && ((t = t.sibling), t !== null))
            ) {
                bt = t;
                return;
            }
            bt = t = i;
        } while (t !== null);
        (Yt = 6), (bt = null);
    }
    function wm(t, e, i, s, o, c, g, S, x, w) {
        var B = F.T,
            X = W.p;
        try {
            (W.p = 2), (F.T = null), Mb(t, e, i, s, X, o, c, g, S, x, w);
        } finally {
            (F.T = B), (W.p = X);
        }
    }
    function Mb(t, e, i, s, o, c, g, S) {
        do xa();
        while (ji !== null);
        if (Vt & 6) throw Error(r(327));
        var x = t.finishedWork;
        if (((s = t.finishedLanes), x === null)) return null;
        if (((t.finishedWork = null), (t.finishedLanes = 0), x === t.current))
            throw Error(r(177));
        (t.callbackNode = null),
            (t.callbackPriority = 0),
            (t.cancelPendingCommit = null);
        var w = x.lanes | x.childLanes;
        if (
            ((w |= Jo),
            iS(t, s, w, c, g, S),
            t === jt && ((bt = jt = null), (Et = 0)),
            (!(x.subtreeFlags & 10256) && !(x.flags & 10256)) ||
                ur ||
                ((ur = !0),
                (nc = w),
                (ic = i),
                Db(Sl, function () {
                    return xa(), null;
                })),
            (i = (x.flags & 15990) !== 0),
            x.subtreeFlags & 15990 || i
                ? ((i = F.T),
                  (F.T = null),
                  (c = W.p),
                  (W.p = 2),
                  (g = Vt),
                  (Vt |= 4),
                  pb(t, x),
                  rm(x, t),
                  FS(bc, t.containerInfo),
                  (Er = !!Sc),
                  (bc = Sc = null),
                  (t.current = x),
                  im(t, x.alternate, x),
                  Z1(),
                  (Vt = g),
                  (W.p = c),
                  (F.T = i))
                : (t.current = x),
            ur ? ((ur = !1), (ji = t), (Ds = s)) : _m(t, w),
            (w = t.pendingLanes),
            w === 0 && (ti = null),
            $1(x.stateNode),
            on(t),
            e !== null)
        )
            for (o = t.onRecoverableError, x = 0; x < e.length; x++)
                (w = e[x]), o(w.value, { componentStack: w.stack });
        return (
            Ds & 3 && xa(),
            (w = t.pendingLanes),
            s & 4194218 && w & 42
                ? t === ac
                    ? Rs++
                    : ((Rs = 0), (ac = t))
                : (Rs = 0),
            Cs(0),
            null
        );
    }
    function _m(t, e) {
        (t.pooledCacheLanes &= e) === 0 &&
            ((e = t.pooledCache), e != null && ((t.pooledCache = null), hs(e)));
    }
    function xa() {
        if (ji !== null) {
            var t = ji,
                e = nc;
            nc = 0;
            var i = Vd(Ds),
                s = F.T,
                o = W.p;
            try {
                if (((W.p = 32 > i ? 32 : i), (F.T = null), ji === null))
                    var c = !1;
                else {
                    (i = ic), (ic = null);
                    var g = ji,
                        S = Ds;
                    if (((ji = null), (Ds = 0), Vt & 6)) throw Error(r(331));
                    var x = Vt;
                    if (
                        ((Vt |= 4),
                        dm(g.current),
                        um(g, g.current, S, i),
                        (Vt = x),
                        Cs(0, !1),
                        Te && typeof Te.onPostCommitFiberRoot == "function")
                    )
                        try {
                            Te.onPostCommitFiberRoot(Pa, g);
                        } catch {}
                    c = !0;
                }
                return c;
            } finally {
                (W.p = o), (F.T = s), _m(t, e);
            }
        }
        return !1;
    }
    function Dm(t, e, i) {
        (e = je(i, e)),
            (e = Ou(t.stateNode, e, 2)),
            (t = Qn(t, e, 2)),
            t !== null && (Qa(t, 2), on(t));
    }
    function zt(t, e, i) {
        if (t.tag === 3) Dm(t, t, i);
        else
            for (; e !== null; ) {
                if (e.tag === 3) {
                    Dm(e, t, i);
                    break;
                } else if (e.tag === 1) {
                    var s = e.stateNode;
                    if (
                        typeof e.type.getDerivedStateFromError == "function" ||
                        (typeof s.componentDidCatch == "function" &&
                            (ti === null || !ti.has(s)))
                    ) {
                        (t = je(i, t)),
                            (i = zp(2)),
                            (s = Qn(e, i, 2)),
                            s !== null && (jp(i, s, e, t), Qa(s, 2), on(s));
                        break;
                    }
                }
                e = e.return;
            }
    }
    function uc(t, e, i) {
        var s = t.pingCache;
        if (s === null) {
            s = t.pingCache = new bb();
            var o = new Set();
            s.set(e, o);
        } else (o = s.get(e)), o === void 0 && ((o = new Set()), s.set(e, o));
        o.has(i) ||
            (($u = !0), o.add(i), (t = Ob.bind(null, t, e, i)), e.then(t, t));
    }
    function Ob(t, e, i) {
        var s = t.pingCache;
        s !== null && s.delete(e),
            (t.pingedLanes |= t.suspendedLanes & i),
            (t.warmLanes &= ~i),
            jt === t &&
                (Et & i) === i &&
                (Yt === 4 ||
                (Yt === 3 && (Et & 62914560) === Et && 300 > nn() - ec)
                    ? !(Vt & 2) && Sa(t, 0)
                    : (Iu |= i),
                va === Et && (va = 0)),
            on(t);
    }
    function Rm(t, e) {
        e === 0 && (e = Nd()), (t = qn(t, e)), t !== null && (Qa(t, e), on(t));
    }
    function wb(t) {
        var e = t.memoizedState,
            i = 0;
        e !== null && (i = e.retryLane), Rm(t, i);
    }
    function _b(t, e) {
        var i = 0;
        switch (t.tag) {
            case 13:
                var s = t.stateNode,
                    o = t.memoizedState;
                o !== null && (i = o.retryLane);
                break;
            case 19:
                s = t.stateNode;
                break;
            case 22:
                s = t.stateNode._retryCache;
                break;
            default:
                throw Error(r(314));
        }
        s !== null && s.delete(e), Rm(t, i);
    }
    function Db(t, e) {
        return wo(t, e);
    }
    var dr = null,
        Ta = null,
        cc = !1,
        hr = !1,
        fc = !1,
        Ni = 0;
    function on(t) {
        t !== Ta &&
            t.next === null &&
            (Ta === null ? (dr = Ta = t) : (Ta = Ta.next = t)),
            (hr = !0),
            cc || ((cc = !0), Cb(Rb));
    }
    function Cs(t, e) {
        if (!fc && hr) {
            fc = !0;
            do
                for (var i = !1, s = dr; s !== null; ) {
                    if (t !== 0) {
                        var o = s.pendingLanes;
                        if (o === 0) var c = 0;
                        else {
                            var g = s.suspendedLanes,
                                S = s.pingedLanes;
                            (c = (1 << (31 - Ee(42 | t) + 1)) - 1),
                                (c &= o & ~(g & ~S)),
                                (c =
                                    c & 201326677
                                        ? (c & 201326677) | 1
                                        : c
                                          ? c | 2
                                          : 0);
                        }
                        c !== 0 && ((i = !0), jm(s, c));
                    } else
                        (c = Et),
                            (c = Tl(s, s === jt ? c : 0)),
                            !(c & 3) || Za(s, c) || ((i = !0), jm(s, c));
                    s = s.next;
                }
            while (i);
            fc = !1;
        }
    }
    function Rb() {
        hr = cc = !1;
        var t = 0;
        Ni !== 0 && (Hb() && (t = Ni), (Ni = 0));
        for (var e = nn(), i = null, s = dr; s !== null; ) {
            var o = s.next,
                c = Cm(s, e);
            c === 0
                ? ((s.next = null),
                  i === null ? (dr = o) : (i.next = o),
                  o === null && (Ta = i))
                : ((i = s), (t !== 0 || c & 3) && (hr = !0)),
                (s = o);
        }
        Cs(t);
    }
    function Cm(t, e) {
        for (
            var i = t.suspendedLanes,
                s = t.pingedLanes,
                o = t.expirationTimes,
                c = t.pendingLanes & -62914561;
            0 < c;

        ) {
            var g = 31 - Ee(c),
                S = 1 << g,
                x = o[g];
            x === -1
                ? (!(S & i) || S & s) && (o[g] = nS(S, e))
                : x <= e && (t.expiredLanes |= S),
                (c &= ~S);
        }
        if (
            ((e = jt),
            (i = Et),
            (i = Tl(t, t === e ? i : 0)),
            (s = t.callbackNode),
            i === 0 || (t === e && Nt === 2) || t.cancelPendingCommit !== null)
        )
            return (
                s !== null && s !== null && _o(s),
                (t.callbackNode = null),
                (t.callbackPriority = 0)
            );
        if (!(i & 3) || Za(t, i)) {
            if (((e = i & -i), e === t.callbackPriority)) return e;
            switch ((s !== null && _o(s), Vd(i))) {
                case 2:
                case 8:
                    i = Cd;
                    break;
                case 32:
                    i = Sl;
                    break;
                case 268435456:
                    i = zd;
                    break;
                default:
                    i = Sl;
            }
            return (
                (s = zm.bind(null, t)),
                (i = wo(i, s)),
                (t.callbackPriority = e),
                (t.callbackNode = i),
                e
            );
        }
        return (
            s !== null && s !== null && _o(s),
            (t.callbackPriority = 2),
            (t.callbackNode = null),
            2
        );
    }
    function zm(t, e) {
        var i = t.callbackNode;
        if (xa() && t.callbackNode !== i) return null;
        var s = Et;
        return (
            (s = Tl(t, t === jt ? s : 0)),
            s === 0
                ? null
                : (Sm(t, s, e),
                  Cm(t, nn()),
                  t.callbackNode != null && t.callbackNode === i
                      ? zm.bind(null, t)
                      : null)
        );
    }
    function jm(t, e) {
        if (xa()) return null;
        Sm(t, e, !0);
    }
    function Cb(t) {
        Yb(function () {
            Vt & 6 ? wo(Rd, t) : t();
        });
    }
    function dc() {
        return Ni === 0 && (Ni = jd()), Ni;
    }
    function Nm(t) {
        return t == null || typeof t == "symbol" || typeof t == "boolean"
            ? null
            : typeof t == "function"
              ? t
              : wl("" + t);
    }
    function Lm(t, e) {
        var i = e.ownerDocument.createElement("input");
        return (
            (i.name = e.name),
            (i.value = e.value),
            t.id && i.setAttribute("form", t.id),
            e.parentNode.insertBefore(i, e),
            (t = new FormData(t)),
            i.parentNode.removeChild(i),
            t
        );
    }
    function zb(t, e, i, s, o) {
        if (e === "submit" && i && i.stateNode === o) {
            var c = Nm((o[ve] || null).action),
                g = s.submitter;
            g &&
                ((e = (e = g[ve] || null)
                    ? Nm(e.formAction)
                    : g.getAttribute("formAction")),
                e !== null && ((c = e), (g = null)));
            var S = new Cl("action", "action", null, s, o);
            t.push({
                event: S,
                listeners: [
                    {
                        instance: null,
                        listener: function () {
                            if (s.defaultPrevented) {
                                if (Ni !== 0) {
                                    var x = g ? Lm(o, g) : new FormData(o);
                                    xu(
                                        i,
                                        {
                                            pending: !0,
                                            data: x,
                                            method: o.method,
                                            action: c,
                                        },
                                        null,
                                        x
                                    );
                                }
                            } else
                                typeof c == "function" &&
                                    (S.preventDefault(),
                                    (x = g ? Lm(o, g) : new FormData(o)),
                                    xu(
                                        i,
                                        {
                                            pending: !0,
                                            data: x,
                                            method: o.method,
                                            action: c,
                                        },
                                        c,
                                        x
                                    ));
                        },
                        currentTarget: o,
                    },
                ],
            });
        }
    }
    for (var hc = 0; hc < wh.length; hc++) {
        var pc = wh[hc],
            jb = pc.toLowerCase(),
            Nb = pc[0].toUpperCase() + pc.slice(1);
        Ze(jb, "on" + Nb);
    }
    Ze(Th, "onAnimationEnd"),
        Ze(Eh, "onAnimationIteration"),
        Ze(Ah, "onAnimationStart"),
        Ze("dblclick", "onDoubleClick"),
        Ze("focusin", "onFocus"),
        Ze("focusout", "onBlur"),
        Ze(JS, "onTransitionRun"),
        Ze($S, "onTransitionStart"),
        Ze(IS, "onTransitionCancel"),
        Ze(Mh, "onTransitionEnd"),
        Fi("onMouseEnter", ["mouseout", "mouseover"]),
        Fi("onMouseLeave", ["mouseout", "mouseover"]),
        Fi("onPointerEnter", ["pointerout", "pointerover"]),
        Fi("onPointerLeave", ["pointerout", "pointerover"]),
        mi(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
                " "
            )
        ),
        mi(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
                " "
            )
        ),
        mi("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
        ]),
        mi(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
                " "
            )
        ),
        mi(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
                " "
            )
        ),
        mi(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
                " "
            )
        );
    var zs =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
                " "
            ),
        Lb = new Set(
            "beforetoggle cancel close invalid load scroll scrollend toggle"
                .split(" ")
                .concat(zs)
        );
    function Bm(t, e) {
        e = (e & 4) !== 0;
        for (var i = 0; i < t.length; i++) {
            var s = t[i],
                o = s.event;
            s = s.listeners;
            t: {
                var c = void 0;
                if (e)
                    for (var g = s.length - 1; 0 <= g; g--) {
                        var S = s[g],
                            x = S.instance,
                            w = S.currentTarget;
                        if (
                            ((S = S.listener),
                            x !== c && o.isPropagationStopped())
                        )
                            break t;
                        (c = S), (o.currentTarget = w);
                        try {
                            c(o);
                        } catch (B) {
                            Il(B);
                        }
                        (o.currentTarget = null), (c = x);
                    }
                else
                    for (g = 0; g < s.length; g++) {
                        if (
                            ((S = s[g]),
                            (x = S.instance),
                            (w = S.currentTarget),
                            (S = S.listener),
                            x !== c && o.isPropagationStopped())
                        )
                            break t;
                        (c = S), (o.currentTarget = w);
                        try {
                            c(o);
                        } catch (B) {
                            Il(B);
                        }
                        (o.currentTarget = null), (c = x);
                    }
            }
        }
    }
    function Tt(t, e) {
        var i = e[Ro];
        i === void 0 && (i = e[Ro] = new Set());
        var s = t + "__bubble";
        i.has(s) || (Vm(e, t, 2, !1), i.add(s));
    }
    function mc(t, e, i) {
        var s = 0;
        e && (s |= 4), Vm(i, t, s, e);
    }
    var pr = "_reactListening" + Math.random().toString(36).slice(2);
    function gc(t) {
        if (!t[pr]) {
            (t[pr] = !0),
                qd.forEach(function (i) {
                    i !== "selectionchange" &&
                        (Lb.has(i) || mc(i, !1, t), mc(i, !0, t));
                });
            var e = t.nodeType === 9 ? t : t.ownerDocument;
            e === null || e[pr] || ((e[pr] = !0), mc("selectionchange", !1, e));
        }
    }
    function Vm(t, e, i, s) {
        switch (lg(e)) {
            case 2:
                var o = rx;
                break;
            case 8:
                o = ox;
                break;
            default:
                o = Dc;
        }
        (i = o.bind(null, e, i, t)),
            (o = void 0),
            !Uo ||
                (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
                (o = !0),
            s
                ? o !== void 0
                    ? t.addEventListener(e, i, { capture: !0, passive: o })
                    : t.addEventListener(e, i, !0)
                : o !== void 0
                  ? t.addEventListener(e, i, { passive: o })
                  : t.addEventListener(e, i, !1);
    }
    function yc(t, e, i, s, o) {
        var c = s;
        if (!(e & 1) && !(e & 2) && s !== null)
            t: for (;;) {
                if (s === null) return;
                var g = s.tag;
                if (g === 3 || g === 4) {
                    var S = s.stateNode.containerInfo;
                    if (S === o || (S.nodeType === 8 && S.parentNode === o))
                        break;
                    if (g === 4)
                        for (g = s.return; g !== null; ) {
                            var x = g.tag;
                            if (
                                (x === 3 || x === 4) &&
                                ((x = g.stateNode.containerInfo),
                                x === o ||
                                    (x.nodeType === 8 && x.parentNode === o))
                            )
                                return;
                            g = g.return;
                        }
                    for (; S !== null; ) {
                        if (((g = pi(S)), g === null)) return;
                        if (
                            ((x = g.tag),
                            x === 5 || x === 6 || x === 26 || x === 27)
                        ) {
                            s = c = g;
                            continue t;
                        }
                        S = S.parentNode;
                    }
                }
                s = s.return;
            }
        $d(function () {
            var w = c,
                B = Bo(i),
                X = [];
            t: {
                var z = Oh.get(t);
                if (z !== void 0) {
                    var j = Cl,
                        rt = t;
                    switch (t) {
                        case "keypress":
                            if (Dl(i) === 0) break t;
                        case "keydown":
                        case "keyup":
                            j = _S;
                            break;
                        case "focusin":
                            (rt = "focus"), (j = Go);
                            break;
                        case "focusout":
                            (rt = "blur"), (j = Go);
                            break;
                        case "beforeblur":
                        case "afterblur":
                            j = Go;
                            break;
                        case "click":
                            if (i.button === 2) break t;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            j = eh;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            j = gS;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            j = CS;
                            break;
                        case Th:
                        case Eh:
                        case Ah:
                            j = SS;
                            break;
                        case Mh:
                            j = jS;
                            break;
                        case "scroll":
                        case "scrollend":
                            j = pS;
                            break;
                        case "wheel":
                            j = LS;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            j = xS;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            j = ih;
                            break;
                        case "toggle":
                        case "beforetoggle":
                            j = VS;
                    }
                    var pt = (e & 4) !== 0,
                        Gt = !pt && (t === "scroll" || t === "scrollend"),
                        D = pt ? (z !== null ? z + "Capture" : null) : z;
                    pt = [];
                    for (var A = w, C; A !== null; ) {
                        var Y = A;
                        if (
                            ((C = Y.stateNode),
                            (Y = Y.tag),
                            (Y !== 5 && Y !== 26 && Y !== 27) ||
                                C === null ||
                                D === null ||
                                ((Y = Ja(A, D)),
                                Y != null && pt.push(js(A, Y, C))),
                            Gt)
                        )
                            break;
                        A = A.return;
                    }
                    0 < pt.length &&
                        ((z = new j(z, rt, null, i, B)),
                        X.push({ event: z, listeners: pt }));
                }
            }
            if (!(e & 7)) {
                t: {
                    if (
                        ((z = t === "mouseover" || t === "pointerover"),
                        (j = t === "mouseout" || t === "pointerout"),
                        z &&
                            i !== Lo &&
                            (rt = i.relatedTarget || i.fromElement) &&
                            (pi(rt) || rt[Pi]))
                    )
                        break t;
                    if (
                        (j || z) &&
                        ((z =
                            B.window === B
                                ? B
                                : (z = B.ownerDocument)
                                  ? z.defaultView || z.parentWindow
                                  : window),
                        j
                            ? ((rt = i.relatedTarget || i.toElement),
                              (j = w),
                              (rt = rt ? pi(rt) : null),
                              rt !== null &&
                                  ((Gt = U(rt)),
                                  (pt = rt.tag),
                                  rt !== Gt ||
                                      (pt !== 5 && pt !== 27 && pt !== 6)) &&
                                  (rt = null))
                            : ((j = null), (rt = w)),
                        j !== rt)
                    ) {
                        if (
                            ((pt = eh),
                            (Y = "onMouseLeave"),
                            (D = "onMouseEnter"),
                            (A = "mouse"),
                            (t === "pointerout" || t === "pointerover") &&
                                ((pt = ih),
                                (Y = "onPointerLeave"),
                                (D = "onPointerEnter"),
                                (A = "pointer")),
                            (Gt = j == null ? z : Wa(j)),
                            (C = rt == null ? z : Wa(rt)),
                            (z = new pt(Y, A + "leave", j, i, B)),
                            (z.target = Gt),
                            (z.relatedTarget = C),
                            (Y = null),
                            pi(B) === w &&
                                ((pt = new pt(D, A + "enter", rt, i, B)),
                                (pt.target = C),
                                (pt.relatedTarget = Gt),
                                (Y = pt)),
                            (Gt = Y),
                            j && rt)
                        )
                            e: {
                                for (
                                    pt = j, D = rt, A = 0, C = pt;
                                    C;
                                    C = Ea(C)
                                )
                                    A++;
                                for (C = 0, Y = D; Y; Y = Ea(Y)) C++;
                                for (; 0 < A - C; ) (pt = Ea(pt)), A--;
                                for (; 0 < C - A; ) (D = Ea(D)), C--;
                                for (; A--; ) {
                                    if (
                                        pt === D ||
                                        (D !== null && pt === D.alternate)
                                    )
                                        break e;
                                    (pt = Ea(pt)), (D = Ea(D));
                                }
                                pt = null;
                            }
                        else pt = null;
                        j !== null && Um(X, z, j, pt, !1),
                            rt !== null && Gt !== null && Um(X, Gt, rt, pt, !0);
                    }
                }
                t: {
                    if (
                        ((z = w ? Wa(w) : window),
                        (j = z.nodeName && z.nodeName.toLowerCase()),
                        j === "select" || (j === "input" && z.type === "file"))
                    )
                        var it = fh;
                    else if (uh(z))
                        if (dh) it = ZS;
                        else {
                            it = KS;
                            var St = XS;
                        }
                    else
                        (j = z.nodeName),
                            !j ||
                            j.toLowerCase() !== "input" ||
                            (z.type !== "checkbox" && z.type !== "radio")
                                ? w && No(w.elementType) && (it = fh)
                                : (it = PS);
                    if (it && (it = it(t, w))) {
                        ch(X, it, i, B);
                        break t;
                    }
                    St && St(t, z, w),
                        t === "focusout" &&
                            w &&
                            z.type === "number" &&
                            w.memoizedProps.value != null &&
                            jo(z, "number", z.value);
                }
                switch (((St = w ? Wa(w) : window), t)) {
                    case "focusin":
                        (uh(St) || St.contentEditable === "true") &&
                            ((ea = St), (Qo = w), (ss = null));
                        break;
                    case "focusout":
                        ss = Qo = ea = null;
                        break;
                    case "mousedown":
                        Fo = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        (Fo = !1), bh(X, i, B);
                        break;
                    case "selectionchange":
                        if (WS) break;
                    case "keydown":
                    case "keyup":
                        bh(X, i, B);
                }
                var ut;
                if (Xo)
                    t: {
                        switch (t) {
                            case "compositionstart":
                                var ct = "onCompositionStart";
                                break t;
                            case "compositionend":
                                ct = "onCompositionEnd";
                                break t;
                            case "compositionupdate":
                                ct = "onCompositionUpdate";
                                break t;
                        }
                        ct = void 0;
                    }
                else
                    ta
                        ? rh(t, i) && (ct = "onCompositionEnd")
                        : t === "keydown" &&
                          i.keyCode === 229 &&
                          (ct = "onCompositionStart");
                ct &&
                    (ah &&
                        i.locale !== "ko" &&
                        (ta || ct !== "onCompositionStart"
                            ? ct === "onCompositionEnd" && ta && (ut = Id())
                            : ((Hn = B),
                              (Ho = "value" in Hn ? Hn.value : Hn.textContent),
                              (ta = !0))),
                    (St = mr(w, ct)),
                    0 < St.length &&
                        ((ct = new nh(ct, t, null, i, B)),
                        X.push({ event: ct, listeners: St }),
                        ut
                            ? (ct.data = ut)
                            : ((ut = oh(i)), ut !== null && (ct.data = ut)))),
                    (ut = HS ? qS(t, i) : YS(t, i)) &&
                        ((ct = mr(w, "onBeforeInput")),
                        0 < ct.length &&
                            ((St = new nh(
                                "onBeforeInput",
                                "beforeinput",
                                null,
                                i,
                                B
                            )),
                            X.push({ event: St, listeners: ct }),
                            (St.data = ut))),
                    zb(X, t, w, i, B);
            }
            Bm(X, e);
        });
    }
    function js(t, e, i) {
        return { instance: t, listener: e, currentTarget: i };
    }
    function mr(t, e) {
        for (var i = e + "Capture", s = []; t !== null; ) {
            var o = t,
                c = o.stateNode;
            (o = o.tag),
                (o !== 5 && o !== 26 && o !== 27) ||
                    c === null ||
                    ((o = Ja(t, i)),
                    o != null && s.unshift(js(t, o, c)),
                    (o = Ja(t, e)),
                    o != null && s.push(js(t, o, c))),
                (t = t.return);
        }
        return s;
    }
    function Ea(t) {
        if (t === null) return null;
        do t = t.return;
        while (t && t.tag !== 5 && t.tag !== 27);
        return t || null;
    }
    function Um(t, e, i, s, o) {
        for (var c = e._reactName, g = []; i !== null && i !== s; ) {
            var S = i,
                x = S.alternate,
                w = S.stateNode;
            if (((S = S.tag), x !== null && x === s)) break;
            (S !== 5 && S !== 26 && S !== 27) ||
                w === null ||
                ((x = w),
                o
                    ? ((w = Ja(i, c)), w != null && g.unshift(js(i, w, x)))
                    : o || ((w = Ja(i, c)), w != null && g.push(js(i, w, x)))),
                (i = i.return);
        }
        g.length !== 0 && t.push({ event: e, listeners: g });
    }
    var Bb = /\r\n?/g,
        Vb = /\u0000|\uFFFD/g;
    function Hm(t) {
        return (typeof t == "string" ? t : "" + t)
            .replace(
                Bb,
                `
`
            )
            .replace(Vb, "");
    }
    function qm(t, e) {
        return (e = Hm(e)), Hm(t) === e;
    }
    function gr() {}
    function Ct(t, e, i, s, o, c) {
        switch (i) {
            case "children":
                typeof s == "string"
                    ? e === "body" || (e === "textarea" && s === "") || Ji(t, s)
                    : (typeof s == "number" || typeof s == "bigint") &&
                      e !== "body" &&
                      Ji(t, "" + s);
                break;
            case "className":
                Al(t, "class", s);
                break;
            case "tabIndex":
                Al(t, "tabindex", s);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                Al(t, i, s);
                break;
            case "style":
                Wd(t, s, c);
                break;
            case "data":
                if (e !== "object") {
                    Al(t, "data", s);
                    break;
                }
            case "src":
            case "href":
                if (s === "" && (e !== "a" || i !== "href")) {
                    t.removeAttribute(i);
                    break;
                }
                if (
                    s == null ||
                    typeof s == "function" ||
                    typeof s == "symbol" ||
                    typeof s == "boolean"
                ) {
                    t.removeAttribute(i);
                    break;
                }
                (s = wl("" + s)), t.setAttribute(i, s);
                break;
            case "action":
            case "formAction":
                if (typeof s == "function") {
                    t.setAttribute(
                        i,
                        "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
                    );
                    break;
                } else
                    typeof c == "function" &&
                        (i === "formAction"
                            ? (e !== "input" &&
                                  Ct(t, e, "name", o.name, o, null),
                              Ct(t, e, "formEncType", o.formEncType, o, null),
                              Ct(t, e, "formMethod", o.formMethod, o, null),
                              Ct(t, e, "formTarget", o.formTarget, o, null))
                            : (Ct(t, e, "encType", o.encType, o, null),
                              Ct(t, e, "method", o.method, o, null),
                              Ct(t, e, "target", o.target, o, null)));
                if (
                    s == null ||
                    typeof s == "symbol" ||
                    typeof s == "boolean"
                ) {
                    t.removeAttribute(i);
                    break;
                }
                (s = wl("" + s)), t.setAttribute(i, s);
                break;
            case "onClick":
                s != null && (t.onclick = gr);
                break;
            case "onScroll":
                s != null && Tt("scroll", t);
                break;
            case "onScrollEnd":
                s != null && Tt("scrollend", t);
                break;
            case "dangerouslySetInnerHTML":
                if (s != null) {
                    if (typeof s != "object" || !("__html" in s))
                        throw Error(r(61));
                    if (((i = s.__html), i != null)) {
                        if (o.children != null) throw Error(r(60));
                        t.innerHTML = i;
                    }
                }
                break;
            case "multiple":
                t.multiple =
                    s && typeof s != "function" && typeof s != "symbol";
                break;
            case "muted":
                t.muted = s && typeof s != "function" && typeof s != "symbol";
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                break;
            case "autoFocus":
                break;
            case "xlinkHref":
                if (
                    s == null ||
                    typeof s == "function" ||
                    typeof s == "boolean" ||
                    typeof s == "symbol"
                ) {
                    t.removeAttribute("xlink:href");
                    break;
                }
                (i = wl("" + s)),
                    t.setAttributeNS(
                        "http://www.w3.org/1999/xlink",
                        "xlink:href",
                        i
                    );
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                s != null && typeof s != "function" && typeof s != "symbol"
                    ? t.setAttribute(i, "" + s)
                    : t.removeAttribute(i);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                s && typeof s != "function" && typeof s != "symbol"
                    ? t.setAttribute(i, "")
                    : t.removeAttribute(i);
                break;
            case "capture":
            case "download":
                s === !0
                    ? t.setAttribute(i, "")
                    : s !== !1 &&
                        s != null &&
                        typeof s != "function" &&
                        typeof s != "symbol"
                      ? t.setAttribute(i, s)
                      : t.removeAttribute(i);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                s != null &&
                typeof s != "function" &&
                typeof s != "symbol" &&
                !isNaN(s) &&
                1 <= s
                    ? t.setAttribute(i, s)
                    : t.removeAttribute(i);
                break;
            case "rowSpan":
            case "start":
                s == null ||
                typeof s == "function" ||
                typeof s == "symbol" ||
                isNaN(s)
                    ? t.removeAttribute(i)
                    : t.setAttribute(i, s);
                break;
            case "popover":
                Tt("beforetoggle", t), Tt("toggle", t), El(t, "popover", s);
                break;
            case "xlinkActuate":
                gn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", s);
                break;
            case "xlinkArcrole":
                gn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", s);
                break;
            case "xlinkRole":
                gn(t, "http://www.w3.org/1999/xlink", "xlink:role", s);
                break;
            case "xlinkShow":
                gn(t, "http://www.w3.org/1999/xlink", "xlink:show", s);
                break;
            case "xlinkTitle":
                gn(t, "http://www.w3.org/1999/xlink", "xlink:title", s);
                break;
            case "xlinkType":
                gn(t, "http://www.w3.org/1999/xlink", "xlink:type", s);
                break;
            case "xmlBase":
                gn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", s);
                break;
            case "xmlLang":
                gn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", s);
                break;
            case "xmlSpace":
                gn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", s);
                break;
            case "is":
                El(t, "is", s);
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < i.length) ||
                    (i[0] !== "o" && i[0] !== "O") ||
                    (i[1] !== "n" && i[1] !== "N")) &&
                    ((i = dS.get(i) || i), El(t, i, s));
        }
    }
    function vc(t, e, i, s, o, c) {
        switch (i) {
            case "style":
                Wd(t, s, c);
                break;
            case "dangerouslySetInnerHTML":
                if (s != null) {
                    if (typeof s != "object" || !("__html" in s))
                        throw Error(r(61));
                    if (((i = s.__html), i != null)) {
                        if (o.children != null) throw Error(r(60));
                        t.innerHTML = i;
                    }
                }
                break;
            case "children":
                typeof s == "string"
                    ? Ji(t, s)
                    : (typeof s == "number" || typeof s == "bigint") &&
                      Ji(t, "" + s);
                break;
            case "onScroll":
                s != null && Tt("scroll", t);
                break;
            case "onScrollEnd":
                s != null && Tt("scrollend", t);
                break;
            case "onClick":
                s != null && (t.onclick = gr);
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                if (!Yd.hasOwnProperty(i))
                    t: {
                        if (
                            i[0] === "o" &&
                            i[1] === "n" &&
                            ((o = i.endsWith("Capture")),
                            (e = i.slice(2, o ? i.length - 7 : void 0)),
                            (c = t[ve] || null),
                            (c = c != null ? c[i] : null),
                            typeof c == "function" &&
                                t.removeEventListener(e, c, o),
                            typeof s == "function")
                        ) {
                            typeof c != "function" &&
                                c !== null &&
                                (i in t
                                    ? (t[i] = null)
                                    : t.hasAttribute(i) &&
                                      t.removeAttribute(i)),
                                t.addEventListener(e, s, o);
                            break t;
                        }
                        i in t
                            ? (t[i] = s)
                            : s === !0
                              ? t.setAttribute(i, "")
                              : El(t, i, s);
                    }
        }
    }
    function le(t, e, i) {
        switch (e) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "img":
                Tt("error", t), Tt("load", t);
                var s = !1,
                    o = !1,
                    c;
                for (c in i)
                    if (i.hasOwnProperty(c)) {
                        var g = i[c];
                        if (g != null)
                            switch (c) {
                                case "src":
                                    s = !0;
                                    break;
                                case "srcSet":
                                    o = !0;
                                    break;
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    throw Error(r(137, e));
                                default:
                                    Ct(t, e, c, g, i, null);
                            }
                    }
                o && Ct(t, e, "srcSet", i.srcSet, i, null),
                    s && Ct(t, e, "src", i.src, i, null);
                return;
            case "input":
                Tt("invalid", t);
                var S = (c = g = o = null),
                    x = null,
                    w = null;
                for (s in i)
                    if (i.hasOwnProperty(s)) {
                        var B = i[s];
                        if (B != null)
                            switch (s) {
                                case "name":
                                    o = B;
                                    break;
                                case "type":
                                    g = B;
                                    break;
                                case "checked":
                                    x = B;
                                    break;
                                case "defaultChecked":
                                    w = B;
                                    break;
                                case "value":
                                    c = B;
                                    break;
                                case "defaultValue":
                                    S = B;
                                    break;
                                case "children":
                                case "dangerouslySetInnerHTML":
                                    if (B != null) throw Error(r(137, e));
                                    break;
                                default:
                                    Ct(t, e, s, B, i, null);
                            }
                    }
                Pd(t, c, S, x, w, g, o, !1), Ml(t);
                return;
            case "select":
                Tt("invalid", t), (s = g = c = null);
                for (o in i)
                    if (i.hasOwnProperty(o) && ((S = i[o]), S != null))
                        switch (o) {
                            case "value":
                                c = S;
                                break;
                            case "defaultValue":
                                g = S;
                                break;
                            case "multiple":
                                s = S;
                            default:
                                Ct(t, e, o, S, i, null);
                        }
                (e = c),
                    (i = g),
                    (t.multiple = !!s),
                    e != null
                        ? Wi(t, !!s, e, !1)
                        : i != null && Wi(t, !!s, i, !0);
                return;
            case "textarea":
                Tt("invalid", t), (c = o = s = null);
                for (g in i)
                    if (i.hasOwnProperty(g) && ((S = i[g]), S != null))
                        switch (g) {
                            case "value":
                                s = S;
                                break;
                            case "defaultValue":
                                o = S;
                                break;
                            case "children":
                                c = S;
                                break;
                            case "dangerouslySetInnerHTML":
                                if (S != null) throw Error(r(91));
                                break;
                            default:
                                Ct(t, e, g, S, i, null);
                        }
                Qd(t, s, o, c), Ml(t);
                return;
            case "option":
                for (x in i)
                    if (i.hasOwnProperty(x) && ((s = i[x]), s != null))
                        switch (x) {
                            case "selected":
                                t.selected =
                                    s &&
                                    typeof s != "function" &&
                                    typeof s != "symbol";
                                break;
                            default:
                                Ct(t, e, x, s, i, null);
                        }
                return;
            case "dialog":
                Tt("cancel", t), Tt("close", t);
                break;
            case "iframe":
            case "object":
                Tt("load", t);
                break;
            case "video":
            case "audio":
                for (s = 0; s < zs.length; s++) Tt(zs[s], t);
                break;
            case "image":
                Tt("error", t), Tt("load", t);
                break;
            case "details":
                Tt("toggle", t);
                break;
            case "embed":
            case "source":
            case "link":
                Tt("error", t), Tt("load", t);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for (w in i)
                    if (i.hasOwnProperty(w) && ((s = i[w]), s != null))
                        switch (w) {
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(r(137, e));
                            default:
                                Ct(t, e, w, s, i, null);
                        }
                return;
            default:
                if (No(e)) {
                    for (B in i)
                        i.hasOwnProperty(B) &&
                            ((s = i[B]),
                            s !== void 0 && vc(t, e, B, s, i, void 0));
                    return;
                }
        }
        for (S in i)
            i.hasOwnProperty(S) &&
                ((s = i[S]), s != null && Ct(t, e, S, s, i, null));
    }
    function Ub(t, e, i, s) {
        switch (e) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "input":
                var o = null,
                    c = null,
                    g = null,
                    S = null,
                    x = null,
                    w = null,
                    B = null;
                for (j in i) {
                    var X = i[j];
                    if (i.hasOwnProperty(j) && X != null)
                        switch (j) {
                            case "checked":
                                break;
                            case "value":
                                break;
                            case "defaultValue":
                                x = X;
                            default:
                                s.hasOwnProperty(j) || Ct(t, e, j, null, s, X);
                        }
                }
                for (var z in s) {
                    var j = s[z];
                    if (
                        ((X = i[z]),
                        s.hasOwnProperty(z) && (j != null || X != null))
                    )
                        switch (z) {
                            case "type":
                                c = j;
                                break;
                            case "name":
                                o = j;
                                break;
                            case "checked":
                                w = j;
                                break;
                            case "defaultChecked":
                                B = j;
                                break;
                            case "value":
                                g = j;
                                break;
                            case "defaultValue":
                                S = j;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (j != null) throw Error(r(137, e));
                                break;
                            default:
                                j !== X && Ct(t, e, z, j, s, X);
                        }
                }
                zo(t, g, S, x, w, B, c, o);
                return;
            case "select":
                j = g = S = z = null;
                for (c in i)
                    if (((x = i[c]), i.hasOwnProperty(c) && x != null))
                        switch (c) {
                            case "value":
                                break;
                            case "multiple":
                                j = x;
                            default:
                                s.hasOwnProperty(c) || Ct(t, e, c, null, s, x);
                        }
                for (o in s)
                    if (
                        ((c = s[o]),
                        (x = i[o]),
                        s.hasOwnProperty(o) && (c != null || x != null))
                    )
                        switch (o) {
                            case "value":
                                z = c;
                                break;
                            case "defaultValue":
                                S = c;
                                break;
                            case "multiple":
                                g = c;
                            default:
                                c !== x && Ct(t, e, o, c, s, x);
                        }
                (e = S),
                    (i = g),
                    (s = j),
                    z != null
                        ? Wi(t, !!i, z, !1)
                        : !!s != !!i &&
                          (e != null
                              ? Wi(t, !!i, e, !0)
                              : Wi(t, !!i, i ? [] : "", !1));
                return;
            case "textarea":
                j = z = null;
                for (S in i)
                    if (
                        ((o = i[S]),
                        i.hasOwnProperty(S) &&
                            o != null &&
                            !s.hasOwnProperty(S))
                    )
                        switch (S) {
                            case "value":
                                break;
                            case "children":
                                break;
                            default:
                                Ct(t, e, S, null, s, o);
                        }
                for (g in s)
                    if (
                        ((o = s[g]),
                        (c = i[g]),
                        s.hasOwnProperty(g) && (o != null || c != null))
                    )
                        switch (g) {
                            case "value":
                                z = o;
                                break;
                            case "defaultValue":
                                j = o;
                                break;
                            case "children":
                                break;
                            case "dangerouslySetInnerHTML":
                                if (o != null) throw Error(r(91));
                                break;
                            default:
                                o !== c && Ct(t, e, g, o, s, c);
                        }
                Zd(t, z, j);
                return;
            case "option":
                for (var rt in i)
                    if (
                        ((z = i[rt]),
                        i.hasOwnProperty(rt) &&
                            z != null &&
                            !s.hasOwnProperty(rt))
                    )
                        switch (rt) {
                            case "selected":
                                t.selected = !1;
                                break;
                            default:
                                Ct(t, e, rt, null, s, z);
                        }
                for (x in s)
                    if (
                        ((z = s[x]),
                        (j = i[x]),
                        s.hasOwnProperty(x) &&
                            z !== j &&
                            (z != null || j != null))
                    )
                        switch (x) {
                            case "selected":
                                t.selected =
                                    z &&
                                    typeof z != "function" &&
                                    typeof z != "symbol";
                                break;
                            default:
                                Ct(t, e, x, z, s, j);
                        }
                return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
                for (var pt in i)
                    (z = i[pt]),
                        i.hasOwnProperty(pt) &&
                            z != null &&
                            !s.hasOwnProperty(pt) &&
                            Ct(t, e, pt, null, s, z);
                for (w in s)
                    if (
                        ((z = s[w]),
                        (j = i[w]),
                        s.hasOwnProperty(w) &&
                            z !== j &&
                            (z != null || j != null))
                    )
                        switch (w) {
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (z != null) throw Error(r(137, e));
                                break;
                            default:
                                Ct(t, e, w, z, s, j);
                        }
                return;
            default:
                if (No(e)) {
                    for (var Gt in i)
                        (z = i[Gt]),
                            i.hasOwnProperty(Gt) &&
                                z !== void 0 &&
                                !s.hasOwnProperty(Gt) &&
                                vc(t, e, Gt, void 0, s, z);
                    for (B in s)
                        (z = s[B]),
                            (j = i[B]),
                            !s.hasOwnProperty(B) ||
                                z === j ||
                                (z === void 0 && j === void 0) ||
                                vc(t, e, B, z, s, j);
                    return;
                }
        }
        for (var D in i)
            (z = i[D]),
                i.hasOwnProperty(D) &&
                    z != null &&
                    !s.hasOwnProperty(D) &&
                    Ct(t, e, D, null, s, z);
        for (X in s)
            (z = s[X]),
                (j = i[X]),
                !s.hasOwnProperty(X) ||
                    z === j ||
                    (z == null && j == null) ||
                    Ct(t, e, X, z, s, j);
    }
    var Sc = null,
        bc = null;
    function yr(t) {
        return t.nodeType === 9 ? t : t.ownerDocument;
    }
    function Ym(t) {
        switch (t) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0;
        }
    }
    function Gm(t, e) {
        if (t === 0)
            switch (e) {
                case "svg":
                    return 1;
                case "math":
                    return 2;
                default:
                    return 0;
            }
        return t === 1 && e === "foreignObject" ? 0 : t;
    }
    function xc(t, e) {
        return (
            t === "textarea" ||
            t === "noscript" ||
            typeof e.children == "string" ||
            typeof e.children == "number" ||
            typeof e.children == "bigint" ||
            (typeof e.dangerouslySetInnerHTML == "object" &&
                e.dangerouslySetInnerHTML !== null &&
                e.dangerouslySetInnerHTML.__html != null)
        );
    }
    var Tc = null;
    function Hb() {
        var t = window.event;
        return t && t.type === "popstate"
            ? t === Tc
                ? !1
                : ((Tc = t), !0)
            : ((Tc = null), !1);
    }
    var km = typeof setTimeout == "function" ? setTimeout : void 0,
        qb = typeof clearTimeout == "function" ? clearTimeout : void 0,
        Xm = typeof Promise == "function" ? Promise : void 0,
        Yb =
            typeof queueMicrotask == "function"
                ? queueMicrotask
                : typeof Xm < "u"
                  ? function (t) {
                        return Xm.resolve(null).then(t).catch(Gb);
                    }
                  : km;
    function Gb(t) {
        setTimeout(function () {
            throw t;
        });
    }
    function Ec(t, e) {
        var i = e,
            s = 0;
        do {
            var o = i.nextSibling;
            if ((t.removeChild(i), o && o.nodeType === 8))
                if (((i = o.data), i === "/$")) {
                    if (s === 0) {
                        t.removeChild(o), Ys(e);
                        return;
                    }
                    s--;
                } else (i !== "$" && i !== "$?" && i !== "$!") || s++;
            i = o;
        } while (i);
        Ys(e);
    }
    function Ac(t) {
        var e = t.firstChild;
        for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
            var i = e;
            switch (((e = e.nextSibling), i.nodeName)) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    Ac(i), Co(i);
                    continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if (i.rel.toLowerCase() === "stylesheet") continue;
            }
            t.removeChild(i);
        }
    }
    function kb(t, e, i, s) {
        for (; t.nodeType === 1; ) {
            var o = i;
            if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
                if (!s && (t.nodeName !== "INPUT" || t.type !== "hidden"))
                    break;
            } else if (s) {
                if (!t[Fa])
                    switch (e) {
                        case "meta":
                            if (!t.hasAttribute("itemprop")) break;
                            return t;
                        case "link":
                            if (
                                ((c = t.getAttribute("rel")),
                                c === "stylesheet" &&
                                    t.hasAttribute("data-precedence"))
                            )
                                break;
                            if (
                                c !== o.rel ||
                                t.getAttribute("href") !==
                                    (o.href == null ? null : o.href) ||
                                t.getAttribute("crossorigin") !==
                                    (o.crossOrigin == null
                                        ? null
                                        : o.crossOrigin) ||
                                t.getAttribute("title") !==
                                    (o.title == null ? null : o.title)
                            )
                                break;
                            return t;
                        case "style":
                            if (t.hasAttribute("data-precedence")) break;
                            return t;
                        case "script":
                            if (
                                ((c = t.getAttribute("src")),
                                (c !== (o.src == null ? null : o.src) ||
                                    t.getAttribute("type") !==
                                        (o.type == null ? null : o.type) ||
                                    t.getAttribute("crossorigin") !==
                                        (o.crossOrigin == null
                                            ? null
                                            : o.crossOrigin)) &&
                                    c &&
                                    t.hasAttribute("async") &&
                                    !t.hasAttribute("itemprop"))
                            )
                                break;
                            return t;
                        default:
                            return t;
                    }
            } else if (e === "input" && t.type === "hidden") {
                var c = o.name == null ? null : "" + o.name;
                if (o.type === "hidden" && t.getAttribute("name") === c)
                    return t;
            } else return t;
            if (((t = We(t.nextSibling)), t === null)) break;
        }
        return null;
    }
    function Xb(t, e, i) {
        if (e === "") return null;
        for (; t.nodeType !== 3; )
            if (
                ((t.nodeType !== 1 ||
                    t.nodeName !== "INPUT" ||
                    t.type !== "hidden") &&
                    !i) ||
                ((t = We(t.nextSibling)), t === null)
            )
                return null;
        return t;
    }
    function We(t) {
        for (; t != null; t = t.nextSibling) {
            var e = t.nodeType;
            if (e === 1 || e === 3) break;
            if (e === 8) {
                if (
                    ((e = t.data),
                    e === "$" ||
                        e === "$!" ||
                        e === "$?" ||
                        e === "F!" ||
                        e === "F")
                )
                    break;
                if (e === "/$") return null;
            }
        }
        return t;
    }
    function Km(t) {
        t = t.previousSibling;
        for (var e = 0; t; ) {
            if (t.nodeType === 8) {
                var i = t.data;
                if (i === "$" || i === "$!" || i === "$?") {
                    if (e === 0) return t;
                    e--;
                } else i === "/$" && e++;
            }
            t = t.previousSibling;
        }
        return null;
    }
    function Pm(t, e, i) {
        switch (((e = yr(i)), t)) {
            case "html":
                if (((t = e.documentElement), !t)) throw Error(r(452));
                return t;
            case "head":
                if (((t = e.head), !t)) throw Error(r(453));
                return t;
            case "body":
                if (((t = e.body), !t)) throw Error(r(454));
                return t;
            default:
                throw Error(r(451));
        }
    }
    var Ye = new Map(),
        Zm = new Set();
    function vr(t) {
        return typeof t.getRootNode == "function"
            ? t.getRootNode()
            : t.ownerDocument;
    }
    var Cn = W.d;
    W.d = { f: Kb, r: Pb, D: Zb, C: Qb, L: Fb, m: Wb, X: $b, S: Jb, M: Ib };
    function Kb() {
        var t = Cn.f(),
            e = cr();
        return t || e;
    }
    function Pb(t) {
        var e = Zi(t);
        e !== null && e.tag === 5 && e.type === "form" ? bp(e) : Cn.r(t);
    }
    var Aa = typeof document > "u" ? null : document;
    function Qm(t, e, i) {
        var s = Aa;
        if (s && typeof e == "string" && e) {
            var o = Ce(e);
            (o = 'link[rel="' + t + '"][href="' + o + '"]'),
                typeof i == "string" && (o += '[crossorigin="' + i + '"]'),
                Zm.has(o) ||
                    (Zm.add(o),
                    (t = { rel: t, crossOrigin: i, href: e }),
                    s.querySelector(o) === null &&
                        ((e = s.createElement("link")),
                        le(e, "link", t),
                        $t(e),
                        s.head.appendChild(e)));
        }
    }
    function Zb(t) {
        Cn.D(t), Qm("dns-prefetch", t, null);
    }
    function Qb(t, e) {
        Cn.C(t, e), Qm("preconnect", t, e);
    }
    function Fb(t, e, i) {
        Cn.L(t, e, i);
        var s = Aa;
        if (s && t && e) {
            var o = 'link[rel="preload"][as="' + Ce(e) + '"]';
            e === "image" && i && i.imageSrcSet
                ? ((o += '[imagesrcset="' + Ce(i.imageSrcSet) + '"]'),
                  typeof i.imageSizes == "string" &&
                      (o += '[imagesizes="' + Ce(i.imageSizes) + '"]'))
                : (o += '[href="' + Ce(t) + '"]');
            var c = o;
            switch (e) {
                case "style":
                    c = Ma(t);
                    break;
                case "script":
                    c = Oa(t);
            }
            Ye.has(c) ||
                ((t = lt(
                    {
                        rel: "preload",
                        href: e === "image" && i && i.imageSrcSet ? void 0 : t,
                        as: e,
                    },
                    i
                )),
                Ye.set(c, t),
                s.querySelector(o) !== null ||
                    (e === "style" && s.querySelector(Ns(c))) ||
                    (e === "script" && s.querySelector(Ls(c))) ||
                    ((e = s.createElement("link")),
                    le(e, "link", t),
                    $t(e),
                    s.head.appendChild(e)));
        }
    }
    function Wb(t, e) {
        Cn.m(t, e);
        var i = Aa;
        if (i && t) {
            var s = e && typeof e.as == "string" ? e.as : "script",
                o =
                    'link[rel="modulepreload"][as="' +
                    Ce(s) +
                    '"][href="' +
                    Ce(t) +
                    '"]',
                c = o;
            switch (s) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    c = Oa(t);
            }
            if (
                !Ye.has(c) &&
                ((t = lt({ rel: "modulepreload", href: t }, e)),
                Ye.set(c, t),
                i.querySelector(o) === null)
            ) {
                switch (s) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (i.querySelector(Ls(c))) return;
                }
                (s = i.createElement("link")),
                    le(s, "link", t),
                    $t(s),
                    i.head.appendChild(s);
            }
        }
    }
    function Jb(t, e, i) {
        Cn.S(t, e, i);
        var s = Aa;
        if (s && t) {
            var o = Qi(s).hoistableStyles,
                c = Ma(t);
            e = e || "default";
            var g = o.get(c);
            if (!g) {
                var S = { loading: 0, preload: null };
                if ((g = s.querySelector(Ns(c)))) S.loading = 5;
                else {
                    (t = lt(
                        { rel: "stylesheet", href: t, "data-precedence": e },
                        i
                    )),
                        (i = Ye.get(c)) && Mc(t, i);
                    var x = (g = s.createElement("link"));
                    $t(x),
                        le(x, "link", t),
                        (x._p = new Promise(function (w, B) {
                            (x.onload = w), (x.onerror = B);
                        })),
                        x.addEventListener("load", function () {
                            S.loading |= 1;
                        }),
                        x.addEventListener("error", function () {
                            S.loading |= 2;
                        }),
                        (S.loading |= 4),
                        Sr(g, e, s);
                }
                (g = { type: "stylesheet", instance: g, count: 1, state: S }),
                    o.set(c, g);
            }
        }
    }
    function $b(t, e) {
        Cn.X(t, e);
        var i = Aa;
        if (i && t) {
            var s = Qi(i).hoistableScripts,
                o = Oa(t),
                c = s.get(o);
            c ||
                ((c = i.querySelector(Ls(o))),
                c ||
                    ((t = lt({ src: t, async: !0 }, e)),
                    (e = Ye.get(o)) && Oc(t, e),
                    (c = i.createElement("script")),
                    $t(c),
                    le(c, "link", t),
                    i.head.appendChild(c)),
                (c = { type: "script", instance: c, count: 1, state: null }),
                s.set(o, c));
        }
    }
    function Ib(t, e) {
        Cn.M(t, e);
        var i = Aa;
        if (i && t) {
            var s = Qi(i).hoistableScripts,
                o = Oa(t),
                c = s.get(o);
            c ||
                ((c = i.querySelector(Ls(o))),
                c ||
                    ((t = lt({ src: t, async: !0, type: "module" }, e)),
                    (e = Ye.get(o)) && Oc(t, e),
                    (c = i.createElement("script")),
                    $t(c),
                    le(c, "link", t),
                    i.head.appendChild(c)),
                (c = { type: "script", instance: c, count: 1, state: null }),
                s.set(o, c));
        }
    }
    function Fm(t, e, i, s) {
        var o = (o = Bn.current) ? vr(o) : null;
        if (!o) throw Error(r(446));
        switch (t) {
            case "meta":
            case "title":
                return null;
            case "style":
                return typeof i.precedence == "string" &&
                    typeof i.href == "string"
                    ? ((e = Ma(i.href)),
                      (i = Qi(o).hoistableStyles),
                      (s = i.get(e)),
                      s ||
                          ((s = {
                              type: "style",
                              instance: null,
                              count: 0,
                              state: null,
                          }),
                          i.set(e, s)),
                      s)
                    : { type: "void", instance: null, count: 0, state: null };
            case "link":
                if (
                    i.rel === "stylesheet" &&
                    typeof i.href == "string" &&
                    typeof i.precedence == "string"
                ) {
                    t = Ma(i.href);
                    var c = Qi(o).hoistableStyles,
                        g = c.get(t);
                    if (
                        (g ||
                            ((o = o.ownerDocument || o),
                            (g = {
                                type: "stylesheet",
                                instance: null,
                                count: 0,
                                state: { loading: 0, preload: null },
                            }),
                            c.set(t, g),
                            (c = o.querySelector(Ns(t))) &&
                                !c._p &&
                                ((g.instance = c), (g.state.loading = 5)),
                            Ye.has(t) ||
                                ((i = {
                                    rel: "preload",
                                    as: "style",
                                    href: i.href,
                                    crossOrigin: i.crossOrigin,
                                    integrity: i.integrity,
                                    media: i.media,
                                    hrefLang: i.hrefLang,
                                    referrerPolicy: i.referrerPolicy,
                                }),
                                Ye.set(t, i),
                                c || tx(o, t, i, g.state))),
                        e && s === null)
                    )
                        throw Error(r(528, ""));
                    return g;
                }
                if (e && s !== null) throw Error(r(529, ""));
                return null;
            case "script":
                return (
                    (e = i.async),
                    (i = i.src),
                    typeof i == "string" &&
                    e &&
                    typeof e != "function" &&
                    typeof e != "symbol"
                        ? ((e = Oa(i)),
                          (i = Qi(o).hoistableScripts),
                          (s = i.get(e)),
                          s ||
                              ((s = {
                                  type: "script",
                                  instance: null,
                                  count: 0,
                                  state: null,
                              }),
                              i.set(e, s)),
                          s)
                        : {
                              type: "void",
                              instance: null,
                              count: 0,
                              state: null,
                          }
                );
            default:
                throw Error(r(444, t));
        }
    }
    function Ma(t) {
        return 'href="' + Ce(t) + '"';
    }
    function Ns(t) {
        return 'link[rel="stylesheet"][' + t + "]";
    }
    function Wm(t) {
        return lt({}, t, { "data-precedence": t.precedence, precedence: null });
    }
    function tx(t, e, i, s) {
        t.querySelector('link[rel="preload"][as="style"][' + e + "]")
            ? (s.loading = 1)
            : ((e = t.createElement("link")),
              (s.preload = e),
              e.addEventListener("load", function () {
                  return (s.loading |= 1);
              }),
              e.addEventListener("error", function () {
                  return (s.loading |= 2);
              }),
              le(e, "link", i),
              $t(e),
              t.head.appendChild(e));
    }
    function Oa(t) {
        return '[src="' + Ce(t) + '"]';
    }
    function Ls(t) {
        return "script[async]" + t;
    }
    function Jm(t, e, i) {
        if ((e.count++, e.instance === null))
            switch (e.type) {
                case "style":
                    var s = t.querySelector(
                        'style[data-href~="' + Ce(i.href) + '"]'
                    );
                    if (s) return (e.instance = s), $t(s), s;
                    var o = lt({}, i, {
                        "data-href": i.href,
                        "data-precedence": i.precedence,
                        href: null,
                        precedence: null,
                    });
                    return (
                        (s = (t.ownerDocument || t).createElement("style")),
                        $t(s),
                        le(s, "style", o),
                        Sr(s, i.precedence, t),
                        (e.instance = s)
                    );
                case "stylesheet":
                    o = Ma(i.href);
                    var c = t.querySelector(Ns(o));
                    if (c)
                        return (
                            (e.state.loading |= 4), (e.instance = c), $t(c), c
                        );
                    (s = Wm(i)),
                        (o = Ye.get(o)) && Mc(s, o),
                        (c = (t.ownerDocument || t).createElement("link")),
                        $t(c);
                    var g = c;
                    return (
                        (g._p = new Promise(function (S, x) {
                            (g.onload = S), (g.onerror = x);
                        })),
                        le(c, "link", s),
                        (e.state.loading |= 4),
                        Sr(c, i.precedence, t),
                        (e.instance = c)
                    );
                case "script":
                    return (
                        (c = Oa(i.src)),
                        (o = t.querySelector(Ls(c)))
                            ? ((e.instance = o), $t(o), o)
                            : ((s = i),
                              (o = Ye.get(c)) && ((s = lt({}, i)), Oc(s, o)),
                              (t = t.ownerDocument || t),
                              (o = t.createElement("script")),
                              $t(o),
                              le(o, "link", s),
                              t.head.appendChild(o),
                              (e.instance = o))
                    );
                case "void":
                    return null;
                default:
                    throw Error(r(443, e.type));
            }
        else
            e.type === "stylesheet" &&
                !(e.state.loading & 4) &&
                ((s = e.instance),
                (e.state.loading |= 4),
                Sr(s, i.precedence, t));
        return e.instance;
    }
    function Sr(t, e, i) {
        for (
            var s = i.querySelectorAll(
                    'link[rel="stylesheet"][data-precedence],style[data-precedence]'
                ),
                o = s.length ? s[s.length - 1] : null,
                c = o,
                g = 0;
            g < s.length;
            g++
        ) {
            var S = s[g];
            if (S.dataset.precedence === e) c = S;
            else if (c !== o) break;
        }
        c
            ? c.parentNode.insertBefore(t, c.nextSibling)
            : ((e = i.nodeType === 9 ? i.head : i),
              e.insertBefore(t, e.firstChild));
    }
    function Mc(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
            t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
            t.title == null && (t.title = e.title);
    }
    function Oc(t, e) {
        t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
            t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
            t.integrity == null && (t.integrity = e.integrity);
    }
    var br = null;
    function $m(t, e, i) {
        if (br === null) {
            var s = new Map(),
                o = (br = new Map());
            o.set(i, s);
        } else (o = br), (s = o.get(i)), s || ((s = new Map()), o.set(i, s));
        if (s.has(t)) return s;
        for (
            s.set(t, null), i = i.getElementsByTagName(t), o = 0;
            o < i.length;
            o++
        ) {
            var c = i[o];
            if (
                !(
                    c[Fa] ||
                    c[re] ||
                    (t === "link" && c.getAttribute("rel") === "stylesheet")
                ) &&
                c.namespaceURI !== "http://www.w3.org/2000/svg"
            ) {
                var g = c.getAttribute(e) || "";
                g = t + g;
                var S = s.get(g);
                S ? S.push(c) : s.set(g, [c]);
            }
        }
        return s;
    }
    function Im(t, e, i) {
        (t = t.ownerDocument || t),
            t.head.insertBefore(
                i,
                e === "title" ? t.querySelector("head > title") : null
            );
    }
    function ex(t, e, i) {
        if (i === 1 || e.itemProp != null) return !1;
        switch (t) {
            case "meta":
            case "title":
                return !0;
            case "style":
                if (
                    typeof e.precedence != "string" ||
                    typeof e.href != "string" ||
                    e.href === ""
                )
                    break;
                return !0;
            case "link":
                if (
                    typeof e.rel != "string" ||
                    typeof e.href != "string" ||
                    e.href === "" ||
                    e.onLoad ||
                    e.onError
                )
                    break;
                switch (e.rel) {
                    case "stylesheet":
                        return (
                            (t = e.disabled),
                            typeof e.precedence == "string" && t == null
                        );
                    default:
                        return !0;
                }
            case "script":
                if (
                    e.async &&
                    typeof e.async != "function" &&
                    typeof e.async != "symbol" &&
                    !e.onLoad &&
                    !e.onError &&
                    e.src &&
                    typeof e.src == "string"
                )
                    return !0;
        }
        return !1;
    }
    function tg(t) {
        return !(t.type === "stylesheet" && !(t.state.loading & 3));
    }
    var Bs = null;
    function nx() {}
    function ix(t, e, i) {
        if (Bs === null) throw Error(r(475));
        var s = Bs;
        if (
            e.type === "stylesheet" &&
            (typeof i.media != "string" ||
                matchMedia(i.media).matches !== !1) &&
            !(e.state.loading & 4)
        ) {
            if (e.instance === null) {
                var o = Ma(i.href),
                    c = t.querySelector(Ns(o));
                if (c) {
                    (t = c._p),
                        t !== null &&
                            typeof t == "object" &&
                            typeof t.then == "function" &&
                            (s.count++, (s = xr.bind(s)), t.then(s, s)),
                        (e.state.loading |= 4),
                        (e.instance = c),
                        $t(c);
                    return;
                }
                (c = t.ownerDocument || t),
                    (i = Wm(i)),
                    (o = Ye.get(o)) && Mc(i, o),
                    (c = c.createElement("link")),
                    $t(c);
                var g = c;
                (g._p = new Promise(function (S, x) {
                    (g.onload = S), (g.onerror = x);
                })),
                    le(c, "link", i),
                    (e.instance = c);
            }
            s.stylesheets === null && (s.stylesheets = new Map()),
                s.stylesheets.set(e, t),
                (t = e.state.preload) &&
                    !(e.state.loading & 3) &&
                    (s.count++,
                    (e = xr.bind(s)),
                    t.addEventListener("load", e),
                    t.addEventListener("error", e));
        }
    }
    function ax() {
        if (Bs === null) throw Error(r(475));
        var t = Bs;
        return (
            t.stylesheets && t.count === 0 && wc(t, t.stylesheets),
            0 < t.count
                ? function (e) {
                      var i = setTimeout(function () {
                          if (
                              (t.stylesheets && wc(t, t.stylesheets),
                              t.unsuspend)
                          ) {
                              var s = t.unsuspend;
                              (t.unsuspend = null), s();
                          }
                      }, 6e4);
                      return (
                          (t.unsuspend = e),
                          function () {
                              (t.unsuspend = null), clearTimeout(i);
                          }
                      );
                  }
                : null
        );
    }
    function xr() {
        if ((this.count--, this.count === 0)) {
            if (this.stylesheets) wc(this, this.stylesheets);
            else if (this.unsuspend) {
                var t = this.unsuspend;
                (this.unsuspend = null), t();
            }
        }
    }
    var Tr = null;
    function wc(t, e) {
        (t.stylesheets = null),
            t.unsuspend !== null &&
                (t.count++,
                (Tr = new Map()),
                e.forEach(sx, t),
                (Tr = null),
                xr.call(t));
    }
    function sx(t, e) {
        if (!(e.state.loading & 4)) {
            var i = Tr.get(t);
            if (i) var s = i.get(null);
            else {
                (i = new Map()), Tr.set(t, i);
                for (
                    var o = t.querySelectorAll(
                            "link[data-precedence],style[data-precedence]"
                        ),
                        c = 0;
                    c < o.length;
                    c++
                ) {
                    var g = o[c];
                    (g.nodeName === "LINK" ||
                        g.getAttribute("media") !== "not all") &&
                        (i.set(g.dataset.precedence, g), (s = g));
                }
                s && i.set(null, s);
            }
            (o = e.instance),
                (g = o.getAttribute("data-precedence")),
                (c = i.get(g) || s),
                c === s && i.set(null, o),
                i.set(g, o),
                this.count++,
                (s = xr.bind(this)),
                o.addEventListener("load", s),
                o.addEventListener("error", s),
                c
                    ? c.parentNode.insertBefore(o, c.nextSibling)
                    : ((t = t.nodeType === 9 ? t.head : t),
                      t.insertBefore(o, t.firstChild)),
                (e.state.loading |= 4);
        }
    }
    var Vs = {
        $$typeof: T,
        Provider: null,
        Consumer: null,
        _currentValue: mt,
        _currentValue2: mt,
        _threadCount: 0,
    };
    function lx(t, e, i, s, o, c, g, S) {
        (this.tag = 1),
            (this.containerInfo = t),
            (this.finishedWork =
                this.pingCache =
                this.current =
                this.pendingChildren =
                    null),
            (this.timeoutHandle = -1),
            (this.callbackNode =
                this.next =
                this.pendingContext =
                this.context =
                this.cancelPendingCommit =
                    null),
            (this.callbackPriority = 0),
            (this.expirationTimes = Do(-1)),
            (this.entangledLanes =
                this.shellSuspendCounter =
                this.errorRecoveryDisabledLanes =
                this.finishedLanes =
                this.expiredLanes =
                this.warmLanes =
                this.pingedLanes =
                this.suspendedLanes =
                this.pendingLanes =
                    0),
            (this.entanglements = Do(0)),
            (this.hiddenUpdates = Do(null)),
            (this.identifierPrefix = s),
            (this.onUncaughtError = o),
            (this.onCaughtError = c),
            (this.onRecoverableError = g),
            (this.pooledCache = null),
            (this.pooledCacheLanes = 0),
            (this.formState = S),
            (this.incompleteTransitions = new Map());
    }
    function eg(t, e, i, s, o, c, g, S, x, w, B, X) {
        return (
            (t = new lx(t, e, i, g, S, x, w, X)),
            (e = 1),
            c === !0 && (e |= 24),
            (c = He(3, null, null, e)),
            (t.current = c),
            (c.stateNode = t),
            (e = su()),
            e.refCount++,
            (t.pooledCache = e),
            e.refCount++,
            (c.memoizedState = { element: s, isDehydrated: i, cache: e }),
            Hu(c),
            t
        );
    }
    function ng(t) {
        return t ? ((t = aa), t) : aa;
    }
    function ig(t, e, i, s, o, c) {
        (o = ng(o)),
            s.context === null ? (s.context = o) : (s.pendingContext = o),
            (s = Zn(e)),
            (s.payload = { element: i }),
            (c = c === void 0 ? null : c),
            c !== null && (s.callback = c),
            (i = Qn(t, s, e)),
            i !== null && (pe(i, t, e), bs(i, t, e));
    }
    function ag(t, e) {
        if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
            var i = t.retryLane;
            t.retryLane = i !== 0 && i < e ? i : e;
        }
    }
    function _c(t, e) {
        ag(t, e), (t = t.alternate) && ag(t, e);
    }
    function sg(t) {
        if (t.tag === 13) {
            var e = qn(t, 67108864);
            e !== null && pe(e, t, 67108864), _c(t, 67108864);
        }
    }
    var Er = !0;
    function rx(t, e, i, s) {
        var o = F.T;
        F.T = null;
        var c = W.p;
        try {
            (W.p = 2), Dc(t, e, i, s);
        } finally {
            (W.p = c), (F.T = o);
        }
    }
    function ox(t, e, i, s) {
        var o = F.T;
        F.T = null;
        var c = W.p;
        try {
            (W.p = 8), Dc(t, e, i, s);
        } finally {
            (W.p = c), (F.T = o);
        }
    }
    function Dc(t, e, i, s) {
        if (Er) {
            var o = Rc(s);
            if (o === null) yc(t, e, s, Ar, i), rg(t, s);
            else if (cx(o, t, e, i, s)) s.stopPropagation();
            else if ((rg(t, s), e & 4 && -1 < ux.indexOf(t))) {
                for (; o !== null; ) {
                    var c = Zi(o);
                    if (c !== null)
                        switch (c.tag) {
                            case 3:
                                if (
                                    ((c = c.stateNode),
                                    c.current.memoizedState.isDehydrated)
                                ) {
                                    var g = hi(c.pendingLanes);
                                    if (g !== 0) {
                                        var S = c;
                                        for (
                                            S.pendingLanes |= 2,
                                                S.entangledLanes |= 2;
                                            g;

                                        ) {
                                            var x = 1 << (31 - Ee(g));
                                            (S.entanglements[1] |= x),
                                                (g &= ~x);
                                        }
                                        on(c),
                                            !(Vt & 6) &&
                                                ((rr = nn() + 500), Cs(0));
                                    }
                                }
                                break;
                            case 13:
                                (S = qn(c, 2)),
                                    S !== null && pe(S, c, 2),
                                    cr(),
                                    _c(c, 2);
                        }
                    if (
                        ((c = Rc(s)), c === null && yc(t, e, s, Ar, i), c === o)
                    )
                        break;
                    o = c;
                }
                o !== null && s.stopPropagation();
            } else yc(t, e, s, null, i);
        }
    }
    function Rc(t) {
        return (t = Bo(t)), Cc(t);
    }
    var Ar = null;
    function Cc(t) {
        if (((Ar = null), (t = pi(t)), t !== null)) {
            var e = U(t);
            if (e === null) t = null;
            else {
                var i = e.tag;
                if (i === 13) {
                    if (((t = I(e)), t !== null)) return t;
                    t = null;
                } else if (i === 3) {
                    if (e.stateNode.current.memoizedState.isDehydrated)
                        return e.tag === 3 ? e.stateNode.containerInfo : null;
                    t = null;
                } else e !== t && (t = null);
            }
        }
        return (Ar = t), null;
    }
    function lg(t) {
        switch (t) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 8;
            case "message":
                switch (Q1()) {
                    case Rd:
                        return 2;
                    case Cd:
                        return 8;
                    case Sl:
                    case F1:
                        return 32;
                    case zd:
                        return 268435456;
                    default:
                        return 32;
                }
            default:
                return 32;
        }
    }
    var zc = !1,
        ei = null,
        ni = null,
        ii = null,
        Us = new Map(),
        Hs = new Map(),
        ai = [],
        ux =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
                " "
            );
    function rg(t, e) {
        switch (t) {
            case "focusin":
            case "focusout":
                ei = null;
                break;
            case "dragenter":
            case "dragleave":
                ni = null;
                break;
            case "mouseover":
            case "mouseout":
                ii = null;
                break;
            case "pointerover":
            case "pointerout":
                Us.delete(e.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Hs.delete(e.pointerId);
        }
    }
    function qs(t, e, i, s, o, c) {
        return t === null || t.nativeEvent !== c
            ? ((t = {
                  blockedOn: e,
                  domEventName: i,
                  eventSystemFlags: s,
                  nativeEvent: c,
                  targetContainers: [o],
              }),
              e !== null && ((e = Zi(e)), e !== null && sg(e)),
              t)
            : ((t.eventSystemFlags |= s),
              (e = t.targetContainers),
              o !== null && e.indexOf(o) === -1 && e.push(o),
              t);
    }
    function cx(t, e, i, s, o) {
        switch (e) {
            case "focusin":
                return (ei = qs(ei, t, e, i, s, o)), !0;
            case "dragenter":
                return (ni = qs(ni, t, e, i, s, o)), !0;
            case "mouseover":
                return (ii = qs(ii, t, e, i, s, o)), !0;
            case "pointerover":
                var c = o.pointerId;
                return Us.set(c, qs(Us.get(c) || null, t, e, i, s, o)), !0;
            case "gotpointercapture":
                return (
                    (c = o.pointerId),
                    Hs.set(c, qs(Hs.get(c) || null, t, e, i, s, o)),
                    !0
                );
        }
        return !1;
    }
    function og(t) {
        var e = pi(t.target);
        if (e !== null) {
            var i = U(e);
            if (i !== null) {
                if (((e = i.tag), e === 13)) {
                    if (((e = I(i)), e !== null)) {
                        (t.blockedOn = e),
                            aS(t.priority, function () {
                                if (i.tag === 13) {
                                    var s = _e(),
                                        o = qn(i, s);
                                    o !== null && pe(o, i, s), _c(i, s);
                                }
                            });
                        return;
                    }
                } else if (
                    e === 3 &&
                    i.stateNode.current.memoizedState.isDehydrated
                ) {
                    t.blockedOn =
                        i.tag === 3 ? i.stateNode.containerInfo : null;
                    return;
                }
            }
        }
        t.blockedOn = null;
    }
    function Mr(t) {
        if (t.blockedOn !== null) return !1;
        for (var e = t.targetContainers; 0 < e.length; ) {
            var i = Rc(t.nativeEvent);
            if (i === null) {
                i = t.nativeEvent;
                var s = new i.constructor(i.type, i);
                (Lo = s), i.target.dispatchEvent(s), (Lo = null);
            } else
                return (e = Zi(i)), e !== null && sg(e), (t.blockedOn = i), !1;
            e.shift();
        }
        return !0;
    }
    function ug(t, e, i) {
        Mr(t) && i.delete(e);
    }
    function fx() {
        (zc = !1),
            ei !== null && Mr(ei) && (ei = null),
            ni !== null && Mr(ni) && (ni = null),
            ii !== null && Mr(ii) && (ii = null),
            Us.forEach(ug),
            Hs.forEach(ug);
    }
    function Or(t, e) {
        t.blockedOn === e &&
            ((t.blockedOn = null),
            zc ||
                ((zc = !0),
                n.unstable_scheduleCallback(n.unstable_NormalPriority, fx)));
    }
    var wr = null;
    function cg(t) {
        wr !== t &&
            ((wr = t),
            n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
                wr === t && (wr = null);
                for (var e = 0; e < t.length; e += 3) {
                    var i = t[e],
                        s = t[e + 1],
                        o = t[e + 2];
                    if (typeof s != "function") {
                        if (Cc(s || i) === null) continue;
                        break;
                    }
                    var c = Zi(i);
                    c !== null &&
                        (t.splice(e, 3),
                        (e -= 3),
                        xu(
                            c,
                            {
                                pending: !0,
                                data: o,
                                method: i.method,
                                action: s,
                            },
                            s,
                            o
                        ));
                }
            }));
    }
    function Ys(t) {
        function e(x) {
            return Or(x, t);
        }
        ei !== null && Or(ei, t),
            ni !== null && Or(ni, t),
            ii !== null && Or(ii, t),
            Us.forEach(e),
            Hs.forEach(e);
        for (var i = 0; i < ai.length; i++) {
            var s = ai[i];
            s.blockedOn === t && (s.blockedOn = null);
        }
        for (; 0 < ai.length && ((i = ai[0]), i.blockedOn === null); )
            og(i), i.blockedOn === null && ai.shift();
        if (((i = (t.ownerDocument || t).$$reactFormReplay), i != null))
            for (s = 0; s < i.length; s += 3) {
                var o = i[s],
                    c = i[s + 1],
                    g = o[ve] || null;
                if (typeof c == "function") g || cg(i);
                else if (g) {
                    var S = null;
                    if (c && c.hasAttribute("formAction")) {
                        if (((o = c), (g = c[ve] || null))) S = g.formAction;
                        else if (Cc(o) !== null) continue;
                    } else S = g.action;
                    typeof S == "function"
                        ? (i[s + 1] = S)
                        : (i.splice(s, 3), (s -= 3)),
                        cg(i);
                }
            }
    }
    function jc(t) {
        this._internalRoot = t;
    }
    (_r.prototype.render = jc.prototype.render =
        function (t) {
            var e = this._internalRoot;
            if (e === null) throw Error(r(409));
            var i = e.current,
                s = _e();
            ig(i, s, t, e, null, null);
        }),
        (_r.prototype.unmount = jc.prototype.unmount =
            function () {
                var t = this._internalRoot;
                if (t !== null) {
                    this._internalRoot = null;
                    var e = t.containerInfo;
                    t.tag === 0 && xa(),
                        ig(t.current, 2, null, t, null, null),
                        cr(),
                        (e[Pi] = null);
                }
            });
    function _r(t) {
        this._internalRoot = t;
    }
    _r.prototype.unstable_scheduleHydration = function (t) {
        if (t) {
            var e = Ud();
            t = { blockedOn: null, target: t, priority: e };
            for (
                var i = 0;
                i < ai.length && e !== 0 && e < ai[i].priority;
                i++
            );
            ai.splice(i, 0, t), i === 0 && og(t);
        }
    };
    var fg = a.version;
    if (fg !== "19.0.0") throw Error(r(527, fg, "19.0.0"));
    W.findDOMNode = function (t) {
        var e = t._reactInternals;
        if (e === void 0)
            throw typeof t.render == "function"
                ? Error(r(188))
                : ((t = Object.keys(t).join(",")), Error(r(268, t)));
        return (
            (t = L(e)),
            (t = t !== null ? et(t) : null),
            (t = t === null ? null : t.stateNode),
            t
        );
    };
    var dx = {
        bundleType: 0,
        version: "19.0.0",
        rendererPackageName: "react-dom",
        currentDispatcherRef: F,
        findFiberByHostInstance: pi,
        reconcilerVersion: "19.0.0",
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
        var Dr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Dr.isDisabled && Dr.supportsFiber)
            try {
                (Pa = Dr.inject(dx)), (Te = Dr);
            } catch {}
    }
    return (
        (ks.createRoot = function (t, e) {
            if (!u(t)) throw Error(r(299));
            var i = !1,
                s = "",
                o = _p,
                c = Dp,
                g = Rp,
                S = null;
            return (
                e != null &&
                    (e.unstable_strictMode === !0 && (i = !0),
                    e.identifierPrefix !== void 0 && (s = e.identifierPrefix),
                    e.onUncaughtError !== void 0 && (o = e.onUncaughtError),
                    e.onCaughtError !== void 0 && (c = e.onCaughtError),
                    e.onRecoverableError !== void 0 &&
                        (g = e.onRecoverableError),
                    e.unstable_transitionCallbacks !== void 0 &&
                        (S = e.unstable_transitionCallbacks)),
                (e = eg(t, 1, !1, null, null, i, s, o, c, g, S, null)),
                (t[Pi] = e.current),
                gc(t.nodeType === 8 ? t.parentNode : t),
                new jc(e)
            );
        }),
        (ks.hydrateRoot = function (t, e, i) {
            if (!u(t)) throw Error(r(299));
            var s = !1,
                o = "",
                c = _p,
                g = Dp,
                S = Rp,
                x = null,
                w = null;
            return (
                i != null &&
                    (i.unstable_strictMode === !0 && (s = !0),
                    i.identifierPrefix !== void 0 && (o = i.identifierPrefix),
                    i.onUncaughtError !== void 0 && (c = i.onUncaughtError),
                    i.onCaughtError !== void 0 && (g = i.onCaughtError),
                    i.onRecoverableError !== void 0 &&
                        (S = i.onRecoverableError),
                    i.unstable_transitionCallbacks !== void 0 &&
                        (x = i.unstable_transitionCallbacks),
                    i.formState !== void 0 && (w = i.formState)),
                (e = eg(t, 1, !0, e, i ?? null, s, o, c, g, S, x, w)),
                (e.context = ng(null)),
                (i = e.current),
                (s = _e()),
                (o = Zn(s)),
                (o.callback = null),
                Qn(i, o, s),
                (e.current.lanes = s),
                Qa(e, s),
                on(e),
                (t[Pi] = e.current),
                gc(t),
                new _r(e)
            );
        }),
        (ks.version = "19.0.0"),
        ks
    );
}
var xg;
function Ax() {
    if (xg) return Bc.exports;
    xg = 1;
    function n() {
        if (
            !(
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
                typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
            )
        )
            try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
            } catch (a) {
                console.error(a);
            }
    }
    return n(), (Bc.exports = Ex()), Bc.exports;
}
var Mx = Ax();
const Dy = Q.createContext({});
function po(n) {
    const a = Q.useRef(null);
    return a.current === null && (a.current = n()), a.current;
}
const Uf = Q.createContext(null),
    Hf = Q.createContext({
        transformPagePoint: (n) => n,
        isStatic: !1,
        reducedMotion: "never",
    });
function Ox(n = !0) {
    const a = Q.useContext(Uf);
    if (a === null) return [!0, null];
    const { isPresent: l, onExitComplete: r, register: u } = a,
        f = Q.useId();
    Q.useEffect(() => {
        if (n) return u(f);
    }, [n]);
    const d = Q.useCallback(() => n && r && r(f), [f, r, n]);
    return !l && r ? [!1, d] : [!0];
}
const qf = typeof window < "u",
    Yf = qf ? Q.useLayoutEffect : Q.useEffect,
    ge = (n) => n;
let wx = ge,
    Ry = ge;
function Gf(n) {
    let a;
    return () => (a === void 0 && (a = n()), a);
}
const ki = (n, a, l) => {
        const r = a - n;
        return r === 0 ? 1 : (l - n) / r;
    },
    Nn = (n) => n * 1e3,
    Ln = (n) => n / 1e3,
    _x = { useManualTiming: !1 },
    Rr = [
        "read",
        "resolveKeyframes",
        "update",
        "preRender",
        "render",
        "postRender",
    ];
function Dx(n, a) {
    let l = new Set(),
        r = new Set(),
        u = !1,
        f = !1;
    const d = new WeakSet();
    let h = { delta: 0, timestamp: 0, isProcessing: !1 };
    function p(y) {
        d.has(y) && (m.schedule(y), n()), y(h);
    }
    const m = {
        schedule: (y, v = !1, b = !1) => {
            const O = b && u ? l : r;
            return v && d.add(y), O.has(y) || O.add(y), y;
        },
        cancel: (y) => {
            r.delete(y), d.delete(y);
        },
        process: (y) => {
            if (((h = y), u)) {
                f = !0;
                return;
            }
            (u = !0),
                ([l, r] = [r, l]),
                l.forEach(p),
                l.clear(),
                (u = !1),
                f && ((f = !1), m.process(y));
        },
    };
    return m;
}
const Rx = 40;
function Cy(n, a) {
    let l = !1,
        r = !0;
    const u = { delta: 0, timestamp: 0, isProcessing: !1 },
        f = () => (l = !0),
        d = Rr.reduce((N, k) => ((N[k] = Dx(f)), N), {}),
        {
            read: h,
            resolveKeyframes: p,
            update: m,
            preRender: y,
            render: v,
            postRender: b,
        } = d,
        T = () => {
            const N = performance.now();
            (l = !1),
                (u.delta = r
                    ? 1e3 / 60
                    : Math.max(Math.min(N - u.timestamp, Rx), 1)),
                (u.timestamp = N),
                (u.isProcessing = !0),
                h.process(u),
                p.process(u),
                m.process(u),
                y.process(u),
                v.process(u),
                b.process(u),
                (u.isProcessing = !1),
                l && a && ((r = !1), n(T));
        },
        O = () => {
            (l = !0), (r = !0), u.isProcessing || n(T);
        };
    return {
        schedule: Rr.reduce((N, k) => {
            const G = d[k];
            return (
                (N[k] = (J, H = !1, Z = !1) => (l || O(), G.schedule(J, H, Z))),
                N
            );
        }, {}),
        cancel: (N) => {
            for (let k = 0; k < Rr.length; k++) d[Rr[k]].cancel(N);
        },
        state: u,
        steps: d,
    };
}
const {
        schedule: Ot,
        cancel: en,
        state: ne,
        steps: qc,
    } = Cy(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ge, !0),
    zy = Q.createContext({ strict: !1 }),
    Tg = {
        animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
        ],
        exit: ["exit"],
        drag: ["drag", "dragControls"],
        focus: ["whileFocus"],
        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
        layout: ["layout", "layoutId"],
    },
    Ba = {};
for (const n in Tg) Ba[n] = { isEnabled: (a) => Tg[n].some((l) => !!a[l]) };
function Cx(n) {
    for (const a in n) Ba[a] = { ...Ba[a], ...n[a] };
}
const zx = new Set([
    "animate",
    "exit",
    "variants",
    "initial",
    "style",
    "values",
    "variants",
    "transition",
    "transformTemplate",
    "custom",
    "inherit",
    "onBeforeLayoutMeasure",
    "onAnimationStart",
    "onAnimationComplete",
    "onUpdate",
    "onDragStart",
    "onDrag",
    "onDragEnd",
    "onMeasureDragConstraints",
    "onDirectionLock",
    "onDragTransitionEnd",
    "_dragX",
    "_dragY",
    "onHoverStart",
    "onHoverEnd",
    "onViewportEnter",
    "onViewportLeave",
    "globalTapTarget",
    "ignoreStrict",
    "viewport",
]);
function Ir(n) {
    return (
        n.startsWith("while") ||
        (n.startsWith("drag") && n !== "draggable") ||
        n.startsWith("layout") ||
        n.startsWith("onTap") ||
        n.startsWith("onPan") ||
        n.startsWith("onLayout") ||
        zx.has(n)
    );
}
let jy = (n) => !Ir(n);
function jx(n) {
    n && (jy = (a) => (a.startsWith("on") ? !Ir(a) : n(a)));
}
try {
    jx(require("@emotion/is-prop-valid").default);
} catch {}
function Nx(n, a, l) {
    const r = {};
    for (const u in n)
        (u === "values" && typeof n.values == "object") ||
            ((jy(u) ||
                (l === !0 && Ir(u)) ||
                (!a && !Ir(u)) ||
                (n.draggable && u.startsWith("onDrag"))) &&
                (r[u] = n[u]));
    return r;
}
function Lx(n) {
    if (typeof Proxy > "u") return n;
    const a = new Map(),
        l = (...r) => n(...r);
    return new Proxy(l, {
        get: (r, u) =>
            u === "create" ? n : (a.has(u) || a.set(u, n(u)), a.get(u)),
    });
}
const mo = Q.createContext({});
function go(n) {
    return n !== null && typeof n == "object" && typeof n.start == "function";
}
function nl(n) {
    return typeof n == "string" || Array.isArray(n);
}
const kf = [
        "animate",
        "whileInView",
        "whileFocus",
        "whileHover",
        "whileTap",
        "whileDrag",
        "exit",
    ],
    Xf = ["initial", ...kf];
function yo(n) {
    return go(n.animate) || Xf.some((a) => nl(n[a]));
}
function Ny(n) {
    return !!(yo(n) || n.variants);
}
function Bx(n, a) {
    if (yo(n)) {
        const { initial: l, animate: r } = n;
        return {
            initial: l === !1 || nl(l) ? l : void 0,
            animate: nl(r) ? r : void 0,
        };
    }
    return n.inherit !== !1 ? a : {};
}
function Vx(n) {
    const { initial: a, animate: l } = Bx(n, Q.useContext(mo));
    return Q.useMemo(() => ({ initial: a, animate: l }), [Eg(a), Eg(l)]);
}
function Eg(n) {
    return Array.isArray(n) ? n.join(" ") : n;
}
const Ux = Symbol.for("motionComponentSymbol");
function Da(n) {
    return (
        n &&
        typeof n == "object" &&
        Object.prototype.hasOwnProperty.call(n, "current")
    );
}
function Hx(n, a, l) {
    return Q.useCallback(
        (r) => {
            r && n.onMount && n.onMount(r),
                a && (r ? a.mount(r) : a.unmount()),
                l && (typeof l == "function" ? l(r) : Da(l) && (l.current = r));
        },
        [a]
    );
}
const Kf = (n) => n.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
    qx = "framerAppearId",
    Ly = "data-" + Kf(qx),
    { schedule: Pf } = Cy(queueMicrotask, !1),
    By = Q.createContext({});
function Yx(n, a, l, r, u) {
    var f, d;
    const { visualElement: h } = Q.useContext(mo),
        p = Q.useContext(zy),
        m = Q.useContext(Uf),
        y = Q.useContext(Hf).reducedMotion,
        v = Q.useRef(null);
    (r = r || p.renderer),
        !v.current &&
            r &&
            (v.current = r(n, {
                visualState: a,
                parent: h,
                props: l,
                presenceContext: m,
                blockInitialAnimation: m ? m.initial === !1 : !1,
                reducedMotionConfig: y,
            }));
    const b = v.current,
        T = Q.useContext(By);
    b &&
        !b.projection &&
        u &&
        (b.type === "html" || b.type === "svg") &&
        Gx(v.current, l, u, T);
    const O = Q.useRef(!1);
    Q.useInsertionEffect(() => {
        b && O.current && b.update(l, m);
    });
    const R = l[Ly],
        V = Q.useRef(
            !!R &&
                !(
                    !(
                        (f = window.MotionHandoffIsComplete) === null ||
                        f === void 0
                    ) && f.call(window, R)
                ) &&
                ((d = window.MotionHasOptimisedAnimation) === null ||
                d === void 0
                    ? void 0
                    : d.call(window, R))
        );
    return (
        Yf(() => {
            b &&
                ((O.current = !0),
                (window.MotionIsMounted = !0),
                b.updateFeatures(),
                Pf.render(b.render),
                V.current &&
                    b.animationState &&
                    b.animationState.animateChanges());
        }),
        Q.useEffect(() => {
            b &&
                (!V.current &&
                    b.animationState &&
                    b.animationState.animateChanges(),
                V.current &&
                    (queueMicrotask(() => {
                        var N;
                        (N = window.MotionHandoffMarkAsComplete) === null ||
                            N === void 0 ||
                            N.call(window, R);
                    }),
                    (V.current = !1)));
        }),
        b
    );
}
function Gx(n, a, l, r) {
    const {
        layoutId: u,
        layout: f,
        drag: d,
        dragConstraints: h,
        layoutScroll: p,
        layoutRoot: m,
    } = a;
    (n.projection = new l(
        n.latestValues,
        a["data-framer-portal-id"] ? void 0 : Vy(n.parent)
    )),
        n.projection.setOptions({
            layoutId: u,
            layout: f,
            alwaysMeasureLayout: !!d || (h && Da(h)),
            visualElement: n,
            animationType: typeof f == "string" ? f : "both",
            initialPromotionConfig: r,
            layoutScroll: p,
            layoutRoot: m,
        });
}
function Vy(n) {
    if (n)
        return n.options.allowProjection !== !1 ? n.projection : Vy(n.parent);
}
function kx({
    preloadedFeatures: n,
    createVisualElement: a,
    useRender: l,
    useVisualState: r,
    Component: u,
}) {
    var f, d;
    n && Cx(n);
    function h(m, y) {
        let v;
        const b = { ...Q.useContext(Hf), ...m, layoutId: Xx(m) },
            { isStatic: T } = b,
            O = Vx(m),
            R = r(m, T);
        if (!T && qf) {
            Kx();
            const V = Px(b);
            (v = V.MeasureLayout),
                (O.visualElement = Yx(u, R, b, a, V.ProjectionNode));
        }
        return _.jsxs(mo.Provider, {
            value: O,
            children: [
                v && O.visualElement
                    ? _.jsx(v, { visualElement: O.visualElement, ...b })
                    : null,
                l(u, m, Hx(R, O.visualElement, y), R, T, O.visualElement),
            ],
        });
    }
    h.displayName = `motion.${
        typeof u == "string"
            ? u
            : `create(${
                  (d =
                      (f = u.displayName) !== null && f !== void 0
                          ? f
                          : u.name) !== null && d !== void 0
                      ? d
                      : ""
              })`
    }`;
    const p = Q.forwardRef(h);
    return (p[Ux] = u), p;
}
function Xx({ layoutId: n }) {
    const a = Q.useContext(Dy).id;
    return a && n !== void 0 ? a + "-" + n : n;
}
function Kx(n, a) {
    Q.useContext(zy).strict;
}
function Px(n) {
    const { drag: a, layout: l } = Ba;
    if (!a && !l) return {};
    const r = { ...a, ...l };
    return {
        MeasureLayout:
            (a != null && a.isEnabled(n)) || (l != null && l.isEnabled(n))
                ? r.MeasureLayout
                : void 0,
        ProjectionNode: r.ProjectionNode,
    };
}
const Uy = (n) => (a) => typeof a == "string" && a.startsWith(n),
    Zf = Uy("--"),
    Zx = Uy("var(--"),
    Qf = (n) => (Zx(n) ? Qx.test(n.split("/*")[0].trim()) : !1),
    Qx =
        /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
    il = {};
function Fx(n) {
    for (const a in n) (il[a] = n[a]), Zf(a) && (il[a].isCSSVariable = !0);
}
const ka = [
        "transformPerspective",
        "x",
        "y",
        "z",
        "translateX",
        "translateY",
        "translateZ",
        "scale",
        "scaleX",
        "scaleY",
        "rotate",
        "rotateX",
        "rotateY",
        "rotateZ",
        "skew",
        "skewX",
        "skewY",
    ],
    Xi = new Set(ka);
function Hy(n, { layout: a, layoutId: l }) {
    return (
        Xi.has(n) ||
        n.startsWith("origin") ||
        ((a || l !== void 0) && (!!il[n] || n === "opacity"))
    );
}
const fe = (n) => !!(n && n.getVelocity),
    qy = (n, a) => (a && typeof n == "number" ? a.transform(n) : n),
    pn = (n, a, l) => (l > a ? a : l < n ? n : l),
    Xa = {
        test: (n) => typeof n == "number",
        parse: parseFloat,
        transform: (n) => n,
    },
    al = { ...Xa, transform: (n) => pn(0, 1, n) },
    Cr = { ...Xa, default: 1 },
    cl = (n) => ({
        test: (a) =>
            typeof a == "string" && a.endsWith(n) && a.split(" ").length === 1,
        parse: parseFloat,
        transform: (a) => `${a}${n}`,
    }),
    ri = cl("deg"),
    dn = cl("%"),
    ft = cl("px"),
    Wx = cl("vh"),
    Jx = cl("vw"),
    Ag = {
        ...dn,
        parse: (n) => dn.parse(n) / 100,
        transform: (n) => dn.transform(n * 100),
    },
    $x = {
        borderWidth: ft,
        borderTopWidth: ft,
        borderRightWidth: ft,
        borderBottomWidth: ft,
        borderLeftWidth: ft,
        borderRadius: ft,
        radius: ft,
        borderTopLeftRadius: ft,
        borderTopRightRadius: ft,
        borderBottomRightRadius: ft,
        borderBottomLeftRadius: ft,
        width: ft,
        maxWidth: ft,
        height: ft,
        maxHeight: ft,
        top: ft,
        right: ft,
        bottom: ft,
        left: ft,
        padding: ft,
        paddingTop: ft,
        paddingRight: ft,
        paddingBottom: ft,
        paddingLeft: ft,
        margin: ft,
        marginTop: ft,
        marginRight: ft,
        marginBottom: ft,
        marginLeft: ft,
        backgroundPositionX: ft,
        backgroundPositionY: ft,
    },
    Ix = {
        rotate: ri,
        rotateX: ri,
        rotateY: ri,
        rotateZ: ri,
        scale: Cr,
        scaleX: Cr,
        scaleY: Cr,
        scaleZ: Cr,
        skew: ri,
        skewX: ri,
        skewY: ri,
        distance: ft,
        translateX: ft,
        translateY: ft,
        translateZ: ft,
        x: ft,
        y: ft,
        z: ft,
        perspective: ft,
        transformPerspective: ft,
        opacity: al,
        originX: Ag,
        originY: Ag,
        originZ: ft,
    },
    Mg = { ...Xa, transform: Math.round },
    Ff = {
        ...$x,
        ...Ix,
        zIndex: Mg,
        size: ft,
        fillOpacity: al,
        strokeOpacity: al,
        numOctaves: Mg,
    },
    tT = {
        x: "translateX",
        y: "translateY",
        z: "translateZ",
        transformPerspective: "perspective",
    },
    eT = ka.length;
function nT(n, a, l) {
    let r = "",
        u = !0;
    for (let f = 0; f < eT; f++) {
        const d = ka[f],
            h = n[d];
        if (h === void 0) continue;
        let p = !0;
        if (
            (typeof h == "number"
                ? (p = h === (d.startsWith("scale") ? 1 : 0))
                : (p = parseFloat(h) === 0),
            !p || l)
        ) {
            const m = qy(h, Ff[d]);
            if (!p) {
                u = !1;
                const y = tT[d] || d;
                r += `${y}(${m}) `;
            }
            l && (a[d] = m);
        }
    }
    return (r = r.trim()), l ? (r = l(a, u ? "" : r)) : u && (r = "none"), r;
}
function Wf(n, a, l) {
    const { style: r, vars: u, transformOrigin: f } = n;
    let d = !1,
        h = !1;
    for (const p in a) {
        const m = a[p];
        if (Xi.has(p)) {
            d = !0;
            continue;
        } else if (Zf(p)) {
            u[p] = m;
            continue;
        } else {
            const y = qy(m, Ff[p]);
            p.startsWith("origin") ? ((h = !0), (f[p] = y)) : (r[p] = y);
        }
    }
    if (
        (a.transform ||
            (d || l
                ? (r.transform = nT(a, n.transform, l))
                : r.transform && (r.transform = "none")),
        h)
    ) {
        const { originX: p = "50%", originY: m = "50%", originZ: y = 0 } = f;
        r.transformOrigin = `${p} ${m} ${y}`;
    }
}
const Jf = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function Yy(n, a, l) {
    for (const r in a) !fe(a[r]) && !Hy(r, l) && (n[r] = a[r]);
}
function iT({ transformTemplate: n }, a) {
    return Q.useMemo(() => {
        const l = Jf();
        return Wf(l, a, n), Object.assign({}, l.vars, l.style);
    }, [a]);
}
function aT(n, a) {
    const l = n.style || {},
        r = {};
    return Yy(r, l, n), Object.assign(r, iT(n, a)), r;
}
function sT(n, a) {
    const l = {},
        r = aT(n, a);
    return (
        n.drag &&
            n.dragListener !== !1 &&
            ((l.draggable = !1),
            (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
            (r.touchAction =
                n.drag === !0 ? "none" : `pan-${n.drag === "x" ? "y" : "x"}`)),
        n.tabIndex === void 0 &&
            (n.onTap || n.onTapStart || n.whileTap) &&
            (l.tabIndex = 0),
        (l.style = r),
        l
    );
}
const lT = [
    "animate",
    "circle",
    "defs",
    "desc",
    "ellipse",
    "g",
    "image",
    "line",
    "filter",
    "marker",
    "mask",
    "metadata",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "rect",
    "stop",
    "switch",
    "symbol",
    "svg",
    "text",
    "tspan",
    "use",
    "view",
];
function $f(n) {
    return typeof n != "string" || n.includes("-")
        ? !1
        : !!(lT.indexOf(n) > -1 || /[A-Z]/u.test(n));
}
const rT = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
    oT = { offset: "strokeDashoffset", array: "strokeDasharray" };
function uT(n, a, l = 1, r = 0, u = !0) {
    n.pathLength = 1;
    const f = u ? rT : oT;
    n[f.offset] = ft.transform(-r);
    const d = ft.transform(a),
        h = ft.transform(l);
    n[f.array] = `${d} ${h}`;
}
function Og(n, a, l) {
    return typeof n == "string" ? n : ft.transform(a + l * n);
}
function cT(n, a, l) {
    const r = Og(a, n.x, n.width),
        u = Og(l, n.y, n.height);
    return `${r} ${u}`;
}
function If(
    n,
    {
        attrX: a,
        attrY: l,
        attrScale: r,
        originX: u,
        originY: f,
        pathLength: d,
        pathSpacing: h = 1,
        pathOffset: p = 0,
        ...m
    },
    y,
    v
) {
    if ((Wf(n, m, v), y)) {
        n.style.viewBox && (n.attrs.viewBox = n.style.viewBox);
        return;
    }
    (n.attrs = n.style), (n.style = {});
    const { attrs: b, style: T, dimensions: O } = n;
    b.transform && (O && (T.transform = b.transform), delete b.transform),
        O &&
            (u !== void 0 || f !== void 0 || T.transform) &&
            (T.transformOrigin = cT(
                O,
                u !== void 0 ? u : 0.5,
                f !== void 0 ? f : 0.5
            )),
        a !== void 0 && (b.x = a),
        l !== void 0 && (b.y = l),
        r !== void 0 && (b.scale = r),
        d !== void 0 && uT(b, d, h, p, !1);
}
const Gy = () => ({ ...Jf(), attrs: {} }),
    td = (n) => typeof n == "string" && n.toLowerCase() === "svg";
function fT(n, a, l, r) {
    const u = Q.useMemo(() => {
        const f = Gy();
        return (
            If(f, a, td(r), n.transformTemplate),
            { ...f.attrs, style: { ...f.style } }
        );
    }, [a]);
    if (n.style) {
        const f = {};
        Yy(f, n.style, n), (u.style = { ...f, ...u.style });
    }
    return u;
}
function dT(n = !1) {
    return (l, r, u, { latestValues: f }, d) => {
        const p = ($f(l) ? fT : sT)(r, f, d, l),
            m = Nx(r, typeof l == "string", n),
            y = l !== Q.Fragment ? { ...m, ...p, ref: u } : {},
            { children: v } = r,
            b = Q.useMemo(() => (fe(v) ? v.get() : v), [v]);
        return Q.createElement(l, { ...y, children: b });
    };
}
function wg(n) {
    const a = [{}, {}];
    return (
        n == null ||
            n.values.forEach((l, r) => {
                (a[0][r] = l.get()), (a[1][r] = l.getVelocity());
            }),
        a
    );
}
function ed(n, a, l, r) {
    if (typeof a == "function") {
        const [u, f] = wg(r);
        a = a(l !== void 0 ? l : n.custom, u, f);
    }
    if (
        (typeof a == "string" && (a = n.variants && n.variants[a]),
        typeof a == "function")
    ) {
        const [u, f] = wg(r);
        a = a(l !== void 0 ? l : n.custom, u, f);
    }
    return a;
}
const pf = (n) => Array.isArray(n),
    hT = (n) => !!(n && typeof n == "object" && n.mix && n.toValue),
    pT = (n) => (pf(n) ? n[n.length - 1] || 0 : n);
function kr(n) {
    const a = fe(n) ? n.get() : n;
    return hT(a) ? a.toValue() : a;
}
function mT(
    { scrapeMotionValuesFromProps: n, createRenderState: a, onUpdate: l },
    r,
    u,
    f
) {
    const d = { latestValues: gT(r, u, f, n), renderState: a() };
    return (
        l &&
            ((d.onMount = (h) => l({ props: r, current: h, ...d })),
            (d.onUpdate = (h) => l(h))),
        d
    );
}
const ky = (n) => (a, l) => {
    const r = Q.useContext(mo),
        u = Q.useContext(Uf),
        f = () => mT(n, a, r, u);
    return l ? f() : po(f);
};
function gT(n, a, l, r) {
    const u = {},
        f = r(n, {});
    for (const b in f) u[b] = kr(f[b]);
    let { initial: d, animate: h } = n;
    const p = yo(n),
        m = Ny(n);
    a &&
        m &&
        !p &&
        n.inherit !== !1 &&
        (d === void 0 && (d = a.initial), h === void 0 && (h = a.animate));
    let y = l ? l.initial === !1 : !1;
    y = y || d === !1;
    const v = y ? h : d;
    if (v && typeof v != "boolean" && !go(v)) {
        const b = Array.isArray(v) ? v : [v];
        for (let T = 0; T < b.length; T++) {
            const O = ed(n, b[T]);
            if (O) {
                const { transitionEnd: R, transition: V, ...N } = O;
                for (const k in N) {
                    let G = N[k];
                    if (Array.isArray(G)) {
                        const J = y ? G.length - 1 : 0;
                        G = G[J];
                    }
                    G !== null && (u[k] = G);
                }
                for (const k in R) u[k] = R[k];
            }
        }
    }
    return u;
}
function nd(n, a, l) {
    var r;
    const { style: u } = n,
        f = {};
    for (const d in u)
        (fe(u[d]) ||
            (a.style && fe(a.style[d])) ||
            Hy(d, n) ||
            ((r = l == null ? void 0 : l.getValue(d)) === null || r === void 0
                ? void 0
                : r.liveStyle) !== void 0) &&
            (f[d] = u[d]);
    return f;
}
const yT = {
    useVisualState: ky({
        scrapeMotionValuesFromProps: nd,
        createRenderState: Jf,
    }),
};
function Xy(n, a) {
    try {
        a.dimensions =
            typeof n.getBBox == "function"
                ? n.getBBox()
                : n.getBoundingClientRect();
    } catch {
        a.dimensions = { x: 0, y: 0, width: 0, height: 0 };
    }
}
function Ky(n, { style: a, vars: l }, r, u) {
    Object.assign(n.style, a, u && u.getProjectionStyles(r));
    for (const f in l) n.style.setProperty(f, l[f]);
}
const Py = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
]);
function Zy(n, a, l, r) {
    Ky(n, a, void 0, r);
    for (const u in a.attrs) n.setAttribute(Py.has(u) ? u : Kf(u), a.attrs[u]);
}
function Qy(n, a, l) {
    const r = nd(n, a, l);
    for (const u in n)
        if (fe(n[u]) || fe(a[u])) {
            const f =
                ka.indexOf(u) !== -1
                    ? "attr" + u.charAt(0).toUpperCase() + u.substring(1)
                    : u;
            r[f] = n[u];
        }
    return r;
}
const _g = ["x", "y", "width", "height", "cx", "cy", "r"],
    vT = {
        useVisualState: ky({
            scrapeMotionValuesFromProps: Qy,
            createRenderState: Gy,
            onUpdate: ({
                props: n,
                prevProps: a,
                current: l,
                renderState: r,
                latestValues: u,
            }) => {
                if (!l) return;
                let f = !!n.drag;
                if (!f) {
                    for (const h in u)
                        if (Xi.has(h)) {
                            f = !0;
                            break;
                        }
                }
                if (!f) return;
                let d = !a;
                if (a)
                    for (let h = 0; h < _g.length; h++) {
                        const p = _g[h];
                        n[p] !== a[p] && (d = !0);
                    }
                d &&
                    Ot.read(() => {
                        Xy(l, r),
                            Ot.render(() => {
                                If(r, u, td(l.tagName), n.transformTemplate),
                                    Zy(l, r);
                            });
                    });
            },
        }),
    };
function ST(n, a) {
    return function (
        r,
        { forwardMotionProps: u } = { forwardMotionProps: !1 }
    ) {
        const d = {
            ...($f(r) ? vT : yT),
            preloadedFeatures: n,
            useRender: dT(u),
            createVisualElement: a,
            Component: r,
        };
        return kx(d);
    };
}
function sl(n, a, l) {
    const r = n.getProps();
    return ed(r, a, l !== void 0 ? l : r.custom, n);
}
const Fy = Gf(() => window.ScrollTimeline !== void 0);
class bT {
    constructor(a) {
        (this.stop = () => this.runAll("stop")),
            (this.animations = a.filter(Boolean));
    }
    get finished() {
        return Promise.all(
            this.animations.map((a) => ("finished" in a ? a.finished : a))
        );
    }
    getAll(a) {
        return this.animations[0][a];
    }
    setAll(a, l) {
        for (let r = 0; r < this.animations.length; r++)
            this.animations[r][a] = l;
    }
    attachTimeline(a, l) {
        const r = this.animations.map((u) => {
            if (Fy() && u.attachTimeline) return u.attachTimeline(a);
            if (typeof l == "function") return l(u);
        });
        return () => {
            r.forEach((u, f) => {
                u && u(), this.animations[f].stop();
            });
        };
    }
    get time() {
        return this.getAll("time");
    }
    set time(a) {
        this.setAll("time", a);
    }
    get speed() {
        return this.getAll("speed");
    }
    set speed(a) {
        this.setAll("speed", a);
    }
    get startTime() {
        return this.getAll("startTime");
    }
    get duration() {
        let a = 0;
        for (let l = 0; l < this.animations.length; l++)
            a = Math.max(a, this.animations[l].duration);
        return a;
    }
    runAll(a) {
        this.animations.forEach((l) => l[a]());
    }
    flatten() {
        this.runAll("flatten");
    }
    play() {
        this.runAll("play");
    }
    pause() {
        this.runAll("pause");
    }
    cancel() {
        this.runAll("cancel");
    }
    complete() {
        this.runAll("complete");
    }
}
class xT extends bT {
    then(a, l) {
        return Promise.all(this.animations).then(a).catch(l);
    }
}
function id(n, a) {
    return n ? n[a] || n.default || n : void 0;
}
const mf = 2e4;
function Wy(n) {
    let a = 0;
    const l = 50;
    let r = n.next(a);
    for (; !r.done && a < mf; ) (a += l), (r = n.next(a));
    return a >= mf ? 1 / 0 : a;
}
function ad(n) {
    return typeof n == "function";
}
function Dg(n, a) {
    (n.timeline = a), (n.onfinish = null);
}
const sd = (n) => Array.isArray(n) && typeof n[0] == "number",
    TT = { linearEasing: void 0 };
function ET(n, a) {
    const l = Gf(n);
    return () => {
        var r;
        return (r = TT[a]) !== null && r !== void 0 ? r : l();
    };
}
const to = ET(() => {
        try {
            document
                .createElement("div")
                .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
        } catch {
            return !1;
        }
        return !0;
    }, "linearEasing"),
    Jy = (n, a, l = 10) => {
        let r = "";
        const u = Math.max(Math.round(a / l), 2);
        for (let f = 0; f < u; f++) r += n(ki(0, u - 1, f)) + ", ";
        return `linear(${r.substring(0, r.length - 2)})`;
    };
function $y(n) {
    return !!(
        (typeof n == "function" && to()) ||
        !n ||
        (typeof n == "string" && (n in gf || to())) ||
        sd(n) ||
        (Array.isArray(n) && n.every($y))
    );
}
const Zs = ([n, a, l, r]) => `cubic-bezier(${n}, ${a}, ${l}, ${r})`,
    gf = {
        linear: "linear",
        ease: "ease",
        easeIn: "ease-in",
        easeOut: "ease-out",
        easeInOut: "ease-in-out",
        circIn: Zs([0, 0.65, 0.55, 1]),
        circOut: Zs([0.55, 0, 1, 0.45]),
        backIn: Zs([0.31, 0.01, 0.66, -0.59]),
        backOut: Zs([0.33, 1.53, 0.69, 0.99]),
    };
function Iy(n, a) {
    if (n)
        return typeof n == "function" && to()
            ? Jy(n, a)
            : sd(n)
              ? Zs(n)
              : Array.isArray(n)
                ? n.map((l) => Iy(l, a) || gf.easeOut)
                : gf[n];
}
const Ie = { x: !1, y: !1 };
function tv() {
    return Ie.x || Ie.y;
}
function ev(n, a, l) {
    var r;
    if (n instanceof EventTarget) return [n];
    if (typeof n == "string") {
        let u = document;
        const f =
            (r = void 0) !== null && r !== void 0 ? r : u.querySelectorAll(n);
        return f ? Array.from(f) : [];
    }
    return Array.from(n);
}
function nv(n, a) {
    const l = ev(n),
        r = new AbortController(),
        u = { passive: !0, ...a, signal: r.signal };
    return [l, u, () => r.abort()];
}
function Rg(n) {
    return !(n.pointerType === "touch" || tv());
}
function AT(n, a, l = {}) {
    const [r, u, f] = nv(n, l),
        d = (h) => {
            if (!Rg(h)) return;
            const { target: p } = h,
                m = a(p, h);
            if (typeof m != "function" || !p) return;
            const y = (v) => {
                Rg(v) && (m(v), p.removeEventListener("pointerleave", y));
            };
            p.addEventListener("pointerleave", y, u);
        };
    return (
        r.forEach((h) => {
            h.addEventListener("pointerenter", d, u);
        }),
        f
    );
}
function eo(n, a) {
    const l = `${a}PointerCapture`;
    if (n.target instanceof Element && l in n.target && n.pointerId !== void 0)
        try {
            n.target[l](n.pointerId);
        } catch {}
}
const iv = (n, a) => (a ? (n === a ? !0 : iv(n, a.parentElement)) : !1),
    ld = (n) =>
        n.pointerType === "mouse"
            ? typeof n.button != "number" || n.button <= 0
            : n.isPrimary !== !1,
    MT = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function OT(n) {
    return MT.has(n.tagName) || n.tabIndex !== -1;
}
const Qs = new WeakSet();
function Cg(n) {
    return (a) => {
        a.key === "Enter" && n(a);
    };
}
function Yc(n, a) {
    n.dispatchEvent(
        new PointerEvent("pointer" + a, { isPrimary: !0, bubbles: !0 })
    );
}
const wT = (n, a) => {
    const l = n.currentTarget;
    if (!l) return;
    const r = Cg(() => {
        if (Qs.has(l)) return;
        Yc(l, "down");
        const u = Cg(() => {
                Yc(l, "up");
            }),
            f = () => Yc(l, "cancel");
        l.addEventListener("keyup", u, a), l.addEventListener("blur", f, a);
    });
    l.addEventListener("keydown", r, a),
        l.addEventListener(
            "blur",
            () => l.removeEventListener("keydown", r),
            a
        );
};
function zg(n) {
    return ld(n) && !tv();
}
function _T(n, a, l = {}) {
    const [r, u, f] = nv(n, l),
        d = (h) => {
            const p = h.currentTarget;
            if (!p || !zg(h) || Qs.has(p)) return;
            Qs.add(p), eo(h, "set");
            const m = a(p, h),
                y = (T, O) => {
                    p.removeEventListener("pointerup", v),
                        p.removeEventListener("pointercancel", b),
                        eo(T, "release"),
                        !(!zg(T) || !Qs.has(p)) &&
                            (Qs.delete(p),
                            typeof m == "function" && m(T, { success: O }));
                },
                v = (T) => {
                    (
                        T.isTrusted
                            ? DT(
                                  T,
                                  p instanceof Element
                                      ? p.getBoundingClientRect()
                                      : {
                                            left: 0,
                                            top: 0,
                                            right: window.innerWidth,
                                            bottom: window.innerHeight,
                                        }
                              )
                            : !1
                    )
                        ? y(T, !1)
                        : y(T, !(p instanceof Element) || iv(p, T.target));
                },
                b = (T) => {
                    y(T, !1);
                };
            p.addEventListener("pointerup", v, u),
                p.addEventListener("pointercancel", b, u),
                p.addEventListener("lostpointercapture", b, u);
        };
    return (
        r.forEach((h) => {
            h = l.useGlobalTarget ? window : h;
            let p = !1;
            h instanceof HTMLElement &&
                ((p = !0),
                !OT(h) &&
                    h.getAttribute("tabindex") === null &&
                    (h.tabIndex = 0)),
                h.addEventListener("pointerdown", d, u),
                p && h.addEventListener("focus", (m) => wT(m, u), u);
        }),
        f
    );
}
function DT(n, a) {
    return (
        n.clientX < a.left ||
        n.clientX > a.right ||
        n.clientY < a.top ||
        n.clientY > a.bottom
    );
}
function RT(n) {
    return n === "x" || n === "y"
        ? Ie[n]
            ? null
            : ((Ie[n] = !0),
              () => {
                  Ie[n] = !1;
              })
        : Ie.x || Ie.y
          ? null
          : ((Ie.x = Ie.y = !0),
            () => {
                Ie.x = Ie.y = !1;
            });
}
const av = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...ka,
]);
let Xr;
function CT() {
    Xr = void 0;
}
const hn = {
    now: () => (
        Xr === void 0 &&
            hn.set(
                ne.isProcessing || _x.useManualTiming
                    ? ne.timestamp
                    : performance.now()
            ),
        Xr
    ),
    set: (n) => {
        (Xr = n), queueMicrotask(CT);
    },
};
function rd(n, a) {
    n.indexOf(a) === -1 && n.push(a);
}
function od(n, a) {
    const l = n.indexOf(a);
    l > -1 && n.splice(l, 1);
}
class ud {
    constructor() {
        this.subscriptions = [];
    }
    add(a) {
        return rd(this.subscriptions, a), () => od(this.subscriptions, a);
    }
    notify(a, l, r) {
        const u = this.subscriptions.length;
        if (u)
            if (u === 1) this.subscriptions[0](a, l, r);
            else
                for (let f = 0; f < u; f++) {
                    const d = this.subscriptions[f];
                    d && d(a, l, r);
                }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
}
function cd(n, a) {
    return a ? n * (1e3 / a) : 0;
}
const jg = 30,
    zT = (n) => !isNaN(parseFloat(n)),
    Ws = { current: void 0 };
class jT {
    constructor(a, l = {}) {
        (this.version = "12.4.7"),
            (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (r, u = !0) => {
                const f = hn.now();
                this.updatedAt !== f && this.setPrevFrameValue(),
                    (this.prev = this.current),
                    this.setCurrent(r),
                    this.current !== this.prev &&
                        this.events.change &&
                        this.events.change.notify(this.current),
                    u &&
                        this.events.renderRequest &&
                        this.events.renderRequest.notify(this.current);
            }),
            (this.hasAnimated = !1),
            this.setCurrent(a),
            (this.owner = l.owner);
    }
    setCurrent(a) {
        (this.current = a),
            (this.updatedAt = hn.now()),
            this.canTrackVelocity === null &&
                a !== void 0 &&
                (this.canTrackVelocity = zT(this.current));
    }
    setPrevFrameValue(a = this.current) {
        (this.prevFrameValue = a), (this.prevUpdatedAt = this.updatedAt);
    }
    onChange(a) {
        return this.on("change", a);
    }
    on(a, l) {
        this.events[a] || (this.events[a] = new ud());
        const r = this.events[a].add(l);
        return a === "change"
            ? () => {
                  r(),
                      Ot.read(() => {
                          this.events.change.getSize() || this.stop();
                      });
              }
            : r;
    }
    clearListeners() {
        for (const a in this.events) this.events[a].clear();
    }
    attach(a, l) {
        (this.passiveEffect = a), (this.stopPassiveEffect = l);
    }
    set(a, l = !0) {
        !l || !this.passiveEffect
            ? this.updateAndNotify(a, l)
            : this.passiveEffect(a, this.updateAndNotify);
    }
    setWithVelocity(a, l, r) {
        this.set(l),
            (this.prev = void 0),
            (this.prevFrameValue = a),
            (this.prevUpdatedAt = this.updatedAt - r);
    }
    jump(a, l = !0) {
        this.updateAndNotify(a),
            (this.prev = a),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            l && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
    }
    get() {
        return Ws.current && Ws.current.push(this), this.current;
    }
    getPrevious() {
        return this.prev;
    }
    getVelocity() {
        const a = hn.now();
        if (
            !this.canTrackVelocity ||
            this.prevFrameValue === void 0 ||
            a - this.updatedAt > jg
        )
            return 0;
        const l = Math.min(this.updatedAt - this.prevUpdatedAt, jg);
        return cd(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            l
        );
    }
    start(a) {
        return (
            this.stop(),
            new Promise((l) => {
                (this.hasAnimated = !0),
                    (this.animation = a(l)),
                    this.events.animationStart &&
                        this.events.animationStart.notify();
            }).then(() => {
                this.events.animationComplete &&
                    this.events.animationComplete.notify(),
                    this.clearAnimation();
            })
        );
    }
    stop() {
        this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
                this.events.animationCancel.notify()),
            this.clearAnimation();
    }
    isAnimating() {
        return !!this.animation;
    }
    clearAnimation() {
        delete this.animation;
    }
    destroy() {
        this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
    }
}
function fn(n, a) {
    return new jT(n, a);
}
function NT(n, a, l) {
    n.hasValue(a) ? n.getValue(a).set(l) : n.addValue(a, fn(l));
}
function LT(n, a) {
    const l = sl(n, a);
    let { transitionEnd: r = {}, transition: u = {}, ...f } = l || {};
    f = { ...f, ...r };
    for (const d in f) {
        const h = pT(f[d]);
        NT(n, d, h);
    }
}
function BT(n) {
    return !!(fe(n) && n.add);
}
function yf(n, a) {
    const l = n.getValue("willChange");
    if (BT(l)) return l.add(a);
}
function sv(n) {
    return n.props[Ly];
}
const lv = (n, a, l) =>
        (((1 - 3 * l + 3 * a) * n + (3 * l - 6 * a)) * n + 3 * a) * n,
    VT = 1e-7,
    UT = 12;
function HT(n, a, l, r, u) {
    let f,
        d,
        h = 0;
    do (d = a + (l - a) / 2), (f = lv(d, r, u) - n), f > 0 ? (l = d) : (a = d);
    while (Math.abs(f) > VT && ++h < UT);
    return d;
}
function fl(n, a, l, r) {
    if (n === a && l === r) return ge;
    const u = (f) => HT(f, 0, 1, n, l);
    return (f) => (f === 0 || f === 1 ? f : lv(u(f), a, r));
}
const rv = (n) => (a) => (a <= 0.5 ? n(2 * a) / 2 : (2 - n(2 * (1 - a))) / 2),
    ov = (n) => (a) => 1 - n(1 - a),
    uv = fl(0.33, 1.53, 0.69, 0.99),
    fd = ov(uv),
    cv = rv(fd),
    fv = (n) =>
        (n *= 2) < 1 ? 0.5 * fd(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1))),
    dd = (n) => 1 - Math.sin(Math.acos(n)),
    dv = ov(dd),
    hv = rv(dd),
    pv = (n) => /^0[^.\s]+$/u.test(n);
function qT(n) {
    return typeof n == "number"
        ? n === 0
        : n !== null
          ? n === "none" || n === "0" || pv(n)
          : !0;
}
const Js = (n) => Math.round(n * 1e5) / 1e5,
    hd = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function YT(n) {
    return n == null;
}
const GT =
        /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
    pd = (n, a) => (l) =>
        !!(
            (typeof l == "string" && GT.test(l) && l.startsWith(n)) ||
            (a && !YT(l) && Object.prototype.hasOwnProperty.call(l, a))
        ),
    mv = (n, a, l) => (r) => {
        if (typeof r != "string") return r;
        const [u, f, d, h] = r.match(hd);
        return {
            [n]: parseFloat(u),
            [a]: parseFloat(f),
            [l]: parseFloat(d),
            alpha: h !== void 0 ? parseFloat(h) : 1,
        };
    },
    kT = (n) => pn(0, 255, n),
    Gc = { ...Xa, transform: (n) => Math.round(kT(n)) },
    Ui = {
        test: pd("rgb", "red"),
        parse: mv("red", "green", "blue"),
        transform: ({ red: n, green: a, blue: l, alpha: r = 1 }) =>
            "rgba(" +
            Gc.transform(n) +
            ", " +
            Gc.transform(a) +
            ", " +
            Gc.transform(l) +
            ", " +
            Js(al.transform(r)) +
            ")",
    };
function XT(n) {
    let a = "",
        l = "",
        r = "",
        u = "";
    return (
        n.length > 5
            ? ((a = n.substring(1, 3)),
              (l = n.substring(3, 5)),
              (r = n.substring(5, 7)),
              (u = n.substring(7, 9)))
            : ((a = n.substring(1, 2)),
              (l = n.substring(2, 3)),
              (r = n.substring(3, 4)),
              (u = n.substring(4, 5)),
              (a += a),
              (l += l),
              (r += r),
              (u += u)),
        {
            red: parseInt(a, 16),
            green: parseInt(l, 16),
            blue: parseInt(r, 16),
            alpha: u ? parseInt(u, 16) / 255 : 1,
        }
    );
}
const vf = { test: pd("#"), parse: XT, transform: Ui.transform },
    Ra = {
        test: pd("hsl", "hue"),
        parse: mv("hue", "saturation", "lightness"),
        transform: ({ hue: n, saturation: a, lightness: l, alpha: r = 1 }) =>
            "hsla(" +
            Math.round(n) +
            ", " +
            dn.transform(Js(a)) +
            ", " +
            dn.transform(Js(l)) +
            ", " +
            Js(al.transform(r)) +
            ")",
    },
    ce = {
        test: (n) => Ui.test(n) || vf.test(n) || Ra.test(n),
        parse: (n) =>
            Ui.test(n) ? Ui.parse(n) : Ra.test(n) ? Ra.parse(n) : vf.parse(n),
        transform: (n) =>
            typeof n == "string"
                ? n
                : n.hasOwnProperty("red")
                  ? Ui.transform(n)
                  : Ra.transform(n),
    },
    KT =
        /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function PT(n) {
    var a, l;
    return (
        isNaN(n) &&
        typeof n == "string" &&
        (((a = n.match(hd)) === null || a === void 0 ? void 0 : a.length) ||
            0) +
            (((l = n.match(KT)) === null || l === void 0 ? void 0 : l.length) ||
                0) >
            0
    );
}
const gv = "number",
    yv = "color",
    ZT = "var",
    QT = "var(",
    Ng = "${}",
    FT =
        /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function ll(n) {
    const a = n.toString(),
        l = [],
        r = { color: [], number: [], var: [] },
        u = [];
    let f = 0;
    const h = a
        .replace(
            FT,
            (p) => (
                ce.test(p)
                    ? (r.color.push(f), u.push(yv), l.push(ce.parse(p)))
                    : p.startsWith(QT)
                      ? (r.var.push(f), u.push(ZT), l.push(p))
                      : (r.number.push(f), u.push(gv), l.push(parseFloat(p))),
                ++f,
                Ng
            )
        )
        .split(Ng);
    return { values: l, split: h, indexes: r, types: u };
}
function vv(n) {
    return ll(n).values;
}
function Sv(n) {
    const { split: a, types: l } = ll(n),
        r = a.length;
    return (u) => {
        let f = "";
        for (let d = 0; d < r; d++)
            if (((f += a[d]), u[d] !== void 0)) {
                const h = l[d];
                h === gv
                    ? (f += Js(u[d]))
                    : h === yv
                      ? (f += ce.transform(u[d]))
                      : (f += u[d]);
            }
        return f;
    };
}
const WT = (n) => (typeof n == "number" ? 0 : n);
function JT(n) {
    const a = vv(n);
    return Sv(n)(a.map(WT));
}
const fi = {
        test: PT,
        parse: vv,
        createTransformer: Sv,
        getAnimatableNone: JT,
    },
    $T = new Set(["brightness", "contrast", "saturate", "opacity"]);
function IT(n) {
    const [a, l] = n.slice(0, -1).split("(");
    if (a === "drop-shadow") return n;
    const [r] = l.match(hd) || [];
    if (!r) return n;
    const u = l.replace(r, "");
    let f = $T.has(a) ? 1 : 0;
    return r !== l && (f *= 100), a + "(" + f + u + ")";
}
const t2 = /\b([a-z-]*)\(.*?\)/gu,
    Sf = {
        ...fi,
        getAnimatableNone: (n) => {
            const a = n.match(t2);
            return a ? a.map(IT).join(" ") : n;
        },
    },
    e2 = {
        ...Ff,
        color: ce,
        backgroundColor: ce,
        outlineColor: ce,
        fill: ce,
        stroke: ce,
        borderColor: ce,
        borderTopColor: ce,
        borderRightColor: ce,
        borderBottomColor: ce,
        borderLeftColor: ce,
        filter: Sf,
        WebkitFilter: Sf,
    },
    md = (n) => e2[n];
function bv(n, a) {
    let l = md(n);
    return (
        l !== Sf && (l = fi),
        l.getAnimatableNone ? l.getAnimatableNone(a) : void 0
    );
}
const n2 = new Set(["auto", "none", "0"]);
function i2(n, a, l) {
    let r = 0,
        u;
    for (; r < n.length && !u; ) {
        const f = n[r];
        typeof f == "string" && !n2.has(f) && ll(f).values.length && (u = n[r]),
            r++;
    }
    if (u && l) for (const f of a) n[f] = bv(l, u);
}
const Lg = (n) => n === Xa || n === ft,
    Bg = (n, a) => parseFloat(n.split(", ")[a]),
    Vg =
        (n, a) =>
        (l, { transform: r }) => {
            if (r === "none" || !r) return 0;
            const u = r.match(/^matrix3d\((.+)\)$/u);
            if (u) return Bg(u[1], a);
            {
                const f = r.match(/^matrix\((.+)\)$/u);
                return f ? Bg(f[1], n) : 0;
            }
        },
    a2 = new Set(["x", "y", "z"]),
    s2 = ka.filter((n) => !a2.has(n));
function l2(n) {
    const a = [];
    return (
        s2.forEach((l) => {
            const r = n.getValue(l);
            r !== void 0 &&
                (a.push([l, r.get()]), r.set(l.startsWith("scale") ? 1 : 0));
        }),
        a
    );
}
const Va = {
    width: ({ x: n }, { paddingLeft: a = "0", paddingRight: l = "0" }) =>
        n.max - n.min - parseFloat(a) - parseFloat(l),
    height: ({ y: n }, { paddingTop: a = "0", paddingBottom: l = "0" }) =>
        n.max - n.min - parseFloat(a) - parseFloat(l),
    top: (n, { top: a }) => parseFloat(a),
    left: (n, { left: a }) => parseFloat(a),
    bottom: ({ y: n }, { top: a }) => parseFloat(a) + (n.max - n.min),
    right: ({ x: n }, { left: a }) => parseFloat(a) + (n.max - n.min),
    x: Vg(4, 13),
    y: Vg(5, 14),
};
Va.translateX = Va.x;
Va.translateY = Va.y;
const qi = new Set();
let bf = !1,
    xf = !1;
function xv() {
    if (xf) {
        const n = Array.from(qi).filter((r) => r.needsMeasurement),
            a = new Set(n.map((r) => r.element)),
            l = new Map();
        a.forEach((r) => {
            const u = l2(r);
            u.length && (l.set(r, u), r.render());
        }),
            n.forEach((r) => r.measureInitialState()),
            a.forEach((r) => {
                r.render();
                const u = l.get(r);
                u &&
                    u.forEach(([f, d]) => {
                        var h;
                        (h = r.getValue(f)) === null ||
                            h === void 0 ||
                            h.set(d);
                    });
            }),
            n.forEach((r) => r.measureEndState()),
            n.forEach((r) => {
                r.suspendedScrollY !== void 0 &&
                    window.scrollTo(0, r.suspendedScrollY);
            });
    }
    (xf = !1), (bf = !1), qi.forEach((n) => n.complete()), qi.clear();
}
function Tv() {
    qi.forEach((n) => {
        n.readKeyframes(), n.needsMeasurement && (xf = !0);
    });
}
function r2() {
    Tv(), xv();
}
class gd {
    constructor(a, l, r, u, f, d = !1) {
        (this.isComplete = !1),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.isScheduled = !1),
            (this.unresolvedKeyframes = [...a]),
            (this.onComplete = l),
            (this.name = r),
            (this.motionValue = u),
            (this.element = f),
            (this.isAsync = d);
    }
    scheduleResolve() {
        (this.isScheduled = !0),
            this.isAsync
                ? (qi.add(this),
                  bf || ((bf = !0), Ot.read(Tv), Ot.resolveKeyframes(xv)))
                : (this.readKeyframes(), this.complete());
    }
    readKeyframes() {
        const {
            unresolvedKeyframes: a,
            name: l,
            element: r,
            motionValue: u,
        } = this;
        for (let f = 0; f < a.length; f++)
            if (a[f] === null)
                if (f === 0) {
                    const d = u == null ? void 0 : u.get(),
                        h = a[a.length - 1];
                    if (d !== void 0) a[0] = d;
                    else if (r && l) {
                        const p = r.readValue(l, h);
                        p != null && (a[0] = p);
                    }
                    a[0] === void 0 && (a[0] = h),
                        u && d === void 0 && u.set(a[0]);
                } else a[f] = a[f - 1];
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        (this.isComplete = !0),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
            qi.delete(this);
    }
    cancel() {
        this.isComplete || ((this.isScheduled = !1), qi.delete(this));
    }
    resume() {
        this.isComplete || this.scheduleResolve();
    }
}
const Ev = (n) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),
    o2 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function u2(n) {
    const a = o2.exec(n);
    if (!a) return [,];
    const [, l, r, u] = a;
    return [`--${l ?? r}`, u];
}
function Av(n, a, l = 1) {
    const [r, u] = u2(n);
    if (!r) return;
    const f = window.getComputedStyle(a).getPropertyValue(r);
    if (f) {
        const d = f.trim();
        return Ev(d) ? parseFloat(d) : d;
    }
    return Qf(u) ? Av(u, a, l + 1) : u;
}
const Mv = (n) => (a) => a.test(n),
    c2 = { test: (n) => n === "auto", parse: (n) => n },
    Ov = [Xa, ft, dn, ri, Jx, Wx, c2],
    Ug = (n) => Ov.find(Mv(n));
class wv extends gd {
    constructor(a, l, r, u, f) {
        super(a, l, r, u, f, !0);
    }
    readKeyframes() {
        const { unresolvedKeyframes: a, element: l, name: r } = this;
        if (!l || !l.current) return;
        super.readKeyframes();
        for (let p = 0; p < a.length; p++) {
            let m = a[p];
            if (typeof m == "string" && ((m = m.trim()), Qf(m))) {
                const y = Av(m, l.current);
                y !== void 0 && (a[p] = y),
                    p === a.length - 1 && (this.finalKeyframe = m);
            }
        }
        if ((this.resolveNoneKeyframes(), !av.has(r) || a.length !== 2)) return;
        const [u, f] = a,
            d = Ug(u),
            h = Ug(f);
        if (d !== h)
            if (Lg(d) && Lg(h))
                for (let p = 0; p < a.length; p++) {
                    const m = a[p];
                    typeof m == "string" && (a[p] = parseFloat(m));
                }
            else this.needsMeasurement = !0;
    }
    resolveNoneKeyframes() {
        const { unresolvedKeyframes: a, name: l } = this,
            r = [];
        for (let u = 0; u < a.length; u++) qT(a[u]) && r.push(u);
        r.length && i2(a, r, l);
    }
    measureInitialState() {
        const { element: a, unresolvedKeyframes: l, name: r } = this;
        if (!a || !a.current) return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = Va[r](
                a.measureViewportBox(),
                window.getComputedStyle(a.current)
            )),
            (l[0] = this.measuredOrigin);
        const u = l[l.length - 1];
        u !== void 0 && a.getValue(r, u).jump(u, !1);
    }
    measureEndState() {
        var a;
        const { element: l, name: r, unresolvedKeyframes: u } = this;
        if (!l || !l.current) return;
        const f = l.getValue(r);
        f && f.jump(this.measuredOrigin, !1);
        const d = u.length - 1,
            h = u[d];
        (u[d] = Va[r](
            l.measureViewportBox(),
            window.getComputedStyle(l.current)
        )),
            h !== null &&
                this.finalKeyframe === void 0 &&
                (this.finalKeyframe = h),
            !((a = this.removedTransforms) === null || a === void 0) &&
                a.length &&
                this.removedTransforms.forEach(([p, m]) => {
                    l.getValue(p).set(m);
                }),
            this.resolveNoneKeyframes();
    }
}
const Hg = (n, a) =>
    a === "zIndex"
        ? !1
        : !!(
              typeof n == "number" ||
              Array.isArray(n) ||
              (typeof n == "string" &&
                  (fi.test(n) || n === "0") &&
                  !n.startsWith("url("))
          );
function f2(n) {
    const a = n[0];
    if (n.length === 1) return !0;
    for (let l = 0; l < n.length; l++) if (n[l] !== a) return !0;
}
function d2(n, a, l, r) {
    const u = n[0];
    if (u === null) return !1;
    if (a === "display" || a === "visibility") return !0;
    const f = n[n.length - 1],
        d = Hg(u, a),
        h = Hg(f, a);
    return !d || !h ? !1 : f2(n) || ((l === "spring" || ad(l)) && r);
}
const h2 = (n) => n !== null;
function vo(n, { repeat: a, repeatType: l = "loop" }, r) {
    const u = n.filter(h2),
        f = a && l !== "loop" && a % 2 === 1 ? 0 : u.length - 1;
    return !f || r === void 0 ? u[f] : r;
}
const p2 = 40;
class _v {
    constructor({
        autoplay: a = !0,
        delay: l = 0,
        type: r = "keyframes",
        repeat: u = 0,
        repeatDelay: f = 0,
        repeatType: d = "loop",
        ...h
    }) {
        (this.isStopped = !1),
            (this.hasAttemptedResolve = !1),
            (this.createdAt = hn.now()),
            (this.options = {
                autoplay: a,
                delay: l,
                type: r,
                repeat: u,
                repeatDelay: f,
                repeatType: d,
                ...h,
            }),
            this.updateFinishedPromise();
    }
    calcStartTime() {
        return this.resolvedAt
            ? this.resolvedAt - this.createdAt > p2
                ? this.resolvedAt
                : this.createdAt
            : this.createdAt;
    }
    get resolved() {
        return (
            !this._resolved && !this.hasAttemptedResolve && r2(), this._resolved
        );
    }
    onKeyframesResolved(a, l) {
        (this.resolvedAt = hn.now()), (this.hasAttemptedResolve = !0);
        const {
            name: r,
            type: u,
            velocity: f,
            delay: d,
            onComplete: h,
            onUpdate: p,
            isGenerator: m,
        } = this.options;
        if (!m && !d2(a, r, u, f))
            if (d) this.options.duration = 0;
            else {
                p && p(vo(a, this.options, l)),
                    h && h(),
                    this.resolveFinishedPromise();
                return;
            }
        const y = this.initPlayback(a, l);
        y !== !1 &&
            ((this._resolved = { keyframes: a, finalKeyframe: l, ...y }),
            this.onPostResolved());
    }
    onPostResolved() {}
    then(a, l) {
        return this.currentFinishedPromise.then(a, l);
    }
    flatten() {
        (this.options.type = "keyframes"), (this.options.ease = "linear");
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise((a) => {
            this.resolveFinishedPromise = a;
        });
    }
}
const Ut = (n, a, l) => n + (a - n) * l;
function kc(n, a, l) {
    return (
        l < 0 && (l += 1),
        l > 1 && (l -= 1),
        l < 1 / 6
            ? n + (a - n) * 6 * l
            : l < 1 / 2
              ? a
              : l < 2 / 3
                ? n + (a - n) * (2 / 3 - l) * 6
                : n
    );
}
function m2({ hue: n, saturation: a, lightness: l, alpha: r }) {
    (n /= 360), (a /= 100), (l /= 100);
    let u = 0,
        f = 0,
        d = 0;
    if (!a) u = f = d = l;
    else {
        const h = l < 0.5 ? l * (1 + a) : l + a - l * a,
            p = 2 * l - h;
        (u = kc(p, h, n + 1 / 3)), (f = kc(p, h, n)), (d = kc(p, h, n - 1 / 3));
    }
    return {
        red: Math.round(u * 255),
        green: Math.round(f * 255),
        blue: Math.round(d * 255),
        alpha: r,
    };
}
function no(n, a) {
    return (l) => (l > 0 ? a : n);
}
const Xc = (n, a, l) => {
        const r = n * n,
            u = l * (a * a - r) + r;
        return u < 0 ? 0 : Math.sqrt(u);
    },
    g2 = [vf, Ui, Ra],
    y2 = (n) => g2.find((a) => a.test(n));
function qg(n) {
    const a = y2(n);
    if (!a) return !1;
    let l = a.parse(n);
    return a === Ra && (l = m2(l)), l;
}
const Yg = (n, a) => {
        const l = qg(n),
            r = qg(a);
        if (!l || !r) return no(n, a);
        const u = { ...l };
        return (f) => (
            (u.red = Xc(l.red, r.red, f)),
            (u.green = Xc(l.green, r.green, f)),
            (u.blue = Xc(l.blue, r.blue, f)),
            (u.alpha = Ut(l.alpha, r.alpha, f)),
            Ui.transform(u)
        );
    },
    v2 = (n, a) => (l) => a(n(l)),
    dl = (...n) => n.reduce(v2),
    Tf = new Set(["none", "hidden"]);
function S2(n, a) {
    return Tf.has(n) ? (l) => (l <= 0 ? n : a) : (l) => (l >= 1 ? a : n);
}
function b2(n, a) {
    return (l) => Ut(n, a, l);
}
function yd(n) {
    return typeof n == "number"
        ? b2
        : typeof n == "string"
          ? Qf(n)
              ? no
              : ce.test(n)
                ? Yg
                : E2
          : Array.isArray(n)
            ? Dv
            : typeof n == "object"
              ? ce.test(n)
                  ? Yg
                  : x2
              : no;
}
function Dv(n, a) {
    const l = [...n],
        r = l.length,
        u = n.map((f, d) => yd(f)(f, a[d]));
    return (f) => {
        for (let d = 0; d < r; d++) l[d] = u[d](f);
        return l;
    };
}
function x2(n, a) {
    const l = { ...n, ...a },
        r = {};
    for (const u in l)
        n[u] !== void 0 && a[u] !== void 0 && (r[u] = yd(n[u])(n[u], a[u]));
    return (u) => {
        for (const f in r) l[f] = r[f](u);
        return l;
    };
}
function T2(n, a) {
    var l;
    const r = [],
        u = { color: 0, var: 0, number: 0 };
    for (let f = 0; f < a.values.length; f++) {
        const d = a.types[f],
            h = n.indexes[d][u[d]],
            p = (l = n.values[h]) !== null && l !== void 0 ? l : 0;
        (r[f] = p), u[d]++;
    }
    return r;
}
const E2 = (n, a) => {
    const l = fi.createTransformer(a),
        r = ll(n),
        u = ll(a);
    return r.indexes.var.length === u.indexes.var.length &&
        r.indexes.color.length === u.indexes.color.length &&
        r.indexes.number.length >= u.indexes.number.length
        ? (Tf.has(n) && !u.values.length) || (Tf.has(a) && !r.values.length)
            ? S2(n, a)
            : dl(Dv(T2(r, u), u.values), l)
        : no(n, a);
};
function Rv(n, a, l) {
    return typeof n == "number" && typeof a == "number" && typeof l == "number"
        ? Ut(n, a, l)
        : yd(n)(n, a);
}
const A2 = 5;
function Cv(n, a, l) {
    const r = Math.max(a - A2, 0);
    return cd(l - n(r), a - r);
}
const kt = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
    },
    Gg = 0.001;
function M2({
    duration: n = kt.duration,
    bounce: a = kt.bounce,
    velocity: l = kt.velocity,
    mass: r = kt.mass,
}) {
    let u,
        f,
        d = 1 - a;
    (d = pn(kt.minDamping, kt.maxDamping, d)),
        (n = pn(kt.minDuration, kt.maxDuration, Ln(n))),
        d < 1
            ? ((u = (m) => {
                  const y = m * d,
                      v = y * n,
                      b = y - l,
                      T = Ef(m, d),
                      O = Math.exp(-v);
                  return Gg - (b / T) * O;
              }),
              (f = (m) => {
                  const v = m * d * n,
                      b = v * l + l,
                      T = Math.pow(d, 2) * Math.pow(m, 2) * n,
                      O = Math.exp(-v),
                      R = Ef(Math.pow(m, 2), d);
                  return ((-u(m) + Gg > 0 ? -1 : 1) * ((b - T) * O)) / R;
              }))
            : ((u = (m) => {
                  const y = Math.exp(-m * n),
                      v = (m - l) * n + 1;
                  return -0.001 + y * v;
              }),
              (f = (m) => {
                  const y = Math.exp(-m * n),
                      v = (l - m) * (n * n);
                  return y * v;
              }));
    const h = 5 / n,
        p = w2(u, f, h);
    if (((n = Nn(n)), isNaN(p)))
        return { stiffness: kt.stiffness, damping: kt.damping, duration: n };
    {
        const m = Math.pow(p, 2) * r;
        return { stiffness: m, damping: d * 2 * Math.sqrt(r * m), duration: n };
    }
}
const O2 = 12;
function w2(n, a, l) {
    let r = l;
    for (let u = 1; u < O2; u++) r = r - n(r) / a(r);
    return r;
}
function Ef(n, a) {
    return n * Math.sqrt(1 - a * a);
}
const _2 = ["duration", "bounce"],
    D2 = ["stiffness", "damping", "mass"];
function kg(n, a) {
    return a.some((l) => n[l] !== void 0);
}
function R2(n) {
    let a = {
        velocity: kt.velocity,
        stiffness: kt.stiffness,
        damping: kt.damping,
        mass: kt.mass,
        isResolvedFromDuration: !1,
        ...n,
    };
    if (!kg(n, D2) && kg(n, _2))
        if (n.visualDuration) {
            const l = n.visualDuration,
                r = (2 * Math.PI) / (l * 1.2),
                u = r * r,
                f = 2 * pn(0.05, 1, 1 - (n.bounce || 0)) * Math.sqrt(u);
            a = { ...a, mass: kt.mass, stiffness: u, damping: f };
        } else {
            const l = M2(n);
            (a = { ...a, ...l, mass: kt.mass }),
                (a.isResolvedFromDuration = !0);
        }
    return a;
}
function zv(n = kt.visualDuration, a = kt.bounce) {
    const l =
        typeof n != "object"
            ? { visualDuration: n, keyframes: [0, 1], bounce: a }
            : n;
    let { restSpeed: r, restDelta: u } = l;
    const f = l.keyframes[0],
        d = l.keyframes[l.keyframes.length - 1],
        h = { done: !1, value: f },
        {
            stiffness: p,
            damping: m,
            mass: y,
            duration: v,
            velocity: b,
            isResolvedFromDuration: T,
        } = R2({ ...l, velocity: -Ln(l.velocity || 0) }),
        O = b || 0,
        R = m / (2 * Math.sqrt(p * y)),
        V = d - f,
        N = Ln(Math.sqrt(p / y)),
        k = Math.abs(V) < 5;
    r || (r = k ? kt.restSpeed.granular : kt.restSpeed.default),
        u || (u = k ? kt.restDelta.granular : kt.restDelta.default);
    let G;
    if (R < 1) {
        const H = Ef(N, R);
        G = (Z) => {
            const $ = Math.exp(-R * N * Z);
            return (
                d -
                $ *
                    (((O + R * N * V) / H) * Math.sin(H * Z) +
                        V * Math.cos(H * Z))
            );
        };
    } else if (R === 1) G = (H) => d - Math.exp(-N * H) * (V + (O + N * V) * H);
    else {
        const H = N * Math.sqrt(R * R - 1);
        G = (Z) => {
            const $ = Math.exp(-R * N * Z),
                st = Math.min(H * Z, 300);
            return (
                d -
                ($ *
                    ((O + R * N * V) * Math.sinh(st) + H * V * Math.cosh(st))) /
                    H
            );
        };
    }
    const J = {
        calculatedDuration: (T && v) || null,
        next: (H) => {
            const Z = G(H);
            if (T) h.done = H >= v;
            else {
                let $ = 0;
                R < 1 && ($ = H === 0 ? Nn(O) : Cv(G, H, Z));
                const st = Math.abs($) <= r,
                    F = Math.abs(d - Z) <= u;
                h.done = st && F;
            }
            return (h.value = h.done ? d : Z), h;
        },
        toString: () => {
            const H = Math.min(Wy(J), mf),
                Z = Jy(($) => J.next(H * $).value, H, 30);
            return H + "ms " + Z;
        },
    };
    return J;
}
function Xg({
    keyframes: n,
    velocity: a = 0,
    power: l = 0.8,
    timeConstant: r = 325,
    bounceDamping: u = 10,
    bounceStiffness: f = 500,
    modifyTarget: d,
    min: h,
    max: p,
    restDelta: m = 0.5,
    restSpeed: y,
}) {
    const v = n[0],
        b = { done: !1, value: v },
        T = (st) => (h !== void 0 && st < h) || (p !== void 0 && st > p),
        O = (st) =>
            h === void 0
                ? p
                : p === void 0 || Math.abs(h - st) < Math.abs(p - st)
                  ? h
                  : p;
    let R = l * a;
    const V = v + R,
        N = d === void 0 ? V : d(V);
    N !== V && (R = N - v);
    const k = (st) => -R * Math.exp(-st / r),
        G = (st) => N + k(st),
        J = (st) => {
            const F = k(st),
                lt = G(st);
            (b.done = Math.abs(F) <= m), (b.value = b.done ? N : lt);
        };
    let H, Z;
    const $ = (st) => {
        T(b.value) &&
            ((H = st),
            (Z = zv({
                keyframes: [b.value, O(b.value)],
                velocity: Cv(G, st, b.value),
                damping: u,
                stiffness: f,
                restDelta: m,
                restSpeed: y,
            })));
    };
    return (
        $(0),
        {
            calculatedDuration: null,
            next: (st) => {
                let F = !1;
                return (
                    !Z && H === void 0 && ((F = !0), J(st), $(st)),
                    H !== void 0 && st >= H ? Z.next(st - H) : (!F && J(st), b)
                );
            },
        }
    );
}
const C2 = fl(0.42, 0, 1, 1),
    z2 = fl(0, 0, 0.58, 1),
    jv = fl(0.42, 0, 0.58, 1),
    j2 = (n) => Array.isArray(n) && typeof n[0] != "number",
    N2 = {
        linear: ge,
        easeIn: C2,
        easeInOut: jv,
        easeOut: z2,
        circIn: dd,
        circInOut: hv,
        circOut: dv,
        backIn: fd,
        backInOut: cv,
        backOut: uv,
        anticipate: fv,
    },
    Kg = (n) => {
        if (sd(n)) {
            Ry(n.length === 4);
            const [a, l, r, u] = n;
            return fl(a, l, r, u);
        } else if (typeof n == "string") return N2[n];
        return n;
    };
function L2(n, a, l) {
    const r = [],
        u = l || Rv,
        f = n.length - 1;
    for (let d = 0; d < f; d++) {
        let h = u(n[d], n[d + 1]);
        if (a) {
            const p = Array.isArray(a) ? a[d] || ge : a;
            h = dl(p, h);
        }
        r.push(h);
    }
    return r;
}
function vd(n, a, { clamp: l = !0, ease: r, mixer: u } = {}) {
    const f = n.length;
    if ((Ry(f === a.length), f === 1)) return () => a[0];
    if (f === 2 && a[0] === a[1]) return () => a[1];
    const d = n[0] === n[1];
    n[0] > n[f - 1] && ((n = [...n].reverse()), (a = [...a].reverse()));
    const h = L2(a, r, u),
        p = h.length,
        m = (y) => {
            if (d && y < n[0]) return a[0];
            let v = 0;
            if (p > 1) for (; v < n.length - 2 && !(y < n[v + 1]); v++);
            const b = ki(n[v], n[v + 1], y);
            return h[v](b);
        };
    return l ? (y) => m(pn(n[0], n[f - 1], y)) : m;
}
function B2(n, a) {
    const l = n[n.length - 1];
    for (let r = 1; r <= a; r++) {
        const u = ki(0, a, r);
        n.push(Ut(l, 1, u));
    }
}
function Nv(n) {
    const a = [0];
    return B2(a, n.length - 1), a;
}
function V2(n, a) {
    return n.map((l) => l * a);
}
function U2(n, a) {
    return n.map(() => a || jv).splice(0, n.length - 1);
}
function io({
    duration: n = 300,
    keyframes: a,
    times: l,
    ease: r = "easeInOut",
}) {
    const u = j2(r) ? r.map(Kg) : Kg(r),
        f = { done: !1, value: a[0] },
        d = V2(l && l.length === a.length ? l : Nv(a), n),
        h = vd(d, a, { ease: Array.isArray(u) ? u : U2(a, u) });
    return {
        calculatedDuration: n,
        next: (p) => ((f.value = h(p)), (f.done = p >= n), f),
    };
}
const H2 = (n) => {
        const a = ({ timestamp: l }) => n(l);
        return {
            start: () => Ot.update(a, !0),
            stop: () => en(a),
            now: () => (ne.isProcessing ? ne.timestamp : hn.now()),
        };
    },
    q2 = { decay: Xg, inertia: Xg, tween: io, keyframes: io, spring: zv },
    Y2 = (n) => n / 100;
class Sd extends _v {
    constructor(a) {
        super(a),
            (this.holdTime = null),
            (this.cancelTime = null),
            (this.currentTime = 0),
            (this.playbackSpeed = 1),
            (this.pendingPlayState = "running"),
            (this.startTime = null),
            (this.state = "idle"),
            (this.stop = () => {
                if (
                    (this.resolver.cancel(),
                    (this.isStopped = !0),
                    this.state === "idle")
                )
                    return;
                this.teardown();
                const { onStop: p } = this.options;
                p && p();
            });
        const {
                name: l,
                motionValue: r,
                element: u,
                keyframes: f,
            } = this.options,
            d = (u == null ? void 0 : u.KeyframeResolver) || gd,
            h = (p, m) => this.onKeyframesResolved(p, m);
        (this.resolver = new d(f, h, l, r, u)), this.resolver.scheduleResolve();
    }
    flatten() {
        super.flatten(),
            this._resolved &&
                Object.assign(
                    this._resolved,
                    this.initPlayback(this._resolved.keyframes)
                );
    }
    initPlayback(a) {
        const {
                type: l = "keyframes",
                repeat: r = 0,
                repeatDelay: u = 0,
                repeatType: f,
                velocity: d = 0,
            } = this.options,
            h = ad(l) ? l : q2[l] || io;
        let p, m;
        h !== io &&
            typeof a[0] != "number" &&
            ((p = dl(Y2, Rv(a[0], a[1]))), (a = [0, 100]));
        const y = h({ ...this.options, keyframes: a });
        f === "mirror" &&
            (m = h({
                ...this.options,
                keyframes: [...a].reverse(),
                velocity: -d,
            })),
            y.calculatedDuration === null && (y.calculatedDuration = Wy(y));
        const { calculatedDuration: v } = y,
            b = v + u,
            T = b * (r + 1) - u;
        return {
            generator: y,
            mirroredGenerator: m,
            mapPercentToKeyframes: p,
            calculatedDuration: v,
            resolvedDuration: b,
            totalDuration: T,
        };
    }
    onPostResolved() {
        const { autoplay: a = !0 } = this.options;
        this.play(),
            this.pendingPlayState === "paused" || !a
                ? this.pause()
                : (this.state = this.pendingPlayState);
    }
    tick(a, l = !1) {
        const { resolved: r } = this;
        if (!r) {
            const { keyframes: st } = this.options;
            return { done: !0, value: st[st.length - 1] };
        }
        const {
            finalKeyframe: u,
            generator: f,
            mirroredGenerator: d,
            mapPercentToKeyframes: h,
            keyframes: p,
            calculatedDuration: m,
            totalDuration: y,
            resolvedDuration: v,
        } = r;
        if (this.startTime === null) return f.next(0);
        const {
            delay: b,
            repeat: T,
            repeatType: O,
            repeatDelay: R,
            onUpdate: V,
        } = this.options;
        this.speed > 0
            ? (this.startTime = Math.min(this.startTime, a))
            : this.speed < 0 &&
              (this.startTime = Math.min(a - y / this.speed, this.startTime)),
            l
                ? (this.currentTime = a)
                : this.holdTime !== null
                  ? (this.currentTime = this.holdTime)
                  : (this.currentTime =
                        Math.round(a - this.startTime) * this.speed);
        const N = this.currentTime - b * (this.speed >= 0 ? 1 : -1),
            k = this.speed >= 0 ? N < 0 : N > y;
        (this.currentTime = Math.max(N, 0)),
            this.state === "finished" &&
                this.holdTime === null &&
                (this.currentTime = y);
        let G = this.currentTime,
            J = f;
        if (T) {
            const st = Math.min(this.currentTime, y) / v;
            let F = Math.floor(st),
                lt = st % 1;
            !lt && st >= 1 && (lt = 1),
                lt === 1 && F--,
                (F = Math.min(F, T + 1)),
                !!(F % 2) &&
                    (O === "reverse"
                        ? ((lt = 1 - lt), R && (lt -= R / v))
                        : O === "mirror" && (J = d)),
                (G = pn(0, 1, lt) * v);
        }
        const H = k ? { done: !1, value: p[0] } : J.next(G);
        h && (H.value = h(H.value));
        let { done: Z } = H;
        !k &&
            m !== null &&
            (Z =
                this.speed >= 0
                    ? this.currentTime >= y
                    : this.currentTime <= 0);
        const $ =
            this.holdTime === null &&
            (this.state === "finished" || (this.state === "running" && Z));
        return (
            $ && u !== void 0 && (H.value = vo(p, this.options, u)),
            V && V(H.value),
            $ && this.finish(),
            H
        );
    }
    get duration() {
        const { resolved: a } = this;
        return a ? Ln(a.calculatedDuration) : 0;
    }
    get time() {
        return Ln(this.currentTime);
    }
    set time(a) {
        (a = Nn(a)),
            (this.currentTime = a),
            this.holdTime !== null || this.speed === 0
                ? (this.holdTime = a)
                : this.driver &&
                  (this.startTime = this.driver.now() - a / this.speed);
    }
    get speed() {
        return this.playbackSpeed;
    }
    set speed(a) {
        const l = this.playbackSpeed !== a;
        (this.playbackSpeed = a), l && (this.time = Ln(this.currentTime));
    }
    play() {
        if (
            (this.resolver.isScheduled || this.resolver.resume(),
            !this._resolved)
        ) {
            this.pendingPlayState = "running";
            return;
        }
        if (this.isStopped) return;
        const { driver: a = H2, onPlay: l, startTime: r } = this.options;
        this.driver || (this.driver = a((f) => this.tick(f))), l && l();
        const u = this.driver.now();
        this.holdTime !== null
            ? (this.startTime = u - this.holdTime)
            : this.startTime
              ? this.state === "finished" && (this.startTime = u)
              : (this.startTime = r ?? this.calcStartTime()),
            this.state === "finished" && this.updateFinishedPromise(),
            (this.cancelTime = this.startTime),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
    }
    pause() {
        var a;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
        }
        (this.state = "paused"),
            (this.holdTime =
                (a = this.currentTime) !== null && a !== void 0 ? a : 0);
    }
    complete() {
        this.state !== "running" && this.play(),
            (this.pendingPlayState = this.state = "finished"),
            (this.holdTime = null);
    }
    finish() {
        this.teardown(), (this.state = "finished");
        const { onComplete: a } = this.options;
        a && a();
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime),
            this.teardown(),
            this.updateFinishedPromise();
    }
    teardown() {
        (this.state = "idle"),
            this.stopDriver(),
            this.resolveFinishedPromise(),
            this.updateFinishedPromise(),
            (this.startTime = this.cancelTime = null),
            this.resolver.cancel();
    }
    stopDriver() {
        this.driver && (this.driver.stop(), (this.driver = void 0));
    }
    sample(a) {
        return (this.startTime = 0), this.tick(a, !0);
    }
}
const G2 = new Set(["opacity", "clipPath", "filter", "transform"]);
function k2(
    n,
    a,
    l,
    {
        delay: r = 0,
        duration: u = 300,
        repeat: f = 0,
        repeatType: d = "loop",
        ease: h = "easeInOut",
        times: p,
    } = {}
) {
    const m = { [a]: l };
    p && (m.offset = p);
    const y = Iy(h, u);
    return (
        Array.isArray(y) && (m.easing = y),
        n.animate(m, {
            delay: r,
            duration: u,
            easing: Array.isArray(y) ? "linear" : y,
            fill: "both",
            iterations: f + 1,
            direction: d === "reverse" ? "alternate" : "normal",
        })
    );
}
const X2 = Gf(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
    ao = 10,
    K2 = 2e4;
function P2(n) {
    return ad(n.type) || n.type === "spring" || !$y(n.ease);
}
function Z2(n, a) {
    const l = new Sd({
        ...a,
        keyframes: n,
        repeat: 0,
        delay: 0,
        isGenerator: !0,
    });
    let r = { done: !1, value: n[0] };
    const u = [];
    let f = 0;
    for (; !r.done && f < K2; ) (r = l.sample(f)), u.push(r.value), (f += ao);
    return { times: void 0, keyframes: u, duration: f - ao, ease: "linear" };
}
const Lv = { anticipate: fv, backInOut: cv, circInOut: hv };
function Q2(n) {
    return n in Lv;
}
class Pg extends _v {
    constructor(a) {
        super(a);
        const {
            name: l,
            motionValue: r,
            element: u,
            keyframes: f,
        } = this.options;
        (this.resolver = new wv(
            f,
            (d, h) => this.onKeyframesResolved(d, h),
            l,
            r,
            u
        )),
            this.resolver.scheduleResolve();
    }
    initPlayback(a, l) {
        let {
            duration: r = 300,
            times: u,
            ease: f,
            type: d,
            motionValue: h,
            name: p,
            startTime: m,
        } = this.options;
        if (!h.owner || !h.owner.current) return !1;
        if (
            (typeof f == "string" && to() && Q2(f) && (f = Lv[f]),
            P2(this.options))
        ) {
            const {
                    onComplete: v,
                    onUpdate: b,
                    motionValue: T,
                    element: O,
                    ...R
                } = this.options,
                V = Z2(a, R);
            (a = V.keyframes),
                a.length === 1 && (a[1] = a[0]),
                (r = V.duration),
                (u = V.times),
                (f = V.ease),
                (d = "keyframes");
        }
        const y = k2(h.owner.current, p, a, {
            ...this.options,
            duration: r,
            times: u,
            ease: f,
        });
        return (
            (y.startTime = m ?? this.calcStartTime()),
            this.pendingTimeline
                ? (Dg(y, this.pendingTimeline), (this.pendingTimeline = void 0))
                : (y.onfinish = () => {
                      const { onComplete: v } = this.options;
                      h.set(vo(a, this.options, l)),
                          v && v(),
                          this.cancel(),
                          this.resolveFinishedPromise();
                  }),
            {
                animation: y,
                duration: r,
                times: u,
                type: d,
                ease: f,
                keyframes: a,
            }
        );
    }
    get duration() {
        const { resolved: a } = this;
        if (!a) return 0;
        const { duration: l } = a;
        return Ln(l);
    }
    get time() {
        const { resolved: a } = this;
        if (!a) return 0;
        const { animation: l } = a;
        return Ln(l.currentTime || 0);
    }
    set time(a) {
        const { resolved: l } = this;
        if (!l) return;
        const { animation: r } = l;
        r.currentTime = Nn(a);
    }
    get speed() {
        const { resolved: a } = this;
        if (!a) return 1;
        const { animation: l } = a;
        return l.playbackRate;
    }
    set speed(a) {
        const { resolved: l } = this;
        if (!l) return;
        const { animation: r } = l;
        r.playbackRate = a;
    }
    get state() {
        const { resolved: a } = this;
        if (!a) return "idle";
        const { animation: l } = a;
        return l.playState;
    }
    get startTime() {
        const { resolved: a } = this;
        if (!a) return null;
        const { animation: l } = a;
        return l.startTime;
    }
    attachTimeline(a) {
        if (!this._resolved) this.pendingTimeline = a;
        else {
            const { resolved: l } = this;
            if (!l) return ge;
            const { animation: r } = l;
            Dg(r, a);
        }
        return ge;
    }
    play() {
        if (this.isStopped) return;
        const { resolved: a } = this;
        if (!a) return;
        const { animation: l } = a;
        l.playState === "finished" && this.updateFinishedPromise(), l.play();
    }
    pause() {
        const { resolved: a } = this;
        if (!a) return;
        const { animation: l } = a;
        l.pause();
    }
    stop() {
        if (
            (this.resolver.cancel(),
            (this.isStopped = !0),
            this.state === "idle")
        )
            return;
        this.resolveFinishedPromise(), this.updateFinishedPromise();
        const { resolved: a } = this;
        if (!a) return;
        const {
            animation: l,
            keyframes: r,
            duration: u,
            type: f,
            ease: d,
            times: h,
        } = a;
        if (l.playState === "idle" || l.playState === "finished") return;
        if (this.time) {
            const {
                    motionValue: m,
                    onUpdate: y,
                    onComplete: v,
                    element: b,
                    ...T
                } = this.options,
                O = new Sd({
                    ...T,
                    keyframes: r,
                    duration: u,
                    type: f,
                    ease: d,
                    times: h,
                    isGenerator: !0,
                }),
                R = Nn(this.time);
            m.setWithVelocity(O.sample(R - ao).value, O.sample(R).value, ao);
        }
        const { onStop: p } = this.options;
        p && p(), this.cancel();
    }
    complete() {
        const { resolved: a } = this;
        a && a.animation.finish();
    }
    cancel() {
        const { resolved: a } = this;
        a && a.animation.cancel();
    }
    static supports(a) {
        const {
            motionValue: l,
            name: r,
            repeatDelay: u,
            repeatType: f,
            damping: d,
            type: h,
        } = a;
        if (!l || !l.owner || !(l.owner.current instanceof HTMLElement))
            return !1;
        const { onUpdate: p, transformTemplate: m } = l.owner.getProps();
        return (
            X2() &&
            r &&
            G2.has(r) &&
            !p &&
            !m &&
            !u &&
            f !== "mirror" &&
            d !== 0 &&
            h !== "inertia"
        );
    }
}
const F2 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
    W2 = (n) => ({
        type: "spring",
        stiffness: 550,
        damping: n === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10,
    }),
    J2 = { type: "keyframes", duration: 0.8 },
    $2 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
    I2 = (n, { keyframes: a }) =>
        a.length > 2
            ? J2
            : Xi.has(n)
              ? n.startsWith("scale")
                  ? W2(a[1])
                  : F2
              : $2;
function tE({
    when: n,
    delay: a,
    delayChildren: l,
    staggerChildren: r,
    staggerDirection: u,
    repeat: f,
    repeatType: d,
    repeatDelay: h,
    from: p,
    elapsed: m,
    ...y
}) {
    return !!Object.keys(y).length;
}
const bd =
    (n, a, l, r = {}, u, f) =>
    (d) => {
        const h = id(r, n) || {},
            p = h.delay || r.delay || 0;
        let { elapsed: m = 0 } = r;
        m = m - Nn(p);
        let y = {
            keyframes: Array.isArray(l) ? l : [null, l],
            ease: "easeOut",
            velocity: a.getVelocity(),
            ...h,
            delay: -m,
            onUpdate: (b) => {
                a.set(b), h.onUpdate && h.onUpdate(b);
            },
            onComplete: () => {
                d(), h.onComplete && h.onComplete();
            },
            name: n,
            motionValue: a,
            element: f ? void 0 : u,
        };
        tE(h) || (y = { ...y, ...I2(n, y) }),
            y.duration && (y.duration = Nn(y.duration)),
            y.repeatDelay && (y.repeatDelay = Nn(y.repeatDelay)),
            y.from !== void 0 && (y.keyframes[0] = y.from);
        let v = !1;
        if (
            ((y.type === !1 || (y.duration === 0 && !y.repeatDelay)) &&
                ((y.duration = 0), y.delay === 0 && (v = !0)),
            v && !f && a.get() !== void 0)
        ) {
            const b = vo(y.keyframes, h);
            if (b !== void 0)
                return (
                    Ot.update(() => {
                        y.onUpdate(b), y.onComplete();
                    }),
                    new xT([])
                );
        }
        return !f && Pg.supports(y) ? new Pg(y) : new Sd(y);
    };
function eE({ protectedKeys: n, needsAnimating: a }, l) {
    const r = n.hasOwnProperty(l) && a[l] !== !0;
    return (a[l] = !1), r;
}
function Bv(n, a, { delay: l = 0, transitionOverride: r, type: u } = {}) {
    var f;
    let {
        transition: d = n.getDefaultTransition(),
        transitionEnd: h,
        ...p
    } = a;
    r && (d = r);
    const m = [],
        y = u && n.animationState && n.animationState.getState()[u];
    for (const v in p) {
        const b = n.getValue(
                v,
                (f = n.latestValues[v]) !== null && f !== void 0 ? f : null
            ),
            T = p[v];
        if (T === void 0 || (y && eE(y, v))) continue;
        const O = { delay: l, ...id(d || {}, v) };
        let R = !1;
        if (window.MotionHandoffAnimation) {
            const N = sv(n);
            if (N) {
                const k = window.MotionHandoffAnimation(N, v, Ot);
                k !== null && ((O.startTime = k), (R = !0));
            }
        }
        yf(n, v),
            b.start(
                bd(
                    v,
                    b,
                    T,
                    n.shouldReduceMotion && av.has(v) ? { type: !1 } : O,
                    n,
                    R
                )
            );
        const V = b.animation;
        V && m.push(V);
    }
    return (
        h &&
            Promise.all(m).then(() => {
                Ot.update(() => {
                    h && LT(n, h);
                });
            }),
        m
    );
}
function Af(n, a, l = {}) {
    var r;
    const u = sl(
        n,
        a,
        l.type === "exit"
            ? (r = n.presenceContext) === null || r === void 0
                ? void 0
                : r.custom
            : void 0
    );
    let { transition: f = n.getDefaultTransition() || {} } = u || {};
    l.transitionOverride && (f = l.transitionOverride);
    const d = u ? () => Promise.all(Bv(n, u, l)) : () => Promise.resolve(),
        h =
            n.variantChildren && n.variantChildren.size
                ? (m = 0) => {
                      const {
                          delayChildren: y = 0,
                          staggerChildren: v,
                          staggerDirection: b,
                      } = f;
                      return nE(n, a, y + m, v, b, l);
                  }
                : () => Promise.resolve(),
        { when: p } = f;
    if (p) {
        const [m, y] = p === "beforeChildren" ? [d, h] : [h, d];
        return m().then(() => y());
    } else return Promise.all([d(), h(l.delay)]);
}
function nE(n, a, l = 0, r = 0, u = 1, f) {
    const d = [],
        h = (n.variantChildren.size - 1) * r,
        p = u === 1 ? (m = 0) => m * r : (m = 0) => h - m * r;
    return (
        Array.from(n.variantChildren)
            .sort(iE)
            .forEach((m, y) => {
                m.notify("AnimationStart", a),
                    d.push(
                        Af(m, a, { ...f, delay: l + p(y) }).then(() =>
                            m.notify("AnimationComplete", a)
                        )
                    );
            }),
        Promise.all(d)
    );
}
function iE(n, a) {
    return n.sortNodePosition(a);
}
function aE(n, a, l = {}) {
    n.notify("AnimationStart", a);
    let r;
    if (Array.isArray(a)) {
        const u = a.map((f) => Af(n, f, l));
        r = Promise.all(u);
    } else if (typeof a == "string") r = Af(n, a, l);
    else {
        const u = typeof a == "function" ? sl(n, a, l.custom) : a;
        r = Promise.all(Bv(n, u, l));
    }
    return r.then(() => {
        n.notify("AnimationComplete", a);
    });
}
function Vv(n, a) {
    if (!Array.isArray(a)) return !1;
    const l = a.length;
    if (l !== n.length) return !1;
    for (let r = 0; r < l; r++) if (a[r] !== n[r]) return !1;
    return !0;
}
const sE = Xf.length;
function Uv(n) {
    if (!n) return;
    if (!n.isControllingVariants) {
        const l = n.parent ? Uv(n.parent) || {} : {};
        return n.props.initial !== void 0 && (l.initial = n.props.initial), l;
    }
    const a = {};
    for (let l = 0; l < sE; l++) {
        const r = Xf[l],
            u = n.props[r];
        (nl(u) || u === !1) && (a[r] = u);
    }
    return a;
}
const lE = [...kf].reverse(),
    rE = kf.length;
function oE(n) {
    return (a) =>
        Promise.all(a.map(({ animation: l, options: r }) => aE(n, l, r)));
}
function uE(n) {
    let a = oE(n),
        l = Zg(),
        r = !0;
    const u = (p) => (m, y) => {
        var v;
        const b = sl(
            n,
            y,
            p === "exit"
                ? (v = n.presenceContext) === null || v === void 0
                    ? void 0
                    : v.custom
                : void 0
        );
        if (b) {
            const { transition: T, transitionEnd: O, ...R } = b;
            m = { ...m, ...R, ...O };
        }
        return m;
    };
    function f(p) {
        a = p(n);
    }
    function d(p) {
        const { props: m } = n,
            y = Uv(n.parent) || {},
            v = [],
            b = new Set();
        let T = {},
            O = 1 / 0;
        for (let V = 0; V < rE; V++) {
            const N = lE[V],
                k = l[N],
                G = m[N] !== void 0 ? m[N] : y[N],
                J = nl(G),
                H = N === p ? k.isActive : null;
            H === !1 && (O = V);
            let Z = G === y[N] && G !== m[N] && J;
            if (
                (Z && r && n.manuallyAnimateOnMount && (Z = !1),
                (k.protectedKeys = { ...T }),
                (!k.isActive && H === null) ||
                    (!G && !k.prevProp) ||
                    go(G) ||
                    typeof G == "boolean")
            )
                continue;
            const $ = cE(k.prevProp, G);
            let st = $ || (N === p && k.isActive && !Z && J) || (V > O && J),
                F = !1;
            const lt = Array.isArray(G) ? G : [G];
            let tt = lt.reduce(u(N), {});
            H === !1 && (tt = {});
            const { prevResolvedValues: nt = {} } = k,
                dt = { ...nt, ...tt },
                K = (M) => {
                    (st = !0),
                        b.has(M) && ((F = !0), b.delete(M)),
                        (k.needsAnimating[M] = !0);
                    const U = n.getValue(M);
                    U && (U.liveStyle = !1);
                };
            for (const M in dt) {
                const U = tt[M],
                    I = nt[M];
                if (T.hasOwnProperty(M)) continue;
                let E = !1;
                pf(U) && pf(I) ? (E = !Vv(U, I)) : (E = U !== I),
                    E
                        ? U != null
                            ? K(M)
                            : b.add(M)
                        : U !== void 0 && b.has(M)
                          ? K(M)
                          : (k.protectedKeys[M] = !0);
            }
            (k.prevProp = G),
                (k.prevResolvedValues = tt),
                k.isActive && (T = { ...T, ...tt }),
                r && n.blockInitialAnimation && (st = !1),
                st &&
                    (!(Z && $) || F) &&
                    v.push(
                        ...lt.map((M) => ({
                            animation: M,
                            options: { type: N },
                        }))
                    );
        }
        if (b.size) {
            const V = {};
            if (typeof m.initial != "boolean") {
                const N = sl(
                    n,
                    Array.isArray(m.initial) ? m.initial[0] : m.initial
                );
                N && N.transition && (V.transition = N.transition);
            }
            b.forEach((N) => {
                const k = n.getBaseTarget(N),
                    G = n.getValue(N);
                G && (G.liveStyle = !0), (V[N] = k ?? null);
            }),
                v.push({ animation: V });
        }
        let R = !!v.length;
        return (
            r &&
                (m.initial === !1 || m.initial === m.animate) &&
                !n.manuallyAnimateOnMount &&
                (R = !1),
            (r = !1),
            R ? a(v) : Promise.resolve()
        );
    }
    function h(p, m) {
        var y;
        if (l[p].isActive === m) return Promise.resolve();
        (y = n.variantChildren) === null ||
            y === void 0 ||
            y.forEach((b) => {
                var T;
                return (T = b.animationState) === null || T === void 0
                    ? void 0
                    : T.setActive(p, m);
            }),
            (l[p].isActive = m);
        const v = d(p);
        for (const b in l) l[b].protectedKeys = {};
        return v;
    }
    return {
        animateChanges: d,
        setActive: h,
        setAnimateFunction: f,
        getState: () => l,
        reset: () => {
            (l = Zg()), (r = !0);
        },
    };
}
function cE(n, a) {
    return typeof a == "string" ? a !== n : Array.isArray(a) ? !Vv(a, n) : !1;
}
function Li(n = !1) {
    return {
        isActive: n,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {},
    };
}
function Zg() {
    return {
        animate: Li(!0),
        whileInView: Li(),
        whileHover: Li(),
        whileTap: Li(),
        whileDrag: Li(),
        whileFocus: Li(),
        exit: Li(),
    };
}
class di {
    constructor(a) {
        (this.isMounted = !1), (this.node = a);
    }
    update() {}
}
class fE extends di {
    constructor(a) {
        super(a), a.animationState || (a.animationState = uE(a));
    }
    updateAnimationControlsSubscription() {
        const { animate: a } = this.node.getProps();
        go(a) && (this.unmountControls = a.subscribe(this.node));
    }
    mount() {
        this.updateAnimationControlsSubscription();
    }
    update() {
        const { animate: a } = this.node.getProps(),
            { animate: l } = this.node.prevProps || {};
        a !== l && this.updateAnimationControlsSubscription();
    }
    unmount() {
        var a;
        this.node.animationState.reset(),
            (a = this.unmountControls) === null || a === void 0 || a.call(this);
    }
}
let dE = 0;
class hE extends di {
    constructor() {
        super(...arguments), (this.id = dE++);
    }
    update() {
        if (!this.node.presenceContext) return;
        const { isPresent: a, onExitComplete: l } = this.node.presenceContext,
            { isPresent: r } = this.node.prevPresenceContext || {};
        if (!this.node.animationState || a === r) return;
        const u = this.node.animationState.setActive("exit", !a);
        l &&
            !a &&
            u.then(() => {
                l(this.id);
            });
    }
    mount() {
        const { register: a, onExitComplete: l } =
            this.node.presenceContext || {};
        l && l(this.id), a && (this.unmount = a(this.id));
    }
    unmount() {}
}
const pE = { animation: { Feature: fE }, exit: { Feature: hE } };
function rl(n, a, l, r = { passive: !0 }) {
    return n.addEventListener(a, l, r), () => n.removeEventListener(a, l);
}
function hl(n) {
    return { point: { x: n.pageX, y: n.pageY } };
}
const mE = (n) => (a) => ld(a) && n(a, hl(a));
function Ca(n, a, l, r) {
    return rl(n, a, mE(l), r);
}
function Hv({ top: n, left: a, right: l, bottom: r }) {
    return { x: { min: a, max: l }, y: { min: n, max: r } };
}
function gE({ x: n, y: a }) {
    return { top: a.min, right: n.max, bottom: a.max, left: n.min };
}
function yE(n, a) {
    if (!a) return n;
    const l = a({ x: n.left, y: n.top }),
        r = a({ x: n.right, y: n.bottom });
    return { top: l.y, left: l.x, bottom: r.y, right: r.x };
}
const qv = 1e-4,
    vE = 1 - qv,
    SE = 1 + qv,
    Yv = 0.01,
    bE = 0 - Yv,
    xE = 0 + Yv;
function me(n) {
    return n.max - n.min;
}
function TE(n, a, l) {
    return Math.abs(n - a) <= l;
}
function Qg(n, a, l, r = 0.5) {
    (n.origin = r),
        (n.originPoint = Ut(a.min, a.max, n.origin)),
        (n.scale = me(l) / me(a)),
        (n.translate = Ut(l.min, l.max, n.origin) - n.originPoint),
        ((n.scale >= vE && n.scale <= SE) || isNaN(n.scale)) && (n.scale = 1),
        ((n.translate >= bE && n.translate <= xE) || isNaN(n.translate)) &&
            (n.translate = 0);
}
function $s(n, a, l, r) {
    Qg(n.x, a.x, l.x, r ? r.originX : void 0),
        Qg(n.y, a.y, l.y, r ? r.originY : void 0);
}
function Fg(n, a, l) {
    (n.min = l.min + a.min), (n.max = n.min + me(a));
}
function EE(n, a, l) {
    Fg(n.x, a.x, l.x), Fg(n.y, a.y, l.y);
}
function Wg(n, a, l) {
    (n.min = a.min - l.min), (n.max = n.min + me(a));
}
function Is(n, a, l) {
    Wg(n.x, a.x, l.x), Wg(n.y, a.y, l.y);
}
const Jg = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
    za = () => ({ x: Jg(), y: Jg() }),
    $g = () => ({ min: 0, max: 0 }),
    Kt = () => ({ x: $g(), y: $g() });
function Xe(n) {
    return [n("x"), n("y")];
}
function Kc(n) {
    return n === void 0 || n === 1;
}
function Mf({ scale: n, scaleX: a, scaleY: l }) {
    return !Kc(n) || !Kc(a) || !Kc(l);
}
function Vi(n) {
    return (
        Mf(n) ||
        Gv(n) ||
        n.z ||
        n.rotate ||
        n.rotateX ||
        n.rotateY ||
        n.skewX ||
        n.skewY
    );
}
function Gv(n) {
    return Ig(n.x) || Ig(n.y);
}
function Ig(n) {
    return n && n !== "0%";
}
function so(n, a, l) {
    const r = n - l,
        u = a * r;
    return l + u;
}
function t0(n, a, l, r, u) {
    return u !== void 0 && (n = so(n, u, r)), so(n, l, r) + a;
}
function Of(n, a = 0, l = 1, r, u) {
    (n.min = t0(n.min, a, l, r, u)), (n.max = t0(n.max, a, l, r, u));
}
function kv(n, { x: a, y: l }) {
    Of(n.x, a.translate, a.scale, a.originPoint),
        Of(n.y, l.translate, l.scale, l.originPoint);
}
const e0 = 0.999999999999,
    n0 = 1.0000000000001;
function AE(n, a, l, r = !1) {
    const u = l.length;
    if (!u) return;
    a.x = a.y = 1;
    let f, d;
    for (let h = 0; h < u; h++) {
        (f = l[h]), (d = f.projectionDelta);
        const { visualElement: p } = f.options;
        (p && p.props.style && p.props.style.display === "contents") ||
            (r &&
                f.options.layoutScroll &&
                f.scroll &&
                f !== f.root &&
                Na(n, { x: -f.scroll.offset.x, y: -f.scroll.offset.y }),
            d && ((a.x *= d.x.scale), (a.y *= d.y.scale), kv(n, d)),
            r && Vi(f.latestValues) && Na(n, f.latestValues));
    }
    a.x < n0 && a.x > e0 && (a.x = 1), a.y < n0 && a.y > e0 && (a.y = 1);
}
function ja(n, a) {
    (n.min = n.min + a), (n.max = n.max + a);
}
function i0(n, a, l, r, u = 0.5) {
    const f = Ut(n.min, n.max, u);
    Of(n, a, l, f, r);
}
function Na(n, a) {
    i0(n.x, a.x, a.scaleX, a.scale, a.originX),
        i0(n.y, a.y, a.scaleY, a.scale, a.originY);
}
function Xv(n, a) {
    return Hv(yE(n.getBoundingClientRect(), a));
}
function ME(n, a, l) {
    const r = Xv(n, l),
        { scroll: u } = a;
    return u && (ja(r.x, u.offset.x), ja(r.y, u.offset.y)), r;
}
const a0 = (n, a) => Math.abs(n - a);
function OE(n, a) {
    const l = a0(n.x, a.x),
        r = a0(n.y, a.y);
    return Math.sqrt(l ** 2 + r ** 2);
}
class Kv {
    constructor(
        a,
        l,
        { transformPagePoint: r, dragSnapToOrigin: u = !1 } = {}
    ) {
        if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = () => {
                if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                const y = Zc(this.lastMoveEventInfo, this.history),
                    v = this.startEvent !== null,
                    b = OE(y.offset, { x: 0, y: 0 }) >= 3;
                if (!v && !b) return;
                const { point: T } = y,
                    { timestamp: O } = ne;
                this.history.push({ ...T, timestamp: O });
                const { onStart: R, onMove: V } = this.handlers;
                v ||
                    (R && R(this.lastMoveEvent, y),
                    (this.startEvent = this.lastMoveEvent)),
                    V && V(this.lastMoveEvent, y);
            }),
            (this.handlePointerMove = (y, v) => {
                if (
                    y.target instanceof Element &&
                    y.target.hasPointerCapture &&
                    y.pointerId !== void 0
                )
                    try {
                        if (!y.target.hasPointerCapture(y.pointerId)) return;
                    } catch {}
                (this.lastMoveEvent = y),
                    (this.lastMoveEventInfo = Pc(v, this.transformPagePoint)),
                    Ot.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (y, v) => {
                eo(y, "release"), this.end();
                const {
                    onEnd: b,
                    onSessionEnd: T,
                    resumeAnimation: O,
                } = this.handlers;
                if (
                    (this.dragSnapToOrigin && O && O(),
                    !(this.lastMoveEvent && this.lastMoveEventInfo))
                )
                    return;
                const R = Zc(
                    y.type === "pointercancel" ||
                        y.type === "lostpointercapture"
                        ? this.lastMoveEventInfo
                        : Pc(v, this.transformPagePoint),
                    this.history
                );
                this.startEvent && b && b(y, R), T && T(y, R);
            }),
            !ld(a))
        )
            return;
        (this.dragSnapToOrigin = u),
            (this.handlers = l),
            (this.transformPagePoint = r);
        const f = hl(a),
            d = Pc(f, this.transformPagePoint),
            { point: h } = d,
            { timestamp: p } = ne;
        this.history = [{ ...h, timestamp: p }];
        const { onSessionStart: m } = l;
        m && m(a, Zc(d, this.history)),
            eo(a, "set"),
            (this.removeListeners = dl(
                Ca(a.currentTarget, "pointermove", this.handlePointerMove),
                Ca(a.currentTarget, "pointerup", this.handlePointerUp),
                Ca(a.currentTarget, "pointercancel", this.handlePointerUp),
                Ca(a.currentTarget, "lostpointercapture", this.handlePointerUp)
            ));
    }
    updateHandlers(a) {
        this.handlers = a;
    }
    end() {
        this.removeListeners && this.removeListeners(), en(this.updatePoint);
    }
}
function Pc(n, a) {
    return a ? { point: a(n.point) } : n;
}
function s0(n, a) {
    return { x: n.x - a.x, y: n.y - a.y };
}
function Zc({ point: n }, a) {
    return {
        point: n,
        delta: s0(n, Pv(a)),
        offset: s0(n, wE(a)),
        velocity: _E(a, 0.1),
    };
}
function wE(n) {
    return n[0];
}
function Pv(n) {
    return n[n.length - 1];
}
function _E(n, a) {
    if (n.length < 2) return { x: 0, y: 0 };
    let l = n.length - 1,
        r = null;
    const u = Pv(n);
    for (; l >= 0 && ((r = n[l]), !(u.timestamp - r.timestamp > Nn(a))); ) l--;
    if (!r) return { x: 0, y: 0 };
    const f = Ln(u.timestamp - r.timestamp);
    if (f === 0) return { x: 0, y: 0 };
    const d = { x: (u.x - r.x) / f, y: (u.y - r.y) / f };
    return d.x === 1 / 0 && (d.x = 0), d.y === 1 / 0 && (d.y = 0), d;
}
function DE(n, { min: a, max: l }, r) {
    return (
        a !== void 0 && n < a
            ? (n = r ? Ut(a, n, r.min) : Math.max(n, a))
            : l !== void 0 &&
              n > l &&
              (n = r ? Ut(l, n, r.max) : Math.min(n, l)),
        n
    );
}
function l0(n, a, l) {
    return {
        min: a !== void 0 ? n.min + a : void 0,
        max: l !== void 0 ? n.max + l - (n.max - n.min) : void 0,
    };
}
function RE(n, { top: a, left: l, bottom: r, right: u }) {
    return { x: l0(n.x, l, u), y: l0(n.y, a, r) };
}
function r0(n, a) {
    let l = a.min - n.min,
        r = a.max - n.max;
    return (
        a.max - a.min < n.max - n.min && ([l, r] = [r, l]), { min: l, max: r }
    );
}
function CE(n, a) {
    return { x: r0(n.x, a.x), y: r0(n.y, a.y) };
}
function zE(n, a) {
    let l = 0.5;
    const r = me(n),
        u = me(a);
    return (
        u > r
            ? (l = ki(a.min, a.max - r, n.min))
            : r > u && (l = ki(n.min, n.max - u, a.min)),
        pn(0, 1, l)
    );
}
function jE(n, a) {
    const l = {};
    return (
        a.min !== void 0 && (l.min = a.min - n.min),
        a.max !== void 0 && (l.max = a.max - n.min),
        l
    );
}
const wf = 0.35;
function NE(n = wf) {
    return (
        n === !1 ? (n = 0) : n === !0 && (n = wf),
        { x: o0(n, "left", "right"), y: o0(n, "top", "bottom") }
    );
}
function o0(n, a, l) {
    return { min: u0(n, a), max: u0(n, l) };
}
function u0(n, a) {
    return typeof n == "number" ? n : n[a] || 0;
}
const LE = new WeakMap();
class BE {
    constructor(a) {
        (this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = Kt()),
            (this.visualElement = a);
    }
    start(a, { snapToCursor: l = !1 } = {}) {
        const { presenceContext: r } = this.visualElement;
        if (r && r.isPresent === !1) return;
        const u = (y) => {
                const { dragSnapToOrigin: v } = this.getProps();
                v ? this.pauseAnimation() : this.stopAnimation(),
                    l && this.snapToCursor(hl(y).point);
            },
            f = (y, v) => {
                const {
                    drag: b,
                    dragPropagation: T,
                    onDragStart: O,
                } = this.getProps();
                if (
                    b &&
                    !T &&
                    (this.openDragLock && this.openDragLock(),
                    (this.openDragLock = RT(b)),
                    !this.openDragLock)
                )
                    return;
                (this.isDragging = !0),
                    (this.currentDirection = null),
                    this.resolveConstraints(),
                    this.visualElement.projection &&
                        ((this.visualElement.projection.isAnimationBlocked =
                            !0),
                        (this.visualElement.projection.target = void 0)),
                    Xe((V) => {
                        let N = this.getAxisMotionValue(V).get() || 0;
                        if (dn.test(N)) {
                            const { projection: k } = this.visualElement;
                            if (k && k.layout) {
                                const G = k.layout.layoutBox[V];
                                G && (N = me(G) * (parseFloat(N) / 100));
                            }
                        }
                        this.originPoint[V] = N;
                    }),
                    O && Ot.postRender(() => O(y, v)),
                    yf(this.visualElement, "transform");
                const { animationState: R } = this.visualElement;
                R && R.setActive("whileDrag", !0);
            },
            d = (y, v) => {
                const {
                    dragPropagation: b,
                    dragDirectionLock: T,
                    onDirectionLock: O,
                    onDrag: R,
                } = this.getProps();
                if (!b && !this.openDragLock) return;
                const { offset: V } = v;
                if (T && this.currentDirection === null) {
                    (this.currentDirection = VE(V)),
                        this.currentDirection !== null &&
                            O &&
                            O(this.currentDirection);
                    return;
                }
                this.updateAxis("x", v.point, V),
                    this.updateAxis("y", v.point, V),
                    this.visualElement.render(),
                    R && R(y, v);
            },
            h = (y, v) => this.stop(y, v),
            p = () =>
                Xe((y) => {
                    var v;
                    return (
                        this.getAnimationState(y) === "paused" &&
                        ((v = this.getAxisMotionValue(y).animation) === null ||
                        v === void 0
                            ? void 0
                            : v.play())
                    );
                }),
            { dragSnapToOrigin: m } = this.getProps();
        this.panSession = new Kv(
            a,
            {
                onSessionStart: u,
                onStart: f,
                onMove: d,
                onSessionEnd: h,
                resumeAnimation: p,
            },
            {
                transformPagePoint: this.visualElement.getTransformPagePoint(),
                dragSnapToOrigin: m,
            }
        );
    }
    stop(a, l) {
        const r = this.isDragging;
        if ((this.cancel(), !r)) return;
        const { velocity: u } = l;
        this.startAnimation(u);
        const { onDragEnd: f } = this.getProps();
        f && Ot.postRender(() => f(a, l));
    }
    cancel() {
        this.isDragging = !1;
        const { projection: a, animationState: l } = this.visualElement;
        a && (a.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
        const { dragPropagation: r } = this.getProps();
        !r &&
            this.openDragLock &&
            (this.openDragLock(), (this.openDragLock = null)),
            l && l.setActive("whileDrag", !1);
    }
    updateAxis(a, l, r) {
        const { drag: u } = this.getProps();
        if (!r || !zr(a, u, this.currentDirection)) return;
        const f = this.getAxisMotionValue(a);
        let d = this.originPoint[a] + r[a];
        this.constraints &&
            this.constraints[a] &&
            (d = DE(d, this.constraints[a], this.elastic[a])),
            f.set(d);
    }
    resolveConstraints() {
        var a;
        const { dragConstraints: l, dragElastic: r } = this.getProps(),
            u =
                this.visualElement.projection &&
                !this.visualElement.projection.layout
                    ? this.visualElement.projection.measure(!1)
                    : (a = this.visualElement.projection) === null ||
                        a === void 0
                      ? void 0
                      : a.layout,
            f = this.constraints;
        l && Da(l)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : l && u
              ? (this.constraints = RE(u.layoutBox, l))
              : (this.constraints = !1),
            (this.elastic = NE(r)),
            f !== this.constraints &&
                u &&
                this.constraints &&
                !this.hasMutatedConstraints &&
                Xe((d) => {
                    this.constraints !== !1 &&
                        this.getAxisMotionValue(d) &&
                        (this.constraints[d] = jE(
                            u.layoutBox[d],
                            this.constraints[d]
                        ));
                });
    }
    resolveRefConstraints() {
        const { dragConstraints: a, onMeasureDragConstraints: l } =
            this.getProps();
        if (!a || !Da(a)) return !1;
        const r = a.current,
            { projection: u } = this.visualElement;
        if (!u || !u.layout) return !1;
        const f = ME(r, u.root, this.visualElement.getTransformPagePoint());
        let d = CE(u.layout.layoutBox, f);
        if (l) {
            const h = l(gE(d));
            (this.hasMutatedConstraints = !!h), h && (d = Hv(h));
        }
        return d;
    }
    startAnimation(a) {
        const {
                drag: l,
                dragMomentum: r,
                dragElastic: u,
                dragTransition: f,
                dragSnapToOrigin: d,
                onDragTransitionEnd: h,
            } = this.getProps(),
            p = this.constraints || {},
            m = Xe((y) => {
                if (!zr(y, l, this.currentDirection)) return;
                let v = (p && p[y]) || {};
                d && (v = { min: 0, max: 0 });
                const b = u ? 200 : 1e6,
                    T = u ? 40 : 1e7,
                    O = {
                        type: "inertia",
                        velocity: r ? a[y] : 0,
                        bounceStiffness: b,
                        bounceDamping: T,
                        timeConstant: 750,
                        restDelta: 1,
                        restSpeed: 10,
                        ...f,
                        ...v,
                    };
                return this.startAxisValueAnimation(y, O);
            });
        return Promise.all(m).then(h);
    }
    startAxisValueAnimation(a, l) {
        const r = this.getAxisMotionValue(a);
        return (
            yf(this.visualElement, a),
            r.start(bd(a, r, 0, l, this.visualElement, !1))
        );
    }
    stopAnimation() {
        Xe((a) => this.getAxisMotionValue(a).stop());
    }
    pauseAnimation() {
        Xe((a) => {
            var l;
            return (l = this.getAxisMotionValue(a).animation) === null ||
                l === void 0
                ? void 0
                : l.pause();
        });
    }
    getAnimationState(a) {
        var l;
        return (l = this.getAxisMotionValue(a).animation) === null ||
            l === void 0
            ? void 0
            : l.state;
    }
    getAxisMotionValue(a) {
        const l = `_drag${a.toUpperCase()}`,
            r = this.visualElement.getProps(),
            u = r[l];
        return (
            u ||
            this.visualElement.getValue(
                a,
                (r.initial ? r.initial[a] : void 0) || 0
            )
        );
    }
    snapToCursor(a) {
        Xe((l) => {
            const { drag: r } = this.getProps();
            if (!zr(l, r, this.currentDirection)) return;
            const { projection: u } = this.visualElement,
                f = this.getAxisMotionValue(l);
            if (u && u.layout) {
                const { min: d, max: h } = u.layout.layoutBox[l];
                f.set(a[l] - Ut(d, h, 0.5));
            }
        });
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current) return;
        const { drag: a, dragConstraints: l } = this.getProps(),
            { projection: r } = this.visualElement;
        if (!Da(l) || !r || !this.constraints) return;
        this.stopAnimation();
        const u = { x: 0, y: 0 };
        Xe((d) => {
            const h = this.getAxisMotionValue(d);
            if (h && this.constraints !== !1) {
                const p = h.get();
                u[d] = zE({ min: p, max: p }, this.constraints[d]);
            }
        });
        const { transformTemplate: f } = this.visualElement.getProps();
        (this.visualElement.current.style.transform = f ? f({}, "") : "none"),
            r.root && r.root.updateScroll(),
            r.updateLayout(),
            this.resolveConstraints(),
            Xe((d) => {
                if (!zr(d, a, null)) return;
                const h = this.getAxisMotionValue(d),
                    { min: p, max: m } = this.constraints[d];
                h.set(Ut(p, m, u[d]));
            });
    }
    addListeners() {
        if (!this.visualElement.current) return;
        LE.set(this.visualElement, this);
        const a = this.visualElement.current,
            l = Ca(a, "pointerdown", (p) => {
                const { drag: m, dragListener: y = !0 } = this.getProps();
                m && y && this.start(p);
            }),
            r = () => {
                const { dragConstraints: p } = this.getProps();
                Da(p) &&
                    p.current &&
                    (this.constraints = this.resolveRefConstraints());
            },
            { projection: u } = this.visualElement,
            f = u.addEventListener("measure", r);
        u && !u.layout && (u.root && u.root.updateScroll(), u.updateLayout()),
            Ot.read(r);
        const d = rl(window, "resize", () =>
                this.scalePositionWithinConstraints()
            ),
            h = u.addEventListener(
                "didUpdate",
                ({ delta: p, hasLayoutChanged: m }) => {
                    this.isDragging &&
                        m &&
                        (Xe((y) => {
                            const v = this.getAxisMotionValue(y);
                            v &&
                                ((this.originPoint[y] += p[y].translate),
                                v.set(v.get() + p[y].translate));
                        }),
                        this.visualElement.render());
                }
            );
        return () => {
            d(), l(), f(), h && h();
        };
    }
    getProps() {
        const a = this.visualElement.getProps(),
            {
                drag: l = !1,
                dragDirectionLock: r = !1,
                dragPropagation: u = !1,
                dragConstraints: f = !1,
                dragElastic: d = wf,
                dragMomentum: h = !0,
            } = a;
        return {
            ...a,
            drag: l,
            dragDirectionLock: r,
            dragPropagation: u,
            dragConstraints: f,
            dragElastic: d,
            dragMomentum: h,
        };
    }
}
function zr(n, a, l) {
    return (a === !0 || a === n) && (l === null || l === n);
}
function VE(n, a = 10) {
    let l = null;
    return Math.abs(n.y) > a ? (l = "y") : Math.abs(n.x) > a && (l = "x"), l;
}
class UE extends di {
    constructor(a) {
        super(a),
            (this.removeGroupControls = ge),
            (this.removeListeners = ge),
            (this.controls = new BE(a));
    }
    mount() {
        const { dragControls: a } = this.node.getProps();
        a && (this.removeGroupControls = a.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || ge);
    }
    unmount() {
        this.removeGroupControls(), this.removeListeners();
    }
}
const c0 = (n) => (a, l) => {
    n && Ot.postRender(() => n(a, l));
};
class HE extends di {
    constructor() {
        super(...arguments), (this.removePointerDownListener = ge);
    }
    onPointerDown(a) {
        this.session = new Kv(a, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
        });
    }
    createPanHandlers() {
        const {
            onPanSessionStart: a,
            onPanStart: l,
            onPan: r,
            onPanEnd: u,
        } = this.node.getProps();
        return {
            onSessionStart: c0(a),
            onStart: c0(l),
            onMove: r,
            onEnd: (f, d) => {
                delete this.session, u && Ot.postRender(() => u(f, d));
            },
        };
    }
    mount() {
        this.removePointerDownListener = Ca(
            this.node.current,
            "pointerdown",
            (a) => this.onPointerDown(a)
        );
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
        this.removePointerDownListener(), this.session && this.session.end();
    }
}
const Kr = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function f0(n, a) {
    return a.max === a.min ? 0 : (n / (a.max - a.min)) * 100;
}
const Xs = {
        correct: (n, a) => {
            if (!a.target) return n;
            if (typeof n == "string")
                if (ft.test(n)) n = parseFloat(n);
                else return n;
            const l = f0(n, a.target.x),
                r = f0(n, a.target.y);
            return `${l}% ${r}%`;
        },
    },
    qE = {
        correct: (n, { treeScale: a, projectionDelta: l }) => {
            const r = n,
                u = fi.parse(n);
            if (u.length > 5) return r;
            const f = fi.createTransformer(n),
                d = typeof u[0] != "number" ? 1 : 0,
                h = l.x.scale * a.x,
                p = l.y.scale * a.y;
            (u[0 + d] /= h), (u[1 + d] /= p);
            const m = Ut(h, p, 0.5);
            return (
                typeof u[2 + d] == "number" && (u[2 + d] /= m),
                typeof u[3 + d] == "number" && (u[3 + d] /= m),
                f(u)
            );
        },
    };
class YE extends Q.Component {
    componentDidMount() {
        const {
                visualElement: a,
                layoutGroup: l,
                switchLayoutGroup: r,
                layoutId: u,
            } = this.props,
            { projection: f } = a;
        Fx(GE),
            f &&
                (l.group && l.group.add(f),
                r && r.register && u && r.register(f),
                f.root.didUpdate(),
                f.addEventListener("animationComplete", () => {
                    this.safeToRemove();
                }),
                f.setOptions({
                    ...f.options,
                    onExitComplete: () => this.safeToRemove(),
                })),
            (Kr.hasEverUpdated = !0);
    }
    getSnapshotBeforeUpdate(a) {
        const {
                layoutDependency: l,
                visualElement: r,
                drag: u,
                isPresent: f,
            } = this.props,
            d = r.projection;
        return (
            d &&
                ((d.isPresent = f),
                u || a.layoutDependency !== l || l === void 0
                    ? d.willUpdate()
                    : this.safeToRemove(),
                a.isPresent !== f &&
                    (f
                        ? d.promote()
                        : d.relegate() ||
                          Ot.postRender(() => {
                              const h = d.getStack();
                              (!h || !h.members.length) && this.safeToRemove();
                          }))),
            null
        );
    }
    componentDidUpdate() {
        const { projection: a } = this.props.visualElement;
        a &&
            (a.root.didUpdate(),
            Pf.postRender(() => {
                !a.currentAnimation && a.isLead() && this.safeToRemove();
            }));
    }
    componentWillUnmount() {
        const {
                visualElement: a,
                layoutGroup: l,
                switchLayoutGroup: r,
            } = this.props,
            { projection: u } = a;
        u &&
            (u.scheduleCheckAfterUnmount(),
            l && l.group && l.group.remove(u),
            r && r.deregister && r.deregister(u));
    }
    safeToRemove() {
        const { safeToRemove: a } = this.props;
        a && a();
    }
    render() {
        return null;
    }
}
function Zv(n) {
    const [a, l] = Ox(),
        r = Q.useContext(Dy);
    return _.jsx(YE, {
        ...n,
        layoutGroup: r,
        switchLayoutGroup: Q.useContext(By),
        isPresent: a,
        safeToRemove: l,
    });
}
const GE = {
    borderRadius: {
        ...Xs,
        applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
        ],
    },
    borderTopLeftRadius: Xs,
    borderTopRightRadius: Xs,
    borderBottomLeftRadius: Xs,
    borderBottomRightRadius: Xs,
    boxShadow: qE,
};
function kE(n, a, l) {
    const r = fe(n) ? n : fn(n);
    return r.start(bd("", r, a, l)), r.animation;
}
function XE(n) {
    return n instanceof SVGElement && n.tagName !== "svg";
}
const KE = (n, a) => n.depth - a.depth;
class PE {
    constructor() {
        (this.children = []), (this.isDirty = !1);
    }
    add(a) {
        rd(this.children, a), (this.isDirty = !0);
    }
    remove(a) {
        od(this.children, a), (this.isDirty = !0);
    }
    forEach(a) {
        this.isDirty && this.children.sort(KE),
            (this.isDirty = !1),
            this.children.forEach(a);
    }
}
function ZE(n, a) {
    const l = hn.now(),
        r = ({ timestamp: u }) => {
            const f = u - l;
            f >= a && (en(r), n(f - a));
        };
    return Ot.read(r, !0), () => en(r);
}
const Qv = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
    QE = Qv.length,
    d0 = (n) => (typeof n == "string" ? parseFloat(n) : n),
    h0 = (n) => typeof n == "number" || ft.test(n);
function FE(n, a, l, r, u, f) {
    u
        ? ((n.opacity = Ut(0, l.opacity !== void 0 ? l.opacity : 1, WE(r))),
          (n.opacityExit = Ut(a.opacity !== void 0 ? a.opacity : 1, 0, JE(r))))
        : f &&
          (n.opacity = Ut(
              a.opacity !== void 0 ? a.opacity : 1,
              l.opacity !== void 0 ? l.opacity : 1,
              r
          ));
    for (let d = 0; d < QE; d++) {
        const h = `border${Qv[d]}Radius`;
        let p = p0(a, h),
            m = p0(l, h);
        if (p === void 0 && m === void 0) continue;
        p || (p = 0),
            m || (m = 0),
            p === 0 || m === 0 || h0(p) === h0(m)
                ? ((n[h] = Math.max(Ut(d0(p), d0(m), r), 0)),
                  (dn.test(m) || dn.test(p)) && (n[h] += "%"))
                : (n[h] = m);
    }
    (a.rotate || l.rotate) && (n.rotate = Ut(a.rotate || 0, l.rotate || 0, r));
}
function p0(n, a) {
    return n[a] !== void 0 ? n[a] : n.borderRadius;
}
const WE = Fv(0, 0.5, dv),
    JE = Fv(0.5, 0.95, ge);
function Fv(n, a, l) {
    return (r) => (r < n ? 0 : r > a ? 1 : l(ki(n, a, r)));
}
function m0(n, a) {
    (n.min = a.min), (n.max = a.max);
}
function Ge(n, a) {
    m0(n.x, a.x), m0(n.y, a.y);
}
function g0(n, a) {
    (n.translate = a.translate),
        (n.scale = a.scale),
        (n.originPoint = a.originPoint),
        (n.origin = a.origin);
}
function y0(n, a, l, r, u) {
    return (
        (n -= a),
        (n = so(n, 1 / l, r)),
        u !== void 0 && (n = so(n, 1 / u, r)),
        n
    );
}
function $E(n, a = 0, l = 1, r = 0.5, u, f = n, d = n) {
    if (
        (dn.test(a) &&
            ((a = parseFloat(a)), (a = Ut(d.min, d.max, a / 100) - d.min)),
        typeof a != "number")
    )
        return;
    let h = Ut(f.min, f.max, r);
    n === f && (h -= a),
        (n.min = y0(n.min, a, l, h, u)),
        (n.max = y0(n.max, a, l, h, u));
}
function v0(n, a, [l, r, u], f, d) {
    $E(n, a[l], a[r], a[u], a.scale, f, d);
}
const IE = ["x", "scaleX", "originX"],
    tA = ["y", "scaleY", "originY"];
function S0(n, a, l, r) {
    v0(n.x, a, IE, l ? l.x : void 0, r ? r.x : void 0),
        v0(n.y, a, tA, l ? l.y : void 0, r ? r.y : void 0);
}
function b0(n) {
    return n.translate === 0 && n.scale === 1;
}
function Wv(n) {
    return b0(n.x) && b0(n.y);
}
function x0(n, a) {
    return n.min === a.min && n.max === a.max;
}
function eA(n, a) {
    return x0(n.x, a.x) && x0(n.y, a.y);
}
function T0(n, a) {
    return (
        Math.round(n.min) === Math.round(a.min) &&
        Math.round(n.max) === Math.round(a.max)
    );
}
function Jv(n, a) {
    return T0(n.x, a.x) && T0(n.y, a.y);
}
function E0(n) {
    return me(n.x) / me(n.y);
}
function A0(n, a) {
    return (
        n.translate === a.translate &&
        n.scale === a.scale &&
        n.originPoint === a.originPoint
    );
}
class nA {
    constructor() {
        this.members = [];
    }
    add(a) {
        rd(this.members, a), a.scheduleRender();
    }
    remove(a) {
        if (
            (od(this.members, a),
            a === this.prevLead && (this.prevLead = void 0),
            a === this.lead)
        ) {
            const l = this.members[this.members.length - 1];
            l && this.promote(l);
        }
    }
    relegate(a) {
        const l = this.members.findIndex((u) => a === u);
        if (l === 0) return !1;
        let r;
        for (let u = l; u >= 0; u--) {
            const f = this.members[u];
            if (f.isPresent !== !1) {
                r = f;
                break;
            }
        }
        return r ? (this.promote(r), !0) : !1;
    }
    promote(a, l) {
        const r = this.lead;
        if (a !== r && ((this.prevLead = r), (this.lead = a), a.show(), r)) {
            r.instance && r.scheduleRender(),
                a.scheduleRender(),
                (a.resumeFrom = r),
                l && (a.resumeFrom.preserveOpacity = !0),
                r.snapshot &&
                    ((a.snapshot = r.snapshot),
                    (a.snapshot.latestValues =
                        r.animationValues || r.latestValues)),
                a.root && a.root.isUpdating && (a.isLayoutDirty = !0);
            const { crossfade: u } = a.options;
            u === !1 && r.hide();
        }
    }
    exitAnimationComplete() {
        this.members.forEach((a) => {
            const { options: l, resumingFrom: r } = a;
            l.onExitComplete && l.onExitComplete(),
                r && r.options.onExitComplete && r.options.onExitComplete();
        });
    }
    scheduleRender() {
        this.members.forEach((a) => {
            a.instance && a.scheduleRender(!1);
        });
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
    }
}
function iA(n, a, l) {
    let r = "";
    const u = n.x.translate / a.x,
        f = n.y.translate / a.y,
        d = (l == null ? void 0 : l.z) || 0;
    if (
        ((u || f || d) && (r = `translate3d(${u}px, ${f}px, ${d}px) `),
        (a.x !== 1 || a.y !== 1) && (r += `scale(${1 / a.x}, ${1 / a.y}) `),
        l)
    ) {
        const {
            transformPerspective: m,
            rotate: y,
            rotateX: v,
            rotateY: b,
            skewX: T,
            skewY: O,
        } = l;
        m && (r = `perspective(${m}px) ${r}`),
            y && (r += `rotate(${y}deg) `),
            v && (r += `rotateX(${v}deg) `),
            b && (r += `rotateY(${b}deg) `),
            T && (r += `skewX(${T}deg) `),
            O && (r += `skewY(${O}deg) `);
    }
    const h = n.x.scale * a.x,
        p = n.y.scale * a.y;
    return (h !== 1 || p !== 1) && (r += `scale(${h}, ${p})`), r || "none";
}
const Qc = ["", "X", "Y", "Z"],
    aA = { visibility: "hidden" },
    M0 = 1e3;
let sA = 0;
function Fc(n, a, l, r) {
    const { latestValues: u } = a;
    u[n] && ((l[n] = u[n]), a.setStaticValue(n, 0), r && (r[n] = 0));
}
function $v(n) {
    if (((n.hasCheckedOptimisedAppear = !0), n.root === n)) return;
    const { visualElement: a } = n.options;
    if (!a) return;
    const l = sv(a);
    if (window.MotionHasOptimisedAnimation(l, "transform")) {
        const { layout: u, layoutId: f } = n.options;
        window.MotionCancelOptimisedAnimation(l, "transform", Ot, !(u || f));
    }
    const { parent: r } = n;
    r && !r.hasCheckedOptimisedAppear && $v(r);
}
function Iv({
    attachResizeListener: n,
    defaultParent: a,
    measureScroll: l,
    checkIsScrollRoot: r,
    resetTransform: u,
}) {
    return class {
        constructor(d = {}, h = a == null ? void 0 : a()) {
            (this.id = sA++),
                (this.animationId = 0),
                (this.children = new Set()),
                (this.options = {}),
                (this.isTreeAnimating = !1),
                (this.isAnimationBlocked = !1),
                (this.isLayoutDirty = !1),
                (this.isProjectionDirty = !1),
                (this.isSharedProjectionDirty = !1),
                (this.isTransformDirty = !1),
                (this.updateManuallyBlocked = !1),
                (this.updateBlockedByResize = !1),
                (this.isUpdating = !1),
                (this.isSVG = !1),
                (this.needsReset = !1),
                (this.shouldResetTransform = !1),
                (this.hasCheckedOptimisedAppear = !1),
                (this.treeScale = { x: 1, y: 1 }),
                (this.eventHandlers = new Map()),
                (this.hasTreeAnimated = !1),
                (this.updateScheduled = !1),
                (this.scheduleUpdate = () => this.update()),
                (this.projectionUpdateScheduled = !1),
                (this.checkUpdateFailed = () => {
                    this.isUpdating &&
                        ((this.isUpdating = !1), this.clearAllSnapshots());
                }),
                (this.updateProjection = () => {
                    (this.projectionUpdateScheduled = !1),
                        this.nodes.forEach(oA),
                        this.nodes.forEach(hA),
                        this.nodes.forEach(pA),
                        this.nodes.forEach(uA);
                }),
                (this.resolvedRelativeTargetAt = 0),
                (this.hasProjected = !1),
                (this.isVisible = !0),
                (this.animationProgress = 0),
                (this.sharedNodes = new Map()),
                (this.latestValues = d),
                (this.root = h ? h.root || h : this),
                (this.path = h ? [...h.path, h] : []),
                (this.parent = h),
                (this.depth = h ? h.depth + 1 : 0);
            for (let p = 0; p < this.path.length; p++)
                this.path[p].shouldResetTransform = !0;
            this.root === this && (this.nodes = new PE());
        }
        addEventListener(d, h) {
            return (
                this.eventHandlers.has(d) ||
                    this.eventHandlers.set(d, new ud()),
                this.eventHandlers.get(d).add(h)
            );
        }
        notifyListeners(d, ...h) {
            const p = this.eventHandlers.get(d);
            p && p.notify(...h);
        }
        hasListeners(d) {
            return this.eventHandlers.has(d);
        }
        mount(d, h = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = XE(d)), (this.instance = d);
            const { layoutId: p, layout: m, visualElement: y } = this.options;
            if (
                (y && !y.current && y.mount(d),
                this.root.nodes.add(this),
                this.parent && this.parent.children.add(this),
                h && (m || p) && (this.isLayoutDirty = !0),
                n)
            ) {
                let v;
                const b = () => (this.root.updateBlockedByResize = !1);
                n(d, () => {
                    (this.root.updateBlockedByResize = !0),
                        v && v(),
                        (v = ZE(b, 250)),
                        Kr.hasAnimatedSinceResize &&
                            ((Kr.hasAnimatedSinceResize = !1),
                            this.nodes.forEach(w0));
                });
            }
            p && this.root.registerSharedNode(p, this),
                this.options.animate !== !1 &&
                    y &&
                    (p || m) &&
                    this.addEventListener(
                        "didUpdate",
                        ({
                            delta: v,
                            hasLayoutChanged: b,
                            hasRelativeLayoutChanged: T,
                            layout: O,
                        }) => {
                            if (this.isTreeAnimationBlocked()) {
                                (this.target = void 0),
                                    (this.relativeTarget = void 0);
                                return;
                            }
                            const R =
                                    this.options.transition ||
                                    y.getDefaultTransition() ||
                                    SA,
                                {
                                    onLayoutAnimationStart: V,
                                    onLayoutAnimationComplete: N,
                                } = y.getProps(),
                                k =
                                    !this.targetLayout ||
                                    !Jv(this.targetLayout, O),
                                G = !b && T;
                            if (
                                this.options.layoutRoot ||
                                this.resumeFrom ||
                                G ||
                                (b && (k || !this.currentAnimation))
                            ) {
                                this.resumeFrom &&
                                    ((this.resumingFrom = this.resumeFrom),
                                    (this.resumingFrom.resumingFrom = void 0)),
                                    this.setAnimationOrigin(v, G);
                                const J = {
                                    ...id(R, "layout"),
                                    onPlay: V,
                                    onComplete: N,
                                };
                                (y.shouldReduceMotion ||
                                    this.options.layoutRoot) &&
                                    ((J.delay = 0), (J.type = !1)),
                                    this.startAnimation(J);
                            } else
                                b || w0(this),
                                    this.isLead() &&
                                        this.options.onExitComplete &&
                                        this.options.onExitComplete();
                            this.targetLayout = O;
                        }
                    );
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
                this.root.nodes.remove(this);
            const d = this.getStack();
            d && d.remove(this),
                this.parent && this.parent.children.delete(this),
                (this.instance = void 0),
                en(this.updateProjection);
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0;
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1;
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
        }
        isTreeAnimationBlocked() {
            return (
                this.isAnimationBlocked ||
                (this.parent && this.parent.isTreeAnimationBlocked()) ||
                !1
            );
        }
        startUpdate() {
            this.isUpdateBlocked() ||
                ((this.isUpdating = !0),
                this.nodes && this.nodes.forEach(mA),
                this.animationId++);
        }
        getTransformTemplate() {
            const { visualElement: d } = this.options;
            return d && d.getProps().transformTemplate;
        }
        willUpdate(d = !0) {
            if (
                ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
                this.options.onExitComplete && this.options.onExitComplete();
                return;
            }
            if (
                (window.MotionCancelOptimisedAnimation &&
                    !this.hasCheckedOptimisedAppear &&
                    $v(this),
                !this.root.isUpdating && this.root.startUpdate(),
                this.isLayoutDirty)
            )
                return;
            this.isLayoutDirty = !0;
            for (let y = 0; y < this.path.length; y++) {
                const v = this.path[y];
                (v.shouldResetTransform = !0),
                    v.updateScroll("snapshot"),
                    v.options.layoutRoot && v.willUpdate(!1);
            }
            const { layoutId: h, layout: p } = this.options;
            if (h === void 0 && !p) return;
            const m = this.getTransformTemplate();
            (this.prevTransformTemplateValue = m
                ? m(this.latestValues, "")
                : void 0),
                this.updateSnapshot(),
                d && this.notifyListeners("willUpdate");
        }
        update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
                this.unblockUpdate(),
                    this.clearAllSnapshots(),
                    this.nodes.forEach(O0);
                return;
            }
            this.isUpdating || this.nodes.forEach(fA),
                (this.isUpdating = !1),
                this.nodes.forEach(dA),
                this.nodes.forEach(lA),
                this.nodes.forEach(rA),
                this.clearAllSnapshots();
            const h = hn.now();
            (ne.delta = pn(0, 1e3 / 60, h - ne.timestamp)),
                (ne.timestamp = h),
                (ne.isProcessing = !0),
                qc.update.process(ne),
                qc.preRender.process(ne),
                qc.render.process(ne),
                (ne.isProcessing = !1);
        }
        didUpdate() {
            this.updateScheduled ||
                ((this.updateScheduled = !0), Pf.read(this.scheduleUpdate));
        }
        clearAllSnapshots() {
            this.nodes.forEach(cA), this.sharedNodes.forEach(gA);
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
                ((this.projectionUpdateScheduled = !0),
                Ot.preRender(this.updateProjection, !1, !0));
        }
        scheduleCheckAfterUnmount() {
            Ot.postRender(() => {
                this.isLayoutDirty
                    ? this.root.didUpdate()
                    : this.root.checkUpdateFailed();
            });
        }
        updateSnapshot() {
            this.snapshot ||
                !this.instance ||
                ((this.snapshot = this.measure()),
                this.snapshot &&
                    !me(this.snapshot.measuredBox.x) &&
                    !me(this.snapshot.measuredBox.y) &&
                    (this.snapshot = void 0));
        }
        updateLayout() {
            if (
                !this.instance ||
                (this.updateScroll(),
                !(this.options.alwaysMeasureLayout && this.isLead()) &&
                    !this.isLayoutDirty)
            )
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let p = 0; p < this.path.length; p++)
                    this.path[p].updateScroll();
            const d = this.layout;
            (this.layout = this.measure(!1)),
                (this.layoutCorrected = Kt()),
                (this.isLayoutDirty = !1),
                (this.projectionDelta = void 0),
                this.notifyListeners("measure", this.layout.layoutBox);
            const { visualElement: h } = this.options;
            h &&
                h.notify(
                    "LayoutMeasure",
                    this.layout.layoutBox,
                    d ? d.layoutBox : void 0
                );
        }
        updateScroll(d = "measure") {
            let h = !!(this.options.layoutScroll && this.instance);
            if (
                (this.scroll &&
                    this.scroll.animationId === this.root.animationId &&
                    this.scroll.phase === d &&
                    (h = !1),
                h)
            ) {
                const p = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: d,
                    isRoot: p,
                    offset: l(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : p,
                };
            }
        }
        resetTransform() {
            if (!u) return;
            const d =
                    this.isLayoutDirty ||
                    this.shouldResetTransform ||
                    this.options.alwaysMeasureLayout,
                h = this.projectionDelta && !Wv(this.projectionDelta),
                p = this.getTransformTemplate(),
                m = p ? p(this.latestValues, "") : void 0,
                y = m !== this.prevTransformTemplateValue;
            d &&
                (h || Vi(this.latestValues) || y) &&
                (u(this.instance, m),
                (this.shouldResetTransform = !1),
                this.scheduleRender());
        }
        measure(d = !0) {
            const h = this.measurePageBox();
            let p = this.removeElementScroll(h);
            return (
                d && (p = this.removeTransform(p)),
                bA(p),
                {
                    animationId: this.root.animationId,
                    measuredBox: h,
                    layoutBox: p,
                    latestValues: {},
                    source: this.id,
                }
            );
        }
        measurePageBox() {
            var d;
            const { visualElement: h } = this.options;
            if (!h) return Kt();
            const p = h.measureViewportBox();
            if (
                !(
                    ((d = this.scroll) === null || d === void 0
                        ? void 0
                        : d.wasRoot) || this.path.some(xA)
                )
            ) {
                const { scroll: y } = this.root;
                y && (ja(p.x, y.offset.x), ja(p.y, y.offset.y));
            }
            return p;
        }
        removeElementScroll(d) {
            var h;
            const p = Kt();
            if (
                (Ge(p, d),
                !((h = this.scroll) === null || h === void 0) && h.wasRoot)
            )
                return p;
            for (let m = 0; m < this.path.length; m++) {
                const y = this.path[m],
                    { scroll: v, options: b } = y;
                y !== this.root &&
                    v &&
                    b.layoutScroll &&
                    (v.wasRoot && Ge(p, d),
                    ja(p.x, v.offset.x),
                    ja(p.y, v.offset.y));
            }
            return p;
        }
        applyTransform(d, h = !1) {
            const p = Kt();
            Ge(p, d);
            for (let m = 0; m < this.path.length; m++) {
                const y = this.path[m];
                !h &&
                    y.options.layoutScroll &&
                    y.scroll &&
                    y !== y.root &&
                    Na(p, { x: -y.scroll.offset.x, y: -y.scroll.offset.y }),
                    Vi(y.latestValues) && Na(p, y.latestValues);
            }
            return Vi(this.latestValues) && Na(p, this.latestValues), p;
        }
        removeTransform(d) {
            const h = Kt();
            Ge(h, d);
            for (let p = 0; p < this.path.length; p++) {
                const m = this.path[p];
                if (!m.instance || !Vi(m.latestValues)) continue;
                Mf(m.latestValues) && m.updateSnapshot();
                const y = Kt(),
                    v = m.measurePageBox();
                Ge(y, v),
                    S0(
                        h,
                        m.latestValues,
                        m.snapshot ? m.snapshot.layoutBox : void 0,
                        y
                    );
            }
            return Vi(this.latestValues) && S0(h, this.latestValues), h;
        }
        setTargetDelta(d) {
            (this.targetDelta = d),
                this.root.scheduleUpdateProjection(),
                (this.isProjectionDirty = !0);
        }
        setOptions(d) {
            this.options = {
                ...this.options,
                ...d,
                crossfade: d.crossfade !== void 0 ? d.crossfade : !0,
            };
        }
        clearMeasurements() {
            (this.scroll = void 0),
                (this.layout = void 0),
                (this.snapshot = void 0),
                (this.prevTransformTemplateValue = void 0),
                (this.targetDelta = void 0),
                (this.target = void 0),
                (this.isLayoutDirty = !1);
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent &&
                this.relativeParent.resolvedRelativeTargetAt !== ne.timestamp &&
                this.relativeParent.resolveTargetDelta(!0);
        }
        resolveTargetDelta(d = !1) {
            var h;
            const p = this.getLead();
            this.isProjectionDirty ||
                (this.isProjectionDirty = p.isProjectionDirty),
                this.isTransformDirty ||
                    (this.isTransformDirty = p.isTransformDirty),
                this.isSharedProjectionDirty ||
                    (this.isSharedProjectionDirty = p.isSharedProjectionDirty);
            const m = !!this.resumingFrom || this !== p;
            if (
                !(
                    d ||
                    (m && this.isSharedProjectionDirty) ||
                    this.isProjectionDirty ||
                    (!((h = this.parent) === null || h === void 0) &&
                        h.isProjectionDirty) ||
                    this.attemptToResolveRelativeTarget ||
                    this.root.updateBlockedByResize
                )
            )
                return;
            const { layout: v, layoutId: b } = this.options;
            if (!(!this.layout || !(v || b))) {
                if (
                    ((this.resolvedRelativeTargetAt = ne.timestamp),
                    !this.targetDelta && !this.relativeTarget)
                ) {
                    const T = this.getClosestProjectingParent();
                    T && T.layout && this.animationProgress !== 1
                        ? ((this.relativeParent = T),
                          this.forceRelativeParentToResolveTarget(),
                          (this.relativeTarget = Kt()),
                          (this.relativeTargetOrigin = Kt()),
                          Is(
                              this.relativeTargetOrigin,
                              this.layout.layoutBox,
                              T.layout.layoutBox
                          ),
                          Ge(this.relativeTarget, this.relativeTargetOrigin))
                        : (this.relativeParent = this.relativeTarget = void 0);
                }
                if (
                    !(!this.relativeTarget && !this.targetDelta) &&
                    (this.target ||
                        ((this.target = Kt()),
                        (this.targetWithTransforms = Kt())),
                    this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target
                        ? (this.forceRelativeParentToResolveTarget(),
                          EE(
                              this.target,
                              this.relativeTarget,
                              this.relativeParent.target
                          ))
                        : this.targetDelta
                          ? (this.resumingFrom
                                ? (this.target = this.applyTransform(
                                      this.layout.layoutBox
                                  ))
                                : Ge(this.target, this.layout.layoutBox),
                            kv(this.target, this.targetDelta))
                          : Ge(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget)
                ) {
                    this.attemptToResolveRelativeTarget = !1;
                    const T = this.getClosestProjectingParent();
                    T &&
                    !!T.resumingFrom == !!this.resumingFrom &&
                    !T.options.layoutScroll &&
                    T.target &&
                    this.animationProgress !== 1
                        ? ((this.relativeParent = T),
                          this.forceRelativeParentToResolveTarget(),
                          (this.relativeTarget = Kt()),
                          (this.relativeTargetOrigin = Kt()),
                          Is(this.relativeTargetOrigin, this.target, T.target),
                          Ge(this.relativeTarget, this.relativeTargetOrigin))
                        : (this.relativeParent = this.relativeTarget = void 0);
                }
            }
        }
        getClosestProjectingParent() {
            if (
                !(
                    !this.parent ||
                    Mf(this.parent.latestValues) ||
                    Gv(this.parent.latestValues)
                )
            )
                return this.parent.isProjecting()
                    ? this.parent
                    : this.parent.getClosestProjectingParent();
        }
        isProjecting() {
            return !!(
                (this.relativeTarget ||
                    this.targetDelta ||
                    this.options.layoutRoot) &&
                this.layout
            );
        }
        calcProjection() {
            var d;
            const h = this.getLead(),
                p = !!this.resumingFrom || this !== h;
            let m = !0;
            if (
                ((this.isProjectionDirty ||
                    (!((d = this.parent) === null || d === void 0) &&
                        d.isProjectionDirty)) &&
                    (m = !1),
                p &&
                    (this.isSharedProjectionDirty || this.isTransformDirty) &&
                    (m = !1),
                this.resolvedRelativeTargetAt === ne.timestamp && (m = !1),
                m)
            )
                return;
            const { layout: y, layoutId: v } = this.options;
            if (
                ((this.isTreeAnimating = !!(
                    (this.parent && this.parent.isTreeAnimating) ||
                    this.currentAnimation ||
                    this.pendingAnimation
                )),
                this.isTreeAnimating ||
                    (this.targetDelta = this.relativeTarget = void 0),
                !this.layout || !(y || v))
            )
                return;
            Ge(this.layoutCorrected, this.layout.layoutBox);
            const b = this.treeScale.x,
                T = this.treeScale.y;
            AE(this.layoutCorrected, this.treeScale, this.path, p),
                h.layout &&
                    !h.target &&
                    (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
                    ((h.target = h.layout.layoutBox),
                    (h.targetWithTransforms = Kt()));
            const { target: O } = h;
            if (!O) {
                this.prevProjectionDelta &&
                    (this.createProjectionDeltas(), this.scheduleRender());
                return;
            }
            !this.projectionDelta || !this.prevProjectionDelta
                ? this.createProjectionDeltas()
                : (g0(this.prevProjectionDelta.x, this.projectionDelta.x),
                  g0(this.prevProjectionDelta.y, this.projectionDelta.y)),
                $s(
                    this.projectionDelta,
                    this.layoutCorrected,
                    O,
                    this.latestValues
                ),
                (this.treeScale.x !== b ||
                    this.treeScale.y !== T ||
                    !A0(this.projectionDelta.x, this.prevProjectionDelta.x) ||
                    !A0(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
                    ((this.hasProjected = !0),
                    this.scheduleRender(),
                    this.notifyListeners("projectionUpdate", O));
        }
        hide() {
            this.isVisible = !1;
        }
        show() {
            this.isVisible = !0;
        }
        scheduleRender(d = !0) {
            var h;
            if (
                ((h = this.options.visualElement) === null ||
                    h === void 0 ||
                    h.scheduleRender(),
                d)
            ) {
                const p = this.getStack();
                p && p.scheduleRender();
            }
            this.resumingFrom &&
                !this.resumingFrom.instance &&
                (this.resumingFrom = void 0);
        }
        createProjectionDeltas() {
            (this.prevProjectionDelta = za()),
                (this.projectionDelta = za()),
                (this.projectionDeltaWithTransform = za());
        }
        setAnimationOrigin(d, h = !1) {
            const p = this.snapshot,
                m = p ? p.latestValues : {},
                y = { ...this.latestValues },
                v = za();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
                (this.relativeTarget = this.relativeTargetOrigin = void 0),
                (this.attemptToResolveRelativeTarget = !h);
            const b = Kt(),
                T = p ? p.source : void 0,
                O = this.layout ? this.layout.source : void 0,
                R = T !== O,
                V = this.getStack(),
                N = !V || V.members.length <= 1,
                k = !!(
                    R &&
                    !N &&
                    this.options.crossfade === !0 &&
                    !this.path.some(vA)
                );
            this.animationProgress = 0;
            let G;
            (this.mixTargetDelta = (J) => {
                const H = J / 1e3;
                _0(v.x, d.x, H),
                    _0(v.y, d.y, H),
                    this.setTargetDelta(v),
                    this.relativeTarget &&
                        this.relativeTargetOrigin &&
                        this.layout &&
                        this.relativeParent &&
                        this.relativeParent.layout &&
                        (Is(
                            b,
                            this.layout.layoutBox,
                            this.relativeParent.layout.layoutBox
                        ),
                        yA(
                            this.relativeTarget,
                            this.relativeTargetOrigin,
                            b,
                            H
                        ),
                        G &&
                            eA(this.relativeTarget, G) &&
                            (this.isProjectionDirty = !1),
                        G || (G = Kt()),
                        Ge(G, this.relativeTarget)),
                    R &&
                        ((this.animationValues = y),
                        FE(y, m, this.latestValues, H, k, N)),
                    this.root.scheduleUpdateProjection(),
                    this.scheduleRender(),
                    (this.animationProgress = H);
            }),
                this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
        }
        startAnimation(d) {
            this.notifyListeners("animationStart"),
                this.currentAnimation && this.currentAnimation.stop(),
                this.resumingFrom &&
                    this.resumingFrom.currentAnimation &&
                    this.resumingFrom.currentAnimation.stop(),
                this.pendingAnimation &&
                    (en(this.pendingAnimation),
                    (this.pendingAnimation = void 0)),
                (this.pendingAnimation = Ot.update(() => {
                    (Kr.hasAnimatedSinceResize = !0),
                        (this.currentAnimation = kE(0, M0, {
                            ...d,
                            onUpdate: (h) => {
                                this.mixTargetDelta(h),
                                    d.onUpdate && d.onUpdate(h);
                            },
                            onStop: () => {},
                            onComplete: () => {
                                d.onComplete && d.onComplete(),
                                    this.completeAnimation();
                            },
                        })),
                        this.resumingFrom &&
                            (this.resumingFrom.currentAnimation =
                                this.currentAnimation),
                        (this.pendingAnimation = void 0);
                }));
        }
        completeAnimation() {
            this.resumingFrom &&
                ((this.resumingFrom.currentAnimation = void 0),
                (this.resumingFrom.preserveOpacity = void 0));
            const d = this.getStack();
            d && d.exitAnimationComplete(),
                (this.resumingFrom =
                    this.currentAnimation =
                    this.animationValues =
                        void 0),
                this.notifyListeners("animationComplete");
        }
        finishAnimation() {
            this.currentAnimation &&
                (this.mixTargetDelta && this.mixTargetDelta(M0),
                this.currentAnimation.stop()),
                this.completeAnimation();
        }
        applyTransformsToTarget() {
            const d = this.getLead();
            let {
                targetWithTransforms: h,
                target: p,
                layout: m,
                latestValues: y,
            } = d;
            if (!(!h || !p || !m)) {
                if (
                    this !== d &&
                    this.layout &&
                    m &&
                    t1(
                        this.options.animationType,
                        this.layout.layoutBox,
                        m.layoutBox
                    )
                ) {
                    p = this.target || Kt();
                    const v = me(this.layout.layoutBox.x);
                    (p.x.min = d.target.x.min), (p.x.max = p.x.min + v);
                    const b = me(this.layout.layoutBox.y);
                    (p.y.min = d.target.y.min), (p.y.max = p.y.min + b);
                }
                Ge(h, p),
                    Na(h, y),
                    $s(
                        this.projectionDeltaWithTransform,
                        this.layoutCorrected,
                        h,
                        y
                    );
            }
        }
        registerSharedNode(d, h) {
            this.sharedNodes.has(d) || this.sharedNodes.set(d, new nA()),
                this.sharedNodes.get(d).add(h);
            const m = h.options.initialPromotionConfig;
            h.promote({
                transition: m ? m.transition : void 0,
                preserveFollowOpacity:
                    m && m.shouldPreserveFollowOpacity
                        ? m.shouldPreserveFollowOpacity(h)
                        : void 0,
            });
        }
        isLead() {
            const d = this.getStack();
            return d ? d.lead === this : !0;
        }
        getLead() {
            var d;
            const { layoutId: h } = this.options;
            return h
                ? ((d = this.getStack()) === null || d === void 0
                      ? void 0
                      : d.lead) || this
                : this;
        }
        getPrevLead() {
            var d;
            const { layoutId: h } = this.options;
            return h
                ? (d = this.getStack()) === null || d === void 0
                    ? void 0
                    : d.prevLead
                : void 0;
        }
        getStack() {
            const { layoutId: d } = this.options;
            if (d) return this.root.sharedNodes.get(d);
        }
        promote({
            needsReset: d,
            transition: h,
            preserveFollowOpacity: p,
        } = {}) {
            const m = this.getStack();
            m && m.promote(this, p),
                d && ((this.projectionDelta = void 0), (this.needsReset = !0)),
                h && this.setOptions({ transition: h });
        }
        relegate() {
            const d = this.getStack();
            return d ? d.relegate(this) : !1;
        }
        resetSkewAndRotation() {
            const { visualElement: d } = this.options;
            if (!d) return;
            let h = !1;
            const { latestValues: p } = d;
            if (
                ((p.z ||
                    p.rotate ||
                    p.rotateX ||
                    p.rotateY ||
                    p.rotateZ ||
                    p.skewX ||
                    p.skewY) &&
                    (h = !0),
                !h)
            )
                return;
            const m = {};
            p.z && Fc("z", d, m, this.animationValues);
            for (let y = 0; y < Qc.length; y++)
                Fc(`rotate${Qc[y]}`, d, m, this.animationValues),
                    Fc(`skew${Qc[y]}`, d, m, this.animationValues);
            d.render();
            for (const y in m)
                d.setStaticValue(y, m[y]),
                    this.animationValues && (this.animationValues[y] = m[y]);
            d.scheduleRender();
        }
        getProjectionStyles(d) {
            var h, p;
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) return aA;
            const m = { visibility: "" },
                y = this.getTransformTemplate();
            if (this.needsReset)
                return (
                    (this.needsReset = !1),
                    (m.opacity = ""),
                    (m.pointerEvents =
                        kr(d == null ? void 0 : d.pointerEvents) || ""),
                    (m.transform = y ? y(this.latestValues, "") : "none"),
                    m
                );
            const v = this.getLead();
            if (!this.projectionDelta || !this.layout || !v.target) {
                const R = {};
                return (
                    this.options.layoutId &&
                        ((R.opacity =
                            this.latestValues.opacity !== void 0
                                ? this.latestValues.opacity
                                : 1),
                        (R.pointerEvents =
                            kr(d == null ? void 0 : d.pointerEvents) || "")),
                    this.hasProjected &&
                        !Vi(this.latestValues) &&
                        ((R.transform = y ? y({}, "") : "none"),
                        (this.hasProjected = !1)),
                    R
                );
            }
            const b = v.animationValues || v.latestValues;
            this.applyTransformsToTarget(),
                (m.transform = iA(
                    this.projectionDeltaWithTransform,
                    this.treeScale,
                    b
                )),
                y && (m.transform = y(b, m.transform));
            const { x: T, y: O } = this.projectionDelta;
            (m.transformOrigin = `${T.origin * 100}% ${O.origin * 100}% 0`),
                v.animationValues
                    ? (m.opacity =
                          v === this
                              ? (p =
                                    (h = b.opacity) !== null && h !== void 0
                                        ? h
                                        : this.latestValues.opacity) !== null &&
                                p !== void 0
                                  ? p
                                  : 1
                              : this.preserveOpacity
                                ? this.latestValues.opacity
                                : b.opacityExit)
                    : (m.opacity =
                          v === this
                              ? b.opacity !== void 0
                                  ? b.opacity
                                  : ""
                              : b.opacityExit !== void 0
                                ? b.opacityExit
                                : 0);
            for (const R in il) {
                if (b[R] === void 0) continue;
                const { correct: V, applyTo: N, isCSSVariable: k } = il[R],
                    G = m.transform === "none" ? b[R] : V(b[R], v);
                if (N) {
                    const J = N.length;
                    for (let H = 0; H < J; H++) m[N[H]] = G;
                } else
                    k
                        ? (this.options.visualElement.renderState.vars[R] = G)
                        : (m[R] = G);
            }
            return (
                this.options.layoutId &&
                    (m.pointerEvents =
                        v === this
                            ? kr(d == null ? void 0 : d.pointerEvents) || ""
                            : "none"),
                m
            );
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
        }
        resetTree() {
            this.root.nodes.forEach((d) => {
                var h;
                return (h = d.currentAnimation) === null || h === void 0
                    ? void 0
                    : h.stop();
            }),
                this.root.nodes.forEach(O0),
                this.root.sharedNodes.clear();
        }
    };
}
function lA(n) {
    n.updateLayout();
}
function rA(n) {
    var a;
    const l =
        ((a = n.resumeFrom) === null || a === void 0 ? void 0 : a.snapshot) ||
        n.snapshot;
    if (n.isLead() && n.layout && l && n.hasListeners("didUpdate")) {
        const { layoutBox: r, measuredBox: u } = n.layout,
            { animationType: f } = n.options,
            d = l.source !== n.layout.source;
        f === "size"
            ? Xe((v) => {
                  const b = d ? l.measuredBox[v] : l.layoutBox[v],
                      T = me(b);
                  (b.min = r[v].min), (b.max = b.min + T);
              })
            : t1(f, l.layoutBox, r) &&
              Xe((v) => {
                  const b = d ? l.measuredBox[v] : l.layoutBox[v],
                      T = me(r[v]);
                  (b.max = b.min + T),
                      n.relativeTarget &&
                          !n.currentAnimation &&
                          ((n.isProjectionDirty = !0),
                          (n.relativeTarget[v].max =
                              n.relativeTarget[v].min + T));
              });
        const h = za();
        $s(h, r, l.layoutBox);
        const p = za();
        d
            ? $s(p, n.applyTransform(u, !0), l.measuredBox)
            : $s(p, r, l.layoutBox);
        const m = !Wv(h);
        let y = !1;
        if (!n.resumeFrom) {
            const v = n.getClosestProjectingParent();
            if (v && !v.resumeFrom) {
                const { snapshot: b, layout: T } = v;
                if (b && T) {
                    const O = Kt();
                    Is(O, l.layoutBox, b.layoutBox);
                    const R = Kt();
                    Is(R, r, T.layoutBox),
                        Jv(O, R) || (y = !0),
                        v.options.layoutRoot &&
                            ((n.relativeTarget = R),
                            (n.relativeTargetOrigin = O),
                            (n.relativeParent = v));
                }
            }
        }
        n.notifyListeners("didUpdate", {
            layout: r,
            snapshot: l,
            delta: p,
            layoutDelta: h,
            hasLayoutChanged: m,
            hasRelativeLayoutChanged: y,
        });
    } else if (n.isLead()) {
        const { onExitComplete: r } = n.options;
        r && r();
    }
    n.options.transition = void 0;
}
function oA(n) {
    n.parent &&
        (n.isProjecting() || (n.isProjectionDirty = n.parent.isProjectionDirty),
        n.isSharedProjectionDirty ||
            (n.isSharedProjectionDirty = !!(
                n.isProjectionDirty ||
                n.parent.isProjectionDirty ||
                n.parent.isSharedProjectionDirty
            )),
        n.isTransformDirty || (n.isTransformDirty = n.parent.isTransformDirty));
}
function uA(n) {
    n.isProjectionDirty = n.isSharedProjectionDirty = n.isTransformDirty = !1;
}
function cA(n) {
    n.clearSnapshot();
}
function O0(n) {
    n.clearMeasurements();
}
function fA(n) {
    n.isLayoutDirty = !1;
}
function dA(n) {
    const { visualElement: a } = n.options;
    a && a.getProps().onBeforeLayoutMeasure && a.notify("BeforeLayoutMeasure"),
        n.resetTransform();
}
function w0(n) {
    n.finishAnimation(),
        (n.targetDelta = n.relativeTarget = n.target = void 0),
        (n.isProjectionDirty = !0);
}
function hA(n) {
    n.resolveTargetDelta();
}
function pA(n) {
    n.calcProjection();
}
function mA(n) {
    n.resetSkewAndRotation();
}
function gA(n) {
    n.removeLeadSnapshot();
}
function _0(n, a, l) {
    (n.translate = Ut(a.translate, 0, l)),
        (n.scale = Ut(a.scale, 1, l)),
        (n.origin = a.origin),
        (n.originPoint = a.originPoint);
}
function D0(n, a, l, r) {
    (n.min = Ut(a.min, l.min, r)), (n.max = Ut(a.max, l.max, r));
}
function yA(n, a, l, r) {
    D0(n.x, a.x, l.x, r), D0(n.y, a.y, l.y, r);
}
function vA(n) {
    return n.animationValues && n.animationValues.opacityExit !== void 0;
}
const SA = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
    R0 = (n) =>
        typeof navigator < "u" &&
        navigator.userAgent &&
        navigator.userAgent.toLowerCase().includes(n),
    C0 = R0("applewebkit/") && !R0("chrome/") ? Math.round : ge;
function z0(n) {
    (n.min = C0(n.min)), (n.max = C0(n.max));
}
function bA(n) {
    z0(n.x), z0(n.y);
}
function t1(n, a, l) {
    return (
        n === "position" || (n === "preserve-aspect" && !TE(E0(a), E0(l), 0.2))
    );
}
function xA(n) {
    var a;
    return (
        n !== n.root &&
        ((a = n.scroll) === null || a === void 0 ? void 0 : a.wasRoot)
    );
}
const TA = Iv({
        attachResizeListener: (n, a) => rl(n, "resize", a),
        measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
        }),
        checkIsScrollRoot: () => !0,
    }),
    Wc = { current: void 0 },
    e1 = Iv({
        measureScroll: (n) => ({ x: n.scrollLeft, y: n.scrollTop }),
        defaultParent: () => {
            if (!Wc.current) {
                const n = new TA({});
                n.mount(window),
                    n.setOptions({ layoutScroll: !0 }),
                    (Wc.current = n);
            }
            return Wc.current;
        },
        resetTransform: (n, a) => {
            n.style.transform = a !== void 0 ? a : "none";
        },
        checkIsScrollRoot: (n) =>
            window.getComputedStyle(n).position === "fixed",
    }),
    EA = {
        pan: { Feature: HE },
        drag: { Feature: UE, ProjectionNode: e1, MeasureLayout: Zv },
    };
function j0(n, a, l) {
    const { props: r } = n;
    n.animationState &&
        r.whileHover &&
        n.animationState.setActive("whileHover", l === "Start");
    const u = "onHover" + l,
        f = r[u];
    f && Ot.postRender(() => f(a, hl(a)));
}
class AA extends di {
    mount() {
        const { current: a } = this.node;
        a &&
            (this.unmount = AT(
                a,
                (l, r) => (
                    j0(this.node, r, "Start"), (u) => j0(this.node, u, "End")
                )
            ));
    }
    unmount() {}
}
class MA extends di {
    constructor() {
        super(...arguments), (this.isActive = !1);
    }
    onFocus() {
        let a = !1;
        try {
            a = this.node.current.matches(":focus-visible");
        } catch {
            a = !0;
        }
        !a ||
            !this.node.animationState ||
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
    }
    onBlur() {
        !this.isActive ||
            !this.node.animationState ||
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
    }
    mount() {
        this.unmount = dl(
            rl(this.node.current, "focus", () => this.onFocus()),
            rl(this.node.current, "blur", () => this.onBlur())
        );
    }
    unmount() {}
}
function N0(n, a, l) {
    const { props: r } = n;
    if (n.current instanceof HTMLButtonElement && n.current.disabled) return;
    n.animationState &&
        r.whileTap &&
        n.animationState.setActive("whileTap", l === "Start");
    const u = "onTap" + (l === "End" ? "" : l),
        f = r[u];
    f && Ot.postRender(() => f(a, hl(a)));
}
class OA extends di {
    mount() {
        const { current: a } = this.node;
        a &&
            (this.unmount = _T(
                a,
                (l, r) => (
                    N0(this.node, r, "Start"),
                    (u, { success: f }) =>
                        N0(this.node, u, f ? "End" : "Cancel")
                ),
                { useGlobalTarget: this.node.props.globalTapTarget }
            ));
    }
    unmount() {}
}
const _f = new WeakMap(),
    Jc = new WeakMap(),
    wA = (n) => {
        const a = _f.get(n.target);
        a && a(n);
    },
    _A = (n) => {
        n.forEach(wA);
    };
function DA({ root: n, ...a }) {
    const l = n || document;
    Jc.has(l) || Jc.set(l, {});
    const r = Jc.get(l),
        u = JSON.stringify(a);
    return (
        r[u] || (r[u] = new IntersectionObserver(_A, { root: n, ...a })), r[u]
    );
}
function RA(n, a, l) {
    const r = DA(a);
    return (
        _f.set(n, l),
        r.observe(n),
        () => {
            _f.delete(n), r.unobserve(n);
        }
    );
}
const CA = { some: 0, all: 1 };
class zA extends di {
    constructor() {
        super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
    }
    startObserver() {
        this.unmount();
        const { viewport: a = {} } = this.node.getProps(),
            { root: l, margin: r, amount: u = "some", once: f } = a,
            d = {
                root: l ? l.current : void 0,
                rootMargin: r,
                threshold: typeof u == "number" ? u : CA[u],
            },
            h = (p) => {
                const { isIntersecting: m } = p;
                if (
                    this.isInView === m ||
                    ((this.isInView = m), f && !m && this.hasEnteredView)
                )
                    return;
                m && (this.hasEnteredView = !0),
                    this.node.animationState &&
                        this.node.animationState.setActive("whileInView", m);
                const { onViewportEnter: y, onViewportLeave: v } =
                        this.node.getProps(),
                    b = m ? y : v;
                b && b(p);
            };
        return RA(this.node.current, d, h);
    }
    mount() {
        this.startObserver();
    }
    update() {
        if (typeof IntersectionObserver > "u") return;
        const { props: a, prevProps: l } = this.node;
        ["amount", "margin", "root"].some(jA(a, l)) && this.startObserver();
    }
    unmount() {}
}
function jA({ viewport: n = {} }, { viewport: a = {} } = {}) {
    return (l) => n[l] !== a[l];
}
const NA = {
        inView: { Feature: zA },
        tap: { Feature: OA },
        focus: { Feature: MA },
        hover: { Feature: AA },
    },
    LA = { layout: { ProjectionNode: e1, MeasureLayout: Zv } },
    Df = { current: null },
    n1 = { current: !1 };
function BA() {
    if (((n1.current = !0), !!qf))
        if (window.matchMedia) {
            const n = window.matchMedia("(prefers-reduced-motion)"),
                a = () => (Df.current = n.matches);
            n.addListener(a), a();
        } else Df.current = !1;
}
const VA = [...Ov, ce, fi],
    UA = (n) => VA.find(Mv(n)),
    HA = new WeakMap();
function qA(n, a, l) {
    for (const r in a) {
        const u = a[r],
            f = l[r];
        if (fe(u)) n.addValue(r, u);
        else if (fe(f)) n.addValue(r, fn(u, { owner: n }));
        else if (f !== u)
            if (n.hasValue(r)) {
                const d = n.getValue(r);
                d.liveStyle === !0 ? d.jump(u) : d.hasAnimated || d.set(u);
            } else {
                const d = n.getStaticValue(r);
                n.addValue(r, fn(d !== void 0 ? d : u, { owner: n }));
            }
    }
    for (const r in l) a[r] === void 0 && n.removeValue(r);
    return a;
}
const L0 = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
];
class YA {
    scrapeMotionValuesFromProps(a, l, r) {
        return {};
    }
    constructor(
        {
            parent: a,
            props: l,
            presenceContext: r,
            reducedMotionConfig: u,
            blockInitialAnimation: f,
            visualState: d,
        },
        h = {}
    ) {
        (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = gd),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
                this.notify("Update", this.latestValues)),
            (this.render = () => {
                this.current &&
                    (this.triggerBuild(),
                    this.renderInstance(
                        this.current,
                        this.renderState,
                        this.props.style,
                        this.projection
                    ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
                const T = hn.now();
                this.renderScheduledAt < T &&
                    ((this.renderScheduledAt = T),
                    Ot.render(this.render, !1, !0));
            });
        const { latestValues: p, renderState: m, onUpdate: y } = d;
        (this.onUpdate = y),
            (this.latestValues = p),
            (this.baseTarget = { ...p }),
            (this.initialValues = l.initial ? { ...p } : {}),
            (this.renderState = m),
            (this.parent = a),
            (this.props = l),
            (this.presenceContext = r),
            (this.depth = a ? a.depth + 1 : 0),
            (this.reducedMotionConfig = u),
            (this.options = h),
            (this.blockInitialAnimation = !!f),
            (this.isControllingVariants = yo(l)),
            (this.isVariantNode = Ny(l)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(a && a.current));
        const { willChange: v, ...b } = this.scrapeMotionValuesFromProps(
            l,
            {},
            this
        );
        for (const T in b) {
            const O = b[T];
            p[T] !== void 0 && fe(O) && O.set(p[T], !1);
        }
    }
    mount(a) {
        (this.current = a),
            HA.set(a, this),
            this.projection &&
                !this.projection.instance &&
                this.projection.mount(a),
            this.parent &&
                this.isVariantNode &&
                !this.isControllingVariants &&
                (this.removeFromVariantTree =
                    this.parent.addVariantChild(this)),
            this.values.forEach((l, r) => this.bindToMotionValue(r, l)),
            n1.current || BA(),
            (this.shouldReduceMotion =
                this.reducedMotionConfig === "never"
                    ? !1
                    : this.reducedMotionConfig === "always"
                      ? !0
                      : Df.current),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
    }
    unmount() {
        this.projection && this.projection.unmount(),
            en(this.notifyUpdate),
            en(this.render),
            this.valueSubscriptions.forEach((a) => a()),
            this.valueSubscriptions.clear(),
            this.removeFromVariantTree && this.removeFromVariantTree(),
            this.parent && this.parent.children.delete(this);
        for (const a in this.events) this.events[a].clear();
        for (const a in this.features) {
            const l = this.features[a];
            l && (l.unmount(), (l.isMounted = !1));
        }
        this.current = null;
    }
    bindToMotionValue(a, l) {
        this.valueSubscriptions.has(a) && this.valueSubscriptions.get(a)();
        const r = Xi.has(a);
        r && this.onBindTransform && this.onBindTransform();
        const u = l.on("change", (h) => {
                (this.latestValues[a] = h),
                    this.props.onUpdate && Ot.preRender(this.notifyUpdate),
                    r &&
                        this.projection &&
                        (this.projection.isTransformDirty = !0);
            }),
            f = l.on("renderRequest", this.scheduleRender);
        let d;
        window.MotionCheckAppearSync &&
            (d = window.MotionCheckAppearSync(this, a, l)),
            this.valueSubscriptions.set(a, () => {
                u(), f(), d && d(), l.owner && l.stop();
            });
    }
    sortNodePosition(a) {
        return !this.current ||
            !this.sortInstanceNodePosition ||
            this.type !== a.type
            ? 0
            : this.sortInstanceNodePosition(this.current, a.current);
    }
    updateFeatures() {
        let a = "animation";
        for (a in Ba) {
            const l = Ba[a];
            if (!l) continue;
            const { isEnabled: r, Feature: u } = l;
            if (
                (!this.features[a] &&
                    u &&
                    r(this.props) &&
                    (this.features[a] = new u(this)),
                this.features[a])
            ) {
                const f = this.features[a];
                f.isMounted ? f.update() : (f.mount(), (f.isMounted = !0));
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
        return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : Kt();
    }
    getStaticValue(a) {
        return this.latestValues[a];
    }
    setStaticValue(a, l) {
        this.latestValues[a] = l;
    }
    update(a, l) {
        (a.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = a),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = l);
        for (let r = 0; r < L0.length; r++) {
            const u = L0[r];
            this.propEventSubscriptions[u] &&
                (this.propEventSubscriptions[u](),
                delete this.propEventSubscriptions[u]);
            const f = "on" + u,
                d = a[f];
            d && (this.propEventSubscriptions[u] = this.on(u, d));
        }
        (this.prevMotionValues = qA(
            this,
            this.scrapeMotionValuesFromProps(a, this.prevProps, this),
            this.prevMotionValues
        )),
            this.handleChildMotionValue && this.handleChildMotionValue(),
            this.onUpdate && this.onUpdate(this);
    }
    getProps() {
        return this.props;
    }
    getVariant(a) {
        return this.props.variants ? this.props.variants[a] : void 0;
    }
    getDefaultTransition() {
        return this.props.transition;
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
        return this.isVariantNode
            ? this
            : this.parent
              ? this.parent.getClosestVariantNode()
              : void 0;
    }
    addVariantChild(a) {
        const l = this.getClosestVariantNode();
        if (l)
            return (
                l.variantChildren && l.variantChildren.add(a),
                () => l.variantChildren.delete(a)
            );
    }
    addValue(a, l) {
        const r = this.values.get(a);
        l !== r &&
            (r && this.removeValue(a),
            this.bindToMotionValue(a, l),
            this.values.set(a, l),
            (this.latestValues[a] = l.get()));
    }
    removeValue(a) {
        this.values.delete(a);
        const l = this.valueSubscriptions.get(a);
        l && (l(), this.valueSubscriptions.delete(a)),
            delete this.latestValues[a],
            this.removeValueFromRenderState(a, this.renderState);
    }
    hasValue(a) {
        return this.values.has(a);
    }
    getValue(a, l) {
        if (this.props.values && this.props.values[a])
            return this.props.values[a];
        let r = this.values.get(a);
        return (
            r === void 0 &&
                l !== void 0 &&
                ((r = fn(l === null ? void 0 : l, { owner: this })),
                this.addValue(a, r)),
            r
        );
    }
    readValue(a, l) {
        var r;
        let u =
            this.latestValues[a] !== void 0 || !this.current
                ? this.latestValues[a]
                : (r = this.getBaseTargetFromProps(this.props, a)) !== null &&
                    r !== void 0
                  ? r
                  : this.readValueFromInstance(this.current, a, this.options);
        return (
            u != null &&
                (typeof u == "string" && (Ev(u) || pv(u))
                    ? (u = parseFloat(u))
                    : !UA(u) && fi.test(l) && (u = bv(a, l)),
                this.setBaseTarget(a, fe(u) ? u.get() : u)),
            fe(u) ? u.get() : u
        );
    }
    setBaseTarget(a, l) {
        this.baseTarget[a] = l;
    }
    getBaseTarget(a) {
        var l;
        const { initial: r } = this.props;
        let u;
        if (typeof r == "string" || typeof r == "object") {
            const d = ed(
                this.props,
                r,
                (l = this.presenceContext) === null || l === void 0
                    ? void 0
                    : l.custom
            );
            d && (u = d[a]);
        }
        if (r && u !== void 0) return u;
        const f = this.getBaseTargetFromProps(this.props, a);
        return f !== void 0 && !fe(f)
            ? f
            : this.initialValues[a] !== void 0 && u === void 0
              ? void 0
              : this.baseTarget[a];
    }
    on(a, l) {
        return (
            this.events[a] || (this.events[a] = new ud()), this.events[a].add(l)
        );
    }
    notify(a, ...l) {
        this.events[a] && this.events[a].notify(...l);
    }
}
class i1 extends YA {
    constructor() {
        super(...arguments), (this.KeyframeResolver = wv);
    }
    sortInstanceNodePosition(a, l) {
        return a.compareDocumentPosition(l) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(a, l) {
        return a.style ? a.style[l] : void 0;
    }
    removeValueFromRenderState(a, { vars: l, style: r }) {
        delete l[a], delete r[a];
    }
    handleChildMotionValue() {
        this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
        const { children: a } = this.props;
        fe(a) &&
            (this.childSubscription = a.on("change", (l) => {
                this.current && (this.current.textContent = `${l}`);
            }));
    }
}
function GA(n) {
    return window.getComputedStyle(n);
}
class kA extends i1 {
    constructor() {
        super(...arguments), (this.type = "html"), (this.renderInstance = Ky);
    }
    readValueFromInstance(a, l) {
        if (Xi.has(l)) {
            const r = md(l);
            return (r && r.default) || 0;
        } else {
            const r = GA(a),
                u = (Zf(l) ? r.getPropertyValue(l) : r[l]) || 0;
            return typeof u == "string" ? u.trim() : u;
        }
    }
    measureInstanceViewportBox(a, { transformPagePoint: l }) {
        return Xv(a, l);
    }
    build(a, l, r) {
        Wf(a, l, r.transformTemplate);
    }
    scrapeMotionValuesFromProps(a, l, r) {
        return nd(a, l, r);
    }
}
class XA extends i1 {
    constructor() {
        super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = Kt),
            (this.updateDimensions = () => {
                this.current &&
                    !this.renderState.dimensions &&
                    Xy(this.current, this.renderState);
            });
    }
    getBaseTargetFromProps(a, l) {
        return a[l];
    }
    readValueFromInstance(a, l) {
        if (Xi.has(l)) {
            const r = md(l);
            return (r && r.default) || 0;
        }
        return (l = Py.has(l) ? l : Kf(l)), a.getAttribute(l);
    }
    scrapeMotionValuesFromProps(a, l, r) {
        return Qy(a, l, r);
    }
    onBindTransform() {
        this.current &&
            !this.renderState.dimensions &&
            Ot.postRender(this.updateDimensions);
    }
    build(a, l, r) {
        If(a, l, this.isSVGTag, r.transformTemplate);
    }
    renderInstance(a, l, r, u) {
        Zy(a, l, r, u);
    }
    mount(a) {
        (this.isSVGTag = td(a.tagName)), super.mount(a);
    }
}
const KA = (n, a) =>
        $f(n) ? new XA(a) : new kA(a, { allowProjection: n !== Q.Fragment }),
    PA = ST({ ...pE, ...NA, ...EA, ...LA }, KA),
    ci = Lx(PA);
function ZA(n, a, l) {
    Q.useInsertionEffect(() => n.on(a, l), [n, a, l]);
}
function a1(n, a) {
    let l;
    const r = () => {
        const { currentTime: u } = a,
            d = (u === null ? 0 : u.value) / 100;
        l !== d && n(d), (l = d);
    };
    return Ot.update(r, !0), () => en(r);
}
const Pr = new WeakMap();
let oi;
function QA(n, a) {
    if (a) {
        const { inlineSize: l, blockSize: r } = a[0];
        return { width: l, height: r };
    } else
        return n instanceof SVGElement && "getBBox" in n
            ? n.getBBox()
            : { width: n.offsetWidth, height: n.offsetHeight };
}
function FA({ target: n, contentRect: a, borderBoxSize: l }) {
    var r;
    (r = Pr.get(n)) === null ||
        r === void 0 ||
        r.forEach((u) => {
            u({
                target: n,
                contentSize: a,
                get size() {
                    return QA(n, l);
                },
            });
        });
}
function WA(n) {
    n.forEach(FA);
}
function JA() {
    typeof ResizeObserver > "u" || (oi = new ResizeObserver(WA));
}
function $A(n, a) {
    oi || JA();
    const l = ev(n);
    return (
        l.forEach((r) => {
            let u = Pr.get(r);
            u || ((u = new Set()), Pr.set(r, u)),
                u.add(a),
                oi == null || oi.observe(r);
        }),
        () => {
            l.forEach((r) => {
                const u = Pr.get(r);
                u == null || u.delete(a),
                    (u != null && u.size) || oi == null || oi.unobserve(r);
            });
        }
    );
}
const Zr = new Set();
let tl;
function IA() {
    (tl = () => {
        const n = { width: window.innerWidth, height: window.innerHeight },
            a = { target: window, size: n, contentSize: n };
        Zr.forEach((l) => l(a));
    }),
        window.addEventListener("resize", tl);
}
function tM(n) {
    return (
        Zr.add(n),
        tl || IA(),
        () => {
            Zr.delete(n), !Zr.size && tl && (tl = void 0);
        }
    );
}
function eM(n, a) {
    return typeof n == "function" ? tM(n) : $A(n, a);
}
const nM = 50,
    B0 = () => ({
        current: 0,
        offset: [],
        progress: 0,
        scrollLength: 0,
        targetOffset: 0,
        targetLength: 0,
        containerLength: 0,
        velocity: 0,
    }),
    iM = () => ({ time: 0, x: B0(), y: B0() }),
    aM = {
        x: { length: "Width", position: "Left" },
        y: { length: "Height", position: "Top" },
    };
function V0(n, a, l, r) {
    const u = l[a],
        { length: f, position: d } = aM[a],
        h = u.current,
        p = l.time;
    (u.current = n[`scroll${d}`]),
        (u.scrollLength = n[`scroll${f}`] - n[`client${f}`]),
        (u.offset.length = 0),
        (u.offset[0] = 0),
        (u.offset[1] = u.scrollLength),
        (u.progress = ki(0, u.scrollLength, u.current));
    const m = r - p;
    u.velocity = m > nM ? 0 : cd(u.current - h, m);
}
function sM(n, a, l) {
    V0(n, "x", a, l), V0(n, "y", a, l), (a.time = l);
}
function lM(n, a) {
    const l = { x: 0, y: 0 };
    let r = n;
    for (; r && r !== a; )
        if (r instanceof HTMLElement)
            (l.x += r.offsetLeft), (l.y += r.offsetTop), (r = r.offsetParent);
        else if (r.tagName === "svg") {
            const u = r.getBoundingClientRect();
            r = r.parentElement;
            const f = r.getBoundingClientRect();
            (l.x += u.left - f.left), (l.y += u.top - f.top);
        } else if (r instanceof SVGGraphicsElement) {
            const { x: u, y: f } = r.getBBox();
            (l.x += u), (l.y += f);
            let d = null,
                h = r.parentNode;
            for (; !d; ) h.tagName === "svg" && (d = h), (h = r.parentNode);
            r = d;
        } else break;
    return l;
}
const Rf = { start: 0, center: 0.5, end: 1 };
function U0(n, a, l = 0) {
    let r = 0;
    if ((n in Rf && (n = Rf[n]), typeof n == "string")) {
        const u = parseFloat(n);
        n.endsWith("px")
            ? (r = u)
            : n.endsWith("%")
              ? (n = u / 100)
              : n.endsWith("vw")
                ? (r = (u / 100) * document.documentElement.clientWidth)
                : n.endsWith("vh")
                  ? (r = (u / 100) * document.documentElement.clientHeight)
                  : (n = u);
    }
    return typeof n == "number" && (r = a * n), l + r;
}
const rM = [0, 0];
function oM(n, a, l, r) {
    let u = Array.isArray(n) ? n : rM,
        f = 0,
        d = 0;
    return (
        typeof n == "number"
            ? (u = [n, n])
            : typeof n == "string" &&
              ((n = n.trim()),
              n.includes(" ")
                  ? (u = n.split(" "))
                  : (u = [n, Rf[n] ? n : "0"])),
        (f = U0(u[0], l, r)),
        (d = U0(u[1], a)),
        f - d
    );
}
const uM = {
        All: [
            [0, 0],
            [1, 1],
        ],
    },
    cM = { x: 0, y: 0 };
function fM(n) {
    return "getBBox" in n && n.tagName !== "svg"
        ? n.getBBox()
        : { width: n.clientWidth, height: n.clientHeight };
}
function dM(n, a, l) {
    const { offset: r = uM.All } = l,
        { target: u = n, axis: f = "y" } = l,
        d = f === "y" ? "height" : "width",
        h = u !== n ? lM(u, n) : cM,
        p = u === n ? { width: n.scrollWidth, height: n.scrollHeight } : fM(u),
        m = { width: n.clientWidth, height: n.clientHeight };
    a[f].offset.length = 0;
    let y = !a[f].interpolate;
    const v = r.length;
    for (let b = 0; b < v; b++) {
        const T = oM(r[b], m[d], p[d], h[f]);
        !y && T !== a[f].interpolatorOffsets[b] && (y = !0),
            (a[f].offset[b] = T);
    }
    y &&
        ((a[f].interpolate = vd(a[f].offset, Nv(r), { clamp: !1 })),
        (a[f].interpolatorOffsets = [...a[f].offset])),
        (a[f].progress = pn(0, 1, a[f].interpolate(a[f].current)));
}
function hM(n, a = n, l) {
    if (((l.x.targetOffset = 0), (l.y.targetOffset = 0), a !== n)) {
        let r = a;
        for (; r && r !== n; )
            (l.x.targetOffset += r.offsetLeft),
                (l.y.targetOffset += r.offsetTop),
                (r = r.offsetParent);
    }
    (l.x.targetLength = a === n ? a.scrollWidth : a.clientWidth),
        (l.y.targetLength = a === n ? a.scrollHeight : a.clientHeight),
        (l.x.containerLength = n.clientWidth),
        (l.y.containerLength = n.clientHeight);
}
function pM(n, a, l, r = {}) {
    return {
        measure: () => hM(n, r.target, l),
        update: (u) => {
            sM(n, l, u), (r.offset || r.target) && dM(n, l, r);
        },
        notify: () => a(l),
    };
}
const Ks = new WeakMap(),
    H0 = new WeakMap(),
    $c = new WeakMap(),
    q0 = (n) => (n === document.documentElement ? window : n);
function xd(n, { container: a = document.documentElement, ...l } = {}) {
    let r = $c.get(a);
    r || ((r = new Set()), $c.set(a, r));
    const u = iM(),
        f = pM(a, n, u, l);
    if ((r.add(f), !Ks.has(a))) {
        const h = () => {
                for (const b of r) b.measure();
            },
            p = () => {
                for (const b of r) b.update(ne.timestamp);
            },
            m = () => {
                for (const b of r) b.notify();
            },
            y = () => {
                Ot.read(h, !1, !0), Ot.read(p, !1, !0), Ot.update(m, !1, !0);
            };
        Ks.set(a, y);
        const v = q0(a);
        window.addEventListener("resize", y, { passive: !0 }),
            a !== document.documentElement && H0.set(a, eM(a, y)),
            v.addEventListener("scroll", y, { passive: !0 });
    }
    const d = Ks.get(a);
    return (
        Ot.read(d, !1, !0),
        () => {
            var h;
            en(d);
            const p = $c.get(a);
            if (!p || (p.delete(f), p.size)) return;
            const m = Ks.get(a);
            Ks.delete(a),
                m &&
                    (q0(a).removeEventListener("scroll", m),
                    (h = H0.get(a)) === null || h === void 0 || h(),
                    window.removeEventListener("resize", m));
        }
    );
}
function mM({ source: n, container: a, axis: l = "y" }) {
    n && (a = n);
    const r = { value: 0 },
        u = xd(
            (f) => {
                r.value = f[l].progress * 100;
            },
            { container: a, axis: l }
        );
    return { currentTime: r, cancel: u };
}
const Ic = new Map();
function s1({
    source: n,
    container: a = document.documentElement,
    axis: l = "y",
} = {}) {
    n && (a = n), Ic.has(a) || Ic.set(a, {});
    const r = Ic.get(a);
    return (
        r[l] ||
            (r[l] = Fy()
                ? new ScrollTimeline({ source: a, axis: l })
                : mM({ source: a, axis: l })),
        r[l]
    );
}
function gM(n) {
    return n.length === 2;
}
function l1(n) {
    return n && (n.target || n.offset);
}
function yM(n, a) {
    return gM(n) || l1(a)
        ? xd((l) => {
              n(l[a.axis].progress, l);
          }, a)
        : a1(n, s1(a));
}
function vM(n, a) {
    if ((n.flatten(), l1(a)))
        return (
            n.pause(),
            xd((l) => {
                n.time = n.duration * l[a.axis].progress;
            }, a)
        );
    {
        const l = s1(a);
        return n.attachTimeline
            ? n.attachTimeline(
                  l,
                  (r) => (
                      r.pause(),
                      a1((u) => {
                          r.time = r.duration * u;
                      }, l)
                  )
              )
            : ge;
    }
}
function SM(n, { axis: a = "y", ...l } = {}) {
    const r = { axis: a, ...l };
    return typeof n == "function" ? yM(n, r) : vM(n, r);
}
function Y0(n, a) {
    wx(!!(!a || a.current));
}
const bM = () => ({
    scrollX: fn(0),
    scrollY: fn(0),
    scrollXProgress: fn(0),
    scrollYProgress: fn(0),
});
function Td({ container: n, target: a, layoutEffect: l = !0, ...r } = {}) {
    const u = po(bM);
    return (
        (l ? Yf : Q.useEffect)(
            () => (
                Y0("target", a),
                Y0("container", n),
                SM(
                    (d, { x: h, y: p }) => {
                        u.scrollX.set(h.current),
                            u.scrollXProgress.set(h.progress),
                            u.scrollY.set(p.current),
                            u.scrollYProgress.set(p.progress);
                    },
                    {
                        ...r,
                        container: (n == null ? void 0 : n.current) || void 0,
                        target: (a == null ? void 0 : a.current) || void 0,
                    }
                )
            ),
            [n, a, JSON.stringify(r.offset)]
        ),
        u
    );
}
function r1(n) {
    const a = po(() => fn(n)),
        { isStatic: l } = Q.useContext(Hf);
    if (l) {
        const [, r] = Q.useState(n);
        Q.useEffect(() => a.on("change", r), []);
    }
    return a;
}
function o1(n, a) {
    const l = r1(a()),
        r = () => l.set(a());
    return (
        r(),
        Yf(() => {
            const u = () => Ot.preRender(r, !1, !0),
                f = n.map((d) => d.on("change", u));
            return () => {
                f.forEach((d) => d()), en(r);
            };
        }),
        l
    );
}
const xM = (n) => n && typeof n == "object" && n.mix,
    TM = (n) => (xM(n) ? n.mix : void 0);
function EM(...n) {
    const a = !Array.isArray(n[0]),
        l = a ? 0 : -1,
        r = n[0 + l],
        u = n[1 + l],
        f = n[2 + l],
        d = n[3 + l],
        h = vd(u, f, { mixer: TM(f[0]), ...d });
    return a ? h(r) : h;
}
function AM(n) {
    (Ws.current = []), n();
    const a = o1(Ws.current, n);
    return (Ws.current = void 0), a;
}
function lo(n, a, l, r) {
    if (typeof n == "function") return AM(n);
    const u = typeof a == "function" ? a : EM(a, l, r);
    return Array.isArray(n) ? G0(n, u) : G0([n], ([f]) => u(f));
}
function G0(n, a) {
    const l = po(() => []);
    return o1(n, () => {
        l.length = 0;
        const r = n.length;
        for (let u = 0; u < r; u++) l[u] = n[u].get();
        return a(l);
    });
}
function u1(n, a, l) {
    return Math.max(n, Math.min(a, l));
}
class MM {
    advance(a) {
        var h;
        if (!this.isRunning) return;
        let l = !1;
        if (this.lerp)
            (this.value =
                ((r = this.value),
                (u = this.to),
                (f = 60 * this.lerp),
                (d = a),
                (function (p, m, y) {
                    return (1 - y) * p + y * m;
                })(r, u, 1 - Math.exp(-f * d)))),
                Math.round(this.value) === this.to &&
                    ((this.value = this.to), (l = !0));
        else {
            this.currentTime += a;
            const p = u1(0, this.currentTime / this.duration, 1);
            l = p >= 1;
            const m = l ? 1 : this.easing(p);
            this.value = this.from + (this.to - this.from) * m;
        }
        var r, u, f, d;
        (h = this.onUpdate) == null || h.call(this, this.value, l),
            l && this.stop();
    }
    stop() {
        this.isRunning = !1;
    }
    fromTo(
        a,
        l,
        {
            lerp: r = 0.1,
            duration: u = 1,
            easing: f = (p) => p,
            onStart: d,
            onUpdate: h,
        }
    ) {
        (this.from = this.value = a),
            (this.to = l),
            (this.lerp = r),
            (this.duration = u),
            (this.easing = f),
            (this.currentTime = 0),
            (this.isRunning = !0),
            d == null || d(),
            (this.onUpdate = h);
    }
}
class OM {
    constructor({
        wrapper: a,
        content: l,
        autoResize: r = !0,
        debounce: u = 250,
    } = {}) {
        zn(this, "resize", () => {
            this.onWrapperResize(), this.onContentResize();
        });
        zn(this, "onWrapperResize", () => {
            this.wrapper === window
                ? ((this.width = window.innerWidth),
                  (this.height = window.innerHeight))
                : ((this.width = this.wrapper.clientWidth),
                  (this.height = this.wrapper.clientHeight));
        });
        zn(this, "onContentResize", () => {
            this.wrapper === window
                ? ((this.scrollHeight = this.content.scrollHeight),
                  (this.scrollWidth = this.content.scrollWidth))
                : ((this.scrollHeight = this.wrapper.scrollHeight),
                  (this.scrollWidth = this.wrapper.scrollWidth));
        });
        (this.wrapper = a),
            (this.content = l),
            r &&
                ((this.debouncedResize = (function (f, d) {
                    let h;
                    return function () {
                        let p = arguments,
                            m = this;
                        clearTimeout(h),
                            (h = setTimeout(function () {
                                f.apply(m, p);
                            }, d));
                    };
                })(this.resize, u)),
                this.wrapper === window
                    ? window.addEventListener(
                          "resize",
                          this.debouncedResize,
                          !1
                      )
                    : ((this.wrapperResizeObserver = new ResizeObserver(
                          this.debouncedResize
                      )),
                      this.wrapperResizeObserver.observe(this.wrapper)),
                (this.contentResizeObserver = new ResizeObserver(
                    this.debouncedResize
                )),
                this.contentResizeObserver.observe(this.content)),
            this.resize();
    }
    destroy() {
        var a, l;
        (a = this.wrapperResizeObserver) == null || a.disconnect(),
            (l = this.contentResizeObserver) == null || l.disconnect(),
            window.removeEventListener("resize", this.debouncedResize, !1);
    }
    get limit() {
        return {
            x: this.scrollWidth - this.width,
            y: this.scrollHeight - this.height,
        };
    }
}
class c1 {
    constructor() {
        this.events = {};
    }
    emit(a, ...l) {
        let r = this.events[a] || [];
        for (let u = 0, f = r.length; u < f; u++) r[u](...l);
    }
    on(a, l) {
        var r;
        return (
            ((r = this.events[a]) != null && r.push(l)) ||
                (this.events[a] = [l]),
            () => {
                var u;
                this.events[a] =
                    (u = this.events[a]) == null
                        ? void 0
                        : u.filter((f) => l !== f);
            }
        );
    }
    off(a, l) {
        var r;
        this.events[a] =
            (r = this.events[a]) == null ? void 0 : r.filter((u) => l !== u);
    }
    destroy() {
        this.events = {};
    }
}
const k0 = 100 / 6;
class wM {
    constructor(a, { wheelMultiplier: l = 1, touchMultiplier: r = 1 }) {
        zn(this, "onTouchStart", (a) => {
            const { clientX: l, clientY: r } = a.targetTouches
                ? a.targetTouches[0]
                : a;
            (this.touchStart.x = l),
                (this.touchStart.y = r),
                (this.lastDelta = { x: 0, y: 0 }),
                this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: a });
        });
        zn(this, "onTouchMove", (a) => {
            const { clientX: l, clientY: r } = a.targetTouches
                    ? a.targetTouches[0]
                    : a,
                u = -(l - this.touchStart.x) * this.touchMultiplier,
                f = -(r - this.touchStart.y) * this.touchMultiplier;
            (this.touchStart.x = l),
                (this.touchStart.y = r),
                (this.lastDelta = { x: u, y: f }),
                this.emitter.emit("scroll", { deltaX: u, deltaY: f, event: a });
        });
        zn(this, "onTouchEnd", (a) => {
            this.emitter.emit("scroll", {
                deltaX: this.lastDelta.x,
                deltaY: this.lastDelta.y,
                event: a,
            });
        });
        zn(this, "onWheel", (a) => {
            let { deltaX: l, deltaY: r, deltaMode: u } = a;
            (l *= u === 1 ? k0 : u === 2 ? this.windowWidth : 1),
                (r *= u === 1 ? k0 : u === 2 ? this.windowHeight : 1),
                (l *= this.wheelMultiplier),
                (r *= this.wheelMultiplier),
                this.emitter.emit("scroll", { deltaX: l, deltaY: r, event: a });
        });
        zn(this, "onWindowResize", () => {
            (this.windowWidth = window.innerWidth),
                (this.windowHeight = window.innerHeight);
        });
        (this.element = a),
            (this.wheelMultiplier = l),
            (this.touchMultiplier = r),
            (this.touchStart = { x: null, y: null }),
            (this.emitter = new c1()),
            window.addEventListener("resize", this.onWindowResize, !1),
            this.onWindowResize(),
            this.element.addEventListener("wheel", this.onWheel, {
                passive: !1,
            }),
            this.element.addEventListener("touchstart", this.onTouchStart, {
                passive: !1,
            }),
            this.element.addEventListener("touchmove", this.onTouchMove, {
                passive: !1,
            }),
            this.element.addEventListener("touchend", this.onTouchEnd, {
                passive: !1,
            });
    }
    on(a, l) {
        return this.emitter.on(a, l);
    }
    destroy() {
        this.emitter.destroy(),
            window.removeEventListener("resize", this.onWindowResize, !1),
            this.element.removeEventListener("wheel", this.onWheel, {
                passive: !1,
            }),
            this.element.removeEventListener("touchstart", this.onTouchStart, {
                passive: !1,
            }),
            this.element.removeEventListener("touchmove", this.onTouchMove, {
                passive: !1,
            }),
            this.element.removeEventListener("touchend", this.onTouchEnd, {
                passive: !1,
            });
    }
}
class _M {
    constructor({
        wrapper: a = window,
        content: l = document.documentElement,
        wheelEventsTarget: r = a,
        eventsTarget: u = r,
        smoothWheel: f = !0,
        syncTouch: d = !1,
        syncTouchLerp: h = 0.075,
        touchInertiaMultiplier: p = 35,
        duration: m,
        easing: y = (G) => Math.min(1, 1.001 - Math.pow(2, -10 * G)),
        lerp: v = !m && 0.1,
        infinite: b = !1,
        orientation: T = "vertical",
        gestureOrientation: O = "vertical",
        touchMultiplier: R = 1,
        wheelMultiplier: V = 1,
        autoResize: N = !0,
        __experimental__naiveDimensions: k = !1,
    } = {}) {
        (this.__isSmooth = !1),
            (this.__isScrolling = !1),
            (this.__isStopped = !1),
            (this.__isLocked = !1),
            (this.onVirtualScroll = ({ deltaX: G, deltaY: J, event: H }) => {
                if (H.ctrlKey) return;
                const Z = H.type.includes("touch"),
                    $ = H.type.includes("wheel");
                if (
                    this.options.syncTouch &&
                    Z &&
                    H.type === "touchstart" &&
                    !this.isStopped &&
                    !this.isLocked
                )
                    return void this.reset();
                const st = G === 0 && J === 0,
                    F =
                        (this.options.gestureOrientation === "vertical" &&
                            J === 0) ||
                        (this.options.gestureOrientation === "horizontal" &&
                            G === 0);
                if (st || F) return;
                let lt = H.composedPath();
                if (
                    ((lt = lt.slice(0, lt.indexOf(this.rootElement))),
                    lt.find((K) => {
                        var P, q, M, U, I;
                        return (
                            ((P = K.hasAttribute) === null || P === void 0
                                ? void 0
                                : P.call(K, "data-lenis-prevent")) ||
                            (Z &&
                                ((q = K.hasAttribute) === null || q === void 0
                                    ? void 0
                                    : q.call(K, "data-lenis-prevent-touch"))) ||
                            ($ &&
                                ((M = K.hasAttribute) === null || M === void 0
                                    ? void 0
                                    : M.call(K, "data-lenis-prevent-wheel"))) ||
                            (((U = K.classList) === null || U === void 0
                                ? void 0
                                : U.contains("lenis")) &&
                                !(
                                    !(
                                        (I = K.classList) === null ||
                                        I === void 0
                                    ) && I.contains("lenis-stopped")
                                ))
                        );
                    }))
                )
                    return;
                if (this.isStopped || this.isLocked)
                    return void H.preventDefault();
                if (
                    ((this.isSmooth =
                        (this.options.syncTouch && Z) ||
                        (this.options.smoothWheel && $)),
                    !this.isSmooth)
                )
                    return (this.isScrolling = !1), void this.animate.stop();
                H.preventDefault();
                let tt = J;
                this.options.gestureOrientation === "both"
                    ? (tt = Math.abs(J) > Math.abs(G) ? J : G)
                    : this.options.gestureOrientation === "horizontal" &&
                      (tt = G);
                const nt = Z && this.options.syncTouch,
                    dt = Z && H.type === "touchend" && Math.abs(tt) > 5;
                dt &&
                    (tt = this.velocity * this.options.touchInertiaMultiplier),
                    this.scrollTo(
                        this.targetScroll + tt,
                        Object.assign(
                            { programmatic: !1 },
                            nt
                                ? { lerp: dt ? this.options.syncTouchLerp : 1 }
                                : {
                                      lerp: this.options.lerp,
                                      duration: this.options.duration,
                                      easing: this.options.easing,
                                  }
                        )
                    );
            }),
            (this.onNativeScroll = () => {
                if (!this.__preventNextScrollEvent && !this.isScrolling) {
                    const G = this.animatedScroll;
                    (this.animatedScroll = this.targetScroll =
                        this.actualScroll),
                        (this.velocity = 0),
                        (this.direction = Math.sign(this.animatedScroll - G)),
                        this.emit();
                }
            }),
            (window.lenisVersion = "1.0.42"),
            (a !== document.documentElement && a !== document.body) ||
                (a = window),
            (this.options = {
                wrapper: a,
                content: l,
                wheelEventsTarget: r,
                eventsTarget: u,
                smoothWheel: f,
                syncTouch: d,
                syncTouchLerp: h,
                touchInertiaMultiplier: p,
                duration: m,
                easing: y,
                lerp: v,
                infinite: b,
                gestureOrientation: O,
                orientation: T,
                touchMultiplier: R,
                wheelMultiplier: V,
                autoResize: N,
                __experimental__naiveDimensions: k,
            }),
            (this.animate = new MM()),
            (this.emitter = new c1()),
            (this.dimensions = new OM({
                wrapper: a,
                content: l,
                autoResize: N,
            })),
            this.toggleClassName("lenis", !0),
            (this.velocity = 0),
            (this.isLocked = !1),
            (this.isStopped = !1),
            (this.isSmooth = d || f),
            (this.isScrolling = !1),
            (this.targetScroll = this.animatedScroll = this.actualScroll),
            this.options.wrapper.addEventListener(
                "scroll",
                this.onNativeScroll,
                !1
            ),
            (this.virtualScroll = new wM(u, {
                touchMultiplier: R,
                wheelMultiplier: V,
            })),
            this.virtualScroll.on("scroll", this.onVirtualScroll);
    }
    destroy() {
        this.emitter.destroy(),
            this.options.wrapper.removeEventListener(
                "scroll",
                this.onNativeScroll,
                !1
            ),
            this.virtualScroll.destroy(),
            this.dimensions.destroy(),
            this.toggleClassName("lenis", !1),
            this.toggleClassName("lenis-smooth", !1),
            this.toggleClassName("lenis-scrolling", !1),
            this.toggleClassName("lenis-stopped", !1),
            this.toggleClassName("lenis-locked", !1);
    }
    on(a, l) {
        return this.emitter.on(a, l);
    }
    off(a, l) {
        return this.emitter.off(a, l);
    }
    setScroll(a) {
        this.isHorizontal
            ? (this.rootElement.scrollLeft = a)
            : (this.rootElement.scrollTop = a);
    }
    resize() {
        this.dimensions.resize();
    }
    emit() {
        this.emitter.emit("scroll", this);
    }
    reset() {
        (this.isLocked = !1),
            (this.isScrolling = !1),
            (this.animatedScroll = this.targetScroll = this.actualScroll),
            (this.velocity = 0),
            this.animate.stop();
    }
    start() {
        this.isStopped && ((this.isStopped = !1), this.reset());
    }
    stop() {
        this.isStopped ||
            ((this.isStopped = !0), this.animate.stop(), this.reset());
    }
    raf(a) {
        const l = a - (this.time || a);
        (this.time = a), this.animate.advance(0.001 * l);
    }
    scrollTo(
        a,
        {
            offset: l = 0,
            immediate: r = !1,
            lock: u = !1,
            duration: f = this.options.duration,
            easing: d = this.options.easing,
            lerp: h = !f && this.options.lerp,
            onComplete: p,
            force: m = !1,
            programmatic: y = !0,
        } = {}
    ) {
        if ((!this.isStopped && !this.isLocked) || m) {
            if (["top", "left", "start"].includes(a)) a = 0;
            else if (["bottom", "right", "end"].includes(a)) a = this.limit;
            else {
                let v;
                if (
                    (typeof a == "string"
                        ? (v = document.querySelector(a))
                        : a != null && a.nodeType && (v = a),
                    v)
                ) {
                    if (this.options.wrapper !== window) {
                        const T = this.options.wrapper.getBoundingClientRect();
                        l -= this.isHorizontal ? T.left : T.top;
                    }
                    const b = v.getBoundingClientRect();
                    a =
                        (this.isHorizontal ? b.left : b.top) +
                        this.animatedScroll;
                }
            }
            if (typeof a == "number") {
                if (
                    ((a += l),
                    (a = Math.round(a)),
                    this.options.infinite
                        ? y &&
                          (this.targetScroll = this.animatedScroll =
                              this.scroll)
                        : (a = u1(0, a, this.limit)),
                    r)
                )
                    return (
                        (this.animatedScroll = this.targetScroll = a),
                        this.setScroll(this.scroll),
                        this.reset(),
                        void (p == null || p(this))
                    );
                if (!y) {
                    if (a === this.targetScroll) return;
                    this.targetScroll = a;
                }
                this.animate.fromTo(this.animatedScroll, a, {
                    duration: f,
                    easing: d,
                    lerp: h,
                    onStart: () => {
                        u && (this.isLocked = !0), (this.isScrolling = !0);
                    },
                    onUpdate: (v, b) => {
                        (this.isScrolling = !0),
                            (this.velocity = v - this.animatedScroll),
                            (this.direction = Math.sign(this.velocity)),
                            (this.animatedScroll = v),
                            this.setScroll(this.scroll),
                            y && (this.targetScroll = v),
                            b || this.emit(),
                            b &&
                                (this.reset(),
                                this.emit(),
                                p == null || p(this),
                                (this.__preventNextScrollEvent = !0),
                                requestAnimationFrame(() => {
                                    delete this.__preventNextScrollEvent;
                                }));
                    },
                });
            }
        }
    }
    get rootElement() {
        return this.options.wrapper === window
            ? document.documentElement
            : this.options.wrapper;
    }
    get limit() {
        return this.options.__experimental__naiveDimensions
            ? this.isHorizontal
                ? this.rootElement.scrollWidth - this.rootElement.clientWidth
                : this.rootElement.scrollHeight - this.rootElement.clientHeight
            : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
    }
    get isHorizontal() {
        return this.options.orientation === "horizontal";
    }
    get actualScroll() {
        return this.isHorizontal
            ? this.rootElement.scrollLeft
            : this.rootElement.scrollTop;
    }
    get scroll() {
        return this.options.infinite
            ? ((a = this.animatedScroll), (l = this.limit), ((a % l) + l) % l)
            : this.animatedScroll;
        var a, l;
    }
    get progress() {
        return this.limit === 0 ? 1 : this.scroll / this.limit;
    }
    get isSmooth() {
        return this.__isSmooth;
    }
    set isSmooth(a) {
        this.__isSmooth !== a &&
            ((this.__isSmooth = a), this.toggleClassName("lenis-smooth", a));
    }
    get isScrolling() {
        return this.__isScrolling;
    }
    set isScrolling(a) {
        this.__isScrolling !== a &&
            ((this.__isScrolling = a),
            this.toggleClassName("lenis-scrolling", a));
    }
    get isStopped() {
        return this.__isStopped;
    }
    set isStopped(a) {
        this.__isStopped !== a &&
            ((this.__isStopped = a), this.toggleClassName("lenis-stopped", a));
    }
    get isLocked() {
        return this.__isLocked;
    }
    set isLocked(a) {
        this.__isLocked !== a &&
            ((this.__isLocked = a), this.toggleClassName("lenis-locked", a));
    }
    get className() {
        let a = "lenis";
        return (
            this.isStopped && (a += " lenis-stopped"),
            this.isLocked && (a += " lenis-locked"),
            this.isScrolling && (a += " lenis-scrolling"),
            this.isSmooth && (a += " lenis-smooth"),
            a
        );
    }
    toggleClassName(a, l) {
        this.rootElement.classList.toggle(a, l),
            this.emitter.emit("className change", this);
    }
}
var xe = function () {
    return (
        (xe =
            Object.assign ||
            function (a) {
                for (var l, r = 1, u = arguments.length; r < u; r++) {
                    l = arguments[r];
                    for (var f in l)
                        Object.prototype.hasOwnProperty.call(l, f) &&
                            (a[f] = l[f]);
                }
                return a;
            }),
        xe.apply(this, arguments)
    );
};
function ro(n, a, l) {
    if (l || arguments.length === 2)
        for (var r = 0, u = a.length, f; r < u; r++)
            (f || !(r in a)) &&
                (f || (f = Array.prototype.slice.call(a, 0, r)), (f[r] = a[r]));
    return n.concat(f || Array.prototype.slice.call(a));
}
var Lt = "-ms-",
    el = "-moz-",
    wt = "-webkit-",
    f1 = "comm",
    So = "rule",
    Ed = "decl",
    DM = "@import",
    d1 = "@keyframes",
    RM = "@layer",
    h1 = Math.abs,
    Ad = String.fromCharCode,
    Cf = Object.assign;
function CM(n, a) {
    return ie(n, 0) ^ 45
        ? (((((((a << 2) ^ ie(n, 0)) << 2) ^ ie(n, 1)) << 2) ^ ie(n, 2)) << 2) ^
              ie(n, 3)
        : 0;
}
function p1(n) {
    return n.trim();
}
function jn(n, a) {
    return (n = a.exec(n)) ? n[0] : n;
}
function yt(n, a, l) {
    return n.replace(a, l);
}
function Qr(n, a, l) {
    return n.indexOf(a, l);
}
function ie(n, a) {
    return n.charCodeAt(a) | 0;
}
function Ua(n, a, l) {
    return n.slice(a, l);
}
function cn(n) {
    return n.length;
}
function m1(n) {
    return n.length;
}
function Fs(n, a) {
    return a.push(n), n;
}
function zM(n, a) {
    return n.map(a).join("");
}
function X0(n, a) {
    return n.filter(function (l) {
        return !jn(l, a);
    });
}
var bo = 1,
    Ha = 1,
    g1 = 0,
    Pe = 0,
    Ft = 0,
    Ka = "";
function xo(n, a, l, r, u, f, d, h) {
    return {
        value: n,
        root: a,
        parent: l,
        type: r,
        props: u,
        children: f,
        line: bo,
        column: Ha,
        length: d,
        return: "",
        siblings: h,
    };
}
function ui(n, a) {
    return Cf(
        xo("", null, null, "", null, null, 0, n.siblings),
        n,
        { length: -n.length },
        a
    );
}
function wa(n) {
    for (; n.root; ) n = ui(n.root, { children: [n] });
    Fs(n, n.siblings);
}
function jM() {
    return Ft;
}
function NM() {
    return (
        (Ft = Pe > 0 ? ie(Ka, --Pe) : 0),
        Ha--,
        Ft === 10 && ((Ha = 1), bo--),
        Ft
    );
}
function tn() {
    return (
        (Ft = Pe < g1 ? ie(Ka, Pe++) : 0),
        Ha++,
        Ft === 10 && ((Ha = 1), bo++),
        Ft
    );
}
function Yi() {
    return ie(Ka, Pe);
}
function Fr() {
    return Pe;
}
function To(n, a) {
    return Ua(Ka, n, a);
}
function zf(n) {
    switch (n) {
        case 0:
        case 9:
        case 10:
        case 13:
        case 32:
            return 5;
        case 33:
        case 43:
        case 44:
        case 47:
        case 62:
        case 64:
        case 126:
        case 59:
        case 123:
        case 125:
            return 4;
        case 58:
            return 3;
        case 34:
        case 39:
        case 40:
        case 91:
            return 2;
        case 41:
        case 93:
            return 1;
    }
    return 0;
}
function LM(n) {
    return (bo = Ha = 1), (g1 = cn((Ka = n))), (Pe = 0), [];
}
function BM(n) {
    return (Ka = ""), n;
}
function tf(n) {
    return p1(To(Pe - 1, jf(n === 91 ? n + 2 : n === 40 ? n + 1 : n)));
}
function VM(n) {
    for (; (Ft = Yi()) && Ft < 33; ) tn();
    return zf(n) > 2 || zf(Ft) > 3 ? "" : " ";
}
function UM(n, a) {
    for (
        ;
        --a &&
        tn() &&
        !(Ft < 48 || Ft > 102 || (Ft > 57 && Ft < 65) || (Ft > 70 && Ft < 97));

    );
    return To(n, Fr() + (a < 6 && Yi() == 32 && tn() == 32));
}
function jf(n) {
    for (; tn(); )
        switch (Ft) {
            case n:
                return Pe;
            case 34:
            case 39:
                n !== 34 && n !== 39 && jf(Ft);
                break;
            case 40:
                n === 41 && jf(n);
                break;
            case 92:
                tn();
                break;
        }
    return Pe;
}
function HM(n, a) {
    for (; tn() && n + Ft !== 57; ) if (n + Ft === 84 && Yi() === 47) break;
    return "/*" + To(a, Pe - 1) + "*" + Ad(n === 47 ? n : tn());
}
function qM(n) {
    for (; !zf(Yi()); ) tn();
    return To(n, Pe);
}
function YM(n) {
    return BM(Wr("", null, null, null, [""], (n = LM(n)), 0, [0], n));
}
function Wr(n, a, l, r, u, f, d, h, p) {
    for (
        var m = 0,
            y = 0,
            v = d,
            b = 0,
            T = 0,
            O = 0,
            R = 1,
            V = 1,
            N = 1,
            k = 0,
            G = "",
            J = u,
            H = f,
            Z = r,
            $ = G;
        V;

    )
        switch (((O = k), (k = tn()))) {
            case 40:
                if (O != 108 && ie($, v - 1) == 58) {
                    Qr(
                        ($ += yt(tf(k), "&", "&\f")),
                        "&\f",
                        h1(m ? h[m - 1] : 0)
                    ) != -1 && (N = -1);
                    break;
                }
            case 34:
            case 39:
            case 91:
                $ += tf(k);
                break;
            case 9:
            case 10:
            case 13:
            case 32:
                $ += VM(O);
                break;
            case 92:
                $ += UM(Fr() - 1, 7);
                continue;
            case 47:
                switch (Yi()) {
                    case 42:
                    case 47:
                        Fs(GM(HM(tn(), Fr()), a, l, p), p);
                        break;
                    default:
                        $ += "/";
                }
                break;
            case 123 * R:
                h[m++] = cn($) * N;
            case 125 * R:
            case 59:
            case 0:
                switch (k) {
                    case 0:
                    case 125:
                        V = 0;
                    case 59 + y:
                        N == -1 && ($ = yt($, /\f/g, "")),
                            T > 0 &&
                                cn($) - v &&
                                Fs(
                                    T > 32
                                        ? P0($ + ";", r, l, v - 1, p)
                                        : P0(
                                              yt($, " ", "") + ";",
                                              r,
                                              l,
                                              v - 2,
                                              p
                                          ),
                                    p
                                );
                        break;
                    case 59:
                        $ += ";";
                    default:
                        if (
                            (Fs(
                                (Z = K0(
                                    $,
                                    a,
                                    l,
                                    m,
                                    y,
                                    u,
                                    h,
                                    G,
                                    (J = []),
                                    (H = []),
                                    v,
                                    f
                                )),
                                f
                            ),
                            k === 123)
                        )
                            if (y === 0) Wr($, a, Z, Z, J, f, v, h, H);
                            else
                                switch (
                                    b === 99 && ie($, 3) === 110 ? 100 : b
                                ) {
                                    case 100:
                                    case 108:
                                    case 109:
                                    case 115:
                                        Wr(
                                            n,
                                            Z,
                                            Z,
                                            r &&
                                                Fs(
                                                    K0(
                                                        n,
                                                        Z,
                                                        Z,
                                                        0,
                                                        0,
                                                        u,
                                                        h,
                                                        G,
                                                        u,
                                                        (J = []),
                                                        v,
                                                        H
                                                    ),
                                                    H
                                                ),
                                            u,
                                            H,
                                            v,
                                            h,
                                            r ? J : H
                                        );
                                        break;
                                    default:
                                        Wr($, Z, Z, Z, [""], H, 0, h, H);
                                }
                }
                (m = y = T = 0), (R = N = 1), (G = $ = ""), (v = d);
                break;
            case 58:
                (v = 1 + cn($)), (T = O);
            default:
                if (R < 1) {
                    if (k == 123) --R;
                    else if (k == 125 && R++ == 0 && NM() == 125) continue;
                }
                switch ((($ += Ad(k)), k * R)) {
                    case 38:
                        N = y > 0 ? 1 : (($ += "\f"), -1);
                        break;
                    case 44:
                        (h[m++] = (cn($) - 1) * N), (N = 1);
                        break;
                    case 64:
                        Yi() === 45 && ($ += tf(tn())),
                            (b = Yi()),
                            (y = v = cn((G = $ += qM(Fr())))),
                            k++;
                        break;
                    case 45:
                        O === 45 && cn($) == 2 && (R = 0);
                }
        }
    return f;
}
function K0(n, a, l, r, u, f, d, h, p, m, y, v) {
    for (
        var b = u - 1, T = u === 0 ? f : [""], O = m1(T), R = 0, V = 0, N = 0;
        R < r;
        ++R
    )
        for (
            var k = 0, G = Ua(n, b + 1, (b = h1((V = d[R])))), J = n;
            k < O;
            ++k
        )
            (J = p1(V > 0 ? T[k] + " " + G : yt(G, /&\f/g, T[k]))) &&
                (p[N++] = J);
    return xo(n, a, l, u === 0 ? So : h, p, m, y, v);
}
function GM(n, a, l, r) {
    return xo(n, a, l, f1, Ad(jM()), Ua(n, 2, -2), 0, r);
}
function P0(n, a, l, r, u) {
    return xo(n, a, l, Ed, Ua(n, 0, r), Ua(n, r + 1, -1), r, u);
}
function y1(n, a, l) {
    switch (CM(n, a)) {
        case 5103:
            return wt + "print-" + n + n;
        case 5737:
        case 4201:
        case 3177:
        case 3433:
        case 1641:
        case 4457:
        case 2921:
        case 5572:
        case 6356:
        case 5844:
        case 3191:
        case 6645:
        case 3005:
        case 6391:
        case 5879:
        case 5623:
        case 6135:
        case 4599:
        case 4855:
        case 4215:
        case 6389:
        case 5109:
        case 5365:
        case 5621:
        case 3829:
            return wt + n + n;
        case 4789:
            return el + n + n;
        case 5349:
        case 4246:
        case 4810:
        case 6968:
        case 2756:
            return wt + n + el + n + Lt + n + n;
        case 5936:
            switch (ie(n, a + 11)) {
                case 114:
                    return wt + n + Lt + yt(n, /[svh]\w+-[tblr]{2}/, "tb") + n;
                case 108:
                    return (
                        wt + n + Lt + yt(n, /[svh]\w+-[tblr]{2}/, "tb-rl") + n
                    );
                case 45:
                    return wt + n + Lt + yt(n, /[svh]\w+-[tblr]{2}/, "lr") + n;
            }
        case 6828:
        case 4268:
        case 2903:
            return wt + n + Lt + n + n;
        case 6165:
            return wt + n + Lt + "flex-" + n + n;
        case 5187:
            return (
                wt +
                n +
                yt(n, /(\w+).+(:[^]+)/, wt + "box-$1$2" + Lt + "flex-$1$2") +
                n
            );
        case 5443:
            return (
                wt +
                n +
                Lt +
                "flex-item-" +
                yt(n, /flex-|-self/g, "") +
                (jn(n, /flex-|baseline/)
                    ? ""
                    : Lt + "grid-row-" + yt(n, /flex-|-self/g, "")) +
                n
            );
        case 4675:
            return (
                wt +
                n +
                Lt +
                "flex-line-pack" +
                yt(n, /align-content|flex-|-self/g, "") +
                n
            );
        case 5548:
            return wt + n + Lt + yt(n, "shrink", "negative") + n;
        case 5292:
            return wt + n + Lt + yt(n, "basis", "preferred-size") + n;
        case 6060:
            return (
                wt +
                "box-" +
                yt(n, "-grow", "") +
                wt +
                n +
                Lt +
                yt(n, "grow", "positive") +
                n
            );
        case 4554:
            return wt + yt(n, /([^-])(transform)/g, "$1" + wt + "$2") + n;
        case 6187:
            return (
                yt(
                    yt(
                        yt(n, /(zoom-|grab)/, wt + "$1"),
                        /(image-set)/,
                        wt + "$1"
                    ),
                    n,
                    ""
                ) + n
            );
        case 5495:
        case 3959:
            return yt(n, /(image-set\([^]*)/, wt + "$1$`$1");
        case 4968:
            return (
                yt(
                    yt(
                        n,
                        /(.+:)(flex-)?(.*)/,
                        wt + "box-pack:$3" + Lt + "flex-pack:$3"
                    ),
                    /s.+-b[^;]+/,
                    "justify"
                ) +
                wt +
                n +
                n
            );
        case 4200:
            if (!jn(n, /flex-|baseline/))
                return Lt + "grid-column-align" + Ua(n, a) + n;
            break;
        case 2592:
        case 3360:
            return Lt + yt(n, "template-", "") + n;
        case 4384:
        case 3616:
            return l &&
                l.some(function (r, u) {
                    return (a = u), jn(r.props, /grid-\w+-end/);
                })
                ? ~Qr(n + (l = l[a].value), "span", 0)
                    ? n
                    : Lt +
                      yt(n, "-start", "") +
                      n +
                      Lt +
                      "grid-row-span:" +
                      (~Qr(l, "span", 0)
                          ? jn(l, /\d+/)
                          : +jn(l, /\d+/) - +jn(n, /\d+/)) +
                      ";"
                : Lt + yt(n, "-start", "") + n;
        case 4896:
        case 4128:
            return l &&
                l.some(function (r) {
                    return jn(r.props, /grid-\w+-start/);
                })
                ? n
                : Lt + yt(yt(n, "-end", "-span"), "span ", "") + n;
        case 4095:
        case 3583:
        case 4068:
        case 2532:
            return yt(n, /(.+)-inline(.+)/, wt + "$1$2") + n;
        case 8116:
        case 7059:
        case 5753:
        case 5535:
        case 5445:
        case 5701:
        case 4933:
        case 4677:
        case 5533:
        case 5789:
        case 5021:
        case 4765:
            if (cn(n) - 1 - a > 6)
                switch (ie(n, a + 1)) {
                    case 109:
                        if (ie(n, a + 4) !== 45) break;
                    case 102:
                        return (
                            yt(
                                n,
                                /(.+:)(.+)-([^]+)/,
                                "$1" +
                                    wt +
                                    "$2-$3$1" +
                                    el +
                                    (ie(n, a + 3) == 108 ? "$3" : "$2-$3")
                            ) + n
                        );
                    case 115:
                        return ~Qr(n, "stretch", 0)
                            ? y1(yt(n, "stretch", "fill-available"), a, l) + n
                            : n;
                }
            break;
        case 5152:
        case 5920:
            return yt(
                n,
                /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
                function (r, u, f, d, h, p, m) {
                    return (
                        Lt +
                        u +
                        ":" +
                        f +
                        m +
                        (d ? Lt + u + "-span:" + (h ? p : +p - +f) + m : "") +
                        n
                    );
                }
            );
        case 4949:
            if (ie(n, a + 6) === 121) return yt(n, ":", ":" + wt) + n;
            break;
        case 6444:
            switch (ie(n, ie(n, 14) === 45 ? 18 : 11)) {
                case 120:
                    return (
                        yt(
                            n,
                            /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
                            "$1" +
                                wt +
                                (ie(n, 14) === 45 ? "inline-" : "") +
                                "box$3$1" +
                                wt +
                                "$2$3$1" +
                                Lt +
                                "$2box$3"
                        ) + n
                    );
                case 100:
                    return yt(n, ":", ":" + Lt) + n;
            }
            break;
        case 5719:
        case 2647:
        case 2135:
        case 3927:
        case 2391:
            return yt(n, "scroll-", "scroll-snap-") + n;
    }
    return n;
}
function oo(n, a) {
    for (var l = "", r = 0; r < n.length; r++) l += a(n[r], r, n, a) || "";
    return l;
}
function kM(n, a, l, r) {
    switch (n.type) {
        case RM:
            if (n.children.length) break;
        case DM:
        case Ed:
            return (n.return = n.return || n.value);
        case f1:
            return "";
        case d1:
            return (n.return = n.value + "{" + oo(n.children, r) + "}");
        case So:
            if (!cn((n.value = n.props.join(",")))) return "";
    }
    return cn((l = oo(n.children, r)))
        ? (n.return = n.value + "{" + l + "}")
        : "";
}
function XM(n) {
    var a = m1(n);
    return function (l, r, u, f) {
        for (var d = "", h = 0; h < a; h++) d += n[h](l, r, u, f) || "";
        return d;
    };
}
function KM(n) {
    return function (a) {
        a.root || ((a = a.return) && n(a));
    };
}
function PM(n, a, l, r) {
    if (n.length > -1 && !n.return)
        switch (n.type) {
            case Ed:
                n.return = y1(n.value, n.length, l);
                return;
            case d1:
                return oo([ui(n, { value: yt(n.value, "@", "@" + wt) })], r);
            case So:
                if (n.length)
                    return zM((l = n.props), function (u) {
                        switch (jn(u, (r = /(::plac\w+|:read-\w+)/))) {
                            case ":read-only":
                            case ":read-write":
                                wa(
                                    ui(n, {
                                        props: [
                                            yt(
                                                u,
                                                /:(read-\w+)/,
                                                ":" + el + "$1"
                                            ),
                                        ],
                                    })
                                ),
                                    wa(ui(n, { props: [u] })),
                                    Cf(n, { props: X0(l, r) });
                                break;
                            case "::placeholder":
                                wa(
                                    ui(n, {
                                        props: [
                                            yt(
                                                u,
                                                /:(plac\w+)/,
                                                ":" + wt + "input-$1"
                                            ),
                                        ],
                                    })
                                ),
                                    wa(
                                        ui(n, {
                                            props: [
                                                yt(
                                                    u,
                                                    /:(plac\w+)/,
                                                    ":" + el + "$1"
                                                ),
                                            ],
                                        })
                                    ),
                                    wa(
                                        ui(n, {
                                            props: [
                                                yt(
                                                    u,
                                                    /:(plac\w+)/,
                                                    Lt + "input-$1"
                                                ),
                                            ],
                                        })
                                    ),
                                    wa(ui(n, { props: [u] })),
                                    Cf(n, { props: X0(l, r) });
                                break;
                        }
                        return "";
                    });
        }
}
var ZM = {
        animationIterationCount: 1,
        aspectRatio: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1,
    },
    De = {},
    qa =
        (typeof process < "u" &&
            De !== void 0 &&
            (De.REACT_APP_SC_ATTR || De.SC_ATTR)) ||
        "data-styled",
    v1 = "active",
    S1 = "data-styled-version",
    Eo = "6.1.15",
    Md = `/*!sc*/
`,
    uo = typeof window < "u" && "HTMLElement" in window,
    QM = !!(typeof SC_DISABLE_SPEEDY == "boolean"
        ? SC_DISABLE_SPEEDY
        : typeof process < "u" &&
            De !== void 0 &&
            De.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
            De.REACT_APP_SC_DISABLE_SPEEDY !== ""
          ? De.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
            De.REACT_APP_SC_DISABLE_SPEEDY
          : typeof process < "u" &&
            De !== void 0 &&
            De.SC_DISABLE_SPEEDY !== void 0 &&
            De.SC_DISABLE_SPEEDY !== "" &&
            De.SC_DISABLE_SPEEDY !== "false" &&
            De.SC_DISABLE_SPEEDY),
    Ao = Object.freeze([]),
    Ya = Object.freeze({});
function FM(n, a, l) {
    return (
        l === void 0 && (l = Ya),
        (n.theme !== l.theme && n.theme) || a || l.theme
    );
}
var b1 = new Set([
        "a",
        "abbr",
        "address",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "base",
        "bdi",
        "bdo",
        "big",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "cite",
        "code",
        "col",
        "colgroup",
        "data",
        "datalist",
        "dd",
        "del",
        "details",
        "dfn",
        "dialog",
        "div",
        "dl",
        "dt",
        "em",
        "embed",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "header",
        "hgroup",
        "hr",
        "html",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "keygen",
        "label",
        "legend",
        "li",
        "link",
        "main",
        "map",
        "mark",
        "menu",
        "menuitem",
        "meta",
        "meter",
        "nav",
        "noscript",
        "object",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "param",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "script",
        "section",
        "select",
        "small",
        "source",
        "span",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "tr",
        "track",
        "u",
        "ul",
        "use",
        "var",
        "video",
        "wbr",
        "circle",
        "clipPath",
        "defs",
        "ellipse",
        "foreignObject",
        "g",
        "image",
        "line",
        "linearGradient",
        "marker",
        "mask",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialGradient",
        "rect",
        "stop",
        "svg",
        "text",
        "tspan",
    ]),
    WM = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
    JM = /(^-|-$)/g;
function Z0(n) {
    return n.replace(WM, "-").replace(JM, "");
}
var $M = /(a)(d)/gi,
    jr = 52,
    Q0 = function (n) {
        return String.fromCharCode(n + (n > 25 ? 39 : 97));
    };
function Nf(n) {
    var a,
        l = "";
    for (a = Math.abs(n); a > jr; a = (a / jr) | 0) l = Q0(a % jr) + l;
    return (Q0(a % jr) + l).replace($M, "$1-$2");
}
var ef,
    x1 = 5381,
    La = function (n, a) {
        for (var l = a.length; l; ) n = (33 * n) ^ a.charCodeAt(--l);
        return n;
    },
    T1 = function (n) {
        return La(x1, n);
    };
function IM(n) {
    return Nf(T1(n) >>> 0);
}
function tO(n) {
    return n.displayName || n.name || "Component";
}
function nf(n) {
    return typeof n == "string" && !0;
}
var E1 = typeof Symbol == "function" && Symbol.for,
    A1 = E1 ? Symbol.for("react.memo") : 60115,
    eO = E1 ? Symbol.for("react.forward_ref") : 60112,
    nO = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0,
    },
    iO = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0,
    },
    M1 = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0,
    },
    aO =
        (((ef = {})[eO] = {
            $$typeof: !0,
            render: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
        }),
        (ef[A1] = M1),
        ef);
function F0(n) {
    return ("type" in (a = n) && a.type.$$typeof) === A1
        ? M1
        : "$$typeof" in n
          ? aO[n.$$typeof]
          : nO;
    var a;
}
var sO = Object.defineProperty,
    lO = Object.getOwnPropertyNames,
    W0 = Object.getOwnPropertySymbols,
    rO = Object.getOwnPropertyDescriptor,
    oO = Object.getPrototypeOf,
    J0 = Object.prototype;
function O1(n, a, l) {
    if (typeof a != "string") {
        if (J0) {
            var r = oO(a);
            r && r !== J0 && O1(n, r, l);
        }
        var u = lO(a);
        W0 && (u = u.concat(W0(a)));
        for (var f = F0(n), d = F0(a), h = 0; h < u.length; ++h) {
            var p = u[h];
            if (!(p in iO || (l && l[p]) || (d && p in d) || (f && p in f))) {
                var m = rO(a, p);
                try {
                    sO(n, p, m);
                } catch {}
            }
        }
    }
    return n;
}
function Ga(n) {
    return typeof n == "function";
}
function Od(n) {
    return typeof n == "object" && "styledComponentId" in n;
}
function Hi(n, a) {
    return n && a ? "".concat(n, " ").concat(a) : n || a || "";
}
function $0(n, a) {
    if (n.length === 0) return "";
    for (var l = n[0], r = 1; r < n.length; r++) l += n[r];
    return l;
}
function ol(n) {
    return (
        n !== null &&
        typeof n == "object" &&
        n.constructor.name === Object.name &&
        !("props" in n && n.$$typeof)
    );
}
function Lf(n, a, l) {
    if ((l === void 0 && (l = !1), !l && !ol(n) && !Array.isArray(n))) return a;
    if (Array.isArray(a))
        for (var r = 0; r < a.length; r++) n[r] = Lf(n[r], a[r]);
    else if (ol(a)) for (var r in a) n[r] = Lf(n[r], a[r]);
    return n;
}
function wd(n, a) {
    Object.defineProperty(n, "toString", { value: a });
}
function pl(n) {
    for (var a = [], l = 1; l < arguments.length; l++) a[l - 1] = arguments[l];
    return new Error(
        "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
            .concat(n, " for more information.")
            .concat(a.length > 0 ? " Args: ".concat(a.join(", ")) : "")
    );
}
var uO = (function () {
        function n(a) {
            (this.groupSizes = new Uint32Array(512)),
                (this.length = 512),
                (this.tag = a);
        }
        return (
            (n.prototype.indexOfGroup = function (a) {
                for (var l = 0, r = 0; r < a; r++) l += this.groupSizes[r];
                return l;
            }),
            (n.prototype.insertRules = function (a, l) {
                if (a >= this.groupSizes.length) {
                    for (var r = this.groupSizes, u = r.length, f = u; a >= f; )
                        if ((f <<= 1) < 0) throw pl(16, "".concat(a));
                    (this.groupSizes = new Uint32Array(f)),
                        this.groupSizes.set(r),
                        (this.length = f);
                    for (var d = u; d < f; d++) this.groupSizes[d] = 0;
                }
                for (
                    var h = this.indexOfGroup(a + 1), p = ((d = 0), l.length);
                    d < p;
                    d++
                )
                    this.tag.insertRule(h, l[d]) && (this.groupSizes[a]++, h++);
            }),
            (n.prototype.clearGroup = function (a) {
                if (a < this.length) {
                    var l = this.groupSizes[a],
                        r = this.indexOfGroup(a),
                        u = r + l;
                    this.groupSizes[a] = 0;
                    for (var f = r; f < u; f++) this.tag.deleteRule(r);
                }
            }),
            (n.prototype.getGroup = function (a) {
                var l = "";
                if (a >= this.length || this.groupSizes[a] === 0) return l;
                for (
                    var r = this.groupSizes[a],
                        u = this.indexOfGroup(a),
                        f = u + r,
                        d = u;
                    d < f;
                    d++
                )
                    l += "".concat(this.tag.getRule(d)).concat(Md);
                return l;
            }),
            n
        );
    })(),
    Jr = new Map(),
    co = new Map(),
    $r = 1,
    Nr = function (n) {
        if (Jr.has(n)) return Jr.get(n);
        for (; co.has($r); ) $r++;
        var a = $r++;
        return Jr.set(n, a), co.set(a, n), a;
    },
    cO = function (n, a) {
        ($r = a + 1), Jr.set(n, a), co.set(a, n);
    },
    fO = "style[".concat(qa, "][").concat(S1, '="').concat(Eo, '"]'),
    dO = new RegExp(
        "^".concat(qa, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
    ),
    hO = function (n, a, l) {
        for (var r, u = l.split(","), f = 0, d = u.length; f < d; f++)
            (r = u[f]) && n.registerName(a, r);
    },
    pO = function (n, a) {
        for (
            var l,
                r = (
                    (l = a.textContent) !== null && l !== void 0 ? l : ""
                ).split(Md),
                u = [],
                f = 0,
                d = r.length;
            f < d;
            f++
        ) {
            var h = r[f].trim();
            if (h) {
                var p = h.match(dO);
                if (p) {
                    var m = 0 | parseInt(p[1], 10),
                        y = p[2];
                    m !== 0 &&
                        (cO(y, m),
                        hO(n, y, p[3]),
                        n.getTag().insertRules(m, u)),
                        (u.length = 0);
                } else u.push(h);
            }
        }
    },
    I0 = function (n) {
        for (
            var a = document.querySelectorAll(fO), l = 0, r = a.length;
            l < r;
            l++
        ) {
            var u = a[l];
            u &&
                u.getAttribute(qa) !== v1 &&
                (pO(n, u), u.parentNode && u.parentNode.removeChild(u));
        }
    };
function mO() {
    return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var w1 = function (n) {
        var a = document.head,
            l = n || a,
            r = document.createElement("style"),
            u = (function (h) {
                var p = Array.from(
                    h.querySelectorAll("style[".concat(qa, "]"))
                );
                return p[p.length - 1];
            })(l),
            f = u !== void 0 ? u.nextSibling : null;
        r.setAttribute(qa, v1), r.setAttribute(S1, Eo);
        var d = mO();
        return d && r.setAttribute("nonce", d), l.insertBefore(r, f), r;
    },
    gO = (function () {
        function n(a) {
            (this.element = w1(a)),
                this.element.appendChild(document.createTextNode("")),
                (this.sheet = (function (l) {
                    if (l.sheet) return l.sheet;
                    for (
                        var r = document.styleSheets, u = 0, f = r.length;
                        u < f;
                        u++
                    ) {
                        var d = r[u];
                        if (d.ownerNode === l) return d;
                    }
                    throw pl(17);
                })(this.element)),
                (this.length = 0);
        }
        return (
            (n.prototype.insertRule = function (a, l) {
                try {
                    return this.sheet.insertRule(l, a), this.length++, !0;
                } catch {
                    return !1;
                }
            }),
            (n.prototype.deleteRule = function (a) {
                this.sheet.deleteRule(a), this.length--;
            }),
            (n.prototype.getRule = function (a) {
                var l = this.sheet.cssRules[a];
                return l && l.cssText ? l.cssText : "";
            }),
            n
        );
    })(),
    yO = (function () {
        function n(a) {
            (this.element = w1(a)),
                (this.nodes = this.element.childNodes),
                (this.length = 0);
        }
        return (
            (n.prototype.insertRule = function (a, l) {
                if (a <= this.length && a >= 0) {
                    var r = document.createTextNode(l);
                    return (
                        this.element.insertBefore(r, this.nodes[a] || null),
                        this.length++,
                        !0
                    );
                }
                return !1;
            }),
            (n.prototype.deleteRule = function (a) {
                this.element.removeChild(this.nodes[a]), this.length--;
            }),
            (n.prototype.getRule = function (a) {
                return a < this.length ? this.nodes[a].textContent : "";
            }),
            n
        );
    })(),
    vO = (function () {
        function n(a) {
            (this.rules = []), (this.length = 0);
        }
        return (
            (n.prototype.insertRule = function (a, l) {
                return (
                    a <= this.length &&
                    (this.rules.splice(a, 0, l), this.length++, !0)
                );
            }),
            (n.prototype.deleteRule = function (a) {
                this.rules.splice(a, 1), this.length--;
            }),
            (n.prototype.getRule = function (a) {
                return a < this.length ? this.rules[a] : "";
            }),
            n
        );
    })(),
    ty = uo,
    SO = { isServer: !uo, useCSSOMInjection: !QM },
    _1 = (function () {
        function n(a, l, r) {
            a === void 0 && (a = Ya), l === void 0 && (l = {});
            var u = this;
            (this.options = xe(xe({}, SO), a)),
                (this.gs = l),
                (this.names = new Map(r)),
                (this.server = !!a.isServer),
                !this.server && uo && ty && ((ty = !1), I0(this)),
                wd(this, function () {
                    return (function (f) {
                        for (
                            var d = f.getTag(),
                                h = d.length,
                                p = "",
                                m = function (v) {
                                    var b = (function (N) {
                                        return co.get(N);
                                    })(v);
                                    if (b === void 0) return "continue";
                                    var T = f.names.get(b),
                                        O = d.getGroup(v);
                                    if (
                                        T === void 0 ||
                                        !T.size ||
                                        O.length === 0
                                    )
                                        return "continue";
                                    var R = ""
                                            .concat(qa, ".g")
                                            .concat(v, '[id="')
                                            .concat(b, '"]'),
                                        V = "";
                                    T !== void 0 &&
                                        T.forEach(function (N) {
                                            N.length > 0 &&
                                                (V += "".concat(N, ","));
                                        }),
                                        (p += ""
                                            .concat(O)
                                            .concat(R, '{content:"')
                                            .concat(V, '"}')
                                            .concat(Md));
                                },
                                y = 0;
                            y < h;
                            y++
                        )
                            m(y);
                        return p;
                    })(u);
                });
        }
        return (
            (n.registerId = function (a) {
                return Nr(a);
            }),
            (n.prototype.rehydrate = function () {
                !this.server && uo && I0(this);
            }),
            (n.prototype.reconstructWithOptions = function (a, l) {
                return (
                    l === void 0 && (l = !0),
                    new n(
                        xe(xe({}, this.options), a),
                        this.gs,
                        (l && this.names) || void 0
                    )
                );
            }),
            (n.prototype.allocateGSInstance = function (a) {
                return (this.gs[a] = (this.gs[a] || 0) + 1);
            }),
            (n.prototype.getTag = function () {
                return (
                    this.tag ||
                    (this.tag =
                        ((a = (function (l) {
                            var r = l.useCSSOMInjection,
                                u = l.target;
                            return l.isServer
                                ? new vO(u)
                                : r
                                  ? new gO(u)
                                  : new yO(u);
                        })(this.options)),
                        new uO(a)))
                );
                var a;
            }),
            (n.prototype.hasNameForId = function (a, l) {
                return this.names.has(a) && this.names.get(a).has(l);
            }),
            (n.prototype.registerName = function (a, l) {
                if ((Nr(a), this.names.has(a))) this.names.get(a).add(l);
                else {
                    var r = new Set();
                    r.add(l), this.names.set(a, r);
                }
            }),
            (n.prototype.insertRules = function (a, l, r) {
                this.registerName(a, l), this.getTag().insertRules(Nr(a), r);
            }),
            (n.prototype.clearNames = function (a) {
                this.names.has(a) && this.names.get(a).clear();
            }),
            (n.prototype.clearRules = function (a) {
                this.getTag().clearGroup(Nr(a)), this.clearNames(a);
            }),
            (n.prototype.clearTag = function () {
                this.tag = void 0;
            }),
            n
        );
    })(),
    bO = /&/g,
    xO = /^\s*\/\/.*$/gm;
function D1(n, a) {
    return n.map(function (l) {
        return (
            l.type === "rule" &&
                ((l.value = "".concat(a, " ").concat(l.value)),
                (l.value = l.value.replaceAll(",", ",".concat(a, " "))),
                (l.props = l.props.map(function (r) {
                    return "".concat(a, " ").concat(r);
                }))),
            Array.isArray(l.children) &&
                l.type !== "@keyframes" &&
                (l.children = D1(l.children, a)),
            l
        );
    });
}
function TO(n) {
    var a,
        l,
        r,
        u = Ya,
        f = u.options,
        d = f === void 0 ? Ya : f,
        h = u.plugins,
        p = h === void 0 ? Ao : h,
        m = function (b, T, O) {
            return O.startsWith(l) &&
                O.endsWith(l) &&
                O.replaceAll(l, "").length > 0
                ? ".".concat(a)
                : b;
        },
        y = p.slice();
    y.push(function (b) {
        b.type === So &&
            b.value.includes("&") &&
            (b.props[0] = b.props[0].replace(bO, l).replace(r, m));
    }),
        d.prefix && y.push(PM),
        y.push(kM);
    var v = function (b, T, O, R) {
        T === void 0 && (T = ""),
            O === void 0 && (O = ""),
            R === void 0 && (R = "&"),
            (a = R),
            (l = T),
            (r = new RegExp("\\".concat(l, "\\b"), "g"));
        var V = b.replace(xO, ""),
            N = YM(
                O || T ? "".concat(O, " ").concat(T, " { ").concat(V, " }") : V
            );
        d.namespace && (N = D1(N, d.namespace));
        var k = [];
        return (
            oo(
                N,
                XM(
                    y.concat(
                        KM(function (G) {
                            return k.push(G);
                        })
                    )
                )
            ),
            k
        );
    };
    return (
        (v.hash = p.length
            ? p
                  .reduce(function (b, T) {
                      return T.name || pl(15), La(b, T.name);
                  }, x1)
                  .toString()
            : ""),
        v
    );
}
var EO = new _1(),
    Bf = TO(),
    R1 = Ke.createContext({
        shouldForwardProp: void 0,
        styleSheet: EO,
        stylis: Bf,
    });
R1.Consumer;
Ke.createContext(void 0);
function ey() {
    return Q.useContext(R1);
}
var AO = (function () {
        function n(a, l) {
            var r = this;
            (this.inject = function (u, f) {
                f === void 0 && (f = Bf);
                var d = r.name + f.hash;
                u.hasNameForId(r.id, d) ||
                    u.insertRules(r.id, d, f(r.rules, d, "@keyframes"));
            }),
                (this.name = a),
                (this.id = "sc-keyframes-".concat(a)),
                (this.rules = l),
                wd(this, function () {
                    throw pl(12, String(r.name));
                });
        }
        return (
            (n.prototype.getName = function (a) {
                return a === void 0 && (a = Bf), this.name + a.hash;
            }),
            n
        );
    })(),
    MO = function (n) {
        return n >= "A" && n <= "Z";
    };
function ny(n) {
    for (var a = "", l = 0; l < n.length; l++) {
        var r = n[l];
        if (l === 1 && r === "-" && n[0] === "-") return n;
        MO(r) ? (a += "-" + r.toLowerCase()) : (a += r);
    }
    return a.startsWith("ms-") ? "-" + a : a;
}
var C1 = function (n) {
        return n == null || n === !1 || n === "";
    },
    z1 = function (n) {
        var a,
            l,
            r = [];
        for (var u in n) {
            var f = n[u];
            n.hasOwnProperty(u) &&
                !C1(f) &&
                ((Array.isArray(f) && f.isCss) || Ga(f)
                    ? r.push("".concat(ny(u), ":"), f, ";")
                    : ol(f)
                      ? r.push.apply(
                            r,
                            ro(ro(["".concat(u, " {")], z1(f), !1), ["}"], !1)
                        )
                      : r.push(
                            ""
                                .concat(ny(u), ": ")
                                .concat(
                                    ((a = u),
                                    (l = f) == null ||
                                    typeof l == "boolean" ||
                                    l === ""
                                        ? ""
                                        : typeof l != "number" ||
                                            l === 0 ||
                                            a in ZM ||
                                            a.startsWith("--")
                                          ? String(l).trim()
                                          : "".concat(l, "px")),
                                    ";"
                                )
                        ));
        }
        return r;
    };
function Gi(n, a, l, r) {
    if (C1(n)) return [];
    if (Od(n)) return [".".concat(n.styledComponentId)];
    if (Ga(n)) {
        if (!Ga((f = n)) || (f.prototype && f.prototype.isReactComponent) || !a)
            return [n];
        var u = n(a);
        return Gi(u, a, l, r);
    }
    var f;
    return n instanceof AO
        ? l
            ? (n.inject(l, r), [n.getName(r)])
            : [n]
        : ol(n)
          ? z1(n)
          : Array.isArray(n)
            ? Array.prototype.concat.apply(
                  Ao,
                  n.map(function (d) {
                      return Gi(d, a, l, r);
                  })
              )
            : [n.toString()];
}
function OO(n) {
    for (var a = 0; a < n.length; a += 1) {
        var l = n[a];
        if (Ga(l) && !Od(l)) return !1;
    }
    return !0;
}
var wO = T1(Eo),
    _O = (function () {
        function n(a, l, r) {
            (this.rules = a),
                (this.staticRulesId = ""),
                (this.isStatic = (r === void 0 || r.isStatic) && OO(a)),
                (this.componentId = l),
                (this.baseHash = La(wO, l)),
                (this.baseStyle = r),
                _1.registerId(l);
        }
        return (
            (n.prototype.generateAndInjectStyles = function (a, l, r) {
                var u = this.baseStyle
                    ? this.baseStyle.generateAndInjectStyles(a, l, r)
                    : "";
                if (this.isStatic && !r.hash)
                    if (
                        this.staticRulesId &&
                        l.hasNameForId(this.componentId, this.staticRulesId)
                    )
                        u = Hi(u, this.staticRulesId);
                    else {
                        var f = $0(Gi(this.rules, a, l, r)),
                            d = Nf(La(this.baseHash, f) >>> 0);
                        if (!l.hasNameForId(this.componentId, d)) {
                            var h = r(
                                f,
                                ".".concat(d),
                                void 0,
                                this.componentId
                            );
                            l.insertRules(this.componentId, d, h);
                        }
                        (u = Hi(u, d)), (this.staticRulesId = d);
                    }
                else {
                    for (
                        var p = La(this.baseHash, r.hash), m = "", y = 0;
                        y < this.rules.length;
                        y++
                    ) {
                        var v = this.rules[y];
                        if (typeof v == "string") m += v;
                        else if (v) {
                            var b = $0(Gi(v, a, l, r));
                            (p = La(p, b + y)), (m += b);
                        }
                    }
                    if (m) {
                        var T = Nf(p >>> 0);
                        l.hasNameForId(this.componentId, T) ||
                            l.insertRules(
                                this.componentId,
                                T,
                                r(m, ".".concat(T), void 0, this.componentId)
                            ),
                            (u = Hi(u, T));
                    }
                }
                return u;
            }),
            n
        );
    })(),
    j1 = Ke.createContext(void 0);
j1.Consumer;
var af = {};
function DO(n, a, l) {
    var r = Od(n),
        u = n,
        f = !nf(n),
        d = a.attrs,
        h = d === void 0 ? Ao : d,
        p = a.componentId,
        m =
            p === void 0
                ? (function (J, H) {
                      var Z = typeof J != "string" ? "sc" : Z0(J);
                      af[Z] = (af[Z] || 0) + 1;
                      var $ = "".concat(Z, "-").concat(IM(Eo + Z + af[Z]));
                      return H ? "".concat(H, "-").concat($) : $;
                  })(a.displayName, a.parentComponentId)
                : p,
        y = a.displayName,
        v =
            y === void 0
                ? (function (J) {
                      return nf(J)
                          ? "styled.".concat(J)
                          : "Styled(".concat(tO(J), ")");
                  })(n)
                : y,
        b =
            a.displayName && a.componentId
                ? "".concat(Z0(a.displayName), "-").concat(a.componentId)
                : a.componentId || m,
        T = r && u.attrs ? u.attrs.concat(h).filter(Boolean) : h,
        O = a.shouldForwardProp;
    if (r && u.shouldForwardProp) {
        var R = u.shouldForwardProp;
        if (a.shouldForwardProp) {
            var V = a.shouldForwardProp;
            O = function (J, H) {
                return R(J, H) && V(J, H);
            };
        } else O = R;
    }
    var N = new _O(l, b, r ? u.componentStyle : void 0);
    function k(J, H) {
        return (function (Z, $, st) {
            var F = Z.attrs,
                lt = Z.componentStyle,
                tt = Z.defaultProps,
                nt = Z.foldedComponentIds,
                dt = Z.styledComponentId,
                K = Z.target,
                P = Ke.useContext(j1),
                q = ey(),
                M = Z.shouldForwardProp || q.shouldForwardProp,
                U = FM($, P, tt) || Ya,
                I = (function (mt, ht, Ht) {
                    for (
                        var xt,
                            _t = xe(xe({}, ht), {
                                className: void 0,
                                theme: Ht,
                            }),
                            Dt = 0;
                        Dt < mt.length;
                        Dt += 1
                    ) {
                        var de = Ga((xt = mt[Dt])) ? xt(_t) : xt;
                        for (var ye in de)
                            _t[ye] =
                                ye === "className"
                                    ? Hi(_t[ye], de[ye])
                                    : ye === "style"
                                      ? xe(xe({}, _t[ye]), de[ye])
                                      : de[ye];
                    }
                    return (
                        ht.className &&
                            (_t.className = Hi(_t.className, ht.className)),
                        _t
                    );
                })(F, $, U),
                E = I.as || K,
                L = {};
            for (var et in I)
                I[et] === void 0 ||
                    et[0] === "$" ||
                    et === "as" ||
                    (et === "theme" && I.theme === U) ||
                    (et === "forwardedAs"
                        ? (L.as = I.forwardedAs)
                        : (M && !M(et, E)) || (L[et] = I[et]));
            var at = (function (mt, ht) {
                    var Ht = ey(),
                        xt = mt.generateAndInjectStyles(
                            ht,
                            Ht.styleSheet,
                            Ht.stylis
                        );
                    return xt;
                })(lt, I),
                W = Hi(nt, dt);
            return (
                at && (W += " " + at),
                I.className && (W += " " + I.className),
                (L[nf(E) && !b1.has(E) ? "class" : "className"] = W),
                st && (L.ref = st),
                Q.createElement(E, L)
            );
        })(G, J, H);
    }
    k.displayName = v;
    var G = Ke.forwardRef(k);
    return (
        (G.attrs = T),
        (G.componentStyle = N),
        (G.displayName = v),
        (G.shouldForwardProp = O),
        (G.foldedComponentIds = r
            ? Hi(u.foldedComponentIds, u.styledComponentId)
            : ""),
        (G.styledComponentId = b),
        (G.target = r ? u.target : n),
        Object.defineProperty(G, "defaultProps", {
            get: function () {
                return this._foldedDefaultProps;
            },
            set: function (J) {
                this._foldedDefaultProps = r
                    ? (function (H) {
                          for (var Z = [], $ = 1; $ < arguments.length; $++)
                              Z[$ - 1] = arguments[$];
                          for (var st = 0, F = Z; st < F.length; st++)
                              Lf(H, F[st], !0);
                          return H;
                      })({}, u.defaultProps, J)
                    : J;
            },
        }),
        wd(G, function () {
            return ".".concat(G.styledComponentId);
        }),
        f &&
            O1(G, n, {
                attrs: !0,
                componentStyle: !0,
                displayName: !0,
                foldedComponentIds: !0,
                shouldForwardProp: !0,
                styledComponentId: !0,
                target: !0,
            }),
        G
    );
}
function iy(n, a) {
    for (var l = [n[0]], r = 0, u = a.length; r < u; r += 1)
        l.push(a[r], n[r + 1]);
    return l;
}
var ay = function (n) {
    return Object.assign(n, { isCss: !0 });
};
function RO(n) {
    for (var a = [], l = 1; l < arguments.length; l++) a[l - 1] = arguments[l];
    if (Ga(n) || ol(n)) return ay(Gi(iy(Ao, ro([n], a, !0))));
    var r = n;
    return a.length === 0 && r.length === 1 && typeof r[0] == "string"
        ? Gi(r)
        : ay(Gi(iy(r, a)));
}
function Vf(n, a, l) {
    if ((l === void 0 && (l = Ya), !a)) throw pl(1, a);
    var r = function (u) {
        for (var f = [], d = 1; d < arguments.length; d++)
            f[d - 1] = arguments[d];
        return n(a, l, RO.apply(void 0, ro([u], f, !1)));
    };
    return (
        (r.attrs = function (u) {
            return Vf(
                n,
                a,
                xe(xe({}, l), {
                    attrs: Array.prototype.concat(l.attrs, u).filter(Boolean),
                })
            );
        }),
        (r.withConfig = function (u) {
            return Vf(n, a, xe(xe({}, l), u));
        }),
        r
    );
}
var N1 = function (n) {
        return Vf(DO, n);
    },
    ot = N1;
b1.forEach(function (n) {
    ot[n] = N1(n);
});
const CO = ot.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: sticky;
    top: 0px;
    transition: visibility 0.3s ease;
`,
    zO = ot(ci.div)`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 90%;
    height: 85vh;
    border-radius: 5px;
    padding: 20px 0px;
    background-color: white;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
    overflow-y: auto;
    transform-origin: center top;
    will-change: transform;
    justify-content: center;
    @media (max-width: 768px) {
        width: 90%;
        height: 80vh;
        padding: 15px;
    }
`,
    jO = ot.h2`
    text-align: center;
    margin: 0;
    font-size: 40px;
    padding-bottom: 15px;
    font-family: "Nanum Myeongjo", serif;
    word-spacing: -0.8rem;
    font-weight: 400;
    color: #666;
    letter-spacing: -0.08rem;
    display: flex;
    position: relative;
    width: auto;
    justify-content: center;
    @media (max-width: 768px) {
        font-size: 30px;
    }
`;
ot.span`
    font-size: 20px;
    position: absolute;
    left: -25px;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.4;
    filter: blur(0.3px);
`;
const NO = ot.div`
    display: flex;
    flex-direction: column;
    height: calc(100% - 60px);
    gap: 20px;
    overflow-y: auto;
    flex-grow: 1;
    justify-content: center;
`,
    LO = ot.div`
    width: 100%;
    height: 100%;
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > span {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        margin-top: 15px;

        a {
            font-size: 16px;
            text-decoration: underline;
            cursor: pointer;
            color: #333;
            transition: color 0.3s ease;

            &:hover {
                color: #000;
            }
        }
    }
`;
ot.div`
    position: relative;
    width: 100%;
    flex: 1;
    min-height: 200px;
    border-radius: 15px;
    overflow: hidden;
    margin-top: 10px;
`;
ot(ci.div)`
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
const BO = ({
        i: n,
        title: a,
        color: l,
        progress: r,
        range: u,
        targetScale: f,
        isVisible: d,
        childrenNode: h,
        id: p,
    }) => {
        const m = Q.useRef(null),
            { scrollYProgress: y } = Td({
                target: m,
                offset: ["start end", "start start"],
            });
        lo(y, [0, 1], [2, 1]);
        const v = lo(r, u, [1, f]);
        return _.jsx(CO, {
            ref: m,
            isVisible: d,
            id: p,
            children: _.jsxs(zO, {
                style: {
                    background: l,
                    scale: v,
                    top: `calc(-5vh + ${n * 30}px)`,
                },
                initial: { opacity: 1, y: 0 },
                animate: d ? { opacity: 1, y: 0 } : { opacity: 1, y: 30 },
                transition: { duration: 0, delay: n * 0.1 },
                children: [
                    _.jsx(jO, {
                        children: _.jsx("div", {
                            style: {
                                position: "relative",
                                width: "max-content",
                            },
                            children: a,
                        }),
                    }),
                    _.jsx(NO, { children: _.jsx(LO, { children: h }) }),
                ],
            }),
        });
    },
    L1 = "/weddingJS/assets/mainResizeImage-CTe-R5zJ.jpg";
/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const VO = (n) => n.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    B1 = (...n) =>
        n
            .filter((a, l, r) => !!a && a.trim() !== "" && r.indexOf(a) === l)
            .join(" ")
            .trim();
/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var UO = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const HO = Q.forwardRef(
    (
        {
            color: n = "currentColor",
            size: a = 24,
            strokeWidth: l = 2,
            absoluteStrokeWidth: r,
            className: u = "",
            children: f,
            iconNode: d,
            ...h
        },
        p
    ) =>
        Q.createElement(
            "svg",
            {
                ref: p,
                ...UO,
                width: a,
                height: a,
                stroke: n,
                strokeWidth: r ? (Number(l) * 24) / Number(a) : l,
                className: B1("lucide", u),
                ...h,
            },
            [
                ...d.map(([m, y]) => Q.createElement(m, y)),
                ...(Array.isArray(f) ? f : [f]),
            ]
        )
);
/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ml = (n, a) => {
    const l = Q.forwardRef(({ className: r, ...u }, f) =>
        Q.createElement(HO, {
            ref: f,
            iconNode: a,
            className: B1(`lucide-${VO(n)}`, r),
            ...u,
        })
    );
    return (l.displayName = `${n}`), l;
};
/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qO = [
        ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
        [
            "path",
            {
                d: "M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5",
                key: "14wa3c",
            },
        ],
        ["path", { d: "M12 7.5V9", key: "1oy5b0" }],
        ["path", { d: "M7.5 12H9", key: "eltsq1" }],
        ["path", { d: "M16.5 12H15", key: "vk5kw4" }],
        ["path", { d: "M12 16.5V15", key: "k7eayi" }],
        ["path", { d: "m8 8 1.88 1.88", key: "nxy4qf" }],
        ["path", { d: "M14.12 9.88 16 8", key: "1lst6k" }],
        ["path", { d: "m8 16 1.88-1.88", key: "h2eex1" }],
        ["path", { d: "M14.12 14.12 16 16", key: "uqkrx3" }],
    ],
    YO = ml("Flower", qO);
/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const GO = [
        [
            "path",
            {
                d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",
                key: "169xi5",
            },
        ],
        ["path", { d: "M15 5.764v15", key: "1pn4in" }],
        ["path", { d: "M9 3.236v15", key: "1uimfh" }],
    ],
    kO = ml("Map", GO);
/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const XO = [
        [
            "path",
            {
                d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
                key: "foiqr5",
            },
        ],
    ],
    KO = ml("Phone", XO);
/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const PO = [
        [
            "path",
            {
                d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
                key: "uqj9uw",
            },
        ],
        ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
        ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }],
    ],
    ZO = ml("Volume2", PO);
/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const QO = [
        [
            "path",
            {
                d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
                key: "uqj9uw",
            },
        ],
        ["line", { x1: "22", x2: "16", y1: "9", y2: "15", key: "1ewh16" }],
        ["line", { x1: "16", x2: "22", y1: "9", y2: "15", key: "5ykzw1" }],
    ],
    FO = ml("VolumeX", QO),
    WO = ot.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #e9e9e9;
    border-radius: 3px;
`,
    JO = ot.h3`
    display: flex;
    align-items: center;
    gap: 1px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    background-color: #e9e9e9;
    color: ${({ isGroom: n }) =>
        n ? "#000987" : "#750000"}; /* 연한 파랑, 연한 핑크 */
    padding: 3px 10px;
    font-family: "Nanum Myeongjo", serif;
    word-spacing: -0.8rem;
    & > span {
        margin-top: 2px;
    }
`,
    $O = ot.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
`,
    IO = ot.li`
    display: flex;
    flex-direction: column;
    padding: 8px 12px;
    background: #f9f9f9;
    border-top: 1px solid #e9e9e9;
    gap: 5px;
`,
    tw = ot.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Noto Sans KR", sans-serif;
    letter-spacing: -0.02em;
`,
    ew = ot.span`
    font-size: 13px;
    color: #444;
`,
    nw = ot.p`
    font-size: 13px;
    margin-top: 2px;
    color: #666;
`,
    iw = ot.button`
    background-color: #fff;
    color: #666;
    border: 1px solid #ddd;
    border-radius: 15px;
    cursor: pointer;
    font-size: 12px;
    padding: 8px 15px;
    transition: background 0.2s;
    width: max-content;
    font-weight: 900;
    &:hover {
        background-color: #0056b3;
    }
    margin: 0 auto;
`,
    aw = ({ section: n, accounts: a, isGroom: l }) => {
        const r = (u) => {
            navigator.clipboard.writeText(u),
                alert(`계좌번호가 복사되었습니다:
${u}`);
        };
        return _.jsxs(WO, {
            children: [
                _.jsxs(JO, {
                    isGroom: l,
                    children: [
                        _.jsx(YO, { size: 15 }),
                        _.jsx("span", { children: n }),
                    ],
                }),
                _.jsx($O, {
                    children: a.map((u, f) =>
                        _.jsxs(
                            IO,
                            {
                                isFirst: f === 0,
                                children: [
                                    _.jsxs(tw, {
                                        children: [
                                            _.jsx(ew, { children: u.name }),
                                            _.jsx(nw, { children: u.account }),
                                        ],
                                    }),
                                    _.jsx(iw, {
                                        onClick: () => r(u.account),
                                        children: "계좌 번호 복사",
                                    }),
                                ],
                            },
                            f
                        )
                    ),
                }),
            ],
        });
    };
var Lr = { exports: {} },
    li = {},
    sf = { exports: {} },
    lf,
    sy;
function sw() {
    if (sy) return lf;
    sy = 1;
    var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    return (lf = n), lf;
}
var rf, ly;
function lw() {
    if (ly) return rf;
    ly = 1;
    var n = sw();
    function a() {}
    function l() {}
    return (
        (l.resetWarningCache = a),
        (rf = function () {
            function r(d, h, p, m, y, v) {
                if (v !== n) {
                    var b = new Error(
                        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                    );
                    throw ((b.name = "Invariant Violation"), b);
                }
            }
            r.isRequired = r;
            function u() {
                return r;
            }
            var f = {
                array: r,
                bigint: r,
                bool: r,
                func: r,
                number: r,
                object: r,
                string: r,
                symbol: r,
                any: r,
                arrayOf: u,
                element: r,
                elementType: r,
                instanceOf: u,
                node: r,
                objectOf: u,
                oneOf: u,
                oneOfType: u,
                shape: u,
                exact: u,
                checkPropTypes: l,
                resetWarningCache: a,
            };
            return (f.PropTypes = f), f;
        }),
        rf
    );
}
var ry;
function V1() {
    return ry || ((ry = 1), (sf.exports = lw()())), sf.exports;
}
var Br = { exports: {} },
    ke = {},
    Vr = { exports: {} },
    oy;
function U1() {
    return (
        oy ||
            ((oy = 1),
            (function (n, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                    (a.default = y);
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
                 */ var l = "none",
                    r = "contents",
                    u = /^(input|select|textarea|button|object|iframe)$/;
                function f(v, b) {
                    return (
                        b.getPropertyValue("overflow") !== "visible" ||
                        (v.scrollWidth <= 0 && v.scrollHeight <= 0)
                    );
                }
                function d(v) {
                    var b = v.offsetWidth <= 0 && v.offsetHeight <= 0;
                    if (b && !v.innerHTML) return !0;
                    try {
                        var T = window.getComputedStyle(v),
                            O = T.getPropertyValue("display");
                        return b ? O !== r && f(v, T) : O === l;
                    } catch {
                        return (
                            console.warn("Failed to inspect element style"), !1
                        );
                    }
                }
                function h(v) {
                    for (
                        var b = v, T = v.getRootNode && v.getRootNode();
                        b && b !== document.body;

                    ) {
                        if ((T && b === T && (b = T.host.parentNode), d(b)))
                            return !1;
                        b = b.parentNode;
                    }
                    return !0;
                }
                function p(v, b) {
                    var T = v.nodeName.toLowerCase(),
                        O =
                            (u.test(T) && !v.disabled) ||
                            (T === "a" && v.href) ||
                            b;
                    return O && h(v);
                }
                function m(v) {
                    var b = v.getAttribute("tabindex");
                    b === null && (b = void 0);
                    var T = isNaN(b);
                    return (T || b >= 0) && p(v, !T);
                }
                function y(v) {
                    var b = [].slice
                        .call(v.querySelectorAll("*"), 0)
                        .reduce(function (T, O) {
                            return T.concat(
                                O.shadowRoot ? y(O.shadowRoot) : [O]
                            );
                        }, []);
                    return b.filter(m);
                }
                n.exports = a.default;
            })(Vr, Vr.exports)),
        Vr.exports
    );
}
var uy;
function rw() {
    if (uy) return ke;
    (uy = 1),
        Object.defineProperty(ke, "__esModule", { value: !0 }),
        (ke.resetState = d),
        (ke.log = h),
        (ke.handleBlur = p),
        (ke.handleFocus = m),
        (ke.markForFocusLater = y),
        (ke.returnFocus = v),
        (ke.popWithoutFocus = b),
        (ke.setupScopedFocus = T),
        (ke.teardownScopedFocus = O);
    var n = U1(),
        a = l(n);
    function l(R) {
        return R && R.__esModule ? R : { default: R };
    }
    var r = [],
        u = null,
        f = !1;
    function d() {
        r = [];
    }
    function h() {}
    function p() {
        f = !0;
    }
    function m() {
        if (f) {
            if (((f = !1), !u)) return;
            setTimeout(function () {
                if (!u.contains(document.activeElement)) {
                    var R = (0, a.default)(u)[0] || u;
                    R.focus();
                }
            }, 0);
        }
    }
    function y() {
        r.push(document.activeElement);
    }
    function v() {
        var R =
                arguments.length > 0 && arguments[0] !== void 0
                    ? arguments[0]
                    : !1,
            V = null;
        try {
            r.length !== 0 && ((V = r.pop()), V.focus({ preventScroll: R }));
            return;
        } catch {
            console.warn(
                [
                    "You tried to return focus to",
                    V,
                    "but it is not in the DOM anymore",
                ].join(" ")
            );
        }
    }
    function b() {
        r.length > 0 && r.pop();
    }
    function T(R) {
        (u = R),
            window.addEventListener
                ? (window.addEventListener("blur", p, !1),
                  document.addEventListener("focus", m, !0))
                : (window.attachEvent("onBlur", p),
                  document.attachEvent("onFocus", m));
    }
    function O() {
        (u = null),
            window.addEventListener
                ? (window.removeEventListener("blur", p),
                  document.removeEventListener("focus", m))
                : (window.detachEvent("onBlur", p),
                  document.detachEvent("onFocus", m));
    }
    return ke;
}
var Ur = { exports: {} },
    cy;
function ow() {
    return (
        cy ||
            ((cy = 1),
            (function (n, a) {
                Object.defineProperty(a, "__esModule", { value: !0 }),
                    (a.default = d);
                var l = U1(),
                    r = u(l);
                function u(h) {
                    return h && h.__esModule ? h : { default: h };
                }
                function f() {
                    var h =
                        arguments.length > 0 && arguments[0] !== void 0
                            ? arguments[0]
                            : document;
                    return h.activeElement.shadowRoot
                        ? f(h.activeElement.shadowRoot)
                        : h.activeElement;
                }
                function d(h, p) {
                    var m = (0, r.default)(h);
                    if (!m.length) {
                        p.preventDefault();
                        return;
                    }
                    var y = void 0,
                        v = p.shiftKey,
                        b = m[0],
                        T = m[m.length - 1],
                        O = f();
                    if (h === O) {
                        if (!v) return;
                        y = T;
                    }
                    if (
                        (T === O && !v && (y = b), b === O && v && (y = T), y)
                    ) {
                        p.preventDefault(), y.focus();
                        return;
                    }
                    var R = /(\bChrome\b|\bSafari\b)\//.exec(
                            navigator.userAgent
                        ),
                        V =
                            R != null &&
                            R[1] != "Chrome" &&
                            /\biPod\b|\biPad\b/g.exec(navigator.userAgent) ==
                                null;
                    if (V) {
                        var N = m.indexOf(O);
                        if (
                            (N > -1 && (N += v ? -1 : 1),
                            (y = m[N]),
                            typeof y > "u")
                        ) {
                            p.preventDefault(), (y = v ? T : b), y.focus();
                            return;
                        }
                        p.preventDefault(), y.focus();
                    }
                }
                n.exports = a.default;
            })(Ur, Ur.exports)),
        Ur.exports
    );
}
var Je = {},
    of,
    fy;
function uw() {
    if (fy) return of;
    fy = 1;
    var n = function () {};
    return (of = n), of;
}
var un = {},
    uf = { exports: {} };
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/ var dy;
function cw() {
    return (
        dy ||
            ((dy = 1),
            (function (n) {
                (function () {
                    var a = !!(
                            typeof window < "u" &&
                            window.document &&
                            window.document.createElement
                        ),
                        l = {
                            canUseDOM: a,
                            canUseWorkers: typeof Worker < "u",
                            canUseEventListeners:
                                a &&
                                !!(
                                    window.addEventListener ||
                                    window.attachEvent
                                ),
                            canUseViewport: a && !!window.screen,
                        };
                    n.exports
                        ? (n.exports = l)
                        : (window.ExecutionEnvironment = l);
                })();
            })(uf)),
        uf.exports
    );
}
var hy;
function _d() {
    if (hy) return un;
    (hy = 1),
        Object.defineProperty(un, "__esModule", { value: !0 }),
        (un.canUseDOM = un.SafeNodeList = un.SafeHTMLCollection = void 0);
    var n = cw(),
        a = l(n);
    function l(f) {
        return f && f.__esModule ? f : { default: f };
    }
    var r = a.default,
        u = r.canUseDOM ? window.HTMLElement : {};
    return (
        (un.SafeHTMLCollection = r.canUseDOM ? window.HTMLCollection : {}),
        (un.SafeNodeList = r.canUseDOM ? window.NodeList : {}),
        (un.canUseDOM = r.canUseDOM),
        (un.default = u),
        un
    );
}
var py;
function H1() {
    if (py) return Je;
    (py = 1),
        Object.defineProperty(Je, "__esModule", { value: !0 }),
        (Je.resetState = f),
        (Je.log = d),
        (Je.assertNodeList = h),
        (Je.setElement = p),
        (Je.validateElement = m),
        (Je.hide = y),
        (Je.show = v),
        (Je.documentNotReadyOrSSRTesting = b);
    var n = uw(),
        a = r(n),
        l = _d();
    function r(T) {
        return T && T.__esModule ? T : { default: T };
    }
    var u = null;
    function f() {
        u &&
            (u.removeAttribute
                ? u.removeAttribute("aria-hidden")
                : u.length != null
                  ? u.forEach(function (T) {
                        return T.removeAttribute("aria-hidden");
                    })
                  : document.querySelectorAll(u).forEach(function (T) {
                        return T.removeAttribute("aria-hidden");
                    })),
            (u = null);
    }
    function d() {}
    function h(T, O) {
        if (!T || !T.length)
            throw new Error(
                "react-modal: No elements were found for selector " + O + "."
            );
    }
    function p(T) {
        var O = T;
        if (typeof O == "string" && l.canUseDOM) {
            var R = document.querySelectorAll(O);
            h(R, O), (O = R);
        }
        return (u = O || u), u;
    }
    function m(T) {
        var O = T || u;
        return O
            ? Array.isArray(O) ||
              O instanceof HTMLCollection ||
              O instanceof NodeList
                ? O
                : [O]
            : ((0, a.default)(
                  !1,
                  [
                      "react-modal: App element is not defined.",
                      "Please use `Modal.setAppElement(el)` or set `appElement={el}`.",
                      "This is needed so screen readers don't see main content",
                      "when modal is opened. It is not recommended, but you can opt-out",
                      "by setting `ariaHideApp={false}`.",
                  ].join(" ")
              ),
              []);
    }
    function y(T) {
        var O = !0,
            R = !1,
            V = void 0;
        try {
            for (
                var N = m(T)[Symbol.iterator](), k;
                !(O = (k = N.next()).done);
                O = !0
            ) {
                var G = k.value;
                G.setAttribute("aria-hidden", "true");
            }
        } catch (J) {
            (R = !0), (V = J);
        } finally {
            try {
                !O && N.return && N.return();
            } finally {
                if (R) throw V;
            }
        }
    }
    function v(T) {
        var O = !0,
            R = !1,
            V = void 0;
        try {
            for (
                var N = m(T)[Symbol.iterator](), k;
                !(O = (k = N.next()).done);
                O = !0
            ) {
                var G = k.value;
                G.removeAttribute("aria-hidden");
            }
        } catch (J) {
            (R = !0), (V = J);
        } finally {
            try {
                !O && N.return && N.return();
            } finally {
                if (R) throw V;
            }
        }
    }
    function b() {
        u = null;
    }
    return Je;
}
var Bi = {},
    my;
function fw() {
    if (my) return Bi;
    (my = 1),
        Object.defineProperty(Bi, "__esModule", { value: !0 }),
        (Bi.resetState = r),
        (Bi.log = u);
    var n = {},
        a = {};
    function l(m, y) {
        m.classList.remove(y);
    }
    function r() {
        var m = document.getElementsByTagName("html")[0];
        for (var y in n) l(m, n[y]);
        var v = document.body;
        for (var b in a) l(v, a[b]);
        (n = {}), (a = {});
    }
    function u() {}
    var f = function (y, v) {
            return y[v] || (y[v] = 0), (y[v] += 1), v;
        },
        d = function (y, v) {
            return y[v] && (y[v] -= 1), v;
        },
        h = function (y, v, b) {
            b.forEach(function (T) {
                f(v, T), y.add(T);
            });
        },
        p = function (y, v, b) {
            b.forEach(function (T) {
                d(v, T), v[T] === 0 && y.remove(T);
            });
        };
    return (
        (Bi.add = function (y, v) {
            return h(
                y.classList,
                y.nodeName.toLowerCase() == "html" ? n : a,
                v.split(" ")
            );
        }),
        (Bi.remove = function (y, v) {
            return p(
                y.classList,
                y.nodeName.toLowerCase() == "html" ? n : a,
                v.split(" ")
            );
        }),
        Bi
    );
}
var _a = {},
    gy;
function q1() {
    if (gy) return _a;
    (gy = 1),
        Object.defineProperty(_a, "__esModule", { value: !0 }),
        (_a.log = r),
        (_a.resetState = u);
    function n(f, d) {
        if (!(f instanceof d))
            throw new TypeError("Cannot call a class as a function");
    }
    var a = function f() {
            var d = this;
            n(this, f),
                (this.register = function (h) {
                    d.openInstances.indexOf(h) === -1 &&
                        (d.openInstances.push(h), d.emit("register"));
                }),
                (this.deregister = function (h) {
                    var p = d.openInstances.indexOf(h);
                    p !== -1 &&
                        (d.openInstances.splice(p, 1), d.emit("deregister"));
                }),
                (this.subscribe = function (h) {
                    d.subscribers.push(h);
                }),
                (this.emit = function (h) {
                    d.subscribers.forEach(function (p) {
                        return p(h, d.openInstances.slice());
                    });
                }),
                (this.openInstances = []),
                (this.subscribers = []);
        },
        l = new a();
    function r() {
        console.log("portalOpenInstances ----------"),
            console.log(l.openInstances.length),
            l.openInstances.forEach(function (f) {
                return console.log(f);
            }),
            console.log("end portalOpenInstances ----------");
    }
    function u() {
        l = new a();
    }
    return (_a.default = l), _a;
}
var Ps = {},
    yy;
function dw() {
    if (yy) return Ps;
    (yy = 1),
        Object.defineProperty(Ps, "__esModule", { value: !0 }),
        (Ps.resetState = d),
        (Ps.log = h);
    var n = q1(),
        a = l(n);
    function l(y) {
        return y && y.__esModule ? y : { default: y };
    }
    var r = void 0,
        u = void 0,
        f = [];
    function d() {
        for (var y = [r, u], v = 0; v < y.length; v++) {
            var b = y[v];
            b && b.parentNode && b.parentNode.removeChild(b);
        }
        (r = u = null), (f = []);
    }
    function h() {
        console.log("bodyTrap ----------"), console.log(f.length);
        for (var y = [r, u], v = 0; v < y.length; v++) {
            var b = y[v],
                T = b || {};
            console.log(T.nodeName, T.className, T.id);
        }
        console.log("edn bodyTrap ----------");
    }
    function p() {
        f.length !== 0 && f[f.length - 1].focusContent();
    }
    function m(y, v) {
        !r &&
            !u &&
            ((r = document.createElement("div")),
            r.setAttribute("data-react-modal-body-trap", ""),
            (r.style.position = "absolute"),
            (r.style.opacity = "0"),
            r.setAttribute("tabindex", "0"),
            r.addEventListener("focus", p),
            (u = r.cloneNode()),
            u.addEventListener("focus", p)),
            (f = v),
            f.length > 0
                ? (document.body.firstChild !== r &&
                      document.body.insertBefore(r, document.body.firstChild),
                  document.body.lastChild !== u && document.body.appendChild(u))
                : (r.parentElement && r.parentElement.removeChild(r),
                  u.parentElement && u.parentElement.removeChild(u));
    }
    return a.default.subscribe(m), Ps;
}
var vy;
function hw() {
    return (
        vy ||
            ((vy = 1),
            (function (n, a) {
                Object.defineProperty(a, "__esModule", { value: !0 });
                var l =
                        Object.assign ||
                        function (K) {
                            for (var P = 1; P < arguments.length; P++) {
                                var q = arguments[P];
                                for (var M in q)
                                    Object.prototype.hasOwnProperty.call(
                                        q,
                                        M
                                    ) && (K[M] = q[M]);
                            }
                            return K;
                        },
                    r =
                        typeof Symbol == "function" &&
                        typeof Symbol.iterator == "symbol"
                            ? function (K) {
                                  return typeof K;
                              }
                            : function (K) {
                                  return K &&
                                      typeof Symbol == "function" &&
                                      K.constructor === Symbol &&
                                      K !== Symbol.prototype
                                      ? "symbol"
                                      : typeof K;
                              },
                    u = (function () {
                        function K(P, q) {
                            for (var M = 0; M < q.length; M++) {
                                var U = q[M];
                                (U.enumerable = U.enumerable || !1),
                                    (U.configurable = !0),
                                    "value" in U && (U.writable = !0),
                                    Object.defineProperty(P, U.key, U);
                            }
                        }
                        return function (P, q, M) {
                            return q && K(P.prototype, q), M && K(P, M), P;
                        };
                    })(),
                    f = ul(),
                    d = V1(),
                    h = H(d),
                    p = rw(),
                    m = J(p),
                    y = ow(),
                    v = H(y),
                    b = H1(),
                    T = J(b),
                    O = fw(),
                    R = J(O),
                    V = _d(),
                    N = H(V),
                    k = q1(),
                    G = H(k);
                dw();
                function J(K) {
                    if (K && K.__esModule) return K;
                    var P = {};
                    if (K != null)
                        for (var q in K)
                            Object.prototype.hasOwnProperty.call(K, q) &&
                                (P[q] = K[q]);
                    return (P.default = K), P;
                }
                function H(K) {
                    return K && K.__esModule ? K : { default: K };
                }
                function Z(K, P) {
                    if (!(K instanceof P))
                        throw new TypeError(
                            "Cannot call a class as a function"
                        );
                }
                function $(K, P) {
                    if (!K)
                        throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                        );
                    return P && (typeof P == "object" || typeof P == "function")
                        ? P
                        : K;
                }
                function st(K, P) {
                    if (typeof P != "function" && P !== null)
                        throw new TypeError(
                            "Super expression must either be null or a function, not " +
                                typeof P
                        );
                    (K.prototype = Object.create(P && P.prototype, {
                        constructor: {
                            value: K,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0,
                        },
                    })),
                        P &&
                            (Object.setPrototypeOf
                                ? Object.setPrototypeOf(K, P)
                                : (K.__proto__ = P));
                }
                var F = {
                        overlay: "ReactModal__Overlay",
                        content: "ReactModal__Content",
                    },
                    lt = function (P) {
                        return P.code === "Tab" || P.keyCode === 9;
                    },
                    tt = function (P) {
                        return P.code === "Escape" || P.keyCode === 27;
                    },
                    nt = 0,
                    dt = (function (K) {
                        st(P, K);
                        function P(q) {
                            Z(this, P);
                            var M = $(
                                this,
                                (P.__proto__ || Object.getPrototypeOf(P)).call(
                                    this,
                                    q
                                )
                            );
                            return (
                                (M.setOverlayRef = function (U) {
                                    (M.overlay = U),
                                        M.props.overlayRef &&
                                            M.props.overlayRef(U);
                                }),
                                (M.setContentRef = function (U) {
                                    (M.content = U),
                                        M.props.contentRef &&
                                            M.props.contentRef(U);
                                }),
                                (M.afterClose = function () {
                                    var U = M.props,
                                        I = U.appElement,
                                        E = U.ariaHideApp,
                                        L = U.htmlOpenClassName,
                                        et = U.bodyOpenClassName,
                                        at = U.parentSelector,
                                        W =
                                            (at && at().ownerDocument) ||
                                            document;
                                    et && R.remove(W.body, et),
                                        L &&
                                            R.remove(
                                                W.getElementsByTagName(
                                                    "html"
                                                )[0],
                                                L
                                            ),
                                        E &&
                                            nt > 0 &&
                                            ((nt -= 1), nt === 0 && T.show(I)),
                                        M.props.shouldFocusAfterRender &&
                                            (M.props.shouldReturnFocusAfterClose
                                                ? (m.returnFocus(
                                                      M.props.preventScroll
                                                  ),
                                                  m.teardownScopedFocus())
                                                : m.popWithoutFocus()),
                                        M.props.onAfterClose &&
                                            M.props.onAfterClose(),
                                        G.default.deregister(M);
                                }),
                                (M.open = function () {
                                    M.beforeOpen(),
                                        M.state.afterOpen && M.state.beforeClose
                                            ? (clearTimeout(M.closeTimer),
                                              M.setState({ beforeClose: !1 }))
                                            : (M.props.shouldFocusAfterRender &&
                                                  (m.setupScopedFocus(M.node),
                                                  m.markForFocusLater()),
                                              M.setState(
                                                  { isOpen: !0 },
                                                  function () {
                                                      M.openAnimationFrame =
                                                          requestAnimationFrame(
                                                              function () {
                                                                  M.setState({
                                                                      afterOpen:
                                                                          !0,
                                                                  }),
                                                                      M.props
                                                                          .isOpen &&
                                                                          M
                                                                              .props
                                                                              .onAfterOpen &&
                                                                          M.props.onAfterOpen(
                                                                              {
                                                                                  overlayEl:
                                                                                      M.overlay,
                                                                                  contentEl:
                                                                                      M.content,
                                                                              }
                                                                          );
                                                              }
                                                          );
                                                  }
                                              ));
                                }),
                                (M.close = function () {
                                    M.props.closeTimeoutMS > 0
                                        ? M.closeWithTimeout()
                                        : M.closeWithoutTimeout();
                                }),
                                (M.focusContent = function () {
                                    return (
                                        M.content &&
                                        !M.contentHasFocus() &&
                                        M.content.focus({ preventScroll: !0 })
                                    );
                                }),
                                (M.closeWithTimeout = function () {
                                    var U = Date.now() + M.props.closeTimeoutMS;
                                    M.setState(
                                        { beforeClose: !0, closesAt: U },
                                        function () {
                                            M.closeTimer = setTimeout(
                                                M.closeWithoutTimeout,
                                                M.state.closesAt - Date.now()
                                            );
                                        }
                                    );
                                }),
                                (M.closeWithoutTimeout = function () {
                                    M.setState(
                                        {
                                            beforeClose: !1,
                                            isOpen: !1,
                                            afterOpen: !1,
                                            closesAt: null,
                                        },
                                        M.afterClose
                                    );
                                }),
                                (M.handleKeyDown = function (U) {
                                    lt(U) && (0, v.default)(M.content, U),
                                        M.props.shouldCloseOnEsc &&
                                            tt(U) &&
                                            (U.stopPropagation(),
                                            M.requestClose(U));
                                }),
                                (M.handleOverlayOnClick = function (U) {
                                    M.shouldClose === null &&
                                        (M.shouldClose = !0),
                                        M.shouldClose &&
                                            M.props.shouldCloseOnOverlayClick &&
                                            (M.ownerHandlesClose()
                                                ? M.requestClose(U)
                                                : M.focusContent()),
                                        (M.shouldClose = null);
                                }),
                                (M.handleContentOnMouseUp = function () {
                                    M.shouldClose = !1;
                                }),
                                (M.handleOverlayOnMouseDown = function (U) {
                                    !M.props.shouldCloseOnOverlayClick &&
                                        U.target == M.overlay &&
                                        U.preventDefault();
                                }),
                                (M.handleContentOnClick = function () {
                                    M.shouldClose = !1;
                                }),
                                (M.handleContentOnMouseDown = function () {
                                    M.shouldClose = !1;
                                }),
                                (M.requestClose = function (U) {
                                    return (
                                        M.ownerHandlesClose() &&
                                        M.props.onRequestClose(U)
                                    );
                                }),
                                (M.ownerHandlesClose = function () {
                                    return M.props.onRequestClose;
                                }),
                                (M.shouldBeClosed = function () {
                                    return (
                                        !M.state.isOpen && !M.state.beforeClose
                                    );
                                }),
                                (M.contentHasFocus = function () {
                                    return (
                                        document.activeElement === M.content ||
                                        M.content.contains(
                                            document.activeElement
                                        )
                                    );
                                }),
                                (M.buildClassName = function (U, I) {
                                    var E =
                                            (typeof I > "u"
                                                ? "undefined"
                                                : r(I)) === "object"
                                                ? I
                                                : {
                                                      base: F[U],
                                                      afterOpen:
                                                          F[U] + "--after-open",
                                                      beforeClose:
                                                          F[U] +
                                                          "--before-close",
                                                  },
                                        L = E.base;
                                    return (
                                        M.state.afterOpen &&
                                            (L = L + " " + E.afterOpen),
                                        M.state.beforeClose &&
                                            (L = L + " " + E.beforeClose),
                                        typeof I == "string" && I
                                            ? L + " " + I
                                            : L
                                    );
                                }),
                                (M.attributesFromObject = function (U, I) {
                                    return Object.keys(I).reduce(function (
                                        E,
                                        L
                                    ) {
                                        return (E[U + "-" + L] = I[L]), E;
                                    }, {});
                                }),
                                (M.state = { afterOpen: !1, beforeClose: !1 }),
                                (M.shouldClose = null),
                                (M.moveFromContentToOverlay = null),
                                M
                            );
                        }
                        return (
                            u(P, [
                                {
                                    key: "componentDidMount",
                                    value: function () {
                                        this.props.isOpen && this.open();
                                    },
                                },
                                {
                                    key: "componentDidUpdate",
                                    value: function (M, U) {
                                        this.props.isOpen && !M.isOpen
                                            ? this.open()
                                            : !this.props.isOpen &&
                                              M.isOpen &&
                                              this.close(),
                                            this.props.shouldFocusAfterRender &&
                                                this.state.isOpen &&
                                                !U.isOpen &&
                                                this.focusContent();
                                    },
                                },
                                {
                                    key: "componentWillUnmount",
                                    value: function () {
                                        this.state.isOpen && this.afterClose(),
                                            clearTimeout(this.closeTimer),
                                            cancelAnimationFrame(
                                                this.openAnimationFrame
                                            );
                                    },
                                },
                                {
                                    key: "beforeOpen",
                                    value: function () {
                                        var M = this.props,
                                            U = M.appElement,
                                            I = M.ariaHideApp,
                                            E = M.htmlOpenClassName,
                                            L = M.bodyOpenClassName,
                                            et = M.parentSelector,
                                            at =
                                                (et && et().ownerDocument) ||
                                                document;
                                        L && R.add(at.body, L),
                                            E &&
                                                R.add(
                                                    at.getElementsByTagName(
                                                        "html"
                                                    )[0],
                                                    E
                                                ),
                                            I && ((nt += 1), T.hide(U)),
                                            G.default.register(this);
                                    },
                                },
                                {
                                    key: "render",
                                    value: function () {
                                        var M = this.props,
                                            U = M.id,
                                            I = M.className,
                                            E = M.overlayClassName,
                                            L = M.defaultStyles,
                                            et = M.children,
                                            at = I ? {} : L.content,
                                            W = E ? {} : L.overlay;
                                        if (this.shouldBeClosed()) return null;
                                        var mt = {
                                                ref: this.setOverlayRef,
                                                className: this.buildClassName(
                                                    "overlay",
                                                    E
                                                ),
                                                style: l(
                                                    {},
                                                    W,
                                                    this.props.style.overlay
                                                ),
                                                onClick:
                                                    this.handleOverlayOnClick,
                                                onMouseDown:
                                                    this
                                                        .handleOverlayOnMouseDown,
                                            },
                                            ht = l(
                                                {
                                                    id: U,
                                                    ref: this.setContentRef,
                                                    style: l(
                                                        {},
                                                        at,
                                                        this.props.style.content
                                                    ),
                                                    className:
                                                        this.buildClassName(
                                                            "content",
                                                            I
                                                        ),
                                                    tabIndex: "-1",
                                                    onKeyDown:
                                                        this.handleKeyDown,
                                                    onMouseDown:
                                                        this
                                                            .handleContentOnMouseDown,
                                                    onMouseUp:
                                                        this
                                                            .handleContentOnMouseUp,
                                                    onClick:
                                                        this
                                                            .handleContentOnClick,
                                                    role: this.props.role,
                                                    "aria-label":
                                                        this.props.contentLabel,
                                                },
                                                this.attributesFromObject(
                                                    "aria",
                                                    l(
                                                        { modal: !0 },
                                                        this.props.aria
                                                    )
                                                ),
                                                this.attributesFromObject(
                                                    "data",
                                                    this.props.data || {}
                                                ),
                                                {
                                                    "data-testid":
                                                        this.props.testId,
                                                }
                                            ),
                                            Ht = this.props.contentElement(
                                                ht,
                                                et
                                            );
                                        return this.props.overlayElement(
                                            mt,
                                            Ht
                                        );
                                    },
                                },
                            ]),
                            P
                        );
                    })(f.Component);
                (dt.defaultProps = {
                    style: { overlay: {}, content: {} },
                    defaultStyles: {},
                }),
                    (dt.propTypes = {
                        isOpen: h.default.bool.isRequired,
                        defaultStyles: h.default.shape({
                            content: h.default.object,
                            overlay: h.default.object,
                        }),
                        style: h.default.shape({
                            content: h.default.object,
                            overlay: h.default.object,
                        }),
                        className: h.default.oneOfType([
                            h.default.string,
                            h.default.object,
                        ]),
                        overlayClassName: h.default.oneOfType([
                            h.default.string,
                            h.default.object,
                        ]),
                        parentSelector: h.default.func,
                        bodyOpenClassName: h.default.string,
                        htmlOpenClassName: h.default.string,
                        ariaHideApp: h.default.bool,
                        appElement: h.default.oneOfType([
                            h.default.instanceOf(N.default),
                            h.default.instanceOf(V.SafeHTMLCollection),
                            h.default.instanceOf(V.SafeNodeList),
                            h.default.arrayOf(h.default.instanceOf(N.default)),
                        ]),
                        onAfterOpen: h.default.func,
                        onAfterClose: h.default.func,
                        onRequestClose: h.default.func,
                        closeTimeoutMS: h.default.number,
                        shouldFocusAfterRender: h.default.bool,
                        shouldCloseOnOverlayClick: h.default.bool,
                        shouldReturnFocusAfterClose: h.default.bool,
                        preventScroll: h.default.bool,
                        role: h.default.string,
                        contentLabel: h.default.string,
                        aria: h.default.object,
                        data: h.default.object,
                        children: h.default.node,
                        shouldCloseOnEsc: h.default.bool,
                        overlayRef: h.default.func,
                        contentRef: h.default.func,
                        id: h.default.string,
                        overlayElement: h.default.func,
                        contentElement: h.default.func,
                        testId: h.default.string,
                    }),
                    (a.default = dt),
                    (n.exports = a.default);
            })(Br, Br.exports)),
        Br.exports
    );
}
function Y1() {
    var n = this.constructor.getDerivedStateFromProps(this.props, this.state);
    n != null && this.setState(n);
}
function G1(n) {
    function a(l) {
        var r = this.constructor.getDerivedStateFromProps(n, l);
        return r ?? null;
    }
    this.setState(a.bind(this));
}
function k1(n, a) {
    try {
        var l = this.props,
            r = this.state;
        (this.props = n),
            (this.state = a),
            (this.__reactInternalSnapshotFlag = !0),
            (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(l, r));
    } finally {
        (this.props = l), (this.state = r);
    }
}
Y1.__suppressDeprecationWarning = !0;
G1.__suppressDeprecationWarning = !0;
k1.__suppressDeprecationWarning = !0;
function pw(n) {
    var a = n.prototype;
    if (!a || !a.isReactComponent)
        throw new Error("Can only polyfill class components");
    if (
        typeof n.getDerivedStateFromProps != "function" &&
        typeof a.getSnapshotBeforeUpdate != "function"
    )
        return n;
    var l = null,
        r = null,
        u = null;
    if (
        (typeof a.componentWillMount == "function"
            ? (l = "componentWillMount")
            : typeof a.UNSAFE_componentWillMount == "function" &&
              (l = "UNSAFE_componentWillMount"),
        typeof a.componentWillReceiveProps == "function"
            ? (r = "componentWillReceiveProps")
            : typeof a.UNSAFE_componentWillReceiveProps == "function" &&
              (r = "UNSAFE_componentWillReceiveProps"),
        typeof a.componentWillUpdate == "function"
            ? (u = "componentWillUpdate")
            : typeof a.UNSAFE_componentWillUpdate == "function" &&
              (u = "UNSAFE_componentWillUpdate"),
        l !== null || r !== null || u !== null)
    ) {
        var f = n.displayName || n.name,
            d =
                typeof n.getDerivedStateFromProps == "function"
                    ? "getDerivedStateFromProps()"
                    : "getSnapshotBeforeUpdate()";
        throw Error(
            `Unsafe legacy lifecycles will not be called for components using new component APIs.

` +
                f +
                " uses " +
                d +
                " but also contains the following legacy lifecycles:" +
                (l !== null
                    ? `
  ` + l
                    : "") +
                (r !== null
                    ? `
  ` + r
                    : "") +
                (u !== null
                    ? `
  ` + u
                    : "") +
                `

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`
        );
    }
    if (
        (typeof n.getDerivedStateFromProps == "function" &&
            ((a.componentWillMount = Y1), (a.componentWillReceiveProps = G1)),
        typeof a.getSnapshotBeforeUpdate == "function")
    ) {
        if (typeof a.componentDidUpdate != "function")
            throw new Error(
                "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
            );
        a.componentWillUpdate = k1;
        var h = a.componentDidUpdate;
        a.componentDidUpdate = function (m, y, v) {
            var b = this.__reactInternalSnapshotFlag
                ? this.__reactInternalSnapshot
                : v;
            h.call(this, m, y, b);
        };
    }
    return n;
}
const mw = Object.freeze(
        Object.defineProperty(
            { __proto__: null, polyfill: pw },
            Symbol.toStringTag,
            { value: "Module" }
        )
    ),
    gw = gx(mw);
var Sy;
function yw() {
    if (Sy) return li;
    (Sy = 1),
        Object.defineProperty(li, "__esModule", { value: !0 }),
        (li.bodyOpenClassName = li.portalClassName = void 0);
    var n =
            Object.assign ||
            function (tt) {
                for (var nt = 1; nt < arguments.length; nt++) {
                    var dt = arguments[nt];
                    for (var K in dt)
                        Object.prototype.hasOwnProperty.call(dt, K) &&
                            (tt[K] = dt[K]);
                }
                return tt;
            },
        a = (function () {
            function tt(nt, dt) {
                for (var K = 0; K < dt.length; K++) {
                    var P = dt[K];
                    (P.enumerable = P.enumerable || !1),
                        (P.configurable = !0),
                        "value" in P && (P.writable = !0),
                        Object.defineProperty(nt, P.key, P);
                }
            }
            return function (nt, dt, K) {
                return dt && tt(nt.prototype, dt), K && tt(nt, K), nt;
            };
        })(),
        l = ul(),
        r = V(l),
        u = _y(),
        f = V(u),
        d = V1(),
        h = V(d),
        p = hw(),
        m = V(p),
        y = H1(),
        v = R(y),
        b = _d(),
        T = V(b),
        O = gw;
    function R(tt) {
        if (tt && tt.__esModule) return tt;
        var nt = {};
        if (tt != null)
            for (var dt in tt)
                Object.prototype.hasOwnProperty.call(tt, dt) &&
                    (nt[dt] = tt[dt]);
        return (nt.default = tt), nt;
    }
    function V(tt) {
        return tt && tt.__esModule ? tt : { default: tt };
    }
    function N(tt, nt) {
        if (!(tt instanceof nt))
            throw new TypeError("Cannot call a class as a function");
    }
    function k(tt, nt) {
        if (!tt)
            throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
            );
        return nt && (typeof nt == "object" || typeof nt == "function")
            ? nt
            : tt;
    }
    function G(tt, nt) {
        if (typeof nt != "function" && nt !== null)
            throw new TypeError(
                "Super expression must either be null or a function, not " +
                    typeof nt
            );
        (tt.prototype = Object.create(nt && nt.prototype, {
            constructor: {
                value: tt,
                enumerable: !1,
                writable: !0,
                configurable: !0,
            },
        })),
            nt &&
                (Object.setPrototypeOf
                    ? Object.setPrototypeOf(tt, nt)
                    : (tt.__proto__ = nt));
    }
    var J = (li.portalClassName = "ReactModalPortal"),
        H = (li.bodyOpenClassName = "ReactModal__Body--open"),
        Z = b.canUseDOM && f.default.createPortal !== void 0,
        $ = function (nt) {
            return document.createElement(nt);
        },
        st = function () {
            return Z
                ? f.default.createPortal
                : f.default.unstable_renderSubtreeIntoContainer;
        };
    function F(tt) {
        return tt();
    }
    var lt = (function (tt) {
        G(nt, tt);
        function nt() {
            var dt, K, P, q;
            N(this, nt);
            for (var M = arguments.length, U = Array(M), I = 0; I < M; I++)
                U[I] = arguments[I];
            return (
                (q =
                    ((K =
                        ((P = k(
                            this,
                            (dt =
                                nt.__proto__ ||
                                Object.getPrototypeOf(nt)).call.apply(
                                dt,
                                [this].concat(U)
                            )
                        )),
                        P)),
                    (P.removePortal = function () {
                        !Z && f.default.unmountComponentAtNode(P.node);
                        var E = F(P.props.parentSelector);
                        E && E.contains(P.node)
                            ? E.removeChild(P.node)
                            : console.warn(
                                  'React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.'
                              );
                    }),
                    (P.portalRef = function (E) {
                        P.portal = E;
                    }),
                    (P.renderPortal = function (E) {
                        var L = st(),
                            et = L(
                                P,
                                r.default.createElement(
                                    m.default,
                                    n({ defaultStyles: nt.defaultStyles }, E)
                                ),
                                P.node
                            );
                        P.portalRef(et);
                    }),
                    K)),
                k(P, q)
            );
        }
        return (
            a(
                nt,
                [
                    {
                        key: "componentDidMount",
                        value: function () {
                            if (b.canUseDOM) {
                                Z || (this.node = $("div")),
                                    (this.node.className =
                                        this.props.portalClassName);
                                var K = F(this.props.parentSelector);
                                K.appendChild(this.node),
                                    !Z && this.renderPortal(this.props);
                            }
                        },
                    },
                    {
                        key: "getSnapshotBeforeUpdate",
                        value: function (K) {
                            var P = F(K.parentSelector),
                                q = F(this.props.parentSelector);
                            return { prevParent: P, nextParent: q };
                        },
                    },
                    {
                        key: "componentDidUpdate",
                        value: function (K, P, q) {
                            if (b.canUseDOM) {
                                var M = this.props,
                                    U = M.isOpen,
                                    I = M.portalClassName;
                                K.portalClassName !== I &&
                                    (this.node.className = I);
                                var E = q.prevParent,
                                    L = q.nextParent;
                                L !== E &&
                                    (E.removeChild(this.node),
                                    L.appendChild(this.node)),
                                    !(!K.isOpen && !U) &&
                                        !Z &&
                                        this.renderPortal(this.props);
                            }
                        },
                    },
                    {
                        key: "componentWillUnmount",
                        value: function () {
                            if (!(!b.canUseDOM || !this.node || !this.portal)) {
                                var K = this.portal.state,
                                    P = Date.now(),
                                    q =
                                        K.isOpen &&
                                        this.props.closeTimeoutMS &&
                                        (K.closesAt ||
                                            P + this.props.closeTimeoutMS);
                                q
                                    ? (K.beforeClose ||
                                          this.portal.closeWithTimeout(),
                                      setTimeout(this.removePortal, q - P))
                                    : this.removePortal();
                            }
                        },
                    },
                    {
                        key: "render",
                        value: function () {
                            if (!b.canUseDOM || !Z) return null;
                            !this.node && Z && (this.node = $("div"));
                            var K = st();
                            return K(
                                r.default.createElement(
                                    m.default,
                                    n(
                                        {
                                            ref: this.portalRef,
                                            defaultStyles: nt.defaultStyles,
                                        },
                                        this.props
                                    )
                                ),
                                this.node
                            );
                        },
                    },
                ],
                [
                    {
                        key: "setAppElement",
                        value: function (K) {
                            v.setElement(K);
                        },
                    },
                ]
            ),
            nt
        );
    })(l.Component);
    return (
        (lt.propTypes = {
            isOpen: h.default.bool.isRequired,
            style: h.default.shape({
                content: h.default.object,
                overlay: h.default.object,
            }),
            portalClassName: h.default.string,
            bodyOpenClassName: h.default.string,
            htmlOpenClassName: h.default.string,
            className: h.default.oneOfType([
                h.default.string,
                h.default.shape({
                    base: h.default.string.isRequired,
                    afterOpen: h.default.string.isRequired,
                    beforeClose: h.default.string.isRequired,
                }),
            ]),
            overlayClassName: h.default.oneOfType([
                h.default.string,
                h.default.shape({
                    base: h.default.string.isRequired,
                    afterOpen: h.default.string.isRequired,
                    beforeClose: h.default.string.isRequired,
                }),
            ]),
            appElement: h.default.oneOfType([
                h.default.instanceOf(T.default),
                h.default.instanceOf(b.SafeHTMLCollection),
                h.default.instanceOf(b.SafeNodeList),
                h.default.arrayOf(h.default.instanceOf(T.default)),
            ]),
            onAfterOpen: h.default.func,
            onRequestClose: h.default.func,
            closeTimeoutMS: h.default.number,
            ariaHideApp: h.default.bool,
            shouldFocusAfterRender: h.default.bool,
            shouldCloseOnOverlayClick: h.default.bool,
            shouldReturnFocusAfterClose: h.default.bool,
            preventScroll: h.default.bool,
            parentSelector: h.default.func,
            aria: h.default.object,
            data: h.default.object,
            role: h.default.string,
            contentLabel: h.default.string,
            shouldCloseOnEsc: h.default.bool,
            overlayRef: h.default.func,
            contentRef: h.default.func,
            id: h.default.string,
            overlayElement: h.default.func,
            contentElement: h.default.func,
        }),
        (lt.defaultProps = {
            isOpen: !1,
            portalClassName: J,
            bodyOpenClassName: H,
            role: "dialog",
            ariaHideApp: !0,
            closeTimeoutMS: 0,
            shouldFocusAfterRender: !0,
            shouldCloseOnEsc: !0,
            shouldCloseOnOverlayClick: !0,
            shouldReturnFocusAfterClose: !0,
            preventScroll: !1,
            parentSelector: function () {
                return document.body;
            },
            overlayElement: function (nt, dt) {
                return r.default.createElement("div", nt, dt);
            },
            contentElement: function (nt, dt) {
                return r.default.createElement("div", nt, dt);
            },
        }),
        (lt.defaultStyles = {
            overlay: {
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(255, 255, 255, 0.75)",
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
                padding: "20px",
            },
        }),
        (0, O.polyfill)(lt),
        (li.default = lt),
        li
    );
}
var by;
function vw() {
    return (
        by ||
            ((by = 1),
            (function (n, a) {
                Object.defineProperty(a, "__esModule", { value: !0 });
                var l = yw(),
                    r = u(l);
                function u(f) {
                    return f && f.__esModule ? f : { default: f };
                }
                (a.default = r.default), (n.exports = a.default);
            })(Lr, Lr.exports)),
        Lr.exports
    );
}
var Sw = vw();
const bw = wy(Sw);
var X1 = {
        color: void 0,
        size: void 0,
        className: void 0,
        style: void 0,
        attr: void 0,
    },
    xy = Ke.createContext && Ke.createContext(X1),
    xw = ["attr", "size", "title"];
function Tw(n, a) {
    if (n == null) return {};
    var l = Ew(n, a),
        r,
        u;
    if (Object.getOwnPropertySymbols) {
        var f = Object.getOwnPropertySymbols(n);
        for (u = 0; u < f.length; u++)
            (r = f[u]),
                !(a.indexOf(r) >= 0) &&
                    Object.prototype.propertyIsEnumerable.call(n, r) &&
                    (l[r] = n[r]);
    }
    return l;
}
function Ew(n, a) {
    if (n == null) return {};
    var l = {};
    for (var r in n)
        if (Object.prototype.hasOwnProperty.call(n, r)) {
            if (a.indexOf(r) >= 0) continue;
            l[r] = n[r];
        }
    return l;
}
function fo() {
    return (
        (fo = Object.assign
            ? Object.assign.bind()
            : function (n) {
                  for (var a = 1; a < arguments.length; a++) {
                      var l = arguments[a];
                      for (var r in l)
                          Object.prototype.hasOwnProperty.call(l, r) &&
                              (n[r] = l[r]);
                  }
                  return n;
              }),
        fo.apply(this, arguments)
    );
}
function Ty(n, a) {
    var l = Object.keys(n);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(n);
        a &&
            (r = r.filter(function (u) {
                return Object.getOwnPropertyDescriptor(n, u).enumerable;
            })),
            l.push.apply(l, r);
    }
    return l;
}
function ho(n) {
    for (var a = 1; a < arguments.length; a++) {
        var l = arguments[a] != null ? arguments[a] : {};
        a % 2
            ? Ty(Object(l), !0).forEach(function (r) {
                  Aw(n, r, l[r]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
              : Ty(Object(l)).forEach(function (r) {
                    Object.defineProperty(
                        n,
                        r,
                        Object.getOwnPropertyDescriptor(l, r)
                    );
                });
    }
    return n;
}
function Aw(n, a, l) {
    return (
        (a = Mw(a)),
        a in n
            ? Object.defineProperty(n, a, {
                  value: l,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (n[a] = l),
        n
    );
}
function Mw(n) {
    var a = Ow(n, "string");
    return typeof a == "symbol" ? a : a + "";
}
function Ow(n, a) {
    if (typeof n != "object" || !n) return n;
    var l = n[Symbol.toPrimitive];
    if (l !== void 0) {
        var r = l.call(n, a);
        if (typeof r != "object") return r;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (a === "string" ? String : Number)(n);
}
function K1(n) {
    return (
        n &&
        n.map((a, l) =>
            Ke.createElement(a.tag, ho({ key: l }, a.attr), K1(a.child))
        )
    );
}
function Dd(n) {
    return (a) =>
        Ke.createElement(ww, fo({ attr: ho({}, n.attr) }, a), K1(n.child));
}
function ww(n) {
    var a = (l) => {
        var { attr: r, size: u, title: f } = n,
            d = Tw(n, xw),
            h = u || l.size || "1em",
            p;
        return (
            l.className && (p = l.className),
            n.className && (p = (p ? p + " " : "") + n.className),
            Ke.createElement(
                "svg",
                fo(
                    {
                        stroke: "currentColor",
                        fill: "currentColor",
                        strokeWidth: "0",
                    },
                    l.attr,
                    r,
                    d,
                    {
                        className: p,
                        style: ho(
                            ho({ color: n.color || l.color }, l.style),
                            n.style
                        ),
                        height: h,
                        width: h,
                        xmlns: "http://www.w3.org/2000/svg",
                    }
                ),
                f && Ke.createElement("title", null, f),
                n.children
            )
        );
    };
    return xy !== void 0
        ? Ke.createElement(xy.Consumer, null, (l) => a(l))
        : a(X1);
}
function _w(n) {
    return Dd({
        attr: { viewBox: "0 0 448 512" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z",
                },
                child: [],
            },
        ],
    })(n);
}
function Dw(n) {
    return Dd({
        attr: { viewBox: "0 0 448 512" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z",
                },
                child: [],
            },
        ],
    })(n);
}
function Rw(n) {
    return Dd({
        attr: { viewBox: "0 0 352 512" },
        child: [
            {
                tag: "path",
                attr: {
                    d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z",
                },
                child: [],
            },
        ],
    })(n);
}
const Cw = "/weddingJS/assets/mainImage-min-Dqkla09b.jpg",
    zw = "/weddingJS/assets/02.03_BS_K2251-2-5s09Im2F.jpg",
    jw = "/weddingJS/assets/04_BS_K2356-2-oIWJIjc0.jpg",
    Nw = "/weddingJS/assets/05_BS_K2284-2-CGabS-Gn.jpg",
    Lw = "/weddingJS/assets/10.11_BS_K2511-2-CwnyrBhe.jpg",
    Bw = "/weddingJS/assets/12_BS_K2548-2-B7JZmbse.jpg",
    Vw = "/weddingJS/assets/13_BS_K2574-2-BcBL2wwO.jpg",
    Uw = "/weddingJS/assets/14_BS_K2741-2-Bw9aS9ap.jpg",
    Hw = "/weddingJS/assets/15_BS_K2762-2-CuSnDohZ.jpg",
    qw = "/weddingJS/assets/16_BS_K2892-D55L6Vrj.jpg",
    Yw = "/weddingJS/assets/17_BS_K2835-D7bC5fGN.jpg",
    Gw = "/weddingJS/assets/18_BS_K3136-Bdxo7VRc.jpg",
    kw = "/weddingJS/assets/19_BS_K3160-BtphgZ1p.jpg",
    Xw = "/weddingJS/assets/20_BS_K3282-2-DXEDkCUG.jpg",
    Kw = "/weddingJS/assets/20_BS_K3334-zuPFAaey.jpg",
    Pw = "/weddingJS/assets/21_BS_K3237-98LRZ3QF.jpg",
    Zw = "/weddingJS/assets/22.23_BS_K3554-BsFeQluJ.jpg",
    Qw = "/weddingJS/assets/24_BS_K1892-2-4WhNQz9u.jpg",
    Fw = "/weddingJS/assets/25_BS_K1920-DszyBZ1A.jpg",
    Ww = "/weddingJS/assets/26_BS_K1852-2-DyThLh5I.jpg",
    Jw = "/weddingJS/assets/27_BS_K2078-CSrrT2h8.jpg",
    $w = "/weddingJS/assets/28_BS_K2198-B8vXJU2g.jpg",
    Iw = "/weddingJS/assets/30_1_BS_K2460-2-CFmSQcHK.jpg",
    t_ = "/weddingJS/assets/32_1_BS_K2467-2-CgU-mmr8.jpg",
    e_ = "/weddingJS/assets/31_2_BS_K2476-2-DxcO_Srr.jpg",
    n_ = "/weddingJS/assets/33_2_BS_K2478_2-CPPGoI2u.jpg",
    i_ = "/weddingJS/assets/29.07_BS_K2448-2-BtuU6KWA.jpg",
    a_ = ot.div`
    position: relative;
    height: 100%;
    width: 100%;
    padding: 0 15px;
`,
    s_ = ot.div`
    column-count: 3;
    column-gap: 15px;
    width: 100%;
`,
    l_ = ot.div`
    break-inside: avoid;
    margin-bottom: 15px;
    position: relative;
`,
    r_ = ot.img`
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.03);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }
`,
    o_ = ot.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 100%;
    height: 100%;
    position: relative;
`,
    u_ = ot.div`
    position: relative;
    display: inline-block;
`,
    c_ = ot.img`
    max-width: 100%;
    max-height: 100vh;
    object-fit: contain;
    border-radius: 8px;
`,
    cf = ot.div`
    position: absolute;
    font-size: 2rem;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 9999;
    opacity: 0.7;
    transition:
        opacity 0.3s,
        background-color 0.3s;

    &:hover {
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.8);
    }

    ${(n) =>
        n.left &&
        `
        top: 50%;
        transform: translateY(-50%);
        left: 20px;
    `}

    ${(n) =>
        n.right &&
        `
        top: 50%;
        transform: translateY(-50%);
        right: 20px;
    `}
    
    ${(n) =>
        n.close &&
        `
        top: 20px;
        right: 20px;
    `}
`,
    f_ = () => {
        const [n, a] = Q.useState(!1),
            [l, r] = Q.useState(null),
            [u, f] = Q.useState(0),
            [d, h] = Q.useState(!1),
            p = [
                Cw,
                zw,
                jw,
                Nw,
                Lw,
                Bw,
                Vw,
                Uw,
                Hw,
                qw,
                Yw,
                Gw,
                kw,
                Xw,
                Kw,
                Pw,
                Zw,
                Qw,
                Fw,
                Ww,
                Jw,
                $w,
                Iw,
                t_,
                e_,
                n_,
                i_,
            ];
        Q.useEffect(() => {
            let O = 0;
            p.forEach((R) => {
                const V = new Image();
                (V.src = R),
                    (V.onload = () => {
                        O++, O === p.length && h(!0);
                    }),
                    (V.onerror = () => {
                        O++, O === p.length && h(!0);
                    });
            });
        }, []);
        const m = (O) => {
                f(O), r(p[O]), a(!0);
            },
            y = (O) => {
                O.stopPropagation();
                const R = (u - 1 + p.length) % p.length;
                f(R), r(p[R]);
            },
            v = (O) => {
                O.stopPropagation();
                const R = (u + 1) % p.length;
                f(R), r(p[R]);
            },
            b = () => {
                a(!1), r(null);
            },
            T = (O) => {
                O.stopPropagation();
            };
        return (
            Q.useEffect(() => {
                const O = (R) => {
                    n &&
                        (R.key === "ArrowLeft"
                            ? y(R)
                            : R.key === "ArrowRight"
                              ? v(R)
                              : R.key === "Escape" && b());
                };
                return (
                    window.addEventListener("keydown", O),
                    () => {
                        window.removeEventListener("keydown", O);
                    }
                );
            }, [n, u]),
            d
                ? _.jsxs(a_, {
                      children: [
                          _.jsx(s_, {
                              children: p.map((O, R) =>
                                  _.jsx(
                                      l_,
                                      {
                                          children: _.jsx(r_, {
                                              src: O,
                                              alt: `Gallery Image ${R + 1}`,
                                              onClick: () => m(R),
                                          }),
                                      },
                                      R
                                  )
                              ),
                          }),
                          _.jsx(bw, {
                              isOpen: n,
                              onRequestClose: b,
                              ariaHideApp: !1,
                              style: {
                                  overlay: {
                                      position: "fixed",
                                      top: 0,
                                      left: 0,
                                      right: 0,
                                      bottom: 0,
                                      backgroundColor: "rgba(0,0,0,0.9)",
                                      zIndex: 9999,
                                  },
                                  content: {
                                      display: "flex",
                                      flexDirection: "column",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      padding: "0",
                                      backgroundColor: "transparent",
                                      border: "none",
                                      width: "90%",
                                      height: "90%",
                                      maxWidth: "100%",
                                      maxHeight: "100%",
                                      margin: "0",
                                      top: "50%",
                                      left: "50%",
                                      transform: "translate(-50%, -50%)",
                                  },
                              },
                              children: _.jsxs(o_, {
                                  onClick: b,
                                  children: [
                                      _.jsx(cf, {
                                          close: !0,
                                          onClick: b,
                                          children: _.jsx(Rw, {}),
                                      }),
                                      _.jsx(cf, {
                                          left: !0,
                                          onClick: y,
                                          children: _.jsx(_w, {}),
                                      }),
                                      _.jsx(u_, {
                                          onClick: T,
                                          children: _.jsx(c_, {
                                              src: l || "",
                                              alt: "Modal Image",
                                          }),
                                      }),
                                      _.jsx(cf, {
                                          right: !0,
                                          onClick: v,
                                          children: _.jsx(Dw, {}),
                                      }),
                                  ],
                              }),
                          }),
                      ],
                  })
                : _.jsx("div", { children: "Loading gallery..." })
        );
    },
    d_ = "/weddingJS/assets/naver_map-DVBzi1V4.png",
    h_ = "/weddingJS/assets/kakao_map-CvoyUqkF.png",
    p_ = ot.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
`,
    m_ = ot.h3`
    font-size: 1rem;
    color: #333;
    margin-bottom: 3px;
    font-family: "Nanum Myeongjo", serif;
    word-spacing: -0.8rem;
    font-weight: 600;
`,
    Ey = ot.p`
    font-size: 14px;
    color: #333;
    font-family: "Nanum Myeongjo", serif;
    word-spacing: -0.8rem;
`,
    g_ = ot.div`
    display: flex;
    gap: 12px;
    margin-top: 12px;
    margin-bottom: 10px;
`,
    y_ = ot.a`
    padding: 6px 15px;
    background-color: #fff;
    color: #666;
    border-radius: 15px;
    text-decoration: none;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 15px;
    transition: background-color 0.3s;
    border: 1px solid #ddd;

    &:hover {
        background-color: #e55a5a;
    }
`,
    v_ = ot.a`
    padding: 6px 15px;
    background-color: #fff;
    color: #666;
    border-radius: 15px;
    text-decoration: none;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 15px;
    transition: background-color 0.3s;
    border: 1px solid #ddd;
    &:hover {
        background-color: #3a90c2;
    }
`,
    S_ = ot.img`
    width: 100%;
    border-radius: 8px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    border: 1px solid #ddd;
`,
    b_ = ot.div`
    display: flex;
    width: 100%;
    justify-content: center;
    border: 1px solid #ddd;
    border-right: none;
    border-top: none;
`,
    Ay = ot.a`
    width: 50%;
    padding: 5px 5px;
    background-color: #fff;
    color: #666;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    letter-spacing: -0.02em;
    transition: background-color 0.3s;
    border-right: 1px solid #ddd;
    &:hover {
        background-color: #5a7ea0;
    }
`,
    x_ = ({ address: n, subAddress: a, placeName: l, phoneNumber: r }) => {
        const u = `https://map.kakao.com/?q=${encodeURIComponent(l)}`,
            f = `https://map.naver.com/v5/search/${encodeURIComponent(l)}`,
            d = `https://map.kakao.com/link/to/${encodeURIComponent(
                l
            )},37.643649,126.790246`;
        return _.jsxs(p_, {
            children: [
                _.jsx(m_, { children: "천년컨벤션 웨딩홀 10층 그리다홀" }),
                _.jsx(Ey, { children: n }),
                _.jsx(Ey, { children: a }),
                _.jsxs(g_, {
                    children: [
                        _.jsxs(y_, {
                            href: `tel:${r}`,
                            children: [_.jsx(KO, { size: 15 }), " 전화"],
                        }),
                        _.jsxs(v_, {
                            href: u,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: [_.jsx(kO, { size: 15 }), "지도"],
                        }),
                    ],
                }),
                _.jsx(S_, {
                    src: "https://map2.daum.net/map/mapservice?FORMAT=PNG&SCALE=2.5&MX=452620&MY=1151722&S=0&IW=504&IH=310&LANG=0&COORDSTM=WCONGNAMUL&logo=kakao_logo",
                    alt: "Kakao Map",
                }),
                _.jsxs(b_, {
                    children: [
                        _.jsxs(Ay, {
                            href: f,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: [
                                _.jsx("img", {
                                    src: d_,
                                    alt: "Naver Map",
                                    width: 20,
                                    height: 20,
                                }),
                                " ",
                                "네이버 지도",
                            ],
                        }),
                        _.jsxs(Ay, {
                            href: d,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: [
                                _.jsx("img", {
                                    src: h_,
                                    alt: "Kakao Map",
                                    width: 20,
                                    height: 20,
                                }),
                                " ",
                                "카카오 네비",
                            ],
                        }),
                    ],
                }),
            ],
        });
    },
    T_ = [
        {
            section: "신랑측",
            accounts: [
                { name: "혼주 김철규", account: "하나 401-910362-45307" },
                { name: "신랑 김진원", account: "국민 469901-04-338246" },
            ],
            isGroom: !0,
        },
        {
            section: "신부측",
            accounts: [
                { name: "혼주 박기준", account: "농협 331036-52-078381" },
                { name: "신부 박소라", account: "국민 033201-04-170733" },
            ],
            isGroom: !1,
        },
    ],
    My = [
        { title: "Gallery", color: "#ffffff", childrenNode: _.jsx(f_, {}) },
        {
            title: "마음 전하실 곳",
            color: "#ffffff",
            childrenNode: _.jsx("div", {
                style: { display: "flex", flexDirection: "column", gap: "8px" },
                children: T_.map((n, a) => _.jsx(aw, { ...n }, a)),
            }),
        },
        {
            title: "Location",
            color: "#ffffff",
            childrenNode: _.jsx(x_, {
                address: "경기도 고양시 일산동구 중앙로 1080, 10층",
                subAddress: "(백석동 1288-2)",
                placeName: "천년컨벤션 웨딩홀",
                phoneNumber: "031-811-7000",
            }),
        },
    ],
    E_ = ({ musicSrc: n }) => {
        const a = Q.useRef(null),
            [l, r] = Q.useState(!0),
            u = () => {
                a.current &&
                    (l
                        ? (a.current.pause(), r(!1))
                        : (a.current.play().catch((f) => {
                              console.log("자동 재생이 차단되었습니다:", f);
                          }),
                          r(!0)));
            };
        return (
            Q.useEffect(() => {
                a.current &&
                    a.current.play().catch((f) => {
                        console.log("자동 재생이 차단되었습니다:", f);
                    });
            }, []),
            _.jsxs(_.Fragment, {
                children: [
                    _.jsx("audio", { ref: a, src: n, loop: !0, autoPlay: !0 }),
                    " ",
                    _.jsx(A_, {
                        onClick: u,
                        children: l
                            ? _.jsx(ZO, { size: 15, color: "#ddd" })
                            : _.jsx(FO, { size: 15, color: "#ddd" }),
                    }),
                ],
            })
        );
    },
    A_ = ot.button`
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 1000;
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: rgba(255, 255, 255, 0.4);
    border: 1px solid #ddd;
    border-radius: 30px;
    padding: 8px;
    cursor: pointer;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
        background-color: rgba(255, 255, 255, 0.9);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transform: translateY(-2px);
    }

    @media (max-width: 768px) {
        top: 10px;
        right: 10px;
        padding: 8px;
    }
`,
    M_ = ({ invitationTexts: n }) => {
        const a = Q.useRef(null),
            [l, r] = Q.useState(!1),
            { scrollYProgress: u } = Td({
                target: a,
                offset: ["start start", "end start"],
            });
        Q.useEffect(() => {
            const d = () => {
                if (a.current) {
                    const h = a.current.offsetHeight,
                        p = window.scrollY;
                    r(p > h);
                }
            };
            return (
                window.addEventListener("scroll", d),
                () => window.removeEventListener("scroll", d)
            );
        }, []),
            n.length;
        const f = 0.08;
        return _.jsx(O_, {
            ref: a,
            children: _.jsx(w_, {
                children: n.map((d, h) => {
                    const p = f * h,
                        m = p + f * 0.8,
                        y = lo(u, [p, m], [0, 1]),
                        v = lo(u, [p, m], [50, 0]);
                    return _.jsx(
                        __,
                        {
                            style: { opacity: y, y: v, zIndex: l ? -1 : 1 },
                            transition: { duration: 0.6, ease: "easeInOut" },
                            children: d,
                        },
                        h
                    );
                }),
            }),
        });
    },
    O_ = ot.section`
    height: 300vh; /* 300vh로 높이 설정 */
    background: linear-gradient(to bottom, #fff9dc, #f8fde0 70%);

    position: relative;
    overflow: hidden;
`;
ot.h2`
    font-family: "Nanum Myeongjo", serif;
    word-spacing: -0.8rem;
    font-size: 1.2rem;
    position: absolute;
    top: 200px;
    left: 50%;
    z-index: 99;
    transform: translateX(-50%);
    font-weight: bold;
`;
const w_ = ot.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    text-align: center;
    z-index: 1;
`,
    __ = ot(ci.p)`
    font-family: "Nanum Myeongjo", serif;
    word-spacing: -0.8rem;
    color: rgb(51, 51, 51);
    text-align: center;
    letter-spacing: 0em;
    line-height: 2.3em;
    word-break: keep-all;
    margin: 0;
    font-weight: bold;
    opacity: 0; /* 시작 시 투명하게 설정 */
    font-size: 1.5rem;
    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`,
    D_ = "/weddingJS/assets/mainBgm-DTm9O_Hm.mp3",
    R_ = "/weddingJS/assets/grasss-vWAclENI.png",
    C_ = () => {
        const [n, a] = Q.useState({
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            }),
            l = Q.useRef(null),
            [r, u] = Q.useState(0);
        return (
            Q.useEffect(() => {
                l.current && u(l.current.offsetWidth);
            }, [n]),
            Q.useEffect(() => {
                const f = new Date("2025-04-05T00:00:00"),
                    d = () => {
                        const p = new Date(),
                            m = f.getTime() - p.getTime();
                        if (m > 0) {
                            const y = Math.floor(m / 864e5),
                                v = Math.floor(
                                    (m % (1e3 * 60 * 60 * 24)) / (1e3 * 60 * 60)
                                ),
                                b = Math.floor(
                                    (m % (1e3 * 60 * 60)) / (1e3 * 60)
                                ),
                                T = Math.floor((m % (1e3 * 60)) / 1e3);
                            a({ days: y, hours: v, minutes: b, seconds: T });
                        } else a({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                    };
                d();
                const h = setInterval(d, 1e3);
                return () => clearInterval(h);
            }, []),
            _.jsx(z_, {
                children: _.jsxs(j_, {
                    children: [
                        _.jsx("img", {
                            style: { width: "25px", marginBottom: "20px" },
                            src: R_,
                        }),
                        _.jsxs("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "20px",
                            },
                            children: [
                                _.jsxs("div", {
                                    style: {
                                        justifyContent: "center",
                                        alignItems: "center",
                                        display: "flex",
                                        gap: "10px",
                                    },
                                    children: [
                                        _.jsxs("div", {
                                            style: { fontWeight: "bold" },
                                            children: [
                                                "김철규",
                                                _.jsx("br", {}),
                                                "김혜자",
                                            ],
                                        }),
                                        _.jsxs("div", {
                                            style: {
                                                justifyContent: "center",
                                                alignItems: "center",
                                                display: "flex",
                                                gap: "10px",
                                            },
                                            children: [
                                                _.jsx("span", {
                                                    children: "의",
                                                }),
                                                _.jsx("span", {
                                                    style: { width: `${r}px` },
                                                    children: "장남",
                                                }),
                                                _.jsx("span", {
                                                    style: {
                                                        fontWeight: "bold",
                                                    },
                                                    children: "진원",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                _.jsxs("div", {
                                    style: {
                                        justifyContent: "center",
                                        alignItems: "center",
                                        display: "flex",
                                        gap: "10px",
                                    },
                                    children: [
                                        _.jsxs("div", {
                                            style: { fontWeight: "bold" },
                                            children: [
                                                "박기준",
                                                _.jsx("br", {}),
                                                "이수민",
                                            ],
                                        }),
                                        _.jsxs("div", {
                                            style: {
                                                justifyContent: "center",
                                                alignItems: "center",
                                                display: "flex",
                                                gap: "10px",
                                            },
                                            children: [
                                                _.jsx("span", {
                                                    children: "의",
                                                }),
                                                _.jsx("span", {
                                                    ref: l,
                                                    children: "외동딸",
                                                }),
                                                _.jsx("span", {
                                                    style: {
                                                        fontWeight: "bold",
                                                    },
                                                    children: "소라",
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        _.jsx(N_, { children: "결혼식까지" }),
                        _.jsxs(L_, {
                            children: [
                                _.jsxs(Hr, {
                                    children: [
                                        _.jsx(qr, {
                                            initial: { rotateX: 90 },
                                            animate: { rotateX: 0 },
                                            transition: {
                                                duration: 0.5,
                                                ease: "easeOut",
                                            },
                                            children: _.jsx(Yr, {
                                                children: n.days,
                                            }),
                                        }),
                                        _.jsx(Gr, { children: "일" }),
                                    ],
                                }),
                                _.jsxs(Hr, {
                                    children: [
                                        _.jsx(qr, {
                                            initial: { rotateX: 90 },
                                            animate: { rotateX: 0 },
                                            transition: {
                                                duration: 0.5,
                                                ease: "easeOut",
                                            },
                                            children: _.jsx(Yr, {
                                                children: n.hours,
                                            }),
                                        }),
                                        _.jsx(Gr, { children: "시간" }),
                                    ],
                                }),
                                _.jsxs(Hr, {
                                    children: [
                                        _.jsx(qr, {
                                            initial: { rotateX: 90 },
                                            animate: { rotateX: 0 },
                                            transition: {
                                                duration: 0.5,
                                                ease: "easeOut",
                                            },
                                            children: _.jsx(Yr, {
                                                children: n.minutes,
                                            }),
                                        }),
                                        _.jsx(Gr, { children: "분" }),
                                    ],
                                }),
                                _.jsxs(Hr, {
                                    children: [
                                        _.jsx(qr, {
                                            initial: { rotateX: 90 },
                                            animate: { rotateX: 0 },
                                            transition: {
                                                duration: 0.5,
                                                ease: "easeOut",
                                            },
                                            children: _.jsx(Yr, {
                                                children: n.seconds,
                                            }),
                                        }),
                                        _.jsx(Gr, { children: "초" }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            })
        );
    },
    z_ = ot.div`
    height: 70dvh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: "Nanum Myeongjo", serif;
    word-spacing: -0.8rem;
    position: relative;
    z-index: 8;
    background-color: #f8fde0;
    color: #333;
`,
    j_ = ot.div`
    text-align: center;
    font-family: "Nanum Myeongjo", serif;
    word-spacing: -0.8rem;
    color: #333;
`,
    N_ = ot.p`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 12px;
    margin-top: 40px;
`,
    L_ = ot.div`
    display: flex;
    justify-content: center;
    gap: 6px;
`,
    Hr = ot.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
`,
    qr = ot(ci.div)`
    width: 60px;
    height: 60px;
    background: linear-gradient(to bottom, #ffffff, #f0f0f0);
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    font-weight: bold;
    position: relative;
    perspective: 1000px;
`,
    Yr = ot.span`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`,
    Gr = ot.span`
    font-size: 14px;
    color: #666;
`,
    B_ = () =>
        _.jsxs(V_, {
            children: [
                _.jsx(U_, { children: "오시는 길" }),
                _.jsxs(ff, {
                    children: [
                        _.jsx(df, { children: "지하철" }),
                        _.jsxs(hf, {
                            children: [
                                _.jsx($e, {
                                    children: "3호선 백석역 5번출구(150m)",
                                }),
                                _.jsxs($e, {
                                    children: [
                                        "LG전자 베스트샵 지나 정면건물",
                                        _.jsx("br", {}),
                                        "(남정골드프라자 10층)",
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
                _.jsxs(ff, {
                    children: [
                        _.jsx(df, { children: "버스" }),
                        _.jsxs(hf, {
                            children: [
                                _.jsx($e, {
                                    children:
                                        "일반 : 05,8, 66, 76, 88, 90, 95, 96, 150, 780",
                                }),
                                _.jsx($e, {
                                    children: "좌석 : 108, 770, 830, 871",
                                }),
                                _.jsx($e, {
                                    children:
                                        "직행 : 200, 3300, 8109, 8407, 9700",
                                }),
                                _.jsx($e, {
                                    children:
                                        "B : 700, R : 9707, 9711, G : 7727, M : 7412",
                                }),
                            ],
                        }),
                    ],
                }),
                _.jsxs(ff, {
                    children: [
                        _.jsx(df, { children: "자가용" }),
                        _.jsxs(hf, {
                            children: [
                                _.jsx($e, {
                                    children:
                                        "2시간 무료(이후 발생하는 요금은 개별 정산)",
                                }),
                                _.jsx($e, {
                                    children:
                                        "1. 네비게이션 - 천년컨벤션웨딩홀 또는 CN천년웨딩홀 일산점",
                                }),
                                _.jsxs($e, {
                                    children: [
                                        "2. 천년컨벤션 웨딩홀 상가 1층, 지하 1,2층",
                                        _.jsx("br", {}),
                                        " 주차장 만차 시 주차요원의 안내에 따라 이동",
                                    ],
                                }),
                                _.jsxs($e, {
                                    children: [
                                        "3. 외부 주차장(고양터미널 지하 4층)",
                                        _.jsx("br", {}),
                                        "이용 시 웨딩홀 셔틀버스 운영",
                                    ],
                                }),
                                _.jsx($e, {
                                    children: "가급적 대중교통 이용 권장",
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    V_ = ot.div`
    font-family: "Nanum Myeongjo", serif;
    word-spacing: -0.6rem;
    color: #666;
    padding: 0 20px;
`,
    U_ = ot.h2`
    font-size: 1.1rem;
    font-weight: bold;
`,
    ff = ot.div`
    padding-top: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid #ddd;

    &:last-child {
        border: none;
    }
`,
    df = ot.h3`
    font-size: 1rem;
    font-weight: bold;
`,
    hf = ot.ul`
    list-style-type: none;
    padding: 0;
    margin-top: 10px;
`,
    $e = ot.li`
    font-size: 0.8rem;
    line-height: 1.5;
    margin-top: 5px;
`,
    H_ = "/weddingJS/assets/yeloflower-CP_tuiLu.png",
    q_ = () => {
        Q.useEffect(() => {
            window.Kakao.isInitialized() ||
                window.Kakao.init("f5381c601d71499124c5920125f3f74d");
        }, []);
        const n = () => {
                navigator.clipboard.writeText(window.location.href),
                    alert("링크가 복사되었습니다!");
            },
            a = () => {
                window.Kakao
                    ? window.Kakao.Link.sendDefault({
                          objectType: "feed",
                          content: {
                              title: "진원❣️소라",
                              description: "모바일 청첩장",
                              imageUrl: L1,
                              link: {
                                  mobileWebUrl: window.location.href,
                                  webUrl: window.location.href,
                              },
                          },
                      })
                    : alert("카카오톡 SDK가 로드되지 않았습니다.");
            };
        return _.jsxs(Y_, {
            children: [
                _.jsx("img", { style: { width: "50px" }, src: H_ }),
                _.jsxs(G_, {
                    children: [
                        "여러분의 꽃도 ",
                        _.jsx("br", {}),
                        "활짝 피어나기를 바라며",
                    ],
                }),
                _.jsxs(k_, {
                    children: [
                        _.jsx(Oy, { onClick: n, children: "링크 복사하기" }),
                        _.jsx(Oy, {
                            onClick: a,
                            children: "카카오톡 공유하기",
                        }),
                    ],
                }),
            ],
        });
    },
    Y_ = ot.div`
    text-align: center;
    padding-top: 100px;
    width: 100%;
    font-family: "Nanum Myeongjo", serif;
    word-spacing: -0.8rem;
`,
    G_ = ot.h3`
    text-align: center;
    margin-bottom: 20px;
    font-weight: bold;
    color: #666;
`,
    k_ = ot.div`
    display: flex;
    justify-content: space-between;
    background: #666;
`,
    Oy = ot.button`
    flex: 1;
    padding: 12px;
    color: white;
    border: none;
    border-radius: 0px;
    font-size: 0.8rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
`,
    X_ = "/weddingJS/assets/pinkflowerResize-DzBKasdF.png",
    K_ = ({ onFinish: n }) =>
        _.jsxs(ci.div, {
            className: "opening-text",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            transition: { duration: 2, exit: { duration: 3 } },
            onAnimationComplete: n,
            style: {
                background:
                    "linear-gradient(to bottom, #ffffff, rgb(255, 238, 238))",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100dvw",
                height: "100dvh",
                textAlign: "center",
            },
            children: [
                _.jsx(ci.img, {
                    src: X_,
                    alt: "opening image",
                    initial: { opacity: 0, scale: 0.8 },
                    animate: { opacity: 1, scale: 1 },
                    transition: { duration: 1.2 },
                    style: { maxWidth: "60px", marginBottom: "20px" },
                }),
                _.jsx(ci.h1, {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 1.2, delay: 0.5 },
                    style: {
                        fontSize: "1rem",
                        fontWeight: "bold",
                        color: "#333",
                        fontFamily: "Nanum Myeongjo, serif",
                    },
                    children: "화사한 봄날, 진원 & 소라",
                }),
            ],
        }),
    P_ = [
        "화사한 봄날, 식목일에",
        "서로의 사랑을 뿌리내리며",
        "미래를 함께 키워가려 합니다.",
        "나무처럼 견고하고",
        "꽃처럼 아름다운 사랑을",
        "여러분의 축복 속에서",
        "깊고 넓게 키우겠습니다.",
    ],
    Z_ = () => {
        const [n, a] = Q.useState(!1);
        Q.useEffect(() => {
            setTimeout(() => {
                a(!0);
            }, 3e3);
        }, []);
        const l = Q.useRef(null),
            r = Q.useRef(null),
            u = Q.useRef(null),
            { scrollYProgress: f } = Td({
                target: u,
                offset: ["start end", "end start"],
            }),
            [d, h] = Q.useState(!1);
        Q.useEffect(() => {
            const m = new _M(),
                y = () => {
                    if (r.current) {
                        const b = r.current.getBoundingClientRect();
                        h(b.bottom <= 0);
                    }
                };
            window.addEventListener("scroll", y);
            const v = (b) => {
                m.raf(b), requestAnimationFrame(v);
            };
            return (
                requestAnimationFrame(v),
                () => {
                    window.removeEventListener("scroll", y);
                }
            );
        }, []);
        const p = r1(0);
        return (
            ZA(f, "change", (m) => {
                p.set(Math.min(1, Math.max(0, m)));
            }),
            _.jsxs("div", {
                className: "app-container",
                children: [
                    _.jsx(E_, { musicSrc: D_ }),
                    !n && _.jsx(K_, { onFinish: () => a(!0) }),
                    n &&
                        _.jsxs(_.Fragment, {
                            children: [
                                _.jsx("div", {
                                    ref: r,
                                    className: "intro-section",
                                    children: _.jsxs(ci.div, {
                                        initial: { opacity: 0, y: 0 },
                                        animate: { opacity: 1, y: 0 },
                                        transition: { duration: 1 },
                                        className: "intro-content ",
                                        children: [
                                            _.jsx("div", {
                                                className: "intro-content-top",
                                                children: _.jsxs("h1", {
                                                    className: "wedding-text",
                                                    children: [
                                                        _.jsx("span", {
                                                            children: "W",
                                                        }),
                                                        _.jsx("span", {
                                                            children: "e",
                                                        }),
                                                        _.jsx("span", {
                                                            children: "d",
                                                        }),
                                                        _.jsx("span", {
                                                            children: "d",
                                                        }),
                                                        _.jsx("span", {
                                                            children: "i",
                                                        }),
                                                        _.jsx("span", {
                                                            children: "n",
                                                        }),
                                                        _.jsx("span", {
                                                            children: "g",
                                                        }),
                                                        _.jsx("span", {
                                                            children: "D",
                                                        }),
                                                        _.jsx("span", {
                                                            children: "a",
                                                        }),
                                                        _.jsx("span", {
                                                            children: "y",
                                                        }),
                                                    ],
                                                }),
                                            }),
                                            _.jsx("div", {
                                                className:
                                                    "intro-content-middle",
                                                children: _.jsx("img", {
                                                    src: L1,
                                                    alt: "Wedding Image",
                                                }),
                                            }),
                                            _.jsx("div", {
                                                className:
                                                    "intro-content-bottom",
                                                children: _.jsxs("div", {
                                                    className:
                                                        "intro-content-main-text",
                                                    children: [
                                                        _.jsxs("h3", {
                                                            children: [
                                                                _.jsx("span", {
                                                                    children:
                                                                        "김진원 ",
                                                                }),
                                                                _.jsx("span", {
                                                                    style: {
                                                                        fontSize:
                                                                            "15px",
                                                                        color: "coral",
                                                                    },
                                                                    children:
                                                                        "♥︎",
                                                                }),
                                                                _.jsx("span", {
                                                                    children:
                                                                        "박소라",
                                                                }),
                                                            ],
                                                        }),
                                                        _.jsxs("span", {
                                                            children: [
                                                                "2025.04.05 토 PM 12:30",
                                                                _.jsx("br", {}),
                                                                "천년컨벤션 웨딩홀 10층 그리다홀",
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            }),
                                            _.jsx("div", {
                                                className: "scroll-indicator",
                                                children: _.jsx("div", {
                                                    className: "scroll-dots",
                                                    children: [...Array(6)].map(
                                                        (m, y) =>
                                                            _.jsx(
                                                                "span",
                                                                {
                                                                    className: `dot dot-${
                                                                        y + 1
                                                                    }`,
                                                                    children:
                                                                        "•",
                                                                },
                                                                y
                                                            )
                                                    ),
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                                _.jsx("div", {
                                    ref: u,
                                    style: { position: "relative", zIndex: 2 },
                                    children: _.jsx(M_, {
                                        invitationTexts: P_,
                                    }),
                                }),
                                _.jsx("div", {
                                    style: { position: "relative", zIndex: 3 },
                                    children: _.jsx(C_, {}),
                                }),
                                _.jsx("div", {
                                    style: { position: "relative", zIndex: 4 },
                                    children: _.jsx("main", {
                                        ref: l,
                                        className: "main-container",
                                        children: My.map((m, y) => {
                                            const b =
                                                1 - (My.length - y) * 0.03;
                                            return _.jsx(
                                                BO,
                                                {
                                                    i: y,
                                                    ...m,
                                                    progress: p,
                                                    range: [y * 0.25, 1],
                                                    targetScale: b,
                                                    isVisible: d,
                                                    id: `card-${y}`,
                                                },
                                                `p_${y}`
                                            );
                                        }),
                                    }),
                                }),
                                _.jsx("div", {
                                    style: {
                                        position: "relative",
                                        zIndex: 5,
                                        background:
                                            "linear-gradient(to bottom,  rgb(255, 238, 238),rgb(255, 238, 238))",
                                    },
                                    children: _.jsx(B_, {}),
                                }),
                                _.jsx("div", {
                                    style: {
                                        position: "relative",
                                        zIndex: 6,
                                        background:
                                            "linear-gradient(to bottom,  rgb(255, 238, 238),rgb(255, 238, 228))",
                                    },
                                    children: _.jsx(q_, {}),
                                }),
                            ],
                        }),
                ],
            })
        );
    };
Mx.createRoot(document.getElementById("root")).render(
    _.jsx(Q.StrictMode, { children: _.jsx(Z_, {}) })
);

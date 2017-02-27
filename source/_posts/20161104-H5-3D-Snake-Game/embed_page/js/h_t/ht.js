! function (D, d, b) {
  "use strict";
  var _ = "ht";
  if (!D[_]) {
    ! function () {
      for (var I = 0, i = ["ms", "moz", "webkit", "o"], l = 0; l < i.length && !D.requestAnimationFrame; ++l) D.requestAnimationFrame = D[i[l] + "RequestAnimationFrame"], D.cancelAnimationFrame = D[i[l] + "CancelAnimationFrame"] || D[i[l] + "CancelRequestAnimationFrame"];
      D.requestAnimationFrame || (D.requestAnimationFrame = function (O) {
        var B = (new Date).getTime(),
          l = Math.max(0, 16 - (B - I)),
          J = D.setTimeout(function () {
            O(B + l)
          }, l);
        return I = B + l, J
      }), D.cancelAnimationFrame || (D.cancelAnimationFrame = function (Q) {
        u(Q)
      })
    }();
    var n, L, e, g, J = D.document,
      V = null,
      T = D[_] = {},
      r = D[_ + "config"],
      H = T.Default = r && r.Default || {},
      t = T.Style = r && r.Style || {},
      B = T.Color = r && r.Color || {},
      W = T.IsGetter = r && r.IsGetter || {},
      l = Math,
      c = l.round,
      M = l.floor,
      F = l.ceil,
      C = l.sqrt,
      v = l.max,
      o = l.min,
      G = l.abs,
      X = l.cos,
      z = l.acos,
      A = l.sin,
      k = l.pow,
      p = l.asin,
      S = l.PI,
      i = 2 * S,
      O = S / 2,
      Z = l.tan,
      f = l.atan2,
      a = l.random,
      E = !0,
      Y = !1,
      P = D.parseInt || global.parseInt,
      s = "2488-05-16",
      y = function () {
        try {
          return D.navigator.platform.indexOf("Win") > -1
        } catch (N) {}
      }(),
      x = function (N) {
        return N * N
      },
      w = D.setTimeout,
      u = D.clearTimeout,
      j = D.location,
      K = D.navigator ? D.navigator.userAgent.toLowerCase() : "",
      N = function (l) {
        return l.test(K)
      },
      Q = N(/msie/) || N(/trident/),
      m = N(/msie 10/),
      $ = N(/firefox/),
      U = N(/mac/),
      h = H.isTouchable === b ? y ? !1 : J ? "ontouchend" in J : !1 : H.isTouchable,
      q = "default",
      R = "single",
      I = "multiple",
      fk = "front",
      Xr = "back",
      pg = "left",
      Hi = "right",
      Ud = "top",
      Hb = "bottom",
      km = "center",
      Nn = "eye",
      pi = "middle",
      Jl = "east",
      qr = "west",
      iq = "north",
      Xc = "none",
      op = "px",
      mn = "absolute",
      bq = "border",
      Ob = "triangle",
      Pg = "rect",
      Dq = "circle",
      em = "cylinder",
      Wd = "shape",
      pq = "items",
      Ae = "normal",
      rb = "remove",
      hq = "clear",
      ag = "width",
      Ji = "height",
      jf = "ingroup",
      Qj = "check",
      Of = "uncheck",
      Mc = "radio",
      $j = "radioOn",
      Aq = "radioOff",
      Yi = "points",
      ws = "values",
      kh = "series",
      pd = "body",
      Rg = "label",
      Lb = "label2",
      Ug = "note",
      Mq = "note2",
      rj = "icons",
      jm = "labelFont",
      Rh = "labelColor",
      fg = "labelSelectColor",
      Ij = "note.expanded",
      vm = "note2.expanded",
      rk = "edge.expanded",
      sl = "edge.points",
      gf = "edge.type",
      Yc = "rotation",
      Sq = "getRotation",
      tb = "setRotation",
      He = "hidden",
      gj = "visible",
      Qp = "tuv",
      Tn = "no",
      yc = "select",
      Tp = "currentSubGraph",
      Zo = "selectBackground",
      xi = "autoMakeVisible",
      Ii = "autoHideScrollBar",
      Qi = "scrollBarColor",
      bl = "scrollBarSize",
      qj = "indent",
      Gb = "rowHeight",
      oi = "columnLineColor",
      kk = "rowLineColor",
      es = "columnLineVisible",
      Uh = "rowLineVisible",
      pr = "visibleFunc",
      ug = "expandIcon",
      Hq = "collapseIcon",
      tj = "checkMode",
      Sg = "sortFunc",
      cn = "editable",
      Kp = "batchEditable",
      dn = "tristate",
      Oi = "asc",
      $n = "desc",
      Kh = "position",
      tf = "elevation",
      Fd = "children",
      vb = "translateX",
      vr = "translateY",
      pj = "dataModel",
      lg = "shape3d",
      cc = "shape3d.resolution",
      Lq = "shape3d.visible",
      Li = "shape3d.from.visible",
      wr = "shape3d.to.visible",
      Gf = "shape3d.top.visible",
      hr = "shape3d.bottom.visible",
      el = "repeat.uv.length",
      Df = "serializeValue",
      De = "deserializeValue",
      ho = "centerUniform",
      Lp = "rgba(255,255,255,0)",
      Hk = "style",
      ci = "attr",
      Jf = "field",
      El = "string",
      _c = "boolean",
      nc = "color",
      gq = "int",
      mr = "number",
      Dn = "ew-resize",
      Gk = "ns-resize",
      Hr = "pointer",
      cj = "auto",
      Dm = "mousedown",
      Ih = "mousemove",
      jp = "mouseup",
      Km = "mouseout",
      eo = "touchstart",
      mh = "touchmove",
      Zi = "touchend",
      Bc = "keydown",
      Or = "keyup",
      Ad = $ ? "DOMMouseScroll" : "mousewheel",
      Mp = h ? [eo, mh, Zi] : [Bc, Or, Dm, Ih, jp, Km, Ad, "contextmenu"],
      Yn = V,
      be = V,
      bo = V,
      Wh = jp.length,
      Cr = function () {
        bo && (u(bo.timeout), bo = V)
      },
      Fl = function () {
        bo && hh(bo.e, bo.info)
      };
    D.addEventListener && (h || (D.addEventListener(Km, function () {
      Cr()
    }, !1), D.addEventListener(Ad, function () {
      hm()
    }, !1)), D.addEventListener(Or, function (X) {
      91 === X.keyCode ? $f = {} : delete $f[X.keyCode]
    }, !0), D.addEventListener(Bc, function (a) {
      $f[a.keyCode] = !0
    }, !0));
    var Uc, tn, Fo, Ed = !1,
      Bp = V,
      Tm = V,
      dc = {},
      ed = {},
      Wf = {},
      Tc = {},
      le = {},
      $f = {},
      Eq = {},
      Xq = {},
      Ym = {},
      lm = [],
      wn = {},
      Xk = V,
      Al = V,
      Fr = function () {},
      Xp = function () {
        throw "Oops!"
      },
      Zr = [0, 0, 0],
      Xf = [0, 0, 0, 0],
      Bb = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      },
      on = V,
      Om = V,
      $k = V,
      dm = function (L) {
        Om && !L._72O && ($k || ($k = {}), $k[L._72O = xp()] = L), Uc != V ? gg() < .05 && g && !tn && (je = Cr) : je = np
      },
      ab = function (p, i, k, G) {
        Om || (Om = {});
        var A = Om[p];
        if (A) {
          if (A.url === i) return;
          A.image.onload = Fr, A.image.onerror = Fr
        }
        var Q = new Image;
        Om[p] = {
          image: Q,
          url: i
        }, Q.onload = function () {
          k && (Q.width = k), G && (Q.height = G), H.handleImageLoaded(p, Q), $h(p, Q)
        }, Q.onerror = function () {
          $h(p, H.handleUnfoundImage(p, i) || V)
        }, Q.src = i
      },
      $h = function (n, N) {
        if (ed[n] = N, delete Om[n], ym(Om) && (Om = V, $k)) {
          for (var f in $k) {
            var E = $k[f];
            E.invalidateAll && E.invalidateAll(), E.redraw && E.redraw(), E.iv(), delete E._72O
          }
          $k = V
        }
        if (N && $k)
          for (var f in $k) {
            var E = $k[f];
            E.invalidateAll && E.invalidateAll(), E.redraw && E.redraw(), E.iv()
          }
      },
      Vf = function () {
        return D.performance && D.performance.now ? D.performance.now() : Date.now()
      },
      ul = function (C, R) {
        R ? u(C) : D.cancelAnimationFrame(C)
      },
      vp = function (q, b, Y) {
        return {
          width: q,
          height: b,
          comps: qp(Y) ? Y : [Y]
        }
      },
      Ai = function (W, O) {
        return {
          type: Dq,
          rect: [W, O, 1.6, 1.6],
          borderWidth: 1,
          borderColor: Tq,
          gradient: vc,
          gradientColor: wo,
          background: Tq
        }
      },
      Ml = function (k, u) {
        return vp(16, 16, {
          type: Ob,
          rect: [4, 4, 10, 8],
          background: k,
          rotation: u ? 1.57 : 3.14
        })
      },
      Jn = function (h, B) {
        return vp(16, 16, {
          type: Ob,
          rect: [4, 4, 8, 7],
          background: h,
          rotation: B ? 3.14 : 0
        })
      },
      Yd = function ($) {
        var z = $._orientation;
        return "horizontal" === z || "h" === z
      },
      Ul = function (A) {
        T.z = L = A
      },
      rd = function (O) {
        var q = 2,
          h = 0;
        for (var W in O) W.length === q && P(W, 32) === Bl && (Xk = Al = O[W]), h++;
        return h
      },
      hd = function (r, M, u) {
        return u ? {
          x: r - u,
          y: M - u,
          width: 2 * u + 1,
          height: 2 * u + 1
        } : h ? {
          x: r - 5,
          y: M - 5,
          width: 11,
          height: 11
        } : {
          x: r - 1,
          y: M - 1,
          width: 3,
          height: 3
        }
      },
      ai = function (e) {
        return (/ble$/.test(e) || /ed$/.test(e) || W[e] ? "is" : "get") + e.charAt(0).toUpperCase() + e.slice(1)
      },
      Bi = function (p) {
        return "set" + p.charAt(0).toUpperCase() + p.slice(1)
      },
      hn = function (w) {
        return typeof w === El || w instanceof String
      },
      Fe = function (B) {
        return typeof B === mr
      },
      np = function (m) {
        return typeof m === _c
      },
      or = function (k) {
        return k && "object" == typeof k
      },
      Nm = function (t) {
        return "function" == typeof t
      },
      qp = function (m) {
        return m instanceof Array
      },
      md = function (M) {
        return M instanceof Vq
      },
      If = function (W) {
        return qp(W) ? new Vq(W) : W
      },
      Hl = function (N) {
        return N instanceof qn
      },
      fb = function (Q) {
        return Q instanceof xr
      },
      fl = function (v) {
        return v instanceof Dj
      },
      Me = function (N) {
        return N && "IFRAME" === N.tagName
      },
      Sb = function (M) {
        return M == V ? M : parseFloat(M.toFixed(2))
      },
      wh = function (p, l, f) {
        var y, J = l.length;
        if (f)
          for (var X = 0; f > X; X++)
            if (3 === J) p.push(l[0]), p.push(l[1]), p.push(l[2]);
            else
              for (y = 0; J > y; y++) p.push(l[y]);
        else if (3 === J) p.push(l[0]), p.push(l[1]), p.push(l[2]);
        else
          for (y = 0; J > y; y++) p.push(l[y])
      },
      sg = function (H) {
        return H ? or(H) ? H : {} : !1
      },
      eq = function ($, h, v) {
        var F, q = or($) ? $ : $.prototype;
        for (F in h) v && q[F] !== b || (q[F] = h[F]);
        return $
      },
      xc = function (c) {
        return String.fromCharCode(c)
      },
      Nq = function (p) {
        for (var v, G = 0, r = ""; G < p.length; G++) v = p[p.length - 1 - G], "%" === v ? v = "'" : "a" === v ? v = '"' : "]" === v && (v = "\\"), r += xc(v.charCodeAt(0) - 1);
        return r
      },
      gr = function (G, V, Q) {
        G.superClass.constructor.apply(V, Q)
      },
      ym = function (w) {
        for (var r in w) return !1;
        return !0
      },
      yr = function (f) {
        return f ? 0 === f.length : !0
      },
      io = function (r, I) {
        return r.x === I.x && r.y === I.y && r.width === I.width && r.height === I.height
      },
      kd = function (B, $, g) {
        return $ > B ? $ : B > g ? g : B
      },
      gg = function () {
        var Z = 1e4 * A(Wh++);
        return Z - M(Z)
      },
      ze = function (C, K, l) {
        return Bn(C.x, C.y, K.x, K.y, l.x, l.y, l.x + l.width, l.y, !0) || Bn(C.x, C.y, K.x, K.y, l.x + l.width, l.y, l.x + l.width, l.y + l.height, !0) || Bn(C.x, C.y, K.x, K.y, l.x + l.width, l.y + l.height, l.x, l.y + l.height, !0) || Bn(C.x, C.y, K.x, K.y, l.x, l.y + l.height, l.x, l.y, !0)
      },
      Bn = function (F, g, G, _, z, j, l, S, X) {
        var Q = (l - z) * (g - j) - (S - j) * (F - z),
          M = (S - j) * (G - F) - (l - z) * (_ - g);
        if (0 !== M) {
          var u = Q / M,
            Z = F + u * (G - F),
            D = g + u * (_ - g);
          return X && (Z + us < o(F, G) || Z - us > v(F, G) || Z + us < o(z, l) || Z - us > v(z, l) || D + us < o(g, _) || D - us > v(g, _) || D + us < o(j, S) || D - us > v(j, S)) ? V : [Z, D]
        }
        return V
      },
      Ac = function (F, f, O) {
        if (F && O)
          if (f) {
            if (f === Hk) return F.getStyle(O);
            if (f === ci) return F.getAttr(O);
            if (f === Jf) return F[O]
          } else if (O = ai(O), F[O]) return F[O]();
        return b
      },
      wk = function (V, q, O, A) {
        if (V && O)
          if (q) {
            if (q === Hk) V.s(O, A);
            else if (q === ci) V.a(O, A);
            else if (q === Jf) {
              var Y = V[O];
              V[O] = A, V.fp("f:" + O, Y, A)
            }
          } else O = Bi(O), V[O] && V[O](A)
      },
      Rf = function (T, n, s, l, q) {
        n && en(T, s, l, 1, q, n)
      },
      bi = function (W, C, T, I) {
        var b = 1 - W;
        return b * b * C + 2 * W * b * T + W * W * I
      },
      $r = function (q, A, D, h, o) {
        var z = 1 - q;
        return z * z * z * A + 3 * z * z * q * D + 3 * z * q * q * h + q * q * q * o
      },
      Io = function (E) {
        var q, Z, L, A, l = 0;
        return E.forEach(function (U) {
          if (q = U.length, q > 0)
            for (Z = U[0], A = 1; q > A; A++) L = U[A], l += Pq(Z, L), Z = L
        }), l
      },
      kp = function (Z, n, z) {
        var J = "__" + Z,
          X = function (b) {
            z["handle_" + Z](b)
          };
        z[J] || (z[J] = X, n.addEventListener(Z, X, !1))
      },
      Ee = function (O, t, S) {
        var d = "__" + O,
          w = S[d];
        w && (t.removeEventListener(O, w, !1), delete S[d])
      },
      Im = function (r, K) {
        var L = "_" + K;
        r[ai(K)] = function () {
          return this[L]
        }, r[Bi(K)] = function (P) {
          var S = this[L];
          this[L] = P, this.fp(K, S, P)
        }
      },
      En = function (I) {
        return d.create(I)
      },
      xl = function (F) {
        if (!F.element) {
          var p, a;
          (p = F.textField) ? a = Hh(sq.TextField, p): (p = F.textArea) ? a = Hh(sq.TextArea, p) : (p = F.button) ? a = Hh(sq.Button, p) : (p = F.comboBox) ? a = Hh(sq.ComboBox, p) : (p = F.checkBox) ? a = Hh(sq.CheckBox, p) : (p = F.radioButton) ? a = Hh(sq.RadioButton, p) : (p = F.slider) ? a = Hh(sq.Slider, p) : (p = F.colorPicker) ? a = Hh(sq.ColorPicker, p) : (p = F.image) && (a = Hh(sq.Image, p)), a && (F.element = a)
        }
      },
      df = function (p, o) {
        var R = Jd(p);
        return R._ht = o, R
      },
      Jd = function (z) {
        var b = J.createElement("div"),
          R = b.style;
        return b.tabIndex = -1, b.onkeydown = gk, R.msTouchAction = Xc, R.cursor = q, Iq(b, V, 0), h && R.setProperty("-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)", V), z && (R.overflow = He), b
      },
      ip = function (f) {
        var Y = J.createElement("canvas"),
          r = Y.style;
        return r.msTouchAction = Xc, r.pointerEvents = Xc, Iq(Y, V, 0), f && ni(f, Y), Y
      },
      Iq = function (K, G, e) {
        var s = K.style;
        s.border = G ? G + " solid 1px" : 0, s.outline = 0, s.padding = e ? "0 " + e + op : 0, zn(K)
      },
      zn = function (S) {
        var _ = S.style;
        _.position = mn, _.margin = 0, _.setProperty("box-sizing", "border-box", V), _.setProperty("-moz-box-sizing", "border-box", V)
      },
      We = function (r, k, $, f) {
        f || (f = Ah), k != V && (r.width = k * f, r.style.width = k + op), $ != V && (r.height = $ * f, r.style.height = $ + op)
      },
      ni = function (D, m, v) {
        D.appendChild(m), v && (m.style.position = mn)
      },
      Cq = function (Q, y) {
        y.split || (y += "");
        for (var A, r = y.split("\n"), u = 0, T = r.length, o = 0; T > o; o++) {
          var m = pl(Q.font, r[o]);
          m.width > u && (u = m.width), A || (A = m.height)
        }
        return Q.ss = r, {
          width: u,
          height: A * T
        }
      },
      qm = function (X, c, _, u, h, B) {
        var o = c.length;
        if (1 === o) ic(X, c[0], _, u, h);
        else
          for (var N = _.height / o, g = {
            x: _.x,
            y: _.y,
            width: _.width,
            height: N
          }, J = 0; J < c.length; J++) B ? Uq(X, c[J], u, h, g.x, g.y, g.width, g.height, B) : ic(X, c[J], g, u, h), g.y += N
      },
      ic = function (w, L, U, t, N) {
        w.font = t ? t : _l, w.fillStyle = N ? N : Cs, w.textAlign = km, w.textBaseline = pi;
        var e, g;
        U ? U.width === b ? (e = U.x, g = U.y) : (e = U.x + U.width / 2, g = U.y + U.height / 2) : (e = 0, g = 0), w.fillText(L, c(e), c(g))
      },
      kj = function (W) {
        W.getView && (W = W.getView());
        var x = W.offsetWidth || W.scrollWidth;
        return !x && W.style.width && (x = P(W.style.width)), x
      },
      sh = function (p) {
        p.getView && (p = p.getView());
        var I = p.offsetHeight || p.scrollHeight;
        return !I && p.style.height && (I = P(p.style.height)), I
      },
      ar = function () {
        var x = function (T) {
            gk(T), T.stopPropagation()
          },
          q = h ? [eo] : [Bc, Dm, Ad];
        return function (y) {
          var V = Jd(),
            K = V.style;
          return K.backgroundColor = H.disabledBackground, y && (K.backgroundImage = "url(" + y + ")", K.backgroundPosition = "50% 50%", K.backgroundRepeat = "no-repeat no-repeat"), q.forEach(function (d) {
            V.addEventListener(d, x)
          }), V
        }
      }(),
      Wl = function (J) {
        var b = J.getContext("2d");
        return b.save(), b.lineCap = Wn, b.lineJoin = Ll, b
      },
      je = function (D, z, S, u) {
        Md(D, z * Ah, S * Ah), u *= Ah, 1 !== u && D.scale(u, u)
      },
      Md = function (T, N, E) {
        T.translate(N, E)
      },
      Hf = function (b, q) {
        b.rotate(q)
      },
      ys = function (x) {
        if (J.activeElement !== x)
          if (h) x.focus();
          else {
            var V = am(),
              N = V.target;
            x.focus(), N.scrollLeft = V.left, N.scrollTop = V.top
          }
      },
      hl = function (Y) {
        return Y && Y.getView ? Y.getView() : Y
      },
      ke = function (N, i, V, F, l) {
        2 === arguments.length && (V = i.y, F = i.width, l = i.height, i = i.x);
        var L = hl(N),
          Z = L.style;
        (J.fullscreenElement || J.mozFullScreenElement || J.webkitFullscreenElement || J.msFullscreenElement) !== L && (i !== b && (Z.left = i + op), V !== b && (Z.top = V + op), F !== b && (Z.width = F + op), l !== b && (Z.height = l + op)), N.endEditing && !h && N.endEditing(), N.redraw && N.redraw(), N.invalidate && N.invalidate(), N.onLayouted && N.onLayouted(i, V, F, l), N._41O && N._41O("layout")
      },
      Dc = function (x) {
        var G = x.touches[0];
        return G ? G : x.changedTouches[0]
      },
      no = function (z) {
        H.popup && H.popup.close(), H.popup = z
      },
      qq = V,
      xq = function (d) {
        qq.handleWindowTouchMove(d)
      },
      Ip = function (E) {
        qq.handleWindowTouchEnd(E), D.removeEventListener(mh, xq, !1), D.removeEventListener(Zi, Ip, !1), qq = V
      },
      Kb = function (W) {
        qq.handleWindowMouseMove(W)
      },
      Xo = function (L) {
        qq.handleWindowMouseUp(L), D.removeEventListener(Ih, Kb, !1), D.removeEventListener(jp, Xo, !1), qq = V
      },
      Tk = function (S) {
        return 1 === tr(S)
      },
      Bj = function (P, S) {
        return S ? S.keyCode === P : $f[P]
      },
      Vk = function (O) {
        return $g(O) && Bj(65, O)
      },
      gb = function (c) {
        return Bj(46, c) || Bj(8, c)
      },
      nd = function (X) {
        return function (E) {
          return E ? E.keyCode === X : $f[X]
        }
      },
      Bl = 573,
      On = [65, 83, 68, 87, 37, 38, 39, 40, 32, 13, 27],
      _i = nd(On[0]),
      rp = nd(On[1]),
      Rn = nd(On[2]),
      tk = nd(On[3]),
      bj = nd(On[4]),
      hb = nd(On[5]),
      Lr = nd(On[6]),
      ig = nd(On[7]),
      tq = nd(On[8]),
      ad = nd(On[9]),
      _o = nd(On[10]),
      hs = {
        65: 1,
        83: 1,
        68: 1,
        87: 1,
        37: 1,
        38: 1,
        39: 1,
        40: 1
      },
      wm = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 5, 5, 5, 5, 5, 11, 13, 331],
      ln = V,
      dq = V,
      ui = function (I, U) {
        ln || (ln = ip()), We(ln, I, U, 1);
        var p = Wl(ln);
        return p.clearRect(0, 0, I, U), p
      },
      yn = function () {
        var q, x = {};
        return function (W) {
          var G, h = x[W];
          return h || (q || (q = ip(), We(q, 1, 1, 1)), G = q.getContext("2d"), G.clearRect(0, 0, 1, 1), en(G, 0, 0, 1, 1, W), h = G.getImageData(0, 0, 1, 1).data, h = x[W] = [h[0], h[1], h[2], h[3]]), h
        }
      }(),
      wj = function (M) {
        if (!hn(M)) return M;
        var d = yn(M);
        return d.CA || (d.CA = [d[0] / 255, d[1] / 255, d[2] / 255, d[3] / 255]), d.CA
      },
      cd = function (Z, v, y, a) {
        var W = ip();
        W.width = y, W.height = a;
        var c = W.getContext("2d");
        c.drawImage(Z, 0, 0, y, a);
        try {
          for (var _ = c.getImageData(0, 0, y, a), P = _.data, A = 0, D = P.length; D > A; A += 4) {
            var I = P[A + 0],
              J = P[A + 1],
              m = P[A + 2];
            P[A + 0] = v[0] * I, P[A + 1] = v[1] * J, P[A + 2] = v[2] * m
          }
          c.putImageData(_, 0, 0)
        } catch (l) {
          return Z
        }
        return W
      },
      Bf = function (l, F, t) {
        return F && (F = "miter" === t ? 8 * F + 20 : F + 1, l && fn(l, F)), F
      },
      Bh = function (F, m) {
        if (m) {
          var x = new Jb(m),
            V = F.width / 2,
            e = F.height / 2,
            N = ik([x.tf(-V, -e), x.tf(V, -e), x.tf(V, e), x.tf(-V, e)]);
          return N.x += F.x + V, N.y += F.y + e, N
        }
        return F
      },
      Cf = function (y, S, p, n, g, U, z, M) {
        n *= Math.PI / 180;
        var K = {
            x: Math.cos(n) * (y.x - z.x) / 2 + Math.sin(n) * (y.y - z.y) / 2,
            y: -Math.sin(n) * (y.x - z.x) / 2 + Math.cos(n) * (y.y - z.y) / 2
          },
          e = Math.pow(K.x, 2) / Math.pow(S, 2) + Math.pow(K.y, 2) / Math.pow(p, 2);
        e > 1 && (S *= Math.sqrt(e), p *= Math.sqrt(e));
        var a = (g == U ? -1 : 1) * Math.sqrt((Math.pow(S, 2) * Math.pow(p, 2) - Math.pow(S, 2) * Math.pow(K.y, 2) - Math.pow(p, 2) * Math.pow(K.x, 2)) / (Math.pow(S, 2) * Math.pow(K.y, 2) + Math.pow(p, 2) * Math.pow(K.x, 2)));
        isNaN(a) && (a = 0);
        var P = {
            x: a * S * K.y / p,
            y: a * -p * K.x / S
          },
          r = {
            x: (y.x + z.x) / 2 + Math.cos(n) * P.x - Math.sin(n) * P.y,
            y: (y.y + z.y) / 2 + Math.sin(n) * P.x + Math.cos(n) * P.y
          },
          d = function (i) {
            return Math.sqrt(Math.pow(i[0], 2) + Math.pow(i[1], 2))
          },
          D = function (_, b) {
            return (_[0] * b[0] + _[1] * b[1]) / (d(_) * d(b))
          },
          k = function (m, L) {
            return (m[0] * L[1] < m[1] * L[0] ? -1 : 1) * Math.acos(D(m, L))
          },
          o = k([1, 0], [(K.x - P.x) / S, (K.y - P.y) / p]),
          B = [(K.x - P.x) / S, (K.y - P.y) / p],
          $ = [(-K.x - P.x) / S, (-K.y - P.y) / p],
          N = k(B, $);
        D(B, $) <= -1 && (N = Math.PI), D(B, $) >= 1 && (N = 0);
        var D = S > p ? S : p,
          c = S > p ? 1 : S / p,
          f = S > p ? p / S : 1;
        if (null == M) {
          var R = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
          fn(R, D), R.x *= c, R.width *= c, R.y *= f, R.height *= f;
          var v = new Jb(n);
          return R = ik([v.tf(R.x, R.y), v.tf(R.x + R.width, R.y), v.tf(R.x + R.width, R.y + R.height), v.tf(R.x, R.y + R.height)]), R.x += r.x, R.y += r.y, [{
            x: R.x,
            y: R.y
          }, {
            x: R.x + R.width,
            y: R.y
          }, {
            x: R.x + R.width,
            y: R.y + R.height
          }, {
            x: R.x,
            y: R.y + R.height
          }]
        }
        M.translate(r.x, r.y), M.rotate(n), M.scale(c, f), M.arc(0, 0, D, o, o + N, 1 - U), M.scale(1 / c, 1 / f), M.rotate(-n), M.translate(-r.x, -r.y)
      },
      _f = function (s, p) {
        s && s.beginPath();
        for (var K, _, O, n = [], Z = function (h) {
          for (var J, b = /(\-{0,1}[\d\.]+)/gi, d = []; J = b.exec(h);) d.push(parseFloat(J[0]));
          return d
        }, I = /([MmLlHhVvCcSsQqTtAa]{1}[\d\.,\s\-Zz]*)/gi, u = {
          x: 0,
          y: 0
        }; K = I.exec(p);) {
          var h = K[0],
            k = h.substr(0, 1);
          if ("M" === k || "m" === k) {
            for (var d = Z(h), D = 0; D < d.length; D += 2) {
              var G = d[D],
                o = d[D + 1];
              "m" === k && (G += u.x, o += u.y), s && s.moveTo(G, o), n.push({
                x: G,
                y: o
              }), u.x = G, u.y = o
            }
            _ = O = null
          } else if ("H" === k || "h" === k) {
            for (var d = Z(h), D = 0; D < d.length; D += 1) {
              var G = d[D];
              "h" === k && (G += u.x), s && s.lineTo(G, u.y), n.push({
                x: G,
                y: u.y
              }), u.x = G
            }
            _ = O = null
          } else if ("C" === k || "c" === k) {
            for (var d = Z(h), D = 0; D < d.length; D += 6) {
              var W = d[D],
                j = d[D + 1],
                r = d[D + 2],
                L = d[D + 3],
                G = d[D + 4],
                o = d[D + 5];
              "c" === k && (W += u.x, j += u.y, r += u.x, L += u.y, G += u.x, o += u.y), s && s.bezierCurveTo(W, j, r, L, G, o), n.push({
                x: W,
                y: j
              }), n.push({
                x: r,
                y: L
              }), n.push({
                x: G,
                y: o
              }), u.x = G, u.y = o
            }
            _ = [W, j, r, L, G, o], O = null
          } else if ("S" === k || "s" === k) {
            for (var d = Z(h), D = 0; D < d.length; D += 4) {
              var W, j;
              _ ? (W = 2 * _[4] - _[2], j = 2 * _[5] - _[3]) : (W = u.x, j = u.y);
              var r = d[D],
                L = d[D + 1],
                G = d[D + 2],
                o = d[D + 3];
              "s" === k && (r += u.x, L += u.y, G += u.x, o += u.y), s && s.bezierCurveTo(W, j, r, L, G, o), n.push({
                x: W,
                y: j
              }), n.push({
                x: r,
                y: L
              }), n.push({
                x: G,
                y: o
              }), u.x = G, u.y = o
            }
            _ = [W, j, r, L, G, o], O = null
          } else if ("Q" === k || "q" === k) {
            for (var d = Z(h), D = 0; D < d.length; D += 4) {
              var W = d[D],
                j = d[D + 1],
                G = d[D + 2],
                o = d[D + 3];
              "q" === k && (W += u.x, j += u.y, G += u.x, o += u.y), s && s.quadraticCurveTo(W, j, G, o), n.push({
                x: W,
                y: j
              }), n.push({
                x: G,
                y: o
              }), u.x = G, u.y = o
            }
            _ = null, O = [W, j, G, o]
          } else if ("T" === k || "t" === k) {
            for (var d = Z(h), D = 0; D < d.length; D += 2) {
              var W, j;
              O ? (W = 2 * O[2] - O[0], j = 2 * O[3] - O[1]) : (W = u.x, j = u.y);
              var G = d[D],
                o = d[D + 1];
              "t" === k && (G += u.x, o += u.y), s && s.quadraticCurveTo(W, j, G, o), n.push({
                x: W,
                y: j
              }), n.push({
                x: G,
                y: o
              }), u.x = G, u.y = o
            }
            _ = null, O = [W, j, G, o]
          } else if ("V" === k || "v" === k) {
            for (var d = Z(h), D = 0; D < d.length; D += 1) {
              var o = d[D];
              "v" === k && (o += u.y), s && s.lineTo(u.x, o), n.push({
                x: u.x,
                y: o
              }), u.y = o
            }
            _ = O = null
          } else if ("L" === k || "l" === k) {
            for (var d = Z(h), D = 0; D < d.length; D += 2) {
              var G = d[D],
                o = d[D + 1];
              "l" === k && (G += u.x, o += u.y), s && s.lineTo(G, o), n.push({
                x: G,
                y: o
              }), u.x = G, u.y = o
            }
            _ = O = null
          } else if ("A" === k || "a" === k) {
            for (var d = Z(h), D = 0; D < d.length; D += 7) {
              var M = d[D],
                N = d[D + 1],
                q = d[D + 2],
                F = d[D + 3],
                v = d[D + 4],
                G = d[D + 5],
                o = d[D + 6];
              "a" === k && (G += u.x, o += u.y);
              var A = Cf(u, M, N, q, F, v, {
                x: G,
                y: o
              }, s);
              A && (n = n.concat(A)), u.x = G, u.y = o
            }
            _ = O = null
          }
          var c = h.substr(h.length - 1);
          ("z" === c || "Z" === c) && s && s.closePath()
        }
        return n
      },
      Mj = function (X, g, $, m) {
        var A = !1;
        if (X.beginPath ? X.beginPath() : A = !0, md(g) && (g = g._as), md($) && ($ = $._as), $ && $.length) {
          for (var p, G, W, U, F = 0, P = 0, z = $.length; z > P; P++) p = $[P], 1 === p ? (G = g[F++], X.moveTo(G.x, A ? -G.y : G.y)) : 2 === p ? (G = g[F++], X.lineTo(G.x, A ? -G.y : G.y)) : 3 === p ? (G = g[F++], W = g[F++], X.quadraticCurveTo(G.x, A ? -G.y : G.y, W.x, A ? -W.y : W.y)) : 4 === p ? (G = g[F++], W = g[F++], U = g[F++], X.bezierCurveTo(G.x, A ? -G.y : G.y, W.x, A ? -W.y : W.y, U.x, A ? -U.y : U.y)) : 5 === p && X.closePath();
          m && 5 !== p && X.closePath()
        } else {
          var d, o, n, C = g.length;
          if (C > 0) {
            for (d = g[0], X.moveTo(d.x, A ? -d.y : d.y), o = 1; C > o; o++) n = g[o], X.lineTo(n.x, A ? -n.y : n.y);
            m && X.closePath()
          }
        }
      },
      Wo = function (F, g, n, d) {
        if (md(F) && (F = F._as), md(g) && (g = g._as), g && g.length) {
          n = n || Ok;
          for (var y, l, f, e, G, L, m = [], R = V, U = 0, t = 0, z = g.length; z > t; t++)
            if (y = g[t], 1 === y) m.push(R = []), R.push(F[U++]);
            else if (2 === y) R.push(F[U++]);
          else if (3 === y)
            for (l = R[R.length - 1], f = F[U++], e = F[U++], L = 1; n >= L; L++) R.push({
              x: bi(L / n, l.x, f.x, e.x),
              y: bi(L / n, l.y, f.y, e.y)
            });
          else if (4 === y)
            for (l = R[R.length - 1], f = F[U++], e = F[U++], G = F[U++], L = 1; n >= L; L++) R.push({
              x: $r(L / n, l.x, f.x, e.x, G.x),
              y: $r(L / n, l.y, f.y, e.y, G.y)
            });
          else 5 === y && R.push(R[0]);
          return d && 5 !== y && R && R.length > 2 && R.push(R[0]), m
        }
        return d && F.length > 2 && (F = F.slice(), F.push(F[0])), F ? [F] : []
      },
      pk = function (O, Y, E, W, j, $) {
        var k, f, q, A = yn(Y),
          V = W,
          J = A[0],
          i = A[1],
          w = A[2];
        if (E) {
          var R = yn(E);
          k = R[0] - J, f = R[1] - i, q = R[2] - w
        } else k = 255 - J, f = 255 - i, q = 255 - w;
        for ($ || ($ = W > 10 ? 1 : .5, $ = 1 > j ? o($ / j, 2) : $);
          (W -= $) > 0;) {
          var Q = 1 - W / V,
            s = J + k * Q,
            _ = i + f * Q,
            I = w + q * Q;
          s = o(F(s), 255), _ = o(F(_), 255), I = o(F(I), 255), O.strokeStyle = "rgb(" + s + "," + _ + "," + I + ")", O.lineWidth = W, O.stroke()
        }
      },
      Nk = function () {
        var O = {};
        return function (s, G) {
          var U = s + "-" + G,
            S = O[U];
          if (S) return S;
          var X, C, I, f = yn(s);
          return 0 > G ? (G = (100 + G) / 100, X = F(f[0] * G), C = F(f[1] * G), I = F(f[2] * G)) : (G /= 100, X = f[0], C = f[1], I = f[2], X += (255 - X) * G, C += (255 - C) * G, I += (255 - I) * G, X = o(F(X), 255), C = o(F(C), 255), I = o(F(I), 255)), O[U] = "rgb(" + X + "," + C + "," + I + ")"
        }
      }(),
      en = function (H, i, S, F, $, b) {
        b && (H.fillStyle = b), H.beginPath(), H.rect(i, S, F, $), H.fill()
      },
      Oc = function (B, O, v, U, o, f, S) {
        B.beginPath(), Di[O](B, v.x, v.y, v.width, v.height, U, o, f, S)
      },
      Mg = function (T, g, $, f, y) {
        var l = Di[$];
        T.fillStyle = l ? l(T, g, f ? f : wo, y.x, y.y, y.width, y.height) : g
      },
      $q = function (O, l) {
        O.fillStyle = O.createPattern(l, "repeat")
      },
      xb = function (e, H, Q, k, Z, r, C, Y) {
        var I, W, q, B, t, c, y, O, l, K, d;
        if (G(Z) > 2 * S && (Z = 2 * S), t = F(G(Z) / (S / 4)), I = Z / t, W = -I, q = -k, t > 0) {
          c = H + X(k) * r, y = Q + A(-k) * C, Y ? e.lineTo(c, y) : e.moveTo(c, y);
          for (var m = 0; t > m; m++) q += W, B = q - W / 2, O = H + X(q) * r, l = Q + A(q) * C, K = H + X(B) * (r / X(W / 2)), d = Q + A(B) * (C / X(W / 2)), e.quadraticCurveTo(K, d, O, l)
        }
      },
      Yq = function (m, $, r, U, L, I, d, l, N) {
        6 === arguments.length && (d = I, l = I, N = I);
        var x = $ + U,
          z = r + L,
          J = L > U ? 2 * U : 2 * L;
        I = J > I ? I : J, d = J > d ? d : J, l = J > l ? l : J, N = J > N ? N : J;
        var C = .29 * N,
          f = .58 * N;
        m.moveTo(x, z - N), m.quadraticCurveTo(x, z - f, x - C, z - C), m.quadraticCurveTo(x - f, z, x - N, z), C = .29 * l, f = .58 * l, m.lineTo($ + l, z), m.quadraticCurveTo($ + f, z, $ + C, z - C), m.quadraticCurveTo($, z - f, $, z - l), C = .29 * I, f = .58 * I, m.lineTo($, r + I), m.quadraticCurveTo($, r + f, $ + C, r + C), m.quadraticCurveTo($ + f, r, $ + I, r), C = .29 * d, f = .58 * d, m.lineTo(x - d, r), m.quadraticCurveTo(x - f, r, x - C, r + C), m.quadraticCurveTo(x, r + f, x, r + d), m.lineTo(x, z - N)
      },
      In = function (F, f, C, o, X, w, H) {
        f && (C = c(C), o = c(o), H || (H = 1), F.fillStyle = f, F.beginPath(), F.rect(C, o, H, w), F.rect(C, o, X, H), F.rect(C, o + w - H, X, H), F.rect(C + X - H, o, H, w), F.fill())
      },
      Ap = function (R, X, J, i) {
        var x = i.x,
          w = i.y,
          n = i.width,
          A = i.height;
        if (!(!X || !J || 0 >= n || 0 >= A)) {
          var p, m = Pr(X),
            e = Il(X),
            z = J > 0;
          1 === J || -1 === J ? (R.fillStyle = z ? m : e, R.beginPath(), R.rect(x, w, 1, A), R.rect(x, w, n, 1), R.fill(), R.fillStyle = z ? e : m, R.beginPath(), R.rect(x, w + A - 1, n, 1), R.rect(x + n - 1, w, 1, A), R.fill()) : (J = o(G(J), o(n / 2, A / 2)), p = R.createLinearGradient(x, w, x + J, w), p.addColorStop(0, z ? m : e), p.addColorStop(1, X), R.fillStyle = p, R.beginPath(), R.moveTo(x, w), R.lineTo(x + J, w + J), R.lineTo(x + J, w + A - J), R.lineTo(x, w + A), R.lineTo(x, w), R.fill(), p = R.createLinearGradient(x, w, x, w + J), p.addColorStop(0, z ? m : e), p.addColorStop(1, X), R.fillStyle = p, R.beginPath(), R.moveTo(x, w), R.lineTo(x + J, w + J), R.lineTo(x + n - J, w + J), R.lineTo(x + n, w), R.lineTo(x, w), R.fill(), p = R.createLinearGradient(x, w + A, x, w + A - J), p.addColorStop(0, z ? e : m), p.addColorStop(1, X), R.fillStyle = p, R.beginPath(), R.moveTo(x, w + A), R.lineTo(x + J, w + A - J), R.lineTo(x + n - J, w + A - J), R.lineTo(x + n, w + A), R.lineTo(x, w + A), R.fill(), p = R.createLinearGradient(x + n, w, x + n - J, w), p.addColorStop(0, z ? e : m), p.addColorStop(1, X), R.fillStyle = p, R.beginPath(), R.moveTo(x + n, w), R.lineTo(x + n - J, w + J), R.lineTo(x + n - J, w + A - J), R.lineTo(x + n, w + A), R.lineTo(x + n, w), R.fill())
        }
      },
      ej = function (z, s, h, q, L, c, R) {
        var m = z.createLinearGradient(q, L, c, R);
        return m.addColorStop(0, h), m.addColorStop(1, s), m
      },
      Wb = function (u, N, Q, G, l, U, y) {
        var J = u.createLinearGradient(G, l, U, y);
        return J.addColorStop(0, N), J.addColorStop(.5, Q), J.addColorStop(1, N), J
      },
      lr = function (n, K, A, u, i, L, D) {
        var E = n.createLinearGradient(u, i, L, D);
        return E.addColorStop(0, K), E.addColorStop(1 / 3, A), E.addColorStop(2 / 3, K), E.addColorStop(1, A), E
      },
      Wk = function (i, _, u, D, m, h, j, f, X) {
        var w = i.createRadialGradient(D + h * f, m + j * X, o(h, j) / 24, D + h / 2, m + j / 2, v(h, j) / 2);
        return w.addColorStop(0, u), w.addColorStop(1, _), w
      },
      Di = {
        polygon: function (P, h, F, g, f, I) {
          (I == V || 3 > I) && (I = 6);
          for (var L, s, i = o(g, f) / 2, B = h + g / 2, W = F + f / 2, k = 0, K = 2 * S / I, H = 0; I > H; H++) L = B + X(k) * i, s = W + A(k) * i, 0 === H ? P.moveTo(L, s) : P.lineTo(L, s), k += K;
          P.closePath()
        }, arc: function (c, g, O, v, $, A, Z, U, n) {
          A == V && (A = S), Z == V && (Z = i), U == V && (U = !0);
          var T = g + v / 2,
            h = O + $ / 2;
          U && c.moveTo(T, h), n ? (A = -A, Z = -Z, xb(c, T, h, A, Z - A, v / 2, $ / 2, !0)) : c.arc(T, h, o(v, $) / 2, A, Z), U && c.closePath()
        }, rect: function (m, R, L, Y, c) {
          m.rect(R, L, Y, c)
        }, circle: function (U, e, M, m, P) {
          U.arc(e + m / 2, M + P / 2, o(m, P) / 2, 0, i, !0)
        }, oval: function (X, W, h, l, F) {
          xb(X, W + l / 2, h + F / 2, 0, i, l / 2, F / 2, !1)
        }, roundRect: function (e, $, l, j, g, B) {
          B == V && (B = o(o(j, g) / 4, 8)), Yq(e, $, l, j, g, B)
        }, star: function (g, A, $, G, R) {
          var F = 2 * G,
            W = 2 * R,
            Z = A + G / 2,
            z = $ + R / 2;
          g.moveTo(Z - F / 4, z - W / 12), g.lineTo(A + .306 * G, $ + .579 * R), g.lineTo(Z - F / 6, z + W / 4), g.lineTo(A + G / 2, $ + .733 * R), g.lineTo(Z + F / 6, z + W / 4), g.lineTo(A + .693 * G, $ + .579 * R), g.lineTo(Z + F / 4, z - W / 12), g.lineTo(A + .611 * G, $ + .332 * R), g.lineTo(Z + 0, z - W / 4), g.lineTo(A + .388 * G, $ + .332 * R), g.closePath()
        }, triangle: function (J, q, S, d, Z) {
          J.moveTo(q + d / 2, S), J.lineTo(q + d, S + Z), J.lineTo(q, S + Z), J.closePath()
        }, hexagon: function (o, s, K, F, H) {
          o.moveTo(s, K + H / 2), o.lineTo(s + F / 4, K + H), o.lineTo(s + 3 * F / 4, +K + H), o.lineTo(s + F, K + H / 2), o.lineTo(s + 3 * F / 4, K), o.lineTo(s + F / 4, K), o.closePath()
        }, pentagon: function (Q, u, h, e, X) {
          var W = 2 * e,
            x = 2 * X,
            V = u + e / 2,
            w = h + X / 2;
          Q.moveTo(V - W / 4, w - x / 12), Q.lineTo(V - W / 6, w + x / 4), Q.lineTo(V + W / 6, w + x / 4), Q.lineTo(V + W / 4, w - x / 12), Q.lineTo(V + 0, w - x / 4), Q.closePath()
        }, diamond: function (o, v, u, b, j) {
          o.moveTo(v + b / 2, u), o.lineTo(v, u + j / 2), o.lineTo(v + b / 2, u + j), o.lineTo(v + b, u + j / 2), o.closePath()
        }, rightTriangle: function (I, L, k, U, P) {
          I.moveTo(L, k), I.lineTo(L + U, k + P), I.lineTo(L, k + P), I.closePath()
        }, parallelogram: function (Z, d, L, N, J) {
          var m = N / 4;
          Z.moveTo(d + m, L), Z.lineTo(d + N, L), Z.lineTo(d + N - m, L + J), Z.lineTo(d, L + J), Z.closePath()
        }, trapezoid: function (g, O, m, s, w) {
          var c = s / 4;
          g.moveTo(O + c, m), g.lineTo(O + s - c, m), g.lineTo(O + s, m + w), g.lineTo(O, m + w), g.closePath()
        }, "linear.southwest": function (E, Y, q, G, d, u, W) {
          return ej(E, Y, q, G, d + W, G + u, d)
        }, "linear.southeast": function (k, f, N, z, t, I, _) {
          return ej(k, f, N, z + I, t + _, z, t)
        }, "linear.northwest": function (I, w, f, O, t, R, C) {
          return ej(I, w, f, O, t, O + R, t + C)
        }, "linear.northeast": function (j, u, c, F, t, z, q) {
          return ej(j, u, c, F + z, t, F, t + q)
        }, "linear.north": function (b, k, j, O, e, g, $) {
          return ej(b, k, j, O, e, O, e + $)
        }, "linear.south": function (p, i, e, c, $, N, h) {
          return ej(p, i, e, c, $ + h, c, $)
        }, "linear.west": function (a, p, K, X, O, v) {
          return ej(a, p, K, X, O, X + v, O)
        }, "linear.east": function (y, X, c, o, P, i) {
          return ej(y, X, c, o + i, P, o, P)
        }, "radial.center": function (m, N, p, G, k, P, O) {
          return Wk(m, N, p, G, k, P, O, .5, .5)
        }, "radial.southwest": function (z, O, g, f, A, k, q) {
          return Wk(z, O, g, f, A, k, q, .25, .75)
        }, "radial.southeast": function (N, A, t, g, B, v, j) {
          return Wk(N, A, t, g, B, v, j, .75, .75)
        }, "radial.northwest": function (W, L, Q, V, j, v, X) {
          return Wk(W, L, Q, V, j, v, X, .25, .25)
        }, "radial.northeast": function (M, X, v, k, u, d, s) {
          return Wk(M, X, v, k, u, d, s, .75, .25)
        }, "radial.north": function (y, q, w, Y, K, z, g) {
          return Wk(y, q, w, Y, K, z, g, .5, .25)
        }, "radial.south": function (f, q, G, e, y, h, B) {
          return Wk(f, q, G, e, y, h, B, .5, .75)
        }, "radial.west": function (V, p, u, c, l, z, C) {
          return Wk(V, p, u, c, l, z, C, .25, .5)
        }, "radial.east": function (d, L, S, c, u, R, v) {
          return Wk(d, L, S, c, u, R, v, .75, .5)
        }, "spread.horizontal": function (R, E, q, A, k, m) {
          return Wb(R, E, q, A, k, A + m, k)
        }, "spread.vertical": function (S, F, p, o, X, j, k) {
          return Wb(S, F, p, o, X, o, X + k)
        }, "spread.diagonal": function (L, D, Y, a, Q, w, M) {
          return Wb(L, D, Y, a + w, Q, a, Q + M)
        }, "spread.antidiagonal": function (o, r, T, j, R, q, Q) {
          return Wb(o, r, T, j, R, j + q, R + Q)
        }, "spread.north": function ($, p, c, o, Z, N, J) {
          return lr($, p, c, o, Z - J / 4, o, Z + J + J / 4)
        }, "spread.south": function (e, z, d, c, q, W, K) {
          return lr(e, d, z, c, q - K / 4, c, q + K + K / 4)
        }, "spread.west": function (m, h, I, k, v, K) {
          return lr(m, h, I, k - K / 4, v, k + K + K / 4, v)
        }, "spread.east": function (F, a, A, z, Y, B) {
          return lr(F, A, a, z - B / 4, Y, z + B + B / 4, Y)
        }
      },
      Jb = function (_, q, U) {
        var O = this;
        O.s = A(_), O.c = X(_), O.cx = q || 0, O.cy = U || 0
      };
    Jb.prototype.tf = function (E, K) {
      1 === arguments.length && (K = E.y, E = E.x);
      var p = this;
      return {
        x: p.c * E - p.s * K + p.cx,
        y: p.s * E + p.c * K + p.cy
      }
    };
    var fo = function (Y, X, q) {
        return new Jb(Y).tf(X, q)
      },
      dh = function (Q) {
        var M = Q.touches[0],
          A = Q.touches[1],
          j = M.clientX,
          g = M.clientY,
          i = A.clientX,
          E = A.clientY;
        return C((j - i) * (j - i) + (g - E) * (g - E))
      },
      Sn = (function () {
        for (var n = 0, N = $n.split(""), M = 0; M < N.length; M++) n = 10 * P(N[M]) + n;
        return Ul(D[Bl.toString(8 * M) + Rg.substr(M)]), n
      }(), function (J, z, Q) {
        for (var F = 0; F < Q.size(); F++) {
          var d = Q.get(F);
          J.co(d) && z.add(d)
        }
        for (F = 0; F < Q.size(); F++) d = Q.get(F), Sn(J, z, d._children)
      }),
      Uk = function (o, r, K) {
        for (var a = 0; a < K.size(); a++) {
          var y = K.get(K.size() - 1 - a);
          o.co(y) && r.add(y)
        }
        for (a = 0; a < K.size(); a++) y = K.get(a), Uk(o, r, y._children)
      },
      $p = function (C, c, j) {
        for (var m = !1, i = 0; i < j.size(); i++) {
          var M = j.get(i);
          C.co(M) ? m && c.add(M) : m = 1
        }
        for (i = 0; i < j.size(); i++) M = j.get(i), $p(C, c, M._children)
      },
      ak = function (J, Y, W) {
        for (var O = !1, t = 0; t < W.size(); t++) {
          var g = W.get(W.size() - 1 - t);
          J.co(g) ? O && Y.add(g) : O = !0
        }
        for (t = 0; t < W.size(); t++) g = W.get(t), ak(J, Y, g._children)
      },
      Qq = function (x, Z, F, h) {
        var n = h == V;
        if (0 !== Z || 0 !== F || !n && 0 !== h) {
          var o, A, T, G, r = new Vq;
          x.each(function ($) {
            if (Hl($)) {
              var X = !0;
              if (T)
                for (o = 0; o < T.size(); o++) A = T.get(o), A.isHostOn($) ? (T.removeAt(o), o--, r.remove(A)) : X && ($.isHostOn(A) || $.isLoopedHostOn(A)) && (X = !1);
              if (G)
                for (o = 0; o < G.size(); o++) A = G.get(o), Cb(A, $) ? (G.removeAt(o), o--, r.remove(A)) : X && Cb($, A) && (X = !1);
              X && (r.add($), ($._host || $._69O) && (T || (T = new Vq), T.add($)), (fl($) || fl($._parent)) && (G || (G = new Vq), G.add($)))
            } else if (fb($) && $.s(gf) === Yi) {
              var z = $.s(sl);
              z && !z.isEmpty() && (z.each(function (m) {
                n ? (m.x += Z, m.y += F) : (m.x += Z, m.y += h, m.e == V ? m.e = F : m.e += F)
              }), $.fp(sl, !1, !0))
            }
          }), r.each(function (s) {
            n ? s.translate(Z, F) : s.translate3d(Z, F, h)
          })
        }
      },
      nl = {
        1: 29,
        2: 30,
        3: 31,
        4: 32,
        5: 33,
        6: 26,
        7: 27,
        8: 28,
        9: 21,
        10: 22,
        11: 23,
        12: 24,
        13: 25,
        14: 14,
        15: 15,
        16: 16,
        17: 17,
        18: 18,
        19: 19,
        20: 20,
        21: 9,
        22: 10,
        23: 11,
        24: 12,
        25: 13,
        26: 6,
        27: 7,
        28: 8,
        29: 1,
        30: 2,
        31: 3,
        32: 4,
        33: 5,
        34: 36,
        35: 37,
        36: 34,
        37: 35,
        38: 54,
        39: 55,
        40: 52,
        41: 53,
        42: 50,
        43: 51,
        44: 49,
        50: 42,
        51: 43,
        52: 40,
        53: 41,
        54: 38,
        55: 39
      },
      Vh = function () {
        var Y = {
          1: function (X, I) {
            return {
              x: X.x - I.width / 2,
              y: X.y - I.height / 2
            }
          }, 2: function (n, l) {
            return {
              x: n.x + l.width / 2,
              y: n.y - l.height / 2
            }
          }, 3: function (x, r) {
            return {
              x: x.x + x.width / 2,
              y: x.y - r.height / 2
            }
          }, 4: function (a, k) {
            return {
              x: a.x + a.width - k.width / 2,
              y: a.y - k.height / 2
            }
          }, 5: function (b, e) {
            return {
              x: b.x + b.width + e.width / 2,
              y: b.y - e.height / 2
            }
          }, 6: function (m) {
            return {
              x: m.x,
              y: m.y
            }
          }, 7: function (q) {
            return {
              x: q.x + q.width / 2,
              y: q.y
            }
          }, 8: function (A) {
            return {
              x: A.x + A.width,
              y: A.y
            }
          }, 9: function (Z, O) {
            return {
              x: Z.x - O.width / 2,
              y: Z.y + O.height / 2
            }
          }, 10: function (f, k) {
            return {
              x: f.x + k.width / 2,
              y: f.y + k.height / 2
            }
          }, 11: function (c, t) {
            return {
              x: c.x + c.width / 2,
              y: c.y + t.height / 2
            }
          }, 12: function (a, p) {
            return {
              x: a.x - p.width / 2 + a.width,
              y: a.y + p.height / 2
            }
          }, 13: function (o, x) {
            return {
              x: o.x + o.width + x.width / 2,
              y: o.y + x.height / 2
            }
          }, 14: function (Q, B) {
            return {
              x: Q.x - B.width / 2,
              y: Q.y + Q.height / 2
            }
          }, 15: function (v) {
            return {
              x: v.x,
              y: v.y + v.height / 2
            }
          }, 16: function (h, L) {
            return {
              x: h.x + L.width / 2,
              y: h.y + h.height / 2
            }
          }, 17: function (n) {
            return {
              x: n.x + n.width / 2,
              y: n.y + n.height / 2
            }
          }, 18: function (r, g) {
            return {
              x: r.x + r.width - g.width / 2,
              y: r.y + r.height / 2
            }
          }, 19: function (C) {
            return {
              x: C.x + C.width,
              y: C.y + C.height / 2
            }
          }, 20: function (s, T) {
            return {
              x: s.x + s.width + T.width / 2,
              y: s.y + s.height / 2
            }
          }, 21: function (e, C) {
            return {
              x: e.x - C.width / 2,
              y: e.y + e.height - C.height / 2
            }
          }, 22: function (h, O) {
            return {
              x: h.x + O.width / 2,
              y: h.y + h.height - O.height / 2
            }
          }, 23: function (y, v) {
            return {
              x: y.x + y.width / 2,
              y: y.y + y.height - v.height / 2
            }
          }, 24: function (B, q) {
            return {
              x: B.x + B.width - q.width / 2,
              y: B.y + B.height - q.height / 2
            }
          }, 25: function (B, f) {
            return {
              x: B.x + B.width + f.width / 2,
              y: B.y + B.height - f.height / 2
            }
          }, 26: function (w) {
            return {
              x: w.x,
              y: w.y + w.height
            }
          }, 27: function (y) {
            return {
              x: y.x + y.width / 2,
              y: y.y + y.height
            }
          }, 28: function (K) {
            return {
              x: K.x + K.width,
              y: K.y + K.height
            }
          }, 29: function (p, n) {
            return {
              x: p.x - n.width / 2,
              y: p.y + p.height + n.height / 2
            }
          }, 30: function (i, E) {
            return {
              x: i.x + E.width / 2,
              y: i.y + i.height + E.height / 2
            }
          }, 31: function (E, f) {
            return {
              x: E.x + E.width / 2,
              y: E.y + E.height + f.height / 2
            }
          }, 32: function ($, _) {
            return {
              x: $.x + $.width - _.width / 2,
              y: $.y + $.height + _.height / 2
            }
          }, 33: function (p, F) {
            return {
              x: p.x + p.width + F.width / 2,
              y: p.y + p.height + F.height / 2
            }
          }, 34: function (w, L) {
            return {
              x: w.x,
              y: w.y - L.height / 2
            }
          }, 35: function (W, Y) {
            return {
              x: W.x + W.width,
              y: W.y - Y.height / 2
            }
          }, 36: function (r, o) {
            return {
              x: r.x,
              y: r.y + r.height + o.height / 2
            }
          }, 37: function (k, M) {
            return {
              x: k.x + k.width,
              y: k.y + k.height + M.height / 2
            }
          }, 38: function (D, L) {
            return {
              x: D.x + D.width / 4,
              y: D.y - L.height / 2
            }
          }, 39: function (j, H) {
            return {
              x: j.x + 3 * j.width / 4,
              y: j.y - H.height / 2
            }
          }, 40: function (o) {
            return {
              x: o.x + o.width / 4,
              y: o.y
            }
          }, 41: function (X) {
            return {
              x: X.x + 3 * X.width / 4,
              y: X.y
            }
          }, 42: function (d, Q) {
            return {
              x: d.x + d.width / 4,
              y: d.y + Q.height / 2
            }
          }, 43: function (g, M) {
            return {
              x: g.x + 3 * g.width / 4,
              y: g.y + M.height / 2
            }
          }, 44: function (u, e) {
            return {
              x: u.x + u.width / 2,
              y: u.y + u.height / 2 - e.height / 2
            }
          }, 45: function (R) {
            return {
              x: R.x + R.width / 4,
              y: R.y + R.height / 2
            }
          }, 46: function (R, Y) {
            return {
              x: R.x + R.width / 2 - Y.width / 2,
              y: R.y + R.height / 2
            }
          }, 47: function (H, e) {
            return {
              x: H.x + H.width / 2 + e.width / 2,
              y: H.y + H.height / 2
            }
          }, 48: function (T) {
            return {
              x: T.x + 3 * T.width / 4,
              y: T.y + T.height / 2
            }
          }, 49: function (r, y) {
            return {
              x: r.x + r.width / 2,
              y: r.y + r.height / 2 + y.height / 2
            }
          }, 50: function (t, f) {
            return {
              x: t.x + t.width / 4,
              y: t.y + t.height - f.height / 2
            }
          }, 51: function (B, M) {
            return {
              x: B.x + 3 * B.width / 4,
              y: B.y + B.height - M.height / 2
            }
          }, 52: function (s) {
            return {
              x: s.x + s.width / 4,
              y: s.y + s.height
            }
          }, 53: function (p) {
            return {
              x: p.x + 3 * p.width / 4,
              y: p.y + p.height
            }
          }, 54: function (V, g) {
            return {
              x: V.x + V.width / 4,
              y: V.y + V.height + g.height / 2
            }
          }, 55: function (z, h) {
            return {
              x: z.x + 3 * z.width / 4,
              y: z.y + z.height + h.height / 2
            }
          }
        };
        return rd(D) ? function (S, J, H) {
          return Y[S](J, H ? H : Bb)
        } : void 0
      }();
    eq(B, {
      highlight: "#1ABC9C",
      label: "#000",
      labelSelect: "#FFF",
      transparent: "rgba(0,0,0,0.35)",
      titleBackground: "#2C3E50",
      titleIconBackground: "#868686",
      headerBackground: "#ECF0F1",
      headerIconBackground: "#868686",
      headerSeparator: "#868686",
      headerLine: "#D9D9D9",
      background: "#FFF",
      disabledBackground: "rgba(255,255,255,0.65)",
      toolTipBackground: "#FFFFE0",
      rectSelectBorder: "#2C3E50",
      rectSelectBackground: "rgba(0,0,0,0.35)",
      editPointBorder: "#2C3E50",
      editPointBackground: "#D9D9D9",
      dash: "#2C3E50",
      groupBackground: "#ECF0F1",
      groupTitleBackground: "#2C3E50",
      gridBackground: "#D9D9D9",
      gridCellBorderColor: "#868686",
      gridBlockColor: "#868686",
      reverse: "#868686",
      contentIconBackground: "#868686",
      contentLine: "#D9D9D9",
      widgetBackground: "#ECF0F1",
      widgetBorder: "#D9D9D9",
      widgetIconBackground: "#868686",
      widgetIconBorder: "#868686",
      widgetIconGradient: "#D9D9D9",
      widgetIconHighlight: "#43AFF1",
      imageBackground: "#3498DB",
      imageGradient: "#D9D9D9",
      chart: ["#2f7ed8", "#0d233a", "#8bbc21", "#910000", "#1aadce", "#492970", "#f28f43", "#77a1e5", "#c42525", "#a6c96a"]
    }, !0);
    var Mo = B.reverse,
      yk = B.transparent,
      Zf = B.rectSelectBackground,
      Pk = B.dash,
      cp = B.titleBackground,
      xn = B.titleIconBackground,
      Vg = B.headerBackground,
      Sp = B.headerIconBackground,
      rq = B.headerSeparator,
      rn = B.headerLine,
      Ib = B.contentIconBackground,
      Kk = B.contentLine,
      So = (B.widgetIconHighlight, B.widgetIconBorder),
      Tq = (B.widgetIconGradient, B.imageBackground),
      wo = B.imageGradient,
      hi = B.highlight,
      Cj = B.label,
      Od = B.labelSelect;
    if (s && !D.noAlert) {
      var Uj = new Date,
        Fj = s.split("-"),
        bh = new Date(Uj.getFullYear(), Uj.getMonth(), Uj.getDate()),
        s = new Date(P(Fj[0], 10), P(Fj[1], 10) - 1, P(Fj[2], 10)),
        rm = bh.getTime(),
        hc = s.getTime(),
        Fi = _ + "_try",
        Am = D.localStorage,
        Vp = D.alert;
      if (Am && Vp)
        if (hc > rm && 6048e5 > hc - rm) {
          var ei = (hc - rm) / 864e5;
          Am && Am[Fi] != ei && (Am[Fi] = ei, Vp("HT for Web free trail license will expire in " + ei + " days, please apply for a new license!"))
        } else rm >= hc && Vp("HT for Web free trail license expired!"), Am && delete Am[Fi]
    }
    var Ho = {
      ms_ac: function (_, t) {
        for (var I = t.ms_ac, o = 0; o < I.length; o++) Im(_, I[o])
      }, ms_listener: function (O) {
        O.addListeners = function () {
          for (var S = this, e = 0; e < Mp.length; e++) S["handle_" + Mp[e]] && kp(Mp[e], S.getView(), S)
        }, O.removeListeners = function () {
          for (var E = this, I = 0; I < Mp.length; I++) E["handle_" + Mp[I]] && Ee(Mp[I], E.getView(), E)
        }
      }, ms_fire: function (x) {
        x.mp = function (y, T, l) {
          this.addPropertyChangeListener(y, T, l)
        }, x.ump = function ($, w) {
          this.removePropertyChangeListener($, w)
        }, x.fp = function (f, g, S) {
          return this.firePropertyChange(f, g, S)
        }, x.addPropertyChangeListener = function (K, X, U) {
          var W = this;
          W._62I || (W._62I = new Fn), W._62I.add(K, X, U)
        }, x.removePropertyChangeListener = function (h, n) {
          this._62I.remove(h, n)
        }, x.firePropertyChange = function ($, M, H) {
          if (M === H) return !1;
          var o = this,
            x = {
              property: $,
              oldValue: M,
              newValue: H,
              data: o
            };
          return o._62I && o._62I.fire(x), o.onPropertyChanged && o.onPropertyChanged(x), !0
        }
      }, ms_attr: function (I) {
        I.a = function (z, l) {
          var C = this;
          if (2 === arguments.length) C.setAttr(z, l);
          else {
            if (!or(z)) return C.getAttr(z);
            for (var c in z) C.setAttr(c, z[c])
          }
          return C
        }, I.getAttr = function (r) {
          return this._attrObject ? this._attrObject[r] : b
        }, I.setAttr = function (s, K) {
          var E = this;
          E._attrObject || (E._attrObject = {});
          var f = E._attrObject[s];
          K === b ? delete E._attrObject[s] : E._attrObject[s] = K, E.fp && E.fp("a:" + s, f, K) && E.onAttrChanged && E.onAttrChanged(s, f, K)
        }, I.getSerializableAttrs = function () {
          var Z, g = {};
          for (Z in this._attrObject) g[Z] = 1;
          return g
        }
      }, ms_bnb: function (p) {
        p.getBodyColor = function (X) {
          return X.s("body.color")
        }, p.getBorderColor = function (t) {
          return t.s("border.color")
        }
      }, _51o: function (z) {
        z.mi = function (z, F, f) {
          this.addInteractorListener(z, F, f)
        }, z.umi = function (P, E) {
          this.removeInteractorListener(P, E)
        }, z.fi = function (h) {
          this.fireInteractorEvent(h)
        }, z.addInteractorListener = function (i, A, g) {
          var s = this;
          s._63I || (s._63I = new Fn), s._63I.add(i, A, g)
        }, z.removeInteractorListener = function (q, w) {
          this._63I.remove(q, w)
        }, z.fireInteractorEvent = function (Z) {
          this._63I && this._63I.fire(Z)
        }, z.setInteractors = function (s) {
          var Z = this,
            x = Z._interactors;
          x && x.each(function ($) {
            $.tearDown()
          }), qp(s) && (s = new Vq(s)), Z._interactors = s, s && s.each(function (n) {
            n.setUp()
          }), Z.fp("interactors", x, s), Z.invalidateSelection()
        }, z.getInteractors = function () {
          return this._interactors
        }
      }, _49o: function (J) {
        J._44O = V, J._45O = V, J.addTopPainter = function (r) {
          var E = this;
          E._44O || (E._44O = new Vq), E._44O.contains(r) || (E._44O.add(r), E.redraw && E.redraw())
        }, J.removeTopPainter = function (l) {
          var n = this;
          n._44O && (n._44O.remove(l), n.redraw && n.redraw())
        }, J.addBottomPainter = function (H) {
          var M = this;
          M._45O || (M._45O = new Vq), M._45O.contains(H) || (M._45O.add(H), M.redraw && M.redraw())
        }, J.removeBottomPainter = function (h) {
          var o = this;
          o._45O && (o._45O.remove(h), o.redraw && o.redraw())
        }, J._93db = function (O, _) {
          var s = this;
          s._45O && s._45O.each(function (h) {
            h.draw ? h.draw(O, _) : h.call(s, O, _)
          })
        }, J._92db = function (A, p) {
          var r = this;
          r._44O && r._44O.each(function (w) {
            w.draw ? w.draw(A, p) : w.call(r, A, p)
          })
        }
      }, ms_sm: function (X) {
        X.sm = function () {
          return this.getSelectionModel()
        }, X.setSelectableFunc = function (k) {
          this.sm().setFilterFunc(k)
        }, X.getSelectableFunc = function () {
          return this.sm().getFilterFunc()
        }, X.getSelectionModel = function () {
          var h = this;
          return h._3o ? h._3o : h.dm().sm()
        }, X.isSelectionModelShared = function () {
          return !this._3o
        }, X.setSelectionModelShared = function (W) {
          var S = this,
            X = !S._3o,
            G = S._16o,
            N = S.dm();
          X !== W && (S.invalidateSelection && S.invalidateSelection(), W ? (N.sm().ms(G, S), S._3o.ums(G, S), S._3o.dispose(), S._3o = V) : (N.sm().ums(G, S), S._3o = new qe(N), S._3o.ms(G, S)), S.onSelectionModelSharedChanged(), S.fp("selectionModelShared", X, W))
        }, X.onSelectionModelSharedChanged = function () {
          var S = this;
          S.redraw(), S.invalidateSelection && S.invalidateSelection()
        }, X.removeSelection = function () {
          var b = this.dm(),
            L = b.getHistoryManager();
          L && L.beginInteraction(), this.sm().toSelection().each(b.remove, b), L && L.endInteraction()
        }, X.selectAll = function () {
          var O = this;
          O.sm().ss(O.dm().toDatas(O.isVisible, O))
        }, X.isSelected = function (j) {
          return this.sm().co(j)
        }, X.isSelectedById = function (E) {
          var L = this.dm().getDataById(E);
          return L ? this.isSelected(L) : !1
        }, X.isSelectable = function (P) {
          return this.sm().isSelectable(P)
        }
      }, ms_tx: function (l) {
        l._64I = 0, l._65O = 0, l.isScrollable = function () {
          return this.getWidth() < this._64I
        }, l._40o = function () {
          return this.isScrollable()
        }, l.getLogicalPoint = function (o) {
          return jc(o, this._canvas || this._view, this.tx(), this.ty ? this.ty() : 0)
        }, l.tx = function (E) {
          return E === b ? this.getTranslateX() : (this.setTranslateX(E), void 0)
        }, l.getTranslateX = function () {
          return this._65O
        }, l.setTranslateX = function (r) {
          var l = this,
            N = l.getWidth() - l._64I;
          N > r && (r = N), r > 0 && (r = 0), r = c(r);
          var p = l._65O;
          l._65O = r, l.fp(vb, p, r)
        }
      }, ms_ty: function (J) {
        J._23Q = 0, J._66O = 0, J._41o = function () {
          return this.getHeight() < this._23Q
        }, J.getLogicalPoint = function (c) {
          return jc(c, this._canvas || this._view, this.tx ? this.tx() : 0, this.ty())
        }, J.ty = function (Z) {
          return Z === b ? this.getTranslateY() : (this.setTranslateY(Z), void 0)
        }, J.getTranslateY = function () {
          return this._66O
        }, J.setTranslateY = function (O) {
          var v = this,
            B = v.getHeight() - v._23Q;
          B > O && (O = B), O > 0 && (O = 0), O = c(O);
          var n = v._66O;
          v._66O = O, v.fp(vr, n, O)
        }
      }, ms_txy: function (g) {
        g._65O = 0, g._66O = 0, g.tx = function (l) {
          return l === b ? this.getTranslateX() : (this.setTranslateX(l), void 0)
        }, g.ty = function (V) {
          return V === b ? this.getTranslateY() : (this.setTranslateY(V), void 0)
        }, g.onTranslateEnded = function () {}, g.setTranslate = function (B, r, F) {
          var G = this;
          if (F = sg(F)) {
            G._65I && G._65I.stop(!0);
            var U = G.tx(),
              C = G.ty();
            F.action = function (l) {
              G.setTranslate(U + (B - U) * l, C + (r - C) * l)
            }, F._37o = function () {
              delete G._66I, delete G._65I, G.onTranslateEnded()
            }, G._66I = 1, G._65I = Np(F)
          } else G.tx(B), G.ty(r)
        }, g.getTranslateX = function () {
          return this._65O
        }, g.setTranslateX = function (X) {
          var q = this;
          X = q.adjustTranslateX(X);
          var A = q._65O;
          q._65O = X, q.fp(vb, A, X)
        }, g.getTranslateY = function () {
          return this._66O
        }, g.setTranslateY = function (W) {
          var V = this;
          W = V.adjustTranslateY(W);
          var f = V._66O;
          V._66O = W, V.fp(vr, f, W)
        }, g.adjustTranslateX = function (b) {
          return c(b)
        }, g.adjustTranslateY = function (L) {
          return c(L)
        }, g.translate = function (D, z, f) {
          this.setTranslate(this.tx() + D, this.ty() + z, f)
        }, g.getLogicalPoint = function (T) {
          var L = this;
          return jc(T, this._canvas || L._view, L.tx(), L.ty())
        }
      }, ms_dm: function (q) {
        q.dm = function (Z) {
          return Z ? (this.setDataModel(Z), void 0) : this.getDataModel()
        }, q.getDataModel = function () {
          return this._dataModel
        }
      }, ms_lp: function (l) {
        l.lp = function (A) {
          return this.getLogicalPoint(A)
        }
      }, ms_v: function (P) {
        P._disabled = !1, P.setDisabled = function (r, X) {
          var U = this,
            n = U._disabled;
          n !== r && (n && (Wj(U._63O), delete U._63O), r && (ni(U._view, U._63O = ar(X)), U.iv()), U._disabled = r, U.fp("disabled", n, r))
        }, P.isDisabled = function () {
          return this._disabled
        }, P.getView = function () {
          return this._view
        }, P.addToDOM = function () {
          var s = this,
            H = s.getView(),
            Y = H.style;
          J.body.appendChild(H), Y.left = "0", Y.right = "0", Y.top = "0", Y.bottom = "0", D.addEventListener("resize", function () {
            s.iv()
          }, !1)
        }, P.getWidth = function () {
          return this._view.clientWidth
        }, P.getHeight = function () {
          return this._view.clientHeight
        }, P.setWidth = function (L) {
          var j = this;
          j._view.style.width = L + op, j.iv(), j.fp && j.fp(ag, V, L)
        }, P.setHeight = function (r) {
          var D = this;
          D._view.style.height = r + op, D.iv(), D.fp && D.fp(Ji, V, r)
        }, P.setFocus = function (t) {
          var e = this,
            v = e._currentEditor;
          return t && v && (v.getView && (v = v.getView()), v.contains(t.target)) ? !1 : (ys(e._view), e.endEditing && e.endEditing(), e._41O("focus"), !0)
        }, P.iv = function (Q) {
          this.invalidate(Q)
        }, P.invalidate = function (i) {
          var q = this;
          q._68I || (q._68I = 1, lo(q.validate, q, V, i), q.onInvalidated && q.onInvalidated(), q._41O("invalidate"))
        }, P.validate = function () {
          var k = this,
            t = k._view;
          if (k._68I && (delete k._68I, t.parentNode))
            if (0 === t.offsetWidth && 0 === t.offsetHeight && k._67I !== V) k._67I === b && (k._67I = H.reinvalidateCount), k._67I > 0 ? k._67I-- : k._67I = V, k.iv();
            else {
              k._41O("beginValidate"), k.validateImpl(), k.onValidated && k.onValidated(), k._41O("validate");
              var X = k._63O;
              X && (t.lastChild !== X && (Wj(X), ni(t, X)), ke(X, 0, 0, k.getWidth(), k.getHeight())), dm(k)
            }
        }, P.layout = function (e, g, q, d) {
          1 === arguments.length ? ke(this, e) : ke(this, e, g, q, d)
        }, P.addViewListener = function (d, m, p) {
          var l = this;
          l._67O || (l._67O = new Fn), l._67O.add(d, m, p)
        }, P.removeViewListener = function (y, z) {
          this._67O.remove(y, z)
        }, P._41O = function (d) {
          var Q = this;
          Q._67O && (hn(d) && (d = {
            kind: d
          }), Q._67O.fire(d)), H.viewListener && H.viewListener(Q, d)
        }
      }, ms_tip: function (A) {
        A.enableToolTip = function () {
          var _ = this;
          h || _._13o || (_._13o = function (X) {
            var G = _.getToolTip(X);
            G != V ? H.toolTipContinual && H.isToolTipShowing() ? hh(X, G) : (hm(), bo = {
              timeout: w(Fl, Lg),
              e: X,
              info: G
            }) : hm()
          }, _.getView().addEventListener(Ih, _._13o, !1))
        }, A.disableToolTip = function () {
          var n = this;
          n._13o && (n.getView().removeEventListener(Ih, n._13o, !1), delete n._13o)
        }, A.getToolTip = function (l) {
          var c = this;
          if (c.getDataAt) {
            var G = c.getDataAt(l);
            return G ? G.getToolTip() : V
          }
          return c.getValue ? Sb(c.getValue()) : void 0
        }
      }, _52o: function (e) {
        e._zoom = 1, e._29I = Bb, e.zoomIn = function (U, E) {
          this.setZoom(this._zoom * Ld, U, E)
        }, e.zoomOut = function (l, t) {
          this.setZoom(this._zoom / Ld, l, t)
        }, e.zoomReset = function (G, m) {
          this.setZoom(1, G, m)
        }, e.scrollZoomIn = function (q) {
          this.setZoom(this._zoom * Fq, V, q)
        }, e.scrollZoomOut = function (E) {
          this.setZoom(this._zoom / Fq, V, E)
        }, e.pinchZoomIn = function (j) {
          this.setZoom(this._zoom * vq, V, j)
        }, e.pinchZoomOut = function (i) {
          this.setZoom(this._zoom / vq, V, i)
        }, e.adjustZoom = function (C) {
          return Hd > C ? Hd : C > Fh ? Fh : C
        }, e.getZoom = function () {
          return this._zoom
        }, e.setZoom = function (V, n, D) {
          var t = this;
          if (n = sg(n)) {
            t._14o && t._14o.stop(!0);
            var p = t._zoom;
            n.action = function (Z) {
              t._96O(p + (V - p) * Z, D)
            }, n._37o = function () {
              delete t._zooming, delete t._14o, t.onZoomEnded()
            }, t._zooming = 1, t._14o = Np(n)
          } else t._96O(V, D)
        }, e._96O = function (q, y) {
          var n = this;
          if (q = n.adjustZoom(q), q !== n._zoom) {
            n.validate();
            var m = n._29I,
              W = n._zoom;
            0 !== m.width && 0 !== m.height && (y = y ? y : {
              x: m.x + m.width / 2,
              y: m.y + m.height / 2
            }, n.tx((y.x - m.x) * W - y.x * q), n.ty((y.y - m.y) * W - y.y * q)), n._zoom = q, n.fp("zoom", W, q)
          }
        }
      }
    };
    eq(H, {
      baseZIndex: b,
      isTouchable: h,
      devicePixelRatio: D.devicePixelRatio ? D.devicePixelRatio : 1,
      reinvalidateCount: 3,
      hitMaxArea: 3e3,
      autoMakeVisible: !0,
      autoHideScrollBar: !0,
      disabledOpacity: .4,
      disabledBackground: B.disabledBackground,
      toolTipDelay: 800,
      toolTipContinual: !1,
      lineCap: "butt",
      lineJoin: "round",
      imageGradient: "linear.northeast",
      dashPattern: [16, 16],
      animDuration: 200,
      animEasing: function (i) {
        return i * i
      }, labelColor: Cj,
      labelSelectColor: Od,
      labelFont: (h ? "15" : "12") + "px arial, sans-serif",
      widgetIndent: h ? 30 : 20,
      widgetRowHeight: h ? 30 : 20,
      widgetHeaderHeight: h ? 32 : 22,
      widgetTitleHeight: h ? 34 : 24,
      scrollBarColor: yk,
      scrollBarSize: 7,
      scrollBarTimeout: 1e3,
      scrollBarMinLength: 20,
      scrollBarInteractiveSize: h ? 32 : 16,
      zoomIncrement: 1.3,
      scrollZoomIncrement: 1.05,
      pinchZoomIncrement: 1.08,
      zoomMax: 20,
      zoomMin: .01,
      segmentResolution: 12,
      shapeResolution: 24,
      shapeSide: 24,
      intersectionLineRect: ze,
      intersectionLineLine: Bn,
      getVersion: function () {
        return "5.2"
      }, setCompType: function (c, a) {
        Eq[c] = a
      }, getCompType: function (l) {
        return Eq[l]
      }, numberListener: function () {
        var $ = {
          46: 1,
          8: 1,
          9: 1,
          27: 1,
          13: 1,
          109: 1,
          110: 1,
          189: 1,
          190: 1
        };
        return function (_) {
          var h = _.keyCode;
          $[h] || 65 === h && H.isCtrlDown(_) || h >= 35 && 39 >= h || (_.shiftKey || 48 > h || h > 57) && (96 > h || h > 105) && _.preventDefault()
        }
      }(),
      preventDefault: function (h) {
        var I = h.target.tagName;
        ("DIV" === I || "CANVAS" === I) && (h.preventDefault(), h.preventManipulation && h.preventManipulation())
      }, getWindowInfo: function () {
        var g = J.documentElement,
          Y = g && (g.scrollLeft || g.scrollTop) ? g : J.body;
        return {
          target: Y,
          left: Y.scrollLeft,
          top: Y.scrollTop,
          width: D.innerWidth || Y.clientWidth,
          height: D.innerHeight || Y.clientHeight
        }
      }, isDragging: function () {
        return !!qq
      }, isLeftButton: function (y) {
        return h ? !0 : 0 === y.button
      }, getTouchCount: function (X) {
        return h ? X.touches.length : 1
      }, isDoubleClick: function () {
        var c = new Date,
          s = V,
          A = new Date,
          G = V;
        return function (H) {
          if (Bp = new Date, Tm = Bp.getTime(), h) {
            var Z = H.type,
              m = Z + "_isDoubleClick";
            if (H[m] === b) {
              var S = Dr(H);
              "touchstart" === Z ? (H[m] = s && Pq(s, S) < 20 && Tm - c.getTime() < 500, c = Bp, s = S) : (H[m] = G && Pq(G, S) < 20 && Tm - A.getTime() < 500, A = Bp, G = S)
            }
            return H[m]
          }
          return 2 === H.detail
        }
      }(),
      isShiftDown: function (N) {
        return N ? N.shiftKey : $f["16"]
      }, isCtrlDown: function (n) {
        return n ? U ? n.metaKey : n.ctrlKey : U ? $f["91"] : $f["17"]
      }, getClientPoint: function (Z) {
        return h && (Z = Dc(Z)), {
          x: Z.clientX,
          y: Z.clientY
        }
      }, getPagePoint: function (p) {
        return h && (p = Dc(p)), {
          x: p.pageX,
          y: p.pageY
        }
      }, createObject: function (r, M) {
        var o = new r;
        for (var j in M) {
          var I = Bi(j),
            z = M[j];
          o[I] ? (o[I](z), "setToolTip" === I && o.enableToolTip && o.enableToolTip()) : o[j] = z
        }
        return o
      }, setImage: function (d, s, O, Z) {
        var k = arguments.length;
        4 === k ? ab(d, Z, s, O) : 2 === k ? hn(s) ? ab(d, s) : ed[d] = s : 1 === k && ab(d, d)
      }, getImage: function (N, P) {
        var T;
        if (N == V) return V;
        if (or(N) ? T = N : (T = ed[N], N && T === b && (Om && Om[N] || ab(N, N))), P && T && T.tagName) {
          T.colors || (T.colors = {});
          var x = T.colors[P];
          return x || (x = cd(T, wj(P), T.width, T.height), T.colors[P] = x), x
        }
        return T
      }, getId: function () {
        var w = 1;
        return function () {
          return ++w
        }
      }(),
      callLater: function (H, j, $, t) {
        var Q = function () {
          H.apply(j, $)
        };
        return t ? w(Q, t) : D.requestAnimationFrame(Q)
      }, asyncEach: function (t, U, j) {
        "function" != typeof j && (j = Function.prototype);
        var F = new Array(t.length),
          l = 0,
          V = !1;
        t.forEach(function (f, R) {
          U(f, function (n, N) {
            return V ? void 0 : n ? (V = !0, j(null)) : (F[R] = N, l++, l === t.length ? j(F) : void 0)
          })
        })
      }, xhrLoad: function (f, c, Z) {
        qp(f) || (f = [f]), f.length;
        var b = Z && Z.sync;
        _j(f, function (g, M) {
          var B = new XMLHttpRequest;
          B.overrideMimeType("text/plain"), B.open("GET", g, !b), B.onload = function (o) {
            200 === this.status || 0 === this.status ? M(null, o.target.response) : M(!0)
          }, B.onerror = function () {
            M(!0)
          }, B.send(null)
        }, function (t) {
          "function" == typeof c && c(t)
        })
      }, clone: function (S) {
        if (!S) return V;
        if (qp(S)) return S.slice(0);
        if (or(S)) {
          var G, r = {};
          for (G in S) r[G] = S[G];
          return r
        }
        return S
      }, handleImageLoaded: function () {}, handleUnfoundImage: function () {}, sortFunc: function (l, J) {
        if (l === J) return 0;
        if (l == V && J != V) return 1;
        if (l != V && J == V) return -1;
        if (l == V && J == V) return 0;
        var U, h = typeof l,
          e = typeof J;
        return h === El && e === El ? U = l.localeCompare(J) : h === mr && e === mr && (U = l - J), U === b && (U = ("" + l).localeCompare("" + J)), U > 0 ? 1 : 0 > U ? -1 : 0
      }, getClassMap: function () {
        return dc
      }, getClass: function (Q) {
        if (hn(Q)) {
          var r, a = dc[Q];
          if (!a) {
            r = Q.split("."), a = D;
            for (var k = 0; k < r.length; k++) a = a[r[k]];
            dc[Q] = a
          }
          return a
        }
        return Q
      }, def: function (e, I, O) {
        var J, E, L, j = function () {};
        if (j.prototype = I.prototype, J = new j, hn(e)) {
          if (dc[e]) throw "'" + e + "' alreay defined";
          L = Ek(e), J.getClassName = function () {
            return e
          }
        } else L = e; if (J.constructor = L, J.getClass = function () {
          return L
        }, J.getSuperClass = function () {
          return I
        }, O)
          for (E in O) Ho[E] && Ho.hasOwnProperty(E) ? Ho[E](J, O) : J[E] = O[E];
        L.prototype = J, L.superClass = I.prototype
      }, startAnim: function () {
        var e = function (S) {
          S.duration && (S.startTime = Vf()), S.timeId = lo(S.tick, V, V, S.interval)
        };
        return function (R) {
          return R = jh(R), R.easing = R.easing || H.animEasing, R.duration || R.frames || (R.duration = H.animDuration), R.t = 0, R.duration ? R.interval = 0 : (R.frame = 0, R.interval = R.interval || 10), R.tick = function () {
            if (R.duration) {
              var h = (Vf() - R.startTime) / R.duration;
              h > 1 && (h = 1), R.t = h, R.action(R.easing(h), h), 1 === h ? R.stop() : R._isPaused || (R.timeId = lo(R.tick))
            } else R.frame++, h = R.t = R.frame / R.frames, R.action(R.easing(h), h), R.frame < R.frames ? R._isPaused || (R.timeId = lo(R.tick, V, V, R.interval)) : R.stop()
          }, R.resume = function () {
            R._isPaused && (delete R._isPaused, R.duration ? R.t < 1 && (R.startTime = Vf() - R.duration * R.t, R.timeId = lo(R.tick)) : R.frame < R.frames && (R.timeId = lo(R.tick, V, V, R.interval)))
          }, R.pause = function () {
            R._isPaused = !0
          }, R.stop = function (Q) {
            R.isRunning() && (R.duration ? R.t < 1 && Q && (R.t = 1, R.action(R.easing(1))) : R.frame < R.frames && Q && (R.frame = R.frames, R.action(R.easing(1))), R._37o && R._37o(), R.finishFunc && R.finishFunc(), ul(R.timeId, !R.duration), delete R.timeId)
          }, R.isRunning = function () {
            return R.timeId != V
          }, R.delay ? lo(e, V, [R], R.delay) : e(R), R
        }
      }(),
      getTextSize: function () {
        var N = {},
          l = J ? ip().getContext("2d") : V;
        return function (G, B) {
          l.font = G ? G : _l;
          var e = N[l.font];
          return e || (e = 2 * l.measureText("e").width + 4, N[l.font] = e), {
            width: l.measureText(B).width + 4,
            height: e
          }
        }
      }(),
      drawText: function (U, u, d, M, x, S, i, A, F, s) {
        if (u != V) {
          var l = pl(d, u),
            h = {};
          h.y = s && s !== pi ? s === Ud ? S + l.height / 2 : S + A - l.height / 2 : S + A / 2, h.x = F && F !== pg ? F === Hi ? x + i - l.width / 2 : x + i / 2 : x + l.width / 2, ic(U, u, h, d, M)
        }
      }, getDistance: function (W, f) {
        var M = W.length;
        return f ? 3 === M ? C(x(W[0] - f[0]) + x(W[1] - f[1]) + x(W[2] - f[2])) : 2 === M ? C(x(W[0] - f[0]) + x(W[1] - f[1])) : W.z === b ? C(x(f.x - W.x) + x(f.y - W.y)) : C(x(f.x - W.x) + x(f.y - W.y) + x(f.z - W.z)) : 3 === M ? C(x(W[0]) + x(W[1]) + x(W[2])) : 2 === M ? C(x(W[0]) + x(W[1])) : void 0
      }, brighter: function (u, b) {
        return Nk(u, b ? b : 40)
      }, darker: function (F, S) {
        return Nk(F, S ? S : -40)
      }, unionPoint: function (C, z) {
        if (!C) return V;
        if (2 === arguments.length) return C && z ? {
          x: o(C.x, z.x),
          y: o(C.y, z.y),
          width: G(C.x - z.x),
          height: G(C.y - z.y)
        } : V;
        var e = C;
        if (e._as && (e = e._as), e.length === b) return V;
        var D = e.length;
        if (0 >= D) return V;
        for (var m = 1, S = e[0], f = {
          x: S.x,
          y: S.y,
          width: 0,
          height: 0
        }; D > m; m++) {
          S = e[m];
          var R = o(f.x, S.x),
            j = v(f.x + f.width, S.x),
            w = o(f.y, S.y),
            O = v(f.y + f.height, S.y);
          f.x = R, f.y = w, f.width = j - R, f.height = O - w
        }
        return f
      }, unionRect: function (I, q) {
        if (I && !q) return jh(I);
        if (!I && q) return jh(q);
        if (I && q) {
          var u = {
            x: o(I.x, q.x),
            y: o(I.y, q.y)
          };
          return u.width = v(I.x + I.width, q.x + q.width) - u.x, u.height = v(I.y + I.height, q.y + q.height) - u.y, u
        }
        return V
      }, containsPoint: function (i, a) {
        return !(!i || a.x < i.x || a.y < i.y || a.x > i.x + i.width || a.y > i.y + i.height)
      }, containsRect: function (q, g) {
        if (!q || !g) return !1;
        var H = g.x,
          $ = g.y,
          L = g.width,
          b = g.height,
          j = q.width,
          t = q.height;
        if (0 > (j | t | L | b)) return !1;
        var B = q.x,
          I = q.y;
        if (B > H || I > $) return !1;
        if (j += B, L += H, H >= L) {
          if (j >= B || L > j) return !1
        } else if (j >= B && L > j) return !1;
        if (t += I, b += $, $ >= b) {
          if (t >= I || b > t) return !1
        } else if (t >= I && b > t) return !1;
        return !0
      }, intersectsRect: function (S, z) {
        if (!S || !z) return !1;
        var H = z.width,
          J = z.height,
          $ = S.width,
          f = S.height;
        if (0 >= $ || 0 >= f || 0 >= H || 0 >= J) return !1;
        var r = z.x,
          b = z.y,
          K = S.x,
          s = S.y;
        return $ += K, f += s, H += r, J += b, $ > r && f > b && H > K && J > s
      }, intersection: function (d, f) {
        if (!d || !f) return V;
        var Z = f.x,
          z = f.y,
          x = d.x,
          v = d.y,
          B = Z,
          M = z,
          F = x,
          Y = v;
        return B += f.width, M += f.height, F += d.width, Y += d.height, x > Z && (Z = x), v > z && (z = v), B > F && (B = F), M > Y && (M = Y), B -= Z, M -= z, 0 >= B || 0 >= M ? V : {
          x: Z,
          y: z,
          width: B,
          height: M
        }
      }, grow: function (Q, Y) {
        Q.x -= Y, Q.y -= Y, Q.width = Q.width + 2 * Y, Q.height = Q.height + 2 * Y
      }, getLogicalPoint: function (z, n, N, C, P, f) {
        var j = n.getBoundingClientRect();
        return z = h ? Dc(z) : z, {
          x: (z.clientX - j.left + n.scrollLeft - (N || 0)) / (P || 1),
          y: (z.clientY - j.top + n.scrollTop - (C || 0)) / (f || 1)
        }
      }, removeHTML: function () {
        var m;
        return function (w) {
          return w && w.parentNode ? m === w ? !0 : (m = w, w.parentNode.removeChild(w), m = V, !0) : !1
        }
      }(),
      getToolTipDiv: function () {
        if (!Yn) {
          Yn = Jd(), be = Jd();
          var W = Yn.style;
          H.baseZIndex != V && (W.zIndex = P(H.baseZIndex) + 3 + ""), W.whiteSpace = "nowrap", W.color = H.toolTipLabelColor, W.background = H.toolTipBackground, W.font = H.toolTipLabelFont, W.padding = "5px", W.boxShadow = "0px 0px 3px " + H.toolTipShadowColor
        }
        return Yn
      }, isToolTipShowing: function () {
        return Yn && Yn.parentNode ? !0 : be && be.parentNode ? !0 : !1
      }, hideToolTip: function () {
        Wj(Yn), Wj(be), Cr()
      }, showToolTip: function (c, P) {
        if (!c || P == V) return hm(), void 0;
        H.getToolTipDiv();
        var A, Z;
        if (P.html ? (P = P.html, A = be, Wj(Yn)) : (A = Yn, Wj(be)), Z = A.style, A.innerHTML = P, A.parentNode || ni(J.body, A), c.target) {
          c = Dp(c);
          var y = am(),
            g = c.x,
            d = c.y,
            S = h ? 60 : 12;
          if (h) {
            var U = A.getBoundingClientRect();
            Z.left = g - U.width / 2 + op, Z.top = d - U.height - S < y.top ? d + S + op : d - U.height - S + op
          } else {
            Z.left = g + S + op, Z.top = d + S + op;
            var U = A.getBoundingClientRect();
            U.left + U.width > y.width && (Z.left = g - S - U.width + op), U.top + U.height > y.height && (Z.top = d - S - U.height + op), U.left < 0 && (Z.left = g + S + op), U.top < 0 && (Z.top = d + S + op)
          }
        } else Z.left = c.x + op, Z.top = c.y + op;
        Cr()
      }, startDragging: function ($, a) {
        $ !== qq && (qq ? h ? qq.handleWindowTouchEnd(a) : qq.handleWindowMouseUp(a) : h ? (D.addEventListener(mh, xq, !1), D.addEventListener(Zi, Ip, !1)) : (D.addEventListener(Ih, Kb, !1), D.addEventListener(jp, Xo, !1)), qq = $)
      }, getImageMap: function () {
        return ed
      }, toBoundaries: function (A, c, R, l) {
        var t = [];
        return Wo(A, c, R, l).forEach(function (M) {
          var w = [];
          M.forEach(function (F) {
            w.push(F.x, F.y)
          }), t.push(w)
        }), t
      }, getCurrentKeyCodeMap: function () {
        return $f
      }, drawCenterImage: function (v, J, O, n, w, $, H) {
        var C = lc(J, w),
          z = Ec(J, w);
        ts(v, J, c(O - C / 2), c(n - z / 2), C, z, w, $, H)
      }, drawStretchImage: function (j, y, t, Q, u, U, A, v, $, r) {
        var q, E = lc(y, v),
          i = Ec(y, v);
        "uniform" === t ? (q = o(U / E, A / i), E *= q, i *= q, Q += c((U - E) / 2), u += c((A - i) / 2), U = E, A = i) : t === ho && ((E > U || i > A) && (q = o(U / E, A / i), E *= q, i *= q), Q += c((U - E) / 2), u += c((A - i) / 2), U = E, A = i), ts(j, y, Q, u, U, A, v, $, r)
      }, toCanvas: function (a, g, V, N, L, j, Q) {
        a = ye(a, Q), g = g || lc(a, L), V = V || Ec(a, L);
        var i = ip();
        We(i, g, V, 1);
        var B = Wl(i);
        return Rm(B, a, N, 0, 0, g, V, L, j, Q), B.restore(), i
      }, createElement: function (A, T, X, S) {
        var Z = J.createElement(A);
        return Iq(Z, T || B.widgetBorder, 2), Z.style.font = X ? X : _l, S != V && (Z.value = S), Z
      }, containedInView: function (I, i) {
        var c = hl(i).getBoundingClientRect();
        return Vb({
          x: c.left,
          y: c.top,
          width: c.width,
          height: c.height
        }, Dr(I))
      }, isIsolating: function () {
        return Ed
      }, setIsolating: function (Z) {
        Ed = Z
      }, toColorData: yn
    }, !0), eq(W, {
      adjustChildrenToTop: 1,
      autoHideScrollBar: 1,
      autoUpdate: 1,
      firstPersonMode: 1,
      ortho: 1,
      strict: 1,
      stickToRight: 1,
      instant: 1,
      closePath: 1,
      hierarchical: 1
    }, !0);
    var Wm = H.disabledOpacity,
      Lg = H.toolTipDelay,
      Ah = H.devicePixelRatio,
      ih = H.autoMakeVisible,
      cl = H.autoHideScrollBar,
      vc = H.imageGradient,
      hh = H.showToolTip,
      hm = H.hideToolTip,
      xj = H.dashPattern,
      Wn = H.lineCap,
      Ll = H.lineJoin,
      Cs = H.labelColor,
      jk = H.labelSelectColor,
      _l = H.labelFont,
      li = H.widgetIndent,
      Qd = H.widgetRowHeight,
      xs = H.widgetHeaderHeight,
      Mn = H.widgetTitleHeight,
      Eg = H.scrollBarColor,
      lk = H.scrollBarSize,
      qc = H.scrollBarTimeout,
      xm = H.scrollBarMinLength,
      an = H.scrollBarInteractiveSize,
      Ld = H.zoomIncrement,
      Fq = H.scrollZoomIncrement,
      vq = H.pinchZoomIncrement,
      Fh = H.zoomMax,
      Hd = H.zoomMin,
      Hh = H.createObject,
      gk = H.preventDefault,
      ro = H.setImage,
      ye = H.getImage,
      Nb = H.drawCenterImage,
      Rm = H.drawStretchImage,
      xp = H.getId,
      lo = H.callLater,
      _j = H.asyncEach,
      Mi = (H.xhrLoad, H.sortFunc),
      jh = H.clone,
      Ek = H.getClass,
      Np = H.startAnim,
      Pr = H.brighter,
      Il = H.darker,
      Uq = H.drawText,
      pl = H.getTextSize,
      co = H.isLeftButton,
      tr = H.getTouchCount,
      Rq = H.isDoubleClick,
      zk = H.isShiftDown,
      $g = H.isCtrlDown,
      Dr = H.getClientPoint,
      Dp = H.getPagePoint,
      Pq = H.getDistance,
      ik = H.unionPoint,
      rr = H.unionRect,
      Vb = H.containsPoint,
      jr = H.containsRect,
      ob = H.intersectsRect,
      Nl = H.intersection,
      am = H.getWindowInfo,
      fn = H.grow,
      jc = H.getLogicalPoint,
      sp = H.startDragging,
      Wj = H.removeHTML,
      No = H.createElement,
      Ok = H.segmentResolution,
      Jg = H.shapeResolution,
      wg = H.shapeSide,
      Vm = H.def,
      Dh = function (V, Q, s) {
        Vm(_ + "." + V, Q, s)
      },
      Cd = function (Q, r) {
        Q.childNodes.forEach(function ($) {
          r($), Cd($, r)
        })
      };
    eq(H, {
      toolTipLabelColor: Cs,
      toolTipLabelFont: _l,
      toolTipBackground: B.toolTipBackground,
      toolTipShadowColor: yk,
      setDevicePixelRatio: function (V) {
        Ah = H.devicePixelRatio = "number" == typeof V ? V : D.devicePixelRatio, Cd(J.body, function (U) {
          var h = U._ht;
          h && h._canvas && (We(h._canvas, h.getWidth(), h.getHeight()), h.redraw ? h.redraw() : h.iv())
        })
      }
    }, !0);
    var us = 1e-6,
      Eh = "undefined" != typeof Uint16Array ? Uint16Array : Array,
      ko = "undefined" != typeof Float32Array ? Float32Array : Array,
      As = function (p, O, q) {
        var k = [p[0] - O[0], p[1] - O[1], p[2] - O[2]];
        if (q) {
          var l = Pq(k);
          l > 0 && (k[0] /= l, k[1] /= l, k[2] /= l)
        }
        return k
      },
      Ei = function (h) {
        return [-h[0], -h[1], -h[2]]
      },
      dj = function (E, p) {
        return 3 === E.length ? E[0] * p[0] + E[1] * p[1] + E[2] * p[2] : E[0] * p[0] + E[1] * p[1]
      },
      Up = function () {
        var O = new ko(16);
        return O[0] = 1, O[1] = 0, O[2] = 0, O[3] = 0, O[4] = 0, O[5] = 1, O[6] = 0, O[7] = 0, O[8] = 0, O[9] = 0, O[10] = 1, O[11] = 0, O[12] = 0, O[13] = 0, O[14] = 0, O[15] = 1, O
      },
      id = Up(),
      Co = function (V) {
        var l = new ko(16);
        return l[0] = V[0], l[1] = V[1], l[2] = V[2], l[3] = V[3], l[4] = V[4], l[5] = V[5], l[6] = V[6], l[7] = V[7], l[8] = V[8], l[9] = V[9], l[10] = V[10], l[11] = V[11], l[12] = V[12], l[13] = V[13], l[14] = V[14], l[15] = V[15], l
      },
      hf = function (C, $) {
        return C[0] = $[0], C[1] = $[1], C[2] = $[2], C[3] = $[3], C[4] = $[4], C[5] = $[5], C[6] = $[6], C[7] = $[7], C[8] = $[8], C[9] = $[9], C[10] = $[10], C[11] = $[11], C[12] = $[12], C[13] = $[13], C[14] = $[14], C[15] = $[15], C
      },
      mf = function (J) {
        return J[0] = 1, J[1] = 0, J[2] = 0, J[3] = 0, J[4] = 0, J[5] = 1, J[6] = 0, J[7] = 0, J[8] = 0, J[9] = 0, J[10] = 1, J[11] = 0, J[12] = 0, J[13] = 0, J[14] = 0, J[15] = 1, J
      },
      ac = function (H, M) {
        var B = H[0],
          n = H[1],
          G = H[2];
        return H[0] = M[0] * B + M[4] * n + M[8] * G + M[12], H[1] = M[1] * B + M[5] * n + M[9] * G + M[13], H[2] = M[2] * B + M[6] * n + M[10] * G + M[14], H
      },
      ml = function (r, Q) {
        var v = r[0],
          Y = r[1],
          L = r[2],
          i = r[3];
        return r[0] = Q[0] * v + Q[4] * Y + Q[8] * L + Q[12] * i, r[1] = Q[1] * v + Q[5] * Y + Q[9] * L + Q[13] * i, r[2] = Q[2] * v + Q[6] * Y + Q[10] * L + Q[14] * i, r[3] = Q[3] * v + Q[7] * Y + Q[11] * L + Q[15] * i, r
      },
      tl = function () {
        var y, P, X, m, n = xc(On[1] + On[7]),
          z = xc(On[0] + On[3] - On[10]),
          K = xc(On[8] + 2),
          O = function () {
            return P = X.charAt(y), y += 1, P
          },
          T = function () {
            var o = "";
            if (P === K)
              for (; O();) {
                if (P === K) return O(), o;
                o += P
              } else O()
          },
          Z = function () {
            for (; P && " " >= P;) O()
          },
          u = function () {
            var d, f = {};
            if (P === n) {
              if (O(), Z(), P === z) return O(), f;
              for (; P;) {
                if (d = T(), Z(), O(), f[d] = m(), Z(), P === z) return O(), f;
                O(), Z()
              }
            }
          };
        return m = function () {
            switch (Z(), P) {
            case n:
              return u();
            default:
              return T()
            }
          },
          function (A) {
            if (g = {}, A) {
              var H;
              if (X = A, y = 0, P = " ", H = m(), Z(), !P) return H
            }
          }
      }(),
      _q = function (b, I) {
        if (I) {
          var o = A(I),
            P = X(I),
            Q = b[4],
            G = b[5],
            L = b[6],
            W = b[7],
            U = b[8],
            w = b[9],
            K = b[10],
            B = b[11];
          b[4] = Q * P + U * o, b[5] = G * P + w * o, b[6] = L * P + K * o, b[7] = W * P + B * o, b[8] = U * P - Q * o, b[9] = w * P - G * o, b[10] = K * P - L * o, b[11] = B * P - W * o
        }
      },
      sc = function (s, m) {
        if (m) {
          var h = A(m),
            n = X(m),
            Y = s[0],
            w = s[1],
            F = s[2],
            q = s[3],
            p = s[8],
            C = s[9],
            $ = s[10],
            G = s[11];
          s[0] = Y * n - p * h, s[1] = w * n - C * h, s[2] = F * n - $ * h, s[3] = q * n - G * h, s[8] = Y * h + p * n, s[9] = w * h + C * n, s[10] = F * h + $ * n, s[11] = q * h + G * n
        }
      },
      eb = function (j, p) {
        if (p) {
          var K = A(p),
            f = X(p),
            B = j[0],
            N = j[1],
            s = j[2],
            k = j[3],
            a = j[4],
            d = j[5],
            H = j[6],
            t = j[7];
          j[0] = B * f + a * K, j[1] = N * f + d * K, j[2] = s * f + H * K, j[3] = k * f + t * K, j[4] = a * f - B * K, j[5] = d * f - N * K, j[6] = H * f - s * K, j[7] = t * f - k * K
        }
      },
      Be = function (p, Q, U) {
        return sk(V, U === !1 ? V : p.s3(), p.r3(), p.getRotationMode(), p.p3(), V, Q)
      },
      sk = function (f, t, h, x, s, Q, U) {
        return Q || (Q = Up()), s && Lk(Q, s), ee(Q, h, x), U && eh(Q, Q, U), t && Xb(Q, t), f && eh(Q, Q, f), Q
      },
      oo = function (u, f, k) {
        f = P(f), k = P(k);
        var K = this;
        K.g = u, K._84O = f, K._85O = k, K._70I = !0, K.F = 0, K._83O = f + k, K.pen = {
          x: 0,
          y: 0
        }
      },
      pp = "lineDashOffset",
      Yb = "setLineDash",
      Hj = function (K) {
        for (var P in K) 1 === P.length && (pp = K[P]);
        return P ? 1 : 0
      },
      Rj = function (f, q, A) {
        return yr(q) ? f : f[Yb] ? (f[Yb](q), A && (f.lineDashOffset = A), f) : new oo(f, q[0], q.length > 1 ? q[1] : q[0])
      },
      ok = function (w, p) {
        !yr(p) && w[Yb] && (w[Yb](lm), w.lineDashOffset = 0)
      };
    if (Vm(oo, d, {
      _69I: 6,
      moveTo: function (h, N) {
        var m = this,
          g = m.pen;
        g.x = h, g.y = N, m.g.moveTo(h, N), m.start || (m.start = {
          x: h,
          y: N
        })
      }, lineTo: function (F, T) {
        var N = this,
          z = N.pen,
          l = F - z.x,
          b = T - z.y,
          g = f(b, l),
          $ = X(g),
          S = A(g),
          W = N._23O(z.x, z.y, F, T),
          h = N._85O,
          u = N._84O,
          i = N._83O;
        if (N.F) {
          if (N.F > W) return N._70I ? N._72I(F, T) : N.moveTo(F, T), N.F -= W, void 0;
          if (N._70I ? N._72I(z.x + $ * N.F, z.y + S * N.F) : N.moveTo(z.x + $ * N.F, z.y + S * N.F), W -= N.F, N.F = 0, N._70I = !N._70I, !W) return
        }
        var Z = M(W / i);
        if (Z) {
          for (var R = $ * u, j = S * u, y = $ * h, w = S * h, s = 0; Z > s; s++) N._70I ? (N._72I(z.x + R, z.y + j), N.moveTo(z.x + y, z.y + w)) : (N.moveTo(z.x + y, z.y + w), N._72I(z.x + R, z.y + j));
          W -= i * Z
        }
        N._70I ? W > u ? (N._72I(z.x + $ * u, z.y + S * u), N.moveTo(F, T), N.F = h - (W - u), N._70I = !1) : (N._72I(F, T), W === u ? (N.F = 0, N._70I = !N._70I) : (N.F = u - W, N.moveTo(F, T))) : W > h ? (N.moveTo(z.x + $ * h, z.y + S * h), N._72I(F, T), N.F = u - (W - h), N._70I = !0) : (N.moveTo(F, T), W === h ? (N.F = 0, N._70I = !N._70I) : N.F = h - W)
      }, quadraticCurveTo: function (U, z, R, S) {
        var u, g = this,
          f = g.pen,
          W = f.x,
          k = f.y,
          b = g._22O(W, k, U, z, R, S),
          _ = 0,
          T = 0,
          s = g._85O,
          N = g._84O;
        if (g.F) {
          if (g.F > b) return g._70I ? g._71I(U, z, R, S) : g.moveTo(R, S), g.F -= b, void 0;
          if (_ = g.F / b, u = g._20O(W, k, U, z, R, S, _), g._70I ? g._71I(u[2], u[3], u[4], u[5]) : g.moveTo(u[4], u[5]), g.F = 0, g._70I = !g._70I, !b) return
        }
        var O = b - b * _,
          B = M(O / g._83O),
          r = N / b,
          E = s / b;
        if (B)
          for (var G = 0; B > G; G++) g._70I ? (T = _ + r, u = g._21O(W, k, U, z, R, S, _, T), g._71I(u[2], u[3], u[4], u[5]), _ = T, T = _ + E, u = g._21O(W, k, U, z, R, S, _, T), g.moveTo(u[4], u[5])) : (T = _ + E, u = g._21O(W, k, U, z, R, S, _, T), g.moveTo(u[4], u[5]), _ = T, T = _ + r, u = g._21O(W, k, U, z, R, S, _, T), g._71I(u[2], u[3], u[4], u[5])), _ = T;
        O = b - b * _, g._70I ? O > N ? (T = _ + r, u = g._21O(W, k, U, z, R, S, _, T), g._71I(u[2], u[3], u[4], u[5]), g.moveTo(R, S), g.F = s - (O - N), g._70I = !1) : (u = g._19O(W, k, U, z, R, S, _), g._71I(u[2], u[3], u[4], u[5]), b === N ? (g.F = 0, g._70I = !g._70I) : (g.F = N - O, g.moveTo(R, S))) : O > s ? (T = _ + E, u = g._21O(W, k, U, z, R, S, _, T), g.moveTo(u[4], u[5]), u = g._19O(W, k, U, z, R, S, T), g._71I(u[2], u[3], u[4], u[5]), g.F = N - (O - s), g._70I = !0) : (g.moveTo(R, S), O === s ? (g.F = 0, g._70I = !g._70I) : g.F = s - O)
      }, bezierCurveTo: function () {
        var d = arguments;
        this.pen = {
          x: d[4],
          y: d[5]
        }, this.g.bezierCurveTo(d[0], d[1], d[2], d[3], d[4], d[5])
      }, arc: function (h, H, v, t, T, I) {
        I || (t = -t, T = -T), xb(this, h, H, t, T - t, v, v, !1)
      }, rect: function (m, N, a, j) {
        var G = this;
        G.pen = {
          x: m,
          y: N
        }, G.moveTo(m, N), G.lineTo(m, N + j), G.lineTo(m + a, N + j), G.lineTo(m + a, N), G.lineTo(m, N)
      }, beginPath: function () {
        this.g.beginPath()
      }, closePath: function () {
        this.lineTo(this.start.x, this.start.y)
      }, _23O: function (a, t, d, V) {
        var l = d - a,
          B = V - t;
        return C(l * l + B * B)
      }, _22O: function (N, j, z, k, R, e, r) {
        for (var S, W, C, U, g, X, w, Q = 0, E = N, q = j, h = r > 0 ? r : this._69I, H = 1; h >= H; H++) C = H / h, U = 1 - C, g = U * U, X = 2 * C * U, w = C * C, S = g * N + X * z + w * R, W = g * j + X * k + w * e, Q += this._23O(E, q, S, W), E = S, q = W;
        return Q
      }, _21O: function (R, B, X, C, F, i, e, $) {
        var r = this;
        if (0 === e) return r._20O(R, B, X, C, F, i, $);
        if (1 === $) return r._19O(R, B, X, C, F, i, e);
        var b = r._20O(R, B, X, C, F, i, $);
        return b.push(e / $), r._19O.apply(r, b)
      }, _20O: function (R, X, K, N, Q, T, t) {
        if (1 !== t) {
          var p = K + (Q - K) * t,
            w = N + (T - N) * t;
          K = R + (K - R) * t, N = X + (N - X) * t, Q = K + (p - K) * t, T = N + (w - N) * t
        }
        return [R, X, K, N, Q, T]
      }, _19O: function (e, U, R, N, n, M, p) {
        if (1 !== p) {
          var J = e + (R - e) * p,
            m = U + (N - U) * p;
          R += (n - R) * p, N += (M - N) * p, e = J + (R - J) * p, U = m + (N - m) * p
        }
        return [e, U, R, N, n, M]
      }, _72I: function (F, A) {
        var Q = this.pen;
        (F !== Q.x || A !== Q.y) && (Q.x = F, Q.y = A, this.g.lineTo(F, A))
      }, _71I: function (_, d, C, e) {
        var W = this.pen;
        (_ !== C || d !== e || C !== W.x || e !== W.y) && (W.x = C, W.y = e, this.g.quadraticCurveTo(_, d, C, e))
      }
    }), E && j) {
      Y = true;
    }
    var bb = B.chart,
      cf = H.compStack = [],
      Ig = /^style@/,
      oh = /^attr@/,
      Qr = /^field@/,
      lc = function (I, m) {
        return I ? Cc(I.width, m) : 0
      },
      Ec = function (i, e) {
        return i ? Cc(i.height, e) : 0
      },
      Cc = function (k, l, o) {
        if (!k || !k.func) return k;
        var f, D = k.func,
          e = k.value;
        return f = Nm(D) ? D(l, o) : l ? Ig.test(D) ? l.s(D.slice(6)) : oh.test(D) ? l.a(D.slice(5)) : Qr.test(D) ? l[D.slice(6)] : l[D] ? l[D](o) : e : e, e !== b && f == V ? e : f
      },
      ts = H.drawImage = function () {
        var h, x, g, a, K, R = function (Z, f, j) {
            var n = Z[f];
            return n && n.func ? (n = Cc(n, x, g), j && (n = j(n))) : j && (n = Z[f] = j(n)), n
          },
          U = function (z, k) {
            var Q = R(z, k);
            if (K && Q) {
              var U = wj(K);
              return Q = yn(Q), "rgba(" + M(Q[0] * U[0]) + "," + M(Q[1] * U[1]) + "," + M(Q[2] * U[2]) + "," + Q[3] + ")"
            }
            return Q
          },
          s = function (n) {
            if (qp(n)) {
              for (var f = new Vq, q = n.length, U = 0; q > U; U += 2) f.add({
                x: n[U],
                y: n[U + 1]
              });
              n = f
            }
            return n
          },
          I = function (_, C) {
            var m = R(_, Pg);
            if (qp(m)) {
              var Q = m.length,
                n = R(_, "relative"),
                v = C.width,
                K = C.height;
              if (4 === Q) m = {
                x: m[0],
                y: m[1],
                width: m[2],
                height: m[3]
              }, n && (m.x *= v, m.y *= K, m.width *= v, m.height *= K);
              else if (3 === Q) {
                var U = m[0];
                m = {
                  width: m[1],
                  height: m[2]
                }, n && (m.width *= v, m.height *= K), U = Vh(U, C, m), m.x = U.x - m.width / 2, m.y = U.y - m.height / 2
              }
              var F = R(_, "offsetX");
              F && (m.x += F), F = R(_, "offsetY"), F && (m.y += F)
            }
            return m
          },
          E = function (H) {
            return qp(H) ? new Vq(H) : H
          },
          Q = function (c, p) {
            if (c) {
              var L = p.x + p.width / 2,
                e = p.y + p.height / 2;
              h.save(), Md(h, L, e), Hf(h, c), Md(h, -L, -e)
            }
          },
          d = function (C) {
            C && h.restore()
          },
          W = function (i, b, t) {
            var E = R(i, "path"),
              c = R(i, Yc),
              G = V,
              e = _f(null, E);
            if (t || (t = i.unionRect, t || (t = ik(e), i.path.func || (i.unionRect = t)), G = t), t) {
              G || (G = i.unionRect, G || (G = ik(e), i.path.func || (i.unionRect = G)));
              var y = io(G, t);
              if (y) Q(c, G);
              else {
                var n = G.width,
                  K = G.height,
                  w = t.width,
                  I = t.height,
                  S = w / n,
                  $ = I / K;
                h.save(), Md(h, t.x + w / 2, t.y + I / 2), h.scale(S, $), c && Hf(h, c), Md(h, -G.x - n / 2, -G.y - K / 2)
              }
              var x = R(i, "borderPattern"),
                s = Rj(h, x),
                T = U(i, "background"),
                k = U(i, "borderColor"),
                Z = R(i, "borderWidth"),
                D = R(i, "gradient"),
                q = U(i, "gradientColor"),
                P = R(i, "border3d"),
                g = R(i, "border3dColor"),
                Y = R(i, "border3dAccuracy"),
                F = h.lineJoin,
                O = h.lineCap;
              if (h.lineJoin = R(i, "borderJoin") || Ll, h.lineCap = R(i, "borderCap") || Wn, T ? (Mg(h, T, D, q, G), _f(h, E), h.fill(), s !== h && _f(h, E)) : _f(h, E), Z && k && (h.lineWidth = Z, h.strokeStyle = k, h.stroke(), P && pk(h, k, g, Z, a, Y)), ok(h, x), R(i, "dash")) {
                var N = R(i, "dashWidth") || Z;
                if (N > 0) {
                  x = R(i, "dashPattern") || xj;
                  var s = Rj(h, x, R(i, "dashOffset")),
                    B = R(i, "dashColor") || Pk;
                  s !== h && _f(h, E), h.strokeStyle = B, h.lineWidth = N, h.stroke(), R(i, "dash3d") && pk(h, B, R(i, "dash3dColor"), N, a, R(i, "dash3dAccuracy")), ok(h, x)
                }
              }
              b === Pg && Ap(h, T, R(i, "depth"), G), h.lineJoin = F, h.lineCap = O, y ? d(c) : h.restore()
            }
          },
          O = function (I, O, t) {
            var G = R(I, Yi, s),
              D = R(I, Yc),
              x = O === Wd,
              b = V;
            if (!t && x && (t = I.unionRect, t || (t = ik(G), I.points.func || (I.unionRect = t)), b = t), t) {
              x ? b || (b = I.unionRect, b || (b = ik(G), I.points.func || (I.unionRect = b))) : b = t;
              var X = io(b, t);
              if (X) Q(D, b);
              else {
                var u = b.width,
                  g = b.height,
                  M = t.width,
                  q = t.height,
                  W = M / u,
                  N = q / g;
                h.save(), Md(h, t.x + M / 2, t.y + q / 2), h.scale(W, N), D && Hf(h, D), Md(h, -b.x - u / 2, -b.y - g / 2)
              }
              var F, e, n, l, w = R(I, "borderPattern"),
                C = Rj(h, w),
                y = U(I, "background"),
                f = ye(R(I, "repeatImage"), K),
                Y = U(I, "borderColor"),
                i = R(I, "borderWidth"),
                A = R(I, "segments", E),
                k = R(I, "gradient"),
                o = U(I, "gradientColor"),
                j = R(I, "border3d"),
                c = R(I, "border3dColor"),
                r = R(I, "border3dAccuracy"),
                B = R(I, "closePath"),
                L = h.lineJoin,
                z = h.lineCap;
              if (h.lineJoin = R(I, "borderJoin") || Ll, h.lineCap = R(I, "borderCap") || Wn, x ? y || f ? (f ? $q(h, f) : Mg(h, y, k, o, b), Mj(h, G, A, B), h.fill(), C !== h && Mj(C, G, A, B)) : Mj(C, G, A, B) : ("roundRect" === O ? F = R(I, "cornerRadius") : "polygon" === O ? F = R(I, "polygonSide") : "arc" === O && (F = R(I, "arcFrom"), e = R(I, "arcTo"), n = R(I, "arcClose"), l = R(I, "arcOval")), y || f ? (f ? $q(h, f) : Mg(h, y, k, o, b), Oc(h, O, b, F, e, n, l), h.fill(), h !== C && Oc(C, O, b, F, e, n, l)) : Oc(C, O, b, F, e, n, l)), i && Y && (h.lineWidth = i, h.strokeStyle = Y, h.stroke(), j && pk(h, Y, c, i, a, r)), ok(h, w), R(I, "dash")) {
                var H = R(I, "dashWidth") || i;
                if (H > 0) {
                  w = R(I, "dashPattern") || xj;
                  var C = Rj(h, w, R(I, "dashOffset")),
                    $ = R(I, "dashColor") || Pk;
                  C !== h && (x ? Mj(C, G, A, B) : Oc(C, O, b, F, e, n, l)), h.strokeStyle = $, h.lineWidth = H, h.stroke(), R(I, "dash3d") && pk(h, $, R(I, "dash3dColor"), H, a, R(I, "dash3dAccuracy")), ok(h, w)
                }
              }
              O === Pg && Ap(h, y, R(I, "depth"), b), h.lineJoin = L, h.lineCap = z, X ? d(D) : h.restore()
            }
          },
          l = function (z, k) {
            var l = K,
              e = K || R(z, nc),
              C = ye(R(z, "name"), e);
            C && (Rm(h, C, R(z, "stretch"), k.x, k.y, k.width, k.height, x, g, e), K = l)
          },
          e = function (H, O) {
            var n = R(H, "text");
            n != V && Uq(h, n, R(H, "font"), U(H, nc), O.x, O.y, O.width, O.height, R(H, "align"), R(H, "vAlign"))
          },
          Y = function (O, w) {
            In(h, U(O, nc), w.x, w.y, w.width, w.height, R(O, "width"))
          },
          C = function (z, K) {
            var m = R(z, ws),
              $ = 0;
            if (m && (m.forEach(function (Y) {
              $ += Y
            }), $ > 0)) {
              for (var Q = R(z, "colors") || bb, q = R(z, "startAngle") || 0, v = R(z, "hollow"), g = R(z, Rg), Z = R(z, jm), S = R(z, Rh), k = g ? new Vq : V, T = K.x, t = K.y, E = K.width, s = K.height, D = T + E / 2, r = t + s / 2, M = o(E, s) / 2, j = 0, I = 0; I < m.length; I++) {
                var b = m[I],
                  l = i * b / $,
                  P = q + l;
                if (h.fillStyle = Q[j++], j === Q.length && (j = 0), h.beginPath(), v) {
                  var J = D + X(q) * M / 2,
                    _ = r + A(q) * M / 2,
                    W = D + X(P) * M,
                    f = r + A(P) * M;
                  h.moveTo(J, _), h.arc(D, r, M / 2, q, P, !1), h.lineTo(W, f), h.arc(D, r, M, P, q, !0)
                } else h.moveTo(D, r), h.arc(D, r, M, P, q, !0);
                k && (l = (q + P) / 2, k.add({
                  text: Nm(g) ? g(b, I, $, x) : b,
                  x: D + .75 * X(l) * M,
                  y: r + .75 * A(l) * M
                })), h.closePath(), h.fill(), q = P
              }
              k && k.each(function (a) {
                Uq(h, a.text, Z, S, a.x, a.y, 0, 0, km)
              })
            }
          },
          z = function (k, f) {
            var n = R(k, kh);
            if (n && n.length > 0) {
              var j = n.length,
                I = R(k, Rg),
                E = R(k, jm),
                p = R(k, Rh),
                m = I ? new Vq : V,
                S = R(k, "minValue") || 0,
                G = R(k, "maxValue");
              if (G == V && (G = 0, n.forEach(function (V) {
                V.values.forEach(function (W) {
                  G = v(G, W)
                })
              })), S === G) return;
              for (var s = f.height / (G - S), y = f.y + G * s, O = R(n[0], ws).length, K = f.width / (3 * O + 1), z = 2 * K / j, C = 0, P = 0; j > P; P++)
                for (var o = n[P], e = R(o, nc), Y = R(o, "colors"), F = R(o, ws), L = 0; O > L; L++) {
                  Y ? h.fillStyle = Y[L] : e ? h.fillStyle = e : (h.fillStyle = bb[C++], C === bb.length && (C = 0));
                  var B = F[L],
                    D = B * s,
                    l = f.x + (1 + 3 * L) * K + P * z;
                  if (en(h, l, y - D, z, D), m) {
                    var r = Nm(I) ? I(B, L, o, x) : B,
                      g = pl(E, r).height;
                    m.add({
                      x: l,
                      y: y - D - g,
                      width: z,
                      height: g,
                      text: r
                    })
                  }
                }
              m && m.each(function (u) {
                Uq(h, u.text, E, p, u.x, u.y, u.width, u.height, km)
              })
            }
          },
          q = function (p, O) {
            var k = R(p, kh);
            if (k && k.length > 0) {
              var $ = k.length,
                B = R(k[0], ws).length,
                s = O.width / (3 * B + 1),
                W = 0,
                j = R(p, "maxValue"),
                y = R(p, Rg),
                N = R(p, jm),
                u = R(p, Rh),
                U = y ? new Vq : V;
              if (j == V) {
                j = 0;
                for (var Y = 0; B > Y; Y++) {
                  for (var P = 0, T = 0; $ > T; T++) P += R(k[T], ws)[Y];
                  j = v(j, P)
                }
              }
              if (j > 0) {
                for (var Y = 0; B > Y; Y++)
                  for (var l = O.y + O.height, T = 0; $ > T; T++) {
                    var E = k[T],
                      D = R(E, nc),
                      I = R(E, ws)[Y],
                      c = I / j * O.height;
                    D ? h.fillStyle = D : (h.fillStyle = bb[W++], W === bb.length && (W = 0)), l -= c;
                    var i = {
                      x: O.x + (1 + 3 * Y) * s,
                      y: l,
                      width: 2 * s,
                      height: c
                    };
                    en(h, i.x, i.y, i.width, i.height), U && (i.text = Nm(y) ? y(I, Y, E, x) : I, U.add(i))
                  }
                U && U.each(function (k) {
                  Uq(h, k.text, N, u, k.x, k.y, k.width, k.height, km)
                })
              }
            }
          },
          p = function (i, B) {
            var v = R(i, kh);
            if (v && v.length > 0) {
              for (var S = v.length, E = R(v[0], ws).length, n = B.width / (3 * E + 1), f = 0, k = R(i, Rg), m = R(i, jm), _ = R(i, Rh), K = k ? new Vq : V, u = 0; E > u; u++) {
                for (var G = 0, L = 0; S > L; L++) G += R(v[L], ws)[u];
                if (G > 0) {
                  var T = B.y + B.height;
                  for (L = 0; S > L; L++) {
                    var C = v[L],
                      s = R(C, nc),
                      j = R(C, ws)[u],
                      M = j / G * B.height;
                    s ? h.fillStyle = s : (h.fillStyle = bb[f++], f === bb.length && (f = 0)), T -= M;
                    var Y = {
                      x: B.x + (1 + 3 * u) * n,
                      y: T,
                      width: 2 * n,
                      height: M
                    };
                    en(h, Y.x, Y.y, Y.width, Y.height), K && (Y.text = Nm(k) ? k(j, u, C, x) : j, K.add(Y))
                  }
                }
              }
              K && K.each(function (n) {
                Uq(h, n.text, m, _, n.x, n.y, n.width, n.height, km)
              })
            }
          },
          _ = function (D, p) {
            var r = R(D, kh);
            if (r && r.length > 0) {
              var d = r.length,
                L = R(D, "minValue") || 0,
                g = R(D, "maxValue");
              if (g == V && (g = 0, r.forEach(function (V) {
                V.values.forEach(function (J) {
                  g = v(g, J)
                })
              })), L === g) return;
              for (var o = p.height / (g - L), q = p.y + g * o, X = R(r[0], ws).length, S = p.width / (3 * X + 1), N = 0, s = R(D, "lineWidth") || 2, j = R(D, "line3d"), I = R(D, "linePoint"), F = R(D, Rg), c = R(D, jm), B = R(D, Rh), J = 0; d > J; J++) {
                var W = r[J],
                  y = R(W, nc),
                  k = R(W, ws);
                y ? h.strokeStyle = y : (y = h.strokeStyle = bb[N++], N === bb.length && (N = 0)), h.beginPath();
                for (var E = 0; X > E; E++) {
                  var n = p.x + (2 + 3 * E) * S,
                    $ = q - k[E] * o;
                  0 === E ? h.moveTo(n, $) : h.lineTo(n, $)
                }
                if (h.lineWidth = s, h.stroke(), j && pk(h, y, V, s, a), I || F) {
                  var Q, l = s / 2 + 2;
                  for (E = 0; X > E; E++) {
                    var T = k[E];
                    if (n = p.x + (2 + 3 * E) * S, $ = q - T * o, Nm(I) ? I(h, n, $, y, E, W, x) : I && (h.fillStyle = y, h.beginPath(), h.arc(n, $, l, 0, i, !0), h.fill()), Nm(F) ? Q = F(T, E, W, x) : F && (Q = T), Q) {
                      var K = pl(c, Q).height,
                        A = h.shadowBlur;
                      if (A) {
                        var Y = h.shadowOffsetX,
                          f = h.shadowOffsetY,
                          e = h.shadowColor;
                        h.shadowOffsetX = 0, h.shadowOffsetY = 0, h.shadowBlur = 0, h.shadowColor = V
                      }
                      Uq(h, Q, c, B, n, $ - K - l + 2, 0, K, km), A && (h.shadowOffsetX = Y, h.shadowOffsetY = f, h.shadowColor = e, h.shadowBlur = A)
                    }
                  }
                }
              }
            }
          },
          Z = {
            border: Y,
            image: l,
            text: e,
            pieChart: C,
            columnChart: z,
            stackedColumnChart: q,
            percentageColumnChart: p,
            lineChart: _
          };
        return function (F, U, f, s, n, L, N, A, j) {
          if (U && n && L) {
            if (h = F, x = N, g = A, a = g ? g._zoom ? g._zoom : 1 : 1, K = j, U.tagName) return h.drawImage(U, f, s, n, L), void 0;
            if (R(U, "visible") !== !1) {
              K || (K = Cc(U.color, x, g));
              var u = lc(U, x),
                b = Ec(U, x),
                k = {
                  x: 0,
                  y: 0,
                  width: u,
                  height: b
                },
                y = R(U, "clip"),
                D = R(U, "opacity");
              h.save(), Md(h, f, s), (u !== n || b !== L) && h.scale(n / u, L / b), y && (Nm(y) ? y(h, u, b, x, g, U) : (h.beginPath(), h.rect(0, 0, u, b), h.clip())), D != V && (h.globalAlpha *= D), R(U, "comps").forEach(function (D) {
                if (R(D, gj) !== !1) {
                  cf.splice(0, 0, D);
                  var n = R(D, "opacity"),
                    M = R(D, "shadow"),
                    Y = R(D, "type"),
                    y = I(D, k);
                  if (n != V) {
                    var o = h.globalAlpha;
                    h.globalAlpha *= n
                  }
                  if (M) {
                    var S = h.shadowOffsetX,
                      q = h.shadowOffsetY,
                      L = h.shadowBlur,
                      u = h.shadowColor,
                      A = R(D, "shadowOffsetX"),
                      e = R(D, "shadowOffsetY"),
                      r = R(D, "shadowBlur"),
                      T = R(D, "shadowColor");
                    h.shadowOffsetX = A == V ? 3 : A, h.shadowOffsetY = e == V ? 3 : e, h.shadowBlur = r == V ? 6 : r, h.shadowColor = T || yk
                  }
                  if (Nm(Y)) Y(h, y, D, x, g);
                  else if (H.getCompType(Y)) H.getCompType(Y)(h, y, D, x, g);
                  else if (Di[Y] || Y === Wd) O(D, Y, y);
                  else if ("SVGPath" === Y) W(D, Y, y);
                  else if (Z[Y] && y) {
                    var U = R(D, Yc);
                    Q(U, y), Z[Y](D, y), d(U)
                  }
                  M && (h.shadowOffsetX = S, h.shadowOffsetY = q, h.shadowBlur = L, h.shadowColor = u), n != V && (h.globalAlpha = o), cf.splice(0, 1)
                }
              }), h.restore()
            }
          }
        }
      }();
    H.getCurrentComp = function () {
        return cf[0]
      }, H.getParentComp = function () {
        return cf[1]
      }, H.getInternal = function () {
        return {
          isEnter: ad,
          isEsc: _o,
          isSpace: tq,
          isLeft: bj,
          isUp: hb,
          isRight: Lr,
          isDown: ig,
          addMethod: eq,
          superCall: gr,
          toPointsArray: Wo,
          translateAndScale: je,
          appendArray: wh,
          createWorldMatrix: sk,
          vec3TransformMat4: ac,
          setCanvas: We,
          createDiv: Jd,
          createView: df,
          createCanvas: ip,
          createImage: vp,
          initContext: Wl,
          layout: ke,
          fillRect: en,
          Mat: Jb,
          drawBorder: In,
          isString: hn,
          setBorder: Iq,
          getPropertyValue: Ac,
          setPropertyValue: wk,
          drawVerticalLine: Rf,
          draw3DRect: Ap,
          getPinchDist: dh,
          isSameRect: io,
          getPosition: Vh,
          intersectionLineRect: ze,
          getNodeRect: wc,
          getImageWidth: lc,
          getImageHeight: Ec,
          formatNumber: Sb,
          initItemElement: xl,
          drawPoints: Mj,
          createG2: Rj,
          closePopup: no,
          isH: Yd,
          createAnim: sg,
          createNormalMatrix: yh,
          createNormals: kc,
          toFloatArray: ks,
          glMV: Tf,
          batchShape: Uo,
          createNodeMatrix: Be,
          getFaceInfo: Mm,
          transformAppend: _e,
          drawFaceInfo: nq,
          to3dPointsArray: rs,
          setGLDebugMode: function (D) {
            hj = D
          }, cube: function () {
            return {
              vs: Vj,
              is: Xm,
              uv: vk
            }
          }, ui: function () {
            return {
              DataUI: fm,
              NodeUI: di,
              EdgeUI: vg,
              GroupUI: Pd,
              ShapeUI: qf,
              GridUI: Pj,
              Data3dUI: Fp,
              Node3dUI: eg,
              Shape3dUI: re
            }
          }, getInternalVersion: function () {
            return "U2FsdGVkX18V9dMc2RTZnKL2LQXxdn86TppHEIbAw9PFw5KawE/c1TAWmxpBiZUs"
          }, getDragger: function () {
            return qq
          }, addMSMap: function (l) {
            eq(Ho, l)
          }, k: n
        }
      },
      function (m) {
        function c(k, Q) {
          k != V && (Q == V && El != typeof k ? this._54O(k, 256) : this._54O(k, Q))
        }

        function z() {
          return new c(V)
        }

        function f(l, T, E, P, v, k) {
          for (; --k >= 0;) {
            var G = T * this[l++] + E[P] + v;
            v = M(G / 67108864), E[P++] = 67108863 & G
          }
          return v
        }

        function y(k, S, C, i, I, V) {
          for (var f = 32767 & S, R = S >> 15; --V >= 0;) {
            var q = 32767 & this[k],
              W = this[k++] >> 15,
              L = R * q + W * f;
            q = f * q + ((32767 & L) << 15) + C[i] + (1073741823 & I), I = (q >>> 30) + (L >>> 15) + R * W + (I >>> 30), C[i++] = 1073741823 & q
          }
          return I
        }

        function u(C, k, h, E, X, L) {
          for (var N = 16383 & k, n = k >> 14; --L >= 0;) {
            var m = 16383 & this[C],
              G = this[C++] >> 14,
              o = n * m + G * N;
            m = N * m + ((16383 & o) << 14) + h[E] + X, X = (m >> 28) + (o >> 14) + n * G, h[E++] = 268435455 & m
          }
          return X
        }

        function b(H) {
          return pn.charAt(H)
        }

        function Z(s, M) {
          var X = Up[s.charCodeAt(M)];
          return X == V ? -1 : X
        }

        function q(G) {
          for (var T = this.t - 1; T >= 0; --T) G[T] = this[T];
          G.t = this.t, G.s = this.s
        }

        function N(k) {
          this.t = 1, this.s = 0 > k ? -1 : 0, k > 0 ? this[0] = k : -1 > k ? this[0] = k + this.DV : this.t = 0
        }

        function T(b) {
          var O = z();
          return O._58O(b), O
        }

        function U(f, E) {
          var e, m = this;
          if (16 == E) e = 4;
          else if (8 == E) e = 3;
          else if (256 == E) e = 8;
          else if (2 == E) e = 1;
          else if (32 == E) e = 5;
          else {
            if (4 != E) return m.fromRadix(f, E), void 0;
            e = 2
          }
          m.t = 0, m.s = 0;
          for (var M = f.length, t = !1, h = 0; --M >= 0;) {
            var n = 8 == e ? 255 & f[M] : Z(f, M);
            0 > n ? "-" == f.charAt(M) && (t = !0) : (t = !1, 0 == h ? m[m.t++] = n : h + e > m.DB ? (m[m.t - 1] |= (n & (1 << m.DB - h) - 1) << h, m[m.t++] = n >> m.DB - h) : m[m.t - 1] |= n << h, h += e, h >= m.DB && (h -= m.DB))
          }
          8 == e && 0 != (128 & f[0]) && (m.s = -1, h > 0 && (m[m.t - 1] |= (1 << m.DB - h) - 1 << h)), m._57O(), t && c.ZERO._78O(m, m)
        }

        function J() {
          for (var h = this, O = h.s & h.DM; h.t > 0 && h[h.t - 1] == O;)--h.t
        }

        function l(N) {
          var e = this;
          if (e.s < 0) return "-" + e._85O()[rm](N);
          var z;
          if (16 == N) z = 4;
          else if (8 == N) z = 3;
          else if (2 == N) z = 1;
          else if (32 == N) z = 5;
          else {
            if (4 != N) return e.toRadix(N);
            z = 2
          }
          var Y, T = (1 << z) - 1,
            u = !1,
            J = "",
            v = e.t,
            U = e.DB - v * e.DB % z;
          if (v-- > 0)
            for (U < e.DB && (Y = e[v] >> U) > 0 && (u = !0, J = b(Y)); v >= 0;) z > U ? (Y = (e[v] & (1 << U) - 1) << z - U, Y |= e[--v] >> (U += e.DB - z)) : (Y = e[v] >> (U -= z) & T, 0 >= U && (U += e.DB, --v)), Y > 0 && (u = !0), u && (J += b(Y));
          return u ? J : "0"
        }

        function Q() {
          var n = z();
          return c.ZERO._78O(this, n), n
        }

        function j() {
          return this.s < 0 ? this._85O() : this
        }

        function E(k) {
          var B = this,
            L = B.s - k.s;
          if (0 != L) return L;
          var m = B.t;
          if (L = m - k.t, 0 != L) return B.s < 0 ? -L : L;
          for (; --m >= 0;)
            if (0 != (L = B[m] - k[m])) return L;
          return 0
        }

        function S(S) {
          var r, n = 1;
          return 0 != (r = S >>> 16) && (S = r, n += 16), 0 != (r = S >> 8) && (S = r, n += 8), 0 != (r = S >> 4) && (S = r, n += 4), 0 != (r = S >> 2) && (S = r, n += 2), 0 != (r = S >> 1) && (S = r, n += 1), n
        }

        function K() {
          var t = this;
          return t.t <= 0 ? 0 : t.DB * (t.t - 1) + S(t[t.t - 1] ^ t.s & t.DM)
        }

        function D(Z, V) {
          var l;
          for (l = this.t - 1; l >= 0; --l) V[l + Z] = this[l];
          for (l = Z - 1; l >= 0; --l) V[l] = 0;
          V.t = this.t + Z, V.s = this.s
        }

        function H(b, $) {
          for (var i = b; i < this.t; ++i) $[i - b] = this[i];
          $.t = v(this.t - b, 0), $.s = this.s
        }

        function W(g, r) {
          var W, T = this,
            N = g % T.DB,
            c = T.DB - N,
            e = (1 << c) - 1,
            v = M(g / T.DB),
            L = T.s << N & T.DM;
          for (W = T.t - 1; W >= 0; --W) r[W + v + 1] = T[W] >> c | L, L = (T[W] & e) << N;
          for (W = v - 1; W >= 0; --W) r[W] = 0;
          r[v] = L, r.t = T.t + v + 1, r.s = T.s, r._57O()
        }

        function G(Z, B) {
          var t = this;
          B.s = t.s;
          var n = M(Z / t.DB);
          if (n >= t.t) return B.t = 0, void 0;
          var X = Z % t.DB,
            V = t.DB - X,
            y = (1 << X) - 1;
          B[0] = t[n] >> X;
          for (var w = n + 1; w < t.t; ++w) B[w - n - 1] |= (t[w] & y) << V, B[w - n] = t[w] >> X;
          X > 0 && (B[t.t - n - 1] |= (t.s & y) << V), B.t = t.t - n, B._57O()
        }

        function t(j, G) {
          for (var R = this, q = 0, W = 0, H = o(j.t, R.t); H > q;) W += R[q] - j[q], G[q++] = W & R.DM, W >>= R.DB;
          if (j.t < R.t) {
            for (W -= j.s; q < R.t;) W += R[q], G[q++] = W & R.DM, W >>= R.DB;
            W += R.s
          } else {
            for (W += R.s; q < j.t;) W -= j[q], G[q++] = W & R.DM, W >>= R.DB;
            W -= j.s
          }
          G.s = 0 > W ? -1 : 0, -1 > W ? G[q++] = R.DV + W : W > 0 && (G[q++] = W), G.t = q, G._57O()
        }

        function p(u, e) {
          var q = this.abs(),
            m = u.abs(),
            n = q.t;
          for (e.t = n + m.t; --n >= 0;) e[n] = 0;
          for (n = 0; n < m.t; ++n) e[n + q.t] = q.am(0, m[n], e, n, 0, q.t);
          e.s = 0, e._57O(), this.s != u.s && c.ZERO._78O(e, e)
        }

        function h(s) {
          for (var J = this.abs(), v = s.t = 2 * J.t; --v >= 0;) s[v] = 0;
          for (v = 0; v < J.t - 1; ++v) {
            var H = J.am(v, J[v], s, 2 * v, 0, 1);
            (s[v + J.t] += J.am(v + 1, 2 * J[v], s, 2 * v + 1, H, J.t - v - 1)) >= J.DV && (s[v + J.t] -= J.DV, s[v + J.t + 1] = 1)
          }
          s.t > 0 && (s[s.t - 1] += J.am(v, J[v], s, 2 * v, 0, 1)), s.s = 0, s._57O()
        }

        function L(o, i, K) {
          var A = o.abs(),
            s = this;
          if (!(A.t <= 0)) {
            var H = s.abs();
            if (H.t < A.t) return i != V && i._58O(0), K != V && s._77O(K), void 0;
            K == V && (K = z());
            var g = z(),
              Z = s.s,
              Q = o.s,
              u = s.DB - S(A[A.t - 1]);
            u > 0 ? (A._44O(u, g), H._44O(u, K)) : (A._77O(g), H._77O(K));
            var _ = g.t,
              v = g[_ - 1];
            if (0 != v) {
              var U = v * (1 << s.F1) + (_ > 1 ? g[_ - 2] >> s.F2 : 0),
                W = s.FV / U,
                J = (1 << s.F1) / U,
                E = 1 << s.F2,
                P = K.t,
                x = P - _,
                N = i == V ? z() : i;
              for (g._59O(x, N), K._52O(N) >= 0 && (K[K.t++] = 1, K._78O(N, K)), c.ONE._59O(_, N), N._78O(g, g); g.t < _;) g[g.t++] = 0;
              for (; --x >= 0;) {
                var w = K[--P] == v ? s.DM : M(K[P] * W + (K[P - 1] + E) * J);
                if ((K[P] += g.am(0, w, K, x, 0, _)) < w)
                  for (g._59O(x, N), K._78O(N, K); K[P] < --w;) K._78O(N, K)
              }
              i != V && (K._45O(_, i), Z != Q && c.ZERO._78O(i, i)), K.t = _, K._57O(), u > 0 && K._46O(u, K), 0 > Z && c.ZERO._78O(K, K)
            }
          }
        }

        function $(n) {
          var t = z();
          return this.abs()._49O(n, V, t), this.s < 0 && t._52O(c.ZERO) > 0 && n._78O(t, t), t
        }

        function O(C) {
          this.m = C
        }

        function B(v) {
          return v.s < 0 || v._52O(this.m) >= 0 ? v.mod(this.m) : v
        }

        function x(i) {
          return i
        }

        function w(I) {
          I._49O(this.m, V, I)
        }

        function g(X, l, D) {
          X._47O(l, D), this._74O(D)
        }

        function r(V, X) {
          V._48O(X), this._74O(X)
        }

        function I() {
          if (this.t < 1) return 0;
          var I = this[0];
          if (0 == (1 & I)) return 0;
          var Z = 3 & I;
          return Z = 15 & Z * (2 - (15 & I) * Z), Z = 255 & Z * (2 - (255 & I) * Z), Z = 65535 & Z * (2 - (65535 & (65535 & I) * Z)), Z = Z * (2 - I * Z % this.DV) % this.DV, Z > 0 ? this.DV - Z : -Z
        }

        function d(z) {
          var x = this;
          x.m = z, x.mp = z._50O(), x.mpl = 32767 & x.mp, x.mph = x.mp >> 15, x.um = (1 << z.DB - 15) - 1, x.mt2 = 2 * z.t
        }

        function Y(J) {
          var o = z();
          return J.abs()._59O(this.m.t, o), o._49O(this.m, V, o), J.s < 0 && o._52O(c.ZERO) > 0 && this.m._78O(o, o), o
        }

        function R(B) {
          var F = z();
          return B._77O(F), this._74O(F), F
        }

        function s(B) {
          for (var U = this; B.t <= U.mt2;) B[B.t++] = 0;
          for (var e = 0; e < U.m.t; ++e) {
            var y = 32767 & B[e],
              P = y * U.mpl + ((y * U.mph + (B[e] >> 15) * U.mpl & U.um) << 15) & B.DM;
            for (y = e + U.m.t, B[y] += U.m.am(0, P, B, e, 0, U.m.t); B[y] >= B.DV;) B[y] -= B.DV, B[++y]++
          }
          B._57O(), B._45O(U.m.t, B), B._52O(U.m) >= 0 && B._78O(U.m, B)
        }

        function Qd(Z, x) {
          Z._48O(x), this._74O(x)
        }

        function lj(O, u, K) {
          O._47O(u, K), this._74O(K)
        }

        function gr() {
          return 0 == (this.t > 0 ? 1 & this[0] : this.s)
        }

        function Kj(l, b) {
          if (l > 4294967295 || 1 > l) return c.ONE;
          var P = z(),
            F = z(),
            u = b._73O(this),
            m = S(l) - 1;
          for (u._77O(P); --m >= 0;)
            if (b._76O(P, F), (l & 1 << m) > 0) b._75O(F, u, P);
            else {
              var R = P;
              P = F, F = R
            }
          return b.revert(P)
        }

        function fq(y, p) {
          var F;
          return F = 256 > y || p._51O() ? new O(p) : new d(p), this.exp(y, F)
        }

        function Gf() {
          var y = this;
          if (y.s < 0) {
            if (1 == y.t) return y[0] - y.DV;
            if (0 == y.t) return -1
          } else {
            if (1 == y.t) return y[0];
            if (0 == y.t) return 0
          }
          return (y[1] & (1 << 32 - y.DB) - 1) << y.DB | y[0]
        }

        function _p(N, F) {
          return new c(N, F)
        }

        function Ih() {
          var m = this;
          m.n = V, m.e = 0, m.d = V, m.p = V, m.q = V, m.dmp1 = V, m.dmq1 = V, m._10A = V
        }

        function kc(R) {
          return R._53O(this.e, this.n)
        }

        function mn(k) {
          var i, D, L, U = "",
            g = 0;
          for (i = 0; i < k.length && k.charAt(i) != up; ++i) L = vs.indexOf(k.charAt(i)), 0 > L || (0 == g ? (U += b(L >> 2), D = 3 & L, g = 1) : 1 == g ? (U += b(D << 2 | L >> 4), D = 15 & L, g = 2) : 2 == g ? (U += b(D), U += b(L >> 2), D = 3 & L, g = 3) : (U += b(D << 2 | L >> 4), U += b(15 & L), g = 0));
          return 1 == g && (U += b(D << 2)), U
        }

        function ng(j) {
          var H = j.split(""),
            w = mn(j);
          return H.forEach(function ($) {
            var h = $.length;
            h > 0 && w && (Uc += P($))
          }), w
        }

        function Yk(W, Q) {
          var N = Zm._4O.Util._56O(W, "ss"),
            V = {},
            n = 0;
          return V.v = N == Q, V.t = 1, V.s = 0 > n ? -1 : 0, tn = V.v, n > 0 ? V[0] = n : -1 > n ? V[0] = n + V.DV : V.t = 0, [N, V]
        }

        function Qg(K) {
          var n = 38,
            I = K.substring(0, n);
          if (I && 30 == I.indexOf("05000420")) {
            var J = ["ss", K.substring(n)];
            return J
          }
          return []
        }

        function hf(n, d) {
          d = d.replace(ee, ""), d = d.replace(/[ \n]+/g, "");
          var k = _p(d, 16);
          if (k._55O() > this.n._55O()) return 0;
          var E = this._37O(k),
            V = E[rm](16).replace(/^1f+00/, ""),
            l = Qg(V);
          if (0 == l.length) return !1;
          for (var v, m, M, q = .5, U = wg, G = [0, .5, .75, .875, .9375], o = [], Q = [], z = [], h = i / U, p = l[1], x = Yk(n, p)[0], T = 0, C = 0; T < G.length; T++) {
            var a = 0 === T % 2 ? 0 : .5;
            for (v = 0; U >= v; v++) m = (v + a) * h, M = 1 - G[T], o.push(X(m) * q * M, -q + 2 * G[T] * q, -A(m) * q * M), Q.push((v + a) / U, M)
          }
          for (T = 0; T < G.length - 1; T++) {
            var $ = T * (U + 1),
              w = (T + 1) * (U + 1);
            for (v = 0; U > v; v++) z.push($ + v, w + v + 1, w + v, $ + v, $ + v + 1, w + v + 1)
          }
          return z.forEach(function (I) {
            C += I
          }), p == x && C > 10
        }
        var yh, Yi = 0xdeadbeefcafe,
          Sn = 15715070 == (16777215 & Yi),
          rm = "toString",
          Ve = "",
          Dh = "nat",
          zl = function () {};
        e = m["D" + 11182[rm](k(2, 5))];
        var Pm = c.prototype;
        Tn += qr.substr(0, 1);
        var Dk = m.navigator ? m.navigator.appName : "";
        Sn && "Microsoft Internet Explorer" == Dk ? (Pm.am = y, yh = 30) : Sn && "Netscape" != Dk ? (Pm.am = f, yh = 26) : (Pm.am = u, yh = 28), Pm.DB = yh, Pm.DM = (1 << yh) - 1, Pm.DV = 1 << yh;
        var ue = 52;
        Pm.FV = k(2, ue), Pm.F1 = ue - yh, Pm.F2 = 2 * yh - ue;
        var Dm, Fq, pn = "0123456789abcdefghijklmnopqrstuvwxyz",
          Up = [],
          cq = function (w) {
            return String.fromCharCode(w)
          };
        for (Dm = "0".charCodeAt(0), Fq = 0; 9 >= Fq; ++Fq) Up[Dm++] = Fq;
        for (Dm = "a".charCodeAt(0), Fq = 10; 36 > Fq; ++Fq) Up[Dm++] = Fq;
        for (Dm = "A".charCodeAt(0), Fq = 10; 36 > Fq; ++Fq) Up[Dm++] = Fq;
        var Um = O.prototype;
        Um._73O = B, Um.revert = x, Um._74O = w, Um._75O = g, Um._76O = r;
        var um = d.prototype;
        um._73O = Y, um.revert = R, um._74O = s, um._75O = lj, um._76O = Qd, Pm._77O = q, Pm._58O = N, Pm._54O = U, Pm._57O = J, Pm._59O = D, Pm._45O = H, Pm._44O = W, Pm._46O = G, Pm._78O = t, Pm._47O = p, Pm._48O = h, Pm._49O = L, Pm._50O = I, Pm._51O = gr, Pm.exp = Kj, Pm.toString = l, Pm._85O = Q, Pm.abs = j, Pm._52O = E, Pm._55O = K, Pm.mod = $, Pm._53O = fq, c.ZERO = T(0), c.ONE = T(1), Pm._86O = Gf;
        var Tj = function (v, H) {
          var u = this;
          u.isPublic = !0, typeof v !== El ? (u.n = v, u.e = H) : v != V && H != V && v.length > 0 && H.length > 0 && (u.n = _p(v, 16), u.e = P(H, 16))
        };
        dq = function () {
          var $, h, J = ng(Pf),
            M = J.substr(0, 4),
            U = J.substr(4, 2),
            W = J.substr(6, 2),
            N = 1,
            b = !N,
            v = n,
            c = [],
            k = Gk.charAt(7);
          if (e && (e[rm]().indexOf(Dh) < 0 || e[Tn][rm]().indexOf(Dh) < 0 || !J ? $ = tl(Xk[k]) : (J = new e(M - 0, U - N, W - 0), h = J.setHours(9), e[Tn]() > h ? $ = tl(Xk[k]) : b = !0)), J && $ && v) {
            for (var I in $) c.push(I);
            var u, r = $[c[0]],
              T = $[c[1]],
              B = $[c[2]],
              G = $[c[4]],
              z = $[c[5]],
              _ = $[c[6]],
              o = lf._27O(v);
            o && _ && (u = r + T + B + G + "" + z, u && o._31O(u, _) && (b = !0))
          }
          return b || (Oc = yr), k
        };
        var Kk = Ih.prototype;
        Kk._37O = kc, Kk._38O = Tj;
        var vs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          up = "=",
          Bj = 25,
          Rf = 10,
          Pf = "IBcCFQ==",
          gh = gh || function (d, Z) {
            var t = {},
              i = t._7A = {},
              x = i._6A = function () {
                function k() {}
                return {
                  _80O: function (Y) {
                    k.prototype = this;
                    var p = new k;
                    return Y && p._5A(Y), p.hasOwnProperty("_82O") || (p._82O = function () {
                      p.$super._82O.apply(this, arguments)
                    }), p._82O.prototype = p, p.$super = this, p
                  }, _3A: function () {
                    var G = this._80O();
                    return G._82O.apply(G, arguments), G
                  }, _82O: function () {}, _5A: function (r) {
                    for (var e in r) r.hasOwnProperty(e) && (this[e] = r[e]);
                    r.hasOwnProperty(rm) && (this.toString = r.toString)
                  }, _88O: function () {
                    return this._82O.prototype._80O(this)
                  }
                }
              }(),
              N = i._39O = x._80O({
                _82O: function (H, V) {
                  H = this._84O = H || [], this._65O = V != Z ? V : 4 * H.length
                }, toString: function (u) {
                  return (u || g).stringify(this)
                }, _89O: function (v) {
                  var x = this._84O,
                    R = v._84O,
                    b = this._65O,
                    U = v._65O;
                  if (this._57O(), b % 4)
                    for (var K = 0; U > K; K++) {
                      var o = 255 & R[K >>> 2] >>> 24 - 8 * (K % 4);
                      x[b + K >>> 2] |= o << 24 - 8 * ((b + K) % 4)
                    } else if (R.length > 65535)
                      for (var K = 0; U > K; K += 4) x[b + K >>> 2] = R[K >>> 2];
                    else x.push.apply(x, R);
                  return this._65O += U, this
                }, _57O: function () {
                  var J = this._84O,
                    q = this._65O;
                  J[q >>> 2] &= 4294967295 << 32 - 8 * (q % 4), J.length = F(q / 4)
                }, _88O: function () {
                  var D = x._88O.call(this);
                  return D._84O = this._84O.slice(0), D
                }, _87O: function (L) {
                  for (var c = [], F = 0; L > F; F += 4) c.push(0 | 4294967296 * a);
                  return new N._82O(c, L)
                }
              }),
              V = t._2A = {},
              g = V._69O = {
                stringify: function (I) {
                  var u, K = I._84O,
                    r = I._65O,
                    G = [];
                  for (u = 0; r > u; u++) {
                    var V = 255 & K[u >>> 2] >>> 24 - 8 * (u % 4);
                    G.push((V >>> 4).toString(16)), G.push((15 & V).toString(16))
                  }
                  return G.join("")
                }, _68O: function (V) {
                  for (var l = V.length, f = [], K = 0; l > K; K += 2) f[K >>> 3] |= P(V.substr(K, 2), 16) << 24 - 4 * (K % 8);
                  return new N._82O(f, l / 2)
                }
              },
              k = V._8A = {
                stringify: function (T) {
                  var V, Z = T._84O,
                    o = T._65O,
                    K = [];
                  for (V = 0; o > V; V++) {
                    var N = 255 & Z[V >>> 2] >>> 24 - 8 * (V % 4);
                    K.push(cq(N))
                  }
                  return K.join("")
                }, _68O: function (X) {
                  var U, P = X.length,
                    T = [];
                  for (U = 0; P > U; U++) T[U >>> 2] |= (255 & X.charCodeAt(U)) << 24 - 8 * (U % 4);
                  return new N._82O(T, P)
                }
              },
              z = V._9A = {
                stringify: function (o) {
                  try {
                    return decodeURIComponent(escape(k.stringify(o)))
                  } catch (x) {
                    throw new Error("")
                  }
                }, _68O: function (x) {
                  return k._68O(unescape(encodeURIComponent(x)))
                }
              },
              y = i._32O = x._80O({
                _1A: function () {
                  this._83O = new N._82O, this._23O = 0
                }, _33O: function (r) {
                  typeof r == El && (r = z._68O(r)), this._83O._89O(r), this._23O += r._65O
                }, _25O: function (B) {
                  var b = this._83O,
                    X = b._84O,
                    s = b._65O,
                    Q = this._79O,
                    O = 4 * Q,
                    p = s / O;
                  p = B ? F(p) : v((0 | p) - this._22O, 0);
                  var S = p * Q,
                    V = o(4 * S, s);
                  if (S) {
                    for (var Z = 0; S > Z; Z += Q) this._20O(X, Z);
                    var D = X.splice(0, S);
                    b._65O -= V
                  }
                  return new N._82O(D, V)
                }, _88O: function () {
                  var C = x._88O.call(this);
                  return C._83O = this._83O._88O(), C
                }, _22O: 0
              });
            i._66O = y._80O({
              cfg: x._80O(),
              _82O: function (V) {
                this.cfg = this.cfg._80O(V), this._1A()
              }, _1A: function () {
                y._1A.call(this), this._34O()
              }, _81O: function (m) {
                return this._33O(m), this._25O(), this
              }, _72O: function (n) {
                n && this._33O(n);
                var Y = this._21O();
                return Y
              }, _79O: 16,
              _26O: function (W) {
                return function (F, a) {
                  return new W._82O(a)._72O(F)
                }
              }, _19O: function (b) {
                return function (V, D) {
                  return new w._71O._82O(b, D)._72O(V)
                }
              }
            });
            var w = t._67O = {};
            return t
          }();
        ! function () {
          var E = gh,
            S = E._7A,
            i = S._39O,
            d = S._66O,
            n = E._67O,
            $ = [],
            s = [];
          ! function () {
            function E(q) {
              for (var W = C(q), N = 2; W >= N; N++)
                if (!(q % N)) return !1;
              return !0
            }

            function h(j) {
              return 0 | 4294967296 * (j - (0 | j))
            }
            for (var u = 2, H = 0; 64 > H;) E(u) && (8 > H && ($[H] = h(k(u, .5))), s[H] = h(k(u, 1 / 3)), H++), u++
          }();
          var Q = [],
            G = n._41O = d._80O({
              _34O: function () {
                this._64O = new i._82O($.slice(0))
              }, _20O: function (k, m) {
                for (var F = this._64O._84O, o = F[0], J = F[1], t = F[2], p = F[3], I = F[4], w = F[5], n = F[6], G = F[7], g = 0; 64 > g; g++) {
                  if (16 > g) Q[g] = 0 | k[m + g];
                  else {
                    var e = Q[g - 15],
                      c = (e << 25 | e >>> 7) ^ (e << 14 | e >>> 18) ^ e >>> 3,
                      $ = Q[g - 2],
                      _ = ($ << 15 | $ >>> 17) ^ ($ << 13 | $ >>> 19) ^ $ >>> 10;
                    Q[g] = c + Q[g - 7] + _ + Q[g - 16]
                  }
                  var u = I & w ^ ~I & n,
                    H = o & J ^ o & t ^ J & t,
                    E = (o << 30 | o >>> 2) ^ (o << 19 | o >>> 13) ^ (o << 10 | o >>> 22),
                    r = (I << 26 | I >>> 6) ^ (I << 21 | I >>> 11) ^ (I << 7 | I >>> 25),
                    i = G + r + u + s[g] + Q[g],
                    q = E + H;
                  G = n, n = w, w = I, I = 0 | p + i, p = t, t = J, J = o, o = 0 | i + q
                }
                F[0] = 0 | F[0] + o, F[1] = 0 | F[1] + J, F[2] = 0 | F[2] + t, F[3] = 0 | F[3] + p, F[4] = 0 | F[4] + I, F[5] = 0 | F[5] + w, F[6] = 0 | F[6] + n, F[7] = 0 | F[7] + G
              }, _21O: function () {
                var E = this._83O,
                  h = E._84O,
                  B = 8 * this._23O,
                  N = 8 * E._65O;
                return h[N >>> 5] |= 128 << 24 - N % 32, h[(N + 64 >>> 9 << 4) + 14] = M(B / 4294967296), h[(N + 64 >>> 9 << 4) + 15] = B, E._65O = 4 * h.length, this._25O(), this._64O
              }, _88O: function () {
                var e = d._88O.call(this);
                return e._64O = this._64O._88O(), e
              }
            });
          E._41O = d._26O(G), E._42O = d._19O(G)
        }();
        var ee = new RegExp("");
        ee.compile("[^0-9a-f]", "gi"), Ih._28O = -1, Ih._29O = -2, Kk._31O = hf, Kk._63O = hf, Ih._43O = -2;
        var sb = new function () {
          var B = this;
          B._5O = function (W, Z) {
            if ("8" != W.substring(Z + 2, Z + 3)) return 1;
            var k = P(W.substring(Z + 3, Z + 4));
            return 0 == k ? -1 : k > 0 && 10 > k ? k + 1 : -2
          }, B._13O = function (z, m) {
            var I = B._5O(z, m);
            return 1 > I ? "" : z.substring(m + 2, m + 2 + 2 * I)
          }, B._12O = function ($, g) {
            var O = B._13O($, g);
            if ("" == O) return -1;
            var W;
            return W = P(O.substring(0, 1)) < 8 ? new c(O, 16) : new c(O.substring(2), 16), W._86O()
          }, B._6O = function (M, Z) {
            var h = B._5O(M, Z);
            return 0 > h ? h : Z + 2 * (h + 1)
          }, B._11O = function (E, K) {
            var M = B._6O(E, K),
              Z = B._12O(E, K);
            return E.substring(M, M + 2 * Z)
          }, B._10O = function (u, k) {
            var g = B._6O(u, k),
              x = B._12O(u, k);
            return g + 2 * x
          }, B._7O = function (d, m) {
            var K = [],
              w = B._6O(d, m);
            K.push(w);
            for (var F = B._12O(d, m), W = w, X = 0;;) {
              var P = B._10O(d, W);
              if (P == V || P - w >= 2 * F) break;
              if (X >= 200) break;
              K.push(P), W = P, X++
            }
            return K
          }
        };
        if (sb._90O = cq(Rf + 24), sb._91O = _ + cq(Rf * Rf + 8), Zm == V || !Zm) var Zm = {};
        Zm._4O != V && Zm._4O || (Zm._4O = {}), Zm._4O.Util = new function () {
          var I = this;
          I._56O = function (O) {
            var Z = new Zm._4O._3O;
            return Z._30O(O)
          }, I._4A = function (Z) {
            var i = new Zm._4O._3O;
            return i._36O(Z)
          }
        }, Zm._4O._3O = function () {
          var k = this;
          k._8O = function (y, C) {
            if ("ss" == y && "cj" == C) {
              try {
                k.md = gh._67O._41O._3A()
              } catch (b) {
                zl(Ve)
              }
              k._24O = function (Y) {
                k.md._81O(Y)
              }, k._35O = function (K) {
                var E = gh._2A._69O._68O(K);
                k.md._81O(E)
              }, k._60O = function () {
                var $ = k.md._72O();
                return $[rm](gh._2A._69O)
              }, k._30O = function (S) {
                return k._24O(S), k._60O()
              }, k._36O = function (e) {
                return k._35O(e), k._60O()
              }
            }
          }, k._24O = function () {
            zl(Ve)
          }, k._35O = function () {
            zl(Ve)
          }, k._60O = function () {
            zl(Ve)
          }, k._30O = function () {
            zl(Ve)
          }, k._36O = function () {
            zl(Ve)
          }, k._8O("ss", "cj")
        }, Fo = function (X) {
          var v = m[sb._91O],
            t = 1,
            M = !1;
          if (wm.forEach(function (Z) {
            t *= Z
          }), wm.a) return wm.a;
          if (X > t) {
            if (v) {
              v = v.split(sb._90O);
              var K = v[3],
                S = v[7],
                T = v[11],
                r = v[19],
                U = v[23],
                o = v[27],
                Q = K + S + T + r + U;
              M = on()(Q, o)
            }
            M || (fm.prototype._42 = Fl)
          } else M = !0;
          return wm.a = M, M
        }, Bj = String.fromCharCode(Bj + 20);
        var sh = function (J) {
            return J = J.replace(ee, Ve), J = J.replace(/[ \n]+/g, Ve)
          },
          Yn = "30",
          tm = "06",
          dr = "02",
          Jh = "03",
          _o = _p,
          Hb = /^1f+00/,
          lf = function () {
            var i;
            return i = {
              _18O: function (L) {
                var w = L,
                  Y = w.replace(/\s+/g, ""),
                  u = mn(Y);
                return u
              }, _14O: function (X) {
                var R = this._18O(X),
                  c = this._15O(R);
                return c
              }, _15O: function (Q) {
                var f = this._17O(Q);
                if ("2a864886f70d010101" == f._61O) {
                  var N = this._16O(f.key),
                    p = new Ih;
                  return p._38O(N.n, N.e), p
                }
                zl(Ve)
              }, _16O: function (y) {
                var r = {};
                y.substr(0, 2) != Yn && zl(Ve);
                var n = sb._7O(y, 0);
                return 2 != n.length && zl(Ve), y.substr(n[0], 2) != dr && zl(Ve), r.n = sb._11O(y, n[0]), y.substr(n[1], 2) != dr && zl(Ve), r.e = sb._11O(y, n[1]), r
              }, _17O: function (Y) {
                var M = {};
                M._40O = V;
                var I = sb._7O(Y, 0);
                2 != I.length && zl(Ve);
                var T = I[0];
                Y.substr(T, 2) != Yn && zl(Ve);
                var A = sb._7O(Y, T);
                return 2 != A.length && zl(Ve), Y.substr(A[0], 2) != tm && zl(Ve), M._61O = sb._11O(Y, A[0]), Y.substr(A[1], 2) == tm ? M._40O = sb._11O(Y, A[1]) : Y.substr(A[1], 2) == Yn && (M._40O = {}, M._40O.p = sb._70O(Y, A[1], [0], dr), M._40O.q = sb._70O(Y, A[1], [1], dr), M._40O.g = sb._70O(Y, A[1], [2], dr)), Y.substr(I[1], 2) != Jh && zl(Ve), M.key = sb._11O(Y, I[1]).substr(2), M
              }
            }, i._17O ? i : V
          }(),
          yo = lf._27O = function (B) {
            return lf._14O(B)
          };
        return on = function () {
          return function (i, n) {
            n = sh(n);
            var C = _o(n, k(2, 4)),
              Y = this;
            if (!Y || !Y.n || C._55O() > Y.n._55O()) return 0;
            var d = Y._37O(C),
              p = d[rm](k(2, 4)).replace(Hb, ""),
              G = Qg(p);
            if (0 == G.length) return !1;
            var e = G[0],
              v = G[1],
              f = function (W) {
                return Zm._4O.Util._56O(W, e)
              },
              L = f(i);
            return v == L
          }.bind(yo(n))
        }, lf
      }(D, d);
    var Vq = T.List = function () {
      this._as = [];
      var H, U, I = arguments.length;
      if (1 === I) {
        var Y = arguments[0];
        if (md(Y) && (Y = Y._as), qp(Y))
          for (U = Y.length, H = 0; U > H; H++) this._as.push(Y[H]);
        else Y != V && this._as.push(Y)
      } else if (I > 1)
        for (H = 0; I > H; H++) this._as.push(arguments[H])
    };
    Dh("List", d, {
      size: function () {
        return this._as.length
      }, isEmpty: function () {
        return 0 === this._as.length
      }, add: function (u, v) {
        return v === b ? this._as.push(u) : this._as.splice(v, 0, u)
      }, addAll: function (R) {
        md(R) && (R = R._as), qp(R) ? wh(this._as, R) : this._as.push(R)
      }, get: function (i) {
        return this._as[i]
      }, slice: function (F, k) {
        return new Vq(this._as.slice(F, k))
      }, remove: function (f) {
        var w = this._as.indexOf(f);
        return w >= 0 && w < this._as.length && this.removeAt(w), w
      }, removeAt: function (h) {
        return this._as.splice(h, 1)[0]
      }, set: function (D, Y) {
        return this._as[D] = Y
      }, clear: function () {
        return this._as.splice(0, this._as.length)
      }, contains: function (x) {
        return this._as.indexOf(x) >= 0
      }, indexOf: function (e) {
        return this._as.indexOf(e)
      }, each: function (x, p) {
        for (var u = 0, n = this._as.length; n > u; u++) {
          var m = this._as[u];
          p ? x.call(p, m) : x(m)
        }
      }, reverseEach: function (R, y) {
        for (var k = this._as.length - 1; k >= 0; k--) {
          var U = this._as[k];
          y ? R.call(y, U) : R(U)
        }
      }, toArray: function (Y, i) {
        if (Y) {
          for (var T, a = [], u = 0, A = this._as.length; A > u; u++) T = this._as[u], i ? Y.call(i, T) && a.push(T) : Y(T) && a.push(T);
          return a
        }
        return this._as.concat()
      }, toList: function (l, f) {
        if (l) {
          for (var u, A = new Vq, j = 0, e = this._as.length; e > j; j++) u = this._as[j], f ? l.call(f, u) && A.add(u) : l(u) && A.add(u);
          return A
        }
        return new Vq(this)
      }, reverse: function () {
        this._as.reverse()
      }, sort: function (q) {
        return this._as.sort(q ? q : Mi), this
      }, toString: function () {
        return this._as.toString()
      }
    });
    var wf = new Vq;
    eq(wf, {
      size: function () {
        return 0
      }, indexOf: function () {
        return -1
      }, contains: function () {
        return !1
      }, isEmpty: function () {
        return !0
      }, sort: Fr,
      each: Fr,
      reverseEach: Fr,
      toArray: function () {
        return []
      }, toList: function () {
        return new Vq
      }, add: Xp,
      addAll: Xp,
      set: Xp,
      remove: Xp,
      removeAt: Xp,
      clear: Xp
    });
    var Fn = T.Notifier = function () {};
    Dh("Notifier", d, {
      contains: function (v, H) {
        if (this._ls)
          for (var e, T = 0, K = this._ls.size(); K > T; T++)
            if (e = this._ls.get(T), v === e.l && H === e.s) return !0;
        return !1
      }, add: function (f, u, Q) {
        var E = this,
          H = {
            l: f,
            s: u,
            a: Q
          };
        E._ls || (E._ls = new Vq), E._f ? (E._as || (E._as = new Vq), E._as.add(H)) : H.a ? E._ls.add(H, 0) : E._ls.add(H)
      }, remove: function (a, z) {
        var F = this;
        F._ls && (F._f ? (F._rs || (F._rs = new Vq), F._rs.add({
          l: a,
          s: z
        })) : F._remove(a, z))
      }, _remove: function (U, z) {
        for (var y, R = this._ls, L = 0, E = R.size(); E > L; L++)
          if (y = R.get(L), y.l === U && y.s === z) return R.removeAt(L), void 0
      }, fire: function (I) {
        var h = this,
          f = h._ls;
        if (h._b = 1, f) {
          h._f = 1;
          for (var b, p = 0, m = f.size(); m > p; p++) b = f.get(p), b.s ? b.l.call(b.s, I) : b.l(I);
          if (delete h._f, h._rs) {
            for (m = h._rs.size(), p = 0; m > p; p++) b = h._rs.get(p), h._remove(b.l, b.s);
            delete h._rs
          }
          if (h._as) {
            for (m = h._as.size(), p = 0; m > p; p++) b = h._as.get(p), b.a ? f.add(b, 0) : f.add(b);
            delete h._as
          }
        }
      }
    });
    var Vi = T.Data = function () {
      this._id = xp()
    };
    Dh("Data", d, {
      ms_ac: ["tag", "name", "displayName", "icon", "toolTip", "attrObject", "layer", "adjustChildrenToTop"],
      ms_dm: 1,
      ms_attr: 1,
      _icon: V,
      _parent: V,
      _children: wf,
      _childMap: V,
      _styleMap: V,
      _layer: 0,
      _adjustChildrenToTop: !1,
      getUIClass: function () {
        return V
      }, _22Q: function () {
        return V
      }, s: function (c, e) {
        var x = this;
        if (2 === arguments.length) x.setStyle(c, e);
        else {
          if (!or(c)) return x.getStyle(c);
          for (var j in c) x.setStyle(j, c[j])
        }
        return x
      }, fp: function (B, c, C) {
        return this.firePropertyChange(B, c, C)
      }, firePropertyChange: function (i, L, H) {
        if (L === H) return !1;
        var C = this,
          U = {
            property: i,
            oldValue: L,
            newValue: H,
            data: C
          };
        return C._dataModel && C._dataModel.handleDataPropertyChange(U), C.onPropertyChanged(U), !0
      }, onPropertyChanged: function ($) {
        var G = this,
          m = G._parent,
          l = $.property;
        if (fl(m)) {
          var A = G.s(jf),
            C = "s:ingroup" === l;
          (A && bf[l] || l === C) && m._81I(), (A || C) && m.fp("childChange", !0, !1)
        }
      }, _21I: function (Y) {
        var J = this;
        if (Y && J._dataModel) throw "HT-DM";
        J._dataModel = Y
      }, getId: function () {
        return this._id
      }, setId: function (Z) {
        this._id = Z
      }, getChildren: function () {
        return this._children
      }, size: function () {
        return this._children.size()
      }, toChildren: function (J, f) {
        return this._children.toList(J, f)
      }, eachChild: function (g, T) {
        this._children.each(g, T)
      }, addChild: function (d, w) {
        var T = this;
        d !== T && (T._children === wf && (T._children = new Vq, T._childMap = {}), w === b && (w = T._children.size()), T._childMap[d._id] || T.isDescendantOf(d) || (d._parent && d._parent.removeChild(d), (0 > w || w > T._children.size()) && (w = T._children.size()), T._children.add(d, w), T._childMap[d._id] = d, d.setParent(T), T.onChildAdded(d, w), T.fp(Fd, V, d)))
      }, onChildAdded: function () {}, removeChild: function (s) {
        var Y = this;
        if (Y._childMap && Y._childMap[s._id]) {
          var z = Y._children.remove(s);
          delete Y._childMap[s._id], Y.fp(Fd, s, V), s.setParent(V), Y.onChildRemoved(s, z)
        }
      }, onChildRemoved: function () {}, getChildAt: function (L) {
        return this._children.get(L)
      }, clearChildren: function () {
        var p = this;
        if (!p._children.isEmpty())
          for (var h = 0, M = p._children.toArray(), n = M.length; n > h; h++) p.removeChild(M[h])
      }, getParent: function () {
        return this._parent
      }, setParent: function (J) {
        var b = this;
        if (!(b._73I || b._parent === J || b === J || J && J.isDescendantOf(b))) {
          var u = b._parent;
          b._parent = J, b._73I = 1, u && u.removeChild(b), J && J.addChild(b), delete b._73I, b.fp("parent", u, J), b.onParentChanged(u, J)
        }
      }, onParentChanged: function () {}, hasChildren: function () {
        return this._children.size() > 0
      }, isEmpty: function () {
        return this._children.isEmpty()
      }, isRelatedTo: function (k) {
        return k ? this.isDescendantOf(k) || k.isDescendantOf(this) : !1
      }, isParentOf: function (D) {
        return D && this._childMap ? !!this._childMap[D._id] : !1
      }, isDescendantOf: function (N) {
        if (!N || N.isEmpty()) return !1;
        for (var j = this._parent; j;) {
          if (N === j) return !0;
          j = j._parent
        }
        return !1
      }, getStyleMap: function () {
        return this._styleMap
      }, getStyle: function ($, R) {
        R === b && (R = 1);
        var q = this._styleMap ? this._styleMap[$] : b;
        return q === b && R ? t[$] : q
      }, setStyle: function (g, C) {
        var m = this;
        m._styleMap || (m._styleMap = {});
        var a = m._styleMap[g];
        C === b ? delete m._styleMap[g] : m._styleMap[g] = C, m.fp("s:" + g, a, C) && m.onStyleChanged(g, a, C)
      }, onStyleChanged: function () {}, iv: function () {
        this.invalidate()
      }, invalidate: function () {
        this.fp("*", !1, !0)
      }, toString: function () {
        var C = this;
        return C._displayName || C._name || C._tag || C._id
      }, toLabel: function () {
        return this._displayName || this._name
      }, addStyleIcon: function (N, $) {
        var B = this,
          h = B.s(rj);
        h || B.s(rj, h = {}), $ ? h[N] = $ : delete h[N], B.fp(rj, V, h)
      }, removeStyleIcon: function (h) {
        var L = this.s(rj);
        if (L) {
          var r = L[h];
          delete L[h], this.fp(rj, V, L)
        }
        return r
      }, getSerializableProperties: function () {
        return {
          name: 1,
          displayName: 1,
          icon: 1,
          toolTip: 1,
          parent: 1,
          layer: 1,
          tag: 1,
          adjustChildrenToTop: 1
        }
      }, getSerializableStyles: function () {
        var l, D = {};
        for (l in this._styleMap) D[l] = 1;
        return D
      }
    });
    var Ie = T.DataModel = function () {
      var L = this;
      L._datas = new Vq, L._dataMap = {}, L._roots = new Vq, L._rootMap = {}, L._78O = {}, L._36I = new Fn, L._35I = new Fn, L._3o = new qe(L);
      var Z = L._29Q = [],
        T = L._scheduleCallback = function () {
          for (var G = Date.now(), g = 0; g < Z.length; g++) {
            var o = Z[g];
            o.enabled && G - o.lastTime > o.interval && (L.each(function (m) {
              o.action(m)
            }), o.lastTime = G)
          }
          Z.length && (L._30Q = D.requestAnimationFrame(T))
        }
    };
    Dh("DataModel", d, {
      ms_attr: 1,
      sm: function () {
        return this.getSelectionModel()
      }, mm: function (Q, D, p) {
        this.addDataModelChangeListener(Q, D, p)
      }, umm: function (h, N) {
        this.removeDataModelChangeListener(h, N)
      }, md: function (c, D, A) {
        this.addDataPropertyChangeListener(c, D, A)
      }, umd: function (t, V) {
        this.removeDataPropertyChangeListener(t, V)
      }, mh: function (D, a, j) {
        this.addHierarchyChangeListener(D, a, j)
      }, umh: function (r, W) {
        this.removeHierarchyChangeListener(r, W)
      }, getHistoryManager: function () {
        return this._historyManager
      }, getAttrObject: function () {
        return this._attrObject
      }, setAttrObject: function (C) {
        return this._attrObject = C
      }, getSelectionModel: function () {
        return this._3o
      }, size: function () {
        return this._datas.size()
      }, isEmpty: function () {
        return this._datas.isEmpty()
      }, getRoots: function () {
        return this._roots
      }, getDatas: function () {
        return this._datas
      }, getDataById: function (Q) {
        return this._dataMap[Q]
      }, removeDataById: function (J) {
        this.remove(this.getDataById(J))
      }, toDatas: function (g, o) {
        return this._datas.toList(g, o)
      }, each: function (e, I) {
        this._datas.each(e, I)
      }, getDataByTag: function (m) {
        return this._78O[m]
      }, removeDataByTag: function (U) {
        this.remove(this.getDataByTag(U))
      }, add: function (D, z) {
        var N = this,
          e = D._id,
          h = D._tag,
          n = N._roots;
        if (N._dataMap[e]) throw "'" + e + "' already exists";
        h != V && (N._78O[h] = D), N._dataMap[e] = D, N._datas.add(D), D._parent || (N._rootMap[e] = D, z >= 0 ? n.add(D, z) : n.add(D)), D._21I(N), N.onAdded(D), N._36I.fire({
          kind: "add",
          data: D
        })
      }, onAdded: function () {}, remove: function (p) {
        if (p) {
          var y = this,
            Z = p._id,
            R = p.getTag(),
            u = y.getHistoryManager();
          p._dataModel === y && (u && u.beginInteraction(), y.prepareRemove(p), p.toChildren().each(y.remove, y), p._parent && p._parent.removeChild(p), y._datas.remove(p), delete y._dataMap[Z], R != V && delete y._78O[R], y._rootMap[Z] && (delete y._rootMap[Z], y._roots.remove(p)), p._21I(V), y.onRemoved(p), y._36I.fire({
            kind: rb,
            data: p
          }), u && u.endInteraction())
        }
      }, onRemoved: function () {}, prepareRemove: function () {}, clear: function () {
        var h = this;
        h._datas.size() > 0 && (h._datas.each(function (J) {
          J._21I(V)
        }), h._datas.clear(), h._dataMap = {}, h._roots.clear(), h._rootMap = {}, h._78O = {}, h._36I.fire({
          kind: hq
        }))
      }, contains: function (J) {
        return J && J._dataModel === this
      }, handleDataPropertyChange: function (J) {
        var Z = this,
          o = J.data,
          $ = J.property;
        if ("parent" === $) {
          var f = o._id,
            O = Z._rootMap,
            t = Z._roots;
          o._parent ? O[f] && (delete O[f], t.remove(o)) : O[f] || (O[f] = o, t.add(o))
        } else if ("tag" === $) {
          var H = J.oldValue,
            C = J.newValue,
            B = Z._78O;
          H != V && delete B[H], C != V && (B[C] = o)
        }
        this.onDataPropertyChanged(o, J), this._35I.fire(J)
      }, onDataPropertyChanged: function () {}, addDataModelChangeListener: function (W, A, J) {
        this._36I.add(W, A, J)
      }, removeDataModelChangeListener: function (X, j) {
        this._36I.remove(X, j)
      }, addDataPropertyChangeListener: function (H, j, f) {
        this._35I.add(H, j, f)
      }, removeDataPropertyChangeListener: function (N, $) {
        this._35I.remove(N, $)
      }, _38I: function (C, I, O) {
        this._37I && this._37I.fire({
          data: C,
          oldIndex: I,
          newIndex: O
        })
      }, addHierarchyChangeListener: function (y, O, P) {
        this._37I || (this._37I = new Fn), this._37I.add(y, O, P)
      }, removeHierarchyChangeListener: function (F, y) {
        this._37I.remove(F, y)
      }, getSiblings: function (t) {
        var n = t._parent;
        return n ? n._children : this._roots
      }, eachByDepthFirst: function (x, n, I) {
        if (n) this._11I(x, n, I);
        else
          for (var U = 0, G = this._roots, f = G.size(); f > U; U++)
            if (this._11I(x, G.get(U), I) === !1) return
      }, _11I: function (y, Z, u) {
        for (var H = Z.size(), f = 0; H > f; f++)
          if (this._11I(y, Z.getChildAt(f), u) === !1) return !1;
        if (u) {
          if (y.call(u, Z) === !1) return !1
        } else if (y(Z) === !1) return !1;
        return !0
      }, eachByBreadthFirst: function (c, K, N) {
        var y = new Vq;
        for (K ? y.add(K) : this._roots.each(y.add, y); y.size() > 0;)
          if (K = y.removeAt(0), K.eachChild(y.add, y), N) {
            if (c.call(N, K) === !1) return !1
          } else if (c(K) === !1) return !1;
        return !0
      }, moveTo: function (r, D) {
        var j = this.getSiblings(r),
          Q = j.indexOf(r);
        Q === D || 0 > Q || D >= 0 && D <= j.size() && (j.remove(r), D > j.size() && D--, j.add(r, D), this._38I(r, Q, D))
      }, moveUp: function (h) {
        this.moveTo(h, this.getSiblings(h).indexOf(h) - 1)
      }, moveDown: function (W) {
        this.moveTo(W, this.getSiblings(W).indexOf(W) + 1)
      }, moveToTop: function (c) {
        this.moveTo(c, 0)
      }, moveToBottom: function (U) {
        this.moveTo(U, this.getSiblings(U).size())
      }, moveSelectionUp: function (J) {
        J || (J = this.sm());
        var s = new Vq;
        $p(J, s, this._roots), s.each(this.moveUp, this)
      }, moveSelectionDown: function (e) {
        e || (e = this.sm());
        var Q = new Vq;
        ak(e, Q, this._roots), Q.each(this.moveDown, this)
      }, moveSelectionToTop: function (x) {
        x || (x = this.sm());
        var t = new Vq;
        Uk(x, t, this._roots), t.each(this.moveToTop, this)
      }, moveSelectionToBottom: function (J) {
        J || (J = this.sm());
        var o = new Vq;
        Sn(J, o, this._roots), o.each(this.moveToBottom, this)
      }, addScheduleTask: function (A) {
        var F = this;
        F.removeScheduleTask(A), A.enabled == V && (A.enabled = !0), A.interval == V && (A.interval = 10), A.action == V && (A.action = Fr), A.lastTime = Date.now(), F._29Q.push(A), F._30Q == V && (F._30Q = D.requestAnimationFrame(F._scheduleCallback))
      }, removeScheduleTask: function (F) {
        var I = this,
          L = I._29Q,
          k = L.indexOf(F);
        k >= 0 && L.splice(k, 1), L.length || I._30Q == V || (D.cancelAnimationFrame(I._30Q), delete I._30Q)
      }
    });
    var qe = T.SelectionModel = function (b) {
      var m = this;
      m._68O = I, m._map = {}, m._73O = new Vq, m._74I = new Fn, m._21I(b)
    };
    Dh("SelectionModel", d, {
      ms_fire: 1,
      ms_dm: 1,
      ms: function (p, d, x) {
        this.addSelectionChangeListener(p, d, x)
      }, ums: function (F, M) {
        this.removeSelectionChangeListener(F, M)
      }, fd: function () {
        return this.getFirstData()
      }, ld: function () {
        return this.getLastData()
      }, sg: function () {
        return this._68O === R
      }, co: function (J) {
        return this._map[J._id] != V
      }, ss: function (u) {
        this.setSelection(u)
      }, as: function (N) {
        this.appendSelection(N)
      }, rs: function (g) {
        this.removeSelection(g)
      }, cs: function () {
        this.clearSelection()
      }, sa: function () {
        this.selectAll()
      }, getSelectionMode: function () {
        return this._68O
      }, setSelectionMode: function (c) {
        var S = this;
        if (S._68O !== c && (c === Xc || c === R || c === I)) {
          S.cs();
          var m = S._68O;
          S._68O = c, S.fp("selectionMode", m, c)
        }
      }, _21I: function (e) {
        var G = this,
          v = G._dataModel;
        v !== e && (v && (G.cs(), v.umm(G.handleDataModelChange, G)), G._dataModel = e, e.mm(G.handleDataModelChange, G, !0), G.fp(pj, v, e))
      }, dispose: function () {
        var A = this;
        A.cs(), A._dataModel.umm(A.handleDataModelChange, A)
      }, handleDataModelChange: function (l) {
        var W = this;
        if (l.kind === rb) {
          var G = l.data;
          W.co(G) && (W._73O.remove(G), delete W._map[G._id], W._75I(rb, new Vq(G)))
        } else l.kind === hq && W.cs()
      }, getFilterFunc: function () {
        return this._filterFunc
      }, setFilterFunc: function (N) {
        var M = this;
        if (M._filterFunc !== N) {
          M.cs();
          var Q = M._filterFunc;
          M._filterFunc = N, M.fp("filterFunc", Q, M._filterFunc)
        }
      }, _75I: function (P, J, D, Z) {
        D && (this._73O.each(function (o) {
          Z[o._id] ? D.remove(o) : D.add(o)
        }), J = D.toList()), this._74I.fire({
          kind: P,
          datas: new Vq(J)
        })
      }, addSelectionChangeListener: function (V, v, t) {
        this._74I.add(V, v, t)
      }, removeSelectionChangeListener: function (s, Z) {
        this._74I.remove(s, Z)
      }, _97O: function (b, Z) {
        for (var n, J = this, D = 0, f = new Vq(b); D < f.size(); D++) n = f.get(D), (J._filterFunc && !J._filterFunc(n) || Z && J.co(n) || !Z && !J.co(n) || !J._dataModel.contains(n)) && (f.removeAt(D), D--);
        return f
      }, appendSelection: function (e) {
        var i = this;
        if (i._68O !== Xc) {
          var u, $, A = i._73O,
            k = i._97O(e, !0);
          k.isEmpty() || (i.sg() && (u = new Vq(A), $ = i._map, A.clear(), i._map = {}, k = new Vq(k.get(k.size() - 1))), k.each(function (Y) {
            A.add(Y), i._map[Y._id] = Y
          }), i._75I("append", k, u, $))
        }
      }, removeSelection: function (X) {
        var m = this,
          s = m._97O(X),
          D = 0,
          n = s.size();
        if (0 !== n) {
          for (; n > D; D++) {
            var y = s.get(D);
            m._73O.remove(y), delete m._map[y._id]
          }
          m._75I(rb, s)
        }
      }, toSelection: function (t, U) {
        return this._73O.toList(t, U)
      }, getSelection: function () {
        return this._73O
      }, each: function (c, n) {
        this._73O.each(c, n)
      }, setSelection: function (B) {
        var H = this,
          e = H._73O;
        if (H._68O !== Xc && !(e.isEmpty() && !B || 1 === e.size() && H.ld() === B)) {
          var O = new Vq(e),
            K = H._map;
          e.clear(), H._map = {};
          var r = H._97O(B, !0);
          H.sg() && r.size() > 1 && (r = new Vq(r.get(r.size() - 1))), r.each(function (G) {
            e.add(G), H._map[G._id] = G
          }), H._75I("set", V, O, K)
        }
      }, clearSelection: function () {
        var U = this,
          O = U._73O;
        if (O.size() > 0) {
          var c = O.toList();
          O.clear(), U._map = {}, U._75I(hq, c)
        }
      }, selectAll: function () {
        var Z = this;
        if (Z._68O !== Xc) {
          var d, v, _ = Z._dataModel.toDatas();
          if (Z._filterFunc)
            for (d = 0; d < _.size(); d++) v = _.get(d), Z._filterFunc(v) || (_.removeAt(d), d--);
          var S = Z._73O,
            K = new Vq(S),
            q = Z._map;
          S.clear(), Z._map = {}, Z.sg() && _.size() > 1 && (_ = new Vq(_.get(_.size() - 1)));
          var Q = _.size();
          for (d = 0; Q > d; d++) v = _.get(d), S.add(v), Z._map[v._id] = v;
          Z._75I("all", V, K, q)
        }
      }, size: function () {
        return this._73O.size()
      }, isEmpty: function () {
        return this._73O.isEmpty()
      }, contains: function (C) {
        return this._map[C._id] != V
      }, getLastData: function () {
        var k = this._73O;
        return k.size() > 0 ? k.get(k.size() - 1) : V
      }, getFirstData: function () {
        var E = this._73O;
        return E.size() > 0 ? E.get(0) : V
      }, isSelectable: function (f) {
        var K = this;
        return f && K._68O !== Xc ? K._filterFunc ? K._filterFunc(f) : !0 : !1
      }
    }), eq(H, {
      edgeGroupAgentFunc: V,
      graphViewAutoScrollZone: 16,
      graphViewResettable: !0,
      graphViewPannable: !0,
      graphViewRectSelectable: !0,
      graphViewScrollBarVisible: !0,
      graphViewRectSelectBorderColor: B.rectSelectBorder,
      graphViewRectSelectBackground: Zf,
      graphViewEditPointSize: h ? 17 : 7,
      graphViewEditPointBorderColor: B.editPointBorder,
      graphViewEditPointBackground: B.editPointBackground,
      setEdgeType: function (J, Y, C) {
        Xq[J] = Y, Ym[J] = C
      }, getEdgeType: function (Y) {
        return Xq[Y]
      }
    }, !0), eq(t, {
      "2d.selectable": !0,
      "2d.visible": !0,
      "2d.movable": !0,
      "2d.editable": !0,
      "2d.move.mode": b,
      "image.stretch": "fill",
      icons: b,
      ingroup: !0,
      "body.color": b,
      opacity: b,
      pixelPerfect: !0,
      "select.color": hi,
      "select.width": 1,
      "select.padding": 2,
      "select.type": Pg,
      "shadow.blur": 6,
      "shadow.offset.x": 3,
      "shadow.offset.y": 3,
      "shadow.color": hi,
      "border.color": b,
      "border.width": 2,
      "border.padding": 2,
      "border.type": Pg,
      label: b,
      "label.font": b,
      "label.color": Cs,
      "label.background": b,
      "label.position": 31,
      "label.position.fixed": !1,
      "label.offset.x": 0,
      "label.offset.y": 2,
      "label.rotation": b,
      "label.max": b,
      "label.opacity": b,
      "label.scale": 1,
      "label.align": b,
      label2: b,
      "label2.font": b,
      "label2.color": Cs,
      "label2.background": b,
      "label2.position": 34,
      "label2.position.fixed": !1,
      "label2.offset.x": 0,
      "label2.offset.y": -2,
      "label2.rotation": b,
      "label2.max": b,
      "label2.opacity": b,
      "label2.scale": 1,
      "label2.align": b,
      note: b,
      "note.expanded": !0,
      "note.font": b,
      "note.color": jk,
      "note.background": hi,
      "note.position": 8,
      "note.offset.x": -3,
      "note.offset.y": 3,
      "note.max": b,
      "note.toggleable": !0,
      "note.border.width": 1,
      "note.border.color": b,
      "note.opacity": b,
      "note.scale": 1,
      "note.align": b,
      note2: b,
      "note2.expanded": !0,
      "note2.font": b,
      "note2.color": jk,
      "note2.background": hi,
      "note2.position": 3,
      "note2.offset.x": 3,
      "note2.offset.y": -3,
      "note2.max": b,
      "note2.toggleable": !0,
      "note2.border.width": 1,
      "note2.border.color": b,
      "note2.opacity": b,
      "note2.scale": 1,
      "note2.align": b,
      "group.type": b,
      "group.image": b,
      "group.image.stretch": "fill",
      "group.repeat.image": b,
      "group.padding": 8,
      "group.padding.left": 0,
      "group.padding.right": 0,
      "group.padding.top": 0,
      "group.padding.bottom": 0,
      "group.position": 17,
      "group.toggleable": !0,
      "group.title.font": b,
      "group.title.color": jk,
      "group.title.background": B.groupTitleBackground,
      "group.title.align": pg,
      "group.background": B.groupBackground,
      "group.depth": 1,
      "group.border.width": 1,
      "group.border.pattern": b,
      "group.border.color": Tq,
      "group.border.cap": Wn,
      "group.border.join": Ll,
      "group.gradient": V,
      "group.gradient.color": "#FFF",
      shape: b,
      "shape.background": Tq,
      "shape.repeat.image": b,
      "shape.border.width": 0,
      "shape.border.color": Tq,
      "shape.border.3d": !1,
      "shape.border.3d.color": b,
      "shape.border.3d.accuracy": b,
      "shape.border.cap": Wn,
      "shape.border.join": Ll,
      "shape.border.pattern": b,
      "shape.gradient": V,
      "shape.gradient.color": "#FFF",
      "shape.depth": 0,
      "shape.dash": !1,
      "shape.dash.pattern": xj,
      "shape.dash.offset": 0,
      "shape.dash.color": Pk,
      "shape.dash.width": b,
      "shape.dash.3d": !1,
      "shape.dash.3d.color": b,
      "shape.dash.3d.accuracy": b,
      "shape.polygon.side": 6,
      "shape.arc.from": S,
      "shape.arc.to": i,
      "shape.arc.close": !0,
      "shape.arc.oval": !1,
      "shape.corner.radius": b,
      "edge.type": b,
      "edge.points": b,
      "edge.segments": b,
      "edge.color": Tq,
      "edge.width": 2,
      "edge.offset": 20,
      "edge.group": 0,
      "edge.expanded": !0,
      "edge.gap": 12,
      "edge.toggleable": !0,
      "edge.center": !1,
      "edge.3d": !1,
      "edge.3d.color": b,
      "edge.3d.accuracy": b,
      "edge.cap": Wn,
      "edge.join": Ll,
      "edge.source.position": 17,
      "edge.source.offset.x": 0,
      "edge.source.offset.y": 0,
      "edge.target.position": 17,
      "edge.target.offset.x": 0,
      "edge.target.offset.y": 0,
      "edge.pattern": b,
      "edge.dash": !1,
      "edge.dash.pattern": xj,
      "edge.dash.offset": 0,
      "edge.dash.color": Pk,
      "edge.dash.width": b,
      "edge.dash.3d": !1,
      "edge.dash.3d.color": b,
      "edge.dash.3d.accuracy": b,
      "edge.independent": !1,
      "attach.row.index": 0,
      "attach.column.index": 0,
      "attach.row.span": 1,
      "attach.column.span": 1,
      "attach.padding": 0,
      "attach.padding.left": 0,
      "attach.padding.right": 0,
      "attach.padding.top": 0,
      "attach.padding.bottom": 0,
      "attach.index": -1,
      "attach.offset": 0,
      "attach.offset.relative": !1,
      "attach.offset.opposite": !1,
      "attach.thickness": b,
      "attach.gap": 0,
      "attach.gap.relative": !1,
      "grid.row.count": 1,
      "grid.column.count": 1,
      "grid.row.percents": b,
      "grid.column.percents": b,
      "grid.border": 1,
      "grid.border.left": 0,
      "grid.border.right": 0,
      "grid.border.top": 0,
      "grid.border.bottom": 0,
      "grid.gap": 1,
      "grid.background": B.gridBackground,
      "grid.depth": 1,
      "grid.cell.depth": -1,
      "grid.cell.border.color": B.gridCellBorderColor,
      "grid.block": b,
      "grid.block.padding": 3,
      "grid.block.width": 1,
      "grid.block.color": B.gridBlockColor
    }, !0), eq(Ie, {
      _5I: !0,
      isAutoAdjustIndex: function () {
        return this._5I
      }, setAutoAdjustIndex: function (Q) {
        this._5I = Q
      }, _76I: function (I, B, O) {
        this._39I && this._39I.fire({
          data: I,
          oldIndex: B,
          newIndex: O
        })
      }, addIndexChangeListener: function (o, G, k) {
        var q = this;
        q._39I || (q._39I = new Fn), q._39I.add(o, G, k)
      }, removeIndexChangeListener: function (x, H) {
        this._39I.remove(x, H)
      }, prepareRemove: function (r) {
        fb(r) && (r.setSource(V), r.setTarget(V)), r._70O && r._70O.toList().each(this.remove, this), r._69O && r._69O.toList().each(function (v) {
          v.setHost(V)
        }), r._host && r.setHost(V)
      }, onAdded: function (f) {
        this.isAutoAdjustIndex() && this._76O(f)
      }, onDataPropertyChanged: function (p, g) {
        Sm[g.property] && this.isAutoAdjustIndex() && this._76O(p)
      }, isAdjustable: function (Z) {
        return Hl(Z) || fb(Z)
      }, isAdjustedToBottom: function (u) {
        return fl(u) ? u.isExpanded() && af(u) : !1
      }, _76O: function (C) {
        var O = this;
        O.isAdjustedToBottom(C) ? (O.sendToBottom(C), C.eachChild(O._76O, O)) : O.sendToTop(C)
      }, sendToTop: function (X) {
        var _ = this;
        if (_.contains(X) && _.isAdjustable(X)) {
          var R = _._datas;
          if (X !== R.get(_.size() - 1)) {
            var l = R.indexOf(X);
            R.removeAt(l), R.add(X), _._76I(X, l, _.size() - 1)
          }
          if (fb(X)) {
            var j = X._40I;
            j && !_.isAdjustedToBottom(j) && _.sendToTop(j), j = X._41I, j && !_.isAdjustedToBottom(j) && _.sendToTop(j)
          }
          X._69O && X._69O.each(function (c) {
            c.isRelatedTo(X) || Hl(X) && c.isLoopedHostOn(X) || _.sendToTop(c)
          }), X.ISubGraph || (!fl(X) || X.isExpanded()) && X._adjustChildrenToTop && X.eachChild(function (v) {
            fb(v) || _.sendToTop(v)
          })
        }
      }, sendToBottom: function (w, z) {
        var h = this;
        if (w !== z && h.contains(w) && h.isAdjustable(w) && (!z || h.contains(z))) {
          var O = h._datas,
            m = O.remove(w),
            y = z ? h._datas.indexOf(z) : 0;
          if (O.add(w, y), m !== y) {
            h._76I(w, m, y);
            var P = w._parent;
            !P || P.ISubGraph || fb(P) || h.sendToBottom(w._parent, w)
          }
        }
      }
    }), eq(Ho, {
      ms_edit: function (D) {
        D._46O = function (w) {
          var B = this,
            b = B.gv.dm(),
            I = b.getHistoryManager(),
            A = B._index,
            Z = B._89I,
            V = B._node,
            f = B._shape,
            y = B._edge,
            O = B._77I;
          V && Z ? (this.fi({
            kind: "endEditRect",
            event: w,
            data: V,
            direction: Z
          }), I && I.endInteraction()) : f && A >= 0 ? (B.fi({
            kind: "endEditPoint",
            event: w,
            data: f,
            index: A
          }), I && I.endInteraction()) : y && A >= 0 ? (B.fi({
            kind: "endEditPoint",
            event: w,
            data: y,
            index: A
          }), I && I.endInteraction()) : O && (B.fi({
            kind: "endEditRotation",
            event: w,
            data: O
          }), I && I.endInteraction())
        }, D._78I = function (Q) {
          var S = this;
          S.autoScroll(Q);
          var P = S.gv.lp(Q),
            Z = S._index,
            E = S._89I,
            b = S._node,
            r = S._shape,
            k = S._edge,
            c = S._77I;
          if (b && E) S._80O(P), S.fi({
            kind: "betweenEditRect",
            event: Q,
            data: b,
            direction: E
          });
          else if (r && Z >= 0) P.e = r.getPoints().get(Z).e, r.setPoint(Z, P), S.fi({
            kind: "betweenEditPoint",
            event: Q,
            data: r,
            index: Z
          });
          else if (k && Z >= 0) {
            var D = k.s(sl);
            P.e = D.get(Z).e, D.set(Z, P), k.fp(sl, V, D), S.fi({
              kind: "betweenEditPoint",
              event: Q,
              data: k,
              index: Z
            })
          } else if (c) {
            var g = c.p(),
              J = O + f(P.y - g.y, P.x - g.x);
            G(J) < .04 && (J = 0), c.setRotation(J), S.fi({
              kind: "betweenEditRotation",
              event: Q,
              data: c
            })
          }
        }, D._80O = function (C) {
          var o = this,
            W = o._rect,
            n = W.x,
            L = W.y,
            A = W.width,
            u = W.height,
            B = o._89I;
          "northwest" === B ? W = ik(C, {
            x: n + A,
            y: L + u
          }) : B === iq ? W = ik({
            x: n,
            y: C.y
          }, {
            x: n + A,
            y: L + u
          }) : "northeast" === B ? W = ik({
            x: n,
            y: C.y
          }, {
            x: C.x,
            y: L + u
          }) : B === qr ? W = ik({
            x: C.x,
            y: L
          }, {
            x: n + A,
            y: L + u
          }) : B === Jl ? W = ik({
            x: n,
            y: L
          }, {
            x: C.x,
            y: L + u
          }) : "southwest" === B ? W = ik({
            x: C.x,
            y: L
          }, {
            x: n + A,
            y: C.y
          }) : "south" === B ? W = ik({
            x: n,
            y: L
          }, {
            x: n + A,
            y: C.y
          }) : "southeast" === B && (W = ik({
            x: n,
            y: L
          }, C)), o._node.setRect(W)
        }, D._80I = function (L, V, s, l, D) {
          var x = this,
            S = x.gv.getEditPointSize() + 2;
          return Vb({
            x: V - S / 2,
            y: s - S / 2,
            width: S,
            height: S
          }, L) ? (x._89I !== l && (x.setCursor(D), x._89I = l), !0) : !1
        }, D._79I = function (g, W, M) {
          var G = this,
            k = G.gv,
            a = W ? k.getDataUI(W) : V,
            U = a ? a._55O : V;
          if (U) {
            var I, h, J, O = k.getEditPointSize() + 2,
              R = k.lp(g);
            if (Hl(W)) {
              if (U._56O && Hl(W) && (h = U._98o, Vb({
                x: h.x - O / 2,
                y: h.y - O / 2,
                width: O,
                height: O
              }, R))) return G._77I = W, M && G.fi({
                kind: "beginEditRotation",
                event: g,
                data: W
              }), G.setCursor("crosshair"), !0;
              if (U._43O && W instanceof Ar)
                for (J = W.getPoints(), I = J.size() - 1; I >= 0; I--)
                  if (h = J.get(I), Vb({
                    x: h.x - O / 2,
                    y: h.y - O / 2,
                    width: O,
                    height: O
                  }, R)) return G._index = I, G._shape = W, M && G.fi({
                    kind: "beginEditPoint",
                    event: g,
                    data: W,
                    index: I
                  }), G.setCursor("crosshair"), !0;
              if (U._42O) {
                var y = W.getRect(),
                  $ = y.x,
                  E = y.y,
                  l = y.width,
                  w = y.height;
                if (G._80I(R, $, E, "northwest", "nwse-resize") || G._80I(R, $ + l / 2, E, iq, Gk) || G._80I(R, $ + l, E, "northeast", "nesw-resize") || G._80I(R, $, E + w / 2, qr, Dn) || G._80I(R, $ + l, E + w / 2, Jl, Dn) || G._80I(R, $, E + w, "southwest", "nesw-resize") || G._80I(R, $ + l / 2, E + w, "south", Gk) || G._80I(R, $ + l, E + w, "southeast", "nwse-resize")) return G._node = W, G._rect = W.getRect(), M && G.fi({
                  kind: "beginEditRect",
                  event: g,
                  data: W,
                  direction: G._89I
                }), !0
              }
            }
            if (U._43O && fb(W) && W.s(gf) === Yi && (J = W.s(sl)))
              for (I = J.size() - 1; I >= 0; I--)
                if (h = J.get(I), Vb({
                  x: h.x - O / 2,
                  y: h.y - O / 2,
                  width: O,
                  height: O
                }, R)) return G._index = I, G._edge = W, M && G.fi({
                  kind: "beginEditPoint",
                  event: g,
                  data: W,
                  index: I
                }), G.setCursor("crosshair"), !0
          }
          return !1
        }
      }, ms_gv: function (m) {
        m._currentSubGraph = V, m.upSubGraph = function () {
          this.setCurrentSubGraph(Gr(this._currentSubGraph))
        }, m.isVisible = function (f) {
          var S = this;
          if (Gr(f) !== S._currentSubGraph) return !1;
          if (fb(f)) {
            var o = f._40I,
              s = f._41I;
            if (!o || !s) return !1;
            if (!(f.s("edge.independent") || S.isVisible(o) && S.isVisible(s))) return !1;
            if (f.isEdgeGroupHidden()) return !1
          } else
            for (var q = f._parent; q && !q.ISubGraph;) {
              if (fl(q) && (!q.isExpanded() || !S.isVisible(q))) return !1;
              q = q._parent
            }
          if (S instanceof Um) {
            if (!f.s("3d.visible")) return !1
          } else if (!f.s("2d.visible")) return !1;
          return S._visibleFunc ? S._visibleFunc(f) : !0
        }, m._16o = function (f) {
          var R = this;
          f.datas.each(function (v) {
            R.invalidateData(v);
            var h = v._parent;
            fl(h) && Hl(v) && v.s(jf) && (R.invalidateData(h), h._49I && h._49I.each(function (j) {
              R.invalidateData(j)
            }))
          }), R.onSelectionChanged(f)
        }, m.onSelectionChanged = function (o) {
          var q = this,
            E = q.sm();
          if (1 === E.size() && ("set" === o.kind || "append" === o.kind)) {
            var Y = E.ld();
            q.isAutoMakeVisible() && q.makeVisible(Y), q._76O && q._dataModel.isAutoAdjustIndex() && q._76O(Y)
          }
        }, m.makeVisible = function (Y) {
          if (Y) {
            var b = this,
              M = b.getDataUI ? b.getDataUI(Y) : b.getData3dUI(Y);
            if (M) {
              var L = Y,
                l = Gr(Y);
              for (l !== b._currentSubGraph && b.setCurrentSubGraph(l);
                (L = L._parent) && L !== l;) fl(L) && L.setExpanded(!0);
              b._23I = Y, b.iv()
            }
          }
        }, m.getLabel = function ($) {
          var k = $.getStyle(Rg);
          return k === b ? $.getName() : k
        }, m.getLabelBackground = function (T) {
          return T.getStyle("label.background")
        }, m.getLabelColor = function (N) {
          return N.getStyle("label.color")
        }, m.getLabel2 = function (F) {
          return F.getStyle("label2")
        }, m.getLabel2Background = function (B) {
          return B.getStyle("label2.background")
        }, m.getLabel2Color = function (b) {
          return b.getStyle("label2.color")
        }, m.getNote = function (k) {
          return k.getStyle(Ug)
        }, m.getNoteBackground = function (L) {
          return L.getStyle("note.background")
        }, m.getNote2 = function (u) {
          return u.getStyle(Mq)
        }, m.getNote2Background = function (R) {
          return R.getStyle("note2.background")
        }, m.handleClick = function (O, r, b) {
          var c = this;
          r ? (c.fi({
            kind: "clickData",
            event: O,
            data: r,
            part: b
          }), c.onDataClicked(r, O)) : (c.fi({
            kind: "clickBackground",
            event: O
          }), c.onBackgroundClicked(O))
        }, m.handleDoubleClick = function (G, O, f) {
          var r = this;
          co(G) && (O ? (r.fi({
            kind: "doubleClickData",
            event: G,
            data: O,
            part: f
          }), r.onDataDoubleClicked(O, G, f), r.checkDoubleClickOnNote(G, O, f) || r.checkDoubleClickOnRotation && r.checkDoubleClickOnRotation(G, O, f) || (fb(O) ? r.onEdgeDoubleClicked(O, G, f) : O.ISubGraph ? r.onSubGraphDoubleClicked(O, G, f) : fl(O) ? r.onGroupDoubleClicked(O, G, f) : O.IDoorWindow ? r.onDoorWindowDoubleClicked(O, G, f) : O.ICSGBox && r.onCSGBoxDoubleClicked(O, G, f))) : (r.fi({
            kind: "doubleClickBackground",
            event: G
          }), r.onBackgroundDoubleClicked(G)))
        }, m.onSubGraphDoubleClicked = function (z) {
          this.setCurrentSubGraph(z)
        }, m.onEdgeDoubleClicked = function (b, J) {
          b.ISubGraph && !$g(J) ? this.setCurrentSubGraph(b) : b.s("edge.toggleable") && b.toggle()
        }, m.onGroupDoubleClicked = function (O) {
          O.s("group.toggleable") && O.toggle()
        }, m.onDoorWindowDoubleClicked = function (E) {
          E.s("dw.toggleable") && E.toggle(!0)
        }, m.onCSGBoxDoubleClicked = function (m, F) {
          var G = this;
          if (G instanceof Um) {
            var O = G.getHitFaceInfo(F);
            O && O.face && m.s(O.face + ".toggleable") && m.toggleFace(O.face, !0)
          }
        }, m.onBackgroundClicked = function () {}, m.onBackgroundDoubleClicked = function () {
          this.upSubGraph()
        }, m.onDataClicked = function () {}, m.onDataDoubleClicked = function () {}, m.onAutoLayoutEnded = function () {}, m.onMoveEnded = function () {}, m.onPanEnded = function () {}, m.onPinchEnded = function () {}, m.onRectSelectEnded = function () {}, m.onZoomEnded = function () {}
      }, ms_icons: function (Q) {
        Q.getRotation = function (C) {
          return C == V ? 0 : C
        }, Q._15O = function () {
          var w = this,
            X = w.s(rj);
          if (X) {
            var v = w,
              S = w.data || w._data,
              k = w._38o = {
                icons: X,
                rects: {}
              };
            for (var W in X) {
              var G = X[W],
                c = Cc(G.shape3d, S, v);
              if (!(Cc(G.visible, S, v) === !1 || Cc(G.for3d, S, v) && !w.I3d || c && !w.I3d)) {
                var h = c ? [c] : Cc(G.names, S, v),
                  q = h ? h.length : 0,
                  g = Cc(G.position, S, v) || 3,
                  L = Cc(G.offsetX, S, v) || 0,
                  j = Cc(G.offsetY, S, v) || 0,
                  K = Cc(G.direction, S, v) || Jl,
                  B = Cc(G.gap, S, v),
                  U = B != V ? B : 1,
                  O = Cc(G.rotation, S, v),
                  l = Cc(G.keepOrien, S, v),
                  e = Cc(G.rotationFixed, S, v) ? O : w.getRotation(O, l, g),
                  T = V,
                  z = k.rects[W] = new Array(q);
                z.rotation = e;
                for (var Z = 0; q > Z; Z++) {
                  var Y, f, C, m, x = h[Z];
                  if (c) C = 0, m = 0;
                  else {
                    var s = ye(x);
                    C = Cc(G.width, S, v), m = Cc(G.height, S, v), C == V && (C = lc(s, S)), m == V && (m = Ec(s, S))
                  } if (T ? K === Jl ? L += C / 2 : K === qr ? L -= C / 2 : K === iq ? j -= m / 2 : j += m / 2 : T = {
                    width: C,
                    height: m
                  }, w.I3d) {
                    var d = -C / 2,
                      i = -m / 2;
                    f = {
                      width: C,
                      height: m,
                      mat: w._16O(Cc(G.autorotate, S, v), g, T, Cc(G.face, S, v) || fk, Cc(G.t3, S, v), Cc(G.r3, S, v), Cc(G.rotationMode, S, v), L, j),
                      vs: new ko([d, -i, 0, d, -i - m, 0, d + C, -i - m, 0, d + C, -i, 0])
                    }
                  } else Y = w.getPosition(g, L, j, T, Cc(G.positionFixed, S, v)), f = {
                    x: Y.x - C / 2,
                    y: Y.y - m / 2,
                    width: C,
                    height: m
                  }, w._68o(f, e);
                  z[Z] = f, K === Jl ? L += C / 2 + U : K === qr ? L -= C / 2 + U : K === iq ? j -= m / 2 + U : j += m / 2 + U
                }
              }
            }
          }
        }
      }
    });
    var bp = {
        1: 1,
        2: 1,
        6: 1,
        9: 1,
        10: 1,
        14: 1,
        15: 1,
        16: 1,
        21: 1,
        22: 1,
        26: 1,
        29: 1,
        30: 1,
        34: 1,
        36: 1,
        38: 1,
        40: 1,
        42: 1,
        45: 1,
        50: 1,
        52: 1,
        54: 1
      },
      Pp = {
        3: 1,
        7: 1,
        11: 1,
        17: 1,
        23: 1,
        27: 1,
        31: 1,
        44: 1,
        46: 1,
        47: 1,
        49: 1
      },
      Kc = {
        translateX: 1,
        translateY: 1,
        zoom: 1,
        scrollBarVisible: 1
      },
      Sm = {
        sourceAgent: 1,
        targetAgent: 1,
        expanded: 1,
        parent: 1,
        host: 1
      },
      bf = {
        position: 1,
        width: 1,
        height: 1,
        expanded: 1,
        rotation: 1,
        "s:edge.points": 1
      },
      gs = {
        "edge.type": 1,
        "edge.group": 1
      },
      cg = {
        rotation: 1,
        rotationX: 1,
        rotationZ: 1
      },
      fs = {
        position: 1,
        width: 1,
        height: 1,
        "s:grid.row.count": 1,
        "s:grid.column.count": 1,
        "s:grid.row.percents": 1,
        "s:grid.column.percents": 1,
        "s:grid.border": 1,
        "s:grid.border.left": 1,
        "s:grid.border.right": 1,
        "s:grid.border.top": 1,
        "s:grid.border.bottom": 1,
        "s:grid.gap": 1
      },
      Kl = {
        "attach.row.index": 1,
        "attach.column.index": 1,
        "attach.row.span": 1,
        "attach.column.span": 1,
        "attach.padding": 1,
        "attach.padding.left": 1,
        "attach.padding.right": 1,
        "attach.padding.top": 1,
        "attach.padding.bottom": 1,
        "attach.index": 1,
        "attach.offset": 1,
        "attach.offset.relative": 1,
        "attach.offset.opposite": 1,
        "attach.gap": 1,
        "attach.gap.relative": 1,
        "attach.thickness": 1
      },
      pc = {
        shape: 1,
        thickness: 1,
        position: 1
      },
      Cb = function (A, T) {
        if (!A || !fl(T) || T.isEmpty()) return !1;
        for (A = A._parent; fl(A);) {
          if (A === T) return !0;
          A = A._parent
        }
        return !1
      },
      Gr = function (X) {
        if (!X) return V;
        if (fb(X)) {
          var M = X._40I,
            a = X._41I;
          if (!M || !a) return V;
          var N = Gr(M),
            w = Gr(a);
          return N === w ? N : V
        }
        for (var E = X._parent; fb(E) && !E.ISubGraph;) E = E._parent;
        return E ? E.ISubGraph ? E : Gr(E) : V
      },
      Lc = function (d, R, k, C) {
        var E = R.getStyle(k) * C;
        E && fn(d, E), E = R.getStyle(k + ".left") * C, E && (d.x -= E, d.width += E), E = R.getStyle(k + ".right") * C, E && (d.width += E), E = R.getStyle(k + ".top") * C, E && (d.y -= E, d.height += E), E = R.getStyle(k + ".bottom") * C, E && (d.height += E), d.width < 0 && (d.width = -d.width, d.x -= d.width), d.height < 0 && (d.height = -d.height, d.y -= d.height)
      },
      af = function (l) {
        for (var a, Q = 0, _ = l.size(); _ > Q; Q++)
          if (a = l.getChildAt(Q), Hl(a) && af(a)) return !0;
        return l.hasAgentEdges()
      },
      dp = function (r) {
        if (!r) return V;
        for (var j = r._parent; fl(j);) {
          if (!fl(j._parent)) return j.isExpanded() ? r : j;
          j.isExpanded() || (r = j), j = j._parent
        }
        return r
      },
      si = function (z, e) {
        if (!z || !e) return V;
        var u, L, k, b = Gr(z),
          C = Gr(e);
        if (b !== C) {
          for (; C && b !== C;) C = Gr(C);
          if (b === C) return z;
          u = new Vq, u.add(z, 0);
          for (var P = z._parent; Hl(P) && !e.isDescendantOf(P);) u.add(P, 0), P = P._parent;
          for (k = u.size(), L = 0; k > L; L++) {
            var i = u.get(L);
            if (fl(i) && !i.isExpanded()) return i;
            if (i.ISubGraph) return i
          }
          return z
        }
        return z
      },
      Yl = function (H) {
        if (H.isLooped()) return H._source;
        var u = dp(H._source),
          X = dp(H._target);
        return u === X ? H._source : si(u, X)
      },
      Po = function (R) {
        if (R.isLooped()) return R._target;
        var p = dp(R._source),
          C = dp(R._target);
        return p === C ? R._target : si(C, p)
      },
      wc = function (D, X) {
        var r;
        if (fl(X) && X.isExpanded()) {
          var h = D.getDataUI(X);
          h && h._88I && (r = h._88I.rect)
        }
        return r ? r : X.getRect()
      },
      qo = function (F, S, _, T, t) {
        return S ? (_ = Vh(_, wc(F, S)), _.x += T, _.y += t, _) : V
      },
      Nc = function (y, z) {
        if (!y || !z) return V;
        var v, Z, I, K, $, X;
        if (y === z) {
          if (K = y.getLoopedEdges(), !K) return V;
          K = new Vq(K)
        } else {
          if ($ = y.getAgentEdges(), X = z.getAgentEdges(), !$ || !X) return V;
          for (Z = $.size(), v = 0; Z > v; v++) I = $.get(v), X.contains(I) && (K || (K = new Vq), K.add(I))
        } if (K)
          for (v = 0; v < K.size(); v++) I = K.get(v), I.getStyle(gf) === Yi && (I._22I(V), K.removeAt(v), v--);
        return K
      },
      Uf = function (t, o) {
        var X = Nc(t, o);
        if (X && !X.isEmpty()) {
          if (1 === X.size()) return X.get(0)._22I(V), void 0;
          var p = new Vq,
            H = new Vq;
          X.each(function (U) {
            var g = U.s("edge.group");
            p.contains(g) || p.add(g)
          }), p.sort(), p.each(function (I) {
            H.add(new T.EdgeGroup(X.toList(function (V) {
              return I === V.s("edge.group")
            }), H))
          }), H.each(function (T) {
            T.each(function (N) {
              N._22I(T)
            })
          })
        }
      },
      Br = function (U, T) {
        if (T) {
          var u = T.rect,
            C = T.color,
            F = T.rotation,
            $ = T.labelWidth,
            B = T.background,
            I = T.opacity,
            f = T.scale,
            c = f != V && 1 !== f;
          if (I != V) {
            var g = U.globalAlpha;
            U.globalAlpha *= I
          }
          if (F || c) {
            U.save();
            var N = u.x + u.width / 2,
              k = u.y + u.height / 2;
            Md(U, N, k), F && Hf(U, F), c && U.scale(f, f), Md(U, -N, -k)
          }
          if (B && en(U, u.x, u.y, u.width, u.height, B), $) {
            var A = u.width,
              d = U.createLinearGradient(u.x, u.y, u.x + A, u.y);
            d.addColorStop(0, C), d.addColorStop(.9, C), d.addColorStop(1, Lp), C = d, u.width = $
          }
          qm(U, T.ss, u, T.font, C, T.align), $ && (u.width = A), (F || c) && U.restore(), I != V && (U.globalAlpha = g)
        }
      },
      fp = function (k, t) {
        if (t) {
          var F = t.rect,
            p = F.x,
            x = F.y,
            z = F.width,
            M = F.height,
            W = t.background,
            f = t.backgroundImage,
            m = t.borderWidth,
            u = t.borderColor,
            w = t.labelWidth,
            R = t.opacity,
            j = t.scale,
            P = j != V && 1 !== j;
          if (R != V) {
            var b = k.globalAlpha;
            k.globalAlpha *= R
          }
          if (P) {
            k.save();
            var I = F.x + F.width / 2,
              H = F.y + F.height / 2;
            Md(k, I, H), k.scale(j, j), Md(k, -I, -H)
          }
          if (t.expanded) {
            var J = o(8, z / 4),
              h = x + M - 8;
            if (k.fillStyle = W, k.beginPath(), k.moveTo(p, x), k.lineTo(p, h), k.lineTo(p + z / 2, h), k.lineTo(p + z / 2, x + M), k.lineTo(p + z / 2 + J, h), k.lineTo(p + z, h), k.lineTo(p + z, x), k.closePath(), k.fill(), m && (k.lineWidth = m, k.lineJoin = "round", k.lineCap = "round", k.strokeStyle = u ? u : Il(W), k.beginPath(), k.moveTo(p + z, x), k.lineTo(p + z, h), k.lineTo(p + z / 2 + J, h), k.lineTo(p + z / 2, x + M), k.stroke(), k.strokeStyle = u ? u : Pr(W), k.beginPath(), k.moveTo(p + z, x), k.lineTo(p, x), k.lineTo(p, h), k.lineTo(p + z / 2, h), k.lineTo(p + z / 2, x + M), k.stroke()), f) Rm(k, ye(f), ho, F.x, F.y, F.width, F.height - 8, t.data, t.view);
            else {
              if (F.height -= 8, W = t.color, w) {
                var N = z,
                  s = k.createLinearGradient(p, x, p + N, x);
                s.addColorStop(0, W), s.addColorStop(.9, W), s.addColorStop(1, Lp), W = s, F.width = w
              }
              qm(k, t.ss, F, t.font, W, t.align), w && (F.width = N), F.height += 8
            }
          } else if (t.icon) ts(k, ye(t.icon), p, x, z, M, t.data, t.view);
          else {
            var Q = z / 2;
            m && (k.lineWidth = m, k.lineJoin = "round", k.lineCap = "round", k.strokeStyle = u ? u : Il(W), k.beginPath(), k.arc(p + Q, x + Q, Q, O, 1.6 * S, !0), k.moveTo(p + Q, x + M), k.lineTo(p + z - Q / 5, x + Q), k.stroke(), k.strokeStyle = u ? u : Pr(W), k.beginPath(), k.arc(p + Q, x + Q, Q, 1.6 * S, O, !0), k.moveTo(p + Q, x + M), k.lineTo(p + Q / 5, x + Q), k.stroke()), k.fillStyle = W, k.beginPath(), k.arc(p + Q, x + Q, Q, 0, i, !0), k.moveTo(p + Q, x + M), k.lineTo(p + z - Q / 5, x + Q), k.lineTo(p + Q / 5, x + Q), k.closePath(), k.fill(), k.fillStyle = t.color, k.beginPath(), k.arc(p + Q, x + Q, Q / 3, 0, i, !0), k.fill()
          }
          P && k.restore(), R != V && (k.globalAlpha = b)
        }
      },
      os = function (m, M) {
        return M > 2 * m ? m : M / 2
      },
      Sf = function (E, i, L, t) {
        if (!E || !i) return 0;
        var B = f(i.y - E.y, i.x - E.x);
        return L || (B = i.x < E.x ? B + S : B), B + t
      },
      yq = function (S, J, C, E, h, s, V) {
        V && (S.x > J.x || S.x === J.x && S.y > J.y) && (C = nl[C], h = -h);
        var O = Vh(C, {
          x: 0,
          y: 0,
          width: Pq(S, J),
          height: 0
        }, s);
        return O.x += E, O.y += h, O = new Jb(f(J.y - S.y, J.x - S.x)).tf(O), O.x += S.x, O.y += S.y, O
      },
      Eo = function (y, R, m, I, r) {
        if (y._19Q = !0, !m.getEdgeGroup()) return I ? m.s("edge.gap") : 0;
        var b, J = 0,
          t = 0,
          U = 0;
        if (m.getEdgeGroup().getSiblings().each(function (Z) {
          Z.each(function (G) {
            if (R.isVisible(G) && G.s(gf) == r) {
              var F = G.s("edge.gap");
              b ? (t += U / 2 + F / 2, U = F) : (b = G, U = F), G === m && (J = t)
            }
          })
        }), I) return t - J + U;
        var q = J - t / 2;
        return b && m._40I !== b._40I && (y._19Q = !1), q
      },
      Aj = function () {
        var E = function (V) {
          var O = [];
          return V.forEach(function (B) {
            O.push({
              x: B.x,
              y: B.y
            }), O.push({
              x: B.x + B.width,
              y: B.y + B.height
            }), O.push({
              x: B.x + B.width,
              y: B.y
            }), O.push({
              x: B.x,
              y: B.y + B.height
            })
          }), O
        };
        return function (z, G, U) {
          if ("oval" === z) {
            var O = 0,
              p = U.height / U.width,
              P = p * p,
              t = U.x + U.width / 2,
              h = U.y + U.height / 2,
              $ = E(G);
            $.forEach(function (i) {
              var V = i.x - t,
                j = i.y - h,
                $ = V * V + j * j / P;
              $ > O && (O = $)
            }), O = C(O);
            var S = p * O;
            return {
              x: t - O,
              y: h - S,
              width: 2 * O,
              height: 2 * S
            }
          }
          if ("circle" === z) {
            var c = 0,
              t = U.x + U.width / 2,
              h = U.y + U.height / 2,
              $ = E(G);
            return $.forEach(function (q) {
              var _ = q.x - t,
                e = q.y - h,
                K = _ * _ + e * e;
              K > c && (c = K)
            }), c = C(c), {
              x: t - c,
              y: h - c,
              width: 2 * c,
              height: 2 * c
            }
          }
          return "roundRect" === z ? (fn(U, o(U.width, U.height) / 16), U) : U
        }
      }(),
      Vd = T.graph = {},
      Pm = function (q, T, o) {
        Vm(_ + ".graph." + q, T, o)
      };
    T.layout = {};
    var Pf = {
      comps: [{
        type: Wd,
        points: [85, 50, 70, 115, 100, 71, 86, 107, 88, 49, 47, 65, 84, 72, 67, 82, 81, 71, 90, 99, 101, 57, 74, 118, 97, 106, 81, 104, 83, 57, 69, 100, 120, 101, 77, 50, 102, 73, 116, 53, 103, 106, 110, 84, 76, 103, 113, 104, 104, 57, 119, 108, 74, 69, 56, 68, 112, 67, 121, 49, 57, 86, 98, 75],
        borderWidth: 1,
        borderColor: V
      }]
    };
    Pf[ag] = Pf[Ji] = 160, ro("node_image", vp(30, 30, [{
      type: Pg,
      rect: [4, 5, 22, 16],
      gradient: vc,
      gradientColor: wo,
      background: Tq
    }, {
      type: Pg,
      rect: [2, 3, 26, 20],
      borderWidth: 1,
      borderColor: Tq
    }, {
      type: Pg,
      rect: [11, 23, 8, 4],
      background: Tq
    }, {
      type: Pg,
      rect: [6, 27, 18, 2],
      background: Tq
    }])), ro("node_icon", vp(16, 16, [{
      type: Pg,
      rect: [2, 2, 12, 10],
      gradient: vc,
      gradientColor: wo,
      background: Tq
    }, {
      type: bq,
      rect: [2, 2, 12, 10],
      width: 1,
      color: Tq
    }, {
      type: Pg,
      rect: [6, 12, 4, 2],
      background: Tq
    }, {
      type: Pg,
      rect: [4, 14, 8, 1],
      background: Tq
    }])), ro("group_image", vp(66, 39, [{
      type: Pg,
      rect: [44.3, 18, 18.1, 12.8],
      gradient: vc,
      gradientColor: wo,
      background: Tq
    }, {
      type: Pg,
      rect: [3.3, 17.8, 18.1, 12.8],
      gradient: vc,
      gradientColor: wo,
      background: Tq
    }, {
      type: Pg,
      rect: [15.8, 3.2, 33.5, 26.4],
      borderWidth: 1,
      borderColor: Tq,
      gradient: vc,
      gradientColor: wo,
      background: Tq
    }, {
      type: Pg,
      rect: [26.2, 29.4, 12.8, 4.2],
      background: Tq
    }, {
      type: Pg,
      rect: [21.3, 33.5, 22.5, 2.3],
      background: Tq
    }, {
      type: Pg,
      rect: [5.3, 32.7, 14.1, 2.1],
      background: Tq
    }, {
      type: Pg,
      rect: [9, 30.4, 6.7, 2.4],
      background: Tq
    }, {
      type: Pg,
      rect: [50, 30.7, 6.7, 2.4],
      background: Tq
    }, {
      type: Pg,
      rect: [46.3, 33, 14.1, 2.1],
      background: Tq
    }])), ro("group_icon", vp(16, 16, [{
      type: Pg,
      rect: [4, 12, 4, 2],
      background: Tq
    }, {
      type: Pg,
      rect: [2, 13, 8, 1],
      background: Tq
    }, {
      type: Pg,
      rect: [12, 12, 2, 1],
      background: Tq
    }, {
      type: Pg,
      rect: [11, 13, 4, 1],
      background: Tq
    }, {
      type: Pg,
      rect: [10, 7, 6, 5],
      gradient: vc,
      gradientColor: wo,
      background: Tq
    }, {
      type: Pg,
      rect: [1, 2, 10, 10],
      gradient: vc,
      gradientColor: wo,
      background: Tq
    }, {
      type: bq,
      rect: [1, 2, 10, 10],
      width: 1,
      color: Tq
    }])), ro("edge_icon", vp(16, 16, [{
      type: Pg,
      rect: [2.1, 6.9, 11.5, 2.6],
      rotation: -.79,
      gradient: vc,
      gradientColor: wo,
      background: Tq
    }, {
      type: Pg,
      rect: [10.8, 1, 4, 4],
      background: Tq
    }, {
      type: Pg,
      rect: [1, 11, 4, 4],
      background: Tq
    }])), ro("subGraph_image", vp(72, 45, [{
      type: Wd,
      points: [9, 42, .3, 38.4, 2.4, 28.8, 5.7, 21.6, 11.7, 22.5, 11.7, 15.9, 16.8, 13.8, 21.6, 12, 24.3, 15.9, 27.9, 3, 42.3, 2.1, 59.4, 4.5, 57.3, 18.3, 67.5, 18.9, 69.6, 27.3, 69.9, 38.4, 64.2, 41.4],
      segments: [1, 3, 3, 3, 3, 3, 3, 3, 3],
      gradient: vc,
      gradientColor: wo,
      background: Tq
    }, {
      type: Pg,
      rect: [29.6, 30.7, 3.6, 1.8],
      background: Tq
    }, {
      type: Pg,
      rect: [28.4, 32.3, 6, 1.2],
      background: Tq
    }, {
      type: Pg,
      rect: [37.3, 32, 10.8, 1.8],
      background: Tq
    }, {
      type: Pg,
      rect: [39.1, 29.9, 7.2, 2.3],
      background: Tq
    }, {
      type: Pg,
      rect: [26.6, 23.7, 9.6, 7.2],
      gradient: vc,
      gradientColor: wo,
      background: Tq
    }, {
      type: Pg,
      rect: [34.3, 16.8, 16.8, 13.2],
      borderWidth: 1,
      borderColor: Tq,
      gradient: vc,
      gradientColor: wo,
      background: Tq
    }])), ro("subGraph_icon", vp(17, 17, [{
      type: Wd,
      points: [2.2, 14.6, .2, 11.9, .8, 8.8, 1.8, 5.9, 5.6, 7.4, 3.8, 1.6, 10.3, 3, 14.5, 4.2, 12.2, 7.5, 18.9, 7.2, 14.5, 14.5],
      segments: [1, 3, 3, 3, 3, 3],
      gradient: vc,
      gradientColor: wo,
      background: Tq
    }])), ro("shape_icon", vp(16, 16, [{
      type: Wd,
      points: [1.5, 1, 8.4, 1, 8.4, 7.2, 14.6, 7.1, 14.6, 14.9, 1.5, 14.9, 1.5, 1],
      background: Tq
    }])), ro("polyline_icon", vp(16, 16, [{
        type: Wd,
        points: [1.5, 1, 8.4, 1, 8.4, 7.2, 14.6, 7.1, 14.6, 14.9, 1.5, 14.9, 1.5, 1],
        borderWidth: 1,
        borderColor: Tq
      },
      Ai(7.5, .4), Ai(7.5, 6.3), Ai(13.6, 6.3), Ai(13.6, 14), Ai(.7, 13.9), Ai(.7, .3)
    ])), ro("grid_icon", vp(16, 16, [{
      type: Pg,
      rect: [1, 1, 4, 4],
      background: Tq,
      gradient: vc,
      gradientColor: wo
    }, {
      type: Pg,
      rect: [6, 1, 4, 4],
      background: Tq,
      gradient: vc,
      gradientColor: wo
    }, {
      type: Pg,
      rect: [11, 1, 4, 4],
      background: Tq,
      gradient: vc,
      gradientColor: wo
    }, {
      type: Pg,
      rect: [11, 6, 4, 4],
      background: Tq,
      gradient: vc,
      gradientColor: wo
    }, {
      type: Pg,
      rect: [6, 6, 4, 4],
      background: Tq,
      gradient: vc,
      gradientColor: wo
    }, {
      type: Pg,
      rect: [1, 6, 4, 4],
      background: Tq,
      gradient: vc,
      gradientColor: wo
    }, {
      type: Pg,
      rect: [11, 11, 4, 4],
      background: Tq,
      gradient: vc,
      gradientColor: wo
    }, {
      type: Pg,
      rect: [6, 11, 4, 4],
      background: Tq,
      gradient: vc,
      gradientColor: wo
    }, {
      type: Pg,
      rect: [1, 11, 4, 4],
      background: Tq,
      gradient: vc,
      gradientColor: wo
    }])), ro("light_icon", vp(16, 16, [{
      type: "rect",
      rect: [6, 9, 5, 5],
      borderWidth: 1,
      borderColor: Tq
    }, {
      type: "circle",
      rect: [1, 1, 15, 10],
      borderWidth: 1,
      borderColor: Tq,
      gradient: vc,
      gradientColor: wo,
      background: {
        func: function (h) {
          var E = h ? h.s(Kr) : V;
          return qp(E) ? "rgb(" + P(255 * E[0]) + "," + P(255 * E[1]) + "," + P(255 * E[2]) + ")" : E || Tq
        }
      }
    }]));
    var hp = function (S, J) {
        for (var k = S.vertices, I = 0; I < k.length; I++) {
          var q = k[I],
            y = q.y;
          q.y = q.z, q.z = -y, J && (q.y += J)
        }
      },
      Ck = function (M) {
        for (var V, y, C, p, J, f, w = [], g = [], n = [], d = M.faces, v = 0, q = 0, k = 0, X = d.length; X > v; v++, q += 6, k += 9) {
          var e = d[v];
          1 === e.i ? (V || (V = [], y = [], C = []), ll(e, v, q, k, M, V, C, y)) : 2 === e.i ? (p || (p = [], J = [], f = []), ll(e, v, q, k, M, p, f, J)) : ll(e, v, q, k, M, w, n, g)
        }
        return {
          vs: w,
          uv: g,
          ns: n,
          top_vs: V,
          top_uv: y,
          top_ns: C,
          bottom_vs: p,
          bottom_uv: J,
          bottom_ns: f
        }
      },
      ll = function (Z, l, P, V, e, S, q, T) {
        var f = e.vertices,
          G = e.faceVertexUvs,
          B = f[Z.a],
          U = f[Z.b],
          o = f[Z.c];
        S[V] = B.x, S[V + 1] = B.y, S[V + 2] = B.z, S[V + 3] = U.x, S[V + 4] = U.y, S[V + 5] = U.z, S[V + 6] = o.x, S[V + 7] = o.y, S[V + 8] = o.z;
        var C = Z.vertexNormals;
        if (3 === C.length) {
          var g = C[0],
            j = C[1],
            h = C[2];
          q[V] = g.x, q[V + 1] = g.y, q[V + 2] = g.z, q[V + 3] = j.x, q[V + 4] = j.y, q[V + 5] = j.z, q[V + 6] = h.x, q[V + 7] = h.y, q[V + 8] = h.z
        } else {
          var m = Z.normal;
          q[V] = m.x, q[V + 1] = m.y, q[V + 2] = m.z, q[V + 3] = m.x, q[V + 4] = m.y, q[V + 5] = m.z, q[V + 6] = m.x, q[V + 7] = m.y, q[V + 8] = m.z
        }
        var M = G[0][l][0],
          _ = G[0][l][1],
          d = G[0][l][2];
        T[P] = M.x, T[P + 1] = M.y, T[P + 2] = _.x, T[P + 3] = _.y, T[P + 4] = d.x, T[P + 5] = d.y
      },
      as = function (i, d, q, H, X, I, C, h, Z) {
        q == V && (q = !0), H == V && (H = !0), C == V && (C = 1), h == V && (h = 0);
        var p = new Ki;
        return Mj(p, i, d, Z), Ck(new _d(p, {
          top: q,
          bottom: H,
          curveSegments: X,
          amount: C,
          repeatUVLength: I
        }, -C / 2 + h))
      },
      xe = function (E, B) {
        this.x = E || 0, this.y = B || 0
      };
    xe.prototype = {
      constructor: xe,
      add: function (D) {
        return this.x += D.x, this.y += D.y, this
      }, sub: function (Q) {
        return this.x -= Q.x, this.y -= Q.y, this
      }, equals: function (Z) {
        return Z.x === this.x && Z.y === this.y
      }, multiplyScalar: function (P) {
        return this.x *= P, this.y *= P, this
      }, distanceTo: function (u) {
        return C(this.distanceToSquared(u))
      }, distanceToSquared: function (O) {
        var S = this.x - O.x,
          l = this.y - O.y;
        return S * S + l * l
      }, clone: function () {
        return new xe(this.x, this.y)
      }
    };
    var fj = function (s, M, R) {
      this.x = s || 0, this.y = M || 0, this.z = R || 0
    };
    fj.prototype = {
      constructor: fj,
      set: function (n, j, w) {
        return this.x = n, this.y = j, this.z = w, this
      }, setY: function (h) {
        return this.y = h, this
      }, copy: function (O) {
        return this.x = O.x, this.y = O.y, this.z = O.z, this
      }, add: function (m) {
        return this.x += m.x, this.y += m.y, this.z += m.z, this
      }, addVectors: function (X, v) {
        return this.x = X.x + v.x, this.y = X.y + v.y, this.z = X.z + v.z, this
      }, sub: function ($) {
        return this.x -= $.x, this.y -= $.y, this.z -= $.z, this
      }, subVectors: function (n, w) {
        return this.x = n.x - w.x, this.y = n.y - w.y, this.z = n.z - w.z, this
      }, multiplyScalar: function (h) {
        return this.x *= h, this.y *= h, this.z *= h, this
      }, applyMatrix4: function (r) {
        var p = this.x,
          x = this.y,
          o = this.z,
          g = r.elements;
        return this.x = g[0] * p + g[4] * x + g[8] * o + g[12], this.y = g[1] * p + g[5] * x + g[9] * o + g[13], this.z = g[2] * p + g[6] * x + g[10] * o + g[14], this
      }, divideScalar: function (h) {
        if (0 !== h) {
          var N = 1 / h;
          this.x *= N, this.y *= N, this.z *= N
        } else this.x = 0, this.y = 0, this.z = 0;
        return this
      }, dot: function ($) {
        return this.x * $.x + this.y * $.y + this.z * $.z
      }, length: function () {
        return C(this.x * this.x + this.y * this.y + this.z * this.z)
      }, normalize: function () {
        return this.divideScalar(this.length())
      }, cross: function (B) {
        var e = this.x,
          d = this.y,
          P = this.z;
        return this.x = d * B.z - P * B.y, this.y = P * B.x - e * B.z, this.z = e * B.y - d * B.x, this
      }, crossVectors: function (O, M) {
        var Q = O.x,
          E = O.y,
          a = O.z,
          R = M.x,
          y = M.y,
          K = M.z;
        return this.x = E * K - a * y, this.y = a * R - Q * K, this.z = Q * y - E * R, this
      }, distanceTo: function (K) {
        return C(this.distanceToSquared(K))
      }, distanceToSquared: function (N) {
        var n = this.x - N.x,
          C = this.y - N.y,
          d = this.z - N.z;
        return n * n + C * C + d * d
      }, clone: function () {
        return new fj(this.x, this.y, this.z)
      }
    };
    var Ep = function () {
      this.elements = new Float32Array(16)
    };
    Ep.prototype = {
      constructor: Ep,
      set: function (W, g, k, Z, z, H, l, t, o, x, X, M, y, i, S, e) {
        var T = this.elements;
        return T[0] = W, T[4] = g, T[8] = k, T[12] = Z, T[1] = z, T[5] = H, T[9] = l, T[13] = t, T[2] = o, T[6] = x, T[10] = X, T[14] = M, T[3] = y, T[7] = i, T[11] = S, T[15] = e, this
      }, makeRotationAxis: function (U, L) {
        var V = X(L),
          u = A(L),
          Z = 1 - V,
          r = U.x,
          c = U.y,
          i = U.z,
          M = Z * r,
          P = Z * c;
        return this.set(M * r + V, M * c - u * i, M * i + u * c, 0, M * c + u * i, P * c + V, P * i - u * r, 0, M * i - u * c, P * i + u * r, Z * i * i + V, 0, 0, 0, 0, 1), this
      }
    };
    var Zd = function (X) {
      this.repeatUVLength = X
    };
    Zd.prototype = {
      generateTopUV: function (c, W, Q, H, z, R, x) {
        var A, $, I, U, i = c.vertices,
          s = i[H].x,
          v = i[H].y,
          y = i[z].x,
          E = i[z].y,
          b = i[R].x,
          Z = i[R].y,
          n = this.repeatUVLength;
        if (n) A = 0, $ = 0, I = n, U = n;
        else {
          this._bb || (this._bb = W.getBoundingBox());
          var a = this._bb;
          A = a.minX, $ = a.minY, I = a.maxX - A, U = a.maxY - $
        }
        return x ? [new xe((s - A) / I, (v - $) / U), new xe((y - A) / I, (E - $) / U), new xe((b - A) / I, (Z - $) / U)] : [new xe((s - A) / I, 1 - (v - $) / U), new xe((y - A) / I, 1 - (E - $) / U), new xe((b - A) / I, 1 - (Z - $) / U)]
      }, generateBottomUV: function (f, A, z, m, c, K) {
        return this.generateTopUV(f, A, z, m, c, K, !0)
      }, generateSideWallUV: function (Y, _, q, P, E, i, J, n, G, g, e, d) {
        if (!this._cl) {
          for (var K, c, o = [], z = 0, S = q.length, V = 0; S > V; V++) {
            K = q[V], c = q[(V + 1) % S];
            var x = K.x - c.x,
              r = K.y - c.y,
              I = C(x * x + r * r);
            o.push(z), z += I
          }
          for (var V = 0; S > V; V++) o[V] /= z;
          this._cl = o
        }
        var o = this._cl,
          A = 1 - G / g,
          u = 1 - (G + 1) / g,
          T = o[e],
          H = o[d];
        return H > T && (T += 1), [new xe(T, A), new xe(H, A), new xe(H, u), new xe(T, u)]
      }
    };
    var tp = function (e, q, w, P, H, Q) {
      this.a = e, this.b = q, this.c = w, this.i = Q, this.normal = P instanceof fj ? P : new fj, this.vertexNormals = P instanceof Array ? P : []
    };
    tp.prototype = {
      constructor: tp
    };
    var Ak = function () {},
      Zl = Ak.prototype;
    Zl.getPointAt = function (m) {
      var o = this.getUtoTmapping(m);
      return this.getPoint(o)
    }, Zl.getPoints = function (f) {
      f || (f = 5);
      var X, l = [];
      for (X = 0; f >= X; X++) l.push(this.getPoint(X / f));
      return l
    }, Zl.getSpacedPoints = function (U) {
      U || (U = 5);
      var j, z = [];
      for (j = 0; U >= j; j++) z.push(this.getPointAt(j / U));
      return z
    }, Zl.getLength = function () {
      var z = this.getLengths();
      return z[z.length - 1]
    }, Zl.getLengths = function (A) {
      if (A || (A = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200), this.cacheArcLengths && this.cacheArcLengths.length == A + 1 && !this.needsUpdate) return this.cacheArcLengths;
      this.needsUpdate = !1;
      var t, H, B = [],
        J = this.getPoint(0),
        L = 0;
      for (B.push(0), H = 1; A >= H; H++) t = this.getPoint(H / A), L += t.distanceTo(J), B.push(L), J = t;
      return this.cacheArcLengths = B, B
    }, Zl.getUtoTmapping = function (o, q) {
      var E, n = this.getLengths(),
        c = 0,
        A = n.length;
      E = q ? q : o * n[A - 1];
      for (var y, l = 0, m = A - 1; m >= l;)
        if (c = M(l + (m - l) / 2), y = n[c] - E, 0 > y) l = c + 1;
        else {
          if (!(y > 0)) {
            m = c;
            break
          }
          m = c - 1
        }
      if (c = m, n[c] == E) {
        var d = c / (A - 1);
        return d
      }
      var w = n[c],
        Z = n[c + 1],
        s = Z - w,
        D = (E - w) / s,
        d = (c + D) / (A - 1);
      return d
    }, Zl.getTangent = function (D) {
      var S = 1e-4,
        A = D - S,
        f = D + S;
      0 > A && (A = 0), f > 1 && (f = 1);
      var q = this.getPoint(A),
        E = this.getPoint(f),
        m = E.clone().sub(q);
      return m.normalize()
    }, Zl.getTangentAt = function (V) {
      var o = this.getUtoTmapping(V);
      return this.getTangent(o)
    }, Ak.create = function (u, J) {
      return u.prototype = En(Ak.prototype), u.prototype.getPoint = J, u
    };
    var rc = function () {
        this.curves = [], this.autoClose = !1
      },
      yl = rc.prototype = En(Zl);
    yl.add = function (_) {
      this.curves.push(_)
    }, yl.closePath = function () {
      var A = this.curves[0].getPoint(0),
        E = this.curves[this.curves.length - 1].getPoint(1);
      A.equals(E) || this.curves.push(new yi(E, A))
    }, yl.getPoint = function (J) {
      for (var v, h, O = J * this.getLength(), W = this.getCurveLengths(), B = 0; B < W.length;) {
        if (W[B] >= O) {
          v = W[B] - O, h = this.curves[B];
          var b = 1 - v / h.getLength();
          return h.getPointAt(b)
        }
        B++
      }
      return null
    }, yl.getLength = function () {
      var D = this.getCurveLengths();
      return D[D.length - 1]
    }, yl.getCurveLengths = function () {
      if (this.cacheLengths && this.cacheLengths.length == this.curves.length) return this.cacheLengths;
      var d, f = [],
        D = 0,
        S = this.curves.length;
      for (d = 0; S > d; d++) D += this.curves[d].getLength(), f.push(D);
      return this.cacheLengths = f, f
    }, yl.getTransformedPoints = function (Z) {
      return this.getPoints(Z)
    }, yl.getBoundingBox = function () {
      var L, m, k, t, p, g, $ = this.getPoints();
      L = m = Number.NEGATIVE_INFINITY, t = p = Number.POSITIVE_INFINITY;
      var X, h, P, y, Z = $[0] instanceof fj;
      for (y = Z ? new fj : new xe, h = 0, P = $.length; P > h; h++) X = $[h], X.x > L && (L = X.x), X.x < t && (t = X.x), X.y > m && (m = X.y), X.y < p && (p = X.y), Z && (X.z > k && (k = X.z), X.z < g && (g = X.z)), y.add(X);
      var W = {
        minX: t,
        minY: p,
        maxX: L,
        maxY: m
      };
      return Z && (W.maxZ = k, W.minZ = g), W
    };
    var kq = function (z) {
        rc.call(this), this.actions = [], z && this.fromPoints(z)
      },
      wq = kq.prototype = En(rc.prototype),
      Xe = "moveTo",
      ff = "lineTo",
      Cl = "quadraticCurveTo",
      sd = "bezierCurveTo",
      se = "arc",
      un = "ellipse";
    wq.fromPoints = function (u) {
      this.moveTo(u[0].x, u[0].y);
      for (var E = 1, d = u.length; d > E; E++) this.lineTo(u[E].x, u[E].y)
    }, wq.moveTo = function () {
      var k = Array.prototype.slice.call(arguments);
      this.actions.push({
        action: Xe,
        args: k
      })
    }, wq.lineTo = function (n, B) {
      var R = Array.prototype.slice.call(arguments),
        P = this.actions[this.actions.length - 1].args,
        Z = P[P.length - 2],
        x = P[P.length - 1],
        O = new yi(new xe(Z, x), new xe(n, B));
      this.curves.push(O), this.actions.push({
        action: ff,
        args: R
      })
    }, wq.quadraticCurveTo = function (e, p, o, H) {
      var h = Array.prototype.slice.call(arguments),
        V = this.actions[this.actions.length - 1].args,
        w = V[V.length - 2],
        S = V[V.length - 1],
        B = new Oe(new xe(w, S), new xe(e, p), new xe(o, H));
      this.curves.push(B), this.actions.push({
        action: Cl,
        args: h
      })
    }, wq.bezierCurveTo = function (v, x, h, t, e, s) {
      var j = Array.prototype.slice.call(arguments),
        S = this.actions[this.actions.length - 1].args,
        M = S[S.length - 2],
        V = S[S.length - 1],
        X = new lb(new xe(M, V), new xe(v, x), new xe(h, t), new xe(e, s));
      this.curves.push(X), this.actions.push({
        action: sd,
        args: j
      })
    }, wq.arc = function (x, i, N, Q, $, U) {
      var g = this.actions[this.actions.length - 1].args,
        c = g[g.length - 2],
        s = g[g.length - 1];
      this.absarc(x + c, i + s, N, Q, $, U)
    }, wq.absarc = function (F, P, i, l, p, c) {
      this.absellipse(F, P, i, i, l, p, c)
    }, wq.ellipse = function (B, w, d, I, H, a, t) {
      var T = this.actions[this.actions.length - 1].args,
        Q = T[T.length - 2],
        q = T[T.length - 1];
      this.absellipse(B + Q, w + q, d, I, H, a, t)
    }, wq.absellipse = function (E, c, C, $, h, A, X) {
      var v = Array.prototype.slice.call(arguments),
        O = new kn(E, c, C, $, h, A, X);
      this.curves.push(O);
      var D = O.getPoint(1);
      v.push(D.x), v.push(D.y), this.actions.push({
        action: un,
        args: v
      })
    }, wq.getSpacedPoints = function (D) {
      D || (D = 40);
      for (var y = [], h = 0; D > h; h++) y.push(this.getPoint(h / D));
      return y
    }, wq.getPoints = function (P, g) {
      P = P || 12;
      var $, u, a, C, L, y, s, c, o, O, d, K, H, m, Z, f, F, _, N = [];
      for ($ = 0, u = this.actions.length; u > $; $++) switch (a = this.actions[$], C = a.action, L = a.args, C) {
      case Xe:
        N.push(new xe(L[0], L[1]));
        break;
      case ff:
        N.push(new xe(L[0], L[1]));
        break;
      case Cl:
        for (y = L[2], s = L[3], O = L[0], d = L[1], N.length > 0 ? (m = N[N.length - 1], K = m.x, H = m.y) : (m = this.actions[$ - 1].args, K = m[m.length - 2], H = m[m.length - 1]), Z = 1; P >= Z; Z++) f = Z / P, F = om.b2(f, K, O, y), _ = om.b2(f, H, d, s), N.push(new xe(F, _));
        break;
      case sd:
        for (y = L[4], s = L[5], O = L[0], d = L[1], c = L[2], o = L[3], N.length > 0 ? (m = N[N.length - 1], K = m.x, H = m.y) : (m = this.actions[$ - 1].args, K = m[m.length - 2], H = m[m.length - 1]), Z = 1; P >= Z; Z++) f = Z / P, F = om.b3(f, K, O, c, y), _ = om.b3(f, H, d, o, s), N.push(new xe(F, _));
        break;
      case se:
        var Y, E = L[0],
          R = L[1],
          p = L[2],
          J = L[3],
          w = L[4],
          M = !!L[5],
          I = w - J,
          v = 2 * P;
        for (Z = 1; v >= Z; Z++) f = Z / v, M || (f = 1 - f), Y = J + f * I, F = E + p * X(Y), _ = R + p * A(Y), N.push(new xe(F, _));
        break;
      case un:
        var Y, E = L[0],
          R = L[1],
          T = L[2],
          r = L[3],
          J = L[4],
          w = L[5],
          M = !!L[6],
          I = w - J,
          v = 2 * P;
        for (Z = 1; v >= Z; Z++) f = Z / v, M || (f = 1 - f), Y = J + f * I, F = E + T * X(Y), _ = R + r * A(Y), N.push(new xe(F, _))
      }
      var U = N[N.length - 1],
        l = 1e-10;
      return G(U.x - N[0].x) < l && G(U.y - N[0].y) < l && N.splice(N.length - 1, 1), g && N.push(N[0]), N
    }, wq.toShapes = function (V, D) {
      function k($) {
        var M, j, g, J, z, X = [],
          _ = new kq;
        for (M = 0, j = $.length; j > M; M++) g = $[M], z = g.args, J = g.action, J == Xe && 0 != _.actions.length && (X.push(_), _ = new kq), _[J].apply(_, z);
        return 0 != _.actions.length && X.push(_), X
      }

      function j(g) {
        for (var K = [], s = 0, j = g.length; j > s; s++) {
          var Y = g[s],
            y = new Ki;
          y.actions = Y.actions, y.curves = Y.curves, K.push(y)
        }
        return K
      }

      function x(t, M) {
        for (var I = 1e-10, U = M.length, N = !1, x = U - 1, h = 0; U > h; x = h++) {
          var P = M[x],
            l = M[h],
            L = l.x - P.x,
            d = l.y - P.y;
          if (G(d) > I) {
            if (0 > d && (P = M[h], L = -L, l = M[x], d = -d), t.y < P.y || t.y > l.y) continue;
            if (t.y == P.y) {
              if (t.x == P.x) return !0
            } else {
              var y = d * (t.x - P.x) - L * (t.y - P.y);
              if (0 == y) return !0;
              if (0 > y) continue;
              N = !N
            }
          } else {
            if (t.y != P.y) continue;
            if (l.x <= t.x && t.x <= P.x || P.x <= t.x && t.x <= l.x) return !0
          }
        }
        return N
      }
      var v = k(this.actions);
      if (0 == v.length) return [];
      if (D === !0) return j(v);
      var Y, J, T, N = [];
      if (1 == v.length) return J = v[0], T = new Ki, T.actions = J.actions, T.curves = J.curves, N.push(T), N;
      var L = !Ki.Utils.isClockWise(v[0].getPoints());
      L = V ? !L : L;
      var R, e = [],
        $ = [],
        c = [],
        l = 0;
      $[l] = b, c[l] = [];
      var h, u;
      for (h = 0, u = v.length; u > h; h++) J = v[h], R = J.getPoints(), Y = om.isClockWise(R), Y = V ? !Y : Y, Y ? (!L && $[l] && l++, $[l] = {
        s: new Ki,
        p: R
      }, $[l].s.actions = J.actions, $[l].s.curves = J.curves, L && l++, c[l] = []) : c[l].push({
        h: J,
        p: R[0]
      });
      if (!$[0]) return j(v);
      if ($.length > 1) {
        for (var d = !1, A = [], X = 0, q = $.length; q > X; X++) e[X] = [];
        for (var X = 0, q = $.length; q > X; X++) {
          $[X];
          for (var K = c[X], F = 0; F < K.length; F++) {
            for (var C = K[F], E = !0, i = 0; i < $.length; i++) x(C.p, $[i].p) && (X != i && A.push({
              froms: X,
              tos: i,
              hole: F
            }), E ? (E = !1, e[i].push(C)) : d = !0);
            E && e[X].push(C)
          }
        }
        A.length > 0 && (d || (c = e))
      }
      var S, M, B;
      for (h = 0, u = $.length; u > h; h++)
        for (T = $[h].s, N.push(T), S = c[h], M = 0, B = S.length; B > M; M++) T.holes.push(S[M].h);
      return N
    };
    var Ki = function () {
        kq.apply(this, arguments), this.holes = []
      },
      ps = Ki.prototype = En(wq);
    ps.getPointsHoles = function (C) {
      var X, A = this.holes.length,
        e = [];
      for (X = 0; A > X; X++) e[X] = this.holes[X].getTransformedPoints(C);
      return e
    }, ps.extractAllPoints = function (D) {
      return {
        shape: this.getTransformedPoints(D),
        holes: this.getPointsHoles(D)
      }
    }, ps.extractPoints = function (G) {
      return this.extractAllPoints(G)
    };
    var om = {
        triangulateShape: function (Z, a) {
          function I(h, i, k) {
            return h.x != i.x ? h.x < i.x ? h.x <= k.x && k.x <= i.x : i.x <= k.x && k.x <= h.x : h.y < i.y ? h.y <= k.y && k.y <= i.y : i.y <= k.y && k.y <= h.y
          }

          function T(M, R, v, B, L) {
            var c = 1e-10,
              f = R.x - M.x,
              h = R.y - M.y,
              W = B.x - v.x,
              O = B.y - v.y,
              r = M.x - v.x,
              J = M.y - v.y,
              q = h * W - f * O,
              j = h * r - f * J;
            if (G(q) > c) {
              var Z;
              if (q > 0) {
                if (0 > j || j > q) return [];
                if (Z = O * r - W * J, 0 > Z || Z > q) return []
              } else {
                if (j > 0 || q > j) return [];
                if (Z = O * r - W * J, Z > 0 || q > Z) return []
              } if (0 == Z) return !L || 0 != j && j != q ? [M] : [];
              if (Z == q) return !L || 0 != j && j != q ? [R] : [];
              if (0 == j) return [v];
              if (j == q) return [B];
              var u = Z / q;
              return [{
                x: M.x + u * f,
                y: M.y + u * h
              }]
            }
            if (0 != j || O * r != W * J) return [];
            var z = 0 == f && 0 == h,
              d = 0 == W && 0 == O;
            if (z && d) return M.x != v.x || M.y != v.y ? [] : [M];
            if (z) return I(v, B, M) ? [M] : [];
            if (d) return I(M, R, v) ? [v] : [];
            var m, w, E, Q, Y, s, e, g;
            return 0 != f ? (M.x < R.x ? (m = M, E = M.x, w = R, Q = R.x) : (m = R, E = R.x, w = M, Q = M.x), v.x < B.x ? (Y = v, e = v.x, s = B, g = B.x) : (Y = B, e = B.x, s = v, g = v.x)) : (M.y < R.y ? (m = M, E = M.y, w = R, Q = R.y) : (m = R, E = R.y, w = M, Q = M.y), v.y < B.y ? (Y = v, e = v.y, s = B, g = B.y) : (Y = B, e = B.y, s = v, g = v.y)), e >= E ? e > Q ? [] : Q == e ? L ? [] : [Y] : g >= Q ? [Y, w] : [Y, s] : E > g ? [] : E == g ? L ? [] : [m] : g >= Q ? [m, w] : [m, s]
          }

          function W(w, j, h, e) {
            var M = 1e-10,
              k = j.x - w.x,
              r = j.y - w.y,
              S = h.x - w.x,
              Q = h.y - w.y,
              q = e.x - w.x,
              v = e.y - w.y,
              m = k * Q - r * S,
              O = k * v - r * q;
            if (G(m) > M) {
              var l = q * Q - v * S;
              return m > 0 ? O >= 0 && l >= 0 : O >= 0 || l >= 0
            }
            return O > 0
          }

          function $(n, F) {
            function S(B, G) {
              var R = x.length - 1,
                t = B - 1;
              0 > t && (t = R);
              var y = B + 1;
              y > R && (y = 0);
              var D = W(x[B], x[t], x[y], A[G]);
              if (!D) return !1;
              var f = A.length - 1,
                k = G - 1;
              0 > k && (k = f);
              var X = G + 1;
              return X > f && (X = 0), D = W(A[G], A[k], A[X], x[B]), D ? !0 : !1
            }

            function f(y, w) {
              var r, e, $;
              for (r = 0; r < x.length; r++)
                if (e = r + 1, e %= x.length, $ = T(y, w, x[r], x[e], !0), $.length > 0) return !0;
              return !1
            }

            function V(s, c) {
              var e, l, Z, P, G;
              for (e = 0; e < M.length; e++)
                for (l = F[M[e]], Z = 0; Z < l.length; Z++)
                  if (P = Z + 1, P %= l.length, G = T(s, c, l[Z], l[P], !0), G.length > 0) return !0;
              return !1
            }
            for (var A, N, p, R, m, k, y, z, r, v, h, x = n.concat(), M = [], H = [], Y = 0, l = F.length; l > Y; Y++) M.push(Y);
            for (var X = 0, D = 2 * M.length; M.length > 0 && (D--, !(0 > D));)
              for (p = X; p < x.length; p++) {
                R = x[p], N = -1;
                for (var Y = 0; Y < M.length; Y++)
                  if (k = M[Y], y = R.x + ":" + R.y + ":" + k, H[y] === b) {
                    A = F[k];
                    for (var I = 0; I < A.length; I++)
                      if (m = A[I], S(p, I) && !f(R, m) && !V(R, m)) {
                        N = I, M.splice(Y, 1), z = x.slice(0, p + 1), r = x.slice(p), v = A.slice(N), h = A.slice(0, N + 1), x = z.concat(v).concat(h).concat(r), X = p;
                        break
                      }
                    if (N >= 0) break;
                    H[y] = !0
                  }
                if (N >= 0) break
              }
            return x
          }
          for (var O, J, C, F, P, Q, B = {}, K = Z.concat(), s = 0, q = a.length; q > s; s++) Array.prototype.push.apply(K, a[s]);
          for (O = 0, J = K.length; J > O; O++) P = K[O].x + ":" + K[O].y, B[P] !== b, B[P] = O;
          var A = $(Z, a),
            v = Hm.Triangulate(A, !1);
          for (O = 0, J = v.length; J > O; O++)
            for (F = v[O], C = 0; 3 > C; C++) P = F[C].x + ":" + F[C].y, Q = B[P], Q !== b && (F[C] = Q);
          return v.concat()
        }, isClockWise: function (k) {
          return Hm.Triangulate.area(k) < 0
        }, b2p0: function (t, C) {
          var X = 1 - t;
          return X * X * C
        }, b2p1: function (S, t) {
          return 2 * (1 - S) * S * t
        }, b2p2: function (X, D) {
          return X * X * D
        }, b2: function (u, b, V, h) {
          return this.b2p0(u, b) + this.b2p1(u, V) + this.b2p2(u, h)
        }, b3p0: function (F, a) {
          var R = 1 - F;
          return R * R * R * a
        }, b3p1: function (o, D) {
          var w = 1 - o;
          return 3 * w * w * o * D
        }, b3p2: function (O, p) {
          var i = 1 - O;
          return 3 * i * O * O * p
        }, b3p3: function (T, L) {
          return T * T * T * L
        }, b3: function (u, r, M, $, N) {
          return this.b3p0(u, r) + this.b3p1(u, M) + this.b3p2(u, $) + this.b3p3(u, N)
        }
      },
      Hm = {
        faces: {},
        face: "helvetiker",
        weight: "normal",
        style: "normal",
        size: 150,
        divisions: 10,
        getFace: function () {
          try {
            return this.faces[this.face][this.weight][this.style]
          } catch (h) {
            throw "The font " + this.face + " with " + this.weight + " weight and " + this.style + " style is missing."
          }
        }, loadFace: function (s) {
          var b = s.familyName.toLowerCase(),
            $ = this;
          return $.faces[b] = $.faces[b] || {}, $.faces[b][s.cssFontWeight] = $.faces[b][s.cssFontWeight] || {}, $.faces[b][s.cssFontWeight][s.cssFontStyle] = s, $.faces[b][s.cssFontWeight][s.cssFontStyle] = s, s
        }, drawText: function (C) {
          var L, W = this.getFace(),
            A = this.size / W.resolution,
            G = 0,
            n = String(C).split(""),
            c = n.length,
            r = [];
          for (L = 0; c > L; L++) {
            var X = new kq,
              _ = this.extractGlyphPoints(n[L], W, A, G, X);
            G += _.offset, r.push(_.path)
          }
          var Q = G / 2;
          return {
            paths: r,
            offset: Q
          }
        }, extractGlyphPoints: function (Z, F, j, U, T) {
          var Q, H, P, e, n, M, u, W, J, L, D, R, B, N, i, b, t, v, l, f = [],
            x = F.glyphs[Z] || F.glyphs["?"];
          if (x) {
            if (x.o)
              for (e = x._cachedOutline || (x._cachedOutline = x.o.split(" ")), M = e.length, u = j, W = j, Q = 0; M > Q;) switch (n = e[Q++]) {
              case "m":
                J = e[Q++] * u + U, L = e[Q++] * W, T.moveTo(J, L);
                break;
              case "l":
                J = e[Q++] * u + U, L = e[Q++] * W, T.lineTo(J, L);
                break;
              case "q":
                if (D = e[Q++] * u + U, R = e[Q++] * W, i = e[Q++] * u + U, b = e[Q++] * W, T.quadraticCurveTo(i, b, D, R), l = f[f.length - 1])
                  for (B = l.x, N = l.y, H = 1, P = this.divisions; P >= H; H++) {
                    var d = H / P;
                    om.b2(d, B, i, D), om.b2(d, N, b, R)
                  }
                break;
              case "b":
                if (D = e[Q++] * u + U, R = e[Q++] * W, i = e[Q++] * u + U, b = e[Q++] * W, t = e[Q++] * u + U, v = e[Q++] * W, T.bezierCurveTo(i, b, t, v, D, R), l = f[f.length - 1])
                  for (B = l.x, N = l.y, H = 1, P = this.divisions; P >= H; H++) {
                    var d = H / P;
                    om.b3(d, B, i, t, D), om.b3(d, N, b, v, R)
                  }
              }
            return {
              offset: x.ha * j,
              path: T
            }
          }
        }
      };
    Hm.generateShapes = function (v, h) {
        h = h || {};
        var S = h.size !== b ? h.size : 100,
          L = h.curveSegments !== b ? h.curveSegments : 4,
          y = h.font !== b ? h.font : "helvetiker",
          s = h.weight !== b ? h.weight : "normal",
          n = h.style !== b ? h.style : "normal";
        Hm.size = S, Hm.divisions = L, Hm.face = y, Hm.weight = s, Hm.style = n;
        for (var q = Hm.drawText(v), K = q.paths, k = [], l = 0, J = K.length; J > l; l++) Array.prototype.push.apply(k, K[l].toShapes());
        return k
      },
      function (K) {
        var J = 1e-10,
          E = function (l, i) {
            var _ = l.length;
            if (3 > _) return null;
            var e, K, H, B = [],
              T = [],
              N = [];
            if (f(l) > 0)
              for (K = 0; _ > K; K++) T[K] = K;
            else
              for (K = 0; _ > K; K++) T[K] = _ - 1 - K;
            var Q = _,
              m = 2 * Q;
            for (K = Q - 1; Q > 2;) {
              if (m-- <= 0) return i ? N : B;
              if (e = K, e >= Q && (e = 0), K = e + 1, K >= Q && (K = 0), H = K + 1, H >= Q && (H = 0), n(l, e, K, H, Q, T)) {
                var Z, L, W, M, k;
                for (Z = T[e], L = T[K], W = T[H], B.push([l[Z], l[L], l[W]]), N.push([T[e], T[K], T[H]]), M = K, k = K + 1; Q > k; M++, k++) T[M] = T[k];
                Q--, m = 2 * Q
              }
            }
            return i ? N : B
          },
          f = function (r) {
            for (var $ = r.length, e = 0, M = $ - 1, E = 0; $ > E; M = E++) e += r[M].x * r[E].y - r[E].x * r[M].y;
            return .5 * e
          },
          n = function (t, c, o, P, u, I) {
            var U, T, d, O, E, W, j, H, y;
            if (T = t[I[c]].x, d = t[I[c]].y, O = t[I[o]].x, E = t[I[o]].y, W = t[I[P]].x, j = t[I[P]].y, J > (O - T) * (j - d) - (E - d) * (W - T)) return !1;
            var e, F, w, s, S, b, v, m, r, i, M, l, A, B, f;
            for (e = W - O, F = j - E, w = T - W, s = d - j, S = O - T, b = E - d, U = 0; u > U; U++)
              if (H = t[I[U]].x, y = t[I[U]].y, !(H === T && y === d || H === O && y === E || H === W && y === j) && (v = H - T, m = y - d, r = H - O, i = y - E, M = H - W, l = y - j, f = e * i - F * r, A = S * m - b * v, B = w * l - s * M, f >= -J && B >= -J && A >= -J)) return !1;
            return !0
          };
        return K.Triangulate = E, K.Triangulate.area = f, K
      }(Hm), D._typeface_js = {
        faces: Hm.faces,
        loadFace: Hm.loadFace
      };
    var Ze = function () {
        this.vertices = [], this.faces = [], this.faceVertexUvs = [
          []
        ]
      },
      hk = Ze.prototype = {
        constructor: Ze,
        computeFaceNormals: function () {
          for (var l = new fj, $ = new fj, D = 0, Q = this.faces.length; Q > D; D++) {
            var o = this.faces[D],
              B = this.vertices[o.a],
              u = this.vertices[o.b],
              v = this.vertices[o.c];
            l.subVectors(v, u), $.subVectors(B, u), l.cross($), l.normalize(), o.normal.copy(l)
          }
        }, computeVertexNormals: function (X) {
          var w, H, d, h, D, P;
          for (P = new Array(this.vertices.length), w = 0, H = this.vertices.length; H > w; w++) P[w] = new fj;
          if (X) {
            var m, v, L, U = new fj,
              n = new fj;
            for (d = 0, h = this.faces.length; h > d; d++) D = this.faces[d], m = this.vertices[D.a], v = this.vertices[D.b], L = this.vertices[D.c], U.subVectors(L, v), n.subVectors(m, v), U.cross(n), P[D.a].add(U), P[D.b].add(U), P[D.c].add(U)
          } else
            for (d = 0, h = this.faces.length; h > d; d++) D = this.faces[d], P[D.a].add(D.normal), P[D.b].add(D.normal), P[D.c].add(D.normal);
          for (w = 0, H = this.vertices.length; H > w; w++) P[w].normalize();
          for (d = 0, h = this.faces.length; h > d; d++) D = this.faces[d], D.vertexNormals[0] = P[D.a].clone(), D.vertexNormals[1] = P[D.b].clone(), D.vertexNormals[2] = P[D.c].clone()
        }, mergeVertices: function () {
          var e, s, _, Z, h, n, P, B, F = {},
            H = [],
            r = [],
            x = 4,
            u = k(10, x);
          for (_ = 0, Z = this.vertices.length; Z > _; _++) e = this.vertices[_], s = c(e.x * u) + "_" + c(e.y * u) + "_" + c(e.z * u), F[s] === b ? (F[s] = _, H.push(this.vertices[_]), r[_] = H.length - 1) : r[_] = r[F[s]];
          var K = [];
          for (_ = 0, Z = this.faces.length; Z > _; _++) {
            h = this.faces[_], h.a = r[h.a], h.b = r[h.b], h.c = r[h.c], n = [h.a, h.b, h.c];
            for (var p = 0; 3 > p; p++)
              if (n[p] == n[(p + 1) % 3]) {
                K.push(_);
                break
              }
          }
          for (_ = K.length - 1; _ >= 0; _--) {
            var L = K[_];
            for (this.faces.splice(L, 1), P = 0, B = this.faceVertexUvs.length; B > P; P++) this.faceVertexUvs[P].splice(L, 1)
          }
          var J = this.vertices.length - H.length;
          return this.vertices = H, J
        }
      },
      kn = function (O, p, P, E, h, a, y) {
        this.aX = O, this.aY = p, this.xRadius = P, this.yRadius = E, this.aStartAngle = h, this.aEndAngle = a, this.aClockwise = y
      };
    kn.prototype = En(Zl), kn.prototype.getPoint = function (J) {
      var z, O = this.aEndAngle - this.aStartAngle;
      0 > O && (O += i), O > i && (O -= i), z = this.aClockwise === !0 ? this.aEndAngle + (1 - J) * (i - O) : this.aStartAngle + J * O;
      var f = this.aX + this.xRadius * X(z),
        Y = this.aY + this.yRadius * A(z);
      return new xe(f, Y)
    };
    var yi = function (s, E) {
        this.v1 = s, this.v2 = E
      },
      Ln = yi.prototype = En(Zl);
    Ln.getPoint = function (X) {
      var t = this.v2.clone().sub(this.v1);
      return t.multiplyScalar(X).add(this.v1), t
    }, Ln.getPointAt = function (X) {
      return this.getPoint(X)
    }, Ln.getTangent = function () {
      var m = this.v2.clone().sub(this.v1);
      return m.normalize()
    };
    var Oe = function (E, g, Y) {
      this.v0 = E, this.v1 = g, this.v2 = Y
    };
    Oe.prototype = En(Zl), Oe.prototype.getPoint = function (c) {
      var l, N;
      return l = om.b2(c, this.v0.x, this.v1.x, this.v2.x), N = om.b2(c, this.v0.y, this.v1.y, this.v2.y), new xe(l, N)
    };
    var lb = function (M, B, m, A) {
      this.v0 = M, this.v1 = B, this.v2 = m, this.v3 = A
    };
    lb.prototype = En(Zl), lb.prototype.getPoint = function (q) {
      var g, I;
      return g = om.b3(q, this.v0.x, this.v1.x, this.v2.x, this.v3.x), I = om.b3(q, this.v0.y, this.v1.y, this.v2.y, this.v3.y), new xe(g, I)
    }, Ak.create(function (v, Z) {
      this.v1 = v, this.v2 = Z
    }, function (K) {
      var t = new fj;
      return t.subVectors(this.v2, this.v1), t.multiplyScalar(K), t.add(this.v1), t
    });
    var Pl = Ak.create(function (j, H, E) {
        this.v0 = j, this.v1 = H, this.v2 = E
      }, function (E) {
        var t, p, W;
        return t = om.b2(E, this.v0.x, this.v1.x, this.v2.x), p = om.b2(E, this.v0.y, this.v1.y, this.v2.y), W = om.b2(E, this.v0.z, this.v1.z, this.v2.z), new fj(t, p, W)
      }),
      Mh = Ak.create(function (b, T, p, O) {
        this.v0 = b, this.v1 = T, this.v2 = p, this.v3 = O
      }, function (j) {
        var A, O, L;
        return A = om.b3(j, this.v0.x, this.v1.x, this.v2.x, this.v3.x), O = om.b3(j, this.v0.y, this.v1.y, this.v2.y, this.v3.y), L = om.b3(j, this.v0.z, this.v1.z, this.v2.z, this.v3.z), new fj(A, O, L)
      }),
      ld = function (h, H, L, V, q, N, _, I) {
        Ze.call(this), V = V !== b ? V : .5, q = q !== b ? q : .5, I = I !== b ? I : 1, h = h || 8, N = N || 0, _ = _ || i;
        var p, K, O = 1,
          f = I / 2,
          r = [],
          d = [],
          j = this.vertices,
          v = this.faces,
          Q = this.faceVertexUvs;
        for (K = 0; O >= K; K++) {
          var e = [],
            y = [],
            Z = K / O,
            F = Z * (q - V) + V;
          for (p = 0; h >= p; p++) {
            var w = p / h,
              k = new fj,
              J = -(w * _ + N);
            k.z = F * A(J), k.y = -Z * I + f, k.x = F * X(J), j.push(k), e.push(j.length - 1), y.push(new xe(w, Z))
          }
          r.push(e), d.push(y)
        }
        var B, M, E = (q - V) / I;
        for (p = 0; h > p; p++)
          for (0 !== V ? (B = j[r[0][p]].clone(), M = j[r[0][p + 1]].clone()) : (B = j[r[1][p]].clone(), M = j[r[1][p + 1]].clone()), B.setY(C(B.x * B.x + B.z * B.z) * E).normalize(), M.setY(C(M.x * M.x + M.z * M.z) * E).normalize(), K = 0; O > K; K++) {
            var U = r[K][p],
              Y = r[K + 1][p],
              m = r[K + 1][p + 1],
              g = r[K][p + 1],
              G = B.clone(),
              x = B.clone(),
              s = M.clone(),
              R = M.clone(),
              z = d[K][p].clone(),
              T = d[K + 1][p].clone(),
              u = d[K + 1][p + 1].clone(),
              P = d[K][p + 1].clone();
            v.push(new tp(U, Y, g, [G, x, R])), Q[0].push([z, T, P]), v.push(new tp(Y, m, g, [x.clone(), s, R.clone()])), Q[0].push([T.clone(), u, P.clone()])
          }
        if (H && V > 0)
          for (this.vertices.push(new fj(0, f, 0)), p = 0; h > p; p++) {
            var U = r[0][p],
              Y = r[0][p + 1],
              m = this.vertices.length - 1,
              G = new fj(0, 1, 0),
              x = new fj(0, 1, 0),
              s = new fj(0, 1, 0),
              z = d[0][p].clone(),
              T = d[0][p + 1].clone(),
              u = new xe(T.x, 0);
            v.push(new tp(U, Y, m, [G, x, s], null, 1));
            var W = p / h * i,
              S = X(W),
              l = A(W),
              D = (p + 1) / h * i,
              t = X(D),
              $ = A(D);
            Q[0].push([new xe(.5 + .5 * S, .5 + .5 * l), new xe(.5 + .5 * t, .5 + .5 * $), new xe(.5, .5)])
          }
        if (L && q > 0)
          for (this.vertices.push(new fj(0, -f, 0)), p = 0; h > p; p++) {
            var U = r[K][p + 1],
              Y = r[K][p],
              m = j.length - 1,
              G = new fj(0, -1, 0),
              x = new fj(0, -1, 0),
              s = new fj(0, -1, 0),
              z = d[K][p + 1].clone(),
              T = d[K][p].clone();
            v.push(new tp(U, Y, m, [G, x, s], null, 2));
            var W = p / h * i,
              S = X(W),
              l = A(W),
              D = (p + 1) / h * i,
              t = X(D),
              $ = A(D);
            Q[0].push([new xe(.5 + .5 * t, .5 - .5 * $), new xe(.5 + .5 * S, .5 - .5 * l), new xe(.5, .5)])
          }
      };
    ld.prototype = En(hk);
    var Ti = function (o, c, P, j, l, t, m) {
      Ze.call(this), m = m || .5, o = o || 16, c = c || 16, P = (P !== b ? P : 0) - S, j = j !== b ? j : i, l = l !== b ? l : 0, t = t !== b ? t : S;
      var u, r, s = [],
        w = [],
        n = this.vertices,
        z = this.faces,
        T = this.faceVertexUvs;
      for (r = 0; c >= r; r++) {
        var f = [],
          R = [];
        for (u = 0; o >= u; u++) {
          var d = u / o,
            a = r / c,
            q = new fj;
          q.x = -m * X(P + d * j) * A(l + a * t), q.y = m * X(l + a * t), q.z = m * A(P + d * j) * A(l + a * t), n.push(q), f.push(n.length - 1), R.push(new xe(d, a))
        }
        s.push(f), w.push(R)
      }
      for (r = 0; c > r; r++)
        for (u = 0; o > u; u++) {
          var C = s[r][u + 1],
            K = s[r][u],
            L = s[r + 1][u],
            U = s[r + 1][u + 1],
            Q = n[C].clone().normalize(),
            O = n[K].clone().normalize(),
            F = n[L].clone().normalize(),
            H = n[U].clone().normalize(),
            V = w[r][u + 1].clone(),
            e = w[r][u].clone(),
            J = w[r + 1][u].clone(),
            Z = w[r + 1][u + 1].clone();
          G(n[C].y) === m ? (V.x = (V.x + e.x) / 2, z.push(new tp(C, L, U, [Q, F, H])), T[0].push([V, J, Z])) : G(n[L].y) === m ? (J.x = (J.x + Z.x) / 2, z.push(new tp(C, K, L, [Q, O, F])), T[0].push([V, e, J])) : (z.push(new tp(C, K, U, [Q, O, H])), T[0].push([V, e, Z]), z.push(new tp(K, L, U, [O.clone(), F, H.clone()])), T[0].push([e.clone(), J, Z.clone()]))
        }
    };
    Ti.prototype = En(hk);
    var Nr = function (T, H, D, B, w, I) {
      Ze.call(this), T = T || .33, H = H || .17, B = B || 8, D = D || 6, w = w || 0, I = I || i;
      for (var a = new fj, O = [], K = [], L = 0; B >= L; L++)
        for (var V = L / B * i + S, h = 0; D >= h; h++) {
          var W = h / D * I + w;
          a.x = T * X(W), a.z = -T * A(W);
          var l = new fj,
            n = T + H * X(V);
          l.x = n * X(W), l.z = -n * A(W), l.y = H * A(V), this.vertices.push(l), O.push(new xe(h / D, 1 - L / B)), K.push(l.clone().sub(a).normalize())
        }
      for (var L = 1; B >= L; L++)
        for (var h = 1; D >= h; h++) {
          var J = (D + 1) * L + h - 1,
            Y = (D + 1) * (L - 1) + h - 1,
            E = (D + 1) * (L - 1) + h,
            q = (D + 1) * L + h,
            d = new tp(J, Y, q, [K[J].clone(), K[Y].clone(), K[q].clone()]);
          this.faces.push(d), this.faceVertexUvs[0].push([O[J].clone(), O[Y].clone(), O[q].clone()]), d = new tp(Y, E, q, [K[Y].clone(), K[E].clone(), K[q].clone()]), this.faces.push(d), this.faceVertexUvs[0].push([O[Y].clone(), O[E].clone(), O[q].clone()])
        }
      this.computeFaceNormals()
    };
    Nr.prototype = En(hk);
    var _d = function (D, Z, k) {
        return D ? (Ze.call(this), D = D instanceof Array ? D : [D], this.addShapeList(D, Z), hp(this, k), this.computeFaceNormals(), void 0) : (D = [], void 0)
      },
      ne = _d.prototype = En(Ze.prototype);
    ne.addShapeList = function (Y, B) {
      for (var p = Y.length, v = 0; p > v; v++) {
        var n = Y[v];
        this.addShape(n, B)
      }
    }, ne.addShape = function (j, F) {
      function $() {
        if (F.bottom)
          for (var W = 0; M > W; W++) Q = y[W], I(Q[2], Q[1], Q[0], !0);
        if (F.top)
          for (W = 0; M > W; W++) Q = y[W], I(Q[0] + f * e, Q[1] + f * e, Q[2] + f * e, !1)
      }

      function d() {
        var G = 0;
        for (q(u, G), G += u.length, X = 0, s = H.length; s > X; X++) P = H[X], q(P, G), G += P.length
      }

      function q(l, _) {
        for (var J, G, P = l.length; --P >= 0;) {
          J = P, G = P - 1, 0 > G && (G = l.length - 1);
          var v = 0,
            d = e;
          for (v = 0; d > v; v++) {
            var Z = f * v,
              F = f * (v + 1),
              L = _ + J + Z,
              x = _ + G + Z,
              r = _ + G + F,
              b = _ + J + F;
            Y(L, x, r, b, l, v, d, J, G)
          }
        }
      }

      function c(w, r, i) {
        T.vertices.push(new fj(w, r, i))
      }

      function I(Q, A, q, D) {
        Q += w, A += w, q += w, T.faces.push(new tp(Q, A, q, null, null, D ? 2 : 1));
        var e = D ? o.generateBottomUV(T, j, F, Q, A, q) : o.generateTopUV(T, j, F, Q, A, q);
        T.faceVertexUvs[0].push(e)
      }

      function Y(L, A, c, z, Q, x, B, H, P) {
        L += w, A += w, c += w, z += w, T.faces.push(new tp(L, A, z)), T.faces.push(new tp(A, c, z));
        var V = o.generateSideWallUV(T, j, Q, F, L, A, c, z, x, B, H, P);
        T.faceVertexUvs[0].push([V[0], V[1], V[3]]), T.faceVertexUvs[0].push([V[1], V[2], V[3]])
      }
      var E, Z, i, J, m, K = F.amount,
        x = F.curveSegments || Jg,
        e = F.steps || 1,
        n = F.extrudePath,
        S = !1,
        o = new Zd(F.repeatUVLength);
      n && (E = n.getSpacedPoints(e), S = !0, Z = F.frames !== b ? F.frames : new Sj.FrenetFrames(n, e, !1), i = new fj, J = new fj, m = new fj);
      var P, X, s, T = this,
        w = this.vertices.length,
        k = j.extractPoints(x),
        R = k.shape,
        H = k.holes,
        z = !om.isClockWise(R);
      if (z) {
        for (R = R.reverse(), X = 0, s = H.length; s > X; X++) P = H[X], om.isClockWise(P) && (H[X] = P.reverse());
        z = !1
      }
      var y = om.triangulateShape(R, H),
        u = R;
      for (X = 0, s = H.length; s > X; X++) P = H[X], R = R.concat(P);
      for (var g, Q, f = R.length, M = y.length, V = 0; f > V; V++) g = R[V], S ? (J.copy(Z.normals[0]).multiplyScalar(g.x), i.copy(Z.binormals[0]).multiplyScalar(g.y), m.copy(E[0]).add(J).add(i), c(m.x, m.y, m.z)) : c(g.x, g.y, 0);
      var U;
      for (U = 1; e >= U; U++)
        for (V = 0; f > V; V++) g = R[V], S ? (J.copy(Z.normals[U]).multiplyScalar(g.x), i.copy(Z.binormals[U]).multiplyScalar(g.y), m.copy(E[U]).add(J).add(i), c(m.x, m.y, m.z)) : c(g.x, g.y, K / e * U);
      $(), d()
    };
    var Sj = function (y, h, S, q, x) {
      function w(A, z, F) {
        return _.vertices.push(new fj(A, z, F)) - 1
      }
      Ze.call(this), h = h || 64, S = S || 1, q = q || 8, x = x || !1;
      var I, C, Y, u, $, Q, M, F, O, c, W, L, D, J, G, g, k, l, m, a, T = [],
        _ = this,
        v = h + 1,
        n = new fj,
        V = new Sj.FrenetFrames(y, h, x),
        t = V.tangents,
        H = V.normals,
        R = V.binormals;
      for (this.tangents = t, this.normals = H, this.binormals = R, O = 0; v > O; O++)
        for (T[O] = [], u = O / (v - 1), F = y.getPointAt(u), I = t[O], C = H[O], Y = R[O], c = 0; q > c; c++) $ = c / q * i, Q = -S * X($), M = S * A($), n.copy(F), n.x += Q * C.x + M * Y.x, n.y += Q * C.y + M * Y.y, n.z += Q * C.z + M * Y.z, T[O][c] = w(n.x, n.y, n.z);
      for (O = 0; h > O; O++)
        for (c = 0; q > c; c++) W = x ? (O + 1) % h : O + 1, L = (c + 1) % q, D = T[O][c], J = T[W][c], G = T[W][L], g = T[O][L], k = new xe(O / h, c / q), l = new xe((O + 1) / h, c / q), m = new xe((O + 1) / h, (c + 1) / q), a = new xe(O / h, (c + 1) / q), this.faces.push(new tp(D, J, g)), this.faceVertexUvs[0].push([k, l, a]), this.faces.push(new tp(J, G, g)), this.faceVertexUvs[0].push([l.clone(), m, a.clone()]);
      this.computeFaceNormals(), this.computeVertexNormals()
    };
    Sj.prototype = En(hk), Sj.FrenetFrames = function (I, N, V) {
      function T() {
        K[0] = new fj, M[0] = new fj, m = Number.MAX_VALUE, J = G(l[0].x), H = G(l[0].y), P = G(l[0].z), m >= J && (m = J, _.set(1, 0, 0)), m >= H && (m = H, _.set(0, 1, 0)), m >= P && _.set(0, 0, 1), h.crossVectors(l[0], _).normalize(), K[0].crossVectors(l[0], h), M[0].crossVectors(l[0], K[0])
      }
      var j, m, J, H, P, y, a, _ = new fj,
        l = [],
        K = [],
        M = [],
        h = new fj,
        L = new Ep,
        n = N + 1,
        D = 1e-4;
      for (this.tangents = l, this.normals = K, this.binormals = M, y = 0; n > y; y++) a = y / (n - 1), l[y] = I.getTangentAt(a), l[y].normalize();
      for (T(), y = 1; n > y; y++) K[y] = K[y - 1].clone(), M[y] = M[y - 1].clone(), h.crossVectors(l[y - 1], l[y]), h.length() > D && (h.normalize(), j = z(kd(l[y - 1].dot(l[y]), -1, 1)), K[y].applyMatrix4(L.makeRotationAxis(h, j))), M[y].crossVectors(l[y], K[y]);
      if (V)
        for (j = z(kd(K[0].dot(K[n - 1]), -1, 1)), j /= n - 1, l[0].dot(h.crossVectors(K[0], K[n - 1])) > 0 && (j = -j), y = 1; n > y; y++) K[y].applyMatrix4(L.makeRotationAxis(l[y], j * y)), M[y].crossVectors(l[y], K[y])
    };
    var Jk = function (M, G, I, e) {
      Ze.call(this), G = G || 18, I = I || 0, e = e == V ? i : e;
      for (var Y = 1 / (M.length - 1), H = 1 / G, g = 0, N = G; N >= g; g++)
        for (var C = I + g * H * e, a = X(C), c = A(C), n = 0, f = M.length; f > n; n++) {
          var z = M[n],
            j = new fj;
          j.x = a * z.x - c * z.y, j.y = c * z.x + a * z.y, j.z = z.z, this.vertices.push(j)
        }
      for (var s = M.length, g = 0, N = G; N > g; g++)
        for (var n = 0, f = M.length - 1; f > n; n++) {
          var l = n + s * g,
            $ = l,
            p = l + s,
            a = l + 1 + s,
            K = l + 1,
            U = g * H,
            P = n * Y,
            S = U + H,
            o = P + Y;
          this.faces.push(new tp($, K, p)), this.faceVertexUvs[0].push([new xe(U, P), new xe(U, o), new xe(S, P)]), this.faces.push(new tp(p, K, a)), this.faceVertexUvs[0].push([new xe(S, P), new xe(U, o), new xe(S, o)])
        }
      this.mergeVertices(), hp(this), this.computeFaceNormals(), this.computeVertexNormals()
    };
    Jk.prototype = En(hk);
    var Qb = function (c, h) {
      h = h || {};
      var m = Hm.generateShapes(c, h);
      h.amount = h.height !== b ? h.height : 50, _d.call(this, m, h)
    };
    Qb.prototype = En(ne);
    var qn = T.Node = function () {
        gr(qn, this)
      },
      vi = {
        X: _q,
        Y: sc,
        Z: eb
      },
      Sc = {
        xyz: "XYZ",
        xzy: "XZY",
        yxz: "YXZ",
        yzx: "YZX",
        zxy: "ZXY",
        zyx: "ZYX"
      },
      zr = "xzy",
      ee = function (k, l, H) {
        if (l) {
          var L = l[0],
            x = l[1],
            h = l[2];
          "xzy" === H ? (sc(k, x), eb(k, h), _q(k, L)) : "xyz" === H ? (eb(k, h), sc(k, x), _q(k, L)) : "yxz" === H ? (eb(k, h), _q(k, L), sc(k, x)) : "yzx" === H ? (_q(k, L), eb(k, h), sc(k, x)) : "zxy" === H ? (sc(k, x), _q(k, L), eb(k, h)) : "zyx" === H ? (_q(k, L), sc(k, x), eb(k, h)) : (sc(k, x), eb(k, h), _q(k, L))
        }
      };
    Dh("Node", Vi, {
      ms_ac: ["rotationMode", "tall"],
      _adjustChildrenToTop: !0,
      _icon: "node_icon",
      _image: "node_image",
      _rotationMode: zr,
      _64O: 0,
      _rotationX: 0,
      _53O: 0,
      _host: V,
      _position: {
        x: 0,
        y: 0
      },
      _tall: 20,
      _54O: 0,
      getUIClass: function () {
        return di
      }, _22Q: function () {
        return eg
      }, p: function () {
        return 0 === arguments.length ? this.getPosition() : (this.setPosition.apply(this, arguments), this)
      }, p3: function () {
        return 0 === arguments.length ? this.getPosition3d() : (this.setPosition3d.apply(this, arguments), this)
      }, s3: function () {
        return 0 === arguments.length ? this.getSize3d() : (this.setSize3d.apply(this, arguments), this)
      }, r3: function () {
        return 0 === arguments.length ? this.getRotation3d() : (this.setRotation3d.apply(this, arguments), this)
      }, t3: function () {
        return this.translate3d.apply(this, arguments), this
      }, translate3dBy: function (j, O) {
        ac(j, sk(V, V, this.r3(), this.getRotationMode())), this.translate3d(j[0] * O, j[1] * O, j[2] * O)
      }, translateFront: function (Y) {
        this.translate3dBy([0, 0, 1], Y)
      }, translateBack: function (g) {
        this.translate3dBy([0, 0, -1], g)
      }, translateLeft: function (g) {
        this.translate3dBy([-1, 0, 0], g)
      }, translateRight: function (n) {
        this.translate3dBy([1, 0, 0], n)
      }, translateTop: function (f) {
        this.translate3dBy([0, 1, 0], f)
      }, translateBottom: function ($) {
        this.translate3dBy([0, -1, 0], $)
      }, getPosition3d: function () {
        return [this._position.x, this._54O, this._position.y]
      }, setPosition3d: function (L, j, M) {
        1 === arguments.length && (j = L[1], M = L[2], L = L[0]), this.p(L, M), this.setElevation(j)
      }, translate3d: function (f, O, R) {
        1 === arguments.length && (O = f[1], R = f[2], f = f[0]), this.translate(f, R), this.setElevation(this._54O + O)
      }, getSize3d: function () {
        return [this.getWidth(), this.getTall(), this.getHeight()]
      }, setSize3d: function (n, e, w) {
        1 === arguments.length && (e = n[1], w = n[2], n = n[0]), this.setSize(n, w), this.setTall(e)
      }, getRotation3d: function () {
        return [this._rotationX, -this._64O, this._53O]
      }, setRotation3d: function (J, f, c) {
        1 === arguments.length && (f = J[1], c = J[2], J = J[0]), this.setRotationX(J), this.setRotation(-f), this.setRotationZ(c)
      }, setRotationY: function (m) {
        this.setRotation(-m)
      }, getRotationY: function () {
        return -this._64O
      }, lookAt: function (F, t) {
        t = t || fk;
        var $ = this,
          V = As(F, $.p3()),
          A = Pq(V);
        t === fk ? ($.r3([-p(V[1] / A), -f(V[2], V[0]) + O, 0]), $.setRotationMode("xzy")) : t === Hi ? ($.r3(0, -f(V[2], V[0]), p(V[1] / A)), $.setRotationMode("zyx")) : t === pg ? ($.r3(0, -f(V[2], V[0]) + S, -p(V[1] / A)), $.setRotationMode("zyx")) : t === Ud ? ($.r3([-p(V[1] / A) + O, -f(V[2], V[0]) + O, 0]), $.setRotationMode("xzy")) : t === Hb && ($.r3([-p(V[1] / A) - O, -f(V[2], V[0]) + O, 0]), $.setRotationMode("xzy")), t === Xr && ($.r3([-p(V[1] / A) + S, -f(V[2], V[0]) + O, S]), $.setRotationMode("zxy"))
      }, getLoopedEdges: function () {
        return this._45I
      }, getEdges: function () {
        return this._70O
      }, getAgentEdges: function () {
        return this._49I
      }, getHost: function () {
        return this._host
      }, setHost: function (O) {
        var e = this;
        if (e !== O && e._host !== O) {
          var N = e._host;
          N && N._removeAttach(e), e._host = O, e._host && e._host._addAttach(e), e.fp("host", N, O), e.onHostChanged(N, O)
        }
      }, getAttaches: function () {
        return this._69O
      }, _addAttach: function (l) {
        var q = this;
        q._69O || (q._69O = new Vq), q._69O.add(l), q.fp("attaches", V, l)
      }, _removeAttach: function (N) {
        var s = this;
        s._69O.remove(N), s._69O.isEmpty() && delete s._69O, s.fp("attaches", N, V)
      }, getSourceEdges: function () {
        return this._42I
      }, getTargetEdges: function () {
        return this._43I
      }, _2I: function (y) {
        var l = this;
        l._44I || (l._44I = new Vq), l._42I || (l._42I = new Vq), l._44I.add(y), l._42I.add(y), l._20I()
      }, _4I: function (Q) {
        var P = this;
        P._44I || (P._44I = new Vq), P._43I || (P._43I = new Vq), P._44I.add(Q), P._43I.add(Q), P._20I()
      }, _16I: function (O) {
        var E = this;
        E._44I.remove(O), E._42I.remove(O), E._44I.isEmpty() && delete E._44I, E._42I.isEmpty() && delete E._42I, E._20I()
      }, _18I: function (Y) {
        var K = this;
        K._44I.remove(Y), K._43I.remove(Y), K._44I.isEmpty() && delete K._44I, K._43I.isEmpty() && delete K._43I, K._20I()
      }, _20I: function () {
        var u = this;
        if (delete u._45I, !u._44I || u._44I.isEmpty()) return delete u._70O, void 0;
        var g;
        u._44I.each(function (s) {
          s.isLooped() && (g || (g = {}), g[s._id] || (u._45I || (u._45I = new Vq), u._45I.add(s), g[s._id] = s))
        }), g ? (u._70O = new Vq, u._44I.each(function (D) {
          g[D._id] ? "A" === g[D._id] || (g[D._id] = "A", u._70O.add(D)) : u._70O.add(D)
        })) : u._70O = u._44I
      }, hasAgentEdges: function () {
        return !!this._49I && !this._49I.isEmpty()
      }, getSourceAgentEdges: function () {
        return this._46I
      }, getTargetAgentEdges: function () {
        return this._47I
      }, _1I: function (G) {
        var u = this;
        u._46I || (u._46I = new Vq), u._48I || (u._48I = new Vq), u._46I.add(G), u._48I.add(G), u._19I()
      }, _3I: function (Z) {
        var Q = this;
        Q._47I || (Q._47I = new Vq), Q._48I || (Q._48I = new Vq), Q._47I.add(Z), Q._48I.add(Z), Q._19I()
      }, _15I: function (n) {
        var L = this;
        L._46I.remove(n), L._48I.remove(n), L._46I.isEmpty() && delete L._46I, L._48I.isEmpty() && delete L._48I, L._19I()
      }, _17I: function (b) {
        var F = this;
        F._47I.remove(b), F._48I.remove(b), F._47I.isEmpty() && delete F._47I, F._48I.isEmpty() && delete F._48I, F._19I()
      }, _19I: function () {
        var p = this;
        delete p._49I;
        var w = p._48I;
        if (w && !w.isEmpty()) {
          var S = {};
          w.each(function (F) {
            S[F._id] ? p._49I || (p._49I = new Vq) : S[F._id] = F
          }), p._49I ? w.each(function (U) {
            S[U._id] && (p._49I.add(U), delete S[U._id])
          }) : p._49I = w
        }
      }, getImage: function () {
        return this._image
      }, setImage: function (q) {
        var X = this,
          n = X._image,
          o = X.getWidth(),
          T = X.getHeight();
        X._image = q, X.fp("image", n, q), X.fp(ag, o, X.getWidth()), X.fp(Ji, T, X.getHeight())
      }, getElevation: function () {
        return this._54O
      }, setElevation: function (u) {
        var q = this;
        if (!q._50O) {
          q._50O = 1;
          var Q = q._54O;
          q._54O = u, q.fp(tf, Q, u), delete this._50O
        }
      }, getRotation: function () {
        return this._64O
      }, setRotation: function (V) {
        var u = this;
        if (!u._49O) {
          u._49O = 1;
          var N = u._64O;
          u._64O = V, u.fp(Yc, N, V), delete u._49O
        }
      }, getRotationX: function () {
        return this._rotationX
      }, setRotationX: function (Y) {
        var w = this;
        if (!w._51O) {
          w._51O = 1;
          var K = w._rotationX;
          w._rotationX = Y, w.fp("rotationX", K, Y), delete w._51O
        }
      }, getRotationZ: function () {
        return this._53O
      }, setRotationZ: function (v) {
        var B = this;
        if (!B._52O) {
          B._52O = 1;
          var m = B._53O;
          B._53O = v, B.fp("rotationZ", m, v), delete B._52O
        }
      }, getPosition: function () {
        return this._position
      }, setPosition: function (S, E) {
        var R = this;
        if (!R._50I) {
          R._50I = 1;
          var U;
          if (U = 2 === arguments.length ? {
            x: S,
            y: E
          } : S, U.x !== R._position.x || U.y !== R._position.y) {
            var o = R._position;
            R._position = U, R.fp(Kh, o, U)
          }
          delete R._50I
        }
      }, translate: function (v, r) {
        var R = this._position;
        this.p(R.x + v, R.y + r)
      }, getWidth: function () {
        var c = this;
        if (c._width >= 0) return c._width;
        var y = ye(c._image);
        return y ? lc(y, c) : 20
      }, setWidth: function (t) {
        var $ = this,
          j = $._width;
        $._width = t, $.fp(ag, j, t)
      }, getHeight: function () {
        var W = this;
        if (W._height >= 0) return W._height;
        var B = ye(W._image);
        return B ? Ec(B, W) : 20
      }, setHeight: function (y) {
        var l = this,
          i = l._height;
        l._height = y, l.fp(Ji, i, y)
      }, setSize: function (H, y) {
        var Z = this;
        2 === arguments.length ? (Z.setWidth(H), Z.setHeight(y)) : (Z.setWidth(H.width), Z.setHeight(H.height))
      }, getSize: function () {
        return {
          width: this.getWidth(),
          height: this.getHeight()
        }
      }, setRect: function (F, o, P, x) {
        var g = this;
        1 === arguments.length ? (g.p(F.x + F.width / 2, F.y + F.height / 2), g.setWidth(F.width), g.setHeight(F.height)) : (g.p(F + P / 2, o + x / 2), g.setWidth(P), g.setHeight(x))
      }, getRect: function () {
        var E = this,
          O = E.getWidth(),
          k = E.getHeight();
        return Bh({
          x: E._position.x - O / 2,
          y: E._position.y - k / 2,
          width: O,
          height: k
        }, E._64O)
      }, getCorners: function (A, D) {
        A == V && (A = 0), D == V && (D = A);
        var Z = this,
          r = Z._position,
          $ = Z.getWidth() / 2 + A,
          W = Z.getHeight() / 2 + D,
          v = new Jb(Z._64O, r.x, r.y);
        return [v.tf(-$, -W), v.tf($, -W), v.tf($, W), v.tf(-$, W)]
      }, rotateAt: function (S, v, r) {
        var p = this,
          W = p._position,
          d = p._64O,
          y = new Jb(d, W.x, W.y).tf(S, v),
          g = C(S * S + v * v),
          K = f(W.y - y.y, W.x - y.x) + r;
        p.setRotation(d + r), p.p(y.x + g * X(K), y.y + g * A(K))
      }, onParentChanged: function () {
        qn.superClass.onParentChanged.apply(this, arguments), this._8I()
      }, _8I: function () {
        this._70O && this._70O.each(function (g) {
          g._7I()
        })
      }, onPropertyChanged: function (V) {
        var k = this;
        qn.superClass.onPropertyChanged.call(k, V), k._69O && k._69O.each(function (J) {
          J.handleHostPropertyChange(V)
        }), k._49I && k._49I.each(function (v) {
          v.fp("agentChange", !0, !1)
        })
      }, onHostChanged: function () {
        this.updateAttach()
      }, handleHostPropertyChange: function (S) {
        this.updateAttach(S)
      }, onStyleChanged: function (h) {
        qn.superClass.onStyleChanged.apply(this, arguments), Kl[h] && this.updateAttach()
      }, updateAttach: function (E) {
        var O = this;
        O._51I || Ed || (O._51I = 1, O._71O(E), delete O._51I)
      }, _71O: function (y) {
        var K, H, S, m, L, F, Y = this,
          i = Y._host,
          X = y ? y.property : V,
          b = y ? y.oldValue : V,
          s = y ? y.newValue : V;
        if (i instanceof Zc) {
          if (X === tf) Y.setElevation(Y._54O + s - b);
          else if (!y || fs[X]) {
            if (K = Y.s("attach.row.index"), H = Y.s("attach.column.index"), S = i.getCellRect(K, H), !S) return;
            m = Y.s("attach.row.span"), L = Y.s("attach.column.span"), (1 !== m || 1 !== L) && (S = rr(S, i.getCellRect(K + m - 1, H + L - 1))), Lc(S, Y, "attach.padding", 1), Y.setRect(S)
          }
        } else if (i instanceof Ar && (F = Y.s("attach.index")) >= 0 && (!y || pc[X])) {
          var e = Y.s("attach.thickness");
          e != V && Y.setHeight(i.getThickness() * e);
          var n = Y.s("attach.offset"),
            o = i.getPoints(),
            r = o.size();
          if (r > F) {
            var d = o.get(F),
              u = r === F + 1 ? o.get(0) : o.get(F + 1),
              T = [u.x - d.x, u.y - d.y],
              E = Pq(T);
            if (E) {
              Y.s("attach.offset.relative") && (n *= E), Y.s("attach.offset.opposite") && (n = E - n);
              var B = {
                  x: d.x + T[0] / E * n,
                  y: d.y + T[1] / E * n
                },
                J = Y.s("attach.gap");
              J && (Y.s("attach.gap.relative") && (J *= i.getThickness()), B = dk(V, B, u, J)), Y.p(B), Y.setRotation(f(T[1], T[0]))
            }
          }
        } else y && (X === Kh ? Y.translate(s.x - b.x, s.y - b.y) : X === tf ? Y.setElevation(Y._54O + s - b) : cg[X] && Y._11Q(i, X, s - b))
      }, _11Q: function (t, n, A) {
        var I = this,
          L = t.p3(),
          e = As(I.p3(), L),
          O = Up(),
          X = Sc[I.getRotationMode()],
          k = X[0],
          x = X[1],
          Q = X[2],
          m = vi[k],
          d = vi[x],
          r = vi[Q];
        n === Yc && (n = "rotationY", A = -A), n === Yc + k ? (r(O, t[Sq + Q]()), d(O, t[Sq + x]()), m(O, A), d(O, -t[Sq + x]()), r(O, -t[Sq + Q]()), I[tb + k](I[Sq + k]() + A)) : n === Yc + x ? (r(O, t[Sq + Q]()), d(O, A), r(O, -t[Sq + Q]()), I[tb + x](I[Sq + x]() + A)) : n === Yc + Q && (r(O, A), I[tb + Q](I[Sq + Q]() + A)), ac(e, O), I.p3(L[0] + e[0], L[1] + e[1], L[2] + e[2])
      }, isHostOn: function (p) {
        var J = this;
        if (J._host && p && p._69O)
          for (var L = {}, Q = J._host; Q && Q !== J && !L[Q._id];) {
            if (Q === p) {console.log(2);return !0;}
            L[Q._id] = Q, Q = Q._host
          }
          console.log(2);
        return !1
      }, isLoopedHostOn: function (h) {
        return this.isHostOn(h) && h.isHostOn(this)
      }, getSerializableProperties: function () {
        var _ = qn.superClass.getSerializableProperties.call(this);
        return eq(_, {
          image: 1,
          host: 1,
          rotation: 1,
          rotationX: 1,
          rotationZ: 1,
          rotationMode: 1,
          position: 1,
          width: 1,
          height: 1,
          tall: 1,
          elevation: 1
        }), _
      }
    });
    var xr = T.Edge = function (m, q) {
      var U = this;
      gr(xr, U), U.setSource(m), U.setTarget(q)
    };
    Dh("Edge", Vi, {
      _icon: "edge_icon",
      getUIClass: function () {
        return vg
      }, _22Q: function () {
        return Em
      }, getSource: function () {
        return this._source
      }, getTarget: function () {
        return this._target
      }, getSourceAgent: function () {
        return this._40I
      }, getTargetAgent: function () {
        return this._41I
      }, setSource: function (t) {
        var _ = this;
        if (_._source !== t) {
          var Z = _._source;
          _._source = t, Z && Z._16I(_), t && t._2I(_), _._7I(), _.fp("source", Z, t)
        }
      }, setTarget: function (x) {
        var k = this;
        if (k._target !== x) {
          var a = k._target;
          k._target = x, a && a._18I(k), x && x._4I(k), k._7I(), k.fp("target", a, x)
        }
      }, isLooped: function () {
        var j = this;
        return j._source === j._target && !!j._source && !!j._target
      }, _7I: function () {
        var I, r = this,
          i = Yl(r);
        r._40I !== i && (I = this._40I, I && I._15I(r), r._40I = i, i && i._1I(r), r.fp("sourceAgent", I, i), Uf(I, r._41I), Uf(i, r._41I));
        var M = Po(r);
        r._41I !== M && (I = r._41I, I && I._17I(r), r._41I = M, M && M._3I(r), r.fp("targetAgent", I, M), Uf(I, r._40I), Uf(M, r._40I))
      }, _22I: function (D) {
        this._52I = D, this.fp("edgeGroup", !0, !1)
      }, getEdgeGroup: function () {
        return this._52I
      }, isEdgeGroupHidden: function () {
        var c = this;
        return c._52I && c._52I.get(0) !== c && !c.getStyle(rk)
      }, getEdgeGroupSize: function () {
        return this._52I ? this._52I.size() : 1
      }, getEdgeGroupIndex: function () {
        return this._52I ? this._52I.indexOf(this) : 0
      }, isEdgeGroupAgent: function () {
        var D = this,
          c = D._52I;
        return c && !D.getStyle(rk) && c.size() > 1 && D === c.get(0)
      }, toggle: function () {
        var v = this._52I,
          z = !this.s(rk);
        v && v.size() > 1 && (v.each(function (x) {
          x.s(rk, z)
        }), v.getSiblings().each(function (S) {
          S !== v && S.each(function (y) {
            y.fp("edgeGroup", V, S)
          })
        }))
      }, setStyle: function ($, X) {
        ($ === sl || "edge.segments" === $) && (X = If(X)), xr.superClass.setStyle.call(this, $, X)
      }, onStyleChanged: function (J) {
        xr.superClass.onStyleChanged.apply(this, arguments), gs[J] && Uf(this._41I, this._40I)
      }, getSerializableProperties: function () {
        var n = xr.superClass.getSerializableProperties.call(this);
        return eq(n, {
          source: 1,
          target: 1
        }), n
      }
    });
    var Dj = T.Group = function () {
      gr(Dj, this)
    };
    Dh("Group", qn, {
      _image: "group_image",
      _icon: "group_icon",
      _57O: !1,
      getUIClass: function () {
        return Pd
      }, onChildAdded: function () {
        Dj.superClass.onChildAdded.apply(this, arguments), this._81I()
      }, onChildRemoved: function () {
        Dj.superClass.onChildRemoved.apply(this, arguments), this._81I()
      }, _81I: function () {
        var I = this;
        if (!I._54I && !Ed) {
          var W = I.getChildrenRect();
          W && (I._53I = 1, I.p(Vh(I.s("group.position"), W, I.getSize())), delete I._53I)
        }
      }, getChildrenRect: function () {
        var K, s = this;
        return s.eachChild(function (o) {
          K = rr(K, s.getChildRect(o))
        }), K
      }, getChildRect: function (I) {
        var Q;
        return Hl(I) && I.s(jf) && (fl(I) && I.isExpanded() && I.eachChild(function (d) {
          Q = rr(Q, I.getChildRect(d))
        }), !Q && I.getRect && (Q = I.getRect())), Q
      }, setPosition: function (f, J) {
        var O = this;
        if (!O._54I) {
          var Y;
          Y = 2 === arguments.length ? {
            x: f,
            y: J
          } : f, Ed || O._53I || (O._54I = 1, Qq(O._children, Y.x - O._position.x, Y.y - O._position.y), delete O._54I), Dj.superClass.setPosition.call(this, Y)
        }
      }, toggle: function () {
        this.setExpanded(!this.isExpanded())
      }, isExpanded: function () {
        return this._57O
      }, setExpanded: function (v) {
        var I = this;
        if (I._57O !== v) {
          var g = I._57O;
          I._57O = v, I.fp("expanded", g, I._57O), I._8I()
        }
      }, _8I: function () {
        Dj.superClass._8I.call(this), this.eachChild(function (V) {
          Hl(V) && V._8I()
        })
      }, onStyleChanged: function (r) {
        Dj.superClass.onStyleChanged.apply(this, arguments), "group.position" === r && this._81I()
      }, getSerializableProperties: function () {
        var n = Dj.superClass.getSerializableProperties.call(this);
        return n.expanded = 1, n
      }
    });
    var Zc = T.Grid = function () {
      gr(Zc, this)
    };
    Dh("Grid", qn, {
      IRotatable: !1,
      _icon: "grid_icon",
      _image: V,
      getUIClass: function () {
        return Pj
      }, setRotation: function () {}, getCellRect: function (N, u) {
        var t = this,
          $ = t.s("grid.row.count"),
          M = t.s("grid.column.count");
        if (0 >= $ || 0 >= M || 0 > N || N >= $ || 0 > u || u >= M) return V;
        var g, z, e, r = t.getRect(),
          q = t.s("grid.row.percents"),
          h = t.s("grid.column.percents");
        if (Lc(r, t, "grid.border", -1), q && q._as && (q = q._as), h && h._as && (h = h._as), q && q.length === $) {
          for (e = 0, g = 0; N > g; g++) e += r.height * q[g];
          r.y += e, r.height = r.height * q[N]
        } else r.height = r.height / $, r.y += r.height * N; if (h && h.length === M) {
          for (z = 0, g = 0; u > g; g++) z += r.width * h[g];
          r.x += z, r.width = r.width * h[u]
        } else r.width = r.width / M, r.x += r.width * u;
        return fn(r, -t.s("grid.gap")), r
      }
    });
    var Ar = T.Shape = function () {
      gr(Ar, this), this._59O = new Vq
    };
    Ar.__de__ = Pf, Dh("Shape", qn, {
      ms_ac: ["thickness", "closePath"],
      _icon: "shape_icon",
      _thickness: 10,
      _closePath: !1,
      getUIClass: function () {
        return qf
      }, _22Q: function () {
        return re
      }, getLength: function (c) {
        return Io(Wo(this._59O, this._58O, c, this._closePath))
      }, getSegments: function () {
        return this._58O
      }, toSegments: function () {
        var b = this._58O;
        return b ? new Vq(b._as.slice(0)) : b
      }, setSegments: function (r) {
        var A = this._58O;
        r = r ? qp(r) ? new Vq(r.slice(0)) : new Vq(r._as.slice(0)) : new Vq, (A && r && A._as.join(",") !== r._as.join(",") || A !== r) && (this._58O = r, this.fp("segments", A, r))
      }, getPoints: function () {
        return this._59O
      }, toPoints: function () {
        var p = this._59O;
        return new Vq(p._as.slice(0))
      }, setPoints: function (u) {
        var J = this._59O;
        u = u ? qp(u) ? new Vq(u.slice(0)) : new Vq(u._as.slice(0)) : new Vq, (J && u && J._as.join(",") !== u._as.join(",") || J !== u) && (this._59O = u, this.fs(), this.fp("points", J, u))
      }, addPoint: function (w, t) {
        var X = this.toPoints();
        X.add(w, t), this.setPoints(X)
      }, setPoint: function (E, L) {
        var I = this.toPoints();
        I.set(E, L), this.setPoints(I)
      }, removePointAt: function (O) {
        var g = this.toPoints();
        g.removeAt(O), this.setPoints(g)
      }, setWidth: function (N) {
        var O = this;
        if (1 > N && (N = 1), !O._55I && !Ed && O.getWidth()) {
          O._55I = 1;
          var H = O._position.x,
            I = N / O.getWidth(),
            F = O.toPoints(),
            g = new Vq;
          F.each(function (Q) {
            g.add({
              x: (Q.x - H) * I + H,
              y: Q.y,
              e: Q.e
            })
          }), O.setPoints(g), O.fs(), delete O._55I
        }
        Ar.superClass.setWidth.call(O, N)
      }, setHeight: function (C) {
        var t = this;
        if (1 > C && (C = 1), !t._55I && !Ed && t.getHeight()) {
          t._55I = 1;
          var i = t._position.y,
            H = C / t.getHeight(),
            v = t.toPoints(),
            e = new Vq;
          v.each(function (O) {
            e.add({
              x: O.x,
              y: (O.y - i) * H + i,
              e: O.e
            })
          }), t.setPoints(e), t.fs(), delete t._55I
        }
        Ar.superClass.setHeight.call(t, C)
      }, setPosition: function (q, $) {
        var k, G = this;
        if (!G._28Q) {
          if (G._28Q = 1, !G._55I && !Ed) {
            k = 2 === arguments.length ? {
              x: q,
              y: $
            } : q;
            var m = k.x - G._position.x,
              S = k.y - G._position.y;
            if (0 === m && 0 === S) return delete G._28Q, void 0;
            G._55I = 1;
            var B = G.toPoints(),
              f = new Vq;
            B.each(function (j) {
              f.add({
                x: j.x + m,
                y: j.y + S,
                e: j.e
              })
            }), G.setPoints(f), G.fs(), delete G._55I
          }
          Ar.superClass.setPosition.apply(G, arguments), delete G._28Q
        }
      }, fs: function () {
        this.fireShapeChange()
      }, fireShapeChange: function () {
        var r = this;
        if (!r._55I && !Ed) {
          var A = ik(r._59O);
          A && (r._55I = 1, r.setRect(A), delete r._55I)
        }
        r.fp(Wd, !1, !0)
      }, getSerializableProperties: function () {
        var j = Ar.superClass.getSerializableProperties.call(this);
        return j.segments = 1, j.points = 1, j.thickness = 1, j.closePath = 1, j
      }
    });
    var ur = T.Polyline = function () {
      gr(ur, this), this.s({
        "shape.background": null,
        "shape.border.width": 2
      })
    };
    Dh("Polyline", Ar, {
      IRotatable: !1,
      _icon: "polyline_icon",
      _22Q: function () {
        return zs
      }, getUIClass: function () {
        return um
      }, setRotationX: function () {}, setRotation: function () {}, setRotationZ: function () {}, setClosePath: function () {}, setTall: function (W) {
        var Z = this;
        if (!Z._24Q && !Ed && Z.getTall()) {
          Z._24Q = 1;
          var D = Z._54O,
            l = W / Z.getTall();
          Z._59O.each(function (g) {
            g.e = g.e == V ? D : (g.e - D) * l + D
          }), Z.fs(), delete Z._24Q
        }
        ur.superClass.setTall.call(Z, W)
      }, setElevation: function (O) {
        var F = this;
        if (!F._24Q && !Ed) {
          F._24Q = 1;
          var e = O - F._54O;
          F._59O.each(function (D) {
            D.e == V ? D.e = O : D.e += e
          }), F.fs(), delete F._24Q
        }
        ur.superClass.setElevation.apply(F, arguments)
      }, fireShapeChange: function () {
        var B = this,
          f = B._59O;
        if (!B._24Q && !Ed) {
          var s = f.size();
          if (s) {
            var k = 1,
              T = f.get(0),
              L = B._54O;
            T.e == V && (T.e = L);
            for (var c = T.e, P = 0; s > k; k++) {
              T = f.get(k), T.e == V && (T.e = L);
              var $ = o(c, T.e),
                h = v(c + P, T.e);
              c = $, P = h - $
            }
            B._24Q = 1, B.setTall(P), B.setElevation(c + P / 2), delete B._24Q
          }
        }
        ur.superClass.fireShapeChange.apply(B, arguments)
      }
    });
    var Nj = T.SubGraph = function () {
      gr(Nj, this)
    };
    Dh("SubGraph", qn, {
      ISubGraph: 1,
      _image: "subGraph_image",
      _icon: "subGraph_icon",
      _8I: function () {
        Nj.superClass._8I.call(this), this.eachChild(function (o) {
          Hl(o) && o._8I()
        })
      }
    }), T.EdgeGroup = function (G, A) {
      this._70O = G, this._siblings = A;
      for (var C, e, c = 0, J = G.size(), g = t[rk]; J > c; c++)
        if (C = G.get(c).getStyle(rk, !1), C != V) {
          g = C;
          break
        }
      g == V && (g = !0);
      var X = H.edgeGroupAgentFunc;
      for (X && (e = X(G), e && e !== G.get(0) && (G.remove(e), G.add(e, 0))), c = 0; J > c; c++) G.get(c).s(rk, g)
    }, Dh("EdgeGroup", d, {
      getEdges: function () {
        return this._70O
      }, size: function () {
        return this._70O.size()
      }, get: function (q) {
        return this._70O.get(q)
      }, indexOf: function (D) {
        return this._70O.indexOf(D)
      }, each: function (U, h) {
        this._70O.each(U, h)
      }, getSiblings: function () {
        return this._siblings
      }, eachSiblingEdge: function (k, a) {
        this._siblings.each(function (E) {
          E._70O.each(k, a)
        })
      }
    });
    var Bo = T.JSONSerializer = function (u, Z) {
      this.dm = this._dataModel = u, this._hierarchical = !!Z
    };
    Dh("JSONSerializer", d, {
      ms_ac: ["hierarchical"],
      serialize: function (k) {
        return JSON.stringify(this.toJSON(), function (L, B) {
          return Fe(B) ? Sb(B) : B
        }, k == V ? 2 : k)
      }, toJSON: function () {
        var T = this,
          i = T.dm,
          M = i.getRoots(),
          f = T.json = {
            v: H.getVersion(),
            d: [],
            a: {}
          },
          E = i.getSerializableAttrs();
        for (var U in E) {
          var F = i.a(U);
          F !== b && T[Df](U, F, f.a)
        }
        return ym(f.a) && delete f.a, T._hierarchical ? M.each(T.serializeData, this) : i.each(function (v) {
          T.serializeData(v)
        }), f
      }, isSerializable: function () {
        return !0
      }, getProperties: function (K) {
        return K.getSerializableProperties()
      }, getStyles: function (k) {
        return k.getSerializableStyles()
      }, getAttrs: function (w) {
        return w.getSerializableAttrs()
      }, serializeData: function (M) {
        var U = this;
        if (U.isSerializable(M)) {
          var T, k, r, K, N = M.getClass(),
            l = new N,
            u = {
              c: M.getClassName(),
              i: M.getId(),
              p: {},
              s: {},
              a: {}
            };
          U.json.d.push(u), T = U.getProperties(M);
          for (k in T) K = ai(k), M[K] && (r = M[K](), r !== l[K]() && U[Df](k, r, u.p));
          T = U.getStyles(M);
          for (k in T) r = M.s(k), r !== l.s(k) && U[Df](k, r, u.s);
          T = U.getAttrs(M);
          for (k in T) r = M.a(k), r !== l.a(k) && U[Df](k, r, u.a);
          ym(u.p) && delete u.p, ym(u.s) && delete u.s, ym(u.a) && delete u.a
        }
        U._hierarchical && M.getChildren().each(U.serializeData, U)
      }, serializeValue: function (M, H, W) {
        md(H) ? H = {
          __a: H._as
        } : H instanceof Vi && (H = {
          __i: H.getId()
        }), W[M] = H
      }, deserialize: function (g, D, t) {
        Ed = !0;
        var F = this;
        g = F.json = hn(g) ? JSON.parse(g) : g, F._82I = {};
        for (var p = F.dm, r = new Vq, O = new Vq, n = 0, e = g.d.length; e > n; n++) {
          var U = g.d[n],
            d = Ek(U.c),
            l = new d,
            X = U.i;
          t && X != V && (l._id = X), F._82I[X] = l, r.add(l), O.add(U)
        }
        for (n = 0; e > n; n++) F.deserializeData(r.get(n), O.get(n));
        r.each(function (G) {
          D && !G.getParent() && G.setParent(D), p.add(G)
        });
        for (var P in g.a) p.a(P, F[De](g.a[P]));
        return Ed = !1, r
      }, deserializeData: function (s, u) {
        for (var R in u.p) s[Bi(R)](this[De](u.p[R]));
        for (R in u.s) s.s(R, this[De](u.s[R]));
        for (R in u.a) s.a(R, this[De](u.a[R]))
      }, deserializeValue: function ($) {
        if (or($)) {
          var d = $.__i;
          if (d != V) return this._82I[d];
          if (d = $.__a, qp(d)) return new Vq(d)
        }
        return $
      }
    }), eq(Ie, {
      serialize: function (q, V) {
        return new Bo(this, V).serialize(q)
      }, toJSON: function (s) {
        return new Bo(this, s).toJSON()
      }, deserialize: function (f, w, h) {
        return new Bo(this).deserialize(f, w, h)
      }
    }), Vd.GraphView = function (S) {
      var b = this;
      b._24I = {}, b._34I = new Vq, b._25I = {}, b._56I = {}, b._view = df(1, b), b._canvas = ip(b._view), b.dm(S ? S : new Ie), b.setEditable(!1), b.setScrollBarVisible(H.graphViewScrollBarVisible)
    }, Pm("GraphView", d, {
      ms_v: 1,
      ms_gv: 1,
      ms_bnb: 1,
      ms_tip: 1,
      ms_dm: 1,
      ms_lp: 1,
      ms_fire: 1,
      ms_sm: 1,
      _49o: 1,
      ms_txy: 1,
      _52o: 1,
      _51o: 1,
      ms_ac: ["layers", Qi, bl, xi, Ii, "resettable", "editInteractor", Tp, "pannable", "rectSelectable", "autoScrollZone", pr, "movableFunc", "editableFunc", "pointEditableFunc", "rectEditableFunc", "rotationEditableFunc", "rectSelectBackground", "rectSelectBorderColor", "editPointSize", "editPointBorderColor", "editPointBackground", "hoverDelay"],
      _resettable: H.graphViewResettable,
      _pannable: H.graphViewPannable,
      _rectSelectable: H.graphViewRectSelectable,
      _autoScrollZone: H.graphViewAutoScrollZone,
      _rectSelectBackground: H.graphViewRectSelectBackground,
      _rectSelectBorderColor: H.graphViewRectSelectBorderColor,
      _editPointSize: H.graphViewEditPointSize,
      _editPointBorderColor: H.graphViewEditPointBorderColor,
      _editPointBackground: H.graphViewEditPointBackground,
      _scrollBarColor: Eg,
      _scrollBarSize: lk,
      _autoHideScrollBar: cl,
      _autoMakeVisible: ih,
      setEditable: function (U) {
        var Y = this,
          j = Vd.XEditInteractor;
        U ? Y.setInteractors([new Gj(Y), j ? new j(Y) : new Oj(Y), new Gq(Y), new dd(Y), new gl(Y, {
          editable: !j
        })]) : Y.setInteractors([new Gj(Y), new Gq(Y), new dd(Y), new gl(Y, {
          editable: !1
        })])
      }, getCanvas: function () {
        return this._canvas
      }, _33I: function (g) {
        var m = g.getUIClass();
        return m ? new m(this, g) : V
      }, getDataUI: function (F) {
        var j = this,
          o = j._25I[F._id];
        return o === b && (o = j._33I(F), j._25I[F._id] = o), o
      }, invalidateAll: function (g) {
        var i = this;
        if (g) {
          for (var P in i._25I) {
            var M = i._25I[P];
            M && M.dispose()
          }
          i._25I = {}, i._56I = {}, i._24I = {}, i._34I.clear(), i.redraw()
        } else i.dm().each(function (p) {
          i.invalidateData(p)
        })
      }, invalidateSelection: function () {
        var H = this;
        H.sm().each(function (I) {
          H.invalidateData(I)
        })
      }, invalidateData: function (B) {
        var s = this;
        s._24I[B._id] = B, s._21Q(B), s.iv()
      }, _21Q: function (Y) {
        var k = this,
          h = k._24I;
        if (fb(Y) && Ym[Y.s(gf)]) {
          var f = Y.getSourceAgent();
          f && f.getAgentEdges().each(function (C) {
            h[C._id] = C
          }), f = Y.getTargetAgent(), f && f.getAgentEdges().each(function (l) {
            h[l._id] = l
          }), k.iv()
        }
      }, redraw: function (S) {
        var I = this;
        I._32I || (S ? I._34I.add(S) : (I._32I = 1, I._34I.clear()), I.iv())
      }, each: function (c, $) {
        var w, C, j, r = 0,
          H = this._layers,
          z = this._dataModel._datas._as,
          O = z.length;
        if (H)
          for (var _ = H.length; _ > r; r++) {
            j = H[r];
            for (var N = 0; O > N; N++)
              if (w = z[N], w._layer === j && (C = $ ? c.call($, w) : c(w), C === !1)) return
          } else
            for (; O > r; r++)
              if (w = z[r], C = $ ? c.call($, w) : c(w), C === !1) return
      }, reverseEach: function (P, a) {
        var u, t, z, H, r = this._layers,
          M = this._dataModel._datas._as,
          Y = M.length;
        if (r)
          for (u = r.length - 1; u >= 0; u--) {
            H = r[u];
            for (var p = Y - 1; p >= 0; p--)
              if (t = M[p], t._layer === H && (z = a ? P.call(a, t) : P(t), z === !1)) return
          } else
            for (u = Y - 1; u >= 0; u--)
              if (t = M[u], z = a ? P.call(a, t) : P(t), z === !1) return
      }, getViewRect: function () {
        return this._29I
      }, getContentRect: function () {
        var f = this,
          Y = f._84I;
        return Y || (f.each(function (_) {
          f.isVisible(_) && (Y = rr(Y, f.getDataUIBounds(_)))
        }), f._84I = Y ? Y : Bb), f._84I
      }, getScrollRect: function () {
        return rr(this.getContentRect(), this._29I)
      }, fitData: function (Q, E, R, G, i) {
        var I = this;
        if (!I.getWidth() || !I.getHeight()) return i || lo(I.fitData, I, [Q, E, R, G, !0], 200), void 0;
        I.makeVisible(Q), I.validate();
        var H = I.getDataUIBounds(Q);
        H && (H = jh(H), fn(H, R == V ? 20 : R), I.fitRect(H, E, G))
      }, fitContent: function (O, k, d, s) {
        var A = this;
        if (!A.getWidth() || !A.getHeight()) return s || lo(A.fitContent, A, [O, k, d, !0], 200), void 0;
        A.validate();
        var j = jh(A.getContentRect());
        fn(j, k == V ? 20 : k), A.fitRect(j, O, d)
      }, fitRect: function (r, U, s) {
        var y = this,
          a = y.getWidth(),
          $ = y.getHeight(),
          V = r.x + r.width / 2,
          B = r.y + r.height / 2,
          j = o(a / r.width, $ / r.height),
          W = y._zoom,
          O = -V * W + a / 2,
          u = -B * W + $ / 2;
        0 === j || isNaN(j) || (s && (j = o(1, j)), U ? y.setTranslate(O, u, {
          finishFunc: function () {
            y.setZoom(j, U)
          }
        }) : (y.setTranslate(O, u), y.setZoom(j)))
      }, toCanvas: function (G) {
        this.validateImpl();
        var x = this,
          R = x.getContentRect(),
          w = ip(),
          k = x._zoom,
          t = R.x * k,
          I = R.y * k,
          Y = R.width * k,
          v = R.height * k;
        We(w, Y, v, 1);
        var s = Wl(w);
        return G && en(s, 0, 0, Y, v, G), Md(s, -t, -I), s.scale(k, k), x._42(s), s.restore(), w
      }, toDataURL: function (G, u) {
        return this.toCanvas(G).toDataURL(u || "image/png", 1)
      }, getClipBounds: function () {
        return this._74O
      }, _42: function (w, l) {
        var M, D, h = this;
        h._93db(w, l), h.each(function (j) {
          h._56I[j._id] && (M = h.getDataUI(j), M && (D = M._79o(), T.HtmlNode && j instanceof T.HtmlNode ? M._42(w) : (!l || ob(l, D)) && M._42(w)))
        }), h._92db(w, l)
      }, validateImpl: function () {
        var B, n, Z, L, _, Y = this,
          q = Y.tx(),
          X = Y.ty(),
          b = Y._zoom,
          p = Y._canvas,
          m = this.getWidth(),
          o = this.getHeight(),
          N = Y._29I,
          V = {
            x: -q / b,
            y: -X / b,
            width: m / b,
            height: o / b
          },
          E = {},
          f = Y._34I,
          H = Y._24I,
          u = Y._32I,
          P = Y._23I;
        (m !== p.clientWidth || o !== p.clientHeight) && (We(p, m, o), u = 1), u || io(V, N) || (u = 1), Y._29I = V, Y.each(function (W) {
          n = W._id;
          var y = E[n] = Y.isVisible(W);
          y !== Y._56I[n] && (H[n] = W, Z = Y.getDataUI(H[n]), Z && Z._84o(y), Y._84o(W, y))
        }, Y);
        for (n in H) Z = Y.getDataUI(H[n]), Z && (!u && Y._56I[n] && (_ = Z._79o(), _ && f.add(_)), Z.invalidate()), Y._83I = 1;
        if (Y._56I = E, !u)
          for (n in H) E[n] && (Z = Y.getDataUI(H[n]), Z && (_ = Z._79o(), _ && f.add(_)));
        if (u ? L = V : (f.each(function (H) {
          ob(V, H) && (L = rr(L, H))
        }), L && (fn(L, v(1, 1 / b)), L.x = M(L.x * b) / b, L.y = M(L.y * b) / b, L.width = F(L.width * b) / b, L.height = F(L.height * b) / b, L = Nl(V, L))), Y._74O = L, L && (B = Wl(p), je(B, q, X, b), B.beginPath(), B.rect(L.x, L.y, L.width, L.height), B.clip(), B.clearRect(L.x, L.y, L.width, L.height), Y._42(B, L), B.restore(), delete Y._74O), Y._24I = {}, f.clear(), delete Y._32I, P && m > 0 && o > 0) {
          var Z = Y.getDataUI(P);
          if (Z) {
            var _ = Z._79o(),
              h = Y._29I,
              i = h.x,
              w = h.y,
              e = h.width,
              S = h.height,
              b = Y._zoom;
            _ && !ob(_, h) && (_.x + _.width < i && Y.tx(-_.x * b), _.x > i + e && Y.tx(-(_.x + _.width - e) * b), _.y + _.height < w && Y.ty(-_.y * b), _.y > w + S && Y.ty(-(_.y + _.height - S) * b))
          }
          delete Y._23I
        }
        Y._83I && (delete Y._83I, delete Y._84I), Y._98O()
      }, isScrollBarVisible: function () {
        return !!this._79O
      }, setScrollBarVisible: function (H) {
        var V = this;
        H !== V.isScrollBarVisible() && (H ? (ni(V._view, V._79O = Jd()), ni(V._79O, V._27I = Jd()), ni(V._79O, V._28I = Jd())) : (Wj(V._79O), delete V._79O, delete V._27I, delete V._28I), V.fp("scrollBarVisible", !H, H))
      }, showScrollBar: function () {
        var $ = this;
        $._79O && ($._85I || (w(function () {
          $._86I()
        }, qc), $.iv()), $._85I = new Date)
      }, _86I: function () {
        var R = this;
        if (R._85I) {
          var x = new Date,
            A = x.getTime();
          A - R._85I.getTime() >= qc ? (delete R._85I, R.iv()) : w(function () {
            R._86I()
          }, qc)
        }
      }, _98O: function () {
        var Z = this,
          y = this._27I,
          s = this._28I;
        if (Z._79O) {
          if (Z._autoHideScrollBar && !Z._85I) return y.style.visibility = He, s.style.visibility = He, void 0;
          var W = Z.getScrollBarColor(),
            E = Z._zoom,
            D = Z.getScrollBarSize(),
            G = Z.getViewRect(),
            v = Z.getScrollRect(),
            o = G.height * E,
            x = v.height * E,
            R = G.width * E - D - 2,
            N = o * ((G.y - v.y) * E / x),
            m = o * (o / x),
            B = y.style;
          x - .5 > o ? (xm > m && (N = N + m / 2 - xm / 2, 0 > N && (N = 0), N + xm > o && (N = o - xm), m = xm), ke(y, R, N, D, m), B.visibility = gj, B.background = W, B.borderRadius = D / 2 + op) : B.visibility = He;
          var w = G.width * E,
            $ = v.width * E,
            N = G.height * E - D - 2,
            R = w * ((G.x - v.x) * E / $),
            C = w * (w / $),
            B = s.style;
          $ - .5 > w ? (xm > C && (R = R + C / 2 - xm / 2, 0 > R && (R = 0), R + xm > w && (R = w - xm), C = xm), ke(s, R, N, C, D), B.visibility = gj, B.background = W, B.borderRadius = D / 2 + op) : B.visibility = He
        }
      }, setDataModel: function (u) {
        var p = this,
          M = p._dataModel,
          U = p._3o;
        M !== u && (M && (M.umm(p.handleDataModelChange, p), M.umd(p.handleDataPropertyChange, p), M.removeIndexChangeListener(p._75O, p), U || M.sm().ums(p._16o, p)), p._dataModel = u, u.mm(p.handleDataModelChange, p), u.md(p.handleDataPropertyChange, p), u.addIndexChangeListener(p._75O, p), U ? U._21I(u) : u.sm().ms(p._16o, p), p.invalidateAll(!0), p.fp(pj, M, u))
      }, handleDataPropertyChange: function (U) {
        this.invalidateData(U.data)
      }, onPropertyChanged: function (b) {
        var d = this,
          e = b.property;
        d.redraw(), Kc[e] ? d.showScrollBar() : e === Tp && d.onCurrentSubGraphChanged(b)
      }, onCurrentSubGraphChanged: function () {
        this.reset()
      }, handleDataModelChange: function (C) {
        var W = this,
          L = C.kind,
          E = C.data;
        if (W._83I = 1, "add" === L) W.invalidateData(E), fb(E) && E.getEdgeGroup() && E.getEdgeGroup().eachSiblingEdge(W.invalidateData, W);
        else if (L === rb) {
          W._21Q(E);
          var v = E._id,
            G = W._25I[v];
          if (G) {
            if (W._56I[v]) {
              var w = G._79o();
              w && W.redraw(w)
            }
            G.dispose(), delete W._25I[v], delete W._24I[v], delete W._56I[v]
          }
          E === W._currentSubGraph && W.setCurrentSubGraph(V)
        } else L === hq && (W.invalidateAll(!0), W.setCurrentSubGraph(V))
      }, _75O: function (G) {
        this.invalidateData(G.data)
      }, _76O: function (D) {
        var B = this;
        if (B.isVisible(D)) {
          for (var j = D; j._parent && B.isVisible(j._parent);) j = j._parent;
          j && j !== D && B._dataModel._76O(j), B._dataModel._76O(D)
        }
      }, isMovable: function (C) {
        var W = this;
        return fb(C) && C.getStyle(gf) !== Yi ? !1 : C.s("2d.movable") ? W._movableFunc ? W._movableFunc(C) : !0 : !1
      }, isSelectable: function (J) {
        return J.s("2d.selectable") && this.sm().isSelectable(J)
      }, isEditable: function (N) {
        var K = this;
        if (!K._editInteractor || !K.isSelected(N)) return !1;
        if (fl(N)) {
          var V = K.getDataUI(N);
          if (!V || V._88I) return !1
        }
        return fb(N) && N.getStyle(gf) !== Yi ? !1 : N.s("2d.editable") ? K._editableFunc ? K._editableFunc(N) : !0 : !1
      }, handleDelete: function () {
        this._editInteractor && this.removeSelection()
      }, isPointEditable: function (c) {
        return Hl(c) && 0 !== c.getRotation() ? !1 : this._pointEditableFunc ? this._pointEditableFunc(c) : !0
      }, isRectEditable: function (y) {
        return Hl(y) && 0 !== y.getRotation() ? !1 : this._rectEditableFunc ? this._rectEditableFunc(y) : !0
      }, isRotationEditable: function (y) {
        return y.setRotation && y.IRotatable !== !1 ? this._rotationEditableFunc ? this._rotationEditableFunc(y) : !0 : !1
      }, getRotationPoint: function (b) {
        var R = fo(b.getRotation(), 0, -b.getHeight() / 2 - (h ? 32 : 16)),
          a = b.p();
        return R.x += a.x, R.y += a.y, R
      }, getLogicalPoint: function (Z) {
        var D = this;
        return jc(Z, D._canvas, D.tx(), D.ty(), D._zoom, D._zoom)
      }, getSelectedDataAt: function (G) {
        var M = this;
        return this.getDataAt(G, function (p) {
          return M.isSelected(p)
        })
      }, getDataAt: function (C, x, d) {
        C.target && (C = this.lp(C));
        var g;
        return this.reverseEach(function (Z) {
          return (x ? x(Z) : this.isSelectable(Z)) && this.rectIntersects(Z, hd(C.x, C.y, d)) ? (g = Z, !1) : void 0
        }, this), g
      }, getIconInfoAt: function (I, r) {
        var p = this;
        if (I.target && (I = p.lp(I)), r || (r = p.getDataAt(I)), r) {
          var $ = p.getDataUI(r);
          if ($ && $._38o) {
            var N, H = $._38o,
              q = new Vq;
            for (N in H.icons) q.add(N);
            for (var g = q.size() - 1; g >= 0; g--) {
              N = q.get(g);
              for (var J = H.rects[N], c = J.rotation, S = J.length - 1; S >= 0; S--) {
                var T = J[S],
                  W = T.width,
                  M = T.height,
                  E = {
                    x: I.x - T.x - W / 2,
                    y: I.y - T.y - M / 2
                  };
                c != V && (E = fo(-c, E.x, E.y));
                var T = {
                  x: -W / 2,
                  y: -M / 2,
                  width: W,
                  height: M
                };
                if (Vb(T, E)) return {
                  key: N,
                  index: S,
                  name: H.icons[N].names[S],
                  rect: J[S],
                  point: I,
                  rotation: c,
                  relativeRect: T,
                  relativePoint: E,
                  data: r
                }
              }
            }
          }
        }
        return V
      }, getDatasInRect: function (H, l, o) {
        o === b && (o = 1);
        var i = this,
          w = new Vq;
        return i.reverseEach(function (K) {
          o && !i.isSelectable(K) || (l ? i.rectIntersects(K, H) : i.rectContains(K, H)) && w.add(K)
        }), w
      }, moveSelection: function (J, e) {
        var L, p = this,
          R = p.dm();
        R && (L = R.getHistoryManager()), L && L.beginInteraction(), Qq(p.sm().toSelection(p.isMovable, p), J, e), L && L.endInteraction()
      }, getDataUIBounds: function (o) {
        var H = this.getDataUI(o);
        return H ? H._79o() : V
      }, getBoundsForGroup: function (O) {
        return O.s(jf) ? this.getDataUIBounds(O) : V
      }, rectIntersects: function (D, b) {
        this.validate();
        var s = V;
        if (this._56I[D._id]) {
          var q = this._25I[D._id];
          if (q) {
            var z = q._79o();
            if (jr(b, z)) s = !0;
            else if ((b = Nl(b, z)) && (q.rectIntersects && (s = q.rectIntersects(b)), s == V)) {
              if (!D.s("pixelPerfect")) return !0;
              var G = b.x,
                U = b.y,
                W = b.width,
                y = b.height,
                C = 1,
                o = H.hitMaxArea,
                Q = W * y;
              Q > o && (C = o / Q);
              var _ = ui(W * C, y * C);
              Md(_, -G * C, -U * C), _.scale(C, C), q._42(_);
              try {
                for (var i = 0, x = _.getImageData(0, 0, W * C, y * C).data; i < x.length; i += 4)
                  if (0 !== x[i + 3]) {
                    s = !0;
                    break
                  }
                _.restore()
              } catch (n) {
                ln = V, s = !0
              }
            }
          }
        }
        return s ? !0 : !1
      }, rectContains: function (T, f) {
        if (this._56I[T._id]) {
          var s = this._25I[T._id];
          if (s) return jr(f, s._79o())
        }
        return !1
      }, reset: function () {
        this.setZoom(1), this.setTranslate(0, 0)
      }, handleKeyDown: function (q) {
        var A = this,
          t = A._focusData,
          g = t && A._25I[t._id],
          J = 0,
          v = A._dataModel._datas;
        t && t._enabled && t._editable && g && g.onKeyDown && g.onKeyDown(q) === !0 || (9 === q.keyCode && (t && (J = v.indexOf(t), zk(q) ? -1 === --J && (J = 0) : ++J === v.size() && (J = 0)), A._focusData = t = v.get(J), A.sm().setSelection(t)), Vk(q) ? A.selectAll() : tq(q) && A.isResettable() && A.reset(), A.sm().isEmpty() || (gb(q) && A.handleDelete(q), bj(q) && (A.moveSelection(-1, 0), A.fi({
          kind: "moveLeft"
        })), hb(q) && (A.moveSelection(0, -1), A.fi({
          kind: "moveUp"
        })), Lr(q) && (A.moveSelection(1, 0), A.fi({
          kind: "moveRight"
        })), ig(q) && (A.moveSelection(0, 1), A.fi({
          kind: "moveDown"
        }))))
      }, handleScroll: function (T, k) {
        gk(T);
        var D = this.lp(T);
        k > 0 ? this.scrollZoomIn(D) : 0 > k && this.scrollZoomOut(D)
      }, handlePinch: function (W, K, i) {
        K > i ? this.pinchZoomIn(W) : this.pinchZoomOut(W)
      }, checkDoubleClickOnNote: function (U, i) {
        var I = this,
          X = I.lp(U),
          N = I.getDataUI(i),
          B = N.note2Info;
        return B && i.s("note2.toggleable") && Vb(B.clickRect, X) ? (i.s(vm, !i.s(vm)), I.fi({
          kind: "toggleNote2",
          event: U,
          data: i
        }), !0) : (B = N.noteInfo, B && i.s("note.toggleable") && Vb(B.clickRect, X) ? (i.s(Ij, !i.s(Ij)), I.fi({
          kind: "toggleNote",
          event: U,
          data: i
        }), !0) : !1)
      }, _84o: function () {}, isNoteVisible: function () {
        return this._zoom > .15
      }, isLabelVisible: function () {
        return this._zoom > .15
      }, isSelectVisible: function () {
        return this._zoom > .15
      }, isEditVisible: function () {
        return this._zoom > .15
      }, autoScroll: function (T, q) {
        var j = this,
          B = j.getAutoScrollZone(),
          $ = B / j.getZoom(),
          l = B / 4,
          b = j._29I,
          o = j.lp(T),
          x = {
            x: j.tx(),
            y: j.ty()
          };
        return o && B > 0 && b && (o.x - b.x < $ ? j.translate(l, 0) : b.x + b.width - o.x < $ && j.translate(-l, 0), o.y - b.y < $ ? j.translate(0, l) : b.y + b.height - o.y < $ && j.translate(0, -l)), x.x = j.tx() - x.x, x.y = j.ty() - x.y, q && (q.x += x.x, q.y += x.y), x
      }, getMoveMode: function (w, D) {
        var L = D.s("2d.move.mode");
        return L ? L : $f["88"] ? "x" : $f["89"] ? "y" : "xy"
      }
    });
    var fm = function (D, e) {
      var S = this;
      S.gv = D, S.s = function (v) {
        return e.getStyle(v)
      }, S._data = e, S._87I = new Vq
    };
    Vm(fm, d, {
      _6I: V,
      ms_icons: 1,
      _84o: function () {}, dispose: function () {}, isShadowed: function () {
        return this.gv.isSelected(this._data) && "shadow" === this.s("select.type")
      }, _2o: function () {
        var S = this,
          w = S.gv.isSelected(S._data);
        return !w || S.isShadowed() ? 0 : this.s("select.width")
      }, getBodyColor: function (e) {
        var d = this._data,
          B = this.gv.getBodyColor(d);
        return B ? B : e ? d.getStyle(e) : V
      }, _2Q: function (r) {
        return this.s(r)
      }, _1Q: function (e, f, x, $) {
        var m = this.s,
          R = m(f + ".dash.color");
        e.strokeStyle = R, e.lineWidth = x, e.stroke(), m(f + ".dash.3d") && pk(e, R, m(f + ".dash.3d.color"), x, this.gv._zoom, m(f + ".dash.3d.accuracy")), ok(e, $)
      }, invalidate: function () {
        this._6I = V
      }, _79o: function () {
        var p = this;
        if (!p._6I) {
          p.labelInfo = p.label2Info = p.noteInfo = p.note2Info = p._38o = V, p._87I.clear(), p._3O();
          var l = p._data,
            s = p.gv;
          p._55O = s.isEditable(l) ? {
            _42O: s.isRectEditable(l),
            _43O: s.isPointEditable(l),
            _56O: s.isRotationEditable(l)
          } : V, p._6I = p._81o()
        }
        return p._6I
      }, _3O: function () {}, getPosition: function () {
        return Bb
      }, _68o: function (C, D) {
        C && this._87I.add(Bh(C, D))
      }, _81o: function () {
        var g = this,
          Y = g.s;
        g._24O(Rg, "getLabel"), g._24O(Lb, "getLabel2"), g._26O(Ug, "getNote"), g._26O(Mq, "getNote2"), g._15O(), g._55O && g._48O();
        var n;
        if (g._87I.each(function (A) {
          n = rr(n, A)
        }), n && g.isShadowed()) {
          var J = jh(n);
          J.x += Y("shadow.offset.x"), J.y += Y("shadow.offset.y"), fn(J, Y("shadow.blur")), n = rr(n, J)
        }
        return g._87I.clear(), n
      }, _42: function (E) {
        var Q = this,
          z = Q._data,
          l = Q.gv,
          A = Q.s,
          I = A("opacity"),
          Y = this.isShadowed();
        if (Y) {
          var L = E.shadowOffsetX,
            F = E.shadowOffsetY,
            K = E.shadowBlur,
            q = E.shadowColor;
          E.shadowOffsetX = A("shadow.offset.x"), E.shadowOffsetY = A("shadow.offset.y"), E.shadowBlur = A("shadow.blur"), E.shadowColor = A("shadow.color")
        }
        if (I != V) {
          var C = E.globalAlpha;
          E.globalAlpha = I
        }
        Q._80o(E), l.isLabelVisible(z) && (Br(E, Q.labelInfo), Br(E, Q.label2Info)), l.isNoteVisible(z) && (fp(E, Q.noteInfo), fp(E, Q.note2Info)), Q._99O(E), I != V && (E.globalAlpha = C), Y && (E.shadowOffsetX = L, E.shadowOffsetY = F, E.shadowBlur = K, E.shadowColor = q), Q._55O && l.isEditVisible(z) && Q._47O(E)
      }, _80o: function () {}, _47O: function () {}, _24O: function (Y, Z) {
        var u = this,
          v = u._data,
          Q = u.gv,
          J = u.s,
          U = Q[Z](v);
        if (U != V) {
          var D = J(Y + ".scale"),
            t = J(Y + ".max"),
            P = J(Y + ".position"),
            L = u[Y + "Info"] = {
              label: U,
              scale: D,
              color: Q[Z + "Color"](v),
              font: J(Y + ".font"),
              opacity: J(Y + ".opacity"),
              align: J(Y + ".align"),
              rotation: u.getRotation(J(Y + ".rotation"), !1, P),
              background: Q[Z + "Background"](v)
            },
            X = Cq(L, U);
          t > 0 && t < X.width && (L.labelWidth = X.width, X.width = t), 1 !== D && (X.width *= D, X.height *= D);
          var c = u.getPosition(P, J(Y + ".offset.x"), J(Y + ".offset.y"), X, J(Y + ".position.fixed"));
          if (X.x = c.x - X.width / 2, X.y = c.y - X.height / 2, u._68o(L.rect = X, L.rotation), 1 !== D) {
            var j = X.width / D,
              b = X.height / D;
            L.rect = {
              x: c.x - j / 2,
              y: c.y - b / 2,
              width: j,
              height: b
            }
          }
        }
      }, _26O: function (t, v) {
        var i = this,
          P = i.gv,
          h = i._data,
          M = i.s,
          m = P[v](h);
        if (m != V) {
          var B, p, G = M(t + ".scale"),
            J = i[t + "Info"] = {
              note: m,
              scale: G,
              data: h,
              view: P,
              expanded: M(t + ".expanded"),
              font: M(t + ".font"),
              color: M(t + ".color"),
              opacity: M(t + ".opacity"),
              align: M(t + ".align"),
              icon: M(t + ".icon"),
              backgroundImage: M(t + ".backgroundImage"),
              borderWidth: M(t + ".border.width"),
              borderColor: M(t + ".border.color"),
              background: P[v + "Background"](h)
            },
            e = i.getPosition(M(t + ".position"), M(t + ".offset.x"), M(t + ".offset.y")),
            n = e.x,
            I = e.y;
          if (J.expanded) {
            var s, r = M(t + ".max"),
              l = M(t + ".backgroundImage");
            l ? (l = ye(l), s = {
              width: lc(l, h),
              height: Ec(l, h)
            }) : s = Cq(J, m), s.width += 6, s.height += 2, r > 0 && r < s.width && (J.labelWidth = s.width, s.width = r), B = s.width, p = s.height + 8, J.clickRect = {
              x: n - B * G / 2,
              y: I - p * G,
              width: B * G,
              height: p * G * s.height / p
            }
          } else {
            var c = M(t + ".icon");
            c ? (c = ye(c), B = lc(c, h), p = Ec(c, h)) : (B = 12, p = 18), J.clickRect = {
              x: n - B * G / 2,
              y: I - p * G,
              width: B * G,
              height: p * G
            }
          }
          J.rect = {
            x: n - B / 2,
            y: I - p * G / 2 - p / 2,
            width: B,
            height: p
          };
          var _ = F(J.borderWidth / 2) * G;
          i._68o({
            x: n - B * G / 2 - _,
            y: I - p * G - _,
            width: B * G + 2 * _,
            height: p * G + 2 * _
          })
        }
      }, _48O: function () {}, _99O: function (H) {
        var Z = this,
          l = Z._38o;
        if (l) {
          var S = Z.gv,
            x = Z._data,
            M = l.icons;
          for (var N in M) {
            var w = M[N],
              y = l.rects[N];
            if (y) {
              var z = Cc(w.opacity, x, S),
                j = Cc(w.names, x, S),
                q = j ? j.length : 0,
                u = y.rotation;
              if (z != V) {
                var _ = H.globalAlpha;
                H.globalAlpha *= z
              }
              for (var d = 0; q > d; d++) {
                var L = j[d],
                  K = ye(L),
                  U = y[d];
                if (u) {
                  var A = U.x + U.width / 2,
                    o = U.y + U.height / 2;
                  H.save(), Md(H, A, o), Hf(H, u), Md(H, -A, -o)
                }
                Rm(H, K, Cc(w.stretch, x, S), U.x, U.y, U.width, U.height, Z._data, Z.gv), u && H.restore()
              }
              z != V && (H.globalAlpha = _)
            }
          }
        }
      }
    });
    var di = function (o, A) {
      gr(di, this, [o, A])
    };
    Vm(di, fm, {
      _40O: function (t, p) {
        var M = this,
          V = M.s,
          q = t.rect;
        (t.borderColor = M.gv.getBorderColor(M._data)) && (t.borderType = V("border.type"), t.borderWidth = V("border.width"), t.borderPadding = V("border.padding"), p = v(p, t.borderPadding + t.borderWidth / 2)), (t.selectWidth = M._2o()) && (t.selectType = V("select.type"), t._97o = V("select.color"), t.selectPadding = V("select.padding"), p = v(p, t.selectPadding + t.selectWidth / 2)), p > 0 && (q = jh(q), fn(q, p)), M._68o(q)
      }, _39O: function (g, w) {
        var S = w.rect;
        if (w.borderWidth > 0) {
          var I = w.borderPadding;
          g.strokeStyle = w.borderColor, g.lineWidth = w.borderWidth, Oc(g, w.borderType, {
            x: S.x - I,
            y: S.y - I,
            width: S.width + 2 * I,
            height: S.height + 2 * I
          }), g.stroke()
        }
        w.selectWidth > 0 && (I = w.selectPadding, g.strokeStyle = w._97o, g.lineWidth = w.selectWidth, Oc(g, w.selectType, {
          x: S.x - I,
          y: S.y - I,
          width: S.width + 2 * I,
          height: S.height + 2 * I
        }), g.stroke())
      }, _3O: function () {
        var p = this,
          y = p.s,
          b = p._data,
          G = b.getStyle(Wd),
          n = p.getBodyColor(),
          M = p._83o = G ? {
            shape: G,
            _53o: p.getBodyColor("shape.background"),
            _27Q: ye(y("shape.repeat.image"), n),
            _54o: y("shape.border.width"),
            _55o: y("shape.border.color"),
            _56o: y("shape.border.3d"),
            _57o: y("shape.border.3d.color"),
            _58o: y("shape.border.3d.accuracy"),
            shapeGradient: y("shape.gradient"),
            _59o: y("shape.gradient.color"),
            _60o: y("shape.border.pattern"),
            _61o: y("shape.border.cap"),
            _62o: y("shape.border.join")
          } : {
            img: ye(b.getImage(), n),
            bodyColor: n,
            stretch: y("image.stretch")
          };
        E && !Y || (M.rect = b.getRect(), M.position = b.p(), M.rotation = b.getRotation(), G === Pg && (M._63o = y("shape.depth")), p._40O(M, G ? Bf(V, M._54o / 2, M._62o) : 0))
      }, getPosition: function (e, E, o, p) {
        var $ = Vh(e, this._83o.rect, p);
        return $.x += E, $.y += o, $
      }, _80o: function (p) {
        var N = this,
          g = N.s,
          J = N.gv,
          O = N._data,
          M = N._83o,
          W = M.rect,
          F = W,
          b = M.position,
          U = M.rotation,
          d = M.shape;
        if (W.width > 0 && W.height > 0) {
          if (U && (p.save(), Md(p, b.x, b.y), Hf(p, U), Md(p, -b.x, -b.y), F = O.getSize(), F.x = b.x - F.width / 2, F.y = b.y - F.height / 2), N.freeDraw) N.freeDraw(p, F, M);
          else if (d) {
            var x, C, E, Y, l = M._60o,
              A = Rj(p, l),
              c = M._53o,
              q = M._27Q,
              G = M._54o,
              S = M._55o,
              w = p.lineJoin,
              r = p.lineCap;
            if ("roundRect" === d ? x = g("shape.corner.radius") : "polygon" === d ? x = g("shape.polygon.side") : "arc" === d && (x = g("shape.arc.from"), C = g("shape.arc.to"), E = g("shape.arc.close"), Y = g("shape.arc.oval")), p.lineJoin = M._62o, p.lineCap = M._61o, c || q ? (q ? $q(p, q) : Mg(p, c, M.shapeGradient, M._59o, F), Oc(p, d, F, x, C, E, Y), p.fill(), p !== A && Oc(A, d, F, x, C, E, Y)) : Oc(A, d, F, x, C, E, Y), G > 0 && (p.lineWidth = G, p.strokeStyle = S, p.stroke(), M._56o && pk(p, S, M._57o, G, J._zoom, M._58o)), ok(p, l), g("shape.dash")) {
              var H = g("shape.dash.width") || G;
              if (H > 0) {
                l = g("shape.dash.pattern");
                var A = Rj(p, l, N._2Q("shape.dash.offset"));
                A !== p && Oc(A, d, F, x, C, E, Y), N._1Q(p, "shape", H, l)
              }
            }
            Ap(p, c, M._63o, F), p.lineJoin = w, p.lineCap = r
          } else Rm(p, M.img, M.stretch, F.x, F.y, F.width, F.height, O, J, M.bodyColor);
          U && p.restore()
        }
        N._39O(p, M)
      }, _48O: function () {
        var i, A = this,
          P = A._data,
          C = A.gv,
          G = A._55O,
          t = C.getEditPointSize() / 2 + 2;
        if (G._42O && (i = P.getRect(), fn(i, t)), G._56O) {
          var Y = G._98o = C.getRotationPoint(P);
          i = rr(i, {
            x: Y.x - t,
            y: Y.y - t,
            width: 2 * t,
            height: 2 * t
          })
        }
        A._68o(i)
      }, _47O: function (t) {
        var O = this,
          d = O.gv,
          $ = O._55O,
          C = O._data.getRect(),
          o = d.getEditPointSize(),
          k = $._98o;
        $._42O && (t.fillStyle = d.getEditPointBackground(), t.strokeStyle = d.getEditPointBorderColor(), t.lineWidth = 1, [{
          x: C.x,
          y: C.y
        }, {
          x: C.x + C.width / 2,
          y: C.y
        }, {
          x: C.x + C.width,
          y: C.y
        }, {
          x: C.x,
          y: C.y + C.height / 2
        }, {
          x: C.x + C.width,
          y: C.y + C.height / 2
        }, {
          x: C.x,
          y: C.y + C.height
        }, {
          x: C.x + C.width / 2,
          y: C.y + C.height
        }, {
          x: C.x + C.width,
          y: C.y + C.height
        }].forEach(function (i) {
          en(t, i.x - o / 2, i.y - o / 2, o, o), t.stroke()
        })), $._56O && (t.fillStyle = d.getEditPointBorderColor(), t.strokeStyle = d.getEditPointBackground(), t.lineWidth = 1, t.beginPath(), t.arc(k.x, k.y, o / 2, 0, i, !0), t.fill(), t.stroke())
      }
    });
    var vg = function (w, d) {
        gr(vg, this, [w, d])
      },
      Bg = function (A, G, m, d) {
        var B = Pq(A, G);
        return m = d ? o(m, B) : os(m, B), B ? m /= B : m = 0, {
          x: A.x + (G.x - A.x) * m,
          y: A.y + (G.y - A.y) * m
        }
      };
    Vm(vg, fm, {
      _3O: function () {
        var $, _ = this,
          v = _._data,
          L = _.gv,
          p = _.s,
          D = p(gf),
          X = v.isLooped(),
          m = p("edge.width"),
          r = p("edge.center"),
          U = p("edge.offset"),
          o = L.getBorderColor(v),
          O = o ? p("border.width") : 0,
          P = _._2o(),
          Z = v._40I,
          d = v._41I,
          T = _._78o = Z && d ? {
            looped: X,
            type: D,
            width: m,
            center: r,
            color: _.getBodyColor("edge.color"),
            borderColor: o,
            borderWidth: O,
            _97o: P ? p("select.color") : V,
            selectWidth: P,
            pattern: p("edge.pattern"),
            cap: p("edge.cap"),
            join: p("edge.join"),
            is3d: p("edge.3d"),
            _67o: p("edge.3d.color"),
            _66o: p("edge.3d.accuracy")
          } : V;
        if (T) {
          var q = H.getEdgeType(D);
          if (q) {
            var n = q(v, Eo(_, L, v, X, D), L, _._19Q);
            n.points && n.points.size() > 1 && (T._4O = n, $ = ik(T._4O.points))
          } else {
            var u = qo(L, Z, p("edge.source.position"), p("edge.source.offset.x"), p("edge.source.offset.y")),
              C = qo(L, d, p("edge.target.position"), p("edge.target.offset.x"), p("edge.target.offset.y"));
            if (D === Yi) {
              var i = T.points = p(sl) || wf,
                W = i.size();
              if (T.segments = p("edge.segments"), !r)
                if (U) {
                  var B = Bg(u, W ? i.get(0) : C, U, W),
                    b = Bg(C, W ? i.get(W - 1) : u, U, W);
                  u = B, C = b
                } else {
                  var J = wc(L, Z),
                    w = wc(L, d),
                    G = ze(u, W ? i.get(0) : C, J);
                  G && (u = {
                    x: G[0],
                    y: G[1]
                  }), G = ze(W ? i.get(W - 1) : u, C, w), G && (C = {
                    x: G[0],
                    y: G[1]
                  })
                }
              $ = rr(ik(T.points), ik(u, C))
            } else {
              var A = Eo(_, L, v, X, D);
              if (_._19Q || (A = -A), X) u = jh(u), u.x -= Z.getWidth() / 2, T.radius = A, $ = {
                x: u.x - A,
                y: u.y - A,
                width: 2 * A,
                height: 2 * A
              };
              else {
                var E = Pq(u, C),
                  R = os(U, E),
                  B = {
                    x: R,
                    y: A
                  },
                  b = {
                    x: E - R,
                    y: A
                  },
                  y = f(C.y - u.y, C.x - u.x),
                  Y = T.mat = new Jb(y);
                if (T.orienAngle = y, T.angle = C.x < u.x ? y + S : y, T.rect = {
                  x: B.x,
                  y: B.y,
                  width: b.x - B.x,
                  height: 0
                }, T.origin = u, B = Y.tf(B), B.x += u.x, B.y += u.y, b = Y.tf(b), b.x += u.x, b.y += u.y, r) {
                  var s = {
                    x: E,
                    y: 0
                  };
                  s = Y.tf(s), s.x += u.x, s.y += u.y, $ = ik([u, B, b, s]), T.c1 = u, T.c2 = s
                } else $ = ik(B, b);
                u = B, C = b
              }
            }
            T._69o = u, T._70o = C
          }
          Bf($, m / 2 + O + P, T.join), _._68o($)
        }
      }, getRotation: function (A, $, G) {
        A = A || 0;
        var B = this._78o;
        if (B) {
          var v, Q = B.angle,
            P = B.points,
            u = B._4O;
          if (Q != V) return $ ? B.orienAngle + A : Q + A;
          if (u) {
            var H = u.points;
            return v = H.size(), Pp[G] ? v && 0 === v % 2 ? Sf(H.get(v / 2 - 1), H.get(v / 2), $, A) : A : bp[G] ? Sf(H.get(0), H.get(1), $, A) : Sf(H.get(v - 2), H.get(v - 1), $, A)
          }
          if (P) return v = P.size(), Pp[G] ? v && 0 === v % 2 ? Sf(P.get(v / 2 - 1), P.get(v / 2), $, A) : A : bp[G] ? Sf(B._69o, v ? P.get(0) : B._70o, $, A) : Sf(v ? P.get(v - 1) : B._69o, B._70o, $, A)
        }
        return A
      }, getPosition: function (D, Y, j, w, p) {
        var E = this._78o;
        if (E) {
          var Q, d = E.type,
            M = E.points,
            g = E._4O,
            Z = E._69o,
            W = E._70o;
          if (!d) return E.looped ? {
            x: Z.x - E.radius + Y,
            y: Z.y + j
          } : (p && Z && W && (Z.x > W.x || Z.x === W.x && Z.y > W.y) && (D = nl[D], j = -j), Q = Vh(D, E.rect, w), Q.x += Y, Q.y += j, Q = E.mat.tf(Q), Q.x += E.origin.x, Q.y += E.origin.y, Q);
          if (M) {
            var Q, r = M.size();
            if (Pp[D]) {
              if (r) {
                var k = r % 2;
                if (0 === k) return yq(M.get(r / 2 - 1), M.get(r / 2), D, Y, j, w, p);
                Q = M.get((r - k) / 2)
              } else Q = {
                x: (Z.x + W.x) / 2,
                y: (Z.y + W.y) / 2
              };
              return Q = Vh(D, {
                x: Q.x,
                y: Q.y,
                width: 0,
                height: 0
              }, w), Q.x += Y, Q.y += j, Q
            }
            return bp[D] ? yq(Z, r ? M.get(0) : W, D, Y, j, w, p) : yq(r ? M.get(r - 1) : Z, W, D, Y, j, w, p)
          }
          if (g) {
            var F = g.points,
              r = F.size();
            if (Pp[D]) {
              var k = r % 2;
              return 0 === k ? yq(F.get(r / 2 - 1), F.get(r / 2), D, Y, j, w, p) : (Q = F.get((r - k) / 2), Q = Vh(D, {
                x: Q.x,
                y: Q.y,
                width: 0,
                height: 0
              }, w), Q.x += Y, Q.y += j, Q)
            }
            return bp[D] ? yq(F.get(0), F.get(1), D, Y, j, w, p) : yq(F.get(r - 2), F.get(r - 1), D, Y, j, w, p)
          }
        }
        return Bb
      }, _42: function (a) {
        this._78o && vg.superClass._42.call(this, a)
      }, drawPath: function (e, W) {
        e.beginPath();
        var G = W.type,
          U = W.points,
          d = W.segments,
          M = W._4O;
        if (!G || U) {
          var $ = W._69o,
            b = $.x,
            C = $.y,
            x = W._70o,
            N = x.x,
            w = x.y;
          if (G)
            if (d) {
              var r = new Vq({
                x: b,
                y: C
              });
              r.addAll(U), r.add({
                x: N,
                y: w
              }), Mj(e, r, d)
            } else e.moveTo(b, C), U.each(function (w) {
              e.lineTo(w.x, w.y)
            }), e.lineTo(N, w);
          else W.looped ? e.arc(b, C, W.radius, 0, i, !0) : W.center ? (e.moveTo(W.c1.x, W.c1.y), e.lineTo(b, C), e.lineTo(N, w), e.lineTo(W.c2.x, W.c2.y)) : (e.moveTo(b, C), e.lineTo(N, w))
        } else M && Mj(e, M.points, M.segments)
      }, _80o: function (s) {
        var p = this,
          w = p.s,
          O = p._78o,
          b = O.width,
          C = O.selectWidth,
          q = O.borderWidth,
          U = O.color,
          e = s.lineJoin,
          B = s.lineCap,
          z = O.pattern;
        if (s.lineJoin = O.join, s.lineCap = O.cap, p.drawPath(Rj(s, z), O), C && (s.strokeStyle = O._97o, s.lineWidth = b + 2 * (q + C), s.stroke()), q && (s.strokeStyle = O.borderColor, s.lineWidth = b + 2 * q, s.stroke()), s.strokeStyle = U, s.lineWidth = b, s.stroke(), O.is3d && pk(s, U, O._67o, b, p.gv._zoom, O._66o), ok(s, z), w("edge.dash")) {
          z = w("edge.dash.pattern");
          var x = Rj(s, z, p._2Q("edge.dash.offset"));
          x !== s && p.drawPath(x, O), p._1Q(s, "edge", w("edge.dash.width") || b, z)
        }
        s.lineJoin = e, s.lineCap = B
      }, _48O: function () {
        var o = this,
          K = o._78o;
        if (o._55O._43O && K && K.points) {
          var i = ik(K.points);
          i && (fn(i, o.gv.getEditPointSize() / 2 + 2), o._68o(i))
        }
      }, _47O: function (R) {
        var X = this,
          _ = X.gv,
          c = X._78o;
        if (X._55O._43O && c && c.points) {
          var y = _.getEditPointSize() / 2;
          R.fillStyle = _.getEditPointBackground(), R.strokeStyle = _.getEditPointBorderColor(), R.lineWidth = 1, c.points.each(function (P) {
            R.beginPath(), R.arc(P.x, P.y, y, 0, i, !0), R.fill(), R.stroke()
          })
        }
      }, _71o: function (W, q) {
        var N = this,
          B = N._data;
        if (N._19Q = !0, !B.getEdgeGroup()) return W ? B.s("edge.gap") : 0;
        var d, h = 0,
          r = 0,
          M = 0;
        if (B.getEdgeGroup().getSiblings().each(function (n) {
          n.each(function (o) {
            if (N.gv.isVisible(o) && o.s(gf) == q) {
              var i = o.s("edge.gap");
              d ? (r += M / 2 + i / 2, M = i) : (d = o, M = i), o === B && (h = r)
            }
          })
        }), W) return r - h + M;
        var J = h - r / 2;
        return d && B._40I !== d._40I && (N._19Q = !1), J
      }
    });
    var Pd = function (Y, A) {
      gr(Pd, this, [Y, A])
    };
    Vm(Pd, di, {
      _3O: function () {
        var h, $, a = this,
          P = a.s,
          d = a._data,
          R = a.gv;
        if (a._88I = V, d.isExpanded() && d.eachChild(function (V) {
          var J = R.getBoundsForGroup(V);
          J && ($ || ($ = []), $.push(J), h = rr(h, J))
        }), h) {
          var Y = R.getLabel(d),
            S = P("group.type");
          h = Aj(S, $, h), Lc(h, d, "group.padding", 1);
          var H = a._88I = {
            type: S,
            rect: h,
            _64o: h
          };
          if (!S && Y != V) {
            var t, b = a.labelInfo = {
                label: Y,
                color: P("group.title.color"),
                font: P("group.title.font")
              },
              L = Cq(b, Y),
              c = L.width,
              v = L.height,
              f = P("group.title.align");
            c > h.width && (h.width = c), b.rect = {
              y: h.y - v,
              width: L.width,
              height: v
            }, t = f === pg ? h.x : f === Hi ? h.x + h.width - c : h.x + h.width / 2 - c / 2, b.rect.x = t, H.titleRect = {
              x: h.x,
              y: h.y - v,
              width: h.width,
              height: v + 1
            }, H.rect = {
              x: h.x,
              y: h.y - v,
              width: h.width,
              height: h.height + v
            }
          }
          a._40O(H, P("group.border.width") / 2)
        } else Pd.superClass._3O.call(a)
      }, getPosition: function (W, w, A, o) {
        var b = this._88I;
        if (b) {
          var x = Vh(W, b.rect, o);
          return x.x += w, x.y += A, x
        }
        return Pd.superClass.getPosition.apply(this, arguments)
      }, _24O: function (j, W) {
        var U = this._88I;
        (!U || U.type || "label2" === j) && Pd.superClass._24O.call(this, j, W)
      }, _80o: function (G) {
        var S = this,
          H = S._88I;
        if (H) {
          var m = S._data,
            _ = S.s,
            s = S.gv,
            J = H.type,
            q = H.rect,
            a = H._64o,
            h = H.titleRect,
            V = S.getBodyColor(),
            i = ye(_("group.image"), V),
            n = _("group.image.stretch"),
            A = S.getBodyColor("group.background"),
            p = ye(_("group.repeat.image"), V),
            g = _("group.gradient"),
            x = _("group.gradient.color"),
            W = _("group.depth");
          if (J) {
            var L = _("group.border.pattern"),
              w = _("group.border.width"),
              l = G.lineJoin,
              P = G.lineCap;
            if (G.lineJoin = _("group.border.join"), G.lineCap = _("group.border.cap"), i) {
              if (G.save(), Oc(G, J, q), G.clip(), Rm(G, i, n, q.x, q.y, q.width, q.height, m, s, V), G.restore(), w > 0) {
                var v = Rj(G, L);
                Oc(v, J, q), G.lineWidth = w, G.strokeStyle = _("group.border.color"), G.stroke(), ok(G, L)
              }
            } else {
              var v = Rj(G, L);
              A || p ? (p ? $q(G, p) : Mg(G, A, g, x, q), Oc(G, J, q), G.fill(), G !== v && Oc(v, J, q)) : Oc(v, J, q), w > 0 && (G.lineWidth = w, G.strokeStyle = _("group.border.color"), G.stroke()), ok(G, L), J === Pg && Ap(G, A, W, q)
            }
            G.lineJoin = l, G.lineCap = P
          } else if (i ? Rm(G, i, n, a.x, a.y, a.width, a.height, m, s, S.getBodyColor()) : (A || p) && (p ? $q(G, p) : Mg(G, A, g, x, a), Oc(G, Pg, a), G.fill(), Ap(G, A, W, a)), h) {
            var I = _("group.title.background");
            en(G, h.x, h.y, h.width, h.height, I), Ap(G, I, W, h)
          }
          S._39O(G, H)
        } else Pd.superClass._80o.call(S, G)
      }
    });
    var qf = function (j, v) {
      gr(qf, this, [j, v])
    };
    Vm(qf, di, {
      _3O: function () {
        var w = this,
          E = w._data,
          O = w.s,
          G = w.gv,
          r = E.getPoints(),
          m = G.getBorderColor(E),
          X = m ? O("border.width") : 0,
          S = w._2o(),
          U = O("shape.border.width"),
          L = E.getRect(),
          K = G.getBodyColor(E),
          H = w._99o = r.isEmpty() ? V : {
            rect: L,
            rotation: E.getRotation(),
            position: E.p(),
            points: r,
            segments: E.getSegments(),
            bodyColor: K,
            borderColor: m,
            borderWidth: X,
            _94o: O("shape.border.3d"),
            _95o: O("shape.border.3d.color"),
            _96o: O("shape.border.3d.accuracy"),
            _97o: S ? O("select.color") : V,
            selectWidth: S,
            _53o: O("shape.background"),
            _27Q: ye(O("shape.repeat.image"), K),
            _54o: U,
            _55o: O("shape.border.color"),
            shapeGradient: O("shape.gradient"),
            _59o: O("shape.gradient.color"),
            _60o: O("shape.border.pattern"),
            _61o: O("shape.border.cap"),
            _62o: O("shape.border.join")
          };
        if (H) {
          var _ = U / 2 + X + S;
          _ && (L = jh(L), Bf(L, _, H._62o)), w._68o(L)
        }
      }, getPosition: function (u, C, d, l) {
        var L = this._99o;
        if (L) {
          var M = Vh(u, L.rect, l);
          return M.x += C, M.y += d, M
        }
        return Bb
      }, _42: function (s) {
        this._99o && qf.superClass._42.call(this, s)
      }, _80o: function (r) {
        var s, T = this,
          Y = T.s,
          K = T._99o,
          k = K.position,
          Q = K.rotation,
          V = K.bodyColor,
          x = K.borderWidth,
          o = K.selectWidth,
          z = K._53o,
          v = K._27Q,
          q = K._54o,
          m = K.points,
          $ = K.segments,
          l = T._data.isClosePath();
        Q && (r.save(), Md(r, k.x, k.y), Hf(r, Q), Md(r, -k.x, -k.y));
        var n = K._60o,
          U = Rj(r, n),
          A = r.lineJoin,
          M = r.lineCap;
        if (r.lineJoin = K._62o, r.lineCap = K._61o, z || v ? (v ? $q(r, v) : (s = V ? V : z, Mg(r, s, K.shapeGradient, K._59o, K.rect)), Mj(r, m, $, l), r.fill(), U !== r && Mj(U, m, $, l)) : Mj(U, m, $, l), o && (r.strokeStyle = K._97o, r.lineWidth = q + 2 * (x + o), r.stroke()), x && (r.strokeStyle = K.borderColor, r.lineWidth = q + 2 * x, r.stroke()), q && (s = K._55o, !z && V && (s = V), r.strokeStyle = s, r.lineWidth = q, r.stroke(), K._94o && pk(r, s, K._95o, q, T.gv._zoom, K._96o)), ok(r, n), Y("shape.dash")) {
          var X = Y("shape.dash.width") || q;
          if (X > 0) {
            n = Y("shape.dash.pattern");
            var U = Rj(r, n, T._2Q("shape.dash.offset"));
            U !== r && Mj(U, m, $, l), T._1Q(r, "shape", X, n)
          }
        }
        r.lineJoin = A, r.lineCap = M, Q && r.restore()
      }, _48O: function () {
        var C = this;
        if (qf.superClass._48O.call(C), C._55O._43O) {
          var x = C._data.getRect();
          fn(x, C.gv.getEditPointSize() / 2 + 2), C._68o(x)
        }
      }, _47O: function (W) {
        var o = this;
        if (qf.superClass._47O.call(o, W), o._55O._43O) {
          var V = o.gv,
            z = V.getEditPointSize() / 2;
          W.fillStyle = V.getEditPointBackground(), W.strokeStyle = V.getEditPointBorderColor(), W.lineWidth = 1, o._data.getPoints().each(function (V) {
            W.beginPath(), W.arc(V.x, V.y, z, 0, i, !0), W.fill(), W.stroke()
          })
        }
      }
    });
    var um = function (r, y) {
      gr(um, this, [r, y])
    };
    Vm(um, qf, {
      getRotation: function (m, Q, U) {
        m = m || 0;
        var E = this._data.getPoints(),
          g = E.size();
        return g > 1 ? Pp[U] ? g && 0 === g % 2 ? Sf(E.get(g / 2 - 1), E.get(g / 2), Q, m) : m : bp[U] ? Sf(E.get(0), E.get(1), Q, m) : Sf(E.get(g - 2), E.get(g - 1), Q, m) : m
      }, getPosition: function (B, T, _, N, W) {
        var C = this._data.getPoints(),
          Z = C.size();
        if (Z > 1) {
          if (Pp[B]) {
            var i = Z % 2;
            if (0 === i) return yq(C.get(Z / 2 - 1), C.get(Z / 2), B, T, _, N, W);
            var o = C.get((Z - i) / 2),
              y = {
                x: o.x,
                y: o.y,
                width: 0,
                height: 0
              };
            return o = Vh(B, y, N), o.x += T, o.y += _, o
          }
          return bp[B] ? yq(C.get(0), C.get(1), B, T, _, N, W) : yq(C.get(Z - 2), C.get(Z - 1), B, T, _, N, W)
        }
        return Bb
      }
    });
    var Pj = function (o, X) {
      gr(Pj, this, [o, X])
    };
    Vm(Pj, di, {
      _3O: function () {
        var B = this;
        Pj.superClass._3O.call(B);
        var z = B.s,
          Y = B._83o;
        B._82o = Y.img || Y.shape ? V : {
          background: B.getBodyColor("grid.background"),
          depth: z("grid.depth"),
          rect: Y.rect,
          _88o: z("grid.cell.depth"),
          cellBorderColor: z("grid.cell.border.color"),
          _89o: z("grid.row.count"),
          _90o: z("grid.column.count"),
          block: z("grid.block"),
          _91o: z("grid.block.color"),
          _92o: z("grid.block.padding"),
          _93o: z("grid.block.width")
        }
      }, _80o: function (k) {
        var V = this,
          q = V._82o;
        if (!q) return Pj.superClass._80o.call(V, k), void 0;
        var f, D, l = V._data,
          o = q.background,
          t = q.rect,
          Z = q.block,
          i = q._91o,
          a = q._92o,
          U = q._93o,
          c = q._88o,
          B = q.cellBorderColor,
          K = q._89o,
          p = q._90o;
        if (o)
          if (en(k, t.x, t.y, t.width, t.height, o), Ap(k, o, q.depth, t), c)
            for (f = 0; K > f; f++)
              for (D = 0; p > D; D++) t = l.getCellRect(f, D), t && Ap(k, o, c, t);
          else if (B) {
          for (k.beginPath(), f = 0; K > f; f++)
            for (D = 0; p > D; D++) t = l.getCellRect(f, D), t && k.rect(t.x, t.y, t.width, t.height);
          k.strokeStyle = B, k.lineWidth = 1, k.stroke()
        }
        if ("h" === Z)
          for (f = 0; K > f; f++) t = rr(l.getCellRect(f, 0), l.getCellRect(f, p - 1)), fn(t, a), In(k, i, t.x, t.y, t.width, t.height, U);
        else if ("v" === Z)
          for (D = 0; p > D; D++) t = rr(l.getCellRect(0, D), l.getCellRect(K - 1, D)), fn(t, a), In(k, i, t.x, t.y, t.width, t.height, U);
        V._39O(k, V._83o)
      }
    });
    var sb = Vd.Interactor = function (t) {
      this.gv = this._graphView = t
    };
    Pm("Interactor", d, {
      ms_listener: 1,
      getView: function () {
        return this.gv.getView()
      }, setUp: function () {
        this.addListeners()
      }, tearDown: function () {
        this.removeListeners(), this.clear()
      }, clear: function () {}, fi: function (q) {
        this.gv.fi(q)
      }, setCursor: function (d) {
        h || (this.getView().style.cursor = d)
      }, startDragging: function (L) {
        var A = this;
        A._lastClientPoint = Dr(L), A._lastLogicalPoint = A.gv.lp(L), sp(A, L)
      }, clearDragging: function () {
        var l = this;
        l._lastClientPoint = l._lastLogicalPoint = l._logicalPoint = V
      }, autoScroll: function (g) {
        return this.gv.autoScroll(g, this._lastClientPoint)
      }
    });
    var dd = Vd.DefaultInteractor = function (m) {
      gr(dd, this, [m])
    };
    Pm("DefaultInteractor", sb, {
      handle_mousedown: function (X) {
        gk(X);
        var G = this,
          s = G.gv,
          n = s.getDataAt(X);
        s.setFocus(X) && !s._editing && (Rq(X) ? s.handleDoubleClick(X, n) : s.handleClick(X, n), s.isPannable() && !n && co(X) && !$g(X) && (G._tx = s.tx(), G._ty = s.ty(), G.startDragging(X)))
      }, handleWindowMouseUp: function (p) {
        var B = this,
          w = B.gv;
        w._panning && (delete w._panning, w.onPanEnded(), B.fi({
          kind: "endPan",
          event: p
        })), delete B._tx, delete B._ty, B.clearDragging()
      }, handle_mousemove: function (z) {
        var l = this,
          V = l.gv;
        l._hoverTimer && (u(l._hoverTimer), delete l._hoverTimer), l._hoverTimer = w(function () {
          l.fi({
            kind: "hover",
            event: z
          }), u(l._hoverTimer), delete l._hoverTimer
        }, V.getHoverDelay() || 800)
      }, handle_touchmove: function (u) {
        this.handle_mousemove(u)
      }, handleWindowMouseMove: function (w) {
        var H = this,
          W = H.gv,
          L = H._lastClientPoint;
        H.fi({
          kind: W._panning ? "betweenPan" : "beginPan",
          event: w
        }), W._panning = 1, W.setTranslate(H._tx + w.clientX - L.x, H._ty + w.clientY - L.y)
      }, handle_mousewheel: function (M) {
        this.gv.handleScroll(M, M.wheelDelta)
      }, handle_DOMMouseScroll: function (H) {
        2 === H.axis && this.gv.handleScroll(H, -H.detail)
      }, handle_keydown: function (P) {
        this.gv.handleKeyDown(P)
      }
    });
    var Gj = Vd.SelectInteractor = function (t) {
      gr(Gj, this, [t])
    };
    Pm("SelectInteractor", sb, {
      _42: function () {
        var X = this,
          e = X.gv,
          l = e.getZoom(),
          n = X.mark,
          O = X.div;
        O || (O = X.div = Jd(), ni(X.getView(), O));
        var k = {};
        k.x = n.x * l + e.tx(), k.y = n.y * l + e.ty(), k.width = n.width * l, k.height = n.height * l, ke(O, k), this.intersects() ? (O.style.border = "", O.style.background = e.getRectSelectBackground()) : (O.style.background = "", O.style.border = "1px solid " + e.getRectSelectBorderColor())
      }, handle_mousedown: function (T) {
        var N = this,
          H = N.gv;
        if (N._57I = V, !H._editing) {
          var p = H.getDataAt(T),
            o = H.sm();
          p ? $g(T) ? o.co(p) ? o.rs(p) : o.as(p) : o.co(p) || o.ss(p) : $g(T) || !H.isPannable() ? co(T) && ($g(T) || o.cs(), H.isRectSelectable() && (N.startDragging(T), H._77O = 1)) : N._57I = Dr(T)
        }
      }, handle_mouseup: function (e) {
        var Z = this,
          d = Z._57I;
        d && (Pq(d, Dr(e)) <= 1 && Z.gv.sm().cs(), Z._57I = V)
      }, handleWindowMouseUp: function (I) {
        this.clear(I)
      }, handleWindowMouseMove: function (j) {
        var I = this,
          l = I.gv;
        I._logicalPoint = l.lp(j), I.mark ? (I.fi({
          kind: "betweenRectSelect",
          event: j
        }), I.autoScroll(j), I.redraw()) : I.fi({
          kind: "beginRectSelect",
          event: j
        }), I.mark = ik(I._lastLogicalPoint, I._logicalPoint), I.redraw()
      }, intersects: function () {
        var U = this,
          W = U._lastLogicalPoint,
          k = U._logicalPoint;
        return W.x > k.x || W.y > k.y
      }, clear: function (n) {
        var r = this,
          A = r.gv,
          w = r.mark;
        if (r._57I = V, r._lastLogicalPoint) {
          if (w) {
            if (0 !== w.width && 0 !== w.height) {
              var h = A.getDatasInRect(w, r.intersects());
              if (!h.isEmpty()) {
                var o = A.sm(),
                  Y = o.toSelection();
                h.each(function (j) {
                  o.co(j) ? Y.remove(j) : Y.add(j)
                }), o.ss(Y)
              }
            }
            Wj(r.div), delete r.div, delete r.mark, r.redraw(), r.fi({
              kind: "endRectSelect",
              event: n
            }), A.onRectSelectEnded()
          }
          r.clearDragging(), delete A._77O
        }
      }, redraw: function () {
        var K = this;
        K._draw || (K._draw = 1, w(function () {
          K.mark && K._42(), delete K._draw
        }, 16))
      }
    });
    var Gq = Vd.MoveInteractor = function (a) {
      gr(Gq, this, [a])
    };
    Pm("MoveInteractor", sb, {
      handle_mousedown: function (t) {
        var U = this,
          F = U.gv;
        if (co(t) && !F._editing) {
          var p = F.getSelectedDataAt(t);
          p ? (U._data = p, F.handleMouseDown && F.handleMouseDown(t, p), U.startDragging(t), F.isMovable(p) && (F._moving = 1)) : F._focusData = V
        }
      }, handleWindowMouseUp: function (e) {
        var t = this,
          Z = t.gv;
        Z.handleMouseUp && Z.handleMouseUp(e, t._data), t.clear(e)
      }, handleWindowMouseMove: function (t) {
        var y = this,
          h = y.gv,
          T = y._data,
          F = h.getDataModel(),
          m = F.getHistoryManager();
        if ((!h._93O || !h._93O(t, T)) && h._moving) {
          var W = y._logicalPoint ? "betweenMove" : "beginMove",
            L = {
              kind: W,
              event: t
            },
            c = y._logicalPoint = h.lp(t);
          m && "beginMove" === W && m.beginInteraction();
          var D = c.x - y._lastLogicalPoint.x,
            s = c.y - y._lastLogicalPoint.y,
            R = h.getMoveMode(t, T);
          R && ("x" === R ? s = 0 : "y" === R ? D = 0 : "xy" !== R && (D = s = 0)), h.moveSelection(D, s), y._lastLogicalPoint = c, y.autoScroll(t), y.fi(L)
        }
      }, clear: function (I) {
        var w = this,
          M = w.gv,
          F = M.getDataModel(),
          z = F.getHistoryManager();
        w._lastLogicalPoint && (w._lastLogicalPoint = w._data = M._moving = V, w._logicalPoint && (w.fi({
          kind: "endMove",
          event: I
        }), M.onMoveEnded(), z && z.endInteraction()), w.clearDragging())
      }
    });
    var Oj = Vd.EditInteractor = function (b) {
      gr(Oj, this, [b])
    };
    Pm("EditInteractor", sb, {
      ms_edit: 1,
      setUp: function () {
        var Q = this;
        Oj.superClass.setUp.call(Q), h || Q.gv.setEditInteractor(Q)
      }, tearDown: function () {
        Oj.superClass.tearDown.call(this), h || this.gv.setEditInteractor(V)
      }, clear: function () {
        var j = this,
          r = j.gv;
        r._editing && (r._editing = j._77I = j._node = j._edge = j._shape = j._rect = j._89I = j._index = V, j.clearDragging(), j.setCursor(q))
      }, handle_mousedown: function (a) {
        var l = this,
          G = l.gv.dm(),
          P = G.getHistoryManager(),
          F = l._index,
          B = l._node,
          Z = l._shape,
          J = l._edge,
          I = l._77I,
          _ = l._89I;
        co(a) && l.gv._editing && (B && _ ? (l._rect = B.getRect(), l.startDragging(a), P && P.beginInteraction(), l.fi({
          kind: "beginEditRect",
          event: a,
          data: B,
          direction: _
        })) : Z && F >= 0 ? (l.startDragging(a), P && P.beginInteraction(), l.fi({
          kind: "beginEditPoint",
          event: a,
          data: Z,
          index: F
        })) : J && F >= 0 ? (l.startDragging(a), P && P.beginInteraction(), l.fi({
          kind: "beginEditPoint",
          event: a,
          data: J,
          index: F
        })) : I && (l.startDragging(a), P && P.beginInteraction(), l.fi({
          kind: "beginEditRotation",
          event: a,
          data: I
        })))
      }, handleWindowMouseUp: function (V) {
        this._46O(V), this.clear()
      }, handleWindowMouseMove: function ($) {
        this._78I($)
      }, handle_mousemove: function (y) {
        if (!qq) {
          var j = this,
            l = j.gv;
          j._79I(y, l.getSelectedDataAt(y)) ? l._editing = 1 : j.clear()
        }
      }
    });
    var gl = Vd.TouchInteractor = function (L, q) {
      q = q || {}, q.selectable === b && (q.selectable = !0), q.movable === b && (q.movable = !0), q.pannable === b && (q.pannable = !0), q.pinchable === b && (q.pinchable = !0), q.editable === b && (q.editable = !0), this.params = q, gr(gl, this, [L])
    };
    Pm("TouchInteractor", sb, {
      ms_edit: 1,
      setUp: function () {
        var d = this;
        gl.superClass.setUp.call(d), h && d.params.editable && d.gv.setEditInteractor(d)
      }, tearDown: function () {
        var g = this;
        gl.superClass.tearDown.call(g), h && g.params.editable && g.gv.setEditInteractor(V)
      }, clear: function (y) {
        var j = this,
          b = j.gv,
          v = b.dm().getHistoryManager();
        b._moving && (j.fi({
          kind: "endMove",
          event: y
        }), delete b._moving, b.onMoveEnded(), v && v.endInteraction()), b._panning && (j.fi({
          kind: "endPan",
          event: y
        }), delete b._panning, b.onPanEnded()), b._pinching && (j.fi({
          kind: "endPinch",
          event: y
        }), delete b._pinching, b.onPinchEnded()), b._editing && (j._46O(y), j._77I = j._node = j._edge = j._shape = j._rect = j._89I = j._index = b._editing = V), j._moving = j._panning = j._pinching = j._editing = j._57I = j._data = j._beginHistory = V, j.clearDragging()
      }, handle_touchstart: function (H) {
        var I = this;
        if (!I.gv._editing) {
          gk(H), I._57I = V;
          var m = I.params,
            $ = I.gv,
            G = $.sm(),
            j = $.getDataAt(H),
            r = tr(H);
          if (1 === r) Rq(H) ? $.handleDoubleClick(H, j) : ($.handleClick(H, j), j && ($.handleMouseDown && $.handleMouseDown(H, j), I._data = j)), m.selectable || (j = V), j ? (G.co(j) || G.ss(j), m.editable && $.isEditable(j) && I._79I(H, j, !0) ? (I._editing = 1, I.startDragging(H)) : m.movable && $.isMovable(j) && (I._moving = 1, I.startDragging(H))) : (I._57I = Dr(H), m.pannable && $.isPannable() && (I._panning = 1, I.startDragging(H), I._translate = {
            x: $.tx(),
            y: $.ty()
          }));
          else if (m.pinchable && 2 === r) {
            I._pinching = 1, I.startDragging(H);
            var w = $.getView(),
              s = $.getZoom(),
              E = w.getBoundingClientRect(),
              F = H.touches[0],
              v = H.touches[1],
              y = {
                x: (F.clientX + v.clientX) / 2 - E.left,
                y: (F.clientY + v.clientY) / 2 - E.top
              };
            y.x -= $.tx(), y.y -= $.ty(), y.x /= s, y.y /= s, I._p = y, I._d = dh(H)
          }
        }
      }, handle_touchend: function (r) {
        var G = this,
          b = G.gv,
          A = G._57I,
          L = G._data;
        A && (Pq(A, Dr(r)) <= 1 && b.sm().cs(), G._57I = V), L && b.handleMouseUp && b.handleMouseUp(r, L)
      }, handleWindowTouchEnd: function (y) {
        this.clear(y)
      }, handleWindowTouchMove: function (E) {
        var D = this,
          t = D.gv,
          m = t.dm().getHistoryManager(),
          x = tr(E);
        if (1 === x) {
          if (D._editing && (m && !D._beginHistory && (D._beginHistory = 1, m.beginInteraction()), t._editing = 1, D._78I(E)), D._moving) m && !D._beginHistory && (D._beginHistory = 1, m.beginInteraction()), D.handleMove(E);
          else if (D._panning) {
            var B = Dr(E);
            t.setTranslate(D._translate.x + B.x - D._lastClientPoint.x, D._translate.y + B.y - D._lastClientPoint.y), D.fi({
              kind: t._panning ? "betweenPan" : "beginPan",
              event: E
            }), t._panning = 1
          }
        } else if (2 === x && D._pinching) {
          var w = dh(E);
          t.handlePinch(D._p, w, D._d), D._d = w, D.fi({
            kind: t._pinching ? "betweenPinch" : "beginPinch",
            event: E
          }), t._pinching = 1
        }
      }, handleMove: function (F) {
        var Z = this,
          H = Z.gv,
          g = H.lp(F);
        H._93O && H._93O(F, Z._data) || (H.moveSelection(g.x - Z._lastLogicalPoint.x, g.y - Z._lastLogicalPoint.y), Z._lastLogicalPoint = g, Z.autoScroll(F), Z.fi({
          kind: H._moving ? "betweenMove" : "beginMove",
          event: F
        }), H._moving = 1)
      }
    });
    var gp = "directional",
      Bq = "point",
      bn = "spot",
      Kr = "light.color";
    eq(H, {
      graph3dViewAttributes: V,
      graph3dViewFirstPersonMode: !1,
      graph3dViewMouseRoamable: !0,
      graph3dViewMoveStep: 15,
      graph3dViewRotateStep: S / 60,
      graph3dViewPannable: !0,
      graph3dViewRotatable: !0,
      graph3dViewWalkable: !0,
      graph3dViewResettable: !0,
      graph3dViewZoomable: !0,
      graph3dViewRectSelectable: !0,
      graph3dViewRectSelectBackground: Zf,
      graph3dViewGridVisible: !1,
      graph3dViewGridSize: 50,
      graph3dViewGridGap: 50,
      graph3dViewGridColor: [.4, .75, .85, 1],
      graph3dViewOriginAxisVisible: !1,
      graph3dViewCenterAxisVisible: !1,
      graph3dViewAxisXColor: [1, 0, 0, 1],
      graph3dViewAxisYColor: [0, 1, 0, 1],
      graph3dViewAxisZColor: [0, 0, 1, 1],
      graph3dViewEditSizeColor: [1, 1, 0, 1],
      graph3dViewOrtho: !1,
      graph3dViewOrthoWidth: 2e3,
      graph3dViewFovy: S / 4,
      graph3dViewNear: 10,
      graph3dViewFar: 1e4,
      graph3dViewEye: [0, 300, 1e3],
      graph3dViewCenter: [0, 0, 0],
      graph3dViewUp: [0, 1, -1e-7],
      graph3dViewHeadlightRange: 0,
      graph3dViewHeadlightColor: [1, 1, 1, 1],
      graph3dViewHeadlightIntensity: 1,
      graph3dViewHeadlightDisabled: !1,
      graph3dViewFogDisabled: !0,
      graph3dViewFogColor: "white",
      graph3dViewFogNear: 1,
      graph3dViewFogFar: 2e3,
      graph3dViewDashDisabled: !0,
      graph3dViewBatchBlendDisabled: !0,
      graph3dViewBatchBrightnessDisabled: !0,
      graph3dViewBatchColorDisabled: !1,
      setShape3dModel: function (D, U) {
        Tc[D] = U
      }, getShape3dModel: function (l) {
        return Tc[l]
      }, createMatrix: function (S, X) {
        qp(S) || (S = [S]);
        for (var $ = S.length - 1; $ >= 0; $--) {
          var A = S[$];
          X = sk(A.mat, A.s3, A.r3, A.rotationMode, A.t3, X)
        }
        return X
      }, transformVec: function (I, _) {
        return ac(I, _)
      }, createBoxModel: function () {
        return {
          vs: Vj,
          ns: Yf,
          uv: vk,
          is: Xm
        }
      }, createRoundRectModel: function ($, W) {
        return Mk.roundRect($, W)
      }, createStarModel: function (t, M) {
        return Mk.star(t, M)
      }, createRectModel: function (P, d) {
        return Mk.rect(P, d)
      }, createTriangleModel: function (w, i) {
        return Mk.triangle(w, i)
      }, createRightTriangleModel: function (h, k) {
        return Mk.rightTriangle(h, k)
      }, createParallelogramModel: function (I, c) {
        return Mk.parallelogram(I, c)
      }, createTrapezoidModel: function (K, R) {
        return Mk.trapezoid(K, R)
      }, createSmoothSphereModel: function (u, a, I, P, o, J, B) {
        return Ck(new Ti(u, a, I, P, o, J, B))
      }, createSphereModel: function (a, N, y, G, j, I) {
        return a ? ri(a, N, y, G, j, I) : H.createSmoothSphereModel()
      }, createSmoothConeModel: function (S, R, e, Q, r) {
        return Ni(S, R, e, Q, r)
      }, createConeModel: function (f, i, W, D, F, I) {
        return f ? qi(f, i, W, D, F, I) : Ni(I)
      }, createSmoothCylinderModel: function (l, p, j, L, T, q, d, M) {
        return Ck(new ld(l, p, j, L, T, q, d, M))
      }, createCylinderModel: function (C, Z, j, w, E, e, U) {
        return C ? uh(C, Z, j, w, E, e, U) : go(e, U)
      }, createSmoothTorusModel: function (C, j, V, b, v, K) {
        return Ck(new Nr(C, j, V, b, v, K))
      }, createTorusModel: function (q, Z, x, G, i, Q, v) {
        return q ? Sd(q, Z, x, G, i, Q, v) : od(Q, v)
      }, createExtrusionModel: function (j, M, K, Z, p, A, g, O) {
        return yo(j, M, K, Z, p, A, g, O)
      }, createSmoothRingModel: function (o, t, B, L, b, C) {
        for (var P = [], v = 0; v < o.length - 1; v += 2) P.push({
          x: o[v],
          y: o[v + 1]
        });
        for (o = Wo(P, t, B)[0], P = [], v = 0; v < o.length; v++) {
          var p = o[v];
          P.push(new fj(p.x, 0, p.y))
        }
        return Ck(new Jk(P, C, L, b))
      }, createRingModel: function (G, q, J, P, x, b, D, t, Z, B) {
        for (var v = [], u = 0; u < G.length - 1; u += 2) v.push({
          x: G[u],
          y: G[u + 1]
        });
        b = b || H.shapeSide, D = D || 0, t = t || b;
        var g, C, Y, $, O, R, F, d, M, K, u, I, _, T, r, n, L, s, a = [],
          l = [],
          W = Z ? [] : V,
          m = Z ? [] : V,
          e = B ? [] : V,
          i = B ? [] : V,
          y = P ? [] : V,
          o = P ? [] : V,
          N = x ? [] : V,
          h = x ? [] : V,
          G = Wo(v, q, J),
          k = Io(G),
          E = 0,
          j = 2 * Math.PI / b;
        return G.forEach(function (p) {
          if (Y = p.length, Y > 1) {
            if ($ = p[0], P)
              for (R = $.x, d = $.y, u = D; t > u; u++) I = u + 1, _ = u * j, T = I * j, r = X(_), n = A(_), L = X(T), s = A(T), y.push(r * R, d, -n * R, L * R, d, -s * R, 0, d, 0), o.push(.5 - .5 * r, .5 - .5 * n, .5 - .5 * L, .5 - .5 * s, .5, .5);
            for (K = 0; Y > K; K++) {
              for (O = p[K], R = $.x, F = O.x, d = $.y, M = O.y, g = E / k, E += Pq($, O), C = E / k, u = D; t > u; u++) I = u + 1, _ = u * j, T = I * j, r = X(_), n = A(_), L = X(T), s = A(T), a.push(r * F, M, -n * F, L * F, M, -s * F, r * R, d, -n * R, L * F, M, -s * F, L * R, d, -s * R, r * R, d, -n * R), l.push(u / b, C, I / b, C, u / b, g, I / b, C, I / b, g, u / b, g), Z && u === D && (W.push(0, d, 0, 0, M, 0, r * F, M, -n * F, r * F, M, -n * F, r * R, d, -n * R, 0, d, 0), m.push(0, .5 - d, 0, .5 - M, 2 * F, .5 - M, 2 * F, .5 - M, 2 * R, .5 - d, 0, .5 - d)), B && I === t && (e.push(0, d, 0, L * F, M, -s * F, 0, M, 0, L * F, M, -s * F, 0, d, 0, L * R, d, -s * R), i.push(1, .5 - d, 1 - 2 * F, .5 - M, 1, .5 - M, 1 - 2 * F, .5 - M, 1, .5 - d, 1 - 2 * R, .5 - d));
              $ = O
            }
            if (x)
              for (R = $.x, d = $.y, u = D; t > u; u++) I = u + 1, _ = u * j, T = I * j, r = X(_), n = A(_), L = X(T), s = A(T), N.push(L * R, d, -s * R, r * R, d, -n * R, 0, d, 0), h.push(.5 - .5 * L, .5 + .5 * s, .5 - .5 * r, .5 + .5 * n, .5, .5)
          }
        }), {
          vs: a,
          uv: l,
          bottom_vs: N,
          bottom_uv: h,
          top_vs: y,
          top_uv: o,
          from_vs: W,
          from_uv: m,
          to_vs: e,
          to_uv: i
        }
      }
    }, !0), eq(t, {
      "3d.move.mode": b,
      "3d.selectable": !0,
      "3d.visible": !0,
      "3d.movable": !0,
      "3d.editable": !0,
      "shape.border.gradient.color": b,
      "edge.gradient.color": b,
      "edge.source.t3": b,
      "edge.target.t3": b,
      "light.type": Bq,
      "light.center": [0, 0, 0],
      "light.color": [1, 1, 1, 1],
      "light.disabled": !1,
      "light.angle": S / 4,
      "light.range": 0,
      "light.exponent": 1,
      "light.intensity": 1,
      "wf.visible": !1,
      "wf.width": 1,
      "wf.color": hi,
      "wf.short": !1,
      "wf.mat": b,
      batch: b,
      "transparent.mask": !1,
      brightness: b,
      "select.brightness": .7,
      "repeat.uv.length": b,
      "label.face": fk,
      "label.t3": b,
      "label.r3": b,
      "label.texture.scale": 2,
      "label.rotationMode": zr,
      "label.light": !1,
      "label.blend": b,
      "label.reverse.flip": !1,
      "label.reverse.color": Mo,
      "label.reverse.cull": !1,
      "label.transparent": !1,
      "label.autorotate": !1,
      "label2.face": fk,
      "label2.t3": b,
      "label2.r3": b,
      "label2.texture.scale": 2,
      "label2.rotationMode": zr,
      "label2.light": !1,
      "label2.blend": b,
      "label2.reverse.flip": !1,
      "label2.reverse.color": Mo,
      "label2.reverse.cull": !1,
      "label2.transparent": !1,
      "label2.autorotate": !1,
      "note.face": fk,
      "note.t3": b,
      "note.r3": b,
      "note.texture.scale": 2,
      "note.rotationMode": zr,
      "note.light": !1,
      "note.blend": b,
      "note.reverse.flip": !1,
      "note.reverse.color": Mo,
      "note.reverse.cull": !1,
      "note.transparent": !1,
      "note.autorotate": !1,
      "note2.face": fk,
      "note2.t3": b,
      "note2.r3": b,
      "note2.texture.scale": 2,
      "note2.rotationMode": zr,
      "note2.light": !1,
      "note2.blend": b,
      "note2.reverse.flip": !1,
      "note2.reverse.color": Mo,
      "note2.reverse.cull": !1,
      "note2.transparent": !1,
      "note2.autorotate": !1,
      shape3d: b,
      "shape3d.color": Tq,
      "shape3d.top.color": b,
      "shape3d.bottom.color": b,
      "shape3d.from.color": b,
      "shape3d.to.color": b,
      "shape3d.image": b,
      "shape3d.top.image": b,
      "shape3d.bottom.image": b,
      "shape3d.from.image": b,
      "shape3d.to.image": b,
      "shape3d.light": !0,
      "shape3d.side": 0,
      "shape3d.side.from": b,
      "shape3d.side.to": b,
      "shape3d.visible": !0,
      "shape3d.from.visible": !0,
      "shape3d.to.visible": !0,
      "shape3d.top.visible": !0,
      "shape3d.bottom.visible": !0,
      "shape3d.torus.radius": .17,
      "shape3d.resolution": 0,
      "shape3d.blend": b,
      "shape3d.opacity": b,
      "shape3d.reverse.flip": !1,
      "shape3d.reverse.color": Mo,
      "shape3d.reverse.cull": !1,
      "shape3d.transparent": !1,
      "shape3d.uv.offset": b,
      "shape3d.uv.scale": b,
      "shape3d.top.uv.offset": b,
      "shape3d.top.uv.scale": b,
      "shape3d.bottom.uv.offset": b,
      "shape3d.bottom.uv.scale": b,
      "shape3d.from.uv.offset": b,
      "shape3d.from.uv.scale": b,
      "shape3d.to.uv.offset": b,
      "shape3d.to.uv.scale": b,
      "shape3d.top.cap": b,
      "shape3d.bottom.cap": b,
      "shape3d.start.angle": 0,
      "shape3d.discard.selectable": !0,
      "shape3d.top.discard.selectable": !0,
      "shape3d.bottom.discard.selectable": !0,
      "shape3d.from.discard.selectable": !0,
      "shape3d.to.discard.selectable": !0,
      "shape3d.scaleable": !0,
      "all.light": !0,
      "all.visible": !0,
      "all.color": Tq,
      "all.image": b,
      "all.blend": b,
      "all.opacity": b,
      "all.reverse.flip": !1,
      "all.reverse.color": Mo,
      "all.reverse.cull": !1,
      "all.transparent": !1,
      "all.uv": b,
      "all.uv.offset": b,
      "all.uv.scale": b,
      "all.discard.selectable": !0,
      mat: b,
      "left.mat": b,
      "right.mat": b,
      "top.mat": b,
      "bottom.mat": b,
      "front.mat": b,
      "back.mat": b
    }, !0);
    var hj, _m = !1,
      al = [0, 0, 0, 1 / 255],
      kg = {
        left: [1 / 255, 0, 0, 1],
        right: [2 / 255, 0, 0, 1],
        top: [3 / 255, 0, 0, 1],
        bottom: [4 / 255, 0, 0, 1],
        front: [5 / 255, 0, 0, 1],
        back: [6 / 255, 0, 0, 1],
        m: {
          1: pg,
          2: Hi,
          3: Ud,
          4: Hb,
          5: fk,
          6: Xr
        }
      },
      Lo = function (U, z, v, M) {
        if (z.getFaceVisible(U, v)) {
          Tf(z, Be(U, z.getFaceMat(U, v) || z.getMat(U)));
          var D = z._26I;
          z.getFaceReverseCull(U, v) ? D.enable(D.CULL_FACE) : D.disable(D.CULL_FACE), Hc(D, z._prg.uFixPickReverseColor, kg[v]), gm(D), lp(D, M, 6), Yp(D), Mr(z)
        }
      },
      Ge = function (d) {
        return d instanceof Rd
      },
      Gn = function (d) {
        return [d.x, d.e || 0, d.y]
      },
      ec = function (u, J, b) {
        for (var J = wj(J), Z = J[0], x = J[1], d = J[2]; b--;) u.push(Z, x, d)
      },
      yf = function (z, b, h) {
        for (var b = wj(b), K = b[0], m = b[1], E = b[2], S = b[3]; h--;) z.push(K, m, E, S)
      },
      _e = function (S, q, W) {
        if (q)
          for (var G, Q, F, b = q[0], u = q[1], p = q[2], Z = q[4], d = q[5], o = q[6], T = q[8], R = q[9], X = q[10], n = q[12], v = q[13], h = q[14], Y = W.length, c = 0, c = 0; Y > c; c += 3) G = W[c], Q = W[c + 1], F = W[c + 2], S.push(b * G + Z * Q + T * F + n, u * G + d * Q + R * F + v, p * G + o * Q + X * F + h);
        else wh(S, W)
      },
      _p = function (b, O) {
        var G = O.s("light.intensity"),
          L = wj(O.s(Kr)),
          X = L[0],
          $ = L[1],
          M = L[2];
        1 !== G && (X *= G, $ *= G, M *= G), b.push(X, $, M, O.s("light.disabled") ? 1 : 0)
      },
      nb = function (t, A, l) {
        Hc(A, l.uHeadlightRange, t._headlightRange);
        var u = t._headlightIntensity,
          n = wj(t._headlightColor);
        1 !== u && (n = [n[0] * u, n[1] * u, n[2] * u]), Hc(A, l.uHeadlightColor, [n[0], n[1], n[2], t._headlightDisabled ? 1 : 0]);
        var c = t._59O,
          V = t._spots,
          q = t._dirs;
        if (c.length) {
          var r = [],
            w = [],
            m = [];
          c.forEach(function (z) {
            _p(r, z), wh(w, z.p3()), m.push(z.s("light.range"))
          }), A.uniform4fv(l.uPointColor, r), A.uniform1fv(l.uPointRange, m), A.uniform3fv(l.uPointPosition, w)
        }
        if (V.length) {
          var R = [],
            Y = [],
            _ = [],
            H = [],
            k = [],
            g = [];
          V.forEach(function (A) {
            _p(R, A), wh(Y, A.p3()), wh(_, A.s("light.center")), H.push(A.s("light.range")), k.push(X(A.s("light.angle") / 2)), g.push(A.s("light.exponent"))
          }), A.uniform4fv(l.uSpotColor, R), A.uniform1fv(l.uSpotRange, H), A.uniform1fv(l.uSpotAngle, k), A.uniform1fv(l.uSpotExponent, g), A.uniform3fv(l.uSpotPosition, Y), A.uniform3fv(l.uSpotCenter, _)
        }
        if (q.length) {
          var S = [],
            J = [];
          q.forEach(function (p) {
            _p(S, p), wh(J, p.p3())
          }), A.uniform4fv(l.uDirColor, S), A.uniform3fv(l.uDirPosition, J)
        }
      },
      db = function (J) {
        return J > 0 && 0 === (J - 1 & J)
      },
      Yg = function (U) {
        return U = v(0, o(S, U)), U = v(us, o(S - us, U))
      },
      Rb = function () {
        return .05 + a() / 2
      },
      Rl = function (Q, b, B, s) {
        var r, O = Q.getEye();
        return Q.isOrtho() ? (r = As(Q.getCenter(), O), r[0] += s[0], r[1] += s[1], r[2] += s[2]) : r = O, aj(b, B, s, r)
      },
      aj = function (E, M, D, Z) {
        var d = dj(E, M),
          O = As(Z, D, !0),
          b = dj(O, M);
        if (G(b) < us) return V;
        var t = (d - dj(D, M)) / b;
        return [D[0] + O[0] * t, D[1] + O[1] * t, D[2] + O[2] * t]
      },
      zc = function (x, v) {
        return {
          x: 2 * x.x - v.x,
          y: 2 * x.y - v.y
        }
      },
      dk = function (j, P, U, i) {
        var v, u;
        if (!j) return v = f(P.y - U.y, U.x - P.x), {
          x: P.x + i * A(v),
          y: P.y + i * X(v)
        };
        if (!U) return v = f(j.y - P.y, P.x - j.x), {
          x: P.x + i * A(v),
          y: P.y + i * X(v)
        };
        var n = As([j.x, j.y, 0], [P.x, P.y, 0], !0),
          s = As([U.x, U.y, 0], [P.x, P.y, 0], !0),
          E = -(n[0] + s[0]) / 2,
          F = -(n[1] + s[1]) / 2,
          w = C(E * E + F * F);
        return us > w ? (v = f(j.y - P.y, P.x - j.x), {
          x: P.x + i * A(v),
          y: P.y + i * X(v)
        }) : (v = z(dj(n, s)) / 2, u = n[1] * s[0] - n[0] * s[1] > 0 ? -1 : 1, E /= w, F /= w, w = i / A(v), {
          x: P.x + u * w * E,
          y: P.y + u * w * F
        })
      },
      Ik = function (i) {
        var $ = i[1],
          j = i[2],
          f = i[3],
          D = i[6],
          v = i[7],
          Q = i[11];
        i[1] = i[4], i[2] = i[8], i[3] = i[12], i[4] = $, i[6] = i[9], i[7] = i[13], i[8] = j, i[9] = D, i[11] = i[14], i[12] = f, i[13] = v, i[14] = Q
      },
      ql = function (P) {
        var U = P[0],
          N = P[1],
          E = P[2],
          $ = P[3],
          p = P[4],
          F = P[5],
          d = P[6],
          J = P[7],
          C = P[8],
          _ = P[9],
          h = P[10],
          G = P[11],
          t = P[12],
          m = P[13],
          R = P[14],
          y = P[15],
          x = U * F - N * p,
          K = U * d - E * p,
          H = U * J - $ * p,
          l = N * d - E * F,
          b = N * J - $ * F,
          B = E * J - $ * d,
          z = C * m - _ * t,
          I = C * R - h * t,
          n = C * y - G * t,
          Z = _ * R - h * m,
          L = _ * y - G * m,
          M = h * y - G * R,
          a = x * M - K * L + H * Z + l * n - b * I + B * z;
        return a ? (a = 1 / a, P[0] = (F * M - d * L + J * Z) * a, P[1] = (E * L - N * M - $ * Z) * a, P[2] = (m * B - R * b + y * l) * a, P[3] = (h * b - _ * B - G * l) * a, P[4] = (d * n - p * M - J * I) * a, P[5] = (U * M - E * n + $ * I) * a, P[6] = (R * H - t * B - y * K) * a, P[7] = (C * B - h * H + G * K) * a, P[8] = (p * L - F * n + J * z) * a, P[9] = (N * n - U * L - $ * z) * a, P[10] = (t * b - m * H + y * x) * a, P[11] = (_ * H - C * b - G * x) * a, P[12] = (F * I - p * Z - d * z) * a, P[13] = (U * Z - N * I + E * z) * a, P[14] = (m * K - t * l - R * x) * a, P[15] = (C * l - _ * K + h * x) * a, void 0) : V
      },
      Lk = function (d, p) {
        if (p) {
          var I = p[0],
            z = p[1],
            l = p[2];
          d[12] = d[0] * I + d[4] * z + d[8] * l + d[12], d[13] = d[1] * I + d[5] * z + d[9] * l + d[13], d[14] = d[2] * I + d[6] * z + d[10] * l + d[14], d[15] = d[3] * I + d[7] * z + d[11] * l + d[15]
        }
      },
      Xb = function (I, $) {
        if ($) {
          var Y = $[0],
            j = $[1],
            V = $[2];
          I[0] = I[0] * Y, I[1] = I[1] * Y, I[2] = I[2] * Y, I[3] = I[3] * Y, I[4] = I[4] * j, I[5] = I[5] * j, I[6] = I[6] * j, I[7] = I[7] * j, I[8] = I[8] * V, I[9] = I[9] * V, I[10] = I[10] * V, I[11] = I[11] * V
        }
      },
      eh = function (q, W, E) {
        var O = W[0],
          $ = W[1],
          k = W[2],
          o = W[3],
          N = W[4],
          s = W[5],
          X = W[6],
          n = W[7],
          y = W[8],
          V = W[9],
          Y = W[10],
          K = W[11],
          r = W[12],
          Q = W[13],
          c = W[14],
          h = W[15],
          v = E[0],
          Z = E[1],
          w = E[2],
          J = E[3];
        return q[0] = v * O + Z * N + w * y + J * r, q[1] = v * $ + Z * s + w * V + J * Q, q[2] = v * k + Z * X + w * Y + J * c, q[3] = v * o + Z * n + w * K + J * h, v = E[4], Z = E[5], w = E[6], J = E[7], q[4] = v * O + Z * N + w * y + J * r, q[5] = v * $ + Z * s + w * V + J * Q, q[6] = v * k + Z * X + w * Y + J * c, q[7] = v * o + Z * n + w * K + J * h, v = E[8], Z = E[9], w = E[10], J = E[11], q[8] = v * O + Z * N + w * y + J * r, q[9] = v * $ + Z * s + w * V + J * Q, q[10] = v * k + Z * X + w * Y + J * c, q[11] = v * o + Z * n + w * K + J * h, v = E[12], Z = E[13], w = E[14], J = E[15], q[12] = v * O + Z * N + w * y + J * r, q[13] = v * $ + Z * s + w * V + J * Q, q[14] = v * k + Z * X + w * Y + J * c, q[15] = v * o + Z * n + w * K + J * h, q
      },
      Ko = function (d, w, B, X) {
        var W, M, f, O, P, I, i, m, K, q, Y = w[0],
          $ = w[1],
          x = w[2],
          s = X[0],
          D = X[1],
          F = X[2],
          r = B[0],
          z = B[1],
          b = B[2];
        return G(Y - r) < us && G($ - z) < us && G(x - b) < us ? mf(d) : (i = Y - r, m = $ - z, K = x - b, q = 1 / C(i * i + m * m + K * K), i *= q, m *= q, K *= q, W = D * K - F * m, M = F * i - s * K, f = s * m - D * i, q = C(W * W + M * M + f * f), q ? (q = 1 / q, W *= q, M *= q, f *= q) : (W = 0, M = 0, f = 0), O = m * f - K * M, P = K * W - i * f, I = i * M - m * W, q = C(O * O + P * P + I * I), q ? (q = 1 / q, O *= q, P *= q, I *= q) : (O = 0, P = 0, I = 0), d[0] = W, d[1] = O, d[2] = i, d[3] = 0, d[4] = M, d[5] = P, d[6] = m, d[7] = 0, d[8] = f, d[9] = I, d[10] = K, d[11] = 0, d[12] = -(W * Y + M * $ + f * x), d[13] = -(O * Y + P * $ + I * x), d[14] = -(i * Y + m * $ + K * x), d[15] = 1, d)
      },
      Bm = function (q, f, R, U, h) {
        var _ = 1 / Z(f / 2),
          V = 1 / (U - h);
        return q[0] = _ / R, q[1] = 0, q[2] = 0, q[3] = 0, q[4] = 0, q[5] = _, q[6] = 0, q[7] = 0, q[8] = 0, q[9] = 0, q[10] = (h + U) * V, q[11] = -1, q[12] = 0, q[13] = 0, q[14] = 2 * h * U * V, q[15] = 0, q
      },
      Nf = function (D, H, j, P, O, C, A) {
        var B = 1 / (H - j),
          G = 1 / (P - O),
          Y = 1 / (C - A);
        return D[0] = -2 * B, D[1] = 0, D[2] = 0, D[3] = 0, D[4] = 0, D[5] = -2 * G, D[6] = 0, D[7] = 0, D[8] = 0, D[9] = 0, D[10] = 2 * Y, D[11] = 0, D[12] = (H + j) * B, D[13] = (O + P) * G, D[14] = (A + C) * Y, D[15] = 1, D
      },
      oq = function (I, Y) {
        var l = Y[0],
          H = Y[1],
          y = Y[2],
          M = Y[3],
          b = l * l + H * H + y * y + M * M,
          C = b ? 1 / b : 0;
        return I[0] = -l * C, I[1] = -H * C, I[2] = -y * C, I[3] = M * C, I
      },
      up = function (H, R) {
        var J = R[0] + R[5] + R[10],
          j = 0;
        return J > 0 ? (j = 2 * Math.sqrt(J + 1), H[3] = .25 * j, H[0] = (R[6] - R[9]) / j, H[1] = (R[8] - R[2]) / j, H[2] = (R[1] - R[4]) / j) : R[0] > R[5] & R[0] > R[10] ? (j = 2 * Math.sqrt(1 + R[0] - R[5] - R[10]), H[3] = (R[6] - R[9]) / j, H[0] = .25 * j, H[1] = (R[1] + R[4]) / j, H[2] = (R[8] + R[2]) / j) : R[5] > R[10] ? (j = 2 * Math.sqrt(1 + R[5] - R[0] - R[10]), H[3] = (R[8] - R[2]) / j, H[0] = (R[1] + R[4]) / j, H[1] = .25 * j, H[2] = (R[6] + R[9]) / j) : (j = 2 * Math.sqrt(1 + R[10] - R[0] - R[5]), H[3] = (R[1] - R[4]) / j, H[0] = (R[8] + R[2]) / j, H[1] = (R[6] + R[9]) / j, H[2] = .25 * j), H
      },
      Do = function (s, B, N) {
        var f = B[0],
          d = B[1],
          F = B[2],
          l = B[3],
          K = f + f,
          c = d + d,
          O = F + F,
          L = f * K,
          r = f * c,
          E = f * O,
          o = d * c,
          Q = d * O,
          U = F * O,
          t = l * K,
          y = l * c,
          R = l * O;
        return s[0] = 1 - (o + U), s[1] = r + R, s[2] = E - y, s[3] = 0, s[4] = r - R, s[5] = 1 - (L + U), s[6] = Q + t, s[7] = 0, s[8] = E + y, s[9] = Q - t, s[10] = 1 - (L + o), s[11] = 0, s[12] = N[0], s[13] = N[1], s[14] = N[2], s[15] = 1, s
      },
      Nh = function (y, R) {
        return Ko(R ? R : Up(), y._eye, y._center, y._up)
      },
      Zk = function (F) {
        var G = F.getAspect(),
          E = F._near,
          w = F._far,
          s = Up();
        if (F._ortho) {
          var S = F._orthoWidth / 2,
            t = S / G;
          Nf(s, -S, S, -t, t, E, w)
        } else Bm(s, F._fovy, G, E, w);
        return s
      },
      kc = function (t, X) {
        if (!t) return V;
        var B = 0,
          P = 1,
          G = 2,
          q = [],
          z = 0,
          v = t.length,
          o = v / 3;
        if (X) {
          for (; v > z; z++) q[z] = 0;
          for (z = 0; z < X.length; z += 3) {
            var f = [],
              n = [],
              J = [];
            f[B] = t[3 * X[z + 1] + B] - t[3 * X[z] + B], f[P] = t[3 * X[z + 1] + P] - t[3 * X[z] + P], f[G] = t[3 * X[z + 1] + G] - t[3 * X[z] + G], n[B] = t[3 * X[z + 2] + B] - t[3 * X[z + 1] + B], n[P] = t[3 * X[z + 2] + P] - t[3 * X[z + 1] + P], n[G] = t[3 * X[z + 2] + G] - t[3 * X[z + 1] + G], J[B] = f[P] * n[G] - f[G] * n[P], J[P] = f[G] * n[B] - f[B] * n[G], J[G] = f[B] * n[P] - f[P] * n[B];
            for (var r = 0; 3 > r; r++) q[3 * X[z + r] + B] += J[B], q[3 * X[z + r] + P] += J[P], q[3 * X[z + r] + G] += J[G]
          }
        } else
          for (z = 0; o > z; z += 3) {
            var f = [],
              n = [],
              J = [];
            f[B] = t[3 * (z + 1) + B] - t[3 * z + B], f[P] = t[3 * (z + 1) + P] - t[3 * z + P], f[G] = t[3 * (z + 1) + G] - t[3 * z + G], n[B] = t[3 * (z + 2) + B] - t[3 * (z + 1) + B], n[P] = t[3 * (z + 2) + P] - t[3 * (z + 1) + P], n[G] = t[3 * (z + 2) + G] - t[3 * (z + 1) + G], J[B] = f[P] * n[G] - f[G] * n[P], J[P] = f[G] * n[B] - f[B] * n[G], J[G] = f[B] * n[P] - f[P] * n[B];
            for (var r = 0; 3 > r; r++) q[3 * (z + r) + B] = J[B], q[3 * (z + r) + P] = J[P], q[3 * (z + r) + G] = J[G]
          }
        for (z = 0; v > z; z += 3) {
          var d = [];
          d[B] = q[z + B], d[P] = q[z + P], d[G] = q[z + G];
          var R = C(d[B] * d[B] + d[P] * d[P] + d[G] * d[G]);
          0 === R && (R = us), d[B] = d[B] / R, d[P] = d[P] / R, d[G] = d[G] / R, q[z + B] = d[B], q[z + P] = d[P], q[z + G] = d[G]
        }
        return new ko(q)
      },
      ce = function (D, x, N) {
        if (N || (N = D.createTexture()), x) {
          var s = D.TEXTURE_2D,
            $ = D.LINEAR,
            e = D.REPEAT,
            W = D.CLAMP_TO_EDGE,
            y = D.TEXTURE_MIN_FILTER;
          Tr(D, N), D.texImage2D(s, 0, D.RGBA, D.RGBA, D.UNSIGNED_BYTE, x), Lf(D, D.TEXTURE_MAG_FILTER, $), db(x.width) && db(x.height) ? (Lf(D, D.TEXTURE_WRAP_S, e), Lf(D, D.TEXTURE_WRAP_T, e), Lf(D, y, D.LINEAR_MIPMAP_LINEAR), D.generateMipmap(s)) : (Lf(D, D.TEXTURE_WRAP_S, W), Lf(D, D.TEXTURE_WRAP_T, W), Lf(D, y, $)), Tr(D, V)
        }
        return N
      },
      Ol = function (v, k) {
        var u = new Uint8Array(3);
        return k = k || v.createTexture(), Tr(v, k), Lf(v, v.TEXTURE_MIN_FILTER, v.LINEAR), v.texImage2D(v.TEXTURE_2D, 0, v.RGB, 1, 1, 0, v.RGB, v.UNSIGNED_BYTE, u), k
      },
      dl = function (R) {
        R._26I && R._prg && (R._26I.deleteProgram(R._prg), R._prg = V)
      },
      nn = function (J, G, X, g) {
        var j = J.createShader(X);
        return J.shaderSource(j, g), J.compileShader(j), J.attachShader(G, j), j
      },
      $d = function (h) {
        return h.createBuffer()
      },
      Tr = function (l, d) {
        l.bindTexture(l.TEXTURE_2D, d)
      },
      yg = function (h, X) {
        h.bindFramebuffer(h.FRAMEBUFFER, X)
      },
      Lf = function (i, K, l) {
        i.texParameteri(i.TEXTURE_2D, K, l)
      },
      gd = function (y, I) {
        if (I) {
          var I = wj(I);
          y.clearColor(I[0], I[1], I[2], I[3])
        }
      },
      Ri = function (c, U) {
        Hc(c, U.uFix, !0), Lm(c, U.aNormal)
      },
      gi = function (W, S) {
        Hc(W, S.uFix, !1), ve(W, S.aNormal)
      },
      ah = function (Y, c, h, o, S, s, W, K) {
        Y._picking || (h ? (Hc(Y, c.uBlend, !0), Hc(Y, c.uBlendColor, h)) : Hc(Y, c.uBlend, !1), Hc(Y, c.uLight, o == V ? !0 : o), Fe(S) && 1 !== S && Hc(Y, c.uPartOpacity, S), Hc(Y, c.uReverseFlip, s == V ? !1 : s), Hc(Y, c.uFixPickReverseColor, W || Mo)), K ? Y.enable(Y.CULL_FACE) : Y.disable(Y.CULL_FACE)
      },
      kf = function (h, O) {
        h._picking || Hc(h, O.uPartOpacity, 1)
      },
      gm = function (V, J, Q, F, u, s, W, k) {
        if (!Q) return Tr(V, V._emptyTexture), void 0;
        Hc(V, J.uTexture, !0), Hc(V, J.uDiscardSelectable, np(F) ? F : !0), ve(V, J.aUv), sr(V, u, s, J.aUv, 2), V.activeTexture(V.TEXTURE0), Tr(V, Q), V.uniform1i(J.uSampler, 0);
        var Y = [0, 0, 1, 1];
        W && (Y[0] = W[0], Y[1] = W[1]), k && (Y[2] = k[0], Y[3] = k[1]), Hc(V, J.uOffsetScale, Y)
      },
      Yp = function (u, L, O) {
        Tr(u, V), O && (Lm(u, L.aUv), Hc(u, L.uTexture, !1))
      },
      xk = function (z, J, j, s, W, O) {
        j && !Q && z.lineWidth(j), s && !z._picking && Hc(z, J.uFixPickReverseColor, s), W && sr(z, W, O, J.aPosition)
      },
      fh = function (F, k, u, Y) {
        hj && (Y = F[hj]), F.drawArrays(Y == V ? F.TRIANGLES : Y, k, u)
      },
      lp = function (U, e, E, _) {
        hj && (_ = U[hj]), U.drawElements(_ == V ? U.TRIANGLES : _, E, U.UNSIGNED_SHORT, e == V ? 0 : 2 * e)
      },
      sr = function (N, k, F, t, w) {
        var I = N.ARRAY_BUFFER;
        N.bindBuffer(I, k), F && N.bufferData(I, F, N.STATIC_DRAW), t != V && N.vertexAttribPointer(t, w ? w : 3, N.FLOAT, !1, 0, 0)
      },
      Vl = function (Q, z, P) {
        var _ = Q.ELEMENT_ARRAY_BUFFER;
        Q.bindBuffer(_, z), P && Q.bufferData(_, P, Q.STATIC_DRAW)
      },
      Hc = function (u, l, r) {
        if (r != V && l != V) {
          r = wj(r);
          var E = r.length;
          3 === E ? u.uniform3fv(l, r) : 4 === E ? u.uniform4fv(l, r) : 16 === E ? u.uniformMatrix4fv(l, !1, r) : np(r) ? u.uniform1i(l, r ? 1 : 0) : 2 === E ? u.uniform2fv(l, r) : u.uniform1f(l, r)
        }
      },
      ve = function (u, o) {
        o != V && o >= 0 && u.enableVertexAttribArray(o)
      },
      Lm = function (B, v) {
        v != V && v >= 0 && B.disableVertexAttribArray(v)
      },
      Mr = function (c, $) {
        var T = c.getGL(),
          g = c._prg;
        c._7O = c._8O.pop(), $ && (Hc(T, g.uMVMatrix, c._7O), c._6O = $, Hc(T, g.uNMatrix, $))
      },
      yh = function (r, i) {
        return i || (i = Up()), hf(i, r), ql(i), Ik(i), i
      },
      Tf = function (V, a) {
        var g = V.getGL(),
          Z = V._prg,
          N = V._7O;
        a && (V._8O.push(Co(N)), eh(N, N, a)), Hc(g, Z.uMVMatrix, N), Hc(g, Z.uNMatrix, yh(N, V._6O))
      },
      Th = function (B, A, c, z, P, O) {
        if (c) {
          if (z) {
            var S = c.value++,
              Z = [(255 & S >> 24) / 255, (255 & S >> 16) / 255, (255 & S >> 8) / 255, (255 & S) / 255];
            c[S] = {
              data: P,
              part: O
            }
          } else Z = al;
          return Hc(B, A.uFixPickReverseColor, Z), Z
        }
      },
      uj = function () {
        var D = {
          center: function (j, t, O, i, F) {
            var w = t[1] / 2,
              b = {
                x: -t[0] / 2,
                y: w,
                width: t[0],
                height: t[1]
              },
              M = Vh(j, b, O);
            return [M.x + i, 2 * w - M.y - F, Rb()]
          }, front: function (n, w, q, o, O) {
            var v = w[1] / 2,
              k = {
                x: -w[0] / 2,
                y: v,
                width: w[0],
                height: w[1]
              },
              m = Vh(n, k, q);
            return [m.x + o, 2 * v - m.y - O, w[2] / 2 + Rb()]
          }, back: function (w, q, X, V, i) {
            var t = q[0] / 2,
              x = q[1] / 2,
              Q = {
                x: t,
                y: x,
                width: q[0],
                height: q[1]
              },
              g = Vh(w, Q, X);
            return [2 * t - g.x - V, 2 * x - g.y - i, -q[2] / 2 - Rb()]
          }, left: function (B, k, J, Z, N) {
            var i = k[1] / 2,
              Y = {
                x: -k[2] / 2,
                y: i,
                width: k[2],
                height: k[1]
              },
              A = Vh(B, Y, J);
            return [-k[0] / 2 - Rb(), 2 * i - A.y - N, A.x + Z]
          }, right: function (Q, t, l, H, W) {
            var v = t[2] / 2,
              L = t[1] / 2,
              G = {
                x: v,
                y: L,
                width: t[2],
                height: t[1]
              },
              Z = Vh(Q, G, l);
            return [t[0] / 2 + Rb(), 2 * L - Z.y - W, 2 * v - Z.x - H]
          }, top: function (x, P, R, j, l) {
            var c = {
                x: -P[0] / 2,
                y: -P[2] / 2,
                width: P[0],
                height: P[2]
              },
              Z = Vh(x, c, R);
            return [Z.x + j, P[1] / 2 + Rb(), Z.y + l]
          }, bottom: function (a, C, O, h, o) {
            var e = C[2] / 2,
              J = {
                x: -C[0] / 2,
                y: e,
                width: C[0],
                height: C[2]
              },
              K = Vh(a, J, O);
            return [K.x + h, -C[1] / 2 - Rb(), 2 * e - K.y - o]
          }
        };
        return function (Q, e, p, _, B, h) {
          return D[_](Q, e, p, B || 0, h || 0)
        }
      }(),
      uk = function (_, C, T, z, V, c, l, x, W, s) {
        if (V && (C[0] += V[0], C[1] += V[1], C[2] += V[2]), Lk(_, T), x) {
          var F = Up();
          if (ee(F, W, s), ac(C, F), Lk(_, C), _.auto = x, _.pos = ac([0, 0, 0], _), c) {
            var p = _.mat2 = Up();
            ee(p, c, l)
          }
        } else ee(_, W, s), Lk(_, C), z === pg ? sc(_, -O) : z === Hi ? sc(_, O) : z === Ud ? _q(_, -O) : z === Hb ? _q(_, O) : z === Xr && sc(_, S), ee(_, c, l);
        return _
      },
      Og = function (I, C) {
        var T = C.auto,
          g = C.mat2,
          Z = I.gv;
        if (T) {
          var t, b = Up(),
            e = [0, 0, 0, 0];
          t = "string" == typeof T ? [T.indexOf("x") < 0 ? Z._eye[0] : Z._center[0], T.indexOf("y") < 0 ? Z._eye[1] : Z._center[1], T.indexOf("z") < 0 ? Z._eye[2] : Z._center[2]] : Z._eye, up(e, Ko(Up(), t, Z._center, Z._up)), Do(b, oq(e, e), C.pos), g && eh(b, b, g), Tf(Z, b)
        } else Tf(Z, C)
      },
      Er = function (c, v, L, r, V) {
        var Y = c.s,
          W = c.gv,
          K = W.getGL(),
          w = W._prg,
          P = W._buffer,
          e = W._1O;
        ce(K, ln, e), Og(c, L), ah(K, w, Y(v + ".blend"), Y(v + ".light"), Y(v + ".opacity"), Y(v + ".reverse.flip"), Y(v + ".reverse.color"), Y(v + ".reverse.cull")), gm(K, w, e, V, P.uv, Gg), sr(K, P.vs, r, w.aPosition), sr(K, P.ns, Ef, w.aNormal), Vl(K, P.is, oe), lp(K, 0, oe.length), Yp(K, w, e), kf(K, w), Mr(W)
      },
      Mm = function (w, o, J) {
        var $ = w.gv,
          z = w.data,
          I = w[o] = {
            blend: $.getBodyColor(z) || $.getFaceBlend(z, o),
            light: $.getFaceLight(z, o),
            color: $.getFaceColor(z, o),
            opacity: $.getFaceOpacity(z, o),
            transparent: $.getFaceTransparent(z, o),
            reverseFlip: $.getFaceReverseFlip(z, o),
            reverseColor: $.getFaceReverseColor(z, o),
            reverseCull: $.getFaceReverseCull(z, o),
            texture: $.getFaceImage(z, o),
            discardSelectable: $.getFaceDiscardSelectable(z, o)
          };
        if ("csg" !== o) {
          I.uv = $.getFaceUv(z, o) || J && J[o + "Uv"], I.uvScale = $.getFaceUvScale(z, o) || J && J[o + "UvScale"], I.uvOffset = $.getFaceUvOffset(z, o) || J && J[o + "UvOffset"];
          var l = $.getFaceMat(z, o);
          l && (I.mat = Be(z, l))
        }
        return I
      },
      nq = function (J, Y, c, $, K) {
        if ($) {
          if (!K($.transparent)) return;
          var s = J.data,
            u = J.gv,
            E = u._buffer,
            t = u.getTexture($.texture, s);
          gm(Y, c, t, $.discardSelectable, E.uv, $.tuv, $.uvOffset, $.uvScale), ah(Y, c, $.blend, $.light, $.opacity, $.reverseFlip, $.reverseColor, $.reverseCull), Hc(Y, c.uDiffuse, $.color), sr(Y, E.vs, $.vs, c.aPosition), sr(Y, E.ns, $.ns, c.aNormal), fh(Y, 0, $.vs.length / 3), kf(Y, c), Yp(Y, c, t)
        }
      },
      ue = function (Y, z, s, H, A, R) {
        var N, T, p, G, l, Q, h, E, i, L, d, F = [H - z, A - s],
          m = Y ? Y.length : 0;
        for (p = 0; m > p; p++) {
          for (G = 2, N = Y[p], l = N[0], Q = N[1]; G + 1 < N.length;) {
            if (h = N[G], E = N[G + 1], T = Bn(z, s, H, A, l, Q, h, E, !0)) {
              i = [h - l, E - Q], L = Pq(i), i[0] /= L, i[1] /= L, L = dj(F, i), L = L > 0 ? R : -R, d = [i[0] * L, i[1] * L];
              break
            }
            l = h, Q = E, G += 2
          }
          if (d) break
        }
        if (d)
          for (H = z + d[0], A = s + d[1], p = 0; m > p; p++)
            for (G = 2, N = Y[p], l = N[0], Q = N[1]; G + 1 < N.length;) {
              if (h = N[G], E = N[G + 1], T = Bn(z, s, H, A, l, Q, h, E, !0)) return [0, 0];
              l = h, Q = E, G += 2
            }
        return d ? d : [H - z, A - s]
      },
      br = T.graph3d = {},
      Hg = function ($, I, S) {
        Vm(_ + ".graph3d." + $, I, S)
      },
      Qm = "~<yfusfw!+!yjsubNQv!>!opjujtpQ`mh!gjeof$!~<fdobutjEfojMb!>!fdobutjEfojMw|*itbEv)gj!ITBE!gfegj$!!gjeof$!~<ttfouihjsCidubCb!>!ttfouihjsCidubCw|*ttfouihjsCidubCv)gj!TTFOUIHJSCIDUBC!gfegj$!!gjeof$!~<eofmCidubCb!>!eofmCidubCw|*eofmCidubCv)gj!EOFMCIDUBC!gfegj$!!gjeof$!~<spmpDidubCb!>!spmpDidubCw|*spmpDidubCv)gj!SPMPDIDUBC!gfegj$!~<x{/fmbdTuftggPv!+!wVb!,!zy/fmbdTuftggPv!>!wVw|*fsvuyfUv)gj~!gjeof$!~~<*^j]opjujtpQupqTw!.!sfuofd)f{jmbnspo!>!^j]opjudfsjEupqTw<**1/2!-^j]sfuofDupqTv)5dfw!+!yjsubNxfjWv)4dfw!>!sfuofd!4dfw<**1/2!-^j]opjujtpQupqTv)5dfw!+!yjsubNxfjWv)4dfw!>!^j]opjujtpQupqTw|*1/1!>>!x/^j]spmpDupqTv)gj|!*,,j!<UPQT`YBN!=!j!<1>j!uoj)spg!1!?!UPQT`YBN!gj$!!gjeof$!~~<**1/2!-^j]opjujtpQuojpQv)5dfw!+!yjsubNxfjWv)4dfw!>!^j]opjujtpQuojpQw|*1/1!>>!x/^j]spmpDuojpQv)gj|!*,,j!<UOJPQ`YBN!=!j!<1>j!uoj)spg!1!?!UOJPQ`YBN!gj$!!gjeof$!~~<*opjujtpQsje!.!sfuofd)f{jmbnspo!>!^j]opjudfsjEsjEw<**1/2!-1/1!-1/1!-1/1)5dfw!+!yjsubNxfjWv)4dfw!>!sfuofd!4dfw<**1/2!-^j]opjujtpQsjEv)5dfw!+!yjsubNxfjWv)4dfw!>!opjujtpQsje!4dfw|*1/1!>>!x/^j]spmpDsjEv)gj|!*,,j!<SJE`YBN!=!j!<1>j!uoj)spg!1!?!SJE`YBN!gj$!<*yfusfw)4dfw!>!yfusfWw<**1/2!-mbnspOb)5dfw!+!yjsubNOv)4dfw!>!mbnspOw|*ldjQva!%%!yjGva)gj<*1/2!-opjujtpQb)5dfw!+!yjsubNWNv!>!yfusfw!5dfw|!*ejpw)ojbn!ejpw!gjeof$!<fdobutjEfojMw!ubpmg!hojzsbw<fdobutjEfojMb!ubpmg!fuvcjsuub<itbEv!mppc!nspgjov!ITBE!gfegj$!!gjeof$!<^UPQT`YBN]opjudfsjEupqTw!4dfw!hojzsbw<^UPQT`YBN]opjujtpQupqTw!4dfw!hojzsbw<^UPQT`YBN]sfuofDupqTv!4dfw!nspgjov<^UPQT`YBN]opjujtpQupqTv!4dfw!nspgjov<^UPQT`YBN]spmpDupqTv!5dfw!nspgjov!1!?!UPQT`YBN!gj$!!gjeof$!<^UOJPQ`YBN]opjujtpQuojpQw!4dfw!hojzsbw<^UOJPQ`YBN]opjujtpQuojpQv!4dfw!nspgjov<^UOJPQ`YBN]spmpDuojpQv!5dfw!nspgjov!1!?!UOJPQ`YBN!gj$!!gjeof$!<^SJE`YBN]opjudfsjEsjEw!4dfw!hojzsbw<^SJE`YBN]opjujtpQsjEv!4dfw!nspgjov<^SJE`YBN]spmpDsjEv!5dfw!nspgjov!1!?!SJE`YBN!gj$!!gjeof$!<eofmCidubCw!4dfw!hojzsbw<eofmCidubCb!4dfw!fuvcjsuub<eofmCidubCv!mppc!nspgjov!EOFMCIDUBC!gfegj$!!gjeof$!<ttfouihjsCidubCw!ubpmg!hojzsbw<ttfouihjsCidubCb!ubpmg!fuvcjsuub<ttfouihjsCidubCv!mppc!nspgjov!TTFOUIHJSCIDUBC!gfegj$!!gjeof$!<spmpDidubCw!5dfw!hojzsbw<spmpDidubCb!5dfw!fuvcjsuub<spmpDidubCv!mppc!nspgjov!SPMPDIDUBC!gfegj$!<yfusfWw!4dfw!hojzsbw<mbnspOw!4dfw!hojzsbw<yjGv!mppc!nspgjov<ldjQv!mppc!nspgjov<yjsubNxfjWv!5ubn!nspgjov<yjsubNOv!5ubn!nspgjov<yjsubNQv!5ubn!nspgjov<yjsubNWNv!5ubn!nspgjov<opjujtpQb!4dfw!fuvcjsuub<mbnspOb!4dfw!fuvcjsuub<wVw!3dfw!hojzsbw<wVb!3dfw!fuvcjsuub<fmbdTuftggPv!5dfw!nspgjov<fsvuyfUv!mppc!nspgjov!YJGFSQ^#CBRBEJxTT87hJFI,,bX1XrIwcn3UM{ZeZ,M6HEN6nLxe2Z72s2:3johr6foKrpqwxNKYkdbJ2CN[mBbf[wXU,T0oGuSEd190ohLZkEn8IuCe[OHoWeKz:Sf,VS7xdSLw23W1YJLU:jdv2{hiDbhDzNNEh9tp3xsuEp94Sl4c3wRzqwShMDRhCLRjCDEBOH5BBVRBCFRE4cJTHrTDH1BNgHJN",
      yp = "~~<eJ!>!spmpDhbsG`mh!gjeof$!~<ttfouihjsCidubCw!>+!chs/eJ!!!|*ttfouihjsCidubCv)gj!TTFOUIHJSCIDUBC!gfegj$!~<ttfouihjsCv!>+!chs/eJ!!!|*1/2!>a!ttfouihjsCv)gj~~<zujdbqPusbQv!>+!b/eJ!!!|*1/2!>a!zujdbqPusbQv)gj~!gjeof$!<*spudbGhpg!-*x/eJ!-chs/spmpDhpGv)5dfw!-eJ)yjn!>!eJ<*iuqfe!-sbGhpGv!-sbfOhpGv)qfutiuppnt!>!spudbGhpg!ubpmg<x/esppDhbsG`mh0{/esppDhbsG`mh!>!iuqfe!ubpmg!HPG!gfegj$!!gjeof$!~~~~<chs/^j]spmpDupqTv!+!udfggFupqt!+!fhobSm!+!*1/1!-*mbnspOm.!-O)upe)ybn!>,!chs/eJ<*1/1!-*^j]uofopqyFupqTv!-udfggFupqt)xpq)ybn!>!udfggFupqt|*^j]fmhoBupqTv!?!udfggFupqt)gj<*mbnspOm!-^j]opjudfsjEupqTw)upe!>!udfggFupqt!ubpmg<*spudfWm)f{jmbnspo!>!mbnspOm!4dfw|*1/1!?!fhobSm)!gj~<*1/2!-*^j]fhobSupqTv!0!*spudfWm)iuhofm))ojn!.!1/2!>!fhobSm|*1/1!?!^j]fhobSupqTv)!gj<1/2!>!fhobSm!ubpmg<^j]opjujtpQupqTw!.!yfusfWw!>!spudfWm!4dfw|*1/1!>>!x/^j]spmpDupqTv)gj|!*,,j!<UPQT`YBN!=!j!<1>j!uoj)spg!1!?!UPQT`YBN!gj$!!gjeof$!~~~<chs/^j]spmpDuojpQv!+!fhobSm!+!*1/1!-**spudfWm)f{jmbnspo.!-O)upe)ybn!>,!chs/eJ|*1/1!?!fhobSm)!gj~<*1/2!-*^j]fhobSuojpQv!0!*spudfWm)iuhofm))ojn!.!1/2!>!fhobSm|*1/1!?!^j]fhobSuojpQv)!gj<1/2!>!fhobSm!ubpmg<^j]opjujtpQuojpQw!.!yfusfWw!>!spudfWm!4dfw|*1/1!>>!x/^j]spmpDuojpQv)gj|!*,,j!<UOJPQ`YBN!=!j!<1>j!uoj)spg!1!?!UOJPQ`YBN!gj$!!gjeof$!~~<chs/^j]spmpDsjEv!+!*1/1!-**^j]opjudfsjEsjEw)f{jmbnspo.!-O)upe)ybn!>,!chs/eJ|*1/1!>>!x/^j]spmpDsjEv)gj|!*,,j!<SJE`YBN!=!j!<1>j!uoj)spg!1!?!SJE`YBN!gj$!~<chs/spmpDuihjmebfIv!+!nsfUusfcnbm!>+!chs/eJ~<*1/2!-fhobSuihjmebfIv0*yfusfWw)iuhofm)ojn!.!1/2!!>+!nsfUusfcnbm|*1/1!?!fhobSuihjmebfIv)gj<*1/1!-6/1!,!6/1!+!*M.!-O)upe)ybn!>!nsfUusfcnbm!ubpmg|*1/1!>>!x/spmpDuihjmebfIv)gj|*uihjMv)gj~!gjeof$!~<spmpDeofmCv!>+!eJ|*eofmCv)gj!ftmf$!~<spmpDeofmCv!>+!eJ|*eofmCv)gj!ftmf~<eofmCidubCw!>+!chs/eJ|*eofmCidubCv)gj!EOFMCIDUBC!gfegj$!~<spmpd!>!eJ|ftmf~<spmpDwv!>!eJ|*fsvuyfUv)gj|!ftmf~<spmpDftsfwfSldjQyjGv!>!eJ|*qjmGftsfwfSva!%%!ldbCtj)gj~<fvsu!>!ldbCtj<O.!>!O|*1/1!=!*O!-F)upe)gj<ftmbg!>!ldbCtj!mppc<F.!>!M!4dfw<*yfusfWw.)f{jmbnspo!>!F!4dfw<*mbnspOw)f{jmbnspo!>!O!4dfw!gjeof$!<ftvggjEv!>!spmpd!ftmf$!~<ftvggjEv!>!spmpd|ftmf~<spmpDidubCw!>!spmpd|*spmpDidubCv)gj!SPMPDIDUBC!gfegj$!<spmpd!5dfw|!ftmf~!gjeof$!~~<ftvggjEv!>!eJ|ftmf~<esbdtje|*1/1!>>!x/ftvggjEv)gj|!*!fdobutjEitbEv!?!*!fdobutjEqbHitbEv!-fdobutjEfojMw!)epn!%%!itbEv)!gj!ITBE!gfegj$!!gjeof$!<spmpDftsfwfSldjQyjGv!>!eJ!ftmf$!~<spmpDftsfwfSldjQyjGv!>!eJ|ftmf~<spmpDidubCw!>!eJ|*spmpDidubCv)gj!SPMPDIDUBC!gfegj$!|*yjGv)gj<eJ!5dfw|ftmf~!gjeof$!<spmpDftsfwfSldjQyjGv!>!spmpDhbsG`mh!ftmf$!~<spmpDftsfwfSldjQyjGv!>!spmpDhbsG`mh|ftmf~<spmpDidubCw!>!spmpDhbsG`mh|*spmpDidubCv)gj!SPMPDIDUBC!gfegj$!|*ldjQv)gj~~~<1/2!>!b/spmpDwv|ftmf~<esbdtje|*5/1!=!b/spmpDwv)gj|ftmf~~<esbdtje|*1/1!>>!b/spmpDwv)gj|*uofsbqtobsUv)gj<*wVw!-sfmqnbTv)E3fsvuyfu!>!spmpDwv|**fmcbudfmfTesbdtjEv!%%!ldjQv)a!%%!fsvuyfUv)gj<spmpDwv!5dfw|!*ejpw)ojbn!ejpw!gjeof$!<fdobutjEfojMw!ubpmg!hojzsbw<fdobutjEqbHitbEv!ubpmg!nspgjov<fdobutjEitbEv!ubpmg!nspgjov<itbEv!mppc!nspgjov!ITBE!gfegj$!!gjeof$!<sbGhpGv!ubpmg!nspgjov<sbfOhpGv!ubpmg!nspgjov<spmpDhpGv!5dfw!nspgjov!HPG!gfegj$!!gjeof$!<^UPQT`YBN]opjudfsjEupqTw!4dfw!hojzsbw<^UPQT`YBN]opjujtpQupqTw!4dfw!hojzsbw<^UPQT`YBN]fhobSupqTv!ubpmg!nspgjov<^UPQT`YBN]fmhoBupqTv!ubpmg!nspgjov<^UPQT`YBN]uofopqyFupqTv!ubpmg!nspgjov<^UPQT`YBN]spmpDupqTv!5dfw!nspgjov!1!?!UPQT`YBN!gj$!!gjeof$!<^UOJPQ`YBN]opjujtpQuojpQw!4dfw!hojzsbw<^UOJPQ`YBN]fhobSuojpQv!ubpmg!nspgjov<^UOJPQ`YBN]spmpDuojpQv!5dfw!nspgjov!1!?!UOJPQ`YBN!gj$!!gjeof$!<^SJE`YBN]opjudfsjEsjEw!4dfw!hojzsbw<^SJE`YBN]spmpDsjEv!5dfw!nspgjov!1!?!SJE`YBN!gj$!!gjeof$!<eofmCidubCw!4dfw!hojzsbw<eofmCidubCv!mppc!nspgjov!EOFMCIDUBC!gfegj$!!gjeof$!<ttfouihjsCidubCw!ubpmg!hojzsbw<ttfouihjsCidubCv!mppc!nspgjov!TTFOUIHJSCIDUBC!gfegj$!!gjeof$!<spmpDidubCw!5dfw!hojzsbw<spmpDidubCv!mppc!nspgjov!SPMPDIDUBC!gfegj$!<spmpDuihjmebfIv!5dfw!nspgjov<fhobSuihjmebfIv!ubpmg!nspgjov<yfusfWw!4dfw!hojzsbw<mbnspOw!4dfw!hojzsbw<ftvggjEv!5dfw!nspgjov<zujdbqPusbQv!ubpmg!nspgjov<ttfouihjsCv!ubpmg!nspgjov<uihjMv!mppc!nspgjov<spmpDeofmCv!5dfw!nspgjov<eofmCv!mppc!nspgjov<sfmqnbTv!E3sfmqnbt!nspgjov<wVw!3dfw!hojzsbw<fsvuyfUv!mppc!nspgjov<spmpDftsfwfSldjQyjGv!5dfw!nspgjov<qjmGftsfwfSv!mppc!nspgjov<ldjQv!mppc!nspgjov<yjGv!mppc!nspgjov<fmcbudfmfTesbdtjEv!mppc!nspgjov<uofsbqtobsUv!mppc!nspgjov!YJGFSQ!gjeof$!!gjeof$!!<ubpmg!qnvjefn!opjtjdfsq!!ftmf$!!<ubpmg!qihji!opjtjdfsq!!IHJI`OPJTJDFSQ`UOFNHBSG`MH!gfegj$!!TF`MH!gfegj$!";
    eq(H, {
      setBatchInfo: function (R, O) {
        Wf[R] = O
      }, getBatchInfo: function (e) {
        return Wf[e]
      }
    }, !0);
    var fc = [1, 1, 1],
      sf = [1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0],
      Wi = [-.5, .5, .5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, .5, .5],
      Dd = [.5, .5, -.5, .5, .5, .5, .5, -.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5],
      nf = [.5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, .5, .5, -.5],
      xo = [.5, -.5, .5, -.5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, .5],
      Yk = [.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5],
      po = [-.5, .5, -.5, .5, .5, -.5, .5, -.5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5],
      $l = function (P, V) {
        Qc(P, V), Kg(P, V, "_wireframeModelMap", "_wireframeIndexMap"), Kg(P, V, "_polylineModelMap", "_polylineIndexMap")
      },
      Qc = function ($, o) {
        if (o) {
          var l, P, G = o._id,
            A = $._33O,
            b = $._34O,
            z = b[G];
          if (z) {
            P = z.batch, l = A[P];
            var i = z.begin,
              g = z.size,
              q = 3 * i,
              X = 3 * g,
              F = 4 * i,
              s = 4 * g,
              p = l.vs,
              S = l.uv,
              j = l.cs,
              k = l.bs,
              V = l.rs,
              n = l.ds,
              v = z.index;
            if (l.invalidate = !0, delete b[G], n.splice(v, 1), yr(n)) delete A[P];
            else {
              for (; v < n.length; v++) z = b[n[v]._id], z.index--, z.begin -= g;
              p.splice(q, X), l.ns.splice(q, X), l.ps.splice(F, s), S && S.splice(2 * i, 2 * g), j && j.splice(F, s), k && k.splice(q, X), V && V.splice(i, g)
            }
          }
        } else $._34O = {}, $._33O = {}
      },
      Kg = function (z, t, O, s) {
        if (t) {
          var T, k, B = t._id,
            G = z[O],
            U = z[s],
            A = U[B];
          if (A) {
            k = A.batch, T = G[k];
            var F = A.begin,
              C = A.size,
              $ = 3 * F,
              P = 3 * C,
              x = 4 * F,
              v = 4 * C,
              N = T.ds,
              w = A.index;
            if (T.invalidate = !0, delete U[B], N.splice(w, 1), yr(N)) delete G[k];
            else {
              for (; w < N.length; w++) A = U[N[w]._id], A.index--, A.begin -= C;
              T.vs.splice($, P), T.cs.splice(x, v), T.ps.splice(x, v), T.ls && T.ls.splice(F, C)
            }
          }
        } else z[O] = {}, z[s] = {}
      },
      Gi = function (U, b, D, E) {
        if (!E) return V;
        var k = b[E];
        if (!k) {
          var M = Wf[E] || wn,
            L = M.image ? [] : V;
          k = b[E] = {
            vs: [],
            ns: [],
            uv: L,
            cs: L ? V : M.color ? V : [],
            bs: M.blend ? [] : V,
            ps: [],
            rs: M.brightness ? [] : V,
            ds: []
          }
        }
        return k.invalidate = !0, U[D._id] = {
          index: k.ds.length,
          begin: k.vs.length / 3,
          batch: E
        }, k.ds.push(D), k
      },
      pb = function (G, f) {
        return f != V && 1 !== f ? [G[0] * f, G[1] * f, G[2] * f, G[3]] : G
      },
      Xn = function (x, m, p) {
        var L = x.getBrightness(m),
          n = wj(p.color || "white"),
          $ = n[3] < 1,
          G = Math.ceil(p.width) || 1,
          A = ($ ? "T" : "O") + G,
          v = x._wireframeIndexMap,
          Z = x._wireframeModelMap,
          s = Z[A];
        s || (s = Z[A] = {
          vs: [],
          cs: [],
          ps: [],
          ds: [],
          T: $,
          W: G
        }), s.invalidate = !0;
        var U = s.vs,
          z = s.cs,
          y = s.ds,
          M = v[m._id] = {
            index: y.length,
            begin: U.length / 3,
            batch: A
          };
        y.push(m), _e(U, Be(m, p.mat), p.short ? he : we);
        var f = M.size = U.length / 3 - M.begin;
        yf(z, pb(n, L), f)
      },
      rh = function (L, c, k, y, C, H, r, B, j) {
        var D = L.getBrightness(c);
        D == V && (D = 1);
        var O = pb(wj(y), D),
          Q = O[3] < 1;
        H = Math.ceil(H) || 1;
        var F = (Q ? "T" : "O") + H;
        if (r) {
          var K = r[0],
            N = (r[1] || K) + K;
          F += "-" + K + "-" + N, j && (F += "-" + yn(j) + "-" + D, j = pb(wj(j), D))
        }
        var A = L._polylineIndexMap,
          P = L._polylineModelMap,
          f = P[F];
        f || (f = P[F] = {
          vs: [],
          cs: [],
          ps: [],
          ds: [],
          ls: r ? [] : V,
          T: Q,
          W: H
        }, r && (f.D = K, f.G = N, f.A = j)), f.invalidate = !0;
        var u, T = f.vs,
          J = f.cs,
          x = f.ds,
          U = f.ls,
          Y = A[c._id] = {
            index: x.length,
            begin: T.length / 3,
            batch: F
          };
        x.push(c), wh(T, k);
        var Z, I = Y.size = T.length / 3 - Y.begin,
          w = k.length,
          i = 0,
          R = [];
        if (r || C)
          for (u = 0; w > u; u += 6) Z = Pq([k[u], k[u + 1], k[u + 2]], [k[u + 3], k[u + 4], k[u + 5]]), R.push(Z), i += Z;
        if (i && C) {
          var n, S = pb(wj(C), D),
            $ = [S[0] - O[0], S[1] - O[1], S[2] - O[2], S[3] - O[3]],
            p = 0;
          for (u = 0; w > u; u += 6) n = p / i, yf(J, [O[0] + $[0] * n, O[1] + $[1] * n, O[2] + $[2] * n, O[3] + $[3] * n], 1), p += R[u / 6], n = p / i, yf(J, [O[0] + $[0] * n, O[1] + $[1] * n, O[2] + $[2] * n, O[3] + $[3] * n], 1)
        } else yf(J, O, I); if (r)
          for (p = B || 0, u = 0; w > u; u += 6) U.push(p), p += R[u / 6], U.push(p)
      },
      Qf = function (N, W, d) {
        if (W)
          for (var o = 4 * W.begin, w = d[W.batch].ps, n = 0; n < W.size; n++) w[o++] = N[0], w[o++] = N[1], w[o++] = N[2], w[o++] = N[3]
      },
      Ci = function (W, s) {
        var S = s + ["32"],
          I = W[s],
          R = W[S];
        I ? R && R.length === I.length ? R.set(I) : W[S] = new ko(I) : delete W[S]
      },
      Ui = function (f, c, b, w, R, _, m, F, D) {
        if (qp(b)) b.forEach(function (K) {
          Ui(f, c, K, w, R, _, m, F, D)
        });
        else if (hn(b)) Ui(f, c, Lh(w, b), w, R, _, m, F, D);
        else if (or(b)) {
          var Z, q = Cc(b.mat, c, f),
            O = Cc(b.s3, c, f),
            P = Cc(b.t3, c, f),
            g = Cc(b.r3, c, f);
          if ((O || g || P || q) && (Z = sk(q, O, g, Cc(b.rotationMode, c, f), P), _.push(Z)), b.shape3d) Ui(f, c, b.shape3d, w, R, _, m, F, b);
          else {
            D = D || wn;
            var v = _[0],
              u = _.length,
              d = w("shape3d.color", b.color, D.color);
            if (R || (R = w("shape3d.blend", b.blend, D.blend)), u > 1) {
              v = Co(v);
              for (var N = 1; u > N; N++) eh(v, v, _[N])
            }
            b.vs && w(Lq, b.visible, D.visible) && Op(v, m, F, b.vs, b.uv, b.is, R, d), b.top_vs && w(Gf, b.topVisible, D.topVisible) && Op(v, m, F, b.top_vs, b.top_uv, b.top_is, R, w("shape3d.top.color", b.topColor, D.topColor) || d), b.bottom_vs && w(hr, b.bottomVisible, D.bottomVisible) && Op(v, m, F, b.bottom_vs, b.bottom_uv, b.bottom_is, R, w("shape3d.bottom.color", b.bottomColor, D.bottomColor) || d), b.from_vs && w(Li, b.fromVisible, D.fromVisible) && Op(v, m, F, b.from_vs, b.from_uv, b.from_is, R, w("shape3d.from.color", b.fromColor, D.fromColor) || d), b.to_vs && w(wr, b.toVisible, D.toVisible) && Op(v, m, F, b.to_vs, b.to_uv, b.to_is, R, w("shape3d.to.color", b.toColor, D.toColor) || d)
          }
          Z && _.pop()
        }
      },
      Op = function (X, l, m, J, s, A, n, r) {
        var T, b = l.cs,
          c = l.uv,
          Q = l.bs;
        if (A) {
          T = A.length;
          for (var Y = 0; T > Y; Y++) {
            var H = A[Y];
            _e(m, X, [J[3 * H], J[3 * H + 1], J[3 * H + 2]]), c && wh(c, [s[2 * H], s[2 * H + 1]])
          }
        } else T = J.length / 3, _e(m, X, J), c && wh(c, s);
        b && yf(b, r, T), Q && (n ? ec(Q, n, T) : wh(Q, fc, T))
      },
      Uo = function (J, l, g, h) {
        var K = [];
        h ? Ui(J.gv, J.data, h, J.s, J.getBodyColor(), [l], g, K) : (dg(J, pg, l, g, K), dg(J, Hi, l, g, K), dg(J, fk, l, g, K), dg(J, Xr, l, g, K), dg(J, Ud, l, g, K), dg(J, Hb, l, g, K), dg(J, "csg", l, g, K)), K.length && (wh(g.vs, K), wh(g.ns, kc(K)))
      },
      dg = function (Q, j, z, Y, i) {
        var E = Q[j];
        if (E) {
          var K = E.tuv;
          if (K) {
            var d, $, J, U, y = E.uvScale,
              C = E.uvOffset;
            if (y)
              for (d = K.length, $ = y[0], J = y[1], U = 0; d > U; U += 2) K[U] *= $, K[U + 1] *= J;
            if (C)
              for (d = K.length, $ = C[0], J = C[1], U = 0; d > U; U += 2) K[U] += $, K[U + 1] += J
          }
          Op(z, Y, i, E.vs, K, V, E.blend, E.color)
        }
      },
      Wq = function (x, M, B, t, b, H, d, l) {
        var T, $ = B.cs,
          Q = B.uv,
          o = B.bs;
        if (x.getFaceVisible(M, H)) {
          var D = x.getFaceMat(M, H);
          if (D && (b = Be(M, D)), _e(d, b, l), $ && yf($, x.getFaceColor(M, H), 6), Q) {
            var I = x.getFaceUv(M, H) || t[H + "Uv"],
              u = x.getFaceUvScale(M, H) || t[H + "UvScale"],
              v = x.getFaceUvOffset(M, H) || t[H + "UvOffset"];
            I = I ? [I[6], I[7], I[0], I[1], I[2], I[3], I[2], I[3], I[4], I[5], I[6], I[7]] : sf;
            var c = I[0],
              j = I[1],
              e = I[2],
              V = I[3],
              F = I[4],
              Z = I[5],
              L = I[6],
              f = I[7],
              h = I[8],
              S = I[9],
              R = I[10],
              A = I[11];
            if (u) {
              var n = u[0],
                E = u[1];
              c *= n, j *= E, e *= n, V *= E, F *= n, Z *= E, L *= n, f *= E, h *= n, S *= E, R *= n, A *= E
            }
            if (v) {
              var q = v[0],
                G = v[1];
              c += q, j += G, e += q, V += G, F += q, Z += G, L += q, f += G, h += q, S += G, R += q, A += G
            }
            Q.push(c, j, e, V, F, Z, L, f, h, S, R, A)
          }
          o && (T = x.getBodyColor(M) || x.getFaceBlend(M, H), T ? ec(o, T, 6) : wh(o, fc, 6))
        }
      },
      Jo = function (l, n, z, h) {
        var i = l.getGL(),
          M = l._prg,
          o = l._buffer;
        if (!ym(n)) {
          Tf(l), Ri(i, M);
          for (var v in n) {
            var A = n[v];
            if (!(h && !A.T || !h && A.T)) {
              A.invalidate ? (A.invalidate = !1, Ci(A, "vs"), Ci(A, "cs"), Ci(A, "ls"), Ci(A, "ps")) : z && Ci(A, "ps");
              var X = A.vs32,
                N = z ? A.ps32 : A.cs32;
              xk(i, M, A.W, V, o.vs, X);
              var D = A.D,
                f = !l._dashDisabled && D;
              f && (Hc(i, M.uDash, !0), Hc(i, M.uDashDistance, D), Hc(i, M.uDashGapDistance, A.G), ve(i, M.aLineDistance), sr(i, o.lineDistance, A.ls32, M.aLineDistance, 1), Hc(i, M.uDiffuse, A.A || Xf));
              var L = !l._batchColorDisabled;
              L && (Hc(i, M.uBatchColor, !0), ve(i, M.aBatchColor), sr(i, o.batchColor, N, M.aBatchColor, 4)), gm(i), fh(i, 0, X.length / 3, i.LINES), Yp(i), L && (Hc(i, M.uBatchColor, !1), Lm(i, M.aBatchColor)), f && (Hc(i, M.uDash, !1), Lm(i, M.aLineDistance))
            }
          }
          gi(i, M)
        }
      },
      ds = function ($, M, m) {
        var P, z, T, C, d, K, H, D, I, N, p, b = $.getGL(),
          q = $._prg,
          Q = $._buffer,
          S = $._33O;
        if (!ym(S)) {
          Tf($);
          for (P in S)
            if (z = Wf[P] || wn, !(m && !z.transparent || !m && z.transparent) && (T = S[P], M || !z.transparentMask)) {
              var R = m && z.autoSort !== !1 && ($._33Q || T.invalidate);
              if (T.invalidate ? (T.invalidate = !1, Ci(T, "vs"), Ci(T, "ns"), Ci(T, "cs"), Ci(T, "rs"), Ci(T, "ps"), Ci(T, "bs"), Ci(T, "uv")) : M && Ci(T, "ps"), d = T.vs32, K = M ? T.ps32 : T.cs32, I = T.uv32, H = T.bs32, D = T.rs32, p = d.length / 3, R && (T.is = dr(d, $.getEye())), p) {
                C = z.light, N = $.getTexture(z.image), ah(b, q, V, z.light, z.opacity, z.reverseFlip, z.reverseColor, z.reverseCull), K ? $._batchColorDisabled || (Hc(b, q.uBatchColor, !0), ve(b, q.aBatchColor), sr(b, Q.batchColor, K, q.aBatchColor, 4)) : Hc(b, q.uDiffuse, z.color);
                var U = H && !$._batchBlendDisabled;
                U && (Hc(b, q.uBatchBlend, !0), ve(b, q.aBatchBlend), sr(b, Q.batchBlend, H, q.aBatchBlend));
                var g = D && !$._batchBrightnessDisabled;
                g && (Hc(b, q.uBatchBrightness, !0), ve(b, q.aBatchBrightness), sr(b, Q.batchBrightness, D, q.aBatchBrightness, 1)), I ? gm(b, q, N, z.discardSelectable, Q.uv, I, z.uvOffset, z.uvScale) : gm(b), sr(b, Q.vs, d, q.aPosition), sr(b, Q.ns, T.ns32, q.aNormal), T.is ? (Vl(b, Q.is, T.is), lp(b, 0, p)) : fh(b, 0, p), I ? Yp(b, q, N) : Yp(b), K && !$._batchColorDisabled && (Hc(b, q.uBatchColor, !1), Lm(b, q.aBatchColor)), U && (Hc(b, q.uBatchBlend, !1), Lm(b, q.aBatchBlend)), g && (Hc(b, q.uBatchBrightness, !1), Lm(b, q.aBatchBrightness)), kf(b, q)
              }
            }
        }
      },
      dr = function (R, j) {
        for (var S = R.length / 3, C = new Array(S), E = S / 3, n = new Array(E), w = 0; E > w; w++) n[w] = w;
        n.sort(function (h, K) {
          var y = 9 * h,
            s = [(R[y] + R[y + 3] + 2 * R[y + 6]) / 4, (R[y + 1] + R[y + 4] + 2 * R[y + 7]) / 4, (R[y + 2] + R[y + 5] + 2 * R[y + 8]) / 4];
          y = 9 * K;
          var v = [(R[y] + R[y + 3] + 2 * R[y + 6]) / 4, (R[y + 1] + R[y + 4] + 2 * R[y + 7]) / 4, (R[y + 2] + R[y + 5] + 2 * R[y + 8]) / 4],
            t = Pq(j, s) - Pq(j, v);
          return t > 0 ? -1 : 0 > t ? 1 : 0
        });
        for (var w = 0; E > w; w++) {
          var Q = 3 * w,
            F = 3 * n[w];
          C[Q] = F, C[Q + 1] = F + 1, C[Q + 2] = F + 2
        }
        return new Eh(C)
      },
      Gg = new ko([0, 0, 0, 1, 1, 1, 1, 0]),
      Ef = new ko([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]),
      oe = new Eh([0, 1, 2, 2, 3, 0]),
      Vj = new ko([-.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, .5, .5, .5, -.5, .5, .5, -.5, -.5, .5, .5, -.5, .5, .5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, .5, .5, .5, .5, .5, -.5, -.5, -.5, .5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, .5]),
      Xm = new Eh([0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23]),
      vk = new ko([0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0]),
      Ce = new ko([0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0]),
      Yf = kc(Vj, Xm),
      we = (new ko([-.5, .5, .5, -.5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, -.5, -.5, .5, .5, -.5, -.5, -.5, -.5, -.5, .5, -.5]), new Eh([0, 1, 2, 3, 0, 7, 5, 4, 6, 7, 5, 3, 2, 4, 6, 1]), [-.5, .5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, -.5, .5, .5, .5, .5, .5, .5, .5, -.5, .5, .5, -.5, .5, -.5, -.5, -.5, -.5, -.5, -.5, -.5, .5, -.5, -.5, .5, -.5, -.5, .5, .5, -.5, .5, .5, -.5, -.5, .5, -.5, .5, .5, .5, .5, .5, -.5, .5, -.5, .5, .5, -.5, -.5, -.5, .5, .5, -.5, .5, -.5, -.5, -.5, .5, -.5, -.5, -.5]),
      he = [-.5, .5, .5, -.4, .5, .5, -.5, .5, .5, -.5, .4, .5, -.5, .5, .5, -.5, .5, .4, .5, .5, .5, .4, .5, .5, .5, .5, .5, .5, .4, .5, .5, .5, .5, .5, .5, .4, -.5, -.5, .5, -.4, -.5, .5, -.5, -.5, .5, -.5, -.4, .5, -.5, -.5, .5, -.5, -.5, .4, .5, -.5, .5, .4, -.5, .5, .5, -.5, .5, .5, -.4, .5, .5, -.5, .5, .5, -.5, .4, -.5, .5, -.5, -.4, .5, -.5, -.5, .5, -.5, -.5, .4, -.5, -.5, .5, -.5, -.5, .5, -.4, .5, .5, -.5, .4, .5, -.5, .5, .5, -.5, .5, .4, -.5, .5, .5, -.5, .5, .5, -.4, -.5, -.5, -.5, -.4, -.5, -.5, -.5, -.5, -.5, -.5, -.4, -.5, -.5, -.5, -.5, -.5, -.5, -.4, .5, -.5, -.5, .4, -.5, -.5, .5, -.5, -.5, .5, -.4, -.5, .5, -.5, -.5, .5, -.5, -.4],
      ri = function (o, h, t, x, r, m) {
        m = m || 16, o = o || 16, h = h || 0, t = t || o;
        var f, p, e, O, H, K, n, I, W = .5,
          D = [],
          P = [],
          u = i / o,
          q = S / m;
        for (f = 0; m > f; f++)
          for (H = f + 1, O = f * q, I = H * q, p = h; t > p; p++) K = p + 1, e = p * u, n = K * u, D.push(W * A(O) * X(e), W * X(O), -W * A(O) * A(e), W * A(I) * X(n), W * X(I), -W * A(I) * A(n), W * A(O) * X(n), W * X(O), -W * A(O) * A(n), W * A(O) * X(e), W * X(O), -W * A(O) * A(e), W * A(I) * X(e), W * X(I), -W * A(I) * A(e), W * A(I) * X(n), W * X(I), -W * A(I) * A(n)), P.push(p / o, f / m, K / o, H / m, K / o, f / m, p / o, f / m, p / o, H / m, K / o, H / m);
        if (x)
          for (e = h * u, f = 0; m > f; f++) H = f + 1, O = f * q, I = H * q, D.push(0, 0, 0, W * A(I) * X(e), W * X(I), -W * A(I) * A(e), W * A(O) * X(e), W * X(O), -W * A(O) * A(e)), P.push(0, .5, h / o, H / m, h / o, f / m);
        if (r)
          for (e = t * u, f = 0; m > f; f++) H = f + 1, O = f * q, I = H * q, D.push(0, 0, 0, W * A(O) * X(e), W * X(O), -W * A(O) * A(e), W * A(I) * X(e), W * X(I), -W * A(I) * A(e)), P.push(1, .5, t / o, f / m, t / o, H / m);
        return {
          vs: D,
          uv: P
        }
      },
      od = function (t, c, v) {
        t = t || .17, c = c || 12, v = v || 18, 0 > t ? t = 0 : t > .25 && (t = .25);
        var j, Z, K, W, m, f, G, Y = .5,
          D = [],
          x = [],
          q = [],
          n = i / v,
          R = i / c,
          p = Y - t;
        for (Z = 0; c >= Z; Z++)
          for (W = -S + Z * R, f = X(W), m = A(W), j = 0; v >= j; j++) K = j * n, G = p + t * f, D.push(X(K) * G, m * t, -A(K) * G), x.push(j / v, 1 - Z / c);
        for (Z = 0; c > Z; Z++) {
          var O = Z * (v + 1),
            z = (Z + 1) * (v + 1);
          for (j = 0; v > j; j++) q.push(O + j, z + j + 1, z + j, O + j, O + j + 1, z + j + 1)
        }
        return {
          vs: D,
          uv: x,
          is: q
        }
      },
      Sd = function (M, E, Y, c, F, b, e) {
        e = e || 12, M = M || 18, E = E || 0, Y = Y || M, b = b || .17, 0 > b ? b = 0 : b > .25 && (b = .25);
        var Z, O, j, m, k, o, u, z, a, _, t = .5,
          L = [],
          B = [],
          G = i / M,
          q = i / e,
          N = t - b;
        for (j = 0; e > j; j++)
          for (m = j + 1, u = -S + j * q, z = -S + m * q, Z = E; Y > Z; Z++) O = Z + 1, k = Z * G, o = O * G, a = N + b * X(u), _ = N + b * X(z), L.push(X(k) * a, A(u) * b, -A(k) * a, X(o) * a, A(u) * b, -A(o) * a, X(o) * _, A(z) * b, -A(o) * _, X(k) * a, A(u) * b, -A(k) * a, X(o) * _, A(z) * b, -A(o) * _, X(k) * _, A(z) * b, -A(k) * _), B.push(Z / M, 1 - j / e, O / M, 1 - j / e, O / M, 1 - m / e, Z / M, 1 - j / e, O / M, 1 - m / e, Z / M, 1 - m / e);
        if (c) {
          var h = [],
            C = [];
          for (j = 0; e > j; j++) m = j + 1, u = -S + j * q, z = -S + m * q, k = E * G, a = N + b * X(u), _ = N + b * X(z), h.push(X(k) * a, A(u) * b, -A(k) * a, X(k) * _, A(z) * b, -A(k) * _, X(k) * N, 0, -A(k) * N), C.push(.5 + .5 * X(u), .5 - .5 * A(u), .5 + .5 * X(z), .5 - .5 * A(z), .5, .5)
        }
        if (F) {
          var P = [],
            l = [];
          for (j = 0; e > j; j++) m = j + 1, u = -S + j * q, z = -S + m * q, k = Y * G, a = N + b * X(u), _ = N + b * X(z), P.push(X(k) * a, A(u) * b, -A(k) * a, X(k) * N, 0, -A(k) * N, X(k) * _, A(z) * b, -A(k) * _), l.push(.5 - .5 * X(u), .5 - .5 * A(u), .5, .5, .5 - .5 * X(z), .5 - .5 * A(z))
        }
        return {
          vs: L,
          uv: B,
          from_vs: h,
          from_uv: C,
          to_vs: P,
          to_uv: l
        }
      },
      go = function (N, g) {
        for (var J, t, Z, S = .5, h = 16, j = [], z = [], d = [], E = i / h, q = 0; h >= q; q++) J = q * E, t = X(J) * S, Z = A(J) * S, j.push(t, -S, Z, t, S, Z), z.push(1 - q / h, 1, 1 - q / h, 0);
        for (q = 0; h > q; q++) d.push(2 * q, 2 * q + 1, 2 * q + 3, 2 * q, 2 * q + 3, 2 * q + 2);
        if (g) {
          var r = [],
            a = [],
            C = [];
          for (r.push(0, -S, 0), a.push(.5, .5), q = 0; h >= q; q++) J = q * E, t = X(J), Z = A(J), r.push(t * S, -S, -Z * S), a.push(.5 + .5 * t, .5 + .5 * Z);
          for (q = 0; h > q; q++) C.push(0, q + 2, q + 1)
        }
        if (N) {
          var T = [],
            $ = [],
            p = [];
          for (T.push(0, S, 0), $.push(.5, .5), q = 0; h >= q; q++) J = q * E, t = X(J), Z = A(J), T.push(t * S, S, -Z * S), $.push(.5 + .5 * t, .5 - .5 * Z);
          for (q = 0; h > q; q++) p.push(0, q + 1, q + 2)
        }
        return {
          vs: j,
          uv: z,
          is: d,
          bottom_vs: r,
          bottom_uv: a,
          bottom_is: C,
          top_vs: T,
          top_uv: $,
          top_is: p
        }
      },
      uh = function (m, T, l, F, s, n, e) {
        m = m || 12, T = T || 0, l = l || m;
        for (var B, H, D, W, S, y, G, R, z = .5, t = [], E = [], d = i / m, V = T; l > V; V++) B = V + 1, H = V * d, D = B * d, W = X(H) * z, S = A(H) * z, y = X(D) * z, G = A(D) * z, t.push(W, -z, -S, y, -z, -G, W, z, -S, y, -z, -G, y, z, -G, W, z, -S), E.push(V / m, 1, B / m, 1, V / m, 0, B / m, 1, B / m, 0, V / m, 0);
        if (e) {
          var L = [],
            _ = [];
          for (V = T; l > V; V++) H = d * V, D = d * (V + 1), W = X(H), S = A(H), y = X(D), G = A(D), L.push(W * z, -z, -S * z, 0, -z, 0, y * z, -z, -G * z), _.push(.5 + .5 * W, .5 + .5 * S, .5, .5, .5 + .5 * y, .5 + .5 * G)
        }
        if (n) {
          var v = [],
            w = [];
          for (V = T; l > V; V++) H = d * V, D = d * (V + 1), W = X(H), S = A(H), y = X(D), G = A(D), v.push(W * z, z, -S * z, y * z, z, -G * z, 0, z, 0), w.push(.5 + .5 * W, .5 - .5 * S, .5 + .5 * y, .5 - .5 * G, .5, .5)
        }
        return F && (H = d * T, W = X(H) * z, S = A(H) * z, R = T / m, t.push(0, z, 0, 0, -z, 0, W, -z, -S, W, -z, -S, W, z, -S, 0, z, 0), E.push(0, 0, 0, 1, R, 1, R, 1, R, 0, 0, 0)), s && (H = d * l, W = X(H) * z, S = A(H) * z, R = l / m, t.push(0, -z, 0, 0, z, 0, W, z, -S, W, z, -S, W, -z, -S, 0, -z, 0), E.push(1, 1, 1, 0, R, 0, R, 0, R, 1, 1, 1)), {
          vs: t,
          uv: E,
          bottom_vs: L,
          bottom_uv: _,
          top_vs: v,
          top_uv: w
        }
      },
      Ni = function (d, g, k, x, a) {
        g = g || 18, k = k || 0, x = x == V ? i : x, a = a == V ? .5 : a;
        for (var S, l, m, M, w, H, o = [0, .5, .75, .875, .9375], s = [], D = [], t = [], h = x / g, _ = 0; _ < o.length; _++) {
          var f = 0 === _ % 2 ? 0 : .5;
          for (S = 0; g >= S; S++) l = (S + f) * h + k, m = 1 - o[_], s.push(X(l) * a * m, -a + 2 * o[_] * a, -A(l) * a * m), D.push((S + f) / g, m)
        }
        for (_ = 0; _ < o.length - 1; _++) {
          var u = _ * (g + 1),
            q = (_ + 1) * (g + 1);
          for (S = 0; g > S; S++) t.push(u + S, q + S + 1, q + S, u + S, u + S + 1, q + S + 1)
        }
        for (H = s.length / 3 - (g + 1), S = 0; g > S; S++) s.push(0, a, 0), D.push((S + .5) / g, 0);
        for (S = 0; g > S; S++) t.push(H + S, H + S + 1, H + (g + 1) + S);
        if (d) {
          var y = [],
            E = [],
            c = [];
          for (y.push(0, -a, 0), E.push(.5, .5), S = 0; g >= S; S++) l = S * h + k, M = X(l), w = A(l), y.push(M * a, -a, -w * a), E.push(.5 + .5 * M, .5 + .5 * w);
          for (S = 0; g > S; S++) c.push(0, S + 2, S + 1)
        }
        return {
          vs: s,
          uv: D,
          is: t,
          bottom_vs: y,
          bottom_uv: E,
          bottom_is: c
        }
      },
      qi = function (m, $, Y, K, D, B) {
        m = m || 16, $ = $ || 0, Y = Y || m;
        for (var r = .5, Z = [], k = [], l = i / m, p = $; Y > p; p++) {
          var s = p + 1,
            H = l * p,
            x = l * s;
          Z.push(X(H) * r, -r, -A(H) * r, X(x) * r, -r, -A(x) * r, 0, r, 0), k.push(p / m, 1, s / m, 1, (p + s) / 2 / m, 0)
        }
        if (B) {
          var W = [],
            S = [];
          for (p = $; Y > p; p++) {
            H = l * p, x = l * (p + 1);
            var e = X(H),
              q = A(H),
              w = X(x),
              v = A(x);
            W.push(e * r, -r, -q * r, 0, -r, 0, w * r, -r, -v * r), S.push(.5 + .5 * e, .5 + .5 * q, .5, .5, .5 + .5 * w, .5 + .5 * v)
          }
        }
        return K && (H = l * $, Z.push(0, r, 0, 0, -r, 0, X(H) * r, -r, -A(H) * r), k.push(0, 0, 0, 1, $ / m, 1)), D && (H = l * Y, Z.push(0, -r, 0, 0, r, 0, X(H) * r, -r, -A(H) * r), k.push(1, 1, 1, 0, Y / m, 1)), {
          vs: Z,
          uv: k,
          bottom_vs: W,
          bottom_uv: S
        }
      },
      yo = function (Q, Z, u, v, E, r, K, c) {
        for (var s = [], j = 0; j < Q.length - 1; j += 2) s.push({
          x: Q[j],
          y: Q[j + 1]
        });
        return as(s, Z, u, v, E, r, K, c, !1)
      },
      Mk = {
        roundRect: function (E, l) {
          return yo([.5, .4, .5, .442, .471, .471, .442, .5, .4, .5, -.4, .5, -.442, .5, -.471, .471, -.5, .442, -.5, .4, -.5, -.4, -.5, -.442, -.471, -.471, -.442, -.5, -.4, -.5, .4, -.5, .442, -.5, .471, -.471, .5, -.442, .5, -.4, .5, .4], [1, 3, 3, 2, 3, 3, 2, 3, 3, 2, 3, 3, 2], E, l, 3)
        }, star: function (e, i) {
          return yo([.193, .079, .333, .5, 0, .233, -.333, .5, -.194, .079, -.5, -.167, -.112, -.167, 0, -.5, .111, -.167, .5, -.167], [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5], e, i)
        }, rect: function ($, B) {
          return yo([.5, -.5, .5, .5, -.5, .5, -.5, -.5], [1, 2, 2, 2, 5], $, B)
        }, triangle: function (z, i) {
          return yo([0, -.5, .5, .5, -.5, .5], [1, 2, 2, 5], z, i)
        }, rightTriangle: function (V, Q) {
          return yo([.5, .5, -.5, .5, -.5, -.5], [1, 2, 2, 5], V, Q)
        }, parallelogram: function (d, Q) {
          return yo([.5, -.5, .25, .5, -.5, .5, -.25, -.5], [1, 2, 2, 2, 5], d, Q)
        }, trapezoid: function (j, v) {
          return yo([.25, -.5, .5, .5, -.5, .5, -.25, -.5], [1, 2, 2, 2, 5], j, v)
        }
      },
      Qe = {
        sphere: 1,
        cylinder: 1,
        cone: 1,
        torus: 1
      },
      Fg = {
        torus: 1,
        sphere: 1
      },
      ns = eq(jh(Mk), {
        cylinder: 1
      }),
      Rr = eq(jh(Mk), {
        cylinder: 1,
        cone: 1
      }),
      lj = function (E, W, c) {
        var H, p = Cc(E.mat, c, W),
          k = Cc(E.s3, c, W),
          T = Cc(E.t3, c, W),
          Z = Cc(E.r3, c, W);
        return (k || Z || T || p) && (H = Co(W._6O), Tf(W, sk(p, k, Z, Cc(E.rotationMode, c, W), T))), H
      },
      Ng = function (Z, B, Y, _, a, U, c) {
        if (qp(Y)) Y.forEach(function (L) {
          Ng(Z, B, L, _, a, U, c)
        });
        else if (hn(Y)) Ng(Z, B, Lh(_, Y), _, a, U, c);
        else if (or(Y))
          if (Y.shape3d) {
            var m = lj(Y, Z, B);
            Ng(Z, B, Y.shape3d, _, a, U, Y), m && Mr(Z, m)
          } else Jr(Z, B, Y, _, a, U, c)
      },
      Jr = function (S, y, i, E, d, B, J) {
        if (J = J || wn, !B || B(E("shape3d.transparent", i.transparent, J.transparent))) {
          var l = lj(i, S, y);
          Mb(i);
          var M = S._26I,
            L = S._prg,
            C = S._buffer,
            n = E("shape3d.color", i.color, J.color);
          d || (d = E("shape3d.blend", i.blend, J.blend)), ah(M, L, d, E("shape3d.light", i.light, J.light), E("shape3d.opacity", i.opacity, J.opacity), E("shape3d.reverse.flip", i.reverseFlip, J.reverseFlip), E("shape3d.reverse.color", i.reverseColor, J.reverseColor), E("shape3d.reverse.cull", i.reverseCull, J.reverseCull)), i.vs && E(Lq, i.visible, J.visible) && vd(M, L, C, n, S.getTexture(E("shape3d.image", i.image, J.image), y), E("shape3d.discard.selectable", i.discardSelectable, J.discardSelectable), i.vs, i.uv, i.ns, i.is, E("shape3d.uv.offset", i.uvOffset, J.uvOffset), E("shape3d.uv.scale", i.uvScale, J.uvScale)), i.top_vs && E(Gf, i.topVisible, J.topVisible) && vd(M, L, C, E("shape3d.top.color", i.topColor, J.topColor) || n, S.getTexture(E("shape3d.top.image", i.topImage, J.topImage), y), E("shape3d.top.discard.selectable", i.topDiscardSelectable, J.topDiscardSelectable), i.top_vs, i.top_uv, i.top_ns, i.top_is, E("shape3d.top.uv.offset", i.topUvOffset, J.topUvOffset), E("shape3d.top.uv.scale", i.topUvScale, J.topUvScale)), i.bottom_vs && E(hr, i.bottomVisible, J.bottomVisible) && vd(M, L, C, E("shape3d.bottom.color", i.bottomColor, J.bottomColor) || n, S.getTexture(E("shape3d.bottom.image", i.bottomImage, J.bottomImage), y), E("shape3d.bottom.discard.selectable", i.bottomDiscardSelectable, J.bottomDiscardSelectable), i.bottom_vs, i.bottom_uv, i.bottom_ns, i.bottom_is, E("shape3d.bottom.uv.offset", i.bottomUvOffset, J.bottomUvOffset), E("shape3d.bottom.uv.scale", i.bottomUvScale, J.bottomUvScale)), i.from_vs && E(Li, i.fromVisible, J.fromVisible) && vd(M, L, C, E("shape3d.from.color", i.fromColor, J.fromColor) || n, S.getTexture(E("shape3d.from.image", i.fromImage, J.fromImage), y), E("shape3d.from.discard.selectable", i.fromDiscardSelectable, J.fromDiscardSelectable), i.from_vs, i.from_uv, i.from_ns, i.from_is, E("shape3d.from.uv.offset", i.fromUvOffset, J.fromUvOffset), E("shape3d.from.uv.scale", i.fromUvScale, J.fromUvScale)), i.to_vs && E(wr, i.toVisible, J.toVisible) && vd(M, L, C, E("shape3d.to.color", i.toColor, J.toColor) || n, S.getTexture(E("shape3d.to.image", i.toImage, J.toImage), y), E("shape3d.to.discard.selectable", i.toDiscardSelectable, J.toDiscardSelectable), i.to_vs, i.to_uv, i.to_ns, i.to_is, E("shape3d.to.uv.offset", i.toUvOffset, J.toUvOffset), E("shape3d.to.uv.scale", i.toUvScale, J.toUvScale)), kf(M, L), l && Mr(S, l)
        }
      },
      vd = function (I, w, K, X, p, V, J, F, j, t, O, o) {
        J && (Hc(I, w.uDiffuse, X), F ? gm(I, w, p, V, K.uv, F, O, o) : gm(I), sr(I, K.vs, J, w.aPosition), sr(I, K.ns, j, w.aNormal), t ? (Vl(I, K.is, t), lp(I, 0, t.length)) : fh(I, 0, J.length / 3), F ? Yp(I, w, p) : Yp(I))
      },
      Lh = function (o, J) {
        if (J || (J = o(lg)), !J) return V;
        if (or(J)) return J;
        var p = Tc[J];
        if (p) return p;
        var G = J;
        if (Qe[J]) {
          var R = o("shape3d.side"),
            P = o("shape3d.side.from"),
            h = o("shape3d.side.to"),
            K = o(Li),
            B = o(wr);
          3 > R ? (R = 0, P = 0, h = 0, K = !1, B = !1) : ((P == V || 0 > P) && (P = 0), (h == V || h > R) && (h = R), 0 === P && h === R && (K = !1, B = !1)), G += "-" + R + "-" + P + "-" + h + "-" + K + "-" + B
        }
        if (ns[J]) {
          var Y = o(Gf);
          G += "-" + Y
        }
        if (Rr[J]) {
          var N = o(hr);
          G += "-" + N
        }
        if ("torus" === J) {
          var W = o("shape3d.torus.radius");
          0 > W ? W = 0 : W > .25 && (W = .25), G += "-" + W
        }
        if (Fg[J]) {
          var z = o(cc);
          G += "-" + z
        }
        return p = le[G], p || ("box" === J ? p = H.createBoxModel() : Mk[J] ? p = Mk[J](Y, N) : "sphere" === J ? p = H.createSphereModel(R, P, h, K, B, z) : J === em ? p = H.createCylinderModel(R, P, h, K, B, Y, N) : "cone" === J ? p = H.createConeModel(R, P, h, K, B, N) : "torus" === J && (p = H.createTorusModel(R, P, h, K, B, W, z)), le[G] = p), p
      },
      Mb = function () {
        var s = ["vs", "ns", "uv", "top_vs", "top_ns", "top_uv", "bottom_vs", "bottom_ns", "bottom_uv", "from_vs", "from_ns", "from_uv", "to_vs", "to_ns", "to_uv", "er", "al"],
          Z = ["is", "top_is", "bottom_is", "from_is", "to_is"];
        return n = Nq(Qm.substr(Qm.indexOf("^#") + 2)), Hj(H[ai(gq + s[15] + "n" + s[16])]()) && dq() ? function (B) {
          B && !B._complete_ && (B._complete_ = !0, B.vs && yr(B.ns) && (B.ns = kc(B.vs, B.is)), B.top_vs && yr(B.top_ns) && (B.top_ns = kc(B.top_vs, B.top_is)), B.bottom_vs && yr(B.bottom_ns) && (B.bottom_ns = kc(B.bottom_vs, B.bottom_is)), B.from_vs && yr(B.from_ns) && (B.from_ns = kc(B.from_vs, B.from_is)), B.to_vs && yr(B.to_ns) && (B.to_ns = kc(B.to_vs, B.to_is)), s.forEach(function (W) {
            var c = B[W];
            qp(c) && (B[W] = new ko(c))
          }), Z.forEach(function (G) {
            var N = B[G];
            qp(N) && (B[G] = new Eh(N))
          }))
        } : void 0
      }(),
      ks = function (m, J) {
        var d = m[J];
        qp(d) && (m[J] = new ko(d))
      };
    eq(Ho, {
      _25Q: function (Q) {
        Q._16O = function (S, n, e, E, g, K, r, i, j) {
          var v = this.info;
          if (v) {
            var R, z, s, D, y, t, l = Up();
            if (Pp[n] ? (R = v.p3, z = v.c1, s = v.c2) : bp[n] ? (z = v.s1 || v.c1, s = v.s2 || v.c2) : (z = v.t1 || v.c1, s = v.t2 || v.c2), R) t = uj(n, Zr, e, E, i, j);
            else {
              var w = As(s, z),
                X = Pq(z, s);
              D = [0, -f(w[2], w[0]), p(w[1] / X)], y = "zyx", R = [(z[0] + s[0]) / 2, (z[1] + s[1]) / 2, (z[2] + s[2]) / 2], t = uj(n, [X, 0, 0], e, E, i, j)
            }
            return uk(l, t, R, E, g, K, r, S, D, y)
          }
          return id
        }, Q._80o = function (C, E, _) {
          var U = this,
            T = U.shapeModel;
          if (T) {
            var K = U.gv;
            Tf(K), Ng(K, U.data, T, U.s, U.getBodyColor(), _)
          }
        }, Q.createLineModel = function (r, I, $, g, D) {
          for (var R = this, f = R.s, B = rs(r, I, f(cc)), n = [], K = 0; K < B.length; K++) {
            var s = B[K],
              _ = s.length;
            if (_ > 1) {
              var L = s[0];
              n.push(L.x, L.y, L.z);
              for (var q = 1; _ - 1 > q; q++) L = s[q], n.push(L.x, L.y, L.z), n.push(L.x, L.y, L.z);
              L = s[_ - 1], n.push(L.x, L.y, L.z)
            }
          }
          var E, A, t, k = f(g + ".color"),
            m = f(D),
            l = 0;
          return m && (A = f(D + ".color"), E = f(D + ".pattern"), l = f(D + ".offset"), t = k), rh(R.gv, R.data, n, A || k, t ? V : f(g + ".gradient.color"), $, E || f(g + ".pattern"), l, t), B
        }, Q.createTubeModel = function (D, C, d, Z) {
          for (var q = this, R = q.s, U = R("shape3d.side") || wg, o = R("shape3d.start.angle"), k = R(Gf) ? R("shape3d.top.cap") : V, e = R(hr) ? R("shape3d.bottom.cap") : V, t = "flat" === k, b = "flat" === e, W = t && (Z ? Z.uv : R("shape3d.top.image")), E = b && (Z ? Z.uv : R("shape3d.bottom.image")), $ = Z ? Z.uv : R("shape3d.image"), f = {
            vs: [],
            uv: $ ? [] : V,
            top_vs: t ? [] : V,
            top_uv: W ? [] : V,
            bottom_vs: b ? [] : V,
            bottom_uv: E ? [] : V
          }, G = rs(D, C, R(cc), d), x = 0, Q = G.length; Q > x; x++) Kj(f, G[x], R(el), d, U, o, k, e);
          if (Z) {
            var y = [];
            Ui(q.gv, q.data, f, R, q.getBodyColor(), [], Z, y), y.length && (wh(Z.vs, y), wh(Z.ns, kc(y)))
          } else q.shapeModel = f;
          return G
        }, Q.getCache = function () {
          var A = this.info;
          if (A) {
            var Z = A.list;
            if (Z) {
              var k = A.cache;
              return k || (k = A.cache = jq(Z)), k
            }
          }
          return V
        }
      }
    });
    var bs = function (H, p) {
        for (var F, s = 0, n = H.length, e = 0, g = n - 1; g >= e;)
          if (s = M(e + (g - e) / 2), F = H[s].length - p, 0 > F) e = s + 1;
          else {
            if (!(F > 0)) {
              g = s;
              break
            }
            g = s - 1
          }
        s = g;
        var Y = H[s],
          h = Y.point;
        return s === n - 1 || Y.length === p || (h = (new fj).subVectors(H[s + 1].point, h).normalize().multiplyScalar(p - Y.length).add(h)), {
          point: h,
          tangent: Y.tangent
        }
      },
      jq = function (k) {
        for (var o, F, S = [], i = 0, $ = 0; $ < k.length; $++) {
          for (var X = k[$], Z = 0; Z < X.length; Z++) {
            o = X[Z], F && (i += F.distanceTo(o));
            var q = new fj,
              E = X[Z + 1];
            E ? q.subVectors(E, o) : F ? q.subVectors(o, F) : q.x = 1, q.normalize(), S.push({
              point: o,
              length: i,
              tangent: q
            }), F = o
          }
          F = null
        }
        return S
      },
      rs = function (q, i, s, r) {
        s = s || Ok;
        for (var F = [], k = 0, R = q.size(); R > k; k++) {
          var g = q.get(k);
          F.push(new fj(g.x, g.e || 0, g.y))
        }
        md(i) && (i = i._as);
        for (var Z, N, p, A, e, W = [], H = 0, K = 0, m = i ? i.length : R; m > K; K++)
          if (e = i ? i[K] : 0 === K ? 1 : 2, 1 === e) W.push(p = []), p.push(F[H++]);
          else if (2 === e || 5 === e)
          if (A = 2 === e ? F[H++] : p[0], r) {
            var j = i ? i[K + 1] : m > K + 1 ? 2 : V;
            if (2 === j || 5 === j) {
              var $ = p[p.length - 1],
                D = 2 === j ? F[H] : p[0],
                b = (new fj).subVectors($, A),
                t = (new fj).subVectors(D, A),
                U = b.length(),
                J = t.length();
              if (r > U / 2 && r > J / 2) p.push(A);
              else
                for (b.multiplyScalar(o(r, U / 2) / U).add(A), t.multiplyScalar(o(r, J / 2) / J).add(A), Z = new Pl(b, A, t).getPoints(s), N = 0; s >= N; N++) p.push(Z[N])
            } else p.push(A)
          } else p.push(A);
        else if (3 === e)
          for (Z = new Pl(p[p.length - 1], F[H++], F[H++]).getPoints(s), N = 1; s >= N; N++) p.push(Z[N]);
        else if (4 === e)
          for (Z = new Mh(p[p.length - 1], F[H++], F[H++], F[H++]).getPoints(s), N = 1; s >= N; N++) p.push(Z[N]);
        return W
      },
      Oq = function (B) {
        for (var j, p, C = new fj, V = [], T = [], $ = [], X = 0, v = B.length; v > X; X++) j = B[X], p = B[X + 1], p ? C.subVectors(p, j) : C.subVectors(j, B[X - 1]), V.push(C.normalize().clone());
        var Y, W, J, w, c = new fj,
          n = new fj,
          k = new Ep,
          E = 1e-4,
          q = Number.MAX_VALUE,
          t = V[0],
          i = T[0] = new fj,
          D = $[0] = new fj;
        for (W = G(t.x), J = G(t.y), w = G(t.z), q >= W && (q = W, c.set(1, 0, 0)), q >= J && (q = J, c.set(0, 1, 0)), q >= w && c.set(0, 0, 1), n.crossVectors(t, c).normalize(), i.crossVectors(t, n), D.crossVectors(t, i), X = 1; v > X; X++) T[X] = T[X - 1].clone(), $[X] = $[X - 1].clone(), n.crossVectors(V[X - 1], V[X]), n.length() > E && (n.normalize(), Y = z(kd(V[X - 1].dot(V[X]), -1, 1)), T[X].applyMatrix4(k.makeRotationAxis(n, Y))), $[X].crossVectors(V[X], T[X]);
        return {
          B: $,
          T: V,
          N: T
        }
      },
      Kj = function () {
        var L = function (Z) {
            for (var b = 1; b < arguments.length; b++) {
              var J = arguments[b];
              Z.push(J.x, J.y, J.z)
            }
          },
          P = function (G) {
            for (var Q = 1; Q < arguments.length; Q++) {
              var T = arguments[Q].uv;
              G.push(T[0], T[1])
            }
          },
          u = function (s, G, M, c, n) {
            var q = -c * X(n),
              x = c * A(n);
            return new fj(s.x + q * M.x + x * G.x, s.y + q * M.y + x * G.y, s.z + q * M.z + x * G.z)
          },
          m = function (d, S, A, p, M, h, k) {
            for (var x = [], C = i / M, Y = 0; M >= Y; Y++) {
              var E = u(d, S, A, p, Y * C + h);
              x.push(E), k != V && (E.uv = [k, Y / M])
            }
            return x
          },
          U = function ($, D, d, O, S, Q, Z, U) {
            var t = D ? $.top_vs : $.bottom_vs;
            if (t)
              for (var x = D ? $.top_uv : $.bottom_uv, e = i / Z, z = 0; Z > z; z++) {
                var y, I;
                D ? (y = z * e + U, I = (z + 1) * e + U) : (I = z * e + U, y = (z + 1) * e + U), L(t, u(d, O, S, Q, y), u(d, O, S, Q, I), d), x && x.push(.5 - .5 * X(y), .5 - .5 * A(y), .5 - .5 * X(I), .5 - .5 * A(I), .5, .5)
              }
          };
        return function (_, s, S, u, B, O, T, e) {
          var l = s.length;
          if (l > 1) {
            var J, f, v, w, i, K, y, a = Oq(s),
              k = a.T,
              A = a.N,
              X = a.B;
            "flat" === T && U(_, !0, s[0], X[0], A[0], u, B, O), "flat" === e && U(_, !1, s[l - 1], X[l - 1], A[l - 1], u, B, O);
            var N, W, Q = [],
              n = F(B / 2),
              Y = "round" === T,
              d = "round" === e,
              E = s[0],
              g = k[0],
              H = X[0],
              j = A[0],
              z = s[l - 1],
              I = k[l - 1],
              t = X[l - 1],
              R = A[l - 1];
            if (Y) {
              for (v = 1; n >= v; v++) A.splice(0, 0, j), X.splice(0, 0, H), k.splice(0, 0, g), W = -v / n * u, s.splice(0, 0, g.clone().multiplyScalar(W).add(E)), Q[n - v] = C(u * u - W * W);
              l += n
            }
            if (d) {
              for (v = 1; n >= v; v++) A.push(R), X.push(t), k.push(I), W = v / n * u, s.push(I.clone().multiplyScalar(W).add(z)), Q[s.length - 1] = C(u * u - W * W);
              l += n
            }
            if (_.uv) {
              var D = 0,
                G = 0,
                p = [];
              for (S && (D = S), i = s[0], p[0] = 0, v = 1; l > v; v++) w = s[v], p[v] = i.distanceTo(w), i = w, S || (D += p[v]);
              for (N = [], v = 0; l > v; v++) G += p[v], N[v] = D ? G / D : 0
            }
            for (v = 0; l > v; v++) {
              if (w = s[v], K = X[v], y = A[v], J = m(w, K, y, Q[v] === b ? u : Q[v], B, O, N ? N[v] : V), f)
                for (var c = 0; B > c; c++) {
                  var M = f[c],
                    q = f[c + 1] || f[0],
                    Z = J[c],
                    o = J[c + 1] || J[0];
                  L(_.vs, q, M, Z, Z, o, q), _.uv && P(_.uv, q, M, Z, Z, o, q)
                }
              f = J
            }
          }
        }
      }();
    eq(H, {
      getLineLength: function (J) {
        return J[J.length - 1].length
      }, getLineOffset: function ($, B) {
        return bs($, B)
      }, getLineCacheInfo: function (w, K, $, o) {
        return jq(rs(w, K, $, o))
      }
    });
    var Rd = T.Light = function () {
      gr(Rd, this), this.s(Kr, t[Kr]), this.s(lg, "sphere"), this.s3(20, 20, 20)
    };
    Dh("Light", qn, {
      _image: "light_icon",
      _icon: "light_icon",
      onStyleChanged: function (R, l, r) {
        Rd.superClass.onStyleChanged.apply(this, arguments), R === Kr && this.s("shape3d.color", r)
      }
    });
    var Um = br.Graph3dView = function (N, o) {
        var T = this;
        T._attributes = o || H.graph3dViewAttributes, T._25I = {}, T._view = df(1, T);
        var u = T._canvas = ip(T._view);
        u.addEventListener("webglcontextlost", function (i) {
          i.preventDefault(), dl(T), T._26I = V, T._1o.texture = V, T._35O = !0
        }, !1), u.addEventListener("webglcontextrestored", function () {
          T._35O = !1, T.iv()
        }, !1), T._34O = {}, T._33O = {}, T._wireframeIndexMap = {}, T._wireframeModelMap = {}, T._polylineIndexMap = {}, T._polylineIndexMap = {}, T._8O = [], T._7O = Up(), T._6O = Up(), T._1o = new ae(T), T._30O = new Xi(T), T._31O = new mj(T), T._32O = new nh(T), T._33Q = !0, T._eye = jh(H.graph3dViewEye), T._center = jh(H.graph3dViewCenter), T._up = jh(H.graph3dViewUp), T._lightChanged = !1, T._59O = [], T._spots = [], T._dirs = [], T.dm(N ? N : new Ie), T.setInteractors([new yb(T)])
      },
      mp = {
        fogDisabled: 1,
        dashDisabled: 1,
        batchColorDisabled: 1,
        batchBlendDisabled: 1,
        batchBrightnessDisabled: 1
      };
    Hg("Graph3dView", d, {
      ms_v: 1,
      ms_tip: 1,
      ms_gv: 1,
      ms_dm: 1,
      ms_lp: 1,
      ms_fire: 1,
      ms_sm: 1,
      _51o: 1,
      ms_ac: ["devicePixelRatio", "boundaries", "moveStep", "rotateStep", "sizeEditableFunc", "rotationEditableFunc", "editableFunc", "rotatable", "zoomable", "pannable", "walkable", "resettable", "mouseRoamable", Tp, xi, "firstPersonMode", pr, "movableFunc", "gridVisible", "gridSize", "gridGap", "gridColor", "originAxisVisible", "centerAxisVisible", "axisXColor", "axisYColor", "axisZColor", "editSizeColor", "rectSelectable", "rectSelectBackground", "headlightRange", "headlightColor", "headlightIntensity", "headlightDisabled", "ortho", "orthoWidth", "fovy", "near", "far", Nn, km, "up", "aspect", "fogDisabled", "fogColor", "fogNear", "fogFar", "dashDisabled", "batchColorDisabled", "batchBlendDisabled", "batchBrightnessDisabled"],
      _editable: !1,
      _devicePixelRatio: b,
      _boundaries: b,
      _moveStep: H.graph3dViewMoveStep,
      _rotateStep: H.graph3dViewRotateStep,
      _pannable: H.graph3dViewPannable,
      _rotatable: H.graph3dViewRotatable,
      _walkable: H.graph3dViewWalkable,
      _resettable: H.graph3dViewResettable,
      _zoomable: H.graph3dViewZoomable,
      _firstPersonMode: H.graph3dViewFirstPersonMode,
      _mouseRoamable: H.graph3dViewMouseRoamable,
      _gridVisible: H.graph3dViewGridVisible,
      _gridSize: H.graph3dViewGridSize,
      _gridGap: H.graph3dViewGridGap,
      _gridColor: H.graph3dViewGridColor,
      _originAxisVisible: H.graph3dViewOriginAxisVisible,
      _centerAxisVisible: H.graph3dViewCenterAxisVisible,
      _axisXColor: H.graph3dViewAxisXColor,
      _axisYColor: H.graph3dViewAxisYColor,
      _axisZColor: H.graph3dViewAxisZColor,
      _ortho: H.graph3dViewOrtho,
      _orthoWidth: H.graph3dViewOrthoWidth,
      _fovy: H.graph3dViewFovy,
      _near: H.graph3dViewNear,
      _far: H.graph3dViewFar,
      _headlightColor: H.graph3dViewHeadlightColor,
      _headlightIntensity: H.graph3dViewHeadlightIntensity,
      _headlightRange: H.graph3dViewHeadlightRange,
      _headlightDisabled: H.graph3dViewHeadlightDisabled,
      _rectSelectable: H.graph3dViewRectSelectable,
      _rectSelectBackground: H.graph3dViewRectSelectBackground,
      _editSizeColor: H.graph3dViewEditSizeColor,
      _autoMakeVisible: ih,
      _fogDisabled: H.graph3dViewFogDisabled,
      _fogColor: H.graph3dViewFogColor,
      _fogNear: H.graph3dViewFogNear,
      _fogFar: H.graph3dViewFogFar,
      _dashDisabled: H.graph3dViewDashDisabled,
      _batchColorDisabled: H.graph3dViewBatchColorDisabled,
      _batchBlendDisabled: H.graph3dViewBatchBlendDisabled,
      _batchBrightnessDisabled: H.graph3dViewBatchBrightnessDisabled,
      setEye: function (B, g, y) {
        1 === arguments.length && (g = B[1], y = B[2], B = B[0]);
        var X = this._eye;
        X[0] = B, X[1] = g, X[2] = y, this.fp(Nn, V, X)
      }, setCenter: function (Z, v, b) {
        1 === arguments.length && (v = Z[1], b = Z[2], Z = Z[0]);
        var I = this._center;
        I[0] = Z, I[1] = v, I[2] = b, this.fp(km, V, I)
      }, setUp: function (B, b, D) {
        1 === arguments.length && (b = B[1], D = B[2], B = B[0]);
        var q = this._up;
        q[0] = B, q[1] = b, q[2] = D, this.fp("up", V, q)
      }, isTransparentMask: function (w) {
        return w.s("transparent.mask")
      }, getAspect: function () {
        var I = this,
          x = I._aspect;
        return x ? x : I.getWidth() / I.getHeight()
      }, getCanvas: function () {
        return this._canvas
      }, setDataModel: function (y) {
        var N = this,
          _ = N._dataModel,
          q = N._3o;
        _ !== y && (_ && (_.umm(N.handleDataModelChange, N), _.umd(N.handleDataPropertyChange, N), q || _.sm().ums(N._16o, N)), N._dataModel = y, y.mm(N.handleDataModelChange, N), y.md(N.handleDataPropertyChange, N), q ? q._21I(y) : y.sm().ms(N._16o, N), N.invalidateAll(!0), N.invalidateLight(), N.fp(pj, _, y))
      }, handleDataPropertyChange: function (v) {
        var M = v.data;
        this.invalidateData(M), Ge(M) && "s:light.type" === v.property && this.invalidateLight()
      }, invalidateLight: function () {
        this._lightChanged || (this._lightChanged = !0, this.iv())
      }, onPropertyChanged: function (s) {
        var $ = this,
          y = s.property;
        $.iv(), $._18Q = V, "eye" === y ? $._33Q = !0 : "devicePixelRatio" === y ? $._42(V, $._devicePixelRatio || Ah) : mp[y] && dl($)
      }, _5O: function (G) {
        var l = G._22Q();
        return l ? new l(this, G) : V
      }, getData3dUI: function (F) {
        var z = this._25I[F._id];
        return z === b && (z = this._5O(F), this._25I[F._id] = z), z
      }, invalidateAll: function (y) {
        var E = this;
        if (y) {
          for (var $ in E._25I) {
            var K = E._25I[$];
            K && K.dispose()
          }
          E._25I = {}, E.iv(), $l(E)
        } else E.dm().each(function (H) {
          E.invalidateData(H)
        })
      }, invalidateSelection: function () {
        var j = this;
        j.sm().each(function (r) {
          j.invalidateData(r)
        })
      }, invalidateData: function (C) {
        var x = this,
          l = x.getData3dUI(C);
        l && (l.iv(), x.iv()), $l(x, C)
      }, invalidateBatch: function (Z) {
        var i = this,
          M = i._33O,
          f = M[Z],
          z = [],
          l = {};
        if (f) {
          f.ds.forEach(function (H) {
            var U = i.getData3dUI(H);
            U && U.iv(), delete i._34O[H._id], z.push(H._id)
          }), delete M[Z];
          for (var J, F, N, T, I, p, W, D, m, e = 0; 2 > e; e++) {
            var o = i[["_wireframeModelMap", "_polylineModelMap"][e]],
              s = i[["_wireframeIndexMap", "_polylineIndexMap"][e]];
            for (l = {}, D = 0; D < z.length; D++) {
              var c = s[z[D]];
              if (c) {
                delete s[z[D]], m = c.batch, J = o[m];
                var Y = c.begin,
                  K = c.size,
                  j = 3 * Y,
                  q = 3 * K,
                  V = 4 * Y,
                  u = 4 * K;
                for (F = J.ds, N = J.vs, T = J.cs, I = J.ps, p = J.ls, W = c.index, J.invalidate = !0, F[W] = b, W = j; j + q > W; W++) N[W] = b;
                for (W = V; V + u > W; W++) T[W] = b;
                for (W = V; V + u > W; W++) I[W] = b;
                if (p)
                  for (W = j; j + q > W; W++) p[W] = b;
                l[m] = !0
              }
            }
            for (m in l) {
              J = o[m], F = J.ds, N = J.vs, T = J.cs, I = J.ps, p = J.ls;
              var t = [];
              for (W = 0; W < F.length; W++) F[W] !== b && t.push(F[W]);
              if (0 === t.length) delete o[m];
              else {
                for (J.ds = t, t = [], W = 0; W < N.length; W++) N[W] !== b && t.push(N[W]);
                for (J.vs = t, t = [], W = 0; W < T.length; W++) T[W] !== b && t.push(T[W]);
                for (J.cs = t, t = [], W = 0; W < I.length; W++) I[W] !== b && t.push(I[W]);
                if (J.ps = t, p) {
                  for (t = [], W = 0; W < p.length; W++) p[W] !== b && t.push(p[W]);
                  J.ls = t
                }
              }
            }
          }
          i.iv()
        }
      }, handleDataModelChange: function (c) {
        var Q = this,
          m = c.kind,
          C = c.data;
        if ("add" === m) Q.invalidateData(C), fb(C) && C.getEdgeGroup() && C.getEdgeGroup().eachSiblingEdge(Q.invalidateData, Q), Ge(C) && Q.invalidateLight();
        else if (m === rb) {
          var l = C._id,
            L = Q._25I[l];
          L && (L.dispose(), delete Q._25I[l], Q.iv()), C === Q._currentSubGraph && Q.setCurrentSubGraph(V), $l(Q, C), Ge(C) && Q.invalidateLight()
        } else m === hq && (Q.invalidateAll(!0), Q.setCurrentSubGraph(V), $l(Q), Q.invalidateLight())
      }, toCanvas: function (F) {
        var w = this,
          R = w.getGL();
        if (w.validate(), F) {
          var k = R.getParameter(R.COLOR_CLEAR_VALUE);
          gd(R, F)
        }
        w._42(V, 1);
        var Y = w.getWidth(),
          r = w.getHeight(),
          v = new Uint8Array(4 * Y * r),
          B = ip(),
          H = B.getContext("2d");
        R.readPixels(0, 0, Y, r, R.RGBA, R.UNSIGNED_BYTE, v), We(B, Y, r, 1);
        for (var E = H.getImageData(0, 0, Y, r), G = E.data, N = 0; N < G.length; N += 4) {
          var K = N / 4,
            b = M(K / Y),
            a = K - b * Y;
          K = 4 * ((r - 1 - b) * Y + a), G[K] = v[N], G[K + 1] = v[N + 1], G[K + 2] = v[N + 2], G[K + 3] = v[N + 3]
        }
        return H.putImageData(E, 0, 0), F && gd(R, k), w._42(V, w._devicePixelRatio || Ah), B
      }, toDataURL: function (P, h) {
        var n = this,
          A = n.getGL();
        if (n.validate(), P) {
          var Z = A.getParameter(A.COLOR_CLEAR_VALUE);
          gd(A, P)
        }
        n._42(V, 1);
        var v = n._canvas.toDataURL(h || "image/png", 1);
        return P && gd(A, Z), n._42(V, n._devicePixelRatio || Ah), v
      }, getGL: function () {
        var k = this,
          N = k._26I,
          s = k._prg;
        if (!N) try {
          k._2O = {}, N = k._26I = k._canvas.getContext("webgl", k._attributes) || k._canvas.getContext("experimental-webgl", k._attributes), N._emptyTexture = Ol(N), k._buffer = {
            vs: $d(N),
            ns: $d(N),
            is: $d(N),
            uv: $d(N),
            batchColor: $d(N),
            batchBlend: $d(N),
            batchBrightness: $d(N),
            lineDistance: $d(N)
          }, k._1O = ce(N);
          var g = k._cube = {
            vs: $d(N),
            ns: $d(N),
            is: $d(N),
            uv: $d(N)
          };
          sr(N, g.vs, Vj), sr(N, g.ns, Yf), sr(N, g.uv, vk), Vl(N, g.is, Xm)
        } catch (u) {}
        if (N && !s) {
          if (s = k._prg = N.createProgram(), !s) return V;
          var B = k._dirs.length,
            $ = k._spots.length,
            v = k._59O.length,
            e = ["uPMatrix", "uMVMatrix", "uNMatrix", "uViewMatrix", "aNormal", "aUv", "uOffsetScale", "uDiffuse", "uBlend", "uBlendColor", "uBrightness", "uPartOpacity", "uTransparent", "uTexture", "uSampler", "uDiscardSelectable", "uFix", "uPick", "uReverseFlip", "uFixPickReverseColor", "uBatchBrightness", "aBatchBrightness", "uBatchColor", "aBatchColor", "uBatchBlend", "aBatchBlend", "uDash", "aLineDistance", "uDashDistance", "uDashGapDistance", "uLight", "uHeadlightRange", "uHeadlightColor", "uFogColor", "uFogNear", "uFogFar"];
          B && e.push("uDirColor", "uDirPosition"), $ && e.push("uSpotColor", "uSpotRange", "uSpotAngle", "uSpotExponent", "uSpotPosition", "uSpotCenter"), v && e.push("uPointColor", "uPointRange", "uPointPosition"), gd(N, [0, 0, 0, 0]), N.clearDepth(1), N.enable(N.DEPTH_TEST), N.depthFunc(N.LEQUAL), N.enable(N.BLEND), N.blendFunc(N.SRC_ALPHA, N.ONE_MINUS_SRC_ALPHA), _m || (Qm = Nq(Qm.substring(0, Qm.indexOf("^#"))), yp = Nq(yp), _m = !0);
          var F = ["#define MAX_DIR " + B, "#define MAX_SPOT " + $, "#define MAX_POINT " + v, k._fogDisabled ? "" : "#define FOG", k._dashDisabled ? "" : "#define DASH", k._batchColorDisabled ? "" : "#define BATCHCOLOR", k._batchBlendDisabled ? "" : "#define BATCHBLEND", k._batchBrightnessDisabled ? "" : "#define BATCHBRIGHTNESS", ""].join("\n"),
            w = nn(N, s, N.VERTEX_SHADER, Qm.replace("PREFIX", F)),
            z = nn(N, s, N.FRAGMENT_SHADER, yp.replace("PREFIX", F));
          Q ? e.push("aPosition") : (s.aPosition = 0, N.bindAttribLocation(s, 0, "aPosition")), N.linkProgram(s), e.forEach(function (l) {
            s[l] = /^u/.test(l) ? N.getUniformLocation(s, l) : N.getAttribLocation(s, l)
          }), N.useProgram(s), N.deleteShader(w), N.deleteShader(z)
        }
        return N
      }, getBrightness: function (v) {
        var Y = v.s("brightness"),
          R = this.isSelected(v) ? v.s("select.brightness") : V;
        return Y == V ? R : R == V ? Y : Y * R
      }, getWireframe: function (y) {
        var u = y.s("wf.visible"),
          w = y.s("wf.width");
        return u === !0 || w > 0 && "selected" === u && this.isSelected(y) ? {
          color: y.s("wf.color"),
          width: w,
          "short": y.s("wf.short"),
          mat: y.s("wf.mat")
        } : void 0
      }, getBodyColor: function (l) {
        return l.s("body.color")
      }, getMat: function (D) {
        return D.getMat ? D.getMat() : D.s("mat")
      }, getFaceMat: function (i, R) {
        return i.getFaceMat ? i.getFaceMat(R) : i.s(R + ".mat")
      }, getFaceBlend: function (A, U) {
        return A.s(U + ".blend") || A.s("all.blend")
      }, getFaceColor: function (x, A) {
        return x.s(A + ".color") || x.s("all.color")
      }, getFaceImage: function (C, $) {
        return C.s($ + ".image") || C.s("all.image")
      }, getFaceDiscardSelectable: function (w, S) {
        var f = w.s(S + ".discard.selectable");
        return f == V ? w.s("all.discard.selectable") : f
      }, getFaceUv: function (f, L) {
        return f.s(L + ".uv") || f.s("all.uv")
      }, getFaceUvOffset: function (R, m) {
        return R.s(m + ".uv.offset") || R.s("all.uv.offset")
      }, getFaceUvScale: function (j, N) {
        return j.s(N + ".uv.scale") || j.s("all.uv.scale")
      }, getFaceLight: function (T, C) {
        var L = T.s(C + ".light");
        return L == V ? T.s("all.light") : L
      }, getFaceVisible: function (O, z) {
        var J = O.s(z + ".visible");
        return J == V ? O.s("all.visible") : J
      }, getFaceOpacity: function (H, K) {
        var n = H.s(K + ".opacity");
        return n == V ? H.s("all.opacity") : n
      }, getFaceTransparent: function (L, l) {
        var Y = L.s(l + ".transparent");
        return Y == V ? L.s("all.transparent") : Y
      }, getFaceReverseColor: function (q, A) {
        return q.s(A + ".reverse.color") || q.s("all.reverse.color")
      }, getFaceReverseFlip: function (m, H) {
        var b = m.s(H + ".reverse.flip");
        return b == V ? m.s("all.reverse.flip") : b
      }, getFaceReverseCull: function (b, T) {
        var Y = b.s(T + ".reverse.cull");
        return Y == V ? b.s("all.reverse.cull") : Y
      }, getTextureMap: function () {
        return this._2O
      }, deleteTexture: function (K) {
        var M = this,
          Q = M._2O[K];
        Q && (delete M._2O[K], M.getGL().deleteTexture(Q))
      }, getTexture: function (N, G) {
        if (!N) return V;
        var U = this,
          F = U.getGL(),
          m = U._2O[N];
        if (!m) {
          var a = ye(N);
          if (a)
            if (a.tagName) {
              if (a.dynamic) return ce(F, a, U._1O);
              m = U._2O[N] = ce(F, a)
            } else {
              var M = lc(a, G),
                i = Ec(a, G);
              if (M >= 1 && i >= 1) {
                var I = ui(M, i);
                return ts(I, a, 0, 0, M, i, G, U), I.restore(), ce(F, ln, U._1O)
              }
            }
        }
        return m
      }, redraw: function () {
        this.iv()
      }, validateImpl: function () {
        var Y = this;
        if (Y._lightChanged) {
          Y._lightChanged = !1;
          var v = [],
            I = [],
            t = [];
          Y.dm().each(function (z) {
            if (Ge(z)) {
              var T = z.s("light.type");
              T === Bq ? v.push(z) : T === bn ? I.push(z) : T === gp && t.push(z)
            }
          }), (v.length !== Y._59O.length || I.length !== Y._spots.length || t.length !== Y._dirs.length) && dl(Y), Y._59O = v, Y._spots = I, Y._dirs = t
        }
        Y._42(), Y._1o.iv()
      }, _42: function (a, y) {
        var A = this;
        if (!A._35O && (!Tm || Fo(Tm))) {
          var D, s;
          a && (a instanceof qn ? s = a : D = a);
          var J = A._canvas,
            l = A.getWidth(),
            N = A.getHeight(),
            g = A.getGL(),
            C = A._prg;
          if (g) {
            if (y ? a || We(J, l, N, y) : (y = A._devicePixelRatio || Ah, a || l === J.clientWidth && N === J.clientHeight || We(J, l, N, y)), g.viewport(0, 0, l * y, N * y), A._81O = V, g.clear(g.COLOR_BUFFER_BIT | g.DEPTH_BUFFER_BIT), Hc(g, C.uBrightness, 1), Hc(g, C.uOpacity, 1), Hc(g, C.uPartOpacity, 1), g._picking = !!a, Hc(g, C.uPick, !!a), Hc(g, C.uTexture, !1), Hc(g, C.uFix, !1), Hc(g, C.uTransparent, !1), Hc(g, C.uBatchColor, !1), Hc(g, C.uBatchBlend, !1), Hc(g, C.uBatchBrightness, !1), a || (nb(A, g, C), A._fogDisabled || (Hc(g, C.uFogColor, A._fogColor), Hc(g, C.uFogNear, A._fogNear), Hc(g, C.uFogFar, A._fogFar))), ve(g, C.aPosition), ve(g, C.aNormal), Lm(g, C.aUv), Lm(g, C.aBatchColor), Lm(g, C.aBatchBlend), Lm(g, C.aBatchBrightness), Lm(g, C.aLineDistance), Hc(g, C.uPMatrix, Zk(A)), Hc(g, C.uViewMatrix, Nh(A, A._7O)), s) {
              var W = g.getParameter(g.COLOR_CLEAR_VALUE);
              g.clearColor(0, 0, 0, 0), g.disable(g.BLEND), Lm(g, C.aNormal), sr(g, A._cube.vs, V, C.aPosition), Vl(g, A._cube.is), Lo(s, A, pg, 0), Lo(s, A, fk, 6), Lo(s, A, Hi, 12), Lo(s, A, Xr, 18), Lo(s, A, Ud, 24), Lo(s, A, Hb, 30), ve(g, C.aNormal), gd(g, W)
            } else if (D) {
              D.value = 2;
              var W = g.getParameter(g.COLOR_CLEAR_VALUE);
              g.clearColor(0, 0, 0, 0), g.disable(g.BLEND), A._95I(g, C, D), ds(A, D), Jo(A, A._polylineModelMap, D), Jo(A, A._wireframeModelMap, D), Hc(g, C.uTransparent, !0), A._95I(g, C, D, !0), ds(A, D, !0), Jo(A, A._polylineModelMap, D, !0), Jo(A, A._wireframeModelMap, D, !0), Hc(g, C.uTransparent, !1), g.disable(g.DEPTH_TEST), A._30O._42(g, C, D), g.enable(g.DEPTH_TEST), gd(g, W)
            } else g.disable(g.BLEND), A._31O._42(g, C), A._95I(g, C), ds(A), Jo(A, A._polylineModelMap), Jo(A, A._wireframeModelMap), g.enable(g.BLEND), g.depthMask(!1), Hc(g, C.uTransparent, !0), A._95I(g, C, V, !0), ds(A, V, !0), Jo(A, A._polylineModelMap, V, !0), Jo(A, A._wireframeModelMap, V, !0), Hc(g, C.uTransparent, !1), g.depthMask(!0), g.disable(g.BLEND), g.disable(g.DEPTH_TEST), A._32O._42(g, C), A._30O._42(g, C), g.enable(g.DEPTH_TEST);
            sr(g, V), Vl(g, V), A._33Q = !1
          }
        }
      }, _95I: function (q, V, Q, S) {
        var $ = this,
          v = function (x) {
            return S ? x : !x
          };
        $.dm().each(function (m) {
          if ($.isVisible(m) && (!E || Y)) {
            if (!Q && $.isTransparentMask(m)) return;
            var G = $.getData3dUI(m);
            G && G._42(q, V, Q, v)
          }
        })
      }, getLogicalPoint: function (E) {
        return jc(E, this._canvas)
      }, getHitFaceInfo: function (h) {
        h.target && (h = this.lp(h));
        var W = this.getDataInfoAt(h);
        if (W) {
          var l = this._1o.face(W.data, hd(h.x, h.y));
          if (l) return {
            data: W.data,
            face: l
          }
        }
        return V
      }, getDataAt: function (H) {
        var G = this.getDataInfoAt(H);
        return G ? G.data : V
      }, getDataInfoAt: function (p, Y) {
        return p.target && (p = this.lp(p)), this._1o.get(hd(p.x, p.y, Y), !0)
      }, getDatasInRect: function (H) {
        return this._1o.get(H)
      }, setEditable: function (R) {
        var D = this,
          F = D._editable;
        D._editable = R, this.fp(cn, F, R)
      }, isEditable: function (d) {
        var I = this;
        return I._editable ? Hl(d) ? d.s("3d.editable") ? I._editableFunc ? I._editableFunc(d) : !0 : !1 : !1 : !1
      }, isSelectable: function (V) {
        return V.s("3d.selectable") && this.sm().isSelectable(V)
      }, isMovable: function (d) {
        var j = this;
        return fb(d) && d.getStyle(gf) !== Yi ? !1 : d.s("3d.movable") ? j._movableFunc ? j._movableFunc(d) : !0 : !1
      }, isSizeEditable: function (R) {
        return Hl(R) ? this._sizeEditableFunc ? this._sizeEditableFunc(R) : !0 : !1
      }, isRotationEditable: function (R) {
        return Hl(R) && R.IRotatable !== !1 ? this._rotationEditableFunc ? this._rotationEditableFunc(R) : !0 : !1
      }, handleDelete: function () {
        this._editable && this.removeSelection()
      }, zoomIn: function (o) {
        this.setZoom(Ld, o)
      }, zoomOut: function (f) {
        this.setZoom(1 / Ld, f)
      }, setZoom: function (C, D) {
        if (1 !== C) {
          var l = this;
          if (l._ortho) return l.setOrthoZoom(C, D), void 0;
          l._14o && l._14o.stop(!0);
          var U = 1 / C,
            n = l._eye,
            p = l._center,
            S = p[0] + (n[0] - p[0]) * U - n[0],
            r = p[1] + (n[1] - p[1]) * U - n[1],
            x = p[2] + (n[2] - p[2]) * U - n[2];
          if (!(Pq(n, p) < l._moveStep && 1 > U)) {
            if (D = sg(D)) {
              var M = jh(n);
              return D.action = function (e) {
                l.fi({
                  kind: l._zooming ? "betweenZoom" : "beginZoom"
                }), l._zooming = 1, n[0] = M[0] + S * e, n[1] = M[1] + r * e, n[2] = M[2] + x * e, l.fp(Nn, V, n)
              }, D._37o = function () {
                delete l._14o, delete l._zooming, l.fi({
                  kind: "endZoom"
                }), l.onZoomEnded()
              }, l._14o = Np(D)
            }
            n[0] += S, n[1] += r, n[2] += x, l.fp(Nn, V, n)
          }
        }
      }, setOrthoZoom: function (k, w) {
        if (1 !== k) {
          var p = this;
          p._14o && p._14o.stop(!0);
          var s = p._orthoWidth,
            l = s / k - s;
          if (!(s < p._moveStep && k > 1)) return (w = sg(w)) ? (w.action = function (g) {
            p.fi({
              kind: p._zooming ? "betweenZoom" : "beginZoom"
            }), p._zooming = 1, p.setOrthoWidth(s + l * g)
          }, w._37o = function () {
            delete p._14o, delete p._zooming, p.fi({
              kind: "endZoom"
            }), p.onZoomEnded()
          }, p._14o = Np(w)) : (p.setOrthoWidth(s / k), void 0)
        }
      }, getPositionInfo: function (h) {
        var a = this,
          o = a._eye,
          C = a._center,
          v = a.getAspect(),
          u = h ? dj(As(C, o, !0), As(h, o)) : Pq(o, C);
        if (a._ortho) {
          var f = a._orthoWidth;
          return {
            length: u,
            height: f / v,
            width: f
          }
        }
        var _ = 2 * Z(a._fovy / 2) * u;
        return {
          length: u,
          height: _,
          width: _ * v
        }
      }, getCenterInfo: function () {
        var M = this;
        return M._81O || (M._81O = M.getPositionInfo()), jh(M._81O)
      }, rotate: function ($, j, Y, e) {
        var t = this;
        if ($ || j) {
          e == V && (e = t._firstPersonMode), t._88O && t._88O.stop(!0);
          var Q = t._center,
            M = t._eye,
            d = t.getCenterInfo().length,
            U = e ? Q : M,
            m = e ? M : Q,
            T = As(U, m),
            r = f(T[0], T[2]),
            J = f(C(T[0] * T[0] + T[2] * T[2]), T[1]),
            l = e ? km : Nn;
          return e && (j = -j), (Y = sg(Y)) ? (Y.action = function (N) {
            t.fi({
              kind: t._rotating ? "betweenRotate" : "beginRotate"
            }), t._rotating = 1;
            var L = r + $ * N,
              Z = J + j * N;
            Z = Yg(Z), T[0] = d * A(Z) * A(L), T[1] = d * X(Z), T[2] = d * A(Z) * X(L), U[0] = m[0] + T[0], U[1] = m[1] + T[1], U[2] = m[2] + T[2], t.fp(l, V, U)
          }, Y._37o = function () {
            delete t._88O, delete t._rotating, t.fi({
              kind: "endRotate"
            }), t.onRotateEnded()
          }, t._88O = Np(Y)) : (r += $, J += j, J = Yg(J), T[0] = d * A(J) * A(r), T[1] = d * X(J), T[2] = d * A(J) * X(r), U[0] = m[0] + T[0], U[1] = m[1] + T[1], U[2] = m[2] + T[2], t.fp(l, V, U), void 0)
        }
      }, pan: function (M, I, f, l) {
        if (M || I) {
          var d = this;
          l == V && (l = d._firstPersonMode), d._89O && d._89O.stop(!0);
          var v = Nh(d),
            i = [v[0] * M, v[4] * M, v[8] * M],
            N = [v[1] * I, v[5] * I, v[9] * I],
            J = i[0] + N[0],
            y = i[1] + N[1],
            p = i[2] + N[2],
            Y = d._center,
            _ = d._eye;
          if (l) {
            var q = ue(d.getBoundaries(), _[0], _[2], _[0] + J, _[2] + p, C(J * J + p * p));
            J = q[0], p = q[1]
          }
          if (f = sg(f)) {
            var k = jh(_),
              F = jh(Y);
            return f.action = function (Q) {
              d.fi({
                kind: d._panning ? "betweenPan" : "beginPan"
              }), d._panning = 1, Y[0] = F[0] + J * Q, Y[1] = F[1] + y * Q, Y[2] = F[2] + p * Q, _[0] = k[0] + J * Q, _[1] = k[1] + y * Q, _[2] = k[2] + p * Q, d.fp(Nn, V, _), d.fp(km, V, Y)
            }, f._37o = function () {
              delete d._89O, delete d._panning, d.fi({
                kind: "endPan"
              }), d.onPanEnded()
            }, d._89O = Np(f)
          }
          Y[0] += J, Y[1] += y, Y[2] += p, _[0] += J, _[1] += y, _[2] += p, d.fp(Nn, V, _), d.fp(km, V, Y)
        }
      }, walk: function (A, T, M) {
        if (A) {
          var N = this;
          M == V && (M = N._firstPersonMode), N._90O && N._90O.stop(!0);
          var J = N._center,
            i = N._eye,
            d = As(J, i, !0);
          if (M) {
            var U = ue(N.getBoundaries(), i[0], i[2], i[0] + d[0] * A, i[2] + d[2] * A, G(A));
            if (A = Pq(U), !A) return;
            d = [U[0] / A, 0, U[1] / A]
          }
          if (T = sg(T)) {
            var r = jh(i),
              Q = jh(J);
            return T.action = function (n) {
              N.fi({
                kind: N._walking ? "betweenWalk" : "beginWalk"
              }), N._walking = 1;
              var u = A * n;
              i[0] = r[0] + d[0] * u, i[1] = r[1] + d[1] * u, i[2] = r[2] + d[2] * u, J[0] = Q[0] + d[0] * u, J[1] = Q[1] + d[1] * u, J[2] = Q[2] + d[2] * u, N.fp(Nn, V, i), N.fp(km, V, J)
            }, T._37o = function () {
              delete N._90O, delete N._walking, N.fi({
                kind: "endWalk"
              }), N.onWalkEnded()
            }, N._90O = Np(T)
          }
          i[0] += d[0] * A, i[1] += d[1] * A, i[2] += d[2] * A, J[0] += d[0] * A, J[1] += d[1] * A, J[2] += d[2] * A, N.fp(Nn, V, i), N.fp(km, V, J)
        }
      }, handleScroll: function (S, i) {
        S.preventDefault();
        var f = this,
          N = f._moveStep;
        f.isFirstPersonMode() ? f.isPannable() && f.pan(0, i > 0 ? N : -N) : f.isZoomable() && f.setZoom(0 > i ? 1 / Fq : Fq)
      }, handlePinch: function (H, A) {
        this.isZoomable() && this.setZoom(A > H ? 1 / vq : vq)
      }, reset: function () {
        this.setCenter(H.graph3dViewCenter), this.setEye(H.graph3dViewEye), this.setUp(H.graph3dViewUp)
      }, moveSelection: function (Z, z, G) {
        var b, S = this,
          t = S.dm();
        t && (b = t.getHistoryManager()), b && b.beginInteraction(), Qq(this.sm().toSelection(this.isMovable, this), Z, z, G), b && b.endInteraction()
      }, getMoveMode: function (O, c) {
        var o = c.s("3d.move.mode");
        if (o) return o;
        var J = "88",
          d = "89",
          L = "90";
        return zk(O) || $f[J] && $f[d] && $f[L] ? "xyz" : $f[J] && $f[d] ? "xy" : $f[J] && $f[L] ? "xz" : $f[d] && $f[L] ? "yz" : $f[J] ? "x" : $f[d] ? "y" : $f[L] ? "z" : "xz"
      }, handleTick: function () {
        var g = this,
          W = !1,
          M = g._moveStep,
          l = M,
          $ = !1,
          B = !0,
          _ = g._rotateStep * (B ? -1 : 1);
        if (g.isWalkable() || (l = 0), g.isPannable() || (M = 0), g.isRotatable() || (_ = 0), g._32Q) {
          var U = (Vf() - g._32Q) / 50;
          l *= U, M *= U, _ *= U
        }
        g._31Q && (ul(g._31Q), delete g._31Q, delete g._32Q), _i() && (W = !0, g.pan(-M, 0, $, B)), Rn() && (W = !0, g.pan(M, 0, $, B)), tk() && (W = !0, zk() ? g.pan(0, M, $, B) : g.walk(l, $, B)), rp() && (W = !0, zk() ? g.pan(0, -M, $, B) : g.walk(-l, $, B)), bj() && (W = !0, g.rotate(-_, 0, $, B)), Lr() && (W = !0, g.rotate(_, 0, $, B)), hb() && (W = !0, g.rotate(0, -_ / 2, $, B)), ig() && (W = !0, g.rotate(0, _ / 2, $, B)), W && (g._32Q = Vf(), g._31Q = lo(g.handleTick, g))
      }, handleKeyDown: function (l) {
        var q = this;
        !$g(l) && hs[l.keyCode] ? q.handleTick() : Vk(l) ? q.selectAll() : gb(l) ? q.handleDelete(l) : tq(l) && this.isResettable() && q.reset()
      }, checkDoubleClickOnNote: function (f, p, S) {
        var C = this;
        if (S === Ug) {
          if (p.s("note.toggleable")) return p.s(Ij, !p.s(Ij)), C.fi({
            kind: "toggleNote",
            event: f,
            data: p,
            part: S
          }), !0
        } else if (S === Mq && p.s("note2.toggleable")) return p.s(vm, !p.s(vm)), C.fi({
          kind: "toggleNote2",
          event: f,
          data: p,
          part: S
        }), !0;
        return !1
      }, checkDoubleClickOnRotation: function (j, Y, h) {
        return h === pf ? (Y.setRotationX(0), !0) : h === Qh ? (Y.setRotationY(0), !0) : h === Jq ? (Y.setRotationZ(0), !0) : !1
      }, onRotateEnded: function () {}, onWalkEnded: function () {}, toViewPosition: function (k) {
        var Z = this,
          I = Z.getWidth() / 2,
          L = Z.getHeight() / 2,
          O = Z._18Q;
        return O || (O = Zk(Z), Z._18Q = eh(O, O, Nh(Z))), k = ml([k[0], k[1], k[2], 1], O), {
          x: I + I * k[0] / k[3],
          y: L - L * k[1] / k[3]
        }
      }, getHitPosition: function (L, w, b) {
        var j = this,
          Z = j.getWidth(),
          S = j.getHeight(),
          G = L.target ? j.lp(L) : L,
          x = G.x - Z / 2,
          d = G.y - S / 2,
          O = j.getCenterInfo(),
          M = Nh(j);
        w = w ? w : [0, 0, 0], b = b ? b : [0, 1, 0], x = x / Z * O.width, d = -1 * d / S * O.height;
        var N = [M[0] * x, M[4] * x, M[8] * x],
          y = [M[1] * d, M[5] * d, M[9] * d],
          f = [N[0] + y[0], N[1] + y[1], N[2] + y[2]],
          V = j.getCenter(),
          T = Rl(j, w, b, [f[0] + V[0], f[1] + V[1], f[2] + V[2]]);
        return T ? T : [0, 0, 0]
      }, getLineLength: function (C) {
        this.validate();
        var N = this.getData3dUI(C);
        if (N && N.getCache) {
          var w = N.getCache();
          if (w) return w[w.length - 1].length
        }
        return 0
      }, getLineOffset: function (X, v) {
        this.validate();
        var m = this.getData3dUI(X);
        if (m && m.getCache) {
          var c = m.getCache();
          if (c) return bs(c, v)
        }
        return V
      }, isLabelVisible: function () {
        return !0
      }, isNoteVisible: function () {
        return !0
      }
    });
    var qg = br.Interactor = function (G) {
      this.gv = G
    };
    Hg("Interactor", d, {
      ms_listener: 1,
      getView: function () {
        return this.gv.getView()
      }, setUp: function () {
        this.addListeners()
      }, tearDown: function () {
        this.removeListeners()
      }
    });
    var yb = br.DefaultInteractor = function (P) {
      gr(yb, this, [P])
    };
    Hg("DefaultInteractor", qg, {
      handle_contextmenu: function (Y) {
        gk(Y)
      }, handle_mousewheel: function (b) {
        this.gv.handleScroll(b, b.wheelDelta / 40)
      }, handle_DOMMouseScroll: function (U) {
        2 === U.axis && this.gv.handleScroll(U, -U.detail)
      }, handle_keydown: function (a) {
        this.gv.handleKeyDown(a)
      }, handle_mousedown: function (n) {
        this.handle_touchstart(n)
      }, handle_touchstart: function (P) {
        gk(P);
        var X = this,
          E = X.gv,
          D = co(P),
          H = E.getDataInfoAt(P),
          L = H ? H.data : V,
          c = H ? H.part : V,
          G = E.sm(),
          C = Tk(P),
          x = tr(P);
        E.setFocus(P) && (X._62O = V, X._57I = V, L ? $g(P) ? G.co(L) ? G.rs(L) : G.as(L) : G.co(L) || G.ss(L) : D && ($g(P) ? E.isRectSelectable() && (X._62O = yc) : X._57I = Dr(P)), X._31Q && (ul(X._31Q), delete X._31Q, delete X._32Q), X._62O || (E.isFirstPersonMode() && (zk(P) || x > 2 ? X._62O = "pan" : E.isMouseRoamable() || h ? (X._62O = "roaming", X.foward = C && co(P), X._32Q = Vf(), X._31Q = lo(X.tick, X)) : D || (X._62O = "roaming")), X._62O || (D && C && aq[c] ? (X._62O = c, X.p3 = L.p3()) : D && C && Hl(L) && E.isSelected(L) && E.isMovable(L) ? (X._62O = "move", X.p3 = L.p3(), X.movedata = L) : h && (x > 2 ? X._62O = "pan" : 2 === x && (X.dist = dh(P), X._62O = "pinch")))), X.point = E.lp(P), sp(X, P), Rq(P) ? E.handleDoubleClick(P, L, c) : E.handleClick(P, L, c))
      }, tick: function () {
        var w = this,
          f = w.gv,
          v = f._moveStep;
        w.point && f.isWalkable() && (w._32Q && (v *= (Vf() - w._32Q) / 50), f.walk(w.foward ? v : -v), w._32Q = Vf(), w._31Q = lo(w.tick, w))
      }, handle_mouseup: function (D) {
        this.handle_touchend(D)
      }, handle_touchend: function (Q) {
        var J = this._57I;
        J && (Pq(J, Dr(Q)) <= 1 && this.gv.sm().cs(), this._57I = V)
      }, handleWindowMouseMove: function (F) {
        this.handleWindowTouchMove(F)
      }, handleWindowTouchMove: function (P) {
        var c, U, O = this,
          $ = O.gv,
          q = O._62O,
          C = O.point,
          D = $.dm(),
          B = D.getHistoryManager(),
          X = $.lp(P),
          A = X.x - C.x,
          g = X.y - C.y,
          V = -i * A / $.getWidth(),
          S = -i * g / $.getHeight();
        if ("roaming" === q) O.rotate(P, V / 2, S / 2);
        else if (q === pf || q === Qh || q === Jq) B && !$._86O && B.beginInteraction(), $.fi({
          kind: $._86O ? "betweenEditRotation" : "beginEditRotation",
          event: P
        }), $._86O = 1, $.sm().each(function (h) {
          if (Hl(h) && $.isRotationEditable(h)) {
            var Q = G(V) > G(S) ? V : S;
            q === pf ? h.setRotationX(h.getRotationX() + Q) : q === Qh ? h.setRotationY(h.getRotationY() + Q) : q === Jq && h.setRotationZ(h.getRotationZ() + Q)
          }
        });
        else if ("move" === q || aq[q]) {
          q === xg || q === Tb || q === yj ? (B && !$._87O && B.beginInteraction(), $.fi({
            kind: $._87O ? "betweenEditSize" : "beginEditSize",
            event: P
          }), $._87O = 1) : (B && !$._moving && B.beginInteraction(), $.fi({
            kind: $._moving ? "betweenMove" : "beginMove",
            event: P
          }), $._moving = 1);
          var H, W = O.p3,
            e = $.getPositionInfo(W),
            T = Nh($);
          H = q === of ? "x" : q === oc ? "y" : q === Ph ? "z" : q === xg ? "sx" : q === Tb ? "sy" : q === yj ? "sz" : $.getMoveMode(P, O.movedata), A = A / $.getWidth() * e.width, g = -1 * g / $.getHeight() * e.height;
          var k, z, Y = [T[0] * A, T[4] * A, T[8] * A],
            d = [T[1] * g, T[5] * g, T[9] * g],
            h = Y[0] + d[0],
            Q = Y[1] + d[1],
            y = Y[2] + d[2],
            m = [W[0] + h, W[1] + Q, W[2] + y],
            J = As($.getEye(), m, !0);
          if ("xyz" === H ? (k = m, $.moveSelection(h, Q, y)) : "xz" === H ? (k = Rl($, W, [0, 1, 0], m), k && $.moveSelection(k[0] - W[0], 0, k[2] - W[2])) : "xy" === H ? (k = Rl($, W, [0, 0, 1], m), k && $.moveSelection(k[0] - W[0], k[1] - W[1], 0)) : "yz" === H ? (k = Rl($, W, [1, 0, 0], m), k && $.moveSelection(0, k[1] - W[1], k[2] - W[2])) : "x" === H || "sx" === H ? (J[0] = 0, k = Rl($, W, J, m), k && (z = k[0] - W[0], "x" === H ? $.moveSelection(z, 0, 0) : $.sm().each(function (Q) {
            Hl(Q) && $.isSizeEditable(Q) && (c = v(us, Q.getWidth() + z), U = c / Q.getWidth(), Q.setWidth(c), zk(P) && (Q.setHeight(Q.getHeight() * U), Q.setTall(Q.getTall() * U)))
          }))) : "y" === H || "sy" === H ? (J[1] = 0, k = Rl($, W, J, m), k && (z = k[1] - W[1], "y" === H ? $.moveSelection(0, z, 0) : $.sm().each(function (h) {
            Hl(h) && $.isSizeEditable(h) && (c = v(us, h.getTall() + z), U = c / h.getTall(), h.setTall(c), zk(P) && (h.setHeight(h.getHeight() * U), h.setWidth(h.getWidth() * U)))
          }))) : ("z" === H || "sz" === H) && (J[2] = 0, k = Rl($, W, J, m), k && (z = k[2] - W[2], "z" === H ? $.moveSelection(0, 0, z) : $.sm().each(function (X) {
            Hl(X) && $.isSizeEditable(X) && (c = v(us, X.getHeight() + z), U = c / X.getHeight(), X.setHeight(c), zk(P) && (X.setTall(X.getTall() * U), X.setWidth(X.getWidth() * U)))
          }))), !k) return;
          O.p3 = k
        } else if (q === yc) {
          var r = O.div;
          r || (r = O.div = Jd(), ni(O.getView(), r), r.op = C, r.style.background = $.getRectSelectBackground()), $.fi({
            kind: $._rectSelecting ? "betweenRectSelect" : "beginRectSelect",
            event: P
          }), $._rectSelecting = 1, r.rect = ik(r.op, X), ke(r, r.rect)
        } else if ("pinch" === q && 2 === tr(P)) {
          $.fi({
            kind: $._pinching ? "betweenPinch" : "beginPinch",
            event: P
          }), $._pinching = 1;
          var z = dh(P);
          $.handlePinch(z, O.dist), O.dist = z
        } else "pan" === q || zk(P) ? O.pan(P, A, g) : $.isFirstPersonMode() || (co(P) ? O.rotate(P, V, S) : (O.pan(P, A, 0), $.isWalkable() && ($.fi({
          kind: $._walking ? "betweenWalk" : "beginWalk",
          event: P
        }), $._walking = 1, $.walk(g / $.getHeight() * $.getCenterInfo().height))));
        O.point = X
      }, pan: function (b, S, A) {
        var X = this.gv;
        if (X.isPannable()) {
          var P = X.getCenterInfo(),
            M = S / X.getWidth() * P.width,
            R = -1 * A / X.getHeight() * P.height;
          X.fi({
            kind: X._panning ? "betweenPan" : "beginPan",
            event: b
          }), X._panning = 1, X.pan(-M, -R)
        }
      }, rotate: function (Z, X, l) {
        var z = this.gv;
        z.isRotatable() && (z.fi({
          kind: z._rotating ? "betweenRotate" : "beginRotate",
          event: Z
        }), z._rotating = 1, z.rotate(X, l))
      }, handleWindowMouseUp: function (P) {
        this.handleWindowTouchEnd(P)
      }, handleWindowTouchEnd: function (F) {
        var J = this,
          $ = J.gv,
          j = $.dm(),
          r = j.getHistoryManager(),
          f = J.div;
        if (f) {
          var E = $.getDatasInRect(f.rect);
          if (!E.isEmpty()) {
            var R = $.sm(),
              z = R.toSelection();
            E.each(function (q) {
              R.co(q) ? z.remove(q) : z.add(q)
            }), R.ss(z)
          }
          Wj(f)
        }
        $._moving && (delete $._moving, $.fi({
          kind: "endMove",
          event: F
        }), $.onMoveEnded(), r && r.endInteraction()), $._panning && (delete $._panning, $.fi({
          kind: "endPan",
          event: F
        }), $.onPanEnded()), $._rotating && (delete $._rotating, $.fi({
          kind: "endRotate",
          event: F
        }), $.onRotateEnded()), $._86O && (delete $._86O, $.fi({
          kind: "endEditRotation",
          event: F
        }), r && r.endInteraction()), $._87O && (delete $._87O, $.fi({
          kind: "endEditSize",
          event: F
        }), r && r.endInteraction()), $._pinching && (delete $._pinching, $.fi({
          kind: "endPinch",
          event: F
        }), $.onPinchEnded()), $._rectSelecting && (delete $._rectSelecting, $.fi({
          kind: "endRectSelect",
          event: F
        }), $.onRectSelectEnded()), $._walking && (delete $._walking, $.fi({
          kind: "endWalk",
          event: F
        }), $.onWalkEnded()), J.dist = J.point = J._62O = J.p3 = J.movedata = J.div = J._57I = J._32Q = J._31Q = J.foward = V
      }
    });
    var ae = function (Q) {
      this.gv = Q
    };
    Vm(ae, d, {
      _iv: !0,
      iv: function () {
        this._iv = !0
      }, face: function (T, z) {
        var Z = this,
          N = Z.gv.getGL();
        if (!N || !Hl(T)) return V;
        var F = z.x,
          m = z.width,
          f = z.height,
          c = Z.height - z.y - f,
          e = M(m / 2),
          q = new Uint8Array(4 * m * f),
          X = 0;
        for (Z.iv(), Z.validate(T), yg(N, Z.frame), N.readPixels(F, c, m, f, N.RGBA, N.UNSIGNED_BYTE, q), yg(N, V), Z.iv(); e >= X; X++)
          for (var t = e - X, I = e + X, w = t; I >= w; w++)
            for (var a = t; I >= a; a++)
              if (w === t || w === I || a === t || a === I) {
                var B = kg.m[q[4 * (w * m + a)]];
                if (B) return B
              }
      }, get: function (g, a) {
        this.validate();
        var r = this,
          l = r.gv.getGL();
        if (!l) return V;
        var X, Z, L = g.x,
          o = g.width,
          R = g.height,
          P = r.height - g.y - R,
          q = M(o / 2),
          A = new Uint8Array(4 * o * R),
          t = 0,
          $ = A.length,
          h = a ? V : new Vq,
          C = a ? V : {};
        if (yg(l, r.frame), l.readPixels(L, P, o, R, l.RGBA, l.UNSIGNED_BYTE, A), yg(l, V), a) {
          for (; q >= t; t++)
            for (var B = q - t, Y = q + t, p = B; Y >= p; p++)
              for (var j = B; Y >= j; j++)
                if ((p === B || p === Y || j === B || j === Y) && (X = r.info(A, 4 * (p * o + j)))) return X
        } else
          for (; $ > t; t += 4) X = r.info(A, t), X && (Z = X.data, C[Z._id] || (h.add(Z), C[Z._id] = Z));
        return h
      }, info: function (f, $) {
        return this.colorMap[(f[$] << 24) + (f[$ + 1] << 16) + (f[$ + 2] << 8) + f[$ + 3]]
      }, validate: function (U) {
        var C = this,
          B = C.gv,
          W = B.getGL();
        if (W) {
          var b = B.getWidth(),
            Y = B.getHeight(),
            K = W.RGBA,
            o = W.TEXTURE_2D,
            Q = W.RENDERBUFFER,
            y = W.FRAMEBUFFER;
          C.texture || (C.texture = ce(W), C.render = W.createRenderbuffer(), C.frame = W.createFramebuffer()), (C.width !== b || C.height !== Y) && (Tr(W, C.texture), W.texImage2D(o, 0, K, b, Y, 0, K, W.UNSIGNED_BYTE, V), Lf(W, W.TEXTURE_MIN_FILTER, W.LINEAR), W.bindRenderbuffer(Q, C.render), W.renderbufferStorage(Q, W.DEPTH_COMPONENT16, b, Y), yg(W, C.frame), W.framebufferTexture2D(y, W.COLOR_ATTACHMENT0, o, C.texture, 0), W.framebufferRenderbuffer(y, W.DEPTH_ATTACHMENT, Q, C.render), Tr(W, V), W.bindRenderbuffer(Q, V), yg(W, V), C.width = b, C.height = Y), C._iv && (C._iv = !1, yg(W, C.frame), B._42(U || (C.colorMap = {}), 1), yg(W, V))
        }
      }
    });
    var mj = function (D) {
      this.gv = D
    };
    Vm(mj, d, {
      gap: 0,
      size: 0,
      _42: function (E, W) {
        var O = this,
          s = O.gv,
          y = s._gridGap,
          v = s._gridSize;
        if (s._gridVisible) {
          if (O.gap !== y || O.size !== v) {
            for (var S = [], b = s._gridSize / 2, U = y * b, F = 0; 2 * b + 1 > F; F++) {
              var l = 6 * F,
                X = 6 * (2 * b + 1) + l;
              S[l] = -U, S[l + 1] = 0, S[l + 2] = -U + F * y, S[l + 3] = U, S[l + 4] = 0, S[l + 5] = -U + F * y, S[X] = -U + F * y, S[X + 1] = 0, S[X + 2] = -U, S[X + 3] = -U + F * y, S[X + 4] = 0, S[X + 5] = U
            }
            O.vs = new ko(S), O.gap = y, O.size = v
          }
          Tf(s), Ri(E, W), gm(E), xk(E, W, 1, s._gridColor, s._buffer.vs, O.vs), fh(E, 0, O.vs.length / 3, E.LINES), Yp(E), gi(E, W)
        } else O.vs = O.gap = O.size = V
      }
    });
    var nh = function (X) {
      this.gv = X
    };
    Vm(nh, d, {
      _42: function (W, v) {
        var S = this.gv,
          d = S._buffer.vs,
          r = S._axisXColor,
          e = S._axisYColor,
          n = S._axisZColor,
          K = S._originAxisVisible,
          H = S._centerAxisVisible;
        if (K || H) {
          var g = Q ? W.TRIANGLES : W.TRIANGLE_FAN,
            N = W.LINES;
          if (Tf(S), Ri(W, v), gm(W), K) {
            var z = S.getCenterInfo(),
              T = o(z.width, z.height) / 5,
              p = .8 * T,
              M = .05 * T;
            xk(W, v, 1.5, r, d, new ko([0, 0, 0, T, 0, 0, p, M, 0, p, 0, M, p, -M, 0, p, 0, -M, p, M, 0, 0, 0, 0, 0, T, 0, M, p, 0, 0, p, M, -M, p, 0, 0, p, -M, M, p, 0, 0, 0, 0, 0, 0, T, M, 0, p, 0, M, p, -M, 0, p, 0, -M, p, M, 0, p])), fh(W, 0, 2, N), fh(W, 1, 6, g), xk(W, v, V, e), fh(W, 7, 2, N), fh(W, 8, 6, g), xk(W, v, V, n), fh(W, 14, 2, N), fh(W, 15, 6, g)
          }
          if (H) {
            var a = S._center,
              h = a[0],
              J = a[1],
              Z = a[2],
              z = S.getPositionInfo(a);
            T = o(z.width, z.height) / 20, xk(W, v, 1.5, r, d, new ko([h, J, Z, h + T, J, Z, h, J, Z, h, J + T, Z, h, J, Z, h, J, Z + T])), fh(W, 0, 2, N), xk(W, v, V, e), fh(W, 2, 2, N), xk(W, v, V, n), fh(W, 4, 2, N)
          }
          Yp(W), gi(W, v)
        }
      }
    });
    var Xi = function (S) {
        this.gv = S
      },
      of = "edit_tx",
      oc = "edit_ty",
      Ph = "edit_tz",
      pf = "edit_rx",
      Qh = "edit_ry",
      Jq = "edit_rz",
      xg = "edit_sx",
      Tb = "edit_sy",
      yj = "edit_sz",
      aq = {};
    aq[of] = 1, aq[oc] = 1, aq[Ph] = 1, aq[pf] = 1, aq[Qh] = 1, aq[Jq] = 1, aq[xg] = 1, aq[Tb] = 1, aq[yj] = 1, Vm(Xi, d, {
      _42: function (E, g, x) {
        var v = this,
          Q = v.gv,
          r = Q.sm().ld();
        if (Q.isEditable(r) && Hl(r) && (!Q.isFirstPersonMode() || !Q.isMouseRoamable() && !h)) {
          Tf(Q);
          var u, z, B = Q.isMovable(r),
            M = Q.isRotationEditable(r),
            S = Q.isSizeEditable(r),
            D = Q._axisXColor,
            k = Q._axisYColor,
            n = Q._axisZColor,
            a = Q._editSizeColor,
            P = Q.getCenterInfo(),
            H = o(P.width, P.height) / 10,
            W = H / (x ? 5 : 10),
            j = .7 * H,
            s = .4 * j,
            l = r.p3(),
            w = l[0],
            N = l[1],
            y = l[2];
          u = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0], B && v._17O(E, g, r, x, of, D, u, [w, N - W, y, w + j, N - W, y, w + j, N, y, w + j, N, y, w, N, y, w, N - W, y, w, N - W, y + W, w + j, N - W, y + W, w + j, N - W, y, w + j, N - W, y, w, N - W, y, w, N - W, y + W]), z = w + j, S && v._17O(E, g, r, x, xg, a, u, [z, N - W, y, z + s, N - W, y, z + s, N, y, z + s, N, y, z, N, y, z, N - W, y, z, N - W, y + W, z + s, N - W, y + W, z + s, N - W, y, z + s, N - W, y, z, N - W, y, z, N - W, y + W]), z += s, M && v._17O(E, g, r, x, pf, D, u, [z, N - W, y, z + s, N - W, y, z + s, N, y, z + s, N, y, z, N, y, z, N - W, y, z, N - W, y + W, z + s, N - W, y + W, z + s, N - W, y, z + s, N - W, y, z, N - W, y, z, N - W, y + W]), u = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0], B && v._17O(E, g, r, x, oc, k, u, [w, N, y, w, N + j, y, w - W, N + j, y, w - W, N + j, y, w - W, N, y, w, N, y, w, N, y, w, N, y - W, w, N + j, y - W, w, N + j, y - W, w, N + j, y, w, N, y]), z = N + j, S && v._17O(E, g, r, x, Tb, a, u, [w, z, y, w, z + s, y, w - W, z + s, y, w - W, z + s, y, w - W, z, y, w, z, y, w, z, y, w, z, y - W, w, z + s, y - W, w, z + s, y - W, w, z + s, y, w, z, y]), z += s, M && v._17O(E, g, r, x, Qh, k, u, [w, z, y, w, z + s, y, w - W, z + s, y, w - W, z + s, y, w - W, z, y, w, z, y, w, z, y, w, z, y - W, w, z + s, y - W, w, z + s, y - W, w, z + s, y, w, z, y]), u = [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0], B && v._17O(E, g, r, x, Ph, n, u, [w, N, y, w, N, y + j, w, N - W, y + j, w, N - W, y + j, w, N - W, y, w, N, y, w, N - W, y, w - W, N - W, y, w - W, N - W, y + j, w - W, N - W, y + j, w, N - W, y + j, w, N - W, y]), z = y + j, S && v._17O(E, g, r, x, yj, a, u, [w, N, z, w, N, z + s, w, N - W, z + s, w, N - W, z + s, w, N - W, z, w, N, z, w, N - W, z, w - W, N - W, z, w - W, N - W, z + s, w - W, N - W, z + s, w, N - W, z + s, w, N - W, z]), z += s, M && v._17O(E, g, r, x, Jq, n, u, [w, N, z, w, N, z + s, w, N - W, z + s, w, N - W, z + s, w, N - W, z, w, N, z, w, N - W, z, w - W, N - W, z, w - W, N - W, z + s, w - W, N - W, z + s, w, N - W, z + s, w, N - W, z])
        }
      }, _17O: function (h, W, Z, y, n, Y, S, E) {
        var I = this.gv._buffer;
        Th(h, W, y, !0, Z, n), ah(h, W, V, !0, V, !0, V, !1), Hc(h, W.uDiffuse, Y), sr(h, I.vs, new ko(E), W.aPosition), sr(h, I.ns, new ko(S), W.aNormal), gm(h), fh(h, 0, 12), Yp(h), kf(h, W)
      }
    });
    var Fp = function (M, j) {
      this.gv = M, this.s = function (n, w, h) {
        return w == V && (w = h), w == V ? j.getStyle(n) : Cc(w, j, M)
      }, this.data = j
    };
    Vm(Fp, d, {
      I3d: !0,
      ms_icons: 1,
      _iv: !0,
      iv: function () {
        this._iv = !0
      }, _42: function (E, I, U, f) {
        var Y, Q, _, J, M, n, A, h = this,
          N = h.gv,
          X = h.data,
          K = X._id,
          i = h.s("batch"),
          e = N._34O,
          l = N._33O,
          k = N.isSelectable(X),
          W = N.getBrightness(X),
          L = W != V && 1 !== W;
        if (h._iv) {
          if (_ = Gi(e, l, X, i), h.validate(_, i ? Wf[i] || wn : V), _ && (J = e[K], M = J.size = _.vs.length / 3 - J.begin, A = _.rs))
            for (W = L ? W : 1, n = 0; M > n; n++) A.push(W);
          if (Hl(X)) {
            var r = N.getWireframe(X);
            r && Xn(N, X, r)
          }
          h.labelInfo = h.label2Info = h.noteInfo = h.note2Info = h._38o = V, h._24O(Rg, "getLabel"), h._24O(Lb, "getLabel2"), h._26O(Ug, "getNote"), h._26O(Mq, "getNote2"), h._15O(), h._iv = !1
        }
        L && Hc(E, I.uBrightness, W), Q = Th(E, I, U, k, X, pd), Q && (Qf(Q, e[K], l), Qf(Q, N._polylineIndexMap[K], N._polylineModelMap), Qf(Q, N._wireframeIndexMap[K], N._wireframeModelMap)), e[K] || h._80o(E, I, f), N.isLabelVisible(X) && ((Y = h.labelInfo) && (Th(E, I, U, k, X, Rg), h._28O(Y, Rg, f)), (Y = h.label2Info) && (Th(E, I, U, k, X, Lb), h._28O(Y, Lb, f))), N.isNoteVisible(X) && ((Y = h.noteInfo) && (Th(E, I, U, k, X, Ug), h._29O(Y, Ug, f)), (Y = h.note2Info) && (Th(E, I, U, k, X, Mq), h._29O(Y, Mq, f))), (Y = h._38o) && h._99O(E, I, Y, U, k, f), L && Hc(E, I.uBrightness, 1)
      }, validate: function () {}, _16O: function () {
        return id
      }, _80o: function () {}, dispose: function () {}, getBodyColor: function (q) {
        var O = this.data,
          F = this.gv.getBodyColor(O);
        return F ? F : q ? O.getStyle(q) : V
      }, _24O: function (x, f) {
        var v = this,
          n = v.data,
          U = v.gv,
          b = v.s,
          G = U[f](n);
        if (G != V) {
          var Z = b(x + ".scale"),
            M = b(x + ".max"),
            i = v[x + "Info"] = {
              label: G,
              textureScale: b(x + ".texture.scale"),
              color: U[f + "Color"](n),
              font: b(x + ".font"),
              align: b(x + ".align"),
              background: U[f + "Background"](n)
            },
            D = i.rect = Cq(i, G);
          M > 0 && M < D.width && (i.labelWidth = D.width, D.width = M), D.x = D.y = 0, D.width *= Z, D.height *= Z, i.mat = v._16O(b(x + ".autorotate"), b(x + ".position"), D, b(x + ".face"), b(x + ".t3"), b(x + ".r3"), b(x + ".rotationMode"));
          var L = D.width / 2,
            F = D.height / 2;
          i.vs = new ko([-L, F, 0, -L, -F, 0, L, -F, 0, L, F, 0]), D.width /= Z, D.height /= Z
        }
      }, _26O: function (e, M) {
        var E = this,
          C = E.data,
          Q = E.gv,
          R = E.s,
          W = Q[M](C);
        if (W != V) {
          var _ = R(e + ".scale"),
            t = this[e + "Info"] = {
              note: W,
              textureScale: R(e + ".texture.scale"),
              expanded: R(e + ".expanded"),
              font: R(e + ".font"),
              color: R(e + ".color"),
              align: R(e + ".align"),
              borderWidth: R(e + ".border.width"),
              borderColor: R(e + ".border.color"),
              background: Q[M + "Background"](C)
            };
          if (t.expanded) {
            var k = R(e + ".max"),
              b = Cq(t, W);
            b.width += 6, b.height += 2, k > 0 && k < b.width && (t.labelWidth = b.width, b.width = k);
            var l = {
              x: -b.width / 2,
              y: -8 - b.height,
              width: b.width,
              height: b.height + 8
            }
          } else l = {
            x: -6,
            y: -18,
            width: 12,
            height: 18
          };
          t.mat = E._16O(R(e + ".autorotate"), R(e + ".position"), V, R(e + ".face"), R(e + ".t3"), R(e + ".r3"), R(e + ".rotationMode")), t.rect = l, 1 !== _ && (l = jh(l), l.x *= _, l.height *= _, l.y = -l.height, l.width *= _);
          var P = l.x,
            K = l.y,
            G = l.width,
            z = l.height;
          t.vs = new ko([P, -K, 0, P, -K - z, 0, P + G, -K - z, 0, P + G, -K, 0])
        }
      }, _28O: function (p, s, d) {
        if (d(this.s(s + ".transparent"))) {
          var P = p.rect,
            b = p.textureScale,
            y = P.width * b,
            Y = P.height * b;
          if (y >= 1 && Y >= 1) {
            var n = ui(y, Y);
            1 !== b && (n.translate(n, P.x, P.y), n.scale(b, b), n.translate(n, -P.x, -P.y)), Br(n, p), n.restore(), Er(this, s, p.mat, p.vs, !0)
          }
        }
      }, _29O: function (C, l, t) {
        if (t(this.s(l + ".transparent"))) {
          var b = C.rect,
            r = C.textureScale,
            L = b.x,
            y = b.y,
            s = b.width * r,
            p = b.height * r;
          if (s >= 1 && p >= 1) {
            b.x = b.y = 0;
            var j = ui(s, p);
            1 !== r && j.scale(r, r), fp(j, C), j.restore(), b.x = L, b.y = y, Er(this, l, C.mat, C.vs, !1)
          }
        }
      }, _99O: function (x, q, L, g, E, p) {
        if (L) {
          var X = this,
            o = X.gv,
            f = X.data,
            m = o._buffer,
            B = o._1O,
            j = L.icons;
          for (var G in j) {
            var l = j[G],
              r = L.rects[G];
            if (r && p(Cc(l.transparent, f, o))) {
              Th(x, q, g, E, f, G);
              var u = Cc(l.shape3d, f, o),
                Q = u ? [u] : Cc(l.names, f, o),
                C = Q ? Q.length : 0,
                K = Cc(l.textureScale, f, o) || 1,
                n = Cc(l.light, f, o);
              n == V && (n = u ? !0 : !1), ah(x, q, Cc(l.blend, f, o), n, Cc(l.opacity, f, o), Cc(l.reverseFlip, f, o), Cc(l.reverseColor, f, o), Cc(l.reverseCull, f, o));
              for (var D = 0; C > D; D++) {
                var c = Q[D],
                  M = r[D];
                if (Og(X, M.mat), u) Ng(o, f, Lh(X.s, u), X.s);
                else {
                  var h = ye(c);
                  if (h) {
                    var i = M.width * K,
                      k = M.height * K;
                    if (i >= 1 && k >= 1) {
                      var s = ui(i, k);
                      Rm(s, h, Cc(l.stretch, f, o), 0, 0, i, k, f, o), s.restore(), ce(x, ln, B), gm(x, q, B, Cc(l.discardSelectable, f, o), m.uv, Gg), sr(x, m.vs, M.vs, q.aPosition), sr(x, m.ns, Ef, q.aNormal), Vl(x, m.is, oe), lp(x, 0, oe.length), Yp(x, q, B)
                    }
                  }
                }
                Mr(o)
              }
              kf(x, q)
            }
          }
        }
      }
    });
    var eg = function (X, z) {
      gr(eg, this, [X, z])
    };
    Vm(eg, Fp, {
      _16O: function (o, H, N, j, O, U, z, $, d) {
        var C = this.data,
          u = uj(H, C.s3(), N, j, $, d);
        return uk(Up(), u, C.p3(), j, O, U, z, o, C.r3(), C.getRotationMode())
      }, clear: function () {
        var k = this;
        k.faceMat = k.mat = k.shapeModel = k.left = k.right = k.front = k.back = k.top = k.bottom = k.csg = V
      }, validate: function (h, U) {
        var a = this,
          r = a.gv,
          $ = a.data,
          j = Lh(a.s),
          m = Be($, r.getMat($), j ? a.s("shape3d.scaleable") : !0);
        if (a.clear(), h) {
          var X = [];
          j ? Ui(r, $, j, a.s, a.getBodyColor(), [m], h, X) : (Wq(r, $, h, U, m, pg, X, Wi), Wq(r, $, h, U, m, Hi, X, Dd), Wq(r, $, h, U, m, Ud, X, nf), Wq(r, $, h, U, m, Hb, X, xo), Wq(r, $, h, U, m, fk, X, Yk), Wq(r, $, h, U, m, Xr, X, po)), X.length && (wh(h.vs, X), wh(h.ns, kc(X)))
        } else a.mat = m, (a.shapeModel = j) || (a.vf(pg), a.vf(Hi), a.vf(fk), a.vf(Xr), a.vf(Ud), a.vf(Hb))
      }, vf: function (P) {
        var C = this;
        if (C.gv.getFaceVisible(C.data, P)) {
          var A = Mm(C, P);
          return A.mat && (C.faceMat = !0), A
        }
      }, _80o: function (_, y, Z) {
        var D = this,
          l = D.gv,
          M = D.data,
          $ = l._cube,
          i = D.shapeModel;
        Tf(l, D.mat), i ? Ng(l, M, i, D.s, D.getBodyColor(), Z) : (sr(_, $.vs, V, y.aPosition), sr(_, $.ns, V, y.aNormal), Vl(_, $.is), D._18O(_, y, D.left, 0, Z), D._18O(_, y, D.front, 6, Z), D._18O(_, y, D.right, 12, Z), D._18O(_, y, D.back, 18, Z), D._18O(_, y, D.top, 24, Z), D._18O(_, y, D.bottom, 30, Z)), Mr(l), D.faceMat && (D._18O(_, y, D.left, 0, Z, !0), D._18O(_, y, D.front, 6, Z, !0), D._18O(_, y, D.right, 12, Z, !0), D._18O(_, y, D.back, 18, Z, !0), D._18O(_, y, D.top, 24, Z, !0), D._18O(_, y, D.bottom, 30, Z, !0))
      }, _18O: function (b, $, F, n, X, t) {
        if (F) {
          if (!X(F.transparent)) return;
          if (t && !F.mat || !t && F.mat) return;
          t && Tf(this.gv, F.mat);
          var q = this,
            r = q.data,
            J = q.gv,
            O = J.getTexture(F.texture, r),
            k = F.uv,
            E = F.uvScale,
            P = F.uvOffset,
            S = F.discardSelectable;
          if (O)
            if (k) {
              for (var m = 8 * (n / 6), v = 0; 8 > v; v++) Ce[m + v] = k[v];
              gm(b, $, O, S, J._buffer.uv, Ce, P, E)
            } else gm(b, $, O, S, J._cube.uv, V, P, E);
          else gm(b);
          ah(b, $, F.blend, F.light, F.opacity, F.reverseFlip, F.reverseColor, F.reverseCull), Hc(b, $.uDiffuse, F.color), lp(b, n, 6), kf(b, $), Yp(b, $, O), t && Mr(J)
        }
      }
    });
    var Em = function (i, Q) {
      gr(Em, this, [i, Q])
    };
    Vm(Em, Fp, {
      _25Q: 1,
      validate: function (q) {
        var G = this,
          e = G.gv,
          N = G.data,
          Q = G.s,
          b = Q("edge.width"),
          m = N._40I,
          U = N._41I;
        if (G.shapeModel = G.info = V, m && U) {
          var C, n, M, Z, z, p, x, A, r, s, K = N.isLooped(),
            l = Q(gf),
            F = H.getEdgeType(l);
          if (F) {
            var R = F(N, Eo(G, e, N, K, l), e, G._19Q);
            if (!R.points || R.points.isEmpty()) return;
            p = G.info = {}, x = R.segments, z = R.points, A = z.size();
            for (var O = m.getElevation(), S = U.getElevation(), J = 0; A > J; J++) {
              var P = z.get(J);
              P.e == V && (P.e = O + (S - O) * J / (A - 1))
            }
            r = Gn(z.get(0)), s = Gn(z.get(A - 1));
            var B = A % 2;
            0 === B ? (p.c1 = Gn(z.get(A / 2 - 1)), p.c2 = Gn(z.get(A / 2))) : p.p3 = Gn(z.get((A - B) / 2)), p.s1 = r, p.s2 = Gn(z.get(1)), p.t1 = Gn(z.get(A - 2)), p.t2 = s
          } else {
            z = new Vq, p = G.info = {};
            var T = Q("edge.offset"),
              k = Q("edge.center"),
              y = Q("edge.source.t3"),
              D = Q("edge.target.t3"),
              w = m.p3(),
              g = U.p3();
            if (y && (w[0] += y[0], w[1] += y[1], w[2] += y[2]), D && (g[0] += D[0], g[1] += D[1], g[2] += D[2]), l === Yi) {
              x = Q("edge.segments");
              var E = p.points = Q(sl) || wf;
              if (A = E.size()) {
                r = Gn(E.get(0)), s = Gn(E.get(A - 1)), !k && T && (M = As(r, w, !0), T = o(T, Pq(w, r)), w = [w[0] + M[0] * T, w[1] + M[1] * T, w[2] + M[2] * T], M = As(g, s, !0), T = o(T, Pq(s, g)), g = [g[0] - M[0] * T, g[1] - M[1] * T, g[2] - M[2] * T]);
                var B = A % 2;
                0 === B ? (C = Gn(E.get(A / 2 - 1)), n = Gn(E.get(A / 2))) : p.p3 = Gn(E.get((A - B) / 2)), p.s1 = w, p.s2 = r, p.t1 = s, p.t2 = g
              } else !k && T && (M = As(g, w, !0), Z = Pq(w, g), T = os(T, Z), w = [w[0] + M[0] * T, w[1] + M[1] * T, w[2] + M[2] * T], g = [g[0] - M[0] * T, g[1] - M[1] * T, g[2] - M[2] * T]), C = w, n = g;
              z.add({
                x: w[0],
                y: w[2],
                e: w[1]
              }), z.addAll(E), z.add({
                x: g[0],
                y: g[2],
                e: g[1]
              })
            } else {
              var d = Eo(G, e, N, K, l);
              if (G._19Q || (d = -d), K) {
                var _ = w[0],
                  X = w[1],
                  u = w[2],
                  $ = m.getTall() / 2 + d;
                C = [_ - d, X + $, u], n = [_ + d, X + $, u], z.add({
                  x: _ - d,
                  y: u,
                  e: X
                }), z.add({
                  x: _ - d,
                  y: u,
                  e: X + $
                }), z.add({
                  x: _ + d,
                  y: u,
                  e: X + $
                }), z.add({
                  x: _ + d,
                  y: u,
                  e: X
                })
              } else {
                M = As(g, w, !0), Z = Pq(w, g);
                var h = {
                    x: w[0],
                    y: w[2]
                  },
                  f = {
                    x: g[0],
                    y: g[2]
                  },
                  c = dk(V, h, f, d),
                  I = c.x - h.x,
                  i = c.y - h.y;
                T = os(T, Z), M[0] *= T, M[1] *= T, M[2] *= T, C = [w[0] + M[0] + I, w[1] + M[1], w[2] + M[2] + i], n = [g[0] - M[0] + I, g[1] - M[1], g[2] - M[2] + i], k ? (z.add({
                  x: w[0],
                  y: w[2],
                  e: w[1]
                }), z.add({
                  x: C[0],
                  y: C[2],
                  e: C[1]
                }), z.add({
                  x: n[0],
                  y: n[2],
                  e: n[1]
                }), z.add({
                  x: g[0],
                  y: g[2],
                  e: g[1]
                })) : (z.add({
                  x: C[0],
                  y: C[2],
                  e: C[1]
                }), z.add({
                  x: n[0],
                  y: n[2],
                  e: n[1]
                }))
              }
            }
            p.c1 = C, p.c2 = n
          }
          p.list = Q(lg) === em ? G.createTubeModel(z, x, b / 2, q) : G.createLineModel(z, x, b, "edge", "edge.dash")
        }
      }
    });
    var re = function (r, h) {
      gr(re, this, [r, h])
    };
    Vm(re, eg, {
      _80o: function (Y, $, y) {
        var T = this,
          b = T.gv,
          V = T.shapeModel;
        Tf(b, T.mat), V ? Ng(b, T.data, V, T.s, T.getBodyColor(), y) : (nq(T, Y, $, T.left, y), nq(T, Y, $, T.front, y), nq(T, Y, $, T.right, y), nq(T, Y, $, T.back, y), nq(T, Y, $, T.top, y), nq(T, Y, $, T.bottom, y)), Mr(b)
      }, validate: function (B, q) {
        var P, A, O = this,
          Z = O.s,
          L = O.data,
          S = L.p3(),
          C = L._thickness / 2,
          r = L.isClosePath(),
          H = L.getPoints(),
          n = L.getSegments(),
          N = Z(cc),
          e = B && B.uv;
        if (O.clear(), 0 > C) A = O.shapeModel = as(H, n, Z(Gf), Z(hr), N, Z(el), L.getTall(), L.getElevation(), r), Z(Lq) ? Z("shape3d.image") || delete A.uv : (delete A.vs, delete A.ns, delete A.uv), Z("shape3d.top.image") || delete A.top_uv, Z("shape3d.bottom.image") || delete A.bottom_uv;
        else if (Z(lg) === em) P = Wo(H, n, N, r), A = O.shapeModel = {
          vs: []
        }, Z("shape3d.image") && (A.uv = [], A.sum = Z(el) || Io(P) || 1, A.len = 0), Z(Gf) && !r && (A.top_vs = [], Z("shape3d.top.image") && (A.top_uv = [])), Z(hr) && !r && (A.bottom_vs = [], Z("shape3d.bottom.image") && (A.bottom_uv = [])), O._12O(P, C);
        else {
          var s, _, h, x, $, W, w, c, R, U;
          P = Wo(H, n, N, r), $ = O.vf(fk, e, !1, q), C && (W = O.vf(Xr, e, !1, q), w = r ? V : O.vf(pg, e, !1, q), c = r ? V : O.vf(Hi, e, !1, q), R = O.vf(Ud, e, !1, q), U = O.vf(Hb, e, !1, q)), C ? O._12O(P, C) : $ && P.forEach(function (y) {
            if (x = y.length, x > 0)
              for (s = y[0], h = 1; x > h; h++) _ = y[h], O.addV($.vs, s, _), s = _
          }), O._20Q(P), B || ($ && ($.ns = kc($.vs), ks($, "vs"), ks($, Qp)), C && (W && (W.ns = kc(W.vs), ks(W, "vs"), ks(W, Qp)), w && (w.ns = kc(w.vs), ks(w, "vs"), ks(w, Qp)), c && (c.ns = kc(c.vs), ks(c, "vs"), ks(c, Qp)), R && (R.ns = kc(R.vs), ks(R, "vs"), ks(R, Qp)), U && (U.ns = kc(U.vs), ks(U, "vs"), ks(U, Qp))))
        }
        var k = O.mat = Up();
        Lk(k, S), ee(k, L.r3(), L.getRotationMode()), Lk(k, Ei(S)), B && (Uo(O, k, B, A), O.clear())
      }, _20Q: function (L) {
        var _, M, Z, O, f, B, u, U = this,
          D = U.front,
          T = U.back,
          C = U.top,
          z = U.bottom,
          Y = D ? D.tuv : V,
          A = T ? T.tuv : V,
          q = C ? C.tuv : V,
          e = z ? z.tuv : V,
          $ = 0;
        (Y || A || q || e) && (_ = U.s(el) || Io(L) || 1, L.forEach(function (L) {
          if (M = L.length, M > 0)
            for (B = L[0], Z = 1; M > Z; Z++) u = L[Z], O = $ / _, $ += Pq(B, u), f = $ / _, U._14O(D, O, f), U._14O(T, 1 - f, 1 - O), U._14O(C, O, f), U._14O(z, O, f), B = u
        }))
      }, _14O: function (p, e, D) {
        if (p) {
          var x = p.uv,
            r = p.tuv;
          if (r) {
            if (x) var d = x[0] + (x[6] - x[0]) * e,
              b = x[1] + (x[7] - x[1]) * e,
              Y = x[2] + (x[4] - x[2]) * e,
              S = x[3] + (x[5] - x[3]) * e,
              n = x[2] + (x[4] - x[2]) * D,
              L = x[3] + (x[5] - x[3]) * D,
              T = x[0] + (x[6] - x[0]) * D,
              h = x[1] + (x[7] - x[1]) * D;
            else d = e, b = 0, Y = e, S = 1, n = D, L = 1, T = D, h = 0;
            r.push(Y, S, n, L, T, h, T, h, d, b, Y, S)
          }
        }
      }, _13O: function (e) {
        var K = e.uv,
          p = e.tuv;
        p && (K ? p.push(K[2], K[3], K[4], K[5], K[6], K[7], K[6], K[7], K[0], K[1], K[2], K[3]) : p.push(0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1))
      }, _12O: function (X, l) {
        var a, x, P, e, g, H = this;
        X.forEach(function (D) {
          if (g = D.length, g > 0)
            for (a = {
              p: D[0],
              n: !0
            }, e = 1; g > e; e++) x = D[e], P = g - 1 > e ? D[e + 1] : V, H.addPoint(a, x, P, l, D)
        })
      }, addPoint: function (n, H, f, j, G) {
        var W, Z, b, $, P, L, t, D, z, d = this,
          m = n.p,
          h = n.f,
          B = n.b,
          Q = d.s("shape3d.side") || wg,
          T = d.s("shape3d.start.angle"),
          y = d.shapeModel,
          r = d.data.isClosePath();
        if (n.n && (n.n = !1, h = r && G.length > 2 ? dk(G[G.length - 2], m, H, j) : dk(V, m, H, j), B = zc(m, h), y ? y.top_vs && d._10O(B, h, Q, T, y.top_vs, y.top_uv) : (W = d.left) && (d.addV(W.vs, B, h), d._13O(W))), Z = f ? dk(m, H, f, j) : r && G.length > 2 ? dk(m, H, G[1], j) : dk(m, H, V, j), b = zc(H, Z), y) {
          var U, v, J = y.vs,
            g = y.uv,
            _ = y.sum;
          for (g && (U = y.len / _, y.len += Pq(m, H), v = y.len / _), L = d._9O(B, h, Q, T), t = d._9O(b, Z, Q, T), D = 0; Q > D; D++) z = D + 1, wh(J, L[z]), wh(J, t[D]), wh(J, L[D]), wh(J, t[D]), wh(J, L[z]), wh(J, t[z]), g && ($ = D / Q, P = z / Q, g.push(U, P, v, $, U, $, v, $, U, P, v, P));
          !f && y.bottom_vs && d._10O(b, Z, Q, T, y.bottom_vs, y.bottom_uv, !0)
        } else !f && (W = d.right) && (d.addV(W.vs, Z, b), d._13O(W)), (W = d.front) && d.addV(W.vs, h, Z), (W = d.back) && d.addV(W.vs, b, B), (W = d.top) && d.addH(W.vs, h, Z, b, B, !0), (W = d.bottom) && d.addH(W.vs, B, b, Z, h);
        n.p = H, n.f = Z, n.b = b
      }, _10O: function (q, p, d, B, o, U, R) {
        var I, S, F = this,
          M = F.data,
          J = F._9O(q, p, d, B),
          O = (q.x + p.x) / 2,
          L = (q.y + p.y) / 2,
          w = M.getElevation(),
          k = 0;
        for (k = 0; d > k; k++) R ? (wh(o, J[k]), wh(o, J[k + 1])) : (wh(o, J[k + 1]), wh(o, J[k])), wh(o, [O, w, L]), U && (R ? (I = i * (k + 1) / d + B, S = i * k / d + B) : (I = i * k / d + B, S = i * (k + 1) / d + B), U.push(.5 - .5 * X(S), .5 - .5 * A(S), .5 - .5 * X(I), .5 - .5 * A(I), .5, .5))
      }, _9O: function (r, M, U, V) {
        for (var b, e, J = this, n = J.data, E = [], W = (r.x + M.x) / 2, G = (r.y + M.y) / 2, K = n.getTall() / 2, Z = n.getElevation(), q = 0; U >= q; q++) b = i * q / U + V, e = X(b), E.push([W + (r.x - W) * e, Z + K * A(b), G + (r.y - G) * e]);
        return E
      }, addV: function (t, e, b) {
        var A = e.x,
          G = e.y,
          Y = b.x,
          u = b.y,
          k = this.data,
          H = k.getElevation(),
          W = k.getTall() / 2;
        t.push(A, H - W, G, Y, H - W, u, Y, H + W, u, Y, H + W, u, A, H + W, G, A, H - W, G)
      }, addH: function (N, L, S, s, C, D) {
        var V = this.data,
          w = V.getTall() / 2,
          g = V.getElevation() + (D ? w : -w);
        N.push(L.x, g, L.y, S.x, g, S.y, s.x, g, s.y, s.x, g, s.y, C.x, g, C.y, L.x, g, L.y)
      }, vf: function (P, J, R, p) {
        var g, s = this,
          h = s.gv.getFaceVisible(s.data, P);
        return (R || h) && (g = Mm(s, P, p), g.vs = [], g.tuv = h && (g.texture || J) ? [] : V, g.visible = h), g
      }
    });
    var zs = function (R, h) {
      gr(zs, this, [R, h])
    };
    Vm(zs, Fp, {
      _25Q: 1,
      validate: function (k) {
        var l = this,
          y = l.data,
          g = l.s,
          Y = y.getPoints(),
          W = Y.size();
        if (l.shapeModel = l.info = V, W > 1) {
          var I = l.info = {},
            w = y.getSegments(),
            i = y.getThickness(),
            D = Gn(Y.get(0)),
            v = Gn(Y.get(W - 1)),
            A = W % 2;
          0 === A ? (I.c1 = Gn(Y.get(W / 2 - 1)), I.c2 = Gn(Y.get(W / 2))) : I.p3 = Gn(Y.get((W - A) / 2)), I.s1 = D, I.s2 = Gn(Y.get(1)), I.t1 = Gn(Y.get(W - 2)), I.t2 = v, I.list = g(lg) === em ? l.createTubeModel(Y, w, i / 2, k) : l.createLineModel(Y, w, i, "shape.border", "shape.dash")
        }
      }
    }), eq(H, {
      accordionViewExpandIcon: Ml(xn),
      accordionViewCollapseIcon: Ml(xn, !0),
      accordionViewLabelColor: jk,
      accordionViewLabelFont: _l,
      accordionViewTitleBackground: cp,
      accordionViewSelectBackground: hi,
      accordionViewSelectWidth: 3,
      accordionViewSeparatorColor: b,
      splitViewDividerSize: 1,
      splitViewDividerBackground: cp,
      splitViewDragOpacity: .5,
      splitViewToggleIcon: {
        width: 16,
        height: 16,
        comps: [{
          type: Ob,
          rect: [2, 2, 12, 12],
          background: xn
        }]
      },
      propertyViewLabelColor: Cs,
      propertyViewLabelSelectColor: jk,
      propertyViewLabelFont: _l,
      propertyViewExpandIcon: Ml(Sp),
      propertyViewCollapseIcon: Ml(Sp, !0),
      propertyViewBackground: Vg,
      propertyViewRowLineVisible: !0,
      propertyViewColumnLineVisible: !0,
      propertyViewRowLineColor: Kk,
      propertyViewColumnLineColor: Kk,
      propertyViewSelectBackground: hi,
      listViewLabelColor: Cs,
      listViewLabelSelectColor: jk,
      listViewLabelFont: _l,
      listViewRowLineVisible: !1,
      listViewRowLineColor: Kk,
      listViewSelectBackground: hi,
      treeViewLabelColor: Cs,
      treeViewLabelSelectColor: jk,
      treeViewLabelFont: _l,
      treeViewExpandIcon: Ml(Ib),
      treeViewCollapseIcon: Ml(Ib, !0),
      treeViewRowLineVisible: !1,
      treeViewRowLineColor: Kk,
      treeViewSelectBackground: hi,
      tableViewLabelColor: Cs,
      tableViewLabelSelectColor: jk,
      tableViewLabelFont: _l,
      tableViewRowLineVisible: !0,
      tableViewColumnLineVisible: !0,
      tableViewRowLineColor: Kk,
      tableViewColumnLineColor: Kk,
      tableViewSelectBackground: hi,
      treeTableViewLabelColor: Cs,
      treeTableViewLabelSelectColor: jk,
      treeTableViewLabelFont: _l,
      treeTableViewExpandIcon: Ml(Ib),
      treeTableViewCollapseIcon: Ml(Ib, !0),
      treeTableViewRowLineVisible: !0,
      treeTableViewColumnLineVisible: !0,
      treeTableViewRowLineColor: Kk,
      treeTableViewColumnLineColor: Kk,
      treeTableViewSelectBackground: hi,
      tableHeaderLabelColor: Cs,
      tableHeaderLabelFont: _l,
      tableHeaderColumnLineVisible: !0,
      tableHeaderColumnLineColor: rn,
      tableHeaderBackground: Vg,
      tableHeaderMoveBackground: yk,
      tableHeaderInsertColor: hi,
      tableHeaderSortDescIcon: Jn(Sp, !0),
      tableHeaderSortAscIcon: Jn(Sp),
      tabViewTabGap: 1,
      tabViewLabelColor: jk,
      tabViewLabelFont: _l,
      tabViewTabBackground: cp,
      tabViewSelectWidth: 3,
      tabViewSelectBackground: hi,
      tabViewMoveBackground: yk,
      tabViewInsertColor: hi,
      toolbarLabelColor: Cs,
      toolbarLabelSelectColor: jk,
      toolbarLabelFont: _l,
      toolbarBackground: Vg,
      toolbarSelectBackground: hi,
      toolbarItemGap: 8,
      toolbarSeparatorColor: rq
    }, !0);
    var il = {
        translateX: 1,
        sortColumn: 1
      },
      Kd = {
        sortable: 1,
        sortOrder: 1,
        sortFunc: 1
      },
      Cg = {
        focusData: 1
      },
      bc = {
        dataModel: 1,
        sortColumn: 1,
        sortFunc: 1,
        visibleFunc: 1,
        rootData: 1,
        rootVisible: 1
      },
      fi = {
        dataModel: 1,
        sortFunc: 1,
        visibleFunc: 1,
        categorizable: 1
      },
      ss = function (v, G) {
        G.add(v), v.hasChildren() && v.eachChild(function (Q) {
          ss(Q, G)
        })
      },
      qd = function (l, P, d, q, B, F, f, W, r, L, C) {
        var n, s = d.getValueType(),
          u = d.getAlign();
        if (d.getEnumValues()) {
          var k = d.toEnumLabel(P),
            v = li || 0,
            a = 0,
            I = F,
            E = H.getTextSize(q, k).width;
          return n = ye(d.toEnumIcon(P)), n && (a = F + li / 2, "center" === u ? a += (W - (v + E)) / 2 : "right" === u && (a = a + W - (v + E)), Nb(l, n, a, f + r / 2), I = a + li / 2), k != V && (n ? Uq(l, k, q, B, I, f, W - (I - F), r) : Uq(l, k, q, B, F, f, W, r, u)), void 0
        }
        return P = d.formatValue(P), P != V ? s === nc ? (en(l, F, f, W, r, P), void 0) : s === _c || !s && np(P) ? (n = ye(P ? Qj : Of), Nb(l, n, F + W / 2, f + r / 2, L, C), void 0) : (Uq(l, P, q, B, F, f, W, r, u), void 0) : void 0
      },
      zj = function (N, i) {
        var n = i.view,
          m = n.getDataModel().getHistoryManager(),
          R = hl(N),
          Y = i.column || i.property;
        m && m.beginInteraction(), i.editor = N, N.info = i, n.setCurrentEditor(N), n.getView().insertBefore(R, n._79O), ke(N, i.editorRect), N.setFocus ? N.setFocus() : ys(N), N.commitValue = function () {
          N._17Q && (N = N._17Q), n.setValue(i.data, Y, N.getValue ? N.getValue() : N.value), N.close && N.close(), Wj(R)
        }, Y.onEditorCreated && Y.onEditorCreated(i)
      },
      vj = function (r, o, N, L, q) {
        var f = No(r, N),
          g = o.value,
          d = o.view,
          l = q.getValueType();
        return f.onblur = f.onchange = function () {
          d.endEditing()
        }, "input" === r ? (g = q.formatValue(g), g != V && (f.value = g), f.onkeydown = function (_) {
          ad(_) && d.endEditing()
        }, (l === gq || l === mr) && f.addEventListener(Bc, H.numberListener, !1)) : r === yc && L.forEach(function (b) {
          var l = J.createElement("option");
          l.innerHTML = q.toEnumLabel(b), l.value = b, q.isEnumEqual(g, b) && (l.selected = !0), ni(f, l)
        }), zj(f, o), f
      },
      sq = T.widget = {},
      vn = function (c, A, u) {
        Vm(_ + ".widget." + c, A, u)
      };
    eq(Ho, {
      ms_value: function (L) {
        L.getValue = function (X) {
          var Y = this.getItemById(X),
            f = Y.element;
          return f ? f.getValue ? f.getValue() : f.value : Y.selected
        }, L.setValue = function (V, i) {
          var J = this.getItemById(V),
            S = J.element;
          S ? S.setValue ? S.setValue(i) : S.value = i : (J.selected = i, this.iv())
        }, L.v = function (E, W) {
          var c = this;
          if (2 === arguments.length) c.setValue(E, W);
          else {
            if (!or(E)) return c.getValue(E);
            for (var F in E) c.setValue(F, E[F])
          }
          return c
        }
      }, _46o: function (I) {
        I._icon = V, I._accessType = V, I._valueType = V, I._editable = !1, I._batchEditable = !0, I._align = pg, I._nullable = !0, I._emptiable = !1, I.setParent = Xp, I.formatValue = function (i) {
          var h = this,
            S = h._valueType;
          if (h.getEnumValues()) return h.toEnumLabel(i);
          if (S === _c) return !!i;
          if (i != V) {
            if (S === gq) return c(i);
            if (Fe(i)) return Sb(i)
          }
          return i
        }, I.setEnum = function (n, H, i, x, W, u) {
          var o = this;
          n && !qp(n) && n.values && (x = n.editable, i = n.icons, H = n.labels, W = n.strict, u = n.maxHeight, n = n.values), md(n) && (n = n._as), md(H) && (H = H._as), md(i) && (i = i._as), o._enumValues = n, o._enumLabels = H, o._enumIcons = i, o._enumEditable = x, o._enumStrict = W == V ? !0 : W, o._enumMaxHeight = u, n && n.length && Fe(n[0]) && (o._valueType = mr), o.fp("enum", !1, !0)
        }, I.getEnumMaxHeight = function () {
          return this._enumMaxHeight
        }, I.isEnumEditable = function () {
          return this._enumEditable
        }, I.getEnumValues = function () {
          return this._enumValues
        }, I.getEnumLabels = function () {
          return this._enumLabels
        }, I.getEnumIcons = function () {
          return this._enumIcons
        }, I.isEnumStrict = function () {
          return this._enumStrict
        }, I.isEnumEqual = function (D, S) {
          return this._enumStrict ? D === S : D == S
        }, I.toEnumLabel = function (s) {
          var p = this,
            m = p._enumValues,
            B = p._enumLabels;
          if (m && B)
            for (var A = 0; A < m.length; A++)
              if (p.isEnumEqual(s, m[A])) return B[A];
          return s
        }, I.toEnumIcon = function (W) {
          var u = this,
            g = u._enumValues,
            s = u._enumIcons;
          if (g && s)
            for (var G = 0; G < g.length; G++)
              if (u.isEnumEqual(W, g[G])) return s[G];
          return b
        }
      }, _45o: function (c) {
        c._87o = function (P, R, m, f, H, r) {
          if (P) {
            var F = this,
              S = F._90I,
              C = Jd(1);
            F._columnLineVisible && (H -= 1), F._rowLineVisible && (r -= 1), 0 >= H || 0 >= r || (F._90I || (S = F._90I = {}), S[R] || (S[R] = new Vq), ke(C, F.tx() + m, F.ty() + f, H, r), ni(C, P), F._view.insertBefore(C, F._79O), P.onParentAdded && P.onParentAdded(C), S[R].add(C))
          }
        }, c._76o = function () {
          var i = this,
            x = i._90I;
          if (x) {
            for (var Z in x) x[Z].each(function (S) {
              Wj(S)
            });
            delete i._90I
          }
        }, c._77o = function (e) {
          var h = this;
          if (h._90I) {
            var G = h._90I[e];
            G && (G.each(function (R) {
              Wj(R)
            }), delete h._90I[e])
          }
        }
      }, _47o: function (M) {
        M.getValue = function (n, a) {
          return a.getValue ? a.getValue(n, a, this) : Ac(n, a.getAccessType(), a.getName())
        }, M.setValue = function (B, o, u) {
          if (o.isEmptiable() || "" !== u || (u = b), o.isNullable() || u != V) {
            var f = this,
              k = o.getName(),
              g = o.getAccessType(),
              j = o.getValueType();
            j === gq && hn(u) ? u = P(u) : j === mr && hn(u) ? u = parseFloat(u) : j === _c && hn(u) && (u = "true" === u), f._batchEditable && o._batchEditable && f.isSelected(B) ? f.sm().each(function (t) {
              o.setValue ? o.setValue(t, o, u, f) : wk(t, g, k, u)
            }) : o.setValue ? o.setValue(B, o, u, f) : wk(B, g, k, u)
          }
        }, M.setCurrentEditor = function (G) {
          this.endEditing(), this._currentEditor = G, this.redraw()
        }, M.isEditing = function (u, P) {
          var l = this,
            x = l._currentEditor;
          if (!x) return !1;
          if (P) {
            var A = x.info;
            return A ? (A.column || A.property) === P && A.data === u : !1
          }
          return !0
        }, M.endEditing = function () {
          var V = this,
            o = V._currentEditor,
            Z = V.getDataModel().getHistoryManager();
          o && (delete V._currentEditor, o.commitValue && o.commitValue(o.info), V.redraw(), Z && Z.endInteraction())
        }, M.beginEditing = function (X) {
          this.endEditing();
          var c = this,
            Q = X.column || X.property;
          if (Q.beginEditing) Q.beginEditing(X);
          else {
            var E = X.data,
              U = X.value,
              C = c.getSelectBackground(E),
              K = Q.getEnumValues(),
              t = Q.getSlider(),
              r = Q.getColorPicker();
            if (t) {
              var o = Hh(sq.Slider, t);
              return o.setValue(U), o.getView().onblur = function () {
                c.endEditing()
              }, o.isInstant() && (o.onValueChanged = function () {
                c.setValue(E, Q, o.getValue())
              }), zj(o, X), void 0
            }
            if (r || Q.getValueType() === nc) {
              var F = Hh(sq.ColorPicker, r);
              return F.setValue(U), F.onClosed = function () {
                c.endEditing()
              }, F.isInstant() && (F.onValueChanged = function (X, N) {
                c.setValue(E, Q, N)
              }), zj(F, X), F.open(), void 0
            }
            if (K) {
              if (sq.ComboBox) {
                var b = new sq.ComboBox;
                b.setValue(U), b.setValues(K), b.setLabels(Q.getEnumLabels()), b.setIcons(Q.getEnumIcons()), b.setEditable(Q.isEnumEditable()), b.setStrict(Q.isEnumStrict()), b.setMaxHeight(Q.getEnumMaxHeight()), b.onClosed = function () {
                  c.endEditing()
                }, zj(b, X), b.open()
              } else vj(yc, X, C, K, Q);
              return
            }
            var h = Q.getValueType();
            if (h === _c || np(U)) return c.setValue(E, Q, !U), void 0;
            if (Q.getItemEditor()) {
              var z = Ek(Q.getItemEditor()),
                w = new z(E, Q, c, X),
                H = w.getView();
              return H._17Q = w, w.setValue(U), zn(H), zj(H, X), w.editBeginning && w.editBeginning(), void 0
            }
            vj("input", X, C, V, Q)
          }
        }
      }, _44o: function (o) {
        o.init = function (S) {
          var C = this,
            z = C.th = new Zg(S),
            I = C._view = df(1, C);
          C.tv = C._tableView = S, ni(I, z.getView()), ni(I, S.getView()), z.mp(function (X) {
            X.property === Ji && C.iv()
          }), C.iv()
        }, o.getTableView = function () {
          return this.tv
        }, o.getTableHeader = function () {
          return this.th
        }, o.getDataModel = function () {
          return this.tv.dm()
        }, o.getColumnModel = function () {
          return this.tv.getColumnModel()
        }, o.setColumns = function (S) {
          this.tv.setColumns(S)
        }, o.addColumns = function (j) {
          this.tv.addColumns(j)
        }, o.endEditing = function () {
          this.tv.endEditing()
        }, o.validateImpl = function () {
          var O = this,
            l = O.th,
            F = sh(l),
            p = {
              x: 0,
              y: 0,
              width: O.getWidth(),
              height: F
            };
          ke(l, p), p.y = F, p.height = v(0, O.getHeight() - F), ke(O.tv, p)
        }
      }, ms_vs: function (x) {
        x._41o = function () {
          return this._29I.height < this._59I
        }, x._43o = function () {
          var f = this;
          f._41o() && (f._58I || (w(function () {
            f._94O()
          }, qc), f.iv()), f._58I = new Date)
        }, x._94O = function () {
          var m = this;
          if (m._58I) {
            var Y = new Date;
            Y.getTime() - m._58I.getTime() >= qc ? (delete m._58I, m.iv()) : w(function () {
              m._94O()
            }, qc)
          }
        }, x._93I = function () {
          var j = this,
            A = j._27I;
          if (j._58I || !j._autoHideScrollBar) {
            A || ni(j._79O, A = j._27I = Jd());
            var T = j._29I,
              F = T.height,
              e = j._59I,
              z = j.getScrollBarSize(),
              c = T.width - z - 2,
              y = F * (-j.ty() / e),
              _ = F * (F / e),
              M = A.style;
            e > F ? (xm > _ && (y = y + _ / 2 - xm / 2, 0 > y && (y = 0), y + xm > F && (y = F - xm), _ = xm), M.visibility = gj, M.background = j.getScrollBarColor(), M.borderRadius = z / 2 + op, ke(A, c, y, z, _)) : M.visibility = He
          } else A && (A.style.visibility = He)
        }
      }, ms_hs: function (E) {
        E._40o = function () {
          return this._29I.width < this._91I
        }, E._42o = function () {
          var I = this;
          I._40o() && (I._95O || (w(function () {
            I._94I()
          }, qc), I.iv()), I._95O = new Date)
        }, E._94I = function () {
          var m = this;
          if (m._95O) {
            var i = new Date;
            i.getTime() - m._95O.getTime() >= qc ? (delete m._95O, m.iv()) : w(function () {
              m._94I()
            }, qc)
          }
        }, E._92I = function () {
          var w = this,
            H = w._28I;
          if (w._95O || !w._autoHideScrollBar) {
            H || ni(w._79O, H = w._28I = Jd());
            var R = w._29I,
              v = R.width,
              $ = w._91I,
              I = w.getScrollBarSize(),
              V = R.height - I - 2,
              B = v * (-w.tx() / $),
              t = v * (v / $),
              A = H.style;
            $ > v ? (xm > t && (B = B + t / 2 - xm / 2, 0 > B && (B = 0), B + xm > v && (B = v - xm), t = xm), A.visibility = gj, A.background = w.getScrollBarColor(), A.borderRadius = I / 2 + op, ke(H, B, V, t, I)) : A.visibility = He
          } else H && (H.style.visibility = He)
        }
      }
    }), ro(Qj, vp(16, 16, [{
      type: Pg,
      rect: [1, 1, 14, 14],
      background: hi
    }, {
      type: bq,
      rect: [1, 1, 14, 14],
      width: 1,
      color: So
    }, {
      type: Wd,
      points: [13, 3, 7, 12, 4, 8],
      borderWidth: 2,
      borderColor: "#FFF"
    }])), ro(Of, vp(16, 16, {
      type: bq,
      rect: [1, 1, 14, 14],
      width: 1,
      color: So
    })), ro($j, vp(16, 16, [{
      type: Dq,
      rect: [2, 2, 12, 12],
      borderWidth: 1,
      borderColor: So,
      background: "#FFF"
    }, {
      type: Dq,
      rect: [4, 4, 8, 8],
      background: hi
    }])), ro(Aq, vp(16, 16, {
      type: Dq,
      rect: [2, 2, 12, 12],
      borderWidth: 1,
      borderColor: So
    })), Ho._15Q = function (g) {
      g._29I = Bb, g._59I = 0, g._91I = 0, g._5o = function (u) {
        var Q = this;
        Q._30I = new Vq, Q._rows = new Vq, Q._rowMap = {}, Q._31I = 0, Q._14I = 0, Q._view = df(1, Q), Q._canvas = ip(Q._view), ni(Q._view, Q._79O = Jd()), Q.dm(u ? u : new Ie)
      }, g.getCheckIcon = function (H) {
        var W = this.sm(),
          i = W.co(H);
        return W.sg() ? ye(i ? $j : Aq) : ye(i ? Qj : Of)
      }, g.checkData = function (j) {
        var m = this.sm(),
          e = m.co(j);
        m.sg() && e || (this._32o = 1, e ? m.rs(j) : m.as(j), delete this._32o)
      }, g.getDataAt = function (X) {
        X.target && (X = this.lp(X));
        var r = M(X.y / this._rowHeight),
          i = this._rows;
        return 0 > r || r >= i.size() ? V : i.get(r)
      }, g.onDataDoubleClicked = function () {}, g.onDataClicked = function () {}, g.adjustTranslateX = function () {
        return 0
      }, g.adjustTranslateY = function (n) {
        var E = this.getHeight() - this._59I;
        return E > n && (n = E), n > 0 ? 0 : c(n)
      }, g.onPropertyChanged = function (R) {
        var S = this,
          o = R.property;
        bc[o] ? S.ivm() : Cg[o] || S.redraw(), o === vb ? S._42o() : o === vr && S._43o()
      }, g.getLabel = function (K) {
        return K.toLabel()
      }, g.getLabelFont = function () {
        return this._labelFont
      }, g.getLabelColor = function (t) {
        var _ = this;
        if (_.isCheckMode()) {
          if (_._focusData === t) return _._labelSelectColor
        } else if (_.isSelected(t)) return _._labelSelectColor;
        return _._labelColor
      }, g.getStartRowIndex = function () {
        return this._31I
      }, g.getEndRowIndex = function () {
        return this._14I
      }, g.getRowDatas = function () {
        return this._rows
      }, g.getRowIndex = function (L) {
        return this._rowMap[L._id]
      }, g.getRowSize = function () {
        return this._rows.size()
      }, g.getViewRect = function () {
        return jh(this._29I)
      }, g.isVisible = function (d) {
        return this._visibleFunc ? this._visibleFunc(d) : !0
      }, g.getCurrentSortFunc = function () {
        return this._sortFunc
      }, g.setDataModel = function (j) {
        var m = this,
          S = m._dataModel,
          l = m._3o;
        S !== j && (S && (S.umm(m.handleDataModelChange, m), S.umd(m.handleDataPropertyChange, m), S.umh(m._15o, m), l || S.sm().ums(m._16o, m)), m._dataModel = j, j.mm(m.handleDataModelChange, m), j.md(m.handleDataPropertyChange, m), j.mh(m._15o, m), l ? l._21I(j) : j.sm().ms(m._16o, m), m.fp("dataModel", S, j))
      }, g.validateModel = function () {
        var F = this;
        F._rows.clear(), F._rowMap = {}, F.buildChildren(F._dataModel._roots);
        var Q = F._rows = F._rows.toList(F.isVisible, F),
          s = 0,
          f = F.getCurrentSortFunc(),
          n = Q.size();
        for (f && Q.sort(f); n > s; s++) F._rowMap[Q.get(s)._id] = s
      }, g.buildChildren = function (k) {
        var t = this;
        k.each(function (J) {
          t._rows.add(J), t.buildChildren(J._children)
        })
      }, g.handleDataModelChange = function () {
        this.ivm()
      }, g.handleDataPropertyChange = function (n) {
        "parent" === n.property ? this.ivm() : this.invalidateData(n.data)
      }, g._15o = function () {
        this.ivm()
      }, g._16o = function (x) {
        x.datas.each(this.invalidateData, this), this.onSelectionChanged(x)
      }, g.onSelectionChanged = function (k) {
        var f = this,
          L = f.sm();
        !f.isAutoMakeVisible() || 1 !== L.size() || "set" !== k.kind && "append" !== k.kind || f._32o || f.makeVisible(L.ld())
      }, g.makeVisible = function (A) {
        A && (this._23I = A, this.iv())
      }, g.scrollToIndex = function (j) {
        var f = this,
          t = f._29I,
          z = t.height,
          E = f._rowHeight,
          G = E * j;
        j >= 0 && j < f._rows.size() && z > 0 && (G + E > t.y + z ? f.ty(-G + z - E) : G < t.y && f.ty(-G))
      }, g.ivm = function () {
        this.invalidateModel()
      }, g.invalidateModel = function () {
        var Y = this;
        Y._96I || (Y._96I = 1, Y._32I = 1, delete Y._24I, Y.iv())
      }, g.redraw = function () {
        var M = this;
        M._32I || (M._32I = 1, delete M._24I, M.iv())
      }, g.invalidateData = function (p) {
        var K = this;
        m ? K.redraw() : K._32I || (K._24I || (K._24I = {}), K._24I[p._id] = p, K.iv())
      }, g.getFocusData = function () {
        return this._focusData
      }, g.setFocusDataById = function (A) {
        this.setFocusData(this.dm().getDataById(A))
      }, g.setFocusData = function (J) {
        var m = this,
          F = m._focusData;
        F !== J && (m._focusData = J, m.fp("focusData", F, J), F && m.invalidateData(F), J && (m.invalidateData(J), m.isAutoMakeVisible() && m.makeVisible(J)))
      }, g.drawRowBackground = function (t, D, F, M, N, P, S) {
        var J = this,
          O = J.isCheckMode();
        (D === J._focusData && O || F && !O) && en(t, M, N, P, S, J.getSelectBackground(D))
      }, g.drawData = function (C, F, U) {
        var R = this,
          P = R._rowHeight,
          o = P * U,
          x = R._29I,
          $ = x.x,
          Y = x.width;
        C.save(), C.beginPath(), C.rect($, o, Y, P), C.clip(), R._87o(R.drawRow(C, F, R.isSelected(F), $, o, Y, P), U, $, o, Y, P), C.restore(), R._rowLineVisible && en(C, $, o + P - 1, Y, 1, R._rowLineColor)
      }, g._12I = function (t) {
        var J = this,
          E = J._31I,
          A = J._29I,
          u = A.x,
          l = A.y,
          q = A.width,
          Y = A.height;
        for (t.beginPath(), t.rect(u, l, q, Y), t.clip(), t.clearRect(u, l, q, Y), J._76o(), J._93db(t); E < J._14I; E++) J.drawData(t, J._rows.get(E), E);
        J._92db(t)
      }, g._13I = function (r) {
        for (var d, S = this, T = S._rowHeight, g = S._29I, M = g.x, $ = g.width, A = S._31I, m = S._30I; A < S._14I; A++) d = S._rows.get(A), S._24I[d._id] && m.add({
          data: d,
          index: A
        });
        m.isEmpty() || (r.beginPath(), m.each(function (c) {
          r.rect(M, c.index * T, $, T)
        }), r.clip(), m.each(function (H) {
          r.clearRect(M, H.index * T, $, T)
        }), m.each(function (s) {
          S._77o(s.index)
        }), S._93db(r), m.each(function (K) {
          S.drawData(r, K.data, K.index)
        }), S._92db(r), m.clear())
      }, g.validateImpl = function () {
        var q = this,
          I = q._canvas,
          o = q.getWidth(),
          u = q.getHeight(),
          d = q._rowHeight,
          w = q._32I;
        (o !== I.clientWidth || u !== I.clientHeight) && (We(I, o, u), w = 1);
        var B = E && !Y;
        q._96I && !B && q.validateModel();
        var m = q._29I,
          a = {
            x: -q.tx(),
            y: -q.ty(),
            width: o,
            height: u
          },
          p = q._rows.size(),
          h = Wl(I),
          z = q._23I;
        w || io(a, m) || (w = 1), q._29I = a, q._59I = p * d, q._31I = M(a.y / d), q._14I = F((a.y + a.height) / d), q._31I < 0 && (q._31I = 0), q._14I > p && (q._14I = p), q._99I && w && q._99I(), je(h, q.tx(), q.ty(), 1), w ? q._12I(h) : q._24I && q._13I(h), q._93I(), q._92I(), h.restore(), q._32I = q._24I = q._96I = V, z && (q.scrollToIndex(q.getRowIndex(z)), delete q._23I), q.tx(q.tx()), q.ty(q.ty())
      }
    }, Ho._48o = function (T) {
      T._rootVisible = !0, T._rootData = V, T._35o = function () {
        this._expandMap = {}, this._levelMap = {}
      }, T.validateModel = function () {
        var Q = this,
          p = Q._rootData;
        Q._rows.clear(), Q._levelMap = {}, Q._rowMap = {}, Q._currentLevel = 0, p ? Q._rootVisible ? Q.isVisible(p) && Q.buildData(p) : Q.buildChildren(p) : Q.buildChildren(), delete Q._currentLevel
      }, T.buildData = function (Y) {
        var P = this,
          U = Y._id,
          h = P._rows;
        P._rowMap[U] = h.size(), h.add(Y), P._levelMap[U] = P._currentLevel, P.isExpanded(Y) && (P._currentLevel++, P.buildChildren(Y), P._currentLevel--)
      }, T.buildChildren = function (n) {
        var U = this,
          T = n ? n._children : U._dataModel._roots,
          j = U.getCurrentSortFunc();
        j && U.isChildrenSortable(n) ? T.toList(U.isVisible, U).sort(j).each(U.buildData, U) : T.each(function (s) {
          U.isVisible(s) && U.buildData(s)
        })
      }, T.getLevel = function (l) {
        return this._levelMap[l._id]
      }, T.getToggleIcon = function (F) {
        var Z = this,
          g = Z._loader,
          O = Z._collapseIcon;
        return g && !g.isLoaded(F) ? O : F.hasChildren() ? Z.isExpanded(F) ? Z._expandIcon : O : V
      }, T.isCheckMode = function () {
        return this._checkMode != V
      }, T.isChildrenSortable = function () {
        return !0
      }, T.handleDataModelChange = function (x) {
        var Q = this;
        x.kind === rb ? delete Q._expandMap[x.data._id] : x.kind === hq && (Q._expandMap = {}), Q.ivm()
      }, T.toggle = function (W) {
        var h = this;
        h.isExpanded(W) ? h.collapse(W) : h.expand(W)
      }, T.isExpanded = function (N) {
        return 1 === this._expandMap[N._id]
      }, T.expand = function (R) {
        var t = this,
          w = t._loader;
        t.isExpanded(R) || (w && !w.isLoaded(R) && w.load(R), t._expandMap[R._id] = 1, t.ivm(), t.onExpanded(R))
      }, T.onExpanded = function () {}, T.collapse = function (i) {
        var K = this;
        K.isExpanded(i) && (delete K._expandMap[i._id], K.ivm(), K.onCollapsed(i))
      }, T.onCollapsed = function () {}, T.expandAll = function () {
        var g = this;
        g._dataModel.each(function (e) {
          e.hasChildren() && (g._expandMap[e._id] = 1)
        }), g.ivm()
      }, T.collapseAll = function () {
        this._expandMap = {}, this.ivm()
      }, T.makeVisible = function (m) {
        if (m) {
          var M = this;
          if (!M._rootData || m.isDescendantOf(M._rootData)) {
            for (var I = m._parent; I;) M.expand(I), I = I._parent;
            M._23I = m, M.iv()
          }
        }
      }, T.checkData = function (o) {
        var D, s = this,
          m = s._checkMode,
          X = s.sm(),
          d = X.co(o);
        if (!X.sg() || !d) {
          if (s._32o = 1, m === q) d ? X.rs(o) : X.as(o);
          else if (m === Fd) D = new Vq(o), D.addAll(o._children);
          else if ("descendant" === m) D = new Vq, ss(o, D);
          else if ("all" === m && (D = new Vq, ss(o, D), !d))
            for (var G = o._parent; G;) D.add(G), G = G._parent;
          D && (d ? X.rs(D) : X.as(D)), delete s._32o
        }
      }, T._97I = function (o, y, L, D, j, O, J) {
        var h = this,
          b = h._indent,
          m = h._levelMap[y._id],
          c = h.getIconWidth(y),
          z = ye(h.getToggleIcon(y));
        z ? (D += b * m, Nb(o, z, D + b / 2, j + J / 2, y, h), D += b) : D += b * (m + 1), h._checkMode && (Nb(o, h.getCheckIcon(y), D + b / 2, j + J / 2, y, h), D += b), h.drawIcon(o, y, D, j, c, J), h.drawLabel(o, y, D + c, j, J)
      }
    }, Ho._14Q = function (n) {
      n.getIcon = function (g) {
        return g.getIcon()
      }, n.getIconWidth = function (G) {
        return this.getIcon(G) ? this._indent : 0
      }, n.drawIcon = function (H, i, u, R, r, $) {
        if (r) {
          var _ = this,
            E = _.getBodyColor(i),
            F = ye(_.getIcon(i), E);
          F && ($ -= _.isRowLineVisible() ? 1 : 0, Rm(H, F, ho, u, R, r, $, i, _, E), In(H, _.getBorderColor(i), u, R, r, $))
        }
      }, n.drawLabel = function ($, e, M, c, p) {
        var K = this;
        Uq($, K.getLabel(e), K.getLabelFont(e), K.getLabelColor(e), M, c, 0, p)
      }
    }, Ho._50o = function (B) {
      B._98I = function () {
        var G = this,
          p = G._39o = new Ie;
        G._60I = new Vq, p.mm(G._17o, G), p.md(G._18o, G), p.mh(G._19o, G)
      }, B.setColumns = function (A) {
        this._39o.clear(), this.addColumns(A)
      }, B.addColumns = function (e) {
        var U = this._39o;
        e.forEach(function (m) {
          if (!(m instanceof Sk)) {
            var M = Ek(m.className);
            m = Hh(M ? M : Sk, m)
          }
          U.add(m)
        })
      }, B.onColumnClicked = function () {}, B.onCheckColumnClicked = function () {}, B._3Q = function (g) {
        for (var Q, H = 0, E = this._60I, t = E.size(); t > H; H++)
          if (Q = E.get(H), Q.column === g) return Q;
        return V
      }, B.getColumnAt = function (R) {
        var A = this._4Q(R);
        return A ? A.column : V
      }, B._4Q = function (E) {
        for (var v = this, z = E.target ? v.lp(E).x : E.x, l = v._60I, r = 0; r < l.size(); r++) {
          var S = l.get(r),
            I = S.startX;
          if (z >= I && z < I + S.column.getWidth()) return S
        }
        return V
      }, B.getToolTip = function (o) {
        var j = this,
          z = j.getDataAt(o),
          t = j.getColumnAt(o);
        return z && t ? t.getToolTip(z, j) : V
      }, B.adjustTranslateX = function (L) {
        var m = this.getWidth() - this._91I;
        return m > L && (L = m), L > 0 ? 0 : c(L)
      }, B._99I = function () {
        var C = this,
          z = C._29I,
          $ = C._60I;
        $.clear(), C._91I = 0, C._39o._roots.each(function (g) {
          if (g.isVisible()) {
            var k = C._91I + g.getWidth();
            C._91I <= z.x + z.width && k >= z.x && $.add({
              column: g,
              startX: C._91I
            }), C._91I = k
          }
        })
      }, B.drawData = function (J, A, I) {
        var z = this,
          r = z._rowHeight,
          K = r * I,
          N = z.isSelected(A),
          E = z._29I,
          X = E.x,
          G = E.width;
        z.drawRowBackground(J, A, N, X, K, G, r), z._60I.each(function (k) {
          var X = k.column,
            G = k.startX,
            d = X.getWidth();
          d > 0 && !z.isEditing(A, X) && (J.save(), J.beginPath(), J.rect(G, K, d, r), J.clip(), z._87o(z.drawCell(J, A, N, X, G, K, d, r), I, G, K, d, r), z._columnLineVisible && en(J, G + d - 1, K, 1, r, z._columnLineColor), J.restore())
        }), z._rowLineVisible && en(J, X, K + r - 1, G, 1, z._rowLineColor)
      }, B.drawCell = function (m, B, l, v, w, P, S, c) {
        var D = this;
        if (v.drawCell) return v.drawCell(m, B, l, v, w, P, S, c, D);
        var G = D.getValue(B, v);
        qd(m, G, v, D.getLabelFont(B, v, G), D.getLabelColor(B, v, G), w, P, S, c, B, D)
      }, B.getColumnModel = function () {
        return this._39o
      }, B._17o = function () {
        this.redraw()
      }, B._18o = function (i) {
        var G = this;
        i.data === G._sortColumn && Kd[i.property] ? G.ivm() : (G._42o(), G.redraw())
      }, B._19o = function () {
        this.redraw()
      }, B.getCurrentSortFunc = function () {
        var l = this,
          R = l._sortColumn;
        if (R && R.isSortable()) {
          var Z = R.getSortFunc(),
            f = Oi === R.getSortOrder() ? 1 : -1;
          return Z || (Z = Mi),
            function (e, C) {
              return Z.call(l, l.getValue(e, R), l.getValue(C, R), e, C) * f
            }
        }
        return l._sortFunc
      }, B.isCellEditable = function (e, K) {
        return K.isEditable() && this.isEditable()
      }, B._37O = function (j, I) {
        if (co(I))
          for (var Z = this, x = Z.lp(I), y = Z._60I, h = Z._rowHeight, l = Z._29I, J = l.x, H = l.y, o = l.width, E = l.height, c = 0; c < y.size(); c++) {
            var B = y.get(c),
              f = B.startX,
              w = B.column,
              t = w.getWidth();
            if (w !== Z._31o && w !== Z._4o && Z.isCellEditable(j, w) && x.x >= f && x.x < f + t) {
              var D = {
                  x: f,
                  y: Z.getRowIndex(j) * h,
                  width: t,
                  height: h
                },
                L = {
                  x: D.x + Z.tx(),
                  y: D.y + Z.ty(),
                  width: D.width,
                  height: D.height
                },
                N = 0,
                g = 0;
              return D.x < J ? N = D.x - J : D.x + D.width > J + o && (N = D.x + D.width - J - o), N && (Z.tx(Z.tx() - N), L.x -= N), D.y < H ? g = D.y - H : D.y + h > H + E && (g = D.y + h - H - E), g && (Z.ty(Z.ty() - g), L.y -= g), Z.beginEditing({
                data: j,
                column: w,
                value: Z.getValue(j, w),
                event: I,
                rect: D,
                editorRect: L,
                view: Z
              }), void 0
            }
          }
      }
    }, sq.BaseItemEditor = function (U, v, Y, $) {
      this._data = U, this._column = v, this._master = Y, this._editInfo = $
    }, vn("BaseItemEditor", d, {
      ms_ac: ["data", "column", "master", "editInfo"],
      editBeginning: function () {}, getView: function () {}, getValue: function () {}, setValue: function () {}
    });
    var Mf = T.Tab = function () {
      gr(Mf, this)
    };
    Dh("Tab", Vi, {
      ms_ac: ["view", "closable", "disabled"],
      _icon: V,
      _closable: !1,
      _disabled: !1,
      setParent: Xp
    });
    var Sk = T.Column = function () {
      gr(Sk, this)
    };
    Dh("Column", Vi, {
      _46o: 1,
      ms_ac: ["accessType", "valueType", gj, cn, Kp, ag, "align", nc, "sortOrder", Sg, "sortable", "nullable", "emptiable", "slider", "colorPicker", "itemEditor"],
      _visible: !0,
      _width: 80,
      _sortOrder: Oi,
      _sortFunc: V,
      _sortable: !0,
      setWidth: function (n) {
        16 > n && (n = 16);
        var $ = this._width;
        this._width = n, this.fp(ag, $, n)
      }, getToolTip: function (m, x) {
        return this.formatValue(x.getValue(m, this))
      }
    });
    var gn = T.Property = function () {
      gr(gn, this)
    };
    Dh("Property", Vi, {
      _46o: 1,
      ms_ac: ["accessType", "valueType", cn, Kp, "categoryName", nc, "align", "nullable", "emptiable", "slider", "itemEditor", "colorPicker"],
      _categoryName: V,
      getToolTip: function (d, x, Q) {
        var z = this;
        return x ? z.formatValue(Q.getValue(d, z)) : Q.getPropertyName(z)
      }
    }), sq.AccordionView = function () {
      var n = this;
      n._20o = {}, n._21o = new Vq, n._10o = V, n._9o = V, n._11o = V, n._view = df(0, n), n.iv()
    }, vn("AccordionView", d, {
      ms_v: 1,
      ms_fire: 1,
      ms_ac: [ug, Hq, "titleHeight", Rh, jm, "titleBackground", "selectWidth", Zo, "orientation", "separatorColor"],
      _expandIcon: H.accordionViewExpandIcon,
      _collapseIcon: H.accordionViewCollapseIcon,
      _titleHeight: Mn,
      _labelColor: H.accordionViewLabelColor,
      _labelFont: H.accordionViewLabelFont,
      _titleBackground: H.accordionViewTitleBackground,
      _selectBackground: H.accordionViewSelectBackground,
      _selectWidth: H.accordionViewSelectWidth,
      _orientation: "v",
      _separatorColor: H.accordionViewSeparatorColor,
      onPropertyChanged: function () {
        this.iv()
      }, getView: function () {
        return this._view
      }, getTitles: function () {
        return this._21o
      }, getCurrentTitle: function () {
        return this._10o
      }, add: function (G, i, K, k) {
        var D = this,
          F = Jd();
        if (D._20o[G]) throw G + " already exists";
        F.onmousedown = gk, F.style.cursor = Hr, F.addEventListener(h ? eo : Dm, function (R) {
          gk(R)
        }, !1), F.addEventListener(h ? Zi : jp, function (u) {
          gk(u), co(u) && (D._10o === G ? D.collapse() : D.expand(G))
        }, !1), ni(D._view, F), D._20o[G] = {
          content: i,
          div: F,
          canvas: ip(F),
          icon: k
        }, D._21o.add(G), K && D.expand(G), D.iv()
      }, remove: function (v) {
        var t = this,
          u = t._20o[v];
        u && (Wj(u.div), delete t._20o[v], t._21o.remove(v), t.iv())
      }, clear: function () {
        var F = this;
        F._20o = {}, F._21o.clear(), F.iv()
      }, isExpanded: function (c) {
        return this._10o === c
      }, expand: function (M) {
        var y = this;
        y._20o[M] && y._10o !== M && (y._10o = M, y.onExpanded(M), y.iv())
      }, onExpanded: function () {}, collapse: function () {
        var h = this;
        h._10o && (h.onCollapsed(h._10o), delete h._10o, h.iv())
      }, onCollapsed: function () {}, initCanvas: function (C, Z, h) {
        We(C, Z, h);
        var e = Wl(C);
        return je(e, 0, 0, 1), e.clearRect(0, 0, Z, h), e
      }, drawTitle: function (M, H, e, _, Q) {
        var o = this,
          G = ye(Q.icon),
          d = o.isExpanded(H),
          b = o._titleHeight,
          U = o._titleBackground,
          n = o._selectWidth,
          E = o._separatorColor,
          B = ye(d ? o._expandIcon : o._collapseIcon),
          S = n + 4;
        en(M, 0, 0, e, _, U), d && n && en(M, 0, 0, n, _, o._selectBackground), (d || o._21o.get(o._21o.size() - 1) !== H) && en(M, 0, _ - 1, e, 1, E ? E : Pr(U)), G && (Nb(M, G, S + lc(G) / 2, b / 2), S += lc(G) + 2), Uq(M, H, o.getLabelFont(H), o.getLabelColor(H), S, 0, 0, b), B && Nb(M, B, e - lc(B) / 2 - 4, b / 2)
      }, validateImpl: function () {
        var V = this,
          K = V._view,
          N = 0,
          q = 0,
          g = V.getWidth(),
          G = V.getHeight(),
          s = V._titleHeight,
          x = V._21o.size() * s,
          t = V._11o,
          c = V._9o;
        delete V._11o, delete V._9o, V._21o.each(function (I) {
          var Y, u, M = V._20o[I],
            d = M.content,
            A = V._10o === I;
          Yd(V) ? (ke(M.div, N, 0, s, G), Y = V.initCanvas(M.canvas, s, G), Md(Y, 0, G), Hf(Y, -O), V.drawTitle(Y, I, G, s, M), Y.restore(), A ? (u = v(0, g - x), d && (V._11o = d, V._9o = hl(d), ke(d, N + s, 0, u, G)), N += s + u) : N += s) : (ke(M.div, 0, q, g, s), Y = V.initCanvas(M.canvas, g, s), V.drawTitle(Y, I, g, s, M), Y.restore(), A ? (u = v(0, G - x), d && (V._11o = d, V._9o = hl(d), ke(d, 0, q + s, g, u)), q += s + u) : q += s)
        });
        var w = V._9o;
        t && t !== V._11o && t.endEditing && t.endEditing(), w && w !== c && ni(K, w), c && c !== w && Wj(c)
      }
    }), sq.SplitView = function (k, M, l, P) {
      var A = this,
        s = A._dividerDiv = Jd(),
        C = A._60O = ip(),
        G = A._61O = ip(),
        j = C.style,
        x = G.style;
      A._view = df(1, A), ni(A._view, s), j.msTouchAction = cj, j.pointerEvents = cj, j.cursor = Hr, x.msTouchAction = cj, x.pointerEvents = cj, x.cursor = Hr, k && A.setLeftView(k), M && A.setRightView(M), l && A.setOrientation(l), P != V && A.setPosition(P), A.setStatus(Ae), new zd(A)
    }, vn("SplitView", d, {
      ms_v: 1,
      ms_fire: 1,
      ms_ac: ["dividerSize", "dividerBackground", "toggleIcon", "togglable", "dragOpacity", "orientation", "draggable", "status"],
      _position: .5,
      _togglable: !0,
      _orientation: "h",
      _draggable: !0,
      _dividerSize: H.splitViewDividerSize,
      _dividerBackground: H.splitViewDividerBackground,
      _dragOpacity: H.splitViewDragOpacity,
      _toggleIcon: H.splitViewToggleIcon,
      onPropertyChanged: function () {
        this.iv()
      }, getDividerDiv: function () {
        return this._dividerDiv
      }, getPosition: function () {
        return this._position
      }, setPosition: function (M, G) {
        var y = this,
          U = y._position;
        isNaN(M) || (G || (y._82O = 0 > M ? -1 : M > 1 ? 1 : 0), y._position = M, y.fp(Kh, U, M))
      }, getLeftView: function () {
        return this._leftView
      }, setLeftView: function (b) {
        var k = this,
          F = k._leftView,
          f = k._view;
        if (k._leftView !== b) {
          if (F && F !== k._rightView) {
            var A = hl(F);
            A.parentNode === f && Wj(A)
          }
          if (k._leftView = b, b) {
            var $ = hl(b);
            $.parentNode !== f && f.insertBefore($, k._dividerDiv)
          }
          k.fp("leftView", F, b)
        }
      }, getRightView: function () {
        return this._rightView
      }, setRightView: function (b) {
        var t = this,
          w = t._rightView,
          $ = t._view;
        if (t._rightView !== b) {
          if (w && w !== t._leftView) {
            var A = hl(w);
            A.parentNode === $ && Wj(A)
          }
          if (t._rightView = b, b) {
            var Y = hl(b);
            Y.parentNode !== $ && $.insertBefore(Y, t._dividerDiv)
          }
          t.fp("rightView", w, b)
        }
      }, validateImpl: function () {
        var K = this,
          T = K._draggable,
          w = K._position,
          g = K.getWidth(),
          $ = K.getHeight(),
          q = K._dividerSize,
          a = K._dividerBackground,
          t = h ? 18 : 8,
          b = K._dividerDiv,
          C = K._82O,
          G = K._60O,
          d = K._61O,
          L = K._toggleIcon,
          P = K._status,
          y = b.style,
          Z = null,
          D = h ? 20 : 4,
          u = L.comps[0];
        q >= t || 0 === q ? K._coverDiv && (Wj(K._coverDiv), delete K._coverDiv) : K._coverDiv || (K._coverDiv = Jd(), Q && (K._coverDiv.style.background = Lp), ni(b, K._coverDiv)), K._togglable ? G.parentNode || (ni(b, G), ni(b, d)) : (Wj(G), Wj(d));
        var W = K._coverDiv,
          V = K._leftView,
          N = K._rightView;
        if (Yd(K)) {
          if (q > g && (q = g), P === Ae)
            if (1 === C) var k = w,
              F = v(0, g - q - k);
            else -1 === C ? (F = -w, k = v(0, g - q - F)) : (k = c((g - q) * w), F = v(0, g - q - k));
          else "cl" === P ? (k = 0, F = v(0, g - q)) : "cr" === P && (F = 0, k = v(0, g - q));
          V && ke(V, 0, 0, k, $), N && ke(N, k + q, 0, F, $), ke(b, k, 0, q, $), K._22o = k, W && (ke(W, q / 2 - t / 2, 0, t, $), W.style.cursor = T ? Dn : ""), b.style.cursor = T ? Dn : "";
          var B = b.clientHeight / 2,
            X = b.clientWidth;
          We(G, X, X), ke(G, 0, B - X - D, X, X), Z = Wl(G), je(Z, 0, 0, 1), u.rotation = -O, ts(Z, L, 0, 0, X, X), Z.restore(), We(d, X, X), ke(d, 0, B + D, X, X), Z = Wl(d), je(Z, 0, 0, 1), u.rotation = O, ts(Z, L, 0, 0, X, X), Z.restore()
        } else {
          if (q > $ && (q = $), P === Ae)
            if (1 === C) var H = w,
              U = v(0, $ - q - H);
            else -1 === C ? (U = -w, H = v(0, $ - q - U)) : (H = c(($ - q) * w), U = v(0, $ - q - H));
          else "cl" === P ? (H = 0, U = v(0, $ - q)) : "cr" === P && (U = 0, H = v(0, $ - q));
          V && ke(V, 0, 0, g, H), N && ke(N, 0, H + q, g, U), ke(b, 0, H, g, q), K._22o = H, W && (ke(W, 0, q / 2 - t / 2, g, t), W.style.cursor = T ? Gk : ""), y.cursor = T ? Gk : "";
          var m = b.clientWidth / 2,
            X = b.clientHeight;
          We(G, X, X), ke(G, m - X - D, 0, X, X), Z = Wl(G), je(Z, 0, 0, 1), u.rotation = 0, ts(Z, L, 0, 0, X, X), Z.restore(), We(d, X, X), ke(d, m + D, 0, X, X), Z = Wl(d), je(Z, 0, 0, 1), u.rotation = S, ts(Z, L, 0, 0, X, X), Z.restore()
        }
        y.background = a
      }
    });
    var zd = function (p) {
      this.sv = p, this.addListeners()
    };
    Vm(zd, d, {
      ms_listener: 1,
      getView: function () {
        return this.sv.getView()
      }, handle_touchstart: function (y) {
        var x = this,
          I = x.sv,
          Y = I._dividerDiv,
          l = I._60O,
          z = I._61O,
          T = I._status,
          E = y.target;
        if (E === l) T === Ae ? I.setStatus("cl") : "cr" === T && I.setStatus(Ae);
        else if (E === z) T === Ae ? I.setStatus("cr") : "cl" === T && I.setStatus(Ae);
        else if (Tk(y) && (E === Y || E === I._coverDiv) && (gk(y), I.isDraggable())) {
          x.resizeDiv = Jd();
          var D = x.resizeDiv.style,
            b = Y.style,
            d = I.getLeftView(),
            V = I.getRightView();
          x._maskViews = [], [d, V].forEach(function (W) {
            W = W.getView ? W.getView() : W;
            var t = Jd(),
              T = t.style;
            T.left = W.style.left, T.top = W.style.top, T.width = W.offsetWidth + "px", T.height = W.offsetHeight + "px", I.getView().appendChild(t), x._maskViews.push(t)
          }), D.left = b.left, D.top = b.top, D.width = b.width, D.height = b.height, D.opacity = I.getDragOpacity(), D.background = I.getDividerBackground(), x._85o = x._86o = Yd(I) ? Dr(y).x : Dr(y).y, ni(x.getView(), x.resizeDiv), x._clientPoint = Dr(y), sp(x, y)
        }
      }, handleWindowTouchMove: function (U) {
        if (Tk(U)) {
          var B = this,
            e = B.sv,
            g = e._dividerSize,
            S = B.resizeDiv.style,
            w = e.getWidth(),
            q = e.getHeight(),
            p = e._22o - B._86o;
          Yd(e) ? (B._85o = Dr(U).x, p += B._85o, p > w - g && (p = w - g), 0 > p && (p = 0), S.left = p + op) : (B._85o = Dr(U).y, p += B._85o, p > q - g && (p = q - g), 0 > p && (p = 0), S.top = p + op)
        }
      }, handleWindowTouchEnd: function (a) {
        var v = this,
          E = v.sv,
          J = E._22o - v._86o + v._85o,
          i = E._dividerSize,
          M = Yd(E) ? E.getWidth() : E.getHeight(),
          x = E._82O,
          d = Pq(v._clientPoint, Dr(a));
        d > 1 && (E.setStatus(Ae), 0 > J && (J = 0), J > M - i && (J = M - i), M !== i && (1 === x ? E.setPosition(J, 1) : -1 === x ? E.setPosition(J - M + i, 1) : E.setPosition(J / (M - i), 1))), v._maskViews && v._maskViews.forEach(function (Q) {
          Wj(Q)
        }), Wj(v.resizeDiv), v.resizeDiv = v._85o = v._clientPoint = V
      }, handle_mousedown: function (_) {
        co(_) && this.handle_touchstart(_)
      }, handleWindowMouseMove: function (j) {
        this.handleWindowTouchMove(j)
      }, handleWindowMouseUp: function (I) {
        this.handleWindowTouchEnd(I)
      }
    }), sq.TabView = function () {
      var v = this,
        z = v._view = df(1, v),
        _ = v._91O = Jd(1),
        $ = v._tabModel = new Ie,
        l = $.sm(),
        W = v.invalidate;
      v._7o = new Vq, v._canvas = ip(_), ni(z, _), ni(z, v._92O = Jd(1)), l.setSelectionMode(R), l.ms(W, v), $.mm(W, v), $.md(W, v), $.mh(W, v), new Tj(v), v.iv()
    }, vn("TabView", d, {
      ms_v: 1,
      ms_fire: 1,
      ms_tx: 1,
      ms_ty: 1,
      ms_lp: 1,
      ms_ac: ["movable", "tabGap", "tabHeight", "tabPosition", Rh, jm, "tabBackground", "selectWidth", Zo, "moveBackground", "insertColor"],
      _tabPosition: Ud,
      _tabHeight: Mn,
      _tabGap: H.tabViewTabGap,
      _labelColor: H.tabViewLabelColor,
      _labelFont: H.tabViewLabelFont,
      _tabBackground: H.tabViewTabBackground,
      _selectWidth: H.tabViewSelectWidth,
      _selectBackground: H.tabViewSelectBackground,
      _moveBackground: H.tabViewMoveBackground,
      _insertColor: H.tabViewInsertColor,
      _movable: !0,
      getContentDiv: function () {
        return this._92O
      }, getTitleDiv: function () {
        return this._91O
      }, getTabModel: function () {
        return this._tabModel
      }, add: function (P, r, b) {
        var Q = new Mf,
          W = this._tabModel;
        return Q.setName(P), Q.setView(r), W.add(Q), b && W.sm().ss(Q), Q
      }, getLabel: function (y) {
        return y.toLabel()
      }, onPropertyChanged: function () {
        this.iv()
      }, _7Q: function (E) {
        this._23o = E, this.iv()
      }, get: function (W) {
        var e = this,
          Q = e._tabModel;
        if (Fe(W)) return Q._roots.get(W);
        if (hn(W)) {
          var t;
          return Q.each(function (S) {
            W === e.getLabel(S) && (t = S)
          }), t
        }
        return W instanceof Mf ? W : V
      }, select: function (w) {
        this._tabModel.sm().ss(this.get(w))
      }, remove: function (R) {
        var o = this;
        if (R = o.get(R)) {
          var Y = o._tabModel,
            V = Y._roots.indexOf(R);
          o._tabModel.remove(R), o._12Q(--V)
        }
      }, getCurrentTab: function () {
        return this._8o
      }, hideTabView: function (S, r) {
        r.parentNode === this._92O && (Me(r) ? (r.style.display = Xc, r._tab_ = S) : Wj(r), hm())
      }, showTabView: function (s, p) {
        Me(p) && (p.style.display = "block", p._tab_ = s), p.parentNode !== this._92O && (ni(this._92O, p), hm())
      }, _24o: function () {
        var C, p = this,
          U = p._8o,
          r = p._9o,
          d = p._tabModel.sm().ld();
        d && (C = hl(d.getView())), C !== r && (r && (U.getView().endEditing && U.getView().endEditing(), p.hideTabView(U, r)), C && p.showTabView(d, C)), p._8o = d, p._9o = C, U !== d && p.onTabChanged(U, d)
      }, onTabChanged: function () {}, onTabClosed: function (e, Z) {
        this._12Q(--Z)
      }, _12Q: function (F) {
        var Y = this,
          t = Y._tabModel,
          f = t.size();
        if (f && !t.sm().ld()) {
          F == V && (F = 0), F >= f && (F = f - 1), 0 > F && (F = 0);
          for (var z = F; z >= 0; z--) {
            var O = Y.get(z);
            if (!O.isDisabled()) return Y.select(O), O
          }
          for (z = F + 1; f > z; z++)
            if (O = Y.get(z), !O.isDisabled()) return Y.select(O), O
        }
      }, _9Q: function (X) {
        var $ = 4,
          x = ye(X.getIcon());
        x && ($ += lc(x, X) + 4);
        var u = this.getLabel(X);
        return u && ($ += pl(this.getLabelFont(X), u).width + 4), X.isClosable() && ($ += 10), $
      }, _10Q: function ($, n, r, F, z, D, C) {
        var x, V = this,
          d = V._tabPosition,
          I = r + 4,
          u = V._selectWidth,
          E = ye(n.getIcon()),
          j = n.isDisabled(),
          i = V.getLabelColor(n),
          N = V.getLabelFont(n),
          h = V.getLabel(n),
          p = V._selectBackground,
          J = d === pg + "-vertical",
          T = d === Hi + "-vertical";
        (J || T) && (I = F + 4), j && ($.globalAlpha = Wm), en($, r, F, z, D, C), n === V._8o && u && (d === Ud ? en($, r, F + D - u, z, u, p) : d === pg ? en($, r + z - u, F, u, D, p) : d === Hi ? en($, r, F, u, D, p) : J ? en($, r + z - u, F, u, D, p) : T ? en($, r, F, u, D, p) : en($, r, F, z, u, p));
        var v = z / 2;
        if (J && (Md($, v, F + D / 2), Hf($, S), Md($, -v, -F - D / 2)), E) {
          var H = Ec(E, n),
            M = lc(E, n);
          if (J || T) {
            var K = r + z / 2,
              L = I + H / 2;
            Md($, K, L), Hf($, O), Md($, -K, -L), Nb($, E, r + z / 2, I + H / 2, n, V), Md($, K, L), Hf($, -O), Md($, -K, -L), I += H + 4
          } else Nb($, E, I + M / 2, F + D / 2, n, V), I += M + 4
        }
        return J || T ? (Md($, z / 2, I + z / 2), Hf($, O), Md($, -z / 2, -I - z / 2), Uq($, h, N, i, r, I, D, z), Md($, z / 2, I + z / 2), Hf($, -O), Md($, -z / 2, -I - z / 2)) : Uq($, h, N, i, I, F, z, D), J && (Md($, v, F + D / 2), Hf($, -S), Md($, -v, -F - D / 2)), n.isClosable() && ($.strokeStyle = i, $.lineWidth = 1, $.beginPath(), T ? ($.moveTo(r + z - 10, F + D - 4), $.lineTo(r + z - 4, F + D - 10), $.moveTo(r + z - 4, F + D - 4), $.lineTo(r + z - 10, F + D - 10), $.stroke(), x = {
          x: r + z - 12,
          y: F + D - 12,
          width: 12,
          height: 12
        }) : ($.moveTo(r + z - 10, F + 4), $.lineTo(r + z - 4, F + 10), $.moveTo(r + z - 4, F + 4), $.lineTo(r + z - 10, F + 10), $.stroke(), x = {
          x: r + z - 12,
          y: F,
          width: 12,
          height: 12
        })), j && ($.globalAlpha = 1), x
      }, validateImpl: function () {
        var w = this;
        w._24o();
        var M, U = w._canvas,
          E = w._tabPosition,
          c = w._91O,
          x = w._92O,
          r = w._tabModel,
          m = w.getWidth(),
          W = w.getHeight(),
          e = w._tabHeight,
          q = w._7o,
          L = w._tabGap,
          j = E === Ud,
          l = E === pg,
          n = E === Hb,
          h = E === Hi,
          g = E === pg + "-vertical",
          I = E === Hi + "-vertical",
          o = w._23o,
          T = 0;
        if ((l || h) && r._roots.each(function (t) {
          T = v(w._9Q(t), T)
        }), j ? (ke(c, 0, 0, m, e), M = {
          x: 0,
          y: e,
          width: m,
          height: v(0, W - e)
        }) : l ? (ke(c, 0, 0, T, W), M = {
          x: T,
          y: 0,
          width: v(0, m - T),
          height: W
        }) : h ? (ke(c, m - T, 0, T, W), M = {
          x: 0,
          y: 0,
          width: v(0, m - T),
          height: W
        }) : g ? (ke(c, 0, 0, e, W), M = {
          x: e,
          y: 0,
          width: v(0, m - e),
          height: W
        }) : I ? (ke(c, m - e, 0, e, W), M = {
          x: 0,
          y: 0,
          width: v(0, m - e),
          height: W
        }) : (ke(c, 0, W - e, m, e), M = {
          x: 0,
          y: 0,
          width: m,
          height: v(0, W - e)
        }), ke(x, M), g || I) {
          w._9o && (M.x = 0, ke(w._8o.getView(), M)), We(U, e, W);
          var J = Wl(U),
            t = 0;
          if (je(J, 0, w.ty(), 1), J.clearRect(0, 0, e, W), q.clear(), r._roots.each(function (p) {
            var y, n = w._9Q(p);
            o && o.tab === p || (y = w._10Q(J, p, 0, t, e, n, w._tabBackground), y && I && (y.x = m - 12)), q.add({
              _75o: y,
              tab: p,
              startY: t,
              endY: t + n,
              height: n
            }), t += n + L
          }), w._23Q = v(0, t - L), o) {
            var C = o.position;
            w._10Q(J, o.tab, 0, o.startY, e, o.height, w._moveBackground), en(J, 0, C, e, 1, w._insertColor)
          }
          J.restore(), w.ty(w.ty())
        } else if (l || h) {
          w._9o && (M.x = 0, ke(w._8o.getView(), M)), We(U, T, W);
          var J = Wl(U),
            t = 0;
          if (je(J, 0, w.ty(), 1), J.clearRect(0, 0, T, W), q.clear(), r._roots.each(function (U) {
            var f;
            o && o.tab === U || (f = w._10Q(J, U, 0, t, T, e, w._tabBackground), f && h && (f.x = m - 12)), q.add({
              _75o: f,
              tab: U,
              startY: t,
              endY: t + e,
              height: e
            }), t += e + L
          }), w._23Q = v(0, t - L), o) {
            var C = o.position;
            w._10Q(J, o.tab, 0, o.startY, T, o.height, w._moveBackground), en(J, 0, C, T, 1, w._insertColor)
          }
          J.restore(), w.ty(w.ty())
        } else {
          w._9o && (M.y = 0, ke(w._8o.getView(), M)), We(U, m, e);
          var J = Wl(U),
            Z = 0;
          if (je(J, w.tx(), 0, 1), J.clearRect(0, 0, m, e), q.clear(), r._roots.each(function (B) {
            var c, A = w._9Q(B);
            o && o.tab === B || (c = w._10Q(J, B, Z, 0, A, e, w._tabBackground), c && n && (c.y = W - e)), q.add({
              _75o: c,
              tab: B,
              startX: Z,
              endX: Z + A,
              width: A
            }), Z += A + L
          }), w._64I = v(0, Z - L), o) {
            var C = o.position;
            w._10Q(J, o.tab, o.startX, 0, o.width, e, w._moveBackground), Rf(J, w._insertColor, C, 0, e)
          }
          J.restore(), w.tx(w.tx())
        }
        for (var P = [], R = x.children, i = 0; i < R.length; i++) {
          var A = R[i],
            B = A._tab_;
          B && !r.contains(B) && P.push(A)
        }
        P.forEach(function (E) {
          x.removeChild(E)
        })
      }
    });
    var Tj = function (y) {
      this.tv = y, this.addListeners()
    };
    Vm(Tj, d, {
      ms_listener: 1,
      getView: function () {
        return this.tv._91O
      }, handle_mousewheel: function (p) {
        this.handleScroll(p, 10 * (p.wheelDelta / 40))
      }, handle_DOMMouseScroll: function (z) {
        this.handleScroll(z, 10 * -z.detail)
      }, handleScroll: function (U, H) {
        gk(U);
        var n = this.tv,
          J = n._tabPosition;
        !n._40o() || J !== Ud && J !== Hb || n.tx(this.tv.tx() + H), !n._41o() || J !== pg && J !== Hi && J !== pg + "-vertical" && J !== Hi + "-vertical" || n.ty(this.tv.ty() + H)
      }, _8Q: function (k) {
        var m, P, F = this.tv,
          K = F._tabPosition,
          j = F._7o;
        if (K === Ud || K === Hb) {
          var D = F.lp(k).x;
          for (m = 0; m < j.size(); m++)
            if (P = j.get(m), P.startX <= D && D <= P.endX) return P
        } else if (K === pg || K === Hi || K === pg + "-vertical" || K === Hi + "-vertical") {
          var b = F.lp(k).y;
          for (m = 0; m < j.size(); m++)
            if (P = j.get(m), P.startY <= b && b <= P.endY) return P
        }
        return V
      }, isClickable: function (y) {
        var L = this.tv,
          K = L._tabPosition,
          P = this._73o = this._8Q(y);
        return !L._40o() || K !== Ud && K !== Hb ? !L._41o() || K !== pg && K !== Hi && K !== pg + "-vertical" && K !== Hi + "-vertical" ? P && (!P.tab.isDisabled() || L.isMovable()) : !0 : !0
      }, handle_mousemove: function (r) {
        var S = this;
        qq ? S._74o = S._8Q(r) : S.getView().style.cursor = S.isClickable(r) ? Hr : ""
      }, handle_mousedown: function (F) {
        this.handle_mousemove(F), this.handle_touchstart(F)
      }, handle_touchstart: function (B) {
        var q = this,
          l = q.tv,
          P = l._tabPosition;
        gk(B), q.isClickable(B) && (P === Ud || P === Hb ? (q.x = Dr(B).x, q.lp = l.lp(B), q.tx = l.tx()) : (q.y = Dr(B).y, q.lp = l.lp(B), q.ty = l.ty()), sp(q, B))
      }, handleWindowMouseMove: function (M) {
        this.handleWindowTouchMove(M)
      }, handleWindowTouchMove: function (M) {
        var B, I = this,
          X = I.tv,
          a = X._tabPosition,
          H = I._73o;
        if (a === Ud || a === Hb) {
          if (B = Dr(M).x - I.x, !I._25o && !I.moving && G(B) > 2 && (X._40o() && !$g(M) ? I._25o = 1 : H && X.isMovable() && (I.moving = 1)), I._25o) X.tx(I.tx + B);
          else if (I.moving) {
            var g = I.lp.x + B,
              C = X._tabGap / 2;
            X._7o.each(function (m) {
              var z = m.endX,
                l = g - m.startX < z - g;
              g >= m.startX && z >= g && X._7Q({
                tab: H.tab,
                startX: H.startX + B,
                width: H.width,
                front: l,
                insertTab: m.tab,
                position: l ? v(0, m.startX - C) : o(X._64I, z + C)
              })
            })
          }
        } else if (B = Dr(M).y - I.y, !I._25o && !I.moving && G(B) > 2 && (X._41o() && !$g(M) ? I._25o = 1 : H && X.isMovable() && (I.moving = 1)), I._25o) X.ty(I.ty + B);
        else if (I.moving) {
          var q = I.lp.y + B,
            C = X._tabGap / 2;
          X._7o.each(function (r) {
            var w = r.endY,
              W = q - r.startY < w - q;
            q >= r.startY && w >= q && X._7Q({
              tab: H.tab,
              startY: H.startY + B,
              height: H.height,
              front: W,
              insertTab: r.tab,
              position: W ? v(0, r.startY - C) : o(X._23Q, w + C)
            })
          })
        }
      }, handleWindowMouseUp: function (q) {
        this.handleWindowTouchEnd(q)
      }, handleWindowTouchEnd: function () {
        var X = this,
          q = X.tv,
          u = q._tabPosition,
          p = q.getTabModel(),
          H = p._roots,
          U = X._73o;
        if (X.moving) {
          var f = q._23o;
          if (f && f.insertTab !== f.tab) {
            var v = f.tab,
              E = H.remove(v),
              t = H.indexOf(f.insertTab);
            t >= 0 && (f.front || t++, t <= H.size() && (H.add(v, t), p._38I(v, E, t)))
          }
          q._7Q(V), delete X.moving
        } else if (!X._25o && U) {
          v = U.tab;
          var P = X._74o;
          if (!P || P.tab === v)
            if (!v.isDisabled() && Vb(U._75o, X.lp)) {
              var S = H.indexOf(v);
              p.remove(v), q.onTabClosed(v, S)
            } else v.isDisabled() || q._8o === v || p.sm().ss(v)
        }
        X._25o = X._73o = X._74o = u === Ud || u === Hb ? X.x = X.lp = X.tx = V : X.y = X.lp = X.ty = V
      }
    }), sq.PropertyView = function (u) {
      var b = this;
      b._view = df(1, b), b._canvas = ip(b._view), ni(b._view, b._79O = Jd()), b._rows = new Vq, b._28o = new Vq, b._26o = {}, b._26Q = {};
      var c = b._propertyModel = new Ie,
        Q = b.ivm;
      c.mm(Q, b), c.md(Q, b), c.mh(Q, b), b.dm(u ? u : new Ie), new Qo(b)
    }, vn("PropertyView", d, {
      ms_ac: [Rh, fg, jm, cn, Kp, "categorizable", qj, Sg, pr, ug, Hq, Qi, bl, Ii, "selectRowIndex", Zo, "background", Gb, Uh, kk, es, oi],
      ms_v: 1,
      ms_dm: 1,
      ms_fire: 1,
      ms_sm: 1,
      _49o: 1,
      ms_txy: 1,
      ms_lp: 1,
      ms_vs: 1,
      _45o: 1,
      _47o: 1,
      ms_tip: 1,
      _29I: Bb,
      _59I: 0,
      _9I: 0,
      _selectRowIndex: -1,
      _editable: !0,
      _batchEditable: !0,
      _categorizable: !0,
      _indent: li,
      _background: H.propertyViewBackground,
      _expandIcon: H.propertyViewExpandIcon,
      _collapseIcon: H.propertyViewCollapseIcon,
      _scrollBarColor: Eg,
      _scrollBarSize: lk,
      _autoHideScrollBar: cl,
      _selectBackground: H.propertyViewSelectBackground,
      _rowHeight: Qd,
      _rowLineVisible: H.propertyViewRowLineVisible,
      _rowLineColor: H.propertyViewRowLineColor,
      _10I: .5,
      _columnLineVisible: H.propertyViewColumnLineVisible,
      _columnLineColor: H.propertyViewColumnLineColor,
      _labelColor: H.propertyViewLabelColor,
      _labelSelectColor: H.propertyViewLabelSelectColor,
      _labelFont: H.propertyViewLabelFont,
      getRows: function () {
        return this._rows
      }, getColumnPosition: function () {
        return this._10I
      }, setColumnPosition: function (i) {
        0 > i && (i = 0), i > 1 && (i = 1);
        var D = this,
          _ = D._10I;
        D._10I = i, D.fp("columnPosition", _, i)
      }, getPropertyName: function (h) {
        return h.toLabel()
      }, getLabelFont: function () {
        return this._labelFont
      }, getLabelColor: function (G, b, A) {
        return A === this._selectRowIndex ? this._labelSelectColor : this._labelColor
      }, getPropertyFont: function () {
        return this._labelFont
      }, getPropertyColor: function (e, r) {
        return r === this._selectRowIndex ? this._labelSelectColor : e.getColor() || this._labelColor
      }, getCategoryFont: function () {
        return this._labelFont
      }, getCategoryColor: function () {
        return this._labelColor
      }, adjustTranslateX: function () {
        return 0
      }, adjustTranslateY: function (R) {
        var S = this.getHeight() - this._59I;
        return S > R && (R = S), R > 0 ? 0 : c(R)
      }, isExpanded: function (c) {
        if (!c) return !0;
        var A = this._26o[c];
        return A ? A.isExpanded : !(this._26Q[c] === !1)
      }, toggle: function (u) {
        var z = this;
        z.isExpanded(u) ? z.collapse(u) : z.expand(u)
      }, expandAll: function () {
        this.validate();
        for (var x in this._26o) this.expand(x)
      }, expand: function (W) {
        if (W && W !== Xc) {
          var i = this,
            v = i._26o[W];
          v && !v.isExpanded && (v.isExpanded = !0, i.onExpanded(W), i.ivm())
        }
      }, onExpanded: function () {}, collapseAll: function () {
        this.validate();
        for (var f in this._26o) this.collapse(f)
      }, collapse: function (b) {
        if (b && b !== Xc) {
          var Y = this,
            f = Y._26o[b];
          f && f.isExpanded && (f.isExpanded = !1, Y.onCollapsed(b), Y.ivm())
        }
      }, onCollapsed: function () {}, getCategoryName: function (x) {
        if (!this.isCategorizable()) return Xc;
        var v = x.getCategoryName();
        return v ? v : Xc
      }, getPropertyModel: function () {
        return this._propertyModel
      }, setDataModel: function (I) {
        var Q = this,
          K = Q._dataModel;
        K !== I && (K && (K.umd(Q.handlePropertyChange, Q), Q._3o || K.sm().ums(Q.ivm, Q)), Q._dataModel = I, I.md(Q.handlePropertyChange, Q), Q._3o ? Q._3o._21I(I) : I.sm().ms(Q.ivm, Q), Q.fp(pj, K, I))
      }, isVisible: function (L) {
        return this._visibleFunc ? this._visibleFunc(L) : !0
      }, onPropertyChanged: function (h) {
        var M = this,
          d = h.property;
        fi[d] ? M.ivm() : M.iv(), d === vr && M._43o()
      }, getCurrentData: function () {
        return this._27o
      }, updateCurrentData: function () {
        this._27o = this.sm().ld()
      }, getRawProperties: function () {
        return this._27o ? this._propertyModel._roots : wf
      }, handlePropertyChange: function (n) {
        this._27o === n.data && this.iv()
      }, ivm: function () {
        this.invalidateModel()
      }, invalidateModel: function () {
        var $ = this;
        $._96I || ($.setSelectRowIndex(-1), $._96I = 1, $.iv())
      }, redraw: function () {
        this.iv()
      }, validateModel: function () {
        var L = this,
          t = L._rows,
          s = L._28o,
          M = {},
          c = new Vq,
          S = L._27o;
        L.updateCurrentData(), S !== L._27o && L.endEditing(), t.clear(), s.clear(), L.getRawProperties().each(function (t) {
          if (L.isVisible(t)) {
            c.add(t);
            var A = L.getCategoryName(t);
            M[A] || (s.add(A, A === Xc ? 0 : b), M[A] = {
              isExpanded: L.isExpanded(A),
              properties: new Vq
            })
          }
        }), L._sortFunc && c.sort(L._sortFunc);
        for (var V in L._26o) L._26Q[V] = L.isExpanded(V);
        L._26o = M, s.each(function (E) {
          E !== Xc && t.add(E);
          var U = M[E];
          U.isExpanded && c.each(function (Z) {
            L.getCategoryName(Z) === E && (U.properties.add(Z), t.add({
              property: Z,
              data: L._27o
            }))
          }, L)
        })
      }, validateImpl: function () {
        var l = this;
        l._76o(), l._96I && (l.validateModel(), delete l._96I);
        var P = l._canvas,
          A = l.getWidth(),
          p = l.getHeight(),
          T = -l.ty(),
          Q = l._rowHeight,
          E = l._indent,
          u = A - E,
          t = l._rows,
          H = t.size(),
          s = l._9I = E + u * l._10I,
          n = l._59I = H * Q;
        We(P, A, p), l._29I = {
          x: 0,
          y: T,
          width: A,
          height: p
        }, l._31I = M(T / Q), l._14I = F((T + p) / Q), l._31I < 0 && (l._31I = 0), l._14I > H && (l._14I = H);
        var O, w = Wl(P),
          m = l._background;
        je(w, 0, -T, 1), w.beginPath(), w.rect(0, T, A, p), w.clip(), w.clearRect(0, T, A, p), l._93db(w), m && en(w, 0, 0, E, n, m);
        for (var g = l._31I; g < l._14I; g++) {
          var N = t.get(g),
            T = Q * g;
          if (hn(N)) m && en(w, E, T, u, Q, m), O = ye(l.isExpanded(N) ? l._expandIcon : l._collapseIcon), O && Rm(w, O, ho, 0, T, E, Q), w.save(), w.beginPath(), w.rect(E, T, u, Q), w.clip(), l.drawCategoryName(w, N, g, E, T, u, Q), w.restore();
          else {
            var v = N.property,
              X = N.data,
              O = ye(v.getIcon()),
              k = l._selectRowIndex === g ? l.getSelectBackground() : V;
            if (O && Rm(w, O, ho, 0, T, E, Q), k && en(w, E, T, u, Q, k), w.save(), w.beginPath(), w.rect(E, T, s - E, Q), w.clip(), l.drawPropertyName(w, v, g, E, T, s - E, Q), w.restore(), !l.isEditing(X, v)) {
              var Y = s + 1,
                z = A - s - 1;
              w.save(), w.beginPath(), w.rect(Y, T, z, Q), w.clip(), l._87o(l.drawPropertyValue(w, v, l.getValue(X, v), g, Y, T, z, Q, X), g, Y, T, z, Q), w.restore()
            }
          }
          l._rowLineVisible && en(w, E, T + Q - 1, u, 1, l._rowLineColor)
        }
        l._columnLineVisible && (en(w, s, 0, 1, n, l._columnLineColor), en(w, A - 1, 0, 1, n)), l._92db(w), l._93I(), w.restore(), l.ty(l.ty())
      }, drawCategoryName: function (j, m, $, q, U, X, C) {
        Uq(j, m, this.getCategoryFont(m), this.getCategoryColor(m), q, U, X, C)
      }, drawPropertyName: function (x, Q, r, B, Z, o, D) {
        return Q.drawPropertyName ? (Q.drawPropertyName(x, Q, r, B, Z, o, D, this), void 0) : (Uq(x, this.getPropertyName(Q), this.getPropertyFont(Q, r), this.getPropertyColor(Q, r), B, Z, o, D), void 0)
      }, drawPropertyValue: function (X, w, y, K, W, M, E, U, D) {
        return w.drawPropertyValue ? w.drawPropertyValue(X, w, y, K, W, M, E, U, D, this) : (qd(X, y, w, this.getLabelFont(w, y, K), this.getLabelColor(w, y, K), W, M, E, U, D, this), void 0)
      }, isPropertyEditable: function (B) {
        return B.isEditable() && this.isEditable()
      }, setProperties: function (B) {
        this._propertyModel.clear(), this.addProperties(B)
      }, addProperties: function (e) {
        if (e) {
          var $ = this._propertyModel;
          e.forEach(function (x) {
            if (!(x instanceof gn)) {
              var k = Ek(x.className);
              x = Hh(k ? k : gn, x)
            }
            $.add(x)
          })
        }
      }, getRowIndexAt: function (i) {
        var W = this,
          U = M(W.lp(i).y / W._rowHeight);
        return U >= 0 && U < W._rows.size() ? U : -1
      }, getPropertyAt: function (L) {
        var z = this,
          D = z.getRowIndexAt(L);
        return D >= 0 ? z._rows.get(D).property : V
      }, getToolTip: function (q) {
        var h = this,
          i = h.getPropertyAt(q),
          O = h._27o;
        return i && O ? i.getToolTip(O, h._9I < h.lp(q).x, h) : V
      }
    });
    var Qo = function (L) {
      this.pv = L, this.addListeners()
    };
    Vm(Qo, d, {
      ms_listener: 1,
      getView: function () {
        return this.pv._view
      }, setCursor: function (J) {
        this.getView().style.cursor = J
      }, clear: function () {
        var f = this;
        f._62O = f.cp = f.ty = f.p = V, f.setCursor(q)
      }, handle_mousedown: function (h) {
        this.handle_touchstart(h)
      }, handle_touchstart: function (n) {
        var O = this,
          G = O.pv;
        gk(n), G.setFocus(n) && (co(n) ? (O.cp = Dr(n), O.ty = G.ty(), O.p = G.getColumnPosition(), O.handle_touchmove(n)) : G.setSelectRowIndex(G.getRowIndexAt(n)))
      }, handleWindowMouseUp: function () {
        this.clear()
      }, handleWindowTouchEnd: function () {
        this.clear()
      }, handle_mouseup: function (m) {
        this.handle_touchend(m)
      }, handle_touchend: function (d) {
        var f = this;
        if (f.cp && !f._62O) {
          var y = f.pv,
            b = y.lp(d),
            v = b.x,
            M = b.y,
            Z = y._indent,
            $ = y.getRowIndexAt(d),
            I = y._9I;
          if ($ >= 0) {
            var R = y._rowHeight,
              K = R * $,
              Q = y._rows.get($),
              J = Q.property;
            if (hn(Q)) ye(y.isExpanded(Q) ? y._expandIcon : y._collapseIcon) && v >= 0 && Z >= v && M >= K && K + R >= M ? y.toggle(Q) : Rq(d) && y.toggle(Q);
            else if (v > I && y.isPropertyEditable(J)) {
              var t = {
                  x: I + 1,
                  y: K,
                  width: y.getWidth() - I - 1,
                  height: R
                },
                p = {
                  x: t.x + y.tx(),
                  y: t.y + y.ty(),
                  width: t.width,
                  height: t.height
                },
                j = 0,
                E = y._29I;
              t.y < E.y ? j = t.y - E.y : t.y + R > E.y + E.height && (j = t.y + R - E.y - E.height), j && (y.ty(y.ty() - j), p.y -= j), y.beginEditing({
                data: Q.data,
                property: J,
                value: y.getValue(Q.data, J),
                event: d,
                rect: t,
                editorRect: p,
                view: y
              })
            }
          }
          y.setSelectRowIndex($)
        }
        f.clear()
      }, handleWindowMouseMove: function (w) {
        this.handleWindowTouchMove(w)
      }, handleWindowTouchMove: function (J) {
        var V = this,
          P = V.pv,
          R = V.ty,
          H = V.cp,
          k = Dr(J),
          b = V._62O;
        if ("p" === b) P.setTranslateY(R + k.y - H.y);
        else if ("c" === b) {
          var v = P.getWidth() - P._indent;
          if (v > 16) {
            var g = V.p - (H.x - k.x) / v,
              e = 16 / v;
            e > g && (g = e), g > 1 - e && (g = 1 - e), P.setColumnPosition(g)
          }
        } else "s" === b && P.setTranslateY(R + (H.y - k.y) * P._59I / P._29I.height)
      }, handle_mousemove: function (E) {
        this.handle_touchmove(E)
      }, handle_touchmove: function (l) {
        if (!qq && co(l)) {
          var J = this,
            w = J.pv,
            R = G(w.lp(l).x - w._9I) <= (h ? 8 : 3);
          J.cp ? J._62O || (R ? (J._62O = "c", sp(J)) : G(Dr(l).y - J.cp.y) >= 2 && (J._62O = J.isV(l) ? "s" : "p", sp(J))) : (R ? J.setCursor(Dn) : J.setCursor(q), J.isV(l) && w._43o())
        }
      }, isV: function (Y) {
        var t = this.pv,
          W = t._29I;
        return t._41o() && W.x + W.width - t.lp(Y).x < an
      }, handle_mousewheel: function (i) {
        this.handleScroll(i, i.wheelDelta / 40)
      }, handle_DOMMouseScroll: function (r) {
        2 === r.axis && this.handleScroll(r, -r.detail)
      }, handleScroll: function (l, x) {
        var o = this.pv;
        gk(l), o.endEditing(), o.translate(0, x * o.getRowHeight())
      }, handle_keydown: function (g) {
        var f = this.pv,
          c = f._rows.size(),
          z = f._selectRowIndex + (hb(g) ? -1 : 1);
        (hb(g) || ig(g)) && (0 > z && (z = 0), z >= c && (z = c - 1), f.setSelectRowIndex(z))
      }
    }), sq.ListView = function (w) {
      this._5o(w), new vl(this)
    }, vn("ListView", d, {
      ms_ac: [Rh, fg, jm, Gb, qj, Uh, kk, Sg, pr, Qi, bl, Ii, xi, Zo],
      ms_v: 1,
      ms_bnb: 1,
      ms_tip: 1,
      ms_fire: 1,
      ms_sm: 1,
      _49o: 1,
      ms_txy: 1,
      ms_lp: 1,
      ms_vs: 1,
      ms_hs: 1,
      _15Q: 1,
      _14Q: 1,
      ms_dm: 1,
      _45o: 1,
      _checkMode: !1,
      _indent: li,
      _rowHeight: Qd,
      _rowLineVisible: H.listViewRowLineVisible,
      _rowLineColor: H.listViewRowLineColor,
      _scrollBarColor: Eg,
      _scrollBarSize: lk,
      _autoMakeVisible: ih,
      _autoHideScrollBar: cl,
      _selectBackground: H.listViewSelectBackground,
      _labelColor: H.listViewLabelColor,
      _labelSelectColor: H.listViewLabelSelectColor,
      _labelFont: H.listViewLabelFont,
      isCheckMode: function () {
        return this._checkMode
      }, setCheckMode: function (R) {
        var J = this,
          j = J._checkMode;
        J._checkMode = R, J.fp(tj, j, R)
      }, drawRow: function (Z, a, r, A, P, h, L) {
        var T = this,
          F = 0,
          S = T._indent,
          G = T.getIconWidth(a);
        T.drawRowBackground(Z, a, r, A, P, h, L), T._checkMode && (Nb(Z, T.getCheckIcon(a), F + S / 2, P + L / 2, a, T), F += S), T.drawIcon(Z, a, F, P, G, L), T.drawLabel(Z, a, F + G, P, L)
      }
    });
    var vl = function (C) {
      this.list = C, this.addListeners()
    };
    Vm(vl, d, {
      ms_listener: 1,
      getView: function () {
        return this.list._view
      }, clear: function (g) {
        var N = this;
        g && "d" === N._62O && N.list.handleDragAndDrop(g, "end"), N._62O = N.cp = N.tx = N.ty = V
      }, handle_mousedown: function (w) {
        this.handle_touchstart(w)
      }, handle_touchstart: function (F) {
        var l = this,
          n = l.list;
        if (gk(F), n.setFocus(F))
          if (l.cp = Dr(F), l.tx = n.tx(), l.ty = n.ty(), co(F)) l.isV(F) || l.isH(F) || !n.handleDragAndDrop || n.handleDragAndDrop(F, "prepare");
          else {
            var R = n.getDataAt(F);
            R && l._33o(F, R), l.clear(F)
          }
      }, handleWindowMouseUp: function (J) {
        this.clear(J)
      }, handleWindowTouchEnd: function (V) {
        this.clear(V)
      }, handle_mouseup: function (D) {
        this.handle_touchend(D)
      }, handle_touchend: function (F) {
        var m = this,
          d = m.list;
        if (m.cp && !m._62O) {
          var l = d.getDataAt(F);
          l && (d.isCheckMode() ? m._34o(F, l) : m._33o(F, l), Rq(F) ? d.onDataDoubleClicked(l, F) : d.onDataClicked(l, F))
        }
        m.clear(F)
      }, handleWindowMouseMove: function (W) {
        this.handleWindowTouchMove(W)
      }, handleWindowTouchMove: function (N) {
        var d = this,
          Q = d.list,
          z = d._62O,
          w = d.tx,
          H = d.ty,
          P = d.cp,
          E = Dr(N),
          C = Q._29I;
        "p" === z ? Q.setTranslate(w + E.x - P.x, H + E.y - P.y) : "v" === z ? Q.ty(H + (P.y - E.y) * Q._59I / C.height) : "h" === z ? Q.tx(w + (P.x - E.x) * Q._91I / C.width) : "d" === z && Q.handleDragAndDrop(N, "between")
      }, handle_mousemove: function (E) {
        this.handle_touchmove(E)
      }, handle_touchmove: function (B) {
        if (!qq && co(B)) {
          var r = this,
            e = r.list,
            $ = r.isV(B),
            O = r.isH(B);
          if (r.cp) {
            if (!r._62O) {
              if (Pq(Dr(B), r.cp) < 2) return;
              $ ? r._62O = "v" : O ? r._62O = "h" : e.handleDragAndDrop ? (r._62O = "d", e.handleDragAndDrop(B, "begin")) : r._62O = "p", sp(r)
            }
          } else $ && e._43o(), O && e._42o()
        }
      }, isV: function (M) {
        var G = this.list,
          O = G._29I;
        return G._41o() && O.x + O.width - G.lp(M).x < an
      }, isH: function (C) {
        var v = this.list,
          U = v._29I;
        return v._40o() && U.y + U.height - v.lp(C).y < an
      }, handle_mousewheel: function (Z) {
        this.handleScroll(Z, Z.wheelDelta / 40, Z.wheelDelta !== Z.wheelDeltaX)
      }, handle_DOMMouseScroll: function (E) {
        this.handleScroll(E, -E.detail, 1)
      }, handleScroll: function (t, u, n) {
        var w = this.list;
        gk(t), w.endEditing && w.endEditing(), n && w._41o() ? w.translate(0, u * w.getRowHeight()) : w._40o() && w.translate(10 * u, 0)
      }, handle_keydown: function (i) {
        var f, Z = this.list,
          h = Z.sm(),
          M = Z._rows,
          u = M.size();
        if (Vk(i)) Z.selectAll();
        else if (gb(i)) Z.handleDelete && Z.handleDelete(i);
        else if (tq(i)) Z.isCheckMode() && (f = Z.getFocusData(), f && Z.checkData(f));
        else if (hb(i) || ig(i)) {
          var r = Z.isCheckMode();
          if (f = r ? Z.getFocusData() : h.ld()) {
            var R = Z.getRowIndex(f);
            R >= 0 && (hb(i) ? 0 !== R && (f = M.get(R - 1), r ? Z.setFocusData(f) : h.ss(f)) : R !== u - 1 && (f = M.get(R + 1), r ? Z.setFocusData(f) : h.ss(f)))
          } else u > 0 && (f = M.get(0), r ? Z.setFocusData(f) : h.ss(f))
        }
      }, _34o: function (b, U) {
        var h = this.list,
          k = h.lp(b).x;
        return k >= 0 && k <= h._indent ? (h.checkData(U), void 0) : (h.setFocusData(U), void 0)
      }, _33o: function (K, L) {
        var Q = this.list,
          e = Q.sm(),
          Z = e.ld();
        if ($g(K)) Q.isSelected(L) ? e.rs(L) : e.as(L);
        else if (zk(K))
          if (Z)
            for (var j = Q.getRowIndex(Z), W = Q.getRowIndex(L); j !== W;) j += W > j ? 1 : -1, e.as(Q._rows.get(j));
          else e.ss(L);
        else(co(K) || !e.contains(L)) && e.ss(L)
      }
    }), sq.TreeView = function (t) {
      var $ = this;
      $._35o(), $._5o(t), new Zh($)
    }, vn("TreeView", d, {
      ms_ac: [Rh, fg, jm, "rootVisible", tj, "rootData", Sg, pr, Qi, bl, Ii, qj, Gb, Uh, kk, ug, Hq, xi, Zo, "loader"],
      ms_v: 1,
      ms_bnb: 1,
      ms_tip: 1,
      ms_fire: 1,
      ms_sm: 1,
      _49o: 1,
      ms_txy: 1,
      ms_lp: 1,
      ms_vs: 1,
      ms_hs: 1,
      _15Q: 1,
      ms_dm: 1,
      _48o: 1,
      _14Q: 1,
      _45o: 1,
      _checkMode: V,
      _indent: li,
      _rowHeight: Qd,
      _rowLineVisible: H.treeViewRowLineVisible,
      _rowLineColor: H.treeViewRowLineColor,
      _scrollBarColor: Eg,
      _scrollBarSize: lk,
      _autoHideScrollBar: cl,
      _expandIcon: H.treeViewExpandIcon,
      _collapseIcon: H.treeViewCollapseIcon,
      _autoMakeVisible: ih,
      _selectBackground: H.treeViewSelectBackground,
      _labelColor: H.treeViewLabelColor,
      _labelSelectColor: H.treeViewLabelSelectColor,
      _labelFont: H.treeViewLabelFont,
      drawRow: function (R, y, d, B, Y, N, l) {
        var Z = this;
        Z.drawRowBackground(R, y, d, B, Y, N, l), Z._97I(R, y, d, 0, Y, N, l)
      }
    });
    var Zh = function (P) {
      gr(Zh, this, [P])
    };
    Vm(Zh, vl, {
      toggle: function (S, C, b, t) {
        var K = this.list,
          y = K.lp(S).x;
        if (ye(K.getToggleIcon(C))) {
          var E = b * t;
          if (y >= E && E + b >= y) return K.toggle(C), !0
        }
        return Rq(S) ? (K.toggle(C), !0) : !1
      }, _34o: function ($, n) {
        var L = this.list,
          A = L.lp($).x,
          O = L._levelMap[n._id],
          s = L._indent,
          a = s * (O + 1);
        return A >= a && a + s >= A ? (L.checkData(n), void 0) : (this.toggle($, n, s, O) || L.setFocusData(n), void 0)
      }, _33o: function (v, F) {
        var m = this,
          S = m.list;
        m.toggle(v, F, S._indent, S.getLevel(F)) || Zh.superClass._33o.call(m, v, F)
      }, handle_keydown: function (e) {
        if (bj(e) || Lr(e)) {
          var T = this.list,
            v = T._rows,
            l = T.isCheckMode(),
            u = T.sm(),
            I = l ? T.getFocusData() : u.ld();
          I ? I.hasChildren() && (bj(e) ? T.collapse(I) : T.expand(I)) : v.size() > 0 && (I = v.get(0), l ? T.setFocusData(I) : u.ss(I))
        } else Zh.superClass.handle_keydown.call(this, e)
      }
    });
    var cq = sq.TableView = function (J) {
      this._98I(), this._5o(J), new jd(this)
    };
    vn("TableView", d, {
      ms_ac: [Rh, fg, jm, "sortMode", cn, Kp, Gb, Uh, kk, es, oi, "sortColumn", Sg, pr, Qi, bl, Ii, xi, Zo],
      ms_v: 1,
      ms_fire: 1,
      ms_sm: 1,
      _49o: 1,
      ms_txy: 1,
      ms_lp: 1,
      ms_vs: 1,
      ms_hs: 1,
      _15Q: 1,
      ms_dm: 1,
      ms_tip: 1,
      _50o: 1,
      _45o: 1,
      _47o: 1,
      _sortMode: dn,
      _editable: !0,
      _batchEditable: !1,
      _rowHeight: Qd,
      _rowLineVisible: H.tableViewRowLineVisible,
      _rowLineColor: H.tableViewRowLineColor,
      _columnLineVisible: H.tableViewColumnLineVisible,
      _columnLineColor: H.tableViewColumnLineColor,
      _scrollBarColor: Eg,
      _scrollBarSize: lk,
      _autoHideScrollBar: cl,
      _autoMakeVisible: ih,
      _selectBackground: H.tableViewSelectBackground,
      _labelColor: H.tableViewLabelColor,
      _labelSelectColor: H.tableViewLabelSelectColor,
      _labelFont: H.tableViewLabelFont,
      getCheckColumn: function () {
        var G = this;
        if (!G._31o) {
          var H = G._31o = new Sk;
          H.setEditable(!0), H.setWidth(40), H.getValue = G.getCheckColumValue, H.drawCell = G.drawCheckColumnCell
        }
        return G._31o
      }, isCheckMode: function () {
        return this._39o.contains(this._31o)
      }, setCheckMode: function (j) {
        var b = this,
          G = b._39o,
          C = b.getCheckColumn();
        j !== b.isCheckMode() && (j ? G.add(C, 0) : G.remove(C), b.fp(tj, !j, j))
      }, getCheckColumValue: function (n, E, K) {
        return K.isSelected(n)
      }, drawCheckColumnCell: function (E, Q, B, k, j, i, K, V, x) {
        Nb(E, x.getCheckIcon(Q), j + K / 2, i + V / 2, Q, x)
      }
    });
    var jd = function (Z) {
      gr(jd, this, [Z])
    };
    Vm(jd, vl, {
      _34o: function ($, Q) {
        var r = this.list,
          E = r._31o;
        if (r.isCellEditable(Q, E)) {
          var S = r._3Q(E),
            Y = r.lp($).x;
          if (S && Y >= S.startX && Y < S.startX + E.getWidth()) return r.checkData(Q), void 0
        }
        r.setFocusData(Q), r._37O(Q, $)
      }, _33o: function (p, R) {
        jd.superClass._33o.apply(this, arguments), this.list._37O(R, p)
      }
    });
    var Nd = sq.TreeTableView = function (V) {
        var D = this,
          a = D._4o = new Sk;
        D._35o(), D._98I(), D._5o(V), a.setDisplayName("Name"), a.setEditable(!0), a.setWidth(180), a.drawCell = Xj, a.getValue = Re, D._39o.add(a), new Pe(D)
      },
      Xj = function (K, v, C, X, _, x, h, e, E) {
        E._97I(K, v, C, _, x, h, e)
      },
      Re = function (r, R, B) {
        return B.getLabel(r)
      };
    vn("TreeTableView", d, {
      ms_ac: [Rh, fg, jm, "sortMode", cn, Kp, qj, tj, "rootData", "rootVisible", Sg, pr, "sortColumn", ug, Hq, Qi, bl, Ii, xi, kk, Gb, Uh, es, oi, Zo, "loader"],
      ms_v: 1,
      ms_bnb: 1,
      ms_fire: 1,
      ms_sm: 1,
      _49o: 1,
      ms_txy: 1,
      ms_lp: 1,
      ms_vs: 1,
      ms_hs: 1,
      _15Q: 1,
      ms_dm: 1,
      ms_tip: 1,
      _50o: 1,
      _48o: 1,
      _14Q: 1,
      _45o: 1,
      _47o: 1,
      _sortMode: dn,
      _checkMode: V,
      _editable: !0,
      _batchEditable: !1,
      _indent: li,
      _rowHeight: Qd,
      _rowLineVisible: H.treeTableViewRowLineVisible,
      _rowLineColor: H.treeTableViewRowLineColor,
      _columnLineVisible: H.treeTableViewColumnLineVisible,
      _columnLineColor: H.treeTableViewColumnLineColor,
      _expandIcon: H.treeTableViewExpandIcon,
      _collapseIcon: H.treeTableViewCollapseIcon,
      _scrollBarColor: Eg,
      _scrollBarSize: lk,
      _autoHideScrollBar: cl,
      _autoMakeVisible: ih,
      _selectBackground: H.treeTableViewSelectBackground,
      _labelColor: H.treeTableViewLabelColor,
      _labelSelectColor: H.treeTableViewLabelSelectColor,
      _labelFont: H.treeTableViewLabelFont,
      getTreeColumn: function () {
        return this._4o
      }
    });
    var Pe = function (t) {
      gr(Pe, this, [t])
    };
    Vm(Pe, vl, {
      _34o: function (r, x) {
        var V = this.list,
          H = V._4o,
          M = V._3Q(H),
          O = V.lp(r).x;
        if (M) {
          var f = V._indent,
            l = M.startX + f * V.getLevel(x);
          if (ye(V.getToggleIcon(x)) && O >= l && l + f >= O) return V.toggle(x), void 0;
          if (V.isCellEditable(x, H) && (l += f, O >= l && l + f >= O)) return V.checkData(x), void 0
        }
        V.setFocusData(x), V._37O(x, r)
      }, _33o: function (Z, X) {
        var x = this.list,
          f = x.lp(Z).x;
        if (ye(x.getToggleIcon(X))) {
          var S = x._3Q(x._4o);
          if (S) {
            var a = x._indent,
              J = S.startX + a * x.getLevel(X);
            if (f >= J && J + a >= f) return x.toggle(X), void 0
          }
        }
        Pe.superClass._33o.apply(this, arguments), x._37O(X, Z)
      }
    });
    var Zg = sq.TableHeader = function (f) {
      var g = this,
        Q = g._view = df(1, g),
        x = g._39o = f.getColumnModel(),
        F = g.iv;
      g.tv = g._tableView = f, g._60I = new Vq, g._canvas = ip(Q), Q.style.background = H.tableHeaderBackground || "", Q.style.height = xs + op, x.mm(F, g), x.md(F, g), x.mh(F, g), f.mp(function (D) {
        il[D.property] && g.iv()
      }, g), new Kf(g), g.iv()
    };
    vn("TableHeader", d, {
      ms_v: 1,
      ms_lp: 1,
      ms_fire: 1,
      ms_ac: ["checkIcon", "sortDescIcon", "sortAscIcon", Rh, jm, qj, "moveBackground", "insertColor", es, oi, "resizable", "movable"],
      _checkIcon: Of,
      _movable: !0,
      _resizable: !0,
      _labelColor: H.tableHeaderLabelColor,
      _labelFont: H.tableHeaderLabelFont,
      _columnLineColor: H.tableHeaderColumnLineColor,
      _columnLineVisible: H.tableHeaderColumnLineVisible,
      _sortDescIcon: H.tableHeaderSortDescIcon,
      _sortAscIcon: H.tableHeaderSortAscIcon,
      _moveBackground: H.tableHeaderMoveBackground,
      _insertColor: H.tableHeaderInsertColor,
      _indent: li,
      getCheckIcon: function () {
        return this._checkIcon
      }, getTableView: function () {
        return this.tv
      }, getLabel: function (Y) {
        return Y.toLabel()
      }, getLabelFont: function () {
        return this._labelFont
      }, getLabelColor: function (k) {
        return k.getColor() || this._labelColor
      }, getLabelAlign: function (I) {
        return I._align
      }, onPropertyChanged: function () {
        this.iv()
      }, _5Q: function (E) {
        this._61I = E, this.iv()
      }, getLogicalPoint: function (x) {
        return jc(x, this._canvas, this.tv.tx())
      }, validateImpl: function () {
        var w = this,
          u = w._canvas,
          J = w.getWidth(),
          _ = w.getHeight(),
          h = w.tv,
          E = w._60I,
          i = w._61I,
          c = -h.tx(),
          m = 0;
        (J !== u.clientWidth || _ !== u.clientHeight) && We(u, J, _), E.clear(), w._39o._roots.each(function (W) {
          if (W.isVisible()) {
            var f = m + W.getWidth();
            c + J >= m && f >= c && E.add({
              column: W,
              startX: m
            }), m = f
          }
        });
        var d = Wl(u);
        if (je(d, -c, 0, 1), d.beginPath(), d.rect(c, 0, J, _), d.clip(), d.clearRect(c, 0, J, _), E.each(function (F) {
          var x = F.column,
            s = F.startX,
            S = x.getWidth();
          S > 0 && (d.save(), d.beginPath(), d.rect(s, 0, S, _), d.clip(), i && i.column === x || w.drawColumn(d, x, s, 0, S, _), w._columnLineVisible && en(d, s + S - 1, 0, 1, _, w._columnLineColor), d.restore())
        }), i) {
          var f = i.column,
            m = i.startX,
            K = i.position,
            F = f.getWidth();
          d.save(), d.beginPath(), d.rect(m, 0, F, _), d.clip(), d.fillStyle = w._moveBackground, d.fill(), w.drawColumn(d, f, m, 0, F, _), d.restore(), Rf(d, w._insertColor, K, 0, _)
        }
        d.restore()
      }, _6Q: function (h) {
        var R = this.tv;
        return R._31o === h && R.sm().getSelectionMode() === I
      }, drawColumn: function (f, E, H, K, D, r) {
        var X = this,
          s = X.tv,
          p = ye(E.getIcon()),
          d = X.getLabelAlign(E);
        if (X._6Q(E)) {
          var n = ye(X._checkIcon);
          Nb(f, n, H + D / 2, K + r / 2, E, X)
        } else {
          var y = X.getLabel(E),
            G = X.getLabelFont(E),
            z = X.getLabelColor(E),
            Y = pl(G, y).width,
            g = p ? X._indent : 0;
          d === pg ? (p && Rm(f, p, ho, H, K, g, r), Uq(f, y, G, z, H + g, K, D, r, pg)) : d === Hi ? (p && Rm(f, p, ho, H + D - Y - g, K, g, r), Uq(f, y, G, z, H, K, D, r, Hi)) : (p && Rm(f, p, ho, H + (D - Y - g) / 2, K, g, r), Uq(f, y, G, z, H + (D - Y + g) / 2, K, 0, r, pg))
        } if (E.isSortable() && s.getSortColumn() === E && (p = ye(E.getSortOrder() === Oi ? X._sortAscIcon : X._sortDescIcon))) {
          var W = lc(p, E) / 2 + 2;
          Nb(f, p, d === Hi ? H + W : H + D - W, K + r / 2, E, s)
        }
      }
    });
    var Kf = function (S) {
      var P = this;
      P.th = S, P.tv = S._tableView, P.addListeners()
    };
    Vm(Kf, d, {
      ms_listener: 1,
      getView: function () {
        return this.th.getView()
      }, setCursor: function (A) {
        this.getView().style.cursor = A
      }, handle_mousemove: function (k) {
        if (!qq) {
          var M = this;
          delete M._29o, M.setCursor(q);
          for (var u = M.th, c = u._60I, Z = u.lp(k).x, p = c.size() - 1; p >= 0; p--) {
            var N = c.get(p),
              T = N.column,
              f = N.startX + T.getWidth();
            if (u.isResizable() && G(f - Z) <= (h ? 10 : 3)) return M._29o = N, M.setCursor(Dn), void 0;
            (T.isSortable() || u.isMovable() || T === M.tv.getCheckColumn()) && Z >= N.startX && f >= Z && T.getWidth() > 0 && (M._29o = N, M.setCursor(Hr))
          }
        }
      }, handle_mousedown: function (s) {
        this.handle_touchstart(s)
      }, handle_touchstart: function (V) {
        var a = this;
        gk(V), a.tv.endEditing(), a.handle_mousemove(V), a._29o && (a.x = Dr(V).x, a.lx = a.th.lp(V).x, a.w = a._29o.column.getWidth(), sp(a, V))
      }, handleWindowMouseMove: function (p) {
        this.handleWindowTouchMove(p)
      }, handleWindowTouchMove: function (n) {
        var M = this,
          c = M.th,
          z = M.getView().style.cursor,
          E = M._29o,
          q = Dr(n).x - M.x;
        if (M.resizing || M.moving || (z === Dn ? M.resizing = 1 : c.isMovable() && z === Hr && G(q) > 2 && (M.moving = 1)), M.resizing) E.column.setWidth(M.w + q);
        else if (M.moving) {
          var x = M.lx + q;
          c._60I.each(function (y) {
            var f = y.startX,
              v = f + y.column.getWidth();
            if (x >= f && v >= x) {
              var n = {
                column: E.column,
                startX: E.startX + q,
                front: v - x > x - f,
                insertColumn: y.column
              };
              n.position = n.front ? f : v, c._5Q(n)
            }
          })
        }
      }, _16Q: function (G, P) {
        var W = this,
          o = W.tv,
          Z = W.th,
          E = Z._checkIcon;
        if (Z._6Q(G)) {
          var w = ye(E),
            F = W.lx,
            k = G.getWidth(),
            K = lc(w, G);
          if (F >= P + k / 2 - K && P + k / 2 + K >= F) {
            Z.setCheckIcon(E === Qj ? Of : Qj);
            var b = o.sm(),
              a = o._rows;
            return E === Qj ? b.rs(a) : b.ss(a), o.onCheckColumnClicked(G), !0
          }
        }
        return !1
      }, handleWindowMouseUp: function (O) {
        this.handleWindowTouchEnd(O)
      }, handleWindowTouchEnd: function (k) {
        var h = this,
          u = h.tv,
          v = h.th,
          a = h._29o;
        if (h.moving) {
          var s = v._61I;
          if (s && s.insertColumn !== s.column) {
            var c = s.column,
              r = u.getColumnModel()._roots,
              Q = r.remove(c),
              p = r.indexOf(s.insertColumn);
            p >= 0 && (s.front || p++, p <= r.size() && (r.add(c, p), u.getColumnModel()._38I(c, Q, p)))
          }
          v._5Q(V), delete h.moving
        } else if (!h.resizing && a) {
          c = a.column;
          var y = v.lp(k).x,
            g = a.startX,
            l = !0;
          if (v.onColumnClicked) {
            var J = v.onColumnClicked(c, k);
            J === !1 && (l = !1)
          }
          if (l && y >= g && y <= g + c.getWidth() && !h._16Q(c, g)) {
            if (c.isSortable()) {
              var n = u.getSortMode(),
                P = c.getSortOrder();
              n === dn ? u.getSortColumn() === c ? (P === $n && u.setSortColumn(V), c.setSortOrder(P === Oi ? $n : Oi)) : u.setSortColumn(c) : "bistate" === n && (u.getSortColumn() === c ? c.setSortOrder(P === Oi ? $n : Oi) : u.setSortColumn(c))
            }
            u.onColumnClicked(c, k)
          }
        }
        h._29o = h.resizing = h.x = h.lx = h.w = V
      }
    }), sq.TablePane = function (g) {
      this.init(new cq(g))
    }, vn("TablePane", d, {
      ms_v: 1,
      _44o: 1
    }), sq.TreeTablePane = function (z) {
      this.init(new Nd(z))
    }, vn("TreeTablePane", d, {
      ms_v: 1,
      _44o: 1
    }), sq.Toolbar = function (z) {
      var t = this,
        D = t._view = df(1, t),
        Q = D.style;
      Q.background = H.toolbarBackground || "", Q.height = Mn + op, t._canvas = ip(D), t._30o = new Vq, t._90I = new Vq, t.setItems(z || []), D.handleGroupSelectedChanged = function (L) {
        if (L.isSelected()) {
          var x = L.getGroupId();
          null != x && t._items.forEach(function (l) {
            var s = l.element;
            s && s !== L && s.setSelected && s.getGroupId && s.getGroupId() === x && s.setSelected(!1)
          })
        }
      }, new wp(t)
    }, vn("Toolbar", d, {
      ms_v: 1,
      ms_fire: 1,
      ms_tx: 1,
      ms_lp: 1,
      ms_tip: 1,
      ms_value: 1,
      ms_ac: [pq, Rh, jm, fg, Zo, "itemGap", "separatorColor", "currentItem", "stickToRight"],
      _labelColor: H.toolbarLabelColor,
      _labelSelectColor: H.toolbarLabelSelectColor,
      _labelFont: H.toolbarLabelFont,
      _selectBackground: H.toolbarSelectBackground,
      _itemGap: H.toolbarItemGap,
      _separatorColor: H.toolbarSeparatorColor,
      _stickToRight: !1,
      getSumWidth: function () {
        return this._64I
      }, getToolTip: function (F) {
        var b = this.getItemInfoAt(F);
        return b ? b.item.toolTip : V
      }, getLabelColor: function (D) {
        return D.selected && D.type !== Qj && D.type !== Mc ? this._labelSelectColor : this._labelColor
      }, onPropertyChanged: function (X) {
        this.iv(), X.property === pq && this._items.forEach(function (U) {
          xl(U)
        })
      }, redraw: function () {
        this.iv()
      }, addItem: function (c, i) {
        var H = this._items;
        i == V ? H.push(c) : H.splice(i, 0, c), this.fp(pq, V, H)
      }, removeItem: function (C) {
        if (C)
          for (var P = this._items, T = 0; T < P.length; T++) C === P[T] && (P.splice(T, 1), this.fp(pq, V, P))
      }, removeItemById: function (K) {
        if (K != V)
          for (var k = this._items, U = 0; U < k.length; U++) K === k[U].id && (k.splice(U, 1), this.fp(pq, V, k))
      }, getItemById: function (M) {
        if (M != V)
          for (var c = this._items, B = 0; B < c.length; B++) {
            var P = c[B];
            if (M === P.id) return P
          }
      }, getItemInfos: function () {
        return this._30o
      }, getItemInfoAt: function (e) {
        var E = this,
          y = 0,
          t = E._30o,
          T = E.lp(e),
          Z = T.x,
          I = T.y;
        if (I >= 0 && I <= E.getHeight())
          for (; y < t.size(); y++) {
            var Y = t.get(y);
            if (Y.startX <= Z && Z <= Y.endX) return Y
          }
        return V
      }, drawItem: function (V, W, K, w, I) {
        if (W.visible === !1) return 0;
        var d = this,
          E = W.disabled;
        E && (V.globalAlpha = Wm);
        var k = d.drawItemImpl(V, W, K, w, I),
          R = d._itemGap;
        return E && (V.globalAlpha = 1), this._currentItem !== W || "separator" === W || W.unfocusable || In(V, d._separatorColor, K - R / 2, 0, k + R, w), k
      }, drawItemImpl: function (L, e, d, Q, B) {
        var z, p = this,
          o = p._view,
          C = p._itemGap,
          h = Q / 2,
          t = e.type,
          J = e.label,
          i = p.getLabelFont(e),
          M = p.getLabelColor(e),
          Y = e.selected,
          A = ye(e.icon),
          b = lc(A, e),
          W = 0,
          m = e.element,
          n = b + (J ? pl(i, J).width : 0);
        if ("separator" === e) return Rf(L, p._separatorColor, d, Q / 4, h), 1;
        if (m) {
          A && Nb(L, A, d + b / 2, h), Uq(L, J, i, M, d + b, 0, 0, Q);
          var w = hl(m);
          B || p._90I.add(w), w.parentNode !== o && ni(o, w), m.iv && m.iv(), m.validate && m.validate();
          var O = w.getBoundingClientRect(),
            j = O.width,
            V = w.style;
          return zn(w), V.left = p.tx() + d + n + op, V.top = (Q - O.height) / 2 + op, n + j
        }
        return t === Mc ? z = ye(Y ? $j : Aq) : t === Qj && (z = ye(Y ? Qj : Of)), z ? (W = lc(z, e), Nb(L, z, d + W / 2, h), d += W, n += W) : Y && en(L, d - C / 2, 0, n + C, Q, p.getSelectBackground(e)), A && Nb(L, A, d + b / 2, h), Uq(L, J, i, M, d + b, 0, 0, Q), n
      }, validateImpl: function () {
        var T = this,
          G = T._canvas,
          u = T.getWidth(),
          N = T.getHeight(),
          M = T._30o,
          k = T._items;
        We(G, u, N);
        var Q = Wl(G),
          A = T._itemGap,
          y = A / 2;
        je(Q, T.tx(), 0, 1), Q.clearRect(0, 0, u, N);
        var z = T._90I;
        T._90I = new Vq, M.clear(), k.forEach(function (C) {
          var r = T.drawItem(Q, C, y, N);
          M.add({
            item: C,
            startX: y,
            endX: y + r,
            width: r
          }), r && (y += r + A)
        }), z.each(function (k) {
          T._90I.contains(k) || Wj(k)
        }), T._64I = v(0, y), Q.restore(), T._stickToRight ? (T._65O = 0, Q = Wl(G), y = u - T._64I + A, je(Q, 0, 0, 1), Q.clearRect(0, 0, u, N), M.clear(), k.forEach(function (L) {
          var S = T.drawItem(Q, L, y, N, !0);
          M.add({
            item: L,
            startX: y,
            endX: y + S,
            width: S
          }), S && (y += S + A)
        }), Q.restore()) : T.tx(T.tx())
      }, handleClick: function (G) {
        var p = this,
          M = G.type,
          J = G.action,
          g = G.groupId,
          c = G.selected;
        G.disabled || (g != V ? c || (G.selected = !0, this._items.forEach(function (C) {
          C.groupId === g && G !== C && (C.selected = !1)
        }), J && G.action(G, p)) : M === Qj || "toggle" === M ? (G.selected = !c, J && G.action(G, p)) : J && G.action(G, p)), hm(), p.iv()
      }
    });
    var wp = function (w) {
      this.tb = w, this.addListeners()
    };
    Vm(wp, d, {
      ms_listener: 1,
      getView: function () {
        return this.tb._view
      }, handle_mousewheel: function (s) {
        this.handleScroll(s, 10 * (s.wheelDelta / 40))
      }, handle_DOMMouseScroll: function (P) {
        this.handleScroll(P, 10 * -P.detail)
      }, handleScroll: function (G, y) {
        gk(G);
        var X = this.tb;
        X.isScrollable() && !X._stickToRight && (X.tx(X.tx() + y), no())
      }, handle_mousemove: function (L) {
        var n = this;
        qq ? n.info2 = n.tb.getItemInfoAt(L) : n.setItem(L)
      }, handle_mouseout: function (g) {
        var n = this;
        g.target === n.getView() ? n.tb.setCurrentItem(V) : n.handle_mousemove(g)
      }, handle_mousedown: function (P) {
        this.handle_mousemove(P), this.handle_touchstart(P)
      }, handle_touchstart: function (x) {
        var Y = this,
          f = Y.tb,
          m = x.target;
        (m === Y.getView() || m === f._canvas) && (gk(x), f.setFocus(x) && (this.setItem(x), (f.isScrollable() || Y.info && !Y.info.item.disabled) && (Y.x = Dr(x).x, Y.tx = f.tx(), sp(Y, x))))
      }, handleWindowMouseMove: function (e) {
        this.handleWindowTouchMove(e)
      }, handleWindowTouchMove: function (H) {
        var p = this,
          w = p.tb;
        if (!w._stickToRight) {
          var i = Dr(H).x - p.x;
          !p._25o && G(i) > 2 && w.isScrollable() && (p._25o = 1), p._25o && w.tx(p.tx + i)
        }
      }, handleWindowMouseUp: function (V) {
        this.handleWindowTouchEnd(V)
      }, handleWindowTouchEnd: function () {
        var c = this,
          Z = c.tb,
          M = c.info,
          Y = c.info2;
        if (!c._25o && M) {
          var z = M.item;
          Y && Y.item !== z || Z.handleClick(z)
        }
        c._25o = c.x = c.tx = c.info2 = V, c.setItem()
      }, setItem: function (L) {
        var s = this,
          U = s.tb,
          E = s.info = L ? U.getItemInfoAt(L) : V;
        U.setCurrentItem(E ? E.item : V)
      }
    }), sq.BorderPane = function () {
      this._view = df(1, this), this.iv()
    }, vn("BorderPane", d, {
      ms_v: 1,
      ms_ac: ["topHeight", "bottomHeight", "leftWidth", "rightWidth"],
      ms_fire: 1,
      getLeftView: function () {
        return this._leftView
      }, setLeftView: function (b, B) {
        this._12o("leftView", b), B != V && this.setLeftWidth(B)
      }, getRightView: function () {
        return this._rightView
      }, setRightView: function (I, X) {
        this._12o("rightView", I), X != V && this.setRightWidth(X)
      }, getTopView: function () {
        return this._topView
      }, setTopView: function (D, X) {
        this._12o("topView", D), X != V && this.setTopHeight(X)
      }, getBottomView: function () {
        return this._bottomView
      }, setBottomView: function (N, j) {
        this._12o("bottomView", N), j != V && this.setBottomHeight(j)
      }, getCenterView: function () {
        return this._centerView
      }, setCenterView: function (C) {
        this._12o("centerView", C)
      }, _12o: function (q, x) {
        var r = this,
          F = "_" + q,
          d = r._view,
          X = r[F];
        X !== x && (X && (X.getView ? Wj(X.getView()) : Wj(X)), r[F] = x, x && (x.getView ? ni(d, x.getView(), 1) : ni(d, x, 1)), r.fp(q, X, x))
      }, onPropertyChanged: function () {
        this.iv()
      }, validateImpl: function () {
        var n = this,
          s = n._topView,
          Z = n._bottomView,
          C = n._leftView,
          R = n._rightView,
          g = n._centerView,
          S = n.getWidth(),
          N = n.getHeight(),
          G = 0,
          D = 0,
          q = S,
          L = N,
          y = 0,
          U = 0,
          u = 0,
          I = 0;
        s && (y = n._topHeight == V ? sh(s) : n._topHeight, D = y), Z && (U = n._bottomHeight == V ? sh(Z) : n._bottomHeight, L = N - U), C && (u = n._leftWidth == V ? kj(C) : n._leftWidth, G = u), R && (I = n._rightWidth == V ? kj(R) : n._rightWidth, q = S - I);
        var K = v(0, q - G),
          Q = v(0, L - D);
        s && ke(s, 0, 0, S, y), Z && ke(Z, 0, L, S, U), C && ke(C, 0, D, u, Q), R && ke(R, q, D, I, Q), g && ke(g, G, D, K, Q)
      }
    })
  }
}("undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : this, Object);
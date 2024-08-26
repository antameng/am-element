import { defineComponent as k, useSlots as I, computed as l, ref as O, inject as S, openBlock as r, createBlock as b, resolveDynamicComponent as N, normalizeClass as R, unref as U, withCtx as w, renderSlot as d, createVNode as D, normalizeStyle as g, createCommentVNode as _, provide as E, reactive as P, toRef as u, createElementBlock as K } from "vue";
import { _ as h } from "./Icon-ErRD6GZ2.mjs";
import { t as V } from "./vendor-BVNR0mO6.mjs";
import { w as T } from "./utils-BkHCoCCW.mjs";
const z = Symbol(
  "BUTTON_GROUP_CTX_KEY"
), X = /* @__PURE__ */ k({
  name: "AmButton",
  __name: "Button",
  props: {
    tag: { default: "button" },
    type: {},
    size: {},
    nativeType: { default: "button" },
    plain: { type: Boolean },
    round: { type: Boolean },
    circle: { type: Boolean },
    disabled: { type: Boolean },
    loading: { type: Boolean },
    loadingIcon: {},
    icon: {},
    iconPosition: {},
    square: { type: Boolean },
    autofocus: { type: Boolean },
    useThrottle: { type: Boolean, default: !0 },
    throttleDuration: { default: 1e3 }
  },
  emits: ["click"],
  setup(a, { expose: n, emit: s }) {
    const o = a, i = I(), $ = s, c = l(() => ({ marginRight: i.default ? "6px" : "0px" })), p = O(), t = S(z, void 0), m = l(() => (t == null ? void 0 : t.size) ?? (o == null ? void 0 : o.size) ?? ""), f = l(() => (t == null ? void 0 : t.type) ?? (o == null ? void 0 : o.type) ?? ""), G = l(() => (t == null ? void 0 : t.disabled) || (o == null ? void 0 : o.disabled) || !1), y = (e) => $("click", e), A = V(y, o.throttleDuration);
    return n({
      ref: p
    }), (e, B) => (r(), b(N(e.tag), {
      class: R(["am-button", {
        [`am-button--${f.value}`]: f.value,
        [`am-button--${m.value}`]: m.value,
        "is-disabled": !!(G.value || e.loading),
        "is-plain": e.plain,
        "is-round": e.round,
        "is-circle": e.circle,
        "is-loading": e.loading
      }]),
      type: e.tag === "button" ? e.nativeType : void 0,
      ref: p.value,
      autofocus: e.autofocus,
      disable: o.disabled,
      onClick: B[0] || (B[0] = (v) => e.useThrottle ? U(A)(v) : y(v))
    }, {
      default: w(() => [
        e.loading ? d(e.$slots, "loading", { key: 0 }, () => [
          D(h, {
            size: "1x",
            class: "loading-icon",
            icon: e.loadingIcon ?? "spinner",
            style: g(c.value),
            spin: ""
          }, null, 8, ["icon", "style"])
        ], !0) : _("", !0),
        e.icon && !e.loading ? (r(), b(h, {
          key: 1,
          style: g(c.value),
          icon: e.icon
        }, null, 8, ["style", "icon"])) : _("", !0),
        d(e.$slots, "default", {}, void 0, !0)
      ]),
      _: 3
    }, 8, ["type", "class", "autofocus", "disable"]));
  }
}), C = (a, n) => {
  const s = a.__vccOpts || a;
  for (const [o, i] of n)
    s[o] = i;
  return s;
}, Y = /* @__PURE__ */ C(X, [["__scopeId", "data-v-41aa57fa"]]), j = { class: "am-button-group" }, q = /* @__PURE__ */ k({
  name: "AmButtonGroup",
  __name: "ButtonGroup",
  props: {
    size: {},
    type: {},
    disabled: { type: Boolean }
  },
  setup(a) {
    const n = a;
    return E(z, P({
      size: u(n, "size"),
      type: u(n, "type"),
      disabled: u(n, "disabled")
    })), (s, o) => (r(), K("div", j, [
      d(s.$slots, "default", {}, void 0, !0)
    ]));
  }
}), F = /* @__PURE__ */ C(q, [["__scopeId", "data-v-e0c6438e"]]), Q = T(Y), W = T(F);
export {
  Q as A,
  W as a
};

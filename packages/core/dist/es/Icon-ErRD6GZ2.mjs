import { defineComponent as p, computed as o, openBlock as l, createElementBlock as s, mergeProps as i, createVNode as c, unref as m, normalizeProps as y, guardReactiveProps as B } from "vue";
import { FontAwesomeIcon as u } from "@fortawesome/vue-fontawesome";
import { o as f } from "./vendor-BVNR0mO6.mjs";
import { w as d } from "./utils-BkHCoCCW.mjs";
const v = /* @__PURE__ */ p({
  name: "AmIcon",
  inheritAttrs: !1,
  __name: "Icon",
  props: {
    border: { type: Boolean },
    fixedWidth: { type: Boolean },
    flip: {},
    icon: {},
    mask: {},
    listItem: { type: Boolean },
    pull: {},
    pulse: { type: Boolean },
    rotation: {},
    swapOpacity: { type: Boolean },
    size: {},
    spin: { type: Boolean },
    transform: {},
    symbol: { type: [Boolean, String] },
    title: {},
    inverse: { type: Boolean },
    bounce: { type: Boolean },
    shake: { type: Boolean },
    beat: { type: Boolean },
    fade: { type: Boolean },
    beatFade: { type: Boolean },
    spinPulse: { type: Boolean },
    spinReverse: { type: Boolean },
    type: {},
    color: {}
  },
  setup(t) {
    const e = t, n = o(() => ({ color: e.color ?? void 0 })), a = o(() => f(e, ["type", "color"]));
    return (r, I) => (l(), s("i", i({
      class: ["am-icon", [`am-icon-${e.type}`]],
      style: n.value
    }, r.$attrs), [
      c(m(u), y(B(a.value)), null, 16)
    ], 16));
  }
}), P = d(v);
export {
  P as A,
  v as _
};

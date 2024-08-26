import { f as t } from "./vendor-BVNR0mO6.mjs";
function i(a) {
  return (r) => t(a, (l) => r.use(l));
}
const n = (a) => (a.install = (s) => {
  const r = (a == null ? void 0 : a.name) || "UnnamedComponent";
  s.component(r, a);
}, a);
export {
  i as m,
  n as w
};

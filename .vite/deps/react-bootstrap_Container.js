"use client";
import { r as __toESM, t as require_react } from "./react-BQupsjBO.js";
import { a as useBootstrapPrefix, c as require_classnames, s as require_jsx_runtime } from "./ThemeProvider-CVULedHS.js";
//#region node_modules/react-bootstrap/esm/Container.js
var import_classnames = /* @__PURE__ */ __toESM(require_classnames());
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Container = /* @__PURE__ */ import_react.forwardRef(({ bsPrefix, fluid = false, as: Component = "div", className, ...props }, ref) => {
	const prefix = useBootstrapPrefix(bsPrefix, "container");
	const suffix = typeof fluid === "string" ? `-${fluid}` : "-fluid";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		ref,
		...props,
		className: (0, import_classnames.default)(className, fluid ? `${prefix}${suffix}` : prefix)
	});
});
Container.displayName = "Container";
//#endregion
export { Container as default };

//# sourceMappingURL=react-bootstrap_Container.js.map
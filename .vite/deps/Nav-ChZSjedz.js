import { r as __toESM, t as require_react } from "./react-BQupsjBO.js";
import { a as useBootstrapPrefix, c as require_classnames, s as require_jsx_runtime } from "./ThemeProvider-CVULedHS.js";
import { c as context, i as dataProp, l as SelectableContext, r as dataAttr, t as qsa, u as makeEventKey } from "./querySelectorAll-MHpoZ79M.js";
import { n as useUncontrolled } from "./esm-Ci1PRbhB.js";
import { t as useMergedRefs } from "./useMergedRefs-zWTFjjq0.js";
import { i as TabContext, l as useForceUpdate, n as NavItem$1, o as NavContext, t as NavLink } from "./NavLink-B1S-9g_F.js";
import { t as context$1 } from "./CardHeaderContext-CKlf1rcK.js";
//#region node_modules/@restart/ui/esm/Nav.js
var import_classnames = /* @__PURE__ */ __toESM(require_classnames());
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var _excluded = [
	"as",
	"onSelect",
	"activeKey",
	"role",
	"onKeyDown"
];
function _objectWithoutPropertiesLoose(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (e.indexOf(n) >= 0) continue;
		t[n] = r[n];
	}
	return t;
}
var noop = () => {};
var EVENT_KEY_ATTR = dataAttr("event-key");
var Nav$1 = /* @__PURE__ */ import_react.forwardRef((_ref, ref) => {
	let { as: Component = "div", onSelect, activeKey, role, onKeyDown } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded);
	const forceUpdate = useForceUpdate();
	const needsRefocusRef = (0, import_react.useRef)(false);
	const parentOnSelect = (0, import_react.useContext)(SelectableContext);
	const tabContext = (0, import_react.useContext)(TabContext);
	let getControlledId, getControllerId;
	if (tabContext) {
		role = role || "tablist";
		activeKey = tabContext.activeKey;
		getControlledId = tabContext.getControlledId;
		getControllerId = tabContext.getControllerId;
	}
	const listNode = (0, import_react.useRef)(null);
	const getNextActiveTab = (offset) => {
		const currentListNode = listNode.current;
		if (!currentListNode) return null;
		const items = qsa(currentListNode, `[${EVENT_KEY_ATTR}]:not([aria-disabled=true])`);
		const activeChild = currentListNode.querySelector("[aria-selected=true]");
		if (!activeChild || activeChild !== document.activeElement) return null;
		const index = items.indexOf(activeChild);
		if (index === -1) return null;
		let nextIndex = index + offset;
		if (nextIndex >= items.length) nextIndex = 0;
		if (nextIndex < 0) nextIndex = items.length - 1;
		return items[nextIndex];
	};
	const handleSelect = (key, event) => {
		if (key == null) return;
		onSelect?.(key, event);
		parentOnSelect?.(key, event);
	};
	const handleKeyDown = (event) => {
		onKeyDown?.(event);
		if (!tabContext) return;
		let nextActiveChild;
		switch (event.key) {
			case "ArrowLeft":
			case "ArrowUp":
				nextActiveChild = getNextActiveTab(-1);
				break;
			case "ArrowRight":
			case "ArrowDown":
				nextActiveChild = getNextActiveTab(1);
				break;
			default: return;
		}
		if (!nextActiveChild) return;
		event.preventDefault();
		handleSelect(nextActiveChild.dataset[dataProp("EventKey")] || null, event);
		needsRefocusRef.current = true;
		forceUpdate();
	};
	(0, import_react.useEffect)(() => {
		if (listNode.current && needsRefocusRef.current) listNode.current.querySelector(`[${EVENT_KEY_ATTR}][aria-selected=true]`)?.focus();
		needsRefocusRef.current = false;
	});
	const mergedRef = useMergedRefs(ref, listNode);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectableContext.Provider, {
		value: handleSelect,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavContext.Provider, {
			value: {
				role,
				activeKey: makeEventKey(activeKey),
				getControlledId: getControlledId || noop,
				getControllerId: getControllerId || noop
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, Object.assign({}, props, {
				onKeyDown: handleKeyDown,
				ref: mergedRef,
				role
			}))
		})
	});
});
Nav$1.displayName = "Nav";
var Nav_default$1 = Object.assign(Nav$1, { Item: NavItem$1 });
//#endregion
//#region node_modules/react-bootstrap/esm/NavItem.js
var NavItem = /* @__PURE__ */ import_react.forwardRef(({ className, bsPrefix, as: Component = "div", ...props }, ref) => {
	bsPrefix = useBootstrapPrefix(bsPrefix, "nav-item");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		ref,
		className: (0, import_classnames.default)(className, bsPrefix),
		...props
	});
});
NavItem.displayName = "NavItem";
//#endregion
//#region node_modules/react-bootstrap/esm/Nav.js
var Nav = /* @__PURE__ */ import_react.forwardRef((uncontrolledProps, ref) => {
	const { as = "div", bsPrefix: initialBsPrefix, variant, fill = false, justify = false, navbar, navbarScroll, className, activeKey, ...props } = useUncontrolled(uncontrolledProps, { activeKey: "onSelect" });
	const bsPrefix = useBootstrapPrefix(initialBsPrefix, "nav");
	let navbarBsPrefix;
	let cardHeaderBsPrefix;
	let isNavbar = false;
	const navbarContext = (0, import_react.useContext)(context);
	const cardHeaderContext = (0, import_react.useContext)(context$1);
	if (navbarContext) {
		navbarBsPrefix = navbarContext.bsPrefix;
		isNavbar = navbar == null ? true : navbar;
	} else if (cardHeaderContext) ({cardHeaderBsPrefix} = cardHeaderContext);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav_default$1, {
		as,
		ref,
		activeKey,
		className: (0, import_classnames.default)(className, {
			[bsPrefix]: !isNavbar,
			[`${navbarBsPrefix}-nav`]: isNavbar,
			[`${navbarBsPrefix}-nav-scroll`]: isNavbar && navbarScroll,
			[`${cardHeaderBsPrefix}-${variant}`]: !!cardHeaderBsPrefix,
			[`${bsPrefix}-${variant}`]: !!variant,
			[`${bsPrefix}-fill`]: fill,
			[`${bsPrefix}-justified`]: justify
		}),
		...props
	});
});
Nav.displayName = "Nav";
var Nav_default = Object.assign(Nav, {
	Item: NavItem,
	Link: NavLink
});
//#endregion
export { NavItem as n, Nav_default$1 as r, Nav_default as t };

//# sourceMappingURL=Nav-ChZSjedz.js.map
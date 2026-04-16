import { r as __toESM, t as require_react } from "./react-BQupsjBO.js";
import { a as useBootstrapPrefix, c as require_classnames, s as require_jsx_runtime } from "./ThemeProvider-CVULedHS.js";
import { a as useEventCallback, l as SelectableContext, r as dataAttr, u as makeEventKey } from "./querySelectorAll-MHpoZ79M.js";
import { n as useButtonProps, t as Button } from "./Button-z_Ht61xD.js";
//#region node_modules/@restart/ui/node_modules/@restart/hooks/esm/useForceUpdate.js
var import_react = /* @__PURE__ */ __toESM(require_react());
/**
* Returns a function that triggers a component update. the hook equivalent to
* `this.forceUpdate()` in a class component. In most cases using a state value directly
* is preferable but may be required in some advanced usages of refs for interop or
* when direct DOM manipulation is required.
*
* ```ts
* const forceUpdate = useForceUpdate();
*
* const updateOnClick = useCallback(() => {
*  forceUpdate()
* }, [forceUpdate])
*
* return <button type="button" onClick={updateOnClick}>Hi there</button>
* ```
*/
function useForceUpdate() {
	const [, dispatch] = (0, import_react.useReducer)((revision) => revision + 1, 0);
	return dispatch;
}
//#endregion
//#region node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventListener.js
var import_classnames = /* @__PURE__ */ __toESM(require_classnames());
/**
* Attaches an event handler outside directly to specified DOM element
* bypassing the react synthetic event system.
*
* @param element The target to listen for events on
* @param event The DOM event name
* @param handler An event handler
* @param capture Whether or not to listen during the capture event phase
*/
function useEventListener(eventTarget, event, listener, capture = false) {
	const handler = useEventCallback(listener);
	(0, import_react.useEffect)(() => {
		const target = typeof eventTarget === "function" ? eventTarget() : eventTarget;
		target.addEventListener(event, handler, capture);
		return () => target.removeEventListener(event, handler, capture);
	}, [eventTarget]);
}
//#endregion
//#region node_modules/@restart/ui/node_modules/@restart/hooks/esm/useCallbackRef.js
/**
* A convenience hook around `useState` designed to be paired with
* the component [callback ref](https://reactjs.org/docs/refs-and-the-dom.html#callback-refs) api.
* Callback refs are useful over `useRef()` when you need to respond to the ref being set
* instead of lazily accessing it in an effect.
*
* ```ts
* const [element, attachRef] = useCallbackRef<HTMLDivElement>()
*
* useEffect(() => {
*   if (!element) return
*
*   const calendar = new FullCalendar.Calendar(element)
*
*   return () => {
*     calendar.destroy()
*   }
* }, [element])
*
* return <div ref={attachRef} />
* ```
*
* @category refs
*/
function useCallbackRef() {
	return (0, import_react.useState)(null);
}
//#endregion
//#region node_modules/@restart/ui/esm/NavContext.js
var import_jsx_runtime = require_jsx_runtime();
var NavContext = /* @__PURE__ */ import_react.createContext(null);
NavContext.displayName = "NavContext";
//#endregion
//#region node_modules/@restart/ui/esm/Anchor.js
var _excluded$1 = ["onKeyDown"];
function _objectWithoutPropertiesLoose$1(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (e.indexOf(n) >= 0) continue;
		t[n] = r[n];
	}
	return t;
}
function isTrivialHref(href) {
	return !href || href.trim() === "#";
}
/**
* An generic `<a>` component that covers a few A11y cases, ensuring that
* cases where the `href` is missing or trivial like "#" are treated like buttons.
*/
var Anchor = /* @__PURE__ */ import_react.forwardRef((_ref, ref) => {
	let { onKeyDown } = _ref, props = _objectWithoutPropertiesLoose$1(_ref, _excluded$1);
	const [buttonProps] = useButtonProps(Object.assign({ tagName: "a" }, props));
	const handleKeyDown = useEventCallback((e) => {
		buttonProps.onKeyDown(e);
		onKeyDown?.(e);
	});
	if (isTrivialHref(props.href) || props.role === "button") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", Object.assign({ ref }, props, buttonProps, { onKeyDown: handleKeyDown }));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", Object.assign({ ref }, props, { onKeyDown }));
});
Anchor.displayName = "Anchor";
//#endregion
//#region node_modules/@restart/ui/esm/TabContext.js
var TabContext = /* @__PURE__ */ import_react.createContext(null);
//#endregion
//#region node_modules/@restart/ui/esm/NavItem.js
var _excluded = [
	"as",
	"active",
	"eventKey"
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
function useNavItem({ key, onClick, active, id, role, disabled }) {
	const parentOnSelect = (0, import_react.useContext)(SelectableContext);
	const navContext = (0, import_react.useContext)(NavContext);
	const tabContext = (0, import_react.useContext)(TabContext);
	let isActive = active;
	const props = { role };
	if (navContext) {
		if (!role && navContext.role === "tablist") props.role = "tab";
		const contextControllerId = navContext.getControllerId(key != null ? key : null);
		const contextControlledId = navContext.getControlledId(key != null ? key : null);
		props[dataAttr("event-key")] = key;
		props.id = contextControllerId || id;
		isActive = active == null && key != null ? navContext.activeKey === key : active;
		/**
		* Simplified scenario for `mountOnEnter`.
		*
		* While it would make sense to keep 'aria-controls' for tabs that have been mounted at least
		* once, it would also complicate the code quite a bit, for very little gain.
		* The following implementation is probably good enough.
		*
		* @see https://github.com/react-restart/ui/pull/40#issuecomment-1009971561
		*/
		if (isActive || !(tabContext != null && tabContext.unmountOnExit) && !(tabContext != null && tabContext.mountOnEnter)) props["aria-controls"] = contextControlledId;
	}
	if (props.role === "tab") {
		props["aria-selected"] = isActive;
		if (!isActive) props.tabIndex = -1;
		if (disabled) {
			props.tabIndex = -1;
			props["aria-disabled"] = true;
		}
	}
	props.onClick = useEventCallback((e) => {
		if (disabled) return;
		onClick?.(e);
		if (key == null) return;
		if (parentOnSelect && !e.isPropagationStopped()) parentOnSelect(key, e);
	});
	return [props, { isActive }];
}
var NavItem = /* @__PURE__ */ import_react.forwardRef((_ref, ref) => {
	let { as: Component = Button, active, eventKey } = _ref, options = _objectWithoutPropertiesLoose(_ref, _excluded);
	const [props, meta] = useNavItem(Object.assign({
		key: makeEventKey(eventKey, options.href),
		active
	}, options));
	props[dataAttr("active")] = meta.isActive;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, Object.assign({}, options, props, { ref }));
});
NavItem.displayName = "NavItem";
//#endregion
//#region node_modules/react-bootstrap/esm/NavLink.js
var NavLink = /* @__PURE__ */ import_react.forwardRef(({ bsPrefix, className, as: Component = Anchor, active, eventKey, disabled = false, ...props }, ref) => {
	bsPrefix = useBootstrapPrefix(bsPrefix, "nav-link");
	const [navItemProps, meta] = useNavItem({
		key: makeEventKey(eventKey, props.href),
		active,
		disabled,
		...props
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		...navItemProps,
		ref,
		disabled,
		className: (0, import_classnames.default)(className, bsPrefix, disabled && "disabled", meta.isActive && "active")
	});
});
NavLink.displayName = "NavLink";
//#endregion
export { Anchor as a, useEventListener as c, TabContext as i, useForceUpdate as l, NavItem as n, NavContext as o, useNavItem as r, useCallbackRef as s, NavLink as t };

//# sourceMappingURL=NavLink-B1S-9g_F.js.map
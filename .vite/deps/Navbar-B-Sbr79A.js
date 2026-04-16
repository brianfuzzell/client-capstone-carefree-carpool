import { r as __toESM, t as require_react } from "./react-BQupsjBO.js";
import { a as useBootstrapPrefix, c as require_classnames, s as require_jsx_runtime } from "./ThemeProvider-CVULedHS.js";
import { a as useEventCallback, c as context, l as SelectableContext, n as useIsomorphicEffect_default, o as usePrevious, r as dataAttr, s as useMounted, t as qsa } from "./querySelectorAll-MHpoZ79M.js";
import { n as useUncontrolled } from "./esm-Ci1PRbhB.js";
import { a as canUseDOM_default, n as listen, o as require_prop_types, s as ownerDocument } from "./useMergedRefs-CRrOysGQ.js";
import { c as getChildRef, d as ENTERING, i as triggerBrowserReflow, l as isEscKey, n as TransitionWrapper, o as transitionEndListener, p as style, t as Collapse, u as ENTERED } from "./Collapse-Cj8uXe83.js";
import { t as require_react_dom } from "./react-dom-BWJlfP31.js";
import { i as useEventCallback$1, n as contains, r as useIsomorphicEffect_default$1, t as useWindow } from "./useWindow-C9XNSja6.js";
import { t as useMergedRefs } from "./useMergedRefs-zWTFjjq0.js";
import { t as divWithClassName_default } from "./divWithClassName-Dr8Pay26.js";
//#region node_modules/react-bootstrap/esm/NavbarBrand.js
var import_classnames = /* @__PURE__ */ __toESM(require_classnames());
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NavbarBrand = /* @__PURE__ */ import_react.forwardRef(({ bsPrefix, className, as, ...props }, ref) => {
	bsPrefix = useBootstrapPrefix(bsPrefix, "navbar-brand");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(as || (props.href ? "a" : "span"), {
		...props,
		ref,
		className: (0, import_classnames.default)(className, bsPrefix)
	});
});
NavbarBrand.displayName = "NavbarBrand";
//#endregion
//#region node_modules/react-bootstrap/esm/NavbarCollapse.js
var NavbarCollapse = /* @__PURE__ */ import_react.forwardRef(({ children, bsPrefix, ...props }, ref) => {
	bsPrefix = useBootstrapPrefix(bsPrefix, "navbar-collapse");
	const context$2 = (0, import_react.useContext)(context);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collapse, {
		in: !!(context$2 && context$2.expanded),
		...props,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			className: bsPrefix,
			children
		})
	});
});
NavbarCollapse.displayName = "NavbarCollapse";
//#endregion
//#region node_modules/react-bootstrap/esm/NavbarToggle.js
var NavbarToggle = /* @__PURE__ */ import_react.forwardRef(({ bsPrefix, className, children, label = "Toggle navigation", as: Component = "button", onClick, ...props }, ref) => {
	bsPrefix = useBootstrapPrefix(bsPrefix, "navbar-toggler");
	const { onToggle, expanded } = (0, import_react.useContext)(context) || {};
	const handleClick = useEventCallback$1((e) => {
		if (onClick) onClick(e);
		if (onToggle) onToggle();
	});
	if (Component === "button") props.type = "button";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		onClick: handleClick,
		"aria-label": label,
		className: (0, import_classnames.default)(className, bsPrefix, !expanded && "collapsed"),
		children: children || /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `${bsPrefix}-icon` })
	});
});
NavbarToggle.displayName = "NavbarToggle";
//#endregion
//#region node_modules/@restart/hooks/esm/useMediaQuery.js
var matchersByWindow = /* @__PURE__ */ new WeakMap();
var getMatcher = (query, targetWindow) => {
	if (!query || !targetWindow) return void 0;
	const matchers = matchersByWindow.get(targetWindow) || /* @__PURE__ */ new Map();
	matchersByWindow.set(targetWindow, matchers);
	let mql = matchers.get(query);
	if (!mql) {
		mql = targetWindow.matchMedia(query);
		mql.refCount = 0;
		matchers.set(mql.media, mql);
	}
	return mql;
};
/**
* Match a media query and get updates as the match changes. The media string is
* passed directly to `window.matchMedia` and run as a Layout Effect, so initial
* matches are returned before the browser has a chance to paint.
*
* ```tsx
* function Page() {
*   const isWide = useMediaQuery('min-width: 1000px')
*
*   return isWide ? "very wide" : 'not so wide'
* }
* ```
*
* Media query lists are also reused globally, hook calls for the same query
* will only create a matcher once under the hood.
*
* @param query A media query
* @param targetWindow The window to match against, uses the globally available one as a default.
*/
function useMediaQuery(query, targetWindow = typeof window === "undefined" ? void 0 : window) {
	const mql = getMatcher(query, targetWindow);
	const [matches, setMatches] = (0, import_react.useState)(() => mql ? mql.matches : false);
	useIsomorphicEffect_default$1(() => {
		let mql = getMatcher(query, targetWindow);
		if (!mql) return setMatches(false);
		let matchers = matchersByWindow.get(targetWindow);
		const handleChange = () => {
			setMatches(mql.matches);
		};
		mql.refCount++;
		mql.addListener(handleChange);
		handleChange();
		return () => {
			mql.removeListener(handleChange);
			mql.refCount--;
			if (mql.refCount <= 0) matchers?.delete(mql.media);
			mql = void 0;
		};
	}, [query]);
	return matches;
}
//#endregion
//#region node_modules/@restart/hooks/esm/useBreakpoint.js
/**
* Create a responsive hook we a set of breakpoint names and widths.
* You can use any valid css units as well as a numbers (for pixels).
*
* **NOTE:** The object key order is important! it's assumed to be in order from smallest to largest
*
* ```ts
* const useBreakpoint = createBreakpointHook({
*  xs: 0,
*  sm: 576,
*  md: 768,
*  lg: 992,
*  xl: 1200,
* })
* ```
*
* **Watch out!** using string values will sometimes construct media queries using css `calc()` which
* is NOT supported in media queries by all browsers at the moment. use numbers for
* the widest range of browser support.
*
* @param breakpointValues A object hash of names to breakpoint dimensions
*/
function createBreakpointHook(breakpointValues) {
	const names = Object.keys(breakpointValues);
	function and(query, next) {
		if (query === next) return next;
		return query ? `${query} and ${next}` : next;
	}
	function getNext(breakpoint) {
		return names[Math.min(names.indexOf(breakpoint) + 1, names.length - 1)];
	}
	function getMaxQuery(breakpoint) {
		let value = breakpointValues[getNext(breakpoint)];
		if (typeof value === "number") value = `${value - .2}px`;
		else value = `calc(${value} - 0.2px)`;
		return `(max-width: ${value})`;
	}
	function getMinQuery(breakpoint) {
		let value = breakpointValues[breakpoint];
		if (typeof value === "number") value = `${value}px`;
		return `(min-width: ${value})`;
	}
	/**
	* Match a set of breakpoints
	*
	* ```tsx
	* const MidSizeOnly = () => {
	*   const isMid = useBreakpoint({ lg: 'down', sm: 'up' });
	*
	*   if (isMid) return <div>On a Reasonable sized Screen!</div>
	*   return null;
	* }
	* ```
	* @param breakpointMap An object map of breakpoints and directions, queries are constructed using "and" to join
	* breakpoints together
	* @param window Optionally specify the target window to match against (useful when rendering into iframes)
	*/
	/**
	* Match a single breakpoint exactly, up, or down.
	*
	* ```tsx
	* const PhoneOnly = () => {
	*   const isSmall = useBreakpoint('sm', 'down');
	*
	*   if (isSmall) return <div>On a Small Screen!</div>
	*   return null;
	* }
	* ```
	*
	* @param breakpoint The breakpoint key
	* @param direction A direction 'up' for a max, 'down' for min, true to match only the breakpoint
	* @param window Optionally specify the target window to match against (useful when rendering into iframes)
	*/
	function useBreakpoint(breakpointOrMap, direction, window) {
		let breakpointMap;
		if (typeof breakpointOrMap === "object") {
			breakpointMap = breakpointOrMap;
			window = direction;
			direction = true;
		} else {
			direction = direction || true;
			breakpointMap = { [breakpointOrMap]: direction };
		}
		return useMediaQuery((0, import_react.useMemo)(() => Object.entries(breakpointMap).reduce((query, [key, direction]) => {
			if (direction === "up" || direction === true) query = and(query, getMinQuery(key));
			if (direction === "down" || direction === true) query = and(query, getMaxQuery(key));
			return query;
		}, ""), [JSON.stringify(breakpointMap)]), window);
	}
	return useBreakpoint;
}
var useBreakpoint = createBreakpointHook({
	xs: 0,
	sm: 576,
	md: 768,
	lg: 992,
	xl: 1200,
	xxl: 1400
});
//#endregion
//#region node_modules/dom-helpers/esm/activeElement.js
/**
* Returns the actively focused element safely.
*
* @param doc the document to check
*/
function activeElement(doc) {
	if (doc === void 0) doc = ownerDocument();
	try {
		var active = doc.activeElement;
		if (!active || !active.nodeName) return null;
		return active;
	} catch (e) {
		return doc.body;
	}
}
//#endregion
//#region node_modules/@restart/ui/node_modules/@restart/hooks/esm/useUpdatedRef.js
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom());
/**
* Returns a ref that is immediately updated with the new value
*
* @param value The Ref value
* @category refs
*/
function useUpdatedRef(value) {
	const valueRef = (0, import_react.useRef)(value);
	valueRef.current = value;
	return valueRef;
}
//#endregion
//#region node_modules/@restart/ui/node_modules/@restart/hooks/esm/useWillUnmount.js
/**
* Attach a callback that fires when a component unmounts
*
* @param fn Handler to run when the component unmounts
* @deprecated Use `useMounted` and normal effects, this is not StrictMode safe
* @category effects
*/
function useWillUnmount(fn) {
	const onUnmount = useUpdatedRef(fn);
	(0, import_react.useEffect)(() => () => onUnmount.current(), []);
}
//#endregion
//#region node_modules/@restart/ui/esm/getScrollbarWidth.js
/**
* Get the width of the vertical window scrollbar if it's visible
*/
function getBodyScrollbarWidth(ownerDocument = document) {
	const window = ownerDocument.defaultView;
	return Math.abs(window.innerWidth - ownerDocument.documentElement.clientWidth);
}
//#endregion
//#region node_modules/@restart/ui/esm/ModalManager.js
var OPEN_DATA_ATTRIBUTE = dataAttr("modal-open");
/**
* Manages a stack of Modals as well as ensuring
* body scrolling is is disabled and padding accounted for
*/
var ModalManager = class {
	constructor({ ownerDocument, handleContainerOverflow = true, isRTL = false } = {}) {
		this.handleContainerOverflow = handleContainerOverflow;
		this.isRTL = isRTL;
		this.modals = [];
		this.ownerDocument = ownerDocument;
	}
	getScrollbarWidth() {
		return getBodyScrollbarWidth(this.ownerDocument);
	}
	getElement() {
		return (this.ownerDocument || document).body;
	}
	setModalAttributes(_modal) {}
	removeModalAttributes(_modal) {}
	setContainerStyle(containerState) {
		const style$1 = { overflow: "hidden" };
		const paddingProp = this.isRTL ? "paddingLeft" : "paddingRight";
		const container = this.getElement();
		containerState.style = {
			overflow: container.style.overflow,
			[paddingProp]: container.style[paddingProp]
		};
		if (containerState.scrollBarWidth) style$1[paddingProp] = `${parseInt(style(container, paddingProp) || "0", 10) + containerState.scrollBarWidth}px`;
		container.setAttribute(OPEN_DATA_ATTRIBUTE, "");
		style(container, style$1);
	}
	reset() {
		[...this.modals].forEach((m) => this.remove(m));
	}
	removeContainerStyle(containerState) {
		const container = this.getElement();
		container.removeAttribute(OPEN_DATA_ATTRIBUTE);
		Object.assign(container.style, containerState.style);
	}
	add(modal) {
		let modalIdx = this.modals.indexOf(modal);
		if (modalIdx !== -1) return modalIdx;
		modalIdx = this.modals.length;
		this.modals.push(modal);
		this.setModalAttributes(modal);
		if (modalIdx !== 0) return modalIdx;
		this.state = {
			scrollBarWidth: this.getScrollbarWidth(),
			style: {}
		};
		if (this.handleContainerOverflow) this.setContainerStyle(this.state);
		return modalIdx;
	}
	remove(modal) {
		const modalIdx = this.modals.indexOf(modal);
		if (modalIdx === -1) return;
		this.modals.splice(modalIdx, 1);
		if (!this.modals.length && this.handleContainerOverflow) this.removeContainerStyle(this.state);
		this.removeModalAttributes(modal);
	}
	isTopModal(modal) {
		return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
	}
};
//#endregion
//#region node_modules/@restart/ui/esm/useWaitForDOMRef.js
var resolveContainerRef = (ref, document) => {
	if (!canUseDOM_default) return null;
	if (ref == null) return (document || ownerDocument()).body;
	if (typeof ref === "function") ref = ref();
	if (ref && "current" in ref) ref = ref.current;
	if (ref && ("nodeType" in ref || ref.getBoundingClientRect)) return ref;
	return null;
};
function useWaitForDOMRef(ref, onResolved) {
	const window = useWindow();
	const [resolvedRef, setRef] = (0, import_react.useState)(() => resolveContainerRef(ref, window == null ? void 0 : window.document));
	if (!resolvedRef) {
		const earlyRef = resolveContainerRef(ref);
		if (earlyRef) setRef(earlyRef);
	}
	(0, import_react.useEffect)(() => {
		if (onResolved && resolvedRef) onResolved(resolvedRef);
	}, [onResolved, resolvedRef]);
	(0, import_react.useEffect)(() => {
		const nextRef = resolveContainerRef(ref);
		if (nextRef !== resolvedRef) setRef(nextRef);
	}, [ref, resolvedRef]);
	return resolvedRef;
}
//#endregion
//#region node_modules/@restart/ui/esm/NoopTransition.js
function NoopTransition({ children, in: inProp, onExited, mountOnEnter, unmountOnExit }) {
	const ref = (0, import_react.useRef)(null);
	const hasEnteredRef = (0, import_react.useRef)(inProp);
	const handleExited = useEventCallback(onExited);
	(0, import_react.useEffect)(() => {
		if (inProp) hasEnteredRef.current = true;
		else handleExited(ref.current);
	}, [inProp, handleExited]);
	const child = /* @__PURE__ */ (0, import_react.cloneElement)(children, { ref: useMergedRefs(ref, getChildRef(children)) });
	if (inProp) return child;
	if (unmountOnExit) return null;
	if (!hasEnteredRef.current && mountOnEnter) return null;
	return child;
}
//#endregion
//#region node_modules/@restart/ui/esm/useRTGTransitionProps.js
var _excluded$2 = [
	"onEnter",
	"onEntering",
	"onEntered",
	"onExit",
	"onExiting",
	"onExited",
	"addEndListener",
	"children"
];
function _objectWithoutPropertiesLoose$2(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (e.indexOf(n) >= 0) continue;
		t[n] = r[n];
	}
	return t;
}
/**
* Normalizes RTG transition callbacks with nodeRef to better support
* strict mode.
*
* @param props Transition props.
* @returns Normalized transition props.
*/
function useRTGTransitionProps(_ref) {
	let { onEnter, onEntering, onEntered, onExit, onExiting, onExited, addEndListener, children } = _ref, props = _objectWithoutPropertiesLoose$2(_ref, _excluded$2);
	const nodeRef = (0, import_react.useRef)(null);
	const mergedRef = useMergedRefs(nodeRef, getChildRef(children));
	const normalize = (callback) => (param) => {
		if (callback && nodeRef.current) callback(nodeRef.current, param);
	};
	const handleEnter = (0, import_react.useCallback)(normalize(onEnter), [onEnter]);
	const handleEntering = (0, import_react.useCallback)(normalize(onEntering), [onEntering]);
	const handleEntered = (0, import_react.useCallback)(normalize(onEntered), [onEntered]);
	const handleExit = (0, import_react.useCallback)(normalize(onExit), [onExit]);
	const handleExiting = (0, import_react.useCallback)(normalize(onExiting), [onExiting]);
	const handleExited = (0, import_react.useCallback)(normalize(onExited), [onExited]);
	const handleAddEndListener = (0, import_react.useCallback)(normalize(addEndListener), [addEndListener]);
	return Object.assign({}, props, { nodeRef }, onEnter && { onEnter: handleEnter }, onEntering && { onEntering: handleEntering }, onEntered && { onEntered: handleEntered }, onExit && { onExit: handleExit }, onExiting && { onExiting: handleExiting }, onExited && { onExited: handleExited }, addEndListener && { addEndListener: handleAddEndListener }, { children: typeof children === "function" ? (status, innerProps) => children(status, Object.assign({}, innerProps, { ref: mergedRef })) : /* @__PURE__ */ (0, import_react.cloneElement)(children, { ref: mergedRef }) });
}
//#endregion
//#region node_modules/@restart/ui/esm/RTGTransition.js
var _excluded$1 = ["component"];
function _objectWithoutPropertiesLoose$1(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (e.indexOf(n) >= 0) continue;
		t[n] = r[n];
	}
	return t;
}
var RTGTransition = /* @__PURE__ */ import_react.forwardRef((_ref, ref) => {
	let { component: Component } = _ref;
	const transitionProps = useRTGTransitionProps(_objectWithoutPropertiesLoose$1(_ref, _excluded$1));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, Object.assign({ ref }, transitionProps));
});
//#endregion
//#region node_modules/@restart/ui/esm/ImperativeTransition.js
function useTransition({ in: inProp, onTransition }) {
	const ref = (0, import_react.useRef)(null);
	const isInitialRef = (0, import_react.useRef)(true);
	const handleTransition = useEventCallback(onTransition);
	useIsomorphicEffect_default(() => {
		if (!ref.current) return;
		let stale = false;
		handleTransition({
			in: inProp,
			element: ref.current,
			initial: isInitialRef.current,
			isStale: () => stale
		});
		return () => {
			stale = true;
		};
	}, [inProp, handleTransition]);
	useIsomorphicEffect_default(() => {
		isInitialRef.current = false;
		return () => {
			isInitialRef.current = true;
		};
	}, []);
	return ref;
}
/**
* Adapts an imperative transition function to a subset of the RTG `<Transition>` component API.
*
* ImperativeTransition does not support mounting options or `appear` at the moment, meaning
* that it always acts like: `mountOnEnter={true} unmountOnExit={true} appear={true}`
*/
function ImperativeTransition({ children, in: inProp, onExited, onEntered, transition }) {
	const [exited, setExited] = (0, import_react.useState)(!inProp);
	if (inProp && exited) setExited(false);
	const combinedRef = useMergedRefs(useTransition({
		in: !!inProp,
		onTransition: (options) => {
			const onFinish = () => {
				if (options.isStale()) return;
				if (options.in) onEntered?.(options.element, options.initial);
				else {
					setExited(true);
					onExited?.(options.element);
				}
			};
			Promise.resolve(transition(options)).then(onFinish, (error) => {
				if (!options.in) setExited(true);
				throw error;
			});
		}
	}), getChildRef(children));
	return exited && !inProp ? null : /* @__PURE__ */ (0, import_react.cloneElement)(children, { ref: combinedRef });
}
function renderTransition(component, runTransition, props) {
	if (component) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RTGTransition, Object.assign({}, props, { component }));
	if (runTransition) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImperativeTransition, Object.assign({}, props, { transition: runTransition }));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NoopTransition, Object.assign({}, props));
}
//#endregion
//#region node_modules/@restart/ui/esm/Modal.js
var _excluded = [
	"show",
	"role",
	"className",
	"style",
	"children",
	"backdrop",
	"keyboard",
	"onBackdropClick",
	"onEscapeKeyDown",
	"transition",
	"runTransition",
	"backdropTransition",
	"runBackdropTransition",
	"autoFocus",
	"enforceFocus",
	"restoreFocus",
	"restoreFocusOptions",
	"renderDialog",
	"renderBackdrop",
	"manager",
	"container",
	"onShow",
	"onHide",
	"onExit",
	"onExited",
	"onExiting",
	"onEnter",
	"onEntering",
	"onEntered"
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
var manager;
function getManager(window) {
	if (!manager) manager = new ModalManager({ ownerDocument: window == null ? void 0 : window.document });
	return manager;
}
function useModalManager(provided) {
	const window = useWindow();
	const modalManager = provided || getManager(window);
	const modal = (0, import_react.useRef)({
		dialog: null,
		backdrop: null
	});
	return Object.assign(modal.current, {
		add: () => modalManager.add(modal.current),
		remove: () => modalManager.remove(modal.current),
		isTopModal: () => modalManager.isTopModal(modal.current),
		setDialogRef: (0, import_react.useCallback)((ref) => {
			modal.current.dialog = ref;
		}, []),
		setBackdropRef: (0, import_react.useCallback)((ref) => {
			modal.current.backdrop = ref;
		}, [])
	});
}
var Modal = /* @__PURE__ */ (0, import_react.forwardRef)((_ref, ref) => {
	let { show = false, role = "dialog", className, style, children, backdrop = true, keyboard = true, onBackdropClick, onEscapeKeyDown, transition, runTransition, backdropTransition, runBackdropTransition, autoFocus = true, enforceFocus = true, restoreFocus = true, restoreFocusOptions, renderDialog, renderBackdrop = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", Object.assign({}, props)), manager: providedManager, container: containerRef, onShow, onHide = () => {}, onExit, onExited, onExiting, onEnter, onEntering, onEntered } = _ref, rest = _objectWithoutPropertiesLoose(_ref, _excluded);
	const ownerWindow = useWindow();
	const container = useWaitForDOMRef(containerRef);
	const modal = useModalManager(providedManager);
	const isMounted = useMounted();
	const prevShow = usePrevious(show);
	const [exited, setExited] = (0, import_react.useState)(!show);
	const lastFocusRef = (0, import_react.useRef)(null);
	(0, import_react.useImperativeHandle)(ref, () => modal, [modal]);
	if (canUseDOM_default && !prevShow && show) lastFocusRef.current = activeElement(ownerWindow == null ? void 0 : ownerWindow.document);
	if (show && exited) setExited(false);
	const handleShow = useEventCallback(() => {
		modal.add();
		removeKeydownListenerRef.current = listen(document, "keydown", handleDocumentKeyDown);
		removeFocusListenerRef.current = listen(document, "focus", () => setTimeout(handleEnforceFocus), true);
		if (onShow) onShow();
		if (autoFocus) {
			var _modal$dialog$ownerDo, _modal$dialog;
			const currentActiveElement = activeElement((_modal$dialog$ownerDo = (_modal$dialog = modal.dialog) == null ? void 0 : _modal$dialog.ownerDocument) != null ? _modal$dialog$ownerDo : ownerWindow == null ? void 0 : ownerWindow.document);
			if (modal.dialog && currentActiveElement && !contains(modal.dialog, currentActiveElement)) {
				lastFocusRef.current = currentActiveElement;
				modal.dialog.focus();
			}
		}
	});
	const handleHide = useEventCallback(() => {
		modal.remove();
		removeKeydownListenerRef.current == null || removeKeydownListenerRef.current();
		removeFocusListenerRef.current == null || removeFocusListenerRef.current();
		if (restoreFocus) {
			var _lastFocusRef$current;
			(_lastFocusRef$current = lastFocusRef.current) == null || _lastFocusRef$current.focus == null || _lastFocusRef$current.focus(restoreFocusOptions);
			lastFocusRef.current = null;
		}
	});
	(0, import_react.useEffect)(() => {
		if (!show || !container) return;
		handleShow();
	}, [
		show,
		container,
		handleShow
	]);
	(0, import_react.useEffect)(() => {
		if (!exited) return;
		handleHide();
	}, [exited, handleHide]);
	useWillUnmount(() => {
		handleHide();
	});
	const handleEnforceFocus = useEventCallback(() => {
		if (!enforceFocus || !isMounted() || !modal.isTopModal()) return;
		const currentActiveElement = activeElement(ownerWindow == null ? void 0 : ownerWindow.document);
		if (modal.dialog && currentActiveElement && !contains(modal.dialog, currentActiveElement)) modal.dialog.focus();
	});
	const handleBackdropClick = useEventCallback((e) => {
		if (e.target !== e.currentTarget) return;
		onBackdropClick?.(e);
		if (backdrop === true) onHide();
	});
	const handleDocumentKeyDown = useEventCallback((e) => {
		if (keyboard && isEscKey(e) && modal.isTopModal()) {
			onEscapeKeyDown?.(e);
			if (!e.defaultPrevented) onHide();
		}
	});
	const removeFocusListenerRef = (0, import_react.useRef)();
	const removeKeydownListenerRef = (0, import_react.useRef)();
	const handleHidden = (...args) => {
		setExited(true);
		onExited?.(...args);
	};
	if (!container) return null;
	const dialogProps = Object.assign({
		role,
		ref: modal.setDialogRef,
		"aria-modal": role === "dialog" ? true : void 0
	}, rest, {
		style,
		className,
		tabIndex: -1
	});
	let dialog = renderDialog ? renderDialog(dialogProps) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", Object.assign({}, dialogProps, { children: /* @__PURE__ */ import_react.cloneElement(children, { role: "document" }) }));
	dialog = renderTransition(transition, runTransition, {
		unmountOnExit: true,
		mountOnEnter: true,
		appear: true,
		in: !!show,
		onExit,
		onExiting,
		onExited: handleHidden,
		onEnter,
		onEntering,
		onEntered,
		children: dialog
	});
	let backdropElement = null;
	if (backdrop) {
		backdropElement = renderBackdrop({
			ref: modal.setBackdropRef,
			onClick: handleBackdropClick
		});
		backdropElement = renderTransition(backdropTransition, runBackdropTransition, {
			in: !!show,
			appear: true,
			mountOnEnter: true,
			unmountOnExit: true,
			children: backdropElement
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ import_react_dom.createPortal(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [backdropElement, dialog] }), container) });
});
Modal.displayName = "Modal";
var Modal_default = Object.assign(Modal, { Manager: ModalManager });
//#endregion
//#region node_modules/react-bootstrap/esm/Fade.js
var fadeStyles = {
	[ENTERING]: "show",
	[ENTERED]: "show"
};
var Fade = /* @__PURE__ */ import_react.forwardRef(({ className, children, transitionClasses = {}, onEnter, ...rest }, ref) => {
	const props = {
		in: false,
		timeout: 300,
		mountOnEnter: false,
		unmountOnExit: false,
		appear: false,
		...rest
	};
	const handleEnter = (0, import_react.useCallback)((node, isAppearing) => {
		triggerBrowserReflow(node);
		onEnter?.(node, isAppearing);
	}, [onEnter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransitionWrapper, {
		ref,
		addEndListener: transitionEndListener,
		...props,
		onEnter: handleEnter,
		childRef: getChildRef(children),
		children: (status, innerProps) => /* @__PURE__ */ import_react.cloneElement(children, {
			...innerProps,
			className: (0, import_classnames.default)("fade", className, children.props.className, fadeStyles[status], transitionClasses[status])
		})
	});
});
Fade.displayName = "Fade";
//#endregion
//#region node_modules/react-bootstrap/esm/OffcanvasBody.js
var OffcanvasBody = /* @__PURE__ */ import_react.forwardRef(({ className, bsPrefix, as: Component = "div", ...props }, ref) => {
	bsPrefix = useBootstrapPrefix(bsPrefix, "offcanvas-body");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		ref,
		className: (0, import_classnames.default)(className, bsPrefix),
		...props
	});
});
OffcanvasBody.displayName = "OffcanvasBody";
//#endregion
//#region node_modules/react-bootstrap/esm/OffcanvasToggling.js
var transitionStyles = {
	[ENTERING]: "show",
	[ENTERED]: "show"
};
var OffcanvasToggling = /* @__PURE__ */ import_react.forwardRef(({ bsPrefix, className, children, in: inProp = false, mountOnEnter = false, unmountOnExit = false, appear = false, ...props }, ref) => {
	bsPrefix = useBootstrapPrefix(bsPrefix, "offcanvas");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransitionWrapper, {
		ref,
		addEndListener: transitionEndListener,
		in: inProp,
		mountOnEnter,
		unmountOnExit,
		appear,
		...props,
		childRef: getChildRef(children),
		children: (status, innerProps) => /* @__PURE__ */ import_react.cloneElement(children, {
			...innerProps,
			className: (0, import_classnames.default)(className, children.props.className, (status === "entering" || status === "exiting") && `${bsPrefix}-toggling`, transitionStyles[status])
		})
	});
});
OffcanvasToggling.displayName = "OffcanvasToggling";
//#endregion
//#region node_modules/react-bootstrap/esm/ModalContext.js
var ModalContext = /* @__PURE__ */ import_react.createContext({ onHide() {} });
//#endregion
//#region node_modules/react-bootstrap/esm/CloseButton.js
var import_prop_types = /* @__PURE__ */ __toESM(require_prop_types());
var propTypes = {
	"aria-label": import_prop_types.default.string,
	onClick: import_prop_types.default.func,
	variant: import_prop_types.default.oneOf(["white"])
};
var CloseButton = /* @__PURE__ */ import_react.forwardRef(({ className, variant, "aria-label": ariaLabel = "Close", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
	ref,
	type: "button",
	className: (0, import_classnames.default)("btn-close", variant && `btn-close-${variant}`, className),
	"aria-label": ariaLabel,
	...props
}));
CloseButton.displayName = "CloseButton";
CloseButton.propTypes = propTypes;
//#endregion
//#region node_modules/react-bootstrap/esm/AbstractModalHeader.js
var AbstractModalHeader = /* @__PURE__ */ import_react.forwardRef(({ closeLabel = "Close", closeVariant, closeButton = false, onHide, children, ...props }, ref) => {
	const context = (0, import_react.useContext)(ModalContext);
	const handleClick = useEventCallback$1(() => {
		context?.onHide();
		onHide?.();
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		...props,
		children: [children, closeButton && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloseButton, {
			"aria-label": closeLabel,
			variant: closeVariant,
			onClick: handleClick
		})]
	});
});
AbstractModalHeader.displayName = "AbstractModalHeader";
//#endregion
//#region node_modules/react-bootstrap/esm/OffcanvasHeader.js
var OffcanvasHeader = /* @__PURE__ */ import_react.forwardRef(({ bsPrefix, className, closeLabel = "Close", closeButton = false, ...props }, ref) => {
	bsPrefix = useBootstrapPrefix(bsPrefix, "offcanvas-header");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AbstractModalHeader, {
		ref,
		...props,
		className: (0, import_classnames.default)(className, bsPrefix),
		closeLabel,
		closeButton
	});
});
OffcanvasHeader.displayName = "OffcanvasHeader";
//#endregion
//#region node_modules/react-bootstrap/esm/OffcanvasTitle.js
var DivStyledAsH5 = divWithClassName_default("h5");
var OffcanvasTitle = /* @__PURE__ */ import_react.forwardRef(({ className, bsPrefix, as: Component = DivStyledAsH5, ...props }, ref) => {
	bsPrefix = useBootstrapPrefix(bsPrefix, "offcanvas-title");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		ref,
		className: (0, import_classnames.default)(className, bsPrefix),
		...props
	});
});
OffcanvasTitle.displayName = "OffcanvasTitle";
//#endregion
//#region node_modules/dom-helpers/esm/hasClass.js
/**
* Checks if a given element has a CSS class.
* 
* @param element the element
* @param className the CSS class name
*/
function hasClass(element, className) {
	if (element.classList) return !!className && element.classList.contains(className);
	return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
//#endregion
//#region node_modules/dom-helpers/esm/addClass.js
/**
* Adds a CSS class to a given element.
* 
* @param element the element
* @param className the CSS class name
*/
function addClass(element, className) {
	if (element.classList) element.classList.add(className);
	else if (!hasClass(element, className)) if (typeof element.className === "string") element.className = element.className + " " + className;
	else element.setAttribute("class", (element.className && element.className.baseVal || "") + " " + className);
}
//#endregion
//#region node_modules/dom-helpers/esm/removeClass.js
function replaceClassName(origClass, classToRemove) {
	return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
/**
* Removes a CSS class from a given element.
* 
* @param element the element
* @param className the CSS class name
*/
function removeClass(element, className) {
	if (element.classList) element.classList.remove(className);
	else if (typeof element.className === "string") element.className = replaceClassName(element.className, className);
	else element.setAttribute("class", replaceClassName(element.className && element.className.baseVal || "", className));
}
//#endregion
//#region node_modules/react-bootstrap/esm/BootstrapModalManager.js
var Selector = {
	FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
	STICKY_CONTENT: ".sticky-top",
	NAVBAR_TOGGLER: ".navbar-toggler"
};
var BootstrapModalManager = class extends ModalManager {
	adjustAndStore(prop, element, adjust) {
		const actual = element.style[prop];
		element.dataset[prop] = actual;
		style(element, { [prop]: `${parseFloat(style(element, prop)) + adjust}px` });
	}
	restore(prop, element) {
		const value = element.dataset[prop];
		if (value !== void 0) {
			delete element.dataset[prop];
			style(element, { [prop]: value });
		}
	}
	setContainerStyle(containerState) {
		super.setContainerStyle(containerState);
		const container = this.getElement();
		addClass(container, "modal-open");
		if (!containerState.scrollBarWidth) return;
		const paddingProp = this.isRTL ? "paddingLeft" : "paddingRight";
		const marginProp = this.isRTL ? "marginLeft" : "marginRight";
		qsa(container, Selector.FIXED_CONTENT).forEach((el) => this.adjustAndStore(paddingProp, el, containerState.scrollBarWidth));
		qsa(container, Selector.STICKY_CONTENT).forEach((el) => this.adjustAndStore(marginProp, el, -containerState.scrollBarWidth));
		qsa(container, Selector.NAVBAR_TOGGLER).forEach((el) => this.adjustAndStore(marginProp, el, containerState.scrollBarWidth));
	}
	removeContainerStyle(containerState) {
		super.removeContainerStyle(containerState);
		const container = this.getElement();
		removeClass(container, "modal-open");
		const paddingProp = this.isRTL ? "paddingLeft" : "paddingRight";
		const marginProp = this.isRTL ? "marginLeft" : "marginRight";
		qsa(container, Selector.FIXED_CONTENT).forEach((el) => this.restore(paddingProp, el));
		qsa(container, Selector.STICKY_CONTENT).forEach((el) => this.restore(marginProp, el));
		qsa(container, Selector.NAVBAR_TOGGLER).forEach((el) => this.restore(marginProp, el));
	}
};
var sharedManager;
function getSharedManager(options) {
	if (!sharedManager) sharedManager = new BootstrapModalManager(options);
	return sharedManager;
}
//#endregion
//#region node_modules/react-bootstrap/esm/Offcanvas.js
function DialogTransition(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OffcanvasToggling, { ...props });
}
function BackdropTransition(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fade, { ...props });
}
var Offcanvas = /* @__PURE__ */ import_react.forwardRef(({ bsPrefix, className, children, "aria-labelledby": ariaLabelledby, placement = "start", responsive, show = false, backdrop = true, keyboard = true, scroll = false, onEscapeKeyDown, onShow, onHide, container, autoFocus = true, enforceFocus = true, restoreFocus = true, restoreFocusOptions, onEntered, onExit, onExiting, onEnter, onEntering, onExited, backdropClassName, manager: propsManager, renderStaticNode = false, ...props }, ref) => {
	const modalManager = (0, import_react.useRef)();
	bsPrefix = useBootstrapPrefix(bsPrefix, "offcanvas");
	const [showOffcanvas, setShowOffcanvas] = (0, import_react.useState)(false);
	const handleHide = useEventCallback$1(onHide);
	const hideResponsiveOffcanvas = useBreakpoint(responsive || "xs", "up");
	(0, import_react.useEffect)(() => {
		setShowOffcanvas(responsive ? show && !hideResponsiveOffcanvas : show);
	}, [
		show,
		responsive,
		hideResponsiveOffcanvas
	]);
	const modalContext = (0, import_react.useMemo)(() => ({ onHide: handleHide }), [handleHide]);
	function getModalManager() {
		if (propsManager) return propsManager;
		if (scroll) {
			if (!modalManager.current) modalManager.current = new BootstrapModalManager({ handleContainerOverflow: false });
			return modalManager.current;
		}
		return getSharedManager();
	}
	const handleEnter = (node, ...args) => {
		if (node) node.style.visibility = "visible";
		onEnter?.(node, ...args);
	};
	const handleExited = (node, ...args) => {
		if (node) node.style.visibility = "";
		onExited?.(...args);
	};
	const renderBackdrop = (0, import_react.useCallback)((backdropProps) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		...backdropProps,
		className: (0, import_classnames.default)(`${bsPrefix}-backdrop`, backdropClassName)
	}), [backdropClassName, bsPrefix]);
	const renderDialog = (dialogProps) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		...dialogProps,
		...props,
		className: (0, import_classnames.default)(className, responsive ? `${bsPrefix}-${responsive}` : bsPrefix, `${bsPrefix}-${placement}`),
		"aria-labelledby": ariaLabelledby,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [!showOffcanvas && (responsive || renderStaticNode) && renderDialog({}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModalContext.Provider, {
		value: modalContext,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Modal_default, {
			show: showOffcanvas,
			ref,
			backdrop,
			container,
			keyboard,
			autoFocus,
			enforceFocus: enforceFocus && !scroll,
			restoreFocus,
			restoreFocusOptions,
			onEscapeKeyDown,
			onShow,
			onHide: handleHide,
			onEnter: handleEnter,
			onEntering,
			onEntered,
			onExit,
			onExiting,
			onExited: handleExited,
			manager: getModalManager(),
			transition: DialogTransition,
			backdropTransition: BackdropTransition,
			renderBackdrop,
			renderDialog
		})
	})] });
});
Offcanvas.displayName = "Offcanvas";
var Offcanvas_default = Object.assign(Offcanvas, {
	Body: OffcanvasBody,
	Header: OffcanvasHeader,
	Title: OffcanvasTitle
});
//#endregion
//#region node_modules/react-bootstrap/esm/NavbarOffcanvas.js
var NavbarOffcanvas = /* @__PURE__ */ import_react.forwardRef(({ onHide, ...props }, ref) => {
	const context$1 = (0, import_react.useContext)(context);
	const handleHide = useEventCallback$1(() => {
		context$1 == null || context$1.onToggle == null || context$1.onToggle();
		onHide?.();
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Offcanvas_default, {
		ref,
		show: !!(context$1 != null && context$1.expanded),
		...props,
		renderStaticNode: true,
		onHide: handleHide
	});
});
NavbarOffcanvas.displayName = "NavbarOffcanvas";
//#endregion
//#region node_modules/react-bootstrap/esm/NavbarText.js
var NavbarText = /* @__PURE__ */ import_react.forwardRef(({ className, bsPrefix, as: Component = "span", ...props }, ref) => {
	bsPrefix = useBootstrapPrefix(bsPrefix, "navbar-text");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		ref,
		className: (0, import_classnames.default)(className, bsPrefix),
		...props
	});
});
NavbarText.displayName = "NavbarText";
//#endregion
//#region node_modules/react-bootstrap/esm/Navbar.js
var Navbar = /* @__PURE__ */ import_react.forwardRef((props, ref) => {
	const { bsPrefix: initialBsPrefix, expand = true, variant = "light", bg, fixed, sticky, className, as: Component = "nav", expanded, onToggle, onSelect, collapseOnSelect = false, ...controlledProps } = useUncontrolled(props, { expanded: "onToggle" });
	const bsPrefix = useBootstrapPrefix(initialBsPrefix, "navbar");
	const handleCollapse = (0, import_react.useCallback)((...args) => {
		onSelect?.(...args);
		if (collapseOnSelect && expanded) onToggle?.(false);
	}, [
		onSelect,
		collapseOnSelect,
		expanded,
		onToggle
	]);
	if (controlledProps.role === void 0 && Component !== "nav") controlledProps.role = "navigation";
	let expandClass = `${bsPrefix}-expand`;
	if (typeof expand === "string") expandClass = `${expandClass}-${expand}`;
	const navbarContext = (0, import_react.useMemo)(() => ({
		onToggle: () => onToggle == null ? void 0 : onToggle(!expanded),
		bsPrefix,
		expanded: !!expanded,
		expand
	}), [
		bsPrefix,
		expanded,
		expand,
		onToggle
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(context.Provider, {
		value: navbarContext,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectableContext.Provider, {
			value: handleCollapse,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
				ref,
				...controlledProps,
				className: (0, import_classnames.default)(className, bsPrefix, expand && expandClass, variant && `${bsPrefix}-${variant}`, bg && `bg-${bg}`, sticky && `sticky-${sticky}`, fixed && `fixed-${fixed}`)
			})
		})
	});
});
Navbar.displayName = "Navbar";
var Navbar_default = Object.assign(Navbar, {
	Brand: NavbarBrand,
	Collapse: NavbarCollapse,
	Offcanvas: NavbarOffcanvas,
	Text: NavbarText,
	Toggle: NavbarToggle
});
//#endregion
export { NoopTransition as _, getSharedManager as a, NavbarCollapse as b, OffcanvasHeader as c, ModalContext as d, OffcanvasToggling as f, renderTransition as g, Modal_default as h, Offcanvas_default as i, AbstractModalHeader as l, Fade as m, NavbarText as n, hasClass as o, OffcanvasBody as p, NavbarOffcanvas as r, OffcanvasTitle as s, Navbar_default as t, CloseButton as u, useWaitForDOMRef as v, NavbarBrand as x, NavbarToggle as y };

//# sourceMappingURL=Navbar-B-Sbr79A.js.map
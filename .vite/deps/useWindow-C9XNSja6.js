import { r as __toESM, t as require_react } from "./react-BQupsjBO.js";
import { a as canUseDOM_default } from "./useMergedRefs-CRrOysGQ.js";
//#region node_modules/@restart/hooks/esm/useCommittedRef.js
var import_react = /* @__PURE__ */ __toESM(require_react());
/**
* Creates a `Ref` whose value is updated in an effect, ensuring the most recent
* value is the one rendered with. Generally only required for Concurrent mode usage
* where previous work in `render()` may be discarded before being used.
*
* This is safe to access in an event handler.
*
* @param value The `Ref` value
*/
function useCommittedRef(value) {
	const ref = (0, import_react.useRef)(value);
	(0, import_react.useEffect)(() => {
		ref.current = value;
	}, [value]);
	return ref;
}
//#endregion
//#region node_modules/@restart/hooks/esm/useEventCallback.js
function useEventCallback(fn) {
	const ref = useCommittedRef(fn);
	return (0, import_react.useCallback)(function(...args) {
		return ref.current && ref.current(...args);
	}, [ref]);
}
//#endregion
//#region node_modules/@restart/hooks/esm/useIsomorphicEffect.js
var isReactNative = typeof global !== "undefined" && global.navigator && global.navigator.product === "ReactNative";
/**
* Is `useLayoutEffect` in a DOM or React Native environment, otherwise resolves to useEffect
* Only useful to avoid the console warning.
*
* PREFER `useEffect` UNLESS YOU KNOW WHAT YOU ARE DOING.
*
* @category effects
*/
var useIsomorphicEffect_default = typeof document !== "undefined" || isReactNative ? import_react.useLayoutEffect : import_react.useEffect;
//#endregion
//#region node_modules/dom-helpers/esm/contains.js
/**
* Checks if an element contains another given element.
* 
* @param context the context element
* @param node the element to check
*/
function contains(context, node) {
	if (context.contains) return context.contains(node);
	if (context.compareDocumentPosition) return context === node || !!(context.compareDocumentPosition(node) & 16);
}
//#endregion
//#region node_modules/@restart/ui/esm/useWindow.js
var Context = /* @__PURE__ */ (0, import_react.createContext)(canUseDOM_default ? window : void 0);
Context.Provider;
/**
* The document "window" placed in React context. Helpful for determining
* SSR context, or when rendering into an iframe.
*
* @returns the current window
*/
function useWindow() {
	return (0, import_react.useContext)(Context);
}
//#endregion
export { useCommittedRef as a, useEventCallback as i, contains as n, useIsomorphicEffect_default as r, useWindow as t };

//# sourceMappingURL=useWindow-C9XNSja6.js.map
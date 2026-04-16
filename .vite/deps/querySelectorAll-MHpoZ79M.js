import { r as __toESM, t as require_react } from "./react-BQupsjBO.js";
//#region node_modules/@restart/ui/esm/SelectableContext.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var SelectableContext = /* @__PURE__ */ import_react.createContext(null);
var makeEventKey = (eventKey, href = null) => {
	if (eventKey != null) return String(eventKey);
	return href || null;
};
//#endregion
//#region node_modules/react-bootstrap/esm/NavbarContext.js
var context = /* @__PURE__ */ import_react.createContext(null);
context.displayName = "NavbarContext";
//#endregion
//#region node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMounted.js
/**
* Track whether a component is current mounted. Generally less preferable than
* properlly canceling effects so they don't run after a component is unmounted,
* but helpful in cases where that isn't feasible, such as a `Promise` resolution.
*
* @returns a function that returns the current isMounted state of the component
*
* ```ts
* const [data, setData] = useState(null)
* const isMounted = useMounted()
*
* useEffect(() => {
*   fetchdata().then((newData) => {
*      if (isMounted()) {
*        setData(newData);
*      }
*   })
* })
* ```
*/
function useMounted() {
	const mounted = (0, import_react.useRef)(true);
	const isMounted = (0, import_react.useRef)(() => mounted.current);
	(0, import_react.useEffect)(() => {
		mounted.current = true;
		return () => {
			mounted.current = false;
		};
	}, []);
	return isMounted.current;
}
//#endregion
//#region node_modules/@restart/ui/node_modules/@restart/hooks/esm/usePrevious.js
/**
* Store the last of some value. Tracked via a `Ref` only updating it
* after the component renders.
*
* Helpful if you need to compare a prop value to it's previous value during render.
*
* ```ts
* function Component(props) {
*   const lastProps = usePrevious(props)
*
*   if (lastProps.foo !== props.foo)
*     resetValueFromProps(props.foo)
* }
* ```
*
* @param value the value to track
*/
function usePrevious(value) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		ref.current = value;
	});
	return ref.current;
}
//#endregion
//#region node_modules/@restart/ui/node_modules/@restart/hooks/esm/useCommittedRef.js
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
//#region node_modules/@restart/ui/node_modules/@restart/hooks/esm/useEventCallback.js
function useEventCallback(fn) {
	const ref = useCommittedRef(fn);
	return (0, import_react.useCallback)(function(...args) {
		return ref.current && ref.current(...args);
	}, [ref]);
}
//#endregion
//#region node_modules/@restart/ui/esm/DataKey.js
var ATTRIBUTE_PREFIX = `data-rr-ui-`;
var PROPERTY_PREFIX = `rrUi`;
function dataAttr(property) {
	return `${ATTRIBUTE_PREFIX}${property}`;
}
function dataProp(property) {
	return `${PROPERTY_PREFIX}${property}`;
}
//#endregion
//#region node_modules/@restart/ui/node_modules/@restart/hooks/esm/useIsomorphicEffect.js
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
//#region node_modules/dom-helpers/esm/querySelectorAll.js
var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
/**
* Runs `querySelectorAll` on a given element.
* 
* @param element the element
* @param selector the selector
*/
function qsa(element, selector) {
	return toArray(element.querySelectorAll(selector));
}
//#endregion
export { useEventCallback as a, context as c, dataProp as i, SelectableContext as l, useIsomorphicEffect_default as n, usePrevious as o, dataAttr as r, useMounted as s, qsa as t, makeEventKey as u };

//# sourceMappingURL=querySelectorAll-MHpoZ79M.js.map
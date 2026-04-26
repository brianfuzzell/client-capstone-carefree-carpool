import { r as __toESM, t as require_react } from "./react-BQupsjBO.js";
//#region node_modules/dom-helpers/esm/ownerDocument.js
/**
* Returns the owner document of a given element.
* 
* @param node the element
*/
function ownerDocument(node) {
	return node && node.ownerDocument || document;
}
//#endregion
//#region node_modules/dom-helpers/esm/canUseDOM.js
var canUseDOM_default = !!(typeof window !== "undefined" && window.document && window.document.createElement);
//#endregion
//#region node_modules/dom-helpers/esm/addEventListener.js
var optionsSupported = false;
var onceSupported = false;
try {
	var options = {
		get passive() {
			return optionsSupported = true;
		},
		get once() {
			return onceSupported = optionsSupported = true;
		}
	};
	if (canUseDOM_default) {
		window.addEventListener("test", options, options);
		window.removeEventListener("test", options, true);
	}
} catch (e) {}
/**
* An `addEventListener` ponyfill, supports the `once` option
* 
* @param node the element
* @param eventName the event name
* @param handle the handler
* @param options event options
*/
function addEventListener(node, eventName, handler, options) {
	if (options && typeof options !== "boolean" && !onceSupported) {
		var once = options.once, capture = options.capture;
		var wrappedHandler = handler;
		if (!onceSupported && once) {
			wrappedHandler = handler.__once || function onceHandler(event) {
				this.removeEventListener(eventName, onceHandler, capture);
				handler.call(this, event);
			};
			handler.__once = wrappedHandler;
		}
		node.addEventListener(eventName, wrappedHandler, optionsSupported ? options : capture);
	}
	node.addEventListener(eventName, handler, options);
}
//#endregion
//#region node_modules/dom-helpers/esm/removeEventListener.js
/**
* A `removeEventListener` ponyfill
* 
* @param node the element
* @param eventName the event name
* @param handle the handler
* @param options event options
*/
function removeEventListener(node, eventName, handler, options) {
	var capture = options && typeof options !== "boolean" ? options.capture : options;
	node.removeEventListener(eventName, handler, capture);
	if (handler.__once) node.removeEventListener(eventName, handler.__once, capture);
}
//#endregion
//#region node_modules/dom-helpers/esm/listen.js
function listen(node, eventName, handler, options) {
	addEventListener(node, eventName, handler, options);
	return function() {
		removeEventListener(node, eventName, handler, options);
	};
}
//#endregion
//#region node_modules/@restart/hooks/esm/useMergedRefs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var toFnRef = (ref) => !ref || typeof ref === "function" ? ref : (value) => {
	ref.current = value;
};
function mergeRefs(refA, refB) {
	const a = toFnRef(refA);
	const b = toFnRef(refB);
	return (value) => {
		if (a) a(value);
		if (b) b(value);
	};
}
/**
* Create and returns a single callback ref composed from two other Refs.
*
* ```tsx
* const Button = React.forwardRef((props, ref) => {
*   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();
*   const mergedRef = useMergedRefs(ref, attachRef);
*
*   return <button ref={mergedRef} {...props}/>
* })
* ```
*
* @param refA A Callback or mutable Ref
* @param refB A Callback or mutable Ref
* @category refs
*/
function useMergedRefs(refA, refB) {
	return (0, import_react.useMemo)(() => mergeRefs(refA, refB), [refA, refB]);
}
//#endregion
export { canUseDOM_default as a, addEventListener as i, listen as n, ownerDocument as o, removeEventListener as r, useMergedRefs as t };

//# sourceMappingURL=useMergedRefs-DaOayWAv.js.map
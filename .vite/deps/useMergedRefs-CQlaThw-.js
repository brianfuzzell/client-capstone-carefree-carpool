import { r as __toESM, t as require_react } from "./react-BQupsjBO.js";
//#region node_modules/@restart/ui/node_modules/@restart/hooks/esm/useMergedRefs.js
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
export { useMergedRefs as t };

//# sourceMappingURL=useMergedRefs-CQlaThw-.js.map
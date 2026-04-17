import { r as __toESM, t as require_react } from "./react-BQupsjBO.js";
import { a as useBootstrapPrefix, c as require_classnames, i as useBootstrapMinBreakpoint, r as useBootstrapBreakpoints, s as require_jsx_runtime } from "./ThemeProvider-CVULedHS.js";
import { t as require_prop_types } from "./prop-types-CbnkJl4q.js";
import { t as require_warning } from "./warning-CHGTDZNz.js";
//#region node_modules/react-bootstrap/esm/Feedback.js
var import_classnames = /* @__PURE__ */ __toESM(require_classnames());
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_prop_types = /* @__PURE__ */ __toESM(require_prop_types());
var import_jsx_runtime = require_jsx_runtime();
var propTypes$1 = {
	type: import_prop_types.default.string,
	tooltip: import_prop_types.default.bool,
	as: import_prop_types.default.elementType
};
var Feedback = /* @__PURE__ */ import_react.forwardRef(({ as: Component = "div", className, type = "valid", tooltip = false, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
	...props,
	ref,
	className: (0, import_classnames.default)(className, `${type}-${tooltip ? "tooltip" : "feedback"}`)
}));
Feedback.displayName = "Feedback";
Feedback.propTypes = propTypes$1;
//#endregion
//#region node_modules/react-bootstrap/esm/FormContext.js
var FormContext = /* @__PURE__ */ import_react.createContext({});
//#endregion
//#region node_modules/react-bootstrap/esm/FormCheckInput.js
var FormCheckInput = /* @__PURE__ */ import_react.forwardRef(({ id, bsPrefix, className, type = "checkbox", isValid = false, isInvalid = false, as: Component = "input", ...props }, ref) => {
	const { controlId } = (0, import_react.useContext)(FormContext);
	bsPrefix = useBootstrapPrefix(bsPrefix, "form-check-input");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		type,
		id: id || controlId,
		className: (0, import_classnames.default)(className, bsPrefix, isValid && "is-valid", isInvalid && "is-invalid")
	});
});
FormCheckInput.displayName = "FormCheckInput";
//#endregion
//#region node_modules/react-bootstrap/esm/FormCheckLabel.js
var FormCheckLabel = /* @__PURE__ */ import_react.forwardRef(({ bsPrefix, className, htmlFor, ...props }, ref) => {
	const { controlId } = (0, import_react.useContext)(FormContext);
	bsPrefix = useBootstrapPrefix(bsPrefix, "form-check-label");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		...props,
		ref,
		htmlFor: htmlFor || controlId,
		className: (0, import_classnames.default)(className, bsPrefix)
	});
});
FormCheckLabel.displayName = "FormCheckLabel";
//#endregion
//#region node_modules/react-bootstrap/esm/ElementChildren.js
/**
* Iterates through children that are typically specified as `props.children`,
* but only maps over children that are "valid elements".
*
* The mapFunction provided index will be normalised to the components mapped,
* so an invalid component would not increase the index.
*
*/
function map(children, func) {
	let index = 0;
	return import_react.Children.map(children, (child) => /* @__PURE__ */ import_react.isValidElement(child) ? func(child, index++) : child);
}
/**
* Iterates through children that are "valid elements".
*
* The provided forEachFunc(child, index) will be called for each
* leaf child with the index reflecting the position relative to "valid components".
*/
function forEach(children, func) {
	let index = 0;
	import_react.Children.forEach(children, (child) => {
		if (/* @__PURE__ */ import_react.isValidElement(child)) func(child, index++);
	});
}
/**
* Finds whether a component's `children` prop includes a React element of the
* specified type.
*/
function hasChildOfType(children, type) {
	return import_react.Children.toArray(children).some((child) => /* @__PURE__ */ import_react.isValidElement(child) && child.type === type);
}
//#endregion
//#region node_modules/react-bootstrap/esm/FormCheck.js
var FormCheck = /* @__PURE__ */ import_react.forwardRef(({ id, bsPrefix, bsSwitchPrefix, inline = false, reverse = false, disabled = false, isValid = false, isInvalid = false, feedbackTooltip = false, feedback, feedbackType, className, style, title = "", type = "checkbox", label, children, as = "input", ...props }, ref) => {
	bsPrefix = useBootstrapPrefix(bsPrefix, "form-check");
	bsSwitchPrefix = useBootstrapPrefix(bsSwitchPrefix, "form-switch");
	const { controlId } = (0, import_react.useContext)(FormContext);
	const innerFormContext = (0, import_react.useMemo)(() => ({ controlId: id || controlId }), [controlId, id]);
	const hasLabel = !children && label != null && label !== false || hasChildOfType(children, FormCheckLabel);
	const input = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormCheckInput, {
		...props,
		type: type === "switch" ? "checkbox" : type,
		ref,
		isValid,
		isInvalid,
		disabled,
		as
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormContext.Provider, {
		value: innerFormContext,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			style,
			className: (0, import_classnames.default)(className, hasLabel && bsPrefix, inline && `${bsPrefix}-inline`, reverse && `${bsPrefix}-reverse`, type === "switch" && bsSwitchPrefix),
			children: children || /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				input,
				hasLabel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormCheckLabel, {
					title,
					children: label
				}),
				feedback && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feedback, {
					type: feedbackType,
					tooltip: feedbackTooltip,
					children: feedback
				})
			] })
		})
	});
});
FormCheck.displayName = "FormCheck";
var FormCheck_default = Object.assign(FormCheck, {
	Input: FormCheckInput,
	Label: FormCheckLabel
});
//#endregion
//#region node_modules/react-bootstrap/esm/FormControl.js
var import_warning = /* @__PURE__ */ __toESM(require_warning());
var FormControl = /* @__PURE__ */ import_react.forwardRef(({ bsPrefix, type, size, htmlSize, id, className, isValid = false, isInvalid = false, plaintext, readOnly, as: Component = "input", ...props }, ref) => {
	const { controlId } = (0, import_react.useContext)(FormContext);
	bsPrefix = useBootstrapPrefix(bsPrefix, "form-control");
	(0, import_warning.default)(controlId == null || !id, "`controlId` is ignored on `<FormControl>` when `id` is specified.");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		type,
		size: htmlSize,
		ref,
		readOnly,
		id: id || controlId,
		className: (0, import_classnames.default)(className, plaintext ? `${bsPrefix}-plaintext` : bsPrefix, size && `${bsPrefix}-${size}`, type === "color" && `${bsPrefix}-color`, isValid && "is-valid", isInvalid && "is-invalid")
	});
});
FormControl.displayName = "FormControl";
var FormControl_default = Object.assign(FormControl, { Feedback });
//#endregion
//#region node_modules/react-bootstrap/esm/FormFloating.js
var FormFloating = /* @__PURE__ */ import_react.forwardRef(({ className, bsPrefix, as: Component = "div", ...props }, ref) => {
	bsPrefix = useBootstrapPrefix(bsPrefix, "form-floating");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		ref,
		className: (0, import_classnames.default)(className, bsPrefix),
		...props
	});
});
FormFloating.displayName = "FormFloating";
//#endregion
//#region node_modules/react-bootstrap/esm/FormGroup.js
var FormGroup = /* @__PURE__ */ import_react.forwardRef(({ controlId, as: Component = "div", ...props }, ref) => {
	const context = (0, import_react.useMemo)(() => ({ controlId }), [controlId]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormContext.Provider, {
		value: context,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
			...props,
			ref
		})
	});
});
FormGroup.displayName = "FormGroup";
//#endregion
//#region node_modules/react-bootstrap/esm/Col.js
function useCol({ as, bsPrefix, className, ...props }) {
	bsPrefix = useBootstrapPrefix(bsPrefix, "col");
	const breakpoints = useBootstrapBreakpoints();
	const minBreakpoint = useBootstrapMinBreakpoint();
	const spans = [];
	const classes = [];
	breakpoints.forEach((brkPoint) => {
		const propValue = props[brkPoint];
		delete props[brkPoint];
		let span;
		let offset;
		let order;
		if (typeof propValue === "object" && propValue != null) ({span, offset, order} = propValue);
		else span = propValue;
		const infix = brkPoint !== minBreakpoint ? `-${brkPoint}` : "";
		if (span) spans.push(span === true ? `${bsPrefix}${infix}` : `${bsPrefix}${infix}-${span}`);
		if (order != null) classes.push(`order${infix}-${order}`);
		if (offset != null) classes.push(`offset${infix}-${offset}`);
	});
	return [{
		...props,
		className: (0, import_classnames.default)(className, ...spans, ...classes)
	}, {
		as,
		bsPrefix,
		spans
	}];
}
var Col = /* @__PURE__ */ import_react.forwardRef((props, ref) => {
	const [{ className, ...colProps }, { as: Component = "div", bsPrefix, spans }] = useCol(props);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...colProps,
		ref,
		className: (0, import_classnames.default)(className, !spans.length && bsPrefix)
	});
});
Col.displayName = "Col";
//#endregion
//#region node_modules/react-bootstrap/esm/FormLabel.js
var FormLabel = /* @__PURE__ */ import_react.forwardRef(({ as: Component = "label", bsPrefix, column = false, visuallyHidden = false, className, htmlFor, ...props }, ref) => {
	const { controlId } = (0, import_react.useContext)(FormContext);
	bsPrefix = useBootstrapPrefix(bsPrefix, "form-label");
	let columnClass = "col-form-label";
	if (typeof column === "string") columnClass = `${columnClass} ${columnClass}-${column}`;
	const classes = (0, import_classnames.default)(className, bsPrefix, visuallyHidden && "visually-hidden", column && columnClass);
	(0, import_warning.default)(controlId == null || !htmlFor, "`controlId` is ignored on `<FormLabel>` when `htmlFor` is specified.");
	htmlFor = htmlFor || controlId;
	if (column) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Col, {
		ref,
		as: "label",
		className: classes,
		htmlFor,
		...props
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		ref,
		className: classes,
		htmlFor,
		...props
	});
});
FormLabel.displayName = "FormLabel";
//#endregion
//#region node_modules/react-bootstrap/esm/FormRange.js
var FormRange = /* @__PURE__ */ import_react.forwardRef(({ bsPrefix, className, id, ...props }, ref) => {
	const { controlId } = (0, import_react.useContext)(FormContext);
	bsPrefix = useBootstrapPrefix(bsPrefix, "form-range");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		...props,
		type: "range",
		ref,
		className: (0, import_classnames.default)(className, bsPrefix),
		id: id || controlId
	});
});
FormRange.displayName = "FormRange";
//#endregion
//#region node_modules/react-bootstrap/esm/FormSelect.js
var FormSelect = /* @__PURE__ */ import_react.forwardRef(({ bsPrefix, size, htmlSize, className, isValid = false, isInvalid = false, id, ...props }, ref) => {
	const { controlId } = (0, import_react.useContext)(FormContext);
	bsPrefix = useBootstrapPrefix(bsPrefix, "form-select");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		...props,
		size: htmlSize,
		ref,
		className: (0, import_classnames.default)(className, bsPrefix, size && `${bsPrefix}-${size}`, isValid && `is-valid`, isInvalid && `is-invalid`),
		id: id || controlId
	});
});
FormSelect.displayName = "FormSelect";
//#endregion
//#region node_modules/react-bootstrap/esm/FormText.js
var FormText = /* @__PURE__ */ import_react.forwardRef(({ bsPrefix, className, as: Component = "small", muted, ...props }, ref) => {
	bsPrefix = useBootstrapPrefix(bsPrefix, "form-text");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		...props,
		ref,
		className: (0, import_classnames.default)(className, bsPrefix, muted && "text-muted")
	});
});
FormText.displayName = "FormText";
//#endregion
//#region node_modules/react-bootstrap/esm/Switch.js
var Switch = /* @__PURE__ */ import_react.forwardRef((props, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormCheck_default, {
	...props,
	ref,
	type: "switch"
}));
Switch.displayName = "Switch";
var Switch_default = Object.assign(Switch, {
	Input: FormCheck_default.Input,
	Label: FormCheck_default.Label
});
//#endregion
//#region node_modules/react-bootstrap/esm/FloatingLabel.js
var FloatingLabel = /* @__PURE__ */ import_react.forwardRef(({ bsPrefix, className, children, controlId, label, ...props }, ref) => {
	bsPrefix = useBootstrapPrefix(bsPrefix, "form-floating");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormGroup, {
		ref,
		className: (0, import_classnames.default)(className, bsPrefix),
		controlId,
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			htmlFor: controlId,
			children: label
		})]
	});
});
FloatingLabel.displayName = "FloatingLabel";
//#endregion
//#region node_modules/react-bootstrap/esm/Form.js
var propTypes = {
	_ref: import_prop_types.default.any,
	validated: import_prop_types.default.bool,
	as: import_prop_types.default.elementType
};
var Form = /* @__PURE__ */ import_react.forwardRef(({ className, validated, as: Component = "form", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
	...props,
	ref,
	className: (0, import_classnames.default)(className, validated && "was-validated")
}));
Form.displayName = "Form";
Form.propTypes = propTypes;
var Form_default = Object.assign(Form, {
	Group: FormGroup,
	Control: FormControl_default,
	Floating: FormFloating,
	Check: FormCheck_default,
	Switch: Switch_default,
	Label: FormLabel,
	Text: FormText,
	Range: FormRange,
	Select: FormSelect,
	FloatingLabel
});
//#endregion
export { FormLabel as a, FormGroup as c, FormCheck_default as d, forEach as f, FormSelect as i, FormFloating as l, FormCheckInput as m, FloatingLabel as n, Col as o, map as p, FormText as r, useCol as s, Form_default as t, FormControl_default as u };

//# sourceMappingURL=Form-7fEtsVYM.js.map
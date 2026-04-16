import { r as __toESM, t as require_react } from "./react-BQupsjBO.js";
import { a as useBootstrapPrefix, c as require_classnames, s as require_jsx_runtime } from "./ThemeProvider-CVULedHS.js";
import { n as useUncontrolled } from "./esm-Ci1PRbhB.js";
import { t as Collapse } from "./Collapse-Cj8uXe83.js";
//#region node_modules/react-bootstrap/esm/AccordionContext.js
var import_classnames = /* @__PURE__ */ __toESM(require_classnames());
var import_react = /* @__PURE__ */ __toESM(require_react());
function isAccordionItemSelected(activeEventKey, eventKey) {
	return Array.isArray(activeEventKey) ? activeEventKey.includes(eventKey) : activeEventKey === eventKey;
}
var context$1 = /* @__PURE__ */ import_react.createContext({});
context$1.displayName = "AccordionContext";
//#endregion
//#region node_modules/react-bootstrap/esm/AccordionCollapse.js
var import_jsx_runtime = require_jsx_runtime();
/**
* This component accepts all of [`Collapse`'s props](/docs/utilities/transitions#collapse-1).
*/
var AccordionCollapse = /* @__PURE__ */ import_react.forwardRef(({ as: Component = "div", bsPrefix, className, children, eventKey, ...props }, ref) => {
	const { activeEventKey } = (0, import_react.useContext)(context$1);
	bsPrefix = useBootstrapPrefix(bsPrefix, "accordion-collapse");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collapse, {
		ref,
		in: isAccordionItemSelected(activeEventKey, eventKey),
		...props,
		className: (0, import_classnames.default)(className, bsPrefix),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, { children: import_react.Children.only(children) })
	});
});
AccordionCollapse.displayName = "AccordionCollapse";
//#endregion
//#region node_modules/react-bootstrap/esm/AccordionItemContext.js
var context = /* @__PURE__ */ import_react.createContext({ eventKey: "" });
context.displayName = "AccordionItemContext";
//#endregion
//#region node_modules/react-bootstrap/esm/AccordionBody.js
var AccordionBody = /* @__PURE__ */ import_react.forwardRef(({ as: Component = "div", bsPrefix, className, onEnter, onEntering, onEntered, onExit, onExiting, onExited, ...props }, ref) => {
	bsPrefix = useBootstrapPrefix(bsPrefix, "accordion-body");
	const { eventKey } = (0, import_react.useContext)(context);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionCollapse, {
		eventKey,
		onEnter,
		onEntering,
		onEntered,
		onExit,
		onExiting,
		onExited,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
			ref,
			...props,
			className: (0, import_classnames.default)(className, bsPrefix)
		})
	});
});
AccordionBody.displayName = "AccordionBody";
//#endregion
//#region node_modules/react-bootstrap/esm/AccordionButton.js
function useAccordionButton(eventKey, onClick) {
	const { activeEventKey, onSelect, alwaysOpen } = (0, import_react.useContext)(context$1);
	return (e) => {
		let eventKeyPassed = eventKey === activeEventKey ? null : eventKey;
		if (alwaysOpen) if (Array.isArray(activeEventKey)) if (activeEventKey.includes(eventKey)) eventKeyPassed = activeEventKey.filter((k) => k !== eventKey);
		else eventKeyPassed = [...activeEventKey, eventKey];
		else eventKeyPassed = [eventKey];
		onSelect?.(eventKeyPassed, e);
		onClick?.(e);
	};
}
var AccordionButton = /* @__PURE__ */ import_react.forwardRef(({ as: Component = "button", bsPrefix, className, onClick, ...props }, ref) => {
	bsPrefix = useBootstrapPrefix(bsPrefix, "accordion-button");
	const { eventKey } = (0, import_react.useContext)(context);
	const accordionOnClick = useAccordionButton(eventKey, onClick);
	const { activeEventKey } = (0, import_react.useContext)(context$1);
	if (Component === "button") props.type = "button";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		ref,
		onClick: accordionOnClick,
		...props,
		"aria-expanded": Array.isArray(activeEventKey) ? activeEventKey.includes(eventKey) : eventKey === activeEventKey,
		className: (0, import_classnames.default)(className, bsPrefix, !isAccordionItemSelected(activeEventKey, eventKey) && "collapsed")
	});
});
AccordionButton.displayName = "AccordionButton";
//#endregion
//#region node_modules/react-bootstrap/esm/AccordionHeader.js
var AccordionHeader = /* @__PURE__ */ import_react.forwardRef(({ as: Component = "h2", "aria-controls": ariaControls, bsPrefix, className, children, onClick, ...props }, ref) => {
	bsPrefix = useBootstrapPrefix(bsPrefix, "accordion-header");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
		ref,
		...props,
		className: (0, import_classnames.default)(className, bsPrefix),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionButton, {
			onClick,
			"aria-controls": ariaControls,
			children
		})
	});
});
AccordionHeader.displayName = "AccordionHeader";
//#endregion
//#region node_modules/react-bootstrap/esm/AccordionItem.js
var AccordionItem = /* @__PURE__ */ import_react.forwardRef(({ as: Component = "div", bsPrefix, className, eventKey, ...props }, ref) => {
	bsPrefix = useBootstrapPrefix(bsPrefix, "accordion-item");
	const contextValue = (0, import_react.useMemo)(() => ({ eventKey }), [eventKey]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(context.Provider, {
		value: contextValue,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
			ref,
			...props,
			className: (0, import_classnames.default)(className, bsPrefix)
		})
	});
});
AccordionItem.displayName = "AccordionItem";
//#endregion
//#region node_modules/react-bootstrap/esm/Accordion.js
var Accordion = /* @__PURE__ */ import_react.forwardRef((props, ref) => {
	const { as: Component = "div", activeKey, bsPrefix, className, onSelect, flush, alwaysOpen, ...controlledProps } = useUncontrolled(props, { activeKey: "onSelect" });
	const prefix = useBootstrapPrefix(bsPrefix, "accordion");
	const contextValue = (0, import_react.useMemo)(() => ({
		activeEventKey: activeKey,
		onSelect,
		alwaysOpen
	}), [
		activeKey,
		onSelect,
		alwaysOpen
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(context$1.Provider, {
		value: contextValue,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
			ref,
			...controlledProps,
			className: (0, import_classnames.default)(className, prefix, flush && `${prefix}-flush`)
		})
	});
});
Accordion.displayName = "Accordion";
var Accordion_default = Object.assign(Accordion, {
	Button: AccordionButton,
	Collapse: AccordionCollapse,
	Item: AccordionItem,
	Header: AccordionHeader,
	Body: AccordionBody
});
//#endregion
export { useAccordionButton as a, context$1 as c, AccordionButton as i, AccordionItem as n, AccordionBody as o, AccordionHeader as r, AccordionCollapse as s, Accordion_default as t };

//# sourceMappingURL=Accordion-CLq7AmrO.js.map
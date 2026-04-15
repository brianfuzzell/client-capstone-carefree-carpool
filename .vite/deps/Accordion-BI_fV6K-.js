import { n as __commonJSMin, r as __toESM, t as require_react } from "./react-BQupsjBO.js";
import { t as require_react_dom } from "./react-dom-BacuyvIl.js";
//#region node_modules/classnames/index.js
var require_classnames = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
	*/
	(function() {
		"use strict";
		var hasOwn = {}.hasOwnProperty;
		function classNames() {
			var classes = "";
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (arg) classes = appendClass(classes, parseValue(arg));
			}
			return classes;
		}
		function parseValue(arg) {
			if (typeof arg === "string" || typeof arg === "number") return arg;
			if (typeof arg !== "object") return "";
			if (Array.isArray(arg)) return classNames.apply(null, arg);
			if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) return arg.toString();
			var classes = "";
			for (var key in arg) if (hasOwn.call(arg, key) && arg[key]) classes = appendClass(classes, key);
			return classes;
		}
		function appendClass(value, newClass) {
			if (!newClass) return value;
			if (value) return value + " " + newClass;
			return value + newClass;
		}
		if (typeof module !== "undefined" && module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else if (typeof define === "function" && typeof define.amd === "object" && define.amd) define("classnames", [], function() {
			return classNames;
		});
		else window.classNames = classNames;
	})();
}));
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/extends.js
var import_classnames = /* @__PURE__ */ __toESM(require_classnames());
var import_react = /* @__PURE__ */ __toESM(require_react());
function _extends() {
	return _extends = Object.assign ? Object.assign.bind() : function(n) {
		for (var e = 1; e < arguments.length; e++) {
			var t = arguments[e];
			for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
		}
		return n;
	}, _extends.apply(null, arguments);
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(r, e) {
	if (null == r) return {};
	var t = {};
	for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
		if (-1 !== e.indexOf(n)) continue;
		t[n] = r[n];
	}
	return t;
}
//#endregion
//#region node_modules/invariant/browser.js
/**
* Copyright (c) 2013-present, Facebook, Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_browser = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	/**
	* Use invariant() to assert state which your program assumes to be true.
	*
	* Provide sprintf-style format (only %s is supported) and arguments
	* to provide information about what broke and what you were
	* expecting.
	*
	* The invariant message will be stripped in production, but the invariant
	* will remain to ensure logic does not differ in production.
	*/
	var invariant = function(condition, format, a, b, c, d, e, f) {
		if (format === void 0) throw new Error("invariant requires an error message argument");
		if (!condition) {
			var error;
			if (format === void 0) error = /* @__PURE__ */ new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
			else {
				var args = [
					a,
					b,
					c,
					d,
					e,
					f
				];
				var argIndex = 0;
				error = new Error(format.replace(/%s/g, function() {
					return args[argIndex++];
				}));
				error.name = "Invariant Violation";
			}
			error.framesToPop = 1;
			throw error;
		}
	};
	module.exports = invariant;
}));
require_browser();
function defaultKey(key) {
	return "default" + key.charAt(0).toUpperCase() + key.substr(1);
}
//#endregion
//#region node_modules/uncontrollable/lib/esm/hook.js
function _toPropertyKey(arg) {
	var key = _toPrimitive(arg, "string");
	return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
	if (typeof input !== "object" || input === null) return input;
	var prim = input[Symbol.toPrimitive];
	if (prim !== void 0) {
		var res = prim.call(input, hint || "default");
		if (typeof res !== "object") return res;
		throw new TypeError("@@toPrimitive must return a primitive value.");
	}
	return (hint === "string" ? String : Number)(input);
}
function useUncontrolledProp(propValue, defaultValue, handler) {
	var wasPropRef = (0, import_react.useRef)(propValue !== void 0);
	var _useState = (0, import_react.useState)(defaultValue), stateValue = _useState[0], setState = _useState[1];
	var isProp = propValue !== void 0;
	var wasProp = wasPropRef.current;
	wasPropRef.current = isProp;
	/**
	* If a prop switches from controlled to Uncontrolled
	* reset its value to the defaultValue
	*/
	if (!isProp && wasProp && stateValue !== defaultValue) setState(defaultValue);
	return [isProp ? propValue : stateValue, (0, import_react.useCallback)(function(value) {
		for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) args[_key - 1] = arguments[_key];
		if (handler) handler.apply(void 0, [value].concat(args));
		setState(value);
	}, [handler])];
}
function useUncontrolled(props, config) {
	return Object.keys(config).reduce(function(result, fieldName) {
		var _extends2;
		var _ref = result, defaultValue = _ref[defaultKey(fieldName)], propsValue = _ref[fieldName], rest = _objectWithoutPropertiesLoose(_ref, [defaultKey(fieldName), fieldName].map(_toPropertyKey));
		var handlerName = config[fieldName];
		var _useUncontrolledProp = useUncontrolledProp(propsValue, defaultValue, props[handlerName]), value = _useUncontrolledProp[0], handler = _useUncontrolledProp[1];
		return _extends({}, rest, (_extends2 = {}, _extends2[fieldName] = value, _extends2[handlerName] = handler, _extends2));
	}, props);
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
	return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
		return t.__proto__ = e, t;
	}, _setPrototypeOf(t, e);
}
//#endregion
//#region node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(t, o) {
	t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}
//#endregion
//#region node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js
/**
* Copyright (c) 2013-present, Facebook, Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
function componentWillMount() {
	var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
	if (state !== null && state !== void 0) this.setState(state);
}
function componentWillReceiveProps(nextProps) {
	function updater(prevState) {
		var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
		return state !== null && state !== void 0 ? state : null;
	}
	this.setState(updater.bind(this));
}
function componentWillUpdate(nextProps, nextState) {
	try {
		var prevProps = this.props;
		var prevState = this.state;
		this.props = nextProps;
		this.state = nextState;
		this.__reactInternalSnapshotFlag = true;
		this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);
	} finally {
		this.props = prevProps;
		this.state = prevState;
	}
}
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;
//#endregion
//#region node_modules/react/cjs/react-jsx-runtime.development.js
/**
* @license React
* react-jsx-runtime.development.js
*
* Copyright (c) Meta Platforms, Inc. and affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_jsx_runtime_development = /* @__PURE__ */ __commonJSMin(((exports) => {
	(function() {
		function getComponentNameFromType(type) {
			if (null == type) return null;
			if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
			if ("string" === typeof type) return type;
			switch (type) {
				case REACT_FRAGMENT_TYPE: return "Fragment";
				case REACT_PROFILER_TYPE: return "Profiler";
				case REACT_STRICT_MODE_TYPE: return "StrictMode";
				case REACT_SUSPENSE_TYPE: return "Suspense";
				case REACT_SUSPENSE_LIST_TYPE: return "SuspenseList";
				case REACT_ACTIVITY_TYPE: return "Activity";
			}
			if ("object" === typeof type) switch ("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof) {
				case REACT_PORTAL_TYPE: return "Portal";
				case REACT_CONTEXT_TYPE: return type.displayName || "Context";
				case REACT_CONSUMER_TYPE: return (type._context.displayName || "Context") + ".Consumer";
				case REACT_FORWARD_REF_TYPE:
					var innerType = type.render;
					type = type.displayName;
					type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
					return type;
				case REACT_MEMO_TYPE: return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
				case REACT_LAZY_TYPE:
					innerType = type._payload;
					type = type._init;
					try {
						return getComponentNameFromType(type(innerType));
					} catch (x) {}
			}
			return null;
		}
		function testStringCoercion(value) {
			return "" + value;
		}
		function checkKeyStringCoercion(value) {
			try {
				testStringCoercion(value);
				var JSCompiler_inline_result = !1;
			} catch (e) {
				JSCompiler_inline_result = !0;
			}
			if (JSCompiler_inline_result) {
				JSCompiler_inline_result = console;
				var JSCompiler_temp_const = JSCompiler_inline_result.error;
				var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
				JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
				return testStringCoercion(value);
			}
		}
		function getTaskName(type) {
			if (type === REACT_FRAGMENT_TYPE) return "<>";
			if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
			try {
				var name = getComponentNameFromType(type);
				return name ? "<" + name + ">" : "<...>";
			} catch (x) {
				return "<...>";
			}
		}
		function getOwner() {
			var dispatcher = ReactSharedInternals.A;
			return null === dispatcher ? null : dispatcher.getOwner();
		}
		function UnknownOwner() {
			return Error("react-stack-top-frame");
		}
		function hasValidKey(config) {
			if (hasOwnProperty.call(config, "key")) {
				var getter = Object.getOwnPropertyDescriptor(config, "key").get;
				if (getter && getter.isReactWarning) return !1;
			}
			return void 0 !== config.key;
		}
		function defineKeyPropWarningGetter(props, displayName) {
			function warnAboutAccessingKey() {
				specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
			}
			warnAboutAccessingKey.isReactWarning = !0;
			Object.defineProperty(props, "key", {
				get: warnAboutAccessingKey,
				configurable: !0
			});
		}
		function elementRefGetterWithDeprecationWarning() {
			var componentName = getComponentNameFromType(this.type);
			didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
			componentName = this.props.ref;
			return void 0 !== componentName ? componentName : null;
		}
		function ReactElement(type, key, props, owner, debugStack, debugTask) {
			var refProp = props.ref;
			type = {
				$$typeof: REACT_ELEMENT_TYPE,
				type,
				key,
				props,
				_owner: owner
			};
			null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
				enumerable: !1,
				get: elementRefGetterWithDeprecationWarning
			}) : Object.defineProperty(type, "ref", {
				enumerable: !1,
				value: null
			});
			type._store = {};
			Object.defineProperty(type._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: 0
			});
			Object.defineProperty(type, "_debugInfo", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: null
			});
			Object.defineProperty(type, "_debugStack", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: debugStack
			});
			Object.defineProperty(type, "_debugTask", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: debugTask
			});
			Object.freeze && (Object.freeze(type.props), Object.freeze(type));
			return type;
		}
		function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
			var children = config.children;
			if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
				for (isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++) validateChildKeys(children[isStaticChildren]);
				Object.freeze && Object.freeze(children);
			} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
			else validateChildKeys(children);
			if (hasOwnProperty.call(config, "key")) {
				children = getComponentNameFromType(type);
				var keys = Object.keys(config).filter(function(k) {
					return "key" !== k;
				});
				isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
				didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
			}
			children = null;
			void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
			hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
			if ("key" in config) {
				maybeKey = {};
				for (var propName in config) "key" !== propName && (maybeKey[propName] = config[propName]);
			} else maybeKey = config;
			children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
			return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
		}
		function validateChildKeys(node) {
			isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
		}
		function isValidElement(object) {
			return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
		}
		var React = require_react(), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
			return null;
		};
		React = { react_stack_bottom_frame: function(callStackForError) {
			return callStackForError();
		} };
		var specialPropKeyWarningShown;
		var didWarnAboutElementRef = {};
		var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
		var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
		var didWarnAboutKeySpread = {};
		exports.Fragment = REACT_FRAGMENT_TYPE;
		exports.jsx = function(type, config, maybeKey) {
			var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
			return jsxDEVImpl(type, config, maybeKey, !1, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
		};
		exports.jsxs = function(type, config, maybeKey) {
			var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
			return jsxDEVImpl(type, config, maybeKey, !0, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
		};
	})();
}));
//#endregion
//#region node_modules/react/jsx-runtime.js
var require_jsx_runtime = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_jsx_runtime_development();
}));
//#endregion
//#region node_modules/react-bootstrap/esm/ThemeProvider.js
var import_jsx_runtime = require_jsx_runtime();
var DEFAULT_BREAKPOINTS = [
	"xxl",
	"xl",
	"lg",
	"md",
	"sm",
	"xs"
];
var ThemeContext = /* @__PURE__ */ import_react.createContext({
	prefixes: {},
	breakpoints: DEFAULT_BREAKPOINTS,
	minBreakpoint: "xs"
});
var { Consumer, Provider } = ThemeContext;
function ThemeProvider({ prefixes = {}, breakpoints = DEFAULT_BREAKPOINTS, minBreakpoint = "xs", dir, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Provider, {
		value: (0, import_react.useMemo)(() => ({
			prefixes: { ...prefixes },
			breakpoints,
			minBreakpoint,
			dir
		}), [
			prefixes,
			breakpoints,
			minBreakpoint,
			dir
		]),
		children
	});
}
function useBootstrapPrefix(prefix, defaultPrefix) {
	const { prefixes } = (0, import_react.useContext)(ThemeContext);
	return prefix || prefixes[defaultPrefix] || defaultPrefix;
}
function useBootstrapBreakpoints() {
	const { breakpoints } = (0, import_react.useContext)(ThemeContext);
	return breakpoints;
}
function useBootstrapMinBreakpoint() {
	const { minBreakpoint } = (0, import_react.useContext)(ThemeContext);
	return minBreakpoint;
}
function useIsRTL() {
	const { dir } = (0, import_react.useContext)(ThemeContext);
	return dir === "rtl";
}
//#endregion
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
//#region node_modules/dom-helpers/esm/ownerWindow.js
/**
* Returns the owner window of a given element.
* 
* @param node the element
*/
function ownerWindow(node) {
	var doc = ownerDocument(node);
	return doc && doc.defaultView || window;
}
//#endregion
//#region node_modules/dom-helpers/esm/getComputedStyle.js
/**
* Returns one or all computed style properties of an element.
* 
* @param node the element
* @param psuedoElement the style property
*/
function getComputedStyle(node, psuedoElement) {
	return ownerWindow(node).getComputedStyle(node, psuedoElement);
}
//#endregion
//#region node_modules/dom-helpers/esm/hyphenate.js
var rUpper = /([A-Z])/g;
function hyphenate(string) {
	return string.replace(rUpper, "-$1").toLowerCase();
}
//#endregion
//#region node_modules/dom-helpers/esm/hyphenateStyle.js
/**
* Copyright 2013-2014, Facebook, Inc.
* All rights reserved.
* https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
*/
var msPattern = /^ms-/;
function hyphenateStyleName(string) {
	return hyphenate(string).replace(msPattern, "-ms-");
}
//#endregion
//#region node_modules/dom-helpers/esm/isTransform.js
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function isTransform(value) {
	return !!(value && supportedTransforms.test(value));
}
//#endregion
//#region node_modules/dom-helpers/esm/css.js
function style(node, property) {
	var css = "";
	var transforms = "";
	if (typeof property === "string") return node.style.getPropertyValue(hyphenateStyleName(property)) || getComputedStyle(node).getPropertyValue(hyphenateStyleName(property));
	Object.keys(property).forEach(function(key) {
		var value = property[key];
		if (!value && value !== 0) node.style.removeProperty(hyphenateStyleName(key));
		else if (isTransform(key)) transforms += key + "(" + value + ") ";
		else css += hyphenateStyleName(key) + ": " + value + ";";
	});
	if (transforms) css += "transform: " + transforms + ";";
	node.style.cssText += ";" + css;
}
//#endregion
//#region node_modules/react-is/cjs/react-is.development.js
/** @license React v16.13.1
* react-is.development.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_react_is_development = /* @__PURE__ */ __commonJSMin(((exports) => {
	(function() {
		"use strict";
		var hasSymbol = typeof Symbol === "function" && Symbol.for;
		var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
		var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
		var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
		var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
		var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
		var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
		var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
		var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
		var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
		var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
		var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
		var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
		var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
		var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
		var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
		var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
		var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
		var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
		function isValidElementType(type) {
			return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
		}
		function typeOf(object) {
			if (typeof object === "object" && object !== null) {
				var $$typeof = object.$$typeof;
				switch ($$typeof) {
					case REACT_ELEMENT_TYPE:
						var type = object.type;
						switch (type) {
							case REACT_ASYNC_MODE_TYPE:
							case REACT_CONCURRENT_MODE_TYPE:
							case REACT_FRAGMENT_TYPE:
							case REACT_PROFILER_TYPE:
							case REACT_STRICT_MODE_TYPE:
							case REACT_SUSPENSE_TYPE: return type;
							default:
								var $$typeofType = type && type.$$typeof;
								switch ($$typeofType) {
									case REACT_CONTEXT_TYPE:
									case REACT_FORWARD_REF_TYPE:
									case REACT_LAZY_TYPE:
									case REACT_MEMO_TYPE:
									case REACT_PROVIDER_TYPE: return $$typeofType;
									default: return $$typeof;
								}
						}
					case REACT_PORTAL_TYPE: return $$typeof;
				}
			}
		}
		var AsyncMode = REACT_ASYNC_MODE_TYPE;
		var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
		var ContextConsumer = REACT_CONTEXT_TYPE;
		var ContextProvider = REACT_PROVIDER_TYPE;
		var Element = REACT_ELEMENT_TYPE;
		var ForwardRef = REACT_FORWARD_REF_TYPE;
		var Fragment = REACT_FRAGMENT_TYPE;
		var Lazy = REACT_LAZY_TYPE;
		var Memo = REACT_MEMO_TYPE;
		var Portal = REACT_PORTAL_TYPE;
		var Profiler = REACT_PROFILER_TYPE;
		var StrictMode = REACT_STRICT_MODE_TYPE;
		var Suspense = REACT_SUSPENSE_TYPE;
		var hasWarnedAboutDeprecatedIsAsyncMode = false;
		function isAsyncMode(object) {
			if (!hasWarnedAboutDeprecatedIsAsyncMode) {
				hasWarnedAboutDeprecatedIsAsyncMode = true;
				console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
			}
			return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
		}
		function isConcurrentMode(object) {
			return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
		}
		function isContextConsumer(object) {
			return typeOf(object) === REACT_CONTEXT_TYPE;
		}
		function isContextProvider(object) {
			return typeOf(object) === REACT_PROVIDER_TYPE;
		}
		function isElement(object) {
			return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
		}
		function isForwardRef(object) {
			return typeOf(object) === REACT_FORWARD_REF_TYPE;
		}
		function isFragment(object) {
			return typeOf(object) === REACT_FRAGMENT_TYPE;
		}
		function isLazy(object) {
			return typeOf(object) === REACT_LAZY_TYPE;
		}
		function isMemo(object) {
			return typeOf(object) === REACT_MEMO_TYPE;
		}
		function isPortal(object) {
			return typeOf(object) === REACT_PORTAL_TYPE;
		}
		function isProfiler(object) {
			return typeOf(object) === REACT_PROFILER_TYPE;
		}
		function isStrictMode(object) {
			return typeOf(object) === REACT_STRICT_MODE_TYPE;
		}
		function isSuspense(object) {
			return typeOf(object) === REACT_SUSPENSE_TYPE;
		}
		exports.AsyncMode = AsyncMode;
		exports.ConcurrentMode = ConcurrentMode;
		exports.ContextConsumer = ContextConsumer;
		exports.ContextProvider = ContextProvider;
		exports.Element = Element;
		exports.ForwardRef = ForwardRef;
		exports.Fragment = Fragment;
		exports.Lazy = Lazy;
		exports.Memo = Memo;
		exports.Portal = Portal;
		exports.Profiler = Profiler;
		exports.StrictMode = StrictMode;
		exports.Suspense = Suspense;
		exports.isAsyncMode = isAsyncMode;
		exports.isConcurrentMode = isConcurrentMode;
		exports.isContextConsumer = isContextConsumer;
		exports.isContextProvider = isContextProvider;
		exports.isElement = isElement;
		exports.isForwardRef = isForwardRef;
		exports.isFragment = isFragment;
		exports.isLazy = isLazy;
		exports.isMemo = isMemo;
		exports.isPortal = isPortal;
		exports.isProfiler = isProfiler;
		exports.isStrictMode = isStrictMode;
		exports.isSuspense = isSuspense;
		exports.isValidElementType = isValidElementType;
		exports.typeOf = typeOf;
	})();
}));
//#endregion
//#region node_modules/react-is/index.js
var require_react_is = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = require_react_is_development();
}));
//#endregion
//#region node_modules/object-assign/index.js
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var require_object_assign = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	function toObject(val) {
		if (val === null || val === void 0) throw new TypeError("Object.assign cannot be called with null or undefined");
		return Object(val);
	}
	function shouldUseNative() {
		try {
			if (!Object.assign) return false;
			var test1 = /* @__PURE__ */ new String("abc");
			test1[5] = "de";
			if (Object.getOwnPropertyNames(test1)[0] === "5") return false;
			var test2 = {};
			for (var i = 0; i < 10; i++) test2["_" + String.fromCharCode(i)] = i;
			if (Object.getOwnPropertyNames(test2).map(function(n) {
				return test2[n];
			}).join("") !== "0123456789") return false;
			var test3 = {};
			"abcdefghijklmnopqrst".split("").forEach(function(letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") return false;
			return true;
		} catch (err) {
			return false;
		}
	}
	module.exports = shouldUseNative() ? Object.assign : function(target, source) {
		var from;
		var to = toObject(target);
		var symbols;
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
			for (var key in from) if (hasOwnProperty.call(from, key)) to[key] = from[key];
			if (getOwnPropertySymbols) {
				symbols = getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) if (propIsEnumerable.call(from, symbols[i])) to[symbols[i]] = from[symbols[i]];
			}
		}
		return to;
	};
}));
//#endregion
//#region node_modules/prop-types/lib/ReactPropTypesSecret.js
/**
* Copyright (c) 2013-present, Facebook, Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_ReactPropTypesSecret = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
}));
//#endregion
//#region node_modules/prop-types/lib/has.js
var require_has = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
}));
//#endregion
//#region node_modules/prop-types/checkPropTypes.js
/**
* Copyright (c) 2013-present, Facebook, Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_checkPropTypes = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var printWarning = function() {};
	var ReactPropTypesSecret = require_ReactPropTypesSecret();
	var loggedTypeFailures = {};
	var has = require_has();
	printWarning = function(text) {
		var message = "Warning: " + text;
		if (typeof console !== "undefined") console.error(message);
		try {
			throw new Error(message);
		} catch (x) {}
	};
	/**
	* Assert that the values match with the type specs.
	* Error messages are memorized and will only be shown once.
	*
	* @param {object} typeSpecs Map of name to a ReactPropType
	* @param {object} values Runtime values that need to be type-checked
	* @param {string} location e.g. "prop", "context", "child context"
	* @param {string} componentName Name of the component for error messages.
	* @param {?Function} getStack Returns the component stack.
	* @private
	*/
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
		for (var typeSpecName in typeSpecs) if (has(typeSpecs, typeSpecName)) {
			var error;
			try {
				if (typeof typeSpecs[typeSpecName] !== "function") {
					var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
					err.name = "Invariant Violation";
					throw err;
				}
				error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
			} catch (ex) {
				error = ex;
			}
			if (error && !(error instanceof Error)) printWarning((componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).");
			if (error instanceof Error && !(error.message in loggedTypeFailures)) {
				loggedTypeFailures[error.message] = true;
				var stack = getStack ? getStack() : "";
				printWarning("Failed " + location + " type: " + error.message + (stack != null ? stack : ""));
			}
		}
	}
	/**
	* Resets warning cache when testing.
	*
	* @private
	*/
	checkPropTypes.resetWarningCache = function() {
		loggedTypeFailures = {};
	};
	module.exports = checkPropTypes;
}));
//#endregion
//#region node_modules/prop-types/factoryWithTypeCheckers.js
/**
* Copyright (c) 2013-present, Facebook, Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/
var require_factoryWithTypeCheckers = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var ReactIs = require_react_is();
	var assign = require_object_assign();
	var ReactPropTypesSecret = require_ReactPropTypesSecret();
	var has = require_has();
	var checkPropTypes = require_checkPropTypes();
	var printWarning = function() {};
	printWarning = function(text) {
		var message = "Warning: " + text;
		if (typeof console !== "undefined") console.error(message);
		try {
			throw new Error(message);
		} catch (x) {}
	};
	function emptyFunctionThatReturnsNull() {
		return null;
	}
	module.exports = function(isValidElement, throwOnDirectAccess) {
		var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
		var FAUX_ITERATOR_SYMBOL = "@@iterator";
		/**
		* Returns the iterator method function contained on the iterable object.
		*
		* Be sure to invoke the function with the iterable as context:
		*
		*     var iteratorFn = getIteratorFn(myIterable);
		*     if (iteratorFn) {
		*       var iterator = iteratorFn.call(myIterable);
		*       ...
		*     }
		*
		* @param {?object} maybeIterable
		* @return {?function}
		*/
		function getIteratorFn(maybeIterable) {
			var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
			if (typeof iteratorFn === "function") return iteratorFn;
		}
		/**
		* Collection of methods that allow declaration and validation of props that are
		* supplied to React components. Example usage:
		*
		*   var Props = require('ReactPropTypes');
		*   var MyArticle = React.createClass({
		*     propTypes: {
		*       // An optional string prop named "description".
		*       description: Props.string,
		*
		*       // A required enum prop named "category".
		*       category: Props.oneOf(['News','Photos']).isRequired,
		*
		*       // A prop named "dialog" that requires an instance of Dialog.
		*       dialog: Props.instanceOf(Dialog).isRequired
		*     },
		*     render: function() { ... }
		*   });
		*
		* A more formal specification of how these methods are used:
		*
		*   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
		*   decl := ReactPropTypes.{type}(.isRequired)?
		*
		* Each and every declaration produces a function with the same signature. This
		* allows the creation of custom validation functions. For example:
		*
		*  var MyLink = React.createClass({
		*    propTypes: {
		*      // An optional string or URI prop named "href".
		*      href: function(props, propName, componentName) {
		*        var propValue = props[propName];
		*        if (propValue != null && typeof propValue !== 'string' &&
		*            !(propValue instanceof URI)) {
		*          return new Error(
		*            'Expected a string or an URI for ' + propName + ' in ' +
		*            componentName
		*          );
		*        }
		*      }
		*    },
		*    render: function() {...}
		*  });
		*
		* @internal
		*/
		var ANONYMOUS = "<<anonymous>>";
		var ReactPropTypes = {
			array: createPrimitiveTypeChecker("array"),
			bigint: createPrimitiveTypeChecker("bigint"),
			bool: createPrimitiveTypeChecker("boolean"),
			func: createPrimitiveTypeChecker("function"),
			number: createPrimitiveTypeChecker("number"),
			object: createPrimitiveTypeChecker("object"),
			string: createPrimitiveTypeChecker("string"),
			symbol: createPrimitiveTypeChecker("symbol"),
			any: createAnyTypeChecker(),
			arrayOf: createArrayOfTypeChecker,
			element: createElementTypeChecker(),
			elementType: createElementTypeTypeChecker(),
			instanceOf: createInstanceTypeChecker,
			node: createNodeChecker(),
			objectOf: createObjectOfTypeChecker,
			oneOf: createEnumTypeChecker,
			oneOfType: createUnionTypeChecker,
			shape: createShapeTypeChecker,
			exact: createStrictShapeTypeChecker
		};
		/**
		* inlined Object.is polyfill to avoid requiring consumers ship their own
		* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
		*/
		function is(x, y) {
			if (x === y) return x !== 0 || 1 / x === 1 / y;
			else return x !== x && y !== y;
		}
		/**
		* We use an Error-like object for backward compatibility as people may call
		* PropTypes directly and inspect their output. However, we don't use real
		* Errors anymore. We don't inspect their stack anyway, and creating them
		* is prohibitively expensive if they are created too often, such as what
		* happens in oneOfType() for any type before the one that matched.
		*/
		function PropTypeError(message, data) {
			this.message = message;
			this.data = data && typeof data === "object" ? data : {};
			this.stack = "";
		}
		PropTypeError.prototype = Error.prototype;
		function createChainableTypeChecker(validate) {
			var manualPropTypeCallCache = {};
			var manualPropTypeWarningCount = 0;
			function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
				componentName = componentName || ANONYMOUS;
				propFullName = propFullName || propName;
				if (secret !== ReactPropTypesSecret) {
					if (throwOnDirectAccess) {
						var err = /* @__PURE__ */ new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
						err.name = "Invariant Violation";
						throw err;
					} else if (typeof console !== "undefined") {
						var cacheKey = componentName + ":" + propName;
						if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
							printWarning("You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.");
							manualPropTypeCallCache[cacheKey] = true;
							manualPropTypeWarningCount++;
						}
					}
				}
				if (props[propName] == null) {
					if (isRequired) {
						if (props[propName] === null) return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
						return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
					}
					return null;
				} else return validate(props, propName, componentName, location, propFullName);
			}
			var chainedCheckType = checkType.bind(null, false);
			chainedCheckType.isRequired = checkType.bind(null, true);
			return chainedCheckType;
		}
		function createPrimitiveTypeChecker(expectedType) {
			function validate(props, propName, componentName, location, propFullName, secret) {
				var propValue = props[propName];
				if (getPropType(propValue) !== expectedType) {
					var preciseType = getPreciseType(propValue);
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."), { expectedType });
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createAnyTypeChecker() {
			return createChainableTypeChecker(emptyFunctionThatReturnsNull);
		}
		function createArrayOfTypeChecker(typeChecker) {
			function validate(props, propName, componentName, location, propFullName) {
				if (typeof typeChecker !== "function") return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
				var propValue = props[propName];
				if (!Array.isArray(propValue)) {
					var propType = getPropType(propValue);
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
				}
				for (var i = 0; i < propValue.length; i++) {
					var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
					if (error instanceof Error) return error;
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createElementTypeChecker() {
			function validate(props, propName, componentName, location, propFullName) {
				var propValue = props[propName];
				if (!isValidElement(propValue)) {
					var propType = getPropType(propValue);
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createElementTypeTypeChecker() {
			function validate(props, propName, componentName, location, propFullName) {
				var propValue = props[propName];
				if (!ReactIs.isValidElementType(propValue)) {
					var propType = getPropType(propValue);
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createInstanceTypeChecker(expectedClass) {
			function validate(props, propName, componentName, location, propFullName) {
				if (!(props[propName] instanceof expectedClass)) {
					var expectedClassName = expectedClass.name || ANONYMOUS;
					var actualClassName = getClassName(props[propName]);
					return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createEnumTypeChecker(expectedValues) {
			if (!Array.isArray(expectedValues)) {
				if (arguments.length > 1) printWarning("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).");
				else printWarning("Invalid argument supplied to oneOf, expected an array.");
				return emptyFunctionThatReturnsNull;
			}
			function validate(props, propName, componentName, location, propFullName) {
				var propValue = props[propName];
				for (var i = 0; i < expectedValues.length; i++) if (is(propValue, expectedValues[i])) return null;
				var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
					if (getPreciseType(value) === "symbol") return String(value);
					return value;
				});
				return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
			}
			return createChainableTypeChecker(validate);
		}
		function createObjectOfTypeChecker(typeChecker) {
			function validate(props, propName, componentName, location, propFullName) {
				if (typeof typeChecker !== "function") return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
				var propValue = props[propName];
				var propType = getPropType(propValue);
				if (propType !== "object") return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
				for (var key in propValue) if (has(propValue, key)) {
					var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
					if (error instanceof Error) return error;
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createUnionTypeChecker(arrayOfTypeCheckers) {
			if (!Array.isArray(arrayOfTypeCheckers)) {
				printWarning("Invalid argument supplied to oneOfType, expected an instance of array.");
				return emptyFunctionThatReturnsNull;
			}
			for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
				var checker = arrayOfTypeCheckers[i];
				if (typeof checker !== "function") {
					printWarning("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + ".");
					return emptyFunctionThatReturnsNull;
				}
			}
			function validate(props, propName, componentName, location, propFullName) {
				var expectedTypes = [];
				for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
					var checker = arrayOfTypeCheckers[i];
					var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
					if (checkerResult == null) return null;
					if (checkerResult.data && has(checkerResult.data, "expectedType")) expectedTypes.push(checkerResult.data.expectedType);
				}
				var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
				return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
			}
			return createChainableTypeChecker(validate);
		}
		function createNodeChecker() {
			function validate(props, propName, componentName, location, propFullName) {
				if (!isNode(props[propName])) return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function invalidValidatorError(componentName, location, propFullName, key, type) {
			return new PropTypeError((componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`.");
		}
		function createShapeTypeChecker(shapeTypes) {
			function validate(props, propName, componentName, location, propFullName) {
				var propValue = props[propName];
				var propType = getPropType(propValue);
				if (propType !== "object") return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
				for (var key in shapeTypes) {
					var checker = shapeTypes[key];
					if (typeof checker !== "function") return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
					var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
					if (error) return error;
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function createStrictShapeTypeChecker(shapeTypes) {
			function validate(props, propName, componentName, location, propFullName) {
				var propValue = props[propName];
				var propType = getPropType(propValue);
				if (propType !== "object") return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
				for (var key in assign({}, props[propName], shapeTypes)) {
					var checker = shapeTypes[key];
					if (has(shapeTypes, key) && typeof checker !== "function") return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
					if (!checker) return new PropTypeError("Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  "));
					var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
					if (error) return error;
				}
				return null;
			}
			return createChainableTypeChecker(validate);
		}
		function isNode(propValue) {
			switch (typeof propValue) {
				case "number":
				case "string":
				case "undefined": return true;
				case "boolean": return !propValue;
				case "object":
					if (Array.isArray(propValue)) return propValue.every(isNode);
					if (propValue === null || isValidElement(propValue)) return true;
					var iteratorFn = getIteratorFn(propValue);
					if (iteratorFn) {
						var iterator = iteratorFn.call(propValue);
						var step;
						if (iteratorFn !== propValue.entries) {
							while (!(step = iterator.next()).done) if (!isNode(step.value)) return false;
						} else while (!(step = iterator.next()).done) {
							var entry = step.value;
							if (entry) {
								if (!isNode(entry[1])) return false;
							}
						}
					} else return false;
					return true;
				default: return false;
			}
		}
		function isSymbol(propType, propValue) {
			if (propType === "symbol") return true;
			if (!propValue) return false;
			if (propValue["@@toStringTag"] === "Symbol") return true;
			if (typeof Symbol === "function" && propValue instanceof Symbol) return true;
			return false;
		}
		function getPropType(propValue) {
			var propType = typeof propValue;
			if (Array.isArray(propValue)) return "array";
			if (propValue instanceof RegExp) return "object";
			if (isSymbol(propType, propValue)) return "symbol";
			return propType;
		}
		function getPreciseType(propValue) {
			if (typeof propValue === "undefined" || propValue === null) return "" + propValue;
			var propType = getPropType(propValue);
			if (propType === "object") {
				if (propValue instanceof Date) return "date";
				else if (propValue instanceof RegExp) return "regexp";
			}
			return propType;
		}
		function getPostfixForTypeWarning(value) {
			var type = getPreciseType(value);
			switch (type) {
				case "array":
				case "object": return "an " + type;
				case "boolean":
				case "date":
				case "regexp": return "a " + type;
				default: return type;
			}
		}
		function getClassName(propValue) {
			if (!propValue.constructor || !propValue.constructor.name) return ANONYMOUS;
			return propValue.constructor.name;
		}
		ReactPropTypes.checkPropTypes = checkPropTypes;
		ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
		ReactPropTypes.PropTypes = ReactPropTypes;
		return ReactPropTypes;
	};
}));
//#endregion
//#region node_modules/prop-types/index.js
var require_prop_types = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	var ReactIs = require_react_is();
	module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, true);
}));
//#endregion
//#region node_modules/react-transition-group/esm/config.js
var import_prop_types = /* @__PURE__ */ __toESM(require_prop_types());
var import_react_dom = /* @__PURE__ */ __toESM(require_react_dom());
var config_default = { disabled: false };
//#endregion
//#region node_modules/react-transition-group/esm/utils/PropTypes.js
var timeoutsShape = import_prop_types.default.oneOfType([import_prop_types.default.number, import_prop_types.default.shape({
	enter: import_prop_types.default.number,
	exit: import_prop_types.default.number,
	appear: import_prop_types.default.number
}).isRequired]);
import_prop_types.default.oneOfType([
	import_prop_types.default.string,
	import_prop_types.default.shape({
		enter: import_prop_types.default.string,
		exit: import_prop_types.default.string,
		active: import_prop_types.default.string
	}),
	import_prop_types.default.shape({
		enter: import_prop_types.default.string,
		enterDone: import_prop_types.default.string,
		enterActive: import_prop_types.default.string,
		exit: import_prop_types.default.string,
		exitDone: import_prop_types.default.string,
		exitActive: import_prop_types.default.string
	})
]);
//#endregion
//#region node_modules/react-transition-group/esm/TransitionGroupContext.js
var TransitionGroupContext_default = import_react.createContext(null);
//#endregion
//#region node_modules/react-transition-group/esm/utils/reflow.js
var forceReflow = function forceReflow(node) {
	return node.scrollTop;
};
//#endregion
//#region node_modules/react-transition-group/esm/Transition.js
var UNMOUNTED = "unmounted";
var EXITED = "exited";
var ENTERING = "entering";
var ENTERED = "entered";
var EXITING = "exiting";
/**
* The Transition component lets you describe a transition from one component
* state to another _over time_ with a simple declarative API. Most commonly
* it's used to animate the mounting and unmounting of a component, but can also
* be used to describe in-place transition states as well.
*
* ---
*
* **Note**: `Transition` is a platform-agnostic base component. If you're using
* transitions in CSS, you'll probably want to use
* [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
* instead. It inherits all the features of `Transition`, but contains
* additional features necessary to play nice with CSS transitions (hence the
* name of the component).
*
* ---
*
* By default the `Transition` component does not alter the behavior of the
* component it renders, it only tracks "enter" and "exit" states for the
* components. It's up to you to give meaning and effect to those states. For
* example we can add styles to a component when it enters or exits:
*
* ```jsx
* import { Transition } from 'react-transition-group';
*
* const duration = 300;
*
* const defaultStyle = {
*   transition: `opacity ${duration}ms ease-in-out`,
*   opacity: 0,
* }
*
* const transitionStyles = {
*   entering: { opacity: 1 },
*   entered:  { opacity: 1 },
*   exiting:  { opacity: 0 },
*   exited:  { opacity: 0 },
* };
*
* const Fade = ({ in: inProp }) => (
*   <Transition in={inProp} timeout={duration}>
*     {state => (
*       <div style={{
*         ...defaultStyle,
*         ...transitionStyles[state]
*       }}>
*         I'm a fade Transition!
*       </div>
*     )}
*   </Transition>
* );
* ```
*
* There are 4 main states a Transition can be in:
*  - `'entering'`
*  - `'entered'`
*  - `'exiting'`
*  - `'exited'`
*
* Transition state is toggled via the `in` prop. When `true` the component
* begins the "Enter" stage. During this stage, the component will shift from
* its current transition state, to `'entering'` for the duration of the
* transition and then to the `'entered'` stage once it's complete. Let's take
* the following example (we'll use the
* [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
*
* ```jsx
* function App() {
*   const [inProp, setInProp] = useState(false);
*   return (
*     <div>
*       <Transition in={inProp} timeout={500}>
*         {state => (
*           // ...
*         )}
*       </Transition>
*       <button onClick={() => setInProp(true)}>
*         Click to Enter
*       </button>
*     </div>
*   );
* }
* ```
*
* When the button is clicked the component will shift to the `'entering'` state
* and stay there for 500ms (the value of `timeout`) before it finally switches
* to `'entered'`.
*
* When `in` is `false` the same thing happens except the state moves from
* `'exiting'` to `'exited'`.
*/
var Transition = /* @__PURE__ */ function(_React$Component) {
	_inheritsLoose(Transition, _React$Component);
	function Transition(props, context) {
		var _this = _React$Component.call(this, props, context) || this;
		var parentGroup = context;
		var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
		var initialStatus;
		_this.appearStatus = null;
		if (props.in) if (appear) {
			initialStatus = EXITED;
			_this.appearStatus = ENTERING;
		} else initialStatus = ENTERED;
		else if (props.unmountOnExit || props.mountOnEnter) initialStatus = UNMOUNTED;
		else initialStatus = EXITED;
		_this.state = { status: initialStatus };
		_this.nextCallback = null;
		return _this;
	}
	Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
		if (_ref.in && prevState.status === "unmounted") return { status: EXITED };
		return null;
	};
	var _proto = Transition.prototype;
	_proto.componentDidMount = function componentDidMount() {
		this.updateStatus(true, this.appearStatus);
	};
	_proto.componentDidUpdate = function componentDidUpdate(prevProps) {
		var nextStatus = null;
		if (prevProps !== this.props) {
			var status = this.state.status;
			if (this.props.in) {
				if (status !== "entering" && status !== "entered") nextStatus = ENTERING;
			} else if (status === "entering" || status === "entered") nextStatus = EXITING;
		}
		this.updateStatus(false, nextStatus);
	};
	_proto.componentWillUnmount = function componentWillUnmount() {
		this.cancelNextCallback();
	};
	_proto.getTimeouts = function getTimeouts() {
		var timeout = this.props.timeout;
		var exit = enter = appear = timeout, enter, appear;
		if (timeout != null && typeof timeout !== "number") {
			exit = timeout.exit;
			enter = timeout.enter;
			appear = timeout.appear !== void 0 ? timeout.appear : enter;
		}
		return {
			exit,
			enter,
			appear
		};
	};
	_proto.updateStatus = function updateStatus(mounting, nextStatus) {
		if (mounting === void 0) mounting = false;
		if (nextStatus !== null) {
			this.cancelNextCallback();
			if (nextStatus === "entering") {
				if (this.props.unmountOnExit || this.props.mountOnEnter) {
					var node = this.props.nodeRef ? this.props.nodeRef.current : import_react_dom.default.findDOMNode(this);
					if (node) forceReflow(node);
				}
				this.performEnter(mounting);
			} else this.performExit();
		} else if (this.props.unmountOnExit && this.state.status === "exited") this.setState({ status: UNMOUNTED });
	};
	_proto.performEnter = function performEnter(mounting) {
		var _this2 = this;
		var enter = this.props.enter;
		var appearing = this.context ? this.context.isMounting : mounting;
		var _ref2 = this.props.nodeRef ? [appearing] : [import_react_dom.default.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
		var timeouts = this.getTimeouts();
		var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
		if (!mounting && !enter || config_default.disabled) {
			this.safeSetState({ status: ENTERED }, function() {
				_this2.props.onEntered(maybeNode);
			});
			return;
		}
		this.props.onEnter(maybeNode, maybeAppearing);
		this.safeSetState({ status: ENTERING }, function() {
			_this2.props.onEntering(maybeNode, maybeAppearing);
			_this2.onTransitionEnd(enterTimeout, function() {
				_this2.safeSetState({ status: ENTERED }, function() {
					_this2.props.onEntered(maybeNode, maybeAppearing);
				});
			});
		});
	};
	_proto.performExit = function performExit() {
		var _this3 = this;
		var exit = this.props.exit;
		var timeouts = this.getTimeouts();
		var maybeNode = this.props.nodeRef ? void 0 : import_react_dom.default.findDOMNode(this);
		if (!exit || config_default.disabled) {
			this.safeSetState({ status: EXITED }, function() {
				_this3.props.onExited(maybeNode);
			});
			return;
		}
		this.props.onExit(maybeNode);
		this.safeSetState({ status: EXITING }, function() {
			_this3.props.onExiting(maybeNode);
			_this3.onTransitionEnd(timeouts.exit, function() {
				_this3.safeSetState({ status: EXITED }, function() {
					_this3.props.onExited(maybeNode);
				});
			});
		});
	};
	_proto.cancelNextCallback = function cancelNextCallback() {
		if (this.nextCallback !== null) {
			this.nextCallback.cancel();
			this.nextCallback = null;
		}
	};
	_proto.safeSetState = function safeSetState(nextState, callback) {
		callback = this.setNextCallback(callback);
		this.setState(nextState, callback);
	};
	_proto.setNextCallback = function setNextCallback(callback) {
		var _this4 = this;
		var active = true;
		this.nextCallback = function(event) {
			if (active) {
				active = false;
				_this4.nextCallback = null;
				callback(event);
			}
		};
		this.nextCallback.cancel = function() {
			active = false;
		};
		return this.nextCallback;
	};
	_proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
		this.setNextCallback(handler);
		var node = this.props.nodeRef ? this.props.nodeRef.current : import_react_dom.default.findDOMNode(this);
		var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;
		if (!node || doesNotHaveTimeoutOrListener) {
			setTimeout(this.nextCallback, 0);
			return;
		}
		if (this.props.addEndListener) {
			var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
			this.props.addEndListener(maybeNode, maybeNextCallback);
		}
		if (timeout != null) setTimeout(this.nextCallback, timeout);
	};
	_proto.render = function render() {
		var status = this.state.status;
		if (status === "unmounted") return null;
		var _this$props = this.props, children = _this$props.children;
		_this$props.in;
		_this$props.mountOnEnter;
		_this$props.unmountOnExit;
		_this$props.appear;
		_this$props.enter;
		_this$props.exit;
		_this$props.timeout;
		_this$props.addEndListener;
		_this$props.onEnter;
		_this$props.onEntering;
		_this$props.onEntered;
		_this$props.onExit;
		_this$props.onExiting;
		_this$props.onExited;
		_this$props.nodeRef;
		var childProps = _objectWithoutPropertiesLoose(_this$props, [
			"children",
			"in",
			"mountOnEnter",
			"unmountOnExit",
			"appear",
			"enter",
			"exit",
			"timeout",
			"addEndListener",
			"onEnter",
			"onEntering",
			"onEntered",
			"onExit",
			"onExiting",
			"onExited",
			"nodeRef"
		]);
		return /* @__PURE__ */ import_react.createElement(TransitionGroupContext_default.Provider, { value: null }, typeof children === "function" ? children(status, childProps) : import_react.cloneElement(import_react.Children.only(children), childProps));
	};
	return Transition;
}(import_react.Component);
Transition.contextType = TransitionGroupContext_default;
Transition.propTypes = {
	nodeRef: import_prop_types.default.shape({ current: typeof Element === "undefined" ? import_prop_types.default.any : function(propValue, key, componentName, location, propFullName, secret) {
		var value = propValue[key];
		return import_prop_types.default.instanceOf(value && "ownerDocument" in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
	} }),
	children: import_prop_types.default.oneOfType([import_prop_types.default.func.isRequired, import_prop_types.default.element.isRequired]).isRequired,
	in: import_prop_types.default.bool,
	mountOnEnter: import_prop_types.default.bool,
	unmountOnExit: import_prop_types.default.bool,
	appear: import_prop_types.default.bool,
	enter: import_prop_types.default.bool,
	exit: import_prop_types.default.bool,
	timeout: function timeout(props) {
		var pt = timeoutsShape;
		if (!props.addEndListener) pt = pt.isRequired;
		for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) args[_key - 1] = arguments[_key];
		return pt.apply(void 0, [props].concat(args));
	},
	addEndListener: import_prop_types.default.func,
	onEnter: import_prop_types.default.func,
	onEntering: import_prop_types.default.func,
	onEntered: import_prop_types.default.func,
	onExit: import_prop_types.default.func,
	onExiting: import_prop_types.default.func,
	onExited: import_prop_types.default.func
};
function noop() {}
Transition.defaultProps = {
	in: false,
	mountOnEnter: false,
	unmountOnExit: false,
	appear: false,
	enter: true,
	exit: true,
	onEnter: noop,
	onEntering: noop,
	onEntered: noop,
	onExit: noop,
	onExiting: noop,
	onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
//#endregion
//#region node_modules/@restart/ui/esm/utils.js
function isEscKey(e) {
	return e.code === "Escape" || e.keyCode === 27;
}
function getReactVersion() {
	const parts = "19.2.5".split(".");
	return {
		major: +parts[0],
		minor: +parts[1],
		patch: +parts[2]
	};
}
function getChildRef(element) {
	if (!element || typeof element === "function") return null;
	const { major } = getReactVersion();
	return major >= 19 ? element.props.ref : element.ref;
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
//#region node_modules/dom-helpers/esm/triggerEvent.js
/**
* Triggers an event on a given element.
* 
* @param node the element
* @param eventName the event name to trigger
* @param bubbles whether the event should bubble up
* @param cancelable whether the event should be cancelable
*/
function triggerEvent(node, eventName, bubbles, cancelable) {
	if (bubbles === void 0) bubbles = false;
	if (cancelable === void 0) cancelable = true;
	if (node) {
		var event = document.createEvent("HTMLEvents");
		event.initEvent(eventName, bubbles, cancelable);
		node.dispatchEvent(event);
	}
}
//#endregion
//#region node_modules/dom-helpers/esm/transitionEnd.js
function parseDuration$1(node) {
	var str = style(node, "transitionDuration") || "";
	var mult = str.indexOf("ms") === -1 ? 1e3 : 1;
	return parseFloat(str) * mult;
}
function emulateTransitionEnd(element, duration, padding) {
	if (padding === void 0) padding = 5;
	var called = false;
	var handle = setTimeout(function() {
		if (!called) triggerEvent(element, "transitionend", true);
	}, duration + padding);
	var remove = listen(element, "transitionend", function() {
		called = true;
	}, { once: true });
	return function() {
		clearTimeout(handle);
		remove();
	};
}
function transitionEnd(element, handler, duration, padding) {
	if (duration == null) duration = parseDuration$1(element) || 0;
	var removeEmulate = emulateTransitionEnd(element, duration, padding);
	var remove = listen(element, "transitionend", handler);
	return function() {
		removeEmulate();
		remove();
	};
}
//#endregion
//#region node_modules/react-bootstrap/esm/transitionEndListener.js
function parseDuration(node, property) {
	const str = style(node, property) || "";
	const mult = str.indexOf("ms") === -1 ? 1e3 : 1;
	return parseFloat(str) * mult;
}
function transitionEndListener(element, handler) {
	const remove = transitionEnd(element, (e) => {
		if (e.target === element) {
			remove();
			handler(e);
		}
	}, parseDuration(element, "transitionDuration") + parseDuration(element, "transitionDelay"));
}
//#endregion
//#region node_modules/react-bootstrap/esm/createChainedFunction.js
/**
* Safe chained function
*
* Will only create a new function if needed,
* otherwise will pass back existing functions or null.
*
* @param {function} functions to chain
* @returns {function|null}
*/
function createChainedFunction(...funcs) {
	return funcs.filter((f) => f != null).reduce((acc, f) => {
		if (typeof f !== "function") throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
		if (acc === null) return f;
		return function chainedFunction(...args) {
			acc.apply(this, args);
			f.apply(this, args);
		};
	}, null);
}
//#endregion
//#region node_modules/react-bootstrap/esm/triggerBrowserReflow.js
function triggerBrowserReflow(node) {
	node.offsetHeight;
}
//#endregion
//#region node_modules/@restart/hooks/esm/useMergedRefs.js
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
//#region node_modules/react-bootstrap/esm/safeFindDOMNode.js
function safeFindDOMNode(componentOrElement) {
	if (componentOrElement && "setState" in componentOrElement) return import_react_dom.default.findDOMNode(componentOrElement);
	return componentOrElement != null ? componentOrElement : null;
}
//#endregion
//#region node_modules/react-bootstrap/esm/TransitionWrapper.js
var TransitionWrapper = /* @__PURE__ */ import_react.forwardRef(({ onEnter, onEntering, onEntered, onExit, onExiting, onExited, addEndListener, children, childRef, ...props }, ref) => {
	const nodeRef = (0, import_react.useRef)(null);
	const mergedRef = useMergedRefs(nodeRef, childRef);
	const attachRef = (r) => {
		mergedRef(safeFindDOMNode(r));
	};
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Transition, {
		ref,
		...props,
		onEnter: handleEnter,
		onEntered: handleEntered,
		onEntering: handleEntering,
		onExit: handleExit,
		onExited: handleExited,
		onExiting: handleExiting,
		addEndListener: handleAddEndListener,
		nodeRef,
		children: typeof children === "function" ? (status, innerProps) => children(status, {
			...innerProps,
			ref: attachRef
		}) : /* @__PURE__ */ import_react.cloneElement(children, { ref: attachRef })
	});
});
TransitionWrapper.displayName = "TransitionWrapper";
//#endregion
//#region node_modules/react-bootstrap/esm/Collapse.js
var MARGINS = {
	height: ["marginTop", "marginBottom"],
	width: ["marginLeft", "marginRight"]
};
function getDefaultDimensionValue(dimension, elem) {
	const value = elem[`offset${dimension[0].toUpperCase()}${dimension.slice(1)}`];
	const margins = MARGINS[dimension];
	return value + parseInt(style(elem, margins[0]), 10) + parseInt(style(elem, margins[1]), 10);
}
var collapseStyles = {
	[EXITED]: "collapse",
	[EXITING]: "collapsing",
	[ENTERING]: "collapsing",
	[ENTERED]: "collapse show"
};
var Collapse = /* @__PURE__ */ import_react.forwardRef(({ onEnter, onEntering, onEntered, onExit, onExiting, className, children, dimension = "height", in: inProp = false, timeout = 300, mountOnEnter = false, unmountOnExit = false, appear = false, getDimensionValue = getDefaultDimensionValue, ...props }, ref) => {
	const computedDimension = typeof dimension === "function" ? dimension() : dimension;
	const handleEnter = (0, import_react.useMemo)(() => createChainedFunction((elem) => {
		elem.style[computedDimension] = "0";
	}, onEnter), [computedDimension, onEnter]);
	const handleEntering = (0, import_react.useMemo)(() => createChainedFunction((elem) => {
		const scroll = `scroll${computedDimension[0].toUpperCase()}${computedDimension.slice(1)}`;
		elem.style[computedDimension] = `${elem[scroll]}px`;
	}, onEntering), [computedDimension, onEntering]);
	const handleEntered = (0, import_react.useMemo)(() => createChainedFunction((elem) => {
		elem.style[computedDimension] = null;
	}, onEntered), [computedDimension, onEntered]);
	const handleExit = (0, import_react.useMemo)(() => createChainedFunction((elem) => {
		elem.style[computedDimension] = `${getDimensionValue(computedDimension, elem)}px`;
		triggerBrowserReflow(elem);
	}, onExit), [
		onExit,
		getDimensionValue,
		computedDimension
	]);
	const handleExiting = (0, import_react.useMemo)(() => createChainedFunction((elem) => {
		elem.style[computedDimension] = null;
	}, onExiting), [computedDimension, onExiting]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransitionWrapper, {
		ref,
		addEndListener: transitionEndListener,
		...props,
		"aria-expanded": props.role ? inProp : null,
		onEnter: handleEnter,
		onEntering: handleEntering,
		onEntered: handleEntered,
		onExit: handleExit,
		onExiting: handleExiting,
		childRef: getChildRef(children),
		in: inProp,
		timeout,
		mountOnEnter,
		unmountOnExit,
		appear,
		children: (state, innerProps) => /* @__PURE__ */ import_react.cloneElement(children, {
			...innerProps,
			className: (0, import_classnames.default)(className, children.props.className, collapseStyles[state], computedDimension === "width" && "collapse-horizontal")
		})
	});
});
Collapse.displayName = "Collapse";
//#endregion
//#region node_modules/react-bootstrap/esm/AccordionContext.js
function isAccordionItemSelected(activeEventKey, eventKey) {
	return Array.isArray(activeEventKey) ? activeEventKey.includes(eventKey) : activeEventKey === eventKey;
}
var context$1 = /* @__PURE__ */ import_react.createContext({});
context$1.displayName = "AccordionContext";
//#endregion
//#region node_modules/react-bootstrap/esm/AccordionCollapse.js
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
export { ThemeProvider as A, ENTERED as C, style as D, require_prop_types as E, require_jsx_runtime as F, useUncontrolled as I, useUncontrolledProp as L, useBootstrapMinBreakpoint as M, useBootstrapPrefix as N, ownerDocument as O, useIsRTL as P, require_browser as R, isEscKey as S, EXITING as T, listen as _, useAccordionButton as a, canUseDOM_default as b, context$1 as c, safeFindDOMNode as d, useMergedRefs as f, transitionEnd as g, transitionEndListener as h, AccordionButton as i, useBootstrapBreakpoints as j, DEFAULT_BREAKPOINTS as k, Collapse as l, createChainedFunction as m, AccordionItem as n, AccordionBody as o, triggerBrowserReflow as p, AccordionHeader as r, AccordionCollapse as s, Accordion_default as t, TransitionWrapper as u, removeEventListener as v, ENTERING as w, getChildRef as x, addEventListener as y, require_classnames as z };

//# sourceMappingURL=Accordion-BI_fV6K-.js.map
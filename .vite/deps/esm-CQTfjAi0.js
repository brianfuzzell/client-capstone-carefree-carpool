import { n as __commonJSMin, r as __toESM, t as require_react } from "./react-BQupsjBO.js";
//#region node_modules/@babel/runtime/helpers/esm/extends.js
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
//#endregion
//#region node_modules/uncontrollable/lib/esm/utils.js
var import_react = /* @__PURE__ */ __toESM(require_react());
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
export { _objectWithoutPropertiesLoose as a, require_browser as i, useUncontrolled as n, useUncontrolledProp as r, _inheritsLoose as t };

//# sourceMappingURL=esm-CQTfjAi0.js.map
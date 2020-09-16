"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Collapsable = function Collapsable(_ref) {
  var isOpen = _ref.isOpen,
      minAnimationDuration = _ref.minAnimationDuration,
      maxAnimationDuration = _ref.maxAnimationDuration,
      speedDivider = _ref.speedDivider,
      easing = _ref.easing,
      children = _ref.children,
      keepChildrenOnClose = _ref.keepChildrenOnClose;
  var content = (0, _react.useRef)();

  var _useState = (0, _react.useState)({
    height: isOpen ? 'auto' : 0,
    speed: 0
  }),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var _useState3 = (0, _react.useState)(isOpen),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      keepChildren = _useState4[0],
      toggleChildren = _useState4[1];

  var handleClose = function handleClose() {
    if (!isOpen) {
      content.current.style.visibility = 'hidden';

      if (!keepChildrenOnClose) {
        // remove child
        toggleChildren(false);
      }
    }
  };

  (0, _react.useEffect)(function () {
    if (isOpen) {
      var contentHeight = content.current.scrollHeight;
      var time = contentHeight / speedDivider;
      var animation = time < minAnimationDuration ? minAnimationDuration : time > maxAnimationDuration ? maxAnimationDuration : time;
      content.current.style.visibility = 'visible';
      toggleChildren(true);
      setState(_objectSpread(_objectSpread({}, state), {}, {
        height: contentHeight,
        speed: animation
      }));
    } else {
      setState(_objectSpread(_objectSpread({}, state), {}, {
        height: 0
      }));
    }
  }, [isOpen, minAnimationDuration, maxAnimationDuration, speedDivider]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      overflow: 'hidden',
      height: state.height,
      transition: "height ".concat(state.speed, "s ").concat(easing)
    },
    onTransitionEnd: handleClose
  }, /*#__PURE__*/_react["default"].createElement("div", {
    ref: content,
    style: {
      overflow: 'auto'
    }
  }, keepChildren && children));
};

Collapsable.propTypes = {
  isOpen: _propTypes["default"].bool,
  minAnimationDuration: _propTypes["default"].number,
  maxAnimationDuration: _propTypes["default"].number,
  speedDivider: _propTypes["default"].number,
  easing: _propTypes["default"].string,
  keepChildrenOnClose: _propTypes["default"].bool
};
Collapsable.defaultProps = {
  isOpen: false,
  minAnimationDuration: 0.3,
  maxAnimationDuration: 1,
  speedDivider: 1000,
  easing: 'ease-in-out'
};
var _default = Collapsable;
exports["default"] = _default;
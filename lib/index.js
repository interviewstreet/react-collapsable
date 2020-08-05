"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Collapsible = function Collapsible(_ref) {
  var isOpen = _ref.isOpen,
      minAnimationDuration = _ref.minAnimationDuration,
      maxAnimationDuration = _ref.maxAnimationDuration,
      speedDivider = _ref.speedDivider,
      easing = _ref.easing,
      children = _ref.children,
      keepChildrenOnClose = _ref.keepChildrenOnClose,
      restProps = (0, _objectWithoutProperties2["default"])(_ref, ["isOpen", "minAnimationDuration", "maxAnimationDuration", "speedDivider", "easing", "children", "keepChildrenOnClose"]);
  var content = (0, _react.useRef)();

  var _useState = (0, _react.useState)({
    height: isOpen ? 'auto' : 0,
    speed: 0
  }),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1];

  var _useState3 = (0, _react.useState)(children),
      _useState4 = (0, _slicedToArray2["default"])(_useState3, 2),
      effectiveChildren = _useState4[0],
      setChildren = _useState4[1];

  var handleClose = function handleClose() {
    if (!isOpen) {
      content.current.style.visibility = 'hidden';

      if (!keepChildrenOnClose) {
        // remove child
        setChildren(null);
      }
    }
  };

  (0, _react.useEffect)(function () {
    if (isOpen) {
      var contentHeight = content.current.scrollHeight;
      var time = contentHeight / speedDivider;
      var animation = time < minAnimationDuration ? minAnimationDuration : time > maxAnimationDuration ? maxAnimationDuration : time;
      content.current.style.visibility = 'visible';
      setChildren(children);
      setState(Object.assign({}, state, {
        height: contentHeight,
        speed: animation
      }));
    } else {
      setState(Object.assign({}, state, {
        height: 0
      }));
    }
  }, [isOpen, minAnimationDuration, maxAnimationDuration, speedDivider, children, effectiveChildren]);
  return _react["default"].createElement("div", (0, _extends2["default"])({}, restProps, {
    style: {
      overflow: 'hidden',
      height: state.height,
      transition: "height ".concat(state.speed, "s ").concat(easing)
    },
    onTransitionEnd: handleClose
  }), _react["default"].createElement("div", {
    ref: content,
    style: {
      overflow: 'auto'
    }
  }, effectiveChildren));
};

Collapsible.propTypes = {
  isOpen: _propTypes["default"].bool,
  minAnimationDuration: _propTypes["default"].number,
  maxAnimationDuration: _propTypes["default"].number,
  speedDivider: _propTypes["default"].number,
  easing: _propTypes["default"].string,
  keepChildrenOnClose: _propTypes["default"].bool
};
Collapsible.defaultProps = {
  isOpen: false,
  minAnimationDuration: 0.3,
  maxAnimationDuration: 1,
  speedDivider: 1000,
  easing: 'ease-in-out'
};
var _default = Collapsible;
exports["default"] = _default;
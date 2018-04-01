'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require('babel-runtime/helpers/createClass');var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _reactNative = require('react-native');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var

Dot = function (_Component) {(0, _inherits3.default)(Dot, _Component);function Dot() {(0, _classCallCheck3.default)(this, Dot);return (0, _possibleConstructorReturn3.default)(this, (Dot.__proto__ || (0, _getPrototypeOf2.default)(Dot)).apply(this, arguments));}(0, _createClass3.default)(Dot, [{ key: 'render', value: function render()

    {var _props =
      this.props,color = _props.color,diameter = _props.diameter;

      return (
        _react2.default.createElement(_reactNative.View, {
          style: [{
            backgroundColor: color,
            width: diameter,
            height: diameter,
            borderRadius: diameter / 2,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 3 },
          this.props.style] }));


    } }]);return Dot;}(_react.Component);exports.default = Dot;


Dot.propTypes = {
  color: _propTypes2.default.string.isRequired,
  diameter: _propTypes2.default.number.isRequired };


Dot.defaultProps = {
  color: 'rgba(192, 192, 192, 1)',
  diameter: 10 };
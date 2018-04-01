'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _from = require('babel-runtime/core-js/array/from');var _from2 = _interopRequireDefault(_from);var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require('babel-runtime/helpers/createClass');var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _reactNative = require('react-native');




var _dot = require('./dot');var _dot2 = _interopRequireDefault(_dot);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var

Dots = function (_Component) {(0, _inherits3.default)(Dots, _Component);function Dots() {(0, _classCallCheck3.default)(this, Dots);return (0, _possibleConstructorReturn3.default)(this, (Dots.__proto__ || (0, _getPrototypeOf2.default)(Dots)).apply(this, arguments));}(0, _createClass3.default)(Dots, [{ key: 'render', value: function render()
    {var _this2 = this;var _props =
      this.props,total = _props.total,active = _props.active;

      var range = (0, _from2.default)(new Array(total), function (x, i) {return i;});

      return (
        _react2.default.createElement(_reactNative.View, { style: [styles.dots, this.props.style] },
          range.map(function (i) {
            return (
              _react2.default.createElement(_dot2.default, {
                color: i === active ? _this2.props.activeColor : _this2.props.color,
                key: i }));


          })));


    } }]);return Dots;}(_react.Component);exports.default = Dots;


Dots.propTypes = {
  total: _propTypes2.default.number.isRequired,
  active: _propTypes2.default.number.isRequired };


Dots.defaultProps = {
  total: 0,
  active: -1 };


var styles = _reactNative.StyleSheet.create({
  dots: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center' } });
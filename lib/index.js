'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _extends2 = require('babel-runtime/helpers/extends');var _extends3 = _interopRequireDefault(_extends2);var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require('babel-runtime/helpers/createClass');var _createClass3 = _interopRequireDefault(_createClass2);var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);var _inherits2 = require('babel-runtime/helpers/inherits');var _inherits3 = _interopRequireDefault(_inherits2);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _reactNative = require('react-native');






var _dots = require('./dots');var _dots2 = _interopRequireDefault(_dots);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var

Swiper = function (_Component) {(0, _inherits3.default)(Swiper, _Component);
  function Swiper(props) {(0, _classCallCheck3.default)(this, Swiper);var _this = (0, _possibleConstructorReturn3.default)(this, (Swiper.__proto__ || (0, _getPrototypeOf2.default)(Swiper)).call(this,
    props));

    _this.state = {
      index: props.index,
      scrollValue: new _reactNative.Animated.Value(props.index),
      viewWidth: _reactNative.Dimensions.get('window').width };return _this;

  }(0, _createClass3.default)(Swiper, [{ key: 'componentWillMount', value: function componentWillMount()

    {var _this2 = this;
      var release = function release(e, gestureState) {
        var relativeGestureDistance = gestureState.dx / _this2.state.viewWidth;var
        vx = gestureState.vx;

        var newIndex = _this2.state.index;

        if (relativeGestureDistance < -0.5 || relativeGestureDistance < 0 && vx <= -0.5) {
          newIndex = newIndex + 1;
        } else if (relativeGestureDistance > 0.5 || relativeGestureDistance > 0 && vx >= 0.5) {
          newIndex = newIndex - 1;
        }

        _this2.props.enabled ? _this2.goToPage(newIndex) : null;
      };

      this._panResponder = _reactNative.PanResponder.create({
        onMoveShouldSetPanResponder: function onMoveShouldSetPanResponder(e, gestureState) {var
          threshold = _this2.props.threshold;

          // Claim responder if it's a horizontal pan
          if (Math.abs(gestureState.dx) > Math.abs(gestureState.dy)) {
            return true;
          }

          // and only if it exceeds the threshold
          if (threshold - Math.abs(gestureState.dx) > 0) {
            return false;
          }

        },

        // Touch is released, scroll to the one that you're closest to
        onPanResponderRelease: release,
        onPanResponderTerminate: release,


        // Dragging, move the view with the touch
        onPanResponderMove: function onPanResponderMove(e, gestureState) {
          if (_this2.props.enabled) {
            var dx = gestureState.dx;
            var offsetX = -dx / _this2.state.viewWidth + _this2.state.index;

            _this2.state.scrollValue.setValue(offsetX);
          }
        } });

    } }, { key: 'goToPage', value: function goToPage(

    pageNumber) {
      // Don't scroll outside the bounds of the screens
      pageNumber = Math.max(0, Math.min(pageNumber, this.props.children.length - 1));
      this.setState({
        index: pageNumber });


      _reactNative.Animated.spring(this.state.scrollValue, { toValue: pageNumber, friction: this.props.springFriction, tension: this.props.springTension }).start();

      this.props.onPageChange(pageNumber);
    } }, { key: 'handleLayout', value: function handleLayout(

    event) {var
      width = event.nativeEvent.layout.width;

      if (width) {
        this.setState({ viewWidth: width });
      }
    } }, { key: 'render', value: function render()

    {
      var scenes = _react2.default.Children.map(this.props.children, function (child) {
        return _react2.default.cloneElement(child, { style: [child.props.style, { flex: 1 }] });
      });

      var translateX = this.state.scrollValue.interpolate({
        inputRange: [0, 1], outputRange: [0, -this.state.viewWidth] });


      var sceneContainerStyle = {
        width: this.state.viewWidth * this.props.children.length,
        flex: 1,
        flexDirection: 'row' };


      return (
        _react2.default.createElement(_reactNative.View, { onLayout: this.handleLayout.bind(this), style: { flex: 1, overflow: 'hidden' } },
          _react2.default.createElement(_reactNative.Animated.View, (0, _extends3.default)({},
            this._panResponder.panHandlers, {
              style: [sceneContainerStyle, { transform: [{ translateX: translateX }] }] }),

            scenes),


          this.props.pager &&
          _react2.default.createElement(_dots2.default, {
            active: this.state.index,
            activeColor: this.props.activeDotColor,
            style: { position: 'absolute', bottom: 50, width: this.state.viewWidth },
            total: this.props.children.length })));



    } }]);return Swiper;}(_react.Component);exports.default = Swiper;


Swiper.propTypes = {
  enabled: _propTypes2.default.bool.isRequired,
  index: _propTypes2.default.number.isRequired,
  pager: _propTypes2.default.bool.isRequired,
  threshold: _propTypes2.default.number.isRequired,
  onPageChange: _propTypes2.default.func.isRequired,
  activeDotColor: _propTypes2.default.string.isRequired };


Swiper.defaultProps = {
  enabled: true,
  index: 0,
  pager: true,
  threshold: 25,
  onPageChange: function onPageChange() {},
  activeDotColor: 'blue' };
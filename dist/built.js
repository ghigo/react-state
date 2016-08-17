'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _states = require('./states.js');

var _states2 = _interopRequireDefault(_states);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * React component consisting in an input representing a US State.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * It validates the state and invokes props.onValue when the input is validated
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var State = function (_Component) {
  _inherits(State, _Component);

  function State() {
    _classCallCheck(this, State);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(State).call(this));

    _this.state = {
      state: '',
      valid: true
    };

    _this.format = _this.format.bind(_this);
    return _this;
  }

  _createClass(State, [{
    key: 'format',
    value: function format(event) {
      // remove all non alphabetic characters and transform to uppercase
      var value = event.target.value.replace(/[^a-zA-Z]/gi, '').toUpperCase();
      var validValue = _states2.default.validate(value);

      this.setState({
        state: value,
        valid: value.length > 1 && validValue
      });

      if (this.props && this.props.onValue && validValue) {
        this.props.onValue(value);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('input', {
        type: 'text',
        pattern: '[A-Za-z]{2}',
        maxLength: '2',
        value: this.state.state,
        onChange: this.format });
    }
  }]);

  return State;
}(_react.Component);

exports.default = State;


State.propTypes = {
  onValue: _react2.default.PropTypes.func // Callback invoked when the input validates
};
module.exports = exports['default'];

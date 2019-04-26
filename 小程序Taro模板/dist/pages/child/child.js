"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Child = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Child, _BaseComponent);

  function Child() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Child);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Child.__proto__ || Object.getPrototypeOf(Child)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["showx"], _this.config = {
      navigationBarTitleText: '下拉刷新',
      enablePullDownRefresh: true,
      onReachBottomDistance: 50,
      backgroundTextStyle: "dark"

    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Child, [{
    key: "_constructor",
    value: function _constructor() {
      this.state = {

        showx: false

      };
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      console.log(this, 699);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      console.log(this, 996);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      console.log(this, nextProps, "1c");
    }
  }, {
    key: "onReachBottom",
    value: function onReachBottom(value) {
      //页面上拉触底事件的处理函数--用于分页处理刷新页面

      console.log(value, 5);
      // this.setState({
      //   showx:true
      //  })
    }
  }, {
    key: "onPullDownRefresh",
    value: function onPullDownRefresh(value) {
      //页面相关事件处理函数–-监听用户下拉动作,从而刷新页面
      //wx.showNavigationBarLoading() //在标题栏中显示加载
      // wx.startPullDownRefresh({
      //   success:function(res){
      //     console.log(res)
      //   }
      // })

      console.log(value, 6);
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      var showx = this.showx;

      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return Child;
}(_index.Component), _class.properties = {}, _class.$$events = [], _temp2);
exports.default = Child;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Child, true));
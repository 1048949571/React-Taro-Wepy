"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/@tarojs/redux/index.js");

var _counter = require("../../actions/counter.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = (_dec = (0, _index3.connect)(function (_ref) {
  var counter = _ref.counter;
  return {
    counter: counter
  };
}, function (dispatch) {
  return {
    HomeButtons: function HomeButtons(index) {
      // console.log(index)
      dispatch((0, _counter.HomeButton)(index));
    }
  };
}), _dec(_class = (_temp2 = _class2 = function (_BaseComponent) {
  _inherits(Home, _BaseComponent);

  function Home() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["isOpened", "city", "url", "HomeButtons", "counter"], _this.config = {
      navigationBarTitleText: '个人中心'
    }, _this.login = function () {
      _index2.default.navigateTo({ url: '/pages/login/login' });
    }, _this.logout = function () {
      _this.setState({ isOpened: true });
    }, _this.handleCancel = function () {
      _this.setState({ isOpened: false });
    }, _this.handleConfirm = function () {
      _this.props.HomeButtons(''); //将用户信息存入redux
      _index2.default.removeStorageSync('userinfo');
      _this.setState({
        isOpened: false
      });

      // Taro.navigateTo({ url: '/pages/login/login' });
    }, _this.personInfo = function () {
      _index2.default.navigateTo({ url: '/pages/info/info' });
    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: "_constructor",
    value: function _constructor() {
      this.state = {
        isOpened: false,
        city: "",
        url: ""
      };
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      //  wx.login({
      //   success(res) {
      //     console.log(res)
      //     if (res.code) {
      //       console.log(res)
      //       // 发起网络请求
      //       // wx.request({
      //       //   url: 'https://test.com/onLogin',
      //       //   data: {
      //       //     code: res.code
      //       //   },
      //       //   success(a){
      //       //     console.log(a)
      //       //   }
      //       // })
      //       Taro.navigateTo({ url: '/pages/login/login' });
      //     } else {

      //       alert('登录失败！' + res.errMsg)
      //     }
      //   }
      // })

      _index2.default.getStorage({ key: 'userInfo' }).then(function (rst) {
        //从缓存中获取用户信息
        _this2.props.HomeButtons(rst.data);
        //console.log(rst,"1233x")
        _this2.setState({
          city: _this2.props.counter.homebuttonvalue.city,
          url: _this2.props.counter.homebuttonvalue.avatarUrl
        });
      });

      //console.log(this,"---用户信息")
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      // console.log(this.props.counter.homebuttonvalue.city,"12")

    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.counter.homebuttonvalue == "") {
        this.setState({
          city: nextProps.counter.homebuttonvalue,
          url: nextProps.counter.homebuttonvalue
        });
        _index2.default.navigateTo({ url: '/pages/login/login' });
      } else {
        this.setState({
          city: nextProps.counter.homebuttonvalue.city,
          url: nextProps.counter.homebuttonvalue.avatarUrl
        });
      }
    }
  }, {
    key: "_createData",
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __runloopRef = arguments[2];
      ;
      Object.assign(this.__state, {});
      return this.__state;
    }
  }]);

  return Home;
}(_index.Component), _class2.properties = {
  "HomeButtons": {
    "type": null,
    "value": null
  },
  "counter": {
    "type": null,
    "value": null
  }
}, _class2.$$events = ["logout", "login", "handleCancel", "handleConfirm"], _temp2)) || _class);
exports.default = Home;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Home, true));
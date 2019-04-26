"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _dec, _class, _class2, _temp2;

var _index = require("../../npm/@tarojs/taro-weapp/index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("../../npm/@tarojs/redux/index.js");

var _counter = require("../../actions/counter.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_dec = (0, _index3.connect)(function (_ref) {
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
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref2, [this].concat(args))), _this), _this.$usedState = ["index", "city", "dataIndex", "isOpened", "showIndex"], _this.config = {
      navigationBarTitleText: '首页',
      enablePullDownRefresh: true,
      onReachBottomDistance: 50

    }, _this.$$refs = [], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: "_constructor",
    value: function _constructor() {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), "_constructor", this).apply(this, arguments);
      this.state = {
        index: "李靖",
        city: "",
        dataIndex: [{
          name: "汽车",
          imgs: "../../img/user02.png"
        }, {
          name: "火车",
          imgs: "../../img/user02.png"
        }, {
          name: "拖拉机",
          imgs: "../../img/user02.png"
        }, {
          name: "飞机",
          imgs: "../../img/user02.png"
        }, {
          name: "摩托车",
          imgs: "../../img/user02.png"
        }, {
          name: "轮船",
          imgs: "../../img/user02.png"
        }, {
          name: "自行车",
          imgs: "../../img/user02.png"
        }],
        isOpened: false,
        showIndex: false
      };
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {

      // wx.login({
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
      //     } else {

      //       alert('登录失败！' + res.errMsg)
      //     }
      //   }
      // })

      // if(this.props.counter.homebuttonvalue.city=="" || this.props.counter.homebuttonvalue==""){

      //   Taro.navigateTo({ url: '/pages/login/login' });
      // }

      this.handleChange();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      console.log(this.props, nextProps, "1c");
    }
  }, {
    key: "onShareAppMessage",
    value: function onShareAppMessage(value) {
      //： 用户点击右上角转发
      console.log(value, 1);
    }
  }, {
    key: "onPageScroll",
    value: function onPageScroll(value) {
      // 页面滚动触发事件的处理函数
      console.log(value, 2);
    }
  }, {
    key: "onTabItemTap",
    value: function onTabItemTap(value) {
      //当前是 tab 页时，点击 tab 时触发
      console.log(value, 3);
      console.log(this.state.city, "12cv");
    }
  }, {
    key: "onPullDownRefres",
    value: function onPullDownRefres(value) {
      // 页面相关事件处理函数–监听用户下拉动作

      console.log(value, 4);
    }
  }, {
    key: "onReachBottom",
    value: function onReachBottom(value) {
      //页面上拉触底事件的处理函数--用于分页处理刷新页面

      console.log(value, 5);
    }
  }, {
    key: "onPullDownRefresh",
    value: function onPullDownRefresh(value) {
      //页面相关事件处理函数–-监听用户下拉动作,从而刷新页面
      //wx.showNavigationBarLoading() //在标题栏中显示加载
      this.setState({
        showIndex: true
      });

      console.log(value, 6);
    }
  }, {
    key: "componentWillPreload",
    value: function componentWillPreload() {//预加载，只在微信小程序中可用

    }
  }, {
    key: "handleChange",
    value: function handleChange() {
      this.setState({
        isOpened: true
      });
    }
  }, {
    key: "onClose",
    value: function onClose() {
      this.setState({
        isOpened: false
      });
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

  return Index;
}(_index.Component), _class2.properties = {}, _class2.$$events = ["onClose"], _temp2)) || _class);
exports.default = Index;

Component(require('../../npm/@tarojs/taro-weapp/index.js').default.createComponent(Index, true));
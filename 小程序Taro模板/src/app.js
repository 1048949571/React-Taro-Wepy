import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'
import 'taro-ui/dist/style/index.scss' // 全局引入一次即可
import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/child/child',
      'pages/index/index',
      'pages/Home/Home',
      'pages/login/login',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#4ce843',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#000",
      selectedColor: "#fff",
      backgroundColor: "#4ce843",
      borderStyle: "white",
      list: [{
        pagePath: "pages/index/index",
        text: "首页"
      },{
        pagePath: "pages/child/child",
        text: "下拉刷新"
      },
      {
        pagePath: "pages/Home/Home",
        text: "个人中心"
      }]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))

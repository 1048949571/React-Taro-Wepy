import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { AtModal,AtButton,AtAvatar  } from 'taro-ui'
import { HomeButton} from '../../actions/counter'
import "taro-ui/dist/style/components/avatar.scss"
import './Home.less'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  HomeButtons(index) {
    // console.log(index)
    dispatch(HomeButton(index))
  }
}))
class Home extends Component {

  config = {
    navigationBarTitleText: '个人中心'
  }
  constructor() {
    this.state = {
      isOpened: false,
      city:"",
      url:""
    }
  }
  componentWillMount(){
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

    Taro.getStorage({ key: 'userInfo' }).then(rst => {   //从缓存中获取用户信息
      this.props.HomeButtons(rst.data)
      //console.log(rst,"1233x")
      this.setState({
        city:this.props.counter.homebuttonvalue.city,
        url:this.props.counter.homebuttonvalue.avatarUrl
      })
     
    })
  
    //console.log(this,"---用户信息")
}
  componentDidMount(){
  // console.log(this.props.counter.homebuttonvalue.city,"12")
  
  }
 
  componentWillReceiveProps (nextProps) {
    if(nextProps.counter.homebuttonvalue==""){
      this.setState({
        city:nextProps.counter.homebuttonvalue,
        url:nextProps.counter.homebuttonvalue
      })
      Taro.navigateTo({ url: '/pages/login/login' });
    }else{
      this.setState({
        city:nextProps.counter.homebuttonvalue.city,
        url:nextProps.counter.homebuttonvalue.avatarUrl
      })
    }
    
   
  }
  login = () => {
    Taro.navigateTo({ url: '/pages/login/login' });
  }

  logout = () => {
    this.setState({ isOpened: true })
  }
  handleCancel = () => {
    this.setState({ isOpened: false })
  }
  handleConfirm = () => {
    this.props.HomeButtons('') //将用户信息存入redux
    Taro.removeStorageSync('userinfo')
    this.setState({ 
      isOpened: false
    })
   
    // Taro.navigateTo({ url: '/pages/login/login' });
     
  }
  personInfo = () => {
    Taro.navigateTo({ url: '/pages/info/info' });
  }
  render () {
    return (
      <View className='Home'>
        <View className='Home_nav'>
            <AtAvatar circle text={this.state.city} className="HomeImg" image={this.state.url}></AtAvatar>
             {/* <Image  src={this.state.url} alt=""/> */}
             <View>{this.state.city}</View>
          </View>
      {
        this.state.city!="" ? <AtButton size='small' className="errorbtn" onClick={this.logout}>退出登录</AtButton> : <AtButton  className="errorbtns"  onClick={this.login}>登录</AtButton>
      }
      
          
          
        <View className='logout-model'>
            <AtModal
              isOpened={this.state.isOpened}
              title='确定退出？'
              cancelText='取消'
              confirmText='确认'
              onCancel={this.handleCancel}
              onConfirm={this.handleConfirm}
              content='您确定要退出嘛？'
            />
          </View>
      </View>
    )
  }
}

export default Home

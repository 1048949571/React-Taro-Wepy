
import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import './Login.less'

import { connect } from '@tarojs/redux'

import { AtModal } from 'taro-ui'
import { HomeButton} from '../../actions/counter'
@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  HomeButtons(index) {
    // console.log(index)
    dispatch(HomeButton(index))
  }
}))
class Login extends Component {

  config = {
    navigationBarTitleText: '登录'
  }
  componentWillMount(){
    console.log(this.$router.params)
}
  componentDidMount(){
    console.log(this.props,"12")
  }
 
  getUserInfo(userInfo){
    console.log('userinfo',userInfo)
    if(userInfo.detail.userInfo){   //同意

        this.props.HomeButtons(userInfo.detail.userInfo) //将用户信息存入redux
        Taro.setStorage({key:'userInfo',data:userInfo.detail.userInfo}).then(rst => {  //将用户信息存入缓存中
            Taro.navigateBack()
            
        })
    } else{ //拒绝,保持当前页面，直到同意 

    }
  }
  render () {
    return (
      <View className='Login'>
      <Button open-type='getUserInfo' className="loginbtn" onGetUserInfo={this.getUserInfo} > 微信授权 </Button>
      </View>
    )
  }
}

export default Login

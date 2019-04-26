import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { AtActivityIndicator } from 'taro-ui'
import './child.less'
class Child extends Component {
  config = {
    navigationBarTitleText: '下拉刷新',
    enablePullDownRefresh:true,
    onReachBottomDistance:50,
    backgroundTextStyle:"dark"

  }
  constructor() {
    this.state = {
    
      showx:false

    }
  }
  componentWillMount() {
    console.log(this, 699)
  }
  componentDidMount() {
    console.log(this, 996)
  }
  componentWillReceiveProps(nextProps) {
    console.log(this, nextProps, "1c")

  }
 
  
  onReachBottom(value) { //页面上拉触底事件的处理函数--用于分页处理刷新页面

    console.log(value, 5)
    // this.setState({
    //   showx:true
    //  })
  }
  onPullDownRefresh(value) { //页面相关事件处理函数–-监听用户下拉动作,从而刷新页面
    //wx.showNavigationBarLoading() //在标题栏中显示加载
    // wx.startPullDownRefresh({
    //   success:function(res){
    //     console.log(res)
    //   }
    // })
   
    console.log(value, 6)
  }

  
  render() {
  
    return (
      <View className='Child'>

        <ul>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
          <li>大神</li>
        </ul>
         {
           this.showx==true ?  <View>下拉加载</View> :null
         }
         
      </View>
    )
  }
}

export default Child

import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,ScrollView  } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { AtModal,AtInput,AtCurtain,AtButton   } from 'taro-ui'
import { add, minus, asyncAdd, HomeButton } from '../../actions/counter'
import Child from '../child/child'
import './index.less'
import "taro-ui/dist/style/components/curtain.scss"

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({

  HomeButtons(index) {
    // console.log(index)
    dispatch(HomeButton(index))
  }
}))
class Index extends Component {

  config = {
    navigationBarTitleText: '首页',
    enablePullDownRefresh: true, 
    onReachBottomDistance:50

  }
  constructor() {
    super(...arguments)
    this.state = {
      index: "李靖",
      city:"",
      dataIndex:[
        {
          name:"汽车",
          imgs:"../../img/user02.png"
        },
        {
          name:"火车",
          imgs:"../../img/user02.png"
        },
        {
          name:"拖拉机",
          imgs:"../../img/user02.png"
        },{
          name:"飞机",
          imgs:"../../img/user02.png"
        },
        {
          name:"摩托车",
          imgs:"../../img/user02.png"
        },{
          name:"轮船",
          imgs:"../../img/user02.png"
        },
        {
          name:"自行车",
          imgs:"../../img/user02.png"
        },
      ],
      isOpened: false,
      showIndex:false
    }
  }
  componentWillMount() {
  
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
  
   this.handleChange()
  }
  componentDidMount() {

  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps, "1c")

  }


  onShareAppMessage(value) {//： 用户点击右上角转发
    console.log(value, 1)
  }
  onPageScroll(value) {// 页面滚动触发事件的处理函数
    console.log(value, 2)
  }

  onTabItemTap(value) {//当前是 tab 页时，点击 tab 时触发
    console.log(value, 3)
    console.log(this.state.city,"12cv")
  }
  onPullDownRefres(value) {// 页面相关事件处理函数–监听用户下拉动作
   
    console.log(value, 4)
  }

  onReachBottom(value) { //页面上拉触底事件的处理函数--用于分页处理刷新页面
  
    console.log(value, 5)
    
  }
  onPullDownRefresh(value) { //页面相关事件处理函数–-监听用户下拉动作,从而刷新页面
    //wx.showNavigationBarLoading() //在标题栏中显示加载
    this.setState({
      showIndex:true
    })

    console.log(value, 6)
  }   



  componentWillPreload(){//预加载，只在微信小程序中可用

  }   
  

  handleChange () {
    this.setState({
      isOpened: true
    })
  }
  onClose () {
    this.setState({
      isOpened: false
    })
  }
  render() {
    return (
      <View className='index'>
    
       <view class="Nav">
        <ul>
          {
            this.state.dataIndex.map((v,i)=>{
              return <li key={i}>{v.name}</li>
            })
          }
        
        </ul>
    </view>
       Child
         
        {/* <Button onClick={this.props.HomeButtons.bind(this,this.state.index)}>个人中心传值</Button> */}
      
        <AtCurtain
          isOpened={this.state.isOpened}
          onClose={this.onClose.bind(this)}
        >
          <Image
            style='width:100%;height:250px; border-radius: 50%'
            src='https://img.alicdn.com/tfs/TB1wUEoO4TpK1RjSZFMXXbG_VXa-520-280.jpg'
          />
        </AtCurtain>
      
        
      </View>
    )
  }
}

export default Index

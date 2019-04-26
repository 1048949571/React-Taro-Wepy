import Tpl from './tpl';
import axios from '../../../js/common/ajax';
import lib from '../../../js/common/lib';
import { message as Msg } from 'antd'
// import { LoadingModal } from '../../components/LoadingModal/LoadingModal'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }
    componentWillMount() {
       
        
        
    }
    componentDidMount() {
        //document.title = ''
    }
    getWechatOpenId (){
        
        //const code = lib.getQueryString('code');
        
        // axios.post('/hcm/wechat/getGZAccess_token', {
        //     code:""
        // })
        // .then(res => {
        //     if(res.data.openid){
               
        //     }else{
        //        // Msg.error("微信接口调用失败，请关注公众号!并从公众号内进入 ")
        //     }
            
        // }).catch(err => {
        //     Msg.error("微信接口调用失败，请稍后再试！")
        // })
    }
    render() {
        return <Tpl that={this} />
    }
}

export default App
import Tpl from './tpl';
import ajax from '../../../js/common/ajax';
//import echarts from 'echarts';
import { message } from 'antd';


class Month extends React.Component {
    constructor(props) {
        super(props)
       
    }
    
    componentDidMount() {
        
    }
 
    render() {
        return <Tpl that={this} />
    }
}

export default Month
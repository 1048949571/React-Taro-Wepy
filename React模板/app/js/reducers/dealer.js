import * as type from '../constants';
import {message} from 'antd'


  //模板
// const brandListToKefu = (state = [], action) => {
//   switch (action.type) {
//     case type.GETBRANDLISTTOKEFU:
//       return [...action.data]
//       break;

//     default:
//       return state;
//   }
// }



export default (state = initialState, action) => {
  return ({
    brandListToKefu: brandListToKefu(state.brandListToKefu, action),
  })
}
  







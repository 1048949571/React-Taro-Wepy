import { HOMEBUTTON } from '../constants/counter'

const INITIAL_STATE = {
  homebuttonvalue:""
}

export default function counter (state = INITIAL_STATE, action) {
  
  switch (action.type) {
       case HOMEBUTTON:
       return Object.assign({}, state, { homebuttonvalue: action.homebuttonvalue })
       
     default:
       return state
  }
}

import { combineReducers } from "redux";
import collapsed from './navshow';
import brandListToKefu from './dealer';
import goClient from './goClientInfo';


const rootReducer = combineReducers({
    goClient
});
export default rootReducer

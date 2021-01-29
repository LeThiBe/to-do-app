import {combineReducers} from 'redux';
import postData from './postReducers';
import loginData from './loginReducer';

export default combineReducers({
    postData,
    loginData
});

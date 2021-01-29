import {ActionTypes} from '../constants/actionTypes';

export const initialState = [
  loginSuccess => false,
  errorMessage => ''
];

const user = 'le.thi.be@sun-asterisk.com';
const password = '123456';

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      const {payload} = action;

      if ((payload.email === user) && (payload.password === password)) {
        payload.loginSuccess = true;
      } else {
        payload.loginSuccess = false;
        payload.errorMessage = "The email address or password is incorrect.";
      }

      return {...state, ...payload};
    default:
      return state;
  }
};

export default loginReducer;

// userActions.js
import { USER_LOGIN, USER_REGISTER } from "./userActionTypes";

export const userLogin = (userData) => ({
    type: USER_LOGIN,
    payload: userData,
  });
  
export const userRegister = (message) => ({
  type: USER_REGISTER,
  payload: message,
});

// userReducer.js
import { USER_LOGIN, USER_REGISTER } from "./userActionTypes";

const initialState = {
  userAuth: null,
  user: {}, // Change this to an empty object
  status: null,
  message: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        message: action.payload.msg,
        userAuth: action.payload.status,
        status: action.payload.status,
        user: action.payload.user, // Update this line to match your API response structure
      };

    case USER_REGISTER:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;

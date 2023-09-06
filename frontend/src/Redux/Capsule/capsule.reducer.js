// capsuleReducer.js
import { GET_CAPSULES_SUCCESS, GET_CAPSULES_FAILURE } from "./capsule.types";

const initialState = {
  capsules: [],
  loading: false,
  error: null,
};

const capsuleReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAPSULES_SUCCESS:
      return {
        ...state,
        capsules: action.payload,
        loading: false,
        error: null,
      };
    case GET_CAPSULES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default capsuleReducer;

// capsuleActions.js
import { GET_CAPSULES_SUCCESS, GET_CAPSULES_FAILURE } from "./capsule.types";

export const getCapsulesSuccess = (data) => ({
  type: GET_CAPSULES_SUCCESS,
  payload: data,
});

export const getCapsulesFailure = (error) => ({
  type: GET_CAPSULES_FAILURE,
  payload: error,
});

// capsuleThunks.js
import { getCapsulesSuccess, getCapsulesFailure } from "./capsule.actions";

export const getCapsules = (stateKey, stateValue) => async (dispatch) => {
  try {
    const response = await fetch(`https://api.spacexdata.com/v3/capsules?${stateKey}=${stateValue}`);
    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const data = await response.json();
    dispatch(getCapsulesSuccess(data));
  } catch (error) {
    dispatch(getCapsulesFailure(error.message));
  }
};

export const otherCapsules = (value) => async (dispatch) => {
  try {
    const response = await fetch(`https://api.spacexdata.com/v3/capsules/${value}`);
    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const data = await response.json();
    dispatch(getCapsulesSuccess(data));
  } catch (error) {
    dispatch(getCapsulesFailure(error.message));
  }
};

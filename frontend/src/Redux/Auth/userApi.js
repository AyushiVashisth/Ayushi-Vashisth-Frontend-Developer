// userApi.js
import { userLogin, userRegister } from "./userActions";

export const loginUser = (userData) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://naughty-tweed-jacket-elk.cyclic.app/users/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      }
    );

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const data = await response.json();

    // Ensure the dispatched action provides the expected data structure
    dispatch(
      userLogin({
        msg: data.msg,
        status: data.status,
        user: data.name // Make sure your API response includes a 'user' field
      })
    );
  } catch (error) {
    console.error(error);
  }
};

export const registerUser = (userData) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://naughty-tweed-jacket-elk.cyclic.app/users/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      }
    );

    if (!response.ok) {
      throw new Error("Request failed with status: " + response.status);
    }

    const data = await response.json();
    dispatch(userRegister(data.msg));
  } catch (error) {
    console.error(error);
  }
};

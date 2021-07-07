import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index.js";

// if action creators are asynchronous then redux thunk is ideal

export const signin = (formData, history) => async (dispatch) => {
  try {
    // const { data } = await api.signIn(formData);

    // dispatch({ type: AUTH, data });

    // router.push("/");
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    // const { data } = await api.signUp(formData);

    // dispatch({ type: AUTH, data });

    // router.push("/");

    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

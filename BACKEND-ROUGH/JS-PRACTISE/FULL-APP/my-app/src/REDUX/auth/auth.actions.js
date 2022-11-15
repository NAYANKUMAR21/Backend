import axios from "axios";
import { Navigate } from "react-router-dom";
import {
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_OUT,
} from "./auth.action.Type";

export const login = (cred) => async (dispatch, state) => {
  dispatch({ type: AUTH_SIGN_IN_LOADING });
  try {
    let res = await axios.post("https://reqres.in/api/login", cred);
    let data = res.data;
    console.log(data, "nana");
    dispatch({ type: AUTH_SIGN_IN_SUCCESS, payload: data.token });
    return;
  } catch (er) {
    console.log(er.message);
    dispatch({ type: AUTH_SIGN_IN_ERROR });
  }
};
export const logout = () => ({ type: AUTH_SIGN_OUT });

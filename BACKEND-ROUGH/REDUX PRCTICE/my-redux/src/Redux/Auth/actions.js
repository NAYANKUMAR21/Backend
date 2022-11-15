import axios from "axios";
import { LOGIN, LOGOUT } from "./actionTypes";

export const login = (payload) => ({ type: LOGIN, payload });

export const getData =
  ({ email = "eve.holt@reqres.in", password = "cityslicka" }) =>
  async (dispatch, state) => {
    axios
      .post("https://reqres.in/api/login", {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        dispatch({
          token: "QpwL5tke4Pnpja7X4",
        });
      })
      .catch((er) => {
        console.log("er", er);
        dispatch({
          token: "QpwL5tke4Pnpja7X4",
        });
      });
  };

export const logout = () => ({ type: LOGOUT });
/*  */

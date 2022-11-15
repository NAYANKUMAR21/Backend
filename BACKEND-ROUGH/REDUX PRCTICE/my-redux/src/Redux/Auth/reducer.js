import { LOGIN, LOGOUT } from "./actionTypes";
const initial = {
  authState: "",
  islogged: false,
};
export const AuthReducer = (state = initial, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        authState: action.payload,
        islogged: true,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        authState: "LOGOUT SUCCESS FULL",
        islogged: false,
      };
    }
    default: {
      return state;
    }
  }
};

import {
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_IN_LOADING,
  AUTH_SIGN_IN_SUCCESS,
  AUTH_SIGN_OUT,
  RESET_AUTH,
} from "./auth.action.Type";

export const init = {
  loading: false,
  data: {
    token: "",
    isAuthenticated: false,
  },
  error: false,
};
export const authReducer = (state = init, { type, payload }) => {
  switch (type) {
    case AUTH_SIGN_IN_SUCCESS: {
      return {
        ...state,
        loading:false,
        data: {
          token: payload,
          isAuthenticated: true,
        },
        error:false
      };
    }
    case AUTH_SIGN_IN_ERROR: {
      return {
        ...state,
        error: true,
        loading:false
      };
    }
    case AUTH_SIGN_IN_LOADING: {
      return {
        ...state,
        loading: true,
        error:false
      };
    }
    case AUTH_SIGN_OUT: {
      return {
        ...state,
        data: {
          token: "",
          isAuthenticated: false,
        },
      };
    }
    case RESET_AUTH: {
      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};


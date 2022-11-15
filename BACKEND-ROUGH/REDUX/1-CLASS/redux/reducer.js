import { INC, DEC } from "./actionTypes.js";

export const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INC:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case DEC:
      return {
        ...state,
        count: state.count - action.payload,
      };
    default: {
      return state;
    }
  }
};

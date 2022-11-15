import {
  GET_PLANTS_SUCCESS,
  GET_PLANTS_ERROR,
  GET_PLANTS_LOADING,
  RESET_PLANTS,
  GET_PLANTS_SINGLE,
} from "./Plant.action.Type";

const plantInitalState = {
  loading: false,
  error: false,
  data: [],
};

export const PlantReducer = (state = plantInitalState, { type, payload }) => {
  switch (type) {
    case GET_PLANTS_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
        data: [],
      };
    }
    case GET_PLANTS_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    }
    case GET_PLANTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: [...payload],
      };
    }
    case GET_PLANTS_SINGLE: {
      return {
        loading: false,
        error: false,
        data: [payload],
      };
    }
    case RESET_PLANTS: {
      return {
        loading: false,
        error: false,
        data: [],
      };
    }
    default: {
      return state;
    }
  }
};

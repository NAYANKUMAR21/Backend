import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SINGLE,
  GET_PRODUCTS_SUCCESS,
  RESET_PRODUCTS,
} from "./Product.action.Type";

const PlantInitalState = {
  loading: false,
  error: false,
  data: [],
};

export const ProductReducer = (state = PlantInitalState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS_LOADING: {
      return {
        ...state,
        loading: true,
        data: [],
        error: false,
      };
    }
    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: [...payload],
        error: false,
      };
    }
    case GET_PRODUCTS_ERROR: {
      return {
        ...state,
        loading: false,
        data: [],
        error: true,
      };
    }
    case GET_PRODUCTS_SINGLE: {
        return {
          loading: false,
          error: false,
          data: [payload],
        };
      }
    case RESET_PRODUCTS: {
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

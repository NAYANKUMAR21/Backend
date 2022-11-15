import {
  ADD_ITEM_TO_CART_ERROR,
  ADD_ITEM_TO_CART_LOADING,
  ADD_ITEM_TO_CART_SUCCESS,
  GET_CART_ITEMS_ERROR,
  GET_CART_ITEMS_LOADING,
  GET_CART_ITEMS_SUCCESS,
  REMOVE_CART_ITEMS_ERROR,
  REMOVE_CART_ITEMS_LOADING,
  REMOVE_CART_ITEMS_SUCCESS,
  RESET_CART_ITEMS,
} from "./Cart.action.Type";

const cartInitalState = {
  getCartItems: {
    loading: false,
    error: false,
  },
  addCartItem: {
    loading: false,
    error: false,
  },
  updateCartItem: {
    loading: false,
    error: false,
  },
  removeCartItem: {
    loading: false,
    error: false,
  },
  data: [],
};
export const CartReducer = (state = cartInitalState, { type, payload }) => {
  switch (type) {
    case GET_CART_ITEMS_LOADING: {
      return {
        ...state,
        getCartItems: {
          loading: true,
          error: false,
        },
      };
    }
    case GET_CART_ITEMS_ERROR: {
      return {
        ...state,
        getCartItems: {
          loading: false,
          error: true,
        },
      };
    }
    case GET_CART_ITEMS_SUCCESS: {
      return {
        ...state,
        getCartItems: {
          loading: false,
          error: false,
        },
        data: [...payload],
      };
    }
    case ADD_ITEM_TO_CART_LOADING: {
      return {
        ...state,
        addCartItem: {
          loading: true,
          error: false,
        },
      };
    }
    case ADD_ITEM_TO_CART_ERROR: {
      return {
        ...state,
        addCartItem: {
          loading: false,
          error: true,
        },
      };
    }
    case ADD_ITEM_TO_CART_SUCCESS: {
      return {
        ...state,
        addCartItem: {
          loading: false,
          error: false,
        },
        data: [...state.data, payload],
      };
    }
    case REMOVE_CART_ITEMS_LOADING: {
      return {
        ...state,
        removeCartItem: {
          loading: true,
          error: false,
        },
      };
    }
    case REMOVE_CART_ITEMS_ERROR: {
      return {
        ...state,
        removeCartItem: {
          loading: false,
          error: true,
        },
      };
    }
    case REMOVE_CART_ITEMS_SUCCESS: {
      return {
        ...state,
        removeCartItem: {
          loading: false,
          error: false,
        },
      };
    }
    case RESET_CART_ITEMS: {
      return {
        getCartItems: {
          loading: false,
          error: false,
        },
        addCartItem: {
          loading: false,
          error: false,
        },
        updateCartItem: {
          loading: false,
          error: false,
        },
        removeCartItem: {
          loading: false,
          error: false,
        },
        data: [],
      };
    }
    default: {
      return state;
    }
  }
};

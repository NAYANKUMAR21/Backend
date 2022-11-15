import axios from "axios";
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
} from "./Cart.action.Type";
export const addItem = (item) => async (dispatch, state) => {
  try {
    dispatch({ type: ADD_ITEM_TO_CART_LOADING });
    let res = await axios.post("http://localhost:8080/carts", item);
    let data = await res.data;
    console.log(data, "cart");
    dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data });
  } catch (er) {
    console.log(er.message);
    dispatch({ type: ADD_ITEM_TO_CART_ERROR });
  }
};

export const getItems = () => async (dispatch, state) => {
  try {
    dispatch({ type: GET_CART_ITEMS_LOADING });
    let res = await axios.get("http://localhost:8080/carts");
    let data = await res.data;
    console.log(data);
    dispatch({ type: GET_CART_ITEMS_SUCCESS, payload: data });
  } catch (er) {
    console.log(er);
    dispatch({ type: GET_CART_ITEMS_ERROR });
  }
};

export const deleteItem = (id) => async (dispatch, state) => {
  try {
    dispatch({ type: REMOVE_CART_ITEMS_LOADING });
    let res = await axios.delete(`http://localhost:8080/carts/${id}`);
    let data = await res.data;
    console.log(res, "filtered data");
    dispatch({ type: REMOVE_CART_ITEMS_SUCCESS });
  } catch (er) {
    console.log(er.message);
    dispatch({ type: REMOVE_CART_ITEMS_ERROR });
  }
};

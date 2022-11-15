import axios from "axios";
import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SINGLE,
  GET_PRODUCTS_SUCCESS,
} from "./Product.action.Type";

export const getProducts = () => async (dispatch, state) => {
  try {
    dispatch({ type: GET_PRODUCTS_LOADING });
    const res = await axios.get("http://localhost:8080/products");
    let data = await res.data;
    console.log(data, "products actions");
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
  } catch (er) {
    dispatch({ type: GET_PRODUCTS_ERROR });
  }
};

export const getSingle = (id) => async (dispatch, state) => {
  try {
    dispatch({ type: GET_PRODUCTS_LOADING });
    let res = await axios.get(`http://localhost:8080/products/${id}`);
    let data = await res.data
    console.log(data)
    dispatch({ type: GET_PRODUCTS_SINGLE, payload: data });
  } catch (e) {
    dispatch({ type: GET_PRODUCTS_ERROR });
    console.log(e.message);
  }
};

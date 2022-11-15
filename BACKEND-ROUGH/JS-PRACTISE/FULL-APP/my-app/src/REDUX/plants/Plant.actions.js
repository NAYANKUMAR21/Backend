import axios from "axios";
import {
  GET_PLANTS_ERROR,
  GET_PLANTS_LOADING,
  GET_PLANTS_SINGLE,
  GET_PLANTS_SUCCESS,
} from "./Plant.action.Type";

export const getPlants = () => async (dispatch, state) => {
  try {
    dispatch({ type: GET_PLANTS_LOADING });
    let res = await axios.get("http://localhost:8080/plants");
    let data = await res.data;
    console.log(data, "plants actions");
    dispatch({ type: GET_PLANTS_SUCCESS, payload: data });
  } catch (er) {
    dispatch({ type: GET_PLANTS_ERROR });
    console.log(er.message);
  }
};

export const getSingle = (id)=>async(dispatch,state)=>{
    try{
        dispatch({ type: GET_PLANTS_LOADING });
        let res = await axios.get(`http://localhost:8080/plants/${id}`)
        let data = await res.data
        console.log(data)
        dispatch({type:GET_PLANTS_SINGLE,payload:data})
    }catch(er){
        dispatch({ type: GET_PLANTS_ERROR });
        console.log(er.message)
    }
}
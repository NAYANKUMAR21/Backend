import {legacy_createStore } from "redux"
import { reducer } from "./reducer.js"




export const store  = legacy_createStore(reducer)
import {
  legacy_createStore,
  compose,
  combineReducers,
  applyMiddleware,
} from "redux";
import { AuthReducer } from "./Auth/reducer";
// import { ThunkMiddleware } from "redux-thunk";

const rootReducer = combineReducers({
  auth: AuthReducer,
});
const composeEnhancer =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const customMiddleware = (state) => (next) => (action) => {
  if (typeof action === "function ") {
    action(state.dispatch, state.getState);
  }
  next(action);
};

const enhancer = composeEnhancer(applyMiddleware(customMiddleware));
export const store = legacy_createStore(rootReducer, enhancer);

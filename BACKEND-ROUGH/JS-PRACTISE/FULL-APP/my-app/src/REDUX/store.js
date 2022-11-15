import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/auth.reducer";
import { CartReducer } from "./cart/Cart.reducer";
import { PlantReducer } from "./plants/Plant.reducer";
import { ProductReducer } from "./products/product.reducer";

const rootReducer = combineReducers({
  authApp: authReducer,
  productApp: ProductReducer,
  plantApp: PlantReducer,
  cartApp: CartReducer,
});

const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = legacy_createStore(
  rootReducer,
  createComposer(applyMiddleware(thunk))
);

import DataReducer from "./UserData/DataReducer";
import CartReducer from "./Cart/CartReducer";
import { combineReducers } from "redux";

export const RootReducer= combineReducers({cart: CartReducer, data: DataReducer })


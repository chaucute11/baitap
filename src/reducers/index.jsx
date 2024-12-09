import {combineReducers} from "redux";
import cartReducer from "./cart"
import categoryReducer from "./category";

const allReducers = combineReducers({
  cartReducer,
  categoryReducer
})
export default allReducers;
import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import alertReducer from "./alert.reducer";
import userReducer from "./user.reducer";
// import productReducer from "./product.reducer"
export default combineReducers({
  auth: authReducer,
  alert: alertReducer,
  user: userReducer,
  // product: productReducer
});

import { combineReducers } from "redux";
import AccountReducer from "./AccountReducer";
import AuthReducer from "./AuthReducer";

const rootReducer = combineReducers({
  AccountReducer: AccountReducer,
  AuthReducer: AuthReducer,
});

export default rootReducer;
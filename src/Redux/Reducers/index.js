import { combineReducers } from "redux";
import courseReducer from "./courseReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  courses:courseReducer,
});

export default rootReducer;

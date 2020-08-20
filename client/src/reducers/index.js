import authReducer from "./authReducer";
import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";

export default combineReducers({
  auth: authReducer,
  form: reduxFormReducer,
});

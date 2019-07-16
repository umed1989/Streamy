import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { reducer as formReducer } from "redux-form";
import streamReducer from "./streamReducer";

export default combineReducers({
  form: formReducer,
  authenticated: authReducer,
  streams: streamReducer
});

import { combineReducers } from "redux";
import authErrorReducer from "./auth-errorReducer.js";
import authReducer from "./auth-reducer.js";

const reducers = combineReducers({
    authReducer,
    authErrorReducer,
});

export default reducers;

import { combineReducers } from "redux";
import memberReducer from "./memberReducer";
import authenticateReducer from "./authenticateReducer";

export default combineReducers({
    members: memberReducer,
    auth: authenticateReducer
})
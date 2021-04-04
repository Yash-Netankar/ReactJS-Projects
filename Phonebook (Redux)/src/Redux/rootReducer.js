import { reducer } from "./reducers";
import { createStore, combineReducers } from "redux";

const root = combineReducers({
    reducer
})
const store = createStore(root)
export default store
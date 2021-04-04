import { createStore } from "redux";
import TaskManager from "./reducer"

const store = createStore(TaskManager)
export default store
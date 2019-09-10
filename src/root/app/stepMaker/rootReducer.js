import { combineReducers } from "redux";
import stepsReducer from "./stepsReducer";

const root = combineReducers({
  steps: stepsReducer
});

export default root;

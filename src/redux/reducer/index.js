import { combineReducers } from "redux";
import { call_reducer } from "./app";

export default () =>
  combineReducers({
    call_reducer:call_reducer
  });
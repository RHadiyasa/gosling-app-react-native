import { combineReducers } from "redux";
import { userReducer } from "./users";

export const reducers = combineReducers({
  loggedInUser: userReducer,
});
// setelah ini kita harus bungkus, kompoenen di dalam App.js di dalam provider

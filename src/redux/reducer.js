import { combineReducers } from "redux";
import { charactersReducer } from "./charactersReducer";
import { locationsReducer } from "./locationsReducer";

export const rootReducer = combineReducers({
  charactersReducer: charactersReducer,
  locationsReducer: locationsReducer,
});
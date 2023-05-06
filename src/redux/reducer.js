import { combineReducers } from "redux";
import { charactersReducer } from "./charactersReducer";
import { locationsReducer } from "./locationsReducer";
import { episodesReducer } from "./episodesReducer";

export const rootReducer = combineReducers({
  charactersReducer: charactersReducer,
  locationsReducer: locationsReducer,
  episodesReducer: episodesReducer,
});

import { combineReducers } from "redux";
import { charactersReducer } from "./charactersReducer";
import { locationsReducer } from "./locationsReducer";
import { episodesReducer } from "./episodesReducer";
import { characterReducer } from "./characterReducer";
import { episodeItemReducer } from "./episodeItemReducer";
import { locationItemReducer } from "./locationItemRedux";

export const rootReducer = combineReducers({
  charactersReducer: charactersReducer,
  locationsReducer: locationsReducer,
  episodesReducer: episodesReducer,
  characterReducer: characterReducer,
  episodeItemReducer: episodeItemReducer,
  locationItemReducer: locationItemReducer,
});

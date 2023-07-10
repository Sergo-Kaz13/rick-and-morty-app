import { characterAPI, episodeSingleAPI } from "../api/api";

const GET_EPISODE_ITEM = "GET_EPISODE_ITEM";
const GET_EPISODE_CHARACTERS = "GET_EPISODE_CHARACTERS";

const initialState = {
  episodeItem: {},
  characters: [],
};

export const episodeItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EPISODE_ITEM:
      return {
        ...state,
        episodeItem: { ...action.episodeItem },
      };
    case GET_EPISODE_CHARACTERS:
      return {
        ...state,
        characters: [...action.episodeCharacters],
      };
    default:
      return state;
  }
};

export const setEpisodeSingle = (episodeSingle) => {
  return {
    type: GET_EPISODE_ITEM,
    episodeItem: episodeSingle,
  };
};
export const setEpisodeCharacters = (episodeCharacters) => {
  return {
    type: GET_EPISODE_CHARACTERS,
    episodeCharacters: episodeCharacters,
  };
};

export const getEpisodeSingle = (id) => {
  return (dispatch) => {
    episodeSingleAPI.getEpisodeSingle(id).then((responses) => {
      dispatch(setEpisodeSingle(responses.data));
    });
  };
};

export const getEpisodeCharacters = (id) => {
  return (dispatch) => {
    characterAPI
      .getCharacter(id)
      .then((responses) => dispatch(setEpisodeCharacters(responses.data)));
  };
};

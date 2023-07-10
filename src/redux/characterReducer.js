import { characterAPI, episodesCharacterAPI } from "../api/api";

const GET_CHARACTER = "GET_CHARACTER";
const GET_EPISODES = "GET_EPISODES";

const initialState = {
  character: {},
  episodes: [],
};

export const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTER:
      return {
        ...state,
        character: { ...action.character },
      };
    case GET_EPISODES:
      return {
        ...state,
        episodes: [...action.episodes],
      };
    default:
      return state;
  }
};

export const setCharacter = (character) => {
  return {
    type: GET_CHARACTER,
    character: character,
  };
};
export const setEpisodes = (episodes) => {
  return {
    type: GET_EPISODES,
    episodes: episodes,
  };
};

export const getCharacter = (id) => {
  return (dispatch) => {
    characterAPI.getCharacter(id).then((response) => {
      dispatch(setCharacter(response.data));
    });
  };
};

export const getEpisodes = (id) => {
  return (dispatch) => {
    episodesCharacterAPI.getEpisodesCharacter(id).then((responses) => {
      dispatch(setEpisodes(responses.data));
    });
  };
};

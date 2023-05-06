import { episodeAPI } from "../api/api";

const GET_EPISODE = "GET_EPISODE";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

const initialState = {
  episodesData: {},
  currentPage: 1,
};

export const episodesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EPISODE:
      return {
        ...state,
        episodesData: { ...action.episodes },
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    default:
      return state;
  }
};

export const setEpisodes = (episodes) => {
  return {
    type: GET_EPISODE,
    episodes,
  };
};

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});

export const getEpisodes = (currentPage) => {
  return (dispatch) => {
    episodeAPI.getEpisodes(currentPage).then((response) => {
      dispatch(setEpisodes(response.data));
      dispatch(setCurrentPage(currentPage));
    });
  };
};

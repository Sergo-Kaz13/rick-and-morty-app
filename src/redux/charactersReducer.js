import { charactersAPI } from "../api/api";

const GET_CHARACTERS = "GET_CHARACTERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const GET_PAGES = "GET_PAGES";

const initialState = {
  characters: [],
  info: {},
  currentPage: 1,
  pages: null,
};

export const charactersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return {
        ...state,
        characters: [...action.character.data.results],
        info: { ...action.character.data.info },
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case GET_PAGES:
      return {
        ...state,
        pages: action.pages,
      };
    default:
      return state;
  }
};

export const setCharacters = (character) => {
  return {
    type: GET_CHARACTERS,
    character,
  };
};
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const getPages = (pages) => ({
  type: GET_PAGES,
  pages,
});

export const getCharacters = (currentPage) => {
  return (dispatch) => {
    charactersAPI.getCharacters(currentPage).then((response) => {
      dispatch(setCharacters(response));
      dispatch(setCurrentPage(currentPage));
      dispatch(getPages(response.data.info.pages));
    });
  };
};

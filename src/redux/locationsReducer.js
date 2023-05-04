import { locationAPI } from "../api/api";

const GET_LOCATIONS = "GET_LOCATIONS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

const initialState = {
  locationsData: {},
  currentPage: 1,
};

export const locationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOCATIONS:
      return {
        ...state,
        locationsData: { ...action.locations },
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

export const setLocations = (locations) => {
  return {
    type: GET_LOCATIONS,
    locations,
  };
};
export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};

export const getLocations = (currentPage) => {
  return (dispatch) => {
    locationAPI.getLocations(currentPage).then((response) => {
      dispatch(setLocations(response.data));
      dispatch(setCurrentPage(currentPage));
    });
  };
};

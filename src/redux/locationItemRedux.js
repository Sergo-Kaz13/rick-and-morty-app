import { characterAPI, locationSingleAPI } from "../api/api";

const GET_LOCATION_ITEM = "GET_LOCATION_ITEM";
const GET_RESIDENTS_ITEMS = "GET_RESIDENTS_ITEMS";

const initialState = {
  locationItem: {},
  residents: [],
};

export const locationItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOCATION_ITEM:
      return {
        ...state,
        locationItem: { ...action.locationSingle },
      };
    case GET_RESIDENTS_ITEMS:
      return {
        ...state,
        residents: [...action.residents],
      };

    default:
      return state;
  }
};

export const setLocationSingle = (locationSingle) => {
  return {
    type: GET_LOCATION_ITEM,
    locationSingle: locationSingle,
  };
};

export const setResidentLocation = (residents) => {
  return {
    type: GET_RESIDENTS_ITEMS,
    residents: residents,
  };
};

export const getLocationSingle = (id) => {
  return (dispatch) => {
    locationSingleAPI
      .getLocationSingle(id)
      .then((responses) => dispatch(setLocationSingle(responses.data)));
  };
};

export const getResidentLocation = (id) => {
  return (dispatch) => {
    characterAPI.getCharacter(id).then((responses) => {
      if (!Array.isArray(responses.data)) {
        return dispatch(setResidentLocation([responses.data]));
      }
      return dispatch(setResidentLocation(responses.data));
    });
  };
};

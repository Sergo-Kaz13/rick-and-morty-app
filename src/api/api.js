import axios from "axios";

const instance = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
});

export const charactersAPI = {
  getCharacters(currentPage = 1) {
    return instance.get(`character?page=${currentPage}`);
  },
};

export const characterAPI = {
  getCharacter(id) {
    return instance.get(`character/${id}`);
  },
};

export const locationAPI = {
  getLocations(currentPage = 1) {
    return instance.get(`location?page=${currentPage}`);
  },
};

export const episodeAPI = {
  getEpisodes(currentPage = 1) {
    return instance.get(`episode?page=${currentPage}`);
  },
};

export const episodeSingleAPI = {
  getEpisodeSingle(id) {
    return instance.get(`episode/${id}`);
  },
};

export const episodesCharacterAPI = {
  getEpisodesCharacter(id = 1) {
    return instance.get(`episode/[${id}]`);
  },
};

export const locationSingleAPI = {
  getLocationSingle(id) {
    return instance.get(`location/${id}`);
  },
};

import axios from "axios";

const instance = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
});

export const charactersAPI = {
  getCharacters(currentPage = 1) {
    return instance.get(`character?page=${currentPage}`);
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

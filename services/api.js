import axios from "axios";
import qs from "qs";
import {
  APP_KEY,
  mv_now_playing,
  mv_top_rated,
  mv_popular,
  mv_upcoming,
} from "./api_config";

const params = {
  api_key: APP_KEY,
  language: "en-US",
  page: 1,
};

export const getMoviesNowPlaying = async () => {
  const url = mv_now_playing;

  try {
    const moviesAxios = axios.create({
      paramsSerializer: (params) =>
        qs.stringify(params, { arrayFormat: "repeat" }),
    });

    const response = await moviesAxios.get(url, { params });
    return response;
    /* console.log("RESPONSE", response.data.results[0].original_title); */
  } catch (error) {
    throw error;
  }
};

export const getMoviesPopular = async () => {
  const url = mv_popular;

  try {
    const moviesAxios = axios.create({
      paramsSerializer: (params) =>
        qs.stringify(params, { arrayFormat: "repeat" }),
    });

    const response = await moviesAxios.get(url, { params });
    console.log("RESPONSE", response.data);
  } catch (error) {
    throw error;
  }
};

export const getMoviesTopRated = async () => {
  const url = mv_top_rated;

  try {
    const moviesAxios = axios.create({
      paramsSerializer: (params) =>
        qs.stringify(params, { arrayFormat: "repeat" }),
    });

    const response = await moviesAxios.get(url, { params });
    console.log("RESPONSE", response.data);
  } catch (error) {
    throw error;
  }
};

export const getMoviesUpcoming = async (movie) => {
  const url = mv_upcoming;

  try {
    const moviesAxios = axios.create({
      paramsSerializer: (params) =>
        qs.stringify(params, { arrayFormat: "repeat" }),
    });

    const response = await moviesAxios.get(url, { params });
    console.log("RESPONSE", response.data);
  } catch (error) {
    throw error;
  }
};

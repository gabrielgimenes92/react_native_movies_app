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

const moviesAxios = axios.create({
  paramsSerializer: (params) => qs.stringify(params, { arrayFormat: "repeat" }),
});

export const getMoviesNowPlaying = async () => {
  const url = mv_now_playing;
  try {
    const response = await moviesAxios.get(url, { params });
    return response;
  } catch (error) {
    throw error;
  }
};

export const getMoviesPopular = async () => {
  const url = mv_popular;
  try {
    const response = await moviesAxios.get(url, { params });
    return response;
  } catch (error) {
    throw error;
  }
};

export const getMoviesTopRated = async () => {
  const url = mv_top_rated;
  try {
    const response = await moviesAxios.get(url, { params });
    return response;
  } catch (error) {
    throw error;
  }
};

export const getMoviesUpcoming = async (movie) => {
  const url = mv_upcoming;
  try {
    const response = await moviesAxios.get(url, { params });
    return response;
  } catch (error) {
    throw error;
  }
};

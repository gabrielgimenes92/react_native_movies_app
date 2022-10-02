import axios from "axios";
import qs from "qs";
import {
  APP_KEY,
  mv_now_playing,
  mv_top_rated,
  mv_popular,
  mv_upcoming,
  tv_airing_today,
  tv_on_the_air,
  tv_popular,
  tv_top_rated,
} from "./api_config";

const params = {
  api_key: APP_KEY,
  language: "en-US",
  page: 1,
};

//MOVIES
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

export const getMoviesUpcoming = async () => {
  const url = mv_upcoming;
  try {
    const response = await moviesAxios.get(url, { params });
    return response;
  } catch (error) {
    throw error;
  }
};

// TV
export const getTVToday = async () => {
  const url = tv_airing_today;
  try {
    const response = await moviesAxios.get(url, { params });
    return response;
  } catch (error) {
    throw error;
  }
};

export const getTVOnAir = async () => {
  const url = tv_on_the_air;
  try {
    const response = await moviesAxios.get(url, { params });
    return response;
  } catch (error) {
    throw error;
  }
};

export const getTVPopular = async () => {
  const url = tv_popular;
  try {
    const response = await moviesAxios.get(url, { params });
    return response;
  } catch (error) {
    throw error;
  }
};

export const getTVTop = async () => {
  const url = tv_top_rated;
  try {
    const response = await moviesAxios.get(url, { params });
    return response;
  } catch (error) {
    throw error;
  }
};

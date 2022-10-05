import axios from "axios";
import qs from "qs";
import {
  API_KEY,
  mv_now_playing,
  mv_top_rated,
  mv_popular,
  mv_upcoming,
  tv_airing_today,
  tv_on_the_air,
  tv_popular,
  tv_top_rated,
  search_movie,
  search_tv,
  search_multi,
} from "./api_config";

const params = {
  api_key: API_KEY,
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

// SEARCH

export const searchMovie = async (queryValue) => {
  const url = search_movie;
  try {
    /*  const paramsSearch = {
      api_key: API_KEY,
      query: queryValue,
    };

    const searchAxios = axios.create({
      paramsSerializer: (paramsSearch) =>
        qs.stringify(paramsSearch, { arrayFormat: "repeat" }),
    }); 

    const response = await searchAxios.get(url, { paramsSearch }); */

    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${queryValue}&page=1&include_adult=false`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const searchMulti = async (queryValue) => {
  const url = search_multi;

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${queryValue}&page=1&include_adult=false`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const searchTV = async (queryValue) => {
  const url = search_tv;

  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&query=${queryValue}&page=1&include_adult=false`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

// GET SINGLE MOVIE
export const getMovieById = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

// GET SINGLE TV SERIE
export const getSerieById = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`
    );
    return response;
  } catch (error) {
    throw error;
  }
};

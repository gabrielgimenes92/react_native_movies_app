export const API_KEY = "994cff07f312ce58dbff9414192d8663";
export const BASE_URL = "https://api.themoviedb.org/3";

export const url_movies = BASE_URL + "/movie/";

export const mv_now_playing = url_movies + "now_playing?";
export const mv_popular = url_movies + "popular?";
export const mv_top_rated = url_movies + "top_rated?";
export const mv_upcoming = url_movies + "upcoming?";

export const url_tv = BASE_URL + "/tv/";

export const tv_airing_today = url_tv + "airing_today?";
export const tv_on_the_air = url_tv + "on_the_air?";
export const tv_popular = url_tv + "popular?";
export const tv_top_rated = url_tv + "top_rated?";

export const url_search = BASE_URL + "/search/";

export const search_movie = url_search + "movie?";
export const search_tv = url_search + "tv?";
export const search_multi = url_search + "multi?";

/* 
MOVIES
https://api.themoviedb.org/3/movie/now_playing?api_key=<<api_key>>&language=en-US&page=1
https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
https://api.themoviedb.org/3/movie/top_rated?api_key=<<api_key>>&language=en-US&page=1
https://api.themoviedb.org/3/movie/upcoming?api_key=<<api_key>>&language=en-US&page=1


GET MOVIE
https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US


SEARCH
https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
https://api.themoviedb.org/3/search/multi?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
https://api.themoviedb.org/3/search/tv?api_key=<<api_key>>&language=en-US&page=1&include_adult=false


TV
https://api.themoviedb.org/3/tv/airing_today?api_key=<<api_key>>&language=en-US&page=1
https://api.themoviedb.org/3/tv/on_the_air?api_key=<<api_key>>&language=en-US&page=1
https://api.themoviedb.org/3/tv/popular?api_key=<<api_key>>&language=en-US&page=1
https://api.themoviedb.org/3/tv/top_rated?api_key=<<api_key>>&language=en-US&page=1 
*/

import instance from '../../shared/services/basic-http-service';

const KEY = '923c2cf88ec4338da74c768a045101f0';

export const getTrendingMovies = () => {
  return instance.get(`trending/all/day?api_key=${KEY}`);
};
// https://api.themoviedb.org/3/trending/all/day?api_key=923c2cf88ec4338da74c768a045101f0

export const getOneFilm = movieId => {
  return instance.get(`movie/${movieId}?api_key=${KEY}`);
};
// https://api.themoviedb.org/3/movie/460465?api_key=923c2cf88ec4338da74c768a045101f0

export const getFilmBySearch = query => {
  return instance.get(`search/movie?query=${query}&api_key=${KEY}`);
};

// https://api.themoviedb.org/3/search/movie?query=batman&api_key=923c2cf88ec4338da74c768a045101f0

export const getFilmCast = movieId => {
  return instance.get(`movie/${movieId}/credits?api_key=${KEY}`);
};

export const getFilmReviews = movieId => {
  return instance.get(`movie/${movieId}/reviews?api_key=${KEY}`);
};

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

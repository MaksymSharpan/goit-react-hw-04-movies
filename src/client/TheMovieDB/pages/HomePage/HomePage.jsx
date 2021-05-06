import React from 'react';

import AllMovieList from '../components/AllMovies/AllMoviesList';

import { getTrendingMovies } from '../../components/service/movie-service';

// import styles from './HomePage.module.scss';

class HomePage extends React.Component {
  state = {
    films: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({
      loading: true,
    });
  }

  async componentDidUpdate() {
    const { loading } = this.state;

    if (loading) {
      try {
        const { data } = await getTrendingMovies();
        const newFilms = data.results.map(({ ...rest }) => {
          // const newPosterPath = poster_path
          //   ? `https://image.tmdb.org/t/p/w500/${poster_path}`
          //   : '';
          return {
            ...rest,
            // poster_path: newPosterPath,
          };
        });
        this.setState({
          films: newFilms,
          loading: false,
        });
      } catch (error) {
        this.setState({
          loading: false,
          error,
        });
      }
    }
  }
  render() {
    const { films } = this.state;
    return <AllMovieList films={films} />;
  }
}

export default HomePage;

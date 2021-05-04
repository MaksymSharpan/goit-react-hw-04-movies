import React from 'react';
import { NavLink } from 'react-router-dom';
// import qs from 'qs';
// import axios from 'axios';

import { getTrendingMovies } from '../../service/movie-service';

import styles from './HomePage.module.scss';

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
        const newFilms = data.results.map(({ poster_path, ...rest }) => {
          const newPosterPath = poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : '';
          return {
            ...rest,
            poster_path: newPosterPath,
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

    const filmItem = films.map(film => {
      const title = film.title ? film.title : film.original_name;

      return (
        <li key={film.id} className={styles.filmsItem}>
          <NavLink to={`/movies/${film.id}`}>
            <img src={film.poster_path} alt={title} />
            <h2>{title}</h2>
          </NavLink>
        </li>
      );
    });

    return <ul className={styles.filmList}>{filmItem}</ul>;
  }
}

export default HomePage;

import React from 'react';
// import { NavLink } from 'react-router-dom';

import { getFilmBySearch } from '../../components/service/movie-service';
import styles from './MoviesPage.module.scss';

import AllMoviesList from '../components/AllMovies/AllMoviesList';

class MoviesPage extends React.Component {
  state = {
    films: [],
    query: '',
  };

  handleChange = e => {
    const inputValue = e.currentTarget.value;
    this.setState({
      query: inputValue,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.fetchFilms();
    this.setState({
      query: '',
    });
  };

  fetchFilms = () => {
    const { query } = this.state;

    const filmRequest = getFilmBySearch(query);
    // console.log(filmRequest);

    filmRequest.then(res => {
      const { results } = res.data;
      this.setState({
        films: results,
      });
    });
  };

  render() {
    const { handleSubmit, handleChange } = this;
    const { query, films } = this.state;

    return (
      <div className={styles.background}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            className={styles.input}
            type="text"
            value={query}
            onChange={handleChange}
            placeholder="Search movie"
          />
          <button className={styles.button} type="submit">
            Search
          </button>
        </form>

        <AllMoviesList films={films} />
      </div>
    );
  }
}

export default MoviesPage;

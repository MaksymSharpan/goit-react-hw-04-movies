import React from 'react';
import { NavLink } from 'react-router-dom';

import { getFilmBySearch } from '../../service/movie-service';
import styles from './MoviesPage.module.scss';
// import HomePage

class MoviesPage extends React.Component {
  state = {
    movies: [],
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
    console.log(filmRequest);

    filmRequest.then(res => {
      const { results } = res.data;
      this.setState({
        movies: results,
      });
    });
  };

  renderFilmList = () => {
    const { movies } = this.state;
    const filmElement = movies.map(film => {
      const newPosterPath = film.poster_path
        ? `https://image.tmdb.org/t/p/w500/${film.poster_path}`
        : '';
      const title = film.title ? film.title : film.original_name;
      return (
        <li key={film.id} className={styles.filmsItem}>
          <NavLink to={`/movies/${film.id}`}>
            <img src={newPosterPath} alt={title} />
            <h2>{title}</h2>
          </NavLink>
        </li>
      );
    });
    return filmElement;
  };

  render() {
    const { handleSubmit, handleChange } = this;
    const { query, movies } = this.state;
    console.log(movies);

    return (
      <>
        <form onSubmit={handleSubmit}>
          <input type="text" value={query} onChange={handleChange} />
          <button type="submit">Search</button>
        </form>

        <ul className={styles.filmList}>{this.renderFilmList()}</ul>
      </>
    );
  }
}

export default MoviesPage;

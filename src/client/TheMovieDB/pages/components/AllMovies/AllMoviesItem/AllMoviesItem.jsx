import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './AllMoviesItem.module.scss';

function AllMoviesItem({ films }) {
  const filmItem = films.map(film => {
    const title = film.title ? film.title : film.original_name;
    const newPosterPath = film.poster_path
      ? `https://image.tmdb.org/t/p/w500/${film.poster_path}`
      : 'https://static8.depositphotos.com/1009634/988/v/600/depositphotos_9883921-stock-illustration-no-user-profile-picture.jpg';

    return (
      <li key={film.id} className={styles.filmsItem}>
        <NavLink to={`/movies/${film.id}`}>
          <img src={newPosterPath} alt={title} />
          <h2>{title}</h2>
        </NavLink>
      </li>
    );
  });
  return filmItem;
}

export default AllMoviesItem;

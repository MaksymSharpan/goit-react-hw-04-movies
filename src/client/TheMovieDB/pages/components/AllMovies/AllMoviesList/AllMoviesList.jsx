import React from 'react';
import AllMoviesItem from '../AllMoviesItem';

import styles from './AllMoviesList.module.scss';

function AllMoviesList({ films }) {
  return (
    <ul className={styles.filmList}>
      <AllMoviesItem films={films} />
    </ul>
  );
}

export default AllMoviesList;

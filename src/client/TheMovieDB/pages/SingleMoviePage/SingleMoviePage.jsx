import React from 'react';

import styles from './SingleMoviePage.module.scss';

import ButtonGo from '../../../../shared/ButtonGo';

function SingleMoviePage({ film }) {
  const newPosterPath = film.poster
    ? `https://image.tmdb.org/t/p/w500/${film.poster}`
    : 'https://static8.depositphotos.com/1009634/988/v/600/depositphotos_9883921-stock-illustration-no-user-profile-picture.jpg';
  // console.log(film.genres);
  const genres = film.genres.map(genre => {
    return <li key={genre.id}>{genre.name}</li>;
  });
  return (
    <>
      <ButtonGo />
      <div className={styles.content}>
        <img src={newPosterPath} alt={film.title} />
        <div className={styles.body}>
          <h2>{film.title}</h2>
          <p>Rating: {film.userScore}</p>
          <p>{film.overview}</p>
          <ul>Genres: {genres}</ul>
        </div>
      </div>
    </>
  );
}

export default SingleMoviePage;

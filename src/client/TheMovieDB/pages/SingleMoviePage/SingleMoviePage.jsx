import React from 'react';

import styles from './SingleMoviePage.module.scss';

// import ButtonGo from '../../../../shared/ButtonGo';

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
      {/* <div className={styles.buttonContainer}>
        <ButtonGo />
      </div> */}

      <div className={styles.content}>
        <img className={styles.img} src={newPosterPath} alt={film.title} />
        <div className={styles.body}>
          <h2 className={styles.filmTitle}>{film.title}</h2>
          <p>
            <span className={styles.movieInfoSpan}>Rating: </span>{' '}
            {film.userScore}
          </p>
          <p>{film.overview}</p>
          <ol className={styles.overviewList}>
            <span className={styles.movieInfoSpan}>Genres: </span> {genres}
          </ol>
        </div>
      </div>
    </>
  );
}

export default SingleMoviePage;

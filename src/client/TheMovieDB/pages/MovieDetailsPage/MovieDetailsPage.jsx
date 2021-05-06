import React from 'react';
import { NavLink, Route } from 'react-router-dom';

import { getOneFilm } from '../../components/service/movie-service';

import style from './MovieDetailsPage.module.scss';

import Cast from '../../pages/Cast';
import Reviews from '../../pages/Reviews';
import SingleMoviePage from '../SingleMoviePage/SingleMoviePage';

class MovieDetailsPage extends React.Component {
  state = {
    film: {
      title: '',
      poster: '',
      overview: '',
      genres: [],
      userScore: '',
    },
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({
      loading: true,
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { loading } = this.state;

    if (loading) {
      const { match } = this.props;
      const { movieId } = match.params;
      const filmRequest = getOneFilm(movieId);

      filmRequest
        .then(({ data }) => {
          // const newPosterPath = data.poster_path
          //   ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
          //   : '';
          // console.log(data);
          const filmData = {
            title: data.title,
            poster: data.poster_path,
            overview: data.overview,
            genres: data.genres,
            userScore: data.vote_average,
          };
          this.setState({
            film: filmData,
            loading: false,
          });
        })
        .catch(error => {
          this.setState({
            loading: false,
            error,
          });
        });
    }
  }

  render() {
    const { film } = this.state;
    const { movieId } = this.props.match.params;

    return (
      <>
        <div className={style.container}>
          <SingleMoviePage film={film} />

          <NavLink className={style.link} to={`/movies/${movieId}/cast`}>
            Cast
          </NavLink>
          <NavLink className={style.link} to={`/movies/${movieId}/reviews`}>
            Reviews
          </NavLink>
        </div>

        <Route
          path="/movies/:movieId/cast"
          render={props => <Cast {...props} />}
        />
        <Route
          path="/movies/:movieId/reviews"
          render={props => <Reviews {...props} />}
        />
      </>
    );
  }
}

export default MovieDetailsPage;
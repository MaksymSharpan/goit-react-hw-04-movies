import React from 'react';

import { getOneFilm } from '../../service/movie-service';

class MovieDetailsPage extends React.Component {
  state = {
    film: {
      title: '',
      poster: '',
      body: '',
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
          const newPosterPath = data.poster_path
            ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
            : '';
          const filmData = {
            title: data.title,
            poster: newPosterPath,
            body: data.overview,
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

    return (
      <div>
        <h2>{film.title}</h2>
        <img src={film.poster} alt="" />
        <p>{film.body}</p>
      </div>
    );
  }
}

export default MovieDetailsPage;

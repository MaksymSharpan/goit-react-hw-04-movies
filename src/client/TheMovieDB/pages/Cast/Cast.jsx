import React from 'react';

import { getFilmCast } from '../../components/service/movie-service';

import styles from './Cast.module.scss';

class Cast extends React.Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const { match } = this.props;
    const { movieId } = match.params;

    const filmRequest = getFilmCast(movieId);

    filmRequest.then(({ data }) => {
      // console.log(data);
      this.setState({
        cast: data.cast,
      });
    });
  }

  render() {
    const { cast } = this.state;
    // console.log(cast);

    const castItem = cast.map(item => {
      const newProfilePath =
        item.profile_path !== null
          ? `https://image.tmdb.org/t/p/w500/${item.profile_path}`
          : `https://www.diabetes.ie/wp-content/uploads/2017/02/no-image-available.png`;
      return (
        <li key={item.id} className={styles.castItem}>
          <img
            src={newProfilePath}
            alt={item.name}
            width="100px"
            height="150px"
          />
          <p>{item.name}</p>
        </li>
      );
    });

    return <ul className={styles.castList}>{castItem}</ul>;
  }
}

export default Cast;

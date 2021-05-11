import React from 'react';

import { getFilmReviews } from '../../components/service/movie-service';

import styles from './Reviews.module.scss';

class Reviews extends React.Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const { match } = this.props;
    const { movieId } = match.params;

    const filmRequest = getFilmReviews(movieId);

    filmRequest.then(({ data }) => {
      // console.log(data.results);

      this.setState({
        reviews: data.results,
      });
    });
  }
  render() {
    const { reviews } = this.state;
    // console.log(this.state.reviews);

    const reviewElem = reviews.map(item => {
      return (
        <li key={item.id}>
          <h4>Author: {item.author}</h4>
          <p>{item.content}</p>
        </li>
      );
    });
    return <ul className={styles.reviewsList}>{reviewElem}</ul>;
  }
}

export default Reviews;

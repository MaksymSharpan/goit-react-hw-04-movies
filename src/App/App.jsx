import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from '../client/TheMovieDB/components/Navbar';
import HomePage from '../client/TheMovieDB/pages/HomePage';
import MoviesPage from '../client/TheMovieDB/pages/MoviesPage';
import MovieDetailsPage from '../client/TheMovieDB/pages/MovieDetailsPage';
// import Cast from '../client/TheMovieDB/pages/Cast';
// import Reviews from '../client/TheMovieDB/pages/Reviews';
// import NotFoundPage from '../client/TheMovieDB/components/NotFoundPage';
import routes from '../routes';

import './App.scss';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path={routes.home} exact component={HomePage} />
        <Route path={routes.movies} exact component={MoviesPage} />
        {/* <Route component={NotFoundPage} /> */}
        <Route path={routes.movieDetails} exact component={MovieDetailsPage} />
        <Route path={routes.cast} exact component={MovieDetailsPage} />
        <Route path={routes.reviews} exact component={MovieDetailsPage} />
      </Switch>
    </Router>
  );
}

export default App;

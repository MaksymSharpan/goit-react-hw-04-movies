import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from '../client/TheMovieDB/components/Navbar';
import HomePage from '../client/TheMovieDB/pages/HomePage';
import MoviesPage from '../client/TheMovieDB/pages/MoviesPage';
import MovieDetailsPage from '../client/TheMovieDB/pages/MovieDetailsPage';
// import Cast from '../client/TheMovieDB/pages/Cast';
// import Reviews from '../client/TheMovieDB/pages/Reviews';
// import NotFoundPage from '../client/TheMovieDB/components/NotFoundPage';

import './App.scss';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies" exact component={MoviesPage} />
        {/* <Route component={NotFoundPage} /> */}
        <Route path="/movies/:movieId" exact component={MovieDetailsPage} />
        <Route
          path="/movies/:movieId/cast"
          exact
          component={MovieDetailsPage}
        />
        <Route
          path="/movies/:movieId/reviews"
          exact
          component={MovieDetailsPage}
        />
      </Switch>
    </Router>
  );
}

export default App;

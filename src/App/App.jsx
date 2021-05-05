import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from '../components/Navbar';
import HomePage from '../components/pages/HomePage';
import MoviesPage from '../components/pages/MoviesPage';
import MovieDetailsPage from '../components/pages/MovieDetailsPage';
import Cast from '../components/pages/Cast';
import Reviews from '../components/pages/Reviews';
import NotFoundPage from '../components/NotFoundPage';

import './App.scss';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movies" exact component={MoviesPage} />
        <Route path="/movies/:movieId" exact component={MovieDetailsPage} />
        <Route path="/movies/:movieId/cast" exact component={Cast} />
        <Route path="/movies/:movieId/reviews" exact component={Reviews} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;

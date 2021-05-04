import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from '../components/pages/HomePage';
import MoviesPage from '../components/pages/MoviesPage';
import MovieDetailsPage from '../components/pages/MovieDetailsPage';
import Navbar from '../components/Navbar';
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
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;

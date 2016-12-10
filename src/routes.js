"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var Redirect = Router.Redirect;

var routes = (
  <Route name="app" path="/" handler={require('./components/app')}>
    <DefaultRoute handler={require('./components/homepage')} />
    <Route name="movies" handler={require('./components/movies/moviePage')} />
    <Route name="addMovies" path='movie' handler={require('./components/movies/manageMoviesPage')} />
    <Route name="manageMovies" path='movie/:id' handler={require('./components/movies/manageMoviesPage')} />
    <Route name="about" handler={require('./components/about/aboutPage')} />
    <NotFoundRoute handler={require('./components/404')} />
    <Redirect from='about-us' to='about' />
    <Redirect from='muvies' to='movies' />
    <Redirect from='movies/*' to='movies' />
  </Route>
);

module.exports = routes;

import React from 'react';
import { Router, Route } from 'react-router';
import App from './components/app';
import About from './components/about';

export default function(history) {
  return (
    <Router history={history}>
      <Route path='/' component={App} />
      <Route path='about' component={About} />
    </Router>
  );
}

import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss';

import MoviePage from './pages/MoviePage';

const App = () => {
  return <Route path="/:category?" component={ MoviePage }/>;
};

export default App;

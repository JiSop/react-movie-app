import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import MovieList from './component/MovieList';
import MovieDetail from "./component/MovieDetail";
import Categories from "./component/Categories";

const App = () => {
  return (
    <>
      <Categories/>
      <div className="container">
        <Switch>
          <Route path="/detail/:id" component={ MovieDetail }/>
          <Route path="/:category?" component={ MovieList }/>
        </Switch>
      </div>
    </>
  );
};

export default App;

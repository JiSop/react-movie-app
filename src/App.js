import React, { useEffect, useState } from 'react';
import './App.scss';

import * as api from './lib/api';
import MovieList from "./component/MovieList";
import Categories from "./component/Categories";

function App() {
  return (
    <>
      <Categories />
      <section className="container">
        <MovieList/>
      </section>
    </>
  );
}

export default App;

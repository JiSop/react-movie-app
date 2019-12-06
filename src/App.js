import React, { useCallback, useState } from 'react';
import './App.scss';

import MovieList from "./component/MovieList";
import Categories from "./component/Categories";

function App() {
  const [ category, setCategory ] = useState( 'All' );

  const onSelect = useCallback( category =>
    setCategory( category ), [] );

  return (
    <>
      <Categories
        category={ category }
        onSelect={ onSelect }
      />
      <div className="container">
        <MovieList category={ category }/>
      </div>
    </>
  );
}

export default App;

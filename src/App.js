import React, { useEffect, useState } from 'react';
import './App.scss';

import * as api from './lib/api';
import MovieList from "./component/MovieList";

function App() {
  const [ movieList, setMovieList ] = useState( null );
  const [ loading, setLoading ] = useState( false );

  useEffect( () => {
    const fetchData = async () => {
      setLoading( true );
      try {
        const {
          data: {
            data: { movies }
          }
        } = await api.getMovieList();
        setMovieList( movies );
      } catch (e) {
        console.log( e );
      }
      setLoading( false );
    };
    fetchData();
  }, [] );

  if ( loading ) {
    return (
      <div className="loader">
        <span className="loader-text">Loading...</span>
      </div>
    )
  }
  if ( !movieList ) {
    return null;
  }
  return (
    <div>
      <section className="container">
        <MovieList movieList={movieList}/>
      </section>
    </div>
  );
}

export default App;

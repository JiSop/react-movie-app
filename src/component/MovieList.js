import React, { useEffect, useState } from 'react';
import './MovieList.scss';

import MovieItem from './MovieItem';
import * as api from '../lib/api';

const MovieList = ( { category } ) => {
  const [ movies, setMovies ] = useState( null );
  const [ loading, setLoading ] = useState( false );

  useEffect( () => {
    const fetchData = async () => {
      setLoading( true );
      try {
        const query = category === 'All' ? '' : `genre=${ category }`;
        const {
          data: {
            data: { movies }
          }
        } = await api.getMovieList( query );
        setMovies( movies );
      } catch (e) {
        console.log( e );
      }
      setLoading( false );
    };
    fetchData();
  }, [ category ] );

  if ( loading ) {
    return (
      <div className="loader">
        <span className="loader-text">Loading...</span>
      </div>
    )
  }
  if ( !movies ) {
    return null;
  }
  return (
    <div className="movie-list">
      { movies.map( movie => (
        <MovieItem
          key={ movie.id }
          id={ movie.id }
          title={ movie.title }
          year={ movie.year }
          genres={ movie.genres }
          runtime={ movie.runtime }
          rating={ movie.rating }
          poster={ movie.medium_cover_image }
        />
      ) ) }
    </div>
  );
};

export default MovieList;
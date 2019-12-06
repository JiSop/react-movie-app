import React from 'react';
import './MovieList.scss';
import usePromise from '../lib/usePromise';
import MovieItem from './MovieItem';
import { getMovieList } from '../lib/api';

const MovieList = ( { category } ) => {
  const [ loading, response, error ] = usePromise( () => {
      const query = category === 'All' ? '' : `genre=${ category }`;
      return getMovieList( query );
    }, [ category ]
  );

  if ( loading ) {
    return (
      <div className="loader">
        <span className="loader-text">Loading...</span>
      </div>
    );
  }
  if ( !response ) {
    return null;
  }
  if ( error ) {
    return (
      <div className="loader">
        <span className="error-text">Something Wrong!</span>
      </div>
    );
  }

  const { movies } = response.data.data;

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
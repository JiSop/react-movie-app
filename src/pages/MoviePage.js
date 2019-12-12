import React from 'react';
import MovieList from '../component/MovieList';

const MoviePage = ( { match } ) => {
  const category = match.params.category || 'All';
  return (
    <>
      <MovieList category={ category }/>
    </>
  );
};

export default MoviePage;
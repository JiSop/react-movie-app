import React from 'react';

import Categories from '../component/Categories';
import MovieList from '../component/MovieList';

const MoviePage = ( { match } ) => {
  const category = match.params.category || 'All';
  return (
    <>
      <Categories/>
      <div className="container">
        <MovieList category={ category }/>
      </div>
    </>
  );
};

export default MoviePage;
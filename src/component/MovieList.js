import React from 'react';
import './MovieList.scss';

import MovieItem from "./MovieItem";

const MovieList = ({ movieList }) => {
  return (
    <div className="movie-list">
      { movieList.map( movie => (
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
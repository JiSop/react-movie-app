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
          year={ movie.year }
          title={ movie.title }
          poster={ movie.medium_cover_image }
          genres={ movie.genres }
        />
      ) ) }
    </div>
  );
};

export default MovieList;
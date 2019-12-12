import React from 'react';
import { Link } from 'react-router-dom';
import './MovieItem.scss';

const MovieItem = ( { id, title, year, runtime, rating, poster } ) => {
  return (
    <div className="movie">
      <Link to={ `/detail/${ id }` }>
        <img src={ poster } alt={ title } title={ title }/>
        <div className="movie-data">
          <h3 className="movie-title">{ title }</h3>
          <h5 className="movie-year">{ year }</h5>
          {/*<h5>{ rating }</h5>*/ }
          {/*<h5>{ runtime }min</h5>*/ }
        </div>
      </Link>
    </div>
  );
};

export default MovieItem;
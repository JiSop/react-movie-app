import React from 'react';
import './MovieItem.scss';

const MovieItem = ( { year, title, rating, runtime, genres, poster } ) => {
  return (
    <div className="movie">
      <img src={ poster } alt={ title } title={ title }/>
      <div className="movie-data">
        <h3 className="movie-title">{ title }</h3>
        <h5 className="movie-year">{ year }</h5>
        <h5>{ rating }</h5>
        <h5>{ runtime } min</h5>
        <ul className="movie-genres">
          { genres.map( ( genre, index ) => (
            <li key={ index } className="genres-genre">
              { genre }
            </li>
          ) ) }
        </ul>
      </div>
    </div>
  );
};

export default MovieItem;
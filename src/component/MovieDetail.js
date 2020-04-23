import React from 'react';
import './MovieDetail.scss';
import usePromise from "../lib/usePromise";
import { getMovieDetail } from "../lib/api";

const MovieDetail = ( { match } ) => {
  const id = match.params.id;
  const [ loading, response, error ] = usePromise( () => {
      return getMovieDetail( id );
    }, []
  );

  if ( loading ) {
    return (
      <div className="loader">
        <span className="loader-text">Loading...</span>
      </div>
    );
  }
  if ( !response ) return null;
  if ( error ) {
    return (
      <div className="loader">
        <span className="error-text">Something Wrong!</span>
      </div>
    );
  }
  const { movie } = response.data.data;

  return (
    <div className="movie-detail">
      <div className="detail-head">
        <img src={ movie.medium_cover_image } alt={ movie.title }/>
        <div className="detail-data">
          <h2 className="detail-title">{ movie.title }</h2>
          <h3 className="detail-title">{ movie.year }</h3>
          <span>{ `${ movie.runtime }min` }</span>
          <span>{ movie.rating }</span>
          <span>{ movie.like_count }</span>
          <div className="detail-description">
            <p>
              { movie.description_intro }
            </p>
          </div>
        </div>
      </div>
      {/*<div className="detail-screenshot">*/}
      {/*  <img src={ movie.medium_screenshot_image1 } alt={ `${ movie.title } screenshot1` }/>*/}
      {/*  <img src={ movie.medium_screenshot_image2 } alt={ `${ movie.title } screenshot2` }/>*/}
      {/*  <img src={ movie.medium_screenshot_image3 } alt={ `${ movie.title } screenshot3` }/>*/}
      {/*</div>*/}
      {/*<div className="similar-movies">*/}
      {/*  <img src="https://via.placeholder.com/230x345" alt="movieTitle"/>*/}
      {/*  <img src="https://via.placeholder.com/230x345" alt="movieTitle"/>*/}
      {/*  <img src="https://via.placeholder.com/230x345" alt="movieTitle"/>*/}
      {/*  <img src="https://via.placeholder.com/230x345" alt="movieTitle"/>*/}
      {/*</div>*/}
    </div>
  );
};

export default MovieDetail;
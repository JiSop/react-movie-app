import React, { useEffect, useRef, useState } from 'react';
import './MovieList.scss';
import usePromise from '../lib/usePromise';
import MovieItem from './MovieItem';
import { getMovieList } from '../lib/api';
import useInfiniteScroll from '../lib/useInfiniteScroll';

const MovieList = ( { category } ) => {
  const [ data, setData ] = useState( [] );
  const [ page, setPage ] = useState(2);
  const [ isFetching, setIsFetching ] = useInfiniteScroll( moreData );

  const [ loading, response, error ] = usePromise( () => {
    const query = category === 'All'
      ? `sort_by=rating&page=1`
      : `genre=${ category }&sort_by=rating&order_by=desc&page=1`;
    return getMovieList( query );
    }, [ category ]
  );

  function moreData() {
    const query = category === 'All'
      ? `sort_by=rating&page=${ page }`
      : `genre=${ category }&sort_by=rating&order_by=desc&page=${ page }`;
    getMovieList( query ).then( res => {
      setData( prev => [ ...prev, ...res.data.data.movies ] );
      setPage(prevPage => prevPage + 1 );
      setIsFetching( false );
    } );
  }

  useEffect( () => {
    if ( !response ) return;
    if ( response ) {
      setData( response.data.data.movies );
    }
  }, [ response ] );
  if ( loading ) {
    return (
      <div className="loader">
        <span className="loader-text">Loading...</span>
      </div>
    );
  }
  if ( error ) {
    return (
      <div className="loader">
        <span className="error-text">Something Wrong!</span>
      </div>
    );
  }

  // if ( loading ) {
  //   return (
  //     <div className="loader">
  //       <span className="loader-text">Loading...</span>
  //     </div>
  //   );
  // }
  // if ( !response ) {
  //   return null;
  // }
  // if ( error ) {
  //   return (
  //     <div className="loader">
  //       <span className="error-text">Something Wrong!</span>
  //     </div>
  //   );
  // }

  // const { movies } = response.data.data;

  return (
    <div className="movie-list">
      { data.map( movie => (
        <MovieItem
          key={ movie.id }
          id={ movie.id }
          title={ movie.title }
          year={ movie.year }
          runtime={ movie.runtime }
          rating={ movie.rating }
          poster={ movie.medium_cover_image }
        />
      ) ) }
    </div>
  );
};

export default MovieList;
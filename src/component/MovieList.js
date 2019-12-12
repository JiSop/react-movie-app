import React, { useEffect, useState } from 'react';
import './MovieList.scss';
import { getMovieList } from '../lib/api';
import usePromise from '../lib/usePromise';
import useInfiniteScroll from '../lib/useInfiniteScroll';
import MovieItem from './MovieItem';

const MovieList = ( { match } ) => {
  const category = match.params.category || 'All';
  const [ data, setData ] = useState( [] );
  const [ page, setPage ] = useState( 2 );
  const [ setIsFetching ] = useInfiniteScroll( moreData );

  // 호이스팅 때문에 함수 선언문을 사용
  function moreData() {
    const query = category === 'All'
      ? `sort_by=rating&page=${ page }`
      : `genre=${ category }&sort_by=rating&order_by=desc&page=${ page }`;
    getMovieList( query ).then( res => {
      setData( prevData => [ ...prevData, ...res.data.data.movies ] );
      setPage(prevPage => prevPage + 1 );
      setIsFetching( false );
    } );
  }

  const [ loading, response, error ] = usePromise( () => {
    const query = category === 'All'
      ? `sort_by=rating&page=1`
      : `genre=${ category }&sort_by=rating&order_by=desc&page=1`;
    return getMovieList( query );
    }, [ category ]
  );

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
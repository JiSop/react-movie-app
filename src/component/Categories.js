import React from 'react';
import './Categories.scss';

const genres = [
  'All',
  'Animation',
  'Comedy',
  'Documentary',
  'Fantasy',
  'Horror',
  'Musical',
  'Mystery',
  'Romance',
  'Sci-Fi',
];

const Categories = ( { category, onSelect } ) => {
  return (
    <div className="categories">
      { genres.map( genre => (
        <div
          className={ `category ${ category === genre ? "active" : "" }` }
          key={ genre }
          onClick={ () => onSelect( genre ) }
        >
          { genre }
        </div>
      ) ) }
    </div>
  );
};

export default Categories;
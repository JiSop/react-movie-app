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

const Categories = () => {
  return (
    <div className="categories">
      { genres.map( genre => (
        <div className="categorie" key={ genre }>{ genre }</div>
      ) ) }
    </div>
  );
};

export default Categories;
import React from 'react';
import { NavLink } from 'react-router-dom';
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
        <NavLink
          key={ genre }
          className="category"
          activeClassName="active"
          exact={ genre === 'All' }
          to={ genre === 'All' ? '/' : `/${ genre }` }
        >
          <div>{ genre }</div>
        </NavLink>
      ) ) }
    </div>
  );
};

export default Categories;
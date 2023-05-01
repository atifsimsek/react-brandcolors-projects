import React from 'react';
import { GrSearch } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import { setSearch } from '../Store/future/Search/SearchSlice';

const Search = () => {
  const dispatch = useDispatch();

  return (
    <div className="search">
      <GrSearch className="search-icon" />
      <input
        type="text"
        onChange={(e) => {
          dispatch(setSearch(e.target.value));
        }}
        placeholder="Search Brands"
      />
    </div>
  );
};

export default Search;
